import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showMenus, setShowMenus] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (typeof window !== "undefined") {
        if (scrollY > navbarVisible) {
          setShow(true);
          setShowMenus(false);
        } else {
          setShow(false);
        }
      }
      setNavbarVisible(scrollY);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [navbarVisible]);

  const showMenu = () => {
    setShowMenus(!showMenus);
  };
  const router = useRouter();
  return (
    <>
      <nav
        className={`w-full z-50 bg-[#fefefe]/70 backdrop-blur fixed flex items-center px-10 lg:px-20 justify-between py-6 transition-all duration-200 ease-in-out ${
          show
            ? "bg-[#fefefe]/70 -top-96 delay-75 transition-all duration-200 ease-in-out"
            : "bg-[#fefefe]/70 top-0  transition-all duration-200 "
        }`}
      >
        <div
          onClick={() => setShowMenus(false)}
          className="relative z-50  text-indigo-800 tracking-tighter"
        >
          <Link href="/" passHref className="text-3xl lg:text-4xl">
            <span className="font-bold  text-indigo-600">d</span>
            Books
          </Link>
          <p className="pl-1 text-sm text-indigo-800">Undangan Digital</p>
        </div>

        <ul
          onClick={() => setShowMenus(false)}
          className={
            !showMenus
              ? "-left-[100%] flex flex-col  justify-center bg-white lg:bg-transparent items-start lg:items-center z-50 space-y-10 lg:space-y-0 fixed top-0 transition-all duration-300 ease-linear w-full h-screen lg:h-fit lg:w-fit lg:top-0 lg:left-0 lg:relative lg:flex lg:flex-row  space-x-0 lg:space-x-7"
              : "fixed w-full h-screen z-40 bg-white top-0 left-0 space-y-10 flex flex-col items-start justify-center px-6 transition-all duration-300 ease-linear"
          }
        >
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl lg:text-base lg:text-md poppins font-semibold lg:font-normal text-[#555] hover:text-indigo-500 transition-all duration-200 ease-linear antialiased "
          >
            <Link href="features" passHref>
              <span
                className={
                  router.pathname === "features"
                    ? "text-indigo-500  lg:border-b border-indigo-500"
                    : ""
                }
              >
                Features
              </span>
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-base lg:text-md poppins font-semibold lg:font-normal text-[#555] hover:text-indigo-500 transition-all duration-200 ease-linear antialiased"
          >
            <Link href="portfolio" passHref>
              <span
                className={
                  router.pathname === "portfolio"
                    ? "text-indigo-500 lg:border-b border-indigo-500"
                    : ""
                }
              >
                Portfolio
              </span>
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl pr-0 lg:pr-8 lg:text-base  lg:text-md poppins font-semibold lg:font-normal text-[#555] hover:text-indigo-500 transition-all duration-200 ease-linear antialiased"
          >
            <Link href="pricing" passHref>
              <span
                className={
                  router.pathname === "pricing"
                    ? "text-indigo-500  lg:border-b border-indigo-500"
                    : ""
                }
              >
                Pricing
              </span>
            </Link>
          </motion.li>
          <div className="w-full lg:w-fit pt-24 lg:pt-0">
            <Link href="https://wa.wizard.id/0771c2" passHref>
              <button className="w-full lg:w-fit border-2 antialiased text-indigo-600 hover:text-[#e7e7e7] hover:bg-gradient-to-tr from-indigo-400 to-indigo-600 font-semibold rounded border-indigo-500 hover:border-white py-2 px-4 transition-all duration-200 ease-linear">
                Contact Sales
              </button>
            </Link>
          </div>
        </ul>

        <button
          onClick={showMenu}
          className="border-none z-50 absolute right-7 top-7 outline-none focus:shadow-none flex flex-end lg:hidden"
        >
          {!showMenus ? <GiHamburgerMenu size={22} /> : <GrClose size={24} />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
