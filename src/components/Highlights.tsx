"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HIGHLIGHTS = [
  {
    id: "01",
    title: "Curated Single-Origin",
    desc: "Our tea leaves are hand-picked from one specific highland estate. This ensures consistency, strong flavor character, and a clear origin story in every cup."
  },
  {
    id: "02",
    title: "100% Natural Extraction",
    desc: "We refuse any form of compromise. No artificial flavors, no synthetic dyes, no preservatives. The color and aroma you enjoy come purely from nature."
  },
  {
    id: "03",
    title: "Eco-Conscious Packaging",
    desc: "Your peace of mind shouldn't cost the earth. Our tea bags are woven from plant fibers that are fully biodegradable with zero microplastics."
  }
];

export default function Highlights() {
  return (
    <section className="w-full bg-[#0a0a0a] pt-24 pb-40 px-6 md:px-12 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto w-full">

        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6 justify-center md:justify-start"
            >
              <div className="w-12 h-[1px] bg-[#949E7A]" />
              <span className="text-[#949E7A] tracking-[0.3em] text-xs uppercase font-bold">
                Our Standard
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl text-white font-bold tracking-tight"
            >
              PURITY <span className="font-serif italic font-light">Without Compromise.</span>
            </motion.h2>
          </div>

        </div>

        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden relative mb-24 bg-[#1a1a1a]">
          <img
            src="/OurStandard.jpg"
            alt="Our Standard"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1600x800/1a1a1a/ffffff?text=Our+Standard";
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-6 right-6 md:bottom-10 md:right-10 max-w-xs text-white text-sm md:text-base font-bold text-right z-10"
          >
            The Quality Of A Tea Is Defined By What Is Left Out Of It. We Keep Everything Simple And Real.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col border-t border-white/10 pt-8 relative"
            >
              <span className="text-6xl md:text-7xl font-serif font-light text-white mb-6">
                {item.id}
              </span>

              <h3 className="text-2xl text-white font-bold tracking-tight mb-4">
                {item.title}
              </h3>

              <p className="text-white/60 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
