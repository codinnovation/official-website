import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import dynamic from "next/dynamic";
import Typewriter from "typewriter-effect";

const Slide = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Slide),
  {
    ssr: false,
  }
);

function Header() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const linksArray = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/teams" },
    { name: "Innovations", href: "/p/innovations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="xl:h-[15vh] lg:h-[13vh] bg-white w-full h-[15vh]">
        <div className="xl:w-8/12 lg:w-10/12 mx-auto grid grid-cols-[1fr_1fr] h-[100%] w-11/12">
          <div className="flex justify-start items-center">
            <h1
              className={`lg:text-[0.9em] xl:text-[1.1em] ${openMenu ? "text-[#000]" : "text-[#666]"
                } font-metropolis-bold uppercase text-[1em]`}
            >
              {openMenu ? (
                <Typewriter
                  options={{
                    strings: ["COD Innovations"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              ) : (
                "COD Innovations."
              )}
            </h1>
          </div>

          <div className="hidden lg:flex xl:flex justify-end items-center space-x-6">
            {linksArray.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`font-metropolis-light font-[600] xl:text-[1.05em] lg:text-[0.9em] ${router.pathname === link.href
                  ? "text-[#000]" // Active color (black)
                  : "text-[#666]" // Default color (gray)
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div
            className="flex justify-end items-center xl:hidden lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <i className="ri-close-line text-[1.5em]"></i>
            ) : (
              <i className="ri-menu-fill text-[1.5em]"></i>
            )}
          </div>
        </div>
      </div>

      {openMenu && (
        <>
          <div className="fixed z-[900] top-[15vh] left-0 right-0 w-full h-screen bg-white">
            <Slide>
              <div className="p-[20px]">
                <div className="flex flex-col items-start justify-center space-y-8">
                  {linksArray.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`font-metropolis-light font-[600] xl:text-[1.05em] lg:text-[0.9em] ${router.pathname === link.href
                        ? "text-[#000]"
                        : "text-[#666]"
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Slide>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
