import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

const Page7 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const word = "WAVE";
    textRef.current.innerHTML = word
      .split("")
      .map((letter) => `<span class="inline-block opacity-0">${letter}</span>`)
      .join("");

    const letters = textRef.current.children; 

    gsap.set(letters, { opacity: 1 });

    gsap.to(letters, {
      y: (i) => Math.sin(i * 1.2) * 15,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-teal-300">
        <BackButton/>
      <div className="h-[200vh] flex flex-col items-center justify-center">
        <h1 ref={textRef} className="text-6xl font-bold">
          WAVE
        </h1>
      </div>
    </div>
  );
};

export default Page7;
