<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import useCityStore from "@/stores/modules/city";
import { useRouter } from "vue-router";
//搜索功能
const router = useRouter();
const locationInfo = ref("");
const onCancel = () => {
  router.go(-1);
};
//tab切换存储
const cityStore = useCityStore();
const { activeTab } = storeToRefs(cityStore);
</script>
<template>
  <div class="city-top-container">
    <div class="top">
      <van-search
        v-model="locationInfo"
        show-action
        placeholder="城市/区域/位置"
        @cancel="onCancel"
        shape="round"
      />
      <van-tabs v-model:active="activeTab" color="#ff9854">
        <van-tab
          :name="key"
          :title="value.title"
          v-for="(value, key) in cityStore.cityList"
        ></van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<style lang="less" scoped>
.top {
  position: relative;
  z-index: 2;
}
</style>
