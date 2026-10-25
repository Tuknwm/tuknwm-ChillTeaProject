"use client";

import { useEffect, useRef } from "react";

export default function CustomScrollbar() {
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const getTrackH = () => trackRef.current?.getBoundingClientRect().height ?? window.innerHeight;

  const update = () => {
    const thumb = thumbRef.current;
    if (!thumb) return;
    const trackH = getTrackH();
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    const thumbH = Math.max(40, (window.innerHeight / document.documentElement.scrollHeight) * trackH);
    thumb.style.height = `${thumbH}px`;
    thumb.style.transform = `translateY(${progress * (trackH - thumbH)}px)`;
  };

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleTrackClick = (e: React.MouseEvent) => {
    if (e.target === thumbRef.current) return;
    const trackH = getTrackH();
    const trackTop = trackRef.current?.getBoundingClientRect().top ?? 0;
    const thumbH = Math.max(40, (window.innerHeight / document.documentElement.scrollHeight) * trackH);
    const ratio = Math.min(Math.max((e.clientY - trackTop - thumbH / 2) / (trackH - thumbH), 0), 1);
    window.scrollTo({ top: ratio * (document.documentElement.scrollHeight - window.innerHeight), behavior: "smooth" });
  };

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startY = e.clientY;
    const startScroll = window.scrollY;
    const trackH = getTrackH();
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const thumbH = Math.max(40, (window.innerHeight / document.documentElement.scrollHeight) * trackH);

    const onMove = (ev: MouseEvent) => {
      const delta = ev.clientY - startY;
      window.scrollTo({ top: startScroll + (delta / (trackH - thumbH)) * scrollable });
    };
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <div
      ref={trackRef}
      onClick={handleTrackClick}
      className="fixed right-2 top-4 w-[4px] z-[99999] cursor-default"
      style={{ bottom: "1rem" }}
    >
      <div
        ref={thumbRef}
        onMouseDown={handleThumbMouseDown}
        className="w-full rounded-full bg-white/60 hover:bg-white transition-colors duration-200 cursor-default"
      />
    </div>
  );
}
