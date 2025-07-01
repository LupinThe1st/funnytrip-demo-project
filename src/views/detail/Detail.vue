<script setup>
import { computed, reactive, watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useDetailStore from "@/stores/modules/detail";
import Swiper from "./components/swiper/Swiper.vue";
import Info from "./components/info/Info.vue";
import Facility from "./components/facility/Facility.vue";
import Landlord from "./components/landlord/Landlord.vue";
import Comment from "./components/comment/Comment.vue";
import Notice from "./components/notice/Notice.vue";
import Intro from "./components/intro/Intro.vue";
import NavBar from "./components/navBar/NavBar.vue";
import useListenScroll from "@/hooks/useListenScroll";

//点击左侧导航跳转回主页
const router = useRouter();
const onClickLeft = () => {
  router.back();
};
//发送网络请求
const route = useRoute();
const detailStore = useDetailStore();
detailStore.getHouseDetail(route.params.houseId);
//判断顶部导航栏是否出现
const { scrollTop } = useListenScroll();
const isShowNavBar = computed(() => {
  return scrollTop.value > 250;
});
//点击导航栏匹配窗口移动到相应位置
const elRef = reactive({});
//导航栏动态标题
const title = computed(() => Object.keys(elRef));
const getElRef = (value) => {
  if (value) elRef[value.$el.getAttribute("name")] = value.$el;
};
let isClick = false;
let currentDistance = 0;
const onClickTap = (index) => {
  isClick = true;
  const distance = elRef[Object.keys(elRef)[index]].offsetTop - 44;
  currentDistance = distance;
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};
//根据滚动位置动态改变导航栏的tab
const currentIndex = ref();
watch(scrollTop, (newValue) => {
  if (currentDistance === newValue) {
    isClick = false;
  }
  if (isClick) {
    return;
  }
  const elOffsetTop = Object.values(elRef).map((el) => el.offsetTop);
  let index = elOffsetTop.length - 1;
  for (let i = 0; i < elOffsetTop.length; i++) {
    if (elOffsetTop[i] > newValue + 44) {
      index = i - 1;
      break;
    }
  }
  currentIndex.value = index;
});
</script>
<template>
  <div class="detail-container">
    <NavBar
      @onClickTap="onClickTap"
      v-if="isShowNavBar"
      :tab-name-arr="title"
      :current-index="currentIndex"
    />
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <Swiper />
    <Info name="详情" :ref="getElRef" />
    <Facility name="房屋设施" :ref="getElRef" />
    <Landlord name="房东介绍" :ref="getElRef" />
    <Comment name="热门评论" :ref="getElRef" />
    <Notice />
    <Intro />
    <div class="footer">
      <img src="@/assets/imgs/detail/icon_ensure.png" alt="" />
      <div class="text">Funny Trip, 永无止境!</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.detail-container {
  --van-nav-bar-title-text-color: var(--primary-color);
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}
</style>
