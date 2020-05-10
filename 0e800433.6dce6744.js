(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Highlight",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(164)),c={id:"tokens",title:"Tokens"},i={id:"tokens",title:"Tokens",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/tokens.md",permalink:"/checkout-sdk-node/tokens",sidebar:"someSidebar",previous:{title:"Sources",permalink:"/checkout-sdk-node/sources"},next:{title:"Instruments",permalink:"/checkout-sdk-node/instruments"}},l=[{value:'Request a token for <Highlight color="#25c2a0">Apple Pay</Highlight>',id:"request-a-token-for-apple-pay",children:[]},{value:'Request a token for <Highlight color="#25c2a0">Google Pay</Highlight>',id:"request-a-token-for-google-pay",children:[]},{value:'Request a token for <Highlight color="#25c2a0">raw card details</Highlight>',id:"request-a-token-for-raw-card-details",children:[]}],s=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{color:n,padding:"0.2rem"}},t)},p={rightToc:l,Highlight:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can find a list of request body parameters and possible outcomes ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-reference.checkout.com/#tag/Tokens"}),"here"),"."),Object(a.b)("p",null,"The SDK will infer the type of the payload, if not provided."),Object(a.b)("h2",{id:"request-a-token-for-apple-pay"},"Request a token for ",Object(a.b)(s,{color:"#25c2a0",mdxType:"Highlight"},"Apple Pay")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const token = await cko.tokens.request({\n    // type:\"applepay\" is inferred\n    token_data: {\n        version: 'EC_v1',\n        data: 'XXX',\n        signature: 'XXX',\n        header: {\n            ephemeralPublicKey: 'XXX',\n            publicKeyHash: 'XXX',\n            transactionId: 'XXX'\n        }\n    }\n});\n")),Object(a.b)("h2",{id:"request-a-token-for-google-pay"},"Request a token for ",Object(a.b)(s,{color:"#25c2a0",mdxType:"Highlight"},"Google Pay")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const token = await cko.tokens.request({\n    // type:\"googlepay\" is inferred\n    token_data: {\n        protocolVersion: 'EC_v1',\n        signature: 'XXX',\n        signedMessage: 'XXX'\n    }\n});\n")),Object(a.b)("h2",{id:"request-a-token-for-raw-card-details"},"Request a token for ",Object(a.b)(s,{color:"#25c2a0",mdxType:"Highlight"},"raw card details")),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you do not have SEQ-D level of PCI Compliance, this interaction can only be done in the test environment in case you want to unit test your code and you need a token to subsequently do a payment. In the production environment you need to use a solution like ",Object(a.b)("strong",{parentName:"p"},"Checkout.Frames")," to generate the token for you."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const token = await cko.tokens.request({\n    // type:\"card\" is inferred\n    number: '4242424242424242',\n    expiry_month: '6',\n    expiry_year: '2028',\n    cvv: '100'\n});\n")))}u.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,i({ref:t},s,{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);