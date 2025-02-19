import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

const Page8 = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    gsap.to(marqueeRef.current, {
      x: "-100%",
      ease: "none",
      scrollTrigger: {
        trigger: marqueeRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-indigo-300">
      <BackButton />
      <div className="h-[200vh] w-full overflow-hidden whitespace-nowrap flex items-center">
        <div ref={marqueeRef} className="flex gap-10 text-5xl font-bold">
          <p>I came with power to create the world.</p>
          <p>I came with power to create the world.</p>
          <p>I came with power to create the world.</p>
          <p>I came with power to create the world.</p>
          <p>I came with power to create the world.</p>
          <p>I came with power to create the world.</p>
          <p>I came with power to create the world.</p>
        </div>
      </div>
    </div>
  );
};

export default Page8;
