const name = "qiankun-vue";

module.exports = {
  lintOnSave: false,
  transpileDependencies: ["common"],
  chainWebpack: (config) => config.resolve.symlinks(false),
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",

      /* 使用jsonpFunction会报错：configuration has an unknown property ‘jsonpFunction
            报错原因：**在2020-10-10发布的webpack 5中已将 output.jsonpFunction
            更名为 output.chunkLoadingGlobal
             */
      //jsonpFunction:`webpackJsonp_${name}`,
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: 7755,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
