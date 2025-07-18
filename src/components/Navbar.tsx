import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-zinc-900/70 border-b border-zinc-800 text-white px-4 py-3 flex justify-between items-center">
      <span className="text-xl font-bold">Omar Castorena</span>
      <div className="space-x-2">
        <Button variant="ghost">Projects</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Contact</Button>
      </div>
    </nav>
  );
}
