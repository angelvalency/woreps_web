import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white pt-10">
            {/* Background Waves Image */}
            <div className="w-full h-auto relative">
                <Image 
                    src="/assets/image/waves.svg" 
                    alt="contour-line" 
                    layout="intrinsic" 
                    width={1920} // Sesuaikan dengan ukuran asli gambar
                    height={0} // Bisa dihilangkan karena `h-auto` menangani tinggi otomatis
                    className="w-full h-auto"
                />
            </div>

            {/* Footer Container */}
            <div style={{ backgroundColor: "#FFCB73" }} className="py-4">
                <div className="container mx-auto px-6">
                    {/* Copyright & Social Media */}
                    <div className="flex flex-col md:flex-row items-center justify-center text-gray-700 text-sm">
                        {/* Copyright */}
                        <p>© 2025 Woreps, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
