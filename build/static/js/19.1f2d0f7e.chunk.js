(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[19],{423:function(e,t,a){"use strict";t.a="https://missionorganicmizoram.com/"},428:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(12);t.a=Object(i.a)(r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},488:function(e,t,a){"use strict";a.r(t);var n=a(421),r=a(16),i=a.n(r),c=a(35),l=a(24),o=a(0),s=a.n(o),u=a(403),m=a(70),d=a(412),p=a(401),f=a(503),y=a(409),g=a(408),h=a(413),b=a(414),E=a(415),v=a(58),x=a(423),O=a(428),j=a(42),k=Object(o.lazy)((function(){return a.e(5).then(a.bind(null,441))})),w=Object(o.lazy)((function(){return a.e(6).then(a.bind(null,442))}));t.default=Object(j.b)((function(e){return{auth:e.auth,profile:e.profile}}),null)((function(e){var t=e.auth,a=e.profile,r=Object(o.useState)(!1),j=Object(l.a)(r,2),C=j[0],S=j[1],W=Object(o.useState)({}),T=Object(l.a)(W,2),D=T[0],q=T[1],z=Object(o.useState)([]),R=Object(l.a)(z,2),B=R[0],L=R[1],P=Object(o.useState)(!1),I=Object(l.a)(P,2),F=I[0],J=I[1],M=Object(o.useState)(!1),A=Object(l.a)(M,2),K=A[0],Q=A[1],Y=Object(o.useState)(!1),G=Object(l.a)(Y,2),H=G[0],N=G[1],U=Object(o.useState)({quantity:0}),V=Object(l.a)(U,2),X=V[0],Z=V[1];Object(o.useEffect)((function(){document.title="Bulk Products",$()}),[]);var $=function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/bulk");case 3:return t=e.sent,e.abrupt("return",L(t.data.data));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/api/bulk-order",{bulk:D.id,customer:a.id,name:D.name,quantity:X.quantity});case 3:J(!0),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",alert("Sorry, something went wrong! Please try again."));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(g.a,{maxWidth:"md"},s.a.createElement(m.a,{variant:"h5",gutterBottom:!0,style:{fontWeight:700,marginBottom:20,marginTop:80},color:"primary"},"Bulk Products"),function(){if(B.length)return s.a.createElement(u.a,{container:!0,style:{marginTop:20},spacing:3},B.map((function(e,t){return s.a.createElement(u.a,{style:{cursor:"pointer"},onClick:function(){q(e),S(!0)},item:!0,key:t,xs:12,sm:12,md:6,lg:3,xl:3},s.a.createElement("div",{style:{border:"1px solid #eee",boxShadow:"1px 1px 8px #ddd",padding:0}},s.a.createElement("img",{alt:e.name,src:"".concat(x.a).concat(e.image),style:{objectFit:"contain",height:220,width:"100%"}}),s.a.createElement("div",{style:{backgroundColor:"#555",position:"sticky",opacity:.8,marginTop:-45,padding:10}},s.a.createElement(m.a,{style:{color:"white",fontWeight:500}},e.name))))})))}(),function(){if(D)return s.a.createElement(d.a,{scroll:"body",fullWidth:!0,maxWidth:"xs",open:C,onClose:function(){q({}),S(!1)}},s.a.createElement("div",null,s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%",position:"absolute"}},s.a.createElement(p.a,{onClick:function(){q({}),S(!1)}},s.a.createElement(O.a,null))),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("img",{alt:D.name,src:"".concat(x.a).concat(D.image),style:{objectFit:"contain",height:300,width:"100%"}})),s.a.createElement("div",{style:{padding:10}},s.a.createElement(m.a,{variant:"h6"},D.name),s.a.createElement(m.a,{style:{whiteSpace:"pre-line",marginTop:10}},D.description),s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:20}},s.a.createElement(m.a,{style:{margin:5}},"Quantity (in Metric Ton):"),s.a.createElement(f.a,{type:"number",variant:"outlined",size:"small",style:{width:80,marginRight:15},value:X.quantity,onChange:function(e){Z(Object(n.a)(Object(n.a)({},X),{},{quantity:e.target.value}))}}),s.a.createElement(y.a,{disabled:!(X.quantity>0),variant:"contained",color:"primary",onClick:function(){if(t){if(window.confirm("Are you sure you want to order this product?"))return _()}else Q(!0)}},"Place Order")))))}(),s.a.createElement(d.a,{fullWidth:!0,maxWidth:"xs",open:F,onClose:function(){J(!1)}},s.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:20}},s.a.createElement("img",{alt:"Success",src:"/success.png",style:{width:80}}),s.a.createElement(m.a,{align:"center",variant:"h6",style:{color:"#009688"}},"Your order has been submitted successfuly"),s.a.createElement(m.a,{align:"center",variant:"h6",style:{color:"#009688"}},"We shall contact you soon"),s.a.createElement(y.a,{onClick:function(){J(!1)},style:{marginTop:20,borderRadius:50},variant:"contained",color:"primary"},"OK"))),s.a.createElement(d.a,{fullWidth:!0,maxWidth:"xs",open:K,onClose:function(){Q(!1)}},s.a.createElement(h.a,null,"Login"),s.a.createElement(b.a,{dividers:!0},s.a.createElement(o.Suspense,{fallback:s.a.createElement("div",{style:{marginTop:400,display:"flex",flexDirection:"column",alignItems:"center"}},s.a.createElement(E.a,null))},s.a.createElement(k,{setOpenRegistrationDialog:N,setOpenLoginDialog:Q})))),s.a.createElement(d.a,{fullWidth:!0,maxWidth:"xs",open:H,onClose:function(){N(!1)}},s.a.createElement(h.a,null,"Registration"),s.a.createElement(b.a,{dividers:!0},s.a.createElement(o.Suspense,{fallback:s.a.createElement("div",{style:{marginTop:400,display:"flex",flexDirection:"column",alignItems:"center"}},s.a.createElement(E.a,null))},s.a.createElement(w,{setOpenRegistrationDialog:N,setOpenLoginDialog:Q})))))}))}}]);
//# sourceMappingURL=19.1f2d0f7e.chunk.js.map