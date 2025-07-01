import { getHomeSuggestions, getCategories, getHouseList } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    homeSuggestions: [],
    categories: [],
    houseList: [],
    currentPage: 1,
  }),
  actions: {
    async getHomeSuggestions() {
      const response = await getHomeSuggestions();
      this.homeSuggestions = response.data;
    },
    async getCategories() {
      const response = await getCategories();
      this.categories = response.data;
    },
    async getHouseList() {
      const response = await getHouseList(this.currentPage++);
      this.houseList.push(...response.data);
    },
  },
});
export default useHomeStore;
