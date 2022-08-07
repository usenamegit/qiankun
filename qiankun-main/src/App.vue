<template>
  <div id="app">
    <div></div>
    <div>
      <div class="page-btn">
        <span class="test-color" @click="toChildPage('/qiankun-vue')">vue</span>
        <span @click="toChildPage('/qiankun-react')">react</span>
        <span @click="toChildPage('/qiankun-angular')">angular</span>
        <span @click="toChildPage('/qiankun-vue3')">vue3</span>
      </div>
      <div id="micro-app-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    toChildPage(parmas) {
      console.log(parmas);
      history.pushState(null, parmas, parmas);
    },
    bindCurrent() {
      // const path = window.location.pathname;
      // if (this.microApps.findIndex((item) => item.activeRule === path) >= 0) {
      //   this.current = path;
      // }
    },
    listenRouterChange() {
      // const _wr = function (type) {
      //   const orig = history[type];
      //   return function () {
      //     const rv = orig.apply(this, arguments);
      //     const e = new Event(type);
      //     e.arguments = arguments;
      //     window.dispatchEvent(e);
      //     return rv;
      //   };
      // };
      // history.pushState = _wr("pushState");

      window.addEventListener("pushState", this.bindCurrent);
      window.addEventListener("popstate", this.bindCurrent);

      // this.$once("hook:beforeDestroy", () => {
      //   window.removeEventListener("pushState", this.bindCurrent);
      //   window.removeEventListener("popstate", this.bindCurrent);
      // });
    },
  },
  created() {
    this.bindCurrent();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#micro-app-container {
  width: 100%;
  height: 600px;
  position: relative;
}
.page-btn span {
  margin-right: 24px;
}
.test-color{
    /* color:red */
}
</style>
