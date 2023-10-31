var e,t;e=this,t=function(e){"use strict";const t=e=>typeof e,s="",l=t(s),n=t(!0),a=t(0),o=t(t),r="type",c="default",i="Ids",d="Table",u=d+"s",h=d+i,f="Row",g=f+"Count",T=f+i,b="Cell",V=b+i,C="Value",S=C+"s",v=C+i,y="Has",p=e=>s+e,m=isFinite,w=e=>null==e,I=(e,t,s)=>w(e)?s?.():t(e),R=e=>e==l||e==n,J=e=>t(e)==o,L=(e,t,s)=>e.slice(t,s),E=e=>e.length,F=(e,t)=>e.forEach(t),O=(e,t)=>e.map(t),x=(e,...t)=>e.push(...t),z=Object,P=e=>z.getPrototypeOf(e),j=z.keys,k=z.isFrozen,A=z.freeze,M=e=>!w(e)&&I(P(e),(e=>e==z.prototype||w(P(e))),(()=>!0)),N=(e,t)=>!w(((e,t)=>I(e,(e=>e[t])))(e,t)),B=(e,t)=>(delete e[t],e),D=(e,t)=>O(z.entries(e),(([e,s])=>t(s,e))),H=e=>M(e)&&0==(e=>E(j(e)))(e),W=e=>e?.size??0,$=(e,t)=>e?.has(t)??!1,q=e=>w(e)||0==W(e),G=e=>e.clear(),K=(e,t)=>e?.forEach(t),Q=(e,t)=>e?.delete(t),U=e=>new Map(e),X=e=>[...e?.keys()??[]],Y=(e,t)=>e?.get(t),Z=(e,t)=>K(e,((e,s)=>t(s,e))),_=(e,t,s)=>w(s)?(Q(e,t),e):e?.set(t,s),ee=(e,t,s)=>($(e,t)||_(e,t,s()),Y(e,t)),te=(e,t,s,l=_)=>(D(t,((t,l)=>s(e,l,t))),Z(e,(s=>N(t,s)?0:l(e,s))),e),se=(e,t,s)=>{const l={};return K(e,((e,n)=>{const a=t?t(e,n):e;!s?.(a,e)&&(l[n]=a)})),l},le=(e,t,s)=>se(e,(e=>se(e,t,s)),H),ne=(e,t,s)=>se(e,(e=>le(e,t,s)),H),ae=(e,t)=>{const s=U();return K(e,((e,l)=>s.set(l,t?.(e)??e))),s},oe=e=>ae(e,ae),re=e=>ae(e,oe),ce=(e,t,s,l,n=0)=>I((s?ee:Y)(e,t[n],n>E(t)-2?s:U),(a=>{if(n>E(t)-2)return l?.(a)&&_(e,t[n]),a;const o=ce(a,t,s,l,n+1);return q(a)&&_(e,t[n]),o})),ie=e=>new Set(Array.isArray(e)||w(e)?e:[e]),de=(e,t)=>e?.add(t),ue=/^\d+$/,he=()=>{const e=[];let t=0;return[l=>(l?e.shift():null)??s+t++,t=>{ue.test(t)&&E(e)<1e3&&x(e,t)}]},fe=e=>[e,e],ge=()=>[U(),U()],Te=e=>[...e],be=([e,t])=>e===t,Ve=e=>{const s=t(e);return R(s)||s==a&&m(e)?s:void 0},Ce=(e,t,s,l,n)=>w(n)?e.delCell(t,s,l,!0):e.setCell(t,s,l,n),Se=(e,t,s)=>w(s)?e.delValue(t):e.setValue(t,s),ve=e=>JSON.stringify(e,((e,t)=>t instanceof Map?z.fromEntries([...t]):t)),ye=JSON.parse,pe=(e,t,s)=>w(e)||!M(e)||H(e)||k(e)?(s?.(),!1):(D(e,((s,l)=>{t(s,l)||B(e,l)})),!H(e)),me=(e,t,s)=>_(e,t,Y(e,t)==-s?void 0:s),we=()=>{let e,t,l=!1,n=!1,o=!1,i=!1,m=0;const z=U(),P=U(),j=U(),k=U(),M=U(),ue=U(),Ie=U(),Re=U(),Je=U(),Le=U(),Ee=U(),Fe=U(),Oe=U(),xe=U(),ze=ie(),Pe=U(),je=U(),ke=U(),Ae=U(),Me=ge(),Ne=ge(),Be=ge(),De=ge(),He=ge(),We=ge(),$e=ge(),qe=ge(),Ge=ge(),Ke=ge(),Qe=ge(),Ue=ge(),Xe=ge(),Ye=ge(),Ze=ge(),_e=ge(),et=ge(),tt=ge(),st=ge(),lt=ge(),nt=ge(),at=ge(),ot=U(),rt=ge(),[ct,it,dt,ut]=(e=>{let t;const[l,n]=he(),a=U();return[(e,n,o,r=[],c=(()=>[]))=>{t??=zs;const i=l(1);return _(a,i,[e,n,o,r,c]),de(ce(n,o??[s],ie),i),i},(e,l,...n)=>F(((e,t=[s])=>{const l=[],n=(e,s)=>s==E(t)?x(l,e):null===t[s]?K(e,(e=>n(e,s+1))):F([t[s],null],(t=>n(Y(e,t),s+1)));return n(e,0),l})(e,l),(e=>K(e,(e=>Y(a,e)[0](t,...l??[],...n))))),e=>I(Y(a,e),(([,t,l])=>(ce(t,l??[s],void 0,(t=>(Q(t,e),q(t)?1:0))),_(a,e),n(e),l))),e=>I(Y(a,e),(([e,,s=[],l,n])=>{const a=(...o)=>{const r=E(o);r==E(s)?e(t,...o,...n(o)):w(s[r])?F(l[r]?.(...o)??[],(e=>a(...o,e))):a(...o,s[r])};a()}))]})(),ht=e=>{if(!pe(e,((e,t)=>[r,c].includes(t))))return!1;const t=e[r];return!(!R(t)&&t!=a||(Ve(e[c])!=t&&B(e,c),0))},ft=(t,s)=>(!e||$(Ee,s)||Wt(s))&&pe(t,((e,t)=>gt(s,t,e)),(()=>Wt(s))),gt=(e,t,s,l)=>pe(l?s:Ct(s,e,t),((l,n)=>I(Tt(e,t,n,l),(e=>(s[n]=e,!0)),(()=>!1))),(()=>Wt(e,t))),Tt=(t,s,l,n)=>e?I(Y(Y(Ee,t),l),(e=>Ve(n)!=e[r]?Wt(t,s,l,n,e[c]):n),(()=>Wt(t,s,l,n))):w(Ve(n))?Wt(t,s,l,n):n,bt=(e,t)=>pe(t?e:St(e),((t,s)=>I(Vt(s,t),(t=>(e[s]=t,!0)),(()=>!1))),(()=>$t())),Vt=(e,s)=>t?I(Y(Oe,e),(t=>Ve(s)!=t[r]?$t(e,s,t[c]):s),(()=>$t(e,s))):w(Ve(s))?$t(e,s):s,Ct=(e,t,s)=>(I(Y(Fe,t),(([l,n])=>{K(l,((t,s)=>{N(e,s)||(e[s]=t)})),K(n,(l=>{N(e,l)||Wt(t,s,l)}))})),e),St=e=>(t&&(K(xe,((t,s)=>{N(e,s)||(e[s]=t)})),K(ze,(t=>{N(e,t)||$t(t)}))),e),vt=e=>te(Ee,e,((e,t,s)=>{const l=U(),n=ie();te(ee(Ee,t,U),s,((e,t,s)=>{_(e,t,s),I(s[c],(e=>_(l,t,e)),(()=>de(n,t)))})),_(Fe,t,[l,n])}),((e,t)=>{_(Ee,t),_(Fe,t)})),yt=e=>te(Oe,e,((e,t,s)=>{_(Oe,t,s),I(s[c],(e=>_(xe,t,e)),(()=>de(ze,t)))}),((e,t)=>{_(Oe,t),_(xe,t),Q(ze,t)})),pt=e=>H(e)?ws():Ss(e),mt=e=>te(ke,e,((e,t,s)=>wt(t,s)),((e,t)=>zt(t))),wt=(e,t)=>te(ee(ke,e,(()=>(At(e,1),_(Pe,e,he()),_(je,e,U()),U()))),t,((t,s,l)=>It(e,t,s,l)),((t,s)=>Pt(e,t,s))),It=(e,t,s,l,n)=>te(ee(t,s,(()=>(Mt(e,s,1),U()))),l,((t,l,n)=>Rt(e,s,t,l,n)),((l,a)=>jt(e,t,s,l,a,n))),Rt=(e,t,s,l,n)=>{$(s,l)||Nt(e,t,l,1);const a=Y(s,l);n!==a&&(Bt(e,t,l,a,n),_(s,l,n))},Jt=(e,t,s,l,n)=>I(Y(t,s),(t=>Rt(e,s,t,l,n)),(()=>It(e,t,s,Ct({[l]:n},e,s)))),Lt=e=>H(e)?Js():vs(e),Et=e=>te(Ae,e,((e,t,s)=>Ft(t,s)),((e,t)=>kt(t))),Ft=(e,t)=>{$(Ae,e)||Dt(e,1);const s=Y(Ae,e);t!==s&&(Ht(e,s,t),_(Ae,e,t))},Ot=(e,t)=>{const[s]=Y(Pe,e),l=s(t);return $(Y(ke,e),l)?Ot(e,t):l},xt=e=>Y(ke,e)??wt(e,{}),zt=e=>wt(e,{}),Pt=(e,t,s)=>{const[,l]=Y(Pe,e);l(s),It(e,t,s,{},!0)},jt=(e,t,s,l,n,a)=>{const o=Y(Y(Fe,e)?.[0],n);if(!w(o)&&!a)return Rt(e,s,l,n,o);const r=t=>{Bt(e,s,t,Y(l,t)),Nt(e,s,t,-1),_(l,t)};w(o)?r(n):Z(l,r),q(l)&&(Mt(e,s,-1),q(_(t,s))&&(At(e,-1),_(ke,e),_(Pe,e),_(je,e)))},kt=e=>{const t=Y(xe,e);if(!w(t))return Ft(e,t);Ht(e,Y(Ae,e)),Dt(e,-1),_(Ae,e)},At=(e,t)=>me(z,e,t),Mt=(e,t,s)=>me(ee(k,e,U),t,s)&&_(j,e,ee(j,e,(()=>0))+s),Nt=(e,t,s,l)=>{const n=Y(je,e),a=Y(n,s)??0;(0==a&&1==l||1==a&&-1==l)&&me(ee(P,e,U),s,l),_(n,s,a!=-l?a+l:null),me(ee(ee(M,e,U),t,U),s,l)},Bt=(e,t,s,l,n)=>ee(ee(ee(ue,e,U),t,U),s,(()=>[l,0]))[1]=n,Dt=(e,t)=>me(Ie,e,t),Ht=(e,t,s)=>ee(Re,e,(()=>[t,0]))[1]=s,Wt=(e,t,s,l,n)=>(x(ee(ee(ee(Je,e,U),t,U),s,(()=>[])),l),n),$t=(e,t,s)=>(x(ee(Le,e,(()=>[])),t),s),qt=(e,t,s)=>I(Y(Y(Y(ue,e),t),s),(([e,t])=>[!0,e,t]),(()=>[!1,...fe(cs(e,t,s))])),Gt=e=>I(Y(Re,e),(([e,t])=>[!0,e,t]),(()=>[!1,...fe(us(e))])),Kt=e=>q(Je)||q(_e[e])?0:K(e?re(Je):Je,((t,s)=>K(t,((t,l)=>K(t,((t,n)=>it(_e[e],[s,l,n],t))))))),Qt=e=>q(Le)||q(et[e])?0:K(e?ae(Le):Le,((t,s)=>it(et[e],[s],t))),Ut=(e,t,s,l)=>{if(!q(e))return it(t,l,(()=>se(e))),Z(e,((e,t)=>it(s,[...l??[],e],1==t))),1},Xt=e=>{const t=hs();t!=o&&it(Me[e],void 0,t);const s=q(Ke[e]),l=q(Xe[e])&&q(Ye[e])&&q(Ge[e])&&q(Qe[e])&&q(We[e])&&q($e[e])&&q(qe[e])&&s&&q(Be[e])&&q(De[e]),n=q(Ze[e])&&q(Ue[e])&&q(He[e])&&q(Ne[e]);if(!l||!n){const t=e?[ae(z),oe(P),ae(j),oe(k),re(M),re(ue)]:[z,P,j,k,M,ue];if(!l){Ut(t[0],Be[e],De[e]),K(t[1],((t,s)=>Ut(t,We[e],$e[e],[s]))),K(t[2],((t,s)=>{0!=t&&it(qe[e],[s],ns(s))}));const l=ie();K(t[3],((t,n)=>{Ut(t,Ge[e],Qe[e],[n])&&!s&&(it(Ke[e],[n,null]),de(l,n))})),s||K(t[5],((t,s)=>{if(!$(l,s)){const l=ie();K(t,(e=>K(e,(([t,s],n)=>s!==t?de(l,n):Q(e,n))))),K(l,(t=>it(Ke[e],[s,t])))}})),K(t[4],((t,s)=>K(t,((t,l)=>Ut(t,Xe[e],Ye[e],[s,l])))))}if(!n){let s;K(t[5],((t,l)=>{let n;K(t,((t,a)=>{let o;K(t,(([t,r],c)=>{r!==t&&(it(Ze[e],[l,a,c],r,t,qt),s=n=o=1)})),o&&it(Ue[e],[l,a],qt)})),n&&it(He[e],[l],qt)})),s&&it(Ne[e],void 0,qt)}}},Yt=e=>{const t=Vs();t!=i&&it(tt[e],void 0,t);const s=q(lt[e])&&q(nt[e]),l=q(at[e])&&q(st[e]);if(!s||!l){const t=e?[ae(Ie),ae(Re)]:[Ie,Re];if(s||Ut(t[0],lt[e],nt[e]),!l){let s;K(t[1],(([t,l],n)=>{l!==t&&(it(at[e],[n],l,t,Gt),s=1)})),s&&it(st[e],void 0,Gt)}}},Zt=(e,...t)=>(Fs((()=>e(...O(t,p)))),zs),_t=()=>[se(ue,((e,t)=>-1===Y(z,t)?null:se(e,((e,s)=>-1===Y(Y(k,t),s)?null:se(e,(([,e])=>e??null),((e,t)=>be(t)))),H)),H),se(Re,(([,e])=>e??null),((e,t)=>be(t)))],es=()=>({cellsTouched:l,valuesTouched:n,changedCells:ne(ue,Te,be),invalidCells:ne(Je),changedValues:se(Re,Te,be),invalidValues:se(Le),changedTableIds:se(z),changedRowIds:le(k),changedCellIds:ne(M),changedValueIds:se(Ie)}),ts=()=>ne(ke),ss=()=>X(ke),ls=e=>X(Y(je,p(e))),ns=e=>W(Y(ke,p(e))),as=e=>X(Y(ke,p(e))),os=(e,t,s,l=0,n)=>{return O(L((o=Y(ke,p(e)),r=(e,s)=>[w(t)?s:Y(e,p(t)),s],a=([e],[t])=>((e??0)<(t??0)?-1:1)*(s?-1:1),O([...o?.entries()??[]],(([e,t])=>r(t,e))).sort(a)),l,w(n)?n:l+n),(([,e])=>e));var a,o,r},rs=(e,t)=>X(Y(Y(ke,p(e)),p(t))),cs=(e,t,s)=>Y(Y(Y(ke,p(e)),p(t)),p(s)),is=()=>se(Ae),ds=()=>X(Ae),us=e=>Y(Ae,p(e)),hs=()=>!q(ke),fs=e=>$(ke,p(e)),gs=(e,t)=>$(Y(je,p(e)),p(t)),Ts=(e,t)=>$(Y(ke,p(e)),p(t)),bs=(e,t,s)=>$(Y(Y(ke,p(e)),p(t)),p(s)),Vs=()=>!q(Ae),Cs=e=>$(Ae,p(e)),Ss=e=>Zt((()=>(e=>pe(e,ft,Wt))(e)?mt(e):0)),vs=e=>Zt((()=>bt(e)?Et(e):0)),ys=e=>{try{pt(ye(e))}catch{}return zs},ps=t=>Zt((()=>{if((e=pe(t,(e=>pe(e,ht))))&&(vt(t),!q(ke))){const e=ts();ws(),Ss(e)}})),ms=e=>Zt((()=>{if(t=(e=>pe(e,ht))(e)){const s=is();Es(),Js(),t=!0,yt(e),vs(s)}})),ws=()=>Zt((()=>mt({}))),Is=e=>Zt((e=>$(ke,e)?zt(e):0),e),Rs=(e,t)=>Zt(((e,t)=>I(Y(ke,e),(s=>$(s,t)?Pt(e,s,t):0))),e,t),Js=()=>Zt((()=>Et({}))),Ls=()=>Zt((()=>{vt({}),e=!1})),Es=()=>Zt((()=>{yt({}),t=!1})),Fs=(e,t)=>{if(-1!=m){Os();const s=e();return xs(t),s}},Os=()=>(-1!=m&&m++,1==m&&it(ot,void 0,_t,es),zs),xs=e=>(m>0&&(m--,0==m&&(l=!q(ue),n=!q(Re),m=1,Kt(1),l&&Xt(1),Qt(1),n&&Yt(1),e?.(_t,es)&&(K(ue,((e,t)=>K(e,((e,s)=>K(e,(([e],l)=>Ce(zs,t,s,l,e))))))),K(Re,(([e],t)=>Se(zs,t,e))),l=n=!1),it(rt[0],void 0,_t,es),m=-1,Kt(0),l&&Xt(0),Qt(0),n&&Yt(0),it(rt[1],void 0,_t,es),m=0,l=n=!1,o=hs(),i=Vs(),F([z,P,j,k,M,ue,Je,Ie,Re,Le],G))),zs),zs={getContent:()=>[ts(),is()],getTables:ts,getTableIds:ss,getTable:e=>le(Y(ke,p(e))),getTableCellIds:ls,getRowCount:ns,getRowIds:as,getSortedRowIds:os,getRow:(e,t)=>se(Y(Y(ke,p(e)),p(t))),getCellIds:rs,getCell:cs,getValues:is,getValueIds:ds,getValue:us,hasTables:hs,hasTable:fs,hasTableCell:gs,hasRow:Ts,hasCell:bs,hasValues:Vs,hasValue:Cs,getTablesJson:()=>ve(ke),getValuesJson:()=>ve(Ae),getJson:()=>ve([ke,Ae]),getTablesSchemaJson:()=>ve(Ee),getValuesSchemaJson:()=>ve(Oe),getSchemaJson:()=>ve([Ee,Oe]),hasTablesSchema:()=>e,hasValuesSchema:()=>t,setContent:([e,t])=>Zt((()=>{(H(e)?ws:Ss)(e),(H(t)?Js:vs)(t)})),setTables:Ss,setTable:(e,t)=>Zt((e=>ft(t,e)?wt(e,t):0),e),setRow:(e,t,s)=>Zt(((e,t)=>gt(e,t,s)?It(e,xt(e),t,s):0),e,t),addRow:(e,t,s=!0)=>Fs((()=>{let l;return gt(e,l,t)&&(e=p(e),It(e,xt(e),l=Ot(e,s?1:0),t)),l})),setPartialRow:(e,t,s)=>Zt(((e,t)=>{if(gt(e,t,s,1)){const l=xt(e);D(s,((s,n)=>Jt(e,l,t,n,s)))}}),e,t),setCell:(e,t,s,l)=>Zt(((e,t,s)=>I(Tt(e,t,s,J(l)?l(cs(e,t,s)):l),(l=>Jt(e,xt(e),t,s,l)))),e,t,s),setValues:vs,setPartialValues:e=>Zt((()=>bt(e,1)?D(e,((e,t)=>Ft(t,e))):0)),setValue:(e,t)=>Zt((e=>I(Vt(e,J(t)?t(us(e)):t),(t=>Ft(e,t)))),e),setTransactionChanges:e=>Zt((()=>{D(e[0],((e,t)=>w(e)?Is(t):D(e,((e,s)=>w(e)?Rs(t,s):D(e,((e,l)=>Ce(zs,t,s,l,e))))))),D(e[1],((e,t)=>Se(zs,t,e)))})),setTablesJson:ys,setValuesJson:e=>{try{Lt(ye(e))}catch{}return zs},setJson:e=>Zt((()=>{try{const[t,s]=ye(e);pt(t),Lt(s)}catch{ys(e)}})),setTablesSchema:ps,setValuesSchema:ms,setSchema:(e,t)=>Zt((()=>{ps(e),ms(t)})),delTables:ws,delTable:Is,delRow:Rs,delCell:(e,t,s,l)=>Zt(((e,t,s)=>I(Y(ke,e),(n=>I(Y(n,t),(a=>$(a,s)?jt(e,n,t,a,s,l):0))))),e,t,s),delValues:Js,delValue:e=>Zt((e=>$(Ae,e)?kt(e):0),e),delTablesSchema:Ls,delValuesSchema:Es,delSchema:()=>Zt((()=>{Ls(),Es()})),transaction:Fs,startTransaction:Os,finishTransaction:xs,forEachTable:e=>K(ke,((t,s)=>e(s,(e=>K(t,((t,s)=>e(s,(e=>Z(t,e))))))))),forEachTableCell:(e,t)=>Z(Y(je,p(e)),t),forEachRow:(e,t)=>K(Y(ke,p(e)),((e,s)=>t(s,(t=>Z(e,t))))),forEachCell:(e,t,s)=>Z(Y(Y(ke,p(e)),p(t)),s),forEachValue:e=>Z(Ae,e),addSortedRowIdsListener:(e,t,s,l,n,a,o)=>{let r=os(e,t,s,l,n);return ct((()=>{const o=os(e,t,s,l,n);var c,i,d;i=r,E(c=o)===E(i)&&(d=(e,t)=>i[t]===e,c.every(d))||(r=o,a(zs,e,t,s,l,n,r))}),Ke[o?1:0],[e,t],[ss])},addStartTransactionListener:e=>ct(e,ot),addWillFinishTransactionListener:e=>ct(e,rt[0]),addDidFinishTransactionListener:e=>ct(e,rt[1]),callListener:e=>(ut(e),zs),delListener:e=>(dt(e),zs),getListenerStats:()=>({}),createStore:we,addListener:ct,callListeners:it};return D({[y+u]:[0,Me,[],()=>[hs()]],[u]:[0,Ne],[h]:[0,Be],[y+d]:[1,De,[ss],e=>[fs(...e)]],[d]:[1,He,[ss]],[d+V]:[1,We,[ss]],[y+d+b]:[2,$e,[ss,ls],e=>[gs(...e)]],[g]:[1,qe,[ss]],[T]:[1,Ge,[ss]],[y+f]:[2,Qe,[ss,as],e=>[Ts(...e)]],[f]:[2,Ue,[ss,as]],[V]:[2,Xe,[ss,as]],[y+b]:[3,Ye,[ss,as,rs],e=>[bs(...e)]],[b]:[3,Ze,[ss,as,rs],e=>fe(cs(...e))],InvalidCell:[3,_e],[y+S]:[0,tt,[],()=>[Vs()]],[S]:[0,st],[v]:[0,lt],[y+C]:[1,nt,[ds],e=>[Cs(...e)]],[C]:[1,at,[ds],e=>fe(us(e[0]))],InvalidValue:[1,et]},(([e,t,s,l],n)=>{zs["add"+n+"Listener"]=(...n)=>ct(n[e],t[n[e+1]?1:0],e>0?L(n,0,e):void 0,s,l)})),A(zs)};e.createStore=we},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseStore={});
