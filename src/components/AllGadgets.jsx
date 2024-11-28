import { useEffect, useState } from "react";
import GadgetCart from "./GadgetCart";

const AllGadgets = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("./gadgetData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <div className="bg-[#1D232A] pt-[125px] md:pt-80 lg:pt-96 pb-10 md:pb-16 lg:pb-24">
      <h3 className="font-bold text-[22px] md:text-[40px] text-white text-center mb-8 lg:mb-16">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="w-full md:w-11/12 lg:w-10/12 mx-auto flex gap-2 md:gap-6 ">
        <div className="w-1/5 md:w-1/6 lg:w-1/5 p-1 md:p-2 lg:p-6 bg-[#403546] rounded-xl md:rounded-2xl space-y-5 text-center lg:text-start ">
          <p className="rounded-3xl bg-[#1D232A] p-2 md:py-3 md:px-3 lg:px-5 font-normal md:font-medium text-[12px] md:text-[16px] lg:text-[18px]">
            All Product
          </p>
          <p className="rounded-3xl bg-[#1D232A] p-2 md:py-3 md:px-3 lg:px-5 font-normal md:font-medium text-[12px] md:text-[16px] lg:text-[18px]">
            Laptops
          </p>
          <p className="rounded-3xl bg-[#1D232A] p-2 md:py-3 md:px-3 lg:px-5 font-normal md:font-medium text-[12px] md:text-[16px] lg:text-[18px]">
            Phones
          </p>
          <p className="rounded-3xl bg-[#1D232A] p-2 md:py-3 md:px-3 lg:px-5 font-normal md:font-medium text-[12px] md:text-[16px] lg:text-[18px]">
            Accessories
          </p>
          <p className="rounded-3xl bg-[#1D232A] p-2 md:py-3 md:px-3 lg:px-5 font-normal md:font-medium text-[12px] md:text-[16px] lg:text-[18px]">
            Smart Watches
          </p>
          <p className="rounded-3xl bg-[#1D232A] p-2 md:py-3 md:px-3 lg:px-5 font-normal md:font-medium text-[12px] md:text-[16px] lg:text-[18px]">
            MacBook
          </p>
          <p className="rounded-3xl bg-[#1D232A] p-2 md:py-3 md:px-3 lg:px-5 font-normal md:font-medium text-[12px] md:text-[16px] lg:text-[18px]">
            Iphone
          </p>
        </div>
        <div className="w-4/5 md:w-5/6 lg:w-4/5 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 ">
          {gadgets.map((gadget) => (
            <GadgetCart key={gadget.product_id} gadget={gadget}></GadgetCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGadgets;
