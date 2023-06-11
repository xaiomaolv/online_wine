! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function (t) {
  "use strict";
var canvas
  function e(t, e) {
    function n() {
      this.constructor = t
    }
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Hv(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  }

  function n(t, e) {
    var n = e.browser,
      i = t.match(/Firefox\/([\d.]+)/),
      r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
      o = t.match(/Edge?\/([\d.]+)/),
      a = /micromessenger/i.test(t);
    i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), o && (n.edge = !0, n.version = o[1], n.newEdge = +o[1].split(".")[0] > 18), a && (n.weChat = !0), e.svgSupported = "undefined" != typeof SVGRect, e.touchEventsSupported = "ontouchstart" in window && !n.ie && !n.edge, e.pointerEventsSupported = "onpointerdown" in window && (n.edge || n.ie && +n.version >= 11), e.domSupported = "undefined" != typeof document;
    var s = document.documentElement.style;
    e.transform3dSupported = (n.ie && "transition" in s || n.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix || "MozPerspective" in s) && !("OTransition" in s), e.transformSupported = e.transform3dSupported || n.ie && +n.version >= 9
  }

  function i(t) {
    var e = {};
    if ("undefined" == typeof JSON) return e;
    for (var n = 0; n < t.length; n++) {
      var i = String.fromCharCode(n + 32),
        r = (t.charCodeAt(n) - qv) / jv;
      e[i] = r
    }
    return e
  }

  function r(t) {
    for (var e in $v) t[e] && ($v[e] = t[e])
  }

  function o() {
    return uy++
  }

  function a() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    "undefined" != typeof console && console.error.apply(console, t)
  }

  function s(t) {
    if (null == t || "object" != typeof t) return t;
    var e = t,
      n = ty.call(t);
    if ("[object Array]" === n) {
      if (!X(t)) {
        e = [];
        for (var i = 0, r = t.length; r > i; i++) e[i] = s(t[i])
      }
    } else if (Jv[n]) {
      if (!X(t)) {
        var o = t.constructor;
        if (o.from) e = o.from(t);
        else {
          e = new o(t.length);
          for (var i = 0, r = t.length; r > i; i++) e[i] = t[i]
        }
      }
    } else if (!Qv[n] && !X(t) && !L(t)) {
      e = {};
      for (var a in t) t.hasOwnProperty(a) && a !== ly && (e[a] = s(t[a]))
    }
    return e
  }

  function l(t, e, n) {
    if (!D(e) || !D(t)) return n ? s(e) : t;
    for (var i in e)
      if (e.hasOwnProperty(i) && i !== ly) {
        var r = t[i],
          o = e[i];
        !D(o) || !D(r) || M(o) || M(r) || L(o) || L(r) || A(o) || A(r) || X(o) || X(r) ? !n && i in t || (t[i] = s(e[i])) : l(r, o, n)
      } return t
  }

  function u(t, e) {
    for (var n = t[0], i = 1, r = t.length; r > i; i++) n = l(n, t[i], e);
    return n
  }

  function h(t, e) {
    if (Object.assign) Object.assign(t, e);
    else
      for (var n in e) e.hasOwnProperty(n) && n !== ly && (t[n] = e[n]);
    return t
  }

  function c(t, e, n) {
    for (var i = w(e), r = 0; r < i.length; r++) {
      var o = i[r];
      (n ? null != e[o] : null == t[o]) && (t[o] = e[o])
    }
    return t
  }

  function p(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);
      for (var n = 0, i = t.length; i > n; n++)
        if (t[n] === e) return n
    }
    return -1
  }

  function f(t, e) {
    function n() {}
    var i = t.prototype;
    n.prototype = e.prototype, t.prototype = new n;
    for (var r in i) i.hasOwnProperty(r) && (t.prototype[r] = i[r]);
    t.prototype.constructor = t, t.superClass = e
  }

  function d(t, e, n) {
    if (t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, Object.getOwnPropertyNames)
      for (var i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) {
        var o = i[r];
        "constructor" !== o && (n ? null != e[o] : null == t[o]) && (t[o] = e[o])
      } else c(t, e, n)
  }

  function g(t) {
    return t ? "string" == typeof t ? !1 : "number" == typeof t.length : !1
  }

  function v(t, e, n) {
    if (t && e)
      if (t.forEach && t.forEach === ny) t.forEach(e, n);
      else if (t.length === +t.length)
      for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t);
    else
      for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
  }

  function y(t, e, n) {
    if (!t) return [];
    if (!e) return H(t);
    if (t.map && t.map === oy) return t.map(e, n);
    for (var i = [], r = 0, o = t.length; o > r; r++) i.push(e.call(n, t[r], r, t));
    return i
  }

  function m(t, e, n, i) {
    if (t && e) {
      for (var r = 0, o = t.length; o > r; r++) n = e.call(i, n, t[r], r, t);
      return n
    }
  }

  function _(t, e, n) {
    if (!t) return [];
    if (!e) return H(t);
    if (t.filter && t.filter === iy) return t.filter(e, n);
    for (var i = [], r = 0, o = t.length; o > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
    return i
  }

  function x(t, e, n) {
    if (t && e)
      for (var i = 0, r = t.length; r > i; i++)
        if (e.call(n, t[i], i, t)) return t[i]
  }

  function w(t) {
    if (!t) return [];
    if (Object.keys) return Object.keys(t);
    var e = [];
    for (var n in t) t.hasOwnProperty(n) && e.push(n);
    return e
  }

  function b(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    return function () {
      return t.apply(e, n.concat(ry.call(arguments)))
    }
  }

  function S(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return function () {
      return t.apply(this, e.concat(ry.call(arguments)))
    }
  }

  function M(t) {
    return Array.isArray ? Array.isArray(t) : "[object Array]" === ty.call(t)
  }

  function T(t) {
    return "function" == typeof t
  }

  function C(t) {
    return "string" == typeof t
  }

  function I(t) {
    return "[object String]" === ty.call(t)
  }

  function k(t) {
    return "number" == typeof t
  }

  function D(t) {
    var e = typeof t;
    return "function" === e || !!t && "object" === e
  }

  function A(t) {
    return !!Qv[ty.call(t)]
  }

  function P(t) {
    return !!Jv[ty.call(t)]
  }

  function L(t) {
    return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
  }

  function O(t) {
    return null != t.colorStops
  }

  function R(t) {
    return null != t.image
  }

  function B(t) {
    return "[object RegExp]" === ty.call(t)
  }

  function z(t) {
    return t !== t
  }

  function E() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = 0, i = t.length; i > n; n++)
      if (null != t[n]) return t[n]
  }

  function N(t, e) {
    return null != t ? t : e
  }

  function F(t, e, n) {
    return null != t ? t : null != e ? e : n
  }

  function H(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return ry.apply(t, e)
  }

  function V(t) {
    if ("number" == typeof t) return [t, t, t, t];
    var e = t.length;
    return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
  }

  function W(t, e) {
    if (!t) throw new Error(e)
  }

  function G(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  }

  function U(t) {
    t[py] = !0
  }

  function X(t) {
    return t[py]
  }

  function Y(t) {
    return new fy(t)
  }

  function q(t, e) {
    for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
    for (var r = t.length, i = 0; i < e.length; i++) n[i + r] = e[i];
    return n
  }

  function j(t, e) {
    var n;
    if (Object.create) n = Object.create(t);
    else {
      var i = function () {};
      i.prototype = t, n = new i
    }
    return e && h(n, e), n
  }

  function Z(t) {
    var e = t.style;
    e.webkitUserSelect = "none", e.userSelect = "none", e.webkitTapHighlightColor = "rgba(0,0,0,0)", e["-webkit-touch-callout"] = "none"
  }

  function K(t, e) {
    return t.hasOwnProperty(e)
  }

  function $() {}

  function Q(t, e) {
    return null == t && (t = 0), null == e && (e = 0), [t, e]
  }

  function J(t, e) {
    return t[0] = e[0], t[1] = e[1], t
  }

  function te(t) {
    return [t[0], t[1]]
  }

  function ee(t, e, n) {
    return t[0] = e, t[1] = n, t
  }

  function ne(t, e, n) {
    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
  }

  function ie(t, e, n, i) {
    return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
  }

  function re(t, e, n) {
    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
  }

  function oe(t) {
    return Math.sqrt(ae(t))
  }

  function ae(t) {
    return t[0] * t[0] + t[1] * t[1]
  }

  function se(t, e, n) {
    return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
  }

  function le(t, e, n) {
    return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
  }

  function ue(t, e) {
    return t[0] * e[0] + t[1] * e[1]
  }

  function he(t, e, n) {
    return t[0] = e[0] * n, t[1] = e[1] * n, t
  }

  function ce(t, e) {
    var n = oe(e);
    return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
  }

  function pe(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
  }

  function fe(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
  }

  function de(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t
  }

  function ge(t, e, n, i) {
    return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
  }

  function ve(t, e, n) {
    var i = e[0],
      r = e[1];
    return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
  }

  function ye(t, e, n) {
    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
  }

  function me(t, e, n) {
    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
  }

  function _e(t, e, n, i, r, o) {
    var a = i + "-" + r,
      s = t.length;
    if (o.hasOwnProperty(a)) return o[a];
    if (1 === e) {
      var l = Math.round(Math.log((1 << s) - 1 & ~r) / My);
      return t[n][l]
    }
    for (var u = i | 1 << n, h = n + 1; i & 1 << h;) h++;
    for (var c = 0, p = 0, f = 0; s > p; p++) {
      var d = 1 << p;
      d & r || (c += (f % 2 ? -1 : 1) * t[n][p] * _e(t, e - 1, h, u, r | d, o), f++)
    }
    return o[a] = c, c
  }

  function xe(t, e) {
    var n = [
        [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
        [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
        [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
        [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
        [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
        [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
        [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
        [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]
      ],
      i = {},
      r = _e(n, 8, 0, 0, 0, i);
    if (0 !== r) {
      for (var o = [], a = 0; 8 > a; a++)
        for (var s = 0; 8 > s; s++) null == o[s] && (o[s] = 0), o[s] += ((a + s) % 2 ? -1 : 1) * _e(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i) / r * e[a];
      return function (t, e, n) {
        var i = e * o[6] + n * o[7] + 1;
        t[0] = (e * o[0] + n * o[1] + o[2]) / i, t[1] = (e * o[3] + n * o[4] + o[5]) / i
      }
    }
  }

  function we(t, e, n, i, r) {
    return be(Cy, e, i, r, !0) && be(t, n, Cy[0], Cy[1])
  }

  function be(t, e, n, i, r) {
    if (e.getBoundingClientRect && Gv.domSupported && !Te(e)) {
      var o = e[Ty] || (e[Ty] = {}),
        a = Se(e, o),
        s = Me(a, o, r);
      if (s) return s(t, n, i), !0
    }
    return !1
  }

  function Se(t, e) {
    var n = e.markers;
    if (n) return n;
    n = e.markers = [];
    for (var i = ["left", "right"], r = ["top", "bottom"], o = 0; 4 > o; o++) {
      var a = document.createElement("div"),
        s = a.style,
        l = o % 2,
        u = (o >> 1) % 2;
      s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i[l] + ":0", r[u] + ":0", i[1 - l] + ":auto", r[1 - u] + ":auto", ""].join("!important;"), t.appendChild(a), n.push(a)
    }
    return n
  }

  function Me(t, e, n) {
    for (var i = n ? "invTrans" : "trans", r = e[i], o = e.srcCoords, a = [], s = [], l = !0, u = 0; 4 > u; u++) {
      var h = t[u].getBoundingClientRect(),
        c = 2 * u,
        p = h.left,
        f = h.top;
      a.push(p, f), l = l && o && p === o[c] && f === o[c + 1], s.push(t[u].offsetLeft, t[u].offsetTop)
    }
    return l && r ? r : (e.srcCoords = a, e[i] = n ? xe(s, a) : xe(a, s))
  }

  function Te(t) {
    return "CANVAS" === t.nodeName.toUpperCase()
  }

  function Ce(t, e, n, i) {
    return n = n || {}, i ? Ie(t, e, n) : Dy && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : Ie(t, e, n), n
  }

  function Ie(t, e, n) {
    if (Gv.domSupported && t.getBoundingClientRect) {
      var i = e.clientX,
        r = e.clientY;
      if (Te(t)) {
        var o = t.getBoundingClientRect();
        return n.zrX = i - o.left, void(n.zrY = r - o.top)
      }
      if (be(ky, t, i, r)) return n.zrX = ky[0], void(n.zrY = ky[1])
    }
    n.zrX = n.zrY = 0
  }

  function ke(t) {
    return t || window.event
  }

  function De(t, e, n) {
    if (e = ke(e), null != e.zrX) return e;
    var i = e.type,
      r = i && i.indexOf("touch") >= 0;
    if (r) {
      var o = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];
      o && Ce(t, o, e, n)
    } else {
      Ce(t, e, e, n);
      var a = Ae(e);
      e.zrDelta = a ? a / 120 : -(e.detail || 0) / 3
    }
    var s = e.button;
    return null == e.which && void 0 !== s && Iy.test(e.type) && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
  }

  function Ae(t) {
    var e = t.wheelDelta;
    if (e) return e;
    var n = t.deltaX,
      i = t.deltaY;
    if (null == n || null == i) return e;
    var r = Math.abs(0 !== i ? i : n),
      o = i > 0 ? -1 : 0 > i ? 1 : n > 0 ? -1 : 1;
    return 3 * r * o
  }

  function Pe(t, e, n, i) {
    t.addEventListener(e, n, i)
  }

  function Le(t, e, n, i) {
    t.removeEventListener(e, n, i)
  }

  function Oe(t) {
    var e = t[1][0] - t[0][0],
      n = t[1][1] - t[0][1];
    return Math.sqrt(e * e + n * n)
  }

  function Re(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
  }

  function Be(t, e, n) {
    return {
      type: t,
      event: n,
      target: e.target,
      topTarget: e.topTarget,
      cancelBubble: !1,
      offsetX: n.zrX,
      offsetY: n.zrY,
      gestureEvent: n.gestureEvent,
      pinchX: n.pinchX,
      pinchY: n.pinchY,
      pinchScale: n.pinchScale,
      wheelDelta: n.zrDelta,
      zrByTouch: n.zrByTouch,
      which: n.which,
      stop: ze
    }
  }

  function ze() {
    Ay(this.event)
  }

  function Ee(t, e, n) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
      for (var i = t, r = void 0, o = !1; i;) {
        if (i.ignoreClip && (o = !0), !o) {
          var a = i.getClipPath();
          if (a && !a.contain(e, n)) return !1;
          i.silent && (r = !0)
        }
        var s = i.__hostTarget;
        i = s ? s : i.parent
      }
      return r ? Oy : !0
    }
    return !1
  }

  function Ne(t, e, n) {
    var i = t.painter;
    return 0 > e || e > i.getWidth() || 0 > n || n > i.getHeight()
  }

  function Fe(t) {
    for (var e = 0; t >= Fy;) e |= 1 & t, t >>= 1;
    return t + e
  }

  function He(t, e, n, i) {
    var r = e + 1;
    if (r === n) return 1;
    if (i(t[r++], t[e]) < 0) {
      for (; n > r && i(t[r], t[r - 1]) < 0;) r++;
      Ve(t, e, r)
    } else
      for (; n > r && i(t[r], t[r - 1]) >= 0;) r++;
    return r - e
  }

  function Ve(t, e, n) {
    for (n--; n > e;) {
      var i = t[e];
      t[e++] = t[n], t[n--] = i
    }
  }

  function We(t, e, n, i, r) {
    for (i === e && i++; n > i; i++) {
      for (var o, a = t[i], s = e, l = i; l > s;) o = s + l >>> 1, r(a, t[o]) < 0 ? l = o : s = o + 1;
      var u = i - s;
      switch (u) {
        case 3:
          t[s + 3] = t[s + 2];
        case 2:
          t[s + 2] = t[s + 1];
        case 1:
          t[s + 1] = t[s];
          break;
        default:
          for (; u > 0;) t[s + u] = t[s + u - 1], u--
      }
      t[s] = a
    }
  }

  function Ge(t, e, n, i, r, o) {
    var a = 0,
      s = 0,
      l = 1;
    if (o(t, e[n + r]) > 0) {
      for (s = i - r; s > l && o(t, e[n + r + l]) > 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s), a += r, l += r
    } else {
      for (s = r + 1; s > l && o(t, e[n + r - l]) <= 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s);
      var u = a;
      a = r - l, l = r - u
    }
    for (a++; l > a;) {
      var h = a + (l - a >>> 1);
      o(t, e[n + h]) > 0 ? a = h + 1 : l = h
    }
    return l
  }

  function Ue(t, e, n, i, r, o) {
    var a = 0,
      s = 0,
      l = 1;
    if (o(t, e[n + r]) < 0) {
      for (s = r + 1; s > l && o(t, e[n + r - l]) < 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s);
      var u = a;
      a = r - l, l = r - u
    } else {
      for (s = i - r; s > l && o(t, e[n + r + l]) >= 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s), a += r, l += r
    }
    for (a++; l > a;) {
      var h = a + (l - a >>> 1);
      o(t, e[n + h]) < 0 ? l = h : a = h + 1
    }
    return l
  }

  function Xe(t, e) {
    function n(t, e) {
      l[c] = t, u[c] = e, c += 1
    }

    function i() {
      for (; c > 1;) {
        var t = c - 2;
        if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--;
        else if (u[t] > u[t + 1]) break;
        o(t)
      }
    }

    function r() {
      for (; c > 1;) {
        var t = c - 2;
        t > 0 && u[t - 1] < u[t + 1] && t--, o(t)
      }
    }

    function o(n) {
      var i = l[n],
        r = u[n],
        o = l[n + 1],
        h = u[n + 1];
      u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;
      var p = Ue(t[o], t, i, r, 0, e);
      i += p, r -= p, 0 !== r && (h = Ge(t[i + r - 1], t, o, h, h - 1, e), 0 !== h && (h >= r ? a(i, r, o, h) : s(i, r, o, h)))
    }

    function a(n, i, r, o) {
      var a = 0;
      for (a = 0; i > a; a++) p[a] = t[n + a];
      var s = 0,
        l = r,
        u = n;
      if (t[u++] = t[l++], 0 !== --o) {
        if (1 === i) {
          for (a = 0; o > a; a++) t[u + a] = t[l + a];
          return void(t[u + o] = p[s])
        }
        for (var c, f, d, g = h;;) {
          c = 0, f = 0, d = !1;
          do
            if (e(t[l], p[s]) < 0) {
              if (t[u++] = t[l++], f++, c = 0, 0 === --o) {
                d = !0;
                break
              }
            } else if (t[u++] = p[s++], c++, f = 0, 1 === --i) {
            d = !0;
            break
          } while (g > (c | f));
          if (d) break;
          do {
            if (c = Ue(t[l], p, s, i, 0, e), 0 !== c) {
              for (a = 0; c > a; a++) t[u + a] = p[s + a];
              if (u += c, s += c, i -= c, 1 >= i) {
                d = !0;
                break
              }
            }
            if (t[u++] = t[l++], 0 === --o) {
              d = !0;
              break
            }
            if (f = Ge(p[s], t, l, o, 0, e), 0 !== f) {
              for (a = 0; f > a; a++) t[u + a] = t[l + a];
              if (u += f, l += f, o -= f, 0 === o) {
                d = !0;
                break
              }
            }
            if (t[u++] = p[s++], 1 === --i) {
              d = !0;
              break
            }
            g--
          } while (c >= Hy || f >= Hy);
          if (d) break;
          0 > g && (g = 0), g += 2
        }
        if (h = g, 1 > h && (h = 1), 1 === i) {
          for (a = 0; o > a; a++) t[u + a] = t[l + a];
          t[u + o] = p[s]
        } else {
          if (0 === i) throw new Error;
          for (a = 0; i > a; a++) t[u + a] = p[s + a]
        }
      } else
        for (a = 0; i > a; a++) t[u + a] = p[s + a]
    }

    function s(n, i, r, o) {
      var a = 0;
      for (a = 0; o > a; a++) p[a] = t[r + a];
      var s = n + i - 1,
        l = o - 1,
        u = r + o - 1,
        c = 0,
        f = 0;
      if (t[u--] = t[s--], 0 !== --i) {
        if (1 === o) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, a = i - 1; a >= 0; a--) t[f + a] = t[c + a];
          return void(t[u] = p[l])
        }
        for (var d = h;;) {
          var g = 0,
            v = 0,
            y = !1;
          do
            if (e(p[l], t[s]) < 0) {
              if (t[u--] = t[s--], g++, v = 0, 0 === --i) {
                y = !0;
                break
              }
            } else if (t[u--] = p[l--], v++, g = 0, 1 === --o) {
            y = !0;
            break
          } while (d > (g | v));
          if (y) break;
          do {
            if (g = i - Ue(p[l], t, n, i, i - 1, e), 0 !== g) {
              for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, a = g - 1; a >= 0; a--) t[f + a] = t[c + a];
              if (0 === i) {
                y = !0;
                break
              }
            }
            if (t[u--] = p[l--], 1 === --o) {
              y = !0;
              break
            }
            if (v = o - Ge(t[s], p, 0, o, o - 1, e), 0 !== v) {
              for (u -= v, l -= v, o -= v, f = u + 1, c = l + 1, a = 0; v > a; a++) t[f + a] = p[c + a];
              if (1 >= o) {
                y = !0;
                break
              }
            }
            if (t[u--] = t[s--], 0 === --i) {
              y = !0;
              break
            }
            d--
          } while (g >= Hy || v >= Hy);
          if (y) break;
          0 > d && (d = 0), d += 2
        }
        if (h = d, 1 > h && (h = 1), 1 === o) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, a = i - 1; a >= 0; a--) t[f + a] = t[c + a];
          t[u] = p[l]
        } else {
          if (0 === o) throw new Error;
          for (c = u - (o - 1), a = 0; o > a; a++) t[c + a] = p[a]
        }
      } else
        for (c = u - (o - 1), a = 0; o > a; a++) t[c + a] = p[a]
    }
    var l, u, h = Hy,
      c = 0,
      p = [];
    return l = [], u = [], {
      mergeRuns: i,
      forceMergeRuns: r,
      pushRun: n
    }
  }

  function Ye(t, e, n, i) {
    n || (n = 0), i || (i = t.length);
    var r = i - n;
    if (!(2 > r)) {
      var o = 0;
      if (Fy > r) return o = He(t, n, i, e), void We(t, n, i, n + o, e);
      var a = Xe(t, e),
        s = Fe(r);
      do {
        if (o = He(t, n, i, e), s > o) {
          var l = r;
          l > s && (l = s), We(t, n, n + l, n + o, e), o = l
        }
        a.pushRun(n, o), a.mergeRuns(), r -= o, n += o
      } while (0 !== r);
      a.forceMergeRuns()
    }
  }

  function qe() {
    Uy || (Uy = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"))
  }

  function je(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
  }

  function Ze(t) {
    return t > -Ky && Ky > t
  }

  function Ke(t) {
    return t > Ky || -Ky > t
  }

  function $e(t, e, n, i, r) {
    var o = 1 - r;
    return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n)
  }

  function Qe(t, e, n, i, r) {
    var o = 1 - r;
    return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r)
  }

  function Je(t, e, n, i, r, o) {
    var a = i + 3 * (e - n) - t,
      s = 3 * (n - 2 * e + t),
      l = 3 * (e - t),
      u = t - r,
      h = s * s - 3 * a * l,
      c = s * l - 9 * a * u,
      p = l * l - 3 * s * u,
      f = 0;
    if (Ze(h) && Ze(c))
      if (Ze(s)) o[0] = 0;
      else {
        var d = -l / s;
        d >= 0 && 1 >= d && (o[f++] = d)
      }
    else {
      var g = c * c - 4 * h * p;
      if (Ze(g)) {
        var v = c / h,
          d = -s / a + v,
          y = -v / 2;
        d >= 0 && 1 >= d && (o[f++] = d), y >= 0 && 1 >= y && (o[f++] = y)
      } else if (g > 0) {
        var m = Zy(g),
          _ = h * s + 1.5 * a * (-c + m),
          x = h * s + 1.5 * a * (-c - m);
        _ = 0 > _ ? -jy(-_, Jy) : jy(_, Jy), x = 0 > x ? -jy(-x, Jy) : jy(x, Jy);
        var d = (-s - (_ + x)) / (3 * a);
        d >= 0 && 1 >= d && (o[f++] = d)
      } else {
        var w = (2 * h * s - 3 * a * c) / (2 * Zy(h * h * h)),
          b = Math.acos(w) / 3,
          S = Zy(h),
          M = Math.cos(b),
          d = (-s - 2 * S * M) / (3 * a),
          y = (-s + S * (M + Qy * Math.sin(b))) / (3 * a),
          T = (-s + S * (M - Qy * Math.sin(b))) / (3 * a);
        d >= 0 && 1 >= d && (o[f++] = d), y >= 0 && 1 >= y && (o[f++] = y), T >= 0 && 1 >= T && (o[f++] = T)
      }
    }
    return f
  }

  function tn(t, e, n, i, r) {
    var o = 6 * n - 12 * e + 6 * t,
      a = 9 * e + 3 * i - 3 * t - 9 * n,
      s = 3 * e - 3 * t,
      l = 0;
    if (Ze(a)) {
      if (Ke(o)) {
        var u = -s / o;
        u >= 0 && 1 >= u && (r[l++] = u)
      }
    } else {
      var h = o * o - 4 * a * s;
      if (Ze(h)) r[0] = -o / (2 * a);
      else if (h > 0) {
        var c = Zy(h),
          u = (-o + c) / (2 * a),
          p = (-o - c) / (2 * a);
        u >= 0 && 1 >= u && (r[l++] = u), p >= 0 && 1 >= p && (r[l++] = p)
      }
    }
    return l
  }

  function en(t, e, n, i, r, o) {
    var a = (e - t) * r + t,
      s = (n - e) * r + e,
      l = (i - n) * r + n,
      u = (s - a) * r + a,
      h = (l - s) * r + s,
      c = (h - u) * r + u;
    o[0] = t, o[1] = a, o[2] = u, o[3] = c, o[4] = c, o[5] = h, o[6] = l, o[7] = i
  }

  function nn(t, e, n, i, r, o, a, s, l, u, h) {
    var c, p, f, d, g, v = .005,
      y = 1 / 0;
    tm[0] = l, tm[1] = u;
    for (var m = 0; 1 > m; m += .05) em[0] = $e(t, n, r, a, m), em[1] = $e(e, i, o, s, m), d = _y(tm, em), y > d && (c = m, y = d);
    y = 1 / 0;
    for (var _ = 0; 32 > _ && !($y > v); _++) p = c - v, f = c + v, em[0] = $e(t, n, r, a, p), em[1] = $e(e, i, o, s, p), d = _y(em, tm), p >= 0 && y > d ? (c = p, y = d) : (nm[0] = $e(t, n, r, a, f), nm[1] = $e(e, i, o, s, f), g = _y(nm, tm), 1 >= f && y > g ? (c = f, y = g) : v *= .5);
    return h && (h[0] = $e(t, n, r, a, c), h[1] = $e(e, i, o, s, c)), Zy(y)
  }

  function rn(t, e, n, i, r, o, a, s, l) {
    for (var u = t, h = e, c = 0, p = 1 / l, f = 1; l >= f; f++) {
      var d = f * p,
        g = $e(t, n, r, a, d),
        v = $e(e, i, o, s, d),
        y = g - u,
        m = v - h;
      c += Math.sqrt(y * y + m * m), u = g, h = v
    }
    return c
  }

  function on(t, e, n, i) {
    var r = 1 - i;
    return r * (r * t + 2 * i * e) + i * i * n
  }

  function an(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e))
  }

  function sn(t, e, n, i, r) {
    var o = t - 2 * e + n,
      a = 2 * (e - t),
      s = t - i,
      l = 0;
    if (Ze(o)) {
      if (Ke(a)) {
        var u = -s / a;
        u >= 0 && 1 >= u && (r[l++] = u)
      }
    } else {
      var h = a * a - 4 * o * s;
      if (Ze(h)) {
        var u = -a / (2 * o);
        u >= 0 && 1 >= u && (r[l++] = u)
      } else if (h > 0) {
        var c = Zy(h),
          u = (-a + c) / (2 * o),
          p = (-a - c) / (2 * o);
        u >= 0 && 1 >= u && (r[l++] = u), p >= 0 && 1 >= p && (r[l++] = p)
      }
    }
    return l
  }

  function ln(t, e, n) {
    var i = t + n - 2 * e;
    return 0 === i ? .5 : (t - e) / i
  }

  function un(t, e, n, i, r) {
    var o = (e - t) * i + t,
      a = (n - e) * i + e,
      s = (a - o) * i + o;
    r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = n
  }

  function hn(t, e, n, i, r, o, a, s, l) {
    var u, h = .005,
      c = 1 / 0;
    tm[0] = a, tm[1] = s;
    for (var p = 0; 1 > p; p += .05) {
      em[0] = on(t, n, r, p), em[1] = on(e, i, o, p);
      var f = _y(tm, em);
      c > f && (u = p, c = f)
    }
    c = 1 / 0;
    for (var d = 0; 32 > d && !($y > h); d++) {
      var g = u - h,
        v = u + h;
      em[0] = on(t, n, r, g), em[1] = on(e, i, o, g);
      var f = _y(em, tm);
      if (g >= 0 && c > f) u = g, c = f;
      else {
        nm[0] = on(t, n, r, v), nm[1] = on(e, i, o, v);
        var y = _y(nm, tm);
        1 >= v && c > y ? (u = v, c = y) : h *= .5
      }
    }
    return l && (l[0] = on(t, n, r, u), l[1] = on(e, i, o, u)), Zy(c)
  }

  function cn(t, e, n, i, r, o, a) {
    for (var s = t, l = e, u = 0, h = 1 / a, c = 1; a >= c; c++) {
      var p = c * h,
        f = on(t, n, r, p),
        d = on(e, i, o, p),
        g = f - s,
        v = d - l;
      u += Math.sqrt(g * g + v * v), s = f, l = d
    }
    return u
  }

  function pn(t) {
    var e = t && im.exec(t);
    if (e) {
      var n = e[1].split(","),
        i = +G(n[0]),
        r = +G(n[1]),
        o = +G(n[2]),
        a = +G(n[3]);
      if (isNaN(i + r + o + a)) return;
      var s = [];
      return function (t) {
        return 0 >= t ? 0 : t >= 1 ? 1 : Je(0, i, o, 1, t, s) && $e(0, r, a, 1, s[0])
      }
    }
  }

  function fn(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
  }

  function dn(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
  }

  function gn(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t
  }

  function vn(t) {
    var e = t;
    return fn(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10))
  }

  function yn(t) {
    var e = t;
    return gn(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 : parseFloat(e))
  }

  function mn(t, e, n) {
    return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
  }

  function _n(t, e, n) {
    return t + (e - t) * n
  }

  function xn(t, e, n, i, r) {
    return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
  }

  function wn(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
  }

  function bn(t, e) {
    hm && wn(hm, e), hm = um.put(t, hm || e.slice())
  }

  function Sn(t, e) {
    if (t) {
      e = e || [];
      var n = um.get(t);
      if (n) return wn(e, n);
      t += "";
      var i = t.replace(/ /g, "").toLowerCase();
      if (i in lm) return wn(e, lm[i]), bn(t, e), e;
      var r = i.length;
      if ("#" !== i.charAt(0)) {
        var o = i.indexOf("("),
          a = i.indexOf(")");
        if (-1 !== o && a + 1 === r) {
          var s = i.substr(0, o),
            l = i.substr(o + 1, a - (o + 1)).split(","),
            u = 1;
          switch (s) {
            case "rgba":
              if (4 !== l.length) return 3 === l.length ? xn(e, +l[0], +l[1], +l[2], 1) : xn(e, 0, 0, 0, 1);
              u = yn(l.pop());
            case "rgb":
              return 3 !== l.length ? void xn(e, 0, 0, 0, 1) : (xn(e, vn(l[0]), vn(l[1]), vn(l[2]), u), bn(t, e), e);
            case "hsla":
              return 4 !== l.length ? void xn(e, 0, 0, 0, 1) : (l[3] = yn(l[3]), Mn(l, e), bn(t, e), e);
            case "hsl":
              return 3 !== l.length ? void xn(e, 0, 0, 0, 1) : (Mn(l, e), bn(t, e), e);
            default:
              return
          }
        }
        xn(e, 0, 0, 0, 1)
      } else {
        if (4 === r || 5 === r) {
          var h = parseInt(i.slice(1, 4), 16);
          return h >= 0 && 4095 >= h ? (xn(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 5 === r ? parseInt(i.slice(4), 16) / 15 : 1), bn(t, e), e) : void xn(e, 0, 0, 0, 1)
        }
        if (7 === r || 9 === r) {
          var h = parseInt(i.slice(1, 7), 16);
          return h >= 0 && 16777215 >= h ? (xn(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 9 === r ? parseInt(i.slice(7), 16) / 255 : 1), bn(t, e), e) : void xn(e, 0, 0, 0, 1)
        }
      }
    }
  }

  function Mn(t, e) {
    var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
      i = yn(t[1]),
      r = yn(t[2]),
      o = .5 >= r ? r * (i + 1) : r + i - r * i,
      a = 2 * r - o;
    return e = e || [], xn(e, fn(255 * mn(a, o, n + 1 / 3)), fn(255 * mn(a, o, n)), fn(255 * mn(a, o, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
  }

  function Tn(t) {
    if (t) {
      var e, n, i = t[0] / 255,
        r = t[1] / 255,
        o = t[2] / 255,
        a = Math.min(i, r, o),
        s = Math.max(i, r, o),
        l = s - a,
        u = (s + a) / 2;
      if (0 === l) e = 0, n = 0;
      else {
        n = .5 > u ? l / (s + a) : l / (2 - s - a);
        var h = ((s - i) / 6 + l / 2) / l,
          c = ((s - r) / 6 + l / 2) / l,
          p = ((s - o) / 6 + l / 2) / l;
        i === s ? e = p - c : r === s ? e = 1 / 3 + h - p : o === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1)
      }
      var f = [360 * e, n, u];
      return null != t[3] && f.push(t[3]), f
    }
  }

  function Cn(t, e) {
    var n = Sn(t);
    if (n) {
      for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : n[i] < 0 && (n[i] = 0);
      return Ln(n, 4 === n.length ? "rgba" : "rgb")
    }
  }

  function In(t) {
    var e = Sn(t);
    return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
  }

  function kn(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      n = n || [];
      var i = t * (e.length - 1),
        r = Math.floor(i),
        o = Math.ceil(i),
        a = e[r],
        s = e[o],
        l = i - r;
      return n[0] = fn(_n(a[0], s[0], l)), n[1] = fn(_n(a[1], s[1], l)), n[2] = fn(_n(a[2], s[2], l)), n[3] = gn(_n(a[3], s[3], l)), n
    }
  }

  function Dn(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      var i = t * (e.length - 1),
        r = Math.floor(i),
        o = Math.ceil(i),
        a = Sn(e[r]),
        s = Sn(e[o]),
        l = i - r,
        u = Ln([fn(_n(a[0], s[0], l)), fn(_n(a[1], s[1], l)), fn(_n(a[2], s[2], l)), gn(_n(a[3], s[3], l))], "rgba");
      return n ? {
        color: u,
        leftIndex: r,
        rightIndex: o,
        value: i
      } : u
    }
  }

  function An(t, e, n, i) {
    var r = Sn(t);
    return t ? (r = Tn(r), null != e && (r[0] = dn(e)), null != n && (r[1] = yn(n)), null != i && (r[2] = yn(i)), Ln(Mn(r), "rgba")) : void 0
  }

  function Pn(t, e) {
    var n = Sn(t);
    return n && null != e ? (n[3] = gn(e), Ln(n, "rgba")) : void 0
  }

  function Ln(t, e) {
    if (t && t.length) {
      var n = t[0] + "," + t[1] + "," + t[2];
      return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")"
    }
  }

  function On(t, e) {
    var n = Sn(t);
    return n ? (.299 * n[0] + .587 * n[1] + .114 * n[2]) * n[3] / 255 + (1 - n[3]) * e : 0
  }

  function Rn() {
    return Ln([Math.round(255 * Math.random()), Math.round(255 * Math.random()), Math.round(255 * Math.random())], "rgb")
  }

  function Bn(t) {
    return "linear" === t.type
  }

  function zn(t) {
    return "radial" === t.type
  }

  function En(t, e, n) {
    return (e - t) * n + t
  }

  function Nn(t, e, n, i) {
    for (var r = e.length, o = 0; r > o; o++) t[o] = En(e[o], n[o], i);
    return t
  }

  function Fn(t, e, n, i) {
    for (var r = e.length, o = r && e[0].length, a = 0; r > a; a++) {
      t[a] || (t[a] = []);
      for (var s = 0; o > s; s++) t[a][s] = En(e[a][s], n[a][s], i)
    }
    return t
  }

  function Hn(t, e, n, i) {
    for (var r = e.length, o = 0; r > o; o++) t[o] = e[o] + n[o] * i;
    return t
  }

  function Vn(t, e, n, i) {
    for (var r = e.length, o = r && e[0].length, a = 0; r > a; a++) {
      t[a] || (t[a] = []);
      for (var s = 0; o > s; s++) t[a][s] = e[a][s] + n[a][s] * i
    }
    return t
  }

  function Wn(t, e) {
    for (var n = t.length, i = e.length, r = n > i ? e : t, o = Math.min(n, i), a = r[o - 1] || {
        color: [0, 0, 0, 0],
        offset: 0
      }, s = o; s < Math.max(n, i); s++) r.push({
      offset: a.offset,
      color: a.color.slice()
    })
  }

  function Gn(t, e, n) {
    var i = t,
      r = e;
    if (i.push && r.push) {
      var o = i.length,
        a = r.length;
      if (o !== a) {
        var s = o > a;
        if (s) i.length = a;
        else
          for (var l = o; a > l; l++) i.push(1 === n ? r[l] : dm.call(r[l]))
      }
      for (var u = i[0] && i[0].length, l = 0; l < i.length; l++)
        if (1 === n) isNaN(i[l]) && (i[l] = r[l]);
        else
          for (var h = 0; u > h; h++) isNaN(i[l][h]) && (i[l][h] = r[l][h])
    }
  }

  function Un(t) {
    if (g(t)) {
      var e = t.length;
      if (g(t[0])) {
        for (var n = [], i = 0; e > i; i++) n.push(dm.call(t[i]));
        return n
      }
      return dm.call(t)
    }
    return t
  }

  function Xn(t) {
    return t[0] = Math.floor(t[0]) || 0, t[1] = Math.floor(t[1]) || 0, t[2] = Math.floor(t[2]) || 0, t[3] = null == t[3] ? 1 : t[3], "rgba(" + t.join(",") + ")"
  }

  function Yn(t) {
    return g(t && t[0]) ? 2 : 1
  }

  function qn(t) {
    return t === _m || t === xm
  }

  function jn(t) {
    return t === vm || t === ym
  }

  function Zn() {
    return (new Date).getTime()
  }

  function Kn(t) {
    var e = t.pointerType;
    return "pen" === e || "touch" === e
  }

  function $n(t) {
    t.touching = !0, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function () {
      t.touching = !1, t.touchTimer = null
    }, 700)
  }

  function Qn(t) {
    t && (t.zrByTouch = !0)
  }

  function Jn(t, e) {
    return De(t.dom, new Pm(t, e), !0)
  }

  function ti(t, e) {
    for (var n = e, i = !1; n && 9 !== n.nodeType && !(i = n.domBelongToZr || n !== e && n === t.painterRoot);) n = n.parentNode;
    return i
  }

  function ei(t, e) {
    var n = e.domHandlers;
    Gv.pointerEventsSupported ? v(km.pointer, function (i) {
      ii(e, i, function (e) {
        n[i].call(t, e)
      })
    }) : (Gv.touchEventsSupported && v(km.touch, function (i) {
      ii(e, i, function (r) {
        n[i].call(t, r), $n(e)
      })
    }), v(km.mouse, function (i) {
      ii(e, i, function (r) {
        r = ke(r), e.touching || n[i].call(t, r)
      })
    }))
  }

  function ni(t, e) {
    function n(n) {
      function i(i) {
        i = ke(i), ti(t, i.target) || (i = Jn(t, i), e.domHandlers[n].call(t, i))
      }
      ii(e, n, i, {
        capture: !0
      })
    }
    Gv.pointerEventsSupported ? v(Dm.pointer, n) : Gv.touchEventsSupported || v(Dm.mouse, n)
  }

  function ii(t, e, n, i) {
    t.mounted[e] = n, t.listenerOpts[e] = i, Pe(t.domTarget, e, n, i)
  }

  function ri(t) {
    var e = t.mounted;
    for (var n in e) e.hasOwnProperty(n) && Le(t.domTarget, n, e[n], t.listenerOpts[n]);
    t.mounted = {}
  }

  function oi() {
    return [1, 0, 0, 1, 0, 0]
  }

  function ai(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
  }

  function si(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
  }

  function li(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
      r = e[1] * n[0] + e[3] * n[1],
      o = e[0] * n[2] + e[2] * n[3],
      a = e[1] * n[2] + e[3] * n[3],
      s = e[0] * n[4] + e[2] * n[5] + e[4],
      l = e[1] * n[4] + e[3] * n[5] + e[5];
    return t[0] = i, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t
  }

  function ui(t, e, n) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
  }

  function hi(t, e, n) {
    var i = e[0],
      r = e[2],
      o = e[4],
      a = e[1],
      s = e[3],
      l = e[5],
      u = Math.sin(n),
      h = Math.cos(n);
    return t[0] = i * h + a * u, t[1] = -i * u + a * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * o + u * l, t[5] = h * l - u * o, t
  }

  function ci(t, e, n) {
    var i = n[0],
      r = n[1];
    return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
  }

  function pi(t, e) {
    var n = e[0],
      i = e[2],
      r = e[4],
      o = e[1],
      a = e[3],
      s = e[5],
      l = n * a - o * i;
    return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - a * r) * l, t[5] = (o * r - n * s) * l, t) : null
  }

  function fi(t) {
    var e = oi();
    return si(e, t), e
  }

  function di(t) {
    return t > Um || -Um > t
  }

  function gi(t, e) {
    for (var n = 0; n < Km.length; n++) {
      var i = Km[n];
      t[i] = e[i]
    }
  }

  function vi(t, e) {
    e = e || Yv;
    var n = s_[e];
    n || (n = s_[e] = new sm(500));
    var i = n.get(t);
    return null == i && (i = $v.measureText(t, e).width, n.put(t, i)), i
  }

  function yi(t, e, n, i) {
    var r = vi(t, e),
      o = wi(e),
      a = _i(0, r, n),
      s = xi(0, o, i),
      l = new a_(a, s, r, o);
    return l
  }

  function mi(t, e, n, i) {
    var r = ((t || "") + "").split("\n"),
      o = r.length;
    if (1 === o) return yi(r[0], e, n, i);
    for (var a = new a_(0, 0, 0, 0), s = 0; s < r.length; s++) {
      var l = yi(r[s], e, n, i);
      0 === s ? a.copy(l) : a.union(l)
    }
    return a
  }

  function _i(t, e, n) {
    return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
  }

  function xi(t, e, n) {
    return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
  }

  function wi(t) {
    return vi("国", t)
  }

  function bi(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
  }

  function Si(t, e, n) {
    var i = e.position || "inside",
      r = null != e.distance ? e.distance : 5,
      o = n.height,
      a = n.width,
      s = o / 2,
      l = n.x,
      u = n.y,
      h = "left",
      c = "top";
    if (i instanceof Array) l += bi(i[0], n.width), u += bi(i[1], n.height), h = null, c = null;
    else switch (i) {
      case "left":
        l -= r, u += s, h = "right", c = "middle";
        break;
      case "right":
        l += r + a, u += s, c = "middle";
        break;
      case "top":
        l += a / 2, u -= r, h = "center", c = "bottom";
        break;
      case "bottom":
        l += a / 2, u += o + r, h = "center";
        break;
      case "inside":
        l += a / 2, u += s, h = "center", c = "middle";
        break;
      case "insideLeft":
        l += r, u += s, c = "middle";
        break;
      case "insideRight":
        l += a - r, u += s, h = "right", c = "middle";
        break;
      case "insideTop":
        l += a / 2, u += r, h = "center";
        break;
      case "insideBottom":
        l += a / 2, u += o - r, h = "center", c = "bottom";
        break;
      case "insideTopLeft":
        l += r, u += r;
        break;
      case "insideTopRight":
        l += a - r, u += r, h = "right";
        break;
      case "insideBottomLeft":
        l += r, u += o - r, c = "bottom";
        break;
      case "insideBottomRight":
        l += a - r, u += o - r, h = "right", c = "bottom"
    }
    return t = t || {}, t.x = l, t.y = u, t.align = h, t.verticalAlign = c, t
  }

  function Mi(t, e, n, i, r) {
    n = n || {};
    var o = [];
    Ai(t, "", t, e, n, i, o, r);
    var a = o.length,
      s = !1,
      l = n.done,
      u = n.aborted,
      h = function () {
        s = !0, a--, 0 >= a && (s ? l && l() : u && u())
      },
      c = function () {
        a--, 0 >= a && (s ? l && l() : u && u())
      };
    a || l && l(), o.length > 0 && n.during && o[0].during(function (t, e) {
      n.during(e)
    });
    for (var p = 0; p < o.length; p++) {
      var f = o[p];
      h && f.done(h), c && f.aborted(c), n.force && f.duration(n.duration), f.start(n.easing)
    }
    return o
  }

  function Ti(t, e, n) {
    for (var i = 0; n > i; i++) t[i] = e[i]
  }

  function Ci(t) {
    return g(t[0])
  }

  function Ii(t, e, n) {
    if (g(e[n]))
      if (g(t[n]) || (t[n] = []), P(e[n])) {
        var i = e[n].length;
        t[n].length !== i && (t[n] = new e[n].constructor(i), Ti(t[n], e[n], i))
      } else {
        var r = e[n],
          o = t[n],
          a = r.length;
        if (Ci(r))
          for (var s = r[0].length, l = 0; a > l; l++) o[l] ? Ti(o[l], r[l], s) : o[l] = Array.prototype.slice.call(r[l]);
        else Ti(o, r, a);
        o.length = r.length
      }
    else t[n] = e[n]
  }

  function ki(t, e) {
    return t === e || g(t) && g(e) && Di(t, e)
  }

  function Di(t, e) {
    var n = t.length;
    if (n !== e.length) return !1;
    for (var i = 0; n > i; i++)
      if (t[i] !== e[i]) return !1;
    return !0
  }

  function Ai(t, e, n, i, r, o, a, s) {
    for (var l = w(i), u = r.duration, h = r.delay, c = r.additive, f = r.setToFinal, d = !D(o), v = t.animators, y = [], m = 0; m < l.length; m++) {
      var x = l[m],
        b = i[x];
      if (null != b && null != n[x] && (d || o[x]))
        if (!D(b) || g(b) || O(b)) y.push(x);
        else {
          if (e) {
            s || (n[x] = b, t.updateDuringAnimation(e));
            continue
          }
          Ai(t, x, n[x], b, r, o && o[x], a, s)
        }
      else s || (n[x] = b, t.updateDuringAnimation(e), y.push(x))
    }
    var S = y.length;
    if (!c && S)
      for (var M = 0; M < v.length; M++) {
        var T = v[M];
        if (T.targetName === e) {
          var C = T.stopTracks(y);
          if (C) {
            var I = p(v, T);
            v.splice(I, 1)
          }
        }
      }
    if (r.force || (y = _(y, function (t) {
        return !ki(i[t], n[t])
      }), S = y.length), S > 0 || r.force && !a.length) {
      var k = void 0,
        A = void 0,
        P = void 0;
      if (s) {
        A = {}, f && (k = {});
        for (var M = 0; S > M; M++) {
          var x = y[M];
          A[x] = n[x], f ? k[x] = i[x] : n[x] = i[x]
        }
      } else if (f) {
        P = {};
        for (var M = 0; S > M; M++) {
          var x = y[M];
          P[x] = Un(n[x]), Ii(n, i, x)
        }
      }
      var T = new Mm(n, !1, !1, c ? _(v, function (t) {
        return t.targetName === e
      }) : null);
      T.targetName = e, r.scope && (T.scope = r.scope), f && k && T.whenWithKeys(0, k, y), P && T.whenWithKeys(0, P, y), T.whenWithKeys(null == u ? 500 : u, s ? A : i, y).delay(h || 0), t.addAnimator(T, e), a.push(T)
    }
  }

  function Pi(t) {
    delete v_[t]
  }

  function Li(t) {
    if (!t) return !1;
    if ("string" == typeof t) return On(t, 1) < Nm;
    if (t.colorStops) {
      for (var e = t.colorStops, n = 0, i = e.length, r = 0; i > r; r++) n += On(e[r].color, 1);
      return n /= i, Nm > n
    }
    return !1
  }

  function Oi(t, e) {
    var n = new y_(o(), t, e);
    return v_[n.id] = n, n
  }

  function Ri(t) {
    t.dispose()
  }

  function Bi() {
    for (var t in v_) v_.hasOwnProperty(t) && v_[t].dispose();
    v_ = {}
  }

  function zi(t) {
    return v_[t]
  }

  function Ei(t, e) {
    g_[t] = e
  }

  function Ni(t) {
    return t.replace(/^\s+|\s+$/g, "")
  }

  function Fi(t, e, n, i) {
    var r = e[0],
      o = e[1],
      a = n[0],
      s = n[1],
      l = o - r,
      u = s - a;
    if (0 === l) return 0 === u ? a : (a + s) / 2;
    if (i)
      if (l > 0) {
        if (r >= t) return a;
        if (t >= o) return s
      } else {
        if (t >= r) return a;
        if (o >= t) return s
      }
    else {
      if (t === r) return a;
      if (t === o) return s
    }
    return (t - r) / l * u + a
  }

  function Hi(t, e) {
    switch (t) {
      case "center":
      case "middle":
        t = "50%";
        break;
      case "left":
      case "top":
        t = "0%";
        break;
      case "right":
      case "bottom":
        t = "100%"
    }
    return C(t) ? Ni(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
  }

  function Vi(t, e, n) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), w_), t = (+t).toFixed(e), n ? t : +t
  }

  function Wi(t) {
    return t.sort(function (t, e) {
      return t - e
    }), t
  }

  function Gi(t) {
    if (t = +t, isNaN(t)) return 0;
    if (t > 1e-14)
      for (var e = 1, n = 0; 15 > n; n++, e *= 10)
        if (Math.round(t * e) / e === t) return n;
    return Ui(t)
  }

  function Ui(t) {
    var e = t.toString().toLowerCase(),
      n = e.indexOf("e"),
      i = n > 0 ? +e.slice(n + 1) : 0,
      r = n > 0 ? n : e.length,
      o = e.indexOf("."),
      a = 0 > o ? 0 : r - 1 - o;
    return Math.max(0, a - i)
  }

  function Xi(t, e) {
    var n = Math.log,
      i = Math.LN10,
      r = Math.floor(n(t[1] - t[0]) / i),
      o = Math.round(n(Math.abs(e[1] - e[0])) / i),
      a = Math.min(Math.max(-r + o, 0), 20);
    return isFinite(a) ? a : 20
  }

  function Yi(t, e, n) {
    if (!t[e]) return 0;
    var i = m(t, function (t, e) {
      return t + (isNaN(e) ? 0 : e)
    }, 0);
    if (0 === i) return 0;
    for (var r = Math.pow(10, n), o = y(t, function (t) {
        return (isNaN(t) ? 0 : t) / i * r * 100
      }), a = 100 * r, s = y(o, function (t) {
        return Math.floor(t)
      }), l = m(s, function (t, e) {
        return t + e
      }, 0), u = y(o, function (t, e) {
        return t - s[e]
      }); a > l;) {
      for (var h = Number.NEGATIVE_INFINITY, c = null, p = 0, f = u.length; f > p; ++p) u[p] > h && (h = u[p], c = p);
      ++s[c], u[c] = 0, ++l
    }
    return s[e] / r
  }

  function qi(t, e) {
    var n = Math.max(Gi(t), Gi(e)),
      i = t + e;
    return n > w_ ? i : Vi(i, n)
  }

  function ji(t) {
    var e = 2 * Math.PI;
    return (t % e + e) % e
  }

  function Zi(t) {
    return t > -x_ && x_ > t
  }

  function Ki(t) {
    if (t instanceof Date) return t;
    if (C(t)) {
      var e = S_.exec(t);
      if (!e) return new Date(0 / 0);
      if (e[8]) {
        var n = +e[4] || 0;
        return "Z" !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0))
      }
      return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0)
    }
    return new Date(null == t ? 0 / 0 : Math.round(t))
  }

  function $i(t) {
    return Math.pow(10, Qi(t))
  }

  function Qi(t) {
    if (0 === t) return 0;
    var e = Math.floor(Math.log(t) / Math.LN10);
    return t / Math.pow(10, e) >= 10 && e++, e
  }

  function Ji(t, e) {
    var n, i = Qi(t),
      r = Math.pow(10, i),
      o = t / r;
    return n = e ? 1.5 > o ? 1 : 2.5 > o ? 2 : 4 > o ? 3 : 7 > o ? 5 : 10 : 1 > o ? 1 : 2 > o ? 2 : 3 > o ? 3 : 5 > o ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
  }

  function tr(t, e) {
    var n = (t.length - 1) * e + 1,
      i = Math.floor(n),
      r = +t[i - 1],
      o = n - i;
    return o ? r + o * (t[i] - r) : r
  }

  function er(t) {
    function e(t, n, i) {
      return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1))
    }
    t.sort(function (t, n) {
      return e(t, n, 0) ? -1 : 1
    });
    for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
      for (var o = t[r].interval, a = t[r].close, s = 0; 2 > s; s++) o[s] <= n && (o[s] = n, a[s] = s ? 1 : 1 - i), n = o[s], i = a[s];
      o[0] === o[1] && a[0] * a[1] !== 1 ? t.splice(r, 1) : r++
    }
    return t
  }

  function nr(t) {
    var e = parseFloat(t);
    return e == t && (0 !== e || !C(t) || t.indexOf("x") <= 0) ? e : 0 / 0
  }

  function ir(t) {
    return !isNaN(nr(t))
  }

  function rr() {
    return Math.round(9 * Math.random())
  }

  function or(t, e) {
    return 0 === e ? t : or(e, t % e)
  }

  function ar(t, e) {
    return null == t ? e : null == e ? t : t * e / or(t, e)
  }

  function sr(t) {
    throw new Error(t)
  }

  function lr(t, e, n) {
    return (e - t) * n + t
  }

  function ur(t) {
    return t instanceof Array ? t : null == t ? [] : [t]
  }

  function hr(t, e, n) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
      for (var i = 0, r = n.length; r > i; i++) {
        var o = n[i];
        !t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o])
      }
    }
  }

  function cr(t) {
    return !D(t) || M(t) || t instanceof Date ? t : t.value
  }

  function pr(t) {
    return D(t) && !(t instanceof Array)
  }

  function fr(t, e, n) {
    var i = "normalMerge" === n,
      r = "replaceMerge" === n,
      o = "replaceAll" === n;
    t = t || [], e = (e || []).slice();
    var a = Y();
    v(e, function (t, n) {
      return D(t) ? void 0 : void(e[n] = null)
    });
    var s = dr(t, a, n);
    return (i || r) && gr(s, t, a, e), i && vr(s, e), i || r ? yr(s, e, r) : o && mr(s, e), _r(s), s
  }

  function dr(t, e, n) {
    var i = [];
    if ("replaceAll" === n) return i;
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      o && null != o.id && e.set(o.id, r), i.push({
        existing: "replaceMerge" === n || Mr(o) ? null : o,
        newOption: null,
        keyInfo: null,
        brandNew: null
      })
    }
    return i
  }

  function gr(t, e, n, i) {
    v(i, function (r, o) {
      if (r && null != r.id) {
        var a = wr(r.id),
          s = n.get(a);
        if (null != s) {
          var l = t[s];
          W(!l.newOption, 'Duplicated option on id "' + a + '".'), l.newOption = r, l.existing = e[s], i[o] = null
        }
      }
    })
  }

  function vr(t, e) {
    v(e, function (n, i) {
      if (n && null != n.name)
        for (var r = 0; r < t.length; r++) {
          var o = t[r].existing;
          if (!t[r].newOption && o && (null == o.id || null == n.id) && !Mr(n) && !Mr(o) && xr("name", o, n)) return t[r].newOption = n, void(e[i] = null)
        }
    })
  }

  function yr(t, e, n) {
    v(e, function (e) {
      if (e) {
        for (var i, r = 0;
          (i = t[r]) && (i.newOption || Mr(i.existing) || i.existing && null != e.id && !xr("id", e, i.existing));) r++;
        i ? (i.newOption = e, i.brandNew = n) : t.push({
          newOption: e,
          brandNew: n,
          existing: null,
          keyInfo: null
        }), r++
      }
    })
  }

  function mr(t, e) {
    v(e, function (e) {
      t.push({
        newOption: e,
        brandNew: !0,
        existing: null,
        keyInfo: null
      })
    })
  }

  function _r(t) {
    var e = Y();
    v(t, function (t) {
      var n = t.existing;
      n && e.set(n.id, t)
    }), v(t, function (t) {
      var n = t.newOption;
      W(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
    }), v(t, function (t, n) {
      var i = t.existing,
        r = t.newOption,
        o = t.keyInfo;
      if (D(r)) {
        if (o.name = null != r.name ? wr(r.name) : i ? i.name : M_ + n, i) o.id = wr(i.id);
        else if (null != r.id) o.id = wr(r.id);
        else {
          var a = 0;
          do o.id = "\x00" + o.name + "\x00" + a++; while (e.get(o.id))
        }
        e.set(o.id, t)
      }
    })
  }

  function xr(t, e, n) {
    var i = br(e[t], null),
      r = br(n[t], null);
    return null != i && null != r && i === r
  }

  function wr(t) {
    return br(t, "")
  }

  function br(t, e) {
    return null == t ? e : C(t) ? t : k(t) || I(t) ? t + "" : e
  }

  function Sr(t) {
    var e = t.name;
    return !(!e || !e.indexOf(M_))
  }

  function Mr(t) {
    return t && null != t.id && 0 === wr(t.id).indexOf(T_)
  }

  function Tr(t, e, n) {
    v(t, function (t) {
      var i = t.newOption;
      D(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = Cr(e, i, t.existing, n))
    })
  }

  function Cr(t, e, n, i) {
    var r = e.type ? e.type : n ? n.subType : i.determineSubType(t, e);
    return r
  }

  function Ir(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? M(e.dataIndex) ? y(e.dataIndex, function (e) {
      return t.indexOfRawIndex(e)
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? M(e.name) ? y(e.name, function (e) {
      return t.indexOfName(e)
    }) : t.indexOfName(e.name) : void 0
  }

  function kr() {
    var t = "__ec_inner_" + I_++;
    return function (e) {
      return e[t] || (e[t] = {})
    }
  }

  function Dr(t, e, n) {
    var i = Ar(e, n),
      r = i.mainTypeSpecified,
      o = i.queryOptionMap,
      a = i.others,
      s = a,
      l = n ? n.defaultMainType : null;
    return !r && l && o.set(l, {}), o.each(function (e, i) {
      var r = Pr(t, i, e, {
        useDefault: l === i,
        enableAll: n && null != n.enableAll ? n.enableAll : !0,
        enableNone: n && null != n.enableNone ? n.enableNone : !0
      });
      s[i + "Models"] = r.models, s[i + "Model"] = r.models[0]
    }), s
  }

  function Ar(t, e) {
    var n;
    if (C(t)) {
      var i = {};
      i[t + "Index"] = 0, n = i
    } else n = t;
    var r = Y(),
      o = {},
      a = !1;
    return v(n, function (t, n) {
      if ("dataIndex" === n || "dataIndexInside" === n) return void(o[n] = t);
      var i = n.match(/^(\w+)(Index|Id|Name)$/) || [],
        s = i[1],
        l = (i[2] || "").toLowerCase();
      if (s && l && !(e && e.includeMainTypes && p(e.includeMainTypes, s) < 0)) {
        a = a || !!s;
        var u = r.get(s) || r.set(s, {});
        u[l] = t
      }
    }), {
      mainTypeSpecified: a,
      queryOptionMap: r,
      others: o
    }
  }

  function Pr(t, e, n, i) {
    i = i || k_;
    var r = n.index,
      o = n.id,
      a = n.name,
      s = {
        models: null,
        specified: null != r || null != o || null != a
      };
    if (!s.specified) {
      var l = void 0;
      return s.models = i.useDefault && (l = t.getComponent(e)) ? [l] : [], s
    }
    return "none" === r || r === !1 ? (W(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : ("all" === r && (W(i.enableAll, '`"all"` is not a valid value on index option.'), r = o = a = null), s.models = t.queryComponents({
      mainType: e,
      index: r,
      id: o,
      name: a
    }), s)
  }

  function Lr(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : t[e] = n
  }

  function Or(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e]
  }

  function Rr(t) {
    return "auto" === t ? Gv.domSupported ? "html" : "richText" : t || "html"
  }

  function Br(t, e, n, i, r) {
    var o = null == e || "auto" === e;
    if (null == i) return i;
    if (k(i)) {
      var a = lr(n || 0, i, r);
      return Vi(a, o ? Math.max(Gi(n || 0), Gi(i)) : e)
    }
    if (C(i)) return 1 > r ? n : i;
    for (var s = [], l = n, u = i, h = Math.max(l ? l.length : 0, u.length), c = 0; h > c; ++c) {
      var p = t.getDimensionInfo(c);
      if (p && "ordinal" === p.type) s[c] = (1 > r && l ? l : u)[c];
      else {
        var f = l && l[c] ? l[c] : 0,
          d = u[c],
          a = lr(f, d, r);
        s[c] = Vi(a, o ? Math.max(Gi(f), Gi(d)) : e)
      }
    }
    return s
  }

  function zr(t) {
    var e = {
      main: "",
      sub: ""
    };
    if (t) {
      var n = t.split(D_);
      e.main = n[0] || "", e.sub = n[1] || ""
    }
    return e
  }

  function Er(t) {
    W(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
  }

  function Nr(t) {
    return !(!t || !t[P_])
  }

  function Fr(t) {
    t.$constructor = t, t.extend = function (t) {
      var n, i = this;
      return Hr(i) ? n = function (t) {
        function n() {
          return t.apply(this, arguments) || this
        }
        return e(n, t), n
      }(i) : (n = function () {
        (t.$constructor || i).apply(this, arguments)
      }, f(n, this)), h(n.prototype, t), n[P_] = !0, n.extend = this.extend, n.superCall = Gr, n.superApply = Ur, n.superClass = i, n
    }
  }

  function Hr(t) {
    return T(t) && /^class\s/.test(Function.prototype.toString.call(t))
  }

  function Vr(t, e) {
    t.extend = e.extend
  }

  function Wr(t) {
    var e = ["__\x00is_clz", L_++].join("_");
    t.prototype[e] = !0, t.isInstance = function (t) {
      return !(!t || !t[e])
    }
  }

  function Gr(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    return this.superClass.prototype[e].apply(t, n)
  }

  function Ur(t, e, n) {
    return this.superClass.prototype[e].apply(t, n)
  }

  function Xr(t) {
    function e(t) {
      var e = n[t.main];
      return e && e[A_] || (e = n[t.main] = {}, e[A_] = !0), e
    }
    var n = {};
    t.registerClass = function (t) {
      var i = t.type || t.prototype.type;
      if (i) {
        Er(i), t.prototype.type = i;
        var r = zr(i);
        if (r.sub) {
          if (r.sub !== A_) {
            var o = e(r);
            o[r.sub] = t
          }
        } else n[r.main] = t
      }
      return t
    }, t.getClass = function (t, e, i) {
      var r = n[t];
      if (r && r[A_] && (r = e ? r[e] : null), i && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " is used but not imported." : t + ".type should be specified.");
      return r
    }, t.getClassesByMainType = function (t) {
      var e = zr(t),
        i = [],
        r = n[e.main];
      return r && r[A_] ? v(r, function (t, e) {
        e !== A_ && i.push(t)
      }) : i.push(r), i
    }, t.hasClass = function (t) {
      var e = zr(t);
      return !!n[e.main]
    }, t.getAllClassMainTypes = function () {
      var t = [];
      return v(n, function (e, n) {
        t.push(n)
      }), t
    }, t.hasSubTypes = function (t) {
      var e = zr(t),
        i = n[e.main];
      return i && i[A_]
    }
  }

  function Yr(t, e) {
    for (var n = 0; n < t.length; n++) t[n][1] || (t[n][1] = t[n][0]);
    return e = e || !1,
      function (n, i, r) {
        for (var o = {}, a = 0; a < t.length; a++) {
          var s = t[a][1];
          if (!(i && p(i, s) >= 0 || r && p(r, s) < 0)) {
            var l = n.getShallow(s, e);
            null != l && (o[t[a][0]] = l)
          }
        }
        return o
      }
  }

  function qr(t) {
    if ("string" == typeof t) {
      var e = z_.get(t);
      return e && e.image
    }
    return t
  }

  function jr(t, e, n, i, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !n) return e;
        var o = z_.get(t),
          a = {
            hostEl: n,
            cb: i,
            cbPayload: r
          };
        return o ? (e = o.image, !Kr(e) && o.pending.push(a)) : (e = $v.loadImage(t, Zr, Zr,n), e.__zrImageSrc = t, z_.put(t, e.__cachedImgObj = {
          image: e,
          pending: [a]
        })), e
      }
      return t
    }
    return e
  }

  function Zr() {
    var t = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
        i = n.cb;
      i && i(this, n.cbPayload), n.hostEl.dirty()
    }
    t.pending.length = 0
  }

  function Kr(t) {
    return t && t.width && t.height
  }

  function $r(t, e, n, i, r) {
    if (!e) return "";
    var o = (t + "").split("\n");
    r = Qr(e, n, i, r);
    for (var a = 0, s = o.length; s > a; a++) o[a] = Jr(o[a], r);
    return o.join("\n")
  }

  function Qr(t, e, n, i) {
    i = i || {};
    var r = h({}, i);
    r.font = e, n = N(n, "..."), r.maxIterations = N(i.maxIterations, 2);
    var o = r.minChar = N(i.minChar, 0);
    r.cnCharWidth = vi("国", e);
    var a = r.ascCharWidth = vi("a", e);
    r.placeholder = N(i.placeholder, "");
    for (var s = t = Math.max(0, t - 1), l = 0; o > l && s >= a; l++) s -= a;
    var u = vi(n, e);
    return u > s && (n = "", u = 0), s = t - u, r.ellipsis = n, r.ellipsisWidth = u, r.contentWidth = s, r.containerWidth = t, r
  }

  function Jr(t, e) {
    var n = e.containerWidth,
      i = e.font,
      r = e.contentWidth;
    if (!n) return "";
    var o = vi(t, i);
    if (n >= o) return t;
    for (var a = 0;; a++) {
      if (r >= o || a >= e.maxIterations) {
        t += e.ellipsis;
        break
      }
      var s = 0 === a ? to(t, r, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * r / o) : 0;
      t = t.substr(0, s), o = vi(t, i)
    }
    return "" === t && (t = e.placeholder), t
  }

  function to(t, e, n, i) {
    for (var r = 0, o = 0, a = t.length; a > o && e > r; o++) {
      var s = t.charCodeAt(o);
      r += s >= 0 && 127 >= s ? n : i
    }
    return o
  }

  function eo(t, e) {
    null != t && (t += "");
    var n, i = e.overflow,
      r = e.padding,
      o = e.font,
      a = "truncate" === i,
      s = wi(o),
      l = N(e.lineHeight, s),
      u = !!e.backgroundColor,
      h = "truncate" === e.lineOverflow,
      c = e.width;
    n = null == c || "break" !== i && "breakAll" !== i ? t ? t.split("\n") : [] : t ? ao(t, e.font, c, "breakAll" === i, 0).lines : [];
    var p = n.length * l,
      f = N(e.height, p);
    if (p > f && h) {
      var d = Math.floor(f / l);
      n = n.slice(0, d)
    }
    if (t && a && null != c)
      for (var g = Qr(c, o, e.ellipsis, {
          minChar: e.truncateMinChar,
          placeholder: e.placeholder
        }), v = 0; v < n.length; v++) n[v] = Jr(n[v], g);
    for (var y = f, m = 0, v = 0; v < n.length; v++) m = Math.max(vi(n[v], o), m);
    null == c && (c = m);
    var _ = m;
    return r && (y += r[0] + r[2], _ += r[1] + r[3], c += r[1] + r[3]), u && (_ = c), {
      lines: n,
      height: f,
      outerWidth: _,
      outerHeight: y,
      lineHeight: l,
      calculatedLineHeight: s,
      contentWidth: m,
      contentHeight: p,
      width: c
    }
  }

  function no(t, e) {
    function n(t, e, n) {
      t.width = e, t.lineHeight = n, p += n, f = Math.max(f, e)
    }
    var i = new H_;
    if (null != t && (t += ""), !t) return i;
    for (var r, o = e.width, a = e.height, s = e.overflow, l = "break" !== s && "breakAll" !== s || null == o ? null : {
        width: o,
        accumWidth: 0,
        breakAll: "breakAll" === s
      }, u = E_.lastIndex = 0; null != (r = E_.exec(t));) {
      var h = r.index;
      h > u && io(i, t.substring(u, h), e, l), io(i, r[2], e, l, r[1]), u = E_.lastIndex
    }
    u < t.length && io(i, t.substring(u, t.length), e, l);
    var c = [],
      p = 0,
      f = 0,
      d = e.padding,
      g = "truncate" === s,
      v = "truncate" === e.lineOverflow;
    t: for (var y = 0; y < i.lines.length; y++) {
      for (var m = i.lines[y], _ = 0, x = 0, w = 0; w < m.tokens.length; w++) {
        var b = m.tokens[w],
          S = b.styleName && e.rich[b.styleName] || {},
          M = b.textPadding = S.padding,
          T = M ? M[1] + M[3] : 0,
          C = b.font = S.font || e.font;
        b.contentHeight = wi(C);
        var I = N(S.height, b.contentHeight);
        if (b.innerHeight = I, M && (I += M[0] + M[2]), b.height = I, b.lineHeight = F(S.lineHeight, e.lineHeight, I), b.align = S && S.align || e.align, b.verticalAlign = S && S.verticalAlign || "middle", v && null != a && p + b.lineHeight > a) {
          w > 0 ? (m.tokens = m.tokens.slice(0, w), n(m, x, _), i.lines = i.lines.slice(0, y + 1)) : i.lines = i.lines.slice(0, y);
          break t
        }
        var k = S.width,
          D = null == k || "auto" === k;
        if ("string" == typeof k && "%" === k.charAt(k.length - 1)) b.percentWidth = k, c.push(b), b.contentWidth = vi(b.text, C);
        else {
          if (D) {
            var A = S.backgroundColor,
              P = A && A.image;
            P && (P = qr(P), Kr(P) && (b.width = Math.max(b.width, P.width * I / P.height)))
          }
          var L = g && null != o ? o - x : null;
          null != L && L < b.width ? !D || T > L ? (b.text = "", b.width = b.contentWidth = 0) : (b.text = $r(b.text, L - T, C, e.ellipsis, {
            minChar: e.truncateMinChar
          }), b.width = b.contentWidth = vi(b.text, C)) : b.contentWidth = vi(b.text, C)
        }
        b.width += T, x += b.width, S && (_ = Math.max(_, b.lineHeight))
      }
      n(m, x, _)
    }
    i.outerWidth = i.width = N(o, f), i.outerHeight = i.height = N(a, p), i.contentHeight = p, i.contentWidth = f, d && (i.outerWidth += d[1] + d[3], i.outerHeight += d[0] + d[2]);
    for (var y = 0; y < c.length; y++) {
      var b = c[y],
        O = b.percentWidth;
      b.width = parseInt(O, 10) / 100 * i.width
    }
    return i
  }

  function io(t, e, n, i, r) {
    var o, a, s = "" === e,
      l = r && n.rich[r] || {},
      u = t.lines,
      h = l.font || n.font,
      c = !1;
    if (i) {
      var p = l.padding,
        f = p ? p[1] + p[3] : 0;
      if (null != l.width && "auto" !== l.width) {
        var d = bi(l.width, i.width) + f;
        u.length > 0 && d + i.accumWidth > i.width && (o = e.split("\n"), c = !0), i.accumWidth = d
      } else {
        var g = ao(e, h, i.width, i.breakAll, i.accumWidth);
        i.accumWidth = g.accumWidth + f, a = g.linesWidths, o = g.lines
      }
    } else o = e.split("\n");
    for (var v = 0; v < o.length; v++) {
      var y = o[v],
        m = new N_;
      if (m.styleName = r, m.text = y, m.isLineHolder = !y && !s, m.width = "number" == typeof l.width ? l.width : a ? a[v] : vi(y, h), v || c) u.push(new F_([m]));
      else {
        var _ = (u[u.length - 1] || (u[0] = new F_)).tokens,
          x = _.length;
        1 === x && _[0].isLineHolder ? _[0] = m : (y || !x || s) && _.push(m)
      }
    }
  }

  function ro(t) {
    var e = t.charCodeAt(0);
    return e >= 33 && 383 >= e
  }

  function oo(t) {
    return ro(t) ? V_[t] ? !0 : !1 : !0
  }

  function ao(t, e, n, i, r) {
    for (var o = [], a = [], s = "", l = "", u = 0, h = 0, c = 0; c < t.length; c++) {
      var p = t.charAt(c);
      if ("\n" !== p) {
        var f = vi(p, e),
          d = i ? !1 : !oo(p);
        (o.length ? h + f > n : r + h + f > n) ? h ? (s || l) && (d ? (s || (s = l, l = "", u = 0, h = u), o.push(s), a.push(h - u), l += p, u += f, s = "", h = u) : (l && (s += l, l = "", u = 0), o.push(s), a.push(h), s = p, h = f)) : d ? (o.push(l), a.push(u), l = p, u = f) : (o.push(p), a.push(f)): (h += f, d ? (l += p, u += f) : (l && (s += l, l = "", u = 0), s += p))
      } else l && (s += l, h += u), o.push(s), a.push(h), s = "", l = "", u = 0, h = 0
    }
    return o.length || s || (s = t, l = "", u = 0), l && (s += l), s && (o.push(s), a.push(h)), 1 === o.length && (h += r), {
      accumWidth: h,
      lines: o,
      linesWidths: a
    }
  }

  function so(t, e, n) {
    return j_.copy(t.getBoundingRect()), t.transform && j_.applyTransform(t.transform), Z_.width = e, Z_.height = n, !j_.intersect(Z_)
  }

  function lo(t, e, n, i, r, o) {
    r[0] = K_(t, n), r[1] = K_(e, i), o[0] = $_(t, n), o[1] = $_(e, i)
  }

  function uo(t, e, n, i, r, o, a, s, l, u) {
    var h = tn,
      c = $e,
      p = h(t, n, r, a, rx);
    l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
    for (var f = 0; p > f; f++) {
      var d = c(t, n, r, a, rx[f]);
      l[0] = K_(d, l[0]), u[0] = $_(d, u[0])
    }
    p = h(e, i, o, s, ox);
    for (var f = 0; p > f; f++) {
      var g = c(e, i, o, s, ox[f]);
      l[1] = K_(g, l[1]), u[1] = $_(g, u[1])
    }
    l[0] = K_(t, l[0]), u[0] = $_(t, u[0]), l[0] = K_(a, l[0]), u[0] = $_(a, u[0]), l[1] = K_(e, l[1]), u[1] = $_(e, u[1]), l[1] = K_(s, l[1]), u[1] = $_(s, u[1])
  }

  function ho(t, e, n, i, r, o, a, s) {
    var l = ln,
      u = on,
      h = $_(K_(l(t, n, r), 1), 0),
      c = $_(K_(l(e, i, o), 1), 0),
      p = u(t, n, r, h),
      f = u(e, i, o, c);
    a[0] = K_(t, r, p), a[1] = K_(e, o, f), s[0] = $_(t, r, p), s[1] = $_(e, o, f)
  }

  function co(t, e, n, i, r, o, a, s, l) {
    var u = ye,
      h = me,
      c = Math.abs(r - o);
    if (1e-4 > c % tx && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void(l[1] = e + i);
    if (ex[0] = J_(r) * n + t, ex[1] = Q_(r) * i + e, nx[0] = J_(o) * n + t, nx[1] = Q_(o) * i + e, u(s, ex, nx), h(l, ex, nx), r %= tx, 0 > r && (r += tx), o %= tx, 0 > o && (o += tx), r > o && !a ? o += tx : o > r && a && (r += tx), a) {
      var p = o;
      o = r, r = p
    }
    for (var f = 0; o > f; f += Math.PI / 2) f > r && (ix[0] = J_(f) * n + t, ix[1] = Q_(f) * i + e, u(s, ix, s), h(l, ix, l))
  }

  function po(t) {
    var e = Math.round(t / mx * 1e8) / 1e8;
    return e % 2 * mx
  }

  function fo(t, e) {
    var n = po(t[0]);
    0 > n && (n += _x);
    var i = n - t[0],
      r = t[1];
    r += i, !e && r - n >= _x ? r = n + _x : e && n - r >= _x ? r = n - _x : !e && n > r ? r = n + (_x - po(n - r)) : e && r > n && (r = n - (_x - po(r - n))), t[0] = n, t[1] = r
  }

  function go(t, e, n, i, r, o, a) {
    if (0 === r) return !1;
    var s = r,
      l = 0,
      u = t;
    if (a > e + s && a > i + s || e - s > a && i - s > a || o > t + s && o > n + s || t - s > o && n - s > o) return !1;
    if (t === n) return Math.abs(o - t) <= s / 2;
    l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);
    var h = l * o - a + u,
      c = h * h / (l * l + 1);
    return s / 2 * s / 2 >= c
  }

  function vo(t, e, n, i, r, o, a, s, l, u, h) {
    if (0 === l) return !1;
    var c = l;
    if (h > e + c && h > i + c && h > o + c && h > s + c || e - c > h && i - c > h && o - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > a + c || t - c > u && n - c > u && r - c > u && a - c > u) return !1;
    var p = nn(t, e, n, i, r, o, a, s, u, h, null);
    return c / 2 >= p
  }

  function yo(t, e, n, i, r, o, a, s, l) {
    if (0 === a) return !1;
    var u = a;
    if (l > e + u && l > i + u && l > o + u || e - u > l && i - u > l && o - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return !1;
    var h = hn(t, e, n, i, r, o, s, l, null);
    return u / 2 >= h
  }

  function mo(t) {
    return t %= Mx, 0 > t && (t += Mx), t
  }

  function _o(t, e, n, i, r, o, a, s, l) {
    if (0 === a) return !1;
    var u = a;
    s -= t, l -= e;
    var h = Math.sqrt(s * s + l * l);
    if (h - u > n || n > h + u) return !1;
    if (Math.abs(i - r) % Tx < 1e-4) return !0;
    if (o) {
      var c = i;
      i = mo(r), r = mo(c)
    } else i = mo(i), r = mo(r);
    i > r && (r += Tx);
    var p = Math.atan2(l, s);
    return 0 > p && (p += Tx), p >= i && r >= p || p + Tx >= i && r >= p + Tx
  }

  function xo(t, e, n, i, r, o) {
    if (o > e && o > i || e > o && i > o) return 0;
    if (i === e) return 0;
    var a = (o - e) / (i - e),
      s = e > i ? 1 : -1;
    (1 === a || 0 === a) && (s = e > i ? .5 : -.5);
    var l = a * (n - t) + t;
    return l === r ? 1 / 0 : l > r ? s : 0
  }

  function wo(t, e) {
    return Math.abs(t - e) < kx
  }

  function bo() {
    var t = Ax[0];
    Ax[0] = Ax[1], Ax[1] = t
  }

  function So(t, e, n, i, r, o, a, s, l, u) {
    if (u > e && u > i && u > o && u > s || e > u && i > u && o > u && s > u) return 0;
    var h = Je(e, i, o, s, u, Dx);
    if (0 === h) return 0;
    for (var c = 0, p = -1, f = void 0, d = void 0, g = 0; h > g; g++) {
      var v = Dx[g],
        y = 0 === v || 1 === v ? .5 : 1,
        m = $e(t, n, r, a, v);
      l > m || (0 > p && (p = tn(e, i, o, s, Ax), Ax[1] < Ax[0] && p > 1 && bo(), f = $e(e, i, o, s, Ax[0]), p > 1 && (d = $e(e, i, o, s, Ax[1]))), c += 2 === p ? v < Ax[0] ? e > f ? y : -y : v < Ax[1] ? f > d ? y : -y : d > s ? y : -y : v < Ax[0] ? e > f ? y : -y : f > s ? y : -y)
    }
    return c
  }

  function Mo(t, e, n, i, r, o, a, s) {
    if (s > e && s > i && s > o || e > s && i > s && o > s) return 0;
    var l = sn(e, i, o, s, Dx);
    if (0 === l) return 0;
    var u = ln(e, i, o);
    if (u >= 0 && 1 >= u) {
      for (var h = 0, c = on(e, i, o, u), p = 0; l > p; p++) {
        var f = 0 === Dx[p] || 1 === Dx[p] ? .5 : 1,
          d = on(t, n, r, Dx[p]);
        a > d || (h += Dx[p] < u ? e > c ? f : -f : c > o ? f : -f)
      }
      return h
    }
    var f = 0 === Dx[0] || 1 === Dx[0] ? .5 : 1,
      d = on(t, n, r, Dx[0]);
    return a > d ? 0 : e > o ? f : -f
  }

  function To(t, e, n, i, r, o, a, s) {
    if (s -= e, s > n || -n > s) return 0;
    var l = Math.sqrt(n * n - s * s);
    Dx[0] = -l, Dx[1] = l;
    var u = Math.abs(i - r);
    if (1e-4 > u) return 0;
    if (u >= Ix - 1e-4) {
      i = 0, r = Ix;
      var h = o ? 1 : -1;
      return a >= Dx[0] + t && a <= Dx[1] + t ? h : 0
    }
    if (i > r) {
      var c = i;
      i = r, r = c
    }
    0 > i && (i += Ix, r += Ix);
    for (var p = 0, f = 0; 2 > f; f++) {
      var d = Dx[f];
      if (d + t > a) {
        var g = Math.atan2(s, d),
          h = o ? 1 : -1;
        0 > g && (g = Ix + g), (g >= i && r >= g || g + Ix >= i && r >= g + Ix) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (h = -h), p += h)
      }
    }
    return p
  }

  function Co(t, e, n, i, r) {
    for (var o, a, s = t.data, l = t.len(), u = 0, h = 0, c = 0, p = 0, f = 0, d = 0; l > d;) {
      var g = s[d++],
        v = 1 === d;
      switch (g === Cx.M && d > 1 && (n || (u += xo(h, c, p, f, i, r))), v && (h = s[d], c = s[d + 1], p = h, f = c), g) {
        case Cx.M:
          p = s[d++], f = s[d++], h = p, c = f;
          break;
        case Cx.L:
          if (n) {
            if (go(h, c, s[d], s[d + 1], e, i, r)) return !0
          } else u += xo(h, c, s[d], s[d + 1], i, r) || 0;
          h = s[d++], c = s[d++];
          break;
        case Cx.C:
          if (n) {
            if (vo(h, c, s[d++], s[d++], s[d++], s[d++], s[d], s[d + 1], e, i, r)) return !0
          } else u += So(h, c, s[d++], s[d++], s[d++], s[d++], s[d], s[d + 1], i, r) || 0;
          h = s[d++], c = s[d++];
          break;
        case Cx.Q:
          if (n) {
            if (yo(h, c, s[d++], s[d++], s[d], s[d + 1], e, i, r)) return !0
          } else u += Mo(h, c, s[d++], s[d++], s[d], s[d + 1], i, r) || 0;
          h = s[d++], c = s[d++];
          break;
        case Cx.A:
          var y = s[d++],
            m = s[d++],
            _ = s[d++],
            x = s[d++],
            w = s[d++],
            b = s[d++];
          d += 1;
          var S = !!(1 - s[d++]);
          o = Math.cos(w) * _ + y, a = Math.sin(w) * x + m, v ? (p = o, f = a) : u += xo(h, c, o, a, i, r);
          var M = (i - y) * x / _ + y;
          if (n) {
            if (_o(y, m, x, w, w + b, S, e, M, r)) return !0
          } else u += To(y, m, x, w, w + b, S, M, r);
          h = Math.cos(w + b) * _ + y, c = Math.sin(w + b) * x + m;
          break;
        case Cx.R:
          p = h = s[d++], f = c = s[d++];
          var T = s[d++],
            C = s[d++];
          if (o = p + T, a = f + C, n) {
            if (go(p, f, o, f, e, i, r) || go(o, f, o, a, e, i, r) || go(o, a, p, a, e, i, r) || go(p, a, p, f, e, i, r)) return !0
          } else u += xo(o, f, o, a, i, r), u += xo(p, a, p, f, i, r);
          break;
        case Cx.Z:
          if (n) {
            if (go(h, c, p, f, e, i, r)) return !0
          } else u += xo(h, c, p, f, i, r);
          h = p, c = f
      }
    }
    return n || wo(c, f) || (u += xo(h, c, p, f, i, r) || 0), 0 !== u
  }

  function Io(t, e, n) {
    return Co(t, 0, !1, e, n)
  }

  function ko(t, e, n, i) {
    return Co(t, e, !0, n, i)
  }

  function Do(t) {
    return !!(t && "string" != typeof t && t.width && t.height)
  }

  function Ao(t, e) {
    var n, i, r, o, a = e.x,
      s = e.y,
      l = e.width,
      u = e.height,
      h = e.r;
    0 > l && (a += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = o = h : h instanceof Array ? 1 === h.length ? n = i = r = o = h[0] : 2 === h.length ? (n = r = h[0], i = o = h[1]) : 3 === h.length ? (n = h[0], i = o = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], o = h[3]) : n = i = r = o = 0;
    var c;
    n + i > l && (c = n + i, n *= l / c, i *= l / c), r + o > l && (c = r + o, r *= l / c, o *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + o > u && (c = n + o, n *= u / c, o *= u / c), t.moveTo(a + n, s), t.lineTo(a + l - i, s), 0 !== i && t.arc(a + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(a + l, s + u - r), 0 !== r && t.arc(a + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(a + o, s + u), 0 !== o && t.arc(a + o, s + u - o, o, Math.PI / 2, Math.PI), t.lineTo(a, s + n), 0 !== n && t.arc(a + n, s + n, n, Math.PI, 1.5 * Math.PI)
  }

  function Po(t, e, n) {
    if (e) {
      var i = e.x1,
        r = e.x2,
        o = e.y1,
        a = e.y2;
      t.x1 = i, t.x2 = r, t.y1 = o, t.y2 = a;
      var s = n && n.lineWidth;
      return s ? (Hx(2 * i) === Hx(2 * r) && (t.x1 = t.x2 = Oo(i, s, !0)), Hx(2 * o) === Hx(2 * a) && (t.y1 = t.y2 = Oo(o, s, !0)), t) : t
    }
  }

  function Lo(t, e, n) {
    if (e) {
      var i = e.x,
        r = e.y,
        o = e.width,
        a = e.height;
      t.x = i, t.y = r, t.width = o, t.height = a;
      var s = n && n.lineWidth;
      return s ? (t.x = Oo(i, s, !0), t.y = Oo(r, s, !0), t.width = Math.max(Oo(i + o, s, !1) - t.x, 0 === o ? 0 : 1), t.height = Math.max(Oo(r + a, s, !1) - t.y, 0 === a ? 0 : 1), t) : t
    }
  }

  function Oo(t, e, n) {
    if (!e) return t;
    var i = Hx(2 * t);
    return (i + Hx(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
  }

  function Ro(t) {
    return "string" != typeof t || -1 === t.indexOf("px") && -1 === t.indexOf("rem") && -1 === t.indexOf("em") ? isNaN(+t) ? Uv + "px" : t + "px" : t
  }

  function Bo(t, e) {
    for (var n = 0; n < Kx.length; n++) {
      var i = Kx[n],
        r = e[i];
      null != r && (t[i] = r)
    }
  }

  function zo(t) {
    return null != t.fontSize || t.fontFamily || t.fontWeight
  }

  function Eo(t) {
    return No(t), v(t.rich, No), t
  }

  function No(t) {
    if (t) {
      t.font = qx.makeFont(t);
      var e = t.align;
      "middle" === e && (e = "center"), t.align = null == e || jx[e] ? e : "left";
      var n = t.verticalAlign;
      "center" === n && (n = "middle"), t.verticalAlign = null == n || Zx[n] ? n : "top";
      var i = t.padding;
      i && (t.padding = V(t.padding))
    }
  }

  function Fo(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
  }

  function Ho(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
  }

  function Vo(t, e, n) {
    return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
  }

  function Wo(t) {
    var e = t.text;
    return null != e && (e += ""), e
  }

  function Go(t) {
    return !!(t.backgroundColor || t.lineHeight || t.borderWidth && t.borderColor)
  }

  function Uo(t) {
    return null != t && "none" !== t
  }

  function Xo(t) {
    if (C(t)) {
      var e = gw.get(t);
      return e || (e = Cn(t, -.1), gw.put(t, e)), e
    }
    if (O(t)) {
      var n = h({}, t);
      return n.colorStops = y(t.colorStops, function (t) {
        return {
          offset: t.offset,
          color: Cn(t.color, -.1)
        }
      }), n
    }
    return t
  }

  function Yo(t, e, n) {
    t.onHoverStateChange && (t.hoverState || 0) !== n && t.onHoverStateChange(e), t.hoverState = n
  }

  function qo(t) {
    Yo(t, "emphasis", ow)
  }

  function jo(t) {
    t.hoverState === ow && Yo(t, "normal", iw)
  }

  function Zo(t) {
    Yo(t, "blur", rw)
  }

  function Ko(t) {
    t.hoverState === rw && Yo(t, "normal", iw)
  }

  function $o(t) {
    t.selected = !0
  }

  function Qo(t) {
    t.selected = !1
  }

  function Jo(t, e, n) {
    e(t, n)
  }

  function ta(t, e, n) {
    Jo(t, e, n), t.isGroup && t.traverse(function (t) {
      Jo(t, e, n)
    })
  }

  function ea(t, e, n, i) {
    for (var r = t.style, o = {}, a = 0; a < e.length; a++) {
      var s = e[a],
        l = r[s];
      o[s] = null == l ? i && i[s] : l
    }
    for (var a = 0; a < t.animators.length; a++) {
      var u = t.animators[a];
      u.__fromStateTransition && u.__fromStateTransition.indexOf(n) < 0 && "style" === u.targetName && u.saveTo(o, e)
    }
    return o
  }

  function na(t, e, n, i) {
    var r = n && p(n, "select") >= 0,
      o = !1;
    if (t instanceof Rx) {
      var a = ew(t),
        s = r ? a.selectFill || a.normalFill : a.normalFill,
        l = r ? a.selectStroke || a.normalStroke : a.normalStroke;
      if (Uo(s) || Uo(l)) {
        i = i || {};
        var u = i.style || {};
        "inherit" === u.fill ? (o = !0, i = h({}, i), u = h({}, u), u.fill = s) : !Uo(u.fill) && Uo(s) ? (o = !0, i = h({}, i), u = h({}, u), u.fill = Xo(s)) : !Uo(u.stroke) && Uo(l) && (o || (i = h({}, i), u = h({}, u)), u.stroke = Xo(l)), i.style = u
      }
    }
    if (i && null == i.z2) {
      o || (i = h({}, i));
      var c = t.z2EmphasisLift;
      i.z2 = t.z2 + (null != c ? c : lw)
    }
    return i
  }

  function ia(t, e, n) {
    if (n && null == n.z2) {
      n = h({}, n);
      var i = t.z2SelectLift;
      n.z2 = t.z2 + (null != i ? i : uw)
    }
    return n
  }

  function ra(t, e, n) {
    var i = p(t.currentStates, e) >= 0,
      r = t.style.opacity,
      o = i ? null : ea(t, ["opacity"], e, {
        opacity: 1
      });
    n = n || {};
    var a = n.style || {};
    return null == a.opacity && (n = h({}, n), a = h({
      opacity: i ? r : .1 * o.opacity
    }, a), n.style = a), n
  }

  function oa(t, e) {
    var n = this.states[t];
    if (this.style) {
      if ("emphasis" === t) return na(this, t, e, n);
      if ("blur" === t) return ra(this, t, n);
      if ("select" === t) return ia(this, t, n)
    }
    return n
  }

  function aa(t) {
    t.stateProxy = oa;
    var e = t.getTextContent(),
      n = t.getTextGuideLine();
    e && (e.stateProxy = oa), n && (n.stateProxy = oa)
  }

  function sa(t, e) {
    !ga(t, e) && !t.__highByOuter && ta(t, qo)
  }

  function la(t, e) {
    !ga(t, e) && !t.__highByOuter && ta(t, jo)
  }

  function ua(t, e) {
    t.__highByOuter |= 1 << (e || 0), ta(t, qo)
  }

  function ha(t, e) {
    !(t.__highByOuter &= ~(1 << (e || 0))) && ta(t, jo)
  }

  function ca(t) {
    ta(t, Zo)
  }

  function pa(t) {
    ta(t, Ko)
  }

  function fa(t) {
    ta(t, $o)
  }

  function da(t) {
    ta(t, Qo)
  }

  function ga(t, e) {
    return t.__highDownSilentOnTouch && e.zrByTouch
  }

  function va(t) {
    var e = t.getModel(),
      n = [],
      i = [];
    e.eachComponent(function (e, r) {
      var o = nw(r),
        a = "series" === e,
        s = a ? t.getViewOfSeriesModel(r) : t.getViewOfComponentModel(r);
      !a && i.push(s), o.isBlured && (s.group.traverse(function (t) {
        Ko(t)
      }), a && n.push(r)), o.isBlured = !1
    }), v(i, function (t) {
      t && t.toggleBlurSeries && t.toggleBlurSeries(n, !1, e)
    })
  }

  function ya(t, e, n, i) {
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = t.getItemGraphicEl(e[n]);
        i && pa(i)
      }
    }
    var o = i.getModel();
    if (n = n || "coordinateSystem", null != t && e && "none" !== e) {
      var a = o.getSeriesByIndex(t),
        s = a.coordinateSystem;
      s && s.master && (s = s.master);
      var l = [];
      o.eachSeries(function (t) {
        var o = a === t,
          u = t.coordinateSystem;
        u && u.master && (u = u.master);
        var h = u && s ? u === s : o;
        if (!("series" === n && !o || "coordinateSystem" === n && !h || "series" === e && o)) {
          var c = i.getViewOfSeriesModel(t);
          if (c.group.traverse(function (t) {
              Zo(t)
            }), g(e)) r(t.getData(), e);
          else if (D(e))
            for (var p = w(e), f = 0; f < p.length; f++) r(t.getData(p[f]), e[p[f]]);
          l.push(t), nw(t).isBlured = !0
        }
      }), o.eachComponent(function (t, e) {
        if ("series" !== t) {
          var n = i.getViewOfComponentModel(e);
          n && n.toggleBlurSeries && n.toggleBlurSeries(l, !0, o)
        }
      })
    }
  }

  function ma(t, e, n) {
    if (null != t && null != e) {
      var i = n.getModel().getComponent(t, e);
      if (i) {
        nw(i).isBlured = !0;
        var r = n.getViewOfComponentModel(i);
        r && r.focusBlurEnabled && r.group.traverse(function (t) {
          Zo(t)
        })
      }
    }
  }

  function _a(t, e, n) {
    var i = t.seriesIndex,
      r = t.getData(e.dataType);
    if (r) {
      var o = Ir(r, e);
      o = (M(o) ? o[0] : o) || 0;
      var a = r.getItemGraphicEl(o);
      if (!a)
        for (var s = r.count(), l = 0; !a && s > l;) a = r.getItemGraphicEl(l++);
      if (a) {
        var u = $x(a);
        ya(i, u.focus, u.blurScope, n)
      } else {
        var h = t.get(["emphasis", "focus"]),
          c = t.get(["emphasis", "blurScope"]);
        null != h && ya(i, h, c, n)
      }
    }
  }

  function xa(t, e, n, i) {
    var r = {
      focusSelf: !1,
      dispatchers: null
    };
    if (null == t || "series" === t || null == e || null == n) return r;
    var o = i.getModel().getComponent(t, e);
    if (!o) return r;
    var a = i.getViewOfComponentModel(o);
    if (!a || !a.findHighDownDispatchers) return r;
    for (var s, l = a.findHighDownDispatchers(n), u = 0; u < l.length; u++)
      if ("self" === $x(l[u]).focus) {
        s = !0;
        break
      } return {
      focusSelf: s,
      dispatchers: l
    }
  }

  function wa(t, e, n) {
    var i = $x(t),
      r = xa(i.componentMainType, i.componentIndex, i.componentHighDownName, n),
      o = r.dispatchers,
      a = r.focusSelf;
    o ? (a && ma(i.componentMainType, i.componentIndex, n), v(o, function (t) {
      return sa(t, e)
    })) : (ya(i.seriesIndex, i.focus, i.blurScope, n), "self" === i.focus && ma(i.componentMainType, i.componentIndex, n), sa(t, e))
  }

  function ba(t, e, n) {
    va(n);
    var i = $x(t),
      r = xa(i.componentMainType, i.componentIndex, i.componentHighDownName, n).dispatchers;
    r ? v(r, function (t) {
      return la(t, e)
    }) : la(t, e)
  }

  function Sa(t, e) {
    if (Ra(e)) {
      var n = e.dataType,
        i = t.getData(n),
        r = Ir(i, e);
      M(r) || (r = [r]), t[e.type === dw ? "toggleSelect" : e.type === pw ? "select" : "unselect"](r, n)
    }
  }

  function Ma(t) {
    var e = t.getAllData();
    v(e, function (e) {
      var n = e.data,
        i = e.type;
      n.eachItemGraphicEl(function (e, n) {
        t.isSelected(n, i) ? fa(e) : da(e)
      })
    })
  }

  function Ta(t) {
    var e = [];
    return t.eachSeries(function (t) {
      var n = t.getAllData();
      v(n, function (n) {
        var i = (n.data, n.type),
          r = t.getSelectedDataIndices();
        if (r.length > 0) {
          var o = {
            dataIndex: r,
            seriesIndex: t.seriesIndex
          };
          null != i && (o.dataType = i), e.push(o)
        }
      })
    }), e
  }

  function Ca(t, e, n) {
    Pa(t, !0), ta(t, aa), Da(t, e, n)
  }

  function Ia(t) {
    Pa(t, !1)
  }

  function ka(t, e, n, i) {
    i ? Ia(t) : Ca(t, e, n)
  }

  function Da(t, e, n) {
    var i = $x(t);
    null != e ? (i.focus = e, i.blurScope = n) : i.focus && (i.focus = null)
  }

  function Aa(t, e, n, i) {
    n = n || "itemStyle";
    for (var r = 0; r < vw.length; r++) {
      var o = vw[r],
        a = e.getModel([o, n]),
        s = t.ensureState(o);
      s.style = i ? i(a) : a[yw[n]]()
    }
  }

  function Pa(t, e) {
    var n = e === !1,
      i = t;
    t.highDownSilentOnTouch && (i.__highDownSilentOnTouch = t.highDownSilentOnTouch), (!n || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !n)
  }

  function La(t) {
    return !(!t || !t.__highDownDispatcher)
  }

  function Oa(t) {
    var e = tw[t];
    return null == e && 32 >= Jx && (e = tw[t] = Jx++), e
  }

  function Ra(t) {
    var e = t.type;
    return e === pw || e === fw || e === dw
  }

  function Ba(t) {
    var e = t.type;
    return e === hw || e === cw
  }

  function za(t) {
    var e = ew(t);
    e.normalFill = t.style.fill, e.normalStroke = t.style.stroke;
    var n = t.states.select || {};
    e.selectFill = n.style && n.style.fill || null, e.selectStroke = n.style && n.style.stroke || null
  }

  function Ea(t, e) {
    if (e) {
      var n, i, r, o, a, s, l = t.data,
        u = t.len(),
        h = mw.M,
        c = mw.C,
        p = mw.L,
        f = mw.R,
        d = mw.A,
        g = mw.Q;
      for (r = 0, o = 0; u > r;) {
        switch (n = l[r++], o = r, i = 0, n) {
          case h:
            i = 1;
            break;
          case p:
            i = 1;
            break;
          case c:
            i = 3;
            break;
          case g:
            i = 2;
            break;
          case d:
            var v = e[4],
              y = e[5],
              m = xw(e[0] * e[0] + e[1] * e[1]),
              _ = xw(e[2] * e[2] + e[3] * e[3]),
              x = ww(-e[1] / _, e[0] / m);
            l[r] *= m, l[r++] += v, l[r] *= _, l[r++] += y, l[r++] *= m, l[r++] *= _, l[r++] += x, l[r++] += x, r += 2, o = r;
            break;
          case f:
            s[0] = l[r++], s[1] = l[r++], ve(s, s, e), l[o++] = s[0], l[o++] = s[1], s[0] += l[r++], s[1] += l[r++], ve(s, s, e), l[o++] = s[0], l[o++] = s[1]
        }
        for (a = 0; i > a; a++) {
          var w = _w[a];
          w[0] = l[r++], w[1] = l[r++], ve(w, w, e), l[o++] = w[0], l[o++] = w[1]
        }
      }
      t.increaseVersion()
    }
  }

  function Na(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1])
  }

  function Fa(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (Na(t) * Na(e))
  }

  function Ha(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Fa(t, e))
  }

  function Va(t, e, n, i, r, o, a, s, l, u, h) {
    var c = l * (Tw / 180),
      p = Mw(c) * (t - n) / 2 + Sw(c) * (e - i) / 2,
      f = -1 * Sw(c) * (t - n) / 2 + Mw(c) * (e - i) / 2,
      d = p * p / (a * a) + f * f / (s * s);
    d > 1 && (a *= bw(d), s *= bw(d));
    var g = (r === o ? -1 : 1) * bw((a * a * s * s - a * a * f * f - s * s * p * p) / (a * a * f * f + s * s * p * p)) || 0,
      v = g * a * f / s,
      y = g * -s * p / a,
      m = (t + n) / 2 + Mw(c) * v - Sw(c) * y,
      _ = (e + i) / 2 + Sw(c) * v + Mw(c) * y,
      x = Ha([1, 0], [(p - v) / a, (f - y) / s]),
      w = [(p - v) / a, (f - y) / s],
      b = [(-1 * p - v) / a, (-1 * f - y) / s],
      S = Ha(w, b);
    if (Fa(w, b) <= -1 && (S = Tw), Fa(w, b) >= 1 && (S = 0), 0 > S) {
      var M = Math.round(S / Tw * 1e6) / 1e6;
      S = 2 * Tw + M % 2 * Tw
    }
    h.addData(u, m, _, a, s, x, S, c, o)
  }

  function Wa(t) {
    var e = new Sx;
    if (!t) return e;
    var n, i = 0,
      r = 0,
      o = i,
      a = r,
      s = Sx.CMD,
      l = t.match(Cw);
    if (!l) return e;
    for (var u = 0; u < l.length; u++) {
      for (var h = l[u], c = h.charAt(0), p = void 0, f = h.match(Iw) || [], d = f.length, g = 0; d > g; g++) f[g] = parseFloat(f[g]);
      for (var v = 0; d > v;) {
        var y = void 0,
          m = void 0,
          _ = void 0,
          x = void 0,
          w = void 0,
          b = void 0,
          S = void 0,
          M = i,
          T = r,
          C = void 0,
          I = void 0;
        switch (c) {
          case "l":
            i += f[v++], r += f[v++], p = s.L, e.addData(p, i, r);
            break;
          case "L":
            i = f[v++], r = f[v++], p = s.L, e.addData(p, i, r);
            break;
          case "m":
            i += f[v++], r += f[v++], p = s.M, e.addData(p, i, r), o = i, a = r, c = "l";
            break;
          case "M":
            i = f[v++], r = f[v++], p = s.M, e.addData(p, i, r), o = i, a = r, c = "L";
            break;
          case "h":
            i += f[v++], p = s.L, e.addData(p, i, r);
            break;
          case "H":
            i = f[v++], p = s.L, e.addData(p, i, r);
            break;
          case "v":
            r += f[v++], p = s.L, e.addData(p, i, r);
            break;
          case "V":
            r = f[v++], p = s.L, e.addData(p, i, r);
            break;
          case "C":
            p = s.C, e.addData(p, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), i = f[v - 2], r = f[v - 1];
            break;
          case "c":
            p = s.C, e.addData(p, f[v++] + i, f[v++] + r, f[v++] + i, f[v++] + r, f[v++] + i, f[v++] + r), i += f[v - 2], r += f[v - 1];
            break;
          case "S":
            y = i, m = r, C = e.len(), I = e.data, n === s.C && (y += i - I[C - 4], m += r - I[C - 3]), p = s.C, M = f[v++], T = f[v++], i = f[v++], r = f[v++], e.addData(p, y, m, M, T, i, r);
            break;
          case "s":
            y = i, m = r, C = e.len(), I = e.data, n === s.C && (y += i - I[C - 4], m += r - I[C - 3]), p = s.C, M = i + f[v++], T = r + f[v++], i += f[v++], r += f[v++], e.addData(p, y, m, M, T, i, r);
            break;
          case "Q":
            M = f[v++], T = f[v++], i = f[v++], r = f[v++], p = s.Q, e.addData(p, M, T, i, r);
            break;
          case "q":
            M = f[v++] + i, T = f[v++] + r, i += f[v++], r += f[v++], p = s.Q, e.addData(p, M, T, i, r);
            break;
          case "T":
            y = i, m = r, C = e.len(), I = e.data, n === s.Q && (y += i - I[C - 4], m += r - I[C - 3]), i = f[v++], r = f[v++], p = s.Q, e.addData(p, y, m, i, r);
            break;
          case "t":
            y = i, m = r, C = e.len(), I = e.data, n === s.Q && (y += i - I[C - 4], m += r - I[C - 3]), i += f[v++], r += f[v++], p = s.Q, e.addData(p, y, m, i, r);
            break;
          case "A":
            _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = i, T = r, i = f[v++], r = f[v++], p = s.A, Va(M, T, i, r, b, S, _, x, w, p, e);
            break;
          case "a":
            _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = i, T = r, i += f[v++], r += f[v++], p = s.A, Va(M, T, i, r, b, S, _, x, w, p, e)
        }
      }("z" === c || "Z" === c) && (p = s.Z, e.addData(p), i = o, r = a), n = p
    }
    return e.toStatic(), e
  }

  function Ga(t) {
    return null != t.setData
  }

  function Ua(t, e) {
    var n = Wa(t),
      i = h({}, e);
    return i.buildPath = function (t) {
      if (Ga(t)) {
        t.setData(n.data);
        var e = t.getContext();
        e && t.rebuildPath(e, 1)
      } else {
        var e = t;
        n.rebuildPath(e, 1)
      }
    }, i.applyTransform = function (t) {
      Ea(n, t), this.dirtyShape()
    }, i
  }

  function Xa(t, e) {
    return new kw(Ua(t, e))
  }

  function Ya(t, n) {
    var i = Ua(t, n),
      r = function (t) {
        function n(e) {
          var n = t.call(this, e) || this;
          return n.applyTransform = i.applyTransform, n.buildPath = i.buildPath, n
        }
        return e(n, t), n
      }(kw);
    return r
  }

  function qa(t, e) {
    for (var n = [], i = t.length, r = 0; i > r; r++) {
      var o = t[r];
      n.push(o.getUpdatedPathProxy(!0))
    }
    var a = new Rx(e);
    return a.createPathProxy(), a.buildPath = function (t) {
      if (Ga(t)) {
        t.appendPath(n);
        var e = t.getContext();
        e && t.rebuildPath(e, 1)
      }
    }, a
  }

  function ja(t, e, n, i, r, o, a, s) {
    var l = n - t,
      u = i - e,
      h = a - r,
      c = s - o,
      p = c * l - h * u;
    return Gw > p * p ? void 0 : (p = (h * (e - o) - c * (t - r)) / p, [t + p * l, e + p * u])
  }

  function Za(t, e, n, i, r, o, a) {
    var s = t - n,
      l = e - i,
      u = (a ? o : -o) / Hw(s * s + l * l),
      h = u * l,
      c = -u * s,
      p = t + h,
      f = e + c,
      d = n + h,
      g = i + c,
      v = (p + d) / 2,
      y = (f + g) / 2,
      m = d - p,
      _ = g - f,
      x = m * m + _ * _,
      w = r - o,
      b = p * g - d * f,
      S = (0 > _ ? -1 : 1) * Hw(Vw(0, w * w * x - b * b)),
      M = (b * _ - m * S) / x,
      T = (-b * m - _ * S) / x,
      C = (b * _ + m * S) / x,
      I = (-b * m + _ * S) / x,
      k = M - v,
      D = T - y,
      A = C - v,
      P = I - y;
    return k * k + D * D > A * A + P * P && (M = C, T = I), {
      cx: M,
      cy: T,
      x0: -h,
      y0: -c,
      x1: M * (r / w - 1),
      y1: T * (r / w - 1)
    }
  }

  function Ka(t) {
    var e;
    if (M(t)) {
      var n = t.length;
      if (!n) return t;
      e = 1 === n ? [t[0], t[0], 0, 0] : 2 === n ? [t[0], t[0], t[1], t[1]] : 3 === n ? t.concat(t[2]) : t
    } else e = [t, t, t, t];
    return e
  }

  function $a(t, e) {
    var n, i = Vw(e.r, 0),
      r = Vw(e.r0 || 0, 0),
      o = i > 0,
      a = r > 0;
    if (o || a) {
      if (o || (i = r, r = 0), r > i) {
        var s = i;
        i = r, r = s
      }
      var l = e.startAngle,
        u = e.endAngle;
      if (!isNaN(l) && !isNaN(u)) {
        var h = e.cx,
          c = e.cy,
          p = !!e.clockwise,
          f = Fw(u - l),
          d = f > Rw && f % Rw;
        if (d > Gw && (f = d), i > Gw)
          if (f > Rw - Gw) t.moveTo(h + i * zw(l), c + i * Bw(l)), t.arc(h, c, i, l, u, !p), r > Gw && (t.moveTo(h + r * zw(u), c + r * Bw(u)), t.arc(h, c, r, u, l, p));
          else {
            var g = void 0,
              v = void 0,
              y = void 0,
              m = void 0,
              _ = void 0,
              x = void 0,
              w = void 0,
              b = void 0,
              S = void 0,
              M = void 0,
              T = void 0,
              C = void 0,
              I = void 0,
              k = void 0,
              D = void 0,
              A = void 0,
              P = i * zw(l),
              L = i * Bw(l),
              O = r * zw(u),
              R = r * Bw(u),
              B = f > Gw;
            if (B) {
              var z = e.cornerRadius;
              z && (n = Ka(z), g = n[0], v = n[1], y = n[2], m = n[3]);
              var E = Fw(i - r) / 2;
              if (_ = Ww(E, y), x = Ww(E, m), w = Ww(E, g), b = Ww(E, v), T = S = Vw(_, x), C = M = Vw(w, b), (S > Gw || M > Gw) && (I = i * zw(u), k = i * Bw(u), D = r * zw(l), A = r * Bw(l), Ow > f)) {
                var N = ja(P, L, D, A, I, k, O, R);
                if (N) {
                  var F = P - N[0],
                    H = L - N[1],
                    V = I - N[0],
                    W = k - N[1],
                    G = 1 / Bw(Ew((F * V + H * W) / (Hw(F * F + H * H) * Hw(V * V + W * W))) / 2),
                    U = Hw(N[0] * N[0] + N[1] * N[1]);
                  T = Ww(S, (i - U) / (G + 1)), C = Ww(M, (r - U) / (G - 1))
                }
              }
            }
            if (B)
              if (T > Gw) {
                var X = Ww(y, T),
                  Y = Ww(m, T),
                  q = Za(D, A, P, L, i, X, p),
                  j = Za(I, k, O, R, i, Y, p);
                t.moveTo(h + q.cx + q.x0, c + q.cy + q.y0), S > T && X === Y ? t.arc(h + q.cx, c + q.cy, T, Nw(q.y0, q.x0), Nw(j.y0, j.x0), !p) : (X > 0 && t.arc(h + q.cx, c + q.cy, X, Nw(q.y0, q.x0), Nw(q.y1, q.x1), !p), t.arc(h, c, i, Nw(q.cy + q.y1, q.cx + q.x1), Nw(j.cy + j.y1, j.cx + j.x1), !p), Y > 0 && t.arc(h + j.cx, c + j.cy, Y, Nw(j.y1, j.x1), Nw(j.y0, j.x0), !p))
              } else t.moveTo(h + P, c + L), t.arc(h, c, i, l, u, !p);
            else t.moveTo(h + P, c + L);
            if (r > Gw && B)
              if (C > Gw) {
                var X = Ww(g, C),
                  Y = Ww(v, C),
                  q = Za(O, R, I, k, r, -Y, p),
                  j = Za(P, L, D, A, r, -X, p);
                t.lineTo(h + q.cx + q.x0, c + q.cy + q.y0), M > C && X === Y ? t.arc(h + q.cx, c + q.cy, C, Nw(q.y0, q.x0), Nw(j.y0, j.x0), !p) : (Y > 0 && t.arc(h + q.cx, c + q.cy, Y, Nw(q.y0, q.x0), Nw(q.y1, q.x1), !p), t.arc(h, c, r, Nw(q.cy + q.y1, q.cx + q.x1), Nw(j.cy + j.y1, j.cx + j.x1), p), X > 0 && t.arc(h + j.cx, c + j.cy, X, Nw(j.y1, j.x1), Nw(j.y0, j.x0), !p))
              } else t.lineTo(h + O, c + R), t.arc(h, c, r, u, l, p);
            else t.lineTo(h + O, c + R)
          }
        else t.moveTo(h, c);
        t.closePath()
      }
    }
  }

  function Qa(t, e, n, i) {
    var r, o, a, s, l = [],
      u = [],
      h = [],
      c = [];
    if (i) {
      a = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
      for (var p = 0, f = t.length; f > p; p++) ye(a, a, t[p]), me(s, s, t[p]);
      ye(a, a, i[0]), me(s, s, i[1])
    }
    for (var p = 0, f = t.length; f > p; p++) {
      var d = t[p];
      if (n) r = t[p ? p - 1 : f - 1], o = t[(p + 1) % f];
      else {
        if (0 === p || p === f - 1) {
          l.push(te(t[p]));
          continue
        }
        r = t[p - 1], o = t[p + 1]
      }
      re(u, o, r), he(u, u, e);
      var g = pe(d, r),
        v = pe(d, o),
        y = g + v;
      0 !== y && (g /= y, v /= y), he(h, u, -g), he(c, u, v);
      var m = ne([], d, h),
        _ = ne([], d, c);
      i && (me(m, m, a), ye(m, m, s), me(_, _, a), ye(_, _, s)), l.push(m), l.push(_)
    }
    return n && l.push(l.shift()), l
  }

  function Ja(t, e, n) {
    var i = e.smooth,
      r = e.points;
    if (r && r.length >= 2) {
      if (i) {
        var o = Qa(r, i, n, e.smoothConstraint);
        t.moveTo(r[0][0], r[0][1]);
        for (var a = r.length, s = 0;
          (n ? a : a - 1) > s; s++) {
          var l = o[2 * s],
            u = o[2 * s + 1],
            h = r[(s + 1) % a];
          t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
        }
      } else {
        t.moveTo(r[0][0], r[0][1]);
        for (var s = 1, c = r.length; c > s; s++) t.lineTo(r[s][0], r[s][1])
      }
      n && t.closePath()
    }
  }

  function ts(t, e, n) {
    var i = t.cpx2,
      r = t.cpy2;
    return null != i || null != r ? [(n ? Qe : $e)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Qe : $e)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? an : on)(t.x1, t.cpx1, t.x2, e), (n ? an : on)(t.y1, t.cpy1, t.y2, e)]
  }

  function es(t, e, n, i, r) {
    var o;
    if (e && e.ecModel) {
      var a = e.ecModel.getUpdatePayload();
      o = a && a.animation
    }
    var s = e && e.isAnimationEnabled(),
      l = "update" === t;
    if (s) {
      var u = void 0,
        h = void 0,
        c = void 0;
      i ? (u = N(i.duration, 200), h = N(i.easing, "cubicOut"), c = 0) : (u = e.getShallow(l ? "animationDurationUpdate" : "animationDuration"), h = e.getShallow(l ? "animationEasingUpdate" : "animationEasing"), c = e.getShallow(l ? "animationDelayUpdate" : "animationDelay")), o && (null != o.duration && (u = o.duration), null != o.easing && (h = o.easing), null != o.delay && (c = o.delay)), T(c) && (c = c(n, r)), T(u) && (u = u(n));
      var p = {
        duration: u || 0,
        delay: c,
        easing: h
      };
      return p
    }
    return null
  }

  function ns(t, e, n, i, r, o, a) {
    var s, l = !1;
    T(r) ? (a = o, o = r, r = null) : D(r) && (o = r.cb, a = r.during, l = r.isFrom, s = r.removeOpt, r = r.dataIndex);
    var u = "leave" === t;
    u || e.stopAnimation("leave");
    var h = es(t, i, r, u ? s || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null);
    if (h && h.duration > 0) {
      var c = h.duration,
        p = h.delay,
        f = h.easing,
        d = {
          duration: c,
          delay: p || 0,
          easing: f,
          done: o,
          force: !!o || !!a,
          setToFinal: !u,
          scope: t,
          during: a
        };
      l ? e.animateFrom(n, d) : e.animateTo(n, d)
    } else e.stopAnimation(), !l && e.attr(n), a && a(1), o && o()
  }

  function is(t, e, n, i, r, o) {
    ns("update", t, e, n, i, r, o)
  }

  function rs(t, e, n, i, r, o) {
    ns("enter", t, e, n, i, r, o)
  }

  function os(t) {
    if (!t.__zr) return !0;
    for (var e = 0; e < t.animators.length; e++) {
      var n = t.animators[e];
      if ("leave" === n.scope) return !0
    }
    return !1
  }

  function as(t, e, n, i, r, o) {
    os(t) || ns("leave", t, e, n, i, r, o)
  }

  function ss(t, e, n, i) {
    t.removeTextContent(), t.removeTextGuideLine(), as(t, {
      style: {
        opacity: 0
      }
    }, e, n, i)
  }

  function ls(t, e, n) {
    function i() {
      t.parent && t.parent.remove(t)
    }
    t.isGroup ? t.traverse(function (t) {
      t.isGroup || ss(t, e, n, i)
    }) : ss(t, e, n, i)
  }

  function us(t) {
    return Rx.extend(t)
  }

  function hs(t, e) {
    return xb(t, e)
  }

  function cs(t, e) {
    _b[t] = e
  }

  function ps(t) {
    return _b.hasOwnProperty(t) ? _b[t] : void 0
  }

  function fs(t, e, n, i) {
    var r = Xa(t, e);
    return n && ("center" === i && (n = gs(n, r.getBoundingRect())), vs(r, n)), r
  }

  function ds(t, e, n) {
    var i = new Fx({
      style: {
        image: t,
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height
      },
      onload: function (t) {
        if ("center" === n) {
          var r = {
            width: t.width,
            height: t.height
          };
          i.setStyle(gs(e, r))
        }
      }
    });
    return i
  }

  function gs(t, e) {
    var n, i = e.width / e.height,
      r = t.height * i;
    r <= t.width ? n = t.height : (r = t.width, n = r / i);
    var o = t.x + t.width / 2,
      a = t.y + t.height / 2;
    return {
      x: o - r / 2,
      y: a - n / 2,
      width: r,
      height: n
    }
  }

  function vs(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
        i = n.calculateTransform(e);
      t.applyTransform(i)
    }
  }

  function ys(t) {
    return Po(t.shape, t.shape, t.style), t
  }

  function ms(t) {
    return Lo(t.shape, t.shape, t.style), t
  }

  function _s(t, e) {
    for (var n = ai([]); t && t !== e;) li(n, t.getLocalTransform(), n), t = t.parent;
    return n
  }

  function xs(t, e, n) {
    return e && !g(e) && (e = Zm.getLocalTransform(e)), n && (e = pi([], e)), ve([], t, e)
  }

  function ws(t, e, n) {
    var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
      r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
      o = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
    return o = xs(o, e, n), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
  }

  function bs(t) {
    return !t.isGroup
  }

  function Ss(t) {
    return null != t.shape
  }

  function Ms(t, e, n) {
    function i(t) {
      var e = {};
      return t.traverse(function (t) {
        bs(t) && t.anid && (e[t.anid] = t)
      }), e
    }

    function r(t) {
      var e = {
        x: t.x,
        y: t.y,
        rotation: t.rotation
      };
      return Ss(t) && (e.shape = h({}, t.shape)), e
    }
    if (t && e) {
      var o = i(t);
      e.traverse(function (t) {
        if (bs(t) && t.anid) {
          var e = o[t.anid];
          if (e) {
            var i = r(t);
            t.attr(r(e)), is(t, i, n, $x(t).dataIndex)
          }
        }
      })
    }
  }

  function Ts(t, e) {
    return y(t, function (t) {
      var n = t[0];
      n = yb(n, e.x), n = mb(n, e.x + e.width);
      var i = t[1];
      return i = yb(i, e.y), i = mb(i, e.y + e.height), [n, i]
    })
  }

  function Cs(t, e) {
    var n = yb(t.x, e.x),
      i = mb(t.x + t.width, e.x + e.width),
      r = yb(t.y, e.y),
      o = mb(t.y + t.height, e.y + e.height);
    return i >= n && o >= r ? {
      x: n,
      y: r,
      width: i - n,
      height: o - r
    } : void 0
  }

  function Is(t, e, n) {
    var i = h({
        rectHover: !0
      }, e),
      r = i.style = {
        strokeNoScale: !0
      };
    return n = n || {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }, t ? 0 === t.indexOf("image://") ? (r.image = t.slice(8), c(r, n), new Fx(i)) : fs(t.replace("path://", ""), i, n, "center") : void 0
  }

  function ks(t, e, n, i, r) {
    for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
      var s = r[o];
      if (Ds(t, e, n, i, s[0], s[1], a[0], a[1])) return !0;
      a = s
    }
  }

  function Ds(t, e, n, i, r, o, a, s) {
    var l = n - t,
      u = i - e,
      h = a - r,
      c = s - o,
      p = As(h, c, l, u);
    if (Ps(p)) return !1;
    var f = t - r,
      d = e - o,
      g = As(f, d, l, u) / p;
    if (0 > g || g > 1) return !1;
    var v = As(f, d, h, c) / p;
    return 0 > v || v > 1 ? !1 : !0
  }

  function As(t, e, n, i) {
    return t * i - n * e
  }

  function Ps(t) {
    return 1e-6 >= t && t >= -1e-6
  }

  function Ls(t) {
    var e = t.itemTooltipOption,
      n = t.componentModel,
      i = t.itemName,
      r = C(e) ? {
        formatter: e
      } : e,
      o = n.mainType,
      a = n.componentIndex,
      s = {
        componentType: o,
        name: i,
        $vars: ["name"]
      };
    s[o + "Index"] = a;
    var l = t.formatterParamsExtra;
    l && v(w(l), function (t) {
      K(s, t) || (s[t] = l[t], s.$vars.push(t))
    });
    var u = $x(t.el);
    u.componentMainType = o, u.componentIndex = a, u.tooltipConfig = {
      name: i,
      option: c({
        content: i,
        formatterParams: s
      }, r)
    }
  }

  function Os(t, e) {
    var n;
    t.isGroup && (n = e(t)), n || t.traverse(e)
  }

  function Rs(t, e) {
    if (t)
      if (M(t))
        for (var n = 0; n < t.length; n++) Os(t[n], e);
      else Os(t, e)
  }

  function Bs(t, e) {
    for (var n = 0; n < aw.length; n++) {
      var i = aw[n],
        r = e[i],
        o = t.ensureState(i);
      o.style = o.style || {}, o.style.text = r
    }
    var a = t.currentStates.slice();
    t.clearStates(!0), t.setStyle({
      text: e.normal
    }), t.useStates(a, !0)
  }

  function zs(t, e, n) {
    var i, r = t.labelFetcher,
      o = t.labelDataIndex,
      a = t.labelDimIndex,
      s = e.normal;
    r && (i = r.getFormattedLabel(o, "normal", null, a, s && s.get("formatter"), null != n ? {
      interpolatedValue: n
    } : null)), null == i && (i = T(t.defaultText) ? t.defaultText(o, t, n) : t.defaultText);
    for (var l = {
        normal: i
      }, u = 0; u < aw.length; u++) {
      var h = aw[u],
        c = e[h];
      l[h] = N(r ? r.getFormattedLabel(o, h, null, a, c && c.get("formatter")) : null, i)
    }
    return l
  }

  function Es(t, e, n, i) {
    n = n || Mb;
    for (var r = t instanceof qx, o = !1, a = 0; a < sw.length; a++) {
      var s = e[sw[a]];
      if (s && s.getShallow("show")) {
        o = !0;
        break
      }
    }
    var l = r ? t : t.getTextContent();
    if (o) {
      r || (l || (l = new qx, t.setTextContent(l)), t.stateProxy && (l.stateProxy = t.stateProxy));
      var u = zs(n, e),
        h = e.normal,
        c = !!h.getShallow("show"),
        p = Ns(h, i && i.normal, n, !1, !r);
      p.text = u.normal, r || t.setTextConfig(Fs(h, n, !1));
      for (var a = 0; a < aw.length; a++) {
        var f = aw[a],
          s = e[f];
        if (s) {
          var d = l.ensureState(f),
            g = !!N(s.getShallow("show"), c);
          if (g !== c && (d.ignore = !g), d.style = Ns(s, i && i[f], n, !0, !r), d.style.text = u[f], !r) {
            var v = t.ensureState(f);
            v.textConfig = Fs(s, n, !0)
          }
        }
      }
      l.silent = !!h.getShallow("silent"), null != l.style.x && (p.x = l.style.x), null != l.style.y && (p.y = l.style.y), l.ignore = !c, l.useStyle(p), l.dirty(), n.enableTextSetter && (kb(l).setLabelText = function (t) {
        var i = zs(n, e, t);
        Bs(l, i)
      })
    } else l && (l.ignore = !0);
    t.dirty()
  }

  function Ns(t, e, n, i, r) {
    var o = {};
    return Hs(o, t, n, i, r), e && h(o, e), o
  }

  function Fs(t, e, n) {
    e = e || {};
    var i, r = {},
      o = t.getShallow("rotate"),
      a = N(t.getShallow("distance"), n ? null : 5),
      s = t.getShallow("offset");
    return i = t.getShallow("position") || (n ? null : "inside"), "outside" === i && (i = e.defaultOutsidePosition || "top"), null != i && (r.position = i), null != s && (r.offset = s), null != o && (o *= Math.PI / 180, r.rotation = o), null != a && (r.distance = a), r.outsideFill = "inherit" === t.get("color") ? e.inheritColor || null : "auto", r
  }

  function Hs(t, e, n, i, r) {
    n = n || Mb;
    var o, a = e.ecModel,
      s = a && a.option.textStyle,
      l = Vs(e);
    if (l) {
      o = {};
      for (var u in l)
        if (l.hasOwnProperty(u)) {
          var h = e.getModel(["rich", u]);
          Ws(o[u] = {}, h, s, n, i, r, !1, !0)
        }
    }
    o && (t.rich = o);
    var c = e.get("overflow");
    c && (t.overflow = c);
    var p = e.get("minMargin");
    null != p && (t.margin = p), Ws(t, e, s, n, i, r, !0, !1)
  }

  function Vs(t) {
    for (var e; t && t !== t.ecModel;) {
      var n = (t.option || Mb).rich;
      if (n) {
        e = e || {};
        for (var i = w(n), r = 0; r < i.length; r++) {
          var o = i[r];
          e[o] = 1
        }
      }
      t = t.parentModel
    }
    return e
  }

  function Ws(t, e, n, i, r, o, a, s) {
    n = !r && n || Mb;
    var l = i && i.inheritColor,
      u = e.getShallow("color"),
      h = e.getShallow("textBorderColor"),
      c = N(e.getShallow("opacity"), n.opacity);
    ("inherit" === u || "auto" === u) && (u = l ? l : null), ("inherit" === h || "auto" === h) && (h = l ? l : null), o || (u = u || n.color, h = h || n.textBorderColor), null != u && (t.fill = u), null != h && (t.stroke = h);
    var p = N(e.getShallow("textBorderWidth"), n.textBorderWidth);
    null != p && (t.lineWidth = p);
    var f = N(e.getShallow("textBorderType"), n.textBorderType);
    null != f && (t.lineDash = f);
    var d = N(e.getShallow("textBorderDashOffset"), n.textBorderDashOffset);
    null != d && (t.lineDashOffset = d), r || null != c || s || (c = i && i.defaultOpacity), null != c && (t.opacity = c), r || o || null == t.fill && i.inheritColor && (t.fill = i.inheritColor);
    for (var g = 0; g < Tb.length; g++) {
      var v = Tb[g],
        y = N(e.getShallow(v), n[v]);
      null != y && (t[v] = y)
    }
    for (var g = 0; g < Cb.length; g++) {
      var v = Cb[g],
        y = e.getShallow(v);
      null != y && (t[v] = y)
    }
    if (null == t.verticalAlign) {
      var m = e.getShallow("baseline");
      null != m && (t.verticalAlign = m)
    }
    if (!a || !i.disableBox) {
      for (var g = 0; g < Ib.length; g++) {
        var v = Ib[g],
          y = e.getShallow(v);
        null != y && (t[v] = y)
      }
      var _ = e.getShallow("borderType");
      null != _ && (t.borderDash = _), "auto" !== t.backgroundColor && "inherit" !== t.backgroundColor || !l || (t.backgroundColor = l), "auto" !== t.borderColor && "inherit" !== t.borderColor || !l || (t.borderColor = l)
    }
  }

  function Gs(t, e) {
    var n = e && e.getModel("textStyle");
    return G([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
  }

  function Us(t, e, n, i) {
    if (t) {
      var r = kb(t);
      r.prevValue = r.value, r.value = n;
      var o = e.normal;
      r.valueAnimation = o.get("valueAnimation"), r.valueAnimation && (r.precision = o.get("precision"), r.defaultInterpolatedText = i, r.statesModels = e)
    }
  }

  function Xs(t, e, n, i, r) {
    function o(i) {
      var o = Br(n, a.precision, l, u, i);
      a.interpolatedValue = 1 === i ? null : o;
      var h = zs({
        labelDataIndex: e,
        labelFetcher: r,
        defaultText: s ? s(o) : o + ""
      }, a.statesModels, o);
      Bs(t, h)
    }
    var a = kb(t);
    if (a.valueAnimation && a.prevValue !== a.value) {
      var s = a.defaultInterpolatedText,
        l = N(a.interpolatedValue, a.prevValue),
        u = a.value;
      t.percent = 0, (null == a.prevValue ? rs : is)(t, {
        percent: 1
      }, i, e, null, o)
    }
  }

  function Ys(t) {
    return [t || "", Hb++].join("_")
  }

  function qs(t) {
    var e = {};
    t.registerSubTypeDefaulter = function (t, n) {
      var i = zr(t);
      e[i.main] = n
    }, t.determineSubType = function (n, i) {
      var r = i.type;
      if (!r) {
        var o = zr(n).main;
        t.hasSubTypes(n) && e[o] && (r = e[o](i))
      }
      return r
    }
  }

  function js(t, e) {
    function n(t) {
      var n = {},
        o = [];
      return v(t, function (a) {
        var s = i(n, a),
          l = s.originalDeps = e(a),
          u = r(l, t);
        s.entryCount = u.length, 0 === s.entryCount && o.push(a), v(u, function (t) {
          p(s.predecessor, t) < 0 && s.predecessor.push(t);
          var e = i(n, t);
          p(e.successor, t) < 0 && e.successor.push(a)
        })
      }), {
        graph: n,
        noEntryList: o
      }
    }

    function i(t, e) {
      return t[e] || (t[e] = {
        predecessor: [],
        successor: []
      }), t[e]
    }

    function r(t, e) {
      var n = [];
      return v(t, function (t) {
        p(e, t) >= 0 && n.push(t)
      }), n
    }
    t.topologicalTravel = function (t, e, i, r) {
      function o(t) {
        l[t].entryCount--, 0 === l[t].entryCount && u.push(t)
      }

      function a(t) {
        h[t] = !0, o(t)
      }
      if (t.length) {
        var s = n(e),
          l = s.graph,
          u = s.noEntryList,
          h = {};
        for (v(t, function (t) {
            h[t] = !0
          }); u.length;) {
          var c = u.pop(),
            p = l[c],
            f = !!h[c];
          f && (i.call(r, c, p.originalDeps.slice()), delete h[c]), v(p.successor, f ? a : o)
        }
        v(h, function () {
          var t = "";
          throw new Error(t)
        })
      }
    }
  }

  function Zs(t, e) {
    return l(l({}, t, !0), e, !0)
  }

  function Ks(t, e) {
    t = t.toUpperCase(), qb[t] = new Fb(e), Yb[t] = e
  }

  function $s(t) {
    if (C(t)) {
      var e = Yb[t.toUpperCase()] || {};
      return t === Gb || t === Ub ? s(e) : l(s(e), s(Yb[Xb]), !1)
    }
    return l(s(t), s(Yb[Xb]), !1)
  }

  function Qs(t) {
    return qb[t]
  }

  function Js() {
    return qb[Xb]
  }

  function tl(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t
  }

  function el(t) {
    switch (t) {
      case "half-year":
      case "quarter":
        return "month";
      case "week":
      case "half-week":
        return "day";
      case "half-day":
      case "quarter-day":
        return "hour";
      default:
        return t
    }
  }

  function nl(t) {
    return t === el(t)
  }

  function il(t) {
    switch (t) {
      case "year":
      case "month":
        return "day";
      case "millisecond":
        return "millisecond";
      default:
        return "second"
    }
  }

  function rl(t, e, n, i) {
    var r = Ki(t),
      o = r[ll(n)](),
      a = r[ul(n)]() + 1,
      s = Math.floor((a - 1) / 3) + 1,
      l = r[hl(n)](),
      u = r["get" + (n ? "UTC" : "") + "Day"](),
      h = r[cl(n)](),
      c = (h - 1) % 12 + 1,
      p = r[pl(n)](),
      f = r[fl(n)](),
      d = r[dl(n)](),
      g = i instanceof Fb ? i : Qs(i || jb) || Js(),
      v = g.getModel("time"),
      y = v.get("month"),
      m = v.get("monthAbbr"),
      _ = v.get("dayOfWeek"),
      x = v.get("dayOfWeekAbbr");
    return (e || "").replace(/{yyyy}/g, o + "").replace(/{yy}/g, o % 100 + "").replace(/{Q}/g, s + "").replace(/{MMMM}/g, y[a - 1]).replace(/{MMM}/g, m[a - 1]).replace(/{MM}/g, tl(a, 2)).replace(/{M}/g, a + "").replace(/{dd}/g, tl(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, _[u]).replace(/{ee}/g, x[u]).replace(/{e}/g, u + "").replace(/{HH}/g, tl(h, 2)).replace(/{H}/g, h + "").replace(/{hh}/g, tl(c + "", 2)).replace(/{h}/g, c + "").replace(/{mm}/g, tl(p, 2)).replace(/{m}/g, p + "").replace(/{ss}/g, tl(f, 2)).replace(/{s}/g, f + "").replace(/{SSS}/g, tl(d, 3)).replace(/{S}/g, d + "")
  }

  function ol(t, e, n, i, r) {
    var o = null;
    if (C(n)) o = n;
    else if (T(n)) o = n(t.value, e, {
      level: t.level
    });
    else {
      var a = h({}, tS);
      if (t.level > 0)
        for (var s = 0; s < iS.length; ++s) a[iS[s]] = "{primary|" + a[iS[s]] + "}";
      var l = n ? n.inherit === !1 ? n : c(n, a) : a,
        u = al(t.value, r);
      if (l[u]) o = l[u];
      else if (l.inherit) {
        for (var p = rS.indexOf(u), s = p - 1; s >= 0; --s)
          if (l[u]) {
            o = l[u];
            break
          } o = o || a.none
      }
      if (M(o)) {
        var f = null == t.level ? 0 : t.level >= 0 ? t.level : o.length + t.level;
        f = Math.min(f, o.length - 1), o = o[f]
      }
    }
    return rl(new Date(t.value), o, r, i)
  }

  function al(t, e) {
    var n = Ki(t),
      i = n[ul(e)]() + 1,
      r = n[hl(e)](),
      o = n[cl(e)](),
      a = n[pl(e)](),
      s = n[fl(e)](),
      l = n[dl(e)](),
      u = 0 === l,
      h = u && 0 === s,
      c = h && 0 === a,
      p = c && 0 === o,
      f = p && 1 === r,
      d = f && 1 === i;
    return d ? "year" : f ? "month" : p ? "day" : c ? "hour" : h ? "minute" : u ? "second" : "millisecond"
  }

  function sl(t, e, n) {
    var i = k(t) ? Ki(t) : t;
    switch (e = e || al(t, n)) {
      case "year":
        return i[ll(n)]();
      case "half-year":
        return i[ul(n)]() >= 6 ? 1 : 0;
      case "quarter":
        return Math.floor((i[ul(n)]() + 1) / 4);
      case "month":
        return i[ul(n)]();
      case "day":
        return i[hl(n)]();
      case "half-day":
        return i[cl(n)]() / 24;
      case "hour":
        return i[cl(n)]();
      case "minute":
        return i[pl(n)]();
      case "second":
        return i[fl(n)]();
      case "millisecond":
        return i[dl(n)]()
    }
  }

  function ll(t) {
    return t ? "getUTCFullYear" : "getFullYear"
  }

  function ul(t) {
    return t ? "getUTCMonth" : "getMonth"
  }

  function hl(t) {
    return t ? "getUTCDate" : "getDate"
  }

  function cl(t) {
    return t ? "getUTCHours" : "getHours"
  }

  function pl(t) {
    return t ? "getUTCMinutes" : "getMinutes"
  }

  function fl(t) {
    return t ? "getUTCSeconds" : "getSeconds"
  }

  function dl(t) {
    return t ? "getUTCMilliseconds" : "getMilliseconds"
  }

  function gl(t) {
    return t ? "setUTCFullYear" : "setFullYear"
  }

  function vl(t) {
    return t ? "setUTCMonth" : "setMonth"
  }

  function yl(t) {
    return t ? "setUTCDate" : "setDate"
  }

  function ml(t) {
    return t ? "setUTCHours" : "setHours"
  }

  function _l(t) {
    return t ? "setUTCMinutes" : "setMinutes"
  }

  function xl(t) {
    return t ? "setUTCSeconds" : "setSeconds"
  }

  function wl(t) {
    return t ? "setUTCMilliseconds" : "setMilliseconds"
  }

  function bl(t, e, n, i, r, o, a, s) {
    var l = new qx({
      style: {
        text: t,
        font: e,
        align: n,
        verticalAlign: i,
        padding: r,
        rich: o,
        overflow: a ? "truncate" : null,
        lineHeight: s
      }
    });
    return l.getBoundingRect()
  }

  function Sl(t) {
    if (!ir(t)) return C(t) ? t : "-";
    var e = (t + "").split(".");
    return e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : "")
  }

  function Ml(t, e) {
    return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
      return e.toUpperCase()
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
  }

  function Tl(t) {
    return null == t ? "" : (t + "").replace(aS, function (t, e) {
      return sS[e]
    })
  }

  function Cl(t, e, n) {
    function i(t) {
      return t && G(t) ? t : "-"
    }

    function r(t) {
      return !(null == t || isNaN(t) || !isFinite(t))
    }
    var o = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}",
      a = "time" === e,
      s = t instanceof Date;
    if (a || s) {
      var l = a ? Ki(t) : t;
      if (!isNaN(+l)) return rl(l, o, n);
      if (s) return "-"
    }
    if ("ordinal" === e) return I(t) ? i(t) : k(t) && r(t) ? t + "" : "-";
    var u = nr(t);
    return r(u) ? Sl(u) : I(t) ? i(t) : "boolean" == typeof t ? t + "" : "-"
  }

  function Il(t, e, n) {
    M(e) || (e = [e]);
    var i = e.length;
    if (!i) return "";
    for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
      var a = lS[o];
      t = t.replace(uS(a), uS(a, 0))
    }
    for (var s = 0; i > s; s++)
      for (var l = 0; l < r.length; l++) {
        var u = e[s][r[l]];
        t = t.replace(uS(lS[l], s), n ? Tl(u) : u)
      }
    return t
  }

  function kl(t, e) {
    var n = C(t) ? {
        color: t,
        extraCssText: e
      } : t || {},
      i = n.color,
      r = n.type;
    e = n.extraCssText;
    var o = n.renderMode || "html";
    if (!i) return "";
    if ("html" === o) return "subItem" === r ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Tl(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + Tl(i) + ";" + (e || "") + '"></span>';
    var a = n.markerId || "markerX";
    return {
      renderMode: o,
      content: "{" + a + "|}  ",
      style: "subItem" === r ? {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: i
      } : {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: i
      }
    }
  }

  function Dl(t, e, n) {
    ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
    var i = Ki(e),
      r = n ? "getUTC" : "get",
      o = i[r + "FullYear"](),
      a = i[r + "Month"]() + 1,
      s = i[r + "Date"](),
      l = i[r + "Hours"](),
      u = i[r + "Minutes"](),
      h = i[r + "Seconds"](),
      c = i[r + "Milliseconds"]();
    return t = t.replace("MM", tl(a, 2)).replace("M", a).replace("yyyy", o).replace("yy", tl(o % 100 + "", 2)).replace("dd", tl(s, 2)).replace("d", s).replace("hh", tl(l, 2)).replace("h", l).replace("mm", tl(u, 2)).replace("m", u).replace("ss", tl(h, 2)).replace("s", h).replace("SSS", tl(c, 3))
  }

  function Al(t) {
    return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
  }

  function Pl(t, e) {
    return e = e || "transparent", C(t) ? t : D(t) ? t.colorStops && (t.colorStops[0] || {}).color || e : e
  }

  function Ll(t, e) {
    if ("_blank" === e || "blank" === e) {
      var n = window.open();
      n.opener = null, n.location.href = t
    } else window.open(t, e)
  }

  function Ol(t, e, n, i, r) {
    var o = 0,
      a = 0;
    null == i && (i = 1 / 0), null == r && (r = 1 / 0);
    var s = 0;
    e.eachChild(function (l, u) {
      var h, c, p = l.getBoundingRect(),
        f = e.childAt(u + 1),
        d = f && f.getBoundingRect();
      if ("horizontal" === t) {
        var g = p.width + (d ? -d.x + p.x : 0);
        h = o + g, h > i || l.newline ? (o = 0, h = g, a += s + n, s = p.height) : s = Math.max(s, p.height)
      } else {
        var v = p.height + (d ? -d.y + p.y : 0);
        c = a + v, c > r || l.newline ? (o += s + n, a = 0, c = v, s = p.width) : s = Math.max(s, p.width)
      }
      l.newline || (l.x = o, l.y = a, l.markRedraw(), "horizontal" === t ? o = h + n : a = c + n)
    })
  }

  function Rl(t, e, n) {
    n = oS(n || 0);
    var i = e.width,
      r = e.height,
      o = Hi(t.left, i),
      a = Hi(t.top, r),
      s = Hi(t.right, i),
      l = Hi(t.bottom, r),
      u = Hi(t.width, i),
      h = Hi(t.height, r),
      c = n[2] + n[0],
      p = n[1] + n[3],
      f = t.aspect;
    switch (isNaN(u) && (u = i - s - p - o), isNaN(h) && (h = r - l - c - a), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(o) && (o = i - s - u - p), isNaN(a) && (a = r - l - h - c), t.left || t.right) {
      case "center":
        o = i / 2 - u / 2 - n[3];
        break;
      case "right":
        o = i - u - p
    }
    switch (t.top || t.bottom) {
      case "middle":
      case "center":
        a = r / 2 - h / 2 - n[0];
        break;
      case "bottom":
        a = r - h - c
    }
    o = o || 0, a = a || 0, isNaN(u) && (u = i - p - o - (s || 0)), isNaN(h) && (h = r - c - a - (l || 0));
    var d = new a_(o + n[3], a + n[0], u, h);
    return d.margin = n, d
  }

  function Bl(t) {
    var e = t.layoutMode || t.constructor.layoutMode;
    return D(e) ? e : e ? {
      type: e
    } : null
  }

  function zl(t, e, n) {
    function i(n, i) {
      var a = {},
        l = 0,
        u = {},
        h = 0,
        c = 2;
      if (hS(n, function (e) {
          u[e] = t[e]
        }), hS(n, function (t) {
          r(e, t) && (a[t] = u[t] = e[t]), o(a, t) && l++, o(u, t) && h++
        }), s[i]) return o(e, n[1]) ? u[n[2]] = null : o(e, n[2]) && (u[n[1]] = null), u;
      if (h !== c && l) {
        if (l >= c) return a;
        for (var p = 0; p < n.length; p++) {
          var f = n[p];
          if (!r(a, f) && r(t, f)) {
            a[f] = t[f];
            break
          }
        }
        return a
      }
      return u
    }

    function r(t, e) {
      return t.hasOwnProperty(e)
    }

    function o(t, e) {
      return null != t[e] && "auto" !== t[e]
    }

    function a(t, e, n) {
      hS(t, function (t) {
        e[t] = n[t]
      })
    }
    var s = n && n.ignoreSize;
    !M(s) && (s = [s, s]);
    var l = i(pS[0], 0),
      u = i(pS[1], 1);
    a(pS[0], t, l), a(pS[1], t, u)
  }

  function El(t) {
    return Nl({}, t)
  }

  function Nl(t, e) {
    return e && t && hS(cS, function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n])
    }), t
  }

  function Fl(t) {
    var e = [];
    return v(gS.getClassesByMainType(t), function (t) {
      e = e.concat(t.dependencies || t.prototype.dependencies || [])
    }), e = y(e, function (t) {
      return zr(t).main
    }), "dataset" !== t && p(e, "dataset") <= 0 && e.unshift("dataset"), e
  }

  function Hl(t) {
    PS(t).datasetMap = Y()
  }

  function Vl(t, e, n) {
    function i(t, e, n) {
      for (var i = 0; n > i; i++) t.push(e + i)
    }

    function r(t) {
      var e = t.dimsDef;
      return e ? e.length : 1
    }
    var o = {},
      a = Wl(e);
    if (!a || !t) return o;
    var s, l, u = [],
      h = [],
      c = e.ecModel,
      p = PS(c).datasetMap,
      f = a.uid + "_" + n.seriesLayoutBy;
    t = t.slice(), v(t, function (e, n) {
      var i = D(e) ? e : t[n] = {
        name: e
      };
      "ordinal" === i.type && null == s && (s = n, l = r(i)), o[i.name] = []
    });
    var d = p.get(f) || p.set(f, {
      categoryWayDim: l,
      valueWayDim: 0
    });
    return v(t, function (t, e) {
      var n = t.name,
        a = r(t);
      if (null == s) {
        var l = d.valueWayDim;
        i(o[n], l, a), i(h, l, a), d.valueWayDim += a
      } else if (s === e) i(o[n], 0, a), i(u, 0, a);
      else {
        var l = d.categoryWayDim;
        i(o[n], l, a), i(h, l, a), d.categoryWayDim += a
      }
    }), u.length && (o.itemName = u), h.length && (o.seriesName = h), o
  }

  function Wl(t) {
    var e = t.get("data", !0);
    return e ? void 0 : Pr(t.ecModel, "dataset", {
      index: t.get("datasetIndex", !0),
      id: t.get("datasetId", !0)
    }, k_).models[0]
  }

  function Gl(t) {
    return t.get("transform", !0) || t.get("fromTransformResult", !0) ? Pr(t.ecModel, "dataset", {
      index: t.get("fromDatasetIndex", !0),
      id: t.get("fromDatasetId", !0)
    }, k_).models : []
  }

  function Ul(t, e) {
    return Xl(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
  }

  function Xl(t, e, n, i, r, o) {
    function a(t) {
      var e = C(t);
      return null != t && isFinite(t) && "" !== t ? e ? AS.Might : AS.Not : e && "-" !== t ? AS.Must : void 0
    }
    var s, l = 5;
    if (P(t)) return AS.Not;
    var u, h;
    if (i) {
      var c = i[o];
      D(c) ? (u = c.name, h = c.type) : C(c) && (u = c)
    }
    if (null != h) return "ordinal" === h ? AS.Must : AS.Not;
    if (e === SS) {
      var p = t;
      if (n === DS) {
        for (var f = p[o], d = 0; d < (f || []).length && l > d; d++)
          if (null != (s = a(f[r + d]))) return s
      } else
        for (var d = 0; d < p.length && l > d; d++) {
          var g = p[r + d];
          if (g && null != (s = a(g[o]))) return s
        }
    } else if (e === MS) {
      var v = t;
      if (!u) return AS.Not;
      for (var d = 0; d < v.length && l > d; d++) {
        var y = v[d];
        if (y && null != (s = a(y[u]))) return s
      }
    } else if (e === TS) {
      var m = t;
      if (!u) return AS.Not;
      var f = m[u];
      if (!f || P(f)) return AS.Not;
      for (var d = 0; d < f.length && l > d; d++)
        if (null != (s = a(f[d]))) return s
    } else if (e === bS)
      for (var _ = t, d = 0; d < _.length && l > d; d++) {
        var y = _[d],
          x = cr(y);
        if (!M(x)) return AS.Not;
        if (null != (s = a(x[o]))) return s
      }
    return AS.Not
  }

  function Yl(t, e, n) {
    var i = LS.get(e);
    if (!i) return n;
    var r = i(t);
    return r ? n.concat(r) : n
  }

  function ql(t, e) {
    for (var n = t.length, i = 0; n > i; i++)
      if (t[i].length > e) return t[i];
    return t[n - 1]
  }

  function jl(t, e, n, i, r, o, a) {
    o = o || t;
    var s = e(o),
      l = s.paletteIdx || 0,
      u = s.paletteNameMap = s.paletteNameMap || {};
    if (u.hasOwnProperty(r)) return u[r];
    var h = null != a && i ? ql(i, a) : n;
    if (h = h || n, h && h.length) {
      var c = h[l];
      return r && (u[r] = c), s.paletteIdx = (l + 1) % h.length, c
    }
  }

  function Zl(t, e) {
    e(t).paletteIdx = 0, e(t).paletteNameMap = {}
  }

  function Kl(t, e) {
    if (e) {
      var n = e.seriesIndex,
        i = e.seriesId,
        r = e.seriesName;
      return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
    }
  }

  function $l(t, e) {
    var n = t.color && !t.colorLayer;
    v(e, function (e, i) {
      "colorLayer" === i && n || gS.hasClass(i) || ("object" == typeof e ? t[i] = t[i] ? l(t[i], e, !1) : s(e) : null == t[i] && (t[i] = e))
    })
  }

  function Ql(t, e, n) {
    if (M(e)) {
      var i = Y();
      return v(e, function (t) {
        if (null != t) {
          var e = br(t, null);
          null != e && i.set(t, !0)
        }
      }), _(n, function (e) {
        return e && i.get(e[t])
      })
    }
    var r = br(e, null);
    return _(n, function (e) {
      return e && null != r && e[t] === r
    })
  }

  function Jl(t, e) {
    return e.hasOwnProperty("subType") ? _(t, function (t) {
      return t && t.subType === e.subType
    }) : t
  }

  function tu(t) {
    var e = Y();
    return t && v(ur(t.replaceMerge), function (t) {
      e.set(t, !0)
    }), {
      replaceMergeMainTypeMap: e
    }
  }

  function eu(t, e, n) {
    function i(t) {
      v(e, function (e) {
        e(t, n)
      })
    }
    var r, o, a = [],
      s = t.baseOption,
      l = t.timeline,
      u = t.options,
      h = t.media,
      c = !!t.media,
      p = !!(u || l || s && s.timeline);
    return s ? (o = s, o.timeline || (o.timeline = l)) : ((p || c) && (t.options = t.media = null), o = t), c && M(h) && v(h, function (t) {
      t && t.option && (t.query ? a.push(t) : r || (r = t))
    }), i(o), v(u, function (t) {
      return i(t)
    }), v(a, function (t) {
      return i(t.option)
    }), {
      baseOption: o,
      timelineOptions: u || [],
      mediaDefault: r,
      mediaList: a
    }
  }

  function nu(t, e, n) {
    var i = {
        width: e,
        height: n,
        aspectratio: e / n
      },
      r = !0;
    return v(t, function (t, e) {
      var n = e.match(jS);
      if (n && n[1] && n[2]) {
        var o = n[1],
          a = n[2].toLowerCase();
        iu(i[a], t, o) || (r = !1)
      }
    }), r
  }

  function iu(t, e, n) {
    return "min" === n ? t >= e : "max" === n ? e >= t : t === e
  }

  function ru(t, e) {
    return t.join(",") === e.join(",")
  }

  function ou(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0, i = QS.length; i > n; n++) {
        var r = QS[n],
          o = e.normal,
          a = e.emphasis;
        o && o[r] && (t[r] = t[r] || {}, t[r].normal ? l(t[r].normal, o[r]) : t[r].normal = o[r], o[r] = null), a && a[r] && (t[r] = t[r] || {}, t[r].emphasis ? l(t[r].emphasis, a[r]) : t[r].emphasis = a[r], a[r] = null)
      }
  }

  function au(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var i = t[e].normal,
        r = t[e].emphasis;
      i && (n ? (t[e].normal = t[e].emphasis = null, c(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r, r.focus && (t.emphasis.focus = r.focus), r.blurScope && (t.emphasis.blurScope = r.blurScope))
    }
  }

  function su(t) {
    au(t, "itemStyle"), au(t, "lineStyle"), au(t, "areaStyle"), au(t, "label"), au(t, "labelLine"), au(t, "upperLabel"), au(t, "edgeLabel")
  }

  function lu(t, e) {
    var n = $S(t) && t[e],
      i = $S(n) && n.textStyle;
    if (i)
      for (var r = 0, o = C_.length; o > r; r++) {
        var a = C_[r];
        i.hasOwnProperty(a) && (n[a] = i[a])
      }
  }

  function uu(t) {
    t && (su(t), lu(t, "label"), t.emphasis && lu(t.emphasis, "label"))
  }

  function hu(t) {
    if ($S(t)) {
      ou(t), su(t), lu(t, "label"), lu(t, "upperLabel"), lu(t, "edgeLabel"), t.emphasis && (lu(t.emphasis, "label"), lu(t.emphasis, "upperLabel"), lu(t.emphasis, "edgeLabel"));
      var e = t.markPoint;
      e && (ou(e), uu(e));
      var n = t.markLine;
      n && (ou(n), uu(n));
      var i = t.markArea;
      i && uu(i);
      var r = t.data;
      if ("graph" === t.type) {
        r = r || t.nodes;
        var o = t.links || t.edges;
        if (o && !P(o))
          for (var a = 0; a < o.length; a++) uu(o[a]);
        v(t.categories, function (t) {
          su(t)
        })
      }
      if (r && !P(r))
        for (var a = 0; a < r.length; a++) uu(r[a]);
      if (e = t.markPoint, e && e.data)
        for (var s = e.data, a = 0; a < s.length; a++) uu(s[a]);
      if (n = t.markLine, n && n.data)
        for (var l = n.data, a = 0; a < l.length; a++) M(l[a]) ? (uu(l[a][0]), uu(l[a][1])) : uu(l[a]);
      "gauge" === t.type ? (lu(t, "axisLabel"), lu(t, "title"), lu(t, "detail")) : "treemap" === t.type ? (au(t.breadcrumb, "itemStyle"), v(t.levels, function (t) {
        su(t)
      })) : "tree" === t.type && su(t.leaves)
    }
  }

  function cu(t) {
    return M(t) ? t : t ? [t] : []
  }

  function pu(t) {
    return (M(t) ? t[0] : t) || {}
  }

  function fu(t, e) {
    KS(cu(t.series), function (t) {
      $S(t) && hu(t)
    });
    var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
    e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), KS(n, function (e) {
      KS(cu(t[e]), function (t) {
        t && (lu(t, "axisLabel"), lu(t.axisPointer, "label"))
      })
    }), KS(cu(t.parallel), function (t) {
      var e = t && t.parallelAxisDefault;
      lu(e, "axisLabel"), lu(e && e.axisPointer, "label")
    }), KS(cu(t.calendar), function (t) {
      au(t, "itemStyle"), lu(t, "dayLabel"), lu(t, "monthLabel"), lu(t, "yearLabel")
    }), KS(cu(t.radar), function (t) {
      lu(t, "name"), t.name && null == t.axisName && (t.axisName = t.name, delete t.name), null != t.nameGap && null == t.axisNameGap && (t.axisNameGap = t.nameGap, delete t.nameGap)
    }), KS(cu(t.geo), function (t) {
      $S(t) && (uu(t), KS(cu(t.regions), function (t) {
        uu(t)
      }))
    }), KS(cu(t.timeline), function (t) {
      uu(t), au(t, "label"), au(t, "itemStyle"), au(t, "controlStyle", !0);
      var e = t.data;
      M(e) && v(e, function (t) {
        D(t) && (au(t, "label"), au(t, "itemStyle"))
      })
    }), KS(cu(t.toolbox), function (t) {
      au(t, "iconStyle"), KS(t.feature, function (t) {
        au(t, "iconStyle")
      })
    }), lu(pu(t.axisPointer), "label"), lu(pu(t.tooltip).axisPointer, "label")
  }

  function du(t, e) {
    for (var n = e.split(","), i = t, r = 0; r < n.length && (i = i && i[n[r]], null != i); r++);
    return i
  }

  function gu(t, e, n, i) {
    for (var r, o = e.split(","), a = t, s = 0; s < o.length - 1; s++) r = o[s], null == a[r] && (a[r] = {}), a = a[r];
    (i || null == a[o[s]]) && (a[o[s]] = n)
  }

  function vu(t) {
    t && v(JS, function (e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
    })
  }

  function yu(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0; n < eM.length; n++) {
        var i = eM[n][1],
          r = eM[n][0];
        null != e[i] && (e[r] = e[i])
      }
  }

  function mu(t) {
    t && "edge" === t.alignTo && null != t.margin && null == t.edgeDistance && (t.edgeDistance = t.margin)
  }

  function _u(t) {
    t && t.downplay && !t.blur && (t.blur = t.downplay)
  }

  function xu(t) {
    t && null != t.focusNodeAdjacency && (t.emphasis = t.emphasis || {}, null == t.emphasis.focus && (t.emphasis.focus = "adjacency"))
  }

  function wu(t, e) {
    if (t)
      for (var n = 0; n < t.length; n++) e(t[n]), t[n] && wu(t[n].children, e)
  }

  function bu(t, e) {
    fu(t, e), t.series = ur(t.series), v(t.series, function (t) {
      if (D(t)) {
        var e = t.type;
        if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow);
        else if ("pie" === e || "gauge" === e) {
          null != t.clockWise && (t.clockwise = t.clockWise), mu(t.label);
          var n = t.data;
          if (n && !P(n))
            for (var i = 0; i < n.length; i++) mu(n[i]);
          null != t.hoverOffset && (t.emphasis = t.emphasis || {}, (t.emphasis.scaleSize = null) && (t.emphasis.scaleSize = t.hoverOffset))
        } else if ("gauge" === e) {
          var r = du(t, "pointer.color");
          null != r && gu(t, "itemStyle.color", r)
        } else if ("bar" === e) {
          yu(t), yu(t.backgroundStyle), yu(t.emphasis);
          var n = t.data;
          if (n && !P(n))
            for (var i = 0; i < n.length; i++) "object" == typeof n[i] && (yu(n[i]), yu(n[i] && n[i].emphasis))
        } else if ("sunburst" === e) {
          var o = t.highlightPolicy;
          o && (t.emphasis = t.emphasis || {}, t.emphasis.focus || (t.emphasis.focus = o)), _u(t), wu(t.data, _u)
        } else "graph" === e || "sankey" === e ? xu(t) : "map" === e && (t.mapType && !t.map && (t.map = t.mapType), t.mapLocation && c(t, t.mapLocation));
        null != t.hoverAnimation && (t.emphasis = t.emphasis || {}, t.emphasis && null == t.emphasis.scale && (t.emphasis.scale = t.hoverAnimation)), vu(t)
      }
    }), t.dataRange && (t.visualMap = t.dataRange), v(tM, function (e) {
      var n = t[e];
      n && (M(n) || (n = [n]), v(n, function (t) {
        vu(t)
      }))
    })
  }

  function Su(t) {
    var e = Y();
    t.eachSeries(function (t) {
      var n = t.get("stack");
      if (n) {
        var i = e.get(n) || e.set(n, []),
          r = t.getData(),
          o = {
            stackResultDimension: r.getCalculationInfo("stackResultDimension"),
            stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
            stackedDimension: r.getCalculationInfo("stackedDimension"),
            stackedByDimension: r.getCalculationInfo("stackedByDimension"),
            isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
            data: r,
            seriesModel: t
          };
        if (!o.stackedDimension || !o.isStackedByIndex && !o.stackedByDimension) return;
        i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o)
      }
    }), e.each(Mu)
  }

  function Mu(t) {
    v(t, function (e, n) {
      var i = [],
        r = [0 / 0, 0 / 0],
        o = [e.stackResultDimension, e.stackedOverDimension],
        a = e.data,
        s = e.isStackedByIndex,
        l = e.seriesModel.get("stackStrategy") || "samesign";
      a.modify(o, function (o, u, h) {
        var c = a.get(e.stackedDimension, h);
        if (isNaN(c)) return r;
        var p, f;
        s ? f = a.getRawIndex(h) : p = a.get(e.stackedByDimension, h);
        for (var d = 0 / 0, g = n - 1; g >= 0; g--) {
          var v = t[g];
          if (s || (f = v.data.rawIndexOf(v.stackedByDimension, p)), f >= 0) {
            var y = v.data.getByRawIndex(v.stackResultDimension, f);
            if ("all" === l || "positive" === l && y > 0 || "negative" === l && 0 > y || "samesign" === l && c >= 0 && y > 0 || "samesign" === l && 0 >= c && 0 > y) {
              c = qi(c, y), d = y;
              break
            }
          }
        }
        return i[0] = c, i[1] = d, i
      })
    })
  }

  function Tu(t) {
    return t instanceof nM
  }

  function Cu(t, e, n) {
    n = n || Du(t);
    var i = e.seriesLayoutBy,
      r = Au(t, n, i, e.sourceHeader, e.dimensions),
      o = new nM({
        data: t,
        sourceFormat: n,
        seriesLayoutBy: i,
        dimensionsDefine: r.dimensionsDefine,
        startIndex: r.startIndex,
        dimensionsDetectedCount: r.dimensionsDetectedCount,
        metaRawOption: s(e)
      });
    return o
  }

  function Iu(t) {
    return new nM({
      data: t,
      sourceFormat: P(t) ? CS : bS
    })
  }

  function ku(t) {
    return new nM({
      data: t.data,
      sourceFormat: t.sourceFormat,
      seriesLayoutBy: t.seriesLayoutBy,
      dimensionsDefine: s(t.dimensionsDefine),
      startIndex: t.startIndex,
      dimensionsDetectedCount: t.dimensionsDetectedCount
    })
  }

  function Du(t) {
    var e = IS;
    if (P(t)) e = CS;
    else if (M(t)) {
      0 === t.length && (e = SS);
      for (var n = 0, i = t.length; i > n; n++) {
        var r = t[n];
        if (null != r) {
          if (M(r)) {
            e = SS;
            break
          }
          if (D(r)) {
            e = MS;
            break
          }
        }
      }
    } else if (D(t))
      for (var o in t)
        if (K(t, o) && g(t[o])) {
          e = TS;
          break
        } return e
  }

  function Au(t, e, n, i, r) {
    var o, a;
    if (!t) return {
      dimensionsDefine: Lu(r),
      startIndex: a,
      dimensionsDetectedCount: o
    };
    if (e === SS) {
      var s = t;
      "auto" === i || null == i ? Ou(function (t) {
        null != t && "-" !== t && (C(t) ? null == a && (a = 1) : a = 0)
      }, n, s, 10) : a = k(i) ? i : i ? 1 : 0, r || 1 !== a || (r = [], Ou(function (t, e) {
        r[e] = null != t ? t + "" : ""
      }, n, s, 1 / 0)), o = r ? r.length : n === DS ? s.length : s[0] ? s[0].length : null
    } else if (e === MS) r || (r = Pu(t));
    else if (e === TS) r || (r = [], v(t, function (t, e) {
      r.push(e)
    }));
    else if (e === bS) {
      var l = cr(t[0]);
      o = M(l) && l.length || 1
    }
    return {
      startIndex: a,
      dimensionsDefine: Lu(r),
      dimensionsDetectedCount: o
    }
  }

  function Pu(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]););
    if (e) {
      var i = [];
      return v(e, function (t, e) {
        i.push(e)
      }), i
    }
  }

  function Lu(t) {
    if (t) {
      var e = Y();
      return y(t, function (t) {
        t = D(t) ? t : {
          name: t
        };
        var n = {
          name: t.name,
          displayName: t.displayName,
          type: t.type
        };
        if (null == n.name) return n;
        n.name += "", null == n.displayName && (n.displayName = n.name);
        var i = e.get(n.name);
        return i ? n.name += "-" + i.count++ : e.set(n.name, {
          count: 1
        }), n
      })
    }
  }

  function Ou(t, e, n, i) {
    if (e === DS)
      for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r);
    else
      for (var o = n[0] || [], r = 0; r < o.length && i > r; r++) t(o[r], r)
  }

  function Ru(t) {
    var e = t.sourceFormat;
    return e === MS || e === TS
  }

  function Bu(t, e) {
    var n = oM[Nu(t, e)];
    return n
  }

  function zu(t, e) {
    var n = sM[Nu(t, e)];
    return n
  }

  function Eu(t) {
    var e = uM[t];
    return e
  }

  function Nu(t, e) {
    return t === SS ? t + "_" + e : t
  }

  function Fu(t, e, n) {
    if (t) {
      var i = t.getRawDataItem(e);
      if (null != i) {
        var r = t.getStore(),
          o = r.getSource().sourceFormat;
        if (null != n) {
          var a = t.getDimensionIndex(n),
            s = r.getDimensionProperty(a);
          return Eu(o)(i, a, s)
        }
        var l = i;
        return o === bS && (l = cr(i)), l
      }
    }
  }

  function Hu(t) {
    var e, n;
    return D(t) ? t.type && (n = t) : e = t, {
      text: e,
      frag: n
    }
  }

  function Vu(t) {
    return new pM(t)
  }

  function Wu(t, e) {
    var n = e && e.type;
    return "ordinal" === n ? t : ("time" !== n || k(t) || null == t || "-" === t || (t = +Ki(t)), null == t || "" === t ? 0 / 0 : +t)
  }

  function Gu(t, e) {
    var n = new vM,
      i = t.data,
      r = n.sourceFormat = t.sourceFormat,
      o = t.startIndex,
      a = "";
    t.seriesLayoutBy !== kS && sr(a);
    var s = [],
      l = {},
      u = t.dimensionsDefine;
    if (u) v(u, function (t, e) {
      var n = t.name,
        i = {
          index: e,
          name: n,
          displayName: t.displayName
        };
      if (s.push(i), null != n) {
        var r = "";
        K(l, n) && sr(r), l[n] = i
      }
    });
    else
      for (var h = 0; h < t.dimensionsDetectedCount; h++) s.push({
        index: h
      });
    var c = Bu(r, kS);
    e.__isBuiltIn && (n.getRawDataItem = function (t) {
      return c(i, o, s, t)
    }, n.getRawData = cy(Uu, null, t)), n.cloneRawData = cy(Xu, null, t);
    var p = zu(r, kS);
    n.count = cy(p, null, i, o, s);
    var f = Eu(r);
    n.retrieveValue = function (t, e) {
      var n = c(i, o, s, t);
      return d(n, e)
    };
    var d = n.retrieveValueFromItem = function (t, e) {
      if (null != t) {
        var n = s[e];
        return n ? f(t, e, n.name) : void 0
      }
    };
    return n.getDimensionInfo = cy(Yu, null, s, l), n.cloneAllDimensionInfo = cy(qu, null, s), n
  }

  function Uu(t) {
    var e = t.sourceFormat;
    if (!$u(e)) {
      var n = "";
      sr(n)
    }
    return t.data
  }

  function Xu(t) {
    var e = t.sourceFormat,
      n = t.data;
    if (!$u(e)) {
      var i = "";
      sr(i)
    }
    if (e === SS) {
      for (var r = [], o = 0, a = n.length; a > o; o++) r.push(n[o].slice());
      return r
    }
    if (e === MS) {
      for (var r = [], o = 0, a = n.length; a > o; o++) r.push(h({}, n[o]));
      return r
    }
  }

  function Yu(t, e, n) {
    return null != n ? k(n) || !isNaN(n) && !K(e, n) ? t[n] : K(e, n) ? e[n] : void 0 : void 0
  }

  function qu(t) {
    return s(t)
  }

  function ju(t) {
    t = s(t);
    var e = t.type,
      n = "";
    e || sr(n);
    var i = e.split(":");
    2 !== i.length && sr(n);
    var r = !1;
    "echarts" === i[0] && (e = i[1], r = !0), t.__isBuiltIn = r, yM.set(e, t)
  }

  function Zu(t, e, n) {
    var i = ur(t),
      r = i.length,
      o = "";
    r || sr(o);
    for (var a = 0, s = r; s > a; a++) {
      var l = i[a];
      e = Ku(l, e, n, 1 === r ? null : a), a !== s - 1 && (e.length = Math.max(e.length, 1))
    }
    return e
  }

  function Ku(t, e) {
    var n = "";
    e.length || sr(n), D(t) || sr(n);
    var i = t.type,
      r = yM.get(i);
    r || sr(n);
    var o = y(e, function (t) {
        return Gu(t, r)
      }),
      a = ur(r.transform({
        upstream: o[0],
        upstreamList: o,
        config: s(t.config)
      }));
    return y(a, function (t, n) {
      var i = "";
      D(t) || sr(i), t.data || sr(i);
      var r = Du(t.data);
      $u(r) || sr(i);
      var o, a = e[0];
      if (a && 0 === n && !t.dimensions) {
        var s = a.startIndex;
        s && (t.data = a.data.slice(0, s).concat(t.data)), o = {
          seriesLayoutBy: kS,
          sourceHeader: s,
          dimensions: a.metaRawOption.dimensions
        }
      } else o = {
        seriesLayoutBy: kS,
        sourceHeader: 0,
        dimensions: t.dimensions
      };
      return Cu(t.data, o, null)
    })
  }

  function $u(t) {
    return t === SS || t === MS
  }

  function Qu(t) {
    return t > 65535 ? _M : xM
  }

  function Ju() {
    return [1 / 0, -1 / 0]
  }

  function th(t) {
    var e = t.constructor;
    return e === Array ? t.slice() : new e(t)
  }

  function eh(t, e, n, i, r) {
    var o = SM[n || "float"];
    if (r) {
      var a = t[e],
        s = a && a.length;
      if (s !== i) {
        for (var l = new o(i), u = 0; s > u; u++) l[u] = a[u];
        t[e] = l
      }
    } else t[e] = new o(i)
  }

  function nh(t) {
    var e = t.option.transform;
    e && U(t.option.transform)
  }

  function ih(t) {
    return "series" === t.mainType
  }

  function rh(t) {
    throw new Error(t)
  }

  function oh(t, e) {
    var n = t.color || "#6e7079",
      i = t.fontSize || 12,
      r = t.fontWeight || "400",
      o = t.color || "#464646",
      a = t.fontSize || 14,
      s = t.fontWeight || "900";
    return "html" === e ? {
      nameStyle: "font-size:" + Tl(i + "") + "px;color:" + Tl(n) + ";font-weight:" + Tl(r + ""),
      valueStyle: "font-size:" + Tl(a + "") + "px;color:" + Tl(o) + ";font-weight:" + Tl(s + "")
    } : {
      nameStyle: {
        fontSize: i,
        fill: n,
        fontWeight: r
      },
      valueStyle: {
        fontSize: a,
        fill: o,
        fontWeight: s
      }
    }
  }

  function ah(t, e) {
    return e.type = t, e
  }

  function sh(t) {
    return "section" === t.type
  }

  function lh(t) {
    return sh(t) ? hh : ch
  }

  function uh(t) {
    if (sh(t)) {
      var e = 0,
        n = t.blocks.length,
        i = n > 1 || n > 0 && !t.noHeader;
      return v(t.blocks, function (t) {
        var n = uh(t);
        n >= e && (e = n + +(i && (!n || sh(t) && !t.noHeader)))
      }), e
    }
    return 0
  }

  function hh(t, e, n, i) {
    var r = e.noHeader,
      o = fh(uh(e)),
      a = [],
      s = e.blocks || [];
    W(!s || M(s)), s = s || [];
    var l = t.orderMode;
    if (e.sortBlocks && l) {
      s = s.slice();
      var u = {
        valueAsc: "asc",
        valueDesc: "desc"
      };
      if (K(u, l)) {
        var c = new gM(u[l], null);
        s.sort(function (t, e) {
          return c.evaluate(t.sortParam, e.sortParam)
        })
      } else "seriesDesc" === l && s.reverse()
    }
    v(s, function (n, r) {
      var s = e.valueFormatter,
        l = lh(n)(s ? h(h({}, t), {
          valueFormatter: s
        }) : t, n, r > 0 ? o.html : 0, i);
      null != l && a.push(l)
    });
    var p = "richText" === t.renderMode ? a.join(o.richText) : dh(a.join(""), r ? n : o.html);
    if (r) return p;
    var f = Cl(e.header, "ordinal", t.useUTC),
      d = oh(i, t.renderMode).nameStyle;
    return "richText" === t.renderMode ? yh(t, f, d) + o.richText + p : dh('<div style="' + d + ";" + CM + ';">' + Tl(f) + "</div>" + p, n)
  }

  function ch(t, e, n, i) {
    var r = t.renderMode,
      o = e.noName,
      a = e.noValue,
      s = !e.markerType,
      l = e.name,
      u = t.useUTC,
      h = e.valueFormatter || t.valueFormatter || function (t) {
        return t = M(t) ? t : [t], y(t, function (t, e) {
          return Cl(t, M(f) ? f[e] : f, u)
        })
      };
    if (!o || !a) {
      var c = s ? "" : t.markupStyleCreator.makeTooltipMarker(e.markerType, e.markerColor || "#333", r),
        p = o ? "" : Cl(l, "ordinal", u),
        f = e.valueType,
        d = a ? [] : h(e.value),
        g = !s || !o,
        v = !s && o,
        m = oh(i, r),
        _ = m.nameStyle,
        x = m.valueStyle;
      return "richText" === r ? (s ? "" : c) + (o ? "" : yh(t, p, _)) + (a ? "" : mh(t, d, g, v, x)) : dh((s ? "" : c) + (o ? "" : gh(p, !s, _)) + (a ? "" : vh(d, g, v, x)), n)
    }
  }

  function ph(t, e, n, i, r, o) {
    if (t) {
      var a = lh(t),
        s = {
          useUTC: r,
          renderMode: n,
          orderMode: i,
          markupStyleCreator: e,
          valueFormatter: t.valueFormatter
        };
      return a(s, t, 0, o)
    }
  }

  function fh(t) {
    return {
      html: IM[t],
      richText: kM[t]
    }
  }

  function dh(t, e) {
    var n = '<div style="clear:both"></div>',
      i = "margin: " + e + "px 0 0";
    return '<div style="' + i + ";" + CM + ';">' + t + n + "</div>"
  }

  function gh(t, e, n) {
    var i = e ? "margin-left:2px" : "";
    return '<span style="' + n + ";" + i + '">' + Tl(t) + "</span>"
  }

  function vh(t, e, n, i) {
    var r = n ? "10px" : "20px",
      o = e ? "float:right;margin-left:" + r : "";
    return t = M(t) ? t : [t], '<span style="' + o + ";" + i + '">' + y(t, function (t) {
      return Tl(t)
    }).join("&nbsp;&nbsp;") + "</span>"
  }

  function yh(t, e, n) {
    return t.markupStyleCreator.wrapRichTextStyle(e, n)
  }

  function mh(t, e, n, i, r) {
    var o = [r],
      a = i ? 10 : 20;
    return n && o.push({
      padding: [0, 0, 0, a],
      align: "right"
    }), t.markupStyleCreator.wrapRichTextStyle(M(e) ? e.join("  ") : e, o)
  }

  function _h(t, e) {
    var n = t.getData().getItemVisual(e, "style"),
      i = n[t.visualDrawType];
    return Pl(i)
  }

  function xh(t, e) {
    var n = t.get("padding");
    return null != n ? n : "richText" === e ? [8, 10] : 10
  }

  function wh(t) {
    var e, n, i, r, o = t.series,
      a = t.dataIndex,
      s = t.multipleSeries,
      l = o.getData(),
      u = l.mapDimensionsAll("defaultedTooltip"),
      h = u.length,
      c = o.getRawValue(a),
      p = M(c),
      f = _h(o, a);
    if (h > 1 || p && !h) {
      var d = bh(c, o, a, u, f);
      e = d.inlineValues, n = d.inlineValueTypes, i = d.blocks, r = d.inlineValues[0]
    } else if (h) {
      var g = l.getDimensionInfo(u[0]);
      r = e = Fu(l, a, u[0]), n = g.type
    } else r = e = p ? c[0] : c;
    var v = Sr(o),
      y = v && o.name || "",
      m = l.getName(a),
      _ = s ? y : m;
    return ah("section", {
      header: y,
      noHeader: s || !v,
      sortParam: r,
      blocks: [ah("nameValue", {
        markerType: "item",
        markerColor: f,
        name: _,
        noName: !G(_),
        value: e,
        valueType: n
      })].concat(i || [])
    })
  }

  function bh(t, e, n, i, r) {
    function o(t, e) {
      var n = a.getDimensionInfo(e);
      n && n.otherDims.tooltip !== !1 && (s ? h.push(ah("nameValue", {
        markerType: "subItem",
        markerColor: r,
        name: n.displayName,
        value: t,
        valueType: n.type
      })) : (l.push(t), u.push(n.type)))
    }
    var a = e.getData(),
      s = m(t, function (t, e, n) {
        var i = a.getDimensionInfo(n);
        return t = t || i && i.tooltip !== !1 && null != i.displayName
      }, !1),
      l = [],
      u = [],
      h = [];
    return i.length ? v(i, function (t) {
      o(Fu(a, n, t), t)
    }) : v(t, o), {
      inlineValues: l,
      inlineValueTypes: u,
      blocks: h
    }
  }

  function Sh(t, e) {
    return t.getName(e) || t.getId(e)
  }

  function Mh(t) {
    var e = t.name;
    Sr(t) || (t.name = Th(t) || e)
  }

  function Th(t) {
    var e = t.getRawData(),
      n = e.mapDimensionsAll("seriesName"),
      i = [];
    return v(n, function (t) {
      var n = e.getDimensionInfo(t);
      n.displayName && i.push(n.displayName)
    }), i.join(" ")
  }

  function Ch(t) {
    return t.model.getRawData().count()
  }

  function Ih(t) {
    var e = t.model;
    return e.setData(e.getRawData().cloneShallow()), kh
  }

  function kh(t, e) {
    e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
  }

  function Dh(t, e) {
    v(q(t.CHANGABLE_METHODS, t.DOWNSAMPLE_METHODS), function (n) {
      t.wrapMethod(n, S(Ah, e))
    })
  }

  function Ah(t, e) {
    var n = Ph(t);
    return n && n.setOutputEnd((e || this).count()), e
  }

  function Ph(t) {
    var e = (t.ecModel || {}).scheduler,
      n = e && e.getPipeline(t.uid);
    if (n) {
      var i = n.currentTask;
      if (i) {
        var r = i.agentStubMap;
        r && (i = r.get(t.uid))
      }
      return i
    }
  }

  function Lh() {
    var t = kr();
    return function (e) {
      var n = t(e),
        i = e.pipelineContext,
        r = !!n.large,
        o = !!n.progressiveRender,
        a = n.large = !(!i || !i.large),
        s = n.progressiveRender = !(!i || !i.progressiveRender);
      return !(r === a && o === s) && "reset"
    }
  }

  function Oh(t, e, n) {
    t && La(t) && ("emphasis" === e ? ua : ha)(t, n)
  }

  function Rh(t, e, n) {
    var i = Ir(t, e),
      r = e && null != e.highlightKey ? Oa(e.highlightKey) : null;
    null != i ? v(ur(i), function (e) {
      Oh(t.getItemGraphicEl(e), n, r)
    }) : t.eachItemGraphicEl(function (t) {
      Oh(t, n, r)
    })
  }

  function Bh(t) {
    return BM(t.model)
  }

  function zh(t) {
    var e = t.model,
      n = t.ecModel,
      i = t.api,
      r = t.payload,
      o = e.pipelineContext.progressiveRender,
      a = t.view,
      s = r && RM(r).updateMethod,
      l = o ? "incrementalPrepareRender" : s && a[s] ? s : "render";
    return "render" !== l && a[l](e, n, i, r), NM[l]
  }

  function Eh(t, e, n) {
    function i() {
      h = (new Date).getTime(), c = null, t.apply(a, s || [])
    }
    var r, o, a, s, l, u = 0,
      h = 0,
      c = null;
    e = e || 0;
    var p = function () {
      for (var t = [], p = 0; p < arguments.length; p++) t[p] = arguments[p];
      r = (new Date).getTime(), a = this, s = t;
      var f = l || e,
        d = l || n;
      l = null, o = r - (d ? u : h) - f, clearTimeout(c), d ? c = setTimeout(i, f) : o >= 0 ? i() : c = setTimeout(i, -o), u = r
    };
    return p.clear = function () {
      c && (clearTimeout(c), c = null)
    }, p.debounceNextCall = function (t) {
      l = t
    }, p
  }

  function Nh(t, e, n, i) {
    var r = t[e];
    if (r) {
      var o = r[FM] || r,
        a = r[VM],
        s = r[HM];
      if (s !== n || a !== i) {
        if (null == n || !i) return t[e] = o;
        r = t[e] = Eh(o, n, "debounce" === i), r[FM] = o, r[VM] = i, r[HM] = n
      }
      return r
    }
  }

  function Fh(t, e) {
    var n = t[e];
    n && n[FM] && (n.clear && n.clear(), t[e] = n[FM])
  }

  function Hh(t, e) {
    var n = t.visualStyleMapper || GM[e];
    return n ? n : (console.warn("Unkown style type '" + e + "'."), GM.itemStyle)
  }

  function Vh(t, e) {
    var n = t.visualDrawType || UM[e];
    return n ? n : (console.warn("Unkown style type '" + e + "'."), "fill")
  }

  function Wh(t, e) {
    e = e || {}, c(e, {
      text: "loading",
      textColor: "#000",
      fontSize: 12,
      fontWeight: "normal",
      fontStyle: "normal",
      fontFamily: "sans-serif",
      maskColor: "rgba(255, 255, 255, 0.8)",
      showSpinner: !0,
      color: "#5470c6",
      spinnerRadius: 10,
      lineWidth: 5,
      zlevel: 0
    });
    var n = new d_,
      i = new Gx({
        style: {
          fill: e.maskColor
        },
        zlevel: e.zlevel,
        z: 1e4
      });
    n.add(i);
    var r = new qx({
        style: {
          text: e.text,
          fill: e.textColor,
          fontSize: e.fontSize,
          fontWeight: e.fontWeight,
          fontStyle: e.fontStyle,
          fontFamily: e.fontFamily
        },
        zlevel: e.zlevel,
        z: 10001
      }),
      o = new Gx({
        style: {
          fill: "none"
        },
        textContent: r,
        textConfig: {
          position: "right",
          distance: 10
        },
        zlevel: e.zlevel,
        z: 10001
      });
    n.add(o);
    var a;
    return e.showSpinner && (a = new ob({
      shape: {
        startAngle: -ZM / 2,
        endAngle: -ZM / 2 + .1,
        r: e.spinnerRadius
      },
      style: {
        stroke: e.color,
        lineCap: "round",
        lineWidth: e.lineWidth
      },
      zlevel: e.zlevel,
      z: 10001
    }), a.animateShape(!0).when(1e3, {
      endAngle: 3 * ZM / 2
    }).start("circularInOut"), a.animateShape(!0).when(1e3, {
      startAngle: 3 * ZM / 2
    }).delay(300).start("circularInOut"), n.add(a)), n.resize = function () {
      var n = r.getBoundingRect().width,
        s = e.showSpinner ? e.spinnerRadius : 0,
        l = (t.getWidth() - 2 * s - (e.showSpinner && n ? 10 : 0) - n) / 2 - (e.showSpinner && n ? 0 : 5 + n / 2) + (e.showSpinner ? 0 : n / 2) + (n ? 0 : s),
        u = t.getHeight() / 2;
      e.showSpinner && a.setShape({
        cx: l,
        cy: u
      }), o.setShape({
        x: l - s,
        y: u - s,
        width: 2 * s,
        height: 2 * s
      }), i.setShape({
        x: 0,
        y: 0,
        width: t.getWidth(),
        height: t.getHeight()
      })
    }, n.resize(), n
  }

  function Gh(t) {
    t.overallReset(t.ecModel, t.api, t.payload)
  }

  function Uh(t) {
    return t.overallProgress && Xh
  }

  function Xh() {
    this.agent.dirty(), this.getDownstream().dirty()
  }

  function Yh() {
    this.agent && this.agent.dirty()
  }

  function qh(t) {
    return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null
  }

  function jh(t) {
    t.useClearVisual && t.data.clearAllVisual();
    var e = t.resetDefines = ur(t.reset(t.model, t.ecModel, t.api, t.payload));
    return e.length > 1 ? y(e, function (t, e) {
      return Zh(e)
    }) : $M
  }

  function Zh(t) {
    return function (e, n) {
      var i = n.data,
        r = n.resetDefines[t];
      if (r && r.dataEach)
        for (var o = e.start; o < e.end; o++) r.dataEach(i, o);
      else r && r.progress && r.progress(e, i)
    }
  }

  function Kh(t) {
    return t.data.count()
  }

  function $h(t) {
    EM = null;
    try {
      t(QM, JM)
    } catch (e) {}
    return EM
  }

  function Qh(t, e) {
    for (var n in e.prototype) t[n] = $
  }

  function Jh(t, e, n) {
    switch (n) {
      case "color":
        var i = t.getItemVisual(e, "style");
        return i[t.getVisual("drawType")];
      case "opacity":
        return t.getItemVisual(e, "style").opacity;
      case "symbol":
      case "symbolSize":
      case "liftZ":
        return t.getItemVisual(e, n)
    }
  }

  function tc(t, e) {
    switch (e) {
      case "color":
        var n = t.getVisual("style");
        return n[t.getVisual("drawType")];
      case "opacity":
        return t.getVisual("style").opacity;
      case "symbol":
      case "symbolSize":
      case "liftZ":
        return t.getVisual(e)
    }
  }

  function ec(t, e, n, i, r) {
    var o = t + e;
    n.isSilent(o) || i.eachComponent({
      mainType: "series",
      subType: "pie"
    }, function (t) {
      for (var e = t.seriesIndex, i = t.option.selectedMap, a = r.selected, s = 0; s < a.length; s++)
        if (a[s].seriesIndex === e) {
          var l = t.getData(),
            u = Ir(l, r.fromActionPayload);
          n.trigger(o, {
            type: o,
            seriesId: t.id,
            name: l.getName(M(u) ? u[0] : u),
            selected: C(i) ? i : h({}, i)
          })
        }
    })
  }

  function nc(t, e, n) {
    t.on("selectchanged", function (t) {
      var i = n.getModel();
      t.isFromClick ? (ec("map", "selectchanged", e, i, t), ec("pie", "selectchanged", e, i, t)) : "select" === t.fromAction ? (ec("map", "selected", e, i, t), ec("pie", "selected", e, i, t)) : "unselect" === t.fromAction && (ec("map", "unselected", e, i, t), ec("pie", "unselected", e, i, t))
    })
  }

  function ic(t, e, n) {
    for (var i; t && (!e(t) || (i = t, !n));) t = t.__hostTarget || t.parent;
    return i
  }

  function rc(t, e) {
    if ("image" !== this.type) {
      var n = this.style;
      this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff", n.lineWidth = 2) : "line" === this.shape.symbolType ? n.stroke = t : n.fill = t, this.markRedraw()
    }
  }

  function oc(t, e, n, i, r, o, a) {
    var s = 0 === t.indexOf("empty");
    s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
    var l;
    return l = 0 === t.indexOf("image://") ? ds(t.slice(8), new a_(e, n, i, r), a ? "center" : "cover") : 0 === t.indexOf("path://") ? fs(t.slice(7), {}, new a_(e, n, i, r), a ? "center" : "cover") : new bT({
      shape: {
        symbolType: t,
        x: e,
        y: n,
        width: i,
        height: r
      }
    }), l.__isEmptyBrush = s, l.setColor = rc, o && l.setColor(o), l
  }

  function ac(t, e) {
    return null != t ? (M(t) || (t = [t, t]), [Hi(t[0], e[0]) || 0, Hi(N(t[1], t[0]), e[1]) || 0]) : void 0
  }

  function sc(t) {
    return isFinite(t)
  }

  function lc(t, e, n) {
    var i = null == e.x ? 0 : e.x,
      r = null == e.x2 ? 1 : e.x2,
      o = null == e.y ? 0 : e.y,
      a = null == e.y2 ? 0 : e.y2;
    e.global || (i = i * n.width + n.x, r = r * n.width + n.x, o = o * n.height + n.y, a = a * n.height + n.y), i = sc(i) ? i : 0, r = sc(r) ? r : 1, o = sc(o) ? o : 0, a = sc(a) ? a : 0;
    var s = t.createLinearGradient(i, o, r, a);
    return s
  }

  function uc(t, e, n) {
    var i = n.width,
      r = n.height,
      o = Math.min(i, r),
      a = null == e.x ? .5 : e.x,
      s = null == e.y ? .5 : e.y,
      l = null == e.r ? .5 : e.r;
    e.global || (a = a * i + n.x, s = s * r + n.y, l *= o), a = sc(a) ? a : .5, s = sc(s) ? s : .5, l = l >= 0 && sc(l) ? l : .5;
    var u = t.createRadialGradient(a, s, 0, a, s, l);
    return u
  }

  function hc(t, e, n) {
    for (var i = "radial" === e.type ? uc(t, e, n) : lc(t, e, n), r = e.colorStops, o = 0; o < r.length; o++) i.addColorStop(r[o].offset, r[o].color);
    return i
  }

  function cc(t, e) {
    if (t === e || !t && !e) return !1;
    if (!t || !e || t.length !== e.length) return !0;
    for (var n = 0; n < t.length; n++)
      if (t[n] !== e[n]) return !0;
    return !1
  }

  function pc(t) {
    return parseInt(t, 10)
  }

  function fc(t, e, n) {
    var i = ["width", "height"][e],
      r = ["clientWidth", "clientHeight"][e],
      o = ["paddingLeft", "paddingTop"][e],
      a = ["paddingRight", "paddingBottom"][e];
    if (null != n[i] && "auto" !== n[i]) return parseFloat(n[i]);
    var s = document.defaultView.getComputedStyle(t);
    return (t[r] || pc(s[i]) || pc(t.style[i])) - (pc(s[o]) || 0) - (pc(s[a]) || 0) | 0
  }

  function dc(t, e) {
    return t && "solid" !== t && e > 0 ? "dashed" === t ? [4 * e, 2 * e] : "dotted" === t ? [e] : k(t) ? [t] : M(t) ? t : null : null
  }

  function gc(t) {
    var e = t.style,
      n = e.lineDash && e.lineWidth > 0 && dc(e.lineDash, e.lineWidth),
      i = e.lineDashOffset;
    if (n) {
      var r = e.strokeNoScale && t.getLineScale ? t.getLineScale() : 1;
      r && 1 !== r && (n = y(n, function (t) {
        return t / r
      }), i /= r)
    }
    return [n, i]
  }

  function vc(t) {
    var e = t.stroke;
    return !(null == e || "none" === e || !(t.lineWidth > 0))
  }

  function yc(t) {
    return "string" == typeof t && "none" !== t
  }

  function mc(t) {
    var e = t.fill;
    return null != e && "none" !== e
  }

  function _c(t, e) {
    if (null != e.fillOpacity && 1 !== e.fillOpacity) {
      var n = t.globalAlpha;
      t.globalAlpha = e.fillOpacity * e.opacity, t.fill(), t.globalAlpha = n
    } else t.fill()
  }

  function xc(t, e) {
    if (null != e.strokeOpacity && 1 !== e.strokeOpacity) {
      var n = t.globalAlpha;
      t.globalAlpha = e.strokeOpacity * e.opacity, t.stroke(), t.globalAlpha = n
    } else t.stroke()
  }

  function wc(t, e, n) {
    var i = jr(e.image, e.__image, n);
    if (Kr(i)) {
      var r = t.createPattern(i, e.repeat || "repeat");
      if ("function" == typeof DOMMatrix && r && r.setTransform) {
        var o = new DOMMatrix;
        o.translateSelf(e.x || 0, e.y || 0), o.rotateSelf(0, 0, (e.rotation || 0) * dy), o.scaleSelf(e.scaleX || 1, e.scaleY || 1), r.setTransform(o)
      }
      return r
    }
  }

  function bc(t, e, n, i) {
    var r, o = vc(n),
      a = mc(n),
      s = n.strokePercent,
      l = 1 > s,
      u = !e.path;
    e.silent && !l || !u || e.createPathProxy();
    var h = e.path || ST,
      c = e.__dirty;
    if (!i) {
      var p = n.fill,
        f = n.stroke,
        d = a && !!p.colorStops,
        g = o && !!f.colorStops,
        v = a && !!p.image,
        y = o && !!f.image,
        m = void 0,
        _ = void 0,
        x = void 0,
        w = void 0,
        b = void 0;
      (d || g) && (b = e.getBoundingRect()), d && (m = c ? hc(t, p, b) : e.__canvasFillGradient, e.__canvasFillGradient = m), g && (_ = c ? hc(t, f, b) : e.__canvasStrokeGradient, e.__canvasStrokeGradient = _), v && (x = c || !e.__canvasFillPattern ? wc(t, p, e) : e.__canvasFillPattern, e.__canvasFillPattern = x), y && (w = c || !e.__canvasStrokePattern ? wc(t, f, e) : e.__canvasStrokePattern, e.__canvasStrokePattern = x), d ? t.fillStyle = m : v && (x ? t.fillStyle = x : a = !1), g ? t.strokeStyle = _ : y && (w ? t.strokeStyle = w : o = !1)
    }
    var S = e.getGlobalScale();
    h.setScale(S[0], S[1], e.segmentIgnoreThreshold);
    var M, T;
    t.setLineDash && n.lineDash && (r = gc(e), M = r[0], T = r[1]);
    var C = !0;
    (u || c & Gy) && (h.setDPR(t.dpr), l ? h.setContext(null) : (h.setContext(t), C = !1), h.reset(), e.buildPath(h, e.shape, i), h.toStatic(), e.pathUpdated()), C && h.rebuildPath(t, l ? s : 1), M && (t.setLineDash(M), t.lineDashOffset = T), i || (n.strokeFirst ? (o && xc(t, n), a && _c(t, n)) : (a && _c(t, n), o && xc(t, n))), M && t.setLineDash([])
  }

  function Sc(t, e, n) {
    var i = e.__image = jr(n.image, e.__image, e, e.onload);
    if (i && Kr(i)) {
      var r = n.x || 0,
        o = n.y || 0,
        a = e.getWidth(),
        s = e.getHeight(),
        l = i.width / i.height;
      if (null == a && null != s ? a = s * l : null == s && null != a ? s = a / l : null == a && null == s && (a = i.width, s = i.height), n.sWidth && n.sHeight) {
        var u = n.sx || 0,
          h = n.sy || 0;
        t.drawImage(i, u, h, n.sWidth, n.sHeight, r, o, a, s)
      } else if (n.sx && n.sy) {
        var u = n.sx,
          h = n.sy,
          c = a - u,
          p = s - h;
        t.drawImage(i, u, h, c, p, r, o, a, s)
      } else t.drawImage(i, r, o, a, s)
    }
  }

  function Mc(t, e, n) {
    var i, r = n.text;
    if (null != r && (r += ""), r) {
      t.font = n.font || Yv, t.textAlign = n.textAlign, t.textBaseline = n.textBaseline;
      var o = void 0,
        a = void 0;
      t.setLineDash && n.lineDash && (i = gc(e), o = i[0], a = i[1]), o && (t.setLineDash(o), t.lineDashOffset = a), n.strokeFirst ? (vc(n) && t.strokeText(r, n.x, n.y), mc(n) && t.fillText(r, n.x, n.y)) : (mc(n) && t.fillText(r, n.x, n.y), vc(n) && t.strokeText(r, n.x, n.y)), o && t.setLineDash([])
    }
  }

  function Tc(t, e, n, i, r) {
    var o = !1;
    if (!i && (n = n || {}, e === n)) return !1;
    if (i || e.opacity !== n.opacity) {
      Lc(t, r), o = !0;
      var a = Math.max(Math.min(e.opacity, 1), 0);
      t.globalAlpha = isNaN(a) ? G_.opacity : a
    }(i || e.blend !== n.blend) && (o || (Lc(t, r), o = !0), t.globalCompositeOperation = e.blend || G_.blend);
    for (var s = 0; s < MT.length; s++) {
      var l = MT[s];
      (i || e[l] !== n[l]) && (o || (Lc(t, r), o = !0), t[l] = t.dpr * (e[l] || 0))
    }
    return (i || e.shadowColor !== n.shadowColor) && (o || (Lc(t, r), o = !0), t.shadowColor = e.shadowColor || G_.shadowColor), o
  }

  function Cc(t, e, n, i, r) {
    var o = Oc(e, r.inHover),
      a = i ? null : n && Oc(n, r.inHover) || {};
    if (o === a) return !1;
    var s = Tc(t, o, a, i, r);
    if ((i || o.fill !== a.fill) && (s || (Lc(t, r), s = !0), yc(o.fill) && (t.fillStyle = o.fill)), (i || o.stroke !== a.stroke) && (s || (Lc(t, r), s = !0), yc(o.stroke) && (t.strokeStyle = o.stroke)), (i || o.opacity !== a.opacity) && (s || (Lc(t, r), s = !0), t.globalAlpha = null == o.opacity ? 1 : o.opacity), e.hasStroke()) {
      var l = o.lineWidth,
        u = l / (o.strokeNoScale && e.getLineScale ? e.getLineScale() : 1);
      t.lineWidth !== u && (s || (Lc(t, r), s = !0), t.lineWidth = u)
    }
    for (var h = 0; h < TT.length; h++) {
      var c = TT[h],
        p = c[0];
      (i || o[p] !== a[p]) && (s || (Lc(t, r), s = !0), t[p] = o[p] || c[1])
    }
    return s
  }

  function Ic(t, e, n, i, r) {
    return Tc(t, Oc(e, r.inHover), n && Oc(n, r.inHover), i, r)
  }

  function kc(t, e) {
    var n = e.transform,
      i = t.dpr || 1;
    n ? t.setTransform(i * n[0], i * n[1], i * n[2], i * n[3], i * n[4], i * n[5]) : t.setTransform(i, 0, 0, i, 0, 0)
  }

  function Dc(t, e, n) {
    for (var i = !1, r = 0; r < t.length; r++) {
      var o = t[r];
      i = i || o.isZeroArea(), kc(e, o), e.beginPath(), o.buildPath(e, o.shape), e.clip()
    }
    n.allClipped = i
  }

  function Ac(t, e) {
    return t && e ? t[0] !== e[0] || t[1] !== e[1] || t[2] !== e[2] || t[3] !== e[3] || t[4] !== e[4] || t[5] !== e[5] : t || e ? !0 : !1
  }

  function Pc(t) {
    var e = mc(t),
      n = vc(t);
    return !(t.lineDash || !(+e ^ +n) || e && "string" != typeof t.fill || n && "string" != typeof t.stroke || t.strokePercent < 1 || t.strokeOpacity < 1 || t.fillOpacity < 1)
  }

  function Lc(t, e) {
    e.batchFill && t.fill(), e.batchStroke && t.stroke(), e.batchFill = "", e.batchStroke = ""
  }

  function Oc(t, e) {
    return e ? t.__hoverStyle || t.style : t.style
  }

  function Rc(t, e) {
    Bc(t, e, {
      inHover: !1,
      viewWidth: 0,
      viewHeight: 0
    }, !0)
  }

  function Bc(t, e, n, i) {
    var r = e.transform;
    if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1)) return e.__dirty &= ~Vy, void(e.__isRendered = !1);
    var o = e.__clipPaths,
      a = n.prevElClipPaths,
      s = !1,
      l = !1;
    if ((!a || cc(o, a)) && (a && a.length && (Lc(t, n), t.restore(), l = s = !0, n.prevElClipPaths = null, n.allClipped = !1, n.prevEl = null), o && o.length && (Lc(t, n), t.save(), Dc(o, t, n), s = !0), n.prevElClipPaths = o), n.allClipped) return void(e.__isRendered = !1);
    e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush();
    var u = n.prevEl;
    u || (l = s = !0);
    var h = e instanceof Rx && e.autoBatch && Pc(e.style);
    s || Ac(r, u.transform) ? (Lc(t, n), kc(t, e)) : h || Lc(t, n);
    var c = Oc(e, n.inHover);
    e instanceof Rx ? (n.lastDrawType !== CT && (l = !0, n.lastDrawType = CT), Cc(t, e, u, l, n), h && (n.batchFill || n.batchStroke) || t.beginPath(), bc(t, e, c, h), h && (n.batchFill = c.fill || "", n.batchStroke = c.stroke || "")) : e instanceof zx ? (n.lastDrawType !== kT && (l = !0, n.lastDrawType = kT), Cc(t, e, u, l, n), Mc(t, e, c)) : e instanceof Fx ? (n.lastDrawType !== IT && (l = !0, n.lastDrawType = IT), Ic(t, e, u, l, n), Sc(t, e, c)) : e.getTemporalDisplayables && (n.lastDrawType !== DT && (l = !0, n.lastDrawType = DT), zc(t, e, n)), h && i && Lc(t, n), e.innerAfterBrush(), e.afterBrush && e.afterBrush(), n.prevEl = e, e.__dirty = 0, e.__isRendered = !0
  }

  function zc(t, e, n) {
    var i = e.getDisplayables(),
      r = e.getTemporalDisplayables();
    t.save();
    var o, a, s = {
      prevElClipPaths: null,
      prevEl: null,
      allClipped: !1,
      viewWidth: n.viewWidth,
      viewHeight: n.viewHeight,
      inHover: n.inHover
    };
    for (o = e.getCursor(), a = i.length; a > o; o++) {
      var l = i[o];
      l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), Bc(t, l, s, o === a - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), s.prevEl = l
    }
    for (var u = 0, h = r.length; h > u; u++) {
      var l = r[u];
      l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), Bc(t, l, s, u === h - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), s.prevEl = l
    }
    e.clearTemporalDisplayables(), e.notClear = !0, t.restore()
  }

  function Ec(t, e) {
    function n(t) {
      function e() {
        for (var t = 1, e = 0, n = y.length; n > e; ++e) t = ar(t, y[e]);
        for (var i = 1, e = 0, n = v.length; n > e; ++e) i = ar(i, v[e].length);
        t *= i;
        var r = m * y.length * v.length;
        return {
          width: Math.max(1, Math.min(t, s.maxTileWidth)),
          height: Math.max(1, Math.min(r, s.maxTileHeight))
        }
      }

      function n() {
        function t(t, e, n, a, l) {
          var u = o ? 1 : i,
            h = oc(l, t * u, e * u, n * u, a * u, s.color, s.symbolKeepAspect);
          if (o) {
            var c = r.painter.renderOneToVNode(h);
            c && x.children.push(c)
          } else Rc(f, h)
        }
        f && (f.clearRect(0, 0, _.width, _.height), s.backgroundColor && (f.fillStyle = s.backgroundColor, f.fillRect(0, 0, _.width, _.height)));
        for (var e = 0, n = 0; n < g.length; ++n) e += g[n];
        if (!(0 >= e))
          for (var a = -m, l = 0, u = 0, h = 0; a < w.height;) {
            if (l % 2 === 0) {
              for (var c = u / 2 % v.length, p = 0, y = 0, b = 0; p < 2 * w.width;) {
                for (var S = 0, n = 0; n < d[h].length; ++n) S += d[h][n];
                if (0 >= S) break;
                if (y % 2 === 0) {
                  var M = .5 * (1 - s.symbolSize),
                    T = p + d[h][y] * M,
                    C = a + g[l] * M,
                    I = d[h][y] * s.symbolSize,
                    k = g[l] * s.symbolSize,
                    D = b / 2 % v[c].length;
                  t(T, C, I, k, v[c][D])
                }
                p += d[h][y], ++b, ++y, y === d[h].length && (y = 0)
              }++h, h === d.length && (h = 0)
            }
            a += g[l], ++u, ++l, l === g.length && (l = 0)
          }
      }
      for (var a = [i], l = !0, u = 0; u < LT.length; ++u) {
        var h = s[LT[u]];
        if (null != h && !M(h) && !C(h) && !k(h) && "boolean" != typeof h) {
          l = !1;
          break
        }
        a.push(h)
      }
      var c;
      if (l) {
        c = a.join(",") + (o ? "-svg" : "");
        var p = PT.get(c);
        p && (o ? t.svgElement = p : t.image = p)
      }
      var f, d = Fc(s.dashArrayX),
        g = Hc(s.dashArrayY),
        v = Nc(s.symbol),
        y = Vc(d),
        m = Wc(g),
        _ = !o && $v.createCanvas(),
        x = o && {
          tag: "g",
          attrs: {},
          key: "dcl",
          children: []
        },
        w = e();
      _ && (_.width = w.width * i, _.height = w.height * i, f = _.getContext("2d")), n(), l && PT.put(c, _ || x), t.image = _, t.svgElement = x, t.svgWidth = w.width, t.svgHeight = w.height
    }
    if ("none" === t) return null;
    var i = e.getDevicePixelRatio(),
      r = e.getZr(),
      o = "svg" === r.painter.type;
    t.dirty && AT["delete"](t);
    var a = AT.get(t);
    if (a) return a;
    var s = c(t, {
      symbol: "rect",
      symbolSize: 1,
      symbolKeepAspect: !0,
      color: "rgba(0, 0, 0, 0.2)",
      backgroundColor: null,
      dashArrayX: 5,
      dashArrayY: 5,
      rotation: 0,
      maxTileWidth: 512,
      maxTileHeight: 512
    });
    "none" === s.backgroundColor && (s.backgroundColor = null);
    var l = {
      repeat: "repeat"
    };
    return n(l), l.rotation = s.rotation, l.scaleX = l.scaleY = o ? 1 : 1 / i, AT.set(t, l), t.dirty = !1, l
  }

  function Nc(t) {
    if (!t || 0 === t.length) return [
      ["rect"]
    ];
    if (C(t)) return [
      [t]
    ];
    for (var e = !0, n = 0; n < t.length; ++n)
      if (!C(t[n])) {
        e = !1;
        break
      } if (e) return Nc([t]);
    for (var i = [], n = 0; n < t.length; ++n) i.push(C(t[n]) ? [t[n]] : t[n]);
    return i
  }

  function Fc(t) {
    if (!t || 0 === t.length) return [
      [0, 0]
    ];
    if (k(t)) {
      var e = Math.ceil(t);
      return [
        [e, e]
      ]
    }
    for (var n = !0, i = 0; i < t.length; ++i)
      if (!k(t[i])) {
        n = !1;
        break
      } if (n) return Fc([t]);
    for (var r = [], i = 0; i < t.length; ++i)
      if (k(t[i])) {
        var e = Math.ceil(t[i]);
        r.push([e, e])
      } else {
        var e = y(t[i], function (t) {
          return Math.ceil(t)
        });
        r.push(e.length % 2 === 1 ? e.concat(e) : e)
      } return r
  }

  function Hc(t) {
    if (!t || "object" == typeof t && 0 === t.length) return [0, 0];
    if (k(t)) {
      var e = Math.ceil(t);
      return [e, e]
    }
    var n = y(t, function (t) {
      return Math.ceil(t)
    });
    return t.length % 2 ? n.concat(n) : n
  }

  function Vc(t) {
    return y(t, function (t) {
      return Wc(t)
    })
  }

  function Wc(t) {
    for (var e = 0, n = 0; n < t.length; ++n) e += t[n];
    return t.length % 2 === 1 ? 2 * e : e
  }

  function Gc(t, e) {
    t.eachRawSeries(function (n) {
      if (!t.isSeriesFiltered(n)) {
        var i = n.getData();
        i.hasItemVisual() && i.each(function (t) {
          var n = i.getItemVisual(t, "decal");
          if (n) {
            var r = i.ensureUniqueItemVisual(t, "style");
            r.decal = Ec(n, e)
          }
        });
        var r = i.getVisual("decal");
        if (r) {
          var o = i.getVisual("style");
          o.decal = Ec(r, e)
        }
      }
    })
  }

  function Uc(t, e) {
    RT[t] = e
  }

  function Xc(t) {
    return RT[t]
  }

  function Yc(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return this.isDisposed() ? void 0 : jc(this, t, e)
    }
  }

  function qc(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return jc(this, t, e)
    }
  }

  function jc(t, e, n) {
    return n[0] = n[0] && n[0].toLowerCase(), Sy.prototype[e].apply(t, n)
  }

  function Zc(t, e, n) {
    var i = !(n && n.ssr);
    if (i) {
      var r = Jc(t);
      if (r) return r
    }
    var o = new DC(t, e, n);
    return o.id = "ec_" + VC++, FC[o.id] = o, i && Lr(t, GC, o.id), CC(o), OT.trigger("afterinit", o), o
  }

  function Kc(t) {
    if (M(t)) {
      var e = t;
      t = null, v(e, function (e) {
        null != e.group && (t = e.group)
      }), t = t || "g_" + WC++, v(e, function (e) {
        e.group = t
      })
    }
    return HC[t] = !0, t
  }

  function $c(t) {
    HC[t] = !1
  }

  function Qc(t) {
    C(t) ? t = FC[t] : t instanceof DC || (t = Jc(t)), t instanceof DC && !t.isDisposed() && t.dispose()
  }

  function Jc(t) {
    return FC[Or(t, GC)]
  }

  function tp(t) {
    return FC[t]
  }

  function ep(t, e) {
    EC[t] = e
  }

  function np(t) {
    p(BC, t) < 0 && BC.push(t)
  }

  function ip(t, e) {
    pp(RC, t, e, WT)
  }

  function rp(t) {
    ap("afterinit", t)
  }

  function op(t) {
    ap("afterupdate", t)
  }

  function ap(t, e) {
    OT.on(t, e)
  }

  function sp(t, e, n) {
    T(e) && (n = e, e = "");
    var i = D(t) ? t.type : [t, t = {
      event: e
    }][0];
    t.event = (t.event || i).toLowerCase(), e = t.event, OC[e] || (W(rC.test(i) && rC.test(e)), LC[i] || (LC[i] = {
      action: n,
      actionInfo: t
    }), OC[e] = i)
  }

  function lp(t, e) {
    qS.register(t, e)
  }

  function up(t) {
    var e = qS.get(t);
    return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
  }

  function hp(t, e) {
    pp(zC, t, e, UT, "layout")
  }

  function cp(t, e) {
    pp(zC, t, e, qT, "visual")
  }

  function pp(t, e, n, i, r) {
    if ((T(e) || D(e)) && (n = e, e = i), !(p(XC, n) >= 0)) {
      XC.push(n);
      var o = KM.wrapStageHandler(n, r);
      o.__prio = e, o.__raw = n, t.push(o)
    }
  }

  function fp(t, e) {
    NC[t] = e
  }

  function dp(t) {
    r({
      createCanvas: t
    })
    let conv = t();
    canvas = conv.canvasNode;
  }

  function gp(t, e, n) {
    var i = Xc("registerMap");
    i && i(t, e, n)
  }

  function vp(t) {
    var e = Xc("getMap");
    return e && e(t)
  }

  function yp(t) {
    return null == t ? 0 : t.length || 1
  }

  function mp(t) {
    return t
  }

  function _p(t, e) {
    var n = {},
      i = n.encode = {},
      r = Y(),
      o = [],
      a = [],
      s = {};
    v(t.dimensions, function (e) {
      var n = t.getDimensionInfo(e),
        l = n.coordDim;
      if (l) {
        var u = n.coordDimIndex;
        xp(i, l)[u] = e, n.isExtraCoord || (r.set(l, 1), bp(n.type) && (o[0] = e), xp(s, l)[u] = t.getDimensionIndex(n.name)), n.defaultTooltip && a.push(e)
      }
      wS.each(function (t, e) {
        var r = xp(i, e),
          o = n.otherDims[e];
        null != o && o !== !1 && (r[o] = n.name)
      })
    });
    var l = [],
      u = {};
    r.each(function (t, e) {
      var n = i[e];
      u[e] = n[0], l = l.concat(n)
    }), n.dataDimsOnCoord = l, n.dataDimIndicesOnCoord = y(l, function (e) {
      return t.getDimensionInfo(e).storeDimIndex
    }), n.encodeFirstDimNotExtra = u;
    var h = i.label;
    h && h.length && (o = h.slice());
    var c = i.tooltip;
    return c && c.length ? a = c.slice() : a.length || (a = o.slice()), i.defaultedLabel = o, i.defaultedTooltip = a, n.userOutput = new nI(s, e), n
  }

  function xp(t, e) {
    return t.hasOwnProperty(e) || (t[e] = []), t[e]
  }

  function wp(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
  }

  function bp(t) {
    return !("ordinal" === t || "time" === t)
  }

  function Sp(t) {
    return t instanceof aI
  }

  function Mp(t) {
    for (var e = Y(), n = 0; n < (t || []).length; n++) {
      var i = t[n],
        r = D(i) ? i.name : i;
      null != r && null == e.get(r) && e.set(r, n)
    }
    return e
  }

  function Tp(t) {
    var e = rI(t);
    return e.dimNameMap || (e.dimNameMap = Mp(t.dimensionsDefine))
  }

  function Cp(t) {
    return t > 30
  }

  function Ip(t, e) {
    return kp(t, e).dimensions
  }

  function kp(t, e) {
    function n(t) {
      var e = m[t];
      if (0 > e) {
        var n = a[t],
          i = D(n) ? n : {
            name: n
          },
          r = new iI,
          o = i.name;
        null != o && null != d.get(o) && (r.name = r.displayName = o), null != i.type && (r.type = i.type), null != i.displayName && (r.displayName = i.displayName);
        var s = l.length;
        return m[t] = s, r.storeDimIndex = t, l.push(r), r
      }
      return l[e]
    }

    function i(t, e, n) {
      null != wS.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, s.set(e, !0))
    }

    function r(t) {
      null == t.name && (t.name = t.coordDim)
    }
    Tu(t) || (t = Iu(t)), e = e || {};
    var o = e.coordDimensions || [],
      a = e.dimensionsDefine || t.dimensionsDefine || [],
      s = Y(),
      l = [],
      u = Ap(t, o, a, e.dimensionsCount),
      p = e.canOmitUnusedDimensions && Cp(u),
      f = a === t.dimensionsDefine,
      d = f ? Tp(t) : Mp(a),
      g = e.encodeDefine;
    !g && e.encodeDefaulter && (g = e.encodeDefaulter(t, u));
    for (var y = Y(g), m = new wM(u), _ = 0; _ < m.length; _++) m[_] = -1;
    if (!p)
      for (var _ = 0; u > _; _++) n(_);
    y.each(function (t, e) {
      var r = ur(t).slice();
      if (1 === r.length && !C(r[0]) && r[0] < 0) return void y.set(e, !1);
      var o = y.set(e, []);
      v(r, function (t, r) {
        var a = C(t) ? d.get(t) : t;
        null != a && u > a && (o[r] = a, i(n(a), e, r))
      })
    });
    var x = 0;
    v(o, function (t) {
      var e, r, o, a;
      if (C(t)) e = t, a = {};
      else {
        a = t, e = a.name;
        var s = a.ordinalMeta;
        a.ordinalMeta = null, a = h({}, a), a.ordinalMeta = s, r = a.dimsDef, o = a.otherDims, a.name = a.coordDim = a.coordDimIndex = a.dimsDef = a.otherDims = null
      }
      var l = y.get(e);
      if (l !== !1) {
        if (l = ur(l), !l.length)
          for (var p = 0; p < (r && r.length || 1); p++) {
            for (; u > x && null != n(x).coordDim;) x++;
            u > x && l.push(x++)
          }
        v(l, function (t, s) {
          var l = n(t);
          if (f && null != a.type && (l.type = a.type), i(c(l, a), e, s), null == l.name && r) {
            var u = r[s];
            !D(u) && (u = {
              name: u
            }), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip
          }
          o && c(l.otherDims, o)
        })
      }
    });
    var w = e.generateCoord,
      b = e.generateCoordCount,
      S = null != b;
    b = w ? b || 1 : 0;
    var M = w || "value";
    if (p) v(l, function (t) {
      r(t)
    }), l.sort(function (t, e) {
      return t.storeDimIndex - e.storeDimIndex
    });
    else
      for (var T = 0; u > T; T++) {
        var I = n(T),
          k = I.coordDim;
        null == k && (I.coordDim = Pp(M, s, S), I.coordDimIndex = 0, (!w || 0 >= b) && (I.isExtraCoord = !0), b--), r(I), null != I.type || Ul(t, T) !== AS.Must && (!I.isExtraCoord || null == I.otherDims.itemName && null == I.otherDims.seriesName) || (I.type = "ordinal")
      }
    return Dp(l), new aI({
      source: t,
      dimensions: l,
      fullDimensionCount: u,
      dimensionOmitted: p
    })
  }

  function Dp(t) {
    for (var e = Y(), n = 0; n < t.length; n++) {
      var i = t[n],
        r = i.name,
        o = e.get(r) || 0;
      o > 0 && (i.name = r + (o - 1)), o++, e.set(r, o)
    }
  }

  function Ap(t, e, n, i) {
    var r = Math.max(t.dimensionsDetectedCount || 1, e.length, n.length, i || 0);
    return v(e, function (t) {
      var e;
      D(t) && (e = t.dimsDef) && (r = Math.max(r, e.length))
    }), r
  }

  function Pp(t, e, n) {
    var i = e.data;
    if (n || i.hasOwnProperty(t)) {
      for (var r = 0; i.hasOwnProperty(t + r);) r++;
      t += r
    }
    return e.set(t, !0), t
  }

  function Lp(t) {
    var e = t.get("coordinateSystem"),
      n = new gI(e),
      i = vI[e];
    return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
  }

  function Op(t) {
    return "category" === t.get("type")
  }

  function Rp(t, e, n) {
    n = n || {};
    var i, r, o, a = n.byIndex,
      s = n.stackedCoordDimension;
    Bp(e) ? i = e : (r = e.schema, i = r.dimensions, o = e.store);
    var l, u, h, c, p = !(!t || !t.get("stack"));
    if (v(i, function (t, e) {
        C(t) && (i[e] = t = {
          name: t
        }), p && !t.isExtraCoord && (a || l || !t.ordinalMeta || (l = t), u || "ordinal" === t.type || "time" === t.type || s && s !== t.coordDim || (u = t))
      }), !u || a || l || (a = !0), u) {
      h = "__\x00ecstackresult_" + t.id, c = "__\x00ecstackedover_" + t.id, l && (l.createInvertedIndices = !0);
      var f = u.coordDim,
        d = u.type,
        g = 0;
      v(i, function (t) {
        t.coordDim === f && g++
      });
      var y = {
          name: h,
          coordDim: f,
          coordDimIndex: g,
          type: d,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: i.length
        },
        m = {
          name: c,
          coordDim: c,
          coordDimIndex: g + 1,
          type: d,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: i.length + 1
        };
      r ? (o && (y.storeDimIndex = o.ensureCalculationDimension(c, d), m.storeDimIndex = o.ensureCalculationDimension(h, d)), r.appendCalculationDimension(y), r.appendCalculationDimension(m)) : (i.push(y), i.push(m))
    }
    return {
      stackedDimension: u && u.name,
      stackedByDimension: l && l.name,
      isStackedByIndex: a,
      stackedOverDimension: c,
      stackResultDimension: h
    }
  }

  function Bp(t) {
    return !Sp(t.schema)
  }

  function zp(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension")
  }

  function Ep(t, e) {
    return zp(t, e) ? t.getCalculationInfo("stackResultDimension") : e
  }

  function Np(t, e) {
    var n, i = t.get("coordinateSystem"),
      r = qS.get(i);
    return e && e.coordSysDims && (n = y(e.coordSysDims, function (t) {
      var n = {
          name: t
        },
        i = e.axisMap.get(t);
      if (i) {
        var r = i.get("type");
        n.type = wp(r)
      }
      return n
    })), n || (n = r && (r.getDimensionsInfo ? r.getDimensionsInfo() : r.dimensions.slice()) || ["x", "y"]), n
  }

  function Fp(t, e, n) {
    var i, r;
    return n && v(t, function (t, o) {
      var a = t.coordDim,
        s = n.categoryAxisMap.get(a);
      s && (null == i && (i = o), t.ordinalMeta = s.getOrdinalMeta(), e && (t.createInvertedIndices = !0)), null != t.otherDims.itemName && (r = !0)
    }), r || null == i || (t[i].otherDims.itemName = 0), i
  }

  function Hp(t, e, n) {
    n = n || {};
    var i, r = e.getSourceManager(),
      o = !1;
    t ? (o = !0, i = Iu(t)) : (i = r.getSource(), o = i.sourceFormat === bS);
    var a = Lp(e),
      s = Np(e, a),
      l = n.useEncodeDefaulter,
      u = T(l) ? l : l ? S(Vl, s, e) : null,
      h = {
        coordDimensions: s,
        generateCoord: n.generateCoord,
        encodeDefine: e.getEncode(),
        encodeDefaulter: u,
        canOmitUnusedDimensions: !o
      },
      c = kp(i, h),
      p = Fp(c.dimensions, n.createInvertedIndices, a),
      f = o ? null : r.getSharedDataStore(c),
      d = Rp(e, {
        schema: c,
        store: f
      }),
      g = new dI(c, e);
    g.setCalculationInfo(d);
    var v = null != p && Vp(i) ? function (t, e, n, i) {
      return i === p ? n : this.defaultDimValueGetter(t, e, n, i)
    } : null;
    return g.hasItemOption = !1, g.initData(o ? i : f, null, v), g
  }

  function Vp(t) {
    if (t.sourceFormat === bS) {
      var e = Wp(t.data || []);
      return !M(cr(e))
    }
  }

  function Wp(t) {
    for (var e = 0; e < t.length && null == t[e];) e++;
    return t[e]
  }

  function Gp(t) {
    return D(t) && null != t.value ? t.value : t + ""
  }

  function Up(t) {
    return "interval" === t.type || "log" === t.type
  }

  function Xp(t, e, n, i) {
    var r = {},
      o = t[1] - t[0],
      a = r.interval = Ji(o / e, !0);
    null != n && n > a && (a = r.interval = n), null != i && a > i && (a = r.interval = i);
    var s = r.intervalPrecision = qp(a),
      l = r.niceTickExtent = [Vi(Math.ceil(t[0] / a) * a, s), Vi(Math.floor(t[1] / a) * a, s)];
    return Zp(l, t), r
  }

  function Yp(t) {
    var e = Math.pow(10, Qi(t)),
      n = t / e;
    return n ? 2 === n ? n = 3 : 3 === n ? n = 5 : n *= 2 : n = 1, Vi(n * e)
  }

  function qp(t) {
    return Gi(t) + 2
  }

  function jp(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0])
  }

  function Zp(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), jp(t, 0, e), jp(t, 1, e), t[0] > t[1] && (t[0] = t[1])
  }

  function Kp(t, e) {
    return t >= e[0] && t <= e[1]
  }

  function $p(t, e) {
    return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
  }

  function Qp(t, e) {
    return t * (e[1] - e[0]) + e[0]
  }

  function Jp(t) {
    return t.get("stack") || SI + t.seriesIndex
  }

  function tf(t) {
    return t.dim + t.index
  }

  function ef(t, e) {
    var n = [];
    return e.eachSeriesByType(t, function (t) {
      sf(t) && n.push(t)
    }), n
  }

  function nf(t) {
    var e = {};
    v(t, function (t) {
      var n = t.coordinateSystem,
        i = n.getBaseAxis();
      if ("time" === i.type || "value" === i.type)
        for (var r = t.getData(), o = i.dim + "_" + i.index, a = r.getDimensionIndex(r.mapDimension(i.dim)), s = r.getStore(), l = 0, u = s.count(); u > l; ++l) {
          var h = s.get(a, l);
          e[o] ? e[o].push(h) : e[o] = [h]
        }
    });
    var n = {};
    for (var i in e)
      if (e.hasOwnProperty(i)) {
        var r = e[i];
        if (r) {
          r.sort(function (t, e) {
            return t - e
          });
          for (var o = null, a = 1; a < r.length; ++a) {
            var s = r[a] - r[a - 1];
            s > 0 && (o = null === o ? s : Math.min(o, s))
          }
          n[i] = o
        }
      } return n
  }

  function rf(t) {
    var e = nf(t),
      n = [];
    return v(t, function (t) {
      var i, r = t.coordinateSystem,
        o = r.getBaseAxis(),
        a = o.getExtent();
      if ("category" === o.type) i = o.getBandWidth();
      else if ("value" === o.type || "time" === o.type) {
        var s = o.dim + "_" + o.index,
          l = e[s],
          u = Math.abs(a[1] - a[0]),
          h = o.scale.getExtent(),
          c = Math.abs(h[1] - h[0]);
        i = l ? u / c * l : u
      } else {
        var p = t.getData();
        i = Math.abs(a[1] - a[0]) / p.count()
      }
      var f = Hi(t.get("barWidth"), i),
        d = Hi(t.get("barMaxWidth"), i),
        g = Hi(t.get("barMinWidth") || (lf(t) ? .5 : 1), i),
        v = t.get("barGap"),
        y = t.get("barCategoryGap");
      n.push({
        bandWidth: i,
        barWidth: f,
        barMaxWidth: d,
        barMinWidth: g,
        barGap: v,
        barCategoryGap: y,
        axisKey: tf(o),
        stackId: Jp(t)
      })
    }), of (n)
  }

  function of (t) {
    var e = {};
    v(t, function (t) {
      var n = t.axisKey,
        i = t.bandWidth,
        r = e[n] || {
          bandWidth: i,
          remainedWidth: i,
          autoWidthCount: 0,
          categoryGap: null,
          gap: "20%",
          stacks: {}
        },
        o = r.stacks;
      e[n] = r;
      var a = t.stackId;
      o[a] || r.autoWidthCount++, o[a] = o[a] || {
        width: 0,
        maxWidth: 0
      };
      var s = t.barWidth;
      s && !o[a].width && (o[a].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
      var l = t.barMaxWidth;
      l && (o[a].maxWidth = l);
      var u = t.barMinWidth;
      u && (o[a].minWidth = u);
      var h = t.barGap;
      null != h && (r.gap = h);
      var c = t.barCategoryGap;
      null != c && (r.categoryGap = c)
    });
    var n = {};
    return v(e, function (t, e) {
      n[e] = {};
      var i = t.stacks,
        r = t.bandWidth,
        o = t.categoryGap;
      if (null == o) {
        var a = w(i).length;
        o = Math.max(35 - 4 * a, 15) + "%"
      }
      var s = Hi(o, r),
        l = Hi(t.gap, 1),
        u = t.remainedWidth,
        h = t.autoWidthCount,
        c = (u - s) / (h + (h - 1) * l);
      c = Math.max(c, 0), v(i, function (t) {
        var e = t.maxWidth,
          n = t.minWidth;
        if (t.width) {
          var i = t.width;
          e && (i = Math.min(i, e)), n && (i = Math.max(i, n)), t.width = i, u -= i + l * i, h--
        } else {
          var i = c;
          e && i > e && (i = Math.min(e, u)), n && n > i && (i = n), i !== c && (t.width = i, u -= i + l * i, h--)
        }
      }), c = (u - s) / (h + (h - 1) * l), c = Math.max(c, 0);
      var p, f = 0;
      v(i, function (t) {
        t.width || (t.width = c), p = t, f += t.width * (1 + l)
      }), p && (f -= p.width * l);
      var d = -f / 2;
      v(i, function (t, i) {
        n[e][i] = n[e][i] || {
          bandWidth: r,
          offset: d,
          width: t.width
        }, d += t.width * (1 + l)
      })
    }), n
  }

  function af(t, e, n) {
    if (t && e) {
      var i = t[tf(e)];
      return null != i && null != n ? i[Jp(n)] : i
    }
  }

  function sf(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
  }

  function lf(t) {
    return t.pipelineContext && t.pipelineContext.large
  }

  function uf(t, e, n, i) {
    var r = Ki(e),
      o = Ki(n),
      a = function (t) {
        return sl(r, t, i) === sl(o, t, i)
      },
      s = function () {
        return a("year")
      },
      l = function () {
        return s() && a("month")
      },
      u = function () {
        return l() && a("day")
      },
      h = function () {
        return u() && a("hour")
      },
      c = function () {
        return h() && a("minute")
      },
      p = function () {
        return c() && a("second")
      },
      f = function () {
        return p() && a("millisecond")
      };
    switch (t) {
      case "year":
        return s();
      case "month":
        return l();
      case "day":
        return u();
      case "hour":
        return h();
      case "minute":
        return c();
      case "second":
        return p();
      case "millisecond":
        return f()
    }
  }

  function hf(t) {
    return t /= Qb, t > 16 ? 16 : t > 7.5 ? 7 : t > 3.5 ? 4 : t > 1.5 ? 2 : 1
  }

  function cf(t) {
    var e = 30 * Qb;
    return t /= e, t > 6 ? 6 : t > 3 ? 3 : t > 2 ? 2 : 1
  }

  function pf(t) {
    return t /= $b, t > 12 ? 12 : t > 6 ? 6 : t > 3.5 ? 4 : t > 2 ? 2 : 1
  }

  function ff(t, e) {
    return t /= e ? Kb : Zb, t > 30 ? 30 : t > 20 ? 20 : t > 15 ? 15 : t > 10 ? 10 : t > 5 ? 5 : t > 2 ? 2 : 1
  }

  function df(t) {
    return Ji(t, !0)
  }

  function gf(t, e, n) {
    var i = new Date(t);
    switch (el(e)) {
      case "year":
      case "month":
        i[vl(n)](0);
      case "day":
        i[yl(n)](1);
      case "hour":
        i[ml(n)](0);
      case "minute":
        i[_l(n)](0);
      case "second":
        i[xl(n)](0), i[wl(n)](0)
    }
    return i.getTime()
  }

  function vf(t, e, n, i) {
    function r(t, e, n, r, o, a, s) {
      for (var l = new Date(e), u = e, h = l[r](); n > u && u <= i[1];) s.push({
        value: u
      }), h += t, l[o](h), u = l.getTime();
      s.push({
        value: u,
        notAdd: !0
      })
    }

    function o(t, o, a) {
      var s = [],
        l = !o.length;
      if (!uf(el(t), i[0], i[1], n)) {
        l && (o = [{
          value: gf(new Date(i[0]), t, n)
        }, {
          value: i[1]
        }]);
        for (var u = 0; u < o.length - 1; u++) {
          var h = o[u].value,
            c = o[u + 1].value;
          if (h !== c) {
            var p = void 0,
              f = void 0,
              d = void 0,
              g = !1;
            switch (t) {
              case "year":
                p = Math.max(1, Math.round(e / Qb / 365)), f = ll(n), d = gl(n);
                break;
              case "half-year":
              case "quarter":
              case "month":
                p = cf(e), f = ul(n), d = vl(n);
                break;
              case "week":
              case "half-week":
              case "day":
                p = hf(e, 31), f = hl(n), d = yl(n), g = !0;
                break;
              case "half-day":
              case "quarter-day":
              case "hour":
                p = pf(e), f = cl(n), d = ml(n);
                break;
              case "minute":
                p = ff(e, !0), f = pl(n), d = _l(n);
                break;
              case "second":
                p = ff(e, !1), f = fl(n), d = xl(n);
                break;
              case "millisecond":
                p = df(e), f = dl(n), d = wl(n)
            }
            r(p, h, c, f, d, g, s), "year" === t && a.length > 1 && 0 === u && a.unshift({
              value: a[0].value - p
            })
          }
        }
        for (var u = 0; u < s.length; u++) a.push(s[u]);
        return s
      }
    }
    for (var a = 1e4, s = rS, l = 0, u = [], h = [], c = 0, p = 0, f = 0; f < s.length && l++ < a; ++f) {
      var d = el(s[f]);
      if (nl(s[f])) {
        o(s[f], u[u.length - 1] || [], h);
        var g = s[f + 1] ? el(s[f + 1]) : null;
        if (d !== g) {
          if (h.length) {
            p = c, h.sort(function (t, e) {
              return t.value - e.value
            });
            for (var v = [], m = 0; m < h.length; ++m) {
              var x = h[m].value;
              (0 === m || h[m - 1].value !== x) && (v.push(h[m]), x >= i[0] && x <= i[1] && c++)
            }
            var w = (i[1] - i[0]) / e;
            if (c > 1.5 * w && p > w / 1.5) break;
            if (u.push(v), c > w || t === s[f]) break
          }
          h = []
        }
      }
    }
    for (var b = _(y(u, function (t) {
        return _(t, function (t) {
          return t.value >= i[0] && t.value <= i[1] && !t.notAdd
        })
      }), function (t) {
        return t.length > 0
      }), S = [], M = b.length - 1, f = 0; f < b.length; ++f)
      for (var T = b[f], C = 0; C < T.length; ++C) S.push({
        value: T[C].value,
        level: M - f
      });
    S.sort(function (t, e) {
      return t.value - e.value
    });
    for (var I = [], f = 0; f < S.length; ++f)(0 === f || S[f].value !== S[f - 1].value) && I.push(S[f]);
    return I
  }

  function yf(t, e) {
    return DI(t, Gi(e))
  }

  function mf(t, e, n) {
    var i = t.rawExtentInfo;
    return i ? i : (i = new zI(t, e, n), t.rawExtentInfo = i, i)
  }

  function _f(t, e) {
    return null == e ? null : z(e) ? 0 / 0 : t.parse(e)
  }

  function xf(t, e) {
    var n = t.type,
      i = mf(t, e, t.getExtent()).calculate();
    t.setBlank(i.isBlank);
    var r = i.min,
      o = i.max,
      a = e.ecModel;
    if (a && "time" === n) {
      var s = ef("bar", a),
        l = !1;
      if (v(s, function (t) {
          l = l || t.getBaseAxis() === e.axis
        }), l) {
        var u = rf(s),
          h = wf(r, o, e, u);
        r = h.min, o = h.max
      }
    }
    return {
      extent: [r, o],
      fixMin: i.minFixed,
      fixMax: i.maxFixed
    }
  }

  function wf(t, e, n, i) {
    var r = n.axis.getExtent(),
      o = r[1] - r[0],
      a = af(i, n.axis);
    if (void 0 === a) return {
      min: t,
      max: e
    };
    var s = 1 / 0;
    v(a, function (t) {
      s = Math.min(t.offset, s)
    });
    var l = -1 / 0;
    v(a, function (t) {
      l = Math.max(t.offset + t.width, l)
    }), s = Math.abs(s), l = Math.abs(l);
    var u = s + l,
      h = e - t,
      c = 1 - (s + l) / o,
      p = h / c - h;
    return e += p * (l / u), t -= p * (s / u), {
      min: t,
      max: e
    }
  }

  function bf(t, e) {
    var n = e,
      i = xf(t, n),
      r = i.extent,
      o = n.get("splitNumber");
    t instanceof RI && (t.base = n.get("logBase"));
    var a = t.type,
      s = n.get("interval"),
      l = "interval" === a || "time" === a;
    t.setExtent(r[0], r[1]), t.calcNiceExtent({
      splitNumber: o,
      fixMin: i.fixMin,
      fixMax: i.fixMax,
      minInterval: l ? n.get("minInterval") : null,
      maxInterval: l ? n.get("maxInterval") : null
    }), null != s && t.setInterval && t.setInterval(s)
  }

  function Sf(t, e) {
    if (e = e || t.get("type")) switch (e) {
      case "category":
        return new xI({
          ordinalMeta: t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(),
          extent: [1 / 0, -1 / 0]
        });
      case "time":
        return new TI({
          locale: t.ecModel.getLocaleModel(),
          useUTC: t.ecModel.get("useUTC")
        });
      default:
        return new(yI.getClass(e) || bI)
    }
  }

  function Mf(t) {
    var e = t.scale.getExtent(),
      n = e[0],
      i = e[1];
    return !(n > 0 && i > 0 || 0 > n && 0 > i)
  }

  function Tf(t) {
    var e = t.getLabelModel().get("formatter"),
      n = "category" === t.type ? t.scale.getExtent()[0] : null;
    return "time" === t.scale.type ? function (e) {
      return function (n, i) {
        return t.scale.getFormattedLabel(n, i, e)
      }
    }(e) : C(e) ? function (e) {
      return function (n) {
        var i = t.scale.getLabel(n),
          r = e.replace("{value}", null != i ? i : "");
        return r
      }
    }(e) : T(e) ? function (e) {
      return function (i, r) {
        return null != n && (r = i.value - n), e(Cf(t, i), r, null != i.level ? {
          level: i.level
        } : null)
      }
    }(e) : function (e) {
      return t.scale.getLabel(e)
    }
  }

  function Cf(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e.value
  }

  function If(t) {
    var e = t.model,
      n = t.scale;
    if (e.get(["axisLabel", "show"]) && !n.isBlank()) {
      var i, r, o = n.getExtent();
      n instanceof xI ? r = n.count() : (i = n.getTicks(), r = i.length);
      var a, s = t.getLabelModel(),
        l = Tf(t),
        u = 1;
      r > 40 && (u = Math.ceil(r / 40));
      for (var h = 0; r > h; h += u) {
        var c = i ? i[h] : {
            value: o[0] + h
          },
          p = l(c, h),
          f = s.getTextRect(p),
          d = kf(f, s.get("rotate") || 0);
        a ? a.union(d) : a = d
      }
      return a
    }
  }

  function kf(t, e) {
    var n = e * Math.PI / 180,
      i = t.width,
      r = t.height,
      o = i * Math.abs(Math.cos(n)) + Math.abs(r * Math.sin(n)),
      a = i * Math.abs(Math.sin(n)) + Math.abs(r * Math.cos(n)),
      s = new a_(t.x, t.y, o, a);
    return s
  }

  function Df(t) {
    var e = t.get("interval");
    return null == e ? "auto" : e
  }

  function Af(t) {
    return "category" === t.type && 0 === Df(t.getLabelModel())
  }

  function Pf(t, e) {
    var n = {};
    return v(t.mapDimensionsAll(e), function (e) {
      n[Ep(t, e)] = !0
    }), w(n)
  }

  function Lf(t) {
    return Hp(null, t)
  }

  function Of(t, e) {
    var n = e;
    e instanceof Fb || (n = new Fb(e));
    var i = Sf(n);
    return i.setExtent(t[0], t[1]), bf(i, n), i
  }

  function Rf(t) {
    d(t, FI)
  }

  function Bf(t, e) {
    return e = e || {}, Ns(t, null, null, "normal" !== e.state)
  }

  function zf(t) {
    return M(t) ? void v(t, function (t) {
      zf(t)
    }) : void(p(WI, t) >= 0 || (WI.push(t), T(t) && (t = {
      install: t
    }), t.install(GI)))
  }

  function Ef(t, e) {
    return Math.abs(t - e) < UI
  }

  function Nf(t, e, n) {
    var i = 0,
      r = t[0];
    if (!r) return !1;
    for (var o = 1; o < t.length; o++) {
      var a = t[o];
      i += xo(r[0], r[1], a[0], a[1], e, n), r = a
    }
    var s = t[0];
    return Ef(r[0], s[0]) && Ef(r[1], s[1]) || (i += xo(r[0], r[1], s[0], s[1], e, n)), 0 !== i
  }

  function Ff(t, e) {
    for (var n = 0; n < t.length; n++) ve(t[n], t[n], e)
  }

  function Hf(t, e, n, i) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      i && (o = i.project(o)), o && isFinite(o[0]) && isFinite(o[1]) && (ye(e, e, o), me(n, n, o))
    }
  }

  function Vf(t) {
    for (var e = 0, n = 0, i = 0, r = t.length, o = t[r - 1][0], a = t[r - 1][1], s = 0; r > s; s++) {
      var l = t[s][0],
        u = t[s][1],
        h = o * u - l * a;
      e += h, n += (o + l) * h, i += (a + u) * h, o = l, a = u
    }
    return e ? [n / e / 3, i / e / 3, e] : [t[0][0] || 0, t[0][1] || 0]
  }

  function Wf(t) {
    if (!t.UTF8Encoding) return t;
    var e = t,
      n = e.UTF8Scale;
    null == n && (n = 1024);
    var i = e.features;
    return v(i, function (t) {
      var e = t.geometry,
        i = e.encodeOffsets,
        r = e.coordinates;
      if (i) switch (e.type) {
        case "LineString":
          e.coordinates = Uf(r, i, n);
          break;
        case "Polygon":
          Gf(r, i, n);
          break;
        case "MultiLineString":
          Gf(r, i, n);
          break;
        case "MultiPolygon":
          v(r, function (t, e) {
            return Gf(t, i[e], n)
          })
      }
    }), e.UTF8Encoding = !1, e
  }

  function Gf(t, e, n) {
    for (var i = 0; i < t.length; i++) t[i] = Uf(t[i], e[i], n)
  }

  function Uf(t, e, n) {
    for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
      var s = t.charCodeAt(a) - 64,
        l = t.charCodeAt(a + 1) - 64;
      s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += o, r = s, o = l, i.push([s / n, l / n])
    }
    return i
  }

  function Xf(t, e) {
    return t = Wf(t), y(_(t.features, function (t) {
      return t.geometry && t.properties && t.geometry.coordinates.length > 0
    }), function (t) {
      var n = t.properties,
        i = t.geometry,
        r = [];
      switch (i.type) {
        case "Polygon":
          var o = i.coordinates;
          r.push(new qI(o[0], o.slice(1)));
          break;
        case "MultiPolygon":
          v(i.coordinates, function (t) {
            t[0] && r.push(new qI(t[0], t.slice(1)))
          });
          break;
        case "LineString":
          r.push(new jI([i.coordinates]));
          break;
        case "MultiLineString":
          r.push(new jI(i.coordinates))
      }
      var a = new ZI(n[e || "name"], r, n.cp);
      return a.properties = n, a
    })
  }

  function Yf(t) {
    return "category" === t.type ? jf(t) : $f(t)
  }

  function qf(t, e) {
    return "category" === t.type ? Kf(t, e) : {
      ticks: y(t.scale.getTicks(), function (t) {
        return t.value
      })
    }
  }

  function jf(t) {
    var e = t.getLabelModel(),
      n = Zf(t, e);
    return !e.get("show") || t.scale.isBlank() ? {
      labels: [],
      labelCategoryInterval: n.labelCategoryInterval
    } : n
  }

  function Zf(t, e) {
    var n = Qf(t, "labels"),
      i = Df(e),
      r = Jf(n, i);
    if (r) return r;
    var o, a;
    return T(i) ? o = od(t, i) : (a = "auto" === i ? ed(t) : i, o = rd(t, a)), td(n, i, {
      labels: o,
      labelCategoryInterval: a
    })
  }

  function Kf(t, e) {
    var n = Qf(t, "ticks"),
      i = Df(e),
      r = Jf(n, i);
    if (r) return r;
    var o, a;
    if ((!e.get("show") || t.scale.isBlank()) && (o = []), T(i)) o = od(t, i, !0);
    else if ("auto" === i) {
      var s = Zf(t, t.getLabelModel());
      a = s.labelCategoryInterval, o = y(s.labels, function (t) {
        return t.tickValue
      })
    } else a = i, o = rd(t, a, !0);
    return td(n, i, {
      ticks: o,
      tickCategoryInterval: a
    })
  }

  function $f(t) {
    var e = t.scale.getTicks(),
      n = Tf(t);
    return {
      labels: y(e, function (e, i) {
        return {
          level: e.level,
          formattedLabel: n(e, i),
          rawLabel: t.scale.getLabel(e),
          tickValue: e.value
        }
      })
    }
  }

  function Qf(t, e) {
    return ek(t)[e] || (ek(t)[e] = [])
  }

  function Jf(t, e) {
    for (var n = 0; n < t.length; n++)
      if (t[n].key === e) return t[n].value
  }

  function td(t, e, n) {
    return t.push({
      key: e,
      value: n
    }), n
  }

  function ed(t) {
    var e = ek(t).autoInterval;
    return null != e ? e : ek(t).autoInterval = t.calculateCategoryInterval()
  }

  function nd(t) {
    var e = id(t),
      n = Tf(t),
      i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
      r = t.scale,
      o = r.getExtent(),
      a = r.count();
    if (o[1] - o[0] < 1) return 0;
    var s = 1;
    a > 40 && (s = Math.max(1, Math.floor(a / 40)));
    for (var l = o[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), p = 0, f = 0; l <= o[1]; l += s) {
      var d = 0,
        g = 0,
        v = mi(n({
          value: l
        }), e.font, "center", "top");
      d = 1.3 * v.width, g = 1.3 * v.height, p = Math.max(p, d, 7), f = Math.max(f, g, 7)
    }
    var y = p / h,
      m = f / c;
    isNaN(y) && (y = 1 / 0), isNaN(m) && (m = 1 / 0);
    var _ = Math.max(0, Math.floor(Math.min(y, m))),
      x = ek(t.model),
      w = t.getExtent(),
      b = x.lastAutoInterval,
      S = x.lastTickCount;
    return null != b && null != S && Math.abs(b - _) <= 1 && Math.abs(S - a) <= 1 && b > _ && x.axisExtent0 === w[0] && x.axisExtent1 === w[1] ? _ = b : (x.lastTickCount = a, x.lastAutoInterval = _, x.axisExtent0 = w[0], x.axisExtent1 = w[1]), _
  }

  function id(t) {
    var e = t.getLabelModel();
    return {
      axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
      labelRotate: e.get("rotate") || 0,
      font: e.getFont()
    }
  }

  function rd(t, e, n) {
    function i(t) {
      var e = {
        value: t
      };
      l.push(n ? t : {
        formattedLabel: r(e),
        rawLabel: o.getLabel(e),
        tickValue: t
      })
    }
    var r = Tf(t),
      o = t.scale,
      a = o.getExtent(),
      s = t.getLabelModel(),
      l = [],
      u = Math.max((e || 0) + 1, 1),
      h = a[0],
      c = o.count();
    0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
    var p = Af(t),
      f = s.get("showMinLabel") || p,
      d = s.get("showMaxLabel") || p;
    f && h !== a[0] && i(a[0]);
    for (var g = h; g <= a[1]; g += u) i(g);
    return d && g - u !== a[1] && i(a[1]), l
  }

  function od(t, e, n) {
    var i = t.scale,
      r = Tf(t),
      o = [];
    return v(i.getTicks(), function (t) {
      var a = i.getLabel(t),
        s = t.value;
      e(t.value, a) && o.push(n ? s : {
        formattedLabel: r(t),
        rawLabel: a,
        tickValue: s
      })
    }), o
  }

  function ad(t, e) {
    var n = t[1] - t[0],
      i = e,
      r = n / i / 2;
    t[0] += r, t[1] -= r
  }

  function sd(t, e, n, i) {
    function r(t, e) {
      return t = Vi(t), e = Vi(e), p ? t > e : e > t
    }
    var o = e.length;
    if (t.onBand && !n && o) {
      var a, s, l = t.getExtent();
      if (1 === o) e[0].coord = l[0], a = e[1] = {
        coord: l[0]
      };
      else {
        var u = e[o - 1].tickValue - e[0].tickValue,
          h = (e[o - 1].coord - e[0].coord) / u;
        v(e, function (t) {
          t.coord -= h / 2
        });
        var c = t.scale.getExtent();
        s = 1 + c[1] - e[o - 1].tickValue, a = {
          coord: e[o - 1].coord + h * s
        }, e.push(a)
      }
      var p = l[0] > l[1];
      r(e[0].coord, l[0]) && (i ? e[0].coord = l[0] : e.shift()), i && r(l[0], e[0].coord) && e.unshift({
        coord: l[0]
      }), r(l[1], a.coord) && (i ? a.coord = l[1] : e.pop()), i && r(a.coord, l[1]) && e.push({
        coord: l[1]
      })
    }
  }

  function ld(t) {
    var e = gS.extend(t);
    return gS.registerClass(e), e
  }

  function ud(t) {
    var e = OM.extend(t);
    return OM.registerClass(e), e
  }

  function hd(t) {
    var e = LM.extend(t);
    return LM.registerClass(e), e
  }

  function cd(t) {
    var e = zM.extend(t);
    return zM.registerClass(e), e
  }

  function pd(t, e, n, i, r) {
    var o = n.width,
      a = n.height;
    switch (t) {
      case "top":
        i.set(n.x + o / 2, n.y - e), r.set(0, -1);
        break;
      case "bottom":
        i.set(n.x + o / 2, n.y + a + e), r.set(0, 1);
        break;
      case "left":
        i.set(n.x - e, n.y + a / 2), r.set(-1, 0);
        break;
      case "right":
        i.set(n.x + o + e, n.y + a / 2), r.set(1, 0)
    }
  }

  function fd(t, e, n, i, r, o, a, s, l) {
    a -= t, s -= e;
    var u = Math.sqrt(a * a + s * s);
    a /= u, s /= u;
    var h = a * n + t,
      c = s * n + e;
    if (Math.abs(i - r) % rk < 1e-4) return l[0] = h, l[1] = c, u - n;
    if (o) {
      var p = i;
      i = mo(r), r = mo(p)
    } else i = mo(i), r = mo(r);
    i > r && (r += rk);
    var f = Math.atan2(s, a);
    if (0 > f && (f += rk), f >= i && r >= f || f + rk >= i && r >= f + rk) return l[0] = h, l[1] = c, u - n;
    var d = n * Math.cos(i) + t,
      g = n * Math.sin(i) + e,
      v = n * Math.cos(r) + t,
      y = n * Math.sin(r) + e,
      m = (d - a) * (d - a) + (g - s) * (g - s),
      _ = (v - a) * (v - a) + (y - s) * (y - s);
    return _ > m ? (l[0] = d, l[1] = g, Math.sqrt(m)) : (l[0] = v, l[1] = y, Math.sqrt(_))
  }

  function dd(t, e, n, i, r, o, a, s) {
    var l = r - t,
      u = o - e,
      h = n - t,
      c = i - e,
      p = Math.sqrt(h * h + c * c);
    h /= p, c /= p;
    var f = l * h + u * c,
      d = f / p;
    s && (d = Math.min(Math.max(d, 0), 1)), d *= p;
    var g = a[0] = t + d * h,
      v = a[1] = e + d * c;
    return Math.sqrt((g - r) * (g - r) + (v - o) * (v - o))
  }

  function gd(t, e, n, i, r, o, a) {
    0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i);
    var s = t + n,
      l = e + i,
      u = a[0] = Math.min(Math.max(r, t), s),
      h = a[1] = Math.min(Math.max(o, e), l);
    return Math.sqrt((u - r) * (u - r) + (h - o) * (h - o))
  }

  function vd(t, e, n) {
    var i = gd(e.x, e.y, e.width, e.height, t.x, t.y, sk);
    return n.set(sk[0], sk[1]), i
  }

  function yd(t, e, n) {
    for (var i, r, o = 0, a = 0, s = 0, l = 0, u = 1 / 0, h = e.data, c = t.x, p = t.y, f = 0; f < h.length;) {
      var d = h[f++];
      1 === f && (o = h[f], a = h[f + 1], s = o, l = a);
      var g = u;
      switch (d) {
        case ok.M:
          s = h[f++], l = h[f++], o = s, a = l;
          break;
        case ok.L:
          g = dd(o, a, h[f], h[f + 1], c, p, sk, !0), o = h[f++], a = h[f++];
          break;
        case ok.C:
          g = nn(o, a, h[f++], h[f++], h[f++], h[f++], h[f], h[f + 1], c, p, sk), o = h[f++], a = h[f++];
          break;
        case ok.Q:
          g = hn(o, a, h[f++], h[f++], h[f], h[f + 1], c, p, sk), o = h[f++], a = h[f++];
          break;
        case ok.A:
          var v = h[f++],
            y = h[f++],
            m = h[f++],
            _ = h[f++],
            x = h[f++],
            w = h[f++];
          f += 1;
          var b = !!(1 - h[f++]);
          i = Math.cos(x) * m + v, r = Math.sin(x) * _ + y, 1 >= f && (s = i, l = r);
          var S = (c - v) * _ / m + v;
          g = fd(v, y, _, x, x + w, b, S, p, sk), o = Math.cos(x + w) * m + v, a = Math.sin(x + w) * _ + y;
          break;
        case ok.R:
          s = o = h[f++], l = a = h[f++];
          var M = h[f++],
            T = h[f++];
          g = gd(s, l, M, T, c, p, sk);
          break;
        case ok.Z:
          g = dd(o, a, s, l, c, p, sk, !0), o = s, a = l
      }
      u > g && (u = g, n.set(sk[0], sk[1]))
    }
    return u
  }

  function md(t, e) {
    if (t) {
      var n = t.getTextGuideLine(),
        i = t.getTextContent();
      if (i && n) {
        var r = t.textGuideLineConfig || {},
          o = [
            [0, 0],
            [0, 0],
            [0, 0]
          ],
          a = r.candidates || ak,
          s = i.getBoundingRect().clone();
        s.applyTransform(i.getComputedTransform());
        var l = 1 / 0,
          u = r.anchor,
          h = t.getComputedTransform(),
          c = h && pi([], h),
          p = e.get("length2") || 0;
        u && hk.copy(u);
        for (var f = 0; f < a.length; f++) {
          var d = a[f];
          pd(d, 0, s, lk, ck), $m.scaleAndAdd(uk, lk, ck, p), uk.transform(c);
          var g = t.getBoundingRect(),
            v = u ? u.distance(uk) : t instanceof Rx ? yd(uk, t.path, hk) : vd(uk, g, hk);
          l > v && (l = v, uk.transform(h), hk.transform(h), hk.toArray(o[0]), uk.toArray(o[1]), lk.toArray(o[2]))
        }
        _d(o, e.get("minTurnAngle")), n.setShape({
          points: o
        })
      }
    }
  }

  function _d(t, e) {
    if (180 >= e && e > 0) {
      e = e / 180 * Math.PI, lk.fromArray(t[0]), uk.fromArray(t[1]), hk.fromArray(t[2]), $m.sub(ck, lk, uk), $m.sub(pk, hk, uk);
      var n = ck.len(),
        i = pk.len();
      if (!(.001 > n || .001 > i)) {
        ck.scale(1 / n), pk.scale(1 / i);
        var r = ck.dot(pk),
          o = Math.cos(e);
        if (r > o) {
          var a = dd(uk.x, uk.y, hk.x, hk.y, lk.x, lk.y, fk, !1);
          dk.fromArray(fk), dk.scaleAndAdd(pk, a / Math.tan(Math.PI - e));
          var s = hk.x !== uk.x ? (dk.x - uk.x) / (hk.x - uk.x) : (dk.y - uk.y) / (hk.y - uk.y);
          if (isNaN(s)) return;
          0 > s ? $m.copy(dk, uk) : s > 1 && $m.copy(dk, hk), dk.toArray(t[1])
        }
      }
    }
  }

  function xd(t, e, n, i) {
    var r = "normal" === n,
      o = r ? t : t.ensureState(n);
    o.ignore = e;
    var a = i.get("smooth");
    a && a === !0 && (a = .3), o.shape = o.shape || {}, a > 0 && (o.shape.smooth = a);
    var s = i.getModel("lineStyle").getLineStyle();
    r ? t.useStyle(s) : o.style = s
  }

  function wd(t, e) {
    var n = e.smooth,
      i = e.points;
    if (i)
      if (t.moveTo(i[0][0], i[0][1]), n > 0 && i.length >= 3) {
        var r = my(i[0], i[1]),
          o = my(i[1], i[2]);
        if (!r || !o) return t.lineTo(i[1][0], i[1][1]), void t.lineTo(i[2][0], i[2][1]);
        var a = Math.min(r, o) * n,
          s = ge([], i[1], i[0], a / r),
          l = ge([], i[1], i[2], a / o),
          u = ge([], s, l, .5);
        t.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), t.bezierCurveTo(l[0], l[1], l[0], l[1], i[2][0], i[2][1])
      } else
        for (var h = 1; h < i.length; h++) t.lineTo(i[h][0], i[h][1])
  }

  function bd(t, e, n) {
    var i = t.getTextGuideLine(),
      r = t.getTextContent();
    if (!r) return void(i && t.removeTextGuideLine());
    for (var o = e.normal, a = o.get("show"), s = r.ignore, l = 0; l < sw.length; l++) {
      var u = sw[l],
        h = e[u],
        p = "normal" === u;
      if (h) {
        var f = h.get("show"),
          d = p ? s : N(r.states[u] && r.states[u].ignore, s);
        if (d || !N(f, a)) {
          var g = p ? i : i && i.states[u];
          g && (g.ignore = !0);
          continue
        }
        i || (i = new $w, t.setTextGuideLine(i), p || !s && a || xd(i, !0, "normal", e.normal), t.stateProxy && (i.stateProxy = t.stateProxy)), xd(i, !1, u, h)
      }
    }
    if (i) {
      c(i.style, n), i.style.fill = null;
      var v = o.get("showAbove"),
        y = t.textGuideLineConfig = t.textGuideLineConfig || {};
      y.showAbove = v || !1, i.buildPath = wd
    }
  }

  function Sd(t, e) {
    e = e || "labelLine";
    for (var n = {
        normal: t.getModel(e)
      }, i = 0; i < aw.length; i++) {
      var r = aw[i];
      n[r] = t.getModel([r, e])
    }
    return n
  }

  function Md(t) {
    for (var e = [], n = 0; n < t.length; n++) {
      var i = t[n];
      if (!i.defaultAttr.ignore) {
        var r = i.label,
          o = r.getComputedTransform(),
          a = r.getBoundingRect(),
          s = !o || o[1] < 1e-5 && o[2] < 1e-5,
          l = r.style.margin || 0,
          u = a.clone();
        u.applyTransform(o), u.x -= l / 2, u.y -= l / 2, u.width += l, u.height += l;
        var h = s ? new db(a, o) : null;
        e.push({
          label: r,
          labelLine: i.labelLine,
          rect: u,
          localRect: a,
          obb: h,
          priority: i.priority,
          defaultAttr: i.defaultAttr,
          layoutOption: i.computedLayoutOption,
          axisAligned: s,
          transform: o
        })
      }
    }
    return e
  }

  function Td(t, e, n, i, r, o) {
    function a() {
      w = S.rect[e] - i, b = r - M.rect[e] - M.rect[n]
    }

    function s(t, e, n) {
      if (0 > t) {
        var i = Math.min(e, -t);
        if (i > 0) {
          l(i * n, 0, c);
          var r = i + t;
          0 > r && u(-r * n, 1)
        } else u(-t * n, 1)
      }
    }

    function l(n, i, r) {
      0 !== n && (d = !0);
      for (var o = i; r > o; o++) {
        var a = t[o],
          s = a.rect;
        s[e] += n, a.label[e] += n
      }
    }

    function u(i, r) {
      for (var o = [], a = 0, s = 1; c > s; s++) {
        var u = t[s - 1].rect,
          h = Math.max(t[s].rect[e] - u[e] - u[n], 0);
        o.push(h), a += h
      }
      if (a) {
        var p = Math.min(Math.abs(i) / a, r);
        if (i > 0)
          for (var s = 0; c - 1 > s; s++) {
            var f = o[s] * p;
            l(f, 0, s + 1)
          } else
            for (var s = c - 1; s > 0; s--) {
              var f = o[s - 1] * p;
              l(-f, s, c)
            }
      }
    }

    function h(t) {
      var e = 0 > t ? -1 : 1;
      t = Math.abs(t);
      for (var n = Math.ceil(t / (c - 1)), i = 0; c - 1 > i; i++)
        if (e > 0 ? l(n, 0, i + 1) : l(-n, c - i - 1, c), t -= n, 0 >= t) return
    }
    var c = t.length;
    if (!(2 > c)) {
      t.sort(function (t, n) {
        return t.rect[e] - n.rect[e]
      });
      for (var p, f = 0, d = !1, g = [], v = 0, y = 0; c > y; y++) {
        var m = t[y],
          _ = m.rect;
        p = _[e] - f, 0 > p && (_[e] -= p, m.label[e] -= p, d = !0);
        var x = Math.max(-p, 0);
        g.push(x), v += x, f = _[e] + _[n]
      }
      v > 0 && o && l(-v / c, 0, c);
      var w, b, S = t[0],
        M = t[c - 1];
      return a(), 0 > w && u(-w, .8), 0 > b && u(b, .8), a(), s(w, b, 1), s(b, w, -1), a(), 0 > w && h(-w), 0 > b && h(b), d
    }
  }

  function Cd(t, e, n, i) {
    return Td(t, "x", "width", e, n, i)
  }

  function Id(t, e, n, i) {
    return Td(t, "y", "height", e, n, i)
  }

  function kd(t) {
    function e(t) {
      if (!t.ignore) {
        var e = t.ensureState("emphasis");
        null == e.ignore && (e.ignore = !1)
      }
      t.ignore = !0
    }
    var n = [];
    t.sort(function (t, e) {
      return e.priority - t.priority
    });
    for (var i = new a_(0, 0, 0, 0), r = 0; r < t.length; r++) {
      var o = t[r],
        a = o.axisAligned,
        s = o.localRect,
        l = o.transform,
        u = o.label,
        h = o.labelLine;
      i.copy(o.rect), i.width -= .1, i.height -= .1, i.x += .05, i.y += .05;
      for (var c = o.obb, p = !1, f = 0; f < n.length; f++) {
        var d = n[f];
        if (i.intersect(d.rect)) {
          if (a && d.axisAligned) {
            p = !0;
            break
          }
          if (d.obb || (d.obb = new db(d.localRect, d.transform)), c || (c = new db(s, l)), c.intersect(d.obb)) {
            p = !0;
            break
          }
        }
      }
      p ? (e(u), h && e(h)) : (u.attr("ignore", o.defaultAttr.ignore), h && h.attr("ignore", o.defaultAttr.labelGuideIgnore), n.push(o))
    }
  }

  function Dd(t) {
    if (t) {
      for (var e = [], n = 0; n < t.length; n++) e.push(t[n].slice());
      return e
    }
  }

  function Ad(t, e) {
    var n = t.label,
      i = e && e.getTextGuideLine();
    return {
      dataIndex: t.dataIndex,
      dataType: t.dataType,
      seriesIndex: t.seriesModel.seriesIndex,
      text: t.label.style.text,
      rect: t.hostRect,
      labelRect: t.rect,
      align: n.style.align,
      verticalAlign: n.style.verticalAlign,
      labelLinePoints: Dd(i && i.shape.points)
    }
  }

  function Pd(t, e, n) {
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      null != e[r] && (t[r] = e[r])
    }
  }

  function Ld(t) {
    t.registerUpdateLifecycle("series:beforeupdate", function (t, e) {
      var n = wk(e).labelManager;
      n || (n = wk(e).labelManager = new xk), n.clearLabels()
    }), t.registerUpdateLifecycle("series:layoutlabels", function (t, e, n) {
      var i = wk(e).labelManager;
      n.updatedSeries.forEach(function (t) {
        i.addLabelsOfSeries(e.getViewOfSeriesModel(t))
      }), i.updateLayoutConfig(e), i.layout(e), i.processLabelsOverall()
    })
  }

  function Od(t, e, n) {
    var i = $v.createCanvas(),
      r = e.getWidth(),
      o = e.getHeight(),
      a = i.style;
    return a && (a.position = "absolute", a.left = "0", a.top = "0", a.width = r + "px", a.height = o + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = o * n, i
  }

  function Rd(t) {
    return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
  }

  function Bd(t, e) {
    var n = document.createElement("div");
    return n.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
  }

  function zd(t) {
    t.registerPainter("canvas", Ik)
  }

  function Ed(t) {
    t.registerComponentModel(kk), t.registerComponentView(Dk)
  }

  function Nd(t, e) {
    var n = t.get("center"),
      i = e.getWidth(),
      r = e.getHeight(),
      o = Math.min(i, r),
      a = Hi(n[0], e.getWidth()),
      s = Hi(n[1], e.getHeight()),
      l = Hi(t.get("radius"), o / 2);
    return {
      cx: a,
      cy: s,
      r: l
    }
  }

  function Fd(t, e) {
    var n = null == t ? "" : t + "";
    return e && (C(e) ? n = e.replace("{value}", n) : T(e) && (n = e(t))), n
  }

  function Hd(t, e, n) {
    e = M(e) && {
      coordDimensions: e
    } || h({
      encodeDefine: t.getEncode()
    }, e);
    var i = t.getSource(),
      r = kp(i, e).dimensions,
      o = new dI(r, t);
    return o.initData(i, n), o
  }

  function Vd(t) {
    t.registerChartView(Rk), t.registerSeriesModel(Bk)
  }

  function Wd(t, n, i, r) {
    v(Uk, function (o, a) {
      var s = l(l({}, Gk[a], !0), r, !0),
        u = function (t) {
          function i() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n + "Axis." + a, e
          }
          return e(i, t), i.prototype.mergeDefaultAndTheme = function (t, e) {
            var n = Bl(this),
              i = n ? El(t) : {},
              r = e.getTheme();
            l(t, r.get(a + "Axis")), l(t, this.getDefaultOption()), t.type = Gd(t), n && zl(t, i, n)
          }, i.prototype.optionUpdated = function () {
            var t = this.option;
            "category" === t.type && (this.__ordinalMeta = _I.createByAxisModel(this))
          }, i.prototype.getCategories = function (t) {
            var e = this.option;
            return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0
          }, i.prototype.getOrdinalMeta = function () {
            return this.__ordinalMeta
          }, i.type = n + "Axis." + a, i.defaultOption = s, i
        }(i);
      t.registerComponentModel(u)
    }), t.registerSubTypeDefaulter(n + "Axis", Gd)
  }

  function Gd(t) {
    return t.type || (t.data ? "category" : "value")
  }

  function Ud(t) {
    return "interval" === t.type || "time" === t.type
  }

  function Xd(t, e, n) {
    n = n || {};
    var i = t.coordinateSystem,
      r = e.axis,
      o = {},
      a = r.getAxesOnZeroOf()[0],
      s = r.position,
      l = a ? "onZero" : s,
      u = r.dim,
      h = i.getRect(),
      c = [h.x, h.x + h.width, h.y, h.y + h.height],
      p = {
        left: 0,
        right: 1,
        top: 0,
        bottom: 1,
        onZero: 2
      },
      f = e.get("offset") || 0,
      d = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
    if (a) {
      var g = a.toGlobalCoord(a.dataToCoord(0));
      d[p.onZero] = Math.max(Math.min(g, d[1]), d[0])
    }
    o.position = ["y" === u ? d[p[l]] : c[0], "x" === u ? d[p[l]] : c[3]], o.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
    var v = {
      top: -1,
      bottom: 1,
      left: -1,
      right: 1
    };
    o.labelDirection = o.tickDirection = o.nameDirection = v[s], o.labelOffset = a ? d[p[s]] - d[p.onZero] : 0, e.get(["axisTick", "inside"]) && (o.tickDirection = -o.tickDirection), E(n.labelInside, e.get(["axisLabel", "inside"])) && (o.labelDirection = -o.labelDirection);
    var y = e.get(["axisLabel", "rotate"]);
    return o.labelRotate = "top" === l ? -y : y, o.z2 = 1, o
  }

  function Yd(t) {
    return "cartesian2d" === t.get("coordinateSystem")
  }

  function qd(t) {
    var e = {
      xAxisModel: null,
      yAxisModel: null
    };
    return v(e, function (n, i) {
      var r = i.replace(/Model$/, ""),
        o = t.getReferringComponents(r, k_).models[0];
      e[i] = o
    }), e
  }

  function jd(t, e, n) {
    var i = bI.prototype,
      r = i.getTicks.call(n),
      o = i.getTicks.call(n, !0),
      a = r.length - 1,
      s = i.getInterval.call(n),
      l = xf(t, e),
      u = l.extent,
      h = l.fixMin,
      c = l.fixMax;
    if ("log" === t.type) {
      var p = Zk(t.base);
      u = [Zk(u[0]) / p, Zk(u[1]) / p]
    }
    t.setExtent(u[0], u[1]), t.calcNiceExtent({
      splitNumber: a,
      fixMin: h,
      fixMax: c
    });
    var f = i.getExtent.call(t);
    h && (u[0] = f[0]), c && (u[1] = f[1]);
    var d = i.getInterval.call(t),
      g = u[0],
      v = u[1];
    if (h && c) d = (v - g) / a;
    else if (h)
      for (v = u[0] + d * a; v < u[1] && isFinite(v) && isFinite(u[1]);) d = Yp(d), v = u[0] + d * a;
    else if (c)
      for (g = u[1] - d * a; g > u[0] && isFinite(g) && isFinite(u[0]);) d = Yp(d), g = u[1] - d * a;
    else {
      var y = t.getTicks().length - 1;
      y > a && (d = Yp(d));
      var m = d * a;
      v = Math.ceil(u[1] / d) * d, g = Vi(v - m), 0 > g && u[0] >= 0 ? (g = 0, v = Vi(m)) : v > 0 && u[1] <= 0 && (v = 0, g = -Vi(m))
    }
    var _ = (r[0].value - o[0].value) / s,
      x = (r[a].value - o[a].value) / s;
    i.setExtent.call(t, g + d * _, v + d * x), i.setInterval.call(t, d), (_ || x) && i.setNiceExtent.call(t, g + d, v - d)
  }

  function Zd(t, e) {
    return t.getCoordSysModel() === e
  }

  function Kd(t, e, n, i) {
    function r(t) {
      return t.dim + "_" + t.index
    }
    n.getAxesOnZeroOf = function () {
      return o ? [o] : []
    };
    var o, a = t[e],
      s = n.model,
      l = s.get(["axisLine", "onZero"]),
      u = s.get(["axisLine", "onZeroAxisIndex"]);
    if (l) {
      if (null != u) $d(a[u]) && (o = a[u]);
      else
        for (var h in a)
          if (a.hasOwnProperty(h) && $d(a[h]) && !i[r(a[h])]) {
            o = a[h];
            break
          } o && (i[r(o)] = !0)
    }
  }

  function $d(t) {
    return t && "category" !== t.type && "time" !== t.type && Mf(t)
  }

  function Qd(t, e) {
    var n = t.getExtent(),
      i = n[0] + n[1];
    t.toGlobalCoord = "x" === t.dim ? function (t) {
      return t + e
    } : function (t) {
      return i - t + e
    }, t.toLocalCoord = "x" === t.dim ? function (t) {
      return t - e
    } : function (t) {
      return i - t + e
    }
  }

  function Jd(t, e, n, i) {
    var r, o, a = ji(n - t),
      s = i[0] > i[1],
      l = "start" === e && !s || "start" !== e && s;
    return Zi(a - $k / 2) ? (o = l ? "bottom" : "top", r = "center") : Zi(a - 1.5 * $k) ? (o = l ? "top" : "bottom", r = "center") : (o = "middle", r = 1.5 * $k > a && a > $k / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
      rotation: a,
      textAlign: r,
      textVerticalAlign: o
    }
  }

  function tg(t, e, n) {
    if (!Af(t.axis)) {
      var i = t.get(["axisLabel", "showMinLabel"]),
        r = t.get(["axisLabel", "showMaxLabel"]);
      e = e || [], n = n || [];
      var o = e[0],
        a = e[1],
        s = e[e.length - 1],
        l = e[e.length - 2],
        u = n[0],
        h = n[1],
        c = n[n.length - 1],
        p = n[n.length - 2];
      i === !1 ? (eg(o), eg(u)) : ng(o, a) && (i ? (eg(a), eg(h)) : (eg(o), eg(u))), r === !1 ? (eg(s), eg(c)) : ng(l, s) && (r ? (eg(l), eg(p)) : (eg(s), eg(c)))
    }
  }

  function eg(t) {
    t && (t.ignore = !0)
  }

  function ng(t, e) {
    var n = t && t.getBoundingRect().clone(),
      i = e && e.getBoundingRect().clone();
    if (n && i) {
      var r = ai([]);
      return hi(r, r, -t.rotation), n.applyTransform(li([], r, t.getLocalTransform())), i.applyTransform(li([], r, e.getLocalTransform())), n.intersect(i)
    }
  }

  function ig(t) {
    return "middle" === t || "center" === t
  }

  function rg(t, e, n, i, r) {
    for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
      var u = t[l].coord;
      a[0] = u, a[1] = 0, s[0] = u, s[1] = n, e && (ve(a, a, e), ve(s, s, e));
      var h = new tb({
        subPixelOptimize: !0,
        shape: {
          x1: a[0],
          y1: a[1],
          x2: s[0],
          y2: s[1]
        },
        style: i,
        z2: 2,
        autoBatch: !0,
        silent: !0
      });
      h.anid = r + "_" + t[l].tickValue, o.push(h)
    }
    return o
  }

  function og(t, e, n, i) {
    var r = n.axis,
      o = n.getModel("axisTick"),
      a = o.get("show");
    if ("auto" === a && i.handleAutoShown && (a = i.handleAutoShown("axisTick")), a && !r.scale.isBlank()) {
      for (var s = o.getModel("lineStyle"), l = i.tickDirection * o.get("length"), u = r.getTicksCoords(), h = rg(u, e.transform, l, c(s.getLineStyle(), {
          stroke: n.get(["axisLine", "lineStyle", "color"])
        }), "ticks"), p = 0; p < h.length; p++) t.add(h[p]);
      return h
    }
  }

  function ag(t, e, n, i) {
    var r = n.axis,
      o = n.getModel("minorTick");
    if (o.get("show") && !r.scale.isBlank()) {
      var a = r.getMinorTicksCoords();
      if (a.length)
        for (var s = o.getModel("lineStyle"), l = i * o.get("length"), u = c(s.getLineStyle(), c(n.getModel("axisTick").getLineStyle(), {
            stroke: n.get(["axisLine", "lineStyle", "color"])
          })), h = 0; h < a.length; h++)
          for (var p = rg(a[h], e.transform, l, u, "minorticks_" + h), f = 0; f < p.length; f++) t.add(p[f])
    }
  }

  function sg(t, e, n, i) {
    var r = n.axis,
      o = E(i.axisLabelShow, n.get(["axisLabel", "show"]));
    if (o && !r.scale.isBlank()) {
      var a = n.getModel("axisLabel"),
        s = a.get("margin"),
        l = r.getViewLabels(),
        u = (E(i.labelRotate, a.get("rotate")) || 0) * $k / 180,
        h = Qk.innerTextLayout(i.rotation, u, i.labelDirection),
        c = n.getCategories && n.getCategories(!0),
        p = [],
        f = Qk.isLabelSilent(n),
        d = n.get("triggerEvent");
      return v(l, function (o, l) {
        var u = "ordinal" === r.scale.type ? r.scale.getRawOrdinalNumber(o.tickValue) : o.tickValue,
          g = o.formattedLabel,
          v = o.rawLabel,
          y = a;
        if (c && c[u]) {
          var m = c[u];
          D(m) && m.textStyle && (y = new Fb(m.textStyle, a, n.ecModel))
        }
        var _ = y.getTextColor() || n.get(["axisLine", "lineStyle", "color"]),
          x = r.dataToCoord(u),
          w = new qx({
            x: x,
            y: i.labelOffset + i.labelDirection * s,
            rotation: h.rotation,
            silent: f,
            z2: 10 + (o.level || 0),
            style: Ns(y, {
              text: g,
              align: y.getShallow("align", !0) || h.textAlign,
              verticalAlign: y.getShallow("verticalAlign", !0) || y.getShallow("baseline", !0) || h.textVerticalAlign,
              fill: T(_) ? _("category" === r.type ? v : "value" === r.type ? u + "" : u, l) : _
            })
          });
        if (w.anid = "label_" + u, d) {
          var b = Qk.makeAxisEventDataBase(n);
          b.targetType = "axisLabel", b.value = v, b.tickIndex = l, "category" === r.type && (b.dataIndex = u), $x(w).eventData = b
        }
        e.add(w), w.updateTransform(), p.push(w), t.add(w), w.decomposeTransform()
      }), p
    }
  }

  function lg(t, e) {
    var n = {
      axesInfo: {},
      seriesInvolved: !1,
      coordSysAxesInfo: {},
      coordSysMap: {}
    };
    return ug(n, t, e), n.seriesInvolved && cg(n, t), n
  }

  function ug(t, e, n) {
    var i = e.getComponent("tooltip"),
      r = e.getComponent("axisPointer"),
      o = r.get("link", !0) || [],
      a = [];
    v(n.getCoordinateSystems(), function (n) {
      function s(i, s, l) {
        var h = l.model.getModel("axisPointer", r),
          p = h.get("show");
        if (p && ("auto" !== p || i || yg(h))) {
          null == s && (s = h.get("triggerTooltip")), h = i ? hg(l, c, r, e, i, s) : h;
          var f = h.get("snap"),
            d = mg(l.model),
            g = s || f || "category" === l.type,
            v = t.axesInfo[d] = {
              key: d,
              axis: l,
              coordSys: n,
              axisPointerModel: h,
              triggerTooltip: s,
              involveSeries: g,
              snap: f,
              useHandle: yg(h),
              seriesModels: [],
              linkGroup: null
            };
          u[d] = v, t.seriesInvolved = t.seriesInvolved || g;
          var y = pg(o, l);
          if (null != y) {
            var m = a[y] || (a[y] = {
              axesInfo: {}
            });
            m.axesInfo[d] = v, m.mapper = o[y].mapper, v.linkGroup = m
          }
        }
      }
      if (n.axisPointerEnabled) {
        var l = mg(n.model),
          u = t.coordSysAxesInfo[l] = {};
        t.coordSysMap[l] = n;
        var h = n.model,
          c = h.getModel("tooltip", i);
        if (v(n.getAxes(), S(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
          var p = "axis" === c.get("trigger"),
            f = "cross" === c.get(["axisPointer", "type"]),
            d = n.getTooltipAxes(c.get(["axisPointer", "axis"]));
          (p || f) && v(d.baseAxes, S(s, f ? "cross" : !0, p)), f && v(d.otherAxes, S(s, "cross", !1))
        }
      }
    })
  }

  function hg(t, e, n, i, r, o) {
    var a = e.getModel("axisPointer"),
      l = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"],
      u = {};
    v(l, function (t) {
      u[t] = s(a.get(t))
    }), u.snap = "category" !== t.type && !!o, "cross" === a.get("type") && (u.type = "line");
    var h = u.label || (u.label = {});
    if (null == h.show && (h.show = !1), "cross" === r) {
      var p = a.get(["label", "show"]);
      if (h.show = null != p ? p : !0, !o) {
        var f = u.lineStyle = a.get("crossStyle");
        f && c(h, f.textStyle)
      }
    }
    return t.model.getModel("axisPointer", new Fb(u, n, i))
  }

  function cg(t, e) {
    e.eachSeries(function (e) {
      var n = e.coordinateSystem,
        i = e.get(["tooltip", "trigger"], !0),
        r = e.get(["tooltip", "show"], !0);
      n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get(["axisPointer", "show"], !0) !== !1 && v(t.coordSysAxesInfo[mg(n.model)], function (t) {
        var i = t.axis;
        n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
      })
    })
  }

  function pg(t, e) {
    for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
      var o = t[r] || {};
      if (fg(o[i + "AxisId"], n.id) || fg(o[i + "AxisIndex"], n.componentIndex) || fg(o[i + "AxisName"], n.name)) return r
    }
  }

  function fg(t, e) {
    return "all" === t || M(t) && p(t, e) >= 0 || t === e
  }

  function dg(t) {
    var e = gg(t);
    if (e) {
      var n = e.axisPointerModel,
        i = e.axis.scale,
        r = n.option,
        o = n.get("status"),
        a = n.get("value");
      null != a && (a = i.parse(a));
      var s = yg(n);
      null == o && (r.status = s ? "show" : "hide");
      var l = i.getExtent().slice();
      l[0] > l[1] && l.reverse(), (null == a || a > l[1]) && (a = l[1]), a < l[0] && (a = l[0]), r.value = a, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
    }
  }

  function gg(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return e && e.axesInfo[mg(t)]
  }

  function vg(t) {
    var e = gg(t);
    return e && e.axisPointerModel
  }

  function yg(t) {
    return !!t.get(["handle", "show"])
  }

  function mg(t) {
    return t.type + "||" + t.id
  }

  function _g(t, e, n, i) {
    var r = n.axis;
    if (!r.scale.isBlank()) {
      var o = n.getModel("splitArea"),
        a = o.getModel("areaStyle"),
        s = a.get("color"),
        l = i.coordinateSystem.getRect(),
        u = r.getTicksCoords({
          tickModel: o,
          clamp: !0
        });
      if (u.length) {
        var h = s.length,
          p = nD(t).splitAreaColors,
          f = Y(),
          d = 0;
        if (p)
          for (var g = 0; g < u.length; g++) {
            var v = p.get(u[g].tickValue);
            if (null != v) {
              d = (v + (h - 1) * g) % h;
              break
            }
          }
        var y = r.toGlobalCoord(u[0].coord),
          m = a.getAreaStyle();
        s = M(s) ? s : [s];
        for (var g = 1; g < u.length; g++) {
          var _ = r.toGlobalCoord(u[g].coord),
            x = void 0,
            w = void 0,
            b = void 0,
            S = void 0;
          r.isHorizontal() ? (x = y, w = l.y, b = _ - x, S = l.height, y = x + b) : (x = l.x, w = y, b = l.width, S = _ - w, y = w + S);
          var T = u[g - 1].tickValue;
          null != T && f.set(T, d), e.add(new Gx({
            anid: null != T ? "area_" + T : null,
            shape: {
              x: x,
              y: w,
              width: b,
              height: S
            },
            style: c({
              fill: s[d]
            }, m),
            autoBatch: !0,
            silent: !0
          })), d = (d + 1) % h
        }
        nD(t).splitAreaColors = f
      }
    }
  }

  function xg(t) {
    nD(t).splitAreaColors = null
  }

  function wg(t) {
    t.registerComponentView(uD), t.registerComponentModel(zk), t.registerCoordinateSystem("cartesian2d", Kk), Wd(t, "x", Ek, hD), Wd(t, "y", Ek, hD), t.registerComponentView(sD), t.registerComponentView(lD), t.registerPreprocessor(function (t) {
      t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    })
  }

  function bg(t) {
    t.registerComponentModel(cD), t.registerComponentView(pD)
  }

  function Sg(t, e) {
    var n = oS(e.get("padding")),
      i = e.getItemStyle(["color", "opacity"]);
    return i.fill = e.get("backgroundColor"), t = new Gx({
      shape: {
        x: t.x - n[3],
        y: t.y - n[0],
        width: t.width + n[1] + n[3],
        height: t.height + n[0] + n[2],
        r: e.get("borderRadius")
      },
      style: i,
      silent: !0,
      z2: -1
    })
  }

  function Mg(t, e, n, i, r, o, a) {
    function s(t, e) {
      "auto" === t.lineWidth && (t.lineWidth = e.lineWidth > 0 ? 2 : 0), vD(t, function (n, i) {
        "inherit" === t[i] && (t[i] = e[i])
      })
    }
    var l = e.getModel("itemStyle"),
      u = l.getItemStyle(),
      h = 0 === t.lastIndexOf("empty", 0) ? "fill" : "stroke",
      c = l.getShallow("decal");
    u.decal = c && "inherit" !== c ? Ec(c, a) : i.decal, "inherit" === u.fill && (u.fill = i[r]), "inherit" === u.stroke && (u.stroke = i[h]), "inherit" === u.opacity && (u.opacity = ("fill" === r ? i : n).opacity), s(u, i);
    var p = e.getModel("lineStyle"),
      f = p.getLineStyle();
    if (s(f, n), "auto" === u.fill && (u.fill = i.fill), "auto" === u.stroke && (u.stroke = i.fill), "auto" === f.stroke && (f.stroke = i.fill), !o) {
      var d = e.get("inactiveBorderWidth"),
        g = u[h];
      u.lineWidth = "auto" === d ? i.lineWidth > 0 && g ? 2 : 0 : u.lineWidth, u.fill = e.get("inactiveColor"), u.stroke = e.get("inactiveBorderColor"), f.stroke = p.get("inactiveColor"), f.lineWidth = p.get("inactiveWidth")
    }
    return {
      itemStyle: u,
      lineStyle: f
    }
  }

  function Tg(t) {
    var e = t.icon || "roundRect",
      n = oc(e, 0, 0, t.itemWidth, t.itemHeight, t.itemStyle.fill, t.symbolKeepAspect);
    return n.setStyle(t.itemStyle), n.rotation = (t.iconRotate || 0) * Math.PI / 180, n.setOrigin([t.itemWidth / 2, t.itemHeight / 2]), e.indexOf("empty") > -1 && (n.style.stroke = n.style.fill, n.style.fill = "#fff", n.style.lineWidth = 2), n
  }

  function Cg(t, e, n, i) {
    Dg(t, e, n, i), n.dispatchAction({
      type: "legendToggleSelect",
      name: null != t ? t : e
    }), kg(t, e, n, i)
  }

  function Ig(t) {
    for (var e, n = t.getZr().storage.getDisplayList(), i = 0, r = n.length; r > i && !(e = n[i].states.emphasis);) i++;
    return e && e.hoverLayer
  }

  function kg(t, e, n, i) {
    Ig(n) || n.dispatchAction({
      type: "highlight",
      seriesName: t,
      name: e,
      excludeSeriesId: i
    })
  }

  function Dg(t, e, n, i) {
    Ig(n) || n.dispatchAction({
      type: "downplay",
      seriesName: t,
      name: e,
      excludeSeriesId: i
    })
  }

  function Ag(t) {
    var e = t.findComponents({
      mainType: "legend"
    });
    e && e.length && t.filterSeries(function (t) {
      for (var n = 0; n < e.length; n++)
        if (!e[n].isSelected(t.name)) return !1;
      return !0
    })
  }

  function Pg(t, e, n) {
    var i, r = {},
      o = "toggleSelected" === t;
    return n.eachComponent("legend", function (n) {
      o && null != i ? n[i ? "select" : "unSelect"](e.name) : "allSelect" === t || "inverseSelect" === t ? n[t]() : (n[t](e.name), i = n.isSelected(e.name));
      var a = n.getData();
      v(a, function (t) {
        var e = t.get("name");
        if ("\n" !== e && "" !== e) {
          var i = n.isSelected(e);
          r[e] = r.hasOwnProperty(e) ? r[e] && i : i
        }
      })
    }), "allSelect" === t || "inverseSelect" === t ? {
      selected: r
    } : {
      name: e.name,
      selected: r
    }
  }

  function Lg(t) {
    t.registerAction("legendToggleSelect", "legendselectchanged", S(Pg, "toggleSelected")), t.registerAction("legendAllSelect", "legendselectall", S(Pg, "allSelect")), t.registerAction("legendInverseSelect", "legendinverseselect", S(Pg, "inverseSelect")), t.registerAction("legendSelect", "legendselected", S(Pg, "select")), t.registerAction("legendUnSelect", "legendunselected", S(Pg, "unSelect"))
  }

  function Og(t) {
    t.registerComponentModel(dD), t.registerComponentView(mD), t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, Ag), t.registerSubTypeDefaulter("legend", function () {
      return "plain"
    }), Lg(t)
  }

  function Rg(t, e, n) {
    var i = t.getOrient(),
      r = [1, 1];
    r[i.index] = 0, zl(e, n, {
      type: "box",
      ignoreSize: !!r
    })
  }

  function Bg(t) {
    t.registerAction("legendScroll", "legendscroll", function (t, e) {
      var n = t.scrollDataIndex;
      null != n && e.eachComponent({
        mainType: "legend",
        subType: "scroll",
        query: t
      }, function (t) {
        t.setScrollDataIndex(n)
      })
    })
  }

  function zg(t) {
    zf(Og), t.registerComponentModel(_D), t.registerComponentView(SD), Bg(t)
  }

  function Eg(t, e, n, i) {
    Ng(MD(n).lastProp, i) || (MD(n).lastProp = i, e ? is(n, i, t) : (n.stopAnimation(), n.attr(i)))
  }

  function Ng(t, e) {
    if (D(t) && D(e)) {
      var n = !0;
      return v(e, function (e, i) {
        n = n && Ng(t[i], e)
      }), !!n
    }
    return t === e
  }

  function Fg(t, e) {
    t[e.get(["label", "show"]) ? "show" : "hide"]()
  }

  function Hg(t) {
    return {
      x: t.x || 0,
      y: t.y || 0,
      rotation: t.rotation || 0
    }
  }

  function Vg(t, e, n) {
    var i = e.get("z"),
      r = e.get("zlevel");
    t && t.traverse(function (t) {
      "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
    })
  }

  function Wg(t) {
    var e, n = t.get("type"),
      i = t.getModel(n + "Style");
    return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e
  }

  function Gg(t, e, n, i, r) {
    var o = n.get("value"),
      a = Xg(o, e.axis, e.ecModel, n.get("seriesDataIndices"), {
        precision: n.get(["label", "precision"]),
        formatter: n.get(["label", "formatter"])
      }),
      s = n.getModel("label"),
      l = oS(s.get("padding") || 0),
      u = s.getFont(),
      h = mi(a, u),
      c = r.position,
      p = h.width + l[1] + l[3],
      f = h.height + l[0] + l[2],
      d = r.align;
    "right" === d && (c[0] -= p), "center" === d && (c[0] -= p / 2);
    var g = r.verticalAlign;
    "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), Ug(c, p, f, i);
    var v = s.get("backgroundColor");
    v && "auto" !== v || (v = e.get(["axisLine", "lineStyle", "color"])), t.label = {
      x: c[0],
      y: c[1],
      style: Ns(s, {
        text: a,
        font: u,
        fill: s.getTextColor(),
        padding: l,
        backgroundColor: v
      }),
      z2: 10
    }
  }

  function Ug(t, e, n, i) {
    var r = i.getWidth(),
      o = i.getHeight();
    t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, o) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
  }

  function Xg(t, e, n, i, r) {
    t = e.scale.parse(t);
    var o = e.scale.getLabel({
        value: t
      }, {
        precision: r.precision
      }),
      a = r.formatter;
    if (a) {
      var s = {
        value: Cf(e, {
          value: t
        }),
        axisDimension: e.dim,
        axisIndex: e.index,
        seriesData: []
      };
      v(i, function (t) {
        var e = n.getSeriesByIndex(t.seriesIndex),
          i = t.dataIndexInside,
          r = e && e.getDataParams(i);
        r && s.seriesData.push(r)
      }), C(a) ? o = a.replace("{value}", o) : T(a) && (o = a(s))
    }
    return o
  }

  function Yg(t, e, n) {
    var i = oi();
    return hi(i, i, n.rotation), ui(i, i, n.position), xs([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
  }

  function qg(t, e, n, i, r, o) {
    var a = Qk.innerTextLayout(n.rotation, 0, n.labelDirection);
    n.labelMargin = r.get(["label", "margin"]), Gg(e, i, r, o, {
      position: Yg(i.axis, t, n),
      align: a.textAlign,
      verticalAlign: a.textVerticalAlign
    })
  }

  function jg(t, e, n) {
    return n = n || 0, {
      x1: t[n],
      y1: t[1 - n],
      x2: e[n],
      y2: e[1 - n]
    }
  }

  function Zg(t, e, n) {
    return n = n || 0, {
      x: t[n],
      y: t[1 - n],
      width: e[n],
      height: e[1 - n]
    }
  }

  function Kg(t, e) {
    var n = {};
    return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
  }

  function $g(t) {
    return "x" === t.dim ? 0 : 1
  }

  function Qg(t, e, n) {
    if (!Gv.node) {
      var i = e.getZr();
      PD(i).records || (PD(i).records = {}), Jg(i, e);
      var r = PD(i).records[t] || (PD(i).records[t] = {});
      r.handler = n
    }
  }

  function Jg(t, e) {
    function n(n, i) {
      t.on(n, function (n) {
        var r = iv(e);
        LD(PD(t).records, function (t) {
          t && i(t, n, r.dispatchAction)
        }), tv(r.pendings, e)
      })
    }
    PD(t).initialized || (PD(t).initialized = !0, n("click", S(nv, "click")), n("mousemove", S(nv, "mousemove")), n("globalout", ev))
  }

  function tv(t, e) {
    var n, i = t.showTip.length,
      r = t.hideTip.length;
    i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
  }

  function ev(t, e, n) {
    t.handler("leave", null, n)
  }

  function nv(t, e, n, i) {
    e.handler(t, n, i)
  }

  function iv(t) {
    var e = {
        showTip: [],
        hideTip: []
      },
      n = function (i) {
        var r = e[i.type];
        r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
      };
    return {
      dispatchAction: n,
      pendings: e
    }
  }

  function rv(t, e) {
    if (!Gv.node) {
      var n = e.getZr(),
        i = (PD(n).records || {})[t];
      i && (PD(n).records[t] = null)
    }
  }

  function ov(t, e) {
    var n, i = [],
      r = t.seriesIndex;
    if (null == r || !(n = e.getSeriesByIndex(r))) return {
      point: []
    };
    var o = n.getData(),
      a = Ir(o, t);
    if (null == a || 0 > a || M(a)) return {
      point: []
    };
    var s = o.getItemGraphicEl(a),
      l = n.coordinateSystem;
    if (n.getTooltipPosition) i = n.getTooltipPosition(a) || [];
    else if (l && l.dataToPoint)
      if (t.isStacked) {
        var u = l.getBaseAxis(),
          h = l.getOtherAxis(u),
          c = h.dim,
          p = u.dim,
          f = "x" === c || "radius" === c ? 1 : 0,
          d = o.mapDimension(p),
          g = [];
        g[f] = o.get(d, a), g[1 - f] = o.get(o.getCalculationInfo("stackResultDimension"), a), i = l.dataToPoint(g) || []
      } else i = l.dataToPoint(o.getValues(y(l.dimensions, function (t) {
        return o.mapDimension(t)
      }), a)) || [];
    else if (s) {
      var v = s.getBoundingRect().clone();
      v.applyTransform(s.transform), i = [v.x + v.width / 2, v.y + v.height / 2]
    }
    return {
      point: i,
      el: s
    }
  }

  function av(t, e, n) {
    var i = t.currTrigger,
      r = [t.x, t.y],
      o = t,
      a = t.dispatchAction || cy(n.dispatchAction, n),
      s = e.getComponent("axisPointer").coordSysAxesInfo;
    if (s) {
      vv(r) && (r = ov({
        seriesIndex: o.seriesIndex,
        dataIndex: o.dataIndex
      }, e).point);
      var l = vv(r),
        u = o.axesInfo,
        h = s.axesInfo,
        c = "leave" === i || vv(r),
        p = {},
        f = {},
        d = {
          list: [],
          map: {}
        },
        g = {
          showPointer: S(uv, f),
          showTooltip: S(hv, d)
        };
      v(s.coordSysMap, function (t, e) {
        var n = l || t.containPoint(r);
        v(s.coordSysAxesInfo[e], function (t) {
          var e = t.axis,
            i = dv(u, t);
          if (!c && n && (!u || i)) {
            var o = i && i.value;
            null != o || l || (o = e.pointToData(r)), null != o && sv(t, o, g, !1, p)
          }
        })
      });
      var y = {};
      return v(h, function (t, e) {
        var n = t.linkGroup;
        n && !f[e] && v(n.axesInfo, function (e, i) {
          var r = f[i];
          if (e !== t && r) {
            var o = r.value;
            n.mapper && (o = t.axis.scale.parse(n.mapper(o, gv(e), gv(t)))), y[t.key] = o
          }
        })
      }), v(y, function (t, e) {
        sv(h[e], t, g, !0, p)
      }), cv(f, h, p), pv(d, r, t, a), fv(h, a, n), p
    }
  }

  function sv(t, e, n, i, r) {
    var o = t.axis;
    if (!o.scale.isBlank() && o.containData(e)) {
      if (!t.involveSeries) return void n.showPointer(t, e);
      var a = lv(e, t),
        s = a.payloadBatch,
        l = a.snapToValue;
      s[0] && null == r.seriesIndex && h(r, s[0]), !i && t.snap && o.containData(l) && null != l && (e = l), n.showPointer(t, e, s), n.showTooltip(t, a, l)
    }
  }

  function lv(t, e) {
    var n = e.axis,
      i = n.dim,
      r = t,
      o = [],
      a = Number.MAX_VALUE,
      s = -1;
    return v(e.seriesModels, function (e) {
      var l, u, h = e.getData().mapDimensionsAll(i);
      if (e.getAxisTooltipData) {
        var c = e.getAxisTooltipData(h, t, n);
        u = c.dataIndices, l = c.nestestValue
      } else {
        if (u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length) return;
        l = e.getData().get(h[0], u[0])
      }
      if (null != l && isFinite(l)) {
        var p = t - l,
          f = Math.abs(p);
        a >= f && ((a > f || p >= 0 && 0 > s) && (a = f, s = p, r = l, o.length = 0), v(u, function (t) {
          o.push({
            seriesIndex: e.seriesIndex,
            dataIndexInside: t,
            dataIndex: e.getData().getRawIndex(t)
          })
        }))
      }
    }), {
      payloadBatch: o,
      snapToValue: r
    }
  }

  function uv(t, e, n, i) {
    t[e.key] = {
      value: n,
      payloadBatch: i
    }
  }

  function hv(t, e, n, i) {
    var r = n.payloadBatch,
      o = e.axis,
      a = o.model,
      s = e.axisPointerModel;
    if (e.triggerTooltip && r.length) {
      var l = e.coordSys.model,
        u = mg(l),
        h = t.map[u];
      h || (h = t.map[u] = {
        coordSysId: l.id,
        coordSysIndex: l.componentIndex,
        coordSysType: l.type,
        coordSysMainType: l.mainType,
        dataByAxis: []
      }, t.list.push(h)), h.dataByAxis.push({
        axisDim: o.dim,
        axisIndex: a.componentIndex,
        axisType: a.type,
        axisId: a.id,
        value: i,
        valueLabelOpt: {
          precision: s.get(["label", "precision"]),
          formatter: s.get(["label", "formatter"])
        },
        seriesDataIndices: r.slice()
      })
    }
  }

  function cv(t, e, n) {
    var i = n.axesInfo = [];
    v(e, function (e, n) {
      var r = e.axisPointerModel.option,
        o = t[n];
      o ? (!e.useHandle && (r.status = "show"), r.value = o.value, r.seriesDataIndices = (o.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
        axisDim: e.axis.dim,
        axisIndex: e.axis.model.componentIndex,
        value: r.value
      })
    })
  }

  function pv(t, e, n, i) {
    if (vv(e) || !t.list.length) return void i({
      type: "hideTip"
    });
    var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    i({
      type: "showTip",
      escapeConnect: !0,
      x: e[0],
      y: e[1],
      tooltipOption: n.tooltipOption,
      position: n.position,
      dataIndexInside: r.dataIndexInside,
      dataIndex: r.dataIndex,
      seriesIndex: r.seriesIndex,
      dataByCoordSys: t.list
    })
  }

  function fv(t, e, n) {
    var i = n.getZr(),
      r = "axisPointerLastHighlights",
      o = RD(i)[r] || {},
      a = RD(i)[r] = {};
    v(t, function (t) {
      var e = t.axisPointerModel.option;
      "show" === e.status && v(e.seriesDataIndices, function (t) {
        var e = t.seriesIndex + " | " + t.dataIndex;
        a[e] = t
      })
    });
    var s = [],
      l = [];
    v(o, function (t, e) {
      !a[e] && l.push(t)
    }), v(a, function (t, e) {
      !o[e] && s.push(t)
    }), l.length && n.dispatchAction({
      type: "downplay",
      escapeConnect: !0,
      notBlur: !0,
      batch: l
    }), s.length && n.dispatchAction({
      type: "highlight",
      escapeConnect: !0,
      notBlur: !0,
      batch: s
    })
  }

  function dv(t, e) {
    for (var n = 0; n < (t || []).length; n++) {
      var i = t[n];
      if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
    }
  }

  function gv(t) {
    var e = t.axis.model,
      n = {},
      i = n.axisDim = t.axis.dim;
    return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
  }

  function vv(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
  }

  function yv(t) {
    eD.registerAxisPointerClass("CartesianAxisPointer", kD), t.registerComponentModel(AD), t.registerComponentView(OD), t.registerPreprocessor(function (t) {
      if (t) {
        (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
        var e = t.axisPointer.link;
        e && !M(e) && (t.axisPointer.link = [e])
      }
    }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
      t.getComponent("axisPointer").coordSysAxesInfo = lg(t, e)
    }), t.registerAction({
      type: "updateAxisPointer",
      event: "updateAxisPointer",
      update: ":updateAxisPointer"
    }, av)
  }

  function mv(t) {
    var e = t.get("confine");
    return null != e ? !!e : "richText" === t.get("renderMode")
  }

  function _v(t) {
    if (Gv.domSupported)
      for (var e = document.documentElement.style, n = 0, i = t.length; i > n; n++)
        if (t[n] in e) return t[n]
  }

  function xv(t, e) {
    if (!t) return e;
    e = Ml(e, !0);
    var n = t.indexOf(e);
    return t = -1 === n ? e : "-" + t.slice(0, n) + "-" + e, t.toLowerCase()
  }

  function wv(t, e) {
    var n = t.currentStyle || document.defaultView && document.defaultView.getComputedStyle(t);
    return n ? e ? n[e] : n : null
  }

  function bv(t) {
    return t = "left" === t ? "right" : "right" === t ? "left" : "top" === t ? "bottom" : "top"
  }

  function Sv(t, e, n) {
    if (!C(n) || "inside" === n) return "";
    var i = t.get("backgroundColor"),
      r = t.get("borderWidth");
    e = Pl(e);
    var o, a = bv(n),
      s = Math.max(1.5 * Math.round(r), 6),
      l = "",
      u = FD + ":";
    p(["left", "right"], a) > -1 ? (l += "top:50%", u += "translateY(-50%) rotate(" + (o = "left" === a ? -225 : -45) + "deg)") : (l += "left:50%", u += "translateX(-50%) rotate(" + (o = "top" === a ? 225 : 45) + "deg)");
    var h = o * Math.PI / 180,
      c = s + r,
      f = c * Math.abs(Math.cos(h)) + c * Math.abs(Math.sin(h)),
      d = Math.round(100 * ((f - Math.SQRT2 * r) / 2 + Math.SQRT2 * r - (f - c) / 2)) / 100;
    l += ";" + a + ":-" + d + "px";
    var g = e + " solid " + r + "px;",
      v = ["position:absolute;width:" + s + "px;height:" + s + "px;", l + ";" + u + ";", "border-bottom:" + g, "border-right:" + g, "background-color:" + i + ";"];
    return '<div style="' + v.join("") + '"></div>'
  }

  function Mv(t, e) {
    var n = "cubic-bezier(0.23,1,0.32,1)",
      i = " " + t / 2 + "s " + n,
      r = "opacity" + i + ",visibility" + i;
    return e || (i = " " + t + "s " + n, r += Gv.transformSupported ? "," + FD + i : ",left" + i + ",top" + i), ND + ":" + r
  }

  function Tv(t, e, n) {
    var i = t.toFixed(0) + "px",
      r = e.toFixed(0) + "px";
    if (!Gv.transformSupported) return n ? "top:" + r + ";left:" + i + ";" : [
      ["top", r],
      ["left", i]
    ];
    var o = Gv.transform3dSupported,
      a = "translate" + (o ? "3d" : "") + "(" + i + "," + r + (o ? ",0" : "") + ")";
    return n ? "top:0;left:0;" + FD + ":" + a + ";" : [
      ["top", 0],
      ["left", 0],
      [zD, a]
    ]
  }

  function Cv(t) {
    var e = [],
      n = t.get("fontSize"),
      i = t.getTextColor();
    i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px");
    var r = t.get("textShadowColor"),
      o = t.get("textShadowBlur") || 0,
      a = t.get("textShadowOffsetX") || 0,
      s = t.get("textShadowOffsetY") || 0;
    return r && o && e.push("text-shadow:" + a + "px " + s + "px " + o + "px " + r), v(["decoration", "align"], function (n) {
      var i = t.get(n);
      i && e.push("text-" + n + ":" + i)
    }), e.join(";")
  }

  function Iv(t, e, n) {
    var i = [],
      r = t.get("transitionDuration"),
      o = t.get("backgroundColor"),
      a = t.get("shadowBlur"),
      s = t.get("shadowColor"),
      l = t.get("shadowOffsetX"),
      u = t.get("shadowOffsetY"),
      h = t.getModel("textStyle"),
      c = xh(t, "html"),
      p = l + "px " + u + "px " + a + "px " + s;
    return i.push("box-shadow:" + p), e && r && i.push(Mv(r, n)), o && i.push("background-color:" + o), v(["width", "color", "radius"], function (e) {
      var n = "border-" + e,
        r = Ml(n),
        o = t.get(r);
      null != o && i.push(n + ":" + o + ("color" === e ? "" : "px"))
    }), i.push(Cv(h)), null != c && i.push("padding:" + oS(c).join("px ") + "px"), i.join(";") + ";"
  }

  function kv(t, e, n, i, r) {
    var o = e && e.painter;
    if (n) {
      var a = o && o.getViewportRoot();
      a && we(t, a, document.body, i, r)
    } else {
      t[0] = i, t[1] = r;
      var s = o && o.getViewportRootOffset();
      s && (t[0] += s.offsetLeft, t[1] += s.offsetTop)
    }
    t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight()
  }

  function Dv(t) {
    return Math.max(0, t)
  }

  function Av(t) {
    var e = Dv(t.shadowBlur || 0),
      n = Dv(t.shadowOffsetX || 0),
      i = Dv(t.shadowOffsetY || 0);
    return {
      left: Dv(e - n),
      right: Dv(e + n),
      top: Dv(e - i),
      bottom: Dv(e + i)
    }
  }

  function Pv(t, e, n, i) {
    t[0] = n, t[1] = i, t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight()
  }

  function Lv(t, e, n) {
    var i, r = e.ecModel;
    n ? (i = new Fb(n, r, r), i = new Fb(e.option, i, r)) : i = e;
    for (var o = t.length - 1; o >= 0; o--) {
      var a = t[o];
      a && (a instanceof Fb && (a = a.get("tooltip", !0)), C(a) && (a = {
        formatter: a
      }), a && (i = new Fb(a, i, r)))
    }
    return i
  }

  function Ov(t, e) {
    return t.dispatchAction || cy(e.dispatchAction, e)
  }

  function Rv(t, e, n, i, r, o, a) {
    var s = n.getSize(),
      l = s[0],
      u = s[1];
    return null != o && (t + l + o + 2 > i ? t -= l + o : t += o), null != a && (e + u + a > r ? e -= u + a : e += a), [t, e]
  }

  function Bv(t, e, n, i, r) {
    var o = n.getSize(),
      a = o[0],
      s = o[1];
    return t = Math.min(t + a, i) - a, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
  }

  function zv(t, e, n, i) {
    var r = n[0],
      o = n[1],
      a = Math.ceil(Math.SQRT2 * i) + 8,
      s = 0,
      l = 0,
      u = e.width,
      h = e.height;
    switch (t) {
      case "inside":
        s = e.x + u / 2 - r / 2, l = e.y + h / 2 - o / 2;
        break;
      case "top":
        s = e.x + u / 2 - r / 2, l = e.y - o - a;
        break;
      case "bottom":
        s = e.x + u / 2 - r / 2, l = e.y + h + a;
        break;
      case "left":
        s = e.x - r - a, l = e.y + h / 2 - o / 2;
        break;
      case "right":
        s = e.x + u + a, l = e.y + h / 2 - o / 2
    }
    return [s, l]
  }

  function Ev(t) {
    return "center" === t || "middle" === t
  }

  function Nv(t, e, n) {
    var i = Ar(t).queryOptionMap,
      r = i.keys()[0];
    if (r && "series" !== r) {
      var o = Pr(e, r, i.get(r), {
          useDefault: !1,
          enableAll: !1,
          enableNone: !1
        }),
        a = o.models[0];
      if (a) {
        var s, l = n.getViewOfComponentModel(a);
        return l.group.traverse(function (e) {
          var n = $x(e).tooltipConfig;
          return n && n.name === t.name ? (s = e, !0) : void 0
        }), s ? {
          componentMainType: r,
          componentIndex: a.componentIndex,
          el: s
        } : void 0
      }
    }
  }

  function Fv(t) {
    zf(yv), t.registerComponentModel(BD), t.registerComponentView(UD), t.registerAction({
      type: "showTip",
      event: "showTip",
      update: "tooltip:manuallyShowTip"
    }, $), t.registerAction({
      type: "hideTip",
      event: "hideTip",
      update: "tooltip:manuallyHideTip"
    }, $)
  }
  var Hv = function (t, e) {
      return (Hv = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (t, e) {
          t.__proto__ = e
        } || function (t, e) {
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    },
    Vv = function () {
      function t() {
        this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1
      }
      return t
    }(),
    Wv = function () {
      function t() {
        this.browser = new Vv, this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = "undefined" != typeof window
      }
      return t
    }(),
    Gv = new Wv;
  "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? (Gv.wxa = !0, Gv.touchEventsSupported = !0) : "undefined" == typeof document && "undefined" != typeof self ? Gv.worker = !0 : "undefined" == typeof navigator ? (Gv.node = !0, Gv.svgSupported = !0) : n(navigator.userAgent, Gv);
  var Uv = 12,
    Xv = "sans-serif",
    Yv = Uv + "px " + Xv,
    qv = 20,
    jv = 100,
    Zv = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N",
    Kv = i(Zv),
    $v = {
      createCanvas: function () {
        return "undefined" != typeof document && document.createElement("canvas")
      },
      measureText: function () {
        var t, e;
        return function (n, i) {
          if (!t) {
            var r = $v.createCanvas();
            t = r && r.getContext("2d")
          }
          if (t) return e !== i && (e = t.font = i || Yv), t.measureText(n);
          n = n || "", i = i || Yv;
          var o = /^([0-9]*?)px$/.exec(i),
            a = +(o && o[1]) || Uv,
            s = 0;
          if (i.indexOf("mono") >= 0) s = a * n.length;
          else
            for (var l = 0; l < n.length; l++) {
              var u = Kv[n[l]];
              s += null == u ? a : u * a
            }
          return {
            width: s
          }
        }
      }(),
      loadImage: function (t, e, n) {
        // var i = new Image;
        var i = canvas.createImage();
        return i.onload = e, i.onerror = n, i.src = t, i
      }
    },
    Qv = m(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], function (t, e) {
      return t["[object " + e + "]"] = !0, t
    }, {}),
    Jv = m(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], function (t, e) {
      return t["[object " + e + "Array]"] = !0, t
    }, {}),
    ty = Object.prototype.toString,
    ey = Array.prototype,
    ny = ey.forEach,
    iy = ey.filter,
    ry = ey.slice,
    oy = ey.map,
    ay = function () {}.constructor,
    sy = ay ? ay.prototype : null,
    ly = "__proto__",
    uy = 2311,
    hy = $v.createCanvas,
    cy = sy && T(sy.bind) ? sy.call.bind(sy.bind) : b,
    py = "__ec_primitive__",
    fy = function () {
      function t(e) {
        function n(t, e) {
          i ? r.set(t, e) : r.set(e, t)
        }
        this.data = {};
        var i = M(e);
        this.data = {};
        var r = this;
        e instanceof t ? e.each(n) : e && v(e, n)
      }
      return t.prototype.get = function (t) {
        return this.data.hasOwnProperty(t) ? this.data[t] : null
      }, t.prototype.set = function (t, e) {
        return this.data[t] = e
      }, t.prototype.each = function (t, e) {
        for (var n in this.data) this.data.hasOwnProperty(n) && t.call(e, this.data[n], n)
      }, t.prototype.keys = function () {
        return w(this.data)
      }, t.prototype.removeKey = function (t) {
        delete this.data[t]
      }, t
    }(),
    dy = 180 / Math.PI,
    gy = (Object.freeze || Object)({
      guid: o,
      logError: a,
      clone: s,
      merge: l,
      mergeAll: u,
      extend: h,
      defaults: c,
      createCanvas: hy,
      indexOf: p,
      inherits: f,
      mixin: d,
      isArrayLike: g,
      each: v,
      map: y,
      reduce: m,
      filter: _,
      find: x,
      keys: w,
      bind: cy,
      curry: S,
      isArray: M,
      isFunction: T,
      isString: C,
      isStringSafe: I,
      isNumber: k,
      isObject: D,
      isBuiltInObject: A,
      isTypedArray: P,
      isDom: L,
      isGradientObject: O,
      isImagePatternObject: R,
      isRegExp: B,
      eqNaN: z,
      retrieve: E,
      retrieve2: N,
      retrieve3: F,
      slice: H,
      normalizeCssArray: V,
      assert: W,
      trim: G,
      setAsPrimitive: U,
      isPrimitive: X,
      HashMap: fy,
      createHashMap: Y,
      concatArray: q,
      createObject: j,
      disableUserSelect: Z,
      hasOwn: K,
      noop: $,
      RADIAN_TO_DEGREE: dy
    }),
    vy = oe,
    yy = ae,
    my = pe,
    _y = fe,
    xy = (Object.freeze || Object)({
      create: Q,
      copy: J,
      clone: te,
      set: ee,
      add: ne,
      scaleAndAdd: ie,
      sub: re,
      len: oe,
      length: vy,
      lenSquare: ae,
      lengthSquare: yy,
      mul: se,
      div: le,
      dot: ue,
      scale: he,
      normalize: ce,
      distance: pe,
      dist: my,
      distanceSquare: fe,
      distSquare: _y,
      negate: de,
      lerp: ge,
      applyTransform: ve,
      min: ye,
      max: me
    }),
    wy = function () {
      function t(t, e) {
        this.target = t, this.topTarget = e && e.topTarget
      }
      return t
    }(),
    by = function () {
      function t(t) {
        this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this)
      }
      return t.prototype._dragStart = function (t) {
        for (var e = t.target; e && !e.draggable;) e = e.parent || e.__hostTarget;
        e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new wy(e, t), "dragstart", t.event))
      }, t.prototype._drag = function (t) {
        var e = this._draggingTarget;
        if (e) {
          var n = t.offsetX,
            i = t.offsetY,
            r = n - this._x,
            o = i - this._y;
          this._x = n, this._y = i, e.drift(r, o, t), this.handler.dispatchToElement(new wy(e, t), "drag", t.event);
          var a = this.handler.findHover(n, i, e).target,
            s = this._dropTarget;
          this._dropTarget = a, e !== a && (s && a !== s && this.handler.dispatchToElement(new wy(s, t), "dragleave", t.event), a && a !== s && this.handler.dispatchToElement(new wy(a, t), "dragenter", t.event))
        }
      }, t.prototype._dragEnd = function (t) {
        var e = this._draggingTarget;
        e && (e.dragging = !1), this.handler.dispatchToElement(new wy(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new wy(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
      }, t
    }(),
    Sy = function () {
      function t(t) {
        t && (this._$eventProcessor = t)
      }
      return t.prototype.on = function (t, e, n, i) {
        this._$handlers || (this._$handlers = {});
        var r = this._$handlers;
        if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
        var o = this._$eventProcessor;
        null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)), r[t] || (r[t] = []);
        for (var a = 0; a < r[t].length; a++)
          if (r[t][a].h === n) return this;
        var s = {
            h: n,
            query: e,
            ctx: i || this,
            callAtLast: n.zrEventfulCallAtLast
          },
          l = r[t].length - 1,
          u = r[t][l];
        return u && u.callAtLast ? r[t].splice(l, 0, s) : r[t].push(s), this
      }, t.prototype.isSilent = function (t) {
        var e = this._$handlers;
        return !e || !e[t] || !e[t].length
      }, t.prototype.off = function (t, e) {
        var n = this._$handlers;
        if (!n) return this;
        if (!t) return this._$handlers = {}, this;
        if (e) {
          if (n[t]) {
            for (var i = [], r = 0, o = n[t].length; o > r; r++) n[t][r].h !== e && i.push(n[t][r]);
            n[t] = i
          }
          n[t] && 0 === n[t].length && delete n[t]
        } else delete n[t];
        return this
      }, t.prototype.trigger = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        if (!this._$handlers) return this;
        var i = this._$handlers[t],
          r = this._$eventProcessor;
        if (i)
          for (var o = e.length, a = i.length, s = 0; a > s; s++) {
            var l = i[s];
            if (!r || !r.filter || null == l.query || r.filter(t, l.query)) switch (o) {
              case 0:
                l.h.call(l.ctx);
                break;
              case 1:
                l.h.call(l.ctx, e[0]);
                break;
              case 2:
                l.h.call(l.ctx, e[0], e[1]);
                break;
              default:
                l.h.apply(l.ctx, e)
            }
          }
        return r && r.afterTrigger && r.afterTrigger(t), this
      }, t.prototype.triggerWithContext = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        if (!this._$handlers) return this;
        var i = this._$handlers[t],
          r = this._$eventProcessor;
        if (i)
          for (var o = e.length, a = e[o - 1], s = i.length, l = 0; s > l; l++) {
            var u = i[l];
            if (!r || !r.filter || null == u.query || r.filter(t, u.query)) switch (o) {
              case 0:
                u.h.call(a);
                break;
              case 1:
                u.h.call(a, e[0]);
                break;
              case 2:
                u.h.call(a, e[0], e[1]);
                break;
              default:
                u.h.apply(a, e.slice(1, o - 1))
            }
          }
        return r && r.afterTrigger && r.afterTrigger(t), this
      }, t
    }(),
    My = Math.log(2),
    Ty = "___zrEVENTSAVED",
    Cy = [],
    Iy = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ky = [],
    Dy = Gv.browser.firefox && +Gv.browser.version.split(".")[0] < 39,
    Ay = function (t) {
      t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
    },
    Py = function () {
      function t() {
        this._track = []
      }
      return t.prototype.recognize = function (t, e, n) {
        return this._doTrack(t, e, n), this._recognize(t)
      }, t.prototype.clear = function () {
        return this._track.length = 0, this
      }, t.prototype._doTrack = function (t, e, n) {
        var i = t.touches;
        if (i) {
          for (var r = {
              points: [],
              touches: [],
              target: e,
              event: t
            }, o = 0, a = i.length; a > o; o++) {
            var s = i[o],
              l = Ce(n, s, {});
            r.points.push([l.zrX, l.zrY]), r.touches.push(s)
          }
          this._track.push(r)
        }
      }, t.prototype._recognize = function (t) {
        for (var e in Ly)
          if (Ly.hasOwnProperty(e)) {
            var n = Ly[e](this._track, t);
            if (n) return n
          }
      }, t
    }(),
    Ly = {
      pinch: function (t, e) {
        var n = t.length;
        if (n) {
          var i = (t[n - 1] || {}).points,
            r = (t[n - 2] || {}).points || i;
          if (r && r.length > 1 && i && i.length > 1) {
            var o = Oe(i) / Oe(r);
            !isFinite(o) && (o = 1), e.pinchScale = o;
            var a = Re(i);
            return e.pinchX = a[0], e.pinchY = a[1], {
              type: "pinch",
              target: t[0].target,
              event: e
            }
          }
        }
      }
    },
    Oy = "silent",
    Ry = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.handler = null, e
      }
      return e(n, t), n.prototype.dispose = function () {}, n.prototype.setCursor = function () {}, n
    }(Sy),
    By = function () {
      function t(t, e) {
        this.x = t, this.y = e
      }
      return t
    }(),
    zy = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    Ey = function (t) {
      function n(e, n, i, r) {
        var o = t.call(this) || this;
        return o._hovered = new By(0, 0), o.storage = e, o.painter = n, o.painterRoot = r, i = i || new Ry, o.proxy = null, o.setHandlerProxy(i), o._draggingMgr = new by(o), o
      }
      return e(n, t), n.prototype.setHandlerProxy = function (t) {
        this.proxy && this.proxy.dispose(), t && (v(zy, function (e) {
          t.on && t.on(e, this[e], this)
        }, this), t.handler = this), this.proxy = t
      }, n.prototype.mousemove = function (t) {
        var e = t.zrX,
          n = t.zrY,
          i = Ne(this, e, n),
          r = this._hovered,
          o = r.target;
        o && !o.__zr && (r = this.findHover(r.x, r.y), o = r.target);
        var a = this._hovered = i ? new By(e, n) : this.findHover(e, n),
          s = a.target,
          l = this.proxy;
        l.setCursor && l.setCursor(s ? s.cursor : "default"), o && s !== o && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(a, "mousemove", t), s && s !== o && this.dispatchToElement(a, "mouseover", t)
      }, n.prototype.mouseout = function (t) {
        var e = t.zrEventControl;
        "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), "no_globalout" !== e && this.trigger("globalout", {
          type: "globalout",
          event: t
        })
      }, n.prototype.resize = function () {
        this._hovered = new By(0, 0)
      }, n.prototype.dispatch = function (t, e) {
        var n = this[t];
        n && n.call(this, e)
      }, n.prototype.dispose = function () {
        this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null
      }, n.prototype.setCursorStyle = function (t) {
        var e = this.proxy;
        e.setCursor && e.setCursor(t)
      }, n.prototype.dispatchToElement = function (t, e, n) {
        t = t || {};
        var i = t.target;
        if (!i || !i.silent) {
          for (var r = "on" + e, o = Be(e, t, n); i && (i[r] && (o.cancelBubble = !!i[r].call(i, o)), i.trigger(e, o), i = i.__hostTarget ? i.__hostTarget : i.parent, !o.cancelBubble););
          o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function (t) {
            "function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o)
          }))
        }
      }, n.prototype.findHover = function (t, e, n) {
        for (var i = this.storage.getDisplayList(), r = new By(t, e), o = i.length - 1; o >= 0; o--) {
          var a = void 0;
          if (i[o] !== n && !i[o].ignore && (a = Ee(i[o], t, e)) && (!r.topTarget && (r.topTarget = i[o]), a !== Oy)) {
            r.target = i[o];
            break
          }
        }
        return r
      }, n.prototype.processGesture = function (t, e) {
        this._gestureMgr || (this._gestureMgr = new Py);
        var n = this._gestureMgr;
        "start" === e && n.clear();
        var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
        if ("end" === e && n.clear(), i) {
          var r = i.type;
          t.gestureEvent = r;
          var o = new By;
          o.target = i.target, this.dispatchToElement(o, r, i.event)
        }
      }, n
    }(Sy);
  v(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    Ey.prototype[t] = function (e) {
      var n, i, r = e.zrX,
        o = e.zrY,
        a = Ne(this, r, o);
      if ("mouseup" === t && a || (n = this.findHover(r, o), i = n.target), "mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;
      else if ("mouseup" === t) this._upEl = i;
      else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || my(this._downPoint, [e.zrX, e.zrY]) > 4) return;
        this._downPoint = null
      }
      this.dispatchToElement(n, t, e)
    }
  });
  var Ny, Fy = 32,
    Hy = 7,
    Vy = 1,
    Wy = 2,
    Gy = 4,
    Uy = !1,
    Xy = function () {
      function t() {
        this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = je
      }
      return t.prototype.traverse = function (t, e) {
        for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
      }, t.prototype.getDisplayList = function (t, e) {
        e = e || !1;
        var n = this._displayList;
        return (t || !n.length) && this.updateDisplayList(e), n
      }, t.prototype.updateDisplayList = function (t) {
        this._displayListLen = 0;
        for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
        n.length = this._displayListLen, Ye(n, je)
      }, t.prototype._updateAndAddDisplayable = function (t, e, n) {
        if (!t.ignore || n) {
          t.beforeUpdate(), t.update(), t.afterUpdate();
          var i = t.getClipPath();
          if (t.ignoreClip) e = null;
          else if (i) {
            e = e ? e.slice() : [];
            for (var r = i, o = t; r;) r.parent = o, r.updateTransform(), e.push(r), o = r, r = r.getClipPath()
          }
          if (t.childrenRef) {
            for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
              var l = a[s];
              t.__dirty && (l.__dirty |= Vy), this._updateAndAddDisplayable(l, e, n)
            }
            t.__dirty = 0
          } else {
            var u = t;
            e && e.length ? u.__clipPaths = e : u.__clipPaths && u.__clipPaths.length > 0 && (u.__clipPaths = []), isNaN(u.z) && (qe(), u.z = 0), isNaN(u.z2) && (qe(), u.z2 = 0), isNaN(u.zlevel) && (qe(), u.zlevel = 0), this._displayList[this._displayListLen++] = u
          }
          var h = t.getDecalElement && t.getDecalElement();
          h && this._updateAndAddDisplayable(h, e, n);
          var c = t.getTextGuideLine();
          c && this._updateAndAddDisplayable(c, e, n);
          var p = t.getTextContent();
          p && this._updateAndAddDisplayable(p, e, n)
        }
      }, t.prototype.addRoot = function (t) {
        t.__zr && t.__zr.storage === this || this._roots.push(t)
      }, t.prototype.delRoot = function (t) {
        if (t instanceof Array)
          for (var e = 0, n = t.length; n > e; e++) this.delRoot(t[e]);
        else {
          var i = p(this._roots, t);
          i >= 0 && this._roots.splice(i, 1)
        }
      }, t.prototype.delAllRoots = function () {
        this._roots = [], this._displayList = [], this._displayListLen = 0
      }, t.prototype.getRoots = function () {
        return this._roots
      }, t.prototype.dispose = function () {
        this._displayList = null, this._roots = null
      }, t
    }();
  Ny = Gv.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
    return setTimeout(t, 16)
  };
  var Yy = Ny,
    qy = {
      linear: function (t) {
        return t
      },
      quadraticIn: function (t) {
        return t * t
      },
      quadraticOut: function (t) {
        return t * (2 - t)
      },
      quadraticInOut: function (t) {
        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
      },
      cubicIn: function (t) {
        return t * t * t
      },
      cubicOut: function (t) {
        return --t * t * t + 1
      },
      cubicInOut: function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
      },
      quarticIn: function (t) {
        return t * t * t * t
      },
      quarticOut: function (t) {
        return 1 - --t * t * t * t
      },
      quarticInOut: function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
      },
      quinticIn: function (t) {
        return t * t * t * t * t
      },
      quinticOut: function (t) {
        return --t * t * t * t * t + 1
      },
      quinticInOut: function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
      },
      sinusoidalIn: function (t) {
        return 1 - Math.cos(t * Math.PI / 2)
      },
      sinusoidalOut: function (t) {
        return Math.sin(t * Math.PI / 2)
      },
      sinusoidalInOut: function (t) {
        return .5 * (1 - Math.cos(Math.PI * t))
      },
      exponentialIn: function (t) {
        return 0 === t ? 0 : Math.pow(1024, t - 1)
      },
      exponentialOut: function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
      },
      exponentialInOut: function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
      },
      circularIn: function (t) {
        return 1 - Math.sqrt(1 - t * t)
      },
      circularOut: function (t) {
        return Math.sqrt(1 - --t * t)
      },
      circularInOut: function (t) {
        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
      },
      elasticIn: function (t) {
        var e, n = .1,
          i = .4;
        return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)))
      },
      elasticOut: function (t) {
        var e, n = .1,
          i = .4;
        return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
      },
      elasticInOut: function (t) {
        var e, n = .1,
          i = .4;
        return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1)
      },
      backIn: function (t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e)
      },
      backOut: function (t) {
        var e = 1.70158;
        return --t * t * ((e + 1) * t + e) + 1
      },
      backInOut: function (t) {
        var e = 2.5949095;
        return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
      },
      bounceIn: function (t) {
        return 1 - qy.bounceOut(1 - t)
      },
      bounceOut: function (t) {
        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
      },
      bounceInOut: function (t) {
        return .5 > t ? .5 * qy.bounceIn(2 * t) : .5 * qy.bounceOut(2 * t - 1) + .5
      }
    },
    jy = Math.pow,
    Zy = Math.sqrt,
    Ky = 1e-8,
    $y = 1e-4,
    Qy = Zy(3),
    Jy = 1 / 3,
    tm = Q(),
    em = Q(),
    nm = Q(),
    im = /cubic-bezier\(([0-9,\.e ]+)\)/,
    rm = function () {
      function t(t) {
        this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || $, this.ondestroy = t.ondestroy || $, this.onrestart = t.onrestart || $, t.easing && this.setEasing(t.easing)
      }
      return t.prototype.step = function (t, e) {
        if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) return void(this._pausedTime += e);
        var n = this._life,
          i = t - this._startTime - this._pausedTime,
          r = i / n;
        0 > r && (r = 0), r = Math.min(r, 1);
        var o = this.easingFunc,
          a = o ? o(r) : r;
        if (this.onframe(a), 1 === r) {
          if (!this.loop) return !0;
          var s = i % n;
          this._startTime = t - s, this._pausedTime = 0, this.onrestart()
        }
        return !1
      }, t.prototype.pause = function () {
        this._paused = !0
      }, t.prototype.resume = function () {
        this._paused = !1
      }, t.prototype.setEasing = function (t) {
        this.easing = t, this.easingFunc = T(t) ? t : qy[t] || pn(t)
      }, t
    }(),
    om = function () {
      function t(t) {
        this.value = t
      }
      return t
    }(),
    am = function () {
      function t() {
        this._len = 0
      }
      return t.prototype.insert = function (t) {
        var e = new om(t);
        return this.insertEntry(e), e
      }, t.prototype.insertEntry = function (t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
      }, t.prototype.remove = function (t) {
        var e = t.prev,
          n = t.next;
        e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
      }, t.prototype.len = function () {
        return this._len
      }, t.prototype.clear = function () {
        this.head = this.tail = null, this._len = 0
      }, t
    }(),
    sm = function () {
      function t(t) {
        this._list = new am, this._maxSize = 10, this._map = {}, this._maxSize = t
      }
      return t.prototype.put = function (t, e) {
        var n = this._list,
          i = this._map,
          r = null;
        if (null == i[t]) {
          var o = n.len(),
            a = this._lastRemovedEntry;
          if (o >= this._maxSize && o > 0) {
            var s = n.head;
            n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
          }
          a ? a.value = e : a = new om(e), a.key = t, n.insertEntry(a), i[t] = a
        }
        return r
      }, t.prototype.get = function (t) {
        var e = this._map[t],
          n = this._list;
        return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
      }, t.prototype.clear = function () {
        this._list.clear(), this._map = {}
      }, t.prototype.len = function () {
        return this._list.len()
      }, t
    }(),
    lm = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255, 1],
      antiquewhite: [250, 235, 215, 1],
      aqua: [0, 255, 255, 1],
      aquamarine: [127, 255, 212, 1],
      azure: [240, 255, 255, 1],
      beige: [245, 245, 220, 1],
      bisque: [255, 228, 196, 1],
      black: [0, 0, 0, 1],
      blanchedalmond: [255, 235, 205, 1],
      blue: [0, 0, 255, 1],
      blueviolet: [138, 43, 226, 1],
      brown: [165, 42, 42, 1],
      burlywood: [222, 184, 135, 1],
      cadetblue: [95, 158, 160, 1],
      chartreuse: [127, 255, 0, 1],
      chocolate: [210, 105, 30, 1],
      coral: [255, 127, 80, 1],
      cornflowerblue: [100, 149, 237, 1],
      cornsilk: [255, 248, 220, 1],
      crimson: [220, 20, 60, 1],
      cyan: [0, 255, 255, 1],
      darkblue: [0, 0, 139, 1],
      darkcyan: [0, 139, 139, 1],
      darkgoldenrod: [184, 134, 11, 1],
      darkgray: [169, 169, 169, 1],
      darkgreen: [0, 100, 0, 1],
      darkgrey: [169, 169, 169, 1],
      darkkhaki: [189, 183, 107, 1],
      darkmagenta: [139, 0, 139, 1],
      darkolivegreen: [85, 107, 47, 1],
      darkorange: [255, 140, 0, 1],
      darkorchid: [153, 50, 204, 1],
      darkred: [139, 0, 0, 1],
      darksalmon: [233, 150, 122, 1],
      darkseagreen: [143, 188, 143, 1],
      darkslateblue: [72, 61, 139, 1],
      darkslategray: [47, 79, 79, 1],
      darkslategrey: [47, 79, 79, 1],
      darkturquoise: [0, 206, 209, 1],
      darkviolet: [148, 0, 211, 1],
      deeppink: [255, 20, 147, 1],
      deepskyblue: [0, 191, 255, 1],
      dimgray: [105, 105, 105, 1],
      dimgrey: [105, 105, 105, 1],
      dodgerblue: [30, 144, 255, 1],
      firebrick: [178, 34, 34, 1],
      floralwhite: [255, 250, 240, 1],
      forestgreen: [34, 139, 34, 1],
      fuchsia: [255, 0, 255, 1],
      gainsboro: [220, 220, 220, 1],
      ghostwhite: [248, 248, 255, 1],
      gold: [255, 215, 0, 1],
      goldenrod: [218, 165, 32, 1],
      gray: [128, 128, 128, 1],
      green: [0, 128, 0, 1],
      greenyellow: [173, 255, 47, 1],
      grey: [128, 128, 128, 1],
      honeydew: [240, 255, 240, 1],
      hotpink: [255, 105, 180, 1],
      indianred: [205, 92, 92, 1],
      indigo: [75, 0, 130, 1],
      ivory: [255, 255, 240, 1],
      khaki: [240, 230, 140, 1],
      lavender: [230, 230, 250, 1],
      lavenderblush: [255, 240, 245, 1],
      lawngreen: [124, 252, 0, 1],
      lemonchiffon: [255, 250, 205, 1],
      lightblue: [173, 216, 230, 1],
      lightcoral: [240, 128, 128, 1],
      lightcyan: [224, 255, 255, 1],
      lightgoldenrodyellow: [250, 250, 210, 1],
      lightgray: [211, 211, 211, 1],
      lightgreen: [144, 238, 144, 1],
      lightgrey: [211, 211, 211, 1],
      lightpink: [255, 182, 193, 1],
      lightsalmon: [255, 160, 122, 1],
      lightseagreen: [32, 178, 170, 1],
      lightskyblue: [135, 206, 250, 1],
      lightslategray: [119, 136, 153, 1],
      lightslategrey: [119, 136, 153, 1],
      lightsteelblue: [176, 196, 222, 1],
      lightyellow: [255, 255, 224, 1],
      lime: [0, 255, 0, 1],
      limegreen: [50, 205, 50, 1],
      linen: [250, 240, 230, 1],
      magenta: [255, 0, 255, 1],
      maroon: [128, 0, 0, 1],
      mediumaquamarine: [102, 205, 170, 1],
      mediumblue: [0, 0, 205, 1],
      mediumorchid: [186, 85, 211, 1],
      mediumpurple: [147, 112, 219, 1],
      mediumseagreen: [60, 179, 113, 1],
      mediumslateblue: [123, 104, 238, 1],
      mediumspringgreen: [0, 250, 154, 1],
      mediumturquoise: [72, 209, 204, 1],
      mediumvioletred: [199, 21, 133, 1],
      midnightblue: [25, 25, 112, 1],
      mintcream: [245, 255, 250, 1],
      mistyrose: [255, 228, 225, 1],
      moccasin: [255, 228, 181, 1],
      navajowhite: [255, 222, 173, 1],
      navy: [0, 0, 128, 1],
      oldlace: [253, 245, 230, 1],
      olive: [128, 128, 0, 1],
      olivedrab: [107, 142, 35, 1],
      orange: [255, 165, 0, 1],
      orangered: [255, 69, 0, 1],
      orchid: [218, 112, 214, 1],
      palegoldenrod: [238, 232, 170, 1],
      palegreen: [152, 251, 152, 1],
      paleturquoise: [175, 238, 238, 1],
      palevioletred: [219, 112, 147, 1],
      papayawhip: [255, 239, 213, 1],
      peachpuff: [255, 218, 185, 1],
      peru: [205, 133, 63, 1],
      pink: [255, 192, 203, 1],
      plum: [221, 160, 221, 1],
      powderblue: [176, 224, 230, 1],
      purple: [128, 0, 128, 1],
      red: [255, 0, 0, 1],
      rosybrown: [188, 143, 143, 1],
      royalblue: [65, 105, 225, 1],
      saddlebrown: [139, 69, 19, 1],
      salmon: [250, 128, 114, 1],
      sandybrown: [244, 164, 96, 1],
      seagreen: [46, 139, 87, 1],
      seashell: [255, 245, 238, 1],
      sienna: [160, 82, 45, 1],
      silver: [192, 192, 192, 1],
      skyblue: [135, 206, 235, 1],
      slateblue: [106, 90, 205, 1],
      slategray: [112, 128, 144, 1],
      slategrey: [112, 128, 144, 1],
      snow: [255, 250, 250, 1],
      springgreen: [0, 255, 127, 1],
      steelblue: [70, 130, 180, 1],
      tan: [210, 180, 140, 1],
      teal: [0, 128, 128, 1],
      thistle: [216, 191, 216, 1],
      tomato: [255, 99, 71, 1],
      turquoise: [64, 224, 208, 1],
      violet: [238, 130, 238, 1],
      wheat: [245, 222, 179, 1],
      white: [255, 255, 255, 1],
      whitesmoke: [245, 245, 245, 1],
      yellow: [255, 255, 0, 1],
      yellowgreen: [154, 205, 50, 1]
    },
    um = new sm(20),
    hm = null,
    cm = kn,
    pm = Dn,
    fm = (Object.freeze || Object)({
      parse: Sn,
      lift: Cn,
      toHex: In,
      fastLerp: kn,
      fastMapToColor: cm,
      lerp: Dn,
      mapToColor: pm,
      modifyHSL: An,
      modifyAlpha: Pn,
      stringify: Ln,
      lum: On,
      random: Rn
    }),
    dm = (function () {
      return Gv.hasGlobalWindow && T(window.btoa) ? function (t) {
        return window.btoa(unescape(t))
      } : "undefined" != typeof Buffer ? function (t) {
        return Buffer.from(t).toString("base64")
      } : function () {
        return null
      }
    }(), Array.prototype.slice),
    gm = 0,
    vm = 1,
    ym = 2,
    mm = 3,
    _m = 4,
    xm = 5,
    wm = 6,
    bm = [0, 0, 0, 0],
    Sm = function () {
      function t(t) {
        this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t
      }
      return t.prototype.isFinished = function () {
        return this._finished
      }, t.prototype.setFinished = function () {
        this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished()
      }, t.prototype.needsAnimate = function () {
        return this.keyframes.length >= 1
      }, t.prototype.getAdditiveTrack = function () {
        return this._additiveTrack
      }, t.prototype.addKeyframe = function (t, e, n) {
        this._needsSort = !0;
        var i = this.keyframes,
          r = i.length,
          o = !1,
          a = wm,
          s = e;
        if (g(e)) {
          var l = Yn(e);
          a = l, (1 === l && !k(e[0]) || 2 === l && !k(e[0][0])) && (o = !0)
        } else if (k(e) && !z(e)) a = gm;
        else if (C(e))
          if (isNaN(+e)) {
            var u = Sn(e);
            u && (s = u, a = mm)
          } else a = gm;
        else if (O(e)) {
          var c = h({}, s);
          c.colorStops = y(e.colorStops, function (t) {
            return {
              offset: t.offset,
              color: Sn(t.color)
            }
          }), Bn(e) ? a = _m : zn(e) && (a = xm), s = c
        }
        0 === r ? this.valType = a : (a !== this.valType || a === wm) && (o = !0), this.discrete = this.discrete || o;
        var p = {
          time: t,
          value: s,
          rawValue: e,
          percent: 0
        };
        return n && (p.easing = n, p.easingFunc = T(n) ? n : qy[n] || pn(n)), i.push(p), p
      }, t.prototype.prepare = function (t, e) {
        var n = this.keyframes;
        this._needsSort && n.sort(function (t, e) {
          return t.time - e.time
        });
        for (var i = this.valType, r = n.length, o = n[r - 1], a = this.discrete, s = jn(i), l = qn(i), u = 0; r > u; u++) {
          var h = n[u],
            c = h.value,
            p = o.value;
          h.percent = h.time / t, a || (s && u !== r - 1 ? Gn(c, p, i) : l && Wn(c.colorStops, p.colorStops))
        }
        if (!a && i !== xm && e && this.needsAnimate() && e.needsAnimate() && i === e.valType && !e._finished) {
          this._additiveTrack = e;
          for (var f = n[0].value, u = 0; r > u; u++) i === gm ? n[u].additiveValue = n[u].value - f : i === mm ? n[u].additiveValue = Hn([], n[u].value, f, -1) : jn(i) && (n[u].additiveValue = i === vm ? Hn([], n[u].value, f, -1) : Vn([], n[u].value, f, -1))
        }
      }, t.prototype.step = function (t, e) {
        if (!this._finished) {
          this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
          var n, i, r, o = null != this._additiveTrack,
            a = o ? "additiveValue" : "value",
            s = this.valType,
            l = this.keyframes,
            u = l.length,
            h = this.propName,
            c = s === mm,
            p = this._lastFr,
            f = Math.min;
          if (1 === u) i = r = l[0];
          else {
            if (0 > e) n = 0;
            else if (e < this._lastFrP) {
              var d = f(p + 1, u - 1);
              for (n = d; n >= 0 && !(l[n].percent <= e); n--);
              n = f(n, u - 2)
            } else {
              for (n = p; u > n && !(l[n].percent > e); n++);
              n = f(n - 1, u - 2)
            }
            r = l[n + 1], i = l[n]
          }
          if (i && r) {
            this._lastFr = n, this._lastFrP = e;
            var g = r.percent - i.percent,
              v = 0 === g ? 1 : f((e - i.percent) / g, 1);
            r.easingFunc && (v = r.easingFunc(v));
            var m = o ? this._additiveValue : c ? bm : t[h];
            if (!jn(s) && !c || m || (m = this._additiveValue = []), this.discrete) t[h] = 1 > v ? i.rawValue : r.rawValue;
            else if (jn(s)) s === vm ? Nn(m, i[a], r[a], v) : Fn(m, i[a], r[a], v);
            else if (qn(s)) {
              var _ = i[a],
                x = r[a],
                w = s === _m;
              t[h] = {
                type: w ? "linear" : "radial",
                x: En(_.x, x.x, v),
                y: En(_.y, x.y, v),
                colorStops: y(_.colorStops, function (t, e) {
                  var n = x.colorStops[e];
                  return {
                    offset: En(t.offset, n.offset, v),
                    color: Xn(Nn([], t.color, n.color, v))
                  }
                }),
                global: x.global
              }, w ? (t[h].x2 = En(_.x2, x.x2, v), t[h].y2 = En(_.y2, x.y2, v)) : t[h].r = En(_.r, x.r, v)
            } else if (c) Nn(m, i[a], r[a], v), o || (t[h] = Xn(m));
            else {
              var b = En(i[a], r[a], v);
              o ? this._additiveValue = b : t[h] = b
            }
            o && this._addToTarget(t)
          }
        }
      }, t.prototype._addToTarget = function (t) {
        var e = this.valType,
          n = this.propName,
          i = this._additiveValue;
        e === gm ? t[n] = t[n] + i : e === mm ? (Sn(t[n], bm), Hn(bm, bm, i, 1), t[n] = Xn(bm)) : e === vm ? Hn(t[n], t[n], i, 1) : e === ym && Vn(t[n], t[n], i, 1)
      }, t
    }(),
    Mm = function () {
      function t(t, e, n, i) {
        return this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && i ? void a("Can' use additive animation on looped animation.") : (this._additiveAnimators = i, void(this._allowDiscrete = n))
      }
      return t.prototype.getMaxTime = function () {
        return this._maxTime
      }, t.prototype.getDelay = function () {
        return this._delay
      }, t.prototype.getLoop = function () {
        return this._loop
      }, t.prototype.getTarget = function () {
        return this._target
      }, t.prototype.changeTarget = function (t) {
        this._target = t
      }, t.prototype.when = function (t, e, n) {
        return this.whenWithKeys(t, e, w(e), n)
      }, t.prototype.whenWithKeys = function (t, e, n, i) {
        for (var r = this._tracks, o = 0; o < n.length; o++) {
          var a = n[o],
            s = r[a];
          if (!s) {
            s = r[a] = new Sm(a);
            var l = void 0,
              u = this._getAdditiveTrack(a);
            if (u) {
              var h = u.keyframes,
                c = h[h.length - 1];
              l = c && c.value, u.valType === mm && l && (l = Xn(l))
            } else l = this._target[a];
            if (null == l) continue;
            t > 0 && s.addKeyframe(0, Un(l), i), this._trackKeys.push(a)
          }
          s.addKeyframe(t, Un(e[a]), i)
        }
        return this._maxTime = Math.max(this._maxTime, t), this
      }, t.prototype.pause = function () {
        this._clip.pause(), this._paused = !0
      }, t.prototype.resume = function () {
        this._clip.resume(), this._paused = !1
      }, t.prototype.isPaused = function () {
        return !!this._paused
      }, t.prototype.duration = function (t) {
        return this._maxTime = t, this._force = !0, this
      }, t.prototype._doneCallback = function () {
        this._setTracksFinished(), this._clip = null;
        var t = this._doneCbs;
        if (t)
          for (var e = t.length, n = 0; e > n; n++) t[n].call(this)
      }, t.prototype._abortedCallback = function () {
        this._setTracksFinished();
        var t = this.animation,
          e = this._abortedCbs;
        if (t && t.removeClip(this._clip), this._clip = null, e)
          for (var n = 0; n < e.length; n++) e[n].call(this)
      }, t.prototype._setTracksFinished = function () {
        for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++) t[e[n]].setFinished()
      }, t.prototype._getAdditiveTrack = function (t) {
        var e, n = this._additiveAnimators;
        if (n)
          for (var i = 0; i < n.length; i++) {
            var r = n[i].getTrack(t);
            r && (e = r)
          }
        return e
      }, t.prototype.start = function (t) {
        if (!(this._started > 0)) {
          this._started = 1;
          for (var e = this, n = [], i = this._maxTime || 0, r = 0; r < this._trackKeys.length; r++) {
            var o = this._trackKeys[r],
              a = this._tracks[o],
              s = this._getAdditiveTrack(o),
              l = a.keyframes,
              u = l.length;
            if (a.prepare(i, s), a.needsAnimate())
              if (!this._allowDiscrete && a.discrete) {
                var h = l[u - 1];
                h && (e._target[a.propName] = h.rawValue), a.setFinished()
              } else n.push(a)
          }
          if (n.length || this._force) {
            var c = new rm({
              life: i,
              loop: this._loop,
              delay: this._delay || 0,
              onframe: function (t) {
                e._started = 2;
                var i = e._additiveAnimators;
                if (i) {
                  for (var r = !1, o = 0; o < i.length; o++)
                    if (i[o]._clip) {
                      r = !0;
                      break
                    } r || (e._additiveAnimators = null)
                }
                for (var o = 0; o < n.length; o++) n[o].step(e._target, t);
                var a = e._onframeCbs;
                if (a)
                  for (var o = 0; o < a.length; o++) a[o](e._target, t)
              },
              ondestroy: function () {
                e._doneCallback()
              }
            });
            this._clip = c, this.animation && this.animation.addClip(c), t && c.setEasing(t)
          } else this._doneCallback();
          return this
        }
      }, t.prototype.stop = function (t) {
        if (this._clip) {
          var e = this._clip;
          t && e.onframe(1), this._abortedCallback()
        }
      }, t.prototype.delay = function (t) {
        return this._delay = t, this
      }, t.prototype.during = function (t) {
        return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this
      }, t.prototype.done = function (t) {
        return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this
      }, t.prototype.aborted = function (t) {
        return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this
      }, t.prototype.getClip = function () {
        return this._clip
      }, t.prototype.getTrack = function (t) {
        return this._tracks[t]
      }, t.prototype.getTracks = function () {
        var t = this;
        return y(this._trackKeys, function (e) {
          return t._tracks[e]
        })
      }, t.prototype.stopTracks = function (t, e) {
        if (!t.length || !this._clip) return !0;
        for (var n = this._tracks, i = this._trackKeys, r = 0; r < t.length; r++) {
          var o = n[t[r]];
          o && !o.isFinished() && (e ? o.step(this._target, 1) : 1 === this._started && o.step(this._target, 0), o.setFinished())
        }
        for (var a = !0, r = 0; r < i.length; r++)
          if (!n[i[r]].isFinished()) {
            a = !1;
            break
          } return a && this._abortedCallback(), a
      }, t.prototype.saveTo = function (t, e, n) {
        if (t) {
          e = e || this._trackKeys;
          for (var i = 0; i < e.length; i++) {
            var r = e[i],
              o = this._tracks[r];
            if (o && !o.isFinished()) {
              var a = o.keyframes,
                s = a[n ? 0 : a.length - 1];
              s && (t[r] = Un(s.rawValue))
            }
          }
        }
      }, t.prototype.__changeFinalValue = function (t, e) {
        e = e || w(t);
        for (var n = 0; n < e.length; n++) {
          var i = e[n],
            r = this._tracks[i];
          if (r) {
            var o = r.keyframes;
            if (o.length > 1) {
              var a = o.pop();
              r.addKeyframe(a.time, t[i]), r.prepare(this._maxTime, r.getAdditiveTrack())
            }
          }
        }
      }, t
    }(),
    Tm = function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, e = e || {}, n.stage = e.stage || {}, n
      }
      return e(n, t), n.prototype.addClip = function (t) {
        t.animation && this.removeClip(t), this._head ? (this._tail.next = t, t.prev = this._tail, t.next = null, this._tail = t) : this._head = this._tail = t, t.animation = this
      }, n.prototype.addAnimator = function (t) {
        t.animation = this;
        var e = t.getClip();
        e && this.addClip(e)
      }, n.prototype.removeClip = function (t) {
        if (t.animation) {
          var e = t.prev,
            n = t.next;
          e ? e.next = n : this._head = n, n ? n.prev = e : this._tail = e, t.next = t.prev = t.animation = null
        }
      }, n.prototype.removeAnimator = function (t) {
        var e = t.getClip();
        e && this.removeClip(e), t.animation = null
      }, n.prototype.update = function (t) {
        for (var e = Zn() - this._pausedTime, n = e - this._time, i = this._head; i;) {
          var r = i.next,
            o = i.step(e, n);
          o ? (i.ondestroy(), this.removeClip(i), i = r) : i = r
        }
        this._time = e, t || (this.trigger("frame", n), this.stage.update && this.stage.update())
      }, n.prototype._startLoop = function () {
        function t() {
          e._running && (Yy(t), !e._paused && e.update())
        }
        var e = this;
        this._running = !0, Yy(t)
      }, n.prototype.start = function () {
        this._running || (this._time = Zn(), this._pausedTime = 0, this._startLoop())
      }, n.prototype.stop = function () {
        this._running = !1
      }, n.prototype.pause = function () {
        this._paused || (this._pauseStart = Zn(), this._paused = !0)
      }, n.prototype.resume = function () {
        this._paused && (this._pausedTime += Zn() - this._pauseStart, this._paused = !1)
      }, n.prototype.clear = function () {
        for (var t = this._head; t;) {
          var e = t.next;
          t.prev = t.next = t.animation = null, t = e
        }
        this._head = this._tail = null
      }, n.prototype.isFinished = function () {
        return null == this._head
      }, n.prototype.animate = function (t, e) {
        e = e || {}, this.start();
        var n = new Mm(t, e.loop);
        return this.addAnimator(n), n
      }, n
    }(Sy),
    Cm = 300,
    Im = Gv.domSupported,
    km = function () {
      var t = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        e = ["touchstart", "touchend", "touchmove"],
        n = {
          pointerdown: 1,
          pointerup: 1,
          pointermove: 1,
          pointerout: 1
        },
        i = y(t, function (t) {
          var e = t.replace("mouse", "pointer");
          return n.hasOwnProperty(e) ? e : t
        });
      return {
        mouse: t,
        touch: e,
        pointer: i
      }
    }(),
    Dm = {
      mouse: ["mousemove", "mouseup"],
      pointer: ["pointermove", "pointerup"]
    },
    Am = !1,
    Pm = function () {
      function t(t, e) {
        this.stopPropagation = $, this.stopImmediatePropagation = $, this.preventDefault = $, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY
      }
      return t
    }(),
    Lm = {
      mousedown: function (t) {
        t = De(this.dom, t), this.__mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t)
      },
      mousemove: function (t) {
        t = De(this.dom, t);
        var e = this.__mayPointerCapture;
        !e || t.zrX === e[0] && t.zrY === e[1] || this.__togglePointerCapture(!0), this.trigger("mousemove", t)
      },
      mouseup: function (t) {
        t = De(this.dom, t), this.__togglePointerCapture(!1), this.trigger("mouseup", t)
      },
      mouseout: function (t) {
        t = De(this.dom, t);
        var e = t.toElement || t.relatedTarget;
        ti(this, e) || (this.__pointerCapturing && (t.zrEventControl = "no_globalout"), this.trigger("mouseout", t))
      },
      wheel: function (t) {
        Am = !0, t = De(this.dom, t), this.trigger("mousewheel", t)
      },
      mousewheel: function (t) {
        Am || (t = De(this.dom, t), this.trigger("mousewheel", t))
      },
      touchstart: function (t) {
        t = De(this.dom, t), Qn(t), this.__lastTouchMoment = new Date, this.handler.processGesture(t, "start"), Lm.mousemove.call(this, t), Lm.mousedown.call(this, t)
      },
      touchmove: function (t) {
        t = De(this.dom, t), Qn(t), this.handler.processGesture(t, "change"), Lm.mousemove.call(this, t)
      },
      touchend: function (t) {
        t = De(this.dom, t), Qn(t), this.handler.processGesture(t, "end"), Lm.mouseup.call(this, t), +new Date - +this.__lastTouchMoment < Cm && Lm.click.call(this, t)
      },
      pointerdown: function (t) {
        Lm.mousedown.call(this, t)
      },
      pointermove: function (t) {
        Kn(t) || Lm.mousemove.call(this, t)
      },
      pointerup: function (t) {
        Lm.mouseup.call(this, t)
      },
      pointerout: function (t) {
        Kn(t) || Lm.mouseout.call(this, t)
      }
    };
  v(["click", "dblclick", "contextmenu"], function (t) {
    Lm[t] = function (e) {
      e = De(this.dom, e), this.trigger(t, e)
    }
  });
  var Om = {
      pointermove: function (t) {
        Kn(t) || Om.mousemove.call(this, t)
      },
      pointerup: function (t) {
        Om.mouseup.call(this, t)
      },
      mousemove: function (t) {
        this.trigger("mousemove", t)
      },
      mouseup: function (t) {
        var e = this.__pointerCapturing;
        this.__togglePointerCapture(!1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t))
      }
    },
    Rm = function () {
      function t(t, e) {
        this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e
      }
      return t
    }(),
    Bm = function (t) {
      function n(e, n) {
        var i = t.call(this) || this;
        return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new Rm(e, Lm), Im && (i._globalHandlerScope = new Rm(document, Om)), ei(i, i._localHandlerScope), i
      }
      return e(n, t), n.prototype.dispose = function () {
        ri(this._localHandlerScope), Im && ri(this._globalHandlerScope)
      }, n.prototype.setCursor = function (t) {
        this.dom.style && (this.dom.style.cursor = t || "default")
      }, n.prototype.__togglePointerCapture = function (t) {
        if (this.__mayPointerCapture = null, Im && +this.__pointerCapturing ^ +t) {
          this.__pointerCapturing = t;
          var e = this._globalHandlerScope;
          t ? ni(this, e) : ri(e)
        }
      }, n
    }(Sy),
    zm = 1;
  Gv.hasGlobalWindow && (zm = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
  var Em = zm,
    Nm = .4,
    Fm = "#333",
    Hm = "#ccc",
    Vm = "#eee",
    Wm = (Object.freeze || Object)({
      create: oi,
      identity: ai,
      copy: si,
      mul: li,
      translate: ui,
      rotate: hi,
      scale: ci,
      invert: pi,
      clone: fi
    }),
    Gm = ai,
    Um = 5e-5,
    Xm = [],
    Ym = [],
    qm = oi(),
    jm = Math.abs,
    Zm = function () {
      function t() {}
      return t.prototype.getLocalTransform = function (e) {
        return t.getLocalTransform(this, e)
      }, t.prototype.setPosition = function (t) {
        this.x = t[0], this.y = t[1]
      }, t.prototype.setScale = function (t) {
        this.scaleX = t[0], this.scaleY = t[1]
      }, t.prototype.setSkew = function (t) {
        this.skewX = t[0], this.skewY = t[1]
      }, t.prototype.setOrigin = function (t) {
        this.originX = t[0], this.originY = t[1]
      }, t.prototype.needLocalTransform = function () {
        return di(this.rotation) || di(this.x) || di(this.y) || di(this.scaleX - 1) || di(this.scaleY - 1) || di(this.skewX) || di(this.skewY)
      }, t.prototype.updateTransform = function () {
        var t = this.parent && this.parent.transform,
          e = this.needLocalTransform(),
          n = this.transform;
        return e || t ? (n = n || oi(), e ? this.getLocalTransform(n) : Gm(n), t && (e ? li(n, t, n) : si(n, t)), this.transform = n, void this._resolveGlobalScaleRatio(n)) : void(n && Gm(n))
      }, t.prototype._resolveGlobalScaleRatio = function (t) {
        var e = this.globalScaleRatio;
        if (null != e && 1 !== e) {
          this.getGlobalScale(Xm);
          var n = Xm[0] < 0 ? -1 : 1,
            i = Xm[1] < 0 ? -1 : 1,
            r = ((Xm[0] - n) * e + n) / Xm[0] || 0,
            o = ((Xm[1] - i) * e + i) / Xm[1] || 0;
          t[0] *= r, t[1] *= r, t[2] *= o, t[3] *= o
        }
        this.invTransform = this.invTransform || oi(), pi(this.invTransform, t)
      }, t.prototype.getComputedTransform = function () {
        for (var t = this, e = []; t;) e.push(t), t = t.parent;
        for (; t = e.pop();) t.updateTransform();
        return this.transform
      }, t.prototype.setLocalTransform = function (t) {
        if (t) {
          var e = t[0] * t[0] + t[1] * t[1],
            n = t[2] * t[2] + t[3] * t[3],
            i = Math.atan2(t[1], t[0]),
            r = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
          n = Math.sqrt(n) * Math.cos(r), e = Math.sqrt(e), this.skewX = r, this.skewY = 0, this.rotation = -i, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = n, this.originX = 0, this.originY = 0
        }
      }, t.prototype.decomposeTransform = function () {
        if (this.transform) {
          var t = this.parent,
            e = this.transform;
          t && t.transform && (li(Ym, t.invTransform, e), e = Ym);
          var n = this.originX,
            i = this.originY;
          (n || i) && (qm[4] = n, qm[5] = i, li(Ym, e, qm), Ym[4] -= n, Ym[5] -= i, e = Ym), this.setLocalTransform(e)
        }
      }, t.prototype.getGlobalScale = function (t) {
        var e = this.transform;
        return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
      }, t.prototype.transformCoordToLocal = function (t, e) {
        var n = [t, e],
          i = this.invTransform;
        return i && ve(n, n, i), n
      }, t.prototype.transformCoordToGlobal = function (t, e) {
        var n = [t, e],
          i = this.transform;
        return i && ve(n, n, i), n
      }, t.prototype.getLineScale = function () {
        var t = this.transform;
        return t && jm(t[0] - 1) > 1e-10 && jm(t[3] - 1) > 1e-10 ? Math.sqrt(jm(t[0] * t[3] - t[2] * t[1])) : 1
      }, t.prototype.copyTransform = function (t) {
        gi(this, t)
      }, t.getLocalTransform = function (t, e) {
        e = e || [];
        var n = t.originX || 0,
          i = t.originY || 0,
          r = t.scaleX,
          o = t.scaleY,
          a = t.anchorX,
          s = t.anchorY,
          l = t.rotation || 0,
          u = t.x,
          h = t.y,
          c = t.skewX ? Math.tan(t.skewX) : 0,
          p = t.skewY ? Math.tan(-t.skewY) : 0;
        if (n || i || a || s) {
          var f = n + a,
            d = i + s;
          e[4] = -f * r - c * d * o, e[5] = -d * o - p * f * r
        } else e[4] = e[5] = 0;
        return e[0] = r, e[3] = o, e[1] = p * r, e[2] = c * o, l && hi(e, e, l), e[4] += n + u, e[5] += i + h, e
      }, t.initDefaultProps = function () {
        var e = t.prototype;
        e.scaleX = e.scaleY = e.globalScaleRatio = 1, e.x = e.y = e.originX = e.originY = e.skewX = e.skewY = e.rotation = e.anchorX = e.anchorY = 0
      }(), t
    }(),
    Km = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"],
    $m = function () {
      function t(t, e) {
        this.x = t || 0, this.y = e || 0
      }
      return t.prototype.copy = function (t) {
        return this.x = t.x, this.y = t.y, this
      }, t.prototype.clone = function () {
        return new t(this.x, this.y)
      }, t.prototype.set = function (t, e) {
        return this.x = t, this.y = e, this
      }, t.prototype.equal = function (t) {
        return t.x === this.x && t.y === this.y
      }, t.prototype.add = function (t) {
        return this.x += t.x, this.y += t.y, this
      }, t.prototype.scale = function (t) {
        this.x *= t, this.y *= t
      }, t.prototype.scaleAndAdd = function (t, e) {
        this.x += t.x * e, this.y += t.y * e
      }, t.prototype.sub = function (t) {
        return this.x -= t.x, this.y -= t.y, this
      }, t.prototype.dot = function (t) {
        return this.x * t.x + this.y * t.y
      }, t.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      }, t.prototype.lenSquare = function () {
        return this.x * this.x + this.y * this.y
      }, t.prototype.normalize = function () {
        var t = this.len();
        return this.x /= t, this.y /= t, this
      }, t.prototype.distance = function (t) {
        var e = this.x - t.x,
          n = this.y - t.y;
        return Math.sqrt(e * e + n * n)
      }, t.prototype.distanceSquare = function (t) {
        var e = this.x - t.x,
          n = this.y - t.y;
        return e * e + n * n
      }, t.prototype.negate = function () {
        return this.x = -this.x, this.y = -this.y, this
      }, t.prototype.transform = function (t) {
        if (t) {
          var e = this.x,
            n = this.y;
          return this.x = t[0] * e + t[2] * n + t[4], this.y = t[1] * e + t[3] * n + t[5], this
        }
      }, t.prototype.toArray = function (t) {
        return t[0] = this.x, t[1] = this.y, t
      }, t.prototype.fromArray = function (t) {
        this.x = t[0], this.y = t[1]
      }, t.set = function (t, e, n) {
        t.x = e, t.y = n
      }, t.copy = function (t, e) {
        t.x = e.x, t.y = e.y
      }, t.len = function (t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
      }, t.lenSquare = function (t) {
        return t.x * t.x + t.y * t.y
      }, t.dot = function (t, e) {
        return t.x * e.x + t.y * e.y
      }, t.add = function (t, e, n) {
        t.x = e.x + n.x, t.y = e.y + n.y
      }, t.sub = function (t, e, n) {
        t.x = e.x - n.x, t.y = e.y - n.y
      }, t.scale = function (t, e, n) {
        t.x = e.x * n, t.y = e.y * n
      }, t.scaleAndAdd = function (t, e, n, i) {
        t.x = e.x + n.x * i, t.y = e.y + n.y * i
      }, t.lerp = function (t, e, n, i) {
        var r = 1 - i;
        t.x = r * e.x + i * n.x, t.y = r * e.y + i * n.y
      }, t
    }(),
    Qm = Math.min,
    Jm = Math.max,
    t_ = new $m,
    e_ = new $m,
    n_ = new $m,
    i_ = new $m,
    r_ = new $m,
    o_ = new $m,
    a_ = function () {
      function t(t, e, n, i) {
        0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
      }
      return t.prototype.union = function (t) {
        var e = Qm(t.x, this.x),
          n = Qm(t.y, this.y);
        this.width = isFinite(this.x) && isFinite(this.width) ? Jm(t.x + t.width, this.x + this.width) - e : t.width, this.height = isFinite(this.y) && isFinite(this.height) ? Jm(t.y + t.height, this.y + this.height) - n : t.height, this.x = e, this.y = n
      }, t.prototype.applyTransform = function (e) {
        t.applyTransform(this, this, e)
      }, t.prototype.calculateTransform = function (t) {
        var e = this,
          n = t.width / e.width,
          i = t.height / e.height,
          r = oi();
        return ui(r, r, [-e.x, -e.y]), ci(r, r, [n, i]), ui(r, r, [t.x, t.y]), r
      }, t.prototype.intersect = function (e, n) {
        if (!e) return !1;
        e instanceof t || (e = t.create(e));
        var i = this,
          r = i.x,
          o = i.x + i.width,
          a = i.y,
          s = i.y + i.height,
          l = e.x,
          u = e.x + e.width,
          h = e.y,
          c = e.y + e.height,
          p = !(l > o || r > u || h > s || a > c);
        if (n) {
          var f = 1 / 0,
            d = 0,
            g = Math.abs(o - l),
            v = Math.abs(u - r),
            y = Math.abs(s - h),
            m = Math.abs(c - a),
            _ = Math.min(g, v),
            x = Math.min(y, m);
          l > o || r > u ? _ > d && (d = _, v > g ? $m.set(o_, -g, 0) : $m.set(o_, v, 0)) : f > _ && (f = _, v > g ? $m.set(r_, g, 0) : $m.set(r_, -v, 0)), h > s || a > c ? x > d && (d = x, m > y ? $m.set(o_, 0, -y) : $m.set(o_, 0, m)) : f > _ && (f = _, m > y ? $m.set(r_, 0, y) : $m.set(r_, 0, -m))
        }
        return n && $m.copy(n, p ? r_ : o_), p
      }, t.prototype.contain = function (t, e) {
        var n = this;
        return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
      }, t.prototype.clone = function () {
        return new t(this.x, this.y, this.width, this.height)
      }, t.prototype.copy = function (e) {
        t.copy(this, e)
      }, t.prototype.plain = function () {
        return {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height
        }
      }, t.prototype.isFinite = function () {
        return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height)
      }, t.prototype.isZero = function () {
        return 0 === this.width || 0 === this.height
      }, t.create = function (e) {
        return new t(e.x, e.y, e.width, e.height)
      }, t.copy = function (t, e) {
        t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height
      }, t.applyTransform = function (e, n, i) {
        if (!i) return void(e !== n && t.copy(e, n));
        if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
          var r = i[0],
            o = i[3],
            a = i[4],
            s = i[5];
          return e.x = n.x * r + a, e.y = n.y * o + s, e.width = n.width * r, e.height = n.height * o, e.width < 0 && (e.x += e.width, e.width = -e.width), void(e.height < 0 && (e.y += e.height, e.height = -e.height))
        }
        t_.x = n_.x = n.x, t_.y = i_.y = n.y, e_.x = i_.x = n.x + n.width, e_.y = n_.y = n.y + n.height, t_.transform(i), i_.transform(i), e_.transform(i), n_.transform(i), e.x = Qm(t_.x, e_.x, n_.x, i_.x), e.y = Qm(t_.y, e_.y, n_.y, i_.y);
        var l = Jm(t_.x, e_.x, n_.x, i_.x),
          u = Jm(t_.y, e_.y, n_.y, i_.y);
        e.width = l - e.x, e.height = u - e.y
      }, t
    }(),
    s_ = {},
    l_ = "__zr_normal__",
    u_ = Km.concat(["ignore"]),
    h_ = m(Km, function (t, e) {
      return t[e] = !0, t
    }, {
      ignore: !1
    }),
    c_ = {},
    p_ = new a_(0, 0, 0, 0),
    f_ = function () {
      function t(t) {
        this.id = o(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t)
      }
      return t.prototype._init = function (t) {
        this.attr(t)
      }, t.prototype.drift = function (t, e) {
        switch (this.draggable) {
          case "horizontal":
            e = 0;
            break;
          case "vertical":
            t = 0
        }
        var n = this.transform;
        n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.markRedraw()
      }, t.prototype.beforeUpdate = function () {}, t.prototype.afterUpdate = function () {}, t.prototype.update = function () {
        this.updateTransform(), this.__dirty && this.updateInnerText()
      }, t.prototype.updateInnerText = function (t) {
        var e = this._textContent;
        if (e && (!e.ignore || t)) {
          this.textConfig || (this.textConfig = {});
          var n = this.textConfig,
            i = n.local,
            r = e.innerTransformable,
            o = void 0,
            a = void 0,
            s = !1;
          r.parent = i ? this : null;
          var l = !1;
          if (r.copyTransform(e), null != n.position) {
            var u = p_;
            u.copy(n.layoutRect ? n.layoutRect : this.getBoundingRect()), i || u.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(c_, n, u) : Si(c_, n, u), r.x = c_.x, r.y = c_.y, o = c_.align, a = c_.verticalAlign;
            var h = n.origin;
            if (h && null != n.rotation) {
              var c = void 0,
                p = void 0;
              "center" === h ? (c = .5 * u.width, p = .5 * u.height) : (c = bi(h[0], u.width), p = bi(h[1], u.height)), l = !0, r.originX = -r.x + c + (i ? 0 : u.x), r.originY = -r.y + p + (i ? 0 : u.y)
            }
          }
          null != n.rotation && (r.rotation = n.rotation);
          var f = n.offset;
          f && (r.x += f[0], r.y += f[1], l || (r.originX = -f[0], r.originY = -f[1]));
          var d = null == n.inside ? "string" == typeof n.position && n.position.indexOf("inside") >= 0 : n.inside,
            g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}),
            v = void 0,
            y = void 0,
            m = void 0;
          d && this.canBeInsideText() ? (v = n.insideFill, y = n.insideStroke, (null == v || "auto" === v) && (v = this.getInsideTextFill()), (null == y || "auto" === y) && (y = this.getInsideTextStroke(v), m = !0)) : (v = n.outsideFill, y = n.outsideStroke, (null == v || "auto" === v) && (v = this.getOutsideFill()), (null == y || "auto" === y) && (y = this.getOutsideStroke(v), m = !0)), v = v || "#000", (v !== g.fill || y !== g.stroke || m !== g.autoStroke || o !== g.align || a !== g.verticalAlign) && (s = !0, g.fill = v, g.stroke = y, g.autoStroke = m, g.align = o, g.verticalAlign = a, e.setDefaultTextStyle(g)), e.__dirty |= Vy, s && e.dirtyStyle(!0)
        }
      }, t.prototype.canBeInsideText = function () {
        return !0
      }, t.prototype.getInsideTextFill = function () {
        return "#fff"
      }, t.prototype.getInsideTextStroke = function () {
        return "#000"
      }, t.prototype.getOutsideFill = function () {
        return this.__zr && this.__zr.isDarkMode() ? Hm : Fm
      }, t.prototype.getOutsideStroke = function () {
        var t = this.__zr && this.__zr.getBackgroundColor(),
          e = "string" == typeof t && Sn(t);
        e || (e = [255, 255, 255, 1]);
        for (var n = e[3], i = this.__zr.isDarkMode(), r = 0; 3 > r; r++) e[r] = e[r] * n + (i ? 0 : 255) * (1 - n);
        return e[3] = 1, Ln(e, "rgba")
      }, t.prototype.traverse = function () {}, t.prototype.attrKV = function (t, e) {
        "textConfig" === t ? this.setTextConfig(e) : "textContent" === t ? this.setTextContent(e) : "clipPath" === t ? this.setClipPath(e) : "extra" === t ? (this.extra = this.extra || {}, h(this.extra, e)) : this[t] = e
      }, t.prototype.hide = function () {
        this.ignore = !0, this.markRedraw()
      }, t.prototype.show = function () {
        this.ignore = !1, this.markRedraw()
      }, t.prototype.attr = function (t, e) {
        if ("string" == typeof t) this.attrKV(t, e);
        else if (D(t))
          for (var n = t, i = w(n), r = 0; r < i.length; r++) {
            var o = i[r];
            this.attrKV(o, t[o])
          }
        return this.markRedraw(), this
      }, t.prototype.saveCurrentToNormalState = function (t) {
        this._innerSaveToNormal(t);
        for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
          var i = this.animators[n],
            r = i.__fromStateTransition;
          if (!(i.getLoop() || r && r !== l_)) {
            var o = i.targetName,
              a = o ? e[o] : e;
            i.saveTo(a)
          }
        }
      }, t.prototype._innerSaveToNormal = function (t) {
        var e = this._normalState;
        e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, u_)
      }, t.prototype._savePrimaryToNormal = function (t, e, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i];
          null == t[r] || r in e || (e[r] = this[r])
        }
      }, t.prototype.hasState = function () {
        return this.currentStates.length > 0
      }, t.prototype.getState = function (t) {
        return this.states[t]
      }, t.prototype.ensureState = function (t) {
        var e = this.states;
        return e[t] || (e[t] = {}), e[t]
      }, t.prototype.clearStates = function (t) {
        this.useState(l_, !1, t)
      }, t.prototype.useState = function (t, e, n, i) {
        var r = t === l_,
          o = this.hasState();
        if (o || !r) {
          var s = this.currentStates,
            l = this.stateTransition;
          if (!(p(s, t) >= 0) || !e && 1 !== s.length) {
            var u;
            if (this.stateProxy && !r && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !r) return void a("State " + t + " not exists.");
            r || this.saveCurrentToNormalState(u);
            var h = !!(u && u.hoverLayer || i);
            h && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, u, this._normalState, e, !n && !this.__inHover && l && l.duration > 0, l);
            var c = this._textContent,
              f = this._textGuide;
            return c && c.useState(t, e, n, h), f && f.useState(t, e, n, h), r ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !h && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Vy), u
          }
        }
      }, t.prototype.useStates = function (t, e, n) {
        if (t.length) {
          var i = [],
            r = this.currentStates,
            o = t.length,
            a = o === r.length;
          if (a)
            for (var s = 0; o > s; s++)
              if (t[s] !== r[s]) {
                a = !1;
                break
              } if (a) return;
          for (var s = 0; o > s; s++) {
            var l = t[s],
              u = void 0;
            this.stateProxy && (u = this.stateProxy(l, t)), u || (u = this.states[l]), u && i.push(u)
          }
          var h = i[o - 1],
            c = !!(h && h.hoverLayer || n);
          c && this._toggleHoverLayerFlag(!0);
          var p = this._mergeStates(i),
            f = this.stateTransition;
          this.saveCurrentToNormalState(p), this._applyStateObj(t.join(","), p, this._normalState, !1, !e && !this.__inHover && f && f.duration > 0, f);
          var d = this._textContent,
            g = this._textGuide;
          d && d.useStates(t, e, c), g && g.useStates(t, e, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Vy)
        } else this.clearStates()
      }, t.prototype._updateAnimationTargets = function () {
        for (var t = 0; t < this.animators.length; t++) {
          var e = this.animators[t];
          e.targetName && e.changeTarget(this[e.targetName])
        }
      }, t.prototype.removeState = function (t) {
        var e = p(this.currentStates, t);
        if (e >= 0) {
          var n = this.currentStates.slice();
          n.splice(e, 1), this.useStates(n)
        }
      }, t.prototype.replaceState = function (t, e, n) {
        var i = this.currentStates.slice(),
          r = p(i, t),
          o = p(i, e) >= 0;
        r >= 0 ? o ? i.splice(r, 1) : i[r] = e : n && !o && i.push(e), this.useStates(i)
      }, t.prototype.toggleState = function (t, e) {
        e ? this.useState(t, !0) : this.removeState(t)
      }, t.prototype._mergeStates = function (t) {
        for (var e, n = {}, i = 0; i < t.length; i++) {
          var r = t[i];
          h(n, r), r.textConfig && (e = e || {}, h(e, r.textConfig))
        }
        return e && (n.textConfig = e), n
      }, t.prototype._applyStateObj = function (t, e, n, i, r, o) {
        var a = !(e && i);
        e && e.textConfig ? (this.textConfig = h({}, i ? this.textConfig : n.textConfig), h(this.textConfig, e.textConfig)) : a && n.textConfig && (this.textConfig = n.textConfig);
        for (var s = {}, l = !1, u = 0; u < u_.length; u++) {
          var c = u_[u],
            p = r && h_[c];
          e && null != e[c] ? p ? (l = !0, s[c] = e[c]) : this[c] = e[c] : a && null != n[c] && (p ? (l = !0, s[c] = n[c]) : this[c] = n[c])
        }
        if (!r)
          for (var u = 0; u < this.animators.length; u++) {
            var f = this.animators[u],
              d = f.targetName;
            f.getLoop() || f.__changeFinalValue(d ? (e || n)[d] : e || n)
          }
        l && this._transitionState(t, s, o)
      }, t.prototype._attachComponent = function (t) {
        if ((!t.__zr || t.__hostTarget) && t !== this) {
          var e = this.__zr;
          e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this
        }
      }, t.prototype._detachComponent = function (t) {
        t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null
      }, t.prototype.getClipPath = function () {
        return this._clipPath
      }, t.prototype.setClipPath = function (t) {
        this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw()
      }, t.prototype.removeClipPath = function () {
        var t = this._clipPath;
        t && (this._detachComponent(t), this._clipPath = null, this.markRedraw())
      }, t.prototype.getTextContent = function () {
        return this._textContent
      }, t.prototype.setTextContent = function (t) {
        var e = this._textContent;
        e !== t && (e && e !== t && this.removeTextContent(), t.innerTransformable = new Zm, this._attachComponent(t), this._textContent = t, this.markRedraw())
      }, t.prototype.setTextConfig = function (t) {
        this.textConfig || (this.textConfig = {}), h(this.textConfig, t), this.markRedraw()
      }, t.prototype.removeTextConfig = function () {
        this.textConfig = null, this.markRedraw()
      }, t.prototype.removeTextContent = function () {
        var t = this._textContent;
        t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw())
      }, t.prototype.getTextGuideLine = function () {
        return this._textGuide
      }, t.prototype.setTextGuideLine = function (t) {
        this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw()
      }, t.prototype.removeTextGuideLine = function () {
        var t = this._textGuide;
        t && (this._detachComponent(t), this._textGuide = null, this.markRedraw())
      }, t.prototype.markRedraw = function () {
        this.__dirty |= Vy;
        var t = this.__zr;
        t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw()
      }, t.prototype.dirty = function () {
        this.markRedraw()
      }, t.prototype._toggleHoverLayerFlag = function (t) {
        this.__inHover = t;
        var e = this._textContent,
          n = this._textGuide;
        e && (e.__inHover = t), n && (n.__inHover = t)
      }, t.prototype.addSelfToZr = function (t) {
        if (this.__zr !== t) {
          this.__zr = t;
          var e = this.animators;
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
          this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t)
        }
      }, t.prototype.removeSelfFromZr = function (t) {
        if (this.__zr) {
          this.__zr = null;
          var e = this.animators;
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
          this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t)
        }
      }, t.prototype.animate = function (t, e, n) {
        var i = t ? this[t] : this,
          r = new Mm(i, e, n);
        return t && (r.targetName = t), this.addAnimator(r, t), r
      }, t.prototype.addAnimator = function (t, e) {
        var n = this.__zr,
          i = this;
        t.during(function () {
          i.updateDuringAnimation(e)
        }).done(function () {
          var e = i.animators,
            n = p(e, t);
          n >= 0 && e.splice(n, 1)
        }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp()
      }, t.prototype.updateDuringAnimation = function () {
        this.markRedraw()
      }, t.prototype.stopAnimation = function (t, e) {
        for (var n = this.animators, i = n.length, r = [], o = 0; i > o; o++) {
          var a = n[o];
          t && t !== a.scope ? r.push(a) : a.stop(e)
        }
        return this.animators = r, this
      }, t.prototype.animateTo = function (t, e, n) {
        Mi(this, t, e, n)
      }, t.prototype.animateFrom = function (t, e, n) {
        Mi(this, t, e, n, !0)
      }, t.prototype._transitionState = function (t, e, n, i) {
        for (var r = Mi(this, e, n, i), o = 0; o < r.length; o++) r[o].__fromStateTransition = t
      }, t.prototype.getBoundingRect = function () {
        return null
      }, t.prototype.getPaintRect = function () {
        return null
      }, t.initDefaultProps = function () {
        function e(t, e, i, r) {
          function o(t, e) {
            Object.defineProperty(e, 0, {
              get: function () {
                return t[i]
              },
              set: function (e) {
                t[i] = e
              }
            }), Object.defineProperty(e, 1, {
              get: function () {
                return t[r]
              },
              set: function (e) {
                t[r] = e
              }
            })
          }
          Object.defineProperty(n, t, {
            get: function () {
              if (!this[e]) {
                var t = this[e] = [];
                o(this, t)
              }
              return this[e]
            },
            set: function (t) {
              this[i] = t[0], this[r] = t[1], this[e] = t, o(this, t)
            }
          })
        }
        var n = t.prototype;
        n.type = "element", n.name = "", n.ignore = n.silent = n.isGroup = n.draggable = n.dragging = n.ignoreClip = n.__inHover = !1, n.__dirty = Vy, Object.defineProperty && (e("position", "_legacyPos", "x", "y"), e("scale", "_legacyScale", "scaleX", "scaleY"), e("origin", "_legacyOrigin", "originX", "originY"))
      }(), t
    }();
  d(f_, Sy), d(f_, Zm);
  var d_ = function (t) {
    function n(e) {
      var n = t.call(this) || this;
      return n.isGroup = !0, n._children = [], n.attr(e), n
    }
    return e(n, t), n.prototype.childrenRef = function () {
      return this._children
    }, n.prototype.children = function () {
      return this._children.slice()
    }, n.prototype.childAt = function (t) {
      return this._children[t]
    }, n.prototype.childOfName = function (t) {
      for (var e = this._children, n = 0; n < e.length; n++)
        if (e[n].name === t) return e[n]
    }, n.prototype.childCount = function () {
      return this._children.length
    }, n.prototype.add = function (t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
    }, n.prototype.addBefore = function (t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var n = this._children,
          i = n.indexOf(e);
        i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
      }
      return this
    }, n.prototype.replace = function (t, e) {
      var n = p(this._children, t);
      return n >= 0 && this.replaceAt(e, n), this
    }, n.prototype.replaceAt = function (t, e) {
      var n = this._children,
        i = n[e];
      if (t && t !== this && t.parent !== this && t !== i) {
        n[e] = t, i.parent = null;
        var r = this.__zr;
        r && i.removeSelfFromZr(r), this._doAdd(t)
      }
      return this
    }, n.prototype._doAdd = function (t) {
      t.parent && t.parent.remove(t), t.parent = this;
      var e = this.__zr;
      e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh()
    }, n.prototype.remove = function (t) {
      var e = this.__zr,
        n = this._children,
        i = p(n, t);
      return 0 > i ? this : (n.splice(i, 1), t.parent = null, e && t.removeSelfFromZr(e), e && e.refresh(), this)
    }, n.prototype.removeAll = function () {
      for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
        var i = t[n];
        e && i.removeSelfFromZr(e), i.parent = null
      }
      return t.length = 0, this
    }, n.prototype.eachChild = function (t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];
        t.call(e, r, i)
      }
      return this
    }, n.prototype.traverse = function (t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n],
          r = t.call(e, i);
        i.isGroup && !r && i.traverse(t, e)
      }
      return this
    }, n.prototype.addSelfToZr = function (e) {
      t.prototype.addSelfToZr.call(this, e);
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];
        i.addSelfToZr(e)
      }
    }, n.prototype.removeSelfFromZr = function (e) {
      t.prototype.removeSelfFromZr.call(this, e);
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];
        i.removeSelfFromZr(e)
      }
    }, n.prototype.getBoundingRect = function (t) {
      for (var e = new a_(0, 0, 0, 0), n = t || this._children, i = [], r = null, o = 0; o < n.length; o++) {
        var a = n[o];
        if (!a.ignore && !a.invisible) {
          var s = a.getBoundingRect(),
            l = a.getLocalTransform(i);
          l ? (a_.applyTransform(e, s, l), r = r || e.clone(), r.union(e)) : (r = r || s.clone(), r.union(s))
        }
      }
      return r || e
    }, n
  }(f_);
  d_.prototype.type = "group";
  var g_ = {},
    v_ = {},
    y_ = function () {
      function t(t, e, n) {
        var i = this;
        this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
        var r = new Xy,
          o = n.renderer || "canvas";
        g_[o] || (o = w(g_)[0]), n.useDirtyRect = null == n.useDirtyRect ? !1 : n.useDirtyRect;
        var a = new g_[o](e, r, n, t),
          s = n.ssr || a.ssrOnly;
        this.storage = r, this.painter = a;
        var l = Gv.node || Gv.worker || s ? null : new Bm(a.getViewportRoot(), a.root);
        this.handler = new Ey(r, a, l, a.root), this.animation = new Tm({
          stage: {
            update: s ? null : function () {
              return i._flush(!0)
            }
          }
        }), s || this.animation.start()
      }
      return t.prototype.add = function (t) {
        t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh())
      }, t.prototype.remove = function (t) {
        t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh())
      }, t.prototype.configLayer = function (t, e) {
        this.painter.configLayer && this.painter.configLayer(t, e), this.refresh()
      }, t.prototype.setBackgroundColor = function (t) {
        this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = Li(t)
      }, t.prototype.getBackgroundColor = function () {
        return this._backgroundColor
      }, t.prototype.setDarkMode = function (t) {
        this._darkMode = t
      }, t.prototype.isDarkMode = function () {
        return this._darkMode
      }, t.prototype.refreshImmediately = function (t) {
        t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
      }, t.prototype.refresh = function () {
        this._needsRefresh = !0, this.animation.start()
      }, t.prototype.flush = function () {
        this._flush(!1)
      }, t.prototype._flush = function (t) {
        var e, n = Zn();
        this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
        var i = Zn();
        e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
          elapsedTime: i - n
        })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop())
      }, t.prototype.setSleepAfterStill = function (t) {
        this._sleepAfterStill = t
      }, t.prototype.wakeUp = function () {
        this.animation.start(), this._stillFrameAccum = 0
      }, t.prototype.refreshHover = function () {
        this._needsRefreshHover = !0
      }, t.prototype.refreshHoverImmediately = function () {
        this._needsRefreshHover = !1, this.painter.refreshHover && "canvas" === this.painter.getType() && this.painter.refreshHover()
      }, t.prototype.resize = function (t) {
        t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
      }, t.prototype.clearAnimation = function () {
        this.animation.clear()
      }, t.prototype.getWidth = function () {
        return this.painter.getWidth()
      }, t.prototype.getHeight = function () {
        return this.painter.getHeight()
      }, t.prototype.setCursorStyle = function (t) {
        this.handler.setCursorStyle(t)
      }, t.prototype.findHover = function (t, e) {
        return this.handler.findHover(t, e)
      }, t.prototype.on = function (t, e, n) {
        return this.handler.on(t, e, n), this
      }, t.prototype.off = function (t, e) {
        this.handler.off(t, e)
      }, t.prototype.trigger = function (t, e) {
        this.handler.trigger(t, e)
      }, t.prototype.clear = function () {
        for (var t = this.storage.getRoots(), e = 0; e < t.length; e++) t[e] instanceof d_ && t[e].removeSelfFromZr(this);
        this.storage.delAllRoots(), this.painter.clear()
      }, t.prototype.dispose = function () {
        this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Pi(this.id)
      }, t
    }(),
    m_ = "5.3.2",
    __ = (Object.freeze || Object)({
      init: Oi,
      dispose: Ri,
      disposeAll: Bi,
      getInstance: zi,
      registerPainter: Ei,
      version: m_
    }),
    x_ = 1e-4,
    w_ = 20,
    b_ = 9007199254740991,
    S_ = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
    M_ = ("undefined" != typeof console && console.warn && console.log, "series\x00"),
    T_ = "\x00_ec_\x00",
    C_ = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
    I_ = rr(),
    k_ = {
      useDefault: !0,
      enableAll: !1,
      enableNone: !1
    },
    D_ = ".",
    A_ = "___EC__COMPONENT__CONTAINER___",
    P_ = "___EC__EXTENDED_CLASS___",
    L_ = Math.round(10 * Math.random()),
    O_ = [
      ["fill", "color"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["opacity"],
      ["shadowColor"]
    ],
    R_ = Yr(O_),
    B_ = function () {
      function t() {}
      return t.prototype.getAreaStyle = function (t, e) {
        return R_(this, t, e)
      }, t
    }(),
    z_ = new sm(50),
    E_ = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
    N_ = function () {
      function t() {}
      return t
    }(),
    F_ = function () {
      function t(t) {
        this.tokens = [], t && (this.tokens = t)
      }
      return t
    }(),
    H_ = function () {
      function t() {
        this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = []
      }
      return t
    }(),
    V_ = m(",&?/;] ".split(""), function (t, e) {
      return t[e] = !0, t
    }, {}),
    W_ = "__zr_style_" + Math.round(10 * Math.random()),
    G_ = {
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: "#000",
      opacity: 1,
      blend: "source-over"
    },
    U_ = {
      style: {
        shadowBlur: !0,
        shadowOffsetX: !0,
        shadowOffsetY: !0,
        shadowColor: !0,
        opacity: !0
      }
    };
  G_[W_] = !0;
  var X_ = ["z", "z2", "invisible"],
    Y_ = ["invisible"],
    q_ = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype._init = function (e) {
        for (var n = w(e), i = 0; i < n.length; i++) {
          var r = n[i];
          "style" === r ? this.useStyle(e[r]) : t.prototype.attrKV.call(this, r, e[r])
        }
        this.style || this.useStyle({})
      }, n.prototype.beforeBrush = function () {}, n.prototype.afterBrush = function () {}, n.prototype.innerBeforeBrush = function () {}, n.prototype.innerAfterBrush = function () {}, n.prototype.shouldBePainted = function (t, e, n, i) {
        var r = this.transform;
        if (this.ignore || this.invisible || 0 === this.style.opacity || this.culling && so(this, t, e) || r && !r[0] && !r[3]) return !1;
        if (n && this.__clipPaths)
          for (var o = 0; o < this.__clipPaths.length; ++o)
            if (this.__clipPaths[o].isZeroArea()) return !1;
        if (i && this.parent)
          for (var a = this.parent; a;) {
            if (a.ignore) return !1;
            a = a.parent
          }
        return !0
      }, n.prototype.contain = function (t, e) {
        return this.rectContain(t, e)
      }, n.prototype.traverse = function (t, e) {
        t.call(e, this)
      }, n.prototype.rectContain = function (t, e) {
        var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect();
        return i.contain(n[0], n[1])
      }, n.prototype.getPaintRect = function () {
        var t = this._paintRect;
        if (!this._paintRect || this.__dirty) {
          var e = this.transform,
            n = this.getBoundingRect(),
            i = this.style,
            r = i.shadowBlur || 0,
            o = i.shadowOffsetX || 0,
            a = i.shadowOffsetY || 0;
          t = this._paintRect || (this._paintRect = new a_(0, 0, 0, 0)), e ? a_.applyTransform(t, n, e) : t.copy(n), (r || o || a) && (t.width += 2 * r + Math.abs(o), t.height += 2 * r + Math.abs(a), t.x = Math.min(t.x, t.x + o - r), t.y = Math.min(t.y, t.y + a - r));
          var s = this.dirtyRectTolerance;
          t.isZero() || (t.x = Math.floor(t.x - s), t.y = Math.floor(t.y - s), t.width = Math.ceil(t.width + 1 + 2 * s), t.height = Math.ceil(t.height + 1 + 2 * s))
        }
        return t
      }, n.prototype.setPrevPaintRect = function (t) {
        t ? (this._prevPaintRect = this._prevPaintRect || new a_(0, 0, 0, 0), this._prevPaintRect.copy(t)) : this._prevPaintRect = null
      }, n.prototype.getPrevPaintRect = function () {
        return this._prevPaintRect
      }, n.prototype.animateStyle = function (t) {
        return this.animate("style", t)
      }, n.prototype.updateDuringAnimation = function (t) {
        "style" === t ? this.dirtyStyle() : this.markRedraw()
      }, n.prototype.attrKV = function (e, n) {
        "style" !== e ? t.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n)
      }, n.prototype.setStyle = function (t, e) {
        return "string" == typeof t ? this.style[t] = e : h(this.style, t), this.dirtyStyle(), this
      }, n.prototype.dirtyStyle = function (t) {
        t || this.markRedraw(), this.__dirty |= Wy, this._rect && (this._rect = null)
      }, n.prototype.dirty = function () {
        this.dirtyStyle()
      }, n.prototype.styleChanged = function () {
        return !!(this.__dirty & Wy)
      }, n.prototype.styleUpdated = function () {
        this.__dirty &= ~Wy
      }, n.prototype.createStyle = function (t) {
        return j(G_, t)
      }, n.prototype.useStyle = function (t) {
        t[W_] || (t = this.createStyle(t)), this.__inHover ? this.__hoverStyle = t : this.style = t, this.dirtyStyle()
      }, n.prototype.isStyleObject = function (t) {
        return t[W_]
      }, n.prototype._innerSaveToNormal = function (e) {
        t.prototype._innerSaveToNormal.call(this, e);
        var n = this._normalState;
        e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, n, X_)
      }, n.prototype._applyStateObj = function (e, n, i, r, o, a) {
        t.prototype._applyStateObj.call(this, e, n, i, r, o, a);
        var s, l = !(n && r);
        if (n && n.style ? o ? r ? s = n.style : (s = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(s, n.style)) : (s = this._mergeStyle(this.createStyle(), r ? this.style : i.style), this._mergeStyle(s, n.style)) : l && (s = i.style), s)
          if (o) {
            var u = this.style;
            if (this.style = this.createStyle(l ? {} : u), l)
              for (var h = w(u), c = 0; c < h.length; c++) {
                var p = h[c];
                p in s && (s[p] = s[p], this.style[p] = u[p])
              }
            for (var f = w(s), c = 0; c < f.length; c++) {
              var p = f[c];
              this.style[p] = this.style[p]
            }
            this._transitionState(e, {
              style: s
            }, a, this.getAnimationStyleProps())
          } else this.useStyle(s);
        for (var d = this.__inHover ? Y_ : X_, c = 0; c < d.length; c++) {
          var p = d[c];
          n && null != n[p] ? this[p] = n[p] : l && null != i[p] && (this[p] = i[p])
        }
      }, n.prototype._mergeStates = function (e) {
        for (var n, i = t.prototype._mergeStates.call(this, e), r = 0; r < e.length; r++) {
          var o = e[r];
          o.style && (n = n || {}, this._mergeStyle(n, o.style))
        }
        return n && (i.style = n), i
      }, n.prototype._mergeStyle = function (t, e) {
        return h(t, e), t
      }, n.prototype.getAnimationStyleProps = function () {
        return U_
      }, n.initDefaultProps = function () {
        var t = n.prototype;
        t.type = "displayable", t.invisible = !1, t.z = 0, t.z2 = 0, t.zlevel = 0, t.culling = !1, t.cursor = "pointer", t.rectHover = !1, t.incremental = !1, t._rect = null, t.dirtyRectTolerance = 0, t.__dirty = Vy | Wy
      }(), n
    }(f_),
    j_ = new a_(0, 0, 0, 0),
    Z_ = new a_(0, 0, 0, 0),
    K_ = Math.min,
    $_ = Math.max,
    Q_ = Math.sin,
    J_ = Math.cos,
    tx = 2 * Math.PI,
    ex = Q(),
    nx = Q(),
    ix = Q(),
    rx = [],
    ox = [],
    ax = {
      M: 1,
      L: 2,
      C: 3,
      Q: 4,
      A: 5,
      Z: 6,
      R: 7
    },
    sx = [],
    lx = [],
    ux = [],
    hx = [],
    cx = [],
    px = [],
    fx = Math.min,
    dx = Math.max,
    gx = Math.cos,
    vx = Math.sin,
    yx = Math.abs,
    mx = Math.PI,
    _x = 2 * mx,
    xx = "undefined" != typeof Float32Array,
    bx = [],
    Sx = function () {
      function t(t) {
        this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = [])
      }
      return t.prototype.increaseVersion = function () {
        this._version++
      }, t.prototype.getVersion = function () {
        return this._version
      }, t.prototype.setScale = function (t, e, n) {
        n = n || 0, n > 0 && (this._ux = yx(n / Em / t) || 0, this._uy = yx(n / Em / e) || 0)
      }, t.prototype.setDPR = function (t) {
        this.dpr = t
      }, t.prototype.setContext = function (t) {
        this._ctx = t
      }, t.prototype.getContext = function () {
        return this._ctx
      }, t.prototype.beginPath = function () {
        return this._ctx && this._ctx.beginPath(), this.reset(), this
      }, t.prototype.reset = function () {
        this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++
      }, t.prototype.moveTo = function (t, e) {
        return this._drawPendingPt(), this.addData(ax.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
      }, t.prototype.lineTo = function (t, e) {
        var n = yx(t - this._xi),
          i = yx(e - this._yi),
          r = n > this._ux || i > this._uy;
        if (this.addData(ax.L, t, e), this._ctx && r && this._ctx.lineTo(t, e), r) this._xi = t, this._yi = e, this._pendingPtDist = 0;
        else {
          var o = n * n + i * i;
          o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o)
        }
        return this
      }, t.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
        return this._drawPendingPt(), this.addData(ax.C, t, e, n, i, r, o), this._ctx && this._ctx.bezierCurveTo(t, e, n, i, r, o), this._xi = r, this._yi = o, this
      }, t.prototype.quadraticCurveTo = function (t, e, n, i) {
        return this._drawPendingPt(), this.addData(ax.Q, t, e, n, i), this._ctx && this._ctx.quadraticCurveTo(t, e, n, i), this._xi = n, this._yi = i, this
      }, t.prototype.arc = function (t, e, n, i, r, o) {
        this._drawPendingPt(), bx[0] = i, bx[1] = r, fo(bx, o), i = bx[0], r = bx[1];
        var a = r - i;
        return this.addData(ax.A, t, e, n, n, i, a, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, o), this._xi = gx(r) * n + t, this._yi = vx(r) * n + e, this
      }, t.prototype.arcTo = function (t, e, n, i, r) {
        return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, r), this
      }, t.prototype.rect = function (t, e, n, i) {
        return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(ax.R, t, e, n, i), this
      }, t.prototype.closePath = function () {
        this._drawPendingPt(), this.addData(ax.Z);
        var t = this._ctx,
          e = this._x0,
          n = this._y0;
        return t && t.closePath(), this._xi = e, this._yi = n, this
      }, t.prototype.fill = function (t) {
        t && t.fill(), this.toStatic()
      }, t.prototype.stroke = function (t) {
        t && t.stroke(), this.toStatic()
      }, t.prototype.len = function () {
        return this._len
      }, t.prototype.setData = function (t) {
        var e = t.length;
        this.data && this.data.length === e || !xx || (this.data = new Float32Array(e));
        for (var n = 0; e > n; n++) this.data[n] = t[n];
        this._len = e
      }, t.prototype.appendPath = function (t) {
        t instanceof Array || (t = [t]);
        for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
        xx && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
        for (var r = 0; e > r; r++)
          for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a];
        this._len = i
      }, t.prototype.addData = function () {
        if (this._saveData) {
          var t = this.data;
          this._len + arguments.length > t.length && (this._expandData(), t = this.data);
          for (var e = 0; e < arguments.length; e++) t[this._len++] = arguments[e]
        }
      }, t.prototype._drawPendingPt = function () {
        this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0)
      }, t.prototype._expandData = function () {
        if (!(this.data instanceof Array)) {
          for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
          this.data = t
        }
      }, t.prototype.toStatic = function () {
        if (this._saveData) {
          this._drawPendingPt();
          var t = this.data;
          t instanceof Array && (t.length = this._len, xx && this._len > 11 && (this.data = new Float32Array(t)))
        }
      }, t.prototype.getBoundingRect = function () {
        ux[0] = ux[1] = cx[0] = cx[1] = Number.MAX_VALUE, hx[0] = hx[1] = px[0] = px[1] = -Number.MAX_VALUE;
        var t, e = this.data,
          n = 0,
          i = 0,
          r = 0,
          o = 0;
        for (t = 0; t < this._len;) {
          var a = e[t++],
            s = 1 === t;
          switch (s && (n = e[t], i = e[t + 1], r = n, o = i), a) {
            case ax.M:
              n = r = e[t++], i = o = e[t++], cx[0] = r, cx[1] = o, px[0] = r, px[1] = o;
              break;
            case ax.L:
              lo(n, i, e[t], e[t + 1], cx, px), n = e[t++], i = e[t++];
              break;
            case ax.C:
              uo(n, i, e[t++], e[t++], e[t++], e[t++], e[t], e[t + 1], cx, px), n = e[t++], i = e[t++];
              break;
            case ax.Q:
              ho(n, i, e[t++], e[t++], e[t], e[t + 1], cx, px), n = e[t++], i = e[t++];
              break;
            case ax.A:
              var l = e[t++],
                u = e[t++],
                h = e[t++],
                c = e[t++],
                p = e[t++],
                f = e[t++] + p;
              t += 1;
              var d = !e[t++];
              s && (r = gx(p) * h + l, o = vx(p) * c + u), co(l, u, h, c, p, f, d, cx, px), n = gx(f) * h + l, i = vx(f) * c + u;
              break;
            case ax.R:
              r = n = e[t++], o = i = e[t++];
              var g = e[t++],
                v = e[t++];
              lo(r, o, r + g, o + v, cx, px);
              break;
            case ax.Z:
              n = r, i = o
          }
          ye(ux, ux, cx), me(hx, hx, px)
        }
        return 0 === t && (ux[0] = ux[1] = hx[0] = hx[1] = 0), new a_(ux[0], ux[1], hx[0] - ux[0], hx[1] - ux[1])
      }, t.prototype._calculateLength = function () {
        var t = this.data,
          e = this._len,
          n = this._ux,
          i = this._uy,
          r = 0,
          o = 0,
          a = 0,
          s = 0;
        this._pathSegLen || (this._pathSegLen = []);
        for (var l = this._pathSegLen, u = 0, h = 0, c = 0; e > c;) {
          var p = t[c++],
            f = 1 === c;
          f && (r = t[c], o = t[c + 1], a = r, s = o);
          var d = -1;
          switch (p) {
            case ax.M:
              r = a = t[c++], o = s = t[c++];
              break;
            case ax.L:
              var g = t[c++],
                v = t[c++],
                y = g - r,
                m = v - o;
              (yx(y) > n || yx(m) > i || c === e - 1) && (d = Math.sqrt(y * y + m * m), r = g, o = v);
              break;
            case ax.C:
              var _ = t[c++],
                x = t[c++],
                g = t[c++],
                v = t[c++],
                w = t[c++],
                b = t[c++];
              d = rn(r, o, _, x, g, v, w, b, 10), r = w, o = b;
              break;
            case ax.Q:
              var _ = t[c++],
                x = t[c++],
                g = t[c++],
                v = t[c++];
              d = cn(r, o, _, x, g, v, 10), r = g, o = v;
              break;
            case ax.A:
              var S = t[c++],
                M = t[c++],
                T = t[c++],
                C = t[c++],
                I = t[c++],
                k = t[c++],
                D = k + I;
              c += 1; {
                !t[c++]
              }
              f && (a = gx(I) * T + S, s = vx(I) * C + M), d = dx(T, C) * fx(_x, Math.abs(k)), r = gx(D) * T + S, o = vx(D) * C + M;
              break;
            case ax.R:
              a = r = t[c++], s = o = t[c++];
              var A = t[c++],
                P = t[c++];
              d = 2 * A + 2 * P;
              break;
            case ax.Z:
              var y = a - r,
                m = s - o;
              d = Math.sqrt(y * y + m * m), r = a, o = s
          }
          d >= 0 && (l[h++] = d, u += d)
        }
        return this._pathLen = u, u
      }, t.prototype.rebuildPath = function (t, e) {
        var n, i, r, o, a, s, l, u, h, c, p, f = this.data,
          d = this._ux,
          g = this._uy,
          v = this._len,
          y = 1 > e,
          m = 0,
          _ = 0,
          x = 0;
        if (!y || (this._pathSegLen || this._calculateLength(), l = this._pathSegLen, u = this._pathLen, h = e * u)) t: for (var w = 0; v > w;) {
          var b = f[w++],
            S = 1 === w;
          switch (S && (r = f[w], o = f[w + 1], n = r, i = o), b !== ax.L && x > 0 && (t.lineTo(c, p), x = 0), b) {
            case ax.M:
              n = r = f[w++], i = o = f[w++], t.moveTo(r, o);
              break;
            case ax.L:
              a = f[w++], s = f[w++];
              var M = yx(a - r),
                T = yx(s - o);
              if (M > d || T > g) {
                if (y) {
                  var C = l[_++];
                  if (m + C > h) {
                    var I = (h - m) / C;
                    t.lineTo(r * (1 - I) + a * I, o * (1 - I) + s * I);
                    break t
                  }
                  m += C
                }
                t.lineTo(a, s), r = a, o = s, x = 0
              } else {
                var k = M * M + T * T;
                k > x && (c = a, p = s, x = k)
              }
              break;
            case ax.C:
              var D = f[w++],
                A = f[w++],
                P = f[w++],
                L = f[w++],
                O = f[w++],
                R = f[w++];
              if (y) {
                var C = l[_++];
                if (m + C > h) {
                  var I = (h - m) / C;
                  en(r, D, P, O, I, sx), en(o, A, L, R, I, lx), t.bezierCurveTo(sx[1], lx[1], sx[2], lx[2], sx[3], lx[3]);
                  break t
                }
                m += C
              }
              t.bezierCurveTo(D, A, P, L, O, R), r = O, o = R;
              break;
            case ax.Q:
              var D = f[w++],
                A = f[w++],
                P = f[w++],
                L = f[w++];
              if (y) {
                var C = l[_++];
                if (m + C > h) {
                  var I = (h - m) / C;
                  un(r, D, P, I, sx), un(o, A, L, I, lx), t.quadraticCurveTo(sx[1], lx[1], sx[2], lx[2]);
                  break t
                }
                m += C
              }
              t.quadraticCurveTo(D, A, P, L), r = P, o = L;
              break;
            case ax.A:
              var B = f[w++],
                z = f[w++],
                E = f[w++],
                N = f[w++],
                F = f[w++],
                H = f[w++],
                V = f[w++],
                W = !f[w++],
                G = E > N ? E : N,
                U = yx(E - N) > .001,
                X = F + H,
                Y = !1;
              if (y) {
                var C = l[_++];
                m + C > h && (X = F + H * (h - m) / C, Y = !0), m += C
              }
              if (U && t.ellipse ? t.ellipse(B, z, E, N, V, F, X, W) : t.arc(B, z, G, F, X, W), Y) break t;
              S && (n = gx(F) * E + B, i = vx(F) * N + z), r = gx(X) * E + B, o = vx(X) * N + z;
              break;
            case ax.R:
              n = r = f[w], i = o = f[w + 1], a = f[w++], s = f[w++];
              var q = f[w++],
                j = f[w++];
              if (y) {
                var C = l[_++];
                if (m + C > h) {
                  var Z = h - m;
                  t.moveTo(a, s), t.lineTo(a + fx(Z, q), s), Z -= q, Z > 0 && t.lineTo(a + q, s + fx(Z, j)), Z -= j, Z > 0 && t.lineTo(a + dx(q - Z, 0), s + j), Z -= q, Z > 0 && t.lineTo(a, s + dx(j - Z, 0));
                  break t
                }
                m += C
              }
              t.rect(a, s, q, j);
              break;
            case ax.Z:
              if (y) {
                var C = l[_++];
                if (m + C > h) {
                  var I = (h - m) / C;
                  t.lineTo(r * (1 - I) + n * I, o * (1 - I) + i * I);
                  break t
                }
                m += C
              }
              t.closePath(), r = n, o = i
          }
        }
      }, t.prototype.clone = function () {
        var e = new t,
          n = this.data;
        return e.data = n.slice ? n.slice() : Array.prototype.slice.call(n), e._len = this._len, e
      }, t.CMD = ax, t.initDefaultProps = function () {
        var e = t.prototype;
        e._saveData = !0, e._ux = 0, e._uy = 0, e._pendingPtDist = 0, e._version = 0
      }(), t
    }(),
    Mx = 2 * Math.PI,
    Tx = 2 * Math.PI,
    Cx = Sx.CMD,
    Ix = 2 * Math.PI,
    kx = 1e-4,
    Dx = [-1, -1, -1],
    Ax = [-1, -1],
    Px = c({
      fill: "#000",
      stroke: null,
      strokePercent: 1,
      fillOpacity: 1,
      strokeOpacity: 1,
      lineDashOffset: 0,
      lineWidth: 1,
      lineCap: "butt",
      miterLimit: 10,
      strokeNoScale: !1,
      strokeFirst: !1
    }, G_),
    Lx = {
      style: c({
        fill: !0,
        stroke: !0,
        strokePercent: !0,
        fillOpacity: !0,
        strokeOpacity: !0,
        lineDashOffset: !0,
        lineWidth: !0,
        miterLimit: !0
      }, U_.style)
    },
    Ox = Km.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]),
    Rx = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.update = function () {
        var e = this;
        t.prototype.update.call(this);
        var i = this.style;
        if (i.decal) {
          var r = this._decalEl = this._decalEl || new n;
          r.buildPath === n.prototype.buildPath && (r.buildPath = function (t) {
            e.buildPath(t, e.shape)
          }), r.silent = !0;
          var o = r.style;
          for (var a in i) o[a] !== i[a] && (o[a] = i[a]);
          o.fill = i.fill ? i.decal : null, o.decal = null, o.shadowColor = null, i.strokeFirst && (o.stroke = null);
          for (var s = 0; s < Ox.length; ++s) r[Ox[s]] = this[Ox[s]];
          r.__dirty |= Vy
        } else this._decalEl && (this._decalEl = null)
      }, n.prototype.getDecalElement = function () {
        return this._decalEl
      }, n.prototype._init = function (e) {
        var n = w(e);
        this.shape = this.getDefaultShape();
        var i = this.getDefaultStyle();
        i && this.useStyle(i);
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            a = e[o];
          "style" === o ? this.style ? h(this.style, a) : this.useStyle(a) : "shape" === o ? h(this.shape, a) : t.prototype.attrKV.call(this, o, a)
        }
        this.style || this.useStyle({})
      }, n.prototype.getDefaultStyle = function () {
        return null
      }, n.prototype.getDefaultShape = function () {
        return {}
      }, n.prototype.canBeInsideText = function () {
        return this.hasFill()
      }, n.prototype.getInsideTextFill = function () {
        var t = this.style.fill;
        if ("none" !== t) {
          if (C(t)) {
            var e = On(t, 0);
            return e > .5 ? Fm : e > .2 ? Vm : Hm
          }
          if (t) return Hm
        }
        return Fm
      }, n.prototype.getInsideTextStroke = function (t) {
        var e = this.style.fill;
        if (C(e)) {
          var n = this.__zr,
            i = !(!n || !n.isDarkMode()),
            r = On(t, 0) < Nm;
          if (i === r) return e
        }
      }, n.prototype.buildPath = function () {}, n.prototype.pathUpdated = function () {
        this.__dirty &= ~Gy
      }, n.prototype.getUpdatedPathProxy = function (t) {
        return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, t), this.path
      }, n.prototype.createPathProxy = function () {
        this.path = new Sx(!1)
      }, n.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke;
        return !(null == e || "none" === e || !(t.lineWidth > 0))
      }, n.prototype.hasFill = function () {
        var t = this.style,
          e = t.fill;
        return null != e && "none" !== e
      }, n.prototype.getBoundingRect = function () {
        var t = this._rect,
          e = this.style,
          n = !t;
        if (n) {
          var i = !1;
          this.path || (i = !0, this.createPathProxy());
          var r = this.path;
          (i || this.__dirty & Gy) && (r.beginPath(), this.buildPath(r, this.shape, !1), this.pathUpdated()), t = r.getBoundingRect()
        }
        if (this._rect = t, this.hasStroke() && this.path && this.path.len() > 0) {
          var o = this._rectStroke || (this._rectStroke = t.clone());
          if (this.__dirty || n) {
            o.copy(t);
            var a = e.strokeNoScale ? this.getLineScale() : 1,
              s = e.lineWidth;
            if (!this.hasFill()) {
              var l = this.strokeContainThreshold;
              s = Math.max(s, null == l ? 4 : l)
            }
            a > 1e-10 && (o.width += s / a, o.height += s / a, o.x -= s / a / 2, o.y -= s / a / 2)
          }
          return o
        }
        return t
      }, n.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect(),
          r = this.style;
        if (t = n[0], e = n[1], i.contain(t, e)) {
          var o = this.path;
          if (this.hasStroke()) {
            var a = r.lineWidth,
              s = r.strokeNoScale ? this.getLineScale() : 1;
            if (s > 1e-10 && (this.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), ko(o, a / s, t, e))) return !0
          }
          if (this.hasFill()) return Io(o, t, e)
        }
        return !1
      }, n.prototype.dirtyShape = function () {
        this.__dirty |= Gy, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw()
      }, n.prototype.dirty = function () {
        this.dirtyStyle(), this.dirtyShape()
      }, n.prototype.animateShape = function (t) {
        return this.animate("shape", t)
      }, n.prototype.updateDuringAnimation = function (t) {
        "style" === t ? this.dirtyStyle() : "shape" === t ? this.dirtyShape() : this.markRedraw()
      }, n.prototype.attrKV = function (e, n) {
        "shape" === e ? this.setShape(n) : t.prototype.attrKV.call(this, e, n)
      }, n.prototype.setShape = function (t, e) {
        var n = this.shape;
        return n || (n = this.shape = {}), "string" == typeof t ? n[t] = e : h(n, t), this.dirtyShape(), this
      }, n.prototype.shapeChanged = function () {
        return !!(this.__dirty & Gy)
      }, n.prototype.createStyle = function (t) {
        return j(Px, t)
      }, n.prototype._innerSaveToNormal = function (e) {
        t.prototype._innerSaveToNormal.call(this, e);
        var n = this._normalState;
        e.shape && !n.shape && (n.shape = h({}, this.shape))
      }, n.prototype._applyStateObj = function (e, n, i, r, o, a) {
        t.prototype._applyStateObj.call(this, e, n, i, r, o, a);
        var s, l = !(n && r);
        if (n && n.shape ? o ? r ? s = n.shape : (s = h({}, i.shape), h(s, n.shape)) : (s = h({}, r ? this.shape : i.shape), h(s, n.shape)) : l && (s = i.shape), s)
          if (o) {
            this.shape = h({}, this.shape);
            for (var u = {}, c = w(s), p = 0; p < c.length; p++) {
              var f = c[p];
              "object" == typeof s[f] ? this.shape[f] = s[f] : u[f] = s[f]
            }
            this._transitionState(e, {
              shape: u
            }, a)
          } else this.shape = s, this.dirtyShape()
      }, n.prototype._mergeStates = function (e) {
        for (var n, i = t.prototype._mergeStates.call(this, e), r = 0; r < e.length; r++) {
          var o = e[r];
          o.shape && (n = n || {}, this._mergeStyle(n, o.shape))
        }
        return n && (i.shape = n), i
      }, n.prototype.getAnimationStyleProps = function () {
        return Lx
      }, n.prototype.isZeroArea = function () {
        return !1
      }, n.extend = function (t) {
        var i = function (n) {
          function i(e) {
            var i = n.call(this, e) || this;
            return t.init && t.init.call(i, e), i
          }
          return e(i, n), i.prototype.getDefaultStyle = function () {
            return s(t.style)
          }, i.prototype.getDefaultShape = function () {
            return s(t.shape)
          }, i
        }(n);
        for (var r in t) "function" == typeof t[r] && (i.prototype[r] = t[r]);
        return i
      }, n.initDefaultProps = function () {
        var t = n.prototype;
        t.type = "path", t.strokeContainThreshold = 5, t.segmentIgnoreThreshold = 0, t.subPixelOptimize = !1, t.autoBatch = !1, t.__dirty = Vy | Wy | Gy
      }(), n
    }(q_),
    Bx = c({
      strokeFirst: !0,
      font: Yv,
      x: 0,
      y: 0,
      textAlign: "left",
      textBaseline: "top",
      miterLimit: 2
    }, Px),
    zx = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this
      }
      return e(n, t), n.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke;
        return null != e && "none" !== e && t.lineWidth > 0
      }, n.prototype.hasFill = function () {
        var t = this.style,
          e = t.fill;
        return null != e && "none" !== e
      }, n.prototype.createStyle = function (t) {
        return j(Bx, t)
      }, n.prototype.setBoundingRect = function (t) {
        this._rect = t
      }, n.prototype.getBoundingRect = function () {
        var t = this.style;
        if (!this._rect) {
          var e = t.text;
          null != e ? e += "" : e = "";
          var n = mi(e, t.font, t.textAlign, t.textBaseline);
          if (n.x += t.x || 0, n.y += t.y || 0, this.hasStroke()) {
            var i = t.lineWidth;
            n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
          }
          this._rect = n
        }
        return this._rect
      }, n.initDefaultProps = function () {
        var t = n.prototype;
        t.dirtyRectTolerance = 10
      }(), n
    }(q_);
  zx.prototype.type = "tspan";
  var Ex = c({
      x: 0,
      y: 0
    }, G_),
    Nx = {
      style: c({
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        sx: !0,
        sy: !0,
        sWidth: !0,
        sHeight: !0
      }, U_.style)
    },
    Fx = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this
      }
      return e(n, t), n.prototype.createStyle = function (t) {
        return j(Ex, t)
      }, n.prototype._getSize = function (t) {
        var e = this.style,
          n = e[t];
        if (null != n) return n;
        var i = Do(e.image) ? e.image : this.__image;
        if (!i) return 0;
        var r = "width" === t ? "height" : "width",
          o = e[r];
        return null == o ? i[t] : i[t] / i[r] * o
      }, n.prototype.getWidth = function () {
        return this._getSize("width")
      }, n.prototype.getHeight = function () {
        return this._getSize("height")
      }, n.prototype.getAnimationStyleProps = function () {
        return Nx
      }, n.prototype.getBoundingRect = function () {
        var t = this.style;
        return this._rect || (this._rect = new a_(t.x || 0, t.y || 0, this.getWidth(), this.getHeight())), this._rect
      }, n
    }(q_);
  Fx.prototype.type = "image";
  var Hx = Math.round,
    Vx = function () {
      function t() {
        this.x = 0, this.y = 0, this.width = 0, this.height = 0
      }
      return t
    }(),
    Wx = {},
    Gx = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.getDefaultShape = function () {
        return new Vx
      }, n.prototype.buildPath = function (t, e) {
        var n, i, r, o;
        if (this.subPixelOptimize) {
          var a = Lo(Wx, e, this.style);
          n = a.x, i = a.y, r = a.width, o = a.height, a.r = e.r, e = a
        } else n = e.x, i = e.y, r = e.width, o = e.height;
        e.r ? Ao(t, e) : t.rect(n, i, r, o)
      }, n.prototype.isZeroArea = function () {
        return !this.shape.width || !this.shape.height
      }, n
    }(Rx);
  Gx.prototype.type = "rect";
  var Ux = {
      fill: "#000"
    },
    Xx = 2,
    Yx = {
      style: c({
        fill: !0,
        stroke: !0,
        fillOpacity: !0,
        strokeOpacity: !0,
        lineWidth: !0,
        fontSize: !0,
        lineHeight: !0,
        width: !0,
        height: !0,
        textShadowColor: !0,
        textShadowBlur: !0,
        textShadowOffsetX: !0,
        textShadowOffsetY: !0,
        backgroundColor: !0,
        padding: !0,
        borderColor: !0,
        borderWidth: !0,
        borderRadius: !0
      }, U_.style)
    },
    qx = function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return n.type = "text", n._children = [], n._defaultStyle = Ux, n.attr(e), n
      }
      return e(n, t), n.prototype.childrenRef = function () {
        return this._children
      }, n.prototype.update = function () {
        t.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
        for (var e = 0; e < this._children.length; e++) {
          var n = this._children[e];
          n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible
        }
      }, n.prototype.updateTransform = function () {
        var e = this.innerTransformable;
        e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : t.prototype.updateTransform.call(this)
      }, n.prototype.getLocalTransform = function (e) {
        var n = this.innerTransformable;
        return n ? n.getLocalTransform(e) : t.prototype.getLocalTransform.call(this, e)
      }, n.prototype.getComputedTransform = function () {
        return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), t.prototype.getComputedTransform.call(this)
      }, n.prototype._updateSubTexts = function () {
        this._childCursor = 0, Eo(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated()
      }, n.prototype.addSelfToZr = function (e) {
        t.prototype.addSelfToZr.call(this, e);
        for (var n = 0; n < this._children.length; n++) this._children[n].__zr = e
      }, n.prototype.removeSelfFromZr = function (e) {
        t.prototype.removeSelfFromZr.call(this, e);
        for (var n = 0; n < this._children.length; n++) this._children[n].__zr = null
      }, n.prototype.getBoundingRect = function () {
        if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
          for (var t = new a_(0, 0, 0, 0), e = this._children, n = [], i = null, r = 0; r < e.length; r++) {
            var o = e[r],
              a = o.getBoundingRect(),
              s = o.getLocalTransform(n);
            s ? (t.copy(a), t.applyTransform(s), i = i || t.clone(), i.union(t)) : (i = i || a.clone(), i.union(a))
          }
          this._rect = i || t
        }
        return this._rect
      }, n.prototype.setDefaultTextStyle = function (t) {
        this._defaultStyle = t || Ux
      }, n.prototype.setTextContent = function () {}, n.prototype._mergeStyle = function (t, e) {
        if (!e) return t;
        var n = e.rich,
          i = t.rich || n && {};
        return h(t, e), n && i ? (this._mergeRich(i, n), t.rich = i) : i && (t.rich = i), t
      }, n.prototype._mergeRich = function (t, e) {
        for (var n = w(e), i = 0; i < n.length; i++) {
          var r = n[i];
          t[r] = t[r] || {}, h(t[r], e[r])
        }
      }, n.prototype.getAnimationStyleProps = function () {
        return Yx
      }, n.prototype._getOrCreateChild = function (t) {
        var e = this._children[this._childCursor];
        return e && e instanceof t || (e = new t), this._children[this._childCursor++] = e, e.__zr = this.__zr, e.parent = this, e
      }, n.prototype._updatePlainTexts = function () {
        var t = this.style,
          e = t.font || Yv,
          n = t.padding,
          i = Wo(t),
          r = eo(i, t),
          o = Go(t),
          a = !!t.backgroundColor,
          s = r.outerHeight,
          l = r.outerWidth,
          u = r.contentWidth,
          h = r.lines,
          c = r.lineHeight,
          p = this._defaultStyle,
          f = t.x || 0,
          d = t.y || 0,
          g = t.align || p.align || "left",
          v = t.verticalAlign || p.verticalAlign || "top",
          y = f,
          m = xi(d, r.contentHeight, v);
        if (o || n) {
          var _ = _i(f, l, g),
            x = xi(d, s, v);
          o && this._renderBackground(t, t, _, x, l, s)
        }
        m += c / 2, n && (y = Vo(f, g, n), "top" === v ? m += n[0] : "bottom" === v && (m -= n[2]));
        for (var w = 0, b = !1, S = (Ho("fill" in t ? t.fill : (b = !0, p.fill))), M = (Fo("stroke" in t ? t.stroke : a || p.autoStroke && !b ? null : (w = Xx, p.stroke))), T = t.textShadowBlur > 0, C = null != t.width && ("truncate" === t.overflow || "break" === t.overflow || "breakAll" === t.overflow), I = r.calculatedLineHeight, k = 0; k < h.length; k++) {
          var D = this._getOrCreateChild(zx),
            A = D.createStyle();
          D.useStyle(A), A.text = h[k], A.x = y, A.y = m, g && (A.textAlign = g), A.textBaseline = "middle", A.opacity = t.opacity, A.strokeFirst = !0, T && (A.shadowBlur = t.textShadowBlur || 0, A.shadowColor = t.textShadowColor || "transparent", A.shadowOffsetX = t.textShadowOffsetX || 0, A.shadowOffsetY = t.textShadowOffsetY || 0), A.stroke = M, A.fill = S, M && (A.lineWidth = t.lineWidth || w, A.lineDash = t.lineDash, A.lineDashOffset = t.lineDashOffset || 0), A.font = e, Bo(A, t), m += c, C && D.setBoundingRect(new a_(_i(A.x, t.width, A.textAlign), xi(A.y, I, A.textBaseline), u, I))
        }
      }, n.prototype._updateRichTexts = function () {
        var t = this.style,
          e = Wo(t),
          n = no(e, t),
          i = n.width,
          r = n.outerWidth,
          o = n.outerHeight,
          a = t.padding,
          s = t.x || 0,
          l = t.y || 0,
          u = this._defaultStyle,
          h = t.align || u.align,
          c = t.verticalAlign || u.verticalAlign,
          p = _i(s, r, h),
          f = xi(l, o, c),
          d = p,
          g = f;
        a && (d += a[3], g += a[0]);
        var v = d + i;
        Go(t) && this._renderBackground(t, t, p, f, r, o);
        for (var y = !!t.backgroundColor, m = 0; m < n.lines.length; m++) {
          for (var _ = n.lines[m], x = _.tokens, w = x.length, b = _.lineHeight, S = _.width, M = 0, T = d, C = v, I = w - 1, k = void 0; w > M && (k = x[M], !k.align || "left" === k.align);) this._placeToken(k, t, b, g, T, "left", y), S -= k.width, T += k.width, M++;
          for (; I >= 0 && (k = x[I], "right" === k.align);) this._placeToken(k, t, b, g, C, "right", y), S -= k.width, C -= k.width, I--;
          for (T += (i - (T - d) - (v - C) - S) / 2; I >= M;) k = x[M], this._placeToken(k, t, b, g, T + k.width / 2, "center", y), T += k.width, M++;
          g += b
        }
      }, n.prototype._placeToken = function (t, e, n, i, r, o, a) {
        var s = e.rich[t.styleName] || {};
        s.text = t.text;
        var l = t.verticalAlign,
          u = i + n / 2;
        "top" === l ? u = i + t.height / 2 : "bottom" === l && (u = i + n - t.height / 2);
        var h = !t.isLineHolder && Go(s);
        h && this._renderBackground(s, e, "right" === o ? r - t.width : "center" === o ? r - t.width / 2 : r, u - t.height / 2, t.width, t.height);
        var c = !!s.backgroundColor,
          p = t.textPadding;
        p && (r = Vo(r, o, p), u -= t.height / 2 - p[0] - t.innerHeight / 2);
        var f = this._getOrCreateChild(zx),
          d = f.createStyle();
        f.useStyle(d);
        var g = this._defaultStyle,
          v = !1,
          y = 0,
          m = Ho("fill" in s ? s.fill : "fill" in e ? e.fill : (v = !0, g.fill)),
          _ = Fo("stroke" in s ? s.stroke : "stroke" in e ? e.stroke : c || a || g.autoStroke && !v ? null : (y = Xx, g.stroke)),
          x = s.textShadowBlur > 0 || e.textShadowBlur > 0;
        d.text = t.text, d.x = r, d.y = u, x && (d.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0, d.shadowColor = s.textShadowColor || e.textShadowColor || "transparent", d.shadowOffsetX = s.textShadowOffsetX || e.textShadowOffsetX || 0, d.shadowOffsetY = s.textShadowOffsetY || e.textShadowOffsetY || 0), d.textAlign = o, d.textBaseline = "middle", d.font = t.font || Yv, d.opacity = F(s.opacity, e.opacity, 1), Bo(d, s), _ && (d.lineWidth = F(s.lineWidth, e.lineWidth, y), d.lineDash = N(s.lineDash, e.lineDash), d.lineDashOffset = e.lineDashOffset || 0, d.stroke = _), m && (d.fill = m);
        var w = t.contentWidth,
          b = t.contentHeight;
        f.setBoundingRect(new a_(_i(d.x, w, d.textAlign), xi(d.y, b, d.textBaseline), w, b))
      }, n.prototype._renderBackground = function (t, e, n, i, r, o) {
        var a, s, l = t.backgroundColor,
          u = t.borderWidth,
          h = t.borderColor,
          c = l && l.image,
          p = l && !c,
          f = t.borderRadius,
          d = this;
        if (p || t.lineHeight || u && h) {
          a = this._getOrCreateChild(Gx), a.useStyle(a.createStyle()), a.style.fill = null;
          var g = a.shape;
          g.x = n, g.y = i, g.width = r, g.height = o, g.r = f, a.dirtyShape()
        }
        if (p) {
          var v = a.style;
          v.fill = l || null, v.fillOpacity = N(t.fillOpacity, 1)
        } else if (c) {
          s = this._getOrCreateChild(Fx), s.onload = function () {
            d.dirtyStyle()
          };
          var y = s.style;
          y.image = l.image, y.x = n, y.y = i, y.width = r, y.height = o
        }
        if (u && h) {
          var v = a.style;
          v.lineWidth = u, v.stroke = h, v.strokeOpacity = N(t.strokeOpacity, 1), v.lineDash = t.borderDash, v.lineDashOffset = t.borderDashOffset || 0, a.strokeContainThreshold = 0, a.hasFill() && a.hasStroke() && (v.strokeFirst = !0, v.lineWidth *= 2)
        }
        var m = (a || s).style;
        m.shadowBlur = t.shadowBlur || 0, m.shadowColor = t.shadowColor || "transparent", m.shadowOffsetX = t.shadowOffsetX || 0, m.shadowOffsetY = t.shadowOffsetY || 0, m.opacity = F(t.opacity, e.opacity, 1)
      }, n.makeFont = function (t) {
        var e = "";
        return zo(t) && (e = [t.fontStyle, t.fontWeight, Ro(t.fontSize), t.fontFamily || "sans-serif"].join(" ")), e && G(e) || t.textFont || t.font
      }, n
    }(q_),
    jx = {
      left: !0,
      right: 1,
      center: 1
    },
    Zx = {
      top: 1,
      bottom: 1,
      middle: 1
    },
    Kx = ["fontStyle", "fontWeight", "fontSize", "fontFamily"],
    $x = kr(),
    Qx = function (t, e, n, i) {
      if (i) {
        var r = $x(i);
        r.dataIndex = n, r.dataType = e, r.seriesIndex = t, "group" === i.type && i.traverse(function (i) {
          var r = $x(i);
          r.seriesIndex = t, r.dataIndex = n, r.dataType = e
        })
      }
    },
    Jx = 1,
    tw = {},
    ew = kr(),
    nw = kr(),
    iw = 0,
    rw = 1,
    ow = 2,
    aw = ["emphasis", "blur", "select"],
    sw = ["normal", "emphasis", "blur", "select"],
    lw = 10,
    uw = 9,
    hw = "highlight",
    cw = "downplay",
    pw = "select",
    fw = "unselect",
    dw = "toggleSelect",
    gw = new sm(100),
    vw = ["emphasis", "blur", "select"],
    yw = {
      itemStyle: "getItemStyle",
      lineStyle: "getLineStyle",
      areaStyle: "getAreaStyle"
    },
    mw = Sx.CMD,
    _w = [
      [],
      [],
      []
    ],
    xw = Math.sqrt,
    ww = Math.atan2,
    bw = Math.sqrt,
    Sw = Math.sin,
    Mw = Math.cos,
    Tw = Math.PI,
    Cw = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    Iw = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
    kw = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this
      }
      return e(n, t), n.prototype.applyTransform = function () {}, n
    }(Rx),
    Dw = function () {
      function t() {
        this.cx = 0, this.cy = 0, this.r = 0
      }
      return t
    }(),
    Aw = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.getDefaultShape = function () {
        return new Dw
      }, n.prototype.buildPath = function (t, e) {
        t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI)
      }, n
    }(Rx);
  Aw.prototype.type = "circle";
  var Pw = function () {
      function t() {
        this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0
      }
      return t
    }(),
    Lw = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.getDefaultShape = function () {
        return new Pw
      }, n.prototype.buildPath = function (t, e) {
        var n = .5522848,
          i = e.cx,
          r = e.cy,
          o = e.rx,
          a = e.ry,
          s = o * n,
          l = a * n;
        t.moveTo(i - o, r), t.bezierCurveTo(i - o, r - l, i - s, r - a, i, r - a), t.bezierCurveTo(i + s, r - a, i + o, r - l, i + o, r), t.bezierCurveTo(i + o, r + l, i + s, r + a, i, r + a), t.bezierCurveTo(i - s, r + a, i - o, r + l, i - o, r), t.closePath()
      }, n
    }(Rx);
  Lw.prototype.type = "ellipse";
  var Ow = Math.PI,
    Rw = 2 * Ow,
    Bw = Math.sin,
    zw = Math.cos,
    Ew = Math.acos,
    Nw = Math.atan2,
    Fw = Math.abs,
    Hw = Math.sqrt,
    Vw = Math.max,
    Ww = Math.min,
    Gw = 1e-4,
    Uw = function () {
      function t() {
        this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0, this.cornerRadius = 0
      }
      return t
    }(),
    Xw = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.getDefaultShape = function () {
        return new Uw
      }, n.prototype.buildPath = function (t, e) {
        $a(t, e)
      }, n.prototype.isZeroArea = function () {
        return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0
      }, n
    }(Rx);
  Xw.prototype.type = "sector";
  var Yw = function () {
      function t() {
        this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0
      }
      return t
    }(),
    qw = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.getDefaultShape = function () {
        return new Yw
      }, n.prototype.buildPath = function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI;
        t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
      }, n
    }(Rx);
  qw.prototype.type = "ring";
  var jw = function () {
      function t() {
        this.points = null, this.smooth = 0, this.smoothConstraint = null
      }
      return t
    }(),
    Zw = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.getDefaultShape = function () {
        return new jw
      }, n.prototype.buildPath = function (t, e) {
        Ja(t, e, !0)
      }, n
    }(Rx);
  Zw.prototype.type = "polygon";
  var Kw = function () {
      function t() {
        this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null
      }
      return t
    }(),
    $w = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.getDefaultStyle = function () {
        return {
          stroke: "#000",
          fill: null
        }
      }, n.prototype.getDefaultShape = function () {
        return new Kw
      }, n.prototype.buildPath = function (t, e) {
        Ja(t, e, !1)
      }, n
    }(Rx);
  $w.prototype.type = "polyline";
  var Qw = {},
    Jw = function () {
      function t() {
        this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1
      }
      return t
    }(),
    tb = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.getDefaultStyle = function () {
        return {
          stroke: "#000",
          fill: null
        }
      }, n.prototype.getDefaultShape = function () {
        return new Jw
      }, n.prototype.buildPath = function (t, e) {
        var n, i, r, o;
        if (this.subPixelOptimize) {
          var a = Po(Qw, e, this.style);
          n = a.x1, i = a.y1, r = a.x2, o = a.y2
        } else n = e.x1, i = e.y1, r = e.x2, o = e.y2;
        var s = e.percent;
        0 !== s && (t.moveTo(n, i), 1 > s && (r = n * (1 - s) + r * s, o = i * (1 - s) + o * s), t.lineTo(r, o))
      }, n.prototype.pointAt = function (t) {
        var e = this.shape;
        return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
      }, n
    }(Rx);
  tb.prototype.type = "line";
  var eb = [],
    nb = function () {
      function t() {
        this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1
      }
      return t
    }(),
    ib = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.getDefaultStyle = function () {
        return {
          stroke: "#000",
          fill: null
        }
      }, n.prototype.getDefaultShape = function () {
        return new nb
      }, n.prototype.buildPath = function (t, e) {
        var n = e.x1,
          i = e.y1,
          r = e.x2,
          o = e.y2,
          a = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          u = e.cpy2,
          h = e.percent;
        0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (un(n, a, r, h, eb), a = eb[1], r = eb[2], un(i, s, o, h, eb), s = eb[1], o = eb[2]), t.quadraticCurveTo(a, s, r, o)) : (1 > h && (en(n, a, l, r, h, eb), a = eb[1], l = eb[2], r = eb[3], en(i, s, u, o, h, eb), s = eb[1], u = eb[2], o = eb[3]), t.bezierCurveTo(a, s, l, u, r, o)))
      }, n.prototype.pointAt = function (t) {
        return ts(this.shape, t, !1)
      }, n.prototype.tangentAt = function (t) {
        var e = ts(this.shape, t, !0);
        return ce(e, e)
      }, n
    }(Rx);
  ib.prototype.type = "bezier-curve";
  var rb = function () {
      function t() {
        this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0
      }
      return t
    }(),
    ob = function (t) {
      function n(e) {
        return t.call(this, e) || this
      }
      return e(n, t), n.prototype.getDefaultStyle = function () {
        return {
          stroke: "#000",
          fill: null
        }
      }, n.prototype.getDefaultShape = function () {
        return new rb
      }, n.prototype.buildPath = function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          o = e.startAngle,
          a = e.endAngle,
          s = e.clockwise,
          l = Math.cos(o),
          u = Math.sin(o);
        t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, o, a, !s)
      }, n
    }(Rx);
  ob.prototype.type = "arc";
  var ab = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = "compound", e
      }
      return e(n, t), n.prototype._updatePathDirty = function () {
        for (var t = this.shape.paths, e = this.shapeChanged(), n = 0; n < t.length; n++) e = e || t[n].shapeChanged();
        e && this.dirtyShape()
      }, n.prototype.beforeBrush = function () {
        this._updatePathDirty();
        for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold)
      }, n.prototype.buildPath = function (t, e) {
        for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
      }, n.prototype.afterBrush = function () {
        for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].pathUpdated()
      }, n.prototype.getBoundingRect = function () {
        return this._updatePathDirty.call(this), Rx.prototype.getBoundingRect.call(this)
      }, n
    }(Rx),
    sb = function () {
      function t(t) {
        this.colorStops = t || []
      }
      return t.prototype.addColorStop = function (t, e) {
        this.colorStops.push({
          offset: t,
          color: e
        })
      }, t
    }(),
    lb = function (t) {
      function n(e, n, i, r, o, a) {
        var s = t.call(this, o) || this;
        return s.x = null == e ? 0 : e, s.y = null == n ? 0 : n, s.x2 = null == i ? 1 : i, s.y2 = null == r ? 0 : r, s.type = "linear", s.global = a || !1, s
      }
      return e(n, t), n
    }(sb),
    ub = function (t) {
      function n(e, n, i, r, o) {
        var a = t.call(this, r) || this;
        return a.x = null == e ? .5 : e, a.y = null == n ? .5 : n, a.r = null == i ? .5 : i, a.type = "radial", a.global = o || !1, a
      }
      return e(n, t), n
    }(sb),
    hb = [0, 0],
    cb = [0, 0],
    pb = new $m,
    fb = new $m,
    db = function () {
      function t(t, e) {
        this._corners = [], this._axes = [], this._origin = [0, 0];
        for (var n = 0; 4 > n; n++) this._corners[n] = new $m;
        for (var n = 0; 2 > n; n++) this._axes[n] = new $m;
        t && this.fromBoundingRect(t, e)
      }
      return t.prototype.fromBoundingRect = function (t, e) {
        var n = this._corners,
          i = this._axes,
          r = t.x,
          o = t.y,
          a = r + t.width,
          s = o + t.height;
        if (n[0].set(r, o), n[1].set(a, o), n[2].set(a, s), n[3].set(r, s), e)
          for (var l = 0; 4 > l; l++) n[l].transform(e);
        $m.sub(i[0], n[1], n[0]), $m.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
        for (var l = 0; 2 > l; l++) this._origin[l] = i[l].dot(n[0])
      }, t.prototype.intersect = function (t, e) {
        var n = !0,
          i = !e;
        return pb.set(1 / 0, 1 / 0), fb.set(0, 0), !this._intersectCheckOneSide(this, t, pb, fb, i, 1) && (n = !1, i) ? n : !this._intersectCheckOneSide(t, this, pb, fb, i, -1) && (n = !1, i) ? n : (i || $m.copy(e, n ? pb : fb), n)
      }, t.prototype._intersectCheckOneSide = function (t, e, n, i, r, o) {
        for (var a = !0, s = 0; 2 > s; s++) {
          var l = this._axes[s];
          if (this._getProjMinMaxOnAxis(s, t._corners, hb), this._getProjMinMaxOnAxis(s, e._corners, cb), hb[1] < cb[0] || hb[0] > cb[1]) {
            if (a = !1, r) return a;
            var u = Math.abs(cb[0] - hb[1]),
              h = Math.abs(hb[0] - cb[1]);
            Math.min(u, h) > i.len() && (h > u ? $m.scale(i, l, -u * o) : $m.scale(i, l, h * o))
          } else if (n) {
            var u = Math.abs(cb[0] - hb[1]),
              h = Math.abs(hb[0] - cb[1]);
            Math.min(u, h) < n.len() && (h > u ? $m.scale(n, l, u * o) : $m.scale(n, l, -h * o))
          }
        }
        return a
      }, t.prototype._getProjMinMaxOnAxis = function (t, e, n) {
        for (var i = this._axes[t], r = this._origin, o = e[0].dot(i) + r[t], a = o, s = o, l = 1; l < e.length; l++) {
          var u = e[l].dot(i) + r[t];
          a = Math.min(u, a), s = Math.max(u, s)
        }
        n[0] = a, n[1] = s
      }, t
    }(),
    gb = [],
    vb = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.notClear = !0, e.incremental = !0, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e
      }
      return e(n, t), n.prototype.traverse = function (t, e) {
        t.call(e, this)
      }, n.prototype.useStyle = function () {
        this.style = {}
      }, n.prototype.getCursor = function () {
        return this._cursor
      }, n.prototype.innerAfterBrush = function () {
        this._cursor = this._displayables.length
      }, n.prototype.clearDisplaybles = function () {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1
      }, n.prototype.clearTemporalDisplayables = function () {
        this._temporaryDisplayables = []
      }, n.prototype.addDisplayable = function (t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.markRedraw()
      }, n.prototype.addDisplayables = function (t, e) {
        e = e || !1;
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
      }, n.prototype.getDisplayables = function () {
        return this._displayables
      }, n.prototype.getTemporalDisplayables = function () {
        return this._temporaryDisplayables
      }, n.prototype.eachPendingDisplayable = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
      }, n.prototype.update = function () {
        this.updateTransform();
        for (var t = this._cursor; t < this._displayables.length; t++) {
          var e = this._displayables[t];
          e.parent = this, e.update(), e.parent = null
        }
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
          var e = this._temporaryDisplayables[t];
          e.parent = this, e.update(), e.parent = null
        }
      }, n.prototype.getBoundingRect = function () {
        if (!this._rect) {
          for (var t = new a_(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
            var n = this._displayables[e],
              i = n.getBoundingRect().clone();
            n.needLocalTransform() && i.applyTransform(n.getLocalTransform(gb)), t.union(i)
          }
          this._rect = t
        }
        return this._rect
      }, n.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect();
        if (i.contain(n[0], n[1]))
          for (var r = 0; r < this._displayables.length; r++) {
            var o = this._displayables[r];
            if (o.contain(t, e)) return !0
          }
        return !1
      }, n
    }(q_),
    yb = (kr(), Math.max),
    mb = Math.min,
    _b = {},
    xb = Ya,
    wb = qa,
    bb = Oo;
  cs("circle", Aw), cs("ellipse", Lw), cs("sector", Xw), cs("ring", qw), cs("polygon", Zw), cs("polyline", $w), cs("rect", Gx), cs("line", tb), cs("bezierCurve", ib), cs("arc", ob);
  var Sb = (Object.freeze || Object)({
      updateProps: is,
      initProps: rs,
      removeElement: as,
      removeElementWithFadeOut: ls,
      isElementRemoved: os,
      extendShape: us,
      extendPath: hs,
      registerShape: cs,
      getShapeClass: ps,
      makePath: fs,
      makeImage: ds,
      mergePath: wb,
      resizePath: vs,
      subPixelOptimizeLine: ys,
      subPixelOptimizeRect: ms,
      subPixelOptimize: bb,
      getTransform: _s,
      applyTransform: xs,
      transformDirection: ws,
      groupTransition: Ms,
      clipPointsByRect: Ts,
      clipRectByRect: Cs,
      createIcon: Is,
      linePolygonIntersect: ks,
      lineLineIntersect: Ds,
      setTooltipConfig: Ls,
      traverseElements: Rs,
      Group: d_,
      Image: Fx,
      Text: qx,
      Circle: Aw,
      Ellipse: Lw,
      Sector: Xw,
      Ring: qw,
      Polygon: Zw,
      Polyline: $w,
      Rect: Gx,
      Line: tb,
      BezierCurve: ib,
      Arc: ob,
      IncrementalDisplayable: vb,
      CompoundPath: ab,
      LinearGradient: lb,
      RadialGradient: ub,
      BoundingRect: a_,
      OrientedBoundingRect: db,
      Point: $m,
      Path: Rx
    }),
    Mb = {},
    Tb = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"],
    Cb = ["align", "lineHeight", "width", "height", "tag", "verticalAlign"],
    Ib = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"],
    kb = kr(),
    Db = ["textStyle", "color"],
    Ab = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"],
    Pb = new qx,
    Lb = function () {
      function t() {}
      return t.prototype.getTextColor = function (t) {
        var e = this.ecModel;
        return this.getShallow("color") || (!t && e ? e.get(Db) : null)
      }, t.prototype.getFont = function () {
        return Gs({
          fontStyle: this.getShallow("fontStyle"),
          fontWeight: this.getShallow("fontWeight"),
          fontSize: this.getShallow("fontSize"),
          fontFamily: this.getShallow("fontFamily")
        }, this.ecModel)
      }, t.prototype.getTextRect = function (t) {
        for (var e = {
            text: t,
            verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
          }, n = 0; n < Ab.length; n++) e[Ab[n]] = this.getShallow(Ab[n]);
        return Pb.useStyle(e), Pb.update(), Pb.getBoundingRect()
      }, t
    }(),
    Ob = [
      ["lineWidth", "width"],
      ["stroke", "color"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"],
      ["lineDash", "type"],
      ["lineDashOffset", "dashOffset"],
      ["lineCap", "cap"],
      ["lineJoin", "join"],
      ["miterLimit"]
    ],
    Rb = Yr(Ob),
    Bb = function () {
      function t() {}
      return t.prototype.getLineStyle = function (t) {
        return Rb(this, t)
      }, t
    }(),
    zb = [
      ["fill", "color"],
      ["stroke", "borderColor"],
      ["lineWidth", "borderWidth"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"],
      ["lineDash", "borderType"],
      ["lineDashOffset", "borderDashOffset"],
      ["lineCap", "borderCap"],
      ["lineJoin", "borderJoin"],
      ["miterLimit", "borderMiterLimit"]
    ],
    Eb = Yr(zb),
    Nb = function () {
      function t() {}
      return t.prototype.getItemStyle = function (t, e) {
        return Eb(this, t, e)
      }, t
    }(),
    Fb = function () {
      function t(t, e, n) {
        this.parentModel = e, this.ecModel = n, this.option = t
      }
      return t.prototype.init = function () {
        for (var t = [], e = 3; e < arguments.length; e++) t[e - 3] = arguments[e]
      }, t.prototype.mergeOption = function (t) {
        l(this.option, t, !0)
      }, t.prototype.get = function (t, e) {
        return null == t ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel)
      }, t.prototype.getShallow = function (t, e) {
        var n = this.option,
          i = null == n ? n : n[t];
        if (null == i && !e) {
          var r = this.parentModel;
          r && (i = r.getShallow(t))
        }
        return i
      }, t.prototype.getModel = function (e, n) {
        var i = null != e,
          r = i ? this.parsePath(e) : null,
          o = i ? this._doGet(r) : this.option;
        return n = n || this.parentModel && this.parentModel.getModel(this.resolveParentPath(r)), new t(o, n, this.ecModel)
      }, t.prototype.isEmpty = function () {
        return null == this.option
      }, t.prototype.restoreData = function () {}, t.prototype.clone = function () {
        var t = this.constructor;
        return new t(s(this.option))
      }, t.prototype.parsePath = function (t) {
        return "string" == typeof t ? t.split(".") : t
      }, t.prototype.resolveParentPath = function (t) {
        return t
      }, t.prototype.isAnimationEnabled = function () {
        if (!Gv.node && this.option) {
          if (null != this.option.animation) return !!this.option.animation;
          if (this.parentModel) return this.parentModel.isAnimationEnabled()
        }
      }, t.prototype._doGet = function (t, e) {
        var n = this.option;
        if (!t) return n;
        for (var i = 0; i < t.length && (!t[i] || (n = n && "object" == typeof n ? n[t[i]] : null, null != n)); i++);
        return null == n && e && (n = e._doGet(this.resolveParentPath(t), e.parentModel)), n
      }, t
    }();
  Fr(Fb), Wr(Fb), d(Fb, Bb), d(Fb, Nb), d(Fb, B_), d(Fb, Lb);
  var Hb = Math.round(10 * Math.random()),
    Vb = {
      time: {
        month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      legend: {
        selector: {
          all: "All",
          inverse: "Inv"
        }
      },
      toolbox: {
        brush: {
          title: {
            rect: "Box Select",
            polygon: "Lasso Select",
            lineX: "Horizontally Select",
            lineY: "Vertically Select",
            keep: "Keep Selections",
            clear: "Clear Selections"
          }
        },
        dataView: {
          title: "Data View",
          lang: ["Data View", "Close", "Refresh"]
        },
        dataZoom: {
          title: {
            zoom: "Zoom",
            back: "Zoom Reset"
          }
        },
        magicType: {
          title: {
            line: "Switch to Line Chart",
            bar: "Switch to Bar Chart",
            stack: "Stack",
            tiled: "Tile"
          }
        },
        restore: {
          title: "Restore"
        },
        saveAsImage: {
          title: "Save as Image",
          lang: ["Right Click to Save Image"]
        }
      },
      series: {
        typeNames: {
          pie: "Pie chart",
          bar: "Bar chart",
          line: "Line chart",
          scatter: "Scatter plot",
          effectScatter: "Ripple scatter plot",
          radar: "Radar chart",
          tree: "Tree",
          treemap: "Treemap",
          boxplot: "Boxplot",
          candlestick: "Candlestick",
          k: "K line chart",
          heatmap: "Heat map",
          map: "Map",
          parallel: "Parallel coordinate map",
          lines: "Line graph",
          graph: "Relationship graph",
          sankey: "Sankey diagram",
          funnel: "Funnel chart",
          gauge: "Gauge",
          pictorialBar: "Pictorial bar",
          themeRiver: "Theme River Map",
          sunburst: "Sunburst"
        }
      },
      aria: {
        general: {
          withTitle: 'This is a chart about "{title}"',
          withoutTitle: "This is a chart"
        },
        series: {
          single: {
            prefix: "",
            withName: " with type {seriesType} named {seriesName}.",
            withoutName: " with type {seriesType}."
          },
          multiple: {
            prefix: ". It consists of {seriesCount} series count.",
            withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
            withoutName: " The {seriesId} series is a {seriesType}.",
            separator: {
              middle: "",
              end: ""
            }
          }
        },
        data: {
          allData: "The data is as follows: ",
          partialData: "The first {displayCnt} items are: ",
          withName: "the data for {name} is {value}",
          withoutName: "{value}",
          separator: {
            middle: ", ",
            end: ". "
          }
        }
      }
    },
    Wb = {
      time: {
        month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
      },
      legend: {
        selector: {
          all: "全选",
          inverse: "反选"
        }
      },
      toolbox: {
        brush: {
          title: {
            rect: "矩形选择",
            polygon: "圈选",
            lineX: "横向选择",
            lineY: "纵向选择",
            keep: "保持选择",
            clear: "清除选择"
          }
        },
        dataView: {
          title: "数据视图",
          lang: ["数据视图", "关闭", "刷新"]
        },
        dataZoom: {
          title: {
            zoom: "区域缩放",
            back: "区域缩放还原"
          }
        },
        magicType: {
          title: {
            line: "切换为折线图",
            bar: "切换为柱状图",
            stack: "切换为堆叠",
            tiled: "切换为平铺"
          }
        },
        restore: {
          title: "还原"
        },
        saveAsImage: {
          title: "保存为图片",
          lang: ["右键另存为图片"]
        }
      },
      series: {
        typeNames: {
          pie: "饼图",
          bar: "柱状图",
          line: "折线图",
          scatter: "散点图",
          effectScatter: "涟漪散点图",
          radar: "雷达图",
          tree: "树图",
          treemap: "矩形树图",
          boxplot: "箱型图",
          candlestick: "K线图",
          k: "K线图",
          heatmap: "热力图",
          map: "地图",
          parallel: "平行坐标图",
          lines: "线图",
          graph: "关系图",
          sankey: "桑基图",
          funnel: "漏斗图",
          gauge: "仪表盘图",
          pictorialBar: "象形柱图",
          themeRiver: "主题河流图",
          sunburst: "旭日图"
        }
      },
      aria: {
        general: {
          withTitle: "这是一个关于“{title}”的图表。",
          withoutTitle: "这是一个图表，"
        },
        series: {
          single: {
            prefix: "",
            withName: "图表类型是{seriesType}，表示{seriesName}。",
            withoutName: "图表类型是{seriesType}。"
          },
          multiple: {
            prefix: "它由{seriesCount}个图表系列组成。",
            withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
            withoutName: "第{seriesId}个系列是一个{seriesType}，",
            separator: {
              middle: "；",
              end: "。"
            }
          }
        },
        data: {
          allData: "其数据是——",
          partialData: "其中，前{displayCnt}项是——",
          withName: "{name}的数据是{value}",
          withoutName: "{value}",
          separator: {
            middle: "，",
            end: ""
          }
        }
      }
    },
    Gb = "ZH",
    Ub = "EN",
    Xb = Ub,
    Yb = {},
    qb = {},
    jb = Gv.domSupported ? function () {
      var t = (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase();
      return t.indexOf(Gb) > -1 ? Gb : Xb
    }() : Xb;
  Ks(Ub, Vb), Ks(Gb, Wb);
  var Zb = 1e3,
    Kb = 60 * Zb,
    $b = 60 * Kb,
    Qb = 24 * $b,
    Jb = 365 * Qb,
    tS = {
      year: "{yyyy}",
      month: "{MMM}",
      day: "{d}",
      hour: "{HH}:{mm}",
      minute: "{HH}:{mm}",
      second: "{HH}:{mm}:{ss}",
      millisecond: "{HH}:{mm}:{ss} {SSS}",
      none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
    },
    eS = "{yyyy}-{MM}-{dd}",
    nS = {
      year: "{yyyy}",
      month: "{yyyy}-{MM}",
      day: eS,
      hour: eS + " " + tS.hour,
      minute: eS + " " + tS.minute,
      second: eS + " " + tS.second,
      millisecond: tS.none
    },
    iS = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    rS = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"],
    oS = V,
    aS = /([&<>"'])/g,
    sS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    },
    lS = ["a", "b", "c", "d", "e", "f", "g"],
    uS = function (t, e) {
      return "{" + t + (null == e ? "" : e) + "}"
    },
    hS = v,
    cS = ["left", "right", "top", "bottom", "width", "height"],
    pS = [
      ["width", "left", "right"],
      ["height", "top", "bottom"]
    ],
    fS = Ol,
    dS = (S(Ol, "vertical"), S(Ol, "horizontal"), kr()),
    gS = function (t) {
      function n(e, n, i) {
        var r = t.call(this, e, n, i) || this;
        return r.uid = Ys("ec_cpt_model"), r
      }
      return e(n, t), n.prototype.init = function (t, e, n) {
        this.mergeDefaultAndTheme(t, n)
      }, n.prototype.mergeDefaultAndTheme = function (t, e) {
        var n = Bl(this),
          i = n ? El(t) : {},
          r = e.getTheme();
        l(t, r.get(this.mainType)), l(t, this.getDefaultOption()), n && zl(t, i, n)
      }, n.prototype.mergeOption = function (t) {
        l(this.option, t, !0);
        var e = Bl(this);
        e && zl(this.option, t, e)
      }, n.prototype.optionUpdated = function () {}, n.prototype.getDefaultOption = function () {
        var t = this.constructor;
        if (!Nr(t)) return t.defaultOption;
        var e = dS(this);
        if (!e.defaultOption) {
          for (var n = [], i = t; i;) {
            var r = i.prototype.defaultOption;
            r && n.push(r), i = i.superClass
          }
          for (var o = {}, a = n.length - 1; a >= 0; a--) o = l(o, n[a], !0);
          e.defaultOption = o
        }
        return e.defaultOption
      }, n.prototype.getReferringComponents = function (t, e) {
        var n = t + "Index",
          i = t + "Id";
        return Pr(this.ecModel, t, {
          index: this.get(n, !0),
          id: this.get(i, !0)
        }, e)
      }, n.prototype.getBoxLayoutParams = function () {
        var t = this;
        return {
          left: t.get("left"),
          top: t.get("top"),
          right: t.get("right"),
          bottom: t.get("bottom"),
          width: t.get("width"),
          height: t.get("height")
        }
      }, n.prototype.getZLevelKey = function () {
        return ""
      }, n.prototype.setZLevel = function (t) {
        this.option.zlevel = t
      }, n.protoInitialize = function () {
        var t = n.prototype;
        t.type = "component", t.id = "", t.name = "", t.mainType = "", t.subType = "", t.componentIndex = 0
      }(), n
    }(Fb);
  Vr(gS, Fb), Xr(gS), qs(gS), js(gS, Fl);
  var vS = "";
  "undefined" != typeof navigator && (vS = navigator.platform || "");
  var yS, mS, _S = "rgba(0, 0, 0, 0.2)",
    xS = {
      darkMode: "auto",
      colorBy: "series",
      color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
      gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
      aria: {
        decal: {
          decals: [{
            color: _S,
            dashArrayX: [1, 0],
            dashArrayY: [2, 5],
            symbolSize: 1,
            rotation: Math.PI / 6
          }, {
            color: _S,
            symbol: "circle",
            dashArrayX: [
              [8, 8],
              [0, 8, 8, 0]
            ],
            dashArrayY: [6, 0],
            symbolSize: .8
          }, {
            color: _S,
            dashArrayX: [1, 0],
            dashArrayY: [4, 3],
            rotation: -Math.PI / 4
          }, {
            color: _S,
            dashArrayX: [
              [6, 6],
              [0, 6, 6, 0]
            ],
            dashArrayY: [6, 0]
          }, {
            color: _S,
            dashArrayX: [
              [1, 0],
              [1, 6]
            ],
            dashArrayY: [1, 0, 6, 0],
            rotation: Math.PI / 4
          }, {
            color: _S,
            symbol: "triangle",
            dashArrayX: [
              [9, 9],
              [0, 9, 9, 0]
            ],
            dashArrayY: [7, 2],
            symbolSize: .75
          }]
        }
      },
      textStyle: {
        fontFamily: vS.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal"
      },
      blendMode: null,
      stateAnimation: {
        duration: 300,
        easing: "cubicOut"
      },
      animation: "auto",
      animationDuration: 1e3,
      animationDurationUpdate: 500,
      animationEasing: "cubicInOut",
      animationEasingUpdate: "cubicInOut",
      animationThreshold: 2e3,
      progressiveThreshold: 3e3,
      progressive: 400,
      hoverLayerThreshold: 3e3,
      useUTC: !1
    },
    wS = Y(["tooltip", "label", "itemName", "itemId", "itemGroupId", "seriesName"]),
    bS = "original",
    SS = "arrayRows",
    MS = "objectRows",
    TS = "keyedColumns",
    CS = "typedArray",
    IS = "unknown",
    kS = "column",
    DS = "row",
    AS = {
      Must: 1,
      Might: 2,
      Not: 3
    },
    PS = kr(),
    LS = Y(),
    OS = kr(),
    RS = (kr(), function () {
      function t() {}
      return t.prototype.getColorFromPalette = function (t, e, n) {
        var i = ur(this.get("color", !0)),
          r = this.get("colorLayer", !0);
        return jl(this, OS, i, r, t, e, n)
      }, t.prototype.clearColorPalette = function () {
        Zl(this, OS)
      }, t
    }()),
    BS = "\x00_ec_inner",
    zS = 1,
    ES = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this
      }
      return e(n, t), n.prototype.init = function (t, e, n, i, r, o) {
        i = i || {}, this.option = null, this._theme = new Fb(i), this._locale = new Fb(r), this._optionManager = o
      }, n.prototype.setOption = function (t, e, n) {
        var i = tu(e);
        this._optionManager.setOption(t, n, i), this._resetOption(null, i)
      }, n.prototype.resetOption = function (t, e) {
        return this._resetOption(t, tu(e))
      }, n.prototype._resetOption = function (t, e) {
        var n = !1,
          i = this._optionManager;
        if (!t || "recreate" === t) {
          var r = i.mountOption("recreate" === t);
          this.option && "recreate" !== t ? (this.restoreData(), this._mergeOption(r, e)) : mS(this, r), n = !0
        }
        if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
          var o = i.getTimelineOption(this);
          o && (n = !0, this._mergeOption(o, e))
        }
        if (!t || "recreate" === t || "media" === t) {
          var a = i.getMediaOption(this);
          a.length && v(a, function (t) {
            n = !0, this._mergeOption(t, e)
          }, this)
        }
        return n
      }, n.prototype.mergeOption = function (t) {
        this._mergeOption(t, null)
      }, n.prototype._mergeOption = function (t, e) {
        function n(e) {
          var n = Yl(this, e, ur(t[e])),
            a = r.get(e),
            s = a ? c && c.get(e) ? "replaceMerge" : "normalMerge" : "replaceAll",
            l = fr(a, n, s);
          Tr(l, e, gS), i[e] = null, r.set(e, null), o.set(e, 0);
          var u, p = [],
            f = [],
            d = 0;
          v(l, function (t, n) {
            var i = t.existing,
              r = t.newOption;
            if (r) {
              var o = "series" === e,
                a = gS.getClass(e, t.keyInfo.subType, !o);
              if (!a) return;
              if ("tooltip" === e) {
                if (u) return;
                u = !0
              }
              if (i && i.constructor === a) i.name = t.keyInfo.name, i.mergeOption(r, this), i.optionUpdated(r, !1);
              else {
                var s = h({
                  componentIndex: n
                }, t.keyInfo);
                i = new a(r, this, this, s), h(i, s), t.brandNew && (i.__requireNewView = !0), i.init(r, this, this), i.optionUpdated(null, !0)
              }
            } else i && (i.mergeOption({}, this), i.optionUpdated({}, !1));
            i ? (p.push(i.option), f.push(i), d++) : (p.push(void 0), f.push(void 0))
          }, this), i[e] = p, r.set(e, f), o.set(e, d), "series" === e && yS(this)
        }
        var i = this.option,
          r = this._componentsMap,
          o = this._componentsCount,
          a = [],
          u = Y(),
          c = e && e.replaceMergeMainTypeMap;
        Hl(this), v(t, function (t, e) {
          null != t && (gS.hasClass(e) ? e && (a.push(e), u.set(e, !0)) : i[e] = null == i[e] ? s(t) : l(i[e], t, !0))
        }), c && c.each(function (t, e) {
          gS.hasClass(e) && !u.get(e) && (a.push(e), u.set(e, !0))
        }), gS.topologicalTravel(a, gS.getAllClassMainTypes(), n, this), this._seriesIndices || yS(this)
      }, n.prototype.getOption = function () {
        var t = s(this.option);
        return v(t, function (e, n) {
          if (gS.hasClass(n)) {
            for (var i = ur(e), r = i.length, o = !1, a = r - 1; a >= 0; a--) i[a] && !Mr(i[a]) ? o = !0 : (i[a] = null, !o && r--);
            i.length = r, t[n] = i
          }
        }), delete t[BS], t
      }, n.prototype.getTheme = function () {
        return this._theme
      }, n.prototype.getLocaleModel = function () {
        return this._locale
      }, n.prototype.setUpdatePayload = function (t) {
        this._payload = t
      }, n.prototype.getUpdatePayload = function () {
        return this._payload
      }, n.prototype.getComponent = function (t, e) {
        var n = this._componentsMap.get(t);
        if (n) {
          var i = n[e || 0];
          if (i) return i;
          if (null == e)
            for (var r = 0; r < n.length; r++)
              if (n[r]) return n[r]
        }
      }, n.prototype.queryComponents = function (t) {
        var e = t.mainType;
        if (!e) return [];
        var n = t.index,
          i = t.id,
          r = t.name,
          o = this._componentsMap.get(e);
        if (!o || !o.length) return [];
        var a;
        return null != n ? (a = [], v(ur(n), function (t) {
          o[t] && a.push(o[t])
        })) : a = null != i ? Ql("id", i, o) : null != r ? Ql("name", r, o) : _(o, function (t) {
          return !!t
        }), Jl(a, t)
      }, n.prototype.findComponents = function (t) {
        function e(t) {
          var e = r + "Index",
            n = r + "Id",
            i = r + "Name";
          return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
            mainType: r,
            index: t[e],
            id: t[n],
            name: t[i]
          }
        }

        function n(e) {
          return t.filter ? _(e, t.filter) : e
        }
        var i = t.query,
          r = t.mainType,
          o = e(i),
          a = o ? this.queryComponents(o) : _(this._componentsMap.get(r), function (t) {
            return !!t
          });
        return n(Jl(a, t))
      }, n.prototype.eachComponent = function (t, e, n) {
        var i = this._componentsMap;
        if (T(t)) {
          var r = e,
            o = t;
          i.each(function (t, e) {
            for (var n = 0; t && n < t.length; n++) {
              var i = t[n];
              i && o.call(r, e, i, i.componentIndex)
            }
          })
        } else
          for (var a = C(t) ? i.get(t) : D(t) ? this.findComponents(t) : null, s = 0; a && s < a.length; s++) {
            var l = a[s];
            l && e.call(n, l, l.componentIndex)
          }
      }, n.prototype.getSeriesByName = function (t) {
        var e = br(t, null);
        return _(this._componentsMap.get("series"), function (t) {
          return !!t && null != e && t.name === e
        })
      }, n.prototype.getSeriesByIndex = function (t) {
        return this._componentsMap.get("series")[t]
      }, n.prototype.getSeriesByType = function (t) {
        return _(this._componentsMap.get("series"), function (e) {
          return !!e && e.subType === t
        })
      }, n.prototype.getSeries = function () {
        return _(this._componentsMap.get("series"), function (t) {
          return !!t
        })
      }, n.prototype.getSeriesCount = function () {
        return this._componentsCount.get("series")
      }, n.prototype.eachSeries = function (t, e) {
        v(this._seriesIndices, function (n) {
          var i = this._componentsMap.get("series")[n];
          t.call(e, i, n)
        }, this)
      }, n.prototype.eachRawSeries = function (t, e) {
        v(this._componentsMap.get("series"), function (n) {
          n && t.call(e, n, n.componentIndex)
        })
      }, n.prototype.eachSeriesByType = function (t, e, n) {
        v(this._seriesIndices, function (i) {
          var r = this._componentsMap.get("series")[i];
          r.subType === t && e.call(n, r, i)
        }, this)
      }, n.prototype.eachRawSeriesByType = function (t, e, n) {
        return v(this.getSeriesByType(t), e, n)
      }, n.prototype.isSeriesFiltered = function (t) {
        return null == this._seriesIndicesMap.get(t.componentIndex)
      }, n.prototype.getCurrentSeriesIndices = function () {
        return (this._seriesIndices || []).slice()
      }, n.prototype.filterSeries = function (t, e) {
        var n = [];
        v(this._seriesIndices, function (i) {
          var r = this._componentsMap.get("series")[i];
          t.call(e, r, i) && n.push(i)
        }, this), this._seriesIndices = n, this._seriesIndicesMap = Y(n)
      }, n.prototype.restoreData = function (t) {
        yS(this);
        var e = this._componentsMap,
          n = [];
        e.each(function (t, e) {
          gS.hasClass(e) && n.push(e)
        }), gS.topologicalTravel(n, gS.getAllClassMainTypes(), function (n) {
          v(e.get(n), function (e) {
            !e || "series" === n && Kl(e, t) || e.restoreData()
          })
        })
      }, n.internalField = function () {
        yS = function (t) {
          var e = t._seriesIndices = [];
          v(t._componentsMap.get("series"), function (t) {
            t && e.push(t.componentIndex)
          }), t._seriesIndicesMap = Y(e)
        }, mS = function (t, e) {
          t.option = {}, t.option[BS] = zS, t._componentsMap = Y({
            series: []
          }), t._componentsCount = Y();
          var n = e.aria;
          D(n) && null == n.enabled && (n.enabled = !0), $l(e, t._theme.option), l(e, xS, !1), t._mergeOption(e, null)
        }
      }(), n
    }(Fb);
  d(ES, RS);
  var NS, FS, HS, VS, WS, GS, US = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isSSR", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getOption", "getId", "updateLabelLayout"],
    XS = function () {
      function t(t) {
        v(US, function (e) {
          this[e] = cy(t[e], t)
        }, this)
      }
      return t
    }(),
    YS = {},
    qS = function () {
      function t() {
        this._coordinateSystems = []
      }
      return t.prototype.create = function (t, e) {
        var n = [];
        v(YS, function (i) {
          var r = i.create(t, e);
          n = n.concat(r || [])
        }), this._coordinateSystems = n
      }, t.prototype.update = function (t, e) {
        v(this._coordinateSystems, function (n) {
          n.update && n.update(t, e)
        })
      }, t.prototype.getCoordinateSystems = function () {
        return this._coordinateSystems.slice()
      }, t.register = function (t, e) {
        YS[t] = e
      }, t.get = function (t) {
        return YS[t]
      }, t
    }(),
    jS = /^(min|max)?(.+)$/,
    ZS = function () {
      function t(t) {
        this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t
      }
      return t.prototype.setOption = function (t, e) {
        t && (v(ur(t.series), function (t) {
          t && t.data && P(t.data) && U(t.data)
        }), v(ur(t.dataset), function (t) {
          t && t.source && P(t.source) && U(t.source)
        })), t = s(t);
        var n = this._optionBackup,
          i = eu(t, e, !n);
        this._newBaseOption = i.baseOption, n ? (i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
      }, t.prototype.mountOption = function (t) {
        var e = this._optionBackup;
        return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], s(t ? e.baseOption : this._newBaseOption)
      }, t.prototype.getTimelineOption = function (t) {
        var e, n = this._timelineOptions;
        if (n.length) {
          var i = t.getComponent("timeline");
          i && (e = s(n[i.getCurrentIndex()]))
        }
        return e
      }, t.prototype.getMediaOption = function () {
        var t = this._api.getWidth(),
          e = this._api.getHeight(),
          n = this._mediaList,
          i = this._mediaDefault,
          r = [],
          o = [];
        if (!n.length && !i) return o;
        for (var a = 0, l = n.length; l > a; a++) nu(n[a].query, t, e) && r.push(a);
        return !r.length && i && (r = [-1]), r.length && !ru(r, this._currentMediaIndices) && (o = y(r, function (t) {
          return s(-1 === t ? i.option : n[t].option)
        })), this._currentMediaIndices = r, o
      }, t
    }(),
    KS = v,
    $S = D,
    QS = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
    JS = [
      ["x", "left"],
      ["y", "top"],
      ["x2", "right"],
      ["y2", "bottom"]
    ],
    tM = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
    eM = [
      ["borderRadius", "barBorderRadius"],
      ["borderColor", "barBorderColor"],
      ["borderWidth", "barBorderWidth"]
    ],
    nM = function () {
      function t(t) {
        this.data = t.data || (t.sourceFormat === TS ? {} : []), this.sourceFormat = t.sourceFormat || IS, this.seriesLayoutBy = t.seriesLayoutBy || kS, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
        var e = this.dimensionsDefine = t.dimensionsDefine;
        if (e)
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            null == i.type && Ul(this, n) === AS.Must && (i.type = "ordinal")
          }
      }
      return t
    }(),
    iM = function () {
      function t(t, e) {
        var n = Tu(t) ? t : Iu(t);
        this._source = n;
        var i = this._data = n.data;
        n.sourceFormat === CS && (this._offset = 0, this._dimSize = e, this._data = i), WS(this, i, n)
      }
      return t.prototype.getSource = function () {
        return this._source
      }, t.prototype.count = function () {
        return 0
      }, t.prototype.getItem = function () {}, t.prototype.appendData = function () {}, t.prototype.clean = function () {}, t.protoInitialize = function () {
        var e = t.prototype;
        e.pure = !1, e.persistent = !0
      }(), t.internalField = function () {
        function t(t) {
          for (var e = 0; e < t.length; e++) this._data.push(t[e])
        }
        var e;
        WS = function (t, e, o) {
          var a = o.sourceFormat,
            s = o.seriesLayoutBy,
            l = o.startIndex,
            u = o.dimensionsDefine,
            c = VS[Nu(a, s)];
          if (h(t, c), a === CS) t.getItem = n, t.count = r, t.fillStorage = i;
          else {
            var p = Bu(a, s);
            t.getItem = cy(p, null, e, l, u);
            var f = zu(a, s);
            t.count = cy(f, null, e, l, u)
          }
        };
        var n = function (t, e) {
            t -= this._offset, e = e || [];
            for (var n = this._data, i = this._dimSize, r = i * t, o = 0; i > o; o++) e[o] = n[r + o];
            return e
          },
          i = function (t, e, n, i) {
            for (var r = this._data, o = this._dimSize, a = 0; o > a; a++) {
              for (var s = i[a], l = null == s[0] ? 1 / 0 : s[0], u = null == s[1] ? -1 / 0 : s[1], h = e - t, c = n[a], p = 0; h > p; p++) {
                var f = r[p * o + a];
                c[t + p] = f, l > f && (l = f), f > u && (u = f)
              }
              s[0] = l, s[1] = u
            }
          },
          r = function () {
            return this._data ? this._data.length / this._dimSize : 0
          };
        e = {}, e[SS + "_" + kS] = {
          pure: !0,
          appendData: t
        }, e[SS + "_" + DS] = {
          pure: !0,
          appendData: function () {
            throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
          }
        }, e[MS] = {
          pure: !0,
          appendData: t
        }, e[TS] = {
          pure: !0,
          appendData: function (t) {
            var e = this._data;
            v(t, function (t, n) {
              for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
            })
          }
        }, e[bS] = {
          appendData: t
        }, e[CS] = {
          persistent: !1,
          pure: !0,
          appendData: function (t) {
            this._data = t
          },
          clean: function () {
            this._offset += this.count(), this._data = null
          }
        }, VS = e
      }(), t
    }(),
    rM = function (t, e, n, i) {
      return t[i]
    },
    oM = (NS = {}, NS[SS + "_" + kS] = function (t, e, n, i) {
      return t[i + e]
    }, NS[SS + "_" + DS] = function (t, e, n, i, r) {
      i += e;
      for (var o = r || [], a = t, s = 0; s < a.length; s++) {
        var l = a[s];
        o[s] = l ? l[i] : null
      }
      return o
    }, NS[MS] = rM, NS[TS] = function (t, e, n, i, r) {
      for (var o = r || [], a = 0; a < n.length; a++) {
        var s = n[a].name,
          l = t[s];
        o[a] = l ? l[i] : null
      }
      return o
    }, NS[bS] = rM, NS),
    aM = function (t) {
      return t.length
    },
    sM = (FS = {}, FS[SS + "_" + kS] = function (t, e) {
      return Math.max(0, t.length - e)
    }, FS[SS + "_" + DS] = function (t, e) {
      var n = t[0];
      return n ? Math.max(0, n.length - e) : 0
    }, FS[MS] = aM, FS[TS] = function (t, e, n) {
      var i = n[0].name,
        r = t[i];
      return r ? r.length : 0
    }, FS[bS] = aM, FS),
    lM = function (t, e) {
      return t[e]
    },
    uM = (HS = {}, HS[SS] = lM, HS[MS] = function (t, e, n) {
      return t[n]
    }, HS[TS] = lM, HS[bS] = function (t, e) {
      var n = cr(t);
      return n instanceof Array ? n[e] : n
    }, HS[CS] = lM, HS),
    hM = /\{@(.+?)\}/g,
    cM = function () {
      function t() {}
      return t.prototype.getDataParams = function (t, e) {
        var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          o = n.getName(t),
          a = n.getRawDataItem(t),
          s = n.getItemVisual(t, "style"),
          l = s && s[n.getItemVisual(t, "drawType") || "fill"],
          u = s && s.stroke,
          h = this.mainType,
          c = "series" === h,
          p = n.userOutput && n.userOutput.get();
        return {
          componentType: h,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: c ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: c ? this.id : null,
          seriesName: c ? this.name : null,
          name: o,
          dataIndex: r,
          data: a,
          dataType: e,
          value: i,
          color: l,
          borderColor: u,
          dimensionNames: p ? p.fullDimensions : null,
          encode: p ? p.encode : null,
          $vars: ["seriesName", "name", "value"]
        }
      }, t.prototype.getFormattedLabel = function (t, e, n, i, r, o) {
        e = e || "normal";
        var a = this.getData(n),
          s = this.getDataParams(t, n);
        if (o && (s.value = o.interpolatedValue), null != i && M(s.value) && (s.value = s.value[i]), !r) {
          var l = a.getItemModel(t);
          r = l.get("normal" === e ? ["label", "formatter"] : [e, "label", "formatter"])
        }
        if (T(r)) return s.status = e, s.dimensionIndex = i, r(s);
        if (C(r)) {
          var u = Il(r, s);
          return u.replace(hM, function (e, n) {
            var i = n.length,
              r = n;
            "[" === r.charAt(0) && "]" === r.charAt(i - 1) && (r = +r.slice(1, i - 1));
            var s = Fu(a, t, r);
            if (o && M(o.interpolatedValue)) {
              var l = a.getDimensionIndex(r);
              l >= 0 && (s = o.interpolatedValue[l])
            }
            return null != s ? s + "" : ""
          })
        }
      }, t.prototype.getRawValue = function (t, e) {
        return Fu(this.getData(e), t)
      }, t.prototype.formatTooltip = function () {}, t
    }(),
    pM = function () {
      function t(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0
      }
      return t.prototype.perform = function (t) {
        function e(t) {
          return !(t >= 1) && (t = 1), t
        }
        var n = this._upstream,
          i = t && t.skip;
        if (this._dirty && n) {
          var r = this.context;
          r.data = r.outputData = n.context.outputData
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var o;
        this._plan && !i && (o = this._plan(this.context));
        var a = e(this._modBy),
          s = this._modDataCount || 0,
          l = e(t && t.modBy),
          u = t && t.modDataCount || 0;
        (a !== l || s !== u) && (o = "reset");
        var h;
        (this._dirty || "reset" === o) && (this._dirty = !1, h = this._doReset(i)), this._modBy = l, this._modDataCount = u;
        var c = t && t.step;
        if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
          var p = this._dueIndex,
            f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
          if (!i && (h || f > p)) {
            var d = this._progress;
            if (M(d))
              for (var g = 0; g < d.length; g++) this._doProgress(d[g], p, f, l, u);
            else this._doProgress(d, p, f, l, u)
          }
          this._dueIndex = f;
          var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
          this._outputDueEnd = v
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished()
      }, t.prototype.dirty = function () {
        this._dirty = !0, this._onDirty && this._onDirty(this.context)
      }, t.prototype._doProgress = function (t, e, n, i, r) {
        fM.reset(e, n, i, r), this._callingProgress = t, this._callingProgress({
          start: e,
          end: n,
          count: n - e,
          next: fM.next
        }, this.context)
      }, t.prototype._doReset = function (t) {
        this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
        var e, n;
        !t && this._reset && (e = this._reset(this.context), e && e.progress && (n = e.forceFirstProgress, e = e.progress), M(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
        var i = this._downstream;
        return i && i.dirty(), n
      }, t.prototype.unfinished = function () {
        return this._progress && this._dueIndex < this._dueEnd
      }, t.prototype.pipe = function (t) {
        (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
      }, t.prototype.dispose = function () {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
      }, t.prototype.getUpstream = function () {
        return this._upstream
      }, t.prototype.getDownstream = function () {
        return this._downstream
      }, t.prototype.setOutputEnd = function (t) {
        this._outputDueEnd = this._settedOutputEnd = t
      }, t
    }(),
    fM = function () {
      function t() {
        return n > i ? i++ : null
      }

      function e() {
        var t = i % a * r + Math.ceil(i / a),
          e = i >= n ? null : o > t ? t : i;
        return i++, e
      }
      var n, i, r, o, a, s = {
        reset: function (l, u, h, c) {
          i = l, n = u, r = h, o = c, a = Math.ceil(o / r), s.next = r > 1 && o > 0 ? e : t
        }
      };
      return s
    }(),
    dM = (Y({
      number: function (t) {
        return parseFloat(t)
      },
      time: function (t) {
        return +Ki(t)
      },
      trim: function (t) {
        return C(t) ? G(t) : t
      }
    }), {
      lt: function (t, e) {
        return e > t
      },
      lte: function (t, e) {
        return e >= t
      },
      gt: function (t, e) {
        return t > e
      },
      gte: function (t, e) {
        return t >= e
      }
    }),
    gM = (function () {
      function t(t, e) {
        if (!k(e)) {
          var n = "";
          sr(n)
        }
        this._opFn = dM[t], this._rvalFloat = nr(e)
      }
      return t.prototype.evaluate = function (t) {
        return k(t) ? this._opFn(t, this._rvalFloat) : this._opFn(nr(t), this._rvalFloat)
      }, t
    }(), function () {
      function t(t, e) {
        var n = "desc" === t;
        this._resultLT = n ? 1 : -1, null == e && (e = n ? "min" : "max"), this._incomparable = "min" === e ? -1 / 0 : 1 / 0
      }
      return t.prototype.evaluate = function (t, e) {
        var n = k(t) ? t : nr(t),
          i = k(e) ? e : nr(e),
          r = isNaN(n),
          o = isNaN(i);
        if (r && (n = this._incomparable), o && (i = this._incomparable), r && o) {
          var a = C(t),
            s = C(e);
          a && (n = s ? t : 0), s && (i = a ? e : 0)
        }
        return i > n ? this._resultLT : n > i ? -this._resultLT : 0
      }, t
    }()),
    vM = (function () {
      function t(t, e) {
        this._rval = e, this._isEQ = t, this._rvalTypeof = typeof e, this._rvalFloat = nr(e)
      }
      return t.prototype.evaluate = function (t) {
        var e = t === this._rval;
        if (!e) {
          var n = typeof t;
          n === this._rvalTypeof || "number" !== n && "number" !== this._rvalTypeof || (e = nr(t) === this._rvalFloat)
        }
        return this._isEQ ? e : !e
      }, t
    }(), function () {
      function t() {}
      return t.prototype.getRawData = function () {
        throw new Error("not supported")
      }, t.prototype.getRawDataItem = function () {
        throw new Error("not supported")
      }, t.prototype.cloneRawData = function () {}, t.prototype.getDimensionInfo = function () {}, t.prototype.cloneAllDimensionInfo = function () {}, t.prototype.count = function () {}, t.prototype.retrieveValue = function () {}, t.prototype.retrieveValueFromItem = function () {}, t.prototype.convertValue = function (t, e) {
        return Wu(t, e)
      }, t
    }()),
    yM = Y(),
    mM = "undefined",
    _M = typeof Uint32Array === mM ? Array : Uint32Array,
    xM = typeof Uint16Array === mM ? Array : Uint16Array,
    wM = typeof Int32Array === mM ? Array : Int32Array,
    bM = typeof Float64Array === mM ? Array : Float64Array,
    SM = {
      "float": bM,
      "int": wM,
      ordinal: Array,
      number: Array,
      time: bM
    },
    MM = function () {
      function t() {
        this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = Y()
      }
      return t.prototype.initData = function (t, e, n) {
        this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
        var i = t.getSource(),
          r = this.defaultDimValueGetter = GS[i.sourceFormat];
        this._dimValueGetter = n || r, this._rawExtent = [];
        Ru(i);
        this._dimensions = y(e, function (t) {
          return {
            type: t.type,
            property: t.property
          }
        }), this._initDataFromProvider(0, t.count())
      }, t.prototype.getProvider = function () {
        return this._provider
      }, t.prototype.getSource = function () {
        return this._provider.getSource()
      }, t.prototype.ensureCalculationDimension = function (t, e) {
        var n = this._calcDimNameToIdx,
          i = this._dimensions,
          r = n.get(t);
        if (null != r) {
          if (i[r].type === e) return r
        } else r = i.length;
        return i[r] = {
          type: e
        }, n.set(t, r), this._chunks[r] = new SM[e || "float"](this._rawCount), this._rawExtent[r] = Ju(), r
      }, t.prototype.collectOrdinalMeta = function (t, e) {
        var n = this._chunks[t],
          i = this._dimensions[t],
          r = this._rawExtent,
          o = i.ordinalOffset || 0,
          a = n.length;
        0 === o && (r[t] = Ju());
        for (var s = r[t], l = o; a > l; l++) {
          var u = n[l] = e.parseAndCollect(n[l]);
          isNaN(u) || (s[0] = Math.min(u, s[0]), s[1] = Math.max(u, s[1]))
        }
        i.ordinalMeta = e, i.ordinalOffset = a, i.type = "ordinal"
      }, t.prototype.getOrdinalMeta = function (t) {
        var e = this._dimensions[t],
          n = e.ordinalMeta;
        return n
      }, t.prototype.getDimensionProperty = function (t) {
        var e = this._dimensions[t];
        return e && e.property
      }, t.prototype.appendData = function (t) {
        var e = this._provider,
          n = this.count();
        e.appendData(t);
        var i = e.count();
        return e.persistent || (i += n), i > n && this._initDataFromProvider(n, i, !0), [n, i]
      }, t.prototype.appendValues = function (t, e) {
        for (var n = this._chunks, i = this._dimensions, r = i.length, o = this._rawExtent, a = this.count(), s = a + Math.max(t.length, e || 0), l = 0; r > l; l++) {
          var u = i[l];
          eh(n, l, u.type, s, !0)
        }
        for (var h = [], c = a; s > c; c++)
          for (var p = c - a, f = 0; r > f; f++) {
            var u = i[f],
              d = GS.arrayRows.call(this, t[p] || h, u.property, p, f);
            n[f][c] = d;
            var g = o[f];
            d < g[0] && (g[0] = d), d > g[1] && (g[1] = d)
          }
        return this._rawCount = this._count = s, {
          start: a,
          end: s
        }
      }, t.prototype._initDataFromProvider = function (t, e, n) {
        for (var i = this._provider, r = this._chunks, o = this._dimensions, a = o.length, s = this._rawExtent, l = y(o, function (t) {
            return t.property
          }), u = 0; a > u; u++) {
          var h = o[u];
          s[u] || (s[u] = Ju()), eh(r, u, h.type, e, n)
        }
        if (i.fillStorage) i.fillStorage(t, e, r, s);
        else
          for (var c = [], p = t; e > p; p++) {
            c = i.getItem(p, c);
            for (var f = 0; a > f; f++) {
              var d = r[f],
                g = this._dimValueGetter(c, l[f], p, f);
              d[p] = g;
              var v = s[f];
              g < v[0] && (v[0] = g), g > v[1] && (v[1] = g)
            }
          }!i.persistent && i.clean && i.clean(), this._rawCount = this._count = e, this._extent = []
      }, t.prototype.count = function () {
        return this._count
      }, t.prototype.get = function (t, e) {
        if (!(e >= 0 && e < this._count)) return 0 / 0;
        var n = this._chunks[t];
        return n ? n[this.getRawIndex(e)] : 0 / 0
      }, t.prototype.getValues = function (t, e) {
        var n = [],
          i = [];
        if (null == e) {
          e = t, t = [];
          for (var r = 0; r < this._dimensions.length; r++) i.push(r)
        } else i = t;
        for (var r = 0, o = i.length; o > r; r++) n.push(this.get(i[r], e));
        return n
      }, t.prototype.getByRawIndex = function (t, e) {
        if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
        var n = this._chunks[t];
        return n ? n[e] : 0 / 0
      }, t.prototype.getSum = function (t) {
        var e = this._chunks[t],
          n = 0;
        if (e)
          for (var i = 0, r = this.count(); r > i; i++) {
            var o = this.get(t, i);
            isNaN(o) || (n += o)
          }
        return n
      }, t.prototype.getMedian = function (t) {
        var e = [];
        this.each([t], function (t) {
          isNaN(t) || e.push(t)
        });
        var n = e.sort(function (t, e) {
            return t - e
          }),
          i = this.count();
        return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
      }, t.prototype.indexOfRawIndex = function (t) {
        if (t >= this._rawCount || 0 > t) return -1;
        if (!this._indices) return t;
        var e = this._indices,
          n = e[t];
        if (null != n && n < this._count && n === t) return t;
        for (var i = 0, r = this._count - 1; r >= i;) {
          var o = (i + r) / 2 | 0;
          if (e[o] < t) i = o + 1;
          else {
            if (!(e[o] > t)) return o;
            r = o - 1
          }
        }
        return -1
      }, t.prototype.indicesOfNearest = function (t, e, n) {
        var i = this._chunks,
          r = i[t],
          o = [];
        if (!r) return o;
        null == n && (n = 1 / 0);
        for (var a = 1 / 0, s = -1, l = 0, u = 0, h = this.count(); h > u; u++) {
          var c = this.getRawIndex(u),
            p = e - r[c],
            f = Math.abs(p);
          n >= f && ((a > f || f === a && p >= 0 && 0 > s) && (a = f, s = p, l = 0), p === s && (o[l++] = u))
        }
        return o.length = l, o
      }, t.prototype.getIndices = function () {
        var t, e = this._indices;
        if (e) {
          var n = e.constructor,
            i = this._count;
          if (n === Array) {
            t = new n(i);
            for (var r = 0; i > r; r++) t[r] = e[r]
          } else t = new n(e.buffer, 0, i)
        } else {
          var n = Qu(this._rawCount);
          t = new n(this.count());
          for (var r = 0; r < t.length; r++) t[r] = r
        }
        return t
      }, t.prototype.filter = function (t, e) {
        if (!this._count) return this;
        for (var n = this.clone(), i = n.count(), r = Qu(n._rawCount), o = new r(i), a = [], s = t.length, l = 0, u = t[0], h = n._chunks, c = 0; i > c; c++) {
          var p = void 0,
            f = n.getRawIndex(c);
          if (0 === s) p = e(c);
          else if (1 === s) {
            var d = h[u][f];
            p = e(d, c)
          } else {
            for (var g = 0; s > g; g++) a[g] = h[t[g]][f];
            a[g] = c, p = e.apply(null, a)
          }
          p && (o[l++] = f)
        }
        return i > l && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n
      }, t.prototype.selectRange = function (t) {
        var e = this.clone(),
          n = e._count;
        if (!n) return this;
        var i = w(t),
          r = i.length;
        if (!r) return this;
        var o = e.count(),
          a = Qu(e._rawCount),
          s = new a(o),
          l = 0,
          u = i[0],
          h = t[u][0],
          c = t[u][1],
          p = e._chunks,
          f = !1;
        if (!e._indices) {
          var d = 0;
          if (1 === r) {
            for (var g = p[i[0]], v = 0; n > v; v++) {
              var y = g[v];
              (y >= h && c >= y || isNaN(y)) && (s[l++] = d), d++
            }
            f = !0
          } else if (2 === r) {
            for (var g = p[i[0]], m = p[i[1]], _ = t[i[1]][0], x = t[i[1]][1], v = 0; n > v; v++) {
              var y = g[v],
                b = m[v];
              (y >= h && c >= y || isNaN(y)) && (b >= _ && x >= b || isNaN(b)) && (s[l++] = d), d++
            }
            f = !0
          }
        }
        if (!f)
          if (1 === r)
            for (var v = 0; o > v; v++) {
              var S = e.getRawIndex(v),
                y = p[i[0]][S];
              (y >= h && c >= y || isNaN(y)) && (s[l++] = S)
            } else
              for (var v = 0; o > v; v++) {
                for (var M = !0, S = e.getRawIndex(v), T = 0; r > T; T++) {
                  var C = i[T],
                    y = p[C][S];
                  (y < t[C][0] || y > t[C][1]) && (M = !1)
                }
                M && (s[l++] = e.getRawIndex(v))
              }
        return o > l && (e._indices = s), e._count = l, e._extent = [], e._updateGetRawIdx(), e
      }, t.prototype.map = function (t, e) {
        var n = this.clone(t);
        return this._updateDims(n, t, e), n
      }, t.prototype.modify = function (t, e) {
        this._updateDims(this, t, e)
      }, t.prototype._updateDims = function (t, e, n) {
        for (var i = t._chunks, r = [], o = e.length, a = t.count(), s = [], l = t._rawExtent, u = 0; u < e.length; u++) l[e[u]] = Ju();
        for (var h = 0; a > h; h++) {
          for (var c = t.getRawIndex(h), p = 0; o > p; p++) s[p] = i[e[p]][c];
          s[o] = h;
          var f = n && n.apply(null, s);
          if (null != f) {
            "object" != typeof f && (r[0] = f, f = r);
            for (var u = 0; u < f.length; u++) {
              var d = e[u],
                g = f[u],
                v = l[d],
                y = i[d];
              y && (y[c] = g), g < v[0] && (v[0] = g), g > v[1] && (v[1] = g)
            }
          }
        }
      }, t.prototype.lttbDownSample = function (t, e) {
        var n, i, r, o = this.clone([t], !0),
          a = o._chunks,
          s = a[t],
          l = this.count(),
          u = 0,
          h = Math.floor(1 / e),
          c = this.getRawIndex(0),
          p = new(Qu(this._rawCount))(Math.min(2 * (Math.ceil(l / h) + 2), l));
        p[u++] = c;
        for (var f = 1; l - 1 > f; f += h) {
          for (var d = Math.min(f + h, l - 1), g = Math.min(f + 2 * h, l), v = (g + d) / 2, y = 0, m = d; g > m; m++) {
            var _ = this.getRawIndex(m),
              x = s[_];
            isNaN(x) || (y += x)
          }
          y /= g - d;
          var w = f,
            b = Math.min(f + h, l),
            S = f - 1,
            M = s[c];
          n = -1, r = w;
          for (var T = -1, C = 0, m = w; b > m; m++) {
            var _ = this.getRawIndex(m),
              x = s[_];
            isNaN(x) ? (C++, 0 > T && (T = _)) : (i = Math.abs((S - v) * (x - M) - (S - m) * (y - M)), i > n && (n = i, r = _))
          }
          C > 0 && b - w > C && (p[u++] = Math.min(T, r), r = Math.max(T, r)), p[u++] = r, c = r
        }
        return p[u++] = this.getRawIndex(l - 1), o._count = u, o._indices = p, o.getRawIndex = this._getRawIdx, o
      }, t.prototype.downSample = function (t, e, n, i) {
        for (var r = this.clone([t], !0), o = r._chunks, a = [], s = Math.floor(1 / e), l = o[t], u = this.count(), h = r._rawExtent[t] = Ju(), c = new(Qu(this._rawCount))(Math.ceil(u / s)), p = 0, f = 0; u > f; f += s) {
          s > u - f && (s = u - f, a.length = s);
          for (var d = 0; s > d; d++) {
            var g = this.getRawIndex(f + d);
            a[d] = l[g]
          }
          var v = n(a),
            y = this.getRawIndex(Math.min(f + i(a, v) || 0, u - 1));
          l[y] = v, v < h[0] && (h[0] = v), v > h[1] && (h[1] = v), c[p++] = y
        }
        return r._count = p, r._indices = c, r._updateGetRawIdx(), r
      }, t.prototype.each = function (t, e) {
        if (this._count)
          for (var n = t.length, i = this._chunks, r = 0, o = this.count(); o > r; r++) {
            var a = this.getRawIndex(r);
            switch (n) {
              case 0:
                e(r);
                break;
              case 1:
                e(i[t[0]][a], r);
                break;
              case 2:
                e(i[t[0]][a], i[t[1]][a], r);
                break;
              default:
                for (var s = 0, l = []; n > s; s++) l[s] = i[t[s]][a];
                l[s] = r, e.apply(null, l)
            }
          }
      }, t.prototype.getDataExtent = function (t) {
        var e = this._chunks[t],
          n = Ju();
        if (!e) return n;
        var i, r = this.count(),
          o = !this._indices;
        if (o) return this._rawExtent[t].slice();
        if (i = this._extent[t]) return i.slice();
        i = n;
        for (var a = i[0], s = i[1], l = 0; r > l; l++) {
          var u = this.getRawIndex(l),
            h = e[u];
          a > h && (a = h), h > s && (s = h)
        }
        return i = [a, s], this._extent[t] = i, i
      }, t.prototype.getRawDataItem = function (t) {
        var e = this.getRawIndex(t);
        if (this._provider.persistent) return this._provider.getItem(e);
        for (var n = [], i = this._chunks, r = 0; r < i.length; r++) n.push(i[r][e]);
        return n
      }, t.prototype.clone = function (e, n) {
        var i = new t,
          r = this._chunks,
          o = e && m(e, function (t, e) {
            return t[e] = !0, t
          }, {});
        if (o)
          for (var a = 0; a < r.length; a++) i._chunks[a] = o[a] ? th(r[a]) : r[a];
        else i._chunks = r;
        return this._copyCommonProps(i), n || (i._indices = this._cloneIndices()), i._updateGetRawIdx(), i
      }, t.prototype._copyCommonProps = function (t) {
        t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = s(this._extent), t._rawExtent = s(this._rawExtent)
      }, t.prototype._cloneIndices = function () {
        if (this._indices) {
          var t = this._indices.constructor,
            e = void 0;
          if (t === Array) {
            var n = this._indices.length;
            e = new t(n);
            for (var i = 0; n > i; i++) e[i] = this._indices[i]
          } else e = new t(this._indices);
          return e
        }
        return null
      }, t.prototype._getRawIdxIdentity = function (t) {
        return t
      }, t.prototype._getRawIdx = function (t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1
      }, t.prototype._updateGetRawIdx = function () {
        this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity
      }, t.internalField = function () {
        function t(t, e, n, i) {
          return Wu(t[i], this._dimensions[i])
        }
        GS = {
          arrayRows: t,
          objectRows: function (t, e, n, i) {
            return Wu(t[e], this._dimensions[i])
          },
          keyedColumns: t,
          original: function (t, e, n, i) {
            var r = t && (null == t.value ? t : t.value);
            return Wu(r instanceof Array ? r[i] : r, this._dimensions[i])
          },
          typedArray: function (t, e, n, i) {
            return t[i]
          }
        }
      }(), t
    }(),
    TM = function () {
      function t(t) {
        this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t
      }
      return t.prototype.dirty = function () {
        this._setLocalSource([], []), this._storeList = [], this._dirty = !0
      }, t.prototype._setLocalSource = function (t, e) {
        this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0)
      }, t.prototype._getVersionSign = function () {
        return this._sourceHost.uid + "_" + this._versionSignBase
      }, t.prototype.prepareSource = function () {
        this._isDirty() && (this._createSource(), this._dirty = !1)
      }, t.prototype._createSource = function () {
        this._setLocalSource([], []);
        var t, e, n = this._sourceHost,
          i = this._getUpstreamSourceManagers(),
          r = !!i.length;
        if (ih(n)) {
          var o = n,
            a = void 0,
            s = void 0,
            l = void 0;
          if (r) {
            var u = i[0];
            u.prepareSource(), l = u.getSource(), a = l.data, s = l.sourceFormat, e = [u._getVersionSign()]
          } else a = o.get("data", !0), s = P(a) ? CS : bS, e = [];
          var h = this._getSourceMetaRawOption() || {},
            c = l && l.metaRawOption || {},
            p = N(h.seriesLayoutBy, c.seriesLayoutBy) || null,
            f = N(h.sourceHeader, c.sourceHeader),
            d = N(h.dimensions, c.dimensions),
            g = p !== c.seriesLayoutBy || !!f != !!c.sourceHeader || d;
          t = g ? [Cu(a, {
            seriesLayoutBy: p,
            sourceHeader: f,
            dimensions: d
          }, s)] : []
        } else {
          var v = n;
          if (r) {
            var y = this._applyTransform(i);
            t = y.sourceList, e = y.upstreamSignList
          } else {
            var m = v.get("source", !0);
            t = [Cu(m, this._getSourceMetaRawOption(), null)], e = []
          }
        }
        this._setLocalSource(t, e)
      }, t.prototype._applyTransform = function (t) {
        var e = this._sourceHost,
          n = e.get("transform", !0),
          i = e.get("fromTransformResult", !0);
        if (null != i) {
          var r = "";
          1 !== t.length && rh(r)
        }
        var o, a = [],
          s = [];
        return v(t, function (t) {
          t.prepareSource();
          var e = t.getSource(i || 0),
            n = "";
          null == i || e || rh(n), a.push(e), s.push(t._getVersionSign())
        }), n ? o = Zu(n, a, {
          datasetIndex: e.componentIndex
        }) : null != i && (o = [ku(a[0])]), {
          sourceList: o,
          upstreamSignList: s
        }
      }, t.prototype._isDirty = function () {
        if (this._dirty) return !0;
        for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
          var n = t[e];
          if (n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign()) return !0
        }
      }, t.prototype.getSource = function (t) {
        t = t || 0;
        var e = this._sourceList[t];
        if (!e) {
          var n = this._getUpstreamSourceManagers();
          return n[0] && n[0].getSource(t)
        }
        return e
      }, t.prototype.getSharedDataStore = function (t) {
        var e = t.makeStoreSchema();
        return this._innerGetDataStore(e.dimensions, t.source, e.hash)
      }, t.prototype._innerGetDataStore = function (t, e, n) {
        var i = 0,
          r = this._storeList,
          o = r[i];
        o || (o = r[i] = {});
        var a = o[n];
        if (!a) {
          var s = this._getUpstreamSourceManagers()[0];
          ih(this._sourceHost) && s ? a = s._innerGetDataStore(t, e, n) : (a = new MM, a.initData(new iM(e, t.length), t)), o[n] = a
        }
        return a
      }, t.prototype._getUpstreamSourceManagers = function () {
        var t = this._sourceHost;
        if (ih(t)) {
          var e = Wl(t);
          return e ? [e.getSourceManager()] : []
        }
        return y(Gl(t), function (t) {
          return t.getSourceManager()
        })
      }, t.prototype._getSourceMetaRawOption = function () {
        var t, e, n, i = this._sourceHost;
        if (ih(i)) t = i.get("seriesLayoutBy", !0), e = i.get("sourceHeader", !0), n = i.get("dimensions", !0);
        else if (!this._getUpstreamSourceManagers().length) {
          var r = i;
          t = r.get("seriesLayoutBy", !0), e = r.get("sourceHeader", !0), n = r.get("dimensions", !0)
        }
        return {
          seriesLayoutBy: t,
          sourceHeader: e,
          dimensions: n
        }
      }, t
    }(),
    CM = "line-height:1",
    IM = [0, 10, 20, 30],
    kM = ["", "\n", "\n\n", "\n\n\n"],
    DM = function () {
      function t() {
        this.richTextStyles = {}, this._nextStyleNameId = rr()
      }
      return t.prototype._generateStyleName = function () {
        return "__EC_aUTo_" + this._nextStyleNameId++
      }, t.prototype.makeTooltipMarker = function (t, e, n) {
        var i = "richText" === n ? this._generateStyleName() : null,
          r = kl({
            color: e,
            type: t,
            renderMode: n,
            markerId: i
          });
        return C(r) ? r : (this.richTextStyles[i] = r.style, r.content)
      }, t.prototype.wrapRichTextStyle = function (t, e) {
        var n = {};
        M(e) ? v(e, function (t) {
          return h(n, t)
        }) : h(n, e);
        var i = this._generateStyleName();
        return this.richTextStyles[i] = n, "{" + i + "|" + t + "}"
      }, t
    }(),
    AM = kr(),
    PM = "__universalTransitionEnabled",
    LM = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e._selectedDataIndicesMap = {}, e
      }
      return e(n, t), n.prototype.init = function (t, e, n) {
        this.seriesIndex = this.componentIndex, this.dataTask = Vu({
          count: Ch,
          reset: Ih
        }), this.dataTask.context = {
          model: this
        }, this.mergeDefaultAndTheme(t, n);
        var i = AM(this).sourceManager = new TM(this);
        i.prepareSource();
        var r = this.getInitialData(t, n);
        Dh(r, this), this.dataTask.context.data = r, AM(this).dataBeforeProcessed = r, Mh(this), this._initSelectedMapFromData(r)
      }, n.prototype.mergeDefaultAndTheme = function (t, e) {
        var n = Bl(this),
          i = n ? El(t) : {},
          r = this.subType;
        gS.hasClass(r) && (r += "Series"), l(t, e.getTheme().get(this.subType)), l(t, this.getDefaultOption()), hr(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && zl(t, i, n)
      }, n.prototype.mergeOption = function (t, e) {
        t = l(this.option, t, !0), this.fillDataTextStyle(t.data);
        var n = Bl(this);
        n && zl(this.option, t, n);
        var i = AM(this).sourceManager;
        i.dirty(), i.prepareSource();
        var r = this.getInitialData(t, e);
        Dh(r, this), this.dataTask.dirty(), this.dataTask.context.data = r, AM(this).dataBeforeProcessed = r, Mh(this), this._initSelectedMapFromData(r)
      }, n.prototype.fillDataTextStyle = function (t) {
        if (t && !P(t))
          for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && hr(t[n], "label", e)
      }, n.prototype.getInitialData = function () {}, n.prototype.appendData = function (t) {
        var e = this.getRawData();
        e.appendData(t.data)
      }, n.prototype.getData = function (t) {
        var e = Ph(this);
        if (e) {
          var n = e.context.data;
          return null == t ? n : n.getLinkedData(t)
        }
        return AM(this).data
      }, n.prototype.getAllData = function () {
        var t = this.getData();
        return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [{
          data: t
        }]
      }, n.prototype.setData = function (t) {
        var e = Ph(this);
        if (e) {
          var n = e.context;
          n.outputData = t, e !== this.dataTask && (n.data = t)
        }
        AM(this).data = t
      }, n.prototype.getEncode = function () {
        var t = this.get("encode", !0);
        return t ? Y(t) : void 0
      }, n.prototype.getSourceManager = function () {
        return AM(this).sourceManager
      }, n.prototype.getSource = function () {
        return this.getSourceManager().getSource()
      }, n.prototype.getRawData = function () {
        return AM(this).dataBeforeProcessed
      }, n.prototype.getColorBy = function () {
        var t = this.get("colorBy");
        return t || "series"
      }, n.prototype.isColorBySeries = function () {
        return "series" === this.getColorBy()
      }, n.prototype.getBaseAxis = function () {
        var t = this.coordinateSystem;
        return t && t.getBaseAxis && t.getBaseAxis()
      }, n.prototype.formatTooltip = function (t, e) {
        return wh({
          series: this,
          dataIndex: t,
          multipleSeries: e
        })
      }, n.prototype.isAnimationEnabled = function () {
        var t = this.ecModel;
        if (Gv.node && (!t || !t.ssr)) return !1;
        var e = this.getShallow("animation");
        return e && this.getData().count() > this.getShallow("animationThreshold") && (e = !1), !!e
      }, n.prototype.restoreData = function () {
        this.dataTask.dirty()
      }, n.prototype.getColorFromPalette = function (t, e, n) {
        var i = this.ecModel,
          r = RS.prototype.getColorFromPalette.call(this, t, e, n);
        return r || (r = i.getColorFromPalette(t, e, n)), r
      }, n.prototype.coordDimToDataDim = function (t) {
        return this.getRawData().mapDimensionsAll(t)
      }, n.prototype.getProgressive = function () {
        return this.get("progressive")
      }, n.prototype.getProgressiveThreshold = function () {
        return this.get("progressiveThreshold")
      }, n.prototype.select = function (t, e) {
        this._innerSelect(this.getData(e), t)
      }, n.prototype.unselect = function (t, e) {
        var n = this.option.selectedMap;
        if (n) {
          var i = this.option.selectedMode,
            r = this.getData(e);
          if ("series" === i || "all" === n) return this.option.selectedMap = {}, void(this._selectedDataIndicesMap = {});
          for (var o = 0; o < t.length; o++) {
            var a = t[o],
              s = Sh(r, a);
            n[s] = !1, this._selectedDataIndicesMap[s] = -1
          }
        }
      }, n.prototype.toggleSelect = function (t, e) {
        for (var n = [], i = 0; i < t.length; i++) n[0] = t[i], this.isSelected(t[i], e) ? this.unselect(n, e) : this.select(n, e)
      }, n.prototype.getSelectedDataIndices = function () {
        if ("all" === this.option.selectedMap) return [].slice.call(this.getData().getIndices());
        for (var t = this._selectedDataIndicesMap, e = w(t), n = [], i = 0; i < e.length; i++) {
          var r = t[e[i]];
          r >= 0 && n.push(r)
        }
        return n
      }, n.prototype.isSelected = function (t, e) {
        var n = this.option.selectedMap;
        if (!n) return !1;
        var i = this.getData(e);
        return ("all" === n || n[Sh(i, t)]) && !i.getItemModel(t).get(["select", "disabled"])
      }, n.prototype.isUniversalTransitionEnabled = function () {
        if (this[PM]) return !0;
        var t = this.option.universalTransition;
        return t ? t === !0 ? !0 : t && t.enabled : !1
      }, n.prototype._innerSelect = function (t, e) {
        var n, i, r = this.option,
          o = r.selectedMode,
          a = e.length;
        if (o && a)
          if ("series" === o) r.selectedMap = "all";
          else if ("multiple" === o) {
          D(r.selectedMap) || (r.selectedMap = {});
          for (var s = r.selectedMap, l = 0; a > l; l++) {
            var u = e[l],
              h = Sh(t, u);
            s[h] = !0, this._selectedDataIndicesMap[h] = t.getRawIndex(u)
          }
        } else if ("single" === o || o === !0) {
          var c = e[a - 1],
            h = Sh(t, c);
          r.selectedMap = (n = {}, n[h] = !0, n), this._selectedDataIndicesMap = (i = {}, i[h] = t.getRawIndex(c), i)
        }
      }, n.prototype._initSelectedMapFromData = function (t) {
        if (!this.option.selectedMap) {
          var e = [];
          t.hasItemOption && t.each(function (n) {
            var i = t.getRawDataItem(n);
            i && i.selected && e.push(n)
          }), e.length > 0 && this._innerSelect(t, e)
        }
      }, n.registerClass = function (t) {
        return gS.registerClass(t)
      }, n.protoInitialize = function () {
        var t = n.prototype;
        t.type = "series.__base__", t.seriesIndex = 0, t.ignoreStyleOnData = !1, t.hasSymbolVisual = !1, t.defaultSymbol = "circle", t.visualStyleAccessPath = "itemStyle", t.visualDrawType = "fill"
      }(), n
    }(gS);
  d(LM, cM), d(LM, RS), Vr(LM, gS);
  var OM = function () {
    function t() {
      this.group = new d_, this.uid = Ys("viewComponent")
    }
    return t.prototype.init = function () {}, t.prototype.render = function () {}, t.prototype.dispose = function () {}, t.prototype.updateView = function () {}, t.prototype.updateLayout = function () {}, t.prototype.updateVisual = function () {}, t.prototype.toggleBlurSeries = function () {}, t.prototype.eachRendered = function (t) {
      var e = this.group;
      e && e.traverse(t)
    }, t
  }();
  Fr(OM), Xr(OM);
  var RM = kr(),
    BM = Lh(),
    zM = function () {
      function t() {
        this.group = new d_, this.uid = Ys("viewChart"), this.renderTask = Vu({
          plan: Bh,
          reset: zh
        }), this.renderTask.context = {
          view: this
        }
      }
      return t.prototype.init = function () {}, t.prototype.render = function () {}, t.prototype.highlight = function (t, e, n, i) {
        var r = t.getData(i && i.dataType);
        r && Rh(r, i, "emphasis")
      }, t.prototype.downplay = function (t, e, n, i) {
        var r = t.getData(i && i.dataType);
        r && Rh(r, i, "normal")
      }, t.prototype.remove = function () {
        this.group.removeAll()
      }, t.prototype.dispose = function () {}, t.prototype.updateView = function (t, e, n, i) {
        this.render(t, e, n, i)
      }, t.prototype.updateLayout = function (t, e, n, i) {
        this.render(t, e, n, i)
      }, t.prototype.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i)
      }, t.prototype.eachRendered = function (t) {
        Rs(this.group, t)
      }, t.markUpdateMethod = function (t, e) {
        RM(t).updateMethod = e
      }, t.protoInitialize = function () {
        var e = t.prototype;
        e.type = "chart"
      }(), t
    }();
  Fr(zM, ["dispose"]), Xr(zM);
  var EM, NM = {
      incrementalPrepareRender: {
        progress: function (t, e) {
          e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
        }
      },
      render: {
        forceFirstProgress: !0,
        progress: function (t, e) {
          e.view.render(e.model, e.ecModel, e.api, e.payload)
        }
      }
    },
    FM = "\x00__throttleOriginMethod",
    HM = "\x00__throttleRate",
    VM = "\x00__throttleType",
    WM = kr(),
    GM = {
      itemStyle: Yr(zb, !0),
      lineStyle: Yr(Ob, !0)
    },
    UM = {
      lineStyle: "stroke",
      itemStyle: "fill"
    },
    XM = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        var n = t.getData(),
          i = t.visualStyleAccessPath || "itemStyle",
          r = t.getModel(i),
          o = Hh(t, i),
          a = o(r),
          s = r.getShallow("decal");
        s && (n.setVisual("decal", s), s.dirty = !0);
        var l = Vh(t, i),
          u = a[l],
          c = T(u) ? u : null,
          p = "auto" === a.fill || "auto" === a.stroke;
        if (!a[l] || c || p) {
          var f = t.getColorFromPalette(t.name, null, e.getSeriesCount());
          a[l] || (a[l] = f, n.setVisual("colorFromPalette", !0)), a.fill = "auto" === a.fill || T(a.fill) ? f : a.fill, a.stroke = "auto" === a.stroke || T(a.stroke) ? f : a.stroke
        }
        return n.setVisual("style", a), n.setVisual("drawType", l), !e.isSeriesFiltered(t) && c ? (n.setVisual("colorFromPalette", !1), {
          dataEach: function (e, n) {
            var i = t.getDataParams(n),
              r = h({}, a);
            r[l] = c(i), e.setItemVisual(n, "style", r)
          }
        }) : void 0
      }
    },
    YM = new Fb,
    qM = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t)) {
          var n = t.getData(),
            i = t.visualStyleAccessPath || "itemStyle",
            r = Hh(t, i),
            o = n.getVisual("drawType");
          return {
            dataEach: n.hasItemOption ? function (t, e) {
              var n = t.getRawDataItem(e);
              if (n && n[i]) {
                YM.option = n[i];
                var a = r(YM),
                  s = t.ensureUniqueItemVisual(e, "style");
                h(s, a), YM.option.decal && (t.setItemVisual(e, "decal", YM.option.decal), YM.option.decal.dirty = !0), o in a && t.setItemVisual(e, "colorFromPalette", !1)
              }
            } : null
          }
        }
      }
    },
    jM = {
      performRawSeries: !0,
      overallReset: function (t) {
        var e = Y();
        t.eachSeries(function (t) {
          var n = t.getColorBy();
          if (!t.isColorBySeries()) {
            var i = t.type + "-" + n,
              r = e.get(i);
            r || (r = {}, e.set(i, r)), WM(t).scope = r
          }
        }), t.eachSeries(function (e) {
          if (!e.isColorBySeries() && !t.isSeriesFiltered(e)) {
            var n = e.getRawData(),
              i = {},
              r = e.getData(),
              o = WM(e).scope,
              a = e.visualStyleAccessPath || "itemStyle",
              s = Vh(e, a);
            r.each(function (t) {
              var e = r.getRawIndex(t);
              i[e] = t
            }), n.each(function (t) {
              var a = i[t],
                l = r.getItemVisual(a, "colorFromPalette");
              if (l) {
                var u = r.ensureUniqueItemVisual(a, "style"),
                  h = n.getName(t) || t + "",
                  c = n.count();
                u[s] = e.getColorFromPalette(h, o, c)
              }
            })
          }
        })
      }
    },
    ZM = Math.PI,
    KM = function () {
      function t(t, e, n, i) {
        this._stageTaskMap = Y(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i)
      }
      return t.prototype.restoreData = function (t, e) {
        t.restoreData(e), this._stageTaskMap.each(function (t) {
          var e = t.overallTask;
          e && e.dirty()
        })
      }, t.prototype.getPerformArgs = function (t, e) {
        if (t.__pipeline) {
          var n = this._pipelineMap.get(t.__pipeline.id),
            i = n.context,
            r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
            o = r ? n.step : null,
            a = i && i.modDataCount,
            s = null != a ? Math.ceil(a / o) : null;
          return {
            step: o,
            modBy: s,
            modDataCount: a
          }
        }
      }, t.prototype.getPipeline = function (t) {
        return this._pipelineMap.get(t)
      }, t.prototype.updateStreamModes = function (t, e) {
        var n = this._pipelineMap.get(t.uid),
          i = t.getData(),
          r = i.count(),
          o = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
          a = t.get("large") && r >= t.get("largeThreshold"),
          s = "mod" === t.get("progressiveChunkMode") ? r : null;
        t.pipelineContext = n.context = {
          progressiveRender: o,
          modDataCount: s,
          large: a
        }
      }, t.prototype.restorePipelines = function (t) {
        var e = this,
          n = e._pipelineMap = Y();
        t.eachSeries(function (t) {
          var i = t.getProgressive(),
            r = t.uid;
          n.set(r, {
            id: r,
            head: null,
            tail: null,
            threshold: t.getProgressiveThreshold(),
            progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
            blockIndex: -1,
            step: Math.round(i || 700),
            count: 0
          }), e._pipe(t, t.dataTask)
        })
      }, t.prototype.prepareStageTasks = function () {
        var t = this._stageTaskMap,
          e = this.api.getModel(),
          n = this.api;
        v(this._allHandlers, function (i) {
          var r = t.get(i.uid) || t.set(i.uid, {}),
            o = "";
          W(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, r, e, n), i.overallReset && this._createOverallStageTask(i, r, e, n)
        }, this)
      }, t.prototype.prepareView = function (t, e, n, i) {
        var r = t.renderTask,
          o = r.context;
        o.model = e, o.ecModel = n, o.api = i, r.__block = !t.incrementalPrepareRender, this._pipe(e, r)
      }, t.prototype.performDataProcessorTasks = function (t, e) {
        this._performStageTasks(this._dataProcessorHandlers, t, e, {
          block: !0
        })
      }, t.prototype.performVisualTasks = function (t, e, n) {
        this._performStageTasks(this._visualHandlers, t, e, n)
      }, t.prototype._performStageTasks = function (t, e, n, i) {
        function r(t, e) {
          return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
        }
        i = i || {};
        var o = !1,
          a = this;
        v(t, function (t) {
          if (!i.visualType || i.visualType === t.visualType) {
            var s = a._stageTaskMap.get(t.uid),
              l = s.seriesTaskMap,
              u = s.overallTask;
            if (u) {
              var h, c = u.agentStubMap;
              c.each(function (t) {
                r(i, t) && (t.dirty(), h = !0)
              }), h && u.dirty(), a.updatePayload(u, n);
              var p = a.getPerformArgs(u, i.block);
              c.each(function (t) {
                t.perform(p)
              }), u.perform(p) && (o = !0)
            } else l && l.each(function (s) {
              r(i, s) && s.dirty();
              var l = a.getPerformArgs(s, i.block);
              l.skip = !t.performRawSeries && e.isSeriesFiltered(s.context.model), a.updatePayload(s, n), s.perform(l) && (o = !0)
            })
          }
        }), this.unfinished = o || this.unfinished
      }, t.prototype.performSeriesTasks = function (t) {
        var e;
        t.eachSeries(function (t) {
          e = t.dataTask.perform() || e
        }), this.unfinished = e || this.unfinished
      }, t.prototype.plan = function () {
        this._pipelineMap.each(function (t) {
          var e = t.tail;
          do {
            if (e.__block) {
              t.blockIndex = e.__idxInPipeline;
              break
            }
            e = e.getUpstream()
          } while (e)
        })
      }, t.prototype.updatePayload = function (t, e) {
        "remain" !== e && (t.context.payload = e)
      }, t.prototype._createSeriesStageTask = function (t, e, n, i) {
        function r(e) {
          var r = e.uid,
            l = s.set(r, a && a.get(r) || Vu({
              plan: qh,
              reset: jh,
              count: Kh
            }));
          l.context = {
            model: e,
            ecModel: n,
            api: i,
            useClearVisual: t.isVisual && !t.isLayout,
            plan: t.plan,
            reset: t.reset,
            scheduler: o
          }, o._pipe(e, l)
        }
        var o = this,
          a = e.seriesTaskMap,
          s = e.seriesTaskMap = Y(),
          l = t.seriesType,
          u = t.getTargetSeries;
        t.createOnAllSeries ? n.eachRawSeries(r) : l ? n.eachRawSeriesByType(l, r) : u && u(n, i).each(r)
      }, t.prototype._createOverallStageTask = function (t, e, n, i) {
        function r(t) {
          var e = t.uid,
            n = l.set(e, s && s.get(e) || (p = !0, Vu({
              reset: Uh,
              onDirty: Yh
            })));
          n.context = {
            model: t,
            overallProgress: c
          }, n.agent = a, n.__block = c, o._pipe(t, n)
        }
        var o = this,
          a = e.overallTask = e.overallTask || Vu({
            reset: Gh
          });
        a.context = {
          ecModel: n,
          api: i,
          overallReset: t.overallReset,
          scheduler: o
        };
        var s = a.agentStubMap,
          l = a.agentStubMap = Y(),
          u = t.seriesType,
          h = t.getTargetSeries,
          c = !0,
          p = !1,
          f = "";
        W(!t.createOnAllSeries, f), u ? n.eachRawSeriesByType(u, r) : h ? h(n, i).each(r) : (c = !1, v(n.getSeries(), r)), p && a.dirty()
      }, t.prototype._pipe = function (t, e) {
        var n = t.uid,
          i = this._pipelineMap.get(n);
        !i.head && (i.head = e), i.tail && i.tail.pipe(e), i.tail = e, e.__idxInPipeline = i.count++, e.__pipeline = i
      }, t.wrapStageHandler = function (t, e) {
        return T(t) && (t = {
          overallReset: t,
          seriesType: $h(t)
        }), t.uid = Ys("stageHandler"), e && (t.visualType = e), t
      }, t
    }(),
    $M = Zh(0),
    QM = {},
    JM = {};
  Qh(QM, ES), Qh(JM, XS), QM.eachSeriesByType = QM.eachRawSeriesByType = function (t) {
    EM = t
  }, QM.eachComponent = function (t) {
    "series" === t.mainType && t.subType && (EM = t.subType)
  };
  var tT = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
    eT = {
      color: tT,
      colorLayer: [
        ["#37A2DA", "#ffd85c", "#fd7b5f"],
        ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
        ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], tT
      ]
    },
    nT = "#B9B8CE",
    iT = "#100C2A",
    rT = function () {
      return {
        axisLine: {
          lineStyle: {
            color: nT
          }
        },
        splitLine: {
          lineStyle: {
            color: "#484753"
          }
        },
        splitArea: {
          areaStyle: {
            color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
          }
        },
        minorSplitLine: {
          lineStyle: {
            color: "#20203B"
          }
        }
      }
    },
    oT = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"],
    aT = {
      darkMode: !0,
      color: oT,
      backgroundColor: iT,
      axisPointer: {
        lineStyle: {
          color: "#817f91"
        },
        crossStyle: {
          color: "#817f91"
        },
        label: {
          color: "#fff"
        }
      },
      legend: {
        textStyle: {
          color: nT
        }
      },
      textStyle: {
        color: nT
      },
      title: {
        textStyle: {
          color: "#EEF1FA"
        },
        subtextStyle: {
          color: "#B9B8CE"
        }
      },
      toolbox: {
        iconStyle: {
          borderColor: nT
        }
      },
      dataZoom: {
        borderColor: "#71708A",
        textStyle: {
          color: nT
        },
        brushStyle: {
          color: "rgba(135,163,206,0.3)"
        },
        handleStyle: {
          color: "#353450",
          borderColor: "#C5CBE3"
        },
        moveHandleStyle: {
          color: "#B0B6C3",
          opacity: .3
        },
        fillerColor: "rgba(135,163,206,0.2)",
        emphasis: {
          handleStyle: {
            borderColor: "#91B7F2",
            color: "#4D587D"
          },
          moveHandleStyle: {
            color: "#636D9A",
            opacity: .7
          }
        },
        dataBackground: {
          lineStyle: {
            color: "#71708A",
            width: 1
          },
          areaStyle: {
            color: "#71708A"
          }
        },
        selectedDataBackground: {
          lineStyle: {
            color: "#87A3CE"
          },
          areaStyle: {
            color: "#87A3CE"
          }
        }
      },
      visualMap: {
        textStyle: {
          color: nT
        }
      },
      timeline: {
        lineStyle: {
          color: nT
        },
        label: {
          color: nT
        },
        controlStyle: {
          color: nT,
          borderColor: nT
        }
      },
      calendar: {
        itemStyle: {
          color: iT
        },
        dayLabel: {
          color: nT
        },
        monthLabel: {
          color: nT
        },
        yearLabel: {
          color: nT
        }
      },
      timeAxis: rT(),
      logAxis: rT(),
      valueAxis: rT(),
      categoryAxis: rT(),
      line: {
        symbol: "circle"
      },
      graph: {
        color: oT
      },
      gauge: {
        title: {
          color: nT
        },
        axisLine: {
          lineStyle: {
            color: [
              [1, "rgba(207,212,219,0.2)"]
            ]
          }
        },
        axisLabel: {
          color: nT
        },
        detail: {
          color: "#EEF1FA"
        }
      },
      candlestick: {
        itemStyle: {
          color: "#f64e56",
          color0: "#54ea92",
          borderColor: "#f64e56",
          borderColor0: "#54ea92"
        }
      }
    };
  aT.categoryAxis.splitLine.show = !1;
  var sT = function () {
      function t() {}
      return t.prototype.normalizeQuery = function (t) {
        var e = {},
          n = {},
          i = {};
        if (C(t)) {
          var r = zr(t);
          e.mainType = r.main || null, e.subType = r.sub || null
        } else {
          var o = ["Index", "Name", "Id"],
            a = {
              name: 1,
              dataIndex: 1,
              dataType: 1
            };
          v(t, function (t, r) {
            for (var s = !1, l = 0; l < o.length; l++) {
              var u = o[l],
                h = r.lastIndexOf(u);
              if (h > 0 && h === r.length - u.length) {
                var c = r.slice(0, h);
                "data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0)
              }
            }
            a.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t)
          })
        }
        return {
          cptQuery: e,
          dataQuery: n,
          otherQuery: i
        }
      }, t.prototype.filter = function (t, e) {
        function n(t, e, n, i) {
          return null == t[n] || e[i || n] === t[n]
        }
        var i = this.eventInfo;
        if (!i) return !0;
        var r = i.targetEl,
          o = i.packedEvent,
          a = i.model,
          s = i.view;
        if (!a || !s) return !0;
        var l = e.cptQuery,
          u = e.dataQuery;
        return n(l, a, "mainType") && n(l, a, "subType") && n(l, a, "index", "componentIndex") && n(l, a, "name") && n(l, a, "id") && n(u, o, "name") && n(u, o, "dataIndex") && n(u, o, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, o))
      }, t.prototype.afterTrigger = function () {
        this.eventInfo = null
      }, t
    }(),
    lT = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"],
    uT = lT.concat(["symbolKeepAspect"]),
    hT = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        function n(e, n) {
          for (var i = t.getRawValue(n), r = t.getDataParams(n), a = 0; a < c.length; a++) {
            var s = c[a];
            e.setItemVisual(n, s, o[s](i, r))
          }
        }
        var i = t.getData();
        if (t.legendIcon && i.setVisual("legendIcon", t.legendIcon), t.hasSymbolVisual) {
          for (var r = {}, o = {}, a = !1, s = 0; s < lT.length; s++) {
            var l = lT[s],
              u = t.get(l);
            T(u) ? (a = !0, o[l] = u) : r[l] = u
          }
          if (r.symbol = r.symbol || t.defaultSymbol, i.setVisual(h({
              legendIcon: t.legendIcon || r.symbol,
              symbolKeepAspect: t.get("symbolKeepAspect")
            }, r)), !e.isSeriesFiltered(t)) {
            var c = w(o);
            return {
              dataEach: a ? n : null
            }
          }
        }
      }
    },
    cT = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        function n(t, e) {
          for (var n = t.getItemModel(e), i = 0; i < uT.length; i++) {
            var r = uT[i],
              o = n.getShallow(r, !0);
            null != o && t.setItemVisual(e, r, o)
          }
        }
        if (t.hasSymbolVisual && !e.isSeriesFiltered(t)) {
          var i = t.getData();
          return {
            dataEach: i.hasItemOption ? n : null
          }
        }
      }
    },
    pT = Math.round(9 * Math.random()),
    fT = "function" == typeof Object.defineProperty,
    dT = function () {
      function t() {
        this._id = "__ec_inner_" + pT++
      }
      return t.prototype.get = function (t) {
        return this._guard(t)[this._id]
      }, t.prototype.set = function (t, e) {
        var n = this._guard(t);
        return fT ? Object.defineProperty(n, this._id, {
          value: e,
          enumerable: !1,
          configurable: !0
        }) : n[this._id] = e, this
      }, t.prototype["delete"] = function (t) {
        return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1
      }, t.prototype.has = function (t) {
        return !!this._guard(t)[this._id]
      }, t.prototype._guard = function (t) {
        if (t !== Object(t)) throw TypeError("Value of WeakMap is not a non-null object.");
        return t
      }, t
    }(),
    gT = Rx.extend({
      type: "triangle",
      shape: {
        cx: 0,
        cy: 0,
        width: 0,
        height: 0
      },
      buildPath: function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          o = e.height / 2;
        t.moveTo(n, i - o), t.lineTo(n + r, i + o), t.lineTo(n - r, i + o), t.closePath()
      }
    }),
    vT = Rx.extend({
      type: "diamond",
      shape: {
        cx: 0,
        cy: 0,
        width: 0,
        height: 0
      },
      buildPath: function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          o = e.height / 2;
        t.moveTo(n, i - o), t.lineTo(n + r, i), t.lineTo(n, i + o), t.lineTo(n - r, i), t.closePath()
      }
    }),
    yT = Rx.extend({
      type: "pin",
      shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function (t, e) {
        var n = e.x,
          i = e.y,
          r = e.width / 5 * 3,
          o = Math.max(r, e.height),
          a = r / 2,
          s = a * a / (o - a),
          l = i - o + a + s,
          u = Math.asin(s / a),
          h = Math.cos(u) * a,
          c = Math.sin(u),
          p = Math.cos(u),
          f = .6 * a,
          d = .7 * a;
        t.moveTo(n - h, l + s), t.arc(n, l, a, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + p * f, n, i - d, n, i), t.bezierCurveTo(n, i - d, n - h + c * f, l + s + p * f, n - h, l + s), t.closePath()
      }
    }),
    mT = Rx.extend({
      type: "arrow",
      shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function (t, e) {
        var n = e.height,
          i = e.width,
          r = e.x,
          o = e.y,
          a = i / 3 * 2;
        t.moveTo(r, o), t.lineTo(r + a, o + n), t.lineTo(r, o + n / 4 * 3), t.lineTo(r - a, o + n), t.lineTo(r, o), t.closePath()
      }
    }),
    _T = {
      line: tb,
      rect: Gx,
      roundRect: Gx,
      square: Gx,
      circle: Aw,
      diamond: vT,
      pin: yT,
      arrow: mT,
      triangle: gT
    },
    xT = {
      line: function (t, e, n, i, r) {
        r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
      },
      rect: function (t, e, n, i, r) {
        r.x = t, r.y = e, r.width = n, r.height = i
      },
      roundRect: function (t, e, n, i, r) {
        r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
      },
      square: function (t, e, n, i, r) {
        var o = Math.min(n, i);
        r.x = t, r.y = e, r.width = o, r.height = o
      },
      circle: function (t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
      },
      diamond: function (t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
      },
      pin: function (t, e, n, i, r) {
        r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
      },
      arrow: function (t, e, n, i, r) {
        r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
      },
      triangle: function (t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
      }
    },
    wT = {};
  v(_T, function (t, e) {
    wT[e] = new t
  });
  var bT = Rx.extend({
      type: "symbol",
      shape: {
        symbolType: "",
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      calculateTextPosition: function (t, e, n) {
        var i = Si(t, e, n),
          r = this.shape;
        return r && "pin" === r.symbolType && "inside" === e.position && (i.y = n.y + .4 * n.height), i
      },
      buildPath: function (t, e, n) {
        var i = e.symbolType;
        if ("none" !== i) {
          var r = wT[i];
          r || (i = "rect", r = wT[i]), xT[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n)
        }
      }
    }),
    ST = new Sx(!0),
    MT = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"],
    TT = [
      ["lineCap", "butt"],
      ["lineJoin", "miter"],
      ["miterLimit", 10]
    ],
    CT = 1,
    IT = 2,
    kT = 3,
    DT = 4,
    AT = new dT,
    PT = new sm(100),
    LT = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"],
    OT = new Sy,
    RT = {},
    BT = "undefined" != typeof window,
    zT = "5.3.3",
    ET = {
      zrender: "5.3.2"
    },
    NT = 1,
    FT = 800,
    HT = 900,
    VT = 1e3,
    WT = 2e3,
    GT = 5e3,
    UT = 1e3,
    XT = 1100,
    YT = 2e3,
    qT = 3e3,
    jT = 4e3,
    ZT = 4500,
    KT = 4600,
    $T = 5e3,
    QT = 6e3,
    JT = 7e3,
    tC = {
      PROCESSOR: {
        FILTER: VT,
        SERIES_FILTER: FT,
        STATISTIC: GT
      },
      VISUAL: {
        LAYOUT: UT,
        PROGRESSIVE_LAYOUT: XT,
        GLOBAL: YT,
        CHART: qT,
        POST_CHART_LAYOUT: KT,
        COMPONENT: jT,
        BRUSH: $T,
        CHART_ITEM: ZT,
        ARIA: QT,
        DECAL: JT
      }
    },
    eC = "__flagInMainProcess",
    nC = "__pendingUpdate",
    iC = "__needsUpdateStatus",
    rC = /^[a-zA-Z0-9_]+$/,
    oC = "__connectUpdateStatus",
    aC = 0,
    sC = 1,
    lC = 2,
    uC = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this
      }
      return e(n, t), n
    }(Sy),
    hC = uC.prototype;
  hC.on = qc("on"), hC.off = qc("off");
  var cC, pC, fC, dC, gC, vC, yC, mC, _C, xC, wC, bC, SC, MC, TC, CC, IC, kC, DC = function (t) {
      function n(e, n, i) {
        function r(t, e) {
          return t.__prio - e.__prio
        }
        var o = t.call(this, new sT) || this;
        o._chartsViews = [], o._chartsMap = {}, o._componentsViews = [], o._componentsMap = {}, o._pendingActions = [], i = i || {}, C(n) && (n = EC[n]), o._dom = e;
        var a = "canvas",
          l = !1,
          u = o._zr = Oi(e, {
            renderer: i.renderer || a,
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height,
            ssr: i.ssr,
            useDirtyRect: null == i.useDirtyRect ? l : i.useDirtyRect
          });
        o._ssr = i.ssr, o._throttledZrFlush = Eh(cy(u.flush, u), 17), n = s(n), n && bu(n, !0), o._theme = n, o._locale = $s(i.locale || jb), o._coordSysMgr = new qS;
        var h = o._api = TC(o);
        return Ye(zC, r), Ye(RC, r), o._scheduler = new KM(o, h, RC, zC), o._messageCenter = new uC, o._initEvents(), o.resize = cy(o.resize, o), u.animation.on("frame", o._onframe, o), xC(u, o), wC(u, o), U(o), o
      }
      return e(n, t), n.prototype._onframe = function () {
        if (!this._disposed) {
          kC(this);
          var t = this._scheduler;
          if (this[nC]) {
            var e = this[nC].silent;
            this[eC] = !0;
            try {
              cC(this), dC.update.call(this, null, this[nC].updateParams)
            } catch (n) {
              throw this[eC] = !1, this[nC] = null, n
            }
            this._zr.flush(), this[eC] = !1, this[nC] = null, mC.call(this, e), _C.call(this, e)
          } else if (t.unfinished) {
            var i = NT,
              r = this._model,
              o = this._api;
            t.unfinished = !1;
            do {
              var a = +new Date;
              t.performSeriesTasks(r), t.performDataProcessorTasks(r), vC(this, r), t.performVisualTasks(r), MC(this, this._model, o, "remain", {}), i -= +new Date - a
            } while (i > 0 && t.unfinished);
            t.unfinished || this._zr.flush()
          }
        }
      }, n.prototype.getDom = function () {
        return this._dom
      }, n.prototype.getId = function () {
        return this.id
      }, n.prototype.getZr = function () {
        return this._zr
      }, n.prototype.isSSR = function () {
        return this._ssr
      }, n.prototype.setOption = function (t, e, n) {
        if (!this[eC] && !this._disposed) {
          var i, r, o;
          if (D(e) && (n = e.lazyUpdate, i = e.silent, r = e.replaceMerge, o = e.transition, e = e.notMerge), this[eC] = !0, !this._model || e) {
            var a = new ZS(this._api),
              s = this._theme,
              l = this._model = new ES;
            l.scheduler = this._scheduler, l.ssr = this._ssr, l.init(null, null, null, s, this._locale, a)
          }
          this._model.setOption(t, {
            replaceMerge: r
          }, BC);
          var u = {
            seriesTransition: o,
            optionChanged: !0
          };
          if (n) this[nC] = {
            silent: i,
            updateParams: u
          }, this[eC] = !1, this.getZr().wakeUp();
          else {
            try {
              cC(this), dC.update.call(this, null, u)
            } catch (h) {
              throw this[nC] = null, this[eC] = !1, h
            }
            this._ssr || this._zr.flush(), this[nC] = null, this[eC] = !1, mC.call(this, i), _C.call(this, i)
          }
        }
      }, n.prototype.setTheme = function () {}, n.prototype.getModel = function () {
        return this._model
      }, n.prototype.getOption = function () {
        return this._model && this._model.getOption()
      }, n.prototype.getWidth = function () {
        return this._zr.getWidth()
      }, n.prototype.getHeight = function () {
        return this._zr.getHeight()
      }, n.prototype.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || BT && window.devicePixelRatio || 1
      }, n.prototype.getRenderedCanvas = function (t) {
        return this.renderToCanvas(t)
      }, n.prototype.renderToCanvas = function (t) {
        t = t || {};
        var e = this._zr.painter;
        return e.getRenderedCanvas({
          backgroundColor: t.backgroundColor || this._model.get("backgroundColor"),
          pixelRatio: t.pixelRatio || this.getDevicePixelRatio()
        })
      }, n.prototype.renderToSVGString = function (t) {
        t = t || {};
        var e = this._zr.painter;
        return e.renderToString({
          useViewBox: t.useViewBox
        })
      }, n.prototype.getSvgDataURL = function () {
        if (Gv.svgSupported) {
          var t = this._zr,
            e = t.storage.getDisplayList();
          return v(e, function (t) {
            t.stopAnimation(null, !0)
          }), t.painter.toDataURL()
        }
      }, n.prototype.getDataURL = function (t) {
        if (!this._disposed) {
          t = t || {};
          var e = t.excludeComponents,
            n = this._model,
            i = [],
            r = this;
          v(e, function (t) {
            n.eachComponent({
              mainType: t
            }, function (t) {
              var e = r._componentsMap[t.__viewId];
              e.group.ignore || (i.push(e), e.group.ignore = !0)
            })
          });
          var o = "svg" === this._zr.painter.getType() ? this.getSvgDataURL() : this.renderToCanvas(t).toDataURL("image/" + (t && t.type || "png"));
          return v(i, function (t) {
            t.group.ignore = !1
          }), o
        }
      }, n.prototype.getConnectedDataURL = function (t) {
        if (!this._disposed) {
          var e = "svg" === t.type,
            n = this.group,
            i = Math.min,
            r = Math.max,
            o = 1 / 0;
          if (HC[n]) {
            var a = o,
              l = o,
              u = -o,
              h = -o,
              c = [],
              p = t && t.pixelRatio || this.getDevicePixelRatio();
            v(FC, function (o) {
              if (o.group === n) {
                var p = e ? o.getZr().painter.getSvgDom().innerHTML : o.renderToCanvas(s(t)),
                  f = o.getDom().getBoundingClientRect();
                a = i(f.left, a), l = i(f.top, l), u = r(f.right, u), h = r(f.bottom, h), c.push({
                  dom: p,
                  left: f.left,
                  top: f.top
                })
              }
            }), a *= p, l *= p, u *= p, h *= p;
            var f = u - a,
              d = h - l,
              g = $v.createCanvas(),
              y = Oi(g, {
                renderer: e ? "svg" : "canvas"
              });
            if (y.resize({
                width: f,
                height: d
              }), e) {
              var m = "";
              return v(c, function (t) {
                var e = t.left - a,
                  n = t.top - l;
                m += '<g transform="translate(' + e + "," + n + ')">' + t.dom + "</g>"
              }), y.painter.getSvgRoot().innerHTML = m, t.connectedBackgroundColor && y.painter.setBackgroundColor(t.connectedBackgroundColor), y.refreshImmediately(), y.painter.toDataURL()
            }
            return t.connectedBackgroundColor && y.add(new Gx({
              shape: {
                x: 0,
                y: 0,
                width: f,
                height: d
              },
              style: {
                fill: t.connectedBackgroundColor
              }
            })), v(c, function (t) {
              var e = new Fx({
                style: {
                  x: t.left * p - a,
                  y: t.top * p - l,
                  image: t.dom
                }
              });
              y.add(e)
            }), y.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
          }
          return this.getDataURL(t)
        }
      }, n.prototype.convertToPixel = function (t, e) {
        return gC(this, "convertToPixel", t, e)
      }, n.prototype.convertFromPixel = function (t, e) {
        return gC(this, "convertFromPixel", t, e)
      }, n.prototype.containPixel = function (t, e) {
        if (!this._disposed) {
          var n, i = this._model,
            r = Dr(i, t);
          return v(r, function (t, i) {
            i.indexOf("Models") >= 0 && v(t, function (t) {
              var r = t.coordinateSystem;
              if (r && r.containPoint) n = n || !!r.containPoint(e);
              else if ("seriesModels" === i) {
                var o = this._chartsMap[t.__viewId];
                o && o.containPoint && (n = n || o.containPoint(e, t))
              }
            }, this)
          }, this), !!n
        }
      }, n.prototype.getVisual = function (t, e) {
        var n = this._model,
          i = Dr(n, t, {
            defaultMainType: "series"
          }),
          r = i.seriesModel,
          o = r.getData(),
          a = i.hasOwnProperty("dataIndexInside") ? i.dataIndexInside : i.hasOwnProperty("dataIndex") ? o.indexOfRawIndex(i.dataIndex) : null;
        return null != a ? Jh(o, a, e) : tc(o, e)
      }, n.prototype.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
      }, n.prototype.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
      }, n.prototype._initEvents = function () {
        var t = this;
        v(PC, function (e) {
          var n = function (n) {
            var i, r = t.getModel(),
              o = n.target,
              a = "globalout" === e;
            if (a ? i = {} : o && ic(o, function (t) {
                var e = $x(t);
                if (e && null != e.dataIndex) {
                  var n = e.dataModel || r.getSeriesByIndex(e.seriesIndex);
                  return i = n && n.getDataParams(e.dataIndex, e.dataType) || {}, !0
                }
                return e.eventData ? (i = h({}, e.eventData), !0) : void 0
              }, !0), i) {
              var s = i.componentType,
                l = i.componentIndex;
              ("markLine" === s || "markPoint" === s || "markArea" === s) && (s = "series", l = i.seriesIndex);
              var u = s && null != l && r.getComponent(s, l),
                c = u && t["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
              i.event = n, i.type = e, t._$eventProcessor.eventInfo = {
                targetEl: o,
                packedEvent: i,
                model: u,
                view: c
              }, t.trigger(e, i)
            }
          };
          n.zrEventfulCallAtLast = !0, t._zr.on(e, n, t)
        }), v(OC, function (e, n) {
          t._messageCenter.on(n, function (t) {
            this.trigger(n, t)
          }, t)
        }), v(["selectchanged"], function (e) {
          t._messageCenter.on(e, function (t) {
            this.trigger(e, t)
          }, t)
        }), nc(this._messageCenter, this, this._api)
      }, n.prototype.isDisposed = function () {
        return this._disposed
      }, n.prototype.clear = function () {
        this._disposed || this.setOption({
          series: []
        }, !0)
      }, n.prototype.dispose = function () {
        if (!this._disposed) {
          this._disposed = !0;
          var t = this.getDom();
          t && Lr(this.getDom(), GC, "");
          var e = this,
            n = e._api,
            i = e._model;
          v(e._componentsViews, function (t) {
            t.dispose(i, n)
          }), v(e._chartsViews, function (t) {
            t.dispose(i, n)
          }), e._zr.dispose(), e._dom = e._model = e._chartsMap = e._componentsMap = e._chartsViews = e._componentsViews = e._scheduler = e._api = e._zr = e._throttledZrFlush = e._theme = e._coordSysMgr = e._messageCenter = null, delete FC[e.id]
        }
      }, n.prototype.resize = function (t) {
        if (!this[eC] && !this._disposed) {
          this._zr.resize(t);
          var e = this._model;
          if (this._loadingFX && this._loadingFX.resize(), e) {
            var n = e.resetOption("media"),
              i = t && t.silent;
            this[nC] && (null == i && (i = this[nC].silent), n = !0, this[nC] = null), this[eC] = !0;
            try {
              n && cC(this), dC.update.call(this, {
                type: "resize",
                animation: h({
                  duration: 0
                }, t && t.animation)
              })
            } catch (r) {
              throw this[eC] = !1, r
            }
            this[eC] = !1, mC.call(this, i), _C.call(this, i)
          }
        }
      }, n.prototype.showLoading = function (t, e) {
        if (!this._disposed && (D(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), NC[t])) {
          var n = NC[t](this._api, e),
            i = this._zr;
          this._loadingFX = n, i.add(n)
        }
      }, n.prototype.hideLoading = function () {
        this._disposed || (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null)
      }, n.prototype.makeActionFromEvent = function (t) {
        var e = h({}, t);
        return e.type = OC[t.type], e
      }, n.prototype.dispatchAction = function (t, e) {
        if (!this._disposed && (D(e) || (e = {
            silent: !!e
          }), LC[t.type] && this._model)) {
          if (this[eC]) return void this._pendingActions.push(t);
          var n = e.silent;
          yC.call(this, t, n);
          var i = e.flush;
          i ? this._zr.flush() : i !== !1 && Gv.browser.weChat && this._throttledZrFlush(), mC.call(this, n), _C.call(this, n)
        }
      }, n.prototype.updateLabelLayout = function () {
        OT.trigger("series:layoutlabels", this._model, this._api, {
          updatedSeries: []
        })
      }, n.prototype.appendData = function (t) {
        if (!this._disposed) {
          var e = t.seriesIndex,
            n = this.getModel(),
            i = n.getSeriesByIndex(e);
          i.appendData(t), this._scheduler.unfinished = !0, this.getZr().wakeUp()
        }
      }, n.internalField = function () {
        function t(t) {
          t.clearColorPalette(), t.eachSeries(function (t) {
            t.clearColorPalette()
          })
        }

        function n(t) {
          var e = [],
            n = [],
            i = !1;
          if (t.eachComponent(function (t, r) {
              var o = r.get("zlevel") || 0,
                a = r.get("z") || 0,
                s = r.getZLevelKey();
              i = i || !!s, ("series" === t ? n : e).push({
                zlevel: o,
                z: a,
                idx: r.componentIndex,
                type: t,
                key: s
              })
            }), i) {
            var r, o, a = e.concat(n);
            Ye(a, function (t, e) {
              return t.zlevel === e.zlevel ? t.z - e.z : t.zlevel - e.zlevel
            }), v(a, function (e) {
              var n = t.getComponent(e.type, e.idx),
                i = e.zlevel,
                a = e.key;
              null != r && (i = Math.max(r, i)), a ? (i === r && a !== o && i++, o = a) : o && (i === r && i++, o = ""), r = i, n.setZLevel(i)
            })
          }
        }

        function i(t) {
          for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
            var r = n[i];
            "emphasis" !== r && "blur" !== r && "select" !== r && e.push(r)
          }
          t.selected && t.states.select && e.push("select"), t.hoverState === ow && t.states.emphasis ? e.push("emphasis") : t.hoverState === rw && t.states.blur && e.push("blur"), t.useStates(e)
        }

        function r(t, e) {
          var n = t._zr,
            i = n.storage,
            r = 0;
          i.traverse(function (t) {
            t.isGroup || r++
          }), r > e.get("hoverLayerThreshold") && !Gv.node && !Gv.worker && e.eachSeries(function (e) {
            if (!e.preventUsingHoverLayer) {
              var n = t._chartsMap[e.__viewId];
              n.__alive && n.eachRendered(function (t) {
                t.states.emphasis && (t.states.emphasis.hoverLayer = !0)
              })
            }
          })
        }

        function o(t, e) {
          var n = t.get("blendMode") || null;
          e.eachRendered(function (t) {
            t.isGroup || (t.style.blend = n)
          })
        }

        function a(t, e) {
          if (!t.preventAutoZ) {
            var n = t.get("z") || 0,
              i = t.get("zlevel") || 0;
            e.eachRendered(function (t) {
              return s(t, n, i, -1 / 0), !0
            })
          }
        }

        function s(t, e, n, i) {
          var r = t.getTextContent(),
            o = t.getTextGuideLine(),
            a = t.isGroup;
          if (a)
            for (var l = t.childrenRef(), u = 0; u < l.length; u++) i = Math.max(s(l[u], e, n, i), i);
          else t.z = e, t.zlevel = n, i = Math.max(t.z2, i);
          if (r && (r.z = e, r.zlevel = n, isFinite(i) && (r.z2 = i + 2)), o) {
            var h = t.textGuideLineConfig;
            o.z = e, o.zlevel = n, isFinite(i) && (o.z2 = i + (h && h.showAbove ? 1 : -1))
          }
          return i
        }

        function l(t, e) {
          e.eachRendered(function (t) {
            if (!os(t)) {
              var e = t.getTextContent(),
                n = t.getTextGuideLine();
              t.stateTransition && (t.stateTransition = null), e && e.stateTransition && (e.stateTransition = null), n && n.stateTransition && (n.stateTransition = null), t.hasState() ? (t.prevStates = t.currentStates, t.clearStates()) : t.prevStates && (t.prevStates = null)
            }
          })
        }

        function u(t, e) {
          var n = t.getModel("stateAnimation"),
            r = t.isAnimationEnabled(),
            o = n.get("duration"),
            a = o > 0 ? {
              duration: o,
              delay: n.get("delay"),
              easing: n.get("easing")
            } : null;
          e.eachRendered(function (t) {
            if (t.states && t.states.emphasis) {
              if (os(t)) return;
              if (t instanceof Rx && za(t), t.__dirty) {
                var e = t.prevStates;
                e && t.useStates(e)
              }
              if (r) {
                t.stateTransition = a;
                var n = t.getTextContent(),
                  o = t.getTextGuideLine();
                n && (n.stateTransition = a), o && (o.stateTransition = a)
              }
              t.__dirty && i(t)
            }
          })
        }
        cC = function (t) {
          var e = t._scheduler;
          e.restorePipelines(t._model), e.prepareStageTasks(), pC(t, !0), pC(t, !1), e.plan()
        }, pC = function (t, e) {
          function n(t) {
            var n = t.__requireNewView;
            t.__requireNewView = !1;
            var u = "_ec_" + t.id + "_" + t.type,
              h = !n && a[u];
            if (!h) {
              var c = zr(t.type),
                p = e ? OM.getClass(c.main, c.sub) : zM.getClass(c.sub);
              h = new p, h.init(i, l), a[u] = h, o.push(h), s.add(h.group)
            }
            t.__viewId = h.__id = u, h.__alive = !0, h.__model = t, h.group.__ecComponentInfo = {
              mainType: t.mainType,
              index: t.componentIndex
            }, !e && r.prepareView(h, t, i, l)
          }
          for (var i = t._model, r = t._scheduler, o = e ? t._componentsViews : t._chartsViews, a = e ? t._componentsMap : t._chartsMap, s = t._zr, l = t._api, u = 0; u < o.length; u++) o[u].__alive = !1;
          e ? i.eachComponent(function (t, e) {
            "series" !== t && n(e)
          }) : i.eachSeries(n);
          for (var u = 0; u < o.length;) {
            var h = o[u];
            h.__alive ? u++ : (!e && h.renderTask.dispose(), s.remove(h.group), h.dispose(i, l), o.splice(u, 1), a[h.__id] === h && delete a[h.__id], h.__id = h.group.__ecComponentInfo = null)
          }
        }, fC = function (t, e, n, i, r) {
          function o(i) {
            i && i.__alive && i[e] && i[e](i.__model, a, t._api, n)
          }
          var a = t._model;
          if (a.setUpdatePayload(n), !i) return void v([].concat(t._componentsViews).concat(t._chartsViews), o);
          var s = {};
          s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
          var l = {
            mainType: i,
            query: s
          };
          r && (l.subType = r);
          var u, h = n.excludeSeriesId;
          null != h && (u = Y(), v(ur(h), function (t) {
            var e = br(t, null);
            null != e && u.set(e, !0)
          })), a && a.eachComponent(l, function (e) {
            var i = u && null !== u.get(e.id);
            if (!i)
              if (Ba(n))
                if (e instanceof LM) n.type !== hw || n.notBlur || e.get(["emphasis", "disabled"]) || _a(e, n, t._api);
                else {
                  var r = xa(e.mainType, e.componentIndex, n.name, t._api),
                    o = r.focusSelf,
                    a = r.dispatchers;
                  n.type === hw && o && !n.notBlur && ma(e.mainType, e.componentIndex, t._api), a && v(a, function (t) {
                    n.type === hw ? ua(t) : ha(t)
                  })
                }
            else Ra(n) && e instanceof LM && (Sa(e, n, t._api), Ma(e), IC(t))
          }, t), a && a.eachComponent(l, function (e) {
            var n = u && null !== u.get(e.id);
            n || o(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
          }, t)
        }, dC = {
          prepareAndUpdate: function (t) {
            cC(this), dC.update.call(this, t, {
              optionChanged: null != t.newOption
            })
          },
          update: function (e, n) {
            var i = this._model,
              r = this._api,
              o = this._zr,
              a = this._coordSysMgr,
              s = this._scheduler;
            if (i) {
              i.setUpdatePayload(e), s.restoreData(i, e), s.performSeriesTasks(i), a.create(i, r), s.performDataProcessorTasks(i, e), vC(this, i), a.update(i, r), t(i), s.performVisualTasks(i, e), bC(this, i, r, e, n);
              var l = i.get("backgroundColor") || "transparent",
                u = i.get("darkMode");
              o.setBackgroundColor(l), null != u && "auto" !== u && o.setDarkMode(u), OT.trigger("afterupdate", i, r)
            }
          },
          updateTransform: function (e) {
            var n = this,
              i = this._model,
              r = this._api;
            if (i) {
              i.setUpdatePayload(e);
              var o = [];
              i.eachComponent(function (t, a) {
                if ("series" !== t) {
                  var s = n.getViewOfComponentModel(a);
                  if (s && s.__alive)
                    if (s.updateTransform) {
                      var l = s.updateTransform(a, i, r, e);
                      l && l.update && o.push(s)
                    } else o.push(s)
                }
              });
              var a = Y();
              i.eachSeries(function (t) {
                var o = n._chartsMap[t.__viewId];
                if (o.updateTransform) {
                  var s = o.updateTransform(t, i, r, e);
                  s && s.update && a.set(t.uid, 1)
                } else a.set(t.uid, 1)
              }), t(i), this._scheduler.performVisualTasks(i, e, {
                setDirty: !0,
                dirtyMap: a
              }), MC(this, i, r, e, {}, a), OT.trigger("afterupdate", i, r)
            }
          },
          updateView: function (e) {
            var n = this._model;
            n && (n.setUpdatePayload(e), zM.markUpdateMethod(e, "updateView"), t(n), this._scheduler.performVisualTasks(n, e, {
              setDirty: !0
            }), bC(this, n, this._api, e, {}), OT.trigger("afterupdate", n, this._api))
          },
          updateVisual: function (e) {
            var n = this,
              i = this._model;
            i && (i.setUpdatePayload(e), i.eachSeries(function (t) {
              t.getData().clearAllVisual()
            }), zM.markUpdateMethod(e, "updateVisual"), t(i), this._scheduler.performVisualTasks(i, e, {
              visualType: "visual",
              setDirty: !0
            }), i.eachComponent(function (t, r) {
              if ("series" !== t) {
                var o = n.getViewOfComponentModel(r);
                o && o.__alive && o.updateVisual(r, i, n._api, e)
              }
            }), i.eachSeries(function (t) {
              var r = n._chartsMap[t.__viewId];
              r.updateVisual(t, i, n._api, e)
            }), OT.trigger("afterupdate", i, this._api))
          },
          updateLayout: function (t) {
            dC.update.call(this, t)
          }
        }, gC = function (t, e, n, i) {
          if (!t._disposed)
            for (var r, o = t._model, a = t._coordSysMgr.getCoordinateSystems(), s = Dr(o, n), l = 0; l < a.length; l++) {
              var u = a[l];
              if (u[e] && null != (r = u[e](o, s, i))) return r
            }
        }, vC = function (t, e) {
          var n = t._chartsMap,
            i = t._scheduler;
          e.eachSeries(function (t) {
            i.updateStreamModes(t, n[t.__viewId])
          })
        }, yC = function (t, e) {
          var n = this,
            i = this.getModel(),
            r = t.type,
            o = t.escapeConnect,
            a = LC[r],
            s = a.actionInfo,
            l = (s.update || "update").split(":"),
            u = l.pop(),
            p = null != l[0] && zr(l[0]);
          this[eC] = !0;
          var f = [t],
            d = !1;
          t.batch && (d = !0, f = y(t.batch, function (e) {
            return e = c(h({}, e), t), e.batch = null, e
          }));
          var g, m = [],
            _ = Ra(t),
            x = Ba(t);
          if (x && va(this._api), v(f, function (e) {
              if (g = a.action(e, n._model, n._api), g = g || h({}, e), g.type = s.event || g.type, m.push(g), x) {
                var i = Ar(t),
                  r = i.queryOptionMap,
                  o = i.mainTypeSpecified,
                  l = o ? r.keys()[0] : "series";
                fC(n, u, e, l), IC(n)
              } else _ ? (fC(n, u, e, "series"), IC(n)) : p && fC(n, u, e, p.main, p.sub)
            }), "none" !== u && !x && !_ && !p) try {
            this[nC] ? (cC(this), dC.update.call(this, t), this[nC] = null) : dC[u].call(this, t)
          } catch (w) {
            throw this[eC] = !1, w
          }
          if (g = d ? {
              type: s.event || r,
              escapeConnect: o,
              batch: m
            } : m[0], this[eC] = !1, !e) {
            var b = this._messageCenter;
            if (b.trigger(g.type, g), _) {
              var S = {
                type: "selectchanged",
                escapeConnect: o,
                selected: Ta(i),
                isFromClick: t.isFromClick || !1,
                fromAction: t.type,
                fromActionPayload: t
              };
              b.trigger(S.type, S)
            }
          }
        }, mC = function (t) {
          for (var e = this._pendingActions; e.length;) {
            var n = e.shift();
            yC.call(this, n, t)
          }
        }, _C = function (t) {
          !t && this.trigger("updated")
        }, xC = function (t, e) {
          t.on("rendered", function (n) {
            e.trigger("rendered", n), !t.animation.isFinished() || e[nC] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
          })
        }, wC = function (t, e) {
          t.on("mouseover", function (t) {
            var n = t.target,
              i = ic(n, La);
            i && (wa(i, t, e._api), IC(e))
          }).on("mouseout", function (t) {
            var n = t.target,
              i = ic(n, La);
            i && (ba(i, t, e._api), IC(e))
          }).on("click", function (t) {
            var n = t.target,
              i = ic(n, function (t) {
                return null != $x(t).dataIndex
              }, !0);
            if (i) {
              var r = i.selected ? "unselect" : "select",
                o = $x(i);
              e._api.dispatchAction({
                type: r,
                dataType: o.dataType,
                dataIndexInside: o.dataIndex,
                seriesIndex: o.seriesIndex,
                isFromClick: !0
              })
            }
          })
        }, bC = function (t, e, i, r, o) {
          n(e), SC(t, e, i, r, o), v(t._chartsViews, function (t) {
            t.__alive = !1
          }), MC(t, e, i, r, o), v(t._chartsViews, function (t) {
            t.__alive || t.remove(e, i)
          })
        }, SC = function (t, e, n, i, r, o) {
          v(o || t._componentsViews, function (t) {
            var r = t.__model;
            l(r, t), t.render(r, e, n, i), a(r, t), u(r, t)
          })
        }, MC = function (t, e, n, i, s, c) {
          var p = t._scheduler;
          s = h(s || {}, {
            updatedSeries: e.getSeries()
          }), OT.trigger("series:beforeupdate", e, n, s);
          var f = !1;
          e.eachSeries(function (e) {
            var n = t._chartsMap[e.__viewId];
            n.__alive = !0;
            var r = n.renderTask;
            p.updatePayload(r, i), l(e, n), c && c.get(e.uid) && r.dirty(), r.perform(p.getPerformArgs(r)) && (f = !0), n.group.silent = !!e.get("silent"), o(e, n), Ma(e)
          }), p.unfinished = f || p.unfinished, OT.trigger("series:layoutlabels", e, n, s), OT.trigger("series:transition", e, n, s), e.eachSeries(function (e) {
            var n = t._chartsMap[e.__viewId];
            a(e, n), u(e, n)
          }), r(t, e), OT.trigger("series:afterupdate", e, n, s)
        }, IC = function (t) {
          t[iC] = !0, t.getZr().wakeUp()
        }, kC = function (t) {
          t[iC] && (t.getZr().storage.traverse(function (t) {
            os(t) || i(t)
          }), t[iC] = !1)
        }, TC = function (t) {
          return new(function (n) {
            function i() {
              return null !== n && n.apply(this, arguments) || this
            }
            return e(i, n), i.prototype.getCoordinateSystems = function () {
              return t._coordSysMgr.getCoordinateSystems()
            }, i.prototype.getComponentByElement = function (e) {
              for (; e;) {
                var n = e.__ecComponentInfo;
                if (null != n) return t._model.getComponent(n.mainType, n.index);
                e = e.parent
              }
            }, i.prototype.enterEmphasis = function (e, n) {
              ua(e, n), IC(t)
            }, i.prototype.leaveEmphasis = function (e, n) {
              ha(e, n), IC(t)
            }, i.prototype.enterBlur = function (e) {
              ca(e), IC(t)
            }, i.prototype.leaveBlur = function (e) {
              pa(e), IC(t)
            }, i.prototype.enterSelect = function (e) {
              fa(e), IC(t)
            }, i.prototype.leaveSelect = function (e) {
              da(e), IC(t)
            }, i.prototype.getModel = function () {
              return t.getModel()
            }, i.prototype.getViewOfComponentModel = function (e) {
              return t.getViewOfComponentModel(e)
            }, i.prototype.getViewOfSeriesModel = function (e) {
              return t.getViewOfSeriesModel(e)
            }, i
          }(XS))(t)
        }, CC = function (t) {
          function e(t, e) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              i[oC] = e
            }
          }
          v(OC, function (n, i) {
            t._messageCenter.on(i, function (n) {
              if (HC[t.group] && t[oC] !== aC) {
                if (n && n.escapeConnect) return;
                var i = t.makeActionFromEvent(n),
                  r = [];
                v(FC, function (e) {
                  e !== t && e.group === t.group && r.push(e)
                }), e(r, aC), v(r, function (t) {
                  t[oC] !== sC && t.dispatchAction(i)
                }), e(r, lC)
              }
            })
          })
        }
      }(), n
    }(Sy),
    AC = DC.prototype;
  AC.on = Yc("on"), AC.off = Yc("off"), AC.one = function (t, e, n) {
    function i() {
      for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
      e && e.apply && e.apply(this, n), r.off(t, i)
    }
    var r = this;
    this.on.call(this, t, i, n)
  };
  var PC = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"],
    LC = {},
    OC = {},
    RC = [],
    BC = [],
    zC = [],
    EC = {},
    NC = {},
    FC = {},
    HC = {},
    VC = +new Date - 0,
    WC = +new Date - 0,
    GC = "_echarts_instance_",
    UC = $c,
    XC = [],
    YC = ju;
  cp(YT, XM), cp(ZT, qM), cp(ZT, jM), cp(YT, hT), cp(ZT, cT), cp(JT, Gc), np(bu), ip(HT, Su), fp("default", Wh), sp({
    type: hw,
    event: hw,
    update: hw
  }, $), sp({
    type: cw,
    event: cw,
    update: cw
  }, $), sp({
    type: pw,
    event: pw,
    update: pw
  }, $), sp({
    type: fw,
    event: fw,
    update: fw
  }, $), sp({
    type: dw,
    event: dw,
    update: dw
  }, $), ep("light", eT), ep("dark", aT);
  var qC, jC, ZC, KC, $C, QC, JC, tI = {},
    eI = function () {
      function t(t, e, n, i, r, o) {
        this._old = t, this._new = e, this._oldKeyGetter = n || mp, this._newKeyGetter = i || mp, this.context = r, this._diffModeMultiple = "multiple" === o
      }
      return t.prototype.add = function (t) {
        return this._add = t, this
      }, t.prototype.update = function (t) {
        return this._update = t, this
      }, t.prototype.updateManyToOne = function (t) {
        return this._updateManyToOne = t, this
      }, t.prototype.updateOneToMany = function (t) {
        return this._updateOneToMany = t, this
      }, t.prototype.updateManyToMany = function (t) {
        return this._updateManyToMany = t, this
      }, t.prototype.remove = function (t) {
        return this._remove = t, this
      }, t.prototype.execute = function () {
        this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]()
      }, t.prototype._executeOneToOne = function () {
        var t = this._old,
          e = this._new,
          n = {},
          i = new Array(t.length),
          r = new Array(e.length);
        this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(e, n, r, "_newKeyGetter");
        for (var o = 0; o < t.length; o++) {
          var a = i[o],
            s = n[a],
            l = yp(s);
          if (l > 1) {
            var u = s.shift();
            1 === s.length && (n[a] = s[0]), this._update && this._update(u, o)
          } else 1 === l ? (n[a] = null, this._update && this._update(s, o)) : this._remove && this._remove(o)
        }
        this._performRestAdd(r, n)
      }, t.prototype._executeMultiple = function () {
        var t = this._old,
          e = this._new,
          n = {},
          i = {},
          r = [],
          o = [];
        this._initIndexMap(t, n, r, "_oldKeyGetter"), this._initIndexMap(e, i, o, "_newKeyGetter");
        for (var a = 0; a < r.length; a++) {
          var s = r[a],
            l = n[s],
            u = i[s],
            h = yp(l),
            c = yp(u);
          if (h > 1 && 1 === c) this._updateManyToOne && this._updateManyToOne(u, l), i[s] = null;
          else if (1 === h && c > 1) this._updateOneToMany && this._updateOneToMany(u, l), i[s] = null;
          else if (1 === h && 1 === c) this._update && this._update(u, l), i[s] = null;
          else if (h > 1 && c > 1) this._updateManyToMany && this._updateManyToMany(u, l), i[s] = null;
          else if (h > 1)
            for (var p = 0; h > p; p++) this._remove && this._remove(l[p]);
          else this._remove && this._remove(l)
        }
        this._performRestAdd(o, i)
      }, t.prototype._performRestAdd = function (t, e) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n],
            r = e[i],
            o = yp(r);
          if (o > 1)
            for (var a = 0; o > a; a++) this._add && this._add(r[a]);
          else 1 === o && this._add && this._add(r);
          e[i] = null
        }
      }, t.prototype._initIndexMap = function (t, e, n, i) {
        for (var r = this._diffModeMultiple, o = 0; o < t.length; o++) {
          var a = "_ec_" + this[i](t[o], o);
          if (r || (n[o] = a), e) {
            var s = e[a],
              l = yp(s);
            0 === l ? (e[a] = o, r && n.push(a)) : 1 === l ? e[a] = [s, o] : s.push(o)
          }
        }
      }, t
    }(),
    nI = function () {
      function t(t, e) {
        this._encode = t, this._schema = e
      }
      return t.prototype.get = function () {
        return {
          fullDimensions: this._getFullDimensionNames(),
          encode: this._encode
        }
      }, t.prototype._getFullDimensionNames = function () {
        return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames
      }, t
    }(),
    iI = function () {
      function t(t) {
        this.otherDims = {}, null != t && h(this, t)
      }
      return t
    }(),
    rI = kr(),
    oI = {
      "float": "f",
      "int": "i",
      ordinal: "o",
      number: "n",
      time: "t"
    },
    aI = function () {
      function t(t) {
        this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted)
      }
      return t.prototype.isDimensionOmitted = function () {
        return this._dimOmitted
      }, t.prototype._updateDimOmitted = function (t) {
        this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = Tp(this.source)))
      }, t.prototype.getSourceDimensionIndex = function (t) {
        return N(this._dimNameMap.get(t), -1)
      }, t.prototype.getSourceDimension = function (t) {
        var e = this.source.dimensionsDefine;
        return e ? e[t] : void 0
      }, t.prototype.makeStoreSchema = function () {
        for (var t = this._fullDimCount, e = Ru(this.source), n = !Cp(t), i = "", r = [], o = 0, a = 0; t > o; o++) {
          var s = void 0,
            l = void 0,
            u = void 0,
            h = this.dimensions[a];
          if (h && h.storeDimIndex === o) s = e ? h.name : null, l = h.type, u = h.ordinalMeta, a++;
          else {
            var c = this.getSourceDimension(o);
            c && (s = e ? c.name : null, l = c.type)
          }
          r.push({
            property: s,
            type: l,
            ordinalMeta: u
          }), !e || null == s || h && h.isCalculationCoord || (i += n ? s.replace(/\`/g, "`1").replace(/\$/g, "`2") : s), i += "$", i += oI[l] || "f", u && (i += u.uid), i += "$"
        }
        var p = this.source,
          f = [p.seriesLayoutBy, p.startIndex, i].join("$$");
        return {
          dimensions: r,
          hash: f
        }
      }, t.prototype.makeOutputDimensionNames = function () {
        for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
          var i = void 0,
            r = this.dimensions[n];
          if (r && r.storeDimIndex === e) r.isCalculationCoord || (i = r.name), n++;
          else {
            var o = this.getSourceDimension(e);
            o && (i = o.name)
          }
          t.push(i)
        }
        return t
      }, t.prototype.appendCalculationDimension = function (t) {
        this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0)
      }, t
    }(),
    sI = D,
    lI = y,
    uI = "undefined" == typeof Int32Array ? Array : Int32Array,
    hI = "e\x00\x00",
    cI = -1,
    pI = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"],
    fI = ["_approximateExtent"],
    dI = function () {
      function t(t, e) {
        this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
        var n, i = !1;
        Sp(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
        for (var r = {}, o = [], a = {}, s = !1, l = {}, u = 0; u < n.length; u++) {
          var h = n[u],
            c = C(h) ? new iI({
              name: h
            }) : h instanceof iI ? h : new iI(h),
            p = c.name;
          c.type = c.type || "float", c.coordDim || (c.coordDim = p, c.coordDimIndex = 0);
          var f = c.otherDims = c.otherDims || {};
          o.push(p), r[p] = c, null != l[p] && (s = !0), c.createInvertedIndices && (a[p] = []), 0 === f.itemName && (this._nameDimIdx = u), 0 === f.itemId && (this._idDimIdx = u), i && (c.storeDimIndex = u)
        }
        if (this.dimensions = o, this._dimInfos = r, this._initGetDimensionInfo(s), this.hostModel = e, this._invertedIndicesMap = a, this._dimOmitted) {
          var d = this._dimIdxToName = Y();
          v(o, function (t) {
            d.set(r[t].storeDimIndex, t)
          })
        }
      }
      return t.prototype.getDimension = function (t) {
        var e = this._recognizeDimIndex(t);
        if (null == e) return t;
        if (e = t, !this._dimOmitted) return this.dimensions[e];
        var n = this._dimIdxToName.get(e);
        if (null != n) return n;
        var i = this._schema.getSourceDimension(e);
        return i ? i.name : void 0
      }, t.prototype.getDimensionIndex = function (t) {
        var e = this._recognizeDimIndex(t);
        if (null != e) return e;
        if (null == t) return -1;
        var n = this._getDimInfo(t);
        return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1
      }, t.prototype._recognizeDimIndex = function (t) {
        return k(t) || null != t && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0) ? +t : void 0
      }, t.prototype._getStoreDimIndex = function (t) {
        var e = this.getDimensionIndex(t);
        return e
      }, t.prototype.getDimensionInfo = function (t) {
        return this._getDimInfo(this.getDimension(t))
      }, t.prototype._initGetDimensionInfo = function (t) {
        var e = this._dimInfos;
        this._getDimInfo = t ? function (t) {
          return e.hasOwnProperty(t) ? e[t] : void 0
        } : function (t) {
          return e[t]
        }
      }, t.prototype.getDimensionsOnCoord = function () {
        return this._dimSummary.dataDimsOnCoord.slice()
      }, t.prototype.mapDimension = function (t, e) {
        var n = this._dimSummary;
        if (null == e) return n.encodeFirstDimNotExtra[t];
        var i = n.encode[t];
        return i ? i[e] : null
      }, t.prototype.mapDimensionsAll = function (t) {
        var e = this._dimSummary,
          n = e.encode[t];
        return (n || []).slice()
      }, t.prototype.getStore = function () {
        return this._store
      }, t.prototype.initData = function (t, e, n) {
        var i, r = this;
        if (t instanceof MM && (i = t), !i) {
          var o = this.dimensions,
            a = Tu(t) || g(t) ? new iM(t, o.length) : t;
          i = new MM;
          var s = lI(o, function (t) {
            return {
              type: r._dimInfos[t].type,
              property: t
            }
          });
          i.initData(a, s, n)
        }
        this._store = i, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, i.count()), this._dimSummary = _p(this, this._schema), this.userOutput = this._dimSummary.userOutput
      }, t.prototype.appendData = function (t) {
        var e = this._store.appendData(t);
        this._doInit(e[0], e[1])
      }, t.prototype.appendValues = function (t, e) {
        var n = this._store.appendValues(t, e.length),
          i = n.start,
          r = n.end,
          o = this._shouldMakeIdFromName();
        if (this._updateOrdinalMeta(), e)
          for (var a = i; r > a; a++) {
            var s = a - i;
            this._nameList[a] = e[s], o && JC(this, a)
          }
      }, t.prototype._updateOrdinalMeta = function () {
        for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
          var i = this._dimInfos[e[n]];
          i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta)
        }
      }, t.prototype._shouldMakeIdFromName = function () {
        var t = this._store.getProvider();
        return null == this._idDimIdx && t.getSource().sourceFormat !== CS && !t.fillStorage
      }, t.prototype._doInit = function (t, e) {
        if (!(t >= e)) {
          var n = this._store,
            i = n.getProvider();
          this._updateOrdinalMeta();
          var r = this._nameList,
            o = this._idList,
            a = i.getSource().sourceFormat,
            s = a === bS;
          if (s && !i.pure)
            for (var l = [], u = t; e > u; u++) {
              var h = i.getItem(u, l);
              if (!this.hasItemOption && pr(h) && (this.hasItemOption = !0), h) {
                var c = h.name;
                null == r[u] && null != c && (r[u] = br(c, null));
                var p = h.id;
                null == o[u] && null != p && (o[u] = br(p, null))
              }
            }
          if (this._shouldMakeIdFromName())
            for (var u = t; e > u; u++) JC(this, u);
          qC(this)
        }
      }, t.prototype.getApproximateExtent = function (t) {
        return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t))
      }, t.prototype.setApproximateExtent = function (t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice()
      }, t.prototype.getCalculationInfo = function (t) {
        return this._calculationInfo[t]
      }, t.prototype.setCalculationInfo = function (t, e) {
        sI(t) ? h(this._calculationInfo, t) : this._calculationInfo[t] = e
      }, t.prototype.getName = function (t) {
        var e = this.getRawIndex(t),
          n = this._nameList[e];
        return null == n && null != this._nameDimIdx && (n = ZC(this, this._nameDimIdx, e)), null == n && (n = ""), n
      }, t.prototype._getCategory = function (t, e) {
        var n = this._store.get(t, e),
          i = this._store.getOrdinalMeta(t);
        return i ? i.categories[n] : n
      }, t.prototype.getId = function (t) {
        return jC(this, this.getRawIndex(t))
      }, t.prototype.count = function () {
        return this._store.count()
      }, t.prototype.get = function (t, e) {
        var n = this._store,
          i = this._dimInfos[t];
        return i ? n.get(i.storeDimIndex, e) : void 0
      }, t.prototype.getByRawIndex = function (t, e) {
        var n = this._store,
          i = this._dimInfos[t];
        return i ? n.getByRawIndex(i.storeDimIndex, e) : void 0
      }, t.prototype.getIndices = function () {
        return this._store.getIndices()
      }, t.prototype.getDataExtent = function (t) {
        return this._store.getDataExtent(this._getStoreDimIndex(t))
      }, t.prototype.getSum = function (t) {
        return this._store.getSum(this._getStoreDimIndex(t))
      }, t.prototype.getMedian = function (t) {
        return this._store.getMedian(this._getStoreDimIndex(t))
      }, t.prototype.getValues = function (t, e) {
        var n = this,
          i = this._store;
        return M(t) ? i.getValues(lI(t, function (t) {
          return n._getStoreDimIndex(t)
        }), e) : i.getValues(t)
      }, t.prototype.hasValue = function (t) {
        for (var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length; i > n; n++)
          if (isNaN(this._store.get(e[n], t))) return !1;
        return !0
      }, t.prototype.indexOfName = function (t) {
        for (var e = 0, n = this._store.count(); n > e; e++)
          if (this.getName(e) === t) return e;
        return -1
      }, t.prototype.getRawIndex = function (t) {
        return this._store.getRawIndex(t)
      }, t.prototype.indexOfRawIndex = function (t) {
        return this._store.indexOfRawIndex(t)
      }, t.prototype.rawIndexOf = function (t, e) {
        var n = t && this._invertedIndicesMap[t],
          i = n[e];
        return null == i || isNaN(i) ? cI : i
      }, t.prototype.indicesOfNearest = function (t, e, n) {
        return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n)
      }, t.prototype.each = function (t, e, n) {
        T(t) && (n = e, e = t, t = []);
        var i = n || this,
          r = lI(KC(t), this._getStoreDimIndex, this);
        this._store.each(r, i ? cy(e, i) : e)
      }, t.prototype.filterSelf = function (t, e, n) {
        T(t) && (n = e, e = t, t = []);
        var i = n || this,
          r = lI(KC(t), this._getStoreDimIndex, this);
        return this._store = this._store.filter(r, i ? cy(e, i) : e), this
      }, t.prototype.selectRange = function (t) {
        var e = this,
          n = {},
          i = w(t),
          r = [];
        return v(i, function (i) {
          var o = e._getStoreDimIndex(i);
          n[o] = t[i], r.push(o)
        }), this._store = this._store.selectRange(n), this
      }, t.prototype.mapArray = function (t, e, n) {
        T(t) && (n = e, e = t, t = []), n = n || this;
        var i = [];
        return this.each(t, function () {
          i.push(e && e.apply(this, arguments))
        }, n), i
      }, t.prototype.map = function (t, e, n, i) {
        var r = n || i || this,
          o = lI(KC(t), this._getStoreDimIndex, this),
          a = QC(this);
        return a._store = this._store.map(o, r ? cy(e, r) : e), a
      }, t.prototype.modify = function (t, e, n, i) {
        var r = n || i || this,
          o = lI(KC(t), this._getStoreDimIndex, this);
        this._store.modify(o, r ? cy(e, r) : e)
      }, t.prototype.downSample = function (t, e, n, i) {
        var r = QC(this);
        return r._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i), r
      }, t.prototype.lttbDownSample = function (t, e) {
        var n = QC(this);
        return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), n
      }, t.prototype.getRawDataItem = function (t) {
        return this._store.getRawDataItem(t)
      }, t.prototype.getItemModel = function (t) {
        var e = this.hostModel,
          n = this.getRawDataItem(t);
        return new Fb(n, e, e && e.ecModel)
      }, t.prototype.diff = function (t) {
        var e = this;
        return new eI(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function (e) {
          return jC(t, e)
        }, function (t) {
          return jC(e, t)
        })
      }, t.prototype.getVisual = function (t) {
        var e = this._visual;
        return e && e[t]
      }, t.prototype.setVisual = function (t, e) {
        this._visual = this._visual || {}, sI(t) ? h(this._visual, t) : this._visual[t] = e
      }, t.prototype.getItemVisual = function (t, e) {
        var n = this._itemVisuals[t],
          i = n && n[e];
        return null == i ? this.getVisual(e) : i
      }, t.prototype.hasItemVisual = function () {
        return this._itemVisuals.length > 0
      }, t.prototype.ensureUniqueItemVisual = function (t, e) {
        var n = this._itemVisuals,
          i = n[t];
        i || (i = n[t] = {});
        var r = i[e];
        return null == r && (r = this.getVisual(e), M(r) ? r = r.slice() : sI(r) && (r = h({}, r)), i[e] = r), r
      }, t.prototype.setItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t] || {};
        this._itemVisuals[t] = i, sI(e) ? h(i, e) : i[e] = n
      }, t.prototype.clearAllVisual = function () {
        this._visual = {}, this._itemVisuals = []
      }, t.prototype.setLayout = function (t, e) {
        sI(t) ? h(this._layout, t) : this._layout[t] = e
      }, t.prototype.getLayout = function (t) {
        return this._layout[t]
      }, t.prototype.getItemLayout = function (t) {
        return this._itemLayouts[t]
      }, t.prototype.setItemLayout = function (t, e, n) {
        this._itemLayouts[t] = n ? h(this._itemLayouts[t] || {}, e) : e
      }, t.prototype.clearItemLayouts = function () {
        this._itemLayouts.length = 0
      }, t.prototype.setItemGraphicEl = function (t, e) {
        var n = this.hostModel && this.hostModel.seriesIndex;
        Qx(n, this.dataType, t, e), this._graphicEls[t] = e
      }, t.prototype.getItemGraphicEl = function (t) {
        return this._graphicEls[t]
      }, t.prototype.eachItemGraphicEl = function (t, e) {
        v(this._graphicEls, function (n, i) {
          n && t && t.call(e, n, i)
        })
      }, t.prototype.cloneShallow = function (e) {
        return e || (e = new t(this._schema ? this._schema : lI(this.dimensions, this._getDimInfo, this), this.hostModel)), $C(e, this), e._store = this._store, e
      }, t.prototype.wrapMethod = function (t, e) {
        var n = this[t];
        T(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
          var t = n.apply(this, arguments);
          return e.apply(this, [t].concat(H(arguments)))
        })
      }, t.internalField = function () {
        qC = function (t) {
          var e = t._invertedIndicesMap;
          v(e, function (n, i) {
            var r = t._dimInfos[i],
              o = r.ordinalMeta,
              a = t._store;
            if (o) {
              n = e[i] = new uI(o.categories.length);
              for (var s = 0; s < n.length; s++) n[s] = cI;
              for (var s = 0; s < a.count(); s++) n[a.get(r.storeDimIndex, s)] = s
            }
          })
        }, ZC = function (t, e, n) {
          return br(t._getCategory(e, n), null)
        }, jC = function (t, e) {
          var n = t._idList[e];
          return null == n && null != t._idDimIdx && (n = ZC(t, t._idDimIdx, e)), null == n && (n = hI + e), n
        }, KC = function (t) {
          return M(t) || (t = null != t ? [t] : []), t
        }, QC = function (e) {
          var n = new t(e._schema ? e._schema : lI(e.dimensions, e._getDimInfo, e), e.hostModel);
          return $C(n, e), n
        }, $C = function (t, e) {
          v(pI.concat(e.__wrappedMethods || []), function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
          }), t.__wrappedMethods = e.__wrappedMethods, v(fI, function (n) {
            t[n] = s(e[n])
          }), t._calculationInfo = h({}, e._calculationInfo)
        }, JC = function (t, e) {
          var n = t._nameList,
            i = t._idList,
            r = t._nameDimIdx,
            o = t._idDimIdx,
            a = n[e],
            s = i[e];
          if (null == a && null != r && (n[e] = a = ZC(t, r, e)), null == s && null != o && (i[e] = s = ZC(t, o, e)), null == s && null != a) {
            var l = t._nameRepeatCount,
              u = l[a] = (l[a] || 0) + 1;
            s = a, u > 1 && (s += "__ec__" + u), i[e] = s
          }
        }
      }(), t
    }(),
    gI = function () {
      function t(t) {
        this.coordSysDims = [], this.axisMap = Y(), this.categoryAxisMap = Y(), this.coordSysName = t
      }
      return t
    }(),
    vI = {
      cartesian2d: function (t, e, n, i) {
        var r = t.getReferringComponents("xAxis", k_).models[0],
          o = t.getReferringComponents("yAxis", k_).models[0];
        e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", o), Op(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), Op(o) && (i.set("y", o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1))
      },
      singleAxis: function (t, e, n, i) {
        var r = t.getReferringComponents("singleAxis", k_).models[0];
        e.coordSysDims = ["single"], n.set("single", r), Op(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
      },
      polar: function (t, e, n, i) {
        var r = t.getReferringComponents("polar", k_).models[0],
          o = r.findAxisModel("radiusAxis"),
          a = r.findAxisModel("angleAxis");
        e.coordSysDims = ["radius", "angle"], n.set("radius", o), n.set("angle", a), Op(o) && (i.set("radius", o), e.firstCategoryDimIndex = 0), Op(a) && (i.set("angle", a), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1))
      },
      geo: function (t, e) {
        e.coordSysDims = ["lng", "lat"]
      },
      parallel: function (t, e, n, i) {
        var r = t.ecModel,
          o = r.getComponent("parallel", t.get("parallelIndex")),
          a = e.coordSysDims = o.dimensions.slice();
        v(o.parallelAxisIndex, function (t, o) {
          var s = r.getComponent("parallelAxis", t),
            l = a[o];
          n.set(l, s), Op(s) && (i.set(l, s), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = o))
        })
      }
    },
    yI = function () {
      function t(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0]
      }
      return t.prototype.getSetting = function (t) {
        return this._setting[t]
      }, t.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
      }, t.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      }, t.prototype.getExtent = function () {
        return this._extent.slice()
      }, t.prototype.setExtent = function (t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
      }, t.prototype.isInExtentRange = function (t) {
        return this._extent[0] <= t && this._extent[1] >= t
      }, t.prototype.isBlank = function () {
        return this._isBlank
      }, t.prototype.setBlank = function (t) {
        this._isBlank = t
      }, t
    }();
  Xr(yI);
  var mI = 0,
    _I = function () {
      function t(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++mI
      }
      return t.createByAxisModel = function (e) {
        var n = e.option,
          i = n.data,
          r = i && y(i, Gp);
        return new t({
          categories: r,
          needCollect: !r,
          deduplication: n.dedplication !== !1
        })
      }, t.prototype.getOrdinal = function (t) {
        return this._getOrCreateMap().get(t)
      }, t.prototype.parseAndCollect = function (t) {
        var e, n = this._needCollect;
        if (!C(t) && !n) return t;
        if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
        var i = this._getOrCreateMap();
        return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e
      }, t.prototype._getOrCreateMap = function () {
        return this._map || (this._map = Y(this.categories))
      }, t
    }(),
    xI = function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        n.type = "ordinal";
        var i = n.getSetting("ordinalMeta");
        return i || (i = new _I({})), M(i) && (i = new _I({
          categories: y(i, function (t) {
            return D(t) ? t.value : t
          })
        })), n._ordinalMeta = i, n._extent = n.getSetting("extent") || [0, i.categories.length - 1], n
      }
      return e(n, t), n.prototype.parse = function (t) {
        return null == t ? 0 / 0 : C(t) ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
      }, n.prototype.contain = function (t) {
        return t = this.parse(t), Kp(t, this._extent) && null != this._ordinalMeta.categories[t]
      }, n.prototype.normalize = function (t) {
        return t = this._getTickNumber(this.parse(t)), $p(t, this._extent)
      }, n.prototype.scale = function (t) {
        return t = Math.round(Qp(t, this._extent)), this.getRawOrdinalNumber(t)
      }, n.prototype.getTicks = function () {
        for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push({
          value: n
        }), n++;
        return t
      }, n.prototype.getMinorTicks = function () {}, n.prototype.setSortInfo = function (t) {
        if (null == t) return void(this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null);
        for (var e = t.ordinalNumbers, n = this._ordinalNumbersByTick = [], i = this._ticksByOrdinalNumber = [], r = 0, o = this._ordinalMeta.categories.length, a = Math.min(o, e.length); a > r; ++r) {
          var s = e[r];
          n[r] = s, i[s] = r
        }
        for (var l = 0; o > r; ++r) {
          for (; null != i[l];) l++;
          n.push(l), i[l] = r
        }
      }, n.prototype._getTickNumber = function (t) {
        var e = this._ticksByOrdinalNumber;
        return e && t >= 0 && t < e.length ? e[t] : t
      }, n.prototype.getRawOrdinalNumber = function (t) {
        var e = this._ordinalNumbersByTick;
        return e && t >= 0 && t < e.length ? e[t] : t
      }, n.prototype.getLabel = function (t) {
        if (!this.isBlank()) {
          var e = this.getRawOrdinalNumber(t.value),
            n = this._ordinalMeta.categories[e];
          return null == n ? "" : n + ""
        }
      }, n.prototype.count = function () {
        return this._extent[1] - this._extent[0] + 1
      }, n.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      }, n.prototype.isInExtentRange = function (t) {
        return t = this._getTickNumber(t), this._extent[0] <= t && this._extent[1] >= t
      }, n.prototype.getOrdinalMeta = function () {
        return this._ordinalMeta
      }, n.prototype.calcNiceTicks = function () {}, n.prototype.calcNiceExtent = function () {}, n.type = "ordinal", n
    }(yI);
  yI.registerClass(xI);
  var wI = Vi,
    bI = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e
      }
      return e(n, t), n.prototype.parse = function (t) {
        return t
      }, n.prototype.contain = function (t) {
        return Kp(t, this._extent)
      }, n.prototype.normalize = function (t) {
        return $p(t, this._extent)
      }, n.prototype.scale = function (t) {
        return Qp(t, this._extent)
      }, n.prototype.setExtent = function (t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
      }, n.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), this.setExtent(e[0], e[1])
      }, n.prototype.getInterval = function () {
        return this._interval
      }, n.prototype.setInterval = function (t) {
        this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = qp(t)
      }, n.prototype.getTicks = function (t) {
        var e = this._interval,
          n = this._extent,
          i = this._niceExtent,
          r = this._intervalPrecision,
          o = [];
        if (!e) return o;
        var a = 1e4;
        n[0] < i[0] && o.push(t ? {
          value: wI(i[0] - e, r)
        } : {
          value: n[0]
        });
        for (var s = i[0]; s <= i[1] && (o.push({
            value: s
          }), s = wI(s + e, r), s !== o[o.length - 1].value);)
          if (o.length > a) return [];
        var l = o.length ? o[o.length - 1].value : i[1];
        return n[1] > l && o.push(t ? {
          value: wI(l + e, r)
        } : {
          value: n[1]
        }), o
      }, n.prototype.getMinorTicks = function (t) {
        for (var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1; r < e.length; r++) {
          for (var o = e[r], a = e[r - 1], s = 0, l = [], u = o.value - a.value, h = u / t; t - 1 > s;) {
            var c = wI(a.value + (s + 1) * h);
            c > i[0] && c < i[1] && l.push(c), s++
          }
          n.push(l)
        }
        return n
      }, n.prototype.getLabel = function (t, e) {
        if (null == t) return "";
        var n = e && e.precision;
        null == n ? n = Gi(t.value) || 0 : "auto" === n && (n = this._intervalPrecision);
        var i = wI(t.value, n, !0);
        return Sl(i)
      }, n.prototype.calcNiceTicks = function (t, e, n) {
        t = t || 5;
        var i = this._extent,
          r = i[1] - i[0];
        if (isFinite(r)) {
          0 > r && (r = -r, i.reverse());
          var o = Xp(i, t, e, n);
          this._intervalPrecision = o.intervalPrecision, this._interval = o.interval, this._niceExtent = o.niceTickExtent
        }
      }, n.prototype.calcNiceExtent = function (t) {
        var e = this._extent;
        if (e[0] === e[1])
          if (0 !== e[0]) {
            var n = e[0];
            t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
          } else e[1] = 1;
        var i = e[1] - e[0];
        isFinite(i) || (e[0] = 0, e[1] = 1), this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        var r = this._interval;
        t.fixMin || (e[0] = wI(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = wI(Math.ceil(e[1] / r) * r))
      }, n.prototype.setNiceExtent = function (t, e) {
        this._niceExtent = [t, e]
      }, n.type = "interval", n
    }(yI);
  yI.registerClass(bI);
  var SI = "__ec_stack_",
    MI = function (t, e, n, i) {
      for (; i > n;) {
        var r = n + i >>> 1;
        t[r][1] < e ? n = r + 1 : i = r
      }
      return n
    },
    TI = function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return n.type = "time", n
      }
      return e(n, t), n.prototype.getLabel = function (t) {
        var e = this.getSetting("useUTC");
        return rl(t.value, nS[il(el(this._minLevelUnit))] || nS.second, e, this.getSetting("locale"))
      }, n.prototype.getFormattedLabel = function (t, e, n) {
        var i = this.getSetting("useUTC"),
          r = this.getSetting("locale");
        return ol(t, e, n, r, i)
      }, n.prototype.getTicks = function () {
        var t = this._interval,
          e = this._extent,
          n = [];
        if (!t) return n;
        n.push({
          value: e[0],
          level: 0
        });
        var i = this.getSetting("useUTC"),
          r = vf(this._minLevelUnit, this._approxInterval, i, e);
        return n = n.concat(r), n.push({
          value: e[1],
          level: 0
        }), n
      }, n.prototype.calcNiceExtent = function (t) {
        var e = this._extent;
        if (e[0] === e[1] && (e[0] -= Qb, e[1] += Qb), e[1] === -1 / 0 && 1 / 0 === e[0]) {
          var n = new Date;
          e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - Qb
        }
        this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval)
      }, n.prototype.calcNiceTicks = function (t, e, n) {
        t = t || 10;
        var i = this._extent,
          r = i[1] - i[0];
        this._approxInterval = r / t, null != e && this._approxInterval < e && (this._approxInterval = e), null != n && this._approxInterval > n && (this._approxInterval = n);
        var o = CI.length,
          a = Math.min(MI(CI, this._approxInterval, 0, o), o - 1);
        this._interval = CI[a][1], this._minLevelUnit = CI[Math.max(a - 1, 0)][0]
      }, n.prototype.parse = function (t) {
        return k(t) ? t : +Ki(t)
      }, n.prototype.contain = function (t) {
        return Kp(this.parse(t), this._extent)
      }, n.prototype.normalize = function (t) {
        return $p(this.parse(t), this._extent)
      }, n.prototype.scale = function (t) {
        return Qp(t, this._extent)
      }, n.type = "time", n
    }(bI),
    CI = [
      ["second", Zb],
      ["minute", Kb],
      ["hour", $b],
      ["quarter-day", 6 * $b],
      ["half-day", 12 * $b],
      ["day", 1.2 * Qb],
      ["half-week", 3.5 * Qb],
      ["week", 7 * Qb],
      ["month", 31 * Qb],
      ["quarter", 95 * Qb],
      ["half-year", Jb / 2],
      ["year", Jb]
    ];
  yI.registerClass(TI);
  var II = yI.prototype,
    kI = bI.prototype,
    DI = Vi,
    AI = Math.floor,
    PI = Math.ceil,
    LI = Math.pow,
    OI = Math.log,
    RI = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = "log", e.base = 10, e._originalScale = new bI, e._interval = 0, e
      }
      return e(n, t), n.prototype.getTicks = function (t) {
        var e = this._originalScale,
          n = this._extent,
          i = e.getExtent(),
          r = kI.getTicks.call(this, t);
        return y(r, function (t) {
          var e = t.value,
            r = Vi(LI(this.base, e));
          return r = e === n[0] && this._fixMin ? yf(r, i[0]) : r, r = e === n[1] && this._fixMax ? yf(r, i[1]) : r, {
            value: r
          }
        }, this)
      }, n.prototype.setExtent = function (t, e) {
        var n = this.base;
        t = OI(t) / OI(n), e = OI(e) / OI(n), kI.setExtent.call(this, t, e)
      }, n.prototype.getExtent = function () {
        var t = this.base,
          e = II.getExtent.call(this);
        e[0] = LI(t, e[0]), e[1] = LI(t, e[1]);
        var n = this._originalScale,
          i = n.getExtent();
        return this._fixMin && (e[0] = yf(e[0], i[0])), this._fixMax && (e[1] = yf(e[1], i[1])), e
      }, n.prototype.unionExtent = function (t) {
        this._originalScale.unionExtent(t);
        var e = this.base;
        t[0] = OI(t[0]) / OI(e), t[1] = OI(t[1]) / OI(e), II.unionExtent.call(this, t)
      }, n.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      }, n.prototype.calcNiceTicks = function (t) {
        t = t || 10;
        var e = this._extent,
          n = e[1] - e[0];
        if (!(1 / 0 === n || 0 >= n)) {
          var i = $i(n),
            r = t / n * i;
          for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
          var o = [Vi(PI(e[0] / i) * i), Vi(AI(e[1] / i) * i)];
          this._interval = i, this._niceExtent = o
        }
      }, n.prototype.calcNiceExtent = function (t) {
        kI.calcNiceExtent.call(this, t), this._fixMin = t.fixMin, this._fixMax = t.fixMax
      }, n.prototype.parse = function (t) {
        return t
      }, n.prototype.contain = function (t) {
        return t = OI(t) / OI(this.base), Kp(t, this._extent)
      }, n.prototype.normalize = function (t) {
        return t = OI(t) / OI(this.base), $p(t, this._extent)
      }, n.prototype.scale = function (t) {
        return t = Qp(t, this._extent), LI(this.base, t)
      }, n.type = "log", n
    }(yI),
    BI = RI.prototype;
  BI.getMinorTicks = kI.getMinorTicks, BI.getLabel = kI.getLabel, yI.registerClass(RI);
  var zI = function () {
      function t(t, e, n) {
        this._prepareParams(t, e, n)
      }
      return t.prototype._prepareParams = function (t, e, n) {
        n[1] < n[0] && (n = [0 / 0, 0 / 0]), this._dataMin = n[0], this._dataMax = n[1];
        var i = this._isOrdinal = "ordinal" === t.type;
        this._needCrossZero = "interval" === t.type && e.getNeedCrossZero && e.getNeedCrossZero();
        var r = this._modelMinRaw = e.get("min", !0);
        T(r) ? this._modelMinNum = _f(t, r({
          min: n[0],
          max: n[1]
        })) : "dataMin" !== r && (this._modelMinNum = _f(t, r));
        var o = this._modelMaxRaw = e.get("max", !0);
        if (T(o) ? this._modelMaxNum = _f(t, o({
            min: n[0],
            max: n[1]
          })) : "dataMax" !== o && (this._modelMaxNum = _f(t, o)), i) this._axisDataLen = e.getCategories().length;
        else {
          var a = e.get("boundaryGap"),
            s = M(a) ? a : [a || 0, a || 0];
          this._boundaryGapInner = "boolean" == typeof s[0] || "boolean" == typeof s[1] ? [0, 0] : [bi(s[0], 1), bi(s[1], 1)]
        }
      }, t.prototype.calculate = function () {
        var t = this._isOrdinal,
          e = this._dataMin,
          n = this._dataMax,
          i = this._axisDataLen,
          r = this._boundaryGapInner,
          o = t ? null : n - e || Math.abs(e),
          a = "dataMin" === this._modelMinRaw ? e : this._modelMinNum,
          s = "dataMax" === this._modelMaxRaw ? n : this._modelMaxNum,
          l = null != a,
          u = null != s;
        null == a && (a = t ? i ? 0 : 0 / 0 : e - r[0] * o), null == s && (s = t ? i ? i - 1 : 0 / 0 : n + r[1] * o), (null == a || !isFinite(a)) && (a = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0);
        var h = z(a) || z(s) || t && !i;
        this._needCrossZero && (a > 0 && s > 0 && !l && (a = 0), 0 > a && 0 > s && !u && (s = 0));
        var c = this._determinedMin,
          p = this._determinedMax;
        return null != c && (a = c, l = !0), null != p && (s = p, u = !0), {
          min: a,
          max: s,
          minFixed: l,
          maxFixed: u,
          isBlank: h
        }
      }, t.prototype.modifyDataMinMax = function (t, e) {
        this[NI[t]] = e
      }, t.prototype.setDeterminedMinMax = function (t, e) {
        var n = EI[t];
        this[n] = e
      }, t.prototype.freeze = function () {
        this.frozen = !0
      }, t
    }(),
    EI = {
      min: "_determinedMin",
      max: "_determinedMax"
    },
    NI = {
      min: "_dataMin",
      max: "_dataMax"
    },
    FI = function () {
      function t() {}
      return t.prototype.getNeedCrossZero = function () {
        var t = this.option;
        return !t.scale
      }, t.prototype.getCoordSysModel = function () {}, t
    }(),
    HI = {
      isDimensionStacked: zp,
      enableDataStack: Rp,
      getStackedDimension: Ep
    },
    VI = (Object.freeze || Object)({
      createList: Lf,
      getLayoutRect: Rl,
      dataStack: HI,
      createScale: Of,
      mixinAxisModelCommonMethods: Rf,
      getECData: $x,
      createTextStyle: Bf,
      createDimensions: Ip,
      createSymbol: oc,
      enableHoverEmphasis: Ca
    }),
    WI = [],
    GI = {
      registerPreprocessor: np,
      registerProcessor: ip,
      registerPostInit: rp,
      registerPostUpdate: op,
      registerUpdateLifecycle: ap,
      registerAction: sp,
      registerCoordinateSystem: lp,
      registerLayout: hp,
      registerVisual: cp,
      registerTransform: YC,
      registerLoading: fp,
      registerMap: gp,
      registerImpl: Uc,
      PRIORITY: tC,
      ComponentModel: gS,
      ComponentView: OM,
      SeriesModel: LM,
      ChartView: zM,
      registerComponentModel: function (t) {
        gS.registerClass(t)
      },
      registerComponentView: function (t) {
        OM.registerClass(t)
      },
      registerSeriesModel: function (t) {
        LM.registerClass(t)
      },
      registerChartView: function (t) {
        zM.registerClass(t)
      },
      registerSubTypeDefaulter: function (t, e) {
        gS.registerSubTypeDefaulter(t, e)
      },
      registerPainter: function (t, e) {
        Ei(t, e)
      }
    },
    UI = 1e-8,
    XI = [],
    YI = function () {
      function t(t) {
        this.name = t
      }
      return t.prototype.setCenter = function (t) {
        this._center = t
      }, t.prototype.getCenter = function () {
        var t = this._center;
        return t || (t = this._center = this.calcCenter()), t
      }, t
    }(),
    qI = function () {
      function t(t, e) {
        this.type = "polygon", this.exterior = t, this.interiors = e
      }
      return t
    }(),
    jI = function () {
      function t(t) {
        this.type = "linestring", this.points = t
      }
      return t
    }(),
    ZI = function (t) {
      function n(e, n, i) {
        var r = t.call(this, e) || this;
        return r.type = "geoJSON", r.geometries = n, r._center = i && [i[0], i[1]], r
      }
      return e(n, t), n.prototype.calcCenter = function () {
        for (var t, e = this.geometries, n = 0, i = 0; i < e.length; i++) {
          var r = e[i],
            o = r.exterior,
            a = o && o.length;
          a > n && (t = r, n = a)
        }
        if (t) return Vf(t.exterior);
        var s = this.getBoundingRect();
        return [s.x + s.width / 2, s.y + s.height / 2]
      }, n.prototype.getBoundingRect = function (t) {
        var e = this._rect;
        if (e && !t) return e;
        var n = [1 / 0, 1 / 0],
          i = [-1 / 0, -1 / 0],
          r = this.geometries;
        return v(r, function (e) {
          "polygon" === e.type ? Hf(e.exterior, n, i, t) : v(e.points, function (e) {
            Hf(e, n, i, t)
          })
        }), isFinite(n[0]) && isFinite(n[1]) && isFinite(i[0]) && isFinite(i[1]) || (n[0] = n[1] = i[0] = i[1] = 0), e = new a_(n[0], n[1], i[0] - n[0], i[1] - n[1]), t || (this._rect = e), e
      }, n.prototype.contain = function (t) {
        var e = this.getBoundingRect(),
          n = this.geometries;
        if (!e.contain(t[0], t[1])) return !1;
        t: for (var i = 0, r = n.length; r > i; i++) {
          var o = n[i];
          if ("polygon" === o.type) {
            var a = o.exterior,
              s = o.interiors;
            if (Nf(a, t[0], t[1])) {
              for (var l = 0; l < (s ? s.length : 0); l++)
                if (Nf(s[l], t[0], t[1])) continue t;
              return !0
            }
          }
        }
        return !1
      }, n.prototype.transformTo = function (t, e, n, i) {
        var r = this.getBoundingRect(),
          o = r.width / r.height;
        n ? i || (i = n / o) : n = o * i;
        for (var a = new a_(t, e, n, i), s = r.calculateTransform(a), l = this.geometries, u = 0; u < l.length; u++) {
          var h = l[u];
          "polygon" === h.type ? (Ff(h.exterior, s), v(h.interiors, function (t) {
            Ff(t, s)
          })) : v(h.points, function (t) {
            Ff(t, s)
          })
        }
        r = this._rect, r.copy(a), this._center = [r.x + r.width / 2, r.y + r.height / 2]
      }, n.prototype.cloneShallow = function (t) {
        null == t && (t = this.name);
        var e = new n(t, this.geometries, this._center);
        return e._rect = this._rect, e.transformTo = null, e
      }, n
    }(YI),
    KI = (function (t) {
      function n(e, n) {
        var i = t.call(this, e) || this;
        return i.type = "geoSVG", i._elOnlyForCalculate = n, i
      }
      return e(n, t), n.prototype.calcCenter = function () {
        for (var t = this._elOnlyForCalculate, e = t.getBoundingRect(), n = [e.x + e.width / 2, e.y + e.height / 2], i = ai(XI), r = t; r && !r.isGeoSVGGraphicRoot;) li(i, r.getLocalTransform(), i), r = r.parent;
        return pi(i, i), ve(n, n, i), n
      }, n
    }(YI), (Object.freeze || Object)({
      linearMap: Fi,
      round: Vi,
      asc: Wi,
      getPrecision: Gi,
      getPrecisionSafe: Ui,
      getPixelPrecision: Xi,
      getPercentWithPrecision: Yi,
      MAX_SAFE_INTEGER: b_,
      remRadian: ji,
      isRadianAroundZero: Zi,
      parseDate: Ki,
      quantity: $i,
      quantityExponent: Qi,
      nice: Ji,
      quantile: tr,
      reformIntervals: er,
      isNumeric: ir,
      numericToNumber: nr
    })),
    $I = (Object.freeze || Object)({
      parse: Ki,
      format: rl
    }),
    QI = (Object.freeze || Object)({
      extendShape: us,
      extendPath: hs,
      makePath: fs,
      makeImage: ds,
      mergePath: wb,
      resizePath: vs,
      createIcon: Is,
      updateProps: is,
      initProps: rs,
      getTransform: _s,
      clipPointsByRect: Ts,
      clipRectByRect: Cs,
      registerShape: cs,
      getShapeClass: ps,
      Group: d_,
      Image: Fx,
      Text: qx,
      Circle: Aw,
      Ellipse: Lw,
      Sector: Xw,
      Ring: qw,
      Polygon: Zw,
      Polyline: $w,
      Rect: Gx,
      Line: tb,
      BezierCurve: ib,
      Arc: ob,
      IncrementalDisplayable: vb,
      CompoundPath: ab,
      LinearGradient: lb,
      RadialGradient: ub,
      BoundingRect: a_
    }),
    JI = (Object.freeze || Object)({
      addCommas: Sl,
      toCamelCase: Ml,
      normalizeCssArray: oS,
      encodeHTML: Tl,
      formatTpl: Il,
      getTooltipMarker: kl,
      formatTime: Dl,
      capitalFirst: Al,
      truncateText: $r,
      getTextRect: bl
    }),
    tk = (Object.freeze || Object)({
      map: y,
      each: v,
      indexOf: p,
      inherits: f,
      reduce: m,
      filter: _,
      bind: cy,
      curry: S,
      isArray: M,
      isString: C,
      isObject: D,
      isFunction: T,
      extend: h,
      defaults: c,
      clone: s,
      merge: l
    }),
    ek = kr(),
    nk = [0, 1],
    ik = function () {
      function t(t, e, n) {
        this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = n || [0, 0]
      }
      return t.prototype.contain = function (t) {
        var e = this._extent,
          n = Math.min(e[0], e[1]),
          i = Math.max(e[0], e[1]);
        return t >= n && i >= t
      }, t.prototype.containData = function (t) {
        return this.scale.contain(t)
      }, t.prototype.getExtent = function () {
        return this._extent.slice()
      }, t.prototype.getPixelPrecision = function (t) {
        return Xi(t || this.scale.getExtent(), this._extent)
      }, t.prototype.setExtent = function (t, e) {
        var n = this._extent;
        n[0] = t, n[1] = e
      }, t.prototype.dataToCoord = function (t, e) {
        var n = this._extent,
          i = this.scale;
        return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), ad(n, i.count())), Fi(t, nk, n, e)
      }, t.prototype.coordToData = function (t, e) {
        var n = this._extent,
          i = this.scale;
        this.onBand && "ordinal" === i.type && (n = n.slice(), ad(n, i.count()));
        var r = Fi(t, n, nk, e);
        return this.scale.scale(r)
      }, t.prototype.pointToData = function () {}, t.prototype.getTicksCoords = function (t) {
        t = t || {};
        var e = t.tickModel || this.getTickModel(),
          n = qf(this, e),
          i = n.ticks,
          r = y(i, function (t) {
            return {
              coord: this.dataToCoord("ordinal" === this.scale.type ? this.scale.getRawOrdinalNumber(t) : t),
              tickValue: t
            }
          }, this),
          o = e.get("alignWithLabel");
        return sd(this, r, o, t.clamp), r
      }, t.prototype.getMinorTicksCoords = function () {
        if ("ordinal" === this.scale.type) return [];
        var t = this.model.getModel("minorTick"),
          e = t.get("splitNumber");
        e > 0 && 100 > e || (e = 5);
        var n = this.scale.getMinorTicks(e),
          i = y(n, function (t) {
            return y(t, function (t) {
              return {
                coord: this.dataToCoord(t),
                tickValue: t
              }
            }, this)
          }, this);
        return i
      }, t.prototype.getViewLabels = function () {
        return Yf(this).labels
      }, t.prototype.getLabelModel = function () {
        return this.model.getModel("axisLabel")
      }, t.prototype.getTickModel = function () {
        return this.model.getModel("axisTick")
      }, t.prototype.getBandWidth = function () {
        var t = this._extent,
          e = this.scale.getExtent(),
          n = e[1] - e[0] + (this.onBand ? 1 : 0);
        0 === n && (n = 1);
        var i = Math.abs(t[1] - t[0]);
        return Math.abs(i) / n
      }, t.prototype.calculateCategoryInterval = function () {
        return nd(this)
      }, t
    }(),
    rk = 2 * Math.PI,
    ok = Sx.CMD,
    ak = ["top", "right", "bottom", "left"],
    sk = [],
    lk = new $m,
    uk = new $m,
    hk = new $m,
    ck = new $m,
    pk = new $m,
    fk = [],
    dk = new $m,
    gk = ["align", "verticalAlign", "width", "height", "fontSize"],
    vk = new Zm,
    yk = kr(),
    mk = kr(),
    _k = ["x", "y", "rotation"],
    xk = function () {
      function t() {
        this._labelList = [], this._chartViewList = []
      }
      return t.prototype.clearLabels = function () {
        this._labelList = [], this._chartViewList = []
      }, t.prototype._addLabel = function (t, e, n, i, r) {
        var o = i.style,
          a = i.__hostTarget,
          s = a.textConfig || {},
          l = i.getComputedTransform(),
          u = i.getBoundingRect().plain();
        a_.applyTransform(u, u, l), l ? vk.setLocalTransform(l) : (vk.x = vk.y = vk.rotation = vk.originX = vk.originY = 0, vk.scaleX = vk.scaleY = 1);
        var h, c = i.__hostTarget;
        if (c) {
          h = c.getBoundingRect().plain();
          var p = c.getComputedTransform();
          a_.applyTransform(h, h, p)
        }
        var f = h && c.getTextGuideLine();
        this._labelList.push({
          label: i,
          labelLine: f,
          seriesModel: n,
          dataIndex: t,
          dataType: e,
          layoutOption: r,
          computedLayoutOption: null,
          rect: u,
          hostRect: h,
          priority: h ? h.width * h.height : 0,
          defaultAttr: {
            ignore: i.ignore,
            labelGuideIgnore: f && f.ignore,
            x: vk.x,
            y: vk.y,
            scaleX: vk.scaleX,
            scaleY: vk.scaleY,
            rotation: vk.rotation,
            style: {
              x: o.x,
              y: o.y,
              align: o.align,
              verticalAlign: o.verticalAlign,
              width: o.width,
              height: o.height,
              fontSize: o.fontSize
            },
            cursor: i.cursor,
            attachedPos: s.position,
            attachedRot: s.rotation
          }
        })
      }, t.prototype.addLabelsOfSeries = function (t) {
        var e = this;
        this._chartViewList.push(t);
        var n = t.__model,
          i = n.get("labelLayout");
        (T(i) || w(i).length) && t.group.traverse(function (t) {
          if (t.ignore) return !0;
          var r = t.getTextContent(),
            o = $x(t);
          r && !r.disableLabelLayout && e._addLabel(o.dataIndex, o.dataType, n, r, i)
        })
      }, t.prototype.updateLayoutConfig = function (t) {
        function e(t, e) {
          return function () {
            md(t, e)
          }
        }
        for (var n = t.getWidth(), i = t.getHeight(), r = 0; r < this._labelList.length; r++) {
          var o = this._labelList[r],
            a = o.label,
            s = a.__hostTarget,
            l = o.defaultAttr,
            u = void 0;
          u = T(o.layoutOption) ? o.layoutOption(Ad(o, s)) : o.layoutOption, u = u || {}, o.computedLayoutOption = u;
          var h = Math.PI / 180;
          s && s.setTextConfig({
            local: !1,
            position: null != u.x || null != u.y ? null : l.attachedPos,
            rotation: null != u.rotate ? u.rotate * h : l.attachedRot,
            offset: [u.dx || 0, u.dy || 0]
          });
          var c = !1;
          if (null != u.x ? (a.x = Hi(u.x, n), a.setStyle("x", 0), c = !0) : (a.x = l.x, a.setStyle("x", l.style.x)), null != u.y ? (a.y = Hi(u.y, i), a.setStyle("y", 0), c = !0) : (a.y = l.y, a.setStyle("y", l.style.y)), u.labelLinePoints) {
            var p = s.getTextGuideLine();
            p && (p.setShape({
              points: u.labelLinePoints
            }), c = !1)
          }
          var f = yk(a);
          f.needsUpdateLabelLine = c, a.rotation = null != u.rotate ? u.rotate * h : l.rotation, a.scaleX = l.scaleX, a.scaleY = l.scaleY;
          for (var d = 0; d < gk.length; d++) {
            var g = gk[d];
            a.setStyle(g, null != u[g] ? u[g] : l.style[g])
          }
          if (u.draggable) {
            if (a.draggable = !0, a.cursor = "move", s) {
              var v = o.seriesModel;
              if (null != o.dataIndex) {
                var y = o.seriesModel.getData(o.dataType);
                v = y.getItemModel(o.dataIndex)
              }
              a.on("drag", e(s, v.getModel("labelLine")))
            }
          } else a.off("drag"), a.cursor = l.cursor
        }
      }, t.prototype.layout = function (t) {
        var e = t.getWidth(),
          n = t.getHeight(),
          i = Md(this._labelList),
          r = _(i, function (t) {
            return "shiftX" === t.layoutOption.moveOverlap
          }),
          o = _(i, function (t) {
            return "shiftY" === t.layoutOption.moveOverlap
          });
        Cd(r, 0, e), Id(o, 0, n);
        var a = _(i, function (t) {
          return t.layoutOption.hideOverlap
        });
        kd(a)
      }, t.prototype.processLabelsOverall = function () {
        var t = this;
        v(this._chartViewList, function (e) {
          var n = e.__model,
            i = e.ignoreLabelLineUpdate,
            r = n.isAnimationEnabled();
          e.group.traverse(function (e) {
            if (e.ignore && !e.forceLabelAnimation) return !0;
            var o = !i,
              a = e.getTextContent();
            !o && a && (o = yk(a).needsUpdateLabelLine), o && t._updateLabelLine(e, n), r && t._animateLabels(e, n)
          })
        })
      }, t.prototype._updateLabelLine = function (t, e) {
        var n = t.getTextContent(),
          i = $x(t),
          r = i.dataIndex;
        if (n && null != r) {
          var o = e.getData(i.dataType),
            a = o.getItemModel(r),
            s = {},
            l = o.getItemVisual(r, "style"),
            u = o.getVisual("drawType");
          s.stroke = l[u];
          var h = a.getModel("labelLine");
          bd(t, Sd(a), s), md(t, h)
        }
      }, t.prototype._animateLabels = function (t, e) {
        var n = t.getTextContent(),
          i = t.getTextGuideLine();
        if (n && (t.forceLabelAnimation || !n.ignore && !n.invisible && !t.disableLabelAnimation && !os(t))) {
          var r = yk(n),
            o = r.oldLayout,
            a = $x(t),
            s = a.dataIndex,
            l = {
              x: n.x,
              y: n.y,
              rotation: n.rotation
            },
            u = e.getData(a.dataType);
          if (o) {
            n.attr(o);
            var h = t.prevStates;
            h && (p(h, "select") >= 0 && n.attr(r.oldLayoutSelect), p(h, "emphasis") >= 0 && n.attr(r.oldLayoutEmphasis)), is(n, l, e, s)
          } else if (n.attr(l), !kb(n).valueAnimation) {
            var c = N(n.style.opacity, 1);
            n.style.opacity = 0, rs(n, {
              style: {
                opacity: c
              }
            }, e, s)
          }
          if (r.oldLayout = l, n.states.select) {
            var f = r.oldLayoutSelect = {};
            Pd(f, l, _k), Pd(f, n.states.select, _k)
          }
          if (n.states.emphasis) {
            var d = r.oldLayoutEmphasis = {};
            Pd(d, l, _k), Pd(d, n.states.emphasis, _k)
          }
          Xs(n, s, u, e, e)
        }
        if (i && !i.ignore && !i.invisible) {
          var r = mk(i),
            o = r.oldLayout,
            g = {
              points: i.shape.points
            };
          o ? (i.attr({
            shape: o
          }), is(i, {
            shape: g
          }, e)) : (i.setShape(g), i.style.strokePercent = 0, rs(i, {
            style: {
              strokePercent: 1
            }
          }, e)), r.oldLayout = g
        }
      }, t
    }(),
    wk = kr();
  zf(Ld);
  var bk = function (t) {
      function n(e, n, i) {
        var r = t.call(this) || this;
        r.motionBlur = !1, r.lastFrameAlpha = .7, r.dpr = 1, r.virtual = !1, r.config = {}, r.incremental = !1, r.zlevel = 0, r.maxRepaintRectCount = 5, r.__dirty = !0, r.__firstTimePaint = !0, r.__used = !1, r.__drawIndex = 0, r.__startIndex = 0, r.__endIndex = 0, r.__prevStartIndex = null, r.__prevEndIndex = null;
        var o;
        i = i || Em, "string" == typeof e ? o = Od(e, n, i) : D(e) && (o = e, e = o.id), r.id = e, r.dom = o;
        var a = o.style;
        return a && (Z(o), o.onselectstart = function () {
          return !1
        }, a.padding = "0", a.margin = "0", a.borderWidth = "0"), r.painter = n, r.dpr = i, r
      }
      return e(n, t), n.prototype.getElementCount = function () {
        return this.__endIndex - this.__startIndex
      }, n.prototype.afterBrush = function () {
        this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex
      }, n.prototype.initContext = function () {
        this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
      }, n.prototype.setUnpainted = function () {
        this.__firstTimePaint = !0
      }, n.prototype.createBackBuffer = function () {
        var t = this.dpr;
        this.domBack = Od("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t)
      }, n.prototype.createRepaintRects = function (t, e, n, i) {
        function r(t) {
          if (t.isFinite() && !t.isZero())
            if (0 === o.length) {
              var e = new a_(0, 0, 0, 0);
              e.copy(t), o.push(e)
            } else {
              for (var n = !1, i = 1 / 0, r = 0, u = 0; u < o.length; ++u) {
                var h = o[u];
                if (h.intersect(t)) {
                  var c = new a_(0, 0, 0, 0);
                  c.copy(h), c.union(t), o[u] = c, n = !0;
                  break
                }
                if (s) {
                  l.copy(t), l.union(h);
                  var p = t.width * t.height,
                    f = h.width * h.height,
                    d = l.width * l.height,
                    g = d - p - f;
                  i > g && (i = g, r = u)
                }
              }
              if (s && (o[r].union(t), n = !0), !n) {
                var e = new a_(0, 0, 0, 0);
                e.copy(t), o.push(e)
              }
              s || (s = o.length >= a)
            }
        }
        if (this.__firstTimePaint) return this.__firstTimePaint = !1, null;
        for (var o = [], a = this.maxRepaintRectCount, s = !1, l = new a_(0, 0, 0, 0), u = this.__startIndex; u < this.__endIndex; ++u) {
          var h = t[u];
          if (h) {
            var c = h.shouldBePainted(n, i, !0, !0),
              p = h.__isRendered && (h.__dirty & Vy || !c) ? h.getPrevPaintRect() : null;
            p && r(p);
            var f = c && (h.__dirty & Vy || !h.__isRendered) ? h.getPaintRect() : null;
            f && r(f)
          }
        }
        for (var u = this.__prevStartIndex; u < this.__prevEndIndex; ++u) {
          var h = e[u],
            c = h.shouldBePainted(n, i, !0, !0);
          if (h && (!c || !h.__zr) && h.__isRendered) {
            var p = h.getPrevPaintRect();
            p && r(p)
          }
        }
        var d;
        do {
          d = !1;
          for (var u = 0; u < o.length;)
            if (o[u].isZero()) o.splice(u, 1);
            else {
              for (var g = u + 1; g < o.length;) o[u].intersect(o[g]) ? (d = !0, o[u].union(o[g]), o.splice(g, 1)) : g++;
              u++
            }
        } while (d);
        return this._paintRects = o, o
      }, n.prototype.debugGetPaintRects = function () {
        return (this._paintRects || []).slice()
      }, n.prototype.resize = function (t, e) {
        var n = this.dpr,
          i = this.dom,
          r = i.style,
          o = this.domBack;
        r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, o && (o.width = t * n, o.height = e * n, 1 !== n && this.ctxBack.scale(n, n))
      }, n.prototype.clear = function (t, e, n) {
        function i(t, n, i, r) {
          if (o.clearRect(t, n, i, r), e && "transparent" !== e) {
            var a = void 0;
            O(e) ? (a = e.__canvasGradient || hc(o, e, {
              x: 0,
              y: 0,
              width: i,
              height: r
            }), e.__canvasGradient = a) : R(e) && (a = wc(o, e, {
              dirty: function () {
                c.setUnpainted(), c.__painter.refresh()
              }
            })), o.save(), o.fillStyle = a || e, o.fillRect(t, n, i, r), o.restore()
          }
          l && (o.save(), o.globalAlpha = u, o.drawImage(p, t, n, i, r), o.restore())
        }
        var r = this.dom,
          o = this.ctx,
          a = r.width,
          s = r.height;
        e = e || this.clearColor;
        var l = this.motionBlur && !t,
          u = this.lastFrameAlpha,
          h = this.dpr,
          c = this;
        l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(r, 0, 0, a / h, s / h));
        var p = this.domBack;
        !n || l ? i(0, 0, a, s) : n.length && v(n, function (t) {
          i(t.x * h, t.y * h, t.width * h, t.height * h)
        })
      }, n
    }(Sy),
    Sk = 1e5,
    Mk = 314159,
    Tk = .01,
    Ck = .001,
    Ik = function () {
      function t(t, e, n) {
        this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
        var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
        this._opts = n = h({}, n || {}), this.dpr = n.devicePixelRatio || Em, this._singleCanvas = i, this.root = t;
        var r = t.style;
        r && (Z(t), t.innerHTML = ""), this.storage = e;
        var o = this._zlevelList;
        this._prevDisplayList = [];
        var a = this._layers;
        if (i) {
          var s = t,
            l = s.width,
            u = s.height;
          null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, s.width = l * this.dpr, s.height = u * this.dpr, this._width = l, this._height = u;
          var c = new bk(s, this, this.dpr);
          c.__builtin__ = !0, c.initContext(), a[Mk] = c, c.zlevel = Mk, o.push(Mk), this._domRoot = t
        } else {
          this._width = fc(t, 0, n), this._height = fc(t, 1, n);
          var p = this._domRoot = Bd(this._width, this._height);
          t.appendChild(p)
        }
      }
      return t.prototype.getType = function () {
        return "canvas"
      }, t.prototype.isSingleCanvas = function () {
        return this._singleCanvas
      }, t.prototype.getViewportRoot = function () {
        return this._domRoot
      }, t.prototype.getViewportRootOffset = function () {
        var t = this.getViewportRoot();
        return t ? {
          offsetLeft: t.offsetLeft || 0,
          offsetTop: t.offsetTop || 0
        } : void 0
      }, t.prototype.refresh = function (t) {
        var e = this.storage.getDisplayList(!0),
          n = this._prevDisplayList,
          i = this._zlevelList;
        this._redrawId = Math.random(), this._paintList(e, n, t, this._redrawId);
        for (var r = 0; r < i.length; r++) {
          var o = i[r],
            a = this._layers[o];
          if (!a.__builtin__ && a.refresh) {
            var s = 0 === r ? this._backgroundColor : null;
            a.refresh(s)
          }
        }
        return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
      }, t.prototype.refreshHover = function () {
        this._paintHoverList(this.storage.getDisplayList(!1))
      }, t.prototype._paintHoverList = function (t) {
        var e = t.length,
          n = this._hoverlayer;
        if (n && n.clear(), e) {
          for (var i, r = {
              inHover: !0,
              viewWidth: this._width,
              viewHeight: this._height
            }, o = 0; e > o; o++) {
            var a = t[o];
            a.__inHover && (n || (n = this._hoverlayer = this.getLayer(Sk)), i || (i = n.ctx, i.save()), Bc(i, a, r, o === e - 1))
          }
          i && i.restore()
        }
      }, t.prototype.getHoverLayer = function () {
        return this.getLayer(Sk)
      }, t.prototype.paintOne = function (t, e) {
        Rc(t, e)
      }, t.prototype._paintList = function (t, e, n, i) {
        if (this._redrawId === i) {
          n = n || !1, this._updateLayerStatus(t);
          var r = this._doPaintList(t, e, n),
            o = r.finished,
            a = r.needsRefreshHover;
          if (this._needsManuallyCompositing && this._compositeManually(), a && this._paintHoverList(t), o) this.eachLayer(function (t) {
            t.afterBrush && t.afterBrush()
          });
          else {
            var s = this;
            Yy(function () {
              s._paintList(t, e, n, i)
            })
          }
        }
      }, t.prototype._compositeManually = function () {
        var t = this.getLayer(Mk).ctx,
          e = this._domRoot.width,
          n = this._domRoot.height;
        t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
          i.virtual && t.drawImage(i.dom, 0, 0, e, n)
        })
      }, t.prototype._doPaintList = function (t, e, n) {
        for (var i = this, r = [], o = this._opts.useDirtyRect, a = 0; a < this._zlevelList.length; a++) {
          var s = this._zlevelList[a],
            l = this._layers[s];
          l.__builtin__ && l !== this._hoverlayer && (l.__dirty || n) && r.push(l)
        }
        for (var u = !0, h = !1, c = function (a) {
            var s = r[a],
              l = s.ctx,
              c = o && s.createRepaintRects(t, e, p._width, p._height),
              f = n ? s.__startIndex : s.__drawIndex,
              d = !n && s.incremental && Date.now,
              g = d && Date.now(),
              v = s.zlevel === p._zlevelList[0] ? p._backgroundColor : null;
            if (s.__startIndex === s.__endIndex) s.clear(!1, v, c);
            else if (f === s.__startIndex) {
              var y = t[f];
              y.incremental && y.notClear && !n || s.clear(!1, v, c)
            } - 1 === f && (console.error("For some unknown reason. drawIndex is -1"), f = s.__startIndex);
            var m, _ = function (e) {
              var n = {
                inHover: !1,
                allClipped: !1,
                prevEl: null,
                viewWidth: i._width,
                viewHeight: i._height
              };
              for (m = f; m < s.__endIndex; m++) {
                var r = t[m];
                if (r.__inHover && (h = !0), i._doPaintEl(r, s, o, e, n, m === s.__endIndex - 1), d) {
                  var a = Date.now() - g;
                  if (a > 15) break
                }
              }
              n.prevElClipPaths && l.restore()
            };
            if (c)
              if (0 === c.length) m = s.__endIndex;
              else
                for (var x = p.dpr, w = 0; w < c.length; ++w) {
                  var b = c[w];
                  l.save(), l.beginPath(), l.rect(b.x * x, b.y * x, b.width * x, b.height * x), l.clip(), _(b), l.restore()
                } else l.save(), _(), l.restore();
            s.__drawIndex = m, s.__drawIndex < s.__endIndex && (u = !1)
          }, p = this, f = 0; f < r.length; f++) c(f);
        return Gv.wxa && v(this._layers, function (t) {
          t && t.ctx && t.ctx.draw && t.ctx.draw()
        }), {
          finished: u,
          needsRefreshHover: h
        }
      }, t.prototype._doPaintEl = function (t, e, n, i, r, o) {
        var a = e.ctx;
        if (n) {
          var s = t.getPaintRect();
          (!i || s && s.intersect(i)) && (Bc(a, t, r, o), t.setPrevPaintRect(s))
        } else Bc(a, t, r, o)
      }, t.prototype.getLayer = function (t, e) {
        this._singleCanvas && !this._needsManuallyCompositing && (t = Mk);
        var n = this._layers[t];
        return n || (n = new bk("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] ? l(n, this._layerConfig[t], !0) : this._layerConfig[t - Tk] && l(n, this._layerConfig[t - Tk], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
      }, t.prototype.insertLayer = function (t, e) {
        var n = this._layers,
          i = this._zlevelList,
          r = i.length,
          o = this._domRoot,
          a = null,
          s = -1;
        if (!n[t] && Rd(e)) {
          if (r > 0 && t > i[0]) {
            for (s = 0; r - 1 > s && !(i[s] < t && i[s + 1] > t); s++);
            a = n[i[s]]
          }
          if (i.splice(s + 1, 0, t), n[t] = e, !e.virtual)
            if (a) {
              var l = a.dom;
              l.nextSibling ? o.insertBefore(e.dom, l.nextSibling) : o.appendChild(e.dom)
            } else o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
          e.__painter = this
        }
      }, t.prototype.eachLayer = function (t, e) {
        for (var n = this._zlevelList, i = 0; i < n.length; i++) {
          var r = n[i];
          t.call(e, this._layers[r], r)
        }
      }, t.prototype.eachBuiltinLayer = function (t, e) {
        for (var n = this._zlevelList, i = 0; i < n.length; i++) {
          var r = n[i],
            o = this._layers[r];
          o.__builtin__ && t.call(e, o, r)
        }
      }, t.prototype.eachOtherLayer = function (t, e) {
        for (var n = this._zlevelList, i = 0; i < n.length; i++) {
          var r = n[i],
            o = this._layers[r];
          o.__builtin__ || t.call(e, o, r)
        }
      }, t.prototype.getLayers = function () {
        return this._layers
      }, t.prototype._updateLayerStatus = function (t) {
        function e(t) {
          s && (s.__endIndex !== t && (s.__dirty = !0), s.__endIndex = t)
        }
        if (this.eachBuiltinLayer(function (t) {
            t.__dirty = t.__used = !1
          }), this._singleCanvas)
          for (var n = 1; n < t.length; n++) {
            var i = t[n];
            if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
              this._needsManuallyCompositing = !0;
              break
            }
          }
        var r, o, s = null,
          l = 0;
        for (o = 0; o < t.length; o++) {
          var i = t[o],
            u = i.zlevel,
            h = void 0;
          r !== u && (r = u, l = 0), i.incremental ? (h = this.getLayer(u + Ck, this._needsManuallyCompositing), h.incremental = !0, l = 1) : h = this.getLayer(u + (l > 0 ? Tk : 0), this._needsManuallyCompositing), h.__builtin__ || a("ZLevel " + u + " has been used by unkown layer " + h.id), h !== s && (h.__used = !0, h.__startIndex !== o && (h.__dirty = !0), h.__startIndex = o, h.__drawIndex = h.incremental ? -1 : o, e(o), s = h), i.__dirty & Vy && !i.__inHover && (h.__dirty = !0, h.incremental && h.__drawIndex < 0 && (h.__drawIndex = o))
        }
        e(o), this.eachBuiltinLayer(function (t) {
          !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
        })
      }, t.prototype.clear = function () {
        return this.eachBuiltinLayer(this._clearLayer), this
      }, t.prototype._clearLayer = function (t) {
        t.clear()
      }, t.prototype.setBackgroundColor = function (t) {
        this._backgroundColor = t, v(this._layers, function (t) {
          t.setUnpainted()
        })
      }, t.prototype.configLayer = function (t, e) {
        if (e) {
          var n = this._layerConfig;
          n[t] ? l(n[t], e, !0) : n[t] = e;
          for (var i = 0; i < this._zlevelList.length; i++) {
            var r = this._zlevelList[i];
            if (r === t || r === t + Tk) {
              var o = this._layers[r];
              l(o, n[t], !0)
            }
          }
        }
      }, t.prototype.delLayer = function (t) {
        var e = this._layers,
          n = this._zlevelList,
          i = e[t];
        i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(p(n, t), 1))
      }, t.prototype.resize = function (t, e) {
        if (this._domRoot.style) {
          var n = this._domRoot;
          n.style.display = "none";
          var i = this._opts,
            r = this.root;
          if (null != t && (i.width = t), null != e && (i.height = e), t = fc(r, 0, i), e = fc(r, 1, i), n.style.display = "", this._width !== t || e !== this._height) {
            n.style.width = t + "px", n.style.height = e + "px";
            for (var o in this._layers) this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
            this.refresh(!0)
          }
          this._width = t, this._height = e
        } else {
          if (null == t || null == e) return;
          this._width = t, this._height = e, this.getLayer(Mk).resize(t, e)
        }
        return this
      }, t.prototype.clearLayer = function (t) {
        var e = this._layers[t];
        e && e.clear()
      }, t.prototype.dispose = function () {
        this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
      }, t.prototype.getRenderedCanvas = function (t) {
        if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Mk].dom;
        var e = new bk("image", this, t.pixelRatio || this.dpr);
        e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
        var n = e.ctx;
        if (t.pixelRatio <= this.dpr) {
          this.refresh();
          var i = e.dom.width,
            r = e.dom.height;
          this.eachLayer(function (t) {
            t.__builtin__ ? n.drawImage(t.dom, 0, 0, i, r) : t.renderToCanvas && (n.save(), t.renderToCanvas(n), n.restore())
          })
        } else
          for (var o = {
              inHover: !1,
              viewWidth: this._width,
              viewHeight: this._height
            }, a = this.storage.getDisplayList(!0), s = 0, l = a.length; l > s; s++) {
            var u = a[s];
            Bc(n, u, o, s === l - 1)
          }
        return e.dom
      }, t.prototype.getWidth = function () {
        return this._width
      }, t.prototype.getHeight = function () {
        return this._height
      }, t
    }(),
    kk = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = "dataset", e
      }
      return e(n, t), n.prototype.init = function (e, n, i) {
        t.prototype.init.call(this, e, n, i), this._sourceManager = new TM(this), nh(this)
      }, n.prototype.mergeOption = function (e, n) {
        t.prototype.mergeOption.call(this, e, n), nh(this)
      }, n.prototype.optionUpdated = function () {
        this._sourceManager.dirty()
      }, n.prototype.getSourceManager = function () {
        return this._sourceManager
      }, n.type = "dataset", n.defaultOption = {
        seriesLayoutBy: kS
      }, n
    }(gS),
    Dk = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = "dataset", e
      }
      return e(n, t), n.type = "dataset", n
    }(OM);
  zf([zd, Ed]), zf(Ld);
  var Ak = function () {
      function t() {
        this.angle = 0, this.width = 10, this.r = 10, this.x = 0, this.y = 0
      }
      return t
    }(),
    Pk = function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return n.type = "pointer", n
      }
      return e(n, t), n.prototype.getDefaultShape = function () {
        return new Ak
      }, n.prototype.buildPath = function (t, e) {
        var n = Math.cos,
          i = Math.sin,
          r = e.r,
          o = e.width,
          a = e.angle,
          s = e.x - n(a) * o * (o >= r / 3 ? 1 : 2),
          l = e.y - i(a) * o * (o >= r / 3 ? 1 : 2);
        a = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + n(a) * o, e.y + i(a) * o), t.lineTo(e.x + n(e.angle) * r, e.y + i(e.angle) * r), t.lineTo(e.x - n(a) * o, e.y - i(a) * o), t.lineTo(s, l)
      }, n
    }(Rx),
    Lk = function () {
      function t() {
        this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0
      }
      return t
    }(),
    Ok = function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return n.type = "sausage", n
      }
      return e(n, t), n.prototype.getDefaultShape = function () {
        return new Lk
      }, n.prototype.buildPath = function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r0 || 0, 0),
          o = Math.max(e.r, 0),
          a = .5 * (o - r),
          s = r + a,
          l = e.startAngle,
          u = e.endAngle,
          h = e.clockwise,
          c = 2 * Math.PI,
          p = h ? c > u - l : c > l - u;
        p || (l = u - (h ? c : -c));
        var f = Math.cos(l),
          d = Math.sin(l),
          g = Math.cos(u),
          v = Math.sin(u);
        p ? (t.moveTo(f * r + n, d * r + i), t.arc(f * s + n, d * s + i, a, -Math.PI + l, l, !h)) : t.moveTo(f * o + n, d * o + i), t.arc(n, i, o, l, u, !h), t.arc(g * s + n, v * s + i, a, u - 2 * Math.PI, u - Math.PI, !h), 0 !== r && t.arc(n, i, r, u, l, h)
      }, n
    }(Rx),
    Rk = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e
      }
      return e(n, t), n.prototype.render = function (t, e, n) {
        this.group.removeAll();
        var i = t.get(["axisLine", "lineStyle", "color"]),
          r = Nd(t, n);
        this._renderMain(t, e, n, i, r), this._data = t.getData()
      }, n.prototype.dispose = function () {}, n.prototype._renderMain = function (t, e, n, i, r) {
        var o = this.group,
          a = t.get("clockwise"),
          s = -t.get("startAngle") / 180 * Math.PI,
          l = -t.get("endAngle") / 180 * Math.PI,
          u = t.getModel("axisLine"),
          h = u.get("roundCap"),
          c = h ? Ok : Xw,
          p = u.get("show"),
          f = u.getModel("lineStyle"),
          d = f.get("width"),
          g = [s, l];
        fo(g, !a), s = g[0], l = g[1];
        for (var v = l - s, y = s, m = 0; p && m < i.length; m++) {
          var _ = Math.min(Math.max(i[m][0], 0), 1);
          l = s + v * _;
          var x = new c({
            shape: {
              startAngle: y,
              endAngle: l,
              cx: r.cx,
              cy: r.cy,
              clockwise: a,
              r0: r.r - d,
              r: r.r
            },
            silent: !0
          });
          x.setStyle({
            fill: i[m][1]
          }), x.setStyle(f.getLineStyle(["color", "width"])), o.add(x), y = l
        }
        var w = function (t) {
          if (0 >= t) return i[0][1];
          var e;
          for (e = 0; e < i.length; e++)
            if (i[e][0] >= t && (0 === e ? 0 : i[e - 1][0]) < t) return i[e][1];
          return i[e - 1][1]
        };
        this._renderTicks(t, e, n, w, r, s, l, a, d), this._renderTitleAndDetail(t, e, n, w, r), this._renderAnchor(t, r), this._renderPointer(t, e, n, w, r, s, l, a, d)
      }, n.prototype._renderTicks = function (t, e, n, i, r, o, a, s, l) {
        for (var u, h, c = this.group, p = r.cx, f = r.cy, d = r.r, g = +t.get("min"), v = +t.get("max"), y = t.getModel("splitLine"), m = t.getModel("axisTick"), _ = t.getModel("axisLabel"), x = t.get("splitNumber"), w = m.get("splitNumber"), b = Hi(y.get("length"), d), S = Hi(m.get("length"), d), M = o, T = (a - o) / x, C = T / w, I = y.getModel("lineStyle").getLineStyle(), k = m.getModel("lineStyle").getLineStyle(), D = y.get("distance"), A = 0; x >= A; A++) {
          if (u = Math.cos(M), h = Math.sin(M), y.get("show")) {
            var P = D ? D + l : l,
              L = new tb({
                shape: {
                  x1: u * (d - P) + p,
                  y1: h * (d - P) + f,
                  x2: u * (d - b - P) + p,
                  y2: h * (d - b - P) + f
                },
                style: I,
                silent: !0
              });
            "auto" === I.stroke && L.setStyle({
              stroke: i(A / x)
            }), c.add(L)
          }
          if (_.get("show")) {
            var P = _.get("distance") + D,
              O = Fd(Vi(A / x * (v - g) + g), _.get("formatter")),
              R = i(A / x);
            c.add(new qx({
              style: Ns(_, {
                text: O,
                x: u * (d - b - P) + p,
                y: h * (d - b - P) + f,
                verticalAlign: -.8 > h ? "top" : h > .8 ? "bottom" : "middle",
                align: -.4 > u ? "left" : u > .4 ? "right" : "center"
              }, {
                inheritColor: R
              }),
              silent: !0
            }))
          }
          if (m.get("show") && A !== x) {
            var P = m.get("distance");
            P = P ? P + l : l;
            for (var B = 0; w >= B; B++) {
              u = Math.cos(M), h = Math.sin(M);
              var z = new tb({
                shape: {
                  x1: u * (d - P) + p,
                  y1: h * (d - P) + f,
                  x2: u * (d - S - P) + p,
                  y2: h * (d - S - P) + f
                },
                silent: !0,
                style: k
              });
              "auto" === k.stroke && z.setStyle({
                stroke: i((A + B / w) / x)
              }), c.add(z), M += C
            }
            M -= C
          } else M += T
        }
      }, n.prototype._renderPointer = function (t, e, n, i, r, o, a, s, l) {
        function u(e, n) {
          var i, o = _.getItemModel(e),
            a = o.getModel("pointer"),
            s = Hi(a.get("width"), r.r),
            l = Hi(a.get("length"), r.r),
            u = t.get(["pointer", "icon"]),
            h = a.get("offsetCenter"),
            c = Hi(h[0], r.r),
            p = Hi(h[1], r.r),
            f = a.get("keepAspect");
          return i = u ? oc(u, c - s / 2, p - l, s, l, null, f) : new Pk({
            shape: {
              angle: -Math.PI / 2,
              width: s,
              r: l,
              x: c,
              y: p
            }
          }), i.rotation = -(n + Math.PI / 2), i.x = r.cx, i.y = r.cy, i
        }

        function c(t, e) {
          var n = y.get("roundCap"),
            i = n ? Ok : Xw,
            a = y.get("overlap"),
            u = a ? y.get("width") : l / _.count(),
            h = a ? r.r - u : r.r - (t + 1) * u,
            c = a ? r.r : r.r - t * u,
            p = new i({
              shape: {
                startAngle: o,
                endAngle: e,
                cx: r.cx,
                cy: r.cy,
                clockwise: s,
                r0: h,
                r: c
              }
            });
          return a && (p.z2 = b - _.get(x, t) % b), p
        }
        var p = this.group,
          f = this._data,
          d = this._progressEls,
          g = [],
          v = t.get(["pointer", "show"]),
          y = t.getModel("progress"),
          m = y.get("show"),
          _ = t.getData(),
          x = _.mapDimension("value"),
          w = +t.get("min"),
          b = +t.get("max"),
          S = [w, b],
          M = [o, a];
        (m || v) && (_.diff(f).add(function (e) {
          var n = _.get(x, e);
          if (v) {
            var i = u(e, o);
            rs(i, {
              rotation: -((isNaN(+n) ? M[0] : Fi(n, S, M, !0)) + Math.PI / 2)
            }, t), p.add(i), _.setItemGraphicEl(e, i)
          }
          if (m) {
            var r = c(e, o),
              a = y.get("clip");
            rs(r, {
              shape: {
                endAngle: Fi(n, S, M, a)
              }
            }, t), p.add(r), Qx(t.seriesIndex, _.dataType, e, r), g[e] = r
          }
        }).update(function (e, n) {
          var i = _.get(x, e);
          if (v) {
            var r = f.getItemGraphicEl(n),
              a = r ? r.rotation : o,
              s = u(e, a);
            s.rotation = a, is(s, {
              rotation: -((isNaN(+i) ? M[0] : Fi(i, S, M, !0)) + Math.PI / 2)
            }, t), p.add(s), _.setItemGraphicEl(e, s)
          }
          if (m) {
            var l = d[n],
              h = l ? l.shape.endAngle : o,
              w = c(e, h),
              b = y.get("clip");
            is(w, {
              shape: {
                endAngle: Fi(i, S, M, b)
              }
            }, t), p.add(w), Qx(t.seriesIndex, _.dataType, e, w), g[e] = w
          }
        }).execute(), _.each(function (t) {
          var e = _.getItemModel(t),
            n = e.getModel("emphasis"),
            r = n.get("focus"),
            o = n.get("blurScope"),
            a = n.get("disabled");
          if (v) {
            var s = _.getItemGraphicEl(t),
              l = _.getItemVisual(t, "style"),
              u = l.fill;
            if (s instanceof Fx) {
              var c = s.style;
              s.useStyle(h({
                image: c.image,
                x: c.x,
                y: c.y,
                width: c.width,
                height: c.height
              }, l))
            } else s.useStyle(l), "pointer" !== s.type && s.setColor(u);
            s.setStyle(e.getModel(["pointer", "itemStyle"]).getItemStyle()), "auto" === s.style.fill && s.setStyle("fill", i(Fi(_.get(x, t), S, [0, 1], !0))), s.z2EmphasisLift = 0, Aa(s, e), ka(s, r, o, a)
          }
          if (m) {
            var p = g[t];
            p.useStyle(_.getItemVisual(t, "style")), p.setStyle(e.getModel(["progress", "itemStyle"]).getItemStyle()), p.z2EmphasisLift = 0, Aa(p, e), ka(p, r, o, a)
          }
        }), this._progressEls = g)
      }, n.prototype._renderAnchor = function (t, e) {
        var n = t.getModel("anchor"),
          i = n.get("show");
        if (i) {
          var r = n.get("size"),
            o = n.get("icon"),
            a = n.get("offsetCenter"),
            s = n.get("keepAspect"),
            l = oc(o, e.cx - r / 2 + Hi(a[0], e.r), e.cy - r / 2 + Hi(a[1], e.r), r, r, null, s);
          l.z2 = n.get("showAbove") ? 1 : 0, l.setStyle(n.getModel("itemStyle").getItemStyle()), this.group.add(l)
        }
      }, n.prototype._renderTitleAndDetail = function (t, e, n, i, r) {
        var o = this,
          a = t.getData(),
          s = a.mapDimension("value"),
          l = +t.get("min"),
          u = +t.get("max"),
          h = new d_,
          c = [],
          p = [],
          f = t.isAnimationEnabled(),
          d = t.get(["pointer", "showAbove"]);
        a.diff(this._data).add(function (t) {
          c[t] = new qx({
            silent: !0
          }), p[t] = new qx({
            silent: !0
          })
        }).update(function (t, e) {
          c[t] = o._titleEls[e], p[t] = o._detailEls[e]
        }).execute(), a.each(function (e) {
          var n = a.getItemModel(e),
            o = a.get(s, e),
            g = new d_,
            v = i(Fi(o, [l, u], [0, 1], !0)),
            y = n.getModel("title");
          if (y.get("show")) {
            var m = y.get("offsetCenter"),
              _ = r.cx + Hi(m[0], r.r),
              x = r.cy + Hi(m[1], r.r),
              w = c[e];
            w.attr({
              z2: d ? 0 : 2,
              style: Ns(y, {
                x: _,
                y: x,
                text: a.getName(e),
                align: "center",
                verticalAlign: "middle"
              }, {
                inheritColor: v
              })
            }), g.add(w)
          }
          var b = n.getModel("detail");
          if (b.get("show")) {
            var S = b.get("offsetCenter"),
              M = r.cx + Hi(S[0], r.r),
              T = r.cy + Hi(S[1], r.r),
              C = Hi(b.get("width"), r.r),
              I = Hi(b.get("height"), r.r),
              k = t.get(["progress", "show"]) ? a.getItemVisual(e, "style").fill : v,
              w = p[e],
              D = b.get("formatter");
            w.attr({
              z2: d ? 0 : 2,
              style: Ns(b, {
                x: M,
                y: T,
                text: Fd(o, D),
                width: isNaN(C) ? null : C,
                height: isNaN(I) ? null : I,
                align: "center",
                verticalAlign: "middle"
              }, {
                inheritColor: k
              })
            }), Us(w, {
              normal: b
            }, o, function (t) {
              return Fd(t, D)
            }), f && Xs(w, e, a, t, {
              getFormattedLabel: function (t, e, n, i, r, a) {
                return Fd(a ? a.interpolatedValue : o, D)
              }
            }), g.add(w)
          }
          h.add(g)
        }), this.group.add(h), this._titleEls = c, this._detailEls = p
      }, n.type = "gauge", n
    }(zM),
    Bk = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e.visualStyleAccessPath = "itemStyle", e
      }
      return e(n, t), n.prototype.getInitialData = function () {
        return Hd(this, ["value"])
      }, n.type = "series.gauge", n.defaultOption = {
        z: 2,
        colorBy: "data",
        center: ["50%", "50%"],
        legendHoverLink: !0,
        radius: "75%",
        startAngle: 225,
        endAngle: -45,
        clockwise: !0,
        min: 0,
        max: 100,
        splitNumber: 10,
        axisLine: {
          show: !0,
          roundCap: !1,
          lineStyle: {
            color: [
              [1, "#E6EBF8"]
            ],
            width: 10
          }
        },
        progress: {
          show: !1,
          overlap: !0,
          width: 10,
          roundCap: !1,
          clip: !0
        },
        splitLine: {
          show: !0,
          length: 10,
          distance: 10,
          lineStyle: {
            color: "#63677A",
            width: 3,
            type: "solid"
          }
        },
        axisTick: {
          show: !0,
          splitNumber: 5,
          length: 6,
          distance: 10,
          lineStyle: {
            color: "#63677A",
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          show: !0,
          distance: 15,
          color: "#464646",
          fontSize: 12
        },
        pointer: {
          icon: null,
          offsetCenter: [0, 0],
          show: !0,
          showAbove: !0,
          length: "60%",
          width: 6,
          keepAspect: !1
        },
        anchor: {
          show: !1,
          showAbove: !1,
          size: 6,
          icon: "circle",
          offsetCenter: [0, 0],
          keepAspect: !1,
          itemStyle: {
            color: "#fff",
            borderWidth: 0,
            borderColor: "#5470c6"
          }
        },
        title: {
          show: !0,
          offsetCenter: [0, "20%"],
          color: "#464646",
          fontSize: 16,
          valueAnimation: !1
        },
        detail: {
          show: !0,
          backgroundColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          borderColor: "#ccc",
          width: 100,
          height: null,
          padding: [5, 10],
          offsetCenter: [0, "40%"],
          color: "#464646",
          fontSize: 30,
          fontWeight: "bold",
          lineHeight: 30,
          valueAnimation: !1
        }
      }, n
    }(LM);
  zf(Vd);
  var zk = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this
      }
      return e(n, t), n.type = "grid", n.dependencies = ["xAxis", "yAxis"], n.layoutMode = "box", n.defaultOption = {
        show: !1,
        z: 0,
        left: "10%",
        top: 60,
        right: "10%",
        bottom: 70,
        containLabel: !1,
        backgroundColor: "rgba(0,0,0,0)",
        borderWidth: 1,
        borderColor: "#ccc"
      }, n
    }(gS),
    Ek = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this
      }
      return e(n, t), n.prototype.getCoordSysModel = function () {
        return this.getReferringComponents("grid", k_).models[0]
      }, n.type = "cartesian2dAxis", n
    }(gS);
  d(Ek, FI);
  var Nk = {
      show: !0,
      z: 0,
      inverse: !1,
      name: "",
      nameLocation: "end",
      nameRotate: null,
      nameTruncate: {
        maxWidth: null,
        ellipsis: "...",
        placeholder: "."
      },
      nameTextStyle: {},
      nameGap: 15,
      silent: !1,
      triggerEvent: !1,
      tooltip: {
        show: !1
      },
      axisPointer: {},
      axisLine: {
        show: !0,
        onZero: !0,
        onZeroAxisIndex: null,
        lineStyle: {
          color: "#6E7079",
          width: 1,
          type: "solid"
        },
        symbol: ["none", "none"],
        symbolSize: [10, 15]
      },
      axisTick: {
        show: !0,
        inside: !1,
        length: 5,
        lineStyle: {
          width: 1
        }
      },
      axisLabel: {
        show: !0,
        inside: !1,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12
      },
      splitLine: {
        show: !0,
        lineStyle: {
          color: ["#E0E6F1"],
          width: 1,
          type: "solid"
        }
      },
      splitArea: {
        show: !1,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    Fk = l({
      boundaryGap: !0,
      deduplication: null,
      splitLine: {
        show: !1
      },
      axisTick: {
        alignWithLabel: !1,
        interval: "auto"
      },
      axisLabel: {
        interval: "auto"
      }
    }, Nk),
    Hk = l({
      boundaryGap: [0, 0],
      axisLine: {
        show: "auto"
      },
      axisTick: {
        show: "auto"
      },
      splitNumber: 5,
      minorTick: {
        show: !1,
        splitNumber: 5,
        length: 3,
        lineStyle: {}
      },
      minorSplitLine: {
        show: !1,
        lineStyle: {
          color: "#F4F7FD",
          width: 1
        }
      }
    }, Nk),
    Vk = l({
      splitNumber: 6,
      axisLabel: {
        showMinLabel: !1,
        showMaxLabel: !1,
        rich: {
          primary: {
            fontWeight: "bold"
          }
        }
      },
      splitLine: {
        show: !1
      }
    }, Hk),
    Wk = c({
      logBase: 10
    }, Hk),
    Gk = {
      category: Fk,
      value: Hk,
      time: Vk,
      log: Wk
    },
    Uk = {
      value: 1,
      category: 1,
      time: 1,
      log: 1
    },
    Xk = function () {
      function t(t) {
        this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || ""
      }
      return t.prototype.getAxis = function (t) {
        return this._axes[t]
      }, t.prototype.getAxes = function () {
        return y(this._dimList, function (t) {
          return this._axes[t]
        }, this)
      }, t.prototype.getAxesByScale = function (t) {
        return t = t.toLowerCase(), _(this.getAxes(), function (e) {
          return e.scale.type === t
        })
      }, t.prototype.addAxis = function (t) {
        var e = t.dim;
        this._axes[e] = t, this._dimList.push(e)
      }, t
    }(),
    Yk = ["x", "y"],
    qk = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = "cartesian2d", e.dimensions = Yk, e
      }
      return e(n, t), n.prototype.calcAffineTransform = function () {
        this._transform = this._invTransform = null;
        var t = this.getAxis("x").scale,
          e = this.getAxis("y").scale;
        if (Ud(t) && Ud(e)) {
          var n = t.getExtent(),
            i = e.getExtent(),
            r = this.dataToPoint([n[0], i[0]]),
            o = this.dataToPoint([n[1], i[1]]),
            a = n[1] - n[0],
            s = i[1] - i[0];
          if (a && s) {
            var l = (o[0] - r[0]) / a,
              u = (o[1] - r[1]) / s,
              h = r[0] - n[0] * l,
              c = r[1] - i[0] * u,
              p = this._transform = [l, 0, 0, u, h, c];
            this._invTransform = pi([], p)
          }
        }
      }, n.prototype.getBaseAxis = function () {
        return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
      }, n.prototype.containPoint = function (t) {
        var e = this.getAxis("x"),
          n = this.getAxis("y");
        return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
      }, n.prototype.containData = function (t) {
        return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
      }, n.prototype.containZone = function (t, e) {
        var n = this.dataToPoint(t),
          i = this.dataToPoint(e),
          r = this.getArea(),
          o = new a_(n[0], n[1], i[0] - n[0], i[1] - n[1]);
        return r.intersect(o)
      }, n.prototype.dataToPoint = function (t, e, n) {
        n = n || [];
        var i = t[0],
          r = t[1];
        if (this._transform && null != i && isFinite(i) && null != r && isFinite(r)) return ve(n, t, this._transform);
        var o = this.getAxis("x"),
          a = this.getAxis("y");
        return n[0] = o.toGlobalCoord(o.dataToCoord(i, e)), n[1] = a.toGlobalCoord(a.dataToCoord(r, e)), n
      }, n.prototype.clampData = function (t, e) {
        var n = this.getAxis("x").scale,
          i = this.getAxis("y").scale,
          r = n.getExtent(),
          o = i.getExtent(),
          a = n.parse(t[0]),
          s = i.parse(t[1]);
        return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), a), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(o[0], o[1]), s), Math.max(o[0], o[1])), e
      }, n.prototype.pointToData = function (t, e) {
        var n = [];
        if (this._invTransform) return ve(n, t, this._invTransform);
        var i = this.getAxis("x"),
          r = this.getAxis("y");
        return n[0] = i.coordToData(i.toLocalCoord(t[0]), e), n[1] = r.coordToData(r.toLocalCoord(t[1]), e), n
      }, n.prototype.getOtherAxis = function (t) {
        return this.getAxis("x" === t.dim ? "y" : "x")
      }, n.prototype.getArea = function () {
        var t = this.getAxis("x").getGlobalExtent(),
          e = this.getAxis("y").getGlobalExtent(),
          n = Math.min(t[0], t[1]),
          i = Math.min(e[0], e[1]),
          r = Math.max(t[0], t[1]) - n,
          o = Math.max(e[0], e[1]) - i;
        return new a_(n, i, r, o)
      }, n
    }(Xk),
    jk = function (t) {
      function n(e, n, i, r, o) {
        var a = t.call(this, e, n, i) || this;
        return a.index = 0, a.type = r || "value", a.position = o || "bottom", a
      }
      return e(n, t), n.prototype.isHorizontal = function () {
        var t = this.position;
        return "top" === t || "bottom" === t
      }, n.prototype.getGlobalExtent = function (t) {
        var e = this.getExtent();
        return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
      }, n.prototype.pointToData = function (t, e) {
        return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
      }, n.prototype.setCategorySortInfo = function (t) {
        return "category" !== this.type ? !1 : (this.model.option.categorySortInfo = t, void this.scale.setSortInfo(t))
      }, n
    }(ik),
    Zk = Math.log,
    Kk = function () {
      function t(t, e, n) {
        this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Yk, this._initCartesian(t, e, n), this.model = t
      }
      return t.prototype.getRect = function () {
        return this._rect
      }, t.prototype.update = function (t, e) {
        function n(t) {
          var e, n = w(t),
            i = n.length;
          if (i) {
            for (var r = [], o = i - 1; o >= 0; o--) {
              var a = +n[o],
                s = t[a],
                l = s.model,
                u = s.scale;
              Up(u) && l.get("alignTicks") && null == l.get("interval") ? r.push(s) : (bf(u, l), Up(u) && (e = s))
            }
            r.length && (e || (e = r.pop(), bf(e.scale, e.model)), v(r, function (t) {
              jd(t.scale, t.model, e.scale)
            }))
          }
        }
        var i = this._axesMap;
        this._updateScale(t, this.model), n(i.x), n(i.y);
        var r = {};
        v(i.x, function (t) {
          Kd(i, "y", t, r)
        }), v(i.y, function (t) {
          Kd(i, "x", t, r)
        }), this.resize(this.model, e)
      }, t.prototype.resize = function (t, e, n) {
        function i() {
          v(s, function (t) {
            var e = t.isHorizontal(),
              n = e ? [0, a.width] : [0, a.height],
              i = t.inverse ? 1 : 0;
            t.setExtent(n[i], n[1 - i]), Qd(t, e ? a.x : a.y)
          })
        }
        var r = t.getBoxLayoutParams(),
          o = !n && t.get("containLabel"),
          a = Rl(r, {
            width: e.getWidth(),
            height: e.getHeight()
          });
        this._rect = a;
        var s = this._axesList;
        i(), o && (v(s, function (t) {
          if (!t.model.get(["axisLabel", "inside"])) {
            var e = If(t);
            if (e) {
              var n = t.isHorizontal() ? "height" : "width",
                i = t.model.get(["axisLabel", "margin"]);
              a[n] -= e[n] + i, "top" === t.position ? a.y += e.height + i : "left" === t.position && (a.x += e.width + i)
            }
          }
        }), i()), v(this._coordsList, function (t) {
          t.calcAffineTransform()
        })
      }, t.prototype.getAxis = function (t, e) {
        var n = this._axesMap[t];
        return null != n ? n[e || 0] : void 0
      }, t.prototype.getAxes = function () {
        return this._axesList.slice()
      }, t.prototype.getCartesian = function (t, e) {
        if (null != t && null != e) {
          var n = "x" + t + "y" + e;
          return this._coordsMap[n]
        }
        D(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var i = 0, r = this._coordsList; i < r.length; i++)
          if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
      }, t.prototype.getCartesians = function () {
        return this._coordsList.slice()
      }, t.prototype.convertToPixel = function (t, e, n) {
        var i = this._findConvertTarget(e);
        return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
      }, t.prototype.convertFromPixel = function (t, e, n) {
        var i = this._findConvertTarget(e);
        return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
      }, t.prototype._findConvertTarget = function (t) {
        var e, n, i = t.seriesModel,
          r = t.xAxisModel || i && i.getReferringComponents("xAxis", k_).models[0],
          o = t.yAxisModel || i && i.getReferringComponents("yAxis", k_).models[0],
          a = t.gridModel,
          s = this._coordsList;
        if (i) e = i.coordinateSystem, p(s, e) < 0 && (e = null);
        else if (r && o) e = this.getCartesian(r.componentIndex, o.componentIndex);
        else if (r) n = this.getAxis("x", r.componentIndex);
        else if (o) n = this.getAxis("y", o.componentIndex);
        else if (a) {
          var l = a.coordinateSystem;
          l === this && (e = this._coordsList[0])
        }
        return {
          cartesian: e,
          axis: n
        }
      }, t.prototype.containPoint = function (t) {
        var e = this._coordsList[0];
        return e ? e.containPoint(t) : void 0
      }, t.prototype._initCartesian = function (t, e) {
        function n(e) {
          return function (n, i) {
            if (Zd(n, t)) {
              var l = n.get("position");
              "x" === e ? "top" !== l && "bottom" !== l && (l = o.bottom ? "top" : "bottom") : "left" !== l && "right" !== l && (l = o.left ? "right" : "left"), o[l] = !0;
              var u = new jk(e, Sf(n), [0, 0], n.get("type"), l),
                h = "category" === u.type;
              u.onBand = h && n.get("boundaryGap"), u.inverse = n.get("inverse"), n.axis = u, u.model = n, u.grid = r, u.index = i, r._axesList.push(u), a[e][i] = u, s[e]++
            }
          }
        }
        var i = this,
          r = this,
          o = {
            left: !1,
            right: !1,
            top: !1,
            bottom: !1
          },
          a = {
            x: {},
            y: {}
          },
          s = {
            x: 0,
            y: 0
          };
        return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), s.x && s.y ? (this._axesMap = a, void v(a.x, function (e, n) {
          v(a.y, function (r, o) {
            var a = "x" + n + "y" + o,
              s = new qk(a);
            s.master = i, s.model = t, i._coordsMap[a] = s, i._coordsList.push(s), s.addAxis(e), s.addAxis(r)
          })
        })) : (this._axesMap = {}, void(this._axesList = []))
      }, t.prototype._updateScale = function (t, e) {
        function n(t, e) {
          v(Pf(t, e.dim), function (n) {
            e.scale.unionExtentFromData(t, n)
          })
        }
        v(this._axesList, function (t) {
          if (t.scale.setExtent(1 / 0, -1 / 0), "category" === t.type) {
            var e = t.model.get("categorySortInfo");
            t.scale.setSortInfo(e)
          }
        }), t.eachSeries(function (t) {
          if (Yd(t)) {
            var i = qd(t),
              r = i.xAxisModel,
              o = i.yAxisModel;
            if (!Zd(r, e) || !Zd(o, e)) return;
            var a = this.getCartesian(r.componentIndex, o.componentIndex),
              s = t.getData(),
              l = a.getAxis("x"),
              u = a.getAxis("y");
            n(s, l), n(s, u)
          }
        }, this)
      }, t.prototype.getTooltipAxes = function (t) {
        var e = [],
          n = [];
        return v(this.getCartesians(), function (i) {
          var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
            o = i.getOtherAxis(r);
          p(e, r) < 0 && e.push(r), p(n, o) < 0 && n.push(o)
        }), {
          baseAxes: e,
          otherAxes: n
        }
      }, t.create = function (e, n) {
        var i = [];
        return e.eachComponent("grid", function (r, o) {
          var a = new t(r, e, n);
          a.name = "grid_" + o, a.resize(r, n, !0), r.coordinateSystem = a, i.push(a)
        }), e.eachSeries(function (t) {
          if (Yd(t)) {
            var e = qd(t),
              n = e.xAxisModel,
              i = e.yAxisModel,
              r = n.getCoordSysModel(),
              o = r.coordinateSystem;
            t.coordinateSystem = o.getCartesian(n.componentIndex, i.componentIndex)
          }
        }), i
      }, t.dimensions = Yk, t
    }(),
    $k = Math.PI,
    Qk = function () {
      function t(t, e) {
        this.group = new d_, this.opt = e, this.axisModel = t, c(e, {
          labelOffset: 0,
          nameDirection: 1,
          tickDirection: 1,
          labelDirection: 1,
          silent: !0,
          handleAutoShown: function () {
            return !0
          }
        });
        var n = new d_({
          x: e.position[0],
          y: e.position[1],
          rotation: e.rotation
        });
        n.updateTransform(), this._transformGroup = n
      }
      return t.prototype.hasBuilder = function (t) {
        return !!Jk[t]
      }, t.prototype.add = function (t) {
        Jk[t](this.opt, this.axisModel, this.group, this._transformGroup)
      }, t.prototype.getGroup = function () {
        return this.group
      }, t.innerTextLayout = function (t, e, n) {
        var i, r, o = ji(e - t);
        return Zi(o) ? (r = n > 0 ? "top" : "bottom", i = "center") : Zi(o - $k) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = o > 0 && $k > o ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
          rotation: o,
          textAlign: i,
          textVerticalAlign: r
        }
      }, t.makeAxisEventDataBase = function (t) {
        var e = {
          componentType: t.mainType,
          componentIndex: t.componentIndex
        };
        return e[t.mainType + "Index"] = t.componentIndex, e
      }, t.isLabelSilent = function (t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
      }, t
    }(),
    Jk = {
      axisLine: function (t, e, n, i) {
        var r = e.get(["axisLine", "show"]);
        if ("auto" === r && t.handleAutoShown && (r = t.handleAutoShown("axisLine")), r) {
          var o = e.axis.getExtent(),
            a = i.transform,
            s = [o[0], 0],
            l = [o[1], 0];
          a && (ve(s, s, a), ve(l, l, a));
          var u = h({
              lineCap: "round"
            }, e.getModel(["axisLine", "lineStyle"]).getLineStyle()),
            c = new tb({
              subPixelOptimize: !0,
              shape: {
                x1: s[0],
                y1: s[1],
                x2: l[0],
                y2: l[1]
              },
              style: u,
              strokeContainThreshold: t.strokeContainThreshold || 5,
              silent: !0,
              z2: 1
            });
          c.anid = "line", n.add(c);
          var p = e.get(["axisLine", "symbol"]);
          if (null != p) {
            var f = e.get(["axisLine", "symbolSize"]);
            C(p) && (p = [p, p]), (C(f) || k(f)) && (f = [f, f]);
            var d = ac(e.get(["axisLine", "symbolOffset"]) || 0, f),
              g = f[0],
              y = f[1];
            v([{
              rotate: t.rotation + Math.PI / 2,
              offset: d[0],
              r: 0
            }, {
              rotate: t.rotation - Math.PI / 2,
              offset: d[1],
              r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1]))
            }], function (e, i) {
              if ("none" !== p[i] && null != p[i]) {
                var r = oc(p[i], -g / 2, -y / 2, g, y, u.stroke, !0),
                  o = e.r + e.offset;
                r.attr({
                  rotation: e.rotate,
                  x: s[0] + o * Math.cos(t.rotation),
                  y: s[1] - o * Math.sin(t.rotation),
                  silent: !0,
                  z2: 11
                }), n.add(r)
              }
            })
          }
        }
      },
      axisTickLabel: function (t, e, n, i) {
        var r = og(n, i, e, t),
          o = sg(n, i, e, t);
        if (tg(e, o, r), ag(n, i, e, t.tickDirection), e.get(["axisLabel", "hideOverlap"])) {
          var a = Md(y(o, function (t) {
            return {
              label: t,
              priority: t.z2,
              defaultAttr: {
                ignore: t.ignore
              }
            }
          }));
          kd(a)
        }
      },
      axisName: function (t, e, n, i) {
        var r = E(t.axisName, e.get("name"));
        if (r) {
          var o, a = e.get("nameLocation"),
            s = t.nameDirection,
            l = e.getModel("nameTextStyle"),
            u = e.get("nameGap") || 0,
            h = e.axis.getExtent(),
            c = h[0] > h[1] ? -1 : 1,
            p = ["start" === a ? h[0] - c * u : "end" === a ? h[1] + c * u : (h[0] + h[1]) / 2, ig(a) ? t.labelOffset + s * u : 0],
            f = e.get("nameRotate");
          null != f && (f = f * $k / 180);
          var d;
          ig(a) ? o = Qk.innerTextLayout(t.rotation, null != f ? f : t.rotation, s) : (o = Jd(t.rotation, a, f || 0, h), d = t.axisNameAvailableWidth, null != d && (d = Math.abs(d / Math.sin(o.rotation)), !isFinite(d) && (d = null)));
          var g = l.getFont(),
            v = e.get("nameTruncate", !0) || {},
            y = v.ellipsis,
            m = E(t.nameTruncateMaxWidth, v.maxWidth, d),
            _ = new qx({
              x: p[0],
              y: p[1],
              rotation: o.rotation,
              silent: Qk.isLabelSilent(e),
              style: Ns(l, {
                text: r,
                font: g,
                overflow: "truncate",
                width: m,
                ellipsis: y,
                fill: l.getTextColor() || e.get(["axisLine", "lineStyle", "color"]),
                align: l.get("align") || o.textAlign,
                verticalAlign: l.get("verticalAlign") || o.textVerticalAlign
              }),
              z2: 1
            });
          if (Ls({
              el: _,
              componentModel: e,
              itemName: r
            }), _.__fullText = r, _.anid = "name", e.get("triggerEvent")) {
            var x = Qk.makeAxisEventDataBase(e);
            x.targetType = "axisName", x.name = r, $x(_).eventData = x
          }
          i.add(_), _.updateTransform(), n.add(_), _.decomposeTransform()
        }
      }
    },
    tD = {},
    eD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e
      }
      return e(n, t), n.prototype.render = function (e, n, i) {
        this.axisPointerClass && dg(e), t.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0)
      }, n.prototype.updateAxisPointer = function (t, e, n) {
        this._doUpdateAxisPointerClass(t, n, !1)
      }, n.prototype.remove = function (t, e) {
        var n = this._axisPointer;
        n && n.remove(e)
      }, n.prototype.dispose = function (e, n) {
        this._disposeAxisPointer(n), t.prototype.dispose.apply(this, arguments)
      }, n.prototype._doUpdateAxisPointerClass = function (t, e, i) {
        var r = n.getAxisPointerClass(this.axisPointerClass);
        if (r) {
          var o = vg(t);
          o ? (this._axisPointer || (this._axisPointer = new r)).render(t, o, e, i) : this._disposeAxisPointer(e)
        }
      }, n.prototype._disposeAxisPointer = function (t) {
        this._axisPointer && this._axisPointer.dispose(t), this._axisPointer = null
      }, n.registerAxisPointerClass = function (t, e) {
        tD[t] = e
      }, n.getAxisPointerClass = function (t) {
        return t && tD[t]
      }, n.type = "axis", n
    }(OM),
    nD = kr(),
    iD = ["axisLine", "axisTickLabel", "axisName"],
    rD = ["splitArea", "splitLine", "minorSplitLine"],
    oD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e.axisPointerClass = "CartesianAxisPointer", e
      }
      return e(n, t), n.prototype.render = function (e, n, i, r) {
        this.group.removeAll();
        var o = this._axisGroup;
        if (this._axisGroup = new d_, this.group.add(this._axisGroup), e.get("show")) {
          var a = e.getCoordSysModel(),
            s = Xd(a, e),
            l = new Qk(e, h({
              handleAutoShown: function () {
                for (var t = a.coordinateSystem.getCartesians(), n = 0; n < t.length; n++)
                  if (Up(t[n].getOtherAxis(e.axis).scale)) return !0;
                return !1
              }
            }, s));
          v(iD, l.add, l), this._axisGroup.add(l.getGroup()), v(rD, function (t) {
            e.get([t, "show"]) && aD[t](this, this._axisGroup, e, a)
          }, this);
          var u = r && "changeAxisOrder" === r.type && r.isInitSort;
          u || Ms(o, this._axisGroup, e), t.prototype.render.call(this, e, n, i, r)
        }
      }, n.prototype.remove = function () {
        xg(this)
      }, n.type = "cartesianAxis", n
    }(eD),
    aD = {
      splitLine: function (t, e, n, i) {
        var r = n.axis;
        if (!r.scale.isBlank()) {
          var o = n.getModel("splitLine"),
            a = o.getModel("lineStyle"),
            s = a.get("color");
          s = M(s) ? s : [s];
          for (var l = i.coordinateSystem.getRect(), u = r.isHorizontal(), h = 0, p = r.getTicksCoords({
              tickModel: o
            }), f = [], d = [], g = a.getLineStyle(), v = 0; v < p.length; v++) {
            var y = r.toGlobalCoord(p[v].coord);
            u ? (f[0] = y, f[1] = l.y, d[0] = y, d[1] = l.y + l.height) : (f[0] = l.x, f[1] = y, d[0] = l.x + l.width, d[1] = y);
            var m = h++ % s.length,
              _ = p[v].tickValue;
            e.add(new tb({
              anid: null != _ ? "line_" + p[v].tickValue : null,
              subPixelOptimize: !0,
              autoBatch: !0,
              shape: {
                x1: f[0],
                y1: f[1],
                x2: d[0],
                y2: d[1]
              },
              style: c({
                stroke: s[m]
              }, g),
              silent: !0
            }))
          }
        }
      },
      minorSplitLine: function (t, e, n, i) {
        var r = n.axis,
          o = n.getModel("minorSplitLine"),
          a = o.getModel("lineStyle"),
          s = i.coordinateSystem.getRect(),
          l = r.isHorizontal(),
          u = r.getMinorTicksCoords();
        if (u.length)
          for (var h = [], c = [], p = a.getLineStyle(), f = 0; f < u.length; f++)
            for (var d = 0; d < u[f].length; d++) {
              var g = r.toGlobalCoord(u[f][d].coord);
              l ? (h[0] = g, h[1] = s.y, c[0] = g, c[1] = s.y + s.height) : (h[0] = s.x, h[1] = g, c[0] = s.x + s.width, c[1] = g), e.add(new tb({
                anid: "minor_line_" + u[f][d].tickValue,
                subPixelOptimize: !0,
                autoBatch: !0,
                shape: {
                  x1: h[0],
                  y1: h[1],
                  x2: c[0],
                  y2: c[1]
                },
                style: p,
                silent: !0
              }))
            }
      },
      splitArea: function (t, e, n, i) {
        _g(t, e, n, i)
      }
    },
    sD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e
      }
      return e(n, t), n.type = "xAxis", n
    }(oD),
    lD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = sD.type, e
      }
      return e(n, t), n.type = "yAxis", n
    }(oD),
    uD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = "grid", e
      }
      return e(n, t), n.prototype.render = function (t) {
        this.group.removeAll(), t.get("show") && this.group.add(new Gx({
          shape: t.coordinateSystem.getRect(),
          style: c({
            fill: t.get("backgroundColor")
          }, t.getItemStyle()),
          silent: !0,
          z2: -1
        }))
      }, n.type = "grid", n
    }(OM),
    hD = {
      offset: 0
    };
  zf(wg);
  var cD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e.layoutMode = {
          type: "box",
          ignoreSize: !0
        }, e
      }
      return e(n, t), n.type = "title", n.defaultOption = {
        z: 6,
        show: !0,
        text: "",
        target: "blank",
        subtext: "",
        subtarget: "blank",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#ccc",
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        textStyle: {
          fontSize: 18,
          fontWeight: "bold",
          color: "#464646"
        },
        subtextStyle: {
          fontSize: 12,
          color: "#6E7079"
        }
      }, n
    }(gS),
    pD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e
      }
      return e(n, t), n.prototype.render = function (t, e, n) {
        if (this.group.removeAll(), t.get("show")) {
          var i = this.group,
            r = t.getModel("textStyle"),
            o = t.getModel("subtextStyle"),
            a = t.get("textAlign"),
            s = N(t.get("textBaseline"), t.get("textVerticalAlign")),
            l = new qx({
              style: Ns(r, {
                text: t.get("text"),
                fill: r.getTextColor()
              }, {
                disableBox: !0
              }),
              z2: 10
            }),
            u = l.getBoundingRect(),
            h = t.get("subtext"),
            c = new qx({
              style: Ns(o, {
                text: h,
                fill: o.getTextColor(),
                y: u.height + t.get("itemGap"),
                verticalAlign: "top"
              }, {
                disableBox: !0
              }),
              z2: 10
            }),
            p = t.get("link"),
            f = t.get("sublink"),
            d = t.get("triggerEvent", !0);
          l.silent = !p && !d, c.silent = !f && !d, p && l.on("click", function () {
            Ll(p, "_" + t.get("target"))
          }), f && c.on("click", function () {
            Ll(f, "_" + t.get("subtarget"))
          }), $x(l).eventData = $x(c).eventData = d ? {
            componentType: "title",
            componentIndex: t.componentIndex
          } : null, i.add(l), h && i.add(c);
          var g = i.getBoundingRect(),
            v = t.getBoxLayoutParams();
          v.width = g.width, v.height = g.height;
          var y = Rl(v, {
            width: n.getWidth(),
            height: n.getHeight()
          }, t.get("padding"));
          a || (a = t.get("left") || t.get("right"), "middle" === a && (a = "center"), "right" === a ? y.x += y.width : "center" === a && (y.x += y.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? y.y += y.height : "middle" === s && (y.y += y.height / 2), s = s || "top"), i.x = y.x, i.y = y.y, i.markRedraw();
          var m = {
            align: a,
            verticalAlign: s
          };
          l.setStyle(m), c.setStyle(m), g = i.getBoundingRect();
          var _ = y.margin,
            x = t.getItemStyle(["color", "opacity"]);
          x.fill = t.get("backgroundColor");
          var w = new Gx({
            shape: {
              x: g.x - _[3],
              y: g.y - _[0],
              width: g.width + _[1] + _[3],
              height: g.height + _[0] + _[2],
              r: t.get("borderRadius")
            },
            style: x,
            subPixelOptimize: !0,
            silent: !0
          });
          i.add(w)
        }
      }, n.type = "title", n
    }(OM);
  zf(bg);
  var fD = function (t, e) {
      return "all" === e ? {
        type: "all",
        title: t.getLocaleModel().get(["legend", "selector", "all"])
      } : "inverse" === e ? {
        type: "inverse",
        title: t.getLocaleModel().get(["legend", "selector", "inverse"])
      } : void 0
    },
    dD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e.layoutMode = {
          type: "box",
          ignoreSize: !0
        }, e
      }
      return e(n, t), n.prototype.init = function (t, e, n) {
        this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}, this._updateSelector(t)
      }, n.prototype.mergeOption = function (e, n) {
        t.prototype.mergeOption.call(this, e, n), this._updateSelector(e)
      }, n.prototype._updateSelector = function (t) {
        var e = t.selector,
          n = this.ecModel;
        e === !0 && (e = t.selector = ["all", "inverse"]), M(e) && v(e, function (t, i) {
          C(t) && (t = {
            type: t
          }), e[i] = l(t, fD(n, t.type))
        })
      }, n.prototype.optionUpdated = function () {
        this._updateData(this.ecModel);
        var t = this._data;
        if (t[0] && "single" === this.get("selectedMode")) {
          for (var e = !1, n = 0; n < t.length; n++) {
            var i = t[n].get("name");
            if (this.isSelected(i)) {
              this.select(i), e = !0;
              break
            }
          }!e && this.select(t[0].get("name"))
        }
      }, n.prototype._updateData = function (t) {
        var e = [],
          n = [];
        t.eachRawSeries(function (i) {
          var r = i.name;
          n.push(r);
          var o;
          if (i.legendVisualProvider) {
            var a = i.legendVisualProvider,
              s = a.getAllNames();
            t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : o = !0
          } else o = !0;
          o && Sr(i) && e.push(i.name)
        }), this._availableNames = n;
        var i = this.get("data") || e,
          r = y(i, function (t) {
            return (C(t) || k(t)) && (t = {
              name: t
            }), new Fb(t, this, this.ecModel)
          }, this);
        this._data = r
      }, n.prototype.getData = function () {
        return this._data
      }, n.prototype.select = function (t) {
        var e = this.option.selected,
          n = this.get("selectedMode");
        if ("single" === n) {
          var i = this._data;
          v(i, function (t) {
            e[t.get("name")] = !1
          })
        }
        e[t] = !0
      }, n.prototype.unSelect = function (t) {
        "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
      }, n.prototype.toggleSelected = function (t) {
        var e = this.option.selected;
        e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
      }, n.prototype.allSelect = function () {
        var t = this._data,
          e = this.option.selected;
        v(t, function (t) {
          e[t.get("name", !0)] = !0
        })
      }, n.prototype.inverseSelect = function () {
        var t = this._data,
          e = this.option.selected;
        v(t, function (t) {
          var n = t.get("name", !0);
          e.hasOwnProperty(n) || (e[n] = !0), e[n] = !e[n]
        })
      }, n.prototype.isSelected = function (t) {
        var e = this.option.selected;
        return !(e.hasOwnProperty(t) && !e[t]) && p(this._availableNames, t) >= 0
      }, n.prototype.getOrient = function () {
        return "vertical" === this.get("orient") ? {
          index: 1,
          name: "vertical"
        } : {
          index: 0,
          name: "horizontal"
        }
      }, n.type = "legend.plain", n.dependencies = ["series"], n.defaultOption = {
        z: 4,
        show: !0,
        orient: "horizontal",
        left: "center",
        top: 0,
        align: "auto",
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#ccc",
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        symbolRotate: "inherit",
        symbolKeepAspect: !0,
        inactiveColor: "#ccc",
        inactiveBorderColor: "#ccc",
        inactiveBorderWidth: "auto",
        itemStyle: {
          color: "inherit",
          opacity: "inherit",
          borderColor: "inherit",
          borderWidth: "auto",
          borderCap: "inherit",
          borderJoin: "inherit",
          borderDashOffset: "inherit",
          borderMiterLimit: "inherit"
        },
        lineStyle: {
          width: "auto",
          color: "inherit",
          inactiveColor: "#ccc",
          inactiveWidth: 2,
          opacity: "inherit",
          type: "inherit",
          cap: "inherit",
          join: "inherit",
          dashOffset: "inherit",
          miterLimit: "inherit"
        },
        textStyle: {
          color: "#333"
        },
        selectedMode: !0,
        selector: !1,
        selectorLabel: {
          show: !0,
          borderRadius: 10,
          padding: [3, 5, 3, 5],
          fontSize: 12,
          fontFamily: "sans-serif",
          color: "#666",
          borderWidth: 1,
          borderColor: "#666"
        },
        emphasis: {
          selectorLabel: {
            show: !0,
            color: "#eee",
            backgroundColor: "#666"
          }
        },
        selectorPosition: "auto",
        selectorItemGap: 7,
        selectorButtonGap: 10,
        tooltip: {
          show: !1
        }
      }, n
    }(gS),
    gD = S,
    vD = v,
    yD = d_,
    mD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e.newlineDisabled = !1, e
      }
      return e(n, t), n.prototype.init = function () {
        this.group.add(this._contentGroup = new yD), this.group.add(this._selectorGroup = new yD), this._isFirstRender = !0
      }, n.prototype.getContentGroup = function () {
        return this._contentGroup
      }, n.prototype.getSelectorGroup = function () {
        return this._selectorGroup
      }, n.prototype.render = function (t, e, n) {
        var i = this._isFirstRender;
        if (this._isFirstRender = !1, this.resetInner(), t.get("show", !0)) {
          var r = t.get("align"),
            o = t.get("orient");
          r && "auto" !== r || (r = "right" === t.get("left") && "vertical" === o ? "right" : "left");
          var a = t.get("selector", !0),
            s = t.get("selectorPosition", !0);
          !a || s && "auto" !== s || (s = "horizontal" === o ? "end" : "start"), this.renderInner(r, t, e, n, a, o, s);
          var l = t.getBoxLayoutParams(),
            u = {
              width: n.getWidth(),
              height: n.getHeight()
            },
            h = t.get("padding"),
            p = Rl(l, u, h),
            f = this.layoutInner(t, r, p, i, a, s),
            d = Rl(c({
              width: f.width,
              height: f.height
            }, l), u, h);
          this.group.x = d.x - f.x, this.group.y = d.y - f.y, this.group.markRedraw(), this.group.add(this._backgroundEl = Sg(f, t))
        }
      }, n.prototype.resetInner = function () {
        this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll()
      }, n.prototype.renderInner = function (t, e, n, i, r, o, a) {
        var s = this.getContentGroup(),
          l = Y(),
          u = e.get("selectedMode"),
          c = [];
        n.eachRawSeries(function (t) {
          !t.get("legendHoverLink") && c.push(t.id)
        }), vD(e.getData(), function (r, o) {
          var a = r.get("name");
          if (!this.newlineDisabled && ("" === a || "\n" === a)) {
            var p = new yD;
            return p.newline = !0, void s.add(p)
          }
          var f = n.getSeriesByName(a)[0];
          if (!l.get(a))
            if (f) {
              var d = f.getData(),
                g = d.getVisual("legendLineStyle") || {},
                v = d.getVisual("legendIcon"),
                y = d.getVisual("style"),
                m = this._createItem(f, a, o, r, e, t, g, y, v, u, i);
              m.on("click", gD(Cg, a, null, i, c)).on("mouseover", gD(kg, f.name, null, i, c)).on("mouseout", gD(Dg, f.name, null, i, c)), l.set(a, !0)
            } else n.eachRawSeries(function (n) {
              if (!l.get(a) && n.legendVisualProvider) {
                var s = n.legendVisualProvider;
                if (!s.containName(a)) return;
                var p = s.indexOfName(a),
                  f = s.getItemVisual(p, "style"),
                  d = s.getItemVisual(p, "legendIcon"),
                  g = Sn(f.fill);
                g && 0 === g[3] && (g[3] = .2, f = h(h({}, f), {
                  fill: Ln(g, "rgba")
                }));
                var v = this._createItem(n, a, o, r, e, t, {}, f, d, u, i);
                v.on("click", gD(Cg, null, a, i, c)).on("mouseover", gD(kg, null, a, i, c)).on("mouseout", gD(Dg, null, a, i, c)), l.set(a, !0)
              }
            }, this)
        }, this), r && this._createSelector(r, e, i, o, a)
      }, n.prototype._createSelector = function (t, e, n) {
        var i = this.getSelectorGroup();
        vD(t, function (t) {
          var r = t.type,
            o = new qx({
              style: {
                x: 0,
                y: 0,
                align: "center",
                verticalAlign: "middle"
              },
              onclick: function () {
                n.dispatchAction({
                  type: "all" === r ? "legendAllSelect" : "legendInverseSelect"
                })
              }
            });
          i.add(o);
          var a = e.getModel("selectorLabel"),
            s = e.getModel(["emphasis", "selectorLabel"]);
          Es(o, {
            normal: a,
            emphasis: s
          }, {
            defaultText: t.title
          }), Ca(o)
        })
      }, n.prototype._createItem = function (t, e, n, i, r, o, a, s, l, u, h) {
        var c = t.visualDrawType,
          p = r.get("itemWidth"),
          f = r.get("itemHeight"),
          d = r.isSelected(e),
          g = i.get("symbolRotate"),
          v = i.get("symbolKeepAspect"),
          y = i.get("icon");
        l = y || l || "roundRect";
        var m = Mg(l, i, a, s, c, d, h),
          _ = new yD,
          x = i.getModel("textStyle");
        if (!T(t.getLegendIcon) || y && "inherit" !== y) {
          var w = "inherit" === y && t.getData().getVisual("symbol") ? "inherit" === g ? t.getData().getVisual("symbolRotate") : g : 0;
          _.add(Tg({
            itemWidth: p,
            itemHeight: f,
            icon: l,
            iconRotate: w,
            itemStyle: m.itemStyle,
            lineStyle: m.lineStyle,
            symbolKeepAspect: v
          }))
        } else _.add(t.getLegendIcon({
          itemWidth: p,
          itemHeight: f,
          icon: l,
          iconRotate: g,
          itemStyle: m.itemStyle,
          lineStyle: m.lineStyle,
          symbolKeepAspect: v
        }));
        var b = "left" === o ? p + 5 : -5,
          S = o,
          M = r.get("formatter"),
          I = e;
        C(M) && M ? I = M.replace("{name}", null != e ? e : "") : T(M) && (I = M(e));
        var k = i.get("inactiveColor");
        _.add(new qx({
          style: Ns(x, {
            text: I,
            x: b,
            y: f / 2,
            fill: d ? x.getTextColor() : k,
            align: S,
            verticalAlign: "middle"
          })
        }));
        var D = new Gx({
            shape: _.getBoundingRect(),
            invisible: !0
          }),
          A = i.getModel("tooltip");
        return A.get("show") && Ls({
          el: D,
          componentModel: r,
          itemName: e,
          itemTooltipOption: A.option
        }), _.add(D), _.eachChild(function (t) {
          t.silent = !0
        }), D.silent = !u, this.getContentGroup().add(_), Ca(_), _.__legendDataIndex = n, _
      }, n.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a = this.getContentGroup(),
          s = this.getSelectorGroup();
        fS(t.get("orient"), a, t.get("itemGap"), n.width, n.height);
        var l = a.getBoundingRect(),
          u = [-l.x, -l.y];
        if (s.markRedraw(), a.markRedraw(), r) {
          fS("horizontal", s, t.get("selectorItemGap", !0));
          var h = s.getBoundingRect(),
            c = [-h.x, -h.y],
            p = t.get("selectorButtonGap", !0),
            f = t.getOrient().index,
            d = 0 === f ? "width" : "height",
            g = 0 === f ? "height" : "width",
            v = 0 === f ? "y" : "x";
          "end" === o ? c[f] += l[d] + p : u[f] += h[d] + p, c[1 - f] += l[g] / 2 - h[g] / 2, s.x = c[0], s.y = c[1], a.x = u[0], a.y = u[1];
          var y = {
            x: 0,
            y: 0
          };
          return y[d] = l[d] + p + h[d], y[g] = Math.max(l[g], h[g]), y[v] = Math.min(0, h[v] + c[1 - f]), y
        }
        return a.x = u[0], a.y = u[1], this.group.getBoundingRect()
      }, n.prototype.remove = function () {
        this.getContentGroup().removeAll(), this._isFirstRender = !0
      }, n.type = "legend.plain", n
    }(OM),
    _D = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e
      }
      return e(n, t), n.prototype.setScrollDataIndex = function (t) {
        this.option.scrollDataIndex = t
      }, n.prototype.init = function (e, n, i) {
        var r = El(e);
        t.prototype.init.call(this, e, n, i), Rg(this, e, r)
      }, n.prototype.mergeOption = function (e, n) {
        t.prototype.mergeOption.call(this, e, n), Rg(this, this.option, e)
      }, n.type = "legend.scroll", n.defaultOption = Zs(dD.defaultOption, {
        scrollDataIndex: 0,
        pageButtonItemGap: 5,
        pageButtonGap: null,
        pageButtonPosition: "end",
        pageFormatter: "{current}/{total}",
        pageIcons: {
          horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
          vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
        },
        pageIconColor: "#2f4554",
        pageIconInactiveColor: "#aaa",
        pageIconSize: 15,
        pageTextStyle: {
          color: "#333"
        },
        animationDurationUpdate: 800
      }), n
    }(dD),
    xD = d_,
    wD = ["width", "height"],
    bD = ["x", "y"],
    SD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e.newlineDisabled = !0, e._currentIndex = 0, e
      }
      return e(n, t), n.prototype.init = function () {
        t.prototype.init.call(this), this.group.add(this._containerGroup = new xD), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new xD)
      }, n.prototype.resetInner = function () {
        t.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
      }, n.prototype.renderInner = function (e, n, i, r, o, a, s) {
        function l(t, e) {
          var i = t + "DataIndex",
            o = Is(n.get("pageIcons", !0)[n.getOrient().name][e], {
              onclick: cy(u._pageGo, u, i, n, r)
            }, {
              x: -p[0] / 2,
              y: -p[1] / 2,
              width: p[0],
              height: p[1]
            });
          o.name = t, h.add(o)
        }
        var u = this;
        t.prototype.renderInner.call(this, e, n, i, r, o, a, s);
        var h = this._controllerGroup,
          c = n.get("pageIconSize", !0),
          p = M(c) ? c : [c, c];
        l("pagePrev", 0);
        var f = n.getModel("pageTextStyle");
        h.add(new qx({
          name: "pageText",
          style: {
            text: "xx/xx",
            fill: f.getTextColor(),
            font: f.getFont(),
            verticalAlign: "middle",
            align: "center"
          },
          silent: !0
        })), l("pageNext", 1)
      }, n.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a = this.getSelectorGroup(),
          l = t.getOrient().index,
          u = wD[l],
          h = bD[l],
          c = wD[1 - l],
          p = bD[1 - l];
        r && fS("horizontal", a, t.get("selectorItemGap", !0));
        var f = t.get("selectorButtonGap", !0),
          d = a.getBoundingRect(),
          g = [-d.x, -d.y],
          v = s(n);
        r && (v[u] = n[u] - d[u] - f);
        var y = this._layoutContentAndController(t, i, v, l, u, c, p, h);
        if (r) {
          if ("end" === o) g[l] += y[u] + f;
          else {
            var m = d[u] + f;
            g[l] -= m, y[h] -= m
          }
          y[u] += d[u] + f, g[1 - l] += y[p] + y[c] / 2 - d[c] / 2, y[c] = Math.max(y[c], d[c]), y[p] = Math.min(y[p], d[p] + g[1 - l]), a.x = g[0], a.y = g[1], a.markRedraw()
        }
        return y
      }, n.prototype._layoutContentAndController = function (t, e, n, i, r, o, a, s) {
        var l = this.getContentGroup(),
          u = this._containerGroup,
          h = this._controllerGroup;
        fS(t.get("orient"), l, t.get("itemGap"), i ? n.width : null, i ? null : n.height), fS("horizontal", h, t.get("pageButtonItemGap", !0));
        var c = l.getBoundingRect(),
          p = h.getBoundingRect(),
          f = this._showController = c[r] > n[r],
          d = [-c.x, -c.y];
        e || (d[i] = l[s]);
        var g = [0, 0],
          v = [-p.x, -p.y],
          y = N(t.get("pageButtonGap", !0), t.get("itemGap", !0));
        if (f) {
          var m = t.get("pageButtonPosition", !0);
          "end" === m ? v[i] += n[r] - p[r] : g[i] += p[r] + y
        }
        v[1 - i] += c[o] / 2 - p[o] / 2, l.setPosition(d), u.setPosition(g), h.setPosition(v);
        var _ = {
          x: 0,
          y: 0
        };
        if (_[r] = f ? n[r] : c[r], _[o] = Math.max(c[o], p[o]), _[a] = Math.min(0, p[a] + v[1 - i]), u.__rectSize = n[r], f) {
          var x = {
            x: 0,
            y: 0
          };
          x[r] = Math.max(n[r] - p[r] - y, 0), x[o] = _[o], u.setClipPath(new Gx({
            shape: x
          })), u.__rectSize = x[r]
        } else h.eachChild(function (t) {
          t.attr({
            invisible: !0,
            silent: !0
          })
        });
        var w = this._getPageInfo(t);
        return null != w.pageIndex && is(l, {
          x: w.contentPosition[0],
          y: w.contentPosition[1]
        }, f ? t : null), this._updatePageInfoView(t, w), _
      }, n.prototype._pageGo = function (t, e, n) {
        var i = this._getPageInfo(e)[t];
        null != i && n.dispatchAction({
          type: "legendScroll",
          scrollDataIndex: i,
          legendId: e.id
        })
      }, n.prototype._updatePageInfoView = function (t, e) {
        var n = this._controllerGroup;
        v(["pagePrev", "pageNext"], function (i) {
          var r = i + "DataIndex",
            o = null != e[r],
            a = n.childOfName(i);
          a && (a.setStyle("fill", o ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = o ? "pointer" : "default")
        });
        var i = n.childOfName("pageText"),
          r = t.get("pageFormatter"),
          o = e.pageIndex,
          a = null != o ? o + 1 : 0,
          s = e.pageCount;
        i && r && i.setStyle("text", C(r) ? r.replace("{current}", null == a ? "" : a + "").replace("{total}", null == s ? "" : s + "") : r({
          current: a,
          total: s
        }))
      }, n.prototype._getPageInfo = function (t) {
        function e(t) {
          if (t) {
            var e = t.getBoundingRect(),
              n = e[l] + t[l];
            return {
              s: n,
              e: n + e[s],
              i: t.__legendDataIndex
            }
          }
        }

        function n(t, e) {
          return t.e >= e && t.s <= e + o
        }
        var i = t.get("scrollDataIndex", !0),
          r = this.getContentGroup(),
          o = this._containerGroup.__rectSize,
          a = t.getOrient().index,
          s = wD[a],
          l = bD[a],
          u = this._findTargetItemIndex(i),
          h = r.children(),
          c = h[u],
          p = h.length,
          f = p ? 1 : 0,
          d = {
            contentPosition: [r.x, r.y],
            pageCount: f,
            pageIndex: f - 1,
            pagePrevDataIndex: null,
            pageNextDataIndex: null
          };
        if (!c) return d;
        var g = e(c);
        d.contentPosition[a] = -g.s;
        for (var v = u + 1, y = g, m = g, _ = null; p >= v; ++v) _ = e(h[v]), (!_ && m.e > y.s + o || _ && !n(_, y.s)) && (y = m.i > y.i ? m : _, y && (null == d.pageNextDataIndex && (d.pageNextDataIndex = y.i), ++d.pageCount)), m = _;
        for (var v = u - 1, y = g, m = g, _ = null; v >= -1; --v) _ = e(h[v]), _ && n(m, _.s) || !(y.i < m.i) || (m = y, null == d.pagePrevDataIndex && (d.pagePrevDataIndex = y.i), ++d.pageCount, ++d.pageIndex), y = _;
        return d
      }, n.prototype._findTargetItemIndex = function (t) {
        if (!this._showController) return 0;
        var e, n, i = this.getContentGroup();
        return i.eachChild(function (i, r) {
          var o = i.__legendDataIndex;
          null == n && null != o && (n = r), o === t && (e = r)
        }), null != e ? e : n
      }, n.type = "legend.scroll", n
    }(mD);
  zf(zg);
  var MD = kr(),
    TD = s,
    CD = cy,
    ID = function () {
      function t() {
        this._dragging = !1, this.animationThreshold = 15
      }
      return t.prototype.render = function (t, e, n, i) {
        var r = e.get("value"),
          o = e.get("status");
        if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== o) {
          this._lastValue = r, this._lastStatus = o;
          var a = this._group,
            s = this._handle;
          if (!o || "hide" === o) return a && a.hide(), void(s && s.hide());
          a && a.show(), s && s.show();
          var l = {};
          this.makeElOption(l, r, t, e, n);
          var u = l.graphicKey;
          u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;
          var h = this._moveAnimation = this.determineAnimation(t, e);
          if (a) {
            var c = S(Eg, e, h);
            this.updatePointerEl(a, l, c), this.updateLabelEl(a, l, c, e)
          } else a = this._group = new d_, this.createPointerEl(a, l, t, e), this.createLabelEl(a, l, t, e), n.getZr().add(a);
          Vg(a, e, !0), this._renderHandle(r)
        }
      }, t.prototype.remove = function (t) {
        this.clear(t)
      }, t.prototype.dispose = function (t) {
        this.clear(t)
      }, t.prototype.determineAnimation = function (t, e) {
        var n = e.get("animation"),
          i = t.axis,
          r = "category" === i.type,
          o = e.get("snap");
        if (!o && !r) return !1;
        if ("auto" === n || null == n) {
          var a = this.animationThreshold;
          if (r && i.getBandWidth() > a) return !0;
          if (o) {
            var s = gg(t).seriesDataCount,
              l = i.getExtent();
            return Math.abs(l[0] - l[1]) / s > a
          }
          return !1
        }
        return n === !0
      }, t.prototype.makeElOption = function () {}, t.prototype.createPointerEl = function (t, e) {
        var n = e.pointer;
        if (n) {
          var i = MD(t).pointerEl = new Sb[n.type](TD(e.pointer));
          t.add(i)
        }
      }, t.prototype.createLabelEl = function (t, e, n, i) {
        if (e.label) {
          var r = MD(t).labelEl = new qx(TD(e.label));
          t.add(r), Fg(r, i)
        }
      }, t.prototype.updatePointerEl = function (t, e, n) {
        var i = MD(t).pointerEl;
        i && e.pointer && (i.setStyle(e.pointer.style), n(i, {
          shape: e.pointer.shape
        }))
      }, t.prototype.updateLabelEl = function (t, e, n, i) {
        var r = MD(t).labelEl;
        r && (r.setStyle(e.label.style), n(r, {
          x: e.label.x,
          y: e.label.y
        }), Fg(r, i))
      }, t.prototype._renderHandle = function (t) {
        if (!this._dragging && this.updateHandleTransform) {
          var e = this._axisPointerModel,
            n = this._api.getZr(),
            i = this._handle,
            r = e.getModel("handle"),
            o = e.get("status");
          if (!r.get("show") || !o || "hide" === o) return i && n.remove(i), void(this._handle = null);
          var a;
          this._handle || (a = !0, i = this._handle = Is(r.get("icon"), {
            cursor: "move",
            draggable: !0,
            onmousemove: function (t) {
              Ay(t.event)
            },
            onmousedown: CD(this._onHandleDragMove, this, 0, 0),
            drift: CD(this._onHandleDragMove, this),
            ondragend: CD(this._onHandleDragEnd, this)
          }), n.add(i)), Vg(i, e, !1), i.setStyle(r.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
          var s = r.get("size");
          M(s) || (s = [s, s]), i.scaleX = s[0] / 2, i.scaleY = s[1] / 2, Nh(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, a)
        }
      }, t.prototype._moveHandleToValue = function (t, e) {
        Eg(this._axisPointerModel, !e && this._moveAnimation, this._handle, Hg(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
      }, t.prototype._onHandleDragMove = function (t, e) {
        var n = this._handle;
        if (n) {
          this._dragging = !0;
          var i = this.updateHandleTransform(Hg(n), [t, e], this._axisModel, this._axisPointerModel);
          this._payloadInfo = i, n.stopAnimation(), n.attr(Hg(i)), MD(n).lastProp = null, this._doDispatchAxisPointer()
        }
      }, t.prototype._doDispatchAxisPointer = function () {
        var t = this._handle;
        if (t) {
          var e = this._payloadInfo,
            n = this._axisModel;
          this._api.dispatchAction({
            type: "updateAxisPointer",
            x: e.cursorPoint[0],
            y: e.cursorPoint[1],
            tooltipOption: e.tooltipOption,
            axesInfo: [{
              axisDim: n.axis.dim,
              axisIndex: n.componentIndex
            }]
          })
        }
      }, t.prototype._onHandleDragEnd = function () {
        this._dragging = !1;
        var t = this._handle;
        if (t) {
          var e = this._axisPointerModel.get("value");
          this._moveHandleToValue(e), this._api.dispatchAction({
            type: "hideTip"
          })
        }
      }, t.prototype.clear = function (t) {
        this._lastValue = null, this._lastStatus = null;
        var e = t.getZr(),
          n = this._group,
          i = this._handle;
        e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), Fh(this, "_doDispatchAxisPointer")
      }, t.prototype.doClear = function () {}, t.prototype.buildLabel = function (t, e, n) {
        return n = n || 0, {
          x: t[n],
          y: t[1 - n],
          width: e[n],
          height: e[1 - n]
        }
      }, t
    }(),
    kD = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this
      }
      return e(n, t), n.prototype.makeElOption = function (t, e, n, i, r) {
        var o = n.axis,
          a = o.grid,
          s = i.get("type"),
          l = Kg(a, o).getOtherAxis(o).getGlobalExtent(),
          u = o.toGlobalCoord(o.dataToCoord(e, !0));
        if (s && "none" !== s) {
          var h = Wg(i),
            c = DD[s](o, u, l);
          c.style = h, t.graphicKey = c.type, t.pointer = c
        }
        var p = Xd(a.model, n);
        qg(e, t, p, n, i, r)
      }, n.prototype.getHandleTransform = function (t, e, n) {
        var i = Xd(e.axis.grid.model, e, {
          labelInside: !1
        });
        i.labelMargin = n.get(["handle", "margin"]);
        var r = Yg(e.axis, t, i);
        return {
          x: r[0],
          y: r[1],
          rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
        }
      }, n.prototype.updateHandleTransform = function (t, e, n) {
        var i = n.axis,
          r = i.grid,
          o = i.getGlobalExtent(!0),
          a = Kg(r, i).getOtherAxis(i).getGlobalExtent(),
          s = "x" === i.dim ? 0 : 1,
          l = [t.x, t.y];
        l[s] += e[s], l[s] = Math.min(o[1], l[s]), l[s] = Math.max(o[0], l[s]);
        var u = (a[1] + a[0]) / 2,
          h = [u, u];
        h[s] = l[s];
        var c = [{
          verticalAlign: "middle"
        }, {
          align: "center"
        }];
        return {
          x: l[0],
          y: l[1],
          rotation: t.rotation,
          cursorPoint: h,
          tooltipOption: c[s]
        }
      }, n
    }(ID),
    DD = {
      line: function (t, e, n) {
        var i = jg([e, n[0]], [e, n[1]], $g(t));
        return {
          type: "Line",
          subPixelOptimize: !0,
          shape: i
        }
      },
      shadow: function (t, e, n) {
        var i = Math.max(1, t.getBandWidth()),
          r = n[1] - n[0];
        return {
          type: "Rect",
          shape: Zg([e - i / 2, n[0]], [i, r], $g(t))
        }
      }
    },
    AD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e
      }
      return e(n, t), n.type = "axisPointer", n.defaultOption = {
        show: "auto",
        z: 50,
        type: "line",
        snap: !1,
        triggerTooltip: !0,
        value: null,
        status: null,
        link: [],
        animation: null,
        animationDurationUpdate: 200,
        lineStyle: {
          color: "#B9BEC9",
          width: 1,
          type: "dashed"
        },
        shadowStyle: {
          color: "rgba(210,219,238,0.2)"
        },
        label: {
          show: !0,
          formatter: null,
          precision: "auto",
          margin: 3,
          color: "#fff",
          padding: [5, 7, 5, 7],
          backgroundColor: "auto",
          borderColor: null,
          borderWidth: 0,
          borderRadius: 3
        },
        handle: {
          show: !1,
          icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
          size: 45,
          margin: 50,
          color: "#333",
          shadowBlur: 3,
          shadowColor: "#aaa",
          shadowOffsetX: 0,
          shadowOffsetY: 2,
          throttle: 40
        }
      }, n
    }(gS),
    PD = kr(),
    LD = v,
    OD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e
      }
      return e(n, t), n.prototype.render = function (t, e, n) {
        var i = e.getComponent("tooltip"),
          r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
        Qg("axisPointer", n, function (t, e, n) {
          "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
            type: "updateAxisPointer",
            currTrigger: t,
            x: e && e.offsetX,
            y: e && e.offsetY
          })
        })
      }, n.prototype.remove = function (t, e) {
        rv("axisPointer", e)
      }, n.prototype.dispose = function (t, e) {
        rv("axisPointer", e)
      }, n.type = "axisPointer", n
    }(OM),
    RD = kr(),
    BD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e
      }
      return e(n, t), n.type = "tooltip", n.dependencies = ["axisPointer"], n.defaultOption = {
        z: 60,
        show: !0,
        showContent: !0,
        trigger: "item",
        triggerOn: "mousemove|click",
        alwaysShowContent: !1,
        displayMode: "single",
        renderMode: "auto",
        confine: null,
        showDelay: 0,
        hideDelay: 100,
        transitionDuration: .4,
        enterable: !1,
        backgroundColor: "#fff",
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, .2)",
        shadowOffsetX: 1,
        shadowOffsetY: 2,
        borderRadius: 4,
        borderWidth: 1,
        padding: null,
        extraCssText: "",
        axisPointer: {
          type: "line",
          axis: "auto",
          animation: "auto",
          animationDurationUpdate: 200,
          animationEasingUpdate: "exponentialOut",
          crossStyle: {
            color: "#999",
            width: 1,
            type: "dashed",
            textStyle: {}
          }
        },
        textStyle: {
          color: "#666",
          fontSize: 14
        }
      }, n
    }(gS),
    zD = _v(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
    ED = _v(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
    ND = xv(ED, "transition"),
    FD = xv(zD, "transform"),
    HD = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (Gv.transform3dSupported ? "will-change:transform;" : ""),
    VD = function () {
      function t(t, e, n) {
        if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._firstShow = !0, this._longHide = !0, Gv.wxa) return null;
        var i = document.createElement("div");
        i.domBelongToZr = !0, this.el = i;
        var r = this._zr = e.getZr(),
          o = this._appendToBody = n && n.appendToBody;
        kv(this._styleCoord, r, o, e.getWidth() / 2, e.getHeight() / 2), o ? document.body.appendChild(i) : t.appendChild(i), this._container = t;
        var a = this;
        i.onmouseenter = function () {
          a._enterable && (clearTimeout(a._hideTimeout), a._show = !0), a._inContent = !0
        }, i.onmousemove = function (t) {
          if (t = t || window.event, !a._enterable) {
            var e = r.handler,
              n = r.painter.getViewportRoot();
            De(n, t, !0), e.dispatch("mousemove", t)
          }
        }, i.onmouseleave = function () {
          a._inContent = !1, a._enterable && a._show && a.hideLater(a._hideDelay)
        }
      }
      return t.prototype.update = function (t) {
        var e = this._container,
          n = wv(e, "position"),
          i = e.style;
        "absolute" !== i.position && "absolute" !== n && (i.position = "relative");
        var r = t.get("alwaysShowContent");
        r && this._moveIfResized(), this.el.className = t.get("className") || ""
      }, t.prototype.show = function (t, e) {
        clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
        var n = this.el,
          i = n.style,
          r = this._styleCoord;
        n.innerHTML ? i.cssText = HD + Iv(t, !this._firstShow, this._longHide) + Tv(r[0], r[1], !0) + ("border-color:" + Pl(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1
      }, t.prototype.setContent = function (t, e, n, i, r) {
        var o = this.el;
        if (null == t) return void(o.innerHTML = "");
        var a = "";
        if (C(r) && "item" === n.get("trigger") && !mv(n) && (a = Sv(n, i, r)), C(t)) o.innerHTML = t + a;
        else if (t) {
          o.innerHTML = "", M(t) || (t = [t]);
          for (var s = 0; s < t.length; s++) L(t[s]) && t[s].parentNode !== o && o.appendChild(t[s]);
          if (a && o.childNodes.length) {
            var l = document.createElement("div");
            l.innerHTML = a, o.appendChild(l)
          }
        }
      }, t.prototype.setEnterable = function (t) {
        this._enterable = t
      }, t.prototype.getSize = function () {
        var t = this.el;
        return [t.offsetWidth, t.offsetHeight]
      }, t.prototype.moveTo = function (t, e) {
        var n = this._styleCoord;
        if (kv(n, this._zr, this._appendToBody, t, e), null != n[0] && null != n[1]) {
          var i = this.el.style,
            r = Tv(n[0], n[1]);
          v(r, function (t) {
            i[t[0]] = t[1]
          })
        }
      }, t.prototype._moveIfResized = function () {
        var t = this._styleCoord[2],
          e = this._styleCoord[3];
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
      }, t.prototype.hide = function () {
        var t = this,
          e = this.el.style;
        e.visibility = "hidden", e.opacity = "0", Gv.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function () {
          return t._longHide = !0
        }, 500)
      }, t.prototype.hideLater = function (t) {
        !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(cy(this.hide, this), t)) : this.hide())
      }, t.prototype.isShow = function () {
        return this._show
      }, t.prototype.dispose = function () {
        this.el.parentNode.removeChild(this.el)
      }, t
    }(),
    WD = function () {
      function t(t) {
        this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._zr = t.getZr(), Pv(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2)
      }
      return t.prototype.update = function (t) {
        var e = t.get("alwaysShowContent");
        e && this._moveIfResized()
      }, t.prototype.show = function () {
        this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0
      }, t.prototype.setContent = function (t, e, n, i) {
        var r = this;
        D(t) && sr(""), this.el && this._zr.remove(this.el);
        var o = n.getModel("textStyle");
        this.el = new qx({
          style: {
            rich: e.richTextStyles,
            text: t,
            lineHeight: 22,
            borderWidth: 1,
            borderColor: i,
            textShadowColor: o.get("textShadowColor"),
            fill: n.get(["textStyle", "color"]),
            padding: xh(n, "richText"),
            verticalAlign: "top",
            align: "left"
          },
          z: n.get("z")
        }), v(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function (t) {
          r.el.style[t] = n.get(t)
        }), v(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function (t) {
          r.el.style[t] = o.get(t) || 0
        }), this._zr.add(this.el);
        var a = this;
        this.el.on("mouseover", function () {
          a._enterable && (clearTimeout(a._hideTimeout), a._show = !0), a._inContent = !0
        }), this.el.on("mouseout", function () {
          a._enterable && a._show && a.hideLater(a._hideDelay), a._inContent = !1
        })
      }, t.prototype.setEnterable = function (t) {
        this._enterable = t
      }, t.prototype.getSize = function () {
        var t = this.el,
          e = this.el.getBoundingRect(),
          n = Av(t.style);
        return [e.width + n.left + n.right, e.height + n.top + n.bottom]
      }, t.prototype.moveTo = function (t, e) {
        var n = this.el;
        if (n) {
          var i = this._styleCoord;
          Pv(i, this._zr, t, e), t = i[0], e = i[1];
          var r = n.style,
            o = Dv(r.borderWidth || 0),
            a = Av(r);
          n.x = t + o + a.left, n.y = e + o + a.top, n.markRedraw()
        }
      }, t.prototype._moveIfResized = function () {
        var t = this._styleCoord[2],
          e = this._styleCoord[3];
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
      }, t.prototype.hide = function () {
        this.el && this.el.hide(), this._show = !1
      }, t.prototype.hideLater = function (t) {
        !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(cy(this.hide, this), t)) : this.hide())
      }, t.prototype.isShow = function () {
        return this._show
      }, t.prototype.dispose = function () {
        this._zr.remove(this.el)
      }, t
    }(),
    GD = new Gx({
      shape: {
        x: -1,
        y: -1,
        width: 2,
        height: 2
      }
    }),
    UD = function (t) {
      function n() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = n.type, e
      }
      return e(n, t), n.prototype.init = function (t, e) {
        if (!Gv.node && e.getDom()) {
          var n = t.getComponent("tooltip"),
            i = this._renderMode = Rr(n.get("renderMode"));
          this._tooltipContent = "richText" === i ? new WD(e) : new VD(e.getDom(), e, {
            appendToBody: n.get("appendToBody", !0)
          })
        }
      }, n.prototype.render = function (t, e, n) {
        if (!Gv.node && n.getDom()) {
          this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._alwaysShowContent = t.get("alwaysShowContent");
          var i = this._tooltipContent;
          i.update(t), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow(), "richText" !== this._renderMode && t.get("transitionDuration") ? Nh(this, "_updatePosition", 50, "fixRate") : Fh(this, "_updatePosition")
        }
      }, n.prototype._initGlobalListener = function () {
        var t = this._tooltipModel,
          e = t.get("triggerOn");
        Qg("itemTooltip", this._api, cy(function (t, n, i) {
          "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i))
        }, this))
      }, n.prototype._keepShow = function () {
        var t = this._tooltipModel,
          e = this._ecModel,
          n = this._api,
          i = t.get("triggerOn");
        if (null != this._lastX && null != this._lastY && "none" !== i && "click" !== i) {
          var r = this;
          clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
            !n.isDisposed() && r.manuallyShowTip(t, e, n, {
              x: r._lastX,
              y: r._lastY,
              dataByCoordSys: r._lastDataByCoordSys
            })
          })
        }
      }, n.prototype.manuallyShowTip = function (t, e, n, i) {
        if (i.from !== this.uid && !Gv.node && n.getDom()) {
          var r = Ov(i, n);
          this._ticket = "";
          var o = i.dataByCoordSys,
            a = Nv(i, e, n);
          if (a) {
            var s = a.el.getBoundingRect().clone();
            s.applyTransform(a.el.transform), this._tryShow({
              offsetX: s.x + s.width / 2,
              offsetY: s.y + s.height / 2,
              target: a.el,
              position: i.position,
              positionDefault: "bottom"
            }, r)
          } else if (i.tooltip && null != i.x && null != i.y) {
            var l = GD;
            l.x = i.x, l.y = i.y, l.update(), $x(l).tooltipConfig = {
              name: null,
              option: i.tooltip
            }, this._tryShow({
              offsetX: i.x,
              offsetY: i.y,
              target: l
            }, r)
          } else if (o) this._tryShow({
            offsetX: i.x,
            offsetY: i.y,
            position: i.position,
            dataByCoordSys: o,
            tooltipOption: i.tooltipOption
          }, r);
          else if (null != i.seriesIndex) {
            if (this._manuallyAxisShowTip(t, e, n, i)) return;
            var u = ov(i, e),
              h = u.point[0],
              c = u.point[1];
            null != h && null != c && this._tryShow({
              offsetX: h,
              offsetY: c,
              target: u.el,
              position: i.position,
              positionDefault: "bottom"
            }, r)
          } else null != i.x && null != i.y && (n.dispatchAction({
            type: "updateAxisPointer",
            x: i.x,
            y: i.y
          }), this._tryShow({
            offsetX: i.x,
            offsetY: i.y,
            position: i.position,
            target: n.getZr().findHover(i.x, i.y).target
          }, r))
        }
      }, n.prototype.manuallyHideTip = function (t, e, n, i) {
        var r = this._tooltipContent;
        !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, i.from !== this.uid && this._hide(Ov(i, n))
      }, n.prototype._manuallyAxisShowTip = function (t, e, n, i) {
        var r = i.seriesIndex,
          o = i.dataIndex,
          a = e.getComponent("axisPointer").coordSysAxesInfo;
        if (null != r && null != o && null != a) {
          var s = e.getSeriesByIndex(r);
          if (s) {
            var l = s.getData(),
              u = Lv([l.getItemModel(o), s, (s.coordinateSystem || {}).model], this._tooltipModel);
            if ("axis" === u.get("trigger")) return n.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: r,
              dataIndex: o,
              position: i.position
            }), !0
          }
        }
      }, n.prototype._tryShow = function (t, e) {
        var n = t.target,
          i = this._tooltipModel;
        if (i) {
          this._lastX = t.offsetX, this._lastY = t.offsetY;
          var r = t.dataByCoordSys;
          if (r && r.length) this._showAxisTooltip(r, t);
          else if (n) {
            this._lastDataByCoordSys = null;
            var o, a;
            ic(n, function (t) {
              return null != $x(t).dataIndex ? (o = t, !0) : null != $x(t).tooltipConfig ? (a = t, !0) : void 0
            }, !0), o ? this._showSeriesItemTooltip(t, o, e) : a ? this._showComponentItemTooltip(t, a, e) : this._hide(e)
          } else this._lastDataByCoordSys = null, this._hide(e)
        }
      }, n.prototype._showOrMove = function (t, e) {
        var n = t.get("showDelay");
        e = cy(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
      }, n.prototype._showAxisTooltip = function (t, e) {
        var n = this._ecModel,
          i = this._tooltipModel,
          r = [e.offsetX, e.offsetY],
          o = Lv([e.tooltipOption], i),
          a = this._renderMode,
          s = [],
          l = ah("section", {
            blocks: [],
            noHeader: !0
          }),
          u = [],
          c = new DM;
        v(t, function (t) {
          v(t.dataByAxis, function (t) {
            var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
              r = t.value;
            if (e && null != r) {
              var o = Xg(r, e.axis, n, t.seriesDataIndices, t.valueLabelOpt),
                p = ah("section", {
                  header: o,
                  noHeader: !G(o),
                  sortBlocks: !0,
                  blocks: []
                });
              l.blocks.push(p), v(t.seriesDataIndices, function (l) {
                var f = n.getSeriesByIndex(l.seriesIndex),
                  d = l.dataIndexInside,
                  g = f.getDataParams(d);
                if (!(g.dataIndex < 0)) {
                  g.axisDim = t.axisDim, g.axisIndex = t.axisIndex, g.axisType = t.axisType, g.axisId = t.axisId, g.axisValue = Cf(e.axis, {
                    value: r
                  }), g.axisValueLabel = o, g.marker = c.makeTooltipMarker("item", Pl(g.color), a);
                  var v = Hu(f.formatTooltip(d, !0, null)),
                    y = v.frag;
                  if (y) {
                    var m = Lv([f], i).get("valueFormatter");
                    p.blocks.push(m ? h({
                      valueFormatter: m
                    }, y) : y)
                  }
                  v.text && u.push(v.text), s.push(g)
                }
              })
            }
          })
        }), l.blocks.reverse(), u.reverse();
        var p = e.position,
          f = o.get("order"),
          d = ph(l, c, a, f, n.get("useUTC"), o.get("textStyle"));
        d && u.unshift(d);
        var g = "richText" === a ? "\n\n" : "<br/>",
          y = u.join(g);
        this._showOrMove(o, function () {
          this._updateContentNotChangedOnAxis(t, s) ? this._updatePosition(o, p, r[0], r[1], this._tooltipContent, s) : this._showTooltipContent(o, y, s, Math.random() + "", r[0], r[1], p, null, c)
        })
      }, n.prototype._showSeriesItemTooltip = function (t, e, n) {
        var i = this._ecModel,
          r = $x(e),
          o = r.seriesIndex,
          a = i.getSeriesByIndex(o),
          s = r.dataModel || a,
          l = r.dataIndex,
          u = r.dataType,
          c = s.getData(u),
          p = this._renderMode,
          f = t.positionDefault,
          d = Lv([c.getItemModel(l), s, a && (a.coordinateSystem || {}).model], this._tooltipModel, f ? {
            position: f
          } : null),
          g = d.get("trigger");
        if (null == g || "item" === g) {
          var v = s.getDataParams(l, u),
            y = new DM;
          v.marker = y.makeTooltipMarker("item", Pl(v.color), p);
          var m = Hu(s.formatTooltip(l, !1, u)),
            _ = d.get("order"),
            x = d.get("valueFormatter"),
            w = m.frag,
            b = w ? ph(x ? h({
              valueFormatter: x
            }, w) : w, y, p, _, i.get("useUTC"), d.get("textStyle")) : m.text,
            S = "item_" + s.name + "_" + l;
          this._showOrMove(d, function () {
            this._showTooltipContent(d, b, v, S, t.offsetX, t.offsetY, t.position, t.target, y)
          }), n({
            type: "showTip",
            dataIndexInside: l,
            dataIndex: c.getRawIndex(l),
            seriesIndex: o,
            from: this.uid
          })
        }
      }, n.prototype._showComponentItemTooltip = function (t, e, n) {
        var i = $x(e),
          r = i.tooltipConfig,
          o = r.option || {};
        if (C(o)) {
          var a = o;
          o = {
            content: a,
            formatter: a
          }
        }
        var l = [o],
          u = this._ecModel.getComponent(i.componentMainType, i.componentIndex);
        u && l.push(u), l.push({
          formatter: o.content
        });
        var h = t.positionDefault,
          c = Lv(l, this._tooltipModel, h ? {
            position: h
          } : null),
          p = c.get("content"),
          f = Math.random() + "",
          d = new DM;
        this._showOrMove(c, function () {
          var n = s(c.get("formatterParams") || {});
          this._showTooltipContent(c, p, n, f, t.offsetX, t.offsetY, t.position, e, d)
        }), n({
          type: "showTip",
          from: this.uid
        })
      }, n.prototype._showTooltipContent = function (t, e, n, i, r, o, a, s, l) {
        if (this._ticket = "", t.get("showContent") && t.get("show")) {
          var u = this._tooltipContent;
          u.setEnterable(t.get("enterable"));
          var h = t.get("formatter");
          a = a || t.get("position");
          var c = e,
            p = this._getNearestPoint([r, o], n, t.get("trigger"), t.get("borderColor")),
            f = p.color;
          if (h)
            if (C(h)) {
              var d = t.ecModel.get("useUTC"),
                g = M(n) ? n[0] : n,
                v = g && g.axisType && g.axisType.indexOf("time") >= 0;
              c = h, v && (c = rl(g.axisValue, c, d)), c = Il(c, n, !0)
            } else if (T(h)) {
            var y = cy(function (e, i) {
              e === this._ticket && (u.setContent(i, l, t, f, a), this._updatePosition(t, a, r, o, u, n, s))
            }, this);
            this._ticket = i, c = h(n, i, y)
          } else c = h;
          u.setContent(c, l, t, f, a), u.show(t, f), this._updatePosition(t, a, r, o, u, n, s)
        }
      }, n.prototype._getNearestPoint = function (t, e, n, i) {
        return "axis" === n || M(e) ? {
          color: i || ("html" === this._renderMode ? "#fff" : "none")
        } : M(e) ? void 0 : {
          color: i || e.color || e.borderColor
        }
      }, n.prototype._updatePosition = function (t, e, n, i, r, o, a) {
        var s = this._api.getWidth(),
          l = this._api.getHeight();
        e = e || t.get("position");
        var u = r.getSize(),
          h = t.get("align"),
          c = t.get("verticalAlign"),
          p = a && a.getBoundingRect().clone();
        if (a && p.applyTransform(a.transform), T(e) && (e = e([n, i], o, r.el, p, {
            viewSize: [s, l],
            contentSize: u.slice()
          })), M(e)) n = Hi(e[0], s), i = Hi(e[1], l);
        else if (D(e)) {
          var f = e;
          f.width = u[0], f.height = u[1];
          var d = Rl(f, {
            width: s,
            height: l
          });
          n = d.x, i = d.y, h = null, c = null
        } else if (C(e) && a) {
          var g = zv(e, p, u, t.get("borderWidth"));
          n = g[0], i = g[1]
        } else {
          var g = Rv(n, i, r, s, l, h ? null : 20, c ? null : 20);
          n = g[0], i = g[1]
        }
        if (h && (n -= Ev(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= Ev(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), mv(t)) {
          var g = Bv(n, i, r, s, l);
          n = g[0], i = g[1]
        }
        r.moveTo(n, i)
      }, n.prototype._updateContentNotChangedOnAxis = function (t, e) {
        var n = this._lastDataByCoordSys,
          i = this._cbParamsList,
          r = !!n && n.length === t.length;
        return r && v(n, function (n, o) {
          var a = n.dataByAxis || [],
            s = t[o] || {},
            l = s.dataByAxis || [];
          r = r && a.length === l.length, r && v(a, function (t, n) {
            var o = l[n] || {},
              a = t.seriesDataIndices || [],
              s = o.seriesDataIndices || [];
            r = r && t.value === o.value && t.axisType === o.axisType && t.axisId === o.axisId && a.length === s.length, r && v(a, function (t, e) {
              var n = s[e];
              r = r && t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex
            }), i && v(t.seriesDataIndices, function (t) {
              var n = t.seriesIndex,
                o = e[n],
                a = i[n];
              o && a && a.data !== o.data && (r = !1)
            })
          })
        }), this._lastDataByCoordSys = t, this._cbParamsList = e, !!r
      }, n.prototype._hide = function (t) {
        this._lastDataByCoordSys = null, t({
          type: "hideTip",
          from: this.uid
        })
      }, n.prototype.dispose = function (t, e) {
        !Gv.node && e.getDom() && (Fh(this, "_updatePosition"), this._tooltipContent.dispose(), rv("itemTooltip", e))
      }, n.type = "tooltip", n
    }(OM);
  zf(Fv), t.version = zT, t.dependencies = ET, t.PRIORITY = tC, t.init = Zc, t.connect = Kc, t.disConnect = $c, t.disconnect = UC, t.dispose = Qc, t.getInstanceByDom = Jc, t.getInstanceById = tp, t.registerTheme = ep, t.registerPreprocessor = np, t.registerProcessor = ip, t.registerPostInit = rp, t.registerPostUpdate = op, t.registerUpdateLifecycle = ap, t.registerAction = sp, t.registerCoordinateSystem = lp, t.getCoordinateSystemDimensions = up, t.registerLayout = hp, t.registerVisual = cp, t.registerLoading = fp, t.setCanvasCreator = dp, t.registerMap = gp, t.getMap = vp, t.registerTransform = YC, t.dataTool = tI, t.registerLocale = Ks, t.zrender = __, t.matrix = Wm, t.vector = xy, t.zrUtil = gy, t.color = fm, t.helper = VI, t.number = KI, t.time = $I, t.graphic = QI, t.format = JI, t.util = tk, t.List = dI, t.ComponentModel = gS, t.ComponentView = OM, t.SeriesModel = LM, t.ChartView = zM, t.extendComponentModel = ld, t.extendComponentView = ud, t.extendSeriesModel = hd, t.extendChartView = cd, t.throttle = Eh, t.use = zf, t.setPlatformAPI = r, t.parseGeoJSON = Xf, t.parseGeoJson = Xf, t.env = Gv, t.Model = Fb, t.Axis = ik, t.innerDrawElementOnCanvas = Rc
});