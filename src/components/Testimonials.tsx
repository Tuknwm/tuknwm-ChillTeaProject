import React from 'react';
import { motion } from 'framer-motion';

const REVIEWS = [
  "Calm in every sip.",
  "An aroma that restores focus.",
  "My essential evening ritual.",
  "The best tea quality I have ever tried.",
  "A mind-soother after a long day of work.",
  "Incredibly premium packaging.",
  "A truly authentic and luxurious taste."
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-32 bg-[#0a0a0a] overflow-hidden border-t border-white/5">

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-8 h-[1px] bg-[#949E7A]" />
          <span className="text-[#949E7A] tracking-[0.3em] text-xs uppercase font-bold">
            What They Say
          </span>
          <div className="w-8 h-[1px] bg-[#949E7A]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-snug tracking-tight mb-10"
        >
          "Since discovering ChillTea, my evenings are no longer about exhaustion, but about <span className="font-serif italic text-[#949E7A]">honoring myself</span>. It truly calms the soul."
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <p className="text-white font-bold tracking-widest uppercase text-sm">Diana S.</p>
          <p className="text-white/40 text-xs tracking-widest uppercase mt-1">Matcha Enthusiast, Jakarta</p>
        </motion.div>
      </div>

      <div className="relative w-full flex flex-col gap-6 opacity-60 hover:opacity-100 transition-opacity duration-700">

        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <style dangerouslySetInnerHTML={{
          __html: `
           @keyframes marquee-left {
             0% { transform: translateX(0); }
             100% { transform: translateX(-50%); }
           }
           @keyframes marquee-right {
             0% { transform: translateX(-50%); }
             100% { transform: translateX(0); }
           }
           .animate-marquee-left {
             display: flex;
             width: max-content;
             animation: marquee-left 40s linear infinite;
           }
           .animate-marquee-right {
             display: flex;
             width: max-content;
             animation: marquee-right 40s linear infinite;
           }
           .animate-marquee-left:hover, .animate-marquee-right:hover {
             animation-play-state: paused;
           }
         `}} />

        <div className="animate-marquee-left gap-6">
          {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
            <div key={`row1-${i}`} className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm cursor-default">
              <span className="text-[#949E7A] text-xl">❝</span>
              <span className="text-white/80 font-light whitespace-nowrap">{review}</span>
            </div>
          ))}
        </div>

        <div className="animate-marquee-right gap-6 ml-[-200px]">
          {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].reverse().map((review, i) => (
            <div key={`row2-${i}`} className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm cursor-default">
              <span className="text-[#949E7A] text-xl">❝</span>
              <span className="text-white/80 font-light whitespace-nowrap">{review}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}