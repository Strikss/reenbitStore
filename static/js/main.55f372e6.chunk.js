(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[0],{11:function(e,t,c){e.exports={container:"Product_container__1i9pQ",imgBx:"Product_imgBx__1z-bU",productImage:"Product_productImage__10R-q",content:"Product_content__2X6Ds",leftSide:"Product_leftSide__3Fr1c",rightSide:"Product_rightSide__3TIik",leftTopPart:"Product_leftTopPart__Wo2kr",starContainer:"Product_starContainer__32YFd",star:"Product_star__3JDwm",title:"Product_title__16Xn6",description:"Product_description__29Swm",leftBottomPart:"Product_leftBottomPart__3bOp0",listTitleContainer:"Product_listTitleContainer__3h1W4",listDescriptionContainer:"Product_listDescriptionContainer__22jQF",listTitle:"Product_listTitle__2RTQu",supply:"Product_supply__231Hf",discountPrice:"Product_discountPrice__Pbu2v",fullPrice:"Product_fullPrice__3mR07",button:"Product_button__26TLM",wishList:"Product_wishList__rmKwK",transfer:"Product_transfer__6vgvR",shipping:"Product_shipping__32rbE",charactContainer:"Product_charactContainer__2-jcZ",pricesContainer:"Product_pricesContainer__2xwyt"}},23:function(e,t,c){e.exports={mainWrapper:"Header_mainWrapper__2RzmT",right:"Header_right__CK_dd",item:"Header_item__1dgwQ",left:"Header_left__JRIOx"}},24:function(e,t,c){e.exports={menuWrapper:"Menu_menuWrapper__1htix",item:"Menu_item__3kezD"}},26:function(e,t,c){e.exports={searchBarWrapper:"SearchEngine_searchBarWrapper__FQlEK",searchLoop:"SearchEngine_searchLoop__34cl_",formGroup:"SearchEngine_formGroup__3Fd_X",dropDown:"SearchEngine_dropDown__3foWx",defaultOption:"SearchEngine_defaultOption__15Mz3",dropDownList:"SearchEngine_dropDownList__5E3ip",search:"SearchEngine_search__3kmk1",searchInput:"SearchEngine_searchInput__VuusE",menuWrapper:"SearchEngine_menuWrapper__1AuI0"}},28:function(e,t,c){e.exports={container:"FilterByStars_container__ua3Dm",oneBox:"FilterByStars_oneBox__1cFo-",title:"FilterByStars_title__rgpi7",star:"FilterByStars_star__3VY7x",checkbox:"FilterByStars_checkbox__3Eo29"}},35:function(e,t,c){e.exports={itemContainer:"CategoriesFilter_itemContainer__10uLf",item:"CategoriesFilter_item__2zH15",title:"CategoriesFilter_title__25V-H",countCircle:"CategoriesFilter_countCircle__28L4Q"}},40:function(e,t,c){e.exports={container:"SearchBar_container__33QhV",checkout:"SearchBar_checkout__2dlDf",man:"SearchBar_man__3Zlkd"}},41:function(e,t,c){e.exports={container:"ContentActions_container__1v2hr",dropDown:"ContentActions_dropDown__1RUiC",left:"ContentActions_left__3FnNc",right:"ContentActions_right__srD7U"}},42:function(e,t,c){e.exports={titleContainer:"ContentHeader_titleContainer__31gQJ",title:"ContentHeader_title__2EdyU",totalCount:"ContentHeader_totalCount__2H_Ea",products:"ContentHeader_products__2mLor"}},47:function(e,t,c){e.exports={container:"ContentBody_container__1UaMF",sideBar:"ContentBody_sideBar__3sCW1",products:"ContentBody_products__tOa44"}},53:function(e,t,c){e.exports={container:"Breadcrumbs_container__LrHP5",current:"Breadcrumbs_current__2-aoz"}},58:function(e,t,c){e.exports={allProducts:"AllProducts_allProducts__Rp8sr"}},59:function(e,t,c){e.exports={header:"FilterByFarm_header__23jA1"}},60:function(e,t,c){e.exports={contentContainer:"Content_contentContainer__6r8q4"}},78:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var r={};c.r(r),c.d(r,"fetchProducts",(function(){return D})),c.d(r,"filterByName",(function(){return R})),c.d(r,"filterByStars",(function(){return I}));var a=c(43),s=c.n(a),n=c(33),i=c(34),l=c(12),o=c(5),j=c(23),d=c.n(j),u=c(2),h=function(){return Object(u.jsxs)("div",{className:d.a.mainWrapper,children:[Object(u.jsxs)("ul",{className:d.a.left,children:[Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"#",children:"Chat with us"})}),Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"tel:420-336-775-664",children:"+420 336 775 664"})}),Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"mailto:info@freshnesecom.com",children:"info@freshnesecom.com"})})]}),Object(u.jsxs)("ul",{className:d.a.right,children:[Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"#",children:"Blog"})}),Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"#",children:"About Us"})}),Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("a",{href:"#",children:"Careers"})})]})]})},m=c(40),b=c.n(m),p=c(14),O=c(26),x=c.n(O),_=c(27),A=c(20),f=c(0),g=c.n(f),C=c(4),N=c(56),v=c(39);Object(N.a)({apiKey:"AIzaSyC2YMvkvZaBSnPX1Bw7kwE8hqxt6oCRS3I",authDomain:"shopproject-f46e0.firebaseapp.com",databaseURL:"https://shopproject-f46e0-default-rtdb.firebaseio.com",projectId:"shopproject-f46e0",storageBucket:"shopproject-f46e0.appspot.com",messagingSenderId:"379022920527",appId:"1:379022920527:web:bedbf08a88e198ef5f533a",measurementId:"G-Y1L7N8PCXG"});var P,B=Object(v.b)(),S="FETCH_ALL_PRODUCTS",y="FILTER_BY_NAME",w="FILTER_BY_STARS",D=function(){return function(){var e=Object(C.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.c)(Object(v.a)(B,"products"),(function(e){var c=e.docs.map((function(e){return e.data()}));t({type:S,payload:c})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t({type:"FETCH_PRODUCTS_ERROR",payload:"an error has occured"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},R=function(e){return{type:y,payload:e}},I=function(e){return{type:w,payload:e}},T=Object(A.a)({},r),E=function(){var e=Object(n.b)();return Object(_.bindActionCreators)(T,e)},F=function(){var e=Object(o.useState)(!1),t=Object(p.a)(e,2),c=t[0],r=t[1],a=E().filterByName,s=Array(5).fill(0).map((function(e){return Object(u.jsx)("li",{onClick:function(){return r(!c)},children:"category name"})}));return Object(u.jsx)("div",{className:x.a.searchBarWrapper,children:Object(u.jsxs)("div",{className:x.a.formGroup,children:[Object(u.jsxs)("div",{className:x.a.dropDown,children:[Object(u.jsxs)("div",{className:x.a.defaultOption,onClick:function(){return r(!c)},children:["All categories ",Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA+ElEQVRIie3OsSuFURjH8c+VImQwSFIGpWRQJmUy3M1kstlMbMq/YDCajAaj3SCD7U5KSlkuRUmJDCK8lufUSeFe9x3fbz3DOb/f8z2HiooyuEKBJ9RL8NXDVaAJ83iMi1csdSBfxEu4nrGQglncR/COlX/Il/EWjgfMfS9M4SYKn1hvQ76Kj9i9w8xPxUlcZ49stCBfi26BW0z/tTCOy1gosPVLdzPrNTHRwofACM6y5R3UsryG7Sy/wFir8sQwTjPJHrrRhd3s/hyj7coTQ2hksv2YdG5EpyP6cZRJ05xgsFN5og+HmfwYA2XJEz04iOktW15R8TNfk9ZIfo6LlycAAAAASUVORK5CYII=",alt:"dropDown"})]}),c&&Object(u.jsx)("div",{className:x.a.dropDownList,children:Object(u.jsx)("ul",{children:s})})]}),Object(u.jsx)("div",{className:x.a.search,children:Object(u.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",className:x.a.searchInput,placeholder:"Search Products, categories ..."})}),Object(u.jsx)("img",{className:x.a.searchLoop,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABjUlEQVRYhe2WTU4CQRCFPyGwEdcaFx4AvIO40KUoMegNCGj8uYQxnkFXRu+iO9HIiJi4MyTuxoUsBBddk26JylCNGBJeUmmYmVfvTVdNzcAEY4w0UAIugQB4kwiACzmX/ivxIvAEdPtEE9gYpnACOHEEboA9IAtMS+SAfaDmXHcsXG9E4u9AuU/SBFCRayMTXig64ksD8PKOiXWteBpb87KCXxXuI5DSGChha66pZRK4lRyb7om4yaJOPgU6CgMfwJn8VpXhAeM+qyELcpIj0JBDIWc8DMxIjtA9GLcEUx7CvTm+lDCugZasCx4GIu6LxsCVrCseBlZlvdaQtzH1q6F/DO/45jGMixTwLAkqCv6ucBsoBxFAATuK8wPwloE2pvnWtOIAc8CrY6KK2dqfkMTceVs4R77idUkUmehixusBZshkJBaBQ2zNOyKufh274nX5X8D2xG/RYAjb3iseIQVsYT6/mpjPsRC4B84x3a5uOIBZ7DYGwLxPson4WIiDnVi9DTdS7Pyn+AQjxye0yX9Iv8qNSwAAAABJRU5ErkJggg==",alt:"img here"})]})})},L=function(){return Object(u.jsxs)("div",{className:b.a.container,children:[Object(u.jsx)("h1",{className:b.a.header,children:"Freshnesecom"}),Object(u.jsx)(F,{}),Object(u.jsxs)("ul",{className:b.a.checkout,children:[Object(u.jsx)("li",{children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACv0lEQVRoge2Yy0tUURzHPyOZaA/CHmNgxFAa9iBqiPbRsnHZImiX1KJNEO2ColULSYQiCkrobyhK2kSRu2ohWvQYg8q0x5jRa8oZF7/f5TbDeOfeOefMWNwPHH56/T2+557reUFMTMw/TcJh7k5go/78GnjjsJY1lgBHgVGgWNZGgT71WZSsAx7gC34M3ND25K/n99V3UbEcX+RDYGcFn13AiPo8ApbVTV0IBhFht4GWAL8WYFh9L9RBVyg6gF9ADlgdwn8NMKMxxp9Sk2kCIAMsBa4Dn0L4fwSGNCZjWtxGB7apvRchxvPdblrcRgdWqZ2JEJMri60ZGx2YVtsZIWaD2inT4jY6MKI2yvd8oCy2obQho/AHmeurkVbf90CrQ12ROIbM7VlgU4DfZmBCffvqoCsSQ4iwHHCS0jk+CZzSvxWBa3VXF4Im4ByQR0QWgEltBX2WB85i53/PGd3AADAO/NA2hmwduhqoKyamEq6OlCuBFLBCf/+KTLGzjuoZ0wz0IlOpN89XahPIrjWjMcaYjkArcBw4AazXZwXgOfAMefMgI9KNzELeFDoJ9AMXgZ+GOmpiP/ASebNzwE3gCMGHlCSyAt/CXxteAPucKi0jAZxBRBeRI+LuGvKkgbv4L+C0LYFBJIArWvQ7cMhCzsPIYlcELuP2rop+LfQW2GMx717gneY+bzFvCQe1wCyww0H+HuRUV8TOyJbQocnn8A8jLujVGp+xfPnlbZUHbSZdgEta66qthCngN/AFWGsraQBJZP3I418OL0iYfbl3ITsAfDCSFo4prdWMrCvGZJEh3WIjWUh68Bc5I7o00Zhpohp4qrVTQU7VPqG02mEbiiJyR23gelOtA94RsBEjMF6moSLVOtCudjrQyw1ezfYgp2od8LbDWWM50Xml9ptJkjbcbBvCshW5ho+JiflfmQcCw59KiVX/zwAAAABJRU5ErkJggg==",alt:"head",className:b.a.man})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:P.SHOPPING_CART,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACNklEQVRoge2Yz0ocQRCHP7PRmIAeJJ5CBHMTPIuigmCQBPUesiTxUbzmmEcInvTqH1DwlAg+gRIxEQRvYjQHkaiYQzduzWR6ume7p3VlPhio3a2p+vV2d1XPQEVFRUWrMArcRLqGXUU9KjCATwV8fQme6ynwm3gzcKpzBqMugu8BbSGDC3ZFnncuN7guITmlX3WCMlgw5PTiBXCFEn0N9IUK7JDrpe0GlxmYA2ra3gQOm1XnwJHOAUpbPURQuS6DBLTwXuT7ged+k7X/DHjmq86BTpIVL7cn2JaQ3EiLwLmXNDcugCWDhv94bAl2AHzW9kKeY2C+oGYBVE94uKQ3SFn1PTS3uouche4lLT+AvE1c1nmnWTKXd8vPwIMewA0wGUtIDlPkVEdbI5ulcbgyMYY6cgBsAd+b/N7EjOX3BOkno58O98wL/3mP7038ytB1S3oJtQEdNNr3K2DAIUlZDAL92v4DPCFVHbP2wCWwIT7PliLNDZl7HfibdjBt4hVDkNjI3CtZDqYBrKIe7QBGgOcBRbnSCwxp+xpYy3IyDeAE2NZ2DXgbVJob0zQeZbeB4yynvD6wLOxCpSwQMueyycl1AG9Q1SkWHagGlqUlQd4AdoF9bXcD4/66nJkAurR9AOyYHG1noVVhx6xGMpfx33dhkmJdORSy+772CdRO8hVHjK48SPJVTu7esy2hu+jK1u5blA/Ee62evj76igfoQc1EbPFXBDwBfLuDAdieEyoqKiruAf8AYrsDzoiNX4IAAAAASUVORK5CYII=",alt:"shoppingBag"})})})]})]})},U=c(58),k=c.n(U),Q=n.c,H=function(e,t,c){return e.filter((function(e){return""===t&&1===c.length||e.name.toLowerCase().includes(t.toLowerCase())&&1===c.length||e.name.toLowerCase().includes(t.toLowerCase())&&c.includes(e.rating)?e:void 0}))},W=c(11),G=c.n(W),V=c.p+"static/media/blackStar.14c252db.svg",M=c.p+"static/media/whiteRatingStar.b4d2b8b9.svg",Y=c.p+"static/media/productArrow.87d311cb.svg",J=c.p+"static/media/heart.43803a47.svg",X=function(e){var t=e.prod,c=Array(5).fill(0);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:G.a.container,children:[Object(u.jsx)("div",{className:G.a.imgBx,children:Object(u.jsx)("img",{className:G.a.productImage,src:t.image,alt:"Product Image"})}),Object(u.jsxs)("div",{className:G.a.content,children:[Object(u.jsxs)("div",{className:G.a.leftSide,children:[Object(u.jsxs)("div",{className:G.a.leftTopPart,children:[Object(u.jsx)("h1",{className:G.a.title,children:t.name}),Object(u.jsx)("p",{className:G.a.description,children:t.description}),Object(u.jsx)("ul",{className:G.a.starContainer,children:c.map((function(e,c){return Object(u.jsx)("li",{children:Object(u.jsx)("img",{className:G.a.star,src:t.rating>c?V:M,alt:"star"},c)})}))})]}),Object(u.jsxs)("div",{className:G.a.leftBottomPart,children:[Object(u.jsxs)("ul",{className:G.a.listTitleContainer,children:[Object(u.jsx)("li",{className:G.a.listTitle,children:"Freshness"}),Object(u.jsx)("li",{className:G.a.listTitle,children:"Farm"}),Object(u.jsx)("li",{className:G.a.listTitle,children:"Delivery"}),Object(u.jsx)("li",{className:G.a.listTitle,children:"Stock"})]}),Object(u.jsxs)("ul",{className:G.a.listDescriptionContainer,children:[Object(u.jsx)("li",{className:G.a.listTitle,children:t.freshness}),Object(u.jsx)("li",{className:G.a.listTitle,children:t.farm}),Object(u.jsx)("li",{className:G.a.listTitle,children:t.delivery}),Object(u.jsx)("li",{className:G.a.listTitle,children:t.stock})]})]})]}),Object(u.jsxs)("div",{className:G.a.rightSide,children:[Object(u.jsxs)("div",{className:G.a.pricesContainer,children:[Object(u.jsxs)("h1",{className:G.a.discountPrice,children:[t.priceHalf.toFixed(2)," ",Object(u.jsx)("span",{children:"USD"})]}),Object(u.jsx)("p",{className:G.a.fullPrice,children:Object(u.jsx)("s",{children:t.priceFull.toFixed(2)})})]}),Object(u.jsxs)("div",{className:G.a.transfer,children:[Object(u.jsx)("p",{className:G.a.shipping,children:"Free Shipping"}),Object(u.jsx)("p",{className:G.a.delivery,children:"Delivery in 1 day"})]}),Object(u.jsxs)("div",{className:G.a.buttons,children:[Object(u.jsx)("button",{className:G.a.button,children:Object(u.jsxs)(i.b,{to:P.PRODUCT_DESCRIPTION,children:["Product Detail ",Object(u.jsx)("img",{src:Y,alt:"arrow"})]})}),Object(u.jsxs)("div",{className:G.a.wishList,children:[Object(u.jsx)("img",{src:J,alt:"heart"})," ",Object(u.jsx)("span",{children:" Add to wish list"})]})]})]})]})]},t.itemID)})},K=function(){var e=E().fetchProducts,t=Q((function(e){return e.products})),c=t.products,r=t.filterName,a=t.filterStars,s=H(c,r,a);return Object(o.useEffect)((function(){e()}),[]),Object(u.jsx)("div",{children:s.map((function(e){return Object(u.jsx)(X,{prod:e})}))})},z=c(47),Z=c.n(z),q=c(35),$=c.n(q),ee=function(){var e=Q((function(e){return e.products})).products,t=Array();e.map((function(e){t.includes(e.category)||t.push(e.category)}));var c=t.map((function(t,c){var r=e.filter((function(e){return e.category==t}));return Object(u.jsxs)("div",{className:$.a.itemContainer,children:[Object(u.jsx)("div",{className:$.a.item,children:t}),Object(u.jsx)("div",{className:$.a.item,children:Object(u.jsx)("span",{className:$.a.countCircle,children:r.length})})]},c)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:$.a.title,children:"Categories"}),Object(u.jsx)("div",{children:c})]})},te=c(59),ce=c.n(te),re=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:ce.a.header,children:"Farm"}),Object(u.jsx)("div",{})]})},ae=c(28),se=c.n(ae),ne=c.p+"static/media/yellowStar.f9bd7556.svg",ie=function(e){var t=Array(5).fill(0);return Object(u.jsx)(u.Fragment,{children:t.map((function(t,c){return c<e.yellow?Object(u.jsx)("img",{className:se.a.star,src:ne,alt:"yellowStar"},c):Object(u.jsx)("img",{className:se.a.star,src:M,alt:"whiteStar"},c)}))})},le=function(){var e=E().filterByStars,t=Array(5).fill(0),c=t.map((function(t,c){return Object(u.jsxs)("div",{className:se.a.oneBox,children:[Object(u.jsx)("input",{className:se.a.checkbox,type:"checkbox",onChange:function(){return function(t){e(t)}(c+1)}}),Object(u.jsx)(ie,{yellow:c+1})]},c)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:se.a.title,children:"Rating"}),Object(u.jsx)("div",{className:se.a.container,children:c})]})},oe=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(ee,{}),Object(u.jsx)(re,{}),Object(u.jsx)(le,{})]})},je=function(){return Object(u.jsxs)("div",{className:Z.a.container,children:[Object(u.jsx)("div",{className:Z.a.sideBar,children:Object(u.jsx)(oe,{})}),Object(u.jsx)("div",{className:Z.a.products,children:Object(u.jsx)(K,{})})]})},de=c(41),ue=c.n(de),he=c.p+"static/media/arrow.fd9f895e.svg",me=function(){return Object(u.jsxs)("div",{className:ue.a.container,children:[Object(u.jsx)("div",{className:ue.a.left,children:"Sort by"}),Object(u.jsxs)("div",{className:ue.a.right,children:[Object(u.jsx)("span",{children:"Select"}),Object(u.jsx)("img",{className:ue.a.dropDown,src:he,alt:"arrow"})]})]})},be=c(60),pe=c.n(be),Oe=c(42),xe=c.n(Oe),_e=function(){var e=Q((function(e){return e.products.products}));return Object(u.jsxs)("div",{className:xe.a.titleContainer,children:[Object(u.jsx)("h1",{className:xe.a.title,children:"All Products"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:xe.a.totalCount,children:e.length}),Object(u.jsx)("span",{className:xe.a.products,children:"Products"})]})]})},Ae=function(){return Object(u.jsxs)("div",{className:pe.a.contentContainer,children:[Object(u.jsx)(_e,{}),Object(u.jsx)(me,{}),Object(u.jsx)(je,{})]})},fe=c(53),ge=c.n(fe),Ce=function(){return Object(u.jsxs)("div",{className:ge.a.container,children:[Object(u.jsx)("span",{children:"HomePage /"}),Object(u.jsx)("span",{className:ge.a.current,children:"All products"})]})},Ne=c(24),ve=c.n(Ne),Pe=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("ul",{className:ve.a.menuWrapper,children:[Object(u.jsxs)("li",{className:ve.a.item,children:[Object(u.jsx)("span",{children:"Electronics"}),Object(u.jsx)("img",{src:he,alt:""})]}),Object(u.jsxs)("li",{className:ve.a.item,children:[Object(u.jsx)("span",{children:"Food"})," ",Object(u.jsx)("img",{src:he,alt:""})]}),Object(u.jsxs)("li",{className:ve.a.item,children:[Object(u.jsx)("span",{children:"Clothes"})," ",Object(u.jsx)("img",{src:he,alt:""})]}),Object(u.jsxs)("li",{className:ve.a.item,children:[Object(u.jsx)("span",{children:"Skin and care"})," ",Object(u.jsx)("img",{src:he,alt:""})]}),Object(u.jsxs)("li",{className:ve.a.item,children:[Object(u.jsx)("span",{children:"Toys"})," ",Object(u.jsx)("img",{src:he,alt:""})]}),Object(u.jsxs)("li",{className:ve.a.item,children:[Object(u.jsx)("span",{children:"Speacial nutrition"})," ",Object(u.jsx)("img",{src:he,alt:""})]}),Object(u.jsxs)("li",{className:ve.a.item,children:[Object(u.jsx)("span",{children:"Sport and outdoors"})," ",Object(u.jsx)("img",{src:he,alt:""})]}),Object(u.jsxs)("li",{className:ve.a.item,children:[Object(u.jsx)("span",{children:"Books"})," ",Object(u.jsx)("img",{src:he,alt:""})]})]})})},Be=function(){return Object(u.jsxs)("div",{className:k.a.allProducts,children:[Object(u.jsx)(h,{}),Object(u.jsx)(L,{}),Object(u.jsx)(Pe,{}),Object(u.jsx)(Ce,{}),Object(u.jsx)(Ae,{})]})},Se=function(){return Object(u.jsx)("div",{children:"Product Description"})},ye=function(){return Object(u.jsx)("div",{children:"shippingCart"})};!function(e){e.ALL_PRODUCTS="/",e.PRODUCT_DESCRIPTION="/product-description",e.SHOPPING_CART="/shopping-cart"}(P||(P={}));var we=[{path:P.ALL_PRODUCTS,component:Be,exact:!0},{path:P.PRODUCT_DESCRIPTION,component:Se,exact:!0},{path:P.SHOPPING_CART,component:ye,exact:!0}],De=(c(78),function(){return Object(u.jsx)(i.a,{children:Object(u.jsx)(l.c,{children:we.map((function(e){var t=e.path,c=e.component,r=e.exact;return Object(u.jsx)(l.a,{exact:r,path:t,component:c},t)}))})})}),Re=c(61),Ie=c(62),Te=c(25),Ee={products:[{itemID:"",name:"",priceHalf:0,priceFull:0,freshness:"",delivery:"",stock:0,category:"",farm:"",description:"",rating:0,image:""}],filterName:"",filterStars:[0]},Fe=Object(_.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(A.a)(Object(A.a)({},e),{},{products:t.payload});case y:return Object(A.a)(Object(A.a)({},e),{},{filterName:t.payload});case w:return Object(A.a)(Object(A.a)({},e),{},{filterStars:e.filterStars.includes(t.payload)?Object(Te.a)(e.filterStars.filter((function(e){return e!==t.payload}))):[].concat(Object(Te.a)(e.filterStars),[t.payload])});default:return e}}}),Le=Object(_.createStore)(Fe,Object(Ie.composeWithDevTools)(Object(_.applyMiddleware)(Re.a)));s.a.render(Object(u.jsx)(n.a,{store:Le,children:Object(u.jsx)(De,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.55f372e6.chunk.js.map