import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [visible, setVisible] = useState("content-1");

  return (
    <>
      <div
        id="portfolio"
        className="w-full h-full px-4 lg:px-20 py-10 lg:py-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-2"
        >
          <h2 className="text-4xl text-gray-500">
            Our{" "}
            <span className="font-semibold border-b-2 text-gray-600 border-indigo-600/80">
              Work
            </span>
          </h2>
          <p className="text-gray-500/80">
            Berikut adalah sample design web undangan dari system kami
          </p>
        </motion.div>
        <div className="w-full h-full grid items-center justify-center gap-12 lg:gap-2 py-14 grid-cols-1 lg:grid-cols-12">
          <div className=" col-span-1 lg:col-span-4">
            <div className="w-full flex flex-col lg:flex-row flex-nowrap gap-2">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                onClick={() => setVisible("content-1")}
                className={`flex flex-row gap-4 lg:gap-0  lg:flex-col flex-nowrap items-start lg:items-center bg-[#212121] w-full lg:w-fit  justify-between py-2 px-2 lg:px-0 lg:justify-around h-full lg:h-[520px] ${
                  visible === "content-1"
                    ? "text-indigo-500 "
                    : "text-[#e7e7e7]"
                }`}
              >
                <span>01</span>
                <span className="rotate-0 lg:-rotate-90 ">Rio & Zahra </span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                onClick={() => setVisible("content-2")}
                className={`flex  flex-row gap-4 lg:gap-0 lg:flex-col flex-nowrap items-start lg:items-center  bg-[#212121] w-full lg:w-fit  justify-between py-2 px-2 lg:px-0  lg:justify-around h-full lg:h-[520px] ${
                  visible === "content-2" ? "text-amber-600" : "text-[#e7e7e7]"
                }`}
              >
                <span>02</span>
                <span className="rotate-0 lg:-rotate-90">Ridwan & Winda </span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                onClick={() => setVisible("content-3")}
                className={`flex  flex-row gap-4 lg:gap-0 lg:flex-col flex-nowrap items-start lg:items-center  bg-[#212121] w-full lg:w-fit  justify-between py-2 px-2 lg:px-0  lg:justify-around h-full lg:h-[520px] ${
                  visible === "content-3" ? "text-purple-500" : "text-[#e7e7e7]"
                }`}
              >
                <span>03</span>
                <span className="rotate-0 lg:-rotate-90">Ridwan Winda </span>
              </motion.button>
            </div>
          </div>
          <div className="w-full h-full col-span-1 lg:col-span-8">
            {visible === "content-1" && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full gap-5 flex flex-col"
                >
                  <div className="w-full flex gap-3">
                    <span
                      className={` ${
                        visible === "content-1"
                          ? "text-indigo-500 text-xl font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      -01
                    </span>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between">
                      <p className="text-gray-600">Web Undangan Private</p>
                      <p className="text-gray-600">Kode Undangan : 2fc7</p>
                    </div>
                  </div>
                  <Image
                    src="/images/rio-zahra.png"
                    alt=""
                    width={50}
                    height={25}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="top center"
                    priority
                  />
                  <p className="text-gray-500">
                    Kelebihan dari design yang pertama ini adalah undangan tidak
                    bisa diakses oleh umum, hanya orang yang memiliki kode
                    undangan yang dapat mengakses nya.
                  </p>
                  <div className="flex group items-center gap-2 text-gray-500">
                    <Link
                      passHref
                      target="_blank"
                      className=""
                      href="https://rio-zahra.inkara.id"
                    >
                      Link Demo
                    </Link>
                    <HiOutlineArrowLongRight
                      size={24}
                      className="relative left-0 group-hover:left-4 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              </>
            )}
            {visible === "content-2" && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full gap-5 flex flex-col"
                >
                  <div className="w-full flex gap-3">
                    <span
                      className={` ${
                        visible === "content-2"
                          ? "text-amber-500 text-xl font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      -02
                    </span>
                    <div className="flex items-center w-full justify-between">
                      <p className="text-gray-600">Web Undangan Multi</p>
                    </div>
                  </div>
                  <Image
                    src="/images/ridwan-winda.png"
                    alt=""
                    width={50}
                    height={25}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="top center"
                    priority
                  />
                  <p className="text-gray-500">
                    Selain Design undangan yang sederhana dan elegan, udangan
                    ini bisa diakses dengan kode unik atau tanpa kode unik.
                  </p>
                  <div className="flex group items-center gap-2 text-gray-500">
                    <Link
                      className=""
                      href="https://ridwan-winda.inkara.id"
                      passHref
                      target="_blank"
                    >
                      Link Demo
                    </Link>
                    <HiOutlineArrowLongRight
                      size={24}
                      className="relative left-0 group-hover:left-4 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              </>
            )}
            {visible === "content-3" && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full gap-5 flex flex-col"
                >
                  <div className="w-full flex gap-3">
                    <span
                      className={` ${
                        visible === "content-3"
                          ? "text-indigo-500 text-xl font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      -03
                    </span>
                    <div className="flex items-center w-full justify-between">
                      <p className="text-gray-600">
                        Web Undangan dengan Atau tanpa Kode Unik
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/images/kode-unik.png"
                    alt=""
                    width={50}
                    height={25}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                  />
                  <p className="text-gray-500">
                    Tampilkan nama tamu undangan pada halaman web undangan dan
                    form input konfirmasi kehadiran yang secara real-time
                    terhubung ke dashboard anda.
                  </p>
                  <div className="flex group items-center gap-2 text-gray-500">
                    <Link
                      className=""
                      passHref
                      target="_blank"
                      href="https://ridwan-winda.inkara.id/2fc7"
                    >
                      Link Demo
                    </Link>
                    <HiOutlineArrowLongRight
                      size={24}
                      className="relative left-0 group-hover:left-4 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
