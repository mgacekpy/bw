import { e as createAstro, f as createComponent, h as addAttribute, n as renderScript, r as renderTemplate, m as maybeRenderHead, k as renderComponent, o as renderSlot, p as renderHead, s as spreadAttributes } from './astro/server_D31pR6kU.mjs';
import 'kleur/colors';
/* empty css                        */
import 'clsx';

const $$Astro$2 = createAstro("https://bizneswizytowka.pl");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Mateusz/Desktop/Nowy folder/bw/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$CookieConsent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div id="cookie-consent-banner" class="fixed bottom-0 left-0 right-0 bg-surface border-t border-white/10 p-4 z-50 transition-all duration-500 ease-in-out transform translate-y-full" role="dialog" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-desc" data-astro-cid-garwan2p> <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4" data-astro-cid-garwan2p> <div class="text-center sm:text-left" data-astro-cid-garwan2p> <h2 id="cookie-consent-title" class="sr-only" data-astro-cid-garwan2p>Zgoda na pliki cookie</h2> <p id="cookie-consent-desc" class="text-sm text-secondary" data-astro-cid-garwan2p>
U\u017Cywamy plik\xF3w cookie do analizy ruchu i ulepszania strony. Klikaj\u0105c \u201EAkceptuj\u0119\u201D, zgadzasz si\u0119 na ich u\u017Cycie. Wi\u0119cej informacji znajdziesz w naszej
<a href="/polityka-prywatnosci" class="font-semibold text-primary hover:underline" data-astro-cid-garwan2p>Polityce prywatno\u015Bci</a>.
</p> </div> <button id="cookie-consent-accept" class="bg-primary hover:brightness-110 text-background font-semibold py-2 px-5 rounded-lg transition-all duration-300 text-sm flex-shrink-0" data-astro-cid-garwan2p>
Akceptuj\u0119
</button> </div> </div>  <script>
    // Ca\u0142a logika jest tutaj, w jednym miejscu.
    document.addEventListener('DOMContentLoaded', () => {
        const banner = document.getElementById('cookie-consent-banner');
        const acceptButton = document.getElementById('cookie-consent-accept');
        const consentKey = 'cookie_consent_accepted';

        // 1. Sprawd\u017A, czy zgoda zosta\u0142a ju\u017C udzielona
        if (localStorage.getItem(consentKey) === 'true') {
            // Je\u015Bli tak, nie r\xF3b nic. Baner pozostanie ukryty.
            return;
        }

        // 2. Je\u015Bli nie ma zgody, poka\u017C baner
        // U\u017Cywamy ma\u0142ego op\xF3\u017Anienia, aby animacja zadzia\u0142a\u0142a poprawnie
        setTimeout(() => {
            banner.classList.add('visible');
        }, 100);

        // 3. Obs\u0142uga klikni\u0119cia przycisku "Akceptuj\u0119"
        acceptButton.addEventListener('click', () => {
            // Zapisz zgod\u0119 w localStorage
            localStorage.setItem(consentKey, 'true');

            // Ukryj baner z animacj\u0105
            banner.classList.remove('visible');
            
            // WA\u017BNE: W tym miejscu mo\u017Cesz uruchomi\u0107 skrypty, kt\xF3re wymagaj\u0105 zgody,
            // np. inicjalizacj\u0119 Google Analytics.
            console.log('Zgoda na cookies zaakceptowana. Uruchamiam analityk\u0119...');
            
            
        });
    });
<\/script>`])), maybeRenderHead());
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/components/CookieConsent.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://bizneswizytowka.pl");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Tworzenie stron, sklep\xF3w, aplikacji webowych i desktopowych. Nowoczesne technologie, realne wyniki biznesowe.", ogImage = "/og/og-image.jpg" } = Astro2.props;
  const canonical = Astro2.url?.href ?? "https://bizneswizytowka.pl/";
  const siteName = "BiznesWizytowka.pl";
  return renderTemplate(_a || (_a = __template(['<html lang="pl"> <head>', '<meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>', '</title><meta name="description"', '><link rel="canonical"', '><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:site_name"', '><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="icon" type="image/svg+xml" href="/logotype/Favicon-marki-BiznesWizytowka-pl-tworzenie-stron-i-aplikacji-dla-firm.svg"><meta name="generator"', `><link rel="preload" href="/fonts/inter-v19-latin_latin-ext-regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/inter-v19-latin_latin-ext-700.woff2" as="font" type="font/woff2" crossorigin><style>
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/fonts/inter-v19-latin_latin-ext-regular.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url('/fonts/inter-v19-latin_latin-ext-500.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url('/fonts/inter-v19-latin_latin-ext-600.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('/fonts/inter-v19-latin_latin-ext-700.woff2') format('woff2');
        }
         @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url('/fonts/inter-v19-latin_latin-ext-800.woff2') format('woff2');
        }
    </style><!-- JSON\u2011LD --><script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": siteName,
      "url": "https://bizneswizytowka.pl/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://bizneswizytowka.pl/szukaj?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })}
  <\/script><script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BiznesWizytowka.pl",
      "url": "https://bizneswizytowka.pl/",
      "logo": "https://bizneswizytowka.pl/logotype/Logo-marki-BiznesWizytowka-pl-tworzenie-stron-i-aplikacji-dla-firm.svg",
      "sameAs": []
    })}
  <\/script><script defer src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>`, "", '</head> <body class="bg-background text-primary overflow-x-hidden antialiased"> ', " ", " ", ' <script async src="https://www.googletagmanager.com/gtag/js?id=G-NGJ9WETJ71"><\/script> ', " </body> </html>"])), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), title, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonical, "content"), addAttribute(siteName, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(Astro2.generator, "content"), renderSlot($$result, $$slots["head"]), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "CookieConsent", $$CookieConsent, {}), renderScript($$result, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"));
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://bizneswizytowka.pl");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname.replace(/\/+$/, "") || "/";
  const isActive = (href) => href === "/" ? currentPath === "/" : currentPath.startsWith(href);
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-lg border-b border-white/10" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between h-16 px-5" data-astro-cid-3ef6ksr2> <div class="flex-shrink-0 nav-item" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <img src="/logotype/Logo-marki-BiznesWizytowka-pl-tworzenie-stron-i-aplikacji-dla-firm.svg" alt="Logo BiznesWizytowka.pl" class="h-auto" style="width: 150px;" data-astro-cid-3ef6ksr2> </a> </div> <nav class="hidden lg:flex space-x-2 items-center" data-astro-cid-3ef6ksr2> <a href="/"${addAttribute(`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${isActive("/") ? "text-primary" : "text-secondary hover:text-primary"}`, "class")} data-astro-cid-3ef6ksr2>
Start<span class="underline-span absolute bottom-1 left-0 w-full h-0.5 bg-accent-end rounded-full" data-astro-cid-3ef6ksr2></span> </a> <a href="/uslugi"${addAttribute(`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${isActive("/uslugi") ? "text-primary" : "text-secondary hover:text-primary"}`, "class")} data-astro-cid-3ef6ksr2>
Usługi<span class="underline-span absolute bottom-1 left-0 w-full h-0.5 bg-accent-end rounded-full" data-astro-cid-3ef6ksr2></span> </a> <a href="/narzedzia"${addAttribute(`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${isActive("/narzedzia") ? "text-primary" : "text-secondary hover:text-primary"}`, "class")} data-astro-cid-3ef6ksr2>
Narzędzia<span class="underline-span absolute bottom-1 left-0 w-full h-0.5 bg-accent-end rounded-full" data-astro-cid-3ef6ksr2></span> </a> <a href="/portfolio"${addAttribute(`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${isActive("/portfolio") ? "text-primary" : "text-secondary hover:text-primary"}`, "class")} data-astro-cid-3ef6ksr2>
Portfolio<span class="underline-span absolute bottom-1 left-0 w-full h-0.5 bg-accent-end rounded-full" data-astro-cid-3ef6ksr2></span> </a> <!-- Sklep usunięty z menu --> <a href="/blog"${addAttribute(`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${isActive("/blog") ? "text-primary" : "text-secondary hover:text-primary"}`, "class")} data-astro-cid-3ef6ksr2>
Blog<span class="underline-span absolute bottom-1 left-0 w-full h-0.5 bg-accent-end rounded-full" data-astro-cid-3ef6ksr2></span> </a> <a href="/o-mnie"${addAttribute(`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${isActive("/o-mnie") ? "text-primary" : "text-secondary hover:text-primary"}`, "class")} data-astro-cid-3ef6ksr2>
O mnie<span class="underline-span absolute bottom-1 left-0 w-full h-0.5 bg-accent-end rounded-full" data-astro-cid-3ef6ksr2></span> </a> <a href="/kontakt"${addAttribute(`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${isActive("/kontakt") ? "text-primary" : "text-secondary hover:text-primary"}`, "class")} data-astro-cid-3ef6ksr2>
Kontakt<span class="underline-span absolute bottom-1 left-0 w-full h-0.5 bg-accent-end rounded-full" data-astro-cid-3ef6ksr2></span> </a> </nav> <div class="hidden lg:block" data-astro-cid-3ef6ksr2> <a href="/panel-klienta" class="bg-primary hover:brightness-110 text-background font-semibold py-2 px-5 rounded-lg transition-all duration-300 text-sm" data-astro-cid-3ef6ksr2>
Zaloguj / Zarejestruj
</a> </div> <div class="lg:hidden" data-astro-cid-3ef6ksr2> <button id="menu-toggle" class="text-primary focus:outline-none z-50 relative" aria-label="Otwórz menu nawigacyjne" data-astro-cid-3ef6ksr2> <svg id="menu-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-8 6h8" data-astro-cid-3ef6ksr2></path></svg> <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path></svg> </button> </div> </div> </header> <div id="mobile-menu" class="lg:hidden fixed inset-0 bg-background/50 backdrop-blur-lg z-40 flex-col items-center justify-center gap-8 text-2xl text-center" style="display: none;" data-astro-cid-3ef6ksr2> <a href="/" class="mobile-link" data-astro-cid-3ef6ksr2>Start</a> <a href="/uslugi" class="mobile-link" data-astro-cid-3ef6ksr2>Usługi</a> <a href="/narzedzia" class="mobile-link" data-astro-cid-3ef6ksr2>Narzędzia</a> <a href="/portfolio" class="mobile-link" data-astro-cid-3ef6ksr2>Portfolio</a> <!-- Sklep usunięty z menu --> <a href="/blog" class="mobile-link" data-astro-cid-3ef6ksr2>Blog</a> <a href="/o-mnie" class="mobile-link" data-astro-cid-3ef6ksr2>O mnie</a> <a href="/kontakt" class="mobile-link" data-astro-cid-3ef6ksr2>Kontakt</a> <a href="/panel-klienta" class="mobile-link mt-8 bg-primary text-background font-semibold py-3 px-8 rounded-lg" data-astro-cid-3ef6ksr2>Zaloguj / Zarejestruj</a> </div> `;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerLinks = [
    {
      title: "Menu",
      links: [
        { name: "Start", href: "/" },
        { name: "Us\u0142ugi", href: "/uslugi" },
        { name: "Narz\u0119dzia", href: "/narzedzia" },
        { name: "Portfolio", href: "/portfolio" },
        /* Sklep usunięty z menu */
        { name: "Blog", href: "/blog" },
        { name: "O mnie", href: "/o-mnie" },
        { name: "Kontakt", href: "/kontakt" }
      ]
    },
    {
      title: "Social",
      links: [
        // { name: 'LinkedIn', href: '/' },
        // { name: 'GitHub', href: '/' },
      ]
    },
    {
      title: "Przydatne",
      links: [
        { name: "Regulamin", href: "/regulamin" },
        { name: "Polityka prywatno\u015Bci", href: "/polityka-prywatnosci" },
        { name: "Kontakt bezpo\u015Bredni", href: "mailto:kontakt@bizneswizytowka.pl" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-background border-t border-white/10 pt-16 pb-8"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-2 md:grid-cols-5 gap-8"> <div class="col-span-2 md:col-span-2"> <div class="flex flex-col gap-4 items-start"> <h3 class="text-lg font-bold text-primary">Mateusz Gacek</h3> <p class="text-secondary text-sm max-w-xs">
Tworzenie stron www, sklepów internetowych, aplikacji webowych i desktopowych dla firm i przedsiębiorców. Realizacje w Polsce i na rynkach zagranicznych.
</p> </div> </div> ${footerLinks.map((column) => renderTemplate`<div class="col-span-1"> <h4 class="font-semibold text-primary mb-4">${column.title}</h4> <ul class="space-y-3"> ${column.links.map((link) => {
    const external = link.href.startsWith("http");
    return renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-secondary hover:text-primary transition-colors text-sm"${spreadAttributes(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}> ${link.name} </a> </li>`;
  })} </ul> </div>`)} </div> <div class="mt-16 pt-8 border-t border-white/10 text-center"> <p class="text-secondary text-sm">&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} BiznesWizytowka.pl. Wszelkie prawa zastrzeżone.</p> </div> </div> </footer>`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Footer as a, $$Header as b };
