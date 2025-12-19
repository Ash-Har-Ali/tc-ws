"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    title: "Experiential & Activity-Based Learning",
    img: "/Assets/images/benefits1.png",
  },
  {
    title: "Stress Management And Critical Thinking",
    img: "/Assets/images/benefits2.png",
  },
  {
    title: "Outdoor Challenges & Team Tasks",
    img: "/Assets/images/benefits3.png",
  },
  {
    title: "Leadership & Confidence Building",
    img: "/Assets/images/benefits4.png",
  },
  {
    title: "Mentorship & Emotional Growth",
    img: "/Assets/images/benefits5.png",
  },
];

export default function HighlightsSection() {
  return (
    <section className="w-full bg-white py-20 md:pt-25">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between gap-6 px-6">
        {items.map((item, index) => {
          const staggerClass =
            index === 1 || index === 3 ? "md:-translate-y-10" : "";

          return (
            <motion.div
              key={item.title}
              layout="position"
              className={`
                flex w-[300px] flex-col overflow-hidden rounded-3xl bg-white shadow-md
                sticky top-24
                ${staggerClass}
                will-change-transform
              `}
              style={{
                transform: "translateZ(0)", // 🔥 critical for mobile repaint
                backfaceVisibility: "hidden",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.12,
              }}
            >
              {/* Image */}
              <div className="h-70 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex py-6 items-center justify-center bg-[#562190] px-8 text-center">
                <p className="font-semibold leading-snug text-white">
                  {item.title}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
