const Education = () => {
  return (
    <section id="education" className="flex flex-col gap-12">
      <header className="flex flex-col gap-3 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
          Academic Foundation
        </span>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Education
        </h2>
        <p className="text-base text-gray-500">
          Blending hands-on development with a strong foundational journey.
        </p>
      </header>

      <article className="rounded-3xl border border-gray-200 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm sm:text-left">
        <h3 className="text-2xl font-semibold text-gray-900">
          Higher Secondary Education
        </h3>
        <p className="mt-2 text-sm font-medium text-gray-500">Kerala, India</p>
        <p className="mt-4 text-sm text-gray-600">
          Thriving on continuous learning, currently expanding my technical
          depth through real-world product development and industry-focused
          upskilling.
        </p>
      </article>
    </section>
  );
};

export default Education;
