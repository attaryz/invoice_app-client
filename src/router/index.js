import { crateRouter } from "vue-router"

const routes = [
  { path: "/", name: "App", component: App },
  { path: "/dashboard", name: "Dashboard", component: App },
]

const router = crateRouter({
  history: true,
  routes,
})
export default router
