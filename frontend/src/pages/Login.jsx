import React from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useState, useContext } from "react";
import Button from "../components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const success = await login(email, password);
      if (success) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message ||  "Check Creditionals");
    }
  };

  return (
    <>
      <div className="w-80 h-fit bg-gray-800 text-center  border border-gray-400 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="p-4 pb-2 bg-gray-800 rounded-lg shadow-md "
        >
          <h1 className="bg-gray-900 p-2 text-center">
            Please Login to continue.
          </h1>

          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className=" w-full border border-gray-400 p-2 "
            required
            autoComplete="email"
          />
          <br />
          <br />
         <div className="relative">
            <input
              type={showpassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className=" w-full border border-gray-400 p-2 "
              required
              autoComplete="current-password"
            />
            <button
             type = "button"
          className="text-red-900 absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={()=>{
          setShowPassword((prev)=>(!prev))
         }}>
          {showpassword ?  <FaEye  /> :<FaEyeSlash /> }
         </button>
         </div>
         

          <p className="absolute text-red-700 ">{error}</p>

          <br />
          <Button
            type="submit"
            text="Login"
            className=" w-full p-1  my-2 text-base"
          />
        </form>

        <p className="pb-2">Forgot Password?</p>
      </div>
    </>
  );
};

export default Login;
