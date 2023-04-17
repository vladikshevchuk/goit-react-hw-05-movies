"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{824:function(e,t,n){n.d(t,{h:function(){return f}});var r=n(861),a=n(757),c=n.n(a),s=n(243),o="?api_key=fb4eca5dd3545235e4fd6796c70d4d40",i="https://api.themoviedb.org/3";function u(){return(u=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/popular").concat(o));case 3:return t=e.sent,e.next=6,t.data.results;case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/search/movie").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return n=e.sent,e.next=6,n.data.results;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(t).concat(o,"&language=en-US"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(t,"/credits").concat(o,"&language=en-US"));case 3:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(t,"/reviews").concat(o,"&language=en-US"));case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var f={getPopularMovies:function(){return u.apply(this,arguments)},getFindMovies:function(e){return l.apply(this,arguments)},getDetails:function(e){return p.apply(this,arguments)},getCredits:function(e){return d.apply(this,arguments)},getReviews:function(e){return h.apply(this,arguments)}}},779:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r,a=n(439),c=n(791),s=n(689),o=n(824),i=(n(897),n(140)),u=n(168),l=n(87),p=(0,n(444).ZP)(l.OL)(r||(r=(0,u.Z)(["\n    display: inline-block;\n\tbox-sizing: border-box;\n\tpadding: 0 16px;\n\tmargin: 0 15px 15px 0;\n\toutline: none;\n\tborder: none;\n\tborder-radius: 4px;\n\theight: 30px;\n\tline-height: 30px;\n\tfont-size: 12.5px;\n\tfont-weight: normal;\n\ttext-decoration: none;\n\tvertical-align: top;\n\tcolor: #fff;\n\tbackground-color: #5181b8;\n\tcursor: pointer;\n\tuser-select: none;\n\tappearance: none;\n\ttouch-action: manipulation;\n\toverflow: hidden;\n"]))),d=n(184),h=function(){var e,t,n=(0,s.UO)().movieId,r=(0,c.useState)({}),u=(0,a.Z)(r,2),l=u[0],h=u[1],f=(0,s.TH)(),v=(0,c.useRef)(null!==(e=null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,c.useEffect)((function(){o.h.getDetails(n).then((function(e){return h(e)}))}),[n]),l?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{to:v.current,children:"back"}),l&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"movie",children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(l.poster_path)||0,alt:l.title,width:"250px"}),(0,d.jsxs)("div",{className:"description",children:[(0,d.jsx)("h2",{children:l.title||l.name}),(0,d.jsx)("p",{children:"Overview:"}),(0,d.jsx)("p",{children:l.overview}),(0,d.jsxs)("p",{children:["Popularity: ",l.popularity]}),(0,d.jsxs)("p",{children:["Release date: ",l.release_date]})]})]}),(0,d.jsxs)("div",{className:"movie-info",children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{className:"movie-info-link",children:[(0,d.jsx)("li",{className:"link",children:(0,d.jsx)(i.Z,{to:"cast",children:"cast"})}),(0,d.jsx)("li",{className:"link",children:(0,d.jsx)(i.Z,{to:"reviews",children:"reviews"})})]})]}),(0,d.jsx)(s.j3,{})]})]}):(0,d.jsx)(d.Fragment,{children:"Not Found"})}},897:function(e,t,n){e.exports=n.p+"static/media/no-movie.2c7d932bbb6886f6a4bc.jpg"}}]);
//# sourceMappingURL=779.5112dc84.chunk.js.map