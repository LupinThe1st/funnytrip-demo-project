<script setup>
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from "pinia";
import { convertChineseDateToDots } from "@/utils/dateFormat";

//获取开始/结束时间
const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);
</script>
<template>
  <div class="search-bar-container">
    <div class="date-container">
      <div class="startDate">住{{ convertChineseDateToDots(startDate) }}</div>
      <div class="endDate">离{{ convertChineseDateToDots(endDate) }}</div>
    </div>
    <div class="search-container">
      <van-search placeholder="关键字/位置/民宿" />
    </div>
  </div>
</template>
<style lang="less" scoped>
.search-bar-container {
  width: 250px;
  background-color: #f7f8fa;
  justify-content: center;
  border-radius: 10px;
  height: 35px;
  display: flex;
  .search-container {
    --van-search-input-height: 35px;
    --van-search-padding: 0;
    :deep(.van-search__field) {
      padding: 0;
    }
    :deep(.van-search__content) {
      padding-left: 0;
    }
  }
  .date-container {
    width: 60px;
    height: 35px;
    background-color: #f7f8fa;
    color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
