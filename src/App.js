import logo from "./logo.svg";
import "./App.css";
import {
  MdAddShoppingCart,
  MdInfoOutline,
  MdDone,
  MdClear,
} from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useState } from "react";
function App() {
  const [buy, setBuy] = useState(false);
  return (
    <div className="w-full min-h-screen bg-gray-300 flex items-center justify-center py-20 max-md:flex-col">
      <div className="w-[250px] h-[350px] bg-white m-10 rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 ease-in duration-300 relative">
        <div className="h-[80%]">
          <img
            src={require("./shoe.jpg")}
            alt="logo"
            className=" w-full h-full"
          />
        </div>
        <div
          className={
            "flex h-[20%] w-[200%] overflow-hidden ease-in-out duration-300 " +
            (buy ? "translate-x-[-50%]" : "")
          }
        >
          <div className="flex w-[50%]">
            <div className="w-[70%] px-4 flex flex-col justify-center">
              <div className=" font-semibold text-xl">Nike</div>
              <div className="text-sm">$100</div>
            </div>
            <div
              onClick={() => setBuy(true)}
              className="w-[30%] text-2xl border-l-2 border-gray-200 ease-in duration-300 hover:bg-blue-400 hover:text-white hover:pt-2 hover:border-white flex items-center justify-center cursor-pointer"
            >
              <MdAddShoppingCart />
            </div>
          </div>
          <div className="group flex w-[50%] bg-blue-400 text-white">
            <div className="w-[30%] h-[200%]  text-2xl  ease-in duration-300 group-hover:translate-y-[-50%]  cursor-pointer">
              <div className="flex items-center justify-center h-[50%]">
                <MdDone />
              </div>
              <div
                onClick={() => setBuy(false)}
                className="flex items-center justify-center h-[50%] bg-red-400 ease-in duration-300 hover:pt-2 hover:bg-red-700"
              >
                <MdClear />
              </div>
            </div>
            <div className="w-[70%] px-4 flex flex-col justify-center">
              <div className=" font-semibold text-xl">Nike</div>
              <div className="text-sm">Added to your cart</div>
            </div>
          </div>
        </div>
        <div className="group absolute top-0 right-0 flex items-center  justify-center text-2xl text-white bg-gray-700 rounded-bl-full ease-in-out duration-300 w-14 h-14 hover:w-full hover:h-[80%] hover:rounded-none overflow-hidden">
          <MdInfoOutline className=" group-hover:hidden cursor-pointer" />
          <div className="hidden group-hover:block text-sm">
            <div>Item : #17457343</div>
            <div>Size : 10.5</div>
            <div>Color: Black</div>
          </div>
        </div>
      </div>
      <div className=" font-mono text-gray-600">
        <div className="text-xl font-semibold max-md:text-md">
          Shopping Card
        </div>
        <div className="text-md max-md:text-sm">Developed by</div>
        <div className="text-md max-md:text-sm">Nipun Avishka De Zoysa.</div>
        <div className="flex gap-2 text-2xl mt-2 max-md:text-xl">
          <a
            className="hover:text-gray-900 hover:mr-1 ease-out duration-300"
            href="https://github.com/nipun-dezoysa/shoppingcard"
          >
            <FaGithub />
          </a>

          <a
            className="hover:text-gray-900 hover:mr-1 ease-out duration-300"
            href="https://www.linkedin.com/in/nipun-avishka-de-zoysa"
          >
            <FaLinkedin />
          </a>

          <a
            className="hover:text-gray-900 hover:mr-1 ease-out duration-300"
            href="https://www.facebook.com/nipun.avishka.90"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
