(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1039:function(e,t,r){"use strict";r.d(t,"b",(function(){return S})),r.d(t,"c",(function(){return L})),r.d(t,"a",(function(){return w}));var n=r(0),a=r.n(n),o=r(952),i=r.n(o),c=(r(2161),r(2205),r(1187)),l=(r(2220),r(2163)),s=(r(2164),r(1189)),u=r(2165),f=r(2221),d=r(1087),y=r(2166),p=r(2167),h=r(2168),m=r(1088),v=r(2169),k=r(2170),g=(r(2222),r(982),r(3)),b=r.n(g),x=r(985),O=r(1127);r(2162);function j(e,t){return Object.keys(e).reduce((function(r,n){return r[n]=function(e,t){return"function"==typeof e?e(t):e}(e[n],t),r}),{})}var T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r};function S(e){var t=e.from,r=void 0===t?new x.Point({x:0,y:0}):t,n=e.to,o=void 0===n?new x.Point({x:1,y:1}):n,c=e.stroke,l=void 0===c?"black":c,s=e.strokeWidth,u=void 0===s?1:s,f=e.strokeDasharray,d=void 0===f?"":f,y=e.transform,p=void 0===y?"":y,h=e.className,m=void 0===h?"":h,v=e.data,k=e.innerRef,g=E(e,["from","to","stroke","strokeWidth","strokeDasharray","transform","className","data","innerRef"]);return a.a.createElement("line",T({ref:k,className:i()("vx-line",m),x1:r.x,y1:r.y,x2:o.x,y2:o.y,stroke:l,strokeWidth:u,strokeDasharray:d,transform:p},j(g,v)))}function L(e){var t=e.data,r=e.xScale,n=e.yScale,o=e.x,l=e.y,s=e.defined,u=void 0===s?function(){return!0}:s,f=e.className,d=e.stroke,y=void 0===d?"steelblue":d,p=e.strokeWidth,h=void 0===p?2:p,m=e.strokeDasharray,v=void 0===m?"":m,k=e.strokeDashoffset,g=void 0===k?0:k,b=e.fill,x=void 0===b?"none":b,S=e.curve,L=void 0===S?O.a:S,w=e.glyph,M=e.innerRef,R=E(e,["data","xScale","yScale","x","y","defined","className","stroke","strokeWidth","strokeDasharray","strokeDashoffset","fill","curve","glyph","innerRef"]),W=Object(c.a)().x((function(e){return r(o(e))})).y((function(e){return n(l(e))})).defined(u).curve(L);return a.a.createElement("g",null,a.a.createElement("path",T({ref:M,className:i()("vx-linepath",f),d:W(t),stroke:y,strokeWidth:h,strokeDasharray:v,strokeDashoffset:g,fill:x},j(R,t))),w&&a.a.createElement("g",{className:"vx-linepath-glyphs"},t.map(w)))}function w(e){var t=e.children,r=e.x,n=e.x0,o=e.x1,c=e.y,s=e.y0,u=e.y1,f=e.xScale,d=e.yScale,y=e.data,p=void 0===y?[]:y,h=e.defined,m=void 0===h?function(){return!0}:h,v=e.className,k=e.strokeDasharray,g=e.strokeWidth,b=void 0===g?2:g,x=e.stroke,O=void 0===x?"black":x,S=e.fill,L=void 0===S?"rgba(0,0,0,0.3)":S,w=e.curve,M=e.innerRef,R=E(e,["children","x","x0","x1","y","y0","y1","xScale","yScale","data","defined","className","strokeDasharray","strokeWidth","stroke","fill","curve","innerRef"]),W=Object(l.a)();return r&&W.x((function(e){return f(r(e))})),n&&W.x0((function(e){return f(n(e))})),o&&W.x1((function(e){return f(o(e))})),c&&W.y((function(e){return d(c(e))})),s&&W.y0((function(e){return d(s(e))})),u&&W.y1((function(e){return d(u(e))})),m&&W.defined(m),w&&W.curve(w),t?t({path:W}):a.a.createElement("g",null,a.a.createElement("path",T({ref:M,className:i()("vx-area",v),d:W(p),stroke:O,strokeWidth:b,strokeDasharray:k,fill:L},j(R,p))))}function M(e){var t=e.className,r=e.innerRef,n=e.data,o=e.x,c=void 0===o?0:o,l=e.y,s=void 0===l?0:l,u=e.width,f=e.height,d=e.rx,y=e.ry,p=e.fill,h=void 0===p?"steelblue":p,m=e.fillOpacity,v=e.stroke,k=e.strokeWidth,g=e.strokeDasharray,b=e.strokeLinecap,x=e.strokeLinejoin,O=e.strokeMiterlimit,S=e.strokeOpacity,L=E(e,["className","innerRef","data","x","y","width","height","rx","ry","fill","fillOpacity","stroke","strokeWidth","strokeDasharray","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity"]);return a.a.createElement("rect",T({ref:r,className:i()("vx-bar",t),x:c,y:s,width:u,height:f,rx:d,ry:y,fill:h,fillOpacity:m,stroke:v,strokeWidth:k,strokeDasharray:g,strokeLinecap:b,strokeLinejoin:x,strokeMiterlimit:O,strokeOpacity:S},j(L,n)))}S.propTypes={innerRef:b.a.func},L.propTypes={innerRef:b.a.func},b.a.func,w.propTypes={x:b.a.func,x0:b.a.func,x1:b.a.func,y:b.a.func,y0:b.a.func,y1:b.a.func,xScale:b.a.func,yScale:b.a.func,data:b.a.array,defined:b.a.func,className:b.a.oneOfType([b.a.string,b.a.bool,b.a.object,b.a.array]),innerRef:b.a.func,strokeDasharray:b.a.string,strokeWidth:b.a.number,stroke:b.a.string,fill:b.a.string,curve:b.a.func},b.a.func,M.propTypes={innerRef:b.a.func},b.a.array.isRequired,b.a.func.isRequired,b.a.func.isRequired,b.a.func.isRequired,b.a.func.isRequired,b.a.func.isRequired,b.a.array.isRequired,b.a.number.isRequired,b.a.string,b.a.number,b.a.number,b.a.array.isRequired,b.a.func.isRequired,b.a.func.isRequired,b.a.func.isRequired,b.a.func.isRequired,b.a.array.isRequired,b.a.string,b.a.number,b.a.number,b.a.array.isRequired,b.a.func.isRequired,b.a.func.isRequired,b.a.func.isRequired,b.a.func.isRequired,b.a.array.isRequired,b.a.string,b.a.number,b.a.number;var R={ascending:s.a,descending:u.a,insideout:f.a,none:d.a,reverse:y.a};Object.keys(R);var W={expand:p.a,diverging:h.a,none:m.a,silhouette:v.a,wiggle:k.a};Object.keys(W);b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.number,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.number,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.number,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.number,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.number,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func,b.a.func},1077:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var n=r(34);const a={bottom:16,left:16,right:16,top:16};function o(e=a){return Object(n.createSelector)(e=>e.bottom,e=>e.left,e=>e.right,e=>e.top,(t=e.bottom,r=e.left,n=e.right,a=e.top)=>({bottom:t,left:r,right:n,top:a}))}},1078:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(34);function a(e){return Object(n.createSelector)(e=>e.encoding,e=>e.options,(t,r)=>new e({encoding:t,options:r}))}},1079:function(e,t,r){"use strict";function n(e){return void 0!==e&&e.length>0&&("string"==typeof e[0]||"number"==typeof e[0])}function a(e){const{type:t,domain:r,range:a,nice:o,paddingInner:i,paddingOuter:c}=e;let l;if("linear"===t||"time"===t||"band"===t)l=t;else{if("utc"!==t)throw new Error("Unsupported scale type: "+t);l="timeUtc"}const s={type:l};return n(r)&&(s.domain=r),n(a)&&(s.range=a),void 0!==o&&(s.nice=o),void 0!==i&&(s.paddingInner=i),void 0!==c&&(s.paddingOuter=c),s}r.d(t,"a",(function(){return a}))},1080:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(0),a=r.n(n),o=r(2186),i=r(2187);const c={display:"inline-block"};function l({item:e,MarkRenderer:t,LabelRenderer:r}){return a.a.createElement(o.a,{key:"legend-item-"+e.field+"-"+e.value,margin:"0 5px"},void 0===t?a.a.createElement("svg",{width:8,height:8,style:c},a.a.createElement("circle",{fill:e.encodedValues.color||e.encodedValues.stroke||e.encodedValues.fill||"#ccc",stroke:e.encodedValues.stroke||"none",r:4,cx:4,cy:4})):a.a.createElement(t,{item:e}),void 0===r?a.a.createElement(i.a,{align:"left",margin:"0 0 0 4px"},e.value):a.a.createElement(r,{item:e}))}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const u={display:"flex",flexBasis:"auto",flexDirection:"row",flexGrow:1,flexShrink:1,flexWrap:"wrap",fontSize:"0.8em",justifyContent:"flex-end",padding:8};function f({items:e,ItemRenderer:t=l,ItemMarkRenderer:r,ItemLabelRenderer:n,style:o}){const i=void 0===o?u:s({},u,{},o);return a.a.createElement("div",{style:i},e.map(e=>a.a.createElement(t,{key:"legend-item-"+e.field+"-"+e.value,item:e,MarkRenderer:r,LabelRenderer:n})))}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const y={display:"flex",flexBasis:"auto",flexGrow:1,flexShrink:1,maxHeight:100,overflowY:"auto",position:"relative"};class p extends n.PureComponent{render(){const{groups:e,LegendGroupRenderer:t=f,LegendItemRenderer:r,LegendItemMarkRenderer:n,LegendItemLabelRenderer:o,style:i}=this.props,c=void 0===i?y:d({},y,{},i);return a.a.createElement("div",{style:c},e.map(e=>a.a.createElement(t,{key:e[0].field,items:e,ItemRenderer:r,ItemMarkRenderer:n,ItemLabelRenderer:o})))}}function h(e,t,r){if(e.hasLegend()){const{LegendRenderer:n=p,LegendGroupRenderer:o,LegendItemRenderer:i,LegendItemLabelRenderer:c,LegendItemMarkRenderer:l}=r;return()=>a.a.createElement(n,{groups:e.getLegendInfos(t),LegendGroupRenderer:o,LegendItemRenderer:i,LegendItemMarkRenderer:l,LegendItemLabelRenderer:c})}}},1081:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(0),a=r.n(n),o=r(2184),i=r(2185),c=r(2182),l=r(2183);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function f({axisWidth:e,labelAngle:t,labelFlush:r,labelOverlap:n,orient:o,tickLabels:i,tickLabelDimensions:c,tickTextAnchor:l="middle"}){if("rotate"===n&&0!==t){let e=t>0?-6:6;"top"===o&&(e=0);const r="top"===o?-3:0;return n=>{let{x:o,y:i,formattedValue:c=""}=n,f=u(n,["x","y","dy","formattedValue"]);return a.a.createElement("g",{transform:"translate("+(o+e)+", "+(i+r)+")"},a.a.createElement("text",s({transform:"rotate("+t+")"},f,{textAnchor:l}),c))}}if(!0===r||"number"==typeof r){const t=new Map;return i.forEach((e,r)=>{t.set(e,c[r])}),n=>{let{x:o,y:i,formattedValue:c=""}=n,f=u(n,["x","y","dy","formattedValue"]);const d=t.get(c),y=void 0===d?0:d.width;let p=l,h=0;return o-y/2<0?(p="start","number"==typeof r&&(h-=r)):o+y/2>e&&(p="end","number"==typeof r&&(h+=r)),a.a.createElement("text",s({x:o+h,y:i},f,{textAnchor:p}),c)}}return null}var d=r(300);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class h{constructor(e){p(this,"chartWidth",void 0),p(this,"chartHeight",void 0),p(this,"containerWidth",void 0),p(this,"containerHeight",void 0),p(this,"margin",void 0),p(this,"xEncoder",void 0),p(this,"xLayout",void 0),p(this,"yEncoder",void 0),p(this,"yLayout",void 0);const{width:t,height:r,minContentWidth:n=0,minContentHeight:a=0,margin:o,xEncoder:i,xTickSize:l,xTickTextStyle:s,autoAdjustXMargin:u=!0,yEncoder:f,yTickSize:d,yTickTextStyle:y,autoAdjustYMargin:h=!0}=e;var m;(this.xEncoder=i,this.yEncoder=f,void 0!==f.axis)&&(this.yLayout=f.axis.computeLayout({axisWidth:Math.max(r-o.top-o.bottom),tickSize:null!=(m=f.axis.config.tickSize)?m:d,tickTextStyle:y}));const v=this.yLayout&&h?Object(c.a)(o,this.yLayout.minMargin):o,k=Math.max(t-v.left-v.right,n);var g;void 0!==i.axis&&(this.xLayout=i.axis.computeLayout({axisWidth:k,labelAngle:this.recommendXLabelAngle(i.axis.config.orient),tickSize:null!=(g=i.axis.config.tickSize)?g:l,tickTextStyle:s}));const b=this.xLayout&&u?Object(c.a)(v,this.xLayout.minMargin):v,x=Math.max(r-b.top-b.bottom,a),O=Math.round(k+b.left+b.right),j=Math.round(x+b.top+b.bottom),T=O>t,E=j>r;T&&(b.bottom+=8),E&&(b.right+=8),this.chartWidth=T?O+8:O,this.chartHeight=E?j+8:j,this.containerWidth=t,this.containerHeight=r,this.margin=b}recommendXLabelAngle(e="bottom"){const{axis:t}=this.yEncoder;return!this.yLayout||void 0!==t&&("right"===t.config.orient&&"bottom"===e||"left"===t.config.orient&&"top"===e)?d.a:-d.a}renderChartWithFrame(e){return a.a.createElement(l.a,{width:this.containerWidth,height:this.containerHeight,contentWidth:this.chartWidth,contentHeight:this.chartHeight,renderContent:e})}renderXAxis(e){const{axis:t}=this.xEncoder;return t&&this.xLayout?a.a.createElement(o.a,y({label:t.getTitle(),labelOffset:this.xLayout.labelOffset,numTicks:t.config.tickCount,orientation:t.config.orient,tickComponent:f(this.xLayout),tickFormat:t.getFormat()},e)):null}renderYAxis(e){const{axis:t}=this.yEncoder;return t&&this.yLayout?a.a.createElement(i.a,y({label:t.getTitle(),labelOffset:this.yLayout.labelOffset,numTicks:t.config.tickCount,orientation:t.config.orient,tickFormat:t.getFormat()},e)):null}}function m(e){const{width:t,height:r,minContentWidth:n,minContentHeight:a,margin:o,xEncoder:i,yEncoder:c,theme:l}=e;return new h({height:r,margin:o,minContentHeight:a,minContentWidth:n,width:t,xEncoder:i,xTickSize:l.xTickStyles.length||l.xTickStyles.tickLength,xTickTextStyle:l.xTickStyles.label.bottom||l.xTickStyles.label.top,yEncoder:c,yTickSize:l.yTickStyles.length||l.yTickStyles.tickLength,yTickTextStyle:l.yTickStyles.label.left||l.yTickStyles.label.right})}},1136:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=c;var a=i(r(0)),o=i(r(3));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.children,r=e.id,o=e.from,i=e.to,c=e.x1,l=e.y1,s=e.x2,u=e.y2,f=e.fromOffset,d=void 0===f?"0%":f,y=e.fromOpacity,p=void 0===y?1:y,h=e.toOffset,m=void 0===h?"100%":h,v=e.toOpacity,k=void 0===v?1:v,g=e.rotate,b=e.transform,x=e.vertical,O=void 0===x||x,j=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]);return!O||c||s||l||u||(c="0",s="0",l="0",u="1"),a.default.createElement("defs",null,a.default.createElement("linearGradient",n({id:r,x1:c,y1:l,x2:s,y2:u,gradientTransform:g?"rotate("+g+")":b},j),!!t&&t,!t&&a.default.createElement("stop",{offset:d,stopColor:o,stopOpacity:p}),!t&&a.default.createElement("stop",{offset:m,stopColor:i,stopOpacity:k})))}c.propTypes={id:o.default.string.isRequired,from:o.default.string,to:o.default.string,x1:o.default.string,y1:o.default.string,y2:o.default.string,fromOffset:o.default.string,fromOpacity:o.default.number,toOffset:o.default.string,toOpacity:o.default.number,rotate:o.default.oneOfType([o.default.string,o.default.number]),transform:o.default.string}},1180:function(e,t,r){"use strict";t.__esModule=!0,t.default=t.propTypes=t.withTooltipPropTypes=t.Tooltip=void 0;var n=s(r(0)),a=s(r(3)),o=s(r(1124)),i=s(r(1185)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1184)),l=s(r(1085));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){return(f=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}t.Tooltip=l.default;var d={onMouseMove:a.default.func,onMouseLeave:a.default.func,tooltipData:a.default.any};t.withTooltipPropTypes=d;var y=f({},c.withTooltipPropTypes,{children:a.default.oneOfType([a.default.object,a.default.func]).isRequired,className:a.default.string,HoverStyles:a.default.oneOfType([a.default.object,a.default.func]),renderTooltip:a.default.func,styles:a.default.objectOf(a.default.oneOfType([a.default.string,a.default.number])),TooltipComponent:a.default.oneOfType([a.default.object,a.default.func]),tooltipProps:a.default.object,tooltipTimeout:a.default.number});t.propTypes=y;var p={className:null,HoverStyles:function(){return n.default.createElement("style",{type:"text/css"},"\n      .vx-arc:hover,\n      .vx-bar:hover,\n      .vx-glyph-dot:hover {\n        opacity: 0.7;\n      }\n    ")},renderTooltip:null,styles:{display:"inline-block",position:"relative"},TooltipComponent:c.default,tooltipProps:null,tooltipTimeout:200},h=function(e){function t(t){var r;return(r=e.call(this,t)||this).handleMouseMove=r.handleMouseMove.bind(u(u(r))),r.handleMouseLeave=r.handleMouseLeave.bind(u(u(r))),r.tooltipTimeout=null,r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this.tooltipTimeout&&clearTimeout(this.tooltipTimeout)},r.handleMouseMove=function(e){var t=e.event,r=e.datum,n=e.coords,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],0<=t.indexOf(r)||(a[r]=e[r]);return a}(e,["event","datum","coords"]),i=this.props.showTooltip;this.tooltipTimeout&&clearTimeout(this.tooltipTimeout);var c={x:0,y:0};t&&t.target&&"focus"!==t.type&&t.target.ownerSVGElement&&(c=(0,o.default)(t.target.ownerSVGElement,t)),i({tooltipLeft:(c=f({},c,n)).x,tooltipTop:c.y,tooltipData:f({event:t,datum:r},a)})},r.handleMouseLeave=function(){var e=this.props,t=e.tooltipTimeout,r=e.hideTooltip;this.tooltipTimeout=setTimeout((function(){r()}),t)},r.render=function(){var e=this.props,t=e.children,r=e.className,a=e.HoverStyles,o=e.tooltipData,i=e.tooltipOpen,c=e.tooltipLeft,l=e.tooltipTop,s=e.tooltipProps,u=e.renderTooltip,d=e.styles,y=e.TooltipComponent,p={onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,tooltipData:o},h=u&&i&&y&&u(o);return n.default.createElement("div",{style:d,className:r},"function"==typeof t?t(p):n.default.cloneElement(n.default.Children.only(t),p),!!h&&n.default.createElement(y,f({key:Math.random(),top:l,left:c},s),h),a&&n.default.createElement(a,null))},t}(n.default.PureComponent);h.propTypes=y,h.defaultProps=p;var m=(0,i.default)(h);t.default=m},1182:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(0),a=r.n(n),o=r(982),i=r(952),c=r.n(i),l=(r(2162),r(1036)),s=(Math.sqrt(1/3),Math.sin(l.j/10)/Math.sin(7*l.j/10));Math.sin(l.m/10),Math.cos(l.m/10),Math.sqrt(3),Math.sqrt(3),Math.sqrt(12),r(1007);function u(e){var t=e.top,r=void 0===t?0:t,n=e.left,i=void 0===n?0:n,l=e.className,s=e.children;return a.a.createElement(o.a,{className:c()("vx-glyph",l),top:r,left:i},s)}var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r};function y(e){var t=e.top,r=void 0===t?0:t,n=e.left,o=void 0===n?0:n,i=e.className,l=e.children,s=e.cx,y=e.cy,p=e.r,h=e.fill,m=e.stroke,v=e.strokeWidth,k=e.strokeDasharray,g=d(e,["top","left","className","children","cx","cy","r","fill","stroke","strokeWidth","strokeDasharray"]);return a.a.createElement(u,{top:r,left:o},a.a.createElement("circle",f({className:c()("vx-glyph-dot",i),cx:s,cy:y,r:p,fill:h,stroke:m,strokeWidth:v,strokeDasharray:k},g)),l)}},1552:function(e,t,r){"use strict";var n=r(1136),a=r.n(n);t.a=a.a},1553:function(e,t,r){"use strict";r.d(t,"a",(function(){return E}));var n=r(1039),a=r(1125),o=r(2179),i=r(982),c=r(3),l=r.n(c),s=r(0),u=r.n(s),f=r(986),d=r(979),y=r(1092),p=r(1082);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m=h({},r(1038).a,{data:f.a.isRequired,fill:l.a.oneOfType([l.a.func,l.a.string]),fillOpacity:l.a.oneOfType([l.a.func,l.a.number]),interpolation:f.d,stroke:l.a.oneOfType([l.a.func,l.a.string]),strokeDasharray:l.a.oneOfType([l.a.func,l.a.string]),strokeWidth:l.a.oneOfType([l.a.func,l.a.number]),strokeLinecap:l.a.oneOf(["butt","square","round","inherit"])}),v={interpolation:"monotoneX",stroke:a.a.default,strokeWidth:3,strokeDasharray:null,strokeLinecap:"round",fill:a.a.default,fillOpacity:.3},k=function(e){return e&&e.x},g=function(e){return e&&e.y},b=function(e){return e&&e.y0},x=function(e){return e&&e.y1},O=function(e){return Object(d.j)(g(e))},j=function(e){return Object(d.j)(b(e))&&Object(d.j)(x(e))},T={pointerEvents:"none"},E=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.data,r=e.disableMouseEvents,a=e.xScale,c=e.yScale,l=e.margin,s=e.stroke,f=e.strokeWidth,h=e.strokeDasharray,m=e.strokeLinecap,v=e.fill,E=e.fillOpacity,S=e.interpolation,L=e.onClick,w=e.onMouseMove,M=e.onMouseLeave;if(!a||!c)return null;var R=t[0]||{},W=!j(R),D=c.domain()[0],C=W?function(){return D}:b,P=W?g:x,q=W?O:j,N=Object(d.b)(h,t),F=Object(d.b)(s,t),H=Object(d.b)(f,t),_=Object(d.b)(v,t),I=p.a[S]||p.a.monotoneX;return u.a.createElement(i.a,{style:r?T:null,onClick:r?null:L&&function(e){var r=Object(y.a)({data:t,getX:k,event:e,xScale:a,marginLeft:l.left});L({event:e,data:t,datum:r,color:_})},onMouseMove:r?null:w&&function(e){var r=Object(y.a)({data:t,getX:k,event:e,xScale:a,marginLeft:l.left});w({event:e,data:t,datum:r,color:_})},onMouseLeave:r?null:M},u.a.createElement(n.a,{data:t,x:k,y0:C,y1:P,xScale:a,yScale:c,fill:_,fillOpacity:Object(d.b)(E,t),stroke:"transparent",strokeWidth:H,curve:I,defined:q}),H>0&&!W&&u.a.createElement(n.c,{data:t,x:k,y:C,xScale:a,yScale:c,stroke:F,strokeWidth:H,strokeDasharray:N,strokeLinecap:m,curve:I,glyph:null,defined:q}),u.a.createElement(n.c,{data:t,x:k,y:P,xScale:a,yScale:c,stroke:F,strokeWidth:H,strokeDasharray:N,strokeLinecap:m,curve:I,defined:q,glyph:function(e,n){return u.a.createElement(o.a,{key:"areapoint-"+n,onBlur:r?null:M,onFocus:r?null:function(r){w({event:r,data:t,datum:e,color:F,index:n})}})}}))},a}(u.a.PureComponent);E.propTypes=m,E.defaultProps=v,E.displayName="AreaSeries"},1554:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(3),i=r.n(o),c=r(977),l=r(1125),s=r(982),u=r(1039),f=r(979);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var y={pointerEvents:"none"},p={fullHeight:i.a.bool,fullWidth:i.a.bool,circleSize:i.a.oneOfType([i.a.func,i.a.number]),circleFill:i.a.oneOfType([i.a.func,i.a.string]),circleStroke:i.a.oneOfType([i.a.func,i.a.string]),circleStyles:i.a.oneOfType([i.a.func,i.a.objectOf(i.a.oneOfType([i.a.number,i.a.string]))]),lineStyles:i.a.objectOf(i.a.oneOfType([i.a.number,i.a.string])),showCircle:i.a.bool,showMultipleCircles:i.a.bool,showHorizontalLine:i.a.bool,showVerticalLine:i.a.bool,stroke:i.a.oneOfType([i.a.func,i.a.string]),strokeDasharray:i.a.oneOfType([i.a.func,i.a.string]),strokeWidth:i.a.oneOfType([i.a.func,i.a.number]),datum:i.a.object,series:i.a.objectOf(i.a.object),getScaledX:i.a.func,getScaledY:i.a.func,xScale:i.a.func,yScale:i.a.func},h={circleSize:4,circleFill:l.a.grays[7],circleStroke:"#ffffff",circleStyles:{pointerEvents:"none"},datum:{},getScaledX:null,getScaledY:null,lineStyles:{pointerEvents:"none"},fullHeight:!1,fullWidth:!1,series:{},showCircle:!0,showMultipleCircles:!1,showHorizontalLine:!0,showVerticalLine:!0,stroke:l.a.grays[6],strokeDasharray:"5,2",strokeWidth:1,xScale:null,yScale:null};function m(e){var t=e.circleFill,r=e.circleSize,n=e.circleStroke,o=e.circleStyles,i=e.datum,l=e.getScaledX,p=e.getScaledY,h=e.fullHeight,m=e.fullWidth,v=e.lineStyles,k=e.series,g=e.showHorizontalLine,b=e.showCircle,x=e.showMultipleCircles,O=e.showVerticalLine,j=e.stroke,T=e.strokeDasharray,E=e.strokeWidth,S=e.xScale,L=e.yScale;if(!(S&&L&&l&&p))return null;var w=Object(c.e)(S.range()),M=w[0],R=w[1],W=Object(c.e)(L.range()),D=W[0],C=W[1],P=x&&k&&Object.keys(k).length>0?Object.keys(k).map((function(e){return d({seriesKey:e},k[e])})):[i],q=P.map((function(e){return{x:l(e),y:p(e)}}));return a.a.createElement(s.a,{style:y},g&&!x&&Object(f.j)(q[0].y)&&a.a.createElement(u.b,{from:{x:M,y:q[0].y},to:{x:m?R:q[0].x,y:q[0].y},style:v,stroke:j,strokeDasharray:T,strokeWidth:E}),O&&Object(f.j)(q[0].x)&&a.a.createElement(u.b,{from:{x:q[0].x,y:C},to:{x:q[0].x,y:h?D:q[0].y},style:v,stroke:j,strokeDasharray:T,strokeWidth:E}),(b||x)&&P.map((function(e,i){var c=q[i],l=c.x,s=c.y;return Object(f.j)(l)&&Object(f.j)(s)&&a.a.createElement("circle",{key:"circle-"+(e.seriesKey||i),cx:l,cy:s,r:Object(f.b)(r,e,i),fill:Object(f.b)(t,e,i),strokeWidth:1,stroke:Object(f.b)(n,e,i),style:Object(f.b)(o,e,i)})})))}m.propTypes=p,m.defaultProps=h,m.displayName="CrossHair",t.a=m},2198:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return G}));var n=r(3),a=r.n(n),o=r(0),i=r.n(o),c=r(36),l=r(1552),s=r(1553),u=r(1125),f=r(2179),d=r(1182),y=r(1039),p=r(979),h=r(1092),m=r(1082),v=r(986);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=k({},r(1038).a,{data:v.e.isRequired,interpolation:v.d,showPoints:a.a.bool,stroke:a.a.oneOfType([a.a.func,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.func,a.a.string]),strokeWidth:a.a.oneOfType([a.a.func,a.a.number]),strokeOpacity:a.a.oneOfType([a.a.func,a.a.number]),strokeLinecap:a.a.oneOf(["butt","square","round","inherit"])}),b={interpolation:"monotoneX",showPoints:!1,stroke:u.a.default,strokeDasharray:null,strokeWidth:3,strokeOpacity:1,strokeLinecap:"round"},x=function(e){return e.x},O=function(e){return e.y},j=function(e){return Object(p.j)(O(e))},T={pointerEvents:"none"},E=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.data,r=e.disableMouseEvents,n=e.interpolation,a=e.showPoints,o=e.stroke,c=e.strokeDasharray,l=e.strokeWidth,s=e.strokeLinecap,u=e.strokeOpacity,v=e.xScale,k=e.yScale,g=e.margin,b=e.onClick,E=e.onMouseMove,S=e.onMouseLeave;if(!v||!k)return null;var L=Object(p.b)(o),w=Object(p.b)(u),M=m.a[n]||m.a.monotoneX;return i.a.createElement(y.c,{style:r?T:null,data:t,xScale:v,yScale:k,x:x,y:O,stroke:L,strokeWidth:Object(p.b)(l),strokeDasharray:Object(p.b)(c),strokeLinecap:s,strokeOpacity:w,curve:M,defined:j,onClick:r?null:b&&function(){return function(e){var r=Object(h.a)({data:t,getX:x,event:e,xScale:v,marginLeft:g.left});b({event:e,data:t,datum:r,color:L})}},onMouseMove:r?null:E&&function(){return function(e){var r=Object(h.a)({data:t,getX:x,event:e,xScale:v,marginLeft:g.left});E({event:e,data:t,datum:r,color:L})}},onMouseLeave:r?null:S&&function(){return S},glyph:function(e,n){return Object(p.j)(x(e))&&Object(p.j)(O(e))&&i.a.createElement(f.a,{key:"linepoint-"+n,onBlur:r?null:S,onFocus:r?null:function(r){E({event:r,data:t,datum:e,color:e.stroke||Object(p.b)(o,e,n),index:n})}},a&&i.a.createElement(d.a,{key:n+"-"+x(e),cx:v(x(e)),cy:k(O(e)),r:4,fill:e.stroke||Object(p.b)(o,e,n),stroke:"#FFFFFF",strokeWidth:1,style:{pointerEvents:"none"}},e.label&&i.a.createElement("text",{x:v(x(e)),y:k(O(e)),dx:10,fill:e.stroke||Object(p.b)(o,e,n),stroke:"#fff",strokeWidth:1,fontSize:12},e.label)))}})},n}(i.a.PureComponent);E.propTypes=g,E.defaultProps=b,E.displayName="LineSeries";var S=r(1180),L=r.n(S).a,w=r(2191),M=r(1554),R=r(2204),W=r(2219),D=r(34),C=r(429),P=r(2180),q=r(2181);const N={marginRight:4};var F=r(1077),H=r(1079),_=r(1081),I=r(1078),z=r(1080);function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const A={className:"",margin:F.a,theme:R.a,TooltipRenderer:function({allSeries:e,datum:t,encoder:r,series:n={},theme:a=R.a}){return i.a.createElement(P.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{fontFamily:a.labelStyles.fontFamily}},i.a.createElement("strong",null,r.channels.x.formatValue(t.x))),i.a.createElement("br",null),n&&i.a.createElement(q.a,{data:e.filter(({key:e})=>n[e]).concat().sort((e,t)=>n[t.key].y-n[e.key].y).map(({key:e,stroke:a,strokeDasharray:o,strokeWidth:c})=>({key:e,keyColumn:i.a.createElement(i.a.Fragment,null,i.a.createElement("svg",{width:"12",height:"8",style:N},i.a.createElement("line",{x2:"12",y1:"3",y2:"3",stroke:a,strokeWidth:c,strokeDasharray:o})),n[e]===t?i.a.createElement("b",null,e):e),valueColumn:r.channels.y.formatValue(n[e].y)}))})))}},V={strokeWidth:1.5};class G extends o.PureComponent{constructor(e){super(e),X(this,"createEncoder",Object(I.a)(C.a)),X(this,"createAllSeries",Object(D.createSelector)(e=>e.encoder,e=>e.data,(e,t)=>{const{channels:r}=e,n=e.getGroupBys(),a=Object(c.groupBy)(t,e=>n.map(t=>t+"="+e[t]).join(","));return Object(c.values)(a).map(e=>{const t=e[0],a=n.map(e=>t[e]).join(","),o={key:0===a.length?r.y.getTitle():a,fill:r.fill.encode(t,!1),stroke:r.stroke.encode(t,"#222"),strokeDasharray:r.strokeDasharray.encode(t,""),strokeWidth:r.strokeWidth.encode(t,1),values:[]};return o.values=e.map(e=>({x:r.x.get(e),y:r.y.get(e),data:e,parent:o})).sort((e,t)=>(e.x instanceof Date?e.x.getTime():e.x)-(t.x instanceof Date?t.x.getTime():t.x)),o})})),X(this,"createMargin",Object(F.b)()),this.renderChart=this.renderChart.bind(this)}renderSeries(e){const t=Object(c.flatMap)(e.filter(({fill:e})=>e).map(e=>{const t=Object(c.uniqueId)(Object(c.kebabCase)("gradient-"+e.key));return[i.a.createElement(l.a,{key:e.key+"-gradient",id:t,from:e.stroke,to:"#fff"}),i.a.createElement(s.a,{key:e.key+"-fill",seriesKey:e.key,data:e.values,interpolation:"linear",fill:"url(#"+t+")",stroke:e.stroke,strokeWidth:e.strokeWidth})]})),r=e.filter(({fill:e})=>!e).map(e=>i.a.createElement(E,{key:e.key,seriesKey:e.key,interpolation:"linear",data:e.values,stroke:e.stroke,strokeDasharray:e.strokeDasharray,strokeWidth:e.strokeWidth}));return t.concat(r)}renderChart(e){const{width:t,height:r}=e,{data:n,margin:a,theme:o,TooltipRenderer:c}=this.props,l=this.createEncoder(this.props),{channels:s}=l;if(void 0!==s.x.scale){const e=s.x.getDomain(n);s.x.scale.setDomain(e)}if(void 0!==s.y.scale){const e=s.y.getDomain(n);s.y.scale.setDomain(e)}const u=this.createAllSeries({encoder:l,data:n}),f=Object(_.a)({width:t,height:r,margin:this.createMargin(a),theme:o,xEncoder:s.x,yEncoder:s.y});return f.renderChartWithFrame(e=>i.a.createElement(L,{renderTooltip:({datum:e,series:t})=>i.a.createElement(c,{encoder:l,allSeries:u,datum:e,series:t,theme:o})},t=>{let{onMouseLeave:r,onMouseMove:n,tooltipData:a}=t;return i.a.createElement(w.a,{showYGrid:!0,snapTooltipToDataX:!0,width:e.width,height:e.height,ariaLabel:"LineChart",eventTrigger:"container",margin:f.margin,renderTooltip:null,theme:o,tooltipData:a,xScale:Object(H.a)(s.x.scale.config),yScale:Object(H.a)(s.y.scale.config),onMouseMove:n,onMouseLeave:r},f.renderXAxis(),f.renderYAxis(),this.renderSeries(u),i.a.createElement(M.a,{fullHeight:!0,showCircle:!0,showMultipleCircles:!0,strokeDasharray:"",showHorizontalLine:!1,circleFill:e=>e.y===a.datum.y?e.parent.stroke:"#fff",circleSize:e=>e.y===a.datum.y?6:4,circleStroke:e=>e.y===a.datum.y?"#fff":e.parent.stroke,circleStyles:V,stroke:"#ccc"}))}))}render(){const{className:e,data:t,width:r,height:n}=this.props,a=this.createEncoder(this.props);return i.a.createElement(W.a,{className:"superset-chart-line "+e,width:r,height:n,position:"top",renderLegend:Object(z.a)(a,t,this.props),renderChart:this.renderChart})}}X(G,"propTypes",{className:a.a.string,width:a.a.oneOfType([a.a.string,a.a.number]).isRequired,height:a.a.oneOfType([a.a.string,a.a.number]).isRequired,TooltipRenderer:a.a.elementType,theme:a.a.any}),X(G,"defaultProps",A)}}]);