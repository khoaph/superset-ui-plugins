(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1288:function(e,t,a){var n=a(1289);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(211)(n,r);n.locals&&(e.exports=n.locals)},1289:function(e,t,a){(e.exports=a(210)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.superset-legacy-chart-table {\n  margin: 0px !important;\n  background: transparent;\n  background-color: white;\n}\n\n.superset-legacy-chart-table thead th.sorting:after, table.table thead th.sorting_asc:after, table.table thead th.sorting_desc:after {\n  top: 0px;\n}\n\n.like-pre {\n  white-space: pre-wrap;\n}\n',""])},1877:function(e,t,a){"use strict";a.r(t);var n=a(941),r=a(78),i=a.n(r),o=a(0),l=a.n(o),s=a(1111),c=a.n(s),d=a(149),h=a.n(d),p=a(209),u=a(86),b=a(877);a(1112),a(1288);window.$&&c()(window,window.$);var f=window.$||c.a.$,g={data:l.a.arrayOf(l.a.object),height:l.a.number,alignPositiveNegative:l.a.bool,colorPositiveNegative:l.a.bool,columns:l.a.arrayOf(l.a.shape({key:l.a.string,label:l.a.string,format:l.a.string})),filters:l.a.object,includeSearch:l.a.bool,metrics:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.object])),onAddFilter:l.a.func,onRemoveFilter:l.a.func,orderDesc:l.a.bool,pageLength:l.a.oneOfType([l.a.number,l.a.string]),percentMetrics:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.object])),tableFilter:l.a.bool,tableTimestampFormat:l.a.string,timeseriesLimitMetric:l.a.oneOfType([l.a.string,l.a.object])},m=Object(p.b)(u.a.INTEGER),v=Object(p.b)(u.a.PERCENT_3_POINT),y=function(){};function w(e,t){function a(e){for(var t=[],a=0;a<n.length;a+=1)t.push(n[a][e]);return t}var n=t.data,r=t.height,o=t.alignPositiveNegative,l=void 0!==o&&o,s=t.colorPositiveNegative,c=t.columns,d=t.filters,u=void 0===d?{}:d,g=t.includeSearch,w=t.metrics,T=t.onAddFilter,O=void 0===T?y:T,M=t.onRemoveFilter,N=void 0===M?y:M,x=t.orderDesc,A=t.pageLength,S=t.percentMetrics,L=t.tableFilter,I=t.tableTimestampFormat,k=t.timeseriesLimitMetric,F=f(e);F.addClass("superset-legacy-chart-table");for(var _=(w||[]).map((function(e){return e.label||e})).concat((S||[]).map((function(e){return"%"+e}))).filter((function(e){return"number"==typeof n[0][e]})),j={},E={},R=0;R<_.length;R+=1)l?j[_[R]]=i.a.max(a(_[R]).map(Math.abs)):(j[_[R]]=i.a.max(a(_[R])),E[_[R]]=i.a.min(a(_[R])));var C=Object(b.b)(I),P=i.a.select(e);P.html("");var D=P.append("table").classed("dataframe dataframe table table-striped table-condensed table-hover dataTable no-footer",!0).attr("width","100%");D.append("thead").append("tr").selectAll("th").data(c.map((function(e){return e.label}))).enter().append("th").text((function(e){return e})),D.append("tbody").selectAll("tr").data(n).enter().append("tr").selectAll("td").data((function(e){return c.map((function(t){var a,n=t.key,r=t.format,i=e[n],o=0<=_.indexOf(n);return"__timestamp"===n&&(a=C(i)),"string"==typeof i&&(a='<span class="like-pre">'+h.a.sanitize(i)+"</span>"),o&&(a=Object(p.b)(r)(i)),"%"===n[0]&&(a=v(i)),{col:n,val:i,html:a,isMetric:o}}))})).enter().append("td").style("background-image",(function(e){if(e.isMetric){var t=void 0!==s&&s&&0>e.val?150:0;if(l){var a=Math.abs(Math.round(e.val/j[e.col]*100));return"linear-gradient(to right, rgba("+t+",0,0,0.2), rgba("+t+",0,0,0.2) "+a+"%, rgba(0,0,0,0.01) "+a+"%, rgba(0,0,0,0.001) 100%)"}var n=Math.abs(Math.max(j[e.col],0)),r=Math.abs(Math.min(E[e.col],0)),i=n+r,o=Math.round(Math.min(r+e.val,r)/i*100),c=Math.round(Math.abs(e.val)/i*100);return"linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.001) "+o+"%, rgba("+t+",0,0,0.2) "+o+"%, rgba("+t+",0,0,0.2) "+(o+c)+"%, rgba(0,0,0,0.01) "+(o+c)+"%, rgba(0,0,0,0.001) 100%)"}return null})).classed("text-right",(function(e){return e.isMetric})).attr("title",(function(e){return"string"==typeof e.val?e.val:Number.isNaN(e.val)?null:m(e.val)})).attr("data-sort",(function(e){return e.isMetric?e.val:null})).classed("filtered",(function(e){return u&&u[e.col]&&0<=u[e.col].indexOf(e.val)})).on("click",(function(e){!e.isMetric&&L&&(i.a.select(this).classed("filtered")?(N(e.col,[e.val]),i.a.select(this).classed("filtered",!1)):(i.a.select(this).classed("filtered",!0),O(e.col,[e.val])))})).style("cursor",(function(e){return e.isMetric?"":"pointer"})).html((function(e){return e.html?e.html:e.val}));var $=F.find(".dataTable").DataTable({paging:A&&0<A,pageLength:A,aaSorting:[],searching:void 0!==g&&g,bInfo:!1,scrollY:r+"px",scrollCollapse:!0,scrollX:!0});!function(e,t){var a=e.find(".dataTables_scrollHead").height(),n=e.find(".dataTables_filter").height()||0,r=e.find(".dataTables_length").height()||0,i=e.find(".dataTables_paginate").height()||0,o=r>n?r:n;e.find(".dataTables_scrollBody").css("max-height",t-a-o-i)}(F.find(".dataTables_wrapper"),r);var Y,B=Array.isArray(k)?k[0]:k;if(B?Y=B.label||B:0<_.length&&(Y=_[0]),Y){var H=c.map((function(e){return e.key})).indexOf(Y);$.column(H).order(x?"desc":"asc"),0>_.indexOf(Y)&&$.column(H).visible(!1)}$.draw()}w.displayName="TableVis",w.propTypes=g;var T=w;t.default=Object(n.a)(T)}}]);