"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const SIGNATURE_MENU = [
  {
    id: 1,
    name: "Original Ice Tea",
    image: "/teamenu/tea.jpeg",
    price: "Rp8.000",
    desc: "A classic black tea brew, simply perfect.",
    bgColor: "bg-[#949E7A]",
    bentoSize: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    name: "Sweet Ice Tea",
    image: "/teamenu/teasug.jpeg",
    price: "Rp9.000",
    desc: "Just the right sweetness, never too much.",
    bgColor: "bg-[#7A8B9E]",
    bentoSize: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    name: "Honey Ice Tea",
    image: "/teamenu/honey.jpeg",
    price: "Rp12.000",
    desc: "The goodness of pure honey.",
    bgColor: "bg-[#9E8B7A]",
    bentoSize: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    name: "Lemon Ice Tea",
    image: "/teamenu/lemon.jpeg",
    price: "Rp12.000",
    desc: "Refreshing and uplifting.",
    bgColor: "bg-[#9E947A]",
    bentoSize: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    name: "Green Tea Ice",
    image: "/teamenu/greentea.jpeg",
    price: "Rp11.000",
    desc: "Pure green tea that truly relaxes.",
    bgColor: "bg-[#7A9E8B]",
    bentoSize: "md:col-span-1 md:row-span-1",
  }
];

const EXTENDED_MENU = [
  { id: 6, name: "Peach Ice Tea", image: "/teamenu/peach.jpeg", price: "Rp13.000", category: "Fruity" },
  { id: 7, name: "Lychee Ice Tea", image: "/teamenu/leci.jpeg", price: "Rp13.000", category: "Fruity" },
  { id: 8, name: "Mango Ice Tea", image: "/teamenu/manga.jpeg", price: "Rp13.000", category: "Fruity" },
  { id: 9, name: "Strawberry Ice Tea", image: "/teamenu/stoberi.jpeg", price: "Rp13.000", category: "Fruity" },
  { id: 10, name: "Passion Fruit Ice Tea", image: "/teamenu/passion.jpeg", price: "Rp14.000", category: "Fruity" },
  { id: 11, name: "Mint Ice Tea", image: "/teamenu/mints.jpeg", price: "Rp12.000", category: "Herbal" },
  { id: 12, name: "Jasmine Ice Tea", image: "/teamenu/jasmani.jpeg", price: "Rp11.000", category: "Herbal" },
  { id: 13, name: "Apple Ice Tea", image: "/teamenu/apple.jpeg", price: "Rp12.000", category: "Fruity" },
  { id: 14, name: "Orange Ice Tea", image: "/teamenu/jeruk.jpeg", price: "Rp12.000", category: "Fruity" },
  { id: 15, name: "Grape Ice Tea", image: "/teamenu/grape.jpeg", price: "Rp13.000", category: "Fruity" },
  { id: 16, name: "Milk Tea Classic", image: "/teamenu/milk.jpeg", price: "Rp15.000", category: "Milk/Matcha" },
  { id: 17, name: "Brown Sugar Milk Tea", image: "/teamenu/brown.jpeg", price: "Rp17.000", category: "Milk/Matcha" },
  { id: 18, name: "Iced Matcha Latte", image: "/teamenu/icedmaycha.jpeg", price: "Rp18.000", category: "Milk/Matcha" },
  { id: 19, name: "Matcha Lemon Fusion", image: "/teamenu/malem.jpeg", price: "Rp17.000", category: "Milk/Matcha" },
  { id: 20, name: "Matcha Milk Tea", image: "/teamenu/mamil.jpeg", price: "Rp18.000", category: "Milk/Matcha" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function TeaMenu() {
  return (
    <section id="products" className="relative w-full min-h-screen bg-[#0a0a0a] py-24 px-6 md:px-12 font-sans rounded-b-[50px]">


      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#949E7A] tracking-[0.3em] text-xs uppercase font-bold"
          >
            Explore the Flavors
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-white font-bold mt-4 tracking-tight uppercase"
          >
            CHILLTEA MENU
          </motion.h2>
        </div>

        <div className="mb-8">
          <h3 className="text-white/50 text-sm tracking-widest uppercase mb-6 pl-2 font-medium">Signature Collection</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
          >
            {SIGNATURE_MENU.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative group rounded-[8px] p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:scale-[0.98] cursor-default ${item.bentoSize}`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onError={(e) => {
                  (e.target as HTMLDivElement).style.backgroundImage = `url(https://placehold.co/400x400/0a0a0a/ffffff?text=${item.name})`;
                }}
              >
                {item.price && (
                  <span className="absolute top-4 right-4 z-10 text-white font-bold text-sm tracking-wide drop-shadow-md">
                    {item.price}
                  </span>
                )}

                <div className="relative z-10 flex flex-col items-start mt-auto -mb-6 -ml-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none mb-2 drop-shadow-lg">
                    {item.name}
                  </h4>
                  {item.bentoSize.includes("col-span-2") && (
                    <p className="text-white/90 text-sm max-w-xs drop-shadow-md">{item.desc}</p>
                  )}
                </div>

                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="text-white/50 text-sm tracking-widest uppercase mb-6 pl-2 font-medium">The Classics & Fusions</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {EXTENDED_MENU.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group flex flex-col p-3 rounded-[8px] bg-white/5 hover:bg-white/10 transition-colors duration-300 cursor-default"
              >
                <div className="relative w-full aspect-[4/5] rounded-[8px] overflow-hidden mb-4 bg-[#1a1a1a]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x500/1a1a1a/ffffff?text=Tea+Variant";
                    }}
                  />
                </div>

                <div className="flex flex-col flex-grow justify-between px-1 pb-1">
                  <div>
                    <h5 className="text-white font-medium text-base leading-tight mb-1">{item.name}</h5>
                    <span className="text-white/40 text-[9px] uppercase tracking-widest">{item.category}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-white font-bold tracking-wide text-sm">{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
