const skills = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Styled-components",
    "Redux Toolkit",
    "React Testing Library",
    "Jest",
    "Axios",
    "Framer Motion",
    "shadcn/ui",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Java EE",
    "RESTful APIs",
    "OAuth",
    "Stripe Integration",
    "Swagger / OpenAPI",
    "Supertest",
    "Mocha/Chai",
  ],
  Database: ["PostgreSQL", "SQL"],
  Tooling: ["Git", "Linux", "Vite", "Docker", "Postman", "Chrome DevTools"],
  Firmware: [
    "C Programming",
    "Diagnostics",
    "I2C/SMI",
    "Linux Drivers",
    "Embedded Systems",
  ],
  Security: [
    "Penetration Test Remediation",
    "Secure Coding",
    "Authentication",
    "Data Encryption",
  ],
};

export function Skills() {
  return (
    <section className="bg-surface text-surface-foreground px-4 py-16">
      <div className="mx-auto max-w-5xl space-y-10">
        <h2 className="text-center text-4xl font-bold">Skills & Tools</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-brand mb-2 text-xl font-semibold">
                {category}
              </h3>
              <ul className="text-muted-foreground flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="bg-background border-muted rounded-md border px-3 py-1 text-sm transition hover:scale-[1.02] hover:shadow-[0_0_12px_var(--color-brand-glow)]"
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
