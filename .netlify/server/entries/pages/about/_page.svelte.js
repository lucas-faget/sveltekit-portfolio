import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { W as Welcome } from "../../../chunks/Welcome.js";
import { C as Chapter, T as Title } from "../../../chunks/Title.js";
const css = {
  code: ".skew-plus-45.svelte-z7hof0{transform:skew(-45deg)}.skew-minus-45.svelte-z7hof0{transform:skew(45deg)}",
  map: `{"version":3,"file":"Headline.svelte","sources":["Headline.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let text;\\n<\/script>\\r\\n\\r\\n<div class=\\"flex items-center gap-2\\" style=\\"font-family: 'Dosis\\">\\r\\n    <div class=\\"flex-1 border-t-[1px]\\"></div>\\r\\n    <div class=\\"flex\\">\\r\\n        <div class=\\"w-6 flex flex-col justify-center items-center\\">\\r\\n            <div class=\\"flex-1 w-[1.2px] border-[1px] skew-plus-45\\"></div>\\r\\n            <div class=\\"flex-1 w-[1.2px] border-[1px] skew-minus-45\\"></div>\\r\\n        </div>\\r\\n        <div\\r\\n            class=\\"h-12 px-6 border-y-[1px] flex items-center text-lg uppercase tracking-[0.15rem]\\"\\r\\n        >\\r\\n            {text}\\r\\n        </div>\\r\\n        <div class=\\"w-6 flex flex-col justify-center items-center\\">\\r\\n            <div class=\\"flex-1 w-[1.2px] border-[1px] skew-minus-45\\"></div>\\r\\n            <div class=\\"flex-1 w-[1.2px] border-[1px] skew-plus-45\\"></div>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\"flex-1 border-t-[1px]\\"></div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .skew-plus-45 {\\r\\n        transform: skew(-45deg);\\r\\n    }\\r\\n\\r\\n    .skew-minus-45 {\\r\\n        transform: skew(45deg);\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwBI,2BAAc,CACV,SAAS,CAAE,KAAK,MAAM,CAC1B,CAEA,4BAAe,CACX,SAAS,CAAE,KAAK,KAAK,CACzB"}`
};
const Headline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  $$result.css.add(css);
  return `<div class="flex items-center gap-2" style="font-family: 'Dosis"><div class="flex-1 border-t-[1px]"></div> <div class="flex"><div class="w-6 flex flex-col justify-center items-center" data-svelte-h="svelte-1hagxp4"><div class="flex-1 w-[1.2px] border-[1px] skew-plus-45 svelte-z7hof0"></div> <div class="flex-1 w-[1.2px] border-[1px] skew-minus-45 svelte-z7hof0"></div></div> <div class="h-12 px-6 border-y-[1px] flex items-center text-lg uppercase tracking-[0.15rem]">${escape(text)}</div> <div class="w-6 flex flex-col justify-center items-center" data-svelte-h="svelte-1eta3ge"><div class="flex-1 w-[1.2px] border-[1px] skew-minus-45 svelte-z7hof0"></div> <div class="flex-1 w-[1.2px] border-[1px] skew-plus-45 svelte-z7hof0"></div></div></div> <div class="flex-1 border-t-[1px]"></div> </div>`;
});
var Rating = /* @__PURE__ */ ((Rating2) => {
  Rating2[Rating2["ZeroStar"] = 0] = "ZeroStar";
  Rating2[Rating2["OneStar"] = 1] = "OneStar";
  Rating2[Rating2["TwoStars"] = 2] = "TwoStars";
  Rating2[Rating2["ThreeStars"] = 3] = "ThreeStars";
  return Rating2;
})(Rating || {});
const assetsURL = "https://assets.lucas-faget.com";
const StarRating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rating = Rating.ZeroStar } = $$props;
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0) $$bindings.rating(rating);
  return `<div class="flex gap-2"><img class="h-6 w-6"${add_attribute(
    "src",
    `${assetsURL}/icons/${rating !== Rating.ZeroStar ? "star-gold.svg" : "star-black.svg"}`,
    0
  )} alt="star"> <img class="h-6 w-6"${add_attribute(
    "src",
    `${assetsURL}/icons/${rating === Rating.TwoStars || rating === Rating.ThreeStars ? "star-gold.svg" : "star-black.svg"}`,
    0
  )} alt="star"> <img class="h-6 w-6"${add_attribute(
    "src",
    `${assetsURL}/icons/${rating === Rating.ThreeStars ? "star-gold.svg" : "star-black.svg"}`,
    0
  )} alt="star"></div>`;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative"><div class="-my-6">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const TimelineItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { label = void 0 } = $$props;
  let { imageAlt = void 0 } = $$props;
  let { imageSrc = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.imageAlt === void 0 && $$bindings.imageAlt && imageAlt !== void 0) $$bindings.imageAlt(imageAlt);
  if ($$props.imageSrc === void 0 && $$bindings.imageSrc && imageSrc !== void 0) $$bindings.imageSrc(imageSrc);
  return `<div class="relative pl-8 sm:pl-32 py-6 group">${label ? `<div class="font-medium" style="color: var(--color-theme-1)">${escape(label)}</div>` : ``} <div class="flex flex-col sm:flex-row items-start gap-2 mb-2 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-neutral-100 after:border-4 after:box-content after:border-neutral-600 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">${title ? `<div class="text-xl font-bold">${escape(title)}</div>` : ``} ${imageSrc ? `<div class="w-20 h-20 sm:-translate-y-6 sm:absolute left-0 inline-flex items-center justify-center"><img${add_attribute("src", imageSrc, 0)}${add_attribute("alt", imageAlt, 0)}></div>` : ``}</div> <div class="text-neutral-500">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1tyxewj_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About"><!-- HEAD_svelte-1tyxewj_END -->`, ""} <div>${validate_component(Welcome, "Welcome").$$render($$result, { text: "About" }, {}, {})} ${validate_component(Chapter, "Chapter").$$render($$result, { index: 1, title: "Introduction" }, {}, {
    default: () => {
      return `${validate_component(Title, "Title").$$render($$result, { title: "Web developer" }, {}, {})} ${each(data.json.overview.split("\n"), (paragraph) => {
        return `<p>${escape(paragraph)}</p>`;
      })}`;
    }
  })} ${validate_component(Chapter, "Chapter").$$render($$result, { index: 2, title: "Langages", dark: true }, {}, {
    default: () => {
      return `${each(data.json.skills, (skillGroup) => {
        return `${validate_component(Headline, "Headline").$$render($$result, { text: skillGroup.headline }, {}, {})} <ul class="flex flex-col gap-8">${each(skillGroup.languages, (language) => {
          return `<li class="flex items-center gap-8 text-lg">${language.rating ? `${validate_component(StarRating, "StarRating").$$render($$result, { rating: language.rating }, {}, {})}` : ``} ${language.imageFile ? `<div class="h-14 w-20 flex justify-center"><img class="h-full"${add_attribute("src", `${data.assetsBaseUrl}/${data.languagesPath}/${language.imageFile}`, 0)}${add_attribute("alt", language.name, 0)}> </div>` : ``} ${language.name ? `<p>${escape(language.name)}</p>` : ``} </li>`;
        })} </ul>`;
      })}`;
    }
  })} ${validate_component(Chapter, "Chapter").$$render($$result, { index: 3, title: "Expériences" }, {}, {
    default: () => {
      return `${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {
        default: () => {
          return `${each(data.json.workExperience, (item) => {
            return `${validate_component(TimelineItem, "TimelineItem").$$render(
              $$result,
              {
                title: item.title,
                label: item.date,
                imageAlt: item.companyName,
                imageSrc: item.companyImageFile ? `${data.assetsBaseUrl}/${data.logosPath}/${item.companyImageFile}` : void 0
              },
              {},
              {
                default: () => {
                  return `<div class="flex flex-col gap-1"><p class="font-bold">${escape(`${item.companyName} - ${item.place}`)}</p> <ul>${each(item.overview.split("\n"), (line) => {
                    return `<li>${escape(line)}</li>`;
                  })} </ul></div> `;
                }
              }
            )}`;
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Chapter, "Chapter").$$render($$result, { index: 4, title: "Formation", dark: true }, {}, {
    default: () => {
      return `${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {
        default: () => {
          return `${each(data.json.education, (item) => {
            return `${validate_component(TimelineItem, "TimelineItem").$$render(
              $$result,
              {
                title: item.title,
                label: item.date,
                imageAlt: item.schoolName,
                imageSrc: item.imageFile ? `${data.assetsBaseUrl}/${data.iconsPath}/${item.imageFile}` : void 0
              },
              {},
              {
                default: () => {
                  return `<div class="flex flex-col gap-1"><p class="font-bold">${escape(`${item.schoolName}`)}</p> ${item.overview ? `<ul>${each(item.overview.split("\n"), (line) => {
                    return `<li>${escape(line)}</li>`;
                  })} </ul>` : ``}</div> `;
                }
              }
            )}`;
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
