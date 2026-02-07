export function About() {
  return (
    <section
      id="about"
      className="bg-surface text-surface-foreground px-4 py-16"
    >
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-muted-foreground text-lg">
          I'm a software engineer with over 6 years of experience at IBM,
          specializing in full-stack web applications and firmware development.
          My expertise spans building modern UIs using React and TypeScript,
          designing RESTful APIs, implementing authentication systems, and
          integrating third-party services like Stripe for payment processing.
        </p>
        <p className="text-muted-foreground text-lg">
          In web development, I focus on creating scalable and secure
          applications that deliver intuitive user experiences. Leveraging
          modern frameworks and tools, I ensure performance, reliability, and
          maintainability in every project.
        </p>
        <p className="text-muted-foreground text-lg">
          In firmware development, I have extensive experience working with
          embedded systems, diagnostics, and hardware communication protocols
          such as I2C and SMI. I have contributed to developing reliable
          firmware solutions for enterprise-grade storage systems, ensuring
          performance and security at scale.
        </p>
        <p className="text-muted-foreground text-lg">
          I am passionate about secure coding practices, clean architecture, and
          creating tools that solve real-world problems. I thrive in
          collaborative environments, enjoy mentoring, and am always eager to
          learn new technologies.
        </p>
      </div>
    </section>
  );
}
