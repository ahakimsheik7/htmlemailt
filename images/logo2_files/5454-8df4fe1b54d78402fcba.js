(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{75509:function(e,t,n){"use strict";t.G6=t.qW=t.Z9=t.h8=void 0;var o=n(31107);Object.defineProperty(t,"h8",{enumerable:!0,get:function(){return o.ProductInfoInline}}),Object.defineProperty(t,"Z9",{enumerable:!0,get:function(){return o.ProductInfoCard}});var r=n(91417);Object.defineProperty(t,"qW",{enumerable:!0,get:function(){return r.ProductContentModel}}),Object.defineProperty(t,"G6",{enumerable:!0,get:function(){return r.ProductCardContentModel}});var a=n(1707)},31107:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProductInfoCard=t.ProductInfoInline=void 0;const c=a(n(67294)),l=n(91417),d=n(1707),s=n(99652),u=i(n(76202)),m=n(34937),f=n(47554),p=n(97039);n(91767);const g=i({productInfo:"ProductInfo__productInfo___1xke9",productInfoFlexBreak:"ProductInfo__productInfoFlexBreak___10HPR",productInfoHeaderSummary:"ProductInfo__productInfoHeaderSummary___2gEGk",productName:"ProductInfo__productName___2HhFK",productDescription:"ProductInfo__productDescription___1mvxx",productStartingPrice:"ProductInfo__productStartingPrice___292xv",productInfoCard:"ProductInfo__productInfoCard___14QxP",productInfoHeader:"ProductInfo__productInfoHeader___ETMBW",productInfoIcon:"ProductInfo__productInfoIcon___yk9kz",productWithSubtitle:"ProductInfo__productWithSubtitle___yk2JZ",productWithTrialBadge:"ProductInfo__productWithTrialBadge___1-bcI",productTrialBadge:"ProductInfo__productTrialBadge___teWYG",productInfoInline:"ProductInfo__productInfoInline___1KCr2"});n(12929);const _=i({priceFullDisplay:"Price__priceFullDisplay___2pOqp"}),b=n(16267),I=n(52007),h=n(89949),S=n(38712),v=n(18983);n(8575);const y=i({priceFullDisplay:"StrikethroughPrice__priceFullDisplay___37itX"});function P({iconUrls:e}){return(null===e||void 0===e?void 0:e.length)?c.default.createElement(c.default.Fragment,null,e.map(((e,t)=>c.default.createElement("img",{src:e,"data-testid":`product-info-icon-${t}`,key:`product-info-icon-${t}`,className:g.default.productInfoIcon,role:"presentation",alt:""})))):null}function E({productName:e}){return c.default.createElement("div",{role:"heading","aria-level":2,"data-testid":"product-info-name",className:g.default.productName},c.default.createElement("span",null,e))}function O({subtitle:e}){return e?c.default.createElement("div",{role:"heading","aria-level":3,"data-testid":"product-info-subtitle",className:g.default.productSubtitle},e):null}function C({json:e,variables:t}){const n={json:e,variables:t,dataTestId:"product-info-box-multi-format-description"};return c.default.createElement("div",{"data-testid":"product-info-description",className:g.default.productDescription},c.default.createElement(S.MultiFormatJson,Object.assign({},n)))}function T({text:e,locale:t}){const n={content:S.RichTextContent.Plain.createEntry({plaintext:e},t)};return c.default.createElement("div",{"data-testid":"product-info-description",className:g.default.productDescription},c.default.createElement(S.MultiFormatText,Object.assign({},n)))}function M({description:e,includedProductName:t,includedProductArrangementCode:n}){var o,r;const{locale:a}=c.useContext(m.ContentContext);if(!e||!(null===(o=e.json)||void 0===o?void 0:o.length)&&!e.plainText)return null;let i={};return n&&(i={includedProductName:t,includedProductArrangementCode:n}),(null===(r=e.json)||void 0===r?void 0:r.length)?c.default.createElement(C,{json:e.json,variables:i}):c.default.createElement(T,{text:e.plainText,locale:a})}function N({startingPrice:e}){return e.options=e.options||{},e.options.styles=_.default,c.default.createElement(p.InlinePrice,Object.assign({},e))}function k({startingPrice:e,startingPriceLabel:t,strikethroughPrice:n,wordOrder:o}){return e&&t?c.default.createElement(c.default.Fragment,null,o===v.WordOrder.SVO&&c.default.createElement("div",{"data-testid":"product-info-starting-price",className:[g.default.productStartingPrice,o].join(" ")},t," ",c.default.createElement(N,{startingPrice:e})," ",n&&c.default.createElement(A,{props:n})),o===v.WordOrder.SOV&&c.default.createElement("div",{"data-testid":"product-info-starting-price",className:[g.default.productStartingPrice,o].join(" ")},c.default.createElement(N,{startingPrice:e})," ",n&&c.default.createElement(A,{props:n})," ",t)):null}const A=({props:e})=>{const t=Object.assign(Object.assign({},e),{options:{styles:y.default}});return c.default.createElement(p.StrikethroughPrice,Object.assign({key:"strikethrough-price"},t))};function U({learnMoreLabel:e,onClick:t,hasPopup:n}){const o=I.useTrackEvent(),r=n&&"false"!==n?"button":"link";function a(e){("button"===r?["Enter"," ","Spacebar"]:["Enter"]).includes(e.key)&&i(e)}function i(e){"function"===typeof t&&t(e),function(){const e=(new Date).toISOString(),t={eventName:h.AnalyticsProps.SUBSCRIPTION_LEARNMORE_CLICK,eventAction:h.AnalyticsProps.SUBSCRIPTION_LEARNMORE_ACTION,timeStamp:e,start:e,end:e};o({primaryEvent:{eventInfo:t},event:[{eventInfo:t}]})}()}return e?c.default.createElement(u.default,{"data-testid":"product-info-learn-more",className:g.default.productLearnMore,onClick:e=>i(e),onKeyDown:e=>a(e),role:r,"aria-haspopup":n},e):null}function j({offerType:e,promotion:t}){if(e!==d.OfferType.Trial||!t)return null;const n=t.promotionTerm,o=t.promotionTermValue;return n&&o?c.default.createElement("div",{"data-testid":"product-info-trial-badge",className:g.default.productTrialBadge},c.default.createElement(b.TrialBadge,{data:{term:n,value:o}})):null}t.ProductInfoInline=e=>{const{data:t}=e,n=m.useContentEntry(l.ProductContentModel).get(l.ProductContentModel.learnMoreLabel),o=e.data.promotion,{learnMoreCallback:r}=t,{callback:a,hasPopup:i="false"}=r||{};return c.default.createElement("div",{className:`${g.default.productInfo} ${g.default.productInfoInline}`},c.default.createElement(P,{iconUrls:t.productIconUrls}),c.default.createElement("div",{className:`${g.default.productInfoHeaderSummary} ${t.subtitle?g.default.productWithSubtitle:g.default.productNoSubtitle}`},c.default.createElement(E,{productName:t.productName}),c.default.createElement(j,{offerType:e.data.offerType,promotion:o}),c.default.createElement("div",{className:g.default.productInfoFlexBreak}),c.default.createElement(O,{subtitle:t.subtitle}),c.default.createElement("div",{className:g.default.productInfoFlexBreak}),c.default.createElement(M,{description:t.productDescription,includedProductName:t.includedProductName,includedProductArrangementCode:t.includedProductArrangementCode}),c.default.createElement(U,{learnMoreLabel:n,onClick:a,hasPopup:i})))};const D=e=>{const t=m.useContentEntry(l.ProductContentModel),n=t.get(l.ProductContentModel.startingPriceLabel),o=t.get(l.ProductContentModel.learnMoreLabel),r=e.promotion,{learnMoreCallback:a}=e,{callback:i,hasPopup:s=!1}=a||{},u={baseFunctionProps:{startingPrice:e.startingPrice,startingPriceLabel:n,strikethroughPrice:e.strikethroughPrice},renderFunction:k};return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:g.default.productInfoHeader},c.default.createElement(P,{iconUrls:e.productIconUrls}),c.default.createElement("div",{className:function(){const t=[g.default.productInfoHeaderSummary];return e.subtitle&&t.push(g.default.productWithSubtitle),e.offerType===d.OfferType.Trial&&r&&r.promotionTerm&&r.promotionTermValue&&t.push(g.default.productWithTrialBadge),t.join(" ")}()},c.default.createElement(E,{productName:e.productName}),c.default.createElement(O,{subtitle:e.subtitle}),c.default.createElement(j,{offerType:e.offerType,promotion:r}))),c.default.createElement(M,{description:e.productDescription,includedProductName:e.includedProductName,includedProductArrangementCode:e.includedProductArrangementCode}),c.default.createElement(v.WordOrderWrapper,Object.assign({},u)),c.default.createElement(U,{learnMoreLabel:o,onClick:i,hasPopup:s}))};t.ProductInfoCard=e=>{var t;const{data:n}=e,o=null!==(t=n.clarityTermsProps)&&void 0!==t?t:void 0;return c.default.createElement("div",{className:`${g.default.productInfo} ${g.default.productInfoCard}`},c.default.createElement(s.Card,{allowsSelection:!1},c.default.createElement(s.CardBody,null,c.default.createElement(D,Object.assign({},n)),o&&c.default.createElement("div",{className:g.default.productClarityTerms,"data-testid":"product-info-clarity-terms"},c.default.createElement(f.ClarityTerms,Object.assign({},o))))))}},91417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProductCardContentModel=t.ProductContentModel=void 0;const o=n(16267),r=n(47554),a=n(34937),i=n(97039);t.ProductContentModel=a.defineContents("ProductContent",{startingPriceLabel:{id:"startingPriceLabel",type:"string",placeholderContent:"Starting at"},priceContent:{id:"priceContent",type:i.PriceContentModel},learnMoreLabel:{id:"learnMoreLabel",type:"string",placeholderContent:"Learn more"},trialBadge:{id:"trialBadge",type:o.TrialBadgeContentModel}}),t.ProductCardContentModel=a.defineContents("ProductCardContent",{productContent:{id:"productContent",type:t.ProductContentModel},clarityTerms:{id:"clarityTerms",type:r.AllClarityTerms}})},1707:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OfferType=void 0,function(e){e.Base="BASE",e.Promotion="PROMOTION",e.Trial="TRIAL"}(t.OfferType||(t.OfferType={}))},89949:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnalyticsProps=void 0,t.AnalyticsProps={SUBSCRIPTION_LEARNMORE_ACTION:"SubscriptionLearnMore",SUBSCRIPTION_LEARNMORE_CLICK:"Subscription:LearnMore:click"}},52323:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SegmentationItem=void 0;const r=o(n(67294));n(83787);const a=o({backgroundColorWhite:"#fff",textColorDarkGrey:"#2c2c2c",textColorGrey:"#707070",borderColor:"#e1e1e1",borderColorSelected:"#1473e6",boxBorder:"1px solid #e1e1e1",selectedBoxBorder:"2px solid #1473e6",segmentationItem:"SegmentationItem__segmentationItem___2F1L-",segmentIconImg:"SegmentationItem__segmentIconImg___2DZY4",segmentIcon:"SegmentationItem__segmentIcon___3pFnq",title:"SegmentationItem__title___2PuZk",subTitle:"SegmentationItem__subTitle___3oyOP",segmentationSelected:"SegmentationItem__segmentationSelected___3beXq"}),i=["Enter"," ","Spacebar"];t.SegmentationItem=e=>{var t,n;const{defaultIcon:o,selectedIcon:c,title:l,subtitle:d,options:s,id:u,"aria-label":m,onClick:f}=e;function p(){"function"===typeof f&&f(u)}const g=null!==(t=null===s||void 0===s?void 0:s.selected)&&void 0!==t&&t;return r.default.createElement("div",{className:`${a.default.segmentationItem}${null!==(n=null===s||void 0===s?void 0:s.selected)&&void 0!==n&&n?" "+a.default.segmentationSelected:""}`,onClick:p,onKeyDown:function(e){i.includes(e.key)&&(e.preventDefault(),p())},role:"button","aria-pressed":g,tabIndex:0},function(e,t,n){if(!t)return null;let o=t;return e&&n&&(o=n),r.default.createElement("div",{className:a.default.segmentIcon},o)}(g,o,c),r.default.createElement("div",{className:a.default.segmentDetails},r.default.createElement("h3",{className:a.default.title,"aria-label":m},l),r.default.createElement("div",{className:a.default.subTitle},d)))}},23910:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SegmentationItem=void 0;var o=n(52323);Object.defineProperty(t,"SegmentationItem",{enumerable:!0,get:function(){return o.SegmentationItem}})},52251:function(e,t,n){"use strict";t.wQ=t.MP=t.DV=void 0;var o=n(26892);Object.defineProperty(t,"DV",{enumerable:!0,get:function(){return o.SegmentationSelector}});var r=n(69302);Object.defineProperty(t,"MP",{enumerable:!0,get:function(){return r.SegmentationSelectorsContentType}}),Object.defineProperty(t,"wQ",{enumerable:!0,get:function(){return r.ImageContentType}})},26892:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SegmentationSelector=void 0;const c=a(n(67294)),l=n(34937),d=n(23910),s=n(63149),u=n(69302);n(31612);const m=i({segmentationSelector:"SegmentationSelector__segmentationSelector___cOGPR",segmentation:"SegmentationSelector__segmentation___2AWKK"}),f=n(52007);t.SegmentationSelector=e=>{const{code:t,marketSegment:n="",segmentations:o=[],onSelect:r,defaultSelectionOfferId:a}=e,[i,p]=c.useState(),g=l.useContentEntry(u.SegmentationSelectorsContentType),_=c.useMemo((()=>o.map((e=>Object.assign({},e.offer)))),[o]),b=u.getSegmentationWithContent(g,_),I=f.useTrackEvent();function h(e,t){if(e!==i){p(e);const n=(b||[]).find((t=>t.id===e));if(!t){const{customerSegment:e,marketSegments:t}=n;!function(e,t){let n=s.AnalyticsProps.TEAMS;e===u.CUSTOMER_SEGMENT.INDIVIDUAL&&(n=t===u.MARKET_SEGMENT.COM?s.AnalyticsProps.INDIVIDUAL:s.AnalyticsProps.STUDENTS);const o=(new Date).toISOString(),r={eventName:`${n}:${s.AnalyticsProps.SEGMENTPOD_CLICK}`,eventAction:`${n}${s.AnalyticsProps.POD_ACTION_SUFFIX}`,timeStamp:o,start:o,end:o};I({primaryEvent:{eventInfo:r},event:[{eventInfo:r}]})}(e,t)}"function"===typeof r&&r(n)}}function S(e){return c.default.createElement("img",{src:null===e||void 0===e?void 0:e._publishUrl,role:"presentation",alt:""})}return c.useEffect((()=>{const e=a||function(e,t,n){let o="";if(e&&t){const e=n.filter((e=>e.marketSegments.includes(t)));if(e.length>1){const t=e.find((e=>e.customerSegment===u.CUSTOMER_SEGMENT.INDIVIDUAL));o=null===t||void 0===t?void 0:t.id}else o=e[0].id}return o||n[0].id}(t,n,_);e&&(null===b||void 0===b?void 0:b.length)&&h(e,!0)}),[]),c.default.createElement("div",{className:m.default.segmentationSelector,role:"group"},function(e,t){return Array.isArray(e)?e.map((e=>{const{id:n,title:o,subtitle:r,defaultIcon:a,selectedIcon:i,marketSegments:l,customerSegment:s}=e;return c.default.createElement("div",{key:n,className:m.default.segmentation,"data-testid":`selectable-option-${s.toString().toLowerCase()}-${l.toString().toLowerCase()}`},c.default.createElement(d.SegmentationItem,{title:o,subtitle:r,id:n,defaultIcon:S(a),selectedIcon:S(i),onClick:e=>h(e),options:{selected:n===t}}))})):null}(b,i))}},69302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSegmentationWithContent=t.SegmentationSelectorsContentType=t.SegmentationSelectorContentType=t.ImageContentType=t.offerTypes=t.CUSTOMER_SEGMENT=t.MARKET_SEGMENT=void 0;const o=n(34937);var r,a,i;!function(e){e.COM="COM",e.EDU="EDU",e.GOV="GOV"}(r=t.MARKET_SEGMENT||(t.MARKET_SEGMENT={})),function(e){e.TEAM="TEAM",e.INDIVIDUAL="INDIVIDUAL",e.ENTERPRISE="ENTERPRISE"}(a=t.CUSTOMER_SEGMENT||(t.CUSTOMER_SEGMENT={})),function(e){e.DEFAULT="DEFAULT",e.PERPETUAL="PERPETUAL",e.TRIAL="TRIAL",e.BASE="BASE",e.PROMOTION="PROMOTION"}(i=t.offerTypes||(t.offerTypes={})),t.ImageContentType=o.defineContents("ImageContentType",{publishUrl:{id:"_publishUrl",type:"string"},authorUrl:{id:"_authorUrl",type:"string"}}),t.SegmentationSelectorContentType=o.defineContents("SegmentationSelector",{title:{id:"title",type:"string"},subtitle:{id:"subtitle",type:"string"},defaultIcon:{id:"defaultIcon",type:t.ImageContentType},selectedIcon:{id:"selectedIcon",type:t.ImageContentType},marketSegments:{id:"marketSegments",type:"string"},customerSegment:{id:"customerSegment",type:"string"},offerType:{id:"offerType",type:"string"}}),t.SegmentationSelectorsContentType=o.defineContents("SegmentationSelectors",{segmentations:{id:"segmentations",type:t.SegmentationSelectorContentType,isArray:!0,placeholderContent:[{title:"For personal use",subtitle:"I'm trying this for myself",defaultIcon:{_publishUrl:"https://publish-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/individuals.svg",_authorUrl:"https://author-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/individuals.svg"},selectedIcon:{_publishUrl:"https://publish-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/individuals_selected.svg",_authorUrl:"https://author-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/individuals_selected.svg"},marketSegments:r.COM,customerSegment:a.INDIVIDUAL},{title:"For students and teachers",subtitle:"Requires valid ID for an education discount",defaultIcon:{_publishUrl:"https://publish-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/students_and_teachers.svg",_authorUrl:"https://author-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/students_and_teachers.svg"},selectedIcon:{_publishUrl:"https://publish-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/students_and_teachers_selected.svg",_authorUrl:"https://author-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/students_and_teachers_selected.svg"},marketSegments:r.EDU,customerSegment:a.INDIVIDUAL},{title:"For teams and businesses",subtitle:"Business trials for you and your team",defaultIcon:{_publishUrl:"https://publish-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites.svg",_authorUrl:"https://author-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites.svg"},selectedIcon:{_publishUrl:"https://publish-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites_selected.svg",_authorUrl:"https://author-p22655-e59341.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites_selected.svg"},marketSegments:r.COM,customerSegment:a.TEAM,offerType:i.TRIAL},{title:"For schools and universities",subtitle:"Flexible licensing options for schools, labs and more",defaultIcon:{_publishUrl:"https://publish-p22655-e59433.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites.svg",_authorUrl:"https://author-p22655-e59433.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites.svg"},selectedIcon:{_publishUrl:"https://publish-p22655-e59433.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites_selected.svg",_authorUrl:"https://author-p22655-e59433.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites_selected.svg"},customerSegment:a.TEAM,marketSegments:r.EDU},{title:"For teams and businesses",subtitle:"Business offerings for you and your team",defaultIcon:{_publishUrl:"https://odin.adobe.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites.svg",_authorUrl:"https://author-p22655-e59433.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites.svg"},selectedIcon:{_publishUrl:"https://odin.adobe.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites_selected.svg",_authorUrl:"https://author-p22655-e59433.adobeaemcloud.com/content/dam/checkout/images/segmentation/segmentation-selector/teams_and_universitites_selected.svg"},customerSegment:a.TEAM,marketSegments:r.COM,offerType:i.BASE}]}});t.getSegmentationWithContent=(e,t)=>{const n=e.get("segmentations");return Array.isArray(n)&&t.map((e=>{const{id:t,customerSegment:o,marketSegments:r,offerType:a}=e||{},[i]=r||[""],c=n.find((e=>e.marketSegments===i&&e.customerSegment===o&&(!e.offerType||e.offerType===a))),{title:l="",subtitle:d="",defaultIcon:s="",selectedIcon:u=""}=c||{};return{id:t,title:l,subtitle:d,defaultIcon:s,selectedIcon:u,customerSegment:o,marketSegments:i,offerType:a}}))}},63149:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnalyticsProps=void 0,t.AnalyticsProps={INDIVIDUAL:"Individual",POD_ACTION_SUFFIX:"Pod",SEGMENTPOD_CLICK:"SegmentPod:click",STUDENTS:"Students",TEAMS:"Teams"}},18983:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WordOrder=t.LanguageWordOrderModel=t.WordOrderWrapper=void 0;var o=n(35885);Object.defineProperty(t,"WordOrderWrapper",{enumerable:!0,get:function(){return o.WordOrderWrapper}});var r=n(18468);Object.defineProperty(t,"LanguageWordOrderModel",{enumerable:!0,get:function(){return r.LanguageWordOrderModel}});var a=n(26872);Object.defineProperty(t,"WordOrder",{enumerable:!0,get:function(){return a.WordOrder}})},35885:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WordOrderWrapper=void 0;const r=o(n(67294)),a=n(26872),i=n(34937),c=n(18468);t.WordOrderWrapper=e=>{const{baseFunctionProps:t={}}=e,n=i.useContentEntry(c.LanguageWordOrderModel,!0).get(c.LanguageWordOrderModel.wordOrder)||a.WordOrder.SVO,o=Object.assign(Object.assign({},t),{wordOrder:n});return"function"===typeof e.renderFunction?r.default.createElement(e.renderFunction,Object.assign({},o)):null}},18468:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LanguageWordOrderModel=void 0;const o=n(34937);t.LanguageWordOrderModel=o.defineContents("LanguageWordOrder",{wordOrder:{id:"wordOrder",type:"string"}})},26872:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WordOrder=void 0,function(e){e.SOV="SOV",e.SVO="SVO"}(t.WordOrder||(t.WordOrder={}))}}]);