import{_ as g,a as f,q as v}from"./DUV0X9A7.js";import{d as y,q as h,z as C,A as o,B as w,C as A,y as x,D as k,E as e,c as B,g as u,f as q,v as E,l as N,i as P}from"./BgsMZWgV.js";import{u as R}from"./DjKE3DzT.js";const D={key:0},z=y({__name:"[...slug]",async setup(F){let a,n;const t=h(),{locale:r,localeProperties:i,t:L}=C(),p=o(()=>Array.isArray(t.params.slug)?t.params.slug:[t.params.slug]),c=o(()=>E(N(r.value,...p.value))),_=o(()=>`content_${r.value}`),{data:s}=([a,n]=w(async()=>R(c.value,async()=>await v(_.value).path(c.value).first(),"$BPopkF1nvN")),a=await a,n(),a);if(!s.value)throw A({statusCode:404,statusMessage:"Page not found"});return x(),k(),(M,V)=>{var l;const m=g,d=f;return e(s)?(P(),B("div",D,[u(m,{page:e(s),"is-writing":e(t).path.includes("/articles/")},null,8,["page","is-writing"]),u(d,{dir:((l=e(i))==null?void 0:l.dir)??"ltr",value:e(s)},null,8,["dir","value"])])):q("",!0)}}});export{z as default};
