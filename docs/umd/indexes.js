var e,t;e=this,t=function(e){"use strict";const t=e=>typeof e,n="",s=t(n),o=(e,t)=>e.every(t),r=(e,t)=>o(e,((n,s)=>0==s||t(e[s-1],n)<=0)),d=(e,t)=>e.sort(t),i=(e,t)=>e.forEach(t),l=e=>e.length,c=(e,...t)=>e.push(...t),a=e=>null==e,f=(e,t,n)=>a(e)?n?.():t(e),u=(e,t)=>e?.has(t)??!1,h=e=>a(e)||0==(e=>e.size)(e),p=e=>[...e?.values()??[]],I=e=>e.clear(),g=(e,t)=>e?.forEach(t),x=(e,t)=>e?.delete(t),y=e=>new Map(e),S=e=>[...e?.keys()??[]],b=(e,t)=>e?.get(t),v=(e,t)=>g(e,((e,n)=>t(n,e))),w=(e,t,n)=>a(n)?(x(e,t),e):e?.set(t,n),L=(e,t,n)=>(u(e,t)||w(e,t,n()),b(e,t)),T=(e,t,n,s,o=0)=>f((n?L:b)(e,t[o],o>l(t)-2?n:y),(r=>{if(o>l(t)-2)return s?.(r)&&w(e,t[o]),r;const d=T(r,t,n,s,o+1);return h(r)&&w(e,t[o]),d})),E=e=>new Set(e),R=(e,t)=>e?.add(t),j=(e,t,n)=>{const s=e.hasRow,o=y(),r=y(),d=y(),c=y(),T=y(),j=(t,n,...s)=>{const o=L(T,t,E);return i(s,(t=>R(o,t)&&n&&e.callListener(t))),s},M=(t,...n)=>f(b(T,t),(s=>{i(0==l(n)?p(s):n,(t=>{e.delListener(t),x(s,t)})),h(s)&&w(T,t)})),k=(e,n)=>{w(o,e,n),u(r,e)||(w(r,e,t()),w(d,e,y()),w(c,e,y()))},m=e=>{w(o,e),w(r,e),w(d,e),w(c,e),M(e)};return[()=>e,()=>S(o),e=>v(r,e),e=>u(r,e),e=>b(o,e),e=>b(r,e),(e,t)=>w(r,e,t),k,(t,o,r,l,f)=>{k(t,o);const h=y(),p=y(),x=b(d,t),S=b(c,t),L=t=>{const r=n=>e.getCell(o,t,n),d=b(x,t),i=s(o,t)?n(l(r,t)):void 0;if(d!=i&&w(h,t,[d,i]),!a(f)){const e=b(S,t),n=s(o,t)?f(r,t):void 0;e!=n&&w(p,t,n)}},T=e=>{r((()=>{g(h,(([,e],t)=>w(x,t,e))),g(p,((e,t)=>w(S,t,e)))}),h,p,x,S,e),I(h),I(p)};v(x,L),e.hasTable(o)&&i(e.getRowIds(o),(e=>{u(x,e)||L(e)})),T(!0),M(t),j(t,0,e.addRowListener(o,null,((e,t,n)=>L(n))),e.addTableListener(o,(()=>T())))},m,()=>v(T,m),j,M]},M=(e,o)=>t(e)==s?t=>t(e):e??(()=>o??n),k=(e,t)=>e<t?-1:1,m=(e,t=[n])=>{const s=[],o=(e,n)=>n==l(t)?c(s,e):null===t[n]?g(e,(e=>o(e,n+1))):i([t[n],null],(t=>o(b(e,t),n+1)));return o(e,0),s},z=Object.freeze,C=(e=>{const t=new WeakMap;return n=>(t.has(n)||t.set(n,e(n)),t.get(n))})((e=>{const t=y(),s=y(),[I,L,C,D,O,_,B,,P,W,q]=j(e,y,(e=>a(e)?n:e+n)),[A,F,G]=(e=>{let t,s=0;const r=[],d=y();return[(o,i,l)=>{t??=e();const c=r.pop()??n+s++;return w(d,c,[o,i,l]),R(T(i,l??[n],E),c),c},(e,n,...s)=>i(m(e,n),(e=>g(e,(e=>b(d,e)[0](t,...n??[],...s))))),e=>f(b(d,e),(([,t,s])=>(T(t,s??[n],void 0,(t=>(x(t,e),h(t)?1:0))),w(d,e),l(r)<1e3&&c(r,e),s))),(e,t)=>!o(m(e,t),a),(e,n,s)=>f(b(d,e),(([e,,o=[]])=>{const r=(...d)=>{const c=l(d);c==l(o)?e(t,...d,...s(d)):a(o[c])?i(n[c](...d),(e=>r(...d,e))):r(...d,o[c])};r()}))]})((()=>J)),H=(t,n,s)=>{const o=O(t);g(s,((t,s)=>n(s,(n=>g(t,(t=>n(t,(n=>e.forEachCell(o,t,n)))))))))},J={setIndexDefinition:(e,n,o,i,l,c=k)=>{const p=a(l)?void 0:([e],[t])=>l(e,t);return P(e,n,((n,o,l,I,S,L)=>{let T=0;const j=E(),M=E(),k=_(e);if(g(o,(([e,t],n)=>{a(e)||(R(j,e),f(b(k,e),(t=>{x(t,n),h(t)&&(w(k,e),T=1)}))),a(t)||(R(j,t),u(k,t)||(w(k,t,E()),T=1),R(b(k,t),n),a(i)||R(M,t))})),n(),h(S)||(L?v(k,(e=>R(M,e))):v(l,(e=>f(b(I,e),(e=>R(M,e))))),g(M,(e=>{const t=(t,n)=>c(b(S,t),b(S,n),e),n=[...b(k,e)];r(n,t)||(w(k,e,E(d(n,t))),R(j,e))}))),(T||L)&&!a(p)){const t=[...k];r(t,p)||(B(e,y(d(t,p))),T=1)}T&&F(t,[e]),g(j,(t=>F(s,[e,t])))}),M(o),f(i,M)),J},delIndexDefinition:e=>(W(e),J),getStore:I,getIndexIds:L,forEachIndex:e=>C(((t,n)=>e(t,(e=>H(t,e,n))))),forEachSlice:(e,t)=>H(e,t,_(e)),hasIndex:D,hasSlice:(e,t)=>u(_(e),t),getTableId:O,getSliceIds:e=>S(_(e)),getSliceRowIds:(e,t)=>p(b(_(e),t)),addSliceIdsListener:(e,n)=>A(n,t,[e]),addSliceRowIdsListener:(e,t,n)=>A(n,s,[e,t]),delListener:e=>(G(e),J),destroy:q,getListenerStats:()=>({})};return z(J)}));e.createIndexes=C,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseIndexes={});
