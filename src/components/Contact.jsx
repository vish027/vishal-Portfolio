import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-slate-900 to-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Contact Form */}
        <div className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 p-8 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-indigo-400 mb-6">Send a Message</h2>
          <p className="text-white/70 mb-6">
            Have a project idea, collaboration request, or just want to connect? Drop me a message below — I’ll get back to you shortly!
          </p>
          <form
            action="https://formspree.io/f/mwpqvzbw"
            method="POST"
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 bg-slate-700/90 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-3 bg-slate-700/90 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 bg-slate-700/90 border border-slate-600 rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              📬 Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="pl-2">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Get in Touch</h2>
          <ul className="space-y-5 text-white/80 mb-10">
            <li className="flex items-center gap-4 text-lg">
              <Mail className="text-cyan-400" />vishalangadi2004@gmail.com
            </li>
            <li className="flex items-center gap-4 text-lg">
              <MapPin className="text-cyan-400" /> Karnataka, India
            </li>
          </ul>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Let’s Build Together</h3>
            <p className="text-white/70 leading-relaxed">
              Whether it’s a freelance gig, a potential job role, or just sharing ideas — I’m always open to meaningful conversations that spark innovation!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
