var e,t;e=this,t=function(e){"use strict";const t=e=>null==e,s=(e,s,o)=>t(e)?o?.():s(e),o=Object.freeze;e.createYjsPersister=(e,a)=>{const n=a.getMap("tinybase/store");return((e,a,r,i,d)=>{let u,c,l,f=0,p=!1;const v={load:async(s={},o={})=>{if(2!=f){f=1;const a=await(async()=>n.get("json"))();t(a)||""==a?e.transaction((()=>e.setTables(s).setValues(o))):e.setJson(a),f=0}return v},startAutoLoad:async(e={},t={})=>(v.stopAutoLoad(),await v.load(e,t),p=!0,l=(e=>{const t=()=>e();return n.observe(t),t})(v.load),v),stopAutoLoad:()=>{return p&&(e=l,n.unobserve(e),l=void 0,p=!1),v;var e},save:async()=>(1!=f&&(f=2,await(async e=>{n.set("json",e)})(e.getJson()),f=0),v),startAutoSave:async()=>(await v.stopAutoSave().save(),u=e.addTablesListener(v.save),c=e.addValuesListener(v.save),v),stopAutoSave:()=>(s(u,e.delListener),s(c,e.delListener),v),getStore:()=>e,destroy:()=>v.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return o(v)})(e)}},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBasePersisterYjs={});
