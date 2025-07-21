const skills = {
  Frontend: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Dojo",
    "Styled-components",
    "React Router",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Java EE",
    "RESTful APIs",
    "OAuth",
    "Stripe Integration",
  ],
  Database: ["PostgreSQL", "SQL"],
  Tooling: ["Git", "Linux", "Vite", "Docker", "Postman"],
  Firmware: ["C Programming", "Diagnostics", "I2C/SMI", "Linux Drivers"],
  Security: ["Penetration Test Fixes", "Secure Coding", "Authentication"],
};

export function Skills() {
  return (
    <section className="py-16 px-4 bg-surface text-surface-foreground">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-center">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-2 text-brand">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2 text-muted-foreground">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="bg-background border border-muted px-3 py-1 rounded-md text-sm transition hover:scale-[1.02] hover:shadow-[0_0_12px_var(--color-brand-glow)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
