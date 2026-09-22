import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ProtectedRoute from "./api/Protected_Route";
import NotFound from "./components/NotFound";
import Chat from "./pages/chat";
import Documents from "./pages/documents";
import Settings from "./pages/settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home/:userId" element={
          <ProtectedRoute>
             <Home />
          </ProtectedRoute>
          }>
            <Route index element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            } />
            <Route path="/home/:userId/documents" element={
              <ProtectedRoute>
                <Documents />
              </ProtectedRoute>
            } />
            <Route path="/home/:userId/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
