import { createApp } from "vue";
import router from "./router";
import "./common/style/style.css";
import App from "./App.vue";
import "@/config/axios.js";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import vSelect from "vue-select";

const app = createApp(App);
app.use(router);
app.use(ToastPlugin, {
  position: "bottom-right",
});
app.component("v-select", vSelect);
app.mount("#app");
