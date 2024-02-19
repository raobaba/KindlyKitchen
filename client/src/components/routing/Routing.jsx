import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../authentication/Login";
import SignUp from "../authentication/SignUp";
import Home from "../Home/Home";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </>
  );
};

export default Routing;
