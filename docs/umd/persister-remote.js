var t,e;t=this,e=function(t){"use strict";const e=setInterval,a=clearInterval,s=(t,e)=>t instanceof e,n=t=>null==t,o=Object,r=o.keys,c=o.freeze,i=t=>(t=>s(t,o)&&t.constructor==o)(t)&&0==(t=>r(t).length)(t),d=JSON.parse,y=t=>new Map(t),u=(t,e)=>t?.get(e),l=(t,e,a)=>{return n(a)?(s=t,o=e,s?.delete(o),t):t?.set(e,a);var s,o},f=(t,e,a)=>{var s,n;return s=t,n=e,s?.has(n)||l(t,e,a()),u(t,e)},h=y(),p=y(),w=t=>t.headers.get("ETag");t.createRemotePersister=(t,r,y,v=5,g)=>{let A;return((t,e,a,s,o,r,[d,y]=[],w=[])=>{let v,g,A,S=0,T=0;f(h,w,(()=>0)),f(p,w,(()=>[]));const m=async t=>(2!=S&&(S=1,await C.schedule((async()=>{await t(),S=0}))),C),C={load:async(a,s)=>await m((async()=>{try{t.setContent(await e())}catch{t.setContent([a,s])}})),startAutoLoad:async(a={},n={})=>(C.stopAutoLoad(),await C.load(a,n),T=1,A=s((async(a,s)=>{if(s){const e=s();await m((async()=>t.setTransactionChanges(e)))}else await m((async()=>{try{t.setContent(a?.()??await e())}catch(t){r?.(t)}}))})),C),stopAutoLoad:()=>(T&&(o(A),A=void 0,T=0),C),save:async e=>(1!=S&&(S=2,await C.schedule((async()=>{try{await a(t.getContent,e)}catch(t){r?.(t)}S=0}))),C),startAutoSave:async()=>(await C.stopAutoSave().save(),v=t.addDidFinishTransactionListener(((t,e)=>{const[a,s]=e();i(a)&&i(s)||C.save((()=>[a,s]))})),C),stopAutoSave:()=>{var e,a;return e=v,a=t.delListener,n(e)||a(e),C},schedule:async(...t)=>(((t,...e)=>{t.push(...e)})(u(p,w),...t),await(async()=>{if(!u(h,w)){for(l(h,w,1);!n((t=u(p,w),g=t.shift()));)try{await g()}catch(t){r?.(t)}l(h,w,0)}var t})(),C),getStore:()=>t,destroy:()=>C.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return d&&(C[d]=()=>y),c(C)})(t,(async()=>{const t=await fetch(r);return A=w(t),d(await t.text())}),(async t=>{return await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:(e=t(),JSON.stringify(e,((t,e)=>s(e,Map)?o.fromEntries([...e]):e)))});var e}),(t=>e((async()=>{const e=await fetch(r,{method:"HEAD"}),a=w(e);n(A)||n(a)||a==A||(A=a,t())}),1e3*v)),(t=>a(t)),g,["getUrls",[r,y]])}},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).TinyBasePersisterRemote={});
