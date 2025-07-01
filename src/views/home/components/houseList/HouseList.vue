<script setup>
import HouseInfoT3 from "@/components/houseInfoT3/HouseInfoT3.vue";
import HouseInfoT9 from "@/components/houseInfoT9/HouseInfoT9.vue";
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

//获取房屋信息
const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
//给house卡片绑定点击事件,跳转详情页,携带id
const router = useRouter();
const onClick = (houseId) => {
  router.push(`/detail/${houseId}`);
};
</script>
<template>
  <div class="house-list-container">
    <h1>热门精选</h1>
    <div class="house-info-container">
      <template v-for="houseInfo in houseList">
        <HouseInfoT9
          v-if="houseInfo.discoveryContentType === 9"
          :house-info="houseInfo"
          @click="onClick(houseInfo.data.houseId)"
        />
        <HouseInfoT3
          v-else="houseInfo.discoveryContentType === 3"
          :house-info="houseInfo"
          @click="onClick(houseInfo.data.houseId)"
        />
      </template>
    </div>
  </div>
</template>
<style lang="less" scoped>
.house-info-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
