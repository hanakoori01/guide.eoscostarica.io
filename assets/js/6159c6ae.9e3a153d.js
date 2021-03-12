(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,g=b["".concat(r,".").concat(h)]||b[h]||u[h]||o;return n?i.a.createElement(g,c(c({ref:t},l),{},{components:n})):i.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},137:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(16),i=n(140);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,c=void 0!==r&&r,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},140:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(8),o=(n(0),n(135)),r=n(137),c={id:"how-to-publish-packages",title:"How To Publish Packages",sidebar_label:"How To Publish Packages"},s={unversionedId:"tutorials/how-to-publish-packages",id:"tutorials/how-to-publish-packages",isDocsHomePage:!1,title:"How To Publish Packages",description:"Packages Publication",source:"@site/docs/tutorials/how-to-publish-packages.md",slug:"/tutorials/how-to-publish-packages",permalink:"/docs/tutorials/how-to-publish-packages",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/how-to-publish-packages.md",version:"current",lastUpdatedBy:"JustinCast",lastUpdatedAt:1615509127,formattedLastUpdatedAt:"3/12/2021",sidebar_label:"How To Publish Packages",sidebar:"docs",previous:{title:"Hello World Contract",permalink:"/docs/tutorials/hello-world-contract"},next:{title:"Modern C++",permalink:"/docs/tutorials/modern-cpp"}},l=[{value:"Packages Publication",id:"packages-publication",children:[]},{value:"Generate Personal Access Token",id:"generate-personal-access-token",children:[]},{value:"Github&#39;s Package Registry",id:"githubs-package-registry",children:[]},{value:"Authentication Using <code>npm login</code>",id:"authentication-using-npm-login",children:[]},{value:"Publish a Package",id:"publish-a-package",children:[]},{value:"Deploy a New Version of the Package",id:"deploy-a-new-version-of-the-package",children:[]},{value:"Install the Published Package",id:"install-the-published-package",children:[]},{value:"References",id:"references",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"packages-publication"},"Packages Publication"),Object(o.b)("p",null,"Modularisation in the context of software is important for the separation of code and files that have relevance to each other, as well as facilitating the consumption of modules that are common between 2 or more projects. Although there are different types of packages and ways to publish them, this tutorial is based on publishing NPM packages."),Object(o.b)("h2",{id:"generate-personal-access-token"},"Generate Personal Access Token"),Object(o.b)("p",null,"In order to be able to publish packages, it is necessary to generate a ",Object(o.b)("strong",{parentName:"p"},"Personal Access Token"),". This token can be generated by following the steps below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to the ",Object(o.b)("strong",{parentName:"li"},"Settings")," option",Object(o.b)("p",{style:{align:"center"}},Object(o.b)("img",{src:Object(r.a)("/img/packages-publication/GoToSettings.png"),width:"100%"}))),Object(o.b)("li",{parentName:"ol"},"Once you are in the settings panel, press the ",Object(o.b)("strong",{parentName:"li"},"Developer Settings")," button",Object(o.b)("p",{style:{align:"center"}},Object(o.b)("img",{src:Object(r.a)("/img/packages-publication/DeveloperSettings.png"),width:"100%"}))),Object(o.b)("li",{parentName:"ol"},"Now, click on the ",Object(o.b)("strong",{parentName:"li"},"Personal Access Tokens")," option",Object(o.b)("p",{style:{align:"center"}},Object(o.b)("img",{src:Object(r.a)("/img/packages-publication/PersonalAccessToken.png"),width:"100%"}))),Object(o.b)("li",{parentName:"ol"},"Once you have clicked on the previous option, press the ",Object(o.b)("strong",{parentName:"li"},"Generate new token")," button",Object(o.b)("p",{style:{align:"center"}},Object(o.b)("img",{src:Object(r.a)("/img/packages-publication/GenerateNewToken.png"),width:"100%"}))),Object(o.b)("li",{parentName:"ol"},"Now select the appropriate ",Object(o.b)("strong",{parentName:"li"},"scope")," for the token, as shown in the following image",Object(o.b)("p",{style:{align:"center"}},Object(o.b)("img",{src:Object(r.a)("/img/packages-publication/TokenScope.png"),width:"100%"}))),Object(o.b)("li",{parentName:"ol"},"Finally, press the button shown in the following image (located at the bottom of the page) to obtain the token",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'<p style={{ align: "center" }}>\n  <img src={ useBaseUrl( \'/img/packages-publication/GenerateTokenButton.png\' )} width="100%" />\n</p>\n')),Object(o.b)("strong",{parentName:"li"},"The token is displayed once it is generated; proceed to copy it to a safe place, as it is not displayed again."))),Object(o.b)("h2",{id:"githubs-package-registry"},"Github's Package Registry"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Github Package Registry")," is a package registry that offers among its advantages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Handling of the same credentials used in Github."),Object(o.b)("li",{parentName:"ul"},"Possibility of integration with ",Object(o.b)("strong",{parentName:"li"},"Github Actions")," and ",Object(o.b)("strong",{parentName:"li"},"Webhooks"),"."),Object(o.b)("li",{parentName:"ul"},"Private packages that are kept within the same scope of the organization."),Object(o.b)("li",{parentName:"ul"})),Object(o.b)("h2",{id:"authentication-using-npm-login"},"Authentication Using ",Object(o.b)("inlineCode",{parentName:"h2"},"npm login")),Object(o.b)("p",null,"To authenticate to the ",Object(o.b)("strong",{parentName:"p"},"Github Registry")," you need to use the ",Object(o.b)("inlineCode",{parentName:"p"},"npm login")," command as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm login --scope=@OWNER --registry=https://npm.pkg.github.com\n\n> Username: USERNAME\n> Password: TOKEN\n> Email: PUBLIC-EMAIL-ADDRESS\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Remember to replace USERNAME with the respective Github user (the one who created the Personal Access Token), TOKEN with the generated Personal Access Token and PUBLIC-EMAIL-ADDRESS with the email address that corresponds to the user.\nIf you wish to authenticate by adding your Personal Access Token to the ",Object(o.b)("inlineCode",{parentName:"p"},"~/.npmrc")," file, you can refer to the ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages"},"github documentation")," for more on this.")),Object(o.b)("h2",{id:"publish-a-package"},"Publish a Package"),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file you need to add one more element called ",Object(o.b)("inlineCode",{parentName:"p"},"publishConfig"),", which refers to the registry where you want to publish the package."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Edit the ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," file and include the entry ",Object(o.b)("inlineCode",{parentName:"li"},"publishConfig"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'"publishConfig": {\n  "registry":"https://npm.pkg.github.com"\n}\n'))),Object(o.b)("li",{parentName:"ol"},"Check if the ",Object(o.b)("inlineCode",{parentName:"li"},"repository")," entry in the ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," file corresponds to the repository URL. For example if the repository URL is ",Object(o.b)("inlineCode",{parentName:"li"},"github.com/my-org/test"),", then the ",Object(o.b)("inlineCode",{parentName:"li"},"repository")," entry should be ",Object(o.b)("inlineCode",{parentName:"li"},"git://github.com/my-org/test.git")),Object(o.b)("li",{parentName:"ol"},"Now run the following command in the terminal to publish the package",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm publish\n```\n")))),Object(o.b)("h2",{id:"deploy-a-new-version-of-the-package"},"Deploy a New Version of the Package"),Object(o.b)("p",null,"When releasing a new version, it is necessary to change the ",Object(o.b)("inlineCode",{parentName:"p"},"version")," entry in the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file. The npm ","[Semantic Versioning]"," standard (",Object(o.b)("a",{parentName:"p",href:"https://docs.npmjs.com/about-semantic-versioning"},"https://docs.npmjs.com/about-semantic-versioning"),") is being followed for this."),Object(o.b)("h2",{id:"install-the-published-package"},"Install the Published Package"),Object(o.b)("p",null,"To install the package, you need to run the following code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @scope/package-name\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"@scope")," refers to the owner (username or org name) under which the package is published.\nIf you want to install a specific version of the package, you need to run the command: ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add @scope/package-name@versionhere"),".")),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages"},"Configuring npm for use with GitHub Packages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://mugan86.medium.com/crear-y-publicar-nuestro-primer-paquete-en-github-package-registry-9f229bd365bc"},"Crear y publicar nuestro primer paquete en Github Package Registry")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.npmjs.com/about-semantic-versioning"},"Semantic Versioning"))))}b.isMDXComponent=!0}}]);