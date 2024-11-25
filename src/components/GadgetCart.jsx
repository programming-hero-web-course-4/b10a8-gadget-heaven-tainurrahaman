const GadgetCart = ({ gadget }) => {
  console.log(gadget);
  const { product_image } = gadget;
  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <figure className="">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl h-[200px] w-[280px] "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default GadgetCart;
