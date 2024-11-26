const GadgetCart = ({ gadget }) => {
  console.log(gadget);
  const { product_image } = gadget;
  return (
    <div className="card bg-[#403546] shadow-xl p-2 md:p-3 lg:p-5">
      <figure className="">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl h-[100px] md:h-[160px] lg:h-[200px] w-[170px] md:w-[280px] "
        />
      </figure>
      <div className="pt-3 md:pt-5 items-center space-y-2 md:space-y-3">
        <h2 className="card-title font-semibold text-[20px] md:text-[24px]">
          Shoes!
        </h2>
        <p className="font-medium text-[14px] md:text-[16px]">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default GadgetCart;
