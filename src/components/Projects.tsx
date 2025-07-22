import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Reddit Lite",
      description:
        "A Reddit clone built with React, TypeScript, and Tailwind. Supports posting, voting, and comments.",
      link: "https://redditliteclient.netlify.app/",
      repo: "https://github.com/ocastorena/reddit-lite",
    },
    {
      title: "E-Commerce Backend",
      description:
        "RESTful API with Express, PostgreSQL, and Passport.js authentication. Stripe integration included.",
      link: "https://e-commerce-app-frontend-maor.onrender.com/",
      repo: "https://github.com/ocastorena/e-commerce-app-backend",
    },
  ];

  return (
    <section id="projects" className="bg-zinc-950 px-4 py-16 text-white">
      <h2 className="mb-10 text-center text-4xl font-bold">Projects</h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-surface text-surface-foreground border-muted border transition hover:scale-[1.02] hover:shadow-[0_0_12px_var(--color-brand-glow)]">
              <CardHeader>
                <CardTitle>{proj.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{proj.description}</p>
                <div className="mt-2">
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {proj.repo && (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent ml-4 hover:underline"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
