(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),o=(n(0),n(135)),i={id:"devops",title:"DevOps",sidebar_label:"DevOps"},s={unversionedId:"devops",id:"devops",isDocsHomePage:!1,title:"DevOps",description:"DevOps is the practice & culture of applying lean manufacturing principles to the IT Value stream to increase software velocity, reduce waste, & improve quality with an emphasis on leveraging people, processes, & tools.",source:"@site/docs/devops.md",slug:"/devops",permalink:"/docs/devops",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/devops.md",version:"current",lastUpdatedBy:"JustinCast",lastUpdatedAt:1615509127,formattedLastUpdatedAt:"3/12/2021",sidebar_label:"DevOps",sidebar:"docs",previous:{title:"Social Media Guidelines",permalink:"/docs/social-media-guidelines"},next:{title:"EOSIO Protocol",permalink:"/docs/eos-learn/eosio-protocol"}},l=[{value:"Key Definitions",id:"key-definitions",children:[]},{value:"Why implement DevOps?",id:"why-implement-devops",children:[]},{value:"Areas of Emphasis",id:"areas-of-emphasis",children:[]},{value:"What is the goal of DevOps?",id:"what-is-the-goal-of-devops",children:[]},{value:"CI Systems - Examples",id:"ci-systems---examples",children:[]},{value:"CD Systems - Examples",id:"cd-systems---examples",children:[]},{value:"Infrastructure as Code (IAC)",id:"infrastructure-as-code-iac",children:[{value:"Introduction to HashiCorp Terraform",id:"introduction-to-hashicorp-terraform",children:[]}]},{value:"Infrastructure as Code in EOS Costa Rica",id:"infrastructure-as-code-in-eos-costa-rica",children:[]},{value:"Introduction to Kubernetes and Docker",id:"introduction-to-kubernetes-and-docker",children:[{value:"<strong>Containers 101</strong>",id:"containers-101",children:[]},{value:"What is Docker?",id:"what-is-docker",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]},{value:"Kubernetes in 5 Minutes",id:"kubernetes-in-5-minutes",children:[]},{value:"Kubernetes vs Docker: Not a Question of Both or One",id:"kubernetes-vs-docker-not-a-question-of-both-or-one",children:[]}]},{value:"Kubernetes at EOS Costa Rica",id:"kubernetes-at-eos-costa-rica",children:[]},{value:"References",id:"references",children:[]}],c={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"DevOps is the practice & culture of applying lean manufacturing principles to the IT Value stream to increase software velocity, reduce waste, & improve quality with an emphasis on leveraging ",Object(o.b)("em",{parentName:"p"},"people, processes, & tools.")),Object(o.b)("p",null,"It focuses on unifying Development & IT Operations through the principles of flow, feedback, & experimentation."),Object(o.b)("figure",{class:"video_container"},Object(o.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/OOGFxVzW35w",frameborder:"0",allowfullscreen:"true"})),Object(o.b)("h2",{id:"key-definitions"},"Key Definitions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Continuous Integration (CI)"),": Addresses building software from contributions of individual developers in a controlled, agile way. (Checking all code into centralized repo daily)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Continuous Deployment (CD)"),": Automated Deployment (or transport) of code to production with no manual steps required. This will not be the plan with all applications."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Continuous Delivery (CD)"),": Automation that ensures deployment is validated, however manual step still required to deploy to production."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Deployment"),": The deployment (or transport) of code to a higher-level environment, up to & including production."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Release"),": The defined scope and business objective for a set of features to be delivered in a certain timeline.")),Object(o.b)("h2",{id:"why-implement-devops"},"Why implement DevOps?"),Object(o.b)("p",null,"In 2012, Puppet Labs \u201cstate of DevOps report\u201d benchmarked 4,039 IT orgs using DevOps and found:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"30x more frequent code deployments"),Object(o.b)("li",{parentName:"ul"},"8,000x faster code deployment lead time"),Object(o.b)("li",{parentName:"ul"},"2x the change success rate"),Object(o.b)("li",{parentName:"ul"},"12x faster MTTR (mean time to repair)")),Object(o.b)("hr",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u201c",Object(o.b)("em",{parentName:"p"},"The competitive advantage this capability creates is enormous, enabling faster feature time to market, increased customer satisfaction, market share, employee productivity, and happiness.\u201d")," ",Object(o.b)("strong",{parentName:"p"}," - Phoenix Project "))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"areas-of-emphasis"},"Areas of Emphasis"),Object(o.b)("p",null,"DevOps principles are applied to and assisted by the following 3 Key areas all working together:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"People")," - DevOps relies on strong people & a strong culture of experimentation, learning, collaboration, and shared goals between Development, QA & IT Operations."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Processes")," \u2013 DevOps builds further upon Lean Agile, applying concepts of lean manufacturing to IT value streams."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Tools")," \u2013 DevOps relies on enhanced tools & technologies, including automation, telemetry, & collaboration tools.")),Object(o.b)("h2",{id:"what-is-the-goal-of-devops"},"What is the goal of DevOps?"),Object(o.b)("p",null,"Improve collaboration between all stakeholders from planning through delivery and automation of the delivery process in order to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Improve deployment frequency"),Object(o.b)("li",{parentName:"ul"},"Achieve faster time to market"),Object(o.b)("li",{parentName:"ul"},"Lower failure rate of new releases"),Object(o.b)("li",{parentName:"ul"},"Shorten lead time between fixes"),Object(o.b)("li",{parentName:"ul"},"Improve mean time to recovery")),Object(o.b)("h2",{id:"ci-systems---examples"},"CI Systems - Examples"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5632966/106228974-2f442480-61b2-11eb-9ceb-6d47ef5acb67.png",alt:"CI_System_image",title:"Devops"})),Object(o.b)("h2",{id:"cd-systems---examples"},"CD Systems - Examples"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5632966/105532713-d0ae1080-5cb0-11eb-8d8b-5d3751b7df37.png",alt:"CD_System_image"})),Object(o.b)("hr",null),Object(o.b)("h2",{id:"infrastructure-as-code-iac"},"Infrastructure as Code (IAC)"),Object(o.b)("p",null,"The process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."),Object(o.b)("figure",{class:"video_container"},Object(o.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/53X-HAw7BbA",frameborder:"0",allowfullscreen:"true"})),Object(o.b)("hr",null),Object(o.b)("h3",{id:"introduction-to-hashicorp-terraform"},"Introduction to HashiCorp Terraform"),Object(o.b)("p",null,"Terraform is an infrastructure software as code, developed by HashiCorp. It enables users to define and configure the infrastructure of a data center in a high-level language."),Object(o.b)("figure",{class:"video_container"},Object(o.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/cpxKbf51ccU",frameborder:"0",allowfullscreen:"true"})),Object(o.b)("hr",null),Object(o.b)("figure",{class:"video_container"},Object(o.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/h970ZBgKINg",frameborder:"0",allowfullscreen:"true"})),Object(o.b)("h2",{id:"infrastructure-as-code-in-eos-costa-rica"},"Infrastructure as Code in EOS Costa Rica"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/edenia/openstack-docs"},"Openstack Documentation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md"},"Kubernetes Documentation"))),Object(o.b)("h2",{id:"introduction-to-kubernetes-and-docker"},"Introduction to Kubernetes and Docker"),Object(o.b)("h3",{id:"containers-101"},Object(o.b)("strong",{parentName:"h3"},"Containers 101")),Object(o.b)("figure",{class:"video_container"},Object(o.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/VqLcWftIaQI",frameborder:"0",allowfullscreen:"true"})),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCdkGV51Nu0unDNT58bHt9bg/search?query=containers"},"More information about containers")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"what-is-docker"},"What is Docker?"),Object(o.b)("p",null,"Docker is an open source project that automates the deployment of applications within software containers, providing an additional layer of abstraction and application virtualization automation across multiple operating systems."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/tutorials/docker"},"Learn more about Docker")),Object(o.b)("figure",{class:"video_container"},Object(o.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PfTKwblbkpE",frameborder:"0",allowfullscreen:"true"})),Object(o.b)("hr",null),Object(o.b)("h3",{id:"kubernetes"},"Kubernetes"),Object(o.b)("p",null,"Kubernetes is an open source system for automating the deployment, scaling, and handling of containerized applications that was originally designed by Google and donated to the Cloud Native Computing Foundation. It supports different environments for running containers, including Docker."),Object(o.b)("p",null,"Following you can find a set of very convenient tutorials for learning kubernetes from scratch:"),Object(o.b)("h3",{id:"kubernetes-in-5-minutes"},"Kubernetes in 5 Minutes"),Object(o.b)("figure",{class:"video_container"},Object(o.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PH-2FfFD2PU",frameborder:"0",allowfullscreen:"true"})),Object(o.b)("hr",null),Object(o.b)("h3",{id:"kubernetes-vs-docker-not-a-question-of-both-or-one"},"Kubernetes vs Docker: Not a Question of Both or One"),Object(o.b)("figure",{class:"video_container"},Object(o.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/2vMEQ5zs1ko",frameborder:"0",allowfullscreen:"true"})),Object(o.b)("hr",null),Object(o.b)("h2",{id:"kubernetes-at-eos-costa-rica"},"Kubernetes at EOS Costa Rica"),Object(o.b)("p",null,"To be able to try the ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"tutorials")," in a real environment, you could try our Kubernetes installation in Openstack. If you prefer so, you may also create a local setup in your own machine: "),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/"},"Install Minikube")," "),Object(o.b)("p",null,"Request to the administrators for access to our Openstack installation dashboard and the Sandbox\nproject. Then you can follow the next steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"First of all connect to the master node using the SSH tool:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"ssh -i key.pem user@master-sandbox\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Get information about the cluster:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Show the current available nodes in the cluster:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes\n")),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u201cThe principles behind DevOps are the same that transformed manufacturing. Instead of optimizing how raw materials are transformed into finished goods, DevOps shows how we optimize the IT value stream...\u201d")," - Phoenix Project"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u201cImagine living in a DevOps world, where product owners, Development, QA, IT Ops, and InfoSec work together relentlessly to help each other and the overall organization win. They are enabling fast flow of planned work into production, while preserving world-class stability, reliability, availability, and security.\u201d")," - Phoenix Project"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.notion.so/Periodic-Table-of-DevOps-Tools-4e9b29562a944132b1235cfa7e400d68"},"Periodic Table of DevOps Tools")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.notion.so/Automation-e4dee021a4494d9cbdebb3ebc6205f4f"},"Automation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://lab.github.com/githubtraining/devops-with-github-actions"},"DevOps with GitHub"))))}b.isMDXComponent=!0}}]);