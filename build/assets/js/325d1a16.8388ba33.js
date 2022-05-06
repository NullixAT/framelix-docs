"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[529],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1122:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"Modules"},s=void 0,u={unversionedId:"basics/modules",id:"basics/modules",title:"Modules",description:"A module is where it all begins. The core itself is also a module with the name Framelix.",source:"@site/docs/basics/modules.md",sourceDirName:"basics",slug:"/basics/modules",permalink:"/docs/basics/modules",draft:!1,tags:[],version:"current",frontMatter:{title:"Modules"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/basics/configuration"}},c={},p=[{value:"File Structure",id:"file-structure",level:2},{value:"Module Loading Order",id:"module-loading-order",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A module is where it all begins. The core itself is also a module with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"Framelix"),"."),(0,a.kt)("p",null,"Each module must be placed in a folder with the module name in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"modules")),(0,a.kt)("h2",{id:"file-structure"},"File Structure"),(0,a.kt)("p",null,"This is the structure that is required, you are free to add any more folder you need and want"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/_meta")," - Some automatically compiled metadata comes in here. For view mapping, etc..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/config")," - This is where the basic and user configuration comes in"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/js")," - All javascript source files comes into here"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/lang")," - Translation files comes into here Name must be ",(0,a.kt)("inlineCode",{parentName:"p"},"xx.json")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"xx")," is the official 2-char iso code of your language"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/public")," - This folder and all files in here are reachable by the browser So public files placed here"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/public/dist")," - Automatically compiled JS/CSS files will be placed here"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/scss")," - SCSS files comes into here"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/src")," - All PHP classes that should be available in your application should be placed here"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/tmp (Optional)")," - Should be used when you generate temporary files"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/vendor (Optional)")," - Place 3rd party PHP library into here Which is also the default folder when you install something with composer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/package.json")," - Contains some basic module information and possibly npm modules that your app requires"),(0,a.kt)("h2",{id:"module-loading-order"},"Module Loading Order"),(0,a.kt)("p",null,"Modules are initially loaded in the following order:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Framelix"),(0,a.kt)("li",{parentName:"ul"},"CurrentModule (Which is the module you have as entry point)"),(0,a.kt)("li",{parentName:"ul"},"Other optional modules defined in the config key ",(0,a.kt)("inlineCode",{parentName:"li"},"modules")," defined in your ",(0,a.kt)("a",{parentName:"li",href:"/docs/basics/configuration"},"configuration"))),(0,a.kt)("p",null,"Only classes of loaded modules can be autoloaded, other modules classes are not available automatically, even if they exist on disk."))}m.isMDXComponent=!0}}]);