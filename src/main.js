import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import axios from "axios"
import store from "./store"
// import "./assets/main.scss"
// import { useAuth } from "./store"
axios.defaults.baseURL = "http://localhost:8000"
createApp(App).use(store).mount("#app")
