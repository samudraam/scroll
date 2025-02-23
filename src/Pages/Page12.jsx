import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";

gsap.registerPlugin(ScrollTrigger);

const Page12 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { filter: "blur(100px)" },
      {
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gray-900">
      <BackButton />
      <div className="h-[200vh] flex items-center justify-center">
        <img
          ref={imageRef}
          src="/scroll/poopy.jpeg"
          alt="Poopy"
          className="w-80 h-auto"
        />
      </div>
    </div>
  );
};

export default Page12;
