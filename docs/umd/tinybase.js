var e,t;e=this,t=function(e,t){"use strict";const s=e=>typeof e,n="",o=s(n),r=s(!0),a=s(0),i=s(s),l="type",c="default",d="utf8",u="Listener",h="Result",f="add",g="Ids",L="Table",w=L+"s",S=L+g,v="Row",p=v+g,R="Sorted"+v+g,y="Cell",T=y+g,I="Value",b=I+"s",m=I+g,C=e=>n+e,V=(e,t)=>e.includes(t),E=(e,t)=>e.every(t),k=(e,t)=>F(e)===F(t)&&E(e,((e,s)=>t[s]===e)),J=(e,t)=>E(e,((s,n)=>0==n||t(e[n-1],s)<=0)),M=(e,t)=>e.sort(t),x=(e,t)=>e.forEach(t),A=(e,t)=>e.map(t),D=e=>Q(e,((e,t)=>e+t),0),F=e=>e.length,P=e=>0==F(e),Q=(e,t,s)=>e.reduce(t,s),j=(e,t,s)=>e.slice(t,s),z=(e,...t)=>e.push(...t),N=e=>e.pop(),O=e=>e.shift(),B=e=>JSON.stringify(e,((e,t)=>G(t,Map)?Q([...t],((e,[t,s])=>(e[t]=s,e)),{}):t)),W=JSON.parse,q=Math.max,H=Math.min,$=isFinite,G=(e,t)=>e instanceof t,K=e=>null==e,U=(e,t,s)=>K(e)?s?.():t(e),X=e=>e==o||e==r,Y=e=>s(e)==i,Z=e=>Array.isArray(e),_=()=>{},ee=e=>e.size,te=(e,t)=>e?.has(t)??!1,se=e=>K(e)||0==ee(e),ne=e=>[...e?.values()??[]],oe=e=>e.clear(),re=(e,t)=>e?.forEach(t),ae=(e,t)=>e?.delete(t),ie=e=>new Map(e),le=e=>[...e?.keys()??[]],ce=(e,t)=>e?.get(t),de=(e,t)=>re(e,((e,s)=>t(s,e))),ue=(e,t,s)=>K(s)?(ae(e,t),e):e?.set(t,s),he=(e,t,s)=>(te(e,t)||ue(e,t,s()),ce(e,t)),fe=(e,t,s)=>{const n={},o=t??(e=>e);return re(e,((e,t)=>U(o(e),(e=>s?.(e)?0:n[t]=e)))),n},ge=(e,t)=>{const s=ie(),n=t??(e=>e);return re(e,((e,t)=>s.set(t,n(e)))),s},Le=e=>ge(e,ge),we=(e,t,s,n,o=0)=>U((s?he:ce)(e,t[o],o>F(t)-2?s:ie),(r=>{if(o>F(t)-2)return n?.(r)&&ue(e,t[o]),r;const a=we(r,t,s,n,o+1);return se(r)&&ue(e,t[o]),a})),Se=e=>{const t=s(e);return X(t)||t==a&&$(e)?t:void 0},ve=(e,t,s,n,o)=>K(o)?e.delCell(t,s,n,!0):e.setCell(t,s,n,o),pe=(e,t,s)=>K(s)?e.delValue(t):e.setValue(t,s),Re=e=>new Set(Z(e)||K(e)?e:[e]),ye=(e,t)=>e?.add(t),Te=(e,t,s)=>{const n=e.hasRow,o=ie(),r=ie(),a=ie(),i=ie(),l=ie(),c=(t,s,...n)=>{const o=he(l,t,Re);return x(n,(t=>ye(o,t)&&s&&e.callListener(t))),n},d=(t,...s)=>U(ce(l,t),(n=>{x(P(s)?ne(n):s,(t=>{e.delListener(t),ae(n,t)})),se(n)&&ue(l,t)})),u=(e,s)=>{ue(o,e,s),te(r,e)||(ue(r,e,t()),ue(a,e,ie()),ue(i,e,ie()))},h=e=>{ue(o,e),ue(r,e),ue(a,e),ue(i,e),d(e)};return[()=>e,()=>le(o),e=>de(r,e),e=>te(r,e),e=>ce(o,e),e=>ce(r,e),(e,t)=>ue(r,e,t),u,(t,o,r,l,h)=>{u(t,o);const f=ie(),g=ie(),L=ce(a,t),w=ce(i,t),S=t=>{const r=s=>e.getCell(o,t,s),a=ce(L,t),i=n(o,t)?s(l(r,t)):void 0;if(a===i||Z(a)&&Z(i)&&k(a,i)||ue(f,t,[a,i]),!K(h)){const e=ce(w,t),s=n(o,t)?h(r,t):void 0;e!=s&&ue(g,t,s)}},v=e=>{r((()=>{re(f,(([,e],t)=>ue(L,t,e))),re(g,((e,t)=>ue(w,t,e)))}),f,g,L,w,e),oe(f),oe(g)};de(L,S),e.hasTable(o)&&x(e.getRowIds(o),(e=>{te(L,e)||S(e)})),v(!0),d(t),c(t,0,e.addRowListener(o,null,((e,t,s)=>S(s))),e.addTableListener(o,(()=>v())))},h,()=>de(l,h),c,d]},Ie=(e,t)=>s(e)==o?t=>t(e):e??(()=>t??n),be=e=>{const t=new WeakMap;return s=>(t.has(s)||t.set(s,e(s)),t.get(s))},me=/^\d+$/,Ce=()=>{const e=[];let t=0;return[s=>(s?O(e):null)??n+t++,t=>{me.test(t)&&F(e)<1e3&&z(e,t)}]},Ve=e=>{let t;const[s,o]=Ce(),r=ie();return[(o,a,i,l=[],c=(()=>[]))=>{t??=e();const d=s(1);return ue(r,d,[o,a,i,l,c]),ye(we(a,i??[n],Re),d),d},(e,s,...o)=>x(((e,t=[n])=>{const s=[],o=(e,n)=>n==F(t)?z(s,e):null===t[n]?re(e,(e=>o(e,n+1))):x([t[n],null],(t=>o(ce(e,t),n+1)));return o(e,0),s})(e,s),(e=>re(e,(e=>ce(r,e)[0](t,...s??[],...o))))),e=>U(ce(r,e),(([,t,s])=>(we(t,s??[n],void 0,(t=>(ae(t,e),se(t)?1:0))),ue(r,e),o(e),s))),e=>U(ce(r,e),(([e,,s=[],n,o])=>{const r=(...a)=>{const i=F(a);i==F(s)?e(t,...a,...o(a)):K(s[i])?x(n[i]?.(...a)??[],(e=>r(...a,e))):r(...a,s[i])};r()}))]},Ee=Object,ke=Ee.keys,Je=Ee.isFrozen,Me=Ee.freeze,xe=e=>G(e,Ee)&&e.constructor==Ee,Ae=(e,t)=>!K(((e,t)=>U(e,(e=>e[t])))(e,t)),De=(e,t)=>delete e[t],Fe=(e,t)=>A(Ee.entries(e),(([e,s])=>t(s,e))),Pe=e=>xe(e)&&P(ke(e)),Qe=be((e=>{let t,s,o,r=100,a=ie(),i=ie(),l=1;const c=ie(),d=ie(),[u,h,f]=Ve((()=>Q)),g=ie(),L=ie(),w=[],S=[],v=(t,s)=>{l=0,e.transaction((()=>{const[n,o]=ce(g,s);re(n,((s,n)=>re(s,((s,o)=>re(s,((s,r)=>ve(e,n,o,r,s[t]))))))),re(o,((s,n)=>pe(e,n,s[t])))})),l=1},p=e=>{ue(g,e),ue(L,e),h(d,[e])},R=(e,t)=>x(((e,t)=>e.splice(0,t))(e,t??F(e)),p),y=()=>R(w,F(w)-r),T=()=>U(t,(()=>{z(w,t),y(),R(S),t=void 0,o=1})),I=()=>{t=N(w),o=1},b=e.addCellListener(null,null,null,((e,t,s,n,o,r)=>{if(l){T();const e=he(a,t,ie),i=he(e,s,ie),l=he(i,n,(()=>[r,void 0]));l[1]=o,l[0]===o&&se(ue(i,n))&&se(ue(e,s))&&se(ue(a,t))&&I(),J()}})),m=e.addValueListener(null,((e,t,s,n)=>{if(l){T();const e=he(i,t,(()=>[n,void 0]));e[1]=s,e[0]===s&&se(ue(i,t))&&I(),J()}})),C=(e="")=>(K(t)&&(t=n+s++,ue(g,t,[a,i]),A(t,e),a=ie(),i=ie(),o=1),t),E=()=>{P(w)||(((e,...t)=>{e.unshift(...t)})(S,C()),v(0,t),t=N(w),o=1)},k=()=>{P(S)||(z(w,t),t=O(S),v(1,t),o=1)},J=()=>{o&&(h(c),o=0)},M=e=>{const t=C(e);return J(),t},A=(e,t)=>(D(e)&&ce(L,e)!==t&&(ue(L,e,t),h(d,[e])),Q),D=e=>te(g,e),Q={setSize:e=>(r=e,y(),Q),addCheckpoint:M,setCheckpoint:A,getStore:()=>e,getCheckpointIds:()=>[[...w],t,[...S]],forEachCheckpoint:e=>de(L,e),hasCheckpoint:D,getCheckpoint:e=>ce(L,e),goBackward:()=>(E(),J(),Q),goForward:()=>(k(),J(),Q),goTo:e=>{const s=V(w,e)?E:V(S,e)?k:null;for(;!K(s)&&e!=t;)s();return J(),Q},addCheckpointIdsListener:e=>u(e,c),addCheckpointListener:(e,t)=>u(t,d,[e]),delListener:e=>(f(e),Q),clear:()=>(R(w),R(S),K(t)||p(t),t=void 0,s=0,M(),Q),destroy:()=>{e.delListener(b),e.delListener(m)},getListenerStats:()=>({})};return Me(Q.clear())})),je=(e,t)=>e<t?-1:1,ze=be((e=>{const t=ie(),s=ie(),[o,r,a,i,l,c,d,,u,h,f]=Te(e,ie,(e=>K(e)?n:Z(e)?A(e,C):C(e))),[g,L,w]=Ve((()=>v)),S=(t,s,n)=>{const o=l(t);re(n,((t,n)=>s(n,(s=>re(t,(t=>s(t,(s=>e.forEachCell(o,t,s)))))))))},v={setIndexDefinition:(e,n,o,r,a,i=je)=>{const l=K(a)?void 0:([e],[t])=>a(e,t);return u(e,n,((n,o,a,u,h,f)=>{let g=0;const w=Re(),S=Re(),v=c(e);if(re(o,(([e,t],s)=>{const n=Re(e),o=Re(t);re(n,(e=>ae(o,e)?ae(n,e):0)),re(n,(e=>{ye(w,e),U(ce(v,e),(t=>{ae(t,s),se(t)&&(ue(v,e),g=1)}))})),re(o,(e=>{ye(w,e),te(v,e)||(ue(v,e,Re()),g=1),ye(ce(v,e),s),K(r)||ye(S,e)}))})),n(),se(h)||(f?de(v,(e=>ye(S,e))):de(a,(e=>U(ce(u,e),(e=>ye(S,e))))),re(S,(e=>{const t=(t,s)=>i(ce(h,t),ce(h,s),e),s=[...ce(v,e)];J(s,t)||(ue(v,e,Re(M(s,t))),ye(w,e))}))),(g||f)&&!K(l)){const t=[...v];J(t,l)||(d(e,ie(M(t,l))),g=1)}g&&L(t,[e]),re(w,(t=>L(s,[e,t])))}),Ie(o),U(r,Ie)),v},delIndexDefinition:e=>(h(e),v),getStore:o,getIndexIds:r,forEachIndex:e=>a(((t,s)=>e(t,(e=>S(t,e,s))))),forEachSlice:(e,t)=>S(e,t,c(e)),hasIndex:i,hasSlice:(e,t)=>te(c(e),t),getTableId:l,getSliceIds:e=>le(c(e)),getSliceRowIds:(e,t)=>ne(ce(c(e),t)),addSliceIdsListener:(e,s)=>g(s,t,[e]),addSliceRowIdsListener:(e,t,n)=>g(n,s,[e,t]),delListener:e=>(w(e),v),destroy:f,getListenerStats:()=>({})};return Me(v)})),Ne=ie([["avg",[(e,t)=>D(e)/t,(e,t,s)=>e+(t-e)/(s+1),(e,t,s)=>e+(e-t)/(s-1),(e,t,s,n)=>e+(t-s)/n]],["max",[e=>q(...e),(e,t)=>q(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:q(t,e)]],["min",[e=>H(...e),(e,t)=>H(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:H(t,e)]],["sum",[e=>D(e),(e,t)=>e+t,(e,t)=>e-t,(e,t,s)=>e-s+t]]]),Oe=(e,t,s,n,o,r=!1)=>{if(se(s))return;const[a,i,l,c]=o;return r||=K(e),re(n,(([s,n])=>{r||(e=K(s)?i?.(e,n,t++):K(n)?l?.(e,s,t--):c?.(e,n,s,t),r||=K(e))})),r?a(ne(s),ee(s)):e},Be=be((e=>{const t=ie(),[s,o,r,a,i,l,c,,d,u,h]=Te(e,_,(e=>isNaN(e)||K(e)||!0===e||!1===e||e===n?void 0:1*e)),[f,g,L]=Ve((()=>w)),w={setMetricDefinition:(e,s,n,o,r,a,i)=>{const u=Y(n)?[n,r,a,i]:ce(Ne,n)??ce(Ne,"sum");return d(e,s,((s,n,o,r,a,i)=>{const d=l(e),h=ee(r);i||=K(d),s();let f=Oe(d,h,r,n,u,i);$(f)||(f=void 0),f!=d&&(c(e,f),g(t,[e],f,d))}),Ie(o,1)),w},delMetricDefinition:e=>(u(e),w),getStore:s,getMetricIds:o,forEachMetric:r,hasMetric:a,getTableId:i,getMetric:l,addMetricListener:(e,s)=>f(s,t,[e]),delListener:e=>(L(e),w),destroy:h,getListenerStats:()=>({})};return Me(w)})),We=(e,t,s,o,r)=>{let a,i,l,c=0,d=!1;const u={load:async(s={},o={})=>{if(2!=c){c=1;const r=await t();K(r)||r==n?e.transaction((()=>e.setTables(s).setValues(o))):e.setJson(r),c=0}return u},startAutoLoad:async(e={},t={})=>(u.stopAutoLoad(),await u.load(e,t),d=!0,l=o(u.load),u),stopAutoLoad:()=>(d&&(r(l),l=void 0,d=!1),u),save:async()=>(1!=c&&(c=2,await s(e.getJson()),c=0),u),startAutoSave:async()=>(await u.stopAutoSave().save(),a=e.addTablesListener(u.save),i=e.addValuesListener(u.save),u),stopAutoSave:()=>(U(a,e.delListener),U(i,e.delListener),u),getStore:()=>e,destroy:()=>u.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return Me(u)},qe="storage",He=globalThis.window,$e=(e,t,s)=>We(e,(async()=>s.getItem(t)),(async e=>s.setItem(t,e)),(e=>{const n=n=>{n.storageArea===s&&n.key===t&&e()};return He.addEventListener(qe,n),n}),(e=>He.removeEventListener(qe,e))),Ge=e=>e.headers.get("ETag"),Ke=be((e=>{const t=e.createStore,[s,o,r,a,i,,,l,,c,d,g,w]=Te(e,(()=>!0),_),S=t(),I=t(),b=ie(),m=(e,t,...s)=>x(s,(s=>ye(he(he(b,t,ie),e,Re),s))),C=e=>{U(ce(b,e),(e=>{de(e,((e,t)=>re(t,(t=>e.delListener(t))))),oe(e)})),x([I,S],(t=>t.delTable(e)))},V=(e,t,s)=>m(t,e,t.addStartTransactionListener(s.startTransaction),t.addDidFinishTransactionListener((()=>s.finishTransaction()))),k={setQueryDefinition:(t,s,o)=>{l(t,s),C(t);const r=[],a=[[null,[s,null,null,[],ie()]]],i=[],c=[],d=[];o({select:(e,t)=>{const s=Y(e)?[F(r)+n,e]:[K(t)?e:t,s=>s(e,t)];return z(r,s),{as:e=>s[0]=e}},join:(e,t,s)=>{const n=K(s)||Y(t)?null:t,o=K(n)?t:s,r=[e,[e,n,Y(o)?o:e=>e(o),[],ie()]];return z(a,r),{as:e=>r[0]=e}},where:(e,t,s)=>z(i,Y(e)?e:K(s)?s=>s(e)===t:n=>n(e,t)===s),group:(e,t,s,n,o)=>{const r=[e,[e,Y(t)?[t,s,n,o]:ce(Ne,t)??[(e,t)=>t]]];return z(c,r),{as:e=>r[0]=e}},having:(e,t)=>z(d,Y(e)?e:s=>s(e)===t)});const u=ie(r);if(se(u))return k;const h=ie(a);de(h,((e,[,t])=>U(ce(h,t),(({3:t})=>K(e)?0:z(t,e)))));const f=ie(c);let L=S;if(se(f)&&P(d))L=I;else{V(t,L,I);const e=ie();de(f,((t,[s,n])=>ye(he(e,s,Re),[t,n])));const s=Re();de(u,(t=>te(e,t)?0:ye(s,t)));const n=ie(),o=(s,n,o,r)=>U(s,(([a,i,l,c])=>{de(n,((t,[s])=>{const n=he(a,t,ie),i=ce(n,o),l=r?void 0:s;if(i!==l){const s=Re([[i,l]]),r=ee(n);ue(n,o,l),re(ce(e,t),(([e,t])=>{const o=Oe(c[e],r,n,s,t);c[e]=K(Se(o))?null:o}))}})),se(i)||!E(d,(e=>e((e=>c[e]))))?I.delRow(t,l):K(l)?s[2]=I.addRow(t,c):I.setRow(t,l,c)}));m(L,t,L.addRowListener(t,null,((r,a,i,l)=>{const c=[],d=[],u=ie(),h=L.hasRow(t,i);let f=!h;re(s,(e=>{const[s,n,o]=l(t,i,e);z(c,n),z(d,o),f||=s})),de(e,(e=>{const[s,,n]=l(t,i,e);(f||s)&&ue(u,e,[n])})),f&&o(we(n,c,void 0,(([,e])=>(ae(e,i),se(e)))),u,i,1),h&&o(we(n,d,(()=>{const e={};return re(s,(s=>e[s]=L.getCell(t,i,s))),[ie(),Re(),void 0,e]}),(([,e])=>{ye(e,i)})),u,i)})))}V(t,e,L);const v=(n,o,r,a)=>{const l=t=>e.getCell(o,r,t);x(a,(s=>{const[o,,r,a,i]=ce(h,s),c=r?.(l,n),[d,u]=ce(i,n)??[];c!=d&&(K(u)||w(t,u),ue(i,n,K(c)?null:[c,...g(t,1,e.addRowListener(o,c,(()=>v(n,o,c,a))))]))})),(n=>{const o=(t,o)=>e.getCell(...K(o)?[s,n,t]:t===s?[s,n,o]:[ce(h,t)?.[0],ce(ce(h,t)?.[4],n)?.[0],o]);L.transaction((()=>E(i,(e=>e(o)))?de(u,((e,s)=>ve(L,t,n,e,s(o,n)))):L.delRow(t,n)))})(n)},{3:p}=ce(h,null);return L.transaction((()=>g(t,1,e.addRowListener(s,null,((n,o,r)=>{e.hasRow(s,r)?v(r,s,r,p):(L.delRow(t,r),re(h,(({4:e})=>U(ce(e,r),(([,s])=>{w(t,s),ue(e,r)})))))}))))),k},delQueryDefinition:e=>(C(e),c(e),k),getStore:s,getQueryIds:o,forEachQuery:r,hasQuery:a,getTableId:i,delListener:e=>(I.delListener(e),k),destroy:d,getListenerStats:()=>{const{tables:e,tableIds:t,transaction:s,...n}=I.getListenerStats();return n}};return Fe({[L]:[1,1],[p]:[0,1],[R]:[0,5],[v]:[1,2],[T]:[0,2],[y]:[1,3]},(([e,t],s)=>{x(e?["get","has","forEach"]:["get"],(e=>k[e+h+s]=(...t)=>I[e+s](...t))),k[f+h+s+u]=(...e)=>I[f+s+u](...j(e,0,t),((s,...n)=>e[t](k,...n)))})),Me(k)})),Ue=be((e=>{const t=ie(),s=ie(),o=ie(),r=ie(),[a,i,l,c,d,u,,,h,f,g]=Te(e,(()=>[ie(),ie(),ie(),ie()]),(e=>K(e)?void 0:e+n)),[L,w,S]=Ve((()=>y)),v=(e,t,s)=>U(u(e),(([n,,o])=>{if(!te(o,t)){const r=Re();if(d(e)!=R(e))ye(r,t);else{let e=t;for(;!K(e)&&!te(r,e);)ye(r,e),e=ce(n,e)}if(s)return r;ue(o,t,r)}return ce(o,t)})),p=(e,t)=>U(u(e),(([,,e])=>ue(e,t))),R=e=>ce(t,e),y={setRelationshipDefinition:(e,n,a,i)=>(ue(t,e,a),h(e,n,((t,n)=>{const a=Re(),i=Re(),l=Re(),[c,d]=u(e);re(n,(([t,s],n)=>{K(t)||(ye(i,t),U(ce(d,t),(e=>{ae(e,n),se(e)&&ue(d,t)}))),K(s)||(ye(i,s),te(d,s)||ue(d,s,Re()),ye(ce(d,s),n)),ye(a,n),ue(c,n,s),de(ce(r,e),(t=>{te(v(e,t),n)&&ye(l,t)}))})),t(),re(a,(t=>w(s,[e,t]))),re(i,(t=>w(o,[e,t]))),re(l,(t=>{p(e,t),w(r,[e,t])}))}),Ie(i)),y),delRelationshipDefinition:e=>(ue(t,e),f(e),y),getStore:a,getRelationshipIds:i,forEachRelationship:t=>l((s=>t(s,(t=>e.forEachRow(d(s),t))))),hasRelationship:c,getLocalTableId:d,getRemoteTableId:R,getRemoteRowId:(e,t)=>ce(u(e)?.[0],t),getLocalRowIds:(e,t)=>ne(ce(u(e)?.[1],t)),getLinkedRowIds:(e,t)=>K(u(e))?[t]:ne(v(e,t,!0)),addRemoteRowIdListener:(e,t,n)=>L(n,s,[e,t]),addLocalRowIdsListener:(e,t,s)=>L(s,o,[e,t]),addLinkedRowIdsListener:(e,t,s)=>(v(e,t),L(s,r,[e,t])),delListener:e=>(p(...S(e)),y),destroy:g,getListenerStats:()=>({})};return Me(y)})),Xe=e=>[e,e],Ye=()=>[ie(),ie()],Ze=(e,t,s,n=ue)=>(Fe(t,((t,n)=>s(e,n,t))),de(e,(s=>Ae(t,s)?0:n(e,s))),e),_e=(e,t,s)=>K(e)||!xe(e)||Pe(e)||Je(e)?(s?.(),!1):(Fe(e,((s,n)=>{t(s,n)||De(e,n)})),!Pe(e)),et=(e,t,s)=>ue(e,t,ce(e,t)==-s?void 0:s),tt=()=>{let e,t,s,n,o=0;const r=ie(),i=ie(),d=ie(),h=ie(),g=ie(),R=ie(),E=ie(),J=ie(),D=ie(),F=ie(),P=ie(),Q=ie(),N=Re(),O=ie(),q=ie(),H=ie(),$=Ye(),G=Ye(),Z=Ye(),_=Ye(),ee=Ye(),ne=Ye(),we=Ye(),Te=Ye(),Ie=Ye(),be=Ye(),me=Ye(),Ee=Ye(),ke=Ye(),Je=ie(),xe=Ye(),[Qe,ze,Ne,Oe]=Ve((()=>ss)),Be=e=>{if(!_e(e,((e,t)=>V([l,c],t))))return!1;const t=e[l];return!(!X(t)&&t!=a||(Se(e[c])!=t&&De(e,c),0))},We=(t,s)=>(!e||te(D,s)||mt(s))&&_e(t,((e,t)=>qe(s,t,e)),(()=>mt(s))),qe=(e,t,s,n)=>_e(n?s:Ke(s,e,t),((n,o)=>U(He(e,t,o,n),(e=>(s[o]=e,!0)),(()=>!1))),(()=>mt(e,t))),He=(t,s,n,o)=>e?U(ce(ce(D,t),n),(e=>Se(o)!=e[l]?mt(t,s,n,o,e[c]):o),(()=>mt(t,s,n,o))):K(Se(o))?mt(t,s,n,o):o,$e=(e,t)=>_e(t?e:Ue(e),((t,s)=>U(Ge(s,t),(t=>(e[s]=t,!0)),(()=>!1))),(()=>Ct())),Ge=(e,s)=>t?U(ce(P,e),(t=>Se(s)!=t[l]?Ct(e,s,t[c]):s),(()=>Ct(e,s))):K(Se(s))?Ct(e,s):s,Ke=(e,t,s)=>(U(ce(F,t),(([n,o])=>{re(n,((t,s)=>{Ae(e,s)||(e[s]=t)})),re(o,(n=>{Ae(e,n)||mt(t,s,n)}))})),e),Ue=e=>(t&&(re(Q,((t,s)=>{Ae(e,s)||(e[s]=t)})),re(N,(t=>{Ae(e,t)||Ct(t)}))),e),st=e=>Ze(D,e,((e,t,s)=>{const n=ie(),o=Re();Ze(he(D,t,ie),s,((e,t,s)=>{ue(e,t,s),U(s[c],(e=>ue(n,t,e)),(()=>ye(o,t)))})),ue(F,t,[n,o])}),((e,t)=>{ue(D,t),ue(F,t)})),nt=e=>Ze(P,e,((e,t,s)=>{ue(P,t,s),U(s[c],(e=>ue(Q,t,e)),(()=>ye(N,t)))}),((e,t)=>{ue(P,t),ue(Q,t),ae(N,t)})),ot=e=>Pe(e)?Ut():qt(e),rt=e=>Ze(q,e,((e,t,s)=>at(t,s)),((e,t)=>Lt(t))),at=(e,t)=>Ze(he(q,e,(()=>(pt(e,1),ie()))),t,((t,s,n)=>it(e,t,s,n)),((t,s)=>wt(e,t,s))),it=(e,t,s,n,o)=>Ze(he(t,s,(()=>(Rt(e,s,1),ie()))),n,((t,n,o)=>lt(e,s,t,n,o)),((n,r)=>St(e,t,s,n,r,o))),lt=(e,t,s,n,o)=>{te(s,n)||yt(e,t,n,1);const r=ce(s,n);o!==r&&(Tt(e,t,n,r,o),ue(s,n,o))},ct=(e,t,s,n,o)=>U(ce(t,s),(t=>lt(e,s,t,n,o)),(()=>it(e,t,s,Ke({[n]:o},e,s)))),dt=e=>Pe(e)?Xt():Ht(e),ut=e=>Ze(H,e,((e,t,s)=>ht(t,s)),((e,t)=>vt(t))),ht=(e,t)=>{te(H,e)||It(e,1);const s=ce(H,e);t!==s&&(bt(e,s,t),ue(H,e,t))},ft=(e,t)=>{const[s]=he(O,e,Ce),n=s(t);return te(ce(q,e),n)?ft(e,t):n},gt=e=>ce(q,e)??at(e,{}),Lt=e=>at(e,{}),wt=(e,t,s)=>{const[,n]=he(O,e,Ce);n(s),it(e,t,s,{},!0)},St=(e,t,s,n,o,r)=>{const a=ce(ce(F,e)?.[0],o);if(!K(a)&&!r)return lt(e,s,n,o,a);const i=t=>{Tt(e,s,t,ce(n,t)),yt(e,s,t,-1),ue(n,t)};K(a)?i(o):de(n,i),se(n)&&(Rt(e,s,-1),se(ue(t,s))&&(pt(e,-1),ue(q,e),ue(O,e)))},vt=e=>{const t=ce(Q,e);if(!K(t))return ht(e,t);bt(e,ce(H,e)),It(e,-1),ue(H,e)},pt=(e,t)=>et(r,e,t),Rt=(e,t,s)=>et(he(i,e,ie),t,s),yt=(e,t,s,n)=>et(he(he(d,e,ie),t,ie),s,n),Tt=(e,t,s,n,o)=>he(he(he(h,e,ie),t,ie),s,(()=>[n,0]))[1]=o,It=(e,t)=>et(g,e,t),bt=(e,t,s)=>he(R,e,(()=>[t,0]))[1]=s,mt=(e,t,s,n,o)=>(z(he(he(he(E,e,ie),t,ie),s,(()=>[])),n),o),Ct=(e,t,s)=>(z(he(J,e,(()=>[])),t),s),Vt=(e,t,s)=>U(ce(ce(ce(h,e),t),s),(([e,t])=>[!0,e,t]),(()=>[!1,...Xe(Nt(e,t,s))])),Et=e=>U(ce(R,e),(([e,t])=>[!0,e,t]),(()=>[!1,...Xe(Wt(e))])),kt=e=>se(E)||se(Ie[e])?0:re(e?ge(E,Le):E,((t,s)=>re(t,((t,n)=>re(t,((t,o)=>ze(Ie[e],[s,n,o],t))))))),Jt=e=>se(J)||se(be[e])?0:re(e?ge(J):J,((t,s)=>ze(be[e],[s],t))),Mt=(e,t,s)=>{if(!se(t))return ze(e,s),1},xt=e=>{const t=se(ee[e]),s=se(we[e])&&se(_[e])&&t&&se(G[e]),n=se(Te[e])&&se(ne[e])&&se(Z[e])&&se($[e]);if(!s||!n){const o=e?[ge(r),Le(i),ge(d,Le),ge(h,Le)]:[r,i,d,h];if(!s){re(o[2],((t,s)=>re(t,((t,n)=>Mt(we[e],t,[s,n])))));const s=Re();re(o[1],((n,o)=>{Mt(_[e],n,[o])&&!t&&(ze(ee[e],[o,null]),ye(s,o))})),t||re(o[3],((t,n)=>{if(!te(s,n)){const s=Re();re(t,(e=>re(e,(([t,n],o)=>n!==t?ye(s,o):ae(e,o))))),re(s,(t=>ze(ee[e],[n,t])))}})),Mt(G[e],o[0])}if(!n){let t;re(o[3],((s,n)=>{let o;re(s,((s,r)=>{let a;re(s,(([s,i],l)=>{i!==s&&(ze(Te[e],[n,r,l],i,s,Vt),t=o=a=1)})),a&&ze(ne[e],[n,r],Vt)})),o&&ze(Z[e],[n],Vt)})),t&&ze($[e],void 0,Vt)}}},At=e=>{const t=se(Ee[e]),s=se(ke[e])&&se(me[e]);if(!t||!s){const n=e?[ge(g),ge(R)]:[g,R];if(t||Mt(Ee[e],n[0]),!s){let t;re(n[1],(([s,n],o)=>{n!==s&&(ze(ke[e],[o],n,s,Et),t=1)})),t&&ze(me[e],void 0,Et)}}},Dt=(e,...t)=>(_t((()=>e(...A(t,C)))),ss),Ft=()=>fe(q,(e=>fe(e,fe))),Pt=()=>le(q),Qt=e=>le(ce(q,C(e))),jt=(e,t,s,n=0,o)=>{return A(j(M((r=ce(q,C(e)),a=(e,s)=>[K(t)?s:ce(e,C(t)),s],A([...r?.entries()??[]],(([e,t])=>a(t,e)))),(([e],[t])=>je(e,t)*(s?-1:1))),n,K(o)?o:n+o),(([,e])=>e));var r,a},zt=(e,t)=>le(ce(ce(q,C(e)),C(t))),Nt=(e,t,s)=>ce(ce(ce(q,C(e)),C(t)),C(s)),Ot=()=>fe(H),Bt=()=>le(H),Wt=e=>ce(H,C(e)),qt=e=>Dt((()=>(e=>_e(e,We,mt))(e)?rt(e):0)),Ht=e=>Dt((()=>$e(e)?ut(e):0)),$t=e=>{try{ot(W(e))}catch{}return ss},Gt=t=>Dt((()=>{if((e=_e(t,(e=>_e(e,Be))))&&(st(t),!se(q))){const e=Ft();Ut(),qt(e)}})),Kt=e=>Dt((()=>{if(t=(e=>_e(e,Be))(e)){const s=Ot();Zt(),Xt(),t=!0,nt(e),Ht(s)}})),Ut=()=>Dt((()=>rt({}))),Xt=()=>Dt((()=>ut({}))),Yt=()=>Dt((()=>{st({}),e=!1})),Zt=()=>Dt((()=>{nt({}),t=!1})),_t=(e,t)=>{if(-1!=o){es();const s=e();return ts(t),s}},es=()=>(-1!=o&&o++,1==o&&ze(Je,void 0,!1,!1),ss),ts=e=>(o>0&&(o--,0==o&&(s=!se(h),n=!se(R),o=1,kt(1),s&&xt(1),Jt(1),n&&At(1),e?.(fe(h,(e=>fe(e,(e=>fe(e,(e=>[...e]),(([e,t])=>e===t))),Pe)),Pe),fe(E,(e=>fe(e,fe))),fe(R,(e=>[...e]),(([e,t])=>e===t)),fe(J))&&(re(h,((e,t)=>re(e,((e,s)=>re(e,(([e],n)=>ve(ss,t,s,n,e))))))),re(R,(([e],t)=>pe(ss,t,e))),s=n=!1),ze(xe[0],void 0,s,n),o=-1,kt(0),s&&xt(0),Jt(0),n&&At(0),ze(xe[1],void 0,s,n),o=0,x([r,i,d,h,E,g,R,J],oe))),ss),ss={getTables:Ft,getTableIds:Pt,getTable:e=>fe(ce(q,C(e)),fe),getRowIds:Qt,getSortedRowIds:jt,getRow:(e,t)=>fe(ce(ce(q,C(e)),C(t))),getCellIds:zt,getCell:Nt,getValues:Ot,getValueIds:Bt,getValue:Wt,hasTables:()=>!se(q),hasTable:e=>te(q,C(e)),hasRow:(e,t)=>te(ce(q,C(e)),C(t)),hasCell:(e,t,s)=>te(ce(ce(q,C(e)),C(t)),C(s)),hasValues:()=>!se(H),hasValue:e=>te(H,C(e)),getTablesJson:()=>B(q),getValuesJson:()=>B(H),getJson:()=>B([q,H]),getTablesSchemaJson:()=>B(D),getValuesSchemaJson:()=>B(P),getSchemaJson:()=>B([D,P]),setTables:qt,setTable:(e,t)=>Dt((e=>We(t,e)?at(e,t):0),e),setRow:(e,t,s)=>Dt(((e,t)=>qe(e,t,s)?it(e,gt(e),t,s):0),e,t),addRow:(e,t,s=!0)=>_t((()=>{let n;return qe(e,n,t)&&(e=C(e),it(e,gt(e),n=ft(e,s?1:0),t)),n})),setPartialRow:(e,t,s)=>Dt(((e,t)=>{if(qe(e,t,s,1)){const n=gt(e);Fe(s,((s,o)=>ct(e,n,t,o,s)))}}),e,t),setCell:(e,t,s,n)=>Dt(((e,t,s)=>U(He(e,t,s,Y(n)?n(Nt(e,t,s)):n),(n=>ct(e,gt(e),t,s,n)))),e,t,s),setValues:Ht,setPartialValues:e=>Dt((()=>$e(e,1)?Fe(e,((e,t)=>ht(t,e))):0)),setValue:(e,t)=>Dt((e=>U(Ge(e,Y(t)?t(Wt(e)):t),(t=>ht(e,t)))),e),setTablesJson:$t,setValuesJson:e=>{try{dt(W(e))}catch{}return ss},setJson:e=>{try{const[t,s]=W(e);ot(t),dt(s)}catch{$t(e)}return ss},setTablesSchema:Gt,setValuesSchema:Kt,setSchema:(e,t)=>Dt((()=>{Gt(e),Kt(t)})),delTables:Ut,delTable:e=>Dt((e=>te(q,e)?Lt(e):0),e),delRow:(e,t)=>Dt(((e,t)=>U(ce(q,e),(s=>te(s,t)?wt(e,s,t):0))),e,t),delCell:(e,t,s,n)=>Dt(((e,t,s)=>U(ce(q,e),(o=>U(ce(o,t),(r=>te(r,s)?St(e,o,t,r,s,n):0))))),e,t,s),delValues:Xt,delValue:e=>Dt((e=>te(H,e)?vt(e):0),e),delTablesSchema:Yt,delValuesSchema:Zt,delSchema:()=>Dt((()=>{Yt(),Zt()})),transaction:_t,startTransaction:es,finishTransaction:ts,forEachTable:e=>re(q,((t,s)=>e(s,(e=>re(t,((t,s)=>e(s,(e=>de(t,e))))))))),forEachRow:(e,t)=>re(ce(q,C(e)),((e,s)=>t(s,(t=>de(e,t))))),forEachCell:(e,t,s)=>de(ce(ce(q,C(e)),C(t)),s),forEachValue:e=>de(H,e),addSortedRowIdsListener:(e,t,s,n,o,r,a)=>{let i=jt(e,t,s,n,o);return Qe((()=>{const a=jt(e,t,s,n,o);k(a,i)||(i=a,r(ss,e,t,s,n,o,i))}),ee[a?1:0],[e,t],[Pt])},addStartTransactionListener:e=>Qe(e,Je),addWillFinishTransactionListener:e=>Qe(e,xe[0]),addDidFinishTransactionListener:e=>Qe(e,xe[1]),callListener:e=>(Oe(e),ss),delListener:e=>(Ne(e),ss),getListenerStats:()=>({}),createStore:tt};return Fe({[w]:[0,$],[S]:[0,G],[L]:[1,Z,[Pt]],[p]:[1,_,[Pt]],[v]:[2,ne,[Pt,Qt]],[T]:[2,we,[Pt,Qt]],[y]:[3,Te,[Pt,Qt,zt],e=>Xe(Nt(...e))],InvalidCell:[3,Ie],[b]:[0,me],[m]:[0,Ee],[I]:[1,ke,[Bt],e=>Xe(Wt(e[0]))],InvalidValue:[1,be]},(([e,t,s,n],o)=>{ss[f+o+u]=(...o)=>Qe(o[e],t[o[e+1]?1:0],e>0?j(o,0,e):void 0,s,n)})),Me(ss)};e.createCheckpoints=Qe,e.createCustomPersister=We,e.createFilePersister=(e,s)=>We(e,(async()=>{try{return await t.promises.readFile(s,d)}catch{}}),(async e=>{try{await t.promises.writeFile(s,e,d)}catch{}}),(e=>t.watch(s,e)),(e=>e?.close())),e.createIndexes=ze,e.createLocalPersister=(e,t)=>$e(e,t,localStorage),e.createMetrics=Be,e.createQueries=Ke,e.createRelationships=Ue,e.createRemotePersister=(e,t,s,n)=>{let o;return We(e,(async()=>{const e=await fetch(t);return o=Ge(e),e.text()}),(async e=>await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:e})),(e=>setInterval((async()=>{const s=await fetch(t,{method:"HEAD"}),n=Ge(s);K(o)||K(n)||n==o||(o=n,e())}),1e3*n)),(e=>clearInterval(e)))},e.createSessionPersister=(e,t)=>$e(e,t,sessionStorage),e.createStore=tt,e.defaultSorter=je},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("fs")):"function"==typeof define&&define.amd?define(["exports","fs"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBase={},e.fs);
