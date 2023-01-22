import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-indigo-800/50 relative to-transparent py-20">
        <div className="absolute left-0 -top-10 w-52 h-52 bg-pink-600/20 rounded-full blur-lg -z-50" />
        <div className="absolute right-0 -bottom-20 w-80 h-80 bg-purple-600/30 rounded-full blur-lg -z-50" />
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center-gap-4">
          <div className="col-span-1 lg:col-span-6 px-8 space-y-6">
            <h3 className="text-3xl w-fit pb-2 text-indigo-700 poppins">
              Tentang Kami
            </h3>
            <div className="pb-6 px-2 leading-relaxed space-y-3">
              <p className="text-[#333] poppins antialiased text-lg leading-relaxed">
                Kami adalah perusahaan teknologi, yang khususnya untuk saat ini
                bergerak di bidang jasa pembuatan Website untuk kebutuhan acara
                penting anda seperti undangan pernikahan, anniversary & ulang
                tahun .
              </p>
              <p className="text-[#333] poppins antialiased text-lg leading-relaxed">
                Kami terus berinovasi dengan team kreatif agar bisa membuat
                acara dan undangan anda terorganisir dengan lebih mudah, cepat
                dan praktis.
              </p>
            </div>
            <Link href="about">
              <button className="py-3 px-7 border border-white/40 antialiased text-[#dfdddd] hover:text-[#e7e7e7]  hover:bg-gradient-to-br from-indigo-400 to-indigo-600 rounded hover:border-indigo-500 bg-none transition-all duration-200">
                Read More ..
              </button>
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-6">
            <div className="w-full h-full">
              <Image
                src="/images/test.png"
                alt="about-us"
                width={75}
                height={50}
                layout="responsive"
                objectFit="contain"
                objectPosition="center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
