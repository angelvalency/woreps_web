"use client";
import BackToTop from "@/component/back-to-top";
import React from "react";
// import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="bg-white flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 w-full">

        {/* header */}
        <header className="flex flex-col gap-8 items-center justify-center sm:items-center font-bold text-xl text-black w-full" id="home">
          <h1 className="font-light text-center text-[48px] text-gray-700">
            We Help People <span className="font-tangerine-italic text-[56px] text-gray-700" style={{ fontFamily: "Tangerine, cursive", fontWeight: "200", fontStyle: "normal", fontSize: "86px" }}>to reach</span> <br />
            their Workout Goals
          </h1>

          {/* mobile preview header */}
          <div className="flex justify-center items-center w-full">
            <div className="flex items-center justify-center -space-x-44 mt-12">
              <img src="./assets/image/iPhone-17-header-1.svg" alt="iPhone Header" className="w-[419px] h-[539px] " />
              <img src="./assets/image/iPhone-16-header-2.svg" alt="iPhone Header" className="w-[419px] h-[539px] -mt-48" />
            </div>
          </div>

          {/* download button */}
          <button className="w-52 h-12 px-8 py-2 bg-orange-200 text-white text-lg text-center rounded-[60px] font-medium -mt-12 hover:bg-orange-300 tranform-scale-x-2 transition-all duration-200">
            Download
          </button>
        </header>

        {/* about */}
        <section className="items-start sm:items-center font-bold text-xl text-black w-full mt-20" id="about">
          <div className="flex justify-between w-full">
            <h1 className="font-light text-3xl text-gray-700">We Offer you Workout in <br></br> <span className="italic text-orange-300">Comfort</span> and <span className="italic text-orange-300">Pleasure</span></h1>
            <h3 className="font-light items-end text-lg text-gray-700">We will recommend to you which <br></br>exercises and foods are suitable for you <br></br> between 2 categories</h3>
          </div>
          {/* container */}
          <div className="flex items-center justify-center gap-32 -mt-12">
            {/* card 1 features */}
            <div className="bg-gray-100 w-64 h-72 rounded-[15px] flex flex-col items-center justify-center mt-48">
              {/* pic */}
              <div className="bg-black w-58 h-36 mb-32 rounded-lg"></div>
            </div>
            {/* card 2 features */}
            <div className="bg-gray-100 w-64 h-72 rounded-[15px] flex flex-col items-center justify-center">
              {/* pic */}
              <div className="bg-black w-58 h-36 mb-32 rounded-lg"></div>
            </div>
            {/* card 3 features */}
            <div className="bg-gray-100 w-64 h-72 rounded-[15px] flex flex-col items-center justify-center mt-48">
              {/* pic */}
              <div className="bg-black w-58 h-36 mb-32 rounded-lg"></div>
            </div>
            {/* card 4 features */}
            <div className="bg-gray-100 w-64 h-72 rounded-[15px] flex flex-col items-center justify-center">
              {/* pic */}
              <div className="bg-black w-58 h-36 mb-32 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* faq */}
        <section className="items-start sm:items-center font-bold text-xl text-black w-full" id="about">
          <h1 className="font-light text-xl text-gray-700">ppp</h1>
        </section>



      </main>

      <BackToTop />
    </div>
  );
}
