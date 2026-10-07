import { useState } from "react";
import Navbar from "./home-components/navbar";
import { Outlet, useLocation, useNavigate,NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const [sidebarOn,setSidebarOn] = useState(true);
    const location = useLocation();
    const [userId,setUserId] = useState(0);
    const currentPage = location.pathname.split("/")[3] || "chat";
    const navigate = useNavigate();
    const sidebarList = [
        {
            name : "Chat",
            path : ""
        },
        {
            name : "Documents",
            path : "documents"
        },
        {
            name : "Settings",
            path: "settings"
        }
    ];

    return ( 
        <div className="home"
            style={{
                display:"flex",
                flexDirection:"column",
                width:"100%",
                height:"100%"
            }}
        >
            
            <Navbar sidebarOn={sidebarOn} setSidebarOn={setSidebarOn} />
            <div className="below-navbar"
                style={{
                    display:"flex",
                    flexDirection:"row"
                }}
            >
                {sidebarOn && 
                    <div className="sidebar">
                        {sidebarOn && sidebarList.map((li)=>{
                        return (
                        <NavLink
                            key={li.name}
                            to={li.path}
                            end={li.path===""}
                            className={({ isActive }) =>
                                isActive ? "sidebarbtn-active" : "sidebarbtn"
                            }
                        >
                            {li.name}
                        </NavLink>
                        )
                    })}
                    </div>
                }
                <Outlet />
            </div>
        </div>
     );
}
 
export default Home;