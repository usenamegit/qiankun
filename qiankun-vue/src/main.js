import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import qkCommonpack from "qiankun-commonpack";
Vue.use(qkCommonpack);
Vue.config.productionTip = false;
let instance = null;
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    render: (h) => h(App),
    router,
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
