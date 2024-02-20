import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline, IoNotificationsSharp } from "react-icons/io5";

function TopNavbar() {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationHover = () => {
    setShowNotification(true);
  };

  const handleNotificationLeave = () => {
    setShowNotification(false);
  };
  return (
    <div className="flex justify-between items-center p-3">
      <div className="w-11/12 m-auto flex justify-between items-center p-2">
        <div>
          <h4 className="text-lg font-bold">LearnSphere</h4>
        </div>
        <div className="border w-7/12 justify-between rounded-3xl p-1 flex">
          <div className="flex items-center rounded-3xl ml-4">
            <select className="p-2" name="" id="">
              <option value="">All Categories</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
          </div>
          <div className="flex items-center w-8/12">
            <input
              className="p-2 w-full outline-none"
              type="text"
              placeholder="Search Your Courses here..."
            />
          </div>
          <div className="items-center flex bg-lime-500 px-1 rounded-3xl hover:bg-blue-700 transition duration-300">
            <IoSearchOutline className="m-1 " />
            <button className="p-2 ">Search</button>
          </div>
        </div>
        <div className="text-3xl relative">
          <IoNotificationsSharp
            onMouseEnter={handleNotificationHover}
            onMouseLeave={handleNotificationLeave}
          />
          {showNotification && (
            <div className="absolute bg-white p-2 rounded shadow-md">
              <p className="text-center">Your Notification</p>
            </div>
          )}
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition duration-300">
            <Link to="/Login">Login</Link>
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-3xl hover:bg-green-700 transition duration-300">
            <Link to="/Signup">SignUp</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
