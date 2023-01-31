import Image from "next/legacy/image";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <div className="w-full h-full my-20 lg:my-40 px-6 lg:px-20 relative">
        <div className="absolute left-0 top-0 -z-50 opacity-30 anima">
          <Image
            src="/images/baruleud.png"
            alt=""
            width={150}
            height={125}
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 text-center gap-8 lg:gap-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-full h-full leading-8  col-span-1 lg:col-span-6"
          >
            <Image
              src="/images/three-mobile.png"
              alt=""
              width={500}
              height={375}
              priority
              objectFit="contain"
              objectPosition="center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="col-span-1 lg:col-span-6 leading-8 "
          >
            <p className="text-xl  lg:text-3xl text-[#212121] antialiased poppins ">
              Undang Orang-orang,{" "}
              <span className="text-indigo-500 font-semibold">
                Teman atau kolega anda menjadi lebih Praktis
              </span>
              , Simple dan Elegan
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Intro;
