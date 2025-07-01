<script setup>
import { computed, onActivated, ref, watch } from "vue";
import useHomeStore from "@/stores/modules/home";
import DateSelect from "./components/dateSelect/DateSelect.vue";
import HomeSearch from "./components/homeSearch/HomeSearch.vue";
import Suggest from "./components/suggest/Suggest.vue";
import TopBar from "./components/topBar/TopBar.vue";
import Category from "./components/category/Category.vue";
import HouseList from "./components/houseList/HouseList.vue";
import useListenScroll from "@/hooks/useListenScroll";
import SearchBar from "@/components/searchBar/SearchBar.vue";

//发送网络请求
const homeStore = useHomeStore();
homeStore.getHomeSuggestions();
homeStore.getCategories();
homeStore.getHouseList();

//监听页面滚动到底,发送请求加载房屋信息
const homeContainer = ref();
const { isScrollToBottom, scrollTop } = useListenScroll(homeContainer);
watch(isScrollToBottom, (newValue) => {
  if (newValue) {
    homeStore.getHouseList().then(() => {
      isScrollToBottom.value = false;
    });
  }
});
//是否顶部展示搜索框
const isShowSearchBar = computed(() => {
  return scrollTop.value > 350;
});
//从其他页面回到home,滚动到上次离开的位置
onActivated(() => {
  homeContainer.value.scrollTo({
    top: scrollTop.value,
  });
});
</script>
<template>
  <div class="home-container" ref="homeContainer">
    <div class="search-bar" v-show="isShowSearchBar">
      <SearchBar />
    </div>
    <TopBar />
    <div class="img-container">
      <img src="@/assets/imgs/home/banner.webp" alt="" />
    </div>
    <HomeSearch />
    <DateSelect />
    <Suggest />
    <Category class="category" />
    <HouseList />
  </div>
</template>
<style lang="less" scoped>
.home-container {
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
  padding-bottom: 50px;
  // margin-bottom: 50px;
  .search-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 60px;
    backdrop-filter: blur(9px);
    background: hsla(0, 0%, 100%, 0.1);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-container img {
    width: 100%;
    vertical-align: bottom;
  }
  .category {
    margin-top: 10px;
  }
}
</style>
