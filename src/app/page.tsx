"use client";

import { useState, useEffect } from "react";
import ChillCanvas from "@/components/ChillCanvas";
import Testimonials from "@/components/Testimonials";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import TeaMenu from "@/components/TeaMenu";
import AboutUs from "@/components/AboutUs";
import Highlights from "@/components/Highlights";
import ContactLocation from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("loaderShown")) setIsLoading(false);
  }, []);

  const [heroLoaded, setHeroLoaded] = useState(false);

  const handleSwipeStart = () => setHeroLoaded(true);
  const handleLoaderFinish = () => {
    sessionStorage.setItem("loaderShown", "1");
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <Loader onFinish={handleLoaderFinish} onSwipeStart={handleSwipeStart} />
      )}

      <main className="w-full bg-[#949E7A] min-h-screen">
        <Navbar />
        <ChillCanvas loaded={!isLoading || heroLoaded} />

        <div className="relative z-20 bg-[#949E7A]">
          <TeaMenu />
          <AboutUs />
          <Highlights />
          <ContactLocation />
        </div>
      </main>
    </>
  );
}
