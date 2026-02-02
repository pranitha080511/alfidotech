import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative z-10
        px-6 py-10
        border-t border-sky-300/30
        bg-black/30 backdrop-blur-sm
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sky-200 text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-sky-300 font-semibold">
            Pranitha Saravanan
          </span>
          . All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-sky-300">
          <a
            href="https://www.linkedin.com/in/pranitha-saravanan-329435300/"
            target="_blank"
            className="hover:text-sky-200 transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com/pranitha080511"
            target="_blank"
            className="hover:text-sky-200 transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="mailto:pranisaravanan2005@gmail.com"
            className="hover:text-sky-200 transition"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
