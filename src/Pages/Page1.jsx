import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

export default function Page1() {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      { scale: 1 },
      {
        scale: 5,
        transformOrigin: "center",
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="h-[200vh] w-[200vh] flex flex-col items-center justify-center bg-white">
      <BackButton />
      <svg
        className="w-56 h-56 overflow-visible"
        viewBox="0 0 226 226"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle ref={circleRef} cx="113" cy="113" r="113" fill="#0000FF" />
      </svg>
    </div>
  );
}
