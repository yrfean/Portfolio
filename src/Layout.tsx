import Header from "./pages/header and footer/Header";
import Home from "./pages/home/Home";
import { Projects } from "./pages/home/Projects";
import Skills from "./pages/home/Skills";
import Experience from "./pages/home/Experience";
import Education from "./pages/home/Education";
import Contact from "./pages/home/Contact";
import TiltedCard from "./components/TitltedCard";
import Particles from "./components/Particles";

const Layout = () => {
  return (
    <>
      {" "}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "auto",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <section className="relative z-10 min-h-screen w-full bg-transparent  from-gray-50 via-white to-gray-100 text-gray-900">
        <Header />
        <main
          style={{ pointerEvents: "auto" }}
          className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-4 pb-24 pt-32 sm:px-6 lg:px-8"
        >
          <TiltedCard
            containerHeight="600px"
            containerWidth="full"
            scaleOnHover={1.05}
          >
            <Home />
          </TiltedCard>
          {/* <Home /> */}
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
      </section>
    </>
  );
};

export default Layout;
