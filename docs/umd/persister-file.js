var t,e;t=this,e=function(t,e,a){"use strict";const s="utf8",n=(t,e)=>t instanceof e,i=t=>null==t,o=Object,r=o.keys,c=o.freeze,u=t=>(t=>n(t,o)&&t.constructor==o)(t)&&0==(t=>r(t).length)(t),f=JSON.parse,y=t=>new Map(t),d=(t,e)=>t?.get(e),l=(t,e,a)=>{return i(a)?(s=t,n=e,s?.delete(n),t):t?.set(e,a);var s,n},p=(t,e,a)=>{var s,n;return s=t,n=e,s?.has(n)||l(t,e,a()),d(t,e)},h=y(),w=y();t.createFilePersister=(t,r,y)=>((t,e,a,s,n,o,[r,f]=[],y=[])=>{let v,g,A,S=0,m=0;p(h,y,(()=>0)),p(w,y,(()=>[]));const F=async t=>(2!=S&&(S=1,await L.schedule((async()=>{await t(),S=0}))),L),L={load:async(a,s)=>await F((async()=>{try{t.setContent(await e())}catch{t.setContent([a,s])}})),startAutoLoad:async(a={},n={})=>(L.stopAutoLoad(),await L.load(a,n),m=1,A=s((async(a,s)=>{if(s){const e=s();await F((async()=>t.setTransactionChanges(e)))}else await F((async()=>{try{t.setContent(a?.()??await e())}catch(t){o?.(t)}}))})),L),stopAutoLoad:()=>(m&&(n(A),A=void 0,m=0),L),save:async e=>(1!=S&&(S=2,await L.schedule((async()=>{try{await a(t.getContent,e)}catch(t){o?.(t)}S=0}))),L),startAutoSave:async()=>(await L.stopAutoSave().save(),v=t.addDidFinishTransactionListener(((t,e)=>{const[a,s]=e();u(a)&&u(s)||L.save((()=>[a,s]))})),L),stopAutoSave:()=>{var e,a;return e=v,a=t.delListener,i(e)||a(e),L},schedule:async(...t)=>(((t,...e)=>{t.push(...e)})(d(w,y),...t),await(async()=>{if(!d(h,y)){for(l(h,y,1);!i((t=d(w,y),g=t.shift()));)try{await g()}catch(t){o?.(t)}l(h,y,0)}var t})(),L),getStore:()=>t,destroy:()=>L.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return r&&(L[r]=()=>f),c(L)})(t,(async()=>f(await a.readFile(r,s))),(async t=>{return await a.writeFile(r,(e=t(),JSON.stringify(e,((t,e)=>n(e,Map)?o.fromEntries([...e]):e))),s);var e}),(t=>e.watch(r,(()=>t()))),(t=>t?.close()),y,["getFilePath",r])},"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("fs"),require("fs/promises")):"function"==typeof define&&define.amd?define(["exports","fs","fs/promises"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).TinyBasePersisterFile={},t.fs,t["fs/promises"]);
