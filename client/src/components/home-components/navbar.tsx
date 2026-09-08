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
                    style={{
                        border:"none",
                        background:"transparent"
                    }}
                    onClick={()=>{
                        setSidebarOn(!sidebarOn);
                        console.log(!sidebarOn);
                    }
                    
                }
                >
                    <div className="ham-btn-img"
                        style={{
                           padding:"0",
                           border:"none",
                           background:"transparent",
                           lineHeight:"0"
                        }}
                    >
                        <img src={ham} alt={"Toggle"}
                            style={{
                                display:"block",
                                height:"auto",
                                width:"min(8vw,32px)",
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