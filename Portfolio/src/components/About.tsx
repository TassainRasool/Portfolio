import { motion } from "motion/react";
import FloatingDots from "./FloatingDots";
import { Dumbbell, Figma, Zap } from "lucide-react";
import profileImage from "../assets/DP.jpg";

export function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1f26] via-[#222831] to-[#2d3541] relative overflow-hidden" id="about">
      <FloatingDots />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">About Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            More than just visuals ! designing connections that empower users.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#00ADB5] rounded-2xl transform rotate-6"></div>
                <img
                  src={profileImage}
                  alt="Developer Portrait"
                  className="relative z-10 rounded-2xl w-full h-auto shadow-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl text-white mb-4">
                  Hi, I am a Designer               </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Over 3 years, I have architected user-centric designs across critical sectors, including Fintech, Healthtech,
                  and E-commerce. My expertise is in blending rigorous user research and design thinking with pixel-perfect execution,
                  ensuring products are not only beautiful but also deliver tangible increases in user engagement and conversion rates.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not refining Figma prototypes or analyzing heatmaps, I'm usually found diving into emerging design trends,
                  sketching new concepts, or finding inspiration in art and architecture while enjoying a good cup of coffee.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-[#00ADB5]/10 rounded-lg">
                      <Figma className="text-[#00ADB5]" size={24} />
                    </div>
                  </div>
                  <p className="text-2xl text-white">3+</p>
                  <p className="text-sm text-gray-300">Years</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-[#00ADB5]/10 rounded-lg">
                      <Zap className="text-[#00ADB5]" size={24} />
                    </div>
                  </div>
                  <p className="text-2xl text-white">3+</p>
                  <p className="text-sm text-gray-300">Projects</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-[#00ADB5]/10 rounded-lg">
                      <Dumbbell className="text-[#00ADB5]" size={24} />
                    </div>
                  </div>
                  <p className="text-2xl text-white">∞</p>
                  <p className="text-sm text-gray-300">MMA</p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}