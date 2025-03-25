import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import Button from "../components/Button"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL 

const SignUp = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const [showpassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")


  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
    try {
      await axios.post(`${BACKEND_URL}/auth/register`, {
        name: userName,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); 
      } else {
        setError("Something went wrong. Please try again.");
      }
}
  }
  return (
    <>
      <div className = "w-82 h-3/4 mx-auto border border-gray-300 rounded-2xl p-4 my-auto top-50%">
      <form onSubmit={handleSubmit} className='flex flex-col '>
        Name  <input type="text" name="name" placeholder="Enter your name"
        onChange={(e)=>{setUserName(e.target.value)}} required
        className="border p-2 rounded-xl " autoComplete="name"
       />
       <br />
        Email  <input type="email" name="email"
         onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email" required
         className="border p-2 rounded-xl " autoComplete="email"/>
         <br />
<div className="relative flex flex-col">
        Password  <input 
         type={showpassword ? "text" : "password"}
         name="password" 
         onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter your password" 
        className="border p-2 rounded-xl mb-2" autoComplete="new-password"/>
<button  type = "button"
          className="text-white absolute right-4 bottom-4 transform -translate-y-1/2"
            onClick={()=>{
          setShowPassword((prev)=>(!prev))
         }}>
          {showpassword ?  <FaEye  /> :<FaEyeSlash /> }</button></div>
       
        <div><input type="checkbox" name="terms" required/> I accept the terms and conditions</div>
      
       <div>
      <p className='absolute text-red-600 text-xs'>{error}</p></div>
      <br />
       <Button type="submit" text="SignUp " className="p-unset "/>
       
        <p className='mt-4 mb-2'>Already have an account?</p>
        <Link to ="/login"><Button text= "Login"/></Link>
      </form>
    
    </div>
    </>
  )
}

export default SignUp
