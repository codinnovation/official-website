import React from "react";
import Image from "next/image";
import Photo from "../../../public/img1 (1).png";

function Left() {
  return (
    <>
      <div className="flex justify-start items-center">
        <Image
          src={Photo}
          width={900}
          height={900}
          alt=""
          className="w-[70%] xl:w-[65%] h-auto mx-auto"
        />
      </div>
    </>
  );
}

export default Left;
