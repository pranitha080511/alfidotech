import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaProjectDiagram } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative z-10 px-6 pt-16 pb-24"
    >
      {/* Heading */}
      <div className="flex justify-center mb-10">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-sky-300 drop-shadow-[0_0_28px_rgba(125,211,252,0.9)]">
        Achievements
        </h2>
      </div>

      {/* Achievements */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Achievement 1 */}
        <div className="
          border border-sky-300/40
          rounded-xl p-6
          bg-black/30 backdrop-blur-sm
        ">
          <h3 className="text-sky-300 font-semibold mb-2">
            Hackathon – 2nd Prize
          </h3>

          <div className="flex items-center gap-4 text-sky-200/70 text-sm mb-3">
            <span className="flex items-center gap-1">
              <SlCalender /> October 2025
            </span>
            <span className="flex items-center gap-1">
              <FaLocationDot />SRM Madurai
            </span>
          </div>

          <p className="text-sky-200 text-sm leading-relaxed">
            Won 2nd Prize in an AI & Blockchain hackathon for the project
            <b> PatientX</b>, focusing on secure and efficient healthcare
            data management.
          </p>
        </div>

        {/* Achievement 2 */}
        <div className="
          border border-sky-300/40
          rounded-xl p-6
          bg-black/30 backdrop-blur-sm
        ">
          <h3 className="text-sky-300 font-semibold mb-2">
            Project Expo – 3rd Prize
          </h3>

          <div className="flex items-center gap-4 text-sky-200/70 text-sm mb-3">
            <span className="flex items-center gap-1">
              <SlCalender /> September 2025
            </span>
            <span className="flex items-center gap-1">
              <FaLocationDot />Anna University Madurai
            </span>
          </div>

          <p className="text-sky-200 text-sm leading-relaxed">
            Secured 3rd Prize for <b>TribalEarth360</b>, a project focused on
            forest rights awareness and sustainable land management.
          </p>
        </div>

        {/* Achievement 3 */}
        <div className="
          border border-sky-300/40
          rounded-xl p-6
          bg-black/30 backdrop-blur-sm
        ">
          <h3 className="text-sky-300 font-semibold mb-2">
            ETHIndia Hackathon – 1st Prize
          </h3>

          <div className="flex items-center gap-4 text-sky-200/70 text-sm mb-3">
            <span className="flex items-center gap-1">
              <SlCalender /> December 2025
            </span>
            <span className="flex items-center gap-1">
              <FaLocationDot /> IIIT BhopalVirtual
            </span>
          </div>

          <p className="text-sky-200 text-sm leading-relaxed">
            Secured 1st Prize in the ETHIndia track, winning a $100 cash
            award for innovation and strong project implementation.
          </p>
        </div>
      </div>
    </section>
  );
}
