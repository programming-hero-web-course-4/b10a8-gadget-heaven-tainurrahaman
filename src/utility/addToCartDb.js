const getAddList = () => {
  const storeAddListStr = localStorage.getItem("add-list");
  if (storeAddListStr) {
    const storeAddList = JSON.parse(storeAddListStr);
    return storeAddList;
  } else {
    return [];
  }
};

const addToCartList = (id) => {
  const storedAddList = getAddList();
  if (storedAddList.includes(id)) {
    return;
  } else {
    storedAddList.push(id);
    const storedAddListStr = JSON.stringify(storedAddList);
    localStorage.setItem("add-list", storedAddListStr);
  }
};

export { addToCartList, getAddList };
