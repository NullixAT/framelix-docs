"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[837],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Core features",sidebar_position:3},s=void 0,c={unversionedId:"basics/features",id:"basics/features",title:"Core features",description:"So, Framelix has some basic core features.",source:"@site/docs/basics/features.md",sourceDirName:"basics",slug:"/basics/features",permalink:"/framelix-docs/docs/basics/features",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Core features",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Terminology / How things are named in Framelix",permalink:"/framelix-docs/docs/basics/terms"},next:{title:"Coding standards",permalink:"/framelix-docs/docs/basics/coding-standards"}},u={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So, Framelix has some basic core features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Full ORM (Object Relation Mapping) Database Handling - You probably never need to write a sql query by hand. You work with storable objects only."),(0,o.kt)("li",{parentName:"ul"},"Model-View-Controller - Basically, you have a ",(0,o.kt)("inlineCode",{parentName:"li"},"View"),", a page accessible by the browser, and you have a ",(0,o.kt)("inlineCode",{parentName:"li"},"Model"),", a ",(0,o.kt)("inlineCode",{parentName:"li"},"Storable")," which holds the data. Somewhere inbetween/mixed in there is the ",(0,o.kt)("inlineCode",{parentName:"li"},"Controller"),", the business logic of your page"),(0,o.kt)("li",{parentName:"ul"},"Full-Stack - There is a full-featured backend UI with Form Generation, HTML Table Generation, and all the stuff you need to build a data driven application"),(0,o.kt)("li",{parentName:"ul"},"Modular - You can snap-in modules for extended functionality - Even the core itself is just threaded as a module")))}d.isMDXComponent=!0}}]);