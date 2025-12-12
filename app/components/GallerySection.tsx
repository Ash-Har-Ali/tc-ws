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
];

const row2 = [
  "/gallery/g6.jpg",
  "/gallery/g7.jpg",
  "/gallery/g8.jpg",
  "/gallery/g9.jpg",
  "/gallery/g10.jpg",
];

const row3 = [
  "/gallery/g11.jpg",
  "/gallery/g12.jpg",
  "/gallery/g13.jpg",
  "/gallery/g14.jpg",
  "/gallery/g15.jpg",
];

type RowProps = {
  images: string[];
  direction?: "left" | "right";
  speed?: number; // seconds
};

function ScrollingRow({ images, direction = "left", speed = 35 }: RowProps) {
  // we duplicate the images so the scroll can loop seamlessly
  const allImages = [...images, ...images];
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";

  return (
    <div className="relative w-full overflow-hidden rounded-[28px]">
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
            className="relative h-[170px] min-w-[260px] overflow-hidden rounded-3xl bg-black"
          >
            <Image
              src={src}
              alt="Gallery image"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section className="w-full bg-[#F3E8FF] py-16 px-4">
      <div className="mx-auto max-w-6xl space-y-6">
        <ScrollingRow images={row1} direction="left" speed={40} />
        <ScrollingRow images={row2} direction="right" speed={35} />
        <ScrollingRow images={row3} direction="left" speed={45} />
      </div>
    </section>
  );
}
