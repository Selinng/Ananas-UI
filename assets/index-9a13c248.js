import{l as f,r as _,a as u,o as s,j as c,f as d,c as x,d as n,b as e,F as y,g as b}from"./index-5e9fcc8b.js";import{P as m,_ as v}from"./api_table-acb873a8.js";const g={__name:"basic_demo",setup(r){const i=f({options:[{name:"搁浅",id:"1"},{name:"退后",id:"2"},{name:"枫",id:"3"}]}),{options:t}=i,a=_(0);return(o,p)=>{const l=u("an-radio");return s(),c(l,{options:d(t),"filed-label":"name","filed-value":"id","radio-index":a.value,inline:""},null,8,["options","radio-index"])}}},w={__name:"disabled_demo",setup(r){const i=f({options:[{name:"园游会",id:"1",disabled:!0},{name:"甜甜的",id:"2"},{name:"简单爱",id:"3"}]}),{options:t}=i;return(a,o)=>{const p=u("an-radio");return s(),c(p,{options:d(t),"filed-label":"name","filed-value":"id",inline:""},null,8,["options"])}}},z={__name:"default_point_demo",setup(r){const i=f({options:[{name:"选项一",id:"1"},{name:"选项二",id:"2"},{name:"选项三",id:"3"}]}),{options:t}=i,a=_(0);return(o,p)=>{const l=u("an-radio");return s(),c(l,{options:d(t),"filed-label":"name","filed-value":"id",inline:"","radio-index":a.value},null,8,["options","radio-index"])}}},$={__name:"custom_color_demo",setup(r){const i=f({options:[{name:"选项一",id:"1"},{name:"选项二",id:"2"},{name:"选项三",id:"3"}]}),{options:t}=i,a=_(0);return(o,p)=>{const l=u("an-radio");return s(),c(l,{options:d(t),"filed-label":"name","filed-value":"id","radio-index":d(a),inline:"",customColor:"#66d476"},null,8,["options","radio-index"])}}},B={__name:"array_demo",setup(r){const i=f({options:[{name:"第一",id:"1"},{name:"第二",id:"2"},{name:"第三",id:"3"}]}),{options:t}=i,a=_(0);return(o,p)=>{const l=u("an-radio");return s(),x(y,null,[n("p",null,[e(l,{options:d(t),"filed-label":"name",filedValue:"id","radio-index":a.value,inline:""},null,8,["options","radio-index"])]),n("p",null,[e(l,{options:d(t),"filed-label":"name",filedValue:"id","radio-index":a.value},null,8,["options","radio-index"])])],64)}}},I={class:"markdown-body"},C={},N="",P=b({__name:"index",setup(r,{expose:i}){i({frontmatter:{},excerpt:void 0});const t={columns:[{title:"名称"},{title:"类型"},{title:"默认值"},{title:"说明"}],item:[{name:"options",type:"Array",default:"[]",explain:"单选的选项数据"},{name:"inline",type:"Boolean",default:"false | true",explain:"排列方式属性"},{name:"filed-label",type:"String",default:"label",explain:"选项属性名"},{name:"filed-value",type:"String",default:"value",explain:"选项数据名"},{name:"custom-color",type:"String",default:"#ffcf3f",explain:"选中的颜色"},{name:"radio-index",type:"Number",default:"-1",explain:"默认选中"}]};return(a,o)=>(s(),x("div",I,[o[0]||(o[0]=n("h2",null,"Radio 单选",-1)),o[1]||(o[1]=n("h5",{style:{color:"#66d476"}},"苦酒折柳今相离，无风无月也无你",-1)),o[2]||(o[2]=n("h3",null,"基本用法",-1)),o[3]||(o[3]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"这是一个单选按钮组",-1)),e(g),e(m,{comp:"radio",demo:"basic_demo"}),o[4]||(o[4]=n("h3",null,"禁用状态",-1)),o[5]||(o[5]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"不许点！",-1)),e(w),e(m,{comp:"radio",demo:"disabled_demo"}),o[6]||(o[6]=n("h3",null,"自定义颜色",-1)),o[7]||(o[7]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"绿色是春天的颜色",-1)),e($),e(m,{comp:"radio",demo:"custom_color_demo"}),o[8]||(o[8]=n("h3",null,"排列",-1)),o[9]||(o[9]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"提供了两种排列方式",-1)),e(B),e(m,{comp:"radio",demo:"array_demo"}),o[10]||(o[10]=n("h3",null,"默认选择",-1)),o[11]||(o[11]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"默默的选择了你",-1)),e(z),e(m,{comp:"radio",demo:"default_point_demo"}),o[12]||(o[12]=n("h3",null,"API",-1)),o[13]||(o[13]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"有好多尺寸的标签",-1)),e(v,{data:t})]))}});export{P as default,N as excerpt,C as frontmatter};
