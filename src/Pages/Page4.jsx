import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    gsap.set(textRef.current, { opacity: 0 });

    gsap.from(textRef.current, {
      opacity: 1,
      y: 50,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        once: false,
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-amber-200">
      <BackButton />

      <div className="h-[200vh] flex flex-col items-center justify-center">
        <h1 ref={textRef} className="text-reveal text-5xl font-bold opacity-0">
          Text Fade Out
        </h1>
      </div>
    </div>
  );
};

export default Page4;
