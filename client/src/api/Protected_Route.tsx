import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface Protected_Route_Props{
    children : ReactElement;
}

const ProtectedRoute = ({children}:Protected_Route_Props) => {
    
    const token = localStorage.getItem("accessToken");
    if(!token) return <Navigate to="/" />

    return ( 
        children
     );
}
 
export default ProtectedRoute;