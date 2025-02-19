import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

const Page9 = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (!circleRef.current) return;

    gsap.fromTo(
      circleRef.current,
      {
        filter: "hue-rotate(0deg)",
        boxShadow: "0px 0px 10px rgba(240, 255, 0, 0.5)",
      },
      {
        filter: "hue-rotate(360deg)",
        boxShadow: "0px 0px 50px rgba(240, 255, 0, 1)",
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-black">
      <BackButton />
      <div className="h-[200vh] flex items-center justify-center">
        <div
          ref={circleRef}
          className="w-[200px] h-[200px] bg-yellow-400 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default Page9;
