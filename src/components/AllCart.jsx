import { useLoaderData } from "react-router-dom";
import DashBoard from "./DashBoard";
import { RiSortNumberAsc } from "react-icons/ri";
import { useEffect, useState } from "react";
import { getAddList } from "../utility/addToCartDb";
import Cart from "./Cart";

const AllCart = () => {
  const allCart = useLoaderData();
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const storedAddList = getAddList();
    const storedAddListStr = storedAddList.map((id) => parseInt(id));
    const addGadgetList = allCart.filter((cart) =>
      storedAddListStr.includes(cart.product_id)
    );
    setCardList(addGadgetList);
  }, []);

  return (
    <div>
      <DashBoard></DashBoard>
      <div className="bg-[#1D232A] py-5 md:py-9 flex justify-between text-white items-center">
        <h4 className="font-bold text-[12px] md:text-[24px]">Cart</h4>
        <div className="flex gap-4 items-center">
          <h3 className="font-bold text-[12px] md:text-[24px]">Total cost :</h3>
          <button className="flex items-center justify-center gap-0 md:gap-2 py-1 md:py-2 px-2 md:px-4 rounded-full border-purple-400 border font-semibold text-[12px] md:text-[18px]">
            Sort by Price
            <span>
              <RiSortNumberAsc />
            </span>
          </button>
          <button className="bg-[#A66FD4] py-1 px-2 md:py-2 md:px-4 rounded-full text-[12px] md:text-[18px]">
            Purchase
          </button>
        </div>
      </div>
      <div className="bg-[#1D232A] mb-10 md:mb-48">
        {cardList.map((cart) => (
          <Cart key={cart.product_id} cart={cart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default AllCart;
