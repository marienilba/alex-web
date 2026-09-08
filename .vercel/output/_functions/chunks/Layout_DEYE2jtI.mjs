import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, n as renderHead, o as renderSlot } from './astro/server_tc21AS5r.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://www.alexandra-liard.com");
const $$Draw = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Draw;
  const { classname, draw, bg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`absolute ${classname} z-0`, "class")}> <div${addAttribute(`block w-full h-full bg-no-repeat ${bg}`, "class")}${addAttribute(`background-image: url('/draws/${draw}.svg');`, "style")}></div> </div>`;
}, "/Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/src/components/Draw.astro", void 0);

const $$Astro = createAstro("https://www.alexandra-liard.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { classname } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="keywords" content="Alexandra Liard, psychologue, psychopraticien, psychothérapie, thérapie, enfant, violence, sommeil, harcèlement, villefranche sur saone"><title>Alexandra Liard - Praticienne - Psychothérapie d'enfant</title><meta property="og:description" content="Alexandra Liard. Praticienne en Psychothérapie · Centre Santé - Villefranche sur saône · enfant."><meta name="description" content="Alexandra Liard. Praticienne en Psychothérapie · Centre Santé - Villefranche sur saône · enfant."><meta property="og:url" content="https://www.alexandra-liard.com/"><meta property="og:locale" content="fr_FR"><meta property="og:type" content="website"><meta property="og:site_name" content="Alexandra Liard - Psychothérapie pour enfant">${renderHead()}</head> <body${addAttribute(classname, "class")}> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/src/components/Layout.astro", void 0);

export { $$Layout as $, $$Draw as a };
