import { motion } from "motion/react";
import FloatingDots from "./FloatingDots";
import { Send, Github, Linkedin, Mail } from "lucide-react";
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
        headers: { "Content-Type": "application/json" },
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="section" id="contact">
      <FloatingDots />
      <div className="container-x px-4">
        <div className="text-center mb-12">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="section-subtitle">Got an idea? Let's give it a design!</p>
        </div>

        <div className="contact-grid max-w-6xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="field-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="field-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="field-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="field-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="field-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-50"
                >
                  <Send size={18} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Connect with me */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white text-3xl mb-4">Connect With Me</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always excited to discuss new projects and opportunities.
                Let's create something amazing together!
              </p>
            </div>

            <div className="connect-grid">
              <a
                href="https://github.com/TassainRasool"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-link"
              >
                <Github className="text-white" size={22} />
                <span className="text-white">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tassainrasool"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-link"
              >
                <Linkedin className="text-white" size={22} />
                <span className="text-white">LinkedIn</span>
              </a>

              <a href="mailto:iamtassain.00@gmail.com" className="connect-link">
                <Mail className="text-white" size={22} />
                <span className="text-white">Email</span>
              </a>
            </div>

            <div className="rounded-lg border-l-4 border-[#dc2626] bg-[#1e293b] p-6">
              <p className="text-gray-300 italic leading-relaxed">
                "A user interface is like a joke. If you have to explain it,
                it's not that good."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
