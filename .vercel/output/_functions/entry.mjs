import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DPttm_S0.mjs';
import { manifest } from './manifest_XBlaiNp7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/kontakt.astro.mjs');
const _page3 = () => import('./pages/narzedzia.astro.mjs');
const _page4 = () => import('./pages/o-mnie.astro.mjs');
const _page5 = () => import('./pages/panel-klienta.astro.mjs');
const _page6 = () => import('./pages/polityka-prywatnosci.astro.mjs');
const _page7 = () => import('./pages/portfolio.astro.mjs');
const _page8 = () => import('./pages/regulamin.astro.mjs');
const _page9 = () => import('./pages/uslugi.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog.astro", _page1],
    ["src/pages/kontakt.astro", _page2],
    ["src/pages/narzedzia.astro", _page3],
    ["src/pages/o-mnie.astro", _page4],
    ["src/pages/panel-klienta.astro", _page5],
    ["src/pages/polityka-prywatnosci.astro", _page6],
    ["src/pages/portfolio.astro", _page7],
    ["src/pages/regulamin.astro", _page8],
    ["src/pages/uslugi.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b6893314-c534-4634-aa33-14e826656bd6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
