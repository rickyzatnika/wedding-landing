import Image from "next/legacy/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-indigo-800/50 relative to-transparent py-20">
        <div className="absolute left-0 -top-10 w-52 h-52 bg-pink-600/20 rounded-full blur-lg -z-50" />
        <div className="absolute right-0 -bottom-20 w-80 h-80 bg-purple-600/30 rounded-full blur-lg -z-50" />
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="col-span-1 lg:col-span-6 px-8 space-y-6"
          >
            <h3 className="text-3xl w-fit pb-2 text-white/80 poppins">
              Tentang Kami
            </h3>
            <div className=" px-2 space-y-3">
              <p className="text-[#444] poppins text-lg antialiased leading-relaxed">
                Kami adalah perusahaan teknologi, yang khususnya untuk saat ini
                bergerak di bidang jasa pembuatan Website untuk kebutuhan acara
                penting anda seperti undangan pernikahan & ulang tahun .
              </p>
              <p className="text-[#444] poppins antialiased text-lg leading-relaxed">
                Kami terus berinovasi dengan team kreatif agar bisa membuat
                acara dan undangan anda terorganisir dengan lebih mudah, cepat
                dan praktis.
              </p>
              {show && (
                <>
                  <p className="text-[#444] poppins antialiased text-lg leading-relaxed">
                    Berdiri pada pertengahan Tahun 2021 kami mulai merintis
                    usaha di bidang digital teknologi khusunya pengembangan
                    website.
                  </p>{" "}
                  <p className="text-[#444] poppins antialiased text-lg leading-relaxed">
                    Perusahaan mengadopsi teknologi digital inovatif untuk
                    membuat perubahan budaya dan operasional yang beradaptasi
                    lebih baik dengan perubahan permintaan pelanggan.
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => setShow(!show)}
              className="py-2 px-3 antialiased text-gray-500   hover:text-gray-700"
            >
              {!show ? <span>Read More ..</span> : <span>Hide ..</span>}
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="col-span-1 lg:col-span-6 relative flex flex-col lg:block items-center gap-2"
          >
            <div className="w-full h-full">
              <Image
                src="/images/dashboard-app.png"
                alt="about-us"
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
            <div className="relative lg:absolute lg:-bottom-20 lg:right-8  ">
              <Image
                src="/images/stats.png"
                alt=""
                width={325}
                height={250}
                layout="fixed"
                objectFit="cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
