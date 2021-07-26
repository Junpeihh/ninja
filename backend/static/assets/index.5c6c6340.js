var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,c=(e,a)=>{for(var o in a||(a={}))s.call(a,o)&&r(e,o,a[o]);if(t)for(var o of t(a))n.call(a,o)&&r(e,o,a[o]);return e},i=(e,t)=>a(e,o(t));import{p as l,a as d,o as m,c as u,r as p,b as g,w as f,F as k,k as y,d as v,e as h,t as w,f as b,g as P,h as j,u as C,i as _,_ as A,j as x,l as I,m as L,n as O,q as S,s as U,v as Q}from"./vendor.8c1a1f8f.js";l("data-v-4b23e37a"),d();const D={},N={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};D.render=function(e,a){return m(),u("img",N)};const R={components:{Logo:D}},V=f("data-v-1f23ce5f");l("data-v-1f23ce5f");const q={class:"header"},z={class:"header-wrapper"},E={class:"flex items-center"},$=g("p",{class:"pl-3 select-none"},"Ninja",-1);d();const K=V(((e,a,o,t,s,n)=>{const r=p("Logo");return m(),u("div",q,[g("div",z,[g("div",E,[g(r,{class:"h-10 w-10"}),$])])])}));R.render=K,R.__scopeId="data-v-1f23ce5f";const T={class:"main"},Z={setup:e=>(e,a)=>{const o=p("router-view");return m(),u(k,null,[g(R),g("div",T,[g(o)])],64)}};const B=y.create({prefixUrl:"/api",retry:{limit:0}});const J={setup(){const e=C();_();let a=v({nickName:void 0,timestamp:void 0});const o=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void t();const o=await function(e){const a=new URLSearchParams;return a.set("eid",e),B.get("userinfo",{searchParams:a}).json()}(e);if(!o)return A.error("获取用户信息失败，请重重新登录"),void t();a.nickName=o.data.nickName,a.timestamp=new Date(o.data.timestamp).toLocaleString()}catch(e){console.error(e)}};h(o);const t=()=>{localStorage.removeItem("eid"),e.push("/login")};return i(c({},w(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:o,logout:t,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return B.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?A.error(a.message):(A.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)}})}},W={class:"content"},F={class:"card"},H=g("div",{class:"card-header"},[g("p",{class:"card-title"},"个人中心")],-1),X={class:"card-body"},G={class:"card-footer"},M=I("退出登录"),Y=I("删除账号"),ee={class:"card"},ae=g("div",{class:"card-header"},[g("p",{class:"card-title"},"常见活动位置"),g("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1),oe={class:"card-body"},te={class:"pr-2"};J.render=function(e,a,o,t,s,n){const r=p("el-button");return m(),u("div",W,[g("div",F,[H,g("div",X,[g("p",null,"昵称："+b(e.nickName),1),g("p",null,"更新时间："+b(e.timestamp),1)]),g("div",G,[g(r,{size:"small",auto:"",onClick:t.logout},{default:P((()=>[M])),_:1},8,["onClick"]),g(r,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:P((()=>[Y])),_:1},8,["onClick"])])]),g("div",ee,[ae,g("div",oe,[g("ul",null,[(m(!0),u(k,null,j(t.activity,((e,a)=>(m(),u("li",{key:a,class:"leading-normal"},[g("span",null,b(e.name)+"：",1),g("span",te,b(e.address),1),e.href?(m(),u("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>t.openUrlWithJD(e.href)},"直达链接",8,["onClick"])):x("",!0)])))),128))])])])])};const se={setup(){const e=C();_();let a=v({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1});const o=async()=>{try{const e=(await B.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd}catch(e){console.error(e)}},t=async()=>{try{const e=await B.get("qrcode").json();a.token=e.data.token,a.okl_token=e.data.okl_token,a.cookies=e.data.cookies,a.QRCode=e.data.QRCode,a.QRCode&&(a.waitLogin=!0,clearInterval(a.timer),a.timer=setInterval(s,3e3))}catch(e){console.error(e),A.error("生成二维码失败！请重试或放弃")}},s=async()=>{try{const o=await function(e){return B.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==o?void 0:o.data.errcode){case 0:localStorage.setItem("eid",o.data.eid),A.success(o.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:A.error(o.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(o){clearInterval(a.timer),a.waitLogin=!1}};return h((()=>{o(),t()})),i(c({},w(a)),{getInfo:o,getQrcode:t,showQrcode:async()=>{a.qrCodeVisibility=!0},ckeckLogin:s,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const e=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],o=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(e&&o){const a=await function(e){return B.post("cklogin",{json:e}).json()}({pt_key:e,pt_pin:o});200===a.code&&a.data.eid?(localStorage.setItem("eid",a.data.eid),A.success(a.message)):A.error(a.message||"cookie 解析失败，请检查后重试！")}else A.error("cookie 解析失败，请检查后重试！")}catch(e){console.error(e)}}})}},ne={class:"content"},re={class:"card"},ce={class:"card-header"},ie={class:"flex items-center justify-between"},le=g("p",{class:"card-title"},"扫码登录",-1),de={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},me=g("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1),ue={class:"card-body text-center"},pe={key:0,class:"flex flex-col w-48 m-auto mt-4"},ge=I("扫描二维码登录"),fe=I("跳转到京东 App 登录"),ke=g("div",{class:"card-footer"},null,-1),ye={class:"card hidden"},ve={class:"card-header"},he={class:"flex items-center justify-between"},we=g("p",{class:"card-title"},"CK 登录",-1),be={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Pe=g("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),je={class:"card-body text-center"},Ce=I("登录"),_e=g("div",{class:"card-footet"},null,-1);se.render=function(e,a,o,t,s,n){const r=p("el-button"),c=p("el-input");return m(),u("div",ne,[g("div",re,[g("div",ce,[g("div",ie,[le,g("span",de,"余量："+b(e.marginCount),1)]),me]),g("div",ue,[e.qrCodeVisibility?(m(),u("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,["src"])):(m(),u("div",pe,[g(r,{type:"primary",round:"",onClick:t.showQrcode},{default:P((()=>[ge])),_:1},8,["onClick"]),g(r,{class:"mt-4 ml-0",type:"primary",round:"",onClick:t.jumpLogin},{default:P((()=>[fe])),_:1},8,["onClick"])]))]),ke]),g("div",ye,[g("div",ve,[g("div",he,[we,g("span",be,"余量："+b(e.marginCount),1)]),Pe]),g("div",je,[g(c,{modelValue:e.cookie,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),g(r,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:P((()=>[Ce])),_:1},8,["onClick"])]),_e])])};const Ae=[{path:"/",component:J},{path:"/login",component:se}],xe=L({history:O(),routes:Ae}),Ie=[U,Q,A],Le=[A],Oe=S(Z);Ie.forEach((e=>{Oe.component(e.name,e)})),Le.forEach((e=>{Oe.use(e)})),Oe.use(xe),Oe.mount("#app");
