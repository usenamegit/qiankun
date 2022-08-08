import showImage from "./showImage";
const components = [showImage];
const install = function (Vue) {
  // 全局注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
// 导出 install （如果作为一个包，一定要有install ！！！）
export default { install };
