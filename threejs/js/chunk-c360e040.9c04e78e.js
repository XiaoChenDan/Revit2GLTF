(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c360e040","chunk-2a15081e","chunk-7b142a8c"],{"06f3":function(e,t,a){},"47dd":function(e,t,a){},"7b71":function(e,t,a){"use strict";a("47dd")},"8e8d":function(e,t,a){"use strict";a.r(t);var l=a("f2bf"),n=a("9ee5"),o=Object(l.defineComponent)({name:"Opportunity"});const c={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},r=[Object(l.createElementVNode)("path",{fill:"currentColor",d:"M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"},null,-1)];var i=Object(n.a)(o,[["render",function(e,t,a,n,o,i){return Object(l.openBlock)(),Object(l.createElementBlock)("svg",c,r)}]]),s=a("93a6"),u=a("a642"),d=a("d543");const m={key:0,class:"editMenu"},b={class:"custom-tabs-label"},p={class:"custom-tabs-label"};n=Object(l.defineComponent)({setup(e,{expose:t}){const a=Object(l.ref)(!1),n=Object(l.ref)("first"),o=Object(l.ref)(),c=()=>{Object(l.nextTick)(()=>{o.value?o.value.showEnvironmentData():c()})};return Object(l.onMounted)(()=>{}),t({dialogVisible:a,showEnvironmentlData:c}),(e,t)=>{const c=Object(l.resolveComponent)("el-icon"),r=Object(l.resolveComponent)("el-tooltip"),v=Object(l.resolveComponent)("el-tab-pane");var O=Object(l.resolveComponent)("el-tabs");return a.value?(Object(l.openBlock)(),Object(l.createElementBlock)("div",m,[Object(l.createVNode)(O,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),type:"border-card","tab-position":"left"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(v,{name:"first"},{label:Object(l.withCtx)(()=>[Object(l.createVNode)(r,{effect:"dark",content:"灯光环境",placement:"right"},{default:Object(l.withCtx)(()=>[Object(l.createElementVNode)("span",b,[Object(l.createVNode)(c,null,{default:Object(l.withCtx)(()=>[Object(l.createVNode)(Object(l.unref)(i))]),_:1})])]),_:1})]),default:Object(l.withCtx)(()=>[Object(l.createVNode)(u.default,{ref:(e,t)=>{t.environmentEditRef=e,o.value=e}},null,512)]),_:1}),Object(l.createVNode)(v,{name:"second"},{label:Object(l.withCtx)(()=>[Object(l.createVNode)(r,{effect:"dark",content:"材质库",placement:"right"},{default:Object(l.withCtx)(()=>[Object(l.createElementVNode)("span",p,[Object(l.createVNode)(c,null,{default:Object(l.withCtx)(()=>[Object(l.createVNode)(Object(l.unref)(s.a))]),_:1})])]),_:1})]),default:Object(l.withCtx)(()=>[Object(l.createVNode)(d.default)]),_:1})]),_:1},8,["modelValue"])])):Object(l.createCommentVNode)("",!0)}}}),a("7b71"),t.default=n},"93a6":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a("f2bf");t=a("9ee5"),a=Object(l.defineComponent)({name:"Tickets"});const n={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},o=[Object(l.createElementVNode)("path",{fill:"currentColor",d:"M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"},null,-1)];var c=Object(t.a)(a,[["render",function(e,t,a,c,r,i){return Object(l.openBlock)(),Object(l.createElementBlock)("svg",n,o)}]])},"9ee5":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var l=(e,t)=>{var a,l,n=e.__vccOpts||e;for([a,l]of t)n[a]=l;return n}},a416:function(e,t,a){"use strict";a("d920")},a642:function(e,t,a){"use strict";a.r(t);var l=a("f2bf"),n=a("d009");Object(l.pushScopeId)("data-v-67c4605e");const o={class:"demo-collapse"},c=["src"];Object(l.popScopeId)();var r=Object(l.defineComponent)({setup(e,{expose:t}){const r=Object(l.defineAsyncComponent)(()=>a.e("chunk-5e673cfd").then(a.bind(null,"9d00"))),i=Object(l.ref)(),s=Object(l.ref)(["环境","灯光"]),u=Object(l.ref)(""),d=Object(l.ref)(),m=Object(l.ref)(),b=Object(l.ref)(),p=Object(l.ref)(),v=Object(l.ref)(),O=Object(l.ref)(),j=Object(l.ref)(),f=Object(l.ref)(),h=Object(l.ref)(),V=Object(l.ref)(),g=Object(l.ref)(!0),w=Object(l.ref)(!1),x={aoPower:"aoPower",aoSmoothing:"aoSmoothing",aoMapGamma:"aoMapGamma",lightMapGamma:"lightMapGamma",lightMapSaturation:"lightMapSaturation",envPower:"envPower",roughnessPower:"roughnessPower",sunIntensity:"sunIntensity",mapContrast:"mapContrast",lightMapContrast:"lightMapContrast",smoothingPower:"smoothingPower",irradianceIntensity:"irradianceIntensity",radianceIntensity:"radianceIntensity"},C=()=>{i.value.dialogVisible=!0},N=()=>{n.a.scene.showEnvironment=g.value},E=()=>{n.a.scene.showBackground=w.value},y=(e,t)=>{n.a.scene.setEmviormentParameter(e,t)};Object(l.ref)(!1);const I=e=>{n.a.scene.ambientLight.color.set(e),n.a.scene.enableRender()},k=e=>{n.a.scene.ambientLight.intensity=e,n.a.scene.enableRender()},_=e=>{n.a.scene.directionalLight.color.set(e),n.a.scene.enableRender()},z=e=>{n.a.scene.directionalLight.intensity=e,n.a.scene.enableRender()};return t({showEnvironmentData:()=>{var e;null!=(e=n.a.scene.scene.environment)&&e.userData.previewPath?u.value=null==(e=n.a.scene.scene.environment)?void 0:e.userData.previewPath:u.value="./no.png",v.value=n.a.scene.getEmviormentParameter("sunIntensity"),O.value=n.a.scene.getEmviormentParameter("smoothingPower"),V.value=n.a.scene.getEmviormentParameter("envPower"),j.value=n.a.scene.getEmviormentParameter("aoPower"),f.value=n.a.scene.getEmviormentParameter("aoSmoothing"),h.value=n.a.scene.getEmviormentParameter("radianceIntensity"),d.value="#"+n.a.scene.ambientLight.color.getHexString(),m.value=n.a.scene.ambientLight.intensity,p.value="#"+n.a.scene.directionalLight.color.getHexString(),b.value=n.a.scene.directionalLight.intensity,w.value=n.a.scene.showBackground,g.value=n.a.scene.showEnvironment}}),(e,t)=>{const a=Object(l.resolveComponent)("el-switch"),n=Object(l.resolveComponent)("el-form-item"),P=Object(l.resolveComponent)("el-slider"),S=Object(l.resolveComponent)("el-form"),B=Object(l.resolveComponent)("el-collapse-item"),M=Object(l.resolveComponent)("el-color-picker");var U=Object(l.resolveComponent)("el-collapse");return Object(l.openBlock)(),Object(l.createElementBlock)(l.Fragment,null,[Object(l.createElementVNode)("div",o,[Object(l.createVNode)(U,{modelValue:s.value,"onUpdate:modelValue":t[21]||(t[21]=e=>s.value=e)},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(B,{title:"环境",name:"环境"},{default:Object(l.withCtx)(()=>[Object(l.createElementVNode)("img",{class:"environmentImg",src:u.value,onClick:C},null,8,c),Object(l.createVNode)(S,{size:"small","label-position":"left","label-width":"100px",onSubmit:t[14]||(t[14]=Object(l.withModifiers)(()=>{},["prevent"])),style:{"margin-left":"10px","margin-right":"10px","margin-top":"30px","margin-bottom":"5px"}},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(n,{label:"环境贴图"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(a,{modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=e=>g.value=e),onChange:N},null,8,["modelValue"])]),_:1}),Object(l.createVNode)(n,{label:"显示天空盒"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(a,{modelValue:w.value,"onUpdate:modelValue":t[1]||(t[1]=e=>w.value=e),onChange:E},null,8,["modelValue"])]),_:1}),Object(l.createVNode)(n,{label:"环境贴图强度"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(P,{size:"small",min:-10,max:10,step:.01,"show-input":!0,modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=e=>v.value=e),onInput:t[3]||(t[3]=e=>y(x.sunIntensity,v.value)),"show-input-controls":!1,class:"my-slider"},null,8,["step","modelValue"])]),_:1}),Object(l.createVNode)(n,{label:"环境贴图对比度"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(P,{size:"small",min:-10,max:10,step:.01,"show-input":!0,modelValue:O.value,"onUpdate:modelValue":t[4]||(t[4]=e=>O.value=e),onInput:t[5]||(t[5]=e=>y(x.smoothingPower,O.value)),"show-input-controls":!1,class:"my-slider"},null,8,["step","modelValue"])]),_:1}),Object(l.createVNode)(n,{label:"环境贴图增强值"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(P,{size:"small",min:-20,max:20,step:.01,"show-input":!0,modelValue:V.value,"onUpdate:modelValue":t[6]||(t[6]=e=>V.value=e),onInput:t[7]||(t[7]=e=>y(x.envPower,V.value)),"show-input-controls":!1,class:"my-slider"},null,8,["step","modelValue"])]),_:1}),Object(l.createVNode)(n,{label:"AO影响值"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(P,{size:"small",min:-5,max:5,step:.01,"show-input":!0,modelValue:j.value,"onUpdate:modelValue":t[8]||(t[8]=e=>j.value=e),onInput:t[9]||(t[9]=e=>y(x.aoPower,j.value)),"show-input-controls":!1,class:"my-slider"},null,8,["step","modelValue"])]),_:1}),Object(l.createVNode)(n,{label:"AO平滑值"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(P,{size:"small",min:0,max:3,step:.01,"show-input":!0,modelValue:f.value,"onUpdate:modelValue":t[10]||(t[10]=e=>f.value=e),onInput:t[11]||(t[11]=e=>y(x.aoSmoothing,f.value)),"show-input-controls":!1,class:"my-slider"},null,8,["step","modelValue"])]),_:1}),Object(l.createVNode)(n,{label:"环境幅度值"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(P,{size:"small",min:-50,max:50,step:.01,"show-input":!0,modelValue:h.value,"onUpdate:modelValue":t[12]||(t[12]=e=>h.value=e),onInput:t[13]||(t[13]=e=>y(x.radianceIntensity,h.value)),"show-input-controls":!1,class:"my-slider"},null,8,["step","modelValue"])]),_:1})]),_:1})]),_:1}),Object(l.createVNode)(B,{title:"灯光",name:"灯光"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(S,{size:"small","label-position":"left","label-width":"100px",onSubmit:t[17]||(t[17]=Object(l.withModifiers)(()=>{},["prevent"])),style:{"margin-left":"10px","margin-right":"10px","margin-top":"5px","margin-bottom":"5px"}},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(n,{label:"环境光光强度"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(P,{size:"small",min:0,max:10,step:.1,"show-input":!0,modelValue:m.value,"onUpdate:modelValue":t[15]||(t[15]=e=>m.value=e),onInput:k,"show-input-controls":!1,class:"my-slider"},null,8,["step","modelValue"])]),_:1}),Object(l.createVNode)(n,{label:"环境光颜色"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(M,{modelValue:d.value,"onUpdate:modelValue":t[16]||(t[16]=e=>d.value=e),onActiveChange:I},null,8,["modelValue"])]),_:1})]),_:1}),Object(l.createVNode)(S,{size:"small","label-position":"left","label-width":"100px",onSubmit:t[20]||(t[20]=Object(l.withModifiers)(()=>{},["prevent"])),style:{"margin-left":"10px","margin-right":"10px","margin-top":"5px","margin-bottom":"5px"}},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(n,{label:"直接光强度"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(P,{size:"small",min:0,max:10,step:.1,"show-input":!0,modelValue:b.value,"onUpdate:modelValue":t[18]||(t[18]=e=>b.value=e),onInput:z,"show-input-controls":!1,class:"my-slider"},null,8,["step","modelValue"])]),_:1}),Object(l.createVNode)(n,{label:"直接光基础颜色"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(M,{modelValue:p.value,"onUpdate:modelValue":t[19]||(t[19]=e=>p.value=e),onActiveChange:_},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),Object(l.createVNode)(Object(l.unref)(r),{ref:(e,t)=>{t.HDRLibRef=e,i.value=e}},null,512)],64)}}}),i=(a("a416"),a("6b0d"));i=a.n(i);t.default=i()(r,[["__scopeId","data-v-67c4605e"]])},a69d:function(e,t,a){"use strict";a("06f3")},d543:function(e,t,a){"use strict";a.r(t);var l=a("f2bf"),n=a("d009"),o=a("ea7a");const c={class:"material-list-wrapper"},r={class:"material-list"},i={class:"material-item-wp"},s={class:"material-item"},u={class:"preview-img-wrap"},d=["alt","src","onDragend"],m=Object(l.createElementVNode)("div",{class:"preview-img-cover"},null,-1),b={class:"title"},p={class:"pagination-container"};var v=Object(l.defineComponent)({setup(e,{expose:t}){let a=[];const v=Object(l.ref)([]),O=(fetch("./pbr/pbr.json").then(e=>e.json()).then(e=>{if(e&&0<e.length)for(const t of e)t.previewUrl=t.path+t.previewUrl;a=e,O.value=e.length,f(1)}),Object(l.ref)()),j=Object(l.reactive)({address:"",name:"",pageIndex:1,pageSize:20}),f=e=>{j.pageIndex=e;e=(j.pageIndex-1)*j.pageSize<0?0:(j.pageIndex-1)*j.pageSize;var t=j.pageIndex*j.pageSize>O.value?O.value:j.pageIndex*j.pageSize;v.value=a.slice(e,t)};return t({}),(e,t)=>{var a=Object(l.resolveComponent)("el-scrollbar"),h=Object(l.resolveComponent)("el-pagination");return Object(l.openBlock)(),Object(l.createElementBlock)("div",c,[Object(l.createVNode)(a,null,{default:Object(l.withCtx)(()=>[Object(l.createElementVNode)("div",r,[(Object(l.openBlock)(!0),Object(l.createElementBlock)(l.Fragment,null,Object(l.renderList)(v.value,e=>(Object(l.openBlock)(),Object(l.createElementBlock)("div",{class:"material-item-container",key:e.materialId},[Object(l.createElementVNode)("div",i,[Object(l.createElementVNode)("div",s,[Object(l.createElementVNode)("div",u,[Object(l.createElementVNode)("img",{class:"previewImg",alt:e.name,src:e.previewUrl,draggable:!0,onDrag:t[0]||(t[0]=e=>{e.preventDefault()}),onDragend:t=>{var a=e;t.preventDefault(),(t=n.a.scene.raycaster.getIntersectMesh(t))&&o.a.changePBRMaterial(t.mesh,t.id,a)}},null,40,d),m])])]),Object(l.createElementVNode)("div",b,Object(l.toDisplayString)(e.name),1)]))),128))])]),_:1}),Object(l.createElementVNode)("div",p,[Object(l.createVNode)(h,{layout:"prev, pager, next","current-page":Object(l.unref)(j).pageIndex,"page-size":Object(l.unref)(j).pageSize,total:O.value,onCurrentChange:f},null,8,["current-page","page-size","total"])])])}}});a("a69d"),t.default=v},d920:function(e,t,a){}}]);