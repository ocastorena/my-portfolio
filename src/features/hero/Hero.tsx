import { useEffect, useRef, useState } from "react";
import omarProfile from "@/assets/omar-profile.png";
import { SECTION_IDS } from "@/config/sections";
import { scrollToId } from "@/lib/scroll";

export function Hero() {
  const heroRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void } | null>(
    null,
  );

  useEffect(() => {
    // Skip WebGL/Vanta initialization in Vitest/JSDOM.
    if (import.meta.env.MODE === "test") {
      return;
    }

    let isMounted = true;

    async function initVanta() {
      if (vantaEffect || !heroRef.current) {
        return;
      }

      const threeModule = await import("three");
      const THREE = Object.assign({}, threeModule, {
        // Vanta's net effect still references legacy THREE.VertexColors.
        // Map it to the modern boolean form to avoid runtime warnings.
        VertexColors: true,
      });
      (globalThis as { THREE?: typeof THREE }).THREE = THREE;
      const { default: NET } = await import("vanta/src/vanta.net");

      if (!isMounted) {
        return;
      }

      const effect = NET({
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
      });

      setVantaEffect(effect);
    }

    void initVanta();

    return () => {
      isMounted = false;
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
          src={omarProfile}
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
          onClick={() => scrollToId(SECTION_IDS.about)}
          className="bg-accent text-background hover:text-accent-foreground absolute bottom-50 mx-auto flex h-12 w-12 animate-bounce items-center justify-center rounded-full text-2xl transition-transform hover:scale-120"
          aria-label="Scroll to About section"
        >
          ↓
        </button>
      </div>
    </section>
  );
}
