import DashBoard from "./DashBoard";
import { RiSortNumberAsc } from "react-icons/ri";

const AllCart = () => {
  return (
    <div>
      <DashBoard></DashBoard>
      <div className="bg-[#1D232A] py-9 flex justify-between text-white">
        <h4 className="font-bold text-[24px]">Cart</h4>
        <div className="flex gap-4 items-center">
          <h3 className="font-bold text-[24px]">Total cost :</h3>
          <button className="flex items-center gap-2 py-2 px-4 rounded-full border-purple-400 border font-semibold text-[18px]">
            Sort by Price{" "}
            <span>
              <RiSortNumberAsc />
            </span>
          </button>
          <button className="bg-[#A66FD4] py-2 px-4 rounded-full text-[18px]">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCart;
