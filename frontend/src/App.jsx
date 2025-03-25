import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "./components/Home";
import Login from "./pages/Login";
import ProtectedRoute from "../context/ProtectedRoute";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="bg-gray-900 min-h-screen text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
