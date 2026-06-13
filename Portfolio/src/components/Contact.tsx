import { motion } from "motion/react";
import FloatingDots from "./FloatingDots";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import {
  Send,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xeoyzepo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-[#1a1f26] via-[#222831] to-[#2d3541] relative overflow-hidden"
      id="contact"
    >
      <FloatingDots />
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#00ADB5] rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-[#00ADB5] rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#00ADB5] rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#00ADB5] rounded-full opacity-30"></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-[#00ADB5] rounded-full opacity-60"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#00ADB5] rounded-full opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Got an idea? Let's give it a design!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <Card className="border-[#00ADB5] border-2 shadow-2xl h-full" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
              <CardContent className="p-8 flex flex-col h-full">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-1 flex flex-col"
                >
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-[#222831]"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-2 border-gray-300 bg-gray-50 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-[#222831]"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-2 border-gray-300 bg-gray-50 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-[#222831]"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      className="mt-2 border-gray-300 bg-gray-50 placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-white disabled:opacity-50"
                  >
                    <Send size={18} className="mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Connect With Me Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white text-3xl mb-4">
                Connect With Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always excited to discuss new projects and
                opportunities. Let's create something amazing
                together!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/TassainRasool"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#2e3a4f] border border-[#3d4f6b] rounded-lg hover:border-[#00ADB5] transition-all"
              >
                <Github className="text-white" size={24} />
                <span className="text-white">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tassainrasool"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#2e3a4f] border border-[#3d4f6b] rounded-lg hover:border-[#00ADB5] transition-all"
              >
                <Linkedin className="text-white" size={24} />
                <span className="text-white">LinkedIn</span>
              </a>

              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#2e3a4f] border border-[#3d4f6b] rounded-lg hover:border-[#00ADB5] transition-all"
              >
                <Twitter className="text-white" size={24} />
                <span className="text-white">Twitter</span>
              </a> */}

              <a
                href="mailto:your.iamtassain.00@gmail.com"
                className="flex items-center gap-3 px-6 py-4 bg-[#2e3a4f] border border-[#3d4f6b] rounded-lg hover:border-[#00ADB5] transition-all"
              >
                <Mail className="text-white" size={24} />
                <span className="text-white">Email</span>
              </a>
            </div>

            <div className="bg-[#1f2937] rounded-lg p-6 border-l-4 border-[#00ADB5]">
              <p className="text-gray-300 italic leading-relaxed">
                "A user interface is like a joke. If you have to
                explain it, it's not that good."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}