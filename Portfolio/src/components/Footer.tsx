import { Heart } from "lucide-react";
import FloatingDots from "./FloatingDots";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="section py-12 text-white">
      <FloatingDots />
      <div className="container-x px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="accent-text text-xl mb-4">
              Tassain Rasool Malik
            </h4>
            <p className="text-gray-400">
              Crafting digital solutions with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={scrollTo(id)}
                    className="footer-link"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/TassainRasool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tassainrasool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:iamtassain.00@gmail.com"
                  className="footer-link"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Tassain Rasool Malik. Design with{" "}
            <Heart
              size={16}
              className="text-[#dc2626]"
              fill="currentColor"
              aria-hidden="true"
            />
            and Passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
