// react icon
import { BsFillHeartFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
// image Profile and Logo
import imageProfile from "./assets/Imageprofile.svg";
import logo from "./assets/Logo.svg";

export function Navbar() {
  return (
    <nav className="bg-white px-6 py-8 ">
      <div className="flex flex-row justify-between mb-6 lg:mb-0 ">
        <div className="flex ">
          <img src={logo} className="w-24 lg:w-32" />
          <div className="hidden lg:block lg:relative">
            <input
              type="text"
              className=" border border-gray-200 rounded-full ml-20 w-96 py-2 px-12 focus:outline-none"
              placeholder="Search something here"
            />
            <span className="absolute inset-y-0 right-0 flex">
              <button className="px-4 text-2xl text-gray-500 ">
                <HiOutlineAdjustmentsHorizontal />
              </button>
            </span>
            <span className="absolute inset-y-0 left-20 flex ">
              <button className="px-4 text-2xl text-gray-500 ">
                <BiSearch />
              </button>
            </span>
          </div>
        </div>
        <div className="hidden lg:flex">
          <div className=" flex justify-center items-center w-10 h-10 rounded-full  border border-gray-100 mr-5">
            <BsFillHeartFill className="text-gray-500 hover:text-red-500 hover:cursor-pointer" />
          </div>
          <div className=" flex justify-center items-center w-10 h-10 rounded-full  border border-gray-100 mr-5">
            <BsBellFill className="text-gray-500 hover:text-red-500 hover:cursor-pointer" />
          </div>
          <div className=" flex justify-center items-center w-10 h-10 rounded-full  border border-gray-100 mr-5">
            <BsFillGearFill className="text-gray-500 hover:text-red-500 hover:cursor-pointer" />
          </div>
          <img
            src={imageProfile}
            className=" rounded-full lg:w-10 lg:h-10 hover:cursor-pointer"
          />
        </div>
        <img
          src={imageProfile}
          className="w-7 h-7 rounded-full lg:hidden xl:hidden 2xl:hidden"
        />
      </div>
      {/* search mobile */}
      <div className=" flex justify-between items-center lg:hidden">
        <div className="relative ">
          <input
            type="text"
            className=" border border-gray-200 rounded-xl py-3 px-12 focus:outline-none md:w-96"
            placeholder="Search something here"
          />
          <span className="absolute inset-y-0 left-30 flex ">
            <button className="px-4 text-3xl text-gray-500 ">
              <BiSearch />
            </button>
          </span>
        </div>
        <div className="w-12 h-12 border border-gray-200 rounded-xl flex justify-center items-center ">
          <button className="px-4 text-3xl text-gray-500 ">
            <HiOutlineAdjustmentsHorizontal />
          </button>
        </div>
      </div>
    </nav>
  );
}
