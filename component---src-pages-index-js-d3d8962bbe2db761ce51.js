/*! For license information please see component---src-pages-index-js-d3d8962bbe2db761ce51.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5900:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var E=typeof n;if("string"===E||"number"===E)e.push(n);else if(Array.isArray(n)&&n.length){var a=r.apply(null,n);a&&e.push(a)}else if("object"===E)for(var A in n)i.call(n,A)&&n[A]&&e.push(A)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E=i.createContext&&i.createContext(r),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},A=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function o(e){return e&&e.map((function(e,t){return i.createElement(e.tag,a({key:t},e.attr),o(e.child))}))}function l(e){return function(t){return i.createElement(g,a({attr:a({},e.attr)},t),o(e.child))}}function g(e){var t=function(t){var n,r=e.attr,E=e.size,o=e.title,l=A(e,["attr","size","title"]),g=E||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),o&&i.createElement("title",null,o),e.children)};return void 0!==E?i.createElement(E.Consumer,null,(function(e){return t(e)})):t(r)}},7198:function(e,t,n){"use strict";var i=n(7294);t.Z=function(e){var t=e.children;return i.createElement(i.Fragment,null,i.createElement("div",null,i.createElement("main",{className:"background"},t)))}},5520:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var i=n(7294);var r=n(7198),E=n(5900),a=n(3201),A=n.p+"static/pic-f5752d3a3646d0b597a3df2688584643.png",o=function(e){var t=e.selected,n=e.setSelect,r=function(e){return n(e)};if(!("undefined"!=typeof window))return null;var o=i.useState(window.innerWidth),l=o[0],g=o[1];i.useEffect((function(){var e=function(){return g(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var s=l>780,I=E({selected:"about"===t&&s,"nav-link":s,title:!s}),c=E({selected:"portfolio"===t,"nav-link":!0}),C=E({"nav-link":!0,title:!s,"resume-link":!0});return i.createElement("div",{className:"banner-container"},i.createElement("div",{className:"inner-container"},i.createElement("img",{alt:"personal portrait",src:A,className:"portrait"}),i.createElement("div",{style:{lineHeight:"3rem",textAlign:"center"}},i.createElement("div",{className:"name"},"Jake Shin"),i.createElement("p",{className:"title"},"Frontend Engineer")),i.createElement("div",{className:"link-container"},i.createElement("div",{onClick:function(){return r("about")},className:I},"About Me"),s?i.createElement("div",{onClick:function(){return r("portfolio")},className:c},"Work Experience"):i.createElement("div",null,"Hi! My name is Jake. I'm currently a frontend engineer for Dokkaebier!"),i.createElement("a",{href:"https://drive.google.com/file/d/1OR5Z_i8fWwYjVy130diyPe1Y4lr_xCTU/view?usp=sharing",className:C},"My Resume",s?null:i.createElement(a.Z1Y,{style:{fontSize:"1rem",marginLeft:"0.5rem"}}))),i.createElement("div",{className:"logo-container"},i.createElement("a",{className:"logo",href:"mailto:jakeshin22@gmail.com"},i.createElement(a.KKr,null)),i.createElement("a",{className:"logo",href:"https://www.linkedin.com/in/jakeyjshin/"},i.createElement(a.ltd,null)),i.createElement("a",{className:"logo",href:"https://github.com/JakeYJShin"},i.createElement(a.hJX,null)))))},l=function(e){var t=e.setSelect;return i.createElement("div",{className:"about-container"},i.createElement("div",null,"My name is Jake! I'm currently working as a Frontend Engineer at Dokkaebier. My interests include fishing, cooking, and playing Smash Bros with my friends."),i.createElement("div",{className:"portfolio",onClick:function(){return t("portfolio")}},"Click here to see my work experience ",i.createElement(a.Z1Y,{style:{marginLeft:"1rem"}})))},g=function(e){var t=e.cardTitle,n=e.cardImg,r=e.cardInfo;return i.createElement("div",{className:"outer-card-container"},i.createElement("div",{className:"card-container"},i.createElement("div",{className:"card-title"},t),i.createElement("div",{className:"img-container"},i.createElement("img",{className:"card-logo",alt:t+" logo",src:n}))),i.createElement("div",{className:"card-info"},i.createElement("ul",null,r.map((function(e){return i.createElement("li",null,e)})))))},s=function(e){var t={dkb:["Technologies used: Shopify Liquid, HTML/CSS, jQuery","Increased conversation rate by 10% through collaboration with a designer to optimize the UX","Improved load speeds by 25% by identifying inefficiencies and implementing various optimizations","Eliminated 50% of monthly recurring costs by developing third-party plugins in-house","www.enjoydkb.com"],meiday:["Technologies used: Javascript, HTML/CSS, Node, Python","Developed responsive questionnaire web application for more efficient patient care in emergency rooms","Led project to develop visualization tools for doctors to simulate hospital queuing theory","Onboarded and mentored incoming co-ops in engineering best practices and processes"]};return i.createElement("div",{className:"portfolio-container"},i.createElement(g,{cardInfo:t.dkb,cardTitle:"Dokkaebier",cardImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAFICAYAAAC2koAdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3NTNGRkEzRjY2MjExRUE4QjI5RTIxMjI0MDYwNTZDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3NTNGRkEyRjY2MjExRUE4QjI5RTIxMjI0MDYwNTZDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIDI0LjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0idXVpZDplYzlhOGNkZC02ZWE1LTFhNGEtYTA4Yi1iNTI1MzZmNGMzMzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjIx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"}),i.createElement(g,{cardInfo:t.meiday,cardTitle:"Meiday Health",cardImg:"data:image/png;base64,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"}))},I=function(){var e=i.useState("about"),t=e[0],n=e[1],E=function(){return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var i=63&n[e];t+=i<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i<63?"_":"-"}return t}()};return i.createElement(r.Z,null,i.createElement("div",{className:"main-container"},i.createElement(o,{selected:t,setSelect:n})),i.createElement("div",{className:"secondary-container"},"about"===t?i.createElement("div",{key:E(),className:"fadeIn"},i.createElement(l,{setSelect:n})):i.createElement("div",{key:E(),className:"fadeIn"},i.createElement(s,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d3d8962bbe2db761ce51.js.map