"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const row1 = [
  "/Assets/Gallery/1.jpg",
  "/Assets/Gallery/2.JPG",
  "/Assets/Gallery/3.jpg",
  "/Assets/Gallery/4.png",
  "/Assets/Gallery/5.JPG",
  "/Assets/Gallery/6.JPG",
];

const row2 = [
  "/Assets/Gallery/7.jpg",
  "/Assets/Gallery/8.jpg",
  "/Assets/Gallery/9.jpg",
  "/Assets/Gallery/10.jpg",
  "/Assets/Gallery/11.jpg",
  "/Assets/Gallery/12.png",
];

const row3 = [
  "/Assets/Gallery/13.jpg",
  "/Assets/Gallery/14.jpg",
  "/Assets/Gallery/15.jpg",
  "/Assets/Gallery/16.jpg",
  "/Assets/Gallery/17.jpg",
  "/Assets/Gallery/18.jpg",
];

type RowProps = {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
};

function ScrollingRow({ images, direction = "left", speed = 45 }: RowProps) {
  const allImages = [...images, ...images];
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";

  return (
    <div className="relative w-screen overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: [from, to] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {allImages.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-[200px] min-w-[300px] overflow-hidden rounded-[20px] bg-black"
          >
            <Image
              src={src}
              alt="Gallery"
              fill
              className="object-cover"
              sizes="12.5vw"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="w-screen py-16 overflow-hidden">
      <div className="space-y-8">
        <ScrollingRow images={row1} direction="left" speed={45} />
        <ScrollingRow images={row2} direction="right" speed={40} />
        <ScrollingRow images={row3} direction="left" speed={45} />
      </div>
    </section>
  );
}
