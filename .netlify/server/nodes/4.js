import * as universal from '../entries/pages/projects/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+page.ts";
export const imports = ["_app/immutable/nodes/4.B8kRm0wL.js","_app/immutable/chunks/Title.V0TWCplg.js","_app/immutable/chunks/scheduler.DWVu45ey.js","_app/immutable/chunks/index.5wTyoJXJ.js","_app/immutable/chunks/Welcome.D_aacvn7.js","_app/immutable/chunks/Button.Bj8Wbdhs.js"];
export const stylesheets = ["_app/immutable/assets/Title.CDyR3ZP_.css"];
export const fonts = [];
