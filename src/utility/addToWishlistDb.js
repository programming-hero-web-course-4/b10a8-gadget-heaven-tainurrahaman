const getToWishList = () => {
  const getWishListStr = localStorage.getItem("wish-list");
  if (getWishListStr) {
    const getWishList = JSON.parse(getWishListStr);
    return getWishList;
  } else {
    return [];
  }
};

const addToWishlist = (id) => {
  const storedWishlist = getToWishList();
  if (storedWishlist.includes(id)) {
    return;
  } else {
    storedWishlist.push(id);
    const storedWishlistStr = JSON.stringify(storedWishlist);
    localStorage.setItem("wish-list", storedWishlistStr);
  }
};

export { addToWishlist, getToWishList };
