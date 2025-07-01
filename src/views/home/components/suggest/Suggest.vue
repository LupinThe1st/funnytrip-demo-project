<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

//获取热门建议
const homeStore = useHomeStore();
const { homeSuggestions } = storeToRefs(homeStore);
//点击按钮跳转搜索页面
const router = useRouter();
const onClick = () => {
  router.push({
    path: "/search",
    query: {},
  });
};
</script>
<template>
  <div class="suggest-container">
    <div class="search">关键字/位置/民宿名</div>
    <div class="suggestions">
      <div class="suggestion" v-for="homeSuggestion in homeSuggestions">
        {{ homeSuggestion.tagText.text }}
      </div>
    </div>
    <van-button
      @click="onClick"
      size="large"
      round
      type="success"
      color="#ff9854"
      >开始搜索</van-button
    >
  </div>
</template>
<style lang="less" scoped>
.suggest-container {
  --van-button-large-height: 40px;
}
.search {
  height: 30px;
  padding-left: 10px;
}
.suggestions {
  padding-left: 10px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  .suggestion {
    margin: 0 5px;
    height: 20px;
    background-color: rgba(255, 165, 0, 0.3);
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
  }
}
</style>
