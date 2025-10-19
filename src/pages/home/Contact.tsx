const Contact = () => {
  return (
    <section
      id="contact"
      className="rounded-3xl bg-gray-900 px-8 py-12 text-white shadow-2xl sm:px-16"
    >
      <div className="flex flex-col gap-6 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400">
          Let’s Collaborate
        </span>
        <h2 className="text-3xl font-bold sm:text-4xl">Get in touch</h2>
        <p className="text-sm text-gray-300">
          I’m available for collaborations, exciting product teams, or freelance
          engagements. Drop a note and I’ll get back within 24 hours.
        </p>

        <div className="flex flex-col gap-4 text-sm">
          <a
            href="mailto:irfanshalu3@gmail.com"
            className="font-semibold text-white transition hover:text-gray-200"
          >
            irfanshalu3@gmail.com
          </a>
          <a
            href="tel:7736842013"
            className="font-semibold text-white transition hover:text-gray-200"
          >
            +91 77368 42013
          </a>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-4 sm:justify-start">
          <a
            href="https://github.com/yrfean"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:text-gray-100"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/irfan-ashraf-99a76a331"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:text-gray-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
