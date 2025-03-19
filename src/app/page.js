"use client";
import BackToTop from "@/component/back-to-top";
import React from "react";

export default function Home() {
  const scrollIntoView = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -120;
      const top = section.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <div>
      {/* header */}
      <header
        style={{
          backgroundImage: "url('./assets/image/contour-line-orange.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
        className="flex flex-col md:flex-row w-full items-center justify-center font-bold text-xl text-black md:h-screen"
        id="home"
      >
        <div className="flex flex-col justify-center items-center md:items-start w-full px-4 sm:px-6 md:px-8 lg:mx-8 xl:mx-16 pt-24 md:pt-32">
          <h1 className="text-center md:text-start text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900">
            <span className="font-medium">Dapatkan Hasil Maksimal, Mulai <span className="text-orange-300">Latihan</span> dengan</span> <span className="text-orange-300">Woreps</span>
          </h1>

          <h2 className="text-center md:text-start text-lg sm:text-xl md:text-2xl text-gray-600 mt-4 font-light">
            Transformasi dimulai dari sini. Woreps hadir untuk menjadikan hidupmu lebih sehat dan bugar.
          </h2>


          {/* download button */}
          <div className="flex justify-center md:justify-start items-center w-full mt-8 md:mt-16 gap-4">
            {/* btn jelajah */}
            <button
              className="w-32 sm:w-auto h-auto px-2 md:px-8 py-2 bg-orange-300 text-white text-sm md:text-2xl text-center rounded-xl cursor-pointer font-medium transition-transform duration-300 transform scale-100 hover:scale-105 shadow-sm shadow-orange-200"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jelajah
            </button>

            {/* btn download */}
            <button
              href="#"
              style={{
                backgroundImage: "url('/assets/image/google-play-badge-logo-svgrepo-com.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-32 h-12 text-white text-lg text-center rounded-sm font-medium hover:scale-105 transform transition-all duration-200"
            >
            </button>
          </div>
        </div>

        {/* mobile preview header */}
        <div className="flex justify-center items-center w-full mt-24 md:mt-12 lg:mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-0 md:-space-x-24 lg:-space-x-32 xl:-space-x-52">
            <img
              src="./assets/image/iPhone-17-header-1.svg"
              alt="iPhone Header"
              className="w-[200px] h-[320px] sm:w-[250px] sm:h-[400px] md:w-[300px] md:h-[450px] lg:w-[350px] lg:h-[500px] xl:w-[419px] xl:h-[539px]"
            />
            <img
              src="./assets/image/iPhone-16-header-2.svg"
              alt="iPhone Header"
              className="w-[200px] h-[320px] sm:w-[250px] sm:h-[400px] md:w-[300px] md:h-[450px] lg:w-[350px] lg:h-[500px] xl:w-[419px] xl:h-[539px] -mt-20 sm:-mt-0"
            />
          </div>
        </div>
      </header>

      <main className="bg-white flex flex-col min-h-screen w-full px-4 sm:px-6 md:px-10 lg:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* about */}
        <section className="relative bg-red flex flex-col font-bold text-xl text-black w-full mt-8" id="about">
          {/* Bunga Atas Kiri */}
          <img
            src="/assets/image/flower-orange-bold.svg"
            alt="flower"
            className="absolute left-0 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
          />

          {/* Konten Tengah */}
          <div className="flex flex-col items-center justify-center w-full mt-12 md:mt-16">
            <h1 className="font-light text-2xl sm:text-3xl md:text-4xl text-gray-700 text-center">
              Tentang <span className="italic text-orange-300">Woreps, Teman</span>
              <br /> <span className="italic text-orange-300">Olahragamu</span>
            </h1>
            <p className="text-gray-700 font-light text-base sm:text-lg md:text-xl lg:text-2xl text-center mt-6 md:mt-10 px-4 max-w-4xl z-10">
              Woreps membantu pengguna mencapai tujuan kebugaran dengan program workout yang ditargetkan
              dimana personal Assistant Chatbot berperan memberi saran tentang workout dan asupan makanan.
              Woreps membawa konsep firestreak daily dalam menjaga konsistensi dan motivasi pengguna.
            </p>
          </div>

          {/* Bunga kanan bawah */}
          <img
            src="/assets/image/flower-orange-medium.svg"
            alt="flower"
            className="absolute top-80 md:top-64 right-0 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
          />

          {/* card col-3 fiture*/}
          <div className="flex flex-col items-center w-full mt-32 md:mt-64" id="fitur">
            {/* Container Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12 w-full max-w-4xl">
              {/* Fitur 1 */}
              <div className="p-3 md:p-4 w-full bg-orange-50 border border-orange-300 flex items-center rounded-3xl">
                <div className="p-3 md:p-4 rounded-full bg-orange-300"></div>
                <p className="ml-4 font-light text-sm md:text-base text-gray-700">Fitur 1</p>
              </div>

              {/* Fitur 2 */}
              <div className="p-3 md:p-4 w-full bg-orange-50 border border-orange-300 flex items-center rounded-3xl">
                <div className="p-3 md:p-4 rounded-full bg-orange-300"></div>
                <p className="ml-4 font-light text-sm md:text-base text-gray-700">Fitur 2</p>
              </div>

              {/* Fitur 3 */}
              <div className="p-3 md:p-4 w-full bg-orange-50 border border-orange-300 flex items-center rounded-3xl">
                <div className="p-3 md:p-4 rounded-full bg-orange-300"></div>
                <p className="ml-4 font-light text-sm md:text-base text-gray-700">Fitur 3</p>
              </div>

              {/* Fitur 4 */}
              <div className="p-3 md:p-4 w-full bg-orange-50 border border-orange-300 flex items-center rounded-3xl">
                <div className="p-3 md:p-4 rounded-full bg-orange-300"></div>
                <p className="ml-4 font-light text-sm md:text-base text-gray-700">Fitur 4</p>
              </div>
            </div>

            {/* Gambar HP */}
            <img
              src="/assets/image/slider_review_mobile.svg"
              alt="mobile"
              className="mt-10 w-[300px] h-[256px] sm:w-[400px] sm:h-[341px] md:w-[500px] md:h-[427px] lg:w-[600px] lg:h-[512px]"
            />
          </div>
        </section>

        {/* download */}
        <section className="flex flex-col items-center justify-center font-bold text-xl text-black w-full mt-16 md:mt-24 lg:mt-32" id="faq">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="font-light text-2xl sm:text-3xl md:text-4xl text-gray-700 text-center">
              <span className="italic text-orange-300">Coba</span> Woreps, sekarang
              <br /> juga !
            </h1>
          </div>

          {/* button download */}
          <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-8 md:mt-12 gap-4 sm:gap-8 md:gap-16 lg:gap-32">
            {/* img flower light */}
            <img
              src="./assets/image/flowers-orange-light.svg"
              alt="flower"
              className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
            />

            <button
              href="#"
              style={{
                backgroundImage: "url('/assets/image/google-play-badge-logo-svgrepo-com.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-40 h-12 text-white text-lg text-center rounded-xl font-medium hover:bg-orange-300 transform transition-all duration-200"
            >
            </button>

            {/* img flower medium */}
            <img
              src="./assets/image/flower-orange-medium.svg"
              alt="flower"
              className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
            />
          </div>
        </section>

        <BackToTop />
      </main>
    </div>
  );
}