import{d as _,u as d,a as u,c as m,b as p,r as h,o as n,e as l,f as t,t as s,g as a,F as f,h as g,n as v,i as y,j as x,k as b,l as k,m as N,_ as P}from"./index-c9312c45.js";import{N as w}from"./NoteDisplay-d42d532e.js";const V={class:"m-4"},D={class:"mb-10"},H={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},S={class:"text-lg"},T={class:"font-bold flex gap-2"},B={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),M={key:0,class:"border-gray-400/50 mb-8"},j=_({__name:"PresenterPrint",setup(z){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=p(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),l("div",{id:"page-root",style:v(a(y))},[t("div",V,[t("div",D,[t("h1",H,s(a(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(n(!0),l(f,null,g(a(i),(e,c)=>(n(),l("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",S,[t("div",T,[t("div",B,s(e==null?void 0:e.no)+"/"+s(a(x)),1),b(" "+s(e==null?void 0:e.title)+" ",1),C])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(n(),l("hr",M)):N("v-if",!0)]))),128))])],4))}}),E=P(j,[["__file","C:/Users/ekkal/Documents/MyGitHub/my-slidev/dotnet_angular/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
