(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[23],{423:function(e,t,a){"use strict";t.a="https://missionorganicmizoram.com/"},473:function(e,t,a){"use strict";a.r(t);var n=a(421),r=a(16),l=a.n(r),c=a(35),i=a(24),o=a(0),m=a.n(o),u=a(434),s=a(435),d=a(436),p=a(437),f=a(438),g=a(70),E=a(412),h=a(401),y=a(404),b=a(409),v=a(413),O=a(414),S=a(490),j=a(408),C=a(426),W=a(427),k=a(42),P=a(429),D=a.n(P),_=a(17),x=a(428),z=a(431),w=a(90),I=a(89),A=a(58),T=a(423),R=a(36);t.default=Object(k.b)((function(e){return{product:e.product}}),(function(e){return{update:function(t){e({type:"UPDATE_PRODUCT",payload:t})},remove:function(t){e({type:"REMOVE_PRODUCT",payload:t})},logout:function(){return e(Object(R.f)())}}}))(Object(_.g)((function(e){var t=e.logout,a=e.history,r=e.update,k=e.remove,P=e.product,_=Object(o.useState)({id:"",code:"",name:"",price:"",fssai_id:"",image:"",description:"",mom:"",status:"",created:"",mom_name:"",phone:"",email:"",address:"",district:"",upi:"",contact_person:""}),R=Object(i.a)(_,2),B=R[0],M=R[1],N=Object(o.useState)(!1),U=Object(i.a)(N,2),F=U[0],Y=U[1],q=Object(o.useState)(!1),H=Object(i.a)(q,2),J=H[0],L=H[1],V=Object(o.useState)(!1),G=Object(i.a)(V,2),K=G[0],Q=G[1],X=Object(o.useState)(!1),Z=Object(i.a)(X,2),$=Z[0],ee=Z[1],te=Object(o.useState)(null),ae=Object(i.a)(te,2),ne=ae[0],re=ae[1],le=Object(o.useState)(null),ce=Object(i.a)(le,2),ie=ce[0],oe=ce[1];Object(o.useEffect)((function(){document.title="Products"}),[]);var me=function(){var e=Object(c.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!localStorage.getItem("mom-admin")){e.next=22;break}return e.prev=2,Y(!0),e.next=6,A.a.patch("/api/product/".concat(B.id),B,{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 6:return r(B),Q(!1),oe(w.a[700]),re("Product Updated Successfully"),Y(!1),e.abrupt("return",ee(!0));case 14:return e.prev=14,e.t0=e.catch(2),Y(!1),oe(I.a[700]),re("Something went wrong"),e.abrupt("return",ee(!0));case 20:e.next=23;break;case 22:return e.abrupt("return",t());case 23:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("mom-admin")){e.next=18;break}return e.prev=1,e.next=4,A.a.patch("/api/product/status/".concat(B.id),{status:!B.status},{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 4:return r(Object(n.a)(Object(n.a)({},B),{},{status:!B.status})),M(Object(n.a)(Object(n.a)({},B),{},{status:!B.status})),oe(w.a[700]),re("Product Status Updated Successfully"),e.abrupt("return",ee(!0));case 11:return e.prev=11,e.t0=e.catch(1),oe(I.a[700]),re("Something went wrong"),e.abrupt("return",ee(!0));case 16:e.next=19;break;case 18:return e.abrupt("return",t());case 19:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("mom-admin")){e.next=22;break}return e.prev=1,Y(!0),e.next=5,A.a.delete("/api/product/".concat(B.id),{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 5:return k(B.id),M({id:"",code:"",name:"",price:"",fssai_id:"",image:"",description:"",mom:"",status:"",created:"",mom_name:"",phone:"",email:"",address:"",district:"",upi:"",contact_person:""}),L(!1),oe(w.a[700]),re("Product Deleted Successfully"),Y(!1),e.abrupt("return",ee(!0));case 14:return e.prev=14,e.t0=e.catch(1),Y(!1),oe(I.a[700]),re("Something went wrong"),e.abrupt("return",ee(!0));case 20:e.next=23;break;case 22:return e.abrupt("return",t());case 23:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(j.a,null,m.a.createElement(g.a,{variant:"h6"},m.a.createElement(h.a,{edge:"start",onClick:function(){a.goBack()}},m.a.createElement(z.a,null)),"Products Management"),m.a.createElement(y.a,{style:{marginTop:20}}),P.length?m.a.createElement(u.a,{size:"small"},m.a.createElement(s.a,null,m.a.createElement(d.a,null,m.a.createElement(p.a,{align:"center",padding:"checkbox"},"#"),m.a.createElement(p.a,null,"Name (MOM)"),m.a.createElement(p.a,null,"Phone"),m.a.createElement(p.a,null,"Product Name"),m.a.createElement(p.a,null,"Price"),m.a.createElement(p.a,null,"Approved"),m.a.createElement(p.a,null,"Created date"),m.a.createElement(p.a,null,"Featured Priority"))),m.a.createElement(f.a,null,P.map((function(e,t){return m.a.createElement(d.a,{hover:!0,key:t,style:{cursor:"pointer"},onClick:function(){M(Object(n.a)({},e)),L(!0)}},m.a.createElement(p.a,null,m.a.createElement(g.a,{align:"center"},t+1)),m.a.createElement(p.a,null,m.a.createElement(g.a,null,e.mom_name)),m.a.createElement(p.a,null,m.a.createElement(g.a,null,e.phone)),m.a.createElement(p.a,null,m.a.createElement(g.a,null,e.name)),m.a.createElement(p.a,null,m.a.createElement(g.a,null,e.price)),m.a.createElement(p.a,null,m.a.createElement(g.a,{style:{color:e.status?w.a[700]:I.a[700]}},e.status?"Yes":"No")),m.a.createElement(p.a,null,m.a.createElement(g.a,null,D()(e.created).format("DD MMMM YYYY"))),m.a.createElement(p.a,null,m.a.createElement(g.a,null,e.code)))})))):m.a.createElement(g.a,{align:"center",variant:"h6",style:{marginTop:300}},"NO DATA TO DISPLAY!"),m.a.createElement(E.a,{scroll:"body",fullWidth:!0,maxWidth:"xs",open:J,onClose:function(){M({id:"",code:"",name:"",price:"",fssai_id:"",image:"",description:"",mom:"",status:"",created:"",mom_name:"",phone:"",email:"",address:"",district:"",upi:"",contact_person:""}),L(!1)}},m.a.createElement("div",null,m.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%",position:"absolute"}},m.a.createElement(h.a,{onClick:function(){M({id:"",code:"",name:"",price:"",fssai_id:"",image:"",description:"",mom:"",status:"",created:"",mom_name:"",phone:"",email:"",address:"",district:"",upi:"",contact_person:""}),L(!1)}},m.a.createElement(x.a,null))),m.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:350}},m.a.createElement("img",{alt:B.name,src:"".concat(T.a).concat(B.image),style:{objectFit:"cover",width:"100%"}})),m.a.createElement("div",{style:{padding:10}},m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"NAME (MOM)"),m.a.createElement(g.a,{style:{fontWeight:500,marginBottom:8}},B.mom_name),m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"CONTACT PERSON"),m.a.createElement(g.a,{style:{fontWeight:500,marginBottom:8}},B.contact_person),B.district&&m.a.createElement(m.a.Fragment,null,m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"DISTRICT"),m.a.createElement(g.a,{style:{fontWeight:500,marginBottom:8}},B.district)),B.upi&&m.a.createElement(m.a.Fragment,null,m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"UPI ID"),m.a.createElement(g.a,{style:{fontWeight:500,marginBottom:8}},B.upi)),m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"PHONE"),m.a.createElement(g.a,{style:{fontWeight:500,marginBottom:8}},B.phone),m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"EMAIL ADDRESS"),m.a.createElement(g.a,{style:{fontWeight:500,marginBottom:8}},B.email),m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"ADDRESS"),m.a.createElement(g.a,{style:{fontWeight:500,marginBottom:8}},B.address),m.a.createElement(y.a,{style:{marginBottom:10,marginTop:10}}),m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"PRODUCT NAME"),m.a.createElement(g.a,{style:{fontWeight:500,marginBottom:8}},B.name),m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"PRICE"),m.a.createElement(g.a,{style:{fontWeight:500,marginBottom:8}},B.price),m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"FSSAI ID"),m.a.createElement(g.a,{style:{fontWeight:500,marginBottom:8}},B.fssai_id),m.a.createElement(g.a,{style:{fontSize:11,fontWeight:400}},"PRODUCT DESCRIPTION"),m.a.createElement(g.a,{style:{whiteSpace:"pre-line"}},B.description),m.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:20}},m.a.createElement(b.a,{variant:"contained",color:B.status?"secondary":"primary",onClick:ue,style:{marginRight:10}},B.status?"Disapprove":"Approve"),m.a.createElement(b.a,{variant:"contained",color:"primary",style:{marginRight:10},onClick:function(){Q(!0)}},"Edit"),m.a.createElement(b.a,{variant:"contained",color:"primary",style:{marginRight:10},onClick:function(){if(window.confirm("Are you sure you want to delete this product?"))return se()}},"Delete"),m.a.createElement(b.a,{variant:"contained",color:"primary",style:{marginRight:10},onClick:function(){M({id:"",code:"",name:"",price:"",fssai_id:"",image:"",description:"",mom:"",status:"",created:"",mom_name:"",phone:"",email:"",address:"",district:"",upi:"",contact_person:""}),L(!1)}},"Close"))))),m.a.createElement(E.a,{scroll:"body",open:K,onClose:function(){Q(!1)}},m.a.createElement(v.a,null,"Edit Product"),m.a.createElement(O.a,{dividers:!0},m.a.createElement("form",{onSubmit:me},m.a.createElement(S.a,{type:"number",fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Featured Product Priority (if not necessary, leave it blank)",value:B.code,onChange:function(e){return M(Object(n.a)(Object(n.a)({},B),{},{code:e.target.value}))}}),m.a.createElement(S.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Product Name",value:B.name,onChange:function(e){return M(Object(n.a)(Object(n.a)({},B),{},{name:e.target.value}))}}),m.a.createElement(S.a,{fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Price",value:B.price,onChange:function(e){return M(Object(n.a)(Object(n.a)({},B),{},{price:e.target.value}))}}),m.a.createElement(S.a,{fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"FSSAI ID",value:B.fssai_id,onChange:function(e){return M(Object(n.a)(Object(n.a)({},B),{},{fssai_id:e.target.value}))}}),m.a.createElement(S.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Product Description",multiline:!0,rows:5,value:B.description,onChange:function(e){return M(Object(n.a)(Object(n.a)({},B),{},{description:e.target.value}))}}),m.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10}},m.a.createElement(b.a,{disabled:F,type:"submit",variant:"contained",color:"primary",style:{marginRight:10}},"Update"),m.a.createElement(b.a,{variant:"contained",onClick:function(){Q(!1)}},"Cancel"))))),m.a.createElement(C.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:$,autoHideDuration:3e3,onClose:function(){ee(!1)}},m.a.createElement(W.a,{style:{backgroundColor:ie},message:ne,onClose:function(){ee(!1)},action:m.a.createElement(h.a,{key:"close",color:"inherit",onClick:function(){return ee(!1)}},m.a.createElement(x.a,null))})))})))}}]);
//# sourceMappingURL=23.834bd6c6.chunk.js.map