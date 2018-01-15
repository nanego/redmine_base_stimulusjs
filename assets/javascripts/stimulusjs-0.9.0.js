/*
Stimulus 0.9.0
Copyright © 2017 Basecamp, LLC
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Stimulus=e():t.Stimulus=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function r(t){throw new Error(t)}function o(t){return"window"==t?window:"document"==t?document:void 0}function i(t){return t==window?"window":t==document?"document":void 0}function s(t){return Object.assign({},g,t)}function c(t,e,n){a(t,e).add(n)}function u(t,e,n){a(t,e).delete(n),l(t,e)}function a(t,e){var n=t.get(e);return n||(n=new Set,t.set(e,n)),n}function l(t,e){var n=t.get(e);null!=n&&0==n.size&&t.delete(e)}function p(t){return t.toString().replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()})}function h(t,e){return"["+t+'~="'+e+'"]'}function f(t){return!!t&&("undefined"!=typeof EventTarget?t instanceof EventTarget:"function"==typeof t.addEventListener)}Object.defineProperty(e,"__esModule",{value:!0});var d=function(){function t(t,e,n){this.context=t,this.descriptor=e,this.eventTarget=n}return t.prototype.connect=function(){this.eventTarget.addEventListener(this.eventName,this,!1)},t.prototype.disconnect=function(){this.eventTarget.removeEventListener(this.eventName,this,!1)},t.prototype.hasSameDescriptorAs=function(t){return null!=t&&t.descriptor.isEqualTo(this.descriptor)},t.prototype.handleEvent=function(t){this.willBeInvokedByEvent(t)&&this.invokeWithEvent(t)},t.prototype.invokeWithEvent=function(t){try{this.method.call(this.controller,t,t.currentTarget)}catch(e){this.context.reportError(e,'invoking action "'+this.descriptor+'"',t,this)}},Object.defineProperty(t.prototype,"eventName",{get:function(){return this.descriptor.eventName},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"method",{get:function(){var t=this.controller[this.methodName];if("function"==typeof t)return t;throw new Error('Action "'+this.descriptor+'" references undefined method "'+this.methodName+'"')},enumerable:!0,configurable:!0}),t.prototype.willBeInvokedByEvent=function(t){var e=t.target;return this.element===e||(!(e instanceof Element&&this.element.contains(e))||this.scope.containsElement(e))},Object.defineProperty(t.prototype,"controller",{get:function(){return this.context.controller},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"methodName",{get:function(){return this.descriptor.methodName},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this.scope.element},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scope",{get:function(){return this.context.scope},enumerable:!0,configurable:!0}),t}(),m=/^((.+?)(@(window|document))?->)?(.+?)#(.+)$/,y=function(){function t(t,e,n,r){this.identifier=t,this.eventName=e,this.methodName=n,this.eventTarget=r}return t.forOptions=function(e){return new t(e.identifier||r("Missing identifier in action descriptor"),e.eventName||r("Missing event name in action descriptor"),e.methodName||r("Missing method name in action descriptor"),e.eventTarget||r("Missing event target in action descriptor"))},t.forElementWithInlineDescriptorString=function(e,n){try{var r=this.parseOptionsFromInlineActionDescriptorString(n);return r.eventName=r.eventName||this.getDefaultEventNameForElement(e),r.eventTarget=r.eventTarget||e,t.forOptions(r)}catch(t){throw new Error('Bad action descriptor "'+n+'": '+t.message)}},t.parseOptionsFromInlineActionDescriptorString=function(t){var e=t.trim(),n=e.match(m)||r("Invalid action descriptor syntax");return{identifier:n[5],eventName:n[2],methodName:n[6],eventTarget:o(n[4])}},t.getDefaultEventNameForElement=function(t){return this.defaultEventNames[t.tagName.toLowerCase()](t)},Object.defineProperty(t.prototype,"eventTargetName",{get:function(){return i(this.eventTarget)},enumerable:!0,configurable:!0}),t.prototype.isEqualTo=function(t){return null!=t&&t.identifier==this.identifier&&t.eventName==this.eventName&&t.methodName==this.methodName&&t.eventTarget==this.eventTarget},t.prototype.toString=function(){var t=this.eventTargetName?"@"+this.eventTargetName:"";return""+this.eventName+t+"->"+this.identifier+"#"+this.methodName},t.defaultEventNames={a:function(t){return"click"},button:function(t){return"click"},form:function(t){return"submit"},input:function(t){return"submit"==t.getAttribute("type")?"click":"change"},select:function(t){return"change"},textarea:function(t){return"change"}},t}(),g={rootElement:document.documentElement,controllerAttribute:"data-controller",actionAttribute:"data-action",targetAttribute:"data-target"},b=function(){function t(t){this.context=t,this.started=!1,this.actions=new Set}return t.prototype.start=function(){this.started||(this.started=!0,this.connectActions())},t.prototype.stop=function(){this.started&&(this.disconnectActions(),this.started=!1)},t.prototype.add=function(t){this.actions.has(t)||(t.connect(),this.actions.add(t))},t.prototype.delete=function(t){this.actions.has(t)&&(this.actions.delete(t),t.disconnect())},t.prototype.connectActions=function(){this.actions.forEach(function(t){return t.connect()})},t.prototype.disconnectActions=function(){this.actions.forEach(function(t){return t.disconnect()})},t}(),v=function(){function t(){this.valuesByKey=new Map}return Object.defineProperty(t.prototype,"values",{get:function(){return Array.from(this.valuesByKey.values()).reduce(function(t,e){return t.concat(Array.from(e))},[])},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return Array.from(this.valuesByKey.values()).reduce(function(t,e){return t+e.size},0)},enumerable:!0,configurable:!0}),t.prototype.add=function(t,e){c(this.valuesByKey,t,e)},t.prototype.delete=function(t,e){u(this.valuesByKey,t,e)},t.prototype.has=function(t,e){var n=this.valuesByKey.get(t);return null!=n&&n.has(e)},t.prototype.hasKey=function(t){return this.valuesByKey.has(t)},t.prototype.hasValue=function(t){return Array.from(this.valuesByKey.values()).some(function(e){return e.has(t)})},t.prototype.getValuesForKey=function(t){var e=this.valuesByKey.get(t);return e?Array.from(e):[]},t.prototype.getKeysForValue=function(t){return Array.from(this.valuesByKey).filter(function(e){e[0];return e[1].has(t)}).map(function(t){var e=t[0];t[1];return e})},t}(),E=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),A=function(t){function e(){var e=t.call(this)||this;return e.keysByValue=new Map,e}return E(e,t),Object.defineProperty(e.prototype,"values",{get:function(){return Array.from(this.keysByValue.keys())},enumerable:!0,configurable:!0}),e.prototype.add=function(e,n){t.prototype.add.call(this,e,n),c(this.keysByValue,n,e)},e.prototype.delete=function(e,n){t.prototype.delete.call(this,e,n),u(this.keysByValue,n,e)},e.prototype.hasValue=function(t){return this.keysByValue.has(t)},e.prototype.getKeysForValue=function(t){var e=this.keysByValue.get(t);return e?Array.from(e):[]},e}(v),O=function(){function t(t,e){var n=this;this.element=t,this.started=!1,this.delegate=e,this.elements=new Set,this.mutationObserver=new MutationObserver(function(t){return n.processMutations(t)})}return t.prototype.start=function(){this.started||(this.mutationObserver.observe(this.element,{attributes:!0,childList:!0,subtree:!0}),this.started=!0,this.refresh())},t.prototype.stop=function(){this.started&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.started=!1)},t.prototype.refresh=function(){if(this.started){for(var t=new Set(this.matchElementsInTree()),e=0,n=Array.from(this.elements);e<n.length;e++){var r=n[e];t.has(r)||this.removeElement(r)}for(var o=0,i=Array.from(t);o<i.length;o++){var r=i[o];this.addElement(r)}}},t.prototype.processMutations=function(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];this.processMutation(r)}},t.prototype.processMutation=function(t){"attributes"==t.type?this.processAttributeChange(t.target,t.attributeName):"childList"==t.type&&(this.processRemovedNodes(t.removedNodes),this.processAddedNodes(t.addedNodes))},t.prototype.processAttributeChange=function(t,e){var n=t;this.elements.has(n)?this.delegate.elementAttributeChanged&&this.matchElement(n)?this.delegate.elementAttributeChanged(n,e):this.removeElement(n):this.matchElement(n)&&this.addElement(n)},t.prototype.processRemovedNodes=function(t){for(var e=0,n=Array.from(t);e<n.length;e++){var r=n[e];this.processNode(r,this.removeElement)}},t.prototype.processAddedNodes=function(t){for(var e=0,n=Array.from(t);e<n.length;e++){var r=n[e];this.processNode(r,this.addElement)}},t.prototype.matchElement=function(t){return this.delegate.matchElement(t)},t.prototype.matchElementsInTree=function(t){return void 0===t&&(t=this.element),this.delegate.matchElementsInTree(t)},t.prototype.processNode=function(t,e){var n=this.elementFromNode(t);if(n)for(var r=0,o=this.matchElementsInTree(n);r<o.length;r++){var i=o[r];e.call(this,i)}},t.prototype.elementFromNode=function(t){if(t.nodeType==Node.ELEMENT_NODE)return t},t.prototype.addElement=function(t){this.elements.has(t)||(this.elements.add(t),this.delegate.elementMatched&&this.delegate.elementMatched(t))},t.prototype.removeElement=function(t){this.elements.has(t)&&(this.elements.delete(t),this.delegate.elementUnmatched&&this.delegate.elementUnmatched(t))},t}(),x=(function(){function t(t,e,n){this.attributeName=e,this.delegate=n,this.elementObserver=new O(t,this)}Object.defineProperty(t.prototype,"element",{get:function(){return this.elementObserver.element},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selector",{get:function(){return"["+this.attributeName+"]"},enumerable:!0,configurable:!0}),t.prototype.start=function(){this.elementObserver.start()},t.prototype.stop=function(){this.elementObserver.stop()},t.prototype.matchElement=function(t){return t.hasAttribute(this.attributeName)},t.prototype.matchElementsInTree=function(t){var e=this.matchElement(t)?[t]:[],n=Array.from(t.querySelectorAll(this.selector));return e.concat(n)},t.prototype.elementMatched=function(t){this.delegate.elementMatchedAttribute&&this.delegate.elementMatchedAttribute(t,this.attributeName)},t.prototype.elementUnmatched=function(t){this.delegate.elementUnmatchedAttribute&&this.delegate.elementUnmatchedAttribute(t,this.attributeName)},t.prototype.elementAttributeChanged=function(t,e){this.delegate.elementAttributeValueChanged&&this.attributeName==e&&this.delegate.elementAttributeValueChanged(t,e)}}(),function(){function t(t,e,n){this.attributeName=e,this.delegate=n,this.elementObserver=new O(t,this),this.tokensByElement=new A}return Object.defineProperty(t.prototype,"started",{get:function(){return this.elementObserver.started},enumerable:!0,configurable:!0}),t.prototype.start=function(){this.elementObserver.start()},t.prototype.stop=function(){this.elementObserver.stop()},t.prototype.refresh=function(){this.elementObserver.refresh()},Object.defineProperty(t.prototype,"element",{get:function(){return this.elementObserver.element},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selector",{get:function(){return"["+this.attributeName+"]"},enumerable:!0,configurable:!0}),t.prototype.getElementsMatchingToken=function(t){return this.tokensByElement.getKeysForValue(t)},t.prototype.matchElement=function(t){return t.hasAttribute(this.attributeName)},t.prototype.matchElementsInTree=function(t){var e=this.matchElement(t)?[t]:[],n=Array.from(t.querySelectorAll(this.selector));return e.concat(n)},t.prototype.elementMatched=function(t){for(var e=Array.from(this.readTokenSetForElement(t)),n=0,r=e;n<r.length;n++){var o=r[n];this.elementMatchedToken(t,o)}},t.prototype.elementUnmatched=function(t){for(var e=this.getTokensForElement(t),n=0,r=e;n<r.length;n++){var o=r[n];this.elementUnmatchedToken(t,o)}},t.prototype.elementAttributeChanged=function(t){for(var e=this.readTokenSetForElement(t),n=0,r=Array.from(e);n<r.length;n++){var o=r[n];this.elementMatchedToken(t,o)}for(var i=0,s=this.getTokensForElement(t);i<s.length;i++){var o=s[i];e.has(o)||this.elementUnmatchedToken(t,o)}},t.prototype.elementMatchedToken=function(t,e){this.tokensByElement.has(t,e)||(this.tokensByElement.add(t,e),this.delegate.elementMatchedTokenForAttribute&&this.delegate.elementMatchedTokenForAttribute(t,e,this.attributeName))},t.prototype.elementUnmatchedToken=function(t,e){this.tokensByElement.has(t,e)&&(this.tokensByElement.delete(t,e),this.delegate.elementUnmatchedTokenForAttribute&&this.delegate.elementUnmatchedTokenForAttribute(t,e,this.attributeName))},t.prototype.getTokensForElement=function(t){return this.tokensByElement.getValuesForKey(t)},t.prototype.readTokenSetForElement=function(t){for(var e=new Set,n=t.getAttribute(this.attributeName)||"",r=0,o=n.split(/\s+/);r<o.length;r++){var i=o[r];i.length&&e.add(i)}return e},t}()),N=function(){function t(t,e){this.context=t,this.delegate=e,this.tokenListObserver=new x(this.element,this.attributeName,this),this.connectedActions=new v}return Object.defineProperty(t.prototype,"scope",{get:function(){return this.context.scope},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"configuration",{get:function(){return this.scope.configuration},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"attributeName",{get:function(){return this.configuration.actionAttribute},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this.scope.element},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"identifier",{get:function(){return this.scope.identifier},enumerable:!0,configurable:!0}),t.prototype.start=function(){this.tokenListObserver.start()},t.prototype.stop=function(){this.tokenListObserver.stop()},t.prototype.elementMatchedTokenForAttribute=function(t,e,n){if(this.scope.containsElement(t)){var r=this.buildActionForElementWithDescriptorString(t,e);r&&(this.connectedActions.add(t,r),this.delegate.inlineActionConnected(r))}},t.prototype.elementUnmatchedTokenForAttribute=function(t,e,n){var r=this.getConnectedActionForElementWithDescriptorString(t,e);r&&(this.connectedActions.delete(t,r),this.delegate.inlineActionDisconnected(r))},t.prototype.getConnectedActionForElementWithDescriptorString=function(t,e){var n=this.buildActionForElementWithDescriptorString(t,e);if(n){return this.connectedActions.getValuesForKey(t).find(function(t){return t.hasSameDescriptorAs(n)})}},t.prototype.buildActionForElementWithDescriptorString=function(t,e){try{var n=y.forElementWithInlineDescriptorString(t,e);if(n.identifier==this.identifier)return new d(this.context,n,n.eventTarget)}catch(n){this.context.reportError(n,'parsing descriptor string "'+e+'" for element',t)}},t}(),T=function(){function t(t){this.scope=t}return Object.defineProperty(t.prototype,"element",{get:function(){return this.scope.element},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"identifier",{get:function(){return this.scope.identifier},enumerable:!0,configurable:!0}),t.prototype.get=function(t){return t=this.getFormattedKey(t),this.element.getAttribute(t)},t.prototype.set=function(t,e){return t=this.getFormattedKey(t),this.element.setAttribute(t,e),this.get(t)},t.prototype.has=function(t){return t=this.getFormattedKey(t),this.element.hasAttribute(t)},t.prototype.delete=function(t){return!!this.has(t)&&(t=this.getFormattedKey(t),this.element.removeAttribute(t),!0)},t.prototype.getFormattedKey=function(t){return"data-"+this.identifier+"-"+p(t)},t}(),w=function(){function t(t){this.scope=t}return Object.defineProperty(t.prototype,"element",{get:function(){return this.scope.element},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"identifier",{get:function(){return this.scope.identifier},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"configuration",{get:function(){return this.scope.configuration},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return null!=this.find(t)},t.prototype.find=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this.getSelectorForTargetNames(t);return this.scope.findElement(n)},t.prototype.findAll=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this.getSelectorForTargetNames(t);return this.scope.findAllElements(n)},t.prototype.getSelectorForTargetNames=function(t){var e=this;return t.map(function(t){return e.getSelectorForTargetName(t)}).join(", ")},t.prototype.getSelectorForTargetName=function(t){var e=this.identifier+"."+t;return h(this.configuration.targetAttribute,e)},t}(),F=function(){function t(t,e,n){this.configuration=t,this.identifier=e,this.element=n,this.targets=new w(this),this.data=new T(this)}return t.prototype.findElement=function(t){return this.findAllElements(t)[0]},t.prototype.findAllElements=function(t){var e=this.element.matches(t)?[this.element]:[],n=this.filterElements(Array.from(this.element.querySelectorAll(t)));return e.concat(n)},t.prototype.filterElements=function(t){var e=this;return t.filter(function(t){return e.containsElement(t)})},t.prototype.containsElement=function(t){return t.closest(this.controllerSelector)===this.element},Object.defineProperty(t.prototype,"controllerSelector",{get:function(){return h(this.configuration.controllerAttribute,this.identifier)},enumerable:!0,configurable:!0}),t}(),j=function(){function t(t,e){this.contextSet=t,this.scope=new F(this.configuration,this.identifier,e),this.actions=new b(this),this.inlineActionObserver=new N(this,this);try{this.controller=new t.controllerConstructor(this),this.controller.initialize()}catch(t){this.reportError(t,'initializing controller "'+this.identifier+'"')}}return t.prototype.connect=function(){this.actions.start(),this.inlineActionObserver.start();try{this.controller.connect()}catch(t){this.reportError(t,'connecting controller "'+this.identifier+'"')}},t.prototype.disconnect=function(){try{this.controller.disconnect()}catch(t){this.reportError(t,'disconnecting controller "'+this.identifier+'"')}this.inlineActionObserver.stop(),this.actions.stop()},Object.defineProperty(t.prototype,"application",{get:function(){return this.contextSet.application},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"identifier",{get:function(){return this.contextSet.identifier},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"configuration",{get:function(){return this.application.configuration},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this.scope.element},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parentElement",{get:function(){return this.element.parentElement},enumerable:!0,configurable:!0}),t.prototype.addAction=function(t,e){var n;if(t instanceof d)n=t;else if("string"==typeof t){var r=t;f(e)||(e=this.element);var o=y.forElementWithInlineDescriptorString(e,r);n=new d(this,o,e)}n&&this.actions.add(n)},t.prototype.removeAction=function(t){this.actions.delete(t)},t.prototype.inlineActionConnected=function(t){this.addAction(t)},t.prototype.inlineActionDisconnected=function(t){this.removeAction(t)},t.prototype.reportError=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=n.map(function(t){return"%o"}).join("\n"),i="Error %s\n\n%o\n\n"+o+"\n%o\n%o";return console.error.apply(console,[i,e,t].concat(n,[this.controller,this.element]))},t}(),k=function(){function t(t,e,n){this.router=t,this.identifier=e,this.controllerConstructor=n,this.contextsByElement=new WeakMap,this.connectedContexts=new Set}return Object.defineProperty(t.prototype,"application",{get:function(){return this.router.application},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"contexts",{get:function(){return Array.from(this.connectedContexts)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this.connectedContexts.size},enumerable:!0,configurable:!0}),t.prototype.connect=function(t){var e=this.fetchContextForElement(t);e&&!this.connectedContexts.has(e)&&(this.connectedContexts.add(e),e.connect())},t.prototype.disconnect=function(t){var e=this.fetchContextForElement(t);e&&this.connectedContexts.has(e)&&(this.connectedContexts.delete(e),e.disconnect())},t.prototype.getContextForElement=function(t){return this.contextsByElement.get(t)},t.prototype.fetchContextForElement=function(t){var e=this.contextsByElement.get(t);return e||(e=new j(this,t),this.contextsByElement.set(t,e)),e},t}(),S=function(){function t(t){this.application=t,this.tokenListObserver=new x(this.element,this.controllerAttribute,this),this.contextSets=new Map}return Object.defineProperty(t.prototype,"configuration",{get:function(){return this.application.configuration},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this.configuration.rootElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"controllerAttribute",{get:function(){return this.configuration.controllerAttribute},enumerable:!0,configurable:!0}),t.prototype.start=function(){this.tokenListObserver.start()},t.prototype.stop=function(){this.tokenListObserver.stop()},t.prototype.register=function(t,e){if(this.contextSets.has(t))throw new Error("Router already has a controller registered with the identifier '"+t+"'");var n=new k(this,t,e);this.contextSets.set(t,n),this.connectContextSet(n)},t.prototype.unregister=function(t){var e=this.contextSets.get(t);e&&(this.disconnectContextSet(e),this.contextSets.delete(t))},t.prototype.elementMatchedTokenForAttribute=function(t,e,n){this.connectContextForIdentifierToElement(e,t)},t.prototype.elementUnmatchedTokenForAttribute=function(t,e,n){this.disconnectContextForIdentifierFromElement(e,t)},t.prototype.getContextForElementAndIdentifier=function(t,e){var n=this.contextSets.get(e);if(n)return n.getContextForElement(t)},t.prototype.connectContextSet=function(t){for(var e=this.tokenListObserver.getElementsMatchingToken(t.identifier),n=0,r=e;n<r.length;n++){var o=r[n];t.connect(o)}},t.prototype.disconnectContextSet=function(t){for(var e=t.contexts,n=0,r=e;n<r.length;n++){var o=r[n].element;t.disconnect(o)}},t.prototype.connectContextForIdentifierToElement=function(t,e){var n=this.contextSets.get(t);n&&n.connect(e)},t.prototype.disconnectContextForIdentifierFromElement=function(t,e){var n=this.contextSets.get(t);n&&n.disconnect(e)},t}(),P=function(){function t(t){void 0===t&&(t={}),this.configuration=s(t),this.router=new S(this)}return t.start=function(e){var n=new t(e);return n.start(),n},t.prototype.start=function(){this.router.start()},t.prototype.stop=function(){this.router.stop()},t.prototype.register=function(t,e){this.router.register(t,e)},t.prototype.unregister=function(t){this.router.unregister(t)},t.prototype.getControllerForElementAndIdentifier=function(t,e){var n=this.router.getContextForElementAndIdentifier(t,e);return n?n.controller:null},t}(),C=function(){function t(t){this.context=t}return Object.defineProperty(t.prototype,"application",{get:function(){return this.context.application},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scope",{get:function(){return this.context.scope},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this.scope.element},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"identifier",{get:function(){return this.scope.identifier},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"targets",{get:function(){return this.scope.targets},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return this.scope.data},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){},t.prototype.connect=function(){},t.prototype.disconnect=function(){},t.prototype.addAction=function(t,e){this.context.addAction(t,e)},t.prototype.removeAction=function(t){this.context.removeAction(t)},t}();n.d(e,"Action",function(){return d}),n.d(e,"ActionDescriptor",function(){return y}),n.d(e,"Application",function(){return P}),n.d(e,"Context",function(){return j}),n.d(e,"Controller",function(){return C})}])});
