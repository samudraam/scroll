import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

const Page10 = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const fragmentsRef = useRef([]);

  useEffect(() => {
    if (!boxRef.current) return;

    const fragments = fragmentsRef.current;

    gsap.set(fragments, { scale: 0, opacity: 0 });

    gsap.to(fragments, {
      scale: 1,
      opacity: 1,
      x: () => (Math.random() - 0.5) * 400,
      y: () => (Math.random() - 0.5) * 400,
      rotation: () => Math.random() * 360,
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "top 20%",
        scrub: 2,
      },
    });

    gsap.to(boxRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="h-[200vh] min-w-screen flex flex-col items-center justify-center bg-purple-600">
      <BackButton />
      <div
        ref={containerRef}
        className="relative w-40 h-40 flex items-center justify-center"
      >
        {/* Big Box */}
        <div ref={boxRef} className="absolute w-40 h-40 bg-red-500"></div>

        {/* Exploding Pieces */}
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (fragmentsRef.current[i] = el)}
            className="absolute w-10 h-10 bg-yellow-400"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Page10;
