(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{119:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?o.a.createElement(h,s(s({ref:n},l),{},{components:t})):o.a.createElement(h,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<r;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(7),r=(t(0),t(119)),c={id:"command-line",title:"Command Line Interface",sidebar_label:"Command Line"},s={unversionedId:"tools/command-line",id:"tools/command-line",isDocsHomePage:!1,title:"Command Line Interface",description:"CLEOS",source:"@site/docs/tools/command-line.md",slug:"/tools/command-line",permalink:"/docs/tools/command-line",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tools/command-line.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1610058815,sidebar_label:"Command Line",sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/tools/glossary"},next:{title:"Nodeos Command Line Reference",permalink:"/docs/tools/nodeos-command-line-reference"}},i=[{value:"CLEOS",id:"cleos",children:[]},{value:"Installation",id:"installation",children:[]},{value:"How to use Cleos",id:"how-to-use-cleos",children:[{value:"Cleos command",id:"cleos-command",children:[]},{value:"Cleos subcommands",id:"cleos-subcommands",children:[]}]},{value:"Cleos example",id:"cleos-example",children:[]}],l={toc:i};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"cleos"},"CLEOS"),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"cleos")," is a command line tool that interacts with the API REST exposed by nodeos. The developers also can use code to implement and test EOSIO's Smart Contracts."),Object(r.a)("h2",{id:"installation"},"Installation"),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"cleos")," is distributed as part of EOSIO. In order to install ",Object(r.a)("inlineCode",{parentName:"p"},"cleos")," follow the instructions written in the EOSIO's software installation section."),Object(r.a)("h2",{id:"how-to-use-cleos"},"How to use Cleos"),Object(r.a)("p",null,"In order to use ",Object(r.a)("inlineCode",{parentName:"p"},"cleos"),", you need the domain or IP direction (and the port number) of an instance of ",Object(r.a)("inlineCode",{parentName:"p"},"nodeos")," in execution. The instance of ",Object(r.a)("inlineCode",{parentName:"p"},"nodeos")," needs to be configured to load ",Object(r.a)("inlineCode",{parentName:"p"},"eosio :: chain_api_plugin")," when starts. This allows that ",Object(r.a)("inlineCode",{parentName:"p"},"nodeos")," responds to the RPC request that come from ",Object(r.a)("inlineCode",{parentName:"p"},"cleos"),"."),Object(r.a)("h3",{id:"cleos-command"},"Cleos command"),Object(r.a)("p",null,"Show the complete command reference in the following link to Cleos Documentation"),Object(r.a)("p",null,"To get a full list of the available ",Object(r.a)("inlineCode",{parentName:"p"},"cleos")," commands, execute:"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cleos --help\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{}),"Command Line Interface to EOSIO Client\nUsage: cleos [OPTIONS] SUBCOMMAND\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -u,--url TEXT=http://127.0.0.1:8888/\n                              the http/https URL where nodeos is running\n   --wallet-url TEXT=unix:///Users/username/eosio-wallet/keosd.sock\n                              the http/https URL where keosd is running\n  -r,--header                 pass specific HTTP header; repeat this option to pass multiple headers\n  -n,--no-verify              don't verify peer certificate when using HTTPS\n  --no-auto-keosd             don't automatically launch a keosd if one is not currently running\n  -v,--verbose                output verbose errors and action console output\n  --print-request             print HTTP request to STDERR\n  --print-response            print HTTP response to STDERR\n\nSubcommands:\n  version                     Retrieve version information\n  create                      Create various items, on and off the blockchain\n  convert                     Pack and unpack transactions\n  get                         Retrieve various items and information from the blockchain\n  set                         Set or update blockchain state\n  transfer                    Transfer tokens from account to account\n  net                         Interact with local p2p network connections\n  wallet                      Interact with local wallet\n  sign                        Sign a transaction\n  push                        Push arbitrary transactions to the blockchain\n  multisig                    Multisig contract commands\n  wrap                        Wrap contract commands\n  system                      Send eosio.system contract action to the blockchain.\n")),Object(r.a)("h3",{id:"cleos-subcommands"},"Cleos subcommands"),Object(r.a)("p",null,"To get help whit whatever subcommand in particular, execute ",Object(r.a)("inlineCode",{parentName:"p"},"code SUBCOMMAND --help"),". For example:"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cleos create --help\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{}),"Create various items, on and off the blockchain\nUsage: cleos create SUBCOMMAND\n\nSubcommands:\n  key                         Create a new keypair and print the public and private keys\n  account                     Create a new account on the blockchain\n                              (assumes system contract does not restrict RAM usage)\n")),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"cleos")," can also provide help for subcommands use within subcommands. For example:"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cleos create account --help\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{}),"Create a new account on the blockchain (assumes system contract does not restrict RAM usage)\nUsage: cleos create account [OPTIONS] creator name OwnerKey [ActiveKey]\n\nPositionals:\n  creator TEXT                The name of the account creating the new account (required)\n  name TEXT                   The name of the new account (required)\n  OwnerKey TEXT               The owner public key or permission level for the new account (required)\n  ActiveKey TEXT              The active public key or permission level for the new account\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -x,--expiration             set the time in seconds before a transaction expires, defaults to 30s\n  -f,--force-unique           force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times\n  -s,--skip-sign              Specify if unlocked wallet keys should be used to sign transaction\n  -j,--json                   print result as json\n  --json-file TEXT            save result in json format into a file\n  -d,--dont-broadcast         don't broadcast transaction to the network (just print to stdout)\n  --return-packed             used in conjunction with --dont-broadcast to get the packed transaction\n  -r,--ref-block TEXT         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)\n  --use-old-rpc               use old RPC push_transaction, rather than new RPC send_transaction\n  -p,--permission TEXT ...    An account and permission level to authorize, as in 'account@permission' (defaults to 'creator@active')\n  --max-cpu-usage-ms UINT     set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)\n  --max-net-usage UINT        set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)\n  --delay-sec UINT            set the delay_sec seconds, defaults to 0s\n")),Object(r.a)("h2",{id:"cleos-example"},"Cleos example"),Object(r.a)("p",null,"The following command ",Object(r.a)("inlineCode",{parentName:"p"},"cleos")," creates a local wallet called ",Object(r.a)("inlineCode",{parentName:"p"},"my_wallet")," and shows the password on the screen:"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{}),"cleos wallet create -n my_wallet --to-console\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{}),'Creating wallet: my_wallet\nSave password to use in the future to unlock this wallet.\nWithout password imported keys will not be retrievable.\n"PW5JbF34UdA193Eps1bjrWVJRaNMt1VKddLn4Dx6SPVTfMDRnMBWN"\n')))}p.isMDXComponent=!0}}]);