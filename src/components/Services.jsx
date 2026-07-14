import React from "react";
import { services } from "../data/services";
import Section from "./Section";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Hizmetler"
      title="Neler Yapabilirim?"
      description="React ile modern ve responsive arayüzler geliştiriyorum. Tasarımı koda dökerken düzenli component yapısına, anlaşılır koda ve kullanıcı deneyimine dikkat ediyorum."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, icon: Icon }) => (
          <div key={title} className="glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.06] text-sky transition group-hover:bg-sky/12">
              <Icon />
            </span>
            <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
