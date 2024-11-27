const DashBoard = () => {
  return (
    <div>
      <div className="text-center text-white w-3/6 mx-auto">
        <h2 className="font-bold text-[32px] mb-4">Dashboard</h2>
        <p className="font-normal text-[16px] mb-7">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-6 pb-8">
          <button className="px-10 py-2 rounded-full border-2">Cart</button>
          <button className="px-10 py-2 rounded-full border-2">WishList</button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
