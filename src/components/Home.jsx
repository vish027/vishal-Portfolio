import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "../assets/Profile.jpg";

const sentence =
  "Open to Full Stack Roles✨ MERN Developer⚛️ Hackathon Enthusiast🔥";

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: { duration: 0.4 },
  },
};

export default function Home() {
  const scrollToSkills = () => {
    const target = document.getElementById("skills");
    if (target) {
      window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const target = document.getElementById("projects");
    if (target) {
      window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
    }
  };

  return (
  <section
  id="home"
  className="w-full bg-slate-800 text-white px-6 pt-[100px] pb-20 min-h-[90vh] flex items-center justify-center"
>


      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Hi, I'm <span className="text-sky-400">Vishal Raju Angadi </span>
          </h1>
          <h2 className="text-1xl md:text-2xl text-sky-300 font-semibold mb-3">
            Full Stack Developer
          </h2>

          {/* Animated Sentence */}
          <motion.div
            className="text-base md:text-lg font-medium text-gray-300 mt-4 mb-6 inline-block"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sentence.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={scrollToSkills}
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full shadow-md transition"
            >
              My Skills
            </button>
            <button
              onClick={scrollToProjects}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full shadow-md transition"
            >
              Projects
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-6 text-xl text-gray-400">
            <a
              href="https://www.linkedin.com/in/vishal-r-angadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vish027"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-visible"
>
  {/* Static Glow Border */}
  <div className="absolute inset-0 rounded-full border-[6px] border-sky-400 blur-sm opacity-70 z-0 pointer-events-none" />

  {/* Profile Image */}
  <img
    src={profileImage}
    alt="Profile"
    className="w-full h-full object-cover rounded-full border-4 border-black shadow-xl relative z-10"
  />
</motion.div>






      </div>
    </section>
  );
}
