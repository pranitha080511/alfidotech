import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const internships = [
    {
      role: "Web Developer Intern",
      duration: "20 Days",
      company: "Kevell Global Solutions[Madurai]",
      status: "Completed",
      description:
        "Worked on basic UI components, responsive layouts, and frontend fundamentals using HTML, CSS, and JavaScript.",
    },
    {
      role: "Web Developer Intern",
      duration: "1 Month",
      company: "Cognifyz Technologies[Virtual]",
      status: "Completed",
      description:
        "Built reusable React components and improved UI consistency using Tailwind CSS.",
    },
    {
      role: "ReactJS Developer Intern",
      duration: "3 Months",
      company: "Alfido Tech[Virtual]",
      status: "Ongoing",
      description:
        "Currently working on real-world frontend projects using React, animations with GSAP, and modern UI practices.",
    },
    {
      role: "AI/ML Developer Intern",
      duration: "1 Month",
      company: "ShadowFox[Virtual]",
      status: "Upcoming",
      description:
        "Going to Work on learning fundamental AI and Machine Learning concepts such as supervised learning, data analysis, and basic model evaluation.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.9,
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
      id="experience"
      ref={sectionRef}
      className="
        relative z-10
        px-6 md:px-16
        pt-10 pb-28
        flex flex-col items-center
      "
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-sky-300 drop-shadow-[0_0_28px_rgba(125,211,252,0.9)]">
        Experience
      </h2>
      <div
        ref={cardsRef}
        className="
          flex flex-col gap-6
          max-w-4xl w-full
        "
      >
        {internships.map((item, index) => (
          <div
            key={index}
            className="
              border border-sky-300/40
              rounded-xl
              p-6
              bg-black/30 backdrop-blur-sm
              transition
              hover:border-sky-300
            "
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <h3 className="text-lg font-semibold text-sky-300">
                {item.role}
              </h3>

              <span
                className={`
                  text-xs px-3 py-1 rounded-full w-fit
                  ${
                    item.status === "Completed"
                      ? "border border-green-400 text-green-400"
                      : item.status === "Ongoing"
                      ? "border border-yellow-400 text-yellow-400"
                      : "border border-blue-400 text-blue-400"
                  }
                `}
              >
                {item.status}
              </span>
            </div>

            <p className="text-sky-200 text-sm mb-2">
              Company: {item.company}
            </p>

            <p className="text-sky-200 text-sm mb-2">
              Duration: {item.duration}
            </p>

            <p className="text-sky-200/90 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
