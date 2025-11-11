/* empty css                                */
import { f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_D31pR6kU.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Footer, b as $$Header } from '../chunks/Footer_BIQ4C5qc.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Poradniki SEO \u2013 BiznesWizytowka.pl";
  const metaDescription = "Zbi\xF3r poradnik\xF3w SEO bez dat, z mo\u017Cliwo\u015Bci\u0105 filtrowania tematycznego, pomagaj\u0105cy zwi\u0119kszy\u0107 widoczno\u015B\u0107 w internecie.";
  const articles = [
    {
      id: "seo-podstawy",
      title: "Podstawy SEO",
      url: "/blog/seo-podstawy",
      // ścieżka do potencjalnego podstrona-entry
      category: "WordPress",
      // badge czerwony
      tags: ["B2B przemys\u0142", "SEO og\xF3lnopolskie", "Szybko\u015B\u0107/CWV"],
      lead: "ES-Serwis: serwis WP skalowany na SEO w ca\u0142ej Polsce. Landingi us\u0142ug (instalacje, pomiary, elektryka przemys\u0142owa, remonty), schema i szybkie CWV pod industrial B2B.",
      content: "Pe\u0142en artyku\u0142: optymalizacja, techniki, narz\u0119dzia itd..."
    },
    {
      id: "content-marketing",
      title: "Content Marketing",
      url: "/blog/content-marketing",
      category: "WordPress",
      tags: ["Marketing", "SEO", "Tre\u015B\u0107"],
      lead: "Jak tworzy\u0107 warto\u015Bciowe tre\u015Bci, kt\xF3re przyci\u0105gaj\u0105 u\u017Cytkownik\xF3w i zwi\u0119kszaj\u0105 zaanga\u017Cowanie.",
      content: "Pe\u0142en artyku\u0142 o strategii content marketingowej..."
    }
    // Dodaj kolejne artykuły...
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": metaDescription }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<main class="max-w-7xl mx-auto px-4 pb-16 pt-32"> <h1 class="text-4xl font-bold mb-6 text-primary">', '</h1> <div id="filters" class="mb-6 flex gap-2 flex-wrap"> <button class="filter-btn rounded-xl px-4 py-2 bg-surface/60 text-primary hover:bg-primary hover:text-background transition-colors disabled:opacity-50" data-filter="" disabled id="clear-filter">\nPoka\u017C wszystkie\n</button> ', ' </div> <section id="articles" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ', ' </section> <script type="module">\n      (() => {\n        const filters = document.querySelectorAll("#filters .filter-btn");\n        const articles = document.querySelectorAll("#articles article");\n        const clearFilterBtn = document.getElementById("clear-filter");\n\n        function setFilter(tag) {\n          filters.forEach(btn => (btn.disabled = false));\n          if (tag === "") {\n            articles.forEach(article => (article.style.display = ""));\n            clearFilterBtn.disabled = true;\n          } else {\n            clearFilterBtn.disabled = false;\n            articles.forEach(article => {\n              const tags = article.dataset.tags.split(",");\n              article.style.display = tags.includes(tag) ? "" : "none";\n            });\n          }\n        }\n        filters.forEach(btn => {\n          btn.addEventListener("click", () => {\n            setFilter(btn.dataset.filter);\n          });\n        });\n      })();\n    <\/script> </main> ', " "])), renderComponent($$result2, "Header", $$Header, {}), maybeRenderHead(), pageTitle, Array.from(new Set(articles.flatMap((a) => a.tags))).map((tag) => renderTemplate`<button class="filter-btn rounded-xl px-4 py-2 bg-surface/60 text-primary hover:bg-primary hover:text-background transition-colors"${addAttribute(tag, "data-filter")}> ${tag} </button>`), articles.map((article) => renderTemplate`<article${addAttribute(article.id, "key")}${addAttribute(article.tags.join(","), "data-tags")} class="bg-surface/50 border border-white/10 rounded-2xl p-6 shadow-sm flex flex-col h-full"${addAttribute(article.id, "id")}> <h2 class="text-xl font-bold mb-4 text-primary"> <a${addAttribute(article.url, "href")} class="hover:underline text-primary">${article.title}</a> </h2> <div class="flex flex-wrap gap-2 mb-4"> <span class="px-3 py-1 rounded-full bg-red-700 text-white text-xs font-semibold">${article.category}</span> ${article.tags.map((tag) => renderTemplate`<span class="px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-semibold">${tag}</span>`)} </div> <div class="mt-auto border-l-4 border-green-600 bg-green-900/10 text-green-700 rounded-lg px-5 py-3 text-sm leading-relaxed"> ${article.lead} </div> </article>`), renderComponent($$result2, "Footer", $$Footer, {})) })}`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/blog.astro", void 0);

const $$file = "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
