<template>
  <nav>
    <router-link to="/qiankun-child/qiankun-vue3/">Home</router-link> |
    <router-link to="/qiankun-child/qiankun-vue3/about/">About</router-link>
    <router-view />
  </nav>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
