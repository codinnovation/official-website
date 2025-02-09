import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full bg-[#f85a40]  mt-[15%] xl:mt-[13%] lg:mt-[10%] xl:h-[20vh] lg:h-[25vh] h-[20vh] ">
        <div className="lg:w-10/12 xl:w-8/12 mx-auto  h-[100%] w-11/12 gap-[20px] flex justify-center items-center flex-col">
          {/**Icons */}
          <div className="flex justify-center items-center space-x-6">
            <i className="ri-facebook-line text-white flex justify-center items-center bg-[#524568] xl:text-[1.5em] lg:text-[1.3em] xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] rounded-[50%] w-[40px] h-[40px] text-[1.2em]"></i>

            <i className="ri-linkedin-line text-white flex justify-center items-center bg-[#524568] xl:text-[1.5em] xl:w-[50px]  xl:h-[50px]  lg:w-[40px] lg:h-[40px] rounded-[50%] lg:text-[1.3em] w-[40px] h-[40px] text-[1.2em]"></i>

            <i className="ri-twitter-x-line text-white flex justify-center items-center bg-[#524568] xl:text-[1.5em] xl:w-[50px]  xl:h-[50px]  lg:w-[40px] lg:h-[40px] rounded-[50%] lg:text-[1.3em] w-[40px] h-[40px] text-[1.2em]"></i>

            <i className="ri-instagram-line text-white flex justify-center items-center bg-[#524568] xl:text-[1.5em] xl:w-[50px]  xl:h-[50px]  lg:w-[40px] lg:h-[40px] rounded-[50%] lg:text-[1.3em] w-[40px] h-[40px] text-[1.2em]"></i>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-[#fff] font-metropolis-light xl:text-[1em] lg:text-[0.9em] text-[0.9em]">
              &copy; {new Date().getFullYear()} All rights reserved. COD
              Innovations
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
