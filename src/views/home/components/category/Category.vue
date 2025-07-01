<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>
<template>
  <div class="categories-container">
    <div class="category" v-for="category in categories">
      <img :src="category.pictureUrl" alt="" />
      <div>{{ category.title }}</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.categories-container {
  height: 65px;
  display: flex;
  overflow-x: auto;
  text-align: center;
  &::-webkit-scrollbar{
    display: none;
  }
  .category {
    width: 60px;
    height: 65px;
    flex-shrink: 0;
    img {
      height: 40px;
    }
  }
}
</style>
