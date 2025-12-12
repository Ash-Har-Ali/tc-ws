"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer" className="p-2 pt-12 bg-white">
      {/* Full-width gradient background */}
      <div className="relative bg-linear-to-r from-[#904BCF] to-[#562190] text-white pt-16 pb-4 2xl:py-30 rounded-xl overflow-hidden">
        {/* Top Content */}
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center md:px-10">
          {/* Left Section */}
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold text-[#FBCE3E] md:text-4xl tracking-wider">
              TINKERCHAMPS
            </h2>
            <h3 className="text-2xl font-black text-white md:text-4xl tracking-wider">
              – Where Learning Meets Life.
            </h3>
            <p className="mt-2 text-sm text-white font-light leading-tight">
              In three days, your child can either spend time as usual...
              <br />
              or they can invest three days in an experience that may shape
              their next 10 years
            </p>
          </div>

          {/* Right Button */}
          <div className="flex justify-center">
            <Link
              href="/book-seat" // change to your actual route
              className="rounded-xl bg-[#E5D8FC] px-6 py-3 text-sm font-bold text-[#562190] shadow-md transition hover:bg-white"
            >
              Secure Your Child&apos;s Seat
            </Link>
          </div>
        </div>

        {/* Logo + Socials */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 px-6">
          {/* Logo */}
          <Image
            src="/Assets/images/logo.webp"
            alt="TinkerChamps Logo"
            width={240}
            height={100}
            className="h-auto w-[220px] md:w-[260px]"
          />

          {/* Social Links */}
          <div className="flex gap-5 text-black">
            <Link
              href="https://instagram.com"
              className="rounded-full bg-[#FDDC2B] p-3 hover:bg-[#ffffff] transition"
            >
              <FaInstagram className="text-xl" />
            </Link>

            <Link
              href="https://linkedin.com"
              className="rounded-full bg-[#FDDC2B] p-3 hover:bg-[#ffffff] transition"
            >
              <FaLinkedinIn className="text-xl" />
            </Link>

            <Link
              href="https://facebook.com"
              className="rounded-full bg-[#FDDC2B] p-3 hover:bg-[#ffffff] transition"
            >
              <FaFacebookF className="text-xl" />
            </Link>

            <Link
              href="https://twitter.com"
              className="rounded-full bg-[#FDDC2B] p-3 hover:bg-[#ffffff] transition"
            >
              <FaTwitter className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-white font-normal">
          Copyright © {new Date().getFullYear()} TinkerChamps. All rights
          reserved.
        </div>
      </div>
    </section>
  );
}
