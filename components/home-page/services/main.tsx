import React from "react";
import "remixicon/fonts/remixicon.css";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

const Zoom = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Zoom),
  {
    ssr: false
  }
);

function Main() {
  const cardInformations = [
    {
      color: "#f85a40",
      icon: "graduation-cap-line",
      title: "Revolutionizing Education",
      des: "   Smart tools for smarter schools - steamlining operations and enhancing learning with innovative software solutions"
    },

    {
      color: "#008374",
      icon: "macbook-line",
      title: "Empowering Future IT Leaders",
      des: "Nurturing the next tech generation with expert guidance, hands-on training, and industry insights"
    },

    {
      icon: "hospital-line",
      color: "#f85a40",
      title: "Connecting Healthcare Smarter",
      des: "Building bridges between patients and providers - seamless booking, better care, and healthier connections"
    }
  ];

  return (
    <>
      <Zoom delay={500}>
        <div className="w-11/12 mx-auto grid grid-cols-[1fr] h-[100%] mt-[40px] xl:mt-[60px] lg:mt-[40px] xl:w-2/3 xl:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-[35px]">
          {cardInformations.map((data, index) => (
            <div
              className="flex flex-col justify-start items-center lg:p-[10px] xl:p-[30px] p-[20px] bg-white rounded-[20px]"
              key={index}
            >
              <i
                style={{ color: data?.color }}
                className={`ri-${data?.icon} xl:text-[3em] lg:text-[2em] text-[2.5em] rounded-[50%] flex justify-center items-center`}
              />

              <h1 className="font-metropolis-bold mt-[10px] text-[1em] lg:text-[1em] xl:text-[1.3em] text-center">
                {data?.title}
              </h1>

              <p className="font-metropolis-light text-center text-[#555] text-[0.9em] lg:text-[0.9em] xl:text-[1em]">
                {data?.des}
              </p>
            </div>
          ))}
        </div>
      </Zoom>
    </>
  );
}

export default Main;
