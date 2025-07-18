import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Reddit Lite",
      description:
        "A Reddit clone built with React, TypeScript, and Tailwind. Supports posting, voting, and comments.",
    },
    {
      title: "E-Commerce Backend",
      description:
        "RESTful API with Express, PostgreSQL, and Passport.js authentication. Stripe integration included.",
    },
    {
      title: "TS4500 Tape Library",
      description:
        "Firmware and full-stack interface for IBM’s enterprise tape storage. Built in C, Java EE, and Dojo.",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-zinc-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-surface text-surface-foreground border border-muted transition hover:scale-[1.02] hover:shadow-[0_0_12px_var(--color-brand-glow)]">
              <CardHeader>
                <CardTitle>{proj.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{proj.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
