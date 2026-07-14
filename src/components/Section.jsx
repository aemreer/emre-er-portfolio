import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Section({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <section id={id} className={`section-spacing scroll-mt-24 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        variants={variants}
        className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8"
      >
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {description && <p className="section-description">{description}</p>}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
