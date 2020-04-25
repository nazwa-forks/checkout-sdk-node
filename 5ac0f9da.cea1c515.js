(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Highlight",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(6),a=(n(0),n(121)),c={id:"initialize",title:"Initialize"},o={id:"initialize",title:"Initialize",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/initialize.md",permalink:"/checkout-sdk-node/initialize",sidebar:"someSidebar",previous:{title:"Install",permalink:"/checkout-sdk-node/install"},next:{title:"Environment",permalink:"/checkout-sdk-node/environment"}},l=[{value:"With environment variables",id:"with-environment-variables",children:[]},{value:"With your secret key",id:"with-your-secret-key",children:[]},{value:"With your secret &amp; public key &amp; config",id:"with-your-secret--public-key--config",children:[]},{value:"Update config",id:"update-config",children:[]}],s=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={rightToc:l,Highlight:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you use environment variables, the SDK will pick the keys up when they are set as ",Object(a.b)(s,{color:"#a45200",mdxType:"Highlight"},"CKO_SECRET_KEY")," and ",Object(a.b)(s,{color:"#a45200",mdxType:"Highlight"},"CKO_PUBLIC_KEY"),"."))),Object(a.b)("h2",{id:"with-environment-variables"},"With environment variables"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const cko = new Checkout();\n")),Object(a.b)("h2",{id:"with-your-secret-key"},"With your secret key"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const cko = new Checkout('sk_XXXX');\n")),Object(a.b)("h2",{id:"with-your-secret--public-key--config"},"With your secret & public key & config"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const cko = new Checkout('sk_XXXX', { pk: 'pk_XXX', timeout: 7000 });\n")),Object(a.b)("p",null,"For now only the request timeout can be configured. Future configuration options will be added and will very likly be passed in a similar way."),Object(a.b)("h2",{id:"update-config"},"Update config"),Object(a.b)("p",null,"If at any point you need to update the API key used, you can update the SDK config like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const cko = new Checkout('sk_XXXX');\n...\ncko.config = {\n    sk: newSecretKey,\n    pk: newPublicKey,\n    host: \"https://myProxyExample.com\",\n    timeout: newTimeOut\n};\n")),Object(a.b)("p",null,"The host will allow you to replace the base API URL with your own, if at any point you need this for testing purposes."),Object(a.b)("p",null,"The SDK is using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/node-fetch/node-fetch"}),"node-fetch")," as the HTTP client so if that means that it's easy to moch API responses with tolls like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nock/nock"}),"nock"),"."))}p.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(h,o({ref:t},s,{components:n})):i.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);