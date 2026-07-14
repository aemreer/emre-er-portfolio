import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import Section from "./Section";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const statusTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(statusTimer.current), []);

  const showTemporaryStatus = (nextStatus) => {
    window.clearTimeout(statusTimer.current);
    setStatus(nextStatus);
    statusTimer.current = window.setTimeout(() => setStatus("idle"), 4500);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form gönderilemedi.");
      }

      form.reset();
      showTemporaryStatus("success");
    } catch {
      showTemporaryStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="İletişim"
      title="Tanışalım"
      description="Frontend developer pozisyonları, ekip görüşmeleri ve uygun iş fırsatları için benimle iletişime geçebilirsin."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-card rounded-3xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white">İletişim Bilgileri</h3>
          <div className="mt-6 grid gap-4">
            <a className="contact-row" href="mailto:ahmetemreer32@gmail.com">
              <FiMail /> ahmetemreer32@gmail.com
            </a>
            <a className="contact-row" href="https://github.com/aemreer" target="_blank" rel="noreferrer">
              <FiGithub /> github.com/aemreer
            </a>
            <a className="contact-row" href="https://www.linkedin.com/in/aemreer/" target="_blank" rel="noreferrer">
              <FiLinkedin /> linkedin.com/in/aemreer
            </a>
            <span className="contact-row">
              <FiMapPin /> Ankara / Türkiye
            </span>
          </div>
          <p className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-mist">
            React, JavaScript ve modern arayüz geliştirme odağında çalışabileceğim ekiplerle tanışmaya açığım.
          </p>
        </div>

        <div className="relative">
          <form
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="glass-card grid gap-4 rounded-3xl p-6 sm:p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden" aria-hidden="true">
              <label>
                Bu alanı boş bırakın
                <input name="bot-field" tabIndex="-1" autoComplete="off" />
              </label>
            </p>
            <label className="field-label">
              Ad Soyad
              <input required type="text" name="name" className="field-input" placeholder="Adınız ve soyadınız" />
            </label>
            <label className="field-label">
              E-posta
              <input required type="email" name="email" className="field-input" placeholder="ornek@mail.com" />
            </label>
            <label className="field-label">
              Mesaj
              <textarea required name="message" rows="5" className="field-input resize-none" placeholder="Pozisyon, ekip veya görüşme detaylarını kısaca yazabilirsiniz" />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Gönderiliyor..." : "Gönder"} <FiSend />
            </button>
          </form>

          <AnimatePresence>
            {(status === "success" || status === "error") && (
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.96 }}
                role="status"
                aria-live="polite"
                className={`absolute bottom-5 left-1/2 w-[calc(100%-2.5rem)] -translate-x-1/2 rounded-2xl border px-4 py-3 text-sm font-medium backdrop-blur-xl ${
                  status === "success"
                    ? "border-sky/25 bg-sky/10 text-[#F5E9CA]"
                    : "border-red-400/25 bg-red-400/10 text-red-100"
                }`}
              >
                {status === "success"
                  ? "Mesajın gönderildi. En kısa sürede dönüş yapacağım."
                  : "Mesaj gönderilemedi. Lütfen tekrar dene veya e-posta adresimden ulaş."}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
