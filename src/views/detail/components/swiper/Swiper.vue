<script setup>
import useDetailStore from "@/stores/modules/detail";
import { storeToRefs } from "pinia";
import { computed } from "vue";

//获取轮播图图片数据
const detailStore = useDetailStore();
const { houseDetail } = storeToRefs(detailStore);
//自定义指示器
const picCategory = computed(() => {
  const housePicInfoList =
    houseDetail.value.data?.mainPart.topModule.housePicture.housePics;
  const picCategory = {};
  if (housePicInfoList) {
    let index = 0;
    for (const picInfo of housePicInfoList) {
      if (!(picInfo.title in picCategory)) {
        const emptyIndexArray = [];
        emptyIndexArray.push(index++);
        picCategory[picInfo.title] = emptyIndexArray;
      } else {
        picCategory[picInfo.title].push(index++);
      }
    }
  }
  return picCategory;
});
//提取分类名
const reg = /【(.*)】/;
const category = (title) => {
  return title.match(reg)[1];
};
</script>
<template>
  <div class="swiper-container">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item
        v-for="housePic in houseDetail.data?.mainPart.topModule.housePicture
          .housePics"
      >
        <img class="house-pic" :src="housePic.url" alt="" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <div
            class="category"
            :class="{ active: value.includes(active) }"
            v-for="(value, key) in picCategory"
          >
            {{ category(key) }}
            <span v-show="value.includes(active)">
              {{ value.indexOf(active) + 1 }}/{{ value.length }}
            </span>
          </div>
        </div>
      </template>
    </van-swipe>
  </div>
</template>
<style lang="less" scoped>
.swiper-container {
  .house-pic {
    width: 100%;
  }
  .custom-indicator {
    position: absolute;
    color: white;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    .category {
      margin-right: 5px;
      &.active {
        color: black;
        background-color: #fff;
      }
    }
  }
}
</style>
