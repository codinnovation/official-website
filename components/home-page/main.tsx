import Image from "next/image";
import React from "react";
import HeroImage from "../../public/hero-img.svg";
import Typewriter from "typewriter-effect";
import dynamic from "next/dynamic";

const Zoom = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Zoom),
  {
    ssr: false
  }
);

function Main() {
  return (
    <>
      <Zoom delay={100}>
        <div className="w-full h-[100%] xl:h-[50vh] lg:h-[53vh] h-auto">
          <div className="lg:w-10/12 xl:w-8/12 mx-auto grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-[100px] xl:grid-cols-[1fr_1fr]  h-[100%] w-11/12 gap-[20px]">
            {/**Left side */}
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-[#f85a40] xl:text-[0.9em] lg:text-[1em] font-metropolis-light text-[0.9em]">
                <Typewriter
                  options={{
                    strings: ["Courage, Obedience, Discipline "],
                    autoStart: true,
                    loop: true
                  }}
                />{" "}
              </h1>

              <h1 className="lg:text-[1.7em] xl:text-[3em] font-metropolis-bold text-[1.7em]">
                Innovating for a Smarter
                <Typewriter
                  options={{
                    strings: ["Future", "Generation", "Era"],
                    autoStart: true,
                    loop: true
                  }}
                />
              </h1>

              <p className="xl:text-[0.9em] lg:text-[0.85em] font-metropolis-light text-[#777] text-[0.9em] ">
                We solve outdated education, disconnected healthcare, and
                limited IT opportunities. Our solutions improve schools, link
                healthcare providers with patients, and train future tech
                leaders.
              </p>
              <div className="flex justify-start items-center mt-[5%]">
                <button className="border xl:p-[10px] lg:p-[7px] lg:text-[0.8em] xl:text-[1em] font-metropolis-light rounded-[10px] p-[10px] text-[0.9em]">
                  Contact us
                </button>
              </div>
            </div>

            {/**Right side */}
            <div className="flex justify-end items-center">
              <Image
                src={HeroImage}
                width={900}
                height={900}
                alt=""
                className="w-[100%] h-auto"
              />
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
}

export default Main;
