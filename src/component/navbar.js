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
        <div className="flex flex-col items-center justify-center sm:mx-8 md:mx-32">
            {/* Navbar Wrapper */}
            <nav className={`fixed md:top-4 top-2 w-11/12 sm:w-11/12 max-w-3xl flex items-center justify-between px-4 sm:px-8 py-3 
            bg-gray-100/20 backdrop-blur-sm z-50 rounded-t-3xl
            ${isSidebarOpen ? "rounded-b-none shadow-none" : "rounded-3xl shadow-sm"}`}>
            
                <img src="./assets/image/logo_baru.svg" alt="woreps logo" className="w-24 sm:w-32 h-auto" />

                {/* Desktop Navbar */}
                <div className="hidden md:flex space-x-4 mx-8">
                    <button
                        onClick={() => scrollToSection("home")}
                        className={`px-6 py-3 rounded-full transition-all duration-300 font-medium cursor-pointer
                        ${activeButton === "home" ? "bg-orange-300 text-white" : "bg-white text-gray-400"}`}
                    >
                        Beranda
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className={`px-6 py-3 rounded-full transition-all duration-300 font-medium cursor-pointer
                        ${activeButton === "about" ? "bg-orange-300 text-white" : "bg-white text-gray-400"}`}
                    >
                        Tentang
                    </button>
                    <button
                        onClick={() => scrollToSection("fitur")}
                        className={`px-6 py-3 rounded-full transition-all duration-300 font-medium cursor-pointer
                        ${activeButton === "fitur" ? "bg-orange-300 text-white" : "bg-white text-gray-400"}`}
                    >
                        Fitur
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="md:hidden p-2 rounded-full w-10 h-10 flex items-center justify-center bg-orange-300 text-white"
                >
                    {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu - Full Width Below Nav */}
                { isSidebarOpen && (
                    <div className="fixed top-16 left-0 right-0  w-full flex justify-center z-40 md:hidden animate-fade-in">
                        <div className="w-11/12 max-w-sm bg-gray-100/20 backdrop-blur-sm rounded-b-3xl shadow-lg overflow-hidden">
                            <button
                                onClick={() => scrollToSection("home")}
                                className={`w-full px-6 py-4 text-center transition-all duration-300 font-medium 
                ${activeButton === "home" ? "bg-orange-300 text-white" : "bg-gray-100/20 backdrop-blur-sm text-gray-600"}`}
                            >
                                Beranda
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className={`w-full px-6 py-4 text-center transition-all duration-300 font-medium 
                ${activeButton === "about" ? "bg-orange-300 text-white" : "bg-gray-100/20 backdrop-blur-sm text-gray-600"}`}
                            >
                                Tentang
                            </button>
                            <button
                                onClick={() => scrollToSection("fitur")}
                                className={`w-full px-6 py-4 text-center transition-all duration-300 font-medium 
                ${activeButton === "fitur" ? "bg-orange-300 text-white" : "bg-gray-100/20 backdrop-blur-sm text-gray-600"}`}
                            >
                                Fitur
                            </button>
                        </div>
                    </div>
                )}

        </div>
    );
}