<script setup>
import useDetailStore from "@/stores/modules/detail";
import { storeToRefs } from "pinia";
import { computed } from "vue";

//获取数据
const detailStore = useDetailStore();
const { houseDetail } = storeToRefs(detailStore);
const intro = computed(() => {
  return houseDetail.value.data?.mainPart.introductionModule;
});
</script>
<template>
  <div class="intro-container">
    <div class="intro">
    <h2 class="title">{{ intro?.title }}</h2>
    <div class="content">
      {{ intro?.introduction }}
    </div>
  </div>
  </div>
</template>
<style lang="less" scoped>
.intro {
  padding: 16px 12px;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  .content {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
  }
}
</style>
