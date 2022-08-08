import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/qiankun-child/qiankun-vue/",
    name: "Home",
    component: Home,
  },
  {
    path: "/qiankun-child/qiankun-vue/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
];

export default new VueRouter({ mode: "history", routes });
