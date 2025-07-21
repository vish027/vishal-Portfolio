import { GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    icon: GraduationCap,
    title: "SDM Institute of Technology, Ujire",
    subtitle: "B.E in Computer Science & Engineering",
    detail: "CGPA: 8.10",
    year: "Dec 2022 – Present",
    highlight: "Led IoT-based AgriPlay project for smart grain storage.",
    stripe: "bg-sky-500",
  },
  {
    icon: School,
    title: "Alvas Pre-University College, Moodubidri",
    subtitle: "PUC in PCMCs",
    detail: "Percentage: 78%",
    year: "Jun 2020 – Jul 2022",
    highlight: "Strong foundation in Physics, Math, and Programming.",
    stripe: "bg-yellow-400",
  },
];

export default function EducationSection() {
  return (
    <section className="w-full bg-slate-800 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14 underline underline-offset-8">
        Education
      </h2>

      <div className="space-y-10 max-w-3xl mx-auto">
        {educationData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 8px 24px rgba(0, 255, 255, 0.1)",
              }}
              className="relative flex items-start gap-6 bg-[#0a192f] rounded-xl p-6 border border-black shadow-md transition-transform"

            >
              {/* Colored stripe */}
              <div className={`w-2 h-full rounded ${item.stripe}`} />

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-sm text-white/60">{item.year}</span>
                </div>
                <p className="text-sm italic text-white/80 mb-1">{item.subtitle}</p>
                <p className="text-sm text-white/90">{item.detail}</p>
                <p className="text-xs mt-2 text-white/70">{item.highlight}</p>
              </div>

              {/* Icon badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 * index }}
                className="mt-1"
                whileHover={{ scale: 1.15 }}
              >
                <Icon className="text-cyan-300 w-6 h-6 animate-pulse" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
