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
      <h3 className="font-bold text-[40px] text-white text-center mb-8">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="w-10/12 mx-auto flex">
        <div className="w-1/5 ">
          <p>All Product</p>
          <p>Laptops</p>
          <p>Phones</p>
          <p>Accessories</p>
          <p>Smart Watches</p>
          <p>MacBook</p>
          <p>Iphone</p>
        </div>
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-3 gap-6">
          {gadgets.map((gadget) => (
            <GadgetCart key={gadget.product_id} gadget={gadget}></GadgetCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGadgets;
