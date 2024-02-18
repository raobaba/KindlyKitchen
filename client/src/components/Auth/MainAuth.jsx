import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import bg from "../../assets/e.jpg";
import "../../index.css";

const MainAuth = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(true);
  const [isSignupClicked, setIsSignupClicked] = useState(true);

  const handleLoginClick = () => {
    setIsLoginClicked(true);
    setIsSignupClicked(false);
  };

  const handleSignupClick = () => {
    setIsLoginClicked(false);
    setIsSignupClicked(true);
  };


  return (
    <>
      <div className="w-[40vw] h-[100vh] absolute"></div>
      <div
        className="ml-[40vw] w-[60vw] h-[100vh] bg-gray-200 absolute overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "-16vw",
        }}
      >
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleSignupClick}>Signup</button>

        {isLoginClicked ? (
          <div
            className={`transition-transform duration-500 transform translate-x-0 ${
              isSignupClicked ? "translate-x-full" : ""
            }`}
          >
            <Login />
          </div>
        ) : (
          <div
            className={`transition-transform duration-500 transform translate-x-0 ${
              isLoginClicked ? "translate-x-full" : ""
            }`}
          >
            <SignUp />
          </div>
        )}
      </div>
    </>
  );
};

export default MainAuth;
