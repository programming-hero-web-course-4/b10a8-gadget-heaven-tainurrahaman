import { useLoaderData, useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import React from "react";
import { addToCartList } from "../utility/addToCartDb";
import { addToWishlist } from "../utility/addToWishlistDb";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GadgetDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();

  const product = data.find((product) => product.product_id === id);
  const {
    specification,
    rating,
    product_title,
    product_image,
    price,
    description,
    availability,
  } = product;

  const handleAddList = (id) => {
    addToCartList(id);
    toast("This item added to your Cart");
  };

  const handleWishList = (id) => {
    addToWishlist(id);
    toast("This item added to your WishList");
  };

  return (
    <div className="relative pb-80 mb-80 ">
      <div className="text-center text-white w-10/12 lg:w-8/12 mx-auto space-y-1 md:space-y-3">
        <h2 className="font-bold text-[22px] md:text-[32px]">
          Product Details
        </h2>
        <p className="text-[12px] md:text-[16px] font-normal px-3 md:px-24">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-11/12 md:w-5/6 mx-auto bg-[#1D232A] flex md:flex-row justify-center items-start my-4 md:my-10 gap-2 md:gap-6 lg:gap-8 absolute left-4 md:left-16 lg:left-28 rounded-xl text-white p-2 md:p-6 border border-purple-300">
        <div className=" w-2/5 rounded-2xl flex items-start">
          <img
            src={product_image}
            className="rounded-xl shadow-2xl w-[300px] lg:max-w-sm h-[280px] lg:h-[350px]"
          />
        </div>
        <div className="w-3/5 flex flex-col items-start h-full pl-2 md:p-0 space-y-1 md:space-y-3">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
            {product_title}
          </h1>
          <p className="text-[16px] md:text-[20px] font-semibold">
            Price : ${price}
          </p>
          <button className="btn btn-xs mr-4 text-green-400 bg-green-100 font-semibold md:font-bold text-[12px] md:text-[16px]">
            {`${availability ? "In Stock" : "Stock Out"} `}
          </button>
          <p className="font-normal text-[12px] md:text-[18px]">
            {description}
          </p>
          <div>
            <p className="font-bold text-[15px] md:text-[18px] mb-2 md:mb-4">
              Specification:
            </p>
            <p className="text-[10px] md:text-[16px]">
              {specification.map((spec, index) => (
                <React.Fragment key={index}>
                  . {spec}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
          <p className="font-bold text-[15px] md:text-[18px] flex items-center gap-1 ">
            Rating
            <span className="text-yellow-300">
              <FaStar />
            </span>
          </p>
          <div className="flex  items-center gap-4 mb-6 text-[12px] md:text-[18px]">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <button className="bg-gray-800 px-3 py-1 rounded-xl">
              {rating}
            </button>
          </div>
          <div className="flex items-center gap-4 ">
            <div>
              <button
                onClick={() => handleAddList(product_id)}
                className="flex items-center bg-[#9538E2] py-2 px-4 rounded-full gap-2 font-normal md:font-bold text-[12px] md:text-[18px]"
              >
                Add to Cart
                <span className="font-semibold md:font-bold">
                  <BsCart3 />
                </span>
              </button>
            </div>
            <div className="border-2 rounded-full  opacity-50 font-bold text-[16px] md:text-[24px]">
              <button
                onClick={() => handleWishList(product_id)}
                className="p-2"
              >
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default GadgetDetails;
