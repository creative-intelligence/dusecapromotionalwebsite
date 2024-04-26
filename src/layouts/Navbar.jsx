import React, { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white w-full z-20 h-[70px] start-0 mt-4 mb-6 font-roboto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="img\logo.png" className="w-[200px] h-[50px]" alt="Flowbite Logo" />
          </a>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-500 hover:text-black focus:text-black focus:outline-none"
            >
              <RiMenu3Line className="h-6 w-6" />
            </button>
          </div>

          <div className={`md:flex flex-col md:flex-row md:items-center md:space-x-12 text-xl ${showMenu ? 'block' : 'hidden'}`}>
            <ul className="md:flex items-center space-x-12">
              <li>Home</li>
              <li>About</li>
              <li>Rides</li>
              <li>Services</li>
            </ul>
            <div>
              <button className="bg-primary rounded px-6 py-2.5 text-xl font-medium">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
