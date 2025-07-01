<script setup>
import useDetailStore from "@/stores/modules/detail";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import DetailSection from "@/components/detailSection/DetailSection.vue";

//获取数据
const detailStore = useDetailStore();
const { houseDetail } = storeToRefs(detailStore);
const orderRules = computed(() => {
  return houseDetail.value.data?.mainPart.dynamicModule.rulesModule.orderRules;
});
</script>
<template>
  <div class="notice-container">
    <div class="notice">
      <DetailSection header-text="预订须知">
        <div class="notice">
          <template v-for="(item, index) in orderRules">
            <div class="item">
              <span class="title">{{ item.title }}</span>
              <span class="intro">{{ item.introduction }}</span>
              <span class="tip" v-if="item.tips">查看说明</span>
            </div>
          </template>
        </div>
      </DetailSection>
    </div>
  </div>
</template>
<style lang="less" scoped>
.notice {
  .item {
    display: flex;
    margin: 10px 0 20px;
    font-size: 12px;

    .title {
      width: 64px;
      color: #666;
    }

    .intro {
      flex: 1;
      color: #333;
    }
  }
}
</style>
