const experienceData = [
  {
    role: "MERN Stack Developer",
    organization: "Codeme Hub International Pvt Ltd",
    timeframe: "Apr 2025 – Present",
    highlights: [
      "Delivering end-to-end features across frontend and backend, ensuring smooth releases.",
      "Collaborating with cross-functional teams to integrate APIs and optimize performance.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    organization: "Codeme Hub International Pvt Ltd",
    timeframe: "Dec 2024 – Apr 2025",
    highlights: [
      "Contributed to production-grade MERN applications, focusing on clean UI and maintainable code.",
      "Learned best practices in code reviews, agile delivery, and deployment workflows.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col gap-12">
      <header className="flex flex-col gap-3 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
          Professional Journey
        </span>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Experience
        </h2>
        <p className="text-base text-gray-500">
          Hands-on roles shaping robust, user-centric web platforms.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {experienceData.map((item) => (
          <article
            key={item.role}
            className="rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-semibold text-gray-900">
                {item.role}
              </h3>
              <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
                {item.organization}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {item.timeframe}
              </span>
            </div>

            <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-gray-600">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
