import{r as A,o as s,c as y,a as n,p as E,b as B,d as e,S as H,A as T,e as I,f as x,w as k,g as p,F as g,h as w,t as a,W as P,n as j,i as M,j as S,P as R,N as G,k as b,l as V,m as Q,q as L,s as U,u as K}from"./vendor.75ab2dbf.js";const W=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))h(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&h(t)}).observe(document,{childList:!0,subtree:!0});function l(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(i){if(i.ep)return;i.ep=!0;const r=l(i);fetch(i.href,r)}};W();var f=(o,d)=>{const l=o.__vccOpts||o;for(const[h,i]of d)l[h]=i;return l};const F={};function D(o,d){const l=A("router-view");return s(),y(l)}var O=f(F,[["render",D]]);const J="modulepreload",N={},z="/summary-vue/",Z=function(d,l){return!l||l.length===0?d():Promise.all(l.map(h=>{if(h=`${z}${h}`,h in N)return;N[h]=!0;const i=h.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${r}`))return;const t=document.createElement("link");if(t.rel=i?"stylesheet":J,i||(t.as="script",t.crossOrigin=""),t.href=h,document.head.appendChild(t),i)return new Promise((u,_)=>{t.addEventListener("load",u),t.addEventListener("error",_)})})).then(()=>d())};const Y={name:"MFooter",props:{msg:String}},X=o=>(E("data-v-1f44a699"),o=o(),B(),o),q={id:"footer"},$=X(()=>e("div",{class:"wrap"},[e("address",null,"\xA9 Ha Thuy Tien")],-1)),ee=[$];function te(o,d,l,h,i,r){return s(),n("footer",q,ee)}var ie=f(Y,[["render",te],["__scopeId","data-v-1f44a699"]]);H.use([T]);const se={components:{Swiper:I,SwiperSlide:x},props:{autoplay:{type:Object,default:()=>({delay:5e3})},imgUrls:{type:Array,default:["src/assets/images/index/key1.jpg"]}},data(){return{}},methods:{}},ne=["src"];function oe(o,d,l,h,i,r){const t=A("swiper-slide"),u=A("swiper");return s(),y(u,{class:"mySwiper",loop:!0,autoplay:l.autoplay},{default:k(()=>[(s(!0),n(g,null,p(l.imgUrls,(_,v)=>(s(),y(t,{key:v},{default:k(()=>[e("img",{src:_},null,8,ne)]),_:2},1024))),128))]),_:1},8,["autoplay"])}var le=f(se,[["render",oe]]);const ae={name:"MFooter",props:{msg:String},components:{Swiper:I,SwiperSlide:x,MSwiper:le},setup(){return{onSwiper:l=>{console.log(l)},onSlideChange:()=>{console.log("slide change")}}},data(){return{imgLeft:["images/index/key3.jpg","images/index/key1.jpg","images/index/key2.jpg"],imgCenter:["images/index/key1.jpg","images/index/key2.jpg","images/index/key3.jpg"],imgRight:["images/index/key2.jpg","images/index/key3.jpg","images/index/key1.jpg"]}}},ce={id:"header"},re={class:"wrap df"},de={id:"key",class:"on"},he={class:"slider-left"},ue={class:"slider-center"},pe={class:"slider-right"},ge=e("div",{class:"row"},[e("h2",{class:"name"},"H\xC0 TH\u1EE6Y TI\xCAN"),e("h3",{class:"position"},"Front End Developer")],-1);function me(o,d,l,h,i,r){const t=A("m-swiper");return s(),n("header",ce,[e("div",re,[e("div",de,[e("div",he,[w(t,{imgUrls:i.imgLeft},null,8,["imgUrls"])]),e("div",ue,[w(t,{imgUrls:i.imgCenter},null,8,["imgUrls"])]),e("div",pe,[w(t,{imgUrls:i.imgRight},null,8,["imgUrls"])])]),ge])])}var Ae=f(ae,[["render",me]]);const _e={name:"CProduct",props:{product:{type:Object,default:()=>null}},data(){return{}}},fe={class:"item wow mb10"},we={class:"product wow fadeInRight"},ve={class:"link-product wow fadeInRight"},ye=["href"];function ke(o,d,l,h,i,r){return s(),n("div",fe,[e("p",we,a(l.product.restaurant),1),e("p",ve,[e("a",{href:l.product.link_product,target:"_blank"},a(l.product.link_product),9,ye)])])}var be=f(_e,[["render",ke]]);const Ie={name:"CListProduct",props:{listproduct:{type:Array,default:()=>[]}},data(){return{}},components:{CProduct:be}},xe={class:"list",id:"listproduct"};function je(o,d,l,h,i,r){const t=A("CProduct");return s(),n("div",xe,[(s(!0),n(g,null,p(l.listproduct,u=>(s(),y(t,{class:"item wow mb10",key:u.id,product:u},null,8,["product"]))),128))])}var Se=f(Ie,[["render",je]]);const Ne={name:"Home",components:{MFooter:ie,MHeader:Ae,CListProduct:Se},data(){return{information:[{icon:"fa-birthday-cake",title:"01/11/1995",IsLink:!1},{icon:"fa-female",title:"Female",IsLink:!1},{icon:"fa-phone-alt",title:"0777777078",IsLink:!1},{icon:"fa-envelope-open",title:"thuytienha127@gmail.com",IsLink:!1},{icon:"fa-envelope-open",title:"https://hathuytien.github.io/summary-vue/",IsLink:!0},{icon:"fa-home",title:"Hamlet 3, Hoa Thanh Village, Tam Binh District, Vinh Long province",IsLink:!1}],objective:["Looking for a chance to work in a professional working environment to learn knowledge and experience.","Find the right job with myself.","Improve professional knowledge, the skills necessary during the work. And, I will contribute to development of Company."],skills:[{title:"HTML",width:80},{title:"CSS,SCSS",width:80},{title:"Jquery",width:50},{title:"Bootstrap",width:60},{title:"Ajax",width:50},{title:"Adobe Photoshop",width:80},{title:"Adobe Illustrator",width:80},{title:"Adobe XD",width:60},{title:"Figma",width:50}],interests:[{icon:"fa-plane-departure",title:"Travel"},{icon:"fa-palette",title:"Painting"},{icon:"fa-camera",title:"Take photo"},{icon:"fa-photo-video",title:"Photoshop"}],position:[{isActive:!0,title:"Front-end Developer"},{isActive:!1,title:"Web Graphic Designer"}],education:[{period:"2013 - 2017",title:"Ho Chi Minh City University of Food Industry (HUFI)",major:"information technology",decription:"Specialized: information system"},{period:"2014 - 2016",title:"Computer center College of Natural Science Ho Chi Minh city",major:"information technology",decription:"Specialized: Application programming, graphic design"},{period:"Febnuary 2017- June 2017",title:"Saigon institute of Technology",major:"information technology",decription:"Specialized: Web programming"},{period:"January 2018 - August 2018",title:"Computer center College of Natural Science Ho Chi Minh city",major:"information technology",decription:"Specialized: Web programming"}],experience:[{time:"August 2017 - August 2019",company:"Computer center College of Natural Science Ho Chi Minh city",position:"Designer and Software Developer",detail:"I used to design layout website, layout desktop and layout mobile. I was worked for software developer position. And, I used ASP.NET MVC technology to programming. I was worked for front end developer position."},{time:"September 2019 - May 2022",company:"FoodConnection",position:"Frontend Developer",detail:"I have created a responsive website using HTML / CSS / JavaScript for Japanese customers. The website will work on many browser, on all devices: PC, laptop, tablet, and smartphone from design AI, PTS, XD. I check perfect pixel for website."}],listproduct:[{id:"0",restaurant:"\u304A\u306F\u3057\u30C0\u30A4\u30CB\u30F3\u30B0\u30B7\u30A7\u30EB (ohashi dining shell)",link_product:"https://www.ohashi-dining-shell.com/"},{id:"1",restaurant:"\u30A2\u30AB\u30C4\u30AD\u30B9\u30E2\u30FC\u30AF (akatsukismoke)",link_product:"https://www.akatsukismoke.com/"},{id:"2",restaurant:"\u30A2\u30EB\u30DC (Arubo)",link_product:"https://www.arubo.jp/"},{id:"3",restaurant:"\u65B0\u5BBF\u306E\u96FB\u6E90\u30FBWi-Fi\u30AB\u30D5\u30A7Cafe\uFF06Bar Village \u30D3\u30EC\u30C3\u30B8 (village-tokyo)",link_product:"https://www.village-tokyo.jp/"},{id:"4",restaurant:"\u516B\u91CD\u5B50\u3055\u3093\u306E\u9903\u5B50 (yaeko gyoza)",link_product:"https://www.yaeko-gyoza.com/"},{id:"5",restaurant:"\u3068\u308A\u5E78 (torikou)",link_product:"https://www.torikou.net/"}]}},computed:{ShowPosition(){return this.position.filter(function(o){return o.isActive})}},mounted(){var o=new P({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(d){},scrollContainer:null,resetAnimation:!0});o.init()}},Ce={class:"nav-target"},Ee={class:"row wrap"},Be={class:"left"},He={id:"sec1",class:"pb20"},Te=e("h2",null,"Contact information sssss",-1),Pe={class:"info"},Me={key:0},Re=["href"],Ge={key:1},Ve={id:"sec2",class:"pb20"},Qe=e("h2",null,"Objective",-1),Le={id:"sec3",class:"pb20"},Ue=e("h2",null,"Skills",-1),Ke={class:"list-item"},We={class:"line"},Fe={id:"sec4",class:"pb20"},De=e("h2",null,"Interests",-1),Oe={class:"df"},Je={id:"sec5",class:"pb20"},ze=e("h2",null,"Position desired",-1),Ze={class:"right"},Ye={id:"sec6",class:"pb20"},Xe=e("h2",null,"Education",-1),qe={class:"list"},$e={class:"time"},et={class:"wow fadeInUp"},tt={class:"school wow fadeInRight"},it={class:"major wow fadeInRight"},st={class:"specialized wow fadeInRight"},nt={id:"sec8",class:"pb20"},ot=e("h2",null,"Work experience",-1),lt={class:"list"},at={class:"time"},ct={class:"wow fadeInUp"},rt={class:"company wow fadeInRight"},dt={class:"position wow fadeInRight"},ht={class:"detail wow fadeInRight"},ut={id:"sec9",class:"pb20"},pt=e("h2",{class:"mb20"},"Product",-1),gt={id:"sec10"},mt=e("h2",{class:"mb20"},"My Project",-1),At={class:"list"},_t={class:"item"},ft=e("p",{class:"name wow fadeInRight"},"Jewelry",-1),wt=e("p",{class:"technology wow fadeInRight"},"Technology: HTML, CSS, Jquery, VueJs basic",-1),vt=e("p",{class:"detail wow fadeInRight"},"Website introducing jewelry of Kim Long MeKong store",-1),yt={class:"btn-cus"},kt=S("Demo");function bt(o,d,l,h,i,r){const t=A("m-header"),u=A("CListProduct"),_=A("router-link"),v=A("m-footer");return s(),n("main",null,[w(t),e("section",Ce,[e("div",Ee,[e("div",Be,[e("div",He,[Te,e("div",Pe,[(s(!0),n(g,null,p(i.information,(c,m)=>(s(),n("dl",{class:"wow fadeInUp",key:m},[e("dt",null,[e("i",{class:j(["fas",c.icon])},null,2)]),c.IsLink==!0?(s(),n("dd",Me,[e("a",{href:c.title,target:"_blank"},a(c.title),9,Re)])):(s(),n("dd",Ge,a(c.title),1))]))),128))])]),e("div",Ve,[Qe,e("ul",null,[(s(!0),n(g,null,p(i.objective,(c,m)=>(s(),n("li",{class:"wow fadeInUp",key:m},"- "+a(c),1))),128))])]),e("div",Le,[Ue,e("div",Ke,[(s(!0),n(g,null,p(i.skills,(c,m)=>(s(),n("div",{class:"item wow",key:m},[e("h4",null,a(c.title),1),e("p",We,[e("span",{class:"wow fadeInLeft",style:M({width:c.width+"%"})},null,4)])]))),128))])]),e("div",Fe,[De,e("ul",Oe,[(s(!0),n(g,null,p(i.interests,(c,m)=>(s(),n("li",{class:"wow rotateIn",key:m},[e("span",null,[e("i",{class:j(["fas",c.icon])},null,2),S(" "+a(c.title),1)])]))),128))])]),e("div",Je,[ze,e("ul",null,[(s(!0),n(g,null,p(r.ShowPosition,(c,m)=>(s(),n("li",{class:"wow fadeInUp",key:m},"- "+a(c.title),1))),128))])])]),e("div",Ze,[e("div",Ye,[Xe,e("div",qe,[(s(!0),n(g,null,p(i.education,(c,m)=>(s(),n("div",{class:"item wow",key:m},[e("p",$e,[e("span",et,a(c.period),1)]),e("p",tt,a(c.title),1),e("p",it,"Major: "+a(c.major),1),e("p",st,a(c.decription),1)]))),128))])]),e("div",nt,[ot,e("div",lt,[(s(!0),n(g,null,p(i.experience,(c,m)=>(s(),n("div",{class:"item wow",key:m},[e("p",at,[e("span",ct,a(c.time),1)]),e("p",rt,a(c.company),1),e("p",dt,a(c.position),1),e("p",ht,a(c.detail),1)]))),128))])]),e("div",ut,[pt,w(u,{listproduct:i.listproduct},null,8,["listproduct"])]),e("div",gt,[mt,e("div",At,[e("div",_t,[ft,wt,vt,e("p",yt,[w(_,{to:{name:"Jewelry"},tag:"p",target:"_blank"},{default:k(()=>[kt]),_:1})])])])])])])]),w(v)])}var It=f(Ne,[["render",bt]]);var xt="data:image/png;base64,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",jt="/summary-vue/assets/Logo.6386186f.png",St="/summary-vue/assets/IMG2.10c47dac.png",Nt="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAPAA8AwERAAIRAQMRAf/EAIUAAAMBAQEAAAAAAAAAAAAAAAAEBwgGBQEAAgMBAQAAAAAAAAAAAAAAAAUBAgQDBhAAAAUCAggEBgMBAAAAAAAAAAECAwURBBIGIROzFHQVNQcx0ZNVQVFhMnM3gZEWCBEAAgECBgICAwEAAAAAAAAAAAECEQMxcRIyEwQhUWEF0eEzUv/aAAwDAQACEQMRAD8A8GcnJpM1IJTIXJJK5eIiJ5wiIicP6j1Vu3HSvCwFcpOolz2c9xufWc8xfjj6RGphz2c9xufWc8wccfSDUw57Oe43PrOeYOOPpBqYc9nPcbn1nPMHHH0g1MOeznuNz6znmDjj6QamHPZz3G59ZzzBxx9INTDns57jc+s55g44+kGphO9ckeJe2hgt7VkEsREWIAAAACt9qOzTGYLJE7PqWiMcM90tGzwKeJJmRrWrxSipUKmk/oXis7ne0PTHE02bGryytt9p+3TaCQmCtzJPgasaj/lSlGZhY+5d/wBGnhj6Id3zgIaDzbaWkTaN2dsuwbdW02RkRrN55Jq0100SQcfX3JTg3J18/gx9iKUvBOhuOI9O9ckeJe2hitvasiZYiIsQAAAAG0MsW7VtluKt2iwtNWbCEF9CbSQ8pddZt/I0gvCIj3W7rZzj85XsTFXm4WdjgbSltDalLUptK1KUpaVH4qoRFoDfp9O3K2pSVWzJevSUqImE/mSbzBeIvZi6Vd3LbZMocUSUmTaVKUSaIJJeKzDG3ajBUiqI4Sk5YnmC5UeneuSPEvbQxW3tWRMsREWIAAFnif8AnTmEVZ3/APodVvbDT+r3PFh1qCXhrryrSvjQKp/aaZNacPn9GpdaqrUulha7pY29rix7u0hrHSlcCSTWmmlaBNJ1bZrSoiXZw7D/AOjzJfTXPN13xSVbvuusw4UJR9+uRX7fkGVj7Hjgo6a0+f0Z59fU61Izn/KDeUswrhk3u/qbabcW9q9TQ3Crhw43PhQ/ENetf5YaqUMtyGl0ObHcoPTvXJHiXtoYrb2rImWIiLEAADQ8F35yRYwkfZPN3pvWtsyy5hZQacTbZJOh6wtFSCO59dccm/Hlm2PYikVa1uG7m1ZuW66t9CXEV0HhWRKKv9ha1R0NKZxGYe9GT4GZuYi+RdndWiiS6bTSVIqpJKKhmsvgr5DZa6FycVJUozjK/FOjM+dxMyW2ZM4yExa4ytbg2yYS4WFRJbaS3pIjVT7a+Id9a07dtReJiuS1Sqc4O5QeneuSPEvbQxW3tWRMsREWIAAAADakF0OO4ZnZkPJ3NzzGscDLveD9kzf5W9igei6X8oi+9vZxo1HIAAPTvXJHiXtoYrb2rImWIiLEAAAABtSC6HHcMzsyHk7m55jWOBl3vB+yZv8AK3sUD0XS/lEX3t7ONGo5AAB6d65I8S9tDFbe1ZEyxERYgAAAANqQXQ47hmdmQ8nc3PMaxwMu94P2TN/lb2KB6LpfyiL729nGjUcgAB//2Q==",Ct="data:image/jpeg;base64,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";const Et={name:"jewelry",components:{},setup(){return{modules:[R,G]}},data(){return{imgSlide:["images/jewelry/banner.jpg","images/jewelry/banner.jpg","images/jewelry/banner.jpg"],swiperOptions:{breakpoints:{320:{slidesPerView:1,spaceBetween:10},820:{slidesPerView:1,spaceBetween:10},992:{slidesPerView:3,spaceBetween:10}}},swiperOptions2:{breakpoints:{320:{slidesPerView:1,spaceBetween:10},767:{slidesPerView:3,spaceBetween:10},992:{slidesPerView:3,spaceBetween:10}}},ListMenu:[{menu:"Nh\u1EABn",link:"#",sub:[{menu:"Nh\u1EABn c\u01B0\u1EDBi",link:"#"},{menu:"Nh\u1EABn nam",link:""},{menu:"Nh\u1EABn ki\u1EC3u",link:"#"},{menu:"Nh\u1EABn em b\xE9",link:""}]},{menu:"B\xF4ng tai",link:"#",sub:[]},{menu:"L\u1EAFc",link:"#",sub:[]},{menu:"V\xF2ng",link:"#",sub:[]},{menu:"D\xE2y chuy\u1EC1n",link:"#",sub:[]},{menu:"Ki\u1EC1ng",link:"#",sub:[]},{menu:"Kh\xE1c",link:"#",sub:[{menu:"Charm",linl:"#"},{menu:"V\xE0ng mi\u1EBFng",linl:"#"}]}],ListJewelry:[{img:"images/jewelry/IMG1.jpg",id_product:"NC1697",name:"Nh\u1EABn \u0111\xE1 m\xE0u"},{img:"images/jewelry/IMG2.jpg",id_product:"NC1697",name:"Nh\u1EABn \u0111\xE1 m\xE0u"},{img:"images/jewelry/IMG3.jpg",id_product:"NC1697",name:"Nh\u1EABn \u0111\xE1 m\xE0u"},{img:"images/jewelry/IMG4.jpg",id_product:"NC1697",name:"Nh\u1EABn \u0111\xE1 m\xE0u"},{img:"images/jewelry/IMG1.jpg",id_product:"NC1697",name:"Nh\u1EABn \u0111\xE1 m\xE0u"},{img:"images/jewelry/IMG2.jpg",id_product:"NC1697",name:"Nh\u1EABn \u0111\xE1 m\xE0u"},{img:"images/jewelry/IMG3.jpg",id_product:"NC1697",name:"Nh\u1EABn \u0111\xE1 m\xE0u"},{img:"images/jewelry/IMG4.jpg",id_product:"NC1697",name:"Nh\u1EABn \u0111\xE1 m\xE0u"}],ListNews:[{img:"images/jewelry/Hinh1.jpg",title:"Gi\xE1 v\xE0ng h\xF4m nay 29/6: 'Leo d\u1ED1c' s\xE1ng \u0111\u1EA7u tu\u1EA7n, d\u1EF1 b\xE1o ti\u1EBFp t\u1EE5c t\u0103ng b\u1EE9t ph\xE1",desc:"M\u1EDF c\u1EEDa phi\xEAn giao d\u1ECBch s\xE1ng nay (29/6 theo gi\u1EDD \u0111\u1ECBa ph\u01B0\u01A1ng), gi\xE1 v\xE0ng th\u1EBF gi\u1EDBi giao ngay \u1EDF m\u1EE9c 1.773,14 USD/Ounce. So v\u1EDBi ch\u1ED1t phi\xEAn cu\u1ED1i tu\u1EA7n, v\xE0ng b\u1EADt t\u0103ng kho\u1EA3ng 2 USD/Ounce, hi\u1EC7n \u0111ang ph\xE1 \u0111\u1EC9nh 8 n\u0103m.",date:"Ng\xE0y 29/06/2020 09:18 AM",link:"'#'",IsNew:!0},{img:"images/jewelry/Hinh2.jpg",title:"Gi\xE1 v\xE0ng c\xF3 th\u1EC3 v\u1ECDt l\xEAn 55 tri\u1EC7u \u0111\u1ED3ng/l\u01B0\u1EE3ng, \u0111\u1EA7u t\u01B0 v\xE0ng d\xE0i h\u1EA1n \u0103n ch\u1EAFc l\xE3i",desc:"Nh\u1EADn \u0111\u1ECBnh gi\xE1 v\xE0ng c\xF3 kh\u1EA3 n\u0103ng t\u0103ng l\xEAn m\u1EE9c 55 tri\u1EC7u \u0111\u1ED3ng/l\u01B0\u1EE3ng. \u0110\xE3 \u0111\u1EA7u t\u01B0 ph\u1EA3i b\u1ECF ti\u1EC1n v\xE0o v\xE0ng \xEDt nh\u1EA5t 6 th\xE1ng \u0111\u1EBFn 1 n\u0103m th\xEC gi\xE1 v\xE0ng kh\xF3 c\xF3 th\u1EC3 xu\u1ED1ng \u0111\u01B0\u1EE3c.",date:"Ng\xE0y 29/06/2020 09:18 AM",link:"'#'",IsNew:!1},{img:"images/jewelry/Hinh3.jpg",title:"Gi\xE1 v\xE0ng h\xF4m nay 25/6: Lao d\u1ED1c sau phi\xEAn t\u0103ng s\u1ED1c, nh\xE0 \u0111\u1EA7u t\u01B0 ho\u1EA3ng lo\u1EA1n",desc:"S\xE1ng nay gi\xE1 v\xE0ng th\u1EBF gi\u1EDBi h\u1EA1 nhi\u1EC7t so v\u1EDBi h\xF4m nay nh\u01B0ng v\u1EABn duy tr\xEC \u1EDF \u0111\u1EC9nh 7 n\u0103m.",date:"Ng\xE0y 29/06/2020 09:18 AM",link:"'#'",IsNew:!1},{img:"images/jewelry/Hinh4.jpg",title:"Gi\xE1 v\xE0ng h\xF4m nay 16/6: B\u1EA5t ng\u1EDD quay \u0111\u1EA7u t\u0103ng m\u1EA1nh khi Trung Qu\u1ED1c lo s\u1EE3 \u1ED5 d\u1ECBch m\u1EDBi",desc:"Sau khi quay \u0111\u1EA7u gi\u1EA3m trong phi\xEAn giao d\u1ECBch ng\xE0y h\xF4m qua, s\xE1ng nay 16/6 gi\xE1 v\xE0ng b\u1EADt t\u0103ng tr\u1EDF l\u1EA1i.",date:"Ng\xE0y 29/06/2020 09:18 AM",link:"'#sec2'",IsNew:!1}],ListBanner:[{img:"images/jewelry/banner1.jpg",link:"#"},{img:"images/jewelry/banner1.jpg",link:"#sec1"},{img:"images/jewelry/banner1.jpg",link:"#sec2"}]}},computed:{NewsTop(){return this.ListNews.filter(function(o){return o.IsNew})},News(){let o=[];return this.ListNews.forEach((d,l)=>{d.IsNew==!1&&o.push(d)}),o}},mounted(){}},Bt=e("p",{class:"btn-call"},[e("a",{href:"tel:0907989297",class:"telhref",onclick:"ga('send', 'event', 'tel', 'click', 'fixed_phone');"},[e("img",{src:xt,style:{width:"100%"}})])],-1),Ht=b('<div class="menu"><div class="container"><div class="nav navbar row" id="nav"><p class="logo col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12"><a href="index.html"><img src="'+jt+'" width="100%"></a></p><div class="nav navbar-nav col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="fa fa-bars"></span></button><ul class="nav navbar-nav collapse navbar-collapse" id="navbarNavDropdown"><li><a href="./index.html">Trang ch\u1EE7</a></li><li><a href="./GioiThieu.html">Gi\u1EDBi thi\u1EC7u</a></li><li><a href="#">S\u1EA3n ph\u1EA9m</a></li><li><a href="./TinTuc.html">Tin T\u1EE9c</a></li><li><a href="./LienHe.html">Li\xEAn h\u1EC7</a></li></ul></div><div class="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12 search_procduct"><input type="text" class="form-control timsanpham" placeholder="T\xEAn s\u1EA3n ph\u1EA9m"><i class="glyphicon glyphicon-search tim"></i></div></div></div></div><div style="position:relative;padding-left:0;padding-right:0;"></div><div class="clearfix" style="margin-top:10px;margin-bottom:10px;"></div>',3),Tt={class:"container"},Pt={id:"SanPhamMoi"},Mt=e("h2",null,[e("span",null,"S\u1EA2N PH\u1EA8M M\u1EDAI")],-1),Rt={class:"row"},Gt={class:"photo"},Vt=["src"],Qt={class:"id_product"},Lt={class:"name_product"},Ut=e("button",{class:"btn-custom"},"Xem th\xEAm",-1),Kt=e("div",{class:"clearfix",style:{"margin-top":"30px","margin-bottom":"30px"}},null,-1),Wt={id:"DanhMucSanPham"},Ft=e("h2",null,[e("span",null,"DANH M\u1EE4C S\u1EA2N PH\u1EA8M")],-1),Dt={class:"nav-fl"},Ot=["href"],Jt={key:0,class:"dropdown-content"},zt=["href"],Zt=b('<div class="clearfix" style="margin-top:30px;margin-bottom:30px;"></div><div id="SanPhamBanChay"><div class="container"><h2 class="sp-view"><span>S\u1EA2N PH\u1EA8M B\xC1N CH\u1EA0Y</span></h2><div class="row"><div class="col-lg-3 col-md-6 col-sm-12 col-12 bestseller"><h2>S\u1EA2N PH\u1EA8M B\xC1N CH\u1EA0Y</h2><h4>Kh\xE1m ph\xE1 nh\u1EEFng s\u1EA3n ph\u1EA9m b\xE1n ch\u1EA1y nh\u1EA5t t\u1EA1i Kim Long</h4><p class="photo"><img src="'+St+'" style="width:100%;"></p><button class="btn-view">Kh\xE1m ph\xE1 ngay</button></div></div></div></div><div class="clearfix" style="margin-top:30px;margin-bottom:30px;"></div>',3),Yt={class:"container"},Xt=e("div",{id:"SanPhamTieuBieu"},[e("h2",null,[e("span",null,"S\u1EA2N TI\xCAU BI\u1EC2U")])],-1),qt=e("div",{class:"clearfix",style:{"margin-top":"30px","margin-bottom":"30px"}},null,-1),$t={id:"TinTuc"},ei=e("h2",null,[e("span",null,"TIN T\u1EE8C - S\u1EF0 KI\u1EC6N")],-1),ti={class:"row"},ii=["onclick"],si={class:"photo"},ni=["src"],oi={class:"col-lg-5 col-md-7 col-sm-12 col-12"},li=["onclick"],ai={class:"col-lg-6 col-md-5 col-sm-12 col-12 photo"},ci=["src"],ri={class:"col-lg-6 col-md-7 col-sm-12 col-12",style:{"padding-right":"0px"}},di=e("div",{class:"clearfix"},null,-1),hi=e("div",{class:"clearfix",style:{"margin-top":"10px","margin-bottom":"10px"}},null,-1),ui=e("button",{class:"btn-custom"},"Xem th\xEAm",-1),pi=e("div",{class:"clearfix",style:{"margin-top":"30px","margin-bottom":"30px"}},null,-1),gi={id:"BieuDo"},mi=e("h2",null,[e("span",null,"BI\u1EC2U \u0110\u1ED2 GI\xC1 V\xC0NG")],-1),Ai={class:"row"},_i=e("div",{class:"col-lg-8 col-md-8 col-sm-12 col-12 bieudogiavang"},[e("a",{href:"http://www.kitco.com/images/live/gold.gif"},[e("img",{src:"http://www.kitco.com/images/live/gold.gif",alt:"",style:{width:"100%"}})])],-1),fi={class:"col-lg-4 col-md-4 col-sm-12 col-12"},wi={class:"group_banner"},vi=["href"],yi=["src"],ki=b('<div class="clearfix" style="margin-top:30px;margin-bottom:30px;"></div><div class="footer"><div class="container"><div class="row"><div class="col-lg-6 col-md-6 col-sm-12 col-12 info"><h5 style="font-weight:bold;">C\xD4NG TY TNHH MTV V\xC0NG B\u1EA0C \u0110\xC1 QU\xDD KIM LONG MEKONG</h5><h5>\u0110\u1ECBa ch\u1EC9: 3 - 5 \u0110\u1ED7 C\xF4ng T\u01B0\u1EDDng, P2, Tp Cao L\xE3nh, \u0110\u1ED3ng Th\xE1p</h5><h5>\u0110i\u1EC7n tho\u1EA1i: 0277 6250 351 - 0907 98 92 97</h5><h5>Email: kimlongmekong@gmail.com</h5></div><div class="col-lg-3 col-md-3 col-sm-12 col-12"><h5>Li\xEAn k\u1EBFt v\u1EDBi ch\xFAng t\xF4i</h5><ul class="social"><li><a href="#"><img src="'+Nt+'"></a></li><li><a href="#"><img src="'+Ct+'"></a></li></ul></div><div class="col-lg-3 col-md-3 col-sm-12 col-12 group_time"><h5>Gi\u1EDD l\xE0m vi\u1EC7c: Th\u1EE9 2 - th\u1EE9 7</h5><ul class="time"><li>S\xE1ng: 8:00 - 11:00</li><li>Chi\u1EC1u: 13:30 - 16:30</li></ul></div></div></div></div>',2);function bi(o,d,l,h,i,r){return s(),n("main",null,[Bt,Ht,e("div",Tt,[e("div",Pt,[Mt,e("div",Rt,[(s(!0),n(g,null,p(i.ListJewelry,(t,u)=>(s(),n("div",{class:"col-lg-3 col-md-4 col-sm-6 col-6 item",key:u},[e("p",Gt,[e("img",{src:t.img,style:{width:"100%"}},null,8,Vt)]),e("p",Qt,a(t.id_product),1),e("p",Lt,a(t.name),1)]))),128))]),Ut]),Kt,e("div",Wt,[Ft,e("nav",Dt,[(s(!0),n(g,null,p(i.ListMenu,(t,u)=>(s(),n("div",{class:"dropdown",key:u},[e("a",{href:t.link,class:"dropbtn"},a(t.menu),9,Ot),t.sub.length!=0?(s(),n("div",Jt,[(s(!0),n(g,null,p(t.sub,(_,v)=>(s(),n("a",{href:_.link,key:v},a(_.menu),9,zt))),128))])):V("",!0)]))),128))])])]),Zt,e("div",Yt,[Xt,qt,e("div",$t,[ei,e("div",ti,[(s(!0),n(g,null,p(r.NewsTop,(t,u)=>(s(),n("div",{class:"col-lg-7 col-md-5 col-sm-12 col-12 tintuc_news",onclick:"window.location.href="+t.link,key:u},[e("p",si,[e("img",{src:t.img,style:{width:"100%"}},null,8,ni)]),e("h5",null,a(t.title),1),e("p",null,a(t.desc),1),e("h6",null,a(t.date),1)],8,ii))),128)),e("div",oi,[(s(!0),n(g,null,p(r.News,(t,u)=>(s(),n("div",{class:"tintuc row",onclick:"window.location.href="+t.link,key:u},[e("div",ai,[e("img",{src:t.img,style:{width:"100%"}},null,8,ci)]),e("div",ri,[e("h5",null,a(t.title),1),e("p",null,a(t.desc),1),e("h6",null,a(t.date),1)]),di],8,li))),128))])]),hi,ui]),pi,e("div",gi,[mi,e("div",Ai,[_i,e("div",fi,[e("ul",wi,[(s(!0),n(g,null,p(i.ListBanner,(t,u)=>(s(),n("li",{key:u},[e("a",{href:t.link},[e("img",{src:t.img},null,8,yi)],8,vi)]))),128))])])])])]),ki])}var Ii=f(Et,[["render",bi]]);const xi=[{path:"/summary-vue",name:"Home",component:It},{path:"/about",name:"About",component:()=>Z(()=>import("./About.252901d5.js"),["assets/About.252901d5.js","assets/vendor.75ab2dbf.js"])},{path:"/summary-vue/jewelry",name:"Jewelry",component:Ii}],ji=Q({history:L(),routes:xi});var Si="";const Ni=K;window.$=Ni;const C=U(O);C.use(Si);C.use(ji).mount("#app");export{f as _};