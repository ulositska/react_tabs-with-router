(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(t,e,c){},33:function(t,e,c){"use strict";c.r(e);var a=c(23),s=c.n(a),n=c(9),i=(c(0),c(2)),b=(c(28),c(29),c(30),c(3)),j=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h1",{className:"title",children:"Home page"})})},r=c(17),l=c.n(r),d=function(t){var e=t.to,c=t.title;return Object(b.jsx)(n.c,{to:e,className:function(t){var e=t.isActive;return l()("navbar-item",{"is-active":e})},children:c})},o=function(){return Object(b.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(d,{to:"/",title:"Home"}),Object(b.jsx)(d,{to:"/tabs",title:"Tabs"})]})})})},x=function(t){var e=t.tabs,c=Object(i.q)().tabId,a=void 0===c?0:c,s=e.find((function(t){return t.id===a}));return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Tabs page"}),Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Tab",className:l()({"is-active":(null===s||void 0===s?void 0:s.id)===t.id}),children:Object(b.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})},t.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:s?s.content:"Please select a tab"})]})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o,{}),Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/",element:Object(b.jsx)(j,{})}),Object(b.jsx)(i.b,{path:"home",element:Object(b.jsx)(i.a,{to:"/"})}),Object(b.jsxs)(i.b,{path:"tabs",children:[Object(b.jsx)(i.b,{index:!0,element:Object(b.jsx)(x,{tabs:h})}),Object(b.jsx)(i.b,{path:":tabId",element:Object(b.jsx)(x,{tabs:h})})]}),Object(b.jsx)(i.b,{path:"*",element:Object(b.jsx)("h1",{className:"title",children:"Page not found"})})]})})]})};s.a.render(Object(b.jsx)(n.a,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d624bca8.chunk.js.map