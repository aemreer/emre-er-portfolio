import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../data/navigation";
import { handleSectionLinkClick } from "../utils/scrollToSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-ink/78 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "border-transparent bg-ink/35 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={(event) => handleSectionLinkClick(event, "#home", closeMenu)}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-bold text-white shadow-glow transition group-hover:border-sky/40">
            EE
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">Emre Er</span>
            <span className="block text-xs text-mist">Frontend Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" onClick={(event) => handleSectionLinkClick(event, item.href)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="btn-secondary" onClick={(event) => handleSectionLinkClick(event, "#contact")}>
            İletişime Geç
          </a>
          <a href="https://github.com/aemreer" target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
            <FiGithub />
          </a>
        </div>

        <button className="icon-btn lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label="Menüyü aç">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-ink/95 px-5 py-4 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-6xl gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="mobile-nav-link" onClick={(event) => handleSectionLinkClick(event, item.href, closeMenu)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary mt-2 justify-center" onClick={(event) => handleSectionLinkClick(event, "#contact", closeMenu)}>
                İletişime Geç
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
