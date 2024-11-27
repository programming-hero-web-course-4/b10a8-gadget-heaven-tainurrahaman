import { Link } from "react-router-dom";

const GadgetCart = ({ gadget }) => {
  const { product_image, product_title, price, product_id } = gadget;
  console.log(gadget);

  return (
    <div className="card bg-[#403546] shadow-xl p-2 md:p-3 lg:p-5 ">
      <figure className="">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl h-[100px] md:h-[160px] lg:h-[200px] w-[170px] md:w-[280px] "
        />
      </figure>
      <div className="pt-3 md:pt-5 items-center space-y-2 md:space-y-3 ">
        <h2 className="card-title font-semibold text-[20px] md:text-[22px]">
          {product_title}
        </h2>
        <p className="font-medium text-[14px] md:text-[16px]">
          Price: {price}$
        </p>
        <div className="card-actions justify-center">
          <Link to={`/gadgets/${product_id}`} className="btn btn-primary ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GadgetCart;
