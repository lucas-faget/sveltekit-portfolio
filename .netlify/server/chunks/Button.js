import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { rounded = false } = $$props;
  let { dark = false } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0) $$bindings.dark(dark);
  return `<div${add_attribute(
    "class",
    `${dark ? "bg-neutral-800 text-neutral-200 hover:text-neutral-800" : "bg-neutral-400 text-neutral-800 hover:text-neutral-200"} ${rounded ? "rounded-full " : ""} group relative z-10 px-6 py-3 border-none overflow-hidden uppercase tracking-[0.15rem] cursor-pointer`,
    0
  )} style="font-family: 'Dosis', sans-serif;"><div${add_attribute("class", `${dark ? "bg-neutral-200" : "bg-neutral-800"} ${rounded ? "rounded-full " : ""} absolute top-0 left-[-100%] w-full h-full transition-left duration-500 ease group-hover:left-0`, 0)}></div> <span${add_attribute("class", `relative z-20 transition-color duration-500 ease`, 0)}>${escape(text)}</span> </div>`;
});
export {
  Button as B
};
