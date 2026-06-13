import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import FloatingDots from "./FloatingDots";
import { Card, CardContent } from "./ui/card";
import { 
  Palette, 
  Figma, 
  Users, 
  Layout, 
  Smartphone, 
  Layers, 
  Target 
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: [
      "User interface design",
      "User experience optimization",
      "Visual design & branding"
    ]
  },
  {
    icon: Figma,
    title: "Wireframing & Prototyping",
    description: [
      "Low & high-fidelity wireframes",
      "Interactive prototypes",
      "Clickable mockups for testing"
    ]
  },
  {
    icon: Users,
    title: "User Research",
    description: [
      "User interviews & surveys",
      "Usability testing",
      "Persona development"
    ]
  },
  {
    icon: Layout,
    title: "Design Systems",
    description: [
      "Component libraries",
      "Style guides & documentation",
      "Scalable design tokens"
    ]
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: [
      "Mobile-first approach",
      "Cross-device compatibility",
      "Adaptive layouts"
    ]
  },
  {
    icon: Layers,
    title: "Information Architecture",
    description: [
      "Site mapping & user flows",
      "Content strategy",
      "Navigation design"
    ]
  },
  {
    icon: Target,
    title: "Design Consultation",
    description: [
      "UX audits & heuristic evaluation",
      "Design strategy planning",
      "Best practices implementation"
    ]
  }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
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
      <Card className="h-full border-[#00ADB5]/20 hover:border-[#00ADB5] transition-all" style={{ 
        backgroundColor: 'rgba(57, 62, 70, 0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 10px 30px rgba(0, 173, 181, 0.3)',
        transform: 'translateZ(20px)'
      }}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#00ADB5]/20 rounded-lg flex-shrink-0">
              <service.icon className="text-[#00ADB5]" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-3">{service.title}</h3>
              <ul className="space-y-2">
                {service.description.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start">
                    <span className="text-[#00ADB5] mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1f26] via-[#222831] to-[#2d3541] relative overflow-hidden" id="services">
      <FloatingDots />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Design solutions that create meaningful user experiences
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}