import myAxios from "../request";
export const getHouseDetail = (houseId) => {
  return myAxios.get({
      url: "/detail/infos",
      params: {
          houseId
      }
  });
};
