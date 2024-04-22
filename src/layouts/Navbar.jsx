import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 h-[70px] top-0 start-0 border-b border-gray-200">
      <div className="flex items-end justify-evenly px-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="img\Just Breathe-01 1.png" className="h-10" alt="Flowbite Logo" />
        </a>
        <ul className='md:flex hidden items-center justify-center gap-4 mt-4 '>
          <li>Home</li>
          <li>About</li>
          <li>Rides</li>
          <li>Services</li>
        </ul>
        <div>
          <button className='bg-D9D9D9'>Request a Quote</button>
        </div>
      </div>
    </nav>


  );
};

export default Navbar;
