(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[6],{426:function(e,t,n){"use strict";var a=n(2),r=n(10),o=n(1),i=n(0),c=(n(5),n(3)),l=n(4),s=n(21),u=n(410),m=n(26),d=n(9),b=n(59),p=n(394),f=n(427),g=i.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,l=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,g=r.horizontal,O=e.autoHideDuration,j=void 0===O?null:O,h=e.children,v=e.classes,E=e.className,y=e.ClickAwayListenerProps,w=e.ContentProps,C=e.disableWindowBlurListener,x=void 0!==C&&C,k=e.message,L=e.onClose,S=e.onEnter,T=e.onEntered,R=e.onEntering,D=e.onExit,N=e.onExited,z=e.onExiting,W=e.onMouseEnter,M=e.onMouseLeave,P=e.open,A=e.resumeHideDuration,q=e.TransitionComponent,I=void 0===q?p.a:q,B=e.transitionDuration,H=void 0===B?{enter:s.b.enteringScreen,exit:s.b.leavingScreen}:B,F=e.TransitionProps,G=Object(a.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),J=i.useRef(),X=i.useState(!0),K=X[0],Q=X[1],U=Object(m.a)((function(){L&&L.apply(void 0,arguments)})),V=Object(m.a)((function(e){L&&null!=e&&(clearTimeout(J.current),J.current=setTimeout((function(){U(null,"timeout")}),e))}));i.useEffect((function(){return P&&V(j),function(){clearTimeout(J.current)}}),[P,j,V]);var Y=function(){clearTimeout(J.current)},Z=i.useCallback((function(){null!=j&&V(null!=A?A:.5*j)}),[j,A,V]);return i.useEffect((function(){if(!x&&P)return window.addEventListener("focus",Z),window.addEventListener("blur",Y),function(){window.removeEventListener("focus",Z),window.removeEventListener("blur",Y)}}),[x,Z,P]),!P&&K?null:i.createElement(u.a,Object(o.a)({onClickAway:function(e){L&&L(e,"clickaway")}},y),i.createElement("div",Object(o.a)({className:Object(c.a)(v.root,v["anchorOrigin".concat(Object(d.a)(l)).concat(Object(d.a)(g))],E),onMouseEnter:function(e){W&&W(e),Y()},onMouseLeave:function(e){M&&M(e),Z()},ref:t},G),i.createElement(I,Object(o.a)({appear:!0,in:P,onEnter:Object(b.a)((function(){Q(!1)}),S),onEntered:T,onEntering:R,onExit:D,onExited:Object(b.a)((function(){Q(!0)}),N),onExiting:z,timeout:H,direction:"top"===l?"down":"up"},F),h||i.createElement(f.a,Object(o.a)({message:k,action:n},w)))))}));t.a=Object(l.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},i={justifyContent:"flex-start"},c={top:24},l={bottom:24},s={right:24},u={left:24},m={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(o.a)({},t,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({},c,m))),anchorOriginBottomCenter:Object(o.a)({},n,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({},l,m))),anchorOriginTopRight:Object(o.a)({},t,a,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({left:"auto"},c,s))),anchorOriginBottomRight:Object(o.a)({},n,a,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({left:"auto"},l,s))),anchorOriginTopLeft:Object(o.a)({},t,i,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({right:"auto"},c,u))),anchorOriginBottomLeft:Object(o.a)({},n,i,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({right:"auto"},l,u)))}}),{flip:!1,name:"MuiSnackbar"})(g)},427:function(e,t,n){"use strict";var a=n(2),r=n(10),o=n(1),i=n(0),c=(n(5),n(3)),l=n(4),s=n(202),u=n(22),m=i.forwardRef((function(e,t){var n=e.action,r=e.classes,l=e.className,u=e.message,m=e.role,d=void 0===m?"alert":m,b=Object(a.a)(e,["action","classes","className","message","role"]);return i.createElement(s.a,Object(o.a)({role:d,square:!0,elevation:6,className:Object(c.a)(r.root,l),ref:t},b),i.createElement("div",{className:r.message},u),n?i.createElement("div",{className:r.action},n):null)}));t.a=Object(l.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(u.b)(e.palette.background.default,t);return{root:Object(o.a)({},e.typography.body2,Object(r.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(m)},442:function(e,t,n){"use strict";n.r(t);var a=n(421),r=n(16),o=n.n(r),i=n(35),c=n(24),l=n(0),s=n.n(l),u=n(503),m=n(70),d=n(409),b=n(426),p=n(427),f=n(401),g=n(36),O=n(42),j=n(428),h=n(58),v=n(90),E=n(89);t.default=Object(O.b)(null,{checkAuth:g.a})((function(e){var t=e.checkAuth,n=e.setOpenRegistrationDialog,r=e.setOpenLoginDialog,g=Object(l.useState)(null),O=Object(c.a)(g,2),y=O[0],w=O[1],C=Object(l.useState)(!1),x=Object(c.a)(C,2),k=x[0],L=x[1],S=Object(l.useState)(null),T=Object(c.a)(S,2),R=T[0],D=T[1],N=Object(l.useState)(!1),z=Object(c.a)(N,2),W=z[0],M=z[1],P=Object(l.useState)({name:"",phone:"",email:"",address:"",password:""}),A=Object(c.a)(P,2),q=A[0],I=A[1];Object(l.useEffect)((function(){return function(){I({name:"",phone:"",email:"",address:"",password:""})}}),[]);var B=function(){var e=Object(i.a)(o.a.mark((function e(a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,M(!0),e.next=5,h.a.post("/api/customer",q);case 5:return r=e.sent,localStorage.setItem("mom-customer",r.data.token),I({name:"",phone:"",email:"",address:"",password:""}),t(),M(!1),w(v.a[700]),D("Registration Completed Successfully"),n(!1),e.abrupt("return",L(!0));case 16:return e.prev=16,e.t0=e.catch(1),M(!1),w(E.a[700]),D("Registration failed. Something went wrong"),e.abrupt("return",L(!0));case 22:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("img",{alt:"registration",src:"/logo512.png",style:{height:80,width:80}})),s.a.createElement("form",{onSubmit:B},s.a.createElement(u.a,{required:!0,fullWidth:!0,variant:"outlined",autoFocus:!0,margin:"normal",size:"small",label:"Name",value:q.name,onChange:function(e){return I(Object(a.a)(Object(a.a)({},q),{},{name:e.target.value}))}}),s.a.createElement(u.a,{required:!0,fullWidth:!0,variant:"outlined",type:"number",margin:"normal",size:"small",label:"Phone Number",value:q.phone,onChange:function(e){return I(Object(a.a)(Object(a.a)({},q),{},{phone:e.target.value}))}}),s.a.createElement(u.a,{required:!0,fullWidth:!0,variant:"outlined",type:"email",margin:"normal",size:"small",label:"Email",value:q.email,onChange:function(e){return I(Object(a.a)(Object(a.a)({},q),{},{email:e.target.value}))}}),s.a.createElement(u.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Address (Locality, City, District, State)",value:q.address,onChange:function(e){return I(Object(a.a)(Object(a.a)({},q),{},{address:e.target.value}))}}),s.a.createElement(u.a,{required:!0,type:"password",fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Password",value:q.password,onChange:function(e){return I(Object(a.a)(Object(a.a)({},q),{},{password:e.target.value}))}}),s.a.createElement(m.a,{align:"center",style:{marginTop:40}},"Already have an account?"," ",s.a.createElement(d.a,{color:"primary",onClick:function(){n(!1),r(!0)}},"Login Now")),s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:40}},s.a.createElement(d.a,{disabled:W,type:"submit",variant:"contained",color:"primary"},"Register"),s.a.createElement(d.a,{style:{marginLeft:10},type:"cancel",onClick:function(){I({name:"",phone:"",email:"",address:"",password:""}),n(!1)},variant:"contained",color:"secondary"},"Close"))),s.a.createElement(b.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:k,autoHideDuration:3e3,onClose:function(){L(!1)}},s.a.createElement(p.a,{style:{backgroundColor:y},message:R,onClose:function(){L(!1)},action:s.a.createElement(f.a,{key:"close",color:"inherit",onClick:function(){return L(!1)}},s.a.createElement(j.a,null))})))}))}}]);
//# sourceMappingURL=6.432729cc.chunk.js.map