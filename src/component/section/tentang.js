export default function AboutSection() {
  return (
    <section className="relative flex flex-col font-bold text-xl text-black w-full py-8 md:py-12" id="tentang">
      {/* Left flower - adjusted size and position for mobile */}
      <img 
        src="/assets/image/flower-orange-bold.svg" 
        alt="flower" 
        className="absolute left-0 top-12 md:top-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]" 
      />

      <div className="flex flex-col items-center justify-center w-full mt-20 sm:mt-14 md:mt-16 z-10 px-4">
        <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-700 text-center">
          Tentang <span className="italic text-orange-300">Woreps, Teman</span>
          <br className="sm:hidden md:block" /> <span className="italic text-orange-300">Olahragamu</span>
        </h1>
        
        <p className="text-gray-700 font-light text-base sm:text-lg md:text-xl lg:text-2xl text-center mt-4 sm:mt-6 px-3 sm:px-6 max-w-4xl">
          Woreps membantu kamu mencapai tujuan kebugaran dengan program workout yang sesuai kebutuhan. 
          Tersedia berbagai pilihan latihan, Woreps bikin kamu tetap termotivasi dan konsisten untuk hidup lebih sehat.
        </p>
      </div>

      {/* Right flower - adjusted position for better mobile layout */}
      <img 
        src="/assets/image/flower-orange-medium.svg" 
        alt="flower" 
        className="absolute top-auto md:-bottom-8 -bottom-2 right-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]" 
      />
    </section>
  );
}