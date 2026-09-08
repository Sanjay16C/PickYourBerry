import ham from "../../assets/ham.png";

interface NavbarProps{
    sidebarOn : boolean,
    setSidebarOn : (value : boolean) => void
}

const Navbar = ({sidebarOn,setSidebarOn} : NavbarProps) => {
    return ( 
        <div className="navbar"
            style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between"
            }}
        >
            <div className="left-navbar"
                style={{
                    display:"flex",
                    flexDirection:"row"
                }}
            >
                <button 
                    onClick={()=>{
                        setSidebarOn(!sidebarOn);
                        console.log(!sidebarOn);
                    }
                }
                >
                    <div className="ham-btn-img"
                        style={{
                            maxWidth:"100%",
                            height:"100%",
                            objectFit:"contain"
                        }}
                    >
                        <img src={ham} alt={"Toggle"}
                            style={{
                                maxWidth:"5%",
                                height:"auto",
                                background:"transparent",
                                border:"none"
                            }}
                        />
                    </div>
                    
                </button>
                <h1>PickyourBerry</h1>
            </div>
            
            <div className="sliding-btn">
                <button>Chat</button>
                <button>Voice</button>
            </div>
            <button>Logout</button>
        </div>
     );
}
 
export default Navbar;