import { getHouseDetail } from "@/services";
import { defineStore } from "pinia";

const useDetailStore = defineStore("detail", {
  state: () => ({
    houseDetail: {},
  }),
  actions: {
    async getHouseDetail(houseId) {
      const response = await getHouseDetail(houseId);
      this.houseDetail = response;
    },
  },
});
export default useDetailStore;