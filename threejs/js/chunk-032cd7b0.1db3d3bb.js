(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-032cd7b0"],{"0f16f":function(e,t,o){},"161e":function(e,t,o){"use strict";o.r(t);var a=o("f2bf"),n=o("d009"),l=o("eb54"),c=o("ee91");Object(a.pushScopeId)("data-v-9a2df90a");const r={key:0,class:"modelData"},u=Object(a.createElementVNode)("div",{class:"modelData-header"}," 模型编辑 ",-1);Object(a.popScopeId)();var i=Object(a.defineComponent)({setup(e,{expose:t}){const o=Object(a.reactive)({locationX:0,locationY:0,locationZ:0,RotationX:0,RotationY:0,RotationZ:0,ScaleX:0,ScaleY:0,ScaleZ:0});let i,b;const d=(e,t)=>{if(t=Number(t),!isNaN(t)&&i){var o=i.position,a=new l.Vector3;switch(t/=1e3,e){case 0:a.x=t-o.x;break;case 1:a.y=t-o.y;break;case 2:a.z=t-o.z}i.multiplyPosition(a),V(event)}},j=new l.Quaternion(0,0,0,1),O=new l.Vector3(1,0,0),s=new l.Vector3(0,1,0),f=new l.Vector3(0,0,1),m=(e,t)=>{if(t=Number(t),!isNaN(t)&&i){t=t*Math.PI/180;var o=i.euler;switch(e){case 0:j.setFromAxisAngle(O,t-o.x);break;case 1:j.setFromAxisAngle(s,t-o.y);break;case 2:j.setFromAxisAngle(f,t-o.z)}i.multiplyQuaternion(j),V(event)}},p=(e,t)=>{if(t=Number(t),!isNaN(t)&&0!=t&&i){var o=i.scale.clone();switch(e){case 0:o.x=t/o.x,o.y=1,o.z=1;break;case 1:o.x=1,o.y=t/o.y,o.z=1;break;case 2:o.x=1,o.y=1,o.z=t/o.z}i.multiplyScale(o),V(event)}},V=e=>{b&&i&&(i.computeBoundingSphere(),b.setElemet(i),c.a.instance.showDistance(i)),n.a.scene.enableRender(),e.target.blur()},h=Object(a.ref)(!1);return t({dialogVisible:h,showModelData:(e,t)=>{e&&(o.locationX=Math.round(1e3*e.position.x),o.locationY=Math.round(1e3*e.position.y),o.locationZ=Math.round(1e3*e.position.z),o.RotationX=Math.round(180*e.euler.x/Math.PI*100)/100,o.RotationY=Math.round(180*e.euler.y/Math.PI*100)/100,o.RotationZ=Math.round(180*e.euler.z/Math.PI*100)/100,o.ScaleX=Math.round(1e3*e.scale.x)/1e3,o.ScaleY=Math.round(1e3*e.scale.y)/1e3,o.ScaleZ=Math.round(1e3*e.scale.z)/1e3),i=e,b=t}}),(e,t)=>{const n=Object(a.resolveComponent)("el-input"),l=Object(a.resolveComponent)("el-form-item");var c=Object(a.resolveComponent)("el-form");return h.value?(Object(a.openBlock)(),Object(a.createElementBlock)("div",r,[u,Object(a.createVNode)(c,{size:"small","label-position":"right","label-width":"100px",model:Object(a.unref)(o),style:{"margin-left":"10px","margin-right":"10px","margin-top":"5px","margin-bottom":"5px"}},{default:Object(a.withCtx)(()=>[Object(a.createVNode)(l,{label:"（位置mm）X："},{default:Object(a.withCtx)(()=>[Object(a.createVNode)(n,{modelValue:Object(a.unref)(o).locationX,"onUpdate:modelValue":t[0]||(t[0]=e=>Object(a.unref)(o).locationX=e),onBlur:t[1]||(t[1]=e=>d(0,Object(a.unref)(o).locationX)),onKeyup:t[2]||(t[2]=Object(a.withKeys)(e=>d(0,Object(a.unref)(o).locationX),["enter","native"]))},null,8,["modelValue"])]),_:1}),Object(a.createVNode)(l,{label:"Y："},{default:Object(a.withCtx)(()=>[Object(a.createVNode)(n,{modelValue:Object(a.unref)(o).locationY,"onUpdate:modelValue":t[3]||(t[3]=e=>Object(a.unref)(o).locationY=e),onBlur:t[4]||(t[4]=e=>d(1,Object(a.unref)(o).locationY)),onKeyup:t[5]||(t[5]=Object(a.withKeys)(e=>d(1,Object(a.unref)(o).locationY),["enter","native"]))},null,8,["modelValue"])]),_:1}),Object(a.createVNode)(l,{label:"Z："},{default:Object(a.withCtx)(()=>[Object(a.createVNode)(n,{modelValue:Object(a.unref)(o).locationZ,"onUpdate:modelValue":t[6]||(t[6]=e=>Object(a.unref)(o).locationZ=e),onBlur:t[7]||(t[7]=e=>d(2,Object(a.unref)(o).locationZ)),onKeyup:t[8]||(t[8]=Object(a.withKeys)(e=>d(2,Object(a.unref)(o).locationZ),["enter","native"]))},null,8,["modelValue"])]),_:1}),Object(a.createVNode)(l,{label:"（旋转）X："},{default:Object(a.withCtx)(()=>[Object(a.createVNode)(n,{modelValue:Object(a.unref)(o).RotationX,"onUpdate:modelValue":t[9]||(t[9]=e=>Object(a.unref)(o).RotationX=e),onBlur:t[10]||(t[10]=e=>m(0,Object(a.unref)(o).RotationX)),onKeyup:t[11]||(t[11]=Object(a.withKeys)(e=>m(0,Object(a.unref)(o).RotationX),["enter","native"]))},null,8,["modelValue"])]),_:1}),Object(a.createVNode)(l,{label:"Y："},{default:Object(a.withCtx)(()=>[Object(a.createVNode)(n,{modelValue:Object(a.unref)(o).RotationY,"onUpdate:modelValue":t[12]||(t[12]=e=>Object(a.unref)(o).RotationY=e),onBlur:t[13]||(t[13]=e=>m(1,Object(a.unref)(o).RotationY)),onKeyup:t[14]||(t[14]=Object(a.withKeys)(e=>m(1,Object(a.unref)(o).RotationY),["enter","native"]))},null,8,["modelValue"])]),_:1}),Object(a.createVNode)(l,{label:"Z："},{default:Object(a.withCtx)(()=>[Object(a.createVNode)(n,{modelValue:Object(a.unref)(o).RotationZ,"onUpdate:modelValue":t[15]||(t[15]=e=>Object(a.unref)(o).RotationZ=e),onBlur:t[16]||(t[16]=e=>m(2,Object(a.unref)(o).RotationZ)),onKeyup:t[17]||(t[17]=Object(a.withKeys)(e=>m(2,Object(a.unref)(o).RotationZ),["enter","native"]))},null,8,["modelValue"])]),_:1}),Object(a.createVNode)(l,{label:"（缩放）X："},{default:Object(a.withCtx)(()=>[Object(a.createVNode)(n,{modelValue:Object(a.unref)(o).ScaleX,"onUpdate:modelValue":t[18]||(t[18]=e=>Object(a.unref)(o).ScaleX=e),onBlur:t[19]||(t[19]=e=>p(0,Object(a.unref)(o).ScaleX)),onKeyup:t[20]||(t[20]=Object(a.withKeys)(e=>p(0,Object(a.unref)(o).ScaleX),["enter","native"]))},null,8,["modelValue"])]),_:1}),Object(a.createVNode)(l,{label:"Y："},{default:Object(a.withCtx)(()=>[Object(a.createVNode)(n,{modelValue:Object(a.unref)(o).ScaleY,"onUpdate:modelValue":t[21]||(t[21]=e=>Object(a.unref)(o).ScaleY=e),onBlur:t[22]||(t[22]=e=>p(1,Object(a.unref)(o).ScaleY)),onKeyup:t[23]||(t[23]=Object(a.withKeys)(e=>p(1,Object(a.unref)(o).ScaleY),["enter","native"]))},null,8,["modelValue"])]),_:1}),Object(a.createVNode)(l,{label:"Z："},{default:Object(a.withCtx)(()=>[Object(a.createVNode)(n,{modelValue:Object(a.unref)(o).ScaleZ,"onUpdate:modelValue":t[24]||(t[24]=e=>Object(a.unref)(o).ScaleZ=e),onBlur:t[25]||(t[25]=e=>p(2,Object(a.unref)(o).ScaleY)),onKeyup:t[26]||(t[26]=Object(a.withKeys)(e=>p(2,Object(a.unref)(o).ScaleY),["enter","native"]))},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])):Object(a.createCommentVNode)("",!0)}}}),b=(o("327c"),o("6b0d"));o=o.n(b);t.default=o()(i,[["__scopeId","data-v-9a2df90a"]])},"327c":function(e,t,o){"use strict";o("0f16f")}}]);