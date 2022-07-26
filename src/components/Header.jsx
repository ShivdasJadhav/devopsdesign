import "./Header.css";
import Register from "./Register";
const Header = () => {
  return (
    <>
      <header id="nav" className="sticky top-0 w-full text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">ShareSkills</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="#hero">
              Home
            </a>
            <a className="mr-5 hover:text-gray-900" href="#">
              About
            </a>
            <a className="mr-5 hover:text-gray-900" href="#pricing">
              Pricing
            </a>
            <a className="mr-5 hover:text-gray-900" href="#contact">
              Contact Us
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
