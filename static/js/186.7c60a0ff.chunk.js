"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{824:function(e,t,n){n.d(t,{h:function(){return v}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="?api_key=fb4eca5dd3545235e4fd6796c70d4d40",o="https://api.themoviedb.org/3";function i(){return(i=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/movie/popular").concat(s));case 3:return t=e.sent,e.next=6,t.data.results;case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/search/movie").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return n=e.sent,e.next=6,n.data.results;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/movie/").concat(t).concat(s,"&language=en-US"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"/credits").concat(s,"&language=en-US"));case 3:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews").concat(s,"&language=en-US"));case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var v={getPopularMovies:function(){return i.apply(this,arguments)},getFindMovies:function(e){return p.apply(this,arguments)},getDetails:function(e){return l.apply(this,arguments)},getCredits:function(e){return h.apply(this,arguments)},getReviews:function(e){return f.apply(this,arguments)}}},186:function(e,t,n){n.r(t);var r=n(439),a=n(791),c=n(689),u=n(824),s=n(184);t.default=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)([]),n=(0,r.Z)(t,2),o=n[0],i=n[1];return(0,a.useEffect)((function(){u.h.getReviews(e).then((function(e){i(e)}))}),[e]),0===o.length?(0,s.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,s.jsx)("ul",{children:o.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h2",{children:[(0,s.jsx)("span",{children:"autor:"})," ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)}))})}}}]);
//# sourceMappingURL=186.7c60a0ff.chunk.js.map