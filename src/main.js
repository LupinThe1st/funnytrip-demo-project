import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/index.css";
import "normalize.css";
import router from "./router";
import pinia from "./stores";


createApp(App)
    .use(router)
    .use(pinia)
    .mount("#app");
