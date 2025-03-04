"use client";
import React, { useState } from "react";

export default function Navbar() {
    const [activeButton, setActiveButton] = useState("home");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = -120; 
            const top = section.getBoundingClientRect().top + window.scrollY + offset;

            window.scrollTo({ top, behavior: "smooth" });

            setActiveButton(id);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                {/* Navbar Wrapper */}
                <nav className="mt-24 fixed w-auto max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-[60px] flex flex-col items-center mt-8 transition-all duration-300 
                backdrop-blur-lg bg-gray-200/30 px-4 py-2">

                    {/* Navbar Desktop */}
                    <div className="hidden md:flex space-x-4">
                        <button
                            onClick={() => scrollToSection("home")}
                            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium 
                            ${activeButton === "home" ? "bg-orange-300 text-white" : "bg-white text-gray-400"}
                        `}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium
                            ${activeButton === "about" ? "bg-orange-300 text-white" : "bg-white text-gray-400"}
                        `}
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("faq")}
                            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium
                            ${activeButton === "faq" ? "bg-orange-300 text-white" : "bg-white text-gray-400"}
                        `}
                        >
                            FAQ
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
