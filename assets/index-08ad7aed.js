import{_ as c,a as p,o as s,j as u,g as d,c as h,d as e,b as a}from"./index-a3e04b1b.js";import{P as m,_ as v}from"./api_table-b894c6fd.js";const _={data(){return{barChartData:[{name:"Mon",value:120},{name:"Tue",value:200},{name:"Wed",value:150},{name:"Thu",value:80},{name:"Fri",value:70},{name:"Sat",value:110},{name:"Sun",value:130}],barChartOptions:{seriesName:{itemStyle:{color:"#ffcf3f"},emphasis:{itemStyle:{color:"#ffcf3f"}},barWidth:40}}}}};function x(l,o,r,i,t,f){const n=p("an-chart");return s(),u(n,{"chart-data":t.barChartData,"chart-type":"bar","custom-options":t.barChartOptions},null,8,["chart-data","custom-options"])}const y=c(_,[["render",x]]),b={data(){return{barChartData:[{name:"Mon",value:120},{name:"Tue",value:200},{name:"Wed",value:150},{name:"Thu",value:80},{name:"Fri",value:70},{name:"Sat",value:110},{name:"Sun",value:130}],barChartOptions:{seriesName:{itemStyle:{color:"#ffcf3f"},emphasis:{itemStyle:{color:"#ffcf3f"}},barWidth:40}}}}};function C(l,o,r,i,t,f){const n=p("an-chart");return s(),u(n,{"chart-data":t.barChartData,"chart-type":"line","custom-options":t.barChartOptions},null,8,["chart-data","custom-options"])}const $=c(b,[["render",C]]),S={data(){return{barChartData:[{name:"Mon",value:120},{name:"Tue",value:200},{name:"Wed",value:150},{name:"Thu",value:80},{name:"Fri",value:70},{name:"Sat",value:110},{name:"Sun",value:130}]}}};function D(l,o,r,i,t,f){const n=p("an-chart");return s(),u(n,{"chart-data":t.barChartData,"chart-type":"pie"},null,8,["chart-data"])}const g=c(S,[["render",D]]),w={class:"markdown-body"},O={},W="",k=d({__name:"index",setup(l,{expose:o}){o({frontmatter:{},excerpt:void 0});const r={columns:[{title:"名称"},{title:"类型"},{title:"默认值"},{title:"说明"}],item:[{name:"chart-data",type:"Array",default:"null",explain:"图表数据"},{name:"chart-type",type:"String",default:"bar | line | pie | ......",explain:"类型"},{name:"chart-height",type:"String",default:"300px",explain:"高度"},{name:"custom-options",type:"Object",default:"{}",explain:"自定义选项"}]};return(i,t)=>(s(),h("div",w,[t[0]||(t[0]=e("h2",null,"Chart 图表",-1)),t[1]||(t[1]=e("h5",{style:{color:"#66d476"}},"这世界总有人在忙忙碌碌寻宝藏",-1)),t[2]||(t[2]=e("h3",null,"基本用法",-1)),t[3]||(t[3]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"看起来有点像万神殿的柱子！",-1)),a(y),a(m,{comp:"chart",demo:"basic_demo"}),t[4]||(t[4]=e("h3",null,"常用图形",-1)),t[5]||(t[5]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"具体可参考Echarts官网, 这里只做基础封装",-1)),a($),a(m,{comp:"chart",demo:"line_demo"}),t[6]||(t[6]=e("h3",null,"其他类型",-1)),t[7]||(t[7]=e("p",{style:{color:"#ffcf3f","font-size":"12px","font-weight":"900"}},"具体可参考Echarts官网, 这里只做基础封装",-1)),a(g),a(m,{comp:"chart",demo:"pie_demo"}),t[8]||(t[8]=e("h3",null,"API 属性",-1)),t[9]||(t[9]=e("p",{style:{color:"var(--color-success)","font-size":"14px","font-weight":"900"}},"具体属性可参考Echarts官网~",-1)),a(v,{data:r})]))}});export{k as default,W as excerpt,O as frontmatter};
