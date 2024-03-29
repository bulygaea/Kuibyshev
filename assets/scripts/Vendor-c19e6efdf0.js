!function(n) {
    var r = {};
    function s(e) {
        if (r[e])
            return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, s),
        t.l = !0,
        t.exports
    }
    s.m = n,
    s.c = r,
    s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return s.d(t, "a", t),
        t
    }
    ,
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s.p = "",
    s(s.s = 8)
}([, , , , , , , , function(e, t, n) {
    "use strict";
    n(9),
    n(10),
    n(11)
}
, function(e, t, n) {
    "use strict";
    var C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    !function(i, d, p) {
        var o = []
          , e = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                o.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                o.push({
                    name: null,
                    fn: e
                })
            }
        }
          , c = function() {};
        c.prototype = e,
        c = new c;
        var l = [];
        function m(e, t) {
            return (void 0 === e ? "undefined" : C(e)) === t
        }
        var h = d.documentElement
          , g = "svg" === h.nodeName.toLowerCase();
        var t = "Moz O ms Webkit"
          , u = e._config.usePrefixes ? t.split(" ") : [];
        function A() {
            return "function" != typeof d.createElement ? d.createElement(arguments[0]) : g ? d.createElementNS.call(d, "http://www.w3.org/2000/svg", arguments[0]) : d.createElement.apply(d, arguments)
        }
        e._cssomPrefixes = u;
        var n = {
            elem: A("modernizr")
        };
        c._q.push(function() {
            delete n.elem
        });
        var v = {
            style: n.elem.style
        };
        function s(e, t, n, r) {
            var s, i, a, o, c, l = "modernizr", u = A("div"), f = ((c = d.body) || ((c = A(g ? "svg" : "body")).fake = !0),
            c);
            if (parseInt(n, 10))
                for (; n--; )
                    (a = A("div")).id = r ? r[n] : l + (n + 1),
                    u.appendChild(a);
            return (s = A("style")).type = "text/css",
            s.id = "s" + l,
            (f.fake ? f : u).appendChild(s),
            f.appendChild(u),
            s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(d.createTextNode(e)),
            u.id = l,
            f.fake && (f.style.background = "",
            f.style.overflow = "hidden",
            o = h.style.overflow,
            h.style.overflow = "hidden",
            h.appendChild(f)),
            i = t(u, e),
            f.fake ? (f.parentNode.removeChild(f),
            h.style.overflow = o,
            h.offsetHeight) : u.parentNode.removeChild(u),
            !!i
        }
        function a(e) {
            return e.replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }
        function y(e, t) {
            var n = e.length;
            if ("CSS"in i && "supports"in i.CSS) {
                for (; n--; )
                    if (i.CSS.supports(a(e[n]), t))
                        return !0;
                return !1
            }
            if ("CSSSupportsRule"in i) {
                for (var r = []; n--; )
                    r.push("(" + a(e[n]) + ":" + t + ")");
                return s("@supports (" + (r = r.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
                    return "absolute" == function(e, t, n) {
                        var r;
                        if ("getComputedStyle"in i) {
                            r = getComputedStyle.call(i, e, t);
                            var s = i.console;
                            null !== r ? n && (r = r.getPropertyValue(n)) : s && s[s.error ? "error" : "log"].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                        } else
                            r = !t && e.currentStyle && e.currentStyle[n];
                        return r
                    }(e, null, "position")
                })
            }
            return p
        }
        c._q.unshift(function() {
            delete v.style
        });
        var f = e._config.usePrefixes ? t.toLowerCase().split(" ") : [];
        function z(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        function r(e, t, n, r, s) {
            var i = e.charAt(0).toUpperCase() + e.slice(1)
              , a = (e + " " + u.join(i + " ") + i).split(" ");
            return m(t, "string") || m(t, "undefined") ? function(e, t, n, r) {
                if (r = !m(r, "undefined") && r,
                !m(n, "undefined")) {
                    var s = y(e, n);
                    if (!m(s, "undefined"))
                        return s
                }
                for (var i, a, o, c, l, u = ["modernizr", "tspan", "samp"]; !v.style && u.length; )
                    i = !0,
                    v.modElem = A(u.shift()),
                    v.style = v.modElem.style;
                function f() {
                    i && (delete v.style,
                    delete v.modElem)
                }
                for (o = e.length,
                a = 0; a < o; a++)
                    if (c = e[a],
                    l = v.style[c],
                    ~("" + c).indexOf("-") && (c = c.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                        return t + n.toUpperCase()
                    }).replace(/^-/, "")),
                    v.style[c] !== p) {
                        if (r || m(n, "undefined"))
                            return f(),
                            "pfx" != t || c;
                        try {
                            v.style[c] = n
                        } catch (e) {}
                        if (v.style[c] != l)
                            return f(),
                            "pfx" != t || c
                    }
                return f(),
                !1
            }(a, t, r, s) : function(e, t, n) {
                var r;
                for (var s in e)
                    if (e[s]in t)
                        return !1 === n ? e[s] : m(r = t[e[s]], "function") ? z(r, n || t) : r;
                return !1
            }(a = (e + " " + f.join(i + " ") + i).split(" "), t, n)
        }
        function w(e, t, n) {
            return r(e, p, p, t, n)
        }
        e._domPrefixes = f,
        e.testAllProps = r,
        e.testAllProps = w,
        c.addTest("flexbox", w("flexBasis", "1px", !0)),
        c.addTest("svg", !!d.createElementNS && !!d.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect),
        function() {
            var e, t, n, r, s, i;
            for (var a in o)
                if (o.hasOwnProperty(a)) {
                    if (e = [],
                    (t = o[a]).name && (e.push(t.name.toLowerCase()),
                    t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++)
                            e.push(t.options.aliases[n].toLowerCase());
                    for (r = m(t.fn, "function") ? t.fn() : t.fn,
                    s = 0; s < e.length; s++)
                        1 === (i = e[s].split(".")).length ? c[i[0]] = r : (!c[i[0]] || c[i[0]]instanceof Boolean || (c[i[0]] = new Boolean(c[i[0]])),
                        c[i[0]][i[1]] = r),
                        l.push((r ? "" : "no-") + i.join("-"))
                }
        }(),
        function(e) {
            var t = h.className
              , n = c._config.classPrefix || "";
            if (g && (t = t.baseVal),
            c._config.enableJSClass) {
                var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(r, "$1" + n + "js$2")
            }
            c._config.enableClasses && (t += " " + n + e.join(" " + n),
            g ? h.className.baseVal = t : h.className = t)
        }(l),
        delete e.addTest,
        delete e.addAsyncTest;
        for (var b = 0; b < c._q.length; b++)
            c._q[b]();
        i.Modernizr = c
    }(window, document)
}
, function(fe, de, pe) {
    var me, e, t, s, n, r, i, a, o, c;
    e = window,
    c = navigator.userAgent,
    e.HTMLPictureElement && /ecko/.test(c) && c.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (s = document.createElement("source"),
    n = function(e) {
        var t, n, r = e.parentNode;
        "PICTURE" === r.nodeName.toUpperCase() ? (t = s.cloneNode(),
        r.insertBefore(t, r.firstElementChild),
        setTimeout(function() {
            r.removeChild(t)
        })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth,
        n = e.sizes,
        e.sizes += ",100vw",
        setTimeout(function() {
            e.sizes = n
        }))
    }
    ,
    r = function() {
        var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
        for (e = 0; e < t.length; e++)
            n(t[e])
    }
    ,
    i = function() {
        clearTimeout(t),
        t = setTimeout(r, 99)
    }
    ,
    a = e.matchMedia && matchMedia("(orientation: landscape)"),
    o = function() {
        i(),
        a && a.addListener && a.addListener(i)
    }
    ,
    s.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    /^[c|i]|d$/.test(document.readyState || "") ? o() : document.addEventListener("DOMContentLoaded", o),
    i)),
    function(e, i, l) {
        "use strict";
        var s, u, c;
        i.createElement("picture");
        var C = {}
          , a = !1
          , t = function() {}
          , n = i.createElement("img")
          , f = n.getAttribute
          , d = n.setAttribute
          , p = n.removeAttribute
          , o = i.documentElement
          , r = {}
          , S = {
            algorithm: ""
        }
          , m = "data-pfsrc"
          , h = m + "set"
          , g = navigator.userAgent
          , x = /rident/.test(g) || /ecko/.test(g) && g.match(/rv\:(\d+)/) && 35 < RegExp.$1
          , E = "currentSrc"
          , A = /\s+\+?\d+(e\d+)?w/
          , v = /(\([^)]+\))?\s*(.+)/
          , y = e.picturefillCFG
          , z = "font-size:100%!important;"
          , w = !0
          , b = {}
          , T = {}
          , M = e.devicePixelRatio
          , P = {
            px: 1,
            in: 96
        }
          , R = i.createElement("a")
          , L = !1
          , _ = /^[ \t\n\r\u000c]+/
          , N = /^[, \t\n\r\u000c]+/
          , B = /^[^ \t\n\r\u000c]+/
          , k = /[,]+$/
          , W = /^\d+$/
          , $ = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/
          , D = function(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        }
          , I = function(t) {
            var n = {};
            return function(e) {
                return e in n || (n[e] = t(e)),
                n[e]
            }
        };
        function O(e) {
            return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
        }
        var U, F, H, j, q, Q, G, V, J, K, X, Z, Y, ee, te, ne, re, se, ie, ae = (U = /^([\d\.]+)(em|vw|px)$/,
        F = I(function(e) {
            return "return " + function() {
                for (var e = arguments, t = 0, n = e[0]; ++t in e; )
                    n = n.replace(e[t], e[++t]);
                return n
            }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
        }),
        function(e, t) {
            var n;
            if (!(e in b))
                if (b[e] = !1,
                t && (n = e.match(U)))
                    b[e] = n[1] * P[n[2]];
                else
                    try {
                        b[e] = new Function("e",F(e))(P)
                    } catch (e) {}
            return b[e]
        }
        ), oe = function(e, t) {
            return e.w ? (e.cWidth = C.calcListLength(t || "100vw"),
            e.res = e.w / e.cWidth) : e.res = e.d,
            e
        }, ce = function(e) {
            if (a) {
                var t, n, r, s = e || {};
                if (s.elements && 1 === s.elements.nodeType && ("IMG" === s.elements.nodeName.toUpperCase() ? s.elements = [s.elements] : (s.context = s.elements,
                s.elements = null)),
                r = (t = s.elements || C.qsa(s.context || i, s.reevaluate || s.reselect ? C.sel : C.selShort)).length) {
                    for (C.setupRun(s),
                    L = !0,
                    n = 0; n < r; n++)
                        C.fillImg(t[n], s);
                    C.teardownRun(s)
                }
            }
        };
        function le(e, t) {
            return e.res - t.res
        }
        function ue(e, t) {
            var n, r, s;
            if (e && t)
                for (s = C.parseSet(t),
                e = C.makeUrl(e),
                n = 0; n < s.length; n++)
                    if (e === C.makeUrl(s[n].url)) {
                        r = s[n];
                        break
                    }
            return r
        }
        e.console && console.warn,
        E in n || (E = "src"),
        r["image/jpeg"] = !0,
        r["image/gif"] = !0,
        r["image/png"] = !0,
        r["image/svg+xml"] = i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),
        C.ns = ("pf" + (new Date).getTime()).substr(0, 9),
        C.supSrcset = "srcset"in n,
        C.supSizes = "sizes"in n,
        C.supPicture = !!e.HTMLPictureElement,
        C.supSrcset && C.supPicture && !C.supSizes && (H = i.createElement("img"),
        n.srcset = "data:,a",
        H.src = "data:,a",
        C.supSrcset = n.complete === H.complete,
        C.supPicture = C.supSrcset && C.supPicture),
        C.supSrcset && !C.supSizes ? (j = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        q = i.createElement("img"),
        Q = function() {
            2 === q.width && (C.supSizes = !0),
            u = C.supSrcset && !C.supSizes,
            a = !0,
            setTimeout(ce)
        }
        ,
        q.onload = Q,
        q.onerror = Q,
        q.setAttribute("sizes", "9px"),
        q.srcset = j + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",
        q.src = j) : a = !0,
        C.selShort = "picture>img,img[srcset]",
        C.sel = C.selShort,
        C.cfg = S,
        C.DPR = M || 1,
        C.u = P,
        C.types = r,
        C.setSize = t,
        C.makeUrl = I(function(e) {
            return R.href = e,
            R.href
        }),
        C.qsa = function(e, t) {
            return "querySelector"in e ? e.querySelectorAll(t) : []
        }
        ,
        C.matchesMedia = function() {
            return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? C.matchesMedia = function(e) {
                return !e || matchMedia(e).matches
            }
            : C.matchesMedia = C.mMQ,
            C.matchesMedia.apply(this, arguments)
        }
        ,
        C.mMQ = function(e) {
            return !e || ae(e)
        }
        ,
        C.calcLength = function(e) {
            var t = ae(e, !0) || !1;
            return t < 0 && (t = !1),
            t
        }
        ,
        C.supportsType = function(e) {
            return !e || r[e]
        }
        ,
        C.parseSize = I(function(e) {
            var t = (e || "").match(v);
            return {
                media: t && t[1],
                length: t && t[2]
            }
        }),
        C.parseSet = function(e) {
            return e.cands || (e.cands = function(r, f) {
                function e(e) {
                    var t, n = e.exec(r.substring(a));
                    if (n)
                        return t = n[0],
                        a += t.length,
                        t
                }
                var d, p, t, n, s, i = r.length, a = 0, m = [];
                function o() {
                    var e, t, n, r, s, i, a, o, c, l = !1, u = {};
                    for (r = 0; r < p.length; r++)
                        i = (s = p[r])[s.length - 1],
                        a = s.substring(0, s.length - 1),
                        o = parseInt(a, 10),
                        c = parseFloat(a),
                        W.test(a) && "w" === i ? ((e || t) && (l = !0),
                        0 === o ? l = !0 : e = o) : $.test(a) && "x" === i ? ((e || t || n) && (l = !0),
                        c < 0 ? l = !0 : t = c) : W.test(a) && "h" === i ? ((n || t) && (l = !0),
                        0 === o ? l = !0 : n = o) : l = !0;
                    l || (u.url = d,
                    e && (u.w = e),
                    t && (u.d = t),
                    n && (u.h = n),
                    n || t || e || (u.d = 1),
                    1 === u.d && (f.has1x = !0),
                    u.set = f,
                    m.push(u))
                }
                function c() {
                    for (e(_),
                    t = "",
                    n = "in descriptor"; ; ) {
                        if (s = r.charAt(a),
                        "in descriptor" === n)
                            if (O(s))
                                t && (p.push(t),
                                t = "",
                                n = "after descriptor");
                            else {
                                if ("," === s)
                                    return a += 1,
                                    t && p.push(t),
                                    void o();
                                if ("(" === s)
                                    t += s,
                                    n = "in parens";
                                else {
                                    if ("" === s)
                                        return t && p.push(t),
                                        void o();
                                    t += s
                                }
                            }
                        else if ("in parens" === n)
                            if (")" === s)
                                t += s,
                                n = "in descriptor";
                            else {
                                if ("" === s)
                                    return p.push(t),
                                    void o();
                                t += s
                            }
                        else if ("after descriptor" === n)
                            if (O(s))
                                ;
                            else {
                                if ("" === s)
                                    return void o();
                                n = "in descriptor",
                                a -= 1
                            }
                        a += 1
                    }
                }
                for (; ; ) {
                    if (e(N),
                    i <= a)
                        return m;
                    d = e(B),
                    p = [],
                    "," === d.slice(-1) ? (d = d.replace(k, ""),
                    o()) : c()
                }
            }(e.srcset, e)),
            e.cands
        }
        ,
        C.getEmValue = function() {
            var e;
            if (!s && (e = i.body)) {
                var t = i.createElement("div")
                  , n = o.style.cssText
                  , r = e.style.cssText;
                t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
                o.style.cssText = z,
                e.style.cssText = z,
                e.appendChild(t),
                s = t.offsetWidth,
                e.removeChild(t),
                s = parseFloat(s, 10),
                o.style.cssText = n,
                e.style.cssText = r
            }
            return s || 16
        }
        ,
        C.calcListLength = function(e) {
            if (!(e in T) || S.uT) {
                var t = C.calcLength(function(e) {
                    var t, n, r, s, i, a, o, c = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                    for (r = (n = function(e) {
                        var t, n = "", r = [], s = [], i = 0, a = 0, o = !1;
                        function c() {
                            n && (r.push(n),
                            n = "")
                        }
                        function l() {
                            r[0] && (s.push(r),
                            r = [])
                        }
                        for (; ; ) {
                            if ("" === (t = e.charAt(a)))
                                return c(),
                                l(),
                                s;
                            if (o) {
                                if ("*" === t && "/" === e[a + 1]) {
                                    o = !1,
                                    a += 2,
                                    c();
                                    continue
                                }
                                a += 1
                            } else {
                                if (O(t)) {
                                    if (e.charAt(a - 1) && O(e.charAt(a - 1)) || !n) {
                                        a += 1;
                                        continue
                                    }
                                    if (0 === i) {
                                        c(),
                                        a += 1;
                                        continue
                                    }
                                    t = " "
                                } else if ("(" === t)
                                    i += 1;
                                else if (")" === t)
                                    i -= 1;
                                else {
                                    if ("," === t) {
                                        c(),
                                        l(),
                                        a += 1;
                                        continue
                                    }
                                    if ("/" === t && "*" === e.charAt(a + 1)) {
                                        o = !0,
                                        a += 2;
                                        continue
                                    }
                                }
                                n += t,
                                a += 1
                            }
                        }
                    }(e)).length,
                    t = 0; t < r; t++)
                        if (i = (s = n[t])[s.length - 1],
                        o = i,
                        c.test(o) && 0 <= parseFloat(o) || l.test(o) || "0" === o || "-0" === o || "+0" === o) {
                            if (a = i,
                            s.pop(),
                            0 === s.length)
                                return a;
                            if (s = s.join(" "),
                            C.matchesMedia(s))
                                return a
                        }
                    return "100vw"
                }(e));
                T[e] = t || P.width
            }
            return T[e]
        }
        ,
        C.setRes = function(e) {
            var t;
            if (e)
                for (var n = 0, r = (t = C.parseSet(e)).length; n < r; n++)
                    oe(t[n], e.sizes);
            return t
        }
        ,
        C.setRes.res = oe,
        C.applySetCandidate = function(e, t) {
            if (e.length) {
                var n, r, s, i, a, o, c, l, u, f, d, p, m, h, g, A, v, y, z, w = t[C.ns], b = C.DPR;
                if (o = w.curSrc || t[E],
                (c = w.curCan || (f = t,
                d = o,
                !(p = e[0].set) && d && (p = (p = f[C.ns].sets) && p[p.length - 1]),
                (m = ue(d, p)) && (d = C.makeUrl(d),
                f[C.ns].curSrc = d,
                (f[C.ns].curCan = m).res || oe(m, m.set.sizes)),
                m)) && c.set === e[0].set && ((u = x && !t.complete && c.res - .1 > b) || (c.cached = !0,
                c.res >= b && (a = c))),
                !a)
                    for (e.sort(le),
                    a = e[(i = e.length) - 1],
                    r = 0; r < i; r++)
                        if ((n = e[r]).res >= b) {
                            a = e[s = r - 1] && (u || o !== C.makeUrl(n.url)) && (h = e[s].res,
                            g = n.res,
                            A = b,
                            v = e[s].cached,
                            z = y = void 0,
                            A < ("saveData" === S.algorithm ? 2.7 < h ? A + 1 : (z = (g - A) * (y = Math.pow(h - .6, 1.5)),
                            v && (z += .1 * y),
                            h + z) : 1 < A ? Math.sqrt(h * g) : h)) ? e[s] : n;
                            break
                        }
                a && (l = C.makeUrl(a.url),
                w.curSrc = l,
                w.curCan = a,
                l !== o && C.setSrc(t, a),
                C.setSize(t))
            }
        }
        ,
        C.setSrc = function(e, t) {
            var n;
            e.src = t.url,
            "image/svg+xml" === t.set.type && (n = e.style.width,
            e.style.width = e.offsetWidth + 1 + "px",
            e.offsetWidth + 1 && (e.style.width = n))
        }
        ,
        C.getSet = function(e) {
            var t, n, r, s = !1, i = e[C.ns].sets;
            for (t = 0; t < i.length && !s; t++)
                if ((n = i[t]).srcset && C.matchesMedia(n.media) && (r = C.supportsType(n.type))) {
                    "pending" === r && (n = r),
                    s = n;
                    break
                }
            return s
        }
        ,
        C.parseSets = function(e, t, n) {
            var r, s, i, a, o = t && "PICTURE" === t.nodeName.toUpperCase(), c = e[C.ns];
            (c.src === l || n.src) && (c.src = f.call(e, "src"),
            c.src ? d.call(e, m, c.src) : p.call(e, m)),
            (c.srcset === l || n.srcset || !C.supSrcset || e.srcset) && (r = f.call(e, "srcset"),
            c.srcset = r,
            a = !0),
            c.sets = [],
            o && (c.pic = !0,
            function(e, t) {
                var n, r, s, i, a = e.getElementsByTagName("source");
                for (n = 0,
                r = a.length; n < r; n++)
                    (s = a[n])[C.ns] = !0,
                    (i = s.getAttribute("srcset")) && t.push({
                        srcset: i,
                        media: s.getAttribute("media"),
                        type: s.getAttribute("type"),
                        sizes: s.getAttribute("sizes")
                    })
            }(t, c.sets)),
            c.srcset ? (s = {
                srcset: c.srcset,
                sizes: f.call(e, "sizes")
            },
            c.sets.push(s),
            (i = (u || c.src) && A.test(c.srcset || "")) || !c.src || ue(c.src, s) || s.has1x || (s.srcset += ", " + c.src,
            s.cands.push({
                url: c.src,
                d: 1,
                set: s
            }))) : c.src && c.sets.push({
                srcset: c.src,
                sizes: null
            }),
            c.curCan = null,
            c.curSrc = l,
            c.supported = !(o || s && !C.supSrcset || i && !C.supSizes),
            a && C.supSrcset && !c.supported && (r ? (d.call(e, h, r),
            e.srcset = "") : p.call(e, h)),
            c.supported && !c.srcset && (!c.src && e.src || e.src !== C.makeUrl(c.src)) && (null === c.src ? e.removeAttribute("src") : e.src = c.src),
            c.parsed = !0
        }
        ,
        C.fillImg = function(e, t) {
            var n, r, s, i, a, o = t.reselect || t.reevaluate;
            (e[C.ns] || (e[C.ns] = {}),
            n = e[C.ns],
            o || n.evaled !== c) && (n.parsed && !t.reevaluate || C.parseSets(e, e.parentNode, t),
            n.supported ? n.evaled = c : (r = e,
            i = C.getSet(r),
            a = !1,
            "pending" !== i && (a = c,
            i && (s = C.setRes(i),
            C.applySetCandidate(s, r))),
            r[C.ns].evaled = a))
        }
        ,
        C.setupRun = function() {
            L && !w && M === e.devicePixelRatio || (w = !1,
            M = e.devicePixelRatio,
            b = {},
            T = {},
            C.DPR = M || 1,
            P.width = Math.max(e.innerWidth || 0, o.clientWidth),
            P.height = Math.max(e.innerHeight || 0, o.clientHeight),
            P.vw = P.width / 100,
            P.vh = P.height / 100,
            c = [P.height, P.width, M].join("-"),
            P.em = C.getEmValue(),
            P.rem = P.em)
        }
        ,
        C.supPicture ? (ce = t,
        C.fillImg = t) : (Y = e.attachEvent ? /d$|^c/ : /d$|^c|^i/,
        ee = function() {
            var e = i.readyState || "";
            te = setTimeout(ee, "loading" === e ? 200 : 999),
            i.body && (C.fillImgs(),
            (G = G || Y.test(e)) && clearTimeout(te))
        }
        ,
        te = setTimeout(ee, i.body ? 9 : 99),
        ne = o.clientHeight,
        D(e, "resize", (V = function() {
            w = Math.max(e.innerWidth || 0, o.clientWidth) !== P.width || o.clientHeight !== ne,
            ne = o.clientHeight,
            w && C.fillImgs()
        }
        ,
        J = 99,
        Z = function() {
            var e = new Date - X;
            e < J ? K = setTimeout(Z, J - e) : (K = null,
            V())
        }
        ,
        function() {
            X = new Date,
            K || (K = setTimeout(Z, J))
        }
        )),
        D(i, "readystatechange", ee)),
        C.picturefill = ce,
        C.fillImgs = ce,
        C.teardownRun = t,
        ce._ = C,
        e.picturefillCFG = {
            pf: C,
            push: function(e) {
                var t = e.shift();
                "function" == typeof C[t] ? C[t].apply(C, e) : (S[t] = e[0],
                L && C.fillImgs({
                    reselect: !0
                }))
            }
        };
        for (; y && y.length; )
            e.picturefillCFG.push(y.shift());
        e.picturefill = ce,
        "object" == typeof fe && "object" == typeof fe.exports ? fe.exports = ce : (me = function() {
            return ce
        }
        .call(de, pe, de, fe)) === l || (fe.exports = me),
        C.supPicture || (r["image/webp"] = (re = "image/webp",
        se = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
        (ie = new e.Image).onerror = function() {
            r[re] = !1,
            ce()
        }
        ,
        ie.onload = function() {
            r[re] = 1 === ie.width,
            ce()
        }
        ,
        ie.src = se,
        "pending"))
    }(window, document)
}
, function(e, t) {
    var n, r;
    n = window,
    r = function(r, u) {
        "use strict";
        if (!u.getElementsByClassName)
            return;
        var f, d, p = u.documentElement, i = r.Date, s = r.HTMLPictureElement, a = "addEventListener", m = "getAttribute", t = r[a], h = r.setTimeout, n = r.requestAnimationFrame || h, o = r.requestIdleCallback, g = /^picture$/i, c = ["load", "error", "lazyincluded", "_lazyloaded"], l = {}, A = Array.prototype.forEach, v = function(e, t) {
            return l[t] || (l[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
            l[t].test(e[m]("class") || "") && l[t]
        }, y = function(e, t) {
            v(e, t) || e.setAttribute("class", (e[m]("class") || "").trim() + " " + t)
        }, z = function(e, t) {
            var n;
            (n = v(e, t)) && e.setAttribute("class", (e[m]("class") || "").replace(n, " "))
        }, w = function(t, n, e) {
            var r = e ? a : "removeEventListener";
            e && w(t, n),
            c.forEach(function(e) {
                t[r](e, n)
            })
        }, b = function(e, t, n, r, s) {
            var i = u.createEvent("CustomEvent");
            return n || (n = {}),
            n.instance = f,
            i.initCustomEvent(t, !r, !s, n),
            e.dispatchEvent(i),
            i
        }, C = function(e, t) {
            var n;
            !s && (n = r.picturefill || d.pf) ? n({
                reevaluate: !0,
                elements: [e]
            }) : t && t.src && (e.src = t.src)
        }, S = function(e, t) {
            return (getComputedStyle(e, null) || {})[t]
        }, x = function(e, t, n) {
            for (n = n || e.offsetWidth; n < d.minSize && t && !e._lazysizesWidth; )
                n = t.offsetWidth,
                t = t.parentNode;
            return n
        }, E = (R = [],
        L = [],
        _ = R,
        N = function() {
            var e = _;
            for (_ = R.length ? L : R,
            P = !(M = !0); e.length; )
                e.shift()();
            M = !1
        }
        ,
        B = function(e, t) {
            M && !t ? e.apply(this, arguments) : (_.push(e),
            P || (P = !0,
            (u.hidden ? h : n)(N)))
        }
        ,
        B._lsFlush = N,
        B), e = function(n, e) {
            return e ? function() {
                E(n)
            }
            : function() {
                var e = this
                  , t = arguments;
                E(function() {
                    n.apply(e, t)
                })
            }
        }, T = function(e) {
            var t, n, r = function() {
                t = null,
                e()
            }, s = function() {
                var e = i.now() - n;
                e < 99 ? h(s, 99 - e) : (o || r)(r)
            };
            return function() {
                n = i.now(),
                t || (t = h(s, 99))
            }
        };
        var M, P, R, L, _, N, B;
        !function() {
            var e, t = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 300
            };
            for (e in d = r.lazySizesConfig || r.lazysizesConfig || {},
            t)
                e in d || (d[e] = t[e]);
            r.lazySizesConfig = d,
            h(function() {
                d.init && $()
            })
        }();
        var k = (ce = /^img$/i,
        le = /^iframe$/i,
        ue = "onscroll"in r && !/glebot/.test(navigator.userAgent),
        fe = 0,
        de = 0,
        pe = -1,
        me = function(e) {
            de--,
            e && e.target && w(e.target, me),
            (!e || de < 0 || !e.target) && (de = 0)
        }
        ,
        he = function(e, t) {
            var n, r = e, s = "hidden" == S(u.body, "visibility") || "hidden" != S(e, "visibility");
            for (J -= t,
            Z += t,
            K -= t,
            X += t; s && (r = r.offsetParent) && r != u.body && r != p; )
                (s = 0 < (S(r, "opacity") || 1)) && "visible" != S(r, "overflow") && (n = r.getBoundingClientRect(),
                s = X > n.left && K < n.right && Z > n.top - 1 && J < n.bottom + 1);
            return s
        }
        ,
        ge = function() {
            var e, t, n, r, s, i, a, o, c, l = f.elements;
            if ((q = d.loadMode) && de < 8 && (e = l.length)) {
                t = 0,
                pe++,
                null == ee && ("expand"in d || (d.expand = 500 < p.clientHeight && 500 < p.clientWidth ? 500 : 370),
                Y = d.expand,
                ee = Y * d.expFactor),
                fe < ee && de < 1 && 2 < pe && 2 < q && !u.hidden ? (fe = ee,
                pe = 0) : fe = 1 < q && 1 < pe && de < 6 ? Y : 0;
                for (; t < e; t++)
                    if (l[t] && !l[t]._lazyRace)
                        if (ue)
                            if ((o = l[t][m]("data-expand")) && (i = 1 * o) || (i = fe),
                            c !== i && (G = innerWidth + i * te,
                            V = innerHeight + i,
                            a = -1 * i,
                            c = i),
                            n = l[t].getBoundingClientRect(),
                            (Z = n.bottom) >= a && (J = n.top) <= V && (X = n.right) >= a * te && (K = n.left) <= G && (Z || X || K || J) && (d.loadHidden || "hidden" != S(l[t], "visibility")) && (H && de < 3 && !o && (q < 3 || pe < 4) || he(l[t], i))) {
                                if (Ce(l[t]),
                                s = !0,
                                9 < de)
                                    break
                            } else
                                !s && H && !r && de < 4 && pe < 4 && 2 < q && (F[0] || d.preloadAfterLoad) && (F[0] || !o && (Z || X || K || J || "auto" != l[t][m](d.sizesAttr))) && (r = F[0] || l[t]);
                        else
                            Ce(l[t]);
                r && !s && Ce(r)
            }
        }
        ,
        ne = ge,
        se = 0,
        ie = d.ricTimeout,
        ae = function() {
            re = !1,
            se = i.now(),
            ne()
        }
        ,
        oe = o && d.ricTimeout ? function() {
            o(ae, {
                timeout: ie
            }),
            ie !== d.ricTimeout && (ie = d.ricTimeout)
        }
        : e(function() {
            h(ae)
        }, !0),
        Ae = function(e) {
            var t;
            (e = !0 === e) && (ie = 33),
            re || (re = !0,
            (t = 125 - (i.now() - se)) < 0 && (t = 0),
            e || t < 9 && o ? oe() : h(oe, t))
        }
        ,
        ve = function(e) {
            y(e.target, d.loadedClass),
            z(e.target, d.loadingClass),
            w(e.target, ze),
            b(e.target, "lazyloaded")
        }
        ,
        ye = e(ve),
        ze = function(e) {
            ye({
                target: e.target
            })
        }
        ,
        we = function(e) {
            var t, n = e[m](d.srcsetAttr);
            (t = d.customMedia[e[m]("data-media") || e[m]("media")]) && e.setAttribute("media", t),
            n && e.setAttribute("srcset", n)
        }
        ,
        be = e(function(e, t, n, r, s) {
            var i, a, o, c, l, u;
            (l = b(e, "lazybeforeunveil", t)).defaultPrevented || (r && (n ? y(e, d.autosizesClass) : e.setAttribute("sizes", r)),
            a = e[m](d.srcsetAttr),
            i = e[m](d.srcAttr),
            s && (o = e.parentNode,
            c = o && g.test(o.nodeName || "")),
            u = t.firesLoad || "src"in e && (a || i || c),
            l = {
                target: e
            },
            u && (w(e, me, !0),
            clearTimeout(j),
            j = h(me, 2500),
            y(e, d.loadingClass),
            w(e, ze, !0)),
            c && A.call(o.getElementsByTagName("source"), we),
            a ? e.setAttribute("srcset", a) : i && !c && (le.test(e.nodeName) ? function(t, n) {
                try {
                    t.contentWindow.location.replace(n)
                } catch (e) {
                    t.src = n
                }
            }(e, i) : e.src = i),
            s && (a || c) && C(e, {
                src: i
            })),
            e._lazyRace && delete e._lazyRace,
            z(e, d.lazyClass),
            E(function() {
                (!u || e.complete && 1 < e.naturalWidth) && (u ? me(l) : de--,
                ve(l))
            }, !0)
        }),
        Ce = function(e) {
            var t, n = ce.test(e.nodeName), r = n && (e[m](d.sizesAttr) || e[m]("sizes")), s = "auto" == r;
            (!s && H || !n || !e[m]("src") && !e.srcset || e.complete || v(e, d.errorClass) || !v(e, d.lazyClass)) && (t = b(e, "lazyunveilread").detail,
            s && W.updateElem(e, !0, e.offsetWidth),
            e._lazyRace = !0,
            de++,
            be(e, t, s, r, n))
        }
        ,
        Se = function() {
            if (!H)
                if (i.now() - Q < 999)
                    h(Se, 999);
                else {
                    var e = T(function() {
                        d.loadMode = 3,
                        Ae()
                    });
                    H = !0,
                    d.loadMode = 3,
                    Ae(),
                    t("scroll", function() {
                        3 == d.loadMode && (d.loadMode = 2),
                        e()
                    }, !0)
                }
        }
        ,
        {
            _: function() {
                Q = i.now(),
                f.elements = u.getElementsByClassName(d.lazyClass),
                F = u.getElementsByClassName(d.lazyClass + " " + d.preloadClass),
                te = d.hFac,
                t("scroll", Ae, !0),
                t("resize", Ae, !0),
                r.MutationObserver ? new MutationObserver(Ae).observe(p, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0
                }) : (p[a]("DOMNodeInserted", Ae, !0),
                p[a]("DOMAttrModified", Ae, !0),
                setInterval(Ae, 999)),
                t("hashchange", Ae, !0),
                ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
                    u[a](e, Ae, !0)
                }),
                /d$|^c/.test(u.readyState) ? Se() : (t("load", Se),
                u[a]("DOMContentLoaded", Ae),
                h(Se, 2e4)),
                f.elements.length ? (ge(),
                E._lsFlush()) : Ae()
            },
            checkElems: Ae,
            unveil: Ce
        })
          , W = (I = e(function(e, t, n, r) {
            var s, i, a;
            if (e._lazysizesWidth = r,
            r += "px",
            e.setAttribute("sizes", r),
            g.test(t.nodeName || ""))
                for (s = t.getElementsByTagName("source"),
                i = 0,
                a = s.length; i < a; i++)
                    s[i].setAttribute("sizes", r);
            n.detail.dataAttr || C(e, n.detail)
        }),
        O = function(e, t, n) {
            var r, s = e.parentNode;
            s && (n = x(e, s, n),
            (r = b(e, "lazybeforesizes", {
                width: n,
                dataAttr: !!t
            })).defaultPrevented || (n = r.detail.width) && n !== e._lazysizesWidth && I(e, s, r, n))
        }
        ,
        U = T(function() {
            var e, t = D.length;
            if (t)
                for (e = 0; e < t; e++)
                    O(D[e])
        }),
        {
            _: function() {
                D = u.getElementsByClassName(d.autosizesClass),
                t("resize", U)
            },
            checkElems: U,
            updateElem: O
        })
          , $ = function() {
            $.i || ($.i = !0,
            W._(),
            k._())
        };
        var D, I, O, U;
        var F, H, j, q, Q, G, V, J, K, X, Z, Y, ee, te, ne, re, se, ie, ae, oe, ce, le, ue, fe, de, pe, me, he, ge, Ae, ve, ye, ze, we, be, Ce, Se;
        return f = {
            cfg: d,
            autoSizer: W,
            loader: k,
            init: $,
            uP: C,
            aC: y,
            rC: z,
            hC: v,
            fire: b,
            gW: x,
            rAF: E
        }
    }(n, n.document),
    n.lazySizes = r,
    "object" == typeof e && e.exports && (e.exports = r)
}
]);
