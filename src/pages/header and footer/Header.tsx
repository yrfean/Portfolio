const Header = () => {
  return (
    <nav className="flex fixed justify-around items-center w-[70%] p-3 bg-white rounded-lg">
      <a className="font-bold text-gray-500 hover:text-gray-700 transition-all duration-300 cursor-pointer ">
        Home
      </a>
      <a className="font-bold text-gray-500 hover:text-gray-700 transition-all duration-300 cursor-pointer ">
        Skills
      </a>
      <a className="font-bold text-gray-500 hover:text-gray-700 transition-all duration-300 cursor-pointer ">
        About
      </a>
      <a className="font-bold bg-white hover:scale-105 ease-in-out px-2 py-1  rounded text-gray-500 hover:text-gray-700 transition-all duration-300 cursor-pointer ">
        Get in touch
      </a> 
    </nav>
  );
};

export default Header;
