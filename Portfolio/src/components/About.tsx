import { motion } from "motion/react";
import FloatingDots from "./FloatingDots";
import { Dumbbell, Figma, Zap } from "lucide-react";
import profileImage from "../assets/DP.jpg";

const stats = [
  { icon: Figma, value: "3+", label: "Years" },
  { icon: Zap, value: "3+", label: "Projects" },
  { icon: Dumbbell, value: "∞", label: "MMA" },
];

export function About() {
  return (
    <section className="section" id="about">
      <FloatingDots />
      <div className="container-x px-4">
        <div className="text-center mb-16">
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            More than just visuals! Designing connections that empower users.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#dc2626] rounded-2xl transform rotate-6 opacity-80" />
                <img
                  src={profileImage}
                  alt="Portrait of Tassain Rasool"
                  className="relative z-10 rounded-2xl w-full h-auto shadow-xl border-2 border-[#dc2626]/40"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl text-white mb-4">
                  Hi, I'm a Designer
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Over 3 years, I have architected user-centric designs across
                  critical sectors, including Fintech, Healthtech, and
                  E-commerce. My expertise is in blending rigorous user
                  research and design thinking with pixel-perfect execution,
                  ensuring products are not only beautiful but also deliver
                  tangible increases in user engagement and conversion rates.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  When I'm not refining Figma prototypes or analyzing heatmaps,
                  I'm usually found diving into emerging design trends,
                  sketching new concepts, or finding inspiration in art and
                  architecture while enjoying a good cup of coffee.
                </p>
              </div>

              <div className="stats-grid py-6">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="flex justify-center mb-2">
                        <div className="accent-soft flex size-12 items-center justify-center rounded-lg">
                          <Icon className="text-[#ef4444]" size={24} />
                        </div>
                      </div>
                      <p className="text-2xl text-white font-bold">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
