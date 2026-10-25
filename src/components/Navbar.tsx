"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 transition-all duration-300 bg-transparent py-4" style={{ zIndex: 9999 }}
    >
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          <a href="#" className="flex items-center space-x-4 group">
            <div className="relative w-10 h-10 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110">
              <img
                src="/logoflat.png"
                alt="ChillTea Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://placeholder.com/100";
                }}
              />
            </div>
            <span className="text-white font-bold text-xl md:text-2xl tracking-tighter group-hover:text-white/90 transition-colors uppercase">
              ChillTea
            </span>
          </a>


        </div>
      </div>
    </motion.nav>
  );
}