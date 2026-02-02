import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [active, setActive] = useState(0);

  const cards = [
    {
      title: "Internships",
      value: "4",
      desc: "Completed and ongoing internships focused on frontend development.",
    },
    {
      title: "Current Status",
      value: "Intern",
      desc: "Actively working on real-world frontend projects.",
    },
    {
      title: "Projects",
      value: "10+",
      desc: "Personal and academic projects completed.",
    },
    {
      title: "Focus",
      value: "Frontend",
      desc: "UI/UX, animations, and responsive design.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 120 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        relative z-10
        px-6 md:px-16
        pt-10 pb-24
      "
    >
      <div ref={contentRef} className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sky-300 drop-shadow-[0_0_28px_rgba(125,211,252,0.9)]">
          About Me
        </h2>

        <p className="text-sky-200 text-lg md:text-xl mb-14">
          I am a passionate Frontend Developer with hands-on experience
          gained through multiple internships and real-world projects.
          I enjoy building clean, interactive, and responsive interfaces
          using modern frontend technologies.
        </p>
        <p
          className="
            text-sky-200
            text-lg md:text-xl
            leading-relaxed
            mb-12
          "
        >
          I enjoy turning complex ideas into elegant digital
          experiences with smooth animations, responsive layouts,
          and performance-focused code. I constantly explore new
          technologies to improve my workflow and deliver better
          user experiences.
        </p>

        <div
          className="
            relative max-w-4xl mx-auto
            overflow-hidden
            min-h-[260px]
            flex items-center
          "
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-full px-4 flex items-center justify-center"
              >
                <div className="bg-black/35 backdrop-blur-xl border border-sky-300/30 rounded-2xl p-8 text-center w-full">
                  <h3 className="text-4xl font-bold text-sky-300 mb-2">
                    {card.value}
                  </h3>
                  <p className="text-sky-300 font-semibold mb-2">
                    {card.title}
                  </p>
                  <p className="text-sky-200/80 text-sm">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === index
                  ? "bg-sky-300 scale-125"
                  : "bg-sky-300/40 hover:bg-sky-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
