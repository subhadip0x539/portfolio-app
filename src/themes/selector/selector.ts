import { dark as viteDark } from "../vite/dark/dark";
import { light as viteLight } from "../vite/light/light";
import { dark as vueDark } from "../vue/dark/dark";

const themeSelector = (theme: string) => {
  switch (theme) {
    case "vite-dark":
      return viteDark;
    case "vite-light":
      return viteLight;
    case "vue-dark":
      return vueDark;
    default:
      return viteDark;
  }
};

export { themeSelector };
