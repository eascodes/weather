(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(771),t.b),p=a()(o()),d=s()(l);p.push([n.id,"body {\n    margin: 0;\n    padding: 0;\n    background-image: url("+d+");\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    font-family: 'Montserrat', sans-serif;\n}\n\ninput {\n    width: 200px;\n    height: 30px;\n    opacity: 0.5;\n}\n\n.search {\n    display: flex;\n    gap: 5px;\n    justify-content: center;\n    padding: 15vh 0 4vh 0;\n}\n\n#search-button:hover {\n    cursor: pointer;\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n.content {\n    display: grid;\n    grid: 1fr 1fr 1fr / 1fr 1fr;\n    grid-template-areas: \n        \"location location\"\n        \"temp icon\"\n        \"details details\";\n}\n\n.location {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-area: location;\n}\n\n.location button {\n    height: 20px;\n    margin-bottom: 10px;\n}\n\n.location-header {\n    font-size: 3.5rem;\n    margin: 0;\n}\n\n.temp {\n    grid-area: temp;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-right: 5px;\n}\n\n.temp-area {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.temp-area div {\n    display: flex;\n    gap: 5px;\n}\n\n.temp p {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.temp button {\n    background-color: rgba(255,255,255,0.6);\n    border: none;\n    border-radius: 5px;\n    padding: 3px 5px;\n}\n\n.temp button:hover {\n    background-color: white;\n    cursor: pointer;\n}\n\n.icon {\n    grid-area: icon;\n    display: flex;\n    margin-left: 5px;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.icon-area {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.icon img {\n    background-color: rgba(255,255,255,0.3);\n    border-radius: 15px;\n    width: 58px;\n    height: 58px;\n    margin-bottom: 5px;\n}\n\n.icon p {\n    margin: 0;\n}\n\n.details {\n    grid-area: details;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n}\n\n.details p {\n    margin: 0;\n}",""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},771:(n,e,t)=>{n.exports=t.p+"847b474b1c91640375d3.jpeg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=n=>Math.round(n-273.15),e=n=>Math.round(1.8*(n-273.15)+32),r=(n,e,t)=>{const r=document.createElement(n);return r.textContent=e,t.appendChild(r),r},o=(n,e)=>{const t=document.createElement("div");return t.classList.add(n),e.appendChild(t),t};async function i(t){try{const i=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=a19a9a696056416ad8f7e5a7816ff8f9`,{mode:"cors"});(t=>{(t=>{const i=document.querySelector(".content");(n=>{for(;n.firstChild;)n.removeChild(n.firstChild)})(i),o("location",i);const a=o("temp",i),c=o("temp-area",a),s=o("icon",i),l=o("icon-area",s);o("details",i);const p=document.querySelector(".location"),d=document.createElement("div"),u=document.querySelector(".details"),m=r("h1",t.name,p),f=r("p",`${e(t.temp)}°F`,c);c.appendChild(d);const h=r("button","°F",d),g=r("button","°C",d),v=document.createElement("img");var x;v.src=`http://openweathermap.org/img/wn/${t.icon}.png`,v.setAttribute("alt",t.description),l.appendChild(v),r("p",(x=t.description).charAt(0).toUpperCase()+x.slice(1),l);const y=r("p",`Feels like: ${e(t.feels_like)}°F`,u);r("p",`Humidity: ${t.humidity}%`,u);const b=r("p",`High/Low: ${e(t.temp_max)}°F/${e(t.temp_min)}°F`,u);m.classList.add("location-header"),h.addEventListener("click",(()=>{f.textContent=`${e(t.temp)}°F`,y.textContent=`Feels like: ${e(t.feels_like)}°F`,b.textContent=`High/Low: ${e(t.temp_max)}°F/${e(t.temp_min)}°F`})),g.addEventListener("click",(()=>{f.textContent=`${n(t.temp)}°C`,y.textContent=`Feels like: ${n(t.feels_like)}°C`,b.textContent=`High/Low: ${n(t.temp_max)}°C/${n(t.temp_min)}°C`}))})({name:t.name,weather:t.weather[0].main,description:t.weather[0].description,temp:t.main.temp,feels_like:t.main.feels_like,humidity:t.main.humidity,temp_max:t.main.temp_max,temp_min:t.main.temp_min,icon:t.weather[0].icon})})(await i.json())}catch(n){console.log(n)}}var a=t(379),c=t.n(a),s=t(795),l=t.n(s),p=t(569),d=t.n(p),u=t(565),m=t.n(u),f=t(216),h=t.n(f),g=t(589),v=t.n(g),x=t(426),y={};y.styleTagTransform=v(),y.setAttributes=m(),y.insert=d().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=h(),c()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;const b=document.querySelector("#location");document.querySelector("#search-button").addEventListener("click",(()=>{(n=>{i(n.value)})(b)}))})()})();