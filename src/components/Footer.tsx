export function Footer() {
  return (
    <footer className="py-6 px-4 text-center text-zinc-400 bg-zinc-950 border-t border-zinc-800 text-sm">
      <p>
        © {new Date().getFullYear()} Omar Castorena. Built with React +
        Tailwind.
      </p>
    </footer>
  );
}
