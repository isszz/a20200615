(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesPluginShop/manage_txjl/manage_txjl"],{"03e9":function(t,e,n){"use strict";(function(t){n("d28f");i(n("66fd"));var e=i(n("f0e2"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("5486")["createPage"])},"0808":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("2f62");var a=n("88e4"),o={data:function(){return{$imgurl:this.$imgurl,needAuth:!1,needBind:!1,page_signs:"/pagesPluginShop/manage_txjl/manage_txjl",id:"",txjlINfo:[],baseinfo:""}},onLoad:function(e){var n=this;this._baseMin(this);var i=t.getStorageSync("mlogin");this.id=i;var o=0;a.bdLogin(o,function(){n._getTxjl(i)})},onPullDownRefresh:function(){this._getTxjl(this.id),t.stopPullDownRefresh()},methods:{_getTxjl:function(e){var n=this;if(1==n.baseinfo.can_show){if(t.setNavigationBarTitle({title:"提现记录"}),!e)return t.showModal({title:"非法操作！",content:"没有商户号",showCancel:!1}),!1;i.request({url:n.$baseurl+"dopagegetTxjl",data:{id:e,uniacid:n.$uniacid},success:function(t){for(var e=t.data.data,i=0;i<e.length;i++)e[i].createtime=n.timestampToTime(e[i].createtime),1==e[i].types&&(e[i].types="微信"),2==e[i].types&&(e[i].types="支付宝"),3==e[i].types&&(e[i].types="银行卡");n.txjlINfo=e}})}},timestampToTime:function(t){var e=new Date(1e3*t),n=e.getFullYear()+"-",i=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",a=e.getDate()+" ",o=e.getHours()+":",u=e.getMinutes();return n+i+a+o+u}}};e.default=o}).call(this,n("5486")["default"],n("5486")["default"])},4840:function(t,e,n){"use strict";var i=n("4870"),a=n.n(i);a.a},4870:function(t,e,n){},"55cb":function(t,e,n){"use strict";var i={copyright:()=>n.e("components/copyright/copyright").then(n.bind(null,"cb0f"))},a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"7d1d":function(t,e,n){"use strict";n.r(e);var i=n("0808"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},f0e2:function(t,e,n){"use strict";n.r(e);var i=n("55cb"),a=n("7d1d");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("4840");var u,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=c.exports}},[["03e9","common/runtime","common/vendor"]]]);