(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{1033:function(t,e,n){"use strict";(function(t){n("d28f");i(n("66fd"));var e=i(n("5e64"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("5486")["createPage"])},"2c61":function(t,e,n){"use strict";var i={auth:()=>Promise.all([n.e("common/vendor"),n.e("components/auth/auth")]).then(n.bind(null,"a32a")),bindPhone:()=>Promise.all([n.e("common/vendor"),n.e("components/bindPhone/bindPhone")]).then(n.bind(null,"9bb9")),copyright:()=>n.e("components/copyright/copyright").then(n.bind(null,"cb0f")),myfooter:()=>n.e("components/myfooter/myfooter").then(n.bind(null,"6bab"))},a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"4d7f":function(t,e,n){"use strict";var i=n("4e31"),a=n.n(i);a.a},"4e31":function(t,e,n){},"5e64":function(t,e,n){"use strict";n.r(e);var i=n("2c61"),a=n("ed6c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("4d7f");var s,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=u.exports},"8ff4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("88e4"),a={data:function(){return{$imgurl:this.$imgurl,bg:"",page_signs:"/sudu8/pages/search/search",searchlist:[],searchtype:[],datas:"",comment:"",sc:0,paimai:"",baseinfo:{},needAuth:!1,needBind:!1,sid:0,type:""}},onPullDownRefresh:function(){this.getsearch(),t.stopPullDownRefresh()},onLoad:function(t){var e=this;this._baseMin(this);var n=0;t.fxsid&&(n=t.fxsid),this.fxsid=n,t.sid&&(this.sid=t.sid),this.title=t.title,this.paimai=t.paimai,t.type&&(this.type=t.type),this.cid=t.cid,i.bdLogin(n,function(){e.getsearch()})},methods:{getsearch:function(){var e=this;t.request({url:e.$baseurl+"doPageProductsearch",data:{title:e.title,uniacid:e.$uniacid,paimai:e.paimai,sid:e.sid,cid:e.cid?e.cid:0,type:e.type?e.type:"",latitude:t.getStorageSync("latitude"),longitude:t.getStorageSync("longitude")},success:function(n){e.searchlist=n.data.data.list,e.searchtype=n.data.data.type,t.setNavigationBarTitle({title:e.title+"搜索结果"}),t.setStorageSync("isShowLoading",!1),t.hideNavigationBarLoading(),t.stopPullDownRefresh()}})}}};e.default=a}).call(this,n("5486")["default"])},ed6c:function(t,e,n){"use strict";n.r(e);var i=n("8ff4"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a}},[["1033","common/runtime","common/vendor"]]]);