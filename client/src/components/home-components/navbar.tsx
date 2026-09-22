import ham from "../../assets/ham.png";
import "./navbar.css";
interface NavbarProps{
    sidebarOn : boolean,
    setSidebarOn : (value : boolean) => void
}
const Navbar = ({sidebarOn,setSidebarOn} : NavbarProps) => {
    return ( 
        <div className="navbar">
            <div className="left-navbar">
                <button className="navbar-menu-button"
                    onClick={()=>{
                        setSidebarOn(!sidebarOn);
                        console.log(!sidebarOn);
                    }
<<<<<<< HEAD
                    
                }
=======
                }
>>>>>>> c66770f1a96166baf8374177604c57707a4ac9a3
                >
                    <div className="ham-btn-img">
                        <img src={ham} alt={"Toggle"} />
                    </div>
                    
                </button>
                <h1>PickyourBerry</h1>
            </div>
            
            
            <button>Logout</button>
        </div>
     );
}
export default Navbar;