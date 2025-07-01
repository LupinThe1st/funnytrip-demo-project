<script setup>
defineProps({
  houseInfo: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="house-info-T3-container">
    <img :src="houseInfo.data.image.url" alt="" />
    <div class="info">
      <div class="location">
        <img src="@/assets/imgs/home/location.png" alt="" />
        <div>{{ houseInfo.data.location }}</div>
      </div>
      <div class="desc">{{ houseInfo.data.houseName }}</div>
      <div class="info-bottom">
        <div class="final-price">¥{{ houseInfo.data.finalPrice }}</div>
        <div class="original-price">¥{{ houseInfo.data.productPrice }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.house-info-T3-container {
  height: 245px;
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
  img {
    width: 100%;
    vertical-align: bottom;
  }
  .info {
    .location {
      margin-top: 3px;
      display: flex;
      padding-left: 2px;
      align-items: center;
      img {
        width: 20px;
      }
    }
    .desc {
      margin-top: 5px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3; /* 限制显示行数 */
      line-clamp: 3;
      overflow: hidden;
      height: 50px;
      text-overflow: ellipsis; /* 超出部分显示省略号 */
      word-break: break-all; /* 允许单词断行（可选） */
    }
    .info-bottom {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .final-price {
        color: var(--primary-color);
      }
      .original-price {
        text-decoration: line-through;
      }
    }
  }
}
</style>
