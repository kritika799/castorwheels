"use client";
import React, { useEffect, useState } from "react";

export default function Carousel() {
  const images = [
    "/hero-image/hero-image1.png",
    "/hero-image/hero-image2.png",
    "/hero-image/hero-image3.png",
    "/hero-image/hero-image4.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg  ">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="w-full shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
