import { routerFunction, navegar } from "./src/router/index.js";

const onLoadApp = () => {
  navegar("_home");
};

window.addEventListener("load", () => onLoadApp());
window.addEventListener("hashchange", () => routerFunction(location.hash));
