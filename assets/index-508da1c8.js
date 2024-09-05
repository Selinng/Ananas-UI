import{a as l,o as s,j as u,w as p,b as e,h as f,g as _,c as x,d as n}from"./index-22b45733.js";import{P as i,_ as P}from"./api_table-3b37f906.js";import{B as c}from"./bottom_tabs-da73f601.js";const y={__name:"basic_demo",setup(m){const a={columns:[{title:"名称"},{title:"歌手"},{title:"专辑"}],item:[{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"}]};return(r,o)=>{const t=l("an-table");return s(),u(t,{data:a})}}},b={__name:"border_demo",setup(m){const a={columns:[{title:"名称"},{title:"歌手"},{title:"专辑"}],item:[{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"}]};return(r,o)=>{const t=l("an-table");return s(),u(t,{data:a,border:""})}}},M={__name:"size_demo",setup(m){const a={columns:[{title:"名称"},{title:"歌手"},{title:"专辑"}],item:[{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"}]};return(r,o)=>{const t=l("an-table");return s(),u(t,{data:a,width:"100%","table-height":"20vh"})}}},J={__name:"item_align_demo",setup(m){const a={columns:[{title:"名称"},{title:"歌手"},{title:"专辑"}],item:[{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"}]};return(r,o)=>{const t=l("an-table");return s(),u(t,{data:a,align:"left"})}}},g={__name:"custom_demo",setup(m){const a={columns:[{title:"名称"},{title:"歌手"},{title:"专辑"},{title:"操作"}],item:[{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"}]};return(r,o)=>{const t=l("an-button"),I=l("an-space"),d=l("an-table");return s(),u(d,{data:a,custom:""},{operation:p(()=>[e(I,null,{default:p(()=>[e(t,{type:"primary"},{default:p(()=>o[0]||(o[0]=[f("修改")])),_:1}),e(t,{type:"error"},{default:p(()=>o[1]||(o[1]=[f("删除")])),_:1})]),_:1})]),_:1})}}},w={__name:"custom_title_demo",setup(m){const a={columns:[{title:"名称"},{title:"歌手"},{title:"专辑"}],item:[{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"},{name:"一路向北",user:"周杰伦",text:"J III MP3 Player"}]};return(r,o)=>{const t=l("an-table");return s(),u(t,{data:a,"head-color":"white","head-background":"#ffcf3f"})}}},z={class:"markdown-body"},v={},S="",h=_({__name:"index",setup(m,{expose:a}){a({frontmatter:{},excerpt:void 0});const r={columns:[{title:"名称"},{title:"类型"},{title:"默认值"},{title:"说明"}],item:[{name:"data",type:"Array",default:"[]",explain:"内容数据"},{name:"width",type:"String",default:"100%",explain:"宽度属性"},{name:"table-height",type:"String",default:"auto",explain:"高度属性"},{name:"align",type:"String",default:"center",explain:"对齐方式"},{name:"custom",type:"Boolean",default:"false | true",explain:"是否自定义"},{name:"border",type:"Boolean",default:"false | true",explain:"是否有边框"},{name:"head-color",type:"String",default:"white",explain:"标题栏文字颜色"},{name:"head-background",type:"String",default:"white",explain:"标题栏背景颜色"}]};return(o,t)=>(s(),x("div",z,[t[0]||(t[0]=n("h2",null,"Table 表格",-1)),t[1]||(t[1]=n("h5",{style:{color:"#66d476"}},"令人头大的Excel。",-1)),t[2]||(t[2]=n("h3",null,"基本用法",-1)),t[3]||(t[3]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"一个基本的表格",-1)),e(y),e(i,{comp:"table",demo:"basic_demo"}),t[4]||(t[4]=n("h3",null,"带边框表格",-1)),t[5]||(t[5]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"有边框的表格",-1)),e(b),e(i,{comp:"table",demo:"border_demo"}),t[6]||(t[6]=n("h3",null,"自定义插槽",-1)),t[7]||(t[7]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"可以用来放一些操作按钮",-1)),e(g),e(i,{comp:"table",demo:"custom_demo"}),t[8]||(t[8]=n("h3",null,"自定义尺寸",-1)),t[9]||(t[9]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"金箍棒，大 大 大 大",-1)),e(M),e(i,{comp:"table",demo:"size_demo"}),t[10]||(t[10]=n("h3",null,"自定义内容位置",-1)),t[11]||(t[11]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"可以选择内容位置",-1)),e(J),e(i,{comp:"table",demo:"item_align_demo"}),t[12]||(t[12]=n("h3",null,"自定义标题栏",-1)),t[13]||(t[13]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"换一个颜色看看",-1)),e(w),e(i,{comp:"table",demo:"custom_title_demo"}),t[14]||(t[14]=n("h3",null,"API",-1)),t[15]||(t[15]=n("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"有好多尺寸的标签",-1)),e(P,{data:r}),e(c,{up:"Message",down:"Card"})]))}});export{h as default,S as excerpt,v as frontmatter};
