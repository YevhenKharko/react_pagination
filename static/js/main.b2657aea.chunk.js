(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a.n(c),i=a(3),r=a(1);a(9);var s=a(0),l=function(e){for(var t=e.total,a=e.itemsPerPage,c=e.currentPage,n=void 0===c?1:c,i=e.setCurrentPage,r=e.onPageChange,l=e.items,o=[],j=Math.ceil(t/a),d=1;d<=j;d+=1)o.push(d);var u=function(e){r(e),i(e)},m=l.slice((n-1)*a,n*a);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("ul",{className:"pagination",children:[Object(s.jsx)("li",{className:1===n?"page-item disabled":"page-item",children:Object(s.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===n,onClick:function(){u(n-1)},children:"\xab"})}),o.map((function(e){return Object(s.jsx)("li",{className:n===e?"page-item active":"page-item",children:Object(s.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){n!==e&&u(e)},children:e})},e)})),Object(s.jsx)("li",{className:n===j?"page-item disabled":"page-item",children:Object(s.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":n===j,onClick:function(){var e=n+1;r(e),i(e)},children:"\xbb"})})]}),Object(s.jsx)("ul",{children:m.map((function(e){return Object(s.jsx)("li",{"data-cy":"item",children:e},e)}))})]})},o=function(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}(1,42).map((function(e){return"Item ".concat(e)})),j=function(){var e=Object(r.useState)(1),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(5),j=Object(i.a)(n,2),d=j[0],u=j[1];Object(r.useEffect)((function(){c(1)}),[d]);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Items with Pagination"}),Object(s.jsx)("p",{className:"lead","data-cy":"info",children:"Page\n        ".concat(a,"\n        (items\n        ").concat((a-1)*d+1,"\n        -\n        ").concat(Math.min(a*d),"\n        of ").concat(o.length,")")}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(s.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:d,onChange:function(e){return u(+e.target.value)},children:[Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"})]})}),Object(s.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(s.jsx)(l,{total:o.length,itemsPerPage:d,currentPage:a,onPageChange:function(e){c(e)},items:o,setCurrentPage:c})]})};n.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.b2657aea.chunk.js.map