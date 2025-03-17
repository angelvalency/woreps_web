import React from "react";


export default function Footer() {
    return (
        <footer className="bg-white pt-10">
            {/* Background Waves Image */}
            <img src="./assets/image/waves.svg" alt="contour-line" className="w-full h-auto" />

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
