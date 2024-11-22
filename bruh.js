(function(t) {
    function e(e) {
        for (var i, r, o = e[0], c = e[1], l = e[2], d = 0, p = []; d < o.length; d++)
            r = o[d],
            Object.prototype.hasOwnProperty.call(s, r) && s[r] && p.push(s[r][0]),
            s[r] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        u && u(e);
        while (p.length)
            p.shift()();
        return n.push.apply(n, l || []), a()
    }
    function a() {
        for (var t, e = 0; e < n.length; e++) {
            for (var a = n[e], i = !0, o = 1; o < a.length; o++) {
                var c = a[o];
                0 !== s[c] && (i = !1)
            }
            i && (n.splice(e--, 1), t = r(r.s = a[0]))
        }
        return t
    }
    var i = {},
        s = {
            app: 0
        },
        n = [];
    function r(e) {
        if (i[e])
            return i[e].exports;
        var a = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = t,
    r.c = i,
    r.d = function(t, e, a) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    },
    r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var i in t)
                r.d(a, i, function(e) {
                    return t[e]
                }.bind(null, i));
        return a
    },
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    },
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var l = 0; l < o.length; l++)
        e(o[l]);
    var u = c;
    n.push([0, "chunk-vendors"]),
    a()
})({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    "0133": function(t, e, a) {},
    "0174": function(t, e, a) {},
    "045f": function(t, e, a) {},
    "0474": function(t, e, a) {
        "use strict";
        a("f65d")
    },
    "0768": function(t, e, a) {
        t.exports = a.p + "img/9.e8c71364.png"
    },
    "0aeb": function(t, e, a) {},
    "0be8": function(t, e, a) {},
    "0e16": function(t, e, a) {
        t.exports = a.p + "img/dub_backg.8d577b7a.png"
    },
    "0e6b": function(t, e, a) {
        t.exports = a.p + "img/dublab_default_file.80cf8e13.png"
    },
    "102b": function(t, e, a) {
        t.exports = a.p + "img/Jeremiah-Chiu---Zoom-Room-1-p-1080.88178b00.jpg"
    },
    1124: function(t, e, a) {
        t.exports = a.p + "img/staff-p-800.6d5307e0.png"
    },
    1361: function(t, e, a) {
        t.exports = a.p + "img/flag_de.3e726c2b.svg"
    },
    "14a9": function(t, e, a) {},
    1554: function(t, e, a) {},
    "159e": function(t, e, a) {
        t.exports = a.p + "img/circle_overlay.4b7f253d.jpg"
    },
    "15c8": function(t, e, a) {
        "use strict";
        a("6605")
    },
    "17e7": function(t, e, a) {
        t.exports = a.p + "img/dubby.26bcc51d.png"
    },
    1979: function(t, e, a) {},
    "19e1": function(t, e, a) {},
    "1a44": function(t, e, a) {
        t.exports = a.p + "img/staff-p-500.55f57d4d.png"
    },
    "1a66": function(t, e, a) {},
    "1af9": function(t, e, a) {},
    "1ca9": function(t, e, a) {},
    "1de1": function(t, e, a) {},
    "1f59": function(t, e, a) {
        "use strict";
        a("f0a5")
    },
    "25f1": function(t, e, a) {
        "use strict";
        a("41b4")
    },
    "27a0": function(t, e, a) {},
    "27e6": function(t, e, a) {
        t.exports = a.p + "img/dubMerch.e7ff7b13.png"
    },
    2836: function(t, e, a) {
        t.exports = a.p + "img/Jeremiah-Chiu---Zoom-Room-1.07d485a7.jpg"
    },
    "29fc": function(t, e, a) {},
    "2a8f": function(t, e, a) {},
    "2b9d": function(t, e, a) {},
    "2f2c": function(t, e, a) {
        "use strict";
        a("aa17")
    },
    "30d0": function(t, e, a) {},
    "313f": function(t, e, a) {},
    3247: function(t, e, a) {},
    "32d7": function(t, e, a) {},
    3674: function(t, e, a) {
        t.exports = a.p + "img/staff-p-1080.0de3de16.png"
    },
    3684: function(t, e, a) {
        "use strict";
        a("0133")
    },
    "3c7d": function(t, e, a) {
        "use strict";
        a("d2de")
    },
    "3cb9": function(t, e, a) {
        "use strict";
        a("e55c")
    },
    "3e11": function(t, e, a) {
        "use strict";
        a("6078")
    },
    "3f3b": function(t, e, a) {
        "use strict";
        a("30d0")
    },
    4055: function(t, e, a) {
        "use strict";
        a("1979")
    },
    "41b4": function(t, e, a) {},
    "43b1": function(t, e, a) {
        "use strict";
        a("045f")
    },
    "44e4": function(t, e, a) {
        "use strict";
        a("29fc")
    },
    4660: function(t, e, a) {
        t.exports = a.p + "img/5.76ca4918.png"
    },
    "48bd": function(t, e, a) {
        t.exports = a.p + "img/history-p-500.16b70d34.png"
    },
    4970: function(t, e, a) {
        "use strict";
        a("93a3")
    },
    "4c1a": function(t, e, a) {
        "use strict";
        a("9aec")
    },
    "4c6a": function(t, e, a) {},
    "4d53": function(t, e, a) {},
    "4de7": function(t, e, a) {
        "use strict";
        a("f858")
    },
    "50b0": function(t, e, a) {
        "use strict";
        a("8777")
    },
    "54ff": function(t, e, a) {
        "use strict";
        a("8090")
    },
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("cadf"),
        a("551c"),
        a("f751"),
        a("097d");
        var i = a("a026"),
            s = a("26b9"),
            n = a.n(s),
            r = a("0a89"),
            o = a.n(r),
            c = a("caf9"),
            l = a("f6dd"),
            u = a("31bd"),
            d = a("9aff"),
            p = a("a584"),
            m = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    ref: "app",
                    class: t.getAppClasses,
                    attrs: {
                        id: "app"
                    }
                }, [t.isHeaderActive ? e("Header") : t._e(), t.isBroadcastActive ? e("BarAudio") : t._e(), e("main", [t.isNotFound ? e("div", {
                    staticClass: "notFound"
                }, [e("div", {
                    staticClass: "box dashed a-accent"
                }, [e("span", {
                    staticClass: "underline"
                }, [t._v("404 Not Found")]), e("br"), e("br"), t._v("If you’re\n        looking for a past broadcast, we’re still working on migrating our\n        archives to the new site! In the meantime\n        "), e("router-link", {
                    attrs: {
                        to: "/"
                    }
                }, [t._v("Tune In")]), t._v(" to the live stream or\n        "), e("router-link", {
                    attrs: {
                        to: "/archive"
                    }
                }, [t._v("Browse")]), t._v(" the archives.\n      ")], 1)]) : e("router-view")], 1), t.isFooterActive ? e("Footer", {
                    attrs: {
                        inverted: t.isInverted
                    }
                }) : t._e(), e("PreviewBanner"), e("vue-progress-bar")], 1)
            },
            f = [],
            h = (a("6762"), a("2fdb"), a("7f7f"), a("05f4"), a("9a2a"), a("36be")),
            v = a.n(h),
            g = a("ce8c"),
            b = a.n(g),
            _ = a("3e2f"),
            y = a.n(_),
            C = (a("a481"), a("bd86")),
            w = (a("456d"), a("ac6a"), a("5df3"), a("6d93"), ""),
            k = {};
        var x = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return w = t.endpoint || "", {
                    beforeRouteEnter: e,
                    beforeRouteUpdate: e
                };
                function e(e, a, i) {
                    var s = "/" === e.path ? "/home" : e.path,
                        n = [s];
                    if (e.meta.contentState) {
                        if (e.meta.contentState.disable)
                            return i(), void ("function" === typeof t.loadEnd && t.loadEnd());
                        e.meta.contentState.params && e.path !== e.fullPath && n.push(e.fullPath),
                        e.meta.contentState.pagination && e.path === e.fullPath && n.push(e.path + "?page=1")
                    }
                    var r = n.filter((function(e) {
                        return t.$store.getters.getShouldLoad(e)
                    }));
                    r.length ? ("function" === typeof t.loadStart && t.loadStart(), t.$store.dispatch("fetchPages", r).then((function() {
                        i(),
                        "function" === typeof t.loadEnd && t.loadEnd()
                    }))) : i()
                }
            },
            S = {
                state: k,
                actions: {
                    fetchPages: function(t, e) {
                        var a = t.commit;
                        return Promise.all(e.map((function(t) {
                            return A(t).then((function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                a("setPages", {
                                    pages: t
                                })
                            }))
                        })))
                    },
                    fetchPage: function(t, e) {
                        var a = t.commit;
                        return A(e).then((function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            a("setPages", {
                                pages: t
                            })
                        }))
                    },
                    updatePages: function(t, e) {
                        var a = t.commit,
                            i = e.pages;
                        a("setPages", {
                            pages: i
                        })
                    }
                },
                mutations: {
                    setPages: function(t, e) {
                        var a = e.pages;
                        Object.keys(a).forEach((function(e) {
                            var s = t[e];
                            (!s || s && !0 !== s._loaded) && i["default"].set(t, e, a[e])
                        }))
                    },
                    setPage: function(t, e) {
                        var a = e.url,
                            s = e.page;
                        i["default"].set(t, a, s)
                    }
                },
                getters: {
                    getPage: function(t) {
                        return function(e) {
                            return t[e]
                        }
                    },
                    getPages: function(t) {
                        return function(e) {
                            return e && Array.isArray(e) ? e.map((function(e) {
                                return t[e]
                            })).filter((function(t) {
                                return t
                            })) : []
                        }
                    },
                    getShouldLoad: function(t) {
                        return function(e) {
                            var a = t[e];
                            if (!a || a && !0 !== a._loaded)
                                return !0
                        }
                    },
                    getPartiallyLoaded: function(t) {
                        return function(e) {
                            var a = t[e];
                            if (a && !1 === a._loaded)
                                return !0
                        }
                    },
                    getThumbnail: function() {
                        return function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = void 0;
                            return t.thumbnail && (e = t.files[t.thumbnail]), !e && Array.isArray(t.files) && (e = t.files[0]), e
                        }
                    }
                }
            },
            T = {
                computed: {
                    site: function() {
                        return this.$store.getters.getPage("*")
                    },
                    page: function() {
                        var t = P(this.$route.path);
                        return this.$store.getters.getPage(t) || {}
                    },
                    pages: function() {
                        return this.$store.getters.getPages(v()(this, "page.pages"))
                    },
                    thumbnail: function() {
                        return this.$store.getters.getThumbnail(this.page)
                    },
                    qpage: function() {
                        if (v()(this.$route, "meta.contentState.params")) {
                            var t = P(this.$route.path),
                                e = P(this.$route.fullPath),
                                a = e !== t ? e : t + "?page=1";
                            return this.$store.getters.getPage(a)
                        }
                        return {}
                    },
                    qpages: function() {
                        return this.$store.getters.getPages(v()(this, "qpage.pages"))
                    }
                }
            };
        function A(t) {
            return new Promise((function(e, a) {
                fetch(w + t).then((function(t) {
                    return t.json()
                })).then((function(a) {
                    "error" === a.status ? e(Object(C["a"])({}, t, {
                        _error: "Could not load"
                    })) : e(a)
                })).catch(a)
            }))
        }
        function P(t) {
            return t.replace(/\/$/, "").replace("/?", "?") || "/"
        }
        var j = {
                api: x,
                mod: S,
                mixin: T
            },
            O = (a("3b2b"), a("8c50")),
            I = a.n(O),
            L = function() {
                I()(document.body, "a[href]", "click", (function(t) {
                    var e = new RegExp("/" + window.location.host + "/");
                    e.test(t.delegateTarget.href) || (t.preventDefault(), t.stopPropagation(), window.open(t.delegateTarget.href, "_blank"))
                }))
            },
            $ = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "BarAudio"
                }, [e("range-slider", {
                    attrs: {
                        min: "0",
                        max: "10000",
                        step: "1"
                    },
                    on: {
                        change: t.onChange,
                        input: t.onInput
                    },
                    model: {
                        value: t.position,
                        callback: function(e) {
                            t.position = e
                        },
                        expression: "position"
                    }
                }), e("div", {
                    staticClass: "interface"
                }, [e("button", {
                    class: ["play-pause", t.getIcon],
                    on: {
                        click: t.onPlayPauseClick
                    }
                }), t.isLoading ? e("div", {
                    staticClass: "title"
                }, [t._v("Loading…")]) : e("router-link", {
                    ref: "title",
                    staticClass: "title hover",
                    attrs: {
                        to: t.broadcast.pageUrl
                    }
                }, [t._v("\n      " + t._s(t.broadcast.title) + "\n    ")]), t.isError ? e("div", {
                    staticClass: "timecode"
                }) : e("div", {
                    staticClass: "timecode"
                }, [t._v(t._s(t.timecode))]), e("button", {
                    staticClass: "icon icon-button-close close",
                    on: {
                        click: t.onCloseClick
                    }
                })], 1)], 1)
            },
            M = [],
            D = a("c7e3"),
            z = a.n(D),
            B = (a("2760"), {
                name: "BarAudio",
                components: {
                    RangeSlider: z.a
                },
                data: function() {
                    return {
                        disabled: !1
                    }
                },
                methods: {
                    onCloseClick: function() {
                        this.$store.dispatch("closeBroadcast")
                    },
                    onPlayPauseClick: function() {
                        this.$store.dispatch("toggleBroadcast")
                    },
                    onInput: function() {
                        this.disabled || (this.disabled = !0, this.$store.dispatch("pauseBroadcast"))
                    },
                    onChange: function(t) {
                        var e = this,
                            a = t * this.broadcast.duration / 1e4;
                        this.$store.dispatch("seekBroadcast", a),
                        this.$nextTick((function() {
                            return e.$store.dispatch("playBroadcast")
                        })),
                        this.disabled = !1
                    }
                },
                computed: {
                    broadcast: function() {
                        return this.$store.state.audio.broadcast
                    },
                    position: {
                        get: function() {
                            var t = parseInt(this.broadcast.position),
                                e = t / this.broadcast.duration * 1e4;
                            return e || 0
                        },
                        set: function(t) {
                            return t
                        }
                    },
                    isLinkVisible: function() {
                        return this.broadcast.pageUrl && this.$route.path !== this.broadcast.pageUrl
                    },
                    getIcon: function() {
                        return this.broadcast.paused ? "icon-player-play" : "icon-player-pause"
                    },
                    timecode: function() {
                        return [this.broadcast.position, this.broadcast.duration].map(E).join("/")
                    },
                    isLoading: function() {
                        return 0 === (this.broadcast.position && this.broadcast.duration)
                    },
                    isError: function() {
                        return 1 === (this.broadcast.position && this.broadcast.duration)
                    }
                }
            });
        function E(t) {
            var e = parseInt(t % 60),
                a = parseInt(t / 60 % 60),
                i = parseInt(t / 3600 % 24);
            return a = a < 10 ? "0" + a : a, e = e < 10 ? "0" + e : e, [i, a, e].filter((function(t) {
                return t
            })).join(":")
        }
        var H = B,
            N = (a("7e1b"), a("9fb2"), a("2877")),
            q = Object(N["a"])(H, $, M, !1, null, "569d7a55", null),
            R = q.exports,
            U = function() {
                var t = this,
                    e = t._self._c;
                return e("div", [t.showBanner ? e("div", {
                    staticClass: "banner"
                }, [e("span", [t._v("\n      You are in cache bypass mode\n      "), e("button", {
                    staticClass: "exit",
                    on: {
                        click: t.exitCacheBypass
                    }
                }, [t._v("\n        press here to exit\n      ")]), t._v("\n      .\n    ")])]) : t._e()])
            },
            V = [],
            F = (a("28a5"), a("386d"), {
                computed: {
                    showBanner: function() {
                        var t = new URLSearchParams(window.location.search),
                            e = t.get("ignore_cache");
                        return !!e
                    }
                },
                methods: {
                    exitCacheBypass: function() {
                        history.pushState({}, null, location.href.split("?")[0]),
                        window.location.reload(!0)
                    }
                }
            }),
            W = F,
            Y = (a("44e4"), Object(N["a"])(W, U, V, !1, null, "7e9fb120", null)),
            G = Y.exports,
            J = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "HeaderWrap"
                }, [e("div", {
                    staticClass: "Header mobile"
                }, [e("div", {
                    staticClass: "mobile-bar"
                }, [e("BarStream", {
                    attrs: {
                        "time-visible": !1
                    }
                }), e("button", {
                    class: {
                        "icon-mobile-menu": !t.mobileOpen,
                        "icon-mobile-menu-close": t.mobileOpen
                    },
                    on: {
                        click: function(e) {
                            t.mobileOpen = !t.mobileOpen
                        }
                    }
                }, [e("span")])], 1), e("div", {
                    staticClass: "mobile-nav",
                    style: {
                        display: t.mobileOpen ? "flex" : "none"
                    }
                }, [e("vue-link", {
                    class: {
                        active: "/" === t.$route.path
                    },
                    attrs: {
                        to: "/"
                    }
                }, [e("span", [t._v("Home")])]), t._l(t.links, (function(a) {
                    return e("vue-link", {
                        key: a.url,
                        class: {
                            active: t.$route.meta.active === a.url
                        },
                        attrs: {
                            to: a.url
                        }
                    }, [e("span", [t._v(t._s(a.title))])])
                })), e("div", {
                    staticClass: "search-link"
                }, [e("router-link", {
                    staticClass: "icon-search-sprite",
                    attrs: {
                        to: "/search"
                    }
                }), e("router-link", {
                    attrs: {
                        to: "/search"
                    }
                }, [t._v("Search")])], 1)], 2)]), e("div", {
                    staticClass: "Header desktop a-hover"
                }, [e("div", {
                    staticClass: "header-holder"
                }, [e("div", {
                    staticClass: "header-logo"
                }, [e("div", {
                    staticClass: "spacer"
                }), e("router-link", {
                    staticClass: "dublab-link",
                    attrs: {
                        to: "/"
                    }
                }, [t._v("dublab")]), e("div", {
                    staticClass: "spacer"
                })], 1), e("div", {
                    staticClass: "header-stack"
                }, [e("div", {
                    staticClass: "Navigation"
                }, [e("router-link", {
                    staticClass: "icon-search-sprite",
                    attrs: {
                        to: "/search"
                    }
                }), t._l(t.links, (function(a) {
                    return e("vue-link", {
                        key: a.url,
                        class: {
                            active: t.$route.meta.active === a.url
                        },
                        attrs: {
                            to: a.url
                        }
                    }, [e("span", [t._v(t._s(a.title))])])
                })), e("h1"), t.timeVisible ? e("div", {
                    staticClass: "time"
                }, [t._v("\n            " + t._s(t.date.time) + " " + t._s(t.date.timezone) + "\n          ")]) : t._e()], 2), e("BarStream")], 1)])])])
            },
            Z = [];
        a("8e6e");
        function Q(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                a.push.apply(a, i)
            }
            return a
        }
        function K(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Q(Object(a), !0).forEach((function(e) {
                    Object(C["a"])(t, e, a[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Q(Object(a)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }))
            }
            return t
        }
        var X = {
                STRIP: "strip",
                ADD: "add"
            },
            tt = function(t, e) {
                return t ? t === X.ADD ? /\/#/.test(e) ? e : /[^/]#/.test(e) ? e.replace(/([^/])#/, "$1/#") : /\/$/.test(e) ? e : "".concat(e, "/") : /\/$/.test(e) ? e.slice(0, -1) : e.replace("/#", "#") : e
            },
            et = function(t) {
                return !t.to || /^(http|\/\/)/.test(t.to) || t.external
            },
            at = function(t, e) {
                return {
                    functional: !0,
                    render: function(a, i) {
                        var s = i.data,
                            n = i.children,
                            r = i.props;
                        s.props = r,
                        s.props.slashes = s.props.slashes || t;
                        var o = et(s.props);
                        o || (s.props.to = tt(s.props.slashes, s.props.to));
                        var c = e ? "NuxtLink" : "RouterLink";
                        return o ? a("a", K(K({}, s), {}, {
                            attrs: K(K({}, s.attrs), {}, {
                                href: s.props.to || void 0,
                                rel: s.props.rel || "noopener",
                                target: s.props.target || (s.props.newTab ? "_blank" : void 0)
                            })
                        }), n) : a(c, s, n)
                    }
                }
            },
            it = at(),
            st = (at(void 0, !0), at(X.ADD, !0), at(X.STRIP, !0), at(X.ADD), at(X.STRIP), it),
            nt = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "BarStream"
                }, [e("div", {
                    staticClass: "status hover"
                }, [e("button", {
                    on: {
                        click: t.onAudioClick
                    }
                }, [e("span", {
                    class: t.getIcon
                }), e("span", [t._v(t._s(t.getOnAir))])])]), e("div", {
                    staticClass: "title"
                }, [e("marquee-conditional", {
                    attrs: {
                        content: t.getTitle
                    }
                })], 1), e("div", {
                    staticClass: "spacer"
                })])
            },
            rt = [],
            ot = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    directives: [{
                        name: "resize",
                        rawName: "v-resize",
                        value: t.onResize,
                        expression: "onResize"
                    }],
                    ref: "outer",
                    staticClass: "MarqueeConditional"
                }, [e("div", {
                    directives: [{
                        name: "resize",
                        rawName: "v-resize",
                        value: t.onInnerResize,
                        expression: "onInnerResize"
                    }],
                    ref: "inner",
                    class: ["inner", {
                        hidden: t.overflow
                    }]
                }, [e("div", {
                    domProps: {
                        innerHTML: t._s(t.content)
                    }
                })]), t.overflow ? e("Marquee", {
                    attrs: {
                        items: t.marqueeContent,
                        autoplay: !0,
                        instant: !0,
                        isHeader: !0,
                        isOverflow: this.overflow
                    }
                }) : t._e()], 1)
            },
            ct = [],
            lt = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "marquee-container",
                    style: {
                        opacity: this.hide && !this.instant ? 0 : 1
                    },
                    on: {
                        mouseleave: t.play,
                        mouseenter: t.pause
                    }
                }, [e("a", {
                    staticClass: "donateLink",
                    style: {
                        display: this.isOverflow && this.isHeader ? "none" : "inline"
                    },
                    attrs: {
                        href: "https://shop.dublab.com/products/dublab-donation"
                    }
                }, [e("button", {
                    class: ["button pill solid donatepill"]
                }, [t._v("Donate")])]), t.items ? e("flickity", {
                    ref: "flickity",
                    staticClass: "marquee",
                    style: {
                        width: this.isOverflow && this.isHeader && "100%"
                    },
                    attrs: {
                        options: t.flickityOptions
                    },
                    on: {
                        init: t.flickityInit
                    }
                }, t._l(t.items, (function(a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "marquee-item"
                    }, [a.url ? e("vue-link", {
                        attrs: {
                            to: a.url
                        },
                        domProps: {
                            innerHTML: t._s(a.text)
                        }
                    }) : e("span", {
                        domProps: {
                            innerHTML: t._s(a.text)
                        }
                    }), e("span", {
                        staticClass: "spacer"
                    }, [t._v("•")])], 1)
                })), 0) : t._e()], 1)
            },
            ut = [],
            dt = a("b394"),
            pt = {
                name: "Marquee",
                components: {
                    Flickity: dt["a"],
                    VueLink: st
                },
                props: {
                    items: Array,
                    autoplay: Boolean,
                    instant: Boolean,
                    isHeader: {
                        type: Boolean,
                        default: !1
                    },
                    isOverflow: Boolean
                },
                data: function() {
                    return {
                        playing: !1,
                        raf: null,
                        x: 0,
                        flickityOptions: {
                            freeScroll: !0,
                            prevNextButtons: !1,
                            pageDots: !1,
                            wrapAround: !0,
                            cellAlign: "left"
                        },
                        fixTick: null,
                        autoplayTick: null,
                        hide: !0
                    }
                },
                methods: {
                    flickityInit: function() {
                        var t = this;
                        this.$refs.flickity.on("dragStart", (function() {
                            t.$refs.flickity.$el.style.pointerEvents = "none"
                        })),
                        this.$refs.flickity.on("dragEnd", (function() {
                            t.$refs.flickity.$el.style.pointerEvents = "auto"
                        })),
                        this.$refs.flickity.$flickity.x = 0,
                        this.fixTick = setTimeout((function() {
                            t.$refs.flickity.resize(),
                            t.hide = !1
                        }), 500),
                        this.autoplay && (this.autoplayTick = setTimeout((function() {
                            t.play()
                        }), 1e3))
                    },
                    play: function() {
                        this.playing || (this.playing = !0, this.frame())
                    },
                    frame: function() {
                        this.$refs.flickity.$flickity.x = this.$refs.flickity.$flickity.x - .5,
                        this.$refs.flickity.$flickity.positionSlider(),
                        this.raf = window.requestAnimationFrame(this.frame)
                    },
                    pause: function() {
                        window.cancelAnimationFrame(this.raf),
                        this.raf = void 0,
                        this.playing = !1
                    }
                },
                beforeDestroy: function() {
                    this.pause(),
                    clearTimeout(this.fixTick),
                    clearTimeout(this.autoplayTick)
                }
            },
            mt = pt,
            ft = (a("d4b6"), Object(N["a"])(mt, lt, ut, !1, null, "1ea90c1f", null)),
            ht = ft.exports,
            vt = a("428d"),
            gt = a.n(vt),
            bt = {
                name: "MarqueeConditional",
                components: {
                    Marquee: ht
                },
                directives: {
                    resize: gt.a
                },
                props: {
                    content: String
                },
                data: function() {
                    return {
                        overflow: !1
                    }
                },
                computed: {
                    marqueeContent: function() {
                        return [{
                            text: this.content
                        }, {
                            text: this.content
                        }]
                    }
                },
                mounted: function() {
                    this.onResize()
                },
                methods: {
                    onResize: function() {
                        var t = this.$refs.outer,
                            e = this.$refs.inner,
                            a = t.offsetWidth,
                            i = e.offsetWidth;
                        i > a ? this.overflow || (this.overflow = !0) : this.overflow && (this.overflow = !1)
                    },
                    onInnerResize: function() {
                        this.onResize()
                    }
                }
            },
            _t = bt,
            yt = (a("4c1a"), Object(N["a"])(_t, ot, ct, !1, null, "d239eb30", null)),
            Ct = yt.exports,
            wt = {
                name: "BarStream",
                components: {
                    MarqueeConditional: Ct
                },
                props: {
                    timeVisible: {
                        type: Boolean,
                        default: !0
                    }
                },
                methods: {
                    onAudioClick: function() {
                        this.$store.dispatch("toggleStream")
                    }
                },
                computed: {
                    getOnAir: function() {
                        return this.stream.paused ? "Tune In" : "On Air"
                    },
                    getTitle: function() {
                        return this.stream.loaded ? this.stream.combo : "Loading…"
                    },
                    stream: function() {
                        return this.$store.state.audio.stream
                    },
                    getIcon: function() {
                        return this.$store.state.audio.stream.paused ? "icon-player-play" : "icon-player-stop"
                    },
                    date: function() {
                        return this.$store.state.date.local
                    }
                }
            },
            kt = wt,
            xt = (a("0474"), a("ca4c"), Object(N["a"])(kt, nt, rt, !1, null, "2210cc27", null)),
            St = xt.exports,
            Tt = {
                name: "Header",
                components: {
                    VueLink: st,
                    BarStream: St
                },
                props: {
                    timeVisible: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        mobileOpen: !1
                    }
                },
                watch: {
                    $route: function() {
                        this.mobileOpen = !1
                    }
                },
                computed: {
                    site: function() {
                        return this.$store.state.content["*"]
                    },
                    links: function() {
                        return this.site ? this.site.navigation : []
                    },
                    takeoverTitleReversed: function() {
                        var t = this.site.takeover.title,
                            e = t.split(" ").reverse();
                        return e
                    },
                    date: function() {
                        return this.$store.state.date.local
                    }
                }
            },
            At = Tt,
            Pt = (a("25f1"), a("b247"), a("9c55"), Object(N["a"])(At, J, Z, !1, null, "2a330032", null)),
            jt = Pt.exports,
            Ot = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "Footer"
                }, [e("router-link", {
                    staticClass: "logo",
                    attrs: {
                        to: "/"
                    }
                }, [e("img", {
                    attrs: {
                        src: t.inverted ? t.logoOutline : t.logo
                    }
                })]), e("div", {
                    staticClass: "footer-boxes"
                }, [e("div", {
                    staticClass: "footer-box"
                }, [t.site ? e("div", {
                    class: ["description", "a-hover", {
                        "a-grey": !t.inverted
                    }],
                    domProps: {
                        innerHTML: t._s(t.site.footer)
                    }
                }) : t._e()]), e("div", {
                    staticClass: "footer-box-middle"
                }, t._l(t.links, (function(a) {
                    return e("vue-link", {
                        key: a.url,
                        class: {
                            active: t.$route.meta.active === a.url
                        },
                        attrs: {
                            to: a.url
                        }
                    }, [e("span", [t._v(t._s(a.title))])])
                })), 1), t._m(0), e("div", {
                    staticClass: "footer-box"
                }, [t.site ? e("div", {
                    staticClass: "link-list"
                }, t._l(t.site.social_links, (function(a) {
                    return e("div", {
                        key: a.url
                    }, [e("a", {
                        staticClass: "hover",
                        attrs: {
                            href: a.url
                        }
                    }, [t._v(t._s(a.text))])])
                })), 0) : t._e()])])], 1)
            },
            It = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "footer-box-middle"
                }, [e("a", {
                    attrs: {
                        href: "/supporters#supporter-circle"
                    }
                }, [e("span", [t._v("Supporters Circle")])]), e("a", {
                    attrs: {
                        href: "/supporters#major-donors"
                    }
                }, [e("span", [t._v("Major Donors")])]), e("a", {
                    attrs: {
                        href: "/supporters#sponsor"
                    }
                }, [e("span", [t._v("Sponsorship")])]), e("a", {
                    attrs: {
                        href: "/support"
                    }
                }, [e("span", [t._v("Membership")])]), e("a", {
                    attrs: {
                        href: "https://shop.dublab.com/products/dublab-donation"
                    }
                }, [e("span", [t._v("Donate")])])])
            }],
            Lt = a("fe48"),
            $t = a.n(Lt),
            Mt = a("d2f3"),
            Dt = a.n(Mt),
            zt = {
                name: "Footer",
                components: {
                    VueLink: st
                },
                data: function() {
                    return {
                        logo: $t.a,
                        logoOutline: Dt.a
                    }
                },
                props: {
                    inverted: {
                        default: !1
                    }
                },
                computed: {
                    site: function() {
                        return this.$store.getters.getPage("*")
                    },
                    links: function() {
                        return this.site ? this.site.navigation : []
                    }
                }
            },
            Bt = zt,
            Et = (a("3cb9"), a("cb58"), Object(N["a"])(Bt, Ot, It, !1, null, "41749928", null)),
            Ht = Et.exports,
            Nt = {
                name: "Layout",
                components: {
                    Header: jt,
                    Footer: Ht,
                    BarAudio: R,
                    PreviewBanner: G
                },
                mixins: [T],
                data: function() {
                    return {
                        frame: {},
                        scrollingUp: !1
                    }
                },
                metaInfo: function() {
                    var t = this.site ? Object.assign({}, this.site.meta) : {};
                    this.page && this.page.meta && (t = Object.assign(t, this.page.meta));
                    var e = v()(this.page, "title") || v()(this.site, "title"),
                        a = [{
                            charset: "utf-8"
                        }, {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }, {
                            name: "twitter:card",
                            content: "summary_large_image",
                            vmid: "og:card"
                        }, {
                            name: "twitter:image",
                            content: t.image,
                            vmid: "og:image"
                        }, {
                            name: "description",
                            content: t.description,
                            vmid: "description"
                        }, {
                            property: "og:title",
                            content: e,
                            vmid: "og:title"
                        }, {
                            property: "og:description",
                            content: t.description,
                            vmid: "og:description"
                        }, {
                            property: "og:type",
                            content: "website",
                            vmid: "og:type"
                        }, {
                            property: "og:image",
                            content: t.image,
                            vmid: "og:image"
                        }];
                    return this.isNotFound && a.push({
                        property: "prerender-status-code",
                        content: 404,
                        vmid: "prerender-status-code"
                    }), {
                        title: !!this.page && this.page.title,
                        titleTemplate: function(t) {
                            return t ? "".concat(t, " - dublab") : "dublab"
                        },
                        meta: a
                    }
                },
                created: function() {
                    var t = this;
                    this.$store.dispatch("fetchPage", "/*"),
                    this.$store.dispatch("refreshBroadcast"),
                    this.$store.dispatch("startTime"),
                    setInterval((function() {
                        return t.$store.dispatch("refreshBroadcast")
                    }), 36e5),
                    this.frame.scrollDir = b.a.create(),
                    this.frame.scrollDir.on("change", (function(e) {
                        t.scrollingUp = -1 === e.direction
                    })),
                    L(),
                    this.$Progress.start(),
                    this.$router.beforeEach((function(e, a, i) {
                        if (void 0 !== e.meta.progress) {
                            var s = e.meta.progress;
                            t.$Progress.parseMeta(s)
                        }
                        t.$Progress.start(),
                        i()
                    })),
                    this.$router.afterEach((function() {
                        t.$Progress.finish()
                    }))
                },
                mounted: function() {
                    this.handleResize(),
                    window.addEventListener("resize", this.handleResize)
                },
                willDestroy: function() {
                    this.frame.scrollDir.destroy(),
                    window.removeEventListener("resize", this.handleResize),
                    this.$store.dispatch("stopTime")
                },
                computed: {
                    isHeaderActive: function() {
                        return null !== this.$route.name
                    },
                    isHeaderAtBottom: function() {
                        return !1
                    },
                    isFooterActive: function() {
                        return !["/", "/tv"].includes(this.$route.path)
                    },
                    isBroadcastActive: function() {
                        return this.$store.state.audio.broadcast.active
                    },
                    isLoading: function() {
                        return this.$store.state.ui.loading
                    },
                    isNotFound: function() {
                        return this.page._notfound && !this.page.url.includes("schedule")
                    },
                    isHeaderSticky: function() {
                        return "/" !== this.$route.path
                    },
                    isInverted: function() {
                        return "drive" === this.$route.name || "takeover" === this.$route.name
                    },
                    getAppClasses: function() {
                        return [{
                            loading: this.isLoading
                        }, {
                            bottom: this.isHeaderAtBottom
                        }, {
                            audioVisible: this.isBroadcastActive
                        }, {
                            sticky: this.isHeaderSticky
                        }, {
                            "no-touch": !y.a
                        }, {
                            drive: "drive" === this.$route.name || "takeover" === this.$route.name
                        }, {
                            invert: this.isInverted
                        }]
                    }
                },
                methods: {
                    handleResize: function() {
                        this.$refs.app && (this.$refs.app.style.minHeight = window.innerHeight + "px")
                    }
                }
            },
            qt = Nt,
            Rt = (a("dae5"), a("15c8"), Object(N["a"])(qt, m, f, !1, null, "f1b4c660", null)),
            Ut = Rt.exports,
            Vt = (a("4917"), a("8c4f")),
            Ft = (a("b54a"), function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: ["SupportSection grid", this.$route.params.section, {
                        isSupport: t.isSupport,
                        hasFlickity: t.page.slideshow
                    }]
                }, [t.isSupport ? e("nav", {
                    staticClass: "grid desktop pill-hover"
                }, [e("router-link", {
                    staticClass: "pill",
                    attrs: {
                        to: "/support/memberships"
                    }
                }, [t._v("Memberships")]), e("router-link", {
                    staticClass: "pill",
                    attrs: {
                        to: "/support/donations"
                    }
                }, [t._v("Donations")]), e("router-link", {
                    staticClass: "pill",
                    attrs: {
                        to: "/support/sponsorships"
                    }
                }, [t._v("Sponsorships")]), e("a", {
                    staticClass: "pill external",
                    attrs: {
                        href: "https://dublab.myshopify.com/",
                        target: "_blank"
                    }
                }, [t._v("Store")])], 1) : t._e(), t.isSupport ? e("nav", {
                    staticClass: "mobile"
                }, [e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.navigation.active,
                        expression: "navigation.active"
                    }],
                    staticClass: "pill",
                    on: {
                        change: function(e) {
                            var a = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.$set(t.navigation, "active", e.target.multiple ? a : a[0])
                        }
                    }
                }, t._l(t.navigation.links, (function(a, i) {
                    return e("option", {
                        key: i,
                        domProps: {
                            value: i
                        }
                    }, [t._v(t._s(a))])
                })), 0)]) : t._e(), t.page.slideshow ? e("dublab-gallery", {
                    attrs: {
                        images: t.page.slideshow,
                        extend: !0
                    }
                }) : t._e(), e("div", {
                    staticClass: "sidebar"
                }, [e("runtime-content", {
                    attrs: {
                        content: t.sidebarContent
                    }
                })], 1), e("div", {
                    staticClass: "content-container"
                }, [e("div", {
                    staticClass: "content"
                }, [e("runtime-content", {
                    attrs: {
                        content: t.mainContent
                    }
                }), t.page.tabs ? e("div", [e("form", {
                    staticClass: "tabs"
                }, [e("div", {
                    staticClass: "radio-group"
                }, t._l(t.getTabs, (function(a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "radio-pill"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.active,
                            expression: "active"
                        }],
                        attrs: {
                            type: "radio",
                            id: "tab-" + i,
                            name: "tabs"
                        },
                        domProps: {
                            value: i,
                            checked: t._q(t.active, i)
                        },
                        on: {
                            change: function(e) {
                                t.active = i
                            }
                        }
                    }), e("label", {
                        attrs: {
                            for: "tab-" + i
                        }
                    }, [t._v(t._s(a.title))])])
                })), 0), e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.active,
                        expression: "active"
                    }],
                    staticClass: "pill",
                    on: {
                        change: function(e) {
                            var a = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.active = e.target.multiple ? a : a[0]
                        }
                    }
                }, t._l(t.getTabs, (function(a, i) {
                    return e("option", {
                        key: i,
                        domProps: {
                            value: i
                        }
                    }, [t._v(t._s(a.title))])
                })), 0)]), t.getTabItems ? e("div", {
                    class: ["tab-items", t.getTabItemsTemplate]
                }, t._l(t.getTabItems, (function(a) {
                    return e("AboutThumb", {
                        key: a.title,
                        attrs: {
                            item: a,
                            template: t.getTabItemsTemplate
                        }
                    })
                })), 1) : t._e(), t.getActive ? e("div", {
                    staticClass: "tab-totals pill-hover"
                }, [e("div", [t._v("Total: " + t._s(t.getActive.title))]), t.getActive.link ? e("a", {
                    staticClass: "pill",
                    attrs: {
                        href: t.getActive.link
                    }
                }, [t._v(t._s(t.getActive.link_text))]) : t._e()]) : t._e()]) : t._e(), e("BoxDonate", {
                    staticClass: "desktop"
                })], 1)])], 1)
            }),
            Wt = [],
            Yt = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "DublabGallery"
                }, [t.hasImages ? e("flickity", {
                    key: t.id,
                    ref: "flickity",
                    staticClass: "flickity",
                    attrs: {
                        options: t.flickityOptions
                    }
                }, t._l(t.images, (function(a, i) {
                    return e("div", {
                        key: i,
                        class: ["slide-container", t.size, {
                            extend: t.extend
                        }]
                    }, [e("div", {
                        staticClass: "slide",
                        style: {
                            backgroundImage: "url(" + a.sizes.medium_large + ")"
                        }
                    })])
                })), 0) : t._e()], 1)
            },
            Gt = [],
            Jt = (a("6b54"), a("fc3a"), {
                name: "DublabGallery",
                props: {
                    images: Array,
                    fit: Boolean,
                    extend: Boolean
                },
                components: {
                    Flickity: dt["a"]
                },
                data: function() {
                    return {
                        flickityOptions: {
                            autoPlay: !0,
                            pauseAutoPlayOnHover: !1,
                            initialIndex: 0,
                            prevNextButtons: !1,
                            pageDots: !1,
                            wrapAround: !0,
                            cellAlign: "left"
                        }
                    }
                },
                computed: {
                    hasImages: function() {
                        return this.images && this.images.length
                    },
                    size: function() {
                        return this.fit ? "size--fit" : "size--viewport"
                    },
                    id: function() {
                        return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5)
                    }
                }
            }),
            Zt = Jt,
            Qt = (a("5cc1"), Object(N["a"])(Zt, Yt, Gt, !1, null, "1e6eba9b", null)),
            Kt = Qt.exports,
            Xt = function() {
                var t = this,
                    e = t._self._c;
                return t.item.link ? e("vue-link", {
                    class: ["AboutThumb", t.template],
                    attrs: {
                        to: t.item.link
                    }
                }, [e("article", [e("h2", [e("span", {
                    class: ["a-hover"],
                    domProps: {
                        innerHTML: t._s(t.item.title)
                    }
                })]), e("div", {
                    staticClass: "copy",
                    domProps: {
                        innerHTML: t._s(t.item.text)
                    }
                })]), t.thumbnailUrl && t.block ? e("div", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy:background-image",
                        value: t.thumbnailUrl,
                        expression: "thumbnailUrl",
                        arg: "background-image"
                    }],
                    staticClass: "image"
                }) : t.thumbnailUrl ? e("LazyImage", {
                    attrs: {
                        image: t.thumbnail,
                        size: "medium",
                        zoom: !0
                    }
                }) : t._e()], 1) : e("div", {
                    class: ["AboutThumb", t.template]
                }, [e("article", [e("h2", [e("span", {
                    class: ["a-hover"]
                }, [t._v(t._s(t.item.title))])]), e("div", {
                    staticClass: "copy",
                    domProps: {
                        innerHTML: t._s(t.item.text)
                    }
                })]), t.thumbnailUrl && t.block ? e("div", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy:background-image",
                        value: t.thumbnailUrl,
                        expression: "thumbnailUrl",
                        arg: "background-image"
                    }],
                    key: t.thumbnailUrl,
                    staticClass: "image"
                }) : t.thumbnailUrl ? e("LazyImage", {
                    attrs: {
                        image: t.thumbnail,
                        size: "medium",
                        zoom: !0
                    }
                }) : t._e()], 1)
            },
            te = [],
            ee = function() {
                var t = this,
                    e = t._self._c;
                return e("figure", {
                    class: {
                        circle: t.circle
                    }
                }, [t.image ? e("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.url,
                        expression: "url"
                    }],
                    key: t.image.url,
                    ref: "image",
                    attrs: {
                        "data-zoom-src": t.image.url
                    }
                }) : e("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.fallback,
                        expression: "fallback"
                    }],
                    key: t.fallback
                })])
            },
            ae = [],
            ie = a("d15e"),
            se = a("e0fe"),
            ne = a.n(se),
            re = {
                name: "LazyImage",
                props: {
                    image: Object,
                    size: {
                        type: String
                    },
                    circle: {
                        type: Boolean,
                        default: !1
                    },
                    zoom: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        fallback: ne.a,
                        zoomInstance: null
                    }
                },
                computed: {
                    url: function() {
                        return this.size && this.image.sizes && this.image.sizes[this.size] || this.image.url
                    }
                },
                methods: {
                    attachZoom: function() {
                        this.zoom && this.$refs.image && !this.zoomInstance && (this.zoomInstance = Object(ie["a"])(this.$refs.image, {
                            margin: 20
                        }))
                    },
                    detachZoom: function() {
                        this.zoomInstance && (this.zoomInstance.detach(), this.zoomInstance = null)
                    }
                },
                beforeUpdate: function() {
                    this.detachZoom()
                },
                beforeDestroy: function() {
                    this.detachZoom()
                },
                updated: function() {
                    this.attachZoom()
                },
                mounted: function() {
                    this.attachZoom()
                }
            },
            oe = re,
            ce = (a("4970"), a("928e"), Object(N["a"])(oe, ee, ae, !1, null, "33e56674", null)),
            le = ce.exports,
            ue = {
                name: "AboutThumb",
                components: {
                    VueLink: st,
                    LazyImage: le
                },
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    },
                    template: {
                        type: String,
                        default: "block"
                    }
                },
                computed: {
                    thumbnailUrl: function() {
                        return v()(this.item, "image.sizes.medium_large") || v()(this.item, "image.url")
                    },
                    thumbnail: function() {
                        return this.item.image
                    },
                    block: function() {
                        return "block" === this.template
                    },
                    row: function() {
                        return "row" === this.template
                    }
                }
            },
            de = ue,
            pe = (a("43b1"), Object(N["a"])(de, Xt, te, !1, null, "55127cac", null)),
            me = pe.exports,
            fe = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "donate"
                }, [e("router-link", {
                    staticClass: "note box dashed",
                    attrs: {
                        to: "/support"
                    }
                }, [e("p", [t._v("Our members help us stay on the air. Donate now!")])])], 1)
            },
            he = [],
            ve = (a("5e89"), {}),
            ge = Object(N["a"])(ve, fe, he, !1, null, null, null),
            be = ge.exports,
            _e = function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("v-runtime-template", {
                    attrs: {
                        template: t.content
                    }
                })], 1)
            },
            ye = [],
            Ce = a("dd1e"),
            we = function() {
                var t = this,
                    e = t._self._c;
                return e("mailing-list", {
                    staticClass: "mailing-list",
                    attrs: {
                        "submit-text": "Submit",
                        placeholder: "email address",
                        provider: "mailchimp",
                        actionUrl: "https://dublab.us20.list-manage.com/subscribe/post?u=81c8241e4e6ac4f506277d1cd&id=70847da9c8",
                        token: "b_81c8241e4e6ac4f506277d1cd_70847da9c8"
                    }
                }, [e("div", {
                    staticClass: "label",
                    attrs: {
                        slot: "label"
                    },
                    slot: "label"
                }, [t._v("Subscribe to our Newsletter")])])
            },
            ke = [],
            xe = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: t.classes
                }, [t._t("top"), t._t("default"), e("transition", {
                    attrs: {
                        name: t.transitionName,
                        mode: "out-in"
                    }
                }, ["success" != t.state ? e("div", {
                    key: "form",
                    staticClass: "form"
                }, [t._t("before-form"), t.isMadMimi ? e("form", {
                    ref: "form",
                    attrs: {
                        target: "_blank",
                        action: t.actionUrl,
                        "accept-charset": "UTF-8",
                        method: "POST"
                    },
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                }, [e("input", {
                    attrs: {
                        name: "utf8",
                        type: "hidden",
                        value: "✓"
                    }
                }), t._t("label", (function() {
                    return [e("label", {
                        attrs: {
                            for: "mailing_list_email"
                        }
                    }, [t._v("Email")])]
                })), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.email,
                        expression: "email"
                    }],
                    staticClass: "email",
                    attrs: {
                        id: "mailing_list_email",
                        name: "signup[email]",
                        type: "text",
                        placeholder: t.placeholder
                    },
                    domProps: {
                        value: t.email
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.email = e.target.value)
                        }
                    }
                }), e("div", {
                    staticStyle: {
                        background: "white",
                        "font-size": "1px",
                        height: "0",
                        overflow: "hidden"
                    },
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [e("input", {
                    staticStyle: {
                        "font-size": "1px",
                        width: "1px !important",
                        height: "1px !important",
                        border: "0 !important",
                        "line-height": "1px !important",
                        padding: "0 0",
                        "min-height": "1px !important"
                    },
                    attrs: {
                        type: "text",
                        name: t.token,
                        tabindex: "-1"
                    }
                }), e("input", {
                    staticClass: "checkbox",
                    attrs: {
                        type: "checkbox",
                        name: "beacon"
                    }
                })]), t._t("within-form"), e("input", {
                    staticClass: "submit",
                    attrs: {
                        type: "submit"
                    },
                    domProps: {
                        value: t.submitText
                    }
                })], 2) : t.isMailchimp ? e("form", {
                    ref: "form",
                    attrs: {
                        action: t.actionUrl,
                        method: "GET",
                        target: "_blank",
                        novalidate: ""
                    },
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                }, [t._t("label", (function() {
                    return [e("label", {
                        attrs: {
                            for: "mailing_list_email"
                        }
                    }, [t._v("Email")])]
                })), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.email,
                        expression: "email"
                    }],
                    staticClass: "email",
                    attrs: {
                        id: "mailing_list_email",
                        type: "email",
                        name: "EMAIL",
                        placeholder: t.placeholder
                    },
                    domProps: {
                        value: t.email
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.email = e.target.value)
                        }
                    }
                }), e("div", {
                    staticStyle: {
                        position: "absolute",
                        left: "-5000px"
                    },
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [e("input", {
                    attrs: {
                        type: "text",
                        name: t.token,
                        tabindex: "-1",
                        value: ""
                    }
                })]), t._t("within-form"), e("input", {
                    staticClass: "submit",
                    attrs: {
                        type: "submit"
                    },
                    domProps: {
                        value: t.submitText
                    }
                })], 2) : t._e(), t._t("after-form")], 2) : "success" == t.state ? e("div", {
                    key: "success",
                    staticClass: "success-message"
                }, [e("span", {
                    staticClass: "message",
                    domProps: {
                        innerHTML: t._s(t.successMessage)
                    }
                }), t._t("success")], 2) : t._e()]), "error" == t.state ? e("div", {
                    key: "error",
                    staticClass: "error-message"
                }, [e("span", {
                    staticClass: "message",
                    domProps: {
                        innerHTML: t._s(t.errorMessage)
                    }
                }), t._t("error")], 2) : t._e(), t._t("bottom")], 2)
            },
            Se = [],
            Te = a("75fc"),
            Ae = (a("96cf"), a("3b8d")),
            Pe = (a("c5f6"), a("d871")),
            je = a.n(Pe),
            Oe = a("a78e"),
            Ie = a.n(Oe),
            Le = {
                props: {
                    provider: {
                        type: String,
                        default: "mailchimp",
                        validator: function(t) {
                            return ["mailchimp", "madmimi"].includes(t)
                        }
                    },
                    actionUrl: {
                        type: String,
                        required: !0
                    },
                    token: {
                        type: String,
                        required: !0
                    },
                    successMessage: {
                        type: String,
                        default: "Thank You!"
                    },
                    submitText: {
                        type: String,
                        default: "Subscribe"
                    },
                    placeholder: {
                        type: String,
                        default: "Email Address"
                    },
                    transitionName: {
                        type: String,
                        default: "newsletter-submit"
                    },
                    delay: {
                        type: Number,
                        default: 5e3
                    },
                    cookieLength: {
                        type: Number,
                        default: 30
                    }
                },
                data: function() {
                    return {
                        success: !1,
                        errorMessage: "",
                        loading: !1,
                        email: ""
                    }
                },
                computed: {
                    isMadMimi: function() {
                        return "madmimi" == this.provider
                    },
                    isMailchimp: function() {
                        return "mailchimp" == this.provider
                    },
                    state: function() {
                        return this.success ? "success" : this.errorMessage ? "error" : "none"
                    },
                    callbackName: function() {
                        return this.isMadMimi ? "callback" : this.isMailchimp ? "c" : ""
                    },
                    formAction: function() {
                        if (this.isMadMimi)
                            return "".concat(this.actionUrl, ".json?");
                        if (this.isMailchimp) {
                            var t = this.actionUrl.replace("/post?", "/post-json?");
                            return "".concat(t, "&")
                        }
                        return ""
                    },
                    classes: function() {
                        return ["fh-mailing-list", "state-".concat(this.state), "provider-".concat(this.provider), {
                            loading: this.loading
                        }, {
                            empty: !this.email
                        }]
                    }
                },
                methods: {
                    isSuccess: function(t) {
                        return this.isMadMimi ? t.success : !!this.isMailchimp && "success" == t.result
                    },
                    getErrorMessage: function(t) {
                        return this.isMadMimi ? t.error : this.isMailchimp ? t.msg : "Something went wrong. Please try again."
                    },
                    onSubmit: function() {
                        var t = Object(Ae["a"])(regeneratorRuntime.mark((function t() {
                            var e,
                                a,
                                i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return e = new FormData(this.$refs.form), a = Object(Te["a"])(e.entries()).map((function(t) {
                                            return "".concat(encodeURIComponent(t[0]), "=").concat(encodeURIComponent(t[1]))
                                        })), this.loading = !0, t.prev = 3, t.next = 6, je()(this.formAction + a.join("&"), {
                                            jsonpCallback: this.callbackName
                                        }).then((function(t) {
                                            return t.json()
                                        }));
                                    case 6:
                                        i = t.sent,
                                        this.isSuccess(i) ? this.success = !0 : this.errorMessage = this.getErrorMessage(i),
                                        t.next = 13;
                                        break;
                                    case 10:
                                        t.prev = 10,
                                        t.t0 = t["catch"](3),
                                        this.errorMessage = "Something went wrong.";
                                    case 13:
                                        this.$emit("addressSubmitted", {
                                            success: this.success,
                                            errorMessage: this.errorMessage
                                        }),
                                        this.loading = !1;
                                    case 15:
                                    case "end":
                                        return t.stop()
                                    }
                            }), t, this, [[3, 10]])
                        })));
                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                mounted: function() {
                    var t = this;
                    Ie.a.get("newsletter") || (setTimeout((function() {
                        return t.$emit("cookieCreated")
                    }), this.delay), Ie.a.set("newsletter", "true", {
                        expires: this.cookieLength
                    }))
                }
            },
            $e = Le,
            Me = (a("d46d"), Object(N["a"])($e, xe, Se, !1, null, null, null)),
            De = Me.exports,
            ze = {
                name: "SupportSection",
                components: {
                    MailingList: De
                }
            },
            Be = ze,
            Ee = (a("6fdb"), a("dd97"), Object(N["a"])(Be, we, ke, !1, null, "652a8e39", null)),
            He = Ee.exports,
            Ne = {
                data: function() {
                    return {
                        name: "RuntimeContent"
                    }
                },
                props: {
                    content: {
                        default: ""
                    }
                },
                components: {
                    VRuntimeTemplate: Ce["a"],
                    MailingList: He,
                    DublabGallery: Kt
                }
            },
            qe = Ne,
            Re = Object(N["a"])(qe, _e, ye, !1, null, null, null),
            Ue = Re.exports,
            Ve = {
                name: "SupportSection",
                components: {
                    DublabGallery: Kt,
                    AboutThumb: me,
                    BoxDonate: be,
                    RuntimeContent: Ue
                },
                mixins: [T],
                data: function() {
                    return {
                        navigation: {
                            active: this.$route.path,
                            links: {
                                "/support/memberships": "Memberships",
                                "/support/donations": "Donations",
                                "/support/sponsorships": "Sponsorships",
                                "https://dublab.myshopify.com": "Store"
                            }
                        },
                        active: null
                    }
                },
                watch: {
                    "$route.path": function(t) {
                        this.navigation.active !== t && (this.navigation.active = t)
                    },
                    "navigation.active": function(t) {
                        "http" === t.substring(0, 4) ? window.location = t : this.$router.push(t)
                    }
                },
                mounted: function() {
                    if (this.$route.hash) {
                        var t = document.querySelector(this.$route.hash);
                        if (t) {
                            var e = t.getBoundingClientRect(),
                                a = e.top;
                            window.scrollTo(0, a - 80)
                        }
                    }
                },
                computed: {
                    isSupport: function() {
                        return "support" === this.$route.name
                    },
                    getTabs: function() {
                        return v()(this.page, "tabs.options")
                    },
                    getTabItems: function() {
                        var t = this;
                        return v()(this.page, "tabs.entries") ? this.page.tabs.entries.filter((function(e) {
                            return e.level.indexOf(t.active) >= 0
                        })) : null
                    },
                    getActive: function() {
                        if (v()(this.page, "tabs.options")) {
                            var t = Object.keys(this.page.tabs.options);
                            return t.indexOf(this.active) < 0 && this.resetActive(t), this.page.tabs.options[this.active]
                        }
                        return null
                    },
                    getTabItemsTemplate: function() {
                        return "donations" === this.$route.params.section ? "block" : "row"
                    },
                    sidebarContent: function() {
                        return '<div class="copy pill-hover">'.concat(this.page.subcontent, "</div>")
                    },
                    mainContent: function() {
                        return '<div class="copy">'.concat(this.page.content, "</div>")
                    }
                },
                methods: {
                    resetActive: function(t) {
                        this.active = t[0]
                    }
                }
            },
            Fe = Ve,
            We = (a("a040"), Object(N["a"])(Fe, Ft, Wt, !1, null, "5fee0a3f", null)),
            Ye = We.exports,
            Ge = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "body"
                }, [t._m(0), e("div", {
                    staticClass: "section-2 wf-section"
                }, [e("div", {
                    staticClass: "container-4 w-container",
                    attrs: {
                        id: "major-donors"
                    }
                }, [e("h1", {
                    staticClass: "values",
                    attrs: {
                        id: "core-values"
                    }
                }, [t._v("Become a Major Donor")]), t._m(1), e("runtime-content", {
                    attrs: {
                        content: t.mainContent
                    }
                }), t.page.tabs ? e("div", [e("form", {
                    staticClass: "tabs"
                }, [e("div", {
                    staticClass: "radio-group"
                }, t._l(t.getTabs, (function(a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "radio-pill"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.active,
                            expression: "active"
                        }],
                        attrs: {
                            type: "radio",
                            id: "tab-" + i,
                            name: "tabs"
                        },
                        domProps: {
                            value: i,
                            checked: t._q(t.active, i)
                        },
                        on: {
                            change: function(e) {
                                t.active = i
                            }
                        }
                    }), e("label", {
                        attrs: {
                            for: "tab-" + i
                        }
                    }, [t._v(t._s(a.title))])])
                })), 0), e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.active,
                        expression: "active"
                    }],
                    staticClass: "pill",
                    on: {
                        change: function(e) {
                            var a = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.active = e.target.multiple ? a : a[0]
                        }
                    }
                }, t._l(t.getTabs, (function(a, i) {
                    return e("option", {
                        key: i,
                        domProps: {
                            value: i
                        }
                    }, [t._v("\n              " + t._s(a.title) + "\n            ")])
                })), 0)]), t.getTabItems ? e("div", {
                    class: ["tab-items", t.getTabItemsTemplate]
                }, t._l(t.getTabItems, (function(a) {
                    return e("AboutThumb", {
                        key: a.title,
                        attrs: {
                            item: a,
                            template: t.getTabItemsTemplate
                        }
                    })
                })), 1) : t._e(), t.getActive ? e("div", {
                    staticClass: "tab-totals pill-hover"
                }, [e("div", [t._v("Total: " + t._s(t.getActive.title))]), t.getActive.link ? e("a", {
                    staticClass: "pill",
                    attrs: {
                        href: t.getActive.link
                    }
                }, [t._v(t._s(t.getActive.link_text))]) : t._e()]) : t._e()]) : t._e()], 1), t._m(2), t._m(3), t._m(4), t._m(5), t._m(6)])])
            },
            Je = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "aboutsection wf-section"
                }, [e("p", {
                    staticClass: "paragraph-5"
                }, [t._v("Support dublab")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("p", {
                    staticClass: "majordonor"
                }, [t._v("\n        Friends who are able to donate $5,000 or more, provide dublab with the\n        dollar resources that help keep the station they love available to\n        everyone while also enjoying a deeper level of connection for\n        themselves."), e("br"), t._v("‍"), e("br"), t._v("Major Donor benefits are unique because\n        they’re also some of the ways that allow dublab to invest back into\n        our community."), e("br"), t._v("‍"), e("br"), t._v("Development of new culturally enriching\n        radio shows, internships for youth, and skill-building programs for\n        artists are a few of the projects that Major Donors support."), e("br"), t._v("Major\n        Donors receive special recognition and connection to dublab – our\n        favorite way of showing our appreciation for helping keep the future\n        of dublab alive."), e("br"), t._v("‍"), e("br"), t._v("Email\n        "), e("a", {
                    attrs: {
                        href: "mailto:donate@dublab.com"
                    }
                }, [t._v("donate@dublab.com")]), t._v(" for more\n        information on how you can become a dublab Major Donor and enjoy these\n        super benefits.\n      ")])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "container mission w-container"
                }, [e("div", {
                    staticClass: "keep-us-on-air"
                }, [e("p", {
                    staticClass: "lilp"
                }, [t._v("\n          Our listeners and supporters help us stay on air. Keep dublab going\n          strong!\n        ")])])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "container-5 history w-container"
                }, [e("div", {
                    staticClass: "div-block-19"
                }), e("div", {
                    staticClass: "div-block-20"
                }, [e("img", {
                    staticClass: "image-18",
                    attrs: {
                        src: a("2836"),
                        loading: "lazy",
                        sizes: "(max-width: 991px) 80vw, 940px",
                        srcset: a("8a4d") + " 500w, " + a("7532") + " 800w, " + a("102b") + " 1080w, " + a("f3f1") + " 1600w, " + a("2836") + " 1920w",
                        alt: ""
                    }
                })]), e("h1", {
                    staticClass: "values",
                    attrs: {
                        id: "supporter-circle"
                    }
                }, [t._v("Join Our Supporter Circle")]), e("p", {
                    staticClass: "paragraph-10"
                }, [t._v("\n        dublab’s Supporter Circle is a great way to make a meaningful impact\n        in the organization’s programming and operational activities. Your\n        annual gift will go towards the financial stability of the\n        organization, ensuring that the station’s radio broadcasts and its\n        educational and community-enriching initiatives continue to expand and\n        reflect the world around us."), e("br"), e("br"), t._v("Join the Supporter Circle\n        today at $1,500, $2,500, or $3,500 and enjoy these benefits for one\n        year:"), e("br")]), e("ul", {
                    staticClass: "list-2 gifst",
                    attrs: {
                        role: "list",
                        id: "benefits"
                    }
                }, [e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Annual Supporter Circle dinner with dublab staff, DJs, and Board Members\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Acknowledgement of your support on dublab’s website\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Free tickets to exclusive concerts and live events throughout the year\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Tickets to dublab's Creative Cultivation Salon and Anniversary Party\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Quarterly newsletter for Supporter Circle members\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Your donation is tax deductible\n        ")])]), e("div", {
                    staticClass: "button-holder"
                }, [e("a", {
                    attrs: {
                        href: "https://buy.stripe.com/7sI8xQ2epdDfgdG000",
                        rel: "blank"
                    }
                }, [e("button", {
                    staticClass: "button pill hover"
                }, [t._v("$1,500 a year")])]), e("a", {
                    attrs: {
                        href: "https://buy.stripe.com/9AQ29s4mx9mZ8Le9AC",
                        rel: "blank"
                    }
                }, [e("button", {
                    staticClass: "button pill hover"
                }, [t._v("$2,500 a year")])]), e("a", {
                    attrs: {
                        href: "https://buy.stripe.com/aEUg0if1b42F8Le5kl",
                        rel: "blank"
                    }
                }, [e("button", {
                    staticClass: "button pill hover"
                }, [t._v("$3,500 a year")])])])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "container-5 dei w-container"
                }, [e("div", {
                    staticClass: "div-block-19"
                }, [e("div", {
                    staticClass: "div-block-20"
                }, [e("img", {
                    staticClass: "image-18",
                    attrs: {
                        src: a("a26c"),
                        loading: "lazy",
                        sizes: "(max-width: 991px) 80vw, 940px",
                        srcset: a("a26c") + " 500w, " + a("a26c") + " 800w, " + a("a26c") + " 1080w, " + a("a26c") + " 1600w, " + a("a26c") + " 2000w",
                        alt: ""
                    }
                })])]), e("h1", {
                    staticClass: "values core-values",
                    attrs: {
                        id: "sponsor"
                    }
                }, [t._v("\n        Become a Year-Round Supporter/Sponsor\n      ")]), e("p", {
                    staticClass: "paragraph-10"
                }, [t._v("\n        Underwrite dublab’s radio programming, connect with our audience and\n        be part of our ever-expanding universe. Your company will receive\n        public acknowledgement through on-air mentions, website announcements\n        and social media posts. "), e("br"), e("br"), t._v("For rates and customized plans\n        please contact us at "), e("a", {
                    staticClass: "dublab-email-links",
                    attrs: {
                        href: "mailto:donate@dublab.com?subject=dublab Donation"
                    }
                }, [t._v("donate@dublab.com")])])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "container-5 history w-container other-support"
                }, [e("div", {
                    staticClass: "div-block-19"
                }), e("h1", {
                    staticClass: "values",
                    attrs: {
                        id: "other"
                    }
                }, [t._v("Other Ways to Support")]), e("ul", {
                    staticClass: "list-2",
                    attrs: {
                        role: "list",
                        id: "dubfacts"
                    }
                }, [e("li", {
                    staticClass: "fact"
                }, [t._v("\n          We greatly welcome in-kind (non-monetary) donations! If you have\n          office supplies, audio equipment, computers, or other items you\n          think could be useful to dublab, please contact us at\n          "), e("a", {
                    attrs: {
                        href: "mailto:donate@dublab.com"
                    }
                }, [t._v("donate@dublab.com")]), t._v(".\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Shopping through affiliate programs like\n          "), e("a", {
                    attrs: {
                        href: "http://www.benevity.com/"
                    }
                }, [t._v("Benevity")]), t._v(" will contribute a\n          percentage of your purchases to benefit dublab at no extra charge to\n          you!\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Support from foundations allows dublab to grow and further our\n          mission. If you are a foundation interested in helping dublab\n          provide a space for LA’s creative community, please email us at\n          "), e("a", {
                    attrs: {
                        href: "mailto:donate@dublab.com"
                    }
                }, [t._v("donate@dublab.com")]), t._v(".\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Create a Legacy: You can make a long-lasting impact on the future of dublab by indicating a gift to the organization in your will or trust. For suggested bequest language or to learn more, please contact us at "), e("a", {
                    attrs: {
                        href: "mailto:donate@dublab.com"
                    }
                }, [t._v("donate@dublab.com")])]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Gift of Stock: You can transfer stock to dublab. Donate appreciated stock and you may avoid paying capital gains tax. For more details, please contact us at "), e("a", {
                    attrs: {
                        href: "mailto:donate@dublab.com"
                    }
                }, [t._v("donate@dublab.com")])]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Beneficiary Designations: Do you have a life insurance policy or retirement account? Consider making dublab a full or partial beneficiary. Please discuss this with the advisor who handles your life insurance policy or retirement account.\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          IRA Distributions: Are you required to take a minimum distribution from your IRA but don't need it or want it to affect your income? You can donate the distribution directly to dublab, and you may save money on your taxes. Talk to your financial advisor on how to make this happen.\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          A great way to clear some space from your garage and support your\n          favorite radio station. Call (866) 398-4483 or visit our vehicle\n          donation page with\n          "), e("a", {
                    attrs: {
                        href: "https://www.careasy.org/nonprofit/future-roots"
                    }
                }, [t._v("CARS")]), t._v(". It only takes a few minutes to complete the initial donation\n          forms, and they’ll walk you through the rest of the process step by\n          step.\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          We are always looking for volunteers! We need support in the\n          following fields: Programming, grants, administrative services,\n          events, and content production/creation. If you’re interested in\n          volunteering with us, please email\n          "), e("a", {
                    attrs: {
                        href: "mailto:info@dublab.com"
                    }
                }, [t._v("info@dublab.com")]), t._v(".\n        ")])]), e("div", {
                    staticClass: "text-block-8"
                }, [t._v("\n        dublab is a program of Future Roots Inc., a non-profit organization\n        licensed under section 501(c)(3) of the U.S. Internal Revenue code.\n        Any contribution made to dublab is tax deductible.\n      ")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "container-7 w-container"
                }, [e("div", {
                    staticClass: "div-block-4"
                }, [e("div", {
                    staticClass: "text-block-5"
                }, [t._v("Contact us")]), e("div", {
                    staticClass: "div-block-5"
                }, [e("div", {
                    staticClass: "div-block-6"
                }, [e("p", {
                    staticClass: "paragraph-4"
                }, [t._v("\n              dublab"), e("br"), t._v("1035 West 24th Street"), e("br"), t._v("Los Angeles, CA 90007\n            ")])]), e("div", {
                    staticClass: "div-block-6"
                }, [e("p", {
                    staticClass: "paragraph-4"
                }, [t._v("\n              General inquiries and promotional materials:"), e("br"), t._v("‍"), e("a", {
                    staticClass: "dublab-email-links",
                    attrs: {
                        href: "mailto:info@dublab.com?subject=dublab Support Inquiry"
                    }
                }, [t._v("info@dublab.com")])])]), e("div", {
                    staticClass: "div-block-6"
                }, [e("p", {
                    staticClass: "paragraph-4"
                }, [t._v("\n              Donations:"), e("br"), e("a", {
                    staticClass: "dublab-email-links",
                    attrs: {
                        href: "mailto:donate@dublab.com?subject=dublab Donation"
                    }
                }, [t._v("donate@dublab.com")]), e("br"), t._v("‍"), e("br"), t._v("Technical Assistance:"), e("br"), e("a", {
                    staticClass: "dublab-email-links",
                    attrs: {
                        href: "mailto:webops@dublab.com?subject=Tech Assistance"
                    }
                }, [t._v("webops@dublab.com")])])])])])])
            }],
            Ze = {
                name: "SupportPage",
                components: {
                    AboutThumb: me,
                    RuntimeContent: Ue
                },
                mixins: [T],
                data: function() {
                    return {
                        navigation: {
                            active: this.$route.path
                        },
                        active: null
                    }
                },
                watch: {
                    "$route.path": function(t) {
                        this.navigation.active !== t && (this.navigation.active = t)
                    },
                    "navigation.active": function(t) {
                        "http" === t.substring(0, 4) ? window.location = t : this.$router.push(t)
                    }
                },
                mounted: function() {
                    if (this.$route.hash) {
                        var t = document.querySelector(this.$route.hash);
                        if (t) {
                            var e = t.getBoundingClientRect(),
                                a = e.top;
                            window.scrollTo(0, a - 80)
                        }
                    }
                },
                computed: {
                    isSupport: function() {
                        return "supporters" === this.$route.name
                    },
                    getTabs: function() {
                        return v()(this.page, "tabs.options")
                    },
                    getTabItems: function() {
                        var t = this;
                        return v()(this.page, "tabs.entries") ? this.page.tabs.entries.filter((function(e) {
                            return e.level.indexOf(t.active) >= 0
                        })) : null
                    },
                    getActive: function() {
                        if (v()(this.page, "tabs.options")) {
                            var t = Object.keys(this.page.tabs.options);
                            return t.indexOf(this.active) < 0 && this.resetActive(t), this.page.tabs.options[this.active]
                        }
                        return null
                    },
                    getTabItemsTemplate: function() {
                        return "donations" === this.$route.params.section ? "block" : "row"
                    },
                    sidebarContent: function() {
                        return '<div class="copy pill-hover">'.concat(this.page.subcontent, "</div>")
                    },
                    mainContent: function() {
                        return '<div class="copy">'.concat(this.page.content, "</div>")
                    }
                },
                methods: {
                    resetActive: function(t) {
                        this.active = t[0]
                    }
                }
            },
            Qe = Ze,
            Ke = (a("d4f2"), Object(N["a"])(Qe, Ge, Je, !1, null, "39f555b8", null)),
            Xe = Ke.exports,
            ta = function() {
                var t = this,
                    e = t._self._c;
                return t.loading ? e("div", {
                    staticClass: "loading-container"
                }, [e("div", {
                    staticClass: "view-schedule-loading"
                }, [t._v("Loading...")]), e("div", {
                    staticClass: "spacer"
                })]) : e("div", {
                    staticClass: "ViewSchedule"
                }, [e("div", {
                    staticClass: "sidebar"
                }, t._l(t.daysOfWeek, (function(a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "radio-pill radio-pill-vertical"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.active,
                            expression: "active"
                        }],
                        attrs: {
                            type: "radio",
                            id: "day-" + i,
                            name: "days"
                        },
                        domProps: {
                            value: a.slug,
                            checked: t._q(t.active, a.slug)
                        },
                        on: {
                            click: t.handleSelect,
                            change: function(e) {
                                t.active = a.slug
                            }
                        }
                    }), e("label", {
                        attrs: {
                            for: "day-" + i
                        }
                    }, [t._v(t._s(a.text))])])
                })), 0), e("div", {
                    staticClass: "mobile-dropdown"
                }, [e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.active,
                        expression: "active"
                    }],
                    staticClass: "pill",
                    on: {
                        change: [function(e) {
                            var a = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.active = e.target.multiple ? a : a[0]
                        }, t.handleSelect]
                    }
                }, t._l(t.daysOfWeek, (function(a, i) {
                    return e("option", {
                        key: i,
                        domProps: {
                            value: a.slug
                        }
                    }, [t._v("\n        " + t._s(a.text) + "\n      ")])
                })), 0)]), e("div", {
                    staticClass: "content a-hover"
                }, t._l(t.getPosts, (function(a, i) {
                    return e("div", {
                        key: i,
                        ref: "dayDivider",
                        refInFor: !0,
                        staticClass: "day-wrapper",
                        attrs: {
                            id: a.dateStr
                        }
                    }, t._l(a.posts, (function(a, i) {
                        return e("div", {
                            key: i,
                            attrs: {
                                id: i
                            }
                        }, [a.dayChanged ? e("div", {
                            staticClass: "day-divider",
                            attrs: {
                                id: a.dayChanged - 1
                            }
                        }, [t._v("\n          " + t._s(a.customDateStr) + "\n        ")]) : t._e(), e("router-link", {
                            attrs: {
                                to: "schedule/".concat(a.id, "/").concat(a.slug)
                            }
                        }, [a.id === t.nowPlayingId ? e("div", {
                            ref: "nowPlaying",
                            refInFor: !0,
                            staticClass: "now-playing-wrapper"
                        }, [e("NowPlaying", {
                            attrs: {
                                item: a
                            }
                        })], 1) : a.dj && a.showName && !t.isCondensed(a.dj) ? e("div", {
                            staticClass: "schedule-details"
                        }, [e("h1", [t._v("\n              " + t._s(a.formattedStart) + " to\n              " + t._s(a.formattedEnd) + "\n            ")]), e("h1", [t._v(t._s(a.dj))]), e("h1", [t._v("\n              " + t._s(a.showName) + "\n            ")])]) : e("div", {
                            staticClass: "schedule-details-condensed"
                        }, [e("h1", [t._v("\n              " + t._s(a.formattedStart) + " to\n              " + t._s(a.formattedEnd) + "\n            ")]), e("h1", [t._v(t._s(a.dj) + " " + t._s(a.showName))])])])], 1)
                    })), 0)
                })), 0)])
            },
            ea = [],
            aa = (a("7514"), function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "now-playing"
                }, [t.item.attachments ? e("img", {
                    staticClass: "now-playing-img",
                    attrs: {
                        src: t.item.attachments,
                        alt: "Image"
                    }
                }) : e("img", {
                    staticClass: "now-playing-img",
                    attrs: {
                        src: a("0e6b"),
                        alt: "placeholder",
                        loading: "lazy"
                    }
                }), e("div", {
                    staticClass: "now-playing-info"
                }, [e("p", {
                    staticClass: "now-playing-artist"
                }, [t._v(t._s(t.item.dj))]), e("h1", {
                    staticClass: "now-playing-show-name"
                }, [t._v(t._s(t.item.showName))]), e("p", {
                    staticClass: "now-playing-time-info"
                }, [e("span", {
                    staticClass: "on-air"
                }, [t._v("● On Air")]), e("span", [t._v(" " + t._s(t.item.formattedStart) + " to " + t._s(t.item.formattedEnd))])])])])
            }),
            ia = [],
            sa = {
                name: "NowPlaying",
                props: {
                    item: Object
                }
            },
            na = sa,
            ra = (a("5c21"), Object(N["a"])(na, aa, ia, !1, null, "4a8e9a25", null)),
            oa = ra.exports,
            ca = a("1315");
        function la(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                a.push.apply(a, i)
            }
            return a
        }
        function ua(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? la(Object(a), !0).forEach((function(e) {
                    Object(C["a"])(t, e, a[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : la(Object(a)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }))
            }
            return t
        }
        var da = {
                name: "ViewSchedule",
                components: {
                    NowPlaying: oa
                },
                mixins: [T],
                data: function() {
                    return {
                        active: null,
                        daysOfWeek: [],
                        activePosts: [],
                        loading: !0,
                        clicked: !1,
                        initialLoad: !0,
                        dayIntersectionRatios: {}
                    }
                },
                mounted: function() {
                    var t = this.$refs.nowPlaying;
                    t && t[0] && this.$nextTick((function() {
                        t[0].scrollIntoView({
                            behavior: "auto"
                        }),
                        window.scrollBy(0, -80)
                    }))
                },
                computed: {
                    schedule: function() {
                        var t = this.$store.getters.getSchedule();
                        return Object(Te["a"])(t).map((function(t) {
                            return t[1]
                        }))
                    },
                    getPosts: function() {
                        var t = this.schedule;
                        if (t && t.length) {
                            var e = null,
                                a = 0;
                            return t.filter((function(t) {
                                return !t.summary.includes("TBD")
                            })).map((function(t) {
                                var i = t.startTime,
                                    s = t.endTime,
                                    n = t.eventTitleMeta.artist,
                                    r = t.eventTitleMeta.eventName,
                                    o = i.split("T")[0],
                                    c = ca["DateTime"].fromISO(i),
                                    l = ca["DateTime"].now().startOf("day") === c.startOf("day") ? "Today " + c.toFormat("(LL.dd.yy)") : c.toFormat("cccc (LL.dd.yy)"),
                                    u = {
                                        weekday: "long",
                                        month: "long",
                                        day: "numeric"
                                    },
                                    d = {
                                        hour: "numeric",
                                        minute: "numeric"
                                    },
                                    p = new Date(i).toLocaleTimeString("en-US", d),
                                    m = new Date(s).toLocaleTimeString("en-US", d),
                                    f = ua({}, t);
                                f.summary = {
                                    dj: n,
                                    showName: r,
                                    dateStr: o
                                },
                                f.dj = n,
                                f.showName = r,
                                f.dateStr = o,
                                f.date = c.toLocaleString("en-US", u),
                                f.formattedStart = p,
                                f.formattedEnd = m,
                                f.customDateStr = l;
                                var h = !1;
                                return e !== c.day && (a++, h = a, e = c.day), f.dayChanged = h, f.slug = n || r ? "".concat(n.toLowerCase().split(" ").join("-")).concat(r.toLowerCase().split(" ").join("-")).replaceAll("/", "") : f.showName.replaceAll("/", ""), f
                            })).reduce((function(t, e) {
                                var a = ca["DateTime"].fromISO(e.startTime).toFormat("(LL.dd.yy)");
                                return e.dayChanged ? t.push({
                                    posts: [e],
                                    dateStr: a
                                }) : t[t.length - 1].posts.push(e), t
                            }), [])
                        }
                        return []
                    },
                    nowPlayingId: function() {
                        return this.$store.getters.getNowPlaying().id
                    }
                },
                methods: {
                    setDay: function(t) {
                        this.active = t
                    },
                    getDays: function() {
                        var t = this.schedule;
                        t && t.length && (this.daysOfWeek = t.filter((function(t) {
                            return !t.summary.includes("TBD") && ca["DateTime"].fromISO(t.startTime) >= ca["DateTime"].now()
                        })).map((function(t) {
                            return ca["DateTime"].fromISO(t.startTime).toFormat("(LL.dd.yy)")
                        })).filter((function(t, e, a) {
                            return a.indexOf(t) >= e
                        })).map((function(t) {
                            var e = ca["DateTime"].fromFormat(t, "(LL.dd.yy)"),
                                a = ca["DateTime"].now().startOf("day") === e.startOf("day") ? "Today " + e.toFormat("(LL.dd.yy)") : e.toFormat("cccc (LL.dd.yy)");
                            return {
                                slug: t,
                                text: a
                            }
                        })))
                    },
                    scrollToDay: function(t) {
                        var e = this.$refs.dayDivider.find((function(e) {
                            return e.id === t
                        }));
                        e && e.scrollIntoView({
                            behavior: "smooth"
                        })
                    },
                    handleSelect: function(t) {
                        this.active = t.target.value,
                        this.scrollTarget = t.target.value,
                        this.scrollToDay(t.target.value)
                    },
                    isCondensed: function(t) {
                        return t.includes("presents")
                    }
                },
                updated: function() {
                    var t = this,
                        e = this.$refs.dayDivider;
                    if (e) {
                        var a = {
                                threshold: [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                            },
                            i = new IntersectionObserver((function(e) {
                                e.forEach((function(e) {
                                    t.dayIntersectionRatios = ua(ua({}, t.dayIntersectionRatios), {}, Object(C["a"])({}, e.target.id, e.intersectionRatio))
                                }))
                            }), a);
                        document.querySelectorAll(".day-wrapper").forEach((function(t) {
                            i.observe(t)
                        }))
                    }
                },
                watch: {
                    dayIntersectionRatios: function() {
                        var t = this.dayIntersectionRatios,
                            e = Object.keys(t).reduce((function(e, a) {
                                return t[a] > t[e] ? a : e
                            }));
                        this.scrollTarget ? e === this.scrollTarget && (this.scrollTarget = null, this.active = e) : this.active = e
                    },
                    nowPlayingId: function() {
                        var t = this;
                        setTimeout((function() {
                            var e = t.$refs.nowPlaying[0];
                            e && (e.scrollIntoView({
                                behavior: "auto"
                            }), window.scrollBy(0, -80))
                        }), 100)
                    },
                    daysOfWeek: {
                        immediate: !0,
                        handler: function() {
                            this.daysOfWeek[0] && (this.active = 0)
                        }
                    },
                    getPosts: {
                        immediate: !0,
                        handler: function() {
                            this.$store.getters.getSchedule().size && (this.loading = !1, this.getDays())
                        }
                    }
                }
            },
            pa = da,
            ma = (a("8f33"), Object(N["a"])(pa, ta, ea, !1, null, "68bb3672", null)),
            fa = ma.exports,
            ha = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "Projects grid"
                }, [e("h1", [t._v(t._s(t.text))]), e("div", {
                    staticClass: "grid-auto-md"
                }, t._l(t.page.projects, (function(t) {
                    return e("AboutThumb", {
                        key: t.url,
                        attrs: {
                            item: t
                        }
                    })
                })), 1)])
            },
            va = [],
            ga = a("49a4"),
            ba = a.n(ga),
            _a = {
                name: "Projects",
                mixins: [T],
                components: {
                    AboutThumb: me
                },
                computed: {
                    text: function() {
                        return ba()(this.page.content)
                    }
                }
            },
            ya = _a,
            Ca = (a("d589"), Object(N["a"])(ya, ha, va, !1, null, "d676e41c", null)),
            wa = Ca.exports,
            ka = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "Podcasts grid"
                }, [e("h1", [t._v(t._s(t.text))]), e("div", {
                    staticClass: "grid-auto-md"
                }, t._l(t.page.podcasts, (function(t) {
                    return e("AboutThumb", {
                        key: t.url,
                        attrs: {
                            item: t
                        }
                    })
                })), 1)])
            },
            xa = [],
            Sa = {
                name: "Podcasts",
                mixins: [T],
                components: {
                    AboutThumb: me
                },
                computed: {
                    text: function() {
                        return ba()(this.page.content)
                    }
                }
            },
            Ta = Sa,
            Aa = (a("54ff"), Object(N["a"])(Ta, ka, xa, !1, null, "1a8eb04a", null)),
            Pa = Aa.exports,
            ja = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "grid"
                }, [e("flickity", {
                    ref: "flickity",
                    staticClass: "flickity",
                    attrs: {
                        options: t.flickityOptions
                    },
                    on: {
                        init: t.flickityInit
                    }
                }, t._l(t.featured, (function(t) {
                    return e("Feature", {
                        key: t.url,
                        attrs: {
                            page: t
                        }
                    })
                })), 1), t._l(t.filters, (function(a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "select pill-hover"
                    }, [e("ArchiveDropdown", {
                        attrs: {
                            options: a.values,
                            taxonomy: a.key,
                            placeholder: t.active.key === a.key ? t.active.title : a.title,
                            active: t.active.key === a.key
                        }
                    })], 1)
                })), e("div", {
                    staticClass: "grid-auto-sm"
                }, [t._l(t.splitPages[0], (function(t) {
                    return e("ArchiveThumb", {
                        key: t.url,
                        staticClass: "center",
                        attrs: {
                            page: t,
                            circle: !0
                        }
                    })
                })), e("BoxDonate"), t._l(t.splitPages[1], (function(t) {
                    return e("ArchiveThumb", {
                        key: t.url,
                        staticClass: "center",
                        attrs: {
                            page: t,
                            circle: !0
                        }
                    })
                }))], 2), t.qpage.numpages > 1 ? e("Pagination", {
                    attrs: {
                        count: t.qpage.numpages
                    }
                }) : t._e()], 2)
            },
            Oa = [],
            Ia = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    key: t.thumbKey,
                    class: ["ArchiveThumb", t.template]
                }, [e("div", {
                    staticClass: "image-container"
                }, [e("div", {
                    class: ["image", {
                        active: t.isBroadcastPlaying,
                        audio: t.page.audio
                    }]
                }, [e("router-link", {
                    attrs: {
                        to: t.page.url
                    }
                }, [e("LazyImage", {
                    attrs: {
                        image: t.thumbnail,
                        circle: t.circle,
                        size: "medium"
                    }
                })], 1), t.page.audio ? e("IconPlayBroadcast", t._b({
                    attrs: {
                        "page-url": t.page.url,
                        large: !0
                    }
                }, "IconPlayBroadcast", t.page.audio, !1)) : t._e()], 1)]), e("aside", [e("router-link", {
                    attrs: {
                        to: t.page.url
                    }
                }, ["broadcast" === t.page.template ? e("ul", {
                    staticClass: "bullet-list tags"
                }, t._l(t.page.artists, (function(a) {
                    return e("li", {
                        key: a
                    }, [e("span", {
                        staticClass: "artist-name",
                        domProps: {
                            innerHTML: t._s(a)
                        }
                    })])
                })), 0) : t._e(), e("h3", ["event" === t.page.template ? e("span", {
                    class: {
                        underline: t.underline
                    },
                    domProps: {
                        innerHTML: t._s(t.page.title)
                    }
                }) : t._e(), "broadcast" === t.page.template && t.page.show && !t.page.broadcast_alt_name ? e("span", {
                    class: {
                        underline: t.underline
                    },
                    domProps: {
                        innerHTML: t._s(t.page.show["post_title"])
                    }
                }) : "broadcast" === t.page.template && t.page.broadcast_alt_name ? e("span", {
                    class: {
                        underline: t.underline
                    },
                    domProps: {
                        innerHTML: t._s(t.page.broadcast_alt_name)
                    }
                }) : t.page.djs && t.page.djs.length ? e("div", t._l(t.page.djs, (function(a) {
                    return e("a", {
                        key: a.url,
                        staticClass: "comma artist-name",
                        attrs: {
                            href: a.url
                        }
                    }, [t._v(t._s(a.title))])
                })), 0) : t._e(), "show" === t.page.template || "dj" === t.page.template ? e("span", {
                    domProps: {
                        innerHTML: t._s(t.page.title)
                    }
                }) : "broadcast" !== t.page.template || t.page.show || t.page.guest_session_alt_name ? "broadcast" === t.page.template && !t.page.show && t.page.guest_session_alt_name ? e("span", {
                    domProps: {
                        innerHTML: t._s(t.page.guest_session_alt_name)
                    }
                }) : t.page.djs && t.page.djs.length ? e("div", t._l(t.page.djs, (function(a) {
                    return e("a", {
                        key: a.url,
                        staticClass: "comma artist-name",
                        attrs: {
                            href: a.url
                        }
                    }, [t._v(t._s(a.title))])
                })), 0) : t._e() : e("span", [t._v("guest session")]), t.page.schedule ? e("div", {
                    staticClass: "artist-name",
                    domProps: {
                        innerHTML: t._s(t.page.schedule)
                    }
                }) : t._e()]), "event" === t.page.template ? e("div", {
                    staticClass: "event-info"
                }, [e("div", [t._v(t._s(t.page.formatted.date))]), e("div", [t._v(t._s(t.page.formatted.time))]), e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.location_name)
                    }
                })]) : t._e()]), t.page.broadcast_date ? e("p", {
                    staticClass: "date-text"
                }, [t._v("\n      " + t._s(t.page.broadcast_date.slice(4, 6) + "." + t.page.broadcast_date.slice(6, 8) + "." + t.page.broadcast_date.slice(2, 4)) + "\n    ")]) : t._e(), t.page.tags ? e("ul", {
                    staticClass: "bullet-list tags a-hover"
                }, t._l(t.page.tags, (function(a) {
                    return e("li", {
                        key: a.url
                    }, [a.url ? e("router-link", {
                        attrs: {
                            to: a.url
                        },
                        domProps: {
                            innerHTML: t._s(a.name)
                        }
                    }) : e("span", {
                        domProps: {
                            innerHTML: t._s(a.name)
                        }
                    })], 1)
                })), 0) : t._e(), e("div", {
                    staticClass: "buttons"
                }, [t.page.external_link && t.isFuture ? e("a", {
                    staticClass: "pill",
                    attrs: {
                        href: t.page.external_link
                    }
                }, [t._v("\n        Buy Tickets\n      ")]) : t._e(), t.addToCalendar && t.isFuture ? e("IconAddToCalendar", {
                    staticClass: "pill dashed",
                    attrs: {
                        page: t.page
                    }
                }, [t._v("\n        Add to Calendar\n      ")]) : t._e()], 1)], 1)])
            },
            La = [],
            $a = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "IconPlayBroadcast",
                    on: {
                        click: t.onPlayPauseClick
                    }
                }, [e("button", {
                    class: ["IconPlayBroadcast", t.getIcon, {
                        large: t.large
                    }]
                }), t.label ? e("label", [t._v(t._s(t.label))]) : t._e()])
            },
            Ma = [],
            Da = {
                name: "IconPlayBroadcast",
                props: {
                    title: {
                        type: String,
                        required: !0
                    },
                    url: {
                        type: String,
                        required: !0
                    },
                    variation: {
                        type: String,
                        default: "player"
                    },
                    large: {
                        type: Boolean,
                        default: !1
                    },
                    pageUrl: {
                        type: String
                    },
                    label: String
                },
                computed: {
                    broadcast: function() {
                        return this.$store.state.audio.broadcast
                    },
                    isLoaded: function() {
                        return this.$store.state.audio.broadcast.url === this.url
                    },
                    getIcon: function() {
                        var t = this.$store.state.audio.broadcast.paused,
                            e = this.variation;
                        return !t && this.isLoaded ? "icon-" + e + "-pause" : "icon-" + e + "-play"
                    }
                },
                methods: {
                    onPlayPauseClick: function() {
                        var t = this.isLoaded,
                            e = this.title,
                            a = this.url,
                            i = this.pageUrl;
                        t ? this.$store.dispatch("toggleBroadcast") : this.$store.dispatch("loadBroadcast", {
                            title: e,
                            url: a,
                            pageUrl: i
                        })
                    }
                }
            },
            za = Da,
            Ba = (a("c70c"), a("fdea"), Object(N["a"])(za, $a, Ma, !1, null, "84c17caa", null)),
            Ea = Ba.exports,
            Ha = function() {
                var t = this,
                    e = t._self._c;
                return e("a", {
                    attrs: {
                        href: t.getEvent
                    }
                }, [t._t("default", (function() {
                    return [t._v("Add event")]
                }))], 2)
            },
            Na = [],
            qa = "America/Los_Angeles";
        function Ra() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.event_start_date && qa ? Ua(t.event_start_date, t.event_start_time, qa) : "",
                a = t.event_end_time && t.timezone ? Ua(t.event_end_date || t.date, t.event_end_time, qa) : "",
                i = t.venue ? " at " + t.venue : "";
            return encodeURI("data:text/calendar;charset=utf8," + ["BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT", "TZID:" + qa, "X-LIC-LOCATION:" + qa, "URL:" + t.url, "DTSTART:" + (e || ""), "DTEND:" + (a || ""), "SUMMARY:" + t.title + i, "DESCRIPTION:" + (t.description || ""), "LOCATION:" + (t.address || ""), "END:VEVENT", "END:VCALENDAR"].join("\n"))
        }
        function Ua(t, e) {
            try {
                var a = e.replace(/:/g, "") + "0000000",
                    i = t.replace(/-|:|\.\d+/g, "") + "T" + a.substring(0, 6);
                return i
            } catch (s) {
                return !1
            }
        }
        var Va,
            Fa,
            Wa = {
                name: "AddToCalendar",
                props: {
                    page: Object
                },
                computed: {
                    getEvent: function() {
                        var t = this.page,
                            e = t.event_start_date,
                            a = t.event_end_date,
                            i = t.event_start_time,
                            s = t.event_end_time,
                            n = Ra({
                                event_start_date: e,
                                event_end_date: a,
                                event_start_time: i,
                                event_end_time: s,
                                address: [t.location_address1, t.location_city].filter((function(t) {
                                    return t
                                })).join(", "),
                                venue: t.location_name,
                                url: "https://dublab.com" + t.url,
                                description: t.text,
                                location: t.location_name,
                                title: t.title
                            });
                        return n
                    }
                }
            },
            Ya = Wa,
            Ga = Object(N["a"])(Ya, Ha, Na, !1, null, null, null),
            Ja = Ga.exports,
            Za = {
                name: "ArchiveThumb",
                components: {
                    IconAddToCalendar: Ja,
                    IconPlayBroadcast: Ea,
                    LazyImage: le
                },
                props: {
                    page: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    },
                    circle: {
                        type: Boolean,
                        default: !1
                    },
                    addToCalendar: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    thumbnail: function() {
                        return this.$store.getters.getThumbnail(this.page)
                    },
                    thumbKey: function() {
                        return "ArchiveThumb:" + this.page.url
                    },
                    isBroadcastPlaying: function() {
                        return this.page.audio && this.page.audio.url && this.$store.state.audio.broadcast.url === this.page.audio.url
                    },
                    underline: function() {
                        return "show" === this.page.template
                    },
                    archivePage: function() {
                        return "broadcast" === this.page.template
                    },
                    template: function() {
                        return this.page.template || ""
                    },
                    today: function() {
                        return parseInt((new Date).toISOString().split("T")[0].replace(/-/g, ""))
                    },
                    isFuture: function() {
                        if (!this.page.event_start_date)
                            return !1;
                        var t = parseInt(this.page.event_start_date.replace(/-/g, ""));
                        return t >= this.today
                    }
                }
            },
            Qa = Za,
            Ka = (a("bc0b"), Object(N["a"])(Qa, Ia, La, !1, null, "522e68ef", null)),
            Xa = Ka.exports,
            ti = function() {
                var t = this,
                    e = t._self._c;
                return e("paginate", {
                    attrs: {
                        "page-count": t.count,
                        "click-handler": t.handleClick,
                        "page-range": 5,
                        "prev-text": "",
                        "next-text": "",
                        "prev-link-class": "icon-button-arrow left",
                        "next-link-class": "icon-button-arrow right",
                        "container-class": "pagination a-hover"
                    },
                    model: {
                        value: t.page,
                        callback: function(e) {
                            t.page = e
                        },
                        expression: "page"
                    }
                })
            },
            ei = [],
            ai = a("8832"),
            ii = a.n(ai),
            si = {
                name: "Pagination",
                components: {
                    Paginate: ii.a
                },
                props: {
                    count: {
                        type: Number,
                        default: 1
                    }
                },
                watch: {
                    "$route.query.page": function(t) {
                        this.page = t || 1
                    }
                },
                data: function() {
                    return {
                        page: parseInt(this.$route.query.page) || 1
                    }
                },
                methods: {
                    handleClick: function(t) {
                        var e = Object.assign({}, this.$route.query, {
                            page: t
                        });
                        1 === t && delete e.page,
                        this.$router.push({
                            path: this.$route.path,
                            query: e
                        })
                    }
                }
            },
            ni = si,
            ri = (a("ea6c"), Object(N["a"])(ni, ti, ei, !1, null, null, null)),
            oi = ri.exports,
            ci = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: t.handleClickOutside,
                        expression: "handleClickOutside"
                    }],
                    staticClass: "ArchiveDropdown"
                }, [e("input", {
                    ref: "input",
                    class: ["pill", {
                        active: t.active
                    }],
                    attrs: {
                        type: "text",
                        placeholder: t.getPlaceholder()
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        focus: t.handleFocus,
                        keyup: t.handleKeyup
                    }
                }), e("button", {
                    class: ["toggle", "icon-button-arrow", {
                        up: t.open
                    }],
                    on: {
                        click: t.handleToggle
                    }
                }, [t._v("\n    Toggle\n  ")]), t.open ? e("virtual-list", {
                    ref: "scroller",
                    staticClass: "scroller",
                    attrs: {
                        size: 32,
                        remain: 8
                    }
                }, t._l(t.filteredOptions, (function(a) {
                    return e("div", {
                        key: a.id,
                        staticClass: "scroller-row"
                    }, [a.noresults ? e("div", [t._v("No Results")]) : e("router-link", {
                        attrs: {
                            to: a.id ? "/archive?".concat(t.taxonomy, "=").concat(a.id) : "/archive"
                        },
                        domProps: {
                            innerHTML: t._s(a.title)
                        }
                    })], 1)
                })), 0) : t._e()], 1)
            },
            li = [],
            ui = a("89c1"),
            di = a.n(ui),
            pi = a("2103"),
            mi = a.n(pi),
            fi = a("ffe7"),
            hi = a.n(fi),
            vi = a("7226"),
            gi = a.n(vi),
            bi = {
                name: "ArchiveDropdown",
                components: {
                    VirtualList: di.a
                },
                directives: {
                    clickOutside: mi.a.directive
                },
                props: {
                    placeholder: {
                        type: String,
                        default: ""
                    },
                    options: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    taxonomy: {
                        type: String,
                        default: ""
                    },
                    active: {
                        default: !1
                    }
                },
                data: function() {
                    return {
                        open: !1,
                        value: "",
                        fuse: null
                    }
                },
                created: function() {
                    this.fuse = new hi.a(this.options, {
                        minMatchCharLength: 2,
                        threshold: .5,
                        location: 0,
                        distance: 0,
                        keys: ["title"]
                    })
                },
                computed: {
                    filteredOptions: function() {
                        var t = this.value ? this.fuse.search(this.value) : this.fuse.list;
                        return t.length ? t : [{
                            noresults: !0
                        }]
                    }
                },
                watch: {
                    $route: function() {
                        this.doClose()
                    }
                },
                methods: {
                    handleClickOutside: function() {
                        this.doClose()
                    },
                    handleFocus: function() {
                        this.open = !0
                    },
                    handleToggle: function() {
                        this.open = !this.open,
                        this.open ? this.$refs.input.focus() : this.value = ""
                    },
                    handleKeyup: function(t) {
                        27 === t.keyCode ? (this.$refs.input.blur(), this.doClose()) : (this.value = this.$refs.input.value, this.$refs.scroller.forceRender(), this.$refs.scroller.$el.scrollTop = 0)
                    },
                    getPlaceholder: function() {
                        return gi()(this.placeholder)
                    },
                    doClose: function() {
                        this.open = !1,
                        this.value = ""
                    }
                }
            },
            _i = bi,
            yi = (a("f4cf"), Object(N["a"])(_i, ci, li, !1, null, "51b9da9d", null)),
            Ci = yi.exports,
            wi = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "Feature-Container"
                }, [e("div", {
                    staticClass: "Feature"
                }, [e("router-link", {
                    attrs: {
                        to: t.page.url
                    }
                }), e("aside", [e("div", {
                    staticClass: "meta"
                }, [t.title ? e("h3", {
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }) : t._e(), t.page.tags ? e("ul", {
                    staticClass: "bullet-list"
                }, t._l(t.page.tags, (function(a) {
                    return e("li", {
                        key: a.slug
                    }, [a.slug ? e("router-link", {
                        attrs: {
                            to: a.slug
                        },
                        domProps: {
                            innerHTML: t._s(a.name)
                        }
                    }) : e("span", {
                        domProps: {
                            innerHTML: t._s(a.name)
                        }
                    })], 1)
                })), 0) : t._e(), "event" === t.page.template ? e("div", {
                    staticClass: "location"
                }, [e("div", [t._v(t._s(t.date))]), e("div", [t._v(t._s(t.page.formatted.time))]), e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.location_name)
                    }
                })]) : t._e()]), "broadcast" === t.type && t.page.audio ? e("IconPlayBroadcast", t._b({
                    staticClass: "button-set",
                    attrs: {
                        variation: "button",
                        "page-url": t.page.url,
                        label: "Play Broadcast"
                    }
                }, "IconPlayBroadcast", t.page.audio, !1)) : t._e(), "event" === t.type ? e("div", {
                    staticClass: "button-set"
                }, [e("IconAddToCalendar", {
                    attrs: {
                        page: t.page
                    }
                }, [e("button", {
                    staticClass: "icon-button-plus"
                }), e("label", [t._v("Add to Calendar")])])], 1) : t._e()], 1), t.thumbnail ? e("figure", {
                    class: {
                        cover: t.page.cover
                    }
                }, [e("img", {
                    attrs: {
                        "data-flickity-lazyload": t.thumbnailUrl
                    }
                })]) : t._e()], 1)])
            },
            ki = [],
            xi = {
                name: "Feature",
                components: {
                    IconAddToCalendar: Ja,
                    IconPlayBroadcast: Ea
                },
                props: {
                    page: Object,
                    default: {},
                    type: {
                        type: String,
                        default: "broadcast"
                    }
                },
                computed: {
                    title: function() {
                        var t = 90;
                        return this.page.title.length > t ? this.page.title.substring(0, t).trim() + "…" : this.page.title
                    },
                    thumbnailUrl: function() {
                        return this.thumbnail.sizes.medium_large || this.thumbnail.url
                    },
                    thumbnail: function() {
                        return this.$store.getters.getThumbnail(this.page)
                    },
                    date: function() {
                        return this.page.formatted.date ? this.page.formatted.date.replace(", " + (new Date).getFullYear(), "") : ""
                    }
                }
            },
            Si = xi,
            Ti = (a("1f59"), Object(N["a"])(Si, wi, ki, !1, null, "14ff02bb", null)),
            Ai = Ti.exports,
            Pi = {
                name: "Archive",
                components: {
                    Flickity: dt["a"],
                    Pagination: oi,
                    ArchiveDropdown: Ci,
                    Feature: Ai,
                    ArchiveThumb: Xa,
                    BoxDonate: be
                },
                mixins: [T],
                data: function() {
                    return {
                        flickityOptions: {
                            autoPlay: !0,
                            initialIndex: 0,
                            prevNextButtons: !1,
                            pageDots: !1,
                            wrapAround: !0,
                            cellAlign: "left",
                            lazyLoad: 4
                        },
                        active: {}
                    }
                },
                computed: {
                    splitPages: function() {
                        var t = Math.max(this.qpages.length / 2, 3);
                        return [this.qpages.slice(0, t), this.qpages.slice(t)]
                    },
                    featured: function() {
                        return this.$store.getters.getPages(v()(this, "page.featured"))
                    },
                    djs: function() {
                        return "djs" === this.$route.name
                    },
                    archives: function() {
                        return "archive" === this.$route.name
                    },
                    filters: function() {
                        return v()(this, "page.filters") || []
                    }
                },
                mounted: function() {
                    v()(this, "page.filters") && this.setActive()
                },
                watch: {
                    $route: function() {
                        this.setActive()
                    }
                },
                methods: {
                    flickityInit: function() {
                        var t = this;
                        this.$refs.flickity.on("dragStart", (function() {
                            t.$refs.flickity.$el.style.pointerEvents = "none"
                        })),
                        this.$refs.flickity.on("dragEnd", (function() {
                            t.$refs.flickity.$el.style.pointerEvents = "auto"
                        }))
                    },
                    setActive: function() {
                        var t = this,
                            e = Object.keys(this.$route.query),
                            a = this.filters.find((function(t) {
                                return e.indexOf(t.key) >= 0
                            }));
                        if (a) {
                            var i = a.values.find((function(e) {
                                return e.id === t.$route.query[a.key]
                            }));
                            this.active = i ? Object.assign({}, i, {
                                key: a.key
                            }) : {}
                        } else
                            this.active = {}
                    }
                }
            },
            ji = Pi,
            Oi = (a("85d8"), Object(N["a"])(ji, ja, Oa, !1, null, "650adbec", null)),
            Ii = Oi.exports,
            Li = {},
            $i = Object(N["a"])(Li, Va, Fa, !1, null, null, null),
            Mi = $i.exports,
            Di = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: ["SingleCollection", t.page.template]
                }, [e("div", {
                    staticClass: "collection-content"
                }, [e("div", {
                    staticClass: "heading"
                }, [t.page.audio ? e("div", {
                    staticClass: "heading-button hover-icon"
                }, [t.page.audio ? e("IconPlayBroadcast", t._b({
                    staticClass: "large",
                    attrs: {
                        "page-url": t.page.url,
                        large: !0
                    }
                }, "IconPlayBroadcast", t.page.audio, !1)) : t._e()], 1) : t._e(), e("div", {
                    staticClass: "heading-title a-hover"
                }, [t.isValidArchive && t.isValidArchive.length ? e("ul", {
                    staticClass: "bullet-list tags"
                }, t._l(t.isValidArchive, (function(a) {
                    return e("li", {
                        key: a.id
                    }, [e("router-link", {
                        staticClass: "artist-name",
                        attrs: {
                            to: "/djs/" + a.replace(/\s+/g, "-").toLowerCase()
                        },
                        domProps: {
                            innerHTML: t._s(a)
                        }
                    })], 1)
                })), 0) : t._e(), e("h2", ["SingleCollection" === t.page.template ? e("div", {
                    class: {
                        underline: t.underline
                    },
                    domProps: {
                        innerHTML: t._s(t.page.show["post_title"])
                    }
                }) : t.isValidArchive && t.isGuestSession && "broadcast" === t.page.template && t.page.guest_session_alt_name ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.guest_session_alt_name)
                    }
                }) : t.isValidArchive && t.isGuestSession && "broadcast" === t.page.template && !t.page.guest_session_alt_name ? e("div", [t._v("guest session")]) : t.isValidArchive && t.page.show && "broadcast" === t.page.template && t.page.broadcast_alt_name ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.broadcast_alt_name)
                    }
                }) : t.isValidArchive && t.hasDateInTitle && !1 === t.page.show && !t.page.guest_session_alt_name && 0 === t.hasShows ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.title.substring(0, t.page.title.length - 10))
                    }
                }) : t._e(), "show" === t.page.template ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.title)
                    }
                }) : t._e(), t.isSchedule ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.title)
                    }
                }) : t._e(), t.page.djs && t.page.djs.length ? e("div", [t._v("\n            w/\n            "), t._l(t.page.djs, (function(a) {
                    return e("router-link", {
                        key: a.url,
                        staticClass: "comma",
                        attrs: {
                            to: a.url
                        }
                    }, [t._v(t._s(a.title))])
                }))], 2) : t._e(), "dj" === t.page.template ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.title)
                    }
                }) : t._e(), t.page.schedule ? e("div", {
                    staticClass: "showSchedule",
                    domProps: {
                        innerHTML: t._s(t.page.schedule)
                    }
                }) : t._e()]), t.hasShows && "dj" === t.page.template ? e("div", {
                    staticClass: "shows"
                }, [t._v("\n          Shows:\n          "), t._l(t.page.shows, (function(a) {
                    return e("router-link", {
                        key: a.url,
                        staticClass: "comma",
                        attrs: {
                            to: a.url
                        }
                    }, [t._v(t._s(a.title))])
                }))], 2) : t._e(), t.isSchedule ? e("div", {
                    staticClass: "date"
                }, [e("div", [t._v(t._s(t.page.formatted.date))]), e("div", [t._v(t._s(t.page.formatted.time))])]) : t._e(), t.page.external_link ? e("div", {
                    staticClass: "archive-link"
                }, [e("vue-link", {
                    staticClass: "pill",
                    attrs: {
                        to: t.page.external_link
                    }
                }, [t._v("Listen Now")])], 1) : t._e(), t.page.broadcast_date ? e("p", {
                    staticClass: "date-text"
                }, [t._v("\n          " + t._s(t.page.broadcast_date.slice(4, 6) + "." + t.page.broadcast_date.slice(6, 8) + "." + t.page.broadcast_date.slice(2, 4)) + "\n        ")]) : t._e(), t.page.tags && t.page.tags.length && "show" === t.page.template ? e("ul", {
                    staticClass: "bullet-list tags"
                }, t._l(t.page.tags, (function(a) {
                    return e("li", {
                        key: a.url
                    }, [a.url ? e("router-link", {
                        attrs: {
                            to: a.url
                        },
                        domProps: {
                            innerHTML: t._s(a.name)
                        }
                    }) : e("span", {
                        domProps: {
                            innerHTML: t._s(a.name)
                        }
                    })], 1)
                })), 0) : t._e()])]), e("div", {
                    staticClass: "image mobile"
                }, [t.thumbnail ? e("LazyImage", {
                    attrs: {
                        image: t.thumbnail,
                        size: "large",
                        circle: "dj" === t.page.template
                    }
                }) : t._e()], 1), e("div", {
                    staticClass: "copy",
                    domProps: {
                        innerHTML: t._s(t.page.content)
                    }
                }), e("div", {
                    staticClass: "buttons"
                }, t._l(t.page.links, (function(a, i) {
                    return e("a", {
                        key: i,
                        staticClass: "pill",
                        attrs: {
                            href: a.url
                        }
                    }, [t._v(t._s(a.text))])
                })), 0), t.qpages.length ? e("div", {
                    staticClass: "pill solid",
                    attrs: {
                        "data-scroll-target": ""
                    }
                }, ["dj" === t.page.template ? e("span", [t._v("Broadcasts featuring " + t._s(t.page.title))]) : "show" === t.page.template ? e("span", [t._v("Episodes of " + t._s(t.page.title))]) : e("span", [t._v("Related Broadcasts")])]) : t._e(), t.qpages.length ? e("div", {
                    staticClass: "grid-auto-sm"
                }, t._l(t.qpages, (function(t) {
                    return e("ArchiveThumb", {
                        key: t.url,
                        staticClass: "center",
                        attrs: {
                            page: t,
                            circle: !0
                        }
                    })
                })), 1) : t._e(), t.qpage.numpages > 1 ? e("Pagination", {
                    attrs: {
                        count: t.qpage.numpages
                    }
                }) : t._e(), e("BoxDonate")], 1)])
            },
            zi = [],
            Bi = {
                name: "Single",
                components: {
                    BoxDonate: be,
                    LazyImage: le,
                    ArchiveThumb: Xa,
                    Pagination: oi,
                    IconPlayBroadcast: Ea,
                    VueLink: st
                },
                mixins: [T],
                computed: {
                    hasShows: function() {
                        return this.page.shows && this.page.shows.length
                    },
                    hideSidebar: function() {
                        return !this.thumbnail && "default" === this.page.template
                    },
                    isSchedule: function() {
                        return "schedule" === this.$route.name
                    },
                    isGuestSession: function() {
                        return this.page.guest_session
                    },
                    isValidArchive: function() {
                        return this.page.artists
                    },
                    hasDateInTitle: function() {
                        var t = new RegExp(/(\W\d\d\.\d\d\.\d\d\W)/);
                        return !!t.test(this.page.title)
                    }
                }
            },
            Ei = Bi,
            Hi = (a("3e11"), Object(N["a"])(Ei, Di, zi, !1, null, "aa2cda5a", null)),
            Ni = Hi.exports,
            qi = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: ["Single", t.page.template]
                }, [t.hideSidebar ? t._e() : e("div", {
                    staticClass: "sidebar pill-hover"
                }, [e("LazyImage", {
                    attrs: {
                        image: t.thumbnail,
                        size: "large",
                        circle: "dj" === t.page.template
                    }
                })], 1), e("div", {
                    staticClass: "content"
                }, [e("div", {
                    staticClass: "heading"
                }, [t.page.audio ? e("div", {
                    staticClass: "heading-button hover-icon"
                }, [t.page.audio ? e("IconPlayBroadcast", t._b({
                    staticClass: "large",
                    attrs: {
                        "page-url": t.page.url,
                        large: !0
                    }
                }, "IconPlayBroadcast", t.page.audio, !1)) : t._e()], 1) : t._e(), e("div", {
                    staticClass: "heading-title a-hover"
                }, [t.isGuestSession ? e("p", {
                    staticClass: "artist-name",
                    domProps: {
                        innerHTML: t._s(t.page.guest_performer)
                    }
                }) : t._e(), t.isValidArchive && t.isValidArchive.length ? e("ul", {
                    staticClass: "bullet-list tags"
                }, t._l(t.isValidArchive, (function(a) {
                    return e("li", {
                        key: a.id
                    }, [e("router-link", {
                        staticClass: "artist-name",
                        attrs: {
                            to: "/djs/" + a.replace(/\s+/g, "-").toLowerCase()
                        },
                        domProps: {
                            innerHTML: t._s(a)
                        }
                    })], 1)
                })), 0) : t._e(), e("h2", ["broadcast" === t.page.template && t.page.show && !t.page.broadcast_alt_name ? e("div", {
                    class: {
                        underline: t.underline
                    },
                    domProps: {
                        innerHTML: t._s(t.page.show["post_title"])
                    }
                }) : t.isValidArchive && t.isGuestSession && "broadcast" === t.page.template && t.page.guest_session_alt_name ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.guest_session_alt_name)
                    }
                }) : t.isValidArchive && t.isGuestSession && "broadcast" === t.page.template && !t.page.guest_session_alt_name ? e("div", [t._v("\n            guest session\n          ")]) : t.isValidArchive && t.page.show && "broadcast" === t.page.template && t.page.broadcast_alt_name ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.broadcast_alt_name)
                    }
                }) : t.isValidArchive && t.hasDateInTitle && !1 === t.page.show && !t.page.guest_session_alt_name && 0 === t.hasShows ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.title.substring(0, t.page.title.length - 10))
                    }
                }) : t._e(), "show" === t.page.template ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.title)
                    }
                }) : t._e(), t.isSchedule ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.title)
                    }
                }) : t._e(), t.page.djs && t.page.djs.length ? e("div", [t._v("\n            w/\n            "), t._l(t.page.djs, (function(a) {
                    return e("router-link", {
                        key: a.url,
                        staticClass: "comma",
                        attrs: {
                            to: a.url
                        }
                    }, [t._v(t._s(a.title))])
                }))], 2) : t._e(), "dj" === t.page.template ? e("div", {
                    domProps: {
                        innerHTML: t._s(t.page.title)
                    }
                }) : t._e(), t.page.schedule ? e("div", {
                    staticClass: "showSchedule",
                    domProps: {
                        innerHTML: t._s(t.page.schedule)
                    }
                }) : t._e()]), t.hasShows && "dj" === t.page.template ? e("div", {
                    staticClass: "shows"
                }, [t._v("\n          Shows:\n          "), t._l(t.page.shows, (function(a) {
                    return e("router-link", {
                        key: a.url,
                        staticClass: "comma",
                        attrs: {
                            to: a.url
                        }
                    }, [t._v(t._s(a.title))])
                }))], 2) : t._e(), t.isSchedule ? e("div", {
                    staticClass: "date"
                }, [e("div", [t._v(t._s(t.page.formatted.date))]), e("div", [t._v(t._s(t.page.formatted.time))])]) : t._e(), t.page.external_link ? e("div", {
                    staticClass: "archive-link"
                }, [e("vue-link", {
                    staticClass: "pill",
                    attrs: {
                        to: t.page.external_link
                    }
                }, [t._v("Listen Now")])], 1) : t._e(), t.page.broadcast_date ? e("p", {
                    staticClass: "date-text"
                }, [t._v("\n          " + t._s(t.page.broadcast_date.slice(4, 6) + "." + t.page.broadcast_date.slice(6, 8) + "." + t.page.broadcast_date.slice(2, 4)) + "\n        ")]) : t._e(), t.page.tags && t.page.tags.length && ("show" === t.page.template || "broadcast" === t.page.template) ? e("ul", {
                    staticClass: "bullet-list tags"
                }, t._l(t.page.tags, (function(a) {
                    return e("li", {
                        key: a.url
                    }, [a.url ? e("router-link", {
                        attrs: {
                            to: a.url
                        },
                        domProps: {
                            innerHTML: t._s(a.name)
                        }
                    }) : e("span", {
                        domProps: {
                            innerHTML: t._s(a.name)
                        }
                    })], 1)
                })), 0) : t._e()])]), e("div", {
                    staticClass: "image mobile"
                }, [t.thumbnail ? e("LazyImage", {
                    attrs: {
                        image: t.thumbnail,
                        size: "large",
                        circle: "dj" === t.page.template
                    }
                }) : t._e()], 1), e("div", {
                    staticClass: "copy",
                    domProps: {
                        innerHTML: t._s(t.page.content)
                    }
                }), e("div", {
                    staticClass: "buttons"
                }, t._l(t.page.links, (function(a, i) {
                    return e("a", {
                        key: i,
                        staticClass: "pill",
                        attrs: {
                            href: a.url
                        }
                    }, [t._v(t._s("Download" === a.text ? "Player" : a.text) + "\n      ")])
                })), 0), t.qpages.length ? e("div", {
                    staticClass: "pill solid",
                    attrs: {
                        "data-scroll-target": ""
                    }
                }, ["dj" === t.page.template ? e("span", [t._v("Broadcasts featuring " + t._s(t.page.title))]) : "show" === t.page.template ? e("span", [t._v("Episodes of " + t._s(t.page.title))]) : e("span", [t._v("Related Broadcasts")])]) : t._e(), t.qpages.length ? e("div", {
                    staticClass: "grid-auto-sm"
                }, t._l(t.qpages, (function(t) {
                    return e("ArchiveThumb", {
                        key: t.url,
                        staticClass: "center",
                        attrs: {
                            page: t,
                            circle: !0
                        }
                    })
                })), 1) : t._e(), void 0 !== t.qpage && t.qpage.numpages > 1 ? e("Pagination", {
                    attrs: {
                        count: t.qpage.numpages
                    }
                }) : t._e(), e("BoxDonate")], 1)])
            },
            Ri = [],
            Ui = {
                name: "Single",
                components: {
                    BoxDonate: be,
                    LazyImage: le,
                    ArchiveThumb: Xa,
                    Pagination: oi,
                    IconPlayBroadcast: Ea,
                    VueLink: st
                },
                mixins: [T],
                computed: {
                    hasShows: function() {
                        return this.page.shows && this.page.shows.length
                    },
                    hideSidebar: function() {
                        return !this.thumbnail && "default" === this.page.template
                    },
                    isSchedule: function() {
                        return "schedule" === this.$route.name
                    },
                    isGuestSession: function() {
                        return this.page.guest_session
                    },
                    isValidArchive: function() {
                        return this.page.artists
                    },
                    hasDateInTitle: function() {
                        var t = new RegExp(/(\W\d\d\.\d\d\.\d\d\W)/);
                        return !!t.test(this.page.title)
                    }
                }
            },
            Vi = Ui,
            Fi = (a("a9c7"), Object(N["a"])(Vi, qi, Ri, !1, null, "e921bff8", null)),
            Wi = Fi.exports,
            Yi = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "grid"
                }, [e("form", {
                    staticClass: "search-field",
                    on: {
                        submit: t.handleSubmit
                    }
                }, [e("input", {
                    ref: "input",
                    staticClass: "pill",
                    attrs: {
                        type: "text",
                        name: "search",
                        placeholder: "Search",
                        autocomplete: "off",
                        spellcheck: "false"
                    },
                    domProps: {
                        value: t.page.query || ""
                    }
                }), e("input", {
                    staticClass: "icon-search-big accent",
                    attrs: {
                        type: "submit",
                        value: ""
                    }
                })]), e("div", {
                    staticClass: "options pill-hover"
                }, t._l(t.page.results, (function(a, i) {
                    return e("router-link", {
                        key: i,
                        class: ["pill", {
                            disabled: !a.count
                        }, {
                            active: i === t.$route.query.type
                        }],
                        attrs: {
                            to: t.$route.path + "?type=".concat(i)
                        }
                    }, [t._v("\n      " + t._s(a.title) + " (" + t._s(a.count) + ")\n    ")])
                })), 1), t.hasQuery && t.hasResults ? e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.active,
                        expression: "active"
                    }],
                    staticClass: "pill",
                    on: {
                        change: function(e) {
                            var a = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.active = e.target.multiple ? a : a[0]
                        }
                    }
                }, t._l(t.page.results, (function(a, i) {
                    return e("option", {
                        key: i,
                        domProps: {
                            value: t.$route.path + "?type=".concat(i)
                        }
                    }, [t._v(t._s(a.title) + " (" + t._s(a.count) + ")")])
                })), 0) : t._e(), t.hasQuery && t.hasResults ? e("div", {
                    class: t.gridSize
                }, t._l(t.qpages, (function(a) {
                    return e("ArchiveThumb", {
                        key: a.url,
                        attrs: {
                            page: a,
                            circle: t.circle
                        }
                    })
                })), 1) : t.hasQuery ? e("div", {
                    staticClass: "no-results"
                }, [t._v("No Results")]) : t._e(), t.qpage && t.qpage.numpages > 1 ? e("Pagination", {
                    attrs: {
                        count: t.qpage.numpages
                    }
                }) : t._e()], 1)
            },
            Gi = [],
            Ji = (a("8615"), a("1439")),
            Zi = a.n(Ji),
            Qi = {
                name: "Search",
                components: {
                    Pagination: oi,
                    ArchiveThumb: Xa
                },
                mixins: [T],
                computed: {
                    active: {
                        get: function() {
                            return this.$route.fullPath
                        },
                        set: function(t) {
                            t && this.$router.push(t)
                        }
                    },
                    hasQuery: function() {
                        return v()(this.page, "query")
                    },
                    hasResults: function() {
                        return v()(this.page, "results") ? Object.values(this.page.results).reduce((function(t, e) {
                            return t + e.count
                        }), 0) : null
                    },
                    gridSize: function() {
                        return "post" === v()(this.qpage, "type") ? "grid-auto-sm" : "event" === v()(this.qpage, "type") ? "grid-auto-lg" : "grid-auto-md"
                    },
                    circle: function() {
                        return "event" !== v()(this.qpage, "type")
                    }
                },
                methods: {
                    handleSubmit: function(t) {
                        t.preventDefault(),
                        this.$refs.input.value ? this.$router.push({
                            path: "/search/" + Zi()(this.$refs.input.value)
                        }) : this.$router.push({
                            path: "/search"
                        })
                    },
                    initialSearch: function() {
                        var t = v()(this.page, "results") || {};
                        if (this.hasQuery && !this.$route.query.type) {
                            var e = Object.values(t).find((function(t) {
                                return t.count
                            }));
                            e && this.$router.push({
                                path: "/search/" + Zi()(this.page.query),
                                query: {
                                    type: e.slug
                                }
                            })
                        }
                    }
                },
                mounted: function() {
                    this.$refs.input.focus()
                },
                created: function() {
                    this.initialSearch()
                },
                updated: function() {
                    this.initialSearch()
                }
            },
            Ki = Qi,
            Xi = (a("2f2c"), Object(N["a"])(Ki, Yi, Gi, !1, null, "5de81d04", null)),
            ts = Xi.exports,
            es = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "grid"
                }, [e("Flickity", {
                    ref: "flickity",
                    staticClass: "flickity",
                    attrs: {
                        options: t.flickityOptions
                    },
                    on: {
                        init: t.flickityInit
                    }
                }, t._l(t.featured, (function(t) {
                    return e("Feature", {
                        key: t.url,
                        attrs: {
                            type: "event",
                            page: t
                        }
                    })
                })), 1), e("div", {
                    staticClass: "calendars",
                    style: {
                        gridTemplateColumns: "repeat(" + t.monthsVisible + ", 1fr)"
                    }
                }, [t.hasPrev ? e("button", {
                    staticClass: "icon icon-button-arrow left",
                    on: {
                        click: function(e) {
                            return t.calendarPaginate(-1)
                        }
                    }
                }) : t._e(), t.hasNext ? e("button", {
                    staticClass: "icon icon-button-arrow right",
                    on: {
                        click: function(e) {
                            return t.calendarPaginate(1)
                        }
                    }
                }) : t._e(), t._l(t.calendars, (function(a, i) {
                    return e("Calendar", {
                        key: i,
                        attrs: {
                            active: t.day,
                            month: a
                        }
                    })
                }))], 2), e("div", {
                    staticClass: "grid-auto-lg pill-hover"
                }, t._l(t.qpages, (function(t) {
                    return e("ArchiveThumb", {
                        key: t.url,
                        attrs: {
                            page: t,
                            "add-to-calendar": !0
                        }
                    })
                })), 1), e("BoxDonate")], 1)
            },
            as = [],
            is = (a("6c7b"), function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    key: t.month,
                    staticClass: "Calendar"
                }, [e("div", {
                    staticClass: "label pill solid"
                }, [e("span", [t._v(t._s(t.title))])]), e("div", {
                    staticClass: "days"
                }, t._l(t.dayNames, (function(a, i) {
                    return e("div", {
                        key: i
                    }, [t._v(t._s(a))])
                })), 0), t._l(t.weeks, (function(a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "days"
                    }, t._l(a, (function(a, i) {
                        return e("div", {
                            key: i,
                            class: {
                                today: a.slug === t.today,
                                active: !!a.slug && a.slug.replace(/\//g, "-") === t.active,
                                clickable: a.events
                            }
                        }, [a.events ? e("router-link", {
                            attrs: {
                                to: "?day=" + a.slug.replace(/\//g, "-")
                            }
                        }, [t._v(t._s(a.day))]) : e("div", [t._v(t._s(a.day))])], 1)
                    })), 0)
                }))], 2)
            }),
            ss = [],
            ns = {
                name: "Calendar",
                props: {
                    active: {
                        type: String
                    },
                    month: {
                        type: String,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        dayNames: ["S", "M", "T", "W", "T", "F", "S"],
                        weeksEmpty: rs()
                    }
                },
                created: function() {
                    this.loadPage()
                },
                updated: function() {
                    this.loadPage()
                },
                methods: {
                    loadPage: function() {
                        var t = "/calendar" + this.month,
                            e = this.$store.getters.getPage(t);
                        e || this.$store.dispatch("fetchPage", t)
                    }
                },
                computed: {
                    date: function() {
                        return new Date
                    },
                    page: function() {
                        return this.$store.getters.getPage("/calendar" + this.month) || {}
                    },
                    calendar: function() {
                        return this.page.calendar
                    },
                    weeks: function() {
                        return this.calendar ? this.calendar.weeks : this.weeksEmpty
                    },
                    title: function() {
                        if (!this.calendar)
                            return "Loading…";
                        var t = this.calendar.month;
                        return this.calendar.year !== this.date.getFullYear().toString() && (t += " " + this.calendar.year), t
                    },
                    today: function() {
                        var t = this.date.getDate();
                        t < 10 && (t = "0" + t);
                        var e = this.date.getMonth() + 1;
                        return e < 10 && (e = "0" + e), [this.date.getFullYear(), e, t].join("/")
                    }
                }
            };
        function rs() {
            return [[], [], [], [], []].map((function() {
                return ["", "", "", "", "", "", ""].map((function() {
                    return {
                        day: "○"
                    }
                }))
            }))
        }
        var os = ns,
            cs = (a("be2a"), a("80ee"), Object(N["a"])(os, is, ss, !1, null, "2d58628c", null)),
            ls = cs.exports,
            us = {
                name: "Events",
                components: {
                    ArchiveThumb: Xa,
                    Flickity: dt["a"],
                    Calendar: ls,
                    Feature: Ai,
                    BoxDonate: be
                },
                mixins: [T],
                data: function() {
                    return {
                        flickityOptions: {
                            autoPlay: !0,
                            initialIndex: 0,
                            prevNextButtons: !1,
                            pageDots: !1,
                            wrapAround: !0,
                            cellAlign: "left",
                            lazyLoad: 4
                        },
                        monthsVisible: 4
                    }
                },
                created: function() {
                    window.addEventListener("resize", this.resize, !1),
                    this.monthActiveIndex || (this.monthActiveIndex = this.page.currentIndex),
                    this.resize()
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this.resize, !1)
                },
                computed: {
                    day: function() {
                        var t = new Date,
                            e = t.getDate();
                        e < 10 && (e = "0" + e);
                        var a = t.getMonth() + 1;
                        return a < 10 && (a = "0" + a), this.$route.query.day ? this.$route.query.day : [t.getFullYear(), a, e].join("-")
                    },
                    monthActiveIndex: {
                        get: function() {
                            return this.$store.state.ui.monthActiveIndex
                        },
                        set: function(t) {
                            this.$store.dispatch("updateUi", {
                                monthActiveIndex: t
                            })
                        }
                    },
                    featured: function() {
                        return this.$store.getters.getPages(v()(this, "page.featured"))
                    },
                    calendars: function() {
                        var t = this,
                            e = v()(this, "page.calendars");
                        if (e) {
                            var a = new Array(this.monthsVisible).fill("").map((function(e, a) {
                                return t.page.calendars[t.monthActiveIndex + a]
                            })).filter((function(t) {
                                return t
                            }));
                            return a
                        }
                        return []
                    },
                    hasNext: function() {
                        return !!this.page.calendars && this.monthActiveIndex < this.page.calendars.length - this.monthsVisible
                    },
                    hasPrev: function() {
                        return !!this.page.calendars && this.monthActiveIndex > 1
                    }
                },
                methods: {
                    resize: function() {
                        this.monthsVisible = Math.floor(window.innerWidth / 300)
                    },
                    calendarPaginate: function(t) {
                        var e = this.monthActiveIndex + t;
                        e > 0 && e <= this.page.calendars.length - this.monthsVisible && (this.monthActiveIndex = e)
                    },
                    flickityInit: function() {
                        var t = this;
                        this.$refs.flickity.on("dragStart", (function() {
                            t.$refs.flickity.$el.style.pointerEvents = "none"
                        })),
                        this.$refs.flickity.on("dragEnd", (function() {
                            t.$refs.flickity.$el.style.pointerEvents = "auto"
                        }))
                    }
                }
            },
            ds = us,
            ps = (a("f834"), Object(N["a"])(ds, es, as, !1, null, "037cc079", null)),
            ms = ps.exports,
            fs = function() {
                var t = this;
                t._self._c;
                return t._m(0)
            },
            hs = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "body"
                }, [e("div", {
                    staticClass: "section wf-section"
                }), e("div", {
                    staticClass: "section-2 last wf-section"
                }, [e("div", {
                    staticClass: "container w-container"
                }, [e("p", {
                    staticClass: "paragraph"
                }, [t._v("\n        dublab is a Los Angeles-based, community-supported internet radio\n        station and creative collective dedicated to the growth of positive\n        music, arts, and culture. Founded in 1999, dublab has been\n        broadcasting since the “dot-com era” with the mission to share\n        forward-thinking, freeform radio with an international audience.\n        dublab’s programming has since expanded to include the production of\n        original art exhibits, films, television, events, and community\n        education projects as well as broadcast on affiliate stations in\n        Germany, Japan, Spain, and Brazil."), e("br"), e("br"), t._v("Each month, dublab\n        showcases over 180 radio shows from some of the world’s most talented\n        DJs, musicians, journalists, and artists. Each show is distinct and\n        entirely freeform: we take pride in empowering our DJs to freely play\n        the music that best shares their individual story. Beyond broadcast,\n        dublab produces and hosts several multimedia projects and exhibits\n        each year, most often made possible by the support of public and\n        foundation project grants. Through local events, international\n        broadcasts, and collaborative multimedia projects, dublab has helped\n        define and connect the next wave of arts, music, and culture across\n        the Los Angeles and international communities.\n      ")]), e("div", {
                    staticClass: "mission-statement"
                }, [e("div", {
                    staticClass: "text-block text-block-2"
                }, [t._v("Mission statement")]), e("p", {
                    staticClass: "paragraph-3"
                }, [t._v("\n          dublab cultivates and supports local cultural ecosystems worldwide. \n          Through community-generated radio, dublab expands curiosity, \n          experimentation, inclusivity, education and connection.\n        ")])]), e("div", {
                    staticClass: "directory-row"
                }, [e("div", {
                    staticClass: "text-block-3"
                }, [t._v("about")]), e("div", {
                    staticClass: "img-row"
                }, [e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/aboutdetail"
                    }
                }, [e("div", {
                    staticClass: "img-holder"
                }, [e("div", {
                    staticClass: "text-block-4"
                }, [t._v("Core Values")]), e("img", {
                    staticClass: "image",
                    attrs: {
                        src: a("0768"),
                        loading: "lazy",
                        alt: ""
                    }
                })])]), e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/aboutdetail#dei"
                    }
                }, [e("div", {
                    staticClass: "img-holder"
                }, [e("div", {
                    staticClass: "text-block-4"
                }, [t._v("DEI Statement")]), e("img", {
                    staticClass: "image",
                    attrs: {
                        src: a("c1c5"),
                        loading: "lazy",
                        alt: ""
                    }
                })])]), e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/aboutdetail#history"
                    }
                }, [e("div", {
                    staticClass: "img-holder"
                }, [e("div", {
                    staticClass: "text-block-4"
                }, [t._v("History")]), e("img", {
                    staticClass: "image-3",
                    attrs: {
                        src: a("fc94"),
                        loading: "lazy",
                        alt: "",
                        sizes: "(max-width: 479px) 27vw, (max-width: 767px) 26vw, 21vw",
                        srcset: a("48bd") + " 500w, " + a("6f15") + " 800w, " + a("fc94") + " 1000w"
                    }
                })])])])]), e("div", {
                    staticClass: "directory-row"
                }, [e("div", {
                    staticClass: "text-block-3"
                }, [t._v("Our Team")]), e("div", {
                    staticClass: "img-row"
                }, [e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/team"
                    }
                }, [e("div", {
                    staticClass: "img-holder"
                }, [e("div", {
                    staticClass: "text-block-4"
                }, [t._v("Staff")]), e("img", {
                    staticClass: "image",
                    attrs: {
                        src: a("e1e5"),
                        loading: "lazy",
                        alt: "",
                        sizes: "(max-width: 479px) 100vw, 21vw",
                        srcset: a("1a44") + " 500w, " + a("1124") + " 800w, " + a("3674") + " 1080w, " + a("e1e5") + " 1200w"
                    }
                })])]), e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/team#directors"
                    }
                }, [e("div", {
                    staticClass: "img-holder"
                }, [e("div", {
                    staticClass: "text-block-4"
                }, [t._v("Board of Directors")]), e("img", {
                    staticClass: "image",
                    attrs: {
                        src: a("b376"),
                        loading: "lazy",
                        alt: "",
                        sizes: "(max-width: 479px) 100vw, 21vw",
                        srcset: a("7bb0") + " 500w, " + a("c0be") + " 800w, " + a("b376") + " 800w"
                    }
                })])]), e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/team#supporters"
                    }
                }, [e("div", {
                    staticClass: "div-block-2"
                }, [e("div", {
                    staticClass: "text-block-4"
                }, [t._v("Donors and Supporters")]), e("img", {
                    staticClass: "image-3",
                    attrs: {
                        src: a("97ca"),
                        loading: "lazy",
                        alt: ""
                    }
                })])])])]), e("div", {
                    staticClass: "directory-row"
                }, [e("div", {
                    staticClass: "text-block-3"
                }, [t._v("Support Dublab")]), e("div", {
                    staticClass: "img-row"
                }, [e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/supporters"
                    }
                }, [e("div", {
                    staticClass: "img-holder"
                }, [e("div", {
                    staticClass: "text-block-4"
                }, [t._v("Become a Major Donor")]), e("img", {
                    staticClass: "image",
                    attrs: {
                        src: a("c1c5"),
                        loading: "lazy",
                        alt: ""
                    }
                })])]), e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/supporters#supporter-circle"
                    }
                }, [e("div", {
                    staticClass: "img-holder"
                }, [e("img", {
                    staticClass: "image-17",
                    attrs: {
                        src: a("159e"),
                        loading: "lazy",
                        alt: ""
                    }
                }), e("div", {
                    staticClass: "text-block-4-copy"
                }, [t._v("Join our Supporter Circle")])])]), e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/supporters#sponsor"
                    }
                }, [e("div", {
                    staticClass: "img-holder"
                }, [e("div", {
                    staticClass: "text-block-4"
                }, [t._v("\n                Sponsorship & "), e("br"), t._v("Underwriting\n              ")]), e("img", {
                    staticClass: "image",
                    attrs: {
                        src: a("619a"),
                        loading: "lazy",
                        alt: ""
                    }
                })])])])]), e("div", {
                    staticClass: "img-row-copyer"
                }, [e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/support/memberships"
                    }
                }, [e("div", {
                    staticClass: "div-block-2"
                }, [e("div", {
                    staticClass: "text-block-4"
                }, [t._v("Membership")]), e("img", {
                    staticClass: "image-3",
                    attrs: {
                        src: a("4660"),
                        loading: "lazy",
                        alt: ""
                    }
                })])]), e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "https://shop.dublab.com/products/dublab-donation"
                    }
                }, [e("div", {
                    staticClass: "img-holder"
                }, [e("img", {
                    staticClass: "image-16",
                    attrs: {
                        src: a("8efd"),
                        loading: "lazy",
                        alt: ""
                    }
                }), e("div", {
                    staticClass: "text-block-4-copy"
                }, [t._v("\n              Make a one time "), e("br"), t._v("donation\n            ")])])]), e("a", {
                    staticClass: "link-block-2 w-inline-block",
                    attrs: {
                        href: "/supporters#other"
                    }
                }, [e("div", {
                    staticClass: "img-holder"
                }, [e("img", {
                    staticClass: "image-17",
                    attrs: {
                        src: a("0768"),
                        loading: "lazy",
                        alt: ""
                    }
                }), e("div", {
                    staticClass: "text-block-4-copy"
                }, [t._v("Other ways to support")])])])]), e("a", {
                    staticClass: "link-block w-inline-block",
                    attrs: {
                        href: "https://shop.dublab.com",
                        target: "_blank"
                    }
                }, [e("div", {
                    staticClass: "mission-statement-copy"
                }, [e("div", {
                    staticClass: "div-block-3"
                }, [e("img", {
                    staticClass: "image-4",
                    attrs: {
                        src: a("27e6"),
                        loading: "lazy"
                    }
                })]), e("p", {
                    staticClass: "paragraph-3"
                }, [t._v("\n            Visit our shop to explore our collection of T-shirts, hoodies,\n            stickers, and more.\n          ")])])]), e("div", {
                    staticClass: "div-block-4"
                }, [e("div", {
                    staticClass: "text-block-5"
                }, [t._v("Contact us")]), e("div", {
                    staticClass: "div-block-5"
                }, [e("div", {
                    staticClass: "div-block-6"
                }, [e("p", {
                    staticClass: "paragraph-4"
                }, [t._v("\n              dublab"), e("br"), t._v("1035 West 24th Street"), e("br"), t._v("Los Angeles, CA 90007\n            ")])]), e("div", {
                    staticClass: "div-block-6"
                }, [e("p", {
                    staticClass: "paragraph-4"
                }, [t._v("\n              General inquiries and promotional materials:"), e("br"), t._v("‍"), e("br"), e("a", {
                    attrs: {
                        href: "mailto:info@dublab.com"
                    }
                }, [t._v("info@dublab.com")])])]), e("div", {
                    staticClass: "div-block-6"
                }, [e("p", {
                    staticClass: "paragraph-4"
                }, [t._v("\n              Donations:"), e("br"), e("a", {
                    attrs: {
                        href: "mailto:donate@dublab.com"
                    }
                }, [t._v("donate@dublab.com")]), e("br"), t._v("‍"), e("br"), t._v("Technical Assistance:"), e("br"), e("a", {
                    attrs: {
                        href: "mailto:webops@dublab.com"
                    }
                }, [t._v("webops@dublab.com")])])])])])])])])
            }],
            vs = {
                name: "About"
            },
            gs = vs,
            bs = (a("3c7d"), Object(N["a"])(gs, fs, hs, !1, null, "cadd500a", null)),
            _s = bs.exports,
            ys = function() {
                var t = this;
                t._self._c;
                return t._m(0)
            },
            Cs = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("div", {
                    staticClass: "aboutsection-copy wf-section"
                }, [e("p", {
                    staticClass: "paragraph-5"
                }, [t._v("About dublab")])]), e("div", {
                    staticClass: "section-2 wf-section"
                }, [e("div", {
                    staticClass: "container-4 w-container"
                }, [e("h1", {
                    staticClass: "values",
                    attrs: {
                        id: "core-values"
                    }
                }, [t._v("Core Values")]), e("ul", {
                    staticClass: "list",
                    attrs: {
                        role: "list"
                    }
                }, [e("li", {
                    staticClass: "corevalue"
                }, [t._v("\n          Support for "), e("strong", [t._v("COMMUNITY")]), t._v(" is at the core of everything\n          we do. dublab exists to serve our community of DJs, artists,\n          contributors, neighbors, and local and global listeners. dublab is a\n          platform and conduit for the creative expression of our community\n          and a hub for our community to collaborate and cross-pollinate. As a\n          nonprofit organization, we are owned by our community; we firmly\n          believe that you cannot build community without giving up ownership\n          of it.\n        ")]), e("li", {
                    staticClass: "corevalue"
                }, [t._v("\n          We are woven from the fabric of "), e("strong", [t._v("LOS ANGELES")]), t._v("—the\n          city and its residents inform our actions and direction as a global\n          organization. dublab exists in a symbiotic relationship with our\n          home city: we amplify its creative communities by providing them a\n          global platform, while carrying voices home from around the world to\n          help enrich our city’s sound. While our influences extend far beyond\n          our city’s borders, our roots are in LA.\n        ")]), e("li", {
                    staticClass: "corevalue"
                }, [t._v("\n          We seek to build "), e("strong", [t._v("EQUITY")]), t._v(" within the dublab community\n          in order to build equity in the music world beyond. We strive\n          against gatekeeping by providing access, resources, information, and\n          opportunities to those who societally and/or historically lack them.\n          dublab is committed to providing a platform for those who\n          wouldn't otherwise have one.\n        ")]), e("li", {
                    staticClass: "corevalue"
                }, [t._v("\n          We pride ourselves in "), e("strong", [t._v("DIVERSITY")]), t._v(" of identity, taste,\n          culture, and background. dublab revels in this diversity and in\n          uplifting the voices of our diverse communities. We seek to create a\n          home for DJs of all backgrounds who in turn create a home for\n          listeners of all backgrounds. Representation matters.\n        ")]), e("li", {
                    staticClass: "corevalue"
                }, [t._v("\n          We deeply believe that "), e("strong", [t._v("MUSIC")]), t._v(" is a fundamental\n          necessity for the individual and for the collective. To the\n          individual, music brings solace, inspiration, healing, connection,\n          strength, and expression and representation of one’s identity. To\n          the collective, music and culture are critical vehicles for change.\n        ")]), e("li", {
                    staticClass: "corevalue"
                }, [t._v("\n          We ground our work in the aim of\n          "), e("strong", [t._v("INDEPENDENT EXPRESSION")]), t._v(". dublab promotes openness,\n          curiosity, and expansiveness through the freedom we grant our\n          communities in our programming, projects, and events. We strive to\n          provide a platform for authentic and ego-free expression. We believe\n          that joy, fun, and experimentation are inherently valuable to this\n          goal.\n        ")]), e("li", {
                    staticClass: "corevalue"
                }, [t._v("\n          We are founded in the spirit of "), e("strong", [t._v("FUTURE ROOTS")]), t._v(" radio.\n          Influential sounds of the past flow into the dynamic sounds of\n          tomorrow; dublab collapses time, space, and genre to help bridge\n          this continuum of music and culture. We revere the artists and\n          pioneers who came before us and with a spirit of appreciation,\n          generosity, and love— we pave the way for future generations.\n        ")])]), e("div", {
                    staticClass: "div-block-19"
                })]), e("div", {
                    staticClass: "container mission w-container"
                }, [e("div", {
                    staticClass: "mission-statement"
                }, [e("div", {
                    staticClass: "text-block text-block-2"
                }, [t._v("Mission statement")]), e("p", {
                    staticClass: "paragraph-3"
                }, [t._v("\n          dublab cultivates and supports local cultural ecosystems worldwide.\n          Through community-generated radio, dublab promotes curiosity,\n          experimentation, inclusivity, and connection.\n        ")])])]), e("div", {
                    staticClass: "container-5 dei w-container",
                    attrs: {
                        id: "dei"
                    }
                }, [e("h1", {
                    staticClass: "values",
                    attrs: {
                        id: "core-values"
                    }
                }, [t._v("DEI Statement")]), e("p", {
                    staticClass: "paragraph-10"
                }, [t._v("\n        dublab fundamentally values equity, inclusivity, and diversity. We are\n        committed to creating community-based projects that allow a mutual\n        space for artists to freely and authentically express themselves\n        outside the conditions of systemic oppression.\n        "), e("br"), e("br"), t._v("Historically, broadcast media have overrepresented\n        cultures of power—most typically the voices of white, cisgender\n        males—to the exclusion of other communities. dublab strives to nurture\n        a platform where all identities are supported and uplifted and where\n        artists are given the tools they need to reach their full creative\n        potential. We seek to amplify the voices of those underrepresented in\n        the Los Angeles creative scene and to connect with like-minded\n        environments around the globe.\n      ")])]), e("div", {
                    staticClass: "container-5 history w-container",
                    attrs: {
                        id: "history"
                    }
                }, [e("div", {
                    staticClass: "div-block-19"
                }), e("h1", {
                    staticClass: "values",
                    attrs: {
                        id: "core-values"
                    }
                }, [t._v("History")]), e("p", {
                    staticClass: "paragraph-10"
                }, [t._v("\n        dublab is an independent, non-profit radio station based in Los\n        Angeles. Since 1999, we have been broadcasting freeform radio covering\n        a broad spectrum of genres, eras, cultures, and tastes. Over the years\n        our programming has steadily expanded to include the production of\n        original art exhibits, films, events record releases, and educational\n        programs related to health, youth development, education, and creative\n        processes."), e("br"), e("br"), t._v("dublab has four affiliate stations located\n        around the world. The stations operate independently from dublab US,\n        but we share the same values and mission, and collaborate on various\n        projects. dublab’s affiliate stations are based in Japan (Tokyo),\n        Spain (Barcelona), Germany (Cologne), and Brazil (Sao Paulo).\n      ")])]), e("div", {
                    staticClass: "container-5 history w-container"
                }, [e("div", {
                    staticClass: "div-block-19"
                }), e("h1", {
                    staticClass: "values",
                    attrs: {
                        id: "core-values"
                    }
                }, [t._v("Some Facts about dublab")]), e("ul", {
                    staticClass: "list-2",
                    attrs: {
                        role: "list"
                    }
                }, [e("li", {
                    staticClass: "fact"
                }, [t._v("\n          The station’s first broadcast was by Aurelito & Shakespeare on\n          September 27, 1999.\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          dublab was a part of the first wave of online radio stations in the\n          1990s and has been the inspiration for countless others to start\n          their own stations around the world and build community through\n          online radio.\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          The early years of dublab’s broadcast archives are stored in the\n          Smithsonian Museum in Washington, DC, as a document of the birth of\n          online radio.\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          Although dublab’s core production is radio, we have steadily\n          expanded our programming to include events, films, television,\n          books, art exhibits, record releases, and other out-there projects\n          that further our mission to share forward-thinking music and culture\n          with an international audience.\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          dublab's sound logo was created by Suzanne Ciani. It is\n          recorded in quadraphonic: if heard with the right decoder, the sound\n          logo will pan across four speakers.\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          dublab’s international stations operate independently from “dublab\n          U.S.” Although all of our stations are linked by a common ethos,\n          each station maintains its own website, identity, programming, and\n          finances. dublab U.S. doesn’t benefit financially from any of our\n          international affiliates.\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          For branding purposes, dublab's name is spelled all in\n          lowercase. Occasionally we spell DUBLAB in all capitals. We only\n          spell it as Dublab with a capital “D” in external applications and\n          administrative forms.\n        ")]), e("li", {
                    staticClass: "fact"
                }, [t._v("\n          dublab's main office is located at 1035 West 24"), e("sup", [t._v("th")]), t._v("\n          Street, Los Angeles, CA 90007 in the historic University Park\n          neighborhood.\n        ")])])]), e("div", {
                    staticClass: "w-container"
                }, [e("div", {
                    staticClass: "div-block-4"
                }, [e("div", {
                    staticClass: "text-block-5"
                }, [t._v("Contact us")]), e("div", {
                    staticClass: "div-block-5"
                }, [e("div", {
                    staticClass: "div-block-6"
                }, [e("p", {
                    staticClass: "paragraph-4",
                    attrs: {
                        id: "dublabAddress"
                    }
                }, [t._v("\n              dublab"), e("br"), t._v("1035 West 24th Street"), e("br"), t._v("Los Angeles, CA 90007\n            ")])]), e("div", {
                    staticClass: "div-block-6"
                }, [e("p", {
                    staticClass: "paragraph-4"
                }, [t._v("\n              General inquiries and promotional materials:"), e("br"), t._v("‍"), e("br"), e("a", {
                    attrs: {
                        href: "mailto:info@dublab.com"
                    }
                }, [t._v("info@dublab.com")])])]), e("div", {
                    staticClass: "div-block-6"
                }, [e("p", {
                    staticClass: "paragraph-4"
                }, [t._v("\n              Donations:"), e("br"), e("a", {
                    attrs: {
                        href: "mailto:donate@dublab.com"
                    }
                }, [t._v("donate@dublab.com")]), e("br"), t._v("‍"), e("br"), t._v("Technical Assistance:"), e("br"), e("a", {
                    attrs: {
                        href: "mailto:developer@dublab.com"
                    }
                }, [t._v("developer@dublab.com")])])])])])])])])
            }],
            ws = {
                name: "AboutDetail"
            },
            ks = ws,
            xs = (a("4de7"), Object(N["a"])(ks, ys, Cs, !1, null, "11ac2001", null)),
            Ss = xs.exports,
            Ts = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "Event"
                }, [e("div", {
                    staticClass: "sidebar"
                }, [e("LazyImage", {
                    staticClass: "desktop",
                    attrs: {
                        image: t.thumbnail
                    }
                }), e("div", {
                    staticClass: "buttons desktop"
                }, [t.page.external_link && t.isFuture ? e("a", {
                    staticClass: "pill",
                    attrs: {
                        href: t.page.external_link
                    }
                }, [t._v("\n        Buy Tickets\n      ")]) : t._e(), t.isFuture ? e("IconAddToCalendar", {
                    staticClass: "pill",
                    attrs: {
                        page: t.page
                    }
                }, [t._v("\n        Add to Calendar\n      ")]) : t._e()], 1), t.latLng ? e("div", {
                    staticClass: "map"
                }, [e("l-map", {
                    ref: "myMap",
                    attrs: {
                        zoom: 16,
                        center: t.latLng,
                        options: {
                            scrollWheelZoom: !1
                        }
                    }
                }, [e("l-tile-layer", {
                    attrs: {
                        url: "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}@2x.png"
                    }
                }), e("l-marker", {
                    attrs: {
                        "lat-lng": t.latLng,
                        icon: t.icon
                    },
                    on: {
                        click: t.handleMarkerClick
                    }
                })], 1)], 1) : t._e(), e("div", {
                    staticClass: "address"
                }, [e("a", {
                    attrs: {
                        href: t.mapLink,
                        target: "_blank"
                    },
                    domProps: {
                        innerHTML: t._s(t.page.formatted.location)
                    }
                })])], 1), e("div", {
                    staticClass: "content"
                }, [e("h2", {
                    domProps: {
                        innerHTML: t._s(t.page.title)
                    }
                }), e("LazyImage", {
                    staticClass: "mobile",
                    attrs: {
                        image: t.thumbnail
                    }
                }), e("div", {
                    staticClass: "date"
                }, [e("div", [t._v(t._s(t.page.formatted.date))]), e("div", [t._v(t._s(t.page.formatted.time))]), e("div", [e("a", {
                    staticClass: "underline",
                    attrs: {
                        href: t.mapLink,
                        target: "_blank"
                    },
                    domProps: {
                        innerHTML: t._s(t.page.location_name)
                    }
                })])]), e("div", {
                    staticClass: "buttons mobile"
                }, [t.page.external_link && t.isFuture ? e("a", {
                    staticClass: "pill",
                    attrs: {
                        href: t.page.external_link
                    }
                }, [t._v("\n        Buy Tickets\n      ")]) : t._e(), t.isFuture ? e("IconAddToCalendar", {
                    staticClass: "pill",
                    attrs: {
                        page: t.page
                    }
                }, [t._v("\n        Add to Calendar\n      ")]) : t._e()], 1), e("div", {
                    staticClass: "copy",
                    domProps: {
                        innerHTML: t._s(t.page.content)
                    }
                }), e("BoxDonate")], 1)])
            },
            As = [],
            Ps = a("e11e"),
            js = a.n(Ps),
            Os = a("2699"),
            Is = a("a40a"),
            Ls = a("4e2b");
        a("6cc5");
        delete js.a.Icon.Default.prototype._getIconUrl,
        js.a.Icon.Default.mergeOptions({
            iconRetinaUrl: a("584d"),
            iconUrl: a("6397"),
            shadowUrl: a("e2b9")
        });
        var $s = {
                name: "Event",
                components: {
                    IconAddToCalendar: Ja,
                    LazyImage: le,
                    LMap: Os["a"],
                    LTileLayer: Is["a"],
                    LMarker: Ls["a"],
                    BoxDonate: be
                },
                mixins: [T],
                data: function() {
                    return {
                        icon: js.a.icon({
                            iconUrl: a("d40f"),
                            iconSize: [35, 35],
                            iconAnchor: [17.5, 35]
                        })
                    }
                },
                computed: {
                    latLng: function() {
                        var t = this.page.location_latitude,
                            e = this.page.location_longitude;
                        return t && e && parseInt(t) && parseInt(e) ? [t, e] : null
                    },
                    mapLink: function() {
                        return "https://www.google.com/maps/search/?api=1&query=" + encodeURI(this.page.formatted.location)
                    },
                    today: function() {
                        return parseInt((new Date).toISOString().split("T")[0].replace(/-/g, ""))
                    },
                    isFuture: function() {
                        if (!this.page.event_start_date)
                            return !1;
                        var t = parseInt(this.page.event_start_date.replace(/-/g, ""));
                        return t >= this.today
                    }
                },
                methods: {
                    handleMarkerClick: function() {
                        this.mapLink && window.open(this.mapLink)
                    }
                }
            },
            Ms = $s,
            Ds = (a("c63c"), Object(N["a"])(Ms, Ts, As, !1, null, "f9f2aaa4", null)),
            zs = Ds.exports,
            Bs = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "ViewDrive"
                }, [e("div", {
                    class: ["content", {
                        "large-embed": t.page.large_embed
                    }]
                }, [e("WavingText", {
                    attrs: {
                        text: t.page.title,
                        duration: "1.1",
                        side: "0.25em",
                        fromcolor: "white",
                        tocolor: "white"
                    }
                }), t.page.large_embed ? t._e() : e("section", {
                    staticClass: "description",
                    attrs: {
                        id: "content"
                    }
                }, [e("article", {
                    staticClass: "a-underline owl",
                    domProps: {
                        innerHTML: t._s(t.page.content)
                    }
                })]), t.showprogress ? e("section", {
                    attrs: {
                        id: "progress"
                    }
                }, [e("figure", {
                    staticClass: "thermometer"
                }, [e("div", {
                    staticClass: "progress",
                    style: t.progress
                }, [t._v("  "), e("span", [t._v(t._s(t.page.progress.current))])]), e("div", [e("span", [t._v(t._s(t.page.progress.max))])])]), e("article", {
                    domProps: {
                        innerHTML: t._s(t.page.progress.text)
                    }
                })]) : t._e(), t.videoUrl ? e("section", {
                    staticClass: "stream"
                }, [e("div", {
                    staticClass: "embed"
                }, [e("iframe", {
                    attrs: {
                        src: t.videoUrl,
                        allow: "autoplay;encrypted-media",
                        allowfullscreen: "",
                        webkitallowfullscreen: "",
                        mozallowfullscreen: "",
                        oallowfullscreen: "",
                        msallowfullscreen: ""
                    }
                })]), e("div", {
                    staticClass: "on-air",
                    domProps: {
                        innerHTML: t._s(t.onAir)
                    }
                })]) : t._e(), t.page.large_embed ? e("section", {
                    staticClass: "description",
                    attrs: {
                        id: "content"
                    }
                }, [e("article", {
                    staticClass: "a-underline owl",
                    domProps: {
                        innerHTML: t._s(t.page.content)
                    }
                })]) : t._e(), t.page.donation_levels && t.page.tabs ? e("section", {
                    staticClass: "levels"
                }, [e("form", {
                    staticClass: "tabs"
                }, [e("div", {
                    staticClass: "radio-group"
                }, t._l(t.getTabs, (function(a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "radio-pill"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.active,
                            expression: "active"
                        }],
                        attrs: {
                            type: "radio",
                            id: "tab-" + i,
                            name: "tabs"
                        },
                        domProps: {
                            value: i,
                            checked: t._q(t.active, i)
                        },
                        on: {
                            change: function(e) {
                                t.active = i
                            }
                        }
                    }), e("label", {
                        attrs: {
                            for: "tab-" + i
                        }
                    }, [t._v(t._s(a.title))])])
                })), 0), e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.active,
                        expression: "active"
                    }],
                    staticClass: "pill",
                    on: {
                        change: function(e) {
                            var a = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.active = e.target.multiple ? a : a[0]
                        }
                    }
                }, t._l(t.getTabs, (function(a, i) {
                    return e("option", {
                        key: i,
                        domProps: {
                            value: i
                        }
                    }, [t._v(t._s(a.title))])
                })), 0)]), t.getActive ? e("div", {
                    staticClass: "tab-totals pill-hover"
                }, [t.getActive.link ? e("a", {
                    staticClass: "pill solid big",
                    attrs: {
                        href: t.getActive.link
                    }
                }, [t._v("Become a Member!")]) : t._e()]) : t._e(), t.getTabItems ? e("div", {
                    staticClass: "tab-items row"
                }, t._l(t.getTabItems, (function(t) {
                    return e("AboutThumb", {
                        key: t.title,
                        attrs: {
                            item: t,
                            template: "row"
                        }
                    })
                })), 1) : t._e()]) : !t.page.donation_levels && t.page.custom_items ? e("section", {
                    staticClass: "levels"
                }, [t.page.custom_items_title ? e("div", {
                    staticClass: "custom-items-title"
                }, [e("span", {}, [t._v(t._s(t.page.custom_items_title))])]) : t._e(), e("div", {
                    staticClass: "custom-items row"
                }, t._l(t.page.custom_items, (function(t) {
                    return e("AboutThumb", {
                        key: t.title,
                        attrs: {
                            item: t,
                            template: "row"
                        }
                    })
                })), 1)]) : t._e(), e("section", {
                    attrs: {
                        id: "slideshow"
                    }
                }, [t.page.slideshow ? e("dublab-gallery", {
                    attrs: {
                        images: t.page.slideshow,
                        extend: !0
                    }
                }) : t._e()], 1), e("section", {
                    attrs: {
                        id: "support"
                    }
                }, [e("article", [t._v("Other ways to support dublab")]), e("div", {
                    staticClass: "block-links"
                }, t._l(t.page.support_summary, (function(a) {
                    return e("vue-link", {
                        key: a.link,
                        staticClass: "block-link",
                        attrs: {
                            to: a.link
                        }
                    }, [e("h2", {
                        staticClass: "a-hover underline"
                    }, [t._v(t._s(a.title))]), e("br"), e("br"), e("p", {
                        domProps: {
                            innerHTML: t._s(a.text)
                        }
                    })])
                })), 1)]), e("section", [e("article", {
                    staticClass: "a-underline",
                    domProps: {
                        innerHTML: t._s(t.page.footer)
                    }
                })]), e("div", {
                    staticClass: "more",
                    attrs: {
                        id: "more"
                    }
                }, [t._m(0), t._m(1), t._m(2), t.site ? e("div", {
                    staticClass: "link-list"
                }, t._l(t.site.social_links, (function(a) {
                    return e("div", {
                        key: a.url,
                        staticClass: "comma"
                    }, [e("a", {
                        attrs: {
                            href: a.url
                        }
                    }, [t._v(t._s(a.text))])])
                })), 0) : t._e()])], 1), e("div", {
                    ref: "background",
                    staticClass: "background"
                }, [e("img", {
                    attrs: {
                        src: a("0e16")
                    }
                })])])
            },
            Es = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("h3", {
                    staticClass: "underline"
                }, [t._v("Affiliate Stations")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "flags"
                }, [e("a", {
                    attrs: {
                        href: "http://dublab.de/"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("1361")
                    }
                })]), e("a", {
                    attrs: {
                        href: "http://dublab.jp/"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("f54b")
                    }
                })]), e("a", {
                    attrs: {
                        href: "http://dublab.es/"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("67e6")
                    }
                })]), e("a", {
                    attrs: {
                        href: "https://dublab.com.br/"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("efb8")
                    }
                })])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("h3", {
                    staticClass: "underline"
                }, [t._v("Social")])])
            }],
            Hs = a("5a0c"),
            Ns = a.n(Hs),
            qs = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "wavetext"
                }, [t._l(t.parsedText, (function(a, i) {
                    return e("span", {
                        key: i,
                        class: [t.textClass, {
                            space: " " === a
                        }],
                        style: t.style(i),
                        domProps: {
                            innerHTML: t._s(a)
                        }
                    })
                })), e("v-style", [t._v("\n    @keyframes " + t._s(t.aniName) + "{\n    from{\n    transform:translateY(0);\n    color: " + t._s(t.fromcolor) + ";\n    }\n    to{\n    transform:translateY(-" + t._s(t.side) + ");\n    }\n    }\n  ")])], 2)
            },
            Rs = [],
            Us = (a("9ec8"), {
                name: "WavingText",
                components: {
                    "v-style": {
                        render: function(t) {
                            return t("style", this.$slots.default)
                        }
                    }
                },
                props: {
                    text: {
                        type: String,
                        required: !0
                    },
                    duration: {
                        type: String,
                        default: "0.3"
                    },
                    side: {
                        type: String,
                        default: "90"
                    },
                    fontsize: {
                        type: String,
                        default: "50"
                    },
                    textClass: {
                        type: String,
                        default: ""
                    },
                    fromcolor: {
                        type: String,
                        default: "white"
                    },
                    tocolor: {
                        type: String,
                        default: "black"
                    }
                },
                data: function() {
                    return {
                        innertext: Object(Te["a"])(this.text),
                        aniName: "_".concat(Math.random().toString(36).substr(2, 9))
                    }
                },
                computed: {
                    countChar: function() {
                        return Number(this.innertext.length)
                    },
                    parsedText: function() {
                        var t = [this.text.match(/\d(st)/i), this.text.match(/\d(nd)/i), this.text.match(/\d(rd)/i), this.text.match(/\d(th)/i), this.text.match(/(\[\d+\])/i)].filter((function(t) {
                                return t
                            })),
                            e = Object(Te["a"])(this.text);
                        return t.forEach((function(t) {
                            for (var a = 0 !== t[0].indexOf("["), i = a ? t.index + 1 : t.index, s = i + t[1].length, n = i; n < s; n++)
                                e[n] = "<sup>".concat(e[n], "</sup>")
                        })), e
                    }
                },
                mounted: function() {},
                methods: {
                    style: function(t) {
                        var e = "animation-name:".concat(this.aniName, ";"),
                            a = "font-size:".concat(this.fontsize, "px;"),
                            i = "animation-delay:-".concat((this.countChar - t) * Number(this.duration) / this.countChar, "s;"),
                            s = "animation-duration:".concat(this.duration, "s;"),
                            n = "color: ".concat(this.tocolor, ";");
                        return "".concat(e, " ").concat(a, " ").concat(n, " ").concat(i, " ").concat(s)
                    }
                }
            }),
            Vs = Us,
            Fs = (a("644d"), Object(N["a"])(Vs, qs, Rs, !1, null, "4cb9f318", null)),
            Ws = Fs.exports,
            Ys = {
                name: "Drive",
                mixins: [T],
                components: {
                    WavingText: Ws,
                    AboutThumb: me,
                    DublabGallery: Kt,
                    VueLink: st
                },
                data: function() {
                    return {
                        translateY: 0,
                        active: null
                    }
                },
                computed: {
                    showprogress: function() {
                        return this.page.progress && this.page.progress.min && this.page.progress.max
                    },
                    progress: function() {
                        if (this.page.progress) {
                            var t = this.page.progress.max,
                                e = this.page.progress.current,
                                a = parseInt(t.replace(/[^\d]+/g, "")),
                                i = parseInt(e.replace(/[^\d]+/g, "")),
                                s = i / a * 100;
                            return {
                                width: s + "%"
                            }
                        }
                        return 0
                    },
                    videoUrl: function() {
                        if (this.site && this.site.livevideo) {
                            var t = this.site.livevideo.url;
                            return t
                        }
                        return null
                    },
                    playing: function() {
                        return this.$store.state.audio.playing
                    },
                    onAir: function() {
                        return this.formatShow(this.playing.on_air, "On Air")
                    },
                    getTabs: function() {
                        return v()(this.page, "tabs.options")
                    },
                    getTabItems: function() {
                        var t = this;
                        return v()(this.page, "tabs.entries") ? this.page.tabs.entries.filter((function(e) {
                            return e.level.indexOf(t.active) >= 0
                        })) : null
                    },
                    getActive: function() {
                        if (v()(this.page, "tabs.options")) {
                            var t = Object.keys(this.page.tabs.options);
                            return t.indexOf(this.active) < 0 && this.resetActive(t), this.page.tabs.options[this.active]
                        }
                        return null
                    }
                },
                methods: {
                    resetActive: function(t) {
                        this.active = t[0]
                    },
                    formatUnixTime: function(t) {
                        if (!t)
                            return "";
                        var e = Ns()(new Date(1e3 * t)).format("h:mm a").replace("am", "a.m.").replace("pm", "p.m.");
                        return e
                    },
                    formatShow: function(t, e) {
                        if (t.combo && t.start && t.end) {
                            var a = t.combo,
                                i = this.formatUnixTime(t.start),
                                s = this.formatUnixTime(t.end);
                            return "".concat(e, "<br><span>").concat(i, "</span> <span>to ").concat(s, "</span><br>").concat(ba()(a))
                        }
                        return ""
                    },
                    linearTransform: function(t, e, a, i, s) {
                        return (s - t) / (e - t) * (i - a) + a
                    },
                    translateBackground: function() {
                        var t = 0,
                            e = document.body.clientHeight,
                            a = this.linearTransform(t, e, 0, 100, window.scrollY);
                        this.translateY !== a && (this.translateY = a),
                        this.translateY = window.scrollY
                    }
                },
                mounted: function() {},
                beforeDestroy: function() {}
            },
            Gs = Ys,
            Js = (a("a606"), Object(N["a"])(Gs, Bs, Es, !1, null, "614cb9bc", null)),
            Zs = Js.exports,
            Qs = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "body"
                }, [t._m(0), e("div", {
                    staticClass: "section-2 wf-section"
                }, [e("a", {
                    attrs: {
                        name: "staff"
                    }
                }), e("div", {
                    staticClass: "container w-container"
                }, [e("h1", {
                    staticClass: "heading"
                }, [t._v("Staff")]), e("div", {
                    staticClass: "div-block-7"
                }, t._l(t.site.staff_members, (function(a) {
                    return e("div", {
                        key: a.staff_name,
                        staticClass: "div-block-8"
                    }, [e("img", {
                        attrs: {
                            src: a.staff_image
                        }
                    }), e("p", {
                        staticClass: "paragraph-6"
                    }, [t._v(t._s(a.staff_name)), e("br"), t._v(t._s(a.staff_position))])])
                })), 0), e("div", {
                    staticClass: "div-block-10",
                    attrs: {
                        id: "directors"
                    }
                }), e("h1", {
                    staticClass: "heading"
                }, [t._v("Board of Directors")]), e("div", {
                    staticClass: "div-block-7"
                }, t._l(t.site.board_members, (function(a) {
                    return e("div", {
                        key: a.full_name,
                        staticClass: "div-block-8"
                    }, [e("img", {
                        attrs: {
                            src: a.board_member_image
                        }
                    }), e("p", {
                        staticClass: "paragraph-6"
                    }, [t._v(t._s(a.full_name)), e("br"), t._v(t._s(a.board_member_position))])])
                })), 0), e("div", {
                    staticClass: "container-3 w-container",
                    attrs: {
                        id: "supporters"
                    }
                }, [e("h1", {
                    staticClass: "heading yearly"
                }, [t._v("Year Round Supporters")]), e("h2", {
                    staticClass: "heading-3"
                }, [t._v("Gold Level")]), e("div", {
                    staticClass: "flexycontainer"
                }, t._l(t.site.gold_supporters, (function(a) {
                    return e("div", {
                        key: a.dublab_gold_supporter_name,
                        staticClass: "div-block-15"
                    }, [e("div", {
                        staticClass: "div-block-16"
                    }, [e("img", {
                        attrs: {
                            src: a.dublab_gold_supporter_image
                        }
                    })]), e("div", {
                        staticClass: "div-block-17 gold"
                    }, [e("h5", {
                        staticClass: "heading-2"
                    }, [t._v(" " + t._s(a.dublab_gold_supporter_name) + " ")]), e("p", {
                        staticClass: "paragraph-9"
                    }, [t._v(" " + t._s(a.dublab_gold_supporter_description) + " ")])])])
                })), 0), e("h2", {
                    staticClass: "heading-3"
                }, [t._v("Silver Level")]), e("div", {
                    staticClass: "flexycontainer mids"
                }, t._l(t.site.silver_supporters, (function(a) {
                    return e("div", {
                        key: a.dublab_silver_supporter_name,
                        staticClass: "div-block-15 mids"
                    }, [e("div", {
                        staticClass: "div-block-16"
                    }, [e("img", {
                        attrs: {
                            src: a.dublab_silver_supporter_image
                        }
                    })]), e("div", {
                        staticClass: "div-block-17 silver"
                    }, [e("h5", {
                        staticClass: "heading-2"
                    }, [t._v(" " + t._s(a.dublab_silver_supporter_name) + " ")]), e("p", {
                        staticClass: "paragraph-9"
                    }, [t._v(" " + t._s(a.dublab_silver_supporter_description) + " ")])])])
                })), 0), e("h2", {
                    staticClass: "heading-3"
                }, [t._v("Bronze Level")]), e("div", {
                    staticClass: "flexycontainer"
                }, t._l(t.site.bronze_supporters, (function(a) {
                    return e("div", {
                        key: a.dublab_bronze_supporter_name,
                        staticClass: "div-block-15"
                    }, [e("div", {
                        staticClass: "div-block-16"
                    }, [e("img", {
                        attrs: {
                            src: a.dublab_bronze_supporter_image
                        }
                    })]), e("div", {
                        staticClass: "div-block-17 bronze"
                    }, [e("h5", {
                        staticClass: "heading-2"
                    }, [t._v(" " + t._s(a.dublab_bronze_supporter_name) + " ")]), e("p", {
                        staticClass: "paragraph-9"
                    }, [t._v(" " + t._s(a.dublab_bronze_supporter_description) + " ")])])])
                })), 0)]), e("div", {
                    staticClass: "container-2 w-container"
                }, [e("div", {
                    staticClass: "div-block-10"
                }), e("h1", {
                    staticClass: "heading"
                }, [t._v("Foundations and Grantmakers")]), e("div", {
                    staticClass: "flexycontainer"
                }, t._l(t.site.foundations, (function(t) {
                    return e("div", {
                        key: t.foundation_name,
                        staticClass: "logoholder"
                    }, [e("img", {
                        staticClass: "image-9",
                        attrs: {
                            src: t.foundation_image
                        }
                    })])
                })), 0), e("div", {
                    staticClass: "div-block-10"
                }), e("h1", {
                    staticClass: "heading"
                }, [t._v("Major Donors")]), e("div", {
                    staticClass: "flexycontainer rogueflex"
                }, t._l(t.site.major_donors, (function(a) {
                    return e("div", {
                        key: a.full_name,
                        staticClass: "div-block-13"
                    }, [e("span", {
                        staticClass: "text-block-6"
                    }, [t._v(" \n          " + t._s(a.full_name) + "\n        ")])])
                })), 0), e("div", {
                    staticClass: "div-block-10"
                }), e("h1", {
                    staticClass: "heading"
                }, [t._v("Supporter Circle Members")]), e("div", {
                    staticClass: "flexycontainer rogueflex"
                }, t._l(t.site.supporters_circle, (function(a) {
                    return e("div", {
                        key: a.full_name,
                        staticClass: "div-block-11"
                    }, [e("span", {
                        staticClass: "text-block-6"
                    }, [t._v(" \n          " + t._s(a.full_name) + "\n        ")])])
                })), 0)])])])])
            },
            Ks = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "section-copy-copy wf-section"
                }, [e("p", {
                    staticClass: "paragraph-5"
                }, [t._v("Our Team")])])
            }],
            Xs = {
                name: "Team",
                mixins: [T]
            },
            tn = Xs,
            en = (a("b34a"), Object(N["a"])(tn, Qs, Ks, !1, null, "a5163848", null)),
            an = en.exports,
            sn = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: ["HomeContainer", {
                        broadcastActive: t.isBroadcastActive,
                        playActive: t.playActive
                    }]
                }, [e("div", {
                    staticClass: "ViewHome pill-hover"
                }, [e("Marquee", {
                    attrs: {
                        items: t.page.announcements,
                        autoplay: !0
                    }
                }), e("div", {
                    staticClass: "pills"
                }, [t.isVideoEnabled ? e("button", {
                    class: ["button pill solid livevideopill", {
                        active: t.isVideoActive
                    }],
                    on: {
                        click: t.onVideoClick
                    }
                }, [e("span", {
                    staticClass: "desktop"
                }, [t._v("Live ")]), t._v("Video\n      ")]) : t._e(), e("button", {
                    class: ["button pill solid circle", {
                        active: "info" === t.modalActive
                    }],
                    on: {
                        click: function(e) {
                            t.modalActive = "info" === t.modalActive ? "" : "info"
                        }
                    }
                }, [t._v("\n        i\n      ")])]), t.modalActive ? e("div", {
                    class: ["modal-wrap", {
                        left: "join-us" === t.modalActive && !t.isVideoEnabled
                    }]
                }, ["join-us" === t.modalActive ? e("div", {
                    staticClass: "HomeModal box solid rounded"
                }, t._l(t.page.support_summary, (function(a) {
                    return e("vue-link", {
                        key: a.link,
                        staticClass: "block",
                        attrs: {
                            to: a.link
                        }
                    }, [e("h2", {
                        staticClass: "a-hover underline"
                    }, [t._v(t._s(a.title))]), e("br"), e("p", {
                        domProps: {
                            innerHTML: t._s(a.text)
                        }
                    })])
                })), 1) : "info" === t.modalActive ? e("div", {
                    staticClass: "HomeModal box solid rounded"
                }, [e("h3", [t._v(t._s(t.description))]), e("hr"), e("h3", [t._v("Affiliate Stations")]), t._m(0), e("hr"), t.site ? e("div", {
                    staticClass: "link-list"
                }, t._l(t.site.social_links, (function(a) {
                    return e("div", {
                        key: a.url
                    }, [e("a", {
                        staticClass: "underline hover",
                        attrs: {
                            href: a.url
                        }
                    }, [t._v(t._s(a.text))])])
                })), 0) : t._e()]) : t._e()]) : t._e(), t.isVideoActive ? t._e() : e("div", {
                    staticClass: "HomeSlidesContainer",
                    on: {
                        mouseover: t.showTuneIn,
                        mouseleave: t.hideTuneIn
                    }
                }, [e("HomeSlides", {
                    attrs: {
                        entries: t.slides
                    }
                })], 1), t.playActive ? e("div", {
                    staticClass: "tune-in",
                    style: t.cursorPosition
                }) : t._e(), t.page.cams && !t.isVideoActive ? e("Stream", {
                    attrs: {
                        images: t.page.cams
                    }
                }) : t._e(), t.isVideoActive ? e("div", {
                    ref: "videoWrap",
                    staticClass: "VideoWrap"
                }, [e("div", {
                    staticClass: "EmbedWrap"
                }, [e("div", {
                    staticClass: "embed"
                }, [e("iframe", {
                    attrs: {
                        src: this.videoUrl,
                        allow: "autoplay;"
                    }
                })])])]) : t._e()], 1)])
            },
            nn = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "flags"
                }, [e("a", {
                    attrs: {
                        href: "http://dublab.de/"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("1361")
                    }
                })]), e("a", {
                    attrs: {
                        href: "http://dublab.jp/"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("f54b")
                    }
                })]), e("a", {
                    attrs: {
                        href: "http://dublab.es/"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("67e6")
                    }
                })]), e("a", {
                    attrs: {
                        href: "https://dublab.com.br/"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("efb8")
                    }
                })])])
            }],
            rn = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    ref: "container",
                    class: ["HomeSlides", {
                        tinitial: t.first
                    }, t.transition]
                }, [t.slide ? e("HomeSlide", {
                    attrs: {
                        slide: t.slide
                    }
                }) : t._e()], 1)
            },
            on = [],
            cn = a("df7c"),
            ln = a.n(cn),
            un = function() {
                var t = this,
                    e = t._self._c;
                return "logo" === t.layout ? e("div", {
                    ref: "container",
                    class: t.classes
                }, [e("div", {
                    staticClass: "image dublab-logo"
                })]) : "on_air" === t.layout ? e("div", {
                    ref: "container",
                    class: t.classes
                }, [e("p", {
                    domProps: {
                        innerHTML: t._s(t.onAir)
                    }
                })]) : "up_next" === t.layout ? e("div", {
                    ref: "container",
                    class: t.classes
                }, [e("div", {
                    staticClass: "flex"
                }, [t.onAir ? e("p", {
                    domProps: {
                        innerHTML: t._s(t.onAir)
                    }
                }) : t._e()]), e("div", {
                    staticClass: "flex"
                }, [t.upNext ? e("p", {
                    domProps: {
                        innerHTML: t._s(t.upNext)
                    }
                }) : t._e()])]) : "current_time" === t.layout ? e("div", {
                    ref: "container",
                    class: t.classes
                }, [e("p", [t._v("\n    It’s"), e("br"), t._v(t._s(t.date.dow)), e("br"), t._v(t._s(t.date.date)), e("br"), e("span", [t._v(t._s(t.date.time) + " " + t._s(t.date.timezone))])])]) : "text" === t.layout ? e("div", {
                    ref: "container",
                    class: t.classes
                }, [e("p", {
                    domProps: {
                        innerHTML: t._s(t.slide.text)
                    }
                })]) : "sponsor_logos" === t.layout ? e("div", {
                    ref: "container",
                    class: t.classes
                }, [e("div", {
                    staticClass: "label"
                }, [t._v(t._s(t.slide.text))]), e("div", {
                    staticClass: "images"
                }, t._l(t.slide.logos, (function(t) {
                    return e("div", {
                        key: t,
                        staticClass: "image",
                        style: "background-image:url(".concat(t, ")")
                    })
                })), 0)]) : "sponsor_names" === t.layout ? e("div", {
                    ref: "container",
                    class: t.classes
                }, [e("div", {
                    staticClass: "label"
                }, [t._v(t._s(t.slide.text))]), e("div", {
                    staticClass: "flex"
                }, [e("p", {
                    domProps: {
                        innerHTML: t._s(t.slide.names)
                    }
                })])]) : t._e()
            },
            dn = [],
            pn = (a("55dd"), a("b5b1")),
            mn = a.n(pn),
            fn = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["16px"],
                    a = e.length - 1,
                    i = t.parentNode,
                    s = new mn.a(i),
                    n = s.height() + 2,
                    r = s.width() + 2,
                    o = 0;
                if (t.style.fontSize = e[o], t.scrollWidth > r)
                    while (t.scrollWidth > r && o < a)
                        o++,
                        t.style.fontSize = e[o];
                if (t.clientHeight > n)
                    while (t.clientHeight > n && o < a)
                        o++,
                        t.style.fontSize = e[o];
                return {
                    index: o,
                    size: e[o]
                }
            },
            hn = {
                name: "HomeSlide",
                props: {
                    slide: {
                        default: {}
                    }
                },
                data: function() {
                    return {
                        sizes: ["12.0rem", "9.0rem", "6.0rem", "3.6rem", "2.8rem", "2.0rem"],
                        frame: {}
                    }
                },
                computed: {
                    layout: function() {
                        return this.slide.acf_fc_layout
                    },
                    classes: function() {
                        return ["HomeSlide", "SlideLayout--" + this.slide.acf_fc_layout]
                    },
                    playing: function() {
                        return this.$store.state.audio.playing
                    },
                    onAir: function() {
                        return this.formatShow(this.playing.on_air, "On Air")
                    },
                    upNext: function() {
                        return this.formatShow(this.playing.up_next, "Up Next")
                    },
                    date: function() {
                        return this.$store.state.date.local
                    }
                },
                methods: {
                    formatUnixTime: function(t) {
                        if (!t)
                            return "";
                        var e = Ns()(new Date(1e3 * t)).format("h:mm a").replace("am", "a.m.").replace("pm", "p.m.");
                        return e
                    },
                    formatShow: function(t, e) {
                        if (t.combo && t.start && t.end) {
                            var a = t.combo,
                                i = this.formatUnixTime(t.start),
                                s = this.formatUnixTime(t.end);
                            return "".concat(e, "<br><span>").concat(i, "</span> <span>to ").concat(s, "</span><br>").concat(ba()(a))
                        }
                        return ""
                    },
                    format: function() {
                        if (this.$refs.container) {
                            var t = Object(Te["a"])(this.$refs.container.querySelectorAll("p")),
                                e = "on_air" === this.layout ? this.sizes.slice(1) : this.sizes.slice(0),
                                a = t.map((function(t) {
                                    return fn(t, e)
                                }));
                            if (a.length > 1) {
                                var i = a.sort((function(t, e) {
                                        return e.index - t.index
                                    })),
                                    s = i[0].size;
                                t.forEach((function(t) {
                                    return t.style.fontSize = s
                                }))
                            }
                        }
                    },
                    safeFormat: function() {
                        var t = this;
                        this.$nextTick((function() {
                            return t.format()
                        })),
                        clearTimeout(this.frame.debounce),
                        this.frame.debounce = setTimeout((function() {
                            return t.format()
                        }), 50)
                    },
                    resize: function() {
                        var t = this;
                        clearTimeout(this.frame.resize),
                        this.frame.resize = setTimeout((function() {
                            return t.format()
                        }), 100)
                    }
                },
                mounted: function() {
                    this.safeFormat(),
                    window.addEventListener("resize", this.resize.bind(this), !1)
                },
                willDestroy: function() {
                    clearTimeout(this.frame.resize),
                    clearTimeout(this.frame.debounce),
                    window.removeEventListener("resize", this.resize.bind(this), !1)
                },
                updated: function() {
                    this.safeFormat()
                }
            },
            vn = hn,
            gn = (a("7278"), Object(N["a"])(vn, un, dn, !1, null, "0390ed72", null)),
            bn = gn.exports,
            _n = {
                name: "HomeSlides",
                components: {
                    HomeSlide: bn
                },
                props: {
                    entries: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        transitions: ln()(["tbottom", "tleft", "ttop", "tright"]),
                        transition: "",
                        slides: ln()(this.entries),
                        slide: "",
                        frame: {},
                        first: !0
                    }
                },
                mounted: function() {
                    this.slide = this.slides(),
                    this.frame.slides = setTimeout(this.transitionOut.bind(this), 6e3)
                },
                willDestroy: function() {
                    clearInterval(this.frame.slides)
                },
                methods: {
                    transitionIn: function() {
                        var t = this;
                        this.slide = this.slides(),
                        this.transition = "",
                        this.frame.slides = setTimeout((function() {
                            return t.transitionOut()
                        }), 6e3)
                    },
                    transitionOut: function() {
                        var t = this;
                        this.first = !1,
                        this.transition = this.transitions(),
                        this.frame.slides = setTimeout((function() {
                            return t.transitionIn()
                        }), 1e3)
                    }
                }
            },
            yn = _n,
            Cn = (a("93b2"), Object(N["a"])(yn, rn, on, !1, null, "6aafc4fe", null)),
            wn = Cn.exports,
            kn = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "container-stream"
                }, [e("div", {
                    staticClass: "img active",
                    style: {
                        backgroundImage: "url(" + t.active.url + "?" + Math.floor(1e4 * Math.random()) + ")",
                        top: t.active.top || 0,
                        left: t.active.left || 0,
                        right: t.active.right || 0,
                        bottom: t.active.bottom || 0
                    }
                }), e("div", {
                    staticClass: "noise"
                })])
            },
            xn = [],
            Sn = {
                name: "Stream",
                props: {
                    images: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        active: {},
                        next: {}
                    }
                },
                mounted: function() {
                    this.setImage(),
                    this.frame = setInterval(this.setImage, 6e4)
                },
                beforeDestroy: function() {
                    clearInterval(this.frame)
                },
                methods: {
                    setImage: function() {
                        var t = (new Date).getMinutes(),
                            e = Tn(t, this.images.length);
                        this.active = this.images[e]
                    }
                }
            };
        function Tn(t, e) {
            var a = t % e;
            return Math.floor(a >= 0 ? a : a + e)
        }
        var An = Sn,
            Pn = (a("3684"), Object(N["a"])(An, kn, xn, !1, null, "2178f52a", null)),
            jn = Pn.exports,
            On = {
                name: "ViewHome",
                components: {
                    Stream: jn,
                    HomeSlides: wn,
                    Marquee: ht,
                    VueLink: st
                },
                mixins: [T],
                data: function() {
                    return {
                        playActive: !1,
                        modalActive: "",
                        muted: !0,
                        cursorPosition: {
                            top: 0,
                            left: 0
                        },
                        frame: {}
                    }
                },
                methods: {
                    modalToggle: function(t) {
                        this[t] = !this[t]
                    },
                    showTuneIn: function() {
                        this.isStreamPaused && (this.playActive = !0, window.addEventListener("mousemove", this.updateCursor), window.addEventListener("mouseup", this.onAudioClick))
                    },
                    hideTuneIn: function() {
                        this.playActive = !1,
                        window.removeEventListener("mousemove", this.updateCursor),
                        window.removeEventListener("mouseup", this.onAudioClick)
                    },
                    onAudioClick: function() {
                        this.isBroadcastActive ? this.$store.dispatch("closeBroadcast") : this.isStreamPaused && this.$store.dispatch("toggleStream"),
                        this.hideTuneIn()
                    },
                    updateCursor: function(t) {
                        var e = 20;
                        this.cursorPosition = {
                            top: t.clientY + e + "px",
                            left: t.clientX + e + "px"
                        }
                    },
                    onVideoClick: function() {
                        this.$store.dispatch("toggleVideo")
                    }
                },
                computed: {
                    description: function() {
                        if (this.site)
                            return this.site.description
                    },
                    isBroadcastActive: function() {
                        return this.$store.state.audio.broadcast.active
                    },
                    isStreamPaused: function() {
                        return this.$store.state.audio.stream.paused
                    },
                    isVideoEnabled: function() {
                        return this.site && this.site.livevideo && this.site.livevideo.active && this.site.livevideo.url
                    },
                    isVideoActive: function() {
                        return this.$store.state.audio.video.active
                    },
                    videoUrl: function() {
                        return this.site.livevideo.url
                    },
                    slides: function() {
                        return this.page.slides
                    }
                }
            },
            In = On,
            Ln = (a("4055"), Object(N["a"])(In, sn, nn, !1, null, "04032646", null)),
            $n = Ln.exports,
            Mn = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "grid"
                }, [e("div", {
                    staticClass: "options pill-hover"
                }, [e("router-link", {
                    ref: "djsLink",
                    staticClass: "pill",
                    attrs: {
                        to: "/djs"
                    }
                }, [e("div", {
                    staticClass: "toggle-container"
                }, [e("img", {
                    staticClass: "toggle-image",
                    attrs: {
                        src: a("17e7")
                    }
                }), e("h1", [t._v("Residents")])])]), e("router-link", {
                    ref: "showsLink",
                    staticClass: "pill",
                    attrs: {
                        to: "/shows"
                    }
                }, [e("div", {
                    staticClass: "toggle-container"
                }, [e("img", {
                    staticClass: "toggle-image",
                    attrs: {
                        src: a("8ad3")
                    }
                }), e("h1", [t._v("Shows")])])])], 1), e("div", {
                    class: ["grid-auto-md", {
                        "a-hover": t.djs
                    }]
                }, t._l(t.filteredItemsIsActive, (function(t) {
                    return e("ArchiveThumb", {
                        key: t.url,
                        staticClass: "center",
                        attrs: {
                            page: t,
                            circle: !0
                        }
                    })
                })), 1), e("div", {
                    staticClass: "heading-djs-shows"
                }, [t._v(t._s(t.pastText))]), e("div", {
                    class: ["grid-auto-md", {
                        "a-hover": t.djs,
                        inactive: !0
                    }]
                }, t._l(t.filteredItemsNotActive, (function(a, i) {
                    return e("div", {
                        key: i
                    }, [e("div", {
                        key: i,
                        staticClass: "inner-container"
                    }, [e("router-link", {
                        attrs: {
                            to: a.url
                        }
                    }, [e("p", [t._v(t._s(a.title))])]), i !== t.filteredItemsNotActive.length - 1 ? e("span", {
                        key: a,
                        staticClass: "custom-comma"
                    }, [t._v(" • \n        ")]) : t._e()], 1)])
                })), 0), e("BoxDonate")], 1)
            },
            Dn = [],
            zn = {
                name: "ViewResidents",
                components: {
                    ArchiveThumb: Xa,
                    BoxDonate: be
                },
                mixins: [T],
                computed: {
                    djs: function() {
                        return "djs" === this.$route.name
                    },
                    filteredItemsIsActive: function() {
                        return this.pages.filter((function(t) {
                            return !0 === t.is_active || null === t.is_active
                        }))
                    },
                    filteredItemsNotActive: function() {
                        var t = this.pages.filter((function(t) {
                            return !1 === t.is_active && null !== t.is_active
                        }));
                        return t
                    },
                    broadcastDate: function() {
                        return !1
                    },
                    pastText: function() {
                        return this.djs ? "Past Resident DJs" : "Past Shows"
                    }
                }
            },
            Bn = zn,
            En = (a("824a"), Object(N["a"])(Bn, Mn, Dn, !1, null, "e7bfb616", null)),
            Hn = En.exports,
            Nn = function() {
                var t = this,
                    e = t._self._c;
                return t.loading ? e("div", {
                    staticClass: "schedule-loading"
                }, [t._v("Loading...")]) : t.post ? e("div", {
                    staticClass: "schedule-detail"
                }, [t.post.attachments ? e("img", {
                    staticClass: "image",
                    attrs: {
                        src: t.post.attachments,
                        alt: "Image"
                    }
                }) : e("img", {
                    staticClass: "image",
                    attrs: {
                        src: a("0e6b"),
                        alt: "Image"
                    }
                }), e("div", {
                    staticClass: "event-info"
                }, [e("div", {
                    staticClass: "event-heading"
                }, [t.post.title ? e("h2", {
                    staticClass: "event-title"
                }, [t._v("\n        " + t._s(t.post.title.replaceAll("-", " ").trim()) + "\n      ")]) : t._e(), e("p", [t._v(t._s(t.post.date))]), e("p", [t._v(t._s(t.post.time))])]), t.post.attachments ? e("img", {
                    staticClass: "image mobile",
                    attrs: {
                        src: t.post.attachments,
                        alt: "Image"
                    }
                }) : e("img", {
                    staticClass: "image mobile",
                    attrs: {
                        src: a("0e6b"),
                        alt: "Image"
                    }
                }), e("p", {
                    staticClass: "event-copy copy",
                    domProps: {
                        innerHTML: t._s(t.post.description)
                    }
                }), e("BoxDonate", {
                    staticClass: "donate"
                })], 1)]) : t._e()
            },
            qn = [],
            Rn = {
                name: "ScheduleDetail",
                components: {
                    BoxDonate: be
                },
                data: function() {
                    return {
                        loading: !1
                    }
                },
                computed: {
                    post: function() {
                        var t = this.$store.getters.getPost(this.$route.params.id);
                        return t ? {
                            date: Ns()(t.startTime).format("dddd MMMM DD, YYYY"),
                            time: "".concat(Ns()(t.startTime).format("hh:mm A"), " to ").concat(Ns()(t.endTime).format("hh:mm A")),
                            description: t.description,
                            title: t.summary.split("//")[1],
                            attachments: t.attachments
                        } : null
                    }
                },
                watch: {
                    post: function() {
                        this.$store.getters.getPost(this.$route.params.id) && (this.loading = !1)
                    }
                },
                mounted: function() {
                    this.$store.dispatch("getPost", this.$route.params.id)
                }
            },
            Un = Rn,
            Vn = (a("50b0"), Object(N["a"])(Un, Nn, qn, !1, null, "18be9bba", null)),
            Fn = Vn.exports,
            Wn = function() {
                var t = this;
                t._self._c;
                return t._m(0)
            },
            Yn = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "body"
                }, [e("div", {
                    staticClass: "section wf-section"
                }), e("div", {
                    staticClass: "section-2 last wf-section"
                }, [e("div", {
                    staticClass: "container w-container"
                }, [e("div", {
                    staticClass: "arbitrarily-placed-and-sized-parent-element"
                }, [e("div", {
                    staticClass: "video-embed-object-fit-cover"
                }, [e("iframe", {
                    attrs: {
                        id: "8d508ca0-14d8-37dd-44bf-6b3901d8be04-live-68b25716-c475-61ee-5942-c3fd73b6db75",
                        src: "https://iframe.dacast.com/live/8d508ca0-14d8-37dd-44bf-6b3901d8be04/68b25716-c475-61ee-5942-c3fd73b6db75",
                        frameborder: "0",
                        scrolling: "no",
                        allow: "autoplay;encrypted-media",
                        allowfullscreen: "",
                        webkitallowfullscreen: "",
                        mozallowfullscreen: "",
                        oallowfullscreen: "",
                        msallowfullscreen: ""
                    }
                })])])])])])
            }],
            Gn = (a("3f3b"), {}),
            Jn = Object(N["a"])(Gn, Wn, Yn, !1, null, null, null),
            Zn = Jn.exports,
            Qn = function() {
                var t = this;
                t._self._c;
                return t._m(0)
            },
            Kn = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "body"
                }, [e("div", {
                    staticClass: "section wf-section"
                }), e("div", {
                    staticClass: "section-2 last wf-section"
                }, [e("div", {
                    staticClass: "container w-container"
                }, [e("div", {
                    staticClass: "arbitrarily-placed-and-sized-parent-element"
                }, [e("div", {
                    staticClass: "video-embed-object-fit-cover"
                }, [e("div", {
                    attrs: {
                        id: "dcPlayer"
                    }
                })])])])])])
            }],
            Xn = {
                mounted: function() {
                    var t = document.createElement("script");
                    t.setAttribute("src", "https://player.dacast.com/js/player.js?contentId=8d508ca0-14d8-37dd-44bf-6b3901d8be04-live-68b25716-c475-61ee-5942-c3fd73b6db75"),
                    document.head.appendChild(t),
                    window.addEventListener("load", (function() {
                        var t = "8d508ca0-14d8-37dd-44bf-6b3901d8be04-live-68b25716-c475-61ee-5942-c3fd73b6db75";
                        window.dacast(t, "dcPlayer", {
                            player: "html5hls"
                        })
                    }))
                }
            },
            tr = Xn,
            er = (a("60cc"), Object(N["a"])(tr, Qn, Kn, !1, null, null, null)),
            ar = er.exports,
            ir = null;
        function sr(t, e, a) {
            var i = function() {
                var e = Object(Ae["a"])(regeneratorRuntime.mark((function e() {
                    var i,
                        s;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (ir) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 3, fetch("https://dublab.wpengine.com/wp-json/lazystate/v1/paths");
                            case 3:
                                return i = e.sent, e.next = 6, i.json();
                            case 6:
                                s = e.sent,
                                ir = v()(s, "/paths.paths") || [];
                            case 8:
                                ir.find((function(e) {
                                    return new RegExp("".concat(e, "/?$")).test(t.path)
                                })) ? a() : a("/archive" + t.path);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }), e)
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            i()
        }
        function nr(t, e, a) {
            a()
        }
        function rr(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                a.push.apply(a, i)
            }
            return a
        }
        function or(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? rr(Object(a), !0).forEach((function(e) {
                    Object(C["a"])(t, e, a[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : rr(Object(a)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }))
            }
            return t
        }
        i["default"].use(Vt["a"]);
        var cr = {
                params: !0,
                pagination: !0
            },
            lr = new Vt["a"]({
                mode: "history",
                linkExactActiveClass: "active",
                routes: [{
                    path: "/",
                    component: $n,
                    name: "home",
                    beforeEnter: nr
                }, {
                    path: "/tv2",
                    component: ar,
                    name: "tv2",
                    meta: {
                        contentState: cr
                    }
                }, {
                    path: "/tv",
                    component: Zn,
                    name: "tv",
                    meta: {
                        contentState: cr
                    }
                }, {
                    path: "/archive",
                    component: Ii,
                    name: "archive",
                    meta: {
                        contentState: cr
                    }
                }, {
                    path: "/archive/:broadcast",
                    component: Wi,
                    name: "broadcast",
                    meta: {
                        contentState: cr
                    }
                }, {
                    path: "/archive/collections",
                    component: Mi,
                    name: "collections",
                    meta: {
                        contentState: cr
                    }
                }, {
                    path: "/archive/:collection",
                    component: Ni,
                    name: "collection",
                    meta: {
                        contentState: cr
                    }
                }, {
                    path: "/search/:term",
                    component: ts,
                    meta: {
                        contentState: {
                            params: !0
                        }
                    }
                }, {
                    path: "/search",
                    component: ts,
                    meta: {
                        contentState: {
                            disable: !0
                        }
                    }
                }, {
                    path: "/events",
                    component: ms,
                    name: "events",
                    meta: {
                        contentState: cr
                    }
                }, {
                    path: "/events/:id/:slug",
                    component: zs
                }, {
                    path: "/schedule",
                    component: fa
                }, {
                    path: "/schedule/:id/:slug",
                    component: Fn,
                    name: "schedule"
                }, {
                    path: "/support",
                    redirect: "/support/memberships"
                }, {
                    path: "/supporters",
                    component: Xe,
                    name: "supporters"
                }, {
                    path: "/about",
                    component: _s,
                    name: "about"
                }, {
                    path: "/aboutdetail",
                    component: Ss,
                    name: "aboutdetail"
                }, {
                    path: "/support/:section",
                    component: Ye,
                    name: "supportoptions"
                }, {
                    path: "/djs",
                    component: Hn,
                    name: "djs"
                }, {
                    path: "/djs/:dj",
                    component: Wi,
                    name: "dj",
                    meta: {
                        contentState: cr
                    }
                }, {
                    path: "/shows",
                    component: Hn,
                    name: "shows",
                    meta: {
                        active: "/djs"
                    }
                }, {
                    path: "/shows/:show",
                    component: Wi,
                    name: "show",
                    meta: {
                        contentState: cr,
                        active: "/djs"
                    }
                }, {
                    path: "/projects",
                    component: wa,
                    name: "projects"
                }, {
                    path: "/podcasts",
                    component: Pa,
                    name: "podcasts"
                }, {
                    path: "/team",
                    component: an,
                    name: "team"
                }, {
                    path: "/drive",
                    component: Zs,
                    name: "drive"
                }, {
                    path: "/takeover",
                    component: Zs,
                    name: "takeover"
                }, {
                    path: "/:fallback",
                    beforeEnter: sr,
                    component: Wi
                }],
                scrollBehavior: function(t, e, a) {
                    if (a)
                        return a;
                    var i = gr(t),
                        s = br(t),
                        n = ur(t),
                        r = pr(t),
                        o = fr(t),
                        c = dr(t),
                        l = mr(t),
                        u = hr(t),
                        d = vr(t);
                    return i || (s || (n || (r || (o || (c || (l || (u || (d || {
                            x: 0,
                            y: 0
                        }))))))))
                }
            });
        function ur(t) {
            if (!t.name || !t.name.match(/team/g) || "#directors" !== t.hash)
                return !1;
            var e = document.querySelector(".HeaderWrap"),
                a = document.getElementById("directors");
            if (a && e) {
                var i = e.getBoundingClientRect();
                return {
                    x: 0,
                    y: a.offsetTop - i.height
                }
            }
        }
        function dr(t) {
            if (!t.name || !t.name.match(/aboutdetail/g) || "#dei" !== t.hash)
                return !1;
            var e = document.querySelector(".HeaderWrap"),
                a = document.getElementById("dei");
            if (a && e) {
                var i = e.getBoundingClientRect();
                return {
                    x: 0,
                    y: a.offsetTop - i.height
                }
            }
        }
        function pr(t) {
            if (!t.name || !t.name.match(/team/g) || "#supporters" !== t.hash)
                return !1;
            var e = document.querySelector(".HeaderWrap"),
                a = document.getElementById("supporters");
            if (a && e) {
                var i = e.getBoundingClientRect();
                return {
                    x: 0,
                    y: a.offsetTop - i.height
                }
            }
        }
        function mr(t) {
            if (!t.name || !t.name.match(/support/g) || "#sponsor" !== t.hash)
                return !1;
            var e = document.querySelector(".HeaderWrap"),
                a = document.getElementById("sponsor");
            if (a && e) {
                var i = e.getBoundingClientRect();
                return {
                    x: 0,
                    y: a.offsetTop - i.height
                }
            }
        }
        function fr(t) {
            if (!t.name || !t.name.match(/aboutdetail/g) || "#history" !== t.hash)
                return !1;
            var e = document.querySelector(".HeaderWrap"),
                a = document.getElementById("history");
            if (a && e) {
                var i = e.getBoundingClientRect();
                return {
                    x: 0,
                    y: a.offsetTop - i.height
                }
            }
        }
        function hr(t) {
            if (!t.name || !t.name.match(/support/g) || "#other" !== t.hash)
                return !1;
            var e = document.querySelector(".HeaderWrap"),
                a = document.getElementById("other");
            if (a && e) {
                var i = e.getBoundingClientRect();
                return {
                    x: 0,
                    y: a.offsetTop - i.height
                }
            }
        }
        function vr(t) {
            if (!t.name || !t.name.match(/support/g) || "#supporter-circle" !== t.hash)
                return !1;
            var e = document.querySelector(".HeaderWrap"),
                a = document.getElementById("supporter-circle");
            if (a && e) {
                var i = e.getBoundingClientRect();
                return {
                    x: 0,
                    y: a.offsetTop - i.height
                }
            }
        }
        function gr(t) {
            if (!(t.name && t.name.match(/archive|events/g) && Object.keys(t.query).length > 0))
                return !1;
            var e = document.querySelector(".HeaderWrap"),
                a = document.querySelector(".select") || document.querySelector(".calendars");
            if (a && e) {
                var i = e.getBoundingClientRect();
                return {
                    x: 0,
                    y: a.offsetTop - i.height
                }
            }
        }
        function br(t) {
            if (!(t.name && t.name.match(/broadcast|show|dj/g) && Object.keys(t.query).length > 0))
                return !1;
            var e = document.querySelector(".HeaderWrap"),
                a = document.querySelector("[data-scroll-target]");
            if (a && e) {
                var i = e.getBoundingClientRect();
                return {
                    x: 0,
                    y: a.offsetTop - i.height
                }
            }
        }
        lr.beforeEach((function(t, e, a) {
            if (e.query.ignore_cache && !t.query.ignore_cache) {
                var i = or(or({}, t), {}, {
                    query: or(or({}, t.query), {}, {
                        ignore_cache: !0
                    })
                });
                a(i)
            } else
                a()
        }));
        var _r = lr,
            yr = a("2f62");
        function Cr() {
            return function(t) {
                var e = document.createElement("audio"),
                    a = document.createElement("audio");
                e.addEventListener("canplay", (function() {
                    t.state.audio.stream.loaded || t.dispatch("updateAudio", {
                        stream: {
                            loaded: !0
                        }
                    })
                })),
                a.addEventListener("durationchange", (function() {
                    t.dispatch("updateBroadcastMeta", {
                        duration: a.duration
                    })
                }), !1),
                a.addEventListener("timeupdate", (function() {
                    t.dispatch("updateBroadcastMeta", {
                        position: a.currentTime
                    })
                }), !1),
                a.addEventListener("ended", (function() {
                    t.dispatch("closeBroadcast")
                }), !1),
                a.addEventListener("ended", (function() {
                    t.dispatch("updateAudio", {
                        broadcast: {
                            paused: !0,
                            title: "An error occured, sorry!",
                            url: "",
                            duration: 1,
                            progress: 1
                        }
                    })
                }), !1),
                t.subscribe((function(t, i) {
                    "setBroadcastSeek" === t.type && (a.currentTime = i.audio.broadcast.position),
                    "setAudio" === t.type && (e.src !== i.audio.stream.url && (e.src = i.audio.stream.url), a.src !== i.audio.broadcast.url && (a.src = i.audio.broadcast.url), i.audio.broadcast.paused ? a.pause() : a.play(), i.audio.stream.paused ? e.pause() : (e.src = i.audio.stream.url, e.play()))
                }))
            }
        }
        a("ac4d"),
        a("8a81"),
        a("1c4c"),
        a("f400");
        var wr = a("2ef0");
        function kr(t, e) {
            var a = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!a) {
                if (Array.isArray(t) || (a = xr(t)) || e && t && "number" === typeof t.length) {
                    a && (t = a);
                    var i = 0,
                        s = function() {};
                    return {
                        s: s,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: s
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n,
                r = !0,
                o = !1;
            return {
                s: function() {
                    a = a.call(t)
                },
                n: function() {
                    var t = a.next();
                    return r = t.done, t
                },
                e: function(t) {
                    o = !0,
                    n = t
                },
                f: function() {
                    try {
                        r || null == a.return || a.return()
                    } finally {
                        if (o)
                            throw n
                    }
                }
            }
        }
        function xr(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return Sr(t, e);
                var a = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Sr(t, e) : void 0
            }
        }
        function Sr(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var a = 0, i = new Array(e); a < e; a++)
                i[a] = t[a];
            return i
        }
        var Tr = "https://dublab.out.airtime.pro/dublab_a",
            Ar = {
                state: {
                    stream: {
                        url: Tr,
                        combo: "Loading…",
                        title: "",
                        host: "",
                        loaded: !1,
                        paused: !0
                    },
                    broadcast: {
                        title: "",
                        url: "",
                        pageUrl: "",
                        paused: !0,
                        active: !1,
                        duration: 0,
                        position: 0
                    },
                    schedule: new Map,
                    nowPlaying: {},
                    upNext: {},
                    video: {
                        active: !1
                    },
                    wasStreamPaused: !1,
                    playing: {
                        on_air: {
                            combo: "",
                            start: 0,
                            end: 0
                        },
                        up_next: {
                            combo: "",
                            start: 0,
                            end: 0
                        }
                    }
                },
                getters: {
                    getSchedule: function(t) {
                        return function() {
                            return t.schedule
                        }
                    },
                    getPost: function(t) {
                        return function(e) {
                            return t.schedule.get(e)
                        }
                    },
                    getNowPlaying: function(t) {
                        return function() {
                            return t.nowPlaying
                        }
                    }
                },
                mutations: {
                    setBroadcastSeek: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        t.broadcast.position = e
                    },
                    setBroadcastMeta: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Object.keys(e).forEach((function(a) {
                            t.broadcast[a] = e[a]
                        }))
                    },
                    setStreamMeta: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Object.keys(e).forEach((function(a) {
                            t.stream[a] = e[a]
                        }))
                    },
                    setPlayingMeta: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t.playing.on_air = e.current,
                        t.playing.up_next = e.next
                    },
                    setSchedule: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        t.schedule = e.reduce((function(t, e) {
                            return t.set(e.id, e)
                        }), new Map)
                    },
                    setShow: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t.schedule = new Map(t.schedule).set(e.id, e)
                    },
                    setAudio: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t.broadcast.paused && (t.wasStreamPaused = t.stream.paused),
                        Object.keys(e).forEach((function(a) {
                            t[a] = Object.assign({}, t[a], e[a])
                        }))
                    },
                    setState: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Object.keys(e).forEach((function(a) {
                            t[a] = Object.assign({}, t[a], e[a])
                        }))
                    },
                    setNowPlaying: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t.nowPlaying = e
                    },
                    setUpNext: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t.upNext = e
                    }
                },
                actions: {
                    toggleStream: function(t) {
                        var e = t.commit,
                            a = t.state,
                            i = t.rootState;
                        e("setAudio", {
                            broadcast: {
                                paused: !0
                            },
                            stream: {
                                paused: !a.stream.paused
                            },
                            video: Pr(i) ? {} : {
                                active: !1
                            }
                        })
                    },
                    closeBroadcast: function(t) {
                        var e = t.commit,
                            a = t.state;
                        e("setAudio", {
                            broadcast: {
                                paused: !0,
                                active: !1,
                                url: "",
                                title: "",
                                duration: 0,
                                position: 0
                            },
                            stream: {
                                paused: a.wasStreamPaused
                            }
                        })
                    },
                    loadBroadcast: function(t) {
                        var e = t.commit,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e("setAudio", {
                            broadcast: {
                                paused: !1,
                                url: a.url,
                                pageUrl: a.pageUrl,
                                title: a.title,
                                active: !0,
                                duration: 0,
                                position: 0
                            },
                            stream: {
                                paused: !0
                            }
                        })
                    },
                    toggleBroadcast: function(t) {
                        var e = t.commit,
                            a = t.state;
                        e("setAudio", {
                            broadcast: {
                                paused: !a.broadcast.paused
                            },
                            stream: {
                                paused: !0
                            }
                        })
                    },
                    pauseBroadcast: function(t) {
                        var e = t.commit,
                            a = t.rootState;
                        e("setAudio", {
                            broadcast: {
                                paused: !0
                            },
                            stream: {
                                paused: !0
                            },
                            video: Pr(a) ? {} : {
                                active: !1
                            }
                        })
                    },
                    playBroadcast: function(t) {
                        var e = t.commit,
                            a = t.rootState;
                        e("setAudio", {
                            broadcast: {
                                paused: !1
                            },
                            stream: {
                                paused: !0
                            },
                            video: Pr(a) ? {} : {
                                active: !1
                            }
                        })
                    },
                    refreshBroadcast: function(t) {
                        var e = t.commit,
                            a = t.dispatch,
                            i = {
                                tz: Ir()
                            },
                            s = new URLSearchParams(window.location.search),
                            n = s.get("ignore_cache");
                        n && (i["ignoreCache"] = !0),
                        fetch("/.netlify/functions/schedule?" + new URLSearchParams(i), {
                            mode: "no-cors"
                        }).then((function(t) {
                            return t.json()
                        })).then((function(t) {
                            var i = t.filter((function(t) {
                                return !t.summary.includes("TBD")
                            }));
                            e("setSchedule", i),
                            a("updateNowPlaying")
                        }))
                    },
                    getPost: function(t, e) {
                        var a = t.commit,
                            i = "/.netlify/functions/schedule_single_event?id=".concat(e),
                            s = new URLSearchParams(window.location.search),
                            n = s.get("ignore_cache");
                        n && (i += "&" + new URLSearchParams({
                            ignoreCache: !0
                        })),
                        fetch(i, {
                            mode: "no-cors"
                        }).then((function(t) {
                            return t.json()
                        })).then((function(t) {
                            a("setShow", t)
                        }))
                    },
                    seekBroadcast: function(t) {
                        var e = t.commit,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e("setBroadcastSeek", a)
                    },
                    updateBroadcastMeta: function(t) {
                        var e = t.commit,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e("setBroadcastMeta", a)
                    },
                    updateAudio: function(t) {
                        var e = t.commit,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e("setAudio", a)
                    },
                    toggleVideo: function(t) {
                        var e = t.commit,
                            a = t.state,
                            i = t.rootState;
                        e("setState", {
                            video: {
                                active: !a.video.active
                            }
                        }),
                        Pr(i) ? a.video.active && a.stream.paused && a.broadcast.paused && e("setAudio", {
                            broadcast: {
                                paused: !0
                            },
                            stream: {
                                paused: !1
                            }
                        }) : e("setAudio", {
                            broadcast: {
                                paused: !0
                            },
                            stream: {
                                paused: !0
                            }
                        })
                    },
                    updateNowPlaying: function(t) {
                        var e = t.state,
                            a = t.commit,
                            i = Or(e.schedule),
                            s = i.current,
                            n = i.next;
                        console.log("state.schedule:", e.schedule),
                        a("setNowPlaying", s),
                        a("setUpNext", n),
                        a("setStreamMeta", Object.assign({
                            loaded: !0
                        }, jr(s))),
                        a("setPlayingMeta", {
                            current: jr(s),
                            next: jr(n)
                        })
                    }
                }
            };
        function Pr(t) {
            var e = !1;
            try {
                e = t.content["*"].livevideo.muted
            } catch (a) {
                e = !1
            }
            return e
        }
        function jr(t) {
            if (t) {
                var e = Object(wr["get"])(t, "eventTitleMeta.artist", ""),
                    a = Object(wr["get"])(t, "eventTitleMeta.eventName", ""),
                    i = e && a ? "".concat(e, " - ").concat(a) : e ? "".concat(e) : a ? "".concat(a) : "";
                return {
                    combo: i,
                    end: Ns()(t.endTime).unix(),
                    host: a,
                    start: Ns()(t.startTime).unix(),
                    title: e
                }
            }
            return {}
        }
        function Or(t) {
            var e,
                a,
                i,
                s = Ns()(),
                n = !1,
                r = kr(t.values());
            try {
                for (r.s(); !(i = r.n()).done;) {
                    var o = i.value;
                    if (n) {
                        a = o;
                        break
                    }
                    s > Ns()(o.startTime) && s < Ns()(o.endTime) && (e = o, n = !0)
                }
            } catch (c) {
                r.e(c)
            } finally {
                r.f()
            }
            return {
                current: e,
                next: a
            }
        }
        function Ir() {
            return Intl.DateTimeFormat().resolvedOptions().timeZone
        }
        var Lr = function(t) {
            var e = t || new Date,
                a = e + "",
                i = a.match(/\(([^)]+)\)$/) || a.match(/([A-Z]+) [\d]{4}$/);
            if (i) {
                var s = i[1].match(/[A-Z]/g);
                s && (i = s.join(""))
            }
            return i
        };
        function $r(t) {
            var e = t ? (new Date).toLocaleString("en-US", {
                    timeZone: "America/Los_Angeles"
                }) : void 0,
                a = Ns()(e),
                i = a.format("h:mm a").replace("am", "a.m.").replace("pm", "p.m."),
                s = t ? "PST" : Lr();
            return {
                time: i,
                timezone: s,
                date: a.format("MMMM D"),
                dow: a.format("dddd")
            }
        }
        var Mr = {
                timeout: null,
                interval: null
            },
            Dr = {
                state: {
                    local: $r(),
                    la: $r(!0)
                },
                mutations: {
                    updateTime: function(t) {
                        t.local = $r(),
                        t.la = $r(!0)
                    }
                },
                actions: {
                    startTime: function(t) {
                        var e = t.commit,
                            a = t.dispatch,
                            i = (new Date).getSeconds();
                        Mr.timeout = setTimeout((function() {
                            e("updateTime"),
                            a("updateNowPlaying"),
                            Mr.interval = setInterval((function() {
                                e("updateTime"),
                                a("updateNowPlaying")
                            }), 6e4)
                        }), 1e3 * (60 - i))
                    },
                    stopTime: function() {
                        clearTimeout(Mr.timeout),
                        clearInterval(Mr.interval)
                    }
                }
            },
            zr = {
                state: {
                    loading: !0,
                    monthActiveIndex: 0
                },
                mutations: {
                    setUi: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Object.keys(e).forEach((function(a) {
                            t[a] = e[a]
                        }))
                    }
                },
                actions: {
                    updateUi: function(t) {
                        var e = t.commit,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e("setUi", a)
                    }
                }
            };
        i["default"].config.devtools = !0,
        i["default"].use(yr["a"]);
        var Br = new yr["a"].Store({
            plugins: [Cr()],
            modules: {
                audio: Ar,
                ui: zr,
                date: Dr,
                content: j.mod
            }
        });
        i["default"].config.devtools = !0,
        i["default"].use(o.a),
        i["default"].use(c["a"]),
        i["default"].use(n.a, {
            color: "var(--accent)"
        }),
        i["default"].use(l["a"]),
        i["default"].use(p["a"], {
            config: {
                id: "G-BDY7PXC7QP"
            }
        }),
        Object(u["sync"])(Br, _r),
        Object(d["a"])(_r, "UA-35555329-32"),
        i["default"].mixin(j.api({
            $store: Br,
            endpoint: "https://dublab.wpengine.com/wp-json/lazystate/v1",
            loadStart: function() {
                return Br.dispatch("updateUi", {
                    loading: !0
                })
            },
            loadEnd: function() {
                Br.dispatch("updateUi", {
                    loading: !1
                }),
                window.prerenderReady = !0
            }
        })),
        i["default"].config.productionTip = !1,
        new i["default"]({
            router: _r,
            store: Br,
            render: function(t) {
                return t(Ut)
            }
        }).$mount("#app")
    },
    "5c21": function(t, e, a) {
        "use strict";
        a("9015")
    },
    "5cc1": function(t, e, a) {
        "use strict";
        a("ee9d")
    },
    "5e89": function(t, e, a) {
        "use strict";
        a("e310")
    },
    "5ec0": function(t, e, a) {},
    6078: function(t, e, a) {},
    "60cc": function(t, e, a) {
        "use strict";
        a("c43a")
    },
    "619a": function(t, e, a) {
        t.exports = a.p + "img/3.e0a1cea1.png"
    },
    6300: function(t, e, a) {},
    "644d": function(t, e, a) {
        "use strict";
        a("c143")
    },
    "645f": function(t, e, a) {},
    "647b": function(t, e, a) {},
    6605: function(t, e, a) {},
    "67e6": function(t, e, a) {
        t.exports = a.p + "img/flag_es.cc1b41b0.svg"
    },
    "6f15": function(t, e, a) {
        t.exports = a.p + "img/history-p-800.06923c2d.png"
    },
    "6fdb": function(t, e, a) {
        "use strict";
        a("313f")
    },
    7278: function(t, e, a) {
        "use strict";
        a("1de1")
    },
    7532: function(t, e, a) {
        t.exports = a.p + "img/Jeremiah-Chiu---Zoom-Room-1-p-800.49ec821b.jpg"
    },
    "7bb0": function(t, e, a) {
        t.exports = a.p + "img/core_values-p-500.af79d8ec.png"
    },
    "7bc0": function(t, e, a) {},
    "7e1b": function(t, e, a) {
        "use strict";
        a("647b")
    },
    "7e23": function(t, e, a) {},
    8090: function(t, e, a) {},
    "80ac": function(t, e, a) {},
    "80ee": function(t, e, a) {
        "use strict";
        a("19e1")
    },
    "824a": function(t, e, a) {
        "use strict";
        a("1ca9")
    },
    "85d8": function(t, e, a) {
        "use strict";
        a("0174")
    },
    8777: function(t, e, a) {},
    "8a4d": function(t, e, a) {
        t.exports = a.p + "img/Jeremiah-Chiu---Zoom-Room-1-p-500.81d193d3.jpg"
    },
    "8ad3": function(t, e, a) {
        t.exports = a.p + "img/lil_speaker_guy.ae537387.png"
    },
    "8efd": function(t, e, a) {
        t.exports = a.p + "img/7.51218207.png"
    },
    "8f33": function(t, e, a) {
        "use strict";
        a("cbf3")
    },
    9015: function(t, e, a) {},
    "928e": function(t, e, a) {
        "use strict";
        a("3247")
    },
    "93a3": function(t, e, a) {},
    "93b2": function(t, e, a) {
        "use strict";
        a("1af9")
    },
    "97ca": function(t, e, a) {
        t.exports = a.p + "img/6.181289c7.png"
    },
    "9aec": function(t, e, a) {},
    "9c55": function(t, e, a) {
        "use strict";
        a("7e23")
    },
    "9fb2": function(t, e, a) {
        "use strict";
        a("a1e8")
    },
    a040: function(t, e, a) {
        "use strict";
        a("4c6a")
    },
    a1e8: function(t, e, a) {},
    a26c: function(t, e, a) {
        t.exports = a.p + "img/studio_transparency.aa3630df.png"
    },
    a606: function(t, e, a) {
        "use strict";
        a("1a66")
    },
    a9c7: function(t, e, a) {
        "use strict";
        a("6300")
    },
    aa00: function(t, e, a) {},
    aa17: function(t, e, a) {},
    b247: function(t, e, a) {
        "use strict";
        a("bb9e")
    },
    b34a: function(t, e, a) {
        "use strict";
        a("f0af")
    },
    b376: function(t, e, a) {
        t.exports = a.p + "img/core_values.b5bb0b48.png"
    },
    bb9e: function(t, e, a) {},
    bc0b: function(t, e, a) {
        "use strict";
        a("5ec0")
    },
    be2a: function(t, e, a) {
        "use strict";
        a("2a8f")
    },
    c0be: function(t, e, a) {
        t.exports = a.p + "img/core_values-p-800.31d342af.png"
    },
    c143: function(t, e, a) {},
    c1c5: function(t, e, a) {
        t.exports = a.p + "img/1.365aa691.png"
    },
    c43a: function(t, e, a) {},
    c63c: function(t, e, a) {
        "use strict";
        a("1554")
    },
    c70c: function(t, e, a) {
        "use strict";
        a("80ac")
    },
    ca4c: function(t, e, a) {
        "use strict";
        a("f210")
    },
    cb58: function(t, e, a) {
        "use strict";
        a("0be8")
    },
    cbf3: function(t, e, a) {},
    d2de: function(t, e, a) {},
    d2f3: function(t, e, a) {
        t.exports = a.p + "img/logo-type-outline.8dc9bebf.svg"
    },
    d40f: function(t, e, a) {
        t.exports = a.p + "img/map-marker.90971c1c.svg"
    },
    d46d: function(t, e, a) {
        "use strict";
        a("14a9")
    },
    d4b6: function(t, e, a) {
        "use strict";
        a("d947")
    },
    d4f2: function(t, e, a) {
        "use strict";
        a("7bc0")
    },
    d589: function(t, e, a) {
        "use strict";
        a("aa00")
    },
    d947: function(t, e, a) {},
    dae5: function(t, e, a) {
        "use strict";
        a("0aeb")
    },
    dd97: function(t, e, a) {
        "use strict";
        a("4d53")
    },
    e0fe: function(t, e, a) {
        t.exports = a.p + "img/fallback.e277ad55.svg"
    },
    e1e5: function(t, e, a) {
        t.exports = a.p + "img/staff.a3337bc2.png"
    },
    e310: function(t, e, a) {},
    e55c: function(t, e, a) {},
    ea6c: function(t, e, a) {
        "use strict";
        a("32d7")
    },
    ee9d: function(t, e, a) {},
    efb8: function(t, e, a) {
        t.exports = a.p + "img/flag_br.fe1fd041.svg"
    },
    f0a5: function(t, e, a) {},
    f0af: function(t, e, a) {},
    f210: function(t, e, a) {},
    f3f1: function(t, e, a) {
        t.exports = a.p + "img/Jeremiah-Chiu---Zoom-Room-1-p-1600.ad2e9a41.jpg"
    },
    f4cf: function(t, e, a) {
        "use strict";
        a("645f")
    },
    f54b: function(t, e, a) {
        t.exports = a.p + "img/flag_jp.3919b660.svg"
    },
    f65d: function(t, e, a) {},
    f834: function(t, e, a) {
        "use strict";
        a("2b9d")
    },
    f858: function(t, e, a) {},
    fc94: function(t, e, a) {
        t.exports = a.p + "img/history.b96bba18.png"
    },
    fdea: function(t, e, a) {
        "use strict";
        a("27a0")
    },
    fe48: function(t, e, a) {
        t.exports = a.p + "img/logo-type.0653de63.svg"
    }
});
//# sourceMappingURL=app.ba2795f7.js.map
