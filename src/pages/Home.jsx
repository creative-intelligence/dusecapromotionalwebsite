import React from 'react';
import Navbar from '../layouts/Navbar';
import Desk from '../components/Desk';
// import "../Styles/Home.css"


const Home = () => {
  return (
    <>
      <div className='w-full lg:px-8 px-4 font-roboto'>
        <div className='max-w-screen-2xl mx-auto'>
          <Navbar />
          <Desk />
        </div>
      </div>

    </>



  )
}

export default Home
