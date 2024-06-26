import { c as create_ssr_component, e as escape } from "./ssr.js";
const Welcome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  return `<section class="md:h-screen w-full pt-40 pb-4 px-8 flex flex-col justify-end" style="font-family: 'Anton'"><p class="text-[20vw] leading-none uppercase">${escape(text)}</p></section>`;
});
export {
  Welcome as W
};
