import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <div className="bg-[#9538E2] mx-5 md:mx-10 rounded-2xl ">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
