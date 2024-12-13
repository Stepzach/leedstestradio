(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Rh={exports:{}},da={},Ch={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function t0(){if(fm)return Ie;fm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function V(O){return O===null||typeof O!="object"?null:(O=C&&O[C]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,X={};function H(O,j,ae){this.props=O,this.context=j,this.refs=X,this.updater=ae||z}H.prototype.isReactComponent={},H.prototype.setState=function(O,j){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,j,"setState")},H.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ge(){}ge.prototype=H.prototype;function ve(O,j,ae){this.props=O,this.context=j,this.refs=X,this.updater=ae||z}var _e=ve.prototype=new ge;_e.constructor=ve,Q(_e,H.prototype),_e.isPureReactComponent=!0;var we=Array.isArray,We=Object.prototype.hasOwnProperty,Se={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(O,j,ae){var Ee,Te={},ke=null,xe=null;if(j!=null)for(Ee in j.ref!==void 0&&(xe=j.ref),j.key!==void 0&&(ke=""+j.key),j)We.call(j,Ee)&&!N.hasOwnProperty(Ee)&&(Te[Ee]=j[Ee]);var Le=arguments.length-2;if(Le===1)Te.children=ae;else if(1<Le){for(var ze=Array(Le),mt=0;mt<Le;mt++)ze[mt]=arguments[mt+2];Te.children=ze}if(O&&O.defaultProps)for(Ee in Le=O.defaultProps,Le)Te[Ee]===void 0&&(Te[Ee]=Le[Ee]);return{$$typeof:i,type:O,key:ke,ref:xe,props:Te,_owner:Se.current}}function A(O,j){return{$$typeof:i,type:O.type,key:j,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function D(O){var j={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return j[ae]})}var x=/\/+/g;function S(O,j){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):j.toString(36)}function Ze(O,j,ae,Ee,Te){var ke=typeof O;(ke==="undefined"||ke==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(ke){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case i:case e:xe=!0}}if(xe)return xe=O,Te=Te(xe),O=Ee===""?"."+S(xe,0):Ee,we(Te)?(ae="",O!=null&&(ae=O.replace(x,"$&/")+"/"),Ze(Te,j,ae,"",function(mt){return mt})):Te!=null&&(P(Te)&&(Te=A(Te,ae+(!Te.key||xe&&xe.key===Te.key?"":(""+Te.key).replace(x,"$&/")+"/")+O)),j.push(Te)),1;if(xe=0,Ee=Ee===""?".":Ee+":",we(O))for(var Le=0;Le<O.length;Le++){ke=O[Le];var ze=Ee+S(ke,Le);xe+=Ze(ke,j,ae,ze,Te)}else if(ze=V(O),typeof ze=="function")for(O=ze.call(O),Le=0;!(ke=O.next()).done;)ke=ke.value,ze=Ee+S(ke,Le++),xe+=Ze(ke,j,ae,ze,Te);else if(ke==="object")throw j=String(O),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return xe}function Pt(O,j,ae){if(O==null)return O;var Ee=[],Te=0;return Ze(O,Ee,"","",function(ke){return j.call(ae,ke,Te++)}),Ee}function kt(O){if(O._status===-1){var j=O._result;j=j(),j.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=j)}if(O._status===1)return O._result.default;throw O._result}var be={current:null},J={transition:null},ue={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:J,ReactCurrentOwner:Se};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:Pt,forEach:function(O,j,ae){Pt(O,function(){j.apply(this,arguments)},ae)},count:function(O){var j=0;return Pt(O,function(){j++}),j},toArray:function(O){return Pt(O,function(j){return j})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ie.Component=H,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=ve,Ie.StrictMode=s,Ie.Suspense=y,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ie.act=ee,Ie.cloneElement=function(O,j,ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ee=Q({},O.props),Te=O.key,ke=O.ref,xe=O._owner;if(j!=null){if(j.ref!==void 0&&(ke=j.ref,xe=Se.current),j.key!==void 0&&(Te=""+j.key),O.type&&O.type.defaultProps)var Le=O.type.defaultProps;for(ze in j)We.call(j,ze)&&!N.hasOwnProperty(ze)&&(Ee[ze]=j[ze]===void 0&&Le!==void 0?Le[ze]:j[ze])}var ze=arguments.length-2;if(ze===1)Ee.children=ae;else if(1<ze){Le=Array(ze);for(var mt=0;mt<ze;mt++)Le[mt]=arguments[mt+2];Ee.children=Le}return{$$typeof:i,type:O.type,key:Te,ref:ke,props:Ee,_owner:xe}},Ie.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ie.createElement=I,Ie.createFactory=function(O){var j=I.bind(null,O);return j.type=O,j},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(O){return{$$typeof:m,render:O}},Ie.isValidElement=P,Ie.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:kt}},Ie.memo=function(O,j){return{$$typeof:v,type:O,compare:j===void 0?null:j}},Ie.startTransition=function(O){var j=J.transition;J.transition={};try{O()}finally{J.transition=j}},Ie.unstable_act=ee,Ie.useCallback=function(O,j){return be.current.useCallback(O,j)},Ie.useContext=function(O){return be.current.useContext(O)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(O){return be.current.useDeferredValue(O)},Ie.useEffect=function(O,j){return be.current.useEffect(O,j)},Ie.useId=function(){return be.current.useId()},Ie.useImperativeHandle=function(O,j,ae){return be.current.useImperativeHandle(O,j,ae)},Ie.useInsertionEffect=function(O,j){return be.current.useInsertionEffect(O,j)},Ie.useLayoutEffect=function(O,j){return be.current.useLayoutEffect(O,j)},Ie.useMemo=function(O,j){return be.current.useMemo(O,j)},Ie.useReducer=function(O,j,ae){return be.current.useReducer(O,j,ae)},Ie.useRef=function(O){return be.current.useRef(O)},Ie.useState=function(O){return be.current.useState(O)},Ie.useSyncExternalStore=function(O,j,ae){return be.current.useSyncExternalStore(O,j,ae)},Ie.useTransition=function(){return be.current.useTransition()},Ie.version="18.3.1",Ie}var pm;function dd(){return pm||(pm=1,Ch.exports=t0()),Ch.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function n0(){if(mm)return da;mm=1;var i=dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,C={},V=null,z=null;v!==void 0&&(V=""+v),y.key!==void 0&&(V=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(C[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)C[w]===void 0&&(C[w]=y[w]);return{$$typeof:e,type:m,key:V,ref:z,props:C,_owner:o.current}}return da.Fragment=t,da.jsx=h,da.jsxs=h,da}var gm;function r0(){return gm||(gm=1,Rh.exports=n0()),Rh.exports}var nt=r0(),Gn=dd(),ru={},Ph={exports:{}},Qt={},kh={exports:{}},Nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function i0(){return ym||(ym=1,function(i){function e(J,ue){var ee=J.length;J.push(ue);e:for(;0<ee;){var O=ee-1>>>1,j=J[O];if(0<o(j,ue))J[O]=ue,J[ee]=j,ee=O;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ue=J[0],ee=J.pop();if(ee!==ue){J[0]=ee;e:for(var O=0,j=J.length,ae=j>>>1;O<ae;){var Ee=2*(O+1)-1,Te=J[Ee],ke=Ee+1,xe=J[ke];if(0>o(Te,ee))ke<j&&0>o(xe,Te)?(J[O]=xe,J[ke]=ee,O=ke):(J[O]=Te,J[Ee]=ee,O=Ee);else if(ke<j&&0>o(xe,ee))J[O]=xe,J[ke]=ee,O=ke;else break e}}return ue}function o(J,ue){var ee=J.sortIndex-ue.sortIndex;return ee!==0?ee:J.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,C=null,V=3,z=!1,Q=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _e(J){for(var ue=t(v);ue!==null;){if(ue.callback===null)s(v);else if(ue.startTime<=J)s(v),ue.sortIndex=ue.expirationTime,e(y,ue);else break;ue=t(v)}}function we(J){if(X=!1,_e(J),!Q)if(t(y)!==null)Q=!0,kt(We);else{var ue=t(v);ue!==null&&be(we,ue.startTime-J)}}function We(J,ue){Q=!1,X&&(X=!1,ge(I),I=-1),z=!0;var ee=V;try{for(_e(ue),C=t(y);C!==null&&(!(C.expirationTime>ue)||J&&!D());){var O=C.callback;if(typeof O=="function"){C.callback=null,V=C.priorityLevel;var j=O(C.expirationTime<=ue);ue=i.unstable_now(),typeof j=="function"?C.callback=j:C===t(y)&&s(y),_e(ue)}else s(y);C=t(y)}if(C!==null)var ae=!0;else{var Ee=t(v);Ee!==null&&be(we,Ee.startTime-ue),ae=!1}return ae}finally{C=null,V=ee,z=!1}}var Se=!1,N=null,I=-1,A=5,P=-1;function D(){return!(i.unstable_now()-P<A)}function x(){if(N!==null){var J=i.unstable_now();P=J;var ue=!0;try{ue=N(!0,J)}finally{ue?S():(Se=!1,N=null)}}else Se=!1}var S;if(typeof ve=="function")S=function(){ve(x)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Pt=Ze.port2;Ze.port1.onmessage=x,S=function(){Pt.postMessage(null)}}else S=function(){H(x,0)};function kt(J){N=J,Se||(Se=!0,S())}function be(J,ue){I=H(function(){J(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Q||z||(Q=!0,kt(We))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return V},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(J){switch(V){case 1:case 2:case 3:var ue=3;break;default:ue=V}var ee=V;V=ue;try{return J()}finally{V=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,ue){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=V;V=J;try{return ue()}finally{V=ee}},i.unstable_scheduleCallback=function(J,ue,ee){var O=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,J){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,J={id:w++,callback:ue,priorityLevel:J,startTime:ee,expirationTime:j,sortIndex:-1},ee>O?(J.sortIndex=ee,e(v,J),t(y)===null&&J===t(v)&&(X?(ge(I),I=-1):X=!0,be(we,ee-O))):(J.sortIndex=j,e(y,J),Q||z||(Q=!0,kt(We))),J},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(J){var ue=V;return function(){var ee=V;V=ue;try{return J.apply(this,arguments)}finally{V=ee}}}}(Nh)),Nh}var _m;function s0(){return _m||(_m=1,kh.exports=i0()),kh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function o0(){if(vm)return Qt;vm=1;var i=dd(),e=s0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function V(n){return y.call(C,n)?!0:y.call(w,n)?!1:v.test(n)?C[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function ve(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ge,ve);H[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ge,ve);H[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ge,ve);H[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function _e(n,r,a,c){var d=H.hasOwnProperty(r)?H[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,a,d,c)&&(a=null),c||d===null?V(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,We=Symbol.for("react.element"),Se=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),J=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,O;function j(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ae=!1;function Ee(n,r){if(!n||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(b){var c=b}Reflect.construct(n,[],r)}else{try{r.call()}catch(b){c=b}n.call(r.prototype)}else{try{throw Error()}catch(b){c=b}n()}}catch(b){if(b&&c&&typeof b.stack=="string"){for(var d=b.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?j(n):""}function Te(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Se:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case x:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case kt:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Zn(n){n._valueTracker||(n._valueTracker=mt(n))}function ts(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function fi(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ns(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Le(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function _o(n,r){r=r.checked,r!=null&&_e(n,"checked",r,!1)}function vo(n,r){_o(n,r);var a=Le(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?rs(n,r.type,a):r.hasOwnProperty("defaultValue")&&rs(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function ja(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function rs(n,r,a){(r!=="number"||Pr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var er=Array.isArray;function tr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Eo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function is(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(er(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Le(a)}}function ss(n,r){var a=Le(r.value),c=Le(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function wo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var nr,To=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(nr=nr||document.createElement("div"),nr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=nr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function kr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mi=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(n){mi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),pi[r]=pi[n]})});function Io(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||pi.hasOwnProperty(n)&&pi[n]?(""+r).trim():r+"px"}function So(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Io(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ao=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ro(n,r){if(r){if(Ao[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Co(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gi=null;function os(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var as=null,an=null,Mn=null;function ls(n){if(n=Yo(n)){if(typeof as!="function")throw Error(t(280));var r=n.stateNode;r&&(r=_l(r),as(n.stateNode,n.type,r))}}function Fn(n){an?Mn?Mn.push(n):Mn=[n]:an=n}function Po(){if(an){var n=an,r=Mn;if(Mn=an=null,ls(n),r)for(n=0;n<r.length;n++)ls(r[n])}}function yi(n,r){return n(r)}function ko(){}var rr=!1;function No(n,r,a){if(rr)return n(r,a);rr=!0;try{return yi(n,r,a)}finally{rr=!1,(an!==null||Mn!==null)&&(ko(),Po())}}function et(n,r){var a=n.stateNode;if(a===null)return null;var c=_l(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var us=!1;if(m)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){us=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{us=!1}function _i(n,r,a,c,d,p,_,T,R){var b=Array.prototype.slice.call(arguments,3);try{r.apply(a,b)}catch(W){this.onError(W)}}var vi=!1,cs=null,vn=!1,Do=null,ec={onError:function(n){vi=!0,cs=n}};function hs(n,r,a,c,d,p,_,T,R){vi=!1,cs=null,_i.apply(ec,arguments)}function $a(n,r,a,c,d,p,_,T,R){if(hs.apply(this,arguments),vi){if(vi){var b=cs;vi=!1,cs=null}else throw Error(t(198));vn||(vn=!0,Do=b)}}function En(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ei(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function wn(n){if(En(n)!==n)throw Error(t(188))}function qa(n){var r=n.alternate;if(!r){if(r=En(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return wn(d),n;if(p===c)return wn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Vo(n){return n=qa(n),n!==null?ds(n):null}function ds(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ds(n);if(r!==null)return r;n=n.sibling}return null}var fs=e.unstable_scheduleCallback,Oo=e.unstable_cancelCallback,Ha=e.unstable_shouldYield,tc=e.unstable_requestPaint,Be=e.unstable_now,Wa=e.unstable_getCurrentPriorityLevel,wi=e.unstable_ImmediatePriority,Nr=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,xo=e.unstable_LowPriority,Ga=e.unstable_IdlePriority,Ti=null,Jt=null;function Ka(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ti,n,void 0,(n.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Xa,Lo=Math.log,Qa=Math.LN2;function Xa(n){return n>>>=0,n===0?32:31-(Lo(n)/Qa|0)|0}var ps=64,ms=4194304;function Dr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ii(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Dr(T):(p&=_,p!==0&&(c=Dr(p)))}else _=a&~d,_!==0?c=Dr(_):p!==0&&(c=Dr(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-bt(r),d=1<<a,c|=n[a],r&=~d;return c}function nc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ir(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-bt(p),T=1<<_,R=d[_];R===-1?(!(T&a)||T&c)&&(d[_]=nc(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Si(){var n=ps;return ps<<=1,!(ps&4194240)&&(ps=64),n}function Vr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Or(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-bt(r),n[r]=a}function Ue(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-bt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function xr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-bt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ce=0;function Lr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ya,gs,Ja,Za,el,Mo=!1,bn=[],wt=null,Tn=null,In=null,Mr=new Map,un=new Map,Un=[],rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tl(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Mr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(r.pointerId)}}function jt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Yo(r),r!==null&&gs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function ic(n,r,a,c,d){switch(r){case"focusin":return wt=jt(wt,n,r,a,c,d),!0;case"dragenter":return Tn=jt(Tn,n,r,a,c,d),!0;case"mouseover":return In=jt(In,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Mr.set(p,jt(Mr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,un.set(p,jt(un.get(p)||null,n,r,a,c,d)),!0}return!1}function nl(n){var r=ki(n.target);if(r!==null){var a=En(r);if(a!==null){if(r=a.tag,r===13){if(r=Ei(a),r!==null){n.blockedOn=r,el(n.priority,function(){Ja(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ys(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);gi=c,a.target.dispatchEvent(c),gi=null}else return r=Yo(a),r!==null&&gs(r),n.blockedOn=a,!1;r.shift()}return!0}function Ai(n,r,a){sr(n)&&a.delete(r)}function rl(){Mo=!1,wt!==null&&sr(wt)&&(wt=null),Tn!==null&&sr(Tn)&&(Tn=null),In!==null&&sr(In)&&(In=null),Mr.forEach(Ai),un.forEach(Ai)}function Sn(n,r){n.blockedOn===r&&(n.blockedOn=null,Mo||(Mo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rl)))}function An(n){function r(d){return Sn(d,n)}if(0<bn.length){Sn(bn[0],n);for(var a=1;a<bn.length;a++){var c=bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&Sn(wt,n),Tn!==null&&Sn(Tn,n),In!==null&&Sn(In,n),Mr.forEach(r),un.forEach(r),a=0;a<Un.length;a++)c=Un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)nl(a),a.blockedOn===null&&Un.shift()}var or=we.ReactCurrentBatchConfig,Fr=!0;function Ge(n,r,a,c){var d=Ce,p=or.transition;or.transition=null;try{Ce=1,Fo(n,r,a,c)}finally{Ce=d,or.transition=p}}function sc(n,r,a,c){var d=Ce,p=or.transition;or.transition=null;try{Ce=4,Fo(n,r,a,c)}finally{Ce=d,or.transition=p}}function Fo(n,r,a,c){if(Fr){var d=ys(n,r,a,c);if(d===null)gc(n,r,c,Ri,a),tl(n,c);else if(ic(d,n,r,a,c))c.stopPropagation();else if(tl(n,c),r&4&&-1<rc.indexOf(n)){for(;d!==null;){var p=Yo(d);if(p!==null&&Ya(p),p=ys(n,r,a,c),p===null&&gc(n,r,c,Ri,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else gc(n,r,c,null,a)}}var Ri=null;function ys(n,r,a,c){if(Ri=null,n=os(c),n=ki(n),n!==null)if(r=En(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ei(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ri=n,null}function bo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wa()){case wi:return 1;case Nr:return 4;case ln:case xo:return 16;case Ga:return 536870912;default:return 16}default:return 16}}var en=null,_s=null,$t=null;function Uo(){if($t)return $t;var n,r=_s,a=r.length,c,d="value"in en?en.value:en.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return $t=d.slice(n,1<c?1-c:void 0)}function vs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function zn(){return!0}function zo(){return!1}function Tt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?zn:zo,this.isPropagationStopped=zo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),r}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Tt(Rn),Bn=ee({},Rn,{view:0,detail:0}),oc=Tt(Bn),ws,ar,br,Ci=ee({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==br&&(br&&n.type==="mousemove"?(ws=n.screenX-br.screenX,ar=n.screenY-br.screenY):ar=ws=0,br=n),ws)},movementY:function(n){return"movementY"in n?n.movementY:ar}}),Ts=Tt(Ci),Bo=ee({},Ci,{dataTransfer:0}),il=Tt(Bo),Is=ee({},Bn,{relatedTarget:0}),Ss=Tt(Is),sl=ee({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),lr=Tt(sl),ol=ee({},Rn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),al=Tt(ol),ll=ee({},Rn,{data:0}),jo=Tt(ll),As={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ul={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ul[n])?!!r[n]:!1}function jn(){return cl}var l=ee({},Bn,{key:function(n){if(n.key){var r=As[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=vs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(n){return n.type==="keypress"?vs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),g=ee({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Tt(g),L=ee({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn}),U=Tt(L),Y=ee({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=Tt(Y),ct=ee({},Ci,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=Tt(ct),gt=[9,13,27,32],it=m&&"CompositionEvent"in window,cn=null;m&&"documentMode"in document&&(cn=document.documentMode);var tn=m&&"TextEvent"in window&&!cn,Pi=m&&(!it||cn&&8<cn&&11>=cn),Rs=" ",af=!1;function lf(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function J_(n,r){switch(n){case"compositionend":return uf(r);case"keypress":return r.which!==32?null:(af=!0,Rs);case"textInput":return n=r.data,n===Rs&&af?null:n;default:return null}}function Z_(n,r){if(Cs)return n==="compositionend"||!it&&lf(n,r)?(n=Uo(),$t=_s=en=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pi&&r.locale!=="ko"?null:r.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!ev[n.type]:r==="textarea"}function hf(n,r,a,c){Fn(c),r=ml(r,"onChange"),0<r.length&&(a=new Es("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var $o=null,qo=null;function tv(n){kf(n,0)}function hl(n){var r=Vs(n);if(ts(r))return n}function nv(n,r){if(n==="change")return r}var df=!1;if(m){var ac;if(m){var lc="oninput"in document;if(!lc){var ff=document.createElement("div");ff.setAttribute("oninput","return;"),lc=typeof ff.oninput=="function"}ac=lc}else ac=!1;df=ac&&(!document.documentMode||9<document.documentMode)}function pf(){$o&&($o.detachEvent("onpropertychange",mf),qo=$o=null)}function mf(n){if(n.propertyName==="value"&&hl(qo)){var r=[];hf(r,qo,n,os(n)),No(tv,r)}}function rv(n,r,a){n==="focusin"?(pf(),$o=r,qo=a,$o.attachEvent("onpropertychange",mf)):n==="focusout"&&pf()}function iv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(qo)}function sv(n,r){if(n==="click")return hl(r)}function ov(n,r){if(n==="input"||n==="change")return hl(r)}function av(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Cn=typeof Object.is=="function"?Object.is:av;function Ho(n,r){if(Cn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Cn(n[d],r[d]))return!1}return!0}function gf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yf(n,r){var a=gf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gf(a)}}function _f(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?_f(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function vf(){for(var n=window,r=Pr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Pr(n.document)}return r}function uc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function lv(n){var r=vf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&_f(a.ownerDocument.documentElement,a)){if(c!==null&&uc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=yf(a,p);var _=yf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var uv=m&&"documentMode"in document&&11>=document.documentMode,Ps=null,cc=null,Wo=null,hc=!1;function Ef(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hc||Ps==null||Ps!==Pr(c)||(c=Ps,"selectionStart"in c&&uc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Wo&&Ho(Wo,c)||(Wo=c,c=ml(cc,"onSelect"),0<c.length&&(r=new Es("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ps)))}function dl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var ks={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},dc={},wf={};m&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function fl(n){if(dc[n])return dc[n];if(!ks[n])return n;var r=ks[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in wf)return dc[n]=r[a];return n}var Tf=fl("animationend"),If=fl("animationiteration"),Sf=fl("animationstart"),Af=fl("transitionend"),Rf=new Map,Cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,r){Rf.set(n,r),u(r,[n])}for(var fc=0;fc<Cf.length;fc++){var pc=Cf[fc],cv=pc.toLowerCase(),hv=pc[0].toUpperCase()+pc.slice(1);Ur(cv,"on"+hv)}Ur(Tf,"onAnimationEnd"),Ur(If,"onAnimationIteration"),Ur(Sf,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Af,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Pf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,$a(c,r,void 0,n),n.currentTarget=null}function kf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,b=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;Pf(d,T,b),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,b=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;Pf(d,T,b),p=R}}}if(vn)throw n=Do,vn=!1,Do=null,n}function $e(n,r){var a=r[Tc];a===void 0&&(a=r[Tc]=new Set);var c=n+"__bubble";a.has(c)||(Nf(r,n,2,!1),a.add(c))}function mc(n,r,a){var c=0;r&&(c|=4),Nf(a,n,c,r)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Ko(n){if(!n[pl]){n[pl]=!0,s.forEach(function(a){a!=="selectionchange"&&(dv.has(a)||mc(a,!1,n),mc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[pl]||(r[pl]=!0,mc("selectionchange",!1,r))}}function Nf(n,r,a,c){switch(bo(r)){case 1:var d=Ge;break;case 4:d=sc;break;default:d=Fo}a=d.bind(null,r,a,n),d=void 0,!us||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function gc(n,r,a,c,d){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=ki(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}No(function(){var b=p,W=os(a),G=[];e:{var q=Rf.get(n);if(q!==void 0){var Z=Es,re=n;switch(n){case"keypress":if(vs(a)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":re="focus",Z=Ss;break;case"focusout":re="blur",Z=Ss;break;case"beforeblur":case"afterblur":Z=Ss;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=il;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case Tf:case If:case Sf:Z=lr;break;case Af:Z=Fe;break;case"scroll":Z=oc;break;case"wheel":Z=Ne;break;case"copy":case"cut":case"paste":Z=al;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var se=(r&4)!==0,tt=!se&&n==="scroll",M=se?q!==null?q+"Capture":null:q;se=[];for(var k=b,F;k!==null;){F=k;var K=F.stateNode;if(F.tag===5&&K!==null&&(F=K,M!==null&&(K=et(k,M),K!=null&&se.push(Qo(k,K,F)))),tt)break;k=k.return}0<se.length&&(q=new Z(q,re,null,a,W),G.push({event:q,listeners:se}))}}if(!(r&7)){e:{if(q=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",q&&a!==gi&&(re=a.relatedTarget||a.fromElement)&&(ki(re)||re[ur]))break e;if((Z||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,Z?(re=a.relatedTarget||a.toElement,Z=b,re=re?ki(re):null,re!==null&&(tt=En(re),re!==tt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=b),Z!==re)){if(se=Ts,K="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(se=E,K="onPointerLeave",M="onPointerEnter",k="pointer"),tt=Z==null?q:Vs(Z),F=re==null?q:Vs(re),q=new se(K,k+"leave",Z,a,W),q.target=tt,q.relatedTarget=F,K=null,ki(W)===b&&(se=new se(M,k+"enter",re,a,W),se.target=F,se.relatedTarget=tt,K=se),tt=K,Z&&re)t:{for(se=Z,M=re,k=0,F=se;F;F=Ns(F))k++;for(F=0,K=M;K;K=Ns(K))F++;for(;0<k-F;)se=Ns(se),k--;for(;0<F-k;)M=Ns(M),F--;for(;k--;){if(se===M||M!==null&&se===M.alternate)break t;se=Ns(se),M=Ns(M)}se=null}else se=null;Z!==null&&Df(G,q,Z,se,!1),re!==null&&tt!==null&&Df(G,tt,re,se,!0)}}e:{if(q=b?Vs(b):window,Z=q.nodeName&&q.nodeName.toLowerCase(),Z==="select"||Z==="input"&&q.type==="file")var oe=nv;else if(cf(q))if(df)oe=ov;else{oe=iv;var ce=rv}else(Z=q.nodeName)&&Z.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(oe=sv);if(oe&&(oe=oe(n,b))){hf(G,oe,a,W);break e}ce&&ce(n,q,b),n==="focusout"&&(ce=q._wrapperState)&&ce.controlled&&q.type==="number"&&rs(q,"number",q.value)}switch(ce=b?Vs(b):window,n){case"focusin":(cf(ce)||ce.contentEditable==="true")&&(Ps=ce,cc=b,Wo=null);break;case"focusout":Wo=cc=Ps=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Ef(G,a,W);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":Ef(G,a,W)}var he;if(it)e:{switch(n){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Cs?lf(n,a)&&(de="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Pi&&a.locale!=="ko"&&(Cs||de!=="onCompositionStart"?de==="onCompositionEnd"&&Cs&&(he=Uo()):(en=W,_s="value"in en?en.value:en.textContent,Cs=!0)),ce=ml(b,de),0<ce.length&&(de=new jo(de,n,null,a,W),G.push({event:de,listeners:ce}),he?de.data=he:(he=uf(a),he!==null&&(de.data=he)))),(he=tn?J_(n,a):Z_(n,a))&&(b=ml(b,"onBeforeInput"),0<b.length&&(W=new jo("onBeforeInput","beforeinput",null,a,W),G.push({event:W,listeners:b}),W.data=he))}kf(G,r)})}function Qo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function ml(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=et(n,a),p!=null&&c.unshift(Qo(n,p,d)),p=et(n,r),p!=null&&c.push(Qo(n,p,d))),n=n.return}return c}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Df(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,b=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&b!==null&&(T=b,d?(R=et(a,p),R!=null&&_.unshift(Qo(a,R,T))):d||(R=et(a,p),R!=null&&_.push(Qo(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var fv=/\r\n?/g,pv=/\u0000|\uFFFD/g;function Vf(n){return(typeof n=="string"?n:""+n).replace(fv,`
`).replace(pv,"")}function gl(n,r,a){if(r=Vf(r),Vf(n)!==r&&a)throw Error(t(425))}function yl(){}var yc=null,_c=null;function vc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,mv=typeof clearTimeout=="function"?clearTimeout:void 0,Of=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof Of<"u"?function(n){return Of.resolve(null).then(n).catch(yv)}:Ec;function yv(n){setTimeout(function(){throw n})}function wc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),An(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);An(r)}function zr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function xf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ds,Xo="__reactProps$"+Ds,ur="__reactContainer$"+Ds,Tc="__reactEvents$"+Ds,_v="__reactListeners$"+Ds,vv="__reactHandles$"+Ds;function ki(n){var r=n[$n];if(r)return r;for(var a=n.parentNode;a;){if(r=a[ur]||a[$n]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=xf(n);n!==null;){if(a=n[$n])return a;n=xf(n)}return r}n=a,a=n.parentNode}return null}function Yo(n){return n=n[$n]||n[ur],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function _l(n){return n[Xo]||null}var Ic=[],Os=-1;function Br(n){return{current:n}}function qe(n){0>Os||(n.current=Ic[Os],Ic[Os]=null,Os--)}function je(n,r){Os++,Ic[Os]=n.current,n.current=r}var jr={},Nt=Br(jr),qt=Br(!1),Ni=jr;function xs(n,r){var a=n.type.contextTypes;if(!a)return jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function vl(){qe(qt),qe(Nt)}function Lf(n,r,a){if(Nt.current!==jr)throw Error(t(168));je(Nt,r),je(qt,a)}function Mf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,xe(n)||"Unknown",d));return ee({},a,c)}function El(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||jr,Ni=Nt.current,je(Nt,n),je(qt,qt.current),!0}function Ff(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Mf(n,r,Ni),c.__reactInternalMemoizedMergedChildContext=n,qe(qt),qe(Nt),je(Nt,n)):qe(qt),je(qt,a)}var cr=null,wl=!1,Sc=!1;function bf(n){cr===null?cr=[n]:cr.push(n)}function Ev(n){wl=!0,bf(n)}function $r(){if(!Sc&&cr!==null){Sc=!0;var n=0,r=Ce;try{var a=cr;for(Ce=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}cr=null,wl=!1}catch(d){throw cr!==null&&(cr=cr.slice(n+1)),fs(wi,$r),d}finally{Ce=r,Sc=!1}}return null}var Ls=[],Ms=0,Tl=null,Il=0,hn=[],dn=0,Di=null,hr=1,dr="";function Vi(n,r){Ls[Ms++]=Il,Ls[Ms++]=Tl,Tl=n,Il=r}function Uf(n,r,a){hn[dn++]=hr,hn[dn++]=dr,hn[dn++]=Di,Di=n;var c=hr;n=dr;var d=32-bt(c)-1;c&=~(1<<d),a+=1;var p=32-bt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,hr=1<<32-bt(r)+d|a<<d|c,dr=p+n}else hr=1<<p|a<<d|c,dr=n}function Ac(n){n.return!==null&&(Vi(n,1),Uf(n,1,0))}function Rc(n){for(;n===Tl;)Tl=Ls[--Ms],Ls[Ms]=null,Il=Ls[--Ms],Ls[Ms]=null;for(;n===Di;)Di=hn[--dn],hn[dn]=null,dr=hn[--dn],hn[dn]=null,hr=hn[--dn],hn[dn]=null}var nn=null,rn=null,Ke=!1,Pn=null;function zf(n,r){var a=gn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Bf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=zr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Di!==null?{id:hr,overflow:dr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=gn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,nn=n,rn=null,!0):!1;default:return!1}}function Cc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pc(n){if(Ke){var r=rn;if(r){var a=r;if(!Bf(n,r)){if(Cc(n))throw Error(t(418));r=zr(a.nextSibling);var c=nn;r&&Bf(n,r)?zf(c,a):(n.flags=n.flags&-4097|2,Ke=!1,nn=n)}}else{if(Cc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ke=!1,nn=n}}}function jf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function Sl(n){if(n!==nn)return!1;if(!Ke)return jf(n),Ke=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!vc(n.type,n.memoizedProps)),r&&(r=rn)){if(Cc(n))throw $f(),Error(t(418));for(;r;)zf(n,r),r=zr(r.nextSibling)}if(jf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){rn=zr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?zr(n.stateNode.nextSibling):null;return!0}function $f(){for(var n=rn;n;)n=zr(n.nextSibling)}function Fs(){rn=nn=null,Ke=!1}function kc(n){Pn===null?Pn=[n]:Pn.push(n)}var wv=we.ReactCurrentBatchConfig;function Jo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Al(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function qf(n){var r=n._init;return r(n._payload)}function Hf(n){function r(M,k){if(n){var F=M.deletions;F===null?(M.deletions=[k],M.flags|=16):F.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function d(M,k){return M=Yr(M,k),M.index=0,M.sibling=null,M}function p(M,k,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<k?(M.flags|=2,k):F):(M.flags|=2,k)):(M.flags|=1048576,k)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,k,F,K){return k===null||k.tag!==6?(k=Eh(F,M.mode,K),k.return=M,k):(k=d(k,F),k.return=M,k)}function R(M,k,F,K){var oe=F.type;return oe===N?W(M,k,F.props.children,K,F.key):k!==null&&(k.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===kt&&qf(oe)===k.type)?(K=d(k,F.props),K.ref=Jo(M,k,F),K.return=M,K):(K=Ql(F.type,F.key,F.props,null,M.mode,K),K.ref=Jo(M,k,F),K.return=M,K)}function b(M,k,F,K){return k===null||k.tag!==4||k.stateNode.containerInfo!==F.containerInfo||k.stateNode.implementation!==F.implementation?(k=wh(F,M.mode,K),k.return=M,k):(k=d(k,F.children||[]),k.return=M,k)}function W(M,k,F,K,oe){return k===null||k.tag!==7?(k=zi(F,M.mode,K,oe),k.return=M,k):(k=d(k,F),k.return=M,k)}function G(M,k,F){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Eh(""+k,M.mode,F),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case We:return F=Ql(k.type,k.key,k.props,null,M.mode,F),F.ref=Jo(M,null,k),F.return=M,F;case Se:return k=wh(k,M.mode,F),k.return=M,k;case kt:var K=k._init;return G(M,K(k._payload),F)}if(er(k)||ue(k))return k=zi(k,M.mode,F,null),k.return=M,k;Al(M,k)}return null}function q(M,k,F,K){var oe=k!==null?k.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return oe!==null?null:T(M,k,""+F,K);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case We:return F.key===oe?R(M,k,F,K):null;case Se:return F.key===oe?b(M,k,F,K):null;case kt:return oe=F._init,q(M,k,oe(F._payload),K)}if(er(F)||ue(F))return oe!==null?null:W(M,k,F,K,null);Al(M,F)}return null}function Z(M,k,F,K,oe){if(typeof K=="string"&&K!==""||typeof K=="number")return M=M.get(F)||null,T(k,M,""+K,oe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case We:return M=M.get(K.key===null?F:K.key)||null,R(k,M,K,oe);case Se:return M=M.get(K.key===null?F:K.key)||null,b(k,M,K,oe);case kt:var ce=K._init;return Z(M,k,F,ce(K._payload),oe)}if(er(K)||ue(K))return M=M.get(F)||null,W(k,M,K,oe,null);Al(k,K)}return null}function re(M,k,F,K){for(var oe=null,ce=null,he=k,de=k=0,vt=null;he!==null&&de<F.length;de++){he.index>de?(vt=he,he=null):vt=he.sibling;var Oe=q(M,he,F[de],K);if(Oe===null){he===null&&(he=vt);break}n&&he&&Oe.alternate===null&&r(M,he),k=p(Oe,k,de),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe,he=vt}if(de===F.length)return a(M,he),Ke&&Vi(M,de),oe;if(he===null){for(;de<F.length;de++)he=G(M,F[de],K),he!==null&&(k=p(he,k,de),ce===null?oe=he:ce.sibling=he,ce=he);return Ke&&Vi(M,de),oe}for(he=c(M,he);de<F.length;de++)vt=Z(he,M,de,F[de],K),vt!==null&&(n&&vt.alternate!==null&&he.delete(vt.key===null?de:vt.key),k=p(vt,k,de),ce===null?oe=vt:ce.sibling=vt,ce=vt);return n&&he.forEach(function(Jr){return r(M,Jr)}),Ke&&Vi(M,de),oe}function se(M,k,F,K){var oe=ue(F);if(typeof oe!="function")throw Error(t(150));if(F=oe.call(F),F==null)throw Error(t(151));for(var ce=oe=null,he=k,de=k=0,vt=null,Oe=F.next();he!==null&&!Oe.done;de++,Oe=F.next()){he.index>de?(vt=he,he=null):vt=he.sibling;var Jr=q(M,he,Oe.value,K);if(Jr===null){he===null&&(he=vt);break}n&&he&&Jr.alternate===null&&r(M,he),k=p(Jr,k,de),ce===null?oe=Jr:ce.sibling=Jr,ce=Jr,he=vt}if(Oe.done)return a(M,he),Ke&&Vi(M,de),oe;if(he===null){for(;!Oe.done;de++,Oe=F.next())Oe=G(M,Oe.value,K),Oe!==null&&(k=p(Oe,k,de),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe);return Ke&&Vi(M,de),oe}for(he=c(M,he);!Oe.done;de++,Oe=F.next())Oe=Z(he,M,de,Oe.value,K),Oe!==null&&(n&&Oe.alternate!==null&&he.delete(Oe.key===null?de:Oe.key),k=p(Oe,k,de),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe);return n&&he.forEach(function(e0){return r(M,e0)}),Ke&&Vi(M,de),oe}function tt(M,k,F,K){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case We:e:{for(var oe=F.key,ce=k;ce!==null;){if(ce.key===oe){if(oe=F.type,oe===N){if(ce.tag===7){a(M,ce.sibling),k=d(ce,F.props.children),k.return=M,M=k;break e}}else if(ce.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===kt&&qf(oe)===ce.type){a(M,ce.sibling),k=d(ce,F.props),k.ref=Jo(M,ce,F),k.return=M,M=k;break e}a(M,ce);break}else r(M,ce);ce=ce.sibling}F.type===N?(k=zi(F.props.children,M.mode,K,F.key),k.return=M,M=k):(K=Ql(F.type,F.key,F.props,null,M.mode,K),K.ref=Jo(M,k,F),K.return=M,M=K)}return _(M);case Se:e:{for(ce=F.key;k!==null;){if(k.key===ce)if(k.tag===4&&k.stateNode.containerInfo===F.containerInfo&&k.stateNode.implementation===F.implementation){a(M,k.sibling),k=d(k,F.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else r(M,k);k=k.sibling}k=wh(F,M.mode,K),k.return=M,M=k}return _(M);case kt:return ce=F._init,tt(M,k,ce(F._payload),K)}if(er(F))return re(M,k,F,K);if(ue(F))return se(M,k,F,K);Al(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,k!==null&&k.tag===6?(a(M,k.sibling),k=d(k,F),k.return=M,M=k):(a(M,k),k=Eh(F,M.mode,K),k.return=M,M=k),_(M)):a(M,k)}return tt}var bs=Hf(!0),Wf=Hf(!1),Rl=Br(null),Cl=null,Us=null,Nc=null;function Dc(){Nc=Us=Cl=null}function Vc(n){var r=Rl.current;qe(Rl),n._currentValue=r}function Oc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function zs(n,r){Cl=n,Nc=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Wt=!0),n.firstContext=null)}function fn(n){var r=n._currentValue;if(Nc!==n)if(n={context:n,memoizedValue:r,next:null},Us===null){if(Cl===null)throw Error(t(308));Us=n,Cl.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return r}var Oi=null;function xc(n){Oi===null?Oi=[n]:Oi.push(n)}function Gf(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,xc(r)):(a.next=d.next,d.next=a),r.interleaved=a,fr(n,c)}function fr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var qr=!1;function Lc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Hr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,fr(n,a)}return d=c.interleaved,d===null?(r.next=r,xc(c)):(r.next=d.next,d.next=r),c.interleaved=r,fr(n,a)}function Pl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,xr(n,a)}}function Qf(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function kl(n,r,a,c){var d=n.updateQueue;qr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,b=R.next;R.next=null,_===null?p=b:_.next=b,_=R;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==_&&(T===null?W.firstBaseUpdate=b:T.next=b,W.lastBaseUpdate=R))}if(p!==null){var G=d.baseState;_=0,W=b=R=null,T=p;do{var q=T.lane,Z=T.eventTime;if((c&q)===q){W!==null&&(W=W.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,se=T;switch(q=r,Z=a,se.tag){case 1:if(re=se.payload,typeof re=="function"){G=re.call(Z,G,q);break e}G=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=se.payload,q=typeof re=="function"?re.call(Z,G,q):re,q==null)break e;G=ee({},G,q);break e;case 2:qr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else Z={eventTime:Z,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(b=W=Z,R=G):W=W.next=Z,_|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(W===null&&(R=G),d.baseState=R,d.firstBaseUpdate=b,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Mi|=_,n.lanes=_,n.memoizedState=G}}function Xf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Zo={},qn=Br(Zo),ea=Br(Zo),ta=Br(Zo);function xi(n){if(n===Zo)throw Error(t(174));return n}function Mc(n,r){switch(je(ta,r),je(ea,n),je(qn,Zo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}qe(qn),je(qn,r)}function Bs(){qe(qn),qe(ea),qe(ta)}function Yf(n){xi(ta.current);var r=xi(qn.current),a=ut(r,n.type);r!==a&&(je(ea,n),je(qn,a))}function Fc(n){ea.current===n&&(qe(qn),qe(ea))}var Qe=Br(0);function Nl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var bc=[];function Uc(){for(var n=0;n<bc.length;n++)bc[n]._workInProgressVersionPrimary=null;bc.length=0}var Dl=we.ReactCurrentDispatcher,zc=we.ReactCurrentBatchConfig,Li=0,Xe=null,ht=null,yt=null,Vl=!1,na=!1,ra=0,Tv=0;function Dt(){throw Error(t(321))}function Bc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Cn(n[a],r[a]))return!1;return!0}function jc(n,r,a,c,d,p){if(Li=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Dl.current=n===null||n.memoizedState===null?Rv:Cv,n=a(c,d),na){p=0;do{if(na=!1,ra=0,25<=p)throw Error(t(301));p+=1,yt=ht=null,r.updateQueue=null,Dl.current=Pv,n=a(c,d)}while(na)}if(Dl.current=Ll,r=ht!==null&&ht.next!==null,Li=0,yt=ht=Xe=null,Vl=!1,r)throw Error(t(300));return n}function $c(){var n=ra!==0;return ra=0,n}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Xe.memoizedState=yt=n:yt=yt.next=n,yt}function pn(){if(ht===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=yt===null?Xe.memoizedState:yt.next;if(r!==null)yt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?Xe.memoizedState=yt=n:yt=yt.next=n}return yt}function ia(n,r){return typeof r=="function"?r(n):r}function qc(n){var r=pn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,R=null,b=p;do{var W=b.lane;if((Li&W)===W)R!==null&&(R=R.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),c=b.hasEagerState?b.eagerState:n(c,b.action);else{var G={lane:W,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};R===null?(T=R=G,_=c):R=R.next=G,Xe.lanes|=W,Mi|=W}b=b.next}while(b!==null&&b!==p);R===null?_=c:R.next=T,Cn(c,r.memoizedState)||(Wt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,Mi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Hc(n){var r=pn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Cn(p,r.memoizedState)||(Wt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Jf(){}function Zf(n,r){var a=Xe,c=pn(),d=r(),p=!Cn(c.memoizedState,d);if(p&&(c.memoizedState=d,Wt=!0),c=c.queue,Wc(np.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,sa(9,tp.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));Li&30||ep(a,r,d)}return d}function ep(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function tp(n,r,a,c){r.value=a,r.getSnapshot=c,rp(r)&&ip(n)}function np(n,r,a){return a(function(){rp(r)&&ip(n)})}function rp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Cn(n,a)}catch{return!0}}function ip(n){var r=fr(n,1);r!==null&&Vn(r,n,1,-1)}function sp(n){var r=Hn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:n},r.queue=n,n=n.dispatch=Av.bind(null,Xe,n),[r.memoizedState,n]}function sa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function op(){return pn().memoizedState}function Ol(n,r,a,c){var d=Hn();Xe.flags|=n,d.memoizedState=sa(1|r,a,void 0,c===void 0?null:c)}function xl(n,r,a,c){var d=pn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var _=ht.memoizedState;if(p=_.destroy,c!==null&&Bc(c,_.deps)){d.memoizedState=sa(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=sa(1|r,a,p,c)}function ap(n,r){return Ol(8390656,8,n,r)}function Wc(n,r){return xl(2048,8,n,r)}function lp(n,r){return xl(4,2,n,r)}function up(n,r){return xl(4,4,n,r)}function cp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function hp(n,r,a){return a=a!=null?a.concat([n]):null,xl(4,4,cp.bind(null,r,n),a)}function Gc(){}function dp(n,r){var a=pn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Bc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function fp(n,r){var a=pn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Bc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function pp(n,r,a){return Li&21?(Cn(a,r)||(a=Si(),Xe.lanes|=a,Mi|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=a)}function Iv(n,r){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var c=zc.transition;zc.transition={};try{n(!1),r()}finally{Ce=a,zc.transition=c}}function mp(){return pn().memoizedState}function Sv(n,r,a){var c=Qr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},gp(n))yp(r,a);else if(a=Gf(n,r,a,c),a!==null){var d=Bt();Vn(a,n,c,d),_p(a,r,c)}}function Av(n,r,a){var c=Qr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(gp(n))yp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Cn(T,_)){var R=r.interleaved;R===null?(d.next=d,xc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=Gf(n,r,d,c),a!==null&&(d=Bt(),Vn(a,n,c,d),_p(a,r,c))}}function gp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function yp(n,r){na=Vl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function _p(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,xr(n,a)}}var Ll={readContext:fn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Rv={readContext:fn,useCallback:function(n,r){return Hn().memoizedState=[n,r===void 0?null:r],n},useContext:fn,useEffect:ap,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ol(4194308,4,cp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ol(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ol(4,2,n,r)},useMemo:function(n,r){var a=Hn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Hn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Sv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Hn();return n={current:n},r.memoizedState=n},useState:sp,useDebugValue:Gc,useDeferredValue:function(n){return Hn().memoizedState=n},useTransition:function(){var n=sp(!1),r=n[0];return n=Iv.bind(null,n[1]),Hn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Hn();if(Ke){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));Li&30||ep(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,ap(np.bind(null,c,p,n),[n]),c.flags|=2048,sa(9,tp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Hn(),r=_t.identifierPrefix;if(Ke){var a=dr,c=hr;a=(c&~(1<<32-bt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ra++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Tv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Cv={readContext:fn,useCallback:dp,useContext:fn,useEffect:Wc,useImperativeHandle:hp,useInsertionEffect:lp,useLayoutEffect:up,useMemo:fp,useReducer:qc,useRef:op,useState:function(){return qc(ia)},useDebugValue:Gc,useDeferredValue:function(n){var r=pn();return pp(r,ht.memoizedState,n)},useTransition:function(){var n=qc(ia)[0],r=pn().memoizedState;return[n,r]},useMutableSource:Jf,useSyncExternalStore:Zf,useId:mp,unstable_isNewReconciler:!1},Pv={readContext:fn,useCallback:dp,useContext:fn,useEffect:Wc,useImperativeHandle:hp,useInsertionEffect:lp,useLayoutEffect:up,useMemo:fp,useReducer:Hc,useRef:op,useState:function(){return Hc(ia)},useDebugValue:Gc,useDeferredValue:function(n){var r=pn();return ht===null?r.memoizedState=n:pp(r,ht.memoizedState,n)},useTransition:function(){var n=Hc(ia)[0],r=pn().memoizedState;return[n,r]},useMutableSource:Jf,useSyncExternalStore:Zf,useId:mp,unstable_isNewReconciler:!1};function kn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Kc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ml={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Qr(n),p=pr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Hr(n,p,d),r!==null&&(Vn(r,n,d,c),Pl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Qr(n),p=pr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Hr(n,p,d),r!==null&&(Vn(r,n,d,c),Pl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=Qr(n),d=pr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Hr(n,d,c),r!==null&&(Vn(r,n,c,a),Pl(r,n,c))}};function vp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Ho(a,c)||!Ho(d,p):!0}function Ep(n,r,a){var c=!1,d=jr,p=r.contextType;return typeof p=="object"&&p!==null?p=fn(p):(d=Ht(r)?Ni:Nt.current,c=r.contextTypes,p=(c=c!=null)?xs(n,d):jr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ml,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function wp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Ml.enqueueReplaceState(r,r.state,null)}function Qc(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Lc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=fn(p):(p=Ht(r)?Ni:Nt.current,d.context=xs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Kc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ml.enqueueReplaceState(d,d.state,null),kl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,r){try{var a="",c=r;do a+=Te(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Xc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Yc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var kv=typeof WeakMap=="function"?WeakMap:Map;function Tp(n,r,a){a=pr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){$l||($l=!0,dh=c),Yc(n,r)},a}function Ip(n,r,a){a=pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){Yc(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Yc(n,r),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Sp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new kv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=$v.bind(null,n,r,a),r.then(n,n))}function Ap(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Rp(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=pr(-1,1),r.tag=2,Hr(a,r,1))),a.lanes|=1),n)}var Nv=we.ReactCurrentOwner,Wt=!1;function zt(n,r,a,c){r.child=n===null?Wf(r,null,a,c):bs(r,n.child,a,c)}function Cp(n,r,a,c,d){a=a.render;var p=r.ref;return zs(r,d),c=jc(n,r,a,c,p,d),a=$c(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,mr(n,r,d)):(Ke&&a&&Ac(r),r.flags|=1,zt(n,r,c,d),r.child)}function Pp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!vh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,kp(n,r,p,c,d)):(n=Ql(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&d)){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ho,a(_,c)&&n.ref===r.ref)return mr(n,r,d)}return r.flags|=1,n=Yr(p,c),n.ref=r.ref,n.return=r,r.child=n}function kp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Ho(p,c)&&n.ref===r.ref)if(Wt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)n.flags&131072&&(Wt=!0);else return r.lanes=n.lanes,mr(n,r,d)}return Jc(n,r,a,c,d)}function Np(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(qs,sn),sn|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,je(qs,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,je(qs,sn),sn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,je(qs,sn),sn|=c;return zt(n,r,d,a),r.child}function Dp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Jc(n,r,a,c,d){var p=Ht(a)?Ni:Nt.current;return p=xs(r,p),zs(r,d),a=jc(n,r,a,c,p,d),c=$c(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,mr(n,r,d)):(Ke&&c&&Ac(r),r.flags|=1,zt(n,r,a,d),r.child)}function Vp(n,r,a,c,d){if(Ht(a)){var p=!0;El(r)}else p=!1;if(zs(r,d),r.stateNode===null)bl(n,r),Ep(r,a,c),Qc(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,b=a.contextType;typeof b=="object"&&b!==null?b=fn(b):(b=Ht(a)?Ni:Nt.current,b=xs(r,b));var W=a.getDerivedStateFromProps,G=typeof W=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==b)&&wp(r,_,c,b),qr=!1;var q=r.memoizedState;_.state=q,kl(r,c,_,d),R=r.memoizedState,T!==c||q!==R||qt.current||qr?(typeof W=="function"&&(Kc(r,a,W,c),R=r.memoizedState),(T=qr||vp(r,a,T,c,q,R,b))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=b,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,Kf(n,r),T=r.memoizedProps,b=r.type===r.elementType?T:kn(r.type,T),_.props=b,G=r.pendingProps,q=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=fn(R):(R=Ht(a)?Ni:Nt.current,R=xs(r,R));var Z=a.getDerivedStateFromProps;(W=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==G||q!==R)&&wp(r,_,c,R),qr=!1,q=r.memoizedState,_.state=q,kl(r,c,_,d);var re=r.memoizedState;T!==G||q!==re||qt.current||qr?(typeof Z=="function"&&(Kc(r,a,Z,c),re=r.memoizedState),(b=qr||vp(r,a,b,c,q,re,R)||!1)?(W||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=R,c=b):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return Zc(n,r,a,c,p,d)}function Zc(n,r,a,c,d,p){Dp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Ff(r,a,!1),mr(n,r,p);c=r.stateNode,Nv.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=bs(r,n.child,null,p),r.child=bs(r,null,T,p)):zt(n,r,T,p),r.memoizedState=c.state,d&&Ff(r,a,!0),r.child}function Op(n){var r=n.stateNode;r.pendingContext?Lf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Lf(n,r.context,!1),Mc(n,r.containerInfo)}function xp(n,r,a,c,d){return Fs(),kc(d),r.flags|=256,zt(n,r,a,c),r.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(n){return{baseLanes:n,cachePool:null,transitions:null}}function Lp(n,r,a){var c=r.pendingProps,d=Qe.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),je(Qe,d&1),n===null)return Pc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Xl(_,c,0,null),n=zi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=th(a),r.memoizedState=eh,n):nh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Dv(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return!(_&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Yr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Yr(T,p):(p=zi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?th(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=eh,c}return p=n.child,n=p.sibling,c=Yr(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function nh(n,r){return r=Xl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Fl(n,r,a,c){return c!==null&&kc(c),bs(r,n.child,null,a),n=nh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Dv(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=Xc(Error(t(422))),Fl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Xl({mode:"visible",children:c.children},d,0,null),p=zi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&bs(r,n.child,null,_),r.child.memoizedState=th(_),r.memoizedState=eh,p);if(!(r.mode&1))return Fl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Xc(p,c,void 0),Fl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Wt||T){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|_)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,fr(n,d),Vn(c,n,d,-1))}return _h(),c=Xc(Error(t(421))),Fl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=qv.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,rn=zr(d.nextSibling),nn=r,Ke=!0,Pn=null,n!==null&&(hn[dn++]=hr,hn[dn++]=dr,hn[dn++]=Di,hr=n.id,dr=n.overflow,Di=r),r=nh(r,c.children),r.flags|=4096,r)}function Mp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Oc(n.return,r,a)}function rh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Fp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Qe.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mp(n,a,r);else if(n.tag===19)Mp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(je(Qe,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Nl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),rh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Nl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}rh(r,!0,a,null,p);break;case"together":rh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function bl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function mr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Mi|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Yr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Yr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Vv(n,r,a){switch(r.tag){case 3:Op(r),Fs();break;case 5:Yf(r);break;case 1:Ht(r.type)&&El(r);break;case 4:Mc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;je(Rl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(je(Qe,Qe.current&1),r.flags|=128,null):a&r.child.childLanes?Lp(n,r,a):(je(Qe,Qe.current&1),n=mr(n,r,a),n!==null?n.sibling:null);je(Qe,Qe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return Fp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),je(Qe,Qe.current),c)break;return null;case 22:case 23:return r.lanes=0,Np(n,r,a)}return mr(n,r,a)}var bp,ih,Up,zp;bp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ih=function(){},Up=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,xi(qn.current);var p=null;switch(a){case"input":d=fi(n,d),c=fi(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=Eo(n,d),c=Eo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=yl)}Ro(a,c);var _;a=null;for(b in d)if(!c.hasOwnProperty(b)&&d.hasOwnProperty(b)&&d[b]!=null)if(b==="style"){var T=d[b];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(o.hasOwnProperty(b)?p||(p=[]):(p=p||[]).push(b,null));for(b in c){var R=c[b];if(T=d!=null?d[b]:void 0,c.hasOwnProperty(b)&&R!==T&&(R!=null||T!=null))if(b==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(b,a)),a=R;else b==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(b,R)):b==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(b,""+R):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(o.hasOwnProperty(b)?(R!=null&&b==="onScroll"&&$e("scroll",n),p||T===R||(p=[])):(p=p||[]).push(b,R))}a&&(p=p||[]).push("style",a);var b=p;(r.updateQueue=b)&&(r.flags|=4)}},zp=function(n,r,a,c){a!==c&&(r.flags|=4)};function oa(n,r){if(!Ke)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Ov(n,r,a){var c=r.pendingProps;switch(Rc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Ht(r.type)&&vl(),Vt(r),null;case 3:return c=r.stateNode,Bs(),qe(qt),qe(Nt),Uc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Sl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Pn!==null&&(mh(Pn),Pn=null))),ih(n,r),Vt(r),null;case 5:Fc(r);var d=xi(ta.current);if(a=r.type,n!==null&&r.stateNode!=null)Up(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=xi(qn.current),Sl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[$n]=r,c[Xo]=p,n=(r.mode&1)!==0,a){case"dialog":$e("cancel",c),$e("close",c);break;case"iframe":case"object":case"embed":$e("load",c);break;case"video":case"audio":for(d=0;d<Go.length;d++)$e(Go[d],c);break;case"source":$e("error",c);break;case"img":case"image":case"link":$e("error",c),$e("load",c);break;case"details":$e("toggle",c);break;case"input":ns(c,p),$e("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},$e("invalid",c);break;case"textarea":is(c,p),$e("invalid",c)}Ro(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&gl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&gl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&$e("scroll",c)}switch(a){case"input":Zn(c),ja(c,p,!0);break;case"textarea":Zn(c),wo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=yl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[$n]=r,n[Xo]=c,bp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Co(a,c),a){case"dialog":$e("cancel",n),$e("close",n),d=c;break;case"iframe":case"object":case"embed":$e("load",n),d=c;break;case"video":case"audio":for(d=0;d<Go.length;d++)$e(Go[d],n);d=c;break;case"source":$e("error",n),d=c;break;case"img":case"image":case"link":$e("error",n),$e("load",n),d=c;break;case"details":$e("toggle",n),d=c;break;case"input":ns(n,c),d=fi(n,c),$e("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),$e("invalid",n);break;case"textarea":is(n,c),d=Eo(n,c),$e("invalid",n);break;default:d=c}Ro(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?So(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&To(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&kr(n,R):typeof R=="number"&&kr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&$e("scroll",n):R!=null&&_e(n,p,R,_))}switch(a){case"input":Zn(n),ja(n,c,!1);break;case"textarea":Zn(n),wo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?tr(n,!!c.multiple,p,!1):c.defaultValue!=null&&tr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=yl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)zp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=xi(ta.current),xi(qn.current),Sl(r)){if(c=r.stateNode,a=r.memoizedProps,c[$n]=r,(p=c.nodeValue!==a)&&(n=nn,n!==null))switch(n.tag){case 3:gl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&gl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$n]=r,r.stateNode=c}return Vt(r),null;case 13:if(qe(Qe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&rn!==null&&r.mode&1&&!(r.flags&128))$f(),Fs(),r.flags|=98560,p=!1;else if(p=Sl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[$n]=r}else Fs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else Pn!==null&&(mh(Pn),Pn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Qe.current&1?dt===0&&(dt=3):_h())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return Bs(),ih(n,r),n===null&&Ko(r.stateNode.containerInfo),Vt(r),null;case 10:return Vc(r.type._context),Vt(r),null;case 17:return Ht(r.type)&&vl(),Vt(r),null;case 19:if(qe(Qe),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)oa(p,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(_=Nl(n),_!==null){for(r.flags|=128,oa(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return je(Qe,Qe.current&1|2),r.child}n=n.sibling}p.tail!==null&&Be()>Hs&&(r.flags|=128,c=!0,oa(p,!1),r.lanes=4194304)}else{if(!c)if(n=Nl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),oa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ke)return Vt(r),null}else 2*Be()-p.renderingStartTime>Hs&&a!==1073741824&&(r.flags|=128,c=!0,oa(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Be(),r.sibling=null,a=Qe.current,je(Qe,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return yh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?sn&1073741824&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function xv(n,r){switch(Rc(r),r.tag){case 1:return Ht(r.type)&&vl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bs(),qe(qt),qe(Nt),Uc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Fc(r),null;case 13:if(qe(Qe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qe(Qe),null;case 4:return Bs(),null;case 10:return Vc(r.type._context),null;case 22:case 23:return yh(),null;case 24:return null;default:return null}}var Ul=!1,Ot=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function $s(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Je(n,r,c)}else a.current=null}function sh(n,r,a){try{a()}catch(c){Je(n,r,c)}}var Bp=!1;function Mv(n,r){if(yc=Fr,n=vf(),uc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,b=0,W=0,G=n,q=null;t:for(;;){for(var Z;G!==a||d!==0&&G.nodeType!==3||(T=_+d),G!==p||c!==0&&G.nodeType!==3||(R=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(Z=G.firstChild)!==null;)q=G,G=Z;for(;;){if(G===n)break t;if(q===a&&++b===d&&(T=_),q===p&&++W===c&&(R=_),(Z=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=Z}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(_c={focusedElem:n,selectionRange:a},Fr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var se=re.memoizedProps,tt=re.memoizedState,M=r.stateNode,k=M.getSnapshotBeforeUpdate(r.elementType===r.type?se:kn(r.type,se),tt);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(K){Je(r,r.return,K)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=Bp,Bp=!1,re}function aa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&sh(r,a,p)}d=d.next}while(d!==c)}}function zl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function oh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function jp(n){var r=n.alternate;r!==null&&(n.alternate=null,jp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[$n],delete r[Xo],delete r[Tc],delete r[_v],delete r[vv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function $p(n){return n.tag===5||n.tag===3||n.tag===4}function qp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$p(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ah(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=yl));else if(c!==4&&(n=n.child,n!==null))for(ah(n,r,a),n=n.sibling;n!==null;)ah(n,r,a),n=n.sibling}function lh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(lh(n,r,a),n=n.sibling;n!==null;)lh(n,r,a),n=n.sibling}var It=null,Nn=!1;function Wr(n,r,a){for(a=a.child;a!==null;)Hp(n,r,a),a=a.sibling}function Hp(n,r,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ti,a)}catch{}switch(a.tag){case 5:Ot||$s(a,r);case 6:var c=It,d=Nn;It=null,Wr(n,r,a),It=c,Nn=d,It!==null&&(Nn?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(Nn?(n=It,a=a.stateNode,n.nodeType===8?wc(n.parentNode,a):n.nodeType===1&&wc(n,a),An(n)):wc(It,a.stateNode));break;case 4:c=It,d=Nn,It=a.stateNode.containerInfo,Nn=!0,Wr(n,r,a),It=c,Nn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&(p&2||p&4)&&sh(a,r,_),d=d.next}while(d!==c)}Wr(n,r,a);break;case 1:if(!Ot&&($s(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Je(a,r,T)}Wr(n,r,a);break;case 21:Wr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Wr(n,r,a),Ot=c):Wr(n,r,a);break;default:Wr(n,r,a)}}function Wp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Lv),r.forEach(function(c){var d=Hv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Dn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,Nn=!1;break e;case 3:It=T.stateNode.containerInfo,Nn=!0;break e;case 4:It=T.stateNode.containerInfo,Nn=!0;break e}T=T.return}if(It===null)throw Error(t(160));Hp(p,_,d),It=null,Nn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(b){Je(d,r,b)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Gp(r,n),r=r.sibling}function Gp(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dn(r,n),Wn(n),c&4){try{aa(3,n,n.return),zl(3,n)}catch(se){Je(n,n.return,se)}try{aa(5,n,n.return)}catch(se){Je(n,n.return,se)}}break;case 1:Dn(r,n),Wn(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(Dn(r,n),Wn(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var d=n.stateNode;try{kr(d,"")}catch(se){Je(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&_o(d,p),Co(T,_);var b=Co(T,p);for(_=0;_<R.length;_+=2){var W=R[_],G=R[_+1];W==="style"?So(d,G):W==="dangerouslySetInnerHTML"?To(d,G):W==="children"?kr(d,G):_e(d,W,G,b)}switch(T){case"input":vo(d,p);break;case"textarea":ss(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?tr(d,!!p.multiple,Z,!1):q!==!!p.multiple&&(p.defaultValue!=null?tr(d,!!p.multiple,p.defaultValue,!0):tr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Xo]=p}catch(se){Je(n,n.return,se)}}break;case 6:if(Dn(r,n),Wn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){Je(n,n.return,se)}}break;case 3:if(Dn(r,n),Wn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{An(r.containerInfo)}catch(se){Je(n,n.return,se)}break;case 4:Dn(r,n),Wn(n);break;case 13:Dn(r,n),Wn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(hh=Be())),c&4&&Wp(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(b=Ot)||W,Dn(r,n),Ot=b):Dn(r,n),Wn(n),c&8192){if(b=n.memoizedState!==null,(n.stateNode.isHidden=b)&&!W&&n.mode&1)for(ne=n,W=n.child;W!==null;){for(G=ne=W;ne!==null;){switch(q=ne,Z=q.child,q.tag){case 0:case 11:case 14:case 15:aa(4,q,q.return);break;case 1:$s(q,q.return);var re=q.stateNode;if(typeof re.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(se){Je(c,a,se)}}break;case 5:$s(q,q.return);break;case 22:if(q.memoizedState!==null){Xp(G);continue}}Z!==null?(Z.return=q,ne=Z):Xp(G)}W=W.sibling}e:for(W=null,G=n;;){if(G.tag===5){if(W===null){W=G;try{d=G.stateNode,b?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=G.stateNode,R=G.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=Io("display",_))}catch(se){Je(n,n.return,se)}}}else if(G.tag===6){if(W===null)try{G.stateNode.nodeValue=b?"":G.memoizedProps}catch(se){Je(n,n.return,se)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;W===G&&(W=null),G=G.return}W===G&&(W=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Dn(r,n),Wn(n),c&4&&Wp(n);break;case 21:break;default:Dn(r,n),Wn(n)}}function Wn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if($p(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(kr(d,""),c.flags&=-33);var p=qp(n);lh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=qp(n);ah(n,T,_);break;default:throw Error(t(161))}}catch(R){Je(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Fv(n,r,a){ne=n,Kp(n)}function Kp(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Ul;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Ot;T=Ul;var b=Ot;if(Ul=_,(Ot=R)&&!b)for(ne=d;ne!==null;)_=ne,R=_.child,_.tag===22&&_.memoizedState!==null?Yp(d):R!==null?(R.return=_,ne=R):Yp(d);for(;p!==null;)ne=p,Kp(p),p=p.sibling;ne=d,Ul=T,Ot=b}Qp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ne=p):Qp(n)}}function Qp(n){for(;ne!==null;){var r=ne;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ot||zl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:kn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Xf(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Xf(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var b=r.alternate;if(b!==null){var W=b.memoizedState;if(W!==null){var G=W.dehydrated;G!==null&&An(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&oh(r)}catch(q){Je(r,r.return,q)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Xp(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Yp(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{zl(4,r)}catch(R){Je(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){Je(r,d,R)}}var p=r.return;try{oh(r)}catch(R){Je(r,p,R)}break;case 5:var _=r.return;try{oh(r)}catch(R){Je(r,_,R)}}}catch(R){Je(r,r.return,R)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var bv=Math.ceil,Bl=we.ReactCurrentDispatcher,uh=we.ReactCurrentOwner,mn=we.ReactCurrentBatchConfig,Ve=0,_t=null,st=null,St=0,sn=0,qs=Br(0),dt=0,la=null,Mi=0,jl=0,ch=0,ua=null,Gt=null,hh=0,Hs=1/0,gr=null,$l=!1,dh=null,Gr=null,ql=!1,Kr=null,Hl=0,ca=0,fh=null,Wl=-1,Gl=0;function Bt(){return Ve&6?Be():Wl!==-1?Wl:Wl=Be()}function Qr(n){return n.mode&1?Ve&2&&St!==0?St&-St:wv.transition!==null?(Gl===0&&(Gl=Si()),Gl):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:bo(n.type)),n):1}function Vn(n,r,a,c){if(50<ca)throw ca=0,fh=null,Error(t(185));Or(n,a,c),(!(Ve&2)||n!==_t)&&(n===_t&&(!(Ve&2)&&(jl|=a),dt===4&&Xr(n,St)),Kt(n,c),a===1&&Ve===0&&!(r.mode&1)&&(Hs=Be()+500,wl&&$r()))}function Kt(n,r){var a=n.callbackNode;ir(n,r);var c=Ii(n,n===_t?St:0);if(c===0)a!==null&&Oo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Oo(a),r===1)n.tag===0?Ev(Zp.bind(null,n)):bf(Zp.bind(null,n)),gv(function(){!(Ve&6)&&$r()}),a=null;else{switch(Lr(c)){case 1:a=wi;break;case 4:a=Nr;break;case 16:a=ln;break;case 536870912:a=Ga;break;default:a=ln}a=am(a,Jp.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Jp(n,r){if(Wl=-1,Gl=0,Ve&6)throw Error(t(327));var a=n.callbackNode;if(Ws()&&n.callbackNode!==a)return null;var c=Ii(n,n===_t?St:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=Kl(n,c);else{r=c;var d=Ve;Ve|=2;var p=tm();(_t!==n||St!==r)&&(gr=null,Hs=Be()+500,bi(n,r));do try{Bv();break}catch(T){em(n,T)}while(!0);Dc(),Bl.current=p,Ve=d,st!==null?r=0:(_t=null,St=0,r=dt)}if(r!==0){if(r===2&&(d=Zt(n),d!==0&&(c=d,r=ph(n,d))),r===1)throw a=la,bi(n,0),Xr(n,c),Kt(n,Be()),a;if(r===6)Xr(n,c);else{if(d=n.current.alternate,!(c&30)&&!Uv(d)&&(r=Kl(n,c),r===2&&(p=Zt(n),p!==0&&(c=p,r=ph(n,p))),r===1))throw a=la,bi(n,0),Xr(n,c),Kt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Ui(n,Gt,gr);break;case 3:if(Xr(n,c),(c&130023424)===c&&(r=hh+500-Be(),10<r)){if(Ii(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ec(Ui.bind(null,n,Gt,gr),r);break}Ui(n,Gt,gr);break;case 4:if(Xr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-bt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*bv(c/1960))-c,10<c){n.timeoutHandle=Ec(Ui.bind(null,n,Gt,gr),c);break}Ui(n,Gt,gr);break;case 5:Ui(n,Gt,gr);break;default:throw Error(t(329))}}}return Kt(n,Be()),n.callbackNode===a?Jp.bind(null,n):null}function ph(n,r){var a=ua;return n.current.memoizedState.isDehydrated&&(bi(n,r).flags|=256),n=Kl(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&mh(r)),n}function mh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function Uv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Cn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xr(n,r){for(r&=~ch,r&=~jl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-bt(r),c=1<<a;n[a]=-1,r&=~c}}function Zp(n){if(Ve&6)throw Error(t(327));Ws();var r=Ii(n,0);if(!(r&1))return Kt(n,Be()),null;var a=Kl(n,r);if(n.tag!==0&&a===2){var c=Zt(n);c!==0&&(r=c,a=ph(n,c))}if(a===1)throw a=la,bi(n,0),Xr(n,r),Kt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ui(n,Gt,gr),Kt(n,Be()),null}function gh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(Hs=Be()+500,wl&&$r())}}function Fi(n){Kr!==null&&Kr.tag===0&&!(Ve&6)&&Ws();var r=Ve;Ve|=1;var a=mn.transition,c=Ce;try{if(mn.transition=null,Ce=1,n)return n()}finally{Ce=c,mn.transition=a,Ve=r,!(Ve&6)&&$r()}}function yh(){sn=qs.current,qe(qs)}function bi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,mv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Rc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&vl();break;case 3:Bs(),qe(qt),qe(Nt),Uc();break;case 5:Fc(c);break;case 4:Bs();break;case 13:qe(Qe);break;case 19:qe(Qe);break;case 10:Vc(c.type._context);break;case 22:case 23:yh()}a=a.return}if(_t=n,st=n=Yr(n.current,null),St=sn=r,dt=0,la=null,ch=jl=Mi=0,Gt=ua=null,Oi!==null){for(r=0;r<Oi.length;r++)if(a=Oi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Oi=null}return n}function em(n,r){do{var a=st;try{if(Dc(),Dl.current=Ll,Vl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Vl=!1}if(Li=0,yt=ht=Xe=null,na=!1,ra=0,uh.current=null,a===null||a.return===null){dt=1,la=r,st=null;break}e:{var p=n,_=a.return,T=a,R=r;if(r=St,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var b=R,W=T,G=W.tag;if(!(W.mode&1)&&(G===0||G===11||G===15)){var q=W.alternate;q?(W.updateQueue=q.updateQueue,W.memoizedState=q.memoizedState,W.lanes=q.lanes):(W.updateQueue=null,W.memoizedState=null)}var Z=Ap(_);if(Z!==null){Z.flags&=-257,Rp(Z,_,T,p,r),Z.mode&1&&Sp(p,b,r),r=Z,R=b;var re=r.updateQueue;if(re===null){var se=new Set;se.add(R),r.updateQueue=se}else re.add(R);break e}else{if(!(r&1)){Sp(p,b,r),_h();break e}R=Error(t(426))}}else if(Ke&&T.mode&1){var tt=Ap(_);if(tt!==null){!(tt.flags&65536)&&(tt.flags|=256),Rp(tt,_,T,p,r),kc(js(R,T));break e}}p=R=js(R,T),dt!==4&&(dt=2),ua===null?ua=[p]:ua.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Tp(p,R,r);Qf(p,M);break e;case 1:T=R;var k=p.type,F=p.stateNode;if(!(p.flags&128)&&(typeof k.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Gr===null||!Gr.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var K=Ip(p,T,r);Qf(p,K);break e}}p=p.return}while(p!==null)}rm(a)}catch(oe){r=oe,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function tm(){var n=Bl.current;return Bl.current=Ll,n===null?Ll:n}function _h(){(dt===0||dt===3||dt===2)&&(dt=4),_t===null||!(Mi&268435455)&&!(jl&268435455)||Xr(_t,St)}function Kl(n,r){var a=Ve;Ve|=2;var c=tm();(_t!==n||St!==r)&&(gr=null,bi(n,r));do try{zv();break}catch(d){em(n,d)}while(!0);if(Dc(),Ve=a,Bl.current=c,st!==null)throw Error(t(261));return _t=null,St=0,dt}function zv(){for(;st!==null;)nm(st)}function Bv(){for(;st!==null&&!Ha();)nm(st)}function nm(n){var r=om(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?rm(n):st=r,uh.current=null}function rm(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=xv(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}else if(a=Ov(a,r,sn),a!==null){st=a;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function Ui(n,r,a){var c=Ce,d=mn.transition;try{mn.transition=null,Ce=1,jv(n,r,a,c)}finally{mn.transition=d,Ce=c}return null}function jv(n,r,a,c){do Ws();while(Kr!==null);if(Ve&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ue(n,p),n===_t&&(st=_t=null,St=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||ql||(ql=!0,am(ln,function(){return Ws(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=mn.transition,mn.transition=null;var _=Ce;Ce=1;var T=Ve;Ve|=4,uh.current=null,Mv(n,a),Gp(a,n),lv(_c),Fr=!!yc,_c=yc=null,n.current=a,Fv(a),tc(),Ve=T,Ce=_,mn.transition=p}else n.current=a;if(ql&&(ql=!1,Kr=n,Hl=d),p=n.pendingLanes,p===0&&(Gr=null),Ka(a.stateNode),Kt(n,Be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if($l)throw $l=!1,n=dh,dh=null,n;return Hl&1&&n.tag!==0&&Ws(),p=n.pendingLanes,p&1?n===fh?ca++:(ca=0,fh=n):ca=0,$r(),null}function Ws(){if(Kr!==null){var n=Lr(Hl),r=mn.transition,a=Ce;try{if(mn.transition=null,Ce=16>n?16:n,Kr===null)var c=!1;else{if(n=Kr,Kr=null,Hl=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,ne=n.current;ne!==null;){var p=ne,_=p.child;if(ne.flags&16){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var b=T[R];for(ne=b;ne!==null;){var W=ne;switch(W.tag){case 0:case 11:case 15:aa(8,W,p)}var G=W.child;if(G!==null)G.return=W,ne=G;else for(;ne!==null;){W=ne;var q=W.sibling,Z=W.return;if(jp(W),W===b){ne=null;break}if(q!==null){q.return=Z,ne=q;break}ne=Z}}}var re=p.alternate;if(re!==null){var se=re.child;if(se!==null){re.child=null;do{var tt=se.sibling;se.sibling=null,se=tt}while(se!==null)}}ne=p}}if(p.subtreeFlags&2064&&_!==null)_.return=p,ne=_;else e:for(;ne!==null;){if(p=ne,p.flags&2048)switch(p.tag){case 0:case 11:case 15:aa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ne=M;break e}ne=p.return}}var k=n.current;for(ne=k;ne!==null;){_=ne;var F=_.child;if(_.subtreeFlags&2064&&F!==null)F.return=_,ne=F;else e:for(_=k;ne!==null;){if(T=ne,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:zl(9,T)}}catch(oe){Je(T,T.return,oe)}if(T===_){ne=null;break e}var K=T.sibling;if(K!==null){K.return=T.return,ne=K;break e}ne=T.return}}if(Ve=d,$r(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ti,n)}catch{}c=!0}return c}finally{Ce=a,mn.transition=r}}return!1}function im(n,r,a){r=js(a,r),r=Tp(n,r,1),n=Hr(n,r,1),r=Bt(),n!==null&&(Or(n,1,r),Kt(n,r))}function Je(n,r,a){if(n.tag===3)im(n,n,a);else for(;r!==null;){if(r.tag===3){im(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=js(a,n),n=Ip(r,n,1),r=Hr(r,n,1),n=Bt(),r!==null&&(Or(r,1,n),Kt(r,n));break}}r=r.return}}function $v(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(St&a)===a&&(dt===4||dt===3&&(St&130023424)===St&&500>Be()-hh?bi(n,0):ch|=a),Kt(n,r)}function sm(n,r){r===0&&(n.mode&1?(r=ms,ms<<=1,!(ms&130023424)&&(ms=4194304)):r=1);var a=Bt();n=fr(n,r),n!==null&&(Or(n,r,a),Kt(n,a))}function qv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),sm(n,a)}function Hv(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),sm(n,a)}var om;om=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Wt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Wt=!1,Vv(n,r,a);Wt=!!(n.flags&131072)}else Wt=!1,Ke&&r.flags&1048576&&Uf(r,Il,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;bl(n,r),n=r.pendingProps;var d=xs(r,Nt.current);zs(r,a),d=jc(null,r,c,n,d,a);var p=$c();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(p=!0,El(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Lc(r),d.updater=Ml,r.stateNode=d,d._reactInternals=r,Qc(r,c,n,a),r=Zc(null,r,c,!0,p,a)):(r.tag=0,Ke&&p&&Ac(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(bl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=Gv(c),n=kn(c,n),d){case 0:r=Jc(null,r,c,n,a);break e;case 1:r=Vp(null,r,c,n,a);break e;case 11:r=Cp(null,r,c,n,a);break e;case 14:r=Pp(null,r,c,kn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),Jc(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),Vp(n,r,c,d,a);case 3:e:{if(Op(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Kf(n,r),kl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=js(Error(t(423)),r),r=xp(n,r,c,a,d);break e}else if(c!==d){d=js(Error(t(424)),r),r=xp(n,r,c,a,d);break e}else for(rn=zr(r.stateNode.containerInfo.firstChild),nn=r,Ke=!0,Pn=null,a=Wf(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),c===d){r=mr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return Yf(r),n===null&&Pc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,vc(c,d)?_=null:p!==null&&vc(c,p)&&(r.flags|=32),Dp(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Pc(r),null;case 13:return Lp(n,r,a);case 4:return Mc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=bs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),Cp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,je(Rl,c._currentValue),c._currentValue=_,p!==null)if(Cn(p.value,_)){if(p.children===d.children&&!qt.current){r=mr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=pr(-1,a&-a),R.tag=2;var b=p.updateQueue;if(b!==null){b=b.shared;var W=b.pending;W===null?R.next=R:(R.next=W.next,W.next=R),b.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),Oc(p.return,a,r),T.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Oc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,zs(r,a),d=fn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=kn(c,r.pendingProps),d=kn(c.type,d),Pp(n,r,c,d,a);case 15:return kp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),bl(n,r),r.tag=1,Ht(c)?(n=!0,El(r)):n=!1,zs(r,a),Ep(r,c,d),Qc(r,c,d,a),Zc(null,r,c,!0,n,a);case 19:return Fp(n,r,a);case 22:return Np(n,r,a)}throw Error(t(156,r.tag))};function am(n,r){return fs(n,r)}function Wv(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,r,a,c){return new Wv(n,r,a,c)}function vh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Gv(n){if(typeof n=="function")return vh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===Pt)return 14}return 2}function Yr(n,r){var a=n.alternate;return a===null?(a=gn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ql(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")vh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return zi(a.children,d,p,r);case I:_=8,d|=8;break;case A:return n=gn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=gn(13,a,r,d),n.elementType=S,n.lanes=p,n;case Ze:return n=gn(19,a,r,d),n.elementType=Ze,n.lanes=p,n;case be:return Xl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case D:_=9;break e;case x:_=11;break e;case Pt:_=14;break e;case kt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=gn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function zi(n,r,a,c){return n=gn(7,n,c,r),n.lanes=a,n}function Xl(n,r,a,c){return n=gn(22,n,c,r),n.elementType=be,n.lanes=a,n.stateNode={isHidden:!1},n}function Eh(n,r,a){return n=gn(6,n,null,r),n.lanes=a,n}function wh(n,r,a){return r=gn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Kv(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vr(0),this.expirationTimes=Vr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Th(n,r,a,c,d,p,_,T,R){return n=new Kv(n,r,a,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=gn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(p),n}function Qv(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function lm(n){if(!n)return jr;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return Mf(n,a,r)}return r}function um(n,r,a,c,d,p,_,T,R){return n=Th(a,c,!0,n,d,p,_,T,R),n.context=lm(null),a=n.current,c=Bt(),d=Qr(a),p=pr(c,d),p.callback=r??null,Hr(a,p,d),n.current.lanes=d,Or(n,d,c),Kt(n,c),n}function Yl(n,r,a,c){var d=r.current,p=Bt(),_=Qr(d);return a=lm(a),r.context===null?r.context=a:r.pendingContext=a,r=pr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Hr(d,r,_),n!==null&&(Vn(n,d,_,p),Pl(n,d,_)),_}function Jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Ih(n,r){cm(n,r),(n=n.alternate)&&cm(n,r)}function Xv(){return null}var hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sh(n){this._internalRoot=n}Zl.prototype.render=Sh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Yl(n,r,null,null)},Zl.prototype.unmount=Sh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Fi(function(){Yl(null,n,null,null)}),r[ur]=null}};function Zl(n){this._internalRoot=n}Zl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Za();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Un.length&&r!==0&&r<Un[a].priority;a++);Un.splice(a,0,n),a===0&&nl(n)}};function Ah(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function eu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dm(){}function Yv(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var b=Jl(_);p.call(b)}}var _=um(r,c,n,0,null,!1,!1,"",dm);return n._reactRootContainer=_,n[ur]=_.current,Ko(n.nodeType===8?n.parentNode:n),Fi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var b=Jl(R);T.call(b)}}var R=Th(n,0,!1,null,null,!1,!1,"",dm);return n._reactRootContainer=R,n[ur]=R.current,Ko(n.nodeType===8?n.parentNode:n),Fi(function(){Yl(r,R,a,c)}),R}function tu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=Jl(_);T.call(R)}}Yl(r,_,n,d)}else _=Yv(a,r,n,d,c);return Jl(_)}Ya=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Dr(r.pendingLanes);a!==0&&(xr(r,a|1),Kt(r,Be()),!(Ve&6)&&(Hs=Be()+500,$r()))}break;case 13:Fi(function(){var c=fr(n,1);if(c!==null){var d=Bt();Vn(c,n,1,d)}}),Ih(n,1)}},gs=function(n){if(n.tag===13){var r=fr(n,134217728);if(r!==null){var a=Bt();Vn(r,n,134217728,a)}Ih(n,134217728)}},Ja=function(n){if(n.tag===13){var r=Qr(n),a=fr(n,r);if(a!==null){var c=Bt();Vn(a,n,r,c)}Ih(n,r)}},Za=function(){return Ce},el=function(n,r){var a=Ce;try{return Ce=n,r()}finally{Ce=a}},as=function(n,r,a){switch(r){case"input":if(vo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=_l(c);if(!d)throw Error(t(90));ts(c),vo(c,d)}}}break;case"textarea":ss(n,a);break;case"select":r=a.value,r!=null&&tr(n,!!a.multiple,r,!1)}},yi=gh,ko=Fi;var Jv={usingClientEntryPoint:!1,Events:[Yo,Vs,_l,Fn,Po,gh]},ha={findFiberByHostInstance:ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zv={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vo(n),n===null?null:n.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||Xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Ti=nu.inject(Zv),Jt=nu}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jv,Qt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ah(r))throw Error(t(200));return Qv(n,r,null,a)},Qt.createRoot=function(n,r){if(!Ah(n))throw Error(t(299));var a=!1,c="",d=hm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Th(n,1,!1,null,null,a,!1,c,d),n[ur]=r.current,Ko(n.nodeType===8?n.parentNode:n),new Sh(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Vo(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Fi(n)},Qt.hydrate=function(n,r,a){if(!eu(r))throw Error(t(200));return tu(null,n,r,!0,a)},Qt.hydrateRoot=function(n,r,a){if(!Ah(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=hm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=um(r,null,n,1,a??null,d,!1,p,_),n[ur]=r.current,Ko(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Zl(r)},Qt.render=function(n,r,a){if(!eu(r))throw Error(t(200));return tu(null,n,r,!1,a)},Qt.unmountComponentAtNode=function(n){if(!eu(n))throw Error(t(40));return n._reactRootContainer?(Fi(function(){tu(null,null,n,!1,function(){n._reactRootContainer=null,n[ur]=null})}),!0):!1},Qt.unstable_batchedUpdates=gh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!eu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return tu(n,r,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var Em;function a0(){if(Em)return Ph.exports;Em=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ph.exports=o0(),Ph.exports}var wm;function l0(){if(wm)return ru;wm=1;var i=a0();return ru.createRoot=i.createRoot,ru.hydrateRoot=i.hydrateRoot,ru}var u0=l0(),Tm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},c0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,C=(u&3)<<4|m>>4;let V=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(V=64)),s.push(t[w],t[C],t[V],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Bg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):c0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const C=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||C==null)throw new h0;const V=u<<2|m>>4;if(s.push(V),v!==64){const z=m<<4&240|v>>2;if(s.push(z),C!==64){const Q=v<<6&192|C;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class h0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d0=function(i){const e=Bg(i);return jg.encodeByteArray(e,!0)},Eu=function(i){return d0(i).replace(/\./g,"")},$g=function(i){try{return jg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=()=>f0().__FIREBASE_DEFAULTS__,m0=()=>{if(typeof process>"u"||typeof Tm>"u")return;const i=Tm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},g0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&$g(i[1]);return e&&JSON.parse(e)},Fu=()=>{try{return p0()||m0()||g0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},qg=i=>{var e,t;return(t=(e=Fu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},y0=i=>{const e=qg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Hg=()=>{var i;return(i=Fu())===null||i===void 0?void 0:i.config},Wg=i=>{var e;return(e=Fu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Eu(JSON.stringify(t)),Eu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function E0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function w0(){var i;const e=(i=Fu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function T0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function I0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function S0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function A0(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function R0(){return!w0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function C0(){try{return typeof indexedDB=="object"}catch{return!1}}function P0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="FirebaseError";class Cr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=k0,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?N0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Cr(o,m,s)}}function N0(i,e){return i.replace(D0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const D0=/\{\$([^}]+)}/g;function V0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function wu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Im(u)&&Im(h)){if(!wu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Im(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function O0(i,e){const t=new x0(i,e);return t.subscribe.bind(t)}class x0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");L0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Dh),o.error===void 0&&(o.error=Dh),o.complete===void 0&&(o.complete=Dh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Dh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(i){return i&&i._delegate?i._delegate:i}class Gi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new _0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(b0(e))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bi){return this.instances.has(e)}getOptions(e=Bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:F0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bi){return this.component?this.component.multipleInstances?e:Bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F0(i){return i===Bi?void 0:i}function b0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new M0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ae||(Ae={}));const z0={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},B0=Ae.INFO,j0={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},$0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=j0[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fd{constructor(e){this.name=e,this._logLevel=B0,this._logHandler=$0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const q0=(i,e)=>e.some(t=>i instanceof t);let Sm,Am;function H0(){return Sm||(Sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W0(){return Am||(Am=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gg=new WeakMap,$h=new WeakMap,Kg=new WeakMap,Vh=new WeakMap,pd=new WeakMap;function G0(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ii(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Gg.set(t,i)}).catch(()=>{}),pd.set(e,i),e}function K0(i){if($h.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});$h.set(i,e)}let qh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return $h.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Kg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ii(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Q0(i){qh=i(qh)}function X0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Oh(this),e,...t);return Kg.set(s,e.sort?e.sort():[e]),ii(s)}:W0().includes(i)?function(...e){return i.apply(Oh(this),e),ii(Gg.get(this))}:function(...e){return ii(i.apply(Oh(this),e))}}function Y0(i){return typeof i=="function"?X0(i):(i instanceof IDBTransaction&&K0(i),q0(i,H0())?new Proxy(i,qh):i)}function ii(i){if(i instanceof IDBRequest)return G0(i);if(Vh.has(i))return Vh.get(i);const e=Y0(i);return e!==i&&(Vh.set(i,e),pd.set(e,i)),e}const Oh=i=>pd.get(i);function J0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ii(h);return s&&h.addEventListener("upgradeneeded",y=>{s(ii(h.result),y.oldVersion,y.newVersion,ii(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Z0=["get","getKey","getAll","getAllKeys","count"],eE=["put","add","delete","clear"],xh=new Map;function Rm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(xh.get(e))return xh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=eE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Z0.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return xh.set(e,u),u}Q0(i=>({...i,get:(e,t,s)=>Rm(e,t)||i.get(e,t,s),has:(e,t)=>!!Rm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function nE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hh="@firebase/app",Cm="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new fd("@firebase/app"),rE="@firebase/app-compat",iE="@firebase/analytics-compat",sE="@firebase/analytics",oE="@firebase/app-check-compat",aE="@firebase/app-check",lE="@firebase/auth",uE="@firebase/auth-compat",cE="@firebase/database",hE="@firebase/data-connect",dE="@firebase/database-compat",fE="@firebase/functions",pE="@firebase/functions-compat",mE="@firebase/installations",gE="@firebase/installations-compat",yE="@firebase/messaging",_E="@firebase/messaging-compat",vE="@firebase/performance",EE="@firebase/performance-compat",wE="@firebase/remote-config",TE="@firebase/remote-config-compat",IE="@firebase/storage",SE="@firebase/storage-compat",AE="@firebase/firestore",RE="@firebase/vertexai",CE="@firebase/firestore-compat",PE="firebase",kE="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="[DEFAULT]",NE={[Hh]:"fire-core",[rE]:"fire-core-compat",[sE]:"fire-analytics",[iE]:"fire-analytics-compat",[aE]:"fire-app-check",[oE]:"fire-app-check-compat",[lE]:"fire-auth",[uE]:"fire-auth-compat",[cE]:"fire-rtdb",[hE]:"fire-data-connect",[dE]:"fire-rtdb-compat",[fE]:"fire-fn",[pE]:"fire-fn-compat",[mE]:"fire-iid",[gE]:"fire-iid-compat",[yE]:"fire-fcm",[_E]:"fire-fcm-compat",[vE]:"fire-perf",[EE]:"fire-perf-compat",[wE]:"fire-rc",[TE]:"fire-rc-compat",[IE]:"fire-gcs",[SE]:"fire-gcs-compat",[AE]:"fire-fst",[CE]:"fire-fst-compat",[RE]:"fire-vertex","fire-js":"fire-js",[PE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Map,DE=new Map,Gh=new Map;function Pm(i,e){try{i.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function to(i){const e=i.name;if(Gh.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,i);for(const t of Tu.values())Pm(t,i);for(const t of DE.values())Pm(t,i);return!0}function md(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function _r(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new Oa("app","Firebase",VE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=kE;function Qg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw si.create("bad-app-name",{appName:String(o)});if(t||(t=Hg()),!t)throw si.create("no-options");const u=Tu.get(o);if(u){if(wu(t,u.options)&&wu(s,u.config))return u;throw si.create("duplicate-app",{appName:o})}const h=new U0(o);for(const y of Gh.values())h.addComponent(y);const m=new OE(t,s,h);return Tu.set(o,m),m}function Xg(i=Wh){const e=Tu.get(i);if(!e&&i===Wh&&Hg())return Qg();if(!e)throw si.create("no-app",{appName:i});return e}function oi(i,e,t){var s;let o=(s=NE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(m.join(" "));return}to(new Gi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="firebase-heartbeat-database",LE=1,Ia="firebase-heartbeat-store";let Lh=null;function Yg(){return Lh||(Lh=J0(xE,LE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ia)}catch(t){console.warn(t)}}}}).catch(i=>{throw si.create("idb-open",{originalErrorMessage:i.message})})),Lh}async function ME(i){try{const t=(await Yg()).transaction(Ia),s=await t.objectStore(Ia).get(Jg(i));return await t.done,s}catch(e){if(e instanceof Cr)Ir.warn(e.message);else{const t=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(t.message)}}}async function km(i,e){try{const s=(await Yg()).transaction(Ia,"readwrite");await s.objectStore(Ia).put(e,Jg(i)),await s.done}catch(t){if(t instanceof Cr)Ir.warn(t.message);else{const s=si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ir.warn(s.message)}}}function Jg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=1024,bE=30*24*60*60*1e3;class UE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new BE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Nm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=bE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nm(),{heartbeatsToSend:s,unsentEntries:o}=zE(this._heartbeatsCache.heartbeats),u=Eu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ir.warn(t),""}}}function Nm(){return new Date().toISOString().substring(0,10)}function zE(i,e=FE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Dm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Dm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class BE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return C0()?P0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ME(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return km(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return km(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Dm(i){return Eu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(i){to(new Gi("platform-logger",e=>new tE(e),"PRIVATE")),to(new Gi("heartbeat",e=>new UE(e),"PRIVATE")),oi(Hh,Cm,i),oi(Hh,Cm,"esm2017"),oi("fire-js","")}jE("");function gd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Zg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $E=Zg,ey=new Oa("auth","Firebase",Zg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new fd("@firebase/auth");function qE(i,...e){Iu.logLevel<=Ae.WARN&&Iu.warn(`Auth (${co}): ${i}`,...e)}function cu(i,...e){Iu.logLevel<=Ae.ERROR&&Iu.error(`Auth (${co}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(i,...e){throw _d(i,...e)}function xn(i,...e){return _d(i,...e)}function yd(i,e,t){const s=Object.assign(Object.assign({},$E()),{[e]:t});return new Oa("auth","Firebase",s).create(e,{appName:i.name})}function qi(i){return yd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HE(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Yn(i,"argument-error"),yd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _d(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return ey.create(i,...e)}function pe(i,e,...t){if(!i)throw _d(e,...t)}function vr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw cu(e),new Error(e)}function Sr(i,e){i||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function WE(){return Vm()==="http:"||Vm()==="https:"}function Vm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WE()||I0()||"connection"in navigator)?navigator.onLine:!0}function KE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.shortDelay=e,this.longDelay=t,Sr(t>e,"Short delay should be less than long delay!"),this.isMobile=E0()||S0()}get(){return GE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(i,e){Sr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new La(3e4,6e4);function Ed(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function ho(i,e,t,s,o={}){return ny(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=xa(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return T0()||(v.referrerPolicy="no-referrer"),ty.fetch()(ry(i,i.config.apiHost,t,m),v)})}async function ny(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},QE),e);try{const o=new JE(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw iu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw iu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw iu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw iu(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw yd(i,w,v);Yn(i,w)}}catch(o){if(o instanceof Cr)throw o;Yn(i,"network-request-failed",{message:String(o)})}}async function YE(i,e,t,s,o={}){const u=await ho(i,e,t,s,o);return"mfaPendingCredential"in u&&Yn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function ry(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?vd(i.config,o):`${i.config.apiScheme}://${o}`}class JE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(xn(this.auth,"network-request-failed")),XE.get())})}}function iu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=xn(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(i,e){return ho(i,"POST","/v1/accounts:delete",e)}async function iy(i,e){return ho(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ew(i,e=!1){const t=Yt(i),s=await t.getIdToken(e),o=wd(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:ya(Mh(o.auth_time)),issuedAtTime:ya(Mh(o.iat)),expirationTime:ya(Mh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Mh(i){return Number(i)*1e3}function wd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return cu("JWT malformed, contained fewer than 3 sections"),null;try{const o=$g(t);return o?JSON.parse(o):(cu("Failed to decode base64 JWT payload"),null)}catch(o){return cu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Om(i){const e=wd(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Cr&&tw(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function tw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ya(this.lastLoginAt),this.creationTime=ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Sa(i,iy(t,{idToken:s}));pe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?sy(u.providerUserInfo):[],m=iw(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=y?v:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Qh(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,C)}async function rw(i){const e=Yt(i);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iw(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function sy(i){return i.map(e=>{var{providerId:t}=e,s=gd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(i,e){const t=await ny(i,{},async()=>{const s=xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=ry(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",ty.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ow(i,e){return ho(i,"POST","/v2/accounts:revokeToken",Ed(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Om(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=Om(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await sw(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Ys;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Qh(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Sa(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ew(this,e)}reload(){return rw(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Su(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_r(this.auth.app))return Promise.reject(qi(this.auth));const e=await this.getIdToken();return await Sa(this,ZE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,v,w;const C=(s=t.displayName)!==null&&s!==void 0?s:void 0,V=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,ge=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ve=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:_e,emailVerified:we,isAnonymous:We,providerData:Se,stsTokenManager:N}=t;pe(_e&&N,e,"internal-error");const I=Ys.fromJSON(this.name,N);pe(typeof _e=="string",e,"internal-error"),Zr(C,e.name),Zr(V,e.name),pe(typeof we=="boolean",e,"internal-error"),pe(typeof We=="boolean",e,"internal-error"),Zr(z,e.name),Zr(Q,e.name),Zr(X,e.name),Zr(H,e.name),Zr(ge,e.name),Zr(ve,e.name);const A=new Er({uid:_e,auth:e,email:V,emailVerified:we,displayName:C,isAnonymous:We,photoURL:Q,phoneNumber:z,tenantId:X,stsTokenManager:I,createdAt:ge,lastLoginAt:ve});return Se&&Array.isArray(Se)&&(A.providerData=Se.map(P=>Object.assign({},P))),H&&(A._redirectEventId=H),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Ys;o.updateFromServerResponse(t);const u=new Er({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Su(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?sy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Ys;m.updateFromIdToken(s);const y=new Er({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Qh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new Map;function wr(i){Sr(i instanceof Function,"Expected a class definition");let e=xm.get(i);return e?(Sr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,xm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oy.type="NONE";const Lm=oy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(i,e,t){return`firebase:${i}:${e}:${t}`}class Js{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=hu(this.userKey,o.apiKey,u),this.fullPersistenceKey=hu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Js(wr(Lm),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||wr(Lm);const h=hu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const C=Er._fromJSON(e,w);v!==u&&(m=C),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Js(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Js(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ay(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dy(e))return"Blackberry";if(fy(e))return"Webos";if(ly(e))return"Safari";if((e.includes("chrome/")||uy(e))&&!e.includes("edge/"))return"Chrome";if(hy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ay(i=Ft()){return/firefox\//i.test(i)}function ly(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uy(i=Ft()){return/crios\//i.test(i)}function cy(i=Ft()){return/iemobile/i.test(i)}function hy(i=Ft()){return/android/i.test(i)}function dy(i=Ft()){return/blackberry/i.test(i)}function fy(i=Ft()){return/webos/i.test(i)}function Td(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function aw(i=Ft()){var e;return Td(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lw(){return A0()&&document.documentMode===10}function py(i=Ft()){return Td(i)||hy(i)||fy(i)||dy(i)||/windows phone/i.test(i)||cy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(i,e=[]){let t;switch(i){case"Browser":t=Mm(Ft());break;case"Worker":t=`${Mm(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${co}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(i,e={}){return ho(i,"GET","/v2/passwordPolicy",Ed(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=6;class dw{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:hw,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fm(this),this.idTokenSubscription=new Fm(this),this.beforeStateQueue=new uw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ey,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await iy(this,{idToken:e}),s=await Er._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_r(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_r(this.app))return Promise.reject(qi(this));const t=e?Yt(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _r(this.app)?Promise.reject(qi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _r(this.app)?Promise.reject(qi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cw(this),t=new dw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ow(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=my(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&qE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bu(i){return Yt(i)}class Fm{constructor(e){this.auth=e,this.observer=null,this.addObserver=O0(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pw(i){Id=i}function mw(i){return Id.loadJS(i)}function gw(){return Id.gapiScript}function yw(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(i,e){const t=md(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(wu(u,e??{}))return o;Yn(o,"already-initialized")}return t.initialize({options:e})}function vw(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(wr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ew(i,e,t){const s=bu(i);pe(s._canInitEmulator,s,"emulator-config-failed"),pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=gy(e),{host:h,port:m}=ww(e),y=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${y}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),Tw()}function gy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function ww(i){const e=gy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:bm(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:bm(h)}}}function bm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Tw(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,t){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(i,e){return YE(i,"POST","/v1/accounts:signInWithIdp",Ed(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="http://localhost";class Ki extends yy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=gd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Ki(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Zs(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Zs(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zs(e,t)}buildRequest(){const e={requestUri:Iw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends Sd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Ma{constructor(){super("facebook.com")}static credential(e){return Ki._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ki._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return yr.credential(t,s)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Ma{constructor(){super("github.com")}static credential(e){return Ki._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ma{constructor(){super("twitter.com")}static credential(e,t){return Ki._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Er._fromIdTokenResponse(e,s,o),h=Um(s);return new no({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Um(s);return new no({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Um(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Cr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Au(e,t,s,o)}}function _y(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(i,u,e,s):u})}async function Sw(i,e,t=!1){const s=await Sa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return no._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(i,e,t=!1){const{auth:s}=i;if(_r(s.app))return Promise.reject(qi(s));const o="reauthenticate";try{const u=await Sa(i,_y(s,o,e,i),t);pe(u.idToken,s,"internal-error");const h=wd(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(i.uid===m,s,"user-mismatch"),no._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Yn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(i,e,t=!1){if(_r(i.app))return Promise.reject(qi(i));const s="signIn",o=await _y(i,s,e),u=await no._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function Cw(i,e,t,s){return Yt(i).onIdTokenChanged(e,t,s)}function Pw(i,e,t){return Yt(i).beforeAuthStateChanged(e,t)}function kw(i,e,t,s){return Yt(i).onAuthStateChanged(e,t,s)}const Ru="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ru,"1"),this.storage.removeItem(Ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=1e3,Dw=10;class Ey extends vy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=py(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);lw()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Dw):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Nw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ey.type="LOCAL";const Vw=Ey;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends vy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wy.type="SESSION";const Ty=wy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Uu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await Ow(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=Ad("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const V=C;if(V.data.eventId===v)switch(V.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(V.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function Lw(i){Kn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function Mw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fw(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function bw(){return Iy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="firebaseLocalStorageDb",Uw=1,Cu="firebaseLocalStorage",Ay="fbase_key";class Fa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zu(i,e){return i.transaction([Cu],e?"readwrite":"readonly").objectStore(Cu)}function zw(){const i=indexedDB.deleteDatabase(Sy);return new Fa(i).toPromise()}function Xh(){const i=indexedDB.open(Sy,Uw);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Cu,{keyPath:Ay})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Cu)?e(s):(s.close(),await zw(),e(await Xh()))})})}async function zm(i,e,t){const s=zu(i,!0).put({[Ay]:e,value:t});return new Fa(s).toPromise()}async function Bw(i,e){const t=zu(i,!1).get(e),s=await new Fa(t).toPromise();return s===void 0?null:s.value}function Bm(i,e){const t=zu(i,!0).delete(e);return new Fa(t).toPromise()}const jw=800,$w=3;class Ry{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>$w)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uu._getInstance(bw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mw(),!this.activeServiceWorker)return;this.sender=new xw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xh();return await zm(e,Ru,"1"),await Bm(e,Ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>zm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Bw(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=zu(o,!1).getAll();return new Fa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ry.type="LOCAL";const qw=Ry;new La(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(i,e){return e?wr(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends yy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hw(i){return Rw(i.auth,new Rd(i),i.bypassAuthState)}function Ww(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),Aw(t,new Rd(i),i.bypassAuthState)}async function Gw(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),Sw(t,new Rd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hw;case"linkViaPopup":case"linkViaRedirect":return Gw;case"reauthViaPopup":case"reauthViaRedirect":return Ww;default:Yn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new La(2e3,1e4);async function Qw(i,e,t){if(_r(i.app))return Promise.reject(xn(i,"operation-not-supported-in-this-environment"));const s=bu(i);HE(i,e,Sd);const o=Cy(s,t);return new ji(s,"signInViaPopup",e,o).executeNotNull()}class ji extends Py{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ji.currentPopupAction&&ji.currentPopupAction.cancel(),ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=Ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kw.get())};e()}}ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="pendingRedirect",du=new Map;class Yw extends Py{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=du.get(this.auth._key());if(!e){try{const s=await Jw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}du.set(this.auth._key(),e)}return this.bypassAuthState||du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jw(i,e){const t=tT(e),s=eT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function Zw(i,e){du.set(i._key(),e)}function eT(i){return wr(i._redirectPersistence)}function tT(i){return hu(Xw,i.config.apiKey,i.name)}async function nT(i,e,t=!1){if(_r(i.app))return Promise.reject(qi(i));const s=bu(i),o=Cy(s,e),h=await new Yw(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=10*60*1e3;class iT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!ky(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(xn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rT&&this.cachedEventUids.clear(),this.cachedEventUids.has(jm(e))}saveEventToCache(e){this.cachedEventUids.add(jm(e)),this.lastProcessedEventTime=Date.now()}}function jm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function ky({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ky(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(i,e={}){return ho(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lT=/^https?/;async function uT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await oT(i);for(const t of e)try{if(cT(t))return}catch{}Yn(i,"unauthorized-domain")}function cT(i){const e=Kh(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!lT.test(t))return!1;if(aT.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=new La(3e4,6e4);function $m(){const i=Kn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function dT(i){return new Promise((e,t)=>{var s,o,u;function h(){$m(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$m(),t(xn(i,"network-request-failed"))},timeout:hT.get()})}if(!((o=(s=Kn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Kn().gapi)===null||u===void 0)&&u.load)h();else{const m=yw("iframefcb");return Kn()[m]=()=>{gapi.load?h():t(xn(i,"network-request-failed"))},mw(`${gw()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw fu=null,e})}let fu=null;function fT(i){return fu=fu||dT(i),fu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=new La(5e3,15e3),mT="__/auth/iframe",gT="emulator/auth/iframe",yT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_T=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vT(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?vd(e,gT):`https://${i.config.authDomain}/${mT}`,s={apiKey:e.apiKey,appName:i.name,v:co},o=_T.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${xa(s).slice(1)}`}async function ET(i){const e=await fT(i),t=Kn().gapi;return pe(t,i,"internal-error"),e.open({where:document.body,url:vT(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yT,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=xn(i,"network-request-failed"),m=Kn().setTimeout(()=>{u(h)},pT.get());function y(){Kn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TT=500,IT=600,ST="_blank",AT="http://localhost";class qm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RT(i,e,t,s=TT,o=IT){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},wT),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=uy(v)?ST:t),ay(v)&&(e=e||AT,y.scrollbars="yes");const w=Object.entries(y).reduce((V,[z,Q])=>`${V}${z}=${Q},`,"");if(aw(v)&&m!=="_self")return CT(e||"",m),new qm(null);const C=window.open(e||"",m,w);pe(C,i,"popup-blocked");try{C.focus()}catch{}return new qm(C)}function CT(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="__/auth/handler",kT="emulator/auth/handler",NT=encodeURIComponent("fac");async function Hm(i,e,t,s,o,u){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:co,eventId:o};if(e instanceof Sd){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",V0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,C]of Object.entries({}))h[w]=C}if(e instanceof Ma){const w=e.getScopes().filter(C=>C!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${NT}=${encodeURIComponent(y)}`:"";return`${DT(i)}?${xa(m).slice(1)}${v}`}function DT({config:i}){return i.emulator?vd(i,kT):`https://${i.authDomain}/${PT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="webStorageSupport";class VT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ty,this._completeRedirectFn=nT,this._overrideRedirectResult=Zw}async _openPopup(e,t,s,o){var u;Sr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Hm(e,t,s,Kh(),o);return RT(e,h,Ad())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Hm(e,t,s,Kh(),o);return Lw(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Sr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ET(e),s=new iT(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fh,{type:Fh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Fh];h!==void 0&&t(!!h),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return py()||ly()||Td()}}const OT=VT;var Wm="@firebase/auth",Gm="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MT(i){to(new Gi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:my(i)},v=new fw(s,o,u,y);return vw(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),to(new Gi("auth-internal",e=>{const t=bu(e.getProvider("auth").getImmediate());return(s=>new xT(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),oi(Wm,Gm,LT(i)),oi(Wm,Gm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=5*60,bT=Wg("authIdTokenMaxAge")||FT;let Km=null;const UT=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>bT)return;const o=t==null?void 0:t.token;Km!==o&&(Km=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zT(i=Xg()){const e=md(i,"auth");if(e.isInitialized())return e.getImmediate();const t=_w(i,{popupRedirectResolver:OT,persistence:[qw,Vw,Ty]}),s=Wg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=UT(u.toString());Pw(t,h,()=>h(t.currentUser)),Cw(t,m=>h(m))}}const o=qg("auth");return o&&Ew(t,`http://${o}`),t}function BT(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}pw({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=xn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",BT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MT("Browser");var Qm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hi,Ny;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(P,D,x){for(var S=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)S[Ze-2]=arguments[Ze];return I.prototype[D].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var P=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)P[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)P[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],D=N.g[2];var x=N.g[3],S=I+(x^A&(D^x))+P[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+P[1]+3905402710&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+P[2]+606105819&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+P[3]+3250441966&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(x^A&(D^x))+P[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+P[5]+1200080426&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+P[6]+2821735955&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+P[7]+4249261313&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(x^A&(D^x))+P[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+P[9]+2336552879&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+P[10]+4294925233&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+P[11]+2304563134&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(x^A&(D^x))+P[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+P[13]+4254626195&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+P[14]+2792965006&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+P[15]+1236535329&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(D^x&(A^D))+P[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+P[6]+3225465664&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+P[11]+643717713&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+P[0]+3921069994&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(A^D))+P[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+P[10]+38016083&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+P[15]+3634488961&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+P[4]+3889429448&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(A^D))+P[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+P[14]+3275163606&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+P[3]+4107603335&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+P[8]+1163531501&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(A^D))+P[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+P[2]+4243563512&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+P[7]+1735328473&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+P[12]+2368359562&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(A^D^x)+P[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+P[8]+2272392833&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+P[11]+1839030562&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+P[14]+4259657740&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^x)+P[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+P[4]+1272893353&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+P[7]+4139469664&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+P[10]+3200236656&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^x)+P[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+P[0]+3936430074&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+P[3]+3572445317&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+P[6]+76029189&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^x)+P[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+P[12]+3873151461&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+P[15]+530742520&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+P[2]+3299628645&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(D^(A|~x))+P[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+P[7]+1126891415&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+P[14]+2878612391&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+P[5]+4237533241&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~x))+P[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+P[3]+2399980690&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+P[10]+4293915773&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+P[1]+2240044497&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~x))+P[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+P[15]+4264355552&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+P[6]+2734768916&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+P[13]+1309151649&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~x))+P[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+P[11]+3174756917&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+P[2]+718787259&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+x&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,P=this.B,D=this.h,x=0;x<I;){if(D==0)for(;x<=A;)o(this,N,x),x+=this.blockSize;if(typeof N=="string"){for(;x<I;)if(P[D++]=N.charCodeAt(x++),D==this.blockSize){o(this,P),D=0;break}}else for(;x<I;)if(P[D++]=N[x++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var P=0;32>P;P+=8)N[A++]=this.g[I]>>>P&255;return N};function u(N,I){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],P=!0,D=N.length-1;0<=D;D--){var x=N[D]|0;P&&x==I||(A[D]=x,P=!1)}this.g=A}var m={};function y(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return C;if(0>N)return H(v(-N));for(var I=[],A=1,P=0;N>=A;P++)I[P]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return H(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),P=C,D=0;D<N.length;D+=8){var x=Math.min(8,N.length-D),S=parseInt(N.substring(D,D+x),I);8>x?(x=v(Math.pow(I,x)),P=P.j(x).add(v(S))):(P=P.j(A),P=P.add(v(S)))}return P}var C=y(0),V=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(X(this))return-H(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var P=this.i(A);N+=(0<=P?P:4294967296+P)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(Q(this))return"0";if(X(this))return"-"+H(this).toString(N);for(var I=v(Math.pow(N,6)),A=this,P="";;){var D=we(A,I).g;A=ge(A,D.j(I));var x=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=D,Q(A))return x+P;for(;6>x.length;)x="0"+x;P=x+P}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function Q(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function X(N){return N.h==-1}i.l=function(N){return N=ge(this,N),X(N)?-1:Q(N)?0:1};function H(N){for(var I=N.g.length,A=[],P=0;P<I;P++)A[P]=~N.g[P];return new h(A,~N.h).add(V)}i.abs=function(){return X(this)?H(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0,D=0;D<=I;D++){var x=P+(this.i(D)&65535)+(N.i(D)&65535),S=(x>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);P=S>>>16,x&=65535,S&=65535,A[D]=S<<16|x}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ge(N,I){return N.add(H(I))}i.j=function(N){if(Q(this)||Q(N))return C;if(X(this))return X(N)?H(this).j(H(N)):H(H(this).j(N));if(X(N))return H(this.j(H(N)));if(0>this.l(z)&&0>N.l(z))return v(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],P=0;P<2*I;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<N.g.length;D++){var x=this.i(P)>>>16,S=this.i(P)&65535,Ze=N.i(D)>>>16,Pt=N.i(D)&65535;A[2*P+2*D]+=S*Pt,ve(A,2*P+2*D),A[2*P+2*D+1]+=x*Pt,ve(A,2*P+2*D+1),A[2*P+2*D+1]+=S*Ze,ve(A,2*P+2*D+1),A[2*P+2*D+2]+=x*Ze,ve(A,2*P+2*D+2)}for(P=0;P<I;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=I;P<2*I;P++)A[P]=0;return new h(A,0)};function ve(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function _e(N,I){this.g=N,this.h=I}function we(N,I){if(Q(I))throw Error("division by zero");if(Q(N))return new _e(C,C);if(X(N))return I=we(H(N),I),new _e(H(I.g),H(I.h));if(X(I))return I=we(N,H(I)),new _e(H(I.g),I.h);if(30<N.g.length){if(X(N)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var A=V,P=I;0>=P.l(N);)A=We(A),P=We(P);var D=Se(A,1),x=Se(P,1);for(P=Se(P,2),A=Se(A,2);!Q(P);){var S=x.add(P);0>=S.l(N)&&(D=D.add(A),x=S),P=Se(P,1),A=Se(A,1)}return I=ge(N,D.j(I)),new _e(D,I)}for(D=C;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),x=v(A),S=x.j(I);X(S)||0<S.l(N);)A-=P,x=v(A),S=x.j(I);Q(x)&&(x=V),D=D.add(x),N=ge(N,S)}return new _e(D,N)}i.A=function(N){return we(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)&N.i(P);return new h(A,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)|N.i(P);return new h(A,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)^N.i(P);return new h(A,this.h^N.h)};function We(N){for(var I=N.g.length+1,A=[],P=0;P<I;P++)A[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(A,N.h)}function Se(N,I){var A=I>>5;I%=32;for(var P=N.g.length-A,D=[],x=0;x<P;x++)D[x]=0<I?N.i(x+A)>>>I|N.i(x+A+1)<<32-I:N.i(x+A);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ny=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Hi=h}).apply(typeof Qm<"u"?Qm:typeof self<"u"?self:typeof window<"u"?window:{});var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dy,fa,Vy,pu,Yh,Oy,xy,Ly;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof su=="object"&&su];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var U=g++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function C(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function V(l,f,g){return V=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:C,V.apply(null,arguments)}function z(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Q(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var Y=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Y[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,Y)}}function X(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function H(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let Y=0;Y<U;Y++)l[L+Y]=E[Y]}else l.push(E)}}class ge{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ve(l){return/^[\s\xa0]*$/.test(l)}function _e(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var We=_e().indexOf("Gecko")!=-1&&!(_e().toLowerCase().indexOf("webkit")!=-1&&_e().indexOf("Edge")==-1)&&!(_e().indexOf("Trident")!=-1||_e().indexOf("MSIE")!=-1)&&_e().indexOf("Edge")==-1;function Se(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function N(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let U=0;U<A.length;U++)g=A[U],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function D(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function x(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ue;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ze{constructor(){this.h=this.g=null}add(f,g){const E=Pt.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Pt=new ge(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let be,J=!1,ue=new Ze,ee=()=>{const l=m.Promise.resolve(void 0);be=()=>{l.then(O)}};var O=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){x(g)}var f=Pt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Te(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(We){e:{try{we(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ke[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Te.aa.h.call(this)}}Q(Te,ae);var ke={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),Le=0;function ze(l,f,g,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=L,this.key=++Le,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Zn(l){this.src=l,this.g={},this.h=0}Zn.prototype.add=function(l,f,g,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var Y=Pr(l,f,E,L);return-1<Y?(f=l[Y],g||(f.fa=!1)):(f=new ze(f,this.src,U,!!E,L),f.fa=g,l.push(f)),f};function ts(l,f){var g=f.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(mt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Pr(l,f,g,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==E)return L}return-1}var fi="closure_lm_"+(1e6*Math.random()|0),ns={};function _o(l,f,g,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)_o(l,f[U],g,E,L);return null}return g=wo(g),l&&l[xe]?l.K(f,g,v(E)?!!E.capture:!!E,L):vo(l,f,g,!1,E,L)}function vo(l,f,g,E,L,U){if(!f)throw Error("Invalid event type");var Y=v(L)?!!L.capture:!!L,Fe=is(l);if(Fe||(l[fi]=Fe=new Zn(l)),g=Fe.add(f,g,E,Y,U),g.proxy)return g;if(E=ja(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ee||(L=Y),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(tr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ja(){function l(g){return f.call(l.src,l.listener,g)}const f=Eo;return l}function rs(l,f,g,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)rs(l,f[U],g,E,L);else E=v(E)?!!E.capture:!!E,g=wo(g),l&&l[xe]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],g=Pr(U,g,E,L),-1<g&&(mt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=is(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Pr(f,g,E,L)),(g=-1<l?f[l]:null)&&er(g))}function er(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[xe])ts(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(tr(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=is(f))?(ts(g,l),g.h==0&&(g.src=null,f[fi]=null)):mt(l)}}}function tr(l){return l in ns?ns[l]:ns[l]="on"+l}function Eo(l,f){if(l.da)l=!0;else{f=new Te(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&er(l),l=g.call(E,f)}return l}function is(l){return l=l[fi],l instanceof Zn?l:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function wo(l){return typeof l=="function"?l:(l[ss]||(l[ss]=function(f){return l.handleEvent(f)}),l[ss])}function lt(){j.call(this),this.i=new Zn(this),this.M=this,this.F=null}Q(lt,j),lt.prototype[xe]=!0,lt.prototype.removeEventListener=function(l,f,g,E){rs(this,l,f,g,E)};function ut(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var L=f;f=new ae(E,l),P(f,L)}if(L=!0,g)for(var U=g.length-1;0<=U;U--){var Y=f.g=g[U];L=nr(Y,E,!0,f)&&L}if(Y=f.g=l,L=nr(Y,E,!0,f)&&L,L=nr(Y,E,!1,f)&&L,g)for(U=0;U<g.length;U++)Y=f.g=g[U],L=nr(Y,E,!1,f)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)mt(g[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},lt.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function nr(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var Y=f[U];if(Y&&!Y.da&&Y.capture==g){var Fe=Y.listener,ct=Y.ha||Y.src;Y.fa&&ts(l.i,Y),L=Fe.call(ct,E)!==!1&&L}}return L&&!E.defaultPrevented}function To(l,f,g){if(typeof l=="function")g&&(l=V(l,g));else if(l&&typeof l.handleEvent=="function")l=V(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function kr(l){l.g=To(()=>{l.g=null,l.i&&(l.i=!1,kr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class pi extends j{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:kr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(l){j.call(this),this.h=l,this.g={}}Q(mi,j);var Io=[];function So(l){Se(l.g,function(f,g){this.g.hasOwnProperty(g)&&er(f)},l),l.g={}}mi.prototype.N=function(){mi.aa.N.call(this),So(this)},mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ao=m.JSON.stringify,Ro=m.JSON.parse,Co=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function gi(){}gi.prototype.h=null;function os(l){return l.h||(l.h=l.i())}function as(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mn(){ae.call(this,"d")}Q(Mn,ae);function ls(){ae.call(this,"c")}Q(ls,ae);var Fn={},Po=null;function yi(){return Po=Po||new lt}Fn.La="serverreachability";function ko(l){ae.call(this,Fn.La,l)}Q(ko,ae);function rr(l){const f=yi();ut(f,new ko(f))}Fn.STAT_EVENT="statevent";function No(l,f){ae.call(this,Fn.STAT_EVENT,l),this.stat=f}Q(No,ae);function et(l){const f=yi();ut(f,new No(f,l))}Fn.Ma="timingevent";function us(l,f){ae.call(this,Fn.Ma,l),this.size=f}Q(us,ae);function _n(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function _i(){this.g=!0}_i.prototype.xa=function(){this.g=!1};function vi(l,f,g,E,L,U){l.info(function(){if(l.g)if(U)for(var Y="",Fe=U.split("&"),ct=0;ct<Fe.length;ct++){var Ne=Fe[ct].split("=");if(1<Ne.length){var gt=Ne[0];Ne=Ne[1];var it=gt.split("_");Y=2<=it.length&&it[1]=="type"?Y+(gt+"="+Ne+"&"):Y+(gt+"=redacted&")}}else Y=null;else Y=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+g+`
`+Y})}function cs(l,f,g,E,L,U,Y){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+g+`
`+U+" "+Y})}function vn(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+ec(l,g)+(E?" "+E:"")})}function Do(l,f){l.info(function(){return"TIMEOUT: "+f})}_i.prototype.info=function(){};function ec(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return Ao(g)}catch{return f}}var hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$a={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},En;function Ei(){}Q(Ei,gi),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},En=new Ei;function wn(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qa}function qa(){this.i=null,this.g="",this.h=!1}var Vo={},ds={};function fs(l,f,g){l.L=1,l.v=xr(Zt(f)),l.m=g,l.P=!0,Oo(l,null)}function Oo(l,f){l.F=Date.now(),Be(l),l.A=Zt(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Mr(g.i,"t",E),l.C=0,g=l.j.J,l.h=new qa,l.g=ll(l.j,g?f:null,!l.m),0<l.O&&(l.M=new pi(V(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Io[0]=L.toString()),L=Io);for(var U=0;U<L.length;U++){var Y=_o(g,L[U],E||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),rr(),vi(l.i,l.u,l.A,l.l,l.R,l.m)}wn.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},wn.prototype.Y=function(l){try{if(l==this.g)e:{const it=$t(this.g);var f=this.g.Ba();const cn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Uo(this.g)))){this.J||it!=4||f==7||(f==8||0>=cn?rr(3):rr(2)),wi(this);var g=this.g.Z();this.X=g;t:if(Ha(this)){var E=Uo(this.g);l="";var L=E.length,U=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),Nr(this);var Y="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=g==200,cs(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ct=this.g;if((Fe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ve(Fe)){var Ne=Fe;break t}}Ne=null}if(g=Ne)vn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xo(this,g);else{this.o=!1,this.s=3,et(12),ln(this),Nr(this);break e}}if(this.P){g=!0;let tn;for(;!this.J&&this.C<Y.length;)if(tn=tc(this,Y),tn==ds){it==4&&(this.s=4,et(14),g=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Vo){this.s=4,et(15),vn(this.i,this.l,Y,"[Invalid Chunk]"),g=!1;break}else vn(this.i,this.l,tn,null),xo(this,tn);if(Ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||Y.length!=0||this.h.h||(this.s=1,et(16),g=!1),this.o=this.o&&g,!g)vn(this.i,this.l,Y,"[Invalid Chunked Response]"),ln(this),Nr(this);else if(0<Y.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Bo(gt),gt.M=!0,et(11))}}else vn(this.i,this.l,Y,null),xo(this,Y);it==4&&ln(this),this.o&&!this.J&&(it==4?Ss(this.j,this):(this.o=!1,Be(this)))}else vs(this.g),g==400&&0<Y.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),ln(this),Nr(this)}}}catch{}finally{}};function Ha(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function tc(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?ds:(g=Number(f.substring(g,E)),isNaN(g)?Vo:(E+=1,E+g>f.length?ds:(f=f.slice(E,E+g),l.C=E+g,f)))}wn.prototype.cancel=function(){this.J=!0,ln(this)};function Be(l){l.S=Date.now()+l.I,Wa(l,l.I)}function Wa(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_n(V(l.ba,l),f)}function wi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}wn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Do(this.i,this.A),this.L!=2&&(rr(),et(17)),ln(this),this.s=2,Nr(this)):Wa(this,this.S-l)};function Nr(l){l.j.G==0||l.J||Ss(l.j,l)}function ln(l){wi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,So(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function xo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||bt(g.h,l))){if(!l.K&&bt(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Is(g),Rn(g);else break e;Ts(g),et(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=_n(V(g.Za,g),6e3));if(1>=Ka(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else lr(g,11)}else if((l.K||g.g==l)&&Is(g),!ve(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let Ne=L[f];if(g.T=Ne[0],Ne=Ne[1],g.G==2)if(Ne[0]=="c"){g.K=Ne[1],g.ia=Ne[2];const gt=Ne[3];gt!=null&&(g.la=gt,g.j.info("VER="+g.la));const it=Ne[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const cn=Ne[5];cn!=null&&typeof cn=="number"&&0<cn&&(E=1.5*cn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const tn=l.g;if(tn){const Pi=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pi){var U=E.h;U.g||Pi.indexOf("spdy")==-1&&Pi.indexOf("quic")==-1&&Pi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Lo(U,U.h),U.h=null))}if(E.D){const Rs=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Rs&&(E.ya=Rs,Ue(E.I,E.D,Rs))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var Y=l;if(E.qa=al(E,E.J?E.ia:null,E.W),Y.K){Qa(E.h,Y);var Fe=Y,ct=E.L;ct&&(Fe.I=ct),Fe.B&&(wi(Fe),Be(Fe)),E.g=Y}else Ci(E);0<g.i.length&&Bn(g)}else Ne[0]!="stop"&&Ne[0]!="close"||lr(g,7);else g.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?lr(g,7):Tt(g):Ne[0]!="noop"&&g.l&&g.l.ta(Ne),g.v=0)}}rr(4)}catch{}}var Ga=class{constructor(l,f){this.g=l,this.map=f}};function Ti(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ka(l){return l.h?1:l.g?l.g.size:0}function bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Lo(l,f){l.g?l.g.add(f):l.h=f}function Qa(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ti.prototype.cancel=function(){if(this.i=Xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xa(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return X(l.i)}function ps(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function ms(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Dr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=ms(l),E=ps(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],g&&g[U],l)}var Ii=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),L=null;if(0<=E){var U=l[g].substring(0,E);L=l[g].substring(E+1)}else U=l[g];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ir(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ir){this.h=l.h,Si(this,l.j),this.o=l.o,this.g=l.g,Vr(this,l.s),this.l=l.l;var f=l.i,g=new bn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Or(this,g),this.m=l.m}else l&&(f=String(l).match(Ii))?(this.h=!1,Si(this,f[1]||"",!0),this.o=Ce(f[2]||""),this.g=Ce(f[3]||"",!0),Vr(this,f[4]),this.l=Ce(f[5]||"",!0),Or(this,f[6]||"",!0),this.m=Ce(f[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}ir.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Lr(f,gs,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Lr(f,gs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Lr(g,g.charAt(0)=="/"?Za:Ja,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Lr(g,Mo)),l.join("")};function Zt(l){return new ir(l)}function Si(l,f,g){l.j=g?Ce(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Vr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Or(l,f,g){f instanceof bn?(l.i=f,Un(l.i,l.h)):(g||(f=Lr(f,el)),l.i=new bn(f,l.h))}function Ue(l,f,g){l.i.set(f,g)}function xr(l){return Ue(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ce(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Lr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Ya),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ya(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var gs=/[#\/\?@]/g,Ja=/[#\?:]/g,Za=/[#\?]/g,el=/[#\?@]/g,Mo=/#/g;function bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&nc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=bn.prototype,i.add=function(l,f){wt(this),this.i=null,l=un(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Tn(l,f){wt(l),f=un(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function In(l,f){return wt(l),f=un(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)g.push(f[E])}return g},i.V=function(l){wt(this);let f=[];if(typeof l=="string")In(this,l)&&(f=f.concat(this.g.get(un(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return wt(this),this.i=null,l=un(this,l),In(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mr(l,f,g){Tn(l,f),0<g.length&&(l.i=null,l.g.set(un(l,f),X(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const U=encodeURIComponent(String(E)),Y=this.V(E);for(E=0;E<Y.length;E++){var L=U;Y[E]!==""&&(L+="="+encodeURIComponent(String(Y[E]))),l.push(L)}}return this.i=l.join("&")};function un(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Un(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(Tn(this,E),Mr(this,L,g))},l)),l.j=f}function rc(l,f){const g=new _i;if(m.Image){const E=new Image;E.onload=z(jt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=z(jt,g,"TestLoadImage: error",!1,f,E),E.onabort=z(jt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=z(jt,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function tl(l,f){const g=new _i,E=new AbortController,L=setTimeout(()=>{E.abort(),jt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?jt(g,"TestPingServer: ok",!0,f):jt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),jt(g,"TestPingServer: error",!1,f)})}function jt(l,f,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function ic(){this.g=new Co}function nl(l,f,g){const E=g||"";try{Dr(l,function(L,U){let Y=L;v(L)&&(Y=Ao(L)),f.push(E+U+"="+encodeURIComponent(Y))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function sr(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(sr,gi),sr.prototype.g=function(){return new Ai(this.l,this.j)},sr.prototype.i=function(l){return function(){return l}}({});function Ai(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(Ai,lt),i=Ai.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,An(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Sn(this):An(this),this.readyState==3&&rl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Sn(this))},i.Qa=function(l){this.g&&(this.response=l,Sn(this))},i.ga=function(){this.g&&Sn(this)};function Sn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,An(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function An(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function or(l){let f="";return Se(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Fr(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=or(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Ue(l,f,g))}function Ge(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(Ge,lt);var sc=/^https?$/i,Fo=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():En.g(),this.v=this.o?os(this.o):os(En),this.g.onreadystatechange=V(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Ri(this,U);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Fo,f,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Y]of g)this.g.setRequestHeader(U,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_s(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Ri(this,U)}};function Ri(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ys(l),en(l)}function ys(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),en(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),en(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?bo(this):this.bb())},i.bb=function(){bo(this)};function bo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)To(l.Ea,0,l);else if(ut(l,"readystatechange"),$t(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=Y===0){var L=String(l.D).match(Ii)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!sc.test(L?L.toLowerCase():"")}g=E}if(g)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<$t(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ys(l)}}finally{en(l)}}}}function en(l,f){if(l.g){_s(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{g.onreadystatechange=E}catch{}}}function _s(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Ro(f)}};function Uo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function vs(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ve(l[E]))continue;var g=D(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[L]||[];f[L]=U,U.push(g)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function zo(l){this.Aa=0,this.i=[],this.j=new _i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,l),this.cb=zn("retryDelaySeedMs",1e4,l),this.Wa=zn("forwardChannelMaxRetries",2,l),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ti(l&&l.concurrentRequestLimit),this.Da=new ic,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=zo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){et(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=al(this,null,this.W),Bn(this)};function Tt(l){if(Es(l),l.G==3){var f=l.U++,g=Zt(l.I);if(Ue(g,"SID",l.K),Ue(g,"RID",f),Ue(g,"TYPE","terminate"),ar(l,g),f=new wn(l,l.j,f),f.L=2,f.v=xr(Zt(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=ll(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Be(f)}ol(l)}function Rn(l){l.g&&(Bo(l),l.g.cancel(),l.g=null)}function Es(l){Rn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Is(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Bn(l){if(!Jt(l.h)&&!l.s){l.s=!0;var f=l.Ga;be||ee(),J||(be(),J=!0),ue.add(f,l),l.B=0}}function oc(l,f){return Ka(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_n(V(l.Ga,l,f),sl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new wn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=br(this,L,f),g=Zt(this.I),Ue(g,"RID",l),Ue(g,"CVER",22),this.D&&Ue(g,"X-HTTP-Session-Id",this.D),ar(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(or(U)))+"&"+f:this.m&&Fr(g,this.m,U)),Lo(this.h,L),this.Ua&&Ue(g,"TYPE","init"),this.P?(Ue(g,"$req",f),Ue(g,"SID","null"),L.T=!0,fs(L,g,null)):fs(L,g,f),this.G=2}}else this.G==3&&(l?ws(this,l):this.i.length==0||Jt(this.h)||ws(this))};function ws(l,f){var g;f?g=f.l:g=l.U++;const E=Zt(l.I);Ue(E,"SID",l.K),Ue(E,"RID",g),Ue(E,"AID",l.T),ar(l,E),l.m&&l.o&&Fr(E,l.m,l.o),g=new wn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=br(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Lo(l.h,g),fs(g,E,f)}function ar(l,f){l.H&&Se(l.H,function(g,E){Ue(f,E,g)}),l.l&&Dr({},function(g,E){Ue(f,E,g)})}function br(l,f,g){g=Math.min(l.i.length,g);var E=l.l?V(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const Y=["count="+g];U==-1?0<g?(U=L[0].g,Y.push("ofs="+U)):U=0:Y.push("ofs="+U);let Fe=!0;for(let ct=0;ct<g;ct++){let Ne=L[ct].g;const gt=L[ct].map;if(Ne-=U,0>Ne)U=Math.max(0,L[ct].g-100),Fe=!1;else try{nl(gt,Y,"req"+Ne+"_")}catch{E&&E(gt)}}if(Fe){E=Y.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Ci(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;be||ee(),J||(be(),J=!0),ue.add(f,l),l.v=0}}function Ts(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_n(V(l.Fa,l),sl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,il(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_n(V(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),Rn(this),il(this))};function Bo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function il(l){l.g=new wn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Zt(l.qa);Ue(f,"RID","rpc"),Ue(f,"SID",l.K),Ue(f,"AID",l.T),Ue(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ue(f,"TO",l.ja),Ue(f,"TYPE","xmlhttp"),ar(l,f),l.m&&l.o&&Fr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=xr(Zt(f)),g.m=null,g.P=!0,Oo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Rn(this),Ts(this),et(19))};function Is(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ss(l,f){var g=null;if(l.g==f){Is(l),Bo(l),l.g=null;var E=2}else if(bt(l.h,f))g=f.D,Qa(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=yi(),ut(E,new us(E,g)),Bn(l)}else Ci(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&oc(l,f)||E==2&&Ts(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:lr(l,5);break;case 4:lr(l,10);break;case 3:lr(l,6);break;default:lr(l,2)}}}function sl(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function lr(l,f){if(l.j.info("Error code "+f),f==2){var g=V(l.fb,l),E=l.Xa;const L=!E;E=new ir(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Si(E,"https"),xr(E),L?rc(E.toString(),g):tl(E.toString(),g)}else et(2);l.G=0,l.l&&l.l.sa(f),ol(l),Es(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function ol(l){if(l.G=0,l.ka=[],l.l){const f=Xa(l.h);(f.length!=0||l.i.length!=0)&&(H(l.ka,f),H(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function al(l,f,g){var E=g instanceof ir?Zt(g):new ir(g);if(E.g!="")f&&(E.g=f+"."+E.g),Vr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new ir(null);E&&Si(U,E),f&&(U.g=f),L&&Vr(U,L),g&&(U.l=g),E=U}return g=l.D,f=l.ya,g&&f&&Ue(E,g,f),Ue(E,"VER",l.la),ar(l,E),E}function ll(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new sr({eb:g})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function jo(){}i=jo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function As(){}As.prototype.g=function(l,f){return new Ut(l,f)};function Ut(l,f){lt.call(this),this.g=new zo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ve(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ve(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new jn(this)}Q(Ut,lt),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Tt(this.g)},Ut.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Ao(l),l=g);f.i.push(new Ga(f.Ya++,l)),f.G==3&&Bn(f)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,Ut.aa.N.call(this)};function ul(l){Mn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(ul,Mn);function cl(){ls.call(this),this.status=1}Q(cl,ls);function jn(l){this.g=l}Q(jn,jo),jn.prototype.ua=function(){ut(this.g,"a")},jn.prototype.ta=function(l){ut(this.g,new ul(l))},jn.prototype.sa=function(l){ut(this.g,new cl)},jn.prototype.ra=function(){ut(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Ly=function(){return new As},xy=function(){return yi()},Oy=Fn,Yh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,pu=hs,$a.COMPLETE="complete",Vy=$a,as.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",lt.prototype.listen=lt.prototype.K,fa=as,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Dy=Ge}).apply(typeof su<"u"?su:typeof self<"u"?self:typeof window<"u"?window:{});const Xm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new fd("@firebase/firestore");function Gs(){return Qi.logLevel}function te(i,...e){if(Qi.logLevel<=Ae.DEBUG){const t=e.map(Cd);Qi.debug(`Firestore (${fo}): ${i}`,...t)}}function Ar(i,...e){if(Qi.logLevel<=Ae.ERROR){const t=e.map(Cd);Qi.error(`Firestore (${fo}): ${i}`,...t)}}function ro(i,...e){if(Qi.logLevel<=Ae.WARN){const t=e.map(Cd);Qi.warn(`Firestore (${fo}): ${i}`,...t)}}function Cd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(i="Unexpected state"){const e=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+i;throw Ar(e),new Error(e)}function Me(i,e){i||fe()}function ye(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Cr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class $T{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qT{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Me(this.o===void 0);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Wi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Wi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Wi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string"),new My(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Lt(e)}}class HT{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class WT{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new HT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Me(this.o===void 0);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Me(typeof t.token=="string"),this.R=t.token,new GT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=QT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function io(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new ft(0,0))}static max(){return new me(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,s){t===void 0?t=0:t>e.length&&fe(),s===void 0?s=e.length-t:s>e.length-t&&fe(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Aa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Aa?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class He extends Aa{construct(e,t,s){return new He(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new He(t)}static emptyPath(){return new He([])}}const XT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Aa{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return XT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(He.fromString(e))}static fromName(e){return new le(He.fromString(e).popFirst(5))}static empty(){return new le(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new He(e.slice()))}}function YT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=me.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new li(o,le.empty(),e)}function JT(i){return new li(i.readTime,i.key,-1)}class li{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new li(me.min(),le.empty(),-1)}static max(){return new li(me.max(),le.empty(),-1)}}function ZT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(i.documentKey,e.documentKey),t!==0?t:Pe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==eI)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},y=>s(y))}),h=!0,u===o&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(o=>o?B.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new B((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new B((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function nI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function mo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Bu.oe=-1;function ju(i){return i==null}function Pu(i){return i===0&&1/i==-1/0}function rI(i){return typeof i=="number"&&Number.isInteger(i)&&!Pu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Ym(e)),e=sI(i.get(t),e);return Ym(e)}function sI(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function Ym(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Xi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function by(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ou(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ou(this.root,e,this.comparator,!1)}getReverseIterator(){return new ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ou(this.root,e,this.comparator,!0)}}class ou{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=o??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new At(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return At.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,t,s,o,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zm(this.data.getIterator())}getIteratorFrom(e){return new Zm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class Zm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new On([])}unionWith(e){let t=new pt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Uy("Invalid base64 string: "+u):u}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const oI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ui(i){if(Me(!!i),typeof i=="string"){let e=0;const t=oI.exec(i);if(Me(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ci(i){return typeof i=="string"?Ct.fromBase64String(i):Ct.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function $u(i){const e=i.mapValue.fields.__previous_value__;return Pd(e)?$u(e):e}function Ra(i){const e=ui(i.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t,s,o,u,h,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v}}class Ca{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ca("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ca&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Pd(i)?4:uI(i)?9007199254740991:lI(i)?10:11:fe()}function Jn(i,e){if(i===e)return!0;const t=hi(i);if(t!==hi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ra(i).isEqual(Ra(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=ui(o.timestampValue),m=ui(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return ci(o.bytesValue).isEqual(ci(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Pu(h)===Pu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return io(i.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Jm(h)!==Jm(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!Jn(h[y],m[y])))return!1;return!0}(i,e);default:return fe()}}function Pa(i,e){return(i.values||[]).find(t=>Jn(t,e))!==void 0}function so(i,e){if(i===e)return 0;const t=hi(i),s=hi(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return eg(i.timestampValue,e.timestampValue);case 4:return eg(Ra(i),Ra(e));case 5:return Pe(i.stringValue,e.stringValue);case 6:return function(u,h){const m=ci(u),y=ci(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Pe(m[v],y[v]);if(w!==0)return w}return Pe(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Pe(rt(u.latitude),rt(h.latitude));return m!==0?m:Pe(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return tg(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,v,w;const C=u.fields||{},V=h.fields||{},z=(m=C.value)===null||m===void 0?void 0:m.arrayValue,Q=(y=V.value)===null||y===void 0?void 0:y.arrayValue,X=Pe(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((w=Q==null?void 0:Q.values)===null||w===void 0?void 0:w.length)||0);return X!==0?X:tg(z,Q)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===au.mapValue&&h===au.mapValue)return 0;if(u===au.mapValue)return 1;if(h===au.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let C=0;C<y.length&&C<w.length;++C){const V=Pe(y[C],w[C]);if(V!==0)return V;const z=so(m[y[C]],v[w[C]]);if(z!==0)return z}return Pe(y.length,w.length)}(i.mapValue,e.mapValue);default:throw fe()}}function eg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const t=ui(i),s=ui(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function tg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=so(t[o],s[o]);if(u)return u}return Pe(t.length,s.length)}function oo(i){return Jh(i)}function Jh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=ui(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return ci(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return le.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Jh(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Jh(t.fields[h])}`;return o+"}"}(i.mapValue):fe()}function mu(i){switch(hi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$u(i);return e?16+mu(e):16;case 5:return 2*i.stringValue.length;case 6:return ci(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+mu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return Xi(s.fields,(u,h)=>{o+=u.length+mu(h)}),o}(i.mapValue);default:throw fe()}}function ng(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Zh(i){return!!i&&"integerValue"in i}function kd(i){return!!i&&"arrayValue"in i}function rg(i){return!!i&&"nullValue"in i}function ig(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function gu(i){return!!i&&"mapValue"in i}function lI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function _a(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Xi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=_a(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_a(i.arrayValue.values[t]);return e}return Object.assign({},i)}function uI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!gu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_a(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=_a(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());gu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];gu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Xi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new yn(_a(this.value))}}function zy(i){const e=[];return Xi(i.fields,(t,s)=>{const o=new Rt([t]);if(gu(s)){const u=zy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new On(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,me.min(),me.min(),me.min(),yn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,me.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,me.min(),me.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,me.min(),me.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this.position=e,this.inclusive=t}}function sg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=le.comparator(le.fromName(h.referenceValue),t.key):s=so(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function og(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Jn(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t="asc"){this.field=e,this.dir=t}}function cI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{}class at extends By{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new dI(e,t,s):t==="array-contains"?new mI(e,s):t==="in"?new gI(e,s):t==="not-in"?new yI(e,s):t==="array-contains-any"?new _I(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new fI(e,s):new pI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(so(t,this.value)):t!==null&&hi(this.value)===hi(t)&&this.matchesComparison(so(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends By{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ln(e,t)}matches(e){return jy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function jy(i){return i.op==="and"}function $y(i){return hI(i)&&jy(i)}function hI(i){for(const e of i.filters)if(e instanceof Ln)return!1;return!0}function ed(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+oo(i.value);if($y(i))return i.filters.map(e=>ed(e)).join(",");{const e=i.filters.map(t=>ed(t)).join(",");return`${i.op}(${e})`}}function qy(i,e){return i instanceof at?function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&Jn(s.value,o.value)}(i,e):i instanceof Ln?function(s,o){return o instanceof Ln&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&qy(h,o.filters[m]),!0):!1}(i,e):void fe()}function Hy(i){return i instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${oo(t.value)}`}(i):i instanceof Ln?function(t){return t.op.toString()+" {"+t.getFilters().map(Hy).join(" ,")+"}"}(i):"Filter"}class dI extends at{constructor(e,t,s){super(e,t,s),this.key=le.fromName(s.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class fI extends at{constructor(e,t){super(e,"in",t),this.keys=Wy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class pI extends at{constructor(e,t){super(e,"not-in",t),this.keys=Wy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Wy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>le.fromName(s.referenceValue))}class mI extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kd(t)&&Pa(t.arrayValue,this.value)}}class gI extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pa(this.value.arrayValue,t)}}class yI extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Pa(this.value.arrayValue,t)}}class _I extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Pa(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function ag(i,e=null,t=[],s=[],o=null,u=null,h=null){return new vI(i,e,t,s,o,u,h)}function Nd(i){const e=ye(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ed(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ju(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>oo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>oo(s)).join(",")),e.ue=t}return e.ue}function Dd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!cI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!qy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!og(i.startAt,e.startAt)&&og(i.endAt,e.endAt)}function td(i){return le.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function EI(i,e,t,s,o,u,h,m){return new go(i,e,t,s,o,u,h,m)}function Vd(i){return new go(i)}function lg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Gy(i){return i.collectionGroup!==null}function va(i){const e=ye(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(Rt.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new ka(u,s))}),t.has(Rt.keyField().canonicalString())||e.ce.push(new ka(Rt.keyField(),s))}return e.ce}function Qn(i){const e=ye(i);return e.le||(e.le=wI(e,va(i))),e.le}function wI(i,e){if(i.limitType==="F")return ag(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new ka(o.field,u)});const t=i.endAt?new ku(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new ku(i.startAt.position,i.startAt.inclusive):null;return ag(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function nd(i,e){const t=i.filters.concat([e]);return new go(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function rd(i,e,t){return new go(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function qu(i,e){return Dd(Qn(i),Qn(e))&&i.limitType===e.limitType}function Ky(i){return`${Nd(Qn(i))}|lt:${i.limitType}`}function Ks(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Hy(o)).join(", ")}]`),ju(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>oo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>oo(o)).join(",")),`Target(${s})`}(Qn(i))}; limitType=${i.limitType})`}function Hu(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):le.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of va(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,y){const v=sg(h,m,y);return h.inclusive?v<=0:v<0}(s.startAt,va(s),o)||s.endAt&&!function(h,m,y){const v=sg(h,m,y);return h.inclusive?v>=0:v>0}(s.endAt,va(s),o))}(i,e)}function TI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Qy(i){return(e,t)=>{let s=!1;for(const o of va(i)){const u=II(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function II(i,e,t){const s=i.field.isKeyField()?le.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?so(y,v):fe()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return fe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Xi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return by(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new Ye(le.comparator);function Rr(){return SI}const Xy=new Ye(le.comparator);function pa(...i){let e=Xy;for(const t of i)e=e.insert(t.key,t);return e}function Yy(i){let e=Xy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function $i(){return Ea()}function Jy(){return Ea()}function Ea(){return new Yi(i=>i.toString(),(i,e)=>i.isEqual(e))}const AI=new Ye(le.comparator),RI=new pt(le.comparator);function Re(...i){let e=RI;for(const t of i)e=e.add(t);return e}const CI=new pt(Pe);function PI(){return CI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pu(e)?"-0":e}}function Zy(i){return{integerValue:""+i}}function kI(i,e){return rI(e)?Zy(e):Od(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this._=void 0}}function NI(i,e,t){return i instanceof Na?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Pd(u)&&(u=$u(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof Da?t_(i,e):i instanceof Va?n_(i,e):function(o,u){const h=e_(o,u),m=ug(h)+ug(o.Pe);return Zh(h)&&Zh(o.Pe)?Zy(m):Od(o.serializer,m)}(i,e)}function DI(i,e,t){return i instanceof Da?t_(i,e):i instanceof Va?n_(i,e):t}function e_(i,e){return i instanceof Nu?function(s){return Zh(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Na extends Wu{}class Da extends Wu{constructor(e){super(),this.elements=e}}function t_(i,e){const t=r_(e);for(const s of i.elements)t.some(o=>Jn(o,s))||t.push(s);return{arrayValue:{values:t}}}class Va extends Wu{constructor(e){super(),this.elements=e}}function n_(i,e){let t=r_(e);for(const s of i.elements)t=t.filter(o=>!Jn(o,s));return{arrayValue:{values:t}}}class Nu extends Wu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ug(i){return rt(i.integerValue||i.doubleValue)}function r_(i){return kd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t){this.field=e,this.transform=t}}function OI(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Da&&o instanceof Da||s instanceof Va&&o instanceof Va?io(s.elements,o.elements,Jn):s instanceof Nu&&o instanceof Nu?Jn(s.Pe,o.Pe):s instanceof Na&&o instanceof Na}(i.transform,e.transform)}class xI{constructor(e,t){this.version=e,this.transformResults=t}}class Tr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tr}static exists(e){return new Tr(void 0,e)}static updateTime(e){return new Tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Gu{}function i_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new o_(i.key,Tr.none()):new ba(i.key,i.data,Tr.none());{const t=i.data,s=yn.empty();let o=new pt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ji(i.key,s,new On(o.toArray()),Tr.none())}}function LI(i,e,t){i instanceof ba?function(o,u,h){const m=o.value.clone(),y=hg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Ji?function(o,u,h){if(!yu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=hg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(s_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function wa(i,e,t,s){return i instanceof ba?function(u,h,m,y){if(!yu(u.precondition,h))return m;const v=u.value.clone(),w=dg(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof Ji?function(u,h,m,y){if(!yu(u.precondition,h))return m;const v=dg(u.fieldTransforms,y,h),w=h.data;return w.setAll(s_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(C=>C.field))}(i,e,t,s):function(u,h,m){return yu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function MI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=e_(s.transform,o||null);u!=null&&(t===null&&(t=yn.empty()),t.set(s.field,u))}return t||null}function cg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&io(s,o,(u,h)=>OI(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ba extends Gu{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ji extends Gu{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function s_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function hg(i,e,t){const s=new Map;Me(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,DI(h,m,t[o]))}return s}function dg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,NI(u,h,e))}return s}class o_ extends Gu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FI extends Gu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&LI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=wa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=wa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Jy();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=i_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(me.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Re())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(t,s)=>cg(t,s))&&io(this.baseMutations,e.baseMutations,(t,s)=>cg(t,s))}}class xd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Me(e.mutations.length===s.length);let o=function(){return AI}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new xd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,De;function BI(i){switch(i){default:return fe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function a_(i){if(i===void 0)return Ar("GRPC error has no .code"),$.UNKNOWN;switch(i){case ot.OK:return $.OK;case ot.CANCELLED:return $.CANCELLED;case ot.UNKNOWN:return $.UNKNOWN;case ot.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ot.INTERNAL:return $.INTERNAL;case ot.UNAVAILABLE:return $.UNAVAILABLE;case ot.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ot.NOT_FOUND:return $.NOT_FOUND;case ot.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ot.ABORTED:return $.ABORTED;case ot.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ot.DATA_LOSS:return $.DATA_LOSS;default:return fe()}}(De=ot||(ot={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=new Hi([4294967295,4294967295],0);function fg(i){const e=jI().encode(i),t=new Ny;return t.update(e),new Uint8Array(t.digest())}function pg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Hi([t,s],0),new Hi([o,u],0)]}class Ld{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ma(`Invalid padding: ${t}`);if(s<0)throw new ma(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ma(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ma(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Hi.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(Hi.fromNumber(s)));return o.compare($I)===1&&(o=new Hi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=fg(e),[s,o]=pg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Ld(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Te===0)return;const t=fg(e),[s,o]=pg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ua.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ku(me.min(),o,new Ye(Pe),Rr(),Re())}}class Ua{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ua(s,t,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class l_{constructor(e,t){this.targetId=e,this.me=t}}class u_{constructor(e,t,s=Ct.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class mg{constructor(){this.fe=0,this.ge=gg(),this.pe=Ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Re(),t=Re(),s=Re();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:fe()}}),new Ua(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=gg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rr(),this.qe=lu(),this.Qe=lu(),this.Ke=new Ye(Pe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:fe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(td(u))if(s===0){const h=new le(u.path);this.We(t,h,Mt.newNoDocument(h,me.min()))}else Me(s===1);else{const h=this.Ze(t);if(h!==s){const m=this.Xe(e),y=m?this.et(m,e,h):1;if(y!==0){this.He(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=ci(s).toUint8Array()}catch(y){if(y instanceof Uy)return ro("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Ld(h,o,u)}catch(y){return ro(y instanceof ma?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Le.nt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((u,h)=>{const m=this.Ye(h);if(m){if(u.current&&td(m.target)){const y=new le(m.target.path);this.st(y).has(h)||this.ot(h,y)||this.We(h,y,Mt.newNoDocument(y,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Re();this.Qe.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const v=this.Ye(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new Ku(e,t,this.Ke,this.ke,s);return this.ke=Rr(),this.qe=lu(),this.Qe=lu(),this.Ke=new Ye(Pe),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new mg,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new pt(Pe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pt(Pe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new mg),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function lu(){return new Ye(le.comparator)}function gg(){return new Ye(le.comparator)}const HI={asc:"ASCENDING",desc:"DESCENDING"},WI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GI={and:"AND",or:"OR"};class KI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function id(i,e){return i.useProto3Json||ju(e)?e:{value:e}}function Du(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function c_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function QI(i,e){return Du(i,e.toTimestamp())}function Xn(i){return Me(!!i),me.fromTimestamp(function(t){const s=ui(t);return new ft(s.seconds,s.nanos)}(i))}function Md(i,e){return sd(i,e).canonicalString()}function sd(i,e){const t=function(o){return new He(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function h_(i){const e=He.fromString(i);return Me(g_(e)),e}function od(i,e){return Md(i.databaseId,e.path)}function bh(i,e){const t=h_(e);if(t.get(1)!==i.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new le(f_(t))}function d_(i,e){return Md(i.databaseId,e)}function XI(i){const e=h_(i);return e.length===4?He.emptyPath():f_(e)}function ad(i){return new He(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function f_(i){return Me(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function yg(i,e,t){return{name:od(i,e),fields:t.value.mapValue.fields}}function YI(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(Me(w===void 0||typeof w=="string"),Ct.fromBase64String(w||"")):(Me(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Ct.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?$.UNKNOWN:a_(v.code);return new ie(w,v.message||"")}(h);t=new u_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=bh(i,s.document.name),u=Xn(s.document.updateTime),h=s.document.createTime?Xn(s.document.createTime):me.min(),m=new yn({mapValue:{fields:s.document.fields}}),y=Mt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new _u(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=bh(i,s.document),u=s.readTime?Xn(s.readTime):me.min(),h=Mt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new _u([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=bh(i,s.document),u=s.removedTargetIds||[];t=new _u([],u,o,null)}else{if(!("filter"in e))return fe();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new zI(o,u),m=s.targetId;t=new l_(m,h)}}return t}function JI(i,e){let t;if(e instanceof ba)t={update:yg(i,e.key,e.value)};else if(e instanceof o_)t={delete:od(i,e.key)};else if(e instanceof Ji)t={update:yg(i,e.key,e.data),updateMask:a1(e.fieldMask)};else{if(!(e instanceof FI))return fe();t={verify:od(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Na)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Da)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Va)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Nu)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw fe()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:QI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:fe()}(i,e.precondition)),t}function ZI(i,e){return i&&i.length>0?(Me(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Xn(o.updateTime):Xn(u);return h.isEqual(me.min())&&(h=Xn(u)),new xI(h,o.transformResults||[])}(t,e))):[]}function e1(i,e){return{documents:[d_(i,e.path)]}}function t1(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=d_(i,o);const u=function(v){if(v.length!==0)return m_(Ln.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(V){return{field:Qs(V.field),direction:i1(V.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=id(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:o}}function n1(i){let e=XI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Me(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(C){const V=p_(C);return V instanceof Ln&&$y(V)?V.getFilters():[V]}(t.where));let h=[];t.orderBy&&(h=function(C){return C.map(V=>function(Q){return new ka(Xs(Q.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Q.direction))}(V))}(t.orderBy));let m=null;t.limit&&(m=function(C){let V;return V=typeof C=="object"?C.value:C,ju(V)?null:V}(t.limit));let y=null;t.startAt&&(y=function(C){const V=!!C.before,z=C.values||[];return new ku(z,V)}(t.startAt));let v=null;return t.endAt&&(v=function(C){const V=!C.before,z=C.values||[];return new ku(z,V)}(t.endAt)),EI(e,o,h,u,m,"F",y,v)}function r1(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function p_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Xs(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Xs(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Xs(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Xs(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(i):i.fieldFilter!==void 0?function(t){return at.create(Xs(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Ln.create(t.compositeFilter.filters.map(s=>p_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return fe()}}(t.compositeFilter.op))}(i):fe()}function i1(i){return HI[i]}function s1(i){return WI[i]}function o1(i){return GI[i]}function Qs(i){return{fieldPath:i.canonicalString()}}function Xs(i){return Rt.fromServerFormat(i.fieldPath)}function m_(i){return i instanceof at?function(t){if(t.op==="=="){if(ig(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NAN"}};if(rg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ig(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NAN"}};if(rg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(t.field),op:s1(t.op),value:t.value}}}(i):i instanceof Ln?function(t){const s=t.getFilters().map(o=>m_(o));return s.length===1?s[0]:{compositeFilter:{op:o1(t.op),filters:s}}}(i):fe()}function a1(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function g_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,s,o,u=me.min(),h=me.min(),m=Ct.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.ht=e}}function u1(i){const e=n1({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.ln=new h1}addToCollectionParentIndex(e,t){return this.ln.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(li.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(li.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class h1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new pt(He.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new pt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ao(0)}static Qn(){return new ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg([i,e],[t,s]){const o=Pe(i,t);return o===0?Pe(e,s):o}class d1{constructor(e){this.Gn=e,this.buffer=new pt(vg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();vg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class f1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){mo(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await po(t)}await this.Yn(3e5)})}}class p1{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return B.resolve(Bu.oe);const s=new d1(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(_g)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_g):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,h=Date.now(),this.nthSequenceNumber(e,o))).next(C=>(s=C,m=Date.now(),this.removeTargets(e,s,t))).next(C=>(u=C,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(C=>(v=Date.now(),Gs()<=Ae.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${C} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C})))}}function m1(i,e){return new p1(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(){this.changes=new Yi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&wa(s.mutation,o,On.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Re()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Re()){const o=$i();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=pa();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=$i();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Re()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Rr();const h=Ea(),m=function(){return Ea()}();return t.forEach((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Ji)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),wa(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,On.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var C;return m.set(v,new y1(w,(C=h.get(v))!==null&&C!==void 0?C:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Ea();let o=new Ye((h,m)=>h-m),u=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||On.empty();w=m.applyToLocalView(v,w),s.set(y,w);const C=(o.get(m.batchId)||Re()).add(y);o=o.insert(m.batchId,C)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,C=Jy();w.forEach(V=>{if(!u.has(V)){const z=i_(t.get(V),s.get(V));z!==null&&C.set(V,z),u=u.add(V)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,C))}return B.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return le.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve($i());let m=-1,y=u;return h.next(v=>B.forEach(v,(w,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(w)?B.resolve():this.remoteDocumentCache.getEntry(e,w).next(V=>{y=y.insert(w,V)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,y,v,Re())).next(w=>({batchId:m,changes:Yy(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next(s=>{let o=pa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=pa();return this.indexManager.getCollectionParents(e,u).next(m=>B.forEach(m,y=>{const v=function(C,V){return new go(V,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((C,V)=>{h=h.insert(C,V)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))});let m=pa();return h.forEach((y,v)=>{const w=u.get(y);w!==void 0&&wa(w.mutation,v,On.empty(),ft.now()),Hu(t,v)&&(m=m.insert(y,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return B.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Xn(o.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:u1(o.bundledQuery),readTime:Xn(o.readTime)}}(t)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(){this.overlays=new Ye(le.comparator),this.Er=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=$i();return B.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=$i(),u=t.length+1,h=new le(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ye((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=$i(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=$i(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return B.resolve(m)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new UI(t,s));let u=this.Er.get(t);u===void 0&&(u=Re(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.dr=new pt(Et.Ar),this.Rr=new pt(Et.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new Et(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new le(new He([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new le(new He([])),s=new Et(t,e),o=new Et(t,e+1);let u=Re();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return le.comparator(e.key,t.key)||Pe(e.br,t.br)}static Vr(e,t){return Pe(e.br,t.br)||le.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new pt(Et.Ar)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new bI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.vr=this.vr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const m=this.Cr(h.br);u.push(m)}),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(Pe);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],m=>{s=s.add(m.br)})}),B.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;le.isDocumentKey(u)||(u=u.child(""));const h=new Et(new le(u),0);let m=new pt(Pe);return this.vr.forEachWhile(y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.br)),!0)},h),B.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Me(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return B.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new Et(t,0),o=this.vr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.Nr=e,this.docs=function(){return new Ye(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Rr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Rr();const h=t.path,m=new le(h.child("")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||ZT(JT(w),s)<=0||(o.has(w.key)||Hu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){fe()}Lr(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new S1(this)}getSize(e){return B.resolve(this.size)}}class S1 extends g1{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.persistence=e,this.Br=new Yi(t=>Nd(t),Dd),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.kr=0,this.qr=new Fd,this.targetCount=0,this.Qr=ao.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),B.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ao(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.Un(t),B.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Br.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),B.waitFor(u).next(()=>o)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Bu(0),this.Ur=!1,this.Ur=!0,this.Wr=new w1,this.referenceDelegate=e(this),this.Gr=new A1(this),this.indexManager=new c1,this.remoteDocumentCache=function(o){return new I1(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new l1(t),this.jr=new v1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new E1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new T1(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new R1(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return B.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class R1 extends tI{constructor(e){super(),this.currentSequenceNumber=e}}class bd{constructor(e){this.persistence=e,this.Zr=new Fd,this.Xr=null}static ei(e){return new bd(e)}get ti(){if(this.Xr)return this.Xr;throw fe()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),B.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ti,s=>{const o=le.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,me.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return B.or([()=>B.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Vu{constructor(e,t){this.persistence=e,this.ri=new Yi(s=>iI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=m1(this,t)}static ei(e,t){return new Vu(e,t)}Hr(){}Jr(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return B.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?B.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(m=>{m||(s++,u.removeEntry(h,me.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),B.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mu(e.data.value)),t}ir(e,t,s){return B.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Re(),o=Re();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ud(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return R0()?8:nI(Ft())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new C1;return this.ts(e,t,h).next(m=>{if(u.result=m,this.Hi)return this.ns(e,t,h,m.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(Gs()<=Ae.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Ks(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),B.resolve()):(Gs()<=Ae.DEBUG&&te("QueryEngine","Query:",Ks(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(Gs()<=Ae.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Ks(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(t))):B.resolve())}Xi(e,t){if(lg(t))return B.resolve(null);let s=Qn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=rd(t,null,"F"),s=Qn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Re(...u);return this.Zi.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const v=this.rs(t,m);return this.ss(t,v,h,y.readTime)?this.Xi(e,rd(t,null,"F")):this.os(e,v,t,y)}))})))}es(e,t,s,o){return lg(t)||o.isEqual(me.min())?B.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?B.resolve(null):(Gs()<=Ae.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ks(t)),this.os(e,h,t,YT(o,-1)).next(m=>m))})}rs(e,t){let s=new pt(Qy(e));return t.forEach((o,u)=>{Hu(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return Gs()<=Ae.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Ks(t)),this.Zi.getDocumentsMatchingQuery(e,t,li.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Ye(Pe),this.cs=new Yi(u=>Nd(u),Dd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _1(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function N1(i,e,t,s){return new k1(i,e,t,s)}async function __(i,e){const t=ye(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Re();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:m}))})})}function D1(i,e){const t=ye(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(m,y,v,w){const C=v.batch,V=C.keys();let z=B.resolve();return V.forEach(Q=>{z=z.next(()=>w.getEntry(y,Q)).next(X=>{const H=v.docVersions.get(Q);Me(H!==null),X.version.compareTo(H)<0&&(C.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),w.addEntry(X)))})}),z.next(()=>m.mutationQueue.removeMutationBatch(y,C))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=Re();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function v_(i){const e=ye(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function V1(i,e){const t=ye(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const m=[];e.targetChanges.forEach((w,C)=>{const V=o.get(C);if(!V)return;m.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,C).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,C)));let z=V.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?z=z.withResumeToken(Ct.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(C,z),function(X,H,ge){return X.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=3e8?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0}(V,z,w)&&m.push(t.Gr.updateTargetData(u,z))});let y=Rr(),v=Re();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(O1(u,h,e.documentUpdates).next(w=>{y=w.Is,v=w.Es})),!s.isEqual(me.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(C=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return B.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,v)).next(()=>y)}).then(u=>(t.us=o,u))}function O1(i,e,t){let s=Re(),o=Re();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Rr();return t.forEach((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(me.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)}),{Is:h,Es:o}})}function x1(i,e){const t=ye(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function L1(i,e){const t=ye(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,B.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ri(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function ld(i,e,t){const s=ye(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!mo(h))throw h;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function Eg(i,e,t){const s=ye(i);let o=me.min(),u=Re();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,v,w){const C=ye(y),V=C.cs.get(w);return V!==void 0?B.resolve(C.us.get(V)):C.Gr.getTargetData(v,w)}(s,h,Qn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:me.min(),t?u:Re())).next(m=>(M1(s,TI(e),m),{documents:m,ds:u})))}function M1(i,e,t){let s=i.ls.get(e)||me.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class wg{constructor(){this.activeTargetIds=PI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F1{constructor(){this._o=new wg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new wg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu=null;function Uh(){return uu===null?uu=function(){return 268435456+Math.round(2147483648*Math.random())}():uu++,"0x"+uu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class B1 extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const m=Uh(),y=this.No(t,s.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${m}:`,y,o);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(v,u,h),this.Bo(t,y,v,o).then(w=>(te("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw ro("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",y,"request:",o),w})}ko(t,s,o,u,h,m){return this.Oo(t,s,o,u,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=U1[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const u=Uh();return new Promise((h,m)=>{const y=new Dy;y.setWithCredentials(!0),y.listenOnce(Vy.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case pu.NO_ERROR:const w=y.getResponseJson();te(xt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case pu.TIMEOUT:te(xt,`RPC '${e}' ${u} timed out`),m(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case pu.HTTP_ERROR:const C=y.getStatus();if(te(xt,`RPC '${e}' ${u} failed with status:`,C,"response text:",y.getResponseText()),C>0){let V=y.getResponseJson();Array.isArray(V)&&(V=V[0]);const z=V==null?void 0:V.error;if(z&&z.status&&z.message){const Q=function(H){const ge=H.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ge)>=0?ge:$.UNKNOWN}(z.status);m(new ie(Q,z.message))}else m(new ie($.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ie($.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{te(xt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);te(xt,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",v,s,15)})}qo(e,t,s){const o=Uh(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Ly(),m=xy(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Lo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");te(xt,`Creating RPC '${e}' stream ${o}: ${w}`,y);const C=h.createWebChannel(w,y);let V=!1,z=!1;const Q=new z1({Eo:H=>{z?te(xt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(V||(te(xt,`Opening RPC '${e}' stream ${o} transport.`),C.open(),V=!0),te(xt,`RPC '${e}' stream ${o} sending:`,H),C.send(H))},Ao:()=>C.close()}),X=(H,ge,ve)=>{H.listen(ge,_e=>{try{ve(_e)}catch(we){setTimeout(()=>{throw we},0)}})};return X(C,fa.EventType.OPEN,()=>{z||(te(xt,`RPC '${e}' stream ${o} transport opened.`),Q.So())}),X(C,fa.EventType.CLOSE,()=>{z||(z=!0,te(xt,`RPC '${e}' stream ${o} transport closed`),Q.Do())}),X(C,fa.EventType.ERROR,H=>{z||(z=!0,ro(xt,`RPC '${e}' stream ${o} transport errored:`,H),Q.Do(new ie($.UNAVAILABLE,"The operation could not be completed")))}),X(C,fa.EventType.MESSAGE,H=>{var ge;if(!z){const ve=H.data[0];Me(!!ve);const _e=ve,we=(_e==null?void 0:_e.error)||((ge=_e[0])===null||ge===void 0?void 0:ge.error);if(we){te(xt,`RPC '${e}' stream ${o} received error:`,we);const We=we.status;let Se=function(A){const P=ot[A];if(P!==void 0)return a_(P)}(We),N=we.message;Se===void 0&&(Se=$.INTERNAL,N="Unknown error status: "+We+" with message "+we.message),z=!0,Q.Do(new ie(Se,N)),C.close()}else te(xt,`RPC '${e}' stream ${o} received:`,ve),Q.vo(ve)}}),X(m,Oy.STAT_EVENT,H=>{H.stat===Yh.PROXY?te(xt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===Yh.NOPROXY&&te(xt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{Q.bo()},0),Q}}function zh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(i){return new KI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t,s,o,u,h,m,y){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new E_(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Ar(t.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ie($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class j1 extends w_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=YI(this.serializer,e),s=function(u){if(!("targetChange"in u))return me.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?me.min():h.readTime?Xn(h.readTime):me.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=ad(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=td(y)?{documents:e1(u,y)}:{query:t1(u,y).ct},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=c_(u,h.resumeToken);const v=id(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(me.min())>0){m.readTime=Du(u,h.snapshotVersion.toTimestamp());const v=id(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=r1(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=ad(this.serializer),t.removeTarget=e,this.c_(t)}}class $1 extends w_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=ZI(e.writeResults,e.commitTime),s=Xn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=ad(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>JI(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1 extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,sd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie($.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.ko(e,sd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie($.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class H1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ar(t),this.C_=!1):te("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{Zi(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(y){const v=ye(y);v.k_.add(4),await za(v),v.K_.set("Unknown"),v.k_.delete(4),await Xu(v)}(this))})}),this.K_=new H1(s,o)}}async function Xu(i){if(Zi(i))for(const e of i.q_)await e(!0)}async function za(i){for(const e of i.q_)await e(!1)}function T_(i,e){const t=ye(i);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),$d(t)?jd(t):yo(t).s_()&&Bd(t,e))}function zd(i,e){const t=ye(i),s=yo(t);t.B_.delete(e),s.s_()&&I_(t,e),t.B_.size===0&&(s.s_()?s.a_():Zi(t)&&t.K_.set("Unknown"))}function Bd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yo(i).V_(e)}function I_(i,e){i.U_.xe(e),yo(i).m_(e)}function jd(i){i.U_=new qI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),yo(i).start(),i.K_.F_()}function $d(i){return Zi(i)&&!yo(i).i_()&&i.B_.size>0}function Zi(i){return ye(i).k_.size===0}function S_(i){i.U_=void 0}async function G1(i){i.K_.set("Online")}async function K1(i){i.B_.forEach((e,t)=>{Bd(i,e)})}async function Q1(i,e){S_(i),$d(i)?(i.K_.O_(e),jd(i)):i.K_.set("Unknown")}async function X1(i,e,t){if(i.K_.set("Online"),e instanceof u_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.B_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.B_.delete(m),o.U_.removeTarget(m))}(i,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ou(i,s)}else if(e instanceof _u?i.U_.$e(e):e instanceof l_?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(me.min()))try{const s=await v_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.U_.it(h);return m.targetChanges.forEach((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.B_.get(v);w&&u.B_.set(v,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,v)=>{const w=u.B_.get(y);if(!w)return;u.B_.set(y,w.withResumeToken(Ct.EMPTY_BYTE_STRING,w.snapshotVersion)),I_(u,y);const C=new ri(w.target,y,v,w.sequenceNumber);Bd(u,C)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await Ou(i,s)}}async function Ou(i,e,t){if(!mo(e))throw e;i.k_.add(1),await za(i),i.K_.set("Offline"),t||(t=()=>v_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await Xu(i)})}function A_(i,e){return e().catch(t=>Ou(i,t,e))}async function Yu(i){const e=ye(i),t=di(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Y1(e);)try{const o=await x1(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,J1(e,o)}catch(o){await Ou(e,o)}R_(e)&&C_(e)}function Y1(i){return Zi(i)&&i.L_.length<10}function J1(i,e){i.L_.push(e);const t=di(i);t.s_()&&t.f_&&t.g_(e.mutations)}function R_(i){return Zi(i)&&!di(i).i_()&&i.L_.length>0}function C_(i){di(i).start()}async function Z1(i){di(i).w_()}async function eS(i){const e=di(i);for(const t of i.L_)e.g_(t.mutations)}async function tS(i,e,t){const s=i.L_.shift(),o=xd.from(s,e,t);await A_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await Yu(i)}async function nS(i,e){e&&di(i).f_&&await async function(s,o){if(function(h){return BI(h)&&h!==$.ABORTED}(o.code)){const u=s.L_.shift();di(s).__(),await A_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Yu(s)}}(i,e),R_(i)&&C_(i)}async function Ig(i,e){const t=ye(i);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=Zi(t);t.k_.add(3),await za(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Xu(t)}async function rS(i,e){const t=ye(i);e?(t.k_.delete(2),await Xu(t)):e||(t.k_.add(2),await za(t),t.K_.set("Unknown"))}function yo(i){return i.W_||(i.W_=function(t,s,o){const u=ye(t);return u.b_(),new j1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:G1.bind(null,i),mo:K1.bind(null,i),po:Q1.bind(null,i),R_:X1.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),$d(i)?jd(i):i.K_.set("Unknown")):(await i.W_.stop(),S_(i))})),i.W_}function di(i){return i.G_||(i.G_=function(t,s,o){const u=ye(t);return u.b_(),new $1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:Z1.bind(null,i),po:nS.bind(null,i),p_:eS.bind(null,i),y_:tS.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await Yu(i)):(await i.G_.stop(),i.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${i.L_.length} pending writes`),i.L_=[]))})),i.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new qd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hd(i,e){if(Ar("AsyncQueue",`${e}: ${i}`),mo(i))return new ie($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{static emptySet(e){return new eo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||le.comparator(t.key,s.key):(t,s)=>le.comparator(t.key,s.key),this.keyedMap=pa(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof eo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new eo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.z_=new Ye(le.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):fe():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class lo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new lo(e,t,eo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class sS{constructor(){this.queries=Ag(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=ye(t),u=o.queries;o.queries=Ag(),u.forEach((h,m)=>{for(const y of m.J_)y.onError(s)})})(this,new ie($.ABORTED,"Firestore shutting down"))}}function Ag(){return new Yi(i=>Ky(i),qu)}async function oS(i,e){const t=ye(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new iS,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Hd(h,`Initialization of query '${Ks(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&Wd(t)}async function aS(i,e){const t=ye(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function lS(i,e){const t=ye(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.J_)m.ta(o)&&(s=!0);h.H_=o}}s&&Wd(t)}function uS(i,e,t){const s=ye(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function Wd(i){i.X_.forEach(e=>{e.next()})}var ud,Rg;(Rg=ud||(ud={})).na="default",Rg.Cache="cache";class cS{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ud.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.key=e}}class k_{constructor(e){this.key=e}}class hS{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Re(),this.mutatedKeys=Re(),this.Va=Qy(e),this.ma=new eo(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Sg,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,C)=>{const V=o.get(w),z=Hu(this.query,C)?C:null,Q=!!V&&this.mutatedKeys.has(V.key),X=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let H=!1;V&&z?V.data.isEqual(z.data)?Q!==X&&(s.track({type:3,doc:z}),H=!0):this.ya(V,z)||(s.track({type:2,doc:z}),H=!0,(y&&this.Va(z,y)>0||v&&this.Va(z,v)<0)&&(m=!0)):!V&&z?(s.track({type:0,doc:z}),H=!0):V&&!z&&(s.track({type:1,doc:V}),H=!0,(y||v)&&(m=!0)),H&&(z?(h=h.add(z),u=X?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:m,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,C)=>function(z,Q){const X=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return X(z)-X(Q)}(w.type,C.type)||this.Va(w.doc,C.doc)),this.wa(s),o=o!=null&&o;const m=t&&!o?this.Sa():[],y=this.Ra.size===0&&this.current&&!o?1:0,v=y!==this.Aa;return this.Aa=y,h.length!==0||v?{snapshot:new lo(this.query,e.ma,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Sg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Re(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new k_(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new P_(s))}),t}va(e){this.da=e.ds,this.Ra=Re();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return lo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class dS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class fS{constructor(e){this.key=e,this.Fa=!1}}class pS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Yi(m=>Ky(m),qu),this.Oa=new Map,this.Na=new Set,this.La=new Ye(le.comparator),this.Ba=new Map,this.ka=new Fd,this.qa={},this.Qa=new Map,this.Ka=ao.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function mS(i,e,t=!0){const s=L_(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await N_(s,e,t,!0),o}async function gS(i,e){const t=L_(i);await N_(t,e,!0,!1)}async function N_(i,e,t,s){const o=await L1(i.localStore,Qn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await yS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&T_(i.remoteStore,o),m}async function yS(i,e,t,s,o){i.Ua=(C,V,z)=>async function(X,H,ge,ve){let _e=H.view.ga(ge);_e.ss&&(_e=await Eg(X.localStore,H.query,!1).then(({documents:N})=>H.view.ga(N,_e)));const we=ve&&ve.targetChanges.get(H.targetId),We=ve&&ve.targetMismatches.get(H.targetId)!=null,Se=H.view.applyChanges(_e,X.isPrimaryClient,we,We);return Pg(X,H.targetId,Se.ba),Se.snapshot}(i,C,V,z);const u=await Eg(i.localStore,e,!0),h=new hS(e,u.ds),m=h.ga(u.documents),y=Ua.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);Pg(i,t,v.ba);const w=new dS(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),v.snapshot}async function _S(i,e,t){const s=ye(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!qu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ld(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&zd(s.remoteStore,o.targetId),cd(s,o.targetId)}).catch(po)):(cd(s,o.targetId),await ld(s.localStore,o.targetId,!0))}async function vS(i,e){const t=ye(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),zd(t.remoteStore,s.targetId))}async function ES(i,e,t){const s=CS(i);try{const o=await function(h,m){const y=ye(h),v=ft.now(),w=m.reduce((z,Q)=>z.add(Q.key),Re());let C,V;return y.persistence.runTransaction("Locally write mutations","readwrite",z=>{let Q=Rr(),X=Re();return y.hs.getEntries(z,w).next(H=>{Q=H,Q.forEach((ge,ve)=>{ve.isValidDocument()||(X=X.add(ge))})}).next(()=>y.localDocuments.getOverlayedDocuments(z,Q)).next(H=>{C=H;const ge=[];for(const ve of m){const _e=MI(ve,C.get(ve.key).overlayedDocument);_e!=null&&ge.push(new Ji(ve.key,_e,zy(_e.value.mapValue),Tr.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,ge,m)}).next(H=>{V=H;const ge=H.applyToLocalDocumentSet(C,X);return y.documentOverlayCache.saveOverlays(z,H.batchId,ge)})}).then(()=>({batchId:V.batchId,changes:Yy(C)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,y){let v=h.qa[h.currentUser.toKey()];v||(v=new Ye(Pe)),v=v.insert(m,y),h.qa[h.currentUser.toKey()]=v}(s,o.batchId,t),await Ba(s,o.changes),await Yu(s.remoteStore)}catch(o){const u=Hd(o,"Failed to persist write");t.reject(u)}}async function D_(i,e){const t=ye(i);try{const s=await V1(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ba.get(u);h&&(Me(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Me(h.Fa):o.removedDocuments.size>0&&(Me(h.Fa),h.Fa=!1))}),await Ba(t,s,e)}catch(s){await po(s)}}function Cg(i,e,t){const s=ye(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const m=h.view.ea(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const y=ye(h);y.onlineState=m;let v=!1;y.queries.forEach((w,C)=>{for(const V of C.J_)V.ea(m)&&(v=!0)}),v&&Wd(y)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wS(i,e,t){const s=ye(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),u=o&&o.key;if(u){let h=new Ye(le.comparator);h=h.insert(u,Mt.newNoDocument(u,me.min()));const m=Re().add(u),y=new Ku(me.min(),new Map,new Ye(Pe),h,m);await D_(s,y),s.La=s.La.remove(u),s.Ba.delete(e),Gd(s)}else await ld(s.localStore,e,!1).then(()=>cd(s,e,t)).catch(po)}async function TS(i,e){const t=ye(i),s=e.batch.batchId;try{const o=await D1(t.localStore,e);O_(t,s,null),V_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ba(t,o)}catch(o){await po(o)}}async function IS(i,e,t){const s=ye(i);try{const o=await function(h,m){const y=ye(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next(C=>(Me(C!==null),w=C.keys(),y.mutationQueue.removeMutationBatch(v,C))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>y.localDocuments.getDocuments(v,w))})}(s.localStore,e);O_(s,e,t),V_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ba(s,o)}catch(o){await po(o)}}function V_(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function O_(i,e,t){const s=ye(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function cd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||x_(i,s)})}function x_(i,e){i.Na.delete(e.path.canonicalString());const t=i.La.get(e);t!==null&&(zd(i.remoteStore,t),i.La=i.La.remove(e),i.Ba.delete(t),Gd(i))}function Pg(i,e,t){for(const s of t)s instanceof P_?(i.ka.addReference(s.key,e),SS(i,s)):s instanceof k_?(te("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||x_(i,s.key)):fe()}function SS(i,e){const t=e.key,s=t.path.canonicalString();i.La.get(t)||i.Na.has(s)||(te("SyncEngine","New document in limbo: "+t),i.Na.add(s),Gd(i))}function Gd(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new le(He.fromString(e)),s=i.Ka.next();i.Ba.set(s,new fS(t)),i.La=i.La.insert(t,s),T_(i.remoteStore,new ri(Qn(Vd(t.path)),s,"TargetPurposeLimboResolution",Bu.oe))}}async function Ba(i,e,t){const s=ye(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((m,y)=>{h.push(s.Ua(y,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const C=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,C?"current":"not-current")}if(v){o.push(v);const C=Ud.zi(y.targetId,v);u.push(C)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(y,v){const w=ye(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>B.forEach(v,V=>B.forEach(V.Wi,z=>w.persistence.referenceDelegate.addReference(C,V.targetId,z)).next(()=>B.forEach(V.Gi,z=>w.persistence.referenceDelegate.removeReference(C,V.targetId,z)))))}catch(C){if(!mo(C))throw C;te("LocalStore","Failed to update sequence numbers: "+C)}for(const C of v){const V=C.targetId;if(!C.fromCache){const z=w.us.get(V),Q=z.snapshotVersion,X=z.withLastLimboFreeSnapshotVersion(Q);w.us=w.us.insert(V,X)}}}(s.localStore,u))}async function AS(i,e){const t=ye(i);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await __(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(m=>{m.forEach(y=>{y.reject(new ie($.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ba(t,s.Ts)}}function RS(i,e){const t=ye(i),s=t.Ba.get(e);if(s&&s.Fa)return Re().add(s.key);{let o=Re();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const m=t.xa.get(h);o=o.unionWith(m.view.fa)}return o}}function L_(i){const e=ye(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=D_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wS.bind(null,e),e.Ma.R_=lS.bind(null,e.eventManager),e.Ma.Wa=uS.bind(null,e.eventManager),e}function CS(i){const e=ye(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IS.bind(null,e),e}class xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return N1(this.persistence,new P1,e.initialUser,this.serializer)}ja(e){return new y_(bd.ei,this.serializer)}za(e){return new F1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xu.provider={build:()=>new xu};class PS extends xu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Me(this.persistence.referenceDelegate instanceof Vu);const s=this.persistence.referenceDelegate.garbageCollector;return new f1(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new y_(s=>Vu.ei(s,t),this.serializer)}}class hd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=AS.bind(null,this.syncEngine),await rS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sS}()}createDatastore(e){const t=Qu(e.databaseInfo.databaseId),s=function(u){return new B1(u)}(e.databaseInfo);return function(u,h,m,y){return new q1(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new W1(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Cg(this.syncEngine,t,0),function(){return Tg.p()?new Tg:new b1}())}createSyncEngine(e,t){return function(o,u,h,m,y,v,w){const C=new pS(o,u,h,m,y,v);return w&&(C.$a=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=ye(o);te("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await za(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hd.provider={build:()=>new hd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=Fy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Hd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Bh(i,e){i.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await __(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function kg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await DS(i);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Ig(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Ig(e.remoteStore,o)),i._onlineComponents=e}async function DS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ro("Error using user provided cache. Falling back to memory cache: "+t),await Bh(i,new xu)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Bh(i,new PS(void 0));return i._offlineComponents}async function M_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await kg(i,i._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await kg(i,new hd))),i._onlineComponents}function VS(i){return M_(i).then(e=>e.syncEngine)}async function Ng(i){const e=await M_(i),t=e.eventManager;return t.onListen=mS.bind(null,e.syncEngine),t.onUnlisten=_S.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vS.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(i,e,t){if(!t)throw new ie($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function OS(i,e,t,s){if(e===!0&&s===!0)throw new ie($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Vg(i){if(!le.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Og(i){if(le.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ju(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":fe()}function Ta(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ju(i);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=F_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zu{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new jT;switch(s.type){case"firstParty":return new WT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Dg.get(t);s&&(te("ComponentProvider","Removing Datastore"),Dg.delete(t),s.terminate())}(this),Promise.resolve()}}function xS(i,e,t,s={}){var o;const u=(i=Ta(i,Zu))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Lt.MOCK_USER;else{m=v0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Lt(v)}i._authCredentials=new $T(new My(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new es(this.firestore,e,this._query)}}class on{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class ai extends es{constructor(e,t,s){super(e,t,Vd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new le(e))}withConverter(e){return new ai(this.firestore,e,this._path)}}function Lg(i,e,...t){if(i=Yt(i),b_("collection","path",e),i instanceof Zu){const s=He.fromString(e,...t);return Og(s),new ai(i,null,s)}{if(!(i instanceof on||i instanceof ai))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(He.fromString(e,...t));return Og(s),new ai(i.firestore,null,s)}}function LS(i,e,...t){if(i=Yt(i),arguments.length===1&&(e=Fy.newId()),b_("doc","path",e),i instanceof Zu){const s=He.fromString(e,...t);return Vg(s),new on(i,null,new le(s))}{if(!(i instanceof on||i instanceof ai))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(He.fromString(e,...t));return Vg(s),new on(i.firestore,i instanceof ai?i.converter:null,new le(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new E_(this,"async_queue_retry"),this.fu=()=>{const s=zh();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=zh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=zh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Wi;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!mo(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Ar("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=qd.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(o),o}pu(){this.Au&&fe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Fg(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class Lu extends Zu{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Mg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mg(e),this._firestoreClient=void 0,await e}}}function MS(i,e){const t=typeof i=="object"?i:Xg(),s=typeof i=="string"?i:"(default)",o=md(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=y0("firestore");u&&xS(o,...u)}return o}function U_(i){if(i._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||FS(i),i._firestoreClient}function FS(i){var e,t,s;const o=i._freezeSettings(),u=function(m,y,v,w){return new aI(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,F_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new NS(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(Ct.fromBase64String(e))}catch(t){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new uo(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=/^__.*__$/;class US{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ji(e,this.data,this.fieldMask,t,this.fieldTransforms):new ba(e,this.data,t,this.fieldTransforms)}}function z_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class Jd{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Jd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Mu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(z_(this.Mu)&&bS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class zS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Qu(e)}$u(e,t,s,o=!1){return new Jd({Mu:e,methodName:t,Ku:s,path:Rt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function B_(i){const e=i._freezeSettings(),t=Qu(i._databaseId);return new zS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function BS(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);q_("Data must be an object, but it was:",h,s);const m=j_(s,h);let y,v;if(u.merge)y=new On(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const C of u.mergeFields){const V=$S(e,C,t);if(!h.contains(V))throw new ie($.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);HS(w,V)||w.push(V)}y=new On(w),v=h.fieldTransforms.filter(C=>y.covers(C.field))}else y=null,v=h.fieldTransforms;return new US(new yn(m),y,v)}class Zd extends Qd{_toFieldTransform(e){return new VI(e.path,new Na)}isEqual(e){return e instanceof Zd}}function jS(i,e,t,s=!1){return ef(t,i.$u(s?4:3,e))}function ef(i,e){if($_(i=Yt(i)))return q_("Unsupported field value:",e,i),j_(i,e);if(i instanceof Qd)return function(s,o){if(!z_(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let y=ef(m,o.ku(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return kI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:Du(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Du(o.serializer,u)}}if(s instanceof Xd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof uo)return{bytesValue:c_(o.serializer,s._byteString)};if(s instanceof on){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Md(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Yd)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw m.qu("VectorValues must only contain numeric values.");return Od(m.serializer,y)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${Ju(s)}`)}(i,e)}function j_(i,e){const t={};return by(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(i,(s,o)=>{const u=ef(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function $_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof Xd||i instanceof uo||i instanceof on||i instanceof Qd||i instanceof Yd)}function q_(i,e,t){if(!$_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Ju(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function $S(i,e,t){if((e=Yt(e))instanceof Kd)return e._internalPath;if(typeof e=="string")return H_(i,e);throw Mu("Field path arguments must be of type string or ",i,!1,void 0,t)}const qS=new RegExp("[~\\*/\\[\\]]");function H_(i,e,t){if(e.search(qS)>=0)throw Mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Kd(...e.split("."))._internalPath}catch{throw Mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Mu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ie($.INVALID_ARGUMENT,m+i+y)}function HS(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class WS extends W_{data(){return super.data()}}function tf(i,e){return typeof e=="string"?H_(i,e):e instanceof Kd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nf{}class G_ extends nf{}function KS(i,e,...t){let s=[];e instanceof nf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(y=>y instanceof sf).length,m=u.filter(y=>y instanceof rf).length;if(h>1||h>0&&m>0)throw new ie($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class rf extends G_{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new rf(e,t,s)}_apply(e){const t=this._parse(e);return K_(e._query,t),new es(e.firestore,e.converter,nd(e._query,t))}_parse(e){const t=B_(e.firestore);return function(u,h,m,y,v,w,C){let V;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Ug(C,w);const z=[];for(const Q of C)z.push(bg(y,u,Q));V={arrayValue:{values:z}}}else V=bg(y,u,C)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Ug(C,w),V=jS(m,h,C,w==="in"||w==="not-in");return at.create(v,w,V)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class sf extends nf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Ln.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)K_(h,y),h=nd(h,y)}(e._query,t),new es(e.firestore,e.converter,nd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class of extends G_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new of(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ie($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ka(u,h)}(e._query,this._field,this._direction);return new es(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new go(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function QS(i,e="asc"){const t=e,s=tf("orderBy",i);return of._create(s,t)}function bg(i,e,t){if(typeof(t=Yt(t))=="string"){if(t==="")throw new ie($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gy(e)&&t.indexOf("/")!==-1)throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(He.fromString(t));if(!le.isDocumentKey(s))throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ng(i,new le(s))}if(t instanceof on)return ng(i,t._key);throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ju(t)}.`)}function Ug(i,e){if(!Array.isArray(i)||i.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function K_(i,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class XS{convertValue(e,t="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Xi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new Yd(u)}convertGeoPoint(e){return new Xd(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=$u(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const t=ui(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=He.fromString(e);Me(g_(s));const o=new Ca(s.get(1),s.get(3)),u=new le(s.popFirst(5));return o.isEqual(t)||Ar(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Q_ extends W_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(tf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class vu extends Q_{data(e={}){return super.data(e)}}class JS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ga(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new vu(this._firestore,this._userDataWriter,s.key,s,new ga(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const y=new vu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ga(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new vu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ga(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:ZS(m.type),doc:y,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ZS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}class X_ extends XS{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,t)}}function eA(i,e){const t=Ta(i.firestore,Lu),s=LS(i),o=YS(i.converter,e);return nA(t,[BS(B_(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Tr.exists(!1))]).then(()=>s)}function tA(i,...e){var t,s,o;i=Yt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Fg(e[h])||(u=e[h],h++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Fg(e[h])){const C=e[h];e[h]=(t=C.next)===null||t===void 0?void 0:t.bind(C),e[h+1]=(s=C.error)===null||s===void 0?void 0:s.bind(C),e[h+2]=(o=C.complete)===null||o===void 0?void 0:o.bind(C)}let y,v,w;if(i instanceof on)v=Ta(i.firestore,Lu),w=Vd(i._key.path),y={next:C=>{e[h]&&e[h](rA(v,i,C))},error:e[h+1],complete:e[h+2]};else{const C=Ta(i,es);v=Ta(C.firestore,Lu),w=C._query;const V=new X_(v);y={next:z=>{e[h]&&e[h](new JS(v,V,C,z))},error:e[h+1],complete:e[h+2]},GS(i._query)}return function(V,z,Q,X){const H=new kS(X),ge=new cS(z,H,Q);return V.asyncQueue.enqueueAndForget(async()=>oS(await Ng(V),ge)),()=>{H.eu(),V.asyncQueue.enqueueAndForget(async()=>aS(await Ng(V),ge))}}(U_(v),w,m,y)}function nA(i,e){return function(s,o){const u=new Wi;return s.asyncQueue.enqueueAndForget(async()=>ES(await VS(s),o,u)),u.promise}(U_(i),e)}function rA(i,e,t){const s=t.docs.get(e._key),o=new X_(i);return new Q_(i,o,e._key,s,new ga(t.hasPendingWrites,t.fromCache),e.converter)}function iA(){return new Zd("serverTimestamp")}(function(e,t=!0){(function(o){fo=o})(co),to(new Gi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Lu(new qT(s.getProvider("auth-internal")),new KT(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ca(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),oi(Xm,"4.7.5",e),oi(Xm,"4.7.5","esm2017")})();var sA="firebase",oA="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oi(sA,oA,"app");const aA={apiKey:"AIzaSyCBFpZV-UFODiRIbS6BMRmhDI-7nWn85VI",authDomain:"mychatapp-56623.firebaseapp.com",projectId:"mychatapp-56623",storageBucket:"mychatapp-56623.firebasestorage.app",messagingSenderId:"183438867440",appId:"1:183438867440:web:9c96843122e778cc917b35",measurementId:"G-K1MBVJ8XB3"},Y_=Qg(aA),jh=zT(Y_),zg=MS(Y_);function lA(){const[i,e]=Gn.useState(null),[t,s]=Gn.useState([]),[o,u]=Gn.useState(""),h=Gn.useRef(null),m=Gn.useRef(null);Gn.useEffect(()=>{const V=KS(Lg(zg,"messages"),QS("timestamp"));return tA(V,Q=>{s(Q.docs.map(X=>({id:X.id,data:X.data()})))})},[]),Gn.useEffect(()=>{h.current&&(h.current.scrollTop=h.current.scrollHeight)},[t]),Gn.useEffect(()=>kw(jh,z=>{e(z||null)}),[]),Gn.useEffect(()=>{const V=()=>{y()&&m.current&&setTimeout(()=>{m.current.scrollIntoView({behavior:"smooth",block:"center"})},300)},z=m.current;return z&&z.addEventListener("focus",V),()=>{z&&z.removeEventListener("focus",V)}},[]);const y=()=>/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),v=async()=>{o.trim()!==""&&(await eA(Lg(zg,"messages"),{uid:i.uid,photoURL:i.photoURL,displayName:i.displayName,text:o,timestamp:iA()}),u(""))},w=async()=>{const V=new yr;try{await Qw(jh,V)}catch(z){console.error("Google login error:",z)}},C=V=>V?V.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";return nt.jsx("div",{className:"app-container",children:nt.jsxs("div",{className:"chat-wrapper",children:[i?nt.jsx("div",{className:"user-info",children:nt.jsx("span",{className:"user-name",children:i.displayName})}):nt.jsx("div",{className:"user-info",children:nt.jsx("span",{className:"user-name"})}),nt.jsxs("div",{className:"message-input",children:[nt.jsx("input",{type:"text",ref:m,placeholder:"Type a message...",value:o,onChange:V=>u(V.target.value),className:"input-box",disabled:!i}),nt.jsx("button",{onClick:v,className:"send-button",disabled:!i,children:"Send Message"})]}),i?nt.jsx("button",{onClick:()=>jh.signOut(),className:"logout-button",children:"Logout"}):nt.jsx("button",{onClick:w,className:"login-button",children:"Login with Google to chat"}),nt.jsx("div",{className:"messages-container",ref:h,children:t.map(V=>nt.jsxs("div",{className:"message-item",children:[nt.jsx("img",{src:V.data.photoURL,alt:`${V.data.displayName}'s profile`,className:"message-avatar"}),nt.jsxs("div",{className:"message-content",children:[nt.jsxs("div",{className:"message-header",children:[nt.jsx("span",{className:"message-author",children:V.data.displayName}),nt.jsx("span",{className:"message-time",children:V.data.timestamp?C(V.data.timestamp):"Sending..."})]}),nt.jsx("p",{className:"message-text",children:V.data.text})]})]},V.id))})]})})}u0.createRoot(document.getElementById("root")).render(nt.jsx(Gn.StrictMode,{children:nt.jsx(lA,{})}));
