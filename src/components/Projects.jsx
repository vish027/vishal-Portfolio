import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import tripImg from "../assets/trip.png";
import excelImg from "../assets/excel.png";
import skillflowImg from "../assets/skillflow.png";

const projects = [
  {
    name: "Excel Analytics Platform",
    duration: "May 2025 – June 2025",
    description:
      "Built a responsive Excel analytics tool during internship at Zidio. Features include Excel file upload, dynamic 2D/3D chart rendering based on user-selected axes, and intuitive history tracking interface.",
    tech: ["React.js", "Node.js", "ExcelJS", "MongoDB", "Chart.js", "CSS"],
    github: "https://github.com/vish027/Zidio-Intern",
    image: excelImg,
  },
  {
    name: "Itinerary Planner",
    duration: "Oct 2024 – Dec 2024",
    description:
      "Travel planning app that helps users organize destinations, schedules, and budgets. Offers an intuitive UI for efficient trip customization.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI", "Bootstrap"],
    github: "https://github.com/vish027/Iternaryplanner",
    image: tripImg,
  },
  {
    name: "Skill-Flow",
    duration: "Nov 2024",
    description:
      "A job-matching platform for gig workers that streamlines hiring by connecting skills to gigs. Designed to improve employment access and visibility.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/vish027/SKILL-FLOW",
    image: skillflowImg,
  },
];

const certifications = [
  {
    title: "React Workshop",
    source: "Codlab System",
    link: "https://drive.google.com/file/d/1jRjRMQn9r-xyWLGAN9saGE573nZMS0OD/view?usp=drive_link",
  },
  {
    title: "TCS iON Career Edge – Young Professional Course",
    source: "TCS iON",
    link: "https://drive.google.com/file/d/1TCgFkildJRoyQAQnbPIviwhi9vA87DHd/view?usp=drive_link",
  },
  {
    title: "The Complete Web Development Bootcamp",
    source: "Udemy",
    link: "https://drive.google.com/file/d/1bTQyqEo39_W4tDkGyuTkmutRLcAI3gzi/view?usp=drive_link",
  },
  {
    title: "Database and SQL Course",
    source: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1cn3yFUSMETcY78MNGNN3PcSL0wGwCajn/view?usp=drive_link",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Projects Heading */}
        <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">
          Projects
          <div className="h-1 w-24 bg-cyan-400 mx-auto mt-2 rounded-full" />
        </h2>

        {/* Projects List */}
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
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full md:w-60 h-40 object-contain rounded-lg border border-gray-600 bg-slate-700"
                />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-sky-400">{project.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{project.duration}</p>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-sky-600/20 text-sky-300 px-3 py-1 rounded-full border border-sky-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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

        {/* Certifications Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">
            Certifications
            <div className="h-1 w-28 bg-cyan-400 mx-auto mt-2 rounded-full" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/90 border border-black/50 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-white/80 mb-2">{cert.source}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-400 hover:underline"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
