"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change le style après 50px de scroll
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Cache la nav quand on scroll vers le bas, montre quand on scroll vers le haut
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => {
    return pathname === path
      ? "text-blue-600 font-semibold relative"
      : "text-gray-700 hover:text-blue-600 transition-colors relative";
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
            <span className="text-gray-900">PROTOPRINT DYNAMICS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "/impression-3d", label: "Technologie" },
              { href: "/imprimantes", label: "Machines" },
              { href: "/galerie", label: "Galerie" },
              { href: "/entreprise", label: "À propos" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary-purple"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
