import { useState } from "react";
import Navbar from "./home-components/navbar";
import Sidebar from "./home-components/sidebar";
import Workspace from "./home-components/workspace";

const Home = () => {
    const [sidebarOn,setSidebarOn] = useState(true);
    return ( 
        <div className="home"
            style={{
                display:"flex",
                flexDirection:"column"
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
                <Workspace/>
            </div>
            
        </div>
     );
}
 
export default Home;