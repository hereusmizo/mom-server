(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[35],{470:function(e,t,a){"use strict";a.r(t);var n=a(421),r=a(37),l=a(16),i=a.n(l),c=a(35),o=a(24),u=a(0),m=a.n(u),s=a(434),d=a(435),p=a(436),b=a(437),f=a(438),h=a(70),g=a(412),v=a(413),E=a(414),O=a(490),j=a(409),y=a(408),k=a(401),S=a(404),x=a(426),w=a(427),C=a(42),H=a(17),A=a(431),T=a(467),z=a(428),I=a(90),N=a(89),W=a(58),D=a(36);t.default=Object(C.b)(null,{logout:D.f})(Object(H.g)((function(e){var t=e.logout,a=e.history,l=Object(u.useState)({id:"",title:"",phone:""}),C=Object(o.a)(l,2),H=C[0],D=C[1],q=Object(u.useState)(!1),B=Object(o.a)(q,2),P=B[0],R=B[1],J=Object(u.useState)(!1),U=Object(o.a)(J,2),Y=U[0],L=U[1],M=Object(u.useState)(!1),F=Object(o.a)(M,2),G=F[0],K=F[1],Q=Object(u.useState)(!1),V=Object(o.a)(Q,2),X=V[0],Z=V[1],$=Object(u.useState)(null),_=Object(o.a)($,2),ee=_[0],te=_[1],ae=Object(u.useState)(null),ne=Object(o.a)(ae,2),re=ne[0],le=ne[1],ie=Object(u.useState)([]),ce=Object(o.a)(ie,2),oe=ce[0],ue=ce[1];Object(u.useEffect)((function(){document.title="Helpline",me()}),[]);var me=function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("/api/helpline");case 3:return t=e.sent,e.abrupt("return",ue(t.data.data));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(c.a)(i.a.mark((function e(a){var l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!localStorage.getItem("mom-admin")){e.next=23;break}return e.prev=2,R(!0),e.next=6,W.a.post("/api/helpline",H,{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 6:return l=e.sent,ue([].concat(Object(r.a)(oe),[Object(n.a)(Object(n.a)({},H),{},{id:l.data.id})])),D({id:"",title:"",phone:""}),le(I.a[700]),te("Helpline Added Successfully"),R(!1),e.abrupt("return",Z(!0));case 15:return e.prev=15,e.t0=e.catch(2),R(!1),le(N.a[700]),te("Something went wrong"),e.abrupt("return",Z(!0));case 21:e.next=24;break;case 23:return e.abrupt("return",t());case 24:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(c.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!localStorage.getItem("mom-admin")){e.next=23;break}return e.prev=2,R(!0),e.next=6,W.a.patch("/api/helpline/".concat(H.id),H,{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 6:return ue(oe.map((function(e){return e.id===H.id?H:e}))),D({id:"",title:"",phone:""}),K(!1),le(I.a[700]),te("Helpline Updated Successfully"),R(!1),e.abrupt("return",Z(!0));case 15:return e.prev=15,e.t0=e.catch(2),R(!1),le(N.a[700]),te("Something went wrong"),e.abrupt("return",Z(!0));case 21:e.next=24;break;case 23:return e.abrupt("return",t());case 24:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("mom-admin")){e.next=22;break}return e.prev=1,R(!0),e.next=5,W.a.delete("/api/helpline/".concat(H.id),{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 5:return ue(oe.filter((function(e){return e.id!==H.id}))),D({id:"",title:"",phone:""}),K(!1),le(I.a[700]),te("Helpline Deleted Successfully"),R(!1),e.abrupt("return",Z(!0));case 14:return e.prev=14,e.t0=e.catch(1),R(!1),le(N.a[700]),te("Something went wrong"),e.abrupt("return",Z(!0));case 20:e.next=23;break;case 22:return e.abrupt("return",t());case 23:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(y.a,null,m.a.createElement(h.a,{variant:"h6"},m.a.createElement(k.a,{edge:"start",onClick:function(){a.goBack()}},m.a.createElement(A.a,null)),"Helpline Management"),m.a.createElement("div",{style:{display:"block",marginTop:8}},m.a.createElement(j.a,{variant:"contained",color:"secondary",startIcon:m.a.createElement(T.a,null),onClick:function(){return L(!0)}},"Add New Helpline")),m.a.createElement(S.a,{style:{marginTop:20}}),oe.length?m.a.createElement(s.a,{size:"small"},m.a.createElement(d.a,null,m.a.createElement(p.a,null,m.a.createElement(b.a,{align:"center",padding:"checkbox"},"#"),m.a.createElement(b.a,null,"Title"),m.a.createElement(b.a,null,"Phone Number"))),m.a.createElement(f.a,null,oe.map((function(e,t){return m.a.createElement(p.a,{hover:!0,key:t,style:{cursor:"pointer"},onClick:function(){D(Object(n.a)({},e)),K(!0)}},m.a.createElement(b.a,null,m.a.createElement(h.a,{align:"center"},t+1)),m.a.createElement(b.a,null,m.a.createElement(h.a,null,e.title)),m.a.createElement(b.a,null,m.a.createElement(h.a,null,e.phone)))})))):m.a.createElement(h.a,{align:"center",variant:"h6",style:{marginTop:300}},"NO DATA TO DISPLAY!"),m.a.createElement(g.a,{fullWidth:!0,maxWidth:"xs",open:Y,onClose:function(){D({id:"",title:"",phone:""}),L(!1)}},m.a.createElement(v.a,null,"Add New Helpline"),m.a.createElement(E.a,{dividers:!0},m.a.createElement("form",{onSubmit:se},m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Helpline Title/Name",value:H.title,onChange:function(e){return D(Object(n.a)(Object(n.a)({},H),{},{title:e.target.value}))}}),m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Phone Number",value:H.phone,onChange:function(e){return D(Object(n.a)(Object(n.a)({},H),{},{phone:e.target.value}))}}),m.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10}},m.a.createElement(j.a,{disabled:P,type:"submit",variant:"contained",color:"primary",style:{marginRight:10}},"Submit"),m.a.createElement(j.a,{variant:"contained",onClick:function(){D({id:"",title:"",phone:""}),L(!1)}},"Cancel"))))),m.a.createElement(g.a,{fullWidth:!0,maxWidth:"xs",open:G,onClose:function(){D({id:"",title:"",phone:""}),K(!1)}},m.a.createElement(v.a,null,"Edit Helpline"),m.a.createElement(E.a,{dividers:!0},m.a.createElement("form",{onSubmit:de},m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Helpline Title/Name",value:H.title,onChange:function(e){return D(Object(n.a)(Object(n.a)({},H),{},{title:e.target.value}))}}),m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Phone Number",value:H.phone,onChange:function(e){return D(Object(n.a)(Object(n.a)({},H),{},{phone:e.target.value}))}}),m.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10}},m.a.createElement(j.a,{disabled:P,type:"submit",variant:"contained",color:"primary",style:{marginRight:10}},"Update"),m.a.createElement(j.a,{disabled:P,style:{marginRight:10},color:"secondary",variant:"contained",onClick:function(){if(window.confirm("Are you sure you want to delete ".concat(H.title,"? You cannot recover once deleted!")))return pe()}},"Delete"),m.a.createElement(j.a,{variant:"contained",onClick:function(){D({id:"",title:"",phone:""}),K(!1)}},"Cancel"))))),m.a.createElement(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:X,autoHideDuration:3e3,onClose:function(){Z(!1)}},m.a.createElement(w.a,{style:{backgroundColor:re},message:ee,onClose:function(){Z(!1)},action:m.a.createElement(k.a,{key:"close",color:"inherit",onClick:function(){return Z(!1)}},m.a.createElement(z.a,null))})))})))}}]);
//# sourceMappingURL=35.ace64d31.chunk.js.map