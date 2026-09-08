
const Sidebar = () => {
    return ( 
    <div className="sidebar">
        <div className="list"
        style={{
            display: "flex",
            flexDirection: "column"
        }}
        >
            <button>Chat</button>
            <button>Documents</button>
            <button>Settings</button>
        </div>
    </div> 
    );
}
 
export default Sidebar;