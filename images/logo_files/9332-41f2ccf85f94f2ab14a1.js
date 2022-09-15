(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9332],{18533:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},i=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},u=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,o,r=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(a=r.next()).done;)l.push(a.value)}catch(i){o={error:i}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return l},c=this&&this.__spreadArray||function(e,t){for(var n=0,a=t.length,o=e.length;n<a;n++,o++)e[o]=t[n];return e},d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Dropdown=t.VALIDATION_STATE=void 0;var s=d(n(6205)),p=d(n(6013)),f=d(n(43261)),_=d(n(94184)),v=n(8831),y=d(n(26430)),m=l(n(67294));n(98770);var h=d({inputField:"Dropdown__inputField___deBbX",focusSelect:"Dropdown__focusSelect___3k6yn",tooltip:"Dropdown__tooltip___1TEaS",error:"Dropdown__error___3Tumw",inError:"Dropdown__inError___ZEeQY",isDisabled:"Dropdown__isDisabled____HLmK",spectrumDropdownIcon:"Dropdown__spectrumDropdownIcon___1daB1",hasValue:"Dropdown__hasValue___2oJFL",isOpen:"Dropdown__isOpen___2krmz",icon:"Dropdown__icon___1WhyT",spectrumAlertIcon:"Dropdown__spectrumAlertIcon___32RIA",spectrumCheckmarkIcon:"Dropdown__spectrumCheckmarkIcon___2JoTL",info:"Dropdown__info___3esFh",list:"Dropdown__list___34-sU",listOpen:"Dropdown__listOpen___1ET63",option:"Dropdown__option___2B_zP",focused:"Dropdown__focused___9q3SO",nativeSelect:"Dropdown__nativeSelect___3PB-0"}),w={error:!1,focusedIndex:-1,inputValue:"",listOpen:!1,matcher:"",selectedOption:null};t.VALIDATION_STATE={VALID:"valid",INVALID:"invalid"};t.Dropdown=function(e){var n,o,r=e["aria-label"],l=e.className,d=e["data-testid"],D=e.disabled,O=void 0!==D&&D,b=e.id,A=e.invalid,T=void 0===A||A,x=e.labelId,I=e.labelText,N=e.menuClassName,S=e.name,g=e.onBlur,C=e.onChange,k=e.onClose,L=e.onOpen,M=e.onFocus,P=e.options,j=void 0===P?[]:P,V=e.placeholder,z=void 0===V?" ":V,F=e.required,B=void 0!==F&&F,H=e.tooltip,R=e.tooltipClassName,q=void 0===R?"":R,U=e.useNativeSelect,J=e.validationError,K=e.validationState,W=e.value,Q=void 0===W?"":W,X=e.width,Y=void 0===X?200:X,Z=i(e,["aria-label","className","data-testid","disabled","id","invalid","labelId","labelText","menuClassName","name","onBlur","onChange","onClose","onOpen","onFocus","options","placeholder","required","tooltip","tooltipClassName","useNativeSelect","validationError","validationState","value","width"]),G=e["aria-labelledby"],$=m.useMemo((function(){var e=j.findIndex((function(e){return e.value===Q||e.selected})),t=j[e];if(t)return{index:e,option:t}}),[j,Q]),ee=u(m.useReducer(v.DropdownReducer,a(a({},w),{inputValue:$?$.option.value:"",focusedIndex:$?$.index:-1,selectedOption:$?$.option:{text:"",value:""}})),2),te=ee[0],ne=ee[1],ae=te.error,oe=te.focusedIndex,re=te.inputValue,le=te.listOpen,ie=te.matcher,ue=te.selectedOption;m.useEffect((function(){if($){var e=$.option,t=$.index;ne({type:v.DropdownActionTypes.SELECT,payload:{option:e,index:t}}),ye()}}),[$]);var ce=m.useRef(!0),de=j;!B&&j.length&&(de=c([{text:"",value:""}],u(j)));var se=de.reduce((function(e,t,n){return e[n]=m.default.createRef(),e}),{}),pe=m.useRef(),fe=m.useRef(),_e=function(e){if(void 0===e&&(e=oe),e>-1){var t=fe.current.offsetHeight;se[e].current.parentNode.scrollTop=se[e].current.offsetTop-(t/2-32)}},ve=K===t.VALIDATION_STATE.INVALID&&!!J,ye=m.useCallback((function(){ne({type:v.DropdownActionTypes.VALIDATE,payload:{required:B,invalid:T,customError:ve,firstMount:ce}})}),[T,B,ve,ce]);m.useEffect((function(){le||ye()}),[le,ye]);var me=function(){ne({type:v.DropdownActionTypes.OPEN,payload:!1}),"function"===typeof k&&k()},he=function(e,t){e&&(ne({type:v.DropdownActionTypes.SELECT,payload:{option:e,index:t}}),"function"===typeof C&&C(e)),me()},we=function(e){var t=oe,n=-1,a=de.length-1;switch(e){case"up":n=0===t?a:t-1;break;case"down":t<a&&(n=t+1),t===a&&(n=0)}ne({type:v.DropdownActionTypes.FOCUS,payload:n}),_e(n)},Ee=function(e){switch(e.key){case"Tab":le&&me();break;case"Enter":case" ":if(le){var t=de.find((function(e,t){return t===oe}));he(t,oe)}else ne({type:v.DropdownActionTypes.OPEN,payload:!0}),_e();break;case"ArrowUp":case"Up":e.preventDefault(),we("up");break;case"ArrowDown":case"Down":e.preventDefault(),le?we("down"):(ne({type:v.DropdownActionTypes.OPEN,payload:!0}),_e());break;default:le?function(e){var t=ie;t="Backspace"===e||"Delete"===e?t.slice(0,-1):t.concat(e),ne({type:v.DropdownActionTypes.MATCH,payload:t});var n=de.findIndex((function(e){return e.text.toLowerCase().startsWith(t.toLowerCase())}));n>-1?(ne({type:v.DropdownActionTypes.FOCUS,payload:n}),_e(n)):ne({type:v.DropdownActionTypes.MATCH,payload:""})}(e.key):ne({type:v.DropdownActionTypes.OPEN,payload:!0})}},De=b+"-value";G?G+=" "+De:G=r?b+" "+De:x?x+" "+De:De;var Oe=b+"-tooltip";return m.default.createElement("div",a({className:_.default(l,h.default.inputField,(n={},n[h.default.isDisabled]=O,n[h.default.inError]=ae,n[h.default.isOpen]=le,n[h.default.hasValue]=!!re,n)),"aria-required":B,"aria-multiselectable":!1,"aria-disabled":O,style:l?{}:{width:Y+"px"},onKeyDown:function(e){return Ee(e)}},Z),m.default.createElement("div",null,m.default.createElement("input",{type:"text","aria-haspopup":"listbox",disabled:O,"aria-label":r,"aria-labelledby":G,"aria-describedby":ae?Oe:"","aria-invalid":ae,"data-testid":d,id:b,name:S,placeholder:z,required:B,value:ue.text,onClick:function(){le?me():(ne({type:v.DropdownActionTypes.OPEN,payload:!0}),_e(),"function"===typeof L&&L())},onFocus:M,onBlur:function(e){me(),"function"===typeof g&&g(e)},formNoValidate:!0,readOnly:!0,ref:pe}),m.default.createElement("label",{htmlFor:b,id:x},I),function(){if(!T&&!H)return null;var e=function(e){return m.default.createElement("span",{className:h.default.icon},e)};return ae?e(m.default.createElement(s.default,{size:"S",className:h.default.spectrumAlertIcon})):K===t.VALIDATION_STATE.VALID?e(m.default.createElement(p.default,{size:"S",className:h.default.spectrumCheckmarkIcon})):H?e(m.default.createElement(y.default,{size:"S",className:h.default.spectrumInfoOutlineIcon})):null}(),function(){if(!T&&!H)return null;if(ae){var e=void 0;return ve?e=J:B&&!re&&(e="Required Field"),m.default.createElement(E,{text:e,variant:"error",id:Oe,className:q})}return H?m.default.createElement(E,{text:H,variant:"info",id:Oe,className:q}):null}(),m.default.createElement(f.default,{size:null,className:h.default.spectrumDropdownIcon})),!U&&m.default.createElement("ul",{role:"list",className:_.default(h.default.list,N,(o={},o[h.default.listOpen]=le,o)),ref:fe},function(){if(j.length)return de.map((function(e,t){var n;return m.default.createElement("li",{className:_.default(h.default.option,(n={},n[h.default.focused]=oe===t,n)),key:e.value,onMouseDown:function(){return he(e,t)},ref:se[t]},e.text||m.default.createElement("span",null,"\xa0"))}))}()),U&&m.default.createElement("select",{className:h.default.nativeSelect,disabled:O,onChange:function(e){var t=e.target,n=t.selectedIndex,a=t.value,o={value:a,text:t.options[n].text};a&&he(o,n)},onFocus:function(e){pe.current.classList.add(h.default.focusSelect),"function"===typeof M&&M(e)},onBlur:function(e){pe.current.classList.remove(h.default.focusSelect),ye(),"function"===typeof g&&g(e)}},function(){if(j.length)return de.map((function(e){return m.default.createElement("option",{key:e.value,value:e.value},e.text)}))}()))};var E=function(e){var t=e.text,n=e.variant,a=void 0===n?"":n,o=e.id,r=e.className;return m.default.createElement("div",{id:o,role:"tooltip",className:_.default(h.default.tooltip,h.default[a],r)},t)}},89332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Dropdown=void 0;var a=n(18533);Object.defineProperty(t,"Dropdown",{enumerable:!0,get:function(){return a.Dropdown}})},8831:function(e,t){"use strict";var n,a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownReducer=t.DropdownActionTypes=void 0,function(e){e.OPEN="open",e.FOCUS="focus",e.SELECT="select",e.VALIDATE="validate",e.MATCH="match"}(n=t.DropdownActionTypes||(t.DropdownActionTypes={}));t.DropdownReducer=function(e,t){var o,r=t.payload,l=r.required,i=r.invalid,u=r.customError,c=r.firstMount;switch(t.type){case n.OPEN:return a(a({},e),{listOpen:t.payload});case n.FOCUS:return a(a({},e),{focusedIndex:t.payload});case n.SELECT:return a(a({},e),{inputValue:t.payload.option.value,focusedIndex:t.payload.index,selectedOption:t.payload.option});case n.VALIDATE:return i?((u||!c.current&&l&&!e.inputValue)&&(o=!0),c.current&&(c.current=!1)):o=!1,a(a({},e),{error:o});case n.MATCH:return a(a({},e),{matcher:t.payload})}}},56122:function(e,t,n){"use strict";var a=n(67294);e.exports=a.createElement("svg",{viewBox:"0 0 36 36"},a.createElement("path",{d:"M31.312 7.725l-1.455-1.133a1 1 0 0 0-1.4.175L14.822 24.283l-6.647-6.612a1 1 0 0 0-1.414 0L5.436 19a1 1 0 0 0 0 1.415l8.926 8.9a1 1 0 0 0 1.5-.093L31.487 9.128a1 1 0 0 0-.175-1.403z"}))},51673:function(e,t,n){"use strict";var a=n(67294);e.exports=a.createElement("svg",{viewBox:"0 0 48 48"},a.createElement("path",{d:"M41.3 9.834L38.33 7.52a1 1 0 0 0-1.4.175l-17.697 22.73-8.613-8.614a1 1 0 0 0-1.414 0l-2.695 2.695a1 1 0 0 0 0 1.414l12.432 12.447a1 1 0 0 0 1.5-.093l21.034-27.037a1 1 0 0 0-.177-1.403z"}))},6013:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=l(n(45592)),r=l(n(67294));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return r.default.createElement(o.default,a({},e,{icon:{18:n(56122),24:n(51673)}}))};i.displayName="Checkmark",t.default=i},617:function(e,t,n){"use strict";var a=n(67294);e.exports=a.createElement("svg",{viewBox:"0 0 36 36"},a.createElement("circle",{cx:"18",cy:"12",r:"2.15"}),a.createElement("path",{d:"M20.333 24H20v-7.6a.4.4 0 0 0-.4-.4h-3.933s-1.167.032-1.167 1 1.167 1 1.167 1H16v6h-.333s-1.167.032-1.167 1 1.167 1 1.167 1h4.667s1.167-.033 1.167-1-1.168-1-1.168-1z"}),a.createElement("path",{d:"M18 2.1A15.9 15.9 0 1 0 33.9 18 15.9 15.9 0 0 0 18 2.1zm0 29.812A13.912 13.912 0 1 1 31.913 18 13.912 13.912 0 0 1 18 31.913z"}))},51597:function(e,t,n){"use strict";var a=n(67294);e.exports=a.createElement("svg",{viewBox:"0 0 48 48"},a.createElement("path",{d:"M24 7.9A16.1 16.1 0 1 1 7.9 24 16.118 16.118 0 0 1 24 7.9zm0-3.8A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1z"}),a.createElement("path",{d:"M21.56 14.747a2.24 2.24 0 0 1 4.48 0 2.084 2.084 0 0 1-2.24 2.24 2.116 2.116 0 0 1-2.24-2.24zM27.5 32H26V21a1 1 0 0 0-1-1h-4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H22v10h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"}))},26430:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=l(n(45592)),r=l(n(67294));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return r.default.createElement(o.default,a({},e,{icon:{18:n(617),24:n(51597)}}))};i.displayName="InfoOutline",t.default=i}}]);