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
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";

const skills = [
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
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const startX = index % 2 === 0 ? -300 : 300;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 200,
    damping: 25,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 200,
    damping: 25,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["15deg", "-15deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-15deg", "15deg"],
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
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
        scale: isHovered ? 1.05 : 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="transition-all duration-300 ease-out"
    >
      <Card
        className="h-full min-h-[160px] border-[#00ADB5]/20 hover:border-[#00ADB5] transition-all shadow-lg"
        style={{
          backgroundColor: "rgba(57, 62, 70, 0.7)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 10px 30px rgba(0, 173, 181, 0.3)",
          transform: "translateZ(20px)",
        }}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#00ADB5]/20 rounded-lg flex-shrink-0">
              <skill.icon
                className="text-[#00ADB5]"
                size={24}
              />
            </div>
            <h3 className="text-white">{skill.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.skills.map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="bg-[#2b2f33] text-white hover:bg-[#2b2f33]/90"
              >
                {s}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1f26] via-[#222831] to-[#2d3541] relative overflow-hidden" id="skills">
      <FloatingDots />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            What I Bring to the Table
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive design toolkit built on user-centered thinking and creative problem-solving
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start"
          style={{ perspective: "1000px" }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}