(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{444:function(e,t,n){e.exports=n.p+"img/postPhoto.3d6a9cf.jpg"},445:function(e,t,n){e.exports=n.p+"img/postPhoto2.26522b4.webp"},446:function(e,t,n){e.exports=n.p+"img/postPhoto3.8d90c6d.webp"},447:function(e,t,n){e.exports=n.p+"img/postPhoto4.77b5ca0.png"},448:function(e,t,n){e.exports=n.p+"img/postPhoto5.d4e9d21.webp"},451:function(e,t,n){"use strict";n(74),n(77);var r=n(1);t.a=r.default.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var n=this;this.clearDelay();var r=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){n.isActive={open:!0,close:!1}[e]},r)}}})},453:function(e,t,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("e8a466fa",content,!0,{sourceMap:!1})},454:function(e,t,n){var r=n(36)((function(i){return i[1]}));r.push([e.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{border-radius:50%;outline:none;padding:.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),r.locals={},e.exports=r},456:function(e,t,n){"use strict";n.r(t);var r=n(462),l=(n(46),n(69),n(33),n(24),n(35),n(12),n(40),n(30),n(41),n(7)),o=n(76);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"SidebarPopularPost",props:{image:{type:String,required:!1},title:{type:String,required:!1},genresName:{type:Array,required:!1},mainSlug:{type:String,required:!1},type:{type:String,required:!1}},data:function(){return{rating:5}},mounted:function(){this.loadAllPostData()},computed:m({},Object(o.c)("post",["posts"])),methods:m(m({},Object(o.b)("post",["allPostsData"])),{},{loadAllPostData:function(){this.allPostsData()}})},h=n(63),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("b-col",{staticClass:"popular-side-bar-col",attrs:{cols:"12",md:"12"}},[t("nuxt-link",{attrs:{to:"/"}},[t("img",{staticClass:"popular-side-bar-thumnail",attrs:{src:n(444),alt:""}})]),e._v(" "),t("div",{staticClass:"ps-2"},[t("nuxt-link",{attrs:{to:"/comics/".concat(e.type,"/").concat(e.mainSlug)}},[t("h6",[e._v(e._s(e.title)+" ")])]),e._v(" "),t("p",{staticClass:"m-0"},[e._v("Genres:\n            "),e._l(e.genresName.slice(0,8),(function(n,r){return t("nuxt-link",{key:r,attrs:{to:"/genre/".concat(n.category.slug)}},[e._v("\n                "+e._s(n.category.title)+",\n            ")])}))],2),e._v(" "),t(r.a,{staticClass:"rating",attrs:{color:"yellow darken-3",size:"15","background-color":"grey darken-1","empty-icon":"$ratingFull","half-increments":"",hover:"",readonly:""},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},457:function(e,t,n){"use strict";n.r(t);var r=n(462),l=(n(46),n(301),n(112),{name:"PopularPost",props:{image:{type:String,required:!1},chapterTitle:{type:String,required:!1},chapterNumber:{type:String,required:!1},postSlugUrl:{type:String,required:!1},type:{type:String,required:!1}},data:function(){return{rating:5}},computed:{truncateTitle:function(){return function(title){return title.split("").splice(0,35).join("")}}}}),o=n(63),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("b-col",{staticClass:"popular-post",attrs:{cols:"6",md:"2"}},[t("nuxt-link",{attrs:{to:"/comics/".concat(e.type,"/").concat(e.postSlugUrl)}},[t("img",{staticClass:"post-thumnail",attrs:{src:n(445),alt:""}}),e._v(" "),t("div",{staticClass:"popular-post-thumnail-title"},[e.chapterTitle?t("h6",[e._v(" "+e._s(e.truncateTitle(e.chapterTitle))+"....")]):e._e(),e._v(" "),t("p",{staticClass:"m-0"},[e._v(" Chapter "+e._s(e.chapterNumber))]),e._v(" "),t(r.a,{staticClass:"rating",attrs:{color:"yellow darken-3",size:"15","background-color":"grey darken-1","empty-icon":"$ratingFull","half-increments":"",hover:"",readonly:""},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}})],1)])],1)}),[],!1,null,null,null);t.default=component.exports},458:function(e,t,n){"use strict";n.r(t);var r=n(232),l=(n(33),n(24),n(35),n(12),n(40),n(30),n(41),n(7)),o=(n(69),n(456)),c=n(76);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"Sidebar",components:{SidebarPopularPost:o.default},data:function(){return{rating:5,popularWeekly:!0,popularMonthly:!1,popularAll:!1,popularWeeklyPost:[{image:n(445),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(444),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(446),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(447),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(448),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(444),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(445),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(446),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(447),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(448),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]}],popularMonthlyPost:[{image:n(444),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(445),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(446),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(447),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(448),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(444),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(445),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(446),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(447),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(448),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]}],popularAllPost:[{image:n(446),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(445),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(444),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(447),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(448),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(444),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(445),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(446),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(447),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]},{image:n(448),title:"Return of the Mount Hua Sect",genres:[{name:"Adventure,",url:"/"},{name:"Comedy,",url:"/"},{name:"Fantasy,",url:"/"},{name:"Martial Arts,",url:"/"},{name:"Shounen,",url:"/"}]}]}},computed:d(d({},Object(c.c)("post",["posts"])),{},{slicePost:function(){return this.posts.post?this.posts.post.slice(0,14):[]}}),mounted:function(){this.loadAllPostData()},methods:d(d({},Object(c.b)("post",["allPostsData"])),{},{popularWeeklyEvent:function(){this.popularMonthly=!1,this.popularAll=!1,this.popularWeekly=!0},popularMonthlyEvent:function(){this.popularMonthly=!0,this.popularWeekly=!1,this.popularAll=!1},popularAllEvent:function(){this.popularWeekly=!1,this.popularMonthly=!1,this.popularAll=!0},loadAllPostData:function(){this.allPostsData()}})},v=n(63),component=Object(v.a)(h,(function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"popular-row popular-sidebar-row mt-1"},[t("b-col",{staticClass:"popular-today",attrs:{cols:"12"}},[t("h5",{staticClass:"white--text m-0"},[e._v("Popular")])]),e._v(" "),t("b-col",{staticClass:"popular-btn-group",attrs:{cols:"12"}},[t("div",{staticClass:"side-bar-btn-group"},[t(r.a,{staticClass:"popular-side-bar-btn",class:{"active-popular-side-bar-btn":e.popularWeekly},attrs:{small:"",text:""},on:{click:e.popularWeeklyEvent}},[e._v("weekly")]),e._v(" "),t(r.a,{staticClass:"popular-side-bar-btn",class:{"active-popular-side-bar-btn":e.popularMonthly},attrs:{small:"",text:""},on:{click:e.popularMonthlyEvent}},[e._v("Monthly")]),e._v(" "),t(r.a,{staticClass:"popular-side-bar-btn",class:{"active-popular-side-bar-btn":e.popularAll},attrs:{small:"",text:""},on:{click:e.popularAllEvent}},[e._v("All")])],1)]),e._v(" "),e.popularWeekly?t("div",e._l(e.slicePost,(function(e,i){return t("SidebarPopularPost",{key:i,attrs:{mainSlug:e.slug,title:e.title,genresName:e.post_category,type:e.type}})})),1):e._e(),e._v(" "),e.popularMonthly?t("div",e._l(e.slicePost,(function(e,i){return t("SidebarPopularPost",{key:i,attrs:{mainSlug:e.slug,title:e.title,genresName:e.post_category,type:e.type}})})),1):e._e(),e._v(" "),e.popularAll?t("div",e._l(e.slicePost,(function(e,i){return t("SidebarPopularPost",{key:i,attrs:{mainSlug:e.slug,title:e.title,genresName:e.post_category,type:e.type}})})),1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},462:function(e,t,n){"use strict";n(74),n(214),n(59),n(453);var r=n(137),l=n(93),o=n(451),c=n(138),m=n(455),d=n(92),h=n(10),v=n(75);t.a=Object(v.a)(l.a,o.a,m.a,c.a,d.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var e=this.$props,t=e.dark,n=e.large,r=e.light,l=e.medium,small=e.small;return{dark:t,large:n,light:r,medium:l,size:e.size,small:small,xLarge:e.xLarge,xSmall:e.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){this.internalValue=e}},methods:{createClickFn:function(i){var e=this;return function(t){if(!e.readonly){var n=e.genHoverIndex(t,i);e.clearable&&e.internalValue===n?e.internalValue=0:e.internalValue=n}}},createProps:function(i){var e={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-i)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-i)%1>0),e},genHoverIndex:function(e,i){var t=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(t=!t),i+(t?.5:1)},getIconName:function(e){var t=this.isHovering?e.isHovered:e.isFilled,n=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(e){if(this.halfIncrements){var rect=e.target&&e.target.getBoundingClientRect();if(rect&&e.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(e,i){var t=this;this.runDelay("open",(function(){t.hoverIndex=t.genHoverIndex(e,i)}))},onMouseLeave:function(){var e=this;this.runDelay("close",(function(){return e.hoverIndex=-1}))},genItem:function(i){var e=this,t=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);var n={click:t.click};return this.hover&&(n.mouseenter=function(t){return e.onMouseEnter(t,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(t){return e.onMouseEnter(t,i)})),this.$createElement(r.a,this.setTextColor(this.getColor(t),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(t)])}},render:function(e){var t=this,n=Object(h.e)(Number(this.length)).map((function(i){return t.genItem(i)}));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}})},471:function(e,t,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("8f6a7e6a",content,!0,{sourceMap:!1})},505:function(e,t,n){"use strict";n(471)},506:function(e,t,n){var r=n(36)((function(i){return i[1]}));r.push([e.i,".search-header[data-v-7d37d5b6]{background:var(--secondaryBlack);height:300px;left:0;overflow:auto;position:absolute;width:100%;z-index:99}.search-header[data-v-7d37d5b6]::-webkit-scrollbar{background-color:var(--secondaryBlack)!important;width:5px}.search-header[data-v-7d37d5b6]::-webkit-scrollbar-thumb{background-color:var(--mainLightBlue)!important}.search-header label[data-v-7d37d5b6]{margin:0!important}",""]),r.locals={},e.exports=r},509:function(e,t,n){"use strict";n.r(t);var r=n(232),l=n(503),o=n(466),c=n(632),m=n(560),d=n(631),h=n(612),v=n(196),f=n(521),y=(n(44),{name:"SearchHeader",data:function(){return{genres:!1,status:!1,typeAll:!1,orderByUpdate:!1,items:[{name:"Action",value:"action"},{name:"Adaptation",value:"adaptation"},{name:"Adult",value:"adult"},{name:"Adventure",value:"adventure"},{name:"Another chance",value:"another_chance"},{name:"Apocalypse",value:"apocalypse"},{name:"Comedy",value:"comedy"},{name:"Coming Soon",value:"coming_soon"},{name:"Cultivation",value:"cultivation"},{name:"Cute",value:"cute"},{name:"Demon",value:"demon"},{name:"Discord",value:"discord"},{name:"Drama",value:"drama"},{name:"Dungeons",value:"dungeons"},{name:"Ecchi",value:"ecchi"},{name:"Fantasy",value:"fantasy"},{name:"Game",value:"game"},{name:"Genius",value:"genius"},{name:"Genius MC",value:"genius_mc"},{name:"Harem",value:"harem"},{name:"Hero",value:"hero"},{name:"Historical",value:"historical"},{name:"Isekai",value:"isekai"},{name:"Josei",value:"josei"},{name:"Kool Kids",value:"kool_kids"},{name:"Loli",value:"loli"},{name:"Magic",value:"magic"},{name:"Martial Arts",value:"martial_arts"},{name:"Mature",value:"mature"},{name:"Mecha",value:"mecha"},{name:"Modern Setting",value:"modern_setting"},{name:"Monsters",value:"monsters"},{name:"Murim",value:"murim"},{name:"Mystery",value:"mystery"},{name:"Necromancer",value:"necromancer"},{name:"Noble",value:"noble"},{name:"Overpowered",value:"overpowered"},{name:"Pets",value:"pets"},{name:"Post-Apocalyptic",value:"post_apocalyptic"},{name:"Psychological",value:"psychological"},{name:"Rebirth",value:"rebirth"},{name:"Regression",value:"regression"},{name:"Reincarnation",value:"reincarnation"},{name:"Return",value:"return"},{name:"Returned",value:"returned"},{name:"Returner",value:"returner"},{name:"Revenge",value:"revenge"},{name:"Romance",value:"romance"},{name:"School Life",value:"school_life"}]}},mounted:function(){for(var i=1;i<=1;i++)this.items.push({fullName:"Chapter ".concat(i),released:"".concat(i," days Ago")})},methods:{headerGenres:function(){this.genres=!this.genres,this.status=!1,this.typeAll=!1,this.orderByUpdate=!1},headerStatusAll:function(){this.genres=!1,this.status=!this.status,this.typeAll=!1,this.orderByUpdate=!1},headerTypeAll:function(){this.typeAll=!this.typeAll,this.genres=!1,this.status=!1,this.orderByUpdate=!1},headerOrderByUpdate:function(){this.orderByUpdate=!this.orderByUpdate,this.genres=!1,this.status=!1,this.typeAll=!1}}}),S=(n(505),n(63)),component=Object(S.a)(y,(function(){var e=this,t=e._self._c;return t("b-col",{attrs:{cols:"12",md:"12"}},[t(h.a,[t(r.a,{attrs:{"x-small":""},on:{click:e.headerGenres}},[e._v("Genres All\n            "),t(v.a,{attrs:{right:"",dark:""}},[e._v("\n                mdi-chevron-down\n            ")])],1),e._v(" "),t(r.a,{attrs:{"append-icon":"","x-small":""},on:{click:e.headerStatusAll}},[e._v("Status All\n            "),t(v.a,{attrs:{right:"",dark:""}},[e._v("\n                mdi-chevron-down\n            ")])],1),e._v(" "),t(r.a,{attrs:{"append-icon":"","x-small":""},on:{click:e.headerTypeAll}},[e._v("Type All\n            "),t(v.a,{attrs:{right:"",dark:""}},[e._v("\n                mdi-chevron-down\n            ")])],1),e._v(" "),t(r.a,{attrs:{"append-icon":"","x-small":""},on:{click:e.headerOrderByUpdate}},[e._v("Order by Update\n            "),t(v.a,{attrs:{right:"",dark:""}},[e._v("\n                mdi-chevron-down\n            ")])],1),e._v(" "),t(r.a,{attrs:{"append-icon":"","x-small":"",color:"#5569bf"}},[e._v("Search\n            "),t(v.a,{attrs:{right:"",dark:""}},[e._v("\n                mdi-magnify\n            ")])],1)],1),e._v(" "),e.genres?t("div",{staticClass:"search-header"},[t(l.a,{attrs:{flat:""}},[t(o.a,[t("h6",{staticClass:"white--text"},[e._v("Genres ")]),e._v(" "),t(d.a,{attrs:{fluid:""}},[t(f.a,e._l(e.items,(function(e,i){return t(m.a,{key:i,staticClass:"p-0",attrs:{cols:"12",md:"3"}},[t(c.a,{attrs:{dense:"",small:"",label:e.name,color:"#5569bf",value:e.value,"hide-details":""}})],1)})),1)],1)],1)],1)],1):e._e(),e._v(" "),e.status?t("div",{staticClass:"search-header"},[t(l.a,{attrs:{flat:""}},[t(o.a,[t("h6",{staticClass:"white--text"},[e._v("Status ")]),e._v(" "),t(d.a,{attrs:{fluid:""}},[t(f.a,e._l(e.items,(function(e,i){return t(m.a,{key:i,staticClass:"p-0",attrs:{cols:"12",md:"3"}},[t(c.a,{attrs:{dense:"",small:"",label:e.name,color:"#5569bf",value:e.value,"hide-details":""}})],1)})),1)],1)],1)],1)],1):e._e(),e._v(" "),e.typeAll?t("div",{staticClass:"search-header"},[t(l.a,{attrs:{flat:""}},[t(o.a,[t("h6",{staticClass:"white--text"},[e._v("Type ")]),e._v(" "),t(d.a,{attrs:{fluid:""}},[t(f.a,e._l(e.items,(function(e,i){return t(m.a,{key:i,staticClass:"p-0",attrs:{cols:"12",md:"3"}},[t(c.a,{attrs:{dense:"",small:"",label:e.name,color:"#5569bf",value:e.value,"hide-details":""}})],1)})),1)],1)],1)],1)],1):e._e(),e._v(" "),e.orderByUpdate?t("div",{staticClass:"search-header"},[t(l.a,{attrs:{flat:""}},[t(o.a,[t("h6",{staticClass:"white--text"},[e._v("Order By ")]),e._v(" "),t(d.a,{attrs:{fluid:""}},[t(f.a,e._l(e.items,(function(e,i){return t(m.a,{key:i,staticClass:"p-0",attrs:{cols:"3",sm:"3",md:"3"}},[t(c.a,{attrs:{dense:"",small:"",label:e.name,color:"#5569bf",value:e.value,"hide-details":""}})],1)})),1)],1)],1)],1)],1):e._e()],1)}),[],!1,null,"7d37d5b6",null);t.default=component.exports},616:function(e,t,n){"use strict";n.r(t);var r,l=n(560),o=n(521),c=n(190),m=n(611),d=(n(33),n(24),n(35),n(12),n(40),n(30),n(41),n(8)),h=n(7),v=(n(45),n(457)),f=n(458),y=n(509),S=n(76);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var M=(r={name:"IndexPage",components:{PopularPost:v.default,Sidebar:f.default,SearchHeader:y.default},inject:{theme:{default:{isDark:!1}}},computed:{},methods:{},data:function(){return{}},mounted:function(){this.loadAllPostData()}},Object(h.a)(r,"computed",A({},Object(S.c)("post",["posts","isPostsLoading","setPostsType"]))),Object(h.a)(r,"methods",A(A({},Object(S.b)("post",["allPostsData","fetchingPostsByTypes"])),{},{loadAllPostData:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.allPostsData(),t.next=3,e.fetchingPostsByTypes();case 3:case"end":return t.stop()}}),t)})))()}})),r),C=n(63),component=Object(C.a)(M,(function(){var e=this,t=e._self._c;return t("b-container",[t("b-row",{staticClass:"posts-row"},[t("b-col",{attrs:{cols:"12",lg:"9"}},[t("b-row",[t("b-col",{staticClass:"mt-4",attrs:{cols:"12",lg:"12"}},[t("b-row",{staticClass:"popular-row"},[t("b-col",{staticClass:"popular-today",attrs:{cols:"12"}},[t("h5",{staticClass:"white--text m-0"},[e._v("Manhwa List")])]),e._v(" "),t("b-col",{attrs:{cols:"12"}},[t("SearchHeader")],1),e._v(" "),e.posts?e._l(e.setPostsType.post,(function(e,i){return t("PopularPost",{key:i,attrs:{postSlugUrl:e.slug,chapterTitle:e.title,type:e.type}})})):e._e(),e._v(" "),e.isPostsLoading?[t(o.a,{staticClass:"p-5"},e._l(10,(function(i){return t(l.a,{key:i,attrs:{cols:"12",md:"4"}},[t(c.a,{staticClass:"pa-3",attrs:{color:"grey ".concat(e.theme.isDark?"darken-2":"lighten-4")}},[t(m.a,{attrs:{type:"card-avatar,title,title, subtitle, text"}})],1)],1)})),1)]:e._e()],2)],1)],1),e._v(" "),t("b-col",{staticClass:"free-height-for-slug"})],1),e._v(" "),t("b-col",{attrs:{cols:"12",lg:"3"}},[t("Sidebar")],1)],1)],1)}),[],!1,null,"61a50142",null);t.default=component.exports}}]);