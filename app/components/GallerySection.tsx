"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const row1 = [
  "/gallery/g1.jpg",
  "/gallery/g2.jpg",
  "/gallery/g3.jpg",
  "/gallery/g4.jpg",
  "/gallery/g5.jpg",
  "/gallery/g6.jpg",
  "/gallery/g7.jpg",
  "/gallery/g8.jpg",
];

const row2 = [
  "/gallery/g9.jpg",
  "/gallery/g10.jpg",
  "/gallery/g11.jpg",
  "/gallery/g12.jpg",
  "/gallery/g13.jpg",
  "/gallery/g14.jpg",
  "/gallery/g15.jpg",
  "/gallery/g16.jpg",
];

const row3 = [
  "/gallery/g17.jpg",
  "/gallery/g18.jpg",
  "/gallery/g19.jpg",
  "/gallery/g20.jpg",
  "/gallery/g21.jpg",
  "/gallery/g22.jpg",
  "/gallery/g23.jpg",
  "/gallery/g24.jpg",
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
    <section className="w-screen bg-[#F3E8FF] py-16 overflow-hidden">
      <div className="space-y-8">
        <ScrollingRow images={row1} direction="left" speed={45} />
        <ScrollingRow images={row2} direction="right" speed={40} />
        <ScrollingRow images={row3} direction="left" speed={45} />
      </div>
    </section>
  );
}
