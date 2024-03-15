import{aV as O,g as b,ci as h,u as _,az as j,k as f,n as w,t as m,x as P,s as a,bn as B,cs as R,ae as C,aO as I,aR as $,a as x,d as g,c as k,h as z,r as F,aH as U,ct as V,cu as E,Y as K,cv as q,cR as H,A as T}from"./index-d574bfe0.js";const N=O("n-popconfirm"),S={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},y=R(S),L=b({name:"NPopconfirmPanel",props:S,setup(e){const{localeRef:n}=h("Popconfirm"),{inlineThemeDisabled:s}=_(),{mergedClsPrefixRef:t,mergedThemeRef:v,props:r}=j(N),u=f(()=>{const{common:{cubicBezierEaseInOut:o},self:{fontSize:l,iconSize:c,iconColor:d}}=v.value;return{"--n-bezier":o,"--n-font-size":l,"--n-icon-size":c,"--n-icon-color":d}}),i=s?w("popconfirm-panel",void 0,u,r):void 0;return Object.assign(Object.assign({},h("Popconfirm")),{mergedClsPrefix:t,cssVars:s?void 0:u,localizedPositiveText:f(()=>e.positiveText||n.value.positiveText),localizedNegativeText:f(()=>e.negativeText||n.value.negativeText),positiveButtonProps:m(r,"positiveButtonProps"),negativeButtonProps:m(r,"negativeButtonProps"),handlePositiveClick(o){e.onPositiveClick(o)},handleNegativeClick(o){e.onNegativeClick(o)},themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){var e;const{mergedClsPrefix:n,showIcon:s,$slots:t}=this,v=P(t.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&a(C,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&a(C,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${n}-popconfirm__panel`,this.themeClass],style:this.cssVars},B(t.default,r=>s||r?a("div",{class:`${n}-popconfirm__body`},s?a("div",{class:`${n}-popconfirm__icon`},P(t.icon,()=>[a(I,{clsPrefix:n},{default:()=>a($,null)})])):null,r):null),v?a("div",{class:[`${n}-popconfirm__action`]},v):null)}}),M=x("popconfirm",[g("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[g("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),g("action",`
 display: flex;
 justify-content: flex-end;
 `,[k("&:not(:first-child)","margin-top: 8px"),x("button",[k("&:not(:last-child)","margin-right: 8px;")])])]),W=Object.assign(Object.assign(Object.assign({},z.props),q),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),D=b({name:"Popconfirm",props:W,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=_(),s=z("Popconfirm","-popconfirm",M,H,e,n),t=F(null);function v(i){var o;if(!(!((o=t.value)===null||o===void 0)&&o.getMergedShow()))return;const{onPositiveClick:l,"onUpdate:show":c}=e;Promise.resolve(l?l(i):!0).then(d=>{var p;d!==!1&&((p=t.value)===null||p===void 0||p.setShow(!1),c&&T(c,!1))})}function r(i){var o;if(!(!((o=t.value)===null||o===void 0)&&o.getMergedShow()))return;const{onNegativeClick:l,"onUpdate:show":c}=e;Promise.resolve(l?l(i):!0).then(d=>{var p;d!==!1&&((p=t.value)===null||p===void 0||p.setShow(!1),c&&T(c,!1))})}return U(N,{mergedThemeRef:s,mergedClsPrefixRef:n,props:e}),{setShow(i){var o;(o=t.value)===null||o===void 0||o.setShow(i)},syncPosition(){var i;(i=t.value)===null||i===void 0||i.syncPosition()},mergedTheme:s,popoverInstRef:t,handlePositiveClick:v,handleNegativeClick:r}},render(){const{$slots:e,$props:n,mergedTheme:s}=this;return a(K,E(n,y,{theme:s.peers.Popover,themeOverrides:s.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const t=V(n,y);return a(L,Object.assign(Object.assign({},t),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{D as N};