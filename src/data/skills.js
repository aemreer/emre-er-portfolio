import {
  SiAxios,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiJavascript,
  SiNetlify,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { FiCode, FiCpu, FiDatabase, FiLayout, FiTool } from "react-icons/fi";

export const focusTech = ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Firebase", "Netlify"];

export const skillGroups = [
  {
    title: "Frontend",
    icon: FiLayout,
    items: [
      { name: "HTML5", icon: FiCode },
      { name: "CSS3", icon: FiCode },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: FiCpu },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "State & Data",
    icon: FiDatabase,
    items: [
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Axios", icon: SiAxios },
      { name: "Firebase Auth", icon: SiFirebase },
      { name: "REST API", icon: FiDatabase },
    ],
  },
  {
    title: "UI & Animasyon",
    icon: SiFramer,
    items: [
      { name: "Framer Motion", icon: SiFramer },
      { name: "Responsive Design", icon: FiLayout },
      { name: "Modern UI Components", icon: FiCpu },
      { name: "CSS Animations", icon: FiCode },
    ],
  },
  {
    title: "Araçlar",
    icon: FiTool,
    items: [
      { name: "Git", icon: FiTool },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: FiCode },
      { name: "Netlify", icon: SiNetlify },
      { name: "Vite", icon: SiVite },
    ],
  },
];
