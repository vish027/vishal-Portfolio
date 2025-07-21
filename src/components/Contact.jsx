import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-sky-400">Contact</h2>

        <div className="space-y-6 text-lg text-gray-300">
          <p className="flex justify-center items-center gap-3">
            <FaEnvelope className="text-sky-400" />
            <a href="mailto:kodmadpragathi@gmail.com" className="hover:underline text-white">
              kodmadpragathi@gmail.com
            </a>
          </p>

          <p className="flex justify-center items-center gap-3">
            <FaMapMarkerAlt className="text-sky-400" />
            Karnataka, India
          </p>

          <div className="flex justify-center gap-6 mt-6 text-xl">
            <a href="https://github.com/vish027" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
