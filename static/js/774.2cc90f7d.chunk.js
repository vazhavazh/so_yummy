"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[774],{2609:function(e,r,a){a.d(r,{z:function(){return n}});var i=a(1087),t=a(3329),n=function(e){var r=e.text,a=e.to,n=e.className;return(0,t.jsx)(i.rU,{className:n,to:a,children:r})}},4351:function(e,r,a){a.d(r,{v:function(){return u}});a(2791);var i="RecipeCard_recipeEll__KT0Cb",t="RecipeCard_recipeOverlay__-FMJO",n="RecipeCard_recipeImg__cxGnz",s="RecipeCard_recipeTitle__u3yR1",c="RecipeCard_recipeTime__+1iB9",o="RecipeCard_recipeText__2pAFU",l=a(3329),u=function(e){var r=e.recipe,a=r.title,u=r.preview,_=r._id,h=r.time,p=r.description;return(0,l.jsx)("li",{className:i,children:(0,l.jsxs)("a",{href:"/recipe/".concat(_.$oid),children:[(0,l.jsx)("img",{className:n,src:u,alt:"recipe prewiew"}),(0,l.jsx)("p",{className:s,children:a}),(0,l.jsxs)("div",{className:t,children:[(0,l.jsx)("p",{className:c,children:"\ud83d\udd54 ".concat(h," min")}),(0,l.jsx)("p",{className:o,children:p})]})]})})}},3548:function(e,r,a){a.r(r),a.d(r,{default:function(){return N}});var i=a(9439),t=a(2791),n=a(2609),s=a(5985),c=(a(5462),a(2254)),o=a(3329),l=function(e){var r=e.value,a=e.onChange,i=e.onSubmit;return(0,o.jsxs)("form",{className:c.Z.searchBox,onSubmit:i,children:[(0,o.jsx)(s.Ix,{}),(0,o.jsx)("input",{className:c.Z.searchInput,type:"text",placeholder:"Search recipes...",value:r,onChange:function(e){a(e)}}),(0,o.jsx)(n.z,{className:c.Z.searchBtn,text:"Search",type:"submit"})]})},u=a(1413),_=a(9278),h="SearchTypeSelector_cont_type_select__wYnRK",p="SearchTypeSelector_search_select__3irfA",d=[{searchType:"query"},{searchType:"ingredients"}],g={menu:function(e){return(0,u.Z)((0,u.Z)({},e),{},{background:"transparent"})},option:function(e,r){return(0,u.Z)((0,u.Z)({},e),{},{backgroundColor:r.isFocused?"#D9D9D9":"white",color:r.isFocused?"white":"black"})},input:function(e){return(0,u.Z)((0,u.Z)({},e),{},{color:"#8BAA36"})},dropdownIndicator:function(e,r){return(0,u.Z)((0,u.Z)({},e),{},{border:"none",boxShadow:"none",color:"#8BAA36"})},control:function(e,r){return(0,u.Z)((0,u.Z)({},e),{},{height:34,width:143,background:"#D9D9D9",borderRadius:6,borderColor:r.isFocused?"#8BAA36":"#CED4DA",boxShadow:r.isFocused?"0 0 0 2px #8BAA36":"none","&:hover":{borderColor:r.isFocused?"#8BAA36":"#CED4DA"},"@include tablet":{width:175,height:41},"@include desktop":{width:192,height:49}})}},m=function(){var e=(0,t.useState)("query"),r=(0,i.Z)(e,1)[0];return(0,o.jsxs)("div",{className:h,children:[(0,o.jsx)("label",{htmlFor:"select",children:"Search by:"}),(0,o.jsx)(_.ZP,{className:p,name:"select",options:d,styles:g,getOptionLabel:function(e){return e.searchType},getOptionValue:function(e){return e.searchType},isSearchable:!1,onChange:function(e){r(e.searchType)}})]})},v={search_bar:"SearchBar_search_bar__yiAEi",searchLookingWrapper:"SearchBar_searchLookingWrapper__r+Xwy",pagination:"SearchBar_pagination__doavI",activePage:"SearchBar_activePage__3GIfh"},f=function(e){var r=e.value,a=e.onChange,n=e.onSearch,c=(0,t.useState)(""),u=(0,i.Z)(c,2),_=u[0],h=u[1];return(0,t.useEffect)((function(){h("")}),[r]),(0,o.jsxs)("div",{className:v.search_bar,children:[(0,o.jsx)(l,{value:r,onChange:function(e){a(e)},onSubmit:function(e){e.preventDefault(),""!==r.trim()?(_!==r&&n(),h(r)):s.Am.warn("Enter your query")}}),(0,o.jsx)(m,{})]})},x=a(2464),C=a(4351),b=a(266),w=a.p+"static/media/kisspng-vegetable.b8ddd1d1a02f272ef517.webp",j=a(1820),S=a(6048),y=a.n(S),Z=a(8185),B=a(4805),k=function(e){var r=e.searchValue,a=(0,t.useState)([]),n=(0,i.Z)(a,2),c=n[0],l=n[1],u=(0,t.useState)(""),_=(0,i.Z)(u,2),h=_[0],p=_[1],d=(0,t.useState)(!0),g=(0,i.Z)(d,2),m=g[0],f=g[1],S=(0,t.useState)(0),k=(0,i.Z)(S,2),N=k[0],L=k[1],P=(0,B.useMediaQuery)({query:"(max-width: 1024px)"});(0,t.useEffect)((function(){if(h!==r){if(!r)return l([]),void p("");f(!0);var e=setTimeout((function(){var e=x.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));l(e),p(r),f(!1)}),500);return function(){return clearTimeout(e)}}}),[r]);var A=P?6:c.length,D=N*A,T=c.slice(D,D+A),E=Math.ceil(c.length/A);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Ix,{}),m?(0,o.jsx)(j.Z,{}):T.length>0?(0,o.jsxs)("div",{className:b.Z.previewCategoriesBox,children:[(0,o.jsx)("ul",{className:b.Z.previewCategoriesList,children:(0,o.jsx)("li",{className:b.Z.previewCategoriesListEll,children:(0,o.jsx)("ul",{className:b.Z.recipeListSearch,children:T.map((function(e){return(0,o.jsx)(C.v,{recipe:e},e._id.$oid)}))})})}),c.length>A&&P?(0,o.jsx)(y(),{className:v.pagination,previousLabel:(0,o.jsx)(Z.pjk,{}),nextLabel:(0,o.jsx)(Z.fmn,{}),breakLabel:"...",breakClassName:"break-me",pageCount:E,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var r=e.selected;L(r)},containerClassName:b.Z.pagination,subContainerClassName:"".concat(b.Z.pages," ").concat(b.Z.pagination),activeClassName:v.activePage}):null]}):(0,o.jsxs)("div",{className:v.searchLookingWrapper,children:[(0,o.jsx)("img",{src:w,alt:"images"}),(0,o.jsx)("p",{children:"Try looking for something else..."})]})]})},N=function(){var e=(0,t.useState)(""),r=(0,i.Z)(e,2),a=r[0],n=r[1],s=(0,t.useState)(!1),c=(0,i.Z)(s,2),l=c[0],u=c[1],_=(0,t.useState)(""),h=(0,i.Z)(_,2),p=h[0],d=h[1];return(0,t.useEffect)((function(){l&&d(a)}),[l,a]),(0,o.jsxs)("div",{className:v.search_wrapper,children:[(0,o.jsx)("h1",{children:"Search"}),(0,o.jsx)(f,{value:a,onChange:function(e){n(e.target.value)},onSearch:function(){u(!0)}}),l&&""!==p?(0,o.jsx)(k,{searchValue:p},p):(0,o.jsxs)("div",{className:v.searchLookingWrapper,children:[(0,o.jsx)("img",{src:w,alt:"images"}),(0,o.jsx)("p",{children:"Try looking for something else..."})]})]})}},266:function(e,r){r.Z={"dark-mode":"PreviewCategories_dark-mode__UwhIV","remove-btnX":"PreviewCategories_remove-btnX__bXUq5","remove-btnX--icon":"PreviewCategories_remove-btnX--icon__EtLZR","base-link-leaf":"PreviewCategories_base-link-leaf__igZKL",trashBtn:"PreviewCategories_trashBtn__YoLeA","trashBtn--icon":"PreviewCategories_trashBtn--icon__0MoUl",container:"PreviewCategories_container__Ono7y",previewCategoriesBox:"PreviewCategories_previewCategoriesBox__xYe+f",previewCategoriesList:"PreviewCategories_previewCategoriesList__YaEsK",previewCategoriesListEll:"PreviewCategories_previewCategoriesListEll__tpDjs",categoriesName:"PreviewCategories_categoriesName__njlB1",recipeListSearch:"PreviewCategories_recipeListSearch__xEyrW",recipeList:"PreviewCategories_recipeList__u1L4M",seeAllBtn:"PreviewCategories_seeAllBtn__mi3cr",otherCategoriesBtn:"PreviewCategories_otherCategoriesBtn__wJTpE"}},2254:function(e,r){r.Z={"dark-mode":"Search_dark-mode__aDdyb","remove-btnX":"Search_remove-btnX__7dWJK","remove-btnX--icon":"Search_remove-btnX--icon__Ty-Fz","base-link-leaf":"Search_base-link-leaf__Ptj2B",trashBtn:"Search_trashBtn__BJ3cR","trashBtn--icon":"Search_trashBtn--icon__DkaJy",container:"Search_container__FpDfx",searchBox:"Search_searchBox__WErQz",searchInput:"Search_searchInput__JV0cW",searchBtn:"Search_searchBtn__ycykD"}}}]);
//# sourceMappingURL=774.2cc90f7d.chunk.js.map