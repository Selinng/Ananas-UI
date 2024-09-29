import{r as c,a as b,o as u,c as i,b as n,d as o,t as d,F as f,g as v}from"./index-0148ad72.js";import{P as m,_}from"./api_table-ff3e0d14.js";const x={__name:"basic_demo",setup(r){const l=c(),t=[{label:"唱",value:"sing"},{label:"跳",value:"dance"},{label:"Rap",value:"rap"},{label:"篮球",value:"basketball"},{label:"Music",value:"music"}];return(p,e)=>{const a=b("an-checkbox");return u(),i(f,null,[n(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),options:t},null,8,["modelValue"]),o("p",null,"🐔："+d(l.value),1)],64)}}},k={__name:"inline_demo",setup(r){const l=c(),t=[{label:"唱",value:"sing"},{label:"跳",value:"dance"},{label:"Rap",value:"rap"},{label:"篮球",value:"basketball"},{label:"Music",value:"music"}];return(p,e)=>{const a=b("an-checkbox");return u(),i(f,null,[n(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),options:t,inline:!1},null,8,["modelValue"]),o("p",null,"🐔："+d(l.value),1)],64)}}},y={__name:"custom_color_demo",setup(r){const l=c(),t=[{label:"唱",value:"sing"},{label:"跳",value:"dance"},{label:"Rap",value:"rap"},{label:"篮球",value:"basketball"},{label:"Music",value:"music"}];return(p,e)=>{const a=b("an-checkbox");return u(),i(f,null,[n(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),options:t,"custom-color":"#66d476"},null,8,["modelValue"]),o("p",null,"🐔："+d(l.value),1)],64)}}},g={class:"markdown-body"},z={},B="",$=v({__name:"index",setup(r,{expose:l}){l({frontmatter:{},excerpt:void 0});const t={columns:[{title:"名称"},{title:"类型"},{title:"默认值"},{title:"说明"}],item:[{name:"options",type:"Array",default:"[]",explain:"选项"},{name:"inline",type:"Boolean",default:"false | true",explain:"排列方式"},{name:"model-value",type:"Array",default:"[]",explain:"选择内容"},{name:"custom-color",type:"String",default:"#ffcf3f",explain:"自定义颜色"}]};return(p,e)=>(u(),i("div",g,[e[0]||(e[0]=o("h2",null,"Checkbox 多选框",-1)),e[1]||(e[1]=o("h5",{style:{color:"#66d476"}},"还记得广场公园一起表演",-1)),e[2]||(e[2]=o("h3",null,"基本用法",-1)),e[3]||(e[3]=o("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"可以选择多个！",-1)),n(x),n(m,{comp:"checkbox",demo:"basic_demo"}),e[4]||(e[4]=o("h3",null,"排列方式",-1)),e[5]||(e[5]=o("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"竖着放好像也不错",-1)),n(k),n(m,{comp:"checkbox",demo:"inline_demo"}),e[6]||(e[6]=o("h3",null,"自定义颜色",-1)),e[7]||(e[7]=o("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"改个颜色试试~",-1)),n(y),n(m,{comp:"checkbox",demo:"custom_color_demo"}),e[8]||(e[8]=o("h3",null,"API 属性",-1)),e[9]||(e[9]=o("p",{style:{color:"var(--color-success)","font-size":"14px","font-weight":"900"}},"太三心二意了可不好~",-1)),n(_,{data:t})]))}});export{$ as default,B as excerpt,z as frontmatter};
