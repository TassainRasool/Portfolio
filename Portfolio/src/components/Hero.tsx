import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
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
    const id = setInterval(() => setIndex((i) => (i + 1) % greetings.length), 2500);
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

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Tassain_Rasool_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { icon: Palette, label: "UI/UX Design", color: "#00ADB5" },
    { icon: Figma, label: "Prototyping", color: "#00ADB5" },
    { icon: Layers, label: "Design Systems", color: "#00ADB5" },
  ];

  const sectionContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  };

  const [play, setPlay] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setPlay(true), 40);
    return () => clearTimeout(id);
  }, []);

  // Appear-from-background variants: subtle scale + fade instead of sliding
  const leftWrapper = {
    hidden: { opacity: 0, scale: 0.96 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  const rightWrapper = {
    hidden: { opacity: 0, scale: 0.96 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  const leftItem = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.42 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1f26] via-[#222831] to-[#2d3541] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-[#00ADB5] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#00ADB5] rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>
      

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ADB5] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          animate={play ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          {/* Left side - Text content */}
          <motion.div variants={leftWrapper}>
            <motion.div variants={leftItem} className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#00ADB5]/20 border border-[#00ADB5] rounded-full text-[#00ADB5] text-sm mb-4">
                Available for Design Projects
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                <span className="block mb-2">
                  <GreetingRotator />
                </span>
                <span className="block">
                  <span className="inline-block mr-3">, I'm</span>
                  <span className="inline-block text-[#00ADB5] font-extrabold"><strong>Tassain Rasool</strong></span>
                </span>
                
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                UI/UX Designer & Visual Storyteller
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
              I design intuitive, user-centered experiences — from research to pixel-perfect handoff. Specialized in design systems, multilingual and RTL interfaces, and accessible UI that scales across platforms and cultures.
              </p>
            </motion.div>

            <motion.div variants={leftItem} className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                className="bg-[#00ADB5] hover:bg-[#00ADB5]/90 px-8"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white px-8"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                className="bg-[#00ADB5] hover:bg-[#00ADB5]/90 px-8"
                onClick={handleDownloadResume}
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div variants={leftItem} className="flex gap-4">
              <a
                href="https://github.com/TassainRasool"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#393E46] rounded-lg text-gray-400 hover:text-[#00ADB5] hover:bg-[#393E46]/80 transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tassainrasool"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#393E46] rounded-lg text-gray-400 hover:text-[#00ADB5] hover:bg-[#393E46]/80 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.iamtassain.00@gmail.com"
                className="p-3 bg-[#393E46] rounded-lg text-gray-400 hover:text-[#00ADB5] hover:bg-[#393E46]/80 transition-all"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image and skills */}
          <motion.div variants={rightWrapper} className="flex flex-col items-center lg:items-end">
            <div className="relative mb-8">
              {/* Glowing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(45deg, #00ADB5, #00d4dd, #00ADB5)",
                  filter: "blur(20px)",
                  opacity: 0.6,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Profile image */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#00ADB5] shadow-2xl"
                  />

                  {/* Decorative circles */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-[#00ADB5] rounded-full opacity-20"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#00ADB5] rounded-full opacity-20"
                    animate={{
                      scale: [1.2, 1, 1.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Skills badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 gap-3 w-full max-w-sm"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.9 + index * 0.1,
                    }}
                    whileHover={{ scale: 1.05, x: -5 }}
                    className="flex items-center gap-4 bg-[#393E46]/50 backdrop-blur-sm border border-[#00ADB5]/30 rounded-lg p-4 cursor-pointer"
                  >
                    <div className="p-2 bg-[#00ADB5]/20 rounded-lg">
                      <Icon
                        className="text-[#00ADB5]"
                        size={24}
                      />
                    </div>
                    <span className="text-white">
                      {skill.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDown className="text-[#00ADB5]" size={32} />
      </motion.div>
    </section>
  );
}