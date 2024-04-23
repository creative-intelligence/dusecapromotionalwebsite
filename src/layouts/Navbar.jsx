import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white w-full z-20 h-[70px] start-0 mt-4 mb-6 font-roboto">
      <div className="flex items-center justify-between">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="img\logo.png" className="w-[200px] h-[50px]" alt="Flowbite Logo" />
        </a>

        <div className='flex gap-12  font-outfit'>
          <ul className='md:flex items-center space-x-12 text-xl'>
            <li>Home</li>
            <li>About</li>
            <li>Rides</li>
            <li>Services</li>
          </ul>
          <div>
            <button className='bg-white-150 rounded px-6 py-2.5 text-xl font-medium'>Request a Quote</button>
          </div>

        </div>


      </div>
    </nav>


  );
};

export default Navbar;
