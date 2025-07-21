import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const awards = [
  {
    title: "Fusion-Techathon 3.0",
    description:
      "Awarded 2nd place in a 24-hour National Level Hackathon organized by the Department of AI & ML at Alva’s Institute of Engineering and Technology.",
    icon: <FaCode className="text-3xl text-yellow-300" />,
    link: "https://drive.google.com/file/d/10jLX0uCWm1f62VDXa_5FviBuKwEzWMZ5/view?usp=sharing",
  },
  {
    title: "Infothon 4.0",
    description:
      "Secured 4th place in a National Level Hackathon hosted by the Dept. of Information Science at Vidyavardhaka College of Engineering, Mysore.",
    icon: <FaCode className="text-3xl text-green-300" />,
    link: "https://drive.google.com/file/d/1rRF-bqSeJXtrx_nS8KLKcxzPNuKELggo/view?usp=sharing",
  },
];

export default function HonorsAwards() {
  return (
    <section id="honors" className="bg-slate-900/90 px-6 pt-10 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white inline-block relative">
          Honors & Achievements
          <span className="block h-1 bg-blue-500 rounded mt-2 w-3/4 mx-auto"></span>
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-blue-500/30 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-slate-700 p-3 rounded-full shadow-inner">
                {award.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{award.title}</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">{award.description}</p>
            <a
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-sky-400 hover:text-sky-300 underline"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
