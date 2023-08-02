import{n as b}from"./index-cf83e810.js";import{C as B}from"./ChapterTitle-77e77e82.js";import{_ as f,o as s,a as o,e as t,t as k,E as I,n as L,f as v,r as u,i as m,F as _,b as h,u as w,c as x,p as C,l as D}from"./index-4e481729.js";const T={name:"IconDescriptionComponent",props:{data:{type:Object,default:()=>{}},count:{type:Number,default:0}},setup(){return{}}},$={class:"image"},N=["src"],S={class:"title"},q={class:"sub-title"};function V(n,c,a,e,d,p){return s(),o("div",{class:"icon-description",style:I({"--count":a.count})},[t("div",$,[t("img",{src:a.data.img},null,8,N)]),t("span",S,k(a.data.title),1),t("span",q,k(a.data.subTitle),1)],4)}const j=f(T,[["render",V],["__scopeId","data-v-a7dd8969"]]),z="/assets/icon-arrow-down-0686d86f.svg";const A={name:"ExpendBlock",props:{item:{type:Object,default:()=>{}},index:{type:Number,default:0}},emits:["block-expend"],setup(n,{emit:c}){return{handleClick:()=>{c("block-expend",{isExpend:!n.item.isExpend,index:n.index})},IconArrowDown:z}}},F=["src"],H=["innerHTML"];function M(n,c,a,e,d,p){return s(),o("div",{class:L(["expend-block",{active:a.item.isExpend}])},[t("div",{class:"title",onClick:c[0]||(c[0]=(...r)=>e.handleClick&&e.handleClick(...r))},[t("div",null,k(a.item.question),1),t("img",{src:e.IconArrowDown},null,8,F)]),t("div",{innerHTML:a.item.answer,class:"content"},null,8,H)],2)}const O=f(A,[["render",M],["__scopeId","data-v-c2bb5d9b"]]),P="/assets/image-notice-banner-b9c8a1af.png";const G={name:"NoticePage",components:{ChapterTitle:B,IconDescription:j,ExpendBlock:O},setup(){const n=v(b.promiseList),c=v(b.reassureList),a=v(b.questionList);return{promiseList:n,reassureList:c,questionList:a,showExpendBlock:d=>{a.value.forEach(p=>{p.isExpend=!1}),setTimeout(()=>{a.value[d.index].isExpend=d.isExpend},300)},ImageBanner:P}}},g=n=>(C("data-v-c11b7278"),n=n(),D(),n),J={class:"notice"},K={class:"banner"},Q=g(()=>t("h1",{class:"title"},"服務須知",-1)),R=["src"],U={class:"why-us"},W=g(()=>t("div",{class:"button-title"},"專員三大保證",-1)),X={class:"icon-description-block"},Y=g(()=>t("div",{class:"button-title"},"四大安心服務",-1)),Z={class:"icon-description-block"},tt=w('<div class="our-right" data-v-c11b7278><span data-v-c11b7278>* 不提供拆卸窗戶及窗簾（以內部清潔為主，無法爬出非可安全站立位置清潔）。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供垃圾清運丟棄，但可協助打包垃圾（大樓若有設置回收處，可於服務後協助丟棄）。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供進行除蟲害、（蟲）動物屍體處理（包含螞蟻、蟑螂、蜂窩、禽鳥類等）。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供清潔水晶、瓷器、古董、字畫、模型、花瓶等具紀念價值或易碎品。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供移動或抬起大型傢具、超過體力負荷之重物進行清潔（超過10公斤）。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供陳年污垢、深層黴菌垢、鏽蝕或是壁癌。</span><br data-v-c11b7278><span data-v-c11b7278> *不提供特殊清潔項目（如事故現場清潔、水災後、火災後、意外身故或自然身故之現場等）。 </span><br data-v-c11b7278><span data-v-c11b7278>* 不提供環境過於髒亂、惡臭、嘔吐物、排泄物之清潔。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供提供採購、烹飪、保姆、看護、照護寵物等工作。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供挑高超過3.2米之區域。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供抽油煙機機身、瓦斯爐芯拆卸清洗。</span><br data-v-c11b7278><span data-v-c11b7278> * 不提供冷氣機、洗衣機內部拆洗（需另預約家電清潔服務）。 </span><br data-v-c11b7278><span data-v-c11b7278>* 不提供植物修剪或庭院除草、景觀水池清理。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供大量噴漆、水泥塊、殘膠清理。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供具危險性之化學物質處理。</span><br data-v-c11b7278><span data-v-c11b7278>* 不提供以特定方式(如跪地擦拭)完成清潔工作。</span><br data-v-c11b7278><span data-v-c11b7278>* 不進行清理水塔、通水管等水電服務。</span><br data-v-c11b7278><div data-v-c11b7278> 立亮居家家飾清潔保有最終修改變更解釋之權利，如有任何變更內容將公佈於本網，恕不另行通知。 </div></div>',1),at={class:"question"},et={class:"expend"};function nt(n,c,a,e,d,p){const r=u("ChapterTitle"),E=u("IconDescription"),y=u("ExpendBlock");return s(),o("div",J,[t("div",K,[Q,t("img",{src:e.ImageBanner},null,8,R)]),t("div",U,[m(r,{idData:"ct-n1",title:"為什麼選擇我們"}),W,t("div",X,[(s(!0),o(_,null,h(e.promiseList,(l,i)=>(s(),x(E,{key:`item.title-${i}`,data:l,count:e.promiseList.length},null,8,["data","count"]))),128))]),Y,t("div",Z,[(s(!0),o(_,null,h(e.reassureList,(l,i)=>(s(),x(E,{key:`item.title-${i}`,data:l,count:e.reassureList.length},null,8,["data","count"]))),128))])]),(s(),o(_,{key:0},[m(r,{idData:"ct-n2",title:"不服務的內容"}),tt],64)),t("div",at,[m(r,{idData:"ct-n3",title:"常見問題"}),t("div",et,[(s(!0),o(_,null,h(e.questionList,(l,i)=>(s(),x(y,{onBlockExpend:e.showExpendBlock,key:i,item:l,index:i},null,8,["onBlockExpend","item","index"]))),128))])])])}const it=f(G,[["render",nt],["__scopeId","data-v-c11b7278"]]);export{it as default};
