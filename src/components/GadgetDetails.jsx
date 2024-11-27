import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

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

  return (
    <div className="relative pb-80 mb-96 ">
      <div className="text-center text-white w-8/12 mx-auto space-y-3">
        <h2 className="font-bold text-[32px]">Product Details</h2>
        <p className="text-[16px] font-normal px-24">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-5/6 mx-auto bg-[#1D232A] flex flex-col md:flex-row justify-center items-center my-10 md:gap-6 lg:gap-8 absolute left-48 rounded-xl text-white">
        <div className="bg-[#FFFFFF] w-2/5 rounded-2xl flex justify-center">
          <img
            src={product_image}
            className="rounded-xl shadow-2xl max-w-sm  h-[300px]"
          />
        </div>
        <div className="w-3/5 flex flex-col items-start h-full p-8 md:p-0 space-y-3">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            {product_title}
          </h1>
          <p className="text-[20px] font-semibold">Price : ${price}</p>
          <button className="btn btn-xs mr-4 text-green-400 bg-green-100 font-bold text-[16px]">
            {`${availability ? "In Stock" : "Stock Out"} `}
          </button>
          <p className="font-normal text-[18px]">{description}</p>
          <div className="flex items-center gap-4 ">
            <div>
              <Link className="flex items-center bg-[#9538E2] py-2 px-4 rounded-full gap-2 font-bold text-[18px]">
                Add to Cart
                <span className="font-bold">
                  <BsCart3 />
                </span>
              </Link>
            </div>
            <div className="border-2 rounded-full p-2 opacity-50 font-bold text-[24px]">
              <FaRegHeart />
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {/* <div>
            {specification.map((tag, idx) => (
              <button key={idx} className="btn btn-xs mr-4  text-green-400">
                {tag}
              </button>
            ))}
          </div> */}
          </div>
          <hr />
          {/* <div className="flex gap-14 mb-8">
          <div className="space-y-2">
            <p>Number of Pages :</p>
            <p>Publisher :</p>
            <p>Year of Publishing :</p>
            <p>Rating :</p>
          </div>
          <div className="font-bold space-y-2">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div> */}
          {/* <div className="flex mb-5 gap-4">
          <button
            onClick={() => handleReadList(bookId)}
            className="btn btn-neutral"
          >
            Mark As Read
          </button>
          <button
            onClick={() => handleWishList(bookId)}
            className="btn btn-accent"
          >
            Add to WishList
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
