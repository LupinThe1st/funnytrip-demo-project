<script setup>
defineProps({
  headerText: {
    type: String,
    default: "默认标题",
  },
  hasMore: {
    type: Boolean,
    default: true,
  },
  moreText: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="detail-section-container">
    <div class="section">
      <div class="header">
        <h2 class="title">{{ headerText }}</h2>
      </div>
      <div class="content">
        <slot>默认内容</slot>
      </div>
      <div class="footer" v-if="moreText.length">
        <span class="more">
          {{ moreText }}
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.section {
  padding: 0 15px;
  margin-top: 12px;
  background-color: #fff;

  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 20px;
      color: #333;
    }
  }

  .content {
    padding: 8px 0;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    height: 44px;
    line-height: 44px;
    color: #ff9645;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
