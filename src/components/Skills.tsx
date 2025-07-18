const skills = {
  Frontend: ["React", "TypeScript", "Tailwind CSS", "Dojo", "Styled-components", "React Router"],
  Backend: ["Node.js", "Express", "Java EE", "RESTful APIs", "OAuth", "Stripe Integration"],
  Database: ["PostgreSQL", "SQL"],
  Tooling: ["Git", "Linux", "Vite", "Docker", "Postman"],
  Firmware: ["C Programming", "Diagnostics", "I2C/SMI", "Linux Drivers"],
  Security: ["Penetration Test Fixes", "Secure Coding", "Authentication"],
};

export function Skills() {
  return (
    <section className="py-16 px-4 bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-center">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">{category}</h3>
              <ul className="flex flex-wrap gap-2 text-zinc-300">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-md text-sm"
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