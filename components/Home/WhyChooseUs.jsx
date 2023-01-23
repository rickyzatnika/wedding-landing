import { motion } from "framer-motion";
import { BsCheckLg } from "react-icons/bs";

const WhyChooseUs = () => {
  return (
    <>
      <div
        id="features"
        className="w-full h-full px:10 lg:px-20 bg-gradient-to-t from-indigo-600/40 to-transparent"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-left text-xl lg:text-2xl px-2 lg:px-0 text-indigo-600/80 py-4 my-10 lg:my-10 "
        >
          Why <b className="border-b-2 border-indigo-600">Choose</b> Us ??
        </motion.h1>
        <div className="w-full pb-10 grid items-start px-6 lg:px-20 grid-cols-1 lg:grid-cols-2 ">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex py-0 lg:py-6 flex-col gap-5 items-self-start  justify-center"
          >
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Fitur Web Undangan Lengkap
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Responsive & User Friendly
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Unlimited Input Tamu undangan
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Unlimited Send Whatsapp
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Free Domain Undangan
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Unlimited Foto/Video Gallery
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Unlimited Revisi
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Dashboard Kelola Tamu
              </p>
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col py-6 gap-5 items-start justify-center"
          >
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Real-time Data Tracking
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">E-invitation</p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">QR-Code System</p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                URL dengan kode unik
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Pilih Backsound Sesukamu
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BsCheckLg className="text-indigo-600 text-xl lg:text-2xl" />
              <p className="text-md lg:text-xl text-gray-500">
                Meeting Online/Offline
              </p>
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
