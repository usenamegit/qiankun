import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./public-path";

let app: any;

function render(props: any) {
  const { container } = props;
  app = createApp(App);
  app
    .use(router)
    .use(store)
    .mount(container ? container.querySelector("#app") : "#app");
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}
/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log("bootstrap");
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props: any) {
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  app.unmount();
}
