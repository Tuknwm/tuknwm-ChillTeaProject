"use client";

import { useRef, useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
      setDate(now.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ position: "absolute", top: 25, left: 25, zIndex: 20, pointerEvents: "none" }}>
      <div style={{ fontSize: 11, opacity: 0.5, textTransform: "uppercase", letterSpacing: 1, color: "#000" }}>{date}</div>
      <div style={{ fontSize: 24, fontWeight: 900, color: "#000" }}>{time}</div>
    </div>
  );
}

interface LoaderProps {
  onFinish?: () => void;
  onSwipeStart?: () => void;
  progress?: number;
}

export default function Loader({ onFinish, onSwipeStart, progress }: LoaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const emojiRef = useRef<HTMLSpanElement>(null);
  const tuknwmRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    script.async = true;
    script.onload = () => {
      const gsap = (window as any).gsap;
      if (gsap && overlayRef.current) {
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
      }
    };
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  const handleVideoEnd = () => {
    const gsap = (window as any).gsap;
    if (!gsap) { if (onFinish) onFinish(); return; }

    const tl = gsap.timeline({ onComplete: () => { if (onFinish) onFinish(); } });

    tl.to(emojiRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.4)" });
    tl.to([tuknwmRef.current, emojiRef.current], { opacity: 0, y: -20, duration: 0.4, stagger: 0.05 }, "+=0.6");

    if (curvePathRef.current) {
      tl.to(curvePathRef.current, {
        attr: { d: "M 0,0 L 1,0 L 1,0 Q 0.5,-0.2 0,0 Z" },
        duration: 1,
        ease: "expo.inOut",
        onStart: () => { setTimeout(() => { if (onSwipeStart) onSwipeStart(); }, 375); },
      }, "-=0.3");
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-[#F0EFF4]"
      style={{ zIndex: 99999, clipPath: "url(#loaderCurveClip)", overflow: "hidden" }}
    >
      <svg style={{ width: 0, height: 0, position: "absolute" }}>
        <defs>
          <clipPath id="loaderCurveClip" clipPathUnits="objectBoundingBox">
            <path ref={curvePathRef} d="M 0,0 L 1,0 L 1,1 Q 0.5,1.05 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <Clock />

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        onEnded={handleVideoEnd}
        onTimeUpdate={(e) => {
          if (e.currentTarget.currentTime >= 3.3) {
            e.currentTarget.pause();
            handleVideoEnd();
          }
        }}
        className="absolute inset-0 w-full h-full object-contain z-0"
      >
        <source src="/animlogo.webm" type="video/webm" />
        <source src="/animlogo.mp4" type="video/mp4" />
      </video>

      {progress !== undefined && (
        <div className="relative z-10 text-black/60 font-light tracking-[0.2em] mt-[30vh] text-lg text-center w-full absolute bottom-20">
          {progress}%
        </div>
      )}

      <span
        ref={tuknwmRef}
        style={{ position: "absolute", bottom: 25, left: 25, fontSize: 14, fontWeight: 300, letterSpacing: 3, textTransform: "uppercase", opacity: 0.6, zIndex: 20, color: "#000" }}
      >
        Tuknwm
      </span>

      <span
        ref={emojiRef}
        style={{ position: "absolute", bottom: 25, right: 25, fontSize: 24, fontWeight: 900, opacity: 0, transform: "translateY(20px)", zIndex: 20, color: "#000" }}
      >
        ＞︿＜
      </span>
    </div>
  );
}
