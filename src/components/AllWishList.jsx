import React from "react";
import DashBoard from "./DashBoard";

const AllWishList = () => {
  return (
    <div>
      <DashBoard></DashBoard>
      <div className="bg-[#1D232A] py-9 flex justify-between text-white">
        <h4 className="font-bold text-[24px]">WishList</h4>
      </div>
    </div>
  );
};

export default AllWishList;
