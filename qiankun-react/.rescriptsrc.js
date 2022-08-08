const { name } = require("./package.json");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.publicPath = "//192.168.31.190:7766/";
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    for (const rule of config.module.rules) {
      if (!rule.oneOf) continue;

      for (const one of rule.oneOf) {
        if (
          one.loader &&
          one.loader.includes("babel-loader") &&
          one.options &&
          one.options.plugins
        ) {
          one.options.plugins = one.options.plugins.filter(
            (plugin) =>
              typeof plugin !== "string" || !plugin.includes("react-refresh")
          );
        }
      }
    }

    config.plugins = config.plugins.filter(
      (plugin) =>
        !(plugin instanceof webpack.HotModuleReplacementPlugin) &&
        !(plugin instanceof ReactRefreshPlugin)
    );
    return config;
  },
  devServer: (config) => {
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.port = 7766;
    config.open = false;
    return config;
  },
};
