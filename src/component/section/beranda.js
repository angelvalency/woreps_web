"use client";
export default function BerandaSection() {
    return (
        <header
            style={{
                backgroundImage: "url('./assets/image/contour-line-orange.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
            }}
            className="flex flex-col md:flex-row w-full items-center justify-center font-bold text-xl text-black md:h-screen scroll-mt-20"
            id="beranda"
        >
            <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:mx-8 xl:mx-16 pt-24 md:pt-32">
                <h1 className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900">
                    <span className="font-semibold">Dapatkan Hasil Maksimal, Mulai </span>
                    <span className="font-bold text-orange-300">Latihan</span>
                    <span className="font-semibold"> dengan </span>
                    <span className="font-bold text-orange-300">Woreps</span>
                </h1>
                <h2 className="text-center text-lg sm:text-xl md:text-3xl text-gray-600 mt-8 font-light">
                    Perubahan dimulai dari sini. <br /> Woreps hadir untuk menjadikan hidupmu lebih sehat dan bugar.
                </h2>

                <div className="flex flex-row justify-center items-center w-full mt-8 md:mt-16 gap-4">
                    {/* Jelajah Button */}
                    <button
                        className="w-32 sm:w-auto h-12 px-2 md:px-8 py-2 bg-orange-300 text-white font-medium text-xl md:text-2xl rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 shadow-sm shadow-orange-200"
                        onClick={() => document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Telusuri
                    </button>

                    {/* Download Button */}
                    <button
                        href="#"
                        style={{
                            backgroundImage: "url('/assets/image/google-play-badge-logo-svgrepo-com.svg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="w-40 h-16 text-white text-lg text-center rounded-sm font-medium hover:scale-105 transform transition-all duration-200"
                    >
                    </button>

                </div>
            </div>
        </header>
    );
}
