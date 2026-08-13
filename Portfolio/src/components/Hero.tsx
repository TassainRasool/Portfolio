import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Palette,
  Figma,
  Layers,
  Download,
} from "lucide-react";
import profileImage from "../assets/Dp1.jpg";
import resumePDF from "../assets/CV.pdf";

function GreetingRotator() {
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "مرحبا",
    "नमस्ते",
    "你好",
    "こんにちは",
    "Hallo",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % greetings.length),
      2500,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-block mr-2"
    >
      {greetings[index]}
    </motion.span>
  );
}

const heroSkills = [
  { icon: Palette, label: "UI/UX Design" },
  { icon: Figma, label: "Prototyping" },
  { icon: Layers, label: "Design Systems" },
];

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Tassain_Rasool_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [play, setPlay] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setPlay(true), 40);
    return () => clearTimeout(id);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  return (
    <section
      id="home"
      className="section min-h-screen flex items-center justify-center text-white"
    >
      {/* Ambient red glow */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <motion.div
          className="glow-blob glow-red top-20 left-20 w-96 h-96"
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="glow-blob glow-red bottom-20 right-20 w-96 h-96"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#dc2626] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.15, 0.7, 0.15] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-x px-4 py-24">
        <motion.div
          initial="hidden"
          animate={play ? "show" : "hidden"}
          transition={{ staggerChildren: 0.18 }}
          className="hero-grid max-w-6xl mx-auto"
        >
          {/* Left — text content */}
          <motion.div variants={fadeUp}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="section-eyebrow">
                <span className="h-2 w-2 rounded-full bg-[#ef4444] animate-pulse" />
                Available for Design Projects
              </span>
              <h1 className="hero-title">
                <span className="block mb-2">
                  <GreetingRotator />
                </span>
                <span className="block">
                  <span className="inline-block mr-3">, I'm</span>
                  <span className="inline-block text-[#ef4444] font-bold">
                    Tassain Rasool
                  </span>
                </span>
              </h1>
              <h2 className="hero-subtitle">
                UI/UX Designer &amp; Visual Storyteller
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                I design intuitive, user-centered experiences — from research
                to pixel-perfect handoff. Specialized in design systems,
                multilingual and RTL interfaces, and accessible UI that scales
                across platforms and cultures.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </button>
              <button
                type="button"
                className="btn btn-outline btn-lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={handleDownloadResume}
              >
                <Download size={18} />
                Download Resume
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4">
              <a
                href="https://github.com/TassainRasool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="icon-btn"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/tassainrasool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="icon-btn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:iamtassain.00@gmail.com"
                aria-label="Send an email"
                className="icon-btn"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — profile image and skills */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center lg:items-end"
          >
            <div className="profile-wrap mb-8">
              <div className="profile-ring" />
              <motion.div whileHover={{ scale: 1.04 }} className="relative">
                <img
                  src={profileImage}
                  alt="Portrait of Tassain Rasool"
                  className="avatar-img w-64 h-64 md:w-80 md:h-80"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-3 w-full max-w-sm">
              {heroSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="skill-pill"
                  >
                    <div className="accent-soft flex size-11 items-center justify-center rounded-lg">
                      <Icon className="text-[#ef4444]" size={22} />
                    </div>
                    <span className="text-white">{skill.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        className="hero-scroll"
        aria-label="Scroll to skills"
        onClick={() =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 0.4,
            ease: "easeInOut",
          }}
          className="inline-flex"
        >
          <ArrowDown size={28} />
        </motion.span>
      </button>
    </section>
  );
}

