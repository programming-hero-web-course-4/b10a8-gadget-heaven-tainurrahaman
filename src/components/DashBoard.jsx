import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div className="text-center text-white w-5/6 md:w-4/6 lg:w-3/6 mx-auto my-2 md:my-4">
        <h2 className="font-bold text-[20px] md:text-[32px] mb-2 md:mb-4">
          Dashboard
        </h2>
        <p className="font-normal text-[14px] md:text-[16px] mb-4 md:mb-7">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-3 md:gap-6 pb-4 md:pb-8">
          <Link
            to="/allcart"
            className="px-6 md:px-10 py-1 md:py-2 rounded-full border-2"
          >
            Cart
          </Link>
          <Link
            to="/allwishlist"
            className="px-6 md:px-10 py-1 md:py-2 rounded-full border-2"
          >
            WishList
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
