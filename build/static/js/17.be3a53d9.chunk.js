(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[17],{421:function(e,t,a){"use strict";t.a="https://missionorganicmizoram.com/"},427:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(12);t.a=Object(i.a)(r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},474:function(e,t,a){"use strict";a.r(t);var n=a(420),r=a(16),i=a.n(r),l=a(35),o=a(24),c=a(0),s=a.n(c),m=a(403),u=a(70),f=a(412),d=a(401),p=a(404),g=a(489),y=a(409),E=a(408),h=a(413),b=a(414),O=a(415),v=a(58),x=a(421),W=a(42),j=a(427),S=Object(c.lazy)((function(){return a.e(11).then(a.bind(null,434))})),w=Object(c.lazy)((function(){return a.e(19).then(a.bind(null,435))}));t.default=Object(W.b)((function(e){return{auth:e.auth,profile:e.profile}}),null)((function(e){var t=e.auth,a=e.profile,r=Object(c.useState)([]),W=Object(o.a)(r,2),C=W[0],D=W[1],z=Object(c.useState)(!1),k=Object(o.a)(z,2),R=k[0],B=k[1],T=Object(c.useState)({}),P=Object(o.a)(T,2),I=P[0],M=P[1],A=Object(c.useState)(!1),q=Object(o.a)(A,2),L=q[0],N=q[1],F=Object(c.useState)(!1),_=Object(o.a)(F,2),J=_[0],U=_[1],H=Object(c.useState)(!1),K=Object(o.a)(H,2),Q=K[0],Y=K[1],G=Object(c.useState)({quantity:0}),V=Object(o.a)(G,2),X=V[0],Z=V[1];Object(c.useEffect)((function(){document.title="Retail Products",$()}),[]);var $=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/product");case 3:return t=e.sent,e.abrupt("return",D(t.data.data));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/api/product-order",Object(n.a)(Object(n.a)({product:I.id},X),{},{customer:a.id}));case 3:Z({quantity:0}),N(!0),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",alert("Sorry, something went wrong! Please try again."));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(E.a,{maxWidth:"md"},s.a.createElement(u.a,{variant:"h5",gutterBottom:!0,style:{fontWeight:700,marginBottom:20,marginTop:80},color:"primary"},"MOM Retail Products"),function(){if(C.filter((function(e){return e.status})).length)return s.a.createElement(m.a,{container:!0,style:{marginTop:20},spacing:3},C.filter((function(e){return e.status})).map((function(e,t){return s.a.createElement(m.a,{style:{cursor:"pointer"},onClick:function(){M(e),B(!0)},item:!0,key:t,xs:12,sm:12,md:6,lg:3,xl:3},s.a.createElement("div",{style:{border:"1px solid #eee",boxShadow:"1px 1px 8px #ddd",padding:0}},s.a.createElement("img",{alt:e.name,src:"".concat(x.a).concat(e.image),style:{objectFit:"contain",width:"100%"}}),s.a.createElement("div",{style:{backgroundColor:"#333",position:"sticky",opacity:.8,marginTop:-45,padding:10}},s.a.createElement(u.a,{style:{color:"white",fontWeight:500}},e.name))))})))}(),function(){if(I)return s.a.createElement(f.a,{scroll:"body",fullWidth:!0,maxWidth:"xs",open:R,onClose:function(){M({}),Z({quantity:0}),B(!1)}},s.a.createElement("div",null,s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%",position:"absolute"}},s.a.createElement(d.a,{onClick:function(){M({}),B(!1)}},s.a.createElement(j.a,null))),s.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:350}},s.a.createElement("img",{alt:I.name,src:"".concat(x.a).concat(I.image),style:{objectFit:"contain",width:"100%"}})),s.a.createElement("div",{style:{padding:10,marginTop:10}},s.a.createElement(u.a,{style:{fontSize:11,fontWeight:400}},"NAME (MOM)"),s.a.createElement(u.a,{style:{fontWeight:500,marginBottom:8}},I.mom_name),s.a.createElement(u.a,{style:{fontSize:11,fontWeight:400}},"Contact Person"),s.a.createElement(u.a,{style:{fontWeight:500,marginBottom:8}},I.contact_person),s.a.createElement(u.a,{style:{fontSize:11,fontWeight:400}},"District"),s.a.createElement(u.a,{style:{fontWeight:500,marginBottom:8}},I.district),s.a.createElement(u.a,{style:{fontSize:11,fontWeight:400}},"PHONE"),s.a.createElement(u.a,{style:{fontWeight:500,marginBottom:8}},I.phone),s.a.createElement(u.a,{style:{fontSize:11,fontWeight:400}},"EMAIL ADDRESS"),s.a.createElement(u.a,{style:{fontWeight:500,marginBottom:8}},I.email),s.a.createElement(u.a,{style:{fontSize:11,fontWeight:400}},"ADDRESS"),s.a.createElement(u.a,{style:{fontWeight:500,marginBottom:8}},I.address),s.a.createElement(p.a,{style:{marginBottom:10,marginTop:10}}),s.a.createElement(u.a,{style:{fontSize:11,fontWeight:400}},"PRODUCT NAME"),s.a.createElement(u.a,{style:{fontWeight:500,marginBottom:8}},I.name),s.a.createElement(u.a,{style:{fontSize:11,fontWeight:400}},"PRICE"),s.a.createElement(u.a,{style:{fontWeight:500,marginBottom:8}},I.price),s.a.createElement(u.a,{style:{fontSize:11,fontWeight:400}},"FSSAI ID"),s.a.createElement(u.a,{style:{fontWeight:500,marginBottom:8}},I.fssai_id),s.a.createElement(u.a,{style:{fontSize:11,fontWeight:400}},"PRODUCT DESCRIPTION"),s.a.createElement(u.a,{style:{whiteSpace:"pre-line"}},I.description),s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:20}},s.a.createElement(u.a,{style:{margin:5}},"Quantity:"),s.a.createElement(g.a,{type:"number",variant:"outlined",size:"small",style:{width:80,marginRight:15},value:X.quantity,onChange:function(e){Z(Object(n.a)(Object(n.a)({},X),{},{quantity:e.target.value}))}}),s.a.createElement(y.a,{disabled:X.quantity<1,variant:"contained",color:"primary",onClick:function(){if(t){if(window.confirm("Are you sure you want to order this product?"))return ee()}else U(!0)}},"Place Order")))))}(),s.a.createElement(f.a,{fullWidth:!0,maxWidth:"xs",open:L,onClose:function(){N(!1)}},s.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:20}},s.a.createElement("img",{alt:"Success",src:"/success.png",style:{width:80}}),s.a.createElement(u.a,{align:"center",variant:"h6",style:{color:"#009688"}},"Your order has been submitted successfuly"),s.a.createElement(u.a,{align:"center",variant:"h6",style:{color:"#009688"}},"We shall contact you soon"),s.a.createElement(y.a,{onClick:function(){N(!1)},style:{marginTop:20,borderRadius:50},variant:"contained",color:"primary"},"OK"))),s.a.createElement(f.a,{fullWidth:!0,maxWidth:"xs",open:J,onClose:function(){U(!1)}},s.a.createElement(h.a,null,"Login"),s.a.createElement(b.a,{dividers:!0},s.a.createElement(c.Suspense,{fallback:s.a.createElement("div",{style:{marginTop:400,display:"flex",flexDirection:"column",alignItems:"center"}},s.a.createElement(O.a,null))},s.a.createElement(S,{setOpenRegistrationDialog:Y,setOpenLoginDialog:U})))),s.a.createElement(f.a,{fullWidth:!0,maxWidth:"xs",open:Q,onClose:function(){Y(!1)}},s.a.createElement(h.a,null,"Registration"),s.a.createElement(b.a,{dividers:!0},s.a.createElement(c.Suspense,{fallback:s.a.createElement("div",{style:{marginTop:400,display:"flex",flexDirection:"column",alignItems:"center"}},s.a.createElement(O.a,null))},s.a.createElement(w,{setOpenRegistrationDialog:Y,setOpenLoginDialog:U})))))}))}}]);
//# sourceMappingURL=17.be3a53d9.chunk.js.map