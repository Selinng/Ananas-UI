import{N as y}from"./nav_bar-102e9d52.js";import{_ as p,o as _,c as d,d as e,t as h,a as o,b as s,w as i,F as f,h as c}from"./index-e451da2f.js";const g={props:{texts:{type:Array,required:!0}},data(){return{currentText:"",currentIndex:0,typingIndex:0,typingInterval:null,delay:100,pauseDuration:2e3}},watch:{texts:{immediate:!0,handler(a){this.resetTyping()}}},methods:{resetTyping(){clearInterval(this.typingInterval),this.currentText="",this.currentIndex=0,this.typingIndex=0,this.startTyping()},startTyping(){const a=this.texts[this.currentIndex];let n=0;this.typingInterval=setInterval(()=>{n<a.length?(this.currentText=a.slice(0,n+1),n++):(clearInterval(this.typingInterval),setTimeout(()=>{this.currentIndex=(this.currentIndex+1)%this.texts.length,this.typingIndex=0,this.startTyping()},this.pauseDuration))},this.delay)}}},v={class:"typewriter"},m=["textContent"];function I(a,n,u,t,r,l){return _(),d("div",v,[e("span",{ref:"text",textContent:h(r.currentText)},null,8,m)])}const T=p(g,[["render",I],["__scopeId","data-v-68363e6d"]]);const b={class:"context"},w={class:"tip"},k={class:"button"},C={__name:"index",setup(a){const n=()=>{window.open("https://github.com/zjxzjw/Ananas-UI","_blank")};return(u,t)=>{const r=o("an-button"),l=o("router-link"),x=o("an-space");return _(),d(f,null,[s(y),e("div",b,[t[2]||(t[2]=e("div",{class:"title"},[e("span",{class:"title_ananas"},"Ananas"),e("span",{class:"title_ui"}," UI")],-1)),e("div",w,[s(T,{texts:["在我们相遇之前，是否把时钟拨快一点","你说把爱渐渐放下会走更远","微风需要竹林，溪流需要蜻蜓","来不及听见，你已走的很远","一个看起来像热带水果风味的 Vue3 UI组件库"]})]),t[3]||(t[3]=e("div",{class:"text"},"一个看起来像热带水果风味的 Vue3 UI组件库",-1)),e("div",k,[s(x,null,{default:i(()=>[s(l,{to:"/fast"},{default:i(()=>[s(r,{type:"primary",size:"large",transform:"scale(1.1)"},{default:i(()=>t[0]||(t[0]=[c(" 快速上手 ")])),_:1})]),_:1}),s(r,{type:"success",size:"large",transform:"scale(1.1)",onClick:n},{default:i(()=>t[1]||(t[1]=[c(" GitHub ")])),_:1})]),_:1})]),t[4]||(t[4]=e("div",{class:"footer"},[e("a",{href:"https://beian.miit.gov.cn/",target:"_blank",style:{color:"#ffcf3f","font-size":"14px","text-decoration":"none"}},"© 小菠萝 2024 赣ICP备2024043107号")],-1))])],64)}}},z=p(C,[["__scopeId","data-v-a5e9d324"]]);export{z as default};
