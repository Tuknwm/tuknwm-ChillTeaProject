"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactLocation() {
  return (
    <section className="relative w-full h-[100svh] bg-[#0a0a0a] overflow-hidden flex flex-col justify-between">

      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80"
        >
          <source
            src="/NgetehAsw.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-20 pt-32">

        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-8 mb-16">

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-[#949E7A]" />
              <span className="text-[#949E7A] tracking-[0.3em] text-xs uppercase font-bold">
                Visit Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tighter uppercase leading-[0.9]"
            >
              Find <br />
              <span className="font-serif italic font-light text-white/90 lowercase">your calm.</span>
            </motion.h2>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500"
            >
              <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-4">Tea House</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Jl. Raya Damai No. 12,<br />
                Kec. Tenang, Kota Sejuk<br />
                40123
              </p>
              <div className="pt-6 border-t border-white/10">
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">Opening Hours</span>
                <span className="text-white font-medium">Every Day | 08:00 - 22:00</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="text-white/70 font-light flex items-center gap-3 cursor-default">
                      <span className="text-xl">✉</span> kurokyu.project@gmail.com
                    </span>
                  </li>
                  <li>
                    <a href="https://github.com/Tuknwm/tuknwm-chilltea" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#949E7A] transition-colors font-light flex items-center gap-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                      github.com/Tuknwm
                    </a>
                  </li>
                </ul>
              </div>

              <span className="mt-8 inline-flex items-center justify-center w-full py-3 rounded-full border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-default">
                Open in Maps
              </span>
            </motion.div>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-xs uppercase tracking-widest"
        >
          <p>© {new Date().getFullYear()} ChillTea. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a>|</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
