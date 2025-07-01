import { getCityList } from "@/services";
import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    cityList: {},
    activeTab: "",
    currentCity: { cityName:"天津"},
  }),
  actions: {
    async getCityList() {
      const response = await getCityList();
      this.cityList = response.data;
    },
  },
});
export default useCityStore;
