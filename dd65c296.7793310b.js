(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{112:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return s})),a.d(e,"toc",(function(){return i})),a.d(e,"default",(function(){return d}));var n=a(3),r=a(7),c=(a(0),a(122)),o={id:"smart-contract",title:"Smart Contracts",sidebar_label:"Smart Contracts"},s={unversionedId:"eos-learn/smart-contract",id:"eos-learn/smart-contract",isDocsHomePage:!1,title:"Smart Contracts",description:'A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).',source:"@site/docs/eos-learn/smart-contracts.md",slug:"/eos-learn/smart-contract",permalink:"/docs/eos-learn/smart-contract",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/smart-contracts.md",version:"current",lastUpdatedBy:"edgarEOS",lastUpdatedAt:1610670012,sidebar_label:"Smart Contracts",sidebar:"docs",previous:{title:"EOS Blockchain",permalink:"/docs/eos-learn/eos-blockchain"},next:{title:"Ricardian contracts",permalink:"/docs/eos-learn/ricardian-contracts"}},i=[{value:"Smart Contract Design Framework",id:"smart-contract-design-framework",children:[{value:"Process Steps",id:"process-steps",children:[]},{value:"Data Model",id:"data-model",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Pre- and Post-Conditions",id:"pre--and-post-conditions",children:[]}]},{value:"Open Source Smart Contracts",id:"open-source-smart-contracts",children:[]},{value:"Basic smart contract scheme",id:"basic-smart-contract-scheme",children:[]}],l={toc:i};function d(t){var e=t.components,o=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},l,o,{components:e,mdxType:"MDXLayout"}),Object(c.a)("p",null,'A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).'),Object(c.a)("p",null,'An EOSIO Smart Contract is software registered on the blockchain and executed on EOSIO nodes, that implements the semantics of a "contract" whose ledger of action requests are being stored on the blockchain. The Smart Contract defines the interface (actions, parameters, data structures) and the code that implements the interface. The code is compiled into a canonical bytecode format that nodes can retrieve and execute. The blockchain stores the transactions (e.g., legal transfers, game moves) of the contract. Each Smart Contract must be accompanied by a Ricardian Contract that defines the legally binding terms and conditions of the contract.'),Object(c.a)("p",null,"Read More : ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/tutorials/modern-cpp"}),"https://guide.eoscostarica.io/docs/tutorials/modern-cpp")),Object(c.a)("h2",{id:"smart-contract-design-framework"},"Smart Contract Design Framework"),Object(c.a)("p",null,"Digital Scarcity's ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/digital-scarcity/equiprental"}),"github repo")," has an example designed to provide a step-by-step framework and example for creating a smart contract on EOS. It uses a simple use case of equipment rentals that list their equipment for rent and renters who pay rent for those items."),Object(c.a)("h3",{id:"process-steps"},"Process Steps"),Object(c.a)("p",null,"Here are the general steps to developing a smart contract.\n",Object(c.a)("img",{alt:"alt text",src:a(200).default,title:"Steps"})),Object(c.a)("h3",{id:"data-model"},"Data Model"),Object(c.a)("p",null,"Define the data that will be persisted in the smart contract\n",Object(c.a)("img",{alt:"alt text",src:a(201).default,title:"Data Model"})),Object(c.a)("h3",{id:"actions"},"Actions"),Object(c.a)("p",null,"Define the actions, or state changes, that must exist in your smart contract\n",Object(c.a)("img",{alt:"alt text",src:a(202).default,title:"Actions"})),Object(c.a)("h3",{id:"pre--and-post-conditions"},"Pre- and Post-Conditions"),Object(c.a)("p",null,"Define the actions, or state changes, that must exist in your smart contract\n",Object(c.a)("img",{alt:"alt text",src:a(203).default,title:"Pre- and Post-Conditions"})),Object(c.a)("h2",{id:"open-source-smart-contracts"},"Open Source Smart Contracts"),Object(c.a)("p",null,"We maintain a list of open source EOS Smart Contracts in the following repo:"),Object(c.a)("p",null,Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eoscostarica/eos-contracts"}),"https://github.com/eoscostarica/eos-contracts")),Object(c.a)("p",null,"Also check out this list of open source contracts for EOSIO maintained by C\xe9sar Rodr\xedguez :"),Object(c.a)("p",null,Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kesar/eos-awesome-contracts"}),"https://github.com/kesar/eos-awesome-contracts")),Object(c.a)("h2",{id:"basic-smart-contract-scheme"},"Basic smart contract scheme"),Object(c.a)("figure",{class:"video_container"},Object(c.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/EbWDHrm2ETY",frameborder:"0",allowfullscreen:"true"}," ")),Object(c.a)("p",null,"You can see more on this channel: ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/user/grandmoren1/videos"}),"https://www.youtube.com/user/grandmoren1/videos")))}d.isMDXComponent=!0},122:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=r.a.createContext({}),d=function(t){var e=r.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},p=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,o=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),p=d(a),u=n,f=p["".concat(o,".").concat(u)]||p[u]||m[u]||c;return a?r.a.createElement(f,s(s({ref:e},l),{},{components:a})):r.a.createElement(f,s({ref:e},l))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,o=new Array(c);o[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},200:function(t,e,a){"use strict";a.r(e),e.default=a.p+"assets/images/steps-237995356b038cbfd6f411698f7e2dd4.png"},201:function(t,e,a){"use strict";a.r(e),e.default=a.p+"assets/images/datamodel-f09fc54e5c4d60b77cb7890a8c3aa209.png"},202:function(t,e,a){"use strict";a.r(e),e.default=a.p+"assets/images/actions-ef6bc27cbec5bd9baa054e04ef8ddfdd.png"},203:function(t,e,a){"use strict";a.r(e),e.default=a.p+"assets/images/prepostconditions-9f58d60fe9dc118abf3e4412d0ee5dd1.png"}}]);