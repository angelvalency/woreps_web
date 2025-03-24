"use client";
import React from "react";


export default function UnduhSection() {
    return (
        <section className="relative flex flex-col items-center justify-center font-bold text-xl text-black w-full mt-16 md:mt-24" id="unduh">
            <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl text-gray-700 text-center">
                Yuk, mulai<span className="italic text-orange-300"> hidup sehat</span>
                <br /> Unduh <span className="italic text-orange-300"> Woreps </span>
                sekarang!
            </h1>
            <p className="text-gray-600 text-lg font-light sm:text-xl md:text-2xl text-center mt-8 px-6 max-w-4xl">
                Dapatkan program workout yang sesuai kebutuhan, pantau durasi latihan dengan timer otomatis, dan hitung kalori yang terbakar secara real-time.
                Woreps siap menemani perjalanan kebugaranmu agar tetap semangat dan konsisten!
            </p>

            <button className="w-auto h-16 px-2 md:px-6 py-2 mt-12 bg-orange-300 text-white font-medium text-sm md:text-xl rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg shadow-orange-200 animate-bounce">
                Download Sekarang !
            </button>
        </section>
    );
}