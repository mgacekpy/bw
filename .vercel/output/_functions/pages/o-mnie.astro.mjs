/* empty css                                */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_D31pR6kU.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Footer, b as $$Header } from '../chunks/Footer_BIQ4C5qc.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bizneswizytowka.pl");
const $$OMnie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OMnie;
  const pageTitle = "O mnie \u2013 tworz\u0119 strony i aplikacje, kt\xF3re dzia\u0142aj\u0105 na biznes | BiznesWizytowka.pl";
  const metaDescription = "10+ lat tworzenia stron i 3+ lata budowy aplikacji. HTML, CSS, JS, Astro. Skupienie na SEO, wydajno\u015Bci i rezultatach. Zobacz, jak pracuj\u0119 i co m\xF3wi\u0105 klienci.";
  const person = {
    name: "Mateusz Gacek",
    specialties: ["Strony prezentacyjne i sprzeda\u017Cowe", "Aplikacje web/SaaS", "Aplikacje desktop"],
    tech: ["HTML", "CSS", "JavaScript", "Astro"]
  };
  const reviews = [
    {
      author: "Tadeusz Mider",
      date: "2024-05-18",
      rating: 5,
      text: "Bardzo szybko wykonana strona i profesjonalnie."
    },
    {
      author: "Adrian Burnecki",
      date: "2024-01-24",
      rating: 5,
      text: "Profesjonalne podej\u015Bcie do klienta. Szybki kontakt. Moja firmowa strona spe\u0142ni\u0142a wszystkie oczekiwania."
    },
    {
      author: "Geo JK",
      date: "2024-01-24",
      rating: 5,
      text: "\u015Awietna komunikacja, sprawna i profesjonalna us\u0142uga wykonania strony w kilka dni. Polecam na 101%."
    },
    {
      author: "Natalia Gacek",
      date: "2024-01-23",
      rating: 5,
      text: "Tworzenie stron to perfekcja w ka\u017Cdym calu: pasja, zaanga\u017Cowanie i dba\u0142o\u015B\u0107 o detal."
    },
    {
      author: "Sylwester M\u0142ynarczyk",
      date: "2024-01-23",
      rating: 5,
      text: "Strona zaprojektowana wg moich wytycznych, szybko i konkretnie. Jestem bardzo zadowolony."
    }
  ];
  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);
  const ogImage = "/og/about-og.jpg";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": metaDescription, "ogImage": ogImage }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<main> <nav class="sr-only" aria-label="okruszki"> <ol> <li><a href="/">Strona g\u0142\xF3wna</a></li> <li aria-current="page">O mnie</li> </ol> </nav> <section class="pt-32 pb-20 text-center"> <div class="relative z-10 text-center px-4 w-full md:w-5/6 lg:w-4/5 mx-auto"> <h1 id="page-hero-title" class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">\nO mnie \u2013 pasja do tworzenia stron i aplikacji\n</h1> <p id="page-hero-subtitle" class="mt-6 text-lg text-secondary">\nOd ponad 10 lat tworz\u0119 nowoczesne strony internetowe, a od 3 lat r\xF3wnie\u017C aplikacje webowe, SaaS i desktop. Pracuj\u0119 w technologiach, kt\xF3re kocham (HTML, CSS, JS, Astro) i stawiam na <strong>SEO, wydajno\u015B\u0107 i rezultaty</strong>.\n</p> </div> </section> <section class="pb-20 sm:pb-24"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10"> <div class="lg:col-span-2 space-y-10"> <article class="content-box bg-surface/50 border border-white/10 p-8 rounded-2xl"> <h2 class="text-2xl md:text-3xl font-bold text-primary">Kim jestem i co robi\u0119</h2> <p class="mt-4 text-secondary leading-relaxed">\nNazywam si\u0119 ', '. Projektuj\u0119 i wdra\u017Cam <strong>strony prezentacyjne/sprzeda\u017Cowe</strong> oraz\n<strong>aplikacje</strong> (web, SaaS, desktop). W praktyce oznacza to po\u0142\u0105czenie designu, technologii\n              i strategii, \u017Ceby Twoja strona lub aplikacja realnie wspiera\u0142a biznes.\n</p> <ul class="mt-6 flex flex-wrap gap-2"> ', ' </ul> </article> <article class="content-box bg-surface/50 border border-white/10 p-8 rounded-2xl"> <h2 class="text-2xl md:text-3xl font-bold text-primary">Jak pracuj\u0119</h2> <ol class="mt-6 grid md:grid-cols-2 gap-4 text-secondary"> <li class="rounded-xl border border-white/10 p-4"><strong>Kontakt (e\u2011mail).</strong> Zbieram wymagania i pytania \u2014 wszystko mamy na pi\u015Bmie.</li> <li class="rounded-xl border border-white/10 p-4"><strong>Analiza i koncepcja.</strong> Proponuj\u0119 rozwi\u0105zania dopasowane do cel\xF3w.</li> <li class="rounded-xl border border-white/10 p-4"><strong>Projekt i wdro\u017Cenie.</strong> Tworz\u0119, pokazuj\u0119 efekt, iteruj\u0119 na feedbacku.</li> <li class="rounded-xl border border-white/10 p-4"><strong>Finalizacja i hosting.</strong> W razie potrzeby publikuj\u0119 na Twojej infrastrukturze.</li> </ol> <p class="mt-4 text-secondary">\nPo wdro\u017Ceniu oferuj\u0119 <strong>wsparcie i opiek\u0119 d\u0142ugoterminow\u0105</strong> nad stron\u0105 lub aplikacj\u0105.\n</p> </article> <article class="content-box bg-surface/50 border border-white/10 p-8 rounded-2xl"> <h2 class="text-2xl md:text-3xl font-bold text-primary">Moje warto\u015Bci</h2> <div class="mt-6 grid md:grid-cols-2 gap-6 text-secondary"> <div><h3 class="font-semibold text-primary">Innowacyjno\u015B\u0107</h3><p class="mt-2">Szukanie prostych rozwi\u0105za\u0144 dla z\u0142o\u017Conych problem\xF3w.</p></div> <div><h3 class="font-semibold text-primary">Prostota</h3><p class="mt-2">Czytelne interfejsy i kod, kt\xF3ry \u0142atwo rozwija\u0107.</p></div> <div><h3 class="font-semibold text-primary">Si\u0142a przekazu</h3><p class="mt-2">Strony i aplikacje maj\u0105 jasno komunikowa\u0107 warto\u015B\u0107.</p></div> <div><h3 class="font-semibold text-primary">Skuteczno\u015B\u0107</h3><p class="mt-2">Cel: wynik i satysfakcja u\u017Cytkownika.</p></div> </div> </article> <article class="content-box bg-surface/50 border border-white/10 p-8 rounded-2xl"> <h2 class="text-2xl md:text-3xl font-bold text-primary">Dlaczego warto ze mn\u0105 wsp\xF3\u0142pracowa\u0107</h2> <ul class="mt-6 grid md:grid-cols-2 gap-4 text-secondary"> <li class="rounded-xl border border-white/10 p-4"><strong>Elastyczno\u015B\u0107 i otwarta komunikacja.</strong></li> <li class="rounded-xl border border-white/10 p-4"><strong>Terminowo\u015B\u0107 i odpowiedzialno\u015B\u0107.</strong></li> <li class="rounded-xl border border-white/10 p-4"><strong>Uwielbiam wyzwania i szybkie akcje.</strong></li> <li class="rounded-xl border border-white/10 p-4"><strong>SEO i wydajno\u015B\u0107 jako priorytet.</strong> Ka\u017Cdy projekt optymalizuj\u0119 \u201Ena maksa\u201D.</li> </ul> </article> </div> <aside class="space-y-10"> <div class="content-box bg-surface/50 border border-white/10 p-8 rounded-2xl"> <h2 class="text-2xl font-bold text-primary">Technologie</h2> <ul class="mt-4 space-y-2 text-secondary"> ', ' <li class="flex gap-2"><span>\u2022</span><span>Inne \u2013 w razie potrzeb projektu</span></li> </ul> <p class="mt-4 text-secondary text-sm">\nProjekty prowadz\u0119 lokalnie; narz\u0119dzia dobieram do celu \u2014 bez \u201Eprzein\u017Cynierowania\u201D.\n</p> </div> <div class="content-box bg-surface/50 border border-white/10 p-8 rounded-2xl"> <h2 class="text-2xl font-bold text-primary">Przyk\u0142ady \u201Eakcji specjalnych\u201D</h2> <ul class="mt-4 space-y-2 text-secondary"> <li class="flex gap-2"><span>\u2022</span><span>Strona zbudowana w 2 dni.</span></li> <li class="flex gap-2"><span>\u2022</span><span>Naprawa serwera PHP + aktualizacja WordPress po awarii.</span></li> </ul> </div> <div class="content-box bg-surface/50 border border-white/10 p-8 rounded-2xl"> <h2 class="text-2xl font-bold text-primary">Poza prac\u0105</h2> <p class="mt-4 text-secondary">\nPasja do IT od dziecka. Lubi\u0119 <strong>jazd\u0119 na rowerze</strong>, <strong>fotografi\u0119</strong> i <strong>przyrod\u0119</strong> \u2014 doceniam spok\xF3j\n              i koncentracj\u0119, kt\xF3re p\xF3\u017Aniej przek\u0142adam na jako\u015B\u0107 w projektach.\n</p> </div> </aside> </div> </section> <section id="opinie" class="py-20 border-t border-white/10"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="content-box flex items-end justify-between gap-6"> <div> <h2 class="text-3xl md:text-4xl font-bold text-primary">Co m\xF3wi\u0105 klienci</h2> <p class="mt-2 text-secondary">\u015Arednia ocen: <strong>', "</strong>/5 na podstawie ", ' opinii.</p> </div> </div> <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ', ' </div> </div> </section> <section class="py-16"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <div class="content-box"> <h2 class="text-3xl md:text-4xl font-bold text-primary">Porozmawiajmy o Twoim projekcie</h2> <p class="mt-4 text-secondary">Strona, sklep, aplikacja webowa lub desktop \u2014 dobior\u0119 rozwi\u0105zanie do Twoich cel\xF3w.</p> <div class="mt-6 flex flex-wrap gap-3 justify-center"> <a href="/kontakt" class="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary/90 hover:bg-primary transition text-black font-semibold">Skontaktuj si\u0119</a> <a href="/portfolio" class="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition text-primary font-medium">Zobacz realizacje</a> </div> </div> </div> </section> </main> ', ' <script type="application/ld+json">\n    {JSON.stringify({\n      "@context": "https://schema.org",\n      "@type": "Person",\n      "name": person.name,\n      "jobTitle": person.jobTitle,\n      "worksFor": {\n        "@type": "Organization",\n        "name": person.brand,\n        "url": "https://bizneswizytowka.pl/"\n      },\n      "knowsAbout": [...person.specialties, ...person.tech],\n      "url": "https://bizneswizytowka.pl/o-mnie",\n      "aggregateRating": {\n        "@type": "AggregateRating",\n        "ratingValue": avgRating,\n        "reviewCount": reviews.length\n      }\n    })}\n  <\/script> <script type="application/ld+json">\n    {JSON.stringify(reviews.map(r => ({\n      "@context": "https://schema.org",\n      "@type": "Review",\n      "itemReviewed": {\n        "@type": "Person",\n        "name": person.name\n      },\n      "author": { "@type": "Person", "name": r.author },\n      "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5, "worstRating": 1 },\n      "datePublished": r.date,\n      "reviewBody": r.text\n    })))}\n  <\/script> '])), renderComponent($$result2, "Header", $$Header, {}), maybeRenderHead(), person.name, person.specialties.map((s) => renderTemplate`<li class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-secondary text-sm">${s}</li>`), person.tech.map((t) => renderTemplate`<li class="flex gap-2"><span>•</span><span>${t}</span></li>`), avgRating, reviews.length, reviews.map((r) => renderTemplate`<figure class="content-box bg-surface/50 border border-white/10 p-6 rounded-2xl"> <div class="flex items-center justify-between"> <figcaption class="text-primary font-semibold">${r.author}</figcaption> <div class="text-sm text-secondary">${new Date(r.date).toLocaleDateString("pl-PL")}</div> </div> <div class="mt-2 text-amber-400"${addAttribute(`Ocena: ${r.rating} na 5`, "aria-label")}> ${"\u2605".repeat(r.rating)}${"\u2606".repeat(5 - r.rating)} </div> <blockquote class="mt-3 text-secondary leading-relaxed">“${r.text}”</blockquote> </figure>`), renderComponent($$result2, "Footer", $$Footer, {})) })}`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/o-mnie.astro", void 0);

const $$file = "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/o-mnie.astro";
const $$url = "/o-mnie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OMnie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
