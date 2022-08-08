export const appArea = [
    {
      name: "qiankun-vue",
      entry: process.env.VUE_APP_SUB_VUE,
      activeRule: "/qiankun-child/qiankun-vue",
      container: "#micro-app-container", // 子应用挂载的div
      props: {
        routerBase: "/qiankun-child/qiankun-vue",
      },
      isRouteStart: true,
    },
  
    {
      name: "qiankun-react",
      entry: process.env.VUE_APP_SUB_REACT,
      activeRule: "/qiankun-child/qiankun-react",
      container: "#micro-app-container", // 子应用挂载的div
      props: {
        routerBase: "/qiankun-child/qiankun-react",
      },
      isPreload: true,
      
    },
    {
      name: "qiankun-angular",
      entry: process.env.VUE_APP_SUB_ANGULAR,
      activeRule: "/qiankun-child/qiankun-angular",
      container: "#micro-app-container", // 子应用挂载的div
      props: {
        routerBase: "/qiankun-child/qiankun-angular",
      },
    },
    {
      name: "qiankun-vue3",
      entry: process.env.VUE_APP_SUB_VUE_THREE,
      activeRule: "/qiankun-child/qiankun-vue3/home",
      container: "#micro-app-container", // 子应用挂载的div
      props: {
        routerBase: "/qiankun-child/qiankun-vue3/home",
      },
      isPreload: true,
    },
  ];