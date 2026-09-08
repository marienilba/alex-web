import { f as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tc21AS5r.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Draw } from '../chunks/Layout_DEYE2jtI.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Thanks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "classname": "bg-[url('/backgrounds/sm.jpg')] min-h-screen flex flex-col" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative flex-1 h-full flex justify-center items-center flex-col"> ${renderComponent($$result2, "Draw", $$Draw, { "draw": "sun", "classname": "h-96 w-96 top-0 left-0 scale-125 opacity-25 pointer-events-none" })} ${renderComponent($$result2, "Draw", $$Draw, { "draw": "flower", "classname": "h-[24rem] w-[24rem] bottom-0 right-0 opacity-25 pointer-events-none" })} ${renderComponent($$result2, "Draw", $$Draw, { "draw": "clouds", "classname": "h-[24rem] w-[24rem] top-0 left-1/2 scale-125 opacity-25 pointer-events-none" })} <p class="text-7xl font-handraw">Votre message a bien était envoyé !</p> <p class="text-4xl">
Vous recevrez une réponse dans les meilleurs délais possible.
</p> <p class="text-4xl">Cordialement, Liard Alexandra.</p> <a href="/" class="text-4xl border-black border-dashed border p-2.5 my-2.5 cursor-pointer hover:border-solid hover:bg-black transition-all duration-500 hover:text-white">Retourner sur le site</a> </section> <section> <section class="border-t border-black border-dashed flex justify-between text-center py-10 mt-10 text-4xl"> <p class="flex-1">Alexandra Liard</p> <a href="mailto:liard_alexandra@orange.fr" class="flex-1 hover:underline decoration-wavy">liard_alexandra@orange.fr</a> <a href="tel:0785969694" class="flex-1 hover:underline decoration-wavy">07 85 96 96 94</a> </section> <p class="text-center">© 2023 Alexandra Liard . Tous droits reservés.</p> </section> ` })}`;
}, "/Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/src/pages/thanks.astro", void 0);

const $$file = "/Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/src/pages/thanks.astro";
const $$url = "/thanks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Thanks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
