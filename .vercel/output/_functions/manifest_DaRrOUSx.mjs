import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_tc21AS5r.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CSmBNOhE.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/","cacheDir":"file:///Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/node_modules/.astro/","outDir":"file:///Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/dist/","srcDir":"file:///Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/src/","publicDir":"file:///Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/public/","buildClientDir":"file:///Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/dist/client/","buildServerDir":"file:///Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DoJe8SJZ.css"}],"routeData":{"route":"/thanks","isIndex":false,"type":"page","pattern":"^\\/thanks\\/?$","segments":[[{"content":"thanks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thanks.astro","pathname":"/thanks","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DoJe8SJZ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.alexandra-liard.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/src/pages/thanks.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/thanks@_@astro":"pages/thanks.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DaRrOUSx.mjs","/Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_HrzGk_w9.mjs","/Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CCmxx03n.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/nilba/Desktop/Dossiers/Development/Work/Alexandra/alex-web/src/pages/index.astro?astro&type=script&index=0&lang.ts","const a={_origin:\"https://api.emailjs.com\"},h=(t,e=\"https://api.emailjs.com\")=>{a._userID=t,a._origin=e},u=(t,e,r)=>{if(!t)throw\"The public key is required. Visit https://dashboard.emailjs.com/admin/account\";if(!e)throw\"The service ID is required. Visit https://dashboard.emailjs.com/admin\";if(!r)throw\"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates\";return!0};class m{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:\"Network Error\"}}const l=(t,e,r={})=>new Promise((o,i)=>{const n=new XMLHttpRequest;n.addEventListener(\"load\",({target:s})=>{const d=new m(s);d.status===200||d.text===\"OK\"?o(d):i(d)}),n.addEventListener(\"error\",({target:s})=>{i(new m(s))}),n.open(\"POST\",a._origin+t,!0),Object.keys(r).forEach(s=>{n.setRequestHeader(s,r[s])}),n.send(e)}),f=(t,e,r,o)=>{const i=o||a._userID;return u(i,t,e),l(\"/api/v1.0/email/send\",JSON.stringify({lib_version:\"3.12.1\",user_id:i,service_id:t,template_id:e,template_params:r}),{\"Content-type\":\"application/json\"})},_=t=>{let e;if(typeof t==\"string\"?e=document.querySelector(t):e=t,!e||e.nodeName!==\"FORM\")throw\"The 3rd parameter is expected to be the HTML form element or the style selector of form\";return e},w=(t,e,r,o)=>{const i=o||a._userID,n=_(r);u(i,t,e);const s=new FormData(n);return s.append(\"lib_version\",\"3.12.1\"),s.append(\"service_id\",t),s.append(\"template_id\",e),s.append(\"user_id\",i),l(\"/api/v1.0/email/send-form\",s)},p={init:h,send:f,sendForm:w};p.init(\"AkSeP8z-8QSSEw--4\");const c=document.querySelector(\"form\");c&&c.addEventListener(\"submit\",function(t){t.preventDefault(),p.sendForm(\"service_zh1iffm\",\"template_bzdfz57\",this,\"AkSeP8z-8QSSEw--4\").then(()=>{window.location.href=\"/thanks\"})});"]],"assets":["/_astro/swanky-and-moo-moo-latin-ext-400-normal.C7IRk2qf.woff2","/_astro/delicious-handrawn-latin-ext-400-normal.DUcRlH9M.woff2","/_astro/delicious-handrawn-latin-400-normal.DgSkhPP9.woff2","/_astro/swanky-and-moo-moo-latin-400-normal.DeeIRaXV.woff2","/_astro/swanky-and-moo-moo-latin-ext-400-normal.CKXxJp6c.woff","/_astro/delicious-handrawn-latin-400-normal.DCSeZayi.woff","/_astro/swanky-and-moo-moo-latin-400-normal.DEm-FAhR.woff","/_astro/delicious-handrawn-latin-ext-400-normal.KbBgTsdv.woff","/_astro/orelega-one-cyrillic-ext-400-normal.qFvrNt2l.woff2","/_astro/orelega-one-latin-ext-400-normal.CwfL0CLi.woff2","/_astro/orelega-one-latin-400-normal.Bqja-TZs.woff2","/_astro/orelega-one-cyrillic-400-normal.BEcMXM5c.woff2","/_astro/orelega-one-cyrillic-400-normal.CG1RBiSp.woff","/_astro/orelega-one-cyrillic-ext-400-normal.B4gCAb1J.woff","/_astro/orelega-one-latin-400-normal.ntAcbwzG.woff","/_astro/orelega-one-latin-ext-400-normal.DlURnjem.woff","/_astro/index.DoJe8SJZ.css","/favicon.ico","/backgrounds/sm.jpeg","/draws/alexandra.svg","/draws/borders.svg","/draws/clouds.svg","/draws/dot-blue.svg","/draws/dot-green.svg","/draws/dot-red.svg","/draws/flower.svg","/draws/house.svg","/draws/liard.svg","/draws/seance.svg","/draws/sun.svg","/draws/symptomes.svg","/images/cab1.jpg","/images/cab2.jpg","/images/cab3.jpg","/images/picture.png"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"iJHZP6hRdUyN0R16Lh7zWQ0sle7QLvfiqvZHXXwAjV4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
