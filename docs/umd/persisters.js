var t,e;t=this,e=function(t){"use strict";const e=t=>null==t,a=Object,s=a.keys,n=a.freeze,o=t=>(t=>t instanceof a&&t.constructor==a)(t)&&0==(t=>s(t).length)(t),c=t=>new Map(t),i=(t,e)=>t?.get(e),r=(t,a,s)=>{return e(s)?(n=t,o=a,n?.delete(o),t):t?.set(a,s);var n,o},d=(t,e,a)=>{var s,n;return s=t,n=e,s?.has(n)||r(t,e,a()),i(t,e)},u=c(),y=c();t.createCustomPersister=(t,a,s,c,f,l,[h,p]=[],w=[])=>{let v,g,A,C=0,L=0;d(u,w,(()=>0)),d(y,w,(()=>[]));const S=async t=>(2!=C&&(C=1,await T.schedule((async()=>{await t(),C=0}))),T),T={load:async(e,s)=>await S((async()=>{try{t.setContent(await a())}catch{t.setContent([e,s])}})),startAutoLoad:async(e={},s={})=>(T.stopAutoLoad(),await T.load(e,s),L=1,A=c((async(e,s)=>{if(s){const e=s();await S((async()=>t.setTransactionChanges(e)))}else await S((async()=>{try{t.setContent(e?.()??await a())}catch(t){l?.(t)}}))})),T),stopAutoLoad:()=>(L&&(f(A),A=void 0,L=0),T),save:async e=>(1!=C&&(C=2,await T.schedule((async()=>{try{await s(t.getContent,e)}catch(t){l?.(t)}C=0}))),T),startAutoSave:async()=>(await T.stopAutoSave().save(),v=t.addDidFinishTransactionListener(((t,e)=>{const[a,s]=e();o(a)&&o(s)||T.save((()=>[a,s]))})),T),stopAutoSave:()=>{var a,s;return a=v,s=t.delListener,e(a)||s(a),T},schedule:async(...t)=>(((t,...e)=>{t.push(...e)})(i(y,w),...t),await(async()=>{if(!i(u,w)){for(r(u,w,1);!e((t=i(y,w),g=t.shift()));)try{await g()}catch(t){l?.(t)}r(u,w,0)}var t})(),T),getStore:()=>t,destroy:()=>T.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return h&&(T[h]=()=>p),n(T)}},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).TinyBasePersisters={});
