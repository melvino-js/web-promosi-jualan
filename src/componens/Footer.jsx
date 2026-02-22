// components/Footer.jsx
const Footer = () => {
  const whatsappNumber = ''; // Ganti dengan nomor WA toko Zen
  const waLink = `https://wa.me/${whatsappNumber}?text=Halo%20Toko%20Zen%2C%20saya%20ingin%20bertanya%20tentang%20lokasi%20dan%20pesanan`;

  // Embed Google Maps: Ganti PLACE dengan lokasi toko asli (cara dapatkan: Google Maps > Share > Embed a map)
  // Contoh placeholder untuk toko di Padang (cari alamat toko Zen di Google Maps, lalu copy iframe)
  const mapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.4619665979387!2d-0.1307145578051619!3d51.51831682251186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2dbccda7af%3A0x470a82207ad12ab7!2sAA%20Bookshop!5e1!3m2!1sid!2sid!4v1771734963836!5m2!1sid!2sid" 
  const tokoImage = "https://asset.kompas.com/crops/gL2xkd1D5-6fRVzxV_3EptR51pU=/0x46:830x599/1200x900/data/photo/2026/01/24/6974bc4085a38.jpg"; // Warung Padang di Singapura vibe
  return (
    <footer className="bg-blue-300 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Kolom 1: Google Maps Embed */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lokasi Toko </h3>
            <p className="text-blue-100 mb-4">
              Jl. Contoh Alamat No. 123, Padang, Sumatera Barat (dekat Pasar Raya atau landmark lokal)
            </p>
            <div className="overflow-hidden rounded-xl shadow-lg border-4 border-blue-400/30">
              <iframe
                src={mapsEmbedSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Toko Zen di Padang"
              ></iframe>
            </div>
          </div>

          {/* Kolom 2: Info Pemilik & Kontak */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Toko Lorem</h3>
              <p className="text-lg mb-2">
                Minuman Menyegarkan & Makanan Enak
              </p>
              <p className="text-blue-100 mb-6">
                Pemilik: <span className="font-semibold text-white">Nama Pemilik Toko </span>  
                {/* Ganti dengan nama asli pemilik, misal: Bapak Zen atau Ibu Siti */}
              </p>

              <div className="space-y-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>

            <div className="mb-2 mt-3 rounded-lg overflow-hidden shadow-md border-2 border-blue-400/30">
                <img
                  src={tokoImage}
                  alt="Foto Toko lorem - Rumah Makan / Warung Padang"
                  className="w-full h-56 object-cover"
                />
              </div>

            <div className="mt-8 text-sm text-blue-200 text-center md:text-left">
              &copy; {new Date().getFullYear()} Toko . All rights reserved.  
              Dibuat dengan ❤️ di indonesia, bumi.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;