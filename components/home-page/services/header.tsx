import React from "react";

function Header() {
  return (
    <>
      <div className="xl:mt-[50px] lg:mt-[20px] flex flex-col items-center justify-center mt-[40px]">
        <h1 className="text-[1.2em] font-metropolis-bold xl:text-[1.9em] lg:text-[1.4em]">
          Our Primary Concern
        </h1>
        <p className="text-[0.9em] w-[100%] text-center font-metropolis-light text-[#666] xl:text-[1em] lg:text-[0.9em] xl:w-[85%] lg:w-[80%]">
          Our primary concern is to drive innovation and deliver exceptional
          solutions that empower our clients.
        </p>
      </div>
    </>
  );
}

export default Header;
