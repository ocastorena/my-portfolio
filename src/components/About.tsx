export function About() {
  return (
    <section className="py-16 px-4 bg-surface text-surface-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-muted-foreground text-lg">
          I'm a software engineer with 6+ years of experience at IBM, where I
          worked on both firmware development and full-stack web applications.
          My work spans low-level C programming and hardware interfaces, as well
          as building modern frontend UIs using React and backend APIs using
          Java EE and Node.js.
        </p>
        <p className="text-muted-foreground text-lg">
          I'm passionate about clean architecture, secure coding, and building
          tools that solve real problems. I enjoy collaborating with
          cross-functional teams, mentoring others, and constantly learning new
          technologies.
        </p>
      </div>
    </section>
  );
}
