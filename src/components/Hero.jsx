import React from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { SiFirebase, SiJavascript, SiNetlify, SiReact, SiRedux, SiTailwindcss } from "react-icons/si";
import { focusTech } from "../data/skills";
import { handleSectionLinkClick } from "../utils/scrollToSection";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const techIcons = {
  React: SiReact,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Redux Toolkit": SiRedux,
  Firebase: SiFirebase,
  Netlify: SiNetlify,
};

const badgePositions = [
  "-left-12 top-8",
  "-left-12 top-[4.9rem]",
  "-left-12 top-[7.9rem]",
  "-right-10 bottom-32",
  "-right-8 bottom-20",
  "-right-9 bottom-8",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-soft-radial" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-sky/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={item} className="section-eyebrow">
            Frontend Developer
          </motion.p>
          <motion.h1 variants={item} className="mt-4 text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Merhaba ben <span className="text-gradient">Emre</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
            React ve JavaScript ile modern web arayüzleri geliştiriyorum.
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-8 text-mist sm:text-lg">
            Arayüz geliştirirken temiz component yapısına, responsive tasarıma ve anlaşılır kod yazmaya dikkat ediyorum. Kendimi özellikle React ekosistemi, Tailwind CSS ve modern frontend pratikleri üzerine geliştiriyorum.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary" onClick={(event) => handleSectionLinkClick(event, "#projects")}>
              Projelerimi Gör <FiArrowDownRight />
            </a>
            <a href="#contact" className="btn-secondary" onClick={(event) => handleSectionLinkClick(event, "#contact")}>
              İletişime Geç <FiMail />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a className="social-pill" href="https://github.com/aemreer" target="_blank" rel="noreferrer">
              <FiGithub /> GitHub
            </a>
            <a className="social-pill" href="https://www.linkedin.com/in/aemreer/" target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <span className="social-pill">
              <FiMapPin /> Ankara / Türkiye
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="relative mx-auto w-full max-w-[420px] lg:mr-0"
        >
          <div className="glass-card relative overflow-hidden rounded-[32px] p-3 shadow-card">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky/70 to-transparent" />
            <img
              src="/pp.webp"
              alt="Emre Er profil fotoğrafı"
              className="h-[365px] w-full rounded-[26px] object-cover object-center transition duration-500 hover:scale-[1.025] sm:h-[392px] lg:h-[413px]"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-ink/72 p-4 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">Frontend Developer</p>
              <p className="mt-1 text-xs leading-5 text-mist">React, modern UI ve responsive arayüz geliştirme.</p>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            {focusTech.map((tech, index) => {
              const Icon = techIcons[tech];

              return (
                <motion.span
                  key={tech}
                  initial={{ opacity: 1, scale: 0.98, filter: "blur(0px)" }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.025, 1],
                    filter: "blur(0px)",
                  }}
                  transition={{
                    scale: { duration: 5.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: index * 0.14 },
                  }}
                  className={`hero-tech-badge pointer-events-auto absolute ${badgePositions[index]}`}
                >
                  {Icon && <Icon />}
                  {tech}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
