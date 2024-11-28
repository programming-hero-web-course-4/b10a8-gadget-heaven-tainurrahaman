import { Link } from "react-router-dom";

const GadgetCart = ({ gadget }) => {
  const { product_image, product_title, price, product_id } = gadget;

  return (
    <div className=" bg-[#403546]  p-2 md:p-3 lg:p-5 flex flex-col rounded-2xl">
      <div className="">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl h-[100px] md:h-[160px] lg:h-[200px] w-[170px] md:w-[280px] "
        />
      </div>
      <div className="pt-3 md:pt-5 items-center space-y-1 md:space-y-3 flex-grow mb-3 md:mb-5">
        <h2 className="card-title font-semibold text-[16px] md:text-[22px]">
          {product_title}
        </h2>
        <p className="font-medium text-[14px] md:text-[16px]">
          Price: {price}$
        </p>
      </div>
      <div className="card-actions justify-center">
        <Link
          to={`/gadgets/${product_id}`}
          className="text-white py-2 px-3 text-[10px] md:text-[16px] rounded-xl bg-gray-500"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default GadgetCart;
