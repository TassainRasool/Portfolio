import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function FloatingChatButton() {
  const handleClick = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label="Get in touch"
        className="btn btn-primary flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
      >
        <MessageCircle size={24} />
      </button>
    </motion.div>
  );
}
