import { GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    color: "bg-gradient-to-br from-sky-800 to-sky-400",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "SDM Institute of Technology, Ujire",
    subtitle: "B.E in Computer Science & Engineering",
    detail: "CGPA: 8.10",
    year: "Dec 2022 – Present",
    highlight: "Led IoT-based AgriPlay project for smart grain storage.",
  },
  {
    color: "bg-gradient-to-br from-yellow-700 to-yellow-400",
    icon: <School className="w-8 h-8 text-white" />,
    title: "Alvas Pre-University College, Moodubidri",
    subtitle: "PUC in PCMCs",
    detail: "Percentage: 78%",
    year: "Jun 2020 – Jul 2022",
    highlight: "Strong foundation in Physics, Math, and Programming.",
  },
];

export default function LegoBlockEducation() {
  return (
    <div className="w-full py-16 px-6 bg-[#0a192f] text-white">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-cyan-400 underline underline-offset-8">
        Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center max-w-6xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.25, duration: 0.6 }}
            viewport={{ once: true }}
            className={`w-72 sm:w-80 h-auto rounded-xl shadow-lg p-6 text-white ${item.color} transform hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              {item.icon}
              <span className="text-sm font-semibold">{item.year}</span>
            </div>
            <h3 className="text-lg font-bold mb-1">{item.title}</h3>
            <p className="text-sm italic mb-2">{item.subtitle}</p>
            <p className="text-sm text-white/90">{item.detail}</p>
            <p className="text-xs text-white/70 mt-3 italic">
              {item.highlight}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
