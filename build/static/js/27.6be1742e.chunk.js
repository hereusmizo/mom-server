(this["webpackJsonpmom-admin"]=this["webpackJsonpmom-admin"]||[]).push([[27],{431:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(12);t.a=Object(l.a)(r.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},502:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a.n(n),l=a(35),c=a(24),u=a(0),o=a.n(u),m=a(434),i=a(435),s=a(436),E=a(437),d=a(438),p=a(70),f=a(500),h=a(401),g=a(408),b=a(404),k=a(12),v=Object(k.a)(o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),y=a(431),w=a(42),O=a(429),j=a.n(O),x=a(17),z=a(58),B=a(36);t.default=Object(w.b)(null,{logout:B.f})(Object(x.g)((function(e){var t=e.logout,a=e.history,n=Object(u.useState)([]),k=Object(c.a)(n,2),w=k[0],O=k[1];Object(u.useEffect)((function(){document.title="Bulk Order",x()}),[]);var x=function(){var e=Object(l.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("mom-admin")){e.next=13;break}return e.prev=1,e.next=4,z.a.get("/api/bulk-order",{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 4:return a=e.sent,e.abrupt("return",O(a.data.data));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return");case 11:e.next=14;break;case 13:return e.abrupt("return",t());case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("mom-admin")){e.next=12;break}return e.prev=1,e.next=4,z.a.delete("/api/bulk-order/".concat(a),{headers:{Authorization:"Bearer "+localStorage.getItem("mom-admin")}});case 4:O(w.filter((function(e){return e.id!==a}))),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",alert("Something went wrong. Try again"));case 10:e.next=13;break;case 12:return e.abrupt("return",t());case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(g.a,{style:{marginBottom:380}},o.a.createElement(p.a,{variant:"h6"},o.a.createElement(h.a,{edge:"start",onClick:function(){a.goBack()}},o.a.createElement(y.a,null)),"Bulk Orders"),o.a.createElement(b.a,{style:{marginTop:20}}),w.length?o.a.createElement(m.a,{size:"small"},o.a.createElement(i.a,null,o.a.createElement(s.a,null,o.a.createElement(E.a,null,"#"),o.a.createElement(E.a,null,"Product"),o.a.createElement(E.a,null,"Customer"),o.a.createElement(E.a,null,"Contact"),o.a.createElement(E.a,{align:"center"},"QTY (MT)"),o.a.createElement(E.a,null,"Order Date"),o.a.createElement(E.a,{align:"center"},"Action"))),o.a.createElement(d.a,null,w.map((function(e,t){return o.a.createElement(s.a,{key:t},o.a.createElement(E.a,null,o.a.createElement(p.a,null,t+1)),o.a.createElement(E.a,null,o.a.createElement(p.a,null,e.name)),o.a.createElement(E.a,null,o.a.createElement(p.a,null,e.cname)),o.a.createElement(E.a,null,o.a.createElement(p.a,null,e.phone)),o.a.createElement(E.a,{align:"center"},o.a.createElement(p.a,null,1===e.type?"-":e.quantity)),o.a.createElement(E.a,null,o.a.createElement(p.a,null,j()(e.created).format("DD-MM-YYYY"))),o.a.createElement(E.a,{align:"center"},o.a.createElement(f.a,{title:"Delete"},o.a.createElement(h.a,{size:"small",onClick:function(){if(window.confirm("Are you sure you want to delete this order? You cannot recover once deleted!"))return B(e.id)}},o.a.createElement(v,{color:"error"})))))})))):o.a.createElement(p.a,{align:"center",variant:"h6",style:{marginTop:100}},"There is no bulk order yet"))})))}}]);
//# sourceMappingURL=27.6be1742e.chunk.js.map