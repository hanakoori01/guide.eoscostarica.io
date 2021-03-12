(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{135:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||l;return a?r.a.createElement(d,s(s({ref:t},p),{},{components:a})):r.a.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(8),l=(a(0),a(135)),i={id:"graphql-tutorial",title:"GraphQL",sidebar_label:"GraphQL"},s={unversionedId:"tutorials/graphql-tutorial",id:"tutorials/graphql-tutorial",isDocsHomePage:!1,title:"GraphQL",description:"Introduction",source:"@site/docs/tutorials/graphql-tutorial.md",slug:"/tutorials/graphql-tutorial",permalink:"/docs/tutorials/graphql-tutorial",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/graphql-tutorial.md",version:"current",lastUpdatedBy:"JustinCast",lastUpdatedAt:1615509127,formattedLastUpdatedAt:"3/12/2021",sidebar_label:"GraphQL",sidebar:"docs",previous:{title:"React JS",permalink:"/docs/tutorials/react-tutorial"},next:{title:"Docker",permalink:"/docs/tutorials/docker"}},o=[{value:"Introduction",id:"introduction",children:[]},{value:"Queries and Mutations",id:"queries-and-mutations",children:[{value:"Fields",id:"fields",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Aliases",id:"aliases",children:[]},{value:"Fragments",id:"fragments",children:[]},{value:"Operation Name",id:"operation-name",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Mutations",id:"mutations",children:[]},{value:"Inline Fragments",id:"inline-fragments",children:[]}]},{value:"Schema and Types",id:"schema-and-types",children:[{value:"Type System",id:"type-system",children:[]},{value:"Type Language",id:"type-language",children:[]},{value:"Object Types and Fields",id:"object-types-and-fields",children:[]},{value:"Arguments",id:"arguments-1",children:[]},{value:"The Query and Mutation Types",id:"the-query-and-mutation-types",children:[]},{value:"Scalar Types",id:"scalar-types",children:[]},{value:"Enumeration Types",id:"enumeration-types",children:[]},{value:"Lists and Non-Null",id:"lists-and-non-null",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Union Types",id:"union-types",children:[]},{value:"Input Types",id:"input-types",children:[]}]},{value:"Execution",id:"execution",children:[]},{value:"Language Support",id:"language-support",children:[{value:"Top 5",id:"top-5",children:[]},{value:"JavaScript",id:"javascript",children:[]},{value:"Tools",id:"tools",children:[]}]}],p={toc:o};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data."),Object(l.b)("h2",{id:"queries-and-mutations"},"Queries and Mutations"),Object(l.b)("h3",{id:"fields"},"Fields"),Object(l.b)("p",null,"At its simplest, GraphQL is about asking for specific fields on objects. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  lifebank {\n    name\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank"\n    }\n  }\n}\n')),Object(l.b)("p",null,"This is essential to GraphQL, because you always get back what you expect, and the server knows exactly what fields the client is asking for."),Object(l.b)("h3",{id:"arguments"},"Arguments"),Object(l.b)("p",null,"Every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches. You can even pass arguments into scalar fields, to implement data transformations once on the server, instead of on every client separately."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  lifebank(email: "blood@gmail.com") {\n    telephone\n    location    \n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank"\n        "location": "Costa Rica",\n    }\n  }\n}\n')),Object(l.b)("p",null,"GraphQL comes with a default set of types, but a GraphQL server can also declare its own custom types, as long as they can be serialized into your transport format."),Object(l.b)("h3",{id:"aliases"},"Aliases"),Object(l.b)("p",null,"Aliases allow you to rename the result of a field to whatever you want."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  mainLifebank: lifebank(email: "blood@gmail.com") {\n    name\n  }\n  secondaryLifebank: lifebank(email: "secondaryblood@gmail.com") {\n    name\n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "mainLifebank": {\n        "name": "National Blood Bank"\n    },\n    "secondaryLifebank": {\n        "name": "National Rescue Blood Bank"\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"fragments"},"Fragments"),Object(l.b)("p",null,"GraphQL includes reusable units called fragments. Fragments let you construct sets of fields, and then include them in queries where you need to. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  leftComparison: lifebank(email: "blood@gmail.com") {\n    ...comparisonFields\n  }\n  rightComparison: lifebank(email: "secondaryblood@gmail.com") {\n    ...comparisonFields\n  }\n}\n\nfragment comparisonFields on Character {\n  name\n  location \n  telephone\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "leftComparison": {\n        "name": "National Blood Bank",\n        "location": "Costa Rica",\n        "urgencyLevel": "high" \n    },\n    "rightComparison": {\n        "name": "National Rescue Blood Bank",\n        "location": "Costa Rica",\n        "urgencyLevel": "medium" \n    }\n  }\n}\n')),Object(l.b)("p",null,"The concept of fragments is frequently used to split complicated application data requirements into smaller chunks."),Object(l.b)("h3",{id:"operation-name"},"Operation Name"),Object(l.b)("p",null,"The operation name is a meaningful and explicit name for your operation. It is only required in multi-operation documents, but its use is encouraged because it is very helpful for debugging and server-side logging. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query LifebankNameAndPhotos {\n  lifebank{\n    name\n    photos {\n        url\n    }\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank",\n        "photos": [\n            {\n                "url": "photo1.png"\n            },\n            {\n                "url": "photo2.png"\n            },\n            {\n                "url": "photo3.png"\n            }\n        ]\n    }\n  }\n}\n')),Object(l.b)("p",null,"When something goes wrong it is easier to identify a query in your codebase by name instead of trying to decipher the contents. "),Object(l.b)("h3",{id:"variables"},"Variables"),Object(l.b)("p",null,"GraphQL has a first-class way to factor dynamic values out of the query, and pass them as a separate dictionary. These values are called variables."),Object(l.b)("p",null,"When we start working with variables, we need to do three things:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Replace the static value in the query with ",Object(l.b)("inlineCode",{parentName:"li"},"$variableName"),"."),Object(l.b)("li",{parentName:"ul"},"Declare ",Object(l.b)("inlineCode",{parentName:"li"},"$variableName")," as one of the variables accepted by the query."),Object(l.b)("li",{parentName:"ul"},"Pass variableName: value in the separate, transport-specific (usually JSON) variables dictionary.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "email": "blood@gmail.com"\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query LifebankNameAndPhotos($email: Lifebank) {\n  lifebank(email: $email) {\n    name\n    photos {\n        url\n    }\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank",\n        "photos": [\n            {\n                "url": "photo1.png"\n            },\n            {\n                "url": "photo2.png"\n            },\n            {\n                "url": "photo3.png"\n            }\n        ]\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"directives"},"Directives"),Object(l.b)("p",null,"A directive can be attached to a field or fragment inclusion, and can affect execution of the query in any way the server desires. The core GraphQL specification includes exactly two directives, which must be supported by any spec-compliant GraphQL server implementation:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"@include"),"(if: Boolean) Only include this field in the result if the argument is true."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"@skip"),"(if: Boolean) Skip this field if the argument is true.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n    "email": "blood@gmail.com",\n    "withPhotos": false\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query Lifebank($email: Lifebank, $withPhotos: Boolean!) {\n  lifebank(name: $email) {\n    name\n    photos @include(if: $withPhotos) {\n        url\n    }\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n    "name": "National Blood Bank" \n   }\n}\n')),Object(l.b)("h3",{id:"mutations"},"Mutations"),Object(l.b)("p",null,"Any query could be implemented to cause a data write. However, it is useful to establish a convention that any operation that causes writes must be explicitly sent through a mutation."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "email": "blood@gmail.com",\n  "urgencyLevel": "high"\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"mutation ChangeUrgencyLevel($ep: Episode!, $review: ReviewInput!) {\n  updateUrgencyLevel(email: $email, urgencyLevel: $urgencyLevel) {\n    urgencyLevel\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "updateUrgencyLevel": {\n    "urgencyLevel": "high",\n    }\n  }\n}\n')),Object(l.b)("p",null,"Similar to queries, if the mutation field returns an object type, you can request nested fields. This can be useful to get the new state of an object after an update."),Object(l.b)("h3",{id:"inline-fragments"},"Inline Fragments"),Object(l.b)("p",null,"If you are querying a field that returns an interface or a union type, you will need to use inline fragments to access data on the underlying concrete type."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "ep": "JEDI"\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query HeroForEpisode($ep: Episode!) {\n  hero(episode: $ep) {\n    name\n    ... on Droid {\n    primaryFunction\n    }\n    ... on Human {\n    height\n    }\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "hero": {\n    "name": "R2-D2",\n    "primaryFunction": "Astromech"\n    }\n  }\n}\n')),Object(l.b)("h2",{id:"schema-and-types"},"Schema and Types"),Object(l.b)("h3",{id:"type-system"},"Type System"),Object(l.b)("p",null,"Every GraphQL service defines a set of types which completely describe the set of possible data you can query on that service. Then, when queries come in, they are validated and executed against that schema."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  lifebank {\n    name\n    email\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank ": {\n    \u201cname": "National Blood Bank",\n    "email": "blood@gmail.com"\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"type-language"},"Type Language"),Object(l.b)("p",null,'GraphQL services can be written in any language. The "GraphQL schema language" - it\'s similar to the query language, and allows us to talk about GraphQL schemas in a language-agnostic way.'),Object(l.b)("h3",{id:"object-types-and-fields"},"Object Types and Fields"),Object(l.b)("p",null,"The most basic components of a GraphQL schema are object types. In the GraphQL schema language, we might represent it like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"type Character {\n name: String!\n appearsIn: [Episode!]!\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Character")," is a GraphQL Object Type, meaning it's a type with some fields. Most of the types in your schema will be object types.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"name")," and ",Object(l.b)("inlineCode",{parentName:"p"},"appearsIn")," are fields on the Character type. That means that name and appearsIn are the only fields that can appear in any part of a GraphQL query that operates on the \u2018Character\u2019 type.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"String")," is one of the built-in scalar types - these are types that resolve to a single scalar object, and can't have sub-selections in the query.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"[Episode!]!")," represents an array of Episode objects. Since it is also non-nullable, you can always expect an array (with zero or more items) when you query the \u2018appearsIn\u2019 field. "))),Object(l.b)("h3",{id:"arguments-1"},"Arguments"),Object(l.b)("p",null,"Every field on a GraphQL object type can have zero or more arguments. All arguments in GraphQL are passed by name specifically,  can be either required or optional. When an argument is optional, we can define a default value - if the unit argument is not passed, it will be set to METER by default."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"type Starship {\n id: ID!\n name: String!\n length(unit: LengthUnit = METER): Float\n}\n")),Object(l.b)("h3",{id:"the-query-and-mutation-types"},"The Query and Mutation Types"),Object(l.b)("p",null,"Every GraphQL service has a query type and may or may not have a mutation type. These types are the same as a regular object type, but they are special because they define the entry point of every GraphQL query. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Schema"',title:'"Schema"'},"schema {\n query: Query\n mutation: Mutation\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'query {\n  hero {\n    name\n  }\n  droid(id: "2000") {\n    name\n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "hero": {\n        "name": "R2-D2"\n    },\n    "droid": {\n        "name": "C-3PO"\n    }\n  }\n}\n')),Object(l.b)("p",null,"Mutations work in a similar way - you define fields on the Mutation type, and those are available as the root mutation fields you can call in your query."),Object(l.b)("h3",{id:"scalar-types"},"Scalar Types"),Object(l.b)("p",null,"Scalar types  represent the leaves of the query. We know this because those fields don't have any sub-fields - they are the leaves of the query."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  hero {\n    name\n    appearsIn\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "hero": {\n       "name": "R2-D2",\n       "appearsIn": [\n           "NEWHOPE",\n           "EMPIRE",\n           "JEDI"\n        ]\n    }\n  }\n}\n')),Object(l.b)("p",null,"GraphQL comes with a set of default scalar types out of the box:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Int"),": A signed 32\u2010bit integer."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Float"),": A signed double-precision floating-point value."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"String"),": A UTF\u20108 character sequence."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Boolean"),": true or false."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ID"),": The ID scalar type represents a unique identifier The ID type is serialized in the same way as a String.")),Object(l.b)("h3",{id:"enumeration-types"},"Enumeration Types"),Object(l.b)("p",null,"Also called Enums, enumeration types are a special kind of scalar that is restricted to a particular set of allowed values. This allows you to:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Validate that any arguments of this type are one of the allowed values."),Object(l.b)("li",{parentName:"ul"},"Communicate through the type system that a field will always be one of a finite set of values.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Enum"',title:'"Enum"'},"enum Episode {\n  NEWHOPE\n  EMPIRE\n  JEDI\n}\n")),Object(l.b)("h3",{id:"lists-and-non-null"},"Lists and Non-Null"),Object(l.b)("p",null,"The Non-Null type modifier be used when defining arguments for a field, which will cause the GraphQL server to return a validation error if a null value is passed as that argument, whether in the GraphQL string or in the variables."),Object(l.b)("p",null,"Lists work in a similar way: We can use a type modifier to mark a type as a List, which indicates that this field will return an array of that type."),Object(l.b)("p",null,"The Non-Null and List modifiers can be combined. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Type"',title:'"Type"'},"type Character {\n  name: String!\n  appearsIn: [Episode]!\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "id": null\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query DroidById($id: ID!) {\n  droid(id: $id) {\n    name\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "errors": [\n    {\n       "message": "Variable \\"$id\\" of non-null type \\"ID!\\" must not be null.",\n       "locations": [\n        {\n          "line": 1,\n          "column": 17\n        }\n    ]\n    }\n  ]\n}\n')),Object(l.b)("h3",{id:"interfaces"},"Interfaces"),Object(l.b)("p",null,"An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Interface"',title:'"Interface"'},"interface Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Example 1"',title:'"Example','1"':!0},"type Human implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  starships: [Starship]\n  totalCredits: Int\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Example 2"',title:'"Example','2"':!0},"type Droid implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  primaryFunction: String\n}\n")),Object(l.b)("p",null,"Interfaces are useful when you want to return an object or set of objects."),Object(l.b)("h3",{id:"union-types"},"Union Types"),Object(l.b)("p",null,"Union types are very similar to interfaces, but they don't get to specify any common fields between the types."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Union"',title:'"Union"'},"union SearchResult = Human | Droid | Starship\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  search(text: "an") {\n    __typename\n    ... on Human {\n        name\n        height\n    }\n\n    ... on Droid {\n        name\n        primaryFunction\n    }\n\n    ... on Starship {\n        name\n        length\n    }\n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "search": [\n    {\n        "__typename": "Human",\n        "name": "Han Solo",\n        "height": 1.8\n    },\n    {\n        "__typename": "Human",\n        "name": "Leia Organa",\n        "height": 1.5\n    },\n    {\n        "__typename": "Starship",\n        "name": "TIE Advanced x1",\n        "length": 9.2\n    }\n    ]\n  }\n}\n')),Object(l.b)("h3",{id:"input-types"},"Input Types"),Object(l.b)("p",null,"In the GraphQL schema language, input types look exactly the same as regular object types, but with the keyword input instead of type."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input Type"',title:'"Input','Type"':!0},"input ReviewInput {\n stars: Int!\n commentary: String\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "ep": "JEDI",\n  "review": {\n    "stars": 5,\n    "commentary": "This is a great movie!"\n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n  createReview(episode: $ep, review: $review) {\n    stars\n    commentary\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "createReview": {\n    "stars": 5,\n    "commentary": "This is a great movie!"\n    }\n  }\n}\n')),Object(l.b)("p",null,"The fields on an input object type can themselves refer to input object types, but you can't mix input and output types in your schema. Input object types also can't have arguments on their fields."),Object(l.b)("h2",{id:"execution"},"Execution"),Object(l.b)("p",null,"After being validated, a GraphQL query is executed by a GraphQL server which returns a result that mirrors the shape of the requested query, typically as JSON."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Type System"',title:'"Type','System"':!0},"type Query {\n    human(id: ID!): Human\n}\n\ntype Human {\n    name: String\n    appearsIn: [Episode]\n    starships: [Starship]\n}\n\nenum Episode {\n    NEWHOPE\n    EMPIRE\n    JEDI\n}\n\ntype Starship {\n    name: String\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  human(id: 1002) {\n    name\n    appearsIn\n    starships {\n        name\n    }\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "human": {\n        "name": "Han Solo",\n        "appearsIn": [\n            "NEWHOPE",\n            "EMPIRE",\n            "JEDI"\n        ],\n        "starships": [\n        {\n            "name": "Millenium Falcon"\n        },\n        {\n            "name": "Imperial shuttle"\n        }\n        ]\n    }\n  }\n}\n')),Object(l.b)("p",null,"Each field on each type is backed by a function called the resolver which is provided by the GraphQL server developer. When a field is executed, the corresponding resolver is called to produce the next value."),Object(l.b)("h2",{id:"language-support"},"Language Support"),Object(l.b)("h3",{id:"top-5"},"Top 5"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://www.javascript.com"},"JavaScript")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://golang.org"},"Go")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://www.php.net"},"PHP")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://www.python.org"},"Python")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://www.java.com/en/"},"Java"))),Object(l.b)("h3",{id:"javascript"},"JavaScript"),Object(l.b)("h4",{id:"serve"},"Serve"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"GraphQL.js:")," The reference implementation of the GraphQL specification, designed for running GraphQL in a Node.js environment."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Apollo Server:")," A set of GraphQL server packages from Apollo that work with various Node.js HTTP frameworks (Express, Connect, Hapi, Koa etc).")),Object(l.b)("h4",{id:"client"},"Client"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Apollo Client:")," A powerful JavaScript GraphQL client, designed to work well with React, React Native, Angular 2, or just plain JavaScript."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"GraphQL Request:")," A simple and flexible JavaScript GraphQL client that works in all JavaScript environments (the browser, Node.js, and React Native) - basically a lightweight wrapper around fetch. ")),Object(l.b)("h3",{id:"tools"},"Tools"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"GraphiQL:")," An interactive in-browser GraphQL IDE."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"GraphQL CLI:")," A command line tool for common GraphQL development workflows.")),Object(l.b)("h4",{id:"services"},"Services"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://guide.eoscostarica.io/docs/developer-tools#apollo"},Object(l.b)("strong",{parentName:"a"},"Apollo:"))," A cloud service for monitoring the performance and usage of your GraphQL backend."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://guide.eoscostarica.io/docs/developer-tools#hasura"},Object(l.b)("strong",{parentName:"a"},"Hasura:"))," Hasura connects to your databases and microservices and instantly gives you a production-ready GraphQL API."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://guide.eoscostarica.io/docs/developer-tools#postman"},Object(l.b)("strong",{parentName:"a"},"Postman:"))," An HTTP Client that supports editing GraphQL queries.")))}c.isMDXComponent=!0}}]);