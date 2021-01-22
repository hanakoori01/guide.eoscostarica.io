(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(124)),i={id:"node-installation",title:"EOSIO Node Installation",sidebar_label:"Node Installation"},l={unversionedId:"tutorials/node-installation",id:"tutorials/node-installation",isDocsHomePage:!1,title:"EOSIO Node Installation",description:"EOSIO version tag: v2.0.6",source:"@site/docs/tutorials/node-installation.md",slug:"/tutorials/node-installation",permalink:"/docs/tutorials/node-installation",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/node-installation.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1611337500,sidebar_label:"Node Installation",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/tutorials/getting-started"},next:{title:"Hello World Contract",permalink:"/docs/tutorials/hello-world-contract"}},c=[{value:"1. Install EOSIO from precompiled binaries",id:"1-install-eosio-from-precompiled-binaries",children:[{value:"Uninstall Script",id:"uninstall-script",children:[]}]},{value:"2. Configure Jungle Testnet Node",id:"2-configure-jungle-testnet-node",children:[{value:"Starting and Stopping Nodeos",id:"starting-and-stopping-nodeos",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"EOSIO version tag: ",Object(o.a)("inlineCode",{parentName:"p"},"v2.0.6")),Object(o.a)("p",null,"Chain ID: ",Object(o.a)("inlineCode",{parentName:"p"},"2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5")),Object(o.a)("p",null,"Genesis File: ",Object(o.a)("inlineCode",{parentName:"p"},"genesis.json")),Object(o.a)("h2",{id:"1-install-eosio-from-precompiled-binaries"},"1. Install EOSIO from precompiled binaries"),Object(o.a)("p",null,"Download the latest version of EOSIO for your OS from: ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/releases/tag/v2.0.5"}),"https://github.com/EOSIO/eos/releases/tag/v2.0.5")),Object(o.a)("p",null,"For example, for ubuntu 18.04 you need to download ",Object(o.a)("inlineCode",{parentName:"p"},"eosio_2.0.5-1-ubuntu-18.04_amd64.deb")),Object(o.a)("p",null,"You can use apt to install it:"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{}),"wget https://github.com/eosio/eos/releases/download/v2.0.5/eosio_2.0.5-1-ubuntu-18.04_amd64.deb\nsudo apt install ./eosio_2.0.5-1-ubuntu-18.04_amd64.deb\n")),Object(o.a)("p",null,"It will download all dependencies and install EOSIO to ",Object(o.a)("inlineCode",{parentName:"p"},"/usr/opt/eosio/v2.0.5")),Object(o.a)("h3",{id:"uninstall-script"},"Uninstall Script"),Object(o.a)("p",null,"To uninstall the EOSIO built/installed binaries and dependencies, run:"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{}),"./scripts/eosio_uninstall.sh\n")),Object(o.a)("h2",{id:"2-configure-jungle-testnet-node"},"2. Configure Jungle Testnet Node"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{}),"mkdir ~/Jungle-testnet\ncd ~/Jungle-testnet\ngit clone https://github.com/Jungle/testnet.git ./\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Edit config.ini"),Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},"Enter your server's external address: ",Object(o.a)("inlineCode",{parentName:"li"},"p2p-server-address = YOUR_DOMAIN_OR_IP:9876")))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Open TCP Ports (8888, 9876) on your firewall/router"))),Object(o.a)("p",null,"Specify a genesis.json file the first time you run nodeos"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{}),"./start.sh --delete-all-blocks --genesis-json genesis.json\n")),Object(o.a)("p",null,"Follow logs to check your node is running OK."),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{}),"tail -f stderr.txt\n")),Object(o.a)("p",null,"Check if you can access your node using link ",Object(o.a)("inlineCode",{parentName:"p"},"http://**YOUR_SERVER**/v1/chain/get_info")),Object(o.a)("p",null,"Here is an API ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://lacchain.eosio.cr/v1/chain/get_info"}),"Example")),Object(o.a)("h3",{id:"starting-and-stopping-nodeos"},"Starting and Stopping Nodeos"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},Object(o.a)("inlineCode",{parentName:"p"},"./start.sh")," Starts and restarts Nodeos service.")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},Object(o.a)("inlineCode",{parentName:"p"},"./stop.sh")," Performs graceful shutdown of Nodeos service."))))}p.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),O=a,b=d["".concat(i,".").concat(O)]||d[O]||u[O]||o;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);