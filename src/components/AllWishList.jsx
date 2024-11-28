import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import { useLoaderData } from "react-router-dom";
import { getToWishList } from "../utility/addToWishlistDb";
import WishList from "./WishList";

const AllWishList = () => {
  const allData = useLoaderData();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlistStr = getToWishList();
    const storedWishlist = storedWishlistStr.map((id) => parseInt(id));
    const wishGadgetList = allData.filter((cart) =>
      storedWishlist.includes(cart.product_id)
    );
    setWishlist(wishGadgetList);
  }, []);

  return (
    <div>
      <DashBoard></DashBoard>
      <div className="bg-[#1D232A] py-4 md:py-9 flex justify-between text-white">
        <h4 className="font-bold text-[16px] md:text-[24px]">WishList</h4>
      </div>
      <div className="bg-[#1D232A] mb-10 md:mb-48">
        {wishlist.map((cart) => (
          <WishList key={cart.product_id} cart={cart}></WishList>
        ))}
      </div>
    </div>
  );
};

export default AllWishList;
