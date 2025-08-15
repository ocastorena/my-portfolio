import { skills } from "@/data/skills";

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
                {items.map((skill: string) => (
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
