(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[28],{431:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(12);a.a=Object(l.a)(r.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},493:function(e,a,t){"use strict";t.r(a);var n=t(421),r=t(16),l=t.n(r),i=t(35),o=t(24),c=t(0),u=t.n(c),m=t(408),s=t(70),d=t(401),p=t(409),f=t(412),h=t(413),g=t(414),b=t(503),v=t(415),E=t(431),w=t(17),y=t(42),O=t(58);a.default=Object(y.b)((function(e){return{decoded:e.decoded}}),null)(Object(w.g)((function(e){var a=e.history,t=e.decoded,r=Object(c.useState)({}),w=Object(o.a)(r,2),y=w[0],j=w[1],x=Object(c.useState)(!1),k=Object(o.a)(x,2),C=k[0],S=k[1],W=Object(c.useState)(!1),z=Object(o.a)(W,2),P=z[0],I=z[1],B=Object(c.useState)({name:"",phone:"",email:"",type:""}),q=Object(o.a)(B,2),T=q[0],A=q[1],D=Object(c.useState)({old:"",new:"",confirm:""}),F=Object(o.a)(D,2),H=F[0],J=F[1];Object(c.useEffect)((function(){L()}),[]);var L=function(){var e=Object(i.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("mom-admin")){e.next=11;break}return e.prev=1,e.next=4,O.a.get("/api/admin/".concat(t.id),{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 4:a=e.sent,j(a.data.data),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",j({}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!localStorage.getItem("mom-admin")){e.next=13;break}return e.prev=2,e.next=5,O.a.patch("/api/admin/".concat(t.id),T,{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 5:return L(),A({name:"",phone:"",email:"",type:""}),e.abrupt("return",S(!1));case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",alert("Something went wrong"));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),H.new!==H.confirm){e.next=15;break}if(!localStorage.getItem("mom-admin")){e.next=13;break}return e.prev=3,e.next=6,O.a.patch("/api/admin/password/".concat(t.id),H,{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 6:return J({old:"",new:"",confirm:""}),e.abrupt("return",I(!1));case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",alert("Something went wrong"));case 13:e.next=16;break;case 15:return e.abrupt("return",alert("Confirm password must be same as new password went wrong"));case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(a){return e.apply(this,arguments)}}();return Object.keys(y).length?u.a.createElement(m.a,null,u.a.createElement(s.a,{variant:"h6"},u.a.createElement(d.a,{edge:"start",onClick:function(){a.goBack()}},u.a.createElement(E.a,null)),"Account Settings"),u.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},u.a.createElement("div",{style:{flexGrow:1,marginTop:10}},u.a.createElement(s.a,{align:"center",style:{fontSize:18,fontWeight:600}},y.name),u.a.createElement(s.a,{align:"center",style:{fontWeight:400}},"Phone: ",y.phone),u.a.createElement(s.a,{align:"center",style:{fontWeight:400}},"Email: ",y.email),u.a.createElement(p.a,{color:"secondary",onClick:function(){A(y),S(!0)}},"Edit Profile"),u.a.createElement(p.a,{color:"secondary",onClick:I},"Change Password"))),u.a.createElement(f.a,{fullWidth:!0,maxWidth:"xs",open:C,onClose:function(){A({name:"",phone:"",email:"",type:""}),S(!1)}},u.a.createElement(h.a,null,"Edit My Profile"),u.a.createElement(g.a,null,u.a.createElement("form",{onSubmit:M},u.a.createElement(b.a,{autoFocus:!0,required:!0,label:"Name",margin:"dense",fullWidth:!0,variant:"outlined",size:"small",value:T.name,onChange:function(e){return A(Object(n.a)(Object(n.a)({},T),{},{name:e.target.value}))}}),u.a.createElement(b.a,{type:"phone",required:!0,margin:"dense",label:"Phone",fullWidth:!0,variant:"outlined",size:"small",value:T.phone,onChange:function(e){return A(Object(n.a)(Object(n.a)({},T),{},{phone:e.target.value}))}}),u.a.createElement(b.a,{type:"email",required:!0,margin:"dense",label:"Email",fullWidth:!0,variant:"outlined",size:"small",value:T.email,onChange:function(e){return A(Object(n.a)(Object(n.a)({},T),{},{email:e.target.value}))}}),u.a.createElement(p.a,{style:{marginTop:20},type:"submit",color:"primary",variant:"contained",size:"small",fullWidth:!0},"Save"),u.a.createElement(p.a,{onClick:function(){A({name:"",phone:"",email:"",type:""}),S(!1)},style:{marginTop:10,marginBottom:20},variant:"contained",size:"small",fullWidth:!0},"Cancel")))),u.a.createElement(f.a,{fullWidth:!0,maxWidth:"xs",open:P,onClose:function(){J({old:"",new:"",confirm:""}),I(!1)}},u.a.createElement(h.a,null,"Change Password"),u.a.createElement(g.a,null,u.a.createElement("form",{onSubmit:N},u.a.createElement(b.a,{required:!0,margin:"dense",autoFocus:!0,label:"Old Password",fullWidth:!0,type:"password",variant:"outlined",size:"small",value:H.old,onChange:function(e){return J(Object(n.a)(Object(n.a)({},H),{},{old:e.target.value}))}}),u.a.createElement(b.a,{required:!0,margin:"dense",label:"New Password",fullWidth:!0,type:"password",variant:"outlined",size:"small",value:H.new,onChange:function(e){return J(Object(n.a)(Object(n.a)({},H),{},{new:e.target.value}))}}),u.a.createElement(b.a,{required:!0,margin:"dense",label:"Confirm Password",fullWidth:!0,type:"password",variant:"outlined",size:"small",value:H.confirm,onChange:function(e){return J(Object(n.a)(Object(n.a)({},H),{},{confirm:e.target.value}))}}),u.a.createElement(p.a,{style:{marginTop:20},type:"submit",color:"primary",variant:"contained",size:"small",fullWidth:!0},"Save"),u.a.createElement(p.a,{onClick:function(){J({old:"",new:"",confirm:""}),I(!1)},style:{marginTop:10,marginBottom:20},variant:"contained",size:"small",fullWidth:!0},"Cancel"))))):u.a.createElement("div",{style:{marginTop:400,display:"flex",flexDirection:"column",alignItems:"center"}},u.a.createElement(v.a,null))})))}}]);
//# sourceMappingURL=28.bcbe2cdd.chunk.js.map