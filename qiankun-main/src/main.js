import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import qkCommonpack from "qiankun-commonpack";
/* import { registerMicroApps, start } from "qiankun"; */
Vue.config.productionTip = false;
Vue.use(qkCommonpack);

/* const microApps = [
  {
    name: "qiankun-vue",
    entry: process.env.VUE_APP_SUB_VUE,
    activeRule: "/qiankun-vue",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/qiankun-vue",
    },
  },
  {
    name: "qiankun-vue3",
    entry: process.env.VUE_APP_SUB_VUE_THREE,
    activeRule: "/qiankun-vue3",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/qiankun-vue3",
    },
  },
  {
    name: "qiankun-react",
    entry: process.env.VUE_APP_SUB_REACT,
    activeRule: "/qiankun-react",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/qiankun-react",
    },
  },
  {
    name: "qiankun-angular",
    entry: process.env.VUE_APP_SUB_ANGULAR,
    activeRule: "/qiankun-angular",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/qiankun-angular",
    },
  },
]; */

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

/* registerMicroApps(microApps, {
  beforeLoad: (app) => {
    console.log("before load app.name====>>>>>", app.name);
  },
});
start({
  prefetch: "all",
    sandbox: {
    strictStyleIsolation: true // 严格沙箱模式
  }
}); */
