import React from 'react';
// import "../Styles/Desk.css"

const Desk = () => {
  return (
    <>
      <div className='h-screen  text-black '>
        <div className='w-vw flex bg-gray items-center  '>
          <div >
            <div>
              <h1 className=' block text-7xl  w-[689px] h-[160px] font-semibold' >
                Welcome to

              </h1>
              <h1>
                Just Brethe Kids Care
              </h1>

            </div>


            <p className='w-[704px] h-[216px] '>
              where luxury and accessibility converge in school transportation. Our commitment to inclusivity ensures that every student, including those with disabilities, travels with comfort and dignity. With a fully ADA-compliant fleet and specialized services, we prioritize accessibility features such as wheelchair ramps and trained staff to assist students with varying needs.
            </p>
            <div>
              <div>
                <i>logo</i>
                <div>
                  <p>Download on the</p>
                  <p>App Store</p>

                </div>
              </div>
              <div>
                <i>logo</i>
                <div>
                  <p>GET IT ON</p>
                  <p>Google Play</p>

                </div>
              </div>

            </div>
          </div>
          <div className='absolute right-0 top-28 '>
            <img className='w-[937px] h-[760]' src='img\b2aa0d25d2c3656e4d7f93953fef3a0a.png'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Desk
