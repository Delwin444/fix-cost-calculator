(function(t){function e(e){for(var o,s,r=e[0],u=e[1],c=e[2],l=0,p=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e902c1b5"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=s(t);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}i[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/fix-cost-calculator/",r.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1267:function(t,e,n){"use strict";var o=n("73dd"),i=n.n(o);i.a},"4e2c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("5c0b"),n("2877")),r={},u=Object(s["a"])(r,i,a,!1,null,null,null),c=u.exports,l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Controls"),n("div",{staticClass:"calculator"},[n("Positions"),n("Result")],1),n("Graph")],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box"},[n("label",{attrs:{for:"enable-animations"}},[t._v("Enable Animations")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.enableAnimations,expression:"enableAnimations"}],attrs:{id:"enable-animations",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(t.enableAnimations)?t._i(t.enableAnimations,"true")>-1:t.enableAnimations},on:{change:function(e){var n=t.enableAnimations,o=e.target,i=!!o.checked;if(Array.isArray(n)){var a="true",s=t._i(n,a);o.checked?s<0&&(t.enableAnimations=n.concat([a])):s>-1&&(t.enableAnimations=n.slice(0,s).concat(n.slice(s+1)))}else t.enableAnimations=i}}})])},m=[],h={name:"Controls",data:function(){return{}},computed:{enableAnimations:{get:function(){return this.$store.state.enableAnimations},set:function(t){this.$store.commit("updateEnableAnimations",t)}}}},b=h,v=Object(s["a"])(b,f,m,!1,null,"6be55150",null),g=v.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box positions"},[n("Draggable",{attrs:{handle:".handle"},model:{value:t.positions,callback:function(e){t.positions=e},expression:"positions"}},[t.enableAnimations?[n("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.positions,(function(t,e){return n("li",{key:e},[n("Position",{attrs:{data:t}})],1)})),0)]:[n("ul",t._l(t.positions,(function(t,e){return n("li",{key:e},[n("Position",{attrs:{data:t}})],1)})),0)]],2),n("div",[n("button",{staticClass:"add-position",on:{click:t.addPosition}},[t._v("Add Position")])])],1)},A=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position"},[n("input",{staticClass:"name",attrs:{type:"text",placeholder:"Position Name"},domProps:{value:t.data.name},on:{input:function(e){return t.updateName(e,t.data)}}}),n("input",{attrs:{placeholder:"Kosten",type:"number",step:".01"},domProps:{value:t.data.cost},on:{input:function(e){return t.updateCost(e,t.data)}}}),n("button",{on:{click:function(e){return t.removePosition(t.data)}}},[t._v("Remove")]),n("span",{staticClass:"handle"})])},_=[],w=(n("b0c0"),{name:"Position",props:{data:Object},data:function(){return{tweenedCost:0}},computed:{positions:function(){return this.$store.state.positions}},methods:{removePosition:function(t){this.$store.commit("removePosition",t)},updateName:function(t,e){e.name=t.target.value,this.$store.commit("updatePosition",e)},updateCost:function(t,e){e.cost=t.target.value,this.$store.commit("updatePosition",e)}}}),C=w,x=(n("a28d"),Object(s["a"])(C,y,_,!1,null,"36df2db4",null)),O=x.exports,$=n("310e"),j=n.n($),k={name:"Positions",components:{Position:O,Draggable:j.a},computed:{positions:function(){return this.$store.state.positions},enableAnimations:function(){return this.$store.state.enableAnimations}},watch:{positions:function(t){localStorage.setItem("calculator",JSON.stringify(t))}},methods:{addPosition:function(){this.$store.commit("addPosition",{})}}},E=k,S=(n("7a65"),Object(s["a"])(E,P,A,!1,null,"fabc2cc2",null)),N=S.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box result"},[n("ul",t._l(t.positions,(function(e){return n("li",{key:e.id},[t._v(" "+t._s(e.name)+" "+t._s(e.cost)+" ")])})),0),t.enableAnimations?n("span",{domProps:{textContent:t._s(t.animatedResult)}}):n("span",{domProps:{textContent:t._s(t.result)}})])},D=[],G=(n("13d5"),n("b680"),n("cffa")),M={name:"Result",data:function(){return{tweenedResult:0}},computed:{positions:function(){return this.$store.getters.validPositions},result:function(){return this.$store.getters.validPositions.reduce((function(t,e){return t- -e.cost}),0).toFixed(2)},animatedResult:function(){return this.enableAnimations?this.tweenedResult.toFixed(2):0},enableAnimations:function(){return this.$store.state.enableAnimations}},beforeMount:function(){this.result&&(this.tweenedResult=parseFloat(this.result))},watch:{result:function(t){this.enableAnimations&&G["a"].to(this.$data,{duration:.5,tweenedResult:t})}}},T=M,F=Object(s["a"])(T,R,D,!1,null,"10e57811",null),J=F.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box graph"},[n("GChart",{attrs:{type:"PieChart",data:t.chartData,options:t.chartOptions}})],1)},z=[],H=(n("99af"),n("3f89")),L={name:"Graph",comments:{GChart:H["default"]},data:function(){return{chartOptions:{title:"Costs",is3D:!0,width:700,height:400}}},computed:{positions:function(){return this.$store.state.positions},chartData:function(){return[["Position","Cost"]].concat(this.$store.getters.chartData)},enableAnimations:function(){return this.$store.state.enableAnimations}},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://www.gstatic.com/charts/loader.js"),document.head.appendChild(t)},methods:{}},q=L,K=Object(s["a"])(q,I,z,!1,null,"6d5ed1c9",null),B=K.exports,Q={name:"Home",components:{Result:J,Positions:N,Controls:g,Graph:B}},U=Q,V=(n("1267"),Object(s["a"])(U,d,p,!1,null,"1b1583d2",null)),W=V.exports;o["a"].use(l["a"]);var X=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Y=new l["a"]({routes:X}),Z=Y,tt=(n("4de4"),n("c975"),n("d81d"),n("a434"),n("2f62"));o["a"].use(tt["a"]);var et=new tt["a"].Store({state:{positions:[{}],enableAnimations:!0},getters:{validPositions:function(t){return t.positions.filter((function(t){return!isNaN(t.cost)}))},chartData:function(t){return t.positions.filter((function(t){return!isNaN(t.cost)})).map((function(t){return[t.name,parseFloat(t.cost)]}))}},mutations:{initializeCalculator:function(t){localStorage.getItem("calculator")&&(t.positions=JSON.parse(localStorage.getItem("calculator")))},updateEnableAnimations:function(t,e){t.enableAnimations=e},addPosition:function(t,e){t.positions.push(e)},removePosition:function(t,e){t.positions.splice(t.positions.indexOf(e),1)},updatePosition:function(t,e){o["a"].set(t.positions,t.positions.indexOf(e),e)}},actions:{},modules:{}});o["a"].use(H["default"]),o["a"].config.productionTip=!1,new o["a"]({router:Z,store:et,beforeCreate:function(){this.$store.commit("initializeCalculator")},render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},"73dd":function(t,e,n){},"7a65":function(t,e,n){"use strict";var o=n("4e2c"),i=n.n(o);i.a},"9c0c":function(t,e,n){},a28d:function(t,e,n){"use strict";var o=n("a337"),i=n.n(o);i.a},a337:function(t,e,n){}});
//# sourceMappingURL=app.3daf7f39.js.map