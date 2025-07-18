import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/src/vanta.net";
import { Button } from "./ui/button";

export function Hero() {
  const heroRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(
    null
  );

  useEffect(() => {
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
        })
      );
    }
    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen bg-background text-foreground"
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 bg-black/40 backdrop-blur-xs">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Omar 👋</h1>
        <p className="text-lg max-w-xl text-muted-foreground mb-6">
          I'm a full-stack developer with experience in React, Node.js, and
          firmware. I love building beautiful and secure software.
        </p>
        <Button className="bg-accent text-accent-foreground hover:shadow-[0_0_12px_var(--color-accent)] transition">
          View My Work
        </Button>
      </div>
    </section>
  );
}
