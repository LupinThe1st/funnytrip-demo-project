<script setup></script>
<template>
  <div class="loading-container">
    <div class="bg">
      <img src="@/assets/imgs/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>
<style lang="less" scoped>
.loading-container {
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .bg {
    width: 100px;
    height: 100px;
    background: url("@/assets/imgs/home/loading-bg.png") center;
    background-color: #bfa;
    border-radius: 50%;
    img {
      width: 100px;
    }
  }
}
</style>
