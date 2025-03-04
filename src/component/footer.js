import React from "react";


export default function Footer() {
    return (
        <footer className="bg-white py-10 border-t border-gray-200">
            <div className="container mx-auto px-6">
                {/* Logo & Navigation */}
                <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">

                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <span className="text-4xl font-bold text-indigo-600">~</span>
                    </div>

                    {/* Menu Sections */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-gray-600">

                        {/* Solutions */}
                        <div>
                            <h3 className="text-gray-900 font-semibold mb-3">Solutions</h3>
                            <ul className="space-y-2">
                                <li>Marketing</li>
                                <li>Analytics</li>
                                <li>Automation</li>
                                <li>Commerce</li>
                                <li>Insights</li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-gray-900 font-semibold mb-3">Support</h3>
                            <ul className="space-y-2">
                                <li>Submit ticket</li>
                                <li>Documentation</li>
                                <li>Guides</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-gray-900 font-semibold mb-3">Company</h3>
                            <ul className="space-y-2">
                                <li>About</li>
                                <li>Blog</li>
                                <li>Jobs</li>
                                <li>Press</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-6"></div>

                {/* Copyright & Social Media */}
                <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">

                    {/* Copyright */}
                    <p>© 2025 Woreps, Inc. All rights reserved.</p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-900">🌐</a>
                        <a href="#" className="hover:text-gray-900">📷</a>
                        <a href="#" className="hover:text-gray-900">✖️</a>
                        <a href="#" className="hover:text-gray-900">🐙</a>
                        <a href="#" className="hover:text-gray-900">▶️</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
