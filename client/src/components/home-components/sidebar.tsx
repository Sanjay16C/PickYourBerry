import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();

    return ( 
    <div className="sidebar">
        <div className="list">
            <button id="Text-Style" onClick={() => navigate("/home")}>Chat</button>
            <button id="Text-Style" onClick={() => navigate("/home/documents")}>Documents</button>
            <button id="Text-Style" onClick={() => navigate("/home/settings")}>Settings</button>
        </div>
    </div> 
    );
}
 
export default Sidebar;