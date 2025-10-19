const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Python", "SQL"],
  },
  {
    title: "Databases & Tools",
    skills: ["MongoDB", "PostgreSQL", "REST APIs", "Socket.io"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col gap-12">
      <header className="flex flex-col gap-3 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
          Core Stack
        </span>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Skills</h2>
        <p className="text-base text-gray-500">
          Technologies and tools I rely on to ship reliable, modern web
          applications.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white/75 p-6 text-center shadow-md backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {group.title}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
