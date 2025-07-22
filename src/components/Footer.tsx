export function Footer() {
  return (
    <footer className="text-muted-foreground bg-surface px-4 py-6 text-center text-sm">
      <p>
        © {new Date().getFullYear()} Omar Castorena. Built with React +
        Tailwind.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="https://linkedin.com/in/omar-castorena"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ocastorena"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
