"use client";
import React from "react";
import Image from "next/image";
import { FaMapLocationDot, FaClock, FaRegCalendarDays } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CampCard() {
  return (
    <motion.section
      id="venue"
      className="py-16 overflow-x-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* SECTION HEADING */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#6C30A4] mb-1 tracking-wider mt-10">
          Upcoming Events
        </h2>
        <p className="text-lg text-black">
          Discover where the magic happens — join Tinkerchamps
        </p>
      </motion.div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-4 lg:flex-row lg:items-stretch lg:gap-16">
        {/* LEFT SECTION */}
        <motion.div
          className="relative w-full max-w-lg rounded-3xl bg-[#562190] shadow-lg"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Main Image */}
          <div className="overflow-hidden rounded-t-3xl">
            <Image
              src="/Assets/images/wscampus.webp"
              alt="The White School International"
              width={480}
              height={360}
              className="h-110 w-full object-fill pr-2 pl-2 pt-2 rounded-t-3xl"
            />
          </div>

          {/* Floating Images */}
          <div className="absolute top-6 right-4 hidden flex-col gap-4 md:flex md:right-[-55px] md:top-10">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6,
                }}
              >
                <Image
                  src={`/Assets/images/whiteschool${i + 1}.webp`}
                  alt="Campus"
                  width={150}
                  height={100}
                  className="h-[170px] w-[140px] object-cover rounded-2xl"
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom location bar */}
          <div className="flex items-center gap-6 rounded-b-[20px] bg-[#562190] px-5 py-4 text-white">
            <FaMapLocationDot className="text-4xl text-white shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold">The White School</span>
              <span className="text-lg font-semibold">
                International, Kozhikode
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          className="flex w-full max-w-lg flex-col items-center justify-around rounded-3xl bg-[#E5D8FC] py-8 shadow-md sm:py-10"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/Assets/images/TCS19.webp"
              alt="TinkerChamps Logo"
              width={250}
              height={250}
              className="h-auto w-[250px] md:w-[350px]"
            />
          </motion.div>

          {/* Info Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: <FaRegCalendarDays />,
                text: "December 24 – 26",
              },
              {
                icon: <FaClock />,
                text: "3 Days, 2 Nights",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 rounded-xl bg-[#F1EAFD] px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBCE3E] text-lg text-black">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </motion.div>
            ))}

            {/* Book Now */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="md:col-span-2"
            >
              <Link
                href="https://wa.me/918075917297?text=I%20want%20to%20know%20more%20about%20Tinkerchamps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-[#562190] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#6a2db3]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBCE3E] text-lg text-black">
                  <RiGraduationCapFill />
                </span>
                <span>Book Now</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
