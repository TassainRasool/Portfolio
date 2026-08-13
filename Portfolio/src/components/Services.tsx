import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import FloatingDots from "./FloatingDots";
import {
  Palette,
  Figma,
  Users,
  Layout,
  Smartphone,
  Layers,
  Target,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: [
      "User interface design",
      "User experience optimization",
      "Visual design & branding",
    ],
  },
  {
    icon: Figma,
    title: "Wireframing & Prototyping",
    description: [
      "Low & high-fidelity wireframes",
      "Interactive prototypes",
      "Clickable mockups for testing",
    ],
  },
  {
    icon: Users,
    title: "User Research",
    description: [
      "User interviews & surveys",
      "Usability testing",
      "Persona development",
    ],
  },
  {
    icon: Layout,
    title: "Design Systems",
    description: [
      "Component libraries",
      "Style guides & documentation",
      "Scalable design tokens",
    ],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: [
      "Mobile-first approach",
      "Cross-device compatibility",
      "Adaptive layouts",
    ],
  },
  {
    icon: Layers,
    title: "Information Architecture",
    description: [
      "Site mapping & user flows",
      "Content strategy",
      "Navigation design",
    ],
  },
  {
    icon: Target,
    title: "Design Consultation",
    description: [
      "UX audits & heuristic evaluation",
      "Design strategy planning",
      "Best practices implementation",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
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
        <div className="flex items-start gap-4">
          <div className="accent-soft flex size-12 flex-shrink-0 items-center justify-center rounded-lg">
            <service.icon className="text-[#ef4444]" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-white text-lg mb-3">{service.title}</h3>
            <ul className="space-y-2">
              {service.description.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-400 text-sm flex items-start"
                >
                  <span className="accent-text mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="section" id="services">
      <FloatingDots />
      <div className="container-x px-4">
        <div className="text-center mb-16">
          <span className="section-eyebrow">Services</span>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Design solutions that create meaningful user experiences.
          </p>
        </div>

        <div
          className="services-grid max-w-6xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
