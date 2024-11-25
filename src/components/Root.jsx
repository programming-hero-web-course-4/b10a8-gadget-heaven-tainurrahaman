import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="bg-[#9538E2] mx-5 md:mx-10 rounded-2xl ">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
