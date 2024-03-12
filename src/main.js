import { createApp } from "vue";
import router from "./router";
import "./common/style/style.css";
import App from "./App.vue";
import "@/config/axios.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
