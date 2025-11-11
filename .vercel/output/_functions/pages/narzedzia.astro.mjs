/* empty css                                */
import { f as createComponent, k as renderComponent, r as renderTemplate, u as unescapeHTML, h as addAttribute, l as Fragment, m as maybeRenderHead } from '../chunks/astro/server_D31pR6kU.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Footer, b as $$Header } from '../chunks/Footer_BIQ4C5qc.mjs';
import { $ as $$CTA } from '../chunks/CTA_BcVc_NfM.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Narzedzia = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Narz\u0119dzia dla firm \u2013 kategorie, opisy, przyk\u0142ady u\u017Cycia | BiznesWizytowka.pl";
  const metaDescription = "Przegl\u0105d narz\u0119dzi dla firm pogrupowanych w kategorie: automatyzacja, zarz\u0105dzanie, wsp\xF3\u0142praca, grafika. Opisy, zastosowania, przyk\u0142ady u\u017Cycia i FAQ. W tym Email Sort Pro.";
  const emailSort = {
    id: "email-sort-pro",
    name: "Email Sort Pro",
    tagline: "Automatyczne pobieranie i porz\u0105dkowanie za\u0142\u0105cznik\xF3w z e\u2011maili.",
    image: { src: "/gfx/Email-Sort-Pro.png", alt: "Email Sort Pro \u2013 automatyczne pobieranie i sortowanie za\u0142\u0105cznik\xF3w" },
    description: `Program desktopowy, kt\xF3ry automatycznie pobiera za\u0142\u0105czniki z dowolnego konta e\u2011mail (IMAP/POP3) i porz\u0105dkuje je wed\u0142ug Twoich zasad. Mo\u017Cesz filtrowa\u0107 pliki po dacie, typie, nadawcy lub pobra\u0107 wszystkie \u2013 a nast\u0119pnie posegregowa\u0107 je w strukturze: Rodzaj dokumentu \u2192 Data \u2192 Pliki.`,
    helps: "Oszcz\u0119dza czas na r\u0119cznym pobieraniu, redukuje pomy\u0142ki i utrzymuje sta\u0142y porz\u0105dek w dokumentach dla ksi\u0119gowo\u015Bci, HR czy obs\u0142ugi zam\xF3wie\u0144.",
    features: [
      "Pobieranie za\u0142\u0105cznik\xF3w z dowolnego konta e\u2011mail (IMAP/POP3)",
      "Filtry: data, typ pliku, nadawca lub pobierz wszystkie",
      "Automatyczne sortowanie: kategoria \u2192 data \u2192 pliki",
      "Obs\u0142uga wielu skrzynek pocztowych",
      "Edytowalne filtry i s\u0142owa kluczowe (Pro)"
    ],
    examples: [
      "Ksi\u0119gowo\u015B\u0107: automatyczny odbi\xF3r faktur od kontrahent\xF3w do folder\xF3w miesi\u0119cznych",
      "HR: CV i dokumenty kandydat\xF3w segregowane wg og\u0142oszenia i daty",
      "Obs\u0142uga zam\xF3wie\u0144: specyfikacje i dokumenty klient\xF3w w jednym miejscu"
    ],
    forWhom: ["Ksi\u0119gowo\u015B\u0107", "HR/Recruitment", "Obs\u0142uga zam\xF3wie\u0144", "W\u0142a\u015Bciciele SMB"],
    planNote: "Free: do 100 za\u0142\u0105cznik\xF3w/tydzie\u0144. Pro: bez limit\xF3w + filtry po nadawcy + edycja filtr\xF3w sortowania. Licencje: 3/6/12 mies. oraz do\u017Cywotnia.",
    downloadHref: "/app/email-sort-pro.zip",
    buyHref: "mailto:kontakt@bizneswizytowka.pl?subject=Licencja%20Email%20Sort%20Pro"
  };
  const thirdParty = {
    clickup: {
      id: "clickup",
      name: "ClickUp",
      tagline: "Zarz\u0105dzanie projektami i zadaniami.",
      description: "Wszechstronne planowanie, trackowanie i raportowanie pracy zespo\u0142\xF3w.",
      helps: "Porz\u0105dkuje backlog, sprinty, kampanie i zadania operacyjne; redukuje chaos komunikacyjny.",
      features: ["Tablice Kanban", "Sprinty i backlog", "Cele/OKR", "Raportowanie czasu", "Automatyzacje"],
      examples: ["Agencja marketingowa: kampanie, kalendarz publikacji, feedback do kreacji", "Software house: sprinty, backlog, raportowanie czasu"],
      forWhom: ["Agencje", "Software/IT", "Marketing", "Zespo\u0142y zdalne"],
      url: "https://clickup.com"
    },
    notion: {
      id: "notion",
      name: "Notion",
      tagline: "Baza wiedzy, dokumenty i wiki firmowe.",
      description: "Elastyczne bloki stron, relacyjne bazy i widoki, kt\xF3re z\u0142o\u017Cysz jak klocki.",
      helps: "Centralizuje informacje: procedury, checklisty, briefy, pipeline klient\xF3w.",
      features: ["Bazy danych", "Relacje i widoki", "Szablony", "Wsp\xF3\u0142praca w czasie rzeczywistym"],
      examples: ["SMB: CRM w Notion z pipeline\u2019em i przypomnieniami follow\u2011up", "HR: onboarding z checklistami i materia\u0142ami"],
      forWhom: ["SMB", "Freelancerzy", "HR", "Operacje"],
      url: "https://www.notion.so"
    },
    gws: {
      id: "google-workspace",
      name: "Google Workspace",
      tagline: "E\u2011mail, dysk, dokumenty i wsp\xF3\u0142praca.",
      description: "Pakiet narz\u0119dzi do pracy zespo\u0142owej: Gmail, Drive, Docs, Sheets, Meet.",
      helps: "U\u0142atwia wsp\xF3\u0142tworzenie, wersjonowanie dokument\xF3w i bezpieczne udost\u0119pnianie.",
      features: ["Gmail z w\u0142asn\u0105 domen\u0105", "Dyski wsp\xF3\u0142dzielone", "Docs/Sheets", "Meet"],
      examples: ["Sprzeda\u017C: arkusze ofert, szablony kalkulacji, spotkania Meet", "Ma\u0142a firma: foldery dla dzia\u0142\xF3w, kontrola dost\u0119pu"],
      forWhom: ["Firmy ka\u017Cdej wielko\u015Bci", "Zespo\u0142y zdalne", "Szko\u0142y", "NGO"],
      url: "https://workspace.google.com"
    },
    canva: {
      id: "canva",
      name: "Canva",
      tagline: "Szybkie materia\u0142y graficzne.",
      description: "Prosty edytor grafiki z szablonami do social medi\xF3w, prezentacji i druk\xF3w.",
      helps: "Przyspiesza tworzenie kreacji; sp\xF3jno\u015B\u0107 brandu dzi\u0119ki brand\u2011kit.",
      features: ["Szablony", "Brand\u2011kit", "Wsp\xF3\u0142praca", "Proste eksporty"],
      examples: ["Sklep online: grafiki produktowe, banery, stories", "Lokalna firma: ulotki, plakaty, wizyt\xF3wki, menu"],
      forWhom: ["Marketing", "Sprzeda\u017C", "W\u0142a\u015Bciciele SMB", "E\u2011commerce"],
      url: "https://www.canva.com"
    },
    zapier: {
      id: "zapier",
      name: "Zapier",
      tagline: "Automatyzacja proces\xF3w mi\u0119dzy aplikacjami.",
      description: "\u0141\u0105czy ponad 6000 aplikacji webowych, pozwalaj\u0105c na tworzenie zautomatyzowanych przep\u0142yw\xF3w pracy (Zaps) bez pisania kodu.",
      helps: "Eliminuje r\u0119czne kopiowanie danych, automatyzuje powiadomienia i integruje narz\u0119dzia, kt\xF3re normalnie ze sob\u0105 nie rozmawiaj\u0105.",
      features: ["Integracja 6000+ aplikacji", "Wizualny edytor (Zaps)", "Filtry i logika warunkowa", "Formatowanie danych"],
      examples: ["Automatyczne dodawanie lead\xF3w z Facebooka do CRM", "Powiadomienia na Slacku o nowych p\u0142atno\u015Bciach w Stripe"],
      forWhom: ["Marketing", "Sprzeda\u017C", "Operacje", "W\u0142a\u015Bciciele SMB"],
      url: "https://zapier.com"
    },
    slack: {
      id: "slack",
      name: "Slack",
      tagline: "Komunikacja i wsp\xF3\u0142praca w zespole.",
      description: "Platforma do komunikacji w czasie rzeczywistym oparta na kana\u0142ach, kt\xF3ra zast\u0119puje wewn\u0119trzne e-maile i integruje si\u0119 z innymi narz\u0119dziami.",
      helps: "Usprawnia przep\u0142yw informacji, organizuje dyskusje tematycznie i przyspiesza podejmowanie decyzji.",
      features: ["Kana\u0142y tematyczne", "W\u0105tki", "Po\u0142\u0105czenia wideo (Huddles)", "Integracje z aplikacjami", "Wyszukiwarka archiwum"],
      examples: ["Kana\u0142 #marketing dla dyskusji o kampaniach", "Integracja z Gitem dla powiadomie\u0144 o commitach"],
      forWhom: ["Zespo\u0142y zdalne", "Software/IT", "Agencje", "Startup-y"],
      url: "https://slack.com"
    },
    figma: {
      id: "figma",
      name: "Figma",
      tagline: "Projektowanie i prototypowanie interfejs\xF3w w zespole.",
      description: "Narz\u0119dzie do projektowania UI/UX dzia\u0142aj\u0105ce w przegl\u0105darce, stworzone z my\u015Bl\u0105 o wsp\xF3\u0142pracy w czasie rzeczywistym.",
      helps: "Umo\u017Cliwia wsp\xF3ln\u0105 prac\u0119 nad projektami, tworzenie interaktywnych prototyp\xF3w i \u0142atwe przekazywanie specyfikacji deweloperom.",
      features: ["Wsp\xF3\u0142praca w czasie rzeczywistym", "Interaktywne prototypy", "Auto Layout i komponenty", "Tryb deweloperski (Dev Mode)", "FigJam (tablice online)"],
      examples: ["Projektowanie aplikacji mobilnej od A do Z", "Warsztaty online na tablicach FigJam"],
      forWhom: ["UI/UX Designers", "Product Managers", "Deweloperzy", "Agencje kreatywne"],
      url: "https://www.figma.com"
    }
  };
  const categories = [
    {
      id: "automatyzacja",
      name: "Automatyzacja",
      tools: [{ type: "firstParty", data: emailSort }, { type: "external", data: thirdParty.zapier }]
    },
    {
      id: "zarzadzanie",
      name: "Zarz\u0105dzanie",
      tools: [{ type: "external", data: thirdParty.clickup }]
    },
    {
      id: "wspolpraca",
      name: "Wsp\xF3\u0142praca",
      tools: [{ type: "external", data: thirdParty.gws }, { type: "external", data: thirdParty.notion }, { type: "external", data: thirdParty.slack }, { type: "external", data: thirdParty.figma }]
    },
    {
      id: "grafika",
      name: "Grafika",
      tools: [{ type: "external", data: thirdParty.canva }, { type: "external", data: thirdParty.figma }]
    },
    { id: "faq", name: "FAQ", tools: [] }
  ];
  const pageOg = "/og/tools-og.jpg";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": metaDescription, "ogImage": pageOg, "data-astro-cid-6hhdcam7": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<main data-astro-cid-6hhdcam7> <section class="pt-32 pb-20 text-center overflow-hidden" data-astro-cid-6hhdcam7> <div class="relative z-10 text-center px-4 w-full md:w-5/6 lg:w-4/5 mx-auto" data-astro-cid-6hhdcam7> <h1 id="page-hero-title" class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight" data-astro-cid-6hhdcam7>\nNarz\u0119dzia, kt\xF3re oszcz\u0119dzaj\u0105 Tw\xF3j czas\n</h1> <p id="page-hero-subtitle" class="mt-6 text-lg text-secondary" data-astro-cid-6hhdcam7>\nPogrupowane w kategorie, z jasnymi opisami <em data-astro-cid-6hhdcam7>co to jest</em>, <em data-astro-cid-6hhdcam7>jak pomaga w firmie</em> i <em data-astro-cid-6hhdcam7>jak u\u017Cywa\u0107</em>. Wszystko w jednym miejscu, aby \u0142atwo dobra\u0107 w\u0142a\u015Bciwe rozwi\u0105zania do konkretnych zada\u0144.\n</p> </div> </section> <section class="pb-8" data-anim="tabs-section" data-astro-cid-6hhdcam7> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-6hhdcam7> <div class="relative" data-astro-cid-6hhdcam7> <div role="tablist" aria-label="Kategorie narz\u0119dzi" id="tab-list-container" class="flex flex-col sm:flex-row gap-2 sm:gap-2 sm:overflow-x-auto overflow-visible no-scrollbar border-b border-white/10 pb-2" data-astro-cid-6hhdcam7> <div class="tab-indicator absolute bottom-[-1px] h-0.5 bg-gradient-to-r from-accent-start to-accent-end rounded-full sm:block hidden" data-astro-cid-6hhdcam7></div> ', ' </div> <div id="tab-scroll-fade" class="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none lg:hidden opacity-0 sm:opacity-0" data-astro-cid-6hhdcam7></div> </div> </div> </section> <section class="pb-20 sm:pb-32 overflow-hidden" data-astro-cid-6hhdcam7> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-anim="panels-container" data-astro-cid-6hhdcam7> ', " </div> </section> ", " </main> ", ' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), renderComponent($$result2, "Header", $$Header, { "data-astro-cid-6hhdcam7": true }), maybeRenderHead(), categories.map((cat, i) => renderTemplate`<button${addAttribute(`tab-${cat.id}`, "id")} role="tab"${addAttribute(cat.id, "data-tab")}${addAttribute(i === 0 ? "true" : "false", "aria-selected")}${addAttribute([
    "tab-btn text-left whitespace-nowrap px-4 py-3 text-sm sm:text-base font-medium rounded-xl transition-colors duration-300",
    i === 0 ? "bg-surface/60 text-primary" : "bg-surface/40 text-secondary hover:text-primary hover:bg-white/10"
  ], "class:list")} data-astro-cid-6hhdcam7> ${cat.name} </button>`), categories.map((cat, i) => renderTemplate`<div${addAttribute(`panel-${cat.id}`, "id")} role="tabpanel"${addAttribute(`tab-${cat.id}`, "aria-labelledby")}${addAttribute(["tab-panel fade-panel", i !== 0 && "hidden"], "class:list")} data-astro-cid-6hhdcam7> ${cat.id !== "faq" ? renderTemplate`<div class="space-y-8 pt-8" id="tools-accordion-container" data-astro-cid-6hhdcam7> ${cat.tools.map((tool) => renderTemplate`<details${addAttribute(`tool-${tool.data.id}`, "id")} class="group tool-accordion bg-surface/50 border border-white/10 rounded-2xl overflow-hidden" data-astro-cid-6hhdcam7> <summary class="flex items-start gap-4 p-6 cursor-pointer list-none transition-colors hover:bg-white/5" data-astro-cid-6hhdcam7> ${tool.type === "firstParty" ? renderTemplate`<img${addAttribute(tool.data.image.src, "src")}${addAttribute(tool.data.image.alt, "alt")} width="48" height="48" class="w-12 h-12 rounded-lg border border-white/10 flex-shrink-0" loading="lazy" decoding="async" data-astro-cid-6hhdcam7>` : renderTemplate`<div class="w-12 h-12 rounded-lg border border-white/10 bg-black/20 flex items-center justify-center text-primary text-xl font-bold flex-shrink-0" data-astro-cid-6hhdcam7> ${tool.data.name.charAt(0)} </div>`} <div class="flex-1" data-astro-cid-6hhdcam7> <h2 class="text-xl md:text-2xl font-bold text-primary" data-astro-cid-6hhdcam7>${tool.data.name}</h2> <p class="text-secondary mt-1" data-astro-cid-6hhdcam7>${tool.data.tagline}</p> </div> <svg width="20" height="20" viewBox="0 0 24 24" class="accordion-icon mt-1.5 flex-shrink-0 transition-transform duration-300 ease-in-out text-secondary" data-icon-state="plus" aria-hidden="true" data-astro-cid-6hhdcam7> <path class="icon-plus" d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-6hhdcam7></path> <path class="icon-minus hidden" d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-6hhdcam7></path> </svg> </summary> <div class="accordion-content overflow-hidden" data-astro-cid-6hhdcam7> <div class="px-6 pb-6 border-t border-white/10" data-astro-cid-6hhdcam7> <div class="text-secondary leading-relaxed pt-6" data-astro-cid-6hhdcam7> <p data-astro-cid-6hhdcam7><strong class="text-primary font-semibold" data-astro-cid-6hhdcam7>Co to jest?</strong><br data-astro-cid-6hhdcam7>${tool.data.description}</p> <p class="mt-4" data-astro-cid-6hhdcam7><strong class="text-primary font-semibold" data-astro-cid-6hhdcam7>Jak pomaga w biznesie?</strong><br data-astro-cid-6hhdcam7>${tool.data.helps}</p> </div> <div class="mt-8 grid lg:grid-cols-3 gap-6" data-astro-cid-6hhdcam7> <div class="rounded-xl bg-background/50 border border-white/10 p-6" data-astro-cid-6hhdcam7> <h3 class="text-lg font-semibold text-primary" data-astro-cid-6hhdcam7>Najważniejsze funkcje</h3> <ul class="mt-4 space-y-2.5 text-secondary" data-astro-cid-6hhdcam7> ${(tool.data.features || []).map((f) => renderTemplate`<li class="flex items-start gap-3" data-astro-cid-6hhdcam7> <svg class="w-4 h-4 mt-1 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16" data-astro-cid-6hhdcam7><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" data-astro-cid-6hhdcam7></path></svg> <span data-astro-cid-6hhdcam7>${f}</span> </li>`)} </ul> </div> <div class="rounded-xl bg-background/50 border border-white/10 p-6" data-astro-cid-6hhdcam7> <h3 class="text-lg font-semibold text-primary" data-astro-cid-6hhdcam7>Przykłady użycia</h3> <ul class="mt-4 space-y-2.5 text-secondary" data-astro-cid-6hhdcam7> ${(tool.data.examples || []).map((ex) => renderTemplate`<li class="flex items-start gap-3" data-astro-cid-6hhdcam7> <svg class="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16" data-astro-cid-6hhdcam7><path fill-rule="evenodd" d="M3.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354l-3-3a.5.5 0 0 0-.354-.146H3.5zM4 3h5.5v3h3V13H4V3z" data-astro-cid-6hhdcam7></path></svg> <span data-astro-cid-6hhdcam7>${ex}</span> </li>`)} </ul> </div> <div class="rounded-xl bg-background/50 border border-white/10 p-6 flex flex-col" data-astro-cid-6hhdcam7> <h3 class="text-lg font-semibold text-primary" data-astro-cid-6hhdcam7>Dla kogo</h3> <ul class="mt-4 flex flex-wrap gap-2" data-astro-cid-6hhdcam7> ${(tool.data.forWhom || []).map((tag) => renderTemplate`<li class="px-3 py-1 rounded-full bg-white/5 text-secondary text-sm" data-astro-cid-6hhdcam7>${tag}</li>`)} </ul> <div class="mt-auto pt-6" data-astro-cid-6hhdcam7> ${tool.type === "firstParty" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-6hhdcam7": true }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col sm:flex-row gap-3" data-astro-cid-6hhdcam7> <a${addAttribute(tool.data.downloadHref, "href")} class="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-surface hover:bg-white/10 transition text-primary font-medium border border-white/10" data-astro-cid-6hhdcam7>
Pobierz program
</a> <a${addAttribute(tool.data.buyHref, "href")} class="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary hover:brightness-110 transition text-background font-semibold" data-astro-cid-6hhdcam7>
Wykup licencję
</a> </div> <p class="text-xs text-secondary mt-3" data-astro-cid-6hhdcam7>${tool.data.planNote}</p> ` })}` : renderTemplate`<a${addAttribute(tool.data.url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-primary hover:text-accent-start font-semibold transition-colors group/link" data-astro-cid-6hhdcam7>
Otwórz ${tool.data.name} <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 transition-transform group-hover/link:translate-x-1" data-astro-cid-6hhdcam7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-6hhdcam7></path> </svg> </a>`} </div> </div> </div> </div> </div> </details>`)} </div>` : renderTemplate`<div class="bg-surface/50 border border-white/10 p-8 rounded-2xl mt-8" data-astro-cid-6hhdcam7> <h2 class="text-2xl md:text-3xl font-bold text-primary mb-10 text-center" data-astro-cid-6hhdcam7>Najczęściej zadawane pytania</h2> <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8" data-astro-cid-6hhdcam7> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Czy Email Sort Pro działa z każdym klientem pocztowym?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Tak. Program łączy się z dowolnym kontem e‑mail (IMAP/POP3), niezależnie od używanego klienta.</p></div> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Czy wersja darmowa jest ograniczona czasowo?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Nie. Wersja Free nie ma limitu czasu – obowiązuje limit 100 załączników tygodniowo.</p></div> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Jak kupić licencję Pro?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Tymczasowo przez <a href="/kontakt?temat=Licencja%20Email%20Sort%20Pro" class="text-primary hover:underline" data-astro-cid-6hhdcam7>formularz kontaktowy</a>. Wersja sklepu będzie dostępna wkrótce.</p></div> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Czy mogę łączyć kilka kont e‑mail?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Tak. Program obsługuje wiele skrzynek jednocześnie, co ułatwia pracę zespołową.</p></div> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Czy Email Sort Pro działa na Windows i macOS?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Tak, obsługiwane są oba systemy (szczegóły wymagań – w instrukcji pobrania).</p></div> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Czy program może działać cyklicznie lub w tle?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Tak. Uruchamiaj ręcznie lub cyklicznie (np. harmonogram systemowy).</p></div> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Czy narzędzia firm trzecich są płatne?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Większość ma plany darmowe i płatne. Polecam zacząć od Free i rozszerzać w miarę potrzeb.</p></div> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Czy te narzędzia mogę wdrożyć w mojej firmie samodzielnie?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Tak, ale przy większej skali lepiej zaplanować strukturę, uprawnienia i automatyzacje – mogę w tym pomóc.</p></div> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Na jakiej podstawie dobierasz narzędzia do listy?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Priorytet: użyteczność w SMB, łatwość wdrożenia, dobra dokumentacja, rozsądny koszt i stabilny rozwój produktu.</p></div> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Czy oferujesz wdrożenie i szkolenie z narzędzi?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Tak – konfiguracja, szablony, automatyzacje, szkolenie zespołu. Napisz w <a class="text-primary hover:underline" href="/kontakt" data-astro-cid-6hhdcam7>kontakcie</a>.</p></div> <div data-astro-cid-6hhdcam7><h3 class="text-xl font-semibold text-primary" data-astro-cid-6hhdcam7>Jak poprosić o rekomendacje dla mojej branży?</h3><p class="mt-2 text-secondary" data-astro-cid-6hhdcam7>Wystarczy opisać procesy i wielkość zespołu przez formularz kontaktowy.</p></div> </div> </div>`} </div>`), renderComponent($$result2, "CTA", $$CTA, { "data-astro-cid-6hhdcam7": true }), renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-6hhdcam7": true }), unescapeHTML(JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", "name": emailSort.name, "operatingSystem": "Windows, macOS", "applicationCategory": "BusinessApplication", "isAccessibleForFree": true, "description": `${emailSort.tagline} ${emailSort.description}`.replace(/\n/g, " "), "image": `https://bizneswizytowka.pl${emailSort.image.src}`, "url": `https://bizneswizytowka.pl/narzedzia#tool-${emailSort.id}` })), unescapeHTML(JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", "itemListElement": categories.map((c, i) => ({ "@type": "ListItem", "position": i + 1, "name": c.name, "url": `https://bizneswizytowka.pl/narzedzia#${c.id}` })) })), unescapeHTML(JSON.stringify({ "@context": "https://schema.org", "@type": "QAPage", "mainEntity": [{ "@type": "Question", "name": "Czy Email Sort Pro dzia\u0142a z ka\u017Cdym klientem pocztowym?", "acceptedAnswer": { "@type": "Answer", "text": "Tak. Program \u0142\u0105czy si\u0119 z dowolnym kontem e\u2011mail (IMAP/POP3), niezale\u017Cnie od u\u017Cywanego klienta." } }, { "@type": "Question", "name": "Czy wersja darmowa jest ograniczona czasowo?", "acceptedAnswer": { "@type": "Answer", "text": "Nie. Wersja Free nie ma limitu czasu \u2013 obowi\u0105zuje limit 100 za\u0142\u0105cznik\xF3w tygodniowo." } }, { "@type": "Question", "name": "Jak kupi\u0107 licencj\u0119 Pro?", "acceptedAnswer": { "@type": "Answer", "text": "Tymczasowo przez formularz kontaktowy. Wersja sklepu b\u0119dzie dost\u0119pna wkr\xF3tce." } }, { "@type": "Question", "name": "Czy mog\u0119 \u0142\u0105czy\u0107 kilka kont e\u2011mail?", "acceptedAnswer": { "@type": "Answer", "text": "Tak. Program obs\u0142uguje wiele skrzynek jednocze\u015Bnie." } }, { "@type": "Question", "name": "Czy program mo\u017Ce dzia\u0142a\u0107 cyklicznie lub w tle?", "acceptedAnswer": { "@type": "Answer", "text": "Tak. Mo\u017Cna ustawi\u0107 uruchomienia cykliczne (np. harmonogram systemowy)." } }, { "@type": "Question", "name": "Czy narz\u0119dzia firm trzecich s\u0105 p\u0142atne?", "acceptedAnswer": { "@type": "Answer", "text": "Zwykle maj\u0105 plany darmowe i p\u0142atne; warto zacz\u0105\u0107 od wersji Free." } }, { "@type": "Question", "name": "Czy wdro\u017C\u0119 te narz\u0119dzia samodzielnie?", "acceptedAnswer": { "@type": "Answer", "text": "Tak, lecz przy wi\u0119kszej skali warto zaplanowa\u0107 struktur\u0119 i automatyzacje." } }, { "@type": "Question", "name": "Na jakiej podstawie dobrano narz\u0119dzia do listy?", "acceptedAnswer": { "@type": "Answer", "text": "Priorytet: u\u017Cyteczno\u015B\u0107 w SMB, \u0142atwo\u015B\u0107 wdro\u017Cenia, dobra dokumentacja i rozw\xF3j." } }, { "@type": "Question", "name": "Czy planowane s\u0105 kolejne autorskie narz\u0119dzia?", "acceptedAnswer": { "@type": "Answer", "text": "Tak. Lista b\u0119dzie systematycznie rozwijana." } }, { "@type": "Question", "name": "Czy Email Sort Pro dzia\u0142a na Windows i macOS?", "acceptedAnswer": { "@type": "Answer", "text": "Tak, obs\u0142ugiwane s\u0105 oba systemy." } }, { "@type": "Question", "name": "Czy oferujesz wdro\u017Cenia i szkolenie z narz\u0119dzi?", "acceptedAnswer": { "@type": "Answer", "text": "Tak \u2013 konfiguracja, szablony, automatyzacje, szkolenie zespo\u0142u." } }, { "@type": "Question", "name": "Jak poprosi\u0107 o rekomendacje dla mojej bran\u017Cy?", "acceptedAnswer": { "@type": "Answer", "text": "Wystarczy opisa\u0107 procesy i wielko\u015B\u0107 zespo\u0142u przez formularz kontaktowy." } }] }))) })} `;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/narzedzia.astro", void 0);

const $$file = "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/narzedzia.astro";
const $$url = "/narzedzia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Narzedzia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
