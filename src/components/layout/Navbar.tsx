import { Button } from "@/components/ui/button";
import { SECTION_IDS } from "@/config/sections";
import { scrollToId } from "@/lib/scroll";

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
          onClick={() => scrollToId(SECTION_IDS.projects)}
        >
          Projects
        </Button>
        <Button
          variant="ghost"
          className="transition-transform hover:scale-105"
          onClick={() => scrollToId(SECTION_IDS.about)}
        >
          About
        </Button>
        <Button
          variant="ghost"
          className="transition-transform hover:scale-105"
          onClick={() => scrollToId(SECTION_IDS.contact)}
        >
          Contact
        </Button>
      </div>
    </nav>
  );
}
