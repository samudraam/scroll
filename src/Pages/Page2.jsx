import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const containerRef = useRef(null); // Reference to the div instead of body

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(containerRef.current, { backgroundColor: "green" });

    gsap.to(containerRef.current, {
      backgroundColor: "red",
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="h-[100%] w-[100%] min-h-screen">
      <BackButton />
      <div className="h-[200vh] flex items-center"></div>
    </div>
  );
};

export default Page2;
