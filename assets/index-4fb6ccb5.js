import{r as s,a as u,o as l,j as g,f as n,c as h,b as o,F as d,g as x,d as e}from"./index-73f9e1a6.js";import{p as f,_}from"./api_table-1825a440.js";const b={__name:"basic_demo",setup(r){const p=s(["https://i0.hippopx.com/photos/458/225/316/fox-tree-stump-sleeping-thumb.jpg","https://i0.hippopx.com/photos/689/371/832/california-road-highway-mountains-thumb.jpg","https://i0.hippopx.com/photos/965/315/755/fall-autumn-red-season-thumb.jpg","https://i0.hippopx.com/photos/309/762/328/france-mountains-fog-mist-thumb.jpg","https://i0.hippopx.com/photos/609/453/213/wild-flowers-flowers-plant-macro-thumb.jpg"]);return(i,m)=>{const t=u("an-image");return l(),g(t,{images:n(p)},null,8,["images"])}}},w={__name:"fill_demo",setup(r){const p=s(["https://i0.hippopx.com/photos/458/225/316/fox-tree-stump-sleeping-thumb.jpg"]),i=s(["https://i0.hippopx.com/photos/689/371/832/california-road-highway-mountains-thumb.jpg"]),m=s(["https://i0.hippopx.com/photos/965/315/755/fall-autumn-red-season-thumb.jpg"]),t=s(["https://i0.hippopx.com/photos/309/762/328/france-mountains-fog-mist-thumb.jpg"]),c=s(["https://i0.hippopx.com/photos/609/453/213/wild-flowers-flowers-plant-macro-thumb.jpg"]);return(z,F)=>{const a=u("an-image");return l(),h(d,null,[o(a,{images:n(p),objectFit:"fill"},null,8,["images"]),o(a,{images:n(i),objectFit:"contain"},null,8,["images"]),o(a,{images:n(m),objectFit:"cover"},null,8,["images"]),o(a,{images:n(t),objectFit:"none"},null,8,["images"]),o(a,{images:n(c),objectFit:"scale-down"},null,8,["images"])],64)}}},j={__name:"preview_demo",setup(r){const p=s(["https://i0.hippopx.com/photos/458/225/316/fox-tree-stump-sleeping-thumb.jpg","https://i0.hippopx.com/photos/689/371/832/california-road-highway-mountains-thumb.jpg","https://i0.hippopx.com/photos/965/315/755/fall-autumn-red-season-thumb.jpg","https://i0.hippopx.com/photos/309/762/328/france-mountains-fog-mist-thumb.jpg","https://i0.hippopx.com/photos/609/453/213/wild-flowers-flowers-plant-macro-thumb.jpg"]);return(i,m)=>{const t=u("an-image");return l(),g(t,{images:n(p),"preview-enabled":!0},null,8,["images"])}}},y={__name:"lazy_demo",setup(r){const p=s(["https://i0.hippopx.com/photos/458/225/316/fox-tree-stump-sleeping-thumb.jpg","https://i0.hippopx.com/photos/689/371/832/california-road-highway-mountains-thumb.jpg","https://i0.hippopx.com/photos/965/315/755/fall-autumn-red-season-thumb.jpg","https://i0.hippopx.com/photos/309/762/328/france-mountains-fog-mist-thumb.jpg","https://i0.hippopx.com/photos/609/453/213/wild-flowers-flowers-plant-macro-thumb.jpg"]);return(i,m)=>{const t=u("an-image");return l(),g(t,{images:n(p),lazy:!0},null,8,["images"])}}},v={class:"markdown-body"},k={},B="",N=x({__name:"index",setup(r,{expose:p}){p({frontmatter:{},excerpt:void 0});const i={columns:[{title:"名称"},{title:"类型"},{title:"默认值"},{title:"说明"}],item:[{name:"images",type:"Array",default:"null",explain:"图片数组"},{name:"alt",type:"String",default:"null",explain:"图片描述"},{name:"width",type:"String || Number",default:"100vw",explain:"宽度"},{name:"height",type:"String || Number",default:"100vw",explain:"高度"},{name:"error-src",type:"String",default:"null",explain:"载入错误"},{name:"object-fit",type:"String",default:"fill | contain | cover | none | scale-down",explain:"填充模式"},{name:"lazy",type:"String",default:"false",explain:"懒加载模式"},{name:"preview-enabled",type:"String",default:"false",explain:"预览模式"}]};return(m,t)=>(l(),h("div",v,[t[0]||(t[0]=e("h2",null,"Image 图片",-1)),t[1]||(t[1]=e("h5",{style:{color:"#66d476"}},"你站的方位，和我中间隔着泪",-1)),t[2]||(t[2]=e("h3",null,"基本用法",-1)),t[3]||(t[3]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"图片往往比文字更能传递信息",-1)),o(b),o(f,{comp:"image",demo:"basic_demo"}),t[4]||(t[4]=e("h3",null,"填充模式",-1)),t[5]||(t[5]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"回忆的画面，在荡着秋千，梦开始不甜",-1)),o(w),o(f,{comp:"image",demo:"fill_demo"}),t[6]||(t[6]=e("h3",null,"预览模式",-1)),t[7]||(t[7]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"更喜欢大一点~",-1)),o(j),o(f,{comp:"image",demo:"preview_demo"}),t[8]||(t[8]=e("h3",null,"懒加载",-1)),t[9]||(t[9]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"懒懒的~~",-1)),o(y),o(f,{comp:"image",demo:"lazy_demo"}),t[10]||(t[10]=e("h3",null,"API",-1)),t[11]||(t[11]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"有好多尺寸的标签",-1)),o(_,{data:i})]))}});export{N as default,B as excerpt,k as frontmatter};
