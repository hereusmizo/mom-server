(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[38],{485:function(e,t,a){"use strict";a.r(t);var n=a(421),r=a(37),c=a(16),i=a.n(c),o=a(35),l=a(24),u=a(0),s=a.n(u),m=a(434),d=a(435),p=a(436),b=a(437),f=a(438),g=a(70),v=a(412),h=a(413),E=a(414),O=a(503),j=a(409),y=a(408),k=a(401),S=a(404),w=a(426),C=a(427),x=a(42),D=a(429),N=a.n(D),z=a(17),I=a(431),W=a(480),A=a(428),T=a(90),Y=a(89),M=a(58),q=a(36);t.default=Object(x.b)(null,{logout:q.f})(Object(z.g)((function(e){var t=e.logout,a=e.history,c=Object(u.useState)({id:"",caption:"",description:"",created:""}),x=Object(l.a)(c,2),D=x[0],z=x[1],q=Object(u.useState)(!1),B=Object(l.a)(q,2),P=B[0],R=B[1],J=Object(u.useState)(!1),U=Object(l.a)(J,2),H=U[0],L=U[1],F=Object(u.useState)(!1),G=Object(l.a)(F,2),K=G[0],Q=G[1],V=Object(u.useState)(!1),X=Object(l.a)(V,2),Z=X[0],$=X[1],_=Object(u.useState)(null),ee=Object(l.a)(_,2),te=ee[0],ae=ee[1],ne=Object(u.useState)(null),re=Object(l.a)(ne,2),ce=re[0],ie=re[1],oe=Object(u.useState)([]),le=Object(l.a)(oe,2),ue=le[0],se=le[1];Object(u.useEffect)((function(){document.title="Notice",me()}),[]);var me=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("/api/notice");case 3:return t=e.sent,e.abrupt("return",se(t.data.data));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(o.a)(i.a.mark((function e(a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!localStorage.getItem("mom-admin")){e.next=24;break}return e.prev=2,R(!0),e.next=6,M.a.post("/api/notice",D,{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 6:return c=e.sent,se([].concat(Object(r.a)(ue),[Object(n.a)(Object(n.a)({},D),{},{id:c.data.id,created:new Date})])),z({id:"",caption:"",description:"",created:""}),ie(T.a[700]),ae("Notice Published Successfully"),R(!1),L(!1),e.abrupt("return",$(!0));case 16:return e.prev=16,e.t0=e.catch(2),R(!1),ie(Y.a[700]),ae("Something went wrong"),e.abrupt("return",$(!0));case 22:e.next=25;break;case 24:return e.abrupt("return",t());case 25:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(o.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!localStorage.getItem("mom-admin")){e.next=23;break}return e.prev=2,R(!0),e.next=6,M.a.patch("/api/notice/".concat(D.id),D,{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 6:return se(ue.map((function(e){return e.id===D.id?D:e}))),z({id:"",caption:"",description:"",created:""}),Q(!1),ie(T.a[700]),ae("Notice Updated Successfully"),R(!1),e.abrupt("return",$(!0));case 15:return e.prev=15,e.t0=e.catch(2),R(!1),ie(Y.a[700]),ae("Something went wrong"),e.abrupt("return",$(!0));case 21:e.next=24;break;case 23:return e.abrupt("return",t());case 24:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("mom-admin")){e.next=22;break}return e.prev=1,R(!0),e.next=5,M.a.delete("/api/notice/".concat(D.id),{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 5:return se(ue.filter((function(e){return e.id!==D.id}))),z({id:"",caption:"",description:"",created:""}),Q(!1),ie(T.a[700]),ae("Notice Deleted Successfully"),R(!1),e.abrupt("return",$(!0));case 14:return e.prev=14,e.t0=e.catch(1),R(!1),ie(Y.a[700]),ae("Something went wrong"),e.abrupt("return",$(!0));case 20:e.next=23;break;case 22:return e.abrupt("return",t());case 23:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(y.a,null,s.a.createElement(g.a,{variant:"h6"},s.a.createElement(k.a,{edge:"start",onClick:function(){a.goBack()}},s.a.createElement(I.a,null)),"MOM Notice Management"),s.a.createElement("div",{style:{display:"block",marginTop:8}},s.a.createElement(j.a,{variant:"contained",color:"secondary",startIcon:s.a.createElement(W.a,null),onClick:function(){return L(!0)}},"Post new notice")),s.a.createElement(S.a,{style:{marginTop:20}}),ue.length?s.a.createElement(m.a,{size:"small"},s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement(b.a,null,"Date"),s.a.createElement(b.a,null,"Caption"))),s.a.createElement(f.a,null,ue.map((function(e,t){return s.a.createElement(p.a,{hover:!0,key:t,style:{cursor:"pointer"},onClick:function(){z(Object(n.a)({},e)),Q(!0)}},s.a.createElement(b.a,null,s.a.createElement(g.a,null,N()(e.created).format("DD-MM-YYYY"))),s.a.createElement(b.a,null,s.a.createElement(g.a,null,e.caption)))})))):s.a.createElement(g.a,{align:"center",variant:"h6",style:{marginTop:300}},"NO DATA TO DISPLAY!"),s.a.createElement(v.a,{fullWidth:!0,maxWidth:"xs",open:H,onClose:function(){z({id:"",caption:"",description:"",created:""}),L(!1)}},s.a.createElement(h.a,null,"Publish Notice"),s.a.createElement(E.a,{dividers:!0},s.a.createElement("form",{onSubmit:de},s.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Notice Caption",value:D.caption,onChange:function(e){return z(Object(n.a)(Object(n.a)({},D),{},{caption:e.target.value}))}}),s.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Description",multiline:!0,rows:5,value:D.description,onChange:function(e){return z(Object(n.a)(Object(n.a)({},D),{},{description:e.target.value}))}}),s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10}},s.a.createElement(j.a,{disabled:P,type:"submit",variant:"contained",color:"primary",style:{marginRight:10}},"Submit"),s.a.createElement(j.a,{variant:"contained",onClick:function(){z({id:"",caption:"",description:"",created:""}),L(!1)}},"Cancel"))))),s.a.createElement(v.a,{fullWidth:!0,maxWidth:"xs",open:K,onClose:function(){z({id:"",caption:"",description:"",created:""}),Q(!1)}},s.a.createElement(h.a,null,"Edit Notice"),s.a.createElement(E.a,{dividers:!0},s.a.createElement("form",{onSubmit:pe},s.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Notice Caption",value:D.caption,onChange:function(e){return z(Object(n.a)(Object(n.a)({},D),{},{caption:e.target.value}))}}),s.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Description",multiline:!0,rows:5,value:D.description,onChange:function(e){return z(Object(n.a)(Object(n.a)({},D),{},{description:e.target.value}))}}),s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10}},s.a.createElement(j.a,{disabled:P,type:"submit",variant:"contained",color:"primary",style:{marginRight:10}},"Update"),s.a.createElement(j.a,{disabled:P,style:{marginRight:10},color:"secondary",variant:"contained",onClick:function(){if(window.confirm("Are you sure you want to delete notice? You cannot recover once deleted!"))return be()}},"Delete"),s.a.createElement(j.a,{variant:"contained",onClick:function(){z({id:"",caption:"",description:"",created:""}),Q(!1)}},"Cancel"))))),s.a.createElement(w.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:Z,autoHideDuration:3e3,onClose:function(){$(!1)}},s.a.createElement(C.a,{style:{backgroundColor:ce},message:te,onClose:function(){$(!1)},action:s.a.createElement(k.a,{key:"close",color:"inherit",onClick:function(){return $(!1)}},s.a.createElement(A.a,null))})))})))}}]);
//# sourceMappingURL=38.3809a5e6.chunk.js.map