import React, { useState } from "react";

export default function ProfilePhoto({ className = "", alt = "Shivani Kamath" }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/20 ${className}`}
    >
      {!imgError ? (
        <img
          src="/photo.png"
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : null}
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-500 via-emerald-600 to-brand-600 text-2xl font-bold text-white ${
          !imgError ? "hidden" : ""
        }`}
      >
        SK
      </div>
    </div>
  );
}
