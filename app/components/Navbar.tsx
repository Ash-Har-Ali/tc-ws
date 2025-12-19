"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoChevronForwardOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "#hero", label: "Home" }, // 👈 make sure your hero has id="hero"
  { href: "#about", label: "About" },
  { href: "#venue", label: "Venue" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#gallery", label: "Gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Track scroll to highlight current section & navbar style
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let current = sectionIds[0] || "hero";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.3) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Outer fixed bar */}
      <header className="fixed inset-x-0 top-1 z-50 px-2">
        <motion.div
          initial={{
            y: -20,
            opacity: 0,
            borderRadius: 0,
            backgroundColor: "rgba(0,0,0,0)",
            boxShadow: "none",
          }}
          animate={{
            y: isScrolled ? 8 : 0,
            opacity: 1,
            borderRadius: 16,
            backgroundColor: isScrolled ? "#562190" : "rgba(0,0,0,0)",
            boxShadow: isScrolled ? "0 0 24px rgba(86,33,144,0.4)" : "none",
          }}
          transition={{ type: "spring", stiffness: 180, damping: 24 }} // a bit softer
          className="max-w-7xl mx-auto px-5"
        >
          <nav
            className="flex items-center justify-between w-full md:py-3"
            aria-label="Main navigation"
          >
            {/* Logo → scroll to hero */}
            <Link href="#hero" scroll={true}>
              <Image
                src="/Assets/images/TCLogo.webp"
                alt="Tinkerchamps Logo"
                width={90}
                height={70}
                className="object-contain cursor-pointer"
                priority
              />
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-2 text-base font-semibold text-white border-2 border-[#D9D9D9] rounded-full px-2 py-1 bg-[#562190]/60 backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll={true}
                    className={`px-5 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white text-[#562190]"
                        : "text-white hover:text-white hover:bg-[#562190]/40"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="https://wa.me/918075917297?text=I%20want%20to%20know%20more%20about%20Tinkerchamps"
                className="flex items-center px-5 py-2 rounded-full text-white text-base font-semibold border-2 border-[#D9D9D9] hover:bg-white hover:text-[#562190] transition-colors duration-300"
              >
                <span className="flex items-center gap-2">
                  Book Now <IoChevronForwardOutline className="text-2xl" />
                </span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-3xl text-white z-50"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden"
              >
                <div className="bg-[#562190]/90 border border-[#562190] rounded-2xl mt-3 mb-2 backdrop-blur-md">
                  <div className="p-4 flex flex-col items-center text-center space-y-2">
                    {NAV_ITEMS.map((item, idx) => {
                      const isActive =
                        activeSection === item.href.replace("#", "");
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="w-[80%]"
                        >
                          <Link
                            href={item.href}
                            scroll={true}
                            onClick={closeMenu}
                            className={`flex justify-center items-center w-full px-4 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                              isActive
                                ? "bg-white text-[#562190]"
                                : "text-white hover:bg-white/20"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="border-t border-white/10 p-4 flex flex-col items-center text-center space-y-3">
                    <Link
                      href="https://wa.me/918075917297?text=I%20want%20to%20know%20more%20about%20Tinkerchamps"
                      onClick={closeMenu}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold text-base border border-white hover:bg-white hover:text-[#562190] transition-all duration-300"
                    >
                      Book Now
                      <IoChevronForwardOutline className="text-xl" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
