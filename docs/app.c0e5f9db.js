parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"/xJO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.app=j,exports.h=void 0;var e=0,n=1,t=3,r="http://www.w3.org/1999/xlink",l="http://www.w3.org/2000/svg",o={},u=[],i=u.map,f=Array.isArray,c=function(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t},a="function"==typeof Promise&&Promise.resolve(),s=a?function(e){return a.then(e)}:setTimeout,p=function(e,n,t,l,o,u){if("key"===n);else if("style"===n)for(var i in c(t,l)){var f=null==l||null==l[i]?"":l[i];"-"===i[0]?e[n].setProperty(i,f):e[n][i]=f}else if("o"===n[0]&&"n"===n[1])n=n.slice(2).toLowerCase(),e.events||(e.events={}),e.events[n]=l,null==l?e.removeEventListener(n,o):null==t&&e.addEventListener(n,o);else{var a=null==l||!1===l;if(n in e&&"list"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!u)e[n]=null==l?"":l,a&&e.removeAttribute(n);else u&&n!==(n=n.replace(/^xlink:?/,""))?a?e.removeAttributeNS(r,n):e.setAttributeNS(r,n,l):a?e.removeAttribute(n):e.setAttribute(n,l)}},v=function(e,n,r,o){var u=e.type===t?document.createTextNode(e.name):(o=o||"svg"===e.name)?document.createElementNS(l,e.name):document.createElement(e.name),i=e.props;i.onCreate&&n.push(function(){i.onCreate(u)});for(var f=0,c=e.children.length;f<c;f++)u.appendChild(v(e.children[f],n,r,o));for(var a in i)p(u,a,null,i[a],r,o);return e.element=u},m=function(e,n,t,r,l,o,u){for(var i in c(n,t))("value"===i||"checked"===i?e[i]:n[i])!==t[i]&&p(e,i,n[i],t[i],l,o);var f=u?t.onCreate:t.onUpdate;null!=f&&r.push(function(){f(e,n)})},h=function(e){for(var n=0,t=e.children.length;n<t;n++)h(e.children[n]);var r=e.props.onDestroy;return null!=r&&r(e.element),e.element},d=function(e,n){var t=function(){e.removeChild(h(n))},r=n.props&&n.props.onRemove;null!=r?r(n.element,t):t()},y=function(e){return null==e?null:e.key},g=function(e,n,t){for(var r,l,o={};n<=t;n++)null!=(r=(l=e[n]).key)&&(o[r]=l);return o},w=function(e,r,l,o,u,i,f){if(o===l);else if(null!=l&&l.type===t&&o.type===t)l.name!==o.name&&(r.nodeValue=o.name);else if(null==l||l.name!==o.name){var c=e.insertBefore(v(o,u,i,f),r);null!=l&&d(e,l),r=c}else{var a,s,p;m(r,l.props,o.props,u,i,f=f||"svg"===o.name,l.type===n);for(var h,b=l.children,k=0,x=b.length-1,A=o.children,C=0,N=A.length-1;C<=N&&k<=x&&(p=y(b[k]),h=y(A[C]),null!=p&&p===h);)w(r,b[k].element,b[k],A[C],u,i,f),k++,C++;for(;C<=N&&k<=x&&(p=y(b[x]),h=y(A[N]),null!=p&&p===h);)w(r,b[x].element,b[x],A[N],u,i,f),x--,N--;if(k>x)for(;C<=N;)r.insertBefore(v(A[C++],u,i,f),(s=b[k])&&s.element);else if(C>N)for(;k<=x;)d(r,b[k++]);else{for(var E=g(b,k,x),L={};C<=N;)p=y(s=b[k]),h=y(A[C]),L[p]||null!=h&&h===y(b[k+1])?(null==p&&d(r,s),k++):null==h||l.type===n?(null==p&&(w(r,s&&s.element,s,A[C],u,i,f),C++),k++):(p===h?(w(r,s.element,s,A[C],u,i,f),L[h]=!0,k++):null!=(a=E[h])?(w(r,r.insertBefore(a.element,s&&s.element),a,A[C],u,i,f),L[h]=!0):w(r,s&&s.element,null,A[C],u,i,f),C++);for(;k<=x;)null==y(s=b[k++])&&d(r,s);for(var P in E)null==L[P]&&d(r,E[P])}}return o.element=r},b=function(e,n,t,r,l,o){return{name:e,props:n,children:t,element:r,key:l,type:o}},k=function(e,n){return b(e,o,u,n,null,t)},x=function(e){return e.nodeType===t?k(e.nodeValue,e):A(e)},A=function(e){return b(e.nodeName.toLowerCase(),o,i.call(e.childNodes,x),e,null,n)},C=function(e,n,t,r,l){var o=[];for(n=w(e,n,t,r,o,l);o.length>0;)o.pop()();return n},N=function(n,t){for(var r,l=[],o=[],u=arguments.length;u-- >2;)l.push(arguments[u]);for(null!=(t=null==t?{}:t).children&&(l.length<=0&&l.push(t.children),delete t.children);l.length>0;)if(f(r=l.pop()))for(u=r.length;u-- >0;)l.push(r[u]);else!1===r||!0===r||null==r||o.push("object"==typeof r?r:k(r));return"function"==typeof n?n(t,t.children=o):b(n,t,o,null,t.key,e)};exports.h=N;var E=function(e){e.cancel()},L=function(e,n){if(e!==n)for(var t in c(e,n))if(e[t]!==n[t])return!1;return!0},P=function(e,n){return typeof e==typeof n&&f(e)&&e[0]===n[0]&&L(e[1],n[1])},T=function(e,n,t){for(var r in c(e,n))if("cancel"===r);else if(e[r]!==n[r]&&!P(e[r],n[r]))return E(n),B(e,t);return n},B=function(e,n){return c(e,{cancel:e.effect(e,n)})},S=function(e,n,t){if(f(e)||f(n)){for(var r=[],l=f(e)?e:[e],o=f(n)?n:[n],u=0;u<l.length||u<o.length;u++)r.push(S(l[u],o[u],t));return r}return e?n?T(e,n,t):B(e,t):n?E(n):n};function j(e){var n,t=e.view,r=e.subscriptions,l=e.container,o=l.children[0],u=o&&A(o),i=[],c=!1,a=function(e){n!==e&&(n=e,c||(c=!0,s(m)))},p=function(e,t){null==e||("function"==typeof e?p(e(n,t)):f(e)?"function"==typeof e[0]?p(e[0](n,e[1],t)):e[1].effect(e[1],p,a(e[0])):a(e))},v=function(e){p(e.currentTarget.events[e.type],e)},m=function(){c=!1,r&&(i=S(r(n),i,p)),t&&(o=C(l,o,u,u=t(n),v))};p(e.init)}
},{}],"wGeL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0;var e={input:"",showState:!1,items:[]};exports.init=e;
},{}],"caD7":[function(require,module,exports) {

},{}],"nraG":[function(require,module,exports) {

},{"./..\\assets\\CircularStd\\CircularStd-Book.otf":[["CircularStd-Book.18af6af2.otf","SvoF"],"SvoF"],"./..\\assets\\CircularStd\\CircularStd-Medium.otf":[["CircularStd-Medium.b1079465.otf","60JF"],"60JF"],"./..\\assets\\CircularStd\\CircularStd-Bold.otf":[["CircularStd-Bold.1055694c.otf","v/II"],"v/II"],"./..\\assets\\CircularStd\\CircularStd-Black.otf":[["CircularStd-Black.490cc0bd.otf","fTF+"],"fTF+"]}],"f3sn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Github=exports.Check=exports.Plus=exports.CheckedCircle=exports.Circle=exports.Close=void 0;var e=require("hyperapp"),r=function(){return(0,e.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x"},(0,e.h)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,e.h)("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))};exports.Close=r;var t=function(){return(0,e.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-circle"},(0,e.h)("circle",{cx:"12",cy:"12",r:"10"}))};exports.Circle=t;var o=function(){return(0,e.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-check-circle"},(0,e.h)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,e.h)("polyline",{points:"22 4 12 14.01 9 11.01"}))};exports.CheckedCircle=o;var n=function(){return(0,e.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-plus"},(0,e.h)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,e.h)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))};exports.Plus=n;var s=function(){return(0,e.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-check"},(0,e.h)("polyline",{points:"20 6 9 17 4 12"}))};exports.Check=s;var i=function(){return(0,e.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-github"},(0,e.h)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))};exports.Github=i;
},{"hyperapp":"/xJO"}],"ya15":[function(require,module,exports) {
var r=self.crypto||self.msCrypto,e="Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-";module.exports=function(o){o=o||21;for(var t="",n=r.getRandomValues(new Uint8Array(o));0<o--;)t+=e[63&n[o]];return t};
},{}],"wVfI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ClearCheckedItems=exports.DeleteItem=exports.ToggleItemEditing=exports.ToggleItem=exports.UpdateItem=exports.AddItem=exports.ToggleStateViewer=exports.SetInput=void 0;var e=t(require("nanoid"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),i.forEach(function(t){n(e,t,r[t])})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(e,t){return r({},e,{input:t.target.value})};exports.SetInput=i;var o=function(e){return r({},e,{showState:!e.showState})};exports.ToggleStateViewer=o;var u=function(t,n){return n.preventDefault(),r({},t,{input:"",items:t.items.concat({id:(0,e.default)(),value:t.input,done:!1,editing:!1})})};exports.AddItem=u;var a=function(e,t,n){return r({},e,{items:e.items.map(function(e){return t===e.id?r({},e,{value:n.target.value}):e})})};exports.UpdateItem=a;var s=function(e,t){return r({},e,{items:e.items.map(function(e){return t===e.id?r({},e,{done:!e.done}):e})})};exports.ToggleItem=s;var p=function(e,t,n){return n.preventDefault(),r({},e,{items:e.items.map(function(e){return t===e.id?r({},e,{editing:!e.editing}):r({},e,{editing:!1})})})};exports.ToggleItemEditing=p;var c=function(e,t){return r({},e,{items:e.items.filter(function(e){return t!==e.id})})};exports.DeleteItem=c;var l=function(e){return r({},e,{items:e.items.filter(function(e){return!e.done})})};exports.ClearCheckedItems=l;
},{"nanoid":"ya15"}],"b3LB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.view=void 0;var e=require("hyperapp");require("sanitize.css"),require("./style.css");var t=require("./icons.js"),l=require("./actions"),i=function(i){return(0,e.h)("div",{class:"container"},(0,e.h)("div",{class:"card"},(0,e.h)("div",{class:"left"},(0,e.h)("h1",null,"Hyperapp to-do list"),(0,e.h)("p",null,"Built with ",(0,e.h)("a",{href:"https://github.com/jorgebucaran/hyperapp",target:"_blank"},"Hyperapp 2.0")),(0,e.h)("p",null,(0,e.h)("a",{href:"https://github.com/loteoo/hyperapp-todolist",target:"_blank"},(0,e.h)(t.Github,null)," Source code"))),(0,e.h)("div",{className:"right"},(0,e.h)("div",{class:"todo-list"},(0,e.h)("form",{class:"new-item-form",onsubmit:l.AddItem,method:"post"},(0,e.h)("input",{type:"text",placeholder:"Type something here...",value:i.input,oninput:l.SetInput,required:!0}),(0,e.h)("button",{type:"submit"},(0,e.h)(t.Plus,null))),(0,e.h)("h4",null,i.items.length," items"),(0,e.h)("ul",{class:"list"},i.items.map(function(t){return(0,e.h)(s,t)}))),(0,e.h)("div",{class:"info"},(0,e.h)("span",null,"Click to edit."),(0,e.h)("a",{onclick:[l.ClearCheckedItems]},"Clear checked items")))),(0,e.h)("div",{class:"state-viewer"},(0,e.h)("a",{onclick:l.ToggleStateViewer},i.showState?"Hide state":"Show app state"),i.showState?(0,e.h)("pre",null,JSON.stringify(i,null,2)):null))};exports.view=i;var s=function(i){var s=i.id,n=i.value,h=i.done,r=i.editing;return(0,e.h)("li",{class:"item",key:s},r?(0,e.h)("form",{class:"inner",method:"post",onsubmit:[l.ToggleItemEditing,s]},(0,e.h)("input",{type:"text",value:n,onCreate:function(e){return e.focus()},oninput:[l.UpdateItem,s],required:!0}),(0,e.h)("button",{class:"confirm"},(0,e.h)(t.Check,null))):(0,e.h)("div",{class:"inner"+(h?" done":"")},(0,e.h)("button",{class:"check",onclick:[l.ToggleItem,s]},h?(0,e.h)(t.CheckedCircle,null):(0,e.h)(t.Circle,null)),(0,e.h)("div",{class:"name",onclick:[l.ToggleItemEditing,s]},h?(0,e.h)("strike",null,n):(0,e.h)("span",null,n)),(0,e.h)("button",{class:"delete",onclick:[l.DeleteItem,s]},(0,e.h)(t.Close,null))))};
},{"hyperapp":"/xJO","sanitize.css":"caD7","./style.css":"nraG","./icons.js":"f3sn","./actions":"wVfI"}],"IBgI":[function(require,module,exports) {
"use strict";var e=require("hyperapp"),r=require("./init"),t=require("./view");function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(r){n(e,r,t[r])})}return e}function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}(0,e.app)({init:i({},r.init,JSON.parse(window.localStorage.getItem("hyperapp-todolist"))),view:t.view,subscriptions:function(e){return window.localStorage.setItem("hyperapp-todolist",JSON.stringify(e))},container:document.body}),"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js");
},{"hyperapp":"/xJO","./init":"wGeL","./view":"b3LB","./..\\service-worker.js":[["service-worker.js","AaGI"],"AaGI"]}]},{},["IBgI"], null)