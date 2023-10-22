(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[472],{6472:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Ae}});var t=r(9434),o=r(5705),i=r(6727),a=r(208),u="NOT_FOUND";var c=function(e,n){return e===n};function s(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,o=void 0===t?c:t,i=r.maxSize,a=void 0===i?1:i,s=r.resultEqualityCheck,l=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!e(n[o],r[o]))return!1;return!0}}(o),f=1===a?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:u},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return u}return{get:t,put:function(n,o){t(n)===u&&(r.unshift({key:n,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(a,l);function d(){var n=f.get(arguments);if(n===u){if(n=e.apply(null,arguments),s){var r=f.getEntries(),t=r.find((function(e){return s(e.value,n)}));t&&(n=t.value)}f.put(arguments,n)}return n}return d.clearCache=function(){return f.clear()},d}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}function f(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var o=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=t.pop();if("object"===typeof c&&(u=c,c=t.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,f=s.memoizeOptions,d=void 0===f?r:f,p=Array.isArray(d)?d:[d],m=l(t),x=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],n=m.length,r=0;r<n;r++)e.push(m[r].apply(null,arguments));return i=x.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:x,dependencies:m,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),v};return o}var d,p,m,x,v,h=f(s),y=function(e){return e.contacts.items},g=function(e){return e.contacts.isLoading},b=function(e){return e.contacts.error},j=function(e){return e.filter},Z=h([y,j],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),w=r(168),k=r(6487),_=(0,k.ZP)(o.l0)(d||(d=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 36px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 16px 16px;\n"]))),C=k.ZP.label(p||(p=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 24px;\n"]))),N=(0,k.ZP)(o.gN)(m||(m=(0,w.Z)(["\n  max-width: 200px;\n  padding: 4px 8px;\n  font-size: 20px;\n  border-radius: 4px;\n\n  &:focus {\n    outline: none;\n    border: 1px solid #34a2cd;\n    box-shadow: 0px 0px 4px 4px #34a2cd;\n  }\n"]))),S=(0,k.ZP)(o.Bc)(x||(x=(0,w.Z)(["\n  color: #da7b6a;\n  font-size: 18px;\n"]))),z=k.ZP.button(v||(v=(0,w.Z)(["\n  max-width: 130px;\n  padding: 4px 8px;\n  border: 1px solid #536be4;\n  border-radius: 4px;\n  font-size: 18px;\n  background-color: #536be4;\n"]))),O=r(5218),A=r(3329),E=i.Ry().shape({name:i.Z_().min(2,"Too Short!").max(70,"Too Long!").trim("Enter your name, please").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name is not valid").required("Required"),number:i.Z_().matches("\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}","Phone number is not valid").required("Required")}),P=function(){var e=(0,t.I0)(),n=(0,t.v9)(y);return(0,A.jsx)(o.J9,{initialValues:{name:"",number:""},validationSchema:E,onSubmit:function(r,t){var o,i;(o=n,i=r.name,o.find((function(e){return e.name.toLowerCase()===i.toLowerCase()})))?O.ZP.error("".concat(r.name," is already in contacts.")):(e((0,a.uK)(r)),t.resetForm())},children:(0,A.jsxs)(_,{children:[(0,A.jsxs)(C,{children:["Name",(0,A.jsx)(N,{name:"name",type:"text"}),(0,A.jsx)(S,{name:"name",component:"div"})]}),(0,A.jsxs)(C,{children:["Number",(0,A.jsx)(N,{name:"number",type:"tel"}),(0,A.jsx)(S,{name:"number",component:"div"})]}),(0,A.jsx)(z,{type:"submit",children:"Add contact"})]})})},W=r(1413),L=r(4925),I=r(5597),M=r(2019),T=r(2791);var B=r(1309);function F(){var e=(0,B.If)(),n=function(){var e=(0,T.useContext)(M.T);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}();return(0,W.Z)((0,W.Z)({},e),{},{theme:n})}var R=r(2996),q=r(8581),D=r(6198),G=r(9138),V=["styleConfig"];function K(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.styleConfig,o=(0,L.Z)(r,V),i=F(),a=i.theme,u=i.colorMode,c=e?(0,q.Wf)(a,"components.".concat(e)):void 0,s=t||c,l=D({theme:a,colorMode:u},null!=(n=null==s?void 0:s.defaultProps)?n:{},(0,q.YU)((0,q.CE)(o,["children"]))),f=(0,T.useRef)({});if(s){var d=(0,R.Ud)(s),p=d(l),m=G(f.current,p);m||(f.current=p)}return f.current}function U(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return K(e,n)}var $=r(3462),H=r(6992),J=["className"],Y=(0,I.G)((function(e,n){var r=U("Heading",e),t=(0,R.Lr)(e),o=(t.className,(0,L.Z)(t,J));return(0,A.jsx)($.m.h2,(0,W.Z)((0,W.Z)({ref:n,className:(0,H.cx)("chakra-heading",e.className)},o),{},{__css:r}))}));Y.displayName="Heading";var Q,X,ee=["className","align","decoration","casing"],ne=(0,I.G)((function(e,n){var r=U("Text",e),t=(0,R.Lr)(e),o=(t.className,t.align,t.decoration,t.casing,(0,L.Z)(t,ee)),i=function(e){var n=Object.assign({},e);for(var r in n)void 0===n[r]&&delete n[r];return n}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,A.jsx)($.m.p,(0,W.Z)((0,W.Z)((0,W.Z)({ref:n,className:(0,H.cx)("chakra-text",e.className)},i),o),{},{__css:r}))}));ne.displayName="Text";var re=k.ZP.div(Q||(Q=(0,w.Z)(["\n  border-radius: 4px;\n  padding: 4px 4px;\n  border: 2px solid #e7e9fc;\n  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.8), 0px 1px 6px rgba(46, 47, 66, 0.08);\n"]))),te=k.ZP.button(X||(X=(0,w.Z)(["\n  margin-top: 8px;\n  padding: 4px 4px;\n  border: 1px solid #000000;\n  border-radius: 4px;\n  background-color: #ffffff;\n  font-size: 12px;\n\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    background-color: #536be4;\n  }\n"]))),oe=function(e){var n=e.contact,r=n.id,o=n.name,i=n.number,u=(0,t.I0)();return(0,A.jsxs)(re,{children:[(0,A.jsx)(Y,{size:"xs",textTransform:"uppercase",children:o}),(0,A.jsx)(ne,{pt:"8",fontSize:"sm",children:i}),(0,A.jsx)(te,{type:"button",onClick:function(){return u((0,a.GK)(r))},children:"Delete"})]})},ie=r(9439);function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.strict,r=void 0===n||n,t=e.errorMessage,o=void 0===t?"useContext: `context` is undefined. Seems you forgot to wrap component within the Provider":t,i=e.name,a=(0,T.createContext)(void 0);function u(){var e,n=(0,T.useContext)(a);if(!n&&r){var t=new Error(o);throw t.name="ContextError",null==(e=Error.captureStackTrace)||e.call(Error,t,u),t}return n}return a.displayName=i,[a.Provider,u,a]}var ue=ae({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "}),ce=(0,ie.Z)(ue,2);ce[0],ce[1];var se,le=ae({name:"".concat(se="Card","StylesContext"),errorMessage:'useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<'.concat(se,' />" ')}),fe=(0,ie.Z)(le,2),de=fe[0],pe=fe[1],me=["className","children","direction","justify","align"],xe=(0,I.G)((function(e,n){var r=(0,R.Lr)(e),t=r.className,o=r.children,i=r.direction,a=void 0===i?"column":i,u=r.justify,c=r.align,s=(0,L.Z)(r,me),l=function(e){return K(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}("Card",e);return(0,A.jsx)($.m.div,(0,W.Z)((0,W.Z)({ref:n,className:(0,H.cx)("chakra-card",t),__css:(0,W.Z)({display:"flex",flexDirection:a,justifyContent:u,alignItems:c,position:"relative",minWidth:0,wordWrap:"break-word"},l.container)},s),{},{children:(0,A.jsx)(de,{value:l,children:o})}))})),ve=["className"],he=(0,I.G)((function(e,n){var r=e.className,t=(0,L.Z)(e,ve),o=pe();return(0,A.jsx)($.m.div,(0,W.Z)({ref:n,className:(0,H.cx)("chakra-card__body",r),__css:o.body},t))})),ye=function(e){return(0,A.jsx)($.m.div,(0,W.Z)((0,W.Z)({className:"chakra-stack__item"},e),{},{__css:(0,W.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};ye.displayName="StackItem";Object.freeze(["base","sm","md","lg","xl","2xl"]);var ge=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],be=(0,I.G)((function(e,n){var r=e.isInline,t=e.direction,o=e.align,i=e.justify,a=e.spacing,u=void 0===a?"0.5rem":a,c=e.wrap,s=e.children,l=e.divider,f=e.className,d=e.shouldWrapChildren,p=(0,L.Z)(e,ge),m=r?"row":null!=t?t:"column",x=(0,T.useMemo)((function(){return function(e){var n,r,t=e.spacing,o=e.direction,i={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(n=o,r=function(e){return i[e]},Array.isArray(n)?n.map((function(e){return null===e?null:r(e)})):(0,H.Kn)(n)?Object.keys(n).reduce((function(e,t){return e[t]=r(n[t]),e}),{}):null!=n?r(n):null)}}({spacing:u,direction:m})}),[u,m]),v=!!l,h=!d&&!v,y=(0,T.useMemo)((function(){var e=function(e){return T.Children.toArray(e).filter((function(e){return(0,T.isValidElement)(e)}))}(s);return h?e:e.map((function(n,r){var t="undefined"!==typeof n.key?n.key:r,o=r+1===e.length,i=d?(0,A.jsx)(ye,{children:n},t):n;if(!v)return i;var a=(0,T.cloneElement)(l,{__css:x}),u=o?null:a;return(0,A.jsxs)(T.Fragment,{children:[i,u]},t)}))}),[l,x,v,h,d,s]),g=(0,H.cx)("chakra-stack",f);return(0,A.jsx)($.m.div,(0,W.Z)((0,W.Z)({ref:n,display:"flex",alignItems:o,justifyContent:i,flexDirection:m,flexWrap:c,gap:v?void 0:u,className:g},p),{},{children:y}))}));be.displayName="Stack";var je=function(e){return(0,A.jsx)($.m.div,(0,W.Z)((0,W.Z)({className:"chakra-stack__divider"},e),{},{__css:(0,W.Z)((0,W.Z)({},e.__css),{},{borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"})}))};je.displayName="StackDivider";var Ze,we,ke=r(824),_e=function(){var e=(0,t.v9)(Z);return(0,A.jsx)(xe,{children:(0,A.jsx)(he,{children:(0,A.jsx)(be,{divider:(0,A.jsx)(je,{}),spacing:"10",children:null===e||void 0===e?void 0:e.map((function(e){return(0,A.jsx)(ke.xu,{children:(0,A.jsx)(oe,{contact:e})},e.id)}))})})})},Ce=r(6895),Ne=k.ZP.label(Ze||(Ze=(0,w.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 24px;\n"]))),Se=k.ZP.input(we||(we=(0,w.Z)(["\n  max-width: 300px;\n  padding: 4px 8px;\n  font-size: 20px;\n  border-radius: 4px;\n\n  &:focus {\n    outline: none;\n    border: 1px solid #34a2cd;\n    box-shadow: 0px 0px 4px 4px #34a2cd;\n  }\n"]))),ze=function(){var e=(0,t.I0)(),n=(0,t.v9)(j);return(0,A.jsxs)(Ne,{children:["Find contacts by name",(0,A.jsx)(Se,{type:"text",value:n,onChange:function(n){e((0,Ce.M)(n.target.value))}})]})},Oe=r(3382),Ae=function(){var e=(0,t.I0)(),n=(0,t.v9)(y),r=(0,t.v9)(g),o=(0,t.v9)(b);return(0,T.useEffect)((function(){e((0,a.yF)())}),[e]),(0,A.jsxs)("div",{children:[!o&&(0,A.jsx)(P,{}),r?(0,A.jsx)(Oe.a,{}):n.length>0&&!o&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("h2",{children:"Contacts"}),(0,A.jsx)(ze,{}),(0,A.jsx)(_e,{})]}),o&&!r&&(0,A.jsx)("p",{children:"Oops! Something went wrong!"})]})}},9138:function(e){var n="undefined"!==typeof Element,r="function"===typeof Map,t="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!==c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(t&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!==c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!==c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(n&&e instanceof Element)return!1;for(c=u;0!==c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,n){try{return i(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}}}]);
//# sourceMappingURL=472.ef97c8e3.chunk.js.map