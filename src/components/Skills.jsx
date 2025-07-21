import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaGithub, FaNodeJs, FaTools,
} from "react-icons/fa";
import {
  SiC, SiCplusplus, SiMysql, SiMongodb, SiFigma, SiCanva,
  SiWireguard, SiVercel, SiVscodium, SiNpm, SiNetlify, SiGit,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={22} color="#e34c26" />, percentage: 95 },
  { name: "CSS", icon: <FaCss3Alt size={22} color="#264de4" />, percentage: 90 },
  { name: "JavaScript", icon: <FaJs size={22} color="#f0db4f" />, percentage: 80 },
  { name: "C", icon: <SiC size={22} color="#A8B9CC" />, percentage: 75 },
  { name: "C++", icon: <SiCplusplus size={22} color="#00599C" />, percentage: 70 },
  { name: "Java", icon: <FaJava size={22} color="#f89820" />, percentage: 50 },
  { name: "Python", icon: <FaPython size={22} color="#3776AB" />, percentage: 65 },
  { name: "React", icon: <FaReact size={22} color="#61DBFB" />, percentage: 85 },
];

const tools = [
  { name: "Node.js", icon: <FaNodeJs size={22} color="#68A063" /> },
  { name: "MySQL", icon: <SiMysql size={22} color="#00758F" /> },
  { name: "MongoDB", icon: <SiMongodb size={22} color="#47A248" /> },
  { name: "Figma", icon: <SiFigma size={22} color="#F24E1E" /> },
  { name: "Canva", icon: <SiCanva size={22} color="#00C4CC" /> },
  { name: "Wireframing", icon: <SiWireguard size={22} color="#ccc" /> },
  { name: "Git", icon: <SiGit size={22} color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub size={22} color="#fff" /> },
  { name: "VS Code", icon: <SiVscodium size={22} color="#007ACC" /> },
  { name: "npm", icon: <SiNpm size={22} color="#CB3837" /> },
  { name: "Netlify", icon: <SiNetlify size={22} color="#00C7B7" /> },
  { name: "Vercel", icon: <SiVercel size={22} color="#fff" /> },
  { name: "ServiceNow", icon: <FaTools size={22} color="#00ed64" /> },
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      const height = window.innerHeight;
      if (top < height - 100) setAnimate(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-slate-900 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        <h2 className="text-4xl font-bold text-center mb-6 text-cyan-400 underline underline-offset-8">
          Technical Skills
        </h2>

        {/* Core Skills */}
        <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white/90">
            Core Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <span className="text-base font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-white/60">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
                  <div
                    className="h-2 bg-cyan-400 rounded transition-all duration-1000 ease-out"
                    style={{
                      width: animate ? `${skill.percentage}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white/90">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center gap-2">
                {tool.icon}
                <span className="text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
