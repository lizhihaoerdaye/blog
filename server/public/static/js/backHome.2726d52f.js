(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{20:function(t,e,a){"use strict";a.r(e);var i=function(){var a=this,t=a.$createElement,i=a._self._c||t;return a.loadOK?i("div",{staticClass:"statistics view"},[i("h3",[a._v("数据")]),a._v(" "),i("div",{staticClass:"data-count d-flex"},a._l(a.stat,function(t){return i("div",{key:t.description,staticClass:"item"},[i("p",{staticClass:"num"},[a._v(a._s(t.sum))]),a._v(" "),i("p",{staticClass:"title"},[a._v(a._s(t.description))])])}),0),a._v(" "),i("div",{staticClass:"data-chart"},[i("ul",a._l(a.items,function(t,e){return i("li",{key:t.title,class:{active:a.isTrue===e},on:{click:function(t){return a.handleShowChartData(e)}}},[a._v(a._s(t.title))])}),0),a._v(" "),i("chart",{attrs:{options:a.orgOptions,"auto-resize":!0}})],1)]):i("div",{staticClass:"loadClass"},[a._v(a._s(a.tipMsg))])};i._withStripped=!0;var n=a(37),s=a.n(n),r=a(35),o=a(13),n=a.n(o),o=a(4);function c(e,t){var a,i=Object.keys(e);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(e),t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)),i}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach(function(t){s()(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}o={components:{chart:n.a},data:function(){return{tipMsg:"",stat:[{sum:0,description:"文章总数"},{sum:0,description:"评论数"},{sum:0,description:"访问量"}],chartVisits:[],chartComments:[],isTrue:0,items:[{title:"访问量"},{title:"评论数"}],orgOptions:{color:["#1296db"],tooltip:{},legend:{data:["销量"]},xAxis:{data:[],boundaryGap:!1},yAxis:{type:"value"},series:[{type:"line",smooth:!0,data:[],areaStyle:{}}]}}},computed:u({},Object(o.c)(["loadOK"])),mounted:function(){this.initLoadOK(),this.getDataCount(),this.getChartVisi()},methods:u(u({},Object(o.b)(["chgLoadOK","initLoadOK"])),{},{handleShowChartData:function(t){this.isTrue=t,this.isTrue?this.getChartComm():this.getChartVisi()},formatChartData:function(t,e,a){for(var i=[],n=[],s=t.length,r=0,o=s-1;r<s;r++,o--)i[o]=new Date(t[r][e]).toLocaleDateString().replace(/\//g,"-"),n[o]=t[r][a];this.orgOptions.xAxis.data=i,this.orgOptions.series[0].data=n},getDataCount:function(){var n=this;Object(r.n)().then(function(t){if(t.state&&t.data.length){var e,a=n.stat,i=0;for(e in t.data[0])a[i].sum=t.data[0][e],i++}else n.chgLoadOK(),n.tipMsg="初始化数据失败"}).catch(function(t){})},getChartVisi:function(){var e=this;Object(r.l)().then(function(t){t.state&&t.data.length?e.formatChartData(t.data,"visits_date","visits_day_count"):(e.chgLoadOK(),e.tipMsg="初始化数据失败")}).catch(function(t){})},getChartComm:function(){var e=this;Object(r.k)().then(function(t){t.state&&t.data.length?e.formatChartData(t.data,"comments_date","comments_day_count"):(e.chgLoadOK(),e.tipMsg="初始化数据失败")}).catch(function(t){})}})},a=a(2),i=Object(a.a)(o,i,[],!1,null,"614f2b29",null);i.options.__file="src/views/back/back_home.vue";e.default=i.exports},37:function(t,e){t.exports=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}}]);