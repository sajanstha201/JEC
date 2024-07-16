import React from "react";
import tulogo from '../../media/images/tulogo.png'
function Footer(){
  return (
    <>
      <div className="w-full mt-5">
        {/* First segment of footer */}
        <div className="w-full py-2 bg-blue-600 mt-2">
          <div className="w-[96%] mx-auto flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 py-4">
            {/* First section */}
            <div className="flex items-center gap-4 md:gap-10">
              <img
                src={tulogo}
                alt="tu logo"
                className="h-32 w-32"
              />
              <div className="bg-white h-20 w-1"></div>
              <p>
                Affiliated with <br /> Tribhuvan University
              </p>
            </div>

            {/* Second section */}
            <div className="flex gap-4 md:gap-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded border border-white">
                <a href="">CONTACT US</a>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded border border-white">
                <a href="">APPLY ONLINE</a>
              </button>
            </div>
          </div>
        </div>

        {/* Second segment of footer section */}
        <div className="w-full py-2 bg-blue-800">
          <div className="w-[96%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 py-4 text-white text-center">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-6 items-center w-full sm:w-auto">
              <i className="fa-solid fa-location-dot fa-2x"></i>
              <h1>
                Visit us <br />
                Kupondole, Lalitpur, Nepal
              </h1>
            </div>
            <div className="hidden sm:block bg-white h-20 w-1"></div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-6 items-center w-full sm:w-auto">
              <i className="fa-solid fa-envelope fa-2x"></i>
              <h1>
                Email us <br />
                info@jec.edu.np
              </h1>
            </div>
            <div className="hidden sm:block bg-white h-20 w-1"></div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-6 items-center w-full sm:w-auto">
              <i className="fa-solid fa-phone fa-2x"></i>
              <h1>
                Call us:
                <br /> 01-5435822 | 9818342407
              </h1>
            </div>
          </div>

          {/* Social media logos */}
          <div className="text-white w-full">
            <ul className="w-[96%] mx-auto flex justify-center gap-10 my-2">
              <li>
                <a href="">
                  <i className="fa-brands fa-linkedin text-xl fa-solid fa-arrow-right transform scale-100 hover:scale-150 focus:scale-150 hover:text-black hover:bg-white hover:rounded-full hover:px-2 hover:py-1 m-2 ease-in duration-300"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-instagram text-xl fa-solid fa-arrow-right transform scale-100 hover:scale-150 focus:scale-150 hover:text-black hover:bg-white hover:rounded-full hover:px-2 hover:py-1 m-2 ease-in duration-300"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook text-xl fa-solid fa-arrow-right transform scale-100 hover:scale-150 focus:scale-150 hover:text-black hover:bg-white hover:rounded-full hover:px-2 hover:py-1 m-2 ease-in duration-300"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer