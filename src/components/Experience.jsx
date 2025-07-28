import React from "react";
import { AiOutlineLink } from "react-icons/ai"; // Certificate link icon

const experiences = [
  {
    title: "Web Development Intern",
    company: "Zidio Development",
    duration: "May 2025 – July 2025",
    location: "Bangalore, Karnataka",
    description:
      "Built an Excel analytics platform with interactive charts, file uploads, and visualizations using React and Node.js. Optimized MongoDB queries, improving performance by 30%.",
    techStack: ["React.js", "Node.js", "MongoDB", "Excel", "DataViz", "Teamwork"],

    // 🟡 Replace this URL with your actual certificate URL
    certificateUrl: "https://drive.google.com/file/d/1clGunsfHdMrm9KKJAvX2oiKsgfWw1jAO/view?usp=drivesdk",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-800 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-20 underline underline-offset-8">
          Experience
        </h2>

        <div className="flex flex-col items-center gap-16">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-5xl px-10 py-8 bg-slate-900 border-2 border-cyan-500 shadow-xl rounded-full transition duration-500 hover:shadow-cyan-500/40 animate-[float_4s_ease-in-out_infinite]"
            >
              <div className="flex flex-col lg:flex-row items-center gap-10 text-left">
                {/* Left Side */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-2xl font-semibold text-cyan-300">{exp.title}</h3>
                  <p className="text-lg font-medium text-white">{exp.company}</p>
                  <p className="text-sm italic text-white/70">{exp.duration}</p>
                  <p className="text-sm text-cyan-200">{exp.location}</p>

                  {/* Certificate Icon and Link */}
                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 mt-2 text-sm underline"
                    >
                      <AiOutlineLink className="text-xl" />
                      View Certificate
                    </a>
                  )}
                </div>

                {/* Right Side */}
                <div className="flex-1 space-y-4">
                  <p className="text-base text-white/90 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm border border-cyan-400 text-cyan-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
