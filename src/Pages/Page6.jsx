import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const squares = gsap.utils.toArray(".square"); 
    squares.forEach((square, index) => {
      gsap.fromTo(
        square,
        { x: index % 2 === 0 ? -200 : 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          immediateRender: false, // Ensures animation plays when scrolling
          scrollTrigger: {
            trigger: square,
            start: "top 90%", // Ensures even top elements animate
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    ScrollTrigger.refresh(); // Ensures all animations are detected properly
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center"
    >
        <BackButton/>
      <div className="h-[200vh] flex flex-col items-center justify-center gap-10">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="square w-32 h-32 bg-blue-500 opacity-0"></div>
        ))}
      </div>
    </div>
  );
};

export default Page6;
