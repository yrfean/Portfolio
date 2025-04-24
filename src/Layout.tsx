import Header from "./pages/header and footer/Header";
import Home from "./pages/home/Home";

const Layout = () => {
  return (
    <section className="w-full h-screen bg-gray-200">
      <header className="w-screen h-[70px] flex items-center justify-center">
        <Header />
      </header>
      <div>
        <Home />
      </div>
      {/* <div>Skills</div>
      <div>About</div>
      <div>Get in touch</div> */}
    </section>
  );
};

export default Layout;
