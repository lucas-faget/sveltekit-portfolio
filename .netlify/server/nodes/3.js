import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.C9v0J4P8.js","_app/immutable/chunks/Title.V0TWCplg.js","_app/immutable/chunks/scheduler.DWVu45ey.js","_app/immutable/chunks/index.5wTyoJXJ.js","_app/immutable/chunks/Welcome.D_aacvn7.js"];
export const stylesheets = ["_app/immutable/assets/3.BzcpGbWF.css","_app/immutable/assets/Title.CDyR3ZP_.css"];
export const fonts = [];
