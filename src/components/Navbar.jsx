import brandLogo from "../assets/brandLogo.webp";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between my-5 md:my-10 items-center  w-11/12 mx-auto py-8 ">
      <div className="hidden  md:flex items-center gap-2 ">
        <img className="w-10 h-10 rounded-full" src={brandLogo} alt="" />
        <a className=" text-xl font-bold text-white">Gadget Heaven</a>
      </div>
      <div className="">
        <ul className="flex flex-row text-white font-bold text-[12px] md:text-[16px] gap-4 md:gap-10">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Statistics</a>
          </li>
          <li>
            <a>Dashboard</a>
          </li>
        </ul>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <div className="flex justify-center items-center  p-2 rounded-full w-10 h-10 bg-white text-black">
          <BsCart3 />
        </div>
        <div className="flex justify-center items-center  p-2 rounded-full w-10 h-10 bg-white text-black">
          <FaRegHeart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
