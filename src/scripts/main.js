// Plik: src/scripts/main.js - Nowy, czysty szablon
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ważne: Ta linia musi być zaraz po importach, aby aktywować wtyczkę
gsap.registerPlugin(ScrollTrigger);

const PREFERS_REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

gsap.registerPlugin(ScrollTrigger);

function cleanupGSAP() {
    gsap.killTweensOf(window);
    gsap.killTweensOf(document.body);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
}

function animatePageHero() {
    const pageTitle = document.getElementById('page-hero-title');
    if (!pageTitle || pageTitle.dataset.animated) return;
    pageTitle.dataset.animated = 'true';

    if (PREFERS_REDUCED_MOTION) {
        gsap.set(pageTitle, { opacity: 1, y: 0, filter: 'blur(0px)' });
        return;
    }

    gsap.fromTo(
        pageTitle,
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out', delay: 0.1 }
    );

    const subtitle = document.getElementById('page-hero-subtitle');
    const email = document.getElementById('page-hero-email');
    const secondaryElements = [subtitle, email].filter(Boolean);

    if (secondaryElements.length > 0) {
        gsap.fromTo(
            secondaryElements,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15, delay: 0.3 }
        );
    }
}
/**
 * Inicjalizuje logikę dla komponentu Header (menu mobilne i animacja wejściowa).
 */
function initHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuToggle || !mobileMenu || header.dataset.menuInitialized) return;
    header.dataset.menuInitialized = 'true';

    // Pozostała, działająca logika menu mobilnego
    const body = document.body;
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');
    let isOpen = false;
    gsap.set(mobileMenu, { display: 'none' });
    const menuTl = gsap.timeline({
        paused: true,
        onReverseComplete: () => gsap.set(mobileMenu, { display: 'none' }),
    });
    menuTl
        .fromTo(
            mobileMenu,
            { clipPath: 'inset(0 0 100% 0)' },
            { clipPath: 'inset(0 0 0% 0)', display: 'flex', duration: 0.4, ease: 'power2.inOut' }
        )
        .from(
            mobileMenu.querySelectorAll('.mobile-link'),
            { y: 20, opacity: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' },
            '-=0.2'
        );
    const toggleMenu = () => {
        isOpen = !isOpen;
        body.style.overflow = isOpen ? 'hidden' : '';
        openIcon?.classList.toggle('hidden', isOpen);
        closeIcon?.classList.toggle('hidden', !isOpen);
        isOpen ? menuTl.play() : menuTl.reverse();
    };
    menuToggle.addEventListener('click', toggleMenu);
}

/**
 * Inicjalizuje animacje wejściowe oraz logikę specyficzną dla sekcji Hero.
 */
function initHero() {
    const heroTitle = document.getElementById('hero-title');
    if (!heroTitle) return; // Zostawiamy tylko to.
}

/**
 * Inicjalizuje animacje dla wszystkich elementów oznaczonych klasą .animate-on-scroll
 */
function initGenericAnimations() {
    if (PREFERS_REDUCED_MOTION) return;

    const elementsToAnimate = gsap.utils.toArray('.animate-on-scroll');

    // Najpierw ukrywamy wszystkie elementy, aby uniknąć "błysków"
    gsap.set(elementsToAnimate, { opacity: 0 });

    // Teraz tworzymy animację wejścia dla każdego z nich
    elementsToAnimate.forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });
    });
}

/** Źródło: /src/sections/Services.astro i /src/pages/index.astro (modal) */
function initServicesAndModal() {
    const servicesSection = document.getElementById('uslugi');
    if (!servicesSection) return;

    // Logika modala (bez zmian)
    const modal = document.getElementById('service-modal');
    if (modal) {
        const modalContent = document.getElementById('modal-content');
        const modalTitle = document.getElementById('modal-title');
        const modalDetails = document.getElementById('modal-details');
        const modalClose = document.getElementById('modal-close');
        const triggers = document.querySelectorAll('.service-modal-trigger');

        function openModal(title, details) {
            if (modalTitle) modalTitle.textContent = title;
            if (modalDetails) modalDetails.innerHTML = details.replace(/\n/g, '<br>');
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modalContent?.classList.remove('scale-95');
        }
        function closeModal() {
            modal.classList.add('opacity-0', 'pointer-events-none');
            modalContent?.classList.add('scale-95');
        }
        triggers.forEach((trigger) => {
            if (!trigger.dataset.listenerAttached) {
                trigger.addEventListener('click', () => {
                    const title = trigger.getAttribute('data-title');
                    const details = trigger.getAttribute('data-details');
                    if (title && details) openModal(title, details);
                });
                trigger.dataset.listenerAttached = 'true';
            }
        });
        if (modalClose && !modalClose.dataset.listenerAttached) {
            modalClose.addEventListener('click', closeModal);
            modalClose.dataset.listenerAttached = 'true';
        }
        if (!modal.dataset.listenerAttached) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
            modal.dataset.listenerAttached = 'true';
        }
    }
}

/** Źródło: /src/sections/Partnership.astro */
function initPartnership() {
    const partnershipSection = document.querySelector('#partnerstwo');
    if (!partnershipSection) return;
    gsap.set(
        partnershipSection.querySelectorAll(
            '.partnership-title, .partnership-item, .animation-container, .feature-visual-group, .backdrop-panel, .feature-details'
        ),
        {
            clearProps: 'all',
        }
    );

    if (window.innerWidth >= 1024 && !PREFERS_REDUCED_MOTION) {
        const triggers = gsap.utils.toArray('.partnership-item');
        if (triggers.length > 0) {
            const visualGroups = gsap.utils.toArray('.feature-visual-group');
            const backdropPanel = partnershipSection.querySelector('.backdrop-panel');
            const detailsTexts = gsap.utils.toArray('.feature-details');
            const indicator = partnershipSection.querySelector('.active-indicator');
            let activeIndex = 0;
            let isAnimating = false;

            gsap.set(visualGroups, { opacity: 0, display: 'none' });
            gsap.set(backdropPanel, { y: '100%' });
            gsap.set(detailsTexts, { opacity: 0 });

            const setActive = (index) => {
                if (index === activeIndex || isAnimating) return;
                isAnimating = true;
                activeIndex = index;

                gsap.to(indicator, {
                    y: triggers[index].offsetTop,
                    duration: 0.4,
                    ease: 'power3.out',
                });
                triggers.forEach((t, i) =>
                    gsap.to(t, { opacity: i === index ? 1 : 0.6, duration: 0.3 })
                );

                const tl = gsap.timeline({ onComplete: () => (isAnimating = false) });
                tl.to(visualGroups, {
                    opacity: 0,
                    duration: 0.2,
                    ease: 'power1.in',
                    display: 'none',
                })
                    .to(detailsTexts, { opacity: 0, duration: 0.1 }, '<')
                    .set(backdropPanel, { y: '100%' })
                    .set(detailsTexts[activeIndex], { y: 20, filter: 'blur(8px)' })

                    // --- KLUCZOWA POPRAWKA ---
                    // Ikonka startuje z y: 50 (niżej, na środku) i wjeżdża na y: 0 (swoją pozycję docelową)
                    .fromTo(
                        visualGroups[activeIndex],
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', display: 'flex' }
                    )
                    .to(backdropPanel, { y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.5')
                    .to(
                        detailsTexts[activeIndex],
                        {
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                            duration: 0.6,
                            ease: 'power3.out',
                        },
                        '-=0.3'
                    );
            };

            triggers.forEach((trigger, index) => {
                if (!trigger.dataset.listenerAttached) {
                    trigger.addEventListener('click', () => setActive(index));
                    trigger.dataset.listenerAttached = 'true';
                }
            });

            const initialTl = gsap.timeline({
                scrollTrigger: {
                    trigger: partnershipSection,
                    start: 'top 70%',
                    once: true,
                    onEnter: () => (isAnimating = true),
                },
                onComplete: () => (isAnimating = false),
            });
            initialTl
                .from(
                    partnershipSection.querySelectorAll(
                        '.partnership-title, .partnership-item, .animation-container'
                    ),
                    { opacity: 0, y: 20, stagger: 0.1, duration: 0.6 }
                )

                // --- KLUCZOWA POPRAWKA (dla animacji wejściowej) ---
                .fromTo(
                    visualGroups[0],
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', display: 'flex' }
                )
                .to(backdropPanel, { y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.5')
                .to(
                    detailsTexts[0],
                    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power3.out' },
                    '-=0.3'
                );
        }
    } else {
        // Twoja działająca logika dla mobile
        if (!PREFERS_REDUCED_MOTION) {
            gsap.from(partnershipSection.querySelectorAll('.partnership-title, .accordion-item'), {
                scrollTrigger: { trigger: partnershipSection, start: 'top 80%', once: true },
                opacity: 0,
                y: 20,
                stagger: 0.1,
            });
        }
        // ... Twoja działająca logika akordeonu ...
        const accordionItems = gsap.utils.toArray('.accordion-item');
        accordionItems.forEach((item) => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            if (header && content && !header.dataset.listenerAttached) {
                gsap.set(content, { height: 0 });
                header.addEventListener('click', () => {
                    const isOpen = item.classList.contains('open');
                    if (!isOpen) {
                        accordionItems.forEach((otherItem) => {
                            if (otherItem.classList.contains('open')) {
                                gsap.to(otherItem.querySelector('.accordion-content'), {
                                    height: 0,
                                    duration: 0.4,
                                });
                                otherItem.classList.remove('open');
                            }
                        });
                    }
                    gsap.to(content, { height: isOpen ? 0 : 'auto', duration: 0.4 });
                    item.classList.toggle('open');
                });
                header.dataset.listenerAttached = 'true';
            }
        });
    }
}

/** Źródło: /src/sections/Process.astro */
function initProcess() {
    const processSection = document.querySelector('#proces');
    if (!processSection) return;

    if (!PREFERS_REDUCED_MOTION) {
        gsap.set('.process-title, .process-step-trigger, .process-content-wrapper', {
            opacity: 0,
            y: 30,
        });
        gsap.timeline({
            scrollTrigger: { trigger: processSection, start: 'top 80%', once: true },
        })
            .to('.process-title', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
            .to(
                '.process-step-trigger',
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
                '-=0.4'
            )
            .to(
                '.process-content-wrapper',
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                '-=0.5'
            );
    } else {
        gsap.set('.process-title, .process-step-trigger, .process-content-wrapper', {
            opacity: 1,
            y: 0,
        });
    }

    // --- Logika interaktywności dla desktop ---
    const triggers = gsap.utils.toArray('.process-step-trigger');
    const contents = gsap.utils.toArray('.process-content-item');
    const indicator = processSection.querySelector('.active-indicator');

    if (triggers.length > 0 && contents.length > 0 && indicator) {
        let activeIndex = 0;

        const setActiveItem = (index) => {
            gsap.to(indicator, {
                y: triggers[index].offsetTop + 16,
                duration: 0.4,
                ease: 'power3.out',
            });

            triggers.forEach((t, i) => {
                gsap.to([t.querySelector('.step-number'), t.querySelector('.step-title')], {
                    color: i === index ? '#E2E2E2' : '#A1A1A1',
                    duration: 0.3,
                });
            });

            gsap.to(contents, { opacity: 0, duration: 0.2, ease: 'power1.in' });
            gsap.fromTo(
                contents[index],
                { opacity: 0, y: -15 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power1.out', delay: 0.2 }
            );
        };

        triggers.forEach((trigger, index) => {
            if (!trigger.dataset.listenerAttached) {
                trigger.addEventListener('click', () => {
                    if (index === activeIndex) return;
                    activeIndex = index;
                    setActiveItem(index);
                });
                trigger.dataset.listenerAttached = 'true';
            }
        });

        gsap.set(contents, { opacity: 0 });
        gsap.set(contents[0], { opacity: 1 });
        gsap.set(
            triggers
                .slice(1)
                .flatMap((t) => [t.querySelector('.step-number'), t.querySelector('.step-title')]),
            { color: '#A1A1A1' }
        );
        gsap.set(indicator, { y: triggers[0].offsetTop + 16 });
    }

    // --- Skrypt dla Akordeonu na Mobile ---
    const processAccordionItems = gsap.utils.toArray('.process-accordion-item');
    if (processAccordionItems.length > 0) {
        processAccordionItems.forEach((item) => {
            const header = item.querySelector('.process-accordion-header');
            const content = item.querySelector('.process-accordion-content');
            const icon = item.querySelector('.process-accordion-icon');

            gsap.set(content, { height: 0 });

            if (header && !header.dataset.listenerAttached) {
                header.addEventListener('click', () => {
                    const isOpen = item.classList.contains('open');

                    if (!isOpen) {
                        processAccordionItems.forEach((otherItem) => {
                            if (otherItem !== item) {
                                const otherContent = otherItem.querySelector(
                                    '.process-accordion-content'
                                );
                                const otherIcon =
                                    otherItem.querySelector('.process-accordion-icon');
                                gsap.to(otherContent, {
                                    height: 0,
                                    duration: 0.4,
                                    ease: 'power2.inOut',
                                });
                                gsap.to(otherIcon, { rotation: 0, duration: 0.3 });
                                otherItem.classList.remove('open');
                            }
                        });
                    }

                    gsap.to(content, {
                        height: isOpen ? 0 : 'auto',
                        duration: 0.4,
                        ease: 'power2.inOut',
                    });
                    gsap.to(icon, { rotation: isOpen ? 0 : 180, duration: 0.3 });
                    item.classList.toggle('open');
                });
                header.dataset.listenerAttached = 'true';
            }
        });
    }
}

/** Źródło: /src/sections/Metrics.astro */
function initMetrics() {
    const metricsSection = document.getElementById('metrics');
    if (!metricsSection) return;
    gsap.set(metricsSection.querySelectorAll('.metrics-title, .metrics-subtitle, .metric-card'), {
        clearProps: 'all',
    });

    const runAnimations = () => {
        if (!PREFERS_REDUCED_MOTION) {
            const tl = gsap.timeline({
                scrollTrigger: { trigger: metricsSection, start: 'top 80%', once: true },
            });

            tl.from('.metrics-title, .metrics-subtitle', {
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power2.out',
            }).from(
                '.metric-card',
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out',
                },
                '-=0.3'
            );
        } else {
            gsap.set('.metrics-title, .metrics-subtitle, .metric-card', {
                opacity: 1,
                y: 0,
                scale: 1,
            });
        }

        ScrollTrigger.create({
            trigger: '.metric-card',
            start: 'top 85%',
            once: true,
            onEnter: () => {
                const metricCards = gsap.utils.toArray('.metric-card');
                metricCards.forEach((card) => {
                    const valueEl = card.querySelector('.metric-value');
                    const borderRect = card.querySelector('.animated-border');
                    if (!valueEl || !borderRect) return;

                    const perimeter = borderRect.getTotalLength();
                    gsap.set(borderRect, {
                        strokeDasharray: perimeter,
                        strokeDashoffset: perimeter,
                    });

                    if (valueEl.id !== 'fcp-metric') {
                        const endValue = parseInt(valueEl.dataset.target, 10);
                        const counter = { val: 0 };

                        const cardTl = gsap.timeline();
                        cardTl
                            .to(counter, {
                                val: endValue,
                                duration: 2,
                                ease: 'power2.out',
                                onUpdate: () => {
                                    valueEl.textContent = Math.round(counter.val);
                                },
                            })
                            .to(borderRect, { strokeDashoffset: 0, duration: 2, ease: 'none' }, 0);
                    }
                });

                const fcpElement = document.getElementById('fcp-metric');
                if (fcpElement) {
                    try {
                        new PerformanceObserver((entryList) => {
                            const fcpEntry =
                                entryList.getEntriesByName('first-contentful-paint')[0];
                            if (!fcpEntry) return;

                            const fcpTimeInSeconds = (fcpEntry.startTime / 1000).toFixed(2);
                            const counter = { val: 0 };

                            const fcpCard = fcpElement.closest('.metric-card');
                            const fcpBorder = fcpCard?.querySelector('.animated-border');
                            if (!fcpBorder) return;

                            const fcpPerimeter = fcpBorder.getTotalLength();
                            gsap.set(fcpBorder, {
                                strokeDasharray: fcpPerimeter,
                                strokeDashoffset: fcpPerimeter,
                            });

                            const fcpTl = gsap.timeline();
                            fcpTl
                                .to(counter, {
                                    val: fcpTimeInSeconds,
                                    duration: 1.5,
                                    ease: 'power2.out',
                                    onUpdate: () => {
                                        fcpElement.textContent = counter.val.toFixed(2);
                                    },
                                })
                                .to(
                                    fcpBorder,
                                    { strokeDashoffset: 0, duration: 1.5, ease: 'none' },
                                    0
                                );
                        }).observe({ type: 'paint', buffered: true });
                    } catch (e) {
                        fcpElement.textContent = 'N/A';
                    }
                }
            },
        });
    };

    if (document.readyState === 'complete') {
        runAnimations();
    } else {
        window.addEventListener('load', runAnimations, { once: true });
    }
}

/** Źródło: /src/sections/Portfolio.astro */
function initPortfolioSection() {
    const portfolioSection = document.querySelector('#portfolio');
    if (!portfolioSection) return;
    const filters = portfolioSection.querySelector('[data-anim="filters"]');
    if (filters) return;

    if (!PREFERS_REDUCED_MOTION) {
        gsap.from('.portfolio-title', {
            scrollTrigger: {
                trigger: '.portfolio-title',
                start: 'top 85%',
                once: true,
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power2.out',
        });

        const portfolioImages = gsap.utils.toArray('.portfolio-container img');
        portfolioImages.forEach((img) => {
            gsap.fromTo(
                img,
                { scale: 1.1, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: img.closest('a'),
                        start: 'top 90%',
                        once: true,
                    },
                }
            );
        });

        if (window.innerWidth < 1024) {
            const gradients = portfolioSection.querySelectorAll('.portfolio-gradient');
            gsap.to(gradients, {
                opacity: 0.5,
                duration: 2,
                ease: 'power1.inOut',
                repeat: -1,
                yoyo: true,
                delay: 2,
            });
        }
    }
}

/** Źródło: /src/sections/Technologies.astro */
function initTechnologies() {
    const techSection = document.querySelector('#technologie');
    if (!techSection) return;

    // Pobieramy wszystkie elementy do animacji
    const mainTitle = techSection.querySelector('.tech-title');
    const mainSubtitle = techSection.querySelector('.tech-subtitle');
    const subtitle1 = techSection.querySelector('.tech-subtitle-1');
    const coreTechGrid = document.getElementById('core-tech-grid');
    const subtitle2 = techSection.querySelector('.tech-subtitle-2');
    const frameworksGrid = document.getElementById('frameworks-grid');

    if (!mainTitle || !coreTechGrid || !frameworksGrid) return;

    // Tworzymy jedną oś czasu dla całej sekcji
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: techSection,
            start: 'top 75%', // Uruchom animację trochę wcześniej
            once: true,
        },
    });

    // Ustawiamy stany początkowe, aby elementy były niewidoczne
    gsap.set(
        [
            mainTitle,
            mainSubtitle,
            subtitle1,
            subtitle2,
            coreTechGrid.children,
            frameworksGrid.children,
        ],
        { opacity: 0, y: 20 }
    );

    // Dodajemy animacje w prawidłowej sekwencji
    tl.to(mainTitle, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        .to(mainSubtitle, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')
        .to(subtitle1, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .to(coreTechGrid.children, { opacity: 1, y: 0, stagger: 0.05, ease: 'power1.out' }, '-=0.3')
        .to(subtitle2, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
        .to(
            frameworksGrid.children,
            { opacity: 1, y: 0, stagger: 0.05, ease: 'power1.out' },
            '-=0.3'
        );
}

/** Źródło: /src/sections/About.astro */
function initAboutSection() {
    const aboutSection = document.querySelector('#o-mnie');
    if (!aboutSection) return;
    const mgBox = aboutSection.querySelector('.mg-box');
    if (!mgBox) return;

    if (!PREFERS_REDUCED_MOTION) {
        gsap.set('.about-text > *, .about-visual', { opacity: 0, y: 30 });
        gsap.timeline({
            scrollTrigger: {
                trigger: aboutSection,
                start: 'top 80%',
                once: true,
            },
        })
            .to('.about-text > *', {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power2.out',
            })
            .to(
                '.about-visual',
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                },
                '-=0.5'
            );
    } else {
        gsap.set('.about-text > *, .about-visual', { opacity: 1, y: 0 });
    }

    if (mgBox && !aboutSection.dataset.listenerAttached) {
        aboutSection.addEventListener('mousemove', (e) => {
            const rect = aboutSection.getBoundingClientRect();
            const x = e.clientX - rect.left;

            const xPercent = x / rect.width - 0.5;
            const maxRotation = 75;

            gsap.to(mgBox, {
                duration: 0.8,
                rotateY: maxRotation * xPercent,
                rotateX: 0,
                ease: 'power2.out',
            });
        });

        aboutSection.addEventListener('mouseleave', () => {
            gsap.to(mgBox, {
                duration: 0.8,
                rotateY: 0,
                rotateX: 0,
                ease: 'power2.out',
            });
        });
        aboutSection.dataset.listenerAttached = 'true';
    }
}

/** Źródło: /src/sections/CTA.astro */
function initCTA() {
    const codeContainer = document.getElementById('code-container');
    if (!codeContainer || PREFERS_REDUCED_MOTION) return;

    // Uruchom animację tylko na ekranach szerszych niż 768px
    if (window.innerWidth < 768) {
        return;
    }

    const chars = gsap.utils.toArray('.code-char');
    if (chars.length > 0) {
        const tl = gsap.timeline({
            repeat: -1,
            scrollTrigger: {
                trigger: codeContainer,
                start: 'top 80%',
            },
        });
        tl.to(chars, {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.5,
            stagger: 0.03,
            ease: 'power2.out',
        })
            .to({}, { duration: 3 })
            .to(chars, {
                opacity: 0,
                filter: 'blur(4px)',
                duration: 1,
                stagger: {
                    amount: 0.5,
                    from: 'end',
                },
                ease: 'power2.in',
            })
            .to({}, { duration: 0.5 });
    }
}

/** Źródło: /src/pages/uslugi.astro */
function initUslugiPage() {
    animatePageHero();
    const serviceNav = document.querySelector('nav[aria-label="nawigacja po usługach"]');
    if (!serviceNav) return;
    animatePageHero();

    if (!PREFERS_REDUCED_MOTION) {
        gsap.set(
            '#page-hero-title, #page-hero-subtitle, #uslugi .grid > *, #faq h2, #faq .space-y-8 > div',
            { opacity: 0 }
        );
        gsap.set('#page-hero-title', { filter: 'blur(10px)', y: 20 });
        gsap.set('#page-hero-subtitle', { y: 20 });

        gsap.timeline({ delay: 0.2 })
            .to('#page-hero-title', {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
            })
            .to(
                '#page-hero-subtitle',
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.8'
            );

        const serviceElements = gsap.utils.toArray('#uslugi .grid > *');
        gsap.set(serviceElements, { y: 30 });
        gsap.to(serviceElements, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: '#uslugi', start: 'top 80%', once: true },
        });

        const faqElements = gsap.utils.toArray('#faq h2, #faq .space-y-8 > div');
        gsap.set(faqElements, { y: 30 });
        gsap.to(faqElements, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: '#faq', start: 'top 80%', once: true },
        });
    } else {
        gsap.set(
            '#page-hero-title, #page-hero-subtitle, #uslugi .grid > *, #faq h2, #faq .space-y-8 > div',
            { opacity: 1, y: 0, filter: 'none' }
        );
    }

    const header = document.querySelector('header');
    let headerHeight = header ? header.offsetHeight : 80;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

    const navLinks = Array.from(document.querySelectorAll('.service-nav-link'));
    navLinks.forEach((link) => {
        if (!link.dataset.listenerAttached) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href') || '#';
                gsap.to(window, {
                    duration: 0.9,
                    scrollTo: { y: target, offsetY: headerHeight + 24 },
                    ease: 'power2.inOut',
                });
            });
            link.dataset.listenerAttached = 'true';
        }
    });

    const serviceCards = gsap.utils.toArray('.service-content-card');
    serviceCards.forEach((card) => {
        ScrollTrigger.create({
            trigger: card,
            start: 'top center',
            end: 'bottom center',
            onToggle: (self) => {
                const link = navLinks.find((a) => a.dataset.linkId === card.id);
                if (link) link.classList.toggle('active', self.isActive);
            },
        });
    });

    if (header && !header.dataset.resizeObserverAttached) {
        const ro = new ResizeObserver(() => {
            const h = header.offsetHeight || 80;
            document.documentElement.style.setProperty('--header-height', `${h}px`);
            headerHeight = h;
        });
        ro.observe(header);
        header.dataset.resizeObserverAttached = 'true';
    }
}

/** Źródło: /src/pages/portfolio.astro */
function initPortfolioPage() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    animatePageHero();

    // --- LOGIKA MINI-GALERII ---
    document.querySelectorAll('.image-gallery-container').forEach((gallery) => {
        if (gallery.dataset.galleryInitialized) return;

        const images = gallery.querySelectorAll('.gallery-image');
        if (images.length <= 1) {
            const controls = gallery.querySelectorAll(
                '.gallery-prev, .gallery-next, .gallery-dots'
            );
            controls.forEach((c) => (c.style.display = 'none'));
            return;
        }

        const btnPrev = gallery.querySelector('.gallery-prev');
        const btnNext = gallery.querySelector('.gallery-next');
        const dots = gallery.querySelectorAll('.gallery-dot');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('opacity-100', i === index);
                img.classList.toggle('opacity-0', i !== index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('bg-white', i === index);
                dot.classList.toggle('bg-white/50', i !== index);
            });
            currentIndex = index;
        }

        if (btnPrev && btnNext) {
            btnPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                showImage((currentIndex - 1 + images.length) % images.length);
            });
            btnNext.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                showImage((currentIndex + 1) % images.length);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                showImage(index);
            });
        });

        gallery.dataset.galleryInitialized = 'true';
    });

    // Uproszczona i naprawiona logika filtrowania
    const btns = gsap.utils.toArray('.filter-btn');
    const allCards = gsap.utils.toArray('.project-card');
    const emptyState = document.getElementById('empty-state');

    // Animacja wejściowa - prostsza i bardziej niezawodna
    if (!PREFERS_REDUCED_MOTION) {
        gsap.from(allCards, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: grid,
                start: 'top 85%',
                once: true,
            },
        });
    }

    const setFilter = (id) => {
        // POPRAWIONA logika zarządzania klasami
        btns.forEach((b) => {
            const isActive = b.dataset.filter === id;
            b.setAttribute('aria-selected', String(isActive));
            // Usuwamy wszystkie potencjalnie konfliktowe klasy
            b.classList.remove(
                'bg-surface/60',
                'text-primary',
                'border-accent-start',
                'bg-surface/40',
                'text-secondary',
                'border-white/10'
            );
            // Dodajemy odpowiedni zestaw klas
            if (isActive) {
                b.classList.add('bg-surface/60', 'text-primary', 'border-accent-start');
            } else {
                b.classList.add('bg-surface/40', 'text-secondary', 'border-white/10');
            }
        });

        let visibleCards = 0;
        allCards.forEach((card) => {
            const show = id === 'all' || card.dataset.category === id;
            gsap.to(card, {
                display: show ? 'flex' : 'none',
                opacity: show ? 1 : 0,
                duration: 0.3,
            });
            if (show) visibleCards++;
        });

        if (emptyState) emptyState.classList.toggle('hidden', visibleCards > 0);
    };

    btns.forEach((b) => {
        if (!b.dataset.listenerAttached) {
            b.addEventListener('click', () => setFilter(b.dataset.filter));
            b.dataset.listenerAttached = 'true';
        }
    });
}

/** Źródło: /src/pages/o-mnie.astro */
function initOMniePage() {
    const reviewsSection = document.getElementById('opinie');
    if (!reviewsSection) return;
    animatePageHero();

    if (!PREFERS_REDUCED_MOTION) {
        // Ustawienie stanu początkowego
        gsap.set('#page-hero-title, #page-hero-subtitle, .content-box', { opacity: 0 });

        // Hero
        gsap.set('#page-hero-title', { filter: 'blur(10px)', y: 20 });
        gsap.set('#page-hero-subtitle', { y: 20 });
        gsap.timeline({ delay: 0.2 })
            .to('#page-hero-title', {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
            })
            .to(
                '#page-hero-subtitle',
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.8'
            );

        // Animacja indywidualnych "okienek"
        const animatedBoxes = gsap.utils.toArray('.content-box');
        animatedBoxes.forEach((box) => {
            gsap.fromTo(
                box,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        });
    } else {
        // Jeśli animacje są wyłączone, upewnij się, że wszystko jest od razu widoczne
        gsap.set('#page-hero-title, #page-hero-subtitle, .content-box', {
            opacity: 1,
            y: 0,
            filter: 'none',
        });
    }
}

/** Źródło: /src/pages/narzedzia.astro */
function initNarzedziaPage() {
    const tabListContainer = document.getElementById('tab-list-container');
    if (!tabListContainer) return;
    animatePageHero();

    const tabs = gsap.utils.toArray('.tab-btn');
    const panels = gsap.utils.toArray('.tab-panel');

    // Ustawienie JAWNEGO stanu początkowego, aby zapobiec błędom
    panels.forEach((panel, index) => {
        gsap.set(panel, { display: index === 0 ? 'block' : 'none', opacity: index === 0 ? 1 : 0 });
    });
    tabs.forEach((tab, index) => {
        const isActive = index === 0;
        tab.setAttribute('aria-selected', isActive);
        tab.classList.toggle('text-primary', isActive);
        tab.classList.toggle('text-secondary', !isActive);
        gsap.set(tab, { opacity: isActive ? 1 : 0.7 });
    });

    const setActiveTab = (tabToActivate) => {
        const targetPanelId = `panel-${tabToActivate.dataset.tab}`;
        tabs.forEach((tab) => {
            const isActive = tab === tabToActivate;
            tab.setAttribute('aria-selected', isActive);
            gsap.to(tab, {
                opacity: isActive ? 1 : 0.7,
                color: isActive ? '#E2E2E2' : '#A1A1A1',
                duration: 0.3,
            });
        });
        panels.forEach((panel) => {
            if (panel.id === targetPanelId) {
                gsap.set(panel, { display: 'block' });
                gsap.to(panel, { opacity: 1, duration: 0.3 });
            } else {
                gsap.to(panel, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => gsap.set(panel, { display: 'none' }),
                });
            }
        });
    };

    tabs.forEach((tab) => {
        if (!tab.dataset.listenerAttached) {
            tab.addEventListener('click', () => setActiveTab(tab));
            tab.dataset.listenerAttached = 'true';
        }
    });

    // PRZYWRÓCONA LOGIKA AKORDEONÓW
    document.querySelectorAll('.tool-accordion').forEach((details) => {
        if (details.dataset.listenerAttached) return;
        details.addEventListener('toggle', (event) => {
            if (details.open) {
                document.querySelectorAll('.tool-accordion[open]').forEach((openDetails) => {
                    if (openDetails !== details) {
                        openDetails.removeAttribute('open');
                    }
                });
            }
        });
        details.dataset.listenerAttached = 'true';
    });
}

/** Źródło: /src/pages/kontakt.astro */
function initKontaktPage() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    animatePageHero();

    // --- Animacje wejściowe ---
    if (!PREFERS_REDUCED_MOTION) {
        gsap.set('#page-hero-title, #page-hero-subtitle, #page-hero-email, .content-box', {
            opacity: 0,
        });
        gsap.set('#page-hero-title', { filter: 'blur(10px)', y: 20 });
        gsap.set('#page-hero-subtitle', { y: 20 });
        gsap.set('#page-hero-email', { y: 20 });

        gsap.timeline({ delay: 0.2 })
            .to('#page-hero-title', {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
            })
            .to(
                '#page-hero-subtitle',
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.8'
            )
            .to('#page-hero-email', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '<');

        const animatedBoxes = gsap.utils.toArray('.content-box');
        animatedBoxes.forEach((box) => {
            gsap.fromTo(
                box,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        });
    } else {
        gsap.set('#page-hero-title, #page-hero-subtitle, #page-hero-email, .content-box', {
            opacity: 1,
            y: 0,
            filter: 'none',
        });
    }
}

/** Źródło: /blog.astro, /sklep.astro, /panel-klienta.astro */
function initComingSoonPage() {
    // STRAŻNIK: Ta funkcja odpali się tylko, gdy znajdzie #main-headline
    const headline = document.getElementById('main-headline');
    if (!headline) return;

    // Upewniamy się, że tekst jest widoczny, zanim zacznie się animacja
    headline.style.opacity = 1;

    if (!PREFERS_REDUCED_MOTION) {
        if (headline.querySelectorAll('.char').length === 0) {
            const text = 'Już Wkrótce...';
            text.split('').forEach((char) => {
                const span = document.createElement('span');
                span.className = 'char';
                span.textContent = char === ' ' ? '\u00A0' : char;
                headline.appendChild(span);
            });

            gsap.timeline({ delay: 0.5 })
                .from('.char', { opacity: 0, y: 20, ease: 'power3.out', stagger: 0.08 })
                .fromTo(
                    ['#sub-headline', '#back-link'],
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, ease: 'power2.out', stagger: 0.2 },
                    '-=1.2'
                );
        }

        const container3D = document.getElementById('three-canvas-container');
        if (container3D && !container3D.dataset.initialized) {
            const THREE = window.THREE;
            if (!THREE) return;
            container3D.dataset.initialized = 'true';
            let scene, camera, renderer, crystal;
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(
                75,
                container3D.clientWidth / container3D.clientHeight,
                0.1,
                1000
            );
            camera.position.z = 5;
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(container3D.clientWidth, container3D.clientHeight);
            container3D.appendChild(renderer.domElement);
            const geometry = new THREE.IcosahedronGeometry(2, 0);
            const material = new THREE.MeshStandardMaterial({
                color: 0x8b5cf6,
                emissive: 0x3b82f6,
                wireframe: true,
            });
            crystal = new THREE.Mesh(geometry, material);
            scene.add(crystal);
            const animate = () => {
                requestAnimationFrame(animate);
                crystal.rotation.x += 0.001;
                crystal.rotation.y += 0.002;
                renderer.render(scene, camera);
            };
            const onResize = () => {
                camera.aspect = container3D.clientWidth / container3D.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container3D.clientWidth, container3D.clientHeight);
            };
            window.addEventListener('resize', onResize);
            animate();
        }
    } else {
        if (headline) headline.textContent = 'Już Wkrótce...';
    }
}

/** Źródło: /regulamin.astro, /polityka-prywatnosci.astro */
function initStaticContentPageAnims() {
    const prose = document.querySelector('.prose');
    if (!prose) return;
    animatePageHero();

    if (!PREFERS_REDUCED_MOTION) {
        gsap.set('#page-hero-title, #page-hero-subtitle, .content-box', { opacity: 0 });

        gsap.set('#page-hero-title', { filter: 'blur(10px)', y: 20 });
        gsap.set('#page-hero-subtitle', { y: 20 });
        gsap.timeline({ delay: 0.2 })
            .to('#page-hero-title', {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
            })
            .to(
                '#page-hero-subtitle',
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                '-=1.0'
            );

        gsap.fromTo(
            '.content-box',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content-box',
                    start: 'top 85%',
                    once: true,
                },
            }
        );
    } else {
        gsap.set('#page-hero-title, #page-hero-subtitle, .content-box', {
            opacity: 1,
            y: 0,
            filter: 'none',
        });
    }
}

// --- GŁÓWNA FUNKCJA URUCHAMIAJĄCA ---
function runAllScripts() {
    initHeader();
    initHero();
    initServicesAndModal();
    initPartnership();
    initProcess();
    initMetrics();
    initPortfolioSection();
    initTechnologies();
    initAboutSection();
    initCTA();
    initUslugiPage();
    initPortfolioPage();
    initOMniePage();
    initNarzedziaPage();
    initKontaktPage();
    initComingSoonPage();
    initStaticContentPageAnims();
}

// --- WYWOŁANIE SKRYPTÓW ---
function onPageLoad() {
    cleanupGSAP();
    runAllScripts();
    ScrollTrigger.refresh();
}

document.addEventListener('astro:page-load', onPageLoad);
document.addEventListener('astro:after-swap', onPageLoad);
