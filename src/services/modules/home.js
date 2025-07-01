import myAxios from "../request";
export const getHomeSuggestions = () => {
  return myAxios.get({
    url: "/home/hotSuggests",
  });
};
export const getCategories = () => {
  return myAxios.get({
    url: "/home/categories",
  });
};
export const getHouseList = (currentPage) => {
  return myAxios.get({
    url: "home/houselist",
    params: {
      page:currentPage
    }
  });
};
