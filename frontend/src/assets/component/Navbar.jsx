import { useState } from "react";
import React from "react";

function Navbar() {
  const handleConnect = () => {
    console.log("Connect button clicked");
    // Add your logic here
  };
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800 w-full">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 font-roboto">PAYZING</h1>
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <button
              type="button"
              onClick={handleConnect}
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
