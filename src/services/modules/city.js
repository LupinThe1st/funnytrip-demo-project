import myAxios from "../request";
export const getCityList = () => {
  return myAxios.get({
    url: "/city/all",
  });
};
