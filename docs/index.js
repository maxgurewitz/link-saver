/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(1);

	var firebase = __webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);

	var Elm = __webpack_require__(5);
	var ports = __webpack_require__(6);

	var fbpid = 'link-saver-44fb2';

	firebase.initializeApp({
	  apiKey: 'AIzaSyAuYCjKcCsk0Z0r5JKjQTVAPpJCB07PJgk',
	  authDomain: fbpid + '.firebaseapp.com',
	  databaseURL: 'https://' + fbpid + '.firebaseio.com'
	});

	var initialized = false;

	firebase.auth().onAuthStateChanged(function(user) {
	  if (!initialized) {
	    initialized = true

	    var flags = {
	      user: user || null
	    };

	    var app = Elm.Main.embed(document.getElementById('main'), flags);

	    Object.keys(ports.receive).forEach(function(name) {
	      var subscription = ports.receive[name];

	      app.ports[name].subscribe(function(data) {
	        subscription(data, app);
	      });
	    });

	    ports.send.forEach(function(sendPort) {
	      sendPort(app, user);
	    });
	  }
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v3.6.1
	    Build: 3.6.1-rc.3
	    Terms: https://firebase.google.com/terms/ */
	var firebase = null; (function() { var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,l=function(){l=function(){};h.Symbol||(h.Symbol=ba)},ca=0,ba=function(a){return"jscomp_symbol_"+(a||"")+ca++},n=function(){l();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=
	h.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return m(this)}});n=function(){}},m=function(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},da=function(a){n();a={next:a};a[h.Symbol.iterator]=function(){return this};return a},q=this,r=function(){},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);
	if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},v=function(a){return"function"==t(a)},ea=function(a,
	b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},w=function(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return w.apply(null,arguments)},x=function(a,b){var c=Array.prototype.slice.call(arguments,
	1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},y=function(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.aa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var z;z="undefined"!==typeof window?window:"undefined"!==typeof self?self:global;function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
	function __decorate(a,b,c,d){var e=arguments.length,f=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,g;g=z.Reflect;if("object"===typeof g&&"function"===typeof g.decorate)f=g.decorate(a,b,c,d);else for(var k=a.length-1;0<=k;k--)if(g=a[k])f=(3>e?g(f):3<e?g(b,c,f):g(b,c))||f;return 3<e&&f&&Object.defineProperty(b,c,f),f}function __metadata(a,b){var c=z.Reflect;if("object"===typeof c&&"function"===typeof c.metadata)return c.metadata(a,b)}
	var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,f){function g(a){try{p(d.next(a))}catch(u){f(u)}}function k(a){try{p(d.throw(a))}catch(u){f(u)}}function p(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(g,k)}p((d=d.apply(a,b)).next())})};"undefined"!==typeof z.M&&z.M||(z.__extends=__extends,z.__decorate=__decorate,z.__metadata=__metadata,z.__param=__param,z.__awaiter=__awaiter);var A=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};y(A,Error);A.prototype.name="CustomError";var ga=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var B=function(a,b){b.unshift(a);A.call(this,ga.apply(null,b));b.shift()};y(B,A);B.prototype.name="AssertionError";var ha=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new B(""+e,f||[]);},C=function(a,b,c){a||ha("",null,b,Array.prototype.slice.call(arguments,2))},D=function(a,b,c){v(a)||ha("Expected function but got %s: %s.",[t(a),a],b,Array.prototype.slice.call(arguments,2))};var E=function(a,b,c){this.T=c;this.N=a;this.U=b;this.s=0;this.o=null};E.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.N();return a};E.prototype.put=function(a){this.U(a);this.s<this.T&&(this.s++,a.next=this.o,this.o=a)};var F;a:{var ia=q.navigator;if(ia){var ja=ia.userAgent;if(ja){F=ja;break a}}F=""};var ka=function(a){q.setTimeout(function(){throw a;},0)},G,la=function(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==F.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
	"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==F.indexOf("Trident")&&-1==F.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.G;c.G=null;a()}};return function(a){d.next={G:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
	document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}};var H=function(){this.v=this.f=null},ma=new E(function(){return new I},function(a){a.reset()},100);H.prototype.add=function(a,b){var c=ma.get();c.set(a,b);this.v?this.v.next=c:(C(!this.f),this.f=c);this.v=c};H.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.v=null),a.next=null);return a};var I=function(){this.next=this.scope=this.B=null};I.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
	I.prototype.reset=function(){this.next=this.scope=this.B=null};var M=function(a,b){J||na();L||(J(),L=!0);oa.add(a,b)},J,na=function(){var a=q.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);J=function(){b.then(pa)}}else J=function(){var a=pa;!v(q.setImmediate)||q.Window&&q.Window.prototype&&-1==F.indexOf("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(G||(G=la()),G(a)):q.setImmediate(a)}},L=!1,oa=new H,pa=function(){for(var a;a=oa.remove();){try{a.B.call(a.scope)}catch(b){ka(b)}ma.put(a)}L=!1};var O=function(a,b){this.b=0;this.L=void 0;this.j=this.g=this.u=null;this.m=this.A=!1;if(a!=r)try{var c=this;a.call(b,function(a){N(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}N(c,3,a)})}catch(d){N(this,3,d)}},qa=function(){this.next=this.context=this.h=this.c=this.child=null;this.w=!1};qa.prototype.reset=function(){this.context=this.h=this.c=this.child=null;this.w=!1};
	var ra=new E(function(){return new qa},function(a){a.reset()},100),sa=function(a,b,c){var d=ra.get();d.c=a;d.h=b;d.context=c;return d},ua=function(a,b,c){ta(a,b,c,null)||M(x(b,a))};O.prototype.then=function(a,b,c){null!=a&&D(a,"opt_onFulfilled should be a function.");null!=b&&D(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this,v(a)?a:null,v(b)?b:null,c)};O.prototype.then=O.prototype.then;O.prototype.$goog_Thenable=!0;
	O.prototype.X=function(a,b){return va(this,null,a,b)};var xa=function(a,b){a.g||2!=a.b&&3!=a.b||wa(a);C(null!=b.c);a.j?a.j.next=b:a.g=b;a.j=b},va=function(a,b,c,d){var e=sa(null,null,null);e.child=new O(function(a,g){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(K){g(K)}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e)}catch(K){g(K)}}:g});e.child.u=a;xa(a,e);return e.child};O.prototype.Y=function(a){C(1==this.b);this.b=0;N(this,2,a)};O.prototype.Z=function(a){C(1==this.b);this.b=0;N(this,3,a)};
	var N=function(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,ta(c,a.Y,a.Z,a)||(a.L=c,a.b=b,a.u=null,wa(a),3!=b||ya(a,c)))},ta=function(a,b,c,d){if(a instanceof O)return null!=b&&D(b,"opt_onFulfilled should be a function."),null!=c&&D(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),xa(a,sa(b||r,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),
	!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var f=a.then;if(v(f))return za(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1},za=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(p){k(p)}},wa=function(a){a.A||(a.A=!0,M(a.P,a))},Aa=function(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);null!=b&&C(null!=b.c);return b};
	O.prototype.P=function(){for(var a;a=Aa(this);){var b=this.b,c=this.L;if(3==b&&a.h&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1}if(a.child)a.child.u=null,Ba(a,b,c);else try{a.w?a.c.call(a.context):Ba(a,b,c)}catch(e){Ca.call(null,e)}ra.put(a)}this.A=!1};var Ba=function(a,b,c){2==b?a.c.call(a.context,c):a.h&&a.h.call(a.context,c)},ya=function(a,b){a.m=!0;M(function(){a.m&&Ca.call(null,b)})},Ca=ka;function P(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=P(a[c],b[c]));return a};O.all=function(a){return new O(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},k=0,p;k<a.length;k++)p=a[k],ua(p,x(f,k),g);else b(e)})};O.resolve=function(a){if(a instanceof O)return a;var b=new O(r);N(b,2,a);return b};O.reject=function(a){return new O(function(b,c){c(a)})};O.prototype["catch"]=O.prototype.X;var Q=O;"undefined"!==typeof Promise&&(Q=Promise);var Da=Q;function Ea(a,b){a=new R(a,b);return a.subscribe.bind(a)}var R=function(a,b){var c=this;this.a=[];this.K=0;this.task=Da.resolve();this.l=!1;this.D=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};R.prototype.next=function(a){S(this,function(b){b.next(a)})};R.prototype.error=function(a){S(this,function(b){b.error(a)});this.close(a)};R.prototype.complete=function(){S(this,function(a){a.complete()});this.close()};
	R.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Fa(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=T);void 0===e.error&&(e.error=T);void 0===e.complete&&(e.complete=T);a=this.$.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.H?e.error(d.H):e.complete()}catch(f){}});this.a.push(e);return a};
	R.prototype.$=function(a){void 0!==this.a&&void 0!==this.a[a]&&(delete this.a[a],--this.K,0===this.K&&void 0!==this.D&&this.D(this))};var S=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Ga(a,c,b)},Ga=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){"undefined"!==typeof console&&console.error&&console.error(d)}})};R.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.H=a),this.task.then(function(){b.a=void 0;b.D=void 0}))};
	function Fa(a){if("object"!==typeof a||null===a)return!1;var b;b=["next","error","complete"];n();var c=b[Symbol.iterator];b=c?c.call(b):m(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function T(){};var Ha=Error.captureStackTrace,V=function(a,b){this.code=a;this.message=b;if(Ha)Ha(this,U.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};V.prototype=Object.create(Error.prototype);V.prototype.constructor=V;V.prototype.name="FirebaseError";var U=function(a,b,c){this.V=a;this.W=b;this.O=c;this.pattern=/\{\$([^}]+)}/g};
	U.prototype.create=function(a,b){void 0===b&&(b={});var c=this.O[a];a=this.V+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>"}),c=this.W+": "+c+" ("+a+").",c=new V(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};var W=Q,X=function(a,b,c){var d=this;this.I=c;this.J=!1;this.i={};this.C=b;this.F=P(void 0,a);a="serviceAccount"in this.F;("credential"in this.F||a)&&"undefined"!==typeof console&&console.log("The '"+(a?"serviceAccount":"credential")+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");Object.keys(c.INTERNAL.factories).forEach(function(a){var b=
	c.INTERNAL.useAsService(d,a);null!==b&&(b=d.S.bind(d,b),d[a]=b)})};X.prototype.delete=function(){var a=this;return(new W(function(b){Y(a);b()})).then(function(){a.I.INTERNAL.removeApp(a.C);return W.all(Object.keys(a.i).map(function(b){return a.i[b].INTERNAL.delete()}))}).then(function(){a.J=!0;a.i={}})};X.prototype.S=function(a){Y(this);void 0===this.i[a]&&(this.i[a]=this.I.INTERNAL.factories[a](this,this.R.bind(this)));return this.i[a]};X.prototype.R=function(a){P(this,a)};
	var Y=function(a){a.J&&Z(Ia("deleted",{name:a.C}))};h.Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.C}},options:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.F}}});X.prototype.name&&X.prototype.options||X.prototype.delete||console.log("dc");
	function Ja(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&Z("noApp",{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&f[d])f[d](b,a)})}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth","serverAuth"in e||Z("serverAuthMissing"));return c}var d={},e={},f={},g={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Z("bad-app-name",
	{name:c+""});void 0!==d[c]&&Z("dupApp",{name:c});a=new X(a,c,g);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||P(a,{INTERNAL:{getToken:function(){return W.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:W,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,u){e[b]&&Z("dupService",{name:b});e[b]=c;u&&(f[b]=u);c=function(c){void 0===c&&(c=a());return c[b]()};void 0!==d&&P(c,d);return g[b]=c},createFirebaseNamespace:Ja,
	extendNamespace:function(a){P(g,a)},createSubscribe:Ea,ErrorFactory:U,removeApp:function(a){b(d[a],"delete");delete d[a]},factories:e,useAsService:c,Promise:O,deepExtend:P}};g["default"]=g;Object.defineProperty(g,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=X;return g}function Z(a,b){throw Error(Ia(a,b));}
	function Ia(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered.",serverAuthMissing:"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."}[a];
	return void 0===b?"Application Error: ("+a+")":b};"undefined"!==typeof firebase&&(firebase=Ja()); })();
	firebase.SDK_VERSION = "3.6.1";
	module.exports = firebase;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var firebase = __webpack_require__(2);
	/*! @license Firebase v3.6.1
	    Build: 3.6.1-rc.3
	    Terms: https://firebase.google.com/terms/ */
	(function(){var h,aa=aa||{},l=this,ba=function(){},ca=function(){throw Error("unimplemented abstract method");},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=
	typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a){return null===a},ea=function(a){return"array"==m(a)},fa=function(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length},n=function(a){return"string"==typeof a},ga=function(a){return"number"==typeof a},p=function(a){return"function"==m(a)},ha=function(a){var b=typeof a;
	return"object"==b&&null!=a||"function"==b},ia=function(a,b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return q.apply(null,
	arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.Rc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.$e=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var t=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(t,Error);t.prototype.name="CustomError";var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},pa=/&/g,qa=/</g,ra=/>/g,sa=/"/g,ta=/'/g,ua=/\x00/g,va=/[\x00&<>"']/,u=function(a,b){return-1!=a.indexOf(b)},wa=function(a,b){return a<b?-1:a>b?1:0};var xa=function(a,b){b.unshift(a);t.call(this,ma.apply(null,b));b.shift()};r(xa,t);xa.prototype.name="AssertionError";
	var ya=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new xa(""+e,f||[]);},w=function(a,b,c){a||ya("",null,b,Array.prototype.slice.call(arguments,2))},za=function(a,b){throw new xa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Aa=function(a,b,c){ga(a)||ya("Expected number but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a},Ba=function(a,b,c){n(a)||ya("Expected string but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,
	2))},Ca=function(a,b,c){p(a)||ya("Expected function but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2))};var Da=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ea=function(a,b){for(var c=n(a)?
	a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Fa=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=n(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ga=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
	Ia=function(a){var b;a:{b=Ha;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]},Ja=function(a,b){return 0<=Da(a,b)},La=function(a,b){b=Da(a,b);var c;(c=0<=b)&&Ka(a,b);return c},Ka=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Ma=function(a,b){var c=0;Ea(a,function(d,e){b.call(void 0,d,e,a)&&Ka(a,e)&&c++})},Na=function(a){return Array.prototype.concat.apply(Array.prototype,
	arguments)},Oa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Pa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Qa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Ra=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Sa=function(a){for(var b in a)return!1;return!0},Ta=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Ua=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
	Wa=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Va.length;f++)c=Va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Xa;a:{var Ya=l.navigator;if(Ya){var Za=Ya.userAgent;if(Za){Xa=Za;break a}}Xa=""}var y=function(a){return u(Xa,a)};var $a=function(a){$a[" "](a);return a};$a[" "]=ba;var bb=function(a,b){var c=ab;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var cb=y("Opera"),z=y("Trident")||y("MSIE"),db=y("Edge"),eb=db||z,fb=y("Gecko")&&!(u(Xa.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),gb=u(Xa.toLowerCase(),"webkit")&&!y("Edge"),hb=function(){var a=l.document;return a?a.documentMode:void 0},ib;
	a:{var jb="",kb=function(){var a=Xa;if(fb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(db)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(gb)return/WebKit\/(\S+)/.exec(a);if(cb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();kb&&(jb=kb?kb[1]:"");if(z){var lb=hb();if(null!=lb&&lb>parseFloat(jb)){ib=String(lb);break a}}ib=jb}
	var mb=ib,ab={},A=function(a){return bb(a,function(){for(var b=0,c=na(String(mb)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=wa(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||wa(0==g[2].length,0==k[2].length)||wa(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})},nb;var ob=l.document;
	nb=ob&&z?hb()||("CSS1Compat"==ob.compatMode?parseInt(mb,10):5):void 0;var pb=null,qb=null,sb=function(a){var b="";rb(a,function(a){b+=String.fromCharCode(a)});return b},rb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=qb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}tb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},tb=function(){if(!pb){pb={};qb={};for(var a=0;65>a;a++)pb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
	qb[pb[a]]=a,62<=a&&(qb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var ub=!z||9<=Number(nb),vb=z&&!A("9");!gb||A("528");fb&&A("1.9b")||z&&A("8")||cb&&A("9.5")||gb&&A("528");fb&&!A("8")||z&&A("9");var wb=function(){this.za=this.za;this.Rb=this.Rb};wb.prototype.za=!1;wb.prototype.isDisposed=function(){return this.za};wb.prototype.Na=function(){if(this.Rb)for(;this.Rb.length;)this.Rb.shift()()};var xb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Ua=!1;this.ud=!0};xb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ud=!1};var yb=function(a,b){xb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.lb=this.state=null;a&&this.init(a,b)};r(yb,xb);
	yb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(fb){var e;a:{try{$a(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=gb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=gb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
	a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.lb=a;a.defaultPrevented&&
	this.preventDefault()};yb.prototype.preventDefault=function(){yb.Rc.preventDefault.call(this);var a=this.lb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,vb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};yb.prototype.ee=function(){return this.lb};var zb="closure_listenable_"+(1E6*Math.random()|0),Ab=0;var Bb=function(a,b,c,d,e){this.listener=a;this.Wb=null;this.src=b;this.type=c;this.capture=!!d;this.Ib=e;this.key=++Ab;this.Za=this.Cb=!1},Cb=function(a){a.Za=!0;a.listener=null;a.Wb=null;a.src=null;a.Ib=null};var Db=function(a){this.src=a;this.v={};this.zb=0};Db.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.v[f];a||(a=this.v[f]=[],this.zb++);var g=Eb(a,b,d,e);-1<g?(b=a[g],c||(b.Cb=!1)):(b=new Bb(b,this.src,f,!!d,e),b.Cb=c,a.push(b));return b};Db.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.v))return!1;var e=this.v[a];b=Eb(e,b,c,d);return-1<b?(Cb(e[b]),Ka(e,b),0==e.length&&(delete this.v[a],this.zb--),!0):!1};
	var Fb=function(a,b){var c=b.type;c in a.v&&La(a.v[c],b)&&(Cb(b),0==a.v[c].length&&(delete a.v[c],a.zb--))};Db.prototype.vc=function(a,b,c,d){a=this.v[a.toString()];var e=-1;a&&(e=Eb(a,b,c,d));return-1<e?a[e]:null};var Eb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Za&&f.listener==b&&f.capture==!!c&&f.Ib==d)return e}return-1};var Gb="closure_lm_"+(1E6*Math.random()|0),Hb={},Ib=0,Jb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Jb(a,b[f],c,d,e);else c=Kb(c),a&&a[zb]?a.listen(b,c,d,e):Lb(a,b,c,!1,d,e)},Lb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=Mb(a);k||(a[Gb]=k=new Db(a));c=k.add(b,c,d,e,f);if(!c.Wb){d=Nb();c.Wb=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Ob(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
	Ib++}},Nb=function(){var a=Pb,b=ub?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Qb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Qb(a,b[f],c,d,e);else c=Kb(c),a&&a[zb]?Rb(a,b,c,d,e):Lb(a,b,c,!0,d,e)},Sb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Sb(a,b[f],c,d,e);else c=Kb(c),a&&a[zb]?a.$.remove(String(b),c,d,e):a&&(a=Mb(a))&&(b=a.vc(b,c,!!d,e))&&Tb(b)},Tb=function(a){if(!ga(a)&&a&&!a.Za){var b=a.src;if(b&&
	b[zb])Fb(b.$,a);else{var c=a.type,d=a.Wb;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Ob(c),d);Ib--;(c=Mb(b))?(Fb(c,a),0==c.zb&&(c.src=null,b[Gb]=null)):Cb(a)}}},Ob=function(a){return a in Hb?Hb[a]:Hb[a]="on"+a},Vb=function(a,b,c,d){var e=!0;if(a=Mb(a))if(b=a.v[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Za&&(f=Ub(f,d),e=e&&!1!==f)}return e},Ub=function(a,b){var c=a.listener,d=a.Ib||a.src;a.Cb&&Tb(a);return c.call(d,
	b)},Pb=function(a,b){if(a.Za)return!0;if(!ub){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new yb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Ua&&0<=e;e--){b.currentTarget=d[e];var f=Vb(d[e],a,!0,b),c=c&&f}for(e=0;!b.Ua&&e<d.length;e++)b.currentTarget=
	d[e],f=Vb(d[e],a,!1,b),c=c&&f}return c}return Ub(a,new yb(b,this))},Mb=function(a){a=a[Gb];return a instanceof Db?a:null},Wb="__closure_events_fn_"+(1E9*Math.random()>>>0),Kb=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[Wb]||(a[Wb]=function(b){return a.handleEvent(b)});return a[Wb]};var Xb=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var Zb=function(){this.fc="";this.Md=Yb};Zb.prototype.Lb=!0;Zb.prototype.Gb=function(){return this.fc};Zb.prototype.toString=function(){return"Const{"+this.fc+"}"};var $b=function(a){if(a instanceof Zb&&a.constructor===Zb&&a.Md===Yb)return a.fc;za("expected object of type Const, got '"+a+"'");return"type_error:Const"},Yb={},ac=function(a){var b=new Zb;b.fc=a;return b};ac("");var B=function(){this.ka="";this.Ld=bc};B.prototype.Lb=!0;B.prototype.Gb=function(){return this.ka};B.prototype.toString=function(){return"SafeUrl{"+this.ka+"}"};
	var cc=function(a){if(a instanceof B&&a.constructor===B&&a.Ld===bc)return a.ka;za("expected object of type SafeUrl, got '"+a+"' of type "+m(a));return"type_error:SafeUrl"},dc=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,fc=function(a){if(a instanceof B)return a;a=a.Lb?a.Gb():String(a);dc.test(a)||(a="about:invalid#zClosurez");return ec(a)},bc={},ec=function(a){var b=new B;b.ka=a;return b};ec("about:blank");var gc=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))},hc=function(a){a=String(a);if(gc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},kc=function(a){var b=[];ic(new jc,a,b);return b.join("")},jc=function(){this.$b=void 0},
	ic=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],ic(a,a.$b?a.$b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),lc(d,c),c.push(":"),ic(a,a.$b?a.$b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":lc(b,
	c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},mc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},nc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,lc=function(a,b){b.push('"',a.replace(nc,function(a){var b=mc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),
	mc[a]=b);return b}),'"')};var oc=function(){};oc.prototype.Vc=null;oc.prototype.kb=ca;var pc=function(a){return a.Vc||(a.Vc=a.Ob())};oc.prototype.Ob=ca;var qc,rc=function(){};r(rc,oc);rc.prototype.kb=function(){var a=sc(this);return a?new ActiveXObject(a):new XMLHttpRequest};rc.prototype.Ob=function(){var a={};sc(this)&&(a[0]=!0,a[1]=!0);return a};
	var sc=function(a){if(!a.jd&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.jd=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.jd};qc=new rc;var tc=function(){};r(tc,oc);tc.prototype.kb=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new uc;throw Error("Unsupported browser");};tc.prototype.Ob=function(){return{}};
	var uc=function(){this.na=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.na.onload=q(this.ie,this);this.na.onerror=q(this.gd,this);this.na.onprogress=q(this.je,this);this.na.ontimeout=q(this.ke,this)};h=uc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.na.open(a,b)};
	h.send=function(a){if(a)if("string"==typeof a)this.na.send(a);else throw Error("Only string data is supported");else this.na.send()};h.abort=function(){this.na.abort()};h.setRequestHeader=function(){};h.ie=function(){this.status=200;this.responseText=this.na.responseText;vc(this,4)};h.gd=function(){this.status=500;this.responseText="";vc(this,4)};h.ke=function(){this.gd()};h.je=function(){this.status=200;vc(this,1)};var vc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var xc=function(){this.Ub="";this.Nd=wc};xc.prototype.Lb=!0;xc.prototype.Gb=function(){return this.Ub};xc.prototype.toString=function(){return"TrustedResourceUrl{"+this.Ub+"}"};var wc={};var zc=function(){this.ka="";this.Kd=yc};zc.prototype.Lb=!0;zc.prototype.Gb=function(){return this.ka};zc.prototype.toString=function(){return"SafeHtml{"+this.ka+"}"};var Ac=function(a){if(a instanceof zc&&a.constructor===zc&&a.Kd===yc)return a.ka;za("expected object of type SafeHtml, got '"+a+"' of type "+m(a));return"type_error:SafeHtml"},yc={};zc.prototype.re=function(a){this.ka=a;return this};!fb&&!z||z&&9<=Number(nb)||fb&&A("1.9.1");z&&A("9");var Cc=function(a,b){Pa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Bc.hasOwnProperty(d)?a.setAttribute(Bc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Bc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Dc=function(a,b,c){this.ue=c;this.Ud=a;this.Ge=b;this.Qb=0;this.Jb=null};Dc.prototype.get=function(){var a;0<this.Qb?(this.Qb--,a=this.Jb,this.Jb=a.next,a.next=null):a=this.Ud();return a};Dc.prototype.put=function(a){this.Ge(a);this.Qb<this.ue&&(this.Qb++,a.next=this.Jb,this.Jb=a)};var Ec=function(a){l.setTimeout(function(){throw a;},0)},Fc,Gc=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
	a=q(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Zc;c.Zc=null;a()}};return function(a){d.next={Zc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
	function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var Hc=function(){this.kc=this.Ia=null},Jc=new Dc(function(){return new Ic},function(a){a.reset()},100);Hc.prototype.add=function(a,b){var c=Jc.get();c.set(a,b);this.kc?this.kc.next=c:(w(!this.Ia),this.Ia=c);this.kc=c};Hc.prototype.remove=function(){var a=null;this.Ia&&(a=this.Ia,this.Ia=this.Ia.next,this.Ia||(this.kc=null),a.next=null);return a};var Ic=function(){this.next=this.scope=this.uc=null};Ic.prototype.set=function(a,b){this.uc=a;this.scope=b;this.next=null};
	Ic.prototype.reset=function(){this.next=this.scope=this.uc=null};var Oc=function(a,b){Kc||Lc();Mc||(Kc(),Mc=!0);Nc.add(a,b)},Kc,Lc=function(){var a=l.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);Kc=function(){b.then(Pc)}}else Kc=function(){var a=Pc;!p(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Fc||(Fc=Gc()),Fc(a)):l.setImmediate(a)}},Mc=!1,Nc=new Hc,Pc=function(){for(var a;a=Nc.remove();){try{a.uc.call(a.scope)}catch(b){Ec(b)}Jc.put(a)}Mc=!1};var Qc=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Rc=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var C=function(a,b){this.G=0;this.la=void 0;this.La=this.ga=this.m=null;this.Hb=this.tc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){Sc(c,2,a)},function(a){if(!(a instanceof Tc))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}Sc(c,3,a)})}catch(d){Sc(this,3,d)}},Uc=function(){this.next=this.context=this.Ra=this.Da=this.child=null;this.ib=!1};Uc.prototype.reset=function(){this.context=this.Ra=this.Da=this.child=null;this.ib=!1};
	var Vc=new Dc(function(){return new Uc},function(a){a.reset()},100),Wc=function(a,b,c){var d=Vc.get();d.Da=a;d.Ra=b;d.context=c;return d},D=function(a){if(a instanceof C)return a;var b=new C(ba);Sc(b,2,a);return b},E=function(a){return new C(function(b,c){c(a)})},Yc=function(a,b,c){Xc(a,b,c,null)||Oc(ka(b,a))},Zc=function(a){return new C(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{de:!0,value:f}:{de:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Yc(g,ka(e,f,!0),
	ka(e,f,!1));else b(d)})};C.prototype.then=function(a,b,c){null!=a&&Ca(a,"opt_onFulfilled should be a function.");null!=b&&Ca(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return $c(this,p(a)?a:null,p(b)?b:null,c)};Qc(C);var bd=function(a,b){b=Wc(b,b,void 0);b.ib=!0;ad(a,b);return a};C.prototype.h=function(a,b){return $c(this,null,a,b)};C.prototype.cancel=function(a){0==this.G&&Oc(function(){var b=new Tc(a);cd(this,b)},this)};
	var cd=function(a,b){if(0==a.G)if(a.m){var c=a.m;if(c.ga){for(var d=0,e=null,f=null,g=c.ga;g&&(g.ib||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.G&&1==d?cd(c,b):(f?(d=f,w(c.ga),w(null!=d),d.next==c.La&&(c.La=d),d.next=d.next.next):dd(c),ed(c,e,3,b)))}a.m=null}else Sc(a,3,b)},ad=function(a,b){a.ga||2!=a.G&&3!=a.G||fd(a);w(null!=b.Da);a.La?a.La.next=b:a.ga=b;a.La=b},$c=function(a,b,c,d){var e=Wc(null,null,null);e.child=new C(function(a,g){e.Da=b?function(c){try{var e=b.call(d,c);a(e)}catch(oa){g(oa)}}:
	a;e.Ra=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof Tc?g(b):a(e)}catch(oa){g(oa)}}:g});e.child.m=a;ad(a,e);return e.child};C.prototype.Qe=function(a){w(1==this.G);this.G=0;Sc(this,2,a)};C.prototype.Re=function(a){w(1==this.G);this.G=0;Sc(this,3,a)};
	var Sc=function(a,b,c){0==a.G&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.G=1,Xc(c,a.Qe,a.Re,a)||(a.la=c,a.G=b,a.m=null,fd(a),3!=b||c instanceof Tc||gd(a,c)))},Xc=function(a,b,c,d){if(a instanceof C)return null!=b&&Ca(b,"opt_onFulfilled should be a function."),null!=c&&Ca(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),ad(a,Wc(b||ba,c||null,d)),!0;if(Rc(a))return a.then(b,c,d),!0;if(ha(a))try{var e=a.then;if(p(e))return hd(a,
	e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},hd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(v){k(v)}},fd=function(a){a.tc||(a.tc=!0,Oc(a.Zd,a))},dd=function(a){var b=null;a.ga&&(b=a.ga,a.ga=b.next,b.next=null);a.ga||(a.La=null);null!=b&&w(null!=b.Da);return b};C.prototype.Zd=function(){for(var a;a=dd(this);)ed(this,a,this.G,this.la);this.tc=!1};
	var ed=function(a,b,c,d){if(3==c&&b.Ra&&!b.ib)for(;a&&a.Hb;a=a.m)a.Hb=!1;if(b.child)b.child.m=null,id(b,c,d);else try{b.ib?b.Da.call(b.context):id(b,c,d)}catch(e){jd.call(null,e)}Vc.put(b)},id=function(a,b,c){2==b?a.Da.call(a.context,c):a.Ra&&a.Ra.call(a.context,c)},gd=function(a,b){a.Hb=!0;Oc(function(){a.Hb&&jd.call(null,b)})},jd=Ec,Tc=function(a){t.call(this,a)};r(Tc,t);Tc.prototype.name="cancel";/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	var F=function(a,b){this.bc=[];this.od=a;this.bd=b||null;this.nb=this.Pa=!1;this.la=void 0;this.Pc=this.Uc=this.oc=!1;this.ic=0;this.m=null;this.pc=0};F.prototype.cancel=function(a){if(this.Pa)this.la instanceof F&&this.la.cancel();else{if(this.m){var b=this.m;delete this.m;a?b.cancel(a):(b.pc--,0>=b.pc&&b.cancel())}this.od?this.od.call(this.bd,this):this.Pc=!0;this.Pa||kd(this,new ld)}};F.prototype.$c=function(a,b){this.oc=!1;md(this,a,b)};
	var md=function(a,b,c){a.Pa=!0;a.la=c;a.nb=!b;nd(a)},pd=function(a){if(a.Pa){if(!a.Pc)throw new od;a.Pc=!1}};F.prototype.callback=function(a){pd(this);qd(a);md(this,!0,a)};
	var kd=function(a,b){pd(a);qd(b);md(a,!1,b)},qd=function(a){w(!(a instanceof F),"An execution sequence may not be initiated with a blocking Deferred.")},ud=function(a){var b=rd("https://apis.google.com/js/client.js?onload="+sd);td(b,null,a,void 0)},td=function(a,b,c,d){w(!a.Uc,"Blocking Deferreds can not be re-used");a.bc.push([b,c,d]);a.Pa&&nd(a)};F.prototype.then=function(a,b,c){var d,e,f=new C(function(a,b){d=a;e=b});td(this,d,function(a){a instanceof ld?f.cancel():e(a)});return f.then(a,b,c)};
	Qc(F);
	var vd=function(a){return Ga(a.bc,function(a){return p(a[1])})},nd=function(a){if(a.ic&&a.Pa&&vd(a)){var b=a.ic,c=wd[b];c&&(l.clearTimeout(c.ob),delete wd[b]);a.ic=0}a.m&&(a.m.pc--,delete a.m);for(var b=a.la,d=c=!1;a.bc.length&&!a.oc;){var e=a.bc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.nb?g:f)try{var k=f.call(e||a.bd,b);void 0!==k&&(a.nb=a.nb&&(k==b||k instanceof Error),a.la=b=k);if(Rc(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.oc=!0}catch(v){b=v,a.nb=!0,vd(a)||(c=!0)}}a.la=b;d&&
	(k=q(a.$c,a,!0),d=q(a.$c,a,!1),b instanceof F?(td(b,k,d),b.Uc=!0):b.then(k,d));c&&(b=new xd(b),wd[b.ob]=b,a.ic=b.ob)},od=function(){t.call(this)};r(od,t);od.prototype.message="Deferred has already fired";od.prototype.name="AlreadyCalledError";var ld=function(){t.call(this)};r(ld,t);ld.prototype.message="Deferred was canceled";ld.prototype.name="CanceledError";var xd=function(a){this.ob=l.setTimeout(q(this.Pe,this),0);this.K=a};
	xd.prototype.Pe=function(){w(wd[this.ob],"Cannot throw an error that is not scheduled.");delete wd[this.ob];throw this.K;};var wd={};var rd=function(a){var b=new xc;b.Ub=a;return yd(b)},yd=function(a){var b={},c=b.document||document,d;a instanceof xc&&a.constructor===xc&&a.Nd===wc?d=a.Ub:(za("expected object of type TrustedResourceUrl, got '"+a+"' of type "+m(a)),d="type_error:TrustedResourceUrl");var e=document.createElement("SCRIPT");a={vd:e,yb:void 0};var f=new F(zd,a),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){Ad(e,!0);kd(f,new Bd(1,"Timeout reached for loading script "+d))},k),a.yb=g);e.onload=
	e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Ad(e,b.af||!1,g),f.callback(null))};e.onerror=function(){Ad(e,!0,g);kd(f,new Bd(0,"Error while loading script "+d))};a=b.attributes||{};Wa(a,{type:"text/javascript",charset:"UTF-8",src:d});Cc(e,a);Cd(c).appendChild(e);return f},Cd=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},zd=function(){if(this&&this.vd){var a=this.vd;a&&"SCRIPT"==a.tagName&&
	Ad(a,!0,this.yb)}},Ad=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},Bd=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);t.call(this,c);this.code=a};r(Bd,t);var G=function(){wb.call(this);this.$=new Db(this);this.Qd=this;this.Ec=null};r(G,wb);G.prototype[zb]=!0;h=G.prototype;h.addEventListener=function(a,b,c,d){Jb(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){Sb(this,a,b,c,d)};
	h.dispatchEvent=function(a){Dd(this);var b,c=this.Ec;if(c){b=[];for(var d=1;c;c=c.Ec)b.push(c),w(1E3>++d,"infinite loop")}c=this.Qd;d=a.type||a;if(n(a))a=new xb(a,c);else if(a instanceof xb)a.target=a.target||c;else{var e=a;a=new xb(d,c);Wa(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.Ua&&0<=g;g--)f=a.currentTarget=b[g],e=Ed(f,d,!0,a)&&e;a.Ua||(f=a.currentTarget=c,e=Ed(f,d,!0,a)&&e,a.Ua||(e=Ed(f,d,!1,a)&&e));if(b)for(g=0;!a.Ua&&g<b.length;g++)f=a.currentTarget=b[g],e=Ed(f,d,!1,a)&&e;return e};
	h.Na=function(){G.Rc.Na.call(this);if(this.$){var a=this.$,b=0,c;for(c in a.v){for(var d=a.v[c],e=0;e<d.length;e++)++b,Cb(d[e]);delete a.v[c];a.zb--}}this.Ec=null};h.listen=function(a,b,c,d){Dd(this);return this.$.add(String(a),b,!1,c,d)};
	var Rb=function(a,b,c,d,e){a.$.add(String(b),c,!0,d,e)},Ed=function(a,b,c,d){b=a.$.v[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Za&&g.capture==c){var k=g.listener,v=g.Ib||g.src;g.Cb&&Fb(a.$,g);e=!1!==k.call(v,d)&&e}}return e&&0!=d.ud};G.prototype.vc=function(a,b,c,d){return this.$.vc(String(a),b,c,d)};var Dd=function(a){w(a.$,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var Fd="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},Gd=function(){};Gd.prototype.next=function(){throw Fd;};Gd.prototype.Pd=function(){return this};var H=function(a,b){this.aa={};this.s=[];this.hb=this.l=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};H.prototype.V=function(){Hd(this);for(var a=[],b=0;b<this.s.length;b++)a.push(this.aa[this.s[b]]);return a};H.prototype.ia=function(){Hd(this);return this.s.concat()};H.prototype.jb=function(a){return Id(this.aa,a)};
	H.prototype.remove=function(a){return Id(this.aa,a)?(delete this.aa[a],this.l--,this.hb++,this.s.length>2*this.l&&Hd(this),!0):!1};var Hd=function(a){if(a.l!=a.s.length){for(var b=0,c=0;b<a.s.length;){var d=a.s[b];Id(a.aa,d)&&(a.s[c++]=d);b++}a.s.length=c}if(a.l!=a.s.length){for(var e={},c=b=0;b<a.s.length;)d=a.s[b],Id(e,d)||(a.s[c++]=d,e[d]=1),b++;a.s.length=c}};h=H.prototype;h.get=function(a,b){return Id(this.aa,a)?this.aa[a]:b};
	h.set=function(a,b){Id(this.aa,a)||(this.l++,this.s.push(a),this.hb++);this.aa[a]=b};h.addAll=function(a){var b;a instanceof H?(b=a.ia(),a=a.V()):(b=Ra(a),a=Qa(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ia(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new H(this)};
	h.Pd=function(a){Hd(this);var b=0,c=this.hb,d=this,e=new Gd;e.next=function(){if(c!=d.hb)throw Error("The map has changed since the iterator was created");if(b>=d.s.length)throw Fd;var e=d.s[b++];return a?e:d.aa[e]};return e};var Id=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Jd=function(a){if(a.V&&"function"==typeof a.V)return a.V();if(n(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Qa(a)},Kd=function(a){if(a.ia&&"function"==typeof a.ia)return a.ia();if(!a.V||"function"!=typeof a.V){if(fa(a)||n(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Ra(a)}},Ld=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||n(a))x(a,b,void 0);else for(var c=Kd(a),d=Jd(a),e=
	d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var Md=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Md.prototype.dd=null;var Nd=0;Md.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Nd++;d||la();this.rb=a;this.ze=b;delete this.dd};Md.prototype.yd=function(a){this.rb=a};var Od=function(a){this.Ae=a;this.hd=this.qc=this.rb=this.m=null},Pd=function(a,b){this.name=a;this.value=b};Pd.prototype.toString=function(){return this.name};var Qd=new Pd("SEVERE",1E3),Rd=new Pd("CONFIG",700),Sd=new Pd("FINE",500);Od.prototype.getParent=function(){return this.m};Od.prototype.yd=function(a){this.rb=a};var Td=function(a){if(a.rb)return a.rb;if(a.m)return Td(a.m);za("Root logger has no level set.");return null};
	Od.prototype.log=function(a,b,c){if(a.value>=Td(this).value)for(p(b)&&(b=b()),a=new Md(a,String(b),this.Ae),c&&(a.dd=c),c="log:"+a.ze,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.hd)for(var e=0,f;f=b.hd[e];e++)f(d);c=c.getParent()}};
	var Ud={},Vd=null,Wd=function(a){Vd||(Vd=new Od(""),Ud[""]=Vd,Vd.yd(Rd));var b;if(!(b=Ud[a])){b=new Od(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Wd(a.substr(0,c));c.qc||(c.qc={});c.qc[d]=b;b.m=c;Ud[a]=b}return b};var I=function(a,b){a&&a.log(Sd,b,void 0)};var Xd=function(a,b,c){if(p(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},Yd=function(a){var b=null;return(new C(function(c,d){b=Xd(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).h(function(a){l.clearTimeout(b);throw a;})};var Zd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,$d=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var J=function(a){G.call(this);this.headers=new H;this.mc=a||null;this.oa=!1;this.lc=this.b=null;this.qb=this.md=this.Pb="";this.Ba=this.yc=this.Mb=this.sc=!1;this.eb=0;this.hc=null;this.td="";this.jc=this.Fe=this.Gd=!1};r(J,G);var ae=J.prototype,be=Wd("goog.net.XhrIo");ae.R=be;var ce=/^https?$/i,de=["POST","PUT"];
	J.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Pb+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Pb=a;this.qb="";this.md=b;this.sc=!1;this.oa=!0;this.b=this.mc?this.mc.kb():qc.kb();this.lc=this.mc?pc(this.mc):pc(qc);this.b.onreadystatechange=q(this.qd,this);this.Fe&&"onprogress"in this.b&&(this.b.onprogress=q(function(a){this.pd(a,!0)},this),this.b.upload&&(this.b.upload.onprogress=q(this.pd,this)));try{I(this.R,ee(this,"Opening Xhr")),
	this.yc=!0,this.b.open(b,String(a),!0),this.yc=!1}catch(f){I(this.R,ee(this,"Error opening Xhr: "+f.message));this.K(5,f);return}a=c||"";var e=this.headers.clone();d&&Ld(d,function(a,b){e.set(b,a)});d=Ia(e.ia());c=l.FormData&&a instanceof l.FormData;!Ja(de,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.td&&(this.b.responseType=this.td);"withCredentials"in this.b&&this.b.withCredentials!==this.Gd&&(this.b.withCredentials=
	this.Gd);try{fe(this),0<this.eb&&(this.jc=ge(this.b),I(this.R,ee(this,"Will abort after "+this.eb+"ms if incomplete, xhr2 "+this.jc)),this.jc?(this.b.timeout=this.eb,this.b.ontimeout=q(this.yb,this)):this.hc=Xd(this.yb,this.eb,this)),I(this.R,ee(this,"Sending request")),this.Mb=!0,this.b.send(a),this.Mb=!1}catch(f){I(this.R,ee(this,"Send error: "+f.message)),this.K(5,f)}};var ge=function(a){return z&&A(9)&&ga(a.timeout)&&void 0!==a.ontimeout},Ha=function(a){return"content-type"==a.toLowerCase()};
	J.prototype.yb=function(){"undefined"!=typeof aa&&this.b&&(this.qb="Timed out after "+this.eb+"ms, aborting",I(this.R,ee(this,this.qb)),this.dispatchEvent("timeout"),this.abort(8))};J.prototype.K=function(a,b){this.oa=!1;this.b&&(this.Ba=!0,this.b.abort(),this.Ba=!1);this.qb=b;he(this);ie(this)};var he=function(a){a.sc||(a.sc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
	J.prototype.abort=function(){this.b&&this.oa&&(I(this.R,ee(this,"Aborting")),this.oa=!1,this.Ba=!0,this.b.abort(),this.Ba=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ie(this))};J.prototype.Na=function(){this.b&&(this.oa&&(this.oa=!1,this.Ba=!0,this.b.abort(),this.Ba=!1),ie(this,!0));J.Rc.Na.call(this)};J.prototype.qd=function(){this.isDisposed()||(this.yc||this.Mb||this.Ba?je(this):this.De())};J.prototype.De=function(){je(this)};
	var je=function(a){if(a.oa&&"undefined"!=typeof aa)if(a.lc[1]&&4==ke(a)&&2==le(a))I(a.R,ee(a,"Local request error detected and ignored"));else if(a.Mb&&4==ke(a))Xd(a.qd,0,a);else if(a.dispatchEvent("readystatechange"),4==ke(a)){I(a.R,ee(a,"Request complete"));a.oa=!1;try{var b=le(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Pb).match(Zd)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
	f=g.substr(0,g.length-1);e=!ce.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<ke(a)?a.b.statusText:""}catch(v){I(a.R,"Can not get status: "+v.message),k=""}a.qb=k+" ["+le(a)+"]";he(a)}}finally{ie(a)}}};J.prototype.pd=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(me(a,"progress"));this.dispatchEvent(me(a,b?"downloadprogress":"uploadprogress"))};
	var me=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},ie=function(a,b){if(a.b){fe(a);var c=a.b,d=a.lc[0]?ba:null;a.b=null;a.lc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.R)&&a.log(Qd,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},fe=function(a){a.b&&a.jc&&(a.b.ontimeout=null);ga(a.hc)&&(l.clearTimeout(a.hc),a.hc=null)},ke=function(a){return a.b?a.b.readyState:0},le=function(a){try{return 2<ke(a)?
	a.b.status:-1}catch(b){return-1}},ne=function(a){try{return a.b?a.b.responseText:""}catch(b){return I(a.R,"Can not get responseText: "+b.message),""}},ee=function(a,b){return b+" ["+a.md+" "+a.Pb+" "+le(a)+"]"};var oe=function(a,b){this.ha=this.Ga=this.ca="";this.Ta=null;this.Aa=this.qa="";this.N=this.te=!1;var c;a instanceof oe?(this.N=void 0!==b?b:a.N,pe(this,a.ca),c=a.Ga,K(this),this.Ga=c,qe(this,a.ha),re(this,a.Ta),se(this,a.qa),te(this,a.Y.clone()),a=a.Aa,K(this),this.Aa=a):a&&(c=String(a).match(Zd))?(this.N=!!b,pe(this,c[1]||"",!0),a=c[2]||"",K(this),this.Ga=ue(a),qe(this,c[3]||"",!0),re(this,c[4]),se(this,c[5]||"",!0),te(this,c[6]||"",!0),a=c[7]||"",K(this),this.Aa=ue(a)):(this.N=!!b,this.Y=new L(null,
	0,this.N))};oe.prototype.toString=function(){var a=[],b=this.ca;b&&a.push(ve(b,we,!0),":");var c=this.ha;if(c||"file"==b)a.push("//"),(b=this.Ga)&&a.push(ve(b,we,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Ta,null!=c&&a.push(":",String(c));if(c=this.qa)this.ha&&"/"!=c.charAt(0)&&a.push("/"),a.push(ve(c,"/"==c.charAt(0)?xe:ye,!0));(c=this.Y.toString())&&a.push("?",c);(c=this.Aa)&&a.push("#",ve(c,ze));return a.join("")};
	oe.prototype.resolve=function(a){var b=this.clone(),c=!!a.ca;c?pe(b,a.ca):c=!!a.Ga;if(c){var d=a.Ga;K(b);b.Ga=d}else c=!!a.ha;c?qe(b,a.ha):c=null!=a.Ta;d=a.qa;if(c)re(b,a.Ta);else if(c=!!a.qa){if("/"!=d.charAt(0))if(this.ha&&!this.qa)d="/"+d;else{var e=b.qa.lastIndexOf("/");-1!=e&&(d=b.qa.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(u(e,"./")||u(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||
	1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?se(b,d):c=""!==a.Y.toString();c?te(b,a.Y.clone()):c=!!a.Aa;c&&(a=a.Aa,K(b),b.Aa=a);return b};oe.prototype.clone=function(){return new oe(this)};
	var pe=function(a,b,c){K(a);a.ca=c?ue(b,!0):b;a.ca&&(a.ca=a.ca.replace(/:$/,""))},qe=function(a,b,c){K(a);a.ha=c?ue(b,!0):b},re=function(a,b){K(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ta=b}else a.Ta=null},se=function(a,b,c){K(a);a.qa=c?ue(b,!0):b},te=function(a,b,c){K(a);b instanceof L?(a.Y=b,a.Y.Oc(a.N)):(c||(b=ve(b,Ae)),a.Y=new L(b,0,a.N))},M=function(a,b,c){K(a);a.Y.set(b,c)},Be=function(a,b){K(a);a.Y.remove(b)},K=function(a){if(a.te)throw Error("Tried to modify a read-only Uri");
	};oe.prototype.Oc=function(a){this.N=a;this.Y&&this.Y.Oc(a);return this};
	var Ce=function(a){return a instanceof oe?a.clone():new oe(a,void 0)},De=function(a,b){var c=new oe(null,void 0);pe(c,"https");a&&qe(c,a);b&&se(c,b);return c},ue=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},ve=function(a,b,c){return n(a)?(a=encodeURI(a).replace(b,Ee),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Ee=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},we=/[#\/\?@]/g,ye=/[\#\?:]/g,xe=/[\#\?]/g,Ae=/[\#\?@]/g,
	ze=/#/g,L=function(a,b,c){this.l=this.g=null;this.J=a||null;this.N=!!c},Fe=function(a){a.g||(a.g=new H,a.l=0,a.J&&$d(a.J,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},He=function(a){var b=Kd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new L(null,0,void 0);a=Jd(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ea(f)?Ge(c,e,f):c.add(e,f)}return c};h=L.prototype;
	h.add=function(a,b){Fe(this);this.J=null;a=this.M(a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.l=Aa(this.l)+1;return this};h.remove=function(a){Fe(this);a=this.M(a);return this.g.jb(a)?(this.J=null,this.l=Aa(this.l)-this.g.get(a).length,this.g.remove(a)):!1};h.jb=function(a){Fe(this);a=this.M(a);return this.g.jb(a)};h.ia=function(){Fe(this);for(var a=this.g.V(),b=this.g.ia(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
	h.V=function(a){Fe(this);var b=[];if(n(a))this.jb(a)&&(b=Na(b,this.g.get(this.M(a))));else{a=this.g.V();for(var c=0;c<a.length;c++)b=Na(b,a[c])}return b};h.set=function(a,b){Fe(this);this.J=null;a=this.M(a);this.jb(a)&&(this.l=Aa(this.l)-this.g.get(a).length);this.g.set(a,[b]);this.l=Aa(this.l)+1;return this};h.get=function(a,b){a=a?this.V(a):[];return 0<a.length?String(a[0]):b};var Ge=function(a,b,c){a.remove(b);0<c.length&&(a.J=null,a.g.set(a.M(b),Oa(c)),a.l=Aa(a.l)+c.length)};
	L.prototype.toString=function(){if(this.J)return this.J;if(!this.g)return"";for(var a=[],b=this.g.ia(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.V(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.J=a.join("&")};L.prototype.clone=function(){var a=new L;a.J=this.J;this.g&&(a.g=this.g.clone(),a.l=this.l);return a};L.prototype.M=function(a){a=String(a);this.N&&(a=a.toLowerCase());return a};
	L.prototype.Oc=function(a){a&&!this.N&&(Fe(this),this.J=null,this.g.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),Ge(this,b,a))},this));this.N=a};var Ie=function(){var a=N();return z&&!!nb&&11==nb||/Edge\/\d+/.test(a)},Je=function(){return l.window&&l.window.location.href||""},Ke=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ea(a[d])?Ta(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<Ke(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},Me=function(){var a;a=N();a="Chrome"!=Le(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],
	10):null;return a&&30>a?!1:!z||!nb||9<nb},Ne=function(a){a=(a||N()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},Oe=function(a){a=a||l.window;try{a.close()}catch(b){}},Pe=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,
	statusbar:!0,toolbar:!1};c=N().toLowerCase();d&&(b.target=d,u(c,"crios/")&&(b.target="_blank"));"Firefox"==Le(N())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof B?c:fc("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+"="+(d[g]?1:0))}g=e.join(",");(y("iPhone")&&!y("iPod")&&
	!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),"undefined"!=typeof HTMLAnchorElement&&"undefined"!=typeof Location&&"undefined"!=typeof Element&&(e=g&&(g instanceof HTMLAnchorElement||!(g instanceof Location||g instanceof Element)),f=ha(g)?g.constructor.displayName||g.constructor.name||Object.prototype.toString.call(g):void 0===g?"undefined":null===g?"null":typeof g,w(e,"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",
	f)),b=b instanceof B?b:fc(b),g.href=cc(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=cc(b),g&&(eb&&u(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=ac("b/12014412, meta tag with sanitized URL"),va.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(pa,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(qa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(ra,
	"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(sa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(ta,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ua,"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Ba($b(a),"must provide justification"),w(!/^[\s\xa0]*$/.test($b(a)),"must provide non-empty justification"),g.document.write(Ac((new zc).re(d))),g.document.close())):g=a.open(cc(b),c,g);if(g)try{g.focus()}catch(k){}return g},Qe=function(a){return new C(function(b){var c=function(){Yd(2E3).then(function(){if(!a||
	a.closed)b();else return c()})};return c()})},Re=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Se=function(){var a=null;return(new C(function(b){"complete"==l.document.readyState?b():(a=function(){b()},Qb(window,"load",a))})).h(function(b){Sb(window,"load",a);throw b;})},O=function(a){switch(a||l.navigator&&l.navigator.product||""){case "ReactNative":return"ReactNative";default:return"undefined"!==typeof l.process?"Node":"Browser"}},Te=function(){var a=O();return"ReactNative"===a||"Node"===a},Le=function(a){var b=
	a.toLowerCase();if(u(b,"opera/")||u(b,"opr/")||u(b,"opios/"))return"Opera";if(u(b,"iemobile"))return"IEMobile";if(u(b,"msie")||u(b,"trident/"))return"IE";if(u(b,"edge/"))return"Edge";if(u(b,"firefox/"))return"Firefox";if(u(b,"silk/"))return"Silk";if(u(b,"blackberry"))return"Blackberry";if(u(b,"webos"))return"Webos";if(!u(b,"safari/")||u(b,"chrome/")||u(b,"crios/")||u(b,"android"))if(!u(b,"chrome/")&&!u(b,"crios/")||u(b,"edge/")){if(u(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
	2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},Ue=function(a){var b=O(void 0);return("Browser"===b?Le(N()):b)+"/JsCore/"+a},N=function(){return l.navigator&&l.navigator.userAgent||""},Ve=function(a){a=a.split(".");for(var b=l,c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},Xe=function(){var a;if(!(a=!l.location||!l.location.protocol||"http:"!=l.location.protocol&&"https:"!=l.location.protocol||Te())){var b;a:{try{var c=l.localStorage,
	d=We();if(c){c.setItem(d,"1");c.removeItem(d);b=Ie()?!!l.indexedDB:!0;break a}}catch(e){}b=!1}a=!b}return!a},Ye=function(a){a=a||N();return Ne(a)||"Firefox"==Le(a)?!1:!0},Ze=function(a){return"undefined"===typeof a?null:kc(a)},$e=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},af=function(a){if(null!==a){var b;try{b=hc(a)}catch(c){try{b=JSON.parse(a)}catch(d){throw c;}}return b}},We=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},
	bf=function(a){a=a||N();return"Safari"==Le(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},cf=function(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null},df=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");this.Me=a;this.ye=b;a=d||O();this.se=Ne(c||N())||"ReactNative"===a};df.prototype.get=function(){return this.se?this.ye:this.Me};var ef;try{var ff={};Object.defineProperty(ff,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(ff,"abcd",{configurable:!0,enumerable:!0,value:2});ef=2==ff.abcd}catch(a){ef=!1}
	var P=function(a,b,c){ef?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},gf=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&P(a,c,b[c])},hf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},jf=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},kf=function(a){var b=a;if("object"==typeof a&&null!=a){var b="length"in a?[]:{},c;for(c in a)P(b,c,
	kf(a[c]))}return b};var lf=["client_id","response_type","scope","redirect_uri","state"],mf={Hd:{ub:500,tb:600,providerId:"facebook.com",ac:lf},Id:{ub:500,tb:620,providerId:"github.com",ac:lf},Jd:{ub:515,tb:680,providerId:"google.com",ac:lf},Od:{ub:485,tb:705,providerId:"twitter.com",ac:"oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")}},nf=function(a){for(var b in mf)if(mf[b].providerId==a)return mf[b];return null},of=function(a){return(a=nf(a))&&
	a.ac||[]};var Q=function(a,b){this.code="auth/"+a;this.message=b||pf[a]||""};r(Q,Error);Q.prototype.I=function(){return{name:this.code,code:this.code,message:this.message}};
	var pf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
	"email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.",
	"invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
	"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
	"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',
	"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
	"user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var qf=function(a,b,c,d,e){this.wa=a;this.U=b||null;this.gb=c||null;this.cc=d||null;this.K=e||null;if(this.gb||this.K){if(this.gb&&this.K)throw new Q("invalid-auth-event");if(this.gb&&!this.cc)throw new Q("invalid-auth-event");}else throw new Q("invalid-auth-event");};qf.prototype.getError=function(){return this.K};qf.prototype.I=function(){return{type:this.wa,eventId:this.U,urlResponse:this.gb,sessionId:this.cc,error:this.K&&this.K.I()}};var rf=function(a){var b="unauthorized-domain",c=void 0,d=Ce(a);a=d.ha;d=d.ca;"http"!=d&&"https"!=d?b="operation-not-supported-in-this-environment":c=ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a);Q.call(this,b,c)};r(rf,Q);var sf=function(a){this.xe=a.sub;la();this.Db=a.email||null};var tf=function(a,b,c,d){var e={};ha(c)?e=c:b&&n(c)&&n(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&&n(c)&&(e={accessToken:c});if(b||!e.idToken&&!e.accessToken)if(b&&e.oauthToken&&e.oauthTokenSecret)P(this,"accessToken",e.oauthToken),P(this,"secret",e.oauthTokenSecret);else{if(b)throw new Q("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");throw new Q("argument-error","credential failed: expected 1 argument (the OAuth access token).");}else e.idToken&&P(this,
	"idToken",e.idToken),e.accessToken&&P(this,"accessToken",e.accessToken);P(this,"provider",a)};tf.prototype.Fb=function(a){return uf(a,vf(this))};tf.prototype.nd=function(a,b){var c=vf(this);c.idToken=b;return wf(a,c)};var vf=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:He(b).toString(),requestUri:Xe()?Je():"http://localhost"}};
	tf.prototype.I=function(){var a={provider:this.provider};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
	var xf=function(a,b,c){var d=!!b,e=c||[];b=function(){gf(this,{providerId:a,isOAuthProvider:!0});this.Nc=[];this.ad={};"google.com"==a&&this.addScope("profile")};d||(b.prototype.addScope=function(a){Ja(this.Nc,a)||this.Nc.push(a)});b.prototype.setCustomParameters=function(a){this.ad=Ua(a)};b.prototype.fe=function(){var a=$e(this.ad),b;for(b in a)a[b]=a[b].toString();a=Ua(a);for(b=0;b<e.length;b++){var c=e[b];c in a&&delete a[c]}return a};b.prototype.ge=function(){return Oa(this.Nc)};b.credential=
	function(b,c){return new tf(a,d,b,c)};gf(b,{PROVIDER_ID:a});return b},yf=xf("facebook.com",!1,of("facebook.com"));yf.prototype.addScope=yf.prototype.addScope||void 0;var zf=xf("github.com",!1,of("github.com"));zf.prototype.addScope=zf.prototype.addScope||void 0;var Af=xf("google.com",!1,of("google.com"));Af.prototype.addScope=Af.prototype.addScope||void 0;
	Af.credential=function(a,b){if(!a&&!b)throw new Q("argument-error","credential failed: must provide the ID token and/or the access token.");return new tf("google.com",!1,ha(a)?a:{idToken:a||null,accessToken:b||null})};var Bf=xf("twitter.com",!0,of("twitter.com")),Cf=function(a,b){this.Db=a;this.Fc=b;P(this,"provider","password")};Cf.prototype.Fb=function(a){return R(a,Df,{email:this.Db,password:this.Fc})};Cf.prototype.nd=function(a,b){return R(a,Ef,{idToken:b,email:this.Db,password:this.Fc})};
	Cf.prototype.I=function(){return{email:this.Db,password:this.Fc}};var Ff=function(){gf(this,{providerId:"password",isOAuthProvider:!1})};gf(Ff,{PROVIDER_ID:"password"});var Gf={Ze:Ff,Hd:yf,Jd:Af,Id:zf,Od:Bf},Hf=function(a){var b=a&&a.providerId;if(!b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;for(var e in Gf)if(Gf[e].PROVIDER_ID==b)try{return Gf[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d})}catch(f){break}return null};var If=function(a,b,c,d){Q.call(this,a,d);P(this,"email",b);P(this,"credential",c)};r(If,Q);If.prototype.I=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.I();b&&(Wa(a,b),a.providerId=b.provider,delete a.provider);return a};var Jf=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));return a.email?new If(b,a.email,Hf(a),a.message):new Q(b,a.message||void 0)}return null};var Kf=function(a){this.Ye=a};r(Kf,oc);Kf.prototype.kb=function(){return new this.Ye};Kf.prototype.Ob=function(){return{}};
	var S=function(a,b,c){var d;d="Node"==O();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new Q("internal-error","The XMLHttpRequest compatibility library was not found.");this.i=a;a=b||{};this.Ie=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.Je=a.secureTokenTimeout||Lf;this.wd=Ua(a.secureTokenHeaders||Mf);this.be=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.ce=a.firebaseTimeout||
	Nf;this.fd=Ua(a.firebaseHeaders||Of);c&&(this.fd["X-Client-Version"]=c,this.wd["X-Client-Version"]=c);this.Td=new tc;this.Xe=new Kf(d)},Pf,Lf=new df(1E4,3E4),Mf={"Content-Type":"application/x-www-form-urlencoded"},Nf=new df(1E4,3E4),Of={"Content-Type":"application/json"},Rf=function(a,b,c,d,e,f,g){Me()?a=q(a.Le,a):(Pf||(Pf=new C(function(a,b){Qf(a,b)})),a=q(a.Ke,a));a(b,c,d,e,f,g)};
	S.prototype.Le=function(a,b,c,d,e,f){var g="Node"==O(),k=Te()?g?new J(this.Xe):new J:new J(this.Td),v;f&&(k.eb=Math.max(0,f),v=setTimeout(function(){k.dispatchEvent("timeout")},f));k.listen("complete",function(){v&&clearTimeout(v);var a=null;try{var c;c=this.b?hc(this.b.responseText):void 0;a=c||null}catch(Ei){try{a=JSON.parse(ne(this))||null}catch(Fi){a=null}}b&&b(a)});Rb(k,"ready",function(){v&&clearTimeout(v);this.za||(this.za=!0,this.Na())});Rb(k,"timeout",function(){v&&clearTimeout(v);this.za||
	(this.za=!0,this.Na());b&&b(null)});k.send(a,c,d,e)};var sd="__fcb"+Math.floor(1E6*Math.random()).toString(),Qf=function(a,b){((window.gapi||{}).client||{}).request?a():(l[sd]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},ud(function(){b(Error("CORS_UNSUPPORTED"))}))};
	S.prototype.Ke=function(a,b,c,d,e){var f=this;Pf.then(function(){window.gapi.client.setApiKey(f.i);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).h(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
	var Tf=function(a,b){return new C(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Rf(a,a.Ie+"?key="+encodeURIComponent(a.i),function(a){a?a.error?d(Sf(a)):a.access_token&&a.refresh_token?c(a):d(new Q("internal-error")):d(new Q("network-request-failed"))},"POST",He(b).toString(),a.wd,a.Je.get()):d(new Q("internal-error"))})},Uf=function(a,b,c,d,e){var f=a.be+b+"?key="+encodeURIComponent(a.i);e&&(f+="&cb="+la().toString());return new C(function(b,
	e){Rf(a,f,function(a){a?a.error?e(Sf(a)):b(a):e(new Q("network-request-failed"))},c,kc($e(d)),a.fd,a.ce.get())})},Vf=function(a){if(!Xb.test(a.email))throw new Q("invalid-email");},Wf=function(a){"email"in a&&Vf(a)},Yf=function(a,b){var c=Xe()?Je():"http://localhost";return R(a,Xf,{identifier:b,continueUri:c}).then(function(a){return a.allProviders||[]})},$f=function(a){return R(a,Zf,{}).then(function(a){return a.authorizedDomains||[]})},ag=function(a){if(!a.idToken)throw new Q("internal-error");
	};S.prototype.signInAnonymously=function(){return R(this,bg,{})};S.prototype.updateEmail=function(a,b){return R(this,cg,{idToken:a,email:b})};S.prototype.updatePassword=function(a,b){return R(this,Ef,{idToken:a,password:b})};var dg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};S.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Pa(dg,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return R(this,cg,c)};
	S.prototype.sendPasswordResetEmail=function(a){return R(this,eg,{requestType:"PASSWORD_RESET",email:a})};S.prototype.sendEmailVerification=function(a){return R(this,fg,{requestType:"VERIFY_EMAIL",idToken:a})};
	var hg=function(a,b,c){return R(a,gg,{idToken:b,deleteProvider:c})},ig=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new Q("internal-error");},jg=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Jf(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Jf(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=Jf(a));if(b)throw b;if(!a.idToken)throw new Q("internal-error");},uf=function(a,
	b){b.returnIdpCredential=!0;return R(a,kg,b)},wf=function(a,b){b.returnIdpCredential=!0;return R(a,lg,b)},mg=function(a){if(!a.oobCode)throw new Q("invalid-action-code");};S.prototype.confirmPasswordReset=function(a,b){return R(this,ng,{oobCode:a,newPassword:b})};S.prototype.checkActionCode=function(a){return R(this,og,{oobCode:a})};S.prototype.applyActionCode=function(a){return R(this,pg,{oobCode:a})};
	var pg={endpoint:"setAccountInfo",F:mg,bb:"email"},og={endpoint:"resetPassword",F:mg,ua:function(a){if(!a.email||!a.requestType)throw new Q("internal-error");}},qg={endpoint:"signupNewUser",F:function(a){Vf(a);if(!a.password)throw new Q("weak-password");},ua:ag,va:!0},Xf={endpoint:"createAuthUri"},rg={endpoint:"deleteAccount",$a:["idToken"]},gg={endpoint:"setAccountInfo",$a:["idToken","deleteProvider"],F:function(a){if(!ea(a.deleteProvider))throw new Q("internal-error");}},sg={endpoint:"getAccountInfo"},
	fg={endpoint:"getOobConfirmationCode",$a:["idToken","requestType"],F:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new Q("internal-error");},bb:"email"},eg={endpoint:"getOobConfirmationCode",$a:["requestType"],F:function(a){if("PASSWORD_RESET"!=a.requestType)throw new Q("internal-error");Vf(a)},bb:"email"},Zf={Sd:!0,endpoint:"getProjectConfig",ne:"GET"},ng={endpoint:"resetPassword",F:mg,bb:"email"},cg={endpoint:"setAccountInfo",$a:["idToken"],F:Wf,va:!0},Ef={endpoint:"setAccountInfo",$a:["idToken"],
	F:function(a){Wf(a);if(!a.password)throw new Q("weak-password");},ua:ag,va:!0},bg={endpoint:"signupNewUser",ua:ag,va:!0},kg={endpoint:"verifyAssertion",F:ig,ua:jg,va:!0},lg={endpoint:"verifyAssertion",F:function(a){ig(a);if(!a.idToken)throw new Q("internal-error");},ua:jg,va:!0},tg={endpoint:"verifyCustomToken",F:function(a){if(!a.token)throw new Q("invalid-custom-token");},ua:ag,va:!0},Df={endpoint:"verifyPassword",F:function(a){Vf(a);if(!a.password)throw new Q("wrong-password");},ua:ag,va:!0},R=
	function(a,b,c){if(!jf(c,b.$a))return E(new Q("internal-error"));var d=b.ne||"POST",e;return D(c).then(b.F).then(function(){b.va&&(c.returnSecureToken=!0);return Uf(a,b.endpoint,d,c,b.Sd||!1)}).then(function(a){return e=a}).then(b.ua).then(function(){if(!b.bb)return e;if(!(b.bb in e))throw new Q("internal-error");return e[b.bb]})},Sf=function(a){var b,c;c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?
	new Q(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",
	FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",
	USER_CANCELLED:"user-cancelled"};b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new Q(d[e],b);!b&&a&&(b=Ze(a));return new Q("internal-error",b)};var ug=function(a){this.S=a};ug.prototype.value=function(){return this.S};ug.prototype.zd=function(a){this.S.style=a;return this};var vg=function(a){this.S=a||{}};vg.prototype.value=function(){return this.S};vg.prototype.zd=function(a){this.S.style=a;return this};var xg=function(a){this.We=a;this.Kb=null;this.Cc=wg(this)};xg.prototype.Dc=function(){return this.Cc};
	var yg=function(a){var b=new vg;b.S.where=document.body;b.S.url=a.We;b.S.messageHandlersFilter=Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.S.attributes=b.S.attributes||{};(new ug(b.S.attributes)).zd({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.S.dontclear=!0;return b},wg=function(a){return zg().then(function(){return new C(function(b,c){Ve("gapi.iframes.getContext")().open(yg(a).value(),function(d){a.Kb=d;a.Kb.restyle({setHideOnLeave:!1});var e=setTimeout(function(){c(Error("Network Error"))},
	Ag.get()),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})};xg.prototype.sendMessage=function(a){var b=this;return this.Cc.then(function(){return new C(function(c){b.Kb.send(a.type,a,c,Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})};
	var Bg=function(a,b){a.Cc.then(function(){a.Kb.register("authEvent",b,Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Cg=new df(3E3,15E3),Ag=new df(5E3,15E3),zg=function(){return new C(function(a,b){var c=function(){cf();Ve("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){cf();b(Error("Network Error"))},timeout:Cg.get()})};if(Ve("gapi.iframes.Iframe"))a();else if(Ve("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){Ve("gapi.load")?c():
	b(Error("Network Error"))};D(rd("https://apis.google.com/js/api.js?onload="+d)).h(function(){b(Error("Network Error"))})}})};var Dg=function(a,b,c){this.A=a;this.i=b;this.C=c;this.Ha=null;this.o=De(this.A,"/__/auth/iframe");M(this.o,"apiKey",this.i);M(this.o,"appName",this.C)};Dg.prototype.setVersion=function(a){this.Ha=a;return this};Dg.prototype.toString=function(){this.Ha?M(this.o,"v",this.Ha):Be(this.o,"v");return this.o.toString()};
	var Eg=function(a,b,c,d,e){this.A=a;this.i=b;this.C=c;this.Rd=d;this.Ha=this.U=this.Lc=null;this.Vb=e;this.o=De(this.A,"/__/auth/handler");M(this.o,"apiKey",this.i);M(this.o,"appName",this.C);M(this.o,"authType",this.Rd)};Eg.prototype.setVersion=function(a){this.Ha=a;return this};
	Eg.prototype.toString=function(){if(this.Vb.isOAuthProvider){M(this.o,"providerId",this.Vb.providerId);var a=this.Vb.ge();a&&a.length&&M(this.o,"scopes",a.join(","));a=this.Vb.fe();Sa(a)||M(this.o,"customParameters",Ze(a))}this.Lc?M(this.o,"redirectUrl",this.Lc):Be(this.o,"redirectUrl");this.U?M(this.o,"eventId",this.U):Be(this.o,"eventId");this.Ha?M(this.o,"v",this.Ha):Be(this.o,"v");return this.o.toString()};
	var Gg=function(a,b,c,d){this.A=a;this.i=b;this.C=c;d=this.ya=d||null;this.oe=(new Dg(a,b,c)).setVersion(d).toString();this.xc=new xg(this.oe);this.Ab=[];Fg(this)};Gg.prototype.Dc=function(){return this.xc.Dc()};
	var Hg=function(a,b,c,d,e,f,g,k){a=new Eg(a,b,c,d,e);a.Lc=f;a.U=g;return a.setVersion(k).toString()},Fg=function(a){Bg(a.xc,function(b){var c={};if(b&&b.authEvent){var d=!1;b=b.authEvent||{};if(b.type){if(c=b.error)var e=(c=b.error)&&(c.name||c.code),c=e?new Q(e.substring(5),c.message):null;b=new qf(b.type,b.eventId,b.urlResponse,b.sessionId,c)}else b=null;for(c=0;c<a.Ab.length;c++)d=a.Ab[c](b)||d;c={};c.status=d?"ACK":"ERROR";return D(c)}c.status="ERROR";return D(c)})},Ig=function(a){return a.xc.sendMessage({type:"webStorageSupport"}).then(function(a){if(a&&
	a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})},Jg=function(a,b){Ma(a.Ab,function(a){return a==b})};var Kg=function(a){this.u=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.u)throw new Q("internal-error","The React Native compatibility library was not found.");};h=Kg.prototype;h.get=function(a){return D(this.u.getItem(a)).then(function(a){return a&&af(a)})};h.set=function(a,b){return D(this.u.setItem(a,Ze(b)))};h.remove=function(a){return D(this.u.removeItem(a))};h.Ja=function(){};h.Ya=function(){};var Lg=function(){this.u={}};h=Lg.prototype;h.get=function(a){return D(this.u[a])};h.set=function(a,b){this.u[a]=b;return D()};h.remove=function(a){delete this.u[a];return D()};h.Ja=function(){};h.Ya=function(){};var Ng=function(){if(!Mg()){if("Node"==O())throw new Q("internal-error","The LocalStorage compatibility library was not found.");throw new Q("web-storage-unsupported");}this.u=l.localStorage||firebase.INTERNAL.node.localStorage},Mg=function(){var a="Node"==O(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Ng.prototype;
	h.get=function(a){var b=this;return D().then(function(){var c=b.u.getItem(a);return af(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=Ze(b);null===d?c.remove(a):c.u.setItem(a,d)})};h.remove=function(a){var b=this;return D().then(function(){b.u.removeItem(a)})};h.Ja=function(a){l.window&&Jb(l.window,"storage",a)};h.Ya=function(a){l.window&&Sb(l.window,"storage",a)};var Og=function(){this.u={}};h=Og.prototype;h.get=function(){return D(null)};h.set=function(){return D()};h.remove=function(){return D()};h.Ja=function(){};h.Ya=function(){};var Qg=function(){if(!Pg()){if("Node"==O())throw new Q("internal-error","The SessionStorage compatibility library was not found.");throw new Q("web-storage-unsupported");}this.u=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},Pg=function(){var a="Node"==O(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Qg.prototype;
	h.get=function(a){var b=this;return D().then(function(){var c=b.u.getItem(a);return af(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=Ze(b);null===d?c.remove(a):c.u.setItem(a,d)})};h.remove=function(a){var b=this;return D().then(function(){b.u.removeItem(a)})};h.Ja=function(){};h.Ya=function(){};var Rg=function(a,b,c,d,e,f){if(!window.indexedDB)throw new Q("web-storage-unsupported");this.Vd=a;this.Bc=b;this.rc=c;this.Fd=d;this.hb=e;this.P={};this.wb=[];this.sb=0;this.pe=f||l.indexedDB},Sg,Tg=function(a){return new C(function(b,c){var d=a.pe.open(a.Vd,a.hb);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Bc,{keyPath:a.rc})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},Ug=function(a){a.kd||(a.kd=
	Tg(a));return a.kd},Vg=function(a,b){return b.objectStore(a.Bc)},Wg=function(a,b,c){return b.transaction([a.Bc],c?"readwrite":"readonly")},Xg=function(a){return new C(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=Rg.prototype;
	h.set=function(a,b){var c=!1,d,e=this;return bd(Ug(this).then(function(b){d=b;b=Vg(e,Wg(e,d,!0));return Xg(b.get(a))}).then(function(f){var g=Vg(e,Wg(e,d,!0));if(f)return f.value=b,Xg(g.put(f));e.sb++;c=!0;f={};f[e.rc]=a;f[e.Fd]=b;return Xg(g.add(f))}).then(function(){e.P[a]=b}),function(){c&&e.sb--})};h.get=function(a){var b=this;return Ug(this).then(function(c){return Xg(Vg(b,Wg(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
	h.remove=function(a){var b=!1,c=this;return bd(Ug(this).then(function(d){b=!0;c.sb++;return Xg(Vg(c,Wg(c,d,!0))["delete"](a))}).then(function(){delete c.P[a]}),function(){b&&c.sb--})};
	h.Oe=function(){var a=this;return Ug(this).then(function(b){var c=Vg(a,Wg(a,b,!1));return c.getAll?Xg(c.getAll()):new C(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.sb){for(d=0;d<b.length;d++)c[b[d][a.rc]]=b[d][a.Fd];d=Ke(a.P,c);a.P=c}return d})};h.Ja=function(a){0==this.wb.length&&this.Qc();this.wb.push(a)};
	h.Ya=function(a){Ma(this.wb,function(b){return b==a});0==this.wb.length&&this.ec()};h.Qc=function(){var a=this;this.ec();var b=function(){a.Hc=Yd(800).then(q(a.Oe,a)).then(function(b){0<b.length&&x(a.wb,function(a){a(b)})}).then(b).h(function(a){"STOP_EVENT"!=a.message&&b()});return a.Hc};b()};h.ec=function(){this.Hc&&this.Hc.cancel("STOP_EVENT")};var ah=function(){this.cd={Browser:Yg,Node:Zg,ReactNative:$g}[O()]},bh,Yg={X:Ng,Sc:Qg},Zg={X:Ng,Sc:Qg},$g={X:Kg,Sc:Og};var ch=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;P(this,"operation",a);P(this,"data",kf(b))};var dh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),T=function(a,b){return{name:a||"",ea:"a valid string",optional:!!b,fa:n}},U=function(a){return{name:a||"",ea:"a valid object",optional:!1,fa:ha}},eh=function(a,b){return{name:a||"",ea:"a function",optional:!!b,fa:p}},fh=function(){return{name:"",ea:"null",optional:!1,fa:da}},gh=function(){return{name:"credential",ea:"a valid credential",optional:!1,fa:function(a){return!(!a||!a.Fb)}}},hh=function(){return{name:"authProvider",
	ea:"a valid Auth provider",optional:!1,fa:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},ih=function(a,b,c,d){return{name:c||"",ea:a.ea+" or "+b.ea,optional:!!d,fa:function(c){return a.fa(c)||b.fa(c)}}};var kh=function(a,b){for(var c in b){var d=b[c].name;a[d]=jh(d,a[c],b[c].a)}},V=function(a,b,c,d){a[b]=jh(b,c,d)},jh=function(a,b,c){if(!c)return b;var d=lh(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var v=!1,oa=0;oa<c.length;oa++)if(c[oa].optional)v=!0;else{if(v)throw new Q("internal-error","Argument validator encountered a required argument after an optional argument.");k++}v=c.length;if(e.length<k||v<e.length)e="Expected "+(k==
	v?1==k?"1 argument":k+" arguments":k+"-"+v+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(v=c[k].optional&&void 0===e[k],!c[k].fa(e[k])&&!v){e=c[k];if(0>k||k>=dh.length)throw new Q("internal-error","Argument validator received an unsupported number of arguments.");e=dh[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.ea+".";break a}e=null}}if(e)throw new Q("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
	b.prototype[e];return a},lh=function(a){a=a.split(".");return a[a.length-1]};var mh=function(a,b,c,d){this.Be=a;this.xd=b;this.He=c;this.cb=d;this.O={};bh||(bh=new ah);a=bh;try{var e;Ie()?(Sg||(Sg=new Rg("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),e=Sg):e=new a.cd.X;this.Sa=e}catch(f){this.Sa=new Lg,this.cb=!0}try{this.gc=new a.cd.Sc}catch(f){this.gc=new Lg}this.Ad=q(this.Bd,this);this.P={}},nh,oh=function(){nh||(nh=new mh("firebase",":",!bf(N())&&l.window&&l.window!=l.window.top?!0:!1,Ye()));return nh};h=mh.prototype;
	h.M=function(a,b){return this.Be+this.xd+a.name+(b?this.xd+b:"")};h.get=function(a,b){return(a.X?this.Sa:this.gc).get(this.M(a,b))};h.remove=function(a,b){b=this.M(a,b);a.X&&!this.cb&&(this.P[b]=null);return(a.X?this.Sa:this.gc).remove(b)};h.set=function(a,b,c){var d=this.M(a,c),e=this,f=a.X?this.Sa:this.gc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.X&&!this.cb&&(e.P[d]=b)})};
	h.addListener=function(a,b,c){a=this.M(a,b);this.cb||(this.P[a]=l.localStorage.getItem(a));Sa(this.O)&&this.Qc();this.O[a]||(this.O[a]=[]);this.O[a].push(c)};h.removeListener=function(a,b,c){a=this.M(a,b);this.O[a]&&(Ma(this.O[a],function(a){return a==c}),0==this.O[a].length&&delete this.O[a]);Sa(this.O)&&this.ec()};h.Qc=function(){this.Sa.Ja(this.Ad);this.cb||ph(this)};
	var ph=function(a){qh(a);a.Ac=setInterval(function(){for(var b in a.O){var c=l.localStorage.getItem(b);c!=a.P[b]&&(a.P[b]=c,c=new yb({type:"storage",key:b,target:window,oldValue:a.P[b],newValue:c}),a.Bd(c))}},1E3)},qh=function(a){a.Ac&&(clearInterval(a.Ac),a.Ac=null)};mh.prototype.ec=function(){this.Sa.Ya(this.Ad);this.cb||qh(this)};
	mh.prototype.Bd=function(a){if(a&&a.ee){var b=a.lb.key;if(this.He){var c=l.localStorage.getItem(b);a=a.lb.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.P[b]=l.localStorage.getItem(b);this.Xc(b)}else x(a,q(this.Xc,this))};mh.prototype.Xc=function(a){this.O[a]&&x(this.O[a],function(a){a()})};var rh=function(a){this.B=a;this.w=oh()},sh={name:"pendingRedirect",X:!1},th=function(a){return a.w.set(sh,"pending",a.B)},uh=function(a){return a.w.remove(sh,a.B)},vh=function(a){return a.w.get(sh,a.B).then(function(a){return"pending"==a})};var yh=function(a,b,c){var d=this,e=(this.ya=firebase.SDK_VERSION||null)?Ue(this.ya):null;this.f=new S(b,null,e);this.pa=null;this.A=a;this.i=b;this.C=c;this.xb=[];this.Nb=!1;this.Tc=q(this.he,this);this.Va=new wh(this);this.rd=new xh(this);this.Gc=new rh(this.i+":"+this.C);this.fb={};this.fb.unknown=this.Va;this.fb.signInViaRedirect=this.Va;this.fb.linkViaRedirect=this.Va;this.fb.signInViaPopup=this.rd;this.fb.linkViaPopup=this.rd;this.Zb=this.ab=null;this.Sb=new C(function(a,b){d.ab=a;d.Zb=b})};
	yh.prototype.reset=function(){var a=this;this.pa=null;this.Sb.cancel();this.Nb=!1;this.Zb=this.ab=null;this.pb&&Jg(this.pb,this.Tc);this.Sb=new C(function(b,c){a.ab=b;a.Zb=c})};
	var zh=function(a){var b=Je();return $f(a).then(function(a){a:{var c=Ce(b),e=c.ca;if("http"==e||"https"==e)for(c=c.ha,e=0;e<a.length;e++){var f;var g=a[e];f=c;Re.test(g)?f=f==g:(g=g.split(".").join("\\."),f=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(f));if(f){a=!0;break a}}a=!1}if(!a)throw new rf(Je());})},Ah=function(a){a.Nb||(a.Nb=!0,Se().then(function(){a.pb=new Gg(a.A,a.i,a.C,a.ya);a.pb.Dc().h(function(){a.Zb(new Q("network-request-failed"));a.reset()});a.pb.Ab.push(a.Tc)}));return a.Sb};
	yh.prototype.subscribe=function(a){Ja(this.xb,a)||this.xb.push(a);if(!this.Nb){var b=this,c=function(){var a=N();Ye(a)||bf(a)||Ah(b);Bh(b.Va)};vh(this.Gc).then(function(a){a?uh(b.Gc).then(function(){Ah(b)}):c()}).h(function(){c()})}};yh.prototype.unsubscribe=function(a){Ma(this.xb,function(b){return b==a})};
	yh.prototype.he=function(a){if(!a)throw new Q("invalid-auth-event");this.ab&&(this.ab(),this.ab=null);for(var b=!1,c=0;c<this.xb.length;c++){var d=this.xb[c];if(d.Yc(a.wa,a.U)){(b=this.fb[a.wa])&&b.sd(a,d);b=!0;break}}Bh(this.Va);return b};var Ch=new df(2E3,1E4),Dh=new df(1E4,3E4);yh.prototype.getRedirectResult=function(){return this.Va.getRedirectResult()};
	var Fh=function(a,b,c,d,e,f){if(!b)return E(new Q("popup-blocked"));if(f)return Ah(a),D();a.pa||(a.pa=zh(a.f));return a.pa.then(function(){return Ah(a)}).then(function(){Eh(d);var f=Hg(a.A,a.i,a.C,c,d,null,e,a.ya);(b||l.window).location.href=cc(fc(f))}).h(function(b){"auth/network-request-failed"==b.code&&(a.pa=null);throw b;})},Gh=function(a,b,c,d){a.pa||(a.pa=zh(a.f));return a.pa.then(function(){Eh(c);var e=Hg(a.A,a.i,a.C,b,c,Je(),d,a.ya);th(a.Gc).then(function(){l.window.location.href=cc(fc(e))})})},
	Hh=function(a,b,c,d,e){var f=new Q("popup-closed-by-user"),g=new Q("web-storage-unsupported"),k=!1;return a.Sb.then(function(){Ig(a.pb).then(function(a){a||(d&&Oe(d),b.ta(c,null,g,e),k=!0)})}).h(function(){}).then(function(){if(!k)return Qe(d)}).then(function(){if(!k)return Yd(Ch.get()).then(function(){b.ta(c,null,f,e)})})},Eh=function(a){if(!a.isOAuthProvider)throw new Q("invalid-oauth-provider");},Ih={},Jh=function(a,b,c){var d=b+":"+c;Ih[d]||(Ih[d]=new yh(a,b,c));return Ih[d]},wh=function(a){this.w=
	a;this.vb=this.Yb=this.Wa=this.Z=null;this.Kc=!1};wh.prototype.sd=function(a,b){if(!a)return E(new Q("invalid-auth-event"));this.Kc=!0;var c=a.wa,d=a.U,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code;"unknown"!=c||e?a=a.K?this.Ic(a,b):b.mb(c,d)?this.Jc(a,b):E(new Q("invalid-auth-event")):(this.Z||Kh(this,!1,null,null),a=D());return a};var Bh=function(a){a.Kc||(a.Kc=!0,Kh(a,!1,null,null))};wh.prototype.Ic=function(a){this.Z||Kh(this,!0,null,a.getError());return D()};
	wh.prototype.Jc=function(a,b){var c=this,d=a.wa;b=b.mb(d,a.U);var e=a.gb;a=a.cc;var f="signInViaRedirect"==d||"linkViaRedirect"==d;if(this.Z)return D();this.vb&&this.vb.cancel();return b(e,a).then(function(a){c.Z||Kh(c,f,a,null)}).h(function(a){c.Z||Kh(c,f,null,a)})};var Kh=function(a,b,c,d){b?d?(a.Z=function(){return E(d)},a.Yb&&a.Yb(d)):(a.Z=function(){return D(c)},a.Wa&&a.Wa(c)):(a.Z=function(){return D({user:null})},a.Wa&&a.Wa({user:null}));a.Wa=null;a.Yb=null};
	wh.prototype.getRedirectResult=function(){var a=this;this.Wc||(this.Wc=new C(function(b,c){a.Z?a.Z().then(b,c):(a.Wa=b,a.Yb=c,Lh(a))}));return this.Wc};var Lh=function(a){var b=new Q("timeout");a.vb&&a.vb.cancel();a.vb=Yd(Dh.get()).then(function(){a.Z||Kh(a,!0,null,b)})},xh=function(a){this.w=a};xh.prototype.sd=function(a,b){if(!a)return E(new Q("invalid-auth-event"));var c=a.wa,d=a.U;return a.K?this.Ic(a,b):b.mb(c,d)?this.Jc(a,b):E(new Q("invalid-auth-event"))};
	xh.prototype.Ic=function(a,b){b.ta(a.wa,null,a.getError(),a.U);return D()};xh.prototype.Jc=function(a,b){var c=a.U,d=a.wa;return b.mb(d,c)(a.gb,a.cc).then(function(a){b.ta(d,a,null,c)}).h(function(a){b.ta(d,null,a,c)})};var Mh=function(a){this.f=a;this.xa=this.T=null;this.Oa=0};Mh.prototype.I=function(){return{apiKey:this.f.i,refreshToken:this.T,accessToken:this.xa,expirationTime:this.Oa}};
	var Oh=function(a,b){var c=b.idToken,d=b.refreshToken;b=Nh(b.expiresIn);a.xa=c;a.Oa=b;a.T=d},Nh=function(a){return la()+1E3*parseInt(a,10)},Ph=function(a,b){return Tf(a.f,b).then(function(b){a.xa=b.access_token;a.Oa=Nh(b.expires_in);a.T=b.refresh_token;return{accessToken:a.xa,expirationTime:a.Oa,refreshToken:a.T}}).h(function(b){"auth/user-token-expired"==b.code&&(a.T=null);throw b;})},Qh=function(a){return!(!a.xa||a.T)};
	Mh.prototype.getToken=function(a){a=!!a;return Qh(this)?E(new Q("user-token-expired")):a||!this.xa||la()>this.Oa-3E4?this.T?Ph(this,{grant_type:"refresh_token",refresh_token:this.T}):D(null):D({accessToken:this.xa,expirationTime:this.Oa,refreshToken:this.T})};var Rh=function(a,b,c,d,e){gf(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},Sh=function(a,b){xb.call(this,a);for(var c in b)this[c]=b[c]};r(Sh,xb);
	var W=function(a,b,c){this.W=[];this.i=a.apiKey;this.C=a.appName;this.A=a.authDomain||null;a=firebase.SDK_VERSION?Ue(firebase.SDK_VERSION):null;this.f=new S(this.i,null,a);this.da=new Mh(this.f);Th(this,b.idToken);Oh(this.da,b);P(this,"refreshToken",this.da.T);Uh(this,c||{});G.call(this);this.Tb=!1;this.A&&Xe()&&(this.j=Jh(this.A,this.i,this.C));this.dc=[];this.nc=D()};r(W,G);
	W.prototype.ra=function(a,b){var c=Array.prototype.slice.call(arguments,1),d=this;return this.nc=this.nc.then(function(){return a.apply(d,c)},function(){return a.apply(d,c)})};
	var Th=function(a,b){a.ld=b;P(a,"_lat",b)},Vh=function(a,b){Ma(a.dc,function(a){return a==b})},Wh=function(a){for(var b=[],c=0;c<a.dc.length;c++)b.push(a.dc[c](a));return Zc(b).then(function(){return a})},Xh=function(a){a.j&&!a.Tb&&(a.Tb=!0,a.j.subscribe(a))},Uh=function(a,b){gf(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};P(W.prototype,"providerId","firebase");
	var Yh=function(){},Zh=function(a){return D().then(function(){if(a.Xd)throw new Q("app-deleted");})},$h=function(a){return Fa(a.providerData,function(a){return a.providerId})},bi=function(a,b){b&&(ai(a,b.providerId),a.providerData.push(b))},ai=function(a,b){Ma(a.providerData,function(a){return a.providerId==b})},ci=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&P(a,b,c)};
	W.prototype.copy=function(a){var b=this;b!=a&&(gf(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){bi(b,a)}),this.da=a.da,P(this,"refreshToken",this.da.T))};W.prototype.reload=function(){var a=this;return Zh(this).then(function(){return di(a).then(function(){return Wh(a)}).then(Yh)})};
	var di=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return ei(a,b).then(function(){c||ci(a,"isAnonymous",!1);return b}).h(function(b){"auth/user-token-expired"==b.code&&(a.dispatchEvent(new Sh("userDeleted")),fi(a));throw b;})})};
	W.prototype.getToken=function(a){var b=this,c=Qh(this.da);return Zh(this).then(function(){return b.da.getToken(a)}).then(function(a){if(!a)throw new Q("internal-error");a.accessToken!=b.ld&&(Th(b,a.accessToken),b.Ca());ci(b,"refreshToken",a.refreshToken);return a.accessToken}).h(function(a){if("auth/user-token-expired"==a.code&&!c)return Wh(b).then(function(){ci(b,"refreshToken",null);throw a;});throw a;})};
	var gi=function(a,b){b.idToken&&a.ld!=b.idToken&&(Oh(a.da,b),a.Ca(),Th(a,b.idToken),ci(a,"refreshToken",a.da.T))};W.prototype.Ca=function(){this.dispatchEvent(new Sh("tokenChanged"))};var ei=function(a,b){return R(a.f,sg,{idToken:b}).then(q(a.Ee,a))};
	W.prototype.Ee=function(a){a=a.users;if(!a||!a.length)throw new Q("internal-error");a=a[0];Uh(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=hi(a),c=0;c<b.length;c++)bi(this,b[c]);ci(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
	var hi=function(a){return(a=a.providerUserInfo)&&a.length?Fa(a,function(a){return new Rh(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};W.prototype.reauthenticate=function(a){var b=this;return this.c(a.Fb(this.f).then(function(a){var c;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=hc(sb(e));if(k.sub&&k.iss&&k.aud&&k.exp){c=new sf(k);break a}}catch(v){}}c=null}if(!c||b.uid!=c.xe)throw new Q("user-mismatch");gi(b,a);return b.reload()}))};
	var ii=function(a,b){return di(a).then(function(){if(Ja($h(a),b))return Wh(a).then(function(){throw new Q("provider-already-linked");})})};h=W.prototype;h.ve=function(a){var b=this;return this.c(ii(this,a.provider).then(function(){return b.getToken()}).then(function(c){return a.nd(b.f,c)}).then(q(this.ed,this)))};h.link=function(a){return this.ra(this.ve,a)};h.ed=function(a){gi(this,a);var b=this;return this.reload().then(function(){return b})};
	h.Te=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updateEmail(c,a)}).then(function(a){gi(b,a);return b.reload()}))};h.updateEmail=function(a){return this.ra(this.Te,a)};h.Ue=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updatePassword(c,a)}).then(function(a){gi(b,a);return b.reload()}))};h.updatePassword=function(a){return this.ra(this.Ue,a)};
	h.Ve=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Zh(this);var b=this;return this.c(this.getToken().then(function(c){return b.f.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){gi(b,a);ci(b,"displayName",a.displayName||null);ci(b,"photoURL",a.photoUrl||null);return Wh(b)}).then(Yh))};h.updateProfile=function(a){return this.ra(this.Ve,a)};
	h.Se=function(a){var b=this;return this.c(di(this).then(function(c){return Ja($h(b),a)?hg(b.f,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x($h(b),function(a){c[a]||ai(b,a)});return Wh(b)}):Wh(b).then(function(){throw new Q("no-such-provider");})}))};h.unlink=function(a){return this.ra(this.Se,a)};h.Wd=function(){var a=this;return this.c(this.getToken().then(function(b){return R(a.f,rg,{idToken:b})}).then(function(){a.dispatchEvent(new Sh("userDeleted"))})).then(function(){fi(a)})};
	h["delete"]=function(){return this.ra(this.Wd)};h.Yc=function(a,b){return"linkViaPopup"==a&&(this.ja||null)==b&&this.ba||"linkViaRedirect"==a&&(this.Xb||null)==b?!0:!1};h.ta=function(a,b,c,d){"linkViaPopup"==a&&d==(this.ja||null)&&(c&&this.Ea?this.Ea(c):b&&!c&&this.ba&&this.ba(b),this.D&&(this.D.cancel(),this.D=null),delete this.ba,delete this.Ea)};h.mb=function(a,b){return"linkViaPopup"==a&&b==(this.ja||null)||"linkViaRedirect"==a&&(this.Xb||null)==b?q(this.$d,this):null};
	h.Eb=function(){return We(this.uid+":::")};
	var ki=function(a,b){if(!Xe())return E(new Q("operation-not-supported-in-this-environment"));var c=nf(b.providerId),d=a.Eb(),e=null;!Ye()&&a.A&&b.isOAuthProvider&&(e=Hg(a.A,a.i,a.C,"linkViaPopup",b,null,d,firebase.SDK_VERSION||null));var f=Pe(e,c&&c.ub,c&&c.tb),c=ii(a,b.providerId).then(function(){return Wh(a)}).then(function(){ji(a);return a.getToken()}).then(function(){return Fh(a.j,f,"linkViaPopup",b,d,!!e)}).then(function(){return new C(function(b,c){a.ta("linkViaPopup",null,new Q("cancelled-popup-request"),
	a.ja||null);a.ba=b;a.Ea=c;a.ja=d;a.D=Hh(a.j,a,"linkViaPopup",f,d)})}).then(function(a){f&&Oe(f);return a}).h(function(a){f&&Oe(f);throw a;});return a.c(c)};W.prototype.linkWithPopup=function(a){var b=ki(this,a);return this.ra(function(){return b})};
	W.prototype.we=function(a){if(!Xe())return E(new Q("operation-not-supported-in-this-environment"));var b=this,c=null,d=this.Eb(),e=ii(this,a.providerId).then(function(){ji(b);return b.getToken()}).then(function(){b.Xb=d;return Wh(b)}).then(function(a){b.Fa&&(a=b.Fa,a=a.w.set(li,b.I(),a.B));return a}).then(function(){return Gh(b.j,"linkViaRedirect",a,d)}).h(function(a){c=a;if(b.Fa)return mi(b.Fa);throw c;}).then(function(){if(c)throw c;});return this.c(e)};
	W.prototype.linkWithRedirect=function(a){return this.ra(this.we,a)};var ji=function(a){if(!a.j||!a.Tb){if(a.j&&!a.Tb)throw new Q("internal-error");throw new Q("auth-domain-config-required");}};W.prototype.$d=function(a,b){var c=this;this.D&&(this.D.cancel(),this.D=null);var d=null,e=this.getToken().then(function(d){return wf(c.f,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=Hf(a);return c.ed(a)}).then(function(a){return{user:a,credential:d}});return this.c(e)};
	W.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getToken().then(function(b){return a.f.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};var fi=function(a){for(var b=0;b<a.W.length;b++)a.W[b].cancel("app-deleted");a.W=[];a.Xd=!0;P(a,"refreshToken",null);a.j&&a.j.unsubscribe(a)};W.prototype.c=function(a){var b=this;this.W.push(a);bd(a,function(){La(b.W,a)});return a};W.prototype.toJSON=function(){return this.I()};
	W.prototype.I=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.i,appName:this.C,authDomain:this.A,stsTokenManager:this.da.I(),redirectEventId:this.Xb||null};x(this.providerData,function(b){a.providerData.push(hf(b))});return a};
	var ni=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-la())/1E3;else return null;var d=new W(b,c,a);a.providerData&&x(a.providerData,function(a){if(a){var b={};gf(b,a);bi(d,b)}});a.redirectEventId&&(d.Xb=a.redirectEventId);
	return d},oi=function(a,b,c){var d=new W(a,b);c&&(d.Fa=c);return d.reload().then(function(){return d})};var pi=function(a){this.B=a;this.w=oh()},li={name:"redirectUser",X:!1},mi=function(a){return a.w.remove(li,a.B)},qi=function(a,b){return a.w.get(li,a.B).then(function(a){a&&b&&(a.authDomain=b);return ni(a||{})})};var ri=function(a){this.B=a;this.w=oh()},si={name:"authUser",X:!0},ti=function(a,b){return a.w.set(si,b.I(),a.B)},ui=function(a){return a.w.remove(si,a.B)},vi=function(a,b){return a.w.get(si,a.B).then(function(a){a&&b&&(a.authDomain=b);return ni(a||{})})};var Y=function(a){this.Ma=!1;P(this,"app",a);if(X(this).options&&X(this).options.apiKey)a=firebase.SDK_VERSION?Ue(firebase.SDK_VERSION):null,this.f=new S(X(this).options&&X(this).options.apiKey,null,a);else throw new Q("invalid-api-key");this.W=[];this.Ka=[];this.Ce=firebase.INTERNAL.createSubscribe(q(this.qe,this));wi(this,null);this.ma=new ri(X(this).options.apiKey+":"+X(this).name);this.Xa=new pi(X(this).options.apiKey+":"+X(this).name);this.Bb=this.c(xi(this));this.sa=this.c(yi(this));this.zc=
	!1;this.wc=q(this.Ne,this);this.Dd=q(this.Qa,this);this.Ed=q(this.me,this);this.Cd=q(this.le,this);zi(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this["delete"],this)};Y.prototype.toJSON=function(){return{apiKey:X(this).options.apiKey,authDomain:X(this).options.authDomain,appName:X(this).name,currentUser:Z(this)&&Z(this).I()}};
	var Ai=function(a){return a.Yd||E(new Q("auth-domain-config-required"))},zi=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&&Xe()&&(a.Yd=a.Bb.then(function(){if(!a.Ma)return a.j=Jh(b,c,X(a).name),a.j.subscribe(a),Z(a)&&Xh(Z(a)),a.Mc&&(Xh(a.Mc),a.Mc=null),a.j}))};h=Y.prototype;h.Yc=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ja==b&&!!this.ba;default:return!1}};
	h.ta=function(a,b,c,d){"signInViaPopup"==a&&this.ja==d&&(c&&this.Ea?this.Ea(c):b&&!c&&this.ba&&this.ba(b),this.D&&(this.D.cancel(),this.D=null),delete this.ba,delete this.Ea)};h.mb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ja==b&&this.ba?q(this.ae,this):null};
	h.ae=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.D&&(this.D.cancel(),this.D=null);var d=null,e=uf(c.f,a).then(function(a){d=Hf(a);return a});a=c.Bb.then(function(){return e}).then(function(a){return Bi(c,a)}).then(function(){return{user:Z(c),credential:d}});return this.c(a)};h.Eb=function(){return We()};
	h.signInWithPopup=function(a){if(!Xe())return E(new Q("operation-not-supported-in-this-environment"));var b=this,c=nf(a.providerId),d=this.Eb(),e=null;!Ye()&&X(this).options.authDomain&&a.isOAuthProvider&&(e=Hg(X(this).options.authDomain,X(this).options.apiKey,X(this).name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=Pe(e,c&&c.ub,c&&c.tb),c=Ai(this).then(function(b){return Fh(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new C(function(a,c){b.ta("signInViaPopup",null,new Q("cancelled-popup-request"),
	b.ja);b.ba=a;b.Ea=c;b.ja=d;b.D=Hh(b.j,b,"signInViaPopup",f,d)})}).then(function(a){f&&Oe(f);return a}).h(function(a){f&&Oe(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!Xe())return E(new Q("operation-not-supported-in-this-environment"));var b=this,c=Ai(this).then(function(){return Gh(b.j,"signInViaRedirect",a)});return this.c(c)};
	h.getRedirectResult=function(){if(!Xe())return E(new Q("operation-not-supported-in-this-environment"));var a=this,b=Ai(this).then(function(){return a.j.getRedirectResult()});return this.c(b)};
	var Bi=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.Bb.then(function(){return oi(c,b,a.Xa)}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.Qa(b);wi(a,b);Xh(b);return a.Qa(b)}).then(function(){a.Ca()})},wi=function(a,b){Z(a)&&(Vh(Z(a),a.Dd),Sb(Z(a),"tokenChanged",a.Ed),Sb(Z(a),"userDeleted",a.Cd));b&&(b.dc.push(a.Dd),Jb(b,"tokenChanged",a.Ed),Jb(b,"userDeleted",a.Cd));P(a,"currentUser",b)};
	Y.prototype.signOut=function(){var a=this,b=this.sa.then(function(){if(!Z(a))return D();wi(a,null);return ui(a.ma).then(function(){a.Ca()})});return this.c(b)};
	var Ci=function(a){var b=qi(a.Xa,X(a).options.authDomain).then(function(b){if(a.Mc=b)b.Fa=a.Xa;return mi(a.Xa)});return a.c(b)},xi=function(a){var b=X(a).options.authDomain,c=Ci(a).then(function(){return vi(a.ma,b)}).then(function(b){return b?(b.Fa=a.Xa,b.reload().then(function(){return ti(a.ma,b).then(function(){return b})}).h(function(c){return"auth/network-request-failed"==c.code?b:ui(a.ma)})):null}).then(function(b){wi(a,b||null)});return a.c(c)},yi=function(a){return a.Bb.then(function(){return a.getRedirectResult()}).h(function(){}).then(function(){if(!a.Ma)return a.wc()}).h(function(){}).then(function(){if(!a.Ma){a.zc=
	!0;var b=a.ma;b.w.addListener(si,b.B,a.wc)}})};Y.prototype.Ne=function(){var a=this;return vi(this.ma,X(this).options.authDomain).then(function(b){if(!a.Ma){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();if(Z(a)||b)wi(a,b),b&&(Xh(b),b.Fa=a.Xa),a.j&&a.j.subscribe(a),a.Ca()}})};Y.prototype.Qa=function(a){return ti(this.ma,a)};Y.prototype.me=function(){this.Ca();this.Qa(Z(this))};
	Y.prototype.le=function(){this.signOut()};var Di=function(a,b){return a.c(b.then(function(b){return Bi(a,b)}).then(function(){return Z(a)}))};h=Y.prototype;h.qe=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};h.onAuthStateChanged=function(a,b,c){var d=this;this.zc&&firebase.Promise.resolve().then(function(){p(a)?a(Z(d)):p(a.next)&&a.next(Z(d))});return this.Ce(a,b,c)};
	h.getToken=function(a){var b=this,c=this.sa.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};h.signInWithCustomToken=function(a){var b=this;return this.sa.then(function(){return Di(b,R(b.f,tg,{token:a}))}).then(function(a){ci(a,"isAnonymous",!1);return b.Qa(a)}).then(function(){return Z(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.sa.then(function(){return Di(c,R(c.f,Df,{email:a,password:b}))})};
	h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.sa.then(function(){return Di(c,R(c.f,qg,{email:a,password:b}))})};h.signInWithCredential=function(a){var b=this;return this.sa.then(function(){return Di(b,a.Fb(b.f))})};h.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?D(a):this.sa.then(function(){return Di(b,b.f.signInAnonymously())}).then(function(a){ci(a,"isAnonymous",!0);return b.Qa(a)}).then(function(){return Z(b)})};
	var X=function(a){return a.app},Z=function(a){return a.currentUser};h=Y.prototype;h.Ca=function(){if(this.zc)for(var a=0;a<this.Ka.length;a++)if(this.Ka[a])this.Ka[a](Z(this)&&Z(this)._lat||null)};h.addAuthTokenListener=function(a){var b=this;this.Ka.push(a);this.c(this.sa.then(function(){b.Ma||Ja(b.Ka,a)&&a(Z(b)&&Z(b)._lat||null)}))};h.removeAuthTokenListener=function(a){Ma(this.Ka,function(b){return b==a})};
	h["delete"]=function(){this.Ma=!0;for(var a=0;a<this.W.length;a++)this.W[a].cancel("app-deleted");this.W=[];this.ma&&(a=this.ma,a.w.removeListener(si,a.B,this.wc));this.j&&this.j.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.W.push(a);bd(a,function(){La(b.W,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(Yf(this.f,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
	h.confirmPasswordReset=function(a,b){return this.c(this.f.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.f.checkActionCode(a).then(function(a){return new ch(a)}))};h.applyActionCode=function(a){return this.c(this.f.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.c(this.f.sendPasswordResetEmail(a).then(function(){}))};kh(Y.prototype,{applyActionCode:{name:"applyActionCode",a:[T("code")]},checkActionCode:{name:"checkActionCode",a:[T("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[T("code"),T("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[T("email"),T("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[T("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[ih(U(),eh(),"nextOrObserver"),
	eh("opt_error",!0),eh("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[T("email")]},signInAnonymously:{name:"signInAnonymously",a:[]},signInWithCredential:{name:"signInWithCredential",a:[gh()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[T("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",a:[T("email"),T("password")]},signInWithPopup:{name:"signInWithPopup",a:[hh()]},signInWithRedirect:{name:"signInWithRedirect",a:[hh()]},signOut:{name:"signOut",
	a:[]},toJSON:{name:"toJSON",a:[T(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[T("code")]}});
	kh(W.prototype,{"delete":{name:"delete",a:[]},getToken:{name:"getToken",a:[{name:"opt_forceRefresh",ea:"a boolean",optional:!0,fa:function(a){return"boolean"==typeof a}}]},link:{name:"link",a:[gh()]},linkWithPopup:{name:"linkWithPopup",a:[hh()]},linkWithRedirect:{name:"linkWithRedirect",a:[hh()]},reauthenticate:{name:"reauthenticate",a:[gh()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[]},toJSON:{name:"toJSON",a:[T(null,!0)]},unlink:{name:"unlink",a:[T("provider")]},
	updateEmail:{name:"updateEmail",a:[T("email")]},updatePassword:{name:"updatePassword",a:[T("password")]},updateProfile:{name:"updateProfile",a:[U("profile")]}});kh(C.prototype,{h:{name:"catch"},then:{name:"then"}});V(Ff,"credential",function(a,b){return new Cf(a,b)},[T("email"),T("password")]);kh(yf.prototype,{addScope:{name:"addScope",a:[T("scope")]},setCustomParameters:{name:"setCustomParameters",a:[U("customOAuthParameters")]}});V(yf,"credential",yf.credential,[ih(T(),U(),"token")]);
	kh(zf.prototype,{addScope:{name:"addScope",a:[T("scope")]},setCustomParameters:{name:"setCustomParameters",a:[U("customOAuthParameters")]}});V(zf,"credential",zf.credential,[ih(T(),U(),"token")]);kh(Af.prototype,{addScope:{name:"addScope",a:[T("scope")]},setCustomParameters:{name:"setCustomParameters",a:[U("customOAuthParameters")]}});V(Af,"credential",Af.credential,[ih(T(),ih(U(),fh()),"idToken"),ih(T(),fh(),"accessToken",!0)]);kh(Bf.prototype,{setCustomParameters:{name:"setCustomParameters",a:[U("customOAuthParameters")]}});
	V(Bf,"credential",Bf.credential,[ih(T(),U(),"token"),T("secret",!0)]);
	(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Y,Error:Q};V(a,"EmailAuthProvider",Ff,[]);V(a,"FacebookAuthProvider",yf,[]);V(a,"GithubAuthProvider",zf,[]);V(a,"GoogleAuthProvider",Af,[]);V(a,"TwitterAuthProvider",Bf,[]);firebase.INTERNAL.registerService("auth",function(a,c){a=new Y(a);c({INTERNAL:{getToken:q(a.getToken,a),addAuthTokenListener:q(a.addAuthTokenListener,a),removeAuthTokenListener:q(a.removeAuthTokenListener,a)}});return a},
	a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:W})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();})();
	module.exports = firebase.auth;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var firebase = __webpack_require__(2);
	/*! @license Firebase v3.6.1
	    Build: 3.6.1-rc.3
	    Terms: https://firebase.google.com/terms/

	    ---

	    typedarray.js
	    Copyright (c) 2010, Linden Research, Inc.

	    Permission is hereby granted, free of charge, to any person obtaining a copy
	    of this software and associated documentation files (the "Software"), to deal
	    in the Software without restriction, including without limitation the rights
	    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	    copies of the Software, and to permit persons to whom the Software is
	    furnished to do so, subject to the following conditions:

	    The above copyright notice and this permission notice shall be included in
	    all copies or substantial portions of the Software.

	    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	    THE SOFTWARE. */
	(function() {var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Vb=function(){return a.Ye?a.Ye:a.Ye=new a}}
	function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
	function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}
	function la(a,b){function c(){}c.prototype=b.prototype;a.wg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.sg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function ma(){this.Wa=-1};function na(){this.Wa=-1;this.Wa=64;this.M=[];this.Ud=[];this.Af=[];this.xd=[];this.xd[0]=128;for(var a=1;a<this.Wa;++a)this.xd[a]=0;this.Nd=this.$b=0;this.reset()}la(na,ma);na.prototype.reset=function(){this.M[0]=1732584193;this.M[1]=4023233417;this.M[2]=2562383102;this.M[3]=271733878;this.M[4]=3285377520;this.Nd=this.$b=0};
	function oa(a,b,c){c||(c=0);var d=a.Af;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.M[0];c=a.M[1];for(var h=a.M[2],k=a.M[3],l=a.M[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),m=1518500249):(f=c^h^k,m=1859775393):60>e?(f=c&h|k&(c|h),m=2400959708):(f=c^h^k,m=3395469782),f=(b<<
	5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.M[0]=a.M[0]+b&4294967295;a.M[1]=a.M[1]+c&4294967295;a.M[2]=a.M[2]+h&4294967295;a.M[3]=a.M[3]+k&4294967295;a.M[4]=a.M[4]+l&4294967295}
	na.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.Ud,f=this.$b;d<b;){if(0==f)for(;d<=c;)oa(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){oa(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){oa(this,e);f=0;break}}this.$b=f;this.Nd+=b}};function r(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function pa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function qa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function ra(a){var b=0,c;for(c in a)b++;return b}function sa(a){for(var b in a)return b}function ta(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ua(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function va(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
	function wa(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function xa(a,b){var c=wa(a,b,void 0);return c&&a[c]}function ya(a){for(var b in a)return!1;return!0}function za(a){var b={},c;for(c in a)b[c]=a[c];return b};function Aa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ba(){this.Dd=void 0}
	function Ca(a,b,c){switch(typeof b){case "string":Da(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ca(a,a.Dd?a.Dd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Da(f,c),
	c.push(":"),Ca(a,a.Dd?a.Dd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function Da(a,b){b.push('"',a.replace(Fa,function(a){if(a in Ea)return Ea[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Ea[a]=e+b.toString(16)}),'"')};var t;a:{var Ga=aa.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){t=Ha;break a}}t=""};var v=Array.prototype,Ia=v.indexOf?function(a,b,c){return v.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ja=v.forEach?function(a,b,c){v.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=v.filter?function(a,b,c){return v.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
	a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},La=v.map?function(a,b,c){return v.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ma=v.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return v.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ja(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Na=v.every?function(a,b,
	c){return v.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Oa(a,b){var c=Pa(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Pa(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Qa(a,b){var c=Ia(a,b);0<=c&&v.splice.call(a,c,1)}function Ra(a,b,c){return 2>=arguments.length?v.slice.call(a,b):v.slice.call(a,b,c)}
	function Sa(a,b){a.sort(b||Ta)}function Ta(a,b){return a>b?1:a<b?-1:0};var Ua=-1!=t.indexOf("Opera")||-1!=t.indexOf("OPR"),Va=-1!=t.indexOf("Trident")||-1!=t.indexOf("MSIE"),Wa=-1!=t.indexOf("Gecko")&&-1==t.toLowerCase().indexOf("webkit")&&!(-1!=t.indexOf("Trident")||-1!=t.indexOf("MSIE")),Xa=-1!=t.toLowerCase().indexOf("webkit");
	(function(){var a="",b;if(Ua&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(t))?a[1]:"");return Va&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,h||(k=64));d.push(c[u],c[f],c[k],c[m])}return d.join("")}
	function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function db(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function y(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function A(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(y(a,b,d)+"must be a valid function.");}function eb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(y(a,b,!0)+"must be a valid context object.");};function fb(a){var b=[];db(a,function(a,d){ea(d)?Ja(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var gb=firebase.Promise;function hb(){var a=this;this.reject=this.resolve=null;this.ra=new gb(function(b,c){a.resolve=b;a.reject=c})}function ib(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ha(b)&&(jb(a.ra),1===b.length?b(c):b(c,d))}}function jb(a){a.then(void 0,ba)};function kb(a,b){if(!a)throw lb(b);}function lb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function ob(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):Aa(a)}function B(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ca(new Ba,a,b);a=b.join("")}return a};function pb(a,b){this.committed=a;this.snapshot=b};function qb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function rb(a){this.qe=a;this.zd=[];this.Qb=0;this.Wd=-1;this.Fb=null}function sb(a,b,c){a.Wd=b;a.Fb=c;a.Wd<a.Qb&&(a.Fb(),a.Fb=null)}function tb(a,b,c){for(a.zd[b]=c;a.zd[a.Qb];){var d=a.zd[a.Qb];delete a.zd[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;ub(function(){f.qe(d[e])})}if(a.Qb===a.Wd){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Qb++}};function vb(){this.oc={}}vb.prototype.set=function(a,b){null==b?delete this.oc[a]:this.oc[a]=b};vb.prototype.get=function(a){return cb(this.oc,a)?this.oc[a]:null};vb.prototype.remove=function(a){delete this.oc[a]};vb.prototype.Ze=!0;function wb(a){this.tc=a;this.Ad="firebase:"}g=wb.prototype;g.set=function(a,b){null==b?this.tc.removeItem(this.Ad+a):this.tc.setItem(this.Ad+a,B(b))};g.get=function(a){a=this.tc.getItem(this.Ad+a);return null==a?null:ob(a)};g.remove=function(a){this.tc.removeItem(this.Ad+a)};g.Ze=!1;g.toString=function(){return this.tc.toString()};function xb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new wb(b)}}catch(c){}return new vb}var yb=xb("localStorage"),zb=xb("sessionStorage");function Ab(a,b,c){this.type=Bb;this.source=a;this.path=b;this.Ga=c}Ab.prototype.Lc=function(a){return this.path.e()?new Ab(this.source,C,this.Ga.Q(a)):new Ab(this.source,D(this.path),this.Ga)};Ab.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};function Cb(a,b){this.type=Db;this.source=a;this.path=b}Cb.prototype.Lc=function(){return this.path.e()?new Cb(this.source,C):new Cb(this.source,D(this.path))};Cb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function Eb(a){this.Ee=a}Eb.prototype.getToken=function(a){return this.Ee.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function Fb(a,b){a.Ee.INTERNAL.addAuthTokenListener(b)};function Gb(){this.Hd=G}Gb.prototype.j=function(a){return this.Hd.P(a)};Gb.prototype.toString=function(){return this.Hd.toString()};function Hb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Rc=b;this.me=c;this.qg=d;this.gf=e||"";this.$a=yb.get("host:"+a)||this.host}function Ib(a,b){b!==a.$a&&(a.$a=b,"s-"===a.$a.substr(0,2)&&yb.set("host:"+a.host,a.$a))}
	function Jb(a,b,c){H("string"===typeof b,"typeof type must == string");H("object"===typeof c,"typeof params must == object");if("websocket"===b)b=(a.Rc?"wss://":"ws://")+a.$a+"/.ws?";else if("long_polling"===b)b=(a.Rc?"https://":"http://")+a.$a+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.$a&&(c.ns=a.me);var d=[];r(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}
	Hb.prototype.toString=function(){var a=(this.Rc?"https://":"http://")+this.host;this.gf&&(a+="<"+this.gf+">");return a};function Kb(){this.sc={}}function Lb(a,b,c){n(c)||(c=1);cb(a.sc,b)||(a.sc[b]=0);a.sc[b]+=c}Kb.prototype.get=function(){return za(this.sc)};function Mb(a){this.Ef=a;this.pd=null}Mb.prototype.get=function(){var a=this.Ef.get(),b=za(a);if(this.pd)for(var c in this.pd)b[c]-=this.pd[c];this.pd=a;return b};function Nb(){this.vb=[]}function Ob(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Yb();null===c||f.Z(c.Yb())||(a.vb.push(c),c=null);null===c&&(c=new Pb(f));c.add(e)}c&&a.vb.push(c)}function Qb(a,b,c){Ob(a,c);Rb(a,function(a){return a.Z(b)})}function Sb(a,b,c){Ob(a,c);Rb(a,function(a){return a.contains(b)||b.contains(a)})}
	function Rb(a,b){for(var c=!0,d=0;d<a.vb.length;d++){var e=a.vb[d];if(e)if(e=e.Yb(),b(e)){for(var e=a.vb[d],f=0;f<e.gd.length;f++){var h=e.gd[f];if(null!==h){e.gd[f]=null;var k=h.Tb();Tb&&E("event: "+h.toString());ub(k)}}a.vb[d]=null}else c=!1}c&&(a.vb=[])}function Pb(a){this.qa=a;this.gd=[]}Pb.prototype.add=function(a){this.gd.push(a)};Pb.prototype.Yb=function(){return this.qa};function Ub(a,b,c,d){this.Zd=b;this.Kd=c;this.Bd=d;this.fd=a}Ub.prototype.Yb=function(){var a=this.Kd.wb();return"value"===this.fd?a.path:a.getParent().path};Ub.prototype.de=function(){return this.fd};Ub.prototype.Tb=function(){return this.Zd.Tb(this)};Ub.prototype.toString=function(){return this.Yb().toString()+":"+this.fd+":"+B(this.Kd.Qe())};function Vb(a,b,c){this.Zd=a;this.error=b;this.path=c}Vb.prototype.Yb=function(){return this.path};Vb.prototype.de=function(){return"cancel"};
	Vb.prototype.Tb=function(){return this.Zd.Tb(this)};Vb.prototype.toString=function(){return this.path.toString()+":cancel"};function Wb(){}Wb.prototype.Te=function(){return null};Wb.prototype.ce=function(){return null};var Xb=new Wb;function Yb(a,b,c){this.xf=a;this.Ka=b;this.wd=c}Yb.prototype.Te=function(a){var b=this.Ka.N;if(Zb(b,a))return b.j().Q(a);b=null!=this.wd?new $b(this.wd,!0,!1):this.Ka.w();return this.xf.pc(a,b)};Yb.prototype.ce=function(a,b,c){var d=null!=this.wd?this.wd:ac(this.Ka);a=this.xf.Vd(d,b,1,c,a);return 0===a.length?null:a[0]};function I(a,b,c,d){this.type=a;this.Ja=b;this.Xa=c;this.ne=d;this.Bd=void 0}function bc(a){return new I(cc,a)}var cc="value";function $b(a,b,c){this.A=a;this.da=b;this.Sb=c}function dc(a){return a.da}function ec(a){return a.Sb}function fc(a,b){return b.e()?a.da&&!a.Sb:Zb(a,J(b))}function Zb(a,b){return a.da&&!a.Sb||a.A.Da(b)}$b.prototype.j=function(){return this.A};function gc(a,b){return hc(a.name,b.name)}function ic(a,b){return hc(a,b)};function K(a,b){this.name=a;this.R=b}function jc(a,b){return new K(a,b)};function kc(a,b){return a&&"object"===typeof a?(H(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function lc(a,b){var c=new mc;nc(a,new L(""),function(a,e){oc(c,a,pc(e,b))});return c}function pc(a,b){var c=a.C().H(),c=kc(c,b),d;if(a.J()){var e=kc(a.Ca(),b);return e!==a.Ca()||c!==a.C().H()?new qc(e,M(c)):a}d=a;c!==a.C().H()&&(d=d.fa(new qc(c)));a.O(N,function(a,c){var e=pc(c,b);e!==c&&(d=d.T(a,e))});return d};var rc=function(){var a=1;return function(){return a++}}(),H=kb,sc=lb;
	function tc(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==l)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ra(d,c,c+8192));b=a}return b}catch(m){E("base64Decode failed: ",
	m)}return null}function uc(a){var b=mb(a);a=new na;a.update(b);var b=[],c=8*a.Nd;56>a.$b?a.update(a.xd,56-a.$b):a.update(a.xd,a.Wa-(a.$b-56));for(var d=a.Wa-1;56<=d;d--)a.Ud[d]=c&255,c/=256;oa(a,a.Ud);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.M[d]>>e&255,++c;return ab(b)}function vc(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+vc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var Tb=null,wc=!0;
	function xc(a,b){kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Tb=q(console.log,console):"object"===typeof console.log&&(Tb=function(a){console.log(a)})),b&&zb.set("logging_enabled",!0)):ha(a)?Tb=a:(Tb=null,zb.remove("logging_enabled"))}function E(a){!0===wc&&(wc=!1,null===Tb&&!0===zb.get("logging_enabled")&&xc(!0));if(Tb){var b=vc.apply(null,arguments);Tb(b)}}
	function yc(a){return function(){E(a,arguments)}}function zc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+vc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Ac(a){var b=vc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+vc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function Bc(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(p(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var l=h[k];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch(m){}f+="/"+l}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&Ac(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
	c&&"undefined"!=c||Ac("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{jc:new Hb(b,d,c,"ws"===e||"wss"===e),path:new L(f)}}function Cc(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
	function Dc(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
	function hc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Ec(a),d=Ec(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Fc(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
	function Gc(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=Gc(a[b[d]]);return c+"}"}function Hc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Ic(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else r(a,b)}
	function Jc(a){H(!Cc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var Kc=/^-?\d{1,10}$/;function Ec(a){return Kc.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function ub(a){try{a()}catch(b){setTimeout(function(){O("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function Lc(a,b,c){Object.defineProperty(a,b,{get:c})}function Mc(a,b){var c=setTimeout(a,b);"object"===typeof c&&c.unref&&c.unref();return c};function Nc(a){var b={},c={},d={},e="";try{var f=a.split("."),b=ob(tc(f[0])||""),c=ob(tc(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{tg:b,Ie:c,data:d,mg:e}}function Oc(a){a=Nc(a);var b=a.Ie;return!!a.mg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function Pc(a){a=Nc(a).Ie;return"object"===typeof a&&!0===w(a,"admin")};function Qc(a,b,c){this.f=yc("p:rest:");this.L=a;this.Gb=b;this.Td=c;this.$={}}function Rc(a,b){if(n(b))return"tag$"+b;H(Sc(a.m),"should have a tag if it's not a default query.");return a.path.toString()}g=Qc.prototype;
	g.$e=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ja());var f=Rc(a,c),h={};this.$[f]=h;a=Tc(a.m);var k=this;Uc(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Gb(e,u,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.uf=function(a,b){var c=Rc(a,b);delete this.$[c]};g.kf=function(){};g.oe=function(){};g.cf=function(){};g.vd=function(){};g.put=function(){};g.af=function(){};g.ve=function(){};
	function Uc(a,b,c,d){c=c||{};c.format="export";a.Td.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.L.Rc?"https://":"http://")+a.L.host+b+"?"+fb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=ob(h.responseText)}catch(c){O("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
	b)}else 401!==h.status&&404!==h.status&&O("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Vc(a,b,c){this.type=Wc;this.source=a;this.path=b;this.children=c}Vc.prototype.Lc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new Ab(this.source,C,a.value):new Vc(this.source,C,a);H(J(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new Vc(this.source,D(this.path),this.children)};Vc.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function Xc(a,b){this.rf={};this.Uc=new Mb(a);this.va=b;var c=1E4+2E4*Math.random();Mc(q(this.lf,this),Math.floor(c))}Xc.prototype.lf=function(){var a=this.Uc.get(),b={},c=!1,d;for(d in a)0<a[d]&&cb(this.rf,d)&&(b[d]=a[d],c=!0);c&&this.va.ve(b);Mc(q(this.lf,this),Math.floor(6E5*Math.random()))};var Yc={},Zc={};function $c(a){a=a.toString();Yc[a]||(Yc[a]=new Kb);return Yc[a]}function ad(a,b){var c=a.toString();Zc[c]||(Zc[c]=b());return Zc[c]};var bd=null;"undefined"!==typeof MozWebSocket?bd=MozWebSocket:"undefined"!==typeof WebSocket&&(bd=WebSocket);function cd(a,b,c,d){this.Xd=a;this.f=yc(this.Xd);this.frames=this.yc=null;this.pb=this.qb=this.Ce=0;this.Va=$c(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Je=Jb(b,"websocket",a)}var dd;
	cd.prototype.open=function(a,b){this.ib=b;this.Xf=a;this.f("Websocket connecting to "+this.Je);this.vc=!1;yb.set("previous_websocket_failure",!0);try{this.Ia=new bd(this.Je)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.Ia.onopen=function(){e.f("Websocket connected.");e.vc=!0};this.Ia.onclose=function(){e.f("Websocket connection was disconnected.");e.Ia=null;e.bb()};this.Ia.onmessage=function(a){if(null!==e.Ia)if(a=a.data,e.pb+=
	a.length,Lb(e.Va,"bytes_received",a.length),ed(e),null!==e.frames)fd(e,a);else{a:{H(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Ce=b;e.frames=[];a=null;break a}}e.Ce=1;e.frames=[]}null!==a&&fd(e,a)}};this.Ia.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};cd.prototype.start=function(){};
	cd.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==bd&&!dd};cd.responsesRequiredToBeHealthy=2;cd.healthyTimeout=3E4;g=cd.prototype;g.qd=function(){yb.remove("previous_websocket_failure")};function fd(a,b){a.frames.push(b);if(a.frames.length==a.Ce){var c=a.frames.join("");a.frames=null;c=ob(c);a.Xf(c)}}
	g.send=function(a){ed(this);a=B(a);this.qb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=Hc(a,16384);1<a.length&&gd(this,String(a.length));for(var b=0;b<a.length;b++)gd(this,a[b])};g.Sc=function(){this.Ab=!0;this.yc&&(clearInterval(this.yc),this.yc=null);this.Ia&&(this.Ia.close(),this.Ia=null)};g.bb=function(){this.Ab||(this.f("WebSocket is closing itself"),this.Sc(),this.ib&&(this.ib(this.vc),this.ib=null))};g.close=function(){this.Ab||(this.f("WebSocket is being closed"),this.Sc())};
	function ed(a){clearInterval(a.yc);a.yc=setInterval(function(){a.Ia&&gd(a,"0");ed(a)},Math.floor(45E3))}function gd(a,b){try{a.Ia.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(q(a.bb,a),0)}};function hd(){this.fb={}}
	function jd(a,b){var c=b.type,d=b.Xa;H("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");H(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.fb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.fb[d]=new I("child_changed",b.Ja,d,e.Ja);else if("child_removed"==c&&"child_added"==f)delete a.fb[d];else if("child_removed"==c&&"child_changed"==f)a.fb[d]=new I("child_removed",e.ne,d);else if("child_changed"==c&&
	"child_added"==f)a.fb[d]=new I("child_added",b.Ja,d);else if("child_changed"==c&&"child_changed"==f)a.fb[d]=new I("child_changed",b.Ja,d,e.ne);else throw sc("Illegal combination of changes: "+b+" occurred after "+e);}else a.fb[d]=b};function kd(a){this.V=a;this.g=a.m.g}function ld(a,b,c,d){var e=[],f=[];Ja(b,function(b){"child_changed"===b.type&&a.g.ld(b.ne,b.Ja)&&f.push(new I("child_moved",b.Ja,b.Xa))});md(a,e,"child_removed",b,d,c);md(a,e,"child_added",b,d,c);md(a,e,"child_moved",f,d,c);md(a,e,"child_changed",b,d,c);md(a,e,cc,b,d,c);return e}function md(a,b,c,d,e,f){d=Ka(d,function(a){return a.type===c});Sa(d,q(a.Ff,a));Ja(d,function(c){var d=nd(a,c,f);Ja(e,function(e){e.nf(c.type)&&b.push(e.createEvent(d,a.V))})})}
	function nd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Bd=c.Ve(b.Xa,b.Ja,a.g));return b}kd.prototype.Ff=function(a,b){if(null==a.Xa||null==b.Xa)throw sc("Should only compare child_ events.");return this.g.compare(new K(a.Xa,a.Ja),new K(b.Xa,b.Ja))};function od(a,b){this.Qd=a;this.Df=b}function pd(a){this.U=a}
	pd.prototype.eb=function(a,b,c,d){var e=new hd,f;if(b.type===Bb)b.source.be?c=qd(this,a,b.path,b.Ga,c,d,e):(H(b.source.Se,"Unknown source."),f=b.source.Be||ec(a.w())&&!b.path.e(),c=rd(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===Wc)b.source.be?c=sd(this,a,b.path,b.children,c,d,e):(H(b.source.Se,"Unknown source."),f=b.source.Be||ec(a.w()),c=td(this,a,b.path,b.children,c,d,f,e));else if(b.type===ud)if(b.Gd)if(b=b.path,null!=c.lc(b))c=a;else{f=new Yb(c,a,d);d=a.N.j();if(b.e()||".priority"===J(b))dc(a.w())?
	b=c.Aa(ac(a)):(b=a.w().j(),H(b instanceof P,"serverChildren would be complete if leaf node"),b=c.qc(b)),b=this.U.ya(d,b,e);else{var h=J(b),k=c.pc(h,a.w());null==k&&Zb(a.w(),h)&&(k=d.Q(h));b=null!=k?this.U.F(d,h,k,D(b),f,e):a.N.j().Da(h)?this.U.F(d,h,G,D(b),f,e):d;b.e()&&dc(a.w())&&(d=c.Aa(ac(a)),d.J()&&(b=this.U.ya(b,d,e)))}d=dc(a.w())||null!=c.lc(C);c=vd(a,b,d,this.U.Na())}else c=wd(this,a,b.path,b.Ob,c,d,e);else if(b.type===Db)d=b.path,b=a.w(),f=b.j(),h=b.da||d.e(),c=xd(this,new yd(a.N,new $b(f,
	h,b.Sb)),d,c,Xb,e);else throw sc("Unknown operation type: "+b.type);e=ta(e.fb);d=c;b=d.N;b.da&&(f=b.j().J()||b.j().e(),h=zd(a),(0<e.length||!a.N.da||f&&!b.j().Z(h)||!b.j().C().Z(h.C()))&&e.push(bc(zd(d))));return new od(c,e)};
	function xd(a,b,c,d,e,f){var h=b.N;if(null!=d.lc(c))return b;var k;if(c.e())H(dc(b.w()),"If change path is empty, we must have complete server data"),ec(b.w())?(e=ac(b),d=d.qc(e instanceof P?e:G)):d=d.Aa(ac(b)),f=a.U.ya(b.N.j(),d,f);else{var l=J(c);if(".priority"==l)H(1==Ad(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.Zc(c,f,k),f=null!=d?a.U.fa(f,d):h.j();else{var m=D(c);Zb(h,l)?(k=b.w().j(),d=d.Zc(c,h.j(),k),d=null!=d?h.j().Q(l).F(m,d):h.j().Q(l)):d=d.pc(l,
	b.w());f=null!=d?a.U.F(h.j(),l,d,m,e,f):h.j()}}return vd(b,f,h.da||c.e(),a.U.Na())}function rd(a,b,c,d,e,f,h,k){var l=b.w();h=h?a.U:a.U.Ub();if(c.e())d=h.ya(l.j(),d,null);else if(h.Na()&&!l.Sb)d=l.j().F(c,d),d=h.ya(l.j(),d,null);else{var m=J(c);if(!fc(l,c)&&1<Ad(c))return b;var u=D(c);d=l.j().Q(m).F(u,d);d=".priority"==m?h.fa(l.j(),d):h.F(l.j(),m,d,u,Xb,null)}l=l.da||c.e();b=new yd(b.N,new $b(d,l,h.Na()));return xd(a,b,c,e,new Yb(e,b,f),k)}
	function qd(a,b,c,d,e,f,h){var k=b.N;e=new Yb(e,b,f);if(c.e())h=a.U.ya(b.N.j(),d,h),a=vd(b,h,!0,a.U.Na());else if(f=J(c),".priority"===f)h=a.U.fa(b.N.j(),d),a=vd(b,h,k.da,k.Sb);else{c=D(c);var l=k.j().Q(f);if(!c.e()){var m=e.Te(f);d=null!=m?".priority"===Bd(c)&&m.P(c.parent()).e()?m:m.F(c,d):G}l.Z(d)?a=b:(h=a.U.F(k.j(),f,d,c,e,h),a=vd(b,h,k.da,a.U.Na()))}return a}
	function sd(a,b,c,d,e,f,h){var k=b;Cd(d,function(d,m){var u=c.n(d);Zb(b.N,J(u))&&(k=qd(a,k,u,m,e,f,h))});Cd(d,function(d,m){var u=c.n(d);Zb(b.N,J(u))||(k=qd(a,k,u,m,e,f,h))});return k}function Dd(a,b){Cd(b,function(b,d){a=a.F(b,d)});return a}
	function td(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!dc(b.w()))return b;var l=b;c=c.e()?d:Ed(Q,c,d);var m=b.w().j();c.children.ha(function(c,d){if(m.Da(c)){var F=b.w().j().Q(c),F=Dd(F,d);l=rd(a,l,new L(c),F,e,f,h,k)}});c.children.ha(function(c,d){var F=!Zb(b.w(),c)&&null==d.value;m.Da(c)||F||(F=b.w().j().Q(c),F=Dd(F,d),l=rd(a,l,new L(c),F,e,f,h,k))});return l}
	function wd(a,b,c,d,e,f,h){if(null!=e.lc(c))return b;var k=ec(b.w()),l=b.w();if(null!=d.value){if(c.e()&&l.da||fc(l,c))return rd(a,b,c,l.j().P(c),e,f,k,h);if(c.e()){var m=Q;l.j().O(Fd,function(a,b){m=m.set(new L(a),b)});return td(a,b,c,m,e,f,k,h)}return b}m=Q;Cd(d,function(a){var b=c.n(a);fc(l,b)&&(m=m.set(a,l.j().P(b)))});return td(a,b,c,m,e,f,k,h)};function Gd(a){this.g=a}g=Gd.prototype;g.F=function(a,b,c,d,e,f){H(a.xc(this.g),"A node must be indexed if only a child is updated");e=a.Q(b);if(e.P(d).Z(c.P(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?jd(f,new I("child_removed",e,b)):H(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?jd(f,new I("child_added",c,b)):jd(f,new I("child_changed",c,b,e)));return a.J()&&c.e()?a:a.T(b,c).nb(this.g)};
	g.ya=function(a,b,c){null!=c&&(a.J()||a.O(N,function(a,e){b.Da(a)||jd(c,new I("child_removed",e,a))}),b.J()||b.O(N,function(b,e){if(a.Da(b)){var f=a.Q(b);f.Z(e)||jd(c,new I("child_changed",e,b,f))}else jd(c,new I("child_added",e,b))}));return b.nb(this.g)};g.fa=function(a,b){return a.e()?G:a.fa(b)};g.Na=function(){return!1};g.Ub=function(){return this};function Hd(a){this.ee=new Gd(a.g);this.g=a.g;var b;a.ka?(b=Id(a),b=a.g.Dc(Jd(a),b)):b=a.g.Gc();this.Tc=b;a.na?(b=Kd(a),a=a.g.Dc(Ld(a),b)):a=a.g.Ec();this.uc=a}g=Hd.prototype;g.matches=function(a){return 0>=this.g.compare(this.Tc,a)&&0>=this.g.compare(a,this.uc)};g.F=function(a,b,c,d,e,f){this.matches(new K(b,c))||(c=G);return this.ee.F(a,b,c,d,e,f)};
	g.ya=function(a,b,c){b.J()&&(b=G);var d=b.nb(this.g),d=d.fa(G),e=this;b.O(N,function(a,b){e.matches(new K(a,b))||(d=d.T(a,G))});return this.ee.ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.ee};function Md(a){this.sa=new Hd(a);this.g=a.g;H(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Ib=!Nd(a)}g=Md.prototype;g.F=function(a,b,c,d,e,f){this.sa.matches(new K(b,c))||(c=G);return a.Q(b).Z(c)?a:a.Eb()<this.oa?this.sa.Ub().F(a,b,c,d,e,f):Od(this,a,b,c,e,f)};
	g.ya=function(a,b,c){var d;if(b.J()||b.e())d=G.nb(this.g);else if(2*this.oa<b.Eb()&&b.xc(this.g)){d=G.nb(this.g);b=this.Ib?b.Zb(this.sa.uc,this.g):b.Xb(this.sa.Tc,this.g);for(var e=0;0<b.Pa.length&&e<this.oa;){var f=R(b),h;if(h=this.Ib?0>=this.g.compare(this.sa.Tc,f):0>=this.g.compare(f,this.sa.uc))d=d.T(f.name,f.R),e++;else break}}else{d=b.nb(this.g);d=d.fa(G);var k,l,m;if(this.Ib){b=d.We(this.g);k=this.sa.uc;l=this.sa.Tc;var u=Pd(this.g);m=function(a,b){return u(b,a)}}else b=d.Wb(this.g),k=this.sa.Tc,
	l=this.sa.uc,m=Pd(this.g);for(var e=0,z=!1;0<b.Pa.length;)f=R(b),!z&&0>=m(k,f)&&(z=!0),(h=z&&e<this.oa&&0>=m(f,l))?e++:d=d.T(f.name,G)}return this.sa.Ub().ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.sa.Ub()};
	function Od(a,b,c,d,e,f){var h;if(a.Ib){var k=Pd(a.g);h=function(a,b){return k(b,a)}}else h=Pd(a.g);H(b.Eb()==a.oa,"");var l=new K(c,d),m=a.Ib?Qd(b,a.g):Rd(b,a.g),u=a.sa.matches(l);if(b.Da(c)){for(var z=b.Q(c),m=e.ce(a.g,m,a.Ib);null!=m&&(m.name==c||b.Da(m.name));)m=e.ce(a.g,m,a.Ib);e=null==m?1:h(m,l);if(u&&!d.e()&&0<=e)return null!=f&&jd(f,new I("child_changed",d,c,z)),b.T(c,d);null!=f&&jd(f,new I("child_removed",z,c));b=b.T(c,G);return null!=m&&a.sa.matches(m)?(null!=f&&jd(f,new I("child_added",
	m.R,m.name)),b.T(m.name,m.R)):b}return d.e()?b:u&&0<=h(m,l)?(null!=f&&(jd(f,new I("child_removed",m.R,m.name)),jd(f,new I("child_added",d,c))),b.T(c,d).T(m.name,G)):b};function qc(a,b){this.B=a;H(n(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||G;Sd(this.aa);this.Db=null}var Td=["object","boolean","number","string"];g=qc.prototype;g.J=function(){return!0};g.C=function(){return this.aa};g.fa=function(a){return new qc(this.B,a)};g.Q=function(a){return".priority"===a?this.aa:G};g.P=function(a){return a.e()?this:".priority"===J(a)?this.aa:G};g.Da=function(){return!1};g.Ve=function(){return null};
	g.T=function(a,b){return".priority"===a?this.fa(b):b.e()&&".priority"!==a?this:G.T(a,b).fa(this.aa)};g.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;H(".priority"!==c||1===Ad(a),".priority must be the last token in a path");return this.T(c,G.F(D(a),b))};g.e=function(){return!1};g.Eb=function(){return 0};g.O=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ca(),".priority":this.C().H()}:this.Ca()};
	g.hash=function(){if(null===this.Db){var a="";this.aa.e()||(a+="priority:"+Ud(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+Jc(this.B):a+this.B;this.Db=uc(a)}return this.Db};g.Ca=function(){return this.B};g.rc=function(a){if(a===G)return 1;if(a instanceof P)return-1;H(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Ia(Td,b),e=Ia(Td,c);H(0<=d,"Unknown leaf type: "+b);H(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
	g.nb=function(){return this};g.xc=function(){return!0};g.Z=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.Z(a.aa):!1};g.toString=function(){return B(this.H(!0))};function Vd(){}var Wd={};function Pd(a){return q(a.compare,a)}Vd.prototype.ld=function(a,b){return 0!==this.compare(new K("[MIN_NAME]",a),new K("[MIN_NAME]",b))};Vd.prototype.Gc=function(){return Xd};function Yd(a){H(!a.e()&&".priority"!==J(a),"Can't create PathIndex with empty path or .priority key");this.bc=a}la(Yd,Vd);g=Yd.prototype;g.wc=function(a){return!a.P(this.bc).e()};g.compare=function(a,b){var c=a.R.P(this.bc),d=b.R.P(this.bc),c=c.rc(d);return 0===c?hc(a.name,b.name):c};
	g.Dc=function(a,b){var c=M(a),c=G.F(this.bc,c);return new K(b,c)};g.Ec=function(){var a=G.F(this.bc,Zd);return new K("[MAX_NAME]",a)};g.toString=function(){return this.bc.slice().join("/")};function $d(){}la($d,Vd);g=$d.prototype;g.compare=function(a,b){var c=a.R.C(),d=b.R.C(),c=c.rc(d);return 0===c?hc(a.name,b.name):c};g.wc=function(a){return!a.C().e()};g.ld=function(a,b){return!a.C().Z(b.C())};g.Gc=function(){return Xd};g.Ec=function(){return new K("[MAX_NAME]",new qc("[PRIORITY-POST]",Zd))};
	g.Dc=function(a,b){var c=M(a);return new K(b,new qc("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var N=new $d;function ae(){}la(ae,Vd);g=ae.prototype;g.compare=function(a,b){return hc(a.name,b.name)};g.wc=function(){throw sc("KeyIndex.isDefinedOn not expected to be called.");};g.ld=function(){return!1};g.Gc=function(){return Xd};g.Ec=function(){return new K("[MAX_NAME]",G)};g.Dc=function(a){H(p(a),"KeyIndex indexValue must always be a string.");return new K(a,G)};g.toString=function(){return".key"};
	var Fd=new ae;function be(){}la(be,Vd);g=be.prototype;g.compare=function(a,b){var c=a.R.rc(b.R);return 0===c?hc(a.name,b.name):c};g.wc=function(){return!0};g.ld=function(a,b){return!a.Z(b)};g.Gc=function(){return Xd};g.Ec=function(){return ce};g.Dc=function(a,b){var c=M(a);return new K(b,c)};g.toString=function(){return".value"};var de=new be;function ee(){this.Rb=this.na=this.Kb=this.ka=this.xa=!1;this.oa=0;this.mb="";this.dc=null;this.zb="";this.ac=null;this.xb="";this.g=N}var fe=new ee;function Nd(a){return""===a.mb?a.ka:"l"===a.mb}function Jd(a){H(a.ka,"Only valid if start has been set");return a.dc}function Id(a){H(a.ka,"Only valid if start has been set");return a.Kb?a.zb:"[MIN_NAME]"}function Ld(a){H(a.na,"Only valid if end has been set");return a.ac}
	function Kd(a){H(a.na,"Only valid if end has been set");return a.Rb?a.xb:"[MAX_NAME]"}function ge(a){var b=new ee;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.dc=a.dc;b.Kb=a.Kb;b.zb=a.zb;b.na=a.na;b.ac=a.ac;b.Rb=a.Rb;b.xb=a.xb;b.g=a.g;b.mb=a.mb;return b}g=ee.prototype;g.ke=function(a){var b=ge(this);b.xa=!0;b.oa=a;b.mb="l";return b};g.le=function(a){var b=ge(this);b.xa=!0;b.oa=a;b.mb="r";return b};g.Ld=function(a,b){var c=ge(this);c.ka=!0;n(a)||(a=null);c.dc=a;null!=b?(c.Kb=!0,c.zb=b):(c.Kb=!1,c.zb="");return c};
	g.ed=function(a,b){var c=ge(this);c.na=!0;n(a)||(a=null);c.ac=a;n(b)?(c.Rb=!0,c.xb=b):(c.vg=!1,c.xb="");return c};function he(a,b){var c=ge(a);c.g=b;return c}function ie(a){var b={};a.ka&&(b.sp=a.dc,a.Kb&&(b.sn=a.zb));a.na&&(b.ep=a.ac,a.Rb&&(b.en=a.xb));if(a.xa){b.l=a.oa;var c=a.mb;""===c&&(c=Nd(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}function S(a){return!(a.ka||a.na||a.xa)}function Sc(a){return S(a)&&a.g==N}
	function Tc(a){var b={};if(Sc(a))return b;var c;a.g===N?c="$priority":a.g===de?c="$value":a.g===Fd?c="$key":(H(a.g instanceof Yd,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ka&&(b.startAt=B(a.dc),a.Kb&&(b.startAt+=","+B(a.zb)));a.na&&(b.endAt=B(a.ac),a.Rb&&(b.endAt+=","+B(a.xb)));a.xa&&(Nd(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}g.toString=function(){return B(ie(this))};function je(a,b){this.md=a;this.cc=b}je.prototype.get=function(a){var b=w(this.md,a);if(!b)throw Error("No index defined for "+a);return b===Wd?null:b};function ke(a,b,c){var d=pa(a.md,function(d,f){var h=w(a.cc,f);H(h,"Missing index implementation for "+f);if(d===Wd){if(h.wc(b.R)){for(var k=[],l=c.Wb(jc),m=R(l);m;)m.name!=b.name&&k.push(m),m=R(l);k.push(b);return le(k,Pd(h))}return Wd}h=c.get(b.name);k=d;h&&(k=k.remove(new K(b.name,h)));return k.Oa(b,b.R)});return new je(d,a.cc)}
	function me(a,b,c){var d=pa(a.md,function(a){if(a===Wd)return a;var d=c.get(b.name);return d?a.remove(new K(b.name,d)):a});return new je(d,a.cc)}var ne=new je({".priority":Wd},{".priority":N});function oe(){this.set={}}g=oe.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return cb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return ya(this.set)};g.count=function(){return ra(this.set)};function pe(a,b){r(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];r(this.set,function(b,c){a.push(c)});return a};function qe(a,b,c,d){this.Xd=a;this.f=yc(a);this.jc=b;this.pb=this.qb=0;this.Va=$c(b);this.tf=c;this.vc=!1;this.Cb=d;this.Xc=function(a){return Jb(b,"long_polling",a)}}var re,se;
	qe.prototype.open=function(a,b){this.Me=0;this.ia=b;this.bf=new rb(a);this.Ab=!1;var c=this;this.sb=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.sb=null},Math.floor(3E4));Dc(function(){if(!c.Ab){c.Ta=new te(function(a,b,d,k,l){ue(c,arguments);if(c.Ta)if(c.sb&&(clearTimeout(c.sb),c.sb=null),c.vc=!0,"start"==a)c.id=b,c.ff=d;else if("close"===a)b?(c.Ta.Id=!1,sb(c.bf,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){ue(c,arguments);
	tb(c.bf,a,b)},function(){c.bb()},c.Xc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.Od&&(a.cb=c.Ta.Od);a.v="5";c.tf&&(a.s=c.tf);c.Cb&&(a.ls=c.Cb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Xc(a);c.f("Connecting via long-poll to "+a);ve(c.Ta,a,function(){})}})};
	qe.prototype.start=function(){var a=this.Ta,b=this.ff;a.Vf=this.id;a.Wf=b;for(a.Sd=!0;we(a););a=this.id;b=this.ff;this.fc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.fc.src=this.Xc(c);this.fc.style.display="none";document.body.appendChild(this.fc)};
	qe.isAvailable=function(){return re||!se&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.rg)&&!0};g=qe.prototype;g.qd=function(){};g.Sc=function(){this.Ab=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.fc&&(document.body.removeChild(this.fc),this.fc=null);this.sb&&(clearTimeout(this.sb),this.sb=null)};
	g.bb=function(){this.Ab||(this.f("Longpoll is closing itself"),this.Sc(),this.ia&&(this.ia(this.vc),this.ia=null))};g.close=function(){this.Ab||(this.f("Longpoll is being closed."),this.Sc())};g.send=function(a){a=B(a);this.qb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=mb(a);a=ab(a,!0);a=Hc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.Pc.push({jg:this.Me,pg:a.length,Oe:a[b]});c.Sd&&we(c);this.Me++}};function ue(a,b){var c=B(b).length;a.pb+=c;Lb(a.Va,"bytes_received",c)}
	function te(a,b,c,d){this.Xc=d;this.ib=c;this.se=new oe;this.Pc=[];this.Yd=Math.floor(1E8*Math.random());this.Id=!0;this.Od=rc();window["pLPCommand"+this.Od]=a;window["pRTLPCB"+this.Od]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||E("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
	a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.gb.open(),this.Ea.gb.write(a),this.Ea.gb.close()}catch(f){E("frame writing exception"),f.stack&&E(f.stack),E(f)}}
	te.prototype.close=function(){this.Sd=!1;if(this.Ea){this.Ea.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.ib;b&&(this.ib=null,b())};
	function we(a){if(a.Sd&&a.Id&&a.se.count()<(0<a.Pc.length?2:1)){a.Yd++;var b={};b.id=a.Vf;b.pw=a.Wf;b.ser=a.Yd;for(var b=a.Xc(b),c="",d=0;0<a.Pc.length;)if(1870>=a.Pc[0].Oe.length+30+c.length){var e=a.Pc.shift(),c=c+"&seg"+d+"="+e.jg+"&ts"+d+"="+e.pg+"&d"+d+"="+e.Oe;d++}else break;xe(a,b+c,a.Yd);return!0}return!1}function xe(a,b,c){function d(){a.se.remove(c);we(a)}a.se.add(c,1);var e=setTimeout(d,Math.floor(25E3));ve(a,b,function(){clearTimeout(e);d()})}
	function ve(a,b,c){setTimeout(function(){try{if(a.Id){var d=a.Ea.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){E("Long-poll script failed to load: "+b);a.Id=!1;a.close()};a.Ea.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};function ye(a){ze(this,a)}var Ae=[qe,cd];function ze(a,b){var c=cd&&cd.isAvailable(),d=c&&!(yb.Ze||!0===yb.get("previous_websocket_failure"));b.qg&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Vc=[cd];else{var e=a.Vc=[];Ic(Ae,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function Be(a){if(0<a.Vc.length)return a.Vc[0];throw Error("No transports available");};function Ce(a,b,c,d,e,f,h){this.id=a;this.f=yc("c:"+this.id+":");this.qe=c;this.Kc=d;this.ia=e;this.pe=f;this.L=b;this.yd=[];this.Ke=0;this.sf=new ye(b);this.Ua=0;this.Cb=h;this.f("Connection created");De(this)}
	function De(a){var b=Be(a.sf);a.I=new b("c:"+a.id+":"+a.Ke++,a.L,void 0,a.Cb);a.ue=b.responsesRequiredToBeHealthy||0;var c=Ee(a,a.I),d=Fe(a,a.I);a.Wc=a.I;a.Qc=a.I;a.D=null;a.Bb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.kd=Mc(function(){a.kd=null;a.Bb||(a.I&&102400<a.I.pb?(a.f("Connection exceeded healthy timeout but has received "+a.I.pb+" bytes.  Marking connection healthy."),a.Bb=!0,a.I.qd()):a.I&&10240<a.I.qb?a.f("Connection exceeded healthy timeout but has sent "+
	a.I.qb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function Fe(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.L.$a.substr(0,2)&&(yb.remove("host:"+a.L.host),a.L.$a=a.L.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Wc!==c&&a.Qc!==c||a.close()):a.f("closing an old connection")}}
	function Ee(a,b){return function(c){if(2!=a.Ua)if(b===a.Qc){var d=Fc("t",c);c=Fc("d",c);if("c"==d){if(d=Fc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.qf=c.s;Ib(a.L,f);0==a.Ua&&(a.I.start(),Ge(a,a.I,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.sf,(c=1<c.Vc.length?c.Vc[1]:null)&&He(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Qc=a.D;for(c=0;c<a.yd.length;++c)a.ud(a.yd[c]);a.yd=[];Ie(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
	a.pe&&(a.pe(c),a.pe=null),a.ia=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ib(a.L,c),1===a.Ua?a.close():(Je(a),De(a))):"e"===d?zc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Ke(a),Le(a)):zc("Unknown control packet command: "+d)}else"d"==d&&a.ud(c)}else if(b===a.D)if(d=Fc("t",c),c=Fc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Me(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Wc!==a.D&&a.Qc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
	a.pf--,Me(a)));else if("d"==d)a.yd.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}Ce.prototype.ua=function(a){Ne(this,{t:"d",d:a})};function Ie(a){a.Wc===a.D&&a.Qc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Xd),a.I=a.D,a.D=null)}
	function Me(a){0>=a.pf?(a.f("Secondary connection is healthy."),a.Bb=!0,a.D.qd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Wc=a.D,Ie(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}Ce.prototype.ud=function(a){Ke(this);this.qe(a)};function Ke(a){a.Bb||(a.ue--,0>=a.ue&&(a.f("Primary connection is healthy."),a.Bb=!0,a.I.qd()))}
	function He(a,b){a.D=new b("c:"+a.id+":"+a.Ke++,a.L,a.qf);a.pf=b.responsesRequiredToBeHealthy||0;a.D.open(Ee(a,a.D),Fe(a,a.D));Mc(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function Ge(a,b,c){a.f("Realtime connection established.");a.I=b;a.Ua=1;a.Kc&&(a.Kc(c,a.qf),a.Kc=null);0===a.ue?(a.f("Primary connection is healthy."),a.Bb=!0):Mc(function(){Le(a)},Math.floor(5E3))}
	function Le(a){a.Bb||1!==a.Ua||(a.f("sending ping on primary."),Ne(a,{t:"c",d:{t:"p",d:{}}}))}function Ne(a,b){if(1!==a.Ua)throw"Connection is not connected";a.Wc.send(b)}Ce.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,Je(this),this.ia&&(this.ia(),this.ia=null))};function Je(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.kd&&(clearTimeout(a.kd),a.kd=null)};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(D(a),D(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
	function Oe(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=hc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function J(a){return a.Y>=a.o.length?null:a.o[a.Y]}function Ad(a){return a.o.length-a.Y}function D(a){var b=a.Y;b<a.o.length&&b++;return new L(a.o,b)}function Bd(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}g=L.prototype;
	g.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Y+(a||0))};g.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new L(a,0)};
	g.n=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0)};g.e=function(){return this.Y>=this.o.length};g.Z=function(a){if(Ad(this)!==Ad(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
	g.contains=function(a){var b=this.Y,c=a.Y;if(Ad(this)>Ad(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var C=new L("");function Pe(a,b){this.Qa=a.slice();this.Ha=Math.max(1,this.Qa.length);this.Pe=b;for(var c=0;c<this.Qa.length;c++)this.Ha+=nb(this.Qa[c]);Qe(this)}Pe.prototype.push=function(a){0<this.Qa.length&&(this.Ha+=1);this.Qa.push(a);this.Ha+=nb(a);Qe(this)};Pe.prototype.pop=function(){var a=this.Qa.pop();this.Ha-=nb(a);0<this.Qa.length&&--this.Ha};
	function Qe(a){if(768<a.Ha)throw Error(a.Pe+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Qa.length)throw Error(a.Pe+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Re(a));}function Re(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Se(a){a instanceof Te||Ac("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,C);this.INTERNAL=new Ue(this)}var Ve={TIMESTAMP:{".sv":"timestamp"}};g=Se.prototype;g.app=null;g.jf=function(a){We(this,"ref");x("database.ref",0,1,arguments.length);return n(a)?this.ba.n(a):this.ba};
	g.gg=function(a){We(this,"database.refFromURL");x("database.refFromURL",1,1,arguments.length);var b=Bc(a);Xe("database.refFromURL",b);var c=b.jc;c.host!==this.ta.L.host&&Ac("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.L.host+")");return this.jf(b.path.toString())};function We(a,b){null===a.ta&&Ac("Cannot call "+b+" on a deleted database.")}g.Pf=function(){x("database.goOffline",0,0,arguments.length);We(this,"goOffline");this.ta.ab()};
	g.Qf=function(){x("database.goOnline",0,0,arguments.length);We(this,"goOnline");this.ta.kc()};Object.defineProperty(Se.prototype,"app",{get:function(){return this.ta.app}});function Ue(a){this.Ya=a}Ue.prototype.delete=function(){We(this.Ya,"delete");var a=Ye.Vb(),b=this.Ya.ta;w(a.lb,b.app.name)!==b&&Ac("Database "+b.app.name+" has already been deleted.");b.ab();delete a.lb[b.app.name];this.Ya.ta=null;this.Ya.ba=null;this.Ya=this.Ya.INTERNAL=null;return firebase.Promise.resolve()};
	Se.prototype.ref=Se.prototype.jf;Se.prototype.refFromURL=Se.prototype.gg;Se.prototype.goOnline=Se.prototype.Qf;Se.prototype.goOffline=Se.prototype.Pf;Ue.prototype["delete"]=Ue.prototype.delete;function mc(){this.k=this.B=null}mc.prototype.find=function(a){if(null!=this.B)return this.B.P(a);if(a.e()||null==this.k)return null;var b=J(a);a=D(a);return this.k.contains(b)?this.k.get(b).find(a):null};function oc(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new oe);var d=J(b);a.k.contains(d)||a.k.add(d,new mc);a=a.k.get(d);b=D(b);oc(a,b,c)}}
	function Ze(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.O(N,function(b,c){oc(a,new L(b),c)});return Ze(a,b)}return null!==a.k?(c=J(b),b=D(b),a.k.contains(c)&&Ze(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function nc(a,b,c){null!==a.B?c(b,a.B):a.O(function(a,e){var f=new L(b.toString()+"/"+a);nc(e,f,c)})}mc.prototype.O=function(a){null!==this.k&&pe(this.k,function(b,c){a(b,c)})};var $e=/[\[\].#$\/\u0000-\u001F\u007F]/,af=/[\[\].#$\u0000-\u001F\u007F]/;function bf(a){return p(a)&&0!==a.length&&!$e.test(a)}function cf(a){return null===a||p(a)||ga(a)&&!Cc(a)||ia(a)&&cb(a,".sv")}function df(a,b,c,d){d&&!n(b)||ef(y(a,1,d),b,c)}
	function ef(a,b,c){c instanceof L&&(c=new Pe(c,a));if(!n(b))throw Error(a+"contains undefined "+Re(c));if(ha(b))throw Error(a+"contains a function "+Re(c)+" with contents: "+b.toString());if(Cc(b))throw Error(a+"contains "+b.toString()+" "+Re(c));if(p(b)&&b.length>10485760/3&&10485760<nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Re(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;db(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!bf(b)))throw Error(a+" contains an invalid key ("+b+") "+Re(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);ef(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Re(c)+" in addition to actual children.");}}
	function ff(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!bf(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Oe);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
	function gf(a,b,c){var d=y(a,1,!1);if(!ia(b)||ea(b))throw Error(d+" must be an object containing the children to replace.");var e=[];db(b,function(a,b){var k=new L(a);ef(d,b,c.n(k));if(".priority"===Bd(k)&&!cf(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});ff(d,e)}
	function hf(a,b,c){if(Cc(c))throw Error(y(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!cf(c))throw Error(y(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
	function jf(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(y(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function kf(a,b){if(n(b)&&!bf(b))throw Error(y(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function lf(a,b){if(!p(b)||0===b.length||af.test(b))throw Error(y(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function mf(a,b){if(".info"===J(b))throw Error(a+" failed: Can't modify data under /.info/");}
	function Xe(a,b){var c=b.path.toString(),d;!(d=!p(b.jc.host)||0===b.jc.host.length||!bf(b.jc.me))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(p(c)&&0!==c.length&&!af.test(c)));if(d)throw Error(y(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function V(a,b){this.ta=a;this.qa=b}V.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);var b=new hb;this.ta.vd(this.qa,ib(b,a));return b.ra};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);mf("Firebase.onDisconnect().remove",this.qa);A("Firebase.onDisconnect().remove",1,a,!0);var b=new hb;nf(this.ta,this.qa,null,ib(b,a));return b.ra};
	V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);mf("Firebase.onDisconnect().set",this.qa);df("Firebase.onDisconnect().set",a,this.qa,!1);A("Firebase.onDisconnect().set",2,b,!0);var c=new hb;nf(this.ta,this.qa,a,ib(c,b));return c.ra};V.prototype.set=V.prototype.set;
	V.prototype.Jb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);mf("Firebase.onDisconnect().setWithPriority",this.qa);df("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);hf("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new hb;of(this.ta,this.qa,a,b,ib(d,c));return d.ra};V.prototype.setWithPriority=V.prototype.Jb;
	V.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);mf("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}gf("Firebase.onDisconnect().update",a,this.qa);A("Firebase.onDisconnect().update",2,b,!0);
	c=new hb;pf(this.ta,this.qa,a,ib(c,b));return c.ra};V.prototype.update=V.prototype.update;function qf(a){H(ea(a)&&0<a.length,"Requires a non-empty array");this.Bf=a;this.Cc={}}qf.prototype.De=function(a,b){var c;c=this.Cc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].He.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};qf.prototype.gc=function(a,b,c){rf(this,a);this.Cc[a]=this.Cc[a]||[];this.Cc[a].push({He:b,Ma:c});(a=this.Ue(a))&&b.apply(c,a)};
	qf.prototype.Hc=function(a,b,c){rf(this,a);a=this.Cc[a]||[];for(var d=0;d<a.length;d++)if(a[d].He===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};function rf(a,b){H(Oa(a.Bf,function(a){return a===b}),"Unknown event: "+b)};function sf(){qf.call(this,["online"]);this.hc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!qb()){var a=this;window.addEventListener("online",function(){a.hc||(a.hc=!0,a.De("online",!0))},!1);window.addEventListener("offline",function(){a.hc&&(a.hc=!1,a.De("online",!1))},!1)}}la(sf,qf);sf.prototype.Ue=function(a){H("online"===a,"Unknown event type: "+a);return[this.hc]};ca(sf);function tf(){qf.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Mb=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.Mb&&(c.Mb=b,c.De("visible",b))},!1)}}la(tf,qf);tf.prototype.Ue=function(a){H("visible"===a,"Unknown event type: "+a);return[this.Mb]};ca(tf);var uf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);H(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);H(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function vf(a,b){this.La=a;this.ba=b?b:wf}g=vf.prototype;g.Oa=function(a,b){return new vf(this.La,this.ba.Oa(a,b,this.La).X(null,null,!1,null,null))};g.remove=function(a){return new vf(this.La,this.ba.remove(a,this.La).X(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ba;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function xf(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ba.e()};g.count=function(){return this.ba.count()};g.Fc=function(){return this.ba.Fc()};g.ec=function(){return this.ba.ec()};g.ha=function(a){return this.ba.ha(a)};
	g.Wb=function(a){return new yf(this.ba,null,this.La,!1,a)};g.Xb=function(a,b){return new yf(this.ba,a,this.La,!1,b)};g.Zb=function(a,b){return new yf(this.ba,a,this.La,!0,b)};g.We=function(a){return new yf(this.ba,null,this.La,!0,a)};function yf(a,b,c,d,e){this.Fd=e||null;this.ie=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.ie?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.ie?a.right:a.left}
	function R(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Fd?a.Fd(b.key,b.value):{key:b.key,value:b.value};if(a.ie)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function zf(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Fd?a.Fd(b.key,b.value):{key:b.key,value:b.value}}function Af(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:wf;this.right=null!=e?e:wf}g=Af.prototype;
	g.X=function(a,b,c,d,e){return new Af(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function Bf(a){return a.left.e()?a:Bf(a.left)}g.Fc=function(){return Bf(this).key};g.ec=function(){return this.right.e()?this.key:this.right.ec()};
	g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Oa(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Oa(a,b,c));return Cf(e)};function Df(a){if(a.left.e())return wf;a.left.ea()||a.left.left.ea()||(a=Ef(a));a=a.X(null,null,null,Df(a.left),null);return Cf(a)}
	g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ea()||c.left.left.ea()||(c=Ef(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.ea()&&(c=Ff(c));c.right.e()||c.right.ea()||c.right.left.ea()||(c=Gf(c),c.left.left.ea()&&(c=Ff(c),c=Gf(c)));if(0===b(a,c.key)){if(c.right.e())return wf;d=Bf(c.right);c=c.X(d.key,d.value,null,null,Df(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return Cf(c)};g.ea=function(){return this.color};
	function Cf(a){a.right.ea()&&!a.left.ea()&&(a=Hf(a));a.left.ea()&&a.left.left.ea()&&(a=Ff(a));a.left.ea()&&a.right.ea()&&(a=Gf(a));return a}function Ef(a){a=Gf(a);a.right.left.ea()&&(a=a.X(null,null,null,null,Ff(a.right)),a=Hf(a),a=Gf(a));return a}function Hf(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function Ff(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
	function Gf(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function If(){}g=If.prototype;g.X=function(){return this};g.Oa=function(a,b){return new Af(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ha=function(){return!1};g.Fc=function(){return null};g.ec=function(){return null};g.ea=function(){return!1};var wf=new If;function P(a,b,c){this.k=a;(this.aa=b)&&Sd(this.aa);a.e()&&H(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.yb=c;this.Db=null}g=P.prototype;g.J=function(){return!1};g.C=function(){return this.aa||G};g.fa=function(a){return this.k.e()?this:new P(this.k,a,this.yb)};g.Q=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?G:a};g.P=function(a){var b=J(a);return null===b?this:this.Q(b).P(D(a))};g.Da=function(a){return null!==this.k.get(a)};
	g.T=function(a,b){H(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.fa(b);var c=new K(a,b),d,e;b.e()?(d=this.k.remove(a),c=me(this.yb,c,this.k)):(d=this.k.Oa(a,b),c=ke(this.yb,c,this.k));e=d.e()?G:this.aa;return new P(d,e,c)};g.F=function(a,b){var c=J(a);if(null===c)return b;H(".priority"!==J(a)||1===Ad(a),".priority must be the last token in a path");var d=this.Q(c).F(D(a),b);return this.T(c,d)};g.e=function(){return this.k.e()};g.Eb=function(){return this.k.count()};
	var Jf=/^(0|[1-9]\d*)$/;g=P.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.O(N,function(f,h){b[f]=h.H(a);c++;e&&Jf.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Db){var a="";this.C().e()||(a+="priority:"+Ud(this.C().H())+":");this.O(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Db=""===a?"":uc(a)}return this.Db};
	g.Ve=function(a,b,c){return(c=Kf(this,c))?(a=xf(c,new K(a,b)))?a.name:null:xf(this.k,a)};function Qd(a,b){var c;c=(c=Kf(a,b))?(c=c.Fc())&&c.name:a.k.Fc();return c?new K(c,a.k.get(c)):null}function Rd(a,b){var c;c=(c=Kf(a,b))?(c=c.ec())&&c.name:a.k.ec();return c?new K(c,a.k.get(c)):null}g.O=function(a,b){var c=Kf(this,a);return c?c.ha(function(a){return b(a.name,a.R)}):this.k.ha(b)};g.Wb=function(a){return this.Xb(a.Gc(),a)};
	g.Xb=function(a,b){var c=Kf(this,b);if(c)return c.Xb(a,function(a){return a});for(var c=this.k.Xb(a.name,jc),d=zf(c);null!=d&&0>b.compare(d,a);)R(c),d=zf(c);return c};g.We=function(a){return this.Zb(a.Ec(),a)};g.Zb=function(a,b){var c=Kf(this,b);if(c)return c.Zb(a,function(a){return a});for(var c=this.k.Zb(a.name,jc),d=zf(c);null!=d&&0<b.compare(d,a);)R(c),d=zf(c);return c};g.rc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===Zd?-1:0};
	g.nb=function(a){if(a===Fd||va(this.yb.cc,a.toString()))return this;var b=this.yb,c=this.k;H(a!==Fd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Wb(jc),f=R(c);f;)e=e||a.wc(f.R),d.push(f),f=R(c);d=e?le(d,Pd(a)):Wd;e=a.toString();c=za(b.cc);c[e]=a;a=za(b.md);a[e]=d;return new P(this.k,this.aa,new je(a,c))};g.xc=function(a){return a===Fd||va(this.yb.cc,a.toString())};
	g.Z=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().Z(a.C())&&this.k.count()===a.k.count()){var b=this.Wb(N);a=a.Wb(N);for(var c=R(b),d=R(a);c&&d;){if(c.name!==d.name||!c.R.Z(d.R))return!1;c=R(b);d=R(a)}return null===c&&null===d}return!1};function Kf(a,b){return b===Fd?null:a.yb.get(b.toString())}g.toString=function(){return B(this.H(!0))};function M(a,b){if(null===a)return G;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);H(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new qc(a,M(c));if(a instanceof Array){var d=G,e=a;r(e,function(a,b){if(cb(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.J()||!c.e())d=
	d.T(b,c)}});return d.fa(M(c))}var f=[],h=!1,k=a;db(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(h=h||!b.C().e(),f.push(new K(a,b)))}});if(0==f.length)return G;var l=le(f,gc,function(a){return a.name},ic);if(h){var m=le(f,Pd(N));return new P(l,M(c),new je({".priority":m},{".priority":N}))}return new P(l,M(c),ne)}var Lf=Math.log(2);
	function Mf(a){this.count=parseInt(Math.log(a+1)/Lf,10);this.Ne=this.count-1;this.Cf=a+1&parseInt(Array(this.count+1).join("1"),2)}function Nf(a){var b=!(a.Cf&1<<a.Ne);a.Ne--;return b}
	function le(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],u=c?c(m):m;return new Af(u,m.R,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),z=e(m+1,d),m=a[m],u=c?c(m):m;return new Af(u,m.R,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],F=c?c(k):k,z=new Af(F,k.R,h,null,z);f?f.left=z:m=z;f=z}for(var f=null,m=null,u=a.length,z=0;z<b.count;++z){var F=Nf(b),id=Math.pow(2,b.count-(z+1));F?d(id,!1):(d(id,!1),d(id,!0))}return m}(new Mf(a.length));
	return null!==f?new vf(d||b,f):new vf(d||b)}function Ud(a){return"number"===typeof a?"number:"+Jc(a):"string:"+a}function Sd(a){if(a.J()){var b=a.H();H("string"===typeof b||"number"===typeof b||"object"===typeof b&&cb(b,".sv"),"Priority must be a string or number.")}else H(a===Zd||a.e(),"priority of unexpected type.");H(a===Zd||a.C().e(),"Priority nodes can't have a priority of their own.")}var G=new P(new vf(ic),null,ne);function Of(){P.call(this,new vf(ic),G,ne)}la(Of,P);g=Of.prototype;
	g.rc=function(a){return a===this?0:1};g.Z=function(a){return a===this};g.C=function(){return this};g.Q=function(){return G};g.e=function(){return!1};var Zd=new Of,Xd=new K("[MIN_NAME]",G),ce=new K("[MAX_NAME]",Zd);function W(a,b,c){this.A=a;this.V=b;this.g=c}W.prototype.H=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};W.prototype.val=W.prototype.H;W.prototype.Qe=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};W.prototype.exportVal=W.prototype.Qe;W.prototype.Lf=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.Lf;
	W.prototype.n=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));lf("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.V.n(b);return new W(this.A.P(b),c,N)};W.prototype.child=W.prototype.n;W.prototype.Da=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);lf("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.A.P(b).e()};W.prototype.hasChild=W.prototype.Da;
	W.prototype.C=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.O(this.g,function(c,d){return a(new W(d,b.V.n(c),N))})};W.prototype.forEach=W.prototype.forEach;
	W.prototype.hd=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.hd;W.prototype.getKey=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.getKey()};Lc(W.prototype,"key",W.prototype.getKey);W.prototype.Eb=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Eb()};W.prototype.numChildren=W.prototype.Eb;
	W.prototype.wb=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};Lc(W.prototype,"ref",W.prototype.wb);function yd(a,b){this.N=a;this.Jd=b}function vd(a,b,c,d){return new yd(new $b(b,c,d),a.Jd)}function zd(a){return a.N.da?a.N.j():null}yd.prototype.w=function(){return this.Jd};function ac(a){return a.Jd.da?a.Jd.j():null};function Pf(a,b){this.V=a;var c=a.m,d=new Gd(c.g),c=S(c)?new Gd(c.g):c.xa?new Md(c):new Hd(c);this.hf=new pd(c);var e=b.w(),f=b.N,h=d.ya(G,e.j(),null),k=c.ya(G,f.j(),null);this.Ka=new yd(new $b(k,f.da,c.Na()),new $b(h,e.da,d.Na()));this.Za=[];this.Jf=new kd(a)}function Qf(a){return a.V}g=Pf.prototype;g.w=function(){return this.Ka.w().j()};g.hb=function(a){var b=ac(this.Ka);return b&&(S(this.V.m)||!a.e()&&!b.Q(J(a)).e())?b.P(a):null};g.e=function(){return 0===this.Za.length};g.Nb=function(a){this.Za.push(a)};
	g.kb=function(a,b){var c=[];if(b){H(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;Ja(this.Za,function(a){(a=a.Le(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var h=this.Za[f];if(!h.matches(a))e.push(h);else if(a.Xe()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
	g.eb=function(a,b,c){a.type===Wc&&null!==a.source.Hb&&(H(ac(this.Ka),"We should always have a full cache before handling merges"),H(zd(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.hf.eb(d,a,b,c);b=this.hf;c=a.Qd;H(c.N.j().xc(b.U.g),"Event snap not indexed");H(c.w().j().xc(b.U.g),"Server snap not indexed");H(dc(a.Qd.w())||!dc(d.w()),"Once a server snap is complete, it should never go back");this.Ka=a.Qd;return Rf(this,a.Df,a.Qd.N.j(),null)};
	function Sf(a,b){var c=a.Ka.N,d=[];c.j().J()||c.j().O(N,function(a,b){d.push(new I("child_added",b,a))});c.da&&d.push(bc(c.j()));return Rf(a,d,c.j(),b)}function Rf(a,b,c,d){return ld(a.Jf,b,c,d?[d]:a.Za)};function Tf(a,b,c){this.Pb=a;this.rb=b;this.tb=c||null}g=Tf.prototype;g.nf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.m.g;return new Ub("value",this,new W(a.Ja,b.wb(),c))};g.Tb=function(a){var b=this.tb;if("cancel"===a.de()){H(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Kd)}};g.Le=function(a,b){return this.rb?new Vb(this,a,b):null};
	g.matches=function(a){return a instanceof Tf?a.Pb&&this.Pb?a.Pb===this.Pb&&a.tb===this.tb:!0:!1};g.Xe=function(){return null!==this.Pb};function Uf(a,b,c){this.ga=a;this.rb=b;this.tb=c}g=Uf.prototype;g.nf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};g.Le=function(a,b){return this.rb?new Vb(this,a,b):null};
	g.createEvent=function(a,b){H(null!=a.Xa,"Child events should have a childName.");var c=b.wb().n(a.Xa);return new Ub(a.type,this,new W(a.Ja,c,b.m.g),a.Bd)};g.Tb=function(a){var b=this.tb;if("cancel"===a.de()){H(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.ga[a.fd];return function(){d.call(b,a.Kd,a.Bd)}};
	g.matches=function(a){if(a instanceof Uf){if(!this.ga||!a.ga)return!0;if(this.tb===a.tb){var b=ra(a.ga);if(b===ra(this.ga)){if(1===b){var b=sa(a.ga),c=sa(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return qa(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};g.Xe=function(){return null!==this.ga};function X(a,b,c,d){this.u=a;this.path=b;this.m=c;this.Mc=d}
	function Vf(a){var b=null,c=null;a.ka&&(b=Jd(a));a.na&&(c=Ld(a));if(a.g===Fd){if(a.ka){if("[MIN_NAME]"!=Id(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=Kd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!cf(b)||null!=c&&!cf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(H(a.g instanceof Yd||a.g===de,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function Wf(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.mb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Xf(a,b){if(!0===a.Mc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.wb=function(){x("Query.ref",0,0,arguments.length);return new U(this.u,this.path)};
	g.gc=function(a,b,c,d){x("Query.on",2,4,arguments.length);jf("Query.on",a,!1);A("Query.on",2,b,!1);var e=Yf("Query.on",c,d);if("value"===a)Zf(this.u,this,new Tf(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Zf(this.u,this,new Uf(f,e.cancel,e.Ma))}return b};
	g.Hc=function(a,b,c){x("Query.off",0,3,arguments.length);jf("Query.off",a,!0);A("Query.off",2,b,!0);eb("Query.off",3,c);var d=null,e=null;"value"===a?d=new Tf(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Uf(e,null,c||null));e=this.u;d=".info"===J(this.path)?e.nd.kb(this,d):e.K.kb(this,d);Qb(e.ca,this.path,d)};
	g.$f=function(a,b){function c(k){f&&(f=!1,e.Hc(a,c),b&&b.call(d.Ma,k),h.resolve(k))}x("Query.once",1,4,arguments.length);jf("Query.once",a,!1);A("Query.once",2,b,!0);var d=Yf("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new hb;jb(h.ra);this.gc(a,c,function(b){e.Hc(a,c);d.cancel&&d.cancel.call(d.Ma,b);h.reject(b)});return h.ra};
	g.ke=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.ke(a),this.Mc)};
	g.le=function(a){x("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.le(a),this.Mc)};
	g.ag=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');lf("Query.orderByChild",a);Xf(this,"Query.orderByChild");var b=new L(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
	b=new Yd(b);b=he(this.m,b);Vf(b);return new X(this.u,this.path,b,!0)};g.bg=function(){x("Query.orderByKey",0,0,arguments.length);Xf(this,"Query.orderByKey");var a=he(this.m,Fd);Vf(a);return new X(this.u,this.path,a,!0)};g.cg=function(){x("Query.orderByPriority",0,0,arguments.length);Xf(this,"Query.orderByPriority");var a=he(this.m,N);Vf(a);return new X(this.u,this.path,a,!0)};
	g.dg=function(){x("Query.orderByValue",0,0,arguments.length);Xf(this,"Query.orderByValue");var a=he(this.m,de);Vf(a);return new X(this.u,this.path,a,!0)};g.Ld=function(a,b){x("Query.startAt",0,2,arguments.length);df("Query.startAt",a,this.path,!0);kf("Query.startAt",b);var c=this.m.Ld(a,b);Wf(c);Vf(c);if(this.m.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new X(this.u,this.path,c,this.Mc)};
	g.ed=function(a,b){x("Query.endAt",0,2,arguments.length);df("Query.endAt",a,this.path,!0);kf("Query.endAt",b);var c=this.m.ed(a,b);Wf(c);Vf(c);if(this.m.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.u,this.path,c,this.Mc)};
	g.If=function(a,b){x("Query.equalTo",1,2,arguments.length);df("Query.equalTo",a,this.path,!1);kf("Query.equalTo",b);if(this.m.ka)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.m.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Ld(a,b).ed(a,b)};
	g.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||"/")};g.ja=function(){var a=Gc(ie(this.m));return"{}"===a?"default":a};
	g.isEqual=function(a){x("Query.isEqual",1,1,arguments.length);if(!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var b=this.u===a.u,c=this.path.Z(a.path),d=this.ja()===a.ja();return b&&c&&d};
	function Yf(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Ma=c,eb(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(y(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.gc;X.prototype.off=X.prototype.Hc;X.prototype.once=X.prototype.$f;X.prototype.limitToFirst=X.prototype.ke;X.prototype.limitToLast=X.prototype.le;X.prototype.orderByChild=X.prototype.ag;
	X.prototype.orderByKey=X.prototype.bg;X.prototype.orderByPriority=X.prototype.cg;X.prototype.orderByValue=X.prototype.dg;X.prototype.startAt=X.prototype.Ld;X.prototype.endAt=X.prototype.ed;X.prototype.equalTo=X.prototype.If;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;Lc(X.prototype,"ref",X.prototype.wb);function $f(a,b){this.value=a;this.children=b||ag}var ag=new vf(function(a,b){return a===b?0:a<b?-1:1});function bg(a){var b=Q;r(a,function(a,d){b=b.set(new L(d),a)});return b}g=$f.prototype;g.e=function(){return null===this.value&&this.children.e()};function cg(a,b,c){if(null!=a.value&&c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=cg(a,D(b),c),null!=b?{path:(new L(d)).n(b.path),value:b.value}:null):null}
	function dg(a,b){return cg(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q};g.set=function(a,b){if(a.e())return new $f(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Oa(c,d);return new $f(this.value,c)};
	g.remove=function(a){if(a.e())return this.children.e()?Q:new $f(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?Q:new $f(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null};
	function Ed(a,b,c){if(b.e())return c;var d=J(b);b=Ed(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new $f(a.value,d)}function eg(a,b){return fg(a,C,b)}function fg(a,b,c){var d={};a.children.ha(function(a,f){d[a]=fg(f,b.n(a),c)});return c(b,a.value,d)}function gg(a,b,c){return hg(a,b,C,c)}function hg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?hg(a,D(b),c.n(e),d):null}
	function ig(a,b,c){jg(a,b,C,c)}function jg(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=J(b);return(a=a.children.get(e))?jg(a,D(b),c.n(e),d):Q}function Cd(a,b){kg(a,C,b)}function kg(a,b,c){a.children.ha(function(a,e){kg(e,b.n(a),c)});a.value&&c(b,a.value)}function lg(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var Q=new $f(null);$f.prototype.toString=function(){var a={};Cd(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function mg(a,b,c){this.type=ud;this.source=ng;this.path=a;this.Ob=b;this.Gd=c}mg.prototype.Lc=function(a){if(this.path.e()){if(null!=this.Ob.value)return H(this.Ob.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ob.subtree(new L(a));return new mg(C,a,this.Gd)}H(J(this.path)===a,"operationForChild called for unrelated child.");return new mg(D(this.path),this.Ob,this.Gd)};
	mg.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Gd+" affectedTree="+this.Ob+")"};var Bb=0,Wc=1,ud=2,Db=3;function og(a,b,c,d){this.be=a;this.Se=b;this.Hb=c;this.Be=d;H(!d||b,"Tagged queries must be from server.")}var ng=new og(!0,!1,null,!1),pg=new og(!1,!0,null,!1);og.prototype.toString=function(){return this.be?"user":this.Be?"server(queryID="+this.Hb+")":"server"};function qg(a){this.W=a}var rg=new qg(new $f(null));function sg(a,b,c){if(b.e())return new qg(new $f(c));var d=dg(a.W,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.F(b,c);return new qg(a.W.set(e,d))}a=Ed(a.W,b,new $f(c));return new qg(a)}function tg(a,b,c){var d=a;db(c,function(a,c){d=sg(d,b.n(a),c)});return d}qg.prototype.Cd=function(a){if(a.e())return rg;a=Ed(this.W,a,Q);return new qg(a)};function ug(a,b){var c=dg(a.W,b);return null!=c?a.W.get(c.path).P(T(c.path,b)):null}
	function vg(a){var b=[],c=a.W.value;null!=c?c.J()||c.O(N,function(a,c){b.push(new K(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new K(a,c.value))});return b}function wg(a,b){if(b.e())return a;var c=ug(a,b);return null!=c?new qg(new $f(c)):new qg(a.W.subtree(b))}qg.prototype.e=function(){return this.W.e()};qg.prototype.apply=function(a){return xg(C,this.W,a)};
	function xg(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(H(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=xg(a.n(b),f,c)});c.P(a).e()||null===d||(c=c.F(a.n(".priority"),d));return c};function yg(){this.za={}}g=yg.prototype;g.e=function(){return ya(this.za)};g.eb=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.za,d),H(null!=d,"SyncTree gave us an op for an invalid query."),d.eb(a,b,c);var e=[];r(this.za,function(d){e=e.concat(d.eb(a,b,c))});return e};g.Nb=function(a,b,c,d,e){var f=a.ja(),h=w(this.za,f);if(!h){var h=c.Aa(e?d:null),k=!1;h?k=!0:(h=d instanceof P?c.qc(d):G,k=!1);h=new Pf(a,new yd(new $b(h,k,!1),new $b(d,e,!1)));this.za[f]=h}h.Nb(b);return Sf(h,b)};
	g.kb=function(a,b,c){var d=a.ja(),e=[],f=[],h=null!=zg(this);if("default"===d){var k=this;r(this.za,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.za[d],S(a.V.m)||e.push(a.V))})}else{var l=w(this.za,d);l&&(f=f.concat(l.kb(b,c)),l.e()&&(delete this.za[d],S(l.V.m)||e.push(l.V)))}h&&null==zg(this)&&e.push(new U(a.u,a.path));return{hg:e,Kf:f}};function Ag(a){return Ka(ta(a.za),function(a){return!S(a.V.m)})}g.hb=function(a){var b=null;r(this.za,function(c){b=b||c.hb(a)});return b};
	function Bg(a,b){if(S(b.m))return zg(a);var c=b.ja();return w(a.za,c)}function zg(a){return xa(a.za,function(a){return S(a.V.m)})||null};function Cg(){this.S=rg;this.la=[];this.Ac=-1}function Dg(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Yc===b)return d}return null}g=Cg.prototype;
	g.Cd=function(a){var b=Pa(this.la,function(b){return b.Yc===a});H(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var h=this.la[f];h.visible&&(f>=b&&Eg(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.S=Fg(this.la,Gg,C),this.Ac=0<this.la.length?this.la[this.la.length-1].Yc:-1;else if(c.Ga)this.S=this.S.Cd(c.path);else{var k=this;r(c.children,function(a,b){k.S=k.S.Cd(c.path.n(b))})}return!0}return!1};
	g.Aa=function(a,b,c,d){if(c||d){var e=wg(this.S,a);return!d&&e.e()?b:d||null!=b||null!=ug(e,C)?(e=Fg(this.la,function(b){return(b.visible||d)&&(!c||!(0<=Ia(c,b.Yc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||G,e.apply(b)):null}e=ug(this.S,a);if(null!=e)return e;e=wg(this.S,a);return e.e()?b:null!=b||null!=ug(e,C)?(b=b||G,e.apply(b)):null};
	g.qc=function(a,b){var c=G,d=ug(this.S,a);if(d)d.J()||d.O(N,function(a,b){c=c.T(a,b)});else if(b){var e=wg(this.S,a);b.O(N,function(a,b){var d=wg(e,new L(a)).apply(b);c=c.T(a,d)});Ja(vg(e),function(a){c=c.T(a.name,a.R)})}else e=wg(this.S,a),Ja(vg(e),function(a){c=c.T(a.name,a.R)});return c};g.Zc=function(a,b,c,d){H(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.n(b);if(null!=ug(this.S,a))return null;a=wg(this.S,a);return a.e()?d.P(b):a.apply(d.P(b))};
	g.pc=function(a,b,c){a=a.n(b);var d=ug(this.S,a);return null!=d?d:Zb(c,b)?wg(this.S,a).apply(c.j().Q(b)):null};g.lc=function(a){return ug(this.S,a)};g.Vd=function(a,b,c,d,e,f){var h;a=wg(this.S,a);h=ug(a,C);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.nb(f);if(h.e()||h.J())return[];b=[];a=Pd(f);e=e?h.Zb(c,f):h.Xb(c,f);for(f=R(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=R(e);return b};
	function Eg(a,b){return a.Ga?a.path.contains(b):!!wa(a.children,function(c,d){return a.path.n(d).contains(b)})}function Gg(a){return a.visible}
	function Fg(a,b,c){for(var d=rg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=T(c,h),d=sg(d,h,f.Ga)):h.contains(c)&&(h=T(h,c),d=sg(d,C,f.Ga.P(h)));else if(f.children)if(c.contains(h))h=T(c,h),d=tg(d,h,f.children);else{if(h.contains(c))if(h=T(h,c),h.e())d=tg(d,C,f.children);else if(f=w(f.children,J(h)))f=f.P(D(h)),d=sg(d,C,f)}else throw sc("WriteRecord should have .snap or .children");}}return d}function Hg(a,b){this.Lb=a;this.W=b}g=Hg.prototype;
	g.Aa=function(a,b,c){return this.W.Aa(this.Lb,a,b,c)};g.qc=function(a){return this.W.qc(this.Lb,a)};g.Zc=function(a,b,c){return this.W.Zc(this.Lb,a,b,c)};g.lc=function(a){return this.W.lc(this.Lb.n(a))};g.Vd=function(a,b,c,d,e){return this.W.Vd(this.Lb,a,b,c,d,e)};g.pc=function(a,b){return this.W.pc(this.Lb,a,b)};g.n=function(a){return new Hg(this.Lb.n(a),this.W)};function Ig(){this.children={};this.$c=0;this.value=null}function Jg(a,b,c){this.sd=a?a:"";this.Oc=b?b:null;this.A=c?c:new Ig}function Kg(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=J(c));)d=new Jg(e,d,w(d.A.children,e)||new Ig),c=D(c);return d}g=Jg.prototype;g.Ca=function(){return this.A.value};function Lg(a,b){H("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Mg(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.$c=0;Mg(this)};
	g.hd=function(){return 0<this.A.$c};g.e=function(){return null===this.Ca()&&!this.hd()};g.O=function(a){var b=this;r(this.A.children,function(c,d){a(new Jg(d,b,c))})};function Ng(a,b,c,d){c&&!d&&b(a);a.O(function(a){Ng(a,b,!0,d)});c&&d&&b(a)}function Og(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new L(null===this.Oc?this.sd:this.Oc.path()+"/"+this.sd)};g.name=function(){return this.sd};g.parent=function(){return this.Oc};
	function Mg(a){if(null!==a.Oc){var b=a.Oc,c=a.sd,d=a.e(),e=cb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.$c--,Mg(b)):d||e||(b.A.children[c]=a.A,b.A.$c++,Mg(b))}};function Pg(a,b,c,d,e,f){this.id=Qg++;this.f=yc("p:"+this.id+":");this.od={};this.$={};this.pa=[];this.Nc=0;this.Jc=[];this.ma=!1;this.Sa=1E3;this.rd=3E5;this.Gb=b;this.Ic=c;this.re=d;this.L=a;this.ob=this.Fa=this.Cb=this.we=null;this.Td=e;this.ae=!1;this.he=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Ge=f||null;this.ub=null;this.Mb=!1;this.Ed={};this.ig=0;this.Re=!0;this.zc=this.je=null;Rg(this,0);tf.Vb().gc("visible",this.Zf,this);-1===
	a.host.indexOf("fblocal")&&sf.Vb().gc("online",this.Yf,this)}var Qg=0,Sg=0;g=Pg.prototype;g.ua=function(a,b,c){var d=++this.ig;a={r:d,a:a,b:b};this.f(B(a));H(this.ma,"sendRequest call when we're not connected not allowed.");this.Fa.ua(a);c&&(this.Ed[d]=c)};
	g.$e=function(a,b,c,d){var e=a.ja(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};H(Sc(a.m)||!S(a.m),"listen() called for non-default but complete query");H(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,jd:b,eg:a,tag:c};this.$[f][e]=a;this.ma&&Tg(this,a)};
	function Tg(a,b){var c=b.eg,d=c.path.toString(),e=c.ja();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=ie(c.m),f.t=b.tag);f.h=b.jd();a.ua("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&cb(k,"w")){var m=w(k,"w");ea(m)&&0<=Ia(m,"no_index")&&O("Using an unspecified index. Consider adding "+('".indexOn": "'+c.m.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==l&&Ug(a,d,e),b.G&&b.G(l,
	k))})}g.kf=function(a){this.ob=a;this.f("Auth token refreshed");this.ob?Vg(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||Pc(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.rd=3E4};function Vg(a){if(a.ma&&a.ob){var b=a.ob,c=Oc(b)?"auth":"gauth",d={cred:b};a.Ge&&(d.authvar=a.Ge);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.ob===b&&("ok"===d?a.he=0:Wg(a,d,c))})}}
	g.uf=function(a,b){var c=a.path.toString(),d=a.ja();this.f("Unlisten called for "+c+" "+d);H(Sc(a.m)||!S(a.m),"unlisten() called for non-default but complete query");if(Ug(this,c,d)&&this.ma){var e=ie(a.m);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};g.oe=function(a,b,c){this.ma?Xg(this,"o",a,b,c):this.Jc.push({te:a,action:"o",data:b,G:c})};g.cf=function(a,b,c){this.ma?Xg(this,"om",a,b,c):this.Jc.push({te:a,action:"om",data:b,G:c})};
	g.vd=function(a,b){this.ma?Xg(this,"oc",a,null,b):this.Jc.push({te:a,action:"oc",data:null,G:b})};function Xg(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Yg(this,"p",a,b,c,d)};g.af=function(a,b,c,d){Yg(this,"m",a,b,c,d)};function Yg(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,mf:d,G:e});a.Nc++;b=a.pa.length-1;a.ma?Zg(a,b):a.f("Buffering put: "+c)}
	function Zg(a,b){var c=a.pa[b].action,d=a.pa[b].mf,e=a.pa[b].G;a.pa[b].fg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Nc--;0===a.Nc&&(a.pa=[]);e&&e(d.s,d.d)})}g.ve=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
	g.ud=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Ed[b];c&&(delete this.Ed[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Gb(a.p,a.d,!1,a.t):"m"===b?this.Gb(a.p,a.d,!0,a.t):"c"===b?$g(this,a.p,a.q):"ac"===b?Wg(this,a.s,a.d):"sd"===b?this.we?this.we(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):zc("Unrecognized action received from server: "+
	B(b)+"\nAre you using the latest client?"))}};g.Kc=function(a,b){this.f("connection ready");this.ma=!0;this.zc=(new Date).getTime();this.re({serverTimeOffset:a-(new Date).getTime()});this.Cb=b;if(this.Re){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;qb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ve(c)}ah(this);this.Re=!1;this.Ic(!0)};
	function Rg(a,b){H(!a.Fa,"Scheduling a connect when we're already connected/ing?");a.ub&&clearTimeout(a.ub);a.ub=setTimeout(function(){a.ub=null;bh(a)},Math.floor(b))}g.Zf=function(a){a&&!this.Mb&&this.Sa===this.rd&&(this.f("Window became visible.  Reducing delay."),this.Sa=1E3,this.Fa||Rg(this,0));this.Mb=a};g.Yf=function(a){a?(this.f("Browser went online."),this.Sa=1E3,this.Fa||Rg(this,0)):(this.f("Browser went offline.  Killing connection."),this.Fa&&this.Fa.close())};
	g.df=function(){this.f("data client disconnected");this.ma=!1;this.Fa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.mf&&b.fg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Nc--)}0===this.Nc&&(this.pa=[]);this.Ed={};ch(this)&&(this.Mb?this.zc&&(3E4<(new Date).getTime()-this.zc&&(this.Sa=1E3),this.zc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Sa=this.rd,this.je=(new Date).getTime()),a=Math.max(0,this.Sa-((new Date).getTime()-this.je)),a*=Math.random(),this.f("Trying to reconnect in "+
	a+"ms"),Rg(this,a),this.Sa=Math.min(this.rd,1.3*this.Sa));this.Ic(!1)};
	function bh(a){if(ch(a)){a.f("Making a connection attempt");a.je=(new Date).getTime();a.zc=null;var b=q(a.ud,a),c=q(a.Kc,a),d=q(a.df,a),e=a.id+":"+Sg++,f=a.Cb,h=!1,k=null,l=function(){k?k.close():(h=!0,d())};a.Fa={close:l,ua:function(a){H(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var m=a.ae;a.ae=!1;a.Td.getToken(m).then(function(l){h?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),a.ob=l&&l.accessToken,k=new Ce(e,a.L,b,c,d,function(b){O(b+
	" ("+a.L.toString()+")");a.ab("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||l()})}}g.ab=function(a){E("Interrupting connection for reason: "+a);this.od[a]=!0;this.Fa?this.Fa.close():(this.ub&&(clearTimeout(this.ub),this.ub=null),this.ma&&this.df())};g.kc=function(a){E("Resuming connection for reason: "+a);delete this.od[a];ya(this.od)&&(this.Sa=1E3,this.Fa||Rg(this,0))};
	function $g(a,b,c){c=c?La(c,function(a){return Gc(a)}).join("$"):"default";(a=Ug(a,b,c))&&a.G&&a.G("permission_denied")}function Ug(a,b,c){b=(new L(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===ra(a.$[b])&&delete a.$[b]):d=void 0;return d}
	function Wg(a,b,c){E("Auth token revoked: "+b+"/"+c);a.ob=null;a.ae=!0;a.Fa.close();"invalid_token"===b&&(a.he++,3<=a.he&&(a.Sa=3E4,O("Provided authentication credentials are invalid. This usually indicates your FirebaseApp instance was not initialized correctly. Make sure your apiKey and databaseURL match the values provided for your app at https://console.firebase.google.com/, or if you're using a service account, make sure it's authorized to access the specified databaseURL and is from the correct project.")))}
	function ah(a){Vg(a);r(a.$,function(b){r(b,function(b){Tg(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Zg(a,b);for(;a.Jc.length;)b=a.Jc.shift(),Xg(a,b.action,b.te,b.data,b.G)}function ch(a){var b;b=sf.Vb().hc;return ya(a.od)&&b};var Y={Mf:function(){re=dd=!0}};Y.forceLongPolling=Y.Mf;Y.Nf=function(){se=!0};Y.forceWebSockets=Y.Nf;Y.Tf=function(){return cd.isAvailable()};Y.isWebSocketsAvailable=Y.Tf;Y.lg=function(a,b){a.u.Ra.we=b};Y.setSecurityDebugCallback=Y.lg;Y.ye=function(a,b){a.u.ye(b)};Y.stats=Y.ye;Y.ze=function(a,b){a.u.ze(b)};Y.statsIncrementCounter=Y.ze;Y.dd=function(a){return a.u.dd};Y.dataUpdateCount=Y.dd;Y.Sf=function(a,b){a.u.ge=b};Y.interceptServerData=Y.Sf;function dh(a){this.wa=Q;this.jb=new Cg;this.Ae={};this.ic={};this.Bc=a}function eh(a,b,c,d,e){var f=a.jb,h=e;H(d>f.Ac,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.la.push({path:b,Ga:c,Yc:d,visible:h});h&&(f.S=sg(f.S,b,c));f.Ac=d;return e?fh(a,new Ab(ng,b,c)):[]}function gh(a,b,c,d){var e=a.jb;H(d>e.Ac,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Yc:d,visible:!0});e.S=tg(e.S,b,c);e.Ac=d;c=bg(c);return fh(a,new Vc(ng,b,c))}
	function hh(a,b,c){c=c||!1;var d=Dg(a.jb,b);if(a.jb.Cd(b)){var e=Q;null!=d.Ga?e=e.set(C,!0):db(d.children,function(a,b){e=e.set(new L(a),b)});return fh(a,new mg(d.path,e,c))}return[]}function ih(a,b,c){c=bg(c);return fh(a,new Vc(pg,b,c))}function jh(a,b,c,d){d=kh(a,d);if(null!=d){var e=lh(d);d=e.path;e=e.Hb;b=T(d,b);c=new Ab(new og(!1,!0,e,!0),b,c);return mh(a,d,c)}return[]}
	function nh(a,b,c,d){if(d=kh(a,d)){var e=lh(d);d=e.path;e=e.Hb;b=T(d,b);c=bg(c);c=new Vc(new og(!1,!0,e,!0),b,c);return mh(a,d,c)}return[]}
	dh.prototype.Nb=function(a,b){var c=a.path,d=null,e=!1;ig(this.wa,c,function(a,b){var f=T(a,c);d=d||b.hb(f);e=e||null!=zg(b)});var f=this.wa.get(c);f?(e=e||null!=zg(f),d=d||f.hb(C)):(f=new yg,this.wa=this.wa.set(c,f));var h;null!=d?h=!0:(h=!1,d=G,lg(this.wa.subtree(c),function(a,b){var c=b.hb(C);c&&(d=d.T(a,c))}));var k=null!=Bg(f,a);if(!k&&!S(a.m)){var l=oh(a);H(!(l in this.ic),"View does not exist, but we have a tag");var m=ph++;this.ic[l]=m;this.Ae["_"+m]=l}h=f.Nb(a,b,new Hg(c,this.jb),d,h);k||
	e||(f=Bg(f,a),h=h.concat(qh(this,a,f)));return h};
	dh.prototype.kb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ja()||null!=Bg(e,a))){f=e.kb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.hg;f=f.Kf;b=-1!==Pa(e,function(a){return S(a.m)});var h=gg(this.wa,d,function(a,b){return null!=zg(b)});if(b&&!h&&(d=this.wa.subtree(d),!d.e()))for(var d=rh(d),k=0;k<d.length;++k){var l=d[k],m=l.V,l=sh(this,l);this.Bc.xe(th(m),uh(this,m),l.jd,l.G)}if(!h&&0<e.length&&!c)if(b)this.Bc.Md(th(a),null);else{var u=this;Ja(e,function(a){a.ja();
	var b=u.ic[oh(a)];u.Bc.Md(th(a),b)})}vh(this,e)}return f};dh.prototype.Aa=function(a,b){var c=this.jb,d=gg(this.wa,a,function(b,c){var d=T(b,a);if(d=c.hb(d))return d});return c.Aa(a,d,b,!0)};function rh(a){return eg(a,function(a,c,d){if(c&&null!=zg(c))return[zg(c)];var e=[];c&&(e=Ag(c));r(d,function(a){e=e.concat(a)});return e})}function vh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!S(d.m)){var d=oh(d),e=a.ic[d];delete a.ic[d];delete a.Ae["_"+e]}}}
	function th(a){return S(a.m)&&!Sc(a.m)?a.wb():a}function qh(a,b,c){var d=b.path,e=uh(a,b);c=sh(a,c);b=a.Bc.xe(th(b),e,c.jd,c.G);d=a.wa.subtree(d);if(e)H(null==zg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=eg(d,function(a,b,c){if(!a.e()&&b&&null!=zg(b))return[Qf(zg(b))];var d=[];b&&(d=d.concat(La(Ag(b),function(a){return a.V})));r(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Bc.Md(th(c),uh(a,c));return b}
	function sh(a,b){var c=b.V,d=uh(a,c);return{jd:function(){return(b.w()||G).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=kh(a,d)){var h=lh(b);b=h.path;h=h.Hb;f=T(b,f);f=new Cb(new og(!1,!0,h,!0),f);b=mh(a,b,f)}else b=[]}else b=fh(a,new Cb(pg,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function oh(a){return a.path.toString()+"$"+a.ja()}function lh(a){var b=a.indexOf("$");H(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new L(a.substr(0,b))}}function kh(a,b){var c=a.Ae,d="_"+b;return d in c?c[d]:void 0}function uh(a,b){var c=oh(b);return w(a.ic,c)}var ph=1;
	function mh(a,b,c){var d=a.wa.get(b);H(d,"Missing sync point for query tag that we're tracking");return d.eb(c,new Hg(b,a.jb),null)}function fh(a,b){return wh(a,b,a.wa,null,new Hg(C,a.jb))}function wh(a,b,c,d,e){if(b.path.e())return xh(a,b,c,d,e);var f=c.get(C);null==d&&null!=f&&(d=f.hb(C));var h=[],k=J(b.path),l=b.Lc(k);if((c=c.children.get(k))&&l)var m=d?d.Q(k):null,k=e.n(k),h=h.concat(wh(a,l,c,m,k));f&&(h=h.concat(f.eb(b,e,d)));return h}
	function xh(a,b,c,d,e){var f=c.get(C);null==d&&null!=f&&(d=f.hb(C));var h=[];c.children.ha(function(c,f){var m=d?d.Q(c):null,u=e.n(c),z=b.Lc(c);z&&(h=h.concat(xh(a,z,f,m,u)))});f&&(h=h.concat(f.eb(b,e,d)));return h};function Te(a,b,c){this.app=c;var d=new Eb(c);this.L=a;this.Va=$c(a);this.Uc=null;this.ca=new Nb;this.td=1;this.Ra=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Qc(this.L,q(this.Gb,this),d),setTimeout(q(this.Ic,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if("object"!==da(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
	try{B(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ra=new Pg(this.L,q(this.Gb,this),q(this.Ic,this),q(this.re,this),d,b)}var f=this;Fb(d,function(a){f.va.kf(a)});this.og=ad(a,q(function(){return new Xc(this.Va,this.va)},this));this.mc=new Jg;this.fe=new Gb;this.nd=new dh({xe:function(a,b,c,d){b=[];c=f.fe.j(a.path);c.e()||(b=fh(f.nd,new Ab(pg,a.path,c)),setTimeout(function(){d("ok")},0));return b},Md:ba});yh(this,"connected",!1);this.ia=new mc;this.Ya=new Se(this);this.dd=
	0;this.ge=null;this.K=new dh({xe:function(a,b,c,d){f.va.$e(a,c,b,function(b,c){var e=d(b,c);Sb(f.ca,a.path,e)});return[]},Md:function(a,b){f.va.uf(a,b)}})}g=Te.prototype;g.toString=function(){return(this.L.Rc?"https://":"http://")+this.L.host};g.name=function(){return this.L.me};function zh(a){a=a.fe.j(new L(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function Ah(a){a=a={timestamp:zh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	g.Gb=function(a,b,c,d){this.dd++;var e=new L(a);b=this.ge?this.ge(a,b):b;a=[];d?c?(b=pa(b,function(a){return M(a)}),a=nh(this.K,e,b,d)):(b=M(b),a=jh(this.K,e,b,d)):c?(d=pa(b,function(a){return M(a)}),a=ih(this.K,e,d)):(d=M(b),a=fh(this.K,new Ab(pg,e,d)));d=e;0<a.length&&(d=Bh(this,e));Sb(this.ca,d,a)};g.Ic=function(a){yh(this,"connected",a);!1===a&&Ch(this)};g.re=function(a){var b=this;Ic(a,function(a,d){yh(b,d,a)})};
	function yh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.fe;d.Hd=d.Hd.F(b,c);c=fh(a.nd,new Ab(pg,b,c));Sb(a.ca,b,c)}g.Jb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,ug:c});var e=Ah(this);b=M(b,c);var e=pc(b,e),f=this.td++,e=eh(this.K,a,e,f,!0);Ob(this.ca,e);var h=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||O("set at "+a+" failed: "+b);e=hh(h.K,f,!e);Sb(h.ca,a,e);Dh(d,b,c)});e=Eh(this,a);Bh(this,e);Sb(this.ca,e,[])};
	g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Ah(this),f={};r(b,function(a,b){d=!1;var c=M(a);f[b]=pc(c,e)});if(d)E("update() called with empty data.  Don't do anything."),Dh(c,"ok");else{var h=this.td++,k=gh(this.K,a,f,h);Ob(this.ca,k);var l=this;this.va.af(a.toString(),b,function(b,d){var e="ok"===b;e||O("update at "+a+" failed: "+b);var e=hh(l.K,h,!e),f=a;0<e.length&&(f=Bh(l,a));Sb(l.ca,f,e);Dh(c,b,d)});r(b,function(b,c){var d=Eh(l,a.n(c));Bh(l,d)});Sb(this.ca,
	a,[])}};function Ch(a){a.f("onDisconnectEvents");var b=Ah(a),c=[];nc(lc(a.ia,b),C,function(b,e){c=c.concat(fh(a.K,new Ab(pg,b,e)));var f=Eh(a,b);Bh(a,f)});a.ia=new mc;Sb(a.ca,C,c)}g.vd=function(a,b){var c=this;this.va.vd(a.toString(),function(d,e){"ok"===d&&Ze(c.ia,a);Dh(b,d,e)})};function nf(a,b,c,d){var e=M(c);a.va.oe(b.toString(),e.H(!0),function(c,h){"ok"===c&&oc(a.ia,b,e);Dh(d,c,h)})}
	function of(a,b,c,d,e){var f=M(c,d);a.va.oe(b.toString(),f.H(!0),function(c,d){"ok"===c&&oc(a.ia,b,f);Dh(e,c,d)})}function pf(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(E("onDisconnect().update() called with empty data.  Don't do anything."),Dh(d,"ok")):a.va.cf(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=M(c[l]);oc(a.ia,b.n(l),m)}Dh(d,e,f)})}function Zf(a,b,c){c=".info"===J(b.path)?a.nd.Nb(b,c):a.K.Nb(b,c);Qb(a.ca,b.path,c)}g.ab=function(){this.Ra&&this.Ra.ab("repo_interrupt")};
	g.kc=function(){this.Ra&&this.Ra.kc("repo_interrupt")};g.ye=function(a){if("undefined"!==typeof console){a?(this.Uc||(this.Uc=new Mb(this.Va)),a=this.Uc.get()):a=this.Va.get();var b=Ma(ua(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.ze=function(a){Lb(this.Va,a);this.og.rf[a]=!0};g.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");E(b,arguments)};
	function Dh(a,b,c){a&&ub(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Fh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.gc("value",f);c={path:b,update:c,G:d,status:null,ef:rc(),Fe:e,of:0,Pd:function(){h.Hc("value",f)},Rd:null,Ba:null,ad:null,bd:null,cd:null};d=a.K.Aa(b,void 0)||G;c.ad=d;d=c.update(d.H());if(n(d)){ef("transaction failed: Data returned ",d,c.path);c.status=1;e=Kg(a.mc,b);var k=e.Ca()||[];k.push(c);Lg(e,k);"object"===typeof d&&null!==d&&cb(d,".priority")?(k=w(d,".priority"),H(cf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
	k=(a.K.Aa(b)||G).C().H();e=Ah(a);d=M(d,k);e=pc(d,e);c.bd=d;c.cd=e;c.Ba=a.td++;c=eh(a.K,b,e,c.Ba,c.Fe);Sb(a.ca,b,c);Gh(a)}else c.Pd(),c.bd=null,c.cd=null,c.G&&(a=new W(c.ad,new U(a,c.path),N),c.G(null,!1,a))}function Gh(a,b){var c=b||a.mc;b||Hh(a,c);if(null!==c.Ca()){var d=Ih(a,c);H(0<d.length,"Sending zero length transaction queue");Na(d,function(a){return 1===a.status})&&Jh(a,c.path(),d)}else c.hd()&&c.O(function(b){Gh(a,b)})}
	function Jh(a,b,c){for(var d=La(c,function(a){return a.Ba}),e=a.K.Aa(b,d)||G,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];H(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.of++;var k=T(b,h.path),d=d.F(k,h.bd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(hh(a.K,c[f].Ba));if(c[f].G){var h=c[f].cd,k=new U(a,c[f].path);d.push(q(c[f].G,
	null,null,!0,new W(h,k,N)))}c[f].Pd()}Hh(a,Kg(a.mc,b));Gh(a);Sb(a.ca,b,e);for(f=0;f<d.length;f++)ub(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(O("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Rd=d;Bh(a,b)}},e)}function Bh(a,b){var c=Kh(a,b),d=c.path(),c=Ih(a,c);Lh(a,c,d);return d}
	function Lh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ka(b,function(a){return 1===a.status}),f=La(f,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],l=T(c,k.path),m=!1,u;H(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,u=k.Rd,e=e.concat(hh(a.K,k.Ba,!0));else if(1===k.status)if(25<=k.of)m=!0,u="maxretry",e=e.concat(hh(a.K,k.Ba,!0));else{var z=a.K.Aa(k.path,f)||G;k.ad=z;var F=b[h].update(z.H());n(F)?(ef("transaction failed: Data returned ",F,
	k.path),l=M(F),"object"===typeof F&&null!=F&&cb(F,".priority")||(l=l.fa(z.C())),z=k.Ba,F=Ah(a),F=pc(l,F),k.bd=l,k.cd=F,k.Ba=a.td++,Qa(f,z),e=e.concat(eh(a.K,k.path,F,k.Ba,k.Fe)),e=e.concat(hh(a.K,z,!0))):(m=!0,u="nodata",e=e.concat(hh(a.K,k.Ba,!0)))}Sb(a.ca,c,e);e=[];m&&(b[h].status=3,setTimeout(b[h].Pd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new U(a,b[h].path),d.push(q(b[h].G,null,null,!1,new W(b[h].ad,k,N)))):d.push(q(b[h].G,null,Error(u),!1,null))))}Hh(a,a.mc);for(h=0;h<d.length;h++)ub(d[h]);Gh(a)}}
	function Kh(a,b){for(var c,d=a.mc;null!==(c=J(b))&&null===d.Ca();)d=Kg(d,c),b=D(b);return d}function Ih(a,b){var c=[];Mh(a,b,c);c.sort(function(a,b){return a.ef-b.ef});return c}function Mh(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.O(function(b){Mh(a,b,c)})}function Hh(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Lg(b,0<c.length?c:null)}b.O(function(b){Hh(a,b)})}
	function Eh(a,b){var c=Kh(a,b).path(),d=Kg(a.mc,b);Og(d,function(b){Nh(a,b)});Nh(a,d);Ng(d,function(b){Nh(a,b)});return c}
	function Nh(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(H(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Rd="set"):(H(1===c[h].status,"Unexpected transaction status in abort"),c[h].Pd(),e=e.concat(hh(a.K,c[h].Ba,!0)),c[h].G&&d.push(q(c[h].G,null,Error("set"),!1,null))));-1===f?Lg(b,null):c.length=f+1;Sb(a.ca,b.path(),e);for(h=0;h<d.length;h++)ub(d[h])}};function Ye(){this.lb={};this.wf=!1}Ye.prototype.ab=function(){for(var a in this.lb)this.lb[a].ab()};Ye.prototype.kc=function(){for(var a in this.lb)this.lb[a].kc()};Ye.prototype.$d=function(a){this.wf=a};ca(Ye);Ye.prototype.interrupt=Ye.prototype.ab;Ye.prototype.resume=Ye.prototype.kc;var Z={};Z.nc=Pg;Z.DataConnection=Z.nc;Pg.prototype.ng=function(a,b){this.ua("q",{p:a},b)};Z.nc.prototype.simpleListen=Z.nc.prototype.ng;Pg.prototype.Hf=function(a,b){this.ua("echo",{d:a},b)};Z.nc.prototype.echo=Z.nc.prototype.Hf;Pg.prototype.interrupt=Pg.prototype.ab;Z.zf=Ce;Z.RealTimeConnection=Z.zf;Ce.prototype.sendRequest=Ce.prototype.ua;Ce.prototype.close=Ce.prototype.close;
	Z.Rf=function(a){var b=Pg.prototype.put;Pg.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Pg.prototype.put=b}};Z.hijackHash=Z.Rf;Z.yf=Hb;Z.ConnectionTarget=Z.yf;Z.ja=function(a){return a.ja()};Z.queryIdentifier=Z.ja;Z.Uf=function(a){return a.u.Ra.$};Z.listens=Z.Uf;Z.$d=function(a){Ye.Vb().$d(a)};Z.forceRestClient=Z.$d;Z.Context=Ye;function U(a,b){if(!(a instanceof Te))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,fe,!1);this.then=void 0;this["catch"]=void 0}la(U,X);g=U.prototype;g.getKey=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:Bd(this.path)};
	g.n=function(a){x("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof L))if(null===J(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));lf("Firebase.child",b)}else lf("Firebase.child",a);return new U(this.u,this.path.n(a))};g.getParent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.u,a)};
	g.Of=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Gf=function(){return this.u.Ya};g.set=function(a,b){x("Firebase.set",1,2,arguments.length);mf("Firebase.set",this.path);df("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);var c=new hb;this.u.Jb(this.path,a,null,ib(c,b));return c.ra};
	g.update=function(a,b){x("Firebase.update",1,2,arguments.length);mf("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}gf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);c=new hb;this.u.update(this.path,a,ib(c,b));return c.ra};
	g.Jb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);mf("Firebase.setWithPriority",this.path);df("Firebase.setWithPriority",a,this.path,!1);hf("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new hb;this.u.Jb(this.path,a,b,ib(d,c));return d.ra};
	g.remove=function(a){x("Firebase.remove",0,1,arguments.length);mf("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);return this.set(null,a)};
	g.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);mf("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(y("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new hb;ha(b)&&jb(d.ra);Fh(this.u,this.path,a,function(a,c,h){a?
	d.reject(a):d.resolve(new pb(c,h));ha(b)&&b(a,c,h)},c);return d.ra};g.kg=function(a,b){x("Firebase.setPriority",1,2,arguments.length);mf("Firebase.setPriority",this.path);hf("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);var c=new hb;this.u.Jb(this.path.n(".priority"),a,null,ib(c,b));return c.ra};
	g.push=function(a,b){x("Firebase.push",0,2,arguments.length);mf("Firebase.push",this.path);df("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=zh(this.u),d=uf(c),c=this.n(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.n(d)});c.then=q(f.then,f);c["catch"]=q(f.then,f,void 0);ha(b)&&jb(f)}return c};g.ib=function(){mf("Firebase.onDisconnect",this.path);return new V(this.u,this.path)};U.prototype.child=U.prototype.n;U.prototype.set=U.prototype.set;U.prototype.update=U.prototype.update;
	U.prototype.setWithPriority=U.prototype.Jb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.kg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.ib;Lc(U.prototype,"database",U.prototype.Gf);Lc(U.prototype,"key",U.prototype.getKey);Lc(U.prototype,"parent",U.prototype.getParent);Lc(U.prototype,"root",U.prototype.Of);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
	try{firebase.INTERNAL.registerService("database",function(a){var b=Ye.Vb(),c=a.options.databaseURL;n(c)||Ac("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=Bc(c),c=d.jc;Xe("Invalid Firebase Database URL",d);d.path.e()||Ac("Database URL must point to the root of a Firebase Database (not including a child path).");(d=w(b.lb,a.name))&&Ac("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new Te(c,b.wf,a);b.lb[a.name]=
	d;return d.Ya},{Reference:U,Query:X,Database:Se,enableLogging:xc,INTERNAL:Y,TEST_ACCESS:Z,ServerValue:Ve})}catch(Oh){Ac("Failed to register the Firebase Database Service ("+Oh+")")};})();

	module.exports = firebase.database;


/***/ },
/* 5 */
/***/ function(module, exports) {

	
	(function() {
	'use strict';

	function F2(fun)
	{
	  function wrapper(a) { return function(b) { return fun(a,b); }; }
	  wrapper.arity = 2;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F3(fun)
	{
	  function wrapper(a) {
	    return function(b) { return function(c) { return fun(a, b, c); }; };
	  }
	  wrapper.arity = 3;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F4(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return fun(a, b, c, d); }; }; };
	  }
	  wrapper.arity = 4;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F5(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
	  }
	  wrapper.arity = 5;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F6(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return fun(a, b, c, d, e, f); }; }; }; }; };
	  }
	  wrapper.arity = 6;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F7(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
	  }
	  wrapper.arity = 7;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F8(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) {
	    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
	  }
	  wrapper.arity = 8;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F9(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) { return function(i) {
	    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
	  }
	  wrapper.arity = 9;
	  wrapper.func = fun;
	  return wrapper;
	}

	function A2(fun, a, b)
	{
	  return fun.arity === 2
	    ? fun.func(a, b)
	    : fun(a)(b);
	}
	function A3(fun, a, b, c)
	{
	  return fun.arity === 3
	    ? fun.func(a, b, c)
	    : fun(a)(b)(c);
	}
	function A4(fun, a, b, c, d)
	{
	  return fun.arity === 4
	    ? fun.func(a, b, c, d)
	    : fun(a)(b)(c)(d);
	}
	function A5(fun, a, b, c, d, e)
	{
	  return fun.arity === 5
	    ? fun.func(a, b, c, d, e)
	    : fun(a)(b)(c)(d)(e);
	}
	function A6(fun, a, b, c, d, e, f)
	{
	  return fun.arity === 6
	    ? fun.func(a, b, c, d, e, f)
	    : fun(a)(b)(c)(d)(e)(f);
	}
	function A7(fun, a, b, c, d, e, f, g)
	{
	  return fun.arity === 7
	    ? fun.func(a, b, c, d, e, f, g)
	    : fun(a)(b)(c)(d)(e)(f)(g);
	}
	function A8(fun, a, b, c, d, e, f, g, h)
	{
	  return fun.arity === 8
	    ? fun.func(a, b, c, d, e, f, g, h)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h);
	}
	function A9(fun, a, b, c, d, e, f, g, h, i)
	{
	  return fun.arity === 9
	    ? fun.func(a, b, c, d, e, f, g, h, i)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
	}

	//import Native.List //

	var _elm_lang$core$Native_Array = function() {

	// A RRB-Tree has two distinct data types.
	// Leaf -> "height"  is always 0
	//         "table"   is an array of elements
	// Node -> "height"  is always greater than 0
	//         "table"   is an array of child nodes
	//         "lengths" is an array of accumulated lengths of the child nodes

	// M is the maximal table size. 32 seems fast. E is the allowed increase
	// of search steps when concatting to find an index. Lower values will
	// decrease balancing, but will increase search steps.
	var M = 32;
	var E = 2;

	// An empty array.
	var empty = {
		ctor: '_Array',
		height: 0,
		table: []
	};


	function get(i, array)
	{
		if (i < 0 || i >= length(array))
		{
			throw new Error(
				'Index ' + i + ' is out of range. Check the length of ' +
				'your array first or use getMaybe or getWithDefault.');
		}
		return unsafeGet(i, array);
	}


	function unsafeGet(i, array)
	{
		for (var x = array.height; x > 0; x--)
		{
			var slot = i >> (x * 5);
			while (array.lengths[slot] <= i)
			{
				slot++;
			}
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array = array.table[slot];
		}
		return array.table[i];
	}


	// Sets the value at the index i. Only the nodes leading to i will get
	// copied and updated.
	function set(i, item, array)
	{
		if (i < 0 || length(array) <= i)
		{
			return array;
		}
		return unsafeSet(i, item, array);
	}


	function unsafeSet(i, item, array)
	{
		array = nodeCopy(array);

		if (array.height === 0)
		{
			array.table[i] = item;
		}
		else
		{
			var slot = getSlot(i, array);
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array.table[slot] = unsafeSet(i, item, array.table[slot]);
		}
		return array;
	}


	function initialize(len, f)
	{
		if (len <= 0)
		{
			return empty;
		}
		var h = Math.floor( Math.log(len) / Math.log(M) );
		return initialize_(f, h, 0, len);
	}

	function initialize_(f, h, from, to)
	{
		if (h === 0)
		{
			var table = new Array((to - from) % (M + 1));
			for (var i = 0; i < table.length; i++)
			{
			  table[i] = f(from + i);
			}
			return {
				ctor: '_Array',
				height: 0,
				table: table
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function fromList(list)
	{
		if (list.ctor === '[]')
		{
			return empty;
		}

		// Allocate M sized blocks (table) and write list elements to it.
		var table = new Array(M);
		var nodes = [];
		var i = 0;

		while (list.ctor !== '[]')
		{
			table[i] = list._0;
			list = list._1;
			i++;

			// table is full, so we can push a leaf containing it into the
			// next node.
			if (i === M)
			{
				var leaf = {
					ctor: '_Array',
					height: 0,
					table: table
				};
				fromListPush(leaf, nodes);
				table = new Array(M);
				i = 0;
			}
		}

		// Maybe there is something left on the table.
		if (i > 0)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table.splice(0, i)
			};
			fromListPush(leaf, nodes);
		}

		// Go through all of the nodes and eventually push them into higher nodes.
		for (var h = 0; h < nodes.length - 1; h++)
		{
			if (nodes[h].table.length > 0)
			{
				fromListPush(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];
		if (head.height > 0 && head.table.length === 1)
		{
			return head.table[0];
		}
		else
		{
			return head;
		}
	}

	// Push a node into a higher node as a child.
	function fromListPush(toPush, nodes)
	{
		var h = toPush.height;

		// Maybe the node on this height does not exist.
		if (nodes.length === h)
		{
			var node = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
			nodes.push(node);
		}

		nodes[h].table.push(toPush);
		var len = length(toPush);
		if (nodes[h].lengths.length > 0)
		{
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}
		nodes[h].lengths.push(len);

		if (nodes[h].table.length === M)
		{
			fromListPush(nodes[h], nodes);
			nodes[h] = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
		}
	}

	// Pushes an item via push_ to the bottom right of a tree.
	function push(item, a)
	{
		var pushed = push_(item, a);
		if (pushed !== null)
		{
			return pushed;
		}

		var newTree = create(item, a.height);
		return siblise(a, newTree);
	}

	// Recursively tries to push an item to the bottom-right most
	// tree possible. If there is no space left for the item,
	// null will be returned.
	function push_(item, a)
	{
		// Handle resursion stop at leaf level.
		if (a.height === 0)
		{
			if (a.table.length < M)
			{
				var newA = {
					ctor: '_Array',
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			}
			else
			{
			  return null;
			}
		}

		// Recursively push
		var pushed = push_(item, botRight(a));

		// There was space in the bottom right tree, so the slot will
		// be updated.
		if (pushed !== null)
		{
			var newA = nodeCopy(a);
			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		}

		// When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.
		if (a.table.length < M)
		{
			var newSlot = create(item, a.height - 1);
			var newA = nodeCopy(a);
			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
			return newA;
		}
		else
		{
			return null;
		}
	}

	// Converts an array into a list of elements.
	function toList(a)
	{
		return toList_(_elm_lang$core$Native_List.Nil, a);
	}

	function toList_(list, a)
	{
		for (var i = a.table.length - 1; i >= 0; i--)
		{
			list =
				a.height === 0
					? _elm_lang$core$Native_List.Cons(a.table[i], list)
					: toList_(list, a.table[i]);
		}
		return list;
	}

	// Maps a function over the elements of an array.
	function map(f, a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? f(a.table[i])
					: map(f, a.table[i]);
		}
		return newA;
	}

	// Maps a function over the elements with their index as first argument.
	function indexedMap(f, a)
	{
		return indexedMap_(f, a, 0);
	}

	function indexedMap_(f, a, from)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? A2(f, from + i, a.table[i])
					: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
		}
		return newA;
	}

	function foldl(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = foldl(f, b, a.table[i]);
			}
		}
		return b;
	}

	function foldr(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = a.table.length; i--; )
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = a.table.length; i--; )
			{
				b = foldr(f, b, a.table[i]);
			}
		}
		return b;
	}

	// TODO: currently, it slices the right, then the left. This can be
	// optimized.
	function slice(from, to, a)
	{
		if (from < 0)
		{
			from += length(a);
		}
		if (to < 0)
		{
			to += length(a);
		}
		return sliceLeft(from, sliceRight(to, a));
	}

	function sliceRight(to, a)
	{
		if (to === length(a))
		{
			return a;
		}

		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(0, to);
			return newA;
		}

		// Slice the right recursively.
		var right = getSlot(to, a);
		var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (right === 0)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};
		if (sliced.table.length > 0)
		{
			newA.table[right] = sliced;
			newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}
		return newA;
	}

	function sliceLeft(from, a)
	{
		if (from === 0)
		{
			return a;
		}

		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		}

		// Slice the left recursively.
		var left = getSlot(from, a);
		var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (left === a.table.length - 1)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;
		for (var i = 0; i < newA.table.length; i++)
		{
			len += length(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	// Appends two trees.
	function append(a,b)
	{
		if (a.table.length === 0)
		{
			return b;
		}
		if (b.table.length === 0)
		{
			return a;
		}

		var c = append_(a, b);

		// Check if both nodes can be crunshed together.
		if (c[0].table.length + c[1].table.length <= M)
		{
			if (c[0].table.length === 0)
			{
				return c[1];
			}
			if (c[1].table.length === 0)
			{
				return c[0];
			}

			// Adjust .table and .lengths
			c[0].table = c[0].table.concat(c[1].table);
			if (c[0].height > 0)
			{
				var len = length(c[0]);
				for (var i = 0; i < c[1].lengths.length; i++)
				{
					c[1].lengths[i] += len;
				}
				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0)
		{
			var toRemove = calcToRemove(a, b);
			if (toRemove > E)
			{
				c = shuffle(c[0], c[1], toRemove);
			}
		}

		return siblise(c[0], c[1]);
	}

	// Returns an array of two nodes; right and left. One node _may_ be empty.
	function append_(a, b)
	{
		if (a.height === 0 && b.height === 0)
		{
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1)
		{
			if (a.height === b.height)
			{
				a = nodeCopy(a);
				b = nodeCopy(b);
				var appended = append_(botRight(a), botLeft(b));

				insertRight(a, appended[1]);
				insertLeft(b, appended[0]);
			}
			else if (a.height > b.height)
			{
				a = nodeCopy(a);
				var appended = append_(botRight(a), b);

				insertRight(a, appended[0]);
				b = parentise(appended[1], appended[1].height + 1);
			}
			else
			{
				b = nodeCopy(b);
				var appended = append_(a, botLeft(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;
				insertLeft(b, appended[left]);
				a = parentise(appended[right], appended[right].height + 1);
			}
		}

		// Check if balancing is needed and return based on that.
		if (a.table.length === 0 || b.table.length === 0)
		{
			return [a, b];
		}

		var toRemove = calcToRemove(a, b);
		if (toRemove <= E)
		{
			return [a, b];
		}
		return shuffle(a, b, toRemove);
	}

	// Helperfunctions for append_. Replaces a child node at the side of the parent.
	function insertRight(parent, node)
	{
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = length(node);
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function insertLeft(parent, node)
	{
		if (node.table.length > 0)
		{
			parent.table[0] = node;
			parent.lengths[0] = length(node);

			var len = length(parent.table[0]);
			for (var i = 1; i < parent.lengths.length; i++)
			{
				len += length(parent.table[i]);
				parent.lengths[i] = len;
			}
		}
		else
		{
			parent.table.shift();
			for (var i = 1; i < parent.lengths.length; i++)
			{
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}
			parent.lengths.shift();
		}
	}

	// Returns the extra search steps for E. Refer to the paper.
	function calcToRemove(a, b)
	{
		var subLengths = 0;
		for (var i = 0; i < a.table.length; i++)
		{
			subLengths += a.table[i].table.length;
		}
		for (var i = 0; i < b.table.length; i++)
		{
			subLengths += b.table[i].table.length;
		}

		var toRemove = a.table.length + b.table.length;
		return toRemove - (Math.floor((subLengths - 1) / M) + 1);
	}

	// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
	function get2(a, b, index)
	{
		return index < a.length
			? a[index]
			: b[index - a.length];
	}

	function set2(a, b, index, value)
	{
		if (index < a.length)
		{
			a[index] = value;
		}
		else
		{
			b[index - a.length] = value;
		}
	}

	function saveSlot(a, b, index, slot)
	{
		set2(a.table, b.table, index, slot);

		var l = (index === 0 || index === a.lengths.length)
			? 0
			: get2(a.lengths, a.lengths, index - 1);

		set2(a.lengths, b.lengths, index, l + length(slot));
	}

	// Creates a node or leaf with a given length at their arrays for perfomance.
	// Is only used by shuffle.
	function createNode(h, length)
	{
		if (length < 0)
		{
			length = 0;
		}
		var a = {
			ctor: '_Array',
			height: h,
			table: new Array(length)
		};
		if (h > 0)
		{
			a.lengths = new Array(length);
		}
		return a;
	}

	// Returns an array of two balanced nodes.
	function shuffle(a, b, toRemove)
	{
		var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
		var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

		// Skip the slots with size M. More precise: copy the slot references
		// to the new node
		var read = 0;
		while (get2(a.table, b.table, read).table.length % M === 0)
		{
			set2(newA.table, newB.table, read, get2(a.table, b.table, read));
			set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
			read++;
		}

		// Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.
		var write = read;
		var slot = new createNode(a.height - 1, 0);
		var from = 0;

		// If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.
		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
		{
			// Find out the max possible items for copying.
			var source = get2(a.table, b.table, read);
			var to = Math.min(M - slot.table.length, source.table.length);

			// Copy and adjust size table.
			slot.table = slot.table.concat(source.table.slice(from, to));
			if (slot.height > 0)
			{
				var len = slot.lengths.length;
				for (var i = len; i < len + to - from; i++)
				{
					slot.lengths[i] = length(slot.table[i]);
					slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
				}
			}

			from += to;

			// Only proceed to next slots[i] if the current one was
			// fully copied.
			if (source.table.length <= to)
			{
				read++; from = 0;
			}

			// Only create a new slot if the current one is filled up.
			if (slot.table.length === M)
			{
				saveSlot(newA, newB, write, slot);
				slot = createNode(a.height - 1, 0);
				write++;
			}
		}

		// Cleanup after the loop. Copy the last slot into the new nodes.
		if (slot.table.length > 0)
		{
			saveSlot(newA, newB, write, slot);
			write++;
		}

		// Shift the untouched slots to the left
		while (read < a.table.length + b.table.length )
		{
			saveSlot(newA, newB, write, get2(a.table, b.table, read));
			read++;
			write++;
		}

		return [newA, newB];
	}

	// Navigation functions
	function botRight(a)
	{
		return a.table[a.table.length - 1];
	}
	function botLeft(a)
	{
		return a.table[0];
	}

	// Copies a node for updating. Note that you should not use this if
	// only updating only one of "table" or "lengths" for performance reasons.
	function nodeCopy(a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice()
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths.slice();
		}
		return newA;
	}

	// Returns how many items are in the tree.
	function length(array)
	{
		if (array.height === 0)
		{
			return array.table.length;
		}
		else
		{
			return array.lengths[array.lengths.length - 1];
		}
	}

	// Calculates in which slot of "table" the item probably is, then
	// find the exact slot via forward searching in  "lengths". Returns the index.
	function getSlot(i, a)
	{
		var slot = i >> (5 * a.height);
		while (a.lengths[slot] <= i)
		{
			slot++;
		}
		return slot;
	}

	// Recursively creates a tree with a given height containing
	// only the given item.
	function create(item, h)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: [item]
			};
		}
		return {
			ctor: '_Array',
			height: h,
			table: [create(item, h - 1)],
			lengths: [1]
		};
	}

	// Recursively creates a tree that contains the given tree.
	function parentise(tree, h)
	{
		if (h === tree.height)
		{
			return tree;
		}

		return {
			ctor: '_Array',
			height: h,
			table: [parentise(tree, h - 1)],
			lengths: [length(tree)]
		};
	}

	// Emphasizes blood brotherhood beneath two trees.
	function siblise(a, b)
	{
		return {
			ctor: '_Array',
			height: a.height + 1,
			table: [a, b],
			lengths: [length(a), length(a) + length(b)]
		};
	}

	function toJSArray(a)
	{
		var jsArray = new Array(length(a));
		toJSArray_(jsArray, 0, a);
		return jsArray;
	}

	function toJSArray_(jsArray, i, a)
	{
		for (var t = 0; t < a.table.length; t++)
		{
			if (a.height === 0)
			{
				jsArray[i + t] = a.table[t];
			}
			else
			{
				var inc = t === 0 ? 0 : a.lengths[t - 1];
				toJSArray_(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function fromJSArray(jsArray)
	{
		if (jsArray.length === 0)
		{
			return empty;
		}
		var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
		return fromJSArray_(jsArray, h, 0, jsArray.length);
	}

	function fromJSArray_(jsArray, h, from, to)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: jsArray.slice(from, to)
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	return {
		empty: empty,
		fromList: fromList,
		toList: toList,
		initialize: F2(initialize),
		append: F2(append),
		push: F2(push),
		slice: F3(slice),
		get: F2(get),
		set: F3(set),
		map: F2(map),
		indexedMap: F2(indexedMap),
		foldl: F3(foldl),
		foldr: F3(foldr),
		length: length,

		toJSArray: toJSArray,
		fromJSArray: fromJSArray
	};

	}();
	//import Native.Utils //

	var _elm_lang$core$Native_Basics = function() {

	function div(a, b)
	{
		return (a / b) | 0;
	}
	function rem(a, b)
	{
		return a % b;
	}
	function mod(a, b)
	{
		if (b === 0)
		{
			throw new Error('Cannot perform mod 0. Division by zero error.');
		}
		var r = a % b;
		var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

		return m === b ? 0 : m;
	}
	function logBase(base, n)
	{
		return Math.log(n) / Math.log(base);
	}
	function negate(n)
	{
		return -n;
	}
	function abs(n)
	{
		return n < 0 ? -n : n;
	}

	function min(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
	}
	function max(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
	}
	function clamp(lo, hi, n)
	{
		return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
			? lo
			: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
				? hi
				: n;
	}

	var ord = ['LT', 'EQ', 'GT'];

	function compare(x, y)
	{
		return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
	}

	function xor(a, b)
	{
		return a !== b;
	}
	function not(b)
	{
		return !b;
	}
	function isInfinite(n)
	{
		return n === Infinity || n === -Infinity;
	}

	function truncate(n)
	{
		return n | 0;
	}

	function degrees(d)
	{
		return d * Math.PI / 180;
	}
	function turns(t)
	{
		return 2 * Math.PI * t;
	}
	function fromPolar(point)
	{
		var r = point._0;
		var t = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
	}
	function toPolar(point)
	{
		var x = point._0;
		var y = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
	}

	return {
		div: F2(div),
		rem: F2(rem),
		mod: F2(mod),

		pi: Math.PI,
		e: Math.E,
		cos: Math.cos,
		sin: Math.sin,
		tan: Math.tan,
		acos: Math.acos,
		asin: Math.asin,
		atan: Math.atan,
		atan2: F2(Math.atan2),

		degrees: degrees,
		turns: turns,
		fromPolar: fromPolar,
		toPolar: toPolar,

		sqrt: Math.sqrt,
		logBase: F2(logBase),
		negate: negate,
		abs: abs,
		min: F2(min),
		max: F2(max),
		clamp: F3(clamp),
		compare: F2(compare),

		xor: F2(xor),
		not: not,

		truncate: truncate,
		ceiling: Math.ceil,
		floor: Math.floor,
		round: Math.round,
		toFloat: function(x) { return x; },
		isNaN: isNaN,
		isInfinite: isInfinite
	};

	}();
	//import //

	var _elm_lang$core$Native_Utils = function() {

	// COMPARISONS

	function eq(x, y)
	{
		var stack = [];
		var isEqual = eqHelp(x, y, 0, stack);
		var pair;
		while (isEqual && (pair = stack.pop()))
		{
			isEqual = eqHelp(pair.x, pair.y, 0, stack);
		}
		return isEqual;
	}


	function eqHelp(x, y, depth, stack)
	{
		if (depth > 100)
		{
			stack.push({ x: x, y: y });
			return true;
		}

		if (x === y)
		{
			return true;
		}

		if (typeof x !== 'object')
		{
			if (typeof x === 'function')
			{
				throw new Error(
					'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
					+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
					+ ' which describes why it is this way and what the better version will look like.'
				);
			}
			return false;
		}

		if (x === null || y === null)
		{
			return false
		}

		if (x instanceof Date)
		{
			return x.getTime() === y.getTime();
		}

		if (!('ctor' in x))
		{
			for (var key in x)
			{
				if (!eqHelp(x[key], y[key], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}

		// convert Dicts and Sets to lists
		if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
		{
			x = _elm_lang$core$Dict$toList(x);
			y = _elm_lang$core$Dict$toList(y);
		}
		if (x.ctor === 'Set_elm_builtin')
		{
			x = _elm_lang$core$Set$toList(x);
			y = _elm_lang$core$Set$toList(y);
		}

		// check if lists are equal without recursion
		if (x.ctor === '::')
		{
			var a = x;
			var b = y;
			while (a.ctor === '::' && b.ctor === '::')
			{
				if (!eqHelp(a._0, b._0, depth + 1, stack))
				{
					return false;
				}
				a = a._1;
				b = b._1;
			}
			return a.ctor === b.ctor;
		}

		// check if Arrays are equal
		if (x.ctor === '_Array')
		{
			var xs = _elm_lang$core$Native_Array.toJSArray(x);
			var ys = _elm_lang$core$Native_Array.toJSArray(y);
			if (xs.length !== ys.length)
			{
				return false;
			}
			for (var i = 0; i < xs.length; i++)
			{
				if (!eqHelp(xs[i], ys[i], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}

		if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
		{
			return false;
		}

		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
	// the particular integer values assigned to LT, EQ, and GT.

	var LT = -1, EQ = 0, GT = 1;

	function cmp(x, y)
	{
		if (typeof x !== 'object')
		{
			return x === y ? EQ : x < y ? LT : GT;
		}

		if (x instanceof String)
		{
			var a = x.valueOf();
			var b = y.valueOf();
			return a === b ? EQ : a < b ? LT : GT;
		}

		if (x.ctor === '::' || x.ctor === '[]')
		{
			while (x.ctor === '::' && y.ctor === '::')
			{
				var ord = cmp(x._0, y._0);
				if (ord !== EQ)
				{
					return ord;
				}
				x = x._1;
				y = y._1;
			}
			return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
		}

		if (x.ctor.slice(0, 6) === '_Tuple')
		{
			var ord;
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return EQ;
			if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
			if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
			if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
			if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
			if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
			if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
			if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
			return EQ;
		}

		throw new Error(
			'Comparison error: comparison is only defined on ints, '
			+ 'floats, times, chars, strings, lists of comparable values, '
			+ 'and tuples of comparable values.'
		);
	}


	// COMMON VALUES

	var Tuple0 = {
		ctor: '_Tuple0'
	};

	function Tuple2(x, y)
	{
		return {
			ctor: '_Tuple2',
			_0: x,
			_1: y
		};
	}

	function chr(c)
	{
		return new String(c);
	}


	// GUID

	var count = 0;
	function guid(_)
	{
		return count++;
	}


	// RECORDS

	function update(oldRecord, updatedFields)
	{
		var newRecord = {};

		for (var key in oldRecord)
		{
			newRecord[key] = oldRecord[key];
		}

		for (var key in updatedFields)
		{
			newRecord[key] = updatedFields[key];
		}

		return newRecord;
	}


	//// LIST STUFF ////

	var Nil = { ctor: '[]' };

	function Cons(hd, tl)
	{
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}

	function append(xs, ys)
	{
		// append Strings
		if (typeof xs === 'string')
		{
			return xs + ys;
		}

		// append Lists
		if (xs.ctor === '[]')
		{
			return ys;
		}
		var root = Cons(xs._0, Nil);
		var curr = root;
		xs = xs._1;
		while (xs.ctor !== '[]')
		{
			curr._1 = Cons(xs._0, Nil);
			xs = xs._1;
			curr = curr._1;
		}
		curr._1 = ys;
		return root;
	}


	// CRASHES

	function crash(moduleName, region)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}

	function crashCase(moduleName, region, value)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
				+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
				+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}

	function regionToString(region)
	{
		if (region.start.line == region.end.line)
		{
			return 'on line ' + region.start.line;
		}
		return 'between lines ' + region.start.line + ' and ' + region.end.line;
	}


	// TO STRING

	function toString(v)
	{
		var type = typeof v;
		if (type === 'function')
		{
			var name = v.func ? v.func.name : v.name;
			return '<function' + (name === '' ? '' : ':') + name + '>';
		}

		if (type === 'boolean')
		{
			return v ? 'True' : 'False';
		}

		if (type === 'number')
		{
			return v + '';
		}

		if (v instanceof String)
		{
			return '\'' + addSlashes(v, true) + '\'';
		}

		if (type === 'string')
		{
			return '"' + addSlashes(v, false) + '"';
		}

		if (v === null)
		{
			return 'null';
		}

		if (type === 'object' && 'ctor' in v)
		{
			var ctorStarter = v.ctor.substring(0, 5);

			if (ctorStarter === '_Tupl')
			{
				var output = [];
				for (var k in v)
				{
					if (k === 'ctor') continue;
					output.push(toString(v[k]));
				}
				return '(' + output.join(',') + ')';
			}

			if (ctorStarter === '_Task')
			{
				return '<task>'
			}

			if (v.ctor === '_Array')
			{
				var list = _elm_lang$core$Array$toList(v);
				return 'Array.fromList ' + toString(list);
			}

			if (v.ctor === '<decoder>')
			{
				return '<decoder>';
			}

			if (v.ctor === '_Process')
			{
				return '<process:' + v.id + '>';
			}

			if (v.ctor === '::')
			{
				var output = '[' + toString(v._0);
				v = v._1;
				while (v.ctor === '::')
				{
					output += ',' + toString(v._0);
					v = v._1;
				}
				return output + ']';
			}

			if (v.ctor === '[]')
			{
				return '[]';
			}

			if (v.ctor === 'Set_elm_builtin')
			{
				return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
			}

			if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
			{
				return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
			}

			var output = '';
			for (var i in v)
			{
				if (i === 'ctor') continue;
				var str = toString(v[i]);
				var c0 = str[0];
				var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
				output += ' ' + (parenless ? str : '(' + str + ')');
			}
			return v.ctor + output;
		}

		if (type === 'object')
		{
			if (v instanceof Date)
			{
				return '<' + v.toString() + '>';
			}

			if (v.elm_web_socket)
			{
				return '<websocket>';
			}

			var output = [];
			for (var k in v)
			{
				output.push(k + ' = ' + toString(v[k]));
			}
			if (output.length === 0)
			{
				return '{}';
			}
			return '{ ' + output.join(', ') + ' }';
		}

		return '<internal structure>';
	}

	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, '\\\'');
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}


	return {
		eq: eq,
		cmp: cmp,
		Tuple0: Tuple0,
		Tuple2: Tuple2,
		chr: chr,
		update: update,
		guid: guid,

		append: F2(append),

		crash: crash,
		crashCase: crashCase,

		toString: toString
	};

	}();
	var _elm_lang$core$Basics$never = function (_p0) {
		never:
		while (true) {
			var _p1 = _p0;
			var _v1 = _p1._0;
			_p0 = _v1;
			continue never;
		}
	};
	var _elm_lang$core$Basics$uncurry = F2(
		function (f, _p2) {
			var _p3 = _p2;
			return A2(f, _p3._0, _p3._1);
		});
	var _elm_lang$core$Basics$curry = F3(
		function (f, a, b) {
			return f(
				{ctor: '_Tuple2', _0: a, _1: b});
		});
	var _elm_lang$core$Basics$flip = F3(
		function (f, b, a) {
			return A2(f, a, b);
		});
	var _elm_lang$core$Basics$always = F2(
		function (a, _p4) {
			return a;
		});
	var _elm_lang$core$Basics$identity = function (x) {
		return x;
	};
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<|'] = F2(
		function (f, x) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['|>'] = F2(
		function (x, f) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>>'] = F3(
		function (f, g, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<<'] = F3(
		function (g, f, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
	var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
	var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
	var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
	var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
	var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
	var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
	var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
	var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
	var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
	var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
	var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
	var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
	var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
	var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
	var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
	var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
	var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
	var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
	var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
	var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
	var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
	var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
	var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
	var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
	var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
	var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
	var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
	var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
	var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
	var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
	var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
	var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
	var _elm_lang$core$Basics$radians = function (t) {
		return t;
	};
	var _elm_lang$core$Basics$GT = {ctor: 'GT'};
	var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
	var _elm_lang$core$Basics$LT = {ctor: 'LT'};
	var _elm_lang$core$Basics$JustOneMore = function (a) {
		return {ctor: 'JustOneMore', _0: a};
	};

	var _elm_lang$core$Maybe$withDefault = F2(
		function ($default, maybe) {
			var _p0 = maybe;
			if (_p0.ctor === 'Just') {
				return _p0._0;
			} else {
				return $default;
			}
		});
	var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
	var _elm_lang$core$Maybe$andThen = F2(
		function (callback, maybeValue) {
			var _p1 = maybeValue;
			if (_p1.ctor === 'Just') {
				return callback(_p1._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$Just = function (a) {
		return {ctor: 'Just', _0: a};
	};
	var _elm_lang$core$Maybe$map = F2(
		function (f, maybe) {
			var _p2 = maybe;
			if (_p2.ctor === 'Just') {
				return _elm_lang$core$Maybe$Just(
					f(_p2._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map2 = F3(
		function (func, ma, mb) {
			var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
			if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A2(func, _p3._0._0, _p3._1._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map3 = F4(
		function (func, ma, mb, mc) {
			var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
			if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map4 = F5(
		function (func, ma, mb, mc, md) {
			var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
			if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map5 = F6(
		function (func, ma, mb, mc, md, me) {
			var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
			if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});

	//import Native.Utils //

	var _elm_lang$core$Native_List = function() {

	var Nil = { ctor: '[]' };

	function Cons(hd, tl)
	{
		return { ctor: '::', _0: hd, _1: tl };
	}

	function fromArray(arr)
	{
		var out = Nil;
		for (var i = arr.length; i--; )
		{
			out = Cons(arr[i], out);
		}
		return out;
	}

	function toArray(xs)
	{
		var out = [];
		while (xs.ctor !== '[]')
		{
			out.push(xs._0);
			xs = xs._1;
		}
		return out;
	}

	function foldr(f, b, xs)
	{
		var arr = toArray(xs);
		var acc = b;
		for (var i = arr.length; i--; )
		{
			acc = A2(f, arr[i], acc);
		}
		return acc;
	}

	function map2(f, xs, ys)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]')
		{
			arr.push(A2(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}
		return fromArray(arr);
	}

	function map3(f, xs, ys, zs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
		{
			arr.push(A3(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map4(f, ws, xs, ys, zs)
	{
		var arr = [];
		while (   ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map5(f, vs, ws, xs, ys, zs)
	{
		var arr = [];
		while (   vs.ctor !== '[]'
			   && ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function sortBy(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
		}));
	}

	function sortWith(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	return {
		Nil: Nil,
		Cons: Cons,
		cons: F2(Cons),
		toArray: toArray,
		fromArray: fromArray,

		foldr: F3(foldr),

		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		sortBy: F2(sortBy),
		sortWith: F2(sortWith)
	};

	}();
	var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
	var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
	var _elm_lang$core$List$sort = function (xs) {
		return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
	};
	var _elm_lang$core$List$drop = F2(
		function (n, list) {
			drop:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return list;
				} else {
					var _p0 = list;
					if (_p0.ctor === '[]') {
						return list;
					} else {
						var _v1 = n - 1,
							_v2 = _p0._1;
						n = _v1;
						list = _v2;
						continue drop;
					}
				}
			}
		});
	var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
	var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
	var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
	var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
	var _elm_lang$core$List$any = F2(
		function (isOkay, list) {
			any:
			while (true) {
				var _p1 = list;
				if (_p1.ctor === '[]') {
					return false;
				} else {
					if (isOkay(_p1._0)) {
						return true;
					} else {
						var _v4 = isOkay,
							_v5 = _p1._1;
						isOkay = _v4;
						list = _v5;
						continue any;
					}
				}
			}
		});
	var _elm_lang$core$List$all = F2(
		function (isOkay, list) {
			return !A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return !isOkay(_p2);
				},
				list);
		});
	var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
	var _elm_lang$core$List$foldl = F3(
		function (func, acc, list) {
			foldl:
			while (true) {
				var _p3 = list;
				if (_p3.ctor === '[]') {
					return acc;
				} else {
					var _v7 = func,
						_v8 = A2(func, _p3._0, acc),
						_v9 = _p3._1;
					func = _v7;
					acc = _v8;
					list = _v9;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$List$length = function (xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p4, i) {
					return i + 1;
				}),
			0,
			xs);
	};
	var _elm_lang$core$List$sum = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x + y;
				}),
			0,
			numbers);
	};
	var _elm_lang$core$List$product = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x * y;
				}),
			1,
			numbers);
	};
	var _elm_lang$core$List$maximum = function (list) {
		var _p5 = list;
		if (_p5.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$minimum = function (list) {
		var _p6 = list;
		if (_p6.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$member = F2(
		function (x, xs) {
			return A2(
				_elm_lang$core$List$any,
				function (a) {
					return _elm_lang$core$Native_Utils.eq(a, x);
				},
				xs);
		});
	var _elm_lang$core$List$isEmpty = function (xs) {
		var _p7 = xs;
		if (_p7.ctor === '[]') {
			return true;
		} else {
			return false;
		}
	};
	var _elm_lang$core$List$tail = function (list) {
		var _p8 = list;
		if (_p8.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p8._1);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$head = function (list) {
		var _p9 = list;
		if (_p9.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p9._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
	_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
	var _elm_lang$core$List$map = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, acc) {
						return {
							ctor: '::',
							_0: f(x),
							_1: acc
						};
					}),
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$filter = F2(
		function (pred, xs) {
			var conditionalCons = F2(
				function (front, back) {
					return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
				});
			return A3(
				_elm_lang$core$List$foldr,
				conditionalCons,
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$maybeCons = F3(
		function (f, mx, xs) {
			var _p10 = f(mx);
			if (_p10.ctor === 'Just') {
				return {ctor: '::', _0: _p10._0, _1: xs};
			} else {
				return xs;
			}
		});
	var _elm_lang$core$List$filterMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				_elm_lang$core$List$maybeCons(f),
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$reverse = function (list) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			{ctor: '[]'},
			list);
	};
	var _elm_lang$core$List$scanl = F3(
		function (f, b, xs) {
			var scan1 = F2(
				function (x, accAcc) {
					var _p11 = accAcc;
					if (_p11.ctor === '::') {
						return {
							ctor: '::',
							_0: A2(f, x, _p11._0),
							_1: accAcc
						};
					} else {
						return {ctor: '[]'};
					}
				});
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$foldl,
					scan1,
					{
						ctor: '::',
						_0: b,
						_1: {ctor: '[]'}
					},
					xs));
		});
	var _elm_lang$core$List$append = F2(
		function (xs, ys) {
			var _p12 = ys;
			if (_p12.ctor === '[]') {
				return xs;
			} else {
				return A3(
					_elm_lang$core$List$foldr,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					ys,
					xs);
			}
		});
	var _elm_lang$core$List$concat = function (lists) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$append,
			{ctor: '[]'},
			lists);
	};
	var _elm_lang$core$List$concatMap = F2(
		function (f, list) {
			return _elm_lang$core$List$concat(
				A2(_elm_lang$core$List$map, f, list));
		});
	var _elm_lang$core$List$partition = F2(
		function (pred, list) {
			var step = F2(
				function (x, _p13) {
					var _p14 = _p13;
					var _p16 = _p14._0;
					var _p15 = _p14._1;
					return pred(x) ? {
						ctor: '_Tuple2',
						_0: {ctor: '::', _0: x, _1: _p16},
						_1: _p15
					} : {
						ctor: '_Tuple2',
						_0: _p16,
						_1: {ctor: '::', _0: x, _1: _p15}
					};
				});
			return A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: {ctor: '[]'}
				},
				list);
		});
	var _elm_lang$core$List$unzip = function (pairs) {
		var step = F2(
			function (_p18, _p17) {
				var _p19 = _p18;
				var _p20 = _p17;
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
					_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			pairs);
	};
	var _elm_lang$core$List$intersperse = F2(
		function (sep, xs) {
			var _p21 = xs;
			if (_p21.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var step = F2(
					function (x, rest) {
						return {
							ctor: '::',
							_0: sep,
							_1: {ctor: '::', _0: x, _1: rest}
						};
					});
				var spersed = A3(
					_elm_lang$core$List$foldr,
					step,
					{ctor: '[]'},
					_p21._1);
				return {ctor: '::', _0: _p21._0, _1: spersed};
			}
		});
	var _elm_lang$core$List$takeReverse = F3(
		function (n, list, taken) {
			takeReverse:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return taken;
				} else {
					var _p22 = list;
					if (_p22.ctor === '[]') {
						return taken;
					} else {
						var _v23 = n - 1,
							_v24 = _p22._1,
							_v25 = {ctor: '::', _0: _p22._0, _1: taken};
						n = _v23;
						list = _v24;
						taken = _v25;
						continue takeReverse;
					}
				}
			}
		});
	var _elm_lang$core$List$takeTailRec = F2(
		function (n, list) {
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$takeReverse,
					n,
					list,
					{ctor: '[]'}));
		});
	var _elm_lang$core$List$takeFast = F3(
		function (ctr, n, list) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return {ctor: '[]'};
			} else {
				var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
				_v26_5:
				do {
					_v26_1:
					do {
						if (_p23.ctor === '_Tuple2') {
							if (_p23._1.ctor === '[]') {
								return list;
							} else {
								if (_p23._1._1.ctor === '::') {
									switch (_p23._0) {
										case 1:
											break _v26_1;
										case 2:
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {ctor: '[]'}
												}
											};
										case 3:
											if (_p23._1._1._1.ctor === '::') {
												return {
													ctor: '::',
													_0: _p23._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._0,
														_1: {
															ctor: '::',
															_0: _p23._1._1._1._0,
															_1: {ctor: '[]'}
														}
													}
												};
											} else {
												break _v26_5;
											}
										default:
											if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
												var _p28 = _p23._1._1._1._0;
												var _p27 = _p23._1._1._0;
												var _p26 = _p23._1._0;
												var _p25 = _p23._1._1._1._1._0;
												var _p24 = _p23._1._1._1._1._1;
												return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
													ctor: '::',
													_0: _p26,
													_1: {
														ctor: '::',
														_0: _p27,
														_1: {
															ctor: '::',
															_0: _p28,
															_1: {
																ctor: '::',
																_0: _p25,
																_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
															}
														}
													}
												} : {
													ctor: '::',
													_0: _p26,
													_1: {
														ctor: '::',
														_0: _p27,
														_1: {
															ctor: '::',
															_0: _p28,
															_1: {
																ctor: '::',
																_0: _p25,
																_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
															}
														}
													}
												};
											} else {
												break _v26_5;
											}
									}
								} else {
									if (_p23._0 === 1) {
										break _v26_1;
									} else {
										break _v26_5;
									}
								}
							}
						} else {
							break _v26_5;
						}
					} while(false);
					return {
						ctor: '::',
						_0: _p23._1._0,
						_1: {ctor: '[]'}
					};
				} while(false);
				return list;
			}
		});
	var _elm_lang$core$List$take = F2(
		function (n, list) {
			return A3(_elm_lang$core$List$takeFast, 0, n, list);
		});
	var _elm_lang$core$List$repeatHelp = F3(
		function (result, n, value) {
			repeatHelp:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return result;
				} else {
					var _v27 = {ctor: '::', _0: value, _1: result},
						_v28 = n - 1,
						_v29 = value;
					result = _v27;
					n = _v28;
					value = _v29;
					continue repeatHelp;
				}
			}
		});
	var _elm_lang$core$List$repeat = F2(
		function (n, value) {
			return A3(
				_elm_lang$core$List$repeatHelp,
				{ctor: '[]'},
				n,
				value);
		});
	var _elm_lang$core$List$rangeHelp = F3(
		function (lo, hi, list) {
			rangeHelp:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
					var _v30 = lo,
						_v31 = hi - 1,
						_v32 = {ctor: '::', _0: hi, _1: list};
					lo = _v30;
					hi = _v31;
					list = _v32;
					continue rangeHelp;
				} else {
					return list;
				}
			}
		});
	var _elm_lang$core$List$range = F2(
		function (lo, hi) {
			return A3(
				_elm_lang$core$List$rangeHelp,
				lo,
				hi,
				{ctor: '[]'});
		});
	var _elm_lang$core$List$indexedMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$map2,
				f,
				A2(
					_elm_lang$core$List$range,
					0,
					_elm_lang$core$List$length(xs) - 1),
				xs);
		});

	var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
	var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
	var _elm_lang$core$Array$isEmpty = function (array) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Array$length(array),
			0);
	};
	var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
	var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
	var _elm_lang$core$Array$get = F2(
		function (i, array) {
			return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
				i,
				_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
				A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
		});
	var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
	var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
	var _elm_lang$core$Array$filter = F2(
		function (isOkay, arr) {
			var update = F2(
				function (x, xs) {
					return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
				});
			return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
		});
	var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
	var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
	var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
	var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
	var _elm_lang$core$Array$toIndexedList = function (array) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$Native_Array.length(array) - 1),
			_elm_lang$core$Native_Array.toList(array));
	};
	var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
	var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
	var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
	var _elm_lang$core$Array$repeat = F2(
		function (n, e) {
			return A2(
				_elm_lang$core$Array$initialize,
				n,
				_elm_lang$core$Basics$always(e));
		});
	var _elm_lang$core$Array$Array = {ctor: 'Array'};

	//import Native.Utils //

	var _elm_lang$core$Native_Debug = function() {

	function log(tag, value)
	{
		var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
		var process = process || {};
		if (process.stdout)
		{
			process.stdout.write(msg);
		}
		else
		{
			console.log(msg);
		}
		return value;
	}

	function crash(message)
	{
		throw new Error(message);
	}

	return {
		crash: crash,
		log: F2(log)
	};

	}();
	//import Maybe, Native.List, Native.Utils, Result //

	var _elm_lang$core$Native_String = function() {

	function isEmpty(str)
	{
		return str.length === 0;
	}
	function cons(chr, str)
	{
		return chr + str;
	}
	function uncons(str)
	{
		var hd = str[0];
		if (hd)
		{
			return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
		}
		return _elm_lang$core$Maybe$Nothing;
	}
	function append(a, b)
	{
		return a + b;
	}
	function concat(strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join('');
	}
	function length(str)
	{
		return str.length;
	}
	function map(f, str)
	{
		var out = str.split('');
		for (var i = out.length; i--; )
		{
			out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
		}
		return out.join('');
	}
	function filter(pred, str)
	{
		return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
	}
	function reverse(str)
	{
		return str.split('').reverse().join('');
	}
	function foldl(f, b, str)
	{
		var len = str.length;
		for (var i = 0; i < len; ++i)
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function foldr(f, b, str)
	{
		for (var i = str.length; i--; )
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function split(sep, str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(sep));
	}
	function join(sep, strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join(sep);
	}
	function repeat(n, str)
	{
		var result = '';
		while (n > 0)
		{
			if (n & 1)
			{
				result += str;
			}
			n >>= 1, str += str;
		}
		return result;
	}
	function slice(start, end, str)
	{
		return str.slice(start, end);
	}
	function left(n, str)
	{
		return n < 1 ? '' : str.slice(0, n);
	}
	function right(n, str)
	{
		return n < 1 ? '' : str.slice(-n);
	}
	function dropLeft(n, str)
	{
		return n < 1 ? str : str.slice(n);
	}
	function dropRight(n, str)
	{
		return n < 1 ? str : str.slice(0, -n);
	}
	function pad(n, chr, str)
	{
		var half = (n - str.length) / 2;
		return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
	}
	function padRight(n, chr, str)
	{
		return str + repeat(n - str.length, chr);
	}
	function padLeft(n, chr, str)
	{
		return repeat(n - str.length, chr) + str;
	}

	function trim(str)
	{
		return str.trim();
	}
	function trimLeft(str)
	{
		return str.replace(/^\s+/, '');
	}
	function trimRight(str)
	{
		return str.replace(/\s+$/, '');
	}

	function words(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
	}
	function lines(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
	}

	function toUpper(str)
	{
		return str.toUpperCase();
	}
	function toLower(str)
	{
		return str.toLowerCase();
	}

	function any(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return true;
			}
		}
		return false;
	}
	function all(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return false;
			}
		}
		return true;
	}

	function contains(sub, str)
	{
		return str.indexOf(sub) > -1;
	}
	function startsWith(sub, str)
	{
		return str.indexOf(sub) === 0;
	}
	function endsWith(sub, str)
	{
		return str.length >= sub.length &&
			str.lastIndexOf(sub) === str.length - sub.length;
	}
	function indexes(sub, str)
	{
		var subLen = sub.length;
		
		if (subLen < 1)
		{
			return _elm_lang$core$Native_List.Nil;
		}

		var i = 0;
		var is = [];

		while ((i = str.indexOf(sub, i)) > -1)
		{
			is.push(i);
			i = i + subLen;
		}	
		
		return _elm_lang$core$Native_List.fromArray(is);
	}

	function toInt(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		var start = 0;
		if (s[0] === '-')
		{
			if (len === 1)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
			}
			start = 1;
		}
		for (var i = start; i < len; ++i)
		{
			var c = s[i];
			if (c < '0' || '9' < c)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
			}
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 10));
	}

	function toFloat(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		var start = 0;
		if (s[0] === '-')
		{
			if (len === 1)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
			}
			start = 1;
		}
		var dotCount = 0;
		for (var i = start; i < len; ++i)
		{
			var c = s[i];
			if ('0' <= c && c <= '9')
			{
				continue;
			}
			if (c === '.')
			{
				dotCount += 1;
				if (dotCount <= 1)
				{
					continue;
				}
			}
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		return _elm_lang$core$Result$Ok(parseFloat(s));
	}

	function toList(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
	}
	function fromList(chars)
	{
		return _elm_lang$core$Native_List.toArray(chars).join('');
	}

	return {
		isEmpty: isEmpty,
		cons: F2(cons),
		uncons: uncons,
		append: F2(append),
		concat: concat,
		length: length,
		map: F2(map),
		filter: F2(filter),
		reverse: reverse,
		foldl: F3(foldl),
		foldr: F3(foldr),

		split: F2(split),
		join: F2(join),
		repeat: F2(repeat),

		slice: F3(slice),
		left: F2(left),
		right: F2(right),
		dropLeft: F2(dropLeft),
		dropRight: F2(dropRight),

		pad: F3(pad),
		padLeft: F3(padLeft),
		padRight: F3(padRight),

		trim: trim,
		trimLeft: trimLeft,
		trimRight: trimRight,

		words: words,
		lines: lines,

		toUpper: toUpper,
		toLower: toLower,

		any: F2(any),
		all: F2(all),

		contains: F2(contains),
		startsWith: F2(startsWith),
		endsWith: F2(endsWith),
		indexes: F2(indexes),

		toInt: toInt,
		toFloat: toFloat,
		toList: toList,
		fromList: fromList
	};

	}();

	//import Native.Utils //

	var _elm_lang$core$Native_Char = function() {

	return {
		fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
		toCode: function(c) { return c.charCodeAt(0); },
		toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
		toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
		toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
		toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
	};

	}();
	var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
	var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
	var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
	var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
	var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
	var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
	var _elm_lang$core$Char$isBetween = F3(
		function (low, high, $char) {
			var code = _elm_lang$core$Char$toCode($char);
			return (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(high)) < 1);
		});
	var _elm_lang$core$Char$isUpper = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('Z'));
	var _elm_lang$core$Char$isLower = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('z'));
	var _elm_lang$core$Char$isDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('9'));
	var _elm_lang$core$Char$isOctDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('7'));
	var _elm_lang$core$Char$isHexDigit = function ($char) {
		return _elm_lang$core$Char$isDigit($char) || (A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('a'),
			_elm_lang$core$Native_Utils.chr('f'),
			$char) || A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('A'),
			_elm_lang$core$Native_Utils.chr('F'),
			$char));
	};

	var _elm_lang$core$Result$toMaybe = function (result) {
		var _p0 = result;
		if (_p0.ctor === 'Ok') {
			return _elm_lang$core$Maybe$Just(_p0._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$Result$withDefault = F2(
		function (def, result) {
			var _p1 = result;
			if (_p1.ctor === 'Ok') {
				return _p1._0;
			} else {
				return def;
			}
		});
	var _elm_lang$core$Result$Err = function (a) {
		return {ctor: 'Err', _0: a};
	};
	var _elm_lang$core$Result$andThen = F2(
		function (callback, result) {
			var _p2 = result;
			if (_p2.ctor === 'Ok') {
				return callback(_p2._0);
			} else {
				return _elm_lang$core$Result$Err(_p2._0);
			}
		});
	var _elm_lang$core$Result$Ok = function (a) {
		return {ctor: 'Ok', _0: a};
	};
	var _elm_lang$core$Result$map = F2(
		function (func, ra) {
			var _p3 = ra;
			if (_p3.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					func(_p3._0));
			} else {
				return _elm_lang$core$Result$Err(_p3._0);
			}
		});
	var _elm_lang$core$Result$map2 = F3(
		function (func, ra, rb) {
			var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
			if (_p4._0.ctor === 'Ok') {
				if (_p4._1.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A2(func, _p4._0._0, _p4._1._0));
				} else {
					return _elm_lang$core$Result$Err(_p4._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p4._0._0);
			}
		});
	var _elm_lang$core$Result$map3 = F4(
		function (func, ra, rb, rc) {
			var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
			if (_p5._0.ctor === 'Ok') {
				if (_p5._1.ctor === 'Ok') {
					if (_p5._2.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
					} else {
						return _elm_lang$core$Result$Err(_p5._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p5._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._0._0);
			}
		});
	var _elm_lang$core$Result$map4 = F5(
		function (func, ra, rb, rc, rd) {
			var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
			if (_p6._0.ctor === 'Ok') {
				if (_p6._1.ctor === 'Ok') {
					if (_p6._2.ctor === 'Ok') {
						if (_p6._3.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
						} else {
							return _elm_lang$core$Result$Err(_p6._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p6._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._0._0);
			}
		});
	var _elm_lang$core$Result$map5 = F6(
		function (func, ra, rb, rc, rd, re) {
			var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
			if (_p7._0.ctor === 'Ok') {
				if (_p7._1.ctor === 'Ok') {
					if (_p7._2.ctor === 'Ok') {
						if (_p7._3.ctor === 'Ok') {
							if (_p7._4.ctor === 'Ok') {
								return _elm_lang$core$Result$Ok(
									A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
							} else {
								return _elm_lang$core$Result$Err(_p7._4._0);
							}
						} else {
							return _elm_lang$core$Result$Err(_p7._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._0._0);
			}
		});
	var _elm_lang$core$Result$mapError = F2(
		function (f, result) {
			var _p8 = result;
			if (_p8.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(_p8._0);
			} else {
				return _elm_lang$core$Result$Err(
					f(_p8._0));
			}
		});
	var _elm_lang$core$Result$fromMaybe = F2(
		function (err, maybe) {
			var _p9 = maybe;
			if (_p9.ctor === 'Just') {
				return _elm_lang$core$Result$Ok(_p9._0);
			} else {
				return _elm_lang$core$Result$Err(err);
			}
		});

	var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
	var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
	var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
	var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
	var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
	var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
	var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
	var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
	var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
	var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
	var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
	var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
	var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
	var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
	var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
	var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
	var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
	var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
	var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
	var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
	var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
	var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
	var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
	var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
	var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
	var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
	var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
	var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
	var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
	var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
	var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
	var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
	var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
	var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
	var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
	var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
	var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
	var _elm_lang$core$String$fromChar = function ($char) {
		return A2(_elm_lang$core$String$cons, $char, '');
	};
	var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

	var _elm_lang$core$Dict$foldr = F3(
		function (f, acc, t) {
			foldr:
			while (true) {
				var _p0 = t;
				if (_p0.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v1 = f,
						_v2 = A3(
						f,
						_p0._1,
						_p0._2,
						A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
						_v3 = _p0._3;
					f = _v1;
					acc = _v2;
					t = _v3;
					continue foldr;
				}
			}
		});
	var _elm_lang$core$Dict$keys = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, keyList) {
					return {ctor: '::', _0: key, _1: keyList};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$values = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, valueList) {
					return {ctor: '::', _0: value, _1: valueList};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$toList = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, list) {
					return {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: key, _1: value},
						_1: list
					};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$foldl = F3(
		function (f, acc, dict) {
			foldl:
			while (true) {
				var _p1 = dict;
				if (_p1.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v5 = f,
						_v6 = A3(
						f,
						_p1._1,
						_p1._2,
						A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
						_v7 = _p1._4;
					f = _v5;
					acc = _v6;
					dict = _v7;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$Dict$merge = F6(
		function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
			var stepState = F3(
				function (rKey, rValue, _p2) {
					stepState:
					while (true) {
						var _p3 = _p2;
						var _p9 = _p3._1;
						var _p8 = _p3._0;
						var _p4 = _p8;
						if (_p4.ctor === '[]') {
							return {
								ctor: '_Tuple2',
								_0: _p8,
								_1: A3(rightStep, rKey, rValue, _p9)
							};
						} else {
							var _p7 = _p4._1;
							var _p6 = _p4._0._1;
							var _p5 = _p4._0._0;
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
								var _v10 = rKey,
									_v11 = rValue,
									_v12 = {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A3(leftStep, _p5, _p6, _p9)
								};
								rKey = _v10;
								rValue = _v11;
								_p2 = _v12;
								continue stepState;
							} else {
								if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
									return {
										ctor: '_Tuple2',
										_0: _p8,
										_1: A3(rightStep, rKey, rValue, _p9)
									};
								} else {
									return {
										ctor: '_Tuple2',
										_0: _p7,
										_1: A4(bothStep, _p5, _p6, rValue, _p9)
									};
								}
							}
						}
					}
				});
			var _p10 = A3(
				_elm_lang$core$Dict$foldl,
				stepState,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Dict$toList(leftDict),
					_1: initialResult
				},
				rightDict);
			var leftovers = _p10._0;
			var intermediateResult = _p10._1;
			return A3(
				_elm_lang$core$List$foldl,
				F2(
					function (_p11, result) {
						var _p12 = _p11;
						return A3(leftStep, _p12._0, _p12._1, result);
					}),
				intermediateResult,
				leftovers);
		});
	var _elm_lang$core$Dict$reportRemBug = F4(
		function (msg, c, lgot, rgot) {
			return _elm_lang$core$Native_Debug.crash(
				_elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Internal red-black tree invariant violated, expected ',
						_1: {
							ctor: '::',
							_0: msg,
							_1: {
								ctor: '::',
								_0: ' and got ',
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Basics$toString(c),
									_1: {
										ctor: '::',
										_0: '/',
										_1: {
											ctor: '::',
											_0: lgot,
											_1: {
												ctor: '::',
												_0: '/',
												_1: {
													ctor: '::',
													_0: rgot,
													_1: {
														ctor: '::',
														_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}));
		});
	var _elm_lang$core$Dict$isBBlack = function (dict) {
		var _p13 = dict;
		_v14_2:
		do {
			if (_p13.ctor === 'RBNode_elm_builtin') {
				if (_p13._0.ctor === 'BBlack') {
					return true;
				} else {
					break _v14_2;
				}
			} else {
				if (_p13._0.ctor === 'LBBlack') {
					return true;
				} else {
					break _v14_2;
				}
			}
		} while(false);
		return false;
	};
	var _elm_lang$core$Dict$sizeHelp = F2(
		function (n, dict) {
			sizeHelp:
			while (true) {
				var _p14 = dict;
				if (_p14.ctor === 'RBEmpty_elm_builtin') {
					return n;
				} else {
					var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
						_v17 = _p14._3;
					n = _v16;
					dict = _v17;
					continue sizeHelp;
				}
			}
		});
	var _elm_lang$core$Dict$size = function (dict) {
		return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
	};
	var _elm_lang$core$Dict$get = F2(
		function (targetKey, dict) {
			get:
			while (true) {
				var _p15 = dict;
				if (_p15.ctor === 'RBEmpty_elm_builtin') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
					switch (_p16.ctor) {
						case 'LT':
							var _v20 = targetKey,
								_v21 = _p15._3;
							targetKey = _v20;
							dict = _v21;
							continue get;
						case 'EQ':
							return _elm_lang$core$Maybe$Just(_p15._2);
						default:
							var _v22 = targetKey,
								_v23 = _p15._4;
							targetKey = _v22;
							dict = _v23;
							continue get;
					}
				}
			}
		});
	var _elm_lang$core$Dict$member = F2(
		function (key, dict) {
			var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
			if (_p17.ctor === 'Just') {
				return true;
			} else {
				return false;
			}
		});
	var _elm_lang$core$Dict$maxWithDefault = F3(
		function (k, v, r) {
			maxWithDefault:
			while (true) {
				var _p18 = r;
				if (_p18.ctor === 'RBEmpty_elm_builtin') {
					return {ctor: '_Tuple2', _0: k, _1: v};
				} else {
					var _v26 = _p18._1,
						_v27 = _p18._2,
						_v28 = _p18._4;
					k = _v26;
					v = _v27;
					r = _v28;
					continue maxWithDefault;
				}
			}
		});
	var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
	var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
	var _elm_lang$core$Dict$Black = {ctor: 'Black'};
	var _elm_lang$core$Dict$blackish = function (t) {
		var _p19 = t;
		if (_p19.ctor === 'RBNode_elm_builtin') {
			var _p20 = _p19._0;
			return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
		} else {
			return true;
		}
	};
	var _elm_lang$core$Dict$Red = {ctor: 'Red'};
	var _elm_lang$core$Dict$moreBlack = function (color) {
		var _p21 = color;
		switch (_p21.ctor) {
			case 'Black':
				return _elm_lang$core$Dict$BBlack;
			case 'Red':
				return _elm_lang$core$Dict$Black;
			case 'NBlack':
				return _elm_lang$core$Dict$Red;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
		}
	};
	var _elm_lang$core$Dict$lessBlack = function (color) {
		var _p22 = color;
		switch (_p22.ctor) {
			case 'BBlack':
				return _elm_lang$core$Dict$Black;
			case 'Black':
				return _elm_lang$core$Dict$Red;
			case 'Red':
				return _elm_lang$core$Dict$NBlack;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
		}
	};
	var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
	var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
	var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
		return {ctor: 'RBEmpty_elm_builtin', _0: a};
	};
	var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	var _elm_lang$core$Dict$isEmpty = function (dict) {
		return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
	};
	var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
		function (a, b, c, d, e) {
			return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
		});
	var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
		var _p23 = dict;
		if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
		} else {
			return dict;
		}
	};
	var _elm_lang$core$Dict$lessBlackTree = function (dict) {
		var _p24 = dict;
		if (_p24.ctor === 'RBNode_elm_builtin') {
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$lessBlack(_p24._0),
				_p24._1,
				_p24._2,
				_p24._3,
				_p24._4);
		} else {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		}
	};
	var _elm_lang$core$Dict$balancedTree = function (col) {
		return function (xk) {
			return function (xv) {
				return function (yk) {
					return function (yv) {
						return function (zk) {
							return function (zv) {
								return function (a) {
									return function (b) {
										return function (c) {
											return function (d) {
												return A5(
													_elm_lang$core$Dict$RBNode_elm_builtin,
													_elm_lang$core$Dict$lessBlack(col),
													yk,
													yv,
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _elm_lang$core$Dict$blacken = function (t) {
		var _p25 = t;
		if (_p25.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
		}
	};
	var _elm_lang$core$Dict$redden = function (t) {
		var _p26 = t;
		if (_p26.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
		}
	};
	var _elm_lang$core$Dict$balanceHelp = function (tree) {
		var _p27 = tree;
		_v36_6:
		do {
			_v36_5:
			do {
				_v36_4:
				do {
					_v36_3:
					do {
						_v36_2:
						do {
							_v36_1:
							do {
								_v36_0:
								do {
									if (_p27.ctor === 'RBNode_elm_builtin') {
										if (_p27._3.ctor === 'RBNode_elm_builtin') {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._3._0.ctor) {
													case 'Red':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																			break _v36_2;
																		} else {
																			if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																				break _v36_3;
																			} else {
																				break _v36_6;
																			}
																		}
																	}
																}
															case 'NBlack':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																			break _v36_4;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															default:
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		break _v36_6;
																	}
																}
														}
													case 'NBlack':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															case 'NBlack':
																if (_p27._0.ctor === 'BBlack') {
																	if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																} else {
																	break _v36_6;
																}
															default:
																if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																	break _v36_5;
																} else {
																	break _v36_6;
																}
														}
													default:
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		break _v36_6;
																	}
																}
															case 'NBlack':
																if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	break _v36_6;
																}
															default:
																break _v36_6;
														}
												}
											} else {
												switch (_p27._3._0.ctor) {
													case 'Red':
														if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
															break _v36_0;
														} else {
															if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																break _v36_1;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
															break _v36_5;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											}
										} else {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._4._0.ctor) {
													case 'Red':
														if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
															break _v36_2;
														} else {
															if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																break _v36_3;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
															break _v36_4;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											} else {
												break _v36_6;
											}
										}
									} else {
										break _v36_6;
									}
								} while(false);
								return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
				} while(false);
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_elm_lang$core$Dict$Black,
					_p27._4._3._1,
					_p27._4._3._2,
					A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
					A5(
						_elm_lang$core$Dict$balance,
						_elm_lang$core$Dict$Black,
						_p27._4._1,
						_p27._4._2,
						_p27._4._3._4,
						_elm_lang$core$Dict$redden(_p27._4._4)));
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._3._4._1,
				_p27._3._4._2,
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._3._1,
					_p27._3._2,
					_elm_lang$core$Dict$redden(_p27._3._3),
					_p27._3._4._3),
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
		} while(false);
		return tree;
	};
	var _elm_lang$core$Dict$balance = F5(
		function (c, k, v, l, r) {
			var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
			return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
		});
	var _elm_lang$core$Dict$bubble = F5(
		function (c, k, v, l, r) {
			return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$moreBlack(c),
				k,
				v,
				_elm_lang$core$Dict$lessBlackTree(l),
				_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		});
	var _elm_lang$core$Dict$removeMax = F5(
		function (c, k, v, l, r) {
			var _p28 = r;
			if (_p28.ctor === 'RBEmpty_elm_builtin') {
				return A3(_elm_lang$core$Dict$rem, c, l, r);
			} else {
				return A5(
					_elm_lang$core$Dict$bubble,
					c,
					k,
					v,
					l,
					A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
			}
		});
	var _elm_lang$core$Dict$rem = F3(
		function (color, left, right) {
			var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
			if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p30 = color;
					switch (_p30.ctor) {
						case 'Red':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
						case 'Black':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
						default:
							return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
					}
				} else {
					var _p33 = _p29._1._0;
					var _p32 = _p29._0._0;
					var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
					if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/LBlack/Red',
							color,
							_elm_lang$core$Basics$toString(_p32),
							_elm_lang$core$Basics$toString(_p33));
					}
				}
			} else {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p36 = _p29._1._0;
					var _p35 = _p29._0._0;
					var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
					if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/Red/LBlack',
							color,
							_elm_lang$core$Basics$toString(_p35),
							_elm_lang$core$Basics$toString(_p36));
					}
				} else {
					var _p40 = _p29._0._2;
					var _p39 = _p29._0._4;
					var _p38 = _p29._0._1;
					var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
					var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
					var k = _p37._0;
					var v = _p37._1;
					return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
				}
			}
		});
	var _elm_lang$core$Dict$map = F2(
		function (f, dict) {
			var _p41 = dict;
			if (_p41.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
			} else {
				var _p42 = _p41._1;
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_p41._0,
					_p42,
					A2(f, _p42, _p41._2),
					A2(_elm_lang$core$Dict$map, f, _p41._3),
					A2(_elm_lang$core$Dict$map, f, _p41._4));
			}
		});
	var _elm_lang$core$Dict$Same = {ctor: 'Same'};
	var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
	var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
	var _elm_lang$core$Dict$update = F3(
		function (k, alter, dict) {
			var up = function (dict) {
				var _p43 = dict;
				if (_p43.ctor === 'RBEmpty_elm_builtin') {
					var _p44 = alter(_elm_lang$core$Maybe$Nothing);
					if (_p44.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Dict$Insert,
							_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
						};
					}
				} else {
					var _p55 = _p43._2;
					var _p54 = _p43._4;
					var _p53 = _p43._3;
					var _p52 = _p43._1;
					var _p51 = _p43._0;
					var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
					switch (_p45.ctor) {
						case 'EQ':
							var _p46 = alter(
								_elm_lang$core$Maybe$Just(_p55));
							if (_p46.ctor === 'Nothing') {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
								};
							}
						case 'LT':
							var _p47 = up(_p53);
							var flag = _p47._0;
							var newLeft = _p47._1;
							var _p48 = flag;
							switch (_p48.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
									};
							}
						default:
							var _p49 = up(_p54);
							var flag = _p49._0;
							var newRight = _p49._1;
							var _p50 = flag;
							switch (_p50.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
									};
							}
					}
				}
			};
			var _p56 = up(dict);
			var flag = _p56._0;
			var updatedDict = _p56._1;
			var _p57 = flag;
			switch (_p57.ctor) {
				case 'Same':
					return updatedDict;
				case 'Insert':
					return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
				default:
					return _elm_lang$core$Dict$blacken(updatedDict);
			}
		});
	var _elm_lang$core$Dict$insert = F3(
		function (key, value, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(
					_elm_lang$core$Maybe$Just(value)),
				dict);
		});
	var _elm_lang$core$Dict$singleton = F2(
		function (key, value) {
			return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
		});
	var _elm_lang$core$Dict$union = F2(
		function (t1, t2) {
			return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
		});
	var _elm_lang$core$Dict$filter = F2(
		function (predicate, dictionary) {
			var add = F3(
				function (key, value, dict) {
					return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
				});
			return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
		});
	var _elm_lang$core$Dict$intersect = F2(
		function (t1, t2) {
			return A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p58) {
						return A2(_elm_lang$core$Dict$member, k, t2);
					}),
				t1);
		});
	var _elm_lang$core$Dict$partition = F2(
		function (predicate, dict) {
			var add = F3(
				function (key, value, _p59) {
					var _p60 = _p59;
					var _p62 = _p60._1;
					var _p61 = _p60._0;
					return A2(predicate, key, value) ? {
						ctor: '_Tuple2',
						_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
						_1: _p62
					} : {
						ctor: '_Tuple2',
						_0: _p61,
						_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
					};
				});
			return A3(
				_elm_lang$core$Dict$foldl,
				add,
				{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
				dict);
		});
	var _elm_lang$core$Dict$fromList = function (assocs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p63, dict) {
					var _p64 = _p63;
					return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
				}),
			_elm_lang$core$Dict$empty,
			assocs);
	};
	var _elm_lang$core$Dict$remove = F2(
		function (key, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
				dict);
		});
	var _elm_lang$core$Dict$diff = F2(
		function (t1, t2) {
			return A3(
				_elm_lang$core$Dict$foldl,
				F3(
					function (k, v, t) {
						return A2(_elm_lang$core$Dict$remove, k, t);
					}),
				t1,
				t2);
		});

	//import Maybe, Native.Array, Native.List, Native.Utils, Result //

	var _elm_lang$core$Native_Json = function() {


	// CORE DECODERS

	function succeed(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'succeed',
			msg: msg
		};
	}

	function fail(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'fail',
			msg: msg
		};
	}

	function decodePrimitive(tag)
	{
		return {
			ctor: '<decoder>',
			tag: tag
		};
	}

	function decodeContainer(tag, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: tag,
			decoder: decoder
		};
	}

	function decodeNull(value)
	{
		return {
			ctor: '<decoder>',
			tag: 'null',
			value: value
		};
	}

	function decodeField(field, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'field',
			field: field,
			decoder: decoder
		};
	}

	function decodeIndex(index, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'index',
			index: index,
			decoder: decoder
		};
	}

	function decodeKeyValuePairs(decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'key-value',
			decoder: decoder
		};
	}

	function mapMany(f, decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'map-many',
			func: f,
			decoders: decoders
		};
	}

	function andThen(callback, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'andThen',
			decoder: decoder,
			callback: callback
		};
	}

	function oneOf(decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'oneOf',
			decoders: decoders
		};
	}


	// DECODING OBJECTS

	function map1(f, d1)
	{
		return mapMany(f, [d1]);
	}

	function map2(f, d1, d2)
	{
		return mapMany(f, [d1, d2]);
	}

	function map3(f, d1, d2, d3)
	{
		return mapMany(f, [d1, d2, d3]);
	}

	function map4(f, d1, d2, d3, d4)
	{
		return mapMany(f, [d1, d2, d3, d4]);
	}

	function map5(f, d1, d2, d3, d4, d5)
	{
		return mapMany(f, [d1, d2, d3, d4, d5]);
	}

	function map6(f, d1, d2, d3, d4, d5, d6)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6]);
	}

	function map7(f, d1, d2, d3, d4, d5, d6, d7)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}


	// DECODE HELPERS

	function ok(value)
	{
		return { tag: 'ok', value: value };
	}

	function badPrimitive(type, value)
	{
		return { tag: 'primitive', type: type, value: value };
	}

	function badIndex(index, nestedProblems)
	{
		return { tag: 'index', index: index, rest: nestedProblems };
	}

	function badField(field, nestedProblems)
	{
		return { tag: 'field', field: field, rest: nestedProblems };
	}

	function badIndex(index, nestedProblems)
	{
		return { tag: 'index', index: index, rest: nestedProblems };
	}

	function badOneOf(problems)
	{
		return { tag: 'oneOf', problems: problems };
	}

	function bad(msg)
	{
		return { tag: 'fail', msg: msg };
	}

	function badToString(problem)
	{
		var context = '_';
		while (problem)
		{
			switch (problem.tag)
			{
				case 'primitive':
					return 'Expecting ' + problem.type
						+ (context === '_' ? '' : ' at ' + context)
						+ ' but instead got: ' + jsToString(problem.value);

				case 'index':
					context += '[' + problem.index + ']';
					problem = problem.rest;
					break;

				case 'field':
					context += '.' + problem.field;
					problem = problem.rest;
					break;

				case 'index':
					context += '[' + problem.index + ']';
					problem = problem.rest;
					break;

				case 'oneOf':
					var problems = problem.problems;
					for (var i = 0; i < problems.length; i++)
					{
						problems[i] = badToString(problems[i]);
					}
					return 'I ran into the following problems'
						+ (context === '_' ? '' : ' at ' + context)
						+ ':\n\n' + problems.join('\n');

				case 'fail':
					return 'I ran into a `fail` decoder'
						+ (context === '_' ? '' : ' at ' + context)
						+ ': ' + problem.msg;
			}
		}
	}

	function jsToString(value)
	{
		return value === undefined
			? 'undefined'
			: JSON.stringify(value);
	}


	// DECODE

	function runOnString(decoder, string)
	{
		var json;
		try
		{
			json = JSON.parse(string);
		}
		catch (e)
		{
			return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
		}
		return run(decoder, json);
	}

	function run(decoder, value)
	{
		var result = runHelp(decoder, value);
		return (result.tag === 'ok')
			? _elm_lang$core$Result$Ok(result.value)
			: _elm_lang$core$Result$Err(badToString(result));
	}

	function runHelp(decoder, value)
	{
		switch (decoder.tag)
		{
			case 'bool':
				return (typeof value === 'boolean')
					? ok(value)
					: badPrimitive('a Bool', value);

			case 'int':
				if (typeof value !== 'number') {
					return badPrimitive('an Int', value);
				}

				if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
					return ok(value);
				}

				if (isFinite(value) && !(value % 1)) {
					return ok(value);
				}

				return badPrimitive('an Int', value);

			case 'float':
				return (typeof value === 'number')
					? ok(value)
					: badPrimitive('a Float', value);

			case 'string':
				return (typeof value === 'string')
					? ok(value)
					: (value instanceof String)
						? ok(value + '')
						: badPrimitive('a String', value);

			case 'null':
				return (value === null)
					? ok(decoder.value)
					: badPrimitive('null', value);

			case 'value':
				return ok(value);

			case 'list':
				if (!(value instanceof Array))
				{
					return badPrimitive('a List', value);
				}

				var list = _elm_lang$core$Native_List.Nil;
				for (var i = value.length; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result)
					}
					list = _elm_lang$core$Native_List.Cons(result.value, list);
				}
				return ok(list);

			case 'array':
				if (!(value instanceof Array))
				{
					return badPrimitive('an Array', value);
				}

				var len = value.length;
				var array = new Array(len);
				for (var i = len; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result);
					}
					array[i] = result.value;
				}
				return ok(_elm_lang$core$Native_Array.fromJSArray(array));

			case 'maybe':
				var result = runHelp(decoder.decoder, value);
				return (result.tag === 'ok')
					? ok(_elm_lang$core$Maybe$Just(result.value))
					: ok(_elm_lang$core$Maybe$Nothing);

			case 'field':
				var field = decoder.field;
				if (typeof value !== 'object' || value === null || !(field in value))
				{
					return badPrimitive('an object with a field named `' + field + '`', value);
				}

				var result = runHelp(decoder.decoder, value[field]);
				return (result.tag === 'ok') ? result : badField(field, result);

			case 'index':
				var index = decoder.index;
				if (!(value instanceof Array))
				{
					return badPrimitive('an array', value);
				}
				if (index >= value.length)
				{
					return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
				}

				var result = runHelp(decoder.decoder, value[index]);
				return (result.tag === 'ok') ? result : badIndex(index, result);

			case 'key-value':
				if (typeof value !== 'object' || value === null || value instanceof Array)
				{
					return badPrimitive('an object', value);
				}

				var keyValuePairs = _elm_lang$core$Native_List.Nil;
				for (var key in value)
				{
					var result = runHelp(decoder.decoder, value[key]);
					if (result.tag !== 'ok')
					{
						return badField(key, result);
					}
					var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
					keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
				}
				return ok(keyValuePairs);

			case 'map-many':
				var answer = decoder.func;
				var decoders = decoder.decoders;
				for (var i = 0; i < decoders.length; i++)
				{
					var result = runHelp(decoders[i], value);
					if (result.tag !== 'ok')
					{
						return result;
					}
					answer = answer(result.value);
				}
				return ok(answer);

			case 'andThen':
				var result = runHelp(decoder.decoder, value);
				return (result.tag !== 'ok')
					? result
					: runHelp(decoder.callback(result.value), value);

			case 'oneOf':
				var errors = [];
				var temp = decoder.decoders;
				while (temp.ctor !== '[]')
				{
					var result = runHelp(temp._0, value);

					if (result.tag === 'ok')
					{
						return result;
					}

					errors.push(result);

					temp = temp._1;
				}
				return badOneOf(errors);

			case 'fail':
				return bad(decoder.msg);

			case 'succeed':
				return ok(decoder.msg);
		}
	}


	// EQUALITY

	function equality(a, b)
	{
		if (a === b)
		{
			return true;
		}

		if (a.tag !== b.tag)
		{
			return false;
		}

		switch (a.tag)
		{
			case 'succeed':
			case 'fail':
				return a.msg === b.msg;

			case 'bool':
			case 'int':
			case 'float':
			case 'string':
			case 'value':
				return true;

			case 'null':
				return a.value === b.value;

			case 'list':
			case 'array':
			case 'maybe':
			case 'key-value':
				return equality(a.decoder, b.decoder);

			case 'field':
				return a.field === b.field && equality(a.decoder, b.decoder);

			case 'index':
				return a.index === b.index && equality(a.decoder, b.decoder);

			case 'map-many':
				if (a.func !== b.func)
				{
					return false;
				}
				return listEquality(a.decoders, b.decoders);

			case 'andThen':
				return a.callback === b.callback && equality(a.decoder, b.decoder);

			case 'oneOf':
				return listEquality(a.decoders, b.decoders);
		}
	}

	function listEquality(aDecoders, bDecoders)
	{
		var len = aDecoders.length;
		if (len !== bDecoders.length)
		{
			return false;
		}
		for (var i = 0; i < len; i++)
		{
			if (!equality(aDecoders[i], bDecoders[i]))
			{
				return false;
			}
		}
		return true;
	}


	// ENCODE

	function encode(indentLevel, value)
	{
		return JSON.stringify(value, null, indentLevel);
	}

	function identity(value)
	{
		return value;
	}

	function encodeObject(keyValuePairs)
	{
		var obj = {};
		while (keyValuePairs.ctor !== '[]')
		{
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}
		return obj;
	}

	return {
		encode: F2(encode),
		runOnString: F2(runOnString),
		run: F2(run),

		decodeNull: decodeNull,
		decodePrimitive: decodePrimitive,
		decodeContainer: F2(decodeContainer),

		decodeField: F2(decodeField),
		decodeIndex: F2(decodeIndex),

		map1: F2(map1),
		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		map6: F7(map6),
		map7: F8(map7),
		map8: F9(map8),
		decodeKeyValuePairs: decodeKeyValuePairs,

		andThen: F2(andThen),
		fail: fail,
		succeed: succeed,
		oneOf: oneOf,

		identity: identity,
		encodeNull: null,
		encodeArray: _elm_lang$core$Native_Array.toJSArray,
		encodeList: _elm_lang$core$Native_List.toArray,
		encodeObject: encodeObject,

		equality: equality
	};

	}();

	var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
	var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
	var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
	var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
	var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
	var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

	var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
	var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
	var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
	var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
	var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
	var _elm_lang$core$Json_Decode$lazy = function (thunk) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			thunk,
			_elm_lang$core$Json_Decode$succeed(
				{ctor: '_Tuple0'}));
	};
	var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
	var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
	var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
	var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
	var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
	var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
	var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
	var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
	var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
	var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
	var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
	var _elm_lang$core$Json_Decode$maybe = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
	};
	var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
	var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
	var _elm_lang$core$Json_Decode$at = F2(
		function (fields, decoder) {
			return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
		});
	var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
	var _elm_lang$core$Json_Decode$dict = function (decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Dict$fromList,
			_elm_lang$core$Json_Decode$keyValuePairs(decoder));
	};
	var _elm_lang$core$Json_Decode$array = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
	};
	var _elm_lang$core$Json_Decode$list = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
	};
	var _elm_lang$core$Json_Decode$nullable = function (decoder) {
		return _elm_lang$core$Json_Decode$oneOf(
			{
				ctor: '::',
				_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
					_1: {ctor: '[]'}
				}
			});
	};
	var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
	var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
	var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
	var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
	var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

	var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
	var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

	var _elm_lang$core$Tuple$mapSecond = F2(
		function (func, _p0) {
			var _p1 = _p0;
			return {
				ctor: '_Tuple2',
				_0: _p1._0,
				_1: func(_p1._1)
			};
		});
	var _elm_lang$core$Tuple$mapFirst = F2(
		function (func, _p2) {
			var _p3 = _p2;
			return {
				ctor: '_Tuple2',
				_0: func(_p3._0),
				_1: _p3._1
			};
		});
	var _elm_lang$core$Tuple$second = function (_p4) {
		var _p5 = _p4;
		return _p5._1;
	};
	var _elm_lang$core$Tuple$first = function (_p6) {
		var _p7 = _p6;
		return _p7._0;
	};

	//import //

	var _elm_lang$core$Native_Platform = function() {


	// PROGRAMS

	function program(impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName)
			{
				object['worker'] = function worker(flags)
				{
					if (typeof flags !== 'undefined')
					{
						throw new Error(
							'The `' + moduleName + '` module does not need flags.\n'
							+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
						);
					}

					return initialize(
						impl.init,
						impl.update,
						impl.subscriptions,
						renderer
					);
				};
			};
		};
	}

	function programWithFlags(impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName)
			{
				object['worker'] = function worker(flags)
				{
					if (typeof flagDecoder === 'undefined')
					{
						throw new Error(
							'Are you trying to sneak a Never value into Elm? Trickster!\n'
							+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
							+ 'Use `program` instead if you do not want flags.'
						);
					}

					var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
					if (result.ctor === 'Err')
					{
						throw new Error(
							moduleName + '.worker(...) was called with an unexpected argument.\n'
							+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
							+ result._0
						);
					}

					return initialize(
						impl.init(result._0),
						impl.update,
						impl.subscriptions,
						renderer
					);
				};
			};
		};
	}

	function renderer(enqueue, _)
	{
		return function(_) {};
	}


	// HTML TO PROGRAM

	function htmlToProgram(vnode)
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$program({
			init: noChange,
			view: function(model) { return main; },
			update: F2(function(msg, model) { return noChange; }),
			subscriptions: function (model) { return emptyBag; }
		});
	}


	// INITIALIZE A PROGRAM

	function initialize(init, update, subscriptions, renderer)
	{
		// ambient state
		var managers = {};
		var updateView;

		// init and update state in main process
		var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var model = init._0;
			updateView = renderer(enqueue, model);
			var cmds = init._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});

		function onMessage(msg, model)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
				var results = A2(update, msg, model);
				model = results._0;
				updateView(model);
				var cmds = results._1;
				var subs = subscriptions(model);
				dispatchEffects(managers, cmds, subs);
				callback(_elm_lang$core$Native_Scheduler.succeed(model));
			});
		}

		var mainProcess = spawnLoop(initApp, onMessage);

		function enqueue(msg)
		{
			_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
		}

		var ports = setupEffects(managers, enqueue);

		return ports ? { ports: ports } : {};
	}


	// EFFECT MANAGERS

	var effectManagers = {};

	function setupEffects(managers, callback)
	{
		var ports;

		// setup all necessary effect managers
		for (var key in effectManagers)
		{
			var manager = effectManagers[key];

			if (manager.isForeign)
			{
				ports = ports || {};
				ports[key] = manager.tag === 'cmd'
					? setupOutgoingPort(key)
					: setupIncomingPort(key, callback);
			}

			managers[key] = makeManager(manager, callback);
		}

		return ports;
	}

	function makeManager(info, callback)
	{
		var router = {
			main: callback,
			self: undefined
		};

		var tag = info.tag;
		var onEffects = info.onEffects;
		var onSelfMsg = info.onSelfMsg;

		function onMessage(msg, state)
		{
			if (msg.ctor === 'self')
			{
				return A3(onSelfMsg, router, msg._0, state);
			}

			var fx = msg._0;
			switch (tag)
			{
				case 'cmd':
					return A3(onEffects, router, fx.cmds, state);

				case 'sub':
					return A3(onEffects, router, fx.subs, state);

				case 'fx':
					return A4(onEffects, router, fx.cmds, fx.subs, state);
			}
		}

		var process = spawnLoop(info.init, onMessage);
		router.self = process;
		return process;
	}

	function sendToApp(router, msg)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			router.main(msg);
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function sendToSelf(router, msg)
	{
		return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
			ctor: 'self',
			_0: msg
		});
	}


	// HELPER for STATEFUL LOOPS

	function spawnLoop(init, onMessage)
	{
		var andThen = _elm_lang$core$Native_Scheduler.andThen;

		function loop(state)
		{
			var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
				return onMessage(msg, state);
			});
			return A2(andThen, loop, handleMsg);
		}

		var task = A2(andThen, loop, init);

		return _elm_lang$core$Native_Scheduler.rawSpawn(task);
	}


	// BAGS

	function leaf(home)
	{
		return function(value)
		{
			return {
				type: 'leaf',
				home: home,
				value: value
			};
		};
	}

	function batch(list)
	{
		return {
			type: 'node',
			branches: list
		};
	}

	function map(tagger, bag)
	{
		return {
			type: 'map',
			tagger: tagger,
			tree: bag
		}
	}


	// PIPE BAGS INTO EFFECT MANAGERS

	function dispatchEffects(managers, cmdBag, subBag)
	{
		var effectsDict = {};
		gatherEffects(true, cmdBag, effectsDict, null);
		gatherEffects(false, subBag, effectsDict, null);

		for (var home in managers)
		{
			var fx = home in effectsDict
				? effectsDict[home]
				: {
					cmds: _elm_lang$core$Native_List.Nil,
					subs: _elm_lang$core$Native_List.Nil
				};

			_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
		}
	}

	function gatherEffects(isCmd, bag, effectsDict, taggers)
	{
		switch (bag.type)
		{
			case 'leaf':
				var home = bag.home;
				var effect = toEffect(isCmd, home, taggers, bag.value);
				effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
				return;

			case 'node':
				var list = bag.branches;
				while (list.ctor !== '[]')
				{
					gatherEffects(isCmd, list._0, effectsDict, taggers);
					list = list._1;
				}
				return;

			case 'map':
				gatherEffects(isCmd, bag.tree, effectsDict, {
					tagger: bag.tagger,
					rest: taggers
				});
				return;
		}
	}

	function toEffect(isCmd, home, taggers, value)
	{
		function applyTaggers(x)
		{
			var temp = taggers;
			while (temp)
			{
				x = temp.tagger(x);
				temp = temp.rest;
			}
			return x;
		}

		var map = isCmd
			? effectManagers[home].cmdMap
			: effectManagers[home].subMap;

		return A2(map, applyTaggers, value)
	}

	function insert(isCmd, newEffect, effects)
	{
		effects = effects || {
			cmds: _elm_lang$core$Native_List.Nil,
			subs: _elm_lang$core$Native_List.Nil
		};
		if (isCmd)
		{
			effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
			return effects;
		}
		effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
		return effects;
	}


	// PORTS

	function checkPortName(name)
	{
		if (name in effectManagers)
		{
			throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
		}
	}


	// OUTGOING PORTS

	function outgoingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'cmd',
			cmdMap: outgoingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}

	var outgoingPortMap = F2(function cmdMap(tagger, value) {
		return value;
	});

	function setupOutgoingPort(name)
	{
		var subs = [];
		var converter = effectManagers[name].converter;

		// CREATE MANAGER

		var init = _elm_lang$core$Native_Scheduler.succeed(null);

		function onEffects(router, cmdList, state)
		{
			while (cmdList.ctor !== '[]')
			{
				// grab a separate reference to subs in case unsubscribe is called
				var currentSubs = subs;
				var value = converter(cmdList._0);
				for (var i = 0; i < currentSubs.length; i++)
				{
					currentSubs[i](value);
				}
				cmdList = cmdList._1;
			}
			return init;
		}

		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);

		// PUBLIC API

		function subscribe(callback)
		{
			subs.push(callback);
		}

		function unsubscribe(callback)
		{
			// copy subs into a new array in case unsubscribe is called within a
			// subscribed callback
			subs = subs.slice();
			var index = subs.indexOf(callback);
			if (index >= 0)
			{
				subs.splice(index, 1);
			}
		}

		return {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};
	}


	// INCOMING PORTS

	function incomingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'sub',
			subMap: incomingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}

	var incomingPortMap = F2(function subMap(tagger, finalTagger)
	{
		return function(value)
		{
			return tagger(finalTagger(value));
		};
	});

	function setupIncomingPort(name, callback)
	{
		var sentBeforeInit = [];
		var subs = _elm_lang$core$Native_List.Nil;
		var converter = effectManagers[name].converter;
		var currentOnEffects = preInitOnEffects;
		var currentSend = preInitSend;

		// CREATE MANAGER

		var init = _elm_lang$core$Native_Scheduler.succeed(null);

		function preInitOnEffects(router, subList, state)
		{
			var postInitResult = postInitOnEffects(router, subList, state);

			for(var i = 0; i < sentBeforeInit.length; i++)
			{
				postInitSend(sentBeforeInit[i]);
			}

			sentBeforeInit = null; // to release objects held in queue
			currentSend = postInitSend;
			currentOnEffects = postInitOnEffects;
			return postInitResult;
		}

		function postInitOnEffects(router, subList, state)
		{
			subs = subList;
			return init;
		}

		function onEffects(router, subList, state)
		{
			return currentOnEffects(router, subList, state);
		}

		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);

		// PUBLIC API

		function preInitSend(value)
		{
			sentBeforeInit.push(value);
		}

		function postInitSend(incomingValue)
		{
			var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
			if (result.ctor === 'Err')
			{
				throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
			}

			var value = result._0;
			var temp = subs;
			while (temp.ctor !== '[]')
			{
				callback(temp._0(value));
				temp = temp._1;
			}
		}

		function send(incomingValue)
		{
			currentSend(incomingValue);
		}

		return { send: send };
	}

	return {
		// routers
		sendToApp: F2(sendToApp),
		sendToSelf: F2(sendToSelf),

		// global setup
		effectManagers: effectManagers,
		outgoingPort: outgoingPort,
		incomingPort: incomingPort,

		htmlToProgram: htmlToProgram,
		program: program,
		programWithFlags: programWithFlags,
		initialize: initialize,

		// effect bags
		leaf: leaf,
		batch: batch,
		map: F2(map)
	};

	}();

	//import Native.Utils //

	var _elm_lang$core$Native_Scheduler = function() {

	var MAX_STEPS = 10000;


	// TASKS

	function succeed(value)
	{
		return {
			ctor: '_Task_succeed',
			value: value
		};
	}

	function fail(error)
	{
		return {
			ctor: '_Task_fail',
			value: error
		};
	}

	function nativeBinding(callback)
	{
		return {
			ctor: '_Task_nativeBinding',
			callback: callback,
			cancel: null
		};
	}

	function andThen(callback, task)
	{
		return {
			ctor: '_Task_andThen',
			callback: callback,
			task: task
		};
	}

	function onError(callback, task)
	{
		return {
			ctor: '_Task_onError',
			callback: callback,
			task: task
		};
	}

	function receive(callback)
	{
		return {
			ctor: '_Task_receive',
			callback: callback
		};
	}


	// PROCESSES

	function rawSpawn(task)
	{
		var process = {
			ctor: '_Process',
			id: _elm_lang$core$Native_Utils.guid(),
			root: task,
			stack: null,
			mailbox: []
		};

		enqueue(process);

		return process;
	}

	function spawn(task)
	{
		return nativeBinding(function(callback) {
			var process = rawSpawn(task);
			callback(succeed(process));
		});
	}

	function rawSend(process, msg)
	{
		process.mailbox.push(msg);
		enqueue(process);
	}

	function send(process, msg)
	{
		return nativeBinding(function(callback) {
			rawSend(process, msg);
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function kill(process)
	{
		return nativeBinding(function(callback) {
			var root = process.root;
			if (root.ctor === '_Task_nativeBinding' && root.cancel)
			{
				root.cancel();
			}

			process.root = null;

			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function sleep(time)
	{
		return nativeBinding(function(callback) {
			var id = setTimeout(function() {
				callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
			}, time);

			return function() { clearTimeout(id); };
		});
	}


	// STEP PROCESSES

	function step(numSteps, process)
	{
		while (numSteps < MAX_STEPS)
		{
			var ctor = process.root.ctor;

			if (ctor === '_Task_succeed')
			{
				while (process.stack && process.stack.ctor === '_Task_onError')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_fail')
			{
				while (process.stack && process.stack.ctor === '_Task_andThen')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_andThen')
			{
				process.stack = {
					ctor: '_Task_andThen',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_onError')
			{
				process.stack = {
					ctor: '_Task_onError',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_nativeBinding')
			{
				process.root.cancel = process.root.callback(function(newRoot) {
					process.root = newRoot;
					enqueue(process);
				});

				break;
			}

			if (ctor === '_Task_receive')
			{
				var mailbox = process.mailbox;
				if (mailbox.length === 0)
				{
					break;
				}

				process.root = process.root.callback(mailbox.shift());
				++numSteps;
				continue;
			}

			throw new Error(ctor);
		}

		if (numSteps < MAX_STEPS)
		{
			return numSteps + 1;
		}
		enqueue(process);

		return numSteps;
	}


	// WORK QUEUE

	var working = false;
	var workQueue = [];

	function enqueue(process)
	{
		workQueue.push(process);

		if (!working)
		{
			setTimeout(work, 0);
			working = true;
		}
	}

	function work()
	{
		var numSteps = 0;
		var process;
		while (numSteps < MAX_STEPS && (process = workQueue.shift()))
		{
			if (process.root)
			{
				numSteps = step(numSteps, process);
			}
		}
		if (!process)
		{
			working = false;
			return;
		}
		setTimeout(work, 0);
	}


	return {
		succeed: succeed,
		fail: fail,
		nativeBinding: nativeBinding,
		andThen: F2(andThen),
		onError: F2(onError),
		receive: receive,

		spawn: spawn,
		kill: kill,
		sleep: sleep,
		send: F2(send),

		rawSpawn: rawSpawn,
		rawSend: rawSend
	};

	}();
	var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
		{ctor: '[]'});
	var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
	_elm_lang$core$Platform_Cmd_ops['!'] = F2(
		function (model, commands) {
			return {
				ctor: '_Tuple2',
				_0: model,
				_1: _elm_lang$core$Platform_Cmd$batch(commands)
			};
		});
	var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

	var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
		{ctor: '[]'});
	var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

	var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
	var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
	var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
	var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
	var _elm_lang$core$Platform$Program = {ctor: 'Program'};
	var _elm_lang$core$Platform$Task = {ctor: 'Task'};
	var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
	var _elm_lang$core$Platform$Router = {ctor: 'Router'};

	var _MichaelCombs28$elm_dom$DOM$className = A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'className',
			_1: {ctor: '[]'}
		},
		_elm_lang$core$Json_Decode$string);
	var _MichaelCombs28$elm_dom$DOM$scrollTop = A2(_elm_lang$core$Json_Decode$field, 'scrollTop', _elm_lang$core$Json_Decode$float);
	var _MichaelCombs28$elm_dom$DOM$scrollLeft = A2(_elm_lang$core$Json_Decode$field, 'scrollLeft', _elm_lang$core$Json_Decode$float);
	var _MichaelCombs28$elm_dom$DOM$offsetTop = A2(_elm_lang$core$Json_Decode$field, 'offsetTop', _elm_lang$core$Json_Decode$float);
	var _MichaelCombs28$elm_dom$DOM$offsetLeft = A2(_elm_lang$core$Json_Decode$field, 'offsetLeft', _elm_lang$core$Json_Decode$float);
	var _MichaelCombs28$elm_dom$DOM$offsetHeight = A2(_elm_lang$core$Json_Decode$field, 'offsetHeight', _elm_lang$core$Json_Decode$float);
	var _MichaelCombs28$elm_dom$DOM$offsetWidth = A2(_elm_lang$core$Json_Decode$field, 'offsetWidth', _elm_lang$core$Json_Decode$float);
	var _MichaelCombs28$elm_dom$DOM$childNodes = function (decoder) {
		var loop = F2(
			function (idx, xs) {
				return A2(
					_elm_lang$core$Json_Decode$andThen,
					function (_p0) {
						return A2(
							_elm_lang$core$Maybe$withDefault,
							_elm_lang$core$Json_Decode$succeed(xs),
							A2(
								_elm_lang$core$Maybe$map,
								function (x) {
									return A2(
										loop,
										idx + 1,
										{ctor: '::', _0: x, _1: xs});
								},
								_p0));
					},
					_elm_lang$core$Json_Decode$maybe(
						A2(
							_elm_lang$core$Json_Decode$field,
							_elm_lang$core$Basics$toString(idx),
							decoder)));
			});
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$List$reverse,
			A2(
				_elm_lang$core$Json_Decode$field,
				'childNodes',
				A2(
					loop,
					0,
					{ctor: '[]'})));
	};
	var _MichaelCombs28$elm_dom$DOM$childNode = function (idx) {
		return _elm_lang$core$Json_Decode$at(
			{
				ctor: '::',
				_0: 'childNodes',
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(idx),
					_1: {ctor: '[]'}
				}
			});
	};
	var _MichaelCombs28$elm_dom$DOM$parentElement = function (decoder) {
		return A2(_elm_lang$core$Json_Decode$field, 'parentElement', decoder);
	};
	var _MichaelCombs28$elm_dom$DOM$previousSibling = function (decoder) {
		return A2(_elm_lang$core$Json_Decode$field, 'previousSibling', decoder);
	};
	var _MichaelCombs28$elm_dom$DOM$nextSibling = _elm_lang$core$Json_Decode$field('nextSibling');
	var _MichaelCombs28$elm_dom$DOM$offsetParent = F2(
		function (x, decoder) {
			return _elm_lang$core$Json_Decode$oneOf(
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$Json_Decode$field,
						'offsetParent',
						_elm_lang$core$Json_Decode$null(x)),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$core$Json_Decode$field, 'offsetParent', decoder),
						_1: {ctor: '[]'}
					}
				});
		});
	var _MichaelCombs28$elm_dom$DOM$position = F2(
		function (x, y) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (_p1) {
					var _p2 = _p1;
					var _p4 = _p2._1;
					var _p3 = _p2._0;
					return A2(
						_MichaelCombs28$elm_dom$DOM$offsetParent,
						{ctor: '_Tuple2', _0: _p3, _1: _p4},
						A2(_MichaelCombs28$elm_dom$DOM$position, _p3, _p4));
				},
				A5(
					_elm_lang$core$Json_Decode$map4,
					F4(
						function (scrollLeft, scrollTop, offsetLeft, offsetTop) {
							return {ctor: '_Tuple2', _0: (x + offsetLeft) - scrollLeft, _1: (y + offsetTop) - scrollTop};
						}),
					_MichaelCombs28$elm_dom$DOM$scrollLeft,
					_MichaelCombs28$elm_dom$DOM$scrollTop,
					_MichaelCombs28$elm_dom$DOM$offsetLeft,
					_MichaelCombs28$elm_dom$DOM$offsetTop));
		});
	var _MichaelCombs28$elm_dom$DOM$boundingClientRect = A4(
		_elm_lang$core$Json_Decode$map3,
		F3(
			function (_p5, width, height) {
				var _p6 = _p5;
				return {top: _p6._1, left: _p6._0, width: width, height: height};
			}),
		A2(_MichaelCombs28$elm_dom$DOM$position, 0, 0),
		_MichaelCombs28$elm_dom$DOM$offsetWidth,
		_MichaelCombs28$elm_dom$DOM$offsetHeight);
	var _MichaelCombs28$elm_dom$DOM$target = function (decoder) {
		return A2(_elm_lang$core$Json_Decode$field, 'target', decoder);
	};
	var _MichaelCombs28$elm_dom$DOM$Rectangle = F4(
		function (a, b, c, d) {
			return {top: a, left: b, width: c, height: d};
		});

	var _MichaelCombs28$elm_parts$Parts$map2nd = F2(
		function (f, _p0) {
			var _p1 = _p0;
			return {
				ctor: '_Tuple2',
				_0: _p1._0,
				_1: f(_p1._1)
			};
		});
	var _MichaelCombs28$elm_parts$Parts$map1st = F2(
		function (f, _p2) {
			var _p3 = _p2;
			return {
				ctor: '_Tuple2',
				_0: f(_p3._0),
				_1: _p3._1
			};
		});
	var _MichaelCombs28$elm_parts$Parts$generalize = F4(
		function (upd, f, m, c) {
			return A2(
				_MichaelCombs28$elm_parts$Parts$map2nd,
				_elm_lang$core$Platform_Cmd$map(f),
				A2(
					_MichaelCombs28$elm_parts$Parts$map1st,
					_elm_lang$core$Maybe$Just,
					A2(upd, m, c)));
		});
	var _MichaelCombs28$elm_parts$Parts$update_ = F2(
		function (_p4, c) {
			var _p5 = _p4;
			return _p5._0(c);
		});
	var _MichaelCombs28$elm_parts$Parts$update = F2(
		function (_p6, c) {
			var _p7 = _p6;
			return A2(
				_MichaelCombs28$elm_parts$Parts$map1st,
				_elm_lang$core$Maybe$withDefault(c),
				_p7._0(c));
		});
	var _MichaelCombs28$elm_parts$Parts$indexed = F3(
		function (get, set, model0) {
			return {
				ctor: '_Tuple2',
				_0: F2(
					function (idx, c) {
						return A2(
							_elm_lang$core$Maybe$withDefault,
							model0,
							A2(
								_elm_lang$core$Dict$get,
								idx,
								get(c)));
					}),
				_1: F3(
					function (idx, model, c) {
						return A2(
							set,
							A3(
								_elm_lang$core$Dict$insert,
								idx,
								model,
								get(c)),
							c);
					})
			};
		});
	var _MichaelCombs28$elm_parts$Parts$accessors = F4(
		function (get0, set0, model0, idx) {
			var _p8 = A3(_MichaelCombs28$elm_parts$Parts$indexed, get0, set0, model0);
			var get = _p8._0;
			var set = _p8._1;
			return {
				get: get(idx),
				set: set(idx),
				map: F2(
					function (f, c) {
						return A3(
							_elm_lang$core$Basics$flip,
							set(idx),
							c,
							f(
								A2(get, idx, c)));
					}),
				reset: function (c) {
					return function (m) {
						return A2(set0, m, c);
					}(
						A2(
							_elm_lang$core$Dict$remove,
							idx,
							get0(c)));
				}
			};
		});
	var _MichaelCombs28$elm_parts$Parts$embedUpdate = F6(
		function (get, set, update, f, msg, c) {
			return A2(
				_MichaelCombs28$elm_parts$Parts$map1st,
				_elm_lang$core$Maybe$map(
					A2(_elm_lang$core$Basics$flip, set, c)),
				A3(
					update,
					f,
					msg,
					get(c)));
		});
	var _MichaelCombs28$elm_parts$Parts$embedView = F2(
		function (get, view) {
			return function (_p9) {
				return view(
					get(_p9));
			};
		});
	var _MichaelCombs28$elm_parts$Parts$Accessors = F4(
		function (a, b, c, d) {
			return {get: a, set: b, map: c, reset: d};
		});
	var _MichaelCombs28$elm_parts$Parts$Msg = function (a) {
		return {ctor: 'Msg', _0: a};
	};
	var _MichaelCombs28$elm_parts$Parts$partial = F3(
		function (fwd, upd, msg) {
			return _MichaelCombs28$elm_parts$Parts$Msg(
				function (c) {
					return A3(
						upd,
						function (_p10) {
							return fwd(
								A3(_MichaelCombs28$elm_parts$Parts$partial, fwd, upd, _p10));
						},
						msg,
						c);
				});
		});
	var _MichaelCombs28$elm_parts$Parts$pack = F5(
		function (update, get0, set0, model0, fwd) {
			var _p11 = A3(_MichaelCombs28$elm_parts$Parts$indexed, get0, set0, model0);
			var get = _p11._0;
			var set = _p11._1;
			return function (idx) {
				return function (_p12) {
					return fwd(
						A3(
							_MichaelCombs28$elm_parts$Parts$partial,
							fwd,
							A3(
								_MichaelCombs28$elm_parts$Parts$embedUpdate,
								get(idx),
								set(idx),
								update),
							_p12));
				};
			};
		});
	var _MichaelCombs28$elm_parts$Parts$create = F6(
		function (view, update, get0, set0, model0, fwd) {
			var embeddedUpdate = A5(_MichaelCombs28$elm_parts$Parts$pack, update, get0, set0, model0, fwd);
			var get = _elm_lang$core$Tuple$first(
				A3(_MichaelCombs28$elm_parts$Parts$indexed, get0, set0, model0));
			return F2(
				function (idx, c) {
					return A2(
						view,
						embeddedUpdate(idx),
						A2(get, idx, c));
				});
		});
	var _MichaelCombs28$elm_parts$Parts$pack1 = F4(
		function (update, get, set, fwd) {
			return function (_p13) {
				return fwd(
					A3(
						_MichaelCombs28$elm_parts$Parts$partial,
						fwd,
						A3(_MichaelCombs28$elm_parts$Parts$embedUpdate, get, set, update),
						_p13));
			};
		});
	var _MichaelCombs28$elm_parts$Parts$create1 = F5(
		function (view, update, get, set, fwd) {
			var embeddedUpdate = function (_p14) {
				return fwd(
					A3(
						_MichaelCombs28$elm_parts$Parts$partial,
						fwd,
						A3(_MichaelCombs28$elm_parts$Parts$embedUpdate, get, set, update),
						_p14));
			};
			return A2(
				_MichaelCombs28$elm_parts$Parts$embedView,
				get,
				view(embeddedUpdate));
		});

	var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

	var _elm_lang$virtual_dom$Native_VirtualDom = function() {

	var STYLE_KEY = 'STYLE';
	var EVENT_KEY = 'EVENT';
	var ATTR_KEY = 'ATTR';
	var ATTR_NS_KEY = 'ATTR_NS';

	var localDoc = typeof document !== 'undefined' ? document : {};


	////////////  VIRTUAL DOM NODES  ////////////


	function text(string)
	{
		return {
			type: 'text',
			text: string
		};
	}


	function node(tag)
	{
		return F2(function(factList, kidList) {
			return nodeHelp(tag, factList, kidList);
		});
	}


	function nodeHelp(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;

		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;

		return {
			type: 'node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}


	function keyedNode(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;

		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid._1.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;

		return {
			type: 'keyed-node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}


	function custom(factList, model, impl)
	{
		var facts = organizeFacts(factList).facts;

		return {
			type: 'custom',
			facts: facts,
			model: model,
			impl: impl
		};
	}


	function map(tagger, node)
	{
		return {
			type: 'tagger',
			tagger: tagger,
			node: node,
			descendantsCount: 1 + (node.descendantsCount || 0)
		};
	}


	function thunk(func, args, thunk)
	{
		return {
			type: 'thunk',
			func: func,
			args: args,
			thunk: thunk,
			node: undefined
		};
	}

	function lazy(fn, a)
	{
		return thunk(fn, [a], function() {
			return fn(a);
		});
	}

	function lazy2(fn, a, b)
	{
		return thunk(fn, [a,b], function() {
			return A2(fn, a, b);
		});
	}

	function lazy3(fn, a, b, c)
	{
		return thunk(fn, [a,b,c], function() {
			return A3(fn, a, b, c);
		});
	}



	// FACTS


	function organizeFacts(factList)
	{
		var namespace, facts = {};

		while (factList.ctor !== '[]')
		{
			var entry = factList._0;
			var key = entry.key;

			if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
			{
				var subFacts = facts[key] || {};
				subFacts[entry.realKey] = entry.value;
				facts[key] = subFacts;
			}
			else if (key === STYLE_KEY)
			{
				var styles = facts[key] || {};
				var styleList = entry.value;
				while (styleList.ctor !== '[]')
				{
					var style = styleList._0;
					styles[style._0] = style._1;
					styleList = styleList._1;
				}
				facts[key] = styles;
			}
			else if (key === 'namespace')
			{
				namespace = entry.value;
			}
			else if (key === 'className')
			{
				var classes = facts[key];
				facts[key] = typeof classes === 'undefined'
					? entry.value
					: classes + ' ' + entry.value;
			}
	 		else
			{
				facts[key] = entry.value;
			}
			factList = factList._1;
		}

		return {
			facts: facts,
			namespace: namespace
		};
	}



	////////////  PROPERTIES AND ATTRIBUTES  ////////////


	function style(value)
	{
		return {
			key: STYLE_KEY,
			value: value
		};
	}


	function property(key, value)
	{
		return {
			key: key,
			value: value
		};
	}


	function attribute(key, value)
	{
		return {
			key: ATTR_KEY,
			realKey: key,
			value: value
		};
	}


	function attributeNS(namespace, key, value)
	{
		return {
			key: ATTR_NS_KEY,
			realKey: key,
			value: {
				value: value,
				namespace: namespace
			}
		};
	}


	function on(name, options, decoder)
	{
		return {
			key: EVENT_KEY,
			realKey: name,
			value: {
				options: options,
				decoder: decoder
			}
		};
	}


	function equalEvents(a, b)
	{
		if (!a.options === b.options)
		{
			if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
			{
				return false;
			}
		}
		return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
	}


	function mapProperty(func, property)
	{
		if (property.key !== EVENT_KEY)
		{
			return property;
		}
		return on(
			property.realKey,
			property.value.options,
			A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
		);
	}


	////////////  RENDER  ////////////


	function render(vNode, eventNode)
	{
		switch (vNode.type)
		{
			case 'thunk':
				if (!vNode.node)
				{
					vNode.node = vNode.thunk();
				}
				return render(vNode.node, eventNode);

			case 'tagger':
				var subNode = vNode.node;
				var tagger = vNode.tagger;

				while (subNode.type === 'tagger')
				{
					typeof tagger !== 'object'
						? tagger = [tagger, subNode.tagger]
						: tagger.push(subNode.tagger);

					subNode = subNode.node;
				}

				var subEventRoot = { tagger: tagger, parent: eventNode };
				var domNode = render(subNode, subEventRoot);
				domNode.elm_event_node_ref = subEventRoot;
				return domNode;

			case 'text':
				return localDoc.createTextNode(vNode.text);

			case 'node':
				var domNode = vNode.namespace
					? localDoc.createElementNS(vNode.namespace, vNode.tag)
					: localDoc.createElement(vNode.tag);

				applyFacts(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i], eventNode));
				}

				return domNode;

			case 'keyed-node':
				var domNode = vNode.namespace
					? localDoc.createElementNS(vNode.namespace, vNode.tag)
					: localDoc.createElement(vNode.tag);

				applyFacts(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i]._1, eventNode));
				}

				return domNode;

			case 'custom':
				var domNode = vNode.impl.render(vNode.model);
				applyFacts(domNode, eventNode, vNode.facts);
				return domNode;
		}
	}



	////////////  APPLY FACTS  ////////////


	function applyFacts(domNode, eventNode, facts)
	{
		for (var key in facts)
		{
			var value = facts[key];

			switch (key)
			{
				case STYLE_KEY:
					applyStyles(domNode, value);
					break;

				case EVENT_KEY:
					applyEvents(domNode, eventNode, value);
					break;

				case ATTR_KEY:
					applyAttrs(domNode, value);
					break;

				case ATTR_NS_KEY:
					applyAttrsNS(domNode, value);
					break;

				case 'value':
					if (domNode[key] !== value)
					{
						domNode[key] = value;
					}
					break;

				default:
					domNode[key] = value;
					break;
			}
		}
	}

	function applyStyles(domNode, styles)
	{
		var domNodeStyle = domNode.style;

		for (var key in styles)
		{
			domNodeStyle[key] = styles[key];
		}
	}

	function applyEvents(domNode, eventNode, events)
	{
		var allHandlers = domNode.elm_handlers || {};

		for (var key in events)
		{
			var handler = allHandlers[key];
			var value = events[key];

			if (typeof value === 'undefined')
			{
				domNode.removeEventListener(key, handler);
				allHandlers[key] = undefined;
			}
			else if (typeof handler === 'undefined')
			{
				var handler = makeEventHandler(eventNode, value);
				domNode.addEventListener(key, handler);
				allHandlers[key] = handler;
			}
			else
			{
				handler.info = value;
			}
		}

		domNode.elm_handlers = allHandlers;
	}

	function makeEventHandler(eventNode, info)
	{
		function eventHandler(event)
		{
			var info = eventHandler.info;

			var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

			if (value.ctor === 'Ok')
			{
				var options = info.options;
				if (options.stopPropagation)
				{
					event.stopPropagation();
				}
				if (options.preventDefault)
				{
					event.preventDefault();
				}

				var message = value._0;

				var currentEventNode = eventNode;
				while (currentEventNode)
				{
					var tagger = currentEventNode.tagger;
					if (typeof tagger === 'function')
					{
						message = tagger(message);
					}
					else
					{
						for (var i = tagger.length; i--; )
						{
							message = tagger[i](message);
						}
					}
					currentEventNode = currentEventNode.parent;
				}
			}
		};

		eventHandler.info = info;

		return eventHandler;
	}

	function applyAttrs(domNode, attrs)
	{
		for (var key in attrs)
		{
			var value = attrs[key];
			if (typeof value === 'undefined')
			{
				domNode.removeAttribute(key);
			}
			else
			{
				domNode.setAttribute(key, value);
			}
		}
	}

	function applyAttrsNS(domNode, nsAttrs)
	{
		for (var key in nsAttrs)
		{
			var pair = nsAttrs[key];
			var namespace = pair.namespace;
			var value = pair.value;

			if (typeof value === 'undefined')
			{
				domNode.removeAttributeNS(namespace, key);
			}
			else
			{
				domNode.setAttributeNS(namespace, key, value);
			}
		}
	}



	////////////  DIFF  ////////////


	function diff(a, b)
	{
		var patches = [];
		diffHelp(a, b, patches, 0);
		return patches;
	}


	function makePatch(type, index, data)
	{
		return {
			index: index,
			type: type,
			data: data,
			domNode: undefined,
			eventNode: undefined
		};
	}


	function diffHelp(a, b, patches, index)
	{
		if (a === b)
		{
			return;
		}

		var aType = a.type;
		var bType = b.type;

		// Bail if you run into different types of nodes. Implies that the
		// structure has changed significantly and it's not worth a diff.
		if (aType !== bType)
		{
			patches.push(makePatch('p-redraw', index, b));
			return;
		}

		// Now we know that both nodes are the same type.
		switch (bType)
		{
			case 'thunk':
				var aArgs = a.args;
				var bArgs = b.args;
				var i = aArgs.length;
				var same = a.func === b.func && i === bArgs.length;
				while (same && i--)
				{
					same = aArgs[i] === bArgs[i];
				}
				if (same)
				{
					b.node = a.node;
					return;
				}
				b.node = b.thunk();
				var subPatches = [];
				diffHelp(a.node, b.node, subPatches, 0);
				if (subPatches.length > 0)
				{
					patches.push(makePatch('p-thunk', index, subPatches));
				}
				return;

			case 'tagger':
				// gather nested taggers
				var aTaggers = a.tagger;
				var bTaggers = b.tagger;
				var nesting = false;

				var aSubNode = a.node;
				while (aSubNode.type === 'tagger')
				{
					nesting = true;

					typeof aTaggers !== 'object'
						? aTaggers = [aTaggers, aSubNode.tagger]
						: aTaggers.push(aSubNode.tagger);

					aSubNode = aSubNode.node;
				}

				var bSubNode = b.node;
				while (bSubNode.type === 'tagger')
				{
					nesting = true;

					typeof bTaggers !== 'object'
						? bTaggers = [bTaggers, bSubNode.tagger]
						: bTaggers.push(bSubNode.tagger);

					bSubNode = bSubNode.node;
				}

				// Just bail if different numbers of taggers. This implies the
				// structure of the virtual DOM has changed.
				if (nesting && aTaggers.length !== bTaggers.length)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				// check if taggers are "the same"
				if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
				{
					patches.push(makePatch('p-tagger', index, bTaggers));
				}

				// diff everything below the taggers
				diffHelp(aSubNode, bSubNode, patches, index + 1);
				return;

			case 'text':
				if (a.text !== b.text)
				{
					patches.push(makePatch('p-text', index, b.text));
					return;
				}

				return;

			case 'node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				diffChildren(a, b, patches, index);
				return;

			case 'keyed-node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				diffKeyedChildren(a, b, patches, index);
				return;

			case 'custom':
				if (a.impl !== b.impl)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);
				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				var patch = b.impl.diff(a,b);
				if (patch)
				{
					patches.push(makePatch('p-custom', index, patch));
					return;
				}

				return;
		}
	}


	// assumes the incoming arrays are the same length
	function pairwiseRefEqual(as, bs)
	{
		for (var i = 0; i < as.length; i++)
		{
			if (as[i] !== bs[i])
			{
				return false;
			}
		}

		return true;
	}


	// TODO Instead of creating a new diff object, it's possible to just test if
	// there *is* a diff. During the actual patch, do the diff again and make the
	// modifications directly. This way, there's no new allocations. Worth it?
	function diffFacts(a, b, category)
	{
		var diff;

		// look for changes and removals
		for (var aKey in a)
		{
			if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
			{
				var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
				if (subDiff)
				{
					diff = diff || {};
					diff[aKey] = subDiff;
				}
				continue;
			}

			// remove if not in the new facts
			if (!(aKey in b))
			{
				diff = diff || {};
				diff[aKey] =
					(typeof category === 'undefined')
						? (typeof a[aKey] === 'string' ? '' : null)
						:
					(category === STYLE_KEY)
						? ''
						:
					(category === EVENT_KEY || category === ATTR_KEY)
						? undefined
						:
					{ namespace: a[aKey].namespace, value: undefined };

				continue;
			}

			var aValue = a[aKey];
			var bValue = b[aKey];

			// reference equal, so don't worry about it
			if (aValue === bValue && aKey !== 'value'
				|| category === EVENT_KEY && equalEvents(aValue, bValue))
			{
				continue;
			}

			diff = diff || {};
			diff[aKey] = bValue;
		}

		// add new stuff
		for (var bKey in b)
		{
			if (!(bKey in a))
			{
				diff = diff || {};
				diff[bKey] = b[bKey];
			}
		}

		return diff;
	}


	function diffChildren(aParent, bParent, patches, rootIndex)
	{
		var aChildren = aParent.children;
		var bChildren = bParent.children;

		var aLen = aChildren.length;
		var bLen = bChildren.length;

		// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

		if (aLen > bLen)
		{
			patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
		}
		else if (aLen < bLen)
		{
			patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
		}

		// PAIRWISE DIFF EVERYTHING ELSE

		var index = rootIndex;
		var minLen = aLen < bLen ? aLen : bLen;
		for (var i = 0; i < minLen; i++)
		{
			index++;
			var aChild = aChildren[i];
			diffHelp(aChild, bChildren[i], patches, index);
			index += aChild.descendantsCount || 0;
		}
	}



	////////////  KEYED DIFF  ////////////


	function diffKeyedChildren(aParent, bParent, patches, rootIndex)
	{
		var localPatches = [];

		var changes = {}; // Dict String Entry
		var inserts = []; // Array { index : Int, entry : Entry }
		// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length;
		var aIndex = 0;
		var bIndex = 0;

		var index = rootIndex;

		while (aIndex < aLen && bIndex < bLen)
		{
			var a = aChildren[aIndex];
			var b = bChildren[bIndex];

			var aKey = a._0;
			var bKey = b._0;
			var aNode = a._1;
			var bNode = b._1;

			// check if keys match

			if (aKey === bKey)
			{
				index++;
				diffHelp(aNode, bNode, localPatches, index);
				index += aNode.descendantsCount || 0;

				aIndex++;
				bIndex++;
				continue;
			}

			// look ahead 1 to detect insertions and removals.

			var aLookAhead = aIndex + 1 < aLen;
			var bLookAhead = bIndex + 1 < bLen;

			if (aLookAhead)
			{
				var aNext = aChildren[aIndex + 1];
				var aNextKey = aNext._0;
				var aNextNode = aNext._1;
				var oldMatch = bKey === aNextKey;
			}

			if (bLookAhead)
			{
				var bNext = bChildren[bIndex + 1];
				var bNextKey = bNext._0;
				var bNextNode = bNext._1;
				var newMatch = aKey === bNextKey;
			}


			// swap a and b
			if (aLookAhead && bLookAhead && newMatch && oldMatch)
			{
				index++;
				diffHelp(aNode, bNextNode, localPatches, index);
				insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;

				index++;
				removeNode(changes, localPatches, aKey, aNextNode, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 2;
				continue;
			}

			// insert b
			if (bLookAhead && newMatch)
			{
				index++;
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				diffHelp(aNode, bNextNode, localPatches, index);
				index += aNode.descendantsCount || 0;

				aIndex += 1;
				bIndex += 2;
				continue;
			}

			// remove a
			if (aLookAhead && oldMatch)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				index += aNode.descendantsCount || 0;

				index++;
				diffHelp(aNextNode, bNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 1;
				continue;
			}

			// remove a, insert b
			if (aLookAhead && bLookAhead && aNextKey === bNextKey)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;

				index++;
				diffHelp(aNextNode, bNextNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 2;
				continue;
			}

			break;
		}

		// eat up any remaining nodes with removeNode and insertNode

		while (aIndex < aLen)
		{
			index++;
			var a = aChildren[aIndex];
			var aNode = a._1;
			removeNode(changes, localPatches, a._0, aNode, index);
			index += aNode.descendantsCount || 0;
			aIndex++;
		}

		var endInserts;
		while (bIndex < bLen)
		{
			endInserts = endInserts || [];
			var b = bChildren[bIndex];
			insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
			bIndex++;
		}

		if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
		{
			patches.push(makePatch('p-reorder', rootIndex, {
				patches: localPatches,
				inserts: inserts,
				endInserts: endInserts
			}));
		}
	}



	////////////  CHANGES FROM KEYED DIFF  ////////////


	var POSTFIX = '_elmW6BL';


	function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
	{
		var entry = changes[key];

		// never seen this key before
		if (typeof entry === 'undefined')
		{
			entry = {
				tag: 'insert',
				vnode: vnode,
				index: bIndex,
				data: undefined
			};

			inserts.push({ index: bIndex, entry: entry });
			changes[key] = entry;

			return;
		}

		// this key was removed earlier, a match!
		if (entry.tag === 'remove')
		{
			inserts.push({ index: bIndex, entry: entry });

			entry.tag = 'move';
			var subPatches = [];
			diffHelp(entry.vnode, vnode, subPatches, entry.index);
			entry.index = bIndex;
			entry.data.data = {
				patches: subPatches,
				entry: entry
			};

			return;
		}

		// this key has already been inserted or moved, a duplicate!
		insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
	}


	function removeNode(changes, localPatches, key, vnode, index)
	{
		var entry = changes[key];

		// never seen this key before
		if (typeof entry === 'undefined')
		{
			var patch = makePatch('p-remove', index, undefined);
			localPatches.push(patch);

			changes[key] = {
				tag: 'remove',
				vnode: vnode,
				index: index,
				data: patch
			};

			return;
		}

		// this key was inserted earlier, a match!
		if (entry.tag === 'insert')
		{
			entry.tag = 'move';
			var subPatches = [];
			diffHelp(vnode, entry.vnode, subPatches, index);

			var patch = makePatch('p-remove', index, {
				patches: subPatches,
				entry: entry
			});
			localPatches.push(patch);

			return;
		}

		// this key has already been removed or moved, a duplicate!
		removeNode(changes, localPatches, key + POSTFIX, vnode, index);
	}



	////////////  ADD DOM NODES  ////////////
	//
	// Each DOM node has an "index" assigned in order of traversal. It is important
	// to minimize our crawl over the actual DOM, so these indexes (along with the
	// descendantsCount of virtual nodes) let us skip touching entire subtrees of
	// the DOM if we know there are no patches there.


	function addDomNodes(domNode, vNode, patches, eventNode)
	{
		addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
	}


	// assumes `patches` is non-empty and indexes increase monotonically.
	function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
	{
		var patch = patches[i];
		var index = patch.index;

		while (index === low)
		{
			var patchType = patch.type;

			if (patchType === 'p-thunk')
			{
				addDomNodes(domNode, vNode.node, patch.data, eventNode);
			}
			else if (patchType === 'p-reorder')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;

				var subPatches = patch.data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
			else if (patchType === 'p-remove')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;

				var data = patch.data;
				if (typeof data !== 'undefined')
				{
					data.entry.data = domNode;
					var subPatches = data.patches;
					if (subPatches.length > 0)
					{
						addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
					}
				}
			}
			else
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;
			}

			i++;

			if (!(patch = patches[i]) || (index = patch.index) > high)
			{
				return i;
			}
		}

		switch (vNode.type)
		{
			case 'tagger':
				var subNode = vNode.node;

				while (subNode.type === "tagger")
				{
					subNode = subNode.node;
				}

				return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

			case 'node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j];
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;

			case 'keyed-node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j]._1;
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;

			case 'text':
			case 'thunk':
				throw new Error('should never traverse `text` or `thunk` nodes like this');
		}
	}



	////////////  APPLY PATCHES  ////////////


	function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
	{
		if (patches.length === 0)
		{
			return rootDomNode;
		}

		addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
		return applyPatchesHelp(rootDomNode, patches);
	}

	function applyPatchesHelp(rootDomNode, patches)
	{
		for (var i = 0; i < patches.length; i++)
		{
			var patch = patches[i];
			var localDomNode = patch.domNode
			var newNode = applyPatch(localDomNode, patch);
			if (localDomNode === rootDomNode)
			{
				rootDomNode = newNode;
			}
		}
		return rootDomNode;
	}

	function applyPatch(domNode, patch)
	{
		switch (patch.type)
		{
			case 'p-redraw':
				return applyPatchRedraw(domNode, patch.data, patch.eventNode);

			case 'p-facts':
				applyFacts(domNode, patch.eventNode, patch.data);
				return domNode;

			case 'p-text':
				domNode.replaceData(0, domNode.length, patch.data);
				return domNode;

			case 'p-thunk':
				return applyPatchesHelp(domNode, patch.data);

			case 'p-tagger':
				if (typeof domNode.elm_event_node_ref !== 'undefined')
				{
					domNode.elm_event_node_ref.tagger = patch.data;
				}
				else
				{
					domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
				}
				return domNode;

			case 'p-remove-last':
				var i = patch.data;
				while (i--)
				{
					domNode.removeChild(domNode.lastChild);
				}
				return domNode;

			case 'p-append':
				var newNodes = patch.data;
				for (var i = 0; i < newNodes.length; i++)
				{
					domNode.appendChild(render(newNodes[i], patch.eventNode));
				}
				return domNode;

			case 'p-remove':
				var data = patch.data;
				if (typeof data === 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
					return domNode;
				}
				var entry = data.entry;
				if (typeof entry.index !== 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
				}
				entry.data = applyPatchesHelp(domNode, data.patches);
				return domNode;

			case 'p-reorder':
				return applyPatchReorder(domNode, patch);

			case 'p-custom':
				var impl = patch.data;
				return impl.applyPatch(domNode, impl.data);

			default:
				throw new Error('Ran into an unknown patch!');
		}
	}


	function applyPatchRedraw(domNode, vNode, eventNode)
	{
		var parentNode = domNode.parentNode;
		var newNode = render(vNode, eventNode);

		if (typeof newNode.elm_event_node_ref === 'undefined')
		{
			newNode.elm_event_node_ref = domNode.elm_event_node_ref;
		}

		if (parentNode && newNode !== domNode)
		{
			parentNode.replaceChild(newNode, domNode);
		}
		return newNode;
	}


	function applyPatchReorder(domNode, patch)
	{
		var data = patch.data;

		// remove end inserts
		var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

		// removals
		domNode = applyPatchesHelp(domNode, data.patches);

		// inserts
		var inserts = data.inserts;
		for (var i = 0; i < inserts.length; i++)
		{
			var insert = inserts[i];
			var entry = insert.entry;
			var node = entry.tag === 'move'
				? entry.data
				: render(entry.vnode, patch.eventNode);
			domNode.insertBefore(node, domNode.childNodes[insert.index]);
		}

		// add end inserts
		if (typeof frag !== 'undefined')
		{
			domNode.appendChild(frag);
		}

		return domNode;
	}


	function applyPatchReorderEndInsertsHelp(endInserts, patch)
	{
		if (typeof endInserts === 'undefined')
		{
			return;
		}

		var frag = localDoc.createDocumentFragment();
		for (var i = 0; i < endInserts.length; i++)
		{
			var insert = endInserts[i];
			var entry = insert.entry;
			frag.appendChild(entry.tag === 'move'
				? entry.data
				: render(entry.vnode, patch.eventNode)
			);
		}
		return frag;
	}


	// PROGRAMS

	var program = makeProgram(checkNoFlags);
	var programWithFlags = makeProgram(checkYesFlags);

	function makeProgram(flagChecker)
	{
		return F2(function(debugWrap, impl)
		{
			return function(flagDecoder)
			{
				return function(object, moduleName, debugMetadata)
				{
					var checker = flagChecker(flagDecoder, moduleName);
					if (typeof debugMetadata === 'undefined')
					{
						normalSetup(impl, object, moduleName, checker);
					}
					else
					{
						debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
					}
				};
			};
		});
	}

	function staticProgram(vNode)
	{
		var nothing = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			_elm_lang$core$Platform_Cmd$none
		);
		return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
			init: nothing,
			view: function() { return vNode; },
			update: F2(function() { return nothing; }),
			subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
		})();
	}


	// FLAG CHECKERS

	function checkNoFlags(flagDecoder, moduleName)
	{
		return function(init, flags, domNode)
		{
			if (typeof flags === 'undefined')
			{
				return init;
			}

			var errorMessage =
				'The `' + moduleName + '` module does not need flags.\n'
				+ 'Initialize it with no arguments and you should be all set!';

			crash(errorMessage, domNode);
		};
	}

	function checkYesFlags(flagDecoder, moduleName)
	{
		return function(init, flags, domNode)
		{
			if (typeof flagDecoder === 'undefined')
			{
				var errorMessage =
					'Are you trying to sneak a Never value into Elm? Trickster!\n'
					+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
					+ 'Use `program` instead if you do not want flags.'

				crash(errorMessage, domNode);
			}

			var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
			if (result.ctor === 'Ok')
			{
				return init(result._0);
			}

			var errorMessage =
				'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
				+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
				+ result._0;

			crash(errorMessage, domNode);
		};
	}

	function crash(errorMessage, domNode)
	{
		if (domNode)
		{
			domNode.innerHTML =
				'<div style="padding-left:1em;">'
				+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
				+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
				+ '</div>';
		}

		throw new Error(errorMessage);
	}


	//  NORMAL SETUP

	function normalSetup(impl, object, moduleName, flagChecker)
	{
		object['embed'] = function embed(node, flags)
		{
			while (node.lastChild)
			{
				node.removeChild(node.lastChild);
			}

			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, node),
				impl.update,
				impl.subscriptions,
				normalRenderer(node, impl.view)
			);
		};

		object['fullscreen'] = function fullscreen(flags)
		{
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, document.body),
				impl.update,
				impl.subscriptions,
				normalRenderer(document.body, impl.view)
			);
		};
	}

	function normalRenderer(parentNode, view)
	{
		return function(tagger, initialModel)
		{
			var eventNode = { tagger: tagger, parent: undefined };
			var initialVirtualNode = view(initialModel);
			var domNode = render(initialVirtualNode, eventNode);
			parentNode.appendChild(domNode);
			return makeStepper(domNode, view, initialVirtualNode, eventNode);
		};
	}


	// STEPPER

	var rAF =
		typeof requestAnimationFrame !== 'undefined'
			? requestAnimationFrame
			: function(callback) { callback(); };

	function makeStepper(domNode, view, initialVirtualNode, eventNode)
	{
		var state = 'NO_REQUEST';
		var currNode = initialVirtualNode;
		var nextModel;

		function updateIfNeeded()
		{
			switch (state)
			{
				case 'NO_REQUEST':
					throw new Error(
						'Unexpected draw callback.\n' +
						'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
					);

				case 'PENDING_REQUEST':
					rAF(updateIfNeeded);
					state = 'EXTRA_REQUEST';

					var nextNode = view(nextModel);
					var patches = diff(currNode, nextNode);
					domNode = applyPatches(domNode, currNode, patches, eventNode);
					currNode = nextNode;

					return;

				case 'EXTRA_REQUEST':
					state = 'NO_REQUEST';
					return;
			}
		}

		return function stepper(model)
		{
			if (state === 'NO_REQUEST')
			{
				rAF(updateIfNeeded);
			}
			state = 'PENDING_REQUEST';
			nextModel = model;
		};
	}


	// DEBUG SETUP

	function debugSetup(impl, object, moduleName, flagChecker)
	{
		object['fullscreen'] = function fullscreen(flags)
		{
			var popoutRef = { doc: undefined };
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, document.body),
				impl.update(scrollTask(popoutRef)),
				impl.subscriptions,
				debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
			);
		};

		object['embed'] = function fullscreen(node, flags)
		{
			var popoutRef = { doc: undefined };
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, node),
				impl.update(scrollTask(popoutRef)),
				impl.subscriptions,
				debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
			);
		};
	}

	function scrollTask(popoutRef)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var doc = popoutRef.doc;
			if (doc)
			{
				var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
				if (msgs)
				{
					msgs.scrollTop = msgs.scrollHeight;
				}
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}


	function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
	{
		return function(tagger, initialModel)
		{
			var appEventNode = { tagger: tagger, parent: undefined };
			var eventNode = { tagger: tagger, parent: undefined };

			// make normal stepper
			var appVirtualNode = view(initialModel);
			var appNode = render(appVirtualNode, appEventNode);
			parentNode.appendChild(appNode);
			var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

			// make overlay stepper
			var overVirtualNode = viewIn(initialModel)._1;
			var overNode = render(overVirtualNode, eventNode);
			parentNode.appendChild(overNode);
			var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
			var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

			// make debugger stepper
			var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

			return function stepper(model)
			{
				appStepper(model);
				overStepper(model);
				debugStepper(model);
			}
		};
	}

	function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
	{
		var curr;
		var domNode;

		return function stepper(model)
		{
			if (!model.isDebuggerOpen)
			{
				return;
			}

			if (!popoutRef.doc)
			{
				curr = view(model);
				domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
				return;
			}

			// switch to document of popout
			localDoc = popoutRef.doc;

			var next = view(model);
			var patches = diff(curr, next);
			domNode = applyPatches(domNode, curr, patches, eventNode);
			curr = next;

			// switch back to normal document
			localDoc = document;
		};
	}

	function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
	{
		var w = 900;
		var h = 360;
		var x = screen.width - w;
		var y = screen.height - h;
		var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

		// switch to window document
		localDoc = debugWindow.document;

		popoutRef.doc = localDoc;
		localDoc.title = 'Debugger - ' + moduleName;
		localDoc.body.style.margin = '0';
		localDoc.body.style.padding = '0';
		var domNode = render(virtualNode, eventNode);
		localDoc.body.appendChild(domNode);

		localDoc.addEventListener('keydown', function(event) {
			if (event.metaKey && event.which === 82)
			{
				window.location.reload();
			}
			if (event.which === 38)
			{
				eventNode.tagger({ ctor: 'Up' });
				event.preventDefault();
			}
			if (event.which === 40)
			{
				eventNode.tagger({ ctor: 'Down' });
				event.preventDefault();
			}
		});

		function close()
		{
			popoutRef.doc = undefined;
			debugWindow.close();
		}
		window.addEventListener('unload', close);
		debugWindow.addEventListener('unload', function() {
			popoutRef.doc = undefined;
			window.removeEventListener('unload', close);
			eventNode.tagger({ ctor: 'Close' });
		});

		// switch back to the normal document
		localDoc = document;

		return domNode;
	}


	// BLOCK EVENTS

	function wrapViewIn(appEventNode, overlayNode, viewIn)
	{
		var ignorer = makeIgnorer(overlayNode);
		var blocking = 'Normal';
		var overflow;

		var normalTagger = appEventNode.tagger;
		var blockTagger = function() {};

		return function(model)
		{
			var tuple = viewIn(model);
			var newBlocking = tuple._0.ctor;
			appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
			if (blocking !== newBlocking)
			{
				traverse('removeEventListener', ignorer, blocking);
				traverse('addEventListener', ignorer, newBlocking);

				if (blocking === 'Normal')
				{
					overflow = document.body.style.overflow;
					document.body.style.overflow = 'hidden';
				}

				if (newBlocking === 'Normal')
				{
					document.body.style.overflow = overflow;
				}

				blocking = newBlocking;
			}
			return tuple._1;
		}
	}

	function traverse(verbEventListener, ignorer, blocking)
	{
		switch(blocking)
		{
			case 'Normal':
				return;

			case 'Pause':
				return traverseHelp(verbEventListener, ignorer, mostEvents);

			case 'Message':
				return traverseHelp(verbEventListener, ignorer, allEvents);
		}
	}

	function traverseHelp(verbEventListener, handler, eventNames)
	{
		for (var i = 0; i < eventNames.length; i++)
		{
			document.body[verbEventListener](eventNames[i], handler, true);
		}
	}

	function makeIgnorer(overlayNode)
	{
		return function(event)
		{
			if (event.type === 'keydown' && event.metaKey && event.which === 82)
			{
				return;
			}

			var isScroll = event.type === 'scroll' || event.type === 'wheel';

			var node = event.target;
			while (node !== null)
			{
				if (node.className === 'elm-overlay-message-details' && isScroll)
				{
					return;
				}

				if (node === overlayNode && !isScroll)
				{
					return;
				}
				node = node.parentNode;
			}

			event.stopPropagation();
			event.preventDefault();
		}
	}

	var mostEvents = [
		'click', 'dblclick', 'mousemove',
		'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
		'touchstart', 'touchend', 'touchcancel', 'touchmove',
		'pointerdown', 'pointerup', 'pointerover', 'pointerout',
		'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
		'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
		'keyup', 'keydown', 'keypress',
		'input', 'change',
		'focus', 'blur'
	];

	var allEvents = mostEvents.concat('wheel', 'scroll');


	return {
		node: node,
		text: text,
		custom: custom,
		map: F2(map),

		on: F3(on),
		style: style,
		property: F2(property),
		attribute: F2(attribute),
		attributeNS: F3(attributeNS),
		mapProperty: F2(mapProperty),

		lazy: F2(lazy),
		lazy2: F3(lazy2),
		lazy3: F4(lazy3),
		keyedNode: F3(keyedNode),

		program: program,
		programWithFlags: programWithFlags,
		staticProgram: staticProgram
	};

	}();

	var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
		return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
	};
	var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
		return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
	};
	var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
	var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
	var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
	var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
	var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
	var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
	var _elm_lang$virtual_dom$VirtualDom$on = F2(
		function (eventName, decoder) {
			return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
		});
	var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
	var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
	var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
	var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
	var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
	var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
	var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
	var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
	var _elm_lang$virtual_dom$VirtualDom$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});
	var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
	var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

	var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
	var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
	var _elm_lang$html$Html$beginnerProgram = function (_p0) {
		var _p1 = _p0;
		return _elm_lang$html$Html$program(
			{
				init: A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p1.model,
					{ctor: '[]'}),
				update: F2(
					function (msg, model) {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							A2(_p1.update, msg, model),
							{ctor: '[]'});
					}),
				view: _p1.view,
				subscriptions: function (_p2) {
					return _elm_lang$core$Platform_Sub$none;
				}
			});
	};
	var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
	var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
	var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
	var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
	var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
	var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
	var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
	var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
	var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
	var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
	var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
	var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
	var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
	var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
	var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
	var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
	var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
	var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
	var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
	var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
	var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
	var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
	var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
	var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
	var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
	var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
	var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
	var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
	var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
	var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
	var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
	var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
	var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
	var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
	var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
	var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
	var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
	var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
	var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
	var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
	var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
	var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
	var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
	var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
	var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
	var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
	var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
	var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
	var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
	var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
	var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
	var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
	var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
	var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
	var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
	var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
	var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
	var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
	var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
	var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
	var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
	var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
	var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
	var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
	var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
	var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
	var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
	var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
	var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
	var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
	var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
	var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
	var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
	var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
	var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
	var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
	var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
	var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
	var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
	var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
	var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
	var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
	var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
	var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
	var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
	var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
	var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
	var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
	var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
	var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
	var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
	var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
	var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
	var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
	var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
	var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
	var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
	var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
	var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
	var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
	var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

	var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
	var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
	var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
	};
	var _elm_lang$html$Html_Attributes$draggable = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
	};
	var _elm_lang$html$Html_Attributes$itemprop = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
	};
	var _elm_lang$html$Html_Attributes$tabindex = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'tabIndex',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$charset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
	};
	var _elm_lang$html$Html_Attributes$height = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'height',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$width = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'width',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$formaction = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
	};
	var _elm_lang$html$Html_Attributes$list = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
	};
	var _elm_lang$html$Html_Attributes$minlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'minLength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$maxlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'maxlength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$size = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'size',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$form = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
	};
	var _elm_lang$html$Html_Attributes$cols = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'cols',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rows = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rows',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$challenge = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
	};
	var _elm_lang$html$Html_Attributes$media = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
	};
	var _elm_lang$html$Html_Attributes$rel = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
	};
	var _elm_lang$html$Html_Attributes$datetime = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
	};
	var _elm_lang$html$Html_Attributes$pubdate = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
	};
	var _elm_lang$html$Html_Attributes$colspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'colspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rowspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rowspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$manifest = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
	};
	var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
	var _elm_lang$html$Html_Attributes$stringProperty = F2(
		function (name, string) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$string(string));
		});
	var _elm_lang$html$Html_Attributes$class = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
	};
	var _elm_lang$html$Html_Attributes$id = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
	};
	var _elm_lang$html$Html_Attributes$title = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
	};
	var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'accessKey',
			_elm_lang$core$String$fromChar($char));
	};
	var _elm_lang$html$Html_Attributes$dir = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
	};
	var _elm_lang$html$Html_Attributes$dropzone = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
	};
	var _elm_lang$html$Html_Attributes$lang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
	};
	var _elm_lang$html$Html_Attributes$content = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
	};
	var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
	};
	var _elm_lang$html$Html_Attributes$language = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
	};
	var _elm_lang$html$Html_Attributes$src = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
	};
	var _elm_lang$html$Html_Attributes$alt = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
	};
	var _elm_lang$html$Html_Attributes$preload = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
	};
	var _elm_lang$html$Html_Attributes$poster = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
	};
	var _elm_lang$html$Html_Attributes$kind = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
	};
	var _elm_lang$html$Html_Attributes$srclang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
	};
	var _elm_lang$html$Html_Attributes$sandbox = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
	};
	var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
	};
	var _elm_lang$html$Html_Attributes$type_ = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
	};
	var _elm_lang$html$Html_Attributes$value = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
	};
	var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
	};
	var _elm_lang$html$Html_Attributes$placeholder = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
	};
	var _elm_lang$html$Html_Attributes$accept = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
	};
	var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
	};
	var _elm_lang$html$Html_Attributes$action = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
	};
	var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'autocomplete',
			bool ? 'on' : 'off');
	};
	var _elm_lang$html$Html_Attributes$enctype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
	};
	var _elm_lang$html$Html_Attributes$method = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
	};
	var _elm_lang$html$Html_Attributes$name = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
	};
	var _elm_lang$html$Html_Attributes$pattern = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
	};
	var _elm_lang$html$Html_Attributes$for = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
	};
	var _elm_lang$html$Html_Attributes$max = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
	};
	var _elm_lang$html$Html_Attributes$min = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
	};
	var _elm_lang$html$Html_Attributes$step = function (n) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
	};
	var _elm_lang$html$Html_Attributes$wrap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
	};
	var _elm_lang$html$Html_Attributes$usemap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
	};
	var _elm_lang$html$Html_Attributes$shape = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
	};
	var _elm_lang$html$Html_Attributes$coords = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
	};
	var _elm_lang$html$Html_Attributes$keytype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
	};
	var _elm_lang$html$Html_Attributes$align = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
	};
	var _elm_lang$html$Html_Attributes$cite = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
	};
	var _elm_lang$html$Html_Attributes$href = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
	};
	var _elm_lang$html$Html_Attributes$target = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
	};
	var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
	};
	var _elm_lang$html$Html_Attributes$hreflang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
	};
	var _elm_lang$html$Html_Attributes$ping = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
	};
	var _elm_lang$html$Html_Attributes$start = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'start',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$headers = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
	};
	var _elm_lang$html$Html_Attributes$scope = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
	};
	var _elm_lang$html$Html_Attributes$boolProperty = F2(
		function (name, bool) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$bool(bool));
		});
	var _elm_lang$html$Html_Attributes$hidden = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
	};
	var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
	};
	var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
	};
	var _elm_lang$html$Html_Attributes$async = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
	};
	var _elm_lang$html$Html_Attributes$defer = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
	};
	var _elm_lang$html$Html_Attributes$scoped = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
	};
	var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
	};
	var _elm_lang$html$Html_Attributes$controls = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
	};
	var _elm_lang$html$Html_Attributes$loop = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
	};
	var _elm_lang$html$Html_Attributes$default = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
	};
	var _elm_lang$html$Html_Attributes$seamless = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
	};
	var _elm_lang$html$Html_Attributes$checked = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
	};
	var _elm_lang$html$Html_Attributes$selected = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
	};
	var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
	};
	var _elm_lang$html$Html_Attributes$disabled = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
	};
	var _elm_lang$html$Html_Attributes$multiple = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
	};
	var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
	};
	var _elm_lang$html$Html_Attributes$readonly = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
	};
	var _elm_lang$html$Html_Attributes$required = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
	};
	var _elm_lang$html$Html_Attributes$ismap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
	};
	var _elm_lang$html$Html_Attributes$download = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
	};
	var _elm_lang$html$Html_Attributes$reversed = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
	};
	var _elm_lang$html$Html_Attributes$classList = function (list) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Tuple$first,
					A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
	};
	var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

	//import Native.Scheduler //

	var _elm_lang$core$Native_Time = function() {

	var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
	});

	function setInterval_(interval, task)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var id = setInterval(function() {
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			}, interval);

			return function() { clearInterval(id); };
		});
	}

	return {
		now: now,
		setInterval_: F2(setInterval_)
	};

	}();
	var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
	var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
	var _elm_lang$core$Task$spawnCmd = F2(
		function (router, _p0) {
			var _p1 = _p0;
			return _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Platform$sendToApp(router),
					_p1._0));
		});
	var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
	var _elm_lang$core$Task$mapError = F2(
		function (convert, task) {
			return A2(
				_elm_lang$core$Task$onError,
				function (_p2) {
					return _elm_lang$core$Task$fail(
						convert(_p2));
				},
				task);
		});
	var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Task$map = F2(
		function (func, taskA) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return _elm_lang$core$Task$succeed(
						func(a));
				},
				taskA);
		});
	var _elm_lang$core$Task$map2 = F3(
		function (func, taskA, taskB) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return _elm_lang$core$Task$succeed(
								A2(func, a, b));
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map3 = F4(
		function (func, taskA, taskB, taskC) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return _elm_lang$core$Task$succeed(
										A3(func, a, b, c));
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map4 = F5(
		function (func, taskA, taskB, taskC, taskD) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										function (d) {
											return _elm_lang$core$Task$succeed(
												A4(func, a, b, c, d));
										},
										taskD);
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map5 = F6(
		function (func, taskA, taskB, taskC, taskD, taskE) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										function (d) {
											return A2(
												_elm_lang$core$Task$andThen,
												function (e) {
													return _elm_lang$core$Task$succeed(
														A5(func, a, b, c, d, e));
												},
												taskE);
										},
										taskD);
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$sequence = function (tasks) {
		var _p3 = tasks;
		if (_p3.ctor === '[]') {
			return _elm_lang$core$Task$succeed(
				{ctor: '[]'});
		} else {
			return A3(
				_elm_lang$core$Task$map2,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				_p3._0,
				_elm_lang$core$Task$sequence(_p3._1));
		}
	};
	var _elm_lang$core$Task$onEffects = F3(
		function (router, commands, state) {
			return A2(
				_elm_lang$core$Task$map,
				function (_p4) {
					return {ctor: '_Tuple0'};
				},
				_elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Task$spawnCmd(router),
						commands)));
		});
	var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
		{ctor: '_Tuple0'});
	var _elm_lang$core$Task$onSelfMsg = F3(
		function (_p7, _p6, _p5) {
			return _elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'});
		});
	var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
	var _elm_lang$core$Task$Perform = function (a) {
		return {ctor: 'Perform', _0: a};
	};
	var _elm_lang$core$Task$perform = F2(
		function (toMessage, task) {
			return _elm_lang$core$Task$command(
				_elm_lang$core$Task$Perform(
					A2(_elm_lang$core$Task$map, toMessage, task)));
		});
	var _elm_lang$core$Task$attempt = F2(
		function (resultToMessage, task) {
			return _elm_lang$core$Task$command(
				_elm_lang$core$Task$Perform(
					A2(
						_elm_lang$core$Task$onError,
						function (_p8) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Err(_p8)));
						},
						A2(
							_elm_lang$core$Task$andThen,
							function (_p9) {
								return _elm_lang$core$Task$succeed(
									resultToMessage(
										_elm_lang$core$Result$Ok(_p9)));
							},
							task))));
		});
	var _elm_lang$core$Task$cmdMap = F2(
		function (tagger, _p10) {
			var _p11 = _p10;
			return _elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, tagger, _p11._0));
		});
	_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

	var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
	var _elm_lang$core$Time$spawnHelp = F3(
		function (router, intervals, processes) {
			var _p0 = intervals;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Task$succeed(processes);
			} else {
				var _p1 = _p0._0;
				var spawnRest = function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				};
				var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
				return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
			}
		});
	var _elm_lang$core$Time$addMySub = F2(
		function (_p2, state) {
			var _p3 = _p2;
			var _p6 = _p3._1;
			var _p5 = _p3._0;
			var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
			if (_p4.ctor === 'Nothing') {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					{
						ctor: '::',
						_0: _p6,
						_1: {ctor: '[]'}
					},
					state);
			} else {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					{ctor: '::', _0: _p6, _1: _p4._0},
					state);
			}
		});
	var _elm_lang$core$Time$inMilliseconds = function (t) {
		return t;
	};
	var _elm_lang$core$Time$millisecond = 1;
	var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
	var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
	var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
	var _elm_lang$core$Time$inHours = function (t) {
		return t / _elm_lang$core$Time$hour;
	};
	var _elm_lang$core$Time$inMinutes = function (t) {
		return t / _elm_lang$core$Time$minute;
	};
	var _elm_lang$core$Time$inSeconds = function (t) {
		return t / _elm_lang$core$Time$second;
	};
	var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
	var _elm_lang$core$Time$onSelfMsg = F3(
		function (router, interval, state) {
			var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
			if (_p7.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				var tellTaggers = function (time) {
					return _elm_lang$core$Task$sequence(
						A2(
							_elm_lang$core$List$map,
							function (tagger) {
								return A2(
									_elm_lang$core$Platform$sendToApp,
									router,
									tagger(time));
							},
							_p7._0));
				};
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p8) {
						return _elm_lang$core$Task$succeed(state);
					},
					A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
			}
		});
	var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
	var _elm_lang$core$Time$State = F2(
		function (a, b) {
			return {taggers: a, processes: b};
		});
	var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
		A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
	var _elm_lang$core$Time$onEffects = F3(
		function (router, subs, _p9) {
			var _p10 = _p9;
			var rightStep = F3(
				function (_p12, id, _p11) {
					var _p13 = _p11;
					return {
						ctor: '_Tuple3',
						_0: _p13._0,
						_1: _p13._1,
						_2: A2(
							_elm_lang$core$Task$andThen,
							function (_p14) {
								return _p13._2;
							},
							_elm_lang$core$Native_Scheduler.kill(id))
					};
				});
			var bothStep = F4(
				function (interval, taggers, id, _p15) {
					var _p16 = _p15;
					return {
						ctor: '_Tuple3',
						_0: _p16._0,
						_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
						_2: _p16._2
					};
				});
			var leftStep = F3(
				function (interval, taggers, _p17) {
					var _p18 = _p17;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: interval, _1: _p18._0},
						_1: _p18._1,
						_2: _p18._2
					};
				});
			var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
			var _p19 = A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				newTaggers,
				_p10.processes,
				{
					ctor: '_Tuple3',
					_0: {ctor: '[]'},
					_1: _elm_lang$core$Dict$empty,
					_2: _elm_lang$core$Task$succeed(
						{ctor: '_Tuple0'})
				});
			var spawnList = _p19._0;
			var existingDict = _p19._1;
			var killTask = _p19._2;
			return A2(
				_elm_lang$core$Task$andThen,
				function (newProcesses) {
					return _elm_lang$core$Task$succeed(
						A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
				},
				A2(
					_elm_lang$core$Task$andThen,
					function (_p20) {
						return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
					},
					killTask));
		});
	var _elm_lang$core$Time$Every = F2(
		function (a, b) {
			return {ctor: 'Every', _0: a, _1: b};
		});
	var _elm_lang$core$Time$every = F2(
		function (interval, tagger) {
			return _elm_lang$core$Time$subscription(
				A2(_elm_lang$core$Time$Every, interval, tagger));
		});
	var _elm_lang$core$Time$subMap = F2(
		function (f, _p21) {
			var _p22 = _p21;
			return A2(
				_elm_lang$core$Time$Every,
				_p22._0,
				function (_p23) {
					return f(
						_p22._1(_p23));
				});
		});
	_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

	var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
	var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
	var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

	var _MichaelCombs28$elm_mdl$Material_Helpers$partsUpdatePort = function (component) {
		var _p0 = component;
		if (_p0.ctor === 'Just') {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Maybe$Just(_p0._0._0),
				_1: _p0._0._1
			};
		} else {
			return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Platform_Cmd$none};
		}
	};
	var _MichaelCombs28$elm_mdl$Material_Helpers$noAttr = A2(_elm_lang$html$Html_Attributes$attribute, 'data-elm-mdl-noop', '');
	var _MichaelCombs28$elm_mdl$Material_Helpers$aria = F2(
		function (name, value) {
			return value ? A2(
				_elm_lang$html$Html_Attributes$attribute,
				A2(_elm_lang$core$Basics_ops['++'], 'aria-', name),
				'true') : _MichaelCombs28$elm_mdl$Material_Helpers$noAttr;
		});
	var _MichaelCombs28$elm_mdl$Material_Helpers$delay = F2(
		function (t, x) {
			return A2(
				_elm_lang$core$Task$perform,
				_elm_lang$core$Basics$always(x),
				_elm_lang$core$Process$sleep(t));
		});
	var _MichaelCombs28$elm_mdl$Material_Helpers$cssTransitionStep = function (x) {
		return A2(_MichaelCombs28$elm_mdl$Material_Helpers$delay, 50, x);
	};
	var _MichaelCombs28$elm_mdl$Material_Helpers$cmd = function (msg) {
		return A2(
			_elm_lang$core$Task$perform,
			_elm_lang$core$Basics$always(msg),
			_elm_lang$core$Task$succeed(msg));
	};
	var _MichaelCombs28$elm_mdl$Material_Helpers$lift = F6(
		function (get, set, fwd, update, action, model) {
			var _p1 = A2(
				update,
				action,
				get(model));
			var submodel_ = _p1._0;
			var e = _p1._1;
			return {
				ctor: '_Tuple2',
				_0: A2(set, model, submodel_),
				_1: A2(_elm_lang$core$Platform_Cmd$map, fwd, e)
			};
		});
	var _MichaelCombs28$elm_mdl$Material_Helpers$lift_ = F5(
		function (get, set, update, action, model) {
			return {
				ctor: '_Tuple2',
				_0: A2(
					set,
					model,
					A2(
						update,
						action,
						get(model))),
				_1: _elm_lang$core$Platform_Cmd$none
			};
		});
	var _MichaelCombs28$elm_mdl$Material_Helpers$map2nd = F2(
		function (f, _p2) {
			var _p3 = _p2;
			return {
				ctor: '_Tuple2',
				_0: _p3._0,
				_1: f(_p3._1)
			};
		});
	var _MichaelCombs28$elm_mdl$Material_Helpers$map1st = F2(
		function (f, _p4) {
			var _p5 = _p4;
			return {
				ctor: '_Tuple2',
				_0: f(_p5._0),
				_1: _p5._1
			};
		});
	var _MichaelCombs28$elm_mdl$Material_Helpers$blurOn = function (evt) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			A2(_elm_lang$core$Basics_ops['++'], 'on', evt),
			'this.blur()');
	};
	var _MichaelCombs28$elm_mdl$Material_Helpers$effect = F2(
		function (e, x) {
			return {ctor: '_Tuple2', _0: x, _1: e};
		});
	var _MichaelCombs28$elm_mdl$Material_Helpers$pure = _MichaelCombs28$elm_mdl$Material_Helpers$effect(_elm_lang$core$Platform_Cmd$none);
	var _MichaelCombs28$elm_mdl$Material_Helpers$filter = F3(
		function (elem, attr, html) {
			return A2(
				elem,
				attr,
				A2(
					_elm_lang$core$List$filterMap,
					function (x) {
						return x;
					},
					html));
		});

	var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
	var _elm_lang$html$Html_Events$targetChecked = A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'target',
			_1: {
				ctor: '::',
				_0: 'checked',
				_1: {ctor: '[]'}
			}
		},
		_elm_lang$core$Json_Decode$bool);
	var _elm_lang$html$Html_Events$targetValue = A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'target',
			_1: {
				ctor: '::',
				_0: 'value',
				_1: {ctor: '[]'}
			}
		},
		_elm_lang$core$Json_Decode$string);
	var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
	var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
	var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
	var _elm_lang$html$Html_Events$onFocus = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'focus',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onBlur = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'blur',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
		_elm_lang$html$Html_Events$defaultOptions,
		{preventDefault: true});
	var _elm_lang$html$Html_Events$onSubmit = function (msg) {
		return A3(
			_elm_lang$html$Html_Events$onWithOptions,
			'submit',
			_elm_lang$html$Html_Events$onSubmitOptions,
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onCheck = function (tagger) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'change',
			A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
	};
	var _elm_lang$html$Html_Events$onInput = function (tagger) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'input',
			A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
	};
	var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseout',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseover',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseleave',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseenter',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseup',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mousedown',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'dblclick',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onClick = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'click',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});

	var _MichaelCombs28$elm_mdl$Material_Options_Internal$None = {ctor: 'None'};
	var _MichaelCombs28$elm_mdl$Material_Options_Internal$Set = function (a) {
		return {ctor: 'Set', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Options_Internal$Many = function (a) {
		return {ctor: 'Many', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Options_Internal$Internal = function (a) {
		return {ctor: 'Internal', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute = _MichaelCombs28$elm_mdl$Material_Options_Internal$Internal;
	var _MichaelCombs28$elm_mdl$Material_Options_Internal$Attribute = function (a) {
		return {ctor: 'Attribute', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Options_Internal$CSS = function (a) {
		return {ctor: 'CSS', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Options_Internal$Class = function (a) {
		return {ctor: 'Class', _0: a};
	};

	var _MichaelCombs28$elm_mdl$Material_Options$id = function (_p0) {
		return _MichaelCombs28$elm_mdl$Material_Options_Internal$Attribute(
			_elm_lang$html$Html_Attributes$id(_p0));
	};
	var _MichaelCombs28$elm_mdl$Material_Options$attr = _MichaelCombs28$elm_mdl$Material_Options_Internal$Attribute;
	var _MichaelCombs28$elm_mdl$Material_Options$attribute = _MichaelCombs28$elm_mdl$Material_Options_Internal$Attribute;
	var _MichaelCombs28$elm_mdl$Material_Options$stylesheet = function (css) {
		return A3(
			_elm_lang$html$Html$node,
			'style',
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(css),
				_1: {ctor: '[]'}
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Options$data = F2(
		function (key, val) {
			return _MichaelCombs28$elm_mdl$Material_Options_Internal$Attribute(
				A2(
					_elm_lang$html$Html_Attributes$attribute,
					A2(_elm_lang$core$Basics_ops['++'], 'data-', key),
					val));
		});
	var _MichaelCombs28$elm_mdl$Material_Options$set = _MichaelCombs28$elm_mdl$Material_Options_Internal$Set;
	var _MichaelCombs28$elm_mdl$Material_Options$inner = function (options) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (c) {
				return _elm_lang$core$Native_Utils.update(
					c,
					{
						inner: A2(_elm_lang$core$Basics_ops['++'], options, c.inner)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Options$nop = _MichaelCombs28$elm_mdl$Material_Options_Internal$None;
	var _MichaelCombs28$elm_mdl$Material_Options$when = F2(
		function (prop, guard) {
			return guard ? prop : _MichaelCombs28$elm_mdl$Material_Options$nop;
		});
	var _MichaelCombs28$elm_mdl$Material_Options$maybe = function (prop) {
		return A2(_elm_lang$core$Maybe$withDefault, _MichaelCombs28$elm_mdl$Material_Options$nop, prop);
	};
	var _MichaelCombs28$elm_mdl$Material_Options$many = _MichaelCombs28$elm_mdl$Material_Options_Internal$Many;
	var _MichaelCombs28$elm_mdl$Material_Options$css = F2(
		function (key, value) {
			return _MichaelCombs28$elm_mdl$Material_Options_Internal$CSS(
				{ctor: '_Tuple2', _0: key, _1: value});
		});
	var _MichaelCombs28$elm_mdl$Material_Options$center = _MichaelCombs28$elm_mdl$Material_Options$many(
		{
			ctor: '::',
			_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'display', 'flex'),
			_1: {
				ctor: '::',
				_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'align-items', 'center'),
				_1: {
					ctor: '::',
					_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'justify-content', 'center'),
					_1: {ctor: '[]'}
				}
			}
		});
	var _MichaelCombs28$elm_mdl$Material_Options$scrim = function (opacity) {
		return A2(
			_MichaelCombs28$elm_mdl$Material_Options$css,
			'background',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(opacity),
					'))')));
	};
	var _MichaelCombs28$elm_mdl$Material_Options$cs = function (c) {
		return _MichaelCombs28$elm_mdl$Material_Options_Internal$Class(c);
	};
	var _MichaelCombs28$elm_mdl$Material_Options$disabled = function (v) {
		return _MichaelCombs28$elm_mdl$Material_Options_Internal$Attribute(
			_elm_lang$html$Html_Attributes$disabled(v));
	};
	var _MichaelCombs28$elm_mdl$Material_Options$addAttributes = F2(
		function (summary, attrs) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				summary.attrs,
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(summary.css),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class(
								A2(_elm_lang$core$String$join, ' ', summary.classes)),
							_1: {ctor: '[]'}
						}
					},
					attrs));
		});
	var _MichaelCombs28$elm_mdl$Material_Options$collect1_ = F2(
		function (options, acc) {
			var _p1 = options;
			switch (_p1.ctor) {
				case 'Class':
					return _elm_lang$core$Native_Utils.update(
						acc,
						{
							classes: {ctor: '::', _0: _p1._0, _1: acc.classes}
						});
				case 'CSS':
					return _elm_lang$core$Native_Utils.update(
						acc,
						{
							css: {ctor: '::', _0: _p1._0, _1: acc.css}
						});
				case 'Attribute':
					return _elm_lang$core$Native_Utils.update(
						acc,
						{
							attrs: {ctor: '::', _0: _p1._0, _1: acc.attrs}
						});
				case 'Internal':
					return _elm_lang$core$Native_Utils.update(
						acc,
						{
							attrs: A2(
								_elm_lang$core$Basics_ops['++'],
								acc.attrs,
								{
									ctor: '::',
									_0: _p1._0,
									_1: {ctor: '[]'}
								})
						});
				case 'Many':
					return A3(_elm_lang$core$List$foldl, _MichaelCombs28$elm_mdl$Material_Options$collect1_, acc, _p1._0);
				case 'Set':
					return acc;
				default:
					return acc;
			}
		});
	var _MichaelCombs28$elm_mdl$Material_Options$collect1 = F2(
		function (option, acc) {
			var _p2 = option;
			switch (_p2.ctor) {
				case 'Class':
					return _elm_lang$core$Native_Utils.update(
						acc,
						{
							classes: {ctor: '::', _0: _p2._0, _1: acc.classes}
						});
				case 'CSS':
					return _elm_lang$core$Native_Utils.update(
						acc,
						{
							css: {ctor: '::', _0: _p2._0, _1: acc.css}
						});
				case 'Internal':
					return _elm_lang$core$Native_Utils.update(
						acc,
						{
							attrs: A2(
								_elm_lang$core$Basics_ops['++'],
								acc.attrs,
								{
									ctor: '::',
									_0: _p2._0,
									_1: {ctor: '[]'}
								})
						});
				case 'Attribute':
					return _elm_lang$core$Native_Utils.update(
						acc,
						{
							attrs: {ctor: '::', _0: _p2._0, _1: acc.attrs}
						});
				case 'Many':
					return A3(_elm_lang$core$List$foldl, _MichaelCombs28$elm_mdl$Material_Options$collect1, acc, _p2._0);
				case 'Set':
					return _elm_lang$core$Native_Utils.update(
						acc,
						{
							config: _p2._0(acc.config)
						});
				default:
					return acc;
			}
		});
	var _MichaelCombs28$elm_mdl$Material_Options$recollect = _elm_lang$core$List$foldl(_MichaelCombs28$elm_mdl$Material_Options$collect1);
	var _MichaelCombs28$elm_mdl$Material_Options$apply = F4(
		function (summary, ctor, options, attrs) {
			return ctor(
				A2(
					_MichaelCombs28$elm_mdl$Material_Options$addAttributes,
					A2(_MichaelCombs28$elm_mdl$Material_Options$recollect, summary, options),
					attrs));
		});
	var _MichaelCombs28$elm_mdl$Material_Options$Summary = F4(
		function (a, b, c, d) {
			return {classes: a, css: b, attrs: c, config: d};
		});
	var _MichaelCombs28$elm_mdl$Material_Options$collect = function (_p3) {
		return _MichaelCombs28$elm_mdl$Material_Options$recollect(
			A4(
				_MichaelCombs28$elm_mdl$Material_Options$Summary,
				{ctor: '[]'},
				{ctor: '[]'},
				{ctor: '[]'},
				_p3));
	};
	var _MichaelCombs28$elm_mdl$Material_Options$collect_ = A2(
		_elm_lang$core$List$foldl,
		_MichaelCombs28$elm_mdl$Material_Options$collect1_,
		A4(
			_MichaelCombs28$elm_mdl$Material_Options$Summary,
			{ctor: '[]'},
			{ctor: '[]'},
			{ctor: '[]'},
			{ctor: '_Tuple0'}));
	var _MichaelCombs28$elm_mdl$Material_Options$styled = F2(
		function (ctor, props) {
			return ctor(
				A2(
					_MichaelCombs28$elm_mdl$Material_Options$addAttributes,
					_MichaelCombs28$elm_mdl$Material_Options$collect_(props),
					{ctor: '[]'}));
		});
	var _MichaelCombs28$elm_mdl$Material_Options$div = _MichaelCombs28$elm_mdl$Material_Options$styled(_elm_lang$html$Html$div);
	var _MichaelCombs28$elm_mdl$Material_Options$span = _MichaelCombs28$elm_mdl$Material_Options$styled(_elm_lang$html$Html$span);
	var _MichaelCombs28$elm_mdl$Material_Options$styled_ = F3(
		function (ctor, props, attrs) {
			return ctor(
				A2(
					_MichaelCombs28$elm_mdl$Material_Options$addAttributes,
					_MichaelCombs28$elm_mdl$Material_Options$collect_(props),
					attrs));
		});
	var _MichaelCombs28$elm_mdl$Material_Options$img = F2(
		function (options, attrs) {
			return A4(
				_MichaelCombs28$elm_mdl$Material_Options$styled_,
				_elm_lang$html$Html$img,
				options,
				attrs,
				{ctor: '[]'});
		});

	var _MichaelCombs28$elm_mdl$Material_Ripple$styles = F2(
		function (m, frame) {
			var r = m.rect;
			var toPx = function (k) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						_elm_lang$core$Basics$round(k)),
					'px');
			};
			var offset = A2(
				_elm_lang$core$Basics_ops['++'],
				'translate(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					toPx(m.x),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							toPx(m.y),
							')'))));
			var rippleSize = toPx(
				(_elm_lang$core$Basics$sqrt((r.width * r.width) + (r.height * r.height)) * 2.0) + 2.0);
			var scale = _elm_lang$core$Native_Utils.eq(frame, 0) ? 'scale(0.0001, 0.0001)' : '';
			var transformString = A2(
				_elm_lang$core$Basics_ops['++'],
				'translate(-50%, -50%) ',
				A2(_elm_lang$core$Basics_ops['++'], offset, scale));
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'width', _1: rippleSize},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'height', _1: rippleSize},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: '-webkit-transform', _1: transformString},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: '-ms-transform', _1: transformString},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'transform', _1: transformString},
								_1: {ctor: '[]'}
							}
						}
					}
				}
			};
		});
	var _MichaelCombs28$elm_mdl$Material_Ripple$Metrics = F3(
		function (a, b, c) {
			return {rect: a, x: b, y: c};
		});
	var _MichaelCombs28$elm_mdl$Material_Ripple$computeMetrics = function (g) {
		var rect = g.rect;
		var set = F2(
			function (x, y) {
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: x - rect.left, _1: y - rect.top});
			});
		return A2(
			_elm_lang$core$Maybe$map,
			function (_p0) {
				var _p1 = _p0;
				return A3(_MichaelCombs28$elm_mdl$Material_Ripple$Metrics, rect, _p1._0, _p1._1);
			},
			function () {
				var _p2 = {ctor: '_Tuple4', _0: g.clientX, _1: g.clientY, _2: g.touchX, _3: g.touchY};
				_v1_3:
				do {
					if (_p2.ctor === '_Tuple4') {
						if ((_p2._0.ctor === 'Just') && (_p2._1.ctor === 'Just')) {
							if ((_p2._0._0 === 0.0) && (_p2._1._0 === 0.0)) {
								return _elm_lang$core$Maybe$Just(
									{ctor: '_Tuple2', _0: rect.width / 2.0, _1: rect.height / 2.0});
							} else {
								return A2(set, _p2._0._0, _p2._1._0);
							}
						} else {
							if ((_p2._2.ctor === 'Just') && (_p2._3.ctor === 'Just')) {
								return A2(set, _p2._2._0, _p2._3._0);
							} else {
								break _v1_3;
							}
						}
					} else {
						break _v1_3;
					}
				} while(false);
				return _elm_lang$core$Maybe$Nothing;
			}());
	};
	var _MichaelCombs28$elm_mdl$Material_Ripple$Model = F3(
		function (a, b, c) {
			return {animation: a, metrics: b, ignoringMouseDown: c};
		});
	var _MichaelCombs28$elm_mdl$Material_Ripple$DOMState = F6(
		function (a, b, c, d, e, f) {
			return {rect: a, clientX: b, clientY: c, touchX: d, touchY: e, type_: f};
		});
	var _MichaelCombs28$elm_mdl$Material_Ripple$geometryDecoder = A7(
		_elm_lang$core$Json_Decode$map6,
		_MichaelCombs28$elm_mdl$Material_Ripple$DOMState,
		A2(_elm_lang$core$Json_Decode$field, 'currentTarget', _MichaelCombs28$elm_dom$DOM$boundingClientRect),
		_elm_lang$core$Json_Decode$maybe(
			A2(_elm_lang$core$Json_Decode$field, 'clientX', _elm_lang$core$Json_Decode$float)),
		_elm_lang$core$Json_Decode$maybe(
			A2(_elm_lang$core$Json_Decode$field, 'clientY', _elm_lang$core$Json_Decode$float)),
		_elm_lang$core$Json_Decode$maybe(
			A2(
				_elm_lang$core$Json_Decode$at,
				{
					ctor: '::',
					_0: 'touches',
					_1: {
						ctor: '::',
						_0: '0',
						_1: {
							ctor: '::',
							_0: 'clientX',
							_1: {ctor: '[]'}
						}
					}
				},
				_elm_lang$core$Json_Decode$float)),
		_elm_lang$core$Json_Decode$maybe(
			A2(
				_elm_lang$core$Json_Decode$at,
				{
					ctor: '::',
					_0: 'touches',
					_1: {
						ctor: '::',
						_0: '0',
						_1: {
							ctor: '::',
							_0: 'clientY',
							_1: {ctor: '[]'}
						}
					}
				},
				_elm_lang$core$Json_Decode$float)),
		A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string));
	var _MichaelCombs28$elm_mdl$Material_Ripple$Inert = {ctor: 'Inert'};
	var _MichaelCombs28$elm_mdl$Material_Ripple$model = {animation: _MichaelCombs28$elm_mdl$Material_Ripple$Inert, metrics: _elm_lang$core$Maybe$Nothing, ignoringMouseDown: false};
	var _MichaelCombs28$elm_mdl$Material_Ripple$Frame = function (a) {
		return {ctor: 'Frame', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Ripple$view_ = F2(
		function (attrs, model) {
			var styling = function () {
				var _p3 = {ctor: '_Tuple2', _0: model.metrics, _1: model.animation};
				if ((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) {
					if (_p3._1.ctor === 'Frame') {
						return A2(_MichaelCombs28$elm_mdl$Material_Ripple$styles, _p3._0._0, _p3._1._0);
					} else {
						return A2(_MichaelCombs28$elm_mdl$Material_Ripple$styles, _p3._0._0, 1);
					}
				} else {
					return {ctor: '[]'};
				}
			}();
			return A2(
				_elm_lang$html$Html$span,
				attrs,
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$span,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'mdl-ripple', _1: true},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'is-animating',
											_1: !_elm_lang$core$Native_Utils.eq(
												model.animation,
												_MichaelCombs28$elm_mdl$Material_Ripple$Frame(0))
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'is-visible',
												_1: !_elm_lang$core$Native_Utils.eq(model.animation, _MichaelCombs28$elm_mdl$Material_Ripple$Inert)
											},
											_1: {ctor: '[]'}
										}
									}
								}),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$style(styling),
								_1: {ctor: '[]'}
							}
						},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Ripple$Tick = {ctor: 'Tick'};
	var _MichaelCombs28$elm_mdl$Material_Ripple$update = F2(
		function (action, model) {
			var _p4 = action;
			switch (_p4.ctor) {
				case 'Down':
					var _p5 = _p4._0;
					return (_elm_lang$core$Native_Utils.eq(_p5.type_, 'mousedown') && model.ignoringMouseDown) ? _MichaelCombs28$elm_mdl$Material_Helpers$pure(
						_elm_lang$core$Native_Utils.update(
							model,
							{ignoringMouseDown: false})) : A2(
						_MichaelCombs28$elm_mdl$Material_Helpers$effect,
						_MichaelCombs28$elm_mdl$Material_Helpers$cssTransitionStep(_MichaelCombs28$elm_mdl$Material_Ripple$Tick),
						_elm_lang$core$Native_Utils.update(
							model,
							{
								animation: _MichaelCombs28$elm_mdl$Material_Ripple$Frame(0),
								metrics: _MichaelCombs28$elm_mdl$Material_Ripple$computeMetrics(_p5),
								ignoringMouseDown: _elm_lang$core$Native_Utils.eq(_p5.type_, 'touchstart') ? true : model.ignoringMouseDown
							}));
				case 'Up':
					return _MichaelCombs28$elm_mdl$Material_Helpers$pure(
						_elm_lang$core$Native_Utils.update(
							model,
							{animation: _MichaelCombs28$elm_mdl$Material_Ripple$Inert}));
				default:
					return _elm_lang$core$Native_Utils.eq(
						model.animation,
						_MichaelCombs28$elm_mdl$Material_Ripple$Frame(0)) ? _MichaelCombs28$elm_mdl$Material_Helpers$pure(
						_elm_lang$core$Native_Utils.update(
							model,
							{
								animation: _MichaelCombs28$elm_mdl$Material_Ripple$Frame(1)
							})) : _MichaelCombs28$elm_mdl$Material_Helpers$pure(model);
			}
		});
	var _MichaelCombs28$elm_mdl$Material_Ripple$Up = {ctor: 'Up'};
	var _MichaelCombs28$elm_mdl$Material_Ripple$upOn_ = F2(
		function (f, name) {
			return A2(
				_elm_lang$html$Html_Events$on,
				name,
				_elm_lang$core$Json_Decode$succeed(
					f(_MichaelCombs28$elm_mdl$Material_Ripple$Up)));
		});
	var _MichaelCombs28$elm_mdl$Material_Ripple$upOn = _MichaelCombs28$elm_mdl$Material_Ripple$upOn_(_elm_lang$core$Basics$identity);
	var _MichaelCombs28$elm_mdl$Material_Ripple$Down = function (a) {
		return {ctor: 'Down', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Ripple$downOn_ = F2(
		function (f, name) {
			return A2(
				_elm_lang$html$Html_Events$on,
				name,
				A2(
					_elm_lang$core$Json_Decode$map,
					function (_p6) {
						return f(
							_MichaelCombs28$elm_mdl$Material_Ripple$Down(_p6));
					},
					_MichaelCombs28$elm_mdl$Material_Ripple$geometryDecoder));
		});
	var _MichaelCombs28$elm_mdl$Material_Ripple$downOn = _MichaelCombs28$elm_mdl$Material_Ripple$downOn_(_elm_lang$core$Basics$identity);
	var _MichaelCombs28$elm_mdl$Material_Ripple$view = function (_p7) {
		return _MichaelCombs28$elm_mdl$Material_Ripple$view_(
			A3(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$List$append,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Ripple$upOn('mouseup'),
					_1: {
						ctor: '::',
						_0: _MichaelCombs28$elm_mdl$Material_Ripple$upOn('mouseleave'),
						_1: {
							ctor: '::',
							_0: _MichaelCombs28$elm_mdl$Material_Ripple$upOn('touchend'),
							_1: {
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Ripple$upOn('blur'),
								_1: {
									ctor: '::',
									_0: _MichaelCombs28$elm_mdl$Material_Ripple$downOn('mousedown'),
									_1: {
										ctor: '::',
										_0: _MichaelCombs28$elm_mdl$Material_Ripple$downOn('touchstart'),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				},
				_p7));
	};

	var _MichaelCombs28$elm_mdl$Material_Button$icon = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button--icon');
	var _MichaelCombs28$elm_mdl$Material_Button$minifab = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button--mini-fab');
	var _MichaelCombs28$elm_mdl$Material_Button$fab = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button--fab');
	var _MichaelCombs28$elm_mdl$Material_Button$raised = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button--raised');
	var _MichaelCombs28$elm_mdl$Material_Button$flat = _MichaelCombs28$elm_mdl$Material_Options$nop;
	var _MichaelCombs28$elm_mdl$Material_Button$blurAndForward = function (event) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			A2(_elm_lang$core$Basics_ops['++'], 'on', event),
			'this.blur(); (function(self) { var e = document.createEvent(\'Event\'); e.initEvent(\'touchcancel\', true, true); self.lastChild.dispatchEvent(e); }(this));');
	};
	var _MichaelCombs28$elm_mdl$Material_Button$type_ = function (tp) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (options) {
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						type_: _elm_lang$core$Maybe$Just(tp)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Button$accent = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button--accent');
	var _MichaelCombs28$elm_mdl$Material_Button$primary = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button--primary');
	var _MichaelCombs28$elm_mdl$Material_Button$colored = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button--colored');
	var _MichaelCombs28$elm_mdl$Material_Button$plain = _MichaelCombs28$elm_mdl$Material_Options$nop;
	var _MichaelCombs28$elm_mdl$Material_Button$disabled = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{disabled: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Button$ripple = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{ripple: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Button$onClick = function (x) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (options) {
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						onClick: _elm_lang$core$Maybe$Just(
							_elm_lang$html$Html_Events$onClick(x))
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Button$defaultConfig = {ripple: false, onClick: _elm_lang$core$Maybe$Nothing, disabled: false, type_: _elm_lang$core$Maybe$Nothing};
	var _MichaelCombs28$elm_mdl$Material_Button$view = F4(
		function (lift, model, config, html) {
			var summary = A2(_MichaelCombs28$elm_mdl$Material_Options$collect, _MichaelCombs28$elm_mdl$Material_Button$defaultConfig, config);
			var startListeners = summary.config.ripple ? {
				ctor: '::',
				_0: _elm_lang$core$Maybe$Just(
					A2(_MichaelCombs28$elm_mdl$Material_Ripple$downOn_, lift, 'mousedown')),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Maybe$Just(
						A2(_MichaelCombs28$elm_mdl$Material_Ripple$downOn_, lift, 'touchstart')),
					_1: {ctor: '[]'}
				}
			} : {ctor: '[]'};
			var stopListeners = function () {
				var handle = function (_p0) {
					return _elm_lang$core$Maybe$Just(
						(summary.config.ripple ? _MichaelCombs28$elm_mdl$Material_Button$blurAndForward : _MichaelCombs28$elm_mdl$Material_Helpers$blurOn)(_p0));
				};
				return {
					ctor: '::',
					_0: handle('mouseup'),
					_1: {
						ctor: '::',
						_0: handle('mouseleave'),
						_1: {
							ctor: '::',
							_0: handle('touchend'),
							_1: {ctor: '[]'}
						}
					}
				};
			}();
			var misc = {
				ctor: '::',
				_0: summary.config.onClick,
				_1: {
					ctor: '::',
					_0: summary.config.disabled ? _elm_lang$core$Maybe$Just(
						_elm_lang$html$Html_Attributes$disabled(true)) : _elm_lang$core$Maybe$Nothing,
					_1: {ctor: '[]'}
				}
			};
			var type_ = function () {
				var _p1 = summary.config.type_;
				if (_p1.ctor === 'Nothing') {
					return {ctor: '[]'};
				} else {
					return {
						ctor: '::',
						_0: _elm_lang$core$Maybe$Just(
							_elm_lang$html$Html_Attributes$type_(_p1._0)),
						_1: {ctor: '[]'}
					};
				}
			}();
			return A5(
				_MichaelCombs28$elm_mdl$Material_Options$apply,
				summary,
				_elm_lang$html$Html$button,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button'),
					_1: {
						ctor: '::',
						_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-button'),
						_1: {
							ctor: '::',
							_0: A2(
								_MichaelCombs28$elm_mdl$Material_Options$when,
								_MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-ripple-effect'),
								summary.config.ripple),
							_1: {ctor: '[]'}
						}
					}
				},
				A2(
					_elm_lang$core$List$filterMap,
					_elm_lang$core$Basics$identity,
					_elm_lang$core$List$concat(
						{
							ctor: '::',
							_0: startListeners,
							_1: {
								ctor: '::',
								_0: stopListeners,
								_1: {
									ctor: '::',
									_0: misc,
									_1: {
										ctor: '::',
										_0: type_,
										_1: {ctor: '[]'}
									}
								}
							}
						})),
				summary.config.ripple ? _elm_lang$core$List$concat(
					{
						ctor: '::',
						_0: html,
						_1: {
							ctor: '::',
							_0: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$map,
									lift,
									A2(
										_MichaelCombs28$elm_mdl$Material_Ripple$view_,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('mdl-button__ripple-container'),
											_1: {
												ctor: '::',
												_0: _MichaelCombs28$elm_mdl$Material_Ripple$upOn('blur'),
												_1: {
													ctor: '::',
													_0: _MichaelCombs28$elm_mdl$Material_Ripple$upOn('touchcancel'),
													_1: {ctor: '[]'}
												}
											}
										},
										model)),
								_1: {ctor: '[]'}
							},
							_1: {ctor: '[]'}
						}
					}) : html);
		});
	var _MichaelCombs28$elm_mdl$Material_Button$update = function (action) {
		return _MichaelCombs28$elm_mdl$Material_Ripple$update(action);
	};
	var _MichaelCombs28$elm_mdl$Material_Button$render = A5(
		_MichaelCombs28$elm_parts$Parts$create,
		_MichaelCombs28$elm_mdl$Material_Button$view,
		_MichaelCombs28$elm_parts$Parts$generalize(_MichaelCombs28$elm_mdl$Material_Button$update),
		function (_) {
			return _.button;
		},
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.update(
					y,
					{button: x});
			}),
		_MichaelCombs28$elm_mdl$Material_Ripple$model);
	var _MichaelCombs28$elm_mdl$Material_Button$defaultModel = _MichaelCombs28$elm_mdl$Material_Ripple$model;
	var _MichaelCombs28$elm_mdl$Material_Button$Config = F4(
		function (a, b, c, d) {
			return {ripple: a, onClick: b, disabled: c, type_: d};
		});

	var _MichaelCombs28$elm_mdl$Material_Icon$size48 = A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'font-size', '48px');
	var _MichaelCombs28$elm_mdl$Material_Icon$size36 = A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'font-size', '36px');
	var _MichaelCombs28$elm_mdl$Material_Icon$size24 = A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'font-size', '24px');
	var _MichaelCombs28$elm_mdl$Material_Icon$size18 = A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'font-size', '18px');
	var _MichaelCombs28$elm_mdl$Material_Icon$onClick = function (x) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						onClick: _elm_lang$core$Maybe$Just(
							_elm_lang$html$Html_Events$onClick(x))
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Icon$defaultConfig = {onClick: _elm_lang$core$Maybe$Nothing};
	var _MichaelCombs28$elm_mdl$Material_Icon$view = F2(
		function (name, options) {
			var summary = A2(_MichaelCombs28$elm_mdl$Material_Options$collect, _MichaelCombs28$elm_mdl$Material_Icon$defaultConfig, options);
			return A5(
				_MichaelCombs28$elm_mdl$Material_Options$apply,
				summary,
				_elm_lang$html$Html$i,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('material-icons'),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					A2(
						_elm_lang$core$Maybe$map,
						A2(
							_elm_lang$core$Basics$flip,
							F2(
								function (x, y) {
									return {ctor: '::', _0: x, _1: y};
								}),
							{ctor: '[]'}),
						summary.config.onClick)),
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(name),
					_1: {ctor: '[]'}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Icon$i = function (name) {
		return A2(
			_MichaelCombs28$elm_mdl$Material_Icon$view,
			name,
			{ctor: '[]'});
	};
	var _MichaelCombs28$elm_mdl$Material_Icon$Config = function (a) {
		return {onClick: a};
	};

	var _MichaelCombs28$elm_mdl$Material_Textfield$update = F2(
		function (action, model) {
			var _p0 = action;
			switch (_p0.ctor) {
				case 'Input':
					return _elm_lang$core$Native_Utils.update(
						model,
						{value: _p0._0});
				case 'Blur':
					return _elm_lang$core$Native_Utils.update(
						model,
						{isFocused: false});
				default:
					return _elm_lang$core$Native_Utils.update(
						model,
						{isFocused: true});
			}
		});
	var _MichaelCombs28$elm_mdl$Material_Textfield$defaultModel = {isFocused: false, value: ''};
	var _MichaelCombs28$elm_mdl$Material_Textfield$cols = function (cols) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						cols: _elm_lang$core$Maybe$Just(cols)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$rows = function (rows) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						rows: _elm_lang$core$Maybe$Just(rows)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$style = _MichaelCombs28$elm_mdl$Material_Options$inner;
	var _MichaelCombs28$elm_mdl$Material_Textfield$on = F2(
		function (event, decoder) {
			return _MichaelCombs28$elm_mdl$Material_Options$set(
				function (config) {
					return _elm_lang$core$Native_Utils.update(
						config,
						{
							listeners: A2(
								_elm_lang$core$Basics_ops['++'],
								config.listeners,
								{
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Events$on, event, decoder),
									_1: {ctor: '[]'}
								})
						});
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Textfield$onInput = function (f) {
		return A2(
			_MichaelCombs28$elm_mdl$Material_Textfield$on,
			'input',
			A2(_elm_lang$core$Json_Decode$map, f, _elm_lang$html$Html_Events$targetValue));
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$onBlur = function (f) {
		return A2(
			_MichaelCombs28$elm_mdl$Material_Textfield$on,
			'focusout',
			_elm_lang$core$Json_Decode$succeed(f));
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$onFocus = function (f) {
		return A2(
			_MichaelCombs28$elm_mdl$Material_Textfield$on,
			'focusin',
			_elm_lang$core$Json_Decode$succeed(f));
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$disabled = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{disabled: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Textfield$maxlength = function (v) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						maxlength: _elm_lang$core$Maybe$Just(v)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$autofocus = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{autofocus: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Textfield$value = function (str) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						value: _elm_lang$core$Maybe$Just(str)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$error = function (str) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						error: _elm_lang$core$Maybe$Just(str)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$expandableIcon = function (id) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{expandableIcon: id});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$expandable = function (id) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						expandable: _elm_lang$core$Maybe$Just(id)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$floatingLabel = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{labelFloat: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Textfield$label = function (str) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						labelText: _elm_lang$core$Maybe$Just(str)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$Config = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return function (l) {
													return function (m) {
														return function (n) {
															return {labelText: a, labelFloat: b, error: c, value: d, disabled: e, kind: f, rows: g, cols: h, autofocus: i, maxlength: j, inner: k, listeners: l, expandable: m, expandableIcon: n};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$Model = F2(
		function (a, b) {
			return {isFocused: a, value: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Textfield$Password = {ctor: 'Password'};
	var _MichaelCombs28$elm_mdl$Material_Textfield$password = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{kind: _MichaelCombs28$elm_mdl$Material_Textfield$Password});
		});
	var _MichaelCombs28$elm_mdl$Material_Textfield$Textarea = {ctor: 'Textarea'};
	var _MichaelCombs28$elm_mdl$Material_Textfield$textarea = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{kind: _MichaelCombs28$elm_mdl$Material_Textfield$Textarea});
		});
	var _MichaelCombs28$elm_mdl$Material_Textfield$Text = {ctor: 'Text'};
	var _MichaelCombs28$elm_mdl$Material_Textfield$defaultConfig = {
		labelText: _elm_lang$core$Maybe$Nothing,
		labelFloat: false,
		error: _elm_lang$core$Maybe$Nothing,
		value: _elm_lang$core$Maybe$Nothing,
		disabled: false,
		kind: _MichaelCombs28$elm_mdl$Material_Textfield$Text,
		rows: _elm_lang$core$Maybe$Nothing,
		cols: _elm_lang$core$Maybe$Nothing,
		autofocus: false,
		maxlength: _elm_lang$core$Maybe$Nothing,
		inner: {ctor: '[]'},
		listeners: {ctor: '[]'},
		expandable: _elm_lang$core$Maybe$Nothing,
		expandableIcon: 'search'
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$text_ = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{kind: _MichaelCombs28$elm_mdl$Material_Textfield$Text});
		});
	var _MichaelCombs28$elm_mdl$Material_Textfield$Input = function (a) {
		return {ctor: 'Input', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Textfield$Focus = {ctor: 'Focus'};
	var _MichaelCombs28$elm_mdl$Material_Textfield$Blur = {ctor: 'Blur'};
	var _MichaelCombs28$elm_mdl$Material_Textfield$view = F3(
		function (lift, model, options) {
			var _p1 = A2(_MichaelCombs28$elm_mdl$Material_Options$collect, _MichaelCombs28$elm_mdl$Material_Textfield$defaultConfig, options);
			var summary = _p1;
			var config = _p1.config;
			var val = A2(_elm_lang$core$Maybe$withDefault, model.value, config.value);
			var isTextarea = _elm_lang$core$Native_Utils.eq(config.kind, _MichaelCombs28$elm_mdl$Material_Textfield$Textarea);
			var elementFunction = isTextarea ? _elm_lang$html$Html$textarea : _elm_lang$html$Html$input;
			var typeAttributes = function () {
				var _p2 = config.kind;
				switch (_p2.ctor) {
					case 'Text':
						return {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$type_('text'),
							_1: {ctor: '[]'}
						};
					case 'Password':
						return {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$type_('password'),
							_1: {ctor: '[]'}
						};
					default:
						return A2(
							_elm_lang$core$Basics_ops['++'],
							{ctor: '[]'},
							A2(
								_elm_lang$core$Basics_ops['++'],
								function () {
									var _p3 = config.rows;
									if (_p3.ctor === 'Just') {
										return {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$rows(_p3._0),
											_1: {ctor: '[]'}
										};
									} else {
										return {ctor: '[]'};
									}
								}(),
								function () {
									var _p4 = config.cols;
									if (_p4.ctor === 'Just') {
										return {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$cols(_p4._0),
											_1: {ctor: '[]'}
										};
									} else {
										return {ctor: '[]'};
									}
								}()));
				}
			}();
			var maxlength = function () {
				var _p5 = config.maxlength;
				if (_p5.ctor === 'Just') {
					return {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$maxlength(_p5._0),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			}();
			var listeners = config.listeners;
			var textValue = function () {
				var _p6 = config.value;
				if (_p6.ctor === 'Just') {
					return {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$value(_p6._0),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			}();
			var defaultInput = function () {
				var _p7 = config.value;
				if (_p7.ctor === 'Just') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					return _elm_lang$core$Maybe$Just(
						A2(
							_elm_lang$html$Html_Events$on,
							'input',
							A2(
								_elm_lang$core$Json_Decode$map,
								function (_p8) {
									return lift(
										_MichaelCombs28$elm_mdl$Material_Textfield$Input(_p8));
								},
								_elm_lang$html$Html_Events$targetValue)));
				}
			}();
			var labelFor = function () {
				var _p9 = config.expandable;
				if (_p9.ctor === 'Nothing') {
					return {ctor: '[]'};
				} else {
					return {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$for(_p9._0),
						_1: {ctor: '[]'}
					};
				}
			}();
			var expandableId = function () {
				var _p10 = config.expandable;
				if (_p10.ctor === 'Nothing') {
					return _MichaelCombs28$elm_mdl$Material_Options$nop;
				} else {
					return _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
						_elm_lang$html$Html_Attributes$id(_p10._0));
				}
			}();
			var expHolder = function () {
				var _p11 = config.expandable;
				if (_p11.ctor === 'Nothing') {
					return _elm_lang$core$Basics$identity;
				} else {
					return function (x) {
						return {
							ctor: '::',
							_0: A4(
								_MichaelCombs28$elm_mdl$Material_Options$styled_,
								_elm_lang$html$Html$label,
								{
									ctor: '::',
									_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button'),
									_1: {
										ctor: '::',
										_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-button'),
										_1: {
											ctor: '::',
											_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button--icon'),
											_1: {ctor: '[]'}
										}
									}
								},
								labelFor,
								{
									ctor: '::',
									_0: _MichaelCombs28$elm_mdl$Material_Icon$i(config.expandableIcon),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A3(
									_MichaelCombs28$elm_mdl$Material_Options$styled,
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-textfield__expandable-holder'),
										_1: {ctor: '[]'}
									},
									x),
								_1: {ctor: '[]'}
							}
						};
					};
				}
			}();
			return A5(
				_MichaelCombs28$elm_mdl$Material_Options$apply,
				summary,
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-textfield'),
					_1: {
						ctor: '::',
						_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-textfield'),
						_1: {
							ctor: '::',
							_0: _MichaelCombs28$elm_mdl$Material_Options$cs('is-upgraded'),
							_1: {
								ctor: '::',
								_0: config.labelFloat ? _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-textfield--floating-label') : _MichaelCombs28$elm_mdl$Material_Options$nop,
								_1: {
									ctor: '::',
									_0: (!_elm_lang$core$Native_Utils.eq(config.error, _elm_lang$core$Maybe$Nothing)) ? _MichaelCombs28$elm_mdl$Material_Options$cs('is-invalid') : _MichaelCombs28$elm_mdl$Material_Options$nop,
									_1: {
										ctor: '::',
										_0: (!_elm_lang$core$Native_Utils.eq(val, '')) ? _MichaelCombs28$elm_mdl$Material_Options$cs('is-dirty') : _MichaelCombs28$elm_mdl$Material_Options$nop,
										_1: {
											ctor: '::',
											_0: (model.isFocused && (!config.disabled)) ? _MichaelCombs28$elm_mdl$Material_Options$cs('is-focused') : _MichaelCombs28$elm_mdl$Material_Options$nop,
											_1: {
												ctor: '::',
												_0: config.disabled ? _MichaelCombs28$elm_mdl$Material_Options$cs('is-disabled') : _MichaelCombs28$elm_mdl$Material_Options$nop,
												_1: {
													ctor: '::',
													_0: A2(
														_MichaelCombs28$elm_mdl$Material_Options$when,
														_MichaelCombs28$elm_mdl$Material_Options$cs('mdl-textfield--expandable'),
														!_elm_lang$core$Native_Utils.eq(config.expandable, _elm_lang$core$Maybe$Nothing)),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				A2(
					_elm_lang$core$List$filterMap,
					_elm_lang$core$Basics$identity,
					{
						ctor: '::',
						_0: defaultInput,
						_1: {ctor: '[]'}
					}),
				expHolder(
					{
						ctor: '::',
						_0: A4(
							_MichaelCombs28$elm_mdl$Material_Options$styled_,
							elementFunction,
							{
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-textfield__input'),
								_1: {
									ctor: '::',
									_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'outline', 'none'),
									_1: {
										ctor: '::',
										_0: _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
											A2(
												_elm_lang$html$Html_Events$on,
												'focus',
												_elm_lang$core$Json_Decode$succeed(
													lift(_MichaelCombs28$elm_mdl$Material_Textfield$Focus)))),
										_1: {
											ctor: '::',
											_0: _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
												A2(
													_elm_lang$html$Html_Events$on,
													'blur',
													_elm_lang$core$Json_Decode$succeed(
														lift(_MichaelCombs28$elm_mdl$Material_Textfield$Blur)))),
											_1: {
												ctor: '::',
												_0: expandableId,
												_1: {
													ctor: '::',
													_0: _MichaelCombs28$elm_mdl$Material_Options$many(config.inner),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							},
							A2(
								_elm_lang$core$Basics_ops['++'],
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$disabled(config.disabled),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$autofocus(config.autofocus),
										_1: {ctor: '[]'}
									}
								},
								A2(
									_elm_lang$core$Basics_ops['++'],
									textValue,
									A2(
										_elm_lang$core$Basics_ops['++'],
										typeAttributes,
										A2(_elm_lang$core$Basics_ops['++'], maxlength, listeners)))),
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$label,
								A2(
									_elm_lang$core$Basics_ops['++'],
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('mdl-textfield__label'),
										_1: {ctor: '[]'}
									},
									labelFor),
								function () {
									var _p12 = config.labelText;
									if (_p12.ctor === 'Just') {
										return {
											ctor: '::',
											_0: _elm_lang$html$Html$text(_p12._0),
											_1: {ctor: '[]'}
										};
									} else {
										return {ctor: '[]'};
									}
								}()),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$core$Maybe$withDefault,
									A2(
										_elm_lang$html$Html$div,
										{ctor: '[]'},
										{ctor: '[]'}),
									A2(
										_elm_lang$core$Maybe$map,
										function (e) {
											return A2(
												_elm_lang$html$Html$span,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('mdl-textfield__error'),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text(e),
													_1: {ctor: '[]'}
												});
										},
										config.error)),
								_1: {ctor: '[]'}
							}
						}
					}));
		});
	var _MichaelCombs28$elm_mdl$Material_Textfield$render = A5(
		_MichaelCombs28$elm_parts$Parts$create,
		_MichaelCombs28$elm_mdl$Material_Textfield$view,
		F3(
			function (_p13, msg, model) {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Just(
						A2(_MichaelCombs28$elm_mdl$Material_Textfield$update, msg, model)),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			}),
		function (_) {
			return _.textfield;
		},
		F2(
			function (x, c) {
				return _elm_lang$core$Native_Utils.update(
					c,
					{textfield: x});
			}),
		_MichaelCombs28$elm_mdl$Material_Textfield$defaultModel);

	var _elm_lang$dom$Native_Dom = function() {

	var fakeNode = {
		addEventListener: function() {},
		removeEventListener: function() {}
	};

	var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
	var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

	function on(node)
	{
		return function(eventName, decoder, toTask)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

				function performTask(event)
				{
					var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
					if (result.ctor === 'Ok')
					{
						_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
					}
				}

				node.addEventListener(eventName, performTask);

				return function()
				{
					node.removeEventListener(eventName, performTask);
				};
			});
		};
	}

	var rAF = typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { callback(); };

	function withNode(id, doStuff)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			rAF(function()
			{
				var node = document.getElementById(id);
				if (node === null)
				{
					callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
					return;
				}
				callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
			});
		});
	}


	// FOCUS

	function focus(id)
	{
		return withNode(id, function(node) {
			node.focus();
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function blur(id)
	{
		return withNode(id, function(node) {
			node.blur();
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}


	// SCROLLING

	function getScrollTop(id)
	{
		return withNode(id, function(node) {
			return node.scrollTop;
		});
	}

	function setScrollTop(id, desiredScrollTop)
	{
		return withNode(id, function(node) {
			node.scrollTop = desiredScrollTop;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function toBottom(id)
	{
		return withNode(id, function(node) {
			node.scrollTop = node.scrollHeight;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function getScrollLeft(id)
	{
		return withNode(id, function(node) {
			return node.scrollLeft;
		});
	}

	function setScrollLeft(id, desiredScrollLeft)
	{
		return withNode(id, function(node) {
			node.scrollLeft = desiredScrollLeft;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function toRight(id)
	{
		return withNode(id, function(node) {
			node.scrollLeft = node.scrollWidth;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}


	// SIZE

	function width(options, id)
	{
		return withNode(id, function(node) {
			switch (options.ctor)
			{
				case 'Content':
					return node.scrollWidth;
				case 'VisibleContent':
					return node.clientWidth;
				case 'VisibleContentWithBorders':
					return node.offsetWidth;
				case 'VisibleContentWithBordersAndMargins':
					var rect = node.getBoundingClientRect();
					return rect.right - rect.left;
			}
		});
	}

	function height(options, id)
	{
		return withNode(id, function(node) {
			switch (options.ctor)
			{
				case 'Content':
					return node.scrollHeight;
				case 'VisibleContent':
					return node.clientHeight;
				case 'VisibleContentWithBorders':
					return node.offsetHeight;
				case 'VisibleContentWithBordersAndMargins':
					var rect = node.getBoundingClientRect();
					return rect.bottom - rect.top;
			}
		});
	}

	return {
		onDocument: F3(onDocument),
		onWindow: F3(onWindow),

		focus: focus,
		blur: blur,

		getScrollTop: getScrollTop,
		setScrollTop: F2(setScrollTop),
		getScrollLeft: getScrollLeft,
		setScrollLeft: F2(setScrollLeft),
		toBottom: toBottom,
		toRight: toRight,

		height: F2(height),
		width: F2(width)
	};

	}();

	var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
	var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

	var _elm_lang$mouse$Mouse_ops = _elm_lang$mouse$Mouse_ops || {};
	_elm_lang$mouse$Mouse_ops['&>'] = F2(
		function (t1, t2) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p0) {
					return t2;
				},
				t1);
		});
	var _elm_lang$mouse$Mouse$onSelfMsg = F3(
		function (router, _p1, state) {
			var _p2 = _p1;
			var _p3 = A2(_elm_lang$core$Dict$get, _p2.category, state);
			if (_p3.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				var send = function (tagger) {
					return A2(
						_elm_lang$core$Platform$sendToApp,
						router,
						tagger(_p2.position));
				};
				return A2(
					_elm_lang$mouse$Mouse_ops['&>'],
					_elm_lang$core$Task$sequence(
						A2(_elm_lang$core$List$map, send, _p3._0.taggers)),
					_elm_lang$core$Task$succeed(state));
			}
		});
	var _elm_lang$mouse$Mouse$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
	var _elm_lang$mouse$Mouse$categorizeHelpHelp = F2(
		function (value, maybeValues) {
			var _p4 = maybeValues;
			if (_p4.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Just(
					{
						ctor: '::',
						_0: value,
						_1: {ctor: '[]'}
					});
			} else {
				return _elm_lang$core$Maybe$Just(
					{ctor: '::', _0: value, _1: _p4._0});
			}
		});
	var _elm_lang$mouse$Mouse$categorizeHelp = F2(
		function (subs, subDict) {
			categorizeHelp:
			while (true) {
				var _p5 = subs;
				if (_p5.ctor === '[]') {
					return subDict;
				} else {
					var _v4 = _p5._1,
						_v5 = A3(
						_elm_lang$core$Dict$update,
						_p5._0._0,
						_elm_lang$mouse$Mouse$categorizeHelpHelp(_p5._0._1),
						subDict);
					subs = _v4;
					subDict = _v5;
					continue categorizeHelp;
				}
			}
		});
	var _elm_lang$mouse$Mouse$categorize = function (subs) {
		return A2(_elm_lang$mouse$Mouse$categorizeHelp, subs, _elm_lang$core$Dict$empty);
	};
	var _elm_lang$mouse$Mouse$subscription = _elm_lang$core$Native_Platform.leaf('Mouse');
	var _elm_lang$mouse$Mouse$Position = F2(
		function (a, b) {
			return {x: a, y: b};
		});
	var _elm_lang$mouse$Mouse$position = A3(
		_elm_lang$core$Json_Decode$map2,
		_elm_lang$mouse$Mouse$Position,
		A2(_elm_lang$core$Json_Decode$field, 'pageX', _elm_lang$core$Json_Decode$int),
		A2(_elm_lang$core$Json_Decode$field, 'pageY', _elm_lang$core$Json_Decode$int));
	var _elm_lang$mouse$Mouse$Watcher = F2(
		function (a, b) {
			return {taggers: a, pid: b};
		});
	var _elm_lang$mouse$Mouse$Msg = F2(
		function (a, b) {
			return {category: a, position: b};
		});
	var _elm_lang$mouse$Mouse$onEffects = F3(
		function (router, newSubs, oldState) {
			var rightStep = F3(
				function (category, taggers, task) {
					var tracker = A3(
						_elm_lang$dom$Dom_LowLevel$onDocument,
						category,
						_elm_lang$mouse$Mouse$position,
						function (_p6) {
							return A2(
								_elm_lang$core$Platform$sendToSelf,
								router,
								A2(_elm_lang$mouse$Mouse$Msg, category, _p6));
						});
					return A2(
						_elm_lang$core$Task$andThen,
						function (state) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (pid) {
									return _elm_lang$core$Task$succeed(
										A3(
											_elm_lang$core$Dict$insert,
											category,
											A2(_elm_lang$mouse$Mouse$Watcher, taggers, pid),
											state));
								},
								_elm_lang$core$Process$spawn(tracker));
						},
						task);
				});
			var bothStep = F4(
				function (category, _p7, taggers, task) {
					var _p8 = _p7;
					return A2(
						_elm_lang$core$Task$andThen,
						function (state) {
							return _elm_lang$core$Task$succeed(
								A3(
									_elm_lang$core$Dict$insert,
									category,
									A2(_elm_lang$mouse$Mouse$Watcher, taggers, _p8.pid),
									state));
						},
						task);
				});
			var leftStep = F3(
				function (category, _p9, task) {
					var _p10 = _p9;
					return A2(
						_elm_lang$mouse$Mouse_ops['&>'],
						_elm_lang$core$Process$kill(_p10.pid),
						task);
				});
			return A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				oldState,
				_elm_lang$mouse$Mouse$categorize(newSubs),
				_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
		});
	var _elm_lang$mouse$Mouse$MySub = F2(
		function (a, b) {
			return {ctor: 'MySub', _0: a, _1: b};
		});
	var _elm_lang$mouse$Mouse$clicks = function (tagger) {
		return _elm_lang$mouse$Mouse$subscription(
			A2(_elm_lang$mouse$Mouse$MySub, 'click', tagger));
	};
	var _elm_lang$mouse$Mouse$moves = function (tagger) {
		return _elm_lang$mouse$Mouse$subscription(
			A2(_elm_lang$mouse$Mouse$MySub, 'mousemove', tagger));
	};
	var _elm_lang$mouse$Mouse$downs = function (tagger) {
		return _elm_lang$mouse$Mouse$subscription(
			A2(_elm_lang$mouse$Mouse$MySub, 'mousedown', tagger));
	};
	var _elm_lang$mouse$Mouse$ups = function (tagger) {
		return _elm_lang$mouse$Mouse$subscription(
			A2(_elm_lang$mouse$Mouse$MySub, 'mouseup', tagger));
	};
	var _elm_lang$mouse$Mouse$subMap = F2(
		function (func, _p11) {
			var _p12 = _p11;
			return A2(
				_elm_lang$mouse$Mouse$MySub,
				_p12._0,
				function (_p13) {
					return func(
						_p12._1(_p13));
				});
		});
	_elm_lang$core$Native_Platform.effectManagers['Mouse'] = {pkg: 'elm-lang/mouse', init: _elm_lang$mouse$Mouse$init, onEffects: _elm_lang$mouse$Mouse$onEffects, onSelfMsg: _elm_lang$mouse$Mouse$onSelfMsg, tag: 'sub', subMap: _elm_lang$mouse$Mouse$subMap};

	var _MichaelCombs28$elm_mdl$Material_Menu_Geometry$Geometry = F5(
		function (a, b, c, d, e) {
			return {button: a, menu: b, container: c, offsetTops: d, offsetHeights: e};
		});
	var _MichaelCombs28$elm_mdl$Material_Menu_Geometry$Element = F4(
		function (a, b, c, d) {
			return {offsetTop: a, offsetLeft: b, offsetHeight: c, bounds: d};
		});
	var _MichaelCombs28$elm_mdl$Material_Menu_Geometry$element = A5(_elm_lang$core$Json_Decode$map4, _MichaelCombs28$elm_mdl$Material_Menu_Geometry$Element, _MichaelCombs28$elm_dom$DOM$offsetTop, _MichaelCombs28$elm_dom$DOM$offsetLeft, _MichaelCombs28$elm_dom$DOM$offsetHeight, _MichaelCombs28$elm_dom$DOM$boundingClientRect);
	var _MichaelCombs28$elm_mdl$Material_Menu_Geometry$decode = A6(
		_elm_lang$core$Json_Decode$map5,
		_MichaelCombs28$elm_mdl$Material_Menu_Geometry$Geometry,
		_MichaelCombs28$elm_dom$DOM$target(_MichaelCombs28$elm_mdl$Material_Menu_Geometry$element),
		_MichaelCombs28$elm_dom$DOM$target(
			_MichaelCombs28$elm_dom$DOM$nextSibling(
				A2(_MichaelCombs28$elm_dom$DOM$childNode, 1, _MichaelCombs28$elm_mdl$Material_Menu_Geometry$element))),
		_MichaelCombs28$elm_dom$DOM$target(
			_MichaelCombs28$elm_dom$DOM$nextSibling(_MichaelCombs28$elm_mdl$Material_Menu_Geometry$element)),
		_MichaelCombs28$elm_dom$DOM$target(
			_MichaelCombs28$elm_dom$DOM$nextSibling(
				A2(
					_MichaelCombs28$elm_dom$DOM$childNode,
					1,
					_MichaelCombs28$elm_dom$DOM$childNodes(_MichaelCombs28$elm_dom$DOM$offsetTop)))),
		_MichaelCombs28$elm_dom$DOM$target(
			_MichaelCombs28$elm_dom$DOM$nextSibling(
				A2(
					_MichaelCombs28$elm_dom$DOM$childNode,
					1,
					_MichaelCombs28$elm_dom$DOM$childNodes(_MichaelCombs28$elm_dom$DOM$offsetHeight)))));

	var _MichaelCombs28$elm_mdl$Material_Menu$toPx = function (_p0) {
		return A3(
			_elm_lang$core$Basics$flip,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Basics_ops['++'], x, y);
				}),
			'px',
			_elm_lang$core$Basics$toString(_p0));
	};
	var _MichaelCombs28$elm_mdl$Material_Menu$rect = F4(
		function (x, y, w, h) {
			return function (coords) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'rect(',
					A2(_elm_lang$core$Basics_ops['++'], coords, ')'));
			}(
				A2(
					_elm_lang$core$String$join,
					' ',
					A2(
						_elm_lang$core$List$map,
						_MichaelCombs28$elm_mdl$Material_Menu$toPx,
						{
							ctor: '::',
							_0: x,
							_1: {
								ctor: '::',
								_0: y,
								_1: {
									ctor: '::',
									_0: w,
									_1: {
										ctor: '::',
										_0: h,
										_1: {ctor: '[]'}
									}
								}
							}
						})));
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$onKeyDown = function (action) {
		return A3(
			_elm_lang$html$Html_Events$onWithOptions,
			'keydown',
			{preventDefault: true, stopPropagation: false},
			A2(_elm_lang$core$Json_Decode$map, action, _elm_lang$html$Html_Events$keyCode));
	};
	var _MichaelCombs28$elm_mdl$Material_Menu$onClick = F2(
		function (decoder, action) {
			return A2(
				_elm_lang$html$Html_Events$on,
				'click',
				A2(_elm_lang$core$Json_Decode$map, action, decoder));
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$withGeometry = F2(
		function (model, f) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				_MichaelCombs28$elm_mdl$Material_Options$nop,
				A2(_elm_lang$core$Maybe$map, f, model.geometry));
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$icon = function (name) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{icon: name});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Menu$ripple = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{ripple: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$onSelect = function (msg) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						onSelect: _elm_lang$core$Maybe$Just(msg)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Menu$disabled = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{enabled: false});
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$divider = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{divider: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$defaultItemConfig = {enabled: true, divider: false, onSelect: _elm_lang$core$Maybe$Nothing};
	var _MichaelCombs28$elm_mdl$Material_Menu$constant = {transitionDurationSeconds: 0.3, transitionDurationFraction: 0.8, closeTimeout: 150};
	var _MichaelCombs28$elm_mdl$Material_Menu$transitionDuration = _MichaelCombs28$elm_mdl$Material_Menu$constant.transitionDurationSeconds * _MichaelCombs28$elm_mdl$Material_Menu$constant.transitionDurationFraction;
	var _MichaelCombs28$elm_mdl$Material_Menu$Model = F4(
		function (a, b, c, d) {
			return {ripples: a, animationState: b, geometry: c, index: d};
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$Item = F2(
		function (a, b) {
			return {options: a, html: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$item = _MichaelCombs28$elm_mdl$Material_Menu$Item;
	var _MichaelCombs28$elm_mdl$Material_Menu$ItemConfig = F3(
		function (a, b, c) {
			return {enabled: a, divider: b, onSelect: c};
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$Config = F3(
		function (a, b, c) {
			return {alignment: a, ripple: b, icon: c};
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$Closing = {ctor: 'Closing'};
	var _MichaelCombs28$elm_mdl$Material_Menu$Opened = {ctor: 'Opened'};
	var _MichaelCombs28$elm_mdl$Material_Menu$clip = F3(
		function (model, config, geometry) {
			var height = geometry.menu.bounds.height;
			var width = geometry.menu.bounds.width;
			return A2(
				_MichaelCombs28$elm_mdl$Material_Options$css,
				'clip',
				function () {
					if (_elm_lang$core$Native_Utils.eq(model.animationState, _MichaelCombs28$elm_mdl$Material_Menu$Opened) || _elm_lang$core$Native_Utils.eq(model.animationState, _MichaelCombs28$elm_mdl$Material_Menu$Closing)) {
						return A4(_MichaelCombs28$elm_mdl$Material_Menu$rect, 0, width, height, 0);
					} else {
						var _p1 = config.alignment;
						switch (_p1.ctor) {
							case 'BottomRight':
								return A4(_MichaelCombs28$elm_mdl$Material_Menu$rect, 0, width, 0, width);
							case 'TopLeft':
								return A4(_MichaelCombs28$elm_mdl$Material_Menu$rect, height, 0, height, 0);
							case 'TopRight':
								return A4(_MichaelCombs28$elm_mdl$Material_Menu$rect, height, width, height, width);
							default:
								return '';
						}
					}
				}());
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$Opening = {ctor: 'Opening'};
	var _MichaelCombs28$elm_mdl$Material_Menu$isActive = function (model) {
		return _elm_lang$core$Native_Utils.eq(model.animationState, _MichaelCombs28$elm_mdl$Material_Menu$Opened) || _elm_lang$core$Native_Utils.eq(model.animationState, _MichaelCombs28$elm_mdl$Material_Menu$Opening);
	};
	var _MichaelCombs28$elm_mdl$Material_Menu$Idle = {ctor: 'Idle'};
	var _MichaelCombs28$elm_mdl$Material_Menu$defaultModel = {ripples: _elm_lang$core$Dict$empty, animationState: _MichaelCombs28$elm_mdl$Material_Menu$Idle, geometry: _elm_lang$core$Maybe$Nothing, index: _elm_lang$core$Maybe$Nothing};
	var _MichaelCombs28$elm_mdl$Material_Menu$Key = F2(
		function (a, b) {
			return {ctor: 'Key', _0: a, _1: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$Click = function (a) {
		return {ctor: 'Click', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Menu$subscriptions = function (model) {
		return _elm_lang$core$Native_Utils.eq(model.animationState, _MichaelCombs28$elm_mdl$Material_Menu$Opened) ? _elm_lang$mouse$Mouse$clicks(_MichaelCombs28$elm_mdl$Material_Menu$Click) : _elm_lang$core$Platform_Sub$none;
	};
	var _MichaelCombs28$elm_mdl$Material_Menu$Ripple = F2(
		function (a, b) {
			return {ctor: 'Ripple', _0: a, _1: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$Tick = {ctor: 'Tick'};
	var _MichaelCombs28$elm_mdl$Material_Menu$Close = {ctor: 'Close'};
	var _MichaelCombs28$elm_mdl$Material_Menu$Select = F2(
		function (a, b) {
			return {ctor: 'Select', _0: a, _1: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$update = F3(
		function (fwd, msg, model) {
			update:
			while (true) {
				var _p2 = msg;
				switch (_p2.ctor) {
					case 'Open':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{
									animationState: function () {
										var _p3 = model.animationState;
										if (_p3.ctor === 'Opened') {
											return _MichaelCombs28$elm_mdl$Material_Menu$Opened;
										} else {
											return _MichaelCombs28$elm_mdl$Material_Menu$Opening;
										}
									}(),
									geometry: _elm_lang$core$Maybe$Just(_p2._0)
								}),
							_1: _MichaelCombs28$elm_mdl$Material_Helpers$cmd(
								fwd(_MichaelCombs28$elm_mdl$Material_Menu$Tick))
						};
					case 'Tick':
						return _MichaelCombs28$elm_mdl$Material_Helpers$pure(
							_elm_lang$core$Native_Utils.update(
								model,
								{animationState: _MichaelCombs28$elm_mdl$Material_Menu$Opened}));
					case 'Close':
						return _MichaelCombs28$elm_mdl$Material_Helpers$pure(
							_elm_lang$core$Native_Utils.update(
								model,
								{animationState: _MichaelCombs28$elm_mdl$Material_Menu$Idle, geometry: _elm_lang$core$Maybe$Nothing, index: _elm_lang$core$Maybe$Nothing}));
					case 'Select':
						var cmds = A2(
							_elm_lang$core$List$filterMap,
							_elm_lang$core$Basics$identity,
							{
								ctor: '::',
								_0: _elm_lang$core$Maybe$Just(
									A2(
										_MichaelCombs28$elm_mdl$Material_Helpers$delay,
										_MichaelCombs28$elm_mdl$Material_Menu$constant.closeTimeout,
										fwd(_MichaelCombs28$elm_mdl$Material_Menu$Close))),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$core$Maybe$map, _MichaelCombs28$elm_mdl$Material_Helpers$cmd, _p2._1),
									_1: {ctor: '[]'}
								}
							});
						var model_ = _elm_lang$core$Native_Utils.update(
							model,
							{animationState: _MichaelCombs28$elm_mdl$Material_Menu$Closing});
						return {
							ctor: '_Tuple2',
							_0: model_,
							_1: _elm_lang$core$Platform_Cmd$batch(cmds)
						};
					case 'Ripple':
						var _p6 = _p2._0;
						var _p4 = A2(
							_MichaelCombs28$elm_mdl$Material_Ripple$update,
							_p2._1,
							A2(
								_elm_lang$core$Maybe$withDefault,
								_MichaelCombs28$elm_mdl$Material_Ripple$model,
								A2(_elm_lang$core$Dict$get, _p6, model.ripples)));
						var model_ = _p4._0;
						var effects = _p4._1;
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{
									ripples: A3(_elm_lang$core$Dict$insert, _p6, model_, model.ripples)
								}),
							_1: A2(
								_elm_lang$core$Platform_Cmd$map,
								function (_p5) {
									return fwd(
										A2(_MichaelCombs28$elm_mdl$Material_Menu$Ripple, _p6, _p5));
								},
								effects)
						};
					case 'Click':
						if (_MichaelCombs28$elm_mdl$Material_Menu$isActive(model)) {
							var _p7 = model.geometry;
							if (_p7.ctor === 'Just') {
								var inside = F2(
									function (_p9, _p8) {
										var _p10 = _p9;
										var _p15 = _p10.y;
										var _p14 = _p10.x;
										var _p11 = _p8;
										var _p13 = _p11.top;
										var _p12 = _p11.left;
										return (_elm_lang$core$Native_Utils.cmp(
											_p12,
											_elm_lang$core$Basics$toFloat(_p14)) < 1) && ((_elm_lang$core$Native_Utils.cmp(
											_elm_lang$core$Basics$toFloat(_p14),
											_p12 + _p11.width) < 1) && ((_elm_lang$core$Native_Utils.cmp(
											_p13,
											_elm_lang$core$Basics$toFloat(_p15)) < 1) && (_elm_lang$core$Native_Utils.cmp(
											_elm_lang$core$Basics$toFloat(_p15),
											_p13 + _p11.height) < 1)));
									});
								if (A2(inside, _p2._0, _p7._0.menu.bounds)) {
									return A2(
										_elm_lang$core$Platform_Cmd_ops['!'],
										model,
										{ctor: '[]'});
								} else {
									var _v6 = fwd,
										_v7 = _MichaelCombs28$elm_mdl$Material_Menu$Close,
										_v8 = model;
									fwd = _v6;
									msg = _v7;
									model = _v8;
									continue update;
								}
							} else {
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									model,
									{ctor: '[]'});
							}
						} else {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{ctor: '[]'});
						}
					default:
						var _p24 = _p2._0;
						var _p16 = _p2._1;
						switch (_p16) {
							case 13:
								if (_MichaelCombs28$elm_mdl$Material_Menu$isActive(model)) {
									var _p17 = model.index;
									if (_p17.ctor === 'Just') {
										var _p19 = _p17._0;
										var cmd = A2(
											_elm_lang$core$Maybe$andThen,
											function (_p18) {
												return function (_) {
													return _.onSelect;
												}(
													function (_) {
														return _.config;
													}(_p18));
											},
											_elm_lang$core$List$head(
												A2(_elm_lang$core$List$drop, _p19, _p24)));
										var _v11 = fwd,
											_v12 = A2(_MichaelCombs28$elm_mdl$Material_Menu$Select, _p19 + 1, cmd),
											_v13 = model;
										fwd = _v11;
										msg = _v12;
										model = _v13;
										continue update;
									} else {
										var _v14 = fwd,
											_v15 = _MichaelCombs28$elm_mdl$Material_Menu$Close,
											_v16 = model;
										fwd = _v14;
										msg = _v15;
										model = _v16;
										continue update;
									}
								} else {
									return A2(
										_elm_lang$core$Platform_Cmd_ops['!'],
										model,
										{ctor: '[]'});
								}
							case 27:
								var _v17 = fwd,
									_v18 = _MichaelCombs28$elm_mdl$Material_Menu$Close,
									_v19 = model;
								fwd = _v17;
								msg = _v18;
								model = _v19;
								continue update;
							case 32:
								if (_MichaelCombs28$elm_mdl$Material_Menu$isActive(model)) {
									var _v20 = fwd,
										_v21 = A2(_MichaelCombs28$elm_mdl$Material_Menu$Key, _p24, 13),
										_v22 = model;
									fwd = _v20;
									msg = _v21;
									model = _v22;
									continue update;
								} else {
									return A2(
										_elm_lang$core$Platform_Cmd_ops['!'],
										model,
										{ctor: '[]'});
								}
							case 40:
								if (_MichaelCombs28$elm_mdl$Material_Menu$isActive(model)) {
									var items = A2(
										_elm_lang$core$List$indexedMap,
										F2(
											function (v0, v1) {
												return {ctor: '_Tuple2', _0: v0, _1: v1};
											}),
										_p24);
									return A3(
										_elm_lang$core$Basics$flip,
										F2(
											function (x, y) {
												return A2(_elm_lang$core$Platform_Cmd_ops['!'], x, y);
											}),
										{ctor: '[]'},
										A2(
											_elm_lang$core$Maybe$withDefault,
											model,
											A2(
												_elm_lang$core$Maybe$map,
												function (_p20) {
													return function (index_) {
														return _elm_lang$core$Native_Utils.update(
															model,
															{
																index: _elm_lang$core$Maybe$Just(index_)
															});
													}(
														_elm_lang$core$Tuple$first(_p20));
												},
												_elm_lang$core$List$head(
													A2(
														_elm_lang$core$List$filter,
														function (_p21) {
															return function (_) {
																return _.enabled;
															}(
																function (_) {
																	return _.config;
																}(
																	_elm_lang$core$Tuple$second(_p21)));
														},
														A2(
															_elm_lang$core$List$drop,
															1 + A2(_elm_lang$core$Maybe$withDefault, -1, model.index),
															A2(_elm_lang$core$Basics_ops['++'], items, items)))))));
								} else {
									return A2(
										_elm_lang$core$Platform_Cmd_ops['!'],
										model,
										{ctor: '[]'});
								}
							case 38:
								if (_MichaelCombs28$elm_mdl$Material_Menu$isActive(model)) {
									var items = A2(
										_elm_lang$core$List$indexedMap,
										F2(
											function (v0, v1) {
												return {ctor: '_Tuple2', _0: v0, _1: v1};
											}),
										_p24);
									return _MichaelCombs28$elm_mdl$Material_Helpers$pure(
										A2(
											_elm_lang$core$Maybe$withDefault,
											model,
											A2(
												_elm_lang$core$Maybe$map,
												function (_p22) {
													return function (index_) {
														return _elm_lang$core$Native_Utils.update(
															model,
															{
																index: _elm_lang$core$Maybe$Just(index_)
															});
													}(
														_elm_lang$core$Tuple$first(_p22));
												},
												_elm_lang$core$List$head(
													A2(
														_elm_lang$core$List$filter,
														function (_p23) {
															return function (_) {
																return _.enabled;
															}(
																function (_) {
																	return _.config;
																}(
																	_elm_lang$core$Tuple$second(_p23)));
														},
														A2(
															_elm_lang$core$List$drop,
															_elm_lang$core$List$length(_p24) - A2(_elm_lang$core$Maybe$withDefault, 0, model.index),
															_elm_lang$core$List$reverse(
																A2(_elm_lang$core$Basics_ops['++'], items, items))))))));
								} else {
									return A2(
										_elm_lang$core$Platform_Cmd_ops['!'],
										model,
										{ctor: '[]'});
								}
							default:
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									model,
									{ctor: '[]'});
						}
				}
			}
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$update_ = F3(
		function (fwd, msg, model) {
			return _MichaelCombs28$elm_mdl$Material_Helpers$partsUpdatePort(
				_elm_lang$core$Maybe$Just(
					A3(_MichaelCombs28$elm_mdl$Material_Menu$update, fwd, msg, model)));
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$pack = A4(
		_MichaelCombs28$elm_parts$Parts$pack,
		_MichaelCombs28$elm_mdl$Material_Menu$update_,
		function (_) {
			return _.menu;
		},
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.update(
					y,
					{menu: x});
			}),
		_MichaelCombs28$elm_mdl$Material_Menu$defaultModel);
	var _MichaelCombs28$elm_mdl$Material_Menu$subs = function (lift) {
		return function (_p25) {
			return _elm_lang$core$Platform_Sub$batch(
				A3(
					_elm_lang$core$Dict$foldl,
					F3(
						function (idx, model, ss) {
							return {
								ctor: '::',
								_0: A2(
									_elm_lang$core$Platform_Sub$map,
									A2(_MichaelCombs28$elm_mdl$Material_Menu$pack, lift, idx),
									_MichaelCombs28$elm_mdl$Material_Menu$subscriptions(model)),
								_1: ss
							};
						}),
					{ctor: '[]'},
					function (_) {
						return _.menu;
					}(_p25)));
		};
	};
	var _MichaelCombs28$elm_mdl$Material_Menu$Open = function (a) {
		return {ctor: 'Open', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Menu$TopRight = {ctor: 'TopRight'};
	var _MichaelCombs28$elm_mdl$Material_Menu$topRight = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{alignment: _MichaelCombs28$elm_mdl$Material_Menu$TopRight});
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$TopLeft = {ctor: 'TopLeft'};
	var _MichaelCombs28$elm_mdl$Material_Menu$topLeft = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{alignment: _MichaelCombs28$elm_mdl$Material_Menu$TopLeft});
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$delay = F4(
		function (alignment, height, offsetTop, offsetHeight) {
			var t = (_elm_lang$core$Native_Utils.eq(alignment, _MichaelCombs28$elm_mdl$Material_Menu$TopLeft) || _elm_lang$core$Native_Utils.eq(alignment, _MichaelCombs28$elm_mdl$Material_Menu$TopRight)) ? ((((height - offsetTop) - offsetHeight) / height) * _MichaelCombs28$elm_mdl$Material_Menu$transitionDuration) : ((offsetTop / height) * _MichaelCombs28$elm_mdl$Material_Menu$transitionDuration);
			return A2(
				_MichaelCombs28$elm_mdl$Material_Options$css,
				'transition-delay',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(t),
					's'));
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$view1 = F8(
		function (lift, config, model, offsetTop, offsetHeight, index, summary, item) {
			var canSelect = summary.config.enabled && (!_elm_lang$core$Native_Utils.eq(summary.config.onSelect, _elm_lang$core$Maybe$Nothing));
			var hasRipple = config.ripple && canSelect;
			var ripple = function (_p26) {
				return lift(
					A2(_MichaelCombs28$elm_mdl$Material_Menu$Ripple, index, _p26));
			};
			return A5(
				_MichaelCombs28$elm_mdl$Material_Options$apply,
				summary,
				_elm_lang$html$Html$li,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-menu__item'),
					_1: {
						ctor: '::',
						_0: A2(
							_MichaelCombs28$elm_mdl$Material_Options$when,
							_MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-ripple-effect'),
							config.ripple),
						_1: {
							ctor: '::',
							_0: A2(
								_MichaelCombs28$elm_mdl$Material_Options$when,
								_MichaelCombs28$elm_mdl$Material_Options$cs('mdl-menu__item--full-bleed-divider'),
								summary.config.divider),
							_1: {
								ctor: '::',
								_0: A2(
									_MichaelCombs28$elm_mdl$Material_Options$when,
									A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'background-color', 'rgb(238,238,238)'),
									_elm_lang$core$Native_Utils.eq(
										model.index,
										_elm_lang$core$Maybe$Just(index))),
								_1: {
									ctor: '::',
									_0: function () {
										var _p27 = {
											ctor: '_Tuple2',
											_0: model.geometry,
											_1: _MichaelCombs28$elm_mdl$Material_Menu$isActive(model)
										};
										if (((_p27.ctor === '_Tuple2') && (_p27._0.ctor === 'Just')) && (_p27._1 === true)) {
											return A4(_MichaelCombs28$elm_mdl$Material_Menu$delay, config.alignment, _p27._0._0.menu.bounds.height, offsetTop, offsetHeight);
										} else {
											return _MichaelCombs28$elm_mdl$Material_Options$nop;
										}
									}(),
									_1: {
										ctor: '::',
										_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'display', 'flex'),
										_1: {
											ctor: '::',
											_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'align-items', 'center'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$filterMap,
						_elm_lang$core$Basics$identity,
						{
							ctor: '::',
							_0: canSelect ? _elm_lang$core$Maybe$Just(
								_elm_lang$html$Html_Events$onClick(
									lift(
										A2(_MichaelCombs28$elm_mdl$Material_Menu$Select, index, summary.config.onSelect)))) : _elm_lang$core$Maybe$Nothing,
							_1: {
								ctor: '::',
								_0: (!summary.config.enabled) ? _elm_lang$core$Maybe$Just(
									A2(_elm_lang$html$Html_Attributes$attribute, 'disabled', 'disabled')) : _elm_lang$core$Maybe$Nothing,
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Maybe$Just(
										A2(
											_elm_lang$html$Html_Attributes$property,
											'tabindex',
											_elm_lang$core$Json_Encode$string('-1'))),
									_1: {ctor: '[]'}
								}
							}
						}),
					hasRipple ? {
						ctor: '::',
						_0: A2(_MichaelCombs28$elm_mdl$Material_Ripple$downOn_, ripple, 'mousedown'),
						_1: {
							ctor: '::',
							_0: A2(_MichaelCombs28$elm_mdl$Material_Ripple$downOn_, ripple, 'touchstart'),
							_1: {
								ctor: '::',
								_0: A2(_MichaelCombs28$elm_mdl$Material_Ripple$upOn_, ripple, 'mouseup'),
								_1: {
									ctor: '::',
									_0: A2(_MichaelCombs28$elm_mdl$Material_Ripple$upOn_, ripple, 'mouseleave'),
									_1: {
										ctor: '::',
										_0: A2(_MichaelCombs28$elm_mdl$Material_Ripple$upOn_, ripple, 'touchend'),
										_1: {
											ctor: '::',
											_0: A2(_MichaelCombs28$elm_mdl$Material_Ripple$upOn_, ripple, 'blur'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					} : {ctor: '[]'}),
				hasRipple ? A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					item.html,
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$map,
							ripple,
							A2(
								_MichaelCombs28$elm_mdl$Material_Ripple$view_,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('mdl-menu__item-ripple-container'),
									_1: {ctor: '[]'}
								},
								A2(
									_elm_lang$core$Maybe$withDefault,
									_MichaelCombs28$elm_mdl$Material_Ripple$model,
									A2(_elm_lang$core$Dict$get, index, model.ripples)))),
						_1: {ctor: '[]'}
					}) : item.html);
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$BottomRight = {ctor: 'BottomRight'};
	var _MichaelCombs28$elm_mdl$Material_Menu$bottomRight = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{alignment: _MichaelCombs28$elm_mdl$Material_Menu$BottomRight});
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$BottomLeft = {ctor: 'BottomLeft'};
	var _MichaelCombs28$elm_mdl$Material_Menu$defaultConfig = {alignment: _MichaelCombs28$elm_mdl$Material_Menu$BottomLeft, ripple: false, icon: 'more_vert'};
	var _MichaelCombs28$elm_mdl$Material_Menu$bottomLeft = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{alignment: _MichaelCombs28$elm_mdl$Material_Menu$BottomLeft});
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$containerGeometry = F2(
		function (alignment, geometry) {
			return _MichaelCombs28$elm_mdl$Material_Options$many(
				{
					ctor: '::',
					_0: A2(
						_MichaelCombs28$elm_mdl$Material_Options$css,
						'width',
						_MichaelCombs28$elm_mdl$Material_Menu$toPx(geometry.menu.bounds.width)),
					_1: {
						ctor: '::',
						_0: A2(
							_MichaelCombs28$elm_mdl$Material_Options$css,
							'height',
							_MichaelCombs28$elm_mdl$Material_Menu$toPx(geometry.menu.bounds.height)),
						_1: {
							ctor: '::',
							_0: (_elm_lang$core$Native_Utils.eq(alignment, _MichaelCombs28$elm_mdl$Material_Menu$BottomRight) || _elm_lang$core$Native_Utils.eq(alignment, _MichaelCombs28$elm_mdl$Material_Menu$BottomLeft)) ? A2(
								_MichaelCombs28$elm_mdl$Material_Options$css,
								'top',
								_MichaelCombs28$elm_mdl$Material_Menu$toPx(geometry.button.offsetTop + geometry.button.offsetHeight)) : _MichaelCombs28$elm_mdl$Material_Options$nop,
							_1: {
								ctor: '::',
								_0: function () {
									if (_elm_lang$core$Native_Utils.eq(alignment, _MichaelCombs28$elm_mdl$Material_Menu$BottomRight) || _elm_lang$core$Native_Utils.eq(alignment, _MichaelCombs28$elm_mdl$Material_Menu$TopRight)) {
										var right = function (e) {
											return e.bounds.left + e.bounds.width;
										};
										return A2(
											_MichaelCombs28$elm_mdl$Material_Options$css,
											'right',
											_MichaelCombs28$elm_mdl$Material_Menu$toPx(
												right(geometry.container) - right(geometry.menu)));
									} else {
										return _MichaelCombs28$elm_mdl$Material_Options$nop;
									}
								}(),
								_1: {
									ctor: '::',
									_0: function () {
										if (_elm_lang$core$Native_Utils.eq(alignment, _MichaelCombs28$elm_mdl$Material_Menu$TopLeft) || _elm_lang$core$Native_Utils.eq(alignment, _MichaelCombs28$elm_mdl$Material_Menu$TopRight)) {
											var bottom = geometry.container.bounds.top + geometry.container.bounds.height;
											return A2(
												_MichaelCombs28$elm_mdl$Material_Options$css,
												'bottom',
												_MichaelCombs28$elm_mdl$Material_Menu$toPx(bottom - geometry.button.bounds.top));
										} else {
											return _MichaelCombs28$elm_mdl$Material_Options$nop;
										}
									}(),
									_1: {
										ctor: '::',
										_0: (_elm_lang$core$Native_Utils.eq(alignment, _MichaelCombs28$elm_mdl$Material_Menu$TopLeft) || _elm_lang$core$Native_Utils.eq(alignment, _MichaelCombs28$elm_mdl$Material_Menu$BottomLeft)) ? A2(
											_MichaelCombs28$elm_mdl$Material_Options$css,
											'left',
											_MichaelCombs28$elm_mdl$Material_Menu$toPx(geometry.menu.offsetLeft)) : _MichaelCombs28$elm_mdl$Material_Options$nop,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$view = F4(
		function (lift, model, properties, items) {
			var itemSummaries = A2(
				_elm_lang$core$List$map,
				function (_p28) {
					return A2(
						_MichaelCombs28$elm_mdl$Material_Options$collect,
						_MichaelCombs28$elm_mdl$Material_Menu$defaultItemConfig,
						function (_) {
							return _.options;
						}(_p28));
				},
				items);
			var numItems = _elm_lang$core$List$length(items);
			var summary = A2(_MichaelCombs28$elm_mdl$Material_Options$collect, _MichaelCombs28$elm_mdl$Material_Menu$defaultConfig, properties);
			var config = summary.config;
			var alignment = function () {
				var _p29 = config.alignment;
				switch (_p29.ctor) {
					case 'BottomLeft':
						return _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-menu--bottom-left');
					case 'BottomRight':
						return _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-menu--bottom-right');
					case 'TopLeft':
						return _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-menu--top-left');
					default:
						return _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-menu--top-right');
				}
			}();
			return A5(
				_MichaelCombs28$elm_mdl$Material_Options$apply,
				summary,
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'position', 'relative'),
					_1: properties
				},
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$map,
						lift,
						A3(
							_MichaelCombs28$elm_mdl$Material_Options$styled,
							_elm_lang$html$Html$button,
							{
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button'),
								_1: {
									ctor: '::',
									_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-button'),
									_1: {
										ctor: '::',
										_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-button--icon'),
										_1: {
											ctor: '::',
											_0: A2(
												_MichaelCombs28$elm_mdl$Material_Options$when,
												_MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
													_MichaelCombs28$elm_mdl$Material_Menu$onKeyDown(
														_MichaelCombs28$elm_mdl$Material_Menu$Key(itemSummaries))),
												_MichaelCombs28$elm_mdl$Material_Menu$isActive(model)),
											_1: {
												ctor: '::',
												_0: A2(
													_MichaelCombs28$elm_mdl$Material_Options$when,
													_MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
														A2(_MichaelCombs28$elm_mdl$Material_Menu$onClick, _MichaelCombs28$elm_mdl$Material_Menu_Geometry$decode, _MichaelCombs28$elm_mdl$Material_Menu$Open)),
													!_elm_lang$core$Native_Utils.eq(model.animationState, _MichaelCombs28$elm_mdl$Material_Menu$Opened)),
												_1: {
													ctor: '::',
													_0: A2(
														_MichaelCombs28$elm_mdl$Material_Options$when,
														_MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
															_elm_lang$html$Html_Events$onClick(_MichaelCombs28$elm_mdl$Material_Menu$Close)),
														_MichaelCombs28$elm_mdl$Material_Menu$isActive(model)),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							},
							{
								ctor: '::',
								_0: A2(
									_MichaelCombs28$elm_mdl$Material_Icon$view,
									config.icon,
									{
										ctor: '::',
										_0: _MichaelCombs28$elm_mdl$Material_Options$cs('material-icons'),
										_1: {
											ctor: '::',
											_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'pointer-events', 'none'),
											_1: {ctor: '[]'}
										}
									}),
								_1: {ctor: '[]'}
							})),
					_1: {
						ctor: '::',
						_0: A3(
							_MichaelCombs28$elm_mdl$Material_Options$styled,
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-menu__container'),
								_1: {
									ctor: '::',
									_0: _MichaelCombs28$elm_mdl$Material_Options$cs('is-upgraded'),
									_1: {
										ctor: '::',
										_0: A2(
											_MichaelCombs28$elm_mdl$Material_Options$when,
											_MichaelCombs28$elm_mdl$Material_Options$cs('is-visible'),
											_elm_lang$core$Native_Utils.eq(model.animationState, _MichaelCombs28$elm_mdl$Material_Menu$Opened) || _elm_lang$core$Native_Utils.eq(model.animationState, _MichaelCombs28$elm_mdl$Material_Menu$Closing)),
										_1: {
											ctor: '::',
											_0: A2(
												_MichaelCombs28$elm_mdl$Material_Menu$withGeometry,
												model,
												_MichaelCombs28$elm_mdl$Material_Menu$containerGeometry(config.alignment)),
											_1: {ctor: '[]'}
										}
									}
								}
							},
							{
								ctor: '::',
								_0: A3(
									_MichaelCombs28$elm_mdl$Material_Options$styled,
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-menu__outline'),
										_1: {
											ctor: '::',
											_0: alignment,
											_1: {
												ctor: '::',
												_0: A2(
													_MichaelCombs28$elm_mdl$Material_Menu$withGeometry,
													model,
													function (geometry) {
														return _MichaelCombs28$elm_mdl$Material_Options$many(
															{
																ctor: '::',
																_0: A2(
																	_MichaelCombs28$elm_mdl$Material_Options$css,
																	'width',
																	_MichaelCombs28$elm_mdl$Material_Menu$toPx(geometry.menu.bounds.width)),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_MichaelCombs28$elm_mdl$Material_Options$css,
																		'height',
																		_MichaelCombs28$elm_mdl$Material_Menu$toPx(geometry.menu.bounds.height)),
																	_1: {ctor: '[]'}
																}
															});
													}),
												_1: {ctor: '[]'}
											}
										}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A3(
										_MichaelCombs28$elm_mdl$Material_Options$styled,
										_elm_lang$html$Html$ul,
										{
											ctor: '::',
											_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-menu'),
											_1: {
												ctor: '::',
												_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-menu'),
												_1: {
													ctor: '::',
													_0: A2(
														_MichaelCombs28$elm_mdl$Material_Options$when,
														_MichaelCombs28$elm_mdl$Material_Options$cs('is-animating'),
														_elm_lang$core$Native_Utils.eq(model.animationState, _MichaelCombs28$elm_mdl$Material_Menu$Opening) || _elm_lang$core$Native_Utils.eq(model.animationState, _MichaelCombs28$elm_mdl$Material_Menu$Closing)),
													_1: {
														ctor: '::',
														_0: A2(
															_MichaelCombs28$elm_mdl$Material_Menu$withGeometry,
															model,
															A2(_MichaelCombs28$elm_mdl$Material_Menu$clip, model, config)),
														_1: {
															ctor: '::',
															_0: alignment,
															_1: {ctor: '[]'}
														}
													}
												}
											}
										},
										function () {
											var _p30 = model.geometry;
											if (_p30.ctor === 'Just') {
												var _p31 = _p30._0;
												return A6(
													_elm_lang$core$List$map5,
													A3(_MichaelCombs28$elm_mdl$Material_Menu$view1, lift, config, model),
													_p31.offsetTops,
													_p31.offsetHeights,
													A2(_elm_lang$core$List$range, 0, numItems - 1),
													itemSummaries,
													items);
											} else {
												return A4(
													_elm_lang$core$List$map3,
													A5(_MichaelCombs28$elm_mdl$Material_Menu$view1, lift, config, model, 0, 0),
													A2(_elm_lang$core$List$range, 0, numItems - 1),
													itemSummaries,
													items);
											}
										}()),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Menu$render = A5(
		_MichaelCombs28$elm_parts$Parts$create,
		_MichaelCombs28$elm_mdl$Material_Menu$view,
		_MichaelCombs28$elm_mdl$Material_Menu$update_,
		function (_) {
			return _.menu;
		},
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.update(
					y,
					{menu: x});
			}),
		_MichaelCombs28$elm_mdl$Material_Menu$defaultModel);

	var _MichaelCombs28$elm_mdl$Material_Snackbar$enqueue = F2(
		function (contents, model) {
			return _elm_lang$core$Native_Utils.update(
				model,
				{
					queue: A2(
						_elm_lang$core$List$append,
						model.queue,
						{
							ctor: '::',
							_0: contents,
							_1: {ctor: '[]'}
						})
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Snackbar$snackbar = F3(
		function (payload, message, label) {
			return {
				message: message,
				action: _elm_lang$core$Maybe$Just(label),
				payload: payload,
				timeout: 2750,
				fade: 250
			};
		});
	var _MichaelCombs28$elm_mdl$Material_Snackbar$toast = F2(
		function (payload, message) {
			return {message: message, action: _elm_lang$core$Maybe$Nothing, payload: payload, timeout: 2750, fade: 250};
		});
	var _MichaelCombs28$elm_mdl$Material_Snackbar$Contents = F5(
		function (a, b, c, d, e) {
			return {message: a, action: b, payload: c, timeout: d, fade: e};
		});
	var _MichaelCombs28$elm_mdl$Material_Snackbar$Model = F3(
		function (a, b, c) {
			return {queue: a, state: b, seq: c};
		});
	var _MichaelCombs28$elm_mdl$Material_Snackbar$Fading = function (a) {
		return {ctor: 'Fading', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$Active = function (a) {
		return {ctor: 'Active', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$Inert = {ctor: 'Inert'};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$model = {
		queue: {ctor: '[]'},
		state: _MichaelCombs28$elm_mdl$Material_Snackbar$Inert,
		seq: -1
	};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$Clicked = {ctor: 'Clicked'};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$Timeout = {ctor: 'Timeout'};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$Move = F2(
		function (a, b) {
			return {ctor: 'Move', _0: a, _1: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Snackbar$next = function (model) {
		return _elm_lang$core$Platform_Cmd$map(
			_MichaelCombs28$elm_mdl$Material_Snackbar$Move(model.seq));
	};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$view = function (model) {
		var isActive = function () {
			var _p0 = model.state;
			switch (_p0.ctor) {
				case 'Inert':
					return false;
				case 'Active':
					return true;
				default:
					return false;
			}
		}();
		var contents = function () {
			var _p1 = model.state;
			switch (_p1.ctor) {
				case 'Inert':
					return _elm_lang$core$Maybe$Nothing;
				case 'Active':
					return _elm_lang$core$Maybe$Just(_p1._0);
				default:
					return _elm_lang$core$Maybe$Just(_p1._0);
			}
		}();
		var action = A2(
			_elm_lang$core$Maybe$andThen,
			function (_) {
				return _.action;
			},
			contents);
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'mdl-js-snackbar', _1: true},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'mdl-snackbar', _1: true},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'mdl-snackbar--active', _1: isActive},
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(_MichaelCombs28$elm_mdl$Material_Helpers$aria, 'hidden', !isActive),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('mdl-snackbar__text'),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '[]'},
						A2(
							_elm_lang$core$Maybe$map,
							function (c) {
								return {
									ctor: '::',
									_0: _elm_lang$html$Html$text(c.message),
									_1: {ctor: '[]'}
								};
							},
							contents))),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('mdl-snackbar__action'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$type_('button'),
								_1: {
									ctor: '::',
									_0: A2(
										_MichaelCombs28$elm_mdl$Material_Helpers$aria,
										'hidden',
										A2(
											_elm_lang$core$Maybe$withDefault,
											true,
											A2(
												_elm_lang$core$Maybe$map,
												_elm_lang$core$Basics$always(!isActive),
												action))),
									_1: A2(
										_elm_lang$core$Maybe$withDefault,
										{ctor: '[]'},
										A2(
											_elm_lang$core$Maybe$map,
											_elm_lang$core$Basics$always(
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(
														A2(_MichaelCombs28$elm_mdl$Material_Snackbar$Move, model.seq, _MichaelCombs28$elm_mdl$Material_Snackbar$Clicked)),
													_1: {ctor: '[]'}
												}),
											action))
								}
							}
						},
						A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '[]'},
							A2(
								_elm_lang$core$Maybe$map,
								function (action) {
									return {
										ctor: '::',
										_0: _elm_lang$html$Html$text(action),
										_1: {ctor: '[]'}
									};
								},
								action))),
					_1: {ctor: '[]'}
				}
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$Click = function (a) {
		return {ctor: 'Click', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$End = function (a) {
		return {ctor: 'End', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$Begin = function (a) {
		return {ctor: 'Begin', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$tryDequeue = function (model) {
		var _p2 = {ctor: '_Tuple2', _0: model.state, _1: model.queue};
		if (((_p2.ctor === '_Tuple2') && (_p2._0.ctor === 'Inert')) && (_p2._1.ctor === '::')) {
			var _p3 = _p2._1._0;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{
						state: _MichaelCombs28$elm_mdl$Material_Snackbar$Active(_p3),
						queue: _p2._1._1,
						seq: model.seq + 1
					}),
				_1: _elm_lang$core$Platform_Cmd$batch(
					{
						ctor: '::',
						_0: A2(
							_elm_lang$core$Platform_Cmd$map,
							_MichaelCombs28$elm_mdl$Material_Snackbar$Move(model.seq + 1),
							A2(_MichaelCombs28$elm_mdl$Material_Helpers$delay, _p3.timeout, _MichaelCombs28$elm_mdl$Material_Snackbar$Timeout)),
						_1: {
							ctor: '::',
							_0: _MichaelCombs28$elm_mdl$Material_Helpers$cmd(
								_MichaelCombs28$elm_mdl$Material_Snackbar$Begin(_p3.payload)),
							_1: {ctor: '[]'}
						}
					})
			};
		} else {
			return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
		}
	};
	var _MichaelCombs28$elm_mdl$Material_Snackbar$move = F2(
		function (transition, model) {
			var _p4 = {ctor: '_Tuple2', _0: model.state, _1: transition};
			_v3_4:
			do {
				if (_p4.ctor === '_Tuple2') {
					if (_p4._1.ctor === 'Clicked') {
						if (_p4._0.ctor === 'Active') {
							var _p5 = _p4._0._0;
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									model,
									{
										state: _MichaelCombs28$elm_mdl$Material_Snackbar$Fading(_p5)
									}),
								_1: _elm_lang$core$Platform_Cmd$batch(
									{
										ctor: '::',
										_0: A2(
											_MichaelCombs28$elm_mdl$Material_Snackbar$next,
											model,
											A2(_MichaelCombs28$elm_mdl$Material_Helpers$delay, _p5.fade, _MichaelCombs28$elm_mdl$Material_Snackbar$Timeout)),
										_1: {
											ctor: '::',
											_0: _MichaelCombs28$elm_mdl$Material_Helpers$cmd(
												_MichaelCombs28$elm_mdl$Material_Snackbar$Click(_p5.payload)),
											_1: {ctor: '[]'}
										}
									})
							};
						} else {
							break _v3_4;
						}
					} else {
						switch (_p4._0.ctor) {
							case 'Inert':
								return _MichaelCombs28$elm_mdl$Material_Snackbar$tryDequeue(model);
							case 'Active':
								var _p6 = _p4._0._0;
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.update(
										model,
										{
											state: _MichaelCombs28$elm_mdl$Material_Snackbar$Fading(_p6)
										}),
									_1: _elm_lang$core$Platform_Cmd$batch(
										{
											ctor: '::',
											_0: A2(
												_MichaelCombs28$elm_mdl$Material_Snackbar$next,
												model,
												A2(_MichaelCombs28$elm_mdl$Material_Helpers$delay, _p6.fade, _MichaelCombs28$elm_mdl$Material_Snackbar$Timeout)),
											_1: {ctor: '[]'}
										})
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.update(
										model,
										{state: _MichaelCombs28$elm_mdl$Material_Snackbar$Inert}),
									_1: _elm_lang$core$Platform_Cmd$batch(
										{
											ctor: '::',
											_0: A2(
												_MichaelCombs28$elm_mdl$Material_Snackbar$next,
												model,
												_MichaelCombs28$elm_mdl$Material_Helpers$cmd(_MichaelCombs28$elm_mdl$Material_Snackbar$Timeout)),
											_1: {
												ctor: '::',
												_0: _MichaelCombs28$elm_mdl$Material_Helpers$cmd(
													_MichaelCombs28$elm_mdl$Material_Snackbar$End(_p4._0._0.payload)),
												_1: {ctor: '[]'}
											}
										})
								};
						}
					}
				} else {
					break _v3_4;
				}
			} while(false);
			return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
		});
	var _MichaelCombs28$elm_mdl$Material_Snackbar$update = F2(
		function (action, model) {
			var _p7 = action;
			if (_p7.ctor === 'Move') {
				return _elm_lang$core$Native_Utils.eq(_p7._0, model.seq) ? A2(_MichaelCombs28$elm_mdl$Material_Snackbar$move, _p7._1, model) : {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			} else {
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			}
		});
	var _MichaelCombs28$elm_mdl$Material_Snackbar$add = F2(
		function (contents, model) {
			return _MichaelCombs28$elm_mdl$Material_Snackbar$tryDequeue(
				A2(_MichaelCombs28$elm_mdl$Material_Snackbar$enqueue, contents, model));
		});

	var _elm_lang$html$Html_Keyed$node = _elm_lang$virtual_dom$VirtualDom$keyedNode;
	var _elm_lang$html$Html_Keyed$ol = _elm_lang$html$Html_Keyed$node('ol');
	var _elm_lang$html$Html_Keyed$ul = _elm_lang$html$Html_Keyed$node('ul');

	var _elm_lang$window$Native_Window = function()
	{

	var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
		callback(_elm_lang$core$Native_Scheduler.succeed({
			width: window.innerWidth,
			height: window.innerHeight
		}));
	});

	return {
		size: size
	};

	}();
	var _elm_lang$window$Window_ops = _elm_lang$window$Window_ops || {};
	_elm_lang$window$Window_ops['&>'] = F2(
		function (task1, task2) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p0) {
					return task2;
				},
				task1);
		});
	var _elm_lang$window$Window$onSelfMsg = F3(
		function (router, dimensions, state) {
			var _p1 = state;
			if (_p1.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				var send = function (_p2) {
					var _p3 = _p2;
					return A2(
						_elm_lang$core$Platform$sendToApp,
						router,
						_p3._0(dimensions));
				};
				return A2(
					_elm_lang$window$Window_ops['&>'],
					_elm_lang$core$Task$sequence(
						A2(_elm_lang$core$List$map, send, _p1._0.subs)),
					_elm_lang$core$Task$succeed(state));
			}
		});
	var _elm_lang$window$Window$init = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
	var _elm_lang$window$Window$size = _elm_lang$window$Native_Window.size;
	var _elm_lang$window$Window$width = A2(
		_elm_lang$core$Task$map,
		function (_) {
			return _.width;
		},
		_elm_lang$window$Window$size);
	var _elm_lang$window$Window$height = A2(
		_elm_lang$core$Task$map,
		function (_) {
			return _.height;
		},
		_elm_lang$window$Window$size);
	var _elm_lang$window$Window$onEffects = F3(
		function (router, newSubs, oldState) {
			var _p4 = {ctor: '_Tuple2', _0: oldState, _1: newSubs};
			if (_p4._0.ctor === 'Nothing') {
				if (_p4._1.ctor === '[]') {
					return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
				} else {
					return A2(
						_elm_lang$core$Task$andThen,
						function (pid) {
							return _elm_lang$core$Task$succeed(
								_elm_lang$core$Maybe$Just(
									{subs: newSubs, pid: pid}));
						},
						_elm_lang$core$Process$spawn(
							A3(
								_elm_lang$dom$Dom_LowLevel$onWindow,
								'resize',
								_elm_lang$core$Json_Decode$succeed(
									{ctor: '_Tuple0'}),
								function (_p5) {
									return A2(
										_elm_lang$core$Task$andThen,
										_elm_lang$core$Platform$sendToSelf(router),
										_elm_lang$window$Window$size);
								})));
				}
			} else {
				if (_p4._1.ctor === '[]') {
					return A2(
						_elm_lang$window$Window_ops['&>'],
						_elm_lang$core$Process$kill(_p4._0._0.pid),
						_elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing));
				} else {
					return _elm_lang$core$Task$succeed(
						_elm_lang$core$Maybe$Just(
							{subs: newSubs, pid: _p4._0._0.pid}));
				}
			}
		});
	var _elm_lang$window$Window$subscription = _elm_lang$core$Native_Platform.leaf('Window');
	var _elm_lang$window$Window$Size = F2(
		function (a, b) {
			return {width: a, height: b};
		});
	var _elm_lang$window$Window$MySub = function (a) {
		return {ctor: 'MySub', _0: a};
	};
	var _elm_lang$window$Window$resizes = function (tagger) {
		return _elm_lang$window$Window$subscription(
			_elm_lang$window$Window$MySub(tagger));
	};
	var _elm_lang$window$Window$subMap = F2(
		function (func, _p6) {
			var _p7 = _p6;
			return _elm_lang$window$Window$MySub(
				function (_p8) {
					return func(
						_p7._0(_p8));
				});
		});
	_elm_lang$core$Native_Platform.effectManagers['Window'] = {pkg: 'elm-lang/window', init: _elm_lang$window$Window$init, onEffects: _elm_lang$window$Window$onEffects, onSelfMsg: _elm_lang$window$Window$onSelfMsg, tag: 'sub', subMap: _elm_lang$window$Window$subMap};

	var _MichaelCombs28$elm_mdl$Material_Layout$drawerView = F3(
		function (lift, isVisible, elems) {
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'mdl-layout__drawer', _1: true},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'is-visible', _1: isVisible},
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html_Attributes$attribute,
							'aria-hidden',
							isVisible ? 'false' : 'true'),
						_1: {ctor: '[]'}
					}
				},
				elems);
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$onKeypressFilterSpaceAndEnter = A2(_elm_lang$html$Html_Attributes$attribute, 'onkeypress', '\n  (function (evt) {\n     if (evt && evt.type === \"keydown\" && (evt.keyCode === 32 || evt.keyCode === 13)) {\n       evt.preventDefault();\n     }\n   })(window.event);\n  ');
	var _MichaelCombs28$elm_mdl$Material_Layout$toList = function (x) {
		var _p0 = x;
		if (_p0.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p0._0,
				_1: {ctor: '[]'}
			};
		}
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$isWaterfall = function (mode) {
		var _p1 = mode;
		if (_p1.ctor === 'Waterfall') {
			return true;
		} else {
			return false;
		}
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$row = function (styles) {
		return _MichaelCombs28$elm_mdl$Material_Options$div(
			{
				ctor: '::',
				_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__header-row'),
				_1: styles
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$link = F2(
		function (styles, contents) {
			return A3(
				_MichaelCombs28$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$a,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-navigation__link'),
					_1: {
						ctor: '::',
						_0: _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
							A2(_elm_lang$html$Html_Attributes$attribute, 'tabindex', '1')),
						_1: styles
					}
				},
				contents);
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$href = function (_p2) {
		return _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
			_elm_lang$html$Html_Attributes$href(_p2));
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$onClick = function (_p3) {
		return _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
			_elm_lang$html$Html_Events$onClick(_p3));
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$navigation = F2(
		function (styles, contents) {
			return A3(
				_MichaelCombs28$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$nav,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-navigation'),
					_1: styles
				},
				contents);
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$title = function (styles) {
		return _MichaelCombs28$elm_mdl$Material_Options$span(
			{
				ctor: '::',
				_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__title'),
				_1: styles
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$spacer = A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('mdl-layout-spacer'),
			_1: {ctor: '[]'}
		},
		{ctor: '[]'});
	var _MichaelCombs28$elm_mdl$Material_Layout$onSelectTab = function (f) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						onSelectTab: _elm_lang$core$Maybe$Just(
							function (_p4) {
								return _elm_lang$html$Html_Events$onClick(
									f(_p4));
							})
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$moreTabs = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{moreTabs: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$selectedTab = function (k) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{selectedTab: k});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$transparentHeader = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{transparentHeader: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$rippleTabs = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{rippleTabs: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$fixedTabs = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{fixedTabs: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$fixedDrawer = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{fixedDrawer: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$fixedHeader = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{fixedHeader: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$setTabsWidth_ = F2(
		function (width, model) {
			var x = model.tabScrollState;
			return _elm_lang$core$Native_Utils.update(
				model,
				{
					tabScrollState: _elm_lang$core$Native_Utils.update(
						x,
						{
							width: _elm_lang$core$Maybe$Just(width)
						})
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$setTabsWidth = F2(
		function (w, container) {
			return _elm_lang$core$Native_Utils.update(
				container,
				{
					layout: A2(_MichaelCombs28$elm_mdl$Material_Layout$setTabsWidth_, w, container.layout)
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$defaultTabScrollState = {canScrollRight: true, canScrollLeft: false, width: _elm_lang$core$Maybe$Nothing};
	var _MichaelCombs28$elm_mdl$Material_Layout$defaultModel = {ripples: _elm_lang$core$Dict$empty, isSmallScreen: false, isCompact: false, isAnimating: false, isScrolled: false, isDrawerOpen: false, tabScrollState: _MichaelCombs28$elm_mdl$Material_Layout$defaultTabScrollState};
	var _MichaelCombs28$elm_mdl$Material_Layout$TabScrollState = F3(
		function (a, b, c) {
			return {canScrollLeft: a, canScrollRight: b, width: c};
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$Model = F7(
		function (a, b, c, d, e, f, g) {
			return {ripples: a, isSmallScreen: b, isCompact: c, isAnimating: d, isScrolled: e, isDrawerOpen: f, tabScrollState: g};
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$Config = F9(
		function (a, b, c, d, e, f, g, h, i) {
			return {fixedHeader: a, fixedDrawer: b, fixedTabs: c, rippleTabs: d, mode: e, selectedTab: f, onSelectTab: g, transparentHeader: h, moreTabs: i};
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$Contents = F4(
		function (a, b, c, d) {
			return {header: a, drawer: b, tabs: c, main: d};
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$Ripple = F2(
		function (a, b) {
			return {ctor: 'Ripple', _0: a, _1: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$NOP = {ctor: 'NOP'};
	var _MichaelCombs28$elm_mdl$Material_Layout$TransitionEnd = {ctor: 'TransitionEnd'};
	var _MichaelCombs28$elm_mdl$Material_Layout$TransitionHeader = function (a) {
		return {ctor: 'TransitionHeader', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$update_ = F3(
		function (f, action, model) {
			update_:
			while (true) {
				var _p5 = action;
				switch (_p5.ctor) {
					case 'NOP':
						return _elm_lang$core$Maybe$Nothing;
					case 'Resize':
						var _p6 = _p5._0;
						var tabScrollState = A2(
							_elm_lang$core$Maybe$withDefault,
							model.tabScrollState,
							A2(
								_elm_lang$core$Maybe$map,
								function (tabsWidth) {
									var tabScrollState = model.tabScrollState;
									return _elm_lang$core$Native_Utils.update(
										tabScrollState,
										{
											canScrollRight: _elm_lang$core$Native_Utils.cmp(tabsWidth + (2 * 56), _p6) > 0
										});
								},
								model.tabScrollState.width));
						var isSmall = _elm_lang$core$Native_Utils.cmp(1024, _p6) > 0;
						return (_elm_lang$core$Native_Utils.eq(isSmall, model.isSmallScreen) && _elm_lang$core$Native_Utils.eq(tabScrollState.canScrollRight, model.tabScrollState.canScrollRight)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
							_MichaelCombs28$elm_mdl$Material_Helpers$pure(
								_elm_lang$core$Native_Utils.update(
									model,
									{isSmallScreen: isSmall, isDrawerOpen: (!isSmall) && model.isDrawerOpen, tabScrollState: tabScrollState})));
					case 'ToggleDrawer':
						return _elm_lang$core$Maybe$Just(
							_MichaelCombs28$elm_mdl$Material_Helpers$pure(
								_elm_lang$core$Native_Utils.update(
									model,
									{isDrawerOpen: !model.isDrawerOpen})));
					case 'Ripple':
						var _p8 = _p5._0;
						return _elm_lang$core$Maybe$Just(
							A2(
								_MichaelCombs28$elm_mdl$Material_Helpers$map2nd,
								_elm_lang$core$Platform_Cmd$map(
									function (_p7) {
										return f(
											A2(_MichaelCombs28$elm_mdl$Material_Layout$Ripple, _p8, _p7));
									}),
								A2(
									_MichaelCombs28$elm_mdl$Material_Helpers$map1st,
									function (ripple_) {
										return _elm_lang$core$Native_Utils.update(
											model,
											{
												ripples: A3(_elm_lang$core$Dict$insert, _p8, ripple_, model.ripples)
											});
									},
									A2(
										_MichaelCombs28$elm_mdl$Material_Ripple$update,
										_p5._1,
										A2(
											_elm_lang$core$Maybe$withDefault,
											_MichaelCombs28$elm_mdl$Material_Ripple$model,
											A2(_elm_lang$core$Dict$get, _p8, model.ripples))))));
					case 'ScrollTab':
						var _p9 = _p5._0;
						return (!_elm_lang$core$Native_Utils.eq(model.tabScrollState, _p9)) ? _elm_lang$core$Maybe$Just(
							_MichaelCombs28$elm_mdl$Material_Helpers$pure(
								_elm_lang$core$Native_Utils.update(
									model,
									{tabScrollState: _p9}))) : _elm_lang$core$Maybe$Nothing;
					case 'ScrollPane':
						var isScrolled = _elm_lang$core$Native_Utils.cmp(0.0, _p5._1) < 0;
						if (!_elm_lang$core$Native_Utils.eq(isScrolled, model.isScrolled)) {
							var _v3 = f,
								_v4 = _MichaelCombs28$elm_mdl$Material_Layout$TransitionHeader(
								{toCompact: isScrolled, fixedHeader: _p5._0}),
								_v5 = _elm_lang$core$Native_Utils.update(
								model,
								{isScrolled: isScrolled});
							f = _v3;
							action = _v4;
							model = _v5;
							continue update_;
						} else {
							return _elm_lang$core$Maybe$Nothing;
						}
					case 'TransitionHeader':
						return (!model.isAnimating) ? _elm_lang$core$Maybe$Just(
							{
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									model,
									{isCompact: _p5._0.toCompact, isAnimating: (!model.isSmallScreen) || _p5._0.fixedHeader}),
								_1: _elm_lang$core$Platform_Cmd$none
							}) : _elm_lang$core$Maybe$Nothing;
					default:
						return _elm_lang$core$Maybe$Just(
							_MichaelCombs28$elm_mdl$Material_Helpers$pure(
								_elm_lang$core$Native_Utils.update(
									model,
									{isAnimating: false})));
				}
			}
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$update = F2(
		function (msg, model) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none},
				A3(_MichaelCombs28$elm_mdl$Material_Layout$update_, _elm_lang$core$Basics$identity, msg, model));
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$pack = function (fwd) {
		return A4(
			_MichaelCombs28$elm_parts$Parts$pack1,
			F3(
				function (x, y, z) {
					return _MichaelCombs28$elm_mdl$Material_Helpers$partsUpdatePort(
						A3(_MichaelCombs28$elm_mdl$Material_Layout$update_, x, y, z));
				}),
			function (_) {
				return _.layout;
			},
			F2(
				function (x, c) {
					return _elm_lang$core$Native_Utils.update(
						c,
						{layout: x});
				}),
			fwd);
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$ScrollPane = F2(
		function (a, b) {
			return {ctor: 'ScrollPane', _0: a, _1: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$ScrollTab = function (a) {
		return {ctor: 'ScrollTab', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$Resize = function (a) {
		return {ctor: 'Resize', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$init = function () {
		var result_ = function (result) {
			var _p10 = result;
			if (_p10.ctor === 'Ok') {
				return _MichaelCombs28$elm_mdl$Material_Layout$Resize(_p10._0);
			} else {
				return _MichaelCombs28$elm_mdl$Material_Layout$Resize(
					A2(_elm_lang$core$Debug$log, 'Can\'t get initial window dimensions. Guessing ', 1025));
			}
		};
		var measureScreenSize = A2(_elm_lang$core$Task$attempt, result_, _elm_lang$window$Window$width);
		return {ctor: '_Tuple2', _0: _MichaelCombs28$elm_mdl$Material_Layout$defaultModel, _1: measureScreenSize};
	}();
	var _MichaelCombs28$elm_mdl$Material_Layout$sub0 = function (lift) {
		return A2(
			_elm_lang$core$Platform_Cmd$map,
			_MichaelCombs28$elm_mdl$Material_Layout$pack(lift),
			_elm_lang$core$Tuple$second(_MichaelCombs28$elm_mdl$Material_Layout$init));
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$subscriptions = function (model) {
		return _elm_lang$window$Window$resizes(
			function (_p11) {
				return _MichaelCombs28$elm_mdl$Material_Layout$Resize(
					function (_) {
						return _.width;
					}(_p11));
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$subs = function (lift) {
		return function (_p12) {
			return A2(
				_elm_lang$core$Platform_Sub$map,
				_MichaelCombs28$elm_mdl$Material_Layout$pack(lift),
				_MichaelCombs28$elm_mdl$Material_Layout$subscriptions(
					function (_) {
						return _.layout;
					}(_p12)));
		};
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$ToggleDrawer = {ctor: 'ToggleDrawer'};
	var _MichaelCombs28$elm_mdl$Material_Layout$drawerButton = F2(
		function (lift, isVisible) {
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'mdl-layout__drawer-button', _1: true},
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html_Attributes$attribute,
									'aria-expanded',
									isVisible ? 'true' : 'false'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$tabindex(1),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onClick(
											lift(_MichaelCombs28$elm_mdl$Material_Layout$ToggleDrawer)),
										_1: {
											ctor: '::',
											_0: A3(
												_elm_lang$html$Html_Events$onWithOptions,
												'keydown',
												{stopPropagation: false, preventDefault: false},
												A2(
													_elm_lang$core$Json_Decode$map,
													function (_p13) {
														return lift(
															function (key) {
																var _p14 = key;
																switch (_p14) {
																	case 32:
																		return _MichaelCombs28$elm_mdl$Material_Layout$ToggleDrawer;
																	case 13:
																		return _MichaelCombs28$elm_mdl$Material_Layout$ToggleDrawer;
																	default:
																		return _MichaelCombs28$elm_mdl$Material_Layout$NOP;
																}
															}(_p13));
													},
													_elm_lang$html$Html_Events$keyCode)),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						},
						{
							ctor: '::',
							_0: _MichaelCombs28$elm_mdl$Material_Icon$i('menu'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$obfuscator = F2(
		function (lift, isVisible) {
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'mdl-layout__obfuscator', _1: true},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'is-visible', _1: isVisible},
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(
							lift(_MichaelCombs28$elm_mdl$Material_Layout$ToggleDrawer)),
						_1: {ctor: '[]'}
					}
				},
				{ctor: '[]'});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$toggleDrawer = function (lift) {
		return A2(_MichaelCombs28$elm_mdl$Material_Layout$pack, lift, _MichaelCombs28$elm_mdl$Material_Layout$ToggleDrawer);
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$LinkProp = {ctor: 'LinkProp'};
	var _MichaelCombs28$elm_mdl$Material_Layout$Waterfall = function (a) {
		return {ctor: 'Waterfall', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$waterfall = function (b) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						mode: _MichaelCombs28$elm_mdl$Material_Layout$Waterfall(b)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Layout$Scrolling = {ctor: 'Scrolling'};
	var _MichaelCombs28$elm_mdl$Material_Layout$scrolling = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{mode: _MichaelCombs28$elm_mdl$Material_Layout$Scrolling});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$Seamed = {ctor: 'Seamed'};
	var _MichaelCombs28$elm_mdl$Material_Layout$seamed = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{mode: _MichaelCombs28$elm_mdl$Material_Layout$Seamed});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$Standard = {ctor: 'Standard'};
	var _MichaelCombs28$elm_mdl$Material_Layout$defaultConfig = {fixedHeader: false, fixedDrawer: false, fixedTabs: false, rippleTabs: true, mode: _MichaelCombs28$elm_mdl$Material_Layout$Standard, onSelectTab: _elm_lang$core$Maybe$Nothing, selectedTab: -1, moreTabs: false, transparentHeader: false};
	var _MichaelCombs28$elm_mdl$Material_Layout$headerView = F4(
		function (lift, config, model, _p15) {
			var _p16 = _p15;
			var mode = function () {
				var _p17 = config.mode;
				switch (_p17.ctor) {
					case 'Standard':
						return _MichaelCombs28$elm_mdl$Material_Options$nop;
					case 'Scrolling':
						return _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__header--scroll');
					case 'Seamed':
						return _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__header--seamed');
					default:
						if (_p17._0 === true) {
							return _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__header--waterfall mdl-layout__header--waterfall-hide-top');
						} else {
							return _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__header--waterfall');
						}
				}
			}();
			return A3(
				_MichaelCombs28$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$header,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__header'),
					_1: {
						ctor: '::',
						_0: A2(
							_MichaelCombs28$elm_mdl$Material_Options$when,
							_MichaelCombs28$elm_mdl$Material_Options$cs('is-casting-shadow'),
							_elm_lang$core$Native_Utils.eq(config.mode, _MichaelCombs28$elm_mdl$Material_Layout$Standard) || (_MichaelCombs28$elm_mdl$Material_Layout$isWaterfall(config.mode) && model.isCompact)),
						_1: {
							ctor: '::',
							_0: A2(
								_MichaelCombs28$elm_mdl$Material_Options$when,
								_MichaelCombs28$elm_mdl$Material_Options$cs('is-animating'),
								model.isAnimating),
							_1: {
								ctor: '::',
								_0: A2(
									_MichaelCombs28$elm_mdl$Material_Options$when,
									_MichaelCombs28$elm_mdl$Material_Options$cs('is-compact'),
									model.isCompact),
								_1: {
									ctor: '::',
									_0: mode,
									_1: {
										ctor: '::',
										_0: A2(
											_MichaelCombs28$elm_mdl$Material_Options$when,
											_MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__header--transparent'),
											config.transparentHeader),
										_1: {
											ctor: '::',
											_0: _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
												_elm_lang$html$Html_Events$onClick(
													lift(
														_MichaelCombs28$elm_mdl$Material_Layout$TransitionHeader(
															{toCompact: false, fixedHeader: config.fixedHeader})))),
											_1: {
												ctor: '::',
												_0: _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
													A2(
														_elm_lang$html$Html_Events$on,
														'transitionend',
														_elm_lang$core$Json_Decode$succeed(
															lift(_MichaelCombs28$elm_mdl$Material_Layout$TransitionEnd)))),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				},
				A2(
					_elm_lang$core$List$concatMap,
					function (x) {
						return x;
					},
					{
						ctor: '::',
						_0: _MichaelCombs28$elm_mdl$Material_Layout$toList(_p16._0),
						_1: {
							ctor: '::',
							_0: _p16._1,
							_1: {
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Layout$toList(_p16._2),
								_1: {ctor: '[]'}
							}
						}
					}));
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$Right = {ctor: 'Right'};
	var _MichaelCombs28$elm_mdl$Material_Layout$Left = {ctor: 'Left'};
	var _MichaelCombs28$elm_mdl$Material_Layout$tabsView = F4(
		function (lift, config, model, _p18) {
			var _p19 = _p18;
			var _p22 = _p19._1;
			var chevron = F2(
				function (direction, offset) {
					var dir = function () {
						var _p20 = direction;
						if (_p20.ctor === 'Left') {
							return 'left';
						} else {
							return 'right';
						}
					}();
					return A3(
						_MichaelCombs28$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__tab-bar-button'),
							_1: {
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Options$cs(
									A2(
										_elm_lang$core$Basics_ops['++'],
										'mdl-layout__tab-bar-',
										A2(_elm_lang$core$Basics_ops['++'], dir, '-button'))),
								_1: {
									ctor: '::',
									_0: A2(
										_MichaelCombs28$elm_mdl$Material_Options$when,
										_MichaelCombs28$elm_mdl$Material_Options$cs('is-active'),
										(_elm_lang$core$Native_Utils.eq(direction, _MichaelCombs28$elm_mdl$Material_Layout$Left) && model.tabScrollState.canScrollLeft) || (_elm_lang$core$Native_Utils.eq(direction, _MichaelCombs28$elm_mdl$Material_Layout$Right) && model.tabScrollState.canScrollRight)),
									_1: {
										ctor: '::',
										_0: _MichaelCombs28$elm_mdl$Material_Options$many(_p22),
										_1: {ctor: '[]'}
									}
								}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_MichaelCombs28$elm_mdl$Material_Icon$view,
								A2(_elm_lang$core$Basics_ops['++'], 'chevron_', dir),
								{
									ctor: '::',
									_0: _MichaelCombs28$elm_mdl$Material_Icon$size24,
									_1: {
										ctor: '::',
										_0: _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
											A2(
												_elm_lang$html$Html_Attributes$attribute,
												'onclick',
												A2(
													_elm_lang$core$Basics_ops['++'],
													'document.getElementsByClassName(\'mdl-layout__tab-bar\')[0].scrollLeft += ',
													_elm_lang$core$Basics$toString(offset)))),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						});
				});
			return A2(
				_MichaelCombs28$elm_mdl$Material_Options$div,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__tab-bar-container'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(chevron, _MichaelCombs28$elm_mdl$Material_Layout$Left, -100),
					_1: {
						ctor: '::',
						_0: A2(
							_MichaelCombs28$elm_mdl$Material_Options$div,
							{
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__tab-bar'),
								_1: {
									ctor: '::',
									_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'position', 'relative'),
									_1: {
										ctor: '::',
										_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'scroll-behavior', 'smooth'),
										_1: {
											ctor: '::',
											_0: config.rippleTabs ? _MichaelCombs28$elm_mdl$Material_Options$many(
												{
													ctor: '::',
													_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-ripple-effect'),
													_1: {
														ctor: '::',
														_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mds-js-ripple-effect--ignore-events'),
														_1: {ctor: '[]'}
													}
												}) : _MichaelCombs28$elm_mdl$Material_Options$nop,
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.eq(config.mode, _MichaelCombs28$elm_mdl$Material_Layout$Standard) ? _MichaelCombs28$elm_mdl$Material_Options$cs('is-casting-shadow') : _MichaelCombs28$elm_mdl$Material_Options$nop,
												_1: {
													ctor: '::',
													_0: _MichaelCombs28$elm_mdl$Material_Options$many(_p22),
													_1: {
														ctor: '::',
														_0: _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
															A2(
																_elm_lang$html$Html_Events$on,
																'scroll',
																_MichaelCombs28$elm_dom$DOM$target(
																	A4(
																		_elm_lang$core$Json_Decode$map3,
																		F3(
																			function (scrollWidth, clientWidth, scrollLeft) {
																				return lift(
																					_MichaelCombs28$elm_mdl$Material_Layout$ScrollTab(
																						{
																							canScrollLeft: _elm_lang$core$Native_Utils.cmp(scrollLeft, 0) > 0,
																							canScrollRight: _elm_lang$core$Native_Utils.cmp(scrollWidth - clientWidth, scrollLeft + 1) > 0,
																							width: _elm_lang$core$Maybe$Just(scrollWidth)
																						}));
																			}),
																		A2(_elm_lang$core$Json_Decode$field, 'scrollWidth', _elm_lang$core$Json_Decode$float),
																		A2(_elm_lang$core$Json_Decode$field, 'clientWidth', _elm_lang$core$Json_Decode$float),
																		A2(_elm_lang$core$Json_Decode$field, 'scrollLeft', _elm_lang$core$Json_Decode$float))))),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							},
							A2(
								_elm_lang$core$List$indexedMap,
								F2(
									function (tabIndex, tab) {
										return A3(
											_MichaelCombs28$elm_mdl$Material_Helpers$filter,
											_elm_lang$html$Html$a,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$classList(
													{
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'mdl-layout__tab', _1: true},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'is-active',
																_1: _elm_lang$core$Native_Utils.eq(tabIndex, config.selectedTab)
															},
															_1: {ctor: '[]'}
														}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$core$Maybe$withDefault,
														_MichaelCombs28$elm_mdl$Material_Helpers$noAttr,
														A2(
															_elm_lang$core$Maybe$map,
															F2(
																function (x, y) {
																	return y(x);
																})(tabIndex),
															config.onSelectTab)),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$core$Maybe$Just(tab),
												_1: {
													ctor: '::',
													_0: config.rippleTabs ? _elm_lang$core$Maybe$Just(
														A2(
															_elm_lang$html$Html$map,
															function (_p21) {
																return lift(
																	A2(_MichaelCombs28$elm_mdl$Material_Layout$Ripple, tabIndex, _p21));
															},
															A2(
																_MichaelCombs28$elm_mdl$Material_Ripple$view,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Attributes$class('mdl-layout__tab-ripple-container'),
																	_1: {ctor: '[]'}
																},
																A2(
																	_elm_lang$core$Maybe$withDefault,
																	_MichaelCombs28$elm_mdl$Material_Ripple$model,
																	A2(_elm_lang$core$Dict$get, tabIndex, model.ripples))))) : _elm_lang$core$Maybe$Nothing,
													_1: {ctor: '[]'}
												}
											});
									}),
								_p19._0)),
						_1: {
							ctor: '::',
							_0: A2(chevron, _MichaelCombs28$elm_mdl$Material_Layout$Right, 100),
							_1: {ctor: '[]'}
						}
					}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$view = F4(
		function (lift, model, options, _p23) {
			var _p24 = _p23;
			var _p32 = _p24.tabs;
			var _p31 = _p24.header;
			var _p30 = _p24.drawer;
			var hasDrawer = !_elm_lang$core$Native_Utils.eq(
				_p30,
				{ctor: '[]'});
			var hasTabs = !_elm_lang$core$List$isEmpty(
				_elm_lang$core$Tuple$first(_p32));
			var hasHeader = hasTabs || (!_elm_lang$core$List$isEmpty(_p31));
			var summary = A2(_MichaelCombs28$elm_mdl$Material_Options$collect, _MichaelCombs28$elm_mdl$Material_Layout$defaultConfig, options);
			var config = summary.config;
			var drawerIsFixed = config.fixedDrawer && (!model.isSmallScreen);
			var drawerIsVisible = model.isDrawerOpen && (!drawerIsFixed);
			var _p25 = function () {
				var _p26 = {ctor: '_Tuple3', _0: _p30, _1: _p31, _2: config.fixedHeader};
				if ((_p26.ctor === '_Tuple3') && (_p26._0.ctor === '::')) {
					if ((_p26._1.ctor === '::') && (_p26._2 === true)) {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Maybe$Nothing,
							_1: _elm_lang$core$Maybe$Just(
								A2(_MichaelCombs28$elm_mdl$Material_Layout$drawerButton, lift, drawerIsVisible))
						};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Maybe$Just(
								A2(_MichaelCombs28$elm_mdl$Material_Layout$drawerButton, lift, drawerIsVisible)),
							_1: _elm_lang$core$Maybe$Nothing
						};
					}
				} else {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing};
				}
			}();
			var contentDrawerButton = _p25._0;
			var headerDrawerButton = _p25._1;
			var tabsElems = (!hasTabs) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
				A4(_MichaelCombs28$elm_mdl$Material_Layout$tabsView, lift, config, model, _p32));
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'mdl-layout__container', _1: true},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'has-scrolling-header',
									_1: _elm_lang$core$Native_Utils.eq(config.mode, _MichaelCombs28$elm_mdl$Material_Layout$Scrolling)
								},
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A3(
						_MichaelCombs28$elm_mdl$Material_Helpers$filter,
						_elm_lang$html$Html_Keyed$node('div'),
						A2(
							_elm_lang$core$List$filterMap,
							_elm_lang$core$Basics$identity,
							{
								ctor: '::',
								_0: _elm_lang$core$Maybe$Just(
									_elm_lang$html$Html_Attributes$classList(
										{
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'mdl-layout ', _1: true},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'is-upgraded', _1: true},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'is-small-screen', _1: model.isSmallScreen},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'has-drawer', _1: hasDrawer},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'has-tabs', _1: hasTabs},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'mdl-js-layout', _1: true},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'mdl-layout--fixed-drawer', _1: config.fixedDrawer && hasDrawer},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'mdl-layout--fixed-header', _1: config.fixedHeader && hasHeader},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: 'mdl-layout--fixed-tabs', _1: config.fixedTabs && hasTabs},
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											}
										})),
								_1: {
									ctor: '::',
									_0: drawerIsVisible ? _elm_lang$core$Maybe$Just(
										A2(
											_elm_lang$html$Html_Events$on,
											'keydown',
											A2(
												_elm_lang$core$Json_Decode$map,
												function (_p27) {
													return lift(
														function (key) {
															return _elm_lang$core$Native_Utils.eq(key, 27) ? _MichaelCombs28$elm_mdl$Material_Layout$ToggleDrawer : _MichaelCombs28$elm_mdl$Material_Layout$NOP;
														}(_p27));
												},
												_elm_lang$html$Html_Events$keyCode))) : _elm_lang$core$Maybe$Nothing,
									_1: {ctor: '[]'}
								}
							}),
						{
							ctor: '::',
							_0: hasHeader ? _elm_lang$core$Maybe$Just(
								A2(
									F2(
										function (v0, v1) {
											return {ctor: '_Tuple2', _0: v0, _1: v1};
										}),
									'elm-mdl-header',
									A4(
										_MichaelCombs28$elm_mdl$Material_Layout$headerView,
										lift,
										config,
										model,
										{ctor: '_Tuple3', _0: headerDrawerButton, _1: _p31, _2: tabsElems}))) : _elm_lang$core$Maybe$Nothing,
							_1: {
								ctor: '::',
								_0: (!hasDrawer) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
									{
										ctor: '_Tuple2',
										_0: 'elm-mdl-drawer',
										_1: A3(_MichaelCombs28$elm_mdl$Material_Layout$drawerView, lift, drawerIsVisible, _p30)
									}),
								_1: {
									ctor: '::',
									_0: (!hasDrawer) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
										{
											ctor: '_Tuple2',
											_0: 'elm-mdl-obfuscator',
											_1: A2(_MichaelCombs28$elm_mdl$Material_Layout$obfuscator, lift, drawerIsVisible)
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$core$Maybe$map,
											F2(
												function (v0, v1) {
													return {ctor: '_Tuple2', _0: v0, _1: v1};
												})('elm-drawer-button'),
											contentDrawerButton),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Maybe$Just(
												A2(
													F2(
														function (v0, v1) {
															return {ctor: '_Tuple2', _0: v0, _1: v1};
														}),
													_elm_lang$core$Basics$toString(config.selectedTab),
													A3(
														_MichaelCombs28$elm_mdl$Material_Options$styled,
														_elm_lang$html$Html$main_,
														{
															ctor: '::',
															_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-layout__content'),
															_1: {
																ctor: '::',
																_0: A2(
																	_MichaelCombs28$elm_mdl$Material_Options$when,
																	A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'overflow-y', 'visible'),
																	_elm_lang$core$Native_Utils.eq(config.mode, _MichaelCombs28$elm_mdl$Material_Layout$Scrolling) && config.fixedHeader),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_MichaelCombs28$elm_mdl$Material_Options$when,
																		A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'overflow-x', 'visible'),
																		_elm_lang$core$Native_Utils.eq(config.mode, _MichaelCombs28$elm_mdl$Material_Layout$Scrolling) && config.fixedHeader),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_MichaelCombs28$elm_mdl$Material_Options$when,
																			A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'overflow', 'visible'),
																			_elm_lang$core$Native_Utils.eq(config.mode, _MichaelCombs28$elm_mdl$Material_Layout$Scrolling) && config.fixedHeader),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_MichaelCombs28$elm_mdl$Material_Options$when,
																				function (_p28) {
																					return _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
																						A2(_elm_lang$html$Html_Events$on, 'scroll', _p28));
																				}(
																					A2(
																						_elm_lang$core$Json_Decode$map,
																						function (_p29) {
																							return lift(
																								A2(_MichaelCombs28$elm_mdl$Material_Layout$ScrollPane, config.fixedHeader, _p29));
																						},
																						_MichaelCombs28$elm_dom$DOM$target(_MichaelCombs28$elm_dom$DOM$scrollTop))),
																				_MichaelCombs28$elm_mdl$Material_Layout$isWaterfall(config.mode)),
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														},
														_p24.main))),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}),
					_1: {ctor: '[]'}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Layout$render = A4(
		_MichaelCombs28$elm_parts$Parts$create1,
		_MichaelCombs28$elm_mdl$Material_Layout$view,
		F3(
			function (x, y, z) {
				return _MichaelCombs28$elm_mdl$Material_Helpers$partsUpdatePort(
					A3(_MichaelCombs28$elm_mdl$Material_Layout$update_, x, y, z));
			}),
		function (_) {
			return _.layout;
		},
		F2(
			function (x, c) {
				return _elm_lang$core$Native_Utils.update(
					c,
					{layout: x});
			}));

	var _MichaelCombs28$elm_mdl$Material_Toggles$group = function (s) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (options) {
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						group: _elm_lang$core$Maybe$Just(
							_elm_lang$html$Html_Attributes$name(s))
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Toggles$value = function (b) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (options) {
				return _elm_lang$core$Native_Utils.update(
					options,
					{value: b});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Toggles$disabled = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{isDisabled: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Toggles$ripple = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{ripple: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Toggles$onClick = function (x) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (options) {
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						onClick: _elm_lang$core$Maybe$Just(
							A2(
								_elm_lang$html$Html_Events$on,
								'change',
								_elm_lang$core$Json_Decode$succeed(x)))
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Toggles$defaultConfig = {
		isDisabled: false,
		value: false,
		ripple: false,
		group: _elm_lang$core$Maybe$Nothing,
		onClick: _elm_lang$core$Maybe$Nothing,
		inner: {ctor: '[]'}
	};
	var _MichaelCombs28$elm_mdl$Material_Toggles$defaultModel = {ripple: _MichaelCombs28$elm_mdl$Material_Ripple$model, isFocused: false};
	var _MichaelCombs28$elm_mdl$Material_Toggles$Model = F2(
		function (a, b) {
			return {ripple: a, isFocused: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Toggles$Config = F6(
		function (a, b, c, d, e, f) {
			return {isDisabled: a, value: b, ripple: c, group: d, onClick: e, inner: f};
		});
	var _MichaelCombs28$elm_mdl$Material_Toggles$SetFocus = function (a) {
		return {ctor: 'SetFocus', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Toggles$Ripple = function (a) {
		return {ctor: 'Ripple', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Toggles$update = F2(
		function (action, model) {
			var _p0 = action;
			if (_p0.ctor === 'Ripple') {
				return A2(
					_MichaelCombs28$elm_mdl$Material_Helpers$map2nd,
					_elm_lang$core$Platform_Cmd$map(_MichaelCombs28$elm_mdl$Material_Toggles$Ripple),
					A2(
						_MichaelCombs28$elm_mdl$Material_Helpers$map1st,
						function (r) {
							return _elm_lang$core$Native_Utils.update(
								model,
								{ripple: r});
						},
						A2(_MichaelCombs28$elm_mdl$Material_Ripple$update, _p0._0, model.ripple)));
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{isFocused: _p0._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			}
		});
	var _MichaelCombs28$elm_mdl$Material_Toggles$render = function (view) {
		return A5(
			_MichaelCombs28$elm_parts$Parts$create,
			view,
			_MichaelCombs28$elm_parts$Parts$generalize(_MichaelCombs28$elm_mdl$Material_Toggles$update),
			function (_) {
				return _.toggles;
			},
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.update(
						y,
						{toggles: x});
				}),
			_MichaelCombs28$elm_mdl$Material_Toggles$defaultModel);
	};
	var _MichaelCombs28$elm_mdl$Material_Toggles$top = F5(
		function (lift, group, model, summary, elems) {
			var cfg = summary.config;
			return A5(
				_MichaelCombs28$elm_mdl$Material_Options$apply,
				summary,
				_elm_lang$html$Html$label,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs(
						A2(_elm_lang$core$Basics_ops['++'], 'mdl-', group)),
					_1: {
						ctor: '::',
						_0: _MichaelCombs28$elm_mdl$Material_Options$cs(
							A2(_elm_lang$core$Basics_ops['++'], 'mdl-js-', group)),
						_1: {
							ctor: '::',
							_0: A2(
								_MichaelCombs28$elm_mdl$Material_Options$when,
								_MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-ripple-effect'),
								cfg.ripple),
							_1: {
								ctor: '::',
								_0: A2(
									_MichaelCombs28$elm_mdl$Material_Options$when,
									_MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-ripple-effect--ignore-events'),
									cfg.ripple),
								_1: {
									ctor: '::',
									_0: _MichaelCombs28$elm_mdl$Material_Options$cs('is-upgraded'),
									_1: {
										ctor: '::',
										_0: A2(
											_MichaelCombs28$elm_mdl$Material_Options$when,
											_MichaelCombs28$elm_mdl$Material_Options$cs('is-checked'),
											cfg.value),
										_1: {
											ctor: '::',
											_0: A2(
												_MichaelCombs28$elm_mdl$Material_Options$when,
												_MichaelCombs28$elm_mdl$Material_Options$cs('is-focused'),
												model.isFocused),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				},
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Helpers$blurOn('mouseup'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onFocus(
							lift(
								_MichaelCombs28$elm_mdl$Material_Toggles$SetFocus(true))),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onBlur(
								lift(
									_MichaelCombs28$elm_mdl$Material_Toggles$SetFocus(false))),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$core$Maybe$withDefault, _MichaelCombs28$elm_mdl$Material_Helpers$noAttr, cfg.onClick),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				_elm_lang$core$List$concat(
					{
						ctor: '::',
						_0: elems,
						_1: {
							ctor: '::',
							_0: cfg.ripple ? {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$map,
									function (_p1) {
										return lift(
											_MichaelCombs28$elm_mdl$Material_Toggles$Ripple(_p1));
									},
									A2(
										_MichaelCombs28$elm_mdl$Material_Ripple$view,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center'),
											_1: {ctor: '[]'}
										},
										model.ripple)),
								_1: {ctor: '[]'}
							} : {ctor: '[]'},
							_1: {ctor: '[]'}
						}
					}));
		});
	var _MichaelCombs28$elm_mdl$Material_Toggles$viewCheckbox = F4(
		function (lift, model, config, elems) {
			var summary = A2(_MichaelCombs28$elm_mdl$Material_Options$collect, _MichaelCombs28$elm_mdl$Material_Toggles$defaultConfig, config);
			var cfg = summary.config;
			return A5(
				_MichaelCombs28$elm_mdl$Material_Toggles$top,
				lift,
				'checkbox',
				model,
				summary,
				{
					ctor: '::',
					_0: A4(
						_MichaelCombs28$elm_mdl$Material_Options$styled_,
						_elm_lang$html$Html$input,
						{
							ctor: '::',
							_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-checkbox__input'),
							_1: {
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Options$many(cfg.inner),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$type_('checkbox'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$disabled(cfg.isDisabled),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$checked(cfg.value),
									_1: {ctor: '[]'}
								}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$span,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('mdl-checkbox__label'),
								_1: {ctor: '[]'}
							},
							elems),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('mdl-checkbox__focus-helper'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$span,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('mdl-checkbox__box-outline'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$span,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('mdl-checkbox__tick-outline'),
												_1: {ctor: '[]'}
											},
											{ctor: '[]'}),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Toggles$checkbox = _MichaelCombs28$elm_mdl$Material_Toggles$render(_MichaelCombs28$elm_mdl$Material_Toggles$viewCheckbox);
	var _MichaelCombs28$elm_mdl$Material_Toggles$viewSwitch = F4(
		function (lift, model, config, elems) {
			var summary = A2(_MichaelCombs28$elm_mdl$Material_Options$collect, _MichaelCombs28$elm_mdl$Material_Toggles$defaultConfig, config);
			var cfg = summary.config;
			return A5(
				_MichaelCombs28$elm_mdl$Material_Toggles$top,
				lift,
				'switch',
				model,
				summary,
				{
					ctor: '::',
					_0: A4(
						_MichaelCombs28$elm_mdl$Material_Options$styled_,
						_elm_lang$html$Html$input,
						{
							ctor: '::',
							_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-switch__input'),
							_1: {
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Options$many(cfg.inner),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$type_('checkbox'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$disabled(cfg.isDisabled),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$checked(cfg.value),
									_1: {ctor: '[]'}
								}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$span,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('mdl-switch__label'),
								_1: {ctor: '[]'}
							},
							elems),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('mdl-switch__track'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('mdl-switch__thumb'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$span,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('mdl-switch__focus-helper'),
												_1: {ctor: '[]'}
											},
											{ctor: '[]'}),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Toggles$switch = _MichaelCombs28$elm_mdl$Material_Toggles$render(_MichaelCombs28$elm_mdl$Material_Toggles$viewSwitch);
	var _MichaelCombs28$elm_mdl$Material_Toggles$viewRadio = F4(
		function (lift, model, config, elems) {
			var summary = A2(_MichaelCombs28$elm_mdl$Material_Options$collect, _MichaelCombs28$elm_mdl$Material_Toggles$defaultConfig, config);
			var cfg = summary.config;
			return A5(
				_MichaelCombs28$elm_mdl$Material_Toggles$top,
				lift,
				'radio',
				model,
				summary,
				{
					ctor: '::',
					_0: A4(
						_MichaelCombs28$elm_mdl$Material_Options$styled_,
						_elm_lang$html$Html$input,
						{
							ctor: '::',
							_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-radio__button'),
							_1: {
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Options$many(cfg.inner),
								_1: {ctor: '[]'}
							}
						},
						A2(
							_elm_lang$core$List$filterMap,
							_elm_lang$core$Basics$identity,
							{
								ctor: '::',
								_0: _elm_lang$core$Maybe$Just(
									_elm_lang$html$Html_Attributes$type_('radio')),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Maybe$Just(
										_elm_lang$html$Html_Attributes$disabled(cfg.isDisabled)),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Maybe$Just(
											_elm_lang$html$Html_Attributes$checked(cfg.value)),
										_1: {
											ctor: '::',
											_0: cfg.group,
											_1: {ctor: '[]'}
										}
									}
								}
							}),
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$span,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('mdl-radio__label'),
								_1: {ctor: '[]'}
							},
							elems),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('mdl-radio__outer-circle'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$span,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('mdl-radio__inner-circle'),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {ctor: '[]'}
							}
						}
					}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Toggles$radio = _MichaelCombs28$elm_mdl$Material_Toggles$render(_MichaelCombs28$elm_mdl$Material_Toggles$viewRadio);

	var _MichaelCombs28$elm_mdl$Material_Tooltip$set = F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.update(
				y,
				{tooltip: x});
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$container = function (elem) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (options) {
				return _elm_lang$core$Native_Utils.update(
					options,
					{container: elem});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$isTooltipClass = function (path) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			function ($class) {
				return A2(_elm_lang$core$String$contains, 'mdl-tooltip', $class) ? _elm_lang$core$Json_Decode$succeed(true) : _elm_lang$core$Json_Decode$succeed(false);
			},
			A2(_elm_lang$core$Json_Decode$at, path, _MichaelCombs28$elm_dom$DOM$className));
	};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$sibling = function (d) {
		var valid = function (path) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (res) {
					return res ? A2(_elm_lang$core$Json_Decode$at, path, d) : _elm_lang$core$Json_Decode$fail('');
				},
				_MichaelCombs28$elm_mdl$Material_Tooltip$isTooltipClass(path));
		};
		var createPath = function (depth) {
			var parents = A2(_elm_lang$core$List$repeat, depth, 'parentElement');
			return A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: 'target',
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					parents,
					{
						ctor: '::',
						_0: 'nextSibling',
						_1: {ctor: '[]'}
					}));
		};
		var paths = A2(
			_elm_lang$core$List$map,
			createPath,
			A2(_elm_lang$core$List$range, 0, 4));
		return _elm_lang$core$Json_Decode$oneOf(
			A2(_elm_lang$core$List$map, valid, paths));
	};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$update = F2(
		function (action, model) {
			var _p0 = action;
			if (_p0.ctor === 'Enter') {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{isActive: true, domState: _p0._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{isActive: false}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			}
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$calculatePos = F2(
		function (pos, domState) {
			var getValuesFor = F2(
				function (l, r) {
					return (_elm_lang$core$Native_Utils.cmp(l + r, 0) < 0) ? {ctor: '_Tuple2', _0: 0, _1: 0} : {ctor: '_Tuple2', _0: l, _1: r};
				});
			var offsetHeight = domState.offsetHeight;
			var marginTop = -1 * (offsetHeight / 2);
			var offsetWidth = domState.offsetWidth;
			var marginLeft = -1 * (offsetWidth / 2);
			var props = domState.rect;
			var left = props.left + (props.width / 2);
			var _p1 = A2(getValuesFor, left, marginLeft);
			var newLeft = _p1._0;
			var newMarginLeft = _p1._1;
			var top = props.top + (props.height / 2);
			var _p2 = A2(getValuesFor, top, marginTop);
			var newTop = _p2._0;
			var newMarginTop = _p2._1;
			var out = function () {
				var _p3 = pos;
				switch (_p3.ctor) {
					case 'Left':
						return {left: (props.left - offsetWidth) - 10, top: newTop, marginTop: newMarginTop, marginLeft: 0};
					case 'Right':
						return {left: (props.left + props.width) + 10, top: newTop, marginTop: newMarginTop, marginLeft: 0};
					case 'Top':
						return {left: newLeft, top: (props.top - offsetHeight) - 10, marginTop: 0, marginLeft: newMarginLeft};
					default:
						return {left: newLeft, top: (props.top + props.height) + 10, marginTop: 0, marginLeft: newMarginLeft};
				}
			}();
			return out;
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$defaultDOMState = {
		rect: {left: 0, top: 0, width: 0, height: 0},
		offsetWidth: 0,
		offsetHeight: 0
	};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$defaultPos = {left: 0, top: 0, marginLeft: 0, marginTop: 0};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$defaultModel = {isActive: false, domState: _MichaelCombs28$elm_mdl$Material_Tooltip$defaultDOMState};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$pack = A4(
		_MichaelCombs28$elm_parts$Parts$pack,
		_MichaelCombs28$elm_parts$Parts$generalize(_MichaelCombs28$elm_mdl$Material_Tooltip$update),
		function (_) {
			return _.tooltip;
		},
		_MichaelCombs28$elm_mdl$Material_Tooltip$set,
		_MichaelCombs28$elm_mdl$Material_Tooltip$defaultModel);
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Model = F2(
		function (a, b) {
			return {isActive: a, domState: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Pos = F4(
		function (a, b, c, d) {
			return {left: a, top: b, marginLeft: c, marginTop: d};
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$DOMState = F3(
		function (a, b, c) {
			return {rect: a, offsetWidth: b, offsetHeight: c};
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$stateDecoder = A4(
		_elm_lang$core$Json_Decode$map3,
		_MichaelCombs28$elm_mdl$Material_Tooltip$DOMState,
		_MichaelCombs28$elm_dom$DOM$target(_MichaelCombs28$elm_dom$DOM$boundingClientRect),
		_MichaelCombs28$elm_mdl$Material_Tooltip$sibling(_MichaelCombs28$elm_dom$DOM$offsetWidth),
		_MichaelCombs28$elm_mdl$Material_Tooltip$sibling(_MichaelCombs28$elm_dom$DOM$offsetHeight));
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Config = F3(
		function (a, b, c) {
			return {size: a, position: b, container: c};
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Leave = {ctor: 'Leave'};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$onMouseLeave = F2(
		function (lift, idx) {
			return A2(
				_elm_lang$html$Html_Events$on,
				'mouseleave',
				_elm_lang$core$Json_Decode$succeed(
					A3(_MichaelCombs28$elm_mdl$Material_Tooltip$pack, lift, idx, _MichaelCombs28$elm_mdl$Material_Tooltip$Leave)));
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$onLeave = function (lift) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseleave',
			_elm_lang$core$Json_Decode$succeed(
				lift(_MichaelCombs28$elm_mdl$Material_Tooltip$Leave)));
	};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Enter = function (a) {
		return {ctor: 'Enter', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$onMouseEnter = F2(
		function (lift, idx) {
			return A2(
				_elm_lang$html$Html_Events$on,
				'mouseenter',
				A2(
					_elm_lang$core$Json_Decode$map,
					function (_p4) {
						return A3(
							_MichaelCombs28$elm_mdl$Material_Tooltip$pack,
							lift,
							idx,
							_MichaelCombs28$elm_mdl$Material_Tooltip$Enter(_p4));
					},
					_MichaelCombs28$elm_mdl$Material_Tooltip$stateDecoder));
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$attach = F2(
		function (lift, index) {
			return _MichaelCombs28$elm_mdl$Material_Options$many(
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
						A2(_MichaelCombs28$elm_mdl$Material_Tooltip$onMouseEnter, lift, index)),
					_1: {
						ctor: '::',
						_0: _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
							A2(_MichaelCombs28$elm_mdl$Material_Tooltip$onMouseLeave, lift, index)),
						_1: {ctor: '[]'}
					}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$onEnter = function (lift) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseenter',
			A2(
				_elm_lang$core$Json_Decode$map,
				function (_p5) {
					return lift(
						_MichaelCombs28$elm_mdl$Material_Tooltip$Enter(_p5));
				},
				_MichaelCombs28$elm_mdl$Material_Tooltip$stateDecoder));
	};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Large = {ctor: 'Large'};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$large = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{size: _MichaelCombs28$elm_mdl$Material_Tooltip$Large});
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Default = {ctor: 'Default'};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Bottom = {ctor: 'Bottom'};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$defaultConfig = {size: _MichaelCombs28$elm_mdl$Material_Tooltip$Default, position: _MichaelCombs28$elm_mdl$Material_Tooltip$Bottom, container: _elm_lang$html$Html$div};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$view = F4(
		function (lift, model, options, content) {
			var px = function (f) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(f),
					'px');
			};
			var summary = A2(_MichaelCombs28$elm_mdl$Material_Options$collect, _MichaelCombs28$elm_mdl$Material_Tooltip$defaultConfig, options);
			var config = summary.config;
			var pos = model.isActive ? A2(_MichaelCombs28$elm_mdl$Material_Tooltip$calculatePos, config.position, model.domState) : _MichaelCombs28$elm_mdl$Material_Tooltip$defaultPos;
			return A3(
				_MichaelCombs28$elm_mdl$Material_Options$styled,
				config.container,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-tooltip'),
					_1: {
						ctor: '::',
						_0: A2(
							_MichaelCombs28$elm_mdl$Material_Options$when,
							_MichaelCombs28$elm_mdl$Material_Options$cs('is-active'),
							model.isActive),
						_1: {
							ctor: '::',
							_0: A2(
								_MichaelCombs28$elm_mdl$Material_Options$when,
								_MichaelCombs28$elm_mdl$Material_Options$cs('mdl-tooltip--large'),
								_elm_lang$core$Native_Utils.eq(config.size, _MichaelCombs28$elm_mdl$Material_Tooltip$Large)),
							_1: {
								ctor: '::',
								_0: A2(
									_MichaelCombs28$elm_mdl$Material_Options$when,
									A2(
										_MichaelCombs28$elm_mdl$Material_Options$css,
										'left',
										px(pos.left)),
									model.isActive),
								_1: {
									ctor: '::',
									_0: A2(
										_MichaelCombs28$elm_mdl$Material_Options$when,
										A2(
											_MichaelCombs28$elm_mdl$Material_Options$css,
											'margin-left',
											px(pos.marginLeft)),
										model.isActive),
									_1: {
										ctor: '::',
										_0: A2(
											_MichaelCombs28$elm_mdl$Material_Options$when,
											A2(
												_MichaelCombs28$elm_mdl$Material_Options$css,
												'top',
												px(pos.top)),
											model.isActive),
										_1: {
											ctor: '::',
											_0: A2(
												_MichaelCombs28$elm_mdl$Material_Options$when,
												A2(
													_MichaelCombs28$elm_mdl$Material_Options$css,
													'margin-top',
													px(pos.marginTop)),
												model.isActive),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				},
				content);
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$render = A5(
		_MichaelCombs28$elm_parts$Parts$create,
		_MichaelCombs28$elm_mdl$Material_Tooltip$view,
		_MichaelCombs28$elm_parts$Parts$generalize(_MichaelCombs28$elm_mdl$Material_Tooltip$update),
		function (_) {
			return _.tooltip;
		},
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.update(
					y,
					{tooltip: x});
			}),
		_MichaelCombs28$elm_mdl$Material_Tooltip$defaultModel);
	var _MichaelCombs28$elm_mdl$Material_Tooltip$bottom = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{position: _MichaelCombs28$elm_mdl$Material_Tooltip$Bottom});
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Top = {ctor: 'Top'};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$top = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{position: _MichaelCombs28$elm_mdl$Material_Tooltip$Top});
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Right = {ctor: 'Right'};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$right = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{position: _MichaelCombs28$elm_mdl$Material_Tooltip$Right});
		});
	var _MichaelCombs28$elm_mdl$Material_Tooltip$Left = {ctor: 'Left'};
	var _MichaelCombs28$elm_mdl$Material_Tooltip$left = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{position: _MichaelCombs28$elm_mdl$Material_Tooltip$Left});
		});

	var _MichaelCombs28$elm_mdl$Material_Tabs$activeTab = function (k) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{activeTab: k});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Tabs$onSelectTab = function (k) {
		return _MichaelCombs28$elm_mdl$Material_Options$set(
			function (config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						onSelectTab: _elm_lang$core$Maybe$Just(k)
					});
			});
	};
	var _MichaelCombs28$elm_mdl$Material_Tabs$ripple = _MichaelCombs28$elm_mdl$Material_Options$set(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{ripple: true});
		});
	var _MichaelCombs28$elm_mdl$Material_Tabs$defaultConfig = {ripple: false, onSelectTab: _elm_lang$core$Maybe$Nothing, activeTab: 0};
	var _MichaelCombs28$elm_mdl$Material_Tabs$defaultModel = {ripples: _elm_lang$core$Dict$empty};
	var _MichaelCombs28$elm_mdl$Material_Tabs$Model = function (a) {
		return {ripples: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Tabs$Config = F3(
		function (a, b, c) {
			return {ripple: a, onSelectTab: b, activeTab: c};
		});
	var _MichaelCombs28$elm_mdl$Material_Tabs$Ripple = F2(
		function (a, b) {
			return {ctor: 'Ripple', _0: a, _1: b};
		});
	var _MichaelCombs28$elm_mdl$Material_Tabs$update = F2(
		function (action, model) {
			var _p0 = action;
			var _p2 = _p0._0;
			var _p1 = A2(
				_MichaelCombs28$elm_mdl$Material_Ripple$update,
				_p0._1,
				A2(
					_elm_lang$core$Maybe$withDefault,
					_MichaelCombs28$elm_mdl$Material_Ripple$model,
					A2(_elm_lang$core$Dict$get, _p2, model.ripples)));
			var ripple_ = _p1._0;
			var cmd = _p1._1;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{
						ripples: A3(_elm_lang$core$Dict$insert, _p2, ripple_, model.ripples)
					}),
				_1: A2(
					_elm_lang$core$Platform_Cmd$map,
					_MichaelCombs28$elm_mdl$Material_Tabs$Ripple(_p2),
					cmd)
			};
		});
	var _MichaelCombs28$elm_mdl$Material_Tabs$view = F5(
		function (lift, model, options, tabs, tabContent) {
			var wrapContent = A2(
				_elm_lang$html$Html_Keyed$node,
				'div',
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'mdl-tab__panel', _1: true},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'is-active', _1: true},
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				});
			var summary = A2(_MichaelCombs28$elm_mdl$Material_Options$collect, _MichaelCombs28$elm_mdl$Material_Tabs$defaultConfig, options);
			var config = summary.config;
			var unwrapLabel = F2(
				function (tabIdx, _p3) {
					var _p4 = _p3;
					var _p6 = _p4._0._1;
					return A3(
						_MichaelCombs28$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$a,
						A2(
							_elm_lang$core$Basics_ops['++'],
							{
								ctor: '::',
								_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-tabs__tab'),
								_1: {
									ctor: '::',
									_0: A2(
										_MichaelCombs28$elm_mdl$Material_Options$when,
										_MichaelCombs28$elm_mdl$Material_Options$cs('is-active'),
										_elm_lang$core$Native_Utils.eq(tabIdx, config.activeTab)),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$core$Maybe$withDefault,
											_MichaelCombs28$elm_mdl$Material_Options$nop,
											A2(
												_elm_lang$core$Maybe$map,
												function (t) {
													return _MichaelCombs28$elm_mdl$Material_Options_Internal$attribute(
														_elm_lang$html$Html_Events$onClick(
															t(tabIdx)));
												},
												config.onSelectTab)),
										_1: {ctor: '[]'}
									}
								}
							},
							_p4._0._0),
						config.ripple ? _elm_lang$core$List$concat(
							{
								ctor: '::',
								_0: _p6,
								_1: {
									ctor: '::',
									_0: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$map,
											function (_p5) {
												return lift(
													A2(_MichaelCombs28$elm_mdl$Material_Tabs$Ripple, tabIdx, _p5));
											},
											A2(
												_MichaelCombs28$elm_mdl$Material_Ripple$view,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$classList(
														{
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'mdl-tabs__ripple-container', _1: true},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'mdl-tabs__ripple-js-effect', _1: true},
																_1: {ctor: '[]'}
															}
														}),
													_1: {ctor: '[]'}
												},
												A2(
													_elm_lang$core$Maybe$withDefault,
													_MichaelCombs28$elm_mdl$Material_Ripple$model,
													A2(_elm_lang$core$Dict$get, tabIdx, model.ripples)))),
										_1: {ctor: '[]'}
									},
									_1: {ctor: '[]'}
								}
							}) : _p6);
				});
			var links = A3(
				_MichaelCombs28$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-tabs__tab-bar'),
					_1: {ctor: '[]'}
				},
				A2(_elm_lang$core$List$indexedMap, unwrapLabel, tabs));
			return A5(
				_MichaelCombs28$elm_mdl$Material_Options$apply,
				summary,
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-tabs'),
					_1: {
						ctor: '::',
						_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-tabs'),
						_1: {
							ctor: '::',
							_0: _MichaelCombs28$elm_mdl$Material_Options$cs('is-upgraded'),
							_1: {
								ctor: '::',
								_0: A2(
									_MichaelCombs28$elm_mdl$Material_Options$when,
									_MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-ripple-effect'),
									config.ripple),
								_1: {
									ctor: '::',
									_0: A2(
										_MichaelCombs28$elm_mdl$Material_Options$when,
										_MichaelCombs28$elm_mdl$Material_Options$cs('mdl-js-ripple-effect--ignore-events'),
										config.ripple),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				},
				{ctor: '[]'},
				{
					ctor: '::',
					_0: links,
					_1: {
						ctor: '::',
						_0: wrapContent(
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Basics$toString(config.activeTab),
									_1: A2(
										_elm_lang$html$Html$div,
										{ctor: '[]'},
										tabContent)
								},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_Tabs$render = A5(
		_MichaelCombs28$elm_parts$Parts$create,
		_MichaelCombs28$elm_mdl$Material_Tabs$view,
		_MichaelCombs28$elm_parts$Parts$generalize(_MichaelCombs28$elm_mdl$Material_Tabs$update),
		function (_) {
			return _.tabs;
		},
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.update(
					y,
					{tabs: x});
			}),
		_MichaelCombs28$elm_mdl$Material_Tabs$defaultModel);
	var _MichaelCombs28$elm_mdl$Material_Tabs$Label = function (a) {
		return {ctor: 'Label', _0: a};
	};
	var _MichaelCombs28$elm_mdl$Material_Tabs$label = F2(
		function (p, c) {
			return _MichaelCombs28$elm_mdl$Material_Tabs$Label(
				{ctor: '_Tuple2', _0: p, _1: c});
		});
	var _MichaelCombs28$elm_mdl$Material_Tabs$textLabel = F2(
		function (p, c) {
			return A2(
				_MichaelCombs28$elm_mdl$Material_Tabs$label,
				p,
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(c),
					_1: {ctor: '[]'}
				});
		});

	var _MichaelCombs28$elm_mdl$Material$init = function (lift) {
		return _MichaelCombs28$elm_mdl$Material_Layout$sub0(lift);
	};
	var _MichaelCombs28$elm_mdl$Material$subscriptions = F2(
		function (lift, model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: A2(_MichaelCombs28$elm_mdl$Material_Layout$subs, lift, model.mdl),
					_1: {
						ctor: '::',
						_0: A2(_MichaelCombs28$elm_mdl$Material_Menu$subs, lift, model.mdl),
						_1: {ctor: '[]'}
					}
				});
		});
	var _MichaelCombs28$elm_mdl$Material$update = F2(
		function (msg, model) {
			var helper = function (_p0) {
				var _p1 = _p0;
				var _p2 = _p1._0;
				if (_p2.ctor === 'Just') {
					return _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p2._0, _1: _p1._1});
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			};
			return A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none},
				A2(
					_elm_lang$core$Maybe$map,
					_MichaelCombs28$elm_mdl$Material_Helpers$map1st(
						function (mdl) {
							return _elm_lang$core$Native_Utils.update(
								model,
								{mdl: mdl});
						}),
					helper(
						A2(_MichaelCombs28$elm_parts$Parts$update_, msg, model.mdl))));
		});
	var _MichaelCombs28$elm_mdl$Material$model = {button: _elm_lang$core$Dict$empty, textfield: _elm_lang$core$Dict$empty, menu: _elm_lang$core$Dict$empty, snackbar: _elm_lang$core$Maybe$Nothing, layout: _MichaelCombs28$elm_mdl$Material_Layout$defaultModel, toggles: _elm_lang$core$Dict$empty, tooltip: _elm_lang$core$Dict$empty, tabs: _elm_lang$core$Dict$empty};
	var _MichaelCombs28$elm_mdl$Material$Model = F8(
		function (a, b, c, d, e, f, g, h) {
			return {button: a, textfield: b, menu: c, snackbar: d, layout: e, toggles: f, tooltip: g, tabs: h};
		});

	var _MichaelCombs28$elm_mdl$Material_List$action2 = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item-secondary-action');
	var _MichaelCombs28$elm_mdl$Material_List$info2 = function (options) {
		return _MichaelCombs28$elm_mdl$Material_Options$span(
			{
				ctor: '::',
				_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item-secondary-info'),
				_1: options
			});
	};
	var _MichaelCombs28$elm_mdl$Material_List$content2 = function (options) {
		return _MichaelCombs28$elm_mdl$Material_Options$span(
			{
				ctor: '::',
				_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item-secondary-content'),
				_1: options
			});
	};
	var _MichaelCombs28$elm_mdl$Material_List$subtitle = function (options) {
		return _MichaelCombs28$elm_mdl$Material_Options$span(
			{
				ctor: '::',
				_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item-sub-title'),
				_1: options
			});
	};
	var _MichaelCombs28$elm_mdl$Material_List$body = function (options) {
		return _MichaelCombs28$elm_mdl$Material_Options$span(
			{
				ctor: '::',
				_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item-text-body'),
				_1: options
			});
	};
	var _MichaelCombs28$elm_mdl$Material_List$icon = F2(
		function (i, options) {
			return A2(
				_MichaelCombs28$elm_mdl$Material_Icon$view,
				i,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item-icon'),
					_1: options
				});
		});
	var _MichaelCombs28$elm_mdl$Material_List$avatar = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item-avatar');
	var _MichaelCombs28$elm_mdl$Material_List$avatarImage = F2(
		function (src, options) {
			return A4(
				_MichaelCombs28$elm_mdl$Material_Options$styled_,
				_elm_lang$html$Html$img,
				{ctor: '::', _0: _MichaelCombs28$elm_mdl$Material_List$avatar, _1: options},
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$src(src),
					_1: {ctor: '[]'}
				},
				{ctor: '[]'});
		});
	var _MichaelCombs28$elm_mdl$Material_List$avatarIcon = F2(
		function (i, options) {
			return A2(
				_MichaelCombs28$elm_mdl$Material_Options$div,
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Options$center,
					_1: {
						ctor: '::',
						_0: _MichaelCombs28$elm_mdl$Material_Options$many(options),
						_1: {
							ctor: '::',
							_0: _MichaelCombs28$elm_mdl$Material_List$avatar,
							_1: {ctor: '[]'}
						}
					}
				},
				{
					ctor: '::',
					_0: _MichaelCombs28$elm_mdl$Material_Icon$i(i),
					_1: {ctor: '[]'}
				});
		});
	var _MichaelCombs28$elm_mdl$Material_List$content = function (options) {
		return _MichaelCombs28$elm_mdl$Material_Options$span(
			{
				ctor: '::',
				_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item-primary-content'),
				_1: options
			});
	};
	var _MichaelCombs28$elm_mdl$Material_List$withSubtitle = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item--two-line');
	var _MichaelCombs28$elm_mdl$Material_List$withBody = _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item--three-line');
	var _MichaelCombs28$elm_mdl$Material_List$li = function (options) {
		return A2(
			_MichaelCombs28$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$li,
			{
				ctor: '::',
				_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list__item'),
				_1: options
			});
	};
	var _MichaelCombs28$elm_mdl$Material_List$ul = function (options) {
		return A2(
			_MichaelCombs28$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$ul,
			{
				ctor: '::',
				_0: _MichaelCombs28$elm_mdl$Material_Options$cs('mdl-list'),
				_1: options
			});
	};

	var _user$project$Types$Link = F4(
		function (a, b, c, d) {
			return {href: a, timestamp: b, clickedAt: c, guid: d};
		});
	var _user$project$Types$User = F2(
		function (a, b) {
			return {email: a, uid: b};
		});
	var _user$project$Types$LoggedInModel = F3(
		function (a, b, c) {
			return {email: a, uid: b, linkInputText: c};
		});
	var _user$project$Types$ResultRecord = F2(
		function (a, b) {
			return {ok: a, err: b};
		});
	var _user$project$Types$LoginForm = F2(
		function (a, b) {
			return {email: a, password: b};
		});
	var _user$project$Types$Flags = function (a) {
		return {user: a};
	};
	var _user$project$Types$Model = F4(
		function (a, b, c, d) {
			return {links: a, session: b, mdl: c, snackbar: d};
		});
	var _user$project$Types$LoggedOut = function (a) {
		return {ctor: 'LoggedOut', _0: a};
	};
	var _user$project$Types$LoggedIn = function (a) {
		return {ctor: 'LoggedIn', _0: a};
	};
	var _user$project$Types$Mdl = function (a) {
		return {ctor: 'Mdl', _0: a};
	};
	var _user$project$Types$Snack = function (a) {
		return {ctor: 'Snack', _0: a};
	};
	var _user$project$Types$CreateUserResponse = function (a) {
		return {ctor: 'CreateUserResponse', _0: a};
	};
	var _user$project$Types$LogOutResponse = function (a) {
		return {ctor: 'LogOutResponse', _0: a};
	};
	var _user$project$Types$LogOut = {ctor: 'LogOut'};
	var _user$project$Types$LogIn = {ctor: 'LogIn'};
	var _user$project$Types$ClickedAt = F2(
		function (a, b) {
			return {ctor: 'ClickedAt', _0: a, _1: b};
		});
	var _user$project$Types$Timestamp = function (a) {
		return {ctor: 'Timestamp', _0: a};
	};
	var _user$project$Types$DeleteLink = function (a) {
		return {ctor: 'DeleteLink', _0: a};
	};
	var _user$project$Types$CreateLink = {ctor: 'CreateLink'};
	var _user$project$Types$SetLoginForm = function (a) {
		return {ctor: 'SetLoginForm', _0: a};
	};
	var _user$project$Types$SetLinkInputText = function (a) {
		return {ctor: 'SetLinkInputText', _0: a};
	};
	var _user$project$Types$SetLinks = function (a) {
		return {ctor: 'SetLinks', _0: a};
	};

	var _user$project$Ports$createLink = _elm_lang$core$Native_Platform.outgoingPort(
		'createLink',
		function (v) {
			return {href: v.href, uid: v.uid};
		});
	var _user$project$Ports$createUser = _elm_lang$core$Native_Platform.outgoingPort(
		'createUser',
		function (v) {
			return {email: v.email, password: v.password};
		});
	var _user$project$Ports$logOut = _elm_lang$core$Native_Platform.outgoingPort(
		'logOut',
		function (v) {
			return v;
		});
	var _user$project$Ports$deleteLink = _elm_lang$core$Native_Platform.outgoingPort(
		'deleteLink',
		function (v) {
			return v;
		});
	var _user$project$Ports$updateLink = _elm_lang$core$Native_Platform.outgoingPort(
		'updateLink',
		function (v) {
			return {href: v.href, timestamp: v.timestamp, clickedAt: v.clickedAt, guid: v.guid};
		});
	var _user$project$Ports$createUserResponse = _elm_lang$core$Native_Platform.incomingPort(
		'createUserResponse',
		A2(
			_elm_lang$core$Json_Decode$andThen,
			function (ok) {
				return A2(
					_elm_lang$core$Json_Decode$andThen,
					function (err) {
						return _elm_lang$core$Json_Decode$succeed(
							{ok: ok, err: err});
					},
					A2(
						_elm_lang$core$Json_Decode$field,
						'err',
						_elm_lang$core$Json_Decode$oneOf(
							{
								ctor: '::',
								_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$string),
									_1: {ctor: '[]'}
								}
							})));
			},
			A2(
				_elm_lang$core$Json_Decode$field,
				'ok',
				_elm_lang$core$Json_Decode$oneOf(
					{
						ctor: '::',
						_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$string),
							_1: {ctor: '[]'}
						}
					}))));
	var _user$project$Ports$logOutResponse = _elm_lang$core$Native_Platform.incomingPort(
		'logOutResponse',
		_elm_lang$core$Json_Decode$oneOf(
			{
				ctor: '::',
				_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$string),
					_1: {ctor: '[]'}
				}
			}));
	var _user$project$Ports$links = _elm_lang$core$Native_Platform.incomingPort(
		'links',
		_elm_lang$core$Json_Decode$list(
			A2(
				_elm_lang$core$Json_Decode$andThen,
				function (href) {
					return A2(
						_elm_lang$core$Json_Decode$andThen,
						function (timestamp) {
							return A2(
								_elm_lang$core$Json_Decode$andThen,
								function (clickedAt) {
									return A2(
										_elm_lang$core$Json_Decode$andThen,
										function (guid) {
											return _elm_lang$core$Json_Decode$succeed(
												{href: href, timestamp: timestamp, clickedAt: clickedAt, guid: guid});
										},
										A2(_elm_lang$core$Json_Decode$field, 'guid', _elm_lang$core$Json_Decode$string));
								},
								A2(_elm_lang$core$Json_Decode$field, 'clickedAt', _elm_lang$core$Json_Decode$int));
						},
						A2(_elm_lang$core$Json_Decode$field, 'timestamp', _elm_lang$core$Json_Decode$int));
				},
				A2(_elm_lang$core$Json_Decode$field, 'href', _elm_lang$core$Json_Decode$string))));

	var _user$project$Main$resultFromRecord = F2(
		function ($default, record) {
			var ok = A2(_elm_lang$core$Maybe$withDefault, $default, record.ok);
			return A2(
				_elm_lang$core$Maybe$withDefault,
				_elm_lang$core$Result$Ok(ok),
				A2(_elm_lang$core$Maybe$map, _elm_lang$core$Result$Err, record.err));
		});
	var _user$project$Main$defaultLoggedOut = F3(
		function (defaultLoggedOut, loggedInMapper, session) {
			var _p0 = session;
			if (_p0.ctor === 'LoggedIn') {
				return loggedInMapper(_p0._0);
			} else {
				return defaultLoggedOut;
			}
		});
	var _user$project$Main$mapLoggedIn = F2(
		function (mapper, session) {
			var _p1 = session;
			if (_p1.ctor === 'LoggedIn') {
				return _user$project$Types$LoggedIn(
					mapper(_p1._0));
			} else {
				return session;
			}
		});
	var _user$project$Main$setClickedAt = function (link) {
		return _user$project$Types$Timestamp(
			function (timestamp) {
				return A2(_user$project$Types$ClickedAt, link, timestamp);
			});
	};
	var _user$project$Main$view = function (model) {
		var content = function () {
			var _p2 = model.session;
			if (_p2.ctor === 'LoggedIn') {
				return A4(
					_MichaelCombs28$elm_mdl$Material_Layout$render,
					_user$project$Types$Mdl,
					model.mdl,
					{
						ctor: '::',
						_0: _MichaelCombs28$elm_mdl$Material_Layout$fixedHeader,
						_1: {ctor: '[]'}
					},
					{
						header: {
							ctor: '::',
							_0: A2(
								_MichaelCombs28$elm_mdl$Material_Layout$row,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(_p2._0.email),
									_1: {
										ctor: '::',
										_0: _MichaelCombs28$elm_mdl$Material_Layout$spacer,
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$button,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(_user$project$Types$LogOut),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('sign out'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								}),
							_1: {ctor: '[]'}
						},
						main: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$br,
								{ctor: '[]'},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$style(
											{
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'textAlign', _1: 'center'},
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$input,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$style(
													{ctor: '[]'}),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onInput(_user$project$Types$SetLinkInputText),
													_1: {ctor: '[]'}
												}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$button,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(_user$project$Types$CreateLink),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('submit link'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_MichaelCombs28$elm_mdl$Material_List$ul,
										{
											ctor: '::',
											_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'maxWidth', '50em'),
											_1: {
												ctor: '::',
												_0: A2(_MichaelCombs28$elm_mdl$Material_Options$css, 'margin', '0 auto'),
												_1: {ctor: '[]'}
											}
										},
										_elm_lang$core$List$concat(
											A2(
												_elm_lang$core$List$map,
												function (link) {
													var linkHref = A2(_elm_lang$core$String$contains, '//', link.href) ? link.href : A2(_elm_lang$core$Basics_ops['++'], '//', link.href);
													return {
														ctor: '::',
														_0: A2(
															_MichaelCombs28$elm_mdl$Material_List$li,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_MichaelCombs28$elm_mdl$Material_List$content,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$div,
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html_Events$onClick(
																					_user$project$Types$DeleteLink(link.guid)),
																				_1: {
																					ctor: '::',
																					_0: _elm_lang$html$Html_Attributes$style(
																						{
																							ctor: '::',
																							_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
																							_1: {
																								ctor: '::',
																								_0: {ctor: '_Tuple2', _0: 'marginRight', _1: '1.5em'},
																								_1: {ctor: '[]'}
																							}
																						}),
																					_1: {ctor: '[]'}
																				}
																			},
																			{
																				ctor: '::',
																				_0: A2(
																					_MichaelCombs28$elm_mdl$Material_Icon$view,
																					'delete',
																					{
																						ctor: '::',
																						_0: _MichaelCombs28$elm_mdl$Material_Icon$size24,
																						_1: {ctor: '[]'}
																					}),
																				_1: {ctor: '[]'}
																			}),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_elm_lang$html$Html$a,
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html_Attributes$target('_blank'),
																					_1: {
																						ctor: '::',
																						_0: _elm_lang$html$Html_Attributes$href(linkHref),
																						_1: {
																							ctor: '::',
																							_0: _elm_lang$html$Html_Attributes$style(
																								{
																									ctor: '::',
																									_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
																									_1: {ctor: '[]'}
																								}),
																							_1: {
																								ctor: '::',
																								_0: _elm_lang$html$Html_Events$onClick(
																									_user$project$Main$setClickedAt(link)),
																								_1: {ctor: '[]'}
																							}
																						}
																					}
																				},
																				{
																					ctor: '::',
																					_0: A2(
																						_MichaelCombs28$elm_mdl$Material_Icon$view,
																						'subdirectory_arrow_right',
																						{
																							ctor: '::',
																							_0: _MichaelCombs28$elm_mdl$Material_Icon$size24,
																							_1: {ctor: '[]'}
																						}),
																					_1: {ctor: '[]'}
																				}),
																			_1: {ctor: '[]'}
																		}
																	}),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_MichaelCombs28$elm_mdl$Material_List$content2,
																		{ctor: '[]'},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text(link.href),
																			_1: {ctor: '[]'}
																		}),
																	_1: {ctor: '[]'}
																}
															}),
														_1: {ctor: '[]'}
													};
												},
												model.links))),
									_1: {ctor: '[]'}
								}
							}
						},
						drawer: {ctor: '[]'},
						tabs: {
							ctor: '_Tuple2',
							_0: {ctor: '[]'},
							_1: {ctor: '[]'}
						}
					});
			} else {
				var _p3 = _p2._0;
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_MichaelCombs28$elm_mdl$Material_Layout$row,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$input,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$placeholder('email'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onInput(
														function (email) {
															return _user$project$Types$SetLoginForm(
																_elm_lang$core$Native_Utils.update(
																	_p3,
																	{email: email}));
														}),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$style(
															{
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$input,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$placeholder('password'),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$style(
															{
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: _elm_lang$html$Html_Events$onInput(
																function (password) {
																	return _user$project$Types$SetLoginForm(
																		_elm_lang$core$Native_Utils.update(
																			_p3,
																			{password: password}));
																}),
															_1: {ctor: '[]'}
														}
													}
												},
												{ctor: '[]'}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$button,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(_user$project$Types$LogIn),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('register/login'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					});
			}
		}();
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: content,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$map,
						_user$project$Types$Snack,
						_MichaelCombs28$elm_mdl$Material_Snackbar$view(model.snackbar)),
					_1: {ctor: '[]'}
				}
			});
	};
	var _user$project$Main$mapSnackbarTuple = F2(
		function (model, tuple) {
			return A2(
				_MichaelCombs28$elm_mdl$Material_Helpers$map2nd,
				_elm_lang$core$Platform_Cmd$map(_user$project$Types$Snack),
				A2(
					_MichaelCombs28$elm_mdl$Material_Helpers$map1st,
					function (s) {
						return _elm_lang$core$Native_Utils.update(
							model,
							{snackbar: s});
					},
					tuple));
		});
	var _user$project$Main$addSnackbar = F3(
		function (contents, header, model) {
			var snackbar = A3(
				_MichaelCombs28$elm_mdl$Material_Snackbar$snackbar,
				{ctor: '_Tuple0'},
				contents,
				header);
			return A2(
				_user$project$Main$mapSnackbarTuple,
				model,
				A2(_MichaelCombs28$elm_mdl$Material_Snackbar$add, snackbar, model.snackbar));
		});
	var _user$project$Main$emptyLogin = _user$project$Types$LoggedOut(
		{email: '', password: ''});
	var _user$project$Main$init = function (_p4) {
		var _p5 = _p4;
		var session = A2(
			_elm_lang$core$Maybe$withDefault,
			_user$project$Main$emptyLogin,
			A2(
				_elm_lang$core$Maybe$map,
				function (_p6) {
					var _p7 = _p6;
					return _user$project$Types$LoggedIn(
						{email: _p7.email, linkInputText: '', uid: _p7.uid});
				},
				_p5.user));
		var initialModel = {
			links: {ctor: '[]'},
			session: session,
			mdl: _MichaelCombs28$elm_mdl$Material$model,
			snackbar: _MichaelCombs28$elm_mdl$Material_Snackbar$model
		};
		return {ctor: '_Tuple2', _0: initialModel, _1: _elm_lang$core$Platform_Cmd$none};
	};
	var _user$project$Main$update = F2(
		function (msg, model) {
			var _p8 = msg;
			switch (_p8.ctor) {
				case 'Timestamp':
					return {
						ctor: '_Tuple2',
						_0: model,
						_1: A2(_elm_lang$core$Task$perform, _p8._0, _elm_lang$core$Time$now)
					};
				case 'DeleteLink':
					return {
						ctor: '_Tuple2',
						_0: model,
						_1: _user$project$Ports$deleteLink(_p8._0)
					};
				case 'Snack':
					return A2(
						_user$project$Main$mapSnackbarTuple,
						model,
						A2(_MichaelCombs28$elm_mdl$Material_Snackbar$update, _p8._0, model.snackbar));
				case 'ClickedAt':
					var newLink = _elm_lang$core$Native_Utils.update(
						_p8._0,
						{
							clickedAt: _elm_lang$core$Basics$round(_p8._1)
						});
					return {
						ctor: '_Tuple2',
						_0: model,
						_1: _user$project$Ports$updateLink(newLink)
					};
				case 'SetLoginForm':
					var newModel = function () {
						var _p9 = model.session;
						if (_p9.ctor === 'LoggedOut') {
							return _elm_lang$core$Native_Utils.update(
								model,
								{
									session: _user$project$Types$LoggedOut(_p8._0)
								});
						} else {
							return model;
						}
					}();
					return {ctor: '_Tuple2', _0: newModel, _1: _elm_lang$core$Platform_Cmd$none};
				case 'SetLinks':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{links: _p8._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'SetLinkInputText':
					var session = A2(
						_user$project$Main$mapLoggedIn,
						function (loggedInModel) {
							return _elm_lang$core$Native_Utils.update(
								loggedInModel,
								{linkInputText: _p8._0});
						},
						model.session);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{session: session}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'CreateLink':
					var cmd = A3(
						_user$project$Main$defaultLoggedOut,
						_elm_lang$core$Platform_Cmd$none,
						function (_p10) {
							var _p11 = _p10;
							return _user$project$Ports$createLink(
								{href: _p11.linkInputText, uid: _p11.uid});
						},
						model.session);
					return {ctor: '_Tuple2', _0: model, _1: cmd};
				case 'LogIn':
					var cmd = function () {
						var _p12 = model.session;
						if (_p12.ctor === 'LoggedOut') {
							return _user$project$Ports$createUser(_p12._0);
						} else {
							return _elm_lang$core$Platform_Cmd$none;
						}
					}();
					return {ctor: '_Tuple2', _0: model, _1: cmd};
				case 'LogOut':
					var cmd = function () {
						var _p13 = model.session;
						if (_p13.ctor === 'LoggedIn') {
							return _user$project$Ports$logOut(_p13._0.uid);
						} else {
							return _elm_lang$core$Platform_Cmd$none;
						}
					}();
					return {ctor: '_Tuple2', _0: model, _1: cmd};
				case 'LogOutResponse':
					var _p14 = _elm_lang$core$Maybe$map(
						function (str) {
							return A2(_elm_lang$core$Debug$log, 'log out error', str);
						});
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{session: _user$project$Main$emptyLogin}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'Mdl':
					return A2(_MichaelCombs28$elm_mdl$Material$update, _p8._0, model);
				default:
					var _p15 = model.session;
					if (_p15.ctor === 'LoggedOut') {
						var _p17 = _p15._0;
						var _p16 = _p8._0;
						if (_p16.ctor === 'Ok') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									model,
									{
										session: _user$project$Types$LoggedIn(
											{email: _p17.email, linkInputText: '', uid: _p16._0})
									}),
								_1: _elm_lang$core$Platform_Cmd$none
							};
						} else {
							return A3(
								_user$project$Main$addSnackbar,
								'ERROR',
								_p16._0,
								_elm_lang$core$Native_Utils.update(
									model,
									{
										session: _user$project$Types$LoggedOut(_p17)
									}));
						}
					} else {
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
			}
		});
	var _user$project$Main$main = _elm_lang$html$Html$programWithFlags(
		{
			init: _user$project$Main$init,
			update: _user$project$Main$update,
			subscriptions: function (model) {
				return _elm_lang$core$Platform_Sub$batch(
					{
						ctor: '::',
						_0: _user$project$Ports$links(_user$project$Types$SetLinks),
						_1: {
							ctor: '::',
							_0: _user$project$Ports$createUserResponse(
								function (_p18) {
									return _user$project$Types$CreateUserResponse(
										A2(_user$project$Main$resultFromRecord, '', _p18));
								}),
							_1: {
								ctor: '::',
								_0: _user$project$Ports$logOutResponse(_user$project$Types$LogOutResponse),
								_1: {
									ctor: '::',
									_0: A2(_MichaelCombs28$elm_mdl$Material$subscriptions, _user$project$Types$Mdl, model),
									_1: {ctor: '[]'}
								}
							}
						}
					});
			},
			view: _user$project$Main$view
		})(
		A2(
			_elm_lang$core$Json_Decode$andThen,
			function (user) {
				return _elm_lang$core$Json_Decode$succeed(
					{user: user});
			},
			A2(
				_elm_lang$core$Json_Decode$field,
				'user',
				_elm_lang$core$Json_Decode$oneOf(
					{
						ctor: '::',
						_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Json_Decode$map,
								_elm_lang$core$Maybe$Just,
								A2(
									_elm_lang$core$Json_Decode$andThen,
									function (email) {
										return A2(
											_elm_lang$core$Json_Decode$andThen,
											function (uid) {
												return _elm_lang$core$Json_Decode$succeed(
													{email: email, uid: uid});
											},
											A2(_elm_lang$core$Json_Decode$field, 'uid', _elm_lang$core$Json_Decode$string));
									},
									A2(_elm_lang$core$Json_Decode$field, 'email', _elm_lang$core$Json_Decode$string))),
							_1: {ctor: '[]'}
						}
					}))));

	var Elm = {};
	Elm['Main'] = Elm['Main'] || {};
	if (typeof _user$project$Main$main !== 'undefined') {
	    _user$project$Main$main(Elm['Main'], 'Main', undefined);
	}

	if (typeof define === "function" && define['amd'])
	{
	  define([], function() { return Elm; });
	  return;
	}

	if (typeof module === "object")
	{
	  module['exports'] = Elm;
	  return;
	}

	var globalElm = this['Elm'];
	if (typeof globalElm === "undefined")
	{
	  this['Elm'] = Elm;
	  return;
	}

	for (var publicModule in Elm)
	{
	  if (publicModule in globalElm)
	  {
	    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
	  }
	  globalElm[publicModule] = Elm[publicModule];
	}

	}).call(this);



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var firebase = __webpack_require__(2);
	var Promise = firebase.Promise;
	var xtend = __webpack_require__(7);

	var refs = {};

	function logOut(uid, app) {
	  firebase.auth().signOut().then(function() {
	    if (refs.linksRef) {
	      refs.linksRef.off();
	      refs.linksRef = null;
	    }

	    app.ports.logOutResponse.send(null);
	  }, function(error) {
	    app.ports.logOutResponse.send(String(error));
	  });
	}

	function createUser(loginForm, app) {
	  firebase
	    .auth()
	    .createUserWithEmailAndPassword(loginForm.email, loginForm.password)
	    .catch(function(error) {
	      return error.code === 'auth/email-already-in-use' ?
	        firebase.auth().signInWithEmailAndPassword(loginForm.email, loginForm.password) :
	        Promise.reject(error);
	    })
	    .then(function(user) {
	      var uid = user.uid || 'fake-id';
	      linkChanges(app, uid);
	      app.ports.createUserResponse.send({ ok: uid, err: null });
	    })
	    .catch(function(err) {
	      app.ports.createUserResponse.send({ err: err.message || "", ok: null });
	    });
	}

	function deleteLink(guid, app) {
	  if (refs.linksRef) {
	    refs.linksRef.child(guid).remove();
	  }
	}

	function updateLink(link, app) {
	  if (refs.linksRef) {
	    var newLink = xtend(link);
	    delete newLink.guid;

	    refs.linksRef.child(link.guid).set(newLink);
	  }
	}

	function createLink(payload) {
	  var now = Date.now();

	  firebase.database().ref('links/' + payload.uid).push().set({
	    href: payload.href,
	    clickedAt: 0,
	    timestamp: now
	  });
	}

	function linkChanges(app, uid) {
	  refs.linksRef = refs.linksRef ||
	    firebase.database().ref('links/' + uid);

	  // TODO: add pagination with child_added event
	  refs.linksRef.on('value', function(snapshot) {
	    var vals = snapshot.val();

	    var links = Object.keys(vals || {}).map(function(guid) {
	      var link = vals[guid];

	      return {
	        guid: guid,
	        href: link.href,
	        clickedAt: link.clickedAt || 0,
	        timestamp: link.timestamp
	      };
	    }).sort(function(link1, link2) {
	      var val;

	      if (link1.clickedAt < link2.clickedAt) {
	        val = 1;
	      } else if (link1.clickedAt > link2.clickedAt) {
	        val = -1;
	      } else {
	        val = (link1.timestamp < link2.timestamp) ? 1 : -1;
	      }

	      return val;
	    });

	    app.ports.links.send(links);
	  });
	}

	function linkChangesFromUser(app, user) {
	  if (user) {
	    linkChanges(app, user.uid);
	  }
	}

	module.exports = {
	  receive: {
	    createLink: createLink,
	    createUser: createUser,
	    deleteLink: deleteLink,
	    logOut: logOut,
	    updateLink: updateLink
	  },
	  send: [
	    linkChangesFromUser
	  ]
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = extend

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function extend() {
	    var target = {}

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ }
/******/ ]);