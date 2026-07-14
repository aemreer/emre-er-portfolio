import { FiExternalLink, FiGithub } from "react-icons/fi";

export const projects = [
  {
    title: "Penguin E-commerce",
    featured: true,
    description:
      "React, Tailwind CSS, Redux Toolkit ve Firebase ile geliştirilen modern bir e-commerce arayüzü. Ürün listeleme, kategori filtreleme, arama, sepet yönetimi, kullanıcı girişi ve korumalı rota akışlarını içerir.",
    highlights: [
      "Ürün listeleme ve kategori filtreleme akışı",
      "Redux Toolkit ile sepet ve kullanıcı durumu",
      "Firebase Auth ile giriş ve oturum yönetimi",
      "Korumalı rota yapısı ve responsive sayfa düzeni",
    ],
    caseNote: "State yönetimi, Firebase auth ve e-commerce kullanıcı akışı pratiği.",
    technologies: ["React", "Tailwind CSS", "Redux Toolkit", "Firebase", "Axios", "React Router"],
    accent: "from-[#D7B56D]/22 via-[#B8754A]/10 to-white/10",
    surface: "from-[#D7B56D]/26 via-[#B8754A]/18 to-[#17120B]",
    links: [
      { label: "Canlı Demo", href: "https://penguin-clothing.netlify.app/", icon: FiExternalLink },
      { label: "GitHub", href: "https://github.com/aemreer/penguin-ecommerce", icon: FiGithub },
    ],
  },
  {
    title: "Auralux",
    description:
      "Modern, premium hissiyatlı ve animasyonlu bir web deneyimi. Görsel hiyerarşi, akıcı geçişler, responsive düzen ve temiz component yapısı üzerine kurgulandı.",
    highlights: [
      "Ürün odaklı landing page kurgusu",
      "Framer Motion ile kontrollü mikro animasyonlar",
      "Responsive hero, detay ve ürün anlatımı",
      "Premium görsel dil ve sade component yapısı",
    ],
    caseNote: "Animasyon, görsel hiyerarşi ve ürün odaklı landing page pratiği.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    accent: "from-[#B8754A]/18 via-[#D7B56D]/10 to-white/10",
    surface: "from-[#B8754A]/24 via-[#D7B56D]/14 to-[#16100D]",
    links: [
      { label: "Canlı Demo", href: "https://auralux-headphone.netlify.app/", icon: FiExternalLink },
      { label: "GitHub", href: "https://github.com/aemreer/Auralux", icon: FiGithub },
    ],
  },
  {
    title: "Netflix Clone",
    description:
      "React ile geliştirilen, içerik kartları ve tanıdık medya arayüzü desenlerini kullanan Netflix arayüz klonu.",
    highlights: [
      "Medya odaklı kart ve grid düzeni",
      "Tekrarlanabilir component yapısı",
      "Responsive içerik yerleşimi",
      "Tanıdık platform arayüzünü React ile yeniden kurma",
    ],
    caseNote: "Kart yapıları, medya arayüzü düzeni ve component tekrar kullanımı pratiği.",
    technologies: ["React", "CSS", "React Icons"],
    accent: "from-zinc-200/12 via-[#B8754A]/10 to-[#D7B56D]/12",
    surface: "from-zinc-200/16 via-[#B8754A]/16 to-[#11100D]",
    links: [
      { label: "Canlı Demo", href: "https://cloneproject-demo.netlify.app", icon: FiExternalLink },
      { label: "GitHub", href: "https://github.com/aemreer/Netflix-Clone", icon: FiGithub },
    ],
  },
];
