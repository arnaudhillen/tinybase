var a,t;a=this,t=function(a){"use strict";const t=a=>typeof a,e="tinybase",s=",",n=t(""),i=(a,t)=>a.repeat(t),o=Promise,c=clearInterval,r=a=>null==a,l=(a,t,e)=>r(a)?e?.():t(a),y=a=>t(a)==n,w=(a,t,e)=>a.slice(t,e),u=a=>a.length,d=async a=>o.all(a),E="_",p="_id",f=a=>`"${a.replace(/"/g,'""')}"`,m="SELECT",T=(a,t="")=>a.join(t),v=(a,t)=>a.map(t),A=a=>0==u(a),h=(a,t)=>a.filter(t),L=(a,...t)=>a.push(...t),R=(a,t)=>a?.has(t)??!1,O=a=>[...a?.values()??[]],N=(a,t)=>a?.delete(t),S=Object,b=a=>S.getPrototypeOf(a),D=S.keys,g=S.freeze,C=(a=[])=>S.fromEntries(a),I=(...a)=>S.assign({},...a),_=(a,t)=>v(S.entries(a),(([a,e])=>t(e,a))),M=a=>S.values(a),F=a=>u(D(a)),P=a=>(a=>!r(a)&&l(b(a),(a=>a==S.prototype||r(b(a))),(()=>!0)))(a)&&0==F(a),$=a=>new Map(a),B=a=>[...a?.keys()??[]],W=(a,t)=>a?.get(t),j=(a,t)=>v([...a?.entries()??[]],(([a,e])=>t(e,a))),x=(a,t,e)=>r(e)?(N(a,t),a):a?.set(t,e),H=(a,t,e)=>(R(a,t)||x(a,t,e()),W(a,t)),k=(a,t,e,s=x)=>(_(t,((t,s)=>e(a,s,t))),((a,t)=>{((a,t)=>{a?.forEach(t)})(a,((a,e)=>t(e)))})(a,(e=>((a,t)=>!r(((a,t)=>l(a,(a=>a[t])))(a,t)))(t,e)?0:s(a,e))),a),q=a=>new Set(Array.isArray(a)||r(a)?a:[a]),Y=(a,t)=>a?.add(t),G=m+"*FROM",J="FROM pragma_table_",U="WHERE",V=(a,t,e)=>{const n=$();return[async()=>k(n,C(await d(v(await a("SELECT name "+J+"list WHERE schema='main'AND type='table'AND name IN("+K(t)+")ORDER BY name",t),(async({name:t})=>[t,C(v(await a(m+" name,type "+J+"info(?)",[t]),(({name:a,type:t})=>[a,t])))])))),((a,t,e)=>x(n,t,k(H(n,t,$),e,((a,t,e)=>{e!=W(a,t)&&x(a,t,e)}),((a,t)=>x(a,t))))),((a,t)=>x(n,t))),async(t,e)=>((a,t)=>!r(W(W(n,a),t)))(t,e)?C(h(v(await a(G+f(t)),(a=>{return[a[e],(t={...a},s=e,delete t[s],t)];var t,s})),(([a,t])=>!r(a)&&!P(t)))):{},async(t,e,i,o,c,l=!1)=>{const y=q();_(i??{},(a=>v(D(a??{}),(a=>Y(y,a)))));const w=O(y);if(!l&&c&&A(w)&&R(n,t))return await a("DROP TABLE"+f(t)),void x(n,t);if(A(w)||R(n,t)){const s=W(n,t),i=q(B(s));await d([...v(w,(async e=>{N(i,e)||(await a(`ALTER TABLE${f(t)}ADD${f(e)}`),x(s,e,""))})),...!l&&o?v(O(i),(async n=>{n!=e&&(await a(`ALTER TABLE${f(t)}DROP${f(n)}`),x(s,n))})):[]])}else await a(`CREATE TABLE${f(t)}(${f(e)} PRIMARY KEY ON CONFLICT REPLACE${T(v(w,(a=>s+f(a))))});`),x(n,t,$([[e,""],...v(w,(a=>[a,""]))]));if(l)r(i)?await a("DELETE FROM"+f(t)+"WHERE 1"):await d(_(i,(async(s,n)=>{r(s)?await a("DELETE FROM"+f(t)+U+f(e)+"=?",[n]):A(w)||await z(a,t,e,D(s),[n,...M(s)])})));else if(A(w))R(n,t)&&await a("DELETE FROM"+f(t)+"WHERE 1");else{const s=h(B(W(n,t)),(a=>a!=e)),o=[],c=[];_(i??{},((a,t)=>{L(o,t,...v(s,(t=>a?.[t]))),L(c,t)})),await z(a,t,e,s,o),await a("DELETE FROM"+f(t)+U+f(e)+"NOT IN("+K(c)+")",c)}},async t=>{let s;await a("BEGIN");try{s=await t()}catch(a){e?.(a)}return await a("END"),s}]},z=async(a,t,e,n,o)=>await a("INSERT INTO"+f(t)+"("+f(e)+T(v(n,(a=>s+f(a))))+")VALUES"+w(i(`,(?${i(",?",u(n))})`,u(o)/(u(n)+1)),1)+"ON CONFLICT("+f(e)+")DO UPDATE SET"+T(v(n,(a=>f(a)+"=excluded."+f(a))),s),o),K=a=>T(v(a,(()=>"?")),s),Q=JSON.parse,X=$(),Z=$(),aa=(a,t,e,s,n,i,[o,c]=[],y=[])=>{let w,u,d,E=0,p=0;H(X,y,(()=>0)),H(Z,y,(()=>[]));const f=async a=>(2!=E&&(E=1,await m.schedule((async()=>{await a(),E=0}))),m),m={load:async(e,s)=>await f((async()=>{try{a.setContent(await t())}catch{a.setContent([e,s])}})),startAutoLoad:async(e={},n={})=>(m.stopAutoLoad(),await m.load(e,n),p=1,d=s((async(e,s)=>{if(s){const t=s();await f((async()=>a.setTransactionChanges(t)))}else await f((async()=>{try{a.setContent(e?.()??await t())}catch(a){i?.(a)}}))})),m),stopAutoLoad:()=>(p&&(n(d),d=void 0,p=0),m),save:async t=>(1!=E&&(E=2,await m.schedule((async()=>{try{await e(a.getContent,t)}catch(a){i?.(a)}E=0}))),m),startAutoSave:async()=>(await m.stopAutoSave().save(),w=a.addDidFinishTransactionListener(((a,t)=>{const[e,s]=t();P(e)&&P(s)||m.save((()=>[e,s]))})),m),stopAutoSave:()=>(l(w,a.delListener),w=void 0,m),schedule:async(...a)=>(L(W(Z,y),...a),await(async()=>{if(!W(X,y)){for(x(X,y,1);!r((a=W(Z,y),u=a.shift()));)try{await u()}catch(a){i?.(a)}x(X,y,0)}var a})(),m),getStore:()=>a,destroy:()=>m.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return o&&(m[o]=()=>c),g(m)},ta="store",ea=(a,t,e,s,n,[i],o,c)=>{const[r,l,y,w]=V(t,o,n);return aa(a,(async()=>await w((async()=>(await r(),Q((await l(i,p))[E]?.[ta]??"null"))))),(async a=>await w((async()=>{var t;await r(),await y(i,p,{[E]:{[ta]:(t=a()??null,JSON.stringify(t,((a,t)=>t instanceof Map?S.fromEntries([...t]):t)))}},!0,!0)}))),e,s,n,["getDb",c],c)},sa=(a,t,e,s,n,[i,o,[c,l,y]],w,u)=>{const[f,m,T,v]=V(t,w,n),A=async(a,t)=>await d(j(o,(async([e,s,n,i],o)=>{const c=a[o];t&&void 0===c||await T(e,s,c,n,i,t)}))),L=async(a,t)=>l?await T(y,p,{[E]:a},!0,!0,t):null;return aa(a,(async()=>await v((async()=>{await f();const a=await(async()=>C(h(await d(j(i,(async([a,t],e)=>[a,await m(e,t)]))),(a=>!P(a[1])))))(),t=await(async()=>c?(await m(y,p))[E]:{})();return P(a)&&r(t)?void 0:[a,t]}))),(async(a,t)=>await v((async()=>{if(await f(),r(t)){const[t,e]=a();await A(t),await L(e)}else{const[a,e]=t();await A(a,!0),await L(e,!0)}}))),e,s,n,["getDb",u],u)},na="json",ia="autoLoadIntervalSeconds",oa="rowIdColumnName",ca="tableId",ra="tableName",la={mode:na,[ia]:1},ya={load:0,save:0,[ra]:e+"_values"},wa=(a,t,e,s)=>{const n=$();return _(a,((a,i)=>{const o=w(M(I(t,y(a)?{[e]:a}:a)),0,F(t));r(o[0])||s(i,o[0])||x(n,i,o)})),n},ua="pragma ",da="data_version",Ea="schema_version",pa=(a,t,s,n,i,o,r,l)=>{let u,d,E;const[f,T,v,A]=(a=>{const t=(a=>I(la,y(a)?{storeTableName:a}:a??{}))(a),s=t[ia];if(t.mode==na){const{storeTableName:a=e}=t;return[1,s,[a],q(a)]}const{tables:{load:n={},save:i={}}={},values:o={}}=t,c=w(M(I(ya,o)),0,F(ya)),r=c[2],l=q(r);return[0,s,[wa(n,{[ca]:null,[oa]:p},ca,(a=>Y(l,a)&&a==r)),wa(i,{[ra]:null,[oa]:p,deleteEmptyColumns:0,deleteEmptyTable:0},ra,((a,t)=>Y(l,t)&&t==r)),c],l]})(t);return(f?ea:sa)(a,o?async(a,t)=>(o(a,t),await s(a,t)):s,(a=>{return[(t=async()=>{try{const t=(await s(ua+da))[0][da],e=(await s(ua+Ea))[0][Ea],n=(await s(m+" TOTAL_CHANGES() c"))[0].c;t==(u??=t)&&e==(d??=e)&&n==(E??=n)||(a(),u=t,d=e)}catch{}},e=T,t(),setInterval(t,1e3*e)),n((t=>A.has(t)?a():0))];var t,e}),(([a,t])=>{c(a),u=d=null,i(t)}),r,v,O(A),l)};a.createSqliteWasmPersister=(a,t,e,s,n,i)=>pa(a,s,(async(a,t=[])=>e.exec(a,{bind:t,rowMode:"object",returnValue:"resultRows"}).map((a=>({...a})))),(a=>t.capi.sqlite3_update_hook(e,((t,e,s,n)=>a(n)),0)),(()=>t.capi.sqlite3_update_hook(e,(()=>0),0)),n,i,e)},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((a="undefined"!=typeof globalThis?globalThis:a||self).TinyBasePersisterSqliteWasm={});
