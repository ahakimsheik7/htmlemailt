(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8618],{7655:function(e,n,t){"use strict";t.d(n,{R:function(){return k}});var r=t(67294),o=t(37244),i=t.n(o),u=t(26075),a=t(54147),c=t(99615),l=t(29409),d=t(23996),s=t(34937),f=t(37629),p=t(99246),v=t(35328),y=t(96029),m=t(47758),g=t(40705),C=t(61792),b=t(6119),T=t(84248),O=t(56),E=t(25235),_=t(30488),h=t(13164),A=t(4190),I=t(12510),N=t(49865),P=t(73113),L=r.createElement,D=function(e){var n=(0,I.useStore)(),t=(0,E.T)(),r=(0,A.useFeatureFlags)([p.R.UC_FORCE_ALL_APPS_OPTIMIZATION]),o=(0,I.useSelector)(y.By)===i().app.LAYOUT.values.SLIM,u=(0,a.VB)(a.yr),c=(0,a._8)(a.S1),l=(0,g.jO)(n.getState(),null===t||void 0===t?void 0:t.offer,r),f={family:l?null===e||void 0===e?void 0:e.family:null,cloud:(null===e||void 0===e?void 0:e.cloud)||d.e.DEFAULT_CLOUD,maxItems:e.offerType===T.R.TRIAL?3:null,wrapStyle:u||c||o?v.WrapStyle.alwaysWrap:v.WrapStyle.responsiveWrap,forceHeaderBorderBottom:!0};return l?L(S,f):L(s.ContentEntrySelector,{useRootContent:!1,selector:function(e){return{plansInclude:[e]}}},L(v.FulfillableItemBox,f))},k=(0,N.r)("plansInclude",v.FulfillableItemBoxContentModel)((function(e){var n=(0,I.useStore)(),t=(0,O.TZ)(),r=(0,_.useCommerceAppContext)().hostCtxId,o=(0,h.T)(),i=(0,I.useSelector)(C.Ax),d=null===i||void 0===i?void 0:i.browser,s=(0,a.VB)(a.yr),p=(0,u.x)(),v=(0,P.withDialog)((function(o){var i=o.onClose,u=e.productArrangementCode,a=e.productLogoUrls,c=e.offerContent;return L(b.l,{onClose:i,offerContent:c,productArrangementCode:u,productLogoUrls:a,commerceAppContext:r,defaultCategory:l.CategoryType.ALL_PLANS_INCLUDE,errorBoundaryComponentName:"AllPlansInclude",store:n,apolloClient:p,adobeLaunchAnalytics:t,features:(0,m.h)()})}),{onClick:function(e){var n,t;d===c.s.SAFARI&&s&&window.scroll(0,0);var r=null===e||void 0===e||null===(n=e.classList)||void 0===n||null===(t=n.contains)||void 0===t?void 0:t.call(n,"fulfillable-item-box-footer-link");return r&&o(f.P.VIEW_MORE_CLICK),r}})((function(n){var t=n.onClick,r=function(e){null===t||void 0===t||t(e.target)};return L("div",{role:"button",onKeyDown:function(e){13!==e.keyCode&&"Enter"!==e.key||(e.preventDefault(),r(e))},onClick:r},L(D,e))}));return L(v,null)})),S=(0,N.r)("plansIncludeList",v.FulfillableItemBoxListContentModel)(v.FulfillableItemBox);k.queryCollection.merge(S.queryCollection)},82093:function(e,n,t){"use strict";t.d(n,{$G:function(){return M},O0:function(){return T},sH:function(){return E}});var r=t(67294),o=t(37244),i=t.n(o),u=t(33386),a=t(54147),c=t(69927),l=t(79885),d=t(44596),s=t(96029);function f(e){var n,t;return!(null===e||void 0===e||null===(n=e.data)||void 0===n||!n.price)&&!(null===e||void 0===e||null===(t=e.data)||void 0===t||!t.formatString)}var p=t(18983),v=t(34937),y=t(52148),m=t(37703),g=t(49865),C=r.createElement,b=function(e){var n=e.onSelectionChange,t=e.bundleData,o=t.offers,p=(0,r.useState)(null===t||void 0===t?void 0:t.selectedOfferId),g=p[0],b=p[1],T=(0,m.useSelector)(s.By)===i().app.LAYOUT.values.SLIM,O=(0,a.VB)(a.yr),E=!(0,a._8)(a.S1)&&o.length>2;var _={data:(0,d.tp)(o),options:{bestValueOfferId:(0,d.ef)(o),selectedOfferId:(0,d.B8)(g,o),on_selection_change:function(e){if(e.selected){var t=e.data.data.offerId;b(t),n(t)}},viewMode:O||T&&E?l.wO.MOBILE:l.wO.DESKTOP}},h=(0,y.Cd)(),A=h.validateOfferContent,I=h.validateContentEntry;function N(e){var n=[{name:"name"},{name:"icons",validate:function(e){return e.length>=1}},{name:"startingPrice",validate:f},{name:"strikethroughPrice",validate:function(e){return null===e||f(e)}}];e.forEach((function(e){return A("BundleSelection",n,e)}))}var P=(0,v.useContentEntry)(c.BundleContentModel);return(0,r.useEffect)((function(){N(_.data),I(P)}),[]),C("div",{className:u.Z.bundleSelectionContainer},C(l.go,_))},T=(0,g.r)("bundleContent",c.BundleContentModel)(b),O=(0,g.r)("languageWordOrder",p.LanguageWordOrderModel)((function(){return null})).queryCollection;T.queryCollection.merge(O);var E=(0,g.r)("bundleContent",c.BundleContentModel)(b),_=t(91229),h=t(26265),A=t(63905),I=t(78254),N=t(26075),P=(0,v.defineContents)("BundleDescription",{description:{id:"description",type:"object",placeholderContent:{json:[{nodeType:"paragraph",content:[{nodeType:"text",value:"Learn more about "},{nodeType:"link",value:"{product1}",data:{href:"#",class:"bundle-description-product-1-link"}},{nodeType:"text",value:" or "},{nodeType:"link",value:"{product2}",data:{href:"#",class:"bundle-description-product-2-link"}},{nodeType:"text",value:"."}]}]}},threeProductsDescription:{id:"threeProductsDescription",type:"object",placeholderContent:{json:[{nodeType:"paragraph",content:[{nodeType:"text",value:"Learn more about "},{nodeType:"link",data:{href:"#",class:"bundle-description-product-1-link"},value:"{product1}"},{nodeType:"text",value:", "},{nodeType:"link",data:{href:"#",class:"bundle-description-product-2-link"},value:"{product2}"},{nodeType:"text",value:" or "},{nodeType:"link",data:{href:"#",class:"bundle-description-product-3-link"},value:"{product3}"},{nodeType:"text",value:"."}]}]}},oneProductDescription:{id:"oneProductDescription",type:"object",placeholderContent:{json:[{nodeType:"paragraph",content:[{nodeType:"text",value:"Learn more about "},{nodeType:"link",data:{href:"#",class:"bundle-description-product-1-link"},value:"{product1}"},{nodeType:"text",value:"."}]}]}}}),L=t(298),D=t(47758),k=t(6119),S=t(52253),R=t(56),x=t(30488),j=t(12510),w=t(52007),B=t(73113),U=r.createElement;function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,h.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M=(0,g.r)("bundleDescription",P)((function(e){var n=e.bundleDescriptionVariables,t=e.locale,r=e.offerContents,o=e.productArrangementCodes,i=e.productLogoUrls,u=(0,j.useStore)(),a=(0,R.TZ)(),c=(0,x.useCommerceAppContext)().hostCtxId,l=(0,N.x)(),d=(0,B.withDialog)((function(e){var n,t,d,s=e.control,f=e.onClose,p=null===s||void 0===s||null===(n=s[0])||void 0===n||null===(t=n.className)||void 0===t||null===(d=t.match(/\d/))||void 0===d?void 0:d[0],v=null===r||void 0===r?void 0:r[p],y=null===o||void 0===o?void 0:o[p],m=null===i||void 0===i?void 0:i[p];return U(k.l,{onClose:f,offerContent:v,productArrangementCode:y,productLogoUrls:m,commerceAppContext:c,errorBoundaryComponentName:"BundleDescription",store:u,apolloClient:l,adobeLaunchAnalytics:a,features:(0,D.h)()})}),{onClick:function(e){return e.className.includes("bundle-description-product-1-link")||e.className.includes("bundle-description-product-2-link")||e.className.includes("bundle-description-product-3-link")}})((function(e){var r=e.onClick,o=(0,v.useContentEntry)(P),i=o.get(P.description),u=o.get(P.threeProductsDescription),a=o.get(P.oneProductDescription),c=(0,w.useTrackEvent)(),l=function(e){var n=e.target.innerText,t=(0,L.W6)("".concat(n,":").concat(S.ps.LEARN_MORE_CLICK),S.ps.LEARN_MORE_ACTION);c(t),null===r||void 0===r||r(e.target)},d=function(e,n,t,r,o){var i=e;return 3===r.totalNumberOfBundleOffers?i=n:1===r.totalNumberOfBundleOffers&&(i=t),{data:i,json:i.json,placeHolderContext:H({},r),locale:o}}(i,u,a,n,t);return U("div",{className:A.Z.bundleDescription,role:"button",onKeyDown:function(e){13!==e.keyCode&&"Enter"!==e.key||(e.preventDefault(),l(e))},onClick:l,"data-testid":"bundle-description-box"},U(I.h,(0,_.Z)({},d,{parentComponentName:"bundleDescription"})))}));return U(d,null)}))},44596:function(e,n,t){"use strict";t.d(n,{td:function(){return l},ef:function(){return d},$D:function(){return s},B8:function(){return f},tp:function(){return v}});var r=t(26265),o=t(2385),i=t(90325),u=t(76217),a=t(68896);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){return"MONTHLY"===e?u.RecurrenceTerm.MONTH:u.RecurrenceTerm.YEAR}function d(e){var n=e.find((function(e){return e.tags&&e.tags.filter((function(e){return e===a.p.BEST_VALUE})).length>0}));return null===n||void 0===n?void 0:n.id}function s(e){return!!e.find((function(e){return e.tags&&e.tags.filter((function(e){return e===a.p.BEST_VALUE})).length>0&&e.offerType===o.m_.Promotion}))}function f(e,n){var t,r=n.find((function(n){return n.id===e}));return r?r.id:null===(t=n[0])||void 0===t?void 0:t.id}function p(e){var n;if(null!==e&&void 0!==e&&e.length){var t=e[0],o=null===(n=t.outcomes)||void 0===n?void 0:n.map((function(e){var n;return{discounts:null===(n=e.discounts)||void 0===n?void 0:n.map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e)})),durationAmount:e.durationAmount,durationType:e.durationType,durationUnit:e.durationUnit,type:e.type}}));return{status:t.status,id:t.id,promotionCode:t.promotionCode,redemptionCode:t.redemptionCode,outcomes:o,tncText:t.tncText}}}function v(e){return e&&e.length?e.map((function(e){var n,t,r,o,u,a,c,d,s=l(e.term),f=(0,i.Mo)(e.offerPriceDisplay),v=(0,i.QK)(null===(n=e.offerPriceDisplay)||void 0===n?void 0:n.priceDisplay),y=e.currency||{},m=y.formatString,g=y.precision,C=null===(t=e.offerPriceDisplay)||void 0===t?void 0:t.displayBaseUnitPrice;return{offerId:e.id,icons:null!==(r=null===(o=e.offerContent)||void 0===o?void 0:o.productIconUrls)&&void 0!==r?r:[],marketingValues:null!==(u=null===(a=e.offerContent)||void 0===a?void 0:a.marketingValues)&&void 0!==u?u:[],name:null===(c=e.offerContent)||void 0===c?void 0:c.productName,startingPrice:{data:{price:null===(d=e.offerPriceDisplay)||void 0===d?void 0:d.displayUnitPrice,formatString:m,recurrenceTerm:s,taxTerm:f,isTaxInclusive:v},options:{usePrecision:g}},strikethroughPrice:C?{data:{price:C,formatString:m,recurrenceTerm:s,taxTerm:f,isTaxInclusive:v},options:{usePrecision:g}}:null,appliedPromotion:p(e.appliedPromotions)}})):[]}},1025:function(e,n,t){"use strict";t.d(n,{J:function(){return m}});var r=t(26265),o=t(94184),i=t.n(o),u=t(67294),a=t(54854),c=t(47554),l=t(54147),d=t(36623),s=t(95130),f=t(84248),p=t(37703),v=t(49865),y=u.createElement,m=(0,v.r)("allTerms",c.AllClarityTerms)((function(e){var n=e.offer,t=e.isInOneColumn,o=(0,p.useSelector)(d.fq),u=(0,s.fM)(o),v=(0,l._8)(l.jy),m=(0,l._8)(l.S1),g=(null===n||void 0===n?void 0:n.offerType)===f.R.TRIAL?n:u;if(null===g||void 0===g||!g.offerType)return null;var C={offerType:null===g||void 0===g?void 0:g.offerType,customerSegment:null===g||void 0===g?void 0:g.customerSegment,marketSegments:null===g||void 0===g?void 0:g.marketSegments,promotion:null===g||void 0===g?void 0:g.promotion,processingInstructions:null===g||void 0===g?void 0:g.processingInstructions};return y("div",{className:i()(a.Z.clarityTermsContainer,(0,r.Z)({},a.Z.paddingTop,t&&v&&!m))},y(c.ClarityTerms,C))}))},78254:function(e,n,t){"use strict";t.d(n,{h:function(){return v}});var r,o,i,u,a=t(26265),c=t(30403),l=t(67294);!function(e){e.PARAGRAPH="paragraph",e.HEADER="header",e.UNORDERED_LIST="unordered-list"}(r||(r={})),function(e){e.HEADING_ONE="h1",e.HEADING_TWO="h2",e.HEADING_THREE="h3"}(o||(o={})),function(e){e.TEXT="text",e.LINK="link",e.LIST_ITEM="list-item"}(i||(i={})),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline"}(u||(u={}));var d,s,f=t(19291),p=l.createElement,v=function(e){var n,t,d,s,v=e.parentComponentName;function y(e){return null===e||void 0===e?void 0:e.map((function(e,n){return function(e,n){return b[e.nodeType](e,null,n)}(e,n)}))}function m(e,n){return"".concat(v,"_").concat(e,"_").concat(n)}var g=(n={},(0,a.Z)(n,r.PARAGRAPH,(function(e,n,t){return p("span",{key:m(r.PARAGRAPH,t)},n)})),(0,a.Z)(n,r.HEADER,(function(e,n,t){return C[e.style](e,n,t)})),(0,a.Z)(n,r.UNORDERED_LIST,(function(e,n,t){return p("ul",{key:m(r.UNORDERED_LIST,t)},n)})),n),C=(t={},(0,a.Z)(t,o.HEADING_ONE,(function(e,n,t){return p("h1",{key:m(o.HEADING_ONE,t)},n)})),(0,a.Z)(t,o.HEADING_TWO,(function(e,n,t){return p("h2",{key:m(o.HEADING_TWO,t)},n)})),(0,a.Z)(t,o.HEADING_THREE,(function(e,n,t){return p("h3",{key:m(o.HEADING_THREE,t)},n)})),t),b=(d={},(0,a.Z)(d,i.TEXT,(function(e,n,t){var r,o=O(e.value);return null===(r=e.format)||void 0===r||r.variants.map((function(n){return o=T[n](e,o,t)})),o})),(0,a.Z)(d,i.LINK,(function(e,n,t){var r,o,u,a,c;return O(decodeURIComponent(null===(r=e.data)||void 0===r?void 0:r.href))?p("a",{href:O(decodeURIComponent(null===(u=e.data)||void 0===u?void 0:u.href)),target:null===(a=e.data)||void 0===a?void 0:a.target,className:null===(c=e.data)||void 0===c?void 0:c.class,key:m(i.LINK,t)},O(e.value)):p("span",{key:m(i.LINK,t),className:null===(o=e.data)||void 0===o?void 0:o.class},O(e.value))})),(0,a.Z)(d,i.LIST_ITEM,(function(e,n,t){return p("li",{key:m(i.LIST_ITEM,t)},y(e.content))})),d),T=(s={},(0,a.Z)(s,u.BOLD,(function(e,n,t){return p("b",{key:m(u.BOLD,t)},n)})),(0,a.Z)(s,u.ITALIC,(function(e,n,t){return p("i",{key:m(u.ITALIC,t)},n)})),(0,a.Z)(s,u.UNDERLINE,(function(e,n,t){return p("u",{key:m(u.UNDERLINE,t)},n)})),s);function O(n){var t=new c.default(n,e.locale||"en-US").format(e.placeHolderContext);return(0,f.Xv)(t)}return p(l.Fragment,null," ",null!==e&&void 0!==e&&e.json?e.json.map((function(e,n){return function(e,n){return g[e.nodeType](e,y(e.content),n)}(e,n)})):e.plaintext," ")},y=(t(96168),t(44159),t(34937));!function(e){e.PARAGRAPH="paragraph",e.HEADING_ONE="heading-one",e.HEADING_TWO="heading-two"}(d||(d={})),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.HYPERLINK="hyperlink"}(s||(s={}));var m=(0,y.defineContents)("RichTextChild",{text:{id:"text",type:"string"},bold:{id:"bold",type:"string"},italic:{id:"italic",type:"string"},underline:{id:"underline",type:"string"},hyperlink:{id:"hyperlink",type:"string"},class:{id:"class",type:"string"},link:{id:"link",type:"string"},tooltip:{id:"tooltip",type:"string"}});(0,y.defineContents)("RichText",{type:{id:"type",type:"string"},children:{id:"children",type:m,isArray:!0}}),l.createElement},69047:function(e,n,t){"use strict";t.d(n,{o:function(){return W}});var r=t(27261),o=t(809),i=t.n(o),u=t(26265),a=t(92447),c=t(67294),l=t(711),d=t.n(l),s=t(37244),f=t.n(s),p=t(33462),v=t(26075),y=t(92471),m=t(34937),g=t(99246),C=t(298),b=t(65455),T=t(28919),O=t(96029),E=t(29013),_=t(80827),h=t(2385),A=t(52253),I=t(62482),N=t(59180),P=(0,m.defineContents)("tryBuyActionCards",{message:{id:"message",type:"string"},buttonLabel:{id:"buttonLabel",type:"string"},productArrangementCode:{id:"productArrangementCode",type:"string",isArray:!0},offerType:{id:"offerType",type:"string",isArray:!0},clientId:{id:"clientId",type:"string",isArray:!0},context:{id:"context",type:"string",isArray:!0},pageName:{id:"pageName",type:"string",isArray:!0}}),L=(0,m.defineContents)("tryBuyActionCardList",{tryBuyActionCards:{id:"tryBuyActionCards",type:P,isArray:!0,placeholderContent:[{message:"Want to try {productName} before you buy? (PH)",buttonLabel:"Try now (PH)",productArrangementCode:["apcc_direct_individual","acro_direct_individual","acrobat_pro_dc_sign_funnel_individual","acrobat_pro_dc_plus_sign_funnel_individual"],offerType:["BASE","PROMOTION"],clientId:["reader"],context:["inApp"],pageName:["bundle","commitment"]},{message:"Ready to buy {productName}? (PH)",buttonLabel:"Buy now (PH)",productArrangementCode:["apcc_direct_individual","acro_direct_individual","acrobat_pro_dc_sign_funnel_individual","acrobat_pro_dc_plus_sign_funnel_individual"],offerType:["TRIAL"],clientId:["reader"],context:["inApp"],pageName:["bundle","commitment"]}]}}),D=t(30488),k=t(4190),S=t(55988),R=t(37703),x=t(5764),j=t(12510),w=t(52007),B=t(49865),U=c.createElement;function Z(){var e=(0,r.Z)(["\n  query GET_SEGMENTATION_OFFERS($offersInput: SegmentationOffersInput!) {\n    segmentationOffers(input: $offersInput) {\n      result {\n        offers {\n          offer {\n            id\n            offerType\n            productArrangementCode\n          }\n        }\n      }\n    }\n  }\n"]);return Z=function(){return e},e}function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var M=(0,y.Ps)(Z());var G=function(e){var n=e.onClick,t=e.variables,r=(0,m.useContentEntry)(P),o=r.format(P.message,t),i=r.get(P.buttonLabel);return U("div",{className:p.Z.actionCard},U("div",{className:p.Z.message},o),U("div",{className:p.Z.button},U(E.r,{variant:"secondary",onPress:n,"aria-labelledby":i,"data-testid":"action-card-link"},i)))},W=(0,B.r)("tryBuyActionCardList",L)((function(e){var n=e.offer,t=n.offerType,r=n.productArrangementCode,o=n.offerContent.productName,c=(0,j.useStore)().getState(),l=(0,b.mT)(c),s=(0,b._2)(c),y=(0,D.useCommerceAppContext)(),E=y.hostCtxId,B=y.navigate,Z=(0,R.useSelector)(O.vl)[f().app.CLIENT_ID.name],W=(0,S.t)().currentRoute,F=(0,x.R_)().setLoading,q=function(e,n){var t=e.search(P),r=null===t||void 0===t?void 0:t.find((function(e){return d()(n,(function(n,t){return function(e,n,t){return(e.get(P[n])||[]).includes(t)}(e,t,n)}))}));if(r)return{message:r.get(P.message),buttonLabel:r.get(P.buttonLabel)}}((0,m.useContentEntry)(L),{clientId:Z,context:E,productArrangementCode:r,offerType:t,pageName:W}),K=(0,v.x)(),V=(0,w.useTrackEvent)(),Y=(0,k.useFeatureFlags)([g.R.P_UC_USE_TEST_CAMPAIGNS])[g.R.P_UC_USE_TEST_CAMPAIGNS];function $(){return($=(0,a.Z)(i().mark((function e(){var n,r,o,u,a,c,l,d,s,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),n=(0,I.C$)((0,T.vW)()),r=n.url,o=n.params,u=t===h.m_.Trial?h.m_.Base:h.m_.Trial,e.next=5,Q(u);case 5:a=e.sent,c=X(o,a,u),u===h.m_.Trial?(l=A.ps.TRY_NOW_BANNER_CLICK,d=A.ps.TRY_NOW_BANNER):(l=A.ps.BUY_NOW_BANNER_CLICK,d=A.ps.BUY_NOW_BANNER),s=(0,C.W6)(l,d),V(s),f="".concat(r,"?").concat((0,I.tW)(c)),B(f,_.N$.DEFAULT);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,n,t){var r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e);return r.items[0].id=n,t===h.m_.Base?delete r[f().app.OFFER_TYPE.name]:r[f().app.OFFER_TYPE.name]=h.m_.Trial,delete r[f().app.STARTING_STEP.name],delete r[f().app.STEP_WIZARD_COOKIE.name],r}function Q(e){return z.apply(this,arguments)}function z(){return(z=(0,a.Z)(i().mark((function e(n){var t,o,u,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.query({query:M,variables:{offersInput:{code:r,country:l,locale:s,offerType:n,sourceIntent:Y?N.ph.SEGMENTATION:void 0}}});case 3:return u=e.sent,a=u.data.segmentationOffers.result,c=a&&(null===(t=a[0])||void 0===t?void 0:t.offers),e.abrupt("return",null===c||void 0===c||null===(o=c.find((function(e){return e.offer.productArrangementCode===r})))||void 0===o?void 0:o.offer.id);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var J={onClick:function(){return $.apply(this,arguments)},variables:{productName:o}};return q?U("div",{className:p.Z.tryBuyActionCardContainer,"data-testid":"try-buy-action-card"},U(m.ContentEntryProvider,{value:q,model:P},U(G,J))):null}))},52148:function(e,n,t){"use strict";t.d(n,{Cd:function(){return d},_p:function(){return f}});var r=t(26265),o=t(28919),i=t(85686),u=t(29843),a=t(67294);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(){var e=(0,i.useLogger)();return{validateOfferContent:(0,a.useCallback)((function(n,t,r){return function(e,n,t,r){var o=[];n.forEach((function(e){(e.validate||s)(t[e.name])||o.push(e.name)})),o.length&&v({component:e,missingContent:o},r)}(n,t,r,e)}),[e]),validateContentEntry:(0,a.useCallback)((function(n){return function(e,n){var t=e.model,r=null===t||void 0===t?void 0:t.__contentType,o=y(r),i=e.getRaw(),u=null===t||void 0===t?void 0:t.fields,a=p(o,i,u);a.length&&v({contentModel:r,missingContent:a},n)}(n,e)}),[e])}}function s(e){return!!e}function f(e){return!(null===e||void 0===e||!e.json)}function p(e,n,t){var o=[];return e.forEach((function(e){var i,u=null===(i=t[e])||void 0===i?void 0:i.type,a=n[e];if("string"===u)s(a)||o.push(e);else if(u&&u.__contentType){var c,l,d=u.__contentType,f=y(d);if(t[e].isArray)c=[],a.forEach((function(n,o){var i,u=p(f,n,null===(i=t[e])||void 0===i?void 0:i.type);u.length&&c.push((0,r.Z)({},"".concat(e,"[").concat(o,"]"),u))}));else c=p(f,a,null===(l=t[e])||void 0===l?void 0:l.type.fields);c.length&&o.push((0,r.Z)({},"".concat(e,":").concat(d),c))}})),o}function v(e,n){var t=(0,u.H)((0,o.vW)());n.warn(l(l({},e),{},{url:t}),"UCv3: Missing or Invalid Content Warning")}function y(e){var n;return(null===(n=m[e])||void 0===n?void 0:n.required)||[]}var m={BestValue:{required:["label"]},Bundle:{required:["startingPriceLabel","bestValue","priceContent"]},CommitmentTerms:{required:["termCollection","commitmentContent"]},Commitment:{required:["bestValue","priceContent"]},CommitmentTerm:{required:["name","commitment","term","termUnit","offerType","cps","cpf"]},Price:{required:["recurrenceLabel","recurrenceAriaLabel","perUnitLabel","perUnitAriaLabel","freeLabel","freeAriaLabel","taxExclusiveLabel","taxInclusiveLabel","alternativePriceAriaLabel","strikethroughAriaLabel"]}}},46576:function(e,n,t){"use strict";t.d(n,{mw:function(){return g},Vk:function(){return O}});var r=t(809),o=t.n(r),i=t(92447),u=t(27261),a=t(92471),c=t(26075),l=t(36623),d=t(61792),s=t(65455),f=t(62452),p=t(37703),v=t(67294),y=t(12510);function m(){var e=(0,u.Z)(["\n  query GET_COUNTRY_CHANGE_ALLOWED {\n    user {\n      id\n      countryChangeAllowed\n    }\n  }\n"]);return m=function(){return e},e}var g="GET_COUNTRY_CHANGE_ALLOWED",C=(0,a.Ps)(m());function b(e,n){return T.apply(this,arguments)}function T(){return(T=(0,i.Z)(o().mark((function e(n,t){var r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!1,e.prev=1,!t){e.next=7;break}return e.next=5,n.query({query:C,context:{headers:{Authorization:"Bearer ".concat(t)}},fetchPolicy:"no-cache"});case 5:i=e.sent,r=i.data.user.countryChangeAllowed;case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var O=function(){var e=(0,p.useDispatch)(),n=(0,f.KW)(),t=(0,y.useStore)().getState(),r=(0,d.PQ)(t),u=(0,s.mT)(t),a=(0,d.et)(t).countryCode,m=(0,d.hP)(t),g=(0,l.qr)(t),C=(0,c.x)();(0,v.useEffect)((function(){function t(){return(t=(0,i.Z)(o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=!0,i=a&&a!==u,t.t0=!g,!t.t0){t.next=7;break}return t.next=6,b(C,m);case 6:t.t0=t.sent;case 7:r=t.t0,i&&!r&&n(a),e((0,d.oY)(r));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r&&function(){t.apply(this,arguments)}()}),[])}},95130:function(e,n,t){"use strict";t.d(n,{gF:function(){return i},fM:function(){return u}});var r=t(81834),o=t(36623),i=function(e){return Array.isArray(null===e||void 0===e?void 0:e.cartItems)?null===e||void 0===e?void 0:e.cartItems[0]:null},u=function(e){var n=function(e){return null===e||void 0===e?void 0:e.filter((function(e){return e.offerVariants.sourceOffer.offerType===r.OfferType.TRIAL}))}(e);return(null===n||void 0===n?void 0:n[0])&&(0,o.rL)(null===n||void 0===n?void 0:n[0])}}}]);