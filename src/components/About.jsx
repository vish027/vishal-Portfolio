import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-slate-800 px-6 pt-6 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black/40 px-10 md:px-20 py-12 rounded-2xl shadow-md max-w-5xl mx-auto border border-white/10"
      >
        <h2 className="text-3xl font-semibold border-b-2 border-sky-400 pb-2 mb-6 text-white text-center">
          About Me
        </h2>
        <p className="leading-relaxed text-white text-base text-center">
          I am a <strong>Full Stack Developer</strong> skilled in frontend technologies like <strong>HTML, CSS, JavaScript, React.js</strong> and
          backend tools such as <strong>Node.js</strong>. I also work with databases like <strong>MySQL</strong> and <strong>MongoDB</strong>. I enjoy creating fast, scalable,
          and user-friendly web applications that solve real-world problems.
          <br /><br />
          During my engineering studies at SDM Institute of Technology, I led impactful projects like <em>AgriPlay</em>—a smart grain storage system using IoT and web technologies—
          and <em>SKILL-FLOW</em>, a job-matching platform for gig workers. These projects helped me blend innovation with usability.
          <br /><br />
          I recently interned at <strong>Zidio Development</strong>, where I built a responsive Excel analytics interface, working on dynamic charts, data upload parsing, and seamless user interactions.
          <br /><br />
          I’m a hackathon enthusiast, having secured top ranks at national-level events like <em>Fusion Techathon</em> and <em>Infothon</em>. My approach combines technical precision with creative problem-solving.
          I'm always excited to learn, collaborate, and build meaningful tech that drives impact.
        </p>
      </motion.div>
    </section>
  );
}
