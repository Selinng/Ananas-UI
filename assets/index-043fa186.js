import{_ as u,a as m,o as s,j as p,w as t,h as r,g as a,c as b,d as e,b as d}from"./index-b4ed3969.js";import{P as i,_ as y}from"./api_table-74c5324f.js";const g={};function w(l,o){const f=m("AnCard");return s(),p(f,null,{header:t(()=>o[0]||(o[0]=[r(" 卡片标题 ")])),body:t(()=>o[1]||(o[1]=[r("卡片内容")])),footer:t(()=>o[2]||(o[2]=[r("卡片底部")])),_:1})}const C=u(g,[["render",w]]),$={};function _(l,o){const f=m("AnCard");return s(),p(f,{"hover-able":""},{header:t(()=>o[0]||(o[0]=[r("卡片标题")])),body:t(()=>o[1]||(o[1]=[r("卡片内容")])),footer:t(()=>o[2]||(o[2]=[r("卡片底部")])),_:1})}const A=u($,[["render",_]]),v={};function z(l,o){const f=m("AnCard");return s(),p(f,{width:"300px",height:"200px"},{header:t(()=>o[0]||(o[0]=[r("卡片标题")])),body:t(()=>o[1]||(o[1]=[r("卡片内容")])),footer:t(()=>o[2]||(o[2]=[r("卡片底部")])),_:1})}const S=u(v,[["render",z]]),k={};function B(l,o){const f=m("an-card");return s(),p(f,null,{body:t(()=>o[0]||(o[0]=[r(" 卡片内容 ")])),_:1})}const D=u(k,[["render",B]]),N={};function P(l,o){const f=m("an-card");return s(),p(f,null,{header:t(()=>o[0]||(o[0]=[r(" 卡片 ")])),body:t(()=>o[1]||(o[1]=[r(" 卡片内容 ")])),footer:t(()=>o[2]||(o[2]=[r(" 卡片底部 ")])),_:1})}const V=u(N,[["render",P]]),H={};function j(l,o){const f=m("AnCard");return s(),p(f,{"border-color":"#66d476","background-color":"white"},{header:t(()=>o[0]||(o[0]=[r("卡片标题")])),body:t(()=>o[1]||(o[1]=[r("卡片内容")])),footer:t(()=>o[2]||(o[2]=[r("卡片底部")])),_:1})}const E=u(H,[["render",j]]),F={};function I(l,o){const f=m("AnCard");return s(),p(f,{"border-radius":"20px"},{header:t(()=>o[0]||(o[0]=[r("卡片标题")])),body:t(()=>o[1]||(o[1]=[r("卡片内容")])),footer:t(()=>o[2]||(o[2]=[r("卡片底部")])),_:1})}const T=u(F,[["render",I]]),q={};function G(l,o){const f=m("AnCard");return s(),p(f,{"box-shadow":"0 1px 6px 0 rgba(0, 0, 0, 0.1)","hover-box-shadow":"0 2px 12px 0 rgba(0, 0, 0, 0.2)"},{header:t(()=>o[0]||(o[0]=[r("卡片标题")])),body:t(()=>o[1]||(o[1]=[r("卡片内容")])),footer:t(()=>o[2]||(o[2]=[r("卡片底部")])),_:1})}const J=u(q,[["render",G]]),K={};function L(l,o){const f=m("AnCard");return s(),p(f,{"header-height":"10vh","footer-height":"3vh"},{header:t(()=>o[0]||(o[0]=[r("卡片标题")])),body:t(()=>o[1]||(o[1]=[r("卡片内容")])),footer:t(()=>o[2]||(o[2]=[r("卡片底部")])),_:1})}const M=u(K,[["render",L]]),O={__name:"click_demo",setup(l){const o=()=>{alert("点击了卡片")};return(f,x)=>{const n=m("AnCard");return s(),p(n,{onClick:o},{header:t(()=>x[0]||(x[0]=[r("卡片标题")])),body:t(()=>x[1]||(x[1]=[r("卡片内容")])),footer:t(()=>x[2]||(x[2]=[r("卡片底部")])),_:1})}}},Q={class:"markdown-body"},W={},X="",Y=a({__name:"index",setup(l,{expose:o}){o({frontmatter:{},excerpt:void 0});const f={columns:[{title:"名称"},{title:"类型"},{title:"默认值"},{title:"说明"}],item:[{name:"width",type:"String",default:"100%",explain:"宽度属性"},{name:"height",type:"String",default:"auto",explain:"高度属性"},{name:"hover-able",type:"Boolean",default:"false | true",explain:"悬浮卡片"},{name:"border-color",type:"String",default:"#d9d9d9",explain:"边框颜色"},{name:"background-color",type:"String",default:"white",explain:"背景颜色"},{name:"border-radius",type:"String | Number",default:"4px",explain:"圆角"},{name:"box-shadow",type:"String",default:"null",explain:"阴影"},{name:"hover-box-shadow",type:"String",default:"0 2px 12px 0 rgba(0, 0, 0, 0.1)",explain:"动作阴影"},{name:"header-height",type:"String | Number",default:"6vh",explain:"头部高度"},{name:"footer-height",type:"String | Number",default:"6vh",explain:"尾部高度"}]};return(x,n)=>(s(),b("div",Q,[n[0]||(n[0]=e("h2",null,"Card 卡片",-1)),n[1]||(n[1]=e("h5",{style:{color:"#66d476"}},"等到秋叶终于金黄，等到华发悄然苍苍",-1)),n[2]||(n[2]=e("h3",null,"基本用法",-1)),n[3]||(n[3]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"卡片的基本用法",-1)),d(C),d(i,{comp:"card",demo:"basic_demo"}),n[4]||(n[4]=e("h3",null,"悬浮卡片",-1)),n[5]||(n[5]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"好像可以飞起来？",-1)),d(A),d(i,{comp:"card",demo:"hoverable_demo"}),n[6]||(n[6]=e("h3",null,"卡片尺寸",-1)),n[7]||(n[7]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"自定义卡片尺寸",-1)),d(S),d(i,{comp:"card",demo:"size_demo"}),n[8]||(n[8]=e("h3",null,"没有标题",-1)),n[9]||(n[9]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"没有标题的卡片",-1)),d(D),d(i,{comp:"card",demo:"body_demo"}),n[10]||(n[10]=e("h3",null,"卡片底部",-1)),n[11]||(n[11]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"卡片也可以有腿",-1)),d(V),d(i,{comp:"card",demo:"footer_demo"}),n[12]||(n[12]=e("h3",null,"自定义高度",-1)),n[13]||(n[13]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"改变自己！",-1)),d(M),d(i,{comp:"card",demo:"height_demo"}),n[14]||(n[14]=e("h3",null,"点击事件",-1)),n[15]||(n[15]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"改变自己！",-1)),d(O),d(i,{comp:"card",demo:"click_demo"}),n[16]||(n[16]=e("h3",null,"自定义边框",-1)),n[17]||(n[17]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"改变自己！",-1)),d(T),d(i,{comp:"card",demo:"border_demo"}),n[18]||(n[18]=e("h3",null,"自定义阴影",-1)),n[19]||(n[19]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"改变自己！",-1)),d(J),d(i,{comp:"card",demo:"box_show_demo"}),n[20]||(n[20]=e("h3",null,"自定义颜色",-1)),n[21]||(n[21]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"改变世界！",-1)),d(E),d(i,{comp:"card",demo:"color_demo"}),n[22]||(n[22]=e("h3",null,"API 属性",-1)),n[23]||(n[23]=e("p",{style:{color:"var(--color-success)","font-size":"14px","font-weight":"900"}},"卡片的一些可控属性",-1)),d(y,{data:f})]))}});export{Y as default,X as excerpt,W as frontmatter};
