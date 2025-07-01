<script setup>
defineProps({
  houseInfo: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="house-info-T9-container">
    <img :src="houseInfo.data.image.url" alt="" />
    <div class="info">
      <div>{{ houseInfo.data.houseName }}</div>
      <div class="info-bottom">
        <van-rate
          color="white"
          readonly
          allow-half
          :model-value="+houseInfo.data.commentScore"
        />
        <div class="price">¥{{ houseInfo.data.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.house-info-T9-container {
  width: 50%;
  height: 245px;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  img {
    width: 100%;
    vertical-align: bottom;
  }
  .info {
    background-color: rgba(0, 0, 0, 0.3);
    border: 10px solid white;
    border-top: none;
    color: white;
    position: absolute;
    width: 100%;
    left: 0;
    box-sizing: border-box;
    bottom: 0;
    .info-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
