<template>
  <div>
    <showImage
      :imgSrc="'https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500'"
    ></showImage>
    <div>
      <div class="page-btn">
        <span
          class="test-color"
          @click="toChildPage('/qiankun-child/qiankun-vue/', 0)"
          >vue</span
        >
        <span @click="toChildPage('/qiankun-child/qiankun-react/', 1)"
          >react</span
        >
        <span @click="toChildPage('/qiankun-child/qiankun-angular/', 2)"
          >angular</span
        >
        <span @click="toChildPage('/qiankun-child/qiankun-vue3/', 3)">vue3</span>
        <span @click="mountSecondPage()">second</span>
      </div>
      <div id="micro-app-container"></div>
      <div id="micro-app-container-second"></div>
    </div>
  </div>
</template>

<script>
import { loadMicroApp, prefetchApps } from "qiankun";
const appArea = [
  {
    name: "qiankun-vue",
    entry: process.env.VUE_APP_SUB_VUE,
    activeRule: "/qiankun-child/qiankun-vue/",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/qiankun-child/qiankun-vue/",
    },
  },

  {
    name: "qiankun-react",
    entry: process.env.VUE_APP_SUB_REACT,
    activeRule: "/qiankun-child/qiankun-react/",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/qiankun-child/qiankun-react/",
    },
    isPreload: true,
  },
  {
    name: "qiankun-angular",
    entry: process.env.VUE_APP_SUB_ANGULAR,
    activeRule: "/qiankun-child/qiankun-angular/",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/qiankun-child/qiankun-angular/",
    },
  },
  {
    name: "qiankun-vue3",
    entry: process.env.VUE_APP_SUB_VUE_THREE,
    activeRule: "/qiankun-child/qiankun-vue3/",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/qiankun-child/qiankun-vue3/",
    },
    isPreload: true,
  },
];
export default {
  name: "HomePage",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {
    this.refreshPage();
  },
  mounted() {},
  watch: {},
  methods: {
    toChildPage(parmas, index) {
      this.loadMiniApp(appArea[index]);
      history.pushState(null, parmas, parmas);
    },
    loadMiniApp(appArea) {
      if (this.microApp) {
        this.microApp.unmount();
        this.microApp = null;
      }
      // 获取应用配置并手动挂载，挂载后返回挂载对象
      this.microApp = loadMicroApp(appArea);
    },
    mountSecondPage() {
      this.microAppSecond = loadMicroApp({
        name: "qiankun-react",
        entry: process.env.VUE_APP_SUB_REACT,
        activeRule: "/qiankun-react",
        container: "#micro-app-container-second", // 子应用挂载的div
        props: {
          routerBase: "/qiankun-react",
        },
      });
    },
    prefetProject() {
      const MICRO_PREFETCH_APPS = appArea.reduce(
        (total, { isPreload, name, entry }) =>
          isPreload ? [...total, { name, entry }] : total,
        []
      );

      // 预加载应用
      prefetchApps(MICRO_PREFETCH_APPS);
    },
    refreshPage() {
      let activePageIndex = 0;
      appArea.forEach((item, index) => {
        if (window.location.pathname == item.activeRule) {
          activePageIndex = index;
        }
      });
      console.log("appArea[activePageIndex]", appArea[activePageIndex]);
      this.loadMiniApp(appArea[activePageIndex]);
      this.prefetProject();
    },
  },
};
</script>

<style>
    img{
        width: 200px;
        margin: auto;
    }
</style>
