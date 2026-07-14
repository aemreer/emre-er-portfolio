import React from "react";
import { FiBriefcase, FiMapPin, FiMonitor, FiTarget } from "react-icons/fi";
import Section from "./Section";

const details = [
  { icon: FiMapPin, label: "Konum", value: "Ankara / Türkiye" },
  { icon: FiMonitor, label: "Rol", value: "Frontend Developer" },
  { icon: FiTarget, label: "Odak", value: "React & Modern UI" },
  { icon: FiBriefcase, label: "Çalışma", value: "Ofis / Hibrit / Remote düzene uyumlu" },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Hakkımda"
      title="Temiz component yapısı ve modern arayüz geliştirme odağı."
      description="Frontend geliştirme alanında kendimi sürekli geliştiriyorum. React ekosistemiyle hızlı, responsive ve kullanıcı dostu web arayüzleri oluşturuyorum."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-200">
            Projelerimde sade tasarım, anlaşılır component yapısı ve iyi kullanıcı deneyimi benim için önemli. Kod tarafında düzenli, okunabilir ve geliştirilmeye açık bir yapı kurmaya çalışıyorum.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["React geliştirme", "Responsive arayüzler", "Performans hassasiyeti", "Takım çalışmasına uyum"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass-card flex items-center gap-4 rounded-2xl p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky/10 text-sky">
                <Icon />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-mist">{label}</p>
                <p className="mt-1 font-medium text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
