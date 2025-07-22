import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav
      className="bg-background/70 text-foreground border-muted sticky top-0 z-50 flex items-center justify-between border-b px-4 py-3 backdrop-blur"
      aria-label="Main navigation"
    >
      <span className="text-xl font-bold">Omar Castorena</span>
      <div className="space-x-2">
        <Button
          variant="ghost"
          className="transition-transform hover:scale-105"
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Projects
        </Button>
        <Button
          variant="ghost"
          className="transition-transform hover:scale-105"
          onClick={() => {
            document
              .getElementById("section-2")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          About
        </Button>
        <Button
          variant="ghost"
          className="transition-transform hover:scale-105"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </Button>
      </div>
    </nav>
  );
}
