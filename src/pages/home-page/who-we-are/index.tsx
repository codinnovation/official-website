import React from "react";
import Left from "../../../../components/home-page/who-we-are/left";
import Right from "../../../../components/home-page/who-we-are/right";
import dynamic from "next/dynamic";

const Fade = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Fade),
  {
    ssr: false
  }
);

function WhoWeAre() {
  return (
    <>
      <Fade>
        <div className="w-11/12 mx-auto grid grid-cols-[1fr] h-[100%] mt-[40px] xl:mt-[60px] lg:mt-[40px] xl:w-2/3 xl:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] xl:gap-[5px] lg:gap-[5px] gap-[35px]">
          <Left />
          <Right />
        </div>
      </Fade>
    </>
  );
}

export default WhoWeAre;
