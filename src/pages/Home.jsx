import React from 'react';
import Navbar from '../layouts/Navbar';


const Home = () => {
  return (
    <>
      <Navbar />
      <section className="Welcome">
        <div className='box'>
          <div className='content'>
            <h1>
              <span>
                Welcome to
              </span>

              Just Brethe Kids Care
            </h1>
            <p>where luxury and accessibility converge in school transportation. Our commitment to inclusivity ensures that every student, including those with disabilities, travels with comfort and dignity. With a fully ADA-compliant fleet and specialized services, we prioritize accessibility features such as wheelchair ramps and trained staff to assist students with varying needs.</p>
            <div className='Social'>
              <div className='btn'>

              </div>
              <div className='btn'>

              </div>
            </div>
          </div>

          <div className='phone'>
            <img src='img\04_2M- Mobile Mockup Social Media 1.png'>

            </img>
          </div>
        </div>

      </section>


    </>

  )
}

export default Home
