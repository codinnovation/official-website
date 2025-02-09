import React from "react";
import dynamic from "next/dynamic";
import Typewriter from "typewriter-effect";

const Slide = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Slide),
  {
    ssr: false
  }
);

function Glance() {
  const cardInformations = [
    { number: "3", name: "The Team" },
    { number: "15", name: "All Students" },
    { number: "50", name: "Online Students" },
    { number: "2", name: "Clients" }
  ];
  return (
    <Slide>
      <div className="w-full mt-[15%] bg-[#f8f9fa] h-[15vh] xl:h-[20vh] lg:h-[25vh] xl:mt-[7%] lg:mt-[10%]">
        <div className="h-[100%] lg:w-10/12 xl:w-8/12 w-[11/12] w-11/12 mx-auto flex justify-between items-center">
          {cardInformations.map((info, index) => (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <h1 className="font-metropolis-light xl:text-[2em] lg:text-[1.2em] text-[0.9em] text-[#f85a40] border-b">
                <Typewriter
                  options={{
                    strings: [info?.number],
                    autoStart: true,
                    loop: true
                  }}
                />
              </h1>
              <h1 className="font-metropolis-light text-[0.85em] xl:text-[1.6em] lg:text-[1.2em] ">
                {info?.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

export default Glance;
