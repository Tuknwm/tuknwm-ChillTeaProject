"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 246;
const CANVAS_W = 1920;
const CANVAS_H = 1080;
const FPS = 60;
const PX_PER_SECOND = 500;
const containerHeight = Math.round((FRAME_COUNT / FPS) * PX_PER_SECOND);

const getFramePath = (index: number) => {
  return `/new-scroll/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;
};

export default function ChillCanvas({ loaded = false }: { loaded?: boolean }) {
  const [scrollY, setScrollY] = useState(0);
  const [isProductVisible, setIsProductVisible] = useState(false);
  const productSecRef = useRef<HTMLElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProductVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (productSecRef.current) {
      observer.observe(productSecRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = images;
          const canvas = canvasRef.current;
          if (canvas) {
            canvas.width = CANVAS_W;
            canvas.height = CANVAS_H;
            drawFrame(0);
          }
          initAnimations();
        }
      };
      images.push(img);
    }
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img) return;
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.drawImage(img, 0, 0, CANVAS_W, CANVAS_H);
  };

  const initAnimations = () => {
    const ctx = gsap.context(() => {
      gsap.to(canvasRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const frame = Math.min(
              Math.floor(self.progress * (FRAME_COUNT - 1)),
              FRAME_COUNT - 1
            );
            drawFrame(frame);
          },
        },
      });

    }, containerRef);

    return () => ctx.revert();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = CANVAS_W;
      canvas.height = CANVAS_H;
    }
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mountainParallax = scrollY * 0.4;
  const textParallax = scrollY * 0.6;
  const textOpacity = Math.max(1 - scrollY / 400, 0);
  const hillsParallax = scrollY * -0.1;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 20 });
  const my = useSpring(rawY, { stiffness: 60, damping: 20 });

  const mountainX = useTransform(mx, [-1, 1], [-18, 18]);
  const mountainY = useTransform(my, [-1, 1], [-10, 10]);
  const hillsX = useTransform(mx, [-1, 1], [-30, 30]);
  const hillsY = useTransform(my, [-1, 1], [-16, 16]);
  const vinesX = useTransform(mx, [-1, 1], [-12, 12]);
  const vinesY = useTransform(my, [-1, 1], [-8, 8]);

  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroSectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { width, height, left, top } = el.getBoundingClientRect();
      rawX.set(((e.clientX - left) / width) * 2 - 1);
      rawY.set(((e.clientY - top) / height) * 2 - 1);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-[#8FA082] text-white font-sans overflow-x-hidden selection:bg-white selection:text-[#8FA082]">
        <section ref={heroSectionRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
          <motion.div
            className="absolute top-[0%] w-full h-[150%] z-0" style={{ left: "-3%" }}
            initial={{ y: 600 }}
            animate={loaded ? { y: 0 } : { y: 600 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <motion.div className="w-full h-full" style={{ x: mountainX, y: mountainY, scale: 1.08 }}>
              <img
                src="/png.png"
                alt="Mountains Background"
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
                style={{ transform: `translateY(${mountainParallax}px)` }}
              />
            </motion.div>
          </motion.div>

          <style>{`
            @keyframes cloud-drift {
              0%   { transform: translateX(-600px); opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 1; }
              100% { transform: translateX(110vw); opacity: 0; }
            }
          `}</style>
          {(() => {
            const CLONES = 3;
            const templates = [
              { z: 5,  top: "12%", durN: 40, blobs: [{ t: 0,  l: 0,   s: 160, o: 0.55 }, { t: -30, l: 70,  s: 130, o: 0.45 }, { t: 8,  l: 150, s: 180, o: 0.50 }] },
              { z: 5,  top: "5%",  durN: 48, blobs: [{ t: 0,  l: 0,   s: 140, o: 0.50 }, { t: -22, l: 55,  s: 180, o: 0.45 }, { t: 12, l: 170, s: 150, o: 0.40 }] },
              { z: 5,  top: "20%", durN: 36, blobs: [{ t: 0,  l: 0,   s: 120, o: 0.45 }, { t: -18, l: 50,  s: 150, o: 0.40 }, { t: 8,  l: 150, s: 120, o: 0.35 }] },
              { z: 5,  top: "30%", durN: 44, blobs: [{ t: 0,  l: 0,   s: 170, o: 0.50 }, { t: -25, l: 80,  s: 140, o: 0.45 }, { t: 10, l: 200, s: 130, o: 0.40 }] },
              { z: 5,  top: "8%",  durN: 55, blobs: [{ t: 0,  l: 0,   s: 190, o: 0.40 }, { t: -40, l: 100, s: 150, o: 0.35 }, { t: 15, l: 230, s: 170, o: 0.30 }] },
              { z: 15, top: "18%", durN: 50, blobs: [{ t: 0,  l: 0,   s: 200, o: 0.45 }, { t: -35, l: 90,  s: 160, o: 0.40 }, { t: 10, l: 210, s: 130, o: 0.35 }] },
              { z: 15, top: "28%", durN: 42, blobs: [{ t: 0,  l: 0,   s: 150, o: 0.45 }, { t: -28, l: 70,  s: 120, o: 0.40 }, { t: 8,  l: 165, s: 140, o: 0.35 }] },
              { z: 15, top: "10%", durN: 34, blobs: [{ t: 0,  l: 0,   s: 130, o: 0.50 }, { t: -20, l: 60,  s: 160, o: 0.45 }, { t: 5,  l: 165, s: 110, o: 0.40 }] },
            ];
            return templates.flatMap((c, ti) =>
              Array.from({ length: CLONES }, (_, ci) => {
                const delay = -((ci / CLONES) * c.durN);
                return (
                  <div key={`c${ti}-${ci}`} className="absolute pointer-events-none" style={{ zIndex: c.z, top: c.top, left: 0, animation: `cloud-drift ${c.durN}s linear ${delay}s infinite` }}>
                    <div style={{ position: "relative", width: 500, height: 160 }}>
                      {c.blobs.map((b, j) => (
                        <div key={j} style={{ position: "absolute", top: b.t + 40, left: b.l, width: b.s, height: b.s, background: "white", borderRadius: "50%", filter: "blur(16px)", opacity: b.o }} />
                      ))}
                    </div>
                  </div>
                );
              })
            );
          })()}

          <motion.div
            className="absolute bottom-[-10%] left-0 w-full h-[100%] z-20"
            initial={{ y: 300 }}
            animate={loaded ? { y: 0 } : { y: 300 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <motion.div className="w-full h-full" style={{ x: hillsX, y: hillsY, scale: 1.08 }}>
              <img
                src="/Landscape photography.png"
                alt="Green Hills Foreground"
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
                style={{ transform: `translateY(${hillsParallax}px)` }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 w-full h-[100%] z-30 pointer-events-none"
            initial={{ y: 80, scale: 1.25 }}
            animate={loaded ? { y: 0, scale: 1 } : { y: 80, scale: 1.25 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          >
            <motion.img
              src="/grass png.png"
              alt="Hanging Vines"
              draggable={false}
              className="w-full h-full object-cover pointer-events-none"
              style={{ x: vinesX, y: vinesY, scale: 1.08 }}
            />
          </motion.div>

          {[
            { top: "32%", dur: "29s", del: "-5s",  blobs: [{ t: 0,  l: 0,   s: 180, o: 0.50 }, { t: -30, l: 85,  s: 150, o: 0.45 }, { t: 10, l: 200, s: 160, o: 0.40 }] },
            { top: "42%", dur: "24s", del: "-15s", blobs: [{ t: 0,  l: 0,   s: 140, o: 0.45 }, { t: -22, l: 65,  s: 170, o: 0.40 }, { t: 8,  l: 185, s: 130, o: 0.35 }] },
          ].map((c, i) => (
            <div key={`b${i}`} className="absolute pointer-events-none" style={{ zIndex: 25, top: c.top, left: 0, animation: `cloud-drift ${c.dur} linear ${c.del} infinite` }}>
              <div style={{ position: "relative", width: 500, height: 160 }}>
                {c.blobs.map((b, j) => (
                  <div key={j} style={{ position: "absolute", top: b.t + 40, left: b.l, width: b.s, height: b.s, background: "white", borderRadius: "50%", filter: "blur(16px)", opacity: b.o }} />
                ))}
              </div>
            </div>
          ))}

          <div
            className="absolute left-8 md:left-16 flex flex-col items-start text-left px-4 pr-8"
            style={{ zIndex: 25, transform: `translateY(calc(${textParallax}px - 80px))`, opacity: textOpacity }}
          >
            <div>
              <motion.h1
                initial={{ y: "110%" }}
                animate={loaded ? { y: "0%" } : { y: "110%" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none"
              >
                NATURAL FRESHNESS
              </motion.h1>
            </div>
          </div>

          <div
            className="absolute right-8 md:right-16 flex flex-col items-end text-right px-4"
            style={{ zIndex: 10, transform: `translateY(calc(${textParallax}px - 175px))`, opacity: textOpacity }}
          >
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={loaded ? { y: "0%" } : { y: "110%" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm md:text-lg font-semibold tracking-[0.3em] uppercase text-white mb-4 drop-shadow-md"
              >
                ChillTea — New Fruit Collection
              </motion.h2>
            </div>
          </div>

          <div
            className="absolute right-8 md:right-16 flex flex-col items-end text-right px-4"
            style={{ zIndex: 9999, transform: `translateY(${textParallax}px)`, opacity: textOpacity }}
          >
            <div className="mt-[calc(1em*9)] md:mt-[calc(1em*14)] lg:mt-[calc(1em*17)]" />
            <div className="overflow-hidden mt-8">
              <motion.p
                initial={{ y: "110%" }}
                animate={loaded ? { y: "0%" } : { y: "110%" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-lg md:text-2xl font-serif italic text-white/90 drop-shadow-md max-w-xl"
              >
                ChillTea brings you the finest tea crafted from real fruit extracts — pure, natural, and made to refresh your every moment.
              </motion.p>
            </div>
            <div className="overflow-hidden mt-8">
              <motion.a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
                initial={{ y: "110%" }}
                animate={loaded ? { y: "0%" } : { y: "110%" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="inline-flex items-center gap-3 px-8 py-3 border-2 border-white text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                Explore <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
              </motion.a>
            </div>
          </div>


          <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-b from-transparent via-black/40 to-[#0a0a0a] z-50 pointer-events-none" />
        </section>
      </div>

      <div ref={containerRef} className="relative w-full bg-[#0a0a0a]" style={{ height: `${containerHeight}px`, display: "none" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(100vw, 177.78vh)",
              height: "min(100vh, 56.25vw)",
            }}
          />
        </div>
      </div>
    </div>
  );
}