import "./Main.css";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
const Main = () => {
  const [form, setLogin] = useState(<Login />);
  const [loginClick, setLoginClick] = useState("clicked");
  const [registerClick, setRegisterClick] = useState("unclicked");
  const LoginPage = () => {
    setLogin(<Login />);
    setLoginClick("clicked");
    setRegisterClick("unclicked");
  };
  const RegisterPage = () => {
    setLogin(<Register />);
    setRegisterClick("clicked");
    setLoginClick("unclicked");
  };
  return (
    <section id='hero' className="mb-40">
      <div className="px-6 md:px-12 bg-gray-100 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 mb-20 gap-12 flex h-screen items-center">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                The best offer <br />
                <span className="text-blue-600">for your business</span>
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>
            <div className="mb-12 lg:mb-0">
              <div
                id="form"
                className="block round-lg shadow-lg bg-white px-6 py-12 md:px-12"
              >
                {form}
              </div>
              <div className="signBtn">
                <a
                  id={loginClick}
                  onClick={LoginPage}
                  className="mr-5 hover:text-gray-900"
                  style={{borderRadius:'0 0 0 0.5rem'}}

                >
                  Sign In
                </a>
                <a
                  id={registerClick}
                  onClick={RegisterPage}
                  className="mr-5 hover:text-gray-900"
                  style={{borderRadius:'0 0 0.5rem 0'}}

                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
