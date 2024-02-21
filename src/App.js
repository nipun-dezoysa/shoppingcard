import logo from "./logo.svg";
import "./App.css";
import {
  MdAddShoppingCart,
  MdInfoOutline,
  MdDone,
  MdClear,
} from "react-icons/md";
import { useState } from "react";
function App() {
  const [buy, setBuy] = useState(false);
  return (
    <div className="w-full h-full bg-gray-300 flex items-center justify-center py-20">
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
            <div
              onClick={() => setBuy(false)}
              className="w-[30%] h-[200%]  text-2xl  ease-in duration-300 group-hover:translate-y-[-50%]  cursor-pointer"
            >
              <div className="flex items-center justify-center h-[50%]">
                <MdDone />
              </div>
              <div className="flex items-center justify-center h-[50%] bg-red-400 ease-in duration-300 hover:pt-2 hover:bg-red-700">
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
    </div>
  );
}

export default App;
