"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[765],{5734:function(e,r,a){a.d(r,{r:function(){return l}});var n,t=a(2791),i=["title","titleId"];function c(){return c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function s(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function o(e,r){var a=e.title,o=e.titleId,l=s(e,i);return t.createElement("svg",c({id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 110.61 122.88",ref:r,"aria-labelledby":o},l),void 0===a?t.createElement("title",{id:o},"trash"):a?t.createElement("title",{id:o},a):null,n||(n=t.createElement("path",{d:"M39.27,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Zm63.6-19.86L98,103a22.29,22.29,0,0,1-6.33,14.1,19.41,19.41,0,0,1-13.88,5.78h-45a19.4,19.4,0,0,1-13.86-5.78l0,0A22.31,22.31,0,0,1,12.59,103L7.74,38.78H0V25c0-3.32,1.63-4.58,4.84-4.58H27.58V10.79A10.82,10.82,0,0,1,38.37,0H72.24A10.82,10.82,0,0,1,83,10.79v9.62h23.35a6.19,6.19,0,0,1,1,.06A3.86,3.86,0,0,1,110.59,24c0,.2,0,.38,0,.57V38.78Zm-9.5.17H17.24L22,102.3a12.82,12.82,0,0,0,3.57,8.1l0,0a10,10,0,0,0,7.19,3h45a10.06,10.06,0,0,0,7.19-3,12.8,12.8,0,0,0,3.59-8.1L93.37,39ZM71,20.41V12.05H39.64v8.36ZM61.87,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Z"})))}var l=t.forwardRef(o);a.p},2134:function(e,r,a){a.d(r,{Z:function(){return c}});a(2791);var n=a.p+"static/media/kisspng-pasta-spinach-dip.75540e9062e67b9cf779.png",t="Leaf_leaf_img__qpoO3",i=a(3329),c=function(){return(0,i.jsx)("div",{className:t,children:(0,i.jsx)("img",{src:n,alt:"img"})})}},8130:function(e,r,a){a.d(r,{V:function(){return s}});var n=a(9439),t=a(2791),i=a(7689),c=a(3329),s=function(e){var r=e.recipeTitle,a=(0,t.useState)(""),s=(0,n.Z)(a,2),o=s[0],l=s[1],u=(0,i.TH)();(0,t.useEffect)((function(){var e=d(u.pathname);l(e)}),[u]);var d=function(e){if(e.includes("categories"))return"Category";switch(e){case"/favorite":return"Favorites";case"/add":return"Add recipe";case"/my":return"My recipes";case"/search":return"Search";case"/shopping-list":return"Shopping list";default:return"Page Title"}};return(0,c.jsx)(c.Fragment,{children:r?(0,c.jsx)("h1",{className:"recipeName",children:r}):(0,c.jsx)("div",{className:"page-wrapper",children:(0,c.jsxs)("div",{className:"mainTitle-container",children:[(0,c.jsx)("h1",{className:"mainTitle",children:o}),(0,c.jsx)("div",{className:"mainTitle-decorator1"}),(0,c.jsx)("div",{className:"mainTitle-decorator2"}),(0,c.jsx)("div",{className:"mainTitle-decorator3"})]})})})}},8821:function(e,r,a){a.d(r,{t:function(){return d}});var n=a(9439),t=a(8820),i="Pagination_active__q3h4d",c="Pagination_pagination__mVvOv",s="Pagination_pageDigit__jUTR2",o="Pagination_arrowBtn__p6tL9",l=a(2791),u=a(3329),d=function(e){for(var r=e.onChangePage,a=e.totalPages,d=e.currentpage,m=(0,l.useState)(d),f=(0,n.Z)(m,2),p=f[0],h=f[1],v=[],_=1;_<=a;_++)v.push(_);(0,l.useEffect)((function(){}),[p]);return(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("button",{className:o,disabled:1===d,onClick:function(){return r(d-1)},children:(0,u.jsx)(t.CF5,{})}),function(){var e=[];return a>8?(d<6&&(e=[1,2,3,4,5,6,"...",a]),d>=6&&(e=[1,"..."].concat([d-2,d-1],[d],[d+1,d+2],["...",a])),d>a-5&&(e=[1,"...",a-5,a-4,a-3,a-2,a-1,a])):e=v,e}().map((function(e,a){return(0,u.jsx)("p",{className:"".concat(s," ").concat(p===e?i:""),currentpage:d,onClick:function(e){r(e.target.innerText),function(e){h(Number(e.target.innerText))}(e)},children:e},a)})),(0,u.jsx)("button",{className:o,disabled:d===a,onClick:function(){return r(d+1)},children:(0,u.jsx)(t.Td4,{})})]})}},1796:function(e,r,a){a.r(r),a.d(r,{default:function(){return w}});var n=a(2791),t=a(5861),i=a(9439),c=a(4687),s=a.n(c),o=a(1087),l=a(5734),u=a(9434),d=function(e){return e.myOwnRecipes.myOwnRecipes},m=function(e){return e.myOwnRecipes.totalPages},f=function(e){return e.myOwnRecipes.isLoading},p=a(4721),h=a(7601),v=a(1686),_=a(9091),g=a(7139),x=a(8821),j=a(8130),b=a(3329),y=function(){var e=(0,n.useState)(1),r=(0,i.Z)(e,2),a=r[0],c=r[1],y=(0,u.I0)(),N=(0,u.v9)(m),w=(0,u.v9)(d),k=(0,u.v9)(f),B={page:a,limit:4};(0,n.useEffect)((function(){y((0,p.F3)(B))}),[a]);var S=function(){var e=(0,t.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y((0,p.jn)(r));case 3:1===w.length&&a>2&&c(a-1),y((0,p.F3)(B)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v.Notify.failure("ooops, smth went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();return k?(0,b.jsx)(h.Z,{}):w&&Array.isArray(w)&&0!==w.length?(0,b.jsxs)("div",{className:"recepiesConainer",children:[(0,b.jsx)(j.V,{}),(0,b.jsxs)("div",{children:[(0,b.jsx)("ul",{className:"favorites-list",children:w.map((function(e){return(0,b.jsxs)("li",{className:"favorite-item",children:[(0,b.jsx)("div",{className:"favorite-img-wrapper",children:(0,b.jsx)("img",{src:e.preview,alt:"food",className:"favorite-img again"})}),(0,b.jsx)("button",{className:"favorite-delete-btn trashBtn mod",type:"button",onClick:function(){return S(e._id)},children:(0,b.jsx)(l.r,{className:"trashBtn--icon mod--icon"})}),(0,b.jsxs)("div",{className:"favorite-description-wrapper",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"favorite-title",children:e.title}),(0,b.jsx)("p",{className:"favorite-description",children:e.description})]}),(0,b.jsxs)("span",{className:"favorite-time",children:[e.time," min"]})]}),(0,b.jsx)(o.rU,{className:"base-link-leaf favorite-link base-link-leaf--mod",to:"/recipe_/".concat(e._id),children:(0,b.jsx)("span",{className:"base-link-leaf--mod--span",children:"See recipe"})})]},e._id)}))}),1!==N&&N&&(0,b.jsx)(x.t,{totalPages:N,currentpage:a,onChangePage:function(e){if("..."!==e){var r=Number(e),a=document.getElementById("ahcnor1");a&&a.scrollIntoView({block:"start",behavior:"smooth"}),c(r)}}})]})]}):(0,b.jsxs)("div",{className:"recepiesConainer",children:[(0,b.jsx)(j.V,{}),(0,b.jsxs)("div",{className:g.Z.searchLookingWrapper,children:[(0,b.jsx)("img",{src:_,alt:"images"}),(0,b.jsx)("p",{className:"emptyName",children:"You didn't create your own recipes..."})]})]})},N=a(2134),w=function(){return(0,n.useEffect)((function(){var e=document.getElementById("ahcnor1");e&&e.scrollIntoView({block:"start",behavior:"smooth"})}),[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y,{}),(0,b.jsx)(N.Z,{})]})}},7139:function(e,r){r.Z={"dark-mode":"SearchBar_dark-mode__Axps8","remove-btnX":"SearchBar_remove-btnX__DGM1M","remove-btnX--icon":"SearchBar_remove-btnX--icon__MNy30","base-link-leaf":"SearchBar_base-link-leaf__TgZJi",trashBtn:"SearchBar_trashBtn__+cdKQ","trashBtn--icon":"SearchBar_trashBtn--icon__43BC6",flexWrapper:"SearchBar_flexWrapper__9jFuf",active:"SearchBar_active__NJFcj",container:"SearchBar_container__hBKHC",mainContainer:"SearchBar_mainContainer__JdNTP",search_bar:"SearchBar_search_bar__yiAEi",searchLookingWrapper:"SearchBar_searchLookingWrapper__r+Xwy"}},9091:function(e,r,a){e.exports=a.p+"static/media/asdd.195c8cc165ac8d4aba1f.png"}}]);
//# sourceMappingURL=765.78df9e96.chunk.js.map