import{a as d,o,j as l,g as f,c as i,d as a,b as n}from"./index-5e9fcc8b.js";import{P as m,_ as c}from"./api_table-acb873a8.js";const u={__name:"basic_demo",setup(s){const e=[{text:"以父之名",path:"/ananas"},{text:"夜曲",path:"/ananas"},{text:"夜的第七章",path:"/ananas"}];return(r,p)=>{const t=d("an-breadcrumb");return o(),l(t,{data:e})}}},x={__name:"custom_separator_demo",setup(s){const e=[{text:"以父之名",path:"/ananas"},{text:"夜曲",path:"/ananas"},{text:"夜的第七章",path:"/ananas"}];return(r,p)=>{const t=d("an-breadcrumb");return o(),l(t,{data:e,separator:">"})}}},_={__name:"separator_color_demo",setup(s){const e=[{text:"以父之名",path:"/ananas"},{text:"夜曲",path:"/ananas"},{text:"夜的第七章",path:"/ananas"}];return(r,p)=>{const t=d("an-breadcrumb");return o(),l(t,{data:e,separator:">","separator-color":"#66d476"})}}},b={__name:"text_color_demo",setup(s){const e=[{text:"以父之名",path:"/ananas"},{text:"夜曲",path:"/ananas"},{text:"夜的第七章",path:"/ananas"}];return(r,p)=>{const t=d("an-breadcrumb");return o(),l(t,{data:e,"text-color":"#66d476"})}}},g={__name:"margin_demo",setup(s){const e=[{text:"以父之名",path:"/ananas"},{text:"夜曲",path:"/ananas"},{text:"夜的第七章",path:"/ananas"}];return(r,p)=>{const t=d("an-breadcrumb");return o(),l(t,{data:e,"separator-margin":"1rem"})}}},y={__name:"custom_demo",setup(s){const e=[{text:"以父之名",path:"/ananas"},{text:"夜曲",path:"/ananas"},{text:"夜的第七章",path:"/ananas"}];return(r,p)=>{const t=d("an-breadcrumb");return o(),l(t,{data:e,"text-background-color":"#FFCF3F19","text-color":"#ffcf3f","text-border-radius":"5px","text-border-color":"#ffcf3f"})}}},h={class:"markdown-body"},z={},k="",$=f({__name:"index",setup(s,{expose:e}){e({frontmatter:{},excerpt:void 0});const r={columns:[{title:"名称"},{title:"类型"},{title:"默认值"},{title:"说明"}],item:[{name:"separator",type:"String | Number",default:"/",explain:"分隔符"},{name:"separator-color",type:"String",default:"black",explain:"分隔符颜色"},{name:"separator-size",type:"String",default:"12px",explain:"分隔符尺寸"},{name:"separator-margin",type:"String",default:"0.3rem",explain:"分隔符间距"},{name:"text-color",type:"String",default:"black",explain:"文本颜色"},{name:"text-size",type:"String",default:"black",explain:"文本大小"},{name:"text-border-color",type:"String",default:"white",explain:"文本边框颜色"},{name:"text-border-size",type:"String",default:"1px",explain:"文本边框大小"},{name:"text-border-type",type:"String",default:"solid",explain:"文本边框类型"},{name:"text-border-radius",type:"String",default:"4px",explain:"文本边框角度"},{name:"text-background-color",type:"String",default:"white",explain:"文本背景颜色"},{name:"data",type:"Array",default:"[]",explain:"内容数据"}]};return(p,t)=>(o(),i("div",h,[t[0]||(t[0]=a("h2",null,"Breadcrumb 面包屑",-1)),t[1]||(t[1]=a("h5",{style:{color:"#66d476"}},"在爱情没被定义为爱情的那几年",-1)),t[2]||(t[2]=a("h3",null,"基本用法",-1)),t[3]||(t[3]=a("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"这东西长得和它名字不怎么像",-1)),n(u),n(m,{comp:"breadcrumb",demo:"basic_demo"}),t[4]||(t[4]=a("h3",null,"标签类型",-1)),t[5]||(t[5]=a("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"带框框的面包屑导航",-1)),n(y),n(m,{comp:"breadcrumb",demo:"custom_demo"}),t[6]||(t[6]=a("h3",null,"自定义分隔符",-1)),t[7]||(t[7]=a("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"可以独特！",-1)),n(x),n(m,{comp:"breadcrumb",demo:"custom_separator_demo"}),t[8]||(t[8]=a("h3",null,"间距",-1)),t[9]||(t[9]=a("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"通过margin属性控制距离",-1)),n(g),n(m,{comp:"breadcrumb",demo:"margin_demo"}),t[10]||(t[10]=a("h3",null,"分隔符颜色",-1)),t[11]||(t[11]=a("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"定制个性的颜色！",-1)),n(_),n(m,{comp:"breadcrumb",demo:"separator_color_demo"}),t[12]||(t[12]=a("h3",null,"文字颜色",-1)),t[13]||(t[13]=a("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"定制个性的颜色！",-1)),n(b),n(m,{comp:"breadcrumb",demo:"text_color_demo"}),t[14]||(t[14]=a("h3",null,"API",-1)),t[15]||(t[15]=a("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"有好多尺寸的标签",-1)),n(c,{data:r})]))}});export{$ as default,k as excerpt,z as frontmatter};
