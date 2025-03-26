"use client"; // Pastikan ini ada agar kode hanya berjalan di client
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from 'next/image';

export default function Navbar() {
    const [activeButton, setActiveButton] = useState("beranda");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const scrollToSection = (id) => {
        if (typeof window !== "undefined") { // Pastikan ini berjalan hanya di client
            const section = document.getElementById(id);
            if (section) {
                const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
                const offset = navbarHeight + 20; 
                const top = section.getBoundingClientRect().top + window.scrollY - offset;
        
                window.scrollTo({ top, behavior: "smooth" });
                window.history.pushState(null, "", `#${id}`);
        
                setActiveButton(id);
                setIsSidebarOpen(false);
            }
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") { // Pastikan kode ini hanya berjalan di client
            const handleHashChange = () => {
                const hash = window.location.hash.replace("#", "") || "beranda";
                setActiveButton(hash);
            };

            handleHashChange();
            window.addEventListener("hashchange", handleHashChange);

            return () => {
                window.removeEventListener("hashchange", handleHashChange);
            };
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center sm:mx-8 md:mx-32">
            {/* Navbar Wrapper */}
            <nav className={`fixed md:top-4 top-2 w-11/12 sm:w-11/12 max-w-3xl flex items-center justify-between px-4 sm:px-8 py-3 
            bg-gray-100/20 backdrop-blur-sm z-50 rounded-t-3xl
            ${isSidebarOpen ? "rounded-b-none shadow-none" : "rounded-3xl shadow-sm"}`}>
            
                {/* Logo dengan Next.js Image */}
                <div className="relative w-24 sm:w-32 h-auto">
                    <Image 
                        src="/assets/image/logo_baru.svg" 
                        alt="woreps logo"
                        width={96} // Sesuaikan ukuran logo
                        height={96} 
                        className="w-full h-auto"
                    />
                </div>

                {/* Desktop Navbar */}
                <div className="hidden md:flex space-x-4 mx-8">
                    {["beranda", "tentang", "fitur"].map((item) => (
                        <a
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium cursor-pointer
                            ${activeButton === item ? "bg-orange-300 shadow-lg shadow-orange-100 text-white" : "text-gray-400"}`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-black"
                >
                    {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isSidebarOpen && (
                <div className="fixed top-18 left-0 right-0 w-full flex justify-center z-40 md:hidden animate-fade-in">
                    <div className="w-11/12 max-w-sm bg-gray-100/20 backdrop-blur-sm rounded-b-3xl shadow-lg overflow-hidden">
                        {["beranda", "tentang", "fitur"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`w-full px-6 py-4 text-center transition-all duration-300 font-medium 
                                ${activeButton === item ? "bg-orange-300 text-white" : "bg-gray-100/20 backdrop-blur-sm text-gray-600"}`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
