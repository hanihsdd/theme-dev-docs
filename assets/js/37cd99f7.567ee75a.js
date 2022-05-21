"use strict";(self.webpackChunktheme_dev_docs=self.webpackChunktheme_dev_docs||[]).push([[2521],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4449:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={},l="Pagination",s={unversionedId:"components/pagination",id:"components/pagination",title:"Pagination",description:"Pagination component with AJAX functionality if applicable.",source:"@site/docs/components/pagination.md",sourceDirName:"components",slug:"/components/pagination",permalink:"/theme-dev-docs/docs/components/pagination",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/pagination.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Openable Overlay",permalink:"/theme-dev-docs/docs/components/openable-overlay"},next:{title:"Popovers",permalink:"/theme-dev-docs/docs/components/popovers"}},c={},u=[{value:"How to use",id:"how-to-use",level:2},{value:"Rendering pagination",id:"rendering-pagination",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Examples",id:"examples",level:2},{value:"JavaScript",id:"javascript",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"Pagination component with AJAX functionality if applicable."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Custom Element")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"HTML: ",(0,i.kt)("inlineCode",{parentName:"li"},"<page-pagination>"))))),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rendering-pagination"},"Rendering pagination"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{%- render 'pagination' -%}")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Options"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ajax")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds AJAX functionality. Used for collection and search pages.")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'{%- if paginate.pages > 1 -%}\n  <page-pagination {% if use_ajax %}ajax{% endif %} class="pagination">\n    <nav class="pagination__nav">\n      {%- if paginate.previous -%}\n        <a class="pagination__nav-item" rel="prev" aria-label="{{ \'general.pagination.previous_page\' | t }}" data-page="{{ paginate.current_page | minus: 1 }}" href="{{ paginate.previous.url }}{{ hash }}">\n          {%- render \'icon\' with \'nav-arrow-left\' -%}\n        </a>\n      {%- endif -%}\n\n      {%- for part in paginate.parts -%}\n        {%- if part.is_link -%}\n          <a href="{{ part.url }}{{ hash }}" data-page="{{ part.title }}" class="pagination__nav-item" aria-label="{{ \'general.pagination.go_to_page\' | t: page: part.title }}">{{ part.title }}</a>\n        {%- else -%}\n          <span class="pagination__nav-item" {% if part.title == paginate.current_page %}aria-current="page" {% endif %}>{{ part.title }}</span>\n        {%- endif -%}\n      {%- endfor -%}\n\n      {%- if paginate.next -%}\n        <a class="pagination__nav-item" rel="next" aria-label="{{ \'general.pagination.next_page\' | t }}" data-page="{{ paginate.current_page | plus: 1 }}" href="{{ paginate.next.url }}{{ hash }}">\n          {%- render \'icon\' with \'nav-arrow-right\' -%}\n        </a>\n      {%- endif -%}\n    </nav>\n  </page-pagination>\n{%- endif -%}\n')),(0,i.kt)("h2",{id:"javascript"},"JavaScript"),(0,i.kt)("p",null,"If the element has an ",(0,i.kt)("inlineCode",{parentName:"p"},"ajax")," attribute, it will attach an event listener which stores the target page URL and triggers a ",(0,i.kt)("inlineCode",{parentName:"p"},"pagination:page-changed")," event. That event is listened to by respective JS components such as the collection and search page."))}m.isMDXComponent=!0}}]);