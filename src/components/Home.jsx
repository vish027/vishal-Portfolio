import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "../assets/Profile.jpg"; // Make sure this image exists

const sentence =
  "Open to Full Stack Roles✨ MERN Developer⚛️ Hackathon Enthusiast🔥";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Home() {
  const scrollToSkills = () => {
    const target = document.getElementById("skills");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const scrollToProjects = () => {
    const target = document.getElementById("projects");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] px-6 pt-20 pb-10 bg-blue flex flex-col md:flex-row items-center justify-start md:justify-start"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-2xl text-left md:ml-12"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white font-times">
          Hi, I'm Vishal
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-400 mb-4">
          Full Stack Developer
        </h2>

        {/* Animated Sentence */}
        <motion.div
          className="text-base md:text-lg font-medium text-white mt-4 mb-6 whitespace-nowrap overflow-x-auto no-scrollbar"
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

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-2 text-gray-200">
          <a
            href="https://www.linkedin.com/in/vishal-angadi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/vish027"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* Skills & Projects Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <button
            onClick={scrollToSkills}
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg shadow transition duration-300"
          >
            My Skills
          </button>
          <button
            onClick={scrollToProjects}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow transition duration-300"
          >
            Projects
          </button>
        </div>

        {/* Highlights */}
      </motion.div>
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-80 h-80 rounded-full overflow-hidden border-4 border-teal-500 animate-glow mt-10 md:mt-0 md:ml-28"
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
