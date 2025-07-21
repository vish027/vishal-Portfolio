import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    name: "Excel Analytics Platform",
    duration: "May 2025 – June 2025",
    description:
      "Built a responsive Excel analytics tool during internship at Zidio. Features include Excel file upload, dynamic 2D/3D chart rendering based on user-selected axes, and intuitive history tracking interface.",
    tech: ["React.js", "Node.js", "ExcelJS", "MongoDB", "Chart.js", "CSS"],
    github: "",
  },
  {
    name: "Itinerary Planner",
    duration: "Oct 2024 – Dec 2024",
    description:
      "Travel planning app that helps users organize destinations, schedules, and budgets. Offers an intuitive UI for efficient trip customization.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI", "Bootstrap"],
    github: "",
  },
  {
    name: "Skill-Flow",
    duration: "Nov 2024",
    description:
      "A job-matching platform for gig workers that streamlines hiring by connecting skills to gigs. Designed to improve employment access and visibility.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Projects
          <div className="h-1 w-24 bg-sky-400 mx-auto mt-2 rounded" />
        </h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-sky-400">{project.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{project.duration}</p>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-sky-600/20 text-sky-300 px-3 py-1 rounded-full border border-sky-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-end justify-end md:justify-center md:w-40">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
