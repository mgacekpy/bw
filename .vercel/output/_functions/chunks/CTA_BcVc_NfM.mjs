import { f as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_D31pR6kU.mjs';
import 'kleur/colors';
import 'clsx';

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const codeSnippets = [
    "const project = createProject();",
    "project.addFeature('authentication');",
    "project.addFeature('e-commerce');",
    "project.deploy(); // Status: OK",
    "return <NewSolution forYourBusiness />;"
  ];
  return renderTemplate`${maybeRenderHead()}<section id="kontakt" class="py-20 sm:py-32"> <div class="w-full px-[10px] mx-auto"> <div class="relative text-center overflow-hidden rounded-2xl p-12 border border-white/10 bg-background/80 backdrop-blur-sm"> <div class="absolute inset-0 z-0 w-full h-full"> <svg class="absolute inset-0 w-full h-full" width="100%" height="100%"> <defs> <pattern id="grid-cta" width="32" height="32" patternUnits="userSpaceOnUse"> <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1"></path> </pattern> </defs> <rect width="100%" height="100%" fill="url(#grid-cta)"></rect> </svg> <div id="code-container" class="absolute inset-0 flex flex-col items-start justify-center p-12 font-mono text-xs text-zinc-600 select-none"> ${codeSnippets.map((line) => renderTemplate`<p class="whitespace-pre"> ${line.split("").map((char) => renderTemplate`<span class="code-char opacity-0">${char}</span>`)} </p>`)} </div> </div> <div class="relative z-10 max-w-7xl mx-auto"> <h2 class="text-2xl lg:text-3xl font-bold text-primary tracking-tight">Gotowy, aby przenieść swój biznes na wyższy poziom?</h2> <p class="mt-4 text-lg text-secondary max-w-2xl mx-auto">
Poznajmy się i porozmawiajmy o tym, jak technologia może wspierać Twoją firmę. Pierwsza konsultacja jest bezpłatna.
</p> <div class="mt-8"> <a href="#" class="inline-block bg-primary text-background font-semibold py-3 px-7 rounded-lg text-base transition-all hover:brightness-110">
Zacznijmy Rozmowę
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/Mateusz/Desktop/Nowy folder/bw/src/sections/CTA.astro", void 0);

export { $$CTA as $ };
