import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section
      id="home"
      className="
        relative z-10
        min-h-screen
        flex items-center
        px-6 md:px-16
      "
    >
      {/* Contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

      <div
        className="
          relative w-full max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-12 items-stretch
        "
      >
        {/* LEFT SIDE — CONTENT */}
        <div ref={leftRef} className="flex flex-col justify-center">
          <h1
            className="
              text-4xl md:text-5xl font-bold mb-6
              text-sky-300
              drop-shadow-[0_0_28px_rgba(125,211,252,0.9)]
            "
          >
            Hi, I’m Pranitha Saravanan
          </h1>

          <p
            className="
              text-sky-200
              text-lg md:text-xl mb-10
              max-w-xl
              drop-shadow-[0_0_14px_rgba(125,211,252,0.45)]
            "
          >
            Frontend Developer passionate about building responsive,
            interactive, and animated web applications using React, Next
            Tailwind CSS, and GSAP.
          </p>

          <div className="flex gap-5">
            <a
              href="#contact"
              className="
                px-7 py-3 rounded-full
                border border-sky-300
                text-sky-300
                hover:bg-sky-300 hover:text-black
                transition-all duration-300
              "
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="
                px-7 py-3 rounded-full
                border border-sky-300
                text-sky-300
                hover:bg-sky-300 hover:text-black
                transition-all duration-300
              "
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — FULL PROFILE CARD */}
        <div
          ref={rightRef}
          className="
            relative
            flex items-center justify-center
          "
        >
          <div
            className="
              group
              w-full h-full
              bg-black/35 backdrop-blur-xl
              border border-sky-300/30
              rounded-3xl
              p-12
              flex flex-col items-center justify-center
              transition-all duration-500
              hover:scale-[1.02]
              hover:border-sky-300
              hover:shadow-[0_0_60px_rgba(125,211,252,0.35)]
            "
          >
            {/* Profile Image */}
            <img
              src="/mypht.jpg"
              alt="Profile"
              className="
                w-44 h-44 mb-6
                rounded-full object-cover
                border-2 border-sky-300
                transition-all duration-500
                group-hover:scale-110
                group-hover:shadow-[0_0_35px_rgba(125,211,252,0.9)]
              "
            />

            

            <p className="text-sky-200 mb-6">
              Frontend Developer
            </p>

            <div className="flex gap-8 text-sky-300 text-lg">
              <a
                href="https://github.com/pranitha080511"
                target="_blank"
                className="hover:text-sky-200 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pranitha-saravanan-329435300/"
                target="_blank"
                className="hover:text-sky-200 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
