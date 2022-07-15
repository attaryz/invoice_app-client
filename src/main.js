import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import axios from "axios"
import store from "./store"

axios.defaults.baseURL = "http://localhost:8000"
createApp(App).use(store).use(axios).mount("#app")
