/*! For license information please see 705.js.LICENSE.txt */
(self.webpackChunkmake_zero=self.webpackChunkmake_zero||[]).push([[705],{6485:t=>{function e(){return new DOMException("The request is not allowed","NotAllowedError")}t.exports=async function(t){try{await async function(t){if(!navigator.clipboard)throw e();return navigator.clipboard.writeText(t)}(t)}catch(n){try{await async function(t){const n=document.createElement("span");n.textContent=t,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);const o=window.getSelection(),s=window.document.createRange();o.removeAllRanges(),s.selectNode(n),o.addRange(s);let i=!1;try{i=window.document.execCommand("copy")}finally{o.removeAllRanges(),window.document.body.removeChild(n)}if(!i)throw e()}(t)}catch(t){throw t||n||e()}}}},5070:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(3645),s=n.n(o)()((function(t){return t[1]}));s.push([t.id,"\n.copy-append[data-v-59ea6f04] {\n  padding: 12px 12px !important;\n}\n",""]);const i=s},5003:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.storage=chrome.storage.sync}return t.getInstance=function(){return t.instance||(t.instance=new t),t.instance},t.prototype.getAsync=function(t,e){this.storage.get((function(n){var o=n[t];e&&e(o)}))},t.prototype.setAsync=function(t,e,n){var o={};o[t]=e,this.storage.set(o,(function(){return n&&n(t,e)}))},t}();e.default=n.getInstance()},6419:(t,e,n)=>{"use strict";var o=n(5003),s=function(){function t(){this.config={password:"123456",autoFill:!1},this.init()}return t.prototype.initialize=function(){this.changePassword("123456")},t.prototype.changePassword=function(e){this.config.password=e,o.default.setAsync(t.KEY,this.config)},t.prototype.getPassword=function(t){return this.init((function(e){return t&&t(e.password)})),this.config.password},t.prototype.changeAutoFill=function(e){this.config.autoFill=e,o.default.setAsync(t.KEY,this.config)},t.prototype.getAutoFill=function(t){return this.init((function(e){return t&&t(!!e.autoFill)})),this.config.autoFill},t.prototype.init=function(e){var n=this;o.default.getAsync(t.KEY,(function(t){t&&(n.config=t),e&&e(n.config)}))},t.getInstance=function(){return null==t.INSTANCE&&(t.INSTANCE=new t),t.INSTANCE},t.KEY="__CryptorConfig__",t}();e.default=s.getInstance()},7705:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{attrs:{"label-position":"left","label-width":"90px"}},[n("el-form-item",[n("template",{slot:"label"},[n("span",[t._v(t._s(t.$t("sns.auto.encryptLabel")))]),t._v(" "),n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("p",[t._v(t._s(t.$t("sns.auto.encryptTip")))])]),t._v(" "),n("i",{staticClass:"el-icon-question"})])],1),t._v(" "),n("el-switch",{attrs:{size:"mini"},model:{value:t.enabled,callback:function(e){t.enabled=e},expression:"enabled"}})],2),t._v(" "),n("el-form-item",{attrs:{label:t.$t("sns.password.title")}},[n("el-input",{model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[n("el-tooltip",{attrs:{slot:"append",content:t.$t("button.copy")},slot:"append"},[n("el-button",{staticClass:"copy-append",attrs:{icon:"el-icon-copy-document"},on:{click:function(e){return t.copyPsw()}}})],1)],1)],1)],1)],1)};o._withStripped=!0;var s=n(5874),i=n(6419);const a={name:"ZeroSetting",data:()=>({password:"",enabled:!1}),created(){i.default.getPassword((t=>this.password=t)),i.default.getAutoFill((t=>this.enabled=t))},watch:{password(t,e){i.default.changePassword(t)},enabled(t){i.default.changeAutoFill(t)}},methods:{copyPsw(){(0,s.Z)(this.password,this)}}};var c=n(3379),r=n.n(c),l=n(5070);r()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var u=(0,n(1900).Z)(a,o,[],!1,null,"59ea6f04",null);u.options.__file="src/view/popup/sns-zero/index.vue";const p=u.exports},5874:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});const o=n(6485);function s(t,e){o(t).then((t=>{e.$notify({message:e.$t("button.copied"),duration:1e3,type:"success"})})).catch((t=>{console.log(t)}))}}}]);