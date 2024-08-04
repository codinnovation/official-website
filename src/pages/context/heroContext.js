// context/HeroContext.js
import React, { createContext, useState } from "react";

export const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const [heroDescription, setHeroDescription] = useState(
    "Welcome to COD Innovations, where we blend courage, obedience, and discipline to challenge the status, pursue groundbreaking ideas, and consistently deliver exceptional results, shaping the future of innovation."
  );

  const [heroHeader, setHeroHeader] = useState("Welcome To COD Innovations");
  const [heroImage, setHeroImage] = useState("/hero-img.svg")

  return (
    <HeroContext.Provider
      value={{ heroDescription, setHeroDescription, heroHeader, setHeroHeader, heroImage, setHeroImage }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;