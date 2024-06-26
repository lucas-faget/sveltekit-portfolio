import { c as create_ssr_component, v as validate_component, f as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { W as Welcome } from "../../../chunks/Welcome.js";
import { C as Chapter, T as Title } from "../../../chunks/Title.js";
import { B as Button } from "../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1w2gtv7_START -->${$$result.title = `<title>Projects</title>`, ""}<meta name="description" content="Projects"><!-- HEAD_svelte-1w2gtv7_END -->`, ""} <div>${validate_component(Welcome, "Welcome").$$render($$result, { text: "Projects" }, {}, {})} ${each(data.json.projects, (project, index) => {
    return `${validate_component(Chapter, "Chapter").$$render(
      $$result,
      {
        index: index + 1,
        title: project.name,
        dark: index % 2 !== 0
      },
      {},
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, { title: project.title }, {}, {})} ${project.overview ? `<p>${escape(project.overview)}</p>` : ``} ${project.websiteUrl ? `<a${add_attribute("href", project.websiteUrl, 0)}>${validate_component(Button, "Button").$$render(
            $$result,
            {
              text: project.websiteUrl,
              dark: index % 2 !== 0
            },
            {},
            {}
          )} </a>` : ``} ${project.githubRepository ? `<a${add_attribute("href", project.githubRepository, 0)}>${validate_component(Button, "Button").$$render(
            $$result,
            {
              text: project.githubRepository,
              dark: index % 2 !== 0
            },
            {},
            {}
          )} </a>` : ``} ${project.languages ? `<ul class="flex flex-col gap-8">${each(project.languages, (language) => {
            return `<li class="flex items-center gap-8 text-lg">${language.imageFile ? `<div class="h-14 w-20 flex justify-center"><img class="h-full"${add_attribute("src", `${data.assetsBaseUrl}/${data.languagesPath}/${language.imageFile}`, 0)}${add_attribute("alt", language.name, 0)}> </div>` : ``} ${language.name ? `<p>${escape(language.name)}</p>` : ``} </li>`;
          })} </ul>` : ``} ${project.screenshots ? `${each(project.screenshots, (screenshot) => {
            return `<img${add_attribute("src", `${data.assetsBaseUrl}/${data.screenshotsPath}/${screenshot}`, 0)}${add_attribute("alt", project.name, 0)}>`;
          })}` : ``} `;
        }
      }
    )}`;
  })}</div>`;
});
export {
  Page as default
};
