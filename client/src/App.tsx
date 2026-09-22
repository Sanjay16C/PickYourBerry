import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ProtectedRoute from "./api/Protected_Route";
import NotFound from "./components/NotFound";
import Workspace from "./components/home-components/workspace"; 
import Documents from "./components/home-components/Documents"; 
import Settings from "./components/home-components/Settings"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
               <Home />
            </ProtectedRoute>
          } 
        >
          <Route index element={<Workspace />} />
          <Route path="documents" element={<Documents />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
