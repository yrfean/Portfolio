import ShinyText from "../../components/ShinyText";
import SplitText from "../../components/SplitText";
import TextType from "../../components/TextType";

const roles = [
  "MERN Stack Developer",
  "Full Stack Engineer",
  "Frontend Specialist",
  "React developer",
  "Backend Developer",
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yrfanashraf",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/irfan-ashraf-99a76a331",
  },
];

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center gap-12 rounded-3xl bg-gradient-to-b from-gray-100 via-gray-200 to-white p-6 sm:p-12 md:p-16 text-center shadow-xl backdrop-blur-sm w-full max-w-full overflow-hidden"
    >
      <span className="rounded-full border border-gray-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
        Portfolio 2025
      </span>

      <div className="flex flex-col gap-6">
        {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Hi, I’m <span className="text-gray-500">Irfan Ashraf</span>
        </h1> */}
        <SplitText
          text="Hi, I'm Irfan Ashraf"
          className="text-5xl font-semibold text-center"
          delay={50}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <p className="text-lg text-gray-600 sm:text-xl">
          I craft high-performance web applications with clean architecture,
          strong API integrations, and delightful user experiences.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 ">
        <span className="text-sm font-medium uppercase tracking-[0.4em] text-gray-400">
          Currently focused on
        </span>
        <p className="rounded-full bg-gray-50 border border-gray-200 px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm">
          <TextType
            text={roles}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className={"text-lg sm:text-xl md:text-2xl opacity-50"}
            textColors={["#111111"]}
          />
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="/Irfan-Ashraf.pdf"
          download
          className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          <ShinyText
            text="Download resume"
            disabled={false}
            speed={3}
            className=""
          />
        </a>
        {socialLinks.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Home;
