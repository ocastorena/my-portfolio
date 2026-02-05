import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/src/vanta.net";

export function Hero() {
  const heroRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(
    null,
  );

  useEffect(() => {
    // Skip WebGL/Vanta initialization in Vitest/JSDOM.
    if (import.meta.env.MODE === "test") {
      return;
    }

    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: heroRef.current,
          THREE,
          mouseControls: true,
          touchControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x22d3ee,
          backgroundColor: 0x0a0d13,
        }),
      );
    }
    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={heroRef}
      className="bg-background text-foreground relative -mt-12 h-[calc(96vh+3rem)] w-full"
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 px-4 text-center backdrop-blur-xs">
        <img
          src="./omar-profile.png"
          alt="Omar Castorena"
          className="border-accent mb-2 h-24 w-24 rounded-full border-2 object-cover"
        ></img>
        <h1 className="mb-4 text-5xl font-bold">Hi, I'm Omar 👋</h1>
        <p className="text-muted-foreground mb-6 max-w-xl text-lg">
          I'm a software engineer specializing in web and firmware development,
          with expertise in React, Node.js, and C programming. I build scalable,
          secure, and user-friendly applications, as well as reliable embedded
          systems that solve real-world problems.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("section-2")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-accent text-background hover:text-accent-foreground absolute bottom-50 mx-auto flex h-12 w-12 animate-bounce items-center justify-center rounded-full text-2xl transition-transform hover:scale-120"
          aria-label="Scroll to About section"
        >
          ↓
        </button>
      </div>
    </section>
  );
}
