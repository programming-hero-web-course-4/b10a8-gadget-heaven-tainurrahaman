import { MdDeleteForever } from "react-icons/md";

const WishList = ({ cart }) => {
  const { product_image, product_title, description, price } = cart;

  return (
    <div className=" bg-base-200 rounded-2xl mb-6">
      <div className="flex justify-start p-3 md:p-6 gap-4 md:gap-8 mr-2 md:mr-48 lg:mr-96 text-white">
        <img
          src={product_image}
          className="w-[130px] md:w-[200px] h-[140px] md:h-[200px] lg:h-auto rounded-lg shadow-2xl"
        />
        <div className="flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <h1 className="text-[16px] md:text-xl lg:text-2xl font-bold">
              {product_title}
            </h1>
            <div className="text-red-700 text-[16px] md:text-xl lg:text-[24px]">
              <MdDeleteForever />
            </div>
          </div>
          <p className="py-2 md:py-6 text-[12px] md:text-[18px]">
            {description}
          </p>
          <p className="fonr-semibold text-[14px] md:text-[16px] lg:text-[20px]">
            Price : ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishList;
