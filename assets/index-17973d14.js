import{g as d,a as m,o as u,c as b,d as r,b as t,w as n,h as s,f as p,m as i,j as v}from"./index-002022d6.js";import{P as g,_ as c}from"./api_table-1d017aaf.js";const x={class:"box"},y={class:"center"},w={class:"between"},k={class:"between"},A={class:"between"},B={class:"center"},T=d({__name:"basic_demo",setup(a){return(f,e)=>{const l=m("AnButton");return u(),b("div",x,[r("div",y,[t(p(i),{content:"prompts info",placement:"top-start"},{reference:n(()=>[t(l,null,{default:n(()=>e[0]||(e[0]=[s("top-start")])),_:1})]),_:1}),t(p(i),{content:"prompts info",placement:"top"},{reference:n(()=>[t(l,null,{default:n(()=>e[1]||(e[1]=[s("top")])),_:1})]),_:1}),t(p(i),{content:"prompts info",placement:"top-end"},{reference:n(()=>[t(l,null,{default:n(()=>e[2]||(e[2]=[s("top-end")])),_:1})]),_:1})]),r("div",w,[t(p(i),{content:"prompts info",placement:"left-start"},{reference:n(()=>[t(l,null,{default:n(()=>e[3]||(e[3]=[s("left-start")])),_:1})]),_:1}),t(p(i),{content:"prompts info",placement:"right-start"},{reference:n(()=>[t(l,null,{default:n(()=>e[4]||(e[4]=[s("right-start")])),_:1})]),_:1})]),r("div",k,[t(p(i),{content:"prompts info",placement:"left"},{reference:n(()=>[t(l,null,{default:n(()=>e[5]||(e[5]=[s("left")])),_:1})]),_:1}),t(p(i),{content:"prompts info",placement:"right"},{reference:n(()=>[t(l,null,{default:n(()=>e[6]||(e[6]=[s("right")])),_:1})]),_:1})]),r("div",A,[t(p(i),{content:"prompts info",placement:"left-end"},{reference:n(()=>[t(l,null,{default:n(()=>e[7]||(e[7]=[s("left-end")])),_:1})]),_:1}),t(p(i),{content:"prompts info",placement:"right-end"},{reference:n(()=>[t(l,null,{default:n(()=>e[8]||(e[8]=[s("right-end")])),_:1})]),_:1})]),r("div",B,[t(p(i),{content:"prompts info",placement:"bottom-start"},{reference:n(()=>[t(l,null,{default:n(()=>e[9]||(e[9]=[s("bottom-start")])),_:1})]),_:1}),t(p(i),{content:"prompts info",placement:"bottom"},{reference:n(()=>[t(l,null,{default:n(()=>e[10]||(e[10]=[s("bottom")])),_:1})]),_:1}),t(p(i),{content:"prompts info",placement:"bottom-end"},{reference:n(()=>[t(l,null,{default:n(()=>e[11]||(e[11]=[s("bottom-end")])),_:1})]),_:1})])])}}});const z=d({__name:"trigger_demo",setup(a){return(f,e)=>{const l=m("AnButton"),_=m("AnSpace");return u(),v(_,null,{default:n(()=>[t(p(i),{content:"prompts info"},{reference:n(()=>[t(l,null,{default:n(()=>e[0]||(e[0]=[s("hover")])),_:1})]),_:1}),t(p(i),{content:"prompts info",trigger:"click"},{reference:n(()=>[t(l,null,{default:n(()=>e[1]||(e[1]=[s("click")])),_:1})]),_:1})]),_:1})}}});const $={class:"markdown-body"},P={},S="",V=d({__name:"index",setup(a,{expose:f}){f({frontmatter:{},excerpt:void 0});const e={columns:[{title:"名称"},{title:"类型"},{title:"默认值"},{title:"说明"}],item:[{name:"content",type:"string",default:'""',explain:"文字内容"},{name:"placement",type:"top | right | bottom | left | top-start | top-end | right-start | right-end | bottom-start | bottom-end | left-start | left-end",default:"bottom",explain:"显示位置"},{name:"trigger",type:"click | hover",default:"hover",explain:"显示触发方式"}]},l={columns:[{title:" 名称"},{title:"说明"}],item:[{name:"default",description:"显示的内容"},{name:"reference",description:"触发 Tooltip 显示的 HTML 元素"}]};return(_,o)=>(u(),b("div",$,[o[0]||(o[0]=r("h2",null,"Tooltip 文字提示",-1)),o[1]||(o[1]=r("h5",{style:{color:"#66d476"}},"这世界总有人在忙忙碌碌寻宝藏~",-1)),o[2]||(o[2]=r("h3",null,"基本用法",-1)),o[3]||(o[3]=r("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}}," 9 种不同方向的展示方式",-1)),t(T),t(g,{comp:"tooltip",demo:"basic_demo"}),o[4]||(o[4]=r("h3",null,"触发方式",-1)),o[5]||(o[5]=r("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"click or hover",-1)),t(z),t(g,{comp:"tooltip",demo:"trigger_demo"}),o[6]||(o[6]=r("h3",null,"API 属性",-1)),o[7]||(o[7]=r("p",{style:{color:"var(--color-success)","font-size":"14px","font-weight":"900"}},"猜猜我从哪里出现",-1)),t(c,{data:e}),o[8]||(o[8]=r("br",null,null,-1)),o[9]||(o[9]=r("br",null,null,-1)),o[10]||(o[10]=r("h3",null,"Slot 插槽",-1)),o[11]||(o[11]=r("p",{style:{color:"var(--color-success)","font-size":"14px","font-weight":"900"}},"猜猜我从哪里出现",-1)),t(c,{data:l})]))}});export{V as default,S as excerpt,P as frontmatter};
