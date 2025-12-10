"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarPreview() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ["About", "Features", "Workflow", "Events", "Contact"];

  // Detect scroll position
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10); // Adjust threshold if needed
  //   };
  //
  // window.addEventListener("scroll", handleScroll);

  // Optional: if you want to set it once on load as well:
  // handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div>
      <nav className="bg-linear-to-r from-[#562190] to-[#562190] py-4 px-5 md:px-10 lg:px-20 2xl:px-65 fixed top-2 left-2 right-2 rounded-xl z-50 overflow-hidden">
        {/* Background grid */}
        {/* <div
          suppressHydrationWarning
          className={`absolute inset-0 bg-[url('/Assets/images/GridSquare.png')] md:bg-[url('/Assets/images/grid.png')] bg-cover bg-repeat pointer-events-none z-0 transition-opacity duration-300 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        /> */}

        <div className="flex items-center justify-between relative z-10">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/Assets/images/Logoh.svg"
              alt="LOGO"
              className="h-8 md:h-12 w-auto"
              width={150}
              height={150}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 bg-[#7F3EDF]/80 px-12 py-2 rounded-full">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-medium hover:text-purple-200 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/demo"
            className="hidden lg:block bg-transparent font-medium border-2 border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-[#7F3EDF] transition-colors"
          >
            Book a Free Demo
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden mt-4 rounded-lg p-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-purple-200 transition-colors py-2 font-medium border-b border-purple-600 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/demo"
              className="mt-2 bg-transparent border-2 border-white text-white px-4 font-medium py-2 rounded-full hover:bg-white hover:text-purple-700 transition-colors inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Free Demo
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
