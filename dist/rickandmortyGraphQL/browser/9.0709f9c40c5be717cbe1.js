(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{o8Cw:function(t,e,i){"use strict";i.r(e),i.d(e,"CharactersListModule",function(){return J});var n=i("ofXK"),o=i("tyNb"),l=i("fXoL"),r=i("iiaH"),s=i("LRne"),c=i("HDdC"),a=i("DH7j"),h=i("n6bG"),u=i("lJxs");function f(t,e,i,n){return Object(h.a)(i)&&(n=i,i=void 0),n?f(t,e,i).pipe(Object(u.a)(t=>Object(a.a)(t)?n(...t):n(t))):new c.a(n=>{d(t,e,function(t){n.next(arguments.length>1?Array.prototype.slice.call(arguments):t)},n,i)})}function d(t,e,i,n,o){let l;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(t)){const n=t;t.addEventListener(e,i,o),l=()=>n.removeEventListener(e,i,o)}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(t)){const n=t;t.on(e,i),l=()=>n.off(e,i)}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(t)){const n=t;t.addListener(e,i),l=()=>n.removeListener(e,i)}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(let l=0,r=t.length;l<r;l++)d(t[l],e,i,n,o)}n.add(l)}var p=i("5+tZ"),g=i("vkgz"),w=i("pLZG"),b=i("7o/Q"),S=i("3N8a");const m=new(i("IjjT").a)(S.a);i("zx2A");const T={leading:!0,trailing:!1};class y{constructor(t,e,i,n){this.duration=t,this.scheduler=e,this.leading=i,this.trailing=n}call(t,e){return e.subscribe(new D(t,this.duration,this.scheduler,this.leading,this.trailing))}}class D extends b.a{constructor(t,e,i,n,o){super(t),this.duration=e,this.scheduler=i,this.leading=n,this.trailing=o,this._hasTrailingValue=!1,this._trailingValue=null}_next(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(O,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)}}function O(t){const{subscriber:e}=t;e.clearThrottle()}function C(t,e,i,n){const o=window&&!!window.document&&window.document.documentElement;let l=o&&e?window:i;if(t&&(l=t&&o&&"string"==typeof t?function(t,e,i){return(i?window.document:e).querySelector(t)}(t,i.nativeElement,n):t,!l))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return l}function v(t){return t&&!t.firstChange}const H={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},_={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class x{constructor(t=!0){this.vertical=t,this.propsMap=t?H:_}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function K(t){return["Window","global"].some(e=>Object.prototype.toString.call(t).includes(e))}function j(t,e){return t?e.document.documentElement:null}function W(t,e){const i=function({container:t,isWindow:e,axis:i}){const{offsetHeightKey:n,clientHeightKey:o}=E(i);return k(t,e,n,o)}(e);return e.isWindow?function(t,e,i){const{axis:n,container:o,isWindow:l}=i,{offsetHeightKey:r,clientHeightKey:s}=E(n),c=t+V(j(l,o),n,l),a=k(e.nativeElement,l,r,s);return{height:t,scrolled:c,totalToScroll:function(t,e,i){const n=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[n]+V(t,e,i)}(e.nativeElement,n,l)+a,isWindow:l}}(i,t,e):function(t,e,i){const{axis:n,container:o}=i;return{height:t,scrolled:o[n.scrollTopKey()],totalToScroll:o[n.scrollHeightKey()],isWindow:!1}}(i,0,e)}function E(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function k(t,e,i,n){if(isNaN(t[i])){const i=j(e,t);return i?i[n]:0}return t[i]}function V(t,e,i){const n=e.pageYOffsetKey(),o=e.scrollTopKey(),l=e.offsetTopKey();return isNaN(window.pageYOffset)?j(i,t)[o]:t.ownerDocument?t.ownerDocument.defaultView[n]:t[l]}function z(t,e,i){let n,o;if(t.totalToScroll<=0)return!1;const l=t.isWindow?t.scrolled:t.height+t.scrolled;return i?(n=(t.totalToScroll-l)/t.totalToScroll,o=e.down/10):(n=t.scrolled/(t.scrolled+(t.totalToScroll-l)),o=e.up/10),n<=o}class L{constructor({totalToScroll:t}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=t}updateScrollPosition(t){return this.lastScrollPosition=t}updateTotalToScroll(t){this.lastTotalToScroll!==t&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=t)}updateScroll(t,e){this.updateScrollPosition(t),this.updateTotalToScroll(e)}updateTriggeredFlag(t,e){e?this.triggered.down=t:this.triggered.up=t}isTriggeredScroll(t,e){return e?this.triggered.down===t:this.triggered.up===t}}const M="[NGX_ISE] DOWN",P="[NGX_ISE] UP";function N(t){const{scrollDown:e,stats:{scrolled:i}}=t;return{type:e?M:P,payload:{currentScrollPosition:i}}}let R=(()=>{class t{constructor(t,e){this.element=t,this.zone=e,this.scrolled=new l.n,this.scrolledUp=new l.n,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:t,infiniteScrollDisabled:e,infiniteScrollDistance:i}){const n=v(t),o=v(e),l=v(i),r=!o&&!this.infiniteScrollDisabled||o&&!e.currentValue||l;(n||o||l)&&(this.destroyScroller(),r&&this.setup())}setup(){"undefined"!=typeof window&&this.zone.runOutsideAngular(()=>{this.disposeScroller=function(t){const{scrollContainer:e,scrollWindow:i,element:n,fromRoot:o}=t,l=function({windowElement:t,axis:e}){return function(t,e){const i=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return Object.assign(Object.assign({},t),{container:i})}({axis:e,isWindow:K(t)},t)}({axis:new x(!t.horizontal),windowElement:C(e,i,n,o)}),r=new L({totalToScroll:W(n,l)}),c={up:t.upDistance,down:t.downDistance};return function(t){let e=f(t.container,"scroll");return t.throttle&&(e=e.pipe(function(t,e=m,i=T){return n=>n.lift(new y(t,e,i.leading,i.trailing))}(t.throttle))),e}({container:l.container,throttle:t.throttle}).pipe(Object(p.a)(()=>Object(s.a)(W(n,l))),Object(u.a)(t=>function(t,e,i){const{scrollDown:n,fire:o}=function(t,e,i){const n=function(t,e){return t<e.scrolled}(t,e);return{fire:z(e,i,n),scrollDown:n}}(t,e,i);return{scrollDown:n,fire:o,stats:e}}(r.lastScrollPosition,t,c)),Object(g.a)(({stats:t})=>r.updateScroll(t.scrolled,t.totalToScroll)),Object(w.a)(({fire:e,scrollDown:i,stats:{totalToScroll:n}})=>function(t,e,i){return!(!t||!e)||!(i||!e)}(t.alwaysCallback,e,r.isTriggeredScroll(n,i))),Object(g.a)(({scrollDown:t,stats:{totalToScroll:e}})=>{r.updateTriggeredFlag(e,t)}),Object(u.a)(N))}({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(t=>this.zone.run(()=>this.handleOnScroll(t)))})}handleOnScroll({type:t,payload:e}){switch(t){case M:return this.scrolled.emit(e);case P:return this.scrolledUp.emit(e);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(l.Fb(l.l),l.Fb(l.A))},t.\u0275dir=l.Ab({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[l.ub]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Db({type:t}),t.\u0275inj=l.Cb({providers:[],imports:[[]]}),t})();var U=i("RF4Q");function Y(t,e){1&t&&l.Gb(0,"app-characters-card",3),2&t&&l.Vb("character",e.$implicit)}function A(t,e){if(1&t){const t=l.Lb();l.Kb(0,"button",4),l.Qb("click",function(){return l.bc(t),l.Sb().onScrollTop()}),l.ic(1,"\u2b06\ufe0f"),l.Jb()}}const B=[{path:"",component:(()=>{class t{constructor(t,e){this.document=t,this.dataSvc=e,this.characters$=this.dataSvc.characters$,this.showButton=!1,this.scrollHeight=500,this.pageNum=1}onWindowScroll(){const t=window.pageYOffset;this.showButton=(t||this.document.documentElement.scrollTop)>this.scrollHeight}onScrollTop(){this.document.documentElement.scrollTop=0}onScrollDown(){this.pageNum++,this.dataSvc.getCharactersByPage(this.pageNum)}}return t.\u0275fac=function(e){return new(e||t)(l.Fb(n.d),l.Fb(r.a))},t.\u0275cmp=l.zb({type:t,selectors:[["app-characters-list"]],hostBindings:function(t,e){1&t&&l.Qb("scroll",function(){return e.onWindowScroll()},!1,l.ac)},decls:4,vars:4,consts:[["infiniteScroll","",1,"character__list",3,"scrolled"],[3,"character",4,"ngFor","ngForOf"],["class","button",3,"click",4,"ngIf"],[3,"character"],[1,"button",3,"click"]],template:function(t,e){1&t&&(l.Kb(0,"section",0),l.Qb("scrolled",function(){return e.onScrollDown()}),l.hc(1,Y,1,1,"app-characters-card",1),l.Tb(2,"async"),l.hc(3,A,2,0,"button",2),l.Jb()),2&t&&(l.vb(1),l.Vb("ngForOf",l.Ub(2,2,e.characters$)),l.vb(2),l.Vb("ngIf",e.showButton))},directives:[R,n.i,n.j,U.a],pipes:[n.b],styles:["section.character__list[_ngcontent-%COMP%]{flex-wrap:wrap;height:auto}.button[_ngcontent-%COMP%], section.character__list[_ngcontent-%COMP%]{display:flex;justify-content:center}.button[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:30px;z-index:1;padding:1rem;background-color:#1f1e1e;border:1px solid #1f1e1e;cursor:pointer;font-size:1.5rem;width:45px;height:45px;align-items:center;transition:all .4s ease-in-out}.button[_ngcontent-%COMP%]:hover{background-color:#8c43e6;border:1px solid #fff;font-size:2rem}"]}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Db({type:t}),t.\u0275inj=l.Cb({imports:[[o.b.forChild(B)],o.b]}),t})();var G=i("ekAR");let J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Db({type:t}),t.\u0275inj=l.Cb({imports:[[n.c,I,G.a,F]]}),t})()}}]);