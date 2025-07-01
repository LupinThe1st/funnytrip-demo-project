<script setup>
import { useRoute } from "vue-router";
import TabBar from "./components/tabBar/TabBar.vue";
import Loading from "./components/loading/Loading.vue";
import useMainStore from "./stores/modules/main";
const route = useRoute();
//获取网络是否加载标识
const mainStore = useMainStore();
</script>
<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive include="Home">
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
  <TabBar v-show="!route.meta.tabBarHidden" />
  <Loading v-show="mainStore.isLoading" />
</template>
<style scoped></style>
