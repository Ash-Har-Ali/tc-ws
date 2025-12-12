"use client";
import React from "react";
import Image from "next/image";

const items = [
  {
    title: "Experiential & Activity-Based Learning",
    img: "/images/highlight1.jpg",
  },
  {
    title: "Stress Management And Critical Thinking",
    img: "/images/highlight2.jpg",
  },
  {
    title: "Outdoor Challenges & Team Tasks",
    img: "/images/highlight3.jpg",
  },
  {
    title: "Leadership & Confidence Building",
    img: "/images/highlight4.jpg",
  },
  {
    title: "Mentorship & Emotional Growth",
    img: "/images/highlight5.jpg",
  },
];

export default function HighlightsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto flex md:flex-row flex-col max-w-6xl items-center justify-between gap-6 px-6">
        {items.map((item, index) => {
          const staggerClass =
            index === 1 || index === 3
              ? "md:-translate-y-6"
              : "md:translate-y-0";

          return (
            <div
              key={item.title}
              className={`flex w-[250px] flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-transform ${staggerClass}`}
            >
              {/* fixed image height */}
              <div className="h-60 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={180}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* fixed purple block height */}
              <div className="flex h-20 items-center justify-center bg-[#7F3EDF] px-3 text-center">
                <p className="text-[12px] font-semibold leading-snug text-white">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
