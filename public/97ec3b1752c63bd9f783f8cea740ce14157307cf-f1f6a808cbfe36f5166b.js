(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+22N":function(e,t,l){"use strict";var n=l("dI71"),o=l("dwco"),a=l.n(o),i=l("q1tI"),r=l.n(i),c=function(e){return e.children},s=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(n.a)(t,e);var l=t.prototype;return l.componentDidMount=function(){a.a.polyfill()},l.handleClick=function(e){e.preventDefault();var t=this.props.onClick,l=void 0===t?function(){}:t,n=0,o=!0,a=this.props,i=a.type,r=a.element,c=a.offset,s=a.timeout;if(i&&r)switch(i){case"class":o=!!(n=document.getElementsByClassName(r)[0]);break;case"id":o=!!(n=document.getElementById(r))}o?this.scrollTo(n,c,s):console.log("Element not found: "+r),l(e)},l.scrollTo=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),l):window.scroll({top:n+t,left:0,behavior:"smooth"})},l.render=function(){return r.a.createElement(c,null,"object"==typeof this.props.children?r.a.cloneElement(this.props.children,{onClick:this.handleClick}):r.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(r.a.Component);t.a=s},JwsL:function(e,t,l){"use strict";l.d(t,"a",(function(){return r}));var n=l("q1tI"),o=l.n(n),a=l("vsba"),i=l.n(a);function r(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("p",null,"© The Blacklight Group 2022. All Rights Reserved."),o.a.createElement("img",{src:i.a,alt:"",className:"blight"}),o.a.createElement("ul",{className:"list-inline"},o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:"https://www.webapp.pennybank.online/"},"Account")),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:"/privacy"},"Privacy")),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:"/affiliates"},"Affiliates")),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:"/faq"},"FAQ")),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:"/press"},"Press")),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:"/https://blog.pennybank.online/"},"Blog")))))}},dwco:function(e,t,l){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var l,n=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||r,scrollIntoView:n.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var l=p(this),n=l.getBoundingClientRect(),a=this.getBoundingClientRect();l!==t.body?(d.call(this,l,l.scrollLeft+a.left-n.left,l.scrollTop+a.top-n.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function r(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function m(t,l){var n=e.getComputedStyle(t,null)["overflow"+l];return"auto"===n||"scroll"===n}function f(e){var t=s(e,"Y")&&m(e,"Y"),l=s(e,"X")&&m(e,"X");return t||l}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function h(t){var l,n,o,i,r=(a()-t.startTime)/468;i=r=r>1?1:r,l=.5*(1-Math.cos(Math.PI*i)),n=t.startX+(t.x-t.startX)*l,o=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,n,o),n===t.x&&o===t.y||e.requestAnimationFrame(h.bind(e,t))}function d(l,n,i){var c,s,m,f,p=a();l===t.body?(c=e,s=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,f=o.scroll):(c=l,s=l.scrollLeft,m=l.scrollTop,f=r),h({scrollable:c,method:f,startTime:p,startX:s,startY:m,x:n,y:i})}}}}()},g7PP:function(e,t){e.exports="data:image/png;base64,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"},vsba:function(e,t,l){e.exports=l.p+"static/blacklightlogo-3e6ffe082d18473132560138a17f2471.png"},zYoO:function(e,t,l){"use strict";l.d(t,"a",(function(){return m}));var n=l("dI71"),o=l("q1tI"),a=l.n(o),i=l("+22N"),r=l("g7PP"),c=l.n(r),s=l("Wbzz"),m=function(e){function t(t){var l;return(l=e.call(this,t)||this).toggleMenu=function(e){l.setState({openMenu:e})},l.handleScroll=function(){var e=l.state.visibilityClass;window.pageYOffset>300?"navbar-shrink"!==e&&l.setState({visibilityClass:"navbar-shrink"}):"navbar-shrink"===e&&l.setState({visibilityClass:""})},l.state={openMenu:!1,visibilityClass:""},l}Object(n.a)(t,e);var l=t.prototype;return l.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},l.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},l.render=function(){var e=this,t=this.state,l=t.openMenu,n=t.visibilityClass;return a.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top "+n,id:"mainNav"},a.a.createElement("div",{className:"container"},a.a.createElement("a",{className:"navbar-brand",href:"/"},a.a.createElement("img",{src:c.a,alt:"logo"})),a.a.createElement("button",{onClick:function(t){return e.toggleMenu(!l)},className:"navbar-toggler navbar-toggler-right "+(l?"":"collapsed"),type:"button","aria-controls":"navbarResponsive","aria-expanded":l,"aria-label":"Toggle navigation"},a.a.createElement("i",{className:"fas fa-bars fa-2x"})),a.a.createElement("div",{className:"collapse navbar-collapse "+(l?"show":""),id:"navbarResponsive"},a.a.createElement("ul",{className:"navbar-nav ml-auto"},a.a.createElement("li",{className:"nav-item"},a.a.createElement("a",{className:"nav-link",href:"https://www.webapp.pennybank.online"},"Account")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.a,{onClick:function(t){return e.toggleMenu(!l)},type:"id",element:"FaqPage"},a.a.createElement(s.Link,{className:"nav-link",href:"/faq"},"FAQ"))),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.a,{onClick:function(t){return e.toggleMenu(!l)},type:"id",element:"Team"},a.a.createElement(s.Link,{className:"nav-link",href:"/team"},"Team Penny Bank"))),a.a.createElement("li",{className:"nav-item"},a.a.createElement("a",{className:"nav-link",href:"https://www.blog.pennybank.online"},"Blog")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.a,{onClick:function(t){return e.toggleMenu(!l)},type:"id",element:"Press"},a.a.createElement(s.Link,{className:"nav-link",href:"/press"},"Press"))),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.a,{onClick:function(t){return e.toggleMenu(!l)},type:"id",element:"Affiliates"},a.a.createElement(s.Link,{className:"nav-link",href:"/affiliates"},"Affiliates"))),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.a,{onClick:function(t){return e.toggleMenu(!l)},type:"id",element:"LeaderboardPage"},a.a.createElement(s.Link,{className:"nav-link",href:"/leaderboards"},"Leaderboards")))))))},t}(o.Component)}}]);
//# sourceMappingURL=97ec3b1752c63bd9f783f8cea740ce14157307cf-f1f6a808cbfe36f5166b.js.map