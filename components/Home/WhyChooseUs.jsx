import React from "react";
import { BsCheckLg } from "react-icons/bs";

const WhyChooseUs = () => {
  return (
    <>
      <div className="w-full h-full px:10 lg:px-20 bg-gradient-to-t from-indigo-600/40 to-transparent">
        <h1 className="text-left text-2xl px-2 lg:px-0 text-indigo-600/80 py-4 my-10 lg:my-10 ">
          Why <b className="border-b-2 border-indigo-600">Choose</b> Us ??
        </h1>
        <div className="w-full pb-10 grid items-start px-6 lg:px-20 grid-cols-1 lg:grid-cols-2 ">
          <div className="flex py-0 lg:py-6 flex-col gap-4 items-self-start  justify-center">
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">
                Fitur Web Undangan Lengkap
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">
                Responsive & User Friendly
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">
                Unlimited Input Tamu undangan
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">Unlimited Send Whatsapp</p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">Free Domain Undangan</p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">
                Unlimited Foto/Video Gallery
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">Unlimited Revisi</p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">Dashboard Kelola Tamu</p>
            </span>
          </div>
          <div className="flex flex-col py-6 gap-4 items-start justify-center">
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">Real-time Data Tracking</p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">E-invitation</p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">QR-Code System</p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">URL dengan kode unik</p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">Pilih Backsound Sesukamu</p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-2xl" />
              <p className="text-xl text-gray-500">Meeting Online/Offline</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
