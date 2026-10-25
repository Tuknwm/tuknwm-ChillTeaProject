"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function AboutUs() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-[#949E7A] py-32 px-6 md:px-12 overflow-hidden flex items-center">

      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none opacity-5">
        <h2 className="text-[20vw] font-bold text-white tracking-tighter whitespace-nowrap">
          THE SOUL
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-5/12 self-stretch"
          >
            <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />

              <img
                src="/logoabu.jpg"
                alt="Profile ChillTea"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/800x1000/1a1a1a/ffffff?text=Profile+Image";
                }}
              />

            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            className="w-full lg:w-7/12 flex flex-col justify-center"
          >
            <motion.div variants={textVariants} className="mb-6">
              <span className="text-[#949E7A] tracking-[0.3em] text-xs uppercase font-bold">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] tracking-tight mb-8"
            >
              Not just a drink,<br className="hidden md:block" />
              <span className="italic font-serif font-light text-white/80">a state of mind.</span>
            </motion.h2>

            <motion.div variants={textVariants} className="space-y-6 text-white/60 text-lg leading-relaxed max-w-2xl font-light">
              <p>
                ChillTea started with one question: <strong className="text-white font-medium">why does good tea feel so rare?</strong> We set out to change that by crafting drinks that are honest, clean, and genuinely refreshing without the noise of additives or artificial shortcuts.
              </p>
              <p>
                Every blend is built around real ingredients sourced from highland gardens where quality is non-negotiable. We don't dress things up. We strip them down until only the best remains.
              </p>
              <p>
                Whether it's your morning ritual or your midday escape, ChillTea is made for the moments when you need to slow down and actually taste something real.
              </p>
            </motion.div>

            <motion.div variants={textVariants} className="mt-12 pt-12 border-t border-white/10">
              <p className="text-xl md:text-2xl font-serif italic text-white/90">
                "We didn't build ChillTea to compete. We built it to remind people what tea is supposed to feel like."
              </p>
              <p className="mt-4 text-[#949E7A] text-sm tracking-widest uppercase font-bold">
                — Founder, ChillTea
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
