import React from "react";
import Card from "./Card";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";

const PricingCard = () => {
  return (
    <>
      <div className="w-full h-full pb-40 px-4 lg:px-14 ">
        <h1 className="text-3xl lg:text-4xl text-center text-gray-600 capitalize py-10 lg:py-20">
          paket dan harga
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <div className="w-full px-2 py-5">
              <div className="flex items-center justify-between px-10 p-6 ">
                <span className="w-8 h-8 absolute top-10 -left-4 rotate-45 bg-amber-400/60"></span>
                <h2 className="text-xl poppins text-[#f0f0f0] ">PAKET 1</h2>
                <s className="text-red-600/80">Rp. 399.000,-</s>
              </div>
              {/* Head Content */}
              <div className="w-full flex items-center justify-between py-2 ">
                <div className="w-full flex items-center  gap-2 ">
                  <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                  <p className="capitalize text-[#e6e6e6]">
                    Gallery Foto (10 foto)
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">
                  Gallery Video (2 video)
                </p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Unlimited Revisi</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Free Subdomain</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Backsound lagu</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Wedding Wish</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Amplop Digital</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCloseCircleOutline className="text-red-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Akses Dashboard</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCloseCircleOutline className="text-red-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Kode Unik</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCloseCircleOutline className="text-red-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Qr-code System</p>
              </div>
            </div>
            <div className="relative lg:absolute bottom-0 w-full p-2 flex items-center justify-between">
              <p className="p-2 text-white poppins font-semibold capitalize">
                harga promo :
              </p>
              <p className="text-xl text-amber-400/90 font-semibold">
                {" "}
                Rp.249.999,-{" "}
              </p>
            </div>
          </Card>

          {/* Card 2 */}
          <Card>
            <div className="w-full px-2 py-5">
              <div className="flex items-center justify-between px-10 p-6 ">
                <span className="w-8 h-8 absolute top-10 -left-4 rotate-45 bg-green-500/70"></span>
                <h2 className="text-xl poppins text-[#f0f0f0] ">PAKET 2</h2>
                <s className="text-red-600/80">Rp. 749.000,-</s>
              </div>
              {/* Head Content */}
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">
                  Max 1000 Tamu undangan
                </p>
              </div>
              <div className="w-full flex items-center justify-between py-2 ">
                <div className="w-full flex items-center  gap-2 ">
                  <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                  <p className="capitalize text-[#e6e6e6]">
                    Gallery Foto (30 foto)
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">
                  Gallery Video (10 video)
                </p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Unlimited Revisi</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">
                  Unlimited Send Whatsapp
                </p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Free Subdomain</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Backsound lagu</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Wedding Wish</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Amplop Digital</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Akses Dashboard</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Kode Unik</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Qr-code System</p>
              </div>
            </div>
            <div className="p-2 flex items-center justify-between">
              <p className="p-2 text-white poppins font-semibold capitalize">
                harga promo :
              </p>
              <p className="text-xl text-green-500/90 font-semibold">
                {" "}
                Rp.499.000,-{" "}
              </p>
            </div>
          </Card>
          {/* Card 3 */}
          <Card>
            <div className="w-full px-2 py-5">
              <div className="flex items-center justify-between px-10 p-6 ">
                <span className="w-8 h-8 absolute top-10 -left-4 rotate-45 bg-red-600/60"></span>
                <h2 className="text-xl poppins text-[#f0f0f0] ">PAKET 3</h2>
                <s className="text-red-600/80">Rp. 999.000,-</s>
              </div>
              {/* Head Content */}
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">
                  Unlimited Tamu undangan
                </p>
              </div>
              <div className="w-full flex items-center justify-between py-2 ">
                <div className="w-full flex items-center  gap-2 ">
                  <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                  <p className="capitalize text-[#e6e6e6]">
                    Unlimited Gallery Foto
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">
                  Unlimited Gallery Video
                </p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Unlimited Revisi</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">
                  Unlimited Send Whatsapp
                </p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Free domain sendiri</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Backsound lagu</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Wedding Wish</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Amplop Digital</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Akses Dashboard</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Kode Unik</p>
              </div>
              <div className="w-full flex items-center py-2  gap-2 ">
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                <p className="capitalize text-[#e6e6e6]">Qr-code System</p>
              </div>
            </div>
            <div className="p-2 flex items-center justify-between">
              <p className="p-2 text-white poppins font-semibold capitalize">
                harga promo :
              </p>
              <p className="text-xl text-red-600/80 font-semibold">
                {" "}
                Rp.749.000,-{" "}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
