"use client";
import React, { useEffect, useState } from "react";

export default function Carousel() {
  const images = [
    "/152.jpg",
    "/laveling castor.jpg",
    "/medium dutty fixed nylon 1.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg rotate-6 ">
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

      {/* Indicators */}
      {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition
            ${current === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div> */}
    </div>
  );
}
