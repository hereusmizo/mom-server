(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[14],{426:function(e,t,n){"use strict";var a=n(2),r=n(10),o=n(1),i=n(0),c=(n(5),n(3)),s=n(4),l=n(21),u=n(410),m=n(26),d=n(9),b=n(59),p=n(394),f=n(427),g=i.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,s=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,g=r.horizontal,O=e.autoHideDuration,j=void 0===O?null:O,h=e.children,v=e.classes,E=e.className,x=e.ClickAwayListenerProps,y=e.ContentProps,w=e.disableWindowBlurListener,C=void 0!==w&&w,k=e.message,L=e.onClose,T=e.onEnter,S=e.onEntered,M=e.onEntering,z=e.onExit,R=e.onExited,D=e.onExiting,I=e.onMouseEnter,N=e.onMouseLeave,P=e.open,W=e.resumeHideDuration,B=e.TransitionComponent,H=void 0===B?p.a:B,A=e.transitionDuration,q=void 0===A?{enter:l.b.enteringScreen,exit:l.b.leavingScreen}:A,G=e.TransitionProps,J=Object(a.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),F=i.useRef(),V=i.useState(!0),X=V[0],K=V[1],Q=Object(m.a)((function(){L&&L.apply(void 0,arguments)})),U=Object(m.a)((function(e){L&&null!=e&&(clearTimeout(F.current),F.current=setTimeout((function(){Q(null,"timeout")}),e))}));i.useEffect((function(){return P&&U(j),function(){clearTimeout(F.current)}}),[P,j,U]);var Y=function(){clearTimeout(F.current)},Z=i.useCallback((function(){null!=j&&U(null!=W?W:.5*j)}),[j,W,U]);return i.useEffect((function(){if(!C&&P)return window.addEventListener("focus",Z),window.addEventListener("blur",Y),function(){window.removeEventListener("focus",Z),window.removeEventListener("blur",Y)}}),[C,Z,P]),!P&&X?null:i.createElement(u.a,Object(o.a)({onClickAway:function(e){L&&L(e,"clickaway")}},x),i.createElement("div",Object(o.a)({className:Object(c.a)(v.root,v["anchorOrigin".concat(Object(d.a)(s)).concat(Object(d.a)(g))],E),onMouseEnter:function(e){I&&I(e),Y()},onMouseLeave:function(e){N&&N(e),Z()},ref:t},J),i.createElement(H,Object(o.a)({appear:!0,in:P,onEnter:Object(b.a)((function(){K(!1)}),T),onEntered:S,onEntering:M,onExit:z,onExited:Object(b.a)((function(){K(!0)}),R),onExiting:D,timeout:q,direction:"top"===s?"down":"up"},G),h||i.createElement(f.a,Object(o.a)({message:k,action:n},y)))))}));t.a=Object(s.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},i={justifyContent:"flex-start"},c={top:24},s={bottom:24},l={right:24},u={left:24},m={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(o.a)({},t,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({},c,m))),anchorOriginBottomCenter:Object(o.a)({},n,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({},s,m))),anchorOriginTopRight:Object(o.a)({},t,a,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({left:"auto"},c,l))),anchorOriginBottomRight:Object(o.a)({},n,a,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({left:"auto"},s,l))),anchorOriginTopLeft:Object(o.a)({},t,i,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({right:"auto"},c,u))),anchorOriginBottomLeft:Object(o.a)({},n,i,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({right:"auto"},s,u)))}}),{flip:!1,name:"MuiSnackbar"})(g)},427:function(e,t,n){"use strict";var a=n(2),r=n(10),o=n(1),i=n(0),c=(n(5),n(3)),s=n(4),l=n(202),u=n(22),m=i.forwardRef((function(e,t){var n=e.action,r=e.classes,s=e.className,u=e.message,m=e.role,d=void 0===m?"alert":m,b=Object(a.a)(e,["action","classes","className","message","role"]);return i.createElement(l.a,Object(o.a)({role:d,square:!0,elevation:6,className:Object(c.a)(r.root,s),ref:t},b),i.createElement("div",{className:r.message},u),n?i.createElement("div",{className:r.action},n):null)}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(u.b)(e.palette.background.default,t);return{root:Object(o.a)({},e.typography.body2,Object(r.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(m)},428:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(12);t.a=Object(o.a)(r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},445:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(12);t.a=Object(o.a)(r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error")},460:function(e,t,n){"use strict";n.r(t);var a=n(421),r=n(16),o=n.n(r),i=n(35),c=n(24),s=n(0),l=n.n(s),u=n(408),m=n(490),d=n(409),b=n(426),p=n(427),f=n(401),g=n(58),O=n(36),j=n(42),h=n(89),v=n(445),E=n(428);t.default=Object(j.b)(null,{checkauth:O.a})((function(e){var t=e.checkauth,n=Object(s.useState)({email:"",password:""}),r=Object(c.a)(n,2),O=r[0],j=r[1],x=Object(s.useState)(!1),y=Object(c.a)(x,2),w=y[0],C=y[1],k=Object(s.useState)(!1),L=Object(c.a)(k,2),T=L[0],S=L[1],M=Object(s.useState)(null),z=Object(c.a)(M,2),R=z[0],D=z[1];Object(s.useEffect)((function(){document.title="MOM: Login"}),[]);var I=function(){var e=Object(i.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,C(!0),e.next=5,g.a.post("/api/admin/login",O);case 5:return a=e.sent,localStorage.setItem("mom-admin",a.data.token),j({email:"",password:""}),C(!1),e.abrupt("return",t());case 12:return e.prev=12,e.t0=e.catch(1),C(!1),D("Authentication failed. Try again!"),e.abrupt("return",S(!0));case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(u.a,{maxWidth:"xs"},l.a.createElement("div",{style:{marginTop:200,border:"1px solid #ddd",borderRadius:8,boxShadow:"1px 1px 1px #ddd",padding:20}},l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement("img",{alt:"Logo",style:{height:90,width:90,borderRadius:50,cursor:"pointer"},src:"/logo512.png"})),l.a.createElement("form",{onSubmit:I},l.a.createElement(m.a,{required:!0,fullWidth:!0,variant:"outlined",autoFocus:!0,type:"email",margin:"normal",size:"small",label:"Email",value:O.email,onChange:function(e){return j(Object(a.a)(Object(a.a)({},O),{},{email:e.target.value}))}}),l.a.createElement(m.a,{required:!0,type:"password",fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Password",value:O.password,onChange:function(e){return j(Object(a.a)(Object(a.a)({},O),{},{password:e.target.value}))}}),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10}},l.a.createElement(d.a,{disabled:w,type:"submit",variant:"contained",color:"primary"},"Login")))),l.a.createElement(b.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:T,autoHideDuration:3e3,onClose:function(){S(!1)}},l.a.createElement(p.a,{style:{backgroundColor:h.a[700]},message:l.a.createElement("span",{style:{display:"flex",alignItems:"center"}},l.a.createElement(v.a,{style:{marginRight:5}}),R),onClose:function(){S(!1)},action:l.a.createElement(f.a,{key:"close",color:"inherit",onClick:function(){return S(!1)}},l.a.createElement(E.a,null))})))}))}}]);
//# sourceMappingURL=14.a90fd944.chunk.js.map