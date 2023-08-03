import{h as C}from"./index-7fc945f4.js";import{g as O,S as Z,a as ee,I as te,b as ne}from"./icon-swiper-prev-d5cac8fc.js";import{_ as B,d as ae,r as g,o as f,c as N,w as G,a as h,b as F,e as o,F as E,f as D,g as se,h as oe,t as J,C as re,i as $,n as ie,I as le,j as ue,k as K,p as ce,l as de}from"./index-cfba8cc0.js";import{C as pe}from"./ChapterTitle-bb40faac.js";function me(t){let{swiper:e,extendParams:l,on:s,emit:r,params:u}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},l({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let c,p,i=u&&u.autoplay?u.autoplay.delay:3e3,y=u&&u.autoplay?u.autoplay.delay:3e3,a,m=new Date().getTime,P,x,I,A,k,v;function M(n){!e||e.destroyed||!e.wrapperEl||n.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",M),w())}const q=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?P=!0:P&&(y=a,P=!1);const n=e.autoplay.paused?a:m+y-new Date().getTime();e.autoplay.timeLeft=n,r("autoplayTimeLeft",n,n/i),p=requestAnimationFrame(()=>{q()})},Q=()=>{let n;return e.virtual&&e.params.virtual.enabled?n=e.slides.filter(d=>d.classList.contains("swiper-slide-active"))[0]:n=e.slides[e.activeIndex],n?parseInt(n.getAttribute("data-swiper-autoplay"),10):void 0},L=n=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(p),q();let _=typeof n>"u"?e.params.autoplay.delay:n;i=e.params.autoplay.delay,y=e.params.autoplay.delay;const d=Q();!Number.isNaN(d)&&d>0&&typeof n>"u"&&(_=d,i=d,y=d),a=_;const T=e.params.speed,z=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(T,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,T,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(T,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,T,!0,!0),r("autoplay")),e.params.cssMode&&(m=new Date().getTime(),requestAnimationFrame(()=>{L()})))};return _>0?(clearTimeout(c),c=setTimeout(()=>{z()},_)):requestAnimationFrame(()=>{z()}),_},R=()=>{e.autoplay.running=!0,L(),r("autoplayStart")},b=()=>{e.autoplay.running=!1,clearTimeout(c),cancelAnimationFrame(p),r("autoplayStop")},S=(n,_)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(c),n||(v=!0);const d=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",M):w()};if(e.autoplay.paused=!0,_){k&&(a=e.params.autoplay.delay),k=!1,d();return}a=(a||e.params.autoplay.delay)-(new Date().getTime()-m),!(e.isEnd&&a<0&&!e.params.loop)&&(a<0&&(a=0),d())},w=()=>{e.isEnd&&a<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(m=new Date().getTime(),v?(v=!1,L(a)):L(),e.autoplay.paused=!1,r("autoplayResume"))},H=()=>{if(e.destroyed||!e.autoplay.running)return;const n=O();n.visibilityState==="hidden"&&(v=!0,S(!0)),n.visibilityState==="visible"&&w()},V=n=>{n.pointerType==="mouse"&&(v=!0,S(!0))},j=n=>{n.pointerType==="mouse"&&e.autoplay.paused&&w()},U=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",V),e.el.addEventListener("pointerleave",j))},W=()=>{e.el.removeEventListener("pointerenter",V),e.el.removeEventListener("pointerleave",j)},X=()=>{O().addEventListener("visibilitychange",H)},Y=()=>{O().removeEventListener("visibilitychange",H)};s("init",()=>{e.params.autoplay.enabled&&(U(),X(),m=new Date().getTime(),R())}),s("destroy",()=>{W(),Y(),e.autoplay.running&&b()}),s("beforeTransitionStart",(n,_,d)=>{e.destroyed||!e.autoplay.running||(d||!e.params.autoplay.disableOnInteraction?S(!0,!0):b())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){b();return}x=!0,I=!1,v=!1,A=setTimeout(()=>{v=!0,I=!0,S(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!x)){if(clearTimeout(A),clearTimeout(c),e.params.autoplay.disableOnInteraction){I=!1,x=!1;return}I&&e.params.cssMode&&w(),I=!1,x=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(k=!0)}),Object.assign(e.autoplay,{start:R,stop:b,pause:S,resume:w})}const fe=ae({name:"ImageSwiperComponent",components:{Swiper:Z,SwiperSlide:ee},props:{list:{type:Array,default:()=>[]}},setup(){const t=D(null),e=u=>{t.value=u},l=()=>{t.value.slidePrev()},s=()=>{t.value.slideNext()},r=()=>{const u=document.getElementById("swiper-content").clientHeight;let c=0;const p=setInterval(()=>{const i=document.getElementById("swiper-content").clientHeight;(c>10||i>u)&&clearInterval(p);const y=document.querySelector(".swiper-next");y.style.top=`${i/2-20}px`;const a=document.querySelector(".swiper-prev");a.style.top=`${i/2-20}px`,c++},50)};return se(()=>{r()}),window.onresize=()=>{r()},{onSwiper:e,swiperPrev:l,swiperNext:s,IconNext:te,IconPrev:ne,modules:[me]}},computed:{}}),_e=["src"],ye=["src"],ve=["src"];function ge(t,e,l,s,r,u){const c=g("SwiperSlide"),p=g("Swiper");return f(),N(p,{id:"swiper-box",loop:!0,modules:t.modules,autoplay:{delay:4500},"follow-finger":!1,onSwiper:t.onSwiper},{default:G(()=>[(f(!0),h(E,null,F(t.list,i=>(f(),N(c,{key:i.link,class:"swiper-slide"},{default:G(()=>[o("img",{src:i.url},null,8,_e)]),_:2},1024))),128)),o("div",{class:"swiper-prev",onClick:e[0]||(e[0]=(...i)=>t.swiperPrev&&t.swiperPrev(...i))},[o("img",{src:t.IconPrev},null,8,ye)]),o("div",{class:"swiper-next",onClick:e[1]||(e[1]=(...i)=>t.swiperNext&&t.swiperNext(...i))},[o("img",{src:t.IconNext},null,8,ve)])]),_:1},8,["modules","onSwiper"])}const we=B(fe,[["render",ge],["__scopeId","data-v-df9cebf3"]]);const he={name:"ReservationIconComponent",props:{title:{type:String,default:""},icon:{type:String,default:""},index:{type:Number,default:0}},setup(t){return{innerIndex:oe(()=>t.index<10?`0${t.index}`:t.index)}}},Ie={class:"reservation-icon"},Se={class:"index"},Te=["src"],xe={class:"title"};function Le(t,e,l,s,r,u){return f(),h("div",Ie,[o("div",Se,J(s.innerIndex),1),o("img",{src:l.icon},null,8,Te),o("div",xe,J(l.title),1)])}const be=B(he,[["render",Le],["__scopeId","data-v-fb3d36a0"]]);const Ce={name:"ImageCompareCardComponent",components:{CustomButton:re},props:{imgData:{type:Object,default:()=>{}},isFirst:{type:Boolean,default:!1}},setup(){return{}}},Ee=["src"];function De(t,e,l,s,r,u){const c=g("CustomButton");return f(),h("div",{class:ie(["image-compare-card",{"is-first":l.isFirst}])},[o("img",{src:l.imgData.image},null,8,Ee),$(c,{class:"button",full:"",text:l.imgData.btnText},null,8,["text"])],2)}const $e=B(Ce,[["render",De],["__scopeId","data-v-72616f38"]]);const Ne={name:"IndexPage",components:{ImageSwiper:we,ChapterTitle:pe,ReservationIcon:be,ImageCompareCard:$e},setup(){console.log("homeData",C);const t=D(C.bannerList),e=D(C.reservationIconList),l=D(C.performanceList);return{bannerList:t,reservationIconList:e,performanceList:l,ImageLogo:le,IconLine:ue}}},Be=t=>(ce("data-v-cae9d350"),t=t(),de(),t),Pe=Be(()=>o("div",{class:"blank"},null,-1)),ke={class:"reservation"},Oe={class:"reservation__description"},Fe={href:"https://lin.ee/8qurIGn"},Ae=["src"],Me={class:"reservation__icons"},qe={class:"performance"},Re={class:"performance__items"};function He(t,e,l,s,r,u){const c=g("ImageSwiper"),p=g("ChapterTitle"),i=g("ReservationIcon"),y=g("ImageCompareCard");return f(),h(E,null,[Pe,$(c,{id:"swiper-content",list:s.bannerList},null,8,["list"]),o("div",ke,[$(p,{idData:"ct-h1",title:"預約流程"}),o("div",Oe,[K(" 歡迎加入官方LINE@ "),o("a",Fe,[o("img",{src:s.IconLine},null,8,Ae)]),K(" 立即預約，將由專人為您服務 ")]),o("div",Me,[(f(!0),h(E,null,F(s.reservationIconList,(a,m)=>(f(),N(i,{key:m,class:"reservation__icon",title:a.title,icon:a.icon,index:m+1},null,8,["title","icon","index"]))),128))])]),o("div",qe,[$(p,{idData:"ct-h2",title:"清潔實績",white:""}),o("div",Re,[(f(!0),h(E,null,F(s.performanceList,(a,m)=>(f(),N(y,{key:m,class:"performance__item","img-data":a},null,8,["img-data"]))),128))])])],64)}const Je=B(Ne,[["render",He],["__scopeId","data-v-cae9d350"]]);export{Je as default};
