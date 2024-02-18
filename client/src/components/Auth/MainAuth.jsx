import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import bg from "../../assets/e.jpg";
import "../../index.css";
import Routing from "../Router/Routing";
import { Link } from "react-router-dom";

const MainAuth = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(true);

  const handleLoginClick = () => {
    setIsLoginClicked(true);
  };

  const handleSignupClick = () => {
    setIsLoginClicked(false);
  };

  return (
    <>
      <div className="  border-black border-[10px] w-[40vw] h-[100vh] absolute "></div>
      <div
        className="lg:ml-[40vw] lg:w-[60vw] h-[100vh] bg-gray-200  w-screen absolute overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "-16vw",
        }}
      >
        <div className="  gap-6 left-[50%] absolute translate-x-[-50%] top-[50%] translate-y-[-50%]">
          <div className=" mb-2 gap-5 flex -mt-5">
            <Link
              to="/Login"
              className="max-md:mt-[20vw] mt-10 w-20 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </Link>
            <Link
              to="/Signup"
              className="max-md:mt-[20vw] mt-10 w-20 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Signup
            </Link>
          </div>
          <Routing />
        </div>
      </div>
    </>
  );
};

export default MainAuth;
