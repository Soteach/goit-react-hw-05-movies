"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[535],{535:function(A,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,n,a=e(439),c=e(791),u=e(689),i=e(168),s=e(444),p=s.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n"]))),o=e(734),v=s.ZP.div(n||(n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 250px;\n"]))),f=e(323),j=e(184),x=function(A){var t=A.name,e=A.character,r=A.photo,n=f;return null!==r&&(n="".concat("https://image.tmdb.org/t/p/w200/").concat(r)),(0,j.jsxs)(v,{children:[(0,j.jsx)("img",{src:n,alt:"Actor ".concat(t)}),(0,j.jsx)("p",{children:t}),(0,j.jsx)("p",{children:e})]})},d=function(){var A=(0,c.useState)([]),t=(0,a.Z)(A,2),e=t[0],r=t[1],n=(0,u.UO)().movieId;return(0,c.useEffect)((function(){(0,o.sk)(n).then((function(A){return r(A)}))}),[n]),(0,j.jsx)(p,{children:e.length>0?e.map((function(A){var t=A.credit_id,e=A.name,r=A.character,n=A.profile_path;return(0,j.jsx)(x,{name:e,character:r,photo:n},t)})):(0,j.jsx)("div",{children:"We have no information about cast in this movie"})})}},734:function(A,t,e){e.d(t,{Df:function(){return u},QS:function(){return o},Xm:function(){return p},sk:function(){return s},vq:function(){return i}});var r=e(861),n=e(757),a=e.n(n),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"c3923fa38d2dd62131b577696cc2f23f"};var u=function(){var A=(0,r.Z)(a().mark((function A(){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("/trending/movie/week");case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),i=function(){var A=(0,r.Z)(a().mark((function A(t){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("/movie/".concat(t));case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),s=function(){var A=(0,r.Z)(a().mark((function A(t){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("/movie/".concat(t,"/credits"));case 2:return e=A.sent,A.abrupt("return",e.data.cast);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),p=function(){var A=(0,r.Z)(a().mark((function A(t){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),o=function(){var A=(0,r.Z)(a().mark((function A(t){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("/search/movie",{params:{query:t}});case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()},323:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=535.d97cb850.chunk.js.map