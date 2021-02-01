(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{126:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(a),b=n,d=h["".concat(i,".").concat(b)]||h[b]||p[b]||o;return a?r.a.createElement(d,s(s({ref:t},c),{},{components:a})):r.a.createElement(d,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(126)),i={id:"github-keys",title:"GitHub Keys",sidebar_label:"GitHub Keys"},s={unversionedId:"tutorials/github-keys",id:"tutorials/github-keys",isDocsHomePage:!1,title:"GitHub Keys",description:"Why we need GitHub Keys?",source:"@site/docs/tutorials/github-keys.md",slug:"/tutorials/github-keys",permalink:"/docs/tutorials/github-keys",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/github-keys.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1612199801,sidebar_label:"GitHub Keys",sidebar:"docs",previous:{title:"GitHub Guide",permalink:"/docs/tutorials/github-guide"},next:{title:"Glossary",permalink:"/docs/tools/glossary"}},l=[{value:"Why we need GitHub Keys?",id:"why-we-need-github-keys",children:[]},{value:"How to generate a new SSH key?",id:"how-to-generate-a-new-ssh-key",children:[]},{value:"How to add your SSH key to the ssh-agent",id:"how-to-add-your-ssh-key-to-the-ssh-agent",children:[]}],c={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"why-we-need-github-keys"},"Why we need GitHub Keys?"),Object(o.a)("p",null,"Let's first define GitHub as a browser-based online control system of distributed version for those software developers using the Git revision control system. Git uses SSH public key authentication and not a password authentication.  Each user of the system has to generate a key. "),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"SSH")," is also known as Secure Shell or Secure Socket Shell ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh"}),"More About SSH in GitHub"),". SSH keys are used to authenticate secure connections they are generate through a public key cryptographic algorithm, the most common being RSA or DSA. This is a one-way formula that ensures the public key can be derived from the private key but the private key cannot be derived from the public key."),Object(o.a)("h2",{id:"how-to-generate-a-new-ssh-key"},"How to generate a new SSH key?"),Object(o.a)("p",null,"This guide is for Windows users, more information for Linux and Mac ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"}),"on this site")),Object(o.a)("p",null,"Windows environments do not have a standard default Unix shell. External shell programs will need to be installed for to have a complete keygen experience. The most straight forward option is to utilize Git Bash. "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Open Git Bash")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Paste the text below, substitute ",Object(o.a)("inlineCode",{parentName:"p"},'"your_email@example.com"')," with your GitHub email address."))),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ ssh-keygen -t ed25519 -C "your_email@example.com"\n')),Object(o.a)("hr",null),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"NOTE :"),"\nIf you are using a legacy system that doesn't support the ",Object(o.a)("inlineCode",{parentName:"p"},"ed25519")," algorithm, use:")),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n')),Object(o.a)("hr",null),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"It will ask for a file to save the key, just press enter. This accepts the default file location. ")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"At the prompt, type a secure passphrase. For security reasons it should be as complex as possible."))),Object(o.a)("p",null,"Now you have a new SSH key!"),Object(o.a)("h2",{id:"how-to-add-your-ssh-key-to-the-ssh-agent"},"How to add your SSH key to the ssh-agent"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Ensure the ssh-agent is running ",Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/working-with-ssh-key-passphrases"}),"more information")," , or start it manually:")),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"#start the ssh-agent in the background\n$ eval $(ssh-agent -s)\n> Agent pid 59566\n")),Object(o.a)("hr",null),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"NOTE :"),"\nIf you are following this ssh key generation flow , there is no need to start the ssh-agent.")),Object(o.a)("hr",null),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace ",Object(o.a)("inlineCode",{parentName:"li"},"id_ed25519")," in the command with the name of your private key file.")),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ ssh-add ~/.ssh/id_ed25519\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Now you need to add your public key to your ",Object(o.a)("strong",{parentName:"li"},"GitHub account")," , for this ",Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"}),"follow this steps"))),Object(o.a)("p",null,"Now you are set!"),Object(o.a)("p",null,Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.preveil.com/blog/public-and-private-key/"}),"More information on how it works")))}u.isMDXComponent=!0}}]);