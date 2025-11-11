/* empty css                                */
import { e as createAstro, f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_D31pR6kU.mjs';
import 'kleur/colors';
import { $ as $$Layout, b as $$Header, a as $$Footer } from '../chunks/Footer_BIQ4C5qc.mjs';
import { $ as $$CTA } from '../chunks/CTA_BcVc_NfM.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://bizneswizytowka.pl");
const $$Uslugi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Uslugi;
  const pageTitle = "Us\u0142ugi: tworzenie stron, sklep\xF3w i aplikacji | Mateusz Gacek";
  const metaDescription = "Projektuj\u0119 strony www, sklepy internetowe i aplikacje (web, SaaS, desktop). Nowoczesne technologie, wydajno\u015B\u0107 i SEO \u2014 rozwi\u0105zania, kt\xF3re mog\u0105 wspiera\u0107 rozw\xF3j Twojego biznesu.";
  const servicesData = [
    {
      id: "strony-i-sklepy",
      title: "Strony i Sklepy Internetowe",
      description: "Twoja cyfrowa wizyt\xF3wka i potencjalny silnik sprzeda\u017Cy. Tworz\u0119 strony i sklepy, kt\xF3re \u0142\u0105cz\u0105 estetyk\u0119 z wydajno\u015Bci\u0105 i mog\u0105 wspiera\u0107 konwersj\u0119, szybko\u015B\u0107 oraz widoczno\u015B\u0107 w Google.",
      features: [
        "Nowoczesne strony (Astro, Next.js) i CMS (WordPress)",
        "Zaawansowane sklepy e-commerce (WooCommerce, dedykowane)",
        "Integracje p\u0142atno\u015Bci, rezerwacji i formularzy",
        "Pe\u0142na optymalizacja SEO i dobre wyniki w PageSpeed",
        "Aktualne standardy bezpiecze\u0144stwa"
      ],
      timeline: "2 \u2013 8 tygodni",
      iconSrc: "/gfx/Strony-i-Sklepy-Internetowe.png",
      altText: "Ikona us\u0142ugi: tworzenie stron i sklep\xF3w internetowych"
    },
    {
      id: "aplikacje",
      title: "Aplikacje Szyte na Miar\u0119",
      description: "Od koncepcji po wdro\u017Cenie \u2013 buduj\u0119 dedykowane aplikacje webowe, SaaS, desktopowe i mobilne, kt\xF3re automatyzuj\u0105 procesy, rozwi\u0105zuj\u0105 realne problemy i mog\u0105 dawa\u0107 przewag\u0119 konkurencyjn\u0105.",
      features: [
        "Aplikacje SaaS (Software as a Service) z modelem subskrypcyjnym",
        "Niestandardowe aplikacje webowe i panele administracyjne",
        "Aplikacje desktopowe (Windows, macOS) i mobilne (iOS, Android)",
        "Zaawansowane narz\u0119dzia online (kalkulatory, konfiguratory)"
      ],
      timeline: "3 \u2013 9+ miesi\u0119cy",
      iconSrc: "/gfx/Aplikacje-Szyte-na-Miare.png",
      altText: "Ikona us\u0142ugi: dedykowane aplikacje webowe, SaaS i desktop"
    },
    {
      id: "grafika",
      title: "Identyfikacja Wizualna",
      description: "Dbam o sp\xF3jny wizerunek \u2014 od logotyp\xF3w, przez materia\u0142y drukowane, po grafiki cyfrowe \u2014 aby u\u0142atwi\u0107 odbi\xF3r i rozpoznawalno\u015B\u0107 marki.",
      features: [
        "Projektowanie logotyp\xF3w i ksi\u0119gi znak\xF3w",
        "Projekty materia\u0142\xF3w do druku (wizyt\xF3wki, ulotki)",
        "Grafiki na potrzeby medi\xF3w spo\u0142eczno\u015Bciowych",
        "Obr\xF3bka zdj\u0119\u0107 produktowych i wzorce dokument\xF3w"
      ],
      timeline: "1 \u2013 3 tygodnie",
      iconSrc: "/gfx/Identyfikacja-Wizualna.png",
      altText: "Ikona us\u0142ugi: identyfikacja wizualna i projekty graficzne"
    },
    {
      id: "opieka",
      title: "Opieka i Wsparcie Techniczne",
      description: "Kompleksowa opieka techniczna, kt\xF3ra pomaga utrzyma\u0107 bezpiecze\u0144stwo, aktualno\u015B\u0107 i niezawodno\u015B\u0107 Twoich stron i aplikacji \u2014 z jasn\u0105 komunikacj\u0105 i monitoringiem.",
      features: [
        "Sta\u0142a opieka i monitoring 24/7 (Support Retainer)",
        "Administracja i zabezpieczanie WordPress / WooCommerce",
        "Audyty bezpiecze\u0144stwa, wydajno\u015Bci i SEO",
        "Modernizacje i naprawy istniej\u0105cych stron",
        "Doradztwoologiczne"
      ],
      timeline: "Us\u0142uga ci\u0105g\u0142a",
      iconSrc: "/gfx/Opieka-i-Wparcie-Techniczne.png",
      altText: "Ikona us\u0142ugi: opieka i wsparcie techniczne"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": metaDescription, "data-astro-cid-hcxzsdbf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-hcxzsdbf": true })} ${maybeRenderHead()}<main data-astro-cid-hcxzsdbf> <nav class="sr-only" aria-label="okruszki" data-astro-cid-hcxzsdbf> <ol data-astro-cid-hcxzsdbf> <li data-astro-cid-hcxzsdbf><a href="/" data-astro-cid-hcxzsdbf>Strona główna</a></li> <li aria-current="page" data-astro-cid-hcxzsdbf>Usługi</li> </ol> </nav> <section class="pt-32 pb-20 text-center" data-astro-cid-hcxzsdbf> <div class="relative z-10 text-center px-4 w-full md:w-5/6 lg:w-4/5 mx-auto" data-astro-cid-hcxzsdbf> <h1 id="page-hero-title" class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight" data-astro-cid-hcxzsdbf>
Nowoczesne Rozwiązania Cyfrowe dla Twojego Biznesu
</h1> <p id="page-hero-subtitle" class="mt-6 text-lg text-secondary" data-astro-cid-hcxzsdbf>
Od szybkich stron internetowych, przez aplikacje szyte na miarę, po stałe wsparcie techniczne — zobacz, jak moje rozwiązania mogą wspierać rozwój Twojej firmy.
</p> </div> </section> <section id="uslugi" class="pb-20 sm:pb-32" data-astro-cid-hcxzsdbf> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-hcxzsdbf> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16" data-astro-cid-hcxzsdbf> <aside class="hidden lg:block" data-astro-cid-hcxzsdbf> <nav class="lg:sticky top-24" aria-label="nawigacja po usługach" data-astro-cid-hcxzsdbf> <ul class="space-y-4" data-astro-cid-hcxzsdbf> ${servicesData.map((service) => renderTemplate`<li data-astro-cid-hcxzsdbf> <a${addAttribute(`#${service.id}`, "href")} class="service-nav-link text-secondary hover:text-primary transition-colors duration-300"${addAttribute(service.id, "data-link-id")} data-astro-cid-hcxzsdbf>${service.title}</a> </li>`)} </ul> </nav> </aside> <div class="lg:col-span-2 space-y-16" data-astro-cid-hcxzsdbf> ${servicesData.map((service) => renderTemplate`<article${addAttribute(service.id, "id")} class="service-content-card bg-surface/50 border border-white/10 p-8 rounded-2xl" itemscope itemtype="https://schema.org/Service" data-astro-cid-hcxzsdbf> <meta itemprop="serviceType"${addAttribute(service.title, "content")}> <div class="flex items-center gap-4" data-astro-cid-hcxzsdbf> <img${addAttribute(service.iconSrc, "src")}${addAttribute(service.altText, "alt")} width="40" height="40" loading="lazy" decoding="async" class="w-10 h-10" itemprop="image" data-astro-cid-hcxzsdbf> <h2 class="text-2xl font-bold text-primary" itemprop="name" data-astro-cid-hcxzsdbf>${service.title}</h2> </div> <p class="mt-4 text-secondary leading-relaxed" itemprop="description" data-astro-cid-hcxzsdbf>${service.description}</p> <h3 class="mt-8 mb-4 text-sm font-semibold text-primary uppercase tracking-wider" data-astro-cid-hcxzsdbf>W ramach tej usługi:</h3> <ul class="space-y-2" data-astro-cid-hcxzsdbf> ${service.features.map((feature) => renderTemplate`<li class="flex items-start gap-3" data-astro-cid-hcxzsdbf> <svg class="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-astro-cid-hcxzsdbf> <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" data-astro-cid-hcxzsdbf></path> </svg> <span class="text-secondary" data-astro-cid-hcxzsdbf>${feature}</span> </li>`)} </ul> <div class="mt-8 pt-6 border-t border-white/10" data-astro-cid-hcxzsdbf> <h4 class="text-sm text-secondary" data-astro-cid-hcxzsdbf>Typowy czas realizacji</h4> <p class="text-lg font-semibold text-primary" data-astro-cid-hcxzsdbf>${service.timeline}</p> </div> <div class="mt-6" data-astro-cid-hcxzsdbf> <a href="/kontakt" class="text-primary hover:underline font-medium" data-astro-cid-hcxzsdbf>Zapytaj o wycenę</a> <span class="text-secondary mx-2" data-astro-cid-hcxzsdbf>•</span> <a href="/portfolio" class="text-primary hover:underline font-medium" data-astro-cid-hcxzsdbf>Zobacz realizacje</a> </div> </article>`)} </div> </div> </div> </section> <section id="faq" class="py-20 border-t border-white/10" data-astro-cid-hcxzsdbf> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-hcxzsdbf> <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-10 text-center" data-astro-cid-hcxzsdbf>
Najczęściej zadawane pytania
</h2> <div class="space-y-8" data-astro-cid-hcxzsdbf> <div data-astro-cid-hcxzsdbf> <h3 class="text-xl font-semibold text-primary" data-astro-cid-hcxzsdbf>
Ile trwa stworzenie strony lub sklepu internetowego?
</h3> <p class="mt-2 text-secondary" data-astro-cid-hcxzsdbf>
Standardowy czas realizacji projektu to od 2 do 8 tygodni, w zależności od zakresu i stopnia złożoności. Projekty e-commerce lub z indywidualnymi funkcjami mogą wymagać więcej czasu.
</p> </div> <div data-astro-cid-hcxzsdbf> <h3 class="text-xl font-semibold text-primary" data-astro-cid-hcxzsdbf>
W jakich technologiach realizowane są projekty?
</h3> <p class="mt-2 text-secondary" data-astro-cid-hcxzsdbf>
Dobieram technologię do potrzeb projektu. Pracuję m.in. w HTML, CSS, JavaScript, PHP, Python, SQL, a także w frameworkach i narzędziach takich jak Next.js, Django, Astro, Tailwind CSS i WordPress.
</p> </div> <div data-astro-cid-hcxzsdbf> <h3 class="text-xl font-semibold text-primary" data-astro-cid-hcxzsdbf>
Czy oferujesz wsparcie po wdrożeniu?
</h3> <p class="mt-2 text-secondary" data-astro-cid-hcxzsdbf>
Tak, zapewniam opiekę i wsparcie techniczne w formie stałej współpracy lub pojedynczych zleceń. Obejmuje to aktualizacje, monitoring, optymalizacje i doradztwo.
</p> </div> <div data-astro-cid-hcxzsdbf> <h3 class="text-xl font-semibold text-primary" data-astro-cid-hcxzsdbf>
Czy mogę zlecić modernizację istniejącej strony lub sklepu?
</h3> <p class="mt-2 text-secondary" data-astro-cid-hcxzsdbf>
Tak. Wykonuję zarówno pełne przebudowy, jak i mniejsze modyfikacje — od zmian wizualnych po optymalizację szybkości, SEO i bezpieczeństwa.
</p> </div> <div data-astro-cid-hcxzsdbf> <h3 class="text-xl font-semibold text-primary" data-astro-cid-hcxzsdbf>
Jak wygląda proces tworzenia projektu od strony klienta?
</h3> <p class="mt-2 text-secondary" data-astro-cid-hcxzsdbf>
Zwykle zaczynamy od rozmowy o celach biznesowych, następnie przygotowuję wstępny plan i wycenę. Po akceptacji przechodzimy do projektowania, wdrożenia i testów, a na końcu szkolenia z obsługi.
</p> </div> <div data-astro-cid-hcxzsdbf> <h3 class="text-xl font-semibold text-primary" data-astro-cid-hcxzsdbf>
Czy mogę otrzymać projekt w kilku językach?
</h3> <p class="mt-2 text-secondary" data-astro-cid-hcxzsdbf>
Tak, tworzę strony i aplikacje w wersjach wielojęzycznych. Mogą one korzystać z ręcznych tłumaczeń lub integracji z systemami automatycznego tłumaczenia.
</p> </div> <div data-astro-cid-hcxzsdbf> <h3 class="text-xl font-semibold text-primary" data-astro-cid-hcxzsdbf>
Jakie dodatkowe usługi mogę połączyć z wykonaniem strony?
</h3> <p class="mt-2 text-secondary" data-astro-cid-hcxzsdbf>
W ramach współpracy mogę przygotować identyfikację wizualną, grafiki marketingowe, integracje z systemami CRM, narzędziami analitycznymi oraz wdrożyć automatyzacje procesów.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, { "data-astro-cid-hcxzsdbf": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-hcxzsdbf": true })} ` })} ${renderScript($$result, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/uslugi.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/uslugi.astro", void 0);

const $$file = "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/uslugi.astro";
const $$url = "/uslugi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Uslugi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
