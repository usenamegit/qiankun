import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/qiankun-child/",
  },
  {
    path: "/qiankun-child/*",
    name: "Home",
    component: Home,
  },
];
export default new VueRouter({ mode: "history", routes });
