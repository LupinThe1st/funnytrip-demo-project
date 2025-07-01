<script setup>
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

//路由切换
const router = useRouter();
const changeCity = () => {
  router.push("/city");
};
//拿到当前城市
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
</script>
<template>
  <div class="home-search-container">
    <div class="location">
      <div @click="changeCity" class="city">{{ currentCity.cityName }}</div>
      <div class="my-location">
        <span>我的位置</span>
        <img src="@/assets/imgs/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.location {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .my-location {
    height: 50px;
    display: flex;
    align-items: center;
    img {
      height: 20px;
    }
  }
}
</style>
