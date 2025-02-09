import React from "react";
import Typewriter from "typewriter-effect";

function Right() {
  return (
    <>
      <div className="w-[100%] flex flex-col items-start justify-center">
        <div className="flex justify-start items-center w-[100%] space-x-2">
          <hr className="xl:w-[10%] lg:w-[10%] w-[10%] border-[#f85a40]" />
          <h1 className="font-metropolis-light text-[0.86em] lg:text-[1em] xl:text-[1em]">
            Who We Are
          </h1>
        </div>

        <div className="flex justify-start items-start flex-col">
          <h1 className="text-[1.2em] lg:text-[1.5em] xl:text-[2em] font-metropolis-bold">
            Innovating Today for a Better
            <Typewriter
              options={{
                strings: ["Tomorrow", "Outcome", "Vision"],
                autoStart: true,
                loop: true
              }}
            />
          </h1>

          <p className="text-[#555] font-metropolis-light text-[0.85em] xl:text-[1em] lg:text-[1em]">
            At COD Innovations, we are passionate about creating impactful
            solutions that make a difference in education, technology, and
            healthcare. As pioneers in software development, we aim to transform
            schools, empower aspiring IT professionals, and bridge gaps in
            healthcare delivery. Guided by innovation and a commitment to
            excellence, our mission is to empower communities and build a
            brighter future for all...
          </p>
        </div>
      </div>
    </>
  );
}

export default Right;
