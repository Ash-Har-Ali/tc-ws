"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoChevronForwardOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/aboutUs", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/works", label: "Our Work" },
  { href: "/contactUs", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Only for adding blur and background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Prevent page scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled ? "0 0 24px rgba(86,33,144,0.4)" : "none",
          y: 0,
          width: "100%",
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-[#562190] top-2 max-w-7xl rounded-xl mx-auto"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5">
          <nav
            className="flex items-center justify-between w-full md:py-1 py-2"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link href="/">
              <Image
                src="/Assets/images/logo.webp"
                alt="Company Logo"
                width={80}
                height={60}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-2 text-base font-semibold text-white border border-[#562190] rounded-full px-2 py-1 bg-[#562190]/60 backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-5 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                      active
                        ? "bg-white text-[#562190]"
                        : "text-white/80 hover:text-white hover:bg-[#562190]/40"
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
                href="/contactUs"
                className="flex items-center px-5 py-2 rounded-full text-white text-base font-semibold border-2 border-[#562190] hover:bg-white hover:text-[#562190] transition-colors duration-200"
              >
                <span className="flex items-center gap-2">
                  Contact Now <IoChevronForwardOutline className="text-2xl" />
                </span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-3xl text-white z-9999"
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
                <div className="bg-[#562190]/90 border border-[#562190] rounded-2xl mt-5 mb-2 backdrop-blur-md">
                  <div className="p-4 flex flex-col items-center text-center space-y-2">
                    {NAV_ITEMS.map((item, idx) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="w-[80%]"
                      >
                        <Link
                          href={item.href}
                          onClick={handleNavClick}
                          className={`flex justify-center items-center w-full px-4 py-3 rounded-full text-base font-semibold transition-all duration-200 ${
                            isItemActive(item.href)
                              ? "bg-white text-[#562190]"
                              : "text-white hover:bg-white/20"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 p-4 flex flex-col items-center text-center space-y-3">
                    <Link
                      href="/contactUs"
                      onClick={handleNavClick}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold text-base border border-white hover:bg-white hover:text-[#562190] transition-all duration-200"
                    >
                      Contact Now
                      <IoChevronForwardOutline className="text-xl" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
