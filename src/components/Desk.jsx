import React from "react";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { GrPowerCycle } from "react-icons/gr";
import { HiUsers } from "react-icons/hi2";
import { LuSignalHigh } from "react-icons/lu";
import { IoIosWifi } from "react-icons/io";
import { FaBatteryFull } from "react-icons/fa6";



const Desk = () => {
  return (
    <>
      {/* hero section */}
      <section className="  h-screen mx-auto   text-black flex items-center space-y-5 ">
        <div className="max-w-[50%]    ">
          <h1 className="text-5xl md:text-7xl font-semibold text-secondary  ">
            Welcome to
          </h1>
          <h1 className="text-5xl md:text-7xl font-semibold mb-8  text-span">
            Just Breathe Kids Care
          </h1>
          <p className="text-2xl md:text-xl mb-8 leading-1.5 text-secondary font-outfit pr-8">
            Where luxury and accessibility converge in school transportation.
            Our commitment to inclusivity ensures that every student, including
            those with disabilities, travels with comfort and dignity. With a
            fully ADA-compliant fleet and specialized services, we prioritize
            accessibility features such as wheelchair ramps and trained staff to
            assist students with varying needs.
          </p>
          <div className="flex items-center space-x-5 mt-8">
            <div className="flex items-center justify-center px-4 py-1 rounded space-x-3 space-y-1  text-white bg-secondary cursor-pointer">
              <AiFillApple className="text-5xl" />
              <div>
                <p className="text-xs ">Download on the</p>
                <p className="text-lg font-medium">App Store</p>
              </div>
            </div>
            <div className="flex items-center justify-center px-4 py-1 rounded space-x-2  space-y-1 text-white bg-secondary cursor-pointer ">
              <img src="\img\icons8-google-play-48.png" className="text-3xl" />
              <div>
                <p className="text-xs">GET IT ON</p>
                <p className="text-lg font-medium">Google Play</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[38%] absolute right-0 top-[13rem] ">
          <img
            className="w-full h-screen md:max-h-[760px] object-cover"
            src="img\b2aa0d25d2c3656e4d7f93953fef3a0a.png"
            alt="Desk Image"
          />
        </div>
      </section>

      {/* services section */}

      <section className="w-full h-screen flex mx-auto space-x-12 ">
        <div className="w-[50%] space-y-8 mt-16" >
          <h1 className=" text-4xl font-semibold" >
            Experience the pinnacle of comfort with our meticulously maintained
          </h1>

          <p className="font-normal text-xl font-roboto text-paragraph ">
            Vehicles boasting plush seating, climate control, and spacious
            interiors. Parents can have peace of mind with our GPS tracking
            system, allowing them to know their child's location at all times.
            Additionally, our vans are equipped with cameras, providing
            real-time footage for parents to see their child during the journey
          </p>
          <h1 className=" text-4xl font-semibold pr-8 ">
            For added convenience, our vans are equipped with onboard WiFi
          </h1>
          <p className="font-normal text-xl font-roboto  text-paragraph pr-20 ">
            Enabling students to access devices and even start their homework
            during the commute. Safety is paramount, with our vehicles
            undergoing regular inspections and manned by trained drivers
            dedicated to prioritizing the well-being of every passenger.
          </p>
          <div className="flex  justify-evenly space-x-5  ">
            <div className="">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 mb-5">
                <RiComputerLine className="text-white text-3xl" />
              </div>
              <h2 className="font-bold text-xl mb-2" >GPS Tracking System</h2>
              <p className=" text-base font-normal">
                our GPS tracking system, allowing them to know their child's
                location at all times
              </p>
            </div>
            <div className="pr-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-green-200 mx-4 mb-5">
                <GrPowerCycle className="text-white text-3xl" />
              </div>
              <h2 className="font-bold text-xl mb-2">CCTV Vans</h2>
              <p className="text-base font-normal">
                our vans are equipped with cameras, providing real-time footage
                for parents to see their child during the journey
              </p>
            </div>
            <div className="">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-300 mb-5">
                <HiUsers className="text-white text-3xl" />
              </div>
              <h2 className="font-bold text-xl  mb-2">Safety is Paramount</h2>
              <p className="text-base font-normal" >
                With our vehicles undergoing regular inspections and manned by
                trained drivers
              </p>
            </div>
          </div>
        </div>

        <div className="w-[48%] h-[805px] relative items-center pt-4 pl-4 ">
          <div className="w-20 h-20 -z-10 bg-secondary absolute top-0 left-0"></div>
          <div className="w-20 h-20 -z-10 bg-secondary absolute bottom-0 right-0"></div>
          <img className="z-20  h-[785px]" src="img/Rectangle 110538.png" alt="" />
        </div>
      </section>


      {/* Why US */}

      <section className="w-full h-full bg-secondary ">
        {/* <div className="w-[1200px] h-[562px]"></div> */}
        <div>
          h1

        </div>



      </section>

      {/* Download App */}

      <section className="w-full    " >
        <div className=" w-[1200px] h-[745.8px] mx-auto  bg-slate-100 text-black relative  ">

          <h1 className="text-center text-[44px] font-roboto font-black	" >Download App today!</h1>
          <p className="text-center font-roboto text-lg ">Download app for Android today — it's free.</p>


          <div className="flex justify-center align-center space-x-16  mt-16 ">
            <div className="w-[556px] h-[584.8px] rounded-2xl  border-2 border-blue-600 relative ">
              <h1 className="text-4xl">Left</h1>
              <div className="ml-10">
              <h1 className="font-bold text-3xl ">
                Android
              </h1>
              <p className="text-paragraph">Download App for Android  — it's free.</p>
               </div>
              
              <div className="flex">
                <IoLogoGooglePlaystore />
                <p>Download For Android</p>
              </div>
              <div className="w-[447px] h-[360px] left-[3.4rem] bg-white rounded-2xl  border-2 border-gray-600 absolute bottom-0">
                <div className="flex justify-between ">
                  <p>9:41 </p>
                  <div className="flex">
                    <LuSignalHigh />
                    <IoIosWifi />
                    <FaBatteryFull />
                  </div>
                </div>

                <img src="\img\Just Breathe-01 1.png">

                </img>

              </div>

            </div>

            <div className=" w-[556px] h-[584.8px] border-2 border-rose-500 relative ">
              <h1 className="text-4xl">Right</h1>

              <div >
                <h1 className="font-bold text-4xl ">
                  IOS
                </h1>
                <p>Download App for IOS today  — it's free.</p>
                <div className="flex">
                  <AiFillApple />
                  Download For IOS
                </div>
              </div>


              <div>
                <div>
                  <p>9:41 </p>
                  <div className="absolute">
                    <LuSignalHigh />
                    <IoIosWifi />
                    <FaBatteryFull />
                  </div>
                </div>

                <img src="\img\Just Breathe-01 1.png">

                </img>

              </div>
            </div>

          </div>



        </div>


      </section>

    </>
  );
};

export default Desk;
