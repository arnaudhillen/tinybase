var e,t;e=this,t=function(e){"use strict";const t=e=>typeof e,s="",l=t(s),n=t(!0),a=t(0),o=t(t),r="type",c="default",i="Ids",d="Table",u=d+"s",h=d+i,f="Row"+i,g="Cell",T=g+i,b="Value",V=b+"s",v=b+i,C=e=>s+e,S=(e,t)=>e.forEach(t),y=(e,t)=>e.map(t),w=e=>e.length,p=(e,t,s)=>e.slice(t,s),I=(e,...t)=>e.push(...t),R=e=>JSON.stringify(e,((e,t)=>{return L(t,Map)?(s=(e,[t,s])=>(e[t]=s,e),l={},[...t].reduce(s,l)):t;var s,l})),m=JSON.parse,J=isFinite,L=(e,t)=>e instanceof t,E=e=>null==e,F=(e,t,s)=>E(e)?s?.():t(e),x=e=>e==l||e==n,z=e=>t(e)==o,O=Object,j=O.keys,k=O.isFrozen,A=O.freeze,M=e=>L(e,O)&&e.constructor==O,N=(e,t)=>!E(((e,t)=>F(e,(e=>e[t])))(e,t)),P=(e,t)=>(delete e[t],e),B=(e,t)=>y(O.entries(e),(([e,s])=>t(s,e))),D=e=>M(e)&&0==(e=>w(j(e)))(e),W=(e,t)=>e?.has(t)??!1,$=e=>E(e)||0==(e=>e.size)(e),q=e=>e.clear(),G=(e,t)=>e?.forEach(t),H=(e,t)=>e?.delete(t),K=e=>new Map(e),Q=e=>[...e?.keys()??[]],U=(e,t)=>e?.get(t),X=(e,t)=>G(e,((e,s)=>t(s,e))),Y=(e,t,s)=>E(s)?(H(e,t),e):e?.set(t,s),Z=(e,t,s)=>(W(e,t)||Y(e,t,s()),U(e,t)),_=(e,t,s,l=Y)=>(B(t,((t,l)=>s(e,l,t))),X(e,(s=>N(t,s)?0:l(e,s))),e),ee=(e,t,s)=>{const l={};return G(e,((e,n)=>{const a=t?t(e,n):e;!s?.(a,e)&&(l[n]=a)})),l},te=(e,t,s)=>ee(e,(e=>ee(e,t,s)),D),se=(e,t,s)=>ee(e,(e=>te(e,t,s)),D),le=(e,t)=>{const s=K();return G(e,((e,l)=>s.set(l,t?.(e)??e))),s},ne=e=>le(e,le),ae=e=>le(e,ne),oe=(e,t,s,l,n=0)=>F((s?Z:U)(e,t[n],n>w(t)-2?s:K),(a=>{if(n>w(t)-2)return l?.(a)&&Y(e,t[n]),a;const o=oe(a,t,s,l,n+1);return $(a)&&Y(e,t[n]),o})),re=e=>new Set(Array.isArray(e)||E(e)?e:[e]),ce=(e,t)=>e?.add(t),ie=/^\d+$/,de=()=>{const e=[];let t=0;return[l=>(l?e.shift():null)??s+t++,t=>{ie.test(t)&&w(e)<1e3&&I(e,t)}]},ue=e=>[e,e],he=()=>[K(),K()],fe=e=>[...e],ge=([e,t])=>e===t,Te=e=>{const s=t(e);return x(s)||s==a&&J(e)?s:void 0},be=(e,t,s,l,n)=>E(n)?e.delCell(t,s,l,!0):e.setCell(t,s,l,n),Ve=(e,t,s)=>E(s)?e.delValue(t):e.setValue(t,s),ve=(e,t,s)=>E(e)||!M(e)||D(e)||k(e)?(s?.(),!1):(B(e,((s,l)=>{t(s,l)||P(e,l)})),!D(e)),Ce=(e,t,s)=>Y(e,t,U(e,t)==-s?void 0:s),Se=()=>{let e,t,l=!1,n=!1,o=0;const i=K(),J=K(),L=K(),O=K(),j=K(),k=K(),M=K(),ie=K(),ye=K(),we=K(),pe=K(),Ie=K(),Re=K(),me=re(),Je=K(),Le=K(),Ee=K(),Fe=K(),xe=he(),ze=he(),Oe=he(),je=he(),ke=he(),Ae=he(),Me=he(),Ne=he(),Pe=he(),Be=he(),De=he(),We=he(),$e=he(),qe=he(),Ge=K(),He=he(),[Ke,Qe,Ue,Xe]=(e=>{let t;const[l,n]=de(),a=K();return[(e,n,o,r=[],c=(()=>[]))=>{t??=is;const i=l(1);return Y(a,i,[e,n,o,r,c]),ce(oe(n,o??[s],re),i),i},(e,l,...n)=>S(((e,t=[s])=>{const l=[],n=(e,s)=>s==w(t)?I(l,e):null===t[s]?G(e,(e=>n(e,s+1))):S([t[s],null],(t=>n(U(e,t),s+1)));return n(e,0),l})(e,l),(e=>G(e,(e=>U(a,e)[0](t,...l??[],...n))))),e=>F(U(a,e),(([,t,l])=>(oe(t,l??[s],void 0,(t=>(H(t,e),$(t)?1:0))),Y(a,e),n(e),l))),e=>F(U(a,e),(([e,,s=[],l,n])=>{const a=(...o)=>{const r=w(o);r==w(s)?e(t,...o,...n(o)):E(s[r])?S(l[r]?.(...o)??[],(e=>a(...o,e))):a(...o,s[r])};a()}))]})(),Ye=e=>{if(!ve(e,((e,t)=>[r,c].includes(t))))return!1;const t=e[r];return!(!x(t)&&t!=a||(Te(e[c])!=t&&P(e,c),0))},Ze=(t,s)=>(!e||W(we,s)||Lt(s))&&ve(t,((e,t)=>_e(s,t,e)),(()=>Lt(s))),_e=(e,t,s,l)=>ve(l?s:lt(s,e,t),((l,n)=>F(et(e,t,n,l),(e=>(s[n]=e,!0)),(()=>!1))),(()=>Lt(e,t))),et=(t,s,l,n)=>e?F(U(U(we,t),l),(e=>Te(n)!=e[r]?Lt(t,s,l,n,e[c]):n),(()=>Lt(t,s,l,n))):E(Te(n))?Lt(t,s,l,n):n,tt=(e,t)=>ve(t?e:nt(e),((t,s)=>F(st(s,t),(t=>(e[s]=t,!0)),(()=>!1))),(()=>Et())),st=(e,s)=>t?F(U(Ie,e),(t=>Te(s)!=t[r]?Et(e,s,t[c]):s),(()=>Et(e,s))):E(Te(s))?Et(e,s):s,lt=(e,t,s)=>(F(U(pe,t),(([l,n])=>{G(l,((t,s)=>{N(e,s)||(e[s]=t)})),G(n,(l=>{N(e,l)||Lt(t,s,l)}))})),e),nt=e=>(t&&(G(Re,((t,s)=>{N(e,s)||(e[s]=t)})),G(me,(t=>{N(e,t)||Et(t)}))),e),at=e=>_(we,e,((e,t,s)=>{const l=K(),n=re();_(Z(we,t,K),s,((e,t,s)=>{Y(e,t,s),F(s[c],(e=>Y(l,t,e)),(()=>ce(n,t)))})),Y(pe,t,[l,n])}),((e,t)=>{Y(we,t),Y(pe,t)})),ot=e=>_(Ie,e,((e,t,s)=>{Y(Ie,t,s),F(s[c],(e=>Y(Re,t,e)),(()=>ce(me,t)))}),((e,t)=>{Y(Ie,t),Y(Re,t),H(me,t)})),rt=e=>D(e)?es():Ut(e),ct=e=>_(Ee,e,((e,t,s)=>it(t,s)),((e,t)=>vt(t))),it=(e,t)=>_(Z(Ee,e,(()=>(wt(e,1),Y(Je,e,de()),Y(Le,e,K()),K()))),t,((t,s,l)=>dt(e,t,s,l)),((t,s)=>Ct(e,t,s))),dt=(e,t,s,l,n)=>_(Z(t,s,(()=>(pt(e,s,1),K()))),l,((t,l,n)=>ut(e,s,t,l,n)),((l,a)=>St(e,t,s,l,a,n))),ut=(e,t,s,l,n)=>{W(s,l)||It(e,t,l,1);const a=U(s,l);n!==a&&(Rt(e,t,l,a,n),Y(s,l,n))},ht=(e,t,s,l,n)=>F(U(t,s),(t=>ut(e,s,t,l,n)),(()=>dt(e,t,s,lt({[l]:n},e,s)))),ft=e=>D(e)?ls():Xt(e),gt=e=>_(Fe,e,((e,t,s)=>Tt(t,s)),((e,t)=>yt(t))),Tt=(e,t)=>{W(Fe,e)||mt(e,1);const s=U(Fe,e);t!==s&&(Jt(e,s,t),Y(Fe,e,t))},bt=(e,t)=>{const[s]=U(Je,e),l=s(t);return W(U(Ee,e),l)?bt(e,t):l},Vt=e=>U(Ee,e)??it(e,{}),vt=e=>it(e,{}),Ct=(e,t,s)=>{const[,l]=U(Je,e);l(s),dt(e,t,s,{},!0)},St=(e,t,s,l,n,a)=>{const o=U(U(pe,e)?.[0],n);if(!E(o)&&!a)return ut(e,s,l,n,o);const r=t=>{Rt(e,s,t,U(l,t)),It(e,s,t,-1),Y(l,t)};E(o)?r(n):X(l,r),$(l)&&(pt(e,s,-1),$(Y(t,s))&&(wt(e,-1),Y(Ee,e),Y(Je,e),Y(Le,e)))},yt=e=>{const t=U(Re,e);if(!E(t))return Tt(e,t);Jt(e,U(Fe,e)),mt(e,-1),Y(Fe,e)},wt=(e,t)=>Ce(i,e,t),pt=(e,t,s)=>Ce(Z(L,e,K),t,s),It=(e,t,s,l)=>{const n=U(Le,e),a=U(n,s)??0;(0==a&&1==l||1==a&&-1==l)&&Ce(Z(J,e,K),s,l),Y(n,s,a!=-l?a+l:null),Ce(Z(Z(O,e,K),t,K),s,l)},Rt=(e,t,s,l,n)=>Z(Z(Z(j,e,K),t,K),s,(()=>[l,0]))[1]=n,mt=(e,t)=>Ce(k,e,t),Jt=(e,t,s)=>Z(M,e,(()=>[t,0]))[1]=s,Lt=(e,t,s,l,n)=>(I(Z(Z(Z(ie,e,K),t,K),s,(()=>[])),l),n),Et=(e,t,s)=>(I(Z(ye,e,(()=>[])),t),s),Ft=(e,t,s)=>F(U(U(U(j,e),t),s),(([e,t])=>[!0,e,t]),(()=>[!1,...ue(Gt(e,t,s))])),xt=e=>F(U(M,e),(([e,t])=>[!0,e,t]),(()=>[!1,...ue(Qt(e))])),zt=e=>$(ie)||$(Be[e])?0:G(e?ae(ie):ie,((t,s)=>G(t,((t,l)=>G(t,((t,n)=>Qe(Be[e],[s,l,n],t))))))),Ot=e=>$(ye)||$(De[e])?0:G(e?le(ye):ye,((t,s)=>Qe(De[e],[s],t))),jt=(e,t,s)=>{if(!$(t))return Qe(e,s,(()=>ee(t))),1},kt=e=>{const t=$(Ae[e]),s=$(Ne[e])&&$(je[e])&&$(ke[e])&&t&&$(ze[e]),l=$(Pe[e])&&$(Me[e])&&$(Oe[e])&&$(xe[e]);if(!s||!l){const n=e?[le(i),ne(J),ne(L),ae(O),ae(j)]:[i,J,L,O,j];if(!s){jt(ze[e],n[0]),G(n[1],((t,s)=>jt(je[e],t,[s])));const s=re();G(n[2],((l,n)=>{jt(ke[e],l,[n])&&!t&&(Qe(Ae[e],[n,null]),ce(s,n))})),t||G(n[4],((t,l)=>{if(!W(s,l)){const s=re();G(t,(e=>G(e,(([t,l],n)=>l!==t?ce(s,n):H(e,n))))),G(s,(t=>Qe(Ae[e],[l,t])))}})),G(n[3],((t,s)=>G(t,((t,l)=>jt(Ne[e],t,[s,l])))))}if(!l){let t;G(n[4],((s,l)=>{let n;G(s,((s,a)=>{let o;G(s,(([s,r],c)=>{r!==s&&(Qe(Pe[e],[l,a,c],r,s,Ft),t=n=o=1)})),o&&Qe(Me[e],[l,a],Ft)})),n&&Qe(Oe[e],[l],Ft)})),t&&Qe(xe[e],void 0,Ft)}}},At=e=>{const t=$($e[e]),s=$(qe[e])&&$(We[e]);if(!t||!s){const l=e?[le(k),le(M)]:[k,M];if(t||jt($e[e],l[0]),!s){let t;G(l[1],(([s,l],n)=>{l!==s&&(Qe(qe[e],[n],l,s,xt),t=1)})),t&&Qe(We[e],void 0,xt)}}},Mt=(e,...t)=>(os((()=>e(...y(t,C)))),is),Nt=()=>[ee(j,((e,t)=>-1===U(i,t)?null:ee(e,((e,s)=>-1===U(U(L,t),s)?null:ee(e,(([,e])=>e??null),((e,t)=>ge(t)))),D)),D),ee(M,(([,e])=>e??null),((e,t)=>ge(t)))],Pt=()=>({cellsTouched:l,valuesTouched:n,changedCells:se(j,fe,ge),invalidCells:se(ie),changedValues:ee(M,fe,ge),invalidValues:ee(ye),changedTableIds:ee(i),changedRowIds:te(L),changedCellIds:se(O),changedValueIds:ee(k)}),Bt=()=>se(Ee),Dt=()=>Q(Ee),Wt=e=>Q(U(Ee,C(e))),$t=(e,t,s,l=0,n)=>{return y(p((o=U(Ee,C(e)),r=(e,s)=>[E(t)?s:U(e,C(t)),s],a=([e],[t])=>(e<t?-1:1)*(s?-1:1),y([...o?.entries()??[]],(([e,t])=>r(t,e))).sort(a)),l,E(n)?n:l+n),(([,e])=>e));var a,o,r},qt=(e,t)=>Q(U(U(Ee,C(e)),C(t))),Gt=(e,t,s)=>U(U(U(Ee,C(e)),C(t)),C(s)),Ht=()=>ee(Fe),Kt=()=>Q(Fe),Qt=e=>U(Fe,C(e)),Ut=e=>Mt((()=>(e=>ve(e,Ze,Lt))(e)?ct(e):0)),Xt=e=>Mt((()=>tt(e)?gt(e):0)),Yt=e=>{try{rt(m(e))}catch{}return is},Zt=t=>Mt((()=>{if((e=ve(t,(e=>ve(e,Ye))))&&(at(t),!$(Ee))){const e=Bt();es(),Ut(e)}})),_t=e=>Mt((()=>{if(t=(e=>ve(e,Ye))(e)){const s=Ht();as(),ls(),t=!0,ot(e),Xt(s)}})),es=()=>Mt((()=>ct({}))),ts=e=>Mt((e=>W(Ee,e)?vt(e):0),e),ss=(e,t)=>Mt(((e,t)=>F(U(Ee,e),(s=>W(s,t)?Ct(e,s,t):0))),e,t),ls=()=>Mt((()=>gt({}))),ns=()=>Mt((()=>{at({}),e=!1})),as=()=>Mt((()=>{ot({}),t=!1})),os=(e,t)=>{if(-1!=o){rs();const s=e();return cs(t),s}},rs=()=>(-1!=o&&o++,1==o&&Qe(Ge,void 0,Nt,Pt),is),cs=e=>(o>0&&(o--,0==o&&(l=!$(j),n=!$(M),o=1,zt(1),l&&kt(1),Ot(1),n&&At(1),e?.(Nt,Pt)&&(G(j,((e,t)=>G(e,((e,s)=>G(e,(([e],l)=>be(is,t,s,l,e))))))),G(M,(([e],t)=>Ve(is,t,e))),l=n=!1),Qe(He[0],void 0,Nt,Pt),o=-1,zt(0),l&&kt(0),Ot(0),n&&At(0),Qe(He[1],void 0,Nt,Pt),o=0,l=n=!1,S([i,J,L,O,j,ie,k,M,ye],q))),is),is={getContent:()=>[Bt(),Ht()],getTables:Bt,getTableIds:Dt,getTable:e=>te(U(Ee,C(e))),getTableCellIds:e=>Q(U(Le,C(e))),getRowIds:Wt,getSortedRowIds:$t,getRow:(e,t)=>ee(U(U(Ee,C(e)),C(t))),getCellIds:qt,getCell:Gt,getValues:Ht,getValueIds:Kt,getValue:Qt,hasTables:()=>!$(Ee),hasTable:e=>W(Ee,C(e)),hasTableCell:(e,t)=>W(U(Le,C(e)),C(t)),hasRow:(e,t)=>W(U(Ee,C(e)),C(t)),hasCell:(e,t,s)=>W(U(U(Ee,C(e)),C(t)),C(s)),hasValues:()=>!$(Fe),hasValue:e=>W(Fe,C(e)),getTablesJson:()=>R(Ee),getValuesJson:()=>R(Fe),getJson:()=>R([Ee,Fe]),getTablesSchemaJson:()=>R(we),getValuesSchemaJson:()=>R(Ie),getSchemaJson:()=>R([we,Ie]),setContent:([e,t])=>Mt((()=>{(D(e)?es:Ut)(e),(D(t)?ls:Xt)(t)})),setTables:Ut,setTable:(e,t)=>Mt((e=>Ze(t,e)?it(e,t):0),e),setRow:(e,t,s)=>Mt(((e,t)=>_e(e,t,s)?dt(e,Vt(e),t,s):0),e,t),addRow:(e,t,s=!0)=>os((()=>{let l;return _e(e,l,t)&&(e=C(e),dt(e,Vt(e),l=bt(e,s?1:0),t)),l})),setPartialRow:(e,t,s)=>Mt(((e,t)=>{if(_e(e,t,s,1)){const l=Vt(e);B(s,((s,n)=>ht(e,l,t,n,s)))}}),e,t),setCell:(e,t,s,l)=>Mt(((e,t,s)=>F(et(e,t,s,z(l)?l(Gt(e,t,s)):l),(l=>ht(e,Vt(e),t,s,l)))),e,t,s),setValues:Xt,setPartialValues:e=>Mt((()=>tt(e,1)?B(e,((e,t)=>Tt(t,e))):0)),setValue:(e,t)=>Mt((e=>F(st(e,z(t)?t(Qt(e)):t),(t=>Tt(e,t)))),e),setTransactionChanges:e=>Mt((()=>{B(e[0],((e,t)=>E(e)?ts(t):B(e,((e,s)=>E(e)?ss(t,s):B(e,((e,l)=>be(is,t,s,l,e))))))),B(e[1],((e,t)=>Ve(is,t,e)))})),setTablesJson:Yt,setValuesJson:e=>{try{ft(m(e))}catch{}return is},setJson:e=>{try{const[t,s]=m(e);rt(t),ft(s)}catch{Yt(e)}return is},setTablesSchema:Zt,setValuesSchema:_t,setSchema:(e,t)=>Mt((()=>{Zt(e),_t(t)})),delTables:es,delTable:ts,delRow:ss,delCell:(e,t,s,l)=>Mt(((e,t,s)=>F(U(Ee,e),(n=>F(U(n,t),(a=>W(a,s)?St(e,n,t,a,s,l):0))))),e,t,s),delValues:ls,delValue:e=>Mt((e=>W(Fe,e)?yt(e):0),e),delTablesSchema:ns,delValuesSchema:as,delSchema:()=>Mt((()=>{ns(),as()})),transaction:os,startTransaction:rs,finishTransaction:cs,forEachTable:e=>G(Ee,((t,s)=>e(s,(e=>G(t,((t,s)=>e(s,(e=>X(t,e))))))))),forEachTableCell:(e,t)=>X(U(Le,C(e)),t),forEachRow:(e,t)=>G(U(Ee,C(e)),((e,s)=>t(s,(t=>X(e,t))))),forEachCell:(e,t,s)=>X(U(U(Ee,C(e)),C(t)),s),forEachValue:e=>X(Fe,e),addSortedRowIdsListener:(e,t,s,l,n,a,o)=>{let r=$t(e,t,s,l,n);return Ke((()=>{const o=$t(e,t,s,l,n);var c,i,d;i=r,w(c=o)===w(i)&&(d=(e,t)=>i[t]===e,c.every(d))||(r=o,a(is,e,t,s,l,n,r))}),Ae[o?1:0],[e,t],[Dt])},addStartTransactionListener:e=>Ke(e,Ge),addWillFinishTransactionListener:e=>Ke(e,He[0]),addDidFinishTransactionListener:e=>Ke(e,He[1]),callListener:e=>(Xe(e),is),delListener:e=>(Ue(e),is),getListenerStats:()=>({}),createStore:Se};return B({[u]:[0,xe],[h]:[0,ze],[d]:[1,Oe,[Dt]],[d+T]:[1,je,[Dt]],[f]:[1,ke,[Dt]],Row:[2,Me,[Dt,Wt]],[T]:[2,Ne,[Dt,Wt]],[g]:[3,Pe,[Dt,Wt,qt],e=>ue(Gt(...e))],InvalidCell:[3,Be],[V]:[0,We],[v]:[0,$e],[b]:[1,qe,[Kt],e=>ue(Qt(e[0]))],InvalidValue:[1,De]},(([e,t,s,l],n)=>{is["add"+n+"Listener"]=(...n)=>Ke(n[e],t[n[e+1]?1:0],e>0?p(n,0,e):void 0,s,l)})),A(is)};e.createStore=Se},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseStore={});
