"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[361],{2134:function(e,r,t){t.d(r,{Z:function(){return c}});t(2791);var n=t.p+"static/media/kisspng-pasta-spinach-dip.75540e9062e67b9cf779.png",a="Leaf_leaf_img__qpoO3",i=t(3329),c=function(){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)("img",{src:n,alt:"img"})})}},8130:function(e,r,t){t.d(r,{V:function(){return s}});var n=t(9439),a=t(2791),i=t(7689),c=t(3329),s=function(e){var r=e.recipeTitle,t=(0,a.useState)(""),s=(0,n.Z)(t,2),o=s[0],l=s[1],u=(0,i.TH)();(0,a.useEffect)((function(){var e=_(u.pathname);l(e)}),[u]);var _=function(e){if(e.includes("categories"))return"Category";switch(e){case"/favorite":return"Favorites";case"/add":return"Add recipe";case"/my":return"My recipes";case"/search":return"Search";case"/shopping-list":return"Shopping list";default:return"Page Title"}};return(0,c.jsx)(c.Fragment,{children:r?(0,c.jsx)("h1",{className:"recipeName",children:r}):(0,c.jsx)("div",{className:"page-wrapper",children:(0,c.jsxs)("div",{className:"mainTitle-container",children:[(0,c.jsx)("h1",{className:"mainTitle",children:o}),(0,c.jsx)("div",{className:"mainTitle-decorator1"}),(0,c.jsx)("div",{className:"mainTitle-decorator2"}),(0,c.jsx)("div",{className:"mainTitle-decorator3"})]})})})}},8821:function(e,r,t){t.d(r,{t:function(){return _}});var n=t(9439),a=t(8820),i="Pagination_active__q3h4d",c="Pagination_pagination__mVvOv",s="Pagination_pageDigit__jUTR2",o="Pagination_arrowBtn__p6tL9",l=t(2791),u=t(3329),_=function(e){for(var r=e.onChangePage,t=e.totalPages,_=e.currentpage,h=(0,l.useState)(_),d=(0,n.Z)(h,2),p=d[0],f=d[1],m=[],v=1;v<=t;v++)m.push(v);(0,l.useEffect)((function(){}),[p]);return(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("button",{className:o,disabled:1===_,onClick:function(){return r(_-1)},children:(0,u.jsx)(a.CF5,{})}),function(){var e=[];return t>8?(_<6&&(e=[1,2,3,4,5,6,"...",t]),_>=6&&(e=[1,"..."].concat([_-2,_-1],[_],[_+1,_+2],["...",t])),_>t-5&&(e=[1,"...",t-5,t-4,t-3,t-2,t-1,t])):e=m,e}().map((function(e,t){return(0,u.jsx)("p",{className:"".concat(s," ").concat(p===e?i:""),currentpage:_,onClick:function(e){r(e.target.innerText),function(e){f(Number(e.target.innerText))}(e)},children:e},t)})),(0,u.jsx)("button",{className:o,disabled:_===t,onClick:function(){return r(_+1)},children:(0,u.jsx)(a.Td4,{})})]})}},4487:function(e,r,t){t.d(r,{v:function(){return C}});var n,a,i=t(2791),c="RecipeCard_recipeEll__KT0Cb",s="RecipeCard_recipeOverlay__-FMJO",o="RecipeCard_recipeImg__cxGnz",l="RecipeCard_recipeTitle__u3yR1",u="RecipeCard_recipeTime__+1iB9",_="RecipeCard_recipeClock__uJh7r",h="RecipeCard_recipeText__2pAFU",d=["title","titleId"];function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function m(e,r){var t=e.title,c=e.titleId,s=f(e,d);return i.createElement("svg",p({width:48,height:48,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":c},s),t?i.createElement("title",{id:c},t):null,n||(n=i.createElement("g",{clipPath:"url(#clip0_0_429)"},i.createElement("path",{d:"M23.99 4C12.94 4 4 12.95 4 24C4 35.05 12.94 44 23.99 44C35.04 44 44 35.05 44 24C44 12.95 35.04 4 23.99 4ZM24 40C15.16 40 8 32.84 8 24C8 15.16 15.16 8 24 8C32.84 8 40 15.16 40 24C40 32.84 32.84 40 24 40Z"}),i.createElement("path",{d:"M25 14H22V26L32.49 32.3L34 29.84L25 24.5V14Z"}))),a||(a=i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_0_429"},i.createElement("rect",{width:48,height:48,fill:"white"})))))}var v=i.forwardRef(m),g=(t.p,t(1087)),x=t(3329),C=function(e){var r=e.recipe,t=r.title,n=r.preview,a=r._id,i=r.time,d=r.description;return(0,x.jsx)("li",{className:c,children:(0,x.jsxs)(g.OL,{to:"/recipe/".concat(a),children:[(0,x.jsx)("img",{className:o,src:n,alt:"recipe prewiew"}),(0,x.jsx)("p",{className:l,children:t}),(0,x.jsxs)("div",{className:s,children:[(0,x.jsxs)("p",{className:u,children:[(0,x.jsx)(v,{className:_}),i?"".concat(i," min"):"Time is not countable"]}),(0,x.jsx)("p",{className:h,children:d||"No description"})]})]})})}},4099:function(e,r,t){t.r(r),t.d(r,{default:function(){return F}});var n=t(9439),a=t(2791),i=t(7689),c=t(9434),s=t(5985),o=(t(5462),t(2254)),l=function(e){return e.search.loading},u=function(e){return e.search.error},_=function(e){return e.search.searchData},h=function(e){return e.search.totalPages},d=function(e){return e.search.selectedTypes},p=function(e){return e.search.fromFooter},f=t(7456),m=t(3329),v=function(e){var r=e.page,t=e.limit,l=(0,a.useState)(""),u=(0,n.Z)(l,2),_=u[0],h=u[1],p=(0,c.I0)(),v=(0,c.v9)(d),g={page:r,limit:t,wordQuery:_};(0,a.useEffect)((function(){""!==_&&("query"===v?p((0,f._B)(g)):"ingredients"===v&&p((0,f.sF)(g)))}),[r,t,_]);var x=(0,i.TH)(),C=function(){"query"===v?p((0,f._B)(g)):"ingredients"===v&&p((0,f.sF)(g))};(0,a.useEffect)((function(){var e=new URLSearchParams(x.search).get("query");h(e||"")}),[x.search]),(0,a.useEffect)((function(){""!==_.trim()&&C()}),[_]);return(0,m.jsxs)("form",{className:o.Z.searchBox,onSubmit:function(e){e.preventDefault(),""!==_.trim()?C():s.Am.warn("Enter your query")},children:[(0,m.jsx)(s.Ix,{}),(0,m.jsx)("input",{className:o.Z.searchInput,type:"text",placeholder:"Search recipes...",value:_,name:"searchInput",onChange:function(e){h(e.target.value)}}),(0,m.jsx)("button",{className:o.Z.searchBtn,type:"submit",children:"Search"})]})},g=t(1413),x=t(9278),C="SearchTypeSelector_cont_type_select__wYnRK",w="SearchTypeSelector_search_select__3irfA",b=t(1089),j=[{searchType:"title"},{searchType:"ingredients"}],y={singleValue:function(e){return(0,g.Z)((0,g.Z)({},e),{},{color:"var(--mainTextColor)"})},menu:function(e){return(0,g.Z)((0,g.Z)({},e),{},{background:"transparent"})},option:function(e,r){return(0,g.Z)((0,g.Z)({},e),{},{backgroundColor:r.isFocused?"#8BAA36":"white",color:r.isFocused?"white":"black"})},input:function(e){return(0,g.Z)((0,g.Z)({},e),{},{color:"#8BAA36"})},dropdownIndicator:function(e,r){return(0,g.Z)((0,g.Z)({},e),{},{border:"none",boxShadow:"none",color:"#8BAA36"})},control:function(e,r){return(0,g.Z)((0,g.Z)({},e),{},{height:34,width:143,background:"var(--greyToBlack)",borderRadius:6,borderColor:r.isFocused?"#8BAA36":"#CED4DA",boxShadow:r.isFocused?"0 0 0 2px #8BAA36":"none","&:hover":{borderColor:r.isFocused?"#8BAA36":"#CED4DA"}})}},B=function(){var e=(0,c.I0)(),r=(0,c.v9)(p),t=(0,a.useState)(""),i=(0,n.Z)(t,2),s=(i[0],i[1]);return(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("label",{htmlFor:"select",children:"Search by:"}),(0,m.jsx)(x.ZP,{className:w,name:"select",options:j,styles:y,getOptionLabel:function(e){return e.searchType},getOptionValue:function(e){return e.searchType},isSearchable:!1,onChange:function(r){s(r.searchType),e((0,b.Yk)(r.searchType))},defaultValue:r?j.find((function(e){return"ingredients"===e.searchType})):j.find((function(e){return"title"===e.searchType}))})]})},S=t(7139),Z=function(e){var r=e.value,t=e.onChange,n=e.page,a=e.limit;return(0,m.jsxs)("div",{className:S.Z.search_bar,children:[(0,m.jsx)(v,{page:n,limit:a,value:r,onChange:function(e){t(e)}}),(0,m.jsx)(B,{})]})},N=t(4487),T=t(266),k=t(9091),P=t(7601),E=function(e){var r=e.searchValue,t=(0,a.useState)([]),i=(0,n.Z)(t,2),s=(i[0],i[1]),o=(0,a.useState)(""),h=(0,n.Z)(o,2),d=h[0],p=h[1],f=(0,a.useState)(!0),v=(0,n.Z)(f,2),g=(v[0],v[1]),x=(0,c.v9)(l),C=(0,c.v9)(u),w=(0,c.v9)(_);return(0,a.useEffect)((function(){if(d!==r){if(!r)return s([]),void p("");g(!0);var e=setTimeout((function(){var e=w.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));s(e),p(r),g(!1)}),500);return function(){return clearTimeout(e)}}}),[r]),(0,m.jsxs)("div",{children:[x&&(0,m.jsx)(P.Z,{}),C&&(0,m.jsxs)("div",{className:S.Z.searchLookingWrapper,children:[(0,m.jsx)("img",{src:k,alt:"images"}),(0,m.jsx)("p",{children:"Try looking for something else..."})]}),w&&(0,m.jsx)("div",{style:{backgroundColor:"var(--whiteSearchToDark)"},className:T.Z.previewCategoriesBox,children:(0,m.jsx)("ul",{className:T.Z.previewCategoriesList,children:(0,m.jsx)("li",{className:T.Z.previewCategoriesListEll,children:(0,m.jsx)("ul",{className:T.Z.recipeListSearch,children:w.map((function(e){return(0,m.jsx)(N.v,{recipe:e},e._id)}))})})})})]})},L=t(8130),A=t(8821),O=t(2134),F=function(){var e=(0,c.v9)(h),r=(0,a.useState)(1),t=(0,n.Z)(r,2),s=t[0],o=t[1],l=(0,a.useState)(12),u=(0,n.Z)(l,2),_=u[0],d=u[1],p=(0,i.TH)(),f=(0,a.useState)(""),v=(0,n.Z)(f,2),g=v[0],x=v[1],C=(0,a.useState)(!1),w=(0,n.Z)(C,2),b=w[0],j=w[1],y=(0,a.useState)(""),B=(0,n.Z)(y,2),N=B[0],T=B[1],k=window.matchMedia("(max-width: 1440px)");(0,a.useEffect)((function(){var e=document.getElementById("ahcnor1");e&&e.scrollIntoView({block:"start",behavior:"smooth"}),d(k.matches?6:12);var r=function(){d(k.matches?6:12)};return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[k]);(0,a.useEffect)((function(){"footer"===p.state&&T("ingredients")}),[p.state]),(0,a.useEffect)((function(){b&&T(g)}),[b,g]);return(0,m.jsxs)(m.Fragment,{children:[" ",(0,m.jsxs)("div",{className:S.Z.mainContainer,children:[(0,m.jsx)(L.V,{}),(0,m.jsx)(Z,{page:s,limit:_,value:g,onChange:function(e){x(e.target.value)},onSearch:function(){j(!0)}}),(0,m.jsx)(E,{searchValue:N},N),1!==e&&e&&(0,m.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"0 auto"},children:(0,m.jsx)(A.t,{totalPages:e,currentpage:s,onChangePage:function(e){if("..."!==e){var r=Number(e),t=document.getElementById("ahcnor1");t&&t.scrollIntoView({block:"start",behavior:"smooth"}),o(r)}}})})]}),(0,m.jsx)(O.Z,{})]})}},5462:function(){},266:function(e,r){r.Z={"dark-mode":"PreviewCategories_dark-mode__UwhIV","remove-btnX":"PreviewCategories_remove-btnX__bXUq5","remove-btnX--icon":"PreviewCategories_remove-btnX--icon__EtLZR","base-link-leaf":"PreviewCategories_base-link-leaf__igZKL",trashBtn:"PreviewCategories_trashBtn__YoLeA","trashBtn--icon":"PreviewCategories_trashBtn--icon__0MoUl",flexWrapper:"PreviewCategories_flexWrapper__mOsfd",active:"PreviewCategories_active__-pr0Z",container:"PreviewCategories_container__Ono7y",previewCategoriesBox:"PreviewCategories_previewCategoriesBox__xYe+f",previewCategoriesList:"PreviewCategories_previewCategoriesList__YaEsK",previewCategoriesListEll:"PreviewCategories_previewCategoriesListEll__tpDjs",categoriesName:"PreviewCategories_categoriesName__njlB1",recipeListSearch:"PreviewCategories_recipeListSearch__xEyrW",recipeList:"PreviewCategories_recipeList__u1L4M",seeAllBtn:"PreviewCategories_seeAllBtn__mi3cr",otherCategoriesBtn:"PreviewCategories_otherCategoriesBtn__wJTpE"}},2254:function(e,r){r.Z={"dark-mode":"Search_dark-mode__aDdyb","remove-btnX":"Search_remove-btnX__7dWJK","remove-btnX--icon":"Search_remove-btnX--icon__Ty-Fz","base-link-leaf":"Search_base-link-leaf__Ptj2B",trashBtn:"Search_trashBtn__BJ3cR","trashBtn--icon":"Search_trashBtn--icon__DkaJy",flexWrapper:"Search_flexWrapper__FvK7C",active:"Search_active__mvXU1",container:"Search_container__FpDfx",newBtn:"Search_newBtn__M8eOy",searchBox:"Search_searchBox__WErQz",searchInput:"Search_searchInput__JV0cW",searchBtn:"Search_searchBtn__ycykD"}},7139:function(e,r){r.Z={"dark-mode":"SearchBar_dark-mode__Axps8","remove-btnX":"SearchBar_remove-btnX__DGM1M","remove-btnX--icon":"SearchBar_remove-btnX--icon__MNy30","base-link-leaf":"SearchBar_base-link-leaf__TgZJi",trashBtn:"SearchBar_trashBtn__+cdKQ","trashBtn--icon":"SearchBar_trashBtn--icon__43BC6",flexWrapper:"SearchBar_flexWrapper__9jFuf",active:"SearchBar_active__NJFcj",container:"SearchBar_container__hBKHC",mainContainer:"SearchBar_mainContainer__JdNTP",search_bar:"SearchBar_search_bar__yiAEi",searchLookingWrapper:"SearchBar_searchLookingWrapper__r+Xwy"}},9091:function(e,r,t){e.exports=t.p+"static/media/asdd.195c8cc165ac8d4aba1f.png"}}]);
//# sourceMappingURL=361.6f46695a.chunk.js.map