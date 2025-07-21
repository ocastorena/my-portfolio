import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur bg-background/70 text-foreground border-b border-muted px-4 py-3 flex justify-between items-center"
      aria-label="Main navigation"
    >
      <span className="text-xl font-bold">Omar Castorena</span>
      <div className="space-x-2">
        <Button
          variant="ghost"
          className="hover:text-accent hover:underline underline-offset-4 transition"
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
          className="hover:text-accent hover:underline underline-offset-4 transition"
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          About
        </Button>
        <Button
          variant="ghost"
          className="hover:text-accent hover:underline underline-offset-4 transition"
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
