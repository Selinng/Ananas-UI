import{_ as d,u as v,r as f,a as h,o as a,c as n,b as _,d as e,F as l,e as g,f as u,n as k,t as y,p as N}from"./index-73f9e1a6.js";import{N as b}from"./nav_bar-3839380f.js";const B={class:"container"},C={class:"left-menu"},I=["onClick"],S={class:"right-content"},w={name:"AnHome"},M=Object.assign(w,{setup(x){const i=v(),o=f(localStorage.getItem("currentMenu")||0),m=(c,t)=>{o.value=t,localStorage.setItem("currentMenu",JSON.stringify(t)),i.push({name:c.name})};return(c,t)=>{const p=h("router-view");return a(),n(l,null,[_(b),e("div",B,[e("div",C,[(a(!0),n(l,null,g(u(N)[0].children,(r,s)=>(a(),n("li",{key:s,class:k({active:u(o)==s}),onClick:F=>m(r,s)},[e("span",null,y(r.name),1)],10,I))),128))]),e("div",S,[_(p)])])],64)}}}),j=d(M,[["__scopeId","data-v-e65bcf86"]]);export{j as default};
