import { motion } from "motion/react";
import FloatingDots from "./FloatingDots";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import SplashScreenImage from "./images/SplashScreen.png";

const projects = [
  {
    title: "G20 India Official App",
    client: "Government of India",
    description:
      "Contributed as UI/UX designer for India's G20 Presidency mobile application, collaborating on creating an intuitive and culturally rich digital experience for global audiences.",
    problem:
      "Needed a design system that could represent India's heritage while ensuring accessibility and usability for international visitors.",
    solution:
      "Collaborated on wireframes, prototypes, and design systems with focus on multilingual support, accessibility standards, and responsive layouts.",
    tech: [
      "Figma",
      "User Research",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Interaction Design",
      "Usability Testing",
      "Design Systems",
    ],
    image:
      "https://images.unsplash.com/photo-1624357488027-f2235d56bae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwd2Vic2l0ZSUyMHN1bW1pdHxlbnwxfHx8fDE3NjQ1OTMxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demoLink: "https://www.g20.in/",
  },
  {
    title: "SHV Energy Corporate App",
    client: "SHV Energy",
    description:
      "Worked as UI/UX designer on global energy leader's mobile application, contributing to user-centric interface design balancing corporate professionalism with modern app design principles.",
    problem:
      "Required a sophisticated design that communicates trust and sustainability while maintaining excellent user experience across all devices.",
    solution:
      "Contributed to information architecture, high-fidelity mockups, and interactive prototypes ensuring consistent brand experience globally.",
    tech: [
      "Figma",
      "User Research",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Interaction Design",
      "Usability Testing",
    ],
    image:
      "https://images.unsplash.com/photo-1759109391527-11b6adf2cc5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBjb21wYW55JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQ1OTMxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demoLink: "https://www.shvenergy.com/",
  },
  {
    title: "Kashmiri Essence Mobile App",
    client: "Own Project",
    description:
      "I designed the end-to-end UI/UX for Kashmiri Essence, starting from user research to final high-fidelity screens. I created user flows, wireframes, a complete design system, and interactive prototypes with a culturally inspired visual style.",
    problem:
      "Designed a mobile-first e-commerce experience to help users discover and purchase authentic Kashmiri handicrafts with trust and ease.",
    solution:
      "Delivered a polished and intuitive shopping experience that blends tradition with modern UI/UX principles.",
    tech: [
      "Figma",
      "User Research",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Interaction Design",
      "Usability Testing",
    ],
    image: SplashScreenImage,
    demoLink:
      "https://www.figma.com/design/WvDhRcbp0ownXcszKRCZOV/Kashmiri-Essencs?node-id=0-1&t=hXCpmDyGHkwWwRPi-1",
  },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <FloatingDots />
      <div className="container-x px-4">
        <div className="text-center mb-16">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Real projects. Real results. See how I've helped clients bring
            their ideas to life.
          </p>
        </div>

        <div className="projects-grid max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card flex h-full flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3">
                    <h3 className="text-white text-xl mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.client}</p>
                  </div>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm accent-text font-medium mb-1">
                        Problem
                      </p>
                      <p className="text-sm text-gray-400">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm accent-text font-medium mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-gray-400">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <button
                      type="button"
                      className="btn btn-primary w-full"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
