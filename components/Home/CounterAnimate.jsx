import { useState, useEffect } from "react";

const Clients = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < 866) {
        setNumber((prev) => prev + 1);
      }
    }, [400]);
    return () => {
      clearInterval(interval);
    };
  }, [number]);

  return (
    <>
      <div className="py-14 lg:py-24 w-full h-full">
        <p className="w-full px-4 text-gray-600 lg:w-2/6 mx-auto text-center py-10 capitalize text-lg">
          sebuah pencapaian besar kami,
          <br /> dengan menjaga kepercayaan semua client
        </p>
        <div className="  flex flex-col lg:flex-row gap-10 lg:gap-40 justify-center relative ">
          <div className="flex flex-col items-center px-2 lg:px0 gap-2  ">
            <span className=" text-5xl lg:text-6xl text-indigo-500 poppins font-bold">
              {number % 200}+
            </span>
            <p className="text-lg lg:text-xl text-[#313131]  capitalize">
              clients
            </p>
          </div>
          <div className="flex flex-col items-center px-2 lg:px0 gap-2 ">
            <span className=" text-5xl lg:text-6xl  poppins text-indigo-500 font-bold">
              {number + 185}+
            </span>
            <p className="text-lg lg:text-xl text-center text-[#313131] racking-widest capitalize">
              Guest Invitation
            </p>
          </div>
          <div className="flex flex-col items-center px-2 lg:px0  gap-2 ">
            <span className=" text-5xl lg:text-6xl text-indigo-500 poppins font-bold">
              {number + 485}+
            </span>
            <p className="text-lg lg:text-xl text-left lg:text-right text-[#313131]  capitalize">
              Whatsapp Send
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
