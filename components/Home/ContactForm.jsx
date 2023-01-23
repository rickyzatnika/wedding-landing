import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaPhoneVolume } from "react-icons/fa";

const ContactForm = () => {
  const { register, handleSubmit, reset, error } = useForm();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="w-full h-full  lg:px-14 px-4 bg-[#f1f1f1] py-10">
        <h2 className="text-center text-3xl pb-20 text-[#313131] font-semibold">
          <span className="text-indigo-500 font-semibold">Get In</span> Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start ">
          <form className="px-6 lg:px-10">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-indigo-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-indigo-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-indigo-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                No.Handphone
              </label>
            </div>
            <button
              type="submit"
              className="my-10 w-full uppercase poppins text-[#414141] antialiased border-b-2 pb-2 hover:scale-95 transition-all duration-200 ease-linear border-indigo-500"
            >
              kirim
            </button>
          </form>
          <div className="w-full mt-20 lg:mt-0 flex flex-wrap flex-col lg:flex-row justify-evenly gap-10">
            <div className="flex basis-4 items-start flex-col justify-between">
              <h1 className="text-md  text-gray-700/80">Menu</h1>
              <div className="flex flex-col basis-2 pt-4 leading-8">
                <Link href="/" passHref>
                  <span className="text-sm py-2 text-indigo-500/80">Home</span>
                </Link>
                <Link href="#features">
                  <span className="text-sm py-2 text-indigo-500/80">
                    Features
                  </span>
                </Link>
                <Link href="portfolio" passHref>
                  <span className="text-sm py-2 text-indigo-500/80">
                    Portfolio
                  </span>
                </Link>
                <Link href="#pricing">
                  <span className="text-sm py-2 text-indigo-500/80">
                    Pricing
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex basis-4 items-start flex-col justify-start">
              <h1 className="text-md  text-gray-700/80">Support</h1>
              <div className="flex text-center flex-col pt-4 leading-8 ">
                <div className="w-full flex items-center gap-1">
                  <span className="text-sm">
                    <HiOutlineMail />
                  </span>
                  <span className="text-sm py-2 text-indigo-500">
                    rickyzatnika@gmail.com
                  </span>
                </div>
                <div className="w-full flex items-center gap-1">
                  <span className="text-sm">
                    <HiOutlineDevicePhoneMobile />
                  </span>
                  <span className="text-sm py-2 text-indigo-500">
                    0895-7003-20007
                  </span>
                </div>
                <div className="w-full flex items-center gap-1">
                  <span className="text-sm">
                    <HiOutlineDevicePhoneMobile />
                  </span>
                  <span className="text-sm py-2 text-indigo-500">
                    0813-9495-9900
                  </span>
                </div>
                <div className="w-full flex items-center gap-1">
                  <span className="text-sm">
                    <FaPhoneVolume />
                  </span>
                  <span className="text-sm py-2 text-indigo-500">
                    022-2511-240
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start flex-col ">
              <h1 className="text-md  text-gray-700/80">Social Links</h1>
              <div className="flex  flex-col items-start pt-4 leading-8">
                <Link href="https://instagram.com" passHref target="_blank">
                  <span className="text-sm py-2 text-indigo-500">
                    Instagram
                  </span>
                </Link>
                <Link href="https://facebook.com" passHref target="_blank">
                  <span className="text-sm py-2 text-indigo-500">Facebook</span>
                </Link>
                <Link href="https://telegram.com" passHref target="_blank">
                  <span className="text-sm py-2 text-indigo-500">Telegram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
