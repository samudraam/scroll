import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const squareRef = useRef(null);

  useEffect(() => {
    if (!squareRef.current) return;

    gsap.fromTo(
      squareRef.current,
      { rotate: 0 },
      {
        rotate: 180,
        transformOrigin: "50% 50%",
        scrollTrigger: {
          trigger: squareRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="h-[100%] w-[100%] min-h-screen bg-orange-400">
      <BackButton />
      <div className="min-h-[200vh] flex flex-col items-center justify-center">
        <svg
          width="200"
          height="200"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <rect
            ref={squareRef}
            x="100"
            y="300"
            width="200"
            height="200"
            fill="blue"
          />
        </svg>
      </div>
    </div>
  );
};

export default Page3;
