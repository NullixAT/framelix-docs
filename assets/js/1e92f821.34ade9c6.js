"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[503],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5682:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={title:"Configuration"},c=void 0,s={unversionedId:"basics/configuration",id:"basics/configuration",title:"Configuration",description:"Each module contains a config folder, which can contain 2 files:",source:"@site/docs/basics/configuration.md",sourceDirName:"basics",slug:"/basics/configuration",permalink:"/framelix-docs/docs/basics/configuration",draft:!1,tags:[],version:"current",frontMatter:{title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"JS and SCSS Compiler",permalink:"/framelix-docs/docs/basics/compiler"},next:{title:"Modules",permalink:"/framelix-docs/docs/basics/modules"}},d={},p=[{value:"Config load order and overrides",id:"config-load-order-and-overrides",level:2},{value:"Explaining some built-in config keys that are not changable in the backend",id:"explaining-some-built-in-config-keys-that-are-not-changable-in-the-backend",level:2},{value:"Example config",id:"example-config",level:2}],u={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each module contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," folder, which can contain 2 files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config-module.php")," - Which is the modules default configuration which you can safily add to your version control"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config-editable.php")," - That's the application and server specific configuration which contains database access and\nevery other flag that is dedicated to the point where it installed - This should never be included in version control")),(0,o.kt)("h2",{id:"config-load-order-and-overrides"},"Config load order and overrides"),(0,o.kt)("p",null,"Configs are loaded when a ",(0,o.kt)("a",{parentName:"p",href:"/framelix-docs/docs/basics/modules"},"module is loaded"),", in the same order as the modules. Each module first\nloads ",(0,o.kt)("inlineCode",{parentName:"p"},"config-module.php"),", then the user config in ",(0,o.kt)("inlineCode",{parentName:"p"},"config-editable.php")," Config is global and a config key can only\nexist ones, which means, if 2 modules have the same config key, one override another depending on loading order."),(0,o.kt)("p",null,"This give you the benefit to define default config in ",(0,o.kt)("inlineCode",{parentName:"p"},"config-module.php")," and then override specific keys\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"config-editable.php"),". Also ",(0,o.kt)("inlineCode",{parentName:"p"},"Framelix")," has many default configuration values then you can override to your needs in\nyour own module."),(0,o.kt)("h2",{id:"explaining-some-built-in-config-keys-that-are-not-changable-in-the-backend"},"Explaining some built-in config keys that are not changable in the backend"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"modules")," - An array of module names to load additionally"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"modulesCallable")," - Pointing to a static method the returns an array of modules to load"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"devMode")," - A boolean flag to enable dev mode (Which never should be enabled in production)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"salts")," - An array containing random general salts on first installation, which are used by hashing functions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"shellAliases")," - An array of alias to path mapping for shell executables - Used when calling shell executables in\nscripts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clientIpKey")," - Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"REMOTE_ADDR"),", which is the ",(0,o.kt)("inlineCode",{parentName:"li"},"$_SERVER")," variable key which holds the users ip - Use it to\nchange when you have a proxy that pass the IP in another header"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"compiler")," - Is explained separatly in the ",(0,o.kt)("a",{parentName:"li",href:"/framelix-docs/docs/basics/compiler"},"compiler")," tutorial"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userRoles")," - An array of key/value pair (See ",(0,o.kt)("inlineCode",{parentName:"li"},"Framelix\\config-module.php")," for examples)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userTokenCookieName")," - The cookie name where login hash will be stored"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backendLogo")," - A relative path from module public folder to a image file for your backend logo"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backendIcon")," - A relative path from module public folder to a image file for your backend favicon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"database")," - All your db credentials come into here, more on that in the ",(0,o.kt)("a",{parentName:"li",href:"/framelix-docs/docs/database/basics"},"database section"))),(0,o.kt)("h2",{id:"example-config"},"Example config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<?php\n// prevent loading directly in the browser without framelix context\nif (!defined("FRAMELIX_MODULE")) {\n    die();\n}\n// this config represents the editable configuration that can be changed by the user in the admin interface\n// this should not be under version control\n?>\n<script type="application/json">\n    {\n    "modules": ["AnotherModule", "MoreModules"],\n    "devMode": true,\n    "applicationHttps": true,\n    "applicationHost": "test.framelix",\n    "applicationUrlBasePath": "\\/",\n    "database": {\n        "default": {\n            "host": "127.0.0.1",\n            "username": "root",\n            "password": "",\n            "database": "framelixdocs",\n            "port": 3306,\n            "socket": ""\n        }\n    },\n    "salts": {\n        "general": "randomgeneratedsalt"\n    },\n    "languageDefault": "de",\n    "languageFallback": "en",\n    "languageMultiple": false,\n    "shellAliases": {\n        "php": "php"\n    },\n    "errorLogDisk": true,\n    "mailSendType": "mail"\n}\n<\/script>\n')))}f.isMDXComponent=!0}}]);