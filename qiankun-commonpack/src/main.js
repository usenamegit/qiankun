import Vue from "vue";
import App from "./App.vue";
import showImage from "../comments/index";

Vue.config.productionTip = false;
Vue.use(showImage);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
