(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{5573:function(e){"use strict";/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */ var t=/["'&<>]/;e.exports=function(e){var n,r=""+e,l=t.exec(r);if(!l)return r;var a="",i=0,o=0;for(i=l.index;i<r.length;i++){switch(r.charCodeAt(i)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}o!==i&&(a+=r.substring(o,i)),o=i+1,a+=n}return o!==i?a+r.substring(o,i):a}},3725:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(5064)}])},7430:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(5893),l=n(9008),a=n.n(l),i=n(1664),o=n.n(i),c=n(7294),s=n(1163),u=n(4603),d=n(6130),h=n(2010);function m(){var e=(0,s.useRouter)().asPath,t=(0,c.useState)("hamburger-nonactive"),n=t[0],l=t[1],a=(0,c.useState)("menu-hidden"),i=a[0],m=a[1],f=(0,c.useState)(!1),g=f[0],b=f[1],v=function(){g?(l("hamburger-nonactive"),m("menu-hidden")):(l("hamburger-active"),m("menu-visible")),b(!g)},p=(0,c.useState)(!1),x=p[0],j=p[1];(0,c.useEffect)(function(){j(!0)},[]);var y=(0,h.F)(),E=y.systemTheme,w=y.theme,k=y.setTheme;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:"flex navbar-fixed top-0 left-0 w-full items-center z-10 dark:bg-opacity-70 dark:bg-black bg-opacity-70",children:(0,r.jsx)("div",{className:"container lg:px-36",children:(0,r.jsxs)("div",{className:"flex justify-between relative",children:[(0,r.jsx)("div",{className:"px-4",children:(0,r.jsx)(o(),{href:"/",children:(0,r.jsxs)("a",{className:"font-bold text-2xl block py-6 relative",children:["wrseno ",(0,r.jsx)("span",{className:"text-gradient text-5xl absolute top-3.5",children:"⪤"})]})})}),(0,r.jsxs)("div",{className:"flex items-center px-4",children:[(0,r.jsxs)("button",{id:n,name:"hamburger",type:"button",className:"block absolute right-4 lg:hidden",onClick:v,children:[(0,r.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out origin-top-left dark:bg-white bg-black"}),(0,r.jsx)("span",{className:"hamburger-line-2 transition duration-300 ease-in-out dark:bg-white bg-black"}),(0,r.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out origin-bottom-left dark:bg-white bg-black"})]}),(0,r.jsx)("nav",{id:i,className:"hidden absolute py-5 dark:bg-black bg-white dark:bg-opacity-90 bg-opacity-90 font-semibold shadow-lg rounded-lg w-full right-0 top-full dark:text-white lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none",children:(0,r.jsxs)("ul",{className:"block lg:flex items-center",children:[(0,r.jsx)("li",{className:"group",children:(0,r.jsx)(o(),{href:"/about",children:(0,r.jsx)("a",{className:"".concat("/about"===e?"font-bold border-b-4 rounded-sm border-primary":""," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:"About"})})}),(0,r.jsx)("li",{className:"group",children:(0,r.jsx)(o(),{href:"/achievement",children:(0,r.jsx)("a",{className:"".concat("/achievement"===e?"font-bold border-b-4 rounded-sm border-primary":""," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:"Achievements"})})}),(0,r.jsx)("li",{className:"group",children:(0,r.jsx)(o(),{href:"/project",children:(0,r.jsx)("a",{className:"".concat("/project"===e?"font-bold border-b-4 rounded-sm border-primary":""," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:"Projects"})})}),(0,r.jsx)("li",{className:"group",children:(0,r.jsx)(o(),{href:"/blog",children:(0,r.jsx)("a",{className:"".concat("/blog"===e?"font-bold border-b-4 rounded-sm border-primary":""," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:"Blog"})})}),(0,r.jsx)("li",{className:"group py-2 mx-8 lg:mx-4",children:x?"dark"===("system"===w?E:w)?(0,r.jsx)(u.Z,{className:"lg:ml-4 w-8 h-8 bg-slate-500 rounded-md text-yellow-500",role:"button",onClick:function(){return k("light")}}):(0,r.jsx)(d.Z,{className:"lg:ml-4 w-8 h-8 bg-slate-500 rounded-md text-gray-900",role:"button",onClick:function(){return k("dark")}}):null})]})})]})]})})})})}function f(){return(0,r.jsx)("div",{})}function g(e){var t=e.children,n=e.pageTitle;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsxs)("title",{children:["Wrseno | ",n]}),(0,r.jsx)("meta",{name:"author",content:"Warseno Bambang Setyono"}),(0,r.jsx)("meta",{name:"description",content:"Warseno Portofolio Website"}),(0,r.jsx)("meta",{name:"keywords",content:"Warseno, Warseno Bambang, Warseno Bambang Setyono, wrseno, wrzeno, Warseno Skanja, Warseno SMK 1"}),(0,r.jsx)("meta",{name:"og:title",content:"Warseno Bambang Setyono"}),(0,r.jsx)("meta",{name:"og:url",content:"https://wrseno.my.id"}),(0,r.jsx)("meta",{name:"og:site_name",content:"wrseno"}),(0,r.jsx)("link",{rel:"icon",href:"/wrseno_icon2.png"})]}),(0,r.jsx)(m,{}),(0,r.jsx)("div",{children:t}),(0,r.jsx)(f,{})]})}},5064:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return A},default:function(){return F}});var r,l=n(5893),a=n(7294),i=n(7430),o=n(5675),c=n.n(o),s=n(5434),u=n(381),d=n.n(u);function h(e){return void 0!==e.children}function m(e){return void 0!==e.text}(T=r||(r={}))[T["heading-one"]=0]="heading-one",T[T["heading-two"]=1]="heading-two",T[T["heading-three"]=2]="heading-three",T[T["heading-four"]=3]="heading-four",T[T["heading-five"]=4]="heading-five",T[T["heading-six"]=5]="heading-six",T[T.table_head=6]="table_head";var f={"heading-one":"h1","heading-two":"h2","heading-three":"h3","heading-four":"h4","heading-five":"h5","heading-six":"h6",class:"class",link:"a",image:"img",iframe:"iframe",video:"video","bulleted-list":"ul","numbered-list":"ol","list-item":"li","list-item-child":"list_item_child",table:"table",table_head:"table_head",table_body:"table_body",table_row:"table_row",table_cell:"table_cell",table_header_cell:"table_header_cell","block-quote":"blockquote",paragraph:"p",bold:"bold",italic:"italic",underline:"underline",code:"code","code-block":"code_block"},g=n(5573),b=n.n(g);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}function x(e){var t=e.url;return a.createElement("audio",{style:{display:"block",maxWidth:"100%",height:"auto"},src:t,controls:!0},a.createElement("p",null,"Your browser doesn't support HTML5 audio. Here is a"," ",a.createElement("a",{href:t},"link to the audio")," instead."))}function j(e){var t=e.src,n=e.width,r=e.height,l=e.altText,i=e.title;return a.createElement("img",Object.assign({loading:"lazy",src:b()(t)},n&&n>0&&{width:n},r&&r>0&&{height:r},{alt:l,title:i}))}function y(e){var t=e.src,n=e.width,r=e.height,l=e.title;return a.createElement("video",{src:b()(t),controls:!0,width:n||"100%",height:r||"100%",title:l},a.createElement("p",null,"Your browser doesn't support HTML5 video. Here is a"," ",a.createElement("a",{href:t},"link to the video")," instead."))}function E(e){return e.mimeType,a.createElement(a.Fragment,null)}var w={a:function(e){var t=e.children,n=p(e,["children"]),r=n.href,l=n.rel,i=n.id,o=n.title,c=n.openInNewTab,s=n.className,u={};return l&&(u.rel=l),i&&(u.id=i),o&&(u.title=o),s&&(u.className=s),c&&(u.target="_blank"),a.createElement("a",Object.assign({href:b()(r)},u),t)},class:function(e){var t=e.className,n=e.children;return a.createElement("div",{className:t},n)},video:y,img:j,iframe:function(e){var t=e.url;return a.createElement("div",{style:{position:"relative",overflow:"hidden",width:"100%",paddingTop:"56.25%"}},a.createElement("iframe",{style:{position:"absolute",top:0,bottom:0,right:0,left:0,width:"100%",height:"100%"},src:b()(t),loading:"lazy",allow:"fullscreen",frameBorder:"0",referrerPolicy:"no-referrer"}))},blockquote:function(e){var t=e.children;return a.createElement("blockquote",null,t)},ul:function(e){var t=e.children;return a.createElement("ul",null,t)},ol:function(e){var t=e.children;return a.createElement("ol",null,t)},li:function(e){var t=e.children;return a.createElement("li",null,t)},p:function(e){var t=e.children;return a.createElement("p",null,t)},h1:function(e){var t=e.children;return a.createElement("h1",null,t)},h2:function(e){var t=e.children;return a.createElement("h2",null,t)},h3:function(e){var t=e.children;return a.createElement("h3",null,t)},h4:function(e){var t=e.children;return a.createElement("h4",null,t)},h5:function(e){var t=e.children;return a.createElement("h5",null,t)},h6:function(e){var t=e.children;return a.createElement("h6",null,t)},table:function(e){var t=e.children;return a.createElement("table",null,t)},table_head:function(e){var t=e.children;return a.createElement("thead",null,t)},table_body:function(e){var t=e.children;return a.createElement("tbody",null,t)},table_row:function(e){var t=e.children;return a.createElement("tr",null,t)},table_cell:function(e){var t=e.children;return a.createElement("td",null,t)},table_header_cell:function(e){var t=e.children;return a.createElement("th",null,t)},bold:function(e){var t=e.children;return a.createElement("b",null,t)},italic:function(e){var t=e.children;return a.createElement("i",null,t)},underline:function(e){var t=e.children;return a.createElement("u",null,t)},code:function(e){var t=e.children;return a.createElement("code",null,t)},code_block:function(e){var t=e.children;return a.createElement("pre",{style:{whiteSpace:"pre",wordWrap:"break-word",overflowX:"auto",WebkitOverflowScrolling:"touch",fontFamily:"monospace"}},t)},list_item_child:function(e){var t=e.children;return a.createElement(a.Fragment,null,t)},Asset:{audio:function(e){return a.createElement(x,Object.assign({},e,{url:e.url}))},image:function(e){return a.createElement(j,Object.assign({},e,{src:e.url}))},video:function(e){return a.createElement(y,Object.assign({},e,{src:e.url}))},font:E,application:E,model:E,text:E},embed:{},link:{}};function k(e){var t=e.textNode,n=e.renderers,r=e.shouldSerialize,l=t.text,i=t.bold,o=t.italic,c=t.underline,s=t.code,u=r?function(e){if(e.includes("\n")){var t=e.split("\n");return t.map(function(e,n){return a.createElement(a.Fragment,{key:n},e,n===t.length-1?null:a.createElement("br",null))})}return e}(l):l,d=null==n?void 0:n.bold,h=null==n?void 0:n.italic,m=null==n?void 0:n.underline,f=null==n?void 0:n.code;return i&&d&&(u=a.createElement(d,null,u)),o&&h&&(u=a.createElement(h,null,u)),c&&m&&(u=a.createElement(m,null,u)),s&&f&&(u=a.createElement(f,null,u)),a.createElement(a.Fragment,null,u)}function N(e){var t=e.node,n=e.parent,r=e.renderers,l=e.references;if(m(t)){var i=t.text,o=n&&h(n)&&"code-block"!==n.type;return a.createElement(k,{textNode:v({},t,{text:i}),renderers:r,shouldSerialize:o})}return h(t)?a.createElement(_,{element:t,renderers:r,references:l}):(t.type,a.createElement(a.Fragment,null))}function _(e){var t,n,l=e.element,i=e.renderers,o=e.references,c=l.children,s=l.type,u=p(l,["children","type"]),d=u.nodeId,g=u.nodeType;if(s in r&&(t={children:c},n=t.children,n.length>1?!(n.filter(function e(t){return!!m(t)&&""!==t.text||!!h(t)&&(t.children=t.children.filter(e)).length}).length>0):""===n[0].text))return a.createElement(a.Fragment,null);var b=d&&g,x=b?null==o?void 0:o.filter(function(e){return e.id===d})[0]:null;if(b&&"Asset"!==g){var j,y,E,w="link"===s?null==i?void 0:null==(y=i.link)?void 0:y[g]:null==i?void 0:null==(E=i.embed)?void 0:E[g];if(void 0===w)return console.warn("[@graphcms/rich-text-react-renderer]: No renderer found for custom "+s+" nodeType "+g+"."),a.createElement(a.Fragment,null);j=w}if(b&&"Asset"===g){var k=null==i?void 0:null==(N=i.Asset)?void 0:N[null==x?void 0:x.mimeType];if(void 0!==k)j=k;else{var N,_,S=null==x?void 0:x.mimeType.split("/")[0];j=null==i?void 0:null==(_=i.Asset)?void 0:_[S]}}var T=b?j:null==i?void 0:i[f[s]],A=v({},u,x);return T?a.createElement(T,Object.assign({},A),a.createElement(O,{content:c,renderers:i,references:o,parent:l})):a.createElement(a.Fragment,null)}function O(e){var t,n=e.content,r=e.references,l=e.renderers,i=e.parent,o=Array.isArray(n)?n:n.children;return a.createElement(a.Fragment,null,o.map(function(e,t){return a.createElement(N,{node:e,parent:i||null,renderers:l,references:r,key:t})}))}function S(e){var t=e.content,n=e.renderers,r=e.references,l=v({},null==w?void 0:w.Asset,null==n?void 0:n.Asset),i=v({},w,n,{Asset:l});return a.createElement(O,{content:t,renderers:i,references:r})}var T,A=!0,F=function(e){var t=e.blog;return(0,l.jsx)(i.Z,{pageTitle:"Blog",children:(0,l.jsx)("main",{className:"md:pt-32 pt-24",children:(0,l.jsx)("section",{className:"container lg:px-36",children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)(c(),{src:t.image.url,width:1e3,height:500,alt:t.title,unoptimized:!0,placeholder:"blur",className:"rounded-lg",blurDataURL:t.image.url}),(0,l.jsx)("h1",{className:"text-4xl font-bold my-4",children:t.title}),(0,l.jsxs)("div",{className:"flex gap-2",children:[(0,l.jsxs)("span",{className:"flex gap-2",children:[(0,l.jsx)(c(),{src:t.author.photo.url,width:30,height:20,alt:t.author.name,unoptimized:!0,placeholder:"blur",blurDataURL:t.author.photo.url,className:"bg-red-600 rounded-full"}),(0,l.jsx)("p",{children:t.author.name})]}),(0,l.jsxs)("p",{className:"flex items-center gap-2",children:[(0,l.jsx)(s.f$3,{}),d()(t.createdAt).format("MMM DD, YYYY")]})]}),(0,l.jsx)("div",{className:"py-8",children:(0,l.jsx)(a.Fragment,{children:(0,l.jsx)(S,{content:t.content.raw})})})]})})})})}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(l),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function c(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var n,l=e.attr,a=e.size,c=e.title,s=o(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,function(e){return t(e)}):t(l)}}},function(e){e.O(0,[228,885,637,675,774,888,179],function(){return e(e.s=3725)}),_N_E=e.O()}]);