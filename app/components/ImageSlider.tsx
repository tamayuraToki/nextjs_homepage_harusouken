"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-27/9 overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`slide-${i}`}
          fill
          className={`
            absolute top-0 left-0 transition-opacity duration-700
            ${i === index ? "opacity-100" : "opacity-0"}
            object-cover object-center
          `}
        />
      ))}
    </div>
  );
}
