
/*==================================
=            countUp.js            =
==================================*/
var CountUp=function(a,t,n,e,i,r){for(var o=0,s=["webkit","moz","ms","o"],m=0;m<s.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[s[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[m]+"CancelAnimationFrame"]||window[s[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var t=(new Date).getTime(),n=Math.max(0,16-(t-o)),e=window.setTimeout(function(){a(t+n)},n);return o=t+n,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var u=this;u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var l in r)r.hasOwnProperty(l)&&(u.options[l]=r[l]);""===u.options.separator&&(u.options.useGrouping=!1),u.options.prefix||(u.options.prefix=""),u.options.suffix||(u.options.suffix=""),u.d="string"==typeof a?document.getElementById(a):a,u.startVal=Number(t),u.endVal=Number(n),u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.decimals=Math.max(0,e||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(i)||2e3,u.formatNumber=function(a){a=a.toFixed(u.decimals),a+="";var t,n,e,i;if(t=a.split("."),n=t[0],e=t.length>1?u.options.decimal+t[1]:"",i=/(\d+)(\d{3})/,u.options.useGrouping)for(;i.test(n);)n=n.replace(i,"$1"+u.options.separator+"$2");return u.options.prefix+n+e+u.options.suffix},u.easeOutExpo=function(a,t,n,e){return n*(-Math.pow(2,-10*a/e)+1)*1024/1023+t},u.easingFn=u.options.easingFn?u.options.easingFn:u.easeOutExpo,u.formattingFn=u.options.formattingFn?u.options.formattingFn:u.formatNumber,u.version=function(){return"1.7.1"},u.printValue=function(a){var t=u.formattingFn(a);"INPUT"===u.d.tagName?this.d.value=t:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=t:this.d.innerHTML=t},u.count=function(a){u.startTime||(u.startTime=a),u.timestamp=a;var t=a-u.startTime;u.remaining=u.duration-t,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.easingFn(t,0,u.startVal-u.endVal,u.duration):u.frameVal=u.easingFn(t,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(t/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(t/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),t<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(a){return u.callback=a,u.rAF=requestAnimationFrame(u.count),!1},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.startVal=t,cancelAnimationFrame(u.rAF),u.printValue(u.startVal)},u.update=function(a){cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=Number(a),u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count)},u.printValue(u.startVal)};;
//https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(n,t,u){var e;return function(){var i=this,o=arguments,a=function(){e=null,u||n.apply(i,o)},c=u&&!e;clearTimeout(e),e=setTimeout(a,t),c&&n.apply(i,o)}};
/*
 * enquire.js v2.1.6 - Awesome Media Queries in JavaScript
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.enquire=t()}}(function(){return function t(e,n,i){function o(s,u){if(!n[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var h=n[s]={exports:{}};e[s][0].call(h.exports,function(t){var n=e[s][1][t];return o(n?n:t)},h,h.exports,t,e,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e){function n(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}var i=t(3),o=t(4).each;n.prototype={constuctor:n,addHandler:function(t){var e=new i(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;o(e,function(n,i){return n.equals(t)?(n.destroy(),!e.splice(i,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){o(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";o(this.handlers,function(e){e[t]()})}},e.exports=n},{3:3,4:4}],2:[function(t,e){function n(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}var i=t(1),o=t(4),r=o.each,s=o.isFunction,u=o.isArray;n.prototype={constructor:n,register:function(t,e,n){var o=this.queries,a=n&&this.browserIsIncapable;return o[t]||(o[t]=new i(t,a)),s(e)&&(e={match:e}),u(e)||(e=[e]),r(e,function(e){s(e)&&(e={match:e}),o[t].addHandler(e)}),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},e.exports=n},{1:1,4:4}],3:[function(t,e){function n(t){this.options=t,!t.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},e.exports=n},{}],4:[function(t,e){function n(t,e){var n,i=0,o=t.length;for(i;o>i&&(n=e(t[i],i),n!==!1);i++);}function i(t){return"[object Array]"===Object.prototype.toString.apply(t)}function o(t){return"function"==typeof t}e.exports={isFunction:o,isArray:i,each:n}},{}],5:[function(t,e){var n=t(2);e.exports=new n},{2:2}]},{},[5])(5)});;
/*
For use with GreenSock's MorphSVGPlugin - helps find the best-looking shapeIndex value.

USAGE:
findShapeIndex("#yourTarget", "#otherShape", {duration:3, ease:Linear.easeNone, size:10});

You can pass in either the other shape's selector text, or the full path data, like:

findShapeIndex("#yourTarget", "M506.066,200L400,306.066L293.934,200L400,93.934L506.066,200z", {duration:3, ease:Linear.easeNone, size:10});

Tap the up/down arrows (or left/right or "u"/"d") to change the shapeIndex.

Requires: TweenLite 1.18.0 (or later), MorphSVGPlugin

LAST UPDATED: 2015-10-21
Copyright 2015, GreenSock Inc.
@author: Jack Doyle, jack@greensock.com
*/

function findShapeIndex(target, endShape, vars) {
	vars = vars || {};
	var _doc = document,
			TweenLite = (window.GreenSockGlobals || window).TweenLite,
			_get = function(e) {
				return _doc.querySelectorAll(e);
			},
			_createSVG = function(type, attributes) {
				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
						reg = /([a-z])([A-Z])/g,
						p;
				for (p in attributes) {
					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
				}
				return element;
			},
			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			_parseShape = function(shape, forcePath) {
				var e, type;
				if (typeof(shape) !== "string" || (shape.match(_numbersExp) || []).length < 3) {
					e = TweenLite.selector(shape);
					if (e && e[0]) {
						e = e[0];
						type = e.nodeName.toUpperCase();
						if (forcePath && type !== "PATH") { //if we were passed an element (or selector text for an element) that isn't a path, convert it.
							e = MorphSVGPlugin.convertToPath(e, false)[0];
							type = "PATH";
						}
						shape = e.getAttribute(type === "PATH" ? "d" : "points") || "";
					}
					else {
						console.log("WARNING: invalid morph to: " + shape);
						shape = false;
					}
				}
				return shape;
			},
			startDot, endDot, incrementButton, decrementButton,
			_setup = function() {
				var e = _doc.createElement("div"),
						label = _doc.createElement("div"),
						body = _get("body")[0];
				incrementButton = _doc.createElement("div");
				decrementButton = _doc.createElement("div");
				label.setAttribute("id", "shapeIndexLabel");
				startDot = _createSVG("circle", {cx:0, cy:0, r:(vars.startStrokeWidth || 3) + 3, fill:vars.startStroke || "red"});
				endDot = _createSVG("circle", {cx:0, cy:0, r:(vars.endStrokeWidth || 3) + 3, fill:vars.endStroke || "yellow"});
				TweenLite.set(e, {padding:"0px", position:"absolute", bottom:0, fontSize:"20px", textAlign:"center", backgroundColor: "black", color:"#91e600", border:"1px solid #999", left:"50%", xPercent:-50, yPercent:-50, userSelect:"none", fontFamily:"sans-serif"});
				TweenLite.set(label, {display:"inline-block", minWidth:"210px", marginRight:"10px", textAlign:"center", marginLeft:"10px"});
				TweenLite.set([incrementButton, decrementButton], {display:"inline-block", padding:"0 15px", color:"#ccc", height:"50px", lineHeight:"48px", cursor:"pointer"});
				TweenLite.set(decrementButton, {borderRight:"1px solid #999"});
				TweenLite.set(incrementButton, {borderLeft:"1px solid #999"});
				decrementButton.innerHTML = " - ";
				incrementButton.innerHTML = " + ";
				e.appendChild(decrementButton);
				e.appendChild(label);
				e.appendChild(incrementButton);
				if (body) {
					body.appendChild(e);
				}
				return label;
			},
			label = _get("#shapeIndexLabel")[0] || _setup(),
			index = 0,
			_yoyo = function() {
				shapeTween.reversed(!shapeTween.reversed()).resume();
				dotTween.reversed(!dotTween.reversed()).resume();
			},
			shapeTween,	dotTween, startBezier, endBezier,
			dotProxy = {x:0, y:0},
			_getFirstCoordinates = function(start, end, shapeIndex) {
				startBezier = MorphSVGPlugin.pathDataToRawBezier(start);
				endBezier = MorphSVGPlugin.pathDataToRawBezier(end);
				MorphSVGPlugin.equalizeSegmentQuantity(startBezier, endBezier, shapeIndex);
				return [startBezier[0][0], startBezier[0][1], endBezier[0][0], endBezier[0][1]];
			},
			_startTween = function() {
				var coordinates = _getFirstCoordinates(target.getAttribute("d"), _parseShape(endShape, true), index);
				dotProxy.x = coordinates[0];
				dotProxy.y = coordinates[1];
				startDot.setAttribute("cx", dotProxy.x);
				startDot.setAttribute("cy", dotProxy.y);
				endDot.setAttribute("cx", coordinates[2]);
				endDot.setAttribute("cy", coordinates[3]);
				shapeTween = TweenLite.to(target, vars.duration || 3, {delay:0.5, morphSVG:{shape:endShape, shapeIndex:index}, ease:vars.ease || "Linear.easeNone", onComplete:_yoyo, onReverseComplete:_yoyo});
				dotTween = TweenLite.to(dotProxy, vars.duration || 3, {delay:0.5, x:coordinates[2], y:coordinates[3], ease:vars.ease || "Linear.easeNone", onUpdate:function() {
					startDot.setAttribute("cx", dotProxy.x);
					startDot.setAttribute("cy", dotProxy.y);
				}});
			},
			_refresh = function() {
				label.innerHTML = "shapeIndex: " +  index + (index === autoIndex ? " (auto)" : "");
				shapeTween.seek(0).kill();
				dotTween.seek(0).kill();
				_startTween();
				TweenLite.fromTo(label.parentNode, 0.4, {backgroundColor:"#777"}, {backgroundColor:"black", ease:Linear.easeNone});
			},
			_increment = function() {
				index = (index + 1) % (maxIndex + 1);
				_refresh();
			},
			_decrement = function() {
				index = (index - 1) % (maxIndex + 1);
				_refresh();
			},
			autoIndex,	maxIndex, endTarget;
	if (typeof(target) === "string") {
		target = TweenLite.selector(target)[0];
	}
	if (!target) {
		console.log("ERROR: target not found for findShapeIndex(). Please use a valid target.");
		return;
	} else if (target.nodeName && target.nodeName.toUpperCase() !== "PATH") {
		console.log("ERROR: target of findShapeIndex() must be a path.");
		return;
	} else if (target.push && target[0] && target[0].nodeName) {
		target = target[0];
	}
	if (target.parentNode) {
		target.parentNode.appendChild(endDot);
		target.parentNode.appendChild(startDot);
	}
	if (typeof(endShape) !== "string" || (endShape.match(_numbersExp) || []).length < 3) {
		endTarget = TweenLite.selector(endShape);
		if (endTarget && endTarget[0]) {
			endTarget = endTarget[0];
			TweenLite.set(endTarget, {display:"block", strokeWidth:vars.endStrokeWidth || 3, stroke:vars.endStroke || "yellow", fill:vars.endFill || "none", visibility:"visible", opacity:vars.endOpacity || 0.7});
		}
	}
	TweenLite.set(target, {display:"block", strokeWidth:vars.startStrokeWidth || 3, stroke:vars.startStroke || "red", fill:vars.startFill || "none", visibility:"visible", opacity:vars.startOpacity || 0.7});
	startBezier = MorphSVGPlugin.pathDataToRawBezier(target.getAttribute("d"));
	endBezier = MorphSVGPlugin.pathDataToRawBezier(_parseShape(endShape, true));
	autoIndex = index = Math.round(MorphSVGPlugin.equalizeSegmentQuantity(startBezier, endBezier, "auto")[0]); //also handles subdividing!
	maxIndex = (startBezier[0].length / 6) | 0;
	TweenLite.killTweensOf([target, endShape], false, {morphSVG:true}); //kill other tweens so they don't interfere with our yoyo-ing one.
	_startTween();
	label.innerHTML = "shapeIndex: " +  index + (index === autoIndex ? " (auto)" : "");
	window.addEventListener("keydown", function(event) {
		var key = event.keyCode;
		if (key === 38 || key === 39 || key === 85) { //right or up arrows (increment)
			_increment();
		} else if (key === 37 || key === 40 || key === 68) { //left or down arrows (decrement)
			_decrement();
		}
	});
	incrementButton.addEventListener("click", _increment);
	decrementButton.addEventListener("click", _decrement);
};
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict"; _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) { var d = function (a) { var b, c = [], d = a.length; for (b = 0; b !== d; c.push(a[b++])); return c }, e = function (a, b, c) { var d, e, f = a.cycle; for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]; delete a.cycle }, f = function (a, b, d) { c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = f.prototype.render }, g = 1e-10, h = c._internals, i = h.isSelector, j = h.isArray, k = f.prototype = c.to({}, .1, {}), l = []; f.version = "2.0.2", k.constructor = f, k.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function () { return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this) }, k.updateTo = function (a, b) { var d, e = this.ratio, f = this.vars.immediateRender || a.immediateRender; b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)); for (d in a) this.vars[d] = a[d]; if (this._initted || f) if (b) this._initted = !1, f && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) { var g = this._totalTime; this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1) } else if (this._initted = !1, this._init(), this._time > 0 || f) for (var h, i = 1 / (1 - e), j = this._firstPT; j;)h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next; return this }, k.render = function (a, b, d) { this._initted || 0 === this._duration && this.vars.repeat && this.invalidate(); var e, f, i, j, k, l, m, n, o, p = this._dirty ? this.totalDuration() : this._totalDuration, q = this._time, r = this._totalTime, s = this._cycle, t = this._duration, u = this._rawPrevTime; if (a >= p - 1e-7 && a >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = t, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, f = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === t && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0), (0 > u || 0 >= a && a >= -1e-7 || u === g && "isPause" !== this.data) && u !== a && (d = !0, u > g && (f = "onReverseComplete")), this._rawPrevTime = n = !b || a || u === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === t && u > 0) && (f = "onReverseComplete", e = this._reversed), 0 > a && (this._active = !1, 0 === t && (this._initted || !this.vars.lazy || d) && (u >= 0 && (d = !0), this._rawPrevTime = n = !b || a || u === a ? a : g)), this._initted || (d = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (j = t + this._repeatDelay, this._cycle = this._totalTime / j >> 0, 0 !== this._cycle && this._cycle === this._totalTime / j && a >= r && this._cycle-- , this._time = this._totalTime - this._cycle * j, this._yoyo && 0 !== (1 & this._cycle) && (this._time = t - this._time, o = this._yoyoEase || this.vars.yoyoEase, o && (this._yoyoEase || (o !== !0 || this._initted ? this._yoyoEase = o = o === !0 ? this._ease : o instanceof Ease ? o : Ease.map[o] : (o = this.vars.ease, this._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), this.ratio = o ? 1 - o.getRatio((t - this._time) / t) : 0)), this._time > t ? this._time = t : this._time < 0 && (this._time = 0)), this._easeType && !o ? (k = this._time / t, l = this._easeType, m = this._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : this._time / t < .5 ? this.ratio = k / 2 : this.ratio = 1 - k / 2) : o || (this.ratio = this._ease.getRatio(this._time / t))), q === this._time && !d && s === this._cycle) return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate"))); if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!d && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = q, this._totalTime = r, this._rawPrevTime = u, this._cycle = s, h.lazyTweens.push(this), void (this._lazy = [a, b]); !this._time || e || o ? e && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / t) } for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== q && a >= 0 && (this._active = !0), 0 === r && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === t) && (b || this._callback("onStart"))), i = this._firstPT; i;)i.f ? i.t[i.p](i.c * this.ratio + i.s) : i.t[i.p] = i.c * this.ratio + i.s, i = i._next; this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || (this._totalTime !== r || f) && this._callback("onUpdate")), this._cycle !== s && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), f && (!this._gc || d) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[f] && this._callback(f), 0 === t && this._rawPrevTime === g && n !== g && (this._rawPrevTime = 0)) }, f.to = function (a, b, c) { return new f(a, b, c) }, f.from = function (a, b, c) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c) }, f.fromTo = function (a, b, c, d) { return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d) }, f.staggerTo = f.allTo = function (a, b, g, h, k, m, n) { h = h || 0; var o, p, q, r, s = 0, t = [], u = function () { g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l) }, v = g.cycle, w = g.startAt && g.startAt.cycle; for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && (a = d(a), a.reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++) { p = {}; for (r in g) p[r] = g[r]; if (v && (e(p, a, q), null != p.duration && (b = p.duration, delete p.duration)), w) { w = p.startAt = {}; for (r in g.startAt) w[r] = g.startAt[r]; e(p.startAt, a, q) } p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h } return t }, f.staggerFrom = f.allFrom = function (a, b, c, d, e, g, h) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h) }, f.staggerFromTo = f.allFromTo = function (a, b, c, d, e, g, h, i) { return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i) }, f.delayedCall = function (a, b, c, d, e) { return new f(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, useFrames: e, overwrite: 0 }) }, f.set = function (a, b) { return new f(a, 0, b) }, f.isTweening = function (a) { return c.getTweensOf(a, !0).length > 0 }; var m = function (a, b) { for (var d = [], e = 0, f = a._first; f;)f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next; return d }, n = f.getAllTweens = function (b) { return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b)) }; f.killAll = function (a, c, d, e) { null == c && (c = !0), null == d && (d = !0); var f, g, h, i = n(0 != e), j = i.length, k = c && d && e; for (h = 0; j > h; h++)g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1)) }, f.killChildTweensOf = function (a, b) { if (null != a) { var e, g, k, l, m, n = h.tweenLookup; if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a)) for (l = a.length; --l > -1;)f.killChildTweensOf(a[l], b); else { e = []; for (k in n) for (g = n[k].target.parentNode; g;)g === a && (e = e.concat(n[k].tweens)), g = g.parentNode; for (m = e.length, l = 0; m > l; l++)b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1) } } }; var o = function (a, c, d, e) { c = c !== !1, d = d !== !1, e = e !== !1; for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;)g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a) }; return f.pauseAll = function (a, b, c) { o(!0, a, b, c) }, f.resumeAll = function (a, b, c) { o(!1, a, b, c) }, f.globalTimeScale = function (b) { var d = a._rootTimeline, e = c.ticker.time; return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale }, k.progress = function (a, b) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() }, k.totalProgress = function (a, b) { return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() }, k.time = function (a, b) { return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time }, k.duration = function (b) { return arguments.length ? a.prototype.duration.call(this, b) : this._duration }, k.totalDuration = function (a) { return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, k.repeat = function (a) { return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat }, k.repeatDelay = function (a) { return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay }, k.yoyo = function (a) { return arguments.length ? (this._yoyo = a, this) : this._yoyo }, f }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) { var d = function (a) { b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate; var c, d, e = this.vars; for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c)); i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger) }, e = 1e-10, f = c._internals, g = d._internals = {}, h = f.isSelector, i = f.isArray, j = f.lazyTweens, k = f.lazyRender, l = _gsScope._gsDefine.globals, m = function (a) { var b, c = {}; for (b in a) c[b] = a[b]; return c }, n = function (a, b, c) { var d, e, f = a.cycle; for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]; delete a.cycle }, o = g.pauseCallback = function () { }, p = function (a) { var b, c = [], d = a.length; for (b = 0; b !== d; c.push(a[b++])); return c }, q = d.prototype = new b; return d.version = "2.0.2", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function (a, b, d, e) { var f = d.repeat && l.TweenMax || c; return b ? this.add(new f(a, b, d), e) : this.set(a, d, e) }, q.from = function (a, b, d, e) { return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e) }, q.fromTo = function (a, b, d, e, f) { var g = e.repeat && l.TweenMax || c; return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f) }, q.staggerTo = function (a, b, e, f, g, i, j, k) { var l, o, q = new d({ onComplete: i, onCompleteParams: j, callbackScope: k, smoothChildTiming: this.smoothChildTiming }), r = e.cycle; for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++)l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f); return this.add(q, g) }, q.staggerFrom = function (a, b, c, d, e, f, g, h) { return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h) }, q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) { return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i) }, q.call = function (a, b, d, e) { return this.add(c.delayedCall(0, a, b, d), e) }, q.set = function (a, b, d) { return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d) }, d.exportRoot = function (a, b) { a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0); var e, f, g, h, i = new d(a), j = i._timeline; for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;)h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h; return j.add(i, 0), e && i.totalDuration(), i }, q.add = function (e, f, g, h) { var j, k, l, m, n, o; if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) { if (e instanceof Array || e && e.push && i(e)) { for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++)i(m = e[l]) && (m = new d({ tweens: m })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h; return this._uncache(!0) } if ("string" == typeof e) return this.addLabel(e, f); if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string."; e = c.delayedCall(0, e) } if (b.prototype.add.call(this, e, f), e._time && (j = Math.max(0, Math.min(e.totalDuration(), (this.rawTime() - e._startTime) * e._timeScale)), Math.abs(j - e._totalTime) > 1e-5 && e.render(j, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (n = this, o = n.rawTime() > e._startTime; n._timeline;)o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline; return this }, q.remove = function (b) { if (b instanceof a) { this._remove(b, !1); var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline; return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this } if (b instanceof Array || b && b.push && i(b)) { for (var d = b.length; --d > -1;)this.remove(b[d]); return this } return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b) }, q._remove = function (a, c) { b.prototype._remove.call(this, a, c); var d = this._last; return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, q.append = function (a, b) { return this.add(a, this._parseTimeOrLabel(null, b, !0, a)) }, q.insert = q.insertMultiple = function (a, b, c, d) { return this.add(a, b || 0, c, d) }, q.appendMultiple = function (a, b, c, d) { return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d) }, q.addLabel = function (a, b) { return this._labels[a] = this._parseTimeOrLabel(b), this }, q.addPause = function (a, b, d, e) { var f = c.delayedCall(0, o, d, e || this); return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a) }, q.removeLabel = function (a) { return delete this._labels[a], this }, q.getLabelTime = function (a) { return null != this._labels[a] ? this._labels[a] : -1 }, q._parseTimeOrLabel = function (b, c, d, e) { var f, g; if (e instanceof a && e.timeline === this) this.remove(e); else if (e && (e instanceof Array || e.push && i(e))) for (g = e.length; --g > -1;)e[g] instanceof a && e[g].timeline === this && this.remove(e[g]); if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d); if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f); else { if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c; c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f } return Number(b) + c }, q.seek = function (a, b) { return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1) }, q.stop = function () { return this.paused(!0) }, q.gotoAndPlay = function (a, b) { return this.play(a, b) }, q.gotoAndStop = function (a, b) { return this.pause(a, b) }, q.render = function (a, b, c) { this._gc && this._enabled(!0, !1); var d, f, g, h, i, l, m, n = this._time, o = this._dirty ? this.totalDuration() : this._totalDuration, p = this._startTime, q = this._timeScale, r = this._paused; if (n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0) this._totalTime = this._time = o, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = o + 1e-4; else if (1e-7 > a) if (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a; else { if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f) for (d = this._first; d && 0 === d._startTime;)d._duration || (f = !1), d = d._next; a = 0, this._initted || (i = !0) } else { if (this._hasPause && !this._forcingPlayhead && !b) { if (a >= n) for (d = this._first; d && d._startTime <= a && !l;)d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next; else for (d = this._last; d && d._startTime >= a && !l;)d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev; l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay)) } this._totalTime = this._time = this._rawPrevTime = a } if (this._time !== n && this._first || c || i || l) { if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && a > 0 && (this._active = !0), 0 === n && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), m = this._time, m >= n) for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g; else for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) { if (d._active || d._startTime <= n && !d._paused && !d._gc) { if (l === d) { for (l = d._prev; l && l.endTime() > this._time;)l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev; l = null, this.pause() } d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c) } d = g } this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h))) } }, q._hasPausedChild = function () { for (var a = this._first; a;) { if (a._paused || a instanceof d && a._hasPausedChild()) return !0; a = a._next } return !1 }, q.getChildren = function (a, b, d, e) { e = e || -9999999999; for (var f = [], g = this._first, h = 0; g;)g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next; return f }, q.getTweensOf = function (a, b) { var d, e, f = this._gc, g = [], h = 0; for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]); return f && this._enabled(!1, !0), g }, q.recent = function () { return this._recent }, q._contains = function (a) { for (var b = a.timeline; b;) { if (b === this) return !0; b = b.timeline } return !1 }, q.shiftChildren = function (a, b, c) { c = c || 0; for (var d, e = this._first, f = this._labels; e;)e._startTime >= c && (e._startTime += a), e = e._next; if (b) for (d in f) f[d] >= c && (f[d] += a); return this._uncache(!0) }, q._kill = function (a, b) { if (!a && !b) return this._enabled(!1, !1); for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;)c[d]._kill(a, b) && (e = !0); return e }, q.clear = function (a) { var b = this.getChildren(!1, !0, !0), c = b.length; for (this._time = this._totalTime = 0; --c > -1;)b[c]._enabled(!1, !1); return a !== !1 && (this._labels = {}), this._uncache(!0) }, q.invalidate = function () { for (var b = this._first; b;)b.invalidate(), b = b._next; return a.prototype.invalidate.call(this) }, q._enabled = function (a, c) { if (a === this._gc) for (var d = this._first; d;)d._enabled(a, !0), d = d._next; return b.prototype._enabled.call(this, a, c) }, q.totalTime = function (b, c, d) { this._forcingPlayhead = !0; var e = a.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, e }, q.duration = function (a) { return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration) }, q.totalDuration = function (a) { if (!arguments.length) { if (this._dirty) { for (var b, c, d = 0, e = this._last, f = 999999999999; e;)b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(e, e._startTime - e._delay), this._calculatingDuration = 0) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale, this._time -= e._startTime, this._totalTime -= e._startTime, this._rawPrevTime -= e._startTime), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b; this._duration = this._totalDuration = d, this._dirty = !1 } return this._totalDuration } return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this }, q.paused = function (b) { if (!b) for (var c = this._first, d = this._time; c;)c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next; return a.prototype.paused.apply(this, arguments) }, q.usesFrames = function () { for (var b = this._timeline; b._timeline;)b = b._timeline; return b === a._rootFramesTimeline }, q.rawTime = function (a) { return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale }, d }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) { var d = function (b) { a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0 }, e = 1e-10, f = b._internals, g = f.lazyTweens, h = f.lazyRender, i = _gsScope._gsDefine.globals, j = new c(null, null, 1, 0), k = d.prototype = new a; return k.constructor = d, k.kill()._gc = !1, d.version = "2.0.2", k.invalidate = function () { return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this) }, k.addCallback = function (a, c, d, e) { return this.add(b.delayedCall(0, a, d, e), c) }, k.removeCallback = function (a, b) { if (a) if (null == b) this._kill(null, a); else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;)c[d]._startTime === e && c[d]._enabled(!1, !1); return this }, k.removePause = function (b) { return this.removeCallback(a._internals.pauseCallback, b) }, k.tweenTo = function (a, c) { c = c || {}; var d, e, f, g = { ease: j, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 }, h = c.repeat && i.TweenMax || b; for (e in c) g[e] = c[e]; return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function () { f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []) }, f }, k.tweenFromTo = function (a, b, c) { c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = { onComplete: this.seek, onCompleteParams: [a], callbackScope: this }, c.immediateRender = c.immediateRender !== !1; var d = this.tweenTo(b, c); return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001) }, k.render = function (a, b, c) { this._gc && this._enabled(!0, !1); var d, f, i, j, k, l, m, n, o = this._time, p = this._dirty ? this.totalDuration() : this._totalDuration, q = this._duration, r = this._totalTime, s = this._startTime, t = this._timeScale, u = this._rawPrevTime, v = this._paused, w = this._cycle; if (o !== this._time && (a += this._time - o), a >= p - 1e-7 && a >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = q, a = q + 1e-4); else if (1e-7 > a) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== o || 0 === q && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a; else { if (this._rawPrevTime = q || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f) for (d = this._first; d && 0 === d._startTime;)d._duration || (f = !1), d = d._next; a = 0, this._initted || (k = !0) } else if (0 === q && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = q + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle-- , this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = q - this._time), this._time > q ? (this._time = q, a = q + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b) { if (a = this._time, a >= o || this._repeat && w !== this._cycle) for (d = this._first; d && d._startTime <= a && !m;)d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next; else for (d = this._last; d && d._startTime >= a && !m;)d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev; m && m._startTime < q && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay)) } if (this._cycle !== w && !this._locked) { var x = this._yoyo && 0 !== (1 & w), y = x === (this._yoyo && 0 !== (1 & this._cycle)), z = this._totalTime, A = this._cycle, B = this._rawPrevTime, C = this._time; if (this._totalTime = w * q, this._cycle < w ? x = !x : this._totalTime += q, this._time = o, this._rawPrevTime = 0 === q ? u - 1e-4 : u, this._cycle = w, this._locked = !0, o = x ? 0 : q, this.render(o, b, 0 === q), b || this._gc || this.vars.onRepeat && (this._cycle = A, this._locked = !1, this._callback("onRepeat")), o !== this._time) return; if (y && (this._cycle = w, this._locked = !0, o = x ? q + 1e-4 : -1e-4, this.render(o, !0, !1)), this._locked = !1, this._paused && !v) return; this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B } if (!(this._time !== o && this._first || c || k || m)) return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate"))); if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), n = this._time, n >= o) for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i; else for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) { if (d._active || d._startTime <= o && !d._paused && !d._gc) { if (m === d) { for (m = d._prev; m && m.endTime() > this._time;)m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev; m = null, this.pause() } d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c) } d = i } this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j))) }, k.getActive = function (a, b, c) { null == a && (a = !0), null == b && (b = !0), null == c && (c = !1); var d, e, f = [], g = this.getChildren(a, b, c), h = 0, i = g.length; for (d = 0; i > d; d++)e = g[d], e.isActive() && (f[h++] = e); return f }, k.getLabelAfter = function (a) { a || 0 !== a && (a = this._time); var b, c = this.getLabelsArray(), d = c.length; for (b = 0; d > b; b++)if (c[b].time > a) return c[b].name; return null }, k.getLabelBefore = function (a) { null == a && (a = this._time); for (var b = this.getLabelsArray(), c = b.length; --c > -1;)if (b[c].time < a) return b[c].name; return null }, k.getLabelsArray = function () { var a, b = [], c = 0; for (a in this._labels) b[c++] = { time: this._labels[a], name: a }; return b.sort(function (a, b) { return a.time - b.time }), b }, k.invalidate = function () { return this._locked = !1, a.prototype.invalidate.call(this) }, k.progress = function (a, b) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0 }, k.totalProgress = function (a, b) { return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0 }, k.totalDuration = function (b) { return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, k.time = function (a, b) { return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time }, k.repeat = function (a) { return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat }, k.repeatDelay = function (a) { return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay }, k.yoyo = function (a) { return arguments.length ? (this._yoyo = a, this) : this._yoyo }, k.currentLabel = function (a) { return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8) }, d }, !0), function () {
        var a = 180 / Math.PI, b = [], c = [], d = [], e = {}, f = _gsScope._gsDefine.globals, g = function (a, b, c, d) { c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a }, h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", i = function (a, b, c, d) { var e = { a: a }, f = {}, g = {}, h = { c: d }, i = (a + b) / 2, j = (b + c) / 2, k = (c + d) / 2, l = (i + j) / 2, m = (j + k) / 2, n = (m - l) / 8; return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h] }, j = function (a, e, f, g, h) { var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1, x = 0, y = a[0].a; for (j = 0; w > j; j++)n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++ , y = p; n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3])) }, k = function (a, d, e, f) { var h, i, j, k, l, m, n = []; if (f) for (a = [f].concat(a), i = a.length; --i > -1;)"string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2))); if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n; for (i = 0; h > i; i++)j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k)); return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n }, l = function (a, f, g, i, l, m) {
            var n, o, p, q, r, s, t, u, v = {}, w = [], x = m || a[0]; l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1); for (o in a[0]) w.push(o); if (a.length > 1) { for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)if (o = w[n], Math.abs(x[o] - u[o]) > .05) { t = !1; break } t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3]) } for (b.length = c.length = d.length = 0, n = w.length; --n > -1;)o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m); for (n = b.length; --n > -1;)b[n] = Math.sqrt(b[n]),
                c[n] = Math.sqrt(c[n]); if (!i) { for (n = w.length; --n > -1;)if (e[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++)r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r; for (n = d.length; --n > -1;)d[n] = Math.sqrt(d[n]) } for (n = w.length, q = g ? 4 : 1; --n > -1;)o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q)); return v
        }, m = function (a, b, c) { b = b || "soft"; var d, e, f, h, i, j, k, l, m, n, o, p = {}, q = "cubic" === b ? 3 : 2, r = "soft" === b, s = []; if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data"; for (m in a[0]) s.push(m); for (j = s.length; --j > -1;) { for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++)d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d; for (l = n - q + 1, n = 0, k = 0; l > k; k += q)d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f); i.length = n } return p }, n = function (a, b, c) { for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++)j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d }, o = function (a, b) { b = b >> 0 || 6; var c, d, e, f, g = [], h = [], i = 0, j = 0, k = b - 1, l = [], m = []; for (c in a) n(a[c], g, b); for (e = g.length, d = 0; e > d; d++)i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []); return { length: j, lengths: h, segments: l } }, p = _gsScope._gsDefine.plugin({ propName: "bezier", priority: -1, version: "1.3.8", API: 2, global: !0, init: function (a, b, c) { this._target = a, b instanceof Array && (b = { values: b }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10); var d, e, f, g, h, i = b.values || [], j = {}, k = i[0], n = b.autoRotate || c.vars.orientToBezier; this._autoRotate = n ? n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]] : null; for (d in k) this._props.push(d); for (f = this._props.length; --f > -1;)d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j); if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) { var p = o(this._beziers, this._timeRes); this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length } if (n = this._autoRotate) for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) { for (g = 0; 3 > g; g++)d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1; d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d) } return this._startRatio = c.vars.runBackwards ? 1 : 0, !0 }, set: function (b) { var c, d, e, f, g, h, i, j, k, l, m = this._segCount, n = this._func, o = this._target, p = b !== this._startRatio; if (this._timeRes) { if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) { for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;); this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0] } else if (b < this._l1 && e > 0) { for (; e > 0 && (this._l1 = k[--e]) >= b;); 0 === e && b < this._l1 ? this._l1 = 0 : e++ , this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si] } if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) { for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;); this._s1 = l[e - 1], this._si = e } else if (b < this._s1 && e > 0) { for (; e > 0 && (this._s1 = l[--e]) >= b;); 0 === e && b < this._s1 ? this._s1 = 0 : e++ , this._s2 = l[e], this._si = e } h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0 } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m; for (d = 1 - h, e = this._props.length; --e > -1;)f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i; if (this._autoRotate) { var q, r, s, t, u, v, w, x = this._autoRotate; for (e = x.length; --e > -1;)f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i) } } }), q = p.prototype; p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function (a, b, c) { return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c) }, p._cssRegister = function () { var a = f.CSSPlugin; if (a) { var b = a._internals, c = b._parseToProxy, d = b._setPluginRatio, e = b.CSSPropTween; b._registerComplexSpecialProp("bezier", { parser: function (a, b, f, g, h, i) { b instanceof Array && (b = { values: b }), i = new p; var j, k, l, m = b.values, n = m.length - 1, o = [], q = {}; if (0 > n) return h; for (j = 0; n >= j; j++)l = c(a, m[j], g, h, i, n !== j), o[j] = l.end; for (k in b) q[k] = b[k]; return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h } }) } }, q._mod = function (a) { for (var b, c = this._overwriteProps, d = c.length; --d > -1;)b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b) }, q._kill = function (a) { var b, c, d = this._props; for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;)d[c] === b && d.splice(c, 1); if (d = this._autoRotate) for (c = d.length; --c > -1;)a[d[c][2]] && d.splice(c, 1); return this._super._kill.call(this, a) }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
        var c, d, e, f, g = function () { a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio }, h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css"); j.constructor = g, g.version = "2.0.2", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = { top: j, right: j, bottom: j, left: j, width: j, height: j, fontSize: j, padding: j, margin: j, perspective: j, lineHeight: "" }; var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g, t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, w = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, y = /opacity:([^;]*)/i, z = /alpha\(opacity *=.+?\)/i, A = /^(rgb|hsl)/, B = /([A-Z])/g, C = /-([a-z])/gi, D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, E = function (a, b) { return b.toUpperCase() }, F = /(?:Left|Right|Width)/i, G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, I = /,(?=[^\)]*(?:\(|$))/gi, J = /[\s,\(]/i, K = Math.PI / 180, L = 180 / Math.PI, M = {}, N = { style: {} }, O = _gsScope.document || { createElement: function () { return N } }, P = function (a, b) { return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a) }, Q = P("div"), R = P("img"), S = g._internals = { _specialProps: i }, T = (_gsScope.navigator || {}).userAgent || "", U = function () { var a = T.indexOf("Android"), b = P("a"); return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1 }(), V = function (a) { return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 }, W = function (a) { _gsScope.console && console.log(a) }, X = "", Y = "", Z = function (a, b) { b = b || Q; var c, d, e = b.style; if (void 0 !== e[a]) return a; for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];); return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null }, $ = ("undefined" != typeof window ? window : O.defaultView || { getComputedStyle: function () { } }).getComputedStyle, _ = g.getStyle = function (a, b, c, d, e) { var f; return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a) }, aa = S.convertToPixels = function (a, c, d, e, f) { if ("px" === e || !e && "lineHeight" !== c) return d; if ("auto" === e || !d) return 0; var h, i, j, k = F.test(c), l = a, m = Q.style, n = 0 > d, o = 1 === d; if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e) if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight); else { if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e; else { if (l = a.parentNode || O.body, -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100; m[k ? "width" : "height"] = d + e } l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0)) } else i = $(a).lineHeight, a.style.lineHeight = d, h = parseFloat($(a).lineHeight), a.style.lineHeight = i; return o && (h /= 100), n ? -h : h }, ba = S.calculateOffset = function (a, b, c) { if ("absolute" !== _(a, "position", c)) return 0; var d = "left" === b ? "Left" : "Top", e = _(a, "margin" + d, c); return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0) }, ca = function (a, b) { var c, d, e, f = {}; if (b = b || $(a, null)) if (c = b.length) for (; --c > -1;)e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e)); else for (c in b) (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]); else if (b = a.currentStyle || a.style) for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]); return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f }, da = function (a, b, c, d, e) { var f, g, h, i = {}, j = a.style; for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h))); if (d) for (g in d) "className" !== g && (i[g] = d[g]); return { difs: i, firstMPT: h } }, ea = { width: ["Left", "Right"], height: ["Top", "Bottom"] }, fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ga = function (a, b, c) { if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0; if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0; var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight), e = ea[b], f = e.length; for (c = c || $(a, null); --f > -1;)d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0; return d }, ha = function (a, b) { if ("contain" === a || "auto" === a || "auto auto" === a) return a + " "; (null == a || "" === a) && (a = "0 0"); var c, d = a.split(" "), e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0], f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1]; if (d.length > 3 && !b) { for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++)a.push(ha(d[c])); return a.join(",") } return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a }, ia = function (a, b) { return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0 }, ja = function (a, b) { "function" == typeof a && (a = a(r, q)); var c = "string" == typeof a && "=" === a.charAt(1); return "string" == typeof a && "v" === a.charAt(a.length - 2) && (a = (c ? a.substr(0, 2) : 0) + window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] * (parseFloat(c ? a.substr(2) : a) / 100)), null == a ? b : c ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0 }, ka = function (a, b, c, d) { var e, f, g, h, i, j = 1e-6; return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h }, la = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] }, ma = function (a, b, c) { return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0 }, na = g.parseColor = function (a, b) { var c, d, e, f, g, h, i, j, k, l, m; if (a) if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a]; else { if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a]; else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a]; else if ("hsl" === a.substr(0, 3)) if (c = m = a.match(s), b) { if (-1 !== a.indexOf("=")) return a.match(t) } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e); else c = a.match(s) || la.transparent; c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3])) } else c = la.black; return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c }, oa = function (a, b) { var c, d, e, f = a.match(pa) || [], g = 0, h = ""; if (!f.length) return a; for (c = 0; c < f.length; c++)d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")"; return h + a.substr(g) }, pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; for (j in la) pa += "|" + j + "\\b"; pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function (a) { var b, c = a[0] + " " + a[1]; pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0 }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter); var qa = function (a, b, c, d) { if (null == a) return function (a) { return a }; var e, f = b ? (a.match(pa) || [""])[0] : "", g = a.split(f).join("").match(u) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "", j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(s, "") : ""; return k ? e = b ? function (a) { var b, m, n, o; if ("number" == typeof a) a += l; else if (d && I.test(a)) { for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++)o[n] = e(o[n]); return o.join(",") } if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--) for (; ++n < k;)m[n] = c ? m[(n - 1) / 2 | 0] : g[n]; return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "") } : function (a) { var b, f, m; if ("number" == typeof a) a += l; else if (d && I.test(a)) { for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++)f[m] = e(f[m]); return f.join(",") } if (b = a.match(u) || [], m = b.length, k > m--) for (; ++m < k;)b[m] = c ? b[(m - 1) / 2 | 0] : g[m]; return h + b.join(j) + i } : function (a) { return a } }, ra = function (a) { return a = a.split(","), function (b, c, d, e, f, g, h) { var i, j = (c + "").split(" "); for (h = {}, i = 0; 4 > i; i++)h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0]; return e.parse(b, h, f, g) } }, sa = (S._setPluginRatio = function (a) { this.plugin.setRatio(a); for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;)b = h[i.v], i.r ? b = i.r(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next; if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 1 === a || 0 === a) for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) { if (c = i.t, c.type) { if (1 === c.type) { for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)e += c["xn" + d] + c["xs" + (d + 1)]; c[f] = e } } else c[f] = c.s + c.xs0; i = i._next } }, function (a, b, c, d, e) { this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d) }), ta = (S._parseToProxy = function (a, b, c, d, e, f) { var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = M; for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) { if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type)) for (g = d.l; --g > 0;)i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i])); d = d._next } return { proxy: m, end: n, firstMPT: j, pt: k } }, S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) { this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this) }), ua = function (a, b, c, d, e, f) { var g = new ta(a, b, c, d - c, e, -1, f); return g.b = c, g.e = g.xs0 = d, g }, va = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) { c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]); var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "), E = d.split(", ").join(",").split(" "), F = D.length, G = k !== !1; for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++)if (p = D[m], u = E[m] + "", x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0); else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0; else if (v = p.match(s)) { if (w = u.match(t), !w || w.length !== v.length) return h; for (o = 0, n = 0; n < v.length; n++)A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n), o = z + A.length; h["xs" + h.l] += p.substr(o) } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u; if (-1 !== d.indexOf("=") && h.data) { for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++)B += h["xs" + m] + h.data["xn" + m]; h.e = B + h["xs" + m] } return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h }, wa = 9; for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;)j["xn" + wa] = 0, j["xs" + wa] = ""; j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) { var g = this, h = g.l; return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++ , g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = { s: b + c }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g) }; var xa = function (a, b) { b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0 }, ya = S._registerComplexSpecialProp = function (a, b, c) { "object" != typeof b && (b = { parser: c }); var d, e, f = a.split(","), g = b.defaultValue; for (c = c || [g], d = 0; d < f.length; d++)b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b) }, za = S._registerPluginProp = function (a) { if (!i[a]) { var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin"; ya(a, { parser: function (a, c, d, e, f, g, j) { var k = h.com.greensock.plugins[b]; return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f) } }) } }; j = xa.prototype, j.parseComplex = function (a, b, c, d, e, f) { var g, h, i, j, k, l, m = this.keyword; if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) { for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++)b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m))); b = h.join(", "), c = i.join(", ") } return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f) }, j.parse = function (a, b, c, d, f, g, h) { return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g) }, g.registerSpecialProp = function (a, b, c) { ya(a, { parser: function (a, d, e, f, g, h, i) { var j = new ta(a, e, 0, 0, g, 2, e, !1, c); return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j }, priority: c }) }, g.useSVGTransformAttr = !0; var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ca = Z("transform"), Da = X + "transform", Ea = Z("transformOrigin"), Fa = null !== Z("perspective"), Ga = S.Transform = function () { this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1 }, Ha = _gsScope.SVGElement, Ia = function (a, b, c) { var d, e = O.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g; for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]); return b.appendChild(e), e }, Ja = O.documentElement || {}, Ka = function () { var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome; return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, { width: 100, height: 50, x: 100 }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d }(), La = function (a, b, c, d, e, f) { var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform, w = Qa(a, !0); v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = { x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0, y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" ")) }, Ma = function (a) { var b, c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), d = this.parentNode, e = this.nextSibling, f = this.style.cssText; if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try { b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma } catch (g) { } else this._originalGetBBox && (b = this._originalGetBBox()); return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b }, Na = function (a) { try { return a.getBBox() } catch (b) { return Ma.call(a, !0) } }, Oa = function (a) { return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Na(a)) }, Pa = [1, 0, 0, 1, 0, 0], Qa = function (a, b) { var c, d, e, f, g, h, i = a._gsTransform || new Ga, j = 1e5, k = a.style; if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Pa; for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;)f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f; return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e }, Ra = S.getTransform = function (a, c, d, e) { if (a._gsTransform && d && !e) return a._gsTransform; var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga, n = m.scaleX < 0, o = 2e-5, p = 1e5, q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0, r = parseFloat(g.defaultTransformPerspective) || 0; if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) { if (16 === f.length) { var s, t, u, v, w, x = f[0], y = f[1], z = f[2], A = f[3], B = f[4], C = f[5], D = f[6], E = f[7], F = f[8], G = f[9], H = f[10], I = f[12], J = f[13], K = f[14], M = f[11], N = Math.atan2(D, H); m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)) } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) { var O = f.length >= 6, P = O ? f[0] : 1, Q = f[1] || 0, R = f[2] || 0, S = O ? f[3] : 1; m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)) } Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q; for (h in m) m[h] < o && m[h] > -o && (m[h] = 0) } return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function () { Va(a.style, Ca) }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function () { a.removeAttribute("transform") }))), m }, Sa = function (a) { var b, c, d = this.data, e = -d.rotation * K, f = e + d.skewX * K, g = 1e5, h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g, j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style, m = this.t.currentStyle; if (m) { c = i, i = -j, j = -c, b = m.filter, l.filter = ""; var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, u = d.x + q * d.xPercent / 100, v = d.y + r * d.yPercent / 100; if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) { var y, z, A, B = 8 > p ? 1 : -1; for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++)z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px" } } }, Ta = S.set3DTransformRatio = S.setTransformRatio = function (a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style, B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY, G = z.scaleZ, H = z.x, I = z.y, J = z.z, L = z.svg, M = z.perspective, N = z.force3D, O = z.skewY, P = z.skewX; if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void (B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")"); if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r; else { if (!(D || C || 1 !== G || M || L)) return void (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : "")); c = g = 1, d = f = 0 } k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u;
        }; j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function (a, b, c, d, f, h, i) { if (d._lastParsedTransform === i) return f; d._lastParsedTransform = i; var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0; "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a)); var l, m, n, o, p, s, t, u, v, w = a._gsTransform, x = a.style, y = 1e-6, z = Ba.length, A = i, B = {}, C = "transformOrigin", D = Ra(a, e, !0, A.parseTransform), E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform); if (D.skewType = A.skewType || D.skewType || g.defaultSkewType, d._transform = D, "rotationZ" in A && (A.rotation = A.rotationZ), E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", -1 !== E.indexOf("%") && (m.width = _(a, "width"), m.height = _(a, "height")), O.body.appendChild(Q), l = Ra(Q, null, !1), "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent)); else if ("object" == typeof A) { if (l = { scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX), scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY), scaleZ: ja(A.scaleZ, D.scaleZ), x: ja(A.x, D.x), y: ja(A.y, D.y), z: ja(A.z, D.z), xPercent: ja(A.xPercent, D.xPercent), yPercent: ja(A.yPercent, D.yPercent), perspective: ja(A.transformPerspective, D.perspective) }, p = A.directionalRotation, null != p) if ("object" == typeof p) for (m in p) A[m] = p[m]; else A.rotation = p; "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY) } for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;)v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n)); return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f }, prefix: !0 }), ya("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), ya("borderRadius", { defaultValue: "0px", parser: function (a, b, c, f, g, h) { b = this.format(b); var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], z = a.style; for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++)this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g); return g }, prefix: !0, formatter: qa("0px 0px 0px 0px", !1, !0) }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function (a, b, c, d, f, g) { return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f) }, prefix: !0, formatter: qa("0px 0px", !1, !0) }), ya("backgroundPosition", { defaultValue: "0 0", parser: function (a, b, c, d, f, g) { var h, i, j, k, l, m, n = "background-position", o = e || $(a, null), q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b); if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) { for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;)q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%"); q = h.join(" ") } return this.parseComplex(a.style, q, r, f, g) }, formatter: ha }), ya("backgroundSize", { defaultValue: "0 0", formatter: function (a) { return a += "", "co" === a.substr(0, 2) ? a : ha(-1 === a.indexOf(" ") ? a + " " + a : a) } }), ya("perspective", { defaultValue: "0px", prefix: !0 }), ya("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), ya("transformStyle", { prefix: !0 }), ya("backfaceVisibility", { prefix: !0 }), ya("userSelect", { prefix: !0 }), ya("margin", { parser: ra("marginTop,marginRight,marginBottom,marginLeft") }), ya("padding", { parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft") }), ya("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function (a, b, c, d, f, g) { var h, i, j; return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g) } }), ya("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), ya("autoRound,strictUnits", { parser: function (a, b, c, d, e) { return e } }), ya("border", { defaultValue: "0px solid #000", parser: function (a, b, c, d, f, g) { var h = _(a, "borderTopWidth", e, !1, "0px"), i = this.format(b).split(" "), j = i[0].replace(w, ""); return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g) }, color: !0, formatter: function (a) { var b = a.split(" "); return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0] } }), ya("borderWidth", { parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), ya("float,cssFloat,styleFloat", { parser: function (a, b, c, d, e, f) { var g = a.style, h = "cssFloat" in g ? "cssFloat" : "styleFloat"; return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b) } }); var Ua = function (a) { var b, c = this.t, d = c.filter || _(this.data, "filter") || "", e = this.s + this.c * a | 0; 100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e)) }; ya("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function (a, b, c, d, f, g) { var h = parseFloat(_(a, "opacity", e, !1, "1")), i = a.style, j = "autoAlpha" === c; return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f } }); var Va = function (a, b) { b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b)) }, Wa = function (a) { if (this.t._gsClassPT = this, 1 === a || 0 === a) { this.t.setAttribute("class", 0 === a ? this.b : this.e); for (var b = this.data, c = this.t.style; b;)b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next; 1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) }; ya("className", { parser: function (a, b, d, f, g, h, i) { var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText; if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) { for (m = {}, n = l.data; n;)m[n.p] = 1, n = n._next; l.setRatio(1) } return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h) } }); var Xa = function (a) { if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) { var b, c, d, e, f, g = this.t.style, h = i.transform.parse; if ("all" === this.e) g.cssText = "", e = !0; else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;)c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c); e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform)) } }; for (ya("clearProps", { parser: function (a, b, d, e, f) { return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f } }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;)za(j[wa]); j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h, j) { if (!a.nodeType) return !1; this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps; var n, p, s, t, u, v, w, x, z, A = a.style; if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) { for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;)s = s._next; x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop() } if (c) { for (; p;) { for (v = p._next, s = t; s && s.pr > p.pr;)s = s._next; (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p, (p._next = s) ? s._prev = p : u = p, p = v } this._firstPT = t } return !0 }, j.parse = function (a, b, c, f) { var g, h, j, l, m, n, o, p, s, t, u = a.style; for (g in b) { if (n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g]) c = h.parse(a, n, g, this, c, f, b); else { if ("--" === g.substr(0, 2)) { this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g); continue } m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p)) } f && c && !c.plugin && (c.plugin = f) } return c }, j.setRatio = function (a) { var b, c, d, e = this._firstPT, f = 1e-6; if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; e;) { if (b = e.c * a + e.s, e.r ? b = e.r(b) : f > b && b > -f && (b = 0), e.type) if (1 === e.type) if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2; else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3; else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4; else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5; else { for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)c += e["xn" + d] + e["xs" + (d + 1)]; e.t[e.p] = c } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a); else e.t[e.p] = b + e.xs0; e = e._next } else for (; e;)2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next; else for (; e;) { if (2 !== e.type) if (e.r && -1 !== e.type) if (b = e.r(e.s + e.c), e.type) { if (1 === e.type) { for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)c += e["xn" + d] + e["xs" + (d + 1)]; e.t[e.p] = c } } else e.t[e.p] = b + e.xs0; else e.t[e.p] = e.e; else e.setRatio(a); e = e._next } }, j._enableTransforms = function (a) { this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3 }; var Ya = function (a) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) }; j._addLazySet = function (a, b, c) { var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2); d.e = c, d.setRatio = Ya, d.data = this }, j._linkCSSP = function (a, b, c, d) { return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a }, j._mod = function (a) { for (var b = this._firstPT; b;)"function" == typeof a[b.p] && (b.r = a[b.p]), b = b._next }, j._kill = function (b) { var c, d, e, f = b; if (b.autoAlpha || b.alpha) { f = {}; for (d in b) f[d] = b[d]; f.opacity = 1, f.autoAlpha && (f.visibility = 1) } for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;)c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next; return a.prototype._kill.call(this, f) }; var Za = function (a, b, c) { var d, e, f, g; if (a.slice) for (e = a.length; --e > -1;)Za(a[e], b, c); else for (d = a.childNodes, e = d.length; --e > -1;)f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c) }; return g.cascadeTo = function (a, c, d) { var e, f, g, h, i = b.to(a, c, d), j = [i], k = [], l = [], m = [], n = b._internals.reservedProps; for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)if (f = da(m[e], k[e], l[e]), f.firstMPT) { f = f.difs; for (g in d) n[g] && (f[g] = d[g]); h = {}; for (g in f) h[g] = k[e][g]; j.push(b.fromTo(m[e], c, h, f)) } return j }, a.activate([g]), g
    }, !0), function () { var a = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.7.0", priority: -1, API: 2, init: function (a, b, c) { return this._tween = c, !0 } }), b = function (a) { var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1; return function (c) { return (Math.round(c / a) * a * b | 0) / b } }, c = function (a, b) { for (; a;)a.f || a.blob || (a.m = b || Math.round), a = a._next }, d = a.prototype; d._onInitAllProps = function () { var a, d, e, f, g = this._tween, h = g.vars.roundProps, i = {}, j = g._propLookup.roundProps; if ("object" != typeof h || h.push) for ("string" == typeof h && (h = h.split(",")), e = h.length; --e > -1;)i[h[e]] = Math.round; else for (f in h) i[f] = b(h[f]); for (f in i) for (a = g._firstPT; a;)d = a._next, a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]), d && (d._prev = a._prev), a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d), a._next = a._prev = null, g._propLookup[f] = j)), a = d; return !1 }, d._add = function (a, b, c, d, e) { this._addTween(a, b, c, c + d, b, e || Math.round), this._overwriteProps.push(b) } }(), function () { _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function (a, b, c, d) { var e, f; if ("function" != typeof a.setAttribute) return !1; for (e in b) f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e); return !0 } }) }(), _gsScope._gsDefine.plugin({ propName: "directionalRotation", version: "0.3.1", API: 2, init: function (a, b, c, d) { "object" != typeof b && (b = { rotation: b }), this.finals = {}; var e, f, g, h, i, j, k = b.useRadians === !0 ? 2 * Math.PI : 360, l = 1e-6; for (e in b) "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e))); return !0 }, set: function (a) { var b; if (1 !== a) this._super.setRatio.call(this, a); else for (b = this._firstPT; b;)b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next } })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) { var b, c, d, e, f = _gsScope.GreenSockGlobals || _gsScope, g = f.com.greensock, h = 2 * Math.PI, i = Math.PI / 2, j = g._class, k = function (b, c) { var d = j("easing." + b, function () { }, !0), e = d.prototype = new a; return e.constructor = d, e.getRatio = c, d }, l = a.register || function () { }, m = function (a, b, c, d, e) { var f = j("easing." + a, { easeOut: new b, easeIn: new c, easeInOut: new d }, !0); return l(f, a), f }, n = function (a, b, c) { this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a) }, o = function (b, c) { var d = j("easing." + b, function (a) { this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1 }, !0), e = d.prototype = new a; return e.constructor = d, e.getRatio = c, e.config = function (a) { return new d(a) }, d }, p = m("Back", o("BackOut", function (a) { return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1 }), o("BackIn", function (a) { return a * a * ((this._p1 + 1) * a - this._p1) }), o("BackInOut", function (a) { return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2) })), q = j("easing.SlowMo", function (a, b, c) { b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0 }, !0), r = q.prototype = new a; return r.constructor = q, r.getRatio = function (a) { var b = a + (.5 - a) * this._p; return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b }, q.ease = new q(.7, .7), r.config = q.config = function (a, b, c) { return new q(a, b, c) }, b = j("easing.SteppedEase", function (a, b) { a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0 }, !0), r = b.prototype = new a, r.constructor = b, r.getRatio = function (a) { return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1 }, r.config = b.config = function (a, c) { return new b(a, c) }, c = j("easing.ExpoScaleEase", function (a, b, c) { this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c }, !0), r = c.prototype = new a, r.constructor = c, r.getRatio = function (a) { return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2 }, r.config = c.config = function (a, b, d) { return new c(a, b, d) }, d = j("easing.RoughEase", function (b) { b = b || {}; for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;)c = o ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = { x: c, y: d }; for (j.sort(function (a, b) { return a.x - b.x }), h = new n(1, 1, null), m = l; --m > -1;)g = j[m], h = new n(g.x, g.y, h); this._prev = new n(0, 0, 0 !== h.t ? h : h.next) }, !0), r = d.prototype = new a, r.constructor = d, r.getRatio = function (a) { var b = this._prev; if (a > b.t) { for (; b.next && a >= b.t;)b = b.next; b = b.prev } else for (; b.prev && a <= b.t;)b = b.prev; return this._prev = b, b.v + (a - b.t) / b.gap * b.c }, r.config = function (a) { return new d(a) }, d.ease = new d, m("Bounce", k("BounceOut", function (a) { return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 }), k("BounceIn", function (a) { return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375) }), k("BounceInOut", function (a) { var b = .5 > a; return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5 })), m("Circ", k("CircOut", function (a) { return Math.sqrt(1 - (a -= 1) * a) }), k("CircIn", function (a) { return -(Math.sqrt(1 - a * a) - 1) }), k("CircInOut", function (a) { return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1) })), e = function (b, c, d) { var e = j("easing." + b, function (a, b) { this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2 }, !0), f = e.prototype = new a; return f.constructor = e, f.getRatio = c, f.config = function (a, b) { return new e(a, b) }, e }, m("Elastic", e("ElasticOut", function (a) { return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1 }, .3), e("ElasticIn", function (a) { return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) }, .3), e("ElasticInOut", function (a) { return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1 }, .45)), m("Expo", k("ExpoOut", function (a) { return 1 - Math.pow(2, -10 * a) }), k("ExpoIn", function (a) { return Math.pow(2, 10 * (a - 1)) - .001 }), k("ExpoInOut", function (a) { return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1))) })), m("Sine", k("SineOut", function (a) { return Math.sin(a * i) }), k("SineIn", function (a) { return -Math.cos(a * i) + 1 }), k("SineInOut", function (a) { return -.5 * (Math.cos(Math.PI * a) - 1) })), j("easing.EaseLookup", { find: function (b) { return a.map[b] } }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), p }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a, b) {
    "use strict"; var c = {}, d = a.document, e = a.GreenSockGlobals = a.GreenSockGlobals || a, f = e[b]; if (f) return "undefined" != typeof module && module.exports && (module.exports = f), f; var g, h, i, j, k, l = function (a) { var b, c = a.split("."), d = e; for (b = 0; b < c.length; b++)d[c[b]] = d = d[c[b]] || {}; return d }, m = l("com.greensock"), n = 1e-10, o = function (a) { var b, c = [], d = a.length; for (b = 0; b !== d; c.push(a[b++])); return c }, p = function () { }, q = function () { var a = Object.prototype.toString, b = a.call([]); return function (c) { return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b) } }(), r = {}, s = function (d, f, g, h) { this.sc = r[d] ? r[d].sc : [], r[d] = this, this.gsClass = null, this.func = g; var i = []; this.check = function (j) { for (var k, m, n, o, p = f.length, q = p; --p > -1;)(k = r[f[p]] || new s(f[p], [])).gsClass ? (i[p] = k.gsClass, q--) : j && k.sc.push(this); if (0 === q && g) { if (m = ("com.greensock." + d).split("."), n = m.pop(), o = l(m.join("."))[n] = this.gsClass = g.apply(g, i), h) if (e[n] = c[n] = o, "undefined" != typeof module && module.exports) if (d === b) { module.exports = c[b] = o; for (p in c) o[p] = c[p] } else c[b] && (c[b][n] = o); else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () { return o }); for (p = 0; p < this.sc.length; p++)this.sc[p].check() } }, this.check(!0) }, t = a._gsDefine = function (a, b, c, d) { return new s(a, b, c, d) }, u = m._class = function (a, b, c) { return b = b || function () { }, t(a, [], function () { return b }, c), b }; t.globals = e; var v = [0, 0, 1, 1], w = u("easing.Ease", function (a, b, c, d) { this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? v.concat(b) : v }, !0), x = w.map = {}, y = w.register = function (a, b, c, d) { for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)for (f = i[j], e = d ? u("easing." + f, null, !0) : m.easing[f] || {}, g = k.length; --g > -1;)h = k[g], x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a }; for (i = w.prototype, i._calcEnd = !1, i.getRatio = function (a) { if (this._func) return this._params[0] = a, this._func.apply(null, this._params); var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a); return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2 }, g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = g.length; --h > -1;)i = g[h] + ",Power" + h, y(new w(null, null, 1, h), i, "easeOut", !0), y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), y(new w(null, null, 3, h), i, "easeInOut"); x.linear = m.easing.Linear.easeIn, x.swing = m.easing.Quad.easeInOut; var z = u("events.EventDispatcher", function (a) { this._listeners = {}, this._eventTarget = a || this }); i = z.prototype, i.addEventListener = function (a, b, c, d, e) { e = e || 0; var f, g, h = this._listeners[a], i = 0; for (this !== j || k || j.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;)f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1); h.splice(i, 0, { c: b, s: c, up: d, pr: e }) }, i.removeEventListener = function (a, b) { var c, d = this._listeners[a]; if (d) for (c = d.length; --c > -1;)if (d[c].c === b) return void d.splice(c, 1) }, i.dispatchEvent = function (a) { var b, c, d, e = this._listeners[a]; if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;)d = e[b], d && (d.up ? d.c.call(d.s || c, { type: a, target: c }) : d.c.call(d.s || c)) }; var A = a.requestAnimationFrame, B = a.cancelAnimationFrame, C = Date.now || function () { return (new Date).getTime() }, D = C(); for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A;)A = a[g[h] + "RequestAnimationFrame"], B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"]; u("Ticker", function (a, b) { var c, e, f, g, h, i = this, l = C(), m = b !== !1 && A ? "auto" : !1, o = 500, q = 33, r = "tick", s = function (a) { var b, d, j = C() - D; j > o && (l += j - q), D += j, i.time = (D - l) / 1e3, b = i.time - h, (!c || b > 0 || a === !0) && (i.frame++ , h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && i.dispatchEvent(r) }; z.call(i), i.time = i.frame = 0, i.tick = function () { s(!0) }, i.lagSmoothing = function (a, b) { return arguments.length ? (o = a || 1 / n, void (q = Math.min(b, o, 0))) : 1 / n > o }, i.sleep = function () { null != f && (m && B ? B(f) : clearTimeout(f), e = p, f = null, i === j && (k = !1)) }, i.wake = function (a) { null !== f ? i.sleep() : a ? l += -D + (D = C()) : i.frame > 10 && (D = C() - o + 5), e = 0 === c ? p : m && A ? A : function (a) { return setTimeout(a, 1e3 * (h - i.time) + 1 | 0) }, i === j && (k = !0), s(2) }, i.fps = function (a) { return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void i.wake()) : c }, i.useRAF = function (a) { return arguments.length ? (i.sleep(), m = a, void i.fps(c)) : m }, i.fps(a), setTimeout(function () { "auto" === m && i.frame < 5 && "hidden" !== (d || {}).visibilityState && i.useRAF(!1) }, 1500) }), i = m.Ticker.prototype = new m.events.EventDispatcher, i.constructor = m.Ticker; var E = u("core.Animation", function (a, b) { if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, Y) { k || j.wake(); var c = this.vars.useFrames ? X : Y; c.add(this, c._time), this.vars.paused && this.paused(!0) } }); j = E.ticker = new m.Ticker, i = E.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1; var F = function () { k && C() - D > 2e3 && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake(); var a = setTimeout(F, 2e3); a.unref && a.unref() }; F(), i.play = function (a, b) { return null != a && this.seek(a, b), this.reversed(!1).paused(!1) }, i.pause = function (a, b) { return null != a && this.seek(a, b), this.paused(!0) }, i.resume = function (a, b) { return null != a && this.seek(a, b), this.paused(!1) }, i.seek = function (a, b) { return this.totalTime(Number(a), b !== !1) }, i.restart = function (a, b) { return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0) }, i.reverse = function (a, b) { return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1) }, i.render = function (a, b, c) { }, i.invalidate = function () { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, i.isActive = function () { var a, b = this._timeline, c = this._startTime; return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7 }, i._enabled = function (a, b) { return k || j.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1 }, i._kill = function (a, b) { return this._enabled(!1, !1) }, i.kill = function (a, b) { return this._kill(a, b), this }, i._uncache = function (a) { for (var b = a ? this : this.timeline; b;)b._dirty = !0, b = b.timeline; return this }, i._swapSelfInParams = function (a) { for (var b = a.length, c = a.concat(); --b > -1;)"{self}" === a[b] && (c[b] = this); return c }, i._callback = function (a) { var b = this.vars, c = b[a], d = b[a + "Params"], e = b[a + "Scope"] || b.callbackScope || this, f = d ? d.length : 0; switch (f) { case 0: c.call(e); break; case 1: c.call(e, d[0]); break; case 2: c.call(e, d[0], d[1]); break; default: c.apply(e, d) } }, i.eventCallback = function (a, b, c, d) { if ("on" === (a || "").substr(0, 2)) { var e = this.vars; if (1 === arguments.length) return e[a]; null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = q(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b) } return this }, i.delay = function (a) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay }, i.duration = function (a) { return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration) }, i.totalDuration = function (a) { return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration }, i.time = function (a, b) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time }, i.totalTime = function (a, b, c) { if (k || j.wake(), !arguments.length) return this._totalTime; if (this._timeline) { if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) { this._dirty && this.totalDuration(); var d = this._totalDuration, e = this._timeline; if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;)e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline } this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (K.length && $(), this.render(a, b, !1), K.length && $()) } return this }, i.progress = i.totalProgress = function (a, b) {
        var c = this.duration(); return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
    }, i.startTime = function (a) { return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime }, i.endTime = function (a) { return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale }, i.timeScale = function (a) { if (!arguments.length) return this._timeScale; var b, c; for (a = a || n, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;)c._dirty = !0, c.totalDuration(), c = c.timeline; return this }, i.reversed = function (a) { return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, i.paused = function (a) { if (!arguments.length) return this._paused; var b, c, d = this._timeline; return a != this._paused && d && (k || a || j.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this }; var G = u("core.SimpleTimeline", function (a) { E.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0 }); i = G.prototype = new E, i.constructor = G, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function (a, b, c, d) { var e, f; if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f;)e = e._prev; return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this }, i._remove = function (a, b) { return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, i.render = function (a, b, c) { var d, e = this._first; for (this._totalTime = this._time = this._rawPrevTime = a; e;)d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d }, i.rawTime = function () { return k || j.wake(), this._totalTime }; var H = u("TweenLite", function (b, c, d) { if (E.call(this, c, d), this.render = H.prototype.render, null == b) throw "Cannot tween a null target."; this.target = b = "string" != typeof b ? b : H.selector(b) || b; var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite; if (this._overwrite = i = null == i ? W[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : W[i], (h || b instanceof Array || b.push && q(b)) && "number" != typeof b[0]) for (this._targets = g = o(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++)f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(o(f))) : (this._siblings[e] = _(f, this, !1), 1 === i && this._siblings[e].length > 1 && ba(f, this, null, 1, this._siblings[e])) : (f = g[e--] = H.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1); else this._propLookup = {}, this._siblings = _(b, this, !1), 1 === i && this._siblings.length > 1 && ba(b, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -n, this.render(Math.min(0, -this._delay))) }, !0), I = function (b) { return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType) }, J = function (a, b) { var c, d = {}; for (c in a) V[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!S[c] || S[c] && S[c]._autoCSS) || (d[c] = a[c], delete a[c]); a.css = d }; i = H.prototype = new E, i.constructor = H, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, H.version = "2.0.2", H.defaultEase = i._ease = new w(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = j, H.autoSleep = 120, H.lagSmoothing = function (a, b) { j.lagSmoothing(a, b) }, H.selector = a.$ || a.jQuery || function (b) { var c = a.$ || a.jQuery; return c ? (H.selector = c, c(b)) : (d || (d = a.document), d ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b) }; var K = [], L = {}, M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, N = /[\+-]=-?[\.\d]/, O = function (a) { for (var b, c = this._firstPT, d = 1e-6; c;)b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next }, P = function (a, b, c, d) { var e, f, g, h, i, j, k, l = [], m = 0, n = "", o = 0; for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(M) || [], f = b.match(M) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++)k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = { _next: l._firstPT, t: l, p: l.length - 1, s: g, c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0, f: 0, m: o && 4 > o ? Math.round : 0 }), m += k.length; return n += b.substr(m), n && l.push(n), l.setRatio = O, N.test(b) && (l.end = null), l }, Q = function (a, b, c, d, e, f, g, h, i) { "function" == typeof d && (d = d(i || 0, a)); var j, k = typeof a[b], l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b], n = "string" == typeof d && "=" === d.charAt(1), o = { t: a, p: b, s: m, f: "function" === k, pg: 0, n: e || b, m: f ? "function" == typeof f ? f : Math.round : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0 }; return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = P(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o), o = { t: j, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0 }, R = H._internals = { isArray: q, isSelector: I, lazyTweens: K, blobDif: P }, S = H._plugins = {}, T = R.tweenLookup = {}, U = 0, V = R.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1 }, W = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 }, X = E._rootFramesTimeline = new G, Y = E._rootTimeline = new G, Z = 30, $ = R.lazyRender = function () { var a, b = K.length; for (L = {}; --b > -1;)a = K[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1); K.length = 0 }; Y._startTime = j.time, X._startTime = j.frame, Y._active = X._active = !0, setTimeout($, 1), E._updateRoot = H.render = function () { var a, b, c; if (K.length && $(), Y.render((j.time - Y._startTime) * Y._timeScale, !1, !1), X.render((j.frame - X._startTime) * X._timeScale, !1, !1), K.length && $(), j.frame >= Z) { Z = j.frame + (parseInt(H.autoSleep, 10) || 120); for (c in T) { for (b = T[c].tweens, a = b.length; --a > -1;)b[a]._gc && b.splice(a, 1); 0 === b.length && delete T[c] } if (c = Y._first, (!c || c._paused) && H.autoSleep && !X._first && 1 === j._listeners.tick.length) { for (; c && c._paused;)c = c._next; c || j.sleep() } } }, j.addEventListener("tick", E._updateRoot); var _ = function (a, b, c) { var d, e, f = a._gsTweenID; if (T[f || (a._gsTweenID = f = "t" + U++)] || (T[f] = { target: a, tweens: [] }), b && (d = T[f].tweens, d[e = d.length] = b, c)) for (; --e > -1;)d[e] === b && d.splice(e, 1); return T[f].tweens }, aa = function (a, b, c, d) { var e, f, g = a.vars.onOverwrite; return g && (e = g(a, b, c, d)), g = H.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1 }, ba = function (a, b, c, d, e) { var f, g, h, i; if (1 === d || d >= 4) { for (i = e.length, f = 0; i > f; f++)if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0); else if (5 === d) break; return g } var j, k = b._startTime + n, l = [], m = 0, o = 0 === b._duration; for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ca(b, 0, o), 0 === ca(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[m++] = h))); for (f = m; --f > -1;)if (h = l[f], i = h._firstPT, 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted && i) { if (2 !== d && !aa(h, b)) continue; h._enabled(!1, !1) && (g = !0) } return g }, ca = function (a, b, c) { for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) { if (f += d._startTime, e *= d._timeScale, d._paused) return -100; d = d._timeline } return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * n > f - b ? n : (f += a.totalDuration() / a._timeScale / e) > b + n ? 0 : f - b - n }; i._init = function () { var a, b, c, d, e, f, g = this.vars, h = this._overwrittenProps, i = this._duration, j = !!g.immediateRender, k = g.ease; if (g.startAt) { this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {}; for (d in g.startAt) e[d] = g.startAt[d]; if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e), j) if (this._time > 0) this._startAt = null; else if (0 !== i) return } else if (g.runBackwards && 0 !== i) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else { 0 !== this._time && (j = !1), c = {}; for (d in g) V[d] && "autoCSS" !== d || (c[d] = g[d]); if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = H.to(this.target, 0, c), j) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) } if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (f = this._targets.length, a = 0; f > a; a++)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0); if (b && H._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards) for (c = this._firstPT; c;)c.s += c.c, c.c = -c.c, c = c._next; this._onUpdate = g.onUpdate, this._initted = !0 }, i._initProps = function (b, c, d, e, f) { var g, h, i, j, k, l; if (null == b) return !1; L[b._gsTweenID] && $(), this.vars.css || b.style && b !== a && b.nodeType && S.css && this.vars.autoCSS !== !1 && J(this.vars, b); for (g in this.vars) if (l = this.vars[g], V[g]) l && (l instanceof Array || l.push && q(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this)); else if (S[g] && (j = new S[g])._onInitTween(b, this.vars[g], this, f)) { for (this._firstPT = k = { _next: this._firstPT, t: j, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: j._priority, m: 0 }, h = j._overwriteProps.length; --h > -1;)c[j._overwriteProps[h]] = this._firstPT; (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k) } else c[g] = Q.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f); return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ba(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0), i) }, i.render = function (a, b, c) { var d, e, f, g, h = this._time, i = this._duration, j = this._rawPrevTime; if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === n && "isPause" !== this.data) && j !== a && (c = !0, j > n && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : n); else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== n || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : n)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0); else if (this._totalTime = this._time = a, this._easeType) { var k = a / i, l = this._easeType, m = this._easePower; (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2 } else this.ratio = this._ease.getRatio(a / i); if (this._time !== h || c) { if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, K.push(this), void (this._lazy = [a, b]); this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;)f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next; this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === n && g !== n && (this._rawPrevTime = 0)) } }, i._kill = function (a, b, c) { if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1); b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b; var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline, n = this._firstPT; if ((q(b) || I(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;)this._kill(a, b[d], c) && (i = !0); else { if (this._targets) { for (d = this._targets.length; --d > -1;)if (b === this._targets[d]) { h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all"; break } } else { if (b !== this.target) return !1; h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all" } if (h) { if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (H.onOverwrite || this.vars.onOverwrite)) { for (f in j) h[f] && (l || (l = []), l.push(f)); if ((l || !a) && !aa(this, c, b, l)) return !1 } for (f in j) (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1); !this._firstPT && this._initted && n && this._enabled(!1, !1) } } return i }, i.invalidate = function () { return this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, this.render(Math.min(0, -this._delay))), this }, i._enabled = function (a, b) { if (k || j.wake(), a && this._gc) { var c, d = this._targets; if (d) for (c = d.length; --c > -1;)this._siblings[c] = _(d[c], this, !0); else this._siblings = _(this.target, this, !0) } return E.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1 }, H.to = function (a, b, c) { return new H(a, b, c) }, H.from = function (a, b, c) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new H(a, b, c) }, H.fromTo = function (a, b, c, d) { return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new H(a, b, d) }, H.delayedCall = function (a, b, c, d, e) { return new H(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 }) }, H.set = function (a, b) { return new H(a, 0, b) }, H.getTweensOf = function (a, b) { if (null == a) return []; a = "string" != typeof a ? a : H.selector(a) || a; var c, d, e, f; if ((q(a) || I(a)) && "number" != typeof a[0]) { for (c = a.length, d = []; --c > -1;)d = d.concat(H.getTweensOf(a[c], b)); for (c = d.length; --c > -1;)for (f = d[c], e = c; --e > -1;)f === d[e] && d.splice(c, 1) } else if (a._gsTweenID) for (d = _(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1); return d || [] }, H.killTweensOf = H.killDelayedCallsTo = function (a, b, c) { "object" == typeof b && (c = b, b = !1); for (var d = H.getTweensOf(a, b), e = d.length; --e > -1;)d[e]._kill(c, a) }; var da = u("plugins.TweenPlugin", function (a, b) { this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = da.prototype }, !0); if (i = da.prototype, da.version = "1.19.0", da.API = 2, i._firstPT = null, i._addTween = Q, i.setRatio = O, i._kill = function (a) { var b, c = this._overwriteProps, d = this._firstPT; if (null != a[this._propName]) this._overwriteProps = []; else for (b = c.length; --b > -1;)null != a[c[b]] && c.splice(b, 1); for (; d;)null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next; return !1 }, i._mod = i._roundProps = function (a) { for (var b, c = this._firstPT; c;)b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next }, H._onPluginEvent = function (a, b) { var c, d, e, f, g, h = b._firstPT; if ("_onInitAllProps" === a) { for (; h;) { for (g = h._next, d = e; d && d.pr > h.pr;)d = d._next; (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g } h = b._firstPT = e } for (; h;)h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next; return c }, da.activate = function (a) { for (var b = a.length; --b > -1;)a[b].API === da.API && (S[(new a[b])._propName] = a[b]); return !0 }, t.plugin = function (a) { if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition."; var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" }, g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () { da.call(this, c, d), this._overwriteProps = e || [] }, a.global === !0), h = g.prototype = new da(c); h.constructor = g, g.API = a.API; for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]); return g.version = a.version, da.activate([g]), g }, g = a._gsQueue) { for (h = 0; h < g.length; h++)g[h](); for (i in r) r[i].func || a.console.log("GSAP encountered missing dependency: " + i) } k = !1
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");;
/*!
 * VERSION: 0.8.11
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () { "use strict"; var a = Math.PI / 180, b = 180 / Math.PI, c = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, d = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, e = /(^[#\.][a-z]|[a-y][a-z])/gi, f = /[achlmqstvz]/gi, g = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, h = _gsScope._gsDefine.globals.TweenLite, i = function (a) { _gsScope.console && console.log(a) }, j = function (b, c) { var d, e, f, g, h, i, j = Math.ceil(Math.abs(c) / 90), k = 0, l = []; for (b *= a, c *= a, d = c / j, e = 4 / 3 * Math.sin(d / 2) / (1 + Math.cos(d / 2)), i = 0; j > i; i++)f = b + i * d, g = Math.cos(f), h = Math.sin(f), l[k++] = g - e * h, l[k++] = h + e * g, f += d, g = Math.cos(f), h = Math.sin(f), l[k++] = g + e * h, l[k++] = h - e * g, l[k++] = g, l[k++] = h; return l }, k = function (c, d, e, f, g, h, i, k, l) { if (c !== k || d !== l) { e = Math.abs(e), f = Math.abs(f); var m = g % 360 * a, n = Math.cos(m), o = Math.sin(m), p = (c - k) / 2, q = (d - l) / 2, r = n * p + o * q, s = -o * p + n * q, t = e * e, u = f * f, v = r * r, w = s * s, x = v / t + w / u; x > 1 && (e = Math.sqrt(x) * e, f = Math.sqrt(x) * f, t = e * e, u = f * f); var y = h === i ? -1 : 1, z = (t * u - t * w - u * v) / (t * w + u * v); 0 > z && (z = 0); var A = y * Math.sqrt(z), B = A * (e * s / f), C = A * -(f * r / e), D = (c + k) / 2, E = (d + l) / 2, F = D + (n * B - o * C), G = E + (o * B + n * C), H = (r - B) / e, I = (s - C) / f, J = (-r - B) / e, K = (-s - C) / f, L = Math.sqrt(H * H + I * I), M = H; y = 0 > I ? -1 : 1; var N = y * Math.acos(M / L) * b; L = Math.sqrt((H * H + I * I) * (J * J + K * K)), M = H * J + I * K, y = 0 > H * K - I * J ? -1 : 1; var O = y * Math.acos(M / L) * b; !i && O > 0 ? O -= 360 : i && 0 > O && (O += 360), O %= 360, N %= 360; var P, Q, R, S = j(N, O), T = n * e, U = o * e, V = o * -f, W = n * f, X = S.length - 2; for (P = 0; X > P; P += 2)Q = S[P], R = S[P + 1], S[P] = Q * T + R * V + F, S[P + 1] = Q * U + R * W + G; return S[S.length - 2] = k, S[S.length - 1] = l, S } }, l = function (a) { var b, d, e, f, h, j, l, m, n, o, p, q, r, s = (a + "").replace(g, function (a) { var b = +a; return 1e-4 > b && b > -1e-4 ? 0 : b }).match(c) || [], t = [], u = 0, v = 0, w = s.length, x = 2, y = 0; if (!a || !isNaN(s[0]) || isNaN(s[1])) return i("ERROR: malformed path data: " + a), t; for (b = 0; w > b; b++)if (r = h, isNaN(s[b]) ? (h = s[b].toUpperCase(), j = h !== s[b]) : b-- , e = +s[b + 1], f = +s[b + 2], j && (e += u, f += v), 0 === b && (m = e, n = f), "M" === h) l && l.length < 8 && (t.length -= 1, x = 0), u = m = e, v = n = f, l = [e, f], y += x, x = 2, t.push(l), b += 2, h = "L"; else if ("C" === h) l || (l = [0, 0]), l[x++] = e, l[x++] = f, j || (u = v = 0), l[x++] = u + 1 * s[b + 3], l[x++] = v + 1 * s[b + 4], l[x++] = u += 1 * s[b + 5], l[x++] = v += 1 * s[b + 6], b += 6; else if ("S" === h) "C" === r || "S" === r ? (o = u - l[x - 4], p = v - l[x - 3], l[x++] = u + o, l[x++] = v + p) : (l[x++] = u, l[x++] = v), l[x++] = e, l[x++] = f, j || (u = v = 0), l[x++] = u += 1 * s[b + 3], l[x++] = v += 1 * s[b + 4], b += 4; else if ("Q" === h) o = e - u, p = f - v, l[x++] = u + 2 * o / 3, l[x++] = v + 2 * p / 3, j || (u = v = 0), u += 1 * s[b + 3], v += 1 * s[b + 4], o = e - u, p = f - v, l[x++] = u + 2 * o / 3, l[x++] = v + 2 * p / 3, l[x++] = u, l[x++] = v, b += 4; else if ("T" === h) o = u - l[x - 4], p = v - l[x - 3], l[x++] = u + o, l[x++] = v + p, o = u + 1.5 * o - e, p = v + 1.5 * p - f, l[x++] = e + 2 * o / 3, l[x++] = f + 2 * p / 3, l[x++] = u = e, l[x++] = v = f, b += 2; else if ("H" === h) f = v, l[x++] = u + (e - u) / 3, l[x++] = v + (f - v) / 3, l[x++] = u + 2 * (e - u) / 3, l[x++] = v + 2 * (f - v) / 3, l[x++] = u = e, l[x++] = f, b += 1; else if ("V" === h) f = e, e = u, j && (f += v - u), l[x++] = e, l[x++] = v + (f - v) / 3, l[x++] = e, l[x++] = v + 2 * (f - v) / 3, l[x++] = e, l[x++] = v = f, b += 1; else if ("L" === h || "Z" === h) "Z" === h && (e = m, f = n, l.closed = !0), ("L" === h || Math.abs(u - e) > .5 || Math.abs(v - f) > .5) && (l[x++] = u + (e - u) / 3, l[x++] = v + (f - v) / 3, l[x++] = u + 2 * (e - u) / 3, l[x++] = v + 2 * (f - v) / 3, l[x++] = e, l[x++] = f, "L" === h && (b += 2)), u = e, v = f; else if ("A" === h) { if (q = k(u, v, 1 * s[b + 1], 1 * s[b + 2], 1 * s[b + 3], 1 * s[b + 4], 1 * s[b + 5], (j ? u : 0) + 1 * s[b + 6], (j ? v : 0) + 1 * s[b + 7])) for (d = 0; d < q.length; d++)l[x++] = q[d]; u = l[x - 2], v = l[x - 1], b += 7 } else i("Error: malformed path data: " + a); return t.totalPoints = y + x, t }, m = function (a, b) { var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q = 0, r = .999999, s = a.length, t = b / ((s - 2) / 6); for (o = 2; s > o; o += 6)for (q += t; q > r;)c = a[o - 2], d = a[o - 1], e = a[o], f = a[o + 1], g = a[o + 2], h = a[o + 3], i = a[o + 4], j = a[o + 5], p = 1 / (Math.floor(q) + 1), k = c + (e - c) * p, m = e + (g - e) * p, k += (m - k) * p, m += (g + (i - g) * p - m) * p, l = d + (f - d) * p, n = f + (h - f) * p, l += (n - l) * p, n += (h + (j - h) * p - n) * p, a.splice(o, 4, c + (e - c) * p, d + (f - d) * p, k, l, k + (m - k) * p, l + (n - l) * p, m, n, g + (i - g) * p, h + (j - h) * p), o += 6, s += 6, q--; return a }, n = function (a) { var b, c, d, e, f = "", g = a.length, h = 100; for (c = 0; g > c; c++) { for (e = a[c], f += "M" + e[0] + "," + e[1] + " C", b = e.length, d = 2; b > d; d++)f += (e[d++] * h | 0) / h + "," + (e[d++] * h | 0) / h + " " + (e[d++] * h | 0) / h + "," + (e[d++] * h | 0) / h + " " + (e[d++] * h | 0) / h + "," + (e[d] * h | 0) / h + " "; e.closed && (f += "z") } return f }, o = function (a) { for (var b = [], c = a.length - 1, d = 0; --c > -1;)b[d++] = a[c], b[d++] = a[c + 1], c--; for (c = 0; d > c; c++)a[c] = b[c]; a.reversed = a.reversed ? !1 : !0 }, p = function (a) { var b, c = a.length, d = 0, e = 0; for (b = 0; c > b; b++)d += a[b++], e += a[b]; return [d / (c / 2), e / (c / 2)] }, q = function (a) { var b, c, d, e = a.length, f = a[0], g = f, h = a[1], i = h; for (d = 6; e > d; d += 6)b = a[d], c = a[d + 1], b > f ? f = b : g > b && (g = b), c > h ? h = c : i > c && (i = c); return a.centerX = (f + g) / 2, a.centerY = (h + i) / 2, a.size = (f - g) * (h - i) }, r = function (a) { for (var b, c, d, e, f, g = a.length, h = a[0][0], i = h, j = a[0][1], k = j; --g > -1;)for (f = a[g], b = f.length, e = 6; b > e; e += 6)c = f[e], d = f[e + 1], c > h ? h = c : i > c && (i = c), d > j ? j = d : k > d && (k = d); return a.centerX = (h + i) / 2, a.centerY = (j + k) / 2, a.size = (h - i) * (j - k) }, s = function (a, b) { return b.length - a.length }, t = function (a, b) { var c = a.size || q(a), d = b.size || q(b); return Math.abs(d - c) < (c + d) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : d - c }, u = function (a, b) { var c, d, e = a.slice(0), f = a.length, g = f - 2; for (b = 0 | b, c = 0; f > c; c++)d = (c + b) % g, a[c++] = e[d], a[c] = e[d + 1] }, v = function (a, b, c, d, e) { var f, g, h, i, j = a.length, k = 0, l = j - 2; for (c *= 6, g = 0; j > g; g += 6)f = (g + c) % l, i = a[f] - (b[g] - d), h = a[f + 1] - (b[g + 1] - e), k += Math.sqrt(h * h + i * i); return k }, w = function (a, b, c) { var d, e, f, g = a.length, h = p(a), i = p(b), j = i[0] - h[0], k = i[1] - h[1], l = v(a, b, 0, j, k), m = 0; for (f = 6; g > f; f += 6)e = v(a, b, f / 6, j, k), l > e && (l = e, m = f); if (c) for (d = a.slice(0), o(d), f = 6; g > f; f += 6)e = v(d, b, f / 6, j, k), l > e && (l = e, m = -f); return m / 6 }, x = function (a, b, c) { for (var d, e, f, g, h, i, j = a.length, k = 99999999999, l = 0, m = 0; --j > -1;)for (d = a[j], i = d.length, h = 0; i > h; h += 6)e = d[h] - b, f = d[h + 1] - c, g = Math.sqrt(e * e + f * f), k > g && (k = g, l = d[h], m = d[h + 1]); return [l, m] }, y = function (a, b, c, d, e, f) { var g, h, i, j, k, l = b.length, m = 0, n = Math.min(a.size || q(a), b[c].size || q(b[c])) * d, o = 999999999999, p = a.centerX + e, r = a.centerY + f; for (h = c; l > h && (g = b[h].size || q(b[h]), !(n > g)); h++)i = b[h].centerX - p, j = b[h].centerY - r, k = Math.sqrt(i * i + j * j), o > k && (m = h, o = k); return k = b[m], b.splice(m, 1), k }, z = function (a, b, c, d) { var e, f, g, h, j, k, l, n = b.length - a.length, p = n > 0 ? b : a, v = n > 0 ? a : b, z = 0, A = "complexity" === d ? s : t, B = "position" === d ? 0 : "number" == typeof d ? d : .8, C = v.length, D = "object" == typeof c && c.push ? c.slice(0) : [c], E = "reverse" === D[0] || D[0] < 0, F = "log" === c; if (v[0]) { if (p.length > 1 && (a.sort(A), b.sort(A), k = p.size || r(p), k = v.size || r(v), k = p.centerX - v.centerX, l = p.centerY - v.centerY, A === t)) for (C = 0; C < v.length; C++)p.splice(C, 0, y(v[C], p, C, B, k, l)); if (n) for (0 > n && (n = -n), p[0].length > v[0].length && m(v[0], (p[0].length - v[0].length) / 6 | 0), C = v.length; n > z;)h = p[C].size || q(p[C]), g = x(v, p[C].centerX, p[C].centerY), h = g[0], j = g[1], v[C++] = [h, j, h, j, h, j, h, j], v.totalPoints += 8, z++; for (C = 0; C < a.length; C++)e = b[C], f = a[C], n = e.length - f.length, 0 > n ? m(e, -n / 6 | 0) : n > 0 && m(f, n / 6 | 0), E && !f.reversed && o(f), c = D[C] || 0 === D[C] ? D[C] : "auto", c && (f.closed || Math.abs(f[0] - f[f.length - 2]) < .5 && Math.abs(f[1] - f[f.length - 1]) < .5 ? "auto" === c || "log" === c ? (D[C] = c = w(f, e, 0 === C), 0 > c && (E = !0, o(f), c = -c), u(f, 6 * c)) : "reverse" !== c && (C && 0 > c && o(f), u(f, 6 * (0 > c ? -c : c))) : !E && ("auto" === c && Math.abs(e[0] - f[0]) + Math.abs(e[1] - f[1]) + Math.abs(e[e.length - 2] - f[f.length - 2]) + Math.abs(e[e.length - 1] - f[f.length - 1]) > Math.abs(e[0] - f[f.length - 2]) + Math.abs(e[1] - f[f.length - 1]) + Math.abs(e[e.length - 2] - f[0]) + Math.abs(e[e.length - 1] - f[1]) || c % 2) ? (o(f), D[C] = -1, E = !0) : "auto" === c ? D[C] = 0 : "reverse" === c && (D[C] = -1), f.closed !== e.closed && (f.closed = e.closed = !1)); return F && i("shapeIndex:[" + D.join(",") + "]"), D } }, A = function (a, b, c, d) { var e = l(a[0]), f = l(a[1]); z(e, f, b || 0 === b ? b : "auto", c) && (a[0] = n(e), a[1] = n(f), ("log" === d || d === !0) && i('precompile:["' + a[0] + '","' + a[1] + '"]')) }, B = function (a, b, c) { return b || c || a || 0 === a ? function (d) { A(d, a, b, c) } : A }, C = function (a, b) { if (!b) return a; var c, e, f, g = a.match(d) || [], h = g.length, i = ""; for ("reverse" === b ? (e = h - 1, c = -2) : (e = (2 * (parseInt(b, 10) || 0) + 1 + 100 * h) % h, c = 2), f = 0; h > f; f += 2)i += g[e - 1] + "," + g[e] + " ", e = (e + c) % h; return i }, D = function (a, b) { var c, d, e, f, g, h, i, j = 0, k = parseFloat(a[0]), l = parseFloat(a[1]), m = k + "," + l + " ", n = .999999; for (e = a.length, c = .5 * b / (.5 * e - 1), d = 0; e - 2 > d; d += 2) { if (j += c, h = parseFloat(a[d + 2]), i = parseFloat(a[d + 3]), j > n) for (g = 1 / (Math.floor(j) + 1), f = 1; j > n;)m += (k + (h - k) * g * f).toFixed(2) + "," + (l + (i - l) * g * f).toFixed(2) + " ", j-- , f++; m += h + "," + i + " ", k = h, l = i } return m }, E = function (a) { var b = a[0].match(d) || [], c = a[1].match(d) || [], e = c.length - b.length; e > 0 ? a[0] = D(b, e) : a[1] = D(c, -e) }, F = function (a) { return isNaN(a) ? E : function (b) { E(b), b[1] = C(b[1], parseInt(a, 10)) } }, G = function (a, b) { var c, d = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"), e = Array.prototype.slice.call(a.attributes), f = e.length; for (b = "," + b + ","; --f > -1;)c = e[f].nodeName.toLowerCase(), -1 === b.indexOf("," + c + ",") && d.setAttributeNS(null, c, e[f].nodeValue); return d }, H = function (a, b) { var c, e, f, g, h, i, j, k, m, o, p, q, r, s, t, u, v, w, x, y, z, A = a.tagName.toLowerCase(), B = .552284749831; return "path" !== A && a.getBBox ? (i = G(a, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === A ? (g = +a.getAttribute("rx") || 0, h = +a.getAttribute("ry") || 0, e = +a.getAttribute("x") || 0, f = +a.getAttribute("y") || 0, o = (+a.getAttribute("width") || 0) - 2 * g, p = (+a.getAttribute("height") || 0) - 2 * h, g || h ? (q = e + g * (1 - B), r = e + g, s = r + o, t = s + g * B, u = s + g, v = f + h * (1 - B), w = f + h, x = w + p, y = x + h * B, z = x + h, c = "M" + u + "," + w + " V" + x + " C" + [u, y, t, z, s, z, s - (s - r) / 3, z, r + (s - r) / 3, z, r, z, q, z, e, y, e, x, e, x - (x - w) / 3, e, w + (x - w) / 3, e, w, e, v, q, f, r, f, r + (s - r) / 3, f, s - (s - r) / 3, f, s, f, t, f, u, v, u, w].join(",") + "z") : c = "M" + (e + o) + "," + f + " v" + p + " h" + -o + " v" + -p + " h" + o + "z") : "circle" === A || "ellipse" === A ? ("circle" === A ? (g = h = +a.getAttribute("r") || 0, k = g * B) : (g = +a.getAttribute("rx") || 0, h = +a.getAttribute("ry") || 0, k = h * B), e = +a.getAttribute("cx") || 0, f = +a.getAttribute("cy") || 0, j = g * B, c = "M" + (e + g) + "," + f + " C" + [e + g, f + k, e + j, f + h, e, f + h, e - j, f + h, e - g, f + k, e - g, f, e - g, f - k, e - j, f - h, e, f - h, e + j, f - h, e + g, f - k, e + g, f].join(",") + "z") : "line" === A ? c = n(l("M" + (a.getAttribute("x1") || 0) + "," + (a.getAttribute("y1") || 0) + " L" + (a.getAttribute("x2") || 0) + "," + (a.getAttribute("y2") || 0))) : ("polyline" === A || "polygon" === A) && (m = (a.getAttribute("points") + "").match(d) || [], e = m.shift(), f = m.shift(), c = "M" + e + "," + f + " L" + m.join(","), "polygon" === A && (c += "," + e + "," + f + "z")), i.setAttribute("d", c), b && a.parentNode && (a.parentNode.insertBefore(i, a), a.parentNode.removeChild(a)), i) : a }, I = function (a, b, c) { var f, g, j = "string" == typeof a; return (!j || e.test(a) || (a.match(d) || []).length < 3) && (f = j ? h.selector(a) : a && a[0] ? a : [a], f && f[0] ? (f = f[0], g = f.nodeName.toUpperCase(), b && "PATH" !== g && (f = H(f, !1), g = "PATH"), a = f.getAttribute("PATH" === g ? "d" : "points") || "", f === c && (a = f.getAttributeNS(null, "data-original") || a)) : (i("WARNING: invalid morph to: " + a), a = !1)), a }, J = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.", K = _gsScope._gsDefine.plugin({ propName: "morphSVG", API: 2, global: !0, version: "0.8.11", init: function (a, b, c, d) { var e, g, h, j, k; return "function" != typeof a.setAttribute ? !1 : ("function" == typeof b && (b = b(d, a)), e = a.nodeName.toUpperCase(), k = "POLYLINE" === e || "POLYGON" === e, "PATH" === e || k ? (g = "PATH" === e ? "d" : "points", ("string" == typeof b || b.getBBox || b[0]) && (b = { shape: b }), j = I(b.shape || b.d || b.points || "", "d" === g, a), k && f.test(j) ? (i("WARNING: a <" + e + "> cannot accept path data. " + J), !1) : (j && (this._target = a, a.getAttributeNS(null, "data-original") || a.setAttributeNS(null, "data-original", a.getAttribute(g)), h = this._addTween(a, "setAttribute", a.getAttribute(g) + "", j + "", "morphSVG", !1, g, "object" == typeof b.precompile ? function (a) { a[0] = b.precompile[0], a[1] = b.precompile[1] } : "d" === g ? B(b.shapeIndex, b.map || K.defaultMap, b.precompile) : F(b.shapeIndex)), h && (this._overwriteProps.push("morphSVG"), h.end = j, h.endProp = g)), !0)) : (i("WARNING: cannot morph a <" + e + "> SVG element. " + J), !1)) }, set: function (a) { var b; if (this._super.setRatio.call(this, a), 1 === a) for (b = this._firstPT; b;)b.end && this._target.setAttribute(b.endProp, b.end), b = b._next } }); K.pathFilter = A, K.pointsFilter = E, K.subdivideRawBezier = m, K.defaultMap = "size", K.pathDataToRawBezier = function (a) { return l(I(a, !0)) }, K.equalizeSegmentQuantity = z, K.convertToPath = function (a, b) { "string" == typeof a && (a = h.selector(a)); for (var c = a && 0 !== a.length ? a.length && a[0] && a[0].nodeType ? Array.prototype.slice.call(a, 0) : [a] : [], d = c.length; --d > -1;)c[d] = H(c[d], b !== !1); return c }, K.pathDataToBezier = function (a, b) { var c, d, e, f, g, i, j, k, m = l(I(a, !0))[0] || [], n = 0; if (b = b || {}, k = b.align || b.relative, f = b.matrix || [1, 0, 0, 1, 0, 0], g = b.offsetX || 0, i = b.offsetY || 0, "relative" === k || k === !0 ? (g -= m[0] * f[0] + m[1] * f[2], i -= m[0] * f[1] + m[1] * f[3], n = "+=") : (g += f[4], i += f[5], k && (k = "string" == typeof k ? h.selector(k) : k && k[0] ? k : [k], k && k[0] && (j = k[0].getBBox() || { x: 0, y: 0 }, g -= j.x, i -= j.y))), c = [], e = m.length, f && "1,0,0,1,0,0" !== f.join(",")) for (d = 0; e > d; d += 2)c.push({ x: n + (m[d] * f[0] + m[d + 1] * f[2] + g), y: n + (m[d] * f[1] + m[d + 1] * f[3] + i) }); else for (d = 0; e > d; d += 2)c.push({ x: n + (m[d] + g), y: n + (m[d + 1] + i) }); return c } }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) { "use strict"; var b = function () { return (_gsScope.GreenSockGlobals || _gsScope)[a] }; "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b) }("MorphSVGPlugin");;
/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window; !function (a) { "use strict"; var b = a.GreenSockGlobals || a, c = function (a) { var c, d = a.split("."), e = b; for (c = 0; c < d.length; c++)e[d[c]] = e = e[d[c]] || {}; return e }, d = c("com.greensock.utils"), e = function (a) { var b = a.nodeType, c = ""; if (1 === b || 9 === b || 11 === b) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a) } else if (3 === b || 4 === b) return a.nodeValue; return c }, f = document, g = f.defaultView ? f.defaultView.getComputedStyle : function () { }, h = /([A-Z])/g, i = function (a, b, c, d) { var e; return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]), d ? e : parseInt(e, 10) || 0 }, j = function (a) { return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1 }, k = function (a) { var b, c, d, e = [], f = a.length; for (b = 0; f > b; b++)if (c = a[b], j(c)) for (d = c.length, d = 0; d < c.length; d++)e.push(c[d]); else e.push(c); return e }, l = function (a, b) { for (var c, d = b.length; --d > -1;)if (c = b[d], a.substr(0, c.length) === c) return c.length }, m = /(?:\r|\n|\t\t)/g, n = /(?:\s\s+)/g, o = 55296, p = 56319, q = 56320, r = 127462, s = 127487, t = 127995, u = 127999, v = function (a) { return (a.charCodeAt(0) - o << 10) + (a.charCodeAt(1) - q) + 65536 }, w = f.all && !f.addEventListener, x = " style='position:relative;display:inline-block;" + (w ? "*display:inline;*zoom:1;'" : "'"), y = function (a, b) { a = a || ""; var c = -1 !== a.indexOf("++"), d = 1; return c && (a = a.split("++").join("")), function () { return "<" + b + x + (a ? " class='" + a + (c ? d++ : "") + "'>" : ">") } }, z = d.SplitText = b.SplitText = function (a, b) { if ("string" == typeof a && (a = z.selector(a)), !a) throw "cannot split a null element."; this.elements = j(a) ? k(a) : [a], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = b || {}, this.split(b) }, A = function (a, b, c) { var d = a.nodeType; if (1 === d || 9 === d || 11 === d) for (a = a.firstChild; a; a = a.nextSibling)A(a, b, c); else (3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c)) }, B = function (a, b) { for (var c = b.length; --c > -1;)a.push(b[c]) }, C = function (a) { var b, c = [], d = a.length; for (b = 0; b !== d; c.push(a[b++])); return c }, D = function (a, b, c) { for (var d; a && a !== b;) { if (d = a._next || a.nextSibling) return d.textContent.charAt(0) === c; a = a.parentNode || a._parent } return !1 }, E = function (a) { var b, c, d = C(a.childNodes), e = d.length; for (b = 0; e > b; b++)c = d[b], c._isSplit ? E(c) : (b && 3 === c.previousSibling.nodeType ? c.previousSibling.nodeValue += 3 === c.nodeType ? c.nodeValue : c.firstChild.nodeValue : 3 !== c.nodeType && a.insertBefore(c.firstChild, c), a.removeChild(c)) }, F = function (a, b, c, d, e, h, j) { var k, l, m, n, o, p, q, r, s, t, u, v, w = g(a), x = i(a, "paddingLeft", w), y = -999, z = i(a, "borderBottomWidth", w) + i(a, "borderTopWidth", w), C = i(a, "borderLeftWidth", w) + i(a, "borderRightWidth", w), F = i(a, "paddingTop", w) + i(a, "paddingBottom", w), G = i(a, "paddingLeft", w) + i(a, "paddingRight", w), H = .2 * i(a, "fontSize"), I = i(a, "textAlign", w, !0), J = [], K = [], L = [], M = b.wordDelimiter || " ", N = b.span ? "span" : "div", O = b.type || b.split || "chars,words,lines", P = e && -1 !== O.indexOf("lines") ? [] : null, Q = -1 !== O.indexOf("words"), R = -1 !== O.indexOf("chars"), S = "absolute" === b.position || b.absolute === !0, T = b.linesClass, U = -1 !== (T || "").indexOf("++"), V = []; for (U && (T = T.split("++").join("")), l = a.getElementsByTagName("*"), m = l.length, o = [], k = 0; m > k; k++)o[k] = l[k]; if (P || S) for (k = 0; m > k; k++)n = o[k], p = n.parentNode === a, (p || S || R && !Q) && (v = n.offsetTop, P && p && Math.abs(v - y) > H && ("BR" !== n.nodeName || 0 === k) && (q = [], P.push(q), y = v), S && (n._x = n.offsetLeft, n._y = v, n._w = n.offsetWidth, n._h = n.offsetHeight), P && ((n._isSplit && p || !R && p || Q && p || !Q && n.parentNode.parentNode === a && !n.parentNode._isSplit) && (q.push(n), n._x -= x, D(n, a, M) && (n._wordEnd = !0)), "BR" === n.nodeName && (n.nextSibling && "BR" === n.nextSibling.nodeName || 0 === k) && P.push([]))); for (k = 0; m > k; k++)n = o[k], p = n.parentNode === a, "BR" !== n.nodeName ? (S && (s = n.style, Q || p || (n._x += n.parentNode._x, n._y += n.parentNode._y), s.left = n._x + "px", s.top = n._y + "px", s.position = "absolute", s.display = "block", s.width = n._w + 1 + "px", s.height = n._h + "px"), !Q && R ? n._isSplit ? (n._next = n.nextSibling, n.parentNode.appendChild(n)) : n.parentNode._isSplit ? (n._parent = n.parentNode, !n.previousSibling && n.firstChild && (n.firstChild._isFirst = !0), n.nextSibling && " " === n.nextSibling.textContent && !n.nextSibling.nextSibling && V.push(n.nextSibling), n._next = n.nextSibling && n.nextSibling._isFirst ? null : n.nextSibling, n.parentNode.removeChild(n), o.splice(k--, 1), m--) : p || (v = !n.nextSibling && D(n.parentNode, a, M), n.parentNode._parent && n.parentNode._parent.appendChild(n), v && n.parentNode.appendChild(f.createTextNode(" ")), b.span && (n.style.display = "inline"), J.push(n)) : n.parentNode._isSplit && !n._isSplit && "" !== n.innerHTML ? K.push(n) : R && !n._isSplit && (b.span && (n.style.display = "inline"), J.push(n))) : P || S ? (n.parentNode && n.parentNode.removeChild(n), o.splice(k--, 1), m--) : Q || a.appendChild(n); for (k = V.length; --k > -1;)V[k].parentNode.removeChild(V[k]); if (P) { for (S && (t = f.createElement(N), a.appendChild(t), u = t.offsetWidth + "px", v = t.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(t)), s = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;)a.removeChild(a.firstChild); for (r = " " === M && (!S || !Q && !R), k = 0; k < P.length; k++) { for (q = P[k], t = f.createElement(N), t.style.cssText = "display:block;text-align:" + I + ";position:" + (S ? "absolute;" : "relative;"), T && (t.className = T + (U ? k + 1 : "")), L.push(t), m = q.length, l = 0; m > l; l++)"BR" !== q[l].nodeName && (n = q[l], t.appendChild(n), r && n._wordEnd && t.appendChild(f.createTextNode(" ")), S && (0 === l && (t.style.top = n._y + "px", t.style.left = x + v + "px"), n.style.top = "0px", v && (n.style.left = n._x - v + "px"))); 0 === m ? t.innerHTML = "&nbsp;" : Q || R || (E(t), A(t, String.fromCharCode(160), " ")), S && (t.style.width = u, t.style.height = n._h + "px"), a.appendChild(t) } a.style.cssText = s } S && (j > a.clientHeight && (a.style.height = j - F + "px", a.clientHeight < j && (a.style.height = j + z + "px")), h > a.clientWidth && (a.style.width = h - G + "px", a.clientWidth < h && (a.style.width = h + C + "px"))), B(c, J), Q && B(d, K), B(e, L) }, G = function (a, b, c, d) { var g, h, i, j, k, q, w, x, y, z, B = b.span ? "span" : "div", C = b.type || b.split || "chars,words,lines", D = -1 !== C.indexOf("chars"), E = "absolute" === b.position || b.absolute === !0, F = b.wordDelimiter || " ", G = " " !== F ? "" : E ? "&#173; " : " ", H = b.span ? "</span>" : "</div>", I = !0, J = b.specialChars ? "function" == typeof b.specialChars ? b.specialChars : l : null, K = f.createElement("div"), L = a.parentNode; for (L.insertBefore(K, a), K.textContent = a.nodeValue, L.removeChild(a), a = K, g = e(a), w = -1 !== g.indexOf("<"), b.reduceWhiteSpace !== !1 && (g = g.replace(n, " ").replace(m, "")), w && (g = g.split("<").join("{{LT}}")), k = g.length, h = (" " === g.charAt(0) ? G : "") + c(), i = 0; k > i; i++)if (q = g.charAt(i), J && (z = J(g.substr(i), b.specialChars))) q = g.substr(i, z || 1), h += D && " " !== q ? d() + q + "</" + B + ">" : q, i += z - 1; else if (q === F && g.charAt(i - 1) !== F && i) { for (h += I ? H : "", I = !1; g.charAt(i + 1) === F;)h += G, i++; i === k - 1 ? h += G : ")" !== g.charAt(i + 1) && (h += G + c(), I = !0) } else "{" === q && "{{LT}}" === g.substr(i, 6) ? (h += D ? d() + "{{LT}}</" + B + ">" : "{{LT}}", i += 5) : q.charCodeAt(0) >= o && q.charCodeAt(0) <= p || g.charCodeAt(i + 1) >= 65024 && g.charCodeAt(i + 1) <= 65039 ? (x = v(g.substr(i, 2)), y = v(g.substr(i + 2, 2)), j = x >= r && s >= x && y >= r && s >= y || y >= t && u >= y ? 4 : 2, h += D && " " !== q ? d() + g.substr(i, j) + "</" + B + ">" : g.substr(i, j), i += j - 1) : h += D && " " !== q ? d() + q + "</" + B + ">" : q; a.outerHTML = h + (I ? H : ""), w && A(L, "{{LT}}", "<") }, H = function (a, b, c, d) { var e, f, g = C(a.childNodes), h = g.length, j = "absolute" === b.position || b.absolute === !0; if (3 !== a.nodeType || h > 1) { for (b.absolute = !1, e = 0; h > e; e++)f = g[e], (3 !== f.nodeType || /\S+/.test(f.nodeValue)) && (j && 3 !== f.nodeType && "inline" === i(f, "display", null, !0) && (f.style.display = "inline-block", f.style.position = "relative"), f._isSplit = !0, H(f, b, c, d)); return b.absolute = j, void (a._isSplit = !0) } G(a, b, c, d) }, I = z.prototype; I.split = function (a) { this.isSplit && this.revert(), this.vars = a = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0; for (var b, c, d, e = this.elements.length, f = a.span ? "span" : "div", g = y(a.wordsClass, f), h = y(a.charsClass, f); --e > -1;)d = this.elements[e], this._originals[e] = d.innerHTML, b = d.clientHeight, c = d.clientWidth, H(d, a, g, h), F(d, a, this.chars, this.words, this.lines, c, b); return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this }, I.revert = function () { if (!this._originals) throw "revert() call wasn't scoped properly."; for (var a = this._originals.length; --a > -1;)this.elements[a].innerHTML = this._originals[a]; return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this }, z.selector = a.$ || a.jQuery || function (b) { var c = a.$ || a.jQuery; return c ? (z.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) }, z.version = "0.6.1" }(_gsScope), function (a) { "use strict"; var b = function () { return (_gsScope.GreenSockGlobals || _gsScope)[a] }; "undefined" != typeof module && module.exports ? module.exports = b() : "function" == typeof define && define.amd && define([], b) }("SplitText");;
/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});;
/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 JÃ¶rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){c.extend(c.fn, {validate:function(a){if (this.length){var b = c.data(this[0], "validator"); if (b)return b; this.attr("novalidate", "novalidate"); b = new c.validator(a, this[0]); c.data(this[0], "validator", b); if (b.settings.onsubmit){a = this.find("input, button"); a.filter(".cancel").click(function(){b.cancelSubmit = true}); b.settings.submitHandler && a.filter(":submit").click(function(){b.submitButton = this}); this.submit(function(d){function e(){if (b.settings.submitHandler){if (b.submitButton)var f = c("<input type='hidden'/>").attr("name",
        b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm); b.settings.submitHandler.call(b, b.currentForm); b.submitButton && f.remove(); return false}return true}b.settings.debug && d.preventDefault(); if (b.cancelSubmit){b.cancelSubmit = false; return e()}if (b.form()){if (b.pendingRequest){b.formSubmitted = true; return false}return e()} else{b.focusInvalid(); return false}})}return b} else a && a.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")}, valid:function(){if (c(this[0]).is("form"))return this.validate().form();
        else{var a = true, b = c(this[0].form).validate(); this.each(function(){a &= b.element(this)}); return a}}, removeAttrs:function(a){var b = {}, d = this; c.each(a.split(/\s/), function(e, f){b[f] = d.attr(f); d.removeAttr(f)}); return b}, rules:function(a, b){var d = this[0]; if (a){var e = c.data(d.form, "validator").settings, f = e.rules, g = c.validator.staticRules(d); switch (a){case "add":c.extend(g, c.validator.normalizeRule(b)); f[d.name] = g; if (b.messages)e.messages[d.name] = c.extend(e.messages[d.name], b.messages); break; case "remove":if (!b){delete f[d.name];
        return g}var h = {}; c.each(b.split(/\s/), function(j, i){h[i] = g[i]; delete g[i]}); return h}}d = c.validator.normalizeRules(c.extend({}, c.validator.metadataRules(d), c.validator.classRules(d), c.validator.attributeRules(d), c.validator.staticRules(d)), d); if (d.required){e = d.required; delete d.required; d = c.extend({required:e}, d)}return d}}); c.extend(c.expr[":"], {blank:function(a){return!c.trim("" + a.value)}, filled:function(a){return!!c.trim("" + a.value)}, unchecked:function(a){return!a.checked}}); c.validator = function(a,
        b){this.settings = c.extend(true, {}, c.validator.defaults, a); this.currentForm = b; this.init()}; c.validator.format = function(a, b){if (arguments.length == 1)return function(){var d = c.makeArray(arguments); d.unshift(a); return c.validator.format.apply(this, d)}; if (arguments.length > 2 && b.constructor != Array)b = c.makeArray(arguments).slice(1); if (b.constructor != Array)b = [b]; c.each(b, function(d, e){a = a.replace(RegExp("\\{" + d + "\\}", "g"), e)}); return a}; c.extend(c.validator, {defaults:{messages:{}, groups:{}, rules:{}, errorClass:"error",
        validClass:"valid", errorElement:"label", focusInvalid:true, errorContainer:c([]), errorLabelContainer:c([]), onsubmit:true, ignore:":hidden", ignoreTitle:false, onfocusin:function(a){this.lastActive = a; if (this.settings.focusCleanup && !this.blockFocusCleanup){this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass); this.addWrapper(this.errorsFor(a)).hide()}}, onfocusout:function(a){if (!this.checkable(a) && (a.name in this.submitted || !this.optional(a)))this.element(a)},
        onkeyup:function(a){if (a.name in this.submitted || a == this.lastElement)this.element(a)}, onclick:function(a){if (a.name in this.submitted)this.element(a); else a.parentNode.name in this.submitted && this.element(a.parentNode)}, highlight:function(a, b, d){a.type === "radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)}, unhighlight:function(a, b, d){a.type === "radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}}, setDefaults:function(a){c.extend(c.validator.defaults,
        a)}, messages:{required:"This field is required.", remote:"Please fix this field.", email:"Please enter a valid email address.", url:"Please enter a valid URL.", date:"Please enter a valid date.", dateISO:"Please enter a valid date (ISO).", number:"Please enter a valid number.", digits:"Please enter only digits.", creditcard:"Please enter a valid credit card number.", equalTo:"Please enter the same value again.", accept:"Please enter a value with a valid extension.", maxlength:c.validator.format("Please enter no more than {0} characters."),
        minlength:c.validator.format("Please enter at least {0} characters."), rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."), range:c.validator.format("Please enter a value between {0} and {1}."), max:c.validator.format("Please enter a value less than or equal to {0}."), min:c.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges:false, prototype:{init:function(){function a(e){var f = c.data(this[0].form, "validator"), g = "on" + e.type.replace(/^validate/,
        ""); f.settings[g] && f.settings[g].call(f, this[0], e)}this.labelContainer = c(this.settings.errorLabelContainer); this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm); this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer); this.submitted = {}; this.valueCache = {}; this.pendingRequest = 0; this.pending = {}; this.invalid = {}; this.reset(); var b = this.groups = {}; c.each(this.settings.groups, function(e, f){c.each(f.split(/\s/), function(g, h){b[h] = e})}); var d =
        this.settings.rules; c.each(d, function(e, f){d[e] = c.validator.normalizeRule(f)}); c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", a).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click",
        a); this.settings.invalidHandler && c(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)}, form:function(){this.checkForm(); c.extend(this.submitted, this.errorMap); this.invalid = c.extend({}, this.errorMap); this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]); this.showErrors(); return this.valid()}, checkForm:function(){this.prepareForm(); for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)this.check(b[a]); return this.valid()}, element:function(a){this.lastElement =
        a = this.validationTargetFor(this.clean(a)); this.prepareElement(a); this.currentElements = c(a); var b = this.check(a); if (b)delete this.invalid[a.name]; else this.invalid[a.name] = true; if (!this.numberOfInvalids())this.toHide = this.toHide.add(this.containers); this.showErrors(); return b}, showErrors:function(a){if (a){c.extend(this.errorMap, a); this.errorList = []; for (var b in a)this.errorList.push({message:a[b], element:this.findByName(b)[0]}); this.successList = c.grep(this.successList, function(d){return!(d.name in a)})}this.settings.showErrors?
        this.settings.showErrors.call(this, this.errorMap, this.errorList):this.defaultShowErrors()}, resetForm:function(){c.fn.resetForm && c(this.currentForm).resetForm(); this.submitted = {}; this.lastElement = null; this.prepareForm(); this.hideErrors(); this.elements().removeClass(this.settings.errorClass)}, numberOfInvalids:function(){return this.objectLength(this.invalid)}, objectLength:function(a){var b = 0, d; for (d in a)b++; return b}, hideErrors:function(){this.addWrapper(this.toHide).hide()}, valid:function(){return this.size() ==
0}, size:function(){return this.errorList.length}, focusInvalid:function(){if (this.settings.focusInvalid)try{c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")} catch (a){}}, findLastActive:function(){var a = this.lastActive; return a && c.grep(this.errorList, function(b){return b.element.name == a.name}).length == 1 && a}, elements:function(){var a = this, b = {}; return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name &&
        a.settings.debug && window.console && console.error("%o has no name assigned", this); if (this.name in b || !a.objectLength(c(this).rules()))return false; return b[this.name] = true})}, clean:function(a){return c(a)[0]}, errors:function(){return c(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)}, reset:function(){this.successList = []; this.errorList = []; this.errorMap = {}; this.toShow = c([]); this.toHide = c([]); this.currentElements = c([])}, prepareForm:function(){this.reset(); this.toHide = this.errors().add(this.containers)},
        prepareElement:function(a){this.reset(); this.toHide = this.errorsFor(a)}, check:function(a){a = this.validationTargetFor(this.clean(a)); var b = c(a).rules(), d = false, e; for (e in b){var f = {method:e, parameters:b[e]}; try{var g = c.validator.methods[e].call(this, a.value.replace(/\r/g, ""), a, f.parameters); if (g == "dependency-mismatch")d = true; else{d = false; if (g == "pending"){this.toHide = this.toHide.not(this.errorsFor(a)); return}if (!g){this.formatAndAdd(a, f); return false}}} catch (h){this.settings.debug && window.console && console.log("exception occured when checking element " +
        a.id + ", check the '" + f.method + "' method", h); throw h; }}if (!d){this.objectLength(b) && this.successList.push(a); return true}}, customMetaMessage:function(a, b){if (c.metadata){var d = this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata(); return d && d.messages && d.messages[b]}}, customMessage:function(a, b){var d = this.settings.messages[a]; return d && (d.constructor == String?d:d[b])}, findDefined:function(){for (var a = 0; a < arguments.length; a++)if (arguments[a] !== undefined)return arguments[a]}, defaultMessage:function(a,
        b){return this.findDefined(this.customMessage(a.name, b), this.customMetaMessage(a, b), !this.settings.ignoreTitle && a.title || undefined, c.validator.messages[b], "<strong>Warning: No message defined for " + a.name + "</strong>")}, formatAndAdd:function(a, b){var d = this.defaultMessage(a, b.method), e = /\$?\{(\d+)\}/g; if (typeof d == "function")d = d.call(this, b.parameters, a); else if (e.test(d))d = jQuery.format(d.replace(e, "{$1}"), b.parameters); this.errorList.push({message:d, element:a}); this.errorMap[a.name] = d; this.submitted[a.name] =
d}, addWrapper:function(a){if (this.settings.wrapper)a = a.add(a.parent(this.settings.wrapper)); return a}, defaultShowErrors:function(){for (var a = 0; this.errorList[a]; a++){var b = this.errorList[a]; this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass); this.showLabel(b.element, b.message)}if (this.errorList.length)this.toShow = this.toShow.add(this.containers); if (this.settings.success)for (a = 0; this.successList[a]; a++)this.showLabel(this.successList[a]);
        if (this.settings.unhighlight){a = 0; for (b = this.validElements(); b[a]; a++)this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)}this.toHide = this.toHide.not(this.toShow); this.hideErrors(); this.addWrapper(this.toShow).show()}, validElements:function(){return this.currentElements.not(this.invalidElements())}, invalidElements:function(){return c(this.errorList).map(function(){return this.element})}, showLabel:function(a, b){var d = this.errorsFor(a); if (d.length){d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
        d.attr("generated") && d.html(b)} else{d = c("<" + this.settings.errorElement + "/>").attr({"for":this.idOrName(a), generated:true}).addClass(this.settings.errorClass).html(b || ""); if (this.settings.wrapper)d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent(); this.labelContainer.append(d).length || (this.settings.errorPlacement?this.settings.errorPlacement(d, c(a)):d.insertAfter(a))}if (!b && this.settings.success){d.text(""); typeof this.settings.success == "string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow =
        this.toShow.add(d)}, errorsFor:function(a){var b = this.idOrName(a); return this.errors().filter(function(){return c(this).attr("for") == b})}, idOrName:function(a){return this.groups[a.name] || (this.checkable(a)?a.name:a.id || a.name)}, validationTargetFor:function(a){if (this.checkable(a))a = this.findByName(a.name).not(this.settings.ignore)[0]; return a}, checkable:function(a){return/radio|checkbox/i.test(a.type)}, findByName:function(a){var b = this.currentForm; return c(document.getElementsByName(a)).map(function(d,
        e){return e.form == b && e.name == a && e || null})}, getLength:function(a, b){switch (b.nodeName.toLowerCase()){case "select":return c("option:selected", b).length; case "input":if (this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length}, depend:function(a, b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a, b):true}, dependTypes:{"boolean":function(a){return a}, string:function(a, b){return!!c(a, b.form).length}, "function":function(a, b){return a(b)}}, optional:function(a){return!c.validator.methods.required.call(this,
        c.trim(a.value), a) && "dependency-mismatch"}, startRequest:function(a){if (!this.pending[a.name]){this.pendingRequest++; this.pending[a.name] = true}}, stopRequest:function(a, b){this.pendingRequest--; if (this.pendingRequest < 0)this.pendingRequest = 0; delete this.pending[a.name]; if (b && this.pendingRequest == 0 && this.formSubmitted && this.form()){c(this.currentForm).submit(); this.formSubmitted = false} else if (!b && this.pendingRequest == 0 && this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form", [this]); this.formSubmitted =
false}}, previousValue:function(a){return c.data(a, "previousValue") || c.data(a, "previousValue", {old:null, valid:true, message:this.defaultMessage(a, "remote")})}}, classRuleSettings:{required:{required:true}, email:{email:true}, url:{url:true}, date:{date:true}, dateISO:{dateISO:true}, dateDE:{dateDE:true}, number:{number:true}, numberDE:{numberDE:true}, digits:{digits:true}, creditcard:{creditcard:true}}, addClassRules:function(a, b){a.constructor == String?this.classRuleSettings[a] = b:c.extend(this.classRuleSettings,
        a)}, classRules:function(a){var b = {}; (a = c(a).attr("class")) && c.each(a.split(" "), function(){this in c.validator.classRuleSettings && c.extend(b, c.validator.classRuleSettings[this])}); return b}, attributeRules:function(a){var b = {}; a = c(a); for (var d in c.validator.methods){var e; if (e = d === "required" && typeof c.fn.prop === "function"?a.prop(d):a.attr(d))b[d] = e; else if (a[0].getAttribute("type") === d)b[d] = true}b.maxlength && /-1|2147483647|524288/.test(b.maxlength) && delete b.maxlength; return b}, metadataRules:function(a){if (!c.metadata)return{};
        var b = c.data(a.form, "validator").settings.meta; return b?c(a).metadata()[b]:c(a).metadata()}, staticRules:function(a){var b = {}, d = c.data(a.form, "validator"); if (d.settings.rules)b = c.validator.normalizeRule(d.settings.rules[a.name]) || {}; return b}, normalizeRules:function(a, b){c.each(a, function(d, e){if (e === false)delete a[d]; else if (e.param || e.depends){var f = true; switch (typeof e.depends){case "string":f = !!c(e.depends, b.form).length; break; case "function":f = e.depends.call(b, b)}if (f)a[d] = e.param !== undefined?
        e.param:true; else delete a[d]}}); c.each(a, function(d, e){a[d] = c.isFunction(e)?e(b):e}); c.each(["minlength", "maxlength", "min", "max"], function(){if (a[this])a[this] = Number(a[this])}); c.each(["rangelength", "range"], function(){if (a[this])a[this] = [Number(a[this][0]), Number(a[this][1])]}); if (c.validator.autoCreateRanges){if (a.min && a.max){a.range = [a.min, a.max]; delete a.min; delete a.max}if (a.minlength && a.maxlength){a.rangelength = [a.minlength, a.maxlength]; delete a.minlength; delete a.maxlength}}a.messages && delete a.messages;
        return a}, normalizeRule:function(a){if (typeof a == "string"){var b = {}; c.each(a.split(/\s/), function(){b[this] = true}); a = b}return a}, addMethod:function(a, b, d){c.validator.methods[a] = b; c.validator.messages[a] = d != undefined?d:c.validator.messages[a]; b.length < 3 && c.validator.addClassRules(a, c.validator.normalizeRule(a))}, methods:{required:function(a, b, d){if (!this.depend(d, b))return"dependency-mismatch"; switch (b.nodeName.toLowerCase()){case "select":return(a = c(b).val()) && a.length > 0; case "input":if (this.checkable(b))return this.getLength(a,
        b) > 0; default:return c.trim(a).length > 0}}, remote:function(a, b, d){if (this.optional(b))return"dependency-mismatch"; var e = this.previousValue(b); this.settings.messages[b.name] || (this.settings.messages[b.name] = {}); e.originalMessage = this.settings.messages[b.name].remote; this.settings.messages[b.name].remote = e.message; d = typeof d == "string" && {url:d} || d; if (this.pending[b.name])return"pending"; if (e.old === a)return e.valid; e.old = a; var f = this; this.startRequest(b); var g = {}; g[b.name] = a; c.ajax(c.extend(true, {url:d,
        mode:"abort", port:"validate" + b.name, dataType:"json", data:g, success:function(h){f.settings.messages[b.name].remote = e.originalMessage; var j = h === true; if (j){var i = f.formSubmitted; f.prepareElement(b); f.formSubmitted = i; f.successList.push(b); f.showErrors()} else{i = {}; h = h || f.defaultMessage(b, "remote"); i[b.name] = e.message = c.isFunction(h)?h(a):h; f.showErrors(i)}e.valid = j; f.stopRequest(b, j)}}, d)); return"pending"}, minlength:function(a, b, d){return this.optional(b) || this.getLength(c.trim(a), b) >= d}, maxlength:function(a,
        b, d){return this.optional(b) || this.getLength(c.trim(a), b) <= d}, rangelength:function(a, b, d){a = this.getLength(c.trim(a), b); return this.optional(b) || a >= d[0] && a <= d[1]}, min:function(a, b, d){return this.optional(b) || a >= d}, max:function(a, b, d){return this.optional(b) || a <= d}, range:function(a, b, d){return this.optional(b) || a >= d[0] && a <= d[1]}, email:function(a, b){return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
        url:function(a, b){return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
        date:function(a, b){return this.optional(b) || !/Invalid|NaN/.test(new Date(a))}, dateISO:function(a, b){return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)}, number:function(a, b){return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)}, digits:function(a, b){return this.optional(b) || /^\d+$/.test(a)}, creditcard:function(a, b){if (this.optional(b))return"dependency-mismatch"; if (/[^0-9 -]+/.test(a))return false; var d = 0, e = 0, f = false; a = a.replace(/\D/g, ""); for (var g = a.length - 1; g >=
        0; g--){e = a.charAt(g); e = parseInt(e, 10); if (f)if ((e *= 2) > 9)e -= 9; d += e; f = !f}return d % 10 == 0}, accept:function(a, b, d){d = typeof d == "string"?d.replace(/,/g, "|"):"png|jpe?g|gif"; return this.optional(b) || a.match(RegExp(".(" + d + ")$", "i"))}, equalTo:function(a, b, d){d = c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo", function(){c(b).valid()}); return a == d.val()}}}); c.format = c.validator.format})(jQuery);
        (function(c){var a = {}; if (c.ajaxPrefilter)c.ajaxPrefilter(function(d, e, f){e = d.port; if (d.mode == "abort"){a[e] && a[e].abort(); a[e] = f}}); else{var b = c.ajax; c.ajax = function(d){var e = ("port"in d?d:c.ajaxSettings).port; if (("mode"in d?d:c.ajaxSettings).mode == "abort"){a[e] && a[e].abort(); return a[e] = b.apply(this, arguments)}return b.apply(this, arguments)}}})(jQuery);
        (function(c){!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && c.each({focus:"focusin", blur:"focusout"}, function(a, b){function d(e){e = c.event.fix(e); e.type = b; return c.event.handle.call(this, e)}c.event.special[b] = {setup:function(){this.addEventListener(a, d, true)}, teardown:function(){this.removeEventListener(a, d, true)}, handler:function(e){arguments[0] = c.event.fix(e); arguments[0].type = b; return c.event.handle.apply(this, arguments)}}}); c.extend(c.fn, {validateDelegate:function(a,
                b, d){return this.bind(b, function(e){var f = c(e.target); if (f.is(a))return d.apply(f, arguments)})}})})(jQuery);;
/*! jssocials - v1.4.0 - 2016-10-10
* http://js-socials.com
* Copyright (c) 2016 Artem Tabalin; Licensed MIT */
!function(e,t,s){function r(e,s){var r=t(e);r.data(n,this),this._$element=r,this.shares=[],this._init(s),this._render()}var a="JSSocials",n=a,i=function(e,s){return t.isFunction(e)?e.apply(s,t.makeArray(arguments).slice(2)):e},o=/(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,l=/(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,h={G:1e9,M:1e6,K:1e3},u={};r.prototype={url:"",text:"",shareIn:"blank",showLabel:function(e){return this.showCount===!1?e>this.smallScreenWidth:e>=this.largeScreenWidth},showCount:function(e){return e<=this.smallScreenWidth?"inside":!0},smallScreenWidth:640,largeScreenWidth:1024,resizeTimeout:200,elementClass:"jssocials",sharesClass:"jssocials-shares",shareClass:"jssocials-share",shareButtonClass:"jssocials-share-button",shareLinkClass:"jssocials-share-link",shareLogoClass:"jssocials-share-logo",shareLabelClass:"jssocials-share-label",shareLinkCountClass:"jssocials-share-link-count",shareCountBoxClass:"jssocials-share-count-box",shareCountClass:"jssocials-share-count",shareZeroCountClass:"jssocials-share-no-count",_init:function(e){this._initDefaults(),t.extend(this,e),this._initShares(),this._attachWindowResizeCallback()},_initDefaults:function(){this.url=e.location.href,this.text=t.trim(t("meta[name=description]").attr("content")||t("title").text())},_initShares:function(){this.shares=t.map(this.shares,t.proxy(function(e){"string"==typeof e&&(e={share:e});var s=e.share&&u[e.share];if(!s&&!e.renderer)throw Error("Share '"+e.share+"' is not found");return t.extend({url:this.url,text:this.text},s,e)},this))},_attachWindowResizeCallback:function(){t(e).on("resize",t.proxy(this._windowResizeHandler,this))},_detachWindowResizeCallback:function(){t(e).off("resize",this._windowResizeHandler)},_windowResizeHandler:function(){(t.isFunction(this.showLabel)||t.isFunction(this.showCount))&&(e.clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(t.proxy(this.refresh,this),this.resizeTimeout))},_render:function(){this._clear(),this._defineOptionsByScreen(),this._$element.addClass(this.elementClass),this._$shares=t("<div>").addClass(this.sharesClass).appendTo(this._$element),this._renderShares()},_defineOptionsByScreen:function(){this._screenWidth=t(e).width(),this._showLabel=i(this.showLabel,this,this._screenWidth),this._showCount=i(this.showCount,this,this._screenWidth)},_renderShares:function(){t.each(this.shares,t.proxy(function(e,t){this._renderShare(t)},this))},_renderShare:function(e){var s;s=t.isFunction(e.renderer)?t(e.renderer()):this._createShare(e),s.addClass(this.shareClass).addClass(e.share?"jssocials-share-"+e.share:"").addClass(e.css).appendTo(this._$shares)},_createShare:function(e){var s=t("<div>"),r=this._createShareLink(e).appendTo(s);if(this._showCount){var a="inside"===this._showCount,n=a?r:t("<div>").addClass(this.shareCountBoxClass).appendTo(s);n.addClass(a?this.shareLinkCountClass:this.shareCountBoxClass),this._renderShareCount(e,n)}return s},_createShareLink:function(e){var s=this._getShareStrategy(e),r=s.call(e,{shareUrl:this._getShareUrl(e)});return r.addClass(this.shareLinkClass).append(this._createShareLogo(e)),this._showLabel&&r.append(this._createShareLabel(e)),t.each(this.on||{},function(s,a){t.isFunction(a)&&r.on(s,t.proxy(a,e))}),r},_getShareStrategy:function(e){var t=f[e.shareIn||this.shareIn];if(!t)throw Error("Share strategy '"+this.shareIn+"' not found");return t},_getShareUrl:function(e){var t=i(e.shareUrl,e);return this._formatShareUrl(t,e)},_createShareLogo:function(e){var s=e.logo,r=o.test(s)?t("<img>").attr("src",e.logo):t("<i>").addClass(s);return r.addClass(this.shareLogoClass),r},_createShareLabel:function(e){return t("<span>").addClass(this.shareLabelClass).text(e.label)},_renderShareCount:function(e,s){var r=t("<span>").addClass(this.shareCountClass);s.addClass(this.shareZeroCountClass).append(r),this._loadCount(e).done(t.proxy(function(e){e&&(s.removeClass(this.shareZeroCountClass),r.text(e))},this))},_loadCount:function(e){var s=t.Deferred(),r=this._getCountUrl(e);if(!r)return s.resolve(0).promise();var a=t.proxy(function(t){s.resolve(this._getCountValue(t,e))},this);return t.getJSON(r).done(a).fail(function(){t.get(r).done(a).fail(function(){s.resolve(0)})}),s.promise()},_getCountUrl:function(e){var t=i(e.countUrl,e);return this._formatShareUrl(t,e)},_getCountValue:function(e,s){var r=(t.isFunction(s.getCount)?s.getCount(e):e)||0;return"string"==typeof r?r:this._formatNumber(r)},_formatNumber:function(e){return t.each(h,function(t,s){return e>=s?(e=parseFloat((e/s).toFixed(2))+t,!1):void 0}),e},_formatShareUrl:function(t,s){return t.replace(l,function(t,r,a){var n=s[a]||"";return n?(r||"")+e.encodeURIComponent(n):""})},_clear:function(){e.clearTimeout(this._resizeTimer),this._$element.empty()},_passOptionToShares:function(e,s){var r=this.shares;t.each(["url","text"],function(a,n){n===e&&t.each(r,function(t,r){r[e]=s})})},_normalizeShare:function(e){return t.isNumeric(e)?this.shares[e]:"string"==typeof e?t.grep(this.shares,function(t){return t.share===e})[0]:e},refresh:function(){this._render()},destroy:function(){this._clear(),this._detachWindowResizeCallback(),this._$element.removeClass(this.elementClass).removeData(n)},option:function(e,t){return 1===arguments.length?this[e]:(this[e]=t,this._passOptionToShares(e,t),void this.refresh())},shareOption:function(e,t,s){return e=this._normalizeShare(e),2===arguments.length?e[t]:(e[t]=s,void this.refresh())}},t.fn.jsSocials=function(e){var a=t.makeArray(arguments),i=a.slice(1),o=this;return this.each(function(){var a,l=t(this),h=l.data(n);if(h)if("string"==typeof e){if(a=h[e].apply(h,i),a!==s&&a!==h)return o=a,!1}else h._detachWindowResizeCallback(),h._init(e),h._render();else new r(l,e)}),o};var c=function(e){var s;t.isPlainObject(e)?s=r.prototype:(s=u[e],e=arguments[1]||{}),t.extend(s,e)},f={popup:function(s){return t("<a>").attr("href","#").on("click",function(){return e.open(s.shareUrl,null,"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"),!1})},blank:function(e){return t("<a>").attr({target:"_blank",href:e.shareUrl})},self:function(e){return t("<a>").attr({target:"_self",href:e.shareUrl})}};e.jsSocials={Socials:r,shares:u,shareStrategies:f,setDefaults:c}}(window,jQuery),function(e,t,s){t.extend(s.shares,{email:{label:"E-mail",logo:"fa fa-at",shareUrl:"mailto:{to}?subject={text}&body={url}",countUrl:"",shareIn:"self"},twitter:{label:"Tweet",logo:"fa fa-twitter",shareUrl:"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",countUrl:""},facebook:{label:"Like",logo:"fa fa-facebook",shareUrl:"https://facebook.com/sharer/sharer.php?u={url}",countUrl:"https://graph.facebook.com/?id={url}",getCount:function(e){return e.share&&e.share.share_count||0}},vkontakte:{label:"Like",logo:"fa fa-vk",shareUrl:"https://vk.com/share.php?url={url}&title={title}&description={text}",countUrl:"https://vk.com/share.php?act=count&index=1&url={url}",getCount:function(e){return parseInt(e.slice(15,-2).split(", ")[1])}},googleplus:{label:"+1",logo:"fa fa-google",shareUrl:"https://plus.google.com/share?url={url}",countUrl:""},linkedin:{label:"Share",logo:"fa fa-linkedin",shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}",countUrl:"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",getCount:function(e){return e.count}},pinterest:{label:"Pin it",logo:"fa fa-pinterest",shareUrl:"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",countUrl:"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",getCount:function(e){return e.count}},stumbleupon:{label:"Share",logo:"fa fa-stumbleupon",shareUrl:"http://www.stumbleupon.com/submit?url={url}&title={title}",countUrl:"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",getCount:function(e){return e.result.views}},telegram:{label:"Telegram",logo:"fa fa-paper-plane",shareUrl:"tg://msg?text={url} {text}",countUrl:"",shareIn:"self"},whatsapp:{label:"WhatsApp",logo:"fa fa-whatsapp",shareUrl:"whatsapp://send?text={url} {text}",countUrl:"",shareIn:"self"},line:{label:"LINE",logo:"fa fa-comment",shareUrl:"http://line.me/R/msg/text/?{text} {url}",countUrl:""},viber:{label:"Viber",logo:"fa fa-volume-control-phone",shareUrl:"viber://forward?text={url} {text}",countUrl:"",shareIn:"self"},pocket:{label:"Pocket",logo:"fa fa-get-pocket",shareUrl:"https://getpocket.com/save?url={url}&title={title}",countUrl:""},messenger:{label:"Share",logo:"fa fa-commenting",shareUrl:"fb-messenger://share?link={url}",countUrl:"",shareIn:"self"}})}(window,jQuery,window.jsSocials);;
// Magnific Popup v1.1.0 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe
(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):typeof exports=="object"?a(require("jquery")):a(window.jQuery||window.Zepto)})(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w=function(a,b){n.ev.on(i+a+j,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},z=function(b){if(b!==v||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),v=b;return n.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isLowIE=n.isIE8=document.all&&!document.addEventListener,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=B(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),s=a(document),n.popupsCache={}},open:function(b){var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],u="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=s,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=x("bg").on("click"+j,function(){n.close()}),n.wrap=x("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=x("container",n.wrap)),n.contentContainer=x("content"),n.st.preloader&&(n.preloader=x("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}y("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(w(f,function(a,b,c,d){c.close_replaceWith=z(d.type)}),u+=" mfp-close-btn-in"):n.wrap.append(z())),n.st.alignTop&&(u+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:s.height(),position:"absolute"}),n.st.enableEscapeKey&&s.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&n.wrap.addClass(u);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),y("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||a(document.body)),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),s.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),y(g),b},close:function(){if(!n.isOpen)return;y(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){y(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}s.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n.st.autoFocusLast&&n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,y(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),y("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;y("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;y("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}t&&t!==b.type&&n.container.removeClass("mfp-"+t+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,y(h,b),t=b.type,n.container.prepend(n.contentContainer),y("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(z()):n.content=a:n.content="",y(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,y("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey||b.altKey||b.shiftKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?s.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(f,[b,c,d]),a.each(c,function(c,d){if(d===undefined||d===!1)return!0;e=c.split("_");if(e.length>1){var f=b.find(j+"-"+e[0]);if(f.length>0){var g=e[1];g==="replaceWith"?f[0]!==d[0]&&f.replaceWith(d):g==="img"?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(j+"-"+c).html(d)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return A(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(b){A();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var C="inline",D,E,F,G=function(){F&&(E.after(F.addClass(D)).detach(),F=null)};a.magnificPopup.registerModule(C,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(C),w(b+"."+C,function(){G()})},getInline:function(b,c){G();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(E||(D=d.hiddenClass,E=x(D),D="mfp-"+D),F=e.after(E).detach().removeClass(D)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var H="ajax",I,J=function(){I&&a(document.body).removeClass(I)},K=function(){J(),n.req&&n.req.abort()};a.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(H),I=n.st.ajax.cursor,w(b+"."+H,K),w("BeforeChange."+H,K)},getAjax:function(b){I&&a(document.body).addClass(I),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};y("ParseAjax",f),n.appendContent(a(f.data),H),b.finished=!0,J(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var L,M=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=n.st.image,d=".image";n.types.push("image"),w(g+d,function(){n.currItem.type==="image"&&c.cursor&&a(document.body).addClass(c.cursor)}),w(b+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),r.off("resize"+j)}),w("Resize"+d,n.resizeImage),n.isLowIE&&w("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){L&&clearInterval(L),L=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(L),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,y("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.el&&b.el.find("img").length&&(i.alt=b.el.find("img").attr("alt")),b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:M(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(L&&clearInterval(L),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var N,O=function(){return N===undefined&&(N=document.createElement("p").style.MozTransform!==undefined),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;w("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,y("ZoomAnimationEnded")},16)},f)},16)}}),w(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),w(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return O()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var P="iframe",Q="//about:blank",R=function(a){if(n.currTemplate[P]){var b=n.currTemplate[P].find("iframe");b.length&&(a||(b[0].src=Q),n.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){n.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(b+"."+P,function(){R()})},getIframe:function(b,c){var d=b.src,e=n.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),n._parseMarkup(c,f,b),n.updateStatus("ready"),c}}}),A()});
/*=============================================================================
=            Page visibility - https://github.com/ai/visibility.js            =
=============================================================================*/
(function(c){var b=function(d){return(d!=c)};var a=window.Visibility={onVisible:function(e){if(!a.isSupported()||!a.hidden()){e();return a.isSupported()}var d=a.change(function(g,f){if(!a.hidden()){a.unbind(d);e()}});return d},change:function(e){if(!a.isSupported()){return false}a._lastId+=1;var d=a._lastId;a._callbacks[d]=e;a._listen();return d},unbind:function(d){delete a._callbacks[d]},afterPrerendering:function(e){if(!a.isSupported()||"prerender"!=a.state()){e();return a.isSupported()}var d=a.change(function(g,f){if("prerender"!=f){a.unbind(d);e()}});return d},hidden:function(){return a._prop("hidden",false)},state:function(){return a._prop("visibilityState","visible")},isSupported:function(){return b(a._prefix())},_doc:window.document,_cached:null,_enable:false,_lastId:-1,_callbacks:{},_wasHidden:false,_init:function(){a._wasHidden=a.hidden()},_prefix:function(){if(null!==a._cached){return a._cached}if(b(a._doc.visibilityState)){return a._cached=""}if(b(a._doc.webkitVisibilityState)){return a._cached="webkit"}},_name:function(d){var e=a._prefix();if(""==e){return d}else{return e+d.substr(0,1).toUpperCase()+d.substr(1)}},_prop:function(d,e){if(!a.isSupported()){return e}return a._doc[a._name(d)]},_change:function(e){var f=a.state();for(var d in a._callbacks){a._callbacks[d].call(a._doc,e,f)}a._wasHidden=a.hidden()},_listen:function(){if(a._enable){return}var d=a._prefix()+"visibilitychange";var e=function(){a._change.apply(Visibility,arguments)};if(a._doc.addEventListener){a._doc.addEventListener(d,e,false)}else{a._doc.attachEvent(d,e)}a._enable=true;a._wasHidden=a.hidden()}};a._init()})();;
/*=======================================
 =         Custom social share popup     =
 =======================================*/
 function PopupCenter(o,n,e,t,url){

	if(n=='twitter') {
		//console.log(url);
		//Ajax
	  jQuery.ajax({
	    type: "POST",
	    dataType: "html",
	    url: localize_var.adminUrl,
	    data: {
	    	action: "tiny_url",
	    	url: url
	    },
	    success: function (data) {
	     o = o + data;
	     	var r=screen.width/2-e/2,i=screen.height/2-t/2;
				window.open(o,n,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+e+", height="+t+", top="+i+", left="+r);
	    }

	  });
	  return false;

	} else {

		var r=screen.width/2-e/2,i=screen.height/2-t/2;
		window.open(o,n,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+e+", height="+t+", top="+i+", left="+r);
	}


};
(function(h,g){"function"===typeof define&&define.amd?define([],g):"object"===typeof module&&module.exports?module.exports=g():h.Rellax=g()})(typeof window !== "undefined" ? window : global,function(){var h=function(g,n){var a=Object.create(h.prototype),k=0,p=0,l=0,q=0,e=[],r=!0,z=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){setTimeout(a,1E3/60)},A=window.transformProp||function(){var a=document.createElement("div");
if(null===a.style.transform){var b=["Webkit","Moz","ms"],d;for(d in b)if(void 0!==a.style[b[d]+"Transform"])return b[d]+"Transform"}return"transform"}();a.options={speed:-2,center:!1,wrapper:null,round:!0,vertical:!0,horizontal:!1,callback:function(){}};n&&Object.keys(n).forEach(function(c){a.options[c]=n[c]});g||(g=".rellax");var m="string"===typeof g?document.querySelectorAll(g):[g];if(0<m.length)a.elems=m;else throw Error("The elements you're trying to select don't exist.");if(a.options.wrapper&&
!a.options.wrapper.nodeType)if(m=document.querySelector(a.options.wrapper))a.options.wrapper=m;else throw Error("The wrapper you're trying to use don't exist.");var u=function(){for(var c=0;c<e.length;c++)a.elems[c].style.cssText=e[c].style;e=[];p=window.innerHeight;q=window.innerWidth;v();for(c=0;c<a.elems.length;c++){var b=a.elems[c],d=b.getAttribute("data-rellax-percentage"),t=b.getAttribute("data-rellax-speed"),g=b.getAttribute("data-rellax-zindex")||0,h=a.options.wrapper?a.options.wrapper.scrollTop:
window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,f=a.options.vertical?d||a.options.center?h:0:0,k=a.options.horizontal?d||a.options.center?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0:0;h=f+b.getBoundingClientRect().top;var l=b.clientHeight||b.offsetHeight||b.scrollHeight,m=k+b.getBoundingClientRect().left,n=b.clientWidth||b.offsetWidth||b.scrollWidth;f=d?d:(f-h+p)/(l+p);d=d?d:(k-m+q)/(n+q);a.options.center&&(f=d=.5);t=t?t:a.options.speed;
d=w(d,f,t);b=b.style.cssText;f="";0<=b.indexOf("transform")&&(f=b.indexOf("transform"),f=b.slice(f),f=(k=f.indexOf(";"))?" "+f.slice(11,k).replace(/\s/g,""):" "+f.slice(11).replace(/\s/g,""));e.push({baseX:d.x,baseY:d.y,top:h,left:m,height:l,width:n,speed:t,style:b,transform:f,zindex:g})}r&&(window.addEventListener("resize",u),r=!1);x()},v=function(){var c=k,b=l;k=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;
l=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset;return c!=k&&a.options.vertical||b!=l&&a.options.horizontal?!0:!1},w=function(c,b,d){var e={};c=100*d*(1-c);b=100*d*(1-b);e.x=a.options.round?Math.round(c):Math.round(100*c)/100;e.y=a.options.round?Math.round(b):Math.round(100*b)/100;return e},y=function(){v()&&!1===r&&x();z(y)},x=function(){for(var c,b=0;b<a.elems.length;b++){c=w((l-e[b].left+q)/(e[b].width+
q),(k-e[b].top+p)/(e[b].height+p),e[b].speed);var d=c.y-e[b].baseY,g=c.x-e[b].baseX;a.elems[b].style[A]="translate3d("+(a.options.horizontal?g:"0")+"px,"+(a.options.vertical?d:"0")+"px,"+e[b].zindex+"px) "+e[b].transform}a.options.callback(c)};a.destroy=function(){for(var c=0;c<a.elems.length;c++)a.elems[c].style.cssText=e[c].style;r||(window.removeEventListener("resize",u),r=!0)};u();y();a.refresh=u;return a};return h});
;
/*! @license ScrollReveal v4.0.5

	Copyright 2018 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
var ScrollReveal=function(){"use strict";var r={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var n={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function o(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function u(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(o);if(o(e))return[e];if(n=e,i=Object.prototype.toString.call(n),"object"==typeof window.NodeList?n instanceof window.NodeList:null!==n&&"object"==typeof n&&"number"==typeof n.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&(0===n.length||o(n[0])))return Array.prototype.slice.call(e);var n,i;if("string"==typeof e)try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch(e){return[]}return[]}function s(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function f(n,i){if(s(n))return Object.keys(n).forEach(function(e){return i(n[e],e,n)});if(n instanceof Array)return n.forEach(function(e,t){return i(e,t,n)});throw new TypeError("Expected either an array or object literal.")}function h(e){for(var t=[],n=arguments.length-1;0<n--;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(e){return i+="\n — "+e}),console.log(i,"color: #ea654b;")}}function t(){var n=this,i={active:[],stale:[]},t={active:[],stale:[]},r={active:[],stale:[]};try{f(u("[data-sr-id]"),function(e){var t=parseInt(e.getAttribute("data-sr-id"));i.active.push(t)})}catch(e){throw e}f(this.store.elements,function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)}),f(i.stale,function(e){return delete n.store.elements[e]}),f(this.store.elements,function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===t.active.indexOf(e.sequence.id)&&t.active.push(e.sequence.id)}),f(this.store.containers,function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)}),f(r.stale,function(e){var t=n.store.containers[e].node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate),delete n.store.containers[e]}),f(this.store.sequences,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),f(t.stale,function(e){return delete n.store.sequences[e]})}function p(e){var i,r=this;try{f(u(e),function(e){var t=e.getAttribute("data-sr-id");if(null!==t){i=!0;var n=r.store.elements[t];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),e.setAttribute("style",n.styles.inline.generated),e.removeAttribute("data-sr-id"),delete r.store.elements[t]}})}catch(e){return h.call(this,"Clean failed.",e.message)}if(i)try{t.call(this)}catch(e){return h.call(this,"Clean failed.",e.message)}}function N(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6!==e.length)throw new RangeError("Expected array with either 6 or 16 values.");var t=z();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}function z(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function F(e,t){for(var n=N(e),i=N(t),r=[],o=0;o<4;o++)for(var s=[n[o],n[o+4],n[o+8],n[o+12]],a=0;a<4;a++){var c=4*a,l=[i[c],i[c+1],i[c+2],i[c+3]],d=s[0]*l[0]+s[1]*l[1]+s[2]*l[2]+s[3]*l[3];r[o+c]=d}return r}function D(e,t){var n=z();return n[0]=e,n[5]="number"==typeof t?t:e,n}var S=function(){var n={},i=document.documentElement.style;function e(e,t){if(void 0===t&&(t=i),e&&"string"==typeof e){if(n[e])return n[e];if("string"==typeof t[e])return n[e]=e;if("string"==typeof t["-webkit-"+e])return n[e]="-webkit-"+e;throw new RangeError('Unable to find "'+e+'" style property.')}throw new TypeError("Expected a string.")}return e.clearCache=function(){return n={}},e}();function m(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map(function(e){return e.trim()}).join("; ")+";":"",r.generated=o.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?r.computed:o.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var s,a,c,l,d,u,f,h,p,m,y,v,g,b=parseFloat(t.opacity),w=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),E={computed:b!==w?"opacity: "+b+";":"",generated:b!==w?"opacity: "+w+";":""},j=[];if(parseFloat(i.distance)){var T="top"===i.origin||"bottom"===i.origin?"Y":"X",k=i.distance;"top"!==i.origin&&"left"!==i.origin||(k=/^-/.test(k)?k.substr(1):"-"+k);var O=k.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),x=O[0];switch(O[1]){case"em":k=parseInt(t.fontSize)*x;break;case"px":k=x;break;case"%":k="Y"===T?e.node.getBoundingClientRect().height*x/100:e.node.getBoundingClientRect().width*x/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===T?j.push((c=k,(l=z())[13]=c,l)):j.push((s=k,(a=z())[12]=s,a))}i.rotate.x&&j.push((d=i.rotate.x,u=Math.PI/180*d,(f=z())[5]=f[10]=Math.cos(u),f[6]=f[9]=Math.sin(u),f[9]*=-1,f)),i.rotate.y&&j.push((h=i.rotate.y,p=Math.PI/180*h,(m=z())[0]=m[10]=Math.cos(p),m[2]=m[8]=Math.sin(p),m[2]*=-1,m)),i.rotate.z&&j.push((y=i.rotate.z,v=Math.PI/180*y,(g=z())[0]=g[5]=Math.cos(v),g[1]=g[4]=Math.sin(v),g[4]*=-1,g)),1!==i.scale&&(0===i.scale?j.push(D(2e-4)):j.push(D(i.scale)));var A={};if(j.length){A.property=S("transform"),A.computed={raw:t[A.property],matrix:function(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return N(t[2].split(", ").map(parseFloat))}return z()}(t[A.property])},j.unshift(A.computed.matrix);var R=j.reduce(F);A.generated={initial:A.property+": matrix3d("+R.join(", ")+");",final:A.property+": matrix3d("+A.computed.matrix.join(", ")+");"}}else A.generated={initial:"",final:""};var q={};if(E.generated||A.generated.initial){q.property=S("transition"),q.computed=t[q.property],q.fragments=[];var P=i.delay,L=i.duration,M=i.easing;E.generated&&q.fragments.push({delayed:"opacity "+L/1e3+"s "+M+" "+P/1e3+"s",instant:"opacity "+L/1e3+"s "+M+" 0s"}),A.generated.initial&&q.fragments.push({delayed:A.property+" "+L/1e3+"s "+M+" "+P/1e3+"s",instant:A.property+" "+L/1e3+"s "+M+" 0s"}),q.computed&&!q.computed.match(/all 0s/)&&q.fragments.unshift({delayed:q.computed,instant:q.computed});var I=q.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""});q.generated={delayed:q.property+": "+I.delayed+";",instant:q.property+": "+I.instant+";"}}else q.generated={delayed:"",instant:""};return{inline:r,opacity:E,position:n,transform:A,transition:q}}function c(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?function(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant);e.revealed=e.seen=!0,e.node.setAttribute("style",n.filter(function(e){return""!==e}).join(" ")),a.call(this,e,t)}.call(this,e,i):t.reset||o?function(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" ")),a.call(this,e)}.call(this,e):void 0}function a(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&p.call(n,e.node)},i-s)}}var e,y=(e=0,function(){return e++});function l(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return c.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new d(n,"visible",this.store),o=new d(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return g.call(this,n,r.body[0],-1,t),g.call(this,n,r.body[0],1,t),c.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return g.call(this,n,i,-1,t),c.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return g.call(this,n,i,1,t),c.call(this,e,{reveal:!0,pristine:t})}}function v(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=y(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function d(e,i,r){var o=this;this.head=[],this.body=[],this.foot=[],f(e.members,function(e,t){var n=r.elements[e];n&&n[i]&&o.body.push(t)}),this.body.length&&f(e.members,function(e,t){var n=r.elements[e];n&&!n[i]&&(t<o.body[0]?o.head.push(t):o.foot.push(t))})}function g(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&l.call(r,a,i)},e.interval)}function b(){var n=this;t.call(this),f(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" "))}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.addEventListener("scroll",n.delegate),t.addEventListener("resize",n.delegate)}),this.delegate(),this.initTimeout=null}function w(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}function E(n){for(var e=[],t=arguments.length-1;0<t--;)e[t]=arguments[t+1];if(s(n))return f(e,function(e){f(e,function(e,t){s(e)?(n[t]&&s(n[t])||(n[t]={}),E(n[t],e)):n[t]=e})}),n;throw new TypeError("Target must be an object literal.")}function i(e,a,t){var c=this;void 0===a&&(a={}),void 0===t&&(t=!1);var l,d=[],n=a.interval||r.interval;try{n&&(l=new v(n));var i=u(e);if(!i.length)throw new Error("Invalid reveal target.");f(i.reduce(function(e,t){var n={},i=t.getAttribute("data-sr-id");i?(E(n,c.store.elements[i]),n.node.setAttribute("style",n.styles.inline.computed)):(n.id=y(),n.node=t,n.seen=!1,n.revealed=!1,n.visible=!1);var r=E({},n.config||c.defaults,a);if(!r.mobile&&w()||!r.desktop&&!w())return i&&p.call(c,n),e;var o,s=u(r.container)[0];if(!s)throw new Error("Invalid container.");return s.contains(t)&&(null===(o=function(t){var e=[],n=arguments.length-1;for(;0<n--;)e[n]=arguments[n+1];var i=null;return f(e,function(e){f(e,function(e){null===i&&e.node===t&&(i=e.id)})}),i}(s,d,c.store.containers))&&(o=y(),d.push({id:o,node:s})),n.config=r,n.containerId=o,n.styles=m(n),l&&(n.sequence={id:l.id,index:l.members.length},l.members.push(n.id)),e.push(n)),e},[]),function(e){(c.store.elements[e.id]=e).node.setAttribute("data-sr-id",e.id)})}catch(e){return h.call(this,"Reveal failed.",e.message)}f(d,function(e){c.store.containers[e.id]={id:e.id,node:e.node}}),l&&(this.store.sequences[l.id]=l),!0!==t&&(this.store.history.push({target:e,options:a}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(b.bind(this),0))}var j,T=Math.sign||function(e){return(0<e)-(e<0)||+e},k=(j=Date.now(),function(e){var t=Date.now();16<t-j?e(j=t):setTimeout(function(){return k(e)},0)}),O=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||k;function x(e,t){for(var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function A(e,t){var i=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),O(function(){var n="init"===e.type||"resize"===e.type;f(i.store.containers,function(e){n&&(e.geometry=x.call(i,e,!0));var t=function(e){var t,n;return n=e.node===document.documentElement?(t=window.pageYOffset,window.pageXOffset):(t=e.node.scrollTop,e.node.scrollLeft),{top:t,left:n}}.call(i,e);e.scroll&&(e.direction={x:T(t.left-e.scroll.left),y:T(t.top-e.scroll.top)}),e.scroll=t}),f(t,function(e){n&&(e.geometry=x.call(i,e)),e.visible=function(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,d=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return r<d&&u<o&&c<s&&a<l||"fixed"===e.styles.position}}.call(i,e)}),f(t,function(e){e.sequence?l.call(i,e):c.call(i,e)}),i.pristine=!1})}var R,q,P,L,M,I,C,W,Y="4.0.5";function $(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==$.prototype)return new $(e);if(!$.isSupported())return h.call(this,"Instantiation failed.","This browser is not supported."),n.failure();try{t=E({},I||r,e)}catch(e){return h.call(this,"Invalid configuration.",e.message),n.failure()}try{if(!u(t.container)[0])throw new Error("Invalid container.")}catch(e){return h.call(this,e.message),n.failure()}return!(I=t).mobile&&w()||!I.desktop&&!w()?(h.call(this,"This device is disabled.","desktop: "+I.desktop,"mobile: "+I.mobile),n.failure()):(n.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,R=R||A.bind(this),q=q||function(){var n=this;f(this.store.elements,function(e){e.node.setAttribute("style",e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}.bind(this),P=P||i.bind(this),L=L||p.bind(this),M=M||function(){var t=this;f(this.store.history,function(e){i.call(t,e.target,e.options,!0)}),b.call(this)}.bind(this),Object.defineProperty(this,"delegate",{get:function(){return R}}),Object.defineProperty(this,"destroy",{get:function(){return q}}),Object.defineProperty(this,"reveal",{get:function(){return P}}),Object.defineProperty(this,"clean",{get:function(){return L}}),Object.defineProperty(this,"sync",{get:function(){return M}}),Object.defineProperty(this,"defaults",{get:function(){return I}}),Object.defineProperty(this,"version",{get:function(){return Y}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),W||(W=this))}return $.isSupported=function(){return("transform"in(t=document.documentElement.style)||"WebkitTransform"in t)&&("transition"in(e=document.documentElement.style)||"WebkitTransition"in e);var e,t},Object.defineProperty($,"debug",{get:function(){return C||!1},set:function(e){return C="boolean"==typeof e?e:C}}),$(),$}();;
/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var e=function(){};e.version="2.0.6",window.addEventListener("mousewheel",function(){});var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var o,s,a="ScrollMagic.Controller",l="FORWARD",c="REVERSE",f="PAUSED",u=n.defaults,d=this,h=i.extend({},u,r),g=[],p=!1,v=0,m=f,w=!0,y=0,S=!0,b=function(){for(var e in h)u.hasOwnProperty(e)||delete h[e];if(h.container=i.get.elements(h.container)[0],!h.container)throw a+" init failed.";w=h.container===window||h.container===document.body||!document.body.contains(h.container),w&&(h.container=window),y=z(),h.container.addEventListener("resize",T),h.container.addEventListener("scroll",T);var t=parseInt(h.refreshInterval,10);h.refreshInterval=i.type.Number(t)?t:u.refreshInterval,E()},E=function(){h.refreshInterval>0&&(s=window.setTimeout(A,h.refreshInterval))},x=function(){return h.vertical?i.get.scrollTop(h.container):i.get.scrollLeft(h.container)},z=function(){return h.vertical?i.get.height(h.container):i.get.width(h.container)},C=this._setScrollPos=function(e){h.vertical?w?window.scrollTo(i.get.scrollLeft(),e):h.container.scrollTop=e:w?window.scrollTo(e,i.get.scrollTop()):h.container.scrollLeft=e},F=function(){if(S&&p){var e=i.type.Array(p)?p:g.slice(0);p=!1;var t=v;v=d.scrollPos();var n=v-t;0!==n&&(m=n>0?l:c),m===c&&e.reverse(),e.forEach(function(e){e.update(!0)})}},L=function(){o=i.rAF(F)},T=function(e){"resize"==e.type&&(y=z(),m=f),p!==!0&&(p=!0,L())},A=function(){if(!w&&y!=z()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){e=document.createEvent("Event"),e.initEvent("resize",!1,!1)}h.container.dispatchEvent(e)}g.forEach(function(e){e.refresh()}),E()};this._options=h;var N=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(i.type.Array(t))t.forEach(function(e){d.addScene(e)});else if(t instanceof e.Scene)if(t.controller()!==d)t.addTo(d);else if(g.indexOf(t)<0){g.push(t),g=N(g),t.on("shift.controller_sort",function(){g=N(g)});for(var n in h.globalSceneOptions)t[n]&&t[n].call(t,h.globalSceneOptions[n])}return d},this.removeScene=function(e){if(i.type.Array(e))e.forEach(function(e){d.removeScene(e)});else{var t=g.indexOf(e);t>-1&&(e.off("shift.controller_sort"),g.splice(t,1),e.remove())}return d},this.updateScene=function(t,n){return i.type.Array(t)?t.forEach(function(e){d.updateScene(e,n)}):n?t.update(!0):p!==!0&&t instanceof e.Scene&&(p=p||[],-1==p.indexOf(t)&&p.push(t),p=N(p),L()),d},this.update=function(e){return T({type:"resize"}),e&&F(),d},this.scrollTo=function(n,r){if(i.type.Number(n))C.call(h.container,n,r);else if(n instanceof e.Scene)n.controller()===d&&d.scrollTo(n.scrollOffset(),r);else if(i.type.Function(n))C=n;else{var o=i.get.elements(n)[0];if(o){for(;o.parentNode.hasAttribute(t);)o=o.parentNode;var s=h.vertical?"top":"left",a=i.get.offset(h.container),l=i.get.offset(o);w||(a[s]-=d.scrollPos()),d.scrollTo(l[s]-a[s],r)}}return d},this.scrollPos=function(e){return arguments.length?(i.type.Function(e)&&(x=e),d):x.call(d)},this.info=function(e){var t={size:y,vertical:h.vertical,scrollPos:v,scrollDirection:m,container:h.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(){return d},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,d.updateScene(g,!0)),d):S},this.destroy=function(e){window.clearTimeout(s);for(var t=g.length;t--;)g[t].destroy(e);return h.container.removeEventListener("resize",T),h.container.removeEventListener("scroll",T),i.cAF(o),null},b(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var o,s,a="BEFORE",l="DURING",c="AFTER",f=r.defaults,u=this,d=i.extend({},f,n),h=a,g=0,p={start:0,end:0},v=0,m=!0,w=function(){for(var e in d)f.hasOwnProperty(e)||delete d[e];for(var t in f)L(t);C()},y={};this.on=function(e,t){return i.type.Function(t)&&(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1];"*"!=r&&(y[r]||(y[r]=[]),y[r].push({namespace:i||"",callback:t}))})),u},this.off=function(e,t){return e?(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1]||"",o="*"===r?Object.keys(y):[r];o.forEach(function(e){for(var n=y[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete y[e]})}),u):u},this.trigger=function(t,n){if(t){var r=t.trim().split("."),i=r[0],o=r[1],s=y[i];s&&s.forEach(function(t){o&&o!==t.namespace||t.callback.call(u,new e.Event(i,t.namespace,u,n))})}return u},u.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&u.update())}).on("shift.internal",function(){S(),u.update()}),this.addTo=function(t){return t instanceof e.Controller&&s!=t&&(s&&s.removeScene(u),s=t,C(),b(!0),E(!0),S(),s.info("container").addEventListener("resize",x),t.addScene(u),u.trigger("add",{controller:s}),u.update()),u},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,u.update(!0)),u):m},this.remove=function(){if(s){s.info("container").removeEventListener("resize",x);var e=s;s=void 0,e.removeScene(u),u.trigger("remove")}return u},this.destroy=function(e){return u.trigger("destroy",{reset:e}),u.remove(),u.off("*.*"),null},this.update=function(e){if(s)if(e)if(s.enabled()&&m){var t,n=s.info("scrollPos");t=d.duration>0?(n-p.start)/(p.end-p.start):n>=p.start?1:0,u.trigger("update",{startPos:p.start,endPos:p.end,scrollPos:n}),u.progress(t)}else T&&h===l&&N(!0);else s.updateScene(u,!1);return u},this.refresh=function(){return b(),E(),u},this.progress=function(e){if(arguments.length){var t=!1,n=h,r=s?s.info("scrollDirection"):"PAUSED",i=d.reverse||e>=g;if(0===d.duration?(t=g!=e,g=1>e&&i?0:1,h=0===g?a:l):0>e&&h!==a&&i?(g=0,h=a,t=!0):e>=0&&1>e&&i?(g=e,h=l,t=!0):e>=1&&h!==c?(g=1,h=c,t=!0):h!==l||i||N(),t){var o={progress:g,state:h,scrollDirection:r},f=h!=n,p=function(e){u.trigger(e,o)};f&&n!==l&&(p("enter"),p(n===a?"start":"end")),p("progress"),f&&h!==l&&(p(h===a?"start":"end"),p("leave"))}return u}return g};var S=function(){p={start:v+d.offset},s&&d.triggerElement&&(p.start-=s.info("size")*d.triggerHook),p.end=p.start+d.duration},b=function(e){if(o){var t="duration";F(t,o.call(u))&&!e&&(u.trigger("change",{what:t,newval:d[t]}),u.trigger("shift",{reason:t}))}},E=function(e){var n=0,r=d.triggerElement;if(s&&(r||v>0)){if(r)if(r.parentNode){for(var o=s.info(),a=i.get.offset(o.container),l=o.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=i.get.offset(r);o.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}else u.triggerElement(void 0);var f=n!=v;v=n,f&&!e&&u.trigger("shift",{reason:"triggerElementPosition"})}},x=function(){d.triggerHook>0&&u.trigger("shift",{reason:"containerResize"})},z=i.extend(r.validate,{duration:function(e){if(i.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(i.type.Function(e)){o=e;try{e=parseFloat(o())}catch(n){e=-1}}if(e=parseFloat(e),!i.type.Number(e)||0>e)throw o?(o=void 0,0):0;return e}}),C=function(e){e=arguments.length?[e]:Object.keys(z),e.forEach(function(e){var t;if(z[e])try{t=z[e](d[e])}catch(n){t=f[e]}finally{d[e]=t}})},F=function(e,t){var n=!1,r=d[e];return d[e]!=t&&(d[e]=t,C(e),n=r!=d[e]),n},L=function(e){u[e]||(u[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),F(e,t)&&(u.trigger("change",{what:e,newval:d[e]}),r.shifts.indexOf(e)>-1&&u.trigger("shift",{reason:e})),u):d[e]})};this.controller=function(){return s},this.state=function(){return h},this.scrollOffset=function(){return p.start},this.triggerPosition=function(){var e=d.offset;return s&&(e+=d.triggerElement?v:s.info("size")*u.triggerHook()),e};var T,A;u.on("shift.internal",function(e){var t="duration"===e.reason;(h===c&&t||h===l&&0===d.duration)&&N(),t&&O()}).on("progress.internal",function(){N()}).on("add.internal",function(){O()}).on("destroy.internal",function(e){u.removePin(e.reset)});var N=function(e){if(T&&s){var t=s.info(),n=A.spacer.firstChild;if(e||h!==l){var r={position:A.inFlow?"relative":"absolute",top:0,left:0},o=i.css(n,"position")!=r.position;A.pushFollowers?d.duration>0&&(h===c&&0===parseFloat(i.css(A.spacer,"padding-top"))?o=!0:h===a&&0===parseFloat(i.css(A.spacer,"padding-bottom"))&&(o=!0)):r[t.vertical?"top":"left"]=d.duration*g,i.css(n,r),o&&O()}else{"fixed"!=i.css(n,"position")&&(i.css(n,{position:"fixed"}),O());var f=i.get.offset(A.spacer,!0),u=d.reverse||0===d.duration?t.scrollPos-p.start:Math.round(g*d.duration*10)/10;f[t.vertical?"top":"left"]+=u,i.css(A.spacer.firstChild,{top:f.top,left:f.left})}}},O=function(){if(T&&s&&A.inFlow){var e=h===l,t=s.info("vertical"),n=A.spacer.firstChild,r=i.isMarginCollapseType(i.css(A.spacer,"display")),o={};A.relSize.width||A.relSize.autoFullWidth?e?i.css(T,{width:i.get.width(A.spacer)}):i.css(T,{width:"100%"}):(o["min-width"]=i.get.width(t?T:n,!0,!0),o.width=e?o["min-width"]:"auto"),A.relSize.height?e?i.css(T,{height:i.get.height(A.spacer)-(A.pushFollowers?d.duration:0)}):i.css(T,{height:"100%"}):(o["min-height"]=i.get.height(t?n:T,!0,!r),o.height=e?o["min-height"]:"auto"),A.pushFollowers&&(o["padding"+(t?"Top":"Left")]=d.duration*g,o["padding"+(t?"Bottom":"Right")]=d.duration*(1-g)),i.css(A.spacer,o)}},_=function(){s&&T&&h===l&&!s.info("isDocument")&&N()},P=function(){s&&T&&h===l&&((A.relSize.width||A.relSize.autoFullWidth)&&i.get.width(window)!=i.get.width(A.spacer.parentNode)||A.relSize.height&&i.get.height(window)!=i.get.height(A.spacer.parentNode))&&O()},D=function(e){s&&T&&h===l&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(n=i.extend({},r,n),e=i.get.elements(e)[0],!e)return u;if("fixed"===i.css(e,"position"))return u;if(T){if(T===e)return u;u.removePin()}T=e;var o=T.parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];T.parentNode.style.display="none";var a="absolute"!=i.css(T,"position"),l=i.css(T,s.concat(["display"])),c=i.css(T,["width","height"]);T.parentNode.style.display=o,!a&&n.pushFollowers&&(n.pushFollowers=!1);var f=T.parentNode.insertBefore(document.createElement("div"),T),d=i.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||i.extend(d,i.css(T,["width","height"])),i.css(f,d),f.setAttribute(t,""),i.addClass(f,n.spacerClass),A={spacer:f,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&a&&i.isMarginCollapseType(l.display)},pushFollowers:n.pushFollowers,inFlow:a},!T.___origStyle){T.___origStyle={};var h=T.style,g=s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);g.forEach(function(e){T.___origStyle[e]=h[e]||""})}return A.relSize.width&&i.css(f,{width:c.width}),A.relSize.height&&i.css(f,{height:c.height}),f.appendChild(T),i.css(T,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(A.relSize.width||A.relSize.autoFullWidth)&&i.css(T,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",_),window.addEventListener("resize",_),window.addEventListener("resize",P),T.addEventListener("mousewheel",D),T.addEventListener("DOMMouseScroll",D),N(),u},this.removePin=function(e){if(T){if(h===l&&N(!0),e||!s){var n=A.spacer.firstChild;if(n.hasAttribute(t)){var r=A.spacer.style,o=["margin","marginLeft","marginRight","marginTop","marginBottom"],a={};o.forEach(function(e){a[e]=r[e]||""}),i.css(n,a)}A.spacer.parentNode.insertBefore(n,A.spacer),A.spacer.parentNode.removeChild(A.spacer),T.parentNode.hasAttribute(t)||(i.css(T,T.___origStyle),delete T.___origStyle)}window.removeEventListener("scroll",_),window.removeEventListener("resize",_),window.removeEventListener("resize",P),T.removeEventListener("mousewheel",D),T.removeEventListener("DOMMouseScroll",D),T=void 0}return u};var R,k=[];return u.on("destroy.internal",function(e){u.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=i.get.elements(e);return 0!==n.length&&i.type.String(t)?(k.length>0&&u.removeClassToggle(),R=t,k=n,u.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?i.addClass:i.removeClass;k.forEach(function(e){t(e,R)})}),u):u},this.removeClassToggle=function(e){return e&&k.forEach(function(e){i.removeClass(e,R)}),u.off("start.internal_class end.internal_class"),R=void 0,k=[],u},w(),u};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!i.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=i.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(i.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(e,t,n,i){e in r.defaults||(r.defaults[e]=t,r.validate[e]=n,i&&r.shifts.push(e))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){r=r||{};for(var i in r)this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var i=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},o=function(t,n,o,s){if(n=n===document?e:n,n===e)s=!1;else if(!u.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(o?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(o&&s){var l=i(n);a+="Height"===t?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,l=["ms","moz","webkit","o"],c=e.requestAnimationFrame,f=e.cancelAnimationFrame;for(t=0;!c&&t<l.length;++t)c=e[l[t]+"RequestAnimationFrame"],f=e[l[t]+"CancelAnimationFrame"]||e[l[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),i=e.setTimeout(function(){t(n+r)},r);return a=n+r,i}),f||(f=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=f.bind(e);var u=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&e-parseFloat(e)+1>=0},u.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=n.get={};return d.elements=function(t){var n=[];if(u.String(t))try{t=document.querySelectorAll(t)}catch(r){return n}if("nodelist"===u(t)||u.Array(t))for(var i=0,o=n.length=t.length;o>i;i++){var s=t[i];n[i]=u.DomElement(s)?s:d.elements(s)}else(u.DomElement(t)||t===document||t===e)&&(n=[t]);return n},d.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},d.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},d.width=function(e,t,n){return o("width",e,t,n)},d.height=function(e,t,n){return o("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(u.String(t))return i(e)[s(t)];if(u.Array(t)){var n={},r=i(e);return t.forEach(function(e){n[e]=r[s(e)]}),n}for(var o in t){var a=t[o];a==parseFloat(a)&&(a+="px"),e.style[s(o)]=a}},n}(window||{});return e});;
/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,n){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],n):"object"==typeof exports?(require("gsap"),n(require("scrollmagic"),TweenMax,TimelineMax)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,n,r){"use strict";e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var e,t=this;t.on("progress.plugin_gsap",function(){i()}),t.on("destroy.plugin_gsap",function(e){t.removeTween(e.reset)});var i=function(){if(e){var n=t.progress(),r=t.state();e.repeat&&-1===e.repeat()?"DURING"===r&&e.paused()?e.play():"DURING"===r||e.paused()||e.pause():n!=e.progress()&&(0===t.duration()?n>0?e.play():e.reverse():t.tweenChanges()&&e.tweenTo?e.tweenTo(n*e.duration()):e.progress(n).pause())}};t.setTween=function(o,a,s){var u;arguments.length>1&&(arguments.length<3&&(s=a,a=1),o=n.to(o,a,s));try{u=r?new r({smoothChildTiming:!0}).add(o):o,u.pause()}catch(p){return t}return e&&t.removeTween(),e=u,o.repeat&&-1===o.repeat()&&(e.repeat(-1),e.yoyo(o.yoyo())),i(),t},t.removeTween=function(n){return e&&(n&&e.progress(0).pause(),e.kill(),e=void 0),t}})});;
/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
// !function(e,r){"function"==typeof define&&define.amd?define(["ScrollMagic"],r):r("object"==typeof exports?require("scrollmagic"):e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic)}(this,function(e){"use strict";var r="0.85em",t="9999",i=15,o=e._util,n=0;e.Scene.extend(function(){var e,r=this;r.addIndicators=function(t){if(!e){var i={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"};t=o.extend({},i,t),n++,e=new s(r,t),r.on("add.plugin_addIndicators",e.add),r.on("remove.plugin_addIndicators",e.remove),r.on("destroy.plugin_addIndicators",r.removeIndicators),r.controller()&&e.add()}return r},r.removeIndicators=function(){return e&&(e.remove(),this.off("*.plugin_addIndicators"),e=void 0),r}}),e.Controller.addOption("addIndicators",!1),e.Controller.extend(function(){var r=this,t=r.info(),n=t.container,s=t.isDocument,d=t.vertical,a={groups:[]};this._indicators=a;var g=function(){a.updateBoundsPositions()},p=function(){a.updateTriggerGroupPositions()};return n.addEventListener("resize",p),s||(window.addEventListener("resize",p),window.addEventListener("scroll",p)),n.addEventListener("resize",g),n.addEventListener("scroll",g),this._indicators.updateBoundsPositions=function(e){for(var r,t,s,g=e?[o.extend({},e.triggerGroup,{members:[e]})]:a.groups,p=g.length,u={},c=d?"left":"top",l=d?"width":"height",f=d?o.get.scrollLeft(n)+o.get.width(n)-i:o.get.scrollTop(n)+o.get.height(n)-i;p--;)for(s=g[p],r=s.members.length,t=o.get[l](s.element.firstChild);r--;)u[c]=f-t,o.css(s.members[r].bounds,u)},this._indicators.updateTriggerGroupPositions=function(e){for(var t,g,p,u,c,l=e?[e]:a.groups,f=l.length,m=s?document.body:n,h=s?{top:0,left:0}:o.get.offset(m,!0),v=d?o.get.width(n)-i:o.get.height(n)-i,b=d?"width":"height",G=d?"Y":"X";f--;)t=l[f],g=t.element,p=t.triggerHook*r.info("size"),u=o.get[b](g.firstChild.firstChild),c=p>u?"translate"+G+"(-100%)":"",o.css(g,{top:h.top+(d?p:v-t.members[0].options.indent),left:h.left+(d?v-t.members[0].options.indent:p)}),o.css(g.firstChild.firstChild,{"-ms-transform":c,"-webkit-transform":c,transform:c})},this._indicators.updateTriggerGroupLabel=function(e){var r="trigger"+(e.members.length>1?"":" "+e.members[0].options.name),t=e.element.firstChild.firstChild,i=t.textContent!==r;i&&(t.textContent=r,d&&a.updateBoundsPositions())},this.addScene=function(t){this._options.addIndicators&&t instanceof e.Scene&&t.controller()===r&&t.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){n.removeEventListener("resize",p),s||(window.removeEventListener("resize",p),window.removeEventListener("scroll",p)),n.removeEventListener("resize",g),n.removeEventListener("scroll",g),this.$super.destroy.apply(this,arguments)},r});var s=function(e,r){var t,i,s=this,a=d.bounds(),g=d.start(r.colorStart),p=d.end(r.colorEnd),u=r.parent&&o.get.elements(r.parent)[0];r.name=r.name||n,g.firstChild.textContent+=" "+r.name,p.textContent+=" "+r.name,a.appendChild(g),a.appendChild(p),s.options=r,s.bounds=a,s.triggerGroup=void 0,this.add=function(){i=e.controller(),t=i.info("vertical");var r=i.info("isDocument");u||(u=r?document.body:i.info("container")),r||"static"!==o.css(u,"position")||o.css(u,{position:"relative"}),e.on("change.plugin_addIndicators",l),e.on("shift.plugin_addIndicators",c),G(),h(),setTimeout(function(){i._indicators.updateBoundsPositions(s)},0)},this.remove=function(){if(s.triggerGroup){if(e.off("change.plugin_addIndicators",l),e.off("shift.plugin_addIndicators",c),s.triggerGroup.members.length>1){var r=s.triggerGroup;r.members.splice(r.members.indexOf(s),1),i._indicators.updateTriggerGroupLabel(r),i._indicators.updateTriggerGroupPositions(r),s.triggerGroup=void 0}else b();m()}};var c=function(){h()},l=function(e){"triggerHook"===e.what&&G()},f=function(){var e=i.info("vertical");o.css(g.firstChild,{"border-bottom-width":e?1:0,"border-right-width":e?0:1,bottom:e?-1:r.indent,right:e?r.indent:-1,padding:e?"0 8px":"2px 4px"}),o.css(p,{"border-top-width":e?1:0,"border-left-width":e?0:1,top:e?"100%":"",right:e?r.indent:"",bottom:e?"":r.indent,left:e?"":"100%",padding:e?"0 8px":"2px 4px"}),u.appendChild(a)},m=function(){a.parentNode.removeChild(a)},h=function(){a.parentNode!==u&&f();var r={};r[t?"top":"left"]=e.triggerPosition(),r[t?"height":"width"]=e.duration(),o.css(a,r),o.css(p,{display:e.duration()>0?"":"none"})},v=function(){var n=d.trigger(r.colorTrigger),a={};a[t?"right":"bottom"]=0,a[t?"border-top-width":"border-left-width"]=1,o.css(n.firstChild,a),o.css(n.firstChild.firstChild,{padding:t?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(n);var g={triggerHook:e.triggerHook(),element:n,members:[s]};i._indicators.groups.push(g),s.triggerGroup=g,i._indicators.updateTriggerGroupLabel(g),i._indicators.updateTriggerGroupPositions(g)},b=function(){i._indicators.groups.splice(i._indicators.groups.indexOf(s.triggerGroup),1),s.triggerGroup.element.parentNode.removeChild(s.triggerGroup.element),s.triggerGroup=void 0},G=function(){var r=e.triggerHook(),t=1e-4;if(!(s.triggerGroup&&Math.abs(s.triggerGroup.triggerHook-r)<t)){for(var o,n=i._indicators.groups,d=n.length;d--;)if(o=n[d],Math.abs(o.triggerHook-r)<t)return s.triggerGroup&&(1===s.triggerGroup.members.length?b():(s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s),1),i._indicators.updateTriggerGroupLabel(s.triggerGroup),i._indicators.updateTriggerGroupPositions(s.triggerGroup))),o.members.push(s),s.triggerGroup=o,void i._indicators.updateTriggerGroupLabel(o);if(s.triggerGroup){if(1===s.triggerGroup.members.length)return s.triggerGroup.triggerHook=r,void i._indicators.updateTriggerGroupPositions(s.triggerGroup);s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s),1),i._indicators.updateTriggerGroupLabel(s.triggerGroup),i._indicators.updateTriggerGroupPositions(s.triggerGroup),s.triggerGroup=void 0}v()}}},d={start:function(e){var r=document.createElement("div");r.textContent="start",o.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e});var t=document.createElement("div");return o.css(t,{position:"absolute",overflow:"visible",width:0,height:0}),t.appendChild(r),t},end:function(e){var r=document.createElement("div");return r.textContent="end",o.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),r},bounds:function(){var e=document.createElement("div");return o.css(e,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":r}),e.style.zIndex=t,e},trigger:function(e){var i=document.createElement("div");i.textContent="trigger",o.css(i,{position:"relative"});var n=document.createElement("div");o.css(n,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),n.appendChild(i);var s=document.createElement("div");return o.css(s,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":r}),s.style.zIndex=t,s.appendChild(n),s}}});;
/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,i){"function"==typeof define&&define.amd?define(["ScrollMagic","jquery"],i):"object"==typeof exports?i(require("scrollmagic"),require("jquery")):i(e.ScrollMagic,e.jQuery)}(this,function(e,i){"use strict";e._util.get.elements=function(e){return i(e).toArray()},e._util.addClass=function(e,t){i(e).addClass(t)},e._util.removeClass=function(e,t){i(e).removeClass(t)},i.ScrollMagic=e});;
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;
//
// SmoothScroll for websites v1.4.9 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me.
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any
// extension for browsers or native application
// without getting a written permission first.
//

(function () {

// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 400, // [ms]
    stepSize         : 100, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 50,  // 50
    accelerationMax   : 3,   // 3

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,    // [px]

    // Other
    fixedBackground   : true,
    excluded          : ''
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var refreshSize;
var deltaBuffer = [];
var deltaBufferTimer;
var isMac = /^Mac/.test(navigator.platform);

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
            pageup: 33, pagedown: 34, end: 35, home: 36 };
var arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };

/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {
    if (options.keyboardSupport) {
        addEvent('keydown', keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {

    if (initDone || !document.body) return;

    initDone = true;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight;
    var scrollHeight = body.scrollHeight;

    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;

    initTest();

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * Safari 10 fixed it, Chrome fixed it in v45:
     * This fixes a bug where the areas left and right to
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (isOldSafari &&
             scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight ||
             html.offsetHeight <= windowHeight)) {

        var fullPageElem = document.createElement('div');
        fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
                                     'top:0; left:0; right:0; height:' +
                                      root.scrollHeight + 'px';
        document.body.appendChild(fullPageElem);

        // DOM changed (throttled) to fix height
        var pendingRefresh;
        refreshSize = function () {
            if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
            pendingRefresh = setTimeout(function () {
                if (isExcluded) return; // could be running after cleanup
                fullPageElem.style.height = '0';
                fullPageElem.style.height = root.scrollHeight + 'px';
                pendingRefresh = null;
            }, 500); // act rarely to stay fast
        };

        setTimeout(refreshSize, 10);

        addEvent('resize', refreshSize);

        // TODO: attributeFilter?
        var config = {
            attributes: true,
            childList: true,
            characterData: false
            // subtree: true
        };

        observer = new MutationObserver(refreshSize);
        observer.observe(body, config);

        if (root.offsetHeight <= windowHeight) {
            var clearfix = document.createElement('div');
            clearfix.style.clear = 'both';
            body.appendChild(clearfix);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = 'scroll';
        html.style.backgroundAttachment = 'scroll';
    }
}

/**
 * Removes event listeners and other traces left on the page.
 */
function cleanup() {
    observer && observer.disconnect();
    removeEvent(wheelEvent, wheel);
    removeEvent('mousedown', mousedown);
    removeEvent('keydown', keydown);
    removeEvent('resize', refreshSize);
    removeEvent('load', init);
}


/************************************************
 * SCROLLING
 ************************************************/

var que = [];
var pending = false;
var lastScroll = Date.now();

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top) {

    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = Date.now();
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (50 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = Date.now();
    }

    // push a scroll command
    que.push({
        x: left,
        y: top,
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99,
        start: Date.now()
    });

    // don't act if there's a pending queue
    if (pending) {
        return;
    }

    var scrollRoot = getScrollRoot();
    var isWindowScroll = (elem === scrollRoot || elem === document.body);

    // if we haven't already fixed the behavior,
    // and it needs fixing for this sesh
    if (elem.$scrollBehavior == null && isScrollBehaviorSmooth(elem)) {
        elem.$scrollBehavior = elem.style.scrollBehavior;
        elem.style.scrollBehavior = 'auto';
    }

    var step = function (time) {

        var now = Date.now();
        var scrollX = 0;
        var scrollY = 0;

        for (var i = 0; i < que.length; i++) {

            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);

            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;

            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }

            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;

            // add this to the total scrolling
            scrollX += x;
            scrollY += y;

            // update last values
            item.lastX += x;
            item.lastY += y;

            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }
        }

        // scroll left and top
        if (isWindowScroll) {
            window.scrollBy(scrollX, scrollY);
        }
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;
        }

        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }

        if (que.length) {
            requestFrame(step, elem, (1000 / options.frameRate + 1));
        } else {
            pending = false;
            // restore default behavior at the end of scrolling sesh
            if (elem.$scrollBehavior != null) {
                elem.style.scrollBehavior = elem.$scrollBehavior;
                elem.$scrollBehavior = null;
            }
        }
    };

    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }

    var target = event.target;

    // leave early if default action is prevented
    // or it's a zooming event with CTRL
    if (event.defaultPrevented || event.ctrlKey) {
        return true;
    }

    // leave embedded content alone (flash & pdf)
    if (isNodeName(activeElement, 'embed') ||
       (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
        isNodeName(activeElement, 'object') ||
        target.shadowRoot) {
        return true;
    }

    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;

    if (isMac) {
        if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
            deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
        }
        if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
            deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
        }
    }

    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = -event.wheelDelta || 0;
    }

    // line based scrolling (Firefox mostly)
    if (event.deltaMode === 1) {
        deltaX *= 40;
        deltaY *= 40;
    }

    var overflowing = overflowingAncestor(target);

    // nothing to do if there's no element that's scrollable
    if (!overflowing) {
        // except Chrome iframes seem to eat wheel events, which we need to
        // propagate up, if the iframe has nothing overflowing to scroll
        if (isFrame && isChrome)  {
            // change target to iframe element itself for the parent frame
            Object.defineProperty(event, "target", {value: window.frameElement});
            return parent.wheel(event);
        }
        return true;
    }

    // check if it's a touchpad scroll that should be ignored
    if (isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }

    scrollArray(overflowing, deltaX, deltaY);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey ||
                  (event.shiftKey && event.keyCode !== key.spacebar);

    // our own tracked active element could've been removed from the DOM
    if (!document.body.contains(activeElement)) {
        activeElement = document.activeElement;
    }

    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    // or inside interactive elements
    var inputNodeNames = /^(textarea|select|embed|object)$/i;
    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if ( event.defaultPrevented ||
         inputNodeNames.test(target.nodeName) ||
         isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
         isNodeName(activeElement, 'video') ||
         isInsideYoutubeVideo(event) ||
         target.isContentEditable ||
         modifier ) {
      return true;
    }

    // [spacebar] should trigger button press, leave it alone
    if ((isNodeName(target, 'button') ||
         isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
        event.keyCode === key.spacebar) {
      return true;
    }

    // [arrwow keys] on radio buttons should be left alone
    if (isNodeName(target, 'input') && target.type == 'radio' &&
        arrowKeys[event.keyCode])  {
      return true;
    }

    var shift, x = 0, y = 0;
    var overflowing = overflowingAncestor(activeElement);

    if (!overflowing) {
        // Chrome iframes seem to eat key events, which we need to
        // propagate up, if the iframe has nothing overflowing to scroll
        return (isFrame && isChrome) ? parent.keydown(event) : true;
    }

    var clientHeight = overflowing.clientHeight;

    if (overflowing == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            if (overflowing == document.body && document.scrollingElement)
                overflowing = document.scrollingElement;
            y = -overflowing.scrollTop;
            break;
        case key.end:
            var scroll = overflowing.scrollHeight - overflowing.scrollTop;
            var scrollRemaining = scroll - clientHeight;
            y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;
        default:
            return true; // a key we don't care about
    }

    scrollArray(overflowing, x, y);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

var cacheX = {}; // cleared out after a scrolling session
var cacheY = {}; // cleared out after a scrolling session
var clearCacheTimer;
var smoothBehaviorForElement = {};

//setInterval(function () { cache = {}; }, 10 * 1000);

function scheduleClearCache() {
    clearTimeout(clearCacheTimer);
    clearCacheTimer = setInterval(function () {
        cacheX = cacheY = smoothBehaviorForElement = {};
    }, 1*1000);
}

function setCache(elems, overflowing, x) {
    var cache = x ? cacheX : cacheY;
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}

function getCache(el, x) {
    return (x ? cacheX : cacheY)[uniqueID(el)];
}

//  (body)                (root)
//         | hidden | visible | scroll |  auto  |
// hidden  |   no   |    no   |   YES  |   YES  |
// visible |   no   |   YES   |   YES  |   YES  |
// scroll  |   no   |   YES   |   YES  |   YES  |
// auto    |   no   |   YES   |   YES  |   YES  |

function overflowingAncestor(el) {
    var elems = [];
    var body = document.body;
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = getCache(el, false);
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
            var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
            if (isFrame && isContentOverflowing(root) ||
               !isFrame && isOverflowCSS) {
                return setCache(elems, getScrollRoot());
            }
        } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
            return setCache(elems, el);
        }
    } while ((el = el.parentElement));
}

function isContentOverflowing(el) {
    return (el.clientHeight + 10 < el.scrollHeight);
}

// typically for <body> and <html>
function overflowNotHidden(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow !== 'hidden');
}

// for all other elements
function overflowAutoOrScroll(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow === 'scroll' || overflow === 'auto');
}

// for all other elements
function isScrollBehaviorSmooth(el) {
    var id = uniqueID(el);
    if (smoothBehaviorForElement[id] == null) {
        var scrollBehavior = getComputedStyle(el, '')['scroll-behavior'];
        smoothBehaviorForElement[id] = ('smooth' == scrollBehavior);
    }
    return smoothBehaviorForElement[id];
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn, arg) {
    window.addEventListener(type, fn, arg || false);
}

function removeEvent(type, fn, arg) {
    window.removeEventListener(type, fn, arg || false);
}

function isNodeName(el, tag) {
    return el && (el.nodeName||'').toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}

if (window.localStorage && localStorage.SS_deltaBuffer) {
    try { // #46 Safari throws in private browsing for localStorage
        deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    } catch (e) { }
}

function isTouchpad(deltaY) {
    if (!deltaY) return;
    if (!deltaBuffer.length) {
        deltaBuffer = [deltaY, deltaY, deltaY];
    }
    deltaY = Math.abs(deltaY);
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    deltaBufferTimer = setTimeout(function () {
        try { // #46 Safari throws in private browsing for localStorage
            localStorage.SS_deltaBuffer = deltaBuffer.join(',');
        } catch (e) { }
    }, 1000);
    var dpiScaledWheelDelta = deltaY > 120 && allDeltasDivisableBy(deltaY); // win64
    return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) && !dpiScaledWheelDelta;
}

function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

function allDeltasDivisableBy(divisor) {
    return (isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor));
}

function isInsideYoutubeVideo(event) {
    var elem = event.target;
    var isControl = false;
    if (document.URL.indexOf ('www.youtube.com/watch') != -1) {
        do {
            isControl = (elem.classList &&
                         elem.classList.contains('html5-video-controls'));
            if (isControl) break;
        } while ((elem = elem.parentNode));
    }
    return isControl;
}

var requestFrame = (function () {
      return (window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function (callback, element, delay) {
                 window.setTimeout(callback, delay || (1000/60));
             });
})();

var MutationObserver = (window.MutationObserver ||
                        window.WebKitMutationObserver ||
                        window.MozMutationObserver);

var getScrollRoot = (function() {
  var SCROLL_ROOT = document.scrollingElement;
  return function() {
    if (!SCROLL_ROOT) {
      var dummy = document.createElement('div');
      dummy.style.cssText = 'height:10000px;width:1px;';
      document.body.appendChild(dummy);
      var bodyScrollTop  = document.body.scrollTop;
      var docElScrollTop = document.documentElement.scrollTop;
      window.scrollBy(0, 3);
      if (document.body.scrollTop != bodyScrollTop)
        (SCROLL_ROOT = document.body);
      else
        (SCROLL_ROOT = document.documentElement);
      window.scrollBy(0, -3);
      document.body.removeChild(dummy);
    }
    return SCROLL_ROOT;
  };
})();


/***********************************************
 * PULSE (by Michael Herf)
 ***********************************************/

/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}


/***********************************************
 * FIRST RUN
 ***********************************************/

var userAgent = window.navigator.userAgent;
var isEdge    = /Edge/.test(userAgent); // thank you MS
var isChrome  = /chrome/i.test(userAgent) && !isEdge;
var isSafari  = /safari/i.test(userAgent) && !isEdge;
var isMobile  = /mobile/i.test(userAgent);
var isIEWin7  = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () {
            supportsPassive = true;
        }
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

if (wheelEvent && isEnabledForBrowser) {
    addEvent(wheelEvent, wheel, wheelOpt);
    addEvent('mousedown', mousedown);
    addEvent('load', init);
}


/***********************************************
 * PUBLIC INTERFACE
 ***********************************************/

function SmoothScroll(optionsToSet) {
    for (var key in optionsToSet)
        if (defaultOptions.hasOwnProperty(key))
            options[key] = optionsToSet[key];
}
SmoothScroll.destroy = cleanup;

if (window.SmoothScrollOptions) // async API
    SmoothScroll(window.SmoothScrollOptions);

if (typeof define === 'function' && define.amd)
    define(function() {
        return SmoothScroll;
    });
else if ('object' == typeof exports)
    module.exports = SmoothScroll;
else
    window.SmoothScroll = SmoothScroll;

})();;
/*!
 * smoothState.js is jQuery plugin that progressively enhances
 * page loads to behave more like a single-page application.
 *
 * @author  Miguel Ángel Pérez   reachme@miguel-perez.com
 * @see     http://smoothstate.com
 *
 */

(function (factory) {
    'use strict';
  
    if(typeof module === 'object' && typeof module.exports === 'object') {
      factory(require('jquery'), window, document);
    } else {
      factory(jQuery, window, document);
    }
  }(function ( $, window, document, undefined ) {
    'use strict';
  
    /** Abort if browser does not support pushState */
    if(!window.history.pushState) {
      // setup a dummy fn, but don't intercept on link clicks
      $.fn.smoothState = function() { return this; };
      $.fn.smoothState.options = {};
      return;
    }
  
    /** Abort if smoothState is already present **/
    if($.fn.smoothState) { return; }
  
    var
      /** Used later to scroll page to the top */
      $body = $('html, body'),
  
      /** Used in debug mode to console out useful warnings */
      consl = window.console,
  
      /** Plugin default options, will be exposed as $fn.smoothState.options */
      defaults = {
  
        /** If set to true, smoothState will log useful debug information instead of aborting */
        debug: false,
  
        /** jQuery selector to specify which anchors smoothState should bind to */
        anchors: 'a',
  
        /** Regex to specify which href smoothState should load. If empty, every href will be permitted. */
        hrefRegex: '',
  
        /** jQuery selector to specify which forms smoothState should bind to */
        forms: 'form',
  
        /** If set to true, smoothState will store form responses in the cache. */
        allowFormCaching: false,
  
        /** Minimum number of milliseconds between click/submit events. Events ignored beyond this rate are ignored. */
        repeatDelay: 500,
  
        /** A selector that defines what should be ignored by smoothState */
        blacklist: '.no-smoothState',
  
        /** If set to true, smoothState will prefetch a link's contents on hover */
        prefetch: false,
  
        /** The name of the event we will listen to from anchors if we're prefetching */
        prefetchOn: 'mouseover touchstart',
  
        /** jQuery selector to specify elements which should not be prefetched */
        prefetchBlacklist: '.no-prefetch',
  
        /** The response header field name defining the request's final URI. Useful for resolving redirections. */
        locationHeader: 'X-SmoothState-Location',
  
        /** The number of pages smoothState will try to store in memory */
        cacheLength: 0,
  
        /** Class that will be applied to the body while the page is loading */
        loadingClass: 'is-loading',
  
        /** Scroll to top after onStart and scroll to hash after onReady */
        scroll: true,
  
        /**
         * A function that can be used to alter the ajax request settings before it is called
         * @param  {Object} request - jQuery.ajax settings object that will be used to make the request
         * @return {Object}         Altered request object
         */
        alterRequest: function (request) {
          return request;
        },
  
        /**
         * A function that can be used to alter the state object before it is updated or added to the browsers history
         * @param  {Object} state - An object that will be assigned to history entry
         * @param  {string} title - The history entry's title. For reference only
         * @param  {string} url   - The history entry's URL. For reference only
         * @return {Object}         Altered state object
         */
        alterChangeState: function (state, title, url) {
          return state;
        },
  
        /** Run before a page load has been activated */
        onBefore: function ($currentTarget, $container) {},
  
        /** Run when a page load has been activated */
        onStart: {
          duration: 0,
          render: function ($container) {}
        },
  
        /** Run if the page request is still pending and onStart has finished animating */
        onProgress: {
          duration: 0,
          render: function ($container) {}
        },
  
        /** Run when requested content is ready to be injected into the page  */
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            $container.html($newContent);
          }
        },
  
        /** Run when content has been injected and all animations are complete  */
        onAfter: function($container, $newContent) {}
      },
  
      /** Utility functions that are decoupled from smoothState */
      utility = {
  
        /**
         * Checks to see if the url is external
         * @param   {string}    url - url being evaluated
         * @see     http://stackoverflow.com/questions/6238351/fastest-way-to-detect-external-urls
         *
         */
        isExternal: function (url) {
          var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
          if (typeof match[1] === 'string' && match[1].length > 0 && match[1].toLowerCase() !== window.location.protocol) {
            return true;
          }
          if (typeof match[2] === 'string' &&
            match[2].length > 0 &&
            match[2].replace(new RegExp(':(' + {'http:': 80, 'https:': 443}[window.location.protocol] +
              ')?$'), '') !== window.location.host) {
            return true;
          }
          return false;
        },
  
        /**
         * Strips the hash from a url and returns the new href
         * @param   {string}    href - url being evaluated
         *
         */
        stripHash: function(href) {
          return href.replace(/#.*/, '');
        },
  
        /**
         * Checks to see if the url is an internal hash
         * @param   {string}    href - url being evaluated
         * @param   {string}    prev - previous url (optional)
         *
         */
        isHash: function (href, prev) {
          prev = prev || window.location.href;
  
          var hasHash = (href.indexOf('#') > -1) ? true : false,
              samePath = (utility.stripHash(href) === utility.stripHash(prev)) ? true : false;
  
          return (hasHash && samePath);
        },
  
        /**
         * Translates a url string into a $.ajax settings obj
         * @param  {Object|String} request url or settings obj
         * @return {Object}        settings object
         */
        translate: function(request) {
            var defaults = {
              dataType: 'html',
              type: 'GET'
            };
            if(typeof request === 'string') {
              request = $.extend({}, defaults, { url: request });
            } else {
              request = $.extend({}, defaults, request);
            }
            return request;
        },
  
        /**
         * Checks to see if we should be loading this URL
         * @param   {string}    url - url being evaluated
         * @param   {string}    blacklist - jquery selector
         *
         */
        shouldLoadAnchor: function ($anchor, blacklist, hrefRegex) {
          var href = $anchor.prop('href');
          // URL will only be loaded if it's not an external link, hash, or
          // blacklisted
          return (
              !utility.isExternal(href) &&
              !utility.isHash(href) &&
              !$anchor.is(blacklist) &&
              !$anchor.prop('target')) &&
              (
                typeof hrefRegex === undefined ||
                hrefRegex === '' ||
                $anchor.prop('href').search(hrefRegex) !== -1
              );
        },
  
        /**
         * Resets an object if it has too many properties
         *
         * This is used to clear the 'cache' object that stores
         * all of the html. This would prevent the client from
         * running out of memory and allow the user to hit the
         * server for a fresh copy of the content.
         *
         * @param   {object}    obj
         * @param   {number}    cap
         *
         */
        clearIfOverCapacity: function (cache, cap) {
          // Polyfill Object.keys if it doesn't exist
          if (!Object.keys) {
            Object.keys = function (obj) {
              var keys = [],
                k;
              for (k in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, k)) {
                  keys.push(k);
                }
              }
              return keys;
            };
          }
  
          if (Object.keys(cache).length > cap) {
            cache = {};
          }
  
          return cache;
        },
  
        /**
         * Stores a document fragment into an object
         * @param   {object}           object - object where it will be stored
         * @param   {string}           url - name of the entry
         * @param   {string|document}  doc - entire html
         * @param   {string}           id - the id of the fragment
         * @param   {object}           [state] - the history entry's object
         * @param   {string}           [destUrl] - the destination url
         * @return  {object}           updated object store
         */
        storePageIn: function (object, url, doc, id, state, destUrl) {
          var $html = $( '<html></html>' ).append( $(doc) );
          if (typeof state === 'undefined') {
            state = {};
          }
          if (typeof destUrl === 'undefined') {
            destUrl = url;
          }
          object[url] = { // Content is indexed by the url
            status: 'loaded',
            // Stores the title of the page, .first() prevents getting svg titles
            title: $html.find('title').first().text(),
            html: $html.find('#' + id), // Stores the contents of the page
            doc: doc, // Stores the whole page document
            state: state, // Stores the history entry for comparisons,
            destUrl: destUrl // URL, which will be pushed to history stack
          };
          return object;
        },
  
        /**
         * Triggers an 'allanimationend' event when all animations are complete
         * @param   {object}    $element - jQuery object that should trigger event
         * @param   {string}    resetOn - which other events to trigger allanimationend on
         *
         */
        triggerAllAnimationEndEvent: function ($element, resetOn) {
  
          resetOn = ' ' + resetOn || '';
  
          var animationCount = 0,
            animationstart = 'animationstart webkitAnimationStart oanimationstart MSAnimationStart',
            animationend = 'animationend webkitAnimationEnd oanimationend MSAnimationEnd',
            eventname = 'allanimationend',
            onAnimationStart = function (e) {
              if ($(e.delegateTarget).is($element)) {
                e.stopPropagation();
                animationCount++;
              }
            },
            onAnimationEnd = function (e) {
              if ($(e.delegateTarget).is($element)) {
                e.stopPropagation();
                animationCount--;
                if(animationCount === 0) {
                  $element.trigger(eventname);
                }
              }
            };
  
          $element.on(animationstart, onAnimationStart);
          $element.on(animationend, onAnimationEnd);
  
          $element.on('allanimationend' + resetOn, function(){
            animationCount = 0;
            utility.redraw($element);
          });
        },
  
        /** Forces browser to redraw elements */
        redraw: function ($element) {
          $element.height();
        }
      },
  
      /** Handles the popstate event, like when the user hits 'back' */
      onPopState = function ( e ) {
        if(e.state !== null) {
          var url = window.location.href,
            $page = $('#' + e.state.id),
            page = $page.data('smoothState'),
            diffUrl = (page.href !== url && !utility.isHash(url, page.href)),
            diffState = (e.state !== page.cache[page.href].state);
  
          if(diffUrl || diffState) {
            if (diffState) {
              page.clear(page.href);
            }
            page.load(url, false);
          }
        }
      },
  
      /** Constructor function */
      Smoothstate = function ( element, options ) {
        var
          /** Container element smoothState is run on */
          $container = $(element),
  
          /** ID of the main container */
          elementId = $container.prop('id'),
  
          /** If a hash was clicked, we'll store it here so we
           *  can scroll to it once the new page has been fully
           *  loaded.
           */
          targetHash = null,
  
          /** Used to prevent fetching while we transition so
           *  that we don't mistakenly override a cache entry
           *  we need.
           */
          isTransitioning = false,
  
          /** Variable that stores pages after they are requested */
          cache = {},
  
          /** Variable that stores data for a history entry */
          state = {},
  
          /** Url of the content that is currently displayed */
          currentHref = window.location.href,
  
          /**
           * Clears a given page from the cache, if no url is provided
           * it will clear the entire cache.
           * @param  {String} url entry that is to be deleted.
           */
          clear = function(url) {
            url = url || false;
            if(url && cache.hasOwnProperty(url)) {
              delete cache[url];
            } else {
              cache = {};
            }
            $container.data('smoothState').cache = cache;
          },
  
          /**
           * Fetches the contents of a url and stores it in the 'cache' variable
           * @param  {String|Object}   request  - url or request settings object
           * @param  {Function}        callback - function that will run as soon as it finishes
           */
          fetch = function (request, callback) {
  
            // Sets a default in case a callback is not defined
            callback = callback || $.noop;
  
            // Allows us to accept a url string or object as the ajax settings
            var settings = utility.translate(request);
  
            // Check the length of the cache and clear it if needed
            cache = utility.clearIfOverCapacity(cache, options.cacheLength);
  
            // Don't prefetch if we have the content already or if it's a form
            if(cache.hasOwnProperty(settings.url) && typeof settings.data === 'undefined') {
              return;
            }
  
            // Let other parts of the code know we're working on getting the content
            cache[settings.url] = { status: 'fetching' };
  
            // Make the ajax request
            var ajaxRequest = $.ajax(settings);
  
            // Store contents in cache variable if successful
            ajaxRequest.done(function (html) {
              utility.storePageIn(cache, settings.url, html, elementId);
              $container.data('smoothState').cache = cache;
            });
  
            // Mark as error to be acted on later
            ajaxRequest.fail(function () {
              cache[settings.url].status = 'error';
            });
  
            if (options.locationHeader) {
              ajaxRequest.always(function(htmlOrXhr, status, errorOrXhr){
                // Resolve where the XHR is based on done() or fail() argument positions
                var xhr = (htmlOrXhr.statusCode ? htmlOrXhr : errorOrXhr),
                    redirectedLocation = xhr.getResponseHeader(options.locationHeader);
  
                if (redirectedLocation) {
                  cache[settings.url].destUrl = redirectedLocation;
                }
              });
            }
  
            // Call fetch callback
            if(callback) {
              ajaxRequest.always(callback);
            }
          },
  
          repositionWindow = function(){
            // Scroll to a hash anchor on destination page
            if(targetHash) {
              var $targetHashEl = $(targetHash, $container);
              if($targetHashEl.length){
                var newPosition = $targetHashEl.offset().top;
                $body.scrollTop(newPosition);
              }
              targetHash = null;
            }
          },
  
          /** Updates the contents from cache[url] */
          updateContent = function (url) {
            // If the content has been requested and is done:
            var containerId = '#' + elementId,
                $newContent = cache[url] ? $(cache[url].html.html()) : null;
  
            if($newContent.length) {
  
              // Update the title
              document.title = cache[url].title;
  
              // Update current url
              $container.data('smoothState').href = url;
  
              // Remove loading class
              if(options.loadingClass) {
                $body.removeClass(options.loadingClass);
              }
  
              // Call the onReady callback and set delay
              options.onReady.render($container, $newContent);
  
              $container.one('ss.onReadyEnd', function(){
  
                // Allow prefetches to be made again
                isTransitioning = false;
  
                // Run callback
                options.onAfter($container, $newContent);
  
                if (options.scroll) {
                  repositionWindow();
                }
                
                bindPrefetchHandlers($container);
  
              });
  
              window.setTimeout(function(){
                $container.trigger('ss.onReadyEnd');
              }, options.onReady.duration);
  
            } else if (!$newContent && options.debug && consl) {
              // Throw warning to help debug in debug mode
              consl.warn('No element with an id of ' + containerId + ' in response from ' + url + ' in ' + cache);
            } else {
              // No content availble to update with, aborting...
              window.location = url;
            }
          },
  
          /**
           * Loads the contents of a url into our container
           * @param   {string}    url
           * @param   {bool}      push - used to determine if we should
           *                      add a new item into the history object
           * @param   {bool}      cacheResponse - used to determine if
           *                      we should allow the cache to forget this
           *                      page after thid load completes.
           */
          load = function (request, push, cacheResponse) {
  
            var settings = utility.translate(request);
  
            /** Makes these optional variables by setting defaults. */
            if (typeof push === 'undefined') {
              push = true;
            }
            if (typeof cacheResponse === 'undefined') {
              cacheResponse = true;
            }
  
            var
              /** Used to check if the onProgress function has been run */
              hasRunCallback = false,
  
              callbBackEnded = false,
  
              /** List of responses for the states of the page request */
              responses = {
  
                /** Page is ready, update the content */
                loaded: function () {
                  var eventName = hasRunCallback ? 'ss.onProgressEnd' : 'ss.onStartEnd';
  
                  if (!callbBackEnded || !hasRunCallback) {
                    $container.one(eventName, function(){
                      updateContent(settings.url);
                      if (!cacheResponse) {
                        clear(settings.url);
                      }
                    });
                  }
                  else if (callbBackEnded) {
                    updateContent(settings.url);
                  }
  
                  if (push) {
                    var destUrl = cache[settings.url].destUrl;
  
                    /** Prepare a history entry */
                    state = options.alterChangeState({ id: elementId }, cache[settings.url].title, destUrl);
  
                    /** Update the cache to include the history entry for future comparisons */
                    cache[settings.url].state = state;
  
                    /** Add history entry */
                    window.history.pushState(state, cache[settings.url].title, destUrl);
                  }
  
                  if (callbBackEnded && !cacheResponse) {
                    clear(settings.url);
                  }
                },
  
                /** Loading, wait 10 ms and check again */
                fetching: function () {
  
                  if (!hasRunCallback) {
  
                    hasRunCallback = true;
  
                    // Run the onProgress callback and set trigger
                    $container.one('ss.onStartEnd', function(){
  
                      // Add loading class
                      if (options.loadingClass) {
                        $body.addClass(options.loadingClass);
                      }
  
                      options.onProgress.render($container);
  
                      window.setTimeout(function (){
                        $container.trigger('ss.onProgressEnd');
                        callbBackEnded = true;
                      }, options.onProgress.duration);
  
                    });
                  }
  
                  window.setTimeout(function () {
                    // Might of been canceled, better check!
                    if (cache.hasOwnProperty(settings.url)){
                      responses[cache[settings.url].status]();
                    }
                  }, 10);
                },
  
                /** Error, abort and redirect */
                error: function (){
                  if(options.debug && consl) {
                    consl.log('There was an error loading: ' + settings.url);
                  } else {
                    window.location = settings.url;
                  }
                }
              };
  
            if (!cache.hasOwnProperty(settings.url)) {
              fetch(settings);
            }
  
            // Run the onStart callback and set trigger
            options.onStart.render($container);
  
            window.setTimeout(function(){
              if (options.scroll) {
                $body.scrollTop(0);
              }
              $container.trigger('ss.onStartEnd');
            }, options.onStart.duration);
  
            // Start checking for the status of content
            responses[cache[settings.url].status]();
          },
  
          /**
           * Binds to the hover event of a link, used for prefetching content
           * @param   {object}    event
           */
          hoverAnchor = function (event) {
            var request,
                $anchor = $(event.currentTarget);
  
            if (utility.shouldLoadAnchor($anchor, options.blacklist, options.hrefRegex) && !isTransitioning) {
              event.stopPropagation();
              request = utility.translate($anchor.prop('href'));
              request = options.alterRequest(request);
              fetch(request);
            }
          },
  
          /**
           * Binds to the click event of a link, used to show the content
           * @param   {object}    event
           */
          clickAnchor = function (event) {
  
            // Ctrl (or Cmd) + click must open a new tab
            var $anchor = $(event.currentTarget);
            if (!event.metaKey && !event.ctrlKey && utility.shouldLoadAnchor($anchor, options.blacklist, options.hrefRegex)) {
  
              // stopPropagation so that event doesn't fire on parent containers.
              event.stopPropagation();
              event.preventDefault();
  
              // Apply rate limiting.
              if (!isRateLimited()) {
  
                // Set the delay timeout until the next event is allowed.
                setRateLimitRepeatTime();
  
                var request = utility.translate($anchor.prop('href'));
                isTransitioning = true;
                targetHash = $anchor.prop('hash');
  
                // Allows modifications to the request
                request = options.alterRequest(request);
  
                options.onBefore($anchor, $container);
  
                load(request);
              }
            }
          },
  
          /**
           * Binds to form submissions
           * @param  {Event} event
           */
          submitForm = function (event) {
            var $form = $(event.currentTarget);
  
            if (!$form.is(options.blacklist)) {
  
              event.preventDefault();
              event.stopPropagation();
  
              // Apply rate limiting.
              if (!isRateLimited()) {
  
                // Set the delay timeout until the next event is allowed.
                setRateLimitRepeatTime();
  
                var request = {
                  url: $form.prop('action'),
                  data: $form.serialize(),
                  type: $form.prop('method')
                };
  
                isTransitioning = true;
                request = options.alterRequest(request);
  
                if (request.type.toLowerCase() === 'get') {
                  request.url = request.url + '?' + request.data;
                }
  
                // Call the onReady callback and set delay
                options.onBefore($form, $container);
  
                load(request, undefined, options.allowFormCaching);
              }
            }
          },
  
          /**
           * DigitalMachinist (Jeff Rose)
           * I figured to keep these together with this above functions since they're all related.
           * Feel free to move these somewhere more appropriate if you have such places.
           */
          rateLimitRepeatTime = 0,
          isRateLimited = function () {
            var isFirstClick = (options.repeatDelay === null);
            var isDelayOver = (parseInt(Date.now()) > rateLimitRepeatTime);
            return !(isFirstClick || isDelayOver);
          },
          setRateLimitRepeatTime = function () {
            rateLimitRepeatTime = parseInt(Date.now()) + parseInt(options.repeatDelay);
          },
          
          /**
           * Binds prefetch events
           * @param   {object}    event
           */
          bindPrefetchHandlers = function ($element) {
                      
            if (options.anchors && options.prefetch) {
              $element.find(options.anchors).not(options.prefetchBlacklist).on(options.prefetchOn, null, hoverAnchor);
            }
          },
          
          /**
           * Binds all events and inits functionality
           * @param   {object}    event
           */
          bindEventHandlers = function ($element) {
  
            if (options.anchors) {
              $element.on('click', options.anchors, clickAnchor);
  
              bindPrefetchHandlers($element);
            }
  
            if (options.forms) {
              $element.on('submit', options.forms, submitForm);
            }
          },
  
          /** Restart the container's css animations */
          restartCSSAnimations = function () {
            var classes = $container.prop('class');
            $container.removeClass(classes);
            utility.redraw($container);
            $container.addClass(classes);
          };
  
        /** Merge defaults and global options into current configuration */
        options = $.extend( {}, $.fn.smoothState.options, options );
  
        /** Sets a default state */
        if(window.history.state === null) {
          state = options.alterChangeState({ id: elementId }, document.title, currentHref);
  
          /** Update history entry */
          window.history.replaceState(state, document.title, currentHref);
        } else {
          state = {};
        }
  
        /** Stores the current page in cache variable */
        utility.storePageIn(cache, currentHref, document.documentElement.outerHTML, elementId, state);
  
        /** Bind all of the event handlers on the container, not anchors */
        utility.triggerAllAnimationEndEvent($container, 'ss.onStartEnd ss.onProgressEnd ss.onEndEnd');
  
        /** Bind all of the event handlers on the container, not anchors */
        bindEventHandlers($container);
  
  
        /** Public methods */
        return {
          href: currentHref,
          cache: cache,
          clear: clear,
          load: load,
          fetch: fetch,
          restartCSSAnimations: restartCSSAnimations
        };
      },
  
      /** Returns elements with smoothState attached to it */
      declaresmoothState = function ( options ) {
        return this.each(function () {
          var tagname = this.tagName.toLowerCase();
          // Checks to make sure the smoothState element has an id and isn't already bound
          if(this.id && tagname !== 'body' && tagname !== 'html' && !$.data(this, 'smoothState')) {
            // Makes public methods available via $('element').data('smoothState');
            $.data(this, 'smoothState', new Smoothstate(this, options));
          } else if (!this.id && consl) {
            // Throw warning if in debug mode
            consl.warn('Every smoothState container needs an id but the following one does not have one:', this);
          } else if ((tagname === 'body' || tagname === 'html') && consl) {
            // We dont support making th html or the body element the smoothstate container
            consl.warn('The smoothstate container cannot be the ' + this.tagName + ' tag');
          }
        });
      };
  
    /** Sets the popstate function */
    window.onpopstate = onPopState;
  
    /** Makes utility functions public for unit tests */
    $.smoothStateUtility = utility;
  
    /** Defines the smoothState plugin */
    $.fn.smoothState = declaresmoothState;
  
    /* expose the default options */
    $.fn.smoothState.options = defaults;
  
  }));;
/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.6.5
  @link https://github.com/dollarshaveclub/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";var s=function(){function t(t,s){var e=void 0!==s?s:{};this.version="3.6.5",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:e.customStickyChangeNumber||null,noStyles:e.noStyles||!1,stickyBitStickyOffset:e.stickyBitStickyOffset||0,parentClass:e.parentClass||"js-stickybit-parent",scrollEl:"string"==typeof e.scrollEl?document.querySelector(e.scrollEl):e.scrollEl||window,stickyClass:e.stickyClass||"js-is-sticky",stuckClass:e.stuckClass||"js-is-stuck",stickyChangeClass:e.stickyChangeClass||"js-is-sticky--change",useStickyClasses:e.useStickyClasses||!1,useFixed:e.useFixed||!1,useGetBoundingClientRect:e.useGetBoundingClientRect||!1,verticalPosition:e.verticalPosition||"top"},this.props.positionVal=this.definePosition()||"fixed",this.instances=[];var i=this.props,n=i.positionVal,o=i.verticalPosition,a=i.noStyles,r=i.stickyBitStickyOffset,l="top"!==o||a?"":r+"px",c="fixed"!==n?n:"";this.els="string"==typeof t?document.querySelectorAll(t):t,"length"in this.els||(this.els=[this.els]);for(var f=0;f<this.els.length;f++){var u=this.els[f];u.style[o]=l,u.style.position=c,this.instances.push(this.addInstance(u,this.props))}}var s=t.prototype;return s.definePosition=function(){var t;if(this.props.useFixed)t="fixed";else{for(var s=["","-o-","-webkit-","-moz-","-ms-"],e=document.head.style,i=0;i<s.length;i+=1)e.position=s[i]+"sticky";t=e.position?e.position:"fixed",e.position=""}return t},s.addInstance=function(t,s){var e=this,i={el:t,parent:t.parentNode,props:s};if("fixed"===s.positionVal||s.useStickyClasses){this.isWin=this.props.scrollEl===window;var n=this.isWin?window:this.getClosestParent(i.el,i.props.scrollEl);this.computeScrollOffsets(i),i.parent.className+=" "+s.parentClass,i.state="default",i.stateContainer=function(){return e.manageState(i)},n.addEventListener("scroll",i.stateContainer)}return i},s.getClosestParent=function(t,s){var e=s,i=t;if(i.parentElement===e)return e;for(;i.parentElement!==e;)i=i.parentElement;return e},s.getTopPosition=function(t){if(this.props.useGetBoundingClientRect)return t.getBoundingClientRect().top+(this.props.scrollEl.pageYOffset||document.documentElement.scrollTop);for(var s=0;s=t.offsetTop+s,t=t.offsetParent;);return s},s.computeScrollOffsets=function(t){var s=t,e=s.props,i=s.el,n=s.parent,o=!this.isWin&&"fixed"===e.positionVal,a="bottom"!==e.verticalPosition,r=o?this.getTopPosition(e.scrollEl):0,l=o?this.getTopPosition(n)-r:this.getTopPosition(n),c=null!==e.customStickyChangeNumber?e.customStickyChangeNumber:i.offsetHeight,f=l+n.offsetHeight;s.offset=r+e.stickyBitStickyOffset,s.stickyStart=a?l-s.offset:0,s.stickyChange=s.stickyStart+c,s.stickyStop=a?f-(i.offsetHeight+s.offset):f-window.innerHeight},s.toggleClasses=function(t,s,e){var i=t,n=i.className.split(" ");e&&-1===n.indexOf(e)&&n.push(e);var o=n.indexOf(s);-1!==o&&n.splice(o,1),i.className=n.join(" ")},s.manageState=function(t){var s=t,e=s.el,i=s.props,n=s.state,o=s.stickyStart,a=s.stickyChange,r=s.stickyStop,l=e.style,c=i.noStyles,f=i.positionVal,u=i.scrollEl,p=i.stickyClass,h=i.stickyChangeClass,d=i.stuckClass,y=i.verticalPosition,k="bottom"!==y,g=function(t){t()},m=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||g,v=this.toggleClasses,C=this.isWin?window.scrollY||window.pageYOffset:u.scrollTop,w=k&&C<=o&&("sticky"===n||"stuck"===n),S=r<=C&&"sticky"===n;o<C&&C<r&&("default"===n||"stuck"===n)?(s.state="sticky",m(function(){v(e,d,p),l.position=f,c||(l.bottom="",l[y]=i.stickyBitStickyOffset+"px")})):w?(s.state="default",m(function(){v(e,p),v(e,d),"fixed"===f&&(l.position="")})):S&&(s.state="stuck",m(function(){v(e,p,d),"fixed"!==f||c||(l.top="",l.bottom="0",l.position="absolute")}));var b=a<=C&&C<=r;C<a/2||r<C?m(function(){v(e,h)}):b&&m(function(){v(e,"stub",h)})},s.update=function(t){void 0===t&&(t=null);for(var s=0;s<this.instances.length;s+=1){var e=this.instances[s];if(this.computeScrollOffsets(e),t)for(var i in t)e.props[i]=t[i]}return this},s.removeInstance=function(t){var s=t.el,e=t.props,i=this.toggleClasses;s.style.position="",s.style[e.verticalPosition]="",i(s,e.stickyClass),i(s,e.stuckClass),i(s.parentNode,e.parentClass)},s.cleanup=function(){for(var t=0;t<this.instances.length;t+=1){var s=this.instances[t];s.stateContainer&&s.props.scrollEl.removeEventListener("scroll",s.stateContainer),this.removeInstance(s)}this.manageState=!1,this.instances=[]},t}();if("undefined"!=typeof window){var t=window.$||window.jQuery||window.Zepto;t&&(t.fn.stickybits=function(t){return new s(this,t)})}});;
/*!
 * viewport-units-buggyfill.hacks v0.6.2
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Zoltan Hawryluk - http://www.useragentman.com/
 */
!function(){!function(i,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():i.viewportUnitsBuggyfillHacks=e()}(this,function(){"use strict";function i(i,n,r,o){var a="content"===r&&o.indexOf("viewport-units-buggyfill")>-1;if(a){var f=o.replace(t,"");f.split(";").forEach(function(t){var r=t.split(":");if(2===r.length){var o=r[0].trim();if("viewport-units-buggyfill"!==o){var a=r[1].trim();if(i.push([n,o,a]),e.test(a)){var f=a.replace(e,"-webkit-calc(");i.push([n,o,f])}}}})}}var e=/calc\(/g,t=/["']/g,n=window.navigator.userAgent,r=/MSIE [0-9]\./i.test(n);return r||(r=!!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./)),{required:function(i){return i.isMobileSafari||r},initialize:function(){},initializeEvents:function(i,e,t){i.force||r&&!i._listeningToResize&&(window.addEventListener("resize",t,!0),i._listeningToResize=!0)},findDeclarations:function(e,t,n,r){null!==n&&i(e,t,n,r)},overwriteDeclaration:function(i,e,t){return r&&"filter"===e&&(t=t.replace(/px/g,"")),t}}})}();;
/*!
 * viewport-units-buggyfill v0.6.2
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Rodney Rehm - http://rodneyrehm.de/en/
 */

!function(){!function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.viewportUnitsBuggyfill=t()}(this,function(){"use strict";function e(e,t){var n;return function(){var i=this,r=arguments,o=function(){e.apply(i,r)};clearTimeout(n),n=setTimeout(o,t)}}function t(){try{return window.self!==window.top}catch(e){return!0}}function n(n){if(!b){if(n===!0&&(n={force:!0}),w=n||{},w.isMobileSafari=S,w.isBadStockAndroid=A,!w.ignoreVmax||w.force||C||(R=!1),C||!w.force&&!S&&!R&&!A&&!M&&(!w.hacks||!w.hacks.required(w)))return window.console&&C&&console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"),{init:function(){}};window.dispatchEvent(new I("viewport-units-buggyfill-init")),w.hacks&&w.hacks.initialize(w),b=!0,y=document.createElement("style"),y.id="patched-viewport",document[w.appendToBody?"body":"head"].appendChild(y),f(function(){var n=e(r,w.refreshDebounceWait||100);window.addEventListener("orientationchange",n,!0),window.addEventListener("pageshow",n,!0),(w.force||R||t())&&(window.addEventListener("resize",n,!0),w._listeningToResize=!0),w.hacks&&w.hacks.initializeEvents(w,r,n),r()})}}function i(){y.textContent=u(),y.parentNode.appendChild(y),window.dispatchEvent(new I("viewport-units-buggyfill-style"))}function r(){b&&(a(),setTimeout(function(){i()},1))}function o(e){try{if(!e.cssRules)return}catch(t){if("SecurityError"!==t.name)throw t;return}for(var n=[],i=0;i<e.cssRules.length;i++){var r=e.cssRules[i];n.push(r)}return n}function a(){return g=[],k.call(document.styleSheets,function(e){var t=o(e);t&&"patched-viewport"!==e.ownerNode.id&&"ignore"!==e.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(e.media&&e.media.mediaText&&window.matchMedia&&!window.matchMedia(e.media.mediaText).matches||k.call(t,s))}),g}function s(e){if(7===e.type){var t;try{t=e.cssText}catch(n){return}return E.lastIndex=0,void(E.test(t)&&!T.test(t)&&(g.push([e,null,t]),w.hacks&&w.hacks.findDeclarations(g,e,null,t)))}if(!e.style){if(!e.cssRules)return;return void k.call(e.cssRules,function(e){s(e)})}k.call(e.style,function(t){var n=e.style.getPropertyValue(t);e.style.getPropertyPriority(t)&&(n+=" !important"),E.lastIndex=0,E.test(n)&&(g.push([e,t,n]),w.hacks&&w.hacks.findDeclarations(g,e,t,n))})}function u(){m=l();var e,t,n=[],i=[];return g.forEach(function(r){var o=c.apply(null,r),a=o.selector.length?o.selector.join(" {\n")+" {\n":"",s=new Array(o.selector.length+1).join("\n}");return a&&a===e?(a&&!e&&(e=a,t=s),void i.push(o.content)):(i.length&&(n.push(e+i.join("\n")+t),i.length=0),void(a?(e=a,t=s,i.push(o.content)):(n.push(o.content),e=null,t=null)))}),i.length&&n.push(e+i.join("\n")+t),M&&n.push("* { content: normal !important; }"),n.join("\n\n")}function c(e,t,n){var i,r=[];i=n.replace(E,d),w.hacks&&(i=w.hacks.overwriteDeclaration(e,t,i)),t&&(r.push(e.selectorText),i=t+": "+i+";");for(var o=e.parentRule;o;)o.media?r.unshift("@media "+o.media.mediaText):o.conditionText&&r.unshift("@supports "+o.conditionText),o=o.parentRule;return{selector:r,content:i}}function d(e,t,n){var i=m[n],r=parseFloat(t)/100;return r*i+"px"}function l(){var e=window.innerHeight,t=window.innerWidth;return{vh:e,vw:t,vmax:Math.max(t,e),vmin:Math.min(t,e)}}function f(e){var t=0,n=function(){t--,t||e()};k.call(document.styleSheets,function(e){e.href&&h(e.href)!==h(location.href)&&"ignore"!==e.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(t++,p(e.ownerNode,n))}),t||e()}function h(e){return e.slice(0,e.indexOf("/",e.indexOf("://")+3))}function p(e,t){v(e.href,function(){var n=document.createElement("style");n.media=e.media,n.setAttribute("data-href",e.href),n.textContent=this.responseText,e.parentNode.replaceChild(n,e),t()},t)}function v(e,t,n){var i=new XMLHttpRequest;if("withCredentials"in i)i.open("GET",e,!0);else{if("undefined"==typeof XDomainRequest)throw new Error("cross-domain XHR not supported");i=new XDomainRequest,i.open("GET",e)}return i.onload=t,i.onerror=n,i.send(),i}var w,m,g,y,b=!1,x=window.navigator.userAgent,E=/([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,T=/(https?:)?\/\//,k=[].forEach,R=/MSIE [0-9]\./i.test(x),C=/MSIE [0-8]\./i.test(x),M=x.indexOf("Opera Mini")>-1,S=/(iPhone|iPod|iPad).+AppleWebKit/i.test(x)&&function(){var e=x.match(/OS (\d+)/);return e&&e.length>1&&parseInt(e[1])<10}(),A=function(){var e=x.indexOf(" Android ")>-1;if(!e)return!1;var t=x.indexOf("Version/")>-1;if(!t)return!1;var n=parseFloat((x.match("Android ([0-9.]+)")||[])[1]);return 4.4>=n}();R||(R=!!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./));try{new I("test")}catch(O){var I=function(e,t){var n;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};I.prototype=window.Event.prototype,window.CustomEvent=I}return{version:"0.6.1",findProperties:a,getCss:u,init:n,refresh:r}})}();;
! function( e, t ) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define( t ) : e.AOS = t()
}( this, function() {
	"use strict";
	var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
		t = "Expected a function",
		n = NaN,
		o = "[object Symbol]",
		i = /^\s+|\s+$/g,
		a = /^[-+]0x[0-9a-f]+$/i,
		r = /^0b[01]+$/i,
		c = /^0o[0-7]+$/i,
		s = parseInt,
		u = "object" == typeof e && e && e.Object === Object && e,
		d = "object" == typeof self && self && self.Object === Object && self,
		l = u || d || Function( "return this" )(),
		f = Object.prototype.toString,
		m = Math.max,
		p = Math.min,
		b = function() {
			return l.Date.now()
		};

	function v( e, n, o ) {
		var i, a, r, c, s, u, d = 0,
			l = !1,
			f = !1,
			v = !0;
		if ( "function" != typeof e ) throw new TypeError( t );

		function y( t ) {
			var n = i,
				o = a;
			return i = a = void 0, d = t, c = e.apply( o, n )
		}

		function h( e ) {
			var t = e - u;
			return void 0 === u || t >= n || t < 0 || f && e - d >= r
		}

		function k() {
			var e = b();
			if ( h( e ) ) return x( e );
			s = setTimeout( k, function( e ) {
				var t = n - ( e - u );
				return f ? p( t, r - ( e - d ) ) : t
			}( e ) )
		}

		function x( e ) {
			return s = void 0, v && i ? y( e ) : ( i = a = void 0, c )
		}

		function O() {
			var e = b(),
				t = h( e );
			if ( i = arguments, a = this, u = e, t ) {
				if ( void 0 === s ) return function( e ) {
					return d = e, s = setTimeout( k, n ), l ? y( e ) : c
				}( u );
				if ( f ) return s = setTimeout( k, n ), y( u )
			}
			return void 0 === s && ( s = setTimeout( k, n ) ), c
		}
		return n = w( n ) || 0, g( o ) && ( l = !!o.leading, r = ( f = "maxWait" in o ) ? m( w( o.maxWait ) || 0, n ) : r, v = "trailing" in o ? !!o.trailing : v ), O.cancel = function() {
			void 0 !== s && clearTimeout( s ), d = 0, i = u = a = s = void 0
		}, O.flush = function() {
			return void 0 === s ? c : x( b() )
		}, O
	}

	function g( e ) {
		var t = typeof e;
		return !!e && ( "object" == t || "function" == t )
	}

	function w( e ) {
		if ( "number" == typeof e ) return e;
		if ( function( e ) {
				return "symbol" == typeof e || function( e ) {
					return !!e && "object" == typeof e
				}( e ) && f.call( e ) == o
			}( e ) ) return n;
		if ( g( e ) ) {
			var t = "function" == typeof e.valueOf ? e.valueOf() : e;
			e = g( t ) ? t + "" : t
		}
		if ( "string" != typeof e ) return 0 === e ? e : +e;
		e = e.replace( i, "" );
		var u = r.test( e );
		return u || c.test( e ) ? s( e.slice( 2 ), u ? 2 : 8 ) : a.test( e ) ? n : +e
	}
	var y = function( e, n, o ) {
			var i = !0,
				a = !0;
			if ( "function" != typeof e ) throw new TypeError( t );
			return g( o ) && ( i = "leading" in o ? !!o.leading : i, a = "trailing" in o ? !!o.trailing : a ), v( e, n, {
				leading: i,
				maxWait: n,
				trailing: a
			} )
		},
		h = "Expected a function",
		k = NaN,
		x = "[object Symbol]",
		O = /^\s+|\s+$/g,
		j = /^[-+]0x[0-9a-f]+$/i,
		E = /^0b[01]+$/i,
		N = /^0o[0-7]+$/i,
		z = parseInt,
		C = "object" == typeof e && e && e.Object === Object && e,
		A = "object" == typeof self && self && self.Object === Object && self,
		q = C || A || Function( "return this" )(),
		L = Object.prototype.toString,
		T = Math.max,
		M = Math.min,
		S = function() {
			return q.Date.now()
		};

	function D( e ) {
		var t = typeof e;
		return !!e && ( "object" == t || "function" == t )
	}

	function H( e ) {
		if ( "number" == typeof e ) return e;
		if ( function( e ) {
				return "symbol" == typeof e || function( e ) {
					return !!e && "object" == typeof e
				}( e ) && L.call( e ) == x
			}( e ) ) return k;
		if ( D( e ) ) {
			var t = "function" == typeof e.valueOf ? e.valueOf() : e;
			e = D( t ) ? t + "" : t
		}
		if ( "string" != typeof e ) return 0 === e ? e : +e;
		e = e.replace( O, "" );
		var n = E.test( e );
		return n || N.test( e ) ? z( e.slice( 2 ), n ? 2 : 8 ) : j.test( e ) ? k : +e
	}
	var $ = function( e, t, n ) {
			var o, i, a, r, c, s, u = 0,
				d = !1,
				l = !1,
				f = !0;
			if ( "function" != typeof e ) throw new TypeError( h );

			function m( t ) {
				var n = o,
					a = i;
				return o = i = void 0, u = t, r = e.apply( a, n )
			}

			function p( e ) {
				var n = e - s;
				return void 0 === s || n >= t || n < 0 || l && e - u >= a
			}

			function b() {
				var e = S();
				if ( p( e ) ) return v( e );
				c = setTimeout( b, function( e ) {
					var n = t - ( e - s );
					return l ? M( n, a - ( e - u ) ) : n
				}( e ) )
			}

			function v( e ) {
				return c = void 0, f && o ? m( e ) : ( o = i = void 0, r )
			}

			function g() {
				var e = S(),
					n = p( e );
				if ( o = arguments, i = this, s = e, n ) {
					if ( void 0 === c ) return function( e ) {
						return u = e, c = setTimeout( b, t ), d ? m( e ) : r
					}( s );
					if ( l ) return c = setTimeout( b, t ), m( s )
				}
				return void 0 === c && ( c = setTimeout( b, t ) ), r
			}
			return t = H( t ) || 0, D( n ) && ( d = !!n.leading, a = ( l = "maxWait" in n ) ? T( H( n.maxWait ) || 0, t ) : a, f = "trailing" in n ? !!n.trailing : f ), g.cancel = function() {
				void 0 !== c && clearTimeout( c ), u = 0, o = s = i = c = void 0
			}, g.flush = function() {
				return void 0 === c ? r : v( S() )
			}, g
		},
		W = function() {};

	function P( e ) {
		e && e.forEach( function( e ) {
			var t = Array.prototype.slice.call( e.addedNodes ),
				n = Array.prototype.slice.call( e.removedNodes );
			if ( function e( t ) {
					var n = void 0,
						o = void 0;
					for ( n = 0; n < t.length; n += 1 ) {
						if ( ( o = t[ n ] ).dataset && o.dataset.aos ) return !0;
						if ( o.children && e( o.children ) ) return !0
					}
					return !1
				}( t.concat( n ) ) ) return W()
		} )
	}

	function Y() {
		return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
	}
	var _ = {
			isSupported: function() {
				return !!Y()
			},
			ready: function( e, t ) {
				var n = window.document,
					o = new( Y() )( P );
				W = t, o.observe( n.documentElement, {
					childList: !0,
					subtree: !0,
					removedNodes: !0
				} )
			}
		},
		B = function( e, t ) {
			if ( !( e instanceof t ) ) throw new TypeError( "Cannot call a class as a function" )
		},
		F = function() {
			function e( e, t ) {
				for ( var n = 0; n < t.length; n++ ) {
					var o = t[ n ];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && ( o.writable = !0 ), Object.defineProperty( e, o.key, o )
				}
			}
			return function( t, n, o ) {
				return n && e( t.prototype, n ), o && e( t, o ), t
			}
		}(),
		I = Object.assign || function( e ) {
			for ( var t = 1; t < arguments.length; t++ ) {
				var n = arguments[ t ];
				for ( var o in n ) Object.prototype.hasOwnProperty.call( n, o ) && ( e[ o ] = n[ o ] )
			}
			return e
		},
		K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
		G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
		J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
		Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

	function R() {
		return navigator.userAgent || navigator.vendor || window.opera || ""
	}
	var U = new( function() {
			function e() {
				B( this, e )
			}
			return F( e, [ {
				key: "phone",
				value: function() {
					var e = R();
					return !( !K.test( e ) && !G.test( e.substr( 0, 4 ) ) )
				}
			}, {
				key: "mobile",
				value: function() {
					var e = R();
					return !( !J.test( e ) && !Q.test( e.substr( 0, 4 ) ) )
				}
			}, {
				key: "tablet",
				value: function() {
					return this.mobile() && !this.phone()
				}
			}, {
				key: "ie11",
				value: function() {
					return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style
				}
			} ] ), e
		}() ),
		V = function( e, t ) {
			var n = void 0;
			return U.ie11() ? ( n = document.createEvent( "CustomEvent" ) ).initCustomEvent( e, !0, !0, {
				detail: t
			} ) : n = new CustomEvent( e, {
				detail: t
			} ), document.dispatchEvent( n )
		},
		X = function( e ) {
			return e.forEach( function( e, t ) {
				return function( e, t ) {
					var n = e.options,
						o = e.position,
						i = e.node,
						a = ( e.data, function() {
							e.animated && ( function( e, t ) {
								t && t.forEach( function( t ) {
									return e.classList.remove( t )
								} )
							}( i, n.animatedClassNames ), V( "aos:out", i ), e.options.id && V( "aos:in:" + e.options.id, i ), e.animated = !1 )
						} );
					n.mirror && t >= o.out && !n.once ? a() : t >= o.in ? e.animated || ( function( e, t ) {
						t && t.forEach( function( t ) {
							return e.classList.add( t )
						} )
					}( i, n.animatedClassNames ), V( "aos:in", i ), e.options.id && V( "aos:in:" + e.options.id, i ), e.animated = !0 ) : e.animated && !n.once && a()
				}( e, window.pageYOffset )
			} )
		},
		Z = function( e ) {
			for ( var t = 0, n = 0; e && !isNaN( e.offsetLeft ) && !isNaN( e.offsetTop ); ) t += e.offsetLeft - ( "BODY" != e.tagName ? e.scrollLeft : 0 ), n += e.offsetTop - ( "BODY" != e.tagName ? e.scrollTop : 0 ), e = e.offsetParent;
			return {
				top: n,
				left: t
			}
		},
		ee = function( e, t, n ) {
			var o = e.getAttribute( "data-aos-" + t );
			if ( void 0 !== o ) {
				if ( "true" === o ) return !0;
				if ( "false" === o ) return !1
			}
			return o || n
		},
		te = function( e, t ) {
			return e.forEach( function( e, n ) {
				var o = ee( e.node, "mirror", t.mirror ),
					i = ee( e.node, "once", t.once ),
					a = ee( e.node, "id" ),
					r = t.useClassNames && e.node.getAttribute( "data-aos" ),
					c = [ t.animatedClassName ].concat( r ? r.split( " " ) : [] ).filter( function( e ) {
						return "string" == typeof e
					} );
				t.initClassName && e.node.classList.add( t.initClassName ), e.position = { in: function( e, t, n ) {
						var o = window.innerHeight,
							i = ee( e, "anchor" ),
							a = ee( e, "anchor-placement" ),
							r = Number( ee( e, "offset", a ? 0 : t ) ),
							c = a || n,
							s = e;
						i && document.querySelectorAll( i ) && ( s = document.querySelectorAll( i )[ 0 ] );
						var u = Z( s ).top - o;
						switch ( c ) {
							case "top-bottom":
								break;
							case "center-bottom":
								u += s.offsetHeight / 2;
								break;
							case "bottom-bottom":
								u += s.offsetHeight;
								break;
							case "top-center":
								u += o / 2;
								break;
							case "center-center":
								u += o / 2 + s.offsetHeight / 2;
								break;
							case "bottom-center":
								u += o / 2 + s.offsetHeight;
								break;
							case "top-top":
								u += o;
								break;
							case "bottom-top":
								u += o + s.offsetHeight;
								break;
							case "center-top":
								u += o + s.offsetHeight / 2
						}
						return u + r
					}( e.node, t.offset, t.anchorPlacement ),
					out: o && function( e, t ) {
						window.innerHeight;
						var n = ee( e, "anchor" ),
							o = ee( e, "offset", t ),
							i = e;
						return n && document.querySelectorAll( n ) && ( i = document.querySelectorAll( n )[ 0 ] ), Z( i ).top + i.offsetHeight - o
					}( e.node, t.offset )
				}, e.options = {
					once: i,
					mirror: o,
					animatedClassNames: c,
					id: a
				}
			} ), e
		},
		ne = function() {
			var e = document.querySelectorAll( "[data-aos]" );
			return Array.prototype.map.call( e, function( e ) {
				return {
					node: e
				}
			} )
		},
		oe = [],
		ie = !1,
		ae = {
			offset: 120,
			delay: 0,
			easing: "ease",
			duration: 400,
			disable: !1,
			once: !1,
			mirror: !1,
			anchorPlacement: "top-bottom",
			startEvent: "DOMContentLoaded",
			animatedClassName: "aos-animate",
			initClassName: "aos-init",
			useClassNames: !1,
			disableMutationObserver: !1,
			throttleDelay: 99,
			debounceDelay: 50
		},
		re = function() {
			return document.all && !window.atob
		},
		ce = function() {
			arguments.length > 0 && void 0 !== arguments[ 0 ] && arguments[ 0 ] && ( ie = !0 ), ie && ( oe = te( oe, ae ), X( oe ), window.addEventListener( "scroll", y( function() {
				X( oe, ae.once )
			}, ae.throttleDelay ) ) )
		},
		se = function() {
			if ( oe = ne(), de( ae.disable ) || re() ) return ue();
			ce()
		},
		ue = function() {
			oe.forEach( function( e, t ) {
				e.node.removeAttribute( "data-aos" ), e.node.removeAttribute( "data-aos-easing" ), e.node.removeAttribute( "data-aos-duration" ), e.node.removeAttribute( "data-aos-delay" ), ae.initClassName && e.node.classList.remove( ae.initClassName ), ae.animatedClassName && e.node.classList.remove( ae.animatedClassName )
			} )
		},
		de = function( e ) {
			return !0 === e || "mobile" === e && U.mobile() || "phone" === e && U.phone() || "tablet" === e && U.tablet() || "function" == typeof e && !0 === e()
		};
	return {
		init: function( e ) {
			return ae = I( ae, e ), oe = ne(), ae.disableMutationObserver || _.isSupported() || ( console.info( '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    ' ), ae.disableMutationObserver = !0 ), ae.disableMutationObserver || _.ready( "[data-aos]", se ), de( ae.disable ) || re() ? ue() : ( document.querySelector( "body" ).setAttribute( "data-aos-easing", ae.easing ), document.querySelector( "body" ).setAttribute( "data-aos-duration", ae.duration ), document.querySelector( "body" ).setAttribute( "data-aos-delay", ae.delay ), -1 === [ "DOMContentLoaded", "load" ].indexOf( ae.startEvent ) ? document.addEventListener( ae.startEvent, function() {
				ce( !0 )
			} ) : window.addEventListener( "load", function() {
				ce( !0 )
			} ), "DOMContentLoaded" === ae.startEvent && [ "complete", "interactive" ].indexOf( document.readyState ) > -1 && ce( !0 ), window.addEventListener( "resize", $( ce, ae.debounceDelay, !0 ) ), window.addEventListener( "orientationchange", $( ce, ae.debounceDelay, !0 ) ), oe )
		},
		refresh: ce,
		refreshHard: se
	}
} );