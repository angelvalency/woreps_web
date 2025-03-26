"use client";
import BackToTop from "@/component/back-to-top";
import AboutSection from "@/component/section/tentang";
import BerandaSection from "@/component/section/beranda";
import FiturSection from "@/component/section/fitur";
import UnduhSection from "@/component/section/unduh";
import React from "react";
import { DefaultSeo } from 'next-seo';

export default function Home() {
  return (
    <div>
      <DefaultSeo
        title="Woreps"
        description="Woreps bantu capai kebugaran dengan workout sesuai, dan pemantauan progres!"
        openGraph={{
          type: 'website',
          url: 'https://woreps.com',
          title: 'Woreps',
          description: 'Woreps bantu capai kebugaran dengan workout sesuai, dan pemantauan progres!',
        }}
      />
      < BerandaSection /> 
      <main className="bg-white flex flex-col min-h-screen w-full px-4 sm:px-6 md:px-10 lg:p-20">
        
        <AboutSection />

        <FiturSection />

        <UnduhSection />

        <BackToTop />
        
      </main>
    </div>

  );
}