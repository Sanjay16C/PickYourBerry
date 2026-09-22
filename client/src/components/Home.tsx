import { useState } from "react";
import { NavLink,Outlet,useLocation} from "react-router-dom";
import Navbar from "./home-components/navbar";


const Home = () => {
    const [sidebarOn,setSidebarOn] = useState(true);
    const location = useLocation();
    const currentPage = location.pathname.split("/")[3] || "chat";

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
                <div className="sidebar">
                    {sidebarOn && sidebarList.map((li)=>{
                        return (
                        <NavLink
                            key={li.name}
                            to={li.path}
                            className={ (isActive) =>
                                isActive ? "sidebarbtn-active" : "sidebarbtn" 
                            }
                        >
                            {li.name}
                        </NavLink>
                        )
                    })}
                </div>
                
                <div className="page-content">
                    <Outlet/>
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;