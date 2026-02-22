// components/Card.jsx
import React from "react";

const Card = ({
  src, // URL gambar (wajib)
  name = "Nama Item", // Nama produk (opsional, default ada)
  price = 0, // Harga dalam string (opsional)
  description = "", // Deskripsi singkat di bawah
  onClick, // Opsional: fungsi kalau card diklik (misal tambah ke cart)
}) => {
  return (
    <div
      id="card"
      className={`
        bg-blue-200 rounded-xl shadow-md overflow-hidden 
        hover:shadow-xl transition-shadow duration-300 
        cursor-pointer ${onClick ? "hover:-translate-y-1" : ""}
      `}
      onClick={onClick}
    >
      {/* Gambar – src langsung dari props */}

      <img
        src={src}
        alt={name}
        className="w-full h-100 object-cover "
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/400x300?text=Gambar+Tidak+Ada";
        }}
      />

      {/* Konten teks */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>

        {price > 0 && (
          <p className="text-blue-600 font-bold mb-2">
            Rp {price.toLocaleString("id-ID")}
          </p>
        )}

        {description && (
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
