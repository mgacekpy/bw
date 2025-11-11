/* empty css                                */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as Fragment } from '../chunks/astro/server_D31pR6kU.mjs';
import 'kleur/colors';
import { $ as $$Layout, b as $$Header, a as $$Footer } from '../chunks/Footer_BIQ4C5qc.mjs';
import { $ as $$CTA } from '../chunks/CTA_BcVc_NfM.mjs';
export { renderers } from '../renderers.mjs';

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Portfolio \u2013 strony, aplikacje, grafika i projekty do druku | BiznesWizytowka.pl";
  const metaDescription = "Wybrane realizacje: strony WWW, sklepy, aplikacje web/desktop, logotypy i grafika na strony, projekty do druku. Case\u2019y: cel \u2192 rozwi\u0105zanie \u2192 efekt.";
  const projects = [
    // --- STRONY WWW --- (najlepsze na górze)
    {
      id: "es-serwis",
      title: "ES-Serwis \u2013 Serwis i Us\u0142ugi",
      url: "https://es-serwis.pl/",
      images: [
        { src: "/portfolio/4-es-serwis-strona/es-serwis-strona-internetowa-1.webp", alt: "ES-Serwis \u2013 strona internetowa firmy elektrycznej" },
        { src: "/portfolio/4-es-serwis-strona/es-serwis-strona-internetowa-2.webp", alt: "Projekt ES-Serwis \u2013 oferta us\u0142ug elektrycznych" },
        { src: "/portfolio/4-es-serwis-strona/es-serwis-strona-internetowa-3.webp", alt: "Widok mobilny strony ES-Serwis \u2013 kontakt i CTA" }
      ],
      category: "strony-www",
      tech: ["WordPress", "Motyw blokowy/autorski", "RWD", "SEO og\xF3lnopolskie", "Schema.org ProfessionalService", "WebP", "Cache/CWV", "Blog (long-tail)"],
      goal: "Widoczno\u015B\u0107 og\xF3lnopolska i pozyskiwanie lead\xF3w B2B w przemy\u015Ble.",
      solution: "Struktura ofertowa z landingami pod: instalacje, pomiary, elektryka przemys\u0142owa, remonty elektryczne; mocne CTA; schema ProfessionalService; optymalizacja CWV i cache; blog pod zapytania poradnikowe.",
      outcome: "Wi\u0119kszy ruch z fraz og\xF3lnopolskich i wzrost zapyta\u0144 B2B dzi\u0119ki precyzyjnym landingom us\u0142ug oraz szybkiemu dzia\u0142aniu serwisu.",
      description: "ES-Serwis: serwis WP skalowany na SEO w ca\u0142ej Polsce. Landingi us\u0142ug (instalacje, pomiary, elektryka przemys\u0142owa, remonty), schema i szybkie CWV pod industrial B2B.",
      badges: ["B2B przemys\u0142", "SEO og\xF3lnopolskie", "Szybko\u015B\u0107/CWV"]
    },
    {
      id: "bieglyrzeczoznawca",
      title: "Bieg\u0142y Rzeczoznawca \u2013 Us\u0142ugi",
      url: "https://bieglyrzeczoznawca.pl/",
      images: [
        { src: "/portfolio/1-biegly-rzeczoznawca/biegly-rzeczoznawca-strona-internetowa-1.webp", alt: "Strona internetowa bieg\u0142ego rzeczoznawcy \u2013 strona g\u0142\xF3wna" },
        { src: "/portfolio/1-biegly-rzeczoznawca/biegly-rzeczoznawca-strona-internetowa-2.webp", alt: "Zakres us\u0142ug \u2013 projekt strony bieg\u0142ego rzeczoznawcy" },
        { src: "/portfolio/1-biegly-rzeczoznawca/biegly-rzeczoznawca-strona-internetowa-3.webp", alt: "Widok mobilny \u2013 strona bieg\u0142ego rzeczoznawcy" }
      ],
      category: "strony-www",
      tech: ["HTML", "CSS", "JavaScript", "PHP (vanilla)", "RWD", "PageSpeed/CWV", "Schema.org (Person/LocalBusiness)", "Mapa obszaru dzia\u0142ania", "Lazy-load"],
      goal: "Maksymalna widoczno\u015B\u0107 SEO i bardzo wysokie oceny PageSpeed; leady z formularza i telefonu.",
      solution: "R\u0119cznie pisana, ultralekka strona z zaawansowan\u0105 map\u0105; sekcje E-E-A-T i oferta: ekspertyzy techniczne, opinie s\u0105dowe/przeds\u0105dowe, interpretacje i kwalifikacje, wsparcie w post\u0119powaniach podatkowych; minifikacja i kompresja.",
      outcome: "Lepsze CWV i wy\u017Csze pozycje na zapytania eksperckie, co przek\u0142ada si\u0119 na wi\u0119ksz\u0105 liczb\u0119 kontakt\xF3w.",
      description: "Lekka, \u201Evanilla\u201D strona bieg\u0142ego rzeczoznawcy: szybko\u015B\u0107, E-E-A-T i jasna oferta (ekspertyzy, opinie s\u0105dowe, interpretacje, podatki) wspieraj\u0105 widoczno\u015B\u0107 i zaufanie.",
      badges: ["Vanilla ultra-light", "PageSpeed", "E-E-A-T"]
    },
    {
      id: "mod-19",
      title: "MOD-19 \u2013 Studio Projektowe",
      url: "https://mod-19.pl/",
      images: [
        { src: "/portfolio/2-mod-19/mod-19-strona-internetowa-1.webp", alt: "Strona internetowa MOD-19 \u2013 studio projektowe architektury" },
        { src: "/portfolio/2-mod-19/mod-19-strona-internetowa-2.webp", alt: "Projekt strony MOD-19 \u2013 prezentacja us\u0142ug architektonicznych" },
        { src: "/portfolio/2-mod-19/mod-19-strona-internetowa-3.webp", alt: "Widok responsywny strony MOD-19 \u2013 architekt budowlany" }
      ],
      category: "strony-www",
      tech: ["HTML", "CSS", "JavaScript", "PHP (formularz)", "RWD", "PageSpeed/CWV", "WebP", "Schema.org LocalBusiness", "Sitemap", "Open Graph"],
      goal: "Widoczno\u015B\u0107 w \u0141odzi i okolicach oraz pozyskiwanie lead\xF3w z formularza i telefon\xF3w.",
      solution: "Lekka strona statyczna z formularzem w PHP, uporz\u0105dkowane H1\u2013H3, sekcje us\u0142ug i realizacji, NAP i link do Profilu Firmy Google, dane strukturalne LocalBusiness, sitemap i kompresja obraz\xF3w.",
      outcome: "Szybsze \u0142adowanie i czytelne CTA \u2192 wi\u0119cej wej\u015B\u0107 z fraz lokalnych (np. \u201Ebiuro projektowe \u0141\xF3d\u017A\u201D) i wy\u017Cszy wsp\xF3\u0142czynnik kontakt\xF3w.",
      description: "Strona MOD-19 zaprojektowana pod SEO lokalne w \u0141odzi: lekka, szybka i skoncentrowana na konwersji (formularz/telefon), z danymi strukturalnymi i poprawionym CWV.",
      badges: ["SEO \u0141\xF3d\u017A", "Schema LocalBusiness"]
    },
    {
      id: "webmaster4you",
      title: "Webmaster4You \u2013 Strony dla Biznesu",
      url: "https://webmaster4you.eu/",
      images: [
        { src: "/portfolio/5-webmaster4you/webmaster4you-strona-internetowa-1.webp", alt: "webmaster4You \u2013 projekt strony dla tw\xF3rcy stron internetowych" },
        { src: "/portfolio/5-webmaster4you/webmaster4you-strona-internetowa-2.webp", alt: "Sekcje oferty na stronie webmaster4You" },
        { src: "/portfolio/5-webmaster4you/webmaster4you-strona-internetowa-3.webp", alt: "Widok responsywny strony webmaster4You" }
      ],
      category: "strony-www",
      tech: ["WordPress", "Motyw autorski/blokowy", "RWD", "Blog pod SEO", "Schema.org", "WebP", "CWV", "Formularz/CTA"],
      goal: "Budowa marki i pozyskiwanie klient\xF3w na tworzenie stron w skali og\xF3lnopolskiej.",
      solution: "Struktura ofertowa + sekcje case\u2019\xF3w, blog nastawiony na frazy: \u201Etworzenie stron www\u201D, \u201Estrony firmowe\u201D, \u201Epozycjonowanie stron\u201D; optymalizacja CWV i jasne CTA do kontaktu.",
      outcome: "Sta\u0142y wzrost widoczno\u015Bci na kluczowe frazy i wi\u0119ksza liczba zapyta\u0144 dzi\u0119ki tre\u015Bciom eksperckim i klarownej ofercie.",
      description: "Webmaster4You: oferta tworzenia stron + blog ekspercki. SEO tre\u015Bciowe na frazy \u201Etworzenie stron www\u201D, \u201Estrony firmowe\u201D, \u201Epozycjonowanie stron\u201D i szybkie CWV.",
      badges: ["Blog pod SEO", "Case studies"]
    },
    {
      id: "masz-pozamiatane",
      title: "Masz pozamiatane \u2013 us\u0142ugi sprz\u0105taj\u0105ce",
      url: "https://maszpozamiatane.pl/",
      images: [
        { src: "/portfolio/6-masz-pozamiatane/masz-pozamiatane-strona-internetowa-1.webp", alt: "Strona internetowa firmy sprz\u0105taj\u0105cej Masz Pozamiatane \u2013 strona g\u0142\xF3wna" },
        { src: "/portfolio/6-masz-pozamiatane/masz-pozamiatane-strona-internetowa-2.webp", alt: "Sekcja us\u0142ug na stronie Masz Pozamiatane \u2013 oferta sprz\u0105tania" },
        { src: "/portfolio/6-masz-pozamiatane/masz-pozamiatane-strona-internetowa-3.webp", alt: "Widok mobilny strony Masz Pozamiatane \u2013 kontakt i CTA" }
      ],
      category: "strony-www",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "RWD", "SEO lokalne", "Schema.org LocalBusiness", "WebP", "Opinie/CTA"],
      goal: "Widoczno\u015B\u0107 lokalna i budowa rozpoznawalno\u015Bci marki; wi\u0119cej zapyta\u0144 przez formularz/telefon.",
      solution: "Czytelna prezentacja us\u0142ug i cennika, sekcja opinii i NAP, jasne CTA, kompresja obraz\xF3w, wdro\u017Cone dane strukturalne i mapa; obszar: \u017Bary, \u017Baga\u0144, Lubsko, Zielona G\xF3ra, Przew\xF3z, \u0141\u0119knica i okolice.",
      outcome: "Wy\u017Csza ekspozycja na frazy lokalne i kr\xF3tsza \u015Bcie\u017Cka do kontaktu dzi\u0119ki mocnym CTA i elementom zaufania.",
      description: "Lokalna strona us\u0142ug sprz\u0105tania (\u017Bary\u2013Zielona G\xF3ra i okolice) \u2014 lekka, szybka i sp\xF3jna z mark\u0105. Opinie, NAP i schema zwi\u0119kszaj\u0105 konwersj\u0119.",
      badges: ["Branding sp\xF3jny", "SEO lokalne"]
    },
    {
      id: "geo-kj",
      title: "Geo-KJ \u2013 Us\u0142ugi Geodezyjne",
      url: "https://geodezja-kj.com/",
      images: [
        { src: "/portfolio/3-geo-kj/geo-kj-strona-internetowa-1.webp", alt: "Strona internetowa MOD-19 \u2013 studio projektowe architektury" },
        { src: "/portfolio/3-geo-kj/geo-kj-strona-internetowa-2.webp", alt: "Projekt strony MOD-19 \u2013 prezentacja us\u0142ug architektonicznych" },
        { src: "/portfolio/3-geo-kj/geo-kj-strona-internetowa-3.webp", alt: "Widok responsywny strony MOD-19 \u2013 architekt budowlany" }
      ],
      category: "strony-www",
      tech: ["WordPress", "Motyw autorski", "ACF", "RWD", "SEO lokalne", "Schema.org LocalBusiness", "WebP", "Sitemap", "Breadcrumbs"],
      goal: "Pozyskiwanie zapyta\u0144 z Jaros\u0142awia i Rzeszowa (formularz + telefon).",
      solution: "Autorski motyw WP z podstronami us\u0142ug i galeri\u0105 realizacji, formularzem kontaktowym, NAP i danymi strukturalnymi, optymalizacj\u0105 CWV, kompresj\u0105 obraz\xF3w i map\u0105 dojazdu.",
      outcome: "Lepsze pozycje na frazy typu \u201Egeodeta Jaros\u0142aw/Rzesz\xF3w\u201D oraz wzrost liczby kontakt\xF3w z wynik\xF3w organicznych.",
      description: "Geo-KJ na WordPressie: przejrzyste us\u0142ugi i galeria, SEO lokalne (Jaros\u0142aw/Rzesz\xF3w), dane strukturalne i szybkie CWV \u2014 strona nastawiona na szybki kontakt.",
      badges: ["Autorski motyw WP", "SEO lokalne"]
    },
    // --- APLIKACJE --- (najlepsze na górze)
    {
      id: "email-sort-pro",
      title: "Email Sort Pro \u2013 desktop",
      images: [
        { src: "/portfolio/1-email-sort-pro/email-sort-pro-program-1.webp", alt: "Email Sort Pro \u2013 aplikacja do pobierania i sortowania za\u0142\u0105cznik\xF3w z e-maili" }
      ],
      category: "aplikacje",
      tech: ["Windows", "Python", "IMAP", "OCR", "Silnik regu\u0142/filtr\xF3w", "Automatyczne katalogowanie", "Przetwarzanie lokalne/offline", "Bez wysy\u0142ki e-mail"],
      goal: "Automatyczne pobieranie i porz\u0105dkowanie za\u0142\u0105cznik\xF3w z e-maili, by oszcz\u0119dzi\u0107 czas i zredukowa\u0107 b\u0142\u0119dy.",
      solution: "Aplikacja desktop (Windows) \u0142\u0105czy si\u0119 przez IMAP, stosuje regu\u0142y/filtry i OCR, a nast\u0119pnie segreguje pliki wg rodzaju i daty do ustalonej struktury folder\xF3w. Model freemium: 100 za\u0142\u0105cznik\xF3w/tydz. gratis; subskrypcje 3/6/12 mies. lub do\u017Cywotnia.",
      outcome: "Sta\u0142a automatyzacja i porz\u0105dek w dokumentach \u2014 mniej r\u0119cznych czynno\u015Bci, szybszy dost\u0119p do plik\xF3w, ni\u017Csze ryzyko pomy\u0142ek.",
      description: "Email Sort Pro dla Windows: automatyczne segregowanie za\u0142\u0105cznik\xF3w z IMAP, regu\u0142y + OCR i katalogowanie wg typu/dat. Przetwarzanie lokalne, model freemium.",
      badges: ["OCR", "Freemium", "Offline (lokalnie)"]
    },
    // --- GRAFIKA --- (najlepsze na górze)
    {
      id: "es-serwis-logo",
      title: "ES-Serwis \u2013 logotyp",
      images: [
        { src: "/portfolio/1-es-serwis-logo/es-serwis-logo-1.webp", alt: "Wizyt\xF3wka ES-Serwis \u2013 projekt sp\xF3jny z identyfikacj\u0105 wizualn\u0105" }
      ],
      category: "grafika",
      tech: ["Logo design", "SVG/AI/PNG/PDF", "System wariant\xF3w", "Zastosowania: strona, flota, odzie\u017C, dokumenty"],
      goal: "Zbudowa\u0107 presti\u017Cowy, techniczny wizerunek marki B2B i sp\xF3jno\u015B\u0107 materia\u0142\xF3w.",
      solution: "Znak oparty o motyw niesko\u0144czono\u015Bci i inicja\u0142y \u201EE-S\u201D; paleta sugerowana: z\u0142oto + niebieski. Przygotowane pliki wektorowe i wersje na r\xF3\u017Cne t\u0142a/no\u015Bniki.",
      outcome: "Profesjonalny odbi\xF3r i rozpoznawalno\u015B\u0107 w bran\u017Cy elektrycznej; \u0142atwa implementacja w materia\u0142ach firmowych.",
      description: "Logo ES-Serwis z motywem niesko\u0144czono\u015Bci i inicja\u0142ami \u201EE-S\u201D, w wersjach do www, floty, odzie\u017Cy i dokument\xF3w (SVG/AI/PNG/PDF).",
      badges: ["Motyw niesko\u0144czono\u015Bci", "Wektorowe (SVG/AI)"]
    },
    {
      id: "gielda-zlecen-logo",
      title: "Gie\u0142da Zlece\u0144 \u2013 logotyp",
      images: [
        { src: "/portfolio/2-gielda-zlecen-logo/gielda-zlecen-logo-1.webp", alt: "Wizyt\xF3wka ES-Serwis \u2013 projekt sp\xF3jny z identyfikacj\u0105 wizualn\u0105" }
      ],
      category: "grafika",
      tech: ["Logo design", "SVG/PNG/PDF", "Warianty aplikacyjne", "Zastosowania: app/web, favicon, odzie\u017C, pojazdy"],
      goal: "Nada\u0107 marketplace\u2019owi B2B wyr\xF3\u017Cnialny, ponadczasowy charakter.",
      solution: "Stylistyka nawi\u0105zuj\u0105ca do \u201Edawnych czas\xF3w\u201D \u2014 symbol gmachu gie\u0142dy/budynku, klarowna typografia. Wersje do interfejsu aplikacji oraz druku.",
      outcome: "Silne skojarzenie z handlem/zleceniami i czytelno\u015B\u0107 w ma\u0142ych rozmiarach (favicon, app).",
      description: "Logo Gie\u0142da Zlece\u0144 dla marketplace B2B: motyw budynku gie\u0142dy, klasyczne odniesienia i warianty do aplikacji oraz materia\u0142\xF3w firmowych.",
      badges: ["Klimat klasyczny", "Warianty aplikacyjne"]
    },
    {
      id: "logo-maszpozamiatane",
      title: "MaszPozamiatane \u2013 logotyp",
      images: [
        { src: "/portfolio/2-masz-pozamiatane-logo/masz-pozamiatane-logo-1.webp", alt: "Logo firmy sprz\u0105taj\u0105cej Masz Pozamiatane \u2013 wersja podstawowa" }
      ],
      category: "grafika",
      tech: ["Logo design", "SVG", "Wersje kolorystyczne/uk\u0142ady", "Zastosowania: www, odzie\u017C, social, druk, pojazdy"],
      goal: "Zwi\u0119kszy\u0107 rozpoznawalno\u015B\u0107 marki sprz\u0105taj\u0105cej i zapewni\u0107 sp\xF3jno\u015B\u0107 wizualn\u0105 w ka\u017Cdej skali.",
      solution: "Nowoczesny, czytelny znak buduj\u0105cy skojarzenia: czysto\u015B\u0107, dok\u0142adno\u015B\u0107, nowoczesno\u015B\u0107. Dostarczone wersje SVG i warianty kolorystyczne/uk\u0142adowe pod r\xF3\u017Cne no\u015Bniki.",
      outcome: "\u0141atwiejsze zapami\u0119tanie i sp\xF3jny wizerunek w kanale online i offline.",
      description: "Logo firmy sprz\u0105taj\u0105cej \u2014 proste i nowoczesne, przygotowane w SVG z wariantami do www, druku, odzie\u017Cy i okleje\u0144 pojazd\xF3w.",
      badges: ["Proste/nowoczesne", "Wersje kolorystyczne"]
    },
    // --- DRUK --- (najlepsze na górze)
    {
      id: "wizytowka-esserwis",
      title: "Wizyt\xF3wka \u2013 ES-Serwis",
      images: [
        { src: "/portfolio/3-es-serwis-wizytowka/es-serwis-wizytowka-1.webp", alt: "Wizyt\xF3wka ES-Serwis \u2013 projekt sp\xF3jny z identyfikacj\u0105 wizualn\u0105" }
      ],
      category: "druk",
      tech: ["DTP", "85\xD755 mm", "Dwustronna", "Lakier po\u0142ysk", "Kody QR (firma/pracownik)"],
      goal: "U\u0142atwi\u0107 kontakt i podkre\u015Bli\u0107 sp\xF3jno\u015B\u0107 marki w offline.",
      solution: "Dwustronna wizyt\xF3wka 85\xD755 z QR do strony firmowej i unikalnym QR pracownika; uk\u0142ad zgodny z social mediami (kolory/typografia).",
      outcome: "Szybszy kontakt (skan QR) i profesjonalny, jednolity wizerunek marki.",
      description: "Wizyt\xF3wka ES-Serwis 85\xD755, po\u0142ysk, dwa kody QR (firma + pracownik) i komplet danych: imi\u0119, stanowisko, tel, e-mail, adres, NIP.",
      badges: ["QR x2", "Lakier po\u0142ysk"]
    },
    {
      id: "es-serwis-ulotki-2",
      title: "Ulotka A5 \u2013 ES-Serwis (wariant 2)",
      images: [
        { src: "/portfolio/2-es-serwis-ulotki/es-serwis-ulotka-projekt-2.webp", alt: "Druga wersja ulotki A5 ES-Serwis \u2013 uk\u0142ad tre\u015Bci i CTA" }
      ],
      category: "druk",
      tech: ["DTP", "A5 pion", "CMYK", "Spad 3 mm", "160 g/m\xB2"],
      goal: "Wygenerowa\u0107 zapytania B2B w woj. lubuskim.",
      solution: "Kompaktowy uk\u0142ad A5 z kluczowymi us\u0142ugami i CTA do kontaktu (tel/mail), dopasowany do dystrybucji bezpo\u015Bredniej.",
      outcome: "Wi\u0119ksze zainteresowanie ofert\u0105 \u2014 wzrost liczby telefon\xF3w od firm.",
      description: "Ulotka ES-Serwis (A5, CMYK, 160 g) z wyeksponowanym CTA do kontaktu \u2014 szybka prezentacja us\u0142ug dla odbiorc\xF3w B2B.",
      badges: ["A5 B2B", "Silne CTA"]
    },
    {
      id: "es-serwis-ulotki-1",
      title: "Ulotka A4 \u2013 ES-Serwis (wariant 1)",
      images: [
        { src: "/portfolio/2-es-serwis-ulotki/es-serwis-ulotka-projekt-1.webp", alt: "Ulotka A5 ES-Serwis \u2013 projekt do druku" }
      ],
      category: "druk",
      tech: ["DTP", "A4 pion", "CMYK", "Spad 3 mm", "160 g/m\xB2"],
      goal: "Pozyska\u0107 nowych pracownik\xF3w (rekrutacja HR) w woj. lubuskim.",
      solution: "Czytelny uk\u0142ad A4 z nag\u0142\xF3wkiem rekrutacyjnym, benefitami i mocnym CTA do dzia\u0142u HR; przygotowanie pod druk CMYK ze spadami.",
      outcome: "Wzrost liczby aplikacji \u2014 nap\u0142yw du\u017Cej liczby CV z regionu.",
      description: "Ulotka rekrutacyjna ES-Serwis (A4, CMYK, 160 g) ze spadami 3 mm i mocnym CTA do HR \u2014 zaprojektowana pod szybkie skanowanie tre\u015Bci.",
      badges: ["Rekrutacja HR", "A4 ze spadami"]
    },
    {
      id: "tablica-parkingowa",
      title: "Tablica parkingowa \u2013 projekt do druku",
      images: [
        { src: "/portfolio/1-tablica-parkingowa/tablica-parkingowa-projekt-1.webp", alt: "Wizyt\xF3wka ES-Serwis \u2013 projekt sp\xF3jny z identyfikacj\u0105 wizualn\u0105" }
      ],
      category: "druk",
      tech: ["DTP", "50\xD770 cm", "CMYK", "PDF z krzywymi", "Marginesy/ramka metalowa"],
      goal: "Czytelnie komunikowa\u0107 zasady parkowania na terenie firmy.",
      solution: "Projekt 50\xD770 cm z sekcj\u0105 regulaminu, kontrastow\u0105 typografi\u0105 i marginesami pod ramk\u0119; plik PDF z krzywymi w CMYK.",
      outcome: "Lepsza czytelno\u015B\u0107 i mniej narusze\u0144 zasad postoju dzi\u0119ki wyra\u017Anym piktogramom i hierarchii tre\u015Bci.",
      description: "Firmowa tablica parkingowa 50\xD770 cm \u2014 czytelny regulamin, uk\u0142ad pod ramk\u0119 metalow\u0105 i gotowy plik PDF (krzywe, CMYK).",
      badges: ["PDF CMYK (krzywe)", "Czytelna typografia"]
    }
  ];
  const filters = [
    { id: "all", label: "Wszystkie" },
    { id: "strony-www", label: "Strony WWW" },
    { id: "sklepy", label: "Sklepy online" },
    { id: "aplikacje", label: "Aplikacje" },
    { id: "grafika", label: "Grafika" },
    { id: "druk", label: "Do druku" }
  ];
  const ogImage = "/og/portfolio-og.jpg";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": metaDescription, "ogImage": ogImage }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <section class="pt-32 pb-20 text-center overflow-hidden"> <div class="relative z-10 text-center px-4 w-full md:w-5/6 lg:w-4/5 mx-auto"> <h1 id="page-hero-title" class="animate-on-scroll text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
Portfolio: strony, aplikacje, grafika i materiały do druku
</h1> <p id="page-hero-subtitle" class="animate-on-scroll mt-6 text-lg text-secondary">
Każdy projekt opisuję schematem <strong>cel → rozwiązanie → efekt</strong>. Przefiltruj realizacje i zobacz, jak wygląda moje podejście w praktyce.
</p> </div> </section> <section class="animate-on-scroll pb-12" data-anim="filters"> <div class="max-w-7xl mx-auto px-4"> <div role="tablist" aria-label="Filtruj projekty" class="flex flex-wrap justify-center gap-2"> ${filters.map((f, i) => renderTemplate`<button role="tab"${addAttribute(f.id, "data-filter")}${addAttribute(i === 0 ? "true" : "false", "aria-selected")}${addAttribute([
    "filter-btn px-4 py-2 rounded-xl border transition-colors duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-start focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    i === 0 ? "bg-surface/60 text-primary border-accent-start" : "bg-surface/40 text-secondary hover:text-primary hover:bg-white/10 border-white/10"
  ], "class:list")}> ${f.label} </button>`)} </div> </div> </section> <section class="pb-20 sm:pb-32"> <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative" id="projects-grid"> ${projects.map((p) => renderTemplate`<article class="animate-on-scroll project-card group bg-surface/50 border border-white/10 rounded-2xl overflow-hidden flex flex-col"${addAttribute(p.category, "data-category")} itemscope itemtype="https://schema.org/CreativeWork"> <div class="image-gallery-container block relative aspect-[16/10] overflow-hidden transition-transform duration-500 ease-in-out"> ${p.images.map((img, index) => renderTemplate`<img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")}${addAttribute([
    "gallery-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
    index === 0 ? "opacity-100" : "opacity-0"
  ], "class:list")} loading="lazy" decoding="async">`)} <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> ${p.images.length > 1 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <button aria-label="Poprzednie zdjęcie" class="gallery-prev absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path></svg> </button> <button aria-label="Następne zdjęcie" class="gallery-next absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg> </button> <div class="gallery-dots absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2"> ${p.images.map((_, index) => renderTemplate`<button${addAttribute(`Zdj\u0119cie ${index + 1}`, "aria-label")}${addAttribute(["gallery-dot h-2 w-2 rounded-full transition-colors", index === 0 ? "bg-white" : "bg-white/50 hover:bg-white/75"], "class:list")}></button>`)} </div> ` })}`} </div> <div class="p-6 flex-1 flex flex-col"> <h2 class="text-xl font-bold text-primary" itemprop="name"> ${p.url ? renderTemplate`<a${addAttribute(p.url, "href")} target="_blank" rel="noopener noreferrer" class="hover:underline inline-flex items-center gap-2 group/link"> ${p.title} <svg class="w-4 h-4 text-secondary transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> </a>` : renderTemplate`<span>${p.title}</span>`} </h2> <ul class="mt-4 flex flex-wrap gap-2"> ${p.tech.map((t) => renderTemplate`<li class="px-3 py-1 rounded-full bg-white/5 text-secondary text-xs">${t}</li>`)} ${p.badges?.map((b) => renderTemplate`<li class="px-3 py-1 rounded-full bg-accent-end/10 text-accent-end text-xs font-medium">${b}</li>`)} </ul> ${p.description && renderTemplate`<p class="mt-4 text-secondary text-sm" itemprop="description"> ${p.description} </p>`} <dl class="mt-5 space-y-4 text-sm flex-1"> <div> <dt class="font-semibold text-primary/80 flex items-center gap-2"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Cel</dt> <dd class="text-secondary pl-6" itemprop="about">${p.goal}</dd> </div> <div> <dt class="font-semibold text-primary/80 flex items-center gap-2"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>Rozwiązanie</dt> <dd class="text-secondary pl-6" itemprop="abstract">${p.solution}</dd> </div> <div> <dt class="font-semibold text-primary/80 flex items-center gap-2"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>Efekt</dt> <dd class="text-secondary pl-6">${p.outcome}</dd> </div> </dl> ${p.note && renderTemplate`<p class="mt-4 text-xs text-secondary/70 border-l-2 border-white/10 pl-3">${p.note}</p>`} </div> </article>`)} <div id="empty-state" class="hidden md:col-span-2 lg:col-span-3 text-center py-20 bg-surface/30 rounded-2xl"> <h3 class="text-xl font-semibold text-primary">Brak projektów w tej kategorii</h3> <p class="text-secondary mt-2">Wybierz inny filtr, aby kontynuować przeglądanie.</p> </div> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/portfolio.astro", void 0);

const $$file = "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
