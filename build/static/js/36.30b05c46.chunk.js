(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[36],{469:function(e,a,t){"use strict";t.r(a);var n=t(421),r=t(37),l=t(16),i=t.n(l),c=t(35),o=t(24),u=t(0),m=t.n(u),s=t(434),d=t(435),p=t(436),b=t(437),f=t(438),g=t(70),v=t(412),h=t(413),E=t(414),O=t(490),j=t(409),y=t(408),C=t(401),k=t(404),S=t(426),x=t(427),z=t(42),w=t(17),W=t(431),P=t(467),I=t(428),_=t(90),A=t(89),D=t(58),q=t(36);a.default=Object(z.b)(null,{logout:q.f})(Object(w.g)((function(e){var a=e.logout,t=e.history,l=Object(u.useState)({id:"",name:"",phone:"",email:"",address:"",district:"",role:"",contact_person:"",upi:""}),z=Object(o.a)(l,2),w=z[0],q=z[1],M=Object(u.useState)(!1),N=Object(o.a)(M,2),T=N[0],F=N[1],R=Object(u.useState)(!1),B=Object(o.a)(R,2),U=B[0],G=B[1],J=Object(u.useState)(!1),Y=Object(o.a)(J,2),H=Y[0],L=Y[1],K=Object(u.useState)(!1),Q=Object(o.a)(K,2),V=Q[0],X=Q[1],Z=Object(u.useState)(null),$=Object(o.a)(Z,2),ee=$[0],ae=$[1],te=Object(u.useState)(null),ne=Object(o.a)(te,2),re=ne[0],le=ne[1],ie=Object(u.useState)([]),ce=Object(o.a)(ie,2),oe=ce[0],ue=ce[1];Object(u.useEffect)((function(){document.title="MOM",me()}),[]);var me=function(){var e=Object(c.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("/api/mom");case 3:return a=e.sent,e.abrupt("return",ue(a.data.data));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(c.a)(i.a.mark((function e(t){var l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!localStorage.getItem("mom-admin")){e.next=24;break}return e.prev=2,F(!0),e.next=6,D.a.post("/api/mom",w,{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 6:return l=e.sent,ue([].concat(Object(r.a)(oe),[Object(n.a)(Object(n.a)({},w),{},{id:l.data.id})])),q({id:"",name:"",phone:"",email:"",address:"",district:"",role:"",contact_person:"",upi:""}),le(_.a[700]),ae("Added successfully"),F(!1),G(!1),e.abrupt("return",X(!0));case 16:return e.prev=16,e.t0=e.catch(2),F(!1),le(A.a[700]),ae("Something went wrong"),e.abrupt("return",X(!0));case 22:e.next=25;break;case 24:return e.abrupt("return",a());case 25:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(a){return e.apply(this,arguments)}}(),de=function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!localStorage.getItem("mom-admin")){e.next=23;break}return e.prev=2,F(!0),e.next=6,D.a.patch("/api/mom/".concat(w.id),w,{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 6:return ue(oe.map((function(e){return e.id===w.id?w:e}))),q({id:"",name:"",phone:"",email:"",address:"",district:"",role:"",contact_person:"",upi:""}),L(!1),le(_.a[700]),ae("Updated Successfully"),F(!1),e.abrupt("return",X(!0));case 15:return e.prev=15,e.t0=e.catch(2),F(!1),le(A.a[700]),ae("Something went wrong"),e.abrupt("return",X(!0));case 21:e.next=24;break;case 23:return e.abrupt("return",a());case 24:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(a){return e.apply(this,arguments)}}(),pe=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("mom-admin")){e.next=22;break}return e.prev=1,F(!0),e.next=5,D.a.delete("/api/mom/".concat(w.id),{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 5:return ue(oe.filter((function(e){return e.id!==w.id}))),q({id:"",name:"",phone:"",email:"",address:"",district:"",role:"",contact_person:"",upi:""}),L(!1),le(_.a[700]),ae("Deleted Successfully"),F(!1),e.abrupt("return",X(!0));case 14:return e.prev=14,e.t0=e.catch(1),F(!1),le(A.a[700]),ae("Something went wrong"),e.abrupt("return",X(!0));case 20:e.next=23;break;case 22:return e.abrupt("return",a());case 23:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(y.a,null,m.a.createElement(g.a,{variant:"h6"},m.a.createElement(C.a,{edge:"start",onClick:function(){t.goBack()}},m.a.createElement(W.a,null)),"MOM Members Management"),m.a.createElement("div",{style:{display:"block",marginTop:8}},m.a.createElement(j.a,{variant:"contained",color:"secondary",startIcon:m.a.createElement(P.a,null),onClick:function(){return G(!0)}},"Add New")),m.a.createElement(k.a,{style:{marginTop:20}}),oe.length?m.a.createElement(s.a,{size:"small"},m.a.createElement(d.a,null,m.a.createElement(p.a,null,m.a.createElement(b.a,{padding:"checkbox"},"#"),m.a.createElement(b.a,null,"Name"),m.a.createElement(b.a,null,"Contact Person"),m.a.createElement(b.a,null,"Phone"),m.a.createElement(b.a,null,"District"),m.a.createElement(b.a,null,"Role"))),m.a.createElement(f.a,null,oe.map((function(e,a){return m.a.createElement(p.a,{hover:!0,key:a,style:{cursor:"pointer"},onClick:function(){q(Object(n.a)({},e)),L(!0)}},m.a.createElement(b.a,null,m.a.createElement(g.a,null,a+1)),m.a.createElement(b.a,null,m.a.createElement(g.a,null,e.name)),m.a.createElement(b.a,null,m.a.createElement(g.a,null,e.contact_person)),m.a.createElement(b.a,null,m.a.createElement(g.a,null,e.phone)),m.a.createElement(b.a,null,m.a.createElement(g.a,null,e.district)),m.a.createElement(b.a,null,m.a.createElement(g.a,null,e.role)))})))):m.a.createElement(g.a,{align:"center",variant:"h6",style:{marginTop:300}},"NO DATA TO DISPLAY!"),m.a.createElement(v.a,{fullWidth:!0,maxWidth:"xs",open:U,onClose:function(){q({id:"",name:"",phone:"",email:"",address:"",district:"",role:"",contact_person:""}),G(!1)}},m.a.createElement(h.a,null,"Add MOM"),m.a.createElement(E.a,{dividers:!0},m.a.createElement("form",{onSubmit:se},m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Name/Organisation Name",value:w.name,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{name:e.target.value}))}}),m.a.createElement(O.a,{fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Contact Person",value:w.contact_person,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{contact_person:e.target.value}))}}),m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",type:"number",size:"small",label:"Phone",value:w.phone,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{phone:e.target.value}))}}),m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",type:"email",label:"Email",value:w.email,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{email:e.target.value}))}}),m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Address",value:w.address,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{address:e.target.value}))}}),m.a.createElement(O.a,{fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"District",value:w.district,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{district:e.target.value}))}}),m.a.createElement(O.a,{fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"UPI ID",value:w.upi,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{upi:e.target.value}))}}),m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Role (Eg: FPO, FPC, FIG, Service Provider)",value:w.role,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{role:e.target.value}))}}),m.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10}},m.a.createElement(j.a,{disabled:T,type:"submit",variant:"contained",color:"primary",style:{marginRight:10}},"Submit"),m.a.createElement(j.a,{variant:"contained",onClick:function(){q({id:"",name:"",phone:"",email:"",address:"",district:"",role:"",contact_person:""}),G(!1)}},"Cancel"))))),m.a.createElement(v.a,{fullWidth:!0,maxWidth:"xs",open:H,onClose:function(){q({id:"",name:"",phone:"",email:"",address:"",district:"",role:"",contact_person:"",upi:""}),L(!1)}},m.a.createElement(h.a,null,"Edit MOM"),m.a.createElement(E.a,{dividers:!0},m.a.createElement("form",{onSubmit:de},m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Name/Organisation Name",value:w.name,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{name:e.target.value}))}}),m.a.createElement(O.a,{fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Contact Person",value:w.contact_person,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{contact_person:e.target.value}))}}),m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",type:"number",size:"small",label:"Phone",value:w.phone,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{phone:e.target.value}))}}),m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",type:"email",label:"Email",value:w.email,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{email:e.target.value}))}}),m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Address",value:w.address,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{address:e.target.value}))}}),m.a.createElement(O.a,{fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"District",value:w.district,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{district:e.target.value}))}}),m.a.createElement(O.a,{fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"UPI ID",value:w.upi,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{upi:e.target.value}))}}),m.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Role (Eg: FPO, FPC, FIG, Service Provider)",value:w.role,onChange:function(e){return q(Object(n.a)(Object(n.a)({},w),{},{role:e.target.value}))}}),m.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10}},m.a.createElement(j.a,{disabled:T,type:"submit",variant:"contained",color:"primary",style:{marginRight:10}},"Update"),m.a.createElement(j.a,{disabled:T,style:{marginRight:10},color:"secondary",variant:"contained",onClick:function(){if(window.confirm("Are you sure you want to delete? You cannot recover once deleted!"))return pe()}},"Delete"),m.a.createElement(j.a,{variant:"contained",onClick:function(){q({id:"",name:"",phone:"",email:"",address:"",district:"",role:"",contact_person:"",upi:""}),L(!1)}},"Cancel"))))),m.a.createElement(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:V,autoHideDuration:3e3,onClose:function(){X(!1)}},m.a.createElement(x.a,{style:{backgroundColor:re},message:ee,onClose:function(){X(!1)},action:m.a.createElement(C.a,{key:"close",color:"inherit",onClick:function(){return X(!1)}},m.a.createElement(I.a,null))})))})))}}]);
//# sourceMappingURL=36.30b05c46.chunk.js.map