var e,t;e=this,t=function(e){"use strict";const t=e=>null==e,s=Object.freeze,a="storage",o=globalThis.window,n=(e,n,r)=>((e,i,d,c,u)=>{let l,f,v=0,y=!1;const p={load:async(s,a)=>{if(2!=v){v=1;const o=await(async()=>r.getItem(n))();t(o)||""==o?e.setContent([s,a]):e.setJson(o),v=0}return p},startAutoLoad:async(s,i)=>(p.stopAutoLoad(),await p.load(s,i),y=!0,f=(e=>{const t=t=>{if(t.storageArea===r&&t.key===n){let s;try{s=JSON.parse(t.newValue)}catch{}e(s)}};return o.addEventListener(a,t),t})((async s=>{t(s)?await p.load():2!=v&&(v=1,e.setContent(s),v=0)})),p),stopAutoLoad:()=>{return y&&(e=f,o.removeEventListener(a,e),f=void 0,y=!1),p;var e},save:async()=>(1!=v&&(v=2,await(async e=>{return r.setItem(n,(t=e(),JSON.stringify(t,((e,t)=>{return t instanceof Map?(s=(e,[t,s])=>(e[t]=s,e),a={},[...t].reduce(s,a)):t;var s,a}))));var t})(e.getContent),v=0),p),startAutoSave:async()=>(await p.stopAutoSave().save(),l=e.addDidFinishTransactionListener(p.save),p),stopAutoSave:()=>{var s,a;return s=l,a=e.delListener,t(s)||a(s),p},getStore:()=>e,destroy:()=>p.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return s(p)})(e);e.createLocalPersister=(e,t)=>n(e,t,localStorage),e.createSessionPersister=(e,t)=>n(e,t,sessionStorage)},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBasePersisterBrowser={});
