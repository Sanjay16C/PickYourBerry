import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../config/postgres.ts";

const signup = async(req,res) =>{
    try {
        const {username,email,password} = req.body;
        if(!username || !email || !password) return res.status(400).json({
            message : "All fields are required"
        });
        const exists = await pool.query(
            "SELECT id FROM users WHERE email=$1",
            [email]
        );
        if(exists.rows.length>0) return res.status(400).json({
            message : "User Already exists"
        });
        const passwordHash = await bcrypt.hash(password,14);
        const result = await pool.query(
            `
            INSERT INTO users(username,email,password_hash)
            VALUES($1,$2,$3)
            RETURNING id,username,email
            `,
            [username,email,passwordHash]
        );
        return res.status(201).json({
            message : "User created successfully" , user : result.rows[0]
        })

    } catch (error) {
        console.error("Signup Error",error);
        res.status(500).json({
            message : "Internal server error" , error
        });
    }
}

const login = async(req,res) =>{
    try {
        const {email,password} = req.body;
        if(!email || !password) return res.status(400).json({
            message : "All fields are required"
        })
        const user = await pool.query(
            "SELECT * FROM users WHERE email=$1",
            [email]
        );
        if(user.rows.length===0) return res.status(401).json({
            message : "Invalid Credentials"
        });
        const isMatch = await bcrypt.compare(password,user.rows[0].password_hash);
        if(!user || !isMatch) return res.status(401).json({
            message : "Invalid Credentials"
        });
        const accessToken = jwt.sign(
            {id:user.rows[0].id},
            process.env.JWT_SECRET,
            {expiresIn:"10m"}
        );
        res.status(200).json({
            message : "Logged In successfully" , accessToken
        })

    } catch (error) {
        console.error("Signup Error",error);
        res.status(500).json({
            message : "Internal server error" , error
        });
    }
}


export {
    signup,
    login
}