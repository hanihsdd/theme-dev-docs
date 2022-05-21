"use strict";(self.webpackChunktheme_dev_docs=self.webpackChunktheme_dev_docs||[]).push([[7750],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3522:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={},s="Icons",c={unversionedId:"components/icons",id:"components/icons",title:"Icons",description:"We have a variety of SVG icons used across the theme.",source:"@site/docs/components/icons.md",sourceDirName:"components",slug:"/components/icons",permalink:"/theme-dev-docs/docs/components/icons",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/icons.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Empty State",permalink:"/theme-dev-docs/docs/components/empty-state"},next:{title:"Tabs",permalink:"/theme-dev-docs/docs/components/tabs"}},u={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Storing an SVG icon",id:"storing-an-svg-icon",level:3},{value:"Icon Classes",id:"icon-classes",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"Rendering an icon",id:"rendering-an-icon",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Accessibility",id:"accessibility",level:3}],p={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"icons"},"Icons"),(0,i.kt)("p",null,"We have a variety of SVG icons used across the theme."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"SVG icons are stored in a single file within ",(0,i.kt)("inlineCode",{parentName:"p"},"snippets/icon.liquid")," allowing for us to easily render them."),(0,i.kt)("p",null,"All icons are stored within a single liquid case statement: ",(0,i.kt)("inlineCode",{parentName:"p"},"{%- case icon -%}")),(0,i.kt)("h3",{id:"storing-an-svg-icon"},"Storing an SVG icon"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'{%- when \'nav-arrow-left\' -%}\n  <svg focusable="false" width="{{ width | default: 17 }}" height="{{ height | default: 14 }}" class="{{ icon_class }}" viewBox="0 0 17 14">\n    <path d="M17 7H2M8 1L2 7l6 6" stroke="currentColor" stroke-width="{{ settings.icon_stroke_width }}" fill="none"></path>\n  </svg>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide a handleised name within the when statement: ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"li"},"{%- when 'my-handleised-icon-name' -%}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<svg>")," element should have:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'focusable="false"')," as we are generally including a visually-hidden text description for accessibility purposes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"height")," attributes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"class")," is a liquid variable we have stored of ",(0,i.kt)("inlineCode",{parentName:"li"},"{{ icon_class }}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"viewbox")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<path>")," elements should use ",(0,i.kt)("inlineCode",{parentName:"li"},"currentColor")," for any fills or strokes so we can inherit colours from our CSS")),(0,i.kt)("h3",{id:"icon-classes"},"Icon Classes"),(0,i.kt)("p",null,"These are rendered by default on all classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".icon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".icon--[icon-name]")),(0,i.kt)("li",{parentName:"ul"},"(",(0,i.kt)("em",{parentName:"li"},"optional"),") ",(0,i.kt)("inlineCode",{parentName:"li"},".icon--inline"))),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rendering-an-icon"},"Rendering an icon"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{%- render 'icon' with 'header-hamburger' -%}")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Options"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inline")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds an ",(0,i.kt)("inlineCode",{parentName:"td"},".icon--inline")," class to set as ",(0,i.kt)("inlineCode",{parentName:"td"},"inline-block"))))),(0,i.kt)("h3",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"Depending on the use-case and containing element, we should provide some form of accessibility solution. If an element has accompanying text then this is not needed. Important elements that need context would be things such as hamburger menus, search icons, account icons, etc."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the parent is an ",(0,i.kt)("inlineCode",{parentName:"li"},"<a>"),", we can add a simple ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-label")," attribute to this element as shown below:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a href="{{ routes.search_url }}" \n  is="toggle-link" \n  class="header__icon-wrapper o-tap-area"\n  // highlight-next-line\n  aria-label="{{ \'search.general.title\' | t | escape }}" \n  aria-controls="search-drawer" \n  aria-expanded="false">\n  {%- render \'icon\' with \'header-search\' -%}\n</a>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the parent element does not have an ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-label"),", we can add a visually hidden element above the rendered icon as shown below:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button is="toggle-button" class="header__icon-wrapper o-tap-area" aria-controls="mobile-menu-drawer" aria-expanded="false">\n  // highlight-next-line\n  <span class="visually-hidden">{{ \'header.general.navigation\' | t }}</span>\n  {%- render \'icon\' with \'header-hamburger\' -%}\n</button>\n')))}m.isMDXComponent=!0}}]);