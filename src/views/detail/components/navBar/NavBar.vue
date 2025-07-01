<script setup>
defineProps({
  tabNameArr: {
    type: Array,
    default: () => ["tab1", "tab2", "tab3"],
  },
  currentIndex: {
    type: Number,
    default: 0,
  },
});
//绑定onClickTa事件
const emits = defineEmits(["onClickTap"]);
const onClickTab = ({ name: index }) => {
  emits("onClickTap", index);
};
</script>
<template>
  <div class="nav-bar-container">
    <van-tabs @click-tab="onClickTab" :active="currentIndex">
      <van-tab :name="index" :title="tab" v-for="(tab, index) in tabNameArr" />
    </van-tabs>
  </div>
</template>
<style lang="less" scoped>
.nav-bar-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  :deep(.van-tabs__nav) {
    backdrop-filter: blur(9px);
    background: hsla(0, 0%, 100%, 0.1);
  }
  :deep(.van-tab) {
    color: rgb(68, 68, 68);
  }
}
</style>
