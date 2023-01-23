import Link from "next/link";
import Image from "next/legacy/image";

const Headers = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col py-28 px-0 lg:px-16 relative">
        <div className="text-center w-full lg:w-9/12 mx-auto ">
          <div className="w-full mx-auto space-y-4 leading-relaxed ">
            <h1 className="tracking-wide text-3xl md:text-4xl capitalize text-indigo-500 text-center">
              Kelola tamu dan kirim undangan menjadi lebih praktis, simple dan
              Mudah
            </h1>
            <p className="antialiased text-lg text-gray-600 px-1">
              Percayakan kepada kami acara berharga yang anda tunggu-tunggu.{" "}
              <br /> Kami menjaga kepercayaan dengan se-profesional mungkin.
            </p>
          </div>
          <div className="w-fit py-10 mx-auto">
            <Link href="about" passHref>
              <button className="w-full lg:w-fit border-2 antialiased hover:text-indigo-600 text-[#e7e7e7] border-transparent bg-gradient-to-tr from-indigo-400 to-indigo-600 font-semibold rounded hover:border-indigo-500 hover:bg-none py-2 px-7 transition-all duration-200 ">
                About Us
              </button>
            </Link>
          </div>
        </div>
        <div className="-z-50 absolute w-52 h-52 right-40 top-40 rounded-full bg-pink-400/30 blur-xl" />
        <div className="-z-50 absolute w-72 h-72 right-60 top-52 rounded-full bg-gradient-to-tr from-purple-600/40 to-transparent  blur-xl" />
        <div className="relative w-full mt-8 grid grid-col-1 lg:grid-cols-3 text-center items-center justify-center">
          {/* info section 1 ( Access Dashboard )*/}
          <div className="w-full cols-span-4 p-1 relative top-0 hover:-top-5 hover:transition-all duration-300 ease-linear">
            <div className="px-2 flex flex-col items-center bg-gradient-to-tr from-indigo-300 rounded to-transparent py-10">
              <Image
                src="/images/contract.png"
                alt="icons-dashboard"
                width={100}
                height={100}
              />
              <h1 className="p-4 font-semibold text-indigo-900/70 text-md">
                Akses Dashboard
              </h1>
              <p className="text-base text-gray-500">
                Fitur menarik dan navigasi yang mudah untuk menyimpan semua tamu
                undangan anda
              </p>
            </div>
          </div>
          {/* info section 2 ( Web Digital )*/}
          <div className="w-full cols-span-4 p-1 relative top-0 hover:-top-5 hover:transition-all duration-300 ease-linear">
            <div className="px-2 flex flex-col items-center bg-gradient-to-tr lg:bg-gradient-to-t from-indigo-300 rounded to-transparent py-10">
              <Image
                src="/images/invite.png"
                alt="icons-dashboard"
                width={100}
                height={100}
              />
              <h1 className="p-4 font-semibold text-indigo-900/70 text-md">
                Web Undangan Digital
              </h1>
              <p className="text-base text-gray-500">
                Pilihan design menarik dan Elegan bebas anda pilih, dan
                unlimited revisi
              </p>
            </div>
          </div>
          {/* info section 3 ( Qr-Code ) */}
          <div className="w-full cols-span-4 p-1 relative top-0 hover:-top-5 hover:transition-all duration-300 ease-linear">
            <div className="px-2 flex flex-col items-center bg-gradient-to-tl from-indigo-300 rounded to-transparent py-10">
              <Image
                src="/images/qr-scan.png"
                alt="icons-dashboard"
                width={100}
                height={100}
              />
              <h1 className="p-4 font-semibold text-indigo-900/70 text-md">
                Verifikasi Qr-Code
              </h1>
              <p className="text-base text-gray-500">
                Sistem registrasi Qr-Code untuk menghindari tamu tak diundang
                pada acara anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;
