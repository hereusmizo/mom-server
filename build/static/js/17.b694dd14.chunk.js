(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[17],{426:function(e,t,a){"use strict";var n=a(2),r=a(10),o=a(1),i=a(0),l=(a(5),a(3)),c=a(4),s=a(21),u=a(410),m=a(26),d=a(9),b=a(59),f=a(394),p=a(427),g=i.forwardRef((function(e,t){var a=e.action,r=e.anchorOrigin,c=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,g=r.horizontal,O=e.autoHideDuration,h=void 0===O?null:O,j=e.children,E=e.classes,v=e.className,y=e.ClickAwayListenerProps,x=e.ContentProps,C=e.disableWindowBlurListener,w=void 0!==C&&C,k=e.message,z=e.onClose,L=e.onEnter,T=e.onEntered,S=e.onEntering,M=e.onExit,W=e.onExited,D=e.onExiting,N=e.onMouseEnter,B=e.onMouseLeave,R=e.open,q=e.resumeHideDuration,P=e.TransitionComponent,A=void 0===P?f.a:P,I=e.transitionDuration,H=void 0===I?{enter:s.b.enteringScreen,exit:s.b.leavingScreen}:I,G=e.TransitionProps,J=Object(n.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),U=i.useRef(),Q=i.useState(!0),X=Q[0],F=Q[1],K=Object(m.a)((function(){z&&z.apply(void 0,arguments)})),V=Object(m.a)((function(e){z&&null!=e&&(clearTimeout(U.current),U.current=setTimeout((function(){K(null,"timeout")}),e))}));i.useEffect((function(){return R&&V(h),function(){clearTimeout(U.current)}}),[R,h,V]);var Y=function(){clearTimeout(U.current)},Z=i.useCallback((function(){null!=h&&V(null!=q?q:.5*h)}),[h,q,V]);return i.useEffect((function(){if(!w&&R)return window.addEventListener("focus",Z),window.addEventListener("blur",Y),function(){window.removeEventListener("focus",Z),window.removeEventListener("blur",Y)}}),[w,Z,R]),!R&&X?null:i.createElement(u.a,Object(o.a)({onClickAway:function(e){z&&z(e,"clickaway")}},y),i.createElement("div",Object(o.a)({className:Object(l.a)(E.root,E["anchorOrigin".concat(Object(d.a)(c)).concat(Object(d.a)(g))],v),onMouseEnter:function(e){N&&N(e),Y()},onMouseLeave:function(e){B&&B(e),Z()},ref:t},J),i.createElement(A,Object(o.a)({appear:!0,in:R,onEnter:Object(b.a)((function(){F(!1)}),L),onEntered:T,onEntering:S,onExit:M,onExited:Object(b.a)((function(){F(!0)}),W),onExiting:D,timeout:H,direction:"top"===c?"down":"up"},G),j||i.createElement(p.a,Object(o.a)({message:k,action:a},x)))))}));t.a=Object(c.a)((function(e){var t={top:8},a={bottom:8},n={justifyContent:"flex-end"},i={justifyContent:"flex-start"},l={top:24},c={bottom:24},s={right:24},u={left:24},m={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(o.a)({},t,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({},l,m))),anchorOriginBottomCenter:Object(o.a)({},a,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({},c,m))),anchorOriginTopRight:Object(o.a)({},t,n,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({left:"auto"},l,s))),anchorOriginBottomRight:Object(o.a)({},a,n,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({left:"auto"},c,s))),anchorOriginTopLeft:Object(o.a)({},t,i,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({right:"auto"},l,u))),anchorOriginBottomLeft:Object(o.a)({},a,i,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({right:"auto"},c,u)))}}),{flip:!1,name:"MuiSnackbar"})(g)},427:function(e,t,a){"use strict";var n=a(2),r=a(10),o=a(1),i=a(0),l=(a(5),a(3)),c=a(4),s=a(202),u=a(22),m=i.forwardRef((function(e,t){var a=e.action,r=e.classes,c=e.className,u=e.message,m=e.role,d=void 0===m?"alert":m,b=Object(n.a)(e,["action","classes","className","message","role"]);return i.createElement(s.a,Object(o.a)({role:d,square:!0,elevation:6,className:Object(l.a)(r.root,c),ref:t},b),i.createElement("div",{className:r.message},u),a?i.createElement("div",{className:r.action},a):null)}));t.a=Object(c.a)((function(e){var t="light"===e.palette.type?.8:.98,a=Object(u.b)(e.palette.background.default,t);return{root:Object(o.a)({},e.typography.body2,Object(r.a)({color:e.palette.getContrastText(a),backgroundColor:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(m)},428:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(12);t.a=Object(o.a)(r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},491:function(e,t,a){"use strict";a.r(t);var n=a(421),r=a(16),o=a.n(r),i=a(35),l=a(24),c=a(0),s=a.n(c),u=a(408),m=a(403),d=a(70),b=a(503),f=a(409),p=a(426),g=a(427),O=a(401),h=a(90),j=a(89),E=a(42),v=a(58),y=a(428);t.default=Object(E.b)((function(e){return{auth:e.profile,profile:e.profile}}),null)((function(e){var t=e.profile,a=e.auth,r=Object(c.useState)({name:"",phone:"",email:"",address:"",message:""}),E=Object(l.a)(r,2),x=E[0],C=E[1],w=Object(c.useState)(!1),k=Object(l.a)(w,2),z=k[0],L=k[1],T=Object(c.useState)(null),S=Object(l.a)(T,2),M=S[0],W=S[1],D=Object(c.useState)(null),N=Object(l.a)(D,2),B=N[0],R=N[1];Object(c.useEffect)((function(){document.title="Contact Us",Object.keys(t).length&&C({name:t.name,phone:t.phone,email:t.email,address:t.address,message:""})}),[a]);var q=function(){var e=Object(i.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,v.a.post("/api/query",x);case 4:return Object.keys(t).length?C({name:t.name,phone:t.phone,email:t.email,address:t.address,message:""}):C({name:"",phone:"",email:"",address:"",message:""}),W(h.a[700]),R("Query Sent Successful!"),e.abrupt("return",L(!0));case 10:return e.prev=10,e.t0=e.catch(1),W(j.a[700]),R("Something went wrong. Try again!"),e.abrupt("return",L(!0));case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(u.a,{maxWidth:"md"},s.a.createElement(m.a,{container:!0,spacing:5,style:{marginTop:50}},s.a.createElement(m.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},s.a.createElement(d.a,{variant:"h5",gutterBottom:!0,style:{fontWeight:700,marginBottom:20},color:"primary"},"Contact Us"),s.a.createElement("form",{onSubmit:q},s.a.createElement(b.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Name",value:x.name,onChange:function(e){return C(Object(n.a)(Object(n.a)({},x),{},{name:e.target.value}))}}),s.a.createElement(b.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Phone number",value:x.phone,onChange:function(e){return C(Object(n.a)(Object(n.a)({},x),{},{phone:e.target.value}))}}),s.a.createElement(b.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",type:"email",label:"Email",value:x.email,onChange:function(e){return C(Object(n.a)(Object(n.a)({},x),{},{email:e.target.value}))}}),s.a.createElement(b.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",size:"small",label:"Address",value:x.address,onChange:function(e){return C(Object(n.a)(Object(n.a)({},x),{},{address:e.target.value}))}}),s.a.createElement(b.a,{required:!0,fullWidth:!0,variant:"outlined",margin:"normal",multiline:!0,rows:5,size:"small",label:"Message",value:x.message,onChange:function(e){return C(Object(n.a)(Object(n.a)({},x),{},{message:e.target.value}))}}),s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit"},"Send")))),s.a.createElement(m.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},s.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Office Location"),s.a.createElement("div",{style:{width:"100%"}},s.a.createElement("img",{alt:"smpb",src:"/logo512.png",style:{width:200}})),s.a.createElement(m.a,{container:!0,style:{marginTop:20}},s.a.createElement(m.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},s.a.createElement(d.a,{style:{fontSize:16,fontWeight:500}},"Mission Organic Mizoram, Govt. of Mizoram"),s.a.createElement(d.a,{style:{color:"#333"}},"Tel: 0389-2319025"),s.a.createElement(d.a,{style:{color:"#333"}},"Email: movcdmiz@gmail.com"),s.a.createElement(d.a,{style:{color:"#333"}},"Directorate of Agriculture, Tuikual South, Aizawl, Mizoram"),s.a.createElement(d.a,{style:{color:"#333"}},"796001"))))),s.a.createElement(p.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:z,autoHideDuration:3e3,onClose:function(){L(!1)}},s.a.createElement(g.a,{style:{backgroundColor:M},message:s.a.createElement("span",{style:{display:"flex",alignItems:"center"}},B),onClose:function(){L(!1)},action:s.a.createElement(O.a,{key:"close",color:"inherit",onClick:function(){return L(!1)}},s.a.createElement(y.a,null))})))}))}}]);
//# sourceMappingURL=17.b694dd14.chunk.js.map