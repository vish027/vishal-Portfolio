import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const awards = [
  {
    title: "Fusion-Techathon 3.0",
    description:
      "Awarded 2nd place in a 24-hour National Level Hackathon organized by the Department of AI & ML at Alva’s Institute of Engineering and Technology.",
    icon: <FaCode className="text-3xl text-yellow-300" />,
    link: "https://drive.google.com/file/d/1zVYviBcNuZWTCJK2-ZnpijGf0y18Td1e/view?usp=drive_link",
  },
  {
    title: "Infothon 4.0",
    description:
      "Secured 4th place in a National Level Hackathon hosted by the Dept. of Information Science at Vidyavardhaka College of Engineering, Mysore.",
    icon: <FaCode className="text-3xl text-green-300" />,
    link: "https://drive.google.com/file/d/1clXWu8LNuZJH3DqekD_VHfca48e_YSoI/view?usp=drive_link",
  },
];

export default function HonorsAwards() {
  return (
    <section
      id="honors"
      className="bg-slate-800 border border-black px-6 pt-14 pb-24 text-white"
    >
      <div className="text-center mb-8">
  <div className="inline-block">
    <h2 className="text-4xl font-bold text-cyan-400 mb-2">
      Honors & Achievements
    </h2>
    <div className="h-1 bg-cyan-400 rounded-full" />
  </div>


      </div>

      <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto px-2">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative px-6 pt-16 pb-6 shadow-lg hover:shadow-cyan-400/40 transition-transform duration-500 hover:-translate-y-1"
          >
            {/* Floating Icon */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="bg-slate-900 border border-white/10 rounded-full p-4 shadow-md animate-float">
                {award.icon}
              </div>
            </div>

            {/* Square Info Card */}
            <div className="p-6 border border-black bg-blue-900 rounded-xl">
              <h3 className="text-xl font-semibold text-center mb-3">
                {award.title}
              </h3>
              <p className="text-sm text-gray-100 text-center mb-4">
                {award.description}
              </p>
              <div className="text-center">
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-sky-300 hover:text-sky-200 underline"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
