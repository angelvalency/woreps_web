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

      setActiveButton(id);
      setIsSidebarOpen(false); 
    }
  }

  return (
    <main className="bg-white flex flex-col m-0 p-0 min-h-screen w-full sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* header */}
      <header
        style={{
          backgroundImage: "url('./assets/image/contour-line.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}

        className="flex flex-col w-full items-center justify-center sm:items-left font-bold text-xl text-black w-full" id="home">

        <h1 className="font-medium text-center text-6xl text-gray-700">
          <span className="text-orange-300">Woreps</span> Help People <span className="font-tangerine-italic text-[56px] text-gray-700" style={{ fontFamily: "Tangerine, cursive", fontWeight: "200", fontStyle: "normal", fontSize: "86px" }}>to reach</span> <br />
          their Workout Goals
        </h1>

        {/* mobile preview header */}
        <div className="flex justify-center items-center w-full mt-18">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 -space-x-44 mt-12 sm:mt-0">
            <img
              src="./assets/image/iPhone-17-header-1.svg"
              alt="iPhone Header"
              className="w-[89px] h-[209px] sm:w-[419px] sm:h-[539px] sm:-ml-10"
            />
            <img
              src="./assets/image/iPhone-16-header-2.svg"
              alt="iPhone Header"
              className="w-[99px] h-[209px] sm:w-[419px] sm:h-[539px] -mt-48"
            />
          </div>
        </div>

        {/* download button */}
        <div className="flex justify-center items-center w-full mt-2 gap-4">

          {/* btn jelajah */}
          <button className="w-auto h-auto px-8 py-2 bg-orange-300 text-white text-2xl text-center rounded-xl cursor-pointer font-medium -mt-12 transition-transform duration-300 transform scale-100 hover:scale-105 shadow-lg shadow-orange-200"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Jelajah
          </button>

          {/* btn download */}
          <button
            style={{
              backgroundImage: "url('/assets/image/google-play-badge-logo-svgrepo-com.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-40 h-12 bg-orange-200 text-white text-lg text-center rounded-xl font-medium -mt-12 hover:bg-orange-300 transform transition-all duration-200"
          >
          </button>
        </div>

      </header>

      {/* about */}
      <section className="relative flex flex-col font-bold text-xl text-black w-full mt-52" id="about">
        {/* Bunga Atas Kiri */}
        <img
          src="/assets/image/flower-orange-bold.svg"
          alt="flower"
          className="absolute  left-0 w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]"
        />

        {/* Konten Tengah */}
        <div className="flex flex-col items-center justify-center w-full mt-12">
          <h1 className="font-light text-4xl text-gray-700 text-center">
            Tentang <span className="italic text-orange-300">Woreps, Teman</span>
            <br /> <span className="italic text-orange-300">Olahragamu</span>
          </h1>
          <p className="text-gray-700 font-light text-2xl text-center mt-10 max-w-4xl">
            Woreps membantu pengguna mencapai tujuan kebugaran dengan program workout yang ditargetkan
            dimana personal Assistant Chatbot berperan memberi saran tentang workout dan asupan makanan.
            Woreps membawa konsep firestreak daily dalam menjaga konsistensi dan motivasi pengguna.
          </p>
        </div>

        {/* Bunga kanan bawah */}
        <img
          src="/assets/image/flower-orange-medium.svg"
          alt="flower"
          className="absolute top-64 right-0 w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]"
        />

        {/* card col-3 fiture*/}
        <div className="flex flex-col items-center w-full mt-64" id="fiture">
          {/* Container Card */}
          <div className="grid grid-cols-2 gap-12 w-full max-w-4xl">
            {/* Fitur 1 */}
            <div className="p-4 w-full bg-orange-50 border border-orange-300 flex items-center rounded-3xl">
              <div className="p-4 rounded-full bg-orange-300"></div>
              <p className="ml-4 font-light text-gray-700">Fitur 1</p>
            </div>

            {/* Fitur 2 */}
            <div className="p-4 w-full bg-orange-50 border border-orange-300 flex items-center rounded-3xl">
              <div className="p-4 rounded-full bg-orange-300"></div>
              <p className="ml-4 font-light text-gray-700">Fitur 2</p>
            </div>

            {/* Fitur 3 */}
            <div className="p-4 w-full bg-orange-50 border border-orange-300 flex items-center rounded-3xl">
              <div className="p-4 rounded-full bg-orange-300"></div>
              <p className="ml-4 font-light text-gray-700">Fitur 3</p>
            </div>

            {/* Fitur 4 */}
            <div className="p-4 w-full bg-orange-50 border border-orange-300 flex items-center rounded-3xl">
              <div className="p-4 rounded-full bg-orange-300"></div>
              <p className="ml-4 font-light text-gray-700">Fitur 4</p>
            </div>
          </div>

          {/* Gambar HP */}
          <img
            src="/assets/image/slider_review_mobile.svg"
            alt="mobile"
            className="mt-10 w-[600px] h-[512px]sm:w-[200px] sm:h-[200px]"
          />
        </div>
      </section>

      {/* download */}
      <section className="flex flex-col items-center justify-center sm:items-center font-bold text-xl text-black w-full mt-32" id="faq">
        <div className="flex flex-col  justify-center items-center w-full">
          <h1 className="font-light text-4xl text-gray-700 text-center">
            <span className="italic text-orange-300">Coba</span> Woreps, sekarang
            <br /> juga !
          </h1>
        </div>

        {/* button download */}
        <div className="flex justify-center gap-32 items-center w-full mt-12">
          {/* img flower light */}
          <img
            src="./assets/image/flowers-orange-light.svg"
            alt="flower"
            className="bottom-64 left-0 w-[20px] h-[20px] sm:w-[200px] sm:h-[200px]"
          />
          <button
            style={{
              backgroundImage: "url('/assets/image/google-play-badge-logo-svgrepo-com.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-40 h-28 text-white text-lg text-center items-center rounded-xl font-medium mt-12 transform transition-all animate-bounce duration-200"
          ></button>

          {/* img flower medium */}
          <img
            src="./assets/image/flower-orange-medium.svg"
            alt="flower"
            className="bottom-32 left-0 w-10 h-10 sm:w-[200px] sm:h-[200px]"
          />

        </div>
      </section>


      <BackToTop />
    </main>
  );
}
