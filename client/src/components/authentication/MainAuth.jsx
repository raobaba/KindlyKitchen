import React, { useState, useEffect } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import bg from "../../assets/e.jpg";
import "../../index.css";
import Routing from "../routing/Routing";
import { Link } from "react-router-dom";
import "./Auth.css";

const MainAuth = () => {
  const [activeComponent, setActiveComponent] = useState("login");

  const toggleComponent = (component) => {
    setActiveComponent(component);
  };

  useEffect(() => {
    const container = document.getElementById("auth-container");
    if (container) {
      // Set initial opacity to 0 when component mounts
      container.style.opacity = "0";

      // Use setTimeout to allow for the initial render before transitioning to opacity 1
      const timeoutId = setTimeout(() => {
        container.style.opacity = "1";
      }, 10);

      return () => clearTimeout(timeoutId);
    }
  }, [activeComponent]);

  return (
    <>
      <div className="border-black border-[10px] w-[40vw] h-[100vh] absolute"></div>
      <div
        className="lg:ml-[40vw] lg:w-[60vw] h-[100vh] bg-gray-200 w-screen absolute overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "-16vw",
        }}
      >
        <div
          id="auth-container"
          className="gap-6 left-[50%] absolute translate-x-[-50%] top-[50%] translate-y-[-50%]"
        >
          <div className="mb-2 gap-5 flex -mt-5">
            <button
              onClick={() => toggleComponent("login")}
              className={`max-md:mt-[20vw] mt-10 w-20 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${
                activeComponent === "login" ? "bg-blue-600" : ""
              }`}
            >
              Login
            </button>
            <button
              onClick={() => toggleComponent("signup")}
              className={`max-md:mt-[20vw] mt-10 w-20 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${
                activeComponent === "signup" ? "bg-blue-600" : ""
              }`}
            >
              Signup
            </button>
          </div>

          {activeComponent === "login" && <Login />}
          {activeComponent === "signup" && <SignUp />}
        </div>
      </div>
    </>
  );
};

export default MainAuth;
