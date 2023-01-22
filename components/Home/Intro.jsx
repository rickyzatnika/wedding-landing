import Image from "next/legacy/image";
import React from "react";

const Intro = () => {
  return (
    <>
      <div className="w-full h-full my-20 lg:my-40 px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 text-center gap-8 lg:gap-1 items-center justify-center">
          <div className="w-full h-full leading-8  col-span-1 lg:col-span-6">
            <Image
              src="/images/three-mobile.png"
              alt=""
              width={500}
              height={375}
              priority
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="col-span-1 lg:col-span-6 leading-8 ">
            <p className="text-xl  lg:text-3xl text-[#181818]  poppins ">
              Undang Orang-orang, Teman atau kolega anda menjadi lebih Praktis,
              Simple dan Elegan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
