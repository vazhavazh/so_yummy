"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[765],{5734:function(e,a,r){r.d(a,{r:function(){return l}});var n,t=r(2791),i=["title","titleId"];function c(){return c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function o(e,a){var r=e.title,o=e.titleId,l=s(e,i);return t.createElement("svg",c({id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 110.61 122.88",ref:a,"aria-labelledby":o},l),void 0===r?t.createElement("title",{id:o},"trash"):r?t.createElement("title",{id:o},r):null,n||(n=t.createElement("path",{d:"M39.27,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Zm63.6-19.86L98,103a22.29,22.29,0,0,1-6.33,14.1,19.41,19.41,0,0,1-13.88,5.78h-45a19.4,19.4,0,0,1-13.86-5.78l0,0A22.31,22.31,0,0,1,12.59,103L7.74,38.78H0V25c0-3.32,1.63-4.58,4.84-4.58H27.58V10.79A10.82,10.82,0,0,1,38.37,0H72.24A10.82,10.82,0,0,1,83,10.79v9.62h23.35a6.19,6.19,0,0,1,1,.06A3.86,3.86,0,0,1,110.59,24c0,.2,0,.38,0,.57V38.78Zm-9.5.17H17.24L22,102.3a12.82,12.82,0,0,0,3.57,8.1l0,0a10,10,0,0,0,7.19,3h45a10.06,10.06,0,0,0,7.19-3,12.8,12.8,0,0,0,3.59-8.1L93.37,39ZM71,20.41V12.05H39.64v8.36ZM61.87,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Z"})))}var l=t.forwardRef(o);r.p},2134:function(e,a,r){r.d(a,{Z:function(){return c}});r(2791);var n=r.p+"static/media/kisspng-pasta-spinach-dip.75540e9062e67b9cf779.png",t="Leaf_leaf_img__qpoO3",i=r(3329),c=function(){return(0,i.jsx)("div",{className:t,children:(0,i.jsx)("img",{src:n,alt:"img"})})}},8130:function(e,a,r){r.d(a,{V:function(){return s}});var n=r(9439),t=r(2791),i=r(7689),c=r(3329),s=function(e){var a=e.recipeTitle,r=(0,t.useState)(""),s=(0,n.Z)(r,2),o=s[0],l=s[1],u=(0,i.TH)();(0,t.useEffect)((function(){var e=d(u.pathname);l(e)}),[u]);var d=function(e){if(e.includes("categories"))return"Category";switch(e){case"/favorite":return"Favorites";case"/add":return"Add recipe";case"/my":return"My recipes";case"/search":return"Search";case"/shopping-list":return"Shopping list";default:return"Page Title"}};return(0,c.jsx)(c.Fragment,{children:a?(0,c.jsx)("h1",{className:"recipeName",children:a}):(0,c.jsx)("div",{className:"page-wrapper",children:(0,c.jsxs)("div",{className:"mainTitle-container",children:[(0,c.jsx)("h1",{className:"mainTitle",children:o}),(0,c.jsx)("div",{className:"mainTitle-decorator1"}),(0,c.jsx)("div",{className:"mainTitle-decorator2"}),(0,c.jsx)("div",{className:"mainTitle-decorator3"})]})})})}},8821:function(e,a,r){r.d(a,{t:function(){return d}});var n=r(9439),t=r(8820),i="Pagination_active__q3h4d",c="Pagination_pagination__mVvOv",s="Pagination_pageDigit__jUTR2",o="Pagination_arrowBtn__p6tL9",l=r(2791),u=r(3329),d=function(e){for(var a=e.onChangePage,r=e.totalPages,d=e.currentpage,f=(0,l.useState)(d),m=(0,n.Z)(f,2),p=m[0],h=m[1],v=[],g=1;g<=r;g++)v.push(g);(0,l.useEffect)((function(){}),[p]);return(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("button",{className:o,disabled:1===d,onClick:function(){return a(d-1)},children:(0,u.jsx)(t.CF5,{})}),function(){var e=[];return r>8?(d<6&&(e=[1,2,3,4,5,6,"...",r]),d>=6&&(e=[1,"..."].concat([d-2,d-1],[d],[d+1,d+2],["...",r])),d>r-5&&(e=[1,"...",r-5,r-4,r-3,r-2,r-1,r])):e=v,e}().map((function(e,r){return(0,u.jsx)("p",{className:"".concat(s," ").concat(p===e?i:""),currentpage:d,onClick:function(e){a(e.target.innerText),function(e){h(Number(e.target.innerText))}(e)},children:e},r)})),(0,u.jsx)("button",{className:o,disabled:d===r,onClick:function(){return a(d+1)},children:(0,u.jsx)(t.Td4,{})})]})}},1796:function(e,a,r){r.r(a),r.d(a,{default:function(){return N}});var n=r(2791),t=r(5861),i=r(9439),c=r(4687),s=r.n(c),o=r(1087),l=r(5734),u=r(9434),d=function(e){return e.myOwnRecipes.myOwnRecipes},f=function(e){return e.myOwnRecipes.totalPages},m=function(e){return e.myOwnRecipes.isLoading},p=r(4721),h=r(7601),v=r(9091),g=r(7139),_=r(8821),x=r(3329),j=function(){var e=(0,n.useState)(1),a=(0,i.Z)(e,2),r=a[0],c=a[1],j=(0,u.I0)(),b=(0,u.v9)(f),y=(0,u.v9)(d),N=(0,u.v9)(m),w={page:r,limit:4};(0,n.useEffect)((function(){j((0,p.F3)(w))}),[r]);var k=function(){var e=(0,t.Z)(s().mark((function e(a){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j((0,p.jn)(a));case 3:1===y.length&&r>2&&c(r-1),j((0,p.F3)(w)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return N?(0,x.jsx)(h.Z,{}):y&&Array.isArray(y)&&0!==y.length?(0,x.jsx)("div",{className:"flexWrapper",children:(0,x.jsxs)("div",{className:"favorites-container",children:[(0,x.jsx)("ul",{className:"favorites-list",children:y.map((function(e){return(0,x.jsxs)("li",{className:"favorite-item",children:[(0,x.jsx)("div",{className:"favorite-img-wrapper",children:(0,x.jsx)("img",{src:e.preview,alt:"food",className:"favorite-img again"})}),(0,x.jsx)("button",{className:"favorite-delete-btn trashBtn mod",type:"button",onClick:function(){return k(e._id)},children:(0,x.jsx)(l.r,{className:"trashBtn--icon mod--icon"})}),(0,x.jsxs)("div",{className:"favorite-description-wrapper",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{className:"favorite-title",children:e.title}),(0,x.jsx)("p",{className:"favorite-description",children:e.description})]}),(0,x.jsxs)("span",{className:"favorite-time",children:[e.time," min"]})]}),(0,x.jsx)(o.rU,{className:"base-link-leaf favorite-link base-link-leaf--mod",to:"/recipe_/".concat(e._id),children:(0,x.jsx)("span",{className:"base-link-leaf--mod--span",children:"See recipe"})})]},e._id)}))}),1!==b&&b&&(0,x.jsx)(_.t,{totalPages:b,currentpage:r,onChangePage:function(e){if("..."!==e){var a=Number(e),r=document.getElementById("ahcnor1");r&&r.scrollIntoView({block:"start",behavior:"smooth"}),c(a)}}})]})}):(0,x.jsxs)("div",{className:g.Z.searchLookingWrapper,children:[(0,x.jsx)("img",{src:v,alt:"images"}),(0,x.jsx)("p",{className:"emptyName",children:"You didn't create your own recipes..."})]})},b=r(8130),y=r(2134),N=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(b.V,{}),(0,x.jsx)(j,{}),(0,x.jsx)(y.Z,{})]})}},7139:function(e,a){a.Z={"dark-mode":"SearchBar_dark-mode__Axps8","remove-btnX":"SearchBar_remove-btnX__DGM1M","remove-btnX--icon":"SearchBar_remove-btnX--icon__MNy30","base-link-leaf":"SearchBar_base-link-leaf__TgZJi",trashBtn:"SearchBar_trashBtn__+cdKQ","trashBtn--icon":"SearchBar_trashBtn--icon__43BC6",flexWrapper:"SearchBar_flexWrapper__9jFuf",active:"SearchBar_active__NJFcj",container:"SearchBar_container__hBKHC",search_bar:"SearchBar_search_bar__yiAEi",searchLookingWrapper:"SearchBar_searchLookingWrapper__r+Xwy"}},9091:function(e,a,r){e.exports=r.p+"static/media/asdd.195c8cc165ac8d4aba1f.png"}}]);
//# sourceMappingURL=765.5ad48169.chunk.js.map