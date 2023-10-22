var t,e;t=this,e=function(t){"use strict";const e=t=>typeof t,a="",s=e(a),o=(t,e)=>t instanceof e,n=t=>null==t,r=(t,e,a)=>n(t)?a?.():e(t),i=t=>e(t)==s,c=t=>t.length,d=Object,y=d.keys,u=d.freeze,f=t=>(t=>o(t,d)&&t.constructor==d)(t)&&0==(t=>c(y(t)))(t),h=t=>JSON.stringify(t,((t,e)=>o(e,Map)?d.fromEntries([...e]):e)),l=JSON.parse,p="/store",v=t=>new Map(t),w=(t,e)=>t?.get(e),g=(t,e,a)=>{return n(a)?(s=t,o=e,s?.delete(o),t):t?.set(e,a);var s,o},m=(t,e,a)=>{var s,o;return s=t,o=e,s?.has(o)||g(t,e,a()),w(t,e)},P=v(),S=v(),A="message";t.createPartyKitPersister=(t,e,s,o)=>{const{host:d,room:y}=e.partySocketOptions,{storeProtocol:v="https",storePath:L=p,messagePrefix:C=a}={...i(s)?{storeProtocol:s}:s},T=v+"://"+d+"/parties/"+e.name+"/"+y+L,b=async t=>await(await fetch(T,{...t?{method:"PUT",body:h(t)}:{},mode:"cors",cache:"no-store"})).json();return((t,e,a,s,o,i,[c,d]=[],y=[])=>{let h,l,p,v=0,A=0;m(P,y,(()=>0)),m(S,y,(()=>[]));const L=async t=>(2!=v&&(v=1,await C.schedule((async()=>{await t(),v=0}))),C),C={load:async(a,s)=>await L((async()=>{try{t.setContent(await e())}catch{t.setContent([a,s])}})),startAutoLoad:async(a={},o={})=>(C.stopAutoLoad(),await C.load(a,o),A=1,p=s((async(a,s)=>{if(s){const e=s();await L((async()=>t.setTransactionChanges(e)))}else await L((async()=>{try{t.setContent(a?.()??await e())}catch(t){i?.(t)}}))})),C),stopAutoLoad:()=>(A&&(o(p),p=void 0,A=0),C),save:async e=>(1!=v&&(v=2,await C.schedule((async()=>{try{await a(t.getContent,e)}catch(t){i?.(t)}v=0}))),C),startAutoSave:async()=>(await C.stopAutoSave().save(),h=t.addDidFinishTransactionListener(((t,e)=>{const[a,s]=e();f(a)&&f(s)||C.save((()=>[a,s]))})),C),stopAutoSave:()=>(r(h,t.delListener),h=void 0,C),schedule:async(...t)=>(((t,...e)=>{t.push(...e)})(w(S,y),...t),await(async()=>{if(!w(P,y)){for(g(P,y,1);!n((t=w(S,y),l=t.shift()));)try{await l()}catch(t){i?.(t)}g(P,y,0)}var t})(),C),getStore:()=>t,destroy:()=>C.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return c&&(C[c]=()=>d),u(C)})(t,(async()=>await b()),(async(t,a)=>{var s,o;a?e.send((s=C,o=a(),s+"s"+(i(o)?o:h(o)))):await b(t())}),(t=>{const a=e=>r(((t,e,a)=>{const s=c(t);return((t,e)=>t.startsWith(e))(e,t)?[e[s],l((o=e,n=s+1,o.slice(n,void 0)))]:void 0;var o,n})(C,e.data),(([e,a])=>{"s"==e&&t(void 0,(()=>a))}));return e.addEventListener(A,a),a}),(t=>{e.removeEventListener(A,t)}),o,["getConnection",e])}},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).TinyBasePersisterPartyKitClient={});