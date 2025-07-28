import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0f172a] px-6 pt-20 pb-24 text-white relative overflow-hidden"
    >
      {/* Decorative gradient blur background shape */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-500 opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-2xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md shadow-xl rounded-3xl px-10 md:px-16 py-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 border-b-2 border-sky-400 pb-2">
          About Me
        </h2>

        <p className="text-white/90 text-base md:text-lg leading-relaxed text-center">
          I am a skilled Full Stack Developer with experience in frontend (HTML, CSS, JavaScript, React.js)
          and backend (Node.js), along with MySQL and MongoDB. I enjoy building scalable, user-friendly
          web applications and constantly seek opportunities to learn and collaborate on impactful tech solutions.
          <br /><br />
          Beyond coding, I bring a creative mindset, strong collaboration skills, and a continuous hunger for learning.
          I thrive on contributing to meaningful projects that blend technology and creativity.
        </p>
      </motion.div>
    </section>
  );
}
