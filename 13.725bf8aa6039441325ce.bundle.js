(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1848:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(1685),i=r.n(o),l=r(954),c=r.n(l),u=r(1675),s=r.n(u),f=r(908),d=r.n(f),h=r(51),p=r(969),m=r(142),y=r.n(m),b=RegExp.prototype.test.bind(/(<([^>]+)>)/i);function v(e){var t=e.value;if(b(t)){var r=Object(n.useMemo)((function(){return{__html:y.a.sanitize(t)}}),[t]);return(a.a.createElement("div",{dangerouslySetInnerHTML:r}))}return a.a.createElement(a.a.Fragment,null,t)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O="#FFA8A8",S="#ced4da",j="#EBEBEB",P=function(){},E=p.HEIGHT_TO_PX.micro,k={marginLeft:"auto",marginRight:"4px",zIndex:10};function x(e){var t=e.column,r=e.alignPositiveNegative,o=e.colorPositiveNegative,i=e.enableFilter,l=e.isSelected,c=e.handleCellSelected,u=t.format,s="metric"===t.type,f={alignItems:"center",display:"flex",margin:"0px 16px",position:"relative",textAlign:s?"right":"left"},d={cursor:i&&!s?"pointer":"default",margin:"4px -16px",wordBreak:"break-all"},h=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},d,{backgroundColor:j}),p=i?function(e){return e?h:d}:function(){return d},m=Math.abs(Math.max(t.maxValue,0)),y=Math.abs(Math.min(t.minValue,0)),b=m+y;return function(e){var i,d=e.keyName,h=e.row.rowData.data[d],m={key:d,value:h},g=s?P:Object(n.useMemo)((function(){return c(m)}),[d,h]);if(s){var w=0,j=0,x=h;r?j=Math.abs(Math.round(x/Math.max(t.maxValue,Math.abs(t.minValue))*100)):(w=Math.round(Math.min(y+x,y)/b*100),j=Math.round(Math.abs(x)/b*100));var M=o&&x<0?O:S;i=function(e){var t=e.children,r={background:M,borderRadius:3,height:E/2+4,left:"".concat(w,"%"),position:"absolute",width:"".concat(j,"%")};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:r}),a.a.createElement("div",{style:k},t))}}else i=a.a.Fragment;return a.a.createElement("div",{onClick:g},a.a.createElement("div",{style:p(l(m))},a.a.createElement("div",{style:f},a.a.createElement(i,null,u?u.format(h):a.a.createElement(v,{value:h})))))}}function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var W=function(){},I={alignPositiveNegative:!1,colorPositiveNegative:!1,filters:{},includeSearch:!1,onAddFilter:W,onRemoveFilter:W},L=10,T=32,H=300,V=/(<([^>]+)>)/gi;function K(e){return"".concat(e.key,"#").concat(e.value)}var z=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=D(t).call(this,e),r=!a||"object"!==M(a)&&"function"!=typeof a?_(n):a,R(_(r),"columnWidthSelector",Object(h.a)((function(e){return e}),(function(e){var t=e.rows,r=e.columns,n=t&&t.length>0?Object.keys(t[0].data):[],a=0,o={},i={};return r.forEach((function(e){i[e.key]=e})),n.forEach((function(e){var r=i[e],n=r&&r.format,l=Math.max.apply(Math,N(t.map((function(t){return function(e,t){return t?t.format(e):"string"==typeof e?e.replace(V,""):String(e)}(t.data[e],n).length}))).concat([e.length]))*L+T;o[e]={maxWidth:H,width:l},a+=Math.min(l,H)})),{columnWidthMetaData:o,totalWidth:a}}))),R(_(r),"handleCellSelected",(function(e){return function(){var t=r.state.selectedCells,n=r.props,a=n.tableFilter,o=n.onRemoveFilter,i=n.onAddFilter;if(a){var l=new Set(Array.from(t)),c=K(e);l.has(c)?(l.delete(c),o(e.key,[e.value])):(l.add(c),i(e.key,[e.value])),r.setState({selectedCells:l})}}})),R(_(r),"isSelected",(function(e){return r.state.selectedCells.has(K(e))})),R(_(r),"handleSearch",(function(e){var t=r.state.searchKeyword,n=r.props.data;if(t!==e){var a=n.filter((function(t){return Object.keys(t.data).map((function(e){return t.data[e]})).join("|").toLowerCase().indexOf(e.toLowerCase())>=0}));r.setState({filteredRows:a,searchKeyword:e})}})),r.state={filteredRows:[],filters:e.filters,searchKeyword:"",selectedCells:new Set},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.cx,n=t.data,o=t.columns,l=t.alignPositiveNegative,u=t.colorPositiveNegative,f=t.height,d=t.width,h=t.tableFilter,p=t.styles,m=t.includeSearch,y=this.state,b=y.filteredRows,v=y.searchKeyword,g=""===v?n:b,w={},O={};o.forEach((function(t){w[t.key]=x({alignPositiveNegative:l,colorPositiveNegative:u,column:t,enableFilter:h,handleCellSelected:e.handleCellSelected,isSelected:e.isSelected}),"metric"===t.type&&(O[t.key]={rightAlign:1})}));var S=g&&g.length>0?Object.keys(g[0].data):[],j=this.columnWidthSelector({columns:o,rows:n});S.forEach((function(t){O[t]=F({},j.columnWidthMetaData[t],{},O[t]),w[t]||(w[t]=x({alignPositiveNegative:l,colorPositiveNegative:u,column:{key:t,label:t,type:"string"},enableFilter:h,handleCellSelected:e.handleCellSelected,isSelected:e.isSelected}))}));var P=m?f-40:f;return a.a.createElement(a.a.Fragment,null,m&&a.a.createElement("div",{className:r(p.searchBar)},a.a.createElement("div",{className:r(p.searchBox)},a.a.createElement(s.a,{name:"search",label:"",placeholder:"Search",onChange:this.handleSearch,compact:!0,value:v})),a.a.createElement(c.a,{small:!0},"Showing ",g.length,"/",n.length," rows")),a.a.createElement("div",{className:r(p.container)},a.a.createElement(i.a,{data:g,keys:S,columnMetadata:O,zebra:!0,dynamicRowHeight:!0,rowHeight:"micro",renderers:w,height:P,width:Math.max(j.totalWidth,d),sortByValue:function(e,t){var r=e.data;return"string"==typeof r[t]?r[t].toLowerCase():r[t]}})))}}])&&A(r.prototype,n),o&&A(r,o),t}(a.a.PureComponent);R(z,"defaultProps",I),R(z,"getDerivedStateFromProps",(function(e,t){var r=e.filters,n=t.selectedCells;if(t.filters!==r){var a=new Set(Array.from(n));return Object.keys(r).forEach((function(e){r[e].forEach((function(t){a.add(K({key:e,value:t}))}))})),F({},t,{filters:r,selectedCells:a})}return t}));t.default=d()((function(e){var t=e.unit;return{container:{display:"grid",overflowX:"scroll"},searchBar:{alignItems:"baseline",display:"flex",flexDirection:"row-reverse",flexGrow:0,marginBottom:t},searchBox:{marginLeft:t,width:25*t}}}))(z)}}]);