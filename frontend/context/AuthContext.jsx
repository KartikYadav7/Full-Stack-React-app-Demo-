import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
      console.error("Failed to parse stored user:", e);
      localStorage.removeItem("user");
    }}
  }, []);

  const login = async (email, password) => {
    try {
        const res = await axios.post(`${BACKEND_URL}/auth/login`, {
            email,
            password,
        });

        if (res.data.success === false) {
          throw new Error(res.data.message || "Email Not Found");
        }
        if (!res.data?.token) {
            throw new Error("Server response missing token");
        }
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);
        return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message ||   "Login failed.");
    }
      
};

  const logout = () => {
     
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user ,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
