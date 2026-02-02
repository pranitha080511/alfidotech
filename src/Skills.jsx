import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  const skills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "MySQL",
    "Git",
    "GitHub",
    "DBMS",
    "OOPS",
    "Canva",
  ];

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="
        relative z-10
        px-6 md:px-16
        pt-10 pb-28
        flex flex-col items-center
      "
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-sky-300 drop-shadow-[0_0_28px_rgba(125,211,252,0.9)]">
        Skills
      </h2>

      {/* Skills List */}
      <div
        ref={skillsRef}
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
          gap-6
          max-w-4xl
        "
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              px-6 py-3
              text-center
              text-sky-200
              border border-sky-300/50
              rounded-lg
              bg-black/30 backdrop-blur-sm
              transition
              hover:text-sky-300
              hover:border-sky-300
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
