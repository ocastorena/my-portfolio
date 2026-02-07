import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="text-muted-foreground bg-surface px-4 py-6 text-center text-sm">
      <p>
        © {new Date().getFullYear()} {SITE_CONFIG.name}. Built with React +
        Tailwind.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href={SITE_CONFIG.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>
        <a
          href={SITE_CONFIG.social.github}
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
