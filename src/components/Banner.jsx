import React from "react";
import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="text-center text-white">
        <h2 className="text-[56px] font-bold px-20 mb-5">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-[16px] font-normal px-56 mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="px-7 py-3 rounded-full bg-white text-[#9538E2] font-bold text-[18px]">
          Shop Now
        </button>
      </div>
      <div>
        <img src={bannerImg} alt="BannerImage" />
      </div>
    </div>
  );
};

export default Banner;
