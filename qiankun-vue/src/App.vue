<template>
  <div id="app">
    <router-link to="/qiankun-child/qiankun-vue/">Home</router-link> |
    <router-link to="/qiankun-child/qiankun-vue/about">About</router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
</style>
