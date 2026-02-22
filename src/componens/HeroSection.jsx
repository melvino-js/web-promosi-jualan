// components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: `url('https://thumbs.dreamstime.com/b/vibrant-outdoor-brunch-table-set-colorful-plates-fresh-juices-pastries-picture-356183374.jpg')`,
        // Alternatif lain (copy salah satu URL di bawah kalau mau ganti):
        // backgroundImage: `url('https://thumbs.dreamstime.com/b/delicious-picnic-spread-featuring-croissants-strawberries-refreshing-drinks-vibrant-scene-showcasing-array-treats-352231155.jpg')`,
        // backgroundImage: `url('https://thumbs.dreamstime.com/b/delicious-breakfast-spread-featuring-fresh-figs-blueberries-vibrant-fruits-ai-generated-369559889.jpg')`,
      }}
    >
      {/* Overlay gelap supaya teks lebih mudah dibaca */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Konten utama */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-400   tracking-tight mb-4 md:mb-6 drop-shadow-lg">
          Minuman Menyegarkan
          <span className="block text-white mt-2 md:mt-4">
            & Makanan yang Enak
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium mb-8 md:mb-10 drop-shadow-md max-w-2xl mx-auto">
          Nikmati kesegaran minuman alami dan kelezatan makanan rumahan yang
          bikin nagih. Siap memanjakan lidahmu setiap hari!
        </p>

        {/* Tombol CTA (bisa link ke menu / pesan sekarang) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#card"
            className="
              inline-block bg-blue-400 hover:bg-blue-600 
              text-white font-bold text-lg px-8 py-4 
              rounded-full shadow-lg hover:shadow-xl 
              transition-all duration-300 transform hover:-translate-y-1
            "
          >
            Lihat Menu
          </a>

          <a
            href=""
            className="
              inline-block bg-white hover:bg-gray-100 
              text-blue-400 font-bold text-lg px-8 py-4 
              rounded-full shadow-lg hover:shadow-xl 
              transition-all duration-300 transform hover:-translate-y-1
            "
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
