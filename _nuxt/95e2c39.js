(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{481:function(t,e,n){"use strict";var r=n(226),o=n(1);e.a=o.default.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},491:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("61d1dd60",content,!0,{sourceMap:!1})},492:function(t,e,n){var r=n(34)((function(i){return i[1]}));r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:16px 4px}.v-card{word-wrap:break-word;border-width:thin;display:block;max-width:100%;outline:none;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-property:box-shadow,opacity;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{left:0;overflow:hidden;right:0;top:0}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;letter-spacing:.0071428571em;line-height:1.375rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),r.locals={},t.exports=r},493:function(t,e,n){"use strict";n(21),n(22),n(23),n(12),n(39),n(24),n(40);var r=n(5),o=(n(76),n(500),n(501),n(491),n(227)),l=n(503),c=n(174),d=n(82);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},494:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(493),o=n(8),l=Object(o.f)("v-card__actions"),c=Object(o.f)("v-card__subtitle"),d=Object(o.f)("v-card__text"),h=Object(o.f)("v-card__title");r.a},502:function(t,e,n){var content=n(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("8f6a7e6a",content,!0,{sourceMap:!1})},519:function(t,e,n){var content=n(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("7b5d4dc6",content,!0,{sourceMap:!1})},520:function(t,e,n){var r=n(34)((function(i){return i[1]}));r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),r.locals={},t.exports=r},521:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("ae7a972c",content,!0,{sourceMap:!1})},522:function(t,e,n){var r=n(34)((function(i){return i[1]}));r.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),r.locals={},t.exports=r},523:function(t,e,n){"use strict";n(502)},524:function(t,e,n){var r=n(34)((function(i){return i[1]}));r.push([t.i,".search-header[data-v-7d37d5b6]{background:var(--secondaryBlack);height:300px;left:0;overflow:auto;position:absolute;width:100%;z-index:99}.search-header[data-v-7d37d5b6]::-webkit-scrollbar{background-color:var(--secondaryBlack)!important;width:5px}.search-header[data-v-7d37d5b6]::-webkit-scrollbar-thumb{background-color:var(--mainLightBlue)!important}.search-header label[data-v-7d37d5b6]{margin:0!important}",""]),r.locals={},t.exports=r},527:function(t,e,n){"use strict";n.r(e);var r=n(253),o=n(493),l=n(494),c=n(551),d=n(472),h=n(474),v=n(543),f=n(209),m=n(471),_=(n(43),{name:"SearchHeader",data:function(){return{genres:!1,status:!1,typeAll:!1,orderByUpdate:!1,items:[{name:"Action",value:"action"},{name:"Adaptation",value:"adaptation"},{name:"Adult",value:"adult"},{name:"Adventure",value:"adventure"},{name:"Another chance",value:"another_chance"},{name:"Apocalypse",value:"apocalypse"},{name:"Comedy",value:"comedy"},{name:"Coming Soon",value:"coming_soon"},{name:"Cultivation",value:"cultivation"},{name:"Cute",value:"cute"},{name:"Demon",value:"demon"},{name:"Discord",value:"discord"},{name:"Drama",value:"drama"},{name:"Dungeons",value:"dungeons"},{name:"Ecchi",value:"ecchi"},{name:"Fantasy",value:"fantasy"},{name:"Game",value:"game"},{name:"Genius",value:"genius"},{name:"Genius MC",value:"genius_mc"},{name:"Harem",value:"harem"},{name:"Hero",value:"hero"},{name:"Historical",value:"historical"},{name:"Isekai",value:"isekai"},{name:"Josei",value:"josei"},{name:"Kool Kids",value:"kool_kids"},{name:"Loli",value:"loli"},{name:"Magic",value:"magic"},{name:"Martial Arts",value:"martial_arts"},{name:"Mature",value:"mature"},{name:"Mecha",value:"mecha"},{name:"Modern Setting",value:"modern_setting"},{name:"Monsters",value:"monsters"},{name:"Murim",value:"murim"},{name:"Mystery",value:"mystery"},{name:"Necromancer",value:"necromancer"},{name:"Noble",value:"noble"},{name:"Overpowered",value:"overpowered"},{name:"Pets",value:"pets"},{name:"Post-Apocalyptic",value:"post_apocalyptic"},{name:"Psychological",value:"psychological"},{name:"Rebirth",value:"rebirth"},{name:"Regression",value:"regression"},{name:"Reincarnation",value:"reincarnation"},{name:"Return",value:"return"},{name:"Returned",value:"returned"},{name:"Returner",value:"returner"},{name:"Revenge",value:"revenge"},{name:"Romance",value:"romance"},{name:"School Life",value:"school_life"}]}},mounted:function(){for(var i=1;i<=1;i++)this.items.push({fullName:"Chapter ".concat(i),released:"".concat(i," days Ago")})},methods:{headerGenres:function(){this.genres=!this.genres,this.status=!1,this.typeAll=!1,this.orderByUpdate=!1},headerStatusAll:function(){this.genres=!1,this.status=!this.status,this.typeAll=!1,this.orderByUpdate=!1},headerTypeAll:function(){this.typeAll=!this.typeAll,this.genres=!1,this.status=!1,this.orderByUpdate=!1},headerOrderByUpdate:function(){this.orderByUpdate=!this.orderByUpdate,this.genres=!1,this.status=!1,this.typeAll=!1}}}),y=(n(523),n(70)),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e("b-col",{attrs:{cols:"12",md:"12"}},[e(v.a,[e(r.a,{attrs:{"x-small":""},on:{click:t.headerGenres}},[t._v("Genres All\n            "),e(f.a,{attrs:{right:"",dark:""}},[t._v("\n                mdi-chevron-down\n            ")])],1),t._v(" "),e(r.a,{attrs:{"append-icon":"","x-small":""},on:{click:t.headerStatusAll}},[t._v("Status All\n            "),e(f.a,{attrs:{right:"",dark:""}},[t._v("\n                mdi-chevron-down\n            ")])],1),t._v(" "),e(r.a,{attrs:{"append-icon":"","x-small":""},on:{click:t.headerTypeAll}},[t._v("Type All\n            "),e(f.a,{attrs:{right:"",dark:""}},[t._v("\n                mdi-chevron-down\n            ")])],1),t._v(" "),e(r.a,{attrs:{"append-icon":"","x-small":""},on:{click:t.headerOrderByUpdate}},[t._v("Order by Update\n            "),e(f.a,{attrs:{right:"",dark:""}},[t._v("\n                mdi-chevron-down\n            ")])],1),t._v(" "),e(r.a,{attrs:{"append-icon":"","x-small":"",color:"#5569bf"}},[t._v("Search\n            "),e(f.a,{attrs:{right:"",dark:""}},[t._v("\n                mdi-magnify\n            ")])],1)],1),t._v(" "),t.genres?e("div",{staticClass:"search-header"},[e(o.a,{attrs:{flat:""}},[e(l.a,[e("h6",{staticClass:"white--text"},[t._v("Genres ")]),t._v(" "),e(h.a,{attrs:{fluid:""}},[e(m.a,t._l(t.items,(function(t,i){return e(d.a,{key:i,staticClass:"p-0",attrs:{cols:"12",md:"3"}},[e(c.a,{attrs:{dense:"",small:"",label:t.name,color:"#5569bf",value:t.value,"hide-details":""}})],1)})),1)],1)],1)],1)],1):t._e(),t._v(" "),t.status?e("div",{staticClass:"search-header"},[e(o.a,{attrs:{flat:""}},[e(l.a,[e("h6",{staticClass:"white--text"},[t._v("Status ")]),t._v(" "),e(h.a,{attrs:{fluid:""}},[e(m.a,t._l(t.items,(function(t,i){return e(d.a,{key:i,staticClass:"p-0",attrs:{cols:"12",md:"3"}},[e(c.a,{attrs:{dense:"",small:"",label:t.name,color:"#5569bf",value:t.value,"hide-details":""}})],1)})),1)],1)],1)],1)],1):t._e(),t._v(" "),t.typeAll?e("div",{staticClass:"search-header"},[e(o.a,{attrs:{flat:""}},[e(l.a,[e("h6",{staticClass:"white--text"},[t._v("Type ")]),t._v(" "),e(h.a,{attrs:{fluid:""}},[e(m.a,t._l(t.items,(function(t,i){return e(d.a,{key:i,staticClass:"p-0",attrs:{cols:"12",md:"3"}},[e(c.a,{attrs:{dense:"",small:"",label:t.name,color:"#5569bf",value:t.value,"hide-details":""}})],1)})),1)],1)],1)],1)],1):t._e(),t._v(" "),t.orderByUpdate?e("div",{staticClass:"search-header"},[e(o.a,{attrs:{flat:""}},[e(l.a,[e("h6",{staticClass:"white--text"},[t._v("Order By ")]),t._v(" "),e(h.a,{attrs:{fluid:""}},[e(m.a,t._l(t.items,(function(t,i){return e(d.a,{key:i,staticClass:"p-0",attrs:{cols:"3",sm:"3",md:"3"}},[e(c.a,{attrs:{dense:"",small:"",label:t.name,color:"#5569bf",value:t.value,"hide-details":""}})],1)})),1)],1)],1)],1)],1):t._e()],1)}),[],!1,null,"7d37d5b6",null);e.default=component.exports},543:function(t,e,n){"use strict";var r=n(5),o=(n(58),n(77),n(233),n(23),n(12),n(24),n(84),n(229),n(21),n(22),n(39),n(40),n(82)),l=n(147),c=n(231);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},551:function(t,e,n){"use strict";n(21),n(22),n(23),n(39),n(24),n(40);var r=n(120),o=n(5),l=(n(12),n(67),n(519),n(521),n(143)),c=n(505),d=n(481),h=n(515),v=n(82);function f(t){t.preventDefault()}var m=Object(v.a)(c.a,d.a,h.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=c.a.options.methods.genLabel.call(this);return label?(label.data.on={click:f},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:f},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),_=["title"];function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=m.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return x(x({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,_));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",x(x({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);