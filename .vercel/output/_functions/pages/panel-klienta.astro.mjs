/* empty css                                */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D31pR6kU.mjs';
import 'kleur/colors';
import { $ as $$Layout, b as $$Header, a as $$Footer } from '../chunks/Footer_BIQ4C5qc.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$PanelKlienta = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Ju\u017C Wkr\xF3tce | BiznesWizytowka.pl";
  const metaDescription = "Ju\u017C nied\u0142ugo ruszy dla Was co\u015B ciekawego! Przygotowujemy nowe, ekscytuj\u0105ce sekcje: Sklep i Blog. Zapraszamy wkr\xF3tce!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": metaDescription, "data-astro-cid-4bavqcga": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-4bavqcga": true })} ${maybeRenderHead()}<main class="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-background p-4" data-astro-cid-4bavqcga> <div id="three-canvas-container" class="absolute inset-0 z-0 opacity-20 blur-sm" data-astro-cid-4bavqcga></div> <div class="relative z-10" data-astro-cid-4bavqcga> <h1 id="main-headline" class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary" data-astro-cid-4bavqcga></h1> <p id="sub-headline" class="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto" data-astro-cid-4bavqcga>
Znajdziesz tutaj <span class="font-semibold text-primary" data-astro-cid-4bavqcga>Panel Klienta</span>, w którym znajdziesz niesamowite aplikacje Saas, które sprawią, że prowadzenie biznesu stanie się przyjemnością. Zaglądaj tutaj co jakiś czas.
</p> <div id="back-link" class="mt-10" data-astro-cid-4bavqcga> <a href="/" class="inline-block bg-surface border border-white/10 text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white/5 transition-colors" data-astro-cid-4bavqcga>
Wróć na stronę główną
</a> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4bavqcga": true })} ` })} `;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/panel-klienta.astro", void 0);

const $$file = "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/panel-klienta.astro";
const $$url = "/panel-klienta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PanelKlienta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
