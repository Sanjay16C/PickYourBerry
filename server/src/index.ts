import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});

import app from "./app.ts";
import { connectPostgres } from "./config/postgres.ts";



const startServer = async() =>{
    try {
        await connectPostgres();
        const PORT = process.env.PORT || 8000;
        app.listen(PORT,()=>{
            console.log(`Server running on Port : ${PORT}`);
        });
    } catch (error) {
        console.error("Server failed to run:", error);
        process.exit(1);
    }
}


startServer();