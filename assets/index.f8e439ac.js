import{_ as k,z as d,N as L,aL as B,a as y,W as S}from"./index.c372bada.js";import{B as D,c5 as v,j as f,a1 as o,D as n,F as w,w as P,a2 as u,ad as m,L as C,ab as E,u as r}from"./vendor.967e16c7.js";import{c as T,u as F}from"./index.8c04dcf5.js";import I from"./SessionTimeoutLogin.edeeaca5.js";import"./index.2cd3f502.js";import"./useWindowSizeFn.9d0c782c.js";import"./useContentViewHeight.9293ca24.js";/* empty css               *//* empty css               */import"./lock.8584c8e1.js";import"./Login.80c83a51.js";import"./LoginForm.45736f76.js";/* empty css              *//* empty css               */import"./LoginFormTitle.58da2f88.js";const x=D({name:"LayoutFeatures",components:{BackTop:v,LayoutLockPage:T(()=>d(()=>import("./index.f04b4d2c.js"),["assets/index.f04b4d2c.js","assets/vendor.967e16c7.js","assets/vendor.3cca954f.css","assets/LockPage.22b38f49.js","assets/LockPage.74e81a43.css","assets/index.c372bada.js","assets/index.007abcad.css","assets/lock.8584c8e1.js","assets/header.d801b988.js"])),SettingDrawer:T(()=>d(()=>import("./index.981b640b.js").then(function(e){return e.i}),["assets/index.981b640b.js","assets/index.17eb4c41.css","assets/index.09c3c338.js","assets/index.5c7227e9.css","assets/index.00780982.css","assets/index.c372bada.js","assets/index.007abcad.css","assets/vendor.967e16c7.js","assets/vendor.3cca954f.css","assets/index.8c04dcf5.js","assets/index.f8c87140.css","assets/index.5aa8aa0e.css","assets/index.2cd3f502.js","assets/index.bdbca534.css","assets/useWindowSizeFn.9d0c782c.js","assets/useContentViewHeight.9293ca24.js","assets/lock.8584c8e1.js"])),SessionTimeoutLogin:I},setup(){const{getUseOpenBackTop:e,getShowSettingButton:p,getSettingButtonPosition:c,getFullContent:g}=L(),_=B(),{prefixCls:l}=y("setting-drawer-feature"),{getShowHeader:s}=F(),a=f(()=>_.getSessionTimeout),i=f(()=>{if(!r(p))return!1;const t=r(c);return t===S.AUTO?!r(s)||r(g):t===S.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:i,prefixCls:l,getIsSessionTimeout:a}}});function O(e,p,c,g,_,l){const s=o("LayoutLockPage"),a=o("BackTop"),i=o("SettingDrawer"),t=o("SessionTimeoutLogin");return n(),w(E,null,[P(s),e.getUseOpenBackTop?(n(),u(a,{key:0,target:e.getTarget},null,8,["target"])):m("",!0),e.getIsFixedSettingDrawer?(n(),u(i,{key:1,class:C(e.prefixCls)},null,8,["class"])):m("",!0),e.getIsSessionTimeout?(n(),u(t,{key:2})):m("",!0)],64)}var J=k(x,[["render",O]]);export{J as default};
