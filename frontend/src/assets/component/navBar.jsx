import React, { useState } from 'react';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 return (
    <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Flowtrail UI</a>
          <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setIsOpen(!isOpen)}>
            {/* SVG for menu icon */}
          </button>
        </div>
        <nav className={`flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row ${isOpen ? 'flex' : 'hidden'}`}>
          {/* Navigation links */}
        </nav>
      </div>
    </div>
 );
};

export default Navbar;
