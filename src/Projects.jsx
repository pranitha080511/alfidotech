import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const projects = [
    {
      title: "PatientX",
      description:
        "A research-focused platform where patients can securely share and sell their medical data.Helps researchers access verified health data while maintaining user transparency and control.",
      tech: ["React", "Tailwind CSS", "GSAP"],
      live: "https://patient-x.vercel.app/",
      github: "https://github.com/DharunNagavel/PatientX",
    },
    {
      title: "TribalEarth 360",
      description:
        "A digital platform for government officials to register patta for tribal communities online.Simplifies land record management and improves accessibility for tribal welfare services.",
      tech: ["React", "Tailwind CSS", "GSAP"],
      live: "https://tribal-earth-360.vercel.app/",
      github: "https://github.com/DharunNagavel/Tribal-Earth-360",
    },
    {
      title: "Kreativ-26",
      description:
        "Designed a modern landing page for the Kreativ-26 college symposium.Highlights events, schedules, and registrations with an engaging and responsive UI.",
      tech: ["React", "Tailwind CSS", "GSAP"],
      live: "https://kreativ-26.vercel.app/",
      github: "https://github.com/pranitha080511/Kreativ-26",
    },
    {
      title: "DNP Glow",
      description:
        "An e-commerce website for purchasing beauty and personal care products from multiple brands.Provides a smooth shopping experience with clean design and easy navigation.",
      tech: ["React", "Tailwind CSS"],
      live: "https://react-project-sage-rho.vercel.app/",
      github: "https://github.com/pranitha080511/DNP-glow",
    },
    {
      title: "DNP OnlineLearning",
      description:
        "An online learning platform focused on skill development and job placement preparation.Offers structured learning paths, practice resources, and career-oriented content.",
      tech: ["Next", "Tailwind CSS", "GSAP"],
      live: "https://my-next-app-flax-iota.vercel.app/",
      github: "https://github.com/pranitha080511/my-next-app",
    },
    
    {
      title: "Yummy's Kitchen",
      description:
        "A food website showcasing menu items and details of Yummy’s Kitchen.Designed to attract customers with a clean layout and responsive design.",
      tech: ["HTML", "CSS"],
      live: "https://pranitha080511.github.io/Yummy-s-kitchen/",
      github: "https://github.com/pranitha080511/Yummy-s-kitchen",
    },
    {
      title: "MyChat APP",
      description:
        "Built a real-time messaging application using the CometChat SDK.Enables secure, instant communication through a simple and user-friendly interface.",
      tech: ["CometChat SDK"],
      live: "https://cometchat-app-react-iota.vercel.app/",
      github: "https://github.com/pranitha080511/cometchat-app-react",
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
      id="projects"
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
        Projects
      </h2>

      {/* Project Cards */}
      <div
        ref={cardsRef}
        className="
          grid grid-cols-1 md:grid-cols-2
          gap-8
          max-w-5xl w-full
        "
      >
        {projects.map((project, index) => (
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
            <h3 className="text-xl font-semibold mb-3 text-sky-300">
              {project.title}
            </h3>

            <p className="text-sky-200 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-xs px-3 py-1
                    border border-sky-300/40
                    rounded-full
                    text-sky-200
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 text-sm">
              <a
                href={project.live}
                target="_blank"
                className="text-sky-300 hover:underline"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-sky-300 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
