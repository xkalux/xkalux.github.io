import{d,i as _,a as p,u,b as h,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as y,o as l,k as b,l as k,m as N,p as P,q as w,_ as S}from"./index-b6ad2310.js";import{N as V}from"./NoteDisplay-ecf35920.js";const j={class:"m-4"},C={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},H={class:"opacity-50"},L={class:"text-lg"},T={class:"font-bold flex gap-2"},B={class:"opacity-50"},M=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(q){_(p),u(`
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
`),h({title:`Notes - ${m.title}`});const r=f(()=>y.map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,i)=>(l(),n("div",{id:"page-root",style:x(a(w))},[t("div",j,[t("div",C,[t("h1",D,o(a(m).title),1),t("div",H,o(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",T,[t("div",B,o(e==null?void 0:e.no)+"/"+o(a(b)),1),k(" "+o(e==null?void 0:e.title)+" ",1),M])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(l(),n("hr",z)):P("v-if",!0)]))),128))])],4))}}),G=S(F,[["__file","C:/Users/ekkal/Documents/MyGitHub/my-slidev/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{G as default};
