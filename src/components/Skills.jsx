import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/skills";
import Section from "./Section";

const groupDescriptions = {
  Frontend:
    "Arayüzleri semantik yapı, temiz component mantığı ve responsive davranış üzerinden kuruyorum.",
  "State & Data":
    "Kullanıcı akışlarını, API isteklerini ve auth süreçlerini daha okunabilir bir veri yapısıyla yönetiyorum.",
  "UI & Animasyon":
    "Geçişleri ve mikro etkileşimleri abartmadan, arayüzün daha akıcı hissettirmesi için kullanıyorum.",
  Araçlar:
    "Geliştirme, versiyonlama ve yayına alma sürecinde hızlı ve düzenli ilerlemeyi sağlayan araçlarla çalışıyorum.",
};

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeGroup = skillGroups[activeIndex];
  const activeRotation = useMemo(() => activeIndex * -90, [activeIndex]);
  const radius = 176;

  return (
    <Section
      id="skills"
      eyebrow="Yetenekler"
      title="Kullandığım Teknolojiler"
      description="Arayüz geliştirme, state yönetimi, API akışları ve modern yayına alma süreçleri için kullandığım teknoloji seti."
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="glass-card rounded-3xl p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-sky/20 bg-sky/10 text-xl text-sky">
                  <activeGroup.icon />
                </span>
                <div>
                  <span className="category-accent-bar" />
                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    {activeGroup.title}
                  </h3>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-7 text-mist sm:text-base">
                {groupDescriptions[activeGroup.title]}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {activeGroup.items.map(({ name, icon: SkillIcon }, itemIndex) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: itemIndex * 0.035 }}
                    className="skill-token"
                  >
                    <SkillIcon />
                    <span>{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="hidden min-h-[430px] items-center justify-center lg:flex">
          <div className="relative h-[390px] w-[390px]">
            <motion.div
              className="skill-orbit-ring"
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 38,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            <div className="absolute inset-[84px] rounded-full border border-white/[0.07] bg-white/[0.025] shadow-card backdrop-blur-sm" />
            <div className="absolute inset-0">
              {skillGroups.map(({ title, icon: Icon }, index) => {
                const isActive = index === activeIndex;
                const angle = index * 90 + activeRotation - 90;
                const angleInRadians = (angle * Math.PI) / 180;
                const x = Math.cos(angleInRadians) * radius;
                const y = Math.sin(angleInRadians) * radius;

                return (
                  <motion.div
                    key={title}
                    className="skill-orbit-node"
                    animate={{ x, y }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="skill-orbit-anchor">
                      <motion.button
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveIndex(index)}
                        className={`skill-orbit-item ${isActive ? "is-active" : ""}`}
                        animate={{
                          scale: isActive ? 1.08 : 1,
                          opacity: isActive ? 1 : 0.72,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <span>
                          <Icon />
                        </span>
                        {title}
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink/85 shadow-card backdrop-blur-xl">
              <span className="grid h-16 w-16 place-items-center rounded-full border border-sky/25 bg-sky/10 text-2xl text-sky">
                <activeGroup.icon />
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-3 lg:hidden">
          {skillGroups.map(({ title, icon: Icon }, index) => (
            <button
              key={title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`skill-mobile-tab ${index === activeIndex ? "is-active" : ""}`}
            >
              <span>
                <Icon />
              </span>
              {title}
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
