(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1514:function(e,t,n){var r=n(285),i=n(1515);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},o=(r(i,a),i.locals?i.locals:{});e.exports=o},1515:function(e,t,n){(t=n(286)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.superset-legacy-chart-partition {\n  position: relative;\n}\n\n.superset-legacy-chart-partition .chart {\n  display: block;\n  margin: auto;\n  font-size: 11px;\n}\n\n.superset-legacy-chart-partition rect {\n  stroke: #eee;\n  fill: #aaa;\n  fill-opacity: 0.8;\n  transition: fill-opacity 180ms linear;\n  cursor: pointer;\n}\n\n.superset-legacy-chart-partition rect:hover {\n  fill-opacity: 1;\n}\n\n.superset-legacy-chart-partition g text {\n  font-weight: bold;\n  fill: rgba(0, 0, 0, 0.8);\n}\n\n.superset-legacy-chart-partition g:hover text {\n  fill: rgba(0, 0, 0, 1);\n}\n\n.superset-legacy-chart-partition .partition-tooltip {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  padding: 5px;\n  pointer-events: none;\n  background-color: rgba(255, 255, 255, 0.75);\n  border-radius: 5px;\n}\n\n.partition-tooltip td {\n  padding-left: 5px;\n  font-size: 11px;\n}\n',""]),e.exports=t},2146:function(e,t,n){"use strict";function r(e){var t=0,n=e.children,r=n&&n.length;if(r)for(;--r>=0;)t+=n[r].value;else t=1;e.value=t}n.d(t,"a",(function(){return i}));function i(e,t){var n,r,i,o,l,p=new c(e),h=+e.value&&(p.value=e.value),d=[p];for(null==t&&(t=a);n=d.pop();)if(h&&(n.value=+n.data.value),(i=t(n.data))&&(l=i.length))for(n.children=new Array(l),o=l-1;o>=0;--o)d.push(r=n.children[o]=new c(i[o])),r.parent=n,r.depth=n.depth+1;return p.eachBefore(s)}function a(e){return e.children}function o(e){e.data=e.data.data}function s(e){var t=0;do{e.height=t}while((e=e.parent)&&e.height<++t)}function c(e){this.data=e,this.depth=this.height=0,this.parent=null}c.prototype=i.prototype={constructor:c,count:function(){return this.eachAfter(r)},each:function(e){var t,n,r,i,a=this,o=[a];do{for(t=o.reverse(),o=[];a=t.pop();)if(e(a),n=a.children)for(r=0,i=n.length;r<i;++r)o.push(n[r])}while(o.length);return this},eachAfter:function(e){for(var t,n,r,i=this,a=[i],o=[];i=a.pop();)if(o.push(i),t=i.children)for(n=0,r=t.length;n<r;++n)a.push(t[n]);for(;i=o.pop();)e(i);return this},eachBefore:function(e){for(var t,n,r=this,i=[r];r=i.pop();)if(e(r),t=r.children)for(n=t.length-1;n>=0;--n)i.push(t[n]);return this},sum:function(e){return this.eachAfter((function(t){for(var n=+e(t.data)||0,r=t.children,i=r&&r.length;--i>=0;)n+=r[i].value;t.value=n}))},sort:function(e){return this.eachBefore((function(t){t.children&&t.children.sort(e)}))},path:function(e){for(var t=this,n=function(e,t){if(e===t)return e;var n=e.ancestors(),r=t.ancestors(),i=null;e=n.pop(),t=r.pop();for(;e===t;)i=e,e=n.pop(),t=r.pop();return i}(t,e),r=[t];t!==n;)t=t.parent,r.push(t);for(var i=r.length;e!==n;)r.splice(i,0,e),e=e.parent;return r},ancestors:function(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t},descendants:function(){var e=[];return this.each((function(t){e.push(t)})),e},leaves:function(){var e=[];return this.eachBefore((function(t){t.children||e.push(t)})),e},links:function(){var e=this,t=[];return e.each((function(n){n!==e&&t.push({source:n.parent,target:n})})),t},copy:function(){return i(this).eachBefore(o)}}},2212:function(e,t,n){"use strict";n.r(t);var r=n(978),i=n(68),a=n.n(i),o=n(3),s=n.n(o),c=n(2146),l=n(117),p=n(301),h=n(487);n(1514);function d(e){const t=[],n=1/(e.height+1);let r=null;return e.each(e=>{e.y=n*e.depth,e.dy=n,e.parent?(e.x=r.depth===e.parent.depth?0:r.x+r.dx,e.dx=e.weight/e.parent.sum*e.parent.dx):(e.x=0,e.dx=1),r=e,t.push(e)}),t}const u=e=>()=>e().apply(void 0,arguments),f=s.a.shape({name:s.a.string,val:s.a.number.isRequired}),g={name:s.a.string,val:s.a.number.isRequired,children:s.a.arrayOf(s.a.oneOfType([s.a.shape(u(()=>g)),f]))},m=s.a.oneOfType([s.a.shape(g),f]),y={data:s.a.arrayOf(m),width:s.a.number,height:s.a.number,colorScheme:s.a.string,dateTimeFormat:s.a.string,equalDateSize:s.a.bool,levels:s.a.arrayOf(s.a.string),metrics:s.a.arrayOf(s.a.oneOfType([s.a.string,s.a.object])),numberFormat:s.a.string,partitionLimit:s.a.number,partitionThreshold:s.a.number,timeSeriesOption:s.a.string,useLogScale:s.a.bool,useRichTooltip:s.a.bool};function v(e,t){const{width:n,height:r,data:i,colorScheme:o,dateTimeFormat:s,equalDateSize:u,levels:f,useLogScale:g=!1,metrics:m=[],numberFormat:y,partitionLimit:v,partitionThreshold:b,useRichTooltip:x,timeSeriesOption:w="not_time"}=t,O=a.a.select(e);O.classed("superset-legacy-chart-partition",!0);const S=["adv_anal","time_series"].includes(w),T=Object(p.c)(y),N=Object(h.c)(s),A=l.CategoricalColorNamespace.getScale(o);O.selectAll("*").remove();const L=O.append("div").classed("partition-tooltip",!0);function k(t,o){const s=o[t],l=n,p=r/i.length,h=a.a.scale.linear().range([0,l]),y=a.a.scale.linear().range([0,p]),w=O.append("div").attr("class","chart").style("width",l+"px").style("height",p+"px").append("svg:svg").attr("width",l).attr("height",p);t!==i.length-1&&i.length>1&&w.style("padding-bottom","3px"),0!==t&&i.length>1&&w.style("padding-top","3px");const k=Object(c.a)(s);function R(e){return m.includes(e.data.name)&&S}function C(e){return e?S&&1===e?"Date":f[e-(S?2:1)]:"Metric"}function I(t,n){let r="<table>";if(x){(function(e){const t=[e];let n=e;for(;n.parent;)t.push(n.parent),n=n.parent;return t})(n).reverse().forEach(e=>{const t=e.depth===n.depth;r+="<tbody>",r+="<tr><td><div style='border: 2px solid "+(t?"black":"transparent")+";background-color: "+e.color+";'></div></td><td>"+C(e.depth)+"</td><td>"+e.name+"</td><td>"+e.disp+"</td></tr>"})}else r+='<thead><tr><td colspan="3"><strong>'+C(n.depth)+"</strong></td></tr></thead><tbody>",r+="<tr><td><div style='border: thin solid grey; background-color: "+n.color+";'></div></td><td>"+n.name+"</td><td>"+n.disp+"</td></tr>";r+="</tbody></table>";const[i,o]=a.a.mouse(e);t.html(r).style("left",i+15+"px").style("top",o+"px")}k.eachAfter(e=>{e.disp=e.data.val,e.value=e.disp<0?-e.disp:e.disp,e.weight=e.value,e.name=e.data.name,e.parent&&R(e.parent)&&(e.weight=u?1:e.value,e.value=e.name,e.name=N(e.name)),g&&(e.weight=Math.log(e.weight+1)),e.disp=e.disp&&!Number.isNaN(e.disp)&&Number.isFinite(e.disp)?T(e.disp):""}),k.sort((e,t)=>{const n=t.value-e.value;return 0===n?t.name>e.name?1:-1:n}),b&&b>=0&&k.each(e=>{if(e.sum=e.children&&e.children.reduce((e,t)=>e+t.weight,0)||1,e.children)if(R(e)){if(u)return;const t=[];for(let n=1;n<e.children.length;n++)e.children[n].weight/e.sum<b&&t.push(n);for(let n=t.length-1;n>=0;n--)e.children.splice(t[n],1)}else{let t;for(t=1;t<e.children.length&&!(e.children[t].weight/e.sum<b);t++);e.children=e.children.slice(0,t)}}),v&&v>=0&&k.each(e=>{e.children&&e.children.length>v&&(R(e)||(e.children=e.children.slice(0,v)))}),k.eachAfter(e=>{e.sum=e.children&&e.children.reduce((e,t)=>e+t.weight,0)||1});const F=d(k);let j=l/k.dx,D=p/1;function B(e){return"translate(8,"+e.dx*D/2+")"}const E=w.selectAll("g").data(F).enter().append("svg:g").attr("transform",e=>"translate("+h(e.y)+","+y(e.x)+")").on("mouseover",e=>{L.interrupt().transition().duration(100).style("opacity",.9),I(L,e)}).on("mousemove",e=>{I(L,e)}).on("mouseout",()=>{L.interrupt().transition().duration(250).style("opacity",0)});E.on("click",(function e(t){if(!t.children)return!!t.parent&&e(t.parent);j=(t.y?l-40:l)/(1-t.y),D=p/t.dx,h.domain([t.y,1]).range([t.y?40:0,l]),y.domain([t.x,t.x+t.dx]);const n=E.transition().duration(a.a.event.altKey?7500:750).attr("transform",e=>"translate("+h(e.y)+","+y(e.x)+")");return n.select("rect").attr("width",t.dy*j).attr("height",e=>e.dx*D),n.select("text").attr("transform",B).style("opacity",e=>e.dx*D>12?1:0),a.a.event.stopPropagation(),!0})),E.append("svg:rect").attr("width",k.dy*j).attr("height",e=>e.dx*D),E.append("svg:text").attr("transform",B).attr("dy","0.35em").style("opacity",e=>e.dx*D>12?1:0).text(e=>e.disp?e.name+": "+e.disp:e.name),E.selectAll("rect").style("fill",e=>(e.color=A(e.name),e.color))}for(let e=0;e<i.length;e++)k(e,i)}v.displayName="Icicle",v.propTypes=y;var b=v;t.default=Object(r.a)(b)},978:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(3),i=n.n(r),a=n(0),o=n.n(a);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){class n extends o.a.Component{constructor(e){super(e),c(this,"container",void 0),this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==t?void 0:t.componentWillUnmount)&&t.componentWillUnmount.bind(this)()}setContainerRef(e){this.container=e}execute(){this.container&&e(this.container,this.props)}render(){const{id:e,className:t}=this.props;return o.a.createElement("div",{ref:this.setContainerRef,id:e,className:t})}}c(n,"propTypes",{id:i.a.string,className:i.a.string});const r=n;return e.displayName&&(r.displayName=e.displayName),e.propTypes&&(r.propTypes=s({},r.propTypes,{},e.propTypes)),e.defaultProps&&(r.defaultProps=e.defaultProps),n}}}]);