import { MdDeleteForever } from "react-icons/md";

const WishList = ({ cart }) => {
  const { product_image, product_title, description, price } = cart;

  return (
    <div className=" bg-base-200 rounded-2xl mb-6">
      <div className="flex justify-start p-6 gap-8 mr-96 text-white">
        <img src={product_image} className="w-[200px] rounded-lg shadow-2xl" />
        <div className="flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <div className="text-red-700 text-[24px]">
              <MdDeleteForever />
            </div>
          </div>
          <p className="py-6">{description}</p>
          <p className="fonr-semibold text-[20px]">Price : ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default WishList;
