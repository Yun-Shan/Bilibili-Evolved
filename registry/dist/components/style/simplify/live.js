!function(i,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/simplify/live"]=t():i["style/simplify/live"]=t()}(self,(function(){return function(){var i,t,e={194:function(i,t,e){"use strict";e.r(t),e.d(t,{setupSkinSimplify:function(){return p}});var n=coreApis.settings,o=coreApis.spinQuery,r=coreApis.observer;function a(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}class s{constructor(i,t){a(this,"skinDisabled",(0,n.getComponentSettings)("simplifyLiveroom").options.skin),a(this,"skinSelectors",void 0),a(this,"skinClass",void 0),this.skinSelectors=i,this.skinClass=t,i.forEach((i=>{(0,o.select)(i).then((e=>{(0,r.attributes)(i,(i=>{i.forEach((i=>{"class"===i.attributeName&&(this.skinDisabled&&e.classList.contains(t)?e.classList.remove(t):this.skinDisabled||e.classList.contains(t)||e.classList.add(t))}))}))}))}))}setSkin(i){this.skinDisabled=!i,this.skinSelectors.forEach((t=>{(0,o.select)(t).then((t=>t.classList[i?"add":"remove"](this.skinClass)))}))}}const l=[new s(["#head-info-vm","#gift-control-vm","#rank-list-vm","#rank-list-ctnr-box",".gift-panel.base-panel",".gift-panel.extend-panel",".seeds-wrap>div:first-child",".gift-section>div:last-child",".z-gift-package>div>div",".right-action"],"live-skin-coloration-area"),new s([".rank-list-ctnr .tabs"],"isHundred"),new s([".rank-list-ctnr .tab-content > div"],"hundred")],p=()=>{(0,n.addComponentListener)("simplifyLiveroom.skin",(i=>{l.forEach((t=>t.setSkin(i)))}),!0)}},805:function(i,t,e){var n=e(645)((function(i){return i[1]}));n.push([i.id,".simplifyLiveroom-switch-vip .vip-icon, .simplifyLiveroom-switch-fansMedal .fans-medal-item-ctnr, .simplifyLiveroom-switch-title .title-label, .simplifyLiveroom-switch-userLevel .user-level-icon, .simplifyLiveroom-switch-guard .chat-history-panel .guard-icon, .simplifyLiveroom-switch-systemMessage .system-msg, .simplifyLiveroom-switch-systemMessage .announcement-wrapper, .simplifyLiveroom-switch-welcomeMessage .welcome-guard, .simplifyLiveroom-switch-welcomeMessage .welcome-msg, .simplifyLiveroom-switch-popup .chat-popups-section, .simplifyLiveroom-switch-popup #chat-draw-area-vm, .simplifyLiveroom-switch-giftMessage .chat-item.gift-item, .simplifyLiveroom-switch-guardPurchase .chat-item.guard-buy, .simplifyLiveroom-switch-eventsBanner .z-section-blocks .left-container .flip-view, .simplifyLiveroom-switch-eventsBanner .activity-pushing-out, .simplifyLiveroom-switch-userEffect .live-room-app .aside-area .activity-welcome-section, .simplifyLiveroom-switch-kanban .live-haruna-ctnr {\n  display: none !important;\n}\n\n.simplifyLiveroom-switch-rankList .live-room-app .rank-list-section {\n  display: none !important;\n}\n.simplifyLiveroom-switch-rankList .live-room-app .chat-history-panel {\n  height: calc(100% - 145px) !important;\n}\n.simplifyLiveroom-switch-rankList .live-room-app .chat-history-panel .chat-history-list::-webkit-scrollbar-track {\n  background: transparent !important;\n}\n.simplifyLiveroom-switch-rankList .live-room-app .chat-history-panel,\n.simplifyLiveroom-switch-rankList .live-room-app #pay-note-panel-vm .pay-note-panel,\n.simplifyLiveroom-switch-rankList .live-room-app #pay-note-panel-vm .pay-note-panel .detail-info .mask {\n  border-radius: 11px 11px 0 0 !important;\n}\n.simplifyLiveroom-switch-rankList.player-full-win .chat-history-panel,\n.simplifyLiveroom-switch-rankList.player-full-win #pay-note-panel-vm .pay-note-panel,\n.simplifyLiveroom-switch-rankList.player-full-win #pay-note-panel-vm .pay-note-panel .detail-info .mask {\n  border-radius: 0 !important;\n}\n\n.simplifyLiveroom-switch-giftPanel .gift-panel,\n.simplifyLiveroom-switch-giftPanel .gift-panel-switch,\n.simplifyLiveroom-switch-giftPanel .gift-section.guard-ent,\n.simplifyLiveroom-switch-giftPanel .seeds-wrap > .dp-i-block > .item:not(.seeds),\n.simplifyLiveroom-switch-giftPanel .gift-control-panel .wish-icon,\n.simplifyLiveroom-switch-giftPanel .gift-control-panel .wish-tip {\n  display: none !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-control-section,\n.simplifyLiveroom-switch-giftPanel .gift-control-panel {\n  height: 48px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry,\n.simplifyLiveroom-switch-giftPanel .treasure-box {\n  display: flex !important;\n  align-items: center !important;\n  padding: 10px 0 0 16px !important;\n  max-height: 36px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box .draw-box-pic,\n.simplifyLiveroom-switch-giftPanel .draw-box .anchor-lot-icon,\n.simplifyLiveroom-switch-giftPanel .draw-box .box-icon,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .draw-box-pic,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .anchor-lot-icon,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .box-icon,\n.simplifyLiveroom-switch-giftPanel .treasure-box .draw-box-pic,\n.simplifyLiveroom-switch-giftPanel .treasure-box .anchor-lot-icon,\n.simplifyLiveroom-switch-giftPanel .treasure-box .box-icon {\n  margin: 0 !important;\n  width: 24px !important;\n  height: 24px !important;\n  background-position: 0 -2.5px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box .draw-box-pic.open,\n.simplifyLiveroom-switch-giftPanel .draw-box .anchor-lot-icon.open,\n.simplifyLiveroom-switch-giftPanel .draw-box .box-icon.open,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .draw-box-pic.open,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .anchor-lot-icon.open,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .box-icon.open,\n.simplifyLiveroom-switch-giftPanel .treasure-box .draw-box-pic.open,\n.simplifyLiveroom-switch-giftPanel .treasure-box .anchor-lot-icon.open,\n.simplifyLiveroom-switch-giftPanel .treasure-box .box-icon.open {\n  background-position: 0 -1px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box .draw-box-pic,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .draw-box-pic,\n.simplifyLiveroom-switch-giftPanel .treasure-box .draw-box-pic {\n  transform: scale(1.1);\n}\n.simplifyLiveroom-switch-giftPanel .draw-box #BLRHH_treasure_div_tip br,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry #BLRHH_treasure_div_tip br,\n.simplifyLiveroom-switch-giftPanel .treasure-box #BLRHH_treasure_div_tip br {\n  display: none !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box #BLRHH_treasure_div img,\n.simplifyLiveroom-switch-giftPanel .draw-box #BLRHH_treasure_div canvas,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry #BLRHH_treasure_div img,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry #BLRHH_treasure_div canvas,\n.simplifyLiveroom-switch-giftPanel .treasure-box #BLRHH_treasure_div img,\n.simplifyLiveroom-switch-giftPanel .treasure-box #BLRHH_treasure_div canvas {\n  max-height: 24px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box .draw-box-text,\n.simplifyLiveroom-switch-giftPanel .draw-box .anchor-lot-text,\n.simplifyLiveroom-switch-giftPanel .draw-box .count-down,\n.simplifyLiveroom-switch-giftPanel .draw-box #BLRHH_treasure_div_tip,\n.simplifyLiveroom-switch-giftPanel .draw-box #BLRHH_treasure_div_timer,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .draw-box-text,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .anchor-lot-text,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .count-down,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry #BLRHH_treasure_div_tip,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry #BLRHH_treasure_div_timer,\n.simplifyLiveroom-switch-giftPanel .treasure-box .draw-box-text,\n.simplifyLiveroom-switch-giftPanel .treasure-box .anchor-lot-text,\n.simplifyLiveroom-switch-giftPanel .treasure-box .count-down,\n.simplifyLiveroom-switch-giftPanel .treasure-box #BLRHH_treasure_div_tip,\n.simplifyLiveroom-switch-giftPanel .treasure-box #BLRHH_treasure_div_timer {\n  margin-left: 12px !important;\n  padding: 4px 8px !important;\n  max-width: unset !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box .awarding-panel,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .awarding-panel,\n.simplifyLiveroom-switch-giftPanel .treasure-box .awarding-panel {\n  bottom: 42px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box {\n  padding-top: 11px !important;\n}\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry {\n  padding-top: 12px !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-control-panel .right-part {\n  height: 48px !important;\n  display: flex !important;\n  justify-content: flex-end !important;\n  min-width: unset !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-control-panel .right-part > .dp-table-cell {\n  display: flex !important;\n  align-items: center !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-control-panel .right-part > .dp-table-cell .supporting-info {\n  transform: translateY(-2px) !important;\n}\n\n.simplifyLiveroom-switch-skin #head-info-vm,\n.simplifyLiveroom-switch-skin #gift-control-vm,\n.simplifyLiveroom-switch-skin #rank-list-ctnr-box {\n  background-image: none !important;\n}\n\n.simplifyLiveroom-switch-guard .guard-danmaku::before {\n  -o-border-image: none !important;\n     border-image: none !important;\n  background-color: transparent !important;\n}\n.simplifyLiveroom-switch-guard .guard-danmaku::before .guard-danmaku {\n  margin: 0 !important;\n  padding: 4px 5px !important;\n}\n.simplifyLiveroom-switch-guard .guard-danmaku::before .guard-danmaku::after {\n  background-image: none !important;\n}\n.simplifyLiveroom-switch-guard .chat-history-panel [class*=guard-level-] {\n  padding: 4px 5px !important;\n  margin: 0 !important;\n}\n.simplifyLiveroom-switch-guard .chat-history-panel [class*=guard-level-]::after {\n  display: none !important;\n}",""]),i.exports=n},645:function(i){"use strict";
// eslint-disable-next-line func-names
i.exports=function(i){var t=[];return t.toString=function(){return this.map((function(t){var e=i(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(i,e,n){"string"==typeof i&&(
// eslint-disable-next-line no-param-reassign
i=[[null,i,""]]);var o={};if(n)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<i.length;s++){var l=[].concat(i[s]);n&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},621:function(i,t,e){var n=e(805);i.exports="string"==typeof n?n:n.toString()}},n={};function o(i){var t=n[i];if(void 0!==t)return t.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,o),r.exports}t=Object.getPrototypeOf?function(i){return Object.getPrototypeOf(i)}:function(i){return i.__proto__},o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var a={};i=i||[null,t({}),t([]),t(t)];for(var s=2&n&&e;"object"==typeof s&&!~i.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(i){a[i]=function(){return e[i]}}));return a.default=function(){return e},o.d(r,a),r},o.d=function(i,t){for(var e in t)o.o(t,e)&&!o.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:t[e]})},o.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},o.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var r={};return function(){"use strict";o.d(r,{component:function(){return n}});var i=coreApis.componentApis.component,t=coreApis.componentApis.switchOptions;const e={name:"simplifyLiveroom",displayName:"简化直播间",entry:(0,coreApis.componentApis.styledComponent.styledComponentEntry)((()=>Promise.resolve().then(o.t.bind(o,621,23))),(async()=>{const{setupSkinSimplify:i}=await Promise.resolve().then(o.bind(o,194));i()})),description:{"zh-CN":"\n- 隐藏老爷图标\n- 隐藏粉丝勋章\n- 隐藏活动头衔\n- 隐藏用户等级\n- 隐藏舰长图标\n- 隐藏全区广播\n- 隐藏欢迎信息 (xxx老爷进入直播间)\n- 隐藏礼物弹幕 (仅弹幕列表, 特殊效果如节奏风暴不受影响)\n- 隐藏上舰提示 (弹幕列表里的 xxx开通了舰长)\n- 隐藏付费礼物 (播放器下面的各种金瓜子礼物, 以及许愿瓶, 上舰等)\n- 隐藏入场特效\n- 隐藏看板娘\n- 隐藏活动横幅\n- 隐藏抽奖提示 (开通舰长, 小飞船抽奖等)\n- 禁用直播间皮肤\n\n> 每一项都可以在<span>功能</span>中单独选择是否隐藏.".trim()},tags:[i.componentsTags.live,i.componentsTags.style],urlInclude:["//live.bilibili.com/"],enabledByDefault:!1},n=(0,t.createSwitchOptions)({name:"simplifyOptions",switches:{vip:{defaultValue:!0,displayName:"老爷图标"},fansMedal:{defaultValue:!0,displayName:"粉丝勋章"},title:{defaultValue:!0,displayName:"活动头衔"},userLevel:{defaultValue:!0,displayName:"用户等级"},guard:{defaultValue:!0,displayName:"舰长图标"},systemMessage:{defaultValue:!0,displayName:"全区广播"},welcomeMessage:{defaultValue:!0,displayName:"欢迎信息"},giftMessage:{defaultValue:!0,displayName:"礼物弹幕"},guardPurchase:{defaultValue:!0,displayName:"上舰提示"},userEffect:{defaultValue:!0,displayName:"入场特效"},kanban:{defaultValue:!0,displayName:"看板娘"},giftPanel:{defaultValue:!0,displayName:"付费礼物"},eventsBanner:{defaultValue:!1,displayName:"活动横幅"},rankList:{defaultValue:!1,displayName:"排行榜"},popup:{defaultValue:!1,displayName:"抽奖提示"},skin:{defaultValue:!1,displayName:"房间皮肤"}}})(e)}(),r=r.component}()}));