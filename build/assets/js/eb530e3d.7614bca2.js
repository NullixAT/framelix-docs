"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[694],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2068:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"JS and SCSS Compiler"},c=void 0,s={unversionedId:"basics/compiler",id:"basics/compiler",title:"JS and SCSS Compiler",description:"Framelix has a built-in compiler and bundler. You can write code in newest Javascript/SCSS syntax and will automatically",source:"@site/docs/basics/compiler.md",sourceDirName:"basics",slug:"/basics/compiler",permalink:"/docs/basics/compiler",draft:!1,tags:[],version:"current",frontMatter:{title:"JS and SCSS Compiler"},sidebar:"tutorialSidebar",previous:{title:"Coding standards",permalink:"/docs/basics/coding-standards"},next:{title:"Configuration",permalink:"/docs/basics/configuration"}},u={},p=[{value:"Configuration",id:"configuration",level:2}],f={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Framelix has a built-in compiler and bundler. You can write code in newest Javascript/SCSS syntax and will automatically\nbe compiled on-demand for you. You never have to manually compile anything."),(0,a.kt)("p",null,"Whenever you change a JS/SCSS file, it will be compiled automatically when you visit any view/page. This happens so\nfast, you barely may notice it."),(0,a.kt)("p",null,"To enable automatic compiling you have to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"devMode")," in ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/configuration"},"configuration")," and you need to have to\nproperly ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"Framelix")," module, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/setup/"},"setup"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Each bundle, and therefore all files in it, will be defined via configuration keys. There are many possible options and\nflags, but first lets see an example and then break it down."),(0,a.kt)("p",null,"Please see all comments directly on each config line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'"compiler": { // the basic config key for the compiler\n    "Demo": { // your module name\n        "js": { // all JS related config comes under this key\n            "demo": { // a group name which will be finally in the filename\n                "files": [ // an array of files/folders to include\n                    {\n                        "type": "folder", // can be file/folder\n                        "path": "js", // foldername relative to module directory\n                        "recursive": true // want to include all .js files recursively as well\n                    }\n                ],\n                "options": {\n                    "noInclude": false, // if true, it will not include files automatically on the page\n                    "noCompile": false // if true, it will not compile files, just bundle them (for vendor libraries)\n                }\n            }\n        },\n        "scss": { // for SCSS files groups\n            "demo": { // a group name which will be finally in the filename\n                "files": [ // an array of files/folders to include\n                    {\n                        "type": "file", // here we just include explicit files instead of a folder\n                        "path": ["scss/demo.scss"] // an array of files to include\n                    }\n                ],\n                "options": { // same as above\n                    "noInclude": false,\n                    "noCompile": false\n                }\n            }\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);