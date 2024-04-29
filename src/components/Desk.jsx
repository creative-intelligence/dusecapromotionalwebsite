import { AiFillApple } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { GrPowerCycle } from "react-icons/gr";
import { HiUsers } from "react-icons/hi2";

const Desk = () => {
  return (
    <>
      {/* hero section */}
      <div className="bg-[#EAEFF4] w-full">
        <section className="container  h-[40rem] md:h-[48rem] text-black flex justify-between items-center space-y-5 py-32">
          <div className="lg:max-w-[50%] w-full">
            <h1 className="text-5xl md:text-7xl font-semibold text-secondary">
              Welcome to
            </h1>
            <h1 className="text-4xl md:text-7xl font-semibold mb-8  text-span">
              Just Breathe Kids Care
            </h1>
            <p className="text-xl md:text-xl mb-8 leading-1.5 text-secondary font-outfit pr-8">
              Where luxury and accessibility converge in school transportation.
              Our commitment to inclusivity ensures that every student,
              includinz those with disabilities, travels with comfort and
              dignity. With a fully ADA-compliant fleet and specialized
              services, we prioritize accessibility features such as wheelchair
              ramps and trained staff to assist students with varying needs.
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
                <img
                  src="\img\icons8-google-play-48.png"
                  className="text-3xl"
                />
                <div>
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-lg font-medium">Google Play</p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-[15rem] lg:block hidden">
            <img
              className="w-full h-screen md:max-h-[760px] object-cover -mt-6"
              src="img\b2aa0d25d2c3656e4d7f93953fef3a0a.png"
              alt="Desk Image"
            />
          </div>
        </section>
      </div>

      {/* services section */}

      <div className="py-20 md:py-32 mb-5">
        <section className="container w-full flex mx-auto space-x-12">
          <div className="w-full lg:w-[60%] space-y-8 mt-16">
            <h1 className=" text-4xl font-semibold">
              Experience the pinnacle of comfort with our meticulously
              maintained
            </h1>

            <p className="font-normal text-base font-roboto text-paragraph">
              Vehicles boasting plush seating, climate control, and spacious
              interiors. Parents can have peace of mind with our GPS tracking
              system, allowing them to know their child{"'"}s location at all
              times. Additionally, our vans are equipped with cameras, providing
              real-time footage for parents to see their child during the
              journey
            </p>
            <h1 className=" text-4xl font-semibold pr-8 ">
              For added convenience, our vans are equipped with onboard WiFi
            </h1>
            <p className="font-normal text-base font-roboto  text-paragraph pr-20 ">
              Enabling students to access devices and even start their homework
              during the commute. Safety is paramount, with our vehicles
              undergoing regular inspections and manned by trained drivers
              dedicated to prioritizing the well-being of every passenger.
            </p>
            <div className="flex justify-start items-start flex-wrap w-full">
              <div className="sm:mr-6 my-2 sm:w-44 w-full">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 mb-5">
                  <RiComputerLine className="text-white text-3xl" />
                </div>
                <h2 className="font-bold text-lg mb-2">GPS Tracking System</h2>
                <p className=" text-sm font-normal">
                  our GPS tracking system, allowing them to know their child
                  {"'s"}s location at all times
                </p>
              </div>
              <div className="sm:mr-6 my-2 sm:w-44 w-full">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-green-200 mb-5">
                  <GrPowerCycle className="text-white text-3xl" />
                </div>
                <h2 className="font-bold text-lg mb-2">CCTV Vans</h2>
                <p className="text-sm font-normal">
                  our vans are equipped with cameras, providing real-time
                  footage for parents to see their child during the journey
                </p>
              </div>
              <div className="sm:mr-6 my-2 sm:w-44 w-full">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-300 mb-5">
                  <HiUsers className="text-white text-3xl" />
                </div>
                <h2 className="font-bold text-lg  mb-2">Safety is Paramount</h2>
                <p className="text-sm font-normal">
                  With our vehicles undergoing regular inspections and manned by
                  trained drivers
                </p>
              </div>
            </div>
          </div>
          <div className="w-[48%] h-[805px] relative lg:block hidden">
            <div className="w-20 h-20 -z-10  bg-secondary absolute top-0 left-0"></div>
            <div className="w-20 h-20 -z-10 bg-secondary absolute bottom-0 right-0"></div>
            <img
              className="z-20 h-[790px] pt-4"
              src="img/Rectangle 110538.png"
              alt=""
            />
          </div>
        </section>
      </div>

      {/* Why US */}

      <section className="w-full h-full bg-secondary py-20 text-white mb-16">
        <div className="container">
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold">
              Why Choose Kids On The Go USA
            </h1>
            <p>
              I am eager to contribute to a more inclusive world where every
              child
              {"'"}s journey is guided by boundless possibilities and inclusion.
            </p>
            <div className="pt-10 flex justify-start items-start flex-wrap lg:w-[70%] w-full">
              <div className="space-y-2 md:w-64 sm:w-44 w-full sm:mr-4 md:mr-10 mr-0 my-2">
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 23C0 10.5736 10.0736 0.5 22.5 0.5C37.6878 0.5 50 12.8122 50 28V31.9434C50 42.4681 41.4681 51 30.9434 51H12.5C5.59644 51 0 45.4036 0 38.5V23Z"
                    fill="#F1F7FE"
                  />
                  <path
                    d="M23.5469 24.6406V27.1016C23.5469 28.1693 23.4329 29.0905 23.2051 29.8652C22.9772 30.6335 22.6484 31.265 22.2188 31.7598C21.7956 32.248 21.291 32.6094 20.7051 32.8438C20.1191 33.0781 19.4681 33.1953 18.752 33.1953C18.179 33.1953 17.6452 33.1237 17.1504 32.9805C16.6556 32.8307 16.2096 32.5996 15.8125 32.2871C15.4219 31.9746 15.0833 31.5807 14.7969 31.1055C14.5169 30.6237 14.3021 30.0508 14.1523 29.3867C14.0026 28.7227 13.9277 27.9609 13.9277 27.1016V24.6406C13.9277 23.5729 14.0417 22.6582 14.2695 21.8965C14.5039 21.1283 14.8327 20.5 15.2559 20.0117C15.6855 19.5234 16.1934 19.1654 16.7793 18.9375C17.3652 18.7031 18.0163 18.5859 18.7324 18.5859C19.3053 18.5859 19.8359 18.6608 20.3242 18.8105C20.819 18.9538 21.265 19.1784 21.6621 19.4844C22.0592 19.7904 22.3978 20.1842 22.6777 20.666C22.9577 21.1413 23.1725 21.7109 23.3223 22.375C23.472 23.0326 23.5469 23.7878 23.5469 24.6406ZM20.7246 27.4727V24.2598C20.7246 23.7454 20.6953 23.2962 20.6367 22.9121C20.5846 22.528 20.5033 22.2025 20.3926 21.9355C20.2819 21.6621 20.1452 21.4408 19.9824 21.2715C19.8197 21.1022 19.6341 20.9785 19.4258 20.9004C19.2174 20.8223 18.9863 20.7832 18.7324 20.7832C18.4134 20.7832 18.1302 20.8451 17.8828 20.9688C17.6419 21.0924 17.4368 21.291 17.2676 21.5645C17.0983 21.8314 16.9681 22.1895 16.877 22.6387C16.7923 23.0814 16.75 23.6217 16.75 24.2598V27.4727C16.75 27.987 16.776 28.4395 16.8281 28.8301C16.8867 29.2207 16.9714 29.556 17.082 29.8359C17.1992 30.1094 17.3359 30.334 17.4922 30.5098C17.6549 30.679 17.8405 30.8027 18.0488 30.8809C18.2637 30.959 18.498 30.998 18.752 30.998C19.0645 30.998 19.3411 30.9362 19.582 30.8125C19.8294 30.6823 20.0378 30.4805 20.207 30.207C20.3828 29.9271 20.513 29.5625 20.5977 29.1133C20.6823 28.6641 20.7246 28.1172 20.7246 27.4727ZM32.3164 18.752V33H29.5039V21.9941L26.125 23.0684V20.8516L32.0137 18.752H32.3164Z"
                    fill="#475045"
                  />
                </svg>

                <h2 className="text-lg font-semibold">Conflicting Schedules</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mi pulvinar nunc et.
                </p>
              </div>
              <div className="space-y-2 md:w-64 sm:w-44 w-full sm:mr-4 md:mr-10 mr-0 my-2">
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20.5C0 9.45431 8.95431 0.5 20 0.5C36.5685 0.5 50 13.9315 50 30.5V38.5C50 45.4036 44.4036 51 37.5 51H25C11.1929 51 0 39.8071 0 26V20.5Z"
                    fill="#FEF3F5"
                  />
                  <path
                    d="M23.5469 24.6406V27.1016C23.5469 28.1693 23.4329 29.0905 23.2051 29.8652C22.9772 30.6335 22.6484 31.265 22.2188 31.7598C21.7956 32.248 21.291 32.6094 20.7051 32.8438C20.1191 33.0781 19.4681 33.1953 18.752 33.1953C18.179 33.1953 17.6452 33.1237 17.1504 32.9805C16.6556 32.8307 16.2096 32.5996 15.8125 32.2871C15.4219 31.9746 15.0833 31.5807 14.7969 31.1055C14.5169 30.6237 14.3021 30.0508 14.1523 29.3867C14.0026 28.7227 13.9277 27.9609 13.9277 27.1016V24.6406C13.9277 23.5729 14.0417 22.6582 14.2695 21.8965C14.5039 21.1283 14.8327 20.5 15.2559 20.0117C15.6855 19.5234 16.1934 19.1654 16.7793 18.9375C17.3652 18.7031 18.0163 18.5859 18.7324 18.5859C19.3053 18.5859 19.8359 18.6608 20.3242 18.8105C20.819 18.9538 21.265 19.1784 21.6621 19.4844C22.0592 19.7904 22.3978 20.1842 22.6777 20.666C22.9577 21.1413 23.1725 21.7109 23.3223 22.375C23.472 23.0326 23.5469 23.7878 23.5469 24.6406ZM20.7246 27.4727V24.2598C20.7246 23.7454 20.6953 23.2962 20.6367 22.9121C20.5846 22.528 20.5033 22.2025 20.3926 21.9355C20.2819 21.6621 20.1452 21.4408 19.9824 21.2715C19.8197 21.1022 19.6341 20.9785 19.4258 20.9004C19.2174 20.8223 18.9863 20.7832 18.7324 20.7832C18.4134 20.7832 18.1302 20.8451 17.8828 20.9688C17.6419 21.0924 17.4368 21.291 17.2676 21.5645C17.0983 21.8314 16.9681 22.1895 16.877 22.6387C16.7923 23.0814 16.75 23.6217 16.75 24.2598V27.4727C16.75 27.987 16.776 28.4395 16.8281 28.8301C16.8867 29.2207 16.9714 29.556 17.082 29.8359C17.1992 30.1094 17.3359 30.334 17.4922 30.5098C17.6549 30.679 17.8405 30.8027 18.0488 30.8809C18.2637 30.959 18.498 30.998 18.752 30.998C19.0645 30.998 19.3411 30.9362 19.582 30.8125C19.8294 30.6823 20.0378 30.4805 20.207 30.207C20.3828 29.9271 20.513 29.5625 20.5977 29.1133C20.6823 28.6641 20.7246 28.1172 20.7246 27.4727ZM35.1875 30.8027V33H25.4609V31.125L30.0605 26.1934C30.5228 25.679 30.8874 25.2266 31.1543 24.8359C31.4212 24.4388 31.6133 24.084 31.7305 23.7715C31.8542 23.4525 31.916 23.1497 31.916 22.8633C31.916 22.4336 31.8444 22.0658 31.7012 21.7598C31.5579 21.4473 31.3464 21.2064 31.0664 21.0371C30.793 20.8678 30.4544 20.7832 30.0508 20.7832C29.6211 20.7832 29.25 20.8874 28.9375 21.0957C28.6315 21.304 28.3971 21.5938 28.2344 21.9648C28.0781 22.3359 28 22.7559 28 23.2246H25.1777C25.1777 22.3783 25.3796 21.6035 25.7832 20.9004C26.1868 20.1908 26.7565 19.6276 27.4922 19.2109C28.2279 18.7878 29.1003 18.5762 30.1094 18.5762C31.1055 18.5762 31.9453 18.7389 32.6289 19.0645C33.319 19.3835 33.8398 19.8457 34.1914 20.4512C34.5495 21.0501 34.7285 21.7663 34.7285 22.5996C34.7285 23.0684 34.6536 23.5273 34.5039 23.9766C34.3542 24.4193 34.1393 24.862 33.8594 25.3047C33.5859 25.7409 33.2539 26.1836 32.8633 26.6328C32.4727 27.082 32.0397 27.5475 31.5645 28.0293L29.0938 30.8027H35.1875Z"
                    fill="#475045"
                  />
                </svg>

                <h2 className="text-lg font-semibold">Demanding Work Hours</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mi pulvinar nunc et.
                </p>
              </div>
              <div className="space-y-2 md:w-64 sm:w-44 w-full sm:mr-4 md:mr-10 mr-0 my-2">
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20.5C0 9.45431 8.95431 0.5 20 0.5C36.5685 0.5 50 13.9315 50 30.5V38.5C50 45.4036 44.4036 51 37.5 51H25C11.1929 51 0 39.8071 0 26V20.5Z"
                    fill="#FEF3F5"
                  />
                  <path
                    d="M23.5469 24.6406V27.1016C23.5469 28.1693 23.4329 29.0905 23.2051 29.8652C22.9772 30.6335 22.6484 31.265 22.2188 31.7598C21.7956 32.248 21.291 32.6094 20.7051 32.8438C20.1191 33.0781 19.4681 33.1953 18.752 33.1953C18.179 33.1953 17.6452 33.1237 17.1504 32.9805C16.6556 32.8307 16.2096 32.5996 15.8125 32.2871C15.4219 31.9746 15.0833 31.5807 14.7969 31.1055C14.5169 30.6237 14.3021 30.0508 14.1523 29.3867C14.0026 28.7227 13.9277 27.9609 13.9277 27.1016V24.6406C13.9277 23.5729 14.0417 22.6582 14.2695 21.8965C14.5039 21.1283 14.8327 20.5 15.2559 20.0117C15.6855 19.5234 16.1934 19.1654 16.7793 18.9375C17.3652 18.7031 18.0163 18.5859 18.7324 18.5859C19.3053 18.5859 19.8359 18.6608 20.3242 18.8105C20.819 18.9538 21.265 19.1784 21.6621 19.4844C22.0592 19.7904 22.3978 20.1842 22.6777 20.666C22.9577 21.1413 23.1725 21.7109 23.3223 22.375C23.472 23.0326 23.5469 23.7878 23.5469 24.6406ZM20.7246 27.4727V24.2598C20.7246 23.7454 20.6953 23.2962 20.6367 22.9121C20.5846 22.528 20.5033 22.2025 20.3926 21.9355C20.2819 21.6621 20.1452 21.4408 19.9824 21.2715C19.8197 21.1022 19.6341 20.9785 19.4258 20.9004C19.2174 20.8223 18.9863 20.7832 18.7324 20.7832C18.4134 20.7832 18.1302 20.8451 17.8828 20.9688C17.6419 21.0924 17.4368 21.291 17.2676 21.5645C17.0983 21.8314 16.9681 22.1895 16.877 22.6387C16.7923 23.0814 16.75 23.6217 16.75 24.2598V27.4727C16.75 27.987 16.776 28.4395 16.8281 28.8301C16.8867 29.2207 16.9714 29.556 17.082 29.8359C17.1992 30.1094 17.3359 30.334 17.4922 30.5098C17.6549 30.679 17.8405 30.8027 18.0488 30.8809C18.2637 30.959 18.498 30.998 18.752 30.998C19.0645 30.998 19.3411 30.9362 19.582 30.8125C19.8294 30.6823 20.0378 30.4805 20.207 30.207C20.3828 29.9271 20.513 29.5625 20.5977 29.1133C20.6823 28.6641 20.7246 28.1172 20.7246 27.4727ZM35.1875 30.8027V33H25.4609V31.125L30.0605 26.1934C30.5228 25.679 30.8874 25.2266 31.1543 24.8359C31.4212 24.4388 31.6133 24.084 31.7305 23.7715C31.8542 23.4525 31.916 23.1497 31.916 22.8633C31.916 22.4336 31.8444 22.0658 31.7012 21.7598C31.5579 21.4473 31.3464 21.2064 31.0664 21.0371C30.793 20.8678 30.4544 20.7832 30.0508 20.7832C29.6211 20.7832 29.25 20.8874 28.9375 21.0957C28.6315 21.304 28.3971 21.5938 28.2344 21.9648C28.0781 22.3359 28 22.7559 28 23.2246H25.1777C25.1777 22.3783 25.3796 21.6035 25.7832 20.9004C26.1868 20.1908 26.7565 19.6276 27.4922 19.2109C28.2279 18.7878 29.1003 18.5762 30.1094 18.5762C31.1055 18.5762 31.9453 18.7389 32.6289 19.0645C33.319 19.3835 33.8398 19.8457 34.1914 20.4512C34.5495 21.0501 34.7285 21.7663 34.7285 22.5996C34.7285 23.0684 34.6536 23.5273 34.5039 23.9766C34.3542 24.4193 34.1393 24.862 33.8594 25.3047C33.5859 25.7409 33.2539 26.1836 32.8633 26.6328C32.4727 27.082 32.0397 27.5475 31.5645 28.0293L29.0938 30.8027H35.1875Z"
                    fill="#475045"
                  />
                </svg>
                <h2 className="text-lg font-semibold">
                  Recently Relocated By Job
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mi pulvinar nunc et.
                </p>
              </div>
              <div className="space-y-2 md:w-64 sm:w-44 w-full sm:mr-4 md:mr-10 mr-0 my-2">
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20.7C0 9.6543 8.95431 0.5 20 0.5C36.5685 0.5 50 14.2315 50 30.8C50 41.8457 41.0457 51 30 51C13.4315 51 0 37.2685 0 20.7Z"
                    fill="#FEF0EE"
                  />
                  <path
                    d="M23.5469 24.6406V27.1016C23.5469 28.1693 23.4329 29.0905 23.2051 29.8652C22.9772 30.6335 22.6484 31.265 22.2188 31.7598C21.7956 32.248 21.291 32.6094 20.7051 32.8438C20.1191 33.0781 19.4681 33.1953 18.752 33.1953C18.179 33.1953 17.6452 33.1237 17.1504 32.9805C16.6556 32.8307 16.2096 32.5996 15.8125 32.2871C15.4219 31.9746 15.0833 31.5807 14.7969 31.1055C14.5169 30.6237 14.3021 30.0508 14.1523 29.3867C14.0026 28.7227 13.9277 27.9609 13.9277 27.1016V24.6406C13.9277 23.5729 14.0417 22.6582 14.2695 21.8965C14.5039 21.1283 14.8327 20.5 15.2559 20.0117C15.6855 19.5234 16.1934 19.1654 16.7793 18.9375C17.3652 18.7031 18.0163 18.5859 18.7324 18.5859C19.3053 18.5859 19.8359 18.6608 20.3242 18.8105C20.819 18.9538 21.265 19.1784 21.6621 19.4844C22.0592 19.7904 22.3978 20.1842 22.6777 20.666C22.9577 21.1413 23.1725 21.7109 23.3223 22.375C23.472 23.0326 23.5469 23.7878 23.5469 24.6406ZM20.7246 27.4727V24.2598C20.7246 23.7454 20.6953 23.2962 20.6367 22.9121C20.5846 22.528 20.5033 22.2025 20.3926 21.9355C20.2819 21.6621 20.1452 21.4408 19.9824 21.2715C19.8197 21.1022 19.6341 20.9785 19.4258 20.9004C19.2174 20.8223 18.9863 20.7832 18.7324 20.7832C18.4134 20.7832 18.1302 20.8451 17.8828 20.9688C17.6419 21.0924 17.4368 21.291 17.2676 21.5645C17.0983 21.8314 16.9681 22.1895 16.877 22.6387C16.7923 23.0814 16.75 23.6217 16.75 24.2598V27.4727C16.75 27.987 16.776 28.4395 16.8281 28.8301C16.8867 29.2207 16.9714 29.556 17.082 29.8359C17.1992 30.1094 17.3359 30.334 17.4922 30.5098C17.6549 30.679 17.8405 30.8027 18.0488 30.8809C18.2637 30.959 18.498 30.998 18.752 30.998C19.0645 30.998 19.3411 30.9362 19.582 30.8125C19.8294 30.6823 20.0378 30.4805 20.207 30.207C20.3828 29.9271 20.513 29.5625 20.5977 29.1133C20.6823 28.6641 20.7246 28.1172 20.7246 27.4727ZM35.4219 27.6875V29.8945H25.1777L25.041 28.1855L30.9688 18.7812H33.2051L30.7832 22.834L27.834 27.6875H35.4219ZM33.8105 18.7812V33H30.998V18.7812H33.8105Z"
                    fill="#475045"
                  />
                </svg>

                <h2 className="text-lg font-semibold">
                  Rewarding Quality Time
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mi pulvinar nunc et.
                </p>
              </div>
              <div className="space-y-2 md:w-64 sm:w-44 w-full sm:mr-4 md:mr-10 mr-0 my-2">
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 22.6667C0 10.4244 9.92436 0.5 22.1667 0.5C37.5386 0.5 50 12.9614 50 28.3333V39.3641C50 45.7904 44.7904 51 38.3641 51H12.5C5.59644 51 0 45.4036 0 38.5V22.6667Z"
                    fill="#F4FCF7"
                  />
                  <path
                    d="M23.5469 24.6406V27.1016C23.5469 28.1693 23.4329 29.0905 23.2051 29.8652C22.9772 30.6335 22.6484 31.265 22.2188 31.7598C21.7956 32.248 21.291 32.6094 20.7051 32.8438C20.1191 33.0781 19.4681 33.1953 18.752 33.1953C18.179 33.1953 17.6452 33.1237 17.1504 32.9805C16.6556 32.8307 16.2096 32.5996 15.8125 32.2871C15.4219 31.9746 15.0833 31.5807 14.7969 31.1055C14.5169 30.6237 14.3021 30.0508 14.1523 29.3867C14.0026 28.7227 13.9277 27.9609 13.9277 27.1016V24.6406C13.9277 23.5729 14.0417 22.6582 14.2695 21.8965C14.5039 21.1283 14.8327 20.5 15.2559 20.0117C15.6855 19.5234 16.1934 19.1654 16.7793 18.9375C17.3652 18.7031 18.0163 18.5859 18.7324 18.5859C19.3053 18.5859 19.8359 18.6608 20.3242 18.8105C20.819 18.9538 21.265 19.1784 21.6621 19.4844C22.0592 19.7904 22.3978 20.1842 22.6777 20.666C22.9577 21.1413 23.1725 21.7109 23.3223 22.375C23.472 23.0326 23.5469 23.7878 23.5469 24.6406ZM20.7246 27.4727V24.2598C20.7246 23.7454 20.6953 23.2962 20.6367 22.9121C20.5846 22.528 20.5033 22.2025 20.3926 21.9355C20.2819 21.6621 20.1452 21.4408 19.9824 21.2715C19.8197 21.1022 19.6341 20.9785 19.4258 20.9004C19.2174 20.8223 18.9863 20.7832 18.7324 20.7832C18.4134 20.7832 18.1302 20.8451 17.8828 20.9688C17.6419 21.0924 17.4368 21.291 17.2676 21.5645C17.0983 21.8314 16.9681 22.1895 16.877 22.6387C16.7923 23.0814 16.75 23.6217 16.75 24.2598V27.4727C16.75 27.987 16.776 28.4395 16.8281 28.8301C16.8867 29.2207 16.9714 29.556 17.082 29.8359C17.1992 30.1094 17.3359 30.334 17.4922 30.5098C17.6549 30.679 17.8405 30.8027 18.0488 30.8809C18.2637 30.959 18.498 30.998 18.752 30.998C19.0645 30.998 19.3411 30.9362 19.582 30.8125C19.8294 30.6823 20.0378 30.4805 20.207 30.207C20.3828 29.9271 20.513 29.5625 20.5977 29.1133C20.6823 28.6641 20.7246 28.1172 20.7246 27.4727ZM28.1074 26.5254L25.8613 25.9883L26.6719 18.7812H34.6602V21.0566H28.9863L28.6348 24.2109C28.8236 24.1003 29.11 23.9831 29.4941 23.8594C29.8783 23.7292 30.3079 23.6641 30.7832 23.6641C31.4733 23.6641 32.0853 23.7715 32.6191 23.9863C33.153 24.2012 33.6055 24.5137 33.9766 24.9238C34.3542 25.334 34.6406 25.8353 34.8359 26.4277C35.0312 27.0202 35.1289 27.6908 35.1289 28.4395C35.1289 29.071 35.0312 29.6732 34.8359 30.2461C34.6406 30.8125 34.3444 31.3203 33.9473 31.7695C33.5501 32.2122 33.0521 32.5605 32.4531 32.8145C31.8542 33.0684 31.1445 33.1953 30.3242 33.1953C29.7122 33.1953 29.1198 33.1042 28.5469 32.9219C27.9805 32.7396 27.4694 32.4694 27.0137 32.1113C26.5645 31.7533 26.2031 31.3203 25.9297 30.8125C25.6628 30.2982 25.5228 29.7122 25.5098 29.0547H28.3027C28.3418 29.4583 28.446 29.8066 28.6152 30.0996C28.791 30.3861 29.0221 30.6074 29.3086 30.7637C29.5951 30.9199 29.9303 30.998 30.3145 30.998C30.6725 30.998 30.9785 30.9297 31.2324 30.793C31.4863 30.6562 31.6914 30.4674 31.8477 30.2266C32.0039 29.9792 32.1178 29.6927 32.1895 29.3672C32.2676 29.0352 32.3066 28.6771 32.3066 28.293C32.3066 27.9089 32.2611 27.5605 32.1699 27.248C32.0788 26.9355 31.9388 26.6654 31.75 26.4375C31.5612 26.2096 31.3203 26.0339 31.0273 25.9102C30.7409 25.7865 30.4056 25.7246 30.0215 25.7246C29.5007 25.7246 29.097 25.806 28.8105 25.9688C28.5306 26.1315 28.2962 26.3171 28.1074 26.5254Z"
                    fill="#475045"
                  />
                </svg>

                <h2 className="text-lg font-semibold">
                  Maintain Kids Activity
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mi pulvinar nunc et.
                </p>
              </div>
              <div className="space-y-2 md:w-64 sm:w-44 w-full sm:mr-4 md:mr-10 mr-0 my-2">
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 23.7338C0 10.9021 10.4021 0.5 23.2338 0.5H33.1667C42.4635 0.5 50 8.03654 50 17.3333V24.6667C50 39.2102 38.2102 51 23.6667 51C10.5959 51 0 40.4041 0 27.3333V23.7338Z"
                    fill="#FEF7E7"
                  />
                  <path
                    d="M23.5469 24.6406V27.1016C23.5469 28.1693 23.4329 29.0905 23.2051 29.8652C22.9772 30.6335 22.6484 31.265 22.2188 31.7598C21.7956 32.248 21.291 32.6094 20.7051 32.8438C20.1191 33.0781 19.4681 33.1953 18.752 33.1953C18.179 33.1953 17.6452 33.1237 17.1504 32.9805C16.6556 32.8307 16.2096 32.5996 15.8125 32.2871C15.4219 31.9746 15.0833 31.5807 14.7969 31.1055C14.5169 30.6237 14.3021 30.0508 14.1523 29.3867C14.0026 28.7227 13.9277 27.9609 13.9277 27.1016V24.6406C13.9277 23.5729 14.0417 22.6582 14.2695 21.8965C14.5039 21.1283 14.8327 20.5 15.2559 20.0117C15.6855 19.5234 16.1934 19.1654 16.7793 18.9375C17.3652 18.7031 18.0163 18.5859 18.7324 18.5859C19.3053 18.5859 19.8359 18.6608 20.3242 18.8105C20.819 18.9538 21.265 19.1784 21.6621 19.4844C22.0592 19.7904 22.3978 20.1842 22.6777 20.666C22.9577 21.1413 23.1725 21.7109 23.3223 22.375C23.472 23.0326 23.5469 23.7878 23.5469 24.6406ZM20.7246 27.4727V24.2598C20.7246 23.7454 20.6953 23.2962 20.6367 22.9121C20.5846 22.528 20.5033 22.2025 20.3926 21.9355C20.2819 21.6621 20.1452 21.4408 19.9824 21.2715C19.8197 21.1022 19.6341 20.9785 19.4258 20.9004C19.2174 20.8223 18.9863 20.7832 18.7324 20.7832C18.4134 20.7832 18.1302 20.8451 17.8828 20.9688C17.6419 21.0924 17.4368 21.291 17.2676 21.5645C17.0983 21.8314 16.9681 22.1895 16.877 22.6387C16.7923 23.0814 16.75 23.6217 16.75 24.2598V27.4727C16.75 27.987 16.776 28.4395 16.8281 28.8301C16.8867 29.2207 16.9714 29.556 17.082 29.8359C17.1992 30.1094 17.3359 30.334 17.4922 30.5098C17.6549 30.679 17.8405 30.8027 18.0488 30.8809C18.2637 30.959 18.498 30.998 18.752 30.998C19.0645 30.998 19.3411 30.9362 19.582 30.8125C19.8294 30.6823 20.0378 30.4805 20.207 30.207C20.3828 29.9271 20.513 29.5625 20.5977 29.1133C20.6823 28.6641 20.7246 28.1172 20.7246 27.4727ZM32.7168 18.6348H33.127V20.8809H32.9609C32.2188 20.8809 31.5579 20.9915 30.9785 21.2129C30.3991 21.4342 29.9076 21.75 29.5039 22.1602C29.1068 22.5638 28.8008 23.0521 28.5859 23.625C28.3776 24.1979 28.2734 24.8392 28.2734 25.5488V27.9121C28.2734 28.4199 28.3223 28.8691 28.4199 29.2598C28.5241 29.6439 28.6706 29.9661 28.8594 30.2266C29.0547 30.4805 29.2826 30.6725 29.543 30.8027C29.8034 30.9264 30.0964 30.9883 30.4219 30.9883C30.7279 30.9883 31.0046 30.9232 31.252 30.793C31.5059 30.6628 31.7207 30.4805 31.8965 30.2461C32.0788 30.0052 32.2155 29.7253 32.3066 29.4062C32.4043 29.0807 32.4531 28.7259 32.4531 28.3418C32.4531 27.9577 32.4043 27.6029 32.3066 27.2773C32.2155 26.9518 32.0788 26.6719 31.8965 26.4375C31.7142 26.1966 31.4928 26.0111 31.2324 25.8809C30.972 25.7507 30.679 25.6855 30.3535 25.6855C29.9108 25.6855 29.5202 25.7897 29.1816 25.998C28.8496 26.1999 28.5892 26.4603 28.4004 26.7793C28.2116 27.0983 28.1107 27.4336 28.0977 27.7852L27.248 27.2383C27.2676 26.737 27.3717 26.2617 27.5605 25.8125C27.7559 25.3633 28.0228 24.9661 28.3613 24.6211C28.7064 24.2695 29.1198 23.9961 29.6016 23.8008C30.0833 23.599 30.627 23.498 31.2324 23.498C31.8965 23.498 32.4792 23.625 32.9805 23.8789C33.4883 24.1328 33.9115 24.4811 34.25 24.9238C34.5885 25.3665 34.8424 25.8776 35.0117 26.457C35.181 27.0365 35.2656 27.6549 35.2656 28.3125C35.2656 29.0026 35.1517 29.6439 34.9238 30.2363C34.7025 30.8288 34.3802 31.3464 33.957 31.7891C33.5404 32.2318 33.0391 32.5768 32.4531 32.8242C31.8672 33.0716 31.2096 33.1953 30.4805 33.1953C29.7253 33.1953 29.0384 33.0586 28.4199 32.7852C27.8079 32.5052 27.2806 32.1146 26.8379 31.6133C26.3952 31.112 26.0534 30.5163 25.8125 29.8262C25.5781 29.1361 25.4609 28.3809 25.4609 27.5605V26.4668C25.4609 25.321 25.627 24.2728 25.959 23.3223C26.2975 22.3652 26.7826 21.5384 27.4141 20.8418C28.0456 20.1387 28.8073 19.5951 29.6992 19.2109C30.5911 18.8268 31.597 18.6348 32.7168 18.6348Z"
                    fill="#475045"
                  />
                </svg>

                <h2 className="text-lg font-semibold">
                  Friendly Customer Service
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mi pulvinar nunc et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* downlad app */}

      <div className="">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <div className="space-y-3">
              <h1 className="font-semibold text-4xl text-center">
                Downlaod app today!
              </h1>
              <p className="text-sm text-center">
                Download app for Andraoid today — it{"'"}s free.
              </p>
            </div>
            <div className="flex md:flex-row flex-col justify-evenly items-center mt-10 md:space-x-5 space-x-0 space-y-4 md:space-y-0 ">
              <div className="bg-[#B79F8E] bg-opacity-90 rounded-lg px-6 py-8 w-full md:w-[30rem]">
                <h1 className="text-2xl font-semibold">Android</h1>
                <p className="text-sm">
                  Download app for Android today — it{"'"}s free.
                </p>

                <button className="bg-white px-6 py-3 rounded-lg flex justify-center items-center mt-10">
                  <svg
                    className="mr-4"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.62148 7.55981L3.14687 1.05591L11.3793 5.802L9.62148 7.55981ZM1.47695 0.675049L8.97695 8.17505L1.47695 15.675C1.09609 15.4993 0.832422 15.1184 0.832422 14.6497V1.72974C0.832422 1.26099 1.09609 0.880127 1.47695 0.675049ZM13.9281 7.29614C14.4848 7.7063 14.4848 8.6731 13.9574 9.08325L12.1996 10.0793L10.266 8.17505L12.1996 6.30005L13.9281 7.29614ZM3.14687 15.2942L9.62148 8.81958L11.3793 10.5774L3.14687 15.2942Z"
                      fill="#0E1133"
                    />
                  </svg>

                  <p>Download for Android</p>
                </button>
                <img
                  src="img\download-app.png"
                  alt="download app"
                  className="mt-8 -mb-8"
                />
              </div>
              <div className="bg-[#B79F8E] rounded-lg px-6 py-8 w-full md:w-[30rem]">
                <h1 className="text-2xl font-semibold">iOS</h1>
                <p className="text-sm">
                  Download app for iOS today — it{"'"}s free.
                </p>

                <button className="bg-[#FF6B58] px-6 py-3 rounded-lg flex justify-center items-center mt-10">
                  <svg
                    className="mr-4"
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.41641 7.55591C9.41641 7.6145 9.32852 9.34302 11.2328 10.2512C10.8812 11.3352 9.65078 13.7375 8.21523 13.7375C7.39492 13.7375 6.92617 13.2102 5.98867 13.2102C5.02187 13.2102 4.49453 13.7375 3.76211 13.7375C2.35586 13.7961 1.0082 11.1594 0.627344 10.0754C0.334375 9.25513 0.217187 8.46411 0.217187 7.70239C0.217187 5.09497 1.9457 3.83521 3.58633 3.80591C4.37734 3.80591 5.37344 4.36255 5.81289 4.36255C6.22305 4.36255 7.36562 3.68872 8.42031 3.77661C9.5043 3.8645 10.3246 4.27466 10.8812 5.06567C9.91445 5.68091 9.41641 6.47192 9.41641 7.55591ZM7.77578 2.75122C7.18984 3.42505 6.48672 3.80591 5.725 3.74731C5.66641 2.9563 5.95937 2.22388 6.48672 1.63794C6.95547 1.1106 7.77578 0.671143 8.47891 0.612549C8.47891 0.934814 8.5668 1.81372 7.77578 2.75122Z"
                      fill="white"
                    />
                  </svg>
                  <p>Download for iOS</p>
                </button>
                <img
                  src="img\download-app.png"
                  alt="download app"
                  className="mt-8 -mb-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 md:mx-auto md:max-w-[1186px]">
        <div className="container ">
          <div className="bg-[#FF6B58] banner py-10 px-10 rounded-lg flex justify-between items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Register your
              <br /> child today!
            </h1>
            <button className="px-6 py-3 bg-white rounded">
              Request A quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desk;
