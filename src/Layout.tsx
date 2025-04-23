import Header from "./Header";

const Layout = () => {
  return (
    <section className="w-full h-screen">
      <header className="w-screen h-[70px] flex items-center justify-center bg-gray-200">
        <Header />
      </header>
      {/* <div>Home</div>
      <div>Skills</div>
      <div>About</div>
      <div>Get in touch</div> */}
    </section>
  );
};

export default Layout;
