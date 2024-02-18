import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import bg from '../../assets/e.jpg'
const MainAuth = () => {
  return (
    <>
      <div className="w-[40vw] h-[100vh] absolute"></div>
      <div className="ml-[40vw] w-[60vw] h-[100vh] bg-gray-200 absolute" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover"}}>
        {/* <Login/> */}
        <SignUp/>
      </div>
    </>
  );
};

export default MainAuth;
