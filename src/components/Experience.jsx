import React from "react";
import { FiBookOpen, FiCode, FiTrendingUp } from "react-icons/fi";
import Section from "./Section";

const items = [
  {
    icon: FiBookOpen,
    title: "Bilgisayar Programcılığı",
    text: "Temel yazılım, problem çözme ve web geliştirme altyapısı üzerine eğitim.",
  },
  {
    icon: FiCode,
    title: "Frontend Odaklı Projeler",
    text: "React, Tailwind CSS, Redux Toolkit ve Firebase üzerine kişisel çalışmalar ve ürün benzeri arayüzler.",
  },
  {
    icon: FiTrendingUp,
    title: "Gerçek Dünya Pratiği",
    text: "E-commerce, landing page ve clone projeleriyle arayüz akışı, responsive kontrol ve yayınlama deneyimi.",
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Deneyim / Eğitim"
      title="Eğitim ve Gelişim"
      description="Frontend tarafında öğrendiklerimi küçük denemelerde bırakmadan projelere uygulamaya çalışıyorum. React, arayüz düzeni ve kullanıcı deneyimi tarafında kendimi geliştirmeye devam ediyorum."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="glass-card rounded-3xl p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet/12 text-violet">
              <Icon />
            </span>
            <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-mist">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
