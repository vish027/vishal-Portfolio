import React from "react";
import { FaHandsHelping, FaBaseballBall } from "react-icons/fa";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Youth Red Cross Volunteer",
    description:
      "Actively participated in health camps, community outreach programs, blood donation drives, and helped raise awareness on safety and hygiene.",
    icon: <FaHandsHelping className="text-3xl text-red-400" />,
  },
  {
    title: "Cricket League Participation",
    description:
      "Took part in local cricket league matches organized at the college level. Contributed actively as a team player demonstrating sportsmanship and dedication.",
    icon: <FaBaseballBall className="text-3xl text-yellow-400" />,
  },
];

export default function Extra() {
  return (
    <section id="extra" className="bg-slate-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
      <div className="text-center mb-14">
  <h2 className="text-4xl font-bold text-cyan-400 mb-2 inline-block relative after:block after:h-1 after:bg-cyan-400 after:rounded-full after:mt-1 after:w-full">
    Extracurricular Activities
  </h2>
</div>


        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-blue-900/60 border border-black rounded-3xl p-8 shadow-md backdrop-blur-md hover:shadow-cyan-500/30 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="bg-slate-800 border border-black p-4 rounded-full shadow-inner animate-float">
                  {activity.icon}
                </div>
              </div>

              {/* Content */}
              <div className="pt-10 text-center">
                <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
                <p className="text-sm text-white/90">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
