import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Omar 👋</h1>
      <p className="text-lg max-w-xl text-white/80 mb-6">
        I'm a full-stack developer with experience in React, Node.js, and
        firmware. I love building beautiful and secure software.
      </p>
      <Button className="transition-transform hover:scale-105">
        View My Work
      </Button>
    </section>
  );
}
