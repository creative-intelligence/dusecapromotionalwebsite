import React from "react";

const Bio = () => {
  return (
    <>
      {/* story section */}

      <section className=" w-full flex mx-auto space-x-12 bg-secondary mt-8">
        <div className="w-full lg:w-[60%] space-y-8 mt-16"></div>
        <div className="w-[48%] h-[805px] relative lg:block hidden"></div>
      </section>

      {/* why choose our app */}
      <section className="container h-auto my-24 font-roboto ">
        <div className="mx-16 space-y-4">
          <h1 className="text-5xl font-black font-roboto text-center">
            Why Choose Our App
          </h1>
          <p className="text-center text-lg ">
            The full monty spiffing good time no biggie cack grub fantastic.
          </p>
          <div className="flex justify-evenly items-center flex-wrap space-y-6  ">
            <div className="w-[276px] h-[325px] flex flex-col justify-center items-center  space-y-3">
              <img src="img/1st.png" alt="" className="" />
              <p className="font-bold text-[20px]">Easy to use</p>
              <p className="text-center text-base">
                Mucker plastered bugger all mate morish are.
              </p>
              <p className="font-medium text-sm">Read More</p>
            </div>
            <div className="w-[276px] h-[325px] flex flex-col justify-center items-center space-y-3 bg-slate-100">
              <img src="img\2nddiv.icon (1).png" alt="" className="" />
              <p className="font-bold text-[20px]">User Friendly</p>
              <p className="text-center text-base">
                Mucker plastered bugger all mate morish are.
              </p>
              <p className="font-medium text-sm">Read More</p>
            </div>
            <div className="w-[276px] h-[325px] flex flex-col justify-center items-center space-y-3">
              <img src="img/3rddiv.icon (1).png" alt="" className="" />
              <p className="font-bold text-[20px]">Fully Functional</p>
              <p className="text-center text-base">
                Mucker plastered bugger all mate morish are.
              </p>
              <p className="font-medium text-sm">Read More</p>
            </div>
            <div className="w-[276px] h-[325px] flex flex-col justify-center items-center space-y-3 bg-slate-50">
              <img src="img/4th.icon (1).png" alt="" className="" />
              <p className="font-bold text-[20px]">Secured Protocol</p>
              <p className="text-center text-base">
                Mucker plastered bugger all mate morish are.
              </p>
              <p className="font-medium text-sm">Read More</p>
            </div>
          </div>
        </div>
      </section>

      {/* why families choose us */}

      <section className=" w-full   bg-secondary py-16  ">
        
        <div className=" container  mx-auto  text-white flex  gap-12  ">
          <div className=" lg:w-[80%] h-full py-12    ">
          <h1 className="text-5xl font-black">Why should families choose us</h1>
            <div className="pl-10">
              <ul className="list-disc " >
                <li className="text-2xl font-normal" >
                  Specially designed vehicles with ramps: Ensuring accessibility
                  for passengers with mobility challenges.
                </li>

                <li className="text-2xl font-normal">
                  Secure seating: Prioritizing safety during travel for all
                  passengers, with options for car seats and booster seats upon
                  request.
                </li>

                <li className="text-2xl font-normal">
                  Luxurious leather seats: Enhancing comfort and providing a
                  premium feel throughout the journey.
                </li>

                <li className="text-2xl font-normal">
                  Onboard entertainment: Offering personalized entertainment
                  options with headphones provided for each seat, ensuring a
                  customized experience for passengers
                </li>

                <li className="text-2xl font-normal">
                  GPS tracking: Providing real-time location tracking of the
                  bus, ensuring safety and allowing for easy monitoring of the
                  journey's progress.
                </li>

                <li className="text-2xl font-normal">
                  Onboard cameras: Enhancing security with cameras onboard to
                  monitor passengers, particularly children, ensuring their
                  safety and well-being throughout the ride.
                </li>

                <li className="text-2xl font-normal">
                  WiFi on board: Offering WiFi connectivity to passengers,
                  allowing them to stay connected and productive during the
                  journey.
                </li>

                <li className="text-2xl font-normal">
                  Easy contact with driver: Facilitating communication with the
                  driver through a dedicated app and providing the cell phone
                  number of the driver for direct contact, ensuring convenience
                  and responsiveness for passengers.
                </li>

                <li className="text-2xl font-normal">
                  Climate control: Maintaining a comfortable temperature inside
                  the van, regardless of external conditions.
                </li>

                <li className="text-2xl font-normal">
                  Refreshment options: Providing snacks and beverages to keep
                  passengers refreshed during the journey.
                </li>

                <li className="text-2xl font-normal">
                  Professional and compassionate staff: Trained individuals who
                  offer support and companionship throughout the journey,
                  ensuring a pleasant and stress-free experience for passengers.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[30%] h-auto relative lg:block hidden mt-8">
            <img src="img/Dashboard.png"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
