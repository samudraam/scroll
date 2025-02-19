import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "../BackButton";
gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.textContent.split("");
    textRef.current.innerHTML = letters
      .map((letter) => `<span class="inline-block opacity-0">${letter}</span>`)
      .join("");

    gsap.to(textRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-purple-200">
      <BackButton />

      <div className="h-[200vh] flex flex-col items-center justify-center">
        <h1 ref={textRef} className="text-5xl font-bold">
          Letter Reveal!
        </h1>
      </div>
    </div>
  );
};

export default Page5;
