(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9174],{99174:function(e,t,r){"use strict";e.exports=r(39667)},39667:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(67294));r(89522);var o,a=(o=r(45697))&&o.__esModule?o:{default:o},i=r(44959);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=!("undefined"===typeof window||!window.document||!window.document.createElement),g=function(e){function t(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?d(e):t}(this,l(t).call(this,e)),p(d(r),"tabFromIndex",void 0),p(d(r),"touchObject",{}),p(d(r),"onReadyStateChange",(function(){r.setDimensions()})),p(d(r),"onResize",(function(){r.frameWidth()>0&&(r.setState({breakpoint:r.getCurrentBreakpoint()}),r.setDimensions(),r.moveToPage(r.state.currentPage))})),p(d(r),"onFocus",(function(e,t){if(!r.state.showPagerDot&&void 0!==r.tabFromIndex){r.tabFromIndex=void 0;var n=0,o=r.state.pager.length-1;if(r.state.pager.forEach((function(e,a){t>=e&&(t<r.state.pager[a+1]||a===o)&&(n=a)})),r.moveToPage(n),n<o&&r.list){var a=r.slidePosition(t);r.list.style.transform="translate3d(-".concat(a,"px, 0px, 0px)"),r.list.style.WebkitTransform="translate3d(-".concat(a,"px, 0px, 0px)")}}})),p(d(r),"addEvent",(function(e,t,r){if(null!==e&&"undefined"!==typeof e)if(e.addEventListener)e.addEventListener(t,r,!1);else if(e.attachEvent)e.attachEvent("on ".concat(t),r);else{e["on ".concat(t)]=r}})),p(d(r),"removeEvent",(function(e,t,r){if(null!==e&&"undefined"!==typeof e)if(e.removeEventListener)e.removeEventListener(t,r,!1);else if(e.detachEvent)e.detachEvent("on ".concat(t),r);else{e["on ".concat(t)]=null}})),p(d(r),"previousPage",(function(){var e=r.state.currentPage;e>0&&r.moveToPage(e-1)})),p(d(r),"nextPage",(function(){var e=r.state,t=e.currentPage;t+1<e.pager.length&&r.moveToPage(t+1)})),p(d(r),"_debounce",(function(e,t){var n;return function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];var s=function(){return e.apply(d(r),a)};clearTimeout(n),n=setTimeout(s,t)}})),p(d(r),"detectTab",(function(e,t){if(r.tabFromIndex=void 0,("Tab"===e.key||9===e.which||"ArrowRight"===e.key||39===e.which||"ArrowLeft"===e.key||37===e.which)&&1!==r.cardsPerRow()&&(r.tabFromIndex=t),("ArrowRight"===e.key||39===e.which)&&r.list.children[t+1]){var n=[].slice.call(document.querySelectorAll('.carousel [tabindex]:not([tabindex="-1"])')),o=n.indexOf(e.target);n[o+1].focus()}else{if(("ArrowLeft"===e.key||37===e.which)&&r.list.children[t-1]){var a=[].slice.call(document.querySelectorAll('.carousel [tabindex]:not([tabindex="-1"])')),i=a.indexOf(e.target);a[i-1].focus()}}})),p(d(r),"forceCarouselResize",(function(e){r.setDimensions(),r.moveToPage(e.detail.index?e.detail.index:r.state.currentPage)})),p(d(r),"handleDecoratorKeyDown",(function(e){if(" "===e.key||"Enter"===e.key||13===e.which||32===e.which){var t=e.currentTarget.getElementsByTagName("button")[0];t&&t.click()}})),p(d(r),"handleDecorator",(function(e){if(e.preventDefault(),-1!==e.currentTarget.className.indexOf("carousel-left-button")){r.previousPage();var t={type:i.LEFT_BUTTON_CLICKED,metadata:r.props.metadata};r.props.actionEvents(t)}else if(-1!==e.currentTarget.className.indexOf("carousel-right-button")){r.nextPage();var n={type:i.RIGHT_BUTTON_CLICKED,metadata:r.props.metadata};r.props.actionEvents(n)}})),p(d(r),"debouncedOnResize",void 0);var n=r.props.customCardMapping,o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}({},i.CARD_MAPPING,n);return r.state={currentPage:0,pager:[],slideWidth:e.slideWidth,slideHeight:e.slideHeight,cardMapping:o,breakpoint:r.getCurrentBreakpoint()},r}var r,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),r=t,(o=[{key:"componentWillMount",value:function(){this.setInitialDimensions()}},{key:"componentDidMount",value:function(){var e=this;this.bindEvents(),setTimeout((function(){e.setState({breakpoint:e.getCurrentBreakpoint()},(function(){e.updatePager(),e.setDimensions()}))}),500)}},{key:"componentWillReceiveProps",value:function(e){var t=this.state.slideHeight;this.setState({slideHeight:e.slideHeight>0?e.slideHeight:t}),this.setDimensions()}},{key:"componentWillUnmount",value:function(){this.unbindEvents()}},{key:"getCurrentBreakpoint",value:function(){var e=window.innerWidth&&document.documentElement.clientWidth?Math.min(window.innerWidth,document.documentElement.clientWidth):window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth;return e>=1768?"L":e>=1440?"LM":e>=1280?"M":e>=960?"MS":e>=760?"S":e>=480?"SS":"XS"}},{key:"cardsPerRow",value:function(){var e=this.props.cardSize,t=this.state,r=t.cardMapping,n=t.breakpoint;return r["".concat(e)]["breakpoint".concat(n)]?r["".concat(e)]["breakpoint".concat(n)].cardsPerRow:1}},{key:"cardWidth",value:function(){var e=0;return e=(this.frameWidth()-this.cardGutter()*(this.cardsPerRow()-1))/this.cardsPerRow(),e}},{key:"cardWidthAtIndex",value:function(e){return this.props.keepWidth?Array.from(this.list.children).map((function(e){return e.offsetWidth}))[e]:this.cardWidth()}},{key:"formatChildren",value:function(e){var t=this,r=this;return n.default.Children.map(e,(function(e,o){return n.default.createElement("li",{className:"carousel-item",style:r.getSlideStyles(o),key:"carousel-item-".concat(o),tabIndex:-1,onKeyDown:function(e){return t.detectTab(e,o)},onFocus:function(e){return t.onFocus(e,o)}},e)}))}},{key:"getDecoratorWrapperStyles",value:function(){var e=this.props.decoratorTop;return{top:e>-1?"".concat(e+16,"px"):"50%"}}},{key:"getDecoratorStyles",value:function(e){return{display:e?"none":"block",cursor:"pointer"}}},{key:"getTouchEvents",value:function(){var e=this;return{onTouchStart:function(t){e.touchObject={startX:t.touches[0].pageX,startY:t.touches[0].pageY}},onTouchMove:function(t){var r=e.swipeDirection(e.touchObject.startX,t.touches[0].pageX,e.touchObject.startY,t.touches[0].pageY),n=Math.round(Math.sqrt(Math.pow(t.touches[0].pageX-e.touchObject.startX,2)));e.touchObject={startX:e.touchObject.startX,startY:e.touchObject.startY,endX:t.touches[0].pageX,endY:t.touches[0].pageY,distance:n,direction:r},0!==r&&n>44&&t.preventDefault()},onTouchEnd:function(){e.handleSwipe()},onTouchCancel:function(){e.handleSwipe()}}}},{key:"moveToPage",value:function(e){var t,r=this.props.children,n=this.state.pager,o=r.length-1;void 0!==(t=e===o||n.length-1===e?this.slidePosition(o)+this.cardWidthAtIndex(e)-this.frameWidth():this.slidePosition(n[e]))&&this.list&&(this.list.style.transform="translate3d(-".concat(t,"px, 0px, 0px)"),this.list.style.WebkitTransform="translate3d(-".concat(t,"px, 0px, 0px)"),this.setState({currentPage:e}))}},{key:"cardGutter",value:function(e){var t=this.props.cardSize,r=this.state,n=r.cardMapping,o=r.breakpoint;return!n["".concat(t)]["breakpoint".concat(o)]||(("undefined"!==typeof e?e:0)+1)%this.cardsPerRow()===0&&1===this.cardsPerRow?0:n["".concat(t)]["breakpoint".concat(o)].gutter}},{key:"bindEvents",value:function(){var e=this;if(e.debouncedOnResize=e._debounce((function(){return e.onResize()}),100),f){var t=window;this.addEvent(t,"resize",e.debouncedOnResize),this.addEvent(document,"readystatechange",e.onReadyStateChange),this.addEvent(window,"forceCarouselResize",e.forceCarouselResize)}}},{key:"renderDot",value:function(){return n.default.createElement("svg",{viewBox:"0 0 8 8",focusable:"false"},n.default.createElement("circle",{cx:"4",cy:"4",r:"4"}))}},{key:"renderPagerDot",value:function(){var e=this,t=this.state,r=t.pager,o=t.currentPage;return n.default.createElement("div",{className:"carousel-pager"},r.map((function(t,a){return n.default.createElement("button",{type:"button",key:"pager-dot-".concat(r[a]),className:o===a?"carousel-pager-dot active":"carousel-pager-dot",onClick:function(){return e.moveToPage(a)},onKeyDown:function(t){t.stopPropagation(),13===t.keyCode&&e.moveToPage(a)},"aria-label":a,tabIndex:0},e.renderDot())})))}},{key:"render",value:function(){var e=this,t=this.props.showPagerDot,r=this.state,o=r.currentPage,a=r.pager,i=this.formatChildren(this.props.children);return n.default.createElement("div",{className:"carousel",ref:function(t){e.slider=t}},n.default.createElement("div",c({className:"carousel-frame",ref:function(t){e.frame=t}},this.getTouchEvents()),n.default.createElement("ul",{className:"carousel-list",ref:function(t){e.list=t},style:this.getListStyles()},i)),n.default.createElement("div",{className:"carousel-left-decorator",style:this.getDecoratorWrapperStyles()},n.default.createElement("button",{type:"button",className:"carousel-left-button","aria-label":"Previous",style:this.getDecoratorStyles(o<=0),onKeyPress:this.handleDecoratorKeyDown,onClick:this.handleDecorator})),n.default.createElement("div",{className:"carousel-right-decorator",style:this.getDecoratorWrapperStyles(),onKeyDown:this.handleDecoratorKeyDown},n.default.createElement("button",{type:"button",className:"carousel-right-button","aria-label":"Next",style:this.getDecoratorStyles(o>=a.length-1),onKeyPress:this.handleDecoratorKeyDown,onClick:this.handleDecorator})),t&&a.length>1?this.renderPagerDot():"")}},{key:"unbindEvents",value:function(){var e=this;if(f){var t=window;this.removeEvent(t,"resize",e.debouncedOnResize),this.removeEvent(document,"readystatechange",e.onReadyStateChange),this.removeEvent(window,"forceCarouselResize",e.forceCarouselResize)}}},{key:"setInitialDimensions",value:function(){var e=this.props,t=(e.children,e.slideHeight);this.setState({slideHeight:t>0?t:i.DEFAULT_SLIDE_HEIGHT})}},{key:"setDimensions",value:function(){var e=this;if(e.frame&&e.frameWidth()>0){e.updatePager();var t=0,r=e.frame.childNodes[0].childNodes[0];e.props.slideHeight>0?t=e.props.slideHeight:r?(r.style.height="auto",t=r.offsetHeight):t=i.DEFAULT_SLIDE_HEIGHT,this.setState({slideHeight:t,slideWidth:0===e.props.slideWidth?e.cardWidth():e.props.slideWidth,cellSpacing:e.cardGutter()})}}},{key:"getListStyles",value:function(){return{transform:"translate3d(0px, 0px, 0px)",WebkitTransform:"translate3d(0px, 0px, 0px)",transition:"transform .5s",WebkitTransition:"transform .5s",position:"relative",display:"block",padding:0,width:"100%",boxSizing:"border-box"}}},{key:"getSlideStyles",value:function(e){var t=this.props.keepWidth,r=this.state,n=r.cellSpacing,o=r.slideWidth;return t?{position:"relative",display:"inline-block",listStyleType:"none",verticalAlign:"top",boxSizing:"border-box"}:{position:"absolute",left:this.slidePosition(e),top:0,display:"inline-block",listStyleType:"none",verticalAlign:"top",width:o,height:"auto",boxSizing:"border-box",padding:"2px",marginRight:n}}},{key:"slidePosition",value:function(e){if(this.props.keepWidth){for(var t=Array.from(this.list.children).map((function(e){return e.offsetWidth})),r=0,n=0;n<e;n+=1)r+=t[n];return r}var o=this.state,a=o.slideWidth,i=o.cellSpacing;return a&&i?(a+i)*e:0}},{key:"frameWidth",value:function(){return this.frame?this.frame.offsetWidth:0}},{key:"updatePager",value:function(){var e=this;if(this.list){for(var t=this.props,r=t.children,n=t.keepWidth,o=r,a=this.frameWidth(),i=a,s=0,c=[0],u=0;u<o.length;u+=1){var l=s-this.list.offsetLeft,d=n?this.cardWidthAtIndex(u):this.cardWidth()+this.cardGutter(u);s+=d,Math.floor(l+d)>i+d/4&&(c.push(u),i=l+a)}this.setState({pager:c},(function(){var t=e.state.currentPage;1===c.length?(e.list.style.transform="translate3d(0px, 0px, 0px)",e.list.style.WebkitTransform="translate3d(0px, 0px, 0px)",e.setState({currentPage:0})):c.length>=t&&t>c.length/2&&e.moveToPage(e.state.pager.length-1)}))}}},{key:"swipeDirection",value:function(e,t,r,n){var o=e-t,a=r-n,i=Math.atan2(a,o),s=Math.round(180*i/Math.PI);return s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?1:s>=135&&s<=225?-1:0}},{key:"handleSwipe",value:function(){this.touchObject.distance>44&&(1===this.touchObject.direction?this.nextPage():-1===this.touchObject.direction&&this.previousPage()),this.touchObject={}}}])&&u(r.prototype,o),a&&u(r,a),t}(n.Component);t.default=g,p(g,"displayName","Carousel"),p(g,"defaultProps",{actionEvents:function(){},cardType:"GENERIC",cardSize:"M",slideWidth:0,slideHeight:0,keepWidth:!1,decoratorTop:-1,showPagerDot:!1,metadata:{},customCardMapping:{}}),p(g,"propTypes",{actionEvents:a.default.func,cardType:a.default.string,cardSize:a.default.string,customCardMapping:a.default.object,slideWidth:a.default.number,slideHeight:a.default.number,keepWidth:a.default.bool,decoratorTop:a.default.number,showPagerDot:a.default.bool,metadata:a.default.object})},44959:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CARD_MAPPING=t.RIGHT_BUTTON_CLICKED=t.LEFT_BUTTON_CLICKED=t.DEFAULT_SLIDE_HEIGHT=void 0;t.DEFAULT_SLIDE_HEIGHT=100;t.LEFT_BUTTON_CLICKED="LEFT_BUTTON_CLICKED";t.RIGHT_BUTTON_CLICKED="RIGHT_BUTTON_CLICKED";t.CARD_MAPPING={L:{breakpointL:{gutter:16,cardsPerRow:3},breakpointLM:{gutter:16,cardsPerRow:3},breakpointM:{gutter:16,cardsPerRow:3},breakpointMS:{gutter:16,cardsPerRow:2},breakpointS:{gutter:12,cardsPerRow:2},breakpointSS:{gutter:12,cardsPerRow:1},breakpointXS:{gutter:8,cardsPerRow:1}},M:{breakpointL:{gutter:16,cardsPerRow:4},breakpointLM:{gutter:16,cardsPerRow:4},breakpointM:{gutter:16,cardsPerRow:4},breakpointMS:{gutter:16,cardsPerRow:3},breakpointS:{gutter:12,cardsPerRow:3},breakpointSS:{gutter:12,cardsPerRow:2},breakpointXS:{gutter:8,cardsPerRow:1}},S:{breakpointL:{gutter:16,cardsPerRow:4},breakpointLM:{gutter:16,cardsPerRow:4},breakpointM:{gutter:16,cardsPerRow:4},breakpointMS:{gutter:16,cardsPerRow:3},breakpointS:{gutter:12,cardsPerRow:3},breakpointSS:{gutter:12,cardsPerRow:2},breakpointXS:{gutter:8,cardsPerRow:1}}}}}]);