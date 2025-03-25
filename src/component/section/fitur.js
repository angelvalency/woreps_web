"use client";
import React from "react";
import Image from "next/image";

export default function FiturSection() {
    return (
        <section className="relative flex flex-col font-bold text-black w-full md:w-max-content mt-12 md:mt-24 lg:mt-36" id="fitur">
            <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-700 text-center px-4 mb-12 md:mb-16 lg:mb-20">
                Temukan <span className="italic text-orange-300">Cara Baru</span>
                <br /> Untuk mencapai<span className="italic text-orange-300"> Target Olahraga</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-between w-full md:px-8 lg:px-16 max-w-7xl mx-auto">
                {/* Left content - Workout List */}
                <div className="w-full md:w-1/4 md:mb-52">
                    <h2 className="text-gray-700 font-semibold text-xl md:text-xl lg:text-2xl mb-4 md:mb-6 mt-2 text-center md:text-start">
                        Workout List
                    </h2>
                    <ul className="space-y-6 text-gray-700 font-light text-lg md:text-xl">
                        {[
                            "Program workout sesuai kebutuhan",
                            "Beragam pilihan latihan",
                            "Timer untuk menghitung durasi olahraga",
                            "Menghitung kalori terbakar",
                        ].map((text, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="min-w-6 mt-1">
                                    <Image
                                        src="/assets/image/check-circle-svgrepo-com.svg"
                                        alt="check"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 text-yellow-400"
                                    />
                                </div>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Center - Phone Images */}
                <div className="w-full p-16 flex items-center justify-center">
                    <Image
                        src="/assets/image/mobile-preview.svg"
                        alt="workout app preview"
                        width={500}
                        height={400}
                        priority // Mengoptimalkan loading gambar utama
                    />
                </div>

                {/* Right content - History */}
                <div className="w-full md:w-1/4 md:mt-24">
                    <h2 className="text-gray-700 font-semibold text-xl md:text-xl lg:text-2xl mb-4 md:mb-6 mt-8 text-center md:text-start">
                        History
                    </h2>
                    <ul className="space-y-6 text-gray-700 font-light text-lg">
                        {[
                            "Simpan dan tinjau sesi workout sebelumnya.",
                            "Pantau perkembangan latihan dari waktu ke waktu.",
                            "Riwayat rata-rata durasi latihan, intensitas, dan kalori terbakar.",
                        ].map((text, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="min-w-6 mt-1">
                                    <Image
                                        src="/assets/image/check-circle-svgrepo-com.svg"
                                        alt="check"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 text-yellow-400"
                                    />
                                </div>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
