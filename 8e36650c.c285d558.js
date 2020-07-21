(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(184)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},c={id:"tutorials/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Before you begin",source:"@site/docs/tutorials/getting-started.md",permalink:"/docs/tutorials/getting-started",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1595350448,sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Ricardian contracts",permalink:"/docs/eos-learn/ricardian-contracts"},next:{title:"EOSIO Node Installation",permalink:"/docs/tutorials/node-installation"}},l=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Get your private keys",id:"get-your-private-keys",children:[]},{value:"Agile accounts creator",id:"agile-accounts-creator",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(o.b)("p",null,"At first, is recommendable have installed the software EOSIO developed by Block.one to create actions with the EOS protocol following the command brew tap eosio/eosio y brew install eosio. This software it's made up of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"cleos"),": is the command line tool that connects with the API exposed by nodeos and functions to manage the wallet, account, keys, transactions and Smart Contracts."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nodeos"),": functions as the central daemon that manages EOSIO's net and could be configured as node to produce blocks."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"eosd"),": functions as wallet to manage the keys for EOSIO.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/img/diagrams/cleos.png",alt:"Diagrama"}))),Object(o.b)("p",null,"Additionally, we recommend install Contract Development Toolkit (CDT) beforehand, that can be installed using ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio.cdt")," command and followed by ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio.cdt")," to access to the resources created by the contracts."),Object(o.b)("h2",{id:"get-your-private-keys"},"Get your private keys"),Object(o.b)("p",null,"More information ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/eos-learn/private-keys"}),"about private keys")),Object(o.b)("h2",{id:"agile-accounts-creator"},"Agile accounts creator"),Object(o.b)("p",null,"Portal to create accounts and public keys with just one click."))}u.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);