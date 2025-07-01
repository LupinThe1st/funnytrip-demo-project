import { onMounted, onUnmounted, ref } from "vue";
import _ from "lodash";

const useListenScroll = (elRef) => {
  let el = window;
  const isScrollToBottom = ref(false);
  const scrollTop = ref(false);
  const clientHeight = ref(false);
  const scrollHeight = ref(false);
  const scroll = _.throttle(() => {
    if (el === window) {
      scrollTop.value = document.documentElement.scrollTop;
      clientHeight.value = document.documentElement.clientHeight;
      scrollHeight.value = document.documentElement.scrollHeight;
    } else {
      scrollTop.value = el.scrollTop;
      clientHeight.value = el.clientHeight;
      scrollHeight.value = el.scrollHeight;
    }
    if (Math.ceil(scrollTop.value) + clientHeight.value >= scrollHeight.value) {
      //到底
      isScrollToBottom.value = true;
    }
  }, 300);
  onMounted(() => {
    if (elRef) {
      el = elRef.value;
    }
    el.addEventListener("scroll", scroll);
  });
  onUnmounted(() => {
    el.removeEventListener("scroll", scroll);
  });
  return {
    isScrollToBottom,
    scrollTop,
    scrollHeight,
    clientHeight,
  };
};
export default useListenScroll;
