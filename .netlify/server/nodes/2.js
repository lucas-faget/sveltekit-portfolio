import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Dc5BKI_z.js","_app/immutable/chunks/scheduler.DWVu45ey.js","_app/immutable/chunks/index.5wTyoJXJ.js","_app/immutable/chunks/Welcome.D_aacvn7.js"];
export const stylesheets = [];
export const fonts = [];
