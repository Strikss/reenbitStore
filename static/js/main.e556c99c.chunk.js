(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[0],{11:function(e,t,c){e.exports={container:"Product_container__Ed5hF",imgBx:"Product_imgBx__2mWlA",productImage:"Product_productImage__2bT4i",content:"Product_content__2sO2f",leftSide:"Product_leftSide__1wyzW",rightSide:"Product_rightSide__3WGEW",leftTopPart:"Product_leftTopPart__-UyuY",star:"Product_star__1ZYdP",title:"Product_title__OlC58",description:"Product_description__15F8t",leftBottomPart:"Product_leftBottomPart__3tU1-",textTitle:"Product_textTitle__zevl_",supply:"Product_supply__16xsd",discountPrice:"Product_discountPrice__3ao7n",fullPrice:"Product_fullPrice__CwwhQ",button:"Product_button__2GMSN",wishList:"Product_wishList__3o-Fo",transfer:"Product_transfer__2wQRm",shipping:"Product_shipping__3o-AT",charactContainer:"Product_charactContainer__HVNoX"}},23:function(e,t,c){e.exports={mainWrapper:"Header_mainWrapper__2RzmT",right:"Header_right__CK_dd",item:"Header_item__1dgwQ",left:"Header_left__JRIOx"}},24:function(e,t,c){e.exports={menuWrapper:"Menu_menuWrapper__1htix",item:"Menu_item__3kezD"}},26:function(e,t,c){e.exports={searchBarWrapper:"SearchEngine_searchBarWrapper__FQlEK",searchLoop:"SearchEngine_searchLoop__34cl_",formGroup:"SearchEngine_formGroup__3Fd_X",dropDown:"SearchEngine_dropDown__3foWx",defaultOption:"SearchEngine_defaultOption__15Mz3",dropDownList:"SearchEngine_dropDownList__5E3ip",search:"SearchEngine_search__3kmk1",searchInput:"SearchEngine_searchInput__VuusE",menuWrapper:"SearchEngine_menuWrapper__1AuI0"}},28:function(e,t,c){e.exports={container:"FilterByStars_container__1p_Cl",oneBox:"FilterByStars_oneBox__YuLXH",title:"FilterByStars_title__3GiLx",star:"FilterByStars_star__1i15v",checkbox:"FilterByStars_checkbox__c5_ej"}},35:function(e,t,c){e.exports={itemContainer:"CategoriesFilter_itemContainer___Ag1F",item:"CategoriesFilter_item__cppcr",title:"CategoriesFilter_title__Nguez",countCircle:"CategoriesFilter_countCircle__1-Z2O"}},36:function(e,t,c){e.exports={contentContainer:"Content_contentContainer__6r8q4",titleContainer:"Content_titleContainer__12flb",title:"Content_title__25KGW",totalCount:"Content_totalCount__2oiIC",products:"Content_products__3fwbe"}},41:function(e,t,c){e.exports={container:"SearchBar_container__33QhV",checkout:"SearchBar_checkout__2dlDf",man:"SearchBar_man__3Zlkd"}},42:function(e,t,c){e.exports={container:"SortBy_container__uMJyH",dropDown:"SortBy_dropDown__2Q4Zs",left:"SortBy_left__3mrD3",right:"SortBy_right__wTgE8"}},47:function(e,t,c){e.exports={container:"ProductList_container__2E-s9",sideBar:"ProductList_sideBar__hh34a",product:"ProductList_product__1W-qs"}},53:function(e,t,c){e.exports={container:"Breadcrumbs_container__LrHP5",current:"Breadcrumbs_current__2-aoz"}},58:function(e,t,c){e.exports={allProducts:"AllProducts_allProducts__Rp8sr"}},59:function(e,t,c){e.exports={header:"FilterByFarm_header__2hgfR"}},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var a={};c.r(a),c.d(a,"fetchProducts",(function(){return R})),c.d(a,"filterByName",(function(){return D})),c.d(a,"filterByStars",(function(){return I}));var r=c(43),s=c.n(r),n=c(33),i=c(34),l=c(12),o=c(5),j=c(23),d=c.n(j),u=c(2),h=function(){return Object(u.jsxs)("div",{className:d.a.mainWrapper,children:[Object(u.jsxs)("ul",{className:d.a.left,children:[Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"#",children:"Chat with us"})}),Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"tel:420-336-775-664",children:"+420 336 775 664"})}),Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"mailto:info@freshnesecom.com",children:"info@freshnesecom.com"})})]}),Object(u.jsxs)("ul",{className:d.a.right,children:[Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"#",children:"Blog"})}),Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"#",children:"About Us"})}),Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"#",children:"Careers"})})]})]})},m=c(41),b=c.n(m),p=c(14),x=c(26),O=c.n(x),A=c(27),_=c(20),f=c(0),g=c.n(f),C=c(4),N=c(56),v=c(40);Object(N.a)({apiKey:"AIzaSyC2YMvkvZaBSnPX1Bw7kwE8hqxt6oCRS3I",authDomain:"shopproject-f46e0.firebaseapp.com",databaseURL:"https://shopproject-f46e0-default-rtdb.firebaseio.com",projectId:"shopproject-f46e0",storageBucket:"shopproject-f46e0.appspot.com",messagingSenderId:"379022920527",appId:"1:379022920527:web:bedbf08a88e198ef5f533a",measurementId:"G-Y1L7N8PCXG"});var B,P=Object(v.b)(),S="FETCH_ALL_PRODUCTS",y="FILTER_BY_NAME",w="FILTER_BY_STARS",R=function(){return function(){var e=Object(C.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.c)(Object(v.a)(P,"products"),(function(e){var c=e.docs.map((function(e){return e.data()}));t({type:S,payload:c})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t({type:"FETCH_PRODUCTS_ERROR",payload:"an error has occured"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},D=function(e){return{type:y,payload:e}},I=function(e){return{type:w,payload:e}},E=Object(_.a)({},a),T=function(){var e=Object(n.b)();return Object(A.bindActionCreators)(E,e)},F=function(){var e=Object(o.useState)(!1),t=Object(p.a)(e,2),c=t[0],a=t[1],r=T().filterByName,s=Array(5).fill(0).map((function(e){return Object(u.jsx)("li",{onClick:function(){return a(!c)},children:"category name"})}));return Object(u.jsx)("div",{className:O.a.searchBarWrapper,children:Object(u.jsxs)("div",{className:O.a.formGroup,children:[Object(u.jsxs)("div",{className:O.a.dropDown,children:[Object(u.jsxs)("div",{className:O.a.defaultOption,onClick:function(){return a(!c)},children:["All categories ",Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA+ElEQVRIie3OsSuFURjH8c+VImQwSFIGpWRQJmUy3M1kstlMbMq/YDCajAaj3SCD7U5KSlkuRUmJDCK8lufUSeFe9x3fbz3DOb/f8z2HiooyuEKBJ9RL8NXDVaAJ83iMi1csdSBfxEu4nrGQglncR/COlX/Il/EWjgfMfS9M4SYKn1hvQ76Kj9i9w8xPxUlcZ49stCBfi26BW0z/tTCOy1gosPVLdzPrNTHRwofACM6y5R3UsryG7Sy/wFir8sQwTjPJHrrRhd3s/hyj7coTQ2hksv2YdG5EpyP6cZRJ05xgsFN5og+HmfwYA2XJEz04iOktW15R8TNfk9ZIfo6LlycAAAAASUVORK5CYII=",alt:"dropDown"})]}),c&&Object(u.jsx)("div",{className:O.a.dropDownList,children:Object(u.jsx)("ul",{children:s})})]}),Object(u.jsx)("div",{className:O.a.search,children:Object(u.jsx)("input",{onChange:function(e){return r(e.target.value)},type:"text",className:O.a.searchInput,placeholder:"Search Products, categories ..."})}),Object(u.jsx)("img",{className:O.a.searchLoop,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABjUlEQVRYhe2WTU4CQRCFPyGwEdcaFx4AvIO40KUoMegNCGj8uYQxnkFXRu+iO9HIiJi4MyTuxoUsBBddk26JylCNGBJeUmmYmVfvTVdNzcAEY4w0UAIugQB4kwiACzmX/ivxIvAEdPtEE9gYpnACOHEEboA9IAtMS+SAfaDmXHcsXG9E4u9AuU/SBFCRayMTXig64ksD8PKOiXWteBpb87KCXxXuI5DSGChha66pZRK4lRyb7om4yaJOPgU6CgMfwJn8VpXhAeM+qyELcpIj0JBDIWc8DMxIjtA9GLcEUx7CvTm+lDCugZasCx4GIu6LxsCVrCseBlZlvdaQtzH1q6F/DO/45jGMixTwLAkqCv6ucBsoBxFAATuK8wPwloE2pvnWtOIAc8CrY6KK2dqfkMTceVs4R77idUkUmehixusBZshkJBaBQ2zNOyKufh274nX5X8D2xG/RYAjb3iseIQVsYT6/mpjPsRC4B84x3a5uOIBZ7DYGwLxPson4WIiDnVi9DTdS7Pyn+AQjxye0yX9Iv8qNSwAAAABJRU5ErkJggg==",alt:"img here"})]})})},L=function(){return Object(u.jsxs)("div",{className:b.a.container,children:[Object(u.jsx)("h1",{className:b.a.header,children:"Freshnesecom"}),Object(u.jsx)(F,{}),Object(u.jsxs)("ul",{className:b.a.checkout,children:[Object(u.jsx)("li",{children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACv0lEQVRoge2Yy0tUURzHPyOZaA/CHmNgxFAa9iBqiPbRsnHZImiX1KJNEO2ColULSYQiCkrobyhK2kSRu2ohWvQYg8q0x5jRa8oZF7/f5TbDeOfeOefMWNwPHH56/T2+557reUFMTMw/TcJh7k5go/78GnjjsJY1lgBHgVGgWNZGgT71WZSsAx7gC34M3ND25K/n99V3UbEcX+RDYGcFn13AiPo8ApbVTV0IBhFht4GWAL8WYFh9L9RBVyg6gF9ADlgdwn8NMKMxxp9Sk2kCIAMsBa4Dn0L4fwSGNCZjWtxGB7apvRchxvPdblrcRgdWqZ2JEJMri60ZGx2YVtsZIWaD2inT4jY6MKI2yvd8oCy2obQho/AHmeurkVbf90CrQ12ROIbM7VlgU4DfZmBCffvqoCsSQ4iwHHCS0jk+CZzSvxWBa3VXF4Im4ByQR0QWgEltBX2WB85i53/PGd3AADAO/NA2hmwduhqoKyamEq6OlCuBFLBCf/+KTLGzjuoZ0wz0IlOpN89XahPIrjWjMcaYjkArcBw4AazXZwXgOfAMefMgI9KNzELeFDoJ9AMXgZ+GOmpiP/ASebNzwE3gCMGHlCSyAt/CXxteAPucKi0jAZxBRBeRI+LuGvKkgbv4L+C0LYFBJIArWvQ7cMhCzsPIYlcELuP2rop+LfQW2GMx717gneY+bzFvCQe1wCyww0H+HuRUV8TOyJbQocnn8A8jLujVGp+xfPnlbZUHbSZdgEta66qthCngN/AFWGsraQBJZP3I418OL0iYfbl3ITsAfDCSFo4prdWMrCvGZJEh3WIjWUh68Bc5I7o00Zhpohp4qrVTQU7VPqG02mEbiiJyR23gelOtA94RsBEjMF6moSLVOtCudjrQyw1ezfYgp2od8LbDWWM50Xml9ptJkjbcbBvCshW5ho+JiflfmQcCw59KiVX/zwAAAABJRU5ErkJggg==",alt:"head",className:b.a.man})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:B.SHOPPING_CART,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACNklEQVRoge2Yz0ocQRCHP7PRmIAeJJ5CBHMTPIuigmCQBPUesiTxUbzmmEcInvTqH1DwlAg+gRIxEQRvYjQHkaiYQzduzWR6ume7p3VlPhio3a2p+vV2d1XPQEVFRUWrMArcRLqGXUU9KjCATwV8fQme6ynwm3gzcKpzBqMugu8BbSGDC3ZFnncuN7guITmlX3WCMlgw5PTiBXCFEn0N9IUK7JDrpe0GlxmYA2ra3gQOm1XnwJHOAUpbPURQuS6DBLTwXuT7ged+k7X/DHjmq86BTpIVL7cn2JaQ3EiLwLmXNDcugCWDhv94bAl2AHzW9kKeY2C+oGYBVE94uKQ3SFn1PTS3uouche4lLT+AvE1c1nmnWTKXd8vPwIMewA0wGUtIDlPkVEdbI5ulcbgyMYY6cgBsAd+b/N7EjOX3BOkno58O98wL/3mP7038ytB1S3oJtQEdNNr3K2DAIUlZDAL92v4DPCFVHbP2wCWwIT7PliLNDZl7HfibdjBt4hVDkNjI3CtZDqYBrKIe7QBGgOcBRbnSCwxp+xpYy3IyDeAE2NZ2DXgbVJob0zQeZbeB4yynvD6wLOxCpSwQMueyycl1AG9Q1SkWHagGlqUlQd4AdoF9bXcD4/66nJkAurR9AOyYHG1noVVhx6xGMpfx33dhkmJdORSy+772CdRO8hVHjK48SPJVTu7esy2hu+jK1u5blA/Ee62evj76igfoQc1EbPFXBDwBfLuDAdieEyoqKiruAf8AYrsDzoiNX4IAAAAASUVORK5CYII=",alt:"shoppingBag"})})})]})]})},U=c(58),k=c.n(U),Q=n.c,G=c(11),W=c.n(G),Y=c.p+"static/media/blackStar.14c252db.svg",H=c.p+"static/media/whiteRatingStar.b4d2b8b9.svg",M=function(e,t,c){return e.filter((function(e){return""===t&&1===c.length||e.name.toLowerCase().includes(t.toLowerCase())&&1===c.length||e.name.toLowerCase().includes(t.toLowerCase())&&c.includes(e.rating)?e:void 0}))},V=c.p+"static/media/productArrow.87d311cb.svg",J=c.p+"static/media/heart.43803a47.svg",X=function(){var e=Q((function(e){return e.products})),t=e.products,c=e.filterName,a=e.filterStars,r=T().fetchProducts;Object(o.useEffect)((function(){r()}),[]);var s=Array(5).fill(0);return Object(u.jsx)(u.Fragment,{children:M(t,c,a).map((function(e){return Object(u.jsxs)("div",{className:W.a.container,children:[Object(u.jsx)("div",{className:W.a.imgBx,children:Object(u.jsx)("img",{className:W.a.productImage,src:e.image,alt:"product Image"})}),Object(u.jsxs)("div",{className:W.a.content,children:[Object(u.jsxs)("div",{className:W.a.leftSide,children:[Object(u.jsxs)("div",{className:W.a.leftTopPart,children:[Object(u.jsx)("h1",{className:W.a.title,children:e.name}),Object(u.jsx)("div",{className:W.a.description,children:e.description}),Object(u.jsx)("div",{children:s.map((function(t,c){return e.rating>c?Object(u.jsx)("img",{className:W.a.star,src:Y,alt:"star"},c):Object(u.jsx)("img",{className:W.a.star,src:H,alt:"star"},c)}))})]}),Object(u.jsxs)("div",{className:W.a.leftBottomPart,children:[Object(u.jsxs)("div",{className:W.a.charactContainer,children:[Object(u.jsx)("span",{className:W.a.textTitle,children:"Freshness"}),Object(u.jsx)("span",{children:e.freshness})]}),Object(u.jsxs)("div",{className:W.a.charactContainer,children:[Object(u.jsx)("span",{className:W.a.textTitle,children:" Farm"}),Object(u.jsx)("span",{children:e.farm})]}),Object(u.jsxs)("div",{className:W.a.charactContainer,children:[Object(u.jsx)("span",{className:W.a.textTitle,children:"Delivery"}),Object(u.jsx)("span",{children:e.delivery})]}),Object(u.jsxs)("div",{className:W.a.charactContainer,children:[Object(u.jsx)("span",{className:W.a.textTitle,children:"Stock"}),Object(u.jsxs)("span",{className:W.a.supply,children:[e.stock," pcs"]})]})]})]}),Object(u.jsxs)("div",{className:W.a.rightSide,children:[Object(u.jsxs)("div",{className:W.a.prices,children:[Object(u.jsxs)("h1",{className:W.a.discountPrice,children:[e.priceHalf.toFixed(2)," ",Object(u.jsx)("span",{children:"USD"})]}),Object(u.jsx)("div",{className:W.a.fullPrice,children:e.priceFull.toFixed(2)})]}),Object(u.jsxs)("div",{className:W.a.transfer,children:[Object(u.jsx)("div",{className:W.a.shipping,children:"Free Shipping"}),Object(u.jsx)("div",{children:"Delivery in 1 day"})]}),Object(u.jsxs)("div",{className:W.a.buttons,children:[Object(u.jsx)("div",{children:Object(u.jsx)(i.b,{to:B.PRODUCT_DESCRIPTION,children:Object(u.jsxs)("button",{className:W.a.button,children:["Product Detail ",Object(u.jsx)("img",{src:V,alt:"arrow"})]})})}),Object(u.jsxs)("div",{className:W.a.wishList,children:[Object(u.jsx)("img",{src:J,alt:"heart"})," ",Object(u.jsx)("span",{children:" Add to wish list"})]})]})]})]})]},e.itemID)}))})},K=c(47),z=c.n(K),Z=c(35),q=c.n(Z),$=function(){var e=Q((function(e){return e.products})).products,t=Array();e.map((function(e){t.includes(e.category)||t.push(e.category)}));var c=t.map((function(t,c){var a=e.filter((function(e){return e.category==t}));return Object(u.jsxs)("div",{className:q.a.itemContainer,children:[Object(u.jsx)("div",{className:q.a.item,children:t}),Object(u.jsx)("div",{className:q.a.item,children:Object(u.jsx)("span",{className:q.a.countCircle,children:a.length})})]},c)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:q.a.title,children:"Categories"}),Object(u.jsx)("div",{children:c})]})},ee=c(59),te=c.n(ee),ce=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:te.a.header,children:"Farm"}),Object(u.jsx)("div",{})]})},ae=c(28),re=c.n(ae),se=c.p+"static/media/yellowStar.f9bd7556.svg",ne=function(e){var t=Array(5).fill(0);return Object(u.jsx)(u.Fragment,{children:t.map((function(t,c){return c<e.yellow?Object(u.jsx)("img",{className:re.a.star,src:se,alt:"yellowStar"},c):Object(u.jsx)("img",{className:re.a.star,src:H,alt:"whiteStar"},c)}))})},ie=function(){var e=T().filterByStars,t=Array(5).fill(0),c=t.map((function(t,c){return Object(u.jsxs)("div",{className:re.a.oneBox,children:[Object(u.jsx)("input",{className:re.a.checkbox,type:"checkbox",onChange:function(){return function(t){e(t)}(c+1)}}),Object(u.jsx)(ne,{yellow:c+1})]},c)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:re.a.title,children:"Rating"}),Object(u.jsx)("div",{className:re.a.container,children:c})]})},le=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)($,{}),Object(u.jsx)(ce,{}),Object(u.jsx)(ie,{})]})},oe=function(){return Object(u.jsxs)("div",{className:z.a.container,children:[Object(u.jsx)("div",{className:z.a.sideBar,children:Object(u.jsx)(le,{})}),Object(u.jsx)("div",{className:z.a.product,children:Object(u.jsx)(X,{})})]})},je=c(42),de=c.n(je),ue=c.p+"static/media/arrow.fd9f895e.svg",he=function(){return Object(u.jsxs)("div",{className:de.a.container,children:[Object(u.jsx)("div",{className:de.a.left,children:"Sort by"}),Object(u.jsxs)("div",{className:de.a.right,children:[Object(u.jsx)("span",{children:"Select"}),Object(u.jsx)("img",{className:de.a.dropDown,src:ue,alt:"arrow"})]})]})},me=c(36),be=c.n(me),pe=function(){var e=Q((function(e){return e.products})).products;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:be.a.contentContainer,children:[Object(u.jsxs)("div",{className:be.a.titleContainer,children:[Object(u.jsx)("h1",{className:be.a.title,children:"All Products"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:be.a.totalCount,children:e.length}),Object(u.jsx)("span",{className:be.a.products,children:"Products"})]})]}),Object(u.jsx)(he,{}),Object(u.jsx)(oe,{})]})})},xe=c(53),Oe=c.n(xe),Ae=function(){return Object(u.jsxs)("div",{className:Oe.a.container,children:[Object(u.jsx)("span",{children:"HomePage /"}),Object(u.jsx)("span",{className:Oe.a.current,children:"All products"})]})},_e=c(24),fe=c.n(_e),ge=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("ul",{className:fe.a.menuWrapper,children:[Object(u.jsxs)("li",{className:fe.a.item,children:[Object(u.jsx)("span",{children:"Electronics"}),Object(u.jsx)("img",{src:ue,alt:""})]}),Object(u.jsxs)("li",{className:fe.a.item,children:[Object(u.jsx)("span",{children:"Food"})," ",Object(u.jsx)("img",{src:ue,alt:""})]}),Object(u.jsxs)("li",{className:fe.a.item,children:[Object(u.jsx)("span",{children:"Clothes"})," ",Object(u.jsx)("img",{src:ue,alt:""})]}),Object(u.jsxs)("li",{className:fe.a.item,children:[Object(u.jsx)("span",{children:"Skin and care"})," ",Object(u.jsx)("img",{src:ue,alt:""})]}),Object(u.jsxs)("li",{className:fe.a.item,children:[Object(u.jsx)("span",{children:"Toys"})," ",Object(u.jsx)("img",{src:ue,alt:""})]}),Object(u.jsxs)("li",{className:fe.a.item,children:[Object(u.jsx)("span",{children:"Speacial nutrition"})," ",Object(u.jsx)("img",{src:ue,alt:""})]}),Object(u.jsxs)("li",{className:fe.a.item,children:[Object(u.jsx)("span",{children:"Sport and outdoors"})," ",Object(u.jsx)("img",{src:ue,alt:""})]}),Object(u.jsxs)("li",{className:fe.a.item,children:[Object(u.jsx)("span",{children:"Books"})," ",Object(u.jsx)("img",{src:ue,alt:""})]})]})})},Ce=function(){return Object(u.jsxs)("div",{className:k.a.allProducts,children:[Object(u.jsx)(h,{}),Object(u.jsx)(L,{}),Object(u.jsx)(ge,{}),Object(u.jsx)(Ae,{}),Object(u.jsx)(pe,{})]})},Ne=function(){return Object(u.jsx)("div",{children:"Product Description"})},ve=function(){return Object(u.jsx)("div",{children:"shippingCart"})};!function(e){e.ALL_PRODUCTS="/",e.PRODUCT_DESCRIPTION="/product-description",e.SHOPPING_CART="/shopping-cart"}(B||(B={}));var Be=[{path:B.ALL_PRODUCTS,component:Ce,exact:!0},{path:B.PRODUCT_DESCRIPTION,component:Ne,exact:!0},{path:B.SHOPPING_CART,component:ve,exact:!0}],Pe=(c(77),function(){return Object(u.jsx)(i.a,{children:Object(u.jsx)(l.c,{children:Be.map((function(e){var t=e.path,c=e.component,a=e.exact;return Object(u.jsx)(l.a,{exact:a,path:t,component:c},t)}))})})}),Se=c(60),ye=c(61),we=c(25),Re={products:[{itemID:"",name:"",priceHalf:0,priceFull:0,freshness:"",delivery:"",stock:0,category:"",farm:"",description:"",rating:0,image:""}],filterName:"",filterStars:[0]},De=Object(A.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(_.a)(Object(_.a)({},e),{},{products:t.payload});case y:return Object(_.a)(Object(_.a)({},e),{},{filterName:t.payload});case w:return Object(_.a)(Object(_.a)({},e),{},{filterStars:e.filterStars.includes(t.payload)?Object(we.a)(e.filterStars.filter((function(e){return e!==t.payload}))):[].concat(Object(we.a)(e.filterStars),[t.payload])});default:return e}}}),Ie=Object(A.createStore)(De,Object(ye.composeWithDevTools)(Object(A.applyMiddleware)(Se.a)));s.a.render(Object(u.jsx)(n.a,{store:Ie,children:Object(u.jsx)(Pe,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.e556c99c.chunk.js.map