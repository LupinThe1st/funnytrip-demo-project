import { defineStore } from "pinia";
import { getCurrentChineseDate, getDateAfterDays } from "@/utils/dateFormat";

const useMainStore = defineStore("main", {
  state: () => ({
    startDate: getCurrentChineseDate(),
    endDate: getDateAfterDays(1),
    isLoading:false
  }),
});
export default useMainStore;
