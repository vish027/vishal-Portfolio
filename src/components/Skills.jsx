import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaGithub
} from "react-icons/fa";
import {
  SiC, SiCplusplus, SiMongodb, SiMysql, SiFigma, SiCanva,
  SiWireguard, SiVercel, SiVisualstudiocode, SiNpm, SiNetlify, SiGit
} from "react-icons/si";

const categorizedSkills = {
  "Frontend": [
    { name: "HTML", icon: <FaHtml5 size={28} color="#E44D26" /> },
    { name: "CSS", icon: <FaCss3Alt size={28} color="#264DE4" /> },
    { name: "JavaScript", icon: <FaJs size={28} color="#F0DB4F" /> },
    { name: "React.js", icon: <FaReact size={28} color="#61DBFB" /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs size={28} color="#68A063" /> },
  ],
  "Programming Languages": [
    { name: "C", icon: <SiC size={28} color="#A8B9CC" /> },
    { name: "C++", icon: <SiCplusplus size={28} color="#00599C" /> },
    { name: "Java", icon: <FaJava size={28} color="#f89820" /> },
    { name: "Python", icon: <FaPython size={28} color="#3776AB" /> },
  ],
  "Databases": [
    { name: "MySQL", icon: <SiMysql size={28} color="#00758F" /> },
    { name: "MongoDB", icon: <SiMongodb size={28} color="#47A248" /> },
  ],
  "UI/UX Design": [
    { name: "Figma", icon: <SiFigma size={28} color="#F24E1E" /> },
    { name: "Canva", icon: <SiCanva size={28} color="#00C4CC" /> },
    { name: "Wireframing", icon: <SiWireguard size={28} color="#888" /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <SiGit size={28} color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub size={28} color="#ffffff" /> },
    { name: "VS Code", icon: <SiVisualstudiocode size={28} color="#007ACC" /> },
    { name: "npm", icon: <SiNpm size={28} color="#CB3837" /> },
    { name: "Netlify", icon: <SiNetlify size={28} color="#00C7B7" /> },
    { name: "Vercel", icon: <SiVercel size={28} color="#ffffff" /> },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div
              key={category}
              className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                {category}
              </h3>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3">
                    {skill.icon}
                    <span className="text-base font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
