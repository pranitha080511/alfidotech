import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react"; // install lucide-react

export default function Navbar() {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [open]);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    {label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    {label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="
          fixed top-0 left-0 w-full
          z-20
          px-6 md:px-10 py-5
          flex items-center justify-between
          bg-black/30 backdrop-blur-md
        "
      >
        {/* Logo */}
        <div
          className="
            text-xl font-bold
            text-sky-300
            drop-shadow-[0_0_18px_rgba(125,211,252,0.8)]
          "
        >
          Pranitha Saravanan
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sky-300">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="
                  relative transition duration-300
                  hover:text-sky-200
                  after:content-['']
                  after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px]
                  after:bg-sky-300
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-sky-300"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          ref={mobileMenuRef}
          className="
            fixed inset-0 z-30
            bg-black/90 backdrop-blur-lg
            flex flex-col items-center justify-center
            text-sky-300
          "
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
          >
            <X size={32} />
          </button>

          <ul className="flex flex-col gap-10 text-2xl">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    transition duration-300
                    hover:text-sky-200
                    drop-shadow-[0_0_20px_rgba(125,211,252,0.8)]
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
