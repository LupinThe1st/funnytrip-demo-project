<script setup>
import { ref } from "vue";
import {
  dayjsFormatChineseDate,
  getDaysDiffBetweenChineseDates,
} from "@/utils/dateFormat";
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from "pinia";

//日期选择
const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);
const intervalDays = ref(1);
const showCalender = ref(false);
const onConfirm = (values) => {
  const [start, end] = values;
  showCalender.value = false;
  startDate.value = dayjsFormatChineseDate(start);
  endDate.value = dayjsFormatChineseDate(end);
  intervalDays.value = getDaysDiffBetweenChineseDates(
    startDate.value,
    endDate.value
  );
};
</script>
<template>
  <div>
    <div @click="showCalender = !showCalender" class="select-date-container">
      <div class="start-container">
        <span>入住</span>
        <span>{{ startDate }}</span>
      </div>
      <div class="total-days">共{{ intervalDays }}晚</div>
      <div class="end-container">
        <span>离店</span>
        <span>{{ endDate }}</span>
      </div>
    </div>
    <van-calendar
      color="#ff9854"
      v-model:show="showCalender"
      type="range"
      @confirm="onConfirm"
    />
    <div class="price-number-limit-container">
      <div class="price-limit">价格不限</div>
      <div class="number-limit">人数不限</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.select-date-container {
  height: 60px;
  display: flex;
  justify-content: space-around;
  .start-container {
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .total-days {
    height: 60px;
    line-height: 60px;
  }
  .end-container {
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.price-number-limit-container {
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
}
</style>
