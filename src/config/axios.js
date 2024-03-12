import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_API;
axios.defaults.headers.post["Content-Type"] = "application/json";
