import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navItems } from "../data/navigation";
import { handleSectionLinkClick } from "../utils/scrollToSection";

const stack = ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Firebase"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky/60 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-bold text-white shadow-glow">
                EE
              </span>
              <div>
                <p className="text-xl font-semibold text-white">Emre Er</p>
                <p className="text-sm text-sky">Frontend Developer</p>
              </div>
            </div>

            <p className="mt-5 max-w-xl leading-7 text-mist">
              React ve modern arayüz geliştirme üzerine çalışıyorum. Temiz, hızlı ve kullanıcı dostu web deneyimleri üretmeyi seviyorum.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold text-white">Menü</p>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-mist transition hover:text-white"
                    onClick={(event) => handleSectionLinkClick(event, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-white">Bağlantılar</p>
              <div className="flex gap-3">
                <a className="icon-btn" href="https://github.com/aemreer" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a className="icon-btn" href="https://www.linkedin.com/in/aemreer/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a className="icon-btn" href="mailto:ahmetemreer32@gmail.com" aria-label="E-posta">
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Emre Er. Tüm hakları saklıdır.</p>
          <a href="#home" className="text-slate-400 transition hover:text-sky" onClick={(event) => handleSectionLinkClick(event, "#home")}>
            Başa dön
          </a>
        </div>
      </div>
    </footer>
  );
}
