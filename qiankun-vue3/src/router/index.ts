import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/qiankun-child/qiankun-vue3/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/qiankun-child/qiankun-vue3/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => AboutView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
