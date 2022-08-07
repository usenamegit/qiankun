import "./public-path";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

let root = null;
function render(props = {}) {
  let container = { props };
  root = createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
reportWebVitals();
export async function bootstrap() {
  console.log("[react] re app bootstraped");
}
export async function mount(props) {
  console.log("[react] props from main framework reactttttt", props);
  render(props);
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("update props", props);
}
export async function unmount(props = {}) {
  root.unmount();
  root = null;
}
