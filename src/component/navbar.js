"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

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
            setIsSidebarOpen(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mx-32">
            <div className="flex flex-col items-center justify-center">
                {/* Navbar Wrapper */}
                <nav className="fixed top-4 w-3/4 flex items-center justify-between px-8 bg-gray-100/2 backdrop-blur-sm z-50 rounded-3xl shadow-sm">
                    <img src="./assets/image/logo_baru.svg" alt="woreps logo" className="w-32 h-18" />

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex space-x-4 mx-8">
                        <button
                            onClick={() => scrollToSection("home")}
                            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium cursor-pointer
                            ${activeButton === "home" ? "bg-orange-300 text-white" : "bg-white text-gray-400"}
                        `}
                        >
                            Beranda
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium cursor-pointer
                            ${activeButton === "about" ? "bg-orange-300 text-white" : "bg-white text-gray-400"}
                        `}
                        >
                            Tentang
                        </button>
                        <button
                            onClick={() => scrollToSection("fiture")}
                            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium cursor-pointer
                            ${activeButton === "fiture" ? "bg-orange-300 text-white" : "bg-white text-gray-400"}
                        `}
                        >
                            Fitur
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 rounded-3xl bg-orange-300 text-white text-lg font-medium"
                        >
                            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Sidebar */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 z-50 flex justify-end">
                        <div className="w-2/3  max-w-sm bg-white h-full p-6 flex flex-col space-y-4">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="self-end text-gray-600"
                            >
                                <X size={24} />
                            </button>

                            {/* Mobile Menu Items */}
                            <button
                                onClick={() => scrollToSection("home")}
                                className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium text-left
                                ${activeButton === "home" ? "bg-orange-300 text-white" : "bg-gray-100 text-gray-600"}
                            `}
                            >
                                Beranda
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className={`px-6 py-3 rounded-md transition-all duration-300 font-medium text-left
                                ${activeButton === "about" ? "bg-orange-300 text-white" : "bg-gray-100 text-gray-600"}
                            `}
                            >
                                Tentang
                            </button>
                            <button
                                onClick={() => scrollToSection("faq")}
                                className={`px-6 py-3 rounded-md transition-all duration-300 font-medium text-left
                                ${activeButton === "faq" ? "bg-orange-300 text-white" : "bg-gray-100 text-gray-600"}
                            `}
                            >
                                Fitur
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
