(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[26],{425:function(e,t,a){"use strict";t.a="https://missionorganicmizoram.com/"},534:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a.n(n),c=a(35),o=a(24),i=a(0),l=a.n(i),s=a(405),m=a(515),u=a(70),p=a(410),d=a(58),f=a(425),b=a(463),h=a.n(b),g=a(454),x=a.n(g);t.default=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],b=Object(i.useState)([]),g=Object(o.a)(b,2),E=g[0],v=g[1],y=Object(i.useState)(0),O=Object(o.a)(y,2),j=O[0],w=O[1],k=Object(i.useState)(!1),S=Object(o.a)(k,2),C=S[0],T=S[1];Object(i.useEffect)((function(){document.title="News",N()}),[]);var N=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/news");case 3:return t=e.sent,e.abrupt("return",n(t.data.data));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(p.a,{maxWidth:"md"},l.a.createElement(u.a,{variant:"h5",gutterBottom:!0,style:{fontWeight:700,marginBottom:20,marginTop:80},color:"primary"},"MOM NEWS"),a.length?l.a.createElement("div",{style:{marginTop:20}},a.map((function(e,t){return l.a.createElement(s.a,{container:!0,style:{display:"flex",border:"1px solid #eee",boxShadow:"1px 1px 5px #ddd",marginTop:20},spacing:2,key:t},l.a.createElement(s.a,{item:!0,xs:12,sm:12,md:3,lg:3,xl:3},l.a.createElement(m.a,{disabled:!e.photo,onClick:function(){e.photo&&(v([{src:"".concat(f.a).concat(e.photo)}]),T(!0))}},l.a.createElement("img",{alt:e.title,src:e.photo?"".concat(f.a).concat(e.photo):"/logo512.png",style:{objectFit:"contain",width:"100%",border:"1px solid #ff9100",boxShadow:"1px 1px 2px #ff9100",borderRadius:5}}))),l.a.createElement(s.a,{item:!0,xs:12,sm:12,md:9,lg:9,xl:9},l.a.createElement(u.a,{variant:"h6"},e.title),l.a.createElement(u.a,{paragraph:!0,style:{whiteSpace:"pre-line"}},l.a.createElement(h.a,{componentDecorator:function(e,t,a){return l.a.createElement("a",{target:"blank",href:e,key:a,style:{color:"#027502"}},t)}},e.body))))}))):l.a.createElement("div",{style:{marginTop:100,display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement(u.a,{align:"center",variant:"h6"},"There is no news yet!")),function(){if(C)return l.a.createElement("div",null,l.a.createElement(x.a,{imgs:E,currImg:j,isOpen:C,backdropCloseable:!0,onClickPrev:function(){w(j-1)},onClickNext:function(){return w(j+1)},onClose:function(){w(0),v([]),T(!1)}}))}())}}}]);
//# sourceMappingURL=26.b3c13e71.chunk.js.map