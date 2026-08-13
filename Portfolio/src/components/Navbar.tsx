import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "./ui/utils";

const links = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-40 px-4 pt-4"
    >
      <nav
        className={cn(
          "glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300",
          scrolled && "nav-scrolled",
        )}
      >
        <button
          onClick={() => goTo("home")}
          className="flex items-center gap-2 text-lg font-semibold text-white"
          aria-label="Go to home"
        >
          <span className="accent-bg size-8 flex items-center justify-center rounded-full text-sm font-bold text-white">
            TR
          </span>
          <span className="brand-full">Tassain Rasool</span>
        </button>

        <ul className="nav-desktop items-center gap-1">
          {links.slice(1).map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => goTo(id)}
                className={cn(
                  "nav-link rounded-full px-4 py-2 text-sm",
                  active === id && "nav-link-active",
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="nav-mobile-toggle size-10 items-center justify-center rounded-full border text-white"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="glass-nav mx-auto mt-2 max-w-6xl rounded-2xl p-3"
        >
          {links.slice(1).map(({ label, id }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="nav-link block w-full rounded-xl px-4 py-3 text-left text-sm"
            >
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
