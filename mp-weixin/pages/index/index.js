(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0663":function(n,e,t){},"3f71":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,i,r,a,u){try{var o=n[a](u),c=o.value}catch(s){return void t(s)}o.done?e(c):Promise.resolve(c).then(i,r)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var u=n.apply(e,t);function o(n){a(u,i,r,o,c,"next",n)}function c(n){a(u,i,r,o,c,"throw",n)}o(void 0)}))}}t("e53b");var o=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(t("af6d"))}.bind(null,t)).catch(t.oe)},c={components:{uniIcons:o},data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"歌曲名称"}],queryIndex:0,searchForm:{gequxinxigequmingcheng:""},CustomBar:"0",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],gequxinxilist:[],homegequxinxilist:[],news:[]}},onShow:function(){var n=u(i.default.mark((function n(){var e,t,r,a,u,o,c,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),e=[],n.next=4,this.$api.page("config",{page:1,limit:5});case 4:for(t=n.sent,r=!0,a=!1,u=void 0,n.prev=8,o=t.data.list[Symbol.iterator]();!(r=(c=o.next()).done);r=!0)s=c.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&e.push({img:s.value});n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](8),a=!0,u=n.t0;case 16:n.prev=16,n.prev=17,r||null==o.return||o.return();case 19:if(n.prev=19,!a){n.next=22;break}throw u;case 22:return n.finish(19);case 23:return n.finish(16);case 24:return e&&(this.swiperList=e),n.next=27,this.$api.recommend("gequxinxi",1,4);case 27:return t=n.sent,this.gequxinxilist=t.data.list,n.next=31,this.$api.list("gequxinxi",{page:1,limit:6});case 31:t=n.sent,this.homegequxinxilist=t.data.list;case 33:case"end":return n.stop()}}),n,this,[[8,12,16,24],[17,,19,23]])})));function e(){return n.apply(this,arguments)}return e}(),methods:{queryChange:function(n){this.queryIndex=n.detail.value,this.searchForm.gequxinxigequmingcheng=""},onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,e){this.$utils.jump("../".concat(n,"/detail?id=").concat(e))},onPageTap:function(e){0==this.queryIndex&&(n.setStorageSync("indexQueryCondition",this.searchForm.gequxinxigequmingcheng),this.searchForm.gequxinxigequmingcheng=""),n.navigateTo({url:"../".concat(e,"/list"),fail:function(){n.switchTab({url:"../".concat(e,"/list")})}})}}};e.default=c}).call(this,t("543d")["default"])},"51bb":function(n,e,t){"use strict";var i,r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.gequxinxilist,(function(e,t){var i=e.fengmian.split(",");return{$orig:n.__get_orig(e),g0:i}}))),i=n.__map(n.gequxinxilist,(function(e,t){var i=e.fengmian.split(",");return{$orig:n.__get_orig(e),g1:i}})),r=n.__map(n.homegequxinxilist,(function(e,t){var i=e.fengmian.split(",");return{$orig:n.__get_orig(e),g2:i}})),a=n.__map(n.homegequxinxilist,(function(e,t){var i=e.fengmian.split(",");return{$orig:n.__get_orig(e),g3:i}}));n.$mp.data=Object.assign({},{$root:{l0:t,l1:i,l2:r,l3:a}})},a=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}))},6252:function(n,e,t){"use strict";t.r(e);var i=t("3f71"),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=r.a},7326:function(n,e,t){"use strict";(function(n){t("d332"),t("921b");i(t("66fd"));var e=i(t("a97d"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},a97d:function(n,e,t){"use strict";t.r(e);var i=t("51bb"),r=t("6252");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("d15e");var u,o=t("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=c.exports},d15e:function(n,e,t){"use strict";var i=t("0663"),r=t.n(i);r.a}},[["7326","common/runtime","common/vendor"]]]);