(self.webpackChunkmake_zero=self.webpackChunkmake_zero||[]).push([[672],{3791:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.storage=chrome.storage.sync}return e.getInstance=function(){return e.instance||(e.instance=new e),e.instance},e.prototype.getAsync=function(e,t){this.storage.get((function(n){var o=n[e];t&&t(o)}))},e.prototype.setAsync=function(e,t,n){var o={};o[e]=t,this.storage.set(o,(function(){return n&&n(e,t)}))},e}();t.default=n.getInstance()},5578:(e,t,n)=>{"use strict";var o=n(3791),s=function(){function e(){this.config={password:"123456",autoFill:!1},this.init()}return e.prototype.initialize=function(){this.changePassword("123456")},e.prototype.changePassword=function(t){this.config.password=t,o.default.setAsync(e.KEY,this.config)},e.prototype.getPassword=function(e){return this.init((function(t){return e&&e(t.password)})),this.config.password},e.prototype.changeAutoFill=function(t){this.config.autoFill=t,o.default.setAsync(e.KEY,this.config)},e.prototype.getAutoFill=function(e){return this.init((function(t){return e&&e(!!t.autoFill)})),this.config.autoFill},e.prototype.init=function(t){var n=this;o.default.getAsync(e.KEY,(function(e){e&&(n.config=e),t&&t(n.config)}))},e.getInstance=function(){return null==e.INSTANCE&&(e.INSTANCE=new e),e.INSTANCE},e.KEY="__CryptorConfig__",e}();t.default=s.getInstance()},5672:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("加密设置")]),e._v(" "),n("form",[e._v("\n    开启\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.enabled,expression:"enabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enabled)?e._i(e.enabled,null)>-1:e.enabled},on:{change:function(t){var n=e.enabled,o=t.target,s=!!o.checked;if(Array.isArray(n)){var a=e._i(n,null);o.checked?a<0&&(e.enabled=n.concat([null])):a>-1&&(e.enabled=n.slice(0,a).concat(n.slice(a+1)))}else e.enabled=s}}}),e._v("\n    口令\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])])};o._withStripped=!0;var s=n(5578);const a={name:"ZeroSetting",data:()=>({password:"",enabled:!1}),created(){s.default.getPassword((e=>this.password=e)),s.default.getAutoFill((e=>this.enabled=e))},watch:{password(e,t){s.default.changePassword(e)},enabled(e){s.default.changeAutoFill(e)}}};var i=(0,n(8572).Z)(a,o,[],!1,null,null,null);i.options.__file="src/view/popup/sns-zero/index.vue";const r=i.exports}}]);