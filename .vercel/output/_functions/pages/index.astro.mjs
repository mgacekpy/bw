/* empty css                                */
import { e as createAstro, f as createComponent, m as maybeRenderHead, n as renderScript, r as renderTemplate, h as addAttribute, u as unescapeHTML, k as renderComponent } from '../chunks/astro/server_D31pR6kU.mjs';
import 'kleur/colors';
import { $ as $$Layout, b as $$Header, a as $$Footer } from '../chunks/Footer_BIQ4C5qc.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$CTA } from '../chunks/CTA_BcVc_NfM.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://bizneswizytowka.pl");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-shwxrd6l> <canvas id="neuralCanvas" data-astro-cid-shwxrd6l></canvas> <div class="content" data-astro-cid-shwxrd6l> <h1 id="hero-title" class="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" data-astro-cid-shwxrd6l>
Twoja firma zasługuje na technologię, która przyciąga klientów i zwiększa zyski.
</h1> <p id="hero-subtitle" class="mt-6 text-lg text-white/70 max-w-2xl mx-auto" data-astro-cid-shwxrd6l>
Tworzę nowoczesne strony internetowe, sklepy online, aplikacje webowe i desktopowe, które wspierają rozwój firm – od lokalnych biznesów po ambitne startupy. Moje projekty są nie tylko estetyczne, ale przede wszystkim skuteczne i dostosowane do Twoich realnych celów.
</p> <div id="hero-button" class="mt-10" data-astro-cid-shwxrd6l> <a href="/kontakt" class="rounded-md bg-white px-4 py-2 text-sm font-semibold text-background shadow-sm hover:bg-gray-200 transition-colors" data-astro-cid-shwxrd6l>
Bezpłatna Wycena
</a> </div> </div> </section> ${renderScript($$result, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/sections/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/sections/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Strony i sklepy internetowe",
      imageSrc: "/gfx/web-development-html-css-js-ikona-graficzna.jpg",
      altText: "Ikona Web Development \u2013 wizualizacja kodu HTML, CSS i JavaScript z interfejsem strony w stylu 3D",
      details: "Tworz\u0119 nowoczesne i responsywne strony internetowe oraz sklepy online, kt\xF3re nie tylko dobrze wygl\u0105daj\u0105, ale przede wszystkim wspieraj\u0105 sprzeda\u017C i buduj\u0105 zaufanie do marki. Wdra\u017Cam witryny oparte o WordPress z dedykowanym panelem CMS, a tak\u017Ce zaawansowane projekty w Next.js lub z architektur\u0105 Headless. Sklepy internetowe realizuj\u0119 na WooCommerce lub jako rozwi\u0105zania dedykowane \u2013 z integracj\u0105 p\u0142atno\u015Bci, systemami zam\xF3wie\u0144 i intuicyjnym interfejsem. Ka\u017Cdy projekt jest zoptymalizowany pod k\u0105tem SEO, szybko\u015Bci dzia\u0142ania, bezpiecze\u0144stwa oraz dopasowany do bran\u017Cy i cel\xF3w klienta. To nie tylko strona \u2013 to narz\u0119dzie, kt\xF3re mo\u017Ce realnie wspiera\u0107 Tw\xF3j biznes i pomaga\u0107 w zwi\u0119kszaniu jego potencja\u0142u."
    },
    {
      title: "Aplikacje SaaS & Webowe",
      imageSrc: "/gfx/saas-applications-ikona-graficzna.jpg",
      altText: "Ikona SaaS Applications \u2013 nowoczesna grafika z ekranami aplikacji mobilnej i webowej w modelu SaaS",
      details: "Projektuj\u0119 aplikacje webowe i rozwi\u0105zania SaaS, kt\xF3re wspieraj\u0105 firmy w automatyzacji, zarz\u0105dzaniu i sprzeda\u017Cy. Tworz\u0119 systemy rezerwacji, panele klienta, platformy subskrypcyjne i inne dedykowane narz\u0119dzia w oparciu o nowoczesne technologie takie jak Next.js, React, Node.js i Python. Ka\u017Cda aplikacja powstaje na bazie realnych potrzeb biznesowych \u2013 \u0142\u0105cz\u0105c dopracowany frontend z funkcjonalnym backendem, autoryzacj\u0105, baz\u0105 danych i integracjami z zewn\u0119trznymi systemami. Je\u015Bli potrzebujesz aplikacji, kt\xF3ra dzia\u0142a w chmurze, obs\u0142uguje konta u\u017Cytkownik\xF3w, p\u0142atno\u015Bci i subskrypcje, to dostarcz\u0119 Ci gotowe, skalowalne i bezpieczne rozwi\u0105zanie, kt\xF3re mo\u017Ce u\u0142atwi\u0107 rozw\xF3j Twojej firmy."
    },
    {
      title: "Aplikacje Desktop",
      imageSrc: "/gfx/desktop-applications-ikona-graficzna.jpg",
      altText: "Ikona Desktop Applications \u2013 wizualizacja okien programu i interfejsu u\u017Cytkownika w stylu 3D",
      details: "Tworz\u0119 stabilne i szybkie aplikacje desktopowe na Windows i macOS, idealne do pracy offline lub w \u015Brodowisku, kt\xF3re nie wymaga dzia\u0142ania w przegl\u0105darce. Korzystam z technologii Electron i Python, co pozwala budowa\u0107 narz\u0119dzia z nowoczesnym interfejsem, obs\u0142ug\u0105 lokalnych plik\xF3w, synchronizacj\u0105 danych i aktywacj\u0105 kluczem. Aplikacje desktopowe to doskona\u0142y wyb\xF3r dla firm potrzebuj\u0105cych w\u0142asnego oprogramowania do analizy danych, generowania dokument\xF3w, zarz\u0105dzania projektami czy integracji ze sprz\u0119tem. Dzia\u0142aj\u0105 szybko, uruchamiaj\u0105 si\u0119 lokalnie i nie s\u0105 zale\u017Cne od internetu \u2013 to bezpieczne i sprawdzone rozwi\u0105zanie dla wielu bran\u017C."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="uslugi" class="py-20 sm:py-32"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="services-title text-3xl sm:text-4xl font-bold tracking-tight  animate-on-scroll">Kluczowe Obszary Działania</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="service-card bg-surface rounded-2xl p-1 flex flex-col border border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5  animate-on-scroll"> <div class="bg-background rounded-t-xl h-64 w-full flex-shrink-0 overflow-hidden group p-4"> <img${addAttribute(service.imageSrc, "src")}${addAttribute(service.altText, "alt")} loading="lazy" decoding="async" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"> </div> <div class="p-6 flex justify-between items-center"> <h3 class="text-lg font-semibold">${service.title}</h3> <button class="service-modal-trigger w-8 h-8 border border-zinc-700 rounded-full flex items-center justify-center text-primary transition-colors hover:bg-primary hover:text-background flex-shrink-0"${addAttribute(service.title, "data-title")}${addAttribute(service.details, "data-details")} aria-haspopup="dialog" aria-controls="service-modal"${addAttribute(`Poka\u017C szczeg\xF3\u0142y: ${service.title}`, "aria-label")}>+</button> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/sections/Services.astro", void 0);

const $$Astro$1 = createAstro("https://bizneswizytowka.pl");
const $$Partnership = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Partnership;
  const partnershipItems = [
    {
      title: "Podej\u015Bcie Strategiczne",
      description: "Nie oferuj\u0119 uniwersalnych rozwi\u0105za\u0144 \u2013 zaczynam od zrozumienia Twojej firmy, proces\xF3w i cel\xF3w.",
      details: "Ka\u017Cdy projekt zaczynam od analizy \u2013 Twojej firmy, klient\xF3w i cel\xF3w. Nie oferuj\u0119 gotowych szablon\xF3w, tylko rozwi\u0105zania szyte na miar\u0119. Dzi\u0119ki temu technologia realnie wspiera rozw\xF3j Twojego biznesu, zamiast by\u0107 tylko kolejn\u0105 '\u0142adn\u0105 stron\u0105'.",
      // Twoja grafika SVG jako HTML string
      visualHTML: `
            <div class="flex items-center justify-around w-full text-zinc-400">
                <div class="flex flex-col items-center gap-2 text-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <span class="text-xs">Analiza</span>
                </div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
                <div class="flex flex-col items-center gap-2 text-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z"></path><path d="M12 12v10"></path><path d="M2 12h10"></path></svg>
                    <span class="text-xs">Cele</span>
                </div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
                <div class="flex flex-col items-center gap-2 text-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 20l4-16m4 16l-4-16H6l-4 16"></path></svg>
                    <span class="text-xs">Rozwi\u0105zanie</span>
                </div>
            </div>`
    },
    {
      title: "Innowacyjno\u015B\u0107 i Jako\u015B\u0107",
      description: "Korzystam z najnowszych, sprawdzonych technologii, aby Twoje produkty by\u0142y szybkie, skalowalne i bezpieczne.",
      details: "Stawiam na nowoczesne i sprawdzone technologie, takie jak Astro, Next.js czy Python. Aplikacje oparte o ten stos gwarantuj\u0105 szybko\u015B\u0107, bezpiecze\u0144stwo i doskona\u0142e do\u015Bwiadczenia u\u017Cytkownika (UX), co przek\u0142ada si\u0119 na wy\u017Csz\u0105 konwersj\u0119.",
      visualHTML: `
            <div class="flex items-center justify-around w-full text-zinc-400">
                <div class="flex flex-col items-center gap-2 text-center">
                    <div class="flex gap-2">
                        <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.83 11.17A.996.996 0 0 0 12.41 11H11v2h1.59c.45 0 .85-.31.97-.75l.02-.06c.15-.48.59-.83 1.1-.83h2.64l-2.3-2.3a.996.996 0 0 0-1.41 0L14 11.59V10a2 2 0 0 0-2-2H8.5a2 2 0 0 0-1.74 1.07l-3.48 6.02A2 2 0 0 0 5.02 18h5.24l2.3 2.3c.78.78 2.05.78 2.83 0l4.55-4.55a.996.996 0 0 0 0-1.41L17.64 12h-2.64c-.66 0-1.21.47-1.35.97l-.02.06c-.16.51-.64.87-1.21.87H11v-1.83c0-.21.07-.41.2-.57L12.83 11.17z"></path></svg>
                        <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13.79 12.63a1.19 1.19 0 0 0-1.19-1.19H12v2.38h.6c.66 0 1.19-.53 1.19-1.19m6.41-5.15L13.81.09a2.38 2.38 0 0 0-3.37 0L4.05 6.48a2.38 2.38 0 0 0 0 3.37l6.39 6.39a2.38 2.38 0 0 0 3.37 0l6.39-6.39a2.38 2.38 0 0 0 0-3.37M15 13.81H9V9h6c1.99 0 3.59 1.6 3.59 3.59v.61c0 1.98-1.6 3.59-3.59 3.59H12v2.38h3c3.31 0 5.98-2.68 5.98-5.98v-.6c0-3.31-2.68-5.98-5.98-5.98H9V4.79h6c.66 0 1.19.53 1.19 1.19v7.83Z"></path></svg>
                    </div>
                    <span class="text-xs">Technologie</span>
                </div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
                <div class="flex flex-col items-center gap-2 text-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M5.12 5.12A8.92 8.92 0 0 1 12 4a8.92 8.92 0 0 1 6.88 1.12"></path><path d="M12 14a2.5 2.5 0 0 0 2.5-2.5c0-.6-.2-1.1-.5-1.5"></path><path d="m13 14 2-2.5-2.5 2"></path><path d="M12 17a5 5 0 0 0 5-5c0-1.2-.4-2.3-1-3.2"></path></svg>
                    <span class="text-xs">Jako\u015B\u0107 i Rozw\xF3j</span>
                </div>
            </div>`
    },
    {
      title: "Pe\u0142ne Zaanga\u017Cowanie",
      description: "Pracuj\u0119 transparentnie, dbam o komunikacj\u0119 i wspieram tak\u017Ce po zako\u0144czeniu wdro\u017Cenia.",
      details: "Wierz\u0119 w transparentn\u0105 wsp\xF3\u0142prac\u0119. Masz sta\u0142y wgl\u0105d w post\u0119p prac, regularnie omawiamy kolejne kroki i wsp\xF3lnie podejmujemy kluczowe decyzje. Jestem Twoim partnerem technologicznym, a nie tylko wykonawc\u0105.",
      visualHTML: `
            <div class="flex items-center justify-around w-full text-zinc-400">
                <div class="flex flex-col items-center gap-2 text-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span class="text-xs">Komunikacja</span>
                </div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
                <div class="flex flex-col items-center gap-2 text-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span class="text-xs">Regularno\u015B\u0107</span>
                </div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
                <div class="flex flex-col items-center gap-2 text-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                    <span class="text-xs">Wsparcie</span>
                </div>
            </div>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="partnerstwo" class="py-20 sm:py-32"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="partnership-title text-3xl sm:text-4xl font-bold tracking-tight">Partnerstwo, a nie tylko kod</h2> </div> <div class="lg:hidden flex flex-col gap-4"> ${partnershipItems.map((item, index) => renderTemplate`<div class="accordion-item border-b border-white/10 last:border-b-0"> <div class="accordion-header cursor-pointer py-4 flex justify-between items-start gap-4"> <div class="flex-grow"> <h3 class="text-lg font-semibold text-primary">${item.title}</h3> <p class="text-sm text-secondary mt-1">${item.description}</p> </div> <svg class="accordion-icon w-5 h-5 text-secondary mt-1 flex-shrink-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> </div> <div class="accordion-content overflow-hidden h-0"> <p class="text-secondary pb-4 leading-relaxed">${item.details}</p> </div> </div>`)} </div> <div class="hidden lg:grid grid-cols-2 gap-16 lg:items-stretch"> <div class="partnership-triggers relative flex flex-col gap-12 justify-center"> <div class="active-indicator absolute left-0 top-0 w-1 h-12 bg-gradient-to-b from-accent-start to-accent-end rounded-full"></div> ${partnershipItems.map((item, index) => renderTemplate`<div class="partnership-item pl-8"${addAttribute(index, "data-index")}> <h3 class="text-2xl font-semibold text-primary">${item.title}</h3> <p class="mt-2 text-secondary">${item.description}</p> </div>`)} </div> <div class="animation-container min-h-[24rem] rounded-2xl relative overflow-hidden bg-background border border-white/10 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:16px_16px] flex flex-col"> <div class="visuals-wrapper h-[35%] w-full relative"> <div class="feature-visual-group absolute inset-0 hidden items-center justify-center p-4" data-index="0">${unescapeHTML(partnershipItems[0].visualHTML)}</div> <div class="feature-visual-group absolute inset-0 hidden items-center justify-center p-4" data-index="1">${unescapeHTML(partnershipItems[1].visualHTML)}</div> <div class="feature-visual-group absolute inset-0 hidden items-center justify-center p-4" data-index="2">${unescapeHTML(partnershipItems[2].visualHTML)}</div> </div> <div class="backdrop-panel h-[65%] w-full relative bg-black/50 backdrop-blur-sm border-t border-white/10 p-12 md:p-8"> <div class="details-wrapper relative h-full"> ${partnershipItems.map((item, index) => renderTemplate`<div class="feature-details absolute inset-0"${addAttribute(index, "data-index")}> <h4 class="font-bold text-lg text-primary mb-2">${item.title}</h4> <p class="text-secondary leading-relaxed">${item.details}</p> </div>`)} </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/sections/Partnership.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const processSteps = [
    {
      title: "Analiza i Strategia",
      description: "Ka\u017Cdy projekt rozpoczynam od g\u0142\u0119bokiego zrozumienia Twojego biznesu, cel\xF3w i grupy docelowej. Definiujemy kluczowe wska\u017Aniki sukcesu (KPI) i tworzymy strategi\u0119, kt\xF3ra zapewni realne rezultaty.",
      icon: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
    },
    {
      title: "Design i Prototypowanie",
      description: "Projektuj\u0119 intuicyjne interfejsy (UI) i do\u015Bwiadczenia u\u017Cytkownika (UX), koncentruj\u0105c si\u0119 na prostocie i efektywno\u015Bci. Tworz\u0119 interaktywne prototypy, kt\xF3re pozwalaj\u0105 nam przetestowa\u0107 i udoskonali\u0107 produkt jeszcze przed rozpocz\u0119ciem kodowania.",
      icon: "M7.5 15h9M7.5 17.25h9M12 21a9 9 0 100-18 9 9 0 000 18z"
    },
    {
      title: "Development i Wdro\u017Cenie",
      description: "Pisz\u0119 czysty, skalowalny i wydajny kod, korzystaj\u0105c z nowoczesnych technologii. Regularnie prezentuj\u0119 post\u0119py prac, a ca\u0142y proces wdro\u017Cenia na serwer jest w pe\u0142ni zautomatyzowany i bezpieczny.",
      icon: "M6.75 7.5l3 2.25-3 2.25m3 0H3m7.5 6l3-2.25-3-2.25m3 0H7.5"
    },
    {
      title: "Testy i Optymalizacja",
      description: "Przeprowadzam dok\u0142adne testy funkcjonalne, wydajno\u015Bciowe i bezpiecze\u0144stwa, aby zapewni\u0107 najwy\u017Csz\u0105 jako\u015B\u0107 produktu. Optymalizuj\u0119 kod i zapytania do bazy danych, gwarantuj\u0105c szybko\u015B\u0107 dzia\u0142ania aplikacji.",
      icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Wsparcie i Rozw\xF3j",
      description: "Moja praca nie ko\u0144czy si\u0119 na wdro\u017Ceniu. Oferuj\u0119 sta\u0142e wsparcie techniczne, monitoring oraz dalszy rozw\xF3j produktu, aby dostosowywa\u0107 go do zmieniaj\u0105cych si\u0119 potrzeb Twojego biznesu i rynku.",
      icon: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="proces" class="py-20 sm:py-32" data-astro-cid-j5az3yuq> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j5az3yuq> <div class="text-center mb-16" data-astro-cid-j5az3yuq> <h2 class="process-title text-3xl sm:text-4xl font-bold tracking-tight" data-astro-cid-j5az3yuq>Proces Współpracy</h2> </div> <div class="lg:hidden flex flex-col" data-astro-cid-j5az3yuq> ${processSteps.map((step, index) => renderTemplate`<div class="process-accordion-item border-b border-white/10 last:border-b-0" data-astro-cid-j5az3yuq> <div class="process-accordion-header cursor-pointer py-4 flex justify-between items-center gap-4" data-astro-cid-j5az3yuq> <div class="flex items-center gap-4" data-astro-cid-j5az3yuq> <span class="text-secondary font-semibold" data-astro-cid-j5az3yuq>${`0${index + 1}`}</span> <h3 class="text-lg font-semibold text-primary" data-astro-cid-j5az3yuq>${step.title}</h3> </div> <svg class="process-accordion-icon w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-j5az3yuq><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j5az3yuq></path></svg> </div> <div class="process-accordion-content overflow-hidden h-0" data-astro-cid-j5az3yuq> <div class="pb-4 pl-10" data-astro-cid-j5az3yuq> <p class="text-secondary leading-relaxed" data-astro-cid-j5az3yuq>${step.description}</p> </div> </div> </div>`)} </div> <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24" data-astro-cid-j5az3yuq> <div class="process-triggers relative" data-astro-cid-j5az3yuq> <div class="active-indicator absolute left-0 top-0 w-1 h-8 bg-gradient-to-b from-accent-start to-accent-end rounded-full" data-astro-cid-j5az3yuq></div> ${processSteps.map((step, index) => renderTemplate`<div class="process-step-trigger relative pl-8 py-4 cursor-pointer"${addAttribute(index, "data-index")} data-astro-cid-j5az3yuq> <div class="flex items-center gap-4" data-astro-cid-j5az3yuq> <span class="step-number text-secondary font-semibold" data-astro-cid-j5az3yuq>${`0${index + 1}`}</span> <h3 class="step-title text-2xl font-semibold text-primary" data-astro-cid-j5az3yuq>${step.title}</h3> </div> </div>`)} </div> <div class="process-content-wrapper min-h-[24rem] rounded-2xl relative bg-[#080808] border border-white/10 shadow-xl flex items-center justify-center p-12 overflow-hidden" data-astro-cid-j5az3yuq> <div class="absolute inset-0 z-0 flex items-center justify-center" data-astro-cid-j5az3yuq> <svg class="spinning-contours w-[150%] h-auto text-primary/10" viewBox="0 0 400 400" fill="none" data-astro-cid-j5az3yuq> <circle cx="200" cy="200" r="50" stroke="currentColor" stroke-width="1" stroke-dasharray="2 10" data-astro-cid-j5az3yuq></circle> <circle cx="200" cy="200" r="100" stroke="currentColor" stroke-width="1" stroke-dasharray="2 12" data-astro-cid-j5az3yuq></circle> <circle cx="200" cy="200" r="150" stroke="currentColor" stroke-width="1" stroke-dasharray="2 14" data-astro-cid-j5az3yuq></circle> <circle cx="200" cy="200" r="200" stroke="currentColor" stroke-width="1" stroke-dasharray="2 16" data-astro-cid-j5az3yuq></circle> </svg> </div> <div class="relative z-10 w-full h-full" data-astro-cid-j5az3yuq> ${processSteps.map((step, index) => renderTemplate`<div class="process-content-item absolute inset-0 text-center flex flex-col items-center justify-center"${addAttribute(index, "data-index")} data-astro-cid-j5az3yuq> <svg class="w-16 h-16 text-primary mx-auto mb-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" data-astro-cid-j5az3yuq> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(step.icon, "d")} data-astro-cid-j5az3yuq></path> </svg> <p class="text-secondary leading-relaxed" data-astro-cid-j5az3yuq>${step.description}</p> </div>`)} </div> </div> </div> </div> </section> `;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/sections/Process.astro", void 0);

const $$Metrics = createComponent(($$result, $$props, $$slots) => {
  const metrics = [
    { value: 100, unit: "%", label: "Wydajno\u015B\u0107", color: "cyan" },
    { value: 100, unit: "%", label: "U\u0142atwienia dost\u0119pu", color: "green" },
    { value: 100, unit: "%", label: "Sprawdzone metody", color: "blue" },
    { value: 100, unit: "%", label: "SEO", color: "purple" },
    { id: "fcp-metric", value: 0, unit: "s", label: "Czas \u0142adowania strony", color: "pink" }
  ];
  const colorVariants = {
    cyan: "from-cyan-500/50",
    green: "from-green-500/50",
    blue: "from-blue-500/50",
    purple: "from-purple-500/50",
    pink: "from-pink-500/50"
  };
  return renderTemplate`${maybeRenderHead()}<section id="metrics" class="py-20 sm:py-32" data-astro-cid-c3dfy3yg> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-c3dfy3yg> <div class="max-w-3xl mx-auto text-center mb-16" data-astro-cid-c3dfy3yg> <h2 class="metrics-title text-3xl sm:text-4xl font-bold tracking-tight" data-astro-cid-c3dfy3yg>Jakość, którą widać w danych</h2> <p class="metrics-subtitle mt-4 text-lg text-secondary" data-astro-cid-c3dfy3yg>
Stawiam na techniczną doskonałość. Poniższe metryki, mierzone za pomocą narzędzi Google, pokazują realną wydajność i jakość moich projektów – w tym stronę, którą właśnie przeglądasz.
</p> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8" data-astro-cid-c3dfy3yg> ${metrics.map((metric) => renderTemplate`<div class="metric-card relative rounded-2xl bg-[#080808] p-4 text-center shadow-xl" data-astro-cid-c3dfy3yg> <svg class="absolute inset-0 w-full h-full" fill="none" data-astro-cid-c3dfy3yg> <rect class="background-border" rx="15" ry="15" data-astro-cid-c3dfy3yg></rect> <rect class="animated-border" rx="15" ry="15" data-astro-cid-c3dfy3yg></rect> </svg> <div${addAttribute(`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorVariants[metric.color]} to-transparent blur-md`, "class")} data-astro-cid-c3dfy3yg></div> <div class="relative" data-astro-cid-c3dfy3yg> <p class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter" data-astro-cid-c3dfy3yg> <span class="metric-value"${addAttribute(metric.value, "data-target")}${addAttribute(metric.id || null, "id")} data-astro-cid-c3dfy3yg>0</span> <span class="text-xl md:text-2xl lg:text-3xl text-secondary" data-astro-cid-c3dfy3yg>${metric.unit}</span> </p> <p class="mt-2 text-xs md:text-sm text-secondary" data-astro-cid-c3dfy3yg>${metric.label}</p> </div> </div>`)} </div> </div> </section> `;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/sections/Metrics.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const portfolioItems = [
    { image: "/portfolio/Strona-internetowa-firmy-instalacyjnej-ES-Serwis.jpg", title: "ES-Serwis", type: "w", alt: "Strona internetowa firmy instalacyjnej ES Serwis \u2013 projekt i wdro\u017Cenie" },
    { image: "/portfolio/Logo-firmy-ES-Serwis-projekt-graficzny.png", title: "ES-Serwis Logo", type: "n", alt: "Logo firmy ES Serwis \u2013 projekt graficzny" },
    { image: "/portfolio/Strona-dla-firmy-sprzatajacej-Masz-Pozamiatane.jpg", title: "Masz Pozamiatane", type: "w", alt: "Strona firmy sprz\u0105taj\u0105cej Masz Pozamiatane \u2013 us\u0142ugi sprz\u0105taj\u0105ce" },
    { image: "/portfolio/Wizytowka-QR-dla-ES-Serwis-projekt-graficzny.png", title: "Wizyt\xF3wka QR", type: "n", alt: "Wizyt\xF3wka z kodem QR dla ES Serwis \u2013 projekt graficzny" },
    { image: "/portfolio/Fotografia-floty-firmowej-ES-Serwis.jpg", title: "Fotografia Floty", type: "n", alt: "Fotografia floty firmowej ES Serwis \u2013 samochody s\u0142u\u017Cbowe" },
    { image: "/portfolio/Strona-internetowa-uslug-geodezyjnych-Geodezja-KJ.jpg", title: "Geodezja KJ", type: "w", alt: "Strona us\u0142ug geodezyjnych Geodezja KJ \u2013 oferta i kontakt" },
    { image: "/portfolio/Logo-marki-Gielda-Zlecen-projekt-graficzny.png", title: "Gie\u0142da Zlece\u0144 Logo", type: "n", alt: "Logo marki Gie\u0142da Zlece\u0144 \u2013 projekt" },
    { image: "/portfolio/Strona-internetowa-specjalisty-IT-Webmaster4You.jpg", title: "Webmaster4You", type: "w", alt: "Strona specjalisty IT Webmaster4You \u2013 projekt i wdro\u017Cenie" }
  ];
  const columnLayout = [
    [portfolioItems[0], portfolioItems[4]],
    [portfolioItems[1], portfolioItems[5]],
    [portfolioItems[2], portfolioItems[6]],
    [portfolioItems[3], portfolioItems[7]]
  ];
  return renderTemplate`${maybeRenderHead()}<section id="portfolio" class="py-20 sm:py-32 overflow-hidden" data-astro-cid-niijykdf> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-niijykdf> <div class="text-center mb-16" data-astro-cid-niijykdf> <h2 class="portfolio-title text-3xl sm:text-4xl font-bold tracking-tight" data-astro-cid-niijykdf>Wybrane Realizacje</h2> </div> </div> <div class="relative" data-astro-cid-niijykdf> <div class="portfolio-gradient absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none lg:hidden" data-astro-cid-niijykdf></div> <div class="portfolio-gradient absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none lg:hidden" data-astro-cid-niijykdf></div> <div class="portfolio-container" data-astro-cid-niijykdf> <div class="hidden lg:grid grid-cols-4 gap-[5px]" data-astro-cid-niijykdf> ${columnLayout.map((columnItems) => renderTemplate`<div class="flex flex-col gap-[5px]" data-astro-cid-niijykdf> ${columnItems.map((item) => renderTemplate`<a href="/portfolio"${addAttribute([
    "portfolio-item group relative block overflow-hidden",
    item.type === "w" ? "aspect-[3/4]" : "aspect-[4/3]"
  ], "class:list")} data-astro-cid-niijykdf> <img${addAttribute(item.image, "src")}${addAttribute(item.alt, "alt")} loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover" data-astro-cid-niijykdf> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" data-astro-cid-niijykdf></div> <div class="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" data-astro-cid-niijykdf> <h3 class="text-white font-bold text-center text-lg" data-astro-cid-niijykdf>${item.title}</h3> </div> </a>`)} </div>`)} </div> <div class="lg:hidden flex overflow-x-auto gap-[10px] px-4 scroll-snap-type-x-mandatory" data-astro-cid-niijykdf> ${portfolioItems.map((item) => renderTemplate`<a href="#"${addAttribute([
    "portfolio-item-mobile group relative block overflow-hidden flex-shrink-0 w-[80vw] sm:w-[45vw] rounded-lg",
    item.type === "w" ? "aspect-[3/4]" : "aspect-[4/3]"
  ], "class:list")} data-astro-cid-niijykdf> <img${addAttribute(item.image, "src")}${addAttribute(item.alt, "alt")} loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover" data-astro-cid-niijykdf> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" data-astro-cid-niijykdf></div> <div class="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" data-astro-cid-niijykdf> <h3 class="text-white font-bold text-center text-lg" data-astro-cid-niijykdf>${item.title}</h3> </div> </a>`)} </div> </div> </div> </section> `;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/sections/Portfolio.astro", void 0);

const $$Astro = createAstro("https://bizneswizytowka.pl");
const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Technologies;
  const coreTechnologies = [
    { name: "HTML5", imageSrc: "/gfx/html.svg", title: "HTML5 \u2013 standard j\u0119zyka znacznik\xF3w do budowania struktury i tre\u015Bci stron internetowych", href: "https://html.spec.whatwg.org/multipage/" },
    { name: "CSS3", imageSrc: "/gfx/css.svg", title: "CSS3 \u2013 nowoczesne arkusze styl\xF3w kaskadowych do nadawania wygl\u0105du i responsywno\u015Bci stron", href: "https://www.w3.org/Style/CSS/" },
    { name: "JavaScript", imageSrc: "/gfx/js.svg", title: "JavaScript \u2013 j\u0119zyk programowania dodaj\u0105cy interaktywno\u015B\u0107, logik\u0119 i dynamik\u0119 do stron internetowych", href: "https://tc39.es/" },
    { name: "PHP", imageSrc: "/gfx/php.svg", title: "PHP \u2013 popularny j\u0119zyk skryptowy do budowania dynamicznych stron i aplikacji webowych po stronie serwera", href: "https://www.php.net/" },
    { name: "Python", imageSrc: "/gfx/python.svg", title: "Python \u2013 wszechstronny j\u0119zyk programowania stosowany w backendzie, analizie danych i automatyzacjach", href: "https://www.python.org/" },
    { name: "SQL", imageSrc: "/gfx/sql.svg", title: "SQL \u2013 j\u0119zyk zapyta\u0144 do zarz\u0105dzania i pobierania danych z relacyjnych baz danych", href: "https://www.iso.org/standard/63555.html" }
  ];
  const frameworksAndLibraries = [
    { name: "Next.js", imageSrc: "/gfx/next.svg", title: "Next.js \u2013 framework React z renderowaniem po stronie serwera i generowaniem statycznym", href: "https://nextjs.org/" },
    { name: "Django", imageSrc: "/gfx/django.svg", title: "Django \u2013 framework Python do szybkiego i bezpiecznego budowania aplikacji webowych po stronie serwera", href: "https://www.djangoproject.com/" },
    { name: "Astro", imageSrc: "/gfx/astro.svg", title: "Astro \u2013 nowoczesny framework do tworzenia szybkich, lekkich stron statycznych i hybrydowych", href: "https://astro.build/" },
    { name: "Tailwind CSS", imageSrc: "/gfx/tailwind.svg", title: "Tailwind CSS \u2013 framework CSS typu utility-first do szybkiego tworzenia responsywnych interfejs\xF3w", href: "https://tailwindcss.com/" },
    { name: "WordPress", imageSrc: "/gfx/wordpress.svg", title: "WordPress \u2013 najpopularniejszy system CMS do zarz\u0105dzania tre\u015Bci\u0105 stron i sklep\xF3w internetowych, w tym WooCommerce", href: "https://wordpress.org/" },
    { name: "WooCommerce", imageSrc: "/gfx/woocommerce.svg", title: "Woocommerce \u2013 najpopularniejszy system zarz\u0105dzania sklepem", href: "https://woocommerce.com/" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="technologie" class="py-20 sm:py-32" data-astro-cid-qbplwuzu> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-qbplwuzu> <div class="max-w-3xl mx-auto text-center mb-16" data-astro-cid-qbplwuzu> <h2 class="tech-title text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll" data-astro-cid-qbplwuzu>Technologie i Narzędzia</h2> <p class="tech-subtitle mt-4 text-lg text-secondary animate-on-scroll" data-astro-cid-qbplwuzu>
W mojej pracy korzystam z nowoczesnych i sprawdzonych rozwiązań, które gwarantują jakość, wydajność i bezpieczeństwo budowanych produktów.
</p> </div> <div class="max-w-3xl mx-auto text-center mb-10" data-astro-cid-qbplwuzu> <h3 class="tech-subtitle-1 text-2xl font-bold tracking-tight" data-astro-cid-qbplwuzu>Języki i Technologie</h3> </div> <div id="core-tech-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8" data-astro-cid-qbplwuzu> ${coreTechnologies.map((tech) => renderTemplate`<a${addAttribute(tech.href, "href")} target="_blank" rel="noopener noreferrer" class="tech-card group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ease-in-out hover:bg-white/10 hover:-translate-y-1 animate-on-scroll"${addAttribute(tech.title, "title")} data-astro-cid-qbplwuzu> <img${addAttribute(tech.imageSrc, "src")} alt="" class="w-12 h-12 text-primary opacity-80 group-hover:opacity-100 transition-colors duration-300" data-astro-cid-qbplwuzu> <p class="text-sm font-semibold text-primary" data-astro-cid-qbplwuzu>${tech.name}</p> </a>`)} </div> <div class="max-w-3xl mx-auto text-center my-16 pt-8 border-t border-white/10" data-astro-cid-qbplwuzu> <h3 class="tech-subtitle-2 text-2xl font-bold tracking-tight" data-astro-cid-qbplwuzu>Frameworki i biblioteki</h3> </div> <div id="frameworks-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8" data-astro-cid-qbplwuzu> ${frameworksAndLibraries.map((tech) => renderTemplate`<a${addAttribute(tech.href, "href")} target="_blank" rel="noopener noreferrer" class="tech-card group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ease-in-out hover:bg-white/10 hover:-translate-y-1 animate-on-scroll"${addAttribute(tech.title, "title")} data-astro-cid-qbplwuzu> <img${addAttribute(tech.imageSrc, "src")} alt="" class="w-12 h-12 text-primary opacity-80 group-hover:opacity-100 transition-colors duration-300" data-astro-cid-qbplwuzu> <p class="text-sm font-semibold text-primary" data-astro-cid-qbplwuzu>${tech.name}</p> </a>`)} </div> </div> </section> `;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/sections/Technologies.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="o-mnie" class="py-20 sm:py-40 overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <div class="about-text"> <h2 class="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">Cześć, jestem Mateusz.</h2> <p class="mt-6 text-xl text-secondary leading-relaxed">
Nazywam się Mateusz Gacek. Projektuję i wdrażam strony prezentacyjne/sprzedażowe oraz aplikacje (web, SaaS, desktop). W praktyce oznacza to połączenie designu, technologii i strategii, żeby Twoja strona lub aplikacja realnie wspierała biznes.
</p> <div class="mt-10"> <a href="/kontakt" class="inline-block bg-surface border border-white/10 text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white/5 transition-colors">
Porozmawiajmy o Twoim projekcie
</a> </div> </div> <div class="about-visual relative w-full h-80 hidden lg:flex items-center justify-center [perspective:1000px]"> <div class="mg-box w-72 h-72 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-lg flex items-center justify-center text-8xl font-bold text-primary relative [transform-style:preserve-3d]"> <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-start to-accent-end opacity-20 blur-xl"></div> <span class="relative z-10">MG</span> </div> </div> </div> </div> </section>`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/sections/About.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "BiznesWizytowka.pl \u2013 Tworzenie stron, sklep\xF3w, aplikacji web i desktop | Wroc\u0142aw";
  const description = "Projektuj\u0119 i wdra\u017Cam strony internetowe, sklepy online, aplikacje webowe i desktopowe. Nowoczesne technologie, szybkie wdro\u017Cenia i realne wyniki dla firm.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "ogImage": "/og/home-og.jpg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Partnership", $$Partnership, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Metrics", $$Metrics, {})} ${renderComponent($$result2, "Portfolio", $$Portfolio, {})} ${renderComponent($$result2, "Technologies", $$Technologies, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} <div id="service-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-label="Szczegóły usługi" class="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4 transition-opacity duration-300 opacity-0 pointer-events-none"> <div id="modal-content" class="bg-surface rounded-lg shadow-xl p-8 w-full max-w-2xl relative border border-zinc-700 transition-transform duration-300 scale-95"> <button id="modal-close" class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">&times;</button> <h2 id="modal-title" class="text-2xl font-bold text-primary mb-6"></h2> <div id="modal-details" class="text-secondary leading-relaxed"></div> </div> </div> ` })}`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/index.astro", void 0);

const $$file = "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
