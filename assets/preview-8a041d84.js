import{_ as c,m as v,r as u,q as E,a as l,o as n,c as g,d as p,b as k,f as m,n as P,t as D,s as e}from"./index-19370073.js";const I=(r,_)=>{const o=r[_];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((a,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+_)))})};const T={__name:"preview",props:{comp:{type:String},demo:{type:String}},setup(r){const _=r,o=v(()=>t.value==="container-show"?"隐藏代码":"显示代码"),a=u("");async function i(){a.value=(await I(Object.assign({"../../packages/breadcrumb/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-d28cd87a.js"),[],import.meta.url),"../../packages/breadcrumb/demo/custom_demo.vue":()=>e(()=>import("./custom_demo-0567b928.js"),[],import.meta.url),"../../packages/breadcrumb/demo/custom_separator_demo.vue":()=>e(()=>import("./custom_separator_demo-cea6592f.js"),[],import.meta.url),"../../packages/breadcrumb/demo/margin_demo.vue":()=>e(()=>import("./margin_demo-5d3b1f8b.js"),[],import.meta.url),"../../packages/breadcrumb/demo/separator_color_demo.vue":()=>e(()=>import("./separator_color_demo-55cbc509.js"),[],import.meta.url),"../../packages/breadcrumb/demo/text_color_demo.vue":()=>e(()=>import("./text_color_demo-90155c2b.js"),[],import.meta.url),"../../packages/button/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-6e813255.js"),[],import.meta.url),"../../packages/button/demo/custom_color_demo.vue":()=>e(()=>import("./custom_color_demo-ec8aca51.js"),[],import.meta.url),"../../packages/button/demo/disabled_demo.vue":()=>e(()=>import("./disabled_demo-152dda9c.js"),[],import.meta.url),"../../packages/button/demo/icon_demo.vue":()=>e(()=>import("./icon_demo-bdf83988.js"),[],import.meta.url),"../../packages/button/demo/round_demo.vue":()=>e(()=>import("./round_demo-bfa1c541.js"),[],import.meta.url),"../../packages/button/demo/secondary_demo.vue":()=>e(()=>import("./secondary_demo-53a21c9d.js"),[],import.meta.url),"../../packages/button/demo/size_demo.vue":()=>e(()=>import("./size_demo-d5ce7eda.js"),[],import.meta.url),"../../packages/button/demo/transform_demo.vue":()=>e(()=>import("./transform_demo-9638812f.js"),[],import.meta.url),"../../packages/card/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-ac2bdca5.js"),[],import.meta.url),"../../packages/card/demo/body_demo.vue":()=>e(()=>import("./body_demo-e7e8c629.js"),[],import.meta.url),"../../packages/card/demo/footer_demo.vue":()=>e(()=>import("./footer_demo-6d3dc441.js"),[],import.meta.url),"../../packages/card/demo/hoverable_demo.vue":()=>e(()=>import("./hoverable_demo-e1c79960.js"),[],import.meta.url),"../../packages/card/demo/size_demo.vue":()=>e(()=>import("./size_demo-6d0a4697.js"),[],import.meta.url),"../../packages/checkbox/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-31c63b36.js"),[],import.meta.url),"../../packages/checkbox/demo/inline_demo.vue":()=>e(()=>import("./inline_demo-c4d304cd.js"),[],import.meta.url),"../../packages/ellipsis/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-165bfc90.js"),[],import.meta.url),"../../packages/ellipsis/demo/length_demo.vue":()=>e(()=>import("./length_demo-b9470318.js"),[],import.meta.url),"../../packages/ellipsis/demo/show_demo.vue":()=>e(()=>import("./show_demo-2d4f5389.js"),[],import.meta.url),"../../packages/icon/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-ed17e0ca.js"),[],import.meta.url),"../../packages/icon/demo/color_demo.vue":()=>e(()=>import("./color_demo-54829bc4.js"),[],import.meta.url),"../../packages/icon/demo/icon_demo.vue":()=>e(()=>import("./icon_demo-9572fa81.js"),[],import.meta.url),"../../packages/image/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-6c419cb3.js"),[],import.meta.url),"../../packages/image/demo/fill_demo.vue":()=>e(()=>import("./fill_demo-f047391f.js"),[],import.meta.url),"../../packages/image/demo/lazy_demo.vue":()=>e(()=>import("./lazy_demo-9076f8ce.js"),[],import.meta.url),"../../packages/image/demo/preview_demo.vue":()=>e(()=>import("./preview_demo-b867c91e.js"),[],import.meta.url),"../../packages/input/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-f814930b.js"),[],import.meta.url),"../../packages/input/demo/disabled_demo.vue":()=>e(()=>import("./disabled_demo-d81d9949.js"),[],import.meta.url),"../../packages/input/demo/icon_demo.vue":()=>e(()=>import("./icon_demo-c1de5a33.js"),[],import.meta.url),"../../packages/input/demo/password_demo.vue":()=>e(()=>import("./password_demo-35df1841.js"),[],import.meta.url),"../../packages/input/demo/round_demo.vue":()=>e(()=>import("./round_demo-2fae0a5e.js"),[],import.meta.url),"../../packages/input/demo/size_demo.vue":()=>e(()=>import("./size_demo-2d0ab8ce.js"),[],import.meta.url),"../../packages/message/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-e23da842.js"),[],import.meta.url),"../../packages/message/demo/secondary_demo.vue":()=>e(()=>import("./secondary_demo-3b1fcd2b.js"),[],import.meta.url),"../../packages/message/demo/time_demo.vue":()=>e(()=>import("./time_demo-40793f1e.js"),[],import.meta.url),"../../packages/number_animation/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-d59929b6.js"),[],import.meta.url),"../../packages/number_animation/demo/size_demo.vue":()=>e(()=>import("./size_demo-58c33a76.js"),[],import.meta.url),"../../packages/number_animation/demo/time_demo.vue":()=>e(()=>import("./time_demo-6aba0ef2.js"),[],import.meta.url),"../../packages/radio/demo/array_demo.vue":()=>e(()=>import("./array_demo-1c64f474.js"),[],import.meta.url),"../../packages/radio/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-b2dce478.js"),[],import.meta.url),"../../packages/radio/demo/custom_color_demo.vue":()=>e(()=>import("./custom_color_demo-fa32841e.js"),[],import.meta.url),"../../packages/radio/demo/default_point_demo.vue":()=>e(()=>import("./default_point_demo-3b799646.js"),[],import.meta.url),"../../packages/radio/demo/disabled_demo.vue":()=>e(()=>import("./disabled_demo-368253dc.js"),[],import.meta.url),"../../packages/select/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-b15ad90e.js"),[],import.meta.url),"../../packages/select/demo/change_demo.vue":()=>e(()=>import("./change_demo-aead216c.js"),[],import.meta.url),"../../packages/select/demo/data_demo.vue":()=>e(()=>import("./data_demo-7e45c7cb.js"),[],import.meta.url),"../../packages/select/demo/default_option_demo.vue":()=>e(()=>import("./default_option_demo-bea0ecf7.js"),[],import.meta.url),"../../packages/select/demo/disabled_demo.vue":()=>e(()=>import("./disabled_demo-0f0208bb.js"),[],import.meta.url),"../../packages/select/demo/disabled_item_demo.vue":()=>e(()=>import("./disabled_item_demo-7da6609c.js"),[],import.meta.url),"../../packages/select/demo/size_demo.vue":()=>e(()=>import("./size_demo-7813cc85.js"),[],import.meta.url),"../../packages/side_menu/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-66e8542f.js"),[],import.meta.url),"../../packages/space/demo/array_demo.vue":()=>e(()=>import("./array_demo-bf6390fa.js"),[],import.meta.url),"../../packages/space/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-af54524c.js"),[],import.meta.url),"../../packages/space/demo/size_demo.vue":()=>e(()=>import("./size_demo-bd09e6c5.js"),[],import.meta.url),"../../packages/table/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-452d65e0.js"),[],import.meta.url),"../../packages/table/demo/border_demo.vue":()=>e(()=>import("./border_demo-d9a014ec.js"),[],import.meta.url),"../../packages/table/demo/custom_demo.vue":()=>e(()=>import("./custom_demo-2188c247.js"),[],import.meta.url),"../../packages/table/demo/custom_title_demo.vue":()=>e(()=>import("./custom_title_demo-e5c3a939.js"),[],import.meta.url),"../../packages/table/demo/item_align_demo.vue":()=>e(()=>import("./item_align_demo-eb88b142.js"),[],import.meta.url),"../../packages/table/demo/size_demo.vue":()=>e(()=>import("./size_demo-e93c8ed8.js"),[],import.meta.url),"../../packages/tag/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-23d4a958.js"),[],import.meta.url),"../../packages/tag/demo/color_demo.vue":()=>e(()=>import("./color_demo-bb9c72d0.js"),[],import.meta.url),"../../packages/tag/demo/round_demo.vue":()=>e(()=>import("./round_demo-391d8f47.js"),[],import.meta.url),"../../packages/tag/demo/scale_demo.vue":()=>e(()=>import("./scale_demo-cb621802.js"),[],import.meta.url),"../../packages/tag/demo/secondary_demo.vue":()=>e(()=>import("./secondary_demo-59e9226e.js"),[],import.meta.url),"../../packages/tag/demo/size_demo.vue":()=>e(()=>import("./size_demo-8678c3e4.js"),[],import.meta.url),"../../packages/textarea/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-2f7e66a0.js"),[],import.meta.url),"../../packages/textarea/demo/disabled_demo.vue":()=>e(()=>import("./disabled_demo-65e0273c.js"),[],import.meta.url),"../../packages/textarea/demo/max_length_demo.vue":()=>e(()=>import("./max_length_demo-508dd076.js"),[],import.meta.url),"../../packages/textarea/demo/readonly_demo.vue":()=>e(()=>import("./readonly_demo-9b94ea94.js"),[],import.meta.url),"../../packages/textarea/demo/resize_demo.vue":()=>e(()=>import("./resize_demo-dc32c0a9.js"),[],import.meta.url),"../../packages/textarea/demo/size_demo.vue":()=>e(()=>import("./size_demo-f7fe5fbd.js"),[],import.meta.url),"../../packages/tree/demo/basic_demo.vue":()=>e(()=>import("./basic_demo-34277a1d.js"),[],import.meta.url),"../../packages/tree/demo/color_demo.vue":()=>e(()=>import("./color_demo-c1762c54.js"),[],import.meta.url),"../../packages/tree/demo/none_header_demo.vue":()=>e(()=>import("./none_header_demo-0c82bba3.js"),[],import.meta.url),"../../packages/tree/demo/overflow_demo.vue":()=>e(()=>import("./overflow_demo-0e50b5d9.js"),[],import.meta.url)}),`../../packages/${_.comp}/demo/${_.demo}.vue`)).default}const t=u("container-hide");return E(()=>{i()}),(V,d)=>{const s=l("highlightjs");return n(),g("div",null,[p("div",{class:P(m(t))},[k(s,{code:m(a),language:"JavaScript"},null,8,["code"])],2),p("div",{class:"show-code",onClick:d[0]||(d[0]=O=>t.value=m(t)==="container-show"?"container-hide":"container-show")},D(m(o)),1)])}}},A=c(T,[["__scopeId","data-v-750753a9"]]);export{A as P};
