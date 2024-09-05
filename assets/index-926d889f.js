import{_ as m,a,o as f,j as p,w as s,h as d,g as u,c as x,d as n,b as e}from"./index-22b45733.js";import{P as i,_}from"./api_table-3b37f906.js";import{B as y}from"./bottom_tabs-da73f601.js";const b={};function c(l,t){const r=a("an-card");return f(),p(r,null,{header:s(()=>t[0]||(t[0]=[d(" 卡片 ")])),body:s(()=>t[1]||(t[1]=[d(" 卡片内容 ")])),_:1})}const w=m(b,[["render",c]]),g={};function $(l,t){const r=a("an-card");return f(),p(r,{hoverable:""},{header:s(()=>t[0]||(t[0]=[d(" 卡片 ")])),body:s(()=>t[1]||(t[1]=[d(" 卡片内容 ")])),_:1})}const B=m(g,[["render",$]]),v={};function z(l,t){const r=a("an-card");return f(),p(r,{width:"50%"},{header:s(()=>t[0]||(t[0]=[d(" 卡片 ")])),body:s(()=>t[1]||(t[1]=[d(" 卡片内容 ")])),_:1})}const D=m(v,[["render",z]]),k={};function C(l,t){const r=a("an-card");return f(),p(r,null,{body:s(()=>t[0]||(t[0]=[d(" 卡片内容 ")])),_:1})}const N=m(k,[["render",C]]),P={};function S(l,t){const r=a("an-card");return f(),p(r,null,{header:s(()=>t[0]||(t[0]=[d(" 卡片 ")])),body:s(()=>t[1]||(t[1]=[d(" 卡片内容 ")])),footer:s(()=>t[2]||(t[2]=[d(" 卡片底部 ")])),_:1})}const T=m(P,[["render",S]]),V={class:"markdown-body"},H={},I="",q=u({__name:"index",setup(l,{expose:t}){t({frontmatter:{},excerpt:void 0});const r={columns:[{title:"名称"},{title:"类型"},{title:"默认值"},{title:"说明"}],item:[{name:"width",type:"String",default:"100%",explain:"宽度属性"},{name:"height",type:"String",default:"auto",explain:"高度属性"},{name:"hoverable",type:"Boolean",default:"false | true",explain:"悬浮卡片"}]};return(j,o)=>(f(),x("div",V,[o[0]||(o[0]=n("h2",null,"Card 卡片",-1)),o[1]||(o[1]=n("h5",{style:{color:"#66d476"}},"等到秋叶终于金黄，等到华发悄然苍苍。",-1)),o[2]||(o[2]=n("h3",null,"基本用法",-1)),o[3]||(o[3]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"卡片的基本用法",-1)),e(w),e(i,{comp:"card",demo:"basic_demo"}),o[4]||(o[4]=n("h3",null,"悬浮卡片",-1)),o[5]||(o[5]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"好像可以飞起来？",-1)),e(B),e(i,{comp:"card",demo:"hoverable_demo"}),o[6]||(o[6]=n("h3",null,"卡片尺寸",-1)),o[7]||(o[7]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"自定义卡片尺寸",-1)),e(D),e(i,{comp:"card",demo:"size_demo"}),o[8]||(o[8]=n("h3",null,"没有标题",-1)),o[9]||(o[9]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"没有标题的卡片",-1)),e(N),e(i,{comp:"card",demo:"body_demo"}),o[10]||(o[10]=n("h3",null,"卡片底部",-1)),o[11]||(o[11]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"卡片也可以有腿",-1)),e(T),e(i,{comp:"card",demo:"footer_demo"}),o[12]||(o[12]=n("h3",null,"API",-1)),o[13]||(o[13]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"有好多尺寸的标签",-1)),e(_,{data:r}),e(y,{up:"Table",down:"下面没有了..."})]))}});export{q as default,I as excerpt,H as frontmatter};
