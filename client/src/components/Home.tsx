import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./home-components/navbar";
import Sidebar from "./home-components/sidebar";

const Home = () => {
    const [sidebarOn,setSidebarOn] = useState(true);
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
                {sidebarOn && <Sidebar/>}
                <Outlet/>
            </div>
            
        </div>
     );
}
 
export default Home;