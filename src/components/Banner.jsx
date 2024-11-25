import React from "react";
import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="text-center text-white pb-28 md:pb-56 lg:pb-96 relative">
        <h2 className="text-[20px] md:text-[56px] font-bold px-5 md:px-20 mb-5">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-[16px] font-normal px-10 md:px-56 mb-4 md:mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div>
          <button className="px-7 py-3 rounded-full bg-white text-[#9538E2] font-bold text-[18px]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex justify-center rounded-3xl absolute left-[68px] md:left-36 lg:left-48 bottom-[320px] md:-bottom-[650px] lg:-bottom-[550px]">
        <div className="border-2 rounded-3xl p-2 md:p-5">
          <img
            className="max-w-[250px] md:max-w-xl lg:max-w-4xl rounded-2xl "
            src={bannerImg}
            alt="BannerImage"
          />
        </div>
      </div>
      <h4 className="text-5xl">abcd</h4>
    </div>
  );
};

export default Banner;
