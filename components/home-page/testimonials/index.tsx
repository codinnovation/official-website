import Image from "next/image";
import React from "react";
import Harriet from "../../../public/harriet.jpg";
import dynamic from "next/dynamic";

const Bounce = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Bounce),
  {
    ssr: false
  }
);

function Testimonial() {
  return (
    <>
      <Bounce>
        <div className="w-11/12 mx-auto  h-[100%] mt-[15%] xl:mt-[10%] lg:mt-[10%] lg:w-10/12 xl:w-8/12">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center items-center">
              <Image
                src={Harriet}
                width={900}
                height={900}
                alt=""
                className="xl:w-[35%] lg:w-[25%] w-[40%] rounded-[50%]"
              />
            </div>

            <div className="flex justify-center items-center mt-[10px] xl:mt-[20px] lg:mt-[20px]">
              <h1 className="uppercase font-metropolis-bold text-[1em] xl:text-[1.2em]">
                Yeboah Harriet
              </h1>
            </div>

            <div className="flex justify-center items-center mx-auto w-[100%] xl:w-[55%] lg:w-[75%]">
              <p className="text-center font-metropolis-light text-[0.9em] text-[#777] xl:text-[1em] lg:text-[0.9em]">
                I just want to take a moment to express my gratitude to COD
                Innovations team. I wanted to learn how to build websites, and
                even though I am not from the IT field, they stepped in to help
                me. The good news is that I did not pay a single cent for their
                support .I am truly thankful for everything they&apos;ve done
                for me
              </p>
            </div>

            <div className="flex justify-center items-center space-x-9 mt-[20px] xl:mt-[35px] lg:mt-[25px]">
              <i className="ri-arrow-left-double-fill text-[1.5em] xl:text-[2em] lg:text-[1.5em] cursor-pointer"></i>
              <i className="ri-arrow-right-double-line text-[1.5em] xl:text-[2em] lg:text-[1.5em] cursor-pointer"></i>
            </div>
          </div>
        </div>
      </Bounce>
    </>
  );
}

export default Testimonial;
