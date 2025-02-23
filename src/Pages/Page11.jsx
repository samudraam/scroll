import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

const Page11 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      {
        x: 0,
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        x: () => (Math.random() - 0.5) * 10, // Random X jitter
        y: () => (Math.random() - 0.5) * 10, // Random Y jitter
        opacity: () => Math.random() * 0.5 + 0.5, // Flickering effect
        filter: "blur(2px)", // Slight blurring effect
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-black text-red-500">
      <BackButton />
      <div className="h-[200vh] flex flex-col items-center justify-center">
        <h1 ref={textRef} className="text-6xl font-bold glitch-text">
          SYSTEM ERROR 404
        </h1>
      </div>
    </div>
  );
};

export default Page11;
