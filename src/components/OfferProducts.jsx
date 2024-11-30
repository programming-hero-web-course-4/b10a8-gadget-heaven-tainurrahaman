import { useEffect, useState } from "react";
import OfferProduct from "./OfferProduct";

const OfferProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./gadgetData.json")
      .then((res) => res.json())
      .then((data) => {
        const offerAllProduct = data.filter((product) => product.price > 1000);
        setProducts(offerAllProduct);
      });
  }, []);
  console.log(products);

  return (
    <div className="bg-[#1D232A] mb-20 pt-5 md:pt-20 text-center text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-5 md:mb-10">
        Catch up the Offer Now
      </h2>
      <h4 className="mb-5 md:mb-10 text-xl md:text-3xl font-semibold">
        This offer will be end very soon
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <OfferProduct
            key={product.product_id}
            product={product}
          ></OfferProduct>
        ))}
      </div>
    </div>
  );
};

export default OfferProducts;
