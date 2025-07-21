import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Zidio Development",
    duration: "May 2025 – July 2025",
    location: "Bangalore, Karnataka",
    description:
      "Built an Excel analytics platform with interactive 2D/3D charts, file upload, and data visualizations using React and Node.js. Optimized MongoDB queries and improved overall performance by 30%.",
    techStack: ["React.js", "Node.js", "MongoDB", "Excel", "DataViz", "Teamwork"],
  },
  {
    title: "Web Development Intern",
    company: "Aitch Nu Global Technologies Pvt.Ltd",
    duration: "Dec 2024 – Jan 2025",
    location: "Bangalore, Karnataka",
    description:
      "Developed responsive web applications using HTML, CSS, JS, and Node.js. Improved UI performance by 30% and designed modular dashboard components with optimized MySQL queries.",
    techStack: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
];

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0f172a] px-6 py-16 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center border-b-2 border-cyan-400 pb-4 mb-12">
          Experience
        </h2>

        <div className="relative border-l-4 border-cyan-500 ml-4 pl-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="mb-12 relative"
              custom={idx % 2 === 0 ? "left" : "right"}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="absolute -left-8 top-2 w-5 h-5 bg-cyan-400 rounded-full shadow-lg animate-pulse" />

              <div className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-cyan-400/40 transition-shadow duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm bg-cyan-700 text-white px-2 py-1 rounded-md">
                    {exp.duration}
                  </span>
                </div>
                <div className="text-cyan-300 font-medium mb-1">
                  {exp.company}
                </div>
                <div className="text-sm text-cyan-200 mb-4">{exp.location}</div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs border border-cyan-500 text-cyan-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
