import axios from "axios";
import { baseURL, timeout } from "./config";
import useMainStore from "@/stores/modules/main";

class MyRequest {
  constructor(baseURL, timeout = 10000) {
    this.myAxios = axios.create({ baseURL, timeout });
    const mainStore = useMainStore();
    this.myAxios.interceptors.request.use(
      (config) => {
        //修改是否加载标识
        mainStore.isLoading = true;
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.myAxios.interceptors.response.use(
      (res) => {
        mainStore.isLoading = false;
        return res;
      },
      (err) => {
        mainStore.isLoading = false;
        return err;
      }
    );
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.myAxios
        .request(config)
        .then((response) => resolve(response.data))
        .catch((err) => reject(err));
    });
  }
  get(config) {
    return this.request(config);
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}
export default new MyRequest(baseURL, timeout);
