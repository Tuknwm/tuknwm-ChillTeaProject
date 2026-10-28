"use client";
import { useEffect, useState } from "react";

export default function MobileRedirect({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    setChecked(true);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!checked) return null;

  if (isMobile) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <style>{`
          @keyframes dimglow {
            0%,100%{opacity:0.3;text-shadow:0 0 8px rgba(255,255,255,0.2)}
            50%{opacity:1;text-shadow:0 0 20px rgba(255,255,255,0.9),0 0 40px rgba(255,255,255,0.5)}
            92%{opacity:1;text-shadow:0 0 20px rgba(255,255,255,0.9),0 0 40px rgba(255,255,255,0.5)}
            93%{opacity:0.1;text-shadow:none}
            94%{opacity:1;text-shadow:0 0 20px rgba(255,255,255,0.9)}
            96%{opacity:0.2;text-shadow:none}
            97%{opacity:1;text-shadow:0 0 20px rgba(255,255,255,0.9)}
          }
          .flicker { animation: dimglow 3s ease-in-out infinite; }
        `}</style>
        <p className="flicker text-4xl font-black tracking-[0.25em] uppercase select-none">
          KuroKyu
        </p>
        <p className="text-white/40 text-sm leading-relaxed max-w-xs mt-6 text-center px-8">
          This website is designed for desktop screens only.<br />
          Please visit on a larger device.
        </p>
        <a
          href="https://github.com/Tuknwm/tuknwm-ChillTeaProject"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-white/50 text-xs tracking-widest uppercase hover:border-white/60 hover:text-white/80 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </main>
    );
  }

  return <>{children}</>;
}
