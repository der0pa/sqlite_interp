(this["webpackJsonpreact-sqljs-demo"]=this["webpackJsonpreact-sqljs-demo"]||[]).push([[0],{121:function(e,t,n){},128:function(e,t){},130:function(e,t){},141:function(e,t){},143:function(e,t){},170:function(e,t){},172:function(e,t){},173:function(e,t){},178:function(e,t){},180:function(e,t){},186:function(e,t){},188:function(e,t){},207:function(e,t){},219:function(e,t){},222:function(e,t){},226:function(e,t,n){"use strict";n.r(t);var c=n(9),r=n.n(c),a=n(112),s=n.n(a),u=n(57),i=n.n(u),o=n(113),j=n(27),l=(n(121),n(114)),b=n.n(l),f=n(115),d=n(2);function O(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(j.a)(a,2),u=s[0],l=s[1];return Object(c.useEffect)(Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({locateFile:function(){return f.a}});case 3:t=e.sent,r(new t.Database),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),u?Object(d.jsx)("pre",{children:u.toString()}):n?Object(d.jsx)(h,{db:n}):Object(d.jsx)("pre",{children:"Loading..."})}function h(e){var t=e.db,n=Object(c.useState)(null),r=Object(j.a)(n,2),a=r[0],s=r[1],u=Object(c.useState)([]),i=Object(j.a)(u,2),o=i[0],l=i[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React SQL interpreter"}),Object(d.jsx)("textarea",{onChange:function(e){return function(e){try{l(t.exec(e)),s(null)}catch(n){s(n),l([])}}(e.target.value)},placeholder:"Enter some SQL. No inspiration ? Try \u201cselect sqlite_version()\u201d"}),Object(d.jsx)("pre",{className:"error",children:(a||"").toString()}),Object(d.jsx)("pre",{children:o.map((function(e,t){var n=e.columns,c=e.values;return Object(d.jsx)(p,{columns:n,values:c},t)}))})]})}function p(e){var t=e.columns,n=e.values;return Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:t.map((function(e,t){return Object(d.jsx)("td",{children:e},t)}))})}),Object(d.jsx)("tbody",{children:n.map((function(e,t){return Object(d.jsx)("tr",{children:e.map((function(e,t){return Object(d.jsx)("td",{children:e},t)}))},t)}))})]})}var x=document.getElementById("root");s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),x)}},[[226,1,2]]]);
//# sourceMappingURL=main.e947d78e.chunk.js.map