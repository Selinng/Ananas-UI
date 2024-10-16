import{a as m,o as y,j as _,w as n,b as o,h as r,M as a,g as k,c as C,d as l}from"./index-a3e04b1b.js";import{P as g,_ as b}from"./api_table-b894c6fd.js";const w={__name:"basic_demo",setup(c){const p=()=>{a({message:"这是一条消息提示"})},u=()=>{a({message:"这是一条消息提示",type:"primary"})},i=()=>{a({message:"这是一条消息提示",type:"success"})},t=()=>{a({message:"这是一条消息提示",type:"error"})},f=()=>{a({message:"这是一条消息提示",type:"info"})};return(x,e)=>{const s=m("an-button"),d=m("an-space");return y(),_(d,null,{default:n(()=>[o(s,{onClick:p,secondary:""},{default:n(()=>e[0]||(e[0]=[r("Default")])),_:1}),o(s,{type:"primary",onClick:u},{default:n(()=>e[1]||(e[1]=[r("Primary")])),_:1}),o(s,{type:"success",onClick:i},{default:n(()=>e[2]||(e[2]=[r("Success")])),_:1}),o(s,{type:"error",onClick:t},{default:n(()=>e[3]||(e[3]=[r("Error")])),_:1}),o(s,{type:"info",onClick:f},{default:n(()=>e[4]||(e[4]=[r("Info")])),_:1})]),_:1})}}},P={__name:"time_demo",setup(c){const p=()=>{a({message:"这是一条消息提示",duration:1e3})},u=()=>{a({message:"这是一条消息提示",type:"primary",duration:2e3})},i=()=>{a({message:"这是一条消息提示",type:"success",duration:3e3})},t=()=>{a({message:"这是一条消息提示",type:"error",duration:4e3})},f=()=>{a({message:"这是一条消息提示",type:"info",duration:5e3})};return(x,e)=>{const s=m("an-button"),d=m("an-space");return y(),_(d,null,{default:n(()=>[o(s,{onClick:p},{default:n(()=>e[0]||(e[0]=[r("1s")])),_:1}),o(s,{type:"primary",onClick:u},{default:n(()=>e[1]||(e[1]=[r("2s")])),_:1}),o(s,{type:"success",onClick:i},{default:n(()=>e[2]||(e[2]=[r("3s")])),_:1}),o(s,{type:"error",onClick:t},{default:n(()=>e[3]||(e[3]=[r("4s")])),_:1}),o(s,{type:"info",onClick:f},{default:n(()=>e[4]||(e[4]=[r("5s")])),_:1})]),_:1})}}},S={__name:"secondary_demo",setup(c){const p=()=>{a({message:"这是一条消息提示"})},u=()=>{a({message:"这是一条消息提示",type:"primary",secondary:!0})},i=()=>{a({message:"这是一条消息提示",type:"success",secondary:!0})},t=()=>{a({message:"这是一条消息提示",type:"error",secondary:!0})},f=()=>{a({message:"这是一条消息提示",type:"info",secondary:!0})};return(x,e)=>{const s=m("an-button"),d=m("an-space");return y(),_(d,null,{default:n(()=>[o(s,{onClick:p,secondary:""},{default:n(()=>e[0]||(e[0]=[r("Default")])),_:1}),o(s,{type:"primary",onClick:u,secondary:""},{default:n(()=>e[1]||(e[1]=[r("Primary")])),_:1}),o(s,{type:"success",onClick:i,secondary:""},{default:n(()=>e[2]||(e[2]=[r("Success")])),_:1}),o(s,{type:"error",onClick:t,secondary:""},{default:n(()=>e[3]||(e[3]=[r("Error")])),_:1}),o(s,{type:"info",onClick:f,secondary:""},{default:n(()=>e[4]||(e[4]=[r("Info")])),_:1})]),_:1})}}},v={class:"markdown-body"},I={},N="",z=k({__name:"index",setup(c,{expose:p}){p({frontmatter:{},excerpt:void 0});const u={columns:[{title:"名称"},{title:"类型"},{title:"默认值"},{title:"说明"}],item:[{name:"message",type:"String",default:"null",explain:"内容数据"},{name:"type",type:"String",default:"primary | success | error | info",explain:"类型属性"},{name:"duration",type:"String",default:"1500",explain:"持续时间"},{name:"secondary",type:"Boolean",default:"false | true",explain:"次要属性"},{name:"offset",type:"Number",default:"10",explain:"偏移量(单位：px)"},{name:"gap",type:"Number",default:"20",explain:"消息间隔距离(单位：px)"}]};return(i,t)=>(y(),C("div",v,[t[0]||(t[0]=l("h2",null,"Message 消息",-1)),t[1]||(t[1]=l("h5",{style:{color:"#66d476"}},"不是女神发的消息！！！",-1)),t[2]||(t[2]=l("h3",null,"基本用法",-1)),t[3]||(t[3]=l("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"基本的消息",-1)),o(w),o(g,{comp:"message",demo:"basic_demo"}),t[4]||(t[4]=l("h3",null,"果冻消息",-1)),t[5]||(t[5]=l("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"果冻类型的消息",-1)),o(S),o(g,{comp:"message",demo:"secondary_demo"}),t[6]||(t[6]=l("h3",null,"消息时间",-1)),t[7]||(t[7]=l("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"定制消息持续时间",-1)),o(P),o(g,{comp:"message",demo:"time_demo"}),t[8]||(t[8]=l("h3",null,"API 属性",-1)),t[9]||(t[9]=l("p",{style:{color:"var(--color-success)","font-size":"14px","font-weight":"900"}},"你忍住不回消息以为是你赢了，可能别人根本不在乎！",-1)),o(b,{data:u})]))}});export{z as default,N as excerpt,I as frontmatter};
