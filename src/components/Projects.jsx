import React, { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";
import Section from "./Section";

function ProjectShowcase() {
  const showcaseRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start 82%", "end 18%"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.93, 1, 0.97]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [38, 0, -20]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.38, 0.2]);

  const cardMotion = shouldReduceMotion
    ? {}
    : {
        rotateX,
        scale,
        y,
      };

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  };

  return (
    <div ref={showcaseRef} className="project-showcase">
      <div className="project-showcase-inner">
        <div style={{ perspective: "1400px" }}>
          <motion.div
            style={cardMotion}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="project-stage"
          >
            <motion.div
              style={{ opacity: glowOpacity }}
              className={`absolute -inset-8 rounded-[2rem] bg-gradient-to-br ${activeProject.accent} blur-3xl`}
            />
            <div className={`project-screen bg-gradient-to-br ${activeProject.surface}`}>
              <div className="project-screen-topbar">
                <div className="flex gap-2">
                  <span />
                  <span />
                  <span />
                </div>
                <p>Project Preview</p>
              </div>

              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32 }}
                className="relative z-10"
              >
                <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="project-preview-main">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky">
                      Seçili Proje
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                      {activeProject.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-stone-300">
                      {activeProject.description}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {activeProject.highlights.slice(0, 4).map((feature, index) => (
                      <div key={feature} className="project-metric">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="project-case-panel">
                    <span>Case note</span>
                    <p>{activeProject.caseNote}</p>
                  </div>

                  <div className="project-tech-panel">
                    {activeProject.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-screen-actions">
                  {(activeProject.links || [{ label: "GitHub", href: "https://github.com/aemreer", icon: FiGithub }]).map(
                    ({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className="project-link"
                      >
                        <Icon /> {label}
                      </a>
                    ),
                  )}
                </div>
              </motion.div>
            </div>

            <div className="project-showcase-controls">
              <button type="button" onClick={goToPrevious} className="project-arrow" aria-label="Önceki proje">
                <FiArrowLeft />
              </button>

              <div className="flex gap-3">
                {projects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`project-step ${index === activeIndex ? "is-active" : ""}`}
                    aria-label={`${project.title} projesini göster`}
                  />
                ))}
              </div>

              <button type="button" onClick={goToNext} className="project-arrow" aria-label="Sonraki proje">
                <FiArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projeler"
      title="Öne Çıkan Projeler"
      description="Gerçek ürün deneyimlerine yakın; kullanıcı akışı, görsel hiyerarşi ve modern frontend pratikleri üzerine kurulmuş çalışmalarım."
    >
      <ProjectShowcase />
    </Section>
  );
}
