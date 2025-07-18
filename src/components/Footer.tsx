export function Footer() {
  return (
    <footer className="py-6 px-4 text-center text-muted-foreground bg-surface text-sm">
      <p>
        © {new Date().getFullYear()} Omar Castorena. Built with React +
        Tailwind.
      </p>
    </footer>
  );
}
