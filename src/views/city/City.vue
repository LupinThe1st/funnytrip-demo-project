<script setup>
import useCityStore from "@/stores/modules/city";
import CityList from "./components/cityList/CityList.vue";
import CityTop from "./components/cityTop/CityTop.vue";
import { storeToRefs } from "pinia";

//切换CityList组件,通过activeTab
const cityStore = useCityStore();
cityStore.getCityList();
const { activeTab, cityList } = storeToRefs(cityStore);
</script>
<template>
  <div class="city-container">
    <CityTop />
    <CityList v-for="(_, key) in cityList" v-show="key === activeTab" />
  </div>
</template>
<style lang="less" scoped></style>
