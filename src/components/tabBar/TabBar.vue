<script setup>
import tabBar from "@/assets/localData/tabBar";
import { getAssetsImage } from "@/utils/loadAssets";
</script>
<template>
  <van-tabbar route active-color="#ff9854">
    <van-tabbar-item v-for="item in tabBar" :to="item.path">
      <span>{{ item.text }}</span>
      <template #icon="props">
        <img
          :src="
            props.active
              ? getAssetsImage(item.imageActive)
              : getAssetsImage(item.image)
          "
        />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<style lang="less" scoped>
img {
  height: 25px;
}
.van-tabbar {
  backdrop-filter: blur(9px);
  background: hsla(0, 0%, 100%, 0.1);
}
:deep(.van-tabbar-item) {
  font-size: 14px;
}
:deep(.van-tabbar-item--active) {
  background-color: transparent;
}
</style>
