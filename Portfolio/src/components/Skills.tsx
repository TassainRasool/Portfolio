import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import FloatingDots from "./FloatingDots";
import {
  Palette,
  Figma,
  PenTool,
  Users,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const skillGroups = [
  {
    icon: Palette,
    title: "Design Tools",
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
  },
  {
    icon: PenTool,
    title: "Design Principles",
    skills: [
      "Typography",
      "Color Theory",
      "Layout Design",
      "Visual Hierarchy",
      "Accessibility",
    ],
  },
  {
    icon: Figma,
    title: "Prototyping & Interaction",
    skills: [
      "Interactive Prototypes",
      "Micro-interactions",
      "Animation Design",
      "User Flows",
    ],
  },
  {
    icon: Users,
    title: "User Research",
    skills: [
      "User Interviews",
      "Usability Testing",
      "A/B Testing",
      "Persona Creation",
      "Journey Mapping",
    ],
  },
  {
    icon: Sparkles,
    title: "Frontend Knowledge",
    skills: [
      "HTML/CSS",
      "Responsive Design",
      "Tailwind CSS",
      "React Basics",
      "Design Handoff",
    ],
  },
  {
    icon: TrendingUp,
    title: "Soft Skills",
    skills: [
      "Communication",
      "Collaboration",
      "Problem Solving",
      "Empathy",
      "Time Management",
    ],
  },
];

function SkillCard({
  group,
  index,
}: {
  group: (typeof skillGroups)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5);
    y.set(e.clientY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      style={{
        transformStyle: "preserve-3d",
        rotateX: isHovered ? rotateX : "0deg",
        rotateY: isHovered ? rotateY : "0deg",
        scale: isHovered ? 1.03 : 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      <div className="glass-card h-full p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="accent-soft flex size-12 items-center justify-center rounded-lg">
            <group.icon className="text-[#ef4444]" size={24} />
          </div>
          <h3 className="text-white text-xl">{group.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span key={skill} className="chip chip-soft">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <FloatingDots />
      <div className="container-x px-4">
        <div className="text-center mb-16">
          <span className="section-eyebrow">Expertise</span>
          <h2 className="section-title">What I Bring to the Table</h2>
          <p className="section-subtitle">
            A comprehensive design toolkit built on user-centered thinking and
            creative problem-solving.
          </p>
        </div>

        <div
          className="skills-grid max-w-6xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

