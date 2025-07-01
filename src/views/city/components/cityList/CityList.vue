<script setup>
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

const cityStore = useCityStore();
const { activeTab } = storeToRefs(cityStore);
//获取当前选中的城市组
const cityGroup = computed(() => {
  return cityStore.cityList[activeTab.value];
});
//列表索引
const indexList = computed(() => {
  const indexList = ["#"];
  cityGroup.value?.cities.forEach((item) => {
    indexList.push(item.group);
  });
  return indexList;
});
//首页更新点击的城市
const router = useRouter();
const showCity = (currentCity) => {
  cityStore.currentCity = currentCity;
  //切换到home
  router.back();
};
</script>
<template>
  <div class="city-list-container">
    <div class="city-list">
      <van-index-bar highlight-color="#ff9854" :index-list="indexList">
        <van-index-anchor index="热门" />
        <div class="hot-city-list">
          <div
            @click="showCity(hotCity)"
            class="hot-city"
            v-for="hotCity in cityGroup?.hotCities"
          >
            {{ hotCity.cityName }}
          </div>
        </div>
        <template v-for="cityListGroup in cityGroup?.cities">
          <van-index-anchor :index="cityListGroup.group" />
          <van-cell
            @click="showCity(cityList)"
            :title="cityList.cityName"
            v-for="cityList in cityListGroup.cities"
            :key="cityList.cityId"
          />
        </template>
      </van-index-bar>
    </div>
  </div>
</template>
<style lang="less" scoped>
.city-list {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
.hot-city-list {
  display: flex;
  flex-wrap: wrap;
}
.hot-city {
  margin: 2px 5px;
  width: 60px;
  height: 20px;
  background-color: rgba(255, 165, 0, 0.3);
  border-radius: 10px;
  text-align: center;
  line-height: 20px;
}
</style>
