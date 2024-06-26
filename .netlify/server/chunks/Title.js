import { c as create_ssr_component, e as escape, h as null_to_empty, f as each } from "./ssr.js";
const css = {
  code: ".linear-gradient-start.svelte-1cx0s87{background:linear-gradient(135deg, var(--color-dark), var(--color-light))}.linear-gradient-end.svelte-1cx0s87{background:linear-gradient(-45deg, var(--color-dark), var(--color-light))}",
  map: '{"version":3,"file":"Chapter.svelte","sources":["Chapter.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let index = 0;\\nexport let title = \\"Insert title\\";\\nexport let dark = false;\\n$: formattedIndex = index.toString().padStart(2, \\"0\\") + \\".\\";\\n<\/script>\\r\\n\\r\\n<div class=\\"flex flex-col\\">\\r\\n    <div class={`${dark ? \\"linear-gradient-end\\" : \\"linear-gradient-start\\"} w-full h-4 z-20`}></div>\\r\\n    <div\\r\\n        class={`${dark ? \\"bg-dark text-light border-light\\" : \\"bg-light text-dark border-dark\\"} relative min-h-screen py-12 flex max-md:flex-col max-md:gap-12`}\\r\\n    >\\r\\n        <aside class=\\"md:w-1/3 w-full px-8\\" style=\\"font-family: \'Dosis\\">\\r\\n            <div class=\\"sticky top-16 flex flex-col gap-8 text-4xl\\">\\r\\n                <span>{formattedIndex}</span>\\r\\n                <span>{title}</span>\\r\\n            </div>\\r\\n        </aside>\\r\\n        <section class=\\"md:w-2/3 w-full px-8 flex flex-col md:justify-center gap-12\\">\\r\\n            <slot />\\r\\n        </section>\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .linear-gradient-start {\\r\\n        background: linear-gradient(135deg, var(--color-dark), var(--color-light));\\r\\n    }\\r\\n\\r\\n    .linear-gradient-end {\\r\\n        background: linear-gradient(-45deg, var(--color-dark), var(--color-light));\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwBI,qCAAuB,CACnB,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,IAAI,YAAY,CAAC,CAAC,CAAC,IAAI,aAAa,CAAC,CAC7E,CAEA,mCAAqB,CACjB,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,IAAI,YAAY,CAAC,CAAC,CAAC,IAAI,aAAa,CAAC,CAC7E"}'
};
const Chapter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formattedIndex;
  let { index = 0 } = $$props;
  let { title = "Insert title" } = $$props;
  let { dark = false } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0) $$bindings.dark(dark);
  $$result.css.add(css);
  formattedIndex = index.toString().padStart(2, "0") + ".";
  return `<div class="flex flex-col"><div class="${escape(null_to_empty(`${dark ? "linear-gradient-end" : "linear-gradient-start"} w-full h-4 z-20`), true) + " svelte-1cx0s87"}"></div> <div class="${escape(
    null_to_empty(`${dark ? "bg-dark text-light border-light" : "bg-light text-dark border-dark"} relative min-h-screen py-12 flex max-md:flex-col max-md:gap-12`),
    true
  ) + " svelte-1cx0s87"}"><aside class="md:w-1/3 w-full px-8" style="font-family: 'Dosis"><div class="sticky top-16 flex flex-col gap-8 text-4xl"><span>${escape(formattedIndex)}</span> <span>${escape(title)}</span></div></aside> <section class="md:w-2/3 w-full px-8 flex flex-col md:justify-center gap-12">${slots.default ? slots.default({}) : ``}</section></div> </div>`;
});
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  return `<div class="flex flex-col text-8xl leading-none uppercase" style="font-family: 'Anton'">${each(title.split(" "), (word, index) => {
    return `${index % 2 === 0 ? `<p>${escape(word)}</p>` : `<p class="text-neutral-600">${escape(word)}</p>`}`;
  })}</div>`;
});
export {
  Chapter as C,
  Title as T
};
