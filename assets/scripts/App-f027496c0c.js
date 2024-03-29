!function(n) {
    var r = {};
    function i(e) {
        if (r[e])
            return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i),
        t.l = !0,
        t.exports
    }
    i.m = n,
    i.c = r,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 2)
}([function($t, zt, e) {
    var Xt;
    !function(e, t) {
        "use strict";
        "object" == typeof $t && "object" == typeof $t.exports ? $t.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return t(e)
        }
        : t(e)
    }("undefined" != typeof window ? window : this, function(C, e) {
        "use strict";
        var t = []
          , k = C.document
          , r = Object.getPrototypeOf
          , a = t.slice
          , g = t.concat
          , l = t.push
          , i = t.indexOf
          , n = {}
          , o = n.toString
          , h = n.hasOwnProperty
          , s = h.toString
          , u = s.call(Object)
          , m = {};
        function v(e, t) {
            var n = (t = t || k).createElement("script");
            n.text = e,
            t.head.appendChild(n).parentNode.removeChild(n)
        }
        var c = "3.2.1"
          , S = function(e, t) {
            return new S.fn.init(e,t)
        }
          , f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , p = /^-ms-/
          , d = /-([a-z])/g
          , y = function(e, t) {
            return t.toUpperCase()
        };
        function x(e) {
            var t = !!e && "length"in e && e.length
              , n = S.type(e);
            return "function" !== n && !S.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        S.fn = S.prototype = {
            jquery: c,
            constructor: S,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = S.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return S.each(this, e)
            },
            map: function(n) {
                return this.pushStack(S.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: t.sort,
            splice: t.splice
        },
        S.extend = S.fn.extend = function() {
            var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s,
            s = arguments[a] || {},
            a++),
            "object" == typeof s || S.isFunction(s) || (s = {}),
            a === l && (s = this,
            a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        n = s[t],
                        s !== (r = e[t]) && (u && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (o = i ? (i = !1,
                        n && Array.isArray(n) ? n : []) : n && S.isPlainObject(n) ? n : {},
                        s[t] = S.extend(u, o, r)) : void 0 !== r && (s[t] = r));
            return s
        }
        ,
        S.extend({
            expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === S.type(e)
            },
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = S.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && s.call(n) === u)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                v(e)
            },
            camelCase: function(e) {
                return e.replace(p, "ms-").replace(d, y)
            },
            each: function(e, t) {
                var n, r = 0;
                if (x(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(f, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (x(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : i.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                    !t(e[i], i) !== s && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0, s = [];
                if (x(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && s.push(i);
                else
                    for (o in e)
                        null != (i = t(e[o], o, n)) && s.push(i);
                return g.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t],
                t = e,
                e = n),
                S.isFunction(e))
                    return r = a.call(arguments, 2),
                    (i = function() {
                        return e.apply(t || this, r.concat(a.call(arguments)))
                    }
                    ).guid = e.guid = e.guid || S.guid++,
                    i
            },
            now: Date.now,
            support: m
        }),
        "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
        var w = function(n) {
            var e, d, w, o, i, h, f, g, b, l, u, T, C, s, k, m, a, c, v, S = "sizzle" + 1 * new Date, y = n.document, E = 0, r = 0, p = se(), x = se(), A = se(), j = function(e, t) {
                return e === t && (u = !0),
                0
            }, D = {}.hasOwnProperty, t = [], N = t.pop, q = t.push, L = t.push, H = t.slice, O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", F = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + F + "*(" + W + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + F + "*\\]", R = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", I = new RegExp(F + "+","g"), _ = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$","g"), B = new RegExp("^" + F + "*," + F + "*"), $ = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"), z = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]","g"), X = new RegExp(R), U = new RegExp("^" + W + "$"), V = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                TAG: new RegExp("^(" + W + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)","i"),
                bool: new RegExp("^(?:" + P + ")$","i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)","i")
            }, Q = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)","ig"), ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function() {
                T()
            }, ie = ye(function(e) {
                return !0 === e.disabled && ("form"in e || "label"in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                L.apply(t = H.call(y.childNodes), y.childNodes),
                t[y.childNodes.length].nodeType
            } catch (e) {
                L = {
                    apply: t.length ? function(e, t) {
                        q.apply(e, H.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            function oe(e, t, n, r) {
                var i, o, s, a, l, u, c, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
                if (n = n || [],
                "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p)
                    return n;
                if (!r && ((t ? t.ownerDocument || t : y) !== C && T(t),
                t = t || C,
                k)) {
                    if (11 !== p && (l = K.exec(e)))
                        if (i = l[1]) {
                            if (9 === p) {
                                if (!(s = t.getElementById(i)))
                                    return n;
                                if (s.id === i)
                                    return n.push(s),
                                    n
                            } else if (f && (s = f.getElementById(i)) && v(t, s) && s.id === i)
                                return n.push(s),
                                n
                        } else {
                            if (l[2])
                                return L.apply(n, t.getElementsByTagName(e)),
                                n;
                            if ((i = l[3]) && d.getElementsByClassName && t.getElementsByClassName)
                                return L.apply(n, t.getElementsByClassName(i)),
                                n
                        }
                    if (d.qsa && !A[e + " "] && (!m || !m.test(e))) {
                        if (1 !== p)
                            f = t,
                            c = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = S),
                            o = (u = h(e)).length; o--; )
                                u[o] = "#" + a + " " + ve(u[o]);
                            c = u.join(","),
                            f = J.test(e) && ge(t.parentNode) || t
                        }
                        if (c)
                            try {
                                return L.apply(n, f.querySelectorAll(c)),
                                n
                            } catch (e) {} finally {
                                a === S && t.removeAttribute("id")
                            }
                    }
                }
                return g(e.replace(_, "$1"), t, n, r)
            }
            function se() {
                var r = [];
                return function e(t, n) {
                    return r.push(t + " ") > w.cacheLength && delete e[r.shift()],
                    e[t + " "] = n
                }
            }
            function ae(e) {
                return e[S] = !0,
                e
            }
            function le(e) {
                var t = C.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function ue(e, t) {
                for (var n = e.split("|"), r = n.length; r--; )
                    w.attrHandle[n[r]] = t
            }
            function ce(e, t) {
                var n = t && e
                  , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r)
                    return r;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function fe(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }
            function pe(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }
            function de(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function he(s) {
                return ae(function(o) {
                    return o = +o,
                    ae(function(e, t) {
                        for (var n, r = s([], e.length, o), i = r.length; i--; )
                            e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }
            function ge(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (e in d = oe.support = {},
            i = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            T = oe.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : y;
                return r !== C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement,
                k = !i(C),
                y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)),
                d.attributes = le(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                d.getElementsByTagName = le(function(e) {
                    return e.appendChild(C.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                d.getElementsByClassName = G.test(C.getElementsByClassName),
                d.getById = le(function(e) {
                    return s.appendChild(e).id = S,
                    !C.getElementsByName || !C.getElementsByName(S).length
                }),
                d.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && k) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (w.filter.ID = function(e) {
                    var n = e.replace(Z, ee);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }
                ,
                w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && k) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o];
                            for (i = t.getElementsByName(e),
                            r = 0; o = i[r++]; )
                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                    return [o]
                        }
                        return []
                    }
                }
                ),
                w.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" !== e)
                        return o;
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                ,
                w.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && k)
                        return t.getElementsByClassName(e)
                }
                ,
                a = [],
                m = [],
                (d.qsa = G.test(C.querySelectorAll)) && (le(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + P + ")"),
                    e.querySelectorAll("[id~=" + S + "-]").length || m.push("~="),
                    e.querySelectorAll(":checked").length || m.push(":checked"),
                    e.querySelectorAll("a#" + S + "+*").length || m.push(".#.+[+~]")
                }),
                le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                    s.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    m.push(",.*:")
                })),
                (d.matchesSelector = G.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                    d.disconnectedMatch = c.call(e, "*"),
                    c.call(e, "[s!='']:x"),
                    a.push("!=", R)
                }),
                m = m.length && new RegExp(m.join("|")),
                a = a.length && new RegExp(a.join("|")),
                t = G.test(s.compareDocumentPosition),
                v = t || G.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                j = t ? function(e, t) {
                    if (e === t)
                        return u = !0,
                        0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && v(y, e) ? -1 : t === C || t.ownerDocument === y && v(y, t) ? 1 : l ? O(l, e) - O(l, t) : 0 : 4 & n ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return u = !0,
                        0;
                    var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], a = [t];
                    if (!i || !o)
                        return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : l ? O(l, e) - O(l, t) : 0;
                    if (i === o)
                        return ce(e, t);
                    for (n = e; n = n.parentNode; )
                        s.unshift(n);
                    for (n = t; n = n.parentNode; )
                        a.unshift(n);
                    for (; s[r] === a[r]; )
                        r++;
                    return r ? ce(s[r], a[r]) : s[r] === y ? -1 : a[r] === y ? 1 : 0
                }
                ),
                C
            }
            ,
            oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }
            ,
            oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e),
                t = t.replace(z, "='$1']"),
                d.matchesSelector && k && !A[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t)))
                    try {
                        var n = c.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) {}
                return 0 < oe(t, C, null, [e]).length
            }
            ,
            oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e),
                v(e, t)
            }
            ,
            oe.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = w.attrHandle[t.toLowerCase()]
                  , r = n && D.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                return void 0 !== r ? r : d.attributes || !k ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            oe.escape = function(e) {
                return (e + "").replace(te, ne)
            }
            ,
            oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            oe.uniqueSort = function(e) {
                var t, n = [], r = 0, i = 0;
                if (u = !d.detectDuplicates,
                l = !d.sortStable && e.slice(0),
                e.sort(j),
                u) {
                    for (; t = e[i++]; )
                        t === e[i] && (r = n.push(i));
                    for (; r--; )
                        e.splice(n[r], 1)
                }
                return l = null,
                e
            }
            ,
            o = oe.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += o(t);
                return n
            }
            ,
            (w = oe.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = oe.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "",
                            "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(I, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3)
                          , y = "last" !== h.slice(-4)
                          , x = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        }
                        : function(e, t, n) {
                            var r, i, o, s, a, l, u = v !== y ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                            if (c) {
                                if (v) {
                                    for (; u; ) {
                                        for (s = e; s = s[u]; )
                                            if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType)
                                                return !1;
                                        l = u = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild],
                                y && p) {
                                    for (d = (a = (r = (i = (o = (s = c)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === E && r[1]) && r[2],
                                    s = a && c.childNodes[a]; s = ++a && s && s[u] || (d = a = 0) || l.pop(); )
                                        if (1 === s.nodeType && ++d && s === e) {
                                            i[h] = [E, a, d];
                                            break
                                        }
                                } else if (p && (d = a = (r = (i = (o = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === E && r[1]),
                                !1 === d)
                                    for (; (s = ++a && s && s[u] || (d = a = 0) || l.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (p && ((i = (o = s[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [E, d]),
                                    s !== e)); )
                                        ;
                                return (d -= m) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return s[S] ? s(o) : 1 < s.length ? (t = [e, e, "", o],
                        w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            for (var n, r = s(e, o), i = r.length; i--; )
                                e[n = O(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return s(e, 0, t)
                        }
                        ) : s
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var r = []
                          , i = []
                          , a = f(e.replace(_, "$1"));
                        return a[S] ? ae(function(e, t, n, r) {
                            for (var i, o = a(e, null, r, []), s = e.length; s--; )
                                (i = o[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return r[0] = e,
                            a(r, null, n, i),
                            r[0] = null,
                            !i.pop()
                        }
                    }),
                    has: ae(function(t) {
                        return function(e) {
                            return 0 < oe(t, e).length
                        }
                    }),
                    contains: ae(function(t) {
                        return t = t.replace(Z, ee),
                        function(e) {
                            return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                        }
                    }),
                    lang: ae(function(n) {
                        return U.test(n || "") || oe.error("unsupported lang: " + n),
                        n = n.replace(Z, ee).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                        }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Y.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r; )
                            e.push(r);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                w.pseudos[e] = fe(e);
            for (e in {
                submit: !0,
                reset: !0
            })
                w.pseudos[e] = pe(e);
            function me() {}
            function ve(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                return r
            }
            function ye(a, e, t) {
                var l = e.dir
                  , u = e.next
                  , c = u || l
                  , f = t && "parentNode" === c
                  , p = r++;
                return e.first ? function(e, t, n) {
                    for (; e = e[l]; )
                        if (1 === e.nodeType || f)
                            return a(e, t, n);
                    return !1
                }
                : function(e, t, n) {
                    var r, i, o, s = [E, p];
                    if (n) {
                        for (; e = e[l]; )
                            if ((1 === e.nodeType || f) && a(e, t, n))
                                return !0
                    } else
                        for (; e = e[l]; )
                            if (1 === e.nodeType || f)
                                if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                                u && u === e.nodeName.toLowerCase())
                                    e = e[l] || e;
                                else {
                                    if ((r = i[c]) && r[0] === E && r[1] === p)
                                        return s[2] = r[2];
                                    if ((i[c] = s)[2] = a(e, t, n))
                                        return !0
                                }
                    return !1
                }
            }
            function xe(i) {
                return 1 < i.length ? function(e, t, n) {
                    for (var r = i.length; r--; )
                        if (!i[r](e, t, n))
                            return !1;
                    return !0
                }
                : i[0]
            }
            function we(e, t, n, r, i) {
                for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
                    (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                    u && t.push(a)));
                return s
            }
            function be(d, h, g, m, v, e) {
                return m && !m[S] && (m = be(m)),
                v && !v[S] && (v = be(v, e)),
                ae(function(e, t, n, r) {
                    var i, o, s, a = [], l = [], u = t.length, c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            oe(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : we(c, a, d, n, r), p = g ? v || (e ? d : u || m) ? [] : t : f;
                    if (g && g(f, p, n, r),
                    m)
                        for (i = we(p, l),
                        m(i, [], n, r),
                        o = i.length; o--; )
                            (s = i[o]) && (p[l[o]] = !(f[l[o]] = s));
                    if (e) {
                        if (v || d) {
                            if (v) {
                                for (i = [],
                                o = p.length; o--; )
                                    (s = p[o]) && i.push(f[o] = s);
                                v(null, p = [], i, r)
                            }
                            for (o = p.length; o--; )
                                (s = p[o]) && -1 < (i = v ? O(e, s) : a[o]) && (e[i] = !(t[i] = s))
                        }
                    } else
                        p = we(p === t ? p.splice(u, p.length) : p),
                        v ? v(null, t, p, r) : L.apply(t, p)
                })
            }
            function Te(e) {
                for (var i, t, n, r = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = ye(function(e) {
                    return e === i
                }, s, !0), u = ye(function(e) {
                    return -1 < O(i, e)
                }, s, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== b) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n));
                    return i = null,
                    r
                }
                ]; a < r; a++)
                    if (t = w.relative[e[a].type])
                        c = [ye(xe(c), t)];
                    else {
                        if ((t = w.filter[e[a].type].apply(null, e[a].matches))[S]) {
                            for (n = ++a; n < r && !w.relative[e[n].type]; n++)
                                ;
                            return be(1 < a && xe(c), 1 < a && ve(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(_, "$1"), t, a < n && Te(e.slice(a, n)), n < r && Te(e = e.slice(n)), n < r && ve(e))
                        }
                        c.push(t)
                    }
                return xe(c)
            }
            return me.prototype = w.filters = w.pseudos,
            w.setFilters = new me,
            h = oe.tokenize = function(e, t) {
                var n, r, i, o, s, a, l, u = x[e + " "];
                if (u)
                    return t ? 0 : u.slice(0);
                for (s = e,
                a = [],
                l = w.preFilter; s; ) {
                    for (o in n && !(r = B.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                    a.push(i = [])),
                    n = !1,
                    (r = $.exec(s)) && (n = r.shift(),
                    i.push({
                        value: n,
                        type: r[0].replace(_, " ")
                    }),
                    s = s.slice(n.length)),
                    w.filter)
                        !(r = V[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(),
                        i.push({
                            value: n,
                            type: o,
                            matches: r
                        }),
                        s = s.slice(n.length));
                    if (!n)
                        break
                }
                return t ? s.length : s ? oe.error(e) : x(e, a).slice(0)
            }
            ,
            f = oe.compile = function(e, t) {
                var n, m, v, y, x, r, i = [], o = [], s = A[e + " "];
                if (!s) {
                    for (t || (t = h(e)),
                    n = t.length; n--; )
                        (s = Te(t[n]))[S] ? i.push(s) : o.push(s);
                    (s = A(e, (m = o,
                    y = 0 < (v = i).length,
                    x = 0 < m.length,
                    r = function(e, t, n, r, i) {
                        var o, s, a, l = 0, u = "0", c = e && [], f = [], p = b, d = e || x && w.find.TAG("*", i), h = E += null == p ? 1 : Math.random() || .1, g = d.length;
                        for (i && (b = t === C || t || i); u !== g && null != (o = d[u]); u++) {
                            if (x && o) {
                                for (s = 0,
                                t || o.ownerDocument === C || (T(o),
                                n = !k); a = m[s++]; )
                                    if (a(o, t || C, n)) {
                                        r.push(o);
                                        break
                                    }
                                i && (E = h)
                            }
                            y && ((o = !a && o) && l--,
                            e && c.push(o))
                        }
                        if (l += u,
                        y && u !== l) {
                            for (s = 0; a = v[s++]; )
                                a(c, f, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; u--; )
                                        c[u] || f[u] || (f[u] = N.call(r));
                                f = we(f)
                            }
                            L.apply(r, f),
                            i && !e && 0 < f.length && 1 < l + v.length && oe.uniqueSort(r)
                        }
                        return i && (E = h,
                        b = p),
                        c
                    }
                    ,
                    y ? ae(r) : r))).selector = e
                }
                return s
            }
            ,
            g = oe.select = function(e, t, n, r) {
                var i, o, s, a, l, u = "function" == typeof e && e, c = !r && h(e = u.selector || e);
                if (n = n || [],
                1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && k && w.relative[o[1].type]) {
                        if (!(t = (w.find.ID(s.matches[0].replace(Z, ee), t) || [])[0]))
                            return n;
                        u && (t = t.parentNode),
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = V.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                    !w.relative[a = s.type]); )
                        if ((l = w.find[a]) && (r = l(s.matches[0].replace(Z, ee), J.test(o[0].type) && ge(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                            !(e = r.length && ve(o)))
                                return L.apply(n, r),
                                n;
                            break
                        }
                }
                return (u || f(e, c))(r, t, !k, n, !t || J.test(e) && ge(t.parentNode) || t),
                n
            }
            ,
            d.sortStable = S.split("").sort(j).join("") === S,
            d.detectDuplicates = !!u,
            T(),
            d.sortDetached = le(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
            }),
            le(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || ue("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            d.attributes && le(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || ue("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            le(function(e) {
                return null == e.getAttribute("disabled")
            }) || ue(P, function(e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            oe
        }(C);
        S.find = w,
        S.expr = w.selectors,
        S.expr[":"] = S.expr.pseudos,
        S.uniqueSort = S.unique = w.uniqueSort,
        S.text = w.getText,
        S.isXMLDoc = w.isXML,
        S.contains = w.contains,
        S.escapeSelector = w.escape;
        var b = function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && S(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        }
          , T = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , E = S.expr.match.needsContext;
        function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
          , D = /^.[^:#\[\.,]*$/;
        function N(e, n, r) {
            return S.isFunction(n) ? S.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r
            }) : n.nodeType ? S.grep(e, function(e) {
                return e === n !== r
            }) : "string" != typeof n ? S.grep(e, function(e) {
                return -1 < i.call(n, e) !== r
            }) : D.test(n) ? S.filter(n, e, r) : (n = S.filter(n, e),
            S.grep(e, function(e) {
                return -1 < i.call(n, e) !== r && 1 === e.nodeType
            }))
        }
        S.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        S.fn.extend({
            find: function(e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(S(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (S.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                t = 0; t < r; t++)
                    S.find(e, i[t], n);
                return 1 < r ? S.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(N(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(N(this, e || [], !0))
            },
            is: function(e) {
                return !!N(this, "string" == typeof e && E.test(e) ? S(e) : e || [], !1).length
            }
        });
        var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (S.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || q,
            "string" != typeof e)
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : S.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)),
                j.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        S.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = k.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        ).prototype = S.fn,
        q = S(k);
        var H = /^(?:parents|prev(?:Until|All))/
          , O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function P(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        S.fn.extend({
            has: function(e) {
                var t = S(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (S.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0, i = this.length, o = [], s = "string" != typeof e && S(e);
                if (!E.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        S.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return b(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return b(e, "parentNode", n)
            },
            next: function(e) {
                return P(e, "nextSibling")
            },
            prev: function(e) {
                return P(e, "previousSibling")
            },
            nextAll: function(e) {
                return b(e, "nextSibling")
            },
            prevAll: function(e) {
                return b(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return b(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return b(e, "previousSibling", n)
            },
            siblings: function(e) {
                return T((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return T(e.firstChild)
            },
            contents: function(e) {
                return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e),
                S.merge([], e.childNodes))
            }
        }, function(r, i) {
            S.fn[r] = function(e, t) {
                var n = S.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e),
                t && "string" == typeof t && (n = S.filter(t, n)),
                1 < this.length && (O[r] || S.uniqueSort(n),
                H.test(r) && n.reverse()),
                this.pushStack(n)
            }
        });
        var F = /[^\x20\t\r\n\f]+/g;
        function W(e) {
            return e
        }
        function M(e) {
            throw e
        }
        function R(e, t, n, r) {
            var i;
            try {
                e && S.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && S.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        S.Callbacks = function(r) {
            var e, n;
            r = "string" == typeof r ? (e = r,
            n = {},
            S.each(e.match(F) || [], function(e, t) {
                n[t] = !0
            }),
            n) : S.extend({}, r);
            var i, t, o, s, a = [], l = [], u = -1, c = function() {
                for (s = s || r.once,
                o = i = !0; l.length; u = -1)
                    for (t = l.shift(); ++u < a.length; )
                        !1 === a[u].apply(t[0], t[1]) && r.stopOnFalse && (u = a.length,
                        t = !1);
                r.memory || (t = !1),
                i = !1,
                s && (a = t ? [] : "")
            }, f = {
                add: function() {
                    return a && (t && !i && (u = a.length - 1,
                    l.push(t)),
                    function n(e) {
                        S.each(e, function(e, t) {
                            S.isFunction(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== S.type(t) && n(t)
                        })
                    }(arguments),
                    t && !i && c()),
                    this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        for (var n; -1 < (n = S.inArray(t, a, n)); )
                            a.splice(n, 1),
                            n <= u && u--
                    }),
                    this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []),
                    this
                },
                disable: function() {
                    return s = l = [],
                    a = t = "",
                    this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [],
                    t || i || (a = t = ""),
                    this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                    l.push(t),
                    i || c()),
                    this
                },
                fire: function() {
                    return f.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!o
                }
            };
            return f
        }
        ,
        S.extend({
            Deferred: function(e) {
                var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
                  , i = "pending"
                  , s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = S.isFunction(i[t[4]]) && i[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && S.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }),
                            i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var l = 0;
                        function u(i, o, s, a) {
                            return function() {
                                var n = this
                                  , r = arguments
                                  , e = function() {
                                    var e, t;
                                    if (!(i < l)) {
                                        if ((e = s.apply(n, r)) === o.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                        S.isFunction(t) ? a ? t.call(e, u(l, o, W, a), u(l, o, M, a)) : (l++,
                                        t.call(e, u(l, o, W, a), u(l, o, M, a), u(l, o, W, o.notifyWith))) : (s !== W && (n = void 0,
                                        r = [e]),
                                        (a || o.resolveWith)(n, r))
                                    }
                                }
                                  , t = a ? e : function() {
                                    try {
                                        e()
                                    } catch (e) {
                                        S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                        l <= i + 1 && (s !== M && (n = void 0,
                                        r = [e]),
                                        o.rejectWith(n, r))
                                    }
                                }
                                ;
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                                C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(u(0, e, S.isFunction(r) ? r : W, e.notifyWith)),
                            o[1][3].add(u(0, e, S.isFunction(t) ? t : W)),
                            o[2][3].add(u(0, e, S.isFunction(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, s) : s
                    }
                }
                  , a = {};
                return S.each(o, function(e, t) {
                    var n = t[2]
                      , r = t[5];
                    s[t[1]] = n.add,
                    r && n.add(function() {
                        i = r
                    }, o[3 - e][2].disable, o[0][2].lock),
                    n.add(t[3].fire),
                    a[t[0]] = function() {
                        return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                        this
                    }
                    ,
                    a[t[0] + "With"] = n.fireWith
                }),
                s.promise(a),
                e && e.call(a, a),
                a
            },
            when: function(e) {
                var n = arguments.length
                  , t = n
                  , r = Array(t)
                  , i = a.call(arguments)
                  , o = S.Deferred()
                  , s = function(t) {
                    return function(e) {
                        r[t] = this,
                        i[t] = 1 < arguments.length ? a.call(arguments) : e,
                        --n || o.resolveWith(r, i)
                    }
                };
                if (n <= 1 && (R(e, o.done(s(t)).resolve, o.reject, !n),
                "pending" === o.state() || S.isFunction(i[t] && i[t].then)))
                    return o.then();
                for (; t--; )
                    R(i[t], s(t), o.reject);
                return o.promise()
            }
        });
        var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        S.Deferred.exceptionHook = function(e, t) {
            C.console && C.console.warn && e && I.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        S.readyException = function(e) {
            C.setTimeout(function() {
                throw e
            })
        }
        ;
        var _ = S.Deferred();
        function B() {
            k.removeEventListener("DOMContentLoaded", B),
            C.removeEventListener("load", B),
            S.ready()
        }
        S.fn.ready = function(e) {
            return _.then(e).catch(function(e) {
                S.readyException(e)
            }),
            this
        }
        ,
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || _.resolveWith(k, [S])
            }
        }),
        S.ready.then = _.then,
        "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(S.ready) : (k.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
        var $ = function(e, t, n, r, i, o, s) {
            var a = 0
              , l = e.length
              , u = null == n;
            if ("object" === S.type(n))
                for (a in i = !0,
                n)
                    $(e, t, a, n[a], !0, o, s);
            else if (void 0 !== r && (i = !0,
            S.isFunction(r) || (s = !0),
            u && (t = s ? (t.call(e, r),
            null) : (u = t,
            function(e, t, n) {
                return u.call(S(e), n)
            }
            )),
            t))
                for (; a < l; a++)
                    t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        }
          , z = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function X() {
            this.expando = S.expando + X.uid++
        }
        X.uid = 1,
        X.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[S.camelCase(t)] = n;
                else
                    for (r in t)
                        i[S.camelCase(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][S.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(S.camelCase) : (t = S.camelCase(t))in r ? [t] : t.match(F) || []).length;
                        for (; n--; )
                            delete r[t[n]]
                    }
                    (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t)
            }
        };
        var U = new X
          , V = new X
          , Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , Y = /[A-Z]/g;
        function G(e, t, n) {
            var r, i;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(Y, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Q.test(i) ? JSON.parse(i) : i)
                    } catch (e) {}
                    V.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        S.extend({
            hasData: function(e) {
                return V.hasData(e) || U.hasData(e)
            },
            data: function(e, t, n) {
                return V.access(e, t, n)
            },
            removeData: function(e, t) {
                V.remove(e, t)
            },
            _data: function(e, t, n) {
                return U.access(e, t, n)
            },
            _removeData: function(e, t) {
                U.remove(e, t)
            }
        }),
        S.fn.extend({
            data: function(n, e) {
                var t, r, i, o = this[0], s = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n ? this.each(function() {
                        V.set(this, n)
                    }) : $(this, function(e) {
                        var t;
                        if (o && void 0 === e)
                            return void 0 !== (t = V.get(o, n)) ? t : void 0 !== (t = G(o, n)) ? t : void 0;
                        this.each(function() {
                            V.set(this, n, e)
                        })
                    }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (i = V.get(o),
                1 === o.nodeType && !U.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--; )
                        s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = S.camelCase(r.slice(5)),
                        G(o, r, i[r]));
                    U.set(o, "hasDataAttrs", !0)
                }
                return i
            },
            removeData: function(e) {
                return this.each(function() {
                    V.remove(this, e)
                })
            }
        }),
        S.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                    r = U.get(e, t),
                    n && (!r || Array.isArray(n) ? r = U.access(e, t, S.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = S.queue(e, t)
                  , r = n.length
                  , i = n.shift()
                  , o = S._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(),
                r--),
                i && ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(e, function() {
                    S.dequeue(e, t)
                }, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return U.get(e, n) || U.access(e, n, {
                    empty: S.Callbacks("once memory").add(function() {
                        U.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        S.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t,
                t = "fx",
                e--),
                arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                    var e = S.queue(this, t, n);
                    S._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    S.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = S.Deferred(), o = this, s = this.length, a = function() {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; s--; )
                    (n = U.get(o[s], e + "queueHooks")) && n.empty && (r++,
                    n.empty.add(a));
                return a(),
                i.promise(t)
            }
        });
        var K = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , J = new RegExp("^(?:([+-])=|)(" + K + ")([a-z%]*)$","i")
          , Z = ["Top", "Right", "Bottom", "Left"]
          , ee = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display")
        }
          , te = function(e, t, n, r) {
            var i, o, s = {};
            for (o in t)
                s[o] = e.style[o],
                e.style[o] = t[o];
            for (o in i = n.apply(e, r || []),
            t)
                e.style[o] = s[o];
            return i
        };
        function ne(e, t, n, r) {
            var i, o = 1, s = 20, a = r ? function() {
                return r.cur()
            }
            : function() {
                return S.css(e, t, "")
            }
            , l = a(), u = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = (S.cssNumber[t] || "px" !== u && +l) && J.exec(S.css(e, t));
            if (c && c[3] !== u)
                for (u = u || c[3],
                n = n || [],
                c = +l || 1; c /= o = o || ".5",
                S.style(e, t, c + u),
                o !== (o = a() / l) && 1 !== o && --s; )
                    ;
            return n && (c = +c || +l || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = u,
            r.start = c,
            r.end = i)),
            i
        }
        var re = {};
        function ie(e, t) {
            for (var n, r, i, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)
                (r = e[c]).style && (n = r.style.display,
                t ? ("none" === n && (u[c] = U.get(r, "display") || null,
                u[c] || (r.style.display = "")),
                "" === r.style.display && ee(r) && (u[c] = (l = s = o = void 0,
                s = (i = r).ownerDocument,
                a = i.nodeName,
                (l = re[a]) || (o = s.body.appendChild(s.createElement(a)),
                l = S.css(o, "display"),
                o.parentNode.removeChild(o),
                "none" === l && (l = "block"),
                re[a] = l)))) : "none" !== n && (u[c] = "none",
                U.set(r, "display", n)));
            for (c = 0; c < f; c++)
                null != u[c] && (e[c].style.display = u[c]);
            return e
        }
        S.fn.extend({
            show: function() {
                return ie(this, !0)
            },
            hide: function() {
                return ie(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ee(this) ? S(this).show() : S(this).hide()
                })
            }
        });
        var oe = /^(?:checkbox|radio)$/i
          , se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , ae = /^$|\/(?:java|ecma)script/i
          , le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function ue(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && A(e, t) ? S.merge([e], n) : n
        }
        function ce(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"))
        }
        le.optgroup = le.option,
        le.tbody = le.tfoot = le.colgroup = le.caption = le.thead,
        le.th = le.td;
        var fe, pe, de = /<|&#?\w+;/;
        function he(e, t, n, r, i) {
            for (var o, s, a, l, u, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                if ((o = e[d]) || 0 === o)
                    if ("object" === S.type(o))
                        S.merge(p, o.nodeType ? [o] : o);
                    else if (de.test(o)) {
                        for (s = s || f.appendChild(t.createElement("div")),
                        a = (se.exec(o) || ["", ""])[1].toLowerCase(),
                        l = le[a] || le._default,
                        s.innerHTML = l[1] + S.htmlPrefilter(o) + l[2],
                        c = l[0]; c--; )
                            s = s.lastChild;
                        S.merge(p, s.childNodes),
                        (s = f.firstChild).textContent = ""
                    } else
                        p.push(t.createTextNode(o));
            for (f.textContent = "",
            d = 0; o = p[d++]; )
                if (r && -1 < S.inArray(o, r))
                    i && i.push(o);
                else if (u = S.contains(o.ownerDocument, o),
                s = ue(f.appendChild(o), "script"),
                u && ce(s),
                n)
                    for (c = 0; o = s[c++]; )
                        ae.test(o.type || "") && n.push(o);
            return f
        }
        fe = k.createDocumentFragment().appendChild(k.createElement("div")),
        (pe = k.createElement("input")).setAttribute("type", "radio"),
        pe.setAttribute("checked", "checked"),
        pe.setAttribute("name", "t"),
        fe.appendChild(pe),
        m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked,
        fe.innerHTML = "<textarea>x</textarea>",
        m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue;
        var ge = k.documentElement
          , me = /^key/
          , ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , ye = /^([^.]*)(?:\.(.+)|)/;
        function xe() {
            return !0
        }
        function we() {
            return !1
        }
        function be() {
            try {
                return k.activeElement
            } catch (e) {}
        }
        function Te(e, t, n, r, i, o) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                    Te(e, a, n, r, t[a], o);
                return e
            }
            if (null == r && null == i ? (i = n,
            r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
            r = void 0) : (i = r,
            r = n,
            n = void 0)),
            !1 === i)
                i = we;
            else if (!i)
                return e;
            return 1 === o && (s = i,
            (i = function(e) {
                return S().off(e),
                s.apply(this, arguments)
            }
            ).guid = s.guid || (s.guid = S.guid++)),
            e.each(function() {
                S.event.add(this, t, i, r, n)
            })
        }
        S.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, s, a, l, u, c, f, p, d, h, g, m = U.get(t);
                if (m)
                    for (n.handler && (n = (o = n).handler,
                    i = o.selector),
                    i && S.find.matchesSelector(ge, i),
                    n.guid || (n.guid = S.guid++),
                    (l = m.events) || (l = m.events = {}),
                    (s = m.handle) || (s = m.handle = function(e) {
                        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    u = (e = (e || "").match(F) || [""]).length; u--; )
                        d = g = (a = ye.exec(e[u]) || [])[1],
                        h = (a[2] || "").split(".").sort(),
                        d && (f = S.event.special[d] || {},
                        d = (i ? f.delegateType : f.bindType) || d,
                        f = S.event.special[d] || {},
                        c = S.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && S.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o),
                        (p = l[d]) || ((p = l[d] = []).delegateCount = 0,
                        f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener && t.addEventListener(d, s)),
                        f.add && (f.add.call(t, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        S.event.global[d] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, s, a, l, u, c, f, p, d, h, g, m = U.hasData(e) && U.get(e);
                if (m && (l = m.events)) {
                    for (u = (t = (t || "").match(F) || [""]).length; u--; )
                        if (d = g = (a = ye.exec(t[u]) || [])[1],
                        h = (a[2] || "").split(".").sort(),
                        d) {
                            for (f = S.event.special[d] || {},
                            p = l[d = (r ? f.delegateType : f.bindType) || d] || [],
                            a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = o = p.length; o--; )
                                c = p[o],
                                !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                                c.selector && p.delegateCount--,
                                f.remove && f.remove.call(e, c));
                            s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || S.removeEvent(e, d, m.handle),
                            delete l[d])
                        } else
                            for (d in l)
                                S.event.remove(e, d + t[u], n, r, !0);
                    S.isEmptyObject(l) && U.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, s, a = S.event.fix(e), l = new Array(arguments.length), u = (U.get(this, "events") || {})[a.type] || [], c = S.event.special[a.type] || {};
                for (l[0] = a,
                t = 1; t < arguments.length; t++)
                    l[t] = arguments[t];
                if (a.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                    for (s = S.event.handlers.call(this, a, u),
                    t = 0; (i = s[t++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = i.elem,
                        n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                            a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                            a.data = o.data,
                            void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (a.result = r) && (a.preventDefault(),
                            a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, s, a = [], l = t.delegateCount, u = e.target;
                if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (o = [],
                            s = {},
                            n = 0; n < l; n++)
                                void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < S(i, this).index(u) : S.find(i, this, null, [u]).length),
                                s[i] && o.push(r);
                            o.length && a.push({
                                elem: u,
                                handlers: o
                            })
                        }
                return u = this,
                l < t.length && a.push({
                    elem: u,
                    handlers: t.slice(l)
                }),
                a
            },
            addProp: function(t, e) {
                Object.defineProperty(S.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: S.isFunction(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[S.expando] ? e : new S.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== be() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === be() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && A(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(e) {
                        return A(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        S.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        S.Event = function(e, t) {
            if (!(this instanceof S.Event))
                return new S.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : we,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && S.extend(this, t),
            this.timeStamp = e && e.timeStamp || S.now(),
            this[S.expando] = !0
        }
        ,
        S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: we,
            isPropagationStopped: we,
            isImmediatePropagationStopped: we,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = xe,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = xe,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = xe,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        S.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, S.event.addProp),
        S.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, i) {
            S.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t, n = e.relatedTarget, r = e.handleObj;
                    return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                    t = r.handler.apply(this, arguments),
                    e.type = i),
                    t
                }
            }
        }),
        S.fn.extend({
            on: function(e, t, n, r) {
                return Te(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Te(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                    S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if ("object" != typeof e)
                    return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = we),
                    this.each(function() {
                        S.event.remove(this, e, n, t)
                    });
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
        });
        var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , ke = /<script|<style|<link/i
          , Se = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Ee = /^true\/(.*)/
          , Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function je(e, t) {
            return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(">tbody", e)[0] || e
        }
        function De(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function Ne(e) {
            var t = Ee.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function qe(e, t) {
            var n, r, i, o, s, a, l, u;
            if (1 === t.nodeType) {
                if (U.hasData(e) && (o = U.access(e),
                s = U.set(t, o),
                u = o.events))
                    for (i in delete s.handle,
                    s.events = {},
                    u)
                        for (n = 0,
                        r = u[i].length; n < r; n++)
                            S.event.add(t, i, u[i][n]);
                V.hasData(e) && (a = V.access(e),
                l = S.extend({}, a),
                V.set(t, l))
            }
        }
        function Le(n, r, i, o) {
            r = g.apply([], r);
            var e, t, s, a, l, u, c = 0, f = n.length, p = f - 1, d = r[0], h = S.isFunction(d);
            if (h || 1 < f && "string" == typeof d && !m.checkClone && Se.test(d))
                return n.each(function(e) {
                    var t = n.eq(e);
                    h && (r[0] = d.call(this, e, t.html())),
                    Le(t, r, i, o)
                });
            if (f && (t = (e = he(r, n[0].ownerDocument, !1, n, o)).firstChild,
            1 === e.childNodes.length && (e = t),
            t || o)) {
                for (a = (s = S.map(ue(e, "script"), De)).length; c < f; c++)
                    l = e,
                    c !== p && (l = S.clone(l, !0, !0),
                    a && S.merge(s, ue(l, "script"))),
                    i.call(n[c], l, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument,
                    S.map(s, Ne),
                    c = 0; c < a; c++)
                        l = s[c],
                        ae.test(l.type || "") && !U.access(l, "globalEval") && S.contains(u, l) && (l.src ? S._evalUrl && S._evalUrl(l.src) : v(l.textContent.replace(Ae, ""), u))
            }
            return n
        }
        function He(e, t, n) {
            for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                n || 1 !== r.nodeType || S.cleanData(ue(r)),
                r.parentNode && (n && S.contains(r.ownerDocument, r) && ce(ue(r, "script")),
                r.parentNode.removeChild(r));
            return e
        }
        S.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ce, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, s, a, l, u, c = e.cloneNode(!0), f = S.contains(e.ownerDocument, e);
                if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                    for (s = ue(c),
                    r = 0,
                    i = (o = ue(e)).length; r < i; r++)
                        a = o[r],
                        l = s[r],
                        void 0,
                        "input" === (u = l.nodeName.toLowerCase()) && oe.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
                if (t)
                    if (n)
                        for (o = o || ue(e),
                        s = s || ue(c),
                        r = 0,
                        i = o.length; r < i; r++)
                            qe(o[r], s[r]);
                    else
                        qe(e, c);
                return 0 < (s = ue(c, "script")).length && ce(s, !f && ue(e, "script")),
                c
            },
            cleanData: function(e) {
                for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (z(n)) {
                        if (t = n[U.expando]) {
                            if (t.events)
                                for (r in t.events)
                                    i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                            n[U.expando] = void 0
                        }
                        n[V.expando] && (n[V.expando] = void 0)
                    }
            }
        }),
        S.fn.extend({
            detach: function(e) {
                return He(this, e, !0)
            },
            remove: function(e) {
                return He(this, e)
            },
            text: function(e) {
                return $(this, function(e) {
                    return void 0 === e ? S.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Le(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Le(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Le(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Le(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (S.cleanData(ue(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return S.clone(this, e, t)
                })
            },
            html: function(e) {
                return $(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !ke.test(e) && !le[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = S.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (S.cleanData(ue(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return Le(this, arguments, function(e) {
                    var t = this.parentNode;
                    S.inArray(this, n) < 0 && (S.cleanData(ue(this)),
                    t && t.replaceChild(e, this))
                }, n)
            }
        }),
        S.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, s) {
            S.fn[e] = function(e) {
                for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                    t = o === i ? this : this.clone(!0),
                    S(r[o])[s](t),
                    l.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var Oe = /^margin/
          , Pe = new RegExp("^(" + K + ")(?!px)[a-z%]+$","i")
          , Fe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C),
            t.getComputedStyle(e)
        };
        function We(e, t, n) {
            var r, i, o, s, a = e.style;
            return (n = n || Fe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || S.contains(e.ownerDocument, e) || (s = S.style(e, t)),
            !m.pixelMarginRight() && Pe.test(s) && Oe.test(t) && (r = a.width,
            i = a.minWidth,
            o = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = r,
            a.minWidth = i,
            a.maxWidth = o)),
            void 0 !== s ? s + "" : s
        }
        function Me(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function e() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    s.innerHTML = "",
                    ge.appendChild(o);
                    var e = C.getComputedStyle(s);
                    t = "1%" !== e.top,
                    i = "2px" === e.marginLeft,
                    n = "4px" === e.width,
                    s.style.marginRight = "50%",
                    r = "4px" === e.marginRight,
                    ge.removeChild(o),
                    s = null
                }
            }
            var t, n, r, i, o = k.createElement("div"), s = k.createElement("div");
            s.style && (s.style.backgroundClip = "content-box",
            s.cloneNode(!0).style.backgroundClip = "",
            m.clearCloneStyle = "content-box" === s.style.backgroundClip,
            o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            o.appendChild(s),
            S.extend(m, {
                pixelPosition: function() {
                    return e(),
                    t
                },
                boxSizingReliable: function() {
                    return e(),
                    n
                },
                pixelMarginRight: function() {
                    return e(),
                    r
                },
                reliableMarginLeft: function() {
                    return e(),
                    i
                }
            }))
        }();
        var Re = /^(none|table(?!-c[ea]).+)/
          , Ie = /^--/
          , _e = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Be = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , $e = ["Webkit", "Moz", "ms"]
          , ze = k.createElement("div").style;
        function Xe(e) {
            var t = S.cssProps[e];
            return t || (t = S.cssProps[e] = function(e) {
                if (e in ze)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--; )
                    if ((e = $e[n] + t)in ze)
                        return e
            }(e) || e),
            t
        }
        function Ue(e, t, n) {
            var r = J.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }
        function Ve(e, t, n, r, i) {
            var o, s = 0;
            for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
                "margin" === n && (s += S.css(e, n + Z[o], !0, i)),
                r ? ("content" === n && (s -= S.css(e, "padding" + Z[o], !0, i)),
                "margin" !== n && (s -= S.css(e, "border" + Z[o] + "Width", !0, i))) : (s += S.css(e, "padding" + Z[o], !0, i),
                "padding" !== n && (s += S.css(e, "border" + Z[o] + "Width", !0, i)));
            return s
        }
        function Qe(e, t, n) {
            var r, i = Fe(e), o = We(e, t, i), s = "border-box" === S.css(e, "boxSizing", !1, i);
            return Pe.test(o) ? o : (r = s && (m.boxSizingReliable() || o === e.style[t]),
            "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
            (o = parseFloat(o) || 0) + Ve(e, t, n || (s ? "border" : "content"), r, i) + "px")
        }
        function Ye(e, t, n, r, i) {
            return new Ye.prototype.init(e,t,n,r,i)
        }
        S.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, s, a = S.camelCase(t), l = Ie.test(t), u = e.style;
                    if (l || (t = Xe(a)),
                    s = S.cssHooks[t] || S.cssHooks[a],
                    void 0 === n)
                        return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                    "string" === (o = typeof n) && (i = J.exec(n)) && i[1] && (n = ne(e, t, i),
                    o = "number"),
                    null != n && n == n && ("number" === o && (n += i && i[3] || (S.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    s && "set"in s && void 0 === (n = s.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, s, a = S.camelCase(t);
                return Ie.test(t) || (t = Xe(a)),
                (s = S.cssHooks[t] || S.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
                void 0 === i && (i = We(e, t, r)),
                "normal" === i && t in Be && (i = Be[t]),
                "" === n || n ? (o = parseFloat(i),
                !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }),
        S.each(["height", "width"], function(e, s) {
            S.cssHooks[s] = {
                get: function(e, t, n) {
                    if (t)
                        return !Re.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, s, n) : te(e, _e, function() {
                            return Qe(e, s, n)
                        })
                },
                set: function(e, t, n) {
                    var r, i = n && Fe(e), o = n && Ve(e, s, n, "border-box" === S.css(e, "boxSizing", !1, i), i);
                    return o && (r = J.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t,
                    t = S.css(e, s)),
                    Ue(0, t, o)
                }
            }
        }),
        S.cssHooks.marginLeft = Me(m.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        S.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, o) {
            S.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        n[i + Z[t] + o] = r[t] || r[t - 2] || r[0];
                    return n
                }
            },
            Oe.test(i) || (S.cssHooks[i + o].set = Ue)
        }),
        S.fn.extend({
            css: function(e, t) {
                return $(this, function(e, t, n) {
                    var r, i, o = {}, s = 0;
                    if (Array.isArray(t)) {
                        for (r = Fe(e),
                        i = t.length; s < i; s++)
                            o[t[s]] = S.css(e, t[s], !1, r);
                        return o
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }),
        ((S.Tween = Ye).prototype = {
            constructor: Ye,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                this.prop = n,
                this.easing = i || S.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = o || (S.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Ye.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ye.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Ye.propHooks[this.prop];
                return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : Ye.propHooks._default.set(this),
                this
            }
        }).init.prototype = Ye.prototype,
        (Ye.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = Ye.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        S.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        S.fx = Ye.prototype.init,
        S.fx.step = {};
        var Ge, Ke, Je, Ze, et = /^(?:toggle|show|hide)$/, tt = /queueHooks$/;
        function nt() {
            Ke && (!1 === k.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(nt) : C.setTimeout(nt, S.fx.interval),
            S.fx.tick())
        }
        function rt() {
            return C.setTimeout(function() {
                Ge = void 0
            }),
            Ge = S.now()
        }
        function it(e, t) {
            var n, r = 0, i = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                i["margin" + (n = Z[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
            i
        }
        function ot(e, t, n) {
            for (var r, i = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                if (r = i[o].call(n, t, e))
                    return r
        }
        function st(o, e, t) {
            var n, s, r = 0, i = st.prefilters.length, a = S.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (s)
                    return !1;
                for (var e = Ge || rt(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++)
                    u.tweens[r].run(n);
                return a.notifyWith(o, [u, n, t]),
                n < 1 && i ? t : (i || a.notifyWith(o, [u, 1, 0]),
                a.resolveWith(o, [u]),
                !1)
            }, u = a.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ge || rt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n),
                    n
                },
                stop: function(e) {
                    var t = 0
                      , n = e ? u.tweens.length : 0;
                    if (s)
                        return this;
                    for (s = !0; t < n; t++)
                        u.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [u, 1, 0]),
                    a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]),
                    this
                }
            }), c = u.props;
            for (!function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (i = t[r = S.camelCase(n)],
                    o = e[n],
                    Array.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                    n !== r && (e[r] = o,
                    delete e[n]),
                    (s = S.cssHooks[r]) && "expand"in s)
                        for (n in o = s.expand(o),
                        delete e[r],
                        o)
                            n in e || (e[n] = o[n],
                            t[n] = i);
                    else
                        t[r] = i
            }(c, u.opts.specialEasing); r < i; r++)
                if (n = st.prefilters[r].call(u, o, c, u.opts))
                    return S.isFunction(n.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = S.proxy(n.stop, n)),
                    n;
            return S.map(c, ot, u),
            S.isFunction(u.opts.start) && u.opts.start.call(o, u),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
            S.fx.timer(S.extend(l, {
                elem: o,
                anim: u,
                queue: u.opts.queue
            })),
            u
        }
        S.Animation = S.extend(st, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ne(n.elem, e, J.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                for (var n, r = 0, i = (e = S.isFunction(e) ? (t = e,
                ["*"]) : e.match(F)).length; r < i; r++)
                    n = e[r],
                    st.tweeners[n] = st.tweeners[n] || [],
                    st.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, s, a, l, u, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ee(e), m = U.get(e, "fxshow");
                for (r in n.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
                a = s.empty.fire,
                s.empty.fire = function() {
                    s.unqueued || a()
                }
                ),
                s.unqueued++,
                p.always(function() {
                    p.always(function() {
                        s.unqueued--,
                        S.queue(e, "fx").length || s.empty.fire()
                    })
                })),
                t)
                    if (i = t[r],
                    et.test(i)) {
                        if (delete t[r],
                        o = o || "toggle" === i,
                        i === (g ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r])
                                continue;
                            g = !0
                        }
                        d[r] = m && m[r] || S.style(e, r)
                    }
                if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    null == (u = m && m.display) && (u = U.get(e, "display")),
                    "none" === (c = S.css(e, "display")) && (u ? c = u : (ie([e], !0),
                    u = e.style.display || u,
                    c = S.css(e, "display"),
                    ie([e]))),
                    ("inline" === c || "inline-block" === c && null != u) && "none" === S.css(e, "float") && (l || (p.done(function() {
                        h.display = u
                    }),
                    null == u && (c = h.display,
                    u = "none" === c ? "" : c)),
                    h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                    p.always(function() {
                        h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                    })),
                    l = !1,
                    d)
                        l || (m ? "hidden"in m && (g = m.hidden) : m = U.access(e, "fxshow", {
                            display: u
                        }),
                        o && (m.hidden = !g),
                        g && ie([e], !0),
                        p.done(function() {
                            for (r in g || ie([e]),
                            U.remove(e, "fxshow"),
                            d)
                                S.style(e, r, d[r])
                        })),
                        l = ot(g ? m[r] : 0, r, p),
                        r in m || (m[r] = l.start,
                        g && (l.end = l.start,
                        l.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? st.prefilters.unshift(e) : st.prefilters.push(e)
            }
        }),
        S.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? S.extend({}, e) : {
                complete: n || !n && t || S.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !S.isFunction(t) && t
            };
            return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                S.isFunction(r.old) && r.old.call(this),
                r.queue && S.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        S.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ee).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = S.isEmptyObject(t)
                  , o = S.speed(e, n, r)
                  , s = function() {
                    var e = st(this, S.extend({}, t), o);
                    (i || U.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s,
                i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(i, e, o) {
                var s = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(o)
                };
                return "string" != typeof i && (o = e,
                e = i,
                i = void 0),
                e && !1 !== i && this.queue(i || "fx", []),
                this.each(function() {
                    var e = !0
                      , t = null != i && i + "queueHooks"
                      , n = S.timers
                      , r = U.get(this);
                    if (t)
                        r[t] && r[t].stop && s(r[t]);
                    else
                        for (t in r)
                            r[t] && r[t].stop && tt.test(t) && s(r[t]);
                    for (t = n.length; t--; )
                        n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                        e = !1,
                        n.splice(t, 1));
                    !e && o || S.dequeue(this, i)
                })
            },
            finish: function(s) {
                return !1 !== s && (s = s || "fx"),
                this.each(function() {
                    var e, t = U.get(this), n = t[s + "queue"], r = t[s + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                    for (t.finish = !0,
                    S.queue(this, s, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = i.length; e--; )
                        i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0),
                        i.splice(e, 1));
                    for (e = 0; e < o; e++)
                        n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }),
        S.each(["toggle", "show", "hide"], function(e, r) {
            var i = S.fn[r];
            S.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(it(r, !0), e, t, n)
            }
        }),
        S.each({
            slideDown: it("show"),
            slideUp: it("hide"),
            slideToggle: it("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            S.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        }),
        S.timers = [],
        S.fx.tick = function() {
            var e, t = 0, n = S.timers;
            for (Ge = S.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(),
            Ge = void 0
        }
        ,
        S.fx.timer = function(e) {
            S.timers.push(e),
            S.fx.start()
        }
        ,
        S.fx.interval = 13,
        S.fx.start = function() {
            Ke || (Ke = !0,
            nt())
        }
        ,
        S.fx.stop = function() {
            Ke = null
        }
        ,
        S.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        S.fn.delay = function(r, e) {
            return r = S.fx && S.fx.speeds[r] || r,
            e = e || "fx",
            this.queue(e, function(e, t) {
                var n = C.setTimeout(e, r);
                t.stop = function() {
                    C.clearTimeout(n)
                }
            })
        }
        ,
        Je = k.createElement("input"),
        Ze = k.createElement("select").appendChild(k.createElement("option")),
        Je.type = "checkbox",
        m.checkOn = "" !== Je.value,
        m.optSelected = Ze.selected,
        (Je = k.createElement("input")).value = "t",
        Je.type = "radio",
        m.radioValue = "t" === Je.value;
        var at, lt = S.expr.attrHandle;
        S.fn.extend({
            attr: function(e, t) {
                return $(this, S.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    S.removeAttr(this, e)
                })
            }
        }),
        S.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? at : void 0)),
                    void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                    n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!m.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, i = t && t.match(F);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++]; )
                        e.removeAttribute(n)
            }
        }),
        at = {
            set: function(e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = lt[t] || S.find.attr;
            lt[t] = function(e, t, n) {
                var r, i, o = t.toLowerCase();
                return n || (i = lt[o],
                lt[o] = r,
                r = null != s(e, t, n) ? o : null,
                lt[o] = i),
                r
            }
        });
        var ut = /^(?:input|select|textarea|button)$/i
          , ct = /^(?:a|area)$/i;
        function ft(e) {
            return (e.match(F) || []).join(" ")
        }
        function pt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        S.fn.extend({
            prop: function(e, t) {
                return $(this, S.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[S.propFix[e] || e]
                })
            }
        }),
        S.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                    i = S.propHooks[t]),
                    void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = S.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        m.optSelected || (S.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            S.propFix[this.toLowerCase()] = this
        }),
        S.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, s, a, l = 0;
                if (S.isFunction(t))
                    return this.each(function(e) {
                        S(this).addClass(t.call(this, e, pt(this)))
                    });
                if ("string" == typeof t && t)
                    for (e = t.match(F) || []; n = this[l++]; )
                        if (i = pt(n),
                        r = 1 === n.nodeType && " " + ft(i) + " ") {
                            for (s = 0; o = e[s++]; )
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (a = ft(r)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, s, a, l = 0;
                if (S.isFunction(t))
                    return this.each(function(e) {
                        S(this).removeClass(t.call(this, e, pt(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(F) || []; n = this[l++]; )
                        if (i = pt(n),
                        r = 1 === n.nodeType && " " + ft(i) + " ") {
                            for (s = 0; o = e[s++]; )
                                for (; -1 < r.indexOf(" " + o + " "); )
                                    r = r.replace(" " + o + " ", " ");
                            i !== (a = ft(r)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(i, t) {
                var o = typeof i;
                return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : S.isFunction(i) ? this.each(function(e) {
                    S(this).toggleClass(i.call(this, e, pt(this), t), t)
                }) : this.each(function() {
                    var e, t, n, r;
                    if ("string" === o)
                        for (t = 0,
                        n = S(this),
                        r = i.match(F) || []; e = r[t++]; )
                            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else
                        void 0 !== i && "boolean" !== o || ((e = pt(this)) && U.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : U.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++]; )
                    if (1 === n.nodeType && -1 < (" " + ft(pt(n)) + " ").indexOf(t))
                        return !0;
                return !1
            }
        });
        var dt = /\r/g;
        S.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                return arguments.length ? (i = S.isFunction(n),
                this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(dt, "") : null == e ? "" : e : void 0
            }
        }),
        S.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : ft(S.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : i.length;
                        for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (t = S(n).val(),
                                s)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = S.makeArray(t), s = i.length; s--; )
                            ((r = i[s]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        S.each(["radio", "checkbox"], function() {
            S.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = -1 < S.inArray(S(e).val(), t)
                }
            },
            m.checkOn || (S.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        });
        var ht = /^(?:focusinfocus|focusoutblur)$/;
        S.extend(S.event, {
            trigger: function(e, t, n, r) {
                var i, o, s, a, l, u, c, f = [n || k], p = h.call(e, "type") ? e.type : e, d = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = s = n = n || k,
                3 !== n.nodeType && 8 !== n.nodeType && !ht.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(),
                d.sort()),
                l = p.indexOf(":") < 0 && "on" + p,
                (e = e[S.expando] ? e : new S.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
                e.namespace = d.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = n),
                t = null == t ? [e] : S.makeArray(t, [e]),
                c = S.event.special[p] || {},
                r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                    if (!r && !c.noBubble && !S.isWindow(n)) {
                        for (a = c.delegateType || p,
                        ht.test(a + p) || (o = o.parentNode); o; o = o.parentNode)
                            f.push(o),
                            s = o;
                        s === (n.ownerDocument || k) && f.push(s.defaultView || s.parentWindow || C)
                    }
                    for (i = 0; (o = f[i++]) && !e.isPropagationStopped(); )
                        e.type = 1 < i ? a : c.bindType || p,
                        (u = (U.get(o, "events") || {})[e.type] && U.get(o, "handle")) && u.apply(o, t),
                        (u = l && o[l]) && u.apply && z(o) && (e.result = u.apply(o, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = p,
                    r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !z(n) || l && S.isFunction(n[p]) && !S.isWindow(n) && ((s = n[l]) && (n[l] = null),
                    n[S.event.triggered = p](),
                    S.event.triggered = void 0,
                    s && (n[l] = s)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var r = S.extend(new S.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                S.event.trigger(r, null, t)
            }
        }),
        S.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    S.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return S.event.trigger(e, t, n, !0)
            }
        }),
        S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            S.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }),
        S.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        m.focusin = "onfocusin"in C,
        m.focusin || S.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            var i = function(e) {
                S.event.simulate(r, e.target, S.event.fix(e))
            };
            S.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this
                      , t = U.access(e, r);
                    t || e.addEventListener(n, i, !0),
                    U.access(e, r, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this
                      , t = U.access(e, r) - 1;
                    t ? U.access(e, r, t) : (e.removeEventListener(n, i, !0),
                    U.remove(e, r))
                }
            }
        });
        var gt = C.location
          , mt = S.now()
          , vt = /\?/;
        S.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new C.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
            t
        }
        ;
        var yt = /\[\]$/
          , xt = /\r?\n/g
          , wt = /^(?:submit|button|image|reset|file)$/i
          , bt = /^(?:input|select|textarea|keygen)/i;
        function Tt(n, e, r, i) {
            var t;
            if (Array.isArray(e))
                S.each(e, function(e, t) {
                    r || yt.test(n) ? i(n, t) : Tt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
                });
            else if (r || "object" !== S.type(e))
                i(n, e);
            else
                for (t in e)
                    Tt(n + "[" + t + "]", e[t], r, i)
        }
        S.param = function(e, t) {
            var n, r = [], i = function(e, t) {
                var n = S.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
                S.each(e, function() {
                    i(this.name, this.value)
                });
            else
                for (n in e)
                    Tt(n, e[n], t, i);
            return r.join("&")
        }
        ,
        S.fn.extend({
            serialize: function() {
                return S.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !S(this).is(":disabled") && bt.test(this.nodeName) && !wt.test(e) && (this.checked || !oe.test(e))
                }).map(function(e, t) {
                    var n = S(this).val();
                    return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(xt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(xt, "\r\n")
                    }
                }).get()
            }
        });
        var Ct = /%20/g
          , kt = /#.*$/
          , St = /([?&])_=[^&]*/
          , Et = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , At = /^(?:GET|HEAD)$/
          , jt = /^\/\//
          , Dt = {}
          , Nt = {}
          , qt = "*/".concat("*")
          , Lt = k.createElement("a");
        function Ht(o) {
            return function(e, t) {
                "string" != typeof e && (t = e,
                e = "*");
                var n, r = 0, i = e.toLowerCase().match(F) || [];
                if (S.isFunction(t))
                    for (; n = i[r++]; )
                        "+" === n[0] ? (n = n.slice(1) || "*",
                        (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }
        function Ot(t, i, o, s) {
            var a = {}
              , l = t === Nt;
            function u(e) {
                var r;
                return a[e] = !0,
                S.each(t[e] || [], function(e, t) {
                    var n = t(i, o, s);
                    return "string" != typeof n || l || a[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                    u(n),
                    !1)
                }),
                r
            }
            return u(i.dataTypes[0]) || !a["*"] && u("*")
        }
        function Pt(e, t) {
            var n, r, i = S.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && S.extend(!0, e, r),
            e
        }
        Lt.href = gt.href,
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Pt(Pt(e, S.ajaxSettings), t) : Pt(S.ajaxSettings, e)
            },
            ajaxPrefilter: Ht(Dt),
            ajaxTransport: Ht(Nt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var c, f, p, n, d, r, h, g, i, o, m = S.ajaxSetup({}, t), v = m.context || m, y = m.context && (v.nodeType || v.jquery) ? S(v) : S.event, x = S.Deferred(), w = S.Callbacks("once memory"), b = m.statusCode || {}, s = {}, a = {}, l = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n)
                                for (n = {}; t = Et.exec(p); )
                                    n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                        s[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (m.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h)
                                T.always(e[T.status]);
                            else
                                for (t in e)
                                    b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return c && c.abort(t),
                        u(0, t),
                        this
                    }
                };
                if (x.promise(T),
                m.url = ((e || m.url || gt.href) + "").replace(jt, gt.protocol + "//"),
                m.type = t.method || t.type || m.method || m.type,
                m.dataTypes = (m.dataType || "*").toLowerCase().match(F) || [""],
                null == m.crossDomain) {
                    r = k.createElement("a");
                    try {
                        r.href = m.url,
                        r.href = r.href,
                        m.crossDomain = Lt.protocol + "//" + Lt.host != r.protocol + "//" + r.host
                    } catch (e) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = S.param(m.data, m.traditional)),
                Ot(Dt, m, t, T),
                h)
                    return T;
                for (i in (g = S.event && m.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                m.type = m.type.toUpperCase(),
                m.hasContent = !At.test(m.type),
                f = m.url.replace(kt, ""),
                m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ct, "+")) : (o = m.url.slice(f.length),
                m.data && (f += (vt.test(f) ? "&" : "?") + m.data,
                delete m.data),
                !1 === m.cache && (f = f.replace(St, "$1"),
                o = (vt.test(f) ? "&" : "?") + "_=" + mt++ + o),
                m.url = f + o),
                m.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
                S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
                (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType),
                T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : m.accepts["*"]),
                m.headers)
                    T.setRequestHeader(i, m.headers[i]);
                if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || h))
                    return T.abort();
                if (l = "abort",
                w.add(m.complete),
                T.done(m.success),
                T.fail(m.error),
                c = Ot(Nt, m, t, T)) {
                    if (T.readyState = 1,
                    g && y.trigger("ajaxSend", [T, m]),
                    h)
                        return T;
                    m.async && 0 < m.timeout && (d = C.setTimeout(function() {
                        T.abort("timeout")
                    }, m.timeout));
                    try {
                        h = !1,
                        c.send(s, u)
                    } catch (e) {
                        if (h)
                            throw e;
                        u(-1, e)
                    }
                } else
                    u(-1, "No Transport");
                function u(e, t, n, r) {
                    var i, o, s, a, l, u = t;
                    h || (h = !0,
                    d && C.clearTimeout(d),
                    c = void 0,
                    p = r || "",
                    T.readyState = 0 < e ? 4 : 0,
                    i = 200 <= e && e < 300 || 304 === e,
                    n && (a = function(e, t, n) {
                        for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                            l.shift(),
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in a)
                                if (a[i] && a[i].test(r)) {
                                    l.unshift(i);
                                    break
                                }
                        if (l[0]in n)
                            o = l[0];
                        else {
                            for (i in n) {
                                if (!l[0] || e.converters[i + " " + l[0]]) {
                                    o = i;
                                    break
                                }
                                s || (s = i)
                            }
                            o = o || s
                        }
                        if (o)
                            return o !== l[0] && l.unshift(o),
                            n[o]
                    }(m, T, n)),
                    a = function(e, t, n, r) {
                        var i, o, s, a, l, u = {}, c = e.dataTypes.slice();
                        if (c[1])
                            for (s in e.converters)
                                u[s.toLowerCase()] = e.converters[s];
                        for (o = c.shift(); o; )
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            l = o,
                            o = c.shift())
                                if ("*" === o)
                                    o = l;
                                else if ("*" !== l && l !== o) {
                                    if (!(s = u[l + " " + o] || u["* " + o]))
                                        for (i in u)
                                            if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0],
                                                c.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== s)
                                        if (s && e.throws)
                                            t = s(t);
                                        else
                                            try {
                                                t = s(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? e : "No conversion from " + l + " to " + o
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(m, a, T, i),
                    i ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = l),
                    (l = T.getResponseHeader("etag")) && (S.etag[f] = l)),
                    204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state,
                    o = a.data,
                    i = !(s = a.error))) : (s = u,
                    !e && u || (u = "error",
                    e < 0 && (e = 0))),
                    T.status = e,
                    T.statusText = (t || u) + "",
                    i ? x.resolveWith(v, [o, u, T]) : x.rejectWith(v, [T, u, s]),
                    T.statusCode(b),
                    b = void 0,
                    g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : s]),
                    w.fireWith(v, [T, u]),
                    g && (y.trigger("ajaxComplete", [T, m]),
                    --S.active || S.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(e, t, n) {
                return S.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return S.get(e, void 0, t, "script")
            }
        }),
        S.each(["get", "post"], function(e, i) {
            S[i] = function(e, t, n, r) {
                return S.isFunction(t) && (r = r || n,
                n = t,
                t = void 0),
                S.ajax(S.extend({
                    url: e,
                    type: i,
                    dataType: r,
                    data: t,
                    success: n
                }, S.isPlainObject(e) && e))
            }
        }),
        S._evalUrl = function(e) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        S.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (S.isFunction(e) && (e = e.call(this[0])),
                t = S(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(n) {
                return S.isFunction(n) ? this.each(function(e) {
                    S(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = S(this)
                      , t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = S.isFunction(t);
                return this.each(function(e) {
                    S(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    S(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        S.expr.pseudos.hidden = function(e) {
            return !S.expr.pseudos.visible(e)
        }
        ,
        S.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        S.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Ft = {
            0: 200,
            1223: 204
        }
          , Wt = S.ajaxSettings.xhr();
        m.cors = !!Wt && "withCredentials"in Wt,
        m.ajax = Wt = !!Wt,
        S.ajaxTransport(function(i) {
            var o, s;
            if (m.cors || Wt && !i.crossDomain)
                return {
                    send: function(e, t) {
                        var n, r = i.xhr();
                        if (r.open(i.type, i.url, i.async, i.username, i.password),
                        i.xhrFields)
                            for (n in i.xhrFields)
                                r[n] = i.xhrFields[n];
                        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                        i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                        e)
                            r.setRequestHeader(n, e[n]);
                        o = function(e) {
                            return function() {
                                o && (o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null,
                                "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ft[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                    binary: r.response
                                } : {
                                    text: r.responseText
                                }, r.getAllResponseHeaders()))
                            }
                        }
                        ,
                        r.onload = o(),
                        s = r.onerror = o("error"),
                        void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                            4 === r.readyState && C.setTimeout(function() {
                                o && s()
                            })
                        }
                        ,
                        o = o("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (o)
                                throw e
                        }
                    },
                    abort: function() {
                        o && o()
                    }
                }
        }),
        S.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return S.globalEval(e),
                    e
                }
            }
        }),
        S.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        S.ajaxTransport("script", function(n) {
            var r, i;
            if (n.crossDomain)
                return {
                    send: function(e, t) {
                        r = S("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function(e) {
                            r.remove(),
                            i = null,
                            e && t("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        k.head.appendChild(r[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
        });
        var Mt, Rt = [], It = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Rt.pop() || S.expando + "_" + mt++;
                return this[e] = !0,
                e
            }
        }),
        S.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, o, s = !1 !== e.jsonp && (It.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                s ? e[s] = e[s].replace(It, "$1" + r) : !1 !== e.jsonp && (e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                e.converters["script json"] = function() {
                    return o || S.error(r + " was not called"),
                    o[0]
                }
                ,
                e.dataTypes[0] = "json",
                i = C[r],
                C[r] = function() {
                    o = arguments
                }
                ,
                n.always(function() {
                    void 0 === i ? S(C).removeProp(r) : C[r] = i,
                    e[r] && (e.jsonpCallback = t.jsonpCallback,
                    Rt.push(r)),
                    o && S.isFunction(i) && i(o[0]),
                    o = i = void 0
                }),
                "script"
        }),
        m.createHTMLDocument = ((Mt = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === Mt.childNodes.length),
        S.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (m.createHTMLDocument ? ((r = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href,
            t.head.appendChild(r)) : t = k),
            o = !n && [],
            (i = j.exec(e)) ? [t.createElement(i[1])] : (i = he([e], t, o),
            o && o.length && S(o).remove(),
            S.merge([], i.childNodes)));
            var r, i, o
        }
        ,
        S.fn.load = function(e, t, n) {
            var r, i, o, s = this, a = e.indexOf(" ");
            return -1 < a && (r = ft(e.slice(a)),
            e = e.slice(0, a)),
            S.isFunction(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (i = "POST"),
            0 < s.length && S.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                s.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            S.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        S.expr.pseudos.animated = function(t) {
            return S.grep(S.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        S.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, s, a, l, u = S.css(e, "position"), c = S(e), f = {};
                "static" === u && (e.style.position = "relative"),
                a = c.offset(),
                o = S.css(e, "top"),
                l = S.css(e, "left"),
                i = ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (r = c.position()).top,
                r.left) : (s = parseFloat(o) || 0,
                parseFloat(l) || 0),
                S.isFunction(t) && (t = t.call(e, n, S.extend({}, a))),
                null != t.top && (f.top = t.top - a.top + s),
                null != t.left && (f.left = t.left - a.left + i),
                "using"in t ? t.using.call(e, f) : c.css(f)
            }
        },
        S.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        S.offset.setOffset(this, t, e)
                    });
                var e, n, r, i, o = this[0];
                return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(),
                n = (e = o.ownerDocument).documentElement,
                i = e.defaultView,
                {
                    top: r.top + i.pageYOffset - n.clientTop,
                    left: r.left + i.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === S.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                    t = this.offset(),
                    A(e[0], "html") || (r = e.offset()),
                    r = {
                        top: r.top + S.css(e[0], "borderTopWidth", !0),
                        left: r.left + S.css(e[0], "borderLeftWidth", !0)
                    }),
                    {
                        top: t.top - r.top - S.css(n, "marginTop", !0),
                        left: t.left - r.left - S.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === S.css(e, "position"); )
                        e = e.offsetParent;
                    return e || ge
                })
            }
        }),
        S.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var o = "pageYOffset" === i;
            S.fn[t] = function(e) {
                return $(this, function(e, t, n) {
                    var r;
                    if (S.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === n)
                        return r ? r[i] : e[t];
                    r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }),
        S.each(["top", "left"], function(e, n) {
            S.cssHooks[n] = Me(m.pixelPosition, function(e, t) {
                if (t)
                    return t = We(e, n),
                    Pe.test(t) ? S(e).position()[n] + "px" : t
            })
        }),
        S.each({
            Height: "height",
            Width: "width"
        }, function(s, a) {
            S.each({
                padding: "inner" + s,
                content: a,
                "": "outer" + s
            }, function(r, o) {
                S.fn[o] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e)
                      , i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return $(this, function(e, t, n) {
                        var r;
                        return S.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement,
                        Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                    }, a, n ? e : void 0, n)
                }
            })
        }),
        S.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        S.holdReady = function(e) {
            e ? S.readyWait++ : S.ready(!0)
        }
        ,
        S.isArray = Array.isArray,
        S.parseJSON = JSON.parse,
        S.nodeName = A,
        void 0 === (Xt = function() {
            return S
        }
        .apply(zt, [])) || ($t.exports = Xt);
        var _t = C.jQuery
          , Bt = C.$;
        return S.noConflict = function(e) {
            return C.$ === S && (C.$ = Bt),
            e && C.jQuery === S && (C.jQuery = _t),
            S
        }
        ,
        e || (C.jQuery = C.$ = S),
        S
    })
}
, function(e, t) {
    !function() {
        "use strict";
        var t = 0
          , o = {};
        function n(e) {
            if (!e)
                throw new Error("No options passed to Waypoint constructor");
            if (!e.element)
                throw new Error("No element option passed to Waypoint constructor");
            if (!e.handler)
                throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t,
            this.options = n.Adapter.extend({}, n.defaults, e),
            this.element = this.options.element,
            this.adapter = new n.Adapter(this.element),
            this.callback = e.handler,
            this.axis = this.options.horizontal ? "horizontal" : "vertical",
            this.enabled = this.options.enabled,
            this.triggerPoint = null,
            this.group = n.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }),
            this.context = n.Context.findOrCreateByElement(this.options.context),
            n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            o[this.key] = this,
            t += 1
        }
        n.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }
        ,
        n.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }
        ,
        n.prototype.destroy = function() {
            this.context.remove(this),
            this.group.remove(this),
            delete o[this.key]
        }
        ,
        n.prototype.disable = function() {
            return this.enabled = !1,
            this
        }
        ,
        n.prototype.enable = function() {
            return this.context.refresh(),
            this.enabled = !0,
            this
        }
        ,
        n.prototype.next = function() {
            return this.group.next(this)
        }
        ,
        n.prototype.previous = function() {
            return this.group.previous(this)
        }
        ,
        n.invokeAll = function(e) {
            var t = [];
            for (var n in o)
                t.push(o[n]);
            for (var r = 0, i = t.length; r < i; r++)
                t[r][e]()
        }
        ,
        n.destroyAll = function() {
            n.invokeAll("destroy")
        }
        ,
        n.disableAll = function() {
            n.invokeAll("disable")
        }
        ,
        n.enableAll = function() {
            for (var e in n.Context.refreshAll(),
            o)
                o[e].enabled = !0;
            return this
        }
        ,
        n.refreshAll = function() {
            n.Context.refreshAll()
        }
        ,
        n.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }
        ,
        n.viewportWidth = function() {
            return document.documentElement.clientWidth
        }
        ,
        n.adapters = [],
        n.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        },
        n.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        },
        window.Waypoint = n
    }(),
    function() {
        "use strict";
        function t(e) {
            window.setTimeout(e, 1e3 / 60)
        }
        var n = 0
          , r = {}
          , m = window.Waypoint
          , e = window.onload;
        function i(e) {
            this.element = e,
            this.Adapter = m.Adapter,
            this.adapter = new this.Adapter(e),
            this.key = "waypoint-context-" + n,
            this.didScroll = !1,
            this.didResize = !1,
            this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            },
            this.waypoints = {
                vertical: {},
                horizontal: {}
            },
            e.waypointContextKey = this.key,
            r[e.waypointContextKey] = this,
            n += 1,
            m.windowContext || (m.windowContext = !0,
            m.windowContext = new i(window)),
            this.createThrottledScrollHandler(),
            this.createThrottledResizeHandler()
        }
        i.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e,
            this.refresh()
        }
        ,
        i.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal)
              , t = this.Adapter.isEmptyObject(this.waypoints.vertical)
              , n = this.element == this.element.window;
            e && t && !n && (this.adapter.off(".waypoints"),
            delete r[this.key])
        }
        ,
        i.prototype.createThrottledResizeHandler = function() {
            var e = this;
            function t() {
                e.handleResize(),
                e.didResize = !1
            }
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0,
                m.requestAnimationFrame(t))
            })
        }
        ,
        i.prototype.createThrottledScrollHandler = function() {
            var e = this;
            function t() {
                e.handleScroll(),
                e.didScroll = !1
            }
            this.adapter.on("scroll.waypoints", function() {
                e.didScroll && !m.isTouch || (e.didScroll = !0,
                m.requestAnimationFrame(t))
            })
        }
        ,
        i.prototype.handleResize = function() {
            m.Context.refreshAll()
        }
        ,
        i.prototype.handleScroll = function() {
            var e = {}
              , t = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
            for (var n in t) {
                var r = t[n]
                  , i = r.newScroll > r.oldScroll ? r.forward : r.backward;
                for (var o in this.waypoints[n]) {
                    var s = this.waypoints[n][o];
                    if (null !== s.triggerPoint) {
                        var a = r.oldScroll < s.triggerPoint
                          , l = r.newScroll >= s.triggerPoint;
                        (a && l || !a && !l) && (s.queueTrigger(i),
                        e[s.group.id] = s.group)
                    }
                }
            }
            for (var u in e)
                e[u].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }
        ,
        i.prototype.innerHeight = function() {
            return this.element == this.element.window ? m.viewportHeight() : this.adapter.innerHeight()
        }
        ,
        i.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key],
            this.checkEmpty()
        }
        ,
        i.prototype.innerWidth = function() {
            return this.element == this.element.window ? m.viewportWidth() : this.adapter.innerWidth()
        }
        ,
        i.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var n in this.waypoints[t])
                    e.push(this.waypoints[t][n]);
            for (var r = 0, i = e.length; r < i; r++)
                e[r].destroy()
        }
        ,
        i.prototype.refresh = function() {
            var e, t = this.element == this.element.window, n = t ? void 0 : this.adapter.offset(), r = {};
            for (var i in this.handleScroll(),
            e = {
                horizontal: {
                    contextOffset: t ? 0 : n.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : n.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
                var o = e[i];
                for (var s in this.waypoints[i]) {
                    var a, l, u, c, f = this.waypoints[i][s], p = f.options.offset, d = f.triggerPoint, h = 0, g = null == d;
                    f.element !== f.element.window && (h = f.adapter.offset()[o.offsetProp]),
                    "function" == typeof p ? p = p.apply(f) : "string" == typeof p && (p = parseFloat(p),
                    -1 < f.options.offset.indexOf("%") && (p = Math.ceil(o.contextDimension * p / 100))),
                    a = o.contextScroll - o.contextOffset,
                    f.triggerPoint = Math.floor(h + a - p),
                    l = d < o.oldScroll,
                    u = f.triggerPoint >= o.oldScroll,
                    c = !l && !u,
                    !g && (l && u) ? (f.queueTrigger(o.backward),
                    r[f.group.id] = f.group) : !g && c ? (f.queueTrigger(o.forward),
                    r[f.group.id] = f.group) : g && o.oldScroll >= f.triggerPoint && (f.queueTrigger(o.forward),
                    r[f.group.id] = f.group)
                }
            }
            return m.requestAnimationFrame(function() {
                for (var e in r)
                    r[e].flushTriggers()
            }),
            this
        }
        ,
        i.findOrCreateByElement = function(e) {
            return i.findByElement(e) || new i(e)
        }
        ,
        i.refreshAll = function() {
            for (var e in r)
                r[e].refresh()
        }
        ,
        i.findByElement = function(e) {
            return r[e.waypointContextKey]
        }
        ,
        window.onload = function() {
            e && e(),
            i.refreshAll()
        }
        ,
        m.requestAnimationFrame = function(e) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
        }
        ,
        m.Context = i
    }(),
    function() {
        "use strict";
        function s(e, t) {
            return e.triggerPoint - t.triggerPoint
        }
        function a(e, t) {
            return t.triggerPoint - e.triggerPoint
        }
        var t = {
            vertical: {},
            horizontal: {}
        }
          , n = window.Waypoint;
        function r(e) {
            this.name = e.name,
            this.axis = e.axis,
            this.id = this.name + "-" + this.axis,
            this.waypoints = [],
            this.clearTriggerQueues(),
            t[this.axis][this.name] = this
        }
        r.prototype.add = function(e) {
            this.waypoints.push(e)
        }
        ,
        r.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }
        ,
        r.prototype.flushTriggers = function() {
            for (var e in this.triggerQueues) {
                var t = this.triggerQueues[e]
                  , n = "up" === e || "left" === e;
                t.sort(n ? a : s);
                for (var r = 0, i = t.length; r < i; r += 1) {
                    var o = t[r];
                    (o.options.continuous || r === t.length - 1) && o.trigger([e])
                }
            }
            this.clearTriggerQueues()
        }
        ,
        r.prototype.next = function(e) {
            this.waypoints.sort(s);
            var t = n.Adapter.inArray(e, this.waypoints);
            return t === this.waypoints.length - 1 ? null : this.waypoints[t + 1]
        }
        ,
        r.prototype.previous = function(e) {
            this.waypoints.sort(s);
            var t = n.Adapter.inArray(e, this.waypoints);
            return t ? this.waypoints[t - 1] : null
        }
        ,
        r.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }
        ,
        r.prototype.remove = function(e) {
            var t = n.Adapter.inArray(e, this.waypoints);
            -1 < t && this.waypoints.splice(t, 1)
        }
        ,
        r.prototype.first = function() {
            return this.waypoints[0]
        }
        ,
        r.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }
        ,
        r.findOrCreate = function(e) {
            return t[e.axis][e.name] || new r(e)
        }
        ,
        n.Group = r
    }(),
    function() {
        "use strict";
        var e = window.Waypoint;
        function r(e) {
            return e === e.window
        }
        function i(e) {
            return r(e) ? e : e.defaultView
        }
        function t(e) {
            this.element = e,
            this.handlers = {}
        }
        t.prototype.innerHeight = function() {
            return r(this.element) ? this.element.innerHeight : this.element.clientHeight
        }
        ,
        t.prototype.innerWidth = function() {
            return r(this.element) ? this.element.innerWidth : this.element.clientWidth
        }
        ,
        t.prototype.off = function(e, t) {
            function n(e, t, n) {
                for (var r = 0, i = t.length - 1; r < i; r++) {
                    var o = t[r];
                    n && n !== o || e.removeEventListener(o)
                }
            }
            var r = e.split(".")
              , i = r[0]
              , o = r[1]
              , s = this.element;
            if (o && this.handlers[o] && i)
                n(s, this.handlers[o][i], t),
                this.handlers[o][i] = [];
            else if (i)
                for (var a in this.handlers)
                    n(s, this.handlers[a][i] || [], t),
                    this.handlers[a][i] = [];
            else if (o && this.handlers[o]) {
                for (var l in this.handlers[o])
                    n(s, this.handlers[o][l], t);
                this.handlers[o] = {}
            }
        }
        ,
        t.prototype.offset = function() {
            if (!this.element.ownerDocument)
                return null;
            var e = this.element.ownerDocument.documentElement
              , t = i(this.element.ownerDocument)
              , n = {
                top: 0,
                left: 0
            };
            return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()),
            {
                top: n.top + t.pageYOffset - e.clientTop,
                left: n.left + t.pageXOffset - e.clientLeft
            }
        }
        ,
        t.prototype.on = function(e, t) {
            var n = e.split(".")
              , r = n[0]
              , i = n[1] || "__default"
              , o = this.handlers[i] = this.handlers[i] || {};
            (o[r] = o[r] || []).push(t),
            this.element.addEventListener(r, t)
        }
        ,
        t.prototype.outerHeight = function(e) {
            var t, n = this.innerHeight();
            return e && !r(this.element) && (t = window.getComputedStyle(this.element),
            n += parseInt(t.marginTop, 10),
            n += parseInt(t.marginBottom, 10)),
            n
        }
        ,
        t.prototype.outerWidth = function(e) {
            var t, n = this.innerWidth();
            return e && !r(this.element) && (t = window.getComputedStyle(this.element),
            n += parseInt(t.marginLeft, 10),
            n += parseInt(t.marginRight, 10)),
            n
        }
        ,
        t.prototype.scrollLeft = function() {
            var e = i(this.element);
            return e ? e.pageXOffset : this.element.scrollLeft
        }
        ,
        t.prototype.scrollTop = function() {
            var e = i(this.element);
            return e ? e.pageYOffset : this.element.scrollTop
        }
        ,
        t.extend = function() {
            var e = Array.prototype.slice.call(arguments);
            function t(e, t) {
                if ("object" == typeof e && "object" == typeof t)
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            for (var n = 1, r = e.length; n < r; n++)
                t(e[0], e[n]);
            return e[0]
        }
        ,
        t.inArray = function(e, t, n) {
            return null == t ? -1 : t.indexOf(e, n)
        }
        ,
        t.isEmptyObject = function(e) {
            for (var t in e)
                return !1;
            return !0
        }
        ,
        e.adapters.push({
            name: "noframework",
            Adapter: t
        }),
        e.Adapter = t
    }()
}
, function(e, t, n) {
    "use strict";
    var r = l(n(3))
      , i = l(n(4))
      , o = l(n(0))
      , s = l(n(5))
      , a = l(n(7));
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    new r.default;
    new i.default((0,
    o.default)(".feature-item"),"85%"),
    new i.default((0,
    o.default)(".testimonial"),"60%");
    new s.default,
    new a.default
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = function() {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(e, t, n) {
            return t && r(e.prototype, t),
            n && r(e, n),
            e
        }
    }(), o = n(0), s = (r = o) && r.__esModule ? r : {
        default: r
    };
    var a = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.siteHeader = (0,
            s.default)(".site-header"),
            this.menuIcon = (0,
            s.default)(".site-header__menu-icon"),
            this.menuContent = (0,
            s.default)(".site-header__menu-content"),
            this.events()
        }
        return i(e, [{
            key: "events",
            value: function() {
                this.menuIcon.click(this.toggleTheMenu.bind(this))
            }
        }, {
            key: "toggleTheMenu",
            value: function() {
                this.menuContent.toggleClass("site-header__menu-content--is-visible"),
                this.siteHeader.toggleClass("site-header--is-expanded"),
                this.menuIcon.toggleClass("site-header__menu-icon--close-x")
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(e, t, n) {
            return t && r(e.prototype, t),
            n && r(e, n),
            e
        }
    }()
      , i = o(n(0));
    o(n(1));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = function() {
        function n(e, t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, n),
            this.itemsToReveal = e,
            this.offsetPercentage = t,
            this.hideInitially(),
            this.createWaypoints()
        }
        return r(n, [{
            key: "hideInitially",
            value: function() {
                this.itemsToReveal.addClass("reveal-item")
            }
        }, {
            key: "createWaypoints",
            value: function() {
                var t = this;
                this.itemsToReveal.each(function() {
                    var e = this;
                    new Waypoint({
                        element: e,
                        handler: function() {
                            (0,
                            i.default)(e).addClass("reveal-item--is-visible")
                        },
                        offset: t.offsetPercentage
                    })
                })
            }
        }]),
        n
    }();
    t.default = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(e, t, n) {
            return t && r(e.prototype, t),
            n && r(e, n),
            e
        }
    }()
      , i = o(n(0));
    o(n(1)),
    o(n(6));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.lazyImages = (0,
            i.default)(".lazyload"),
            this.siteHeader = (0,
            i.default)(".site-header"),
            this.headerTriggerElement = (0,
            i.default)(".large-hero__title"),
            this.createHeaderWaypoint(),
            this.pageSections = (0,
            i.default)(".page-section"),
            this.headerLinks = (0,
            i.default)(".primary-nav a"),
            this.createPageSectionWaypoints(),
            this.addSmoothScrolling(),
            this.refreshWaypoints()
        }
        return r(e, [{
            key: "refreshWaypoints",
            value: function() {
                this.lazyImages.on("load", function() {
                    Waypoint.refreshAll()
                })
            }
        }, {
            key: "addSmoothScrolling",
            value: function() {
                this.headerLinks.smoothScroll()
            }
        }, {
            key: "createHeaderWaypoint",
            value: function() {
                var t = this;
                new Waypoint({
                    element: this.headerTriggerElement[0],
                    handler: function(e) {
                        "down" == e ? t.siteHeader.addClass("site-header--dark") : t.siteHeader.removeClass("site-header--dark")
                    }
                })
            }
        }, {
            key: "createPageSectionWaypoints",
            value: function() {
                var r = this;
                this.pageSections.each(function() {
                    var n = this;
                    new Waypoint({
                        element: n,
                        handler: function(e) {
                            if ("down" == e) {
                                var t = n.getAttribute("data-matching-link");
                                r.headerLinks.removeClass("is-current-link"),
                                (0,
                                i.default)(t).addClass("is-current-link")
                            }
                        },
                        offset: "18%"
                    }),
                    new Waypoint({
                        element: n,
                        handler: function(e) {
                            if ("up" == e) {
                                var t = n.getAttribute("data-matching-link");
                                r.headerLinks.removeClass("is-current-link"),
                                (0,
                                i.default)(t).addClass("is-current-link")
                            }
                        },
                        offset: "-40%"
                    })
                })
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, n) {
    var r, i, o, s;
    s = function(v) {
        var p = {}
          , n = function(e) {
            var t = []
              , n = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
            return this.each(function() {
                var e = v(this);
                if (this !== document && this !== window)
                    return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void (0 < e[n]() ? t.push(this) : (e[n](1),
                    0 < e[n]() && t.push(this),
                    e[n](0))) : (t.push(document.scrollingElement),
                    !1)
            }),
            t.length || this.each(function() {
                this === document.documentElement && "smooth" === v(this).css("scrollBehavior") && (t = [this]),
                t.length || "BODY" !== this.nodeName || (t = [this])
            }),
            "first" === e.el && 1 < t.length && (t = [t[0]]),
            t
        }
          , r = /^([\-\+]=)(\d+)/;
        v.fn.extend({
            scrollable: function(e) {
                var t = n.call(this, {
                    dir: e
                });
                return this.pushStack(t)
            },
            firstScrollable: function(e) {
                var t = n.call(this, {
                    el: "first",
                    dir: e
                });
                return this.pushStack(t)
            },
            smoothScroll: function(e, n) {
                if ("options" === (e = e || {}))
                    return n ? this.each(function() {
                        var e = v(this)
                          , t = v.extend(e.data("ssOpts") || {}, n);
                        v(this).data("ssOpts", t)
                    }) : this.first().data("ssOpts");
                var m = v.extend({}, v.fn.smoothScroll.defaults, e)
                  , t = function(e) {
                    var t = function(e) {
                        return e.replace(/(:|\.|\/)/g, "\\$1")
                    }
                      , n = this
                      , r = v(this)
                      , i = v.extend({}, m, r.data("ssOpts") || {})
                      , o = m.exclude
                      , s = i.excludeWithin
                      , a = 0
                      , l = 0
                      , u = !0
                      , c = {}
                      , f = v.smoothScroll.filterPath(location.pathname)
                      , p = v.smoothScroll.filterPath(n.pathname)
                      , d = location.hostname === n.hostname || !n.hostname
                      , h = i.scrollTarget || p === f
                      , g = t(n.hash);
                    if (g && !v(g).length && (u = !1),
                    i.scrollTarget || d && h && g) {
                        for (; u && a < o.length; )
                            r.is(t(o[a++])) && (u = !1);
                        for (; u && l < s.length; )
                            r.closest(s[l++]).length && (u = !1)
                    } else
                        u = !1;
                    u && (i.preventDefault && e.preventDefault(),
                    v.extend(c, i, {
                        scrollTarget: i.scrollTarget || g,
                        link: n
                    }),
                    v.smoothScroll(c))
                };
                return null !== e.delegateSelector ? this.off("click.smoothscroll", e.delegateSelector).on("click.smoothscroll", e.delegateSelector, t) : this.off("click.smoothscroll").on("click.smoothscroll", t),
                this
            }
        });
        var d = function(e) {
            var t = {
                relative: ""
            }
              , n = "string" == typeof e && r.exec(e);
            return "number" == typeof e ? t.px = e : n && (t.relative = n[1],
            t.px = parseFloat(n[2]) || 0),
            t
        }
          , h = function(e) {
            var t = v(e.scrollTarget);
            e.autoFocus && t.length && (t[0].focus(),
            t.is(document.activeElement) || (t.prop({
                tabIndex: -1
            }),
            t[0].focus())),
            e.afterScroll.call(e.link, e)
        };
        v.smoothScroll = function(e, t) {
            if ("options" === e && "object" == typeof t)
                return v.extend(p, t);
            var n, r, i, o, s = d(e), a = 0, l = "offset", u = "scrollTop", c = {}, f = {};
            s.px ? n = v.extend({
                link: null
            }, v.fn.smoothScroll.defaults, p) : ((n = v.extend({
                link: null
            }, v.fn.smoothScroll.defaults, e || {}, p)).scrollElement && (l = "position",
            "static" === n.scrollElement.css("position") && n.scrollElement.css("position", "relative")),
            t && (s = d(t))),
            u = "left" === n.direction ? "scrollLeft" : u,
            n.scrollElement ? (r = n.scrollElement,
            s.px || /^(?:HTML|BODY)$/.test(r[0].nodeName) || (a = r[u]())) : r = v("html, body").firstScrollable(n.direction),
            n.beforeScroll.call(r, n),
            o = s.px ? s : {
                relative: "",
                px: v(n.scrollTarget)[l]() && v(n.scrollTarget)[l]()[n.direction] || 0
            },
            c[u] = o.relative + (o.px + a + n.offset),
            "auto" === (i = n.speed) && (i = Math.abs(c[u] - r[u]()) / n.autoCoefficient),
            f = {
                duration: i,
                easing: n.easing,
                complete: function() {
                    h(n)
                }
            },
            n.step && (f.step = n.step),
            r.length ? r.stop().animate(c, f) : h(n)
        }
        ,
        v.smoothScroll.version = "2.2.0",
        v.smoothScroll.filterPath = function(e) {
            return (e = e || "").replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
        }
        ,
        v.fn.smoothScroll.defaults = {
            exclude: [],
            excludeWithin: [],
            offset: 0,
            direction: "top",
            delegateSelector: null,
            scrollElement: null,
            scrollTarget: null,
            autoFocus: !1,
            beforeScroll: function() {},
            afterScroll: function() {},
            easing: "swing",
            speed: 400,
            autoCoefficient: 2,
            preventDefault: !0
        }
    }
    ,
    i = [n(0)],
    void 0 === (o = "function" == typeof (r = s) ? r.apply(t, i) : r) || (e.exports = o)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = function() {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(e, t, n) {
            return t && r(e.prototype, t),
            n && r(e, n),
            e
        }
    }(), o = n(0), s = (r = o) && r.__esModule ? r : {
        default: r
    };
    var a = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.openModalButton = (0,
            s.default)(".open-modal"),
            this.modal = (0,
            s.default)(".modal"),
            this.closeModalButton = (0,
            s.default)(".modal__close"),
            this.events()
        }
        return i(e, [{
            key: "events",
            value: function() {
                this.openModalButton.click(this.openModal.bind(this)),
                this.closeModalButton.click(this.closeModal.bind(this)),
                (0,
                s.default)(document).keyup(this.keypressHandler.bind(this))
            }
        }, {
            key: "keypressHandler",
            value: function(e) {
                27 == e.keyCode && this.closeModal()
            }
        }, {
            key: "openModal",
            value: function() {
                return this.modal.addClass("modal--is-visible"),
                !1
            }
        }, {
            key: "closeModal",
            value: function() {
                this.modal.removeClass("modal--is-visible")
            }
        }]),
        e
    }();
    t.default = a
}
]);