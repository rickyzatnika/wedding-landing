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
      <div className=" w-full flex flex-col lg:flex-row gap-10 lg:gap-40 pt-20 pb-20 lg:pt-24 justify-center relative ">
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
    </>
  );
};

export default Clients;
