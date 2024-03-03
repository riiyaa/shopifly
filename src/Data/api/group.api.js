import { GlobalInstance } from "../index";

export const GroupAPI = {
  getDealOfTheDay:async (data) => {
    const request = await GlobalInstance.request({
      url: "/dealsofthday",
      method: "GET",
      data,
    });
    const response = await request.data;
    return response;
  },
  getTopPick:async (data) =>{
    const request = await GlobalInstance.request({
      url: "/topPicks",
      method: "GET",
      data,
    });
    const response = await request.data;
    return response;
  },getCategoriestoBag:async (data) =>{
    const request = await GlobalInstance.request({
      url: "/categoriesToBag",
      method: "GET",
      data,
    });
    const response = await request.data;
    return response;
  },getGiftcards:async (data) =>{
    const request = await GlobalInstance.request({
      url: "/GiftingCards",
      method: "GET",
      data,
    });
    const response = await request.data;
    return response;
  },getDealsOnLatestArival:async (data) =>{
    const request = await GlobalInstance.request({
      url: "/dealsoOnLatestArival",
      method: "GET",
      data,
    });
    const response = await request.data;
    return response;
  },
  getNewInTopBrands:async (data) =>{
    const request = await GlobalInstance.request({
      url: "/newInTopBrands",
      method: "GET",
      data,
    });
    const response = await request.data;
    return response;
  },
  getCategories: async (data) => {
    const request = await GlobalInstance.request({
      url: "/categories",
      method: "GET",
      data,
    });
    const response = await request.data;
    return response;
  },
  getProducts: async () => {
    const request = await GlobalInstance.request({
      url: "/products",
      method: "GET",
    });
    const response = await request.data;
    return response;
  },
  getProductsbyCat: async (id) => {
    const request = await GlobalInstance.request({
      url: `/products/?categoryId=${id}`,
      method: "GET",
    });
    const response = await request.data;
    return response;
  },
};

// export default GroupAPI;
