(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{2202:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(1977),i=r.n(l),o=r(1026),c=r.n(o),s=r(1960),d=r.n(s),h=r(1051),u=r.n(h),m=r(34),f=r(1049),g=r(145),p=r.n(g);const b=RegExp.prototype.test.bind(/(<([^>]+)>)/i);function y({value:e}){if(b(e)){const t=Object(a.useMemo)(()=>({__html:p.a.sanitize(e)}),[e]);return(n.a.createElement("div",{dangerouslySetInnerHTML:t}))}return n.a.createElement(n.a.Fragment,null,e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const O=()=>{},S=f.HEIGHT_TO_PX.micro,j={marginLeft:"auto",marginRight:"4px",zIndex:10};function E(e){let{column:t,alignPositiveNegative:r,colorPositiveNegative:l,enableFilter:i,isSelected:o,handleCellSelected:c}=e;const{format:s,type:d}=t,h="metric"===d,u={alignItems:"center",display:"flex",margin:"0px 16px",position:"relative",textAlign:h?"right":"left"},m={cursor:i&&!h?"pointer":"default",margin:"4px -16px",wordBreak:"break-all"},f=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},m,{backgroundColor:"#EBEBEB"}),g=i?e=>e?f:m:()=>m,p=Math.abs(Math.max(t.maxValue,0)),b=Math.abs(Math.min(t.minValue,0)),E=p+b;return({keyName:e,row:i})=>{const d=i.rowData.data[e],m={key:e,value:d},f=h?O:Object(a.useMemo)(()=>c(m),[m]);let p;if(h){let e=0,a=0;const i=d;r?a=Math.abs(Math.round(i/Math.max(t.maxValue,Math.abs(t.minValue))*100)):(e=Math.round(Math.min(b+i,b)/E*100),a=Math.round(Math.abs(i)/E*100));const o=l&&i<0?"#FFA8A8":"#ced4da";p=({children:t})=>{const r={background:o,borderRadius:3,height:S/2+4,left:"".concat(e,"%"),position:"absolute",width:"".concat(a,"%")};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:r}),n.a.createElement("div",{style:j},t))}}else p=n.a.Fragment;return n.a.createElement("div",{onClick:f},n.a.createElement("div",{style:g(o(m))},n.a.createElement("div",{style:u},n.a.createElement(p,null,s?s.format(d):n.a.createElement(y,{value:String(d)})))))}}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const M=()=>{},C=/(<([^>]+)>)/gi;function F(e){return"".concat(e.key,"#").concat(e.value)}class N extends n.a.PureComponent{constructor(e){super(e),x(this,"columnWidthSelector",Object(m.createSelector)(e=>e,e=>{const{rows:t,columns:r}=e,a=t&&t.length>0?Object.keys(t[0].data):[];let n=0;const l={},i={};return r.forEach(e=>{i[e.key]=e}),a.forEach(e=>{const r=i[e],a=null==r?void 0:r.format,o=10*Math.max(...t.map(t=>function(e,t){return t?t.format(e):"string"==typeof e?e.replace(C,""):String(e)}(t.data[e],a).length),e.length)+32;l[e]={maxWidth:300,width:o},n+=Math.min(o,300)}),{columnWidthMetaData:l,totalWidth:n}})),x(this,"handleCellSelected",e=>()=>{const{selectedCells:t}=this.state,{tableFilter:r,onRemoveFilter:a,onAddFilter:n}=this.props;if(!r)return;const l=new Set(Array.from(t)),i=F(e);l.has(i)?(l.delete(i),a(e.key,[e.value])):(l.add(i),n(e.key,[e.value])),this.setState({selectedCells:l})}),x(this,"isSelected",e=>{const{selectedCells:t}=this.state;return t.has(F(e))}),x(this,"handleSearch",e=>{const{searchKeyword:t}=this.state,{data:r}=this.props;if(t!==e){const t=r.filter(t=>Object.keys(t.data).map(e=>t.data[e]).join("|").toLowerCase().includes(e.toLowerCase()));this.setState({filteredRows:t,searchKeyword:e})}}),this.state={filteredRows:[],filters:e.filters,searchKeyword:"",selectedCells:new Set}}render(){const{cx:e,data:t,columns:r,alignPositiveNegative:a,colorPositiveNegative:l,height:o,width:s,tableFilter:h,styles:u,includeSearch:m}=this.props,{filteredRows:f,searchKeyword:g}=this.state,p=""===g?t:f,b={},y={};r.forEach(e=>{b[e.key]=E({alignPositiveNegative:a,colorPositiveNegative:l,column:e,enableFilter:h,handleCellSelected:this.handleCellSelected,isSelected:this.isSelected}),"metric"===e.type&&(y[e.key]={rightAlign:1})});const v=p&&p.length>0?Object.keys(p[0].data):[],w=this.columnWidthSelector({columns:r,rows:t});v.forEach(e=>{y[e]=k({},w.columnWidthMetaData[e],{},y[e]),b[e]||(b[e]=E({alignPositiveNegative:a,colorPositiveNegative:l,column:{key:e,label:e,type:"string"},enableFilter:h,handleCellSelected:this.handleCellSelected,isSelected:this.isSelected}))});const O=m?o-40:o;return n.a.createElement(n.a.Fragment,null,m&&n.a.createElement("div",{className:e(u.searchBar)},n.a.createElement("div",{className:e(u.searchBox)},n.a.createElement(d.a,{compact:!0,name:"search",label:"",placeholder:"Search",value:g,onChange:this.handleSearch})),n.a.createElement(c.a,{small:!0},"Showing ",p.length,"/",t.length," rows")),n.a.createElement("div",{className:e(u.container)},n.a.createElement(i.a,{zebra:!0,dynamicRowHeight:!0,data:p,keys:v,columnMetadata:y,rowHeight:"micro",renderers:b,height:O,width:Math.max(w.totalWidth,s),sortByValue:({data:e},t)=>"string"==typeof e[t]?e[t].toLowerCase():e[t]})))}}x(N,"defaultProps",{alignPositiveNegative:!1,colorPositiveNegative:!1,filters:{},includeSearch:!1,onAddFilter:M,onRemoveFilter:M}),x(N,"getDerivedStateFromProps",(e,t)=>{const{filters:r}=e,{selectedCells:a,filters:n}=t;if(n!==r){const e=new Set(Array.from(a));return Object.keys(r).forEach(t=>{r[t].forEach(r=>{e.add(F({key:t,value:r}))})}),k({},t,{filters:r,selectedCells:e})}return t});t.default=u()(({unit:e})=>({container:{display:"grid",overflowX:"scroll"},searchBar:{alignItems:"baseline",display:"flex",flexDirection:"row-reverse",flexGrow:0,marginBottom:e},searchBox:{marginLeft:e,width:25*e}}))(N)}}]);