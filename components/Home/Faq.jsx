import Link from "next/link";
import React, { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(id === activeId ? null : id);
    setIsOpen(id === activeId ? !isOpen : true);
  };

  return (
    <>
      <div
        id="accordion-open"
        data-accordion="open"
        className=" w-full h-full px-4 lg:px-0 lg:w-4/6 mx-auto my-10 lg:my-24 pb-40"
      >
        {" "}
        <div className="mb-14 text-center">
          <h1 className="text-center text-2xl font-semibold text-[#414141]">
            {" "}
            FAQ
          </h1>
          <p className="text-gray-500">Pertanyaan yang sering diajukan</p>
        </div>
        {/* Accordion Body 1 */}
        <div>
          <h2 id="accordion-open-heading-1">
            <button
              onClick={() => toggleAccordion("accordion-open-body-1")}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-1"
              aria-expanded="true"
              aria-controls="accordion-open-body-1"
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 shrink-0"
                  fill="#7286D3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
                Bagaimana rules atau proses jika ingin bekerja sama atau
                menggunakan jasa kami ?
              </span>
              <svg
                data-accordion-icon
                className={` w-6 h-6 shrink-0 ${
                  isOpen && activeId === "accordion-open-body-1"
                    ? "rotate-180 "
                    : "rotate-0 "
                }`}
                fill="#7286D3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-1"
            className={` ${
              isOpen && activeId === "accordion-open-body-1"
                ? "block"
                : "hidden"
            }`}
            aria-labelledby="accordion-open-heading-1"
          >
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400 leading-relaxed">
                Hubungi admin sales kami pada navigasi bar diatas atau{" "}
                <Link
                  href="/contact-sales"
                  className="text-blue-400 border-b italic border-blue-400"
                  passHref
                >
                  klik disini
                </Link>{" "}
                .
                <br />
                Konfirmasikan kepada admin paket undangan pada halaman{" "}
                <Link
                  href="pricing"
                  passHref
                  className="text-blue-400 border-b italic border-blue-400"
                >
                  Pricing
                </Link>{" "}
                dan design undangan pada halaman{" "}
                <Link
                  href="portfolio"
                  passHref
                  className="text-blue-400 border-b italic border-blue-400"
                >
                  Portfolio
                </Link>{" "}
                yang anda pilih, setelah itu pengerjaan web akan kami proses.
              </p>
              <br />
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Setelah pengerjaan selesai kami akan koordinasikan kepada anda
                hasil awal yang telah kami buat, jika dirasa kurang kami siap
                melakukan perbaikan sampai anda merasa puas dengan hasilnya.
              </p>
              <br />
              <div className="flex flex-wrap gap-2">
                <p className="text-gray-500 dark:text-gray-400">Note :</p>
                <p className="italic text-red-400">
                  Pastikan untuk menghubungi kami minimal 2 - 3 bulan sebelum
                  Acara .
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Accordion Body 2 */}
        <div>
          <h2 id="accordion-open-heading-2">
            <button
              onClick={() => toggleAccordion("accordion-open-body-2")}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-2"
              aria-expanded="false"
              aria-controls="accordion-open-body-2"
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 shrink-0"
                  fill="#7286D3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Bagaimana jika konten, foto atau video belum ada ?
              </span>
              <svg
                data-accordion-icon
                className={` w-6 h-6 shrink-0 ${
                  isOpen && activeId === "accordion-open-body-2"
                    ? "rotate-180 "
                    : "rotate-0 "
                }`}
                fill="#7286D3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-2"
            className={` ${
              isOpen && activeId === "accordion-open-body-2"
                ? "block"
                : "hidden"
            }`}
            aria-labelledby="accordion-open-heading-2"
          >
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Bisa saja, konten, foto atau video bisa menyusul. Agar tidak
                menghambat waktu pembuatan web undangan yang telah anda
                korfirmasikan kepada admin kami, sebagai gantinya kami
                menggunakan dummy data untuk sementara.
              </p>
              <br />
              <div className="flex gap-2 flex-wrap">
                <p className=" mb-2 text-gray-500 dark:text-gray-400 flex gap-2">
                  Note :{" "}
                </p>
                <p className="text-red-400 italic">
                  pastikan untuk dikirim sesegera mungkin, demi kenyamanan dan
                  kelancaran bersama
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Accordion Body 3 */}
        <div>
          <h2 id="accordion-open-heading-3">
            <button
              onClick={() => toggleAccordion("accordion-open-body-3")}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-3"
              aria-expanded="false"
              aria-controls="accordion-open-body-3"
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 shrink-0"
                  fill="#7286D3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
                Apa itu URL dengan kode unik ?
              </span>
              <svg
                data-accordion-icon
                className={` w-6 h-6 shrink-0 ${
                  isOpen && activeId === "accordion-open-body-3"
                    ? "rotate-180 "
                    : "rotate-0 "
                }`}
                fill="#7286D3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-3"
            className={` ${
              isOpen && activeId === "accordion-open-body-3"
                ? "block"
                : "hidden"
            }`}
            aria-labelledby="accordion-open-heading-3"
          >
            <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400 leading-relaxed">
                URL (Uniform Resource Locator) yang mana nantinya itu adalah
                alamat dari web undangan anda, contoh{" "}
                <span className="italic">`https://domain-anda.com`</span>. Jika
                anda memilih paket undangan dengan kode unik, hasilnya akan
                seperti ini{" "}
                <span className="italic">
                  `https://domain-anda.com/kode-unik`
                </span>
                . Kode unik ini berfungsi untuk menampilkan nama tamu undangan
                pada website undangan anda, dan menampilkan status Hadir/tidak
                secara Real-time pada halaman dashboard.
              </p>
            </div>
          </div>
        </div>
        {/* Accordion Body 4 */}
        <div>
          <h2 id="accordion-open-heading-4">
            <button
              onClick={() => toggleAccordion("accordion-open-body-4")}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-4"
              aria-expanded="false"
              aria-controls="accordion-open-body-4"
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 shrink-0"
                  fill="#7286D3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
                Bagaimana akses masuk ke dashboard untuk mengeleloa tamu
                undangan ?
              </span>
              <svg
                data-accordion-icon
                className={` w-6 h-6 shrink-0 ${
                  isOpen && activeId === "accordion-open-body-4"
                    ? "rotate-180 "
                    : "rotate-0 "
                }`}
                fill="#7286D3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-4"
            className={` ${
              isOpen && activeId === "accordion-open-body-4"
                ? "block"
                : "hidden"
            }`}
            aria-labelledby="accordion-open-heading-4"
          >
            <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Akses untuk halaman dashboard akan kami berikan setelah anda
                konfirmasi bukti pembayaran paket undangan yang anda pilih
                kepada admin kami.
              </p>
            </div>
          </div>
        </div>
        <div className="text-gray-500 py-4 flex gap-2">
          <p>Masih ada pertanyaan lain ?</p>
          <Link
            target="_blank"
            className="italic border-b border-gray-400 text-gray-400 hover:border-gray-600 hover:text-gray-600"
            href="https://wa.wizard.id/0771c2"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </>
  );
};

export default Faq;
