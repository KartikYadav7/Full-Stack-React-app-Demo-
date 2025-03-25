import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Home = () => {
  return (
    <>
      <h1 className="text-7xl font-thin p-4 ">Welcome to Home Page</h1>
      <div className="flex flex-col  gap-4 items-center py-12">
        <Link to="login">
          <Button text="Login" />
        </Link>
        <Link to="SignUp">
          <Button text="SignUp" />
        </Link>
      </div>
    </>
  );
};

export default Home;
