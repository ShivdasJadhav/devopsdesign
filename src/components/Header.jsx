import "./Header.css";
import maleIcon from "../imgs/manIcon.jpg";
const Header = () => {
  return (
    <>
      <header
        id="nav"
        className="sticky top-0 text-center bg-gray-900 lg:text-left text-white"
      >
        <div className="m-0 flex w-full flex-wrap p-5 bg-gray-700 flex-col md:flex-row items-center">
          <p className="flex flex-1 title-font font-medium md:ml-10 items-center text-white lg mb-4 md:mb-0">
            <img src={maleIcon} alt="" className="w-10 h-10 rounded-full"/>
            <span className="ml-3 text-white text-xl">@JadhavShivdas</span>
          </p>
          
          <nav className="text-white flex flex-wrap font-sans gap-x-2 text-sm justify-center flex-4 justify-end items-center ">
            <a className="m-auto p-1 rounded-lg" href="#hero">
              Home
            </a>
            <a className="m-auto p-1 rounded-lg" href="#services">
              Services
            </a>
            <a className="m-auto p-1 rounded-lg" href="#review">
              Review
            </a>
            <a className="m-auto p-1 rounded-lg" href="#pricing">
              Pricing
            </a>
            <a className="m-auto p-1 bg-orange-400 md:px-3 rounded-lg" href="https://linkedin.com/in/shivdas-s-jadhav-7b8096210">
              LinkedIn
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
