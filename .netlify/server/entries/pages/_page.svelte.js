import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { W as Welcome } from "../../chunks/Welcome.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1may79_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Home"><!-- HEAD_svelte-1may79_END -->`, ""} <div>${validate_component(Welcome, "Welcome").$$render($$result, { text: "Home" }, {}, {})}</div>`;
});
export {
  Page as default
};
