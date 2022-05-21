"use strict";(self.webpackChunktheme_dev_docs=self.webpackChunktheme_dev_docs||[]).push([[546],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},52:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={},s="Aspect Ratio",p={unversionedId:"Components/aspect-ratio",id:"Components/aspect-ratio",title:"Aspect Ratio",description:"A containing element allowing to set the aspect ratio for various media such as images and video.",source:"@site/docs/Components/aspect-ratio.md",sourceDirName:"Components",slug:"/Components/aspect-ratio",permalink:"/theme-dev-docs/docs/Components/aspect-ratio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/aspect-ratio.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/theme-dev-docs/docs/tutorial-extras/translate-your-site"},next:{title:"Banner",permalink:"/theme-dev-docs/docs/Components/banner"}},d={},m=[{value:"How it works",id:"how-it-works",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"Size Modifiers",id:"size-modifiers",level:3},{value:"Other Modifiers",id:"other-modifiers",level:3}],c={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aspect-ratio"},"Aspect Ratio"),(0,r.kt)("p",null,"A containing element allowing to set the aspect ratio for various media such as images and video."),(0,r.kt)("p",null,"A common use-case for this is when lazy loading images. We do not want layout shifts when loading images. The aspect ratio sets a defined space for the media to load in."),(0,r.kt)("p",null,"We are utilising both the modern ",(0,r.kt)("inlineCode",{parentName:"p"},"aspect-ratio: 3/4"),' CSS property, and the traditional "intrinsic ratio" hack which sets padding on an element equal to its aspect ratio. Further information here:\n',(0,r.kt)("a",{parentName:"p",href:"https://css-tricks.com/aspect-ratio-boxes/"},"https://css-tricks.com/aspect-ratio-boxes/")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You only need aspect-ratio for media whose size you want the option to adjust. Standard images in their natural proportions work fine without this."))),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"aspect-ratio")," class will set a ",(0,r.kt)("inlineCode",{parentName:"li"},"padding-bottom")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--aspect-ratio")," to declare the size of an element."),(0,r.kt)("li",{parentName:"ul"},"The child media will be absolutely positioned relative to the ",(0,r.kt)("inlineCode",{parentName:"li"},"aspect-ratio")," parent")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<div class="image__wrapper">\n  <div class="aspect-ratio aspect-ratio--[size modifier]" \n       style="\n         padding-bottom: {{ 100.0 | divided_by: image.aspect_ratio }}%; \n         --aspect-ratio: {{ image.aspect_ratio }}">\n    <img class="image" [image attributes]>\n  </div>\n</div>\n')),(0,r.kt)("p",null,"The structure is generally as follows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wrapper element",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aspect-ratio"),", modifier classes, ",(0,r.kt)("inlineCode",{parentName:"li"},"style")," attribute",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"media")))))),(0,r.kt)("p",null,"We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," attribute to set the natural proportions via ",(0,r.kt)("inlineCode",{parentName:"p"},"padding-bottom")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"--aspect-ratio")," variable for modern browsers. If we don't have an ",(0,r.kt)("inlineCode",{parentName:"p"},"aspect-ratio--[size-modifier]"),", then these natural proportions will be used. Otherwise, the size modifier classes will override."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The below example shows an ",(0,r.kt)("inlineCode",{parentName:"p"},"article-item")," image. We provide the base class ",(0,r.kt)("inlineCode",{parentName:"p"},"aspect-ratio")," followed by a sizing modifier. This sizing modifier can often be selected by a customer in the Shopify backend as shown by the ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ image_size }}")," liquid variable in the example below."),(0,r.kt)("p",null,"If using natural image proportions, we will use a ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," attribute with padding, and an ",(0,r.kt)("inlineCode",{parentName:"p"},"--aspect-ratio")," variable for modern browsers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<a href="{{ article.url }}" class="article-item__image-wrapper">\n  <div class="article-item__aspect-ratio aspect-ratio {% if image_size != \'natural\' %}aspect-ratio--{{ image_size }} aspect-ratio--cover{% endif %}" style="padding-bottom: {{ 100.0 | divided_by: article.image.aspect_ratio }}%; --aspect-ratio: {{ article.image.aspect_ratio }}">\n    <img \n      class="image"  \n      loading="lazy" \n      sizes="{{ sizes_attribute }}"\n      {% render \'image-attributes\', image: article.image, sizes: \'600,700,800,1000,1200,1400,1600,1800,2000\' %}>\n  </div>\n</a>\n')),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"size-modifiers"},"Size Modifiers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Modifier"),(0,r.kt)("th",{parentName:"tr",align:null},"Padding"),(0,r.kt)("th",{parentName:"tr",align:null},"Ratio"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aspect-ratio--square")),(0,r.kt)("td",{parentName:"tr",align:null},"100%"),(0,r.kt)("td",{parentName:"tr",align:null},"1:1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aspect-ratio--short")),(0,r.kt)("td",{parentName:"tr",align:null},"75%"),(0,r.kt)("td",{parentName:"tr",align:null},"4:3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aspect-ratio--tall")),(0,r.kt)("td",{parentName:"tr",align:null},"133%"),(0,r.kt)("td",{parentName:"tr",align:null},"3:4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aspect-ratio--tallest")),(0,r.kt)("td",{parentName:"tr",align:null},"150%"),(0,r.kt)("td",{parentName:"tr",align:null},"2:3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aspect-ratio--wide")),(0,r.kt)("td",{parentName:"tr",align:null},"56.25%"),(0,r.kt)("td",{parentName:"tr",align:null},"16:9")))),(0,r.kt)("h3",{id:"other-modifiers"},"Other Modifiers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aspect-ratio--cover"),": Sets media to fill all available space")))}u.isMDXComponent=!0}}]);