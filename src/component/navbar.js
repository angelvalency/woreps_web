"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [activeButton, setActiveButton] = useState("beranda");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            // Ambil tinggi navbar agar tidak tertutup
            const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
            const offset = navbarHeight + 20; // Beri jarak ekstra 20px
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
    
            // Scroll dengan smooth behavior
            window.scrollTo({ top, behavior: "smooth" });
    
            // Perbarui hash tanpa reload
            window.history.pushState(null, "", `#${id}`);
    
            setActiveButton(id);
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "") || "beranda";
            setActiveButton(hash);
        };

        // Cek hash saat first komponen load
        handleHashChange();
        
        // event listener hash
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center sm:mx-8 md:mx-32">
            {/* Navbar Wrapper */}
            <nav className={`fixed md:top-4 top-2 w-11/12 sm:w-11/12 max-w-3xl flex items-center justify-between px-4 sm:px-8 py-3 
            bg-gray-100/20 backdrop-blur-sm z-50 rounded-t-3xl
            ${isSidebarOpen ? "rounded-b-none shadow-none" : "rounded-3xl shadow-sm"}`}>
            
                <img src="./assets/image/logo_baru.svg" alt="woreps logo" className="w-24 sm:w-32 h-auto" />

                {/* Desktop Navbar */}
                <div className="hidden md:flex space-x-4 mx-8">
                    <a
                        onClick={() => scrollToSection("beranda")}
                        className={`px-6 py-3 rounded-full transition-all duration-300 font-medium cursor-pointer
                        ${activeButton === "beranda" ? "bg-orange-300 shadow-lg shadow-orange-100 text-white" : "text-gray-400"}`}
                    >
                        Beranda
                    </a>
                    <a
                        onClick={() => scrollToSection("tentang")}
                        className={`px-6 py-3 rounded-full transition-all duration-300 font-medium cursor-pointer
                        ${activeButton === "tentang" ? "bg-orange-300 shadow-lg shadow-orange-100 text-white" : "text-gray-400"}`}
                    >
                        Tentang
                    </a>
                    <a
                        onClick={() => scrollToSection("fitur")}
                        className={`px-6 py-3 rounded-full transition-all duration-300 font-medium cursor-pointer
                        ${activeButton === "fitur" ? "bg-orange-300 shadow-lg shadow-orange-100 text-white" : "text-gray-400"}`}
                    >
                        Fitur
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-black"
                >
                    {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu - Full Width Below Nav */}
                { isSidebarOpen && (
                    <div className="fixed top-18 left-0 right-0  w-full flex justify-center z-40 md:hidden animate-fade-in">
                        <div className="w-11/12 max-w-sm bg-gray-100/20 backdrop-blur-sm rounded-b-3xl shadow-lg overflow-hidden">
                            <button
                                onClick={() => scrollToSection("beranda")}
                                className={`w-full px-6 py-4 text-center transition-all duration-300 font-medium 
                ${activeButton === "beranda" ? "bg-orange-300 text-white" : "bg-gray-100/20 backdrop-blur-sm text-gray-600"}`}
                            >
                                Beranda
                            </button>
                            <button
                                onClick={() => scrollToSection("tentang")}
                                className={`w-full px-6 py-4 text-center transition-all duration-300 font-medium 
                ${activeButton === "tentang" ? "bg-orange-300 text-white" : "bg-gray-100/20 backdrop-blur-sm text-gray-600"}`}
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