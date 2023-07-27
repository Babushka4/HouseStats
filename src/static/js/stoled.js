(function() {
    try {
        (function() {
            function me(a, c, b, d) {
                var e = this;
                return B(window, "c.i", function() {
                    function f(v) {
                        (v = ne(k, l, "", v)(k, l)) && (U(v.then) ? v.then(g) : g(v));
                        return v
                    }
                    function g(v) {
                        v && (U(v) ? m.push(v) : Aa(v) && D(function(C) {
                            var N = C[0];
                            C = C[1];
                            U(C) && ("u" === N ? m.push(C) : h(C, N))
                        }, Ba(v)))
                    }
                    function h(v, C, N) {
                        e[C] = Ck(k, l, N || p, C, v)
                    }
                    var k = window;
                    (!k || isNaN(a) && !a) && oe();
                    var l = Dk(a, pe, c, b, d)
                      , m = []
                      , p = [pg, ne, qg];
                    p.unshift(Ek);
                    var t = A(P, yb)
                      , w = K(l);
                    l.id || Sa(lc("Invalid Metrika id: " + l.id, !0));
                    var x = Gc.C("counters", {});
                    if (x[w])
                        return zb(k, w, "Duplicate counter " + w + " initialization"),
                        x[w];
                    x[w] = e;
                    Gc.D("counters", x);
                    Gc.xa("counter", e);
                    D(function(v) {
                        v(k, l)
                    }, ud);
                    D(f, Hc);
                    f(Fk);
                    h(Gk(k, l, m), "destruct", [pg, qg]);
                    ac(k, E([k, t, f, 1, "a.i"], Hk));
                    D(f, Q)
                })()
            }
            function Ik(a, c) {
                var b;
                try {
                    var d = c.origin
                } catch (f) {}
                if ("https://oauth.yandex.ru" === d && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
                    d = c.source;
                    var e = (b = {},
                    b._ym_uid = a(),
                    b);
                    d.postMessage(e, "https://oauth.yandex.ru")
                }
            }
            function Jk(a) {
                var c = W(Boolean, A(function(b) {
                    var d = b[1];
                    return (b = Kk(a[b[0]])) ? "" + d + "\n" + b : null
                }, Ba(Lk)));
                return J("\n", c)
            }
            function Mk(a) {
                return "che\n" + a
            }
            function Kk(a) {
                return xa(a) ? a : Z(a) ? J(",", A(function(c) {
                    return '"' + c.brand + '";v="' + c.version + '"'
                }, a)) : qa(a) ? "" : a ? "?1" : "?0"
            }
            function Nk(a, c) {
                var b = Ok(a)
                  , d = [Pk(a) || Qk(a)];
                rg(a) && d.push(b);
                var e = X(a);
                b = Ka(a);
                var f = b.C("synced", {});
                d = W(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(bb);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.D("synced", f);
                return A(function(g) {
                    return {
                        xe: c[g],
                        fe: g
                    }
                }, d)
            }
            function Qk(a) {
                a = Rk(a);
                return Sk[a] || a
            }
            function Ok(a) {
                a = sg(a);
                return Tk[a] || "ru"
            }
            function Uk(a, c, b, d) {
                var e = b.H;
                if (c.Le || qe(c.T) || !e)
                    d();
                else {
                    var f = vd(a)
                      , g = Ic(a, "")
                      , h = function() {
                        var x = tg(f);
                        x = "" + x + Vk(x, g);
                        wd(b, "gdpr", x);
                        d()
                    };
                    if (3 === c.id)
                        h();
                    else {
                        var k = H(a);
                        if (e = k.C("f1"))
                            e(h);
                        else {
                            var l = (e = tg(f)) ? A(r(xd, n), e.split(",")) : [];
                            if (ug(l))
                                h();
                            else {
                                e = yd(a);
                                var m = S(a);
                                var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                    url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                    Jc: "ar az be en es et fi fr he hy ka kk ky lt lv no pt ro ru sl sr tg tr uk uz zh".split(" "),
                                    Oc: "_inversed_buttons"
                                } : void 0;
                                var t = (e = e || !!p) && (-1 !== m.href.indexOf("yagdprcheck=1") || g.C("yaGdprCheck"));
                                m = g.C("gdpr");
                                var w = I.resolve();
                                g.C("yandex_login") ? (l.push("13"),
                                g.D("gdpr", mc, 525600)) : e ? L(m, Nb) ? m === re ? l.push("12") : l.push("3") : se(a) || Wk(a) ? l.push("17") : w = Xk(a).then(function(x) {
                                    x && l.push("28")
                                }, F) : l.push("14");
                                w.then(function() {
                                    var x = r(f, Yk);
                                    ug(l) ? (D(x, l),
                                    h()) : (zd.push(h),
                                    k.D("f1", function(v, C) {
                                        var N = 0;
                                        if (C) {
                                            var R = kb(a, C) || "";
                                            N += R.length
                                        }
                                        zd.push(v);
                                        1E6 >= N && zd.push(v)
                                    }),
                                    (0,
                                    te[0])(a).then(T("params.eu")).then(function(v) {
                                        if (v || t) {
                                            g.D("gdpr_popup", re);
                                            Zk(a, c);
                                            if (Ab(a))
                                                return $k(a, x, c);
                                            var C = vg(a, f);
                                            if (C)
                                                return v = al(a, x, C, c, p),
                                                v.then(E([a, c], bl)),
                                                v
                                        }
                                        v || x("8");
                                        return I.resolve({
                                            value: mc,
                                            Ob: !0
                                        })
                                    }).then(function(v) {
                                        g.hb("gdpr_popup");
                                        if (v) {
                                            var C = v.value;
                                            v = v.Ob;
                                            L(C, Nb) && g.D("gdpr", C, v ? void 0 : 525600)
                                        }
                                        C = ue(zd, fa);
                                        wg(a, C, 20)(lb(B(a, "gdr"), F));
                                        k.D("f1", fa)
                                    })["catch"](B(a, "gdp.a")))
                                })
                            }
                        }
                    }
                }
            }
            function bl(a, c) {
                if (yd(a)) {
                    var b = vd(a)
                      , d = ya(a, c);
                    d = d && d.params;
                    b = A(r(cl, n), ve(b));
                    d && b.length && d("gdpr", Ha(b))
                }
            }
            function $k(a, c, b) {
                var d = Ad(a, b);
                return new I(function(e) {
                    var f;
                    if (d) {
                        var g = d.X
                          , h = q(r("4", c), r(null, e))
                          , k = da(a, h, 2E3, "gdp.f.t");
                        d.Yc((f = {},
                        f.type = "isYandex",
                        f)).then(function(l) {
                            l.isYandex ? (c("5"),
                            g.F(aa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], we), function(m) {
                                e({
                                    value: xg(m[1].type)
                                })
                            })) : (c("6"),
                            e(null))
                        })["catch"](h).then(E([a, k], Ta))
                    } else
                        e({
                            value: re,
                            Ob: !0
                        })
                }
                )
            }
            function Zk(a, c) {
                var b = Ad(a, c);
                b && b.X.F(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    },
                    d.isYandex = yd(a),
                    d
                });
                return b
            }
            function al(a, c, b, d, e) {
                var f = void 0 === e ? dl : e;
                e = f.url;
                var g = f.Oc;
                f = el(a, f.Jc, d.Me);
                var h = Ad(a, d);
                if (!h)
                    return I.resolve({
                        value: mc,
                        Ob: !0
                    });
                var k = nc(a, {
                    src: "" + e + f + g + ".js"
                });
                return new I(function(l, m) {
                    k ? (c("7"),
                    k.onerror = function() {
                        var p;
                        c("9");
                        h.Xc((p = {},
                        p.type = "GDPR-ok-view-default",
                        p));
                        l(null)
                    }
                    ,
                    k.onload = function() {
                        c("10");
                        b.F(aa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], we), function(p) {
                            var t;
                            p = p.type;
                            h.Xc((t = {},
                            t.type = p,
                            t));
                            l({
                                value: xg(p)
                            })
                        })
                    }
                    ) : (c("9"),
                    m(La("gdp.e")))
                }
                )
            }
            function el(a, c, b) {
                a = b || sg(a);
                return L(a, c) ? a : "en"
            }
            function xg(a) {
                if (L(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"]))
                    return mc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return L(a, Nb) ? a : mc
            }
            function yg(a, c, b) {
                var d = n(a, "AppMetricaInitializer")
                  , e = n(d, "init");
                if (e)
                    try {
                        M(e, d)(kb(a, c))
                    } catch (f) {}
                else
                    zg = da(a, E([a, c, 2 * b], yg), b, "ai.d");
                return function() {
                    return Ta(a, zg)
                }
            }
            function fl(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (!c)
                    return "";
                a = M(c, a.speechSynthesis);
                return Ob(function(b) {
                    return A(r(b, n), gl)
                }, a())
            }
            function hl(a, c, b) {
                return J("x", A(q(P, ra("concat", "" + a), r(b, n)), c))
            }
            function il(a, c) {
                var b = c.Ad;
                if (!jl(a, b))
                    return "";
                var d = [];
                a: {
                    var e = kl(a, b);
                    try {
                        var f = E(e, q)()();
                        break a
                    } catch (C) {
                        if ("ccf" === C.message) {
                            f = null;
                            break a
                        }
                        Sa(C)
                    }
                    f = void 0
                }
                if (cb(f))
                    var g = "";
                else
                    try {
                        g = f.toDataURL()
                    } catch (C) {
                        g = ""
                    }
                (f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = Ca(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (C) {
                    k = []
                }
                k = J(";", k);
                f = xe(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = xe(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS)
                  , m = b.getParameter(b.DEPTH_BITS)
                  , p = b.getParameter(b.GREEN_BITS)
                  , t = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (t) {
                    var w = b.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === w && (w = 2)
                }
                w = {
                    Ye: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": t ? w : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": xe(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                ye(d, w, ": ");
                a: {
                    try {
                        var x = b.getExtension("WEBGL_debug_renderer_info");
                        if (x) {
                            var v = {
                                "webgl unmasked vendor": b.getParameter(x.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(x.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (C) {}
                    v = {}
                }
                ye(d, v);
                if (!b.getShaderPrecisionFormat)
                    return J("~", d);
                ye(d, ll(b));
                return J("~", d)
            }
            function ye(a, c, b) {
                void 0 === b && (b = ":");
                D(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, Ba(c))
            }
            function ml(a, c, b, d) {
                c = d.C("cc");
                d = E(["cc", ""], d.D);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && Ma(e)) && 1440 < X(a)(bb) - e)
                        return d();
                    b.D("cc", c)
                } else
                    la(0)(c) || d()
            }
            function nl(a, c, b, d) {
                return sa(c, function(e) {
                    if (!ze(e) && !Bd(a))
                        if (e = d.C("zzlc"),
                        ba(e) || cb(e) || "na" === e) {
                            e = "ru";
                            var f = Ae(a, 68)
                              , g = Be(a, 79);
                            if (f || g)
                                e = "md";
                            if (f = mb(a)) {
                                var h = f("iframe");
                                y(h.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                h.src = "https://mc.yandex." + e + Ag("L21ldHJpa2EvenpsYy5odG1s");
                                if (e = Pb(a)) {
                                    e.appendChild(h);
                                    var k = 0
                                      , l = ha(a).F(a, ["message"], B(a, "zz.m", function(m) {
                                        (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (bc(h),
                                        m = m.substr(8),
                                        d.D("zzlc", m),
                                        b.D("zzlc", m),
                                        l(),
                                        Ta(a, k))
                                    }));
                                    k = da(a, q(l, r(h, bc)), 3E3)
                                }
                            }
                        } else
                            b.D("zzlc", e)
                })
            }
            function ol(a, c, b) {
                var d, e;
                c = Qb(r(a, n), pl);
                c = ba(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {},
                    d.iceServers = [],
                    d));
                    a = n(f, "createDataChannel");
                    U(a) && (M(a, f, "y.metrika")(),
                    a = n(f, "createOffer"),
                    U(a) && !a.length && (a = M(a, f)(),
                    d = n(a, "then"),
                    U(d) && M(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        U(h) && M(h, f, g, F, F)()
                    })(),
                    y(f, (e = {},
                    e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (U(h)) {
                            h = M(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = F;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = cc(k[1]),
                            b.D("pp", g));
                            f.onicecandidate = F;
                            h()
                        }
                    }
                    ,
                    e))))
                }
            }
            function ql(a, c, b) {
                var d, e = Jc(a, c);
                if (e) {
                    e.X.F(["gpu-get"], function() {
                        var h;
                        return h = {},
                        h.type = "gpu-get",
                        h.pu = b.C("pu"),
                        h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = da(a, E([a, c, b], Bg), 200, "pu.m");
                        e.$b(f, (d = {},
                        d.type = "gpu-get",
                        d), function(h, k) {
                            var l = n(k, "pu");
                            l && (Ta(a, g),
                            b.D("pu", l))
                        })
                    } else
                        Bg(a, c, b)
                }
            }
            function Bg(a, c, b) {
                var d = n(a, "location.host");
                a = Kc(a, c);
                b.D("pu", "" + cc(d) + a)
            }
            function Cg(a, c, b) {
                c = Ic(a, void 0, c);
                c = Dg(a, c.C("phc_settings") || "");
                var d = n(c, "clientId")
                  , e = n(c, "orderId")
                  , f = n(c, "service_id")
                  , g = n(c, "phones") || [];
                return d && e && g ? rl(a, b.sc, {
                    fd: sl
                }).Sc(g).then(function(h) {
                    return tl(b, {
                        Ra: d,
                        Wa: e,
                        ad: f
                    }, h.ba, g, h.ja)
                })["catch"](function() {}) : I.resolve()
            }
            function sl(a, c, b) {
                a = ul(b.xb);
                if ("href" === b.Xb) {
                    var d = b.Ka;
                    c = d.href;
                    b = c.replace(a, b.Da);
                    if (c !== b)
                        return d.href = b,
                        !0
                } else if ((a = null === (d = b.Ka.textContent) || void 0 === d ? void 0 : d.replace(a, b.Da)) && a !== b.Ka.textContent)
                    return b.Ka.textContent = a,
                    !0;
                return !1
            }
            function tl(a, c, b, d, e) {
                var f;
                c.Ra && c.Wa && (c.Ra === a.Ra && c.Wa === a.Wa || y(a, c, {
                    ba: {},
                    Hb: !0
                }),
                0 < e && Ia(a.ja, [e]),
                D(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.ba[l] && a.ba[l][g] ? a.ba[l][g] : 0);
                    y(a.ba, (h = {},
                    h[l] = (k = {},
                    k[g] = m,
                    k),
                    h))
                }, d),
                D(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.ba[l] ? a.ba[l][g] : 0);
                    y(a.ba, (h = {},
                    h[l] = (k = {},
                    k[g] = m,
                    k),
                    h))
                }, b),
                a.Gc && (a.Hb || b.length) && ((c = ya(a.l, a.sc)) && c.params("__ym", "phc", (f = {},
                f.clientId = a.Ra,
                f.orderId = a.Wa,
                f.service_id = a.ad,
                f.phones = a.ba,
                f.performance = a.ja,
                f)),
                a.Hb = !1))
            }
            function vl(a) {
                a = mb(a);
                if (!a)
                    return "";
                a = a("video");
                try {
                    var c = ra("canPlayType", a)
                      , b = Ob(function(d) {
                        return A(q(P, ra("concat", d + "; codecs=")), wl)
                    }, Eg);
                    return A(c, [].concat(Eg, b))
                } catch (d) {
                    return "canPlayType"
                }
            }
            function xl(a) {
                var c = n(a, "matchMedia");
                if (c && za("matchMedia", c)) {
                    var b = ra("matchMedia", a);
                    return O(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, yl)
                }
            }
            function ll(a) {
                return O(function(c, b) {
                    var d = b[0]
                      , e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
            }
            function kl(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter && za("getParameter", c.getParameter) || Ce();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(zl);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.de = 3;
                    b.ke = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || Ce();
                    return {
                        Wb: d,
                        Ke: e,
                        Je: b
                    }
                }
                , function(b) {
                    var d = b.Wb
                      , e = b.Ke;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || Ce();
                    return y(b, {
                        Qd: d
                    })
                }
                , function(b) {
                    var d = b.Wb
                      , e = b.Qd;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }
                , function(b) {
                    var d = b.Wb;
                    b = b.Je;
                    d.Ie = c.getAttribLocation(d, "attrVertex");
                    d.me = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.qf);
                    c.vertexAttribPointer(d.Ie, b.de, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.me, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.ke);
                    return c.canvas
                }
                ]
            }
            function jl(a, c) {
                if (!U(a.Float32Array))
                    return !1;
                var b = n(c, "canvas");
                if (!b || !za("toDataUrl", b.toDataURL))
                    return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }
            function xe(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }
            function Al(a, c) {
                if (n(c, "settings.ins")) {
                    var b = H(a);
                    if (!b.C("scip")) {
                        var d = De(a)
                          , e = X(a)(bb)
                          , f = Fg(d.C("sci"));
                        if (!(f && 1440 >= e - f)) {
                            f = ma(a, "ci");
                            var g = ["sync.cook.int"]
                              , h = function(l) {
                                l = b.C("scip", "") + l;
                                b.D("scip", l)
                            }
                              , k = r("a", h);
                            b.D("scip", "0");
                            return f({
                                O: {
                                    aa: g,
                                    ya: 3E3,
                                    Oa: !0
                                }
                            }, ["https://an.yandex.ru/sync_cookie"]).then(function(l) {
                                l = n(l.yb, "CookieMatchUrls");
                                if (Z(l) && Da(l)) {
                                    h("1");
                                    var m = ma(a, "c");
                                    l = A(function(p, t) {
                                        return m({
                                            O: {
                                                aa: g,
                                                ya: 3E3
                                            }
                                        }, ["https://" + p])["catch"](q(r("b", h), r("" + t, h)))
                                    }, W(xa, l));
                                    return I.all(l)
                                }
                                k()
                            }, k).then(function() {
                                var l = b.C("scip");
                                !l || Lc(l, "a") || Lc(l, "b") || (d.D("sci", e),
                                h("2"))
                            }, F)
                        }
                    }
                }
            }
            function Bl() {
                return O(function(a, c) {
                    var b = cc(c + "/watch.js");
                    Gg[b] || (a[b] = 1);
                    return a
                }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
            }
            function Hg(a) {
                return {
                    N: function(c, b) {
                        if (!c.H)
                            return b();
                        var d = H(a).C("fid");
                        !Ig && d && (wd(c, "fid", d),
                        Ig = !0);
                        return b()
                    }
                }
            }
            function Cl(a, c) {
                var b = a.document;
                if (L(b.readyState, ["interactive", "complete"]))
                    ac(a, c);
                else {
                    var d = ha(a)
                      , e = d.F
                      , f = d.Za
                      , g = function() {
                        f(b, ["DOMContentLoaded"], g);
                        f(a, ["load"], g);
                        c()
                    };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }
            function Ee(a) {
                return {
                    N: function(c, b) {
                        var d = c.H;
                        if (d) {
                            var e = H(a).C("adBlockEnabled");
                            e && d.D("adb", e)
                        }
                        b()
                    }
                }
            }
            function Dl(a) {
                var c = B(a, "i.clch", El);
                ha(a).F(a.document, ["click"], M(c, null, a), {
                    passive: !1
                });
                return function(b) {
                    var d = ta.Aa
                      , e = a.Ya[ta.Eb]
                      , f = !!e._informer;
                    e._informer = y({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || nc(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }
            function Fl(a, c) {
                var b = Ka(a);
                if ("" === b.C("cc")) {
                    var d = r("cc", b.D);
                    d(0);
                    var e = X(a)
                      , f = H(a);
                    f = q(T(Gl({
                        yb: 1
                    }) + ".c"), Mc(function(g) {
                        d(g + "&" + e(bb))
                    }), r("cc", f.D));
                    ma(a, "6", c)({
                        O: {
                            Oa: !0,
                            oc: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(f)["catch"](q(Mc(function() {
                        var g = e(bb);
                        b.D("cc", "&" + g)
                    }), B(a, "cc")))
                }
            }
            function Cd(a, c) {
                if (!c)
                    return !1;
                var b = S(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }
            function Hl(a, c) {
                return sa(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Id: Il(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }
            function Jl(a, c, b, d, e) {
                b = Fe(a.document.body, b);
                d = Fe(a.document.body, d);
                L(e.target, [b, d]) && Ge(a, c)
            }
            function Jg(a, c, b, d) {
                (b = Kl(a, d, b)) && Ge(a, c, b)
            }
            function Kg(a, c) {
                var b = Lg(a, c);
                return Ll(a, b)
            }
            function Lg(a, c) {
                var b = Fe(a.document.body, c);
                return b ? Ml(a, b) : ""
            }
            function Ge(a, c, b) {
                if (c = ya(a, c))
                    a = oc(["dr", b || "" + Ua(a, 10, 99)]),
                    c.params(oc(["__ym", a]))
            }
            function Fe(a, c) {
                var b = null;
                try {
                    b = c ? dc(c, a) : b
                } catch (d) {}
                return b
            }
            function Mg(a) {
                a = Na(Ag(a));
                return A(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return Ng("0", 8, c)
                }, a)
            }
            function Ml(a, c) {
                if (!c)
                    return "";
                var b = []
                  , d = n(a, "document");
                Og(a, c, function(e) {
                    if (e.nodeType === d.TEXT_NODE)
                        var f = e.textContent;
                    else
                        e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && f.trim()) && b.push(f)
                });
                return 0 === b.length ? "" : b.join(" ")
            }
            function Nl(a, c, b) {
                a = ua(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    ib: b
                })
            }
            function Ol(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(Pl, d + "." + b.ib)) && (c && L(b, Ql) || a("ym-" + b + "-" + d))
                }
            }
            function Rl(a, c, b) {
                var d, e = Pg(a, c), f = S(a);
                f = Dd(f.protocol + "//" + f.hostname + f.pathname);
                c = Kc(a, c);
                var g = "";
                do
                    g += Ua(a);
                while (g.length < c.length);
                g = g.slice(0, c.length);
                a = "";
                for (var h = 0; h < c.length; h += 1)
                    a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
                c = [g, a];
                a = c[0];
                c = c[1];
                return (d = {},
                d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f,
                d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1",
                d)[b]
            }
            function Sl(a, c, b) {
                var d = n(b, "data");
                if (xa(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
                }
            }
            function Tl(a) {
                var c = a.l
                  , b = sb(a.Y);
                if (b) {
                    var d = Math.random();
                    a = {
                        x: b.scrollLeft,
                        y: b.scrollTop
                    };
                    if (b.localId) {
                        if (d = He[b.localId],
                        !d || 10 > Math.abs(a.x - d.x) && 10 > Math.abs(a.y - d.y))
                            return
                    } else {
                        for (; He[d]; )
                            d = Math.random();
                        b.localId = d
                    }
                    He[b.localId] = a;
                    if (b !== c.document) {
                        d = tb(c, b);
                        c = Oa(c);
                        var e = [];
                        b = b[Ea];
                        !b || 0 > b ? a = [] : (Pa(e, 16),
                        G(e, c),
                        G(e, a.x),
                        G(e, a.y),
                        G(e, b),
                        a = e);
                        a = aa(d, a)
                    } else
                        a = [];
                    return a
                }
            }
            function Qg(a) {
                var c = a.l
                  , b = a.Y;
                Rg(a);
                if (b.touches && b.touches.length) {
                    var d = sb(b);
                    if (d && d !== c.document)
                        return aa(tb(c, d), Ob(function(e) {
                            return Sg(c, Oa(c), "touch", d, [e.pageX, e.pageY], 0, 0)
                        }, Na(b.touches)))
                }
            }
            function Ul(a) {
                var c = a.l;
                a = Oa(c);
                var b = Nc(c)
                  , d = Tg(c);
                c = [];
                var e = b[0];
                b = b[1];
                var f = d[0];
                d = d[1];
                Pa(c, 28);
                G(c, a);
                G(c, e);
                G(c, b);
                G(c, f);
                G(c, d);
                return c
            }
            function Ug(a) {
                var c = [];
                return Va(a.l, c, 13) ? [] : c
            }
            function Vl(a) {
                var c = a.l;
                a = a.Y;
                var b = sb(a);
                if (b) {
                    var d;
                    "wheel" === a.type ? d = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" === a.type && a.wheelDelta && (d = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                    if (d) {
                        var e = Ed(c, a);
                        a = tb(c, b);
                        c = Oa(c);
                        e = [e.x, e.y];
                        b = b[Ea];
                        if (!b || 0 > b)
                            b = [];
                        else {
                            var f = [];
                            Pa(f, 31);
                            G(f, c);
                            G(f, b);
                            G(f, e[0]);
                            G(f, e[1]);
                            Pa(f, 0);
                            Pa(f, 0);
                            Pa(f, d);
                            b = f
                        }
                        return aa(a, b)
                    }
                }
            }
            function Rg(a) {
                var c = a.l;
                a = Ie(c);
                var b = X(c)(Y);
                if (!(10 > b - Vg || 10 > Math.abs(a.x - Je.x) && 10 > Math.abs(a.y - Je.y)))
                    return Vg = b,
                    Je = a,
                    c = Oa(c),
                    b = [],
                    Pa(b, 3),
                    G(b, c),
                    G(b, a.x),
                    G(b, a.y),
                    b
            }
            function Wl(a) {
                var c = a.l
                  , b = a.Y
                  , d = X(c)(Y)
                  , e = d - Wg;
                if (!(10 > e)) {
                    c = Ed(c, b);
                    b = Ke.x - c.x;
                    var f = Ke.y - c.y;
                    b = b * b + f * f;
                    if (!(0 >= b || 16 > b && 100 > e || 20 > e && 256 > b))
                        return Wg = d,
                        Ke = c,
                        Oc(a)
                }
            }
            function Xl(a, c, b, d, e) {
                function f() {
                    k && k.stop()
                }
                if (!c.nd)
                    return I.resolve(F);
                var g = ma(a, "4", c)
                  , h = {
                    H: va()
                };
                b = new Yl(a,b,function(l, m, p) {
                    if (!g)
                        return I.resolve();
                    var t = "wv-data=" + Xg(l, !0)
                      , w = B(a, "m.n.m.s");
                    m = {};
                    for (var x = l.length, v = 0, C = 255, N = 255, R, ea, ia; x; ) {
                        R = 21 < x ? 21 : x;
                        x -= R;
                        do
                            ea = "string" === typeof l ? l.charCodeAt(v) : l[v],
                            v += 1,
                            255 < ea && (ia = ea >> 8,
                            ea &= 255,
                            ea ^= ia),
                            C += ea,
                            N += C;
                        while (--R);
                        C = (C & 255) + (C >> 8);
                        N = (N & 255) + (N >> 8)
                    }
                    l = (C & 255) + (C >> 8) << 8 | (N & 255) + (N >> 8);
                    return g(y({}, h, {
                        O: {
                            V: t
                        },
                        G: (m["wv-check"] = "" + (65535 === l ? 0 : l),
                        m["wv-type"] = "0",
                        m)
                    }), c, p)["catch"](w)
                }
                );
                var k = Zl(a, b, d, e);
                return sa(c, function(l) {
                    l && H(a).D("isEU", n(l, "settings.eu"));
                    if (!H(a).C("oo") && k) {
                        var m = ec(a)
                          , p = m.C("visorc");
                        L(p, ["w", "b"]) || (p = "");
                        Yg(a) && Zg(a, Fd, "visorc") && !$l.test(Ya(a) || "") || (p = "b");
                        l = n(l, "settings.webvisor.recp");
                        if (!a.isFinite(l) || 0 > l || 1 < l)
                            p = "w";
                        p || (p = H(a).C("hitId") % 1E4 / 1E4 < l ? "w" : "b");
                        m.D("visorc", p, 30);
                        "w" === p && k.start()
                    }
                    return f
                })
            }
            function Zl(a, c, b, d) {
                var e = a.document
                  , f = []
                  , g = ha(a)
                  , h = ":submit" + Math.random()
                  , k = []
                  , l = M(c.flush, c)
                  , m = na(function(w, x) {
                    B(a, "hfv." + w, function() {
                        try {
                            var v = x.type
                        } catch (C) {
                            return
                        }
                        v = L(v, d);
                        c.push(x, {
                            type: w
                        });
                        v && l()
                    })()
                })
                  , p = B(a, "sfv", function() {
                    var w = b(a)
                      , x = am(a);
                    D(function(v) {
                        f.push(g.F(v.target, [v.event], m(v.type)))
                    }, w);
                    D(function(v) {
                        f.push(g.F(v.target, [v.event], B(a, "hff." + v.type + "." + v.event, function(C) {
                            D(Fa({
                                l: a,
                                Y: C,
                                flush: l
                            }), v.J)
                        })))
                    }, x);
                    k = $g(a, "form", e);
                    e.attachEvent && (w = $g(a, "form *", e),
                    D(function(v) {
                        f.push(g.F(v, ["submit"], m("form")))
                    }, k),
                    D(function(v) {
                        Le(v) && f.push(g.F(v, ["change"], m("formInput")))
                    }, w));
                    D(function(v) {
                        var C = v.submit;
                        if (U(C) || "object" === typeof C && bm.test("" + C))
                            v[h] = C,
                            v.submit = B(a, "fv", function() {
                                var N = {
                                    target: v,
                                    type: "submit"
                                };
                                m("document")(N);
                                return v[h]()
                            })
                    }, k)
                })
                  , t = B(a, "ufv", function() {
                    D(fa, f);
                    D(function(w) {
                        w && (w.submit = w[h])
                    }, k);
                    c.flush()
                });
                return {
                    start: p,
                    stop: t
                }
            }
            function ah(a, c) {
                var b = W(function(e) {
                    return 0 < e.J.length
                }, c)
                  , d = bh({
                    target: a.document,
                    type: "document"
                });
                return A(q(P, d, cm(a)), b)
            }
            function ch(a, c) {
                var b = a.l
                  , d = []
                  , e = c.form;
                if (!c[Ea] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        Gd(h) && !h[Ea] && Ia(d, tb(b, h))
                    }
                } else
                    Ia(d, tb(b, c));
                return d
            }
            function Me(a) {
                if (Pc) {
                    Pc = !1;
                    var c = Oa(a.l)
                      , b = [];
                    Va(a.l, b, 15) ? a = [] : (G(b, c),
                    a = b);
                    return a
                }
            }
            function dh(a) {
                if (!Pc) {
                    Pc = !0;
                    a = Oa(a.l);
                    var c = [];
                    Pa(c, 14);
                    G(c, a);
                    return c
                }
            }
            function dm(a, c, b) {
                var d = c[Ea];
                if (d) {
                    a: {
                        var e = Oa(a)
                          , f = c[Ea];
                        if (0 < f) {
                            var g = [];
                            c = Ne(a, c);
                            var h = fc[f]
                              , k = c[0] + "x" + c[1]
                              , l = c[2] + "x" + c[3];
                            if (k !== h.Nc) {
                                h.Nc = k;
                                if (Va(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                G(g, e);
                                G(g, f);
                                G(g, c[0]);
                                G(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (Va(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                G(g, e);
                                G(g, f);
                                G(g, c[2]);
                                G(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    Ia(b, a)
                }
                return d
            }
            function Hd(a, c, b) {
                void 0 === b && (b = !1);
                if (!c)
                    return {
                        Ia: !1,
                        lb: !1,
                        qb: !1
                    };
                var d = c.getAttribute("type") || c.type;
                if ("button" === d)
                    return {
                        Ia: !1,
                        lb: !1,
                        qb: !1
                    };
                var e = W(eh, [c.className, c.id, c.name])
                  , f = c && gc("ym-record-keys", c);
                d = d && L(d, fh) || Ja(Qa(em), e);
                var g;
                (g = d) || (g = c.placeholder,
                g = Ja(Qa(fm), e) || eh(g) && gm.test(g || ""));
                e = g;
                return {
                    Ia: !f && (Oe(a, c) || e && b || e && !d && !b),
                    lb: f,
                    qb: e
                }
            }
            function Oe(a, c) {
                return gh(a, c) || Qc(a, c) ? !0 : hh(a, c)
            }
            function eh(a) {
                return !!(a && 2 < a.length)
            }
            function ih(a, c) {
                return c && gc("(ym-disable-submit|-metrika-noform)", c)
            }
            function hh(a, c) {
                if (qa(c))
                    return !1;
                if (jh(c)) {
                    var b = c.parentNode;
                    return (qa(b) ? 0 : 11 === b.nodeType) ? !1 : hh(a, c.parentNode)
                }
                b = kh(a);
                if (!b)
                    return !1;
                var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
            }
            function hm(a) {
                if (Pe.isEnabled(a))
                    return new Pe(a)
            }
            function im(a, c) {
                return sa(c, function(b) {
                    var d = H(a);
                    K(c);
                    if (!d.C("dSync", !1))
                        return d.D("dSync", !0),
                        lh(a, b, {
                            Ea: c,
                            wb: "s",
                            Qb: "ds",
                            we: function(e, f, g) {
                                var h = e.yb;
                                e = e.host;
                                if (n(h, "settings"))
                                    return Sa(La("ds.e"));
                                f = f(Y) - g;
                                g = e[1];
                                var k, l;
                                h = va((k = {},
                                k.di = h,
                                k.dit = f,
                                k.dip = g,
                                k));
                                k = (l = {},
                                l["page-url"] = S(a).href,
                                l);
                                return ma(a, "S", mh)({
                                    H: h,
                                    G: k
                                }, mh)["catch"](B(a, "ds.rs"))
                            }
                        })
                })
            }
            function lh(a, c, b) {
                var d = b.Ea
                  , e = X(a)
                  , f = jm(a, c.userData, d)
                  , g = km(a);
                return g.length ? lm(a, e, f, c, b).then(function() {
                    return mm(a, g, f, e, b)
                }, F) : I.resolve()
            }
            function km(a) {
                var c = Id(a);
                a = q(Qe, hc(["iPhone", "iPad"]))(a);
                return c ? nm : a ? om : []
            }
            function mm(a, c, b, d, e) {
                var f = e.we
                  , g = void 0 === f ? F : f
                  , h = e.Qb
                  , k = d(Y);
                return pm(a, c, e)(lb(function(l) {
                    D(function(m) {
                        m && Jd(a, h + ".s", m)
                    }, l);
                    l = d(bb);
                    b.D(h, l)
                }, function(l) {
                    b.D(h, d(bb));
                    g(l, d, k)
                }))
            }
            function lm(a, c, b, d, e) {
                var f = e.Qb
                  , g = e.Ea;
                return new I(function(h, k) {
                    var l = b.C(f, 0);
                    l = parseInt("" + l, 10);
                    return 60 >= c(bb) - l ? k() : qm(a) ? h(void 0) : ze(d) ? k() : h(rm(a, g))
                }
                )
            }
            function pm(a, c, b) {
                var d = b.wb
                  , e = b.data
                  , f = ma(a, d, b.Ea);
                a = y({}, nh);
                e && y(a.G, e);
                return sm(A(function(g) {
                    return tm(f(y({
                        O: {
                            oc: !1,
                            Yb: !0
                        }
                    }, nh), A(function(h) {
                        var k = h[1]
                          , l = h[2];
                        h = J("", A(function(m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + um[d]
                    }, g)).then(function(h) {
                        return y({}, h, {
                            host: g[h.jd]
                        })
                    }))
                }, c))
            }
            function jm(a, c, b) {
                var d = c || {}
                  , e = ma(a, "u", b)
                  , f = Ka(a);
                return {
                    C: function(g, h) {
                        return ba(d[g]) ? f.C(g, h) : d[g]
                    },
                    D: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e({
                            G: (k = {},
                            k.key = g,
                            k.value = l,
                            k)
                        }, [ta.Aa + "//" + Rb + "/user_storage_set"], {})["catch"](B(a, "u.d.s.s"))
                    }
                }
            }
            function vm(a) {
                return {
                    N: function(c, b) {
                        H(a).C("oo") || b()
                    }
                }
            }
            function wm(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return I.resolve()
                    }
                }
                return function(e) {
                    var f, g = (f = {},
                    f["browser-info"] = xm,
                    f["page-url"] = a.location && "" + a.location.href,
                    f);
                    return d && (e = kb(a, e)) ? d(zm, {
                        Ca: g,
                        aa: [],
                        V: "site-info=" + Dd(e)
                    })["catch"](F) : I.resolve()
                }
            }
            function Am(a, c) {
                if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
                    var b = K(c);
                    delete H(a).C("counters", {})[b];
                    Sa(La("oo.e"))
                }
            }
            function Bm(a) {
                if (Rc(a))
                    return null;
                var c = Cm(a)
                  , b = c.Qc;
                ba(b) && (c.Qc = null,
                Dm(a).then(function(d) {
                    c.Qc = d
                }));
                return b ? 1 : null
            }
            function Em(a, c, b) {
                b = b.G;
                if ((void 0 === b ? {} : b).nohit)
                    return null;
                a = Re(a);
                if (!a)
                    return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Fm);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = Gm,
                    d = e)
                }
                if (!b)
                    return null;
                a = Hm(a, d, b);
                c = K(c);
                c = Im(c);
                return (c = Jm(c, a)) && J(",", c)
            }
            function Jm(a, c) {
                var b = a.length ? A(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                D(q(P, ra("push", a)), c);
                return W(la(null), b).length === a.length ? null : b
            }
            function Hm(a, c, b) {
                return A(function(d) {
                    var e = d[0]
                      , f = d[1];
                    if (U(e))
                        return e(a, c) || null;
                    if (1 === d.length)
                        return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1],
                    g = !(oh[d[0]] || oh[g]));
                    if (!g)
                        return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }
            function Xg(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63])
                }
                switch (b - d) {
                case 1:
                    b = a[d] << 4;
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=", "=");
                    break;
                case 2:
                    b = (a[d] << 10) + (a[d + 1] << 2),
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=")
                }
                e = e.join("");
                return c ? ph(e, !0) : e
            }
            function Ag(a, c) {
                void 0 === c && (c = !1);
                var b = a
                  , d = ""
                  , e = 0;
                if (!b)
                    return "";
                for (c && (b = ph(b)); b.length % 4; )
                    b += "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++))
                      , g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++))
                      , h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++))
                      , k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k)
                        return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }
            function ph(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return Km[b] || b
                }) : ""
            }
            function Lm(a) {
                try {
                    var c = Da(a) ? a : [];
                    return J(",", [a.name, a.description, q(Na, Ha, db(Mm), Sc(","))(c)])
                } catch (b) {
                    return ""
                }
            }
            function Mm(a) {
                return J(",", [a.description, a.suffixes, a.type])
            }
            function Nm(a, c) {
                for (var b = "", d = 0; d < c; d += 1)
                    b += a;
                return b
            }
            function Om(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                qa(k) && (b.D(f, g),
                e(a, c, b, d),
                k = b.C(f, g));
                ba(h) || h.Bb(f, "" + k);
                return k
            }
            function Pm(a, c) {
                if (Tc(a)) {
                    var b = Ya(a).match(Qm);
                    if (b && b.length)
                        return b[1] === c
                }
                return !1
            }
            function Kd(a, c, b) {
                return function(d) {
                    var e, f, g = ya(c, b);
                    g && Rm(a, d, c) && (g = M(g.params, g),
                    (d = Se({
                        event: a,
                        ra: "products",
                        ia: Sb,
                        Vd: "goods"
                    }, d)) && g && g((e = {},
                    e.__ym = (f = {},
                    f.ecommerce = [d],
                    f),
                    e)))
                }
            }
            function Rm(a, c, b) {
                var d = !1
                  , e = "";
                if (!Aa(c))
                    return zb(b, "", "Ecommerce data should be an object"),
                    d;
                var f = c.goods;
                switch (a) {
                case "detail":
                case "add":
                case "remove":
                    Z(f) && f.length ? (d = qh(function(g) {
                        return Aa(g) && (xa(g.id) || Ld(b, g.id) || xa(g.name))
                    }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                    break;
                case "purchase":
                    Ld(b, c.id) || xa(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                zb(b, "", e);
                return d
            }
            function Uc(a, c) {
                return {
                    N: function(b, d) {
                        Md(b) ? d() : sa(c, function(e) {
                            var f;
                            if (e = n(e, "settings.hittoken"))
                                e = (f = {},
                                f.hittoken = e,
                                f),
                                b.G = y(b.G || {}, e);
                            d()
                        })
                    }
                }
            }
            function Sm(a, c) {
                try {
                    var b = c.origin
                } catch (d) {}
                b && Ja(q(Qa, Fa(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]) && (b = Bb(a, c.data),
                "appendremote" === n(b, "action") && Tm(a, c, b))
            }
            function rh(a, c, b, d) {
                var e, f, g, h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = H(a)
                  , l = {};
                l.getCachedTags = Te;
                l.form = (e = {},
                e.closest = r(a, sh),
                e.select = Um,
                e.getData = r(a, th),
                e);
                l.button = (f = {},
                f.closest = r(a, Ue),
                f.select = Ve,
                f.getData = r(a, We),
                f);
                l.phone = (g = {},
                g.hidePhones = E([a, null, [d]], uh),
                g);
                l.status = (h = {},
                h.checkStatus = E([a, Ma(b)], Vm),
                h);
                k.D("_u", l);
                c && nc(a, {
                    src: c
                })
            }
            function vh(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = J(".", q(db(q(P, Ma)), Ha)(b.split(".")));
                if (!L(d, Wm) || !L(c, ["ru", "en", "tr"]))
                    return "";
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js");
                return wh(c) ? c : ""
            }
            function Xm(a, c) {
                var b = mb(a);
                if (b) {
                    var d = b("div")
                      , e = Pb(a);
                    if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function() {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            nc(f.contentWindow, {
                                src: c
                            })
                        }
                        ;
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({
                            mode: "open"
                        }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f),
                        a._ym__remoteIframeContainer = f)
                    }
                }
            }
            function Vm(a) {
                var c, b = xh(a);
                a = H(a).C("getCounters", Vc)();
                a = A(T("id"), a);
                return c = {
                    id: b
                },
                c.counterFound = !!b && L(b, a),
                c
            }
            function uh(a, c, b) {
                var d;
                c = yh(a, c, {
                    fd: Ym,
                    ie: (d = {},
                    d.href = !0,
                    d)
                });
                b = W(Boolean, A(function(f) {
                    return "*" === f ? f : Cb(f)
                }, b));
                var e = A(q(P, ra("concat", [""]), zh("reverse"), fa), b);
                b = Wc(a);
                d = Ah(a, b, 1E3);
                c = M(c.Sc, c, e);
                d.F(c);
                Zm(a, b);
                Bh(a, b);
                c()
            }
            function Ym(a, c, b) {
                var d = mb(a)
                  , e = b.Ka
                  , f = b.xb
                  , g = e.parentNode
                  , h = e.textContent;
                if ("text" === b.Xb && h && d && g) {
                    b = d("small");
                    Ch(b);
                    var k = h.split("")
                      , l = Dh(h).length;
                    D(ra("appendChild", b), O(function(m, p) {
                        var t = m.nodes
                          , w = m.md
                          , x = d("small");
                        x.innerHTML = p;
                        var v = $m.test(p);
                        Ch(x);
                        v && (x.style.opacity = "" + (l - w - 1) / l);
                        t.push(x);
                        return {
                            nodes: t,
                            md: w + (v ? 1 : 0)
                        }
                    }, {
                        nodes: [],
                        md: 0
                    }, k).nodes);
                    an(a, c, b, f);
                    g.insertBefore(b, e);
                    e.textContent = "";
                    return !0
                }
                return !1
            }
            function an(a, c, b, d) {
                function e() {
                    D(r(["style", "opacity", ""], oc), Na(b.childNodes));
                    if (c) {
                        var k = ya(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = ha(a)
                  , g = F
                  , h = F;
                g = f.F(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = da(a, e, 200, "ph.h.e");
                        (h || F)();
                        h = f.F(b, ["mouseleave"], function(m) {
                            m.target === b && Ta(a, l)
                        })
                    }
                })
            }
            function Bh(a, c) {
                Xc(a)(lb(F, function() {
                    var b, d = a.document.body, e = (b = {},
                    b.attributes = !0,
                    b.childList = !0,
                    b.subtree = !0,
                    b);
                    za("MutationObserver", a.MutationObserver) && (new MutationObserver(c.W)).observe(d, e)
                }))
            }
            function Zm(a, c) {
                return ha(a).F(a, ["load"], c.W)
            }
            function yh(a, c, b) {
                function d(k) {
                    var l;
                    return f(a, c, k) ? null === (l = h[k.xb]) || void 0 === l ? void 0 : l.Cb : null
                }
                var e, f = b.fd;
                b = b.ie;
                var g = void 0 === b ? (e = {},
                e.href = !0,
                e.text = !0,
                e) : b, h;
                return {
                    Sc: function(k) {
                        return new I(function(l, m) {
                            k && k.length || m();
                            h = Eh()(k);
                            Xc(a)(lb(r({
                                ba: [],
                                ja: 0
                            }, l), function() {
                                var p = X(a)
                                  , t = p(Y)
                                  , w = g.href ? bn(a, h) : []
                                  , x = g.text ? Fh(a, h) : [];
                                l({
                                    ba: W(Z, W(Boolean, A(d, w.concat(x)))),
                                    ja: p(Y) - t
                                })
                            }))
                        }
                        )
                    }
                }
            }
            function bn(a, c) {
                var b = a.document.body;
                if (!b)
                    return [];
                var d = Gh(c);
                return O(function(e, f) {
                    var g = n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (p) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0]
                          , l = k ? Cb(k) : ""
                          , m = c[l];
                        ba(m) || !l && "*" !== m.Cb[0] || (e.push({
                            Xb: "href",
                            Ka: f,
                            xb: l,
                            Da: Hh(k, c[l].Da),
                            ye: g
                        }),
                        g = Cb(h.slice(4)),
                        l = Eh()([l ? m.Cb : [g, ""]]),
                        e.push.apply(e, Fh(a, l, f)))
                    }
                    return e
                }, [], Na(b.querySelectorAll("a")))
            }
            function Fh(a, c, b) {
                void 0 === b && (b = a.document.body);
                if (!b)
                    return [];
                var d = []
                  , e = Gh(c);
                Og(a, b, function(f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                        var g = Ha(e.exec(f.textContent || "") || []);
                        D(function(h) {
                            var k = Cb(h);
                            ba(c[k]) || d.push({
                                Xb: "text",
                                Ka: f,
                                xb: k,
                                Da: Hh(h, c[k].Da),
                                ye: f.textContent || ""
                            })
                        }, g)
                    }
                }, function(f) {
                    return e.test(f.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }
            function Eh() {
                return Xe(function(a, c) {
                    var b = A(Cb, c)
                      , d = b[0];
                    b = b[1];
                    a[d] = {
                        Da: b,
                        Cb: c
                    };
                    var e = Ih(d);
                    e !== d && (a[e] = {
                        Da: Ih(b),
                        Cb: c
                    });
                    return a
                }, {})
            }
            function Hh(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]),
                    f += 1) : b.push(d[g])
                }
                return J("", b) + c.slice(f + 1)
            }
            function Ih(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }
            function Gh(a) {
                return new RegExp("(?:" + J("|", A(Jh, ja(a))) + ")")
            }
            function Og(a, c, b, d, e) {
                function f(g) {
                    return U(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                if (U(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c),
                !jh(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                        acceptNode: f
                    } : null, !1); c.nextNode() && !1 !== b(c.currentNode); )
                        ;
            }
            function Kh(a, c, b) {
                var d;
                a = [Lh(a, c, function(e) {
                    d = e;
                    e.ub.F(b)
                }), function() {
                    d && d.unsubscribe()
                }
                ];
                return E([Mh, a], D)
            }
            function cn(a, c, b, d) {
                var e, f, g;
                if (b) {
                    var h = n(d, "ecommerce") || {};
                    var k = n(d, "event") || "";
                    h = Aa(h) && xa(k) ? Se(k, h) : void 0;
                    if (!h)
                        a: {
                            var l = d;
                            !Z(d) && Ld(a, Da(d)) && (l = ua(l));
                            if (Z(l) && (h = l[0],
                            k = l[1],
                            l = l[2],
                            xa(k) && Aa(l) && "event" === h)) {
                                h = Se(k, l);
                                break a
                            }
                            h = void 0
                        }
                    if (d = h || dn(d))
                        eb(a, (e = {},
                        e.counterKey = c,
                        e.name = "ecommerce",
                        e.data = d,
                        e)),
                        b((f = {},
                        f.__ym = (g = {},
                        g.ecommerce = [d],
                        g),
                        f))
                }
            }
            function dn(a) {
                var c = n(a, "ecommerce");
                if (Aa(c))
                    return a = W(hc(Nh), ja(c)),
                    a = O(function(b, d) {
                        b[d] = c[d];
                        return b
                    }, {}, a),
                    0 === ja(a).length ? void 0 : a
            }
            function Se(a, c) {
                var b, d, e = xa(a) ? Yc[a] : a;
                if (e) {
                    var f = e.event
                      , g = e.ra
                      , h = e.Vd
                      , k = void 0 === h ? "items" : h
                      , l = c.purchase || c;
                    if (h = l[k]) {
                        e = A(r(e.ia, en), h);
                        var m = (b = {},
                        b[f] = g ? (d = {},
                        d[g] = e,
                        d) : e,
                        b);
                        b = ja(l);
                        g && 1 < b.length && (m[f].actionField = O(function(p, t) {
                            if (t === k)
                                return p;
                            if ("currency" === t)
                                return m.currencyCode = l.currency,
                                p;
                            p[fn[t] || Ye[t] || t] = l[t];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }
            function en(a, c) {
                var b = {};
                D(function(d) {
                    var e = a[d] || Ye[d] || d;
                    -1 !== d.indexOf("item_category") ? (e = Ye.item_category,
                    b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, ja(c));
                return b
            }
            function gn(a, c, b) {
                if (b && (b = Ue(a, b),
                b = We(a, b))) {
                    b = "?" + pc(b);
                    var d = ub(a, c, "Button goal. Counter " + c.id + ". Button: " + b + ".");
                    Nd(a, c, "btn", d).reachGoal(b)
                }
            }
            function hn(a, c, b, d) {
                d = n(d, "target");
                (d = Tb("button,input", a, d)) && "submit" === d.type && (d = sh(a, d)) && (b.push(d),
                da(a, E([!1, a, c, b, d], Oh), 300))
            }
            function Oh(a, c, b, d, e) {
                var f = ic(c)(e, d)
                  , g = -1 !== f;
                if (a || g)
                    g && d.splice(f, 1),
                    a = th(c, e),
                    a = "?" + pc(a),
                    d = E([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], Ph),
                    Nd(c, b, "form", d).reachGoal(a)
            }
            function Ph(a, c, b) {
                return jn(a, c).then(q(E([ub(a, c, b), F], Od), fa))
            }
            function th(a, c, b) {
                return Qh(a, c, ["i", "n", "p"], void 0, b)
            }
            function kn(a, c) {
                var b;
                a((b = {},
                b.clickmap = ba(c) ? !0 : c,
                b))
            }
            function ln(a, c, b, d, e) {
                var f;
                c = {
                    H: va(),
                    G: (f = {},
                    f["page-url"] = c,
                    f["pointer-click"] = b,
                    f),
                    $: {
                        ea: "clmap/" + e.id
                    }
                };
                d(c, e)["catch"](B(a, "c.s.c"))
            }
            function mn(a, c, b, d, e) {
                if (Zc(a, "ymDisabledClickmap") || !c || !c.element)
                    return !1;
                a = Za(c.element);
                if (e && !e(c.element, a) || L(c.button, [2, 3]) && "A" !== a || Ja(la(a), d))
                    return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time)
                        return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c)
                        return !1
                }
                for (; d; ) {
                    if (nn(d))
                        return !1;
                    d = d.parentElement
                }
                return !0
            }
            function on(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement)
                        !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }
            function pn(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }
            function Ed(a, c) {
                var b = Pb(a)
                  , d = Ie(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }
            function Pd(a, c) {
                return {
                    N: function(b, d) {
                        var e, f = b.H, g = b.qa, h = b.G, k = b.O;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = X(a);
                            f.Bb("rqnl", 1);
                            for (var m = $c(a), p = 1; m[p]; )
                                p += 1;
                            b.M || (b.M = {});
                            b.M.Xa = p;
                            m[p] = (e = {},
                            e.protocol = ta.Aa,
                            e.host = Rb,
                            e.resource = b.$.ea,
                            e.postParams = k.V,
                            e.time = l(Y),
                            e.counterType = c.T,
                            e.params = h,
                            e.browserInfo = f.l(),
                            e.counterId = c.id,
                            e.ghid = Ub(a),
                            e);
                            g && (m[p].telemetry = g.l());
                            Ze(a)
                        }
                        d()
                    },
                    ma: function(b, d) {
                        Rh(a, b);
                        d()
                    }
                }
            }
            function Rh(a, c) {
                var b = $c(a);
                c.H && !cb(b) && c.M && (delete b[c.M.Xa],
                Ze(a))
            }
            function Ze(a) {
                var c = $c(a);
                Ka(a).D("retryReqs", c)
            }
            function qn(a, c) {
                if (a.Ce()) {
                    var b = Sh(c);
                    if (b && !gc("ym-disable-tracklink", b)) {
                        var d = a.l
                          , e = a.Fd
                          , f = a.Ea
                          , g = a.sender
                          , h = a.Md
                          , k = f.mb
                          , l = b.href;
                        var m = fb(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? fb(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        if (gc("ym-external-link", b))
                            Qd(d, f, {
                                url: l,
                                Ga: !0,
                                title: m,
                                sender: g
                            });
                        else {
                            k = k ? Rd(d, k).hostname : S(d).hostname;
                            h = RegExp("\\.(" + J("|", A(rn, h)) + ")$", "i");
                            var p = b.protocol + "//" + b.hostname + b.pathname;
                            h = Th.test(p) || Th.test(l) || h.test(l) || h.test(p);
                            b = b.hostname;
                            Sd(k) === Sd(b) ? h ? Qd(d, f, {
                                url: l,
                                pb: !0,
                                title: m,
                                sender: g
                            }) : m && e.D("il", fb(m).slice(0, 100)) : l && sn.test(l) || Qd(d, f, {
                                url: l,
                                tb: !0,
                                Ga: !0,
                                pb: h,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }
            function Qd(a, c, b) {
                var d, e, f, g = va();
                b.pb && g.D("dl", 1);
                b.Ga && g.D("ln", 1);
                var h = b.ld || {};
                g = {
                    H: g,
                    M: {
                        title: h.title || b.title,
                        tb: !!b.tb,
                        R: h.params
                    },
                    G: (d = {},
                    d["page-url"] = b.url,
                    d["page-ref"] = c.mb || S(a).href,
                    d)
                };
                d = "Link";
                b.pb ? d = b.Ga ? "Ext link - File" : "File" : b.Ga && (d = "Ext link");
                eb(a, (e = {},
                e.counterKey = K(c),
                e.name = "event",
                e.data = (f = {},
                f.schema = "Link click",
                f.name = (b.Ga ? "external" : "internal") + " url: " + b.url,
                f),
                e));
                c = b.sender(g, c).then(ub(a, c, d + ". Counter " + c.id + ". Url: " + b.url, b.ld));
                return qc(a, "cl.p.s", c, h.callback || F, h.ctx)
            }
            function tn(a, c) {
                var b, d, e = (b = {},
                b.string = !0,
                b.object = !0,
                b["boolean"] = c,
                b)[typeof c] || !1;
                a((d = {},
                d.trackLinks = e,
                d))
            }
            function un(a, c, b, d) {
                var e = S(a)
                  , f = e.hostname;
                e = e.href;
                if (c = ad(c).url)
                    a = Rd(a, c),
                    f = a.hostname,
                    e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }
            function Uh(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }
            function vn(a, c, b, d) {
                var e;
                if (a = ya(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    L(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f),
                    g.push(b),
                    d.parent && c.Yc((e = {},
                    e.type = "params",
                    e.data = f,
                    e)))
                }
            }
            function vg(a, c, b) {
                void 0 === b && (b = P);
                var d = $e(a);
                b(d);
                var e = r(d, wn);
                af(a, c, function(f) {
                    f.ub.F(e)
                });
                return d
            }
            function wn(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.W(n(b, "type"), b)
            }
            function af(a, c, b, d) {
                void 0 === b && (b = F);
                void 0 === d && (d = !1);
                var e = Wc(a);
                if (c && U(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = ua(arguments)
                          , h = g[0];
                        d && e.W(h);
                        g = f.apply(c, g);
                        d || e.W(h);
                        return g
                    }
                    ;
                    a = {
                        ub: e,
                        unsubscribe: function() {
                            c.push = f
                        }
                    };
                    b(a);
                    D(e.W, c);
                    return a
                }
            }
            function vd(a) {
                a = H(a);
                var c = a.C("dataLayer", []);
                a.D("dataLayer", c);
                return c
            }
            function Yk(a, c) {
                var b, d;
                a.push((b = {},
                b.ymetrikaEvent = (d = {},
                d.type = c,
                d),
                b))
            }
            function Vh(a, c) {
                var b = Jc(a, c)
                  , d = []
                  , e = [];
                if (!b)
                    return null;
                var f = E([a, b.$b], xn)
                  , g = r(f, yn);
                b.X.F(["initToParent"], function(h) {
                    g(d, b.children[h[1].counterId])
                }).F(["parentConnect"], function(h) {
                    g(e, b.oa[h[1].counterId])
                });
                return {
                    X: b.X,
                    nf: function(h, k) {
                        return new I(function(l, m) {
                            b.$b(h, k, function(p, t) {
                                l([p, t])
                            });
                            da(a, r(La(), m), 5100, "is.o")
                        }
                        )
                    },
                    Xc: function(h) {
                        var k = {
                            $c: [],
                            ic: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    Yc: function(h) {
                        var k = {
                            $c: [],
                            ic: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.oa, k, h)
                    }
                }
            }
            function yn(a, c, b) {
                c = W(function(d) {
                    return !L(b.info.counterId, d.ic)
                }, c);
                D(function(d) {
                    var e;
                    b.info.counterId && a((e = {},
                    e[b.info.counterId] = b,
                    e), d, d.data)
                }, c)
            }
            function xn(a, c, b, d, e) {
                return (new I(function(f, g) {
                    var h = ja(b)
                      , k = q(d.resolve ? d.resolve : P, Mc(f))
                      , l = q(d.reject ? d.reject : P, Mc(g));
                    d.resolve = k;
                    d.reject = l;
                    D(function(m) {
                        var p;
                        d.ic.push(+m);
                        var t = b[m]
                          , w = da(a, r(La(), l), 5100, "is.m");
                        c(t.window, y(e, (p = {},
                        p.toCounter = Ma(m),
                        p)), function(x, v) {
                            Ta(a, w);
                            d.$c.push(m);
                            d.resolve && d.resolve(v)
                        })
                    }, h)
                }
                ))["catch"](B(a, "if.b"))
            }
            function zn(a) {
                var c = F
                  , b = null
                  , d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    U(e) && (c = e,
                    d = a.length + -1);
                    var f = a.slice(-2)[0];
                    U(f) && (c = f,
                    b = e,
                    d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Gd: b,
                        cb: c,
                        R: 1 === d.length ? a[0] : oc(d)
                    }
                }
            }
            function qc(a, c, b, d, e) {
                var f = E([a, d, e], bf);
                return b.then(f, function(g) {
                    f();
                    Jd(a, c, g)
                })
            }
            function Wh(a, c) {
                return {
                    N: function(b, d) {
                        var e, f, g = (b.M || {}).R, h = b.O;
                        h = void 0 === h ? {} : h;
                        if (g && (Xh(c, g),
                        !h.V && b.H && b.G)) {
                            var k = kb(a, g)
                              , l = Yh(a)
                              , m = b.H.C("pv");
                            k && !b.G.nohit && (eb(a, (e = {},
                            e.counterKey = K(c),
                            e.name = "params",
                            e.data = (f = {},
                            f.val = g,
                            f),
                            e)),
                            m ? encodeURIComponent(k).length > ta.rd ? l.push([b.H, g]) : b.G["site-info"] = k : (h.V = k,
                            b.O = h,
                            b.Ba || (b.Ba = {}),
                            b.Ba.je = !0))
                        }
                        d()
                    },
                    ma: function(b, d) {
                        var e = Yh(a)
                          , f = ya(a, c)
                          , g = f && f.params;
                        g && (f = W(q(rc, la(b.H)), e),
                        D(function(h) {
                            g(h[1]);
                            h = cf(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }
            function Td(a, c) {
                return function(b) {
                    Zh(a, c, b)
                }
            }
            function An(a, c) {
                df(a)(function(b) {
                    delete b[c]
                })
            }
            function Zh(a, c, b) {
                df(a)(function(d) {
                    d[c] = y(d[c] || {}, b)
                })
            }
            function df(a) {
                a = H(a);
                var c = a.C("dsjf") || Fa({});
                a.xa("dsjf", c);
                return c
            }
            function Bn(a, c) {
                return function(b) {
                    var d, e, f = ya(a, c);
                    f && (Aa(b) ? Da(ja(b)) ? (b = $h(b)) && Da(b) && f.params((d = {},
                    d.__ym = (e = {},
                    e.fpmh = b,
                    e),
                    d)) : ub(a, c, "First party params error. Empty object.")() : ub(a, c, "First party params error. Not an object.")())
                }
            }
            function $h(a) {
                return O(function(c, b) {
                    var d = b[0]
                      , e = b[1]
                      , f = Aa(e);
                    if (!xa(e) && !f)
                        return c;
                    e = f ? $h(e) : e;
                    Da(e) && c.push([d, e]);
                    return c
                }, [], Ba(a))
            }
            function ai(a, c, b) {
                void 0 === b && (b = 0);
                c = Ba(c);
                c = O(function(d, e) {
                    var f = e[0]
                      , g = e[1]
                      , h = Aa(g);
                    if (!xa(g) && !h)
                        return d;
                    h ? g = ai(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = Cn(g) : "email" === f && (g = Dn(g)),
                    g = bi(a, g)) : g = I.resolve(g);
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return I.all(c)
            }
            function Dn(a) {
                var c = fb(a).toLowerCase().split("@")
                  , b = c[0];
                c = c[1];
                if (!c)
                    return a;
                c = c.replace("googlemail.com", "gmail.com");
                ci(c) && (c = "yandex.ru");
                "yandex.ru" === c ? b = b.replace(ef, "-") : "gmail.com" === c && (b = b.replace(ef, ""));
                a = ff(b, "+");
                -1 !== a && (b = b.slice(0, a));
                return b + "@" + c
            }
            function Cn(a) {
                a = Cb(a);
                return "8" === a[0] ? "7" + a.slice(1) : a
            }
            function bi(a, c) {
                return new I(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f],{
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result");
                            var k = (h || "").indexOf(",");
                            -1 !== k ? b(h.substring(k + 1)) : d(lc("fpm.i"))
                        }
                        ;
                        g.readAsDataURL(f)
                    }, d)
                }
                )
            }
            function ya(a, c) {
                var b = H(a).C("counters", {})
                  , d = K(c);
                return b[d]
            }
            function di(a, c) {
                H(a).D("dce:" + c, !0);
                var b = H(a).C("dclq:" + c);
                b && (D(function(d) {
                    var e = d[0];
                    d = d[1];
                    fa.apply(void 0, aa([Ud(a, c)[e]], d))
                }, b),
                gf(b))
            }
            function ub(a, c, b, d) {
                return ei(c) ? F : r(E(aa([a, K(c)], d ? [b + ". Params:", d] : [b]), zb), fa)
            }
            function zb() {
                var a = ua(arguments)
                  , c = a.slice(2);
                Ud(a[0], a[1]).log.apply(zb, c)
            }
            function fi(a) {
                var c = "1" === ec(a).C("debug")
                  , b = -1 < S(a).href.indexOf("_ym_debug=1") || -1 < S(a).href.indexOf("_ym_debug=2");
                a = a._ym_debug;
                return {
                    Wd: c,
                    $d: a || b,
                    isEnabled: Ja(Boolean, [c, a, b])
                }
            }
            function En(a, c) {
                return {
                    log: sc(a, "log", c, F),
                    warn: sc(a, "log", c, F),
                    error: sc(a, "log", c, F)
                }
            }
            function sc(a, c, b, d) {
                return function() {
                    var e, f, g = ua(arguments);
                    eb(a, (e = {},
                    e.counterKey = b,
                    e.name = "log",
                    e.data = (f = {},
                    f.args = g,
                    f.type = c,
                    f),
                    e));
                    return d.apply(void 0, g)
                }
            }
            function sa(a, c) {
                var b = K(a);
                return gi()(Fn(b)).then(c)
            }
            function Gn(a, c, b) {
                var d, e;
                c = K(c);
                var f = hi(a);
                b = y({
                    Od: f(Y)
                }, b);
                eb(a, (d = {},
                d.counterKey = c,
                d.name = "counterSettings",
                d.data = (e = {},
                e.settings = b,
                e),
                d));
                return gi()(Hn(c, b))
            }
            function Hn(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.se = c,
                    d.Uc = !0,
                    d.Tc ? d.Tc(c) : d.promise = I.resolve(c)) : b[a] = {
                        promise: I.resolve(c),
                        se: c,
                        Uc: !0
                    }
                }
            }
            function hf(a) {
                return !Rc(a) && jf(a)
            }
            function bd(a) {
                return mb(a) ? r(a, In) : !1
            }
            function vb(a) {
                if (a.fetch) {
                    var c = n(a, "AbortController");
                    return E([a, c ? new c : void 0], Jn)
                }
                return !1
            }
            function jf(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && za("sendBeacon", c) ? E([a, M(c, n(a, "navigator"))], Kn) : !1
            }
            function Kn(a, c, b, d) {
                return new I(function(e, f) {
                    var g;
                    if (!n(a, "navigator.onLine"))
                        return f();
                    var h = y(d.Ca, (g = {},
                    g["force-urlencoded"] = 1,
                    g));
                    g = b + "?" + pc(h) + (d.V ? "&" + d.V : "");
                    return 2E3 < g.length ? f(La("sb.tlq")) : c(g) ? e("") : f()
                }
                )
            }
            function In(a, c, b) {
                return new I(function(d, e) {
                    var f, g, h = "_ymjsp" + Ua(a), k = y((f = {},
                    f.callback = h,
                    f), b.Ca), l = E([a, h], Ln);
                    a[h] = function(p) {
                        try {
                            l(),
                            bc(m),
                            d(p)
                        } catch (t) {
                            e(t)
                        }
                    }
                    ;
                    k.wmode = "5";
                    var m = nc(a, (g = {},
                    g.src = ii(c, b, k),
                    g));
                    if (!m)
                        return l(),
                        e(lc("jp.s"));
                    f = r(m, bc);
                    f = q(f, r(La(b.aa), e));
                    g = cd(a, f, b.ya || 1E4);
                    g = E([a, g], Ta);
                    m.onload = g;
                    m.onerror = q(l, g, f)
                }
                )
            }
            function Ln(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }
            function tc(a) {
                var c = mb(a);
                return c ? E([a, c], Mn) : !1
            }
            function Mn(a, c, b, d) {
                return new I(function(e, f) {
                    var g = Pb(a)
                      , h = c("img")
                      , k = q(r(h, bc), r(La(d.aa), f))
                      , l = cd(a, k, d.ya || 3E3);
                    h.onerror = k;
                    h.onload = q(r(h, bc), r(null, e), E([a, l], Ta));
                    k = y({}, d.Ca);
                    delete k.wmode;
                    h.src = ii(b, d, k);
                    Tc(a) && (y(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }),
                    g.appendChild(h))
                }
                )
            }
            function Jn(a, c, b, d) {
                var e, f = y(d.Oa ? (e = {},
                e.wmode = "7",
                e) : {}, d.Ca), g = c || {
                    signal: void 0,
                    abort: F
                }, h = a.fetch(b + "?" + pc(f), {
                    method: d.$a,
                    body: d.V,
                    credentials: !1 === d.oc ? "omit" : "include",
                    headers: d.va,
                    signal: g.signal
                }), k = r(d.aa, La);
                return new I(function(l, m) {
                    d.ya && cd(a, function() {
                        try {
                            g.abort()
                        } catch (p) {}
                        m(k())
                    }, d.ya);
                    return h.then(function(p) {
                        if (!p.ok) {
                            if (d.Yb)
                                return Sa(ji(p));
                            oe(d.aa)
                        }
                        return d.Yb ? p.text() : d.Oa ? p.json() : null
                    }).then(l)["catch"](r(k(), m))
                }
                )
            }
            function wb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials"in new a.XMLHttpRequest) {
                        a: {
                            if (Nn.test(a.location.host) && a.opera && U(a.opera.version) && (c = a.opera.version(),
                            "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? r(a, On) : !1
            }
            function On(a, c, b) {
                var d, e = new a.XMLHttpRequest, f = b.V, g = y(b.Oa ? (d = {},
                d.wmode = "7",
                d) : {}, b.Ca);
                return new I(function(h, k) {
                    e.open(b.$a || "GET", c + "?" + pc(g), !0);
                    e.withCredentials = !1 !== b.oc;
                    b.ya && (e.timeout = b.ya);
                    ki(Ba, db(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.va);
                    var l = E([a, e, La(b.aa), b.Oa, b.Yb, h, k], Pn);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                }
                )
            }
            function Pn(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b),
                    e)
                        200 === c.status ? f(c.responseText) : g(ji(c));
                    else {
                        e = null;
                        if (d)
                            try {
                                (e = Bb(a, c.responseText)) || g(b)
                            } catch (k) {
                                g(b)
                            }
                        f(e)
                    }
                return h
            }
            function ii(a, c, b) {
                (b = pc(b)) && (a += "?" + b);
                c.V && (a += (b ? "&" : "?") + c.V);
                return a
            }
            function Qn(a, c, b) {
                var d = A(rc, Db[c] || Eb);
                D(function(e) {
                    return d.unshift(e)
                }, Vd);
                return A(q(uc([a, b]), fa), d)
            }
            function li(a, c) {
                var b = S(a)
                  , d = b.href
                  , e = b.host
                  , f = -1;
                if (!xa(c) || ba(c))
                    return d;
                b = c.replace(mi, "");
                if (-1 !== b.search(Rn))
                    return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/),
                -1 === f) || "#" === g && (f = d.search(/#/),
                -1 === f))
                    return d + b;
                if (-1 !== f)
                    return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = d.indexOf(e),
                    -1 !== f)
                        return d.substr(0, f + e.length) + b
                } else
                    return d = d.split("/"),
                    d[d.length - 1] = b,
                    J("/", d);
                return ""
            }
            function Wd(a, c) {
                return {
                    N: function(b, d) {
                        var e = ni(c);
                        e = E([b, e, d], Sn);
                        Tn(a, c, e)
                    },
                    ma: function(b, d) {
                        var e = b.H
                          , f = ni(c);
                        if (e) {
                            var g = f.ga;
                            f.xc === e && g && (D(fa, g),
                            f.ga = null)
                        }
                        d()
                    }
                }
            }
            function Sn(a, c, b) {
                var d = a.H;
                d ? Md(a) ? (c.xc = d,
                b()) : c.ga ? c.ga.push(b) : b() : b()
            }
            function Md(a) {
                return (a = a.H) && a.C("pv") && !a.C("ar")
            }
            function Tn(a, c, b) {
                if (kf(a) && Ab(a)) {
                    var d = Un(c);
                    if (!d.ae) {
                        d.ae = !0;
                        c = Jc(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.ga = [];
                        var e = function() {
                            d.ga && (D(fa, d.ga),
                            d.ga = null)
                        };
                        da(a, e, 3E3);
                        c.X.F(["initToChild"], e)
                    }
                    d.ga ? d.ga.push(b) : b()
                } else
                    b()
            }
            function oi(a, c) {
                return {
                    N: function(b, d) {
                        var e = b.H;
                        if (e && (!c || c.Wc)) {
                            var f = a.document.title;
                            b.M && b.M.title && (f = b.M.title);
                            var g = Vb("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"),
                            f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, ta.sd);
                            e.D("t", f)
                        }
                        d()
                    }
                }
            }
            function Fb(a) {
                return function(c, b) {
                    return {
                        N: function(d, e) {
                            var f = d.H
                              , g = d.G;
                            f && g && D(function(h) {
                                var k = Xd[h]
                                  , l = "bi"
                                  , m = f;
                                k || (k = lf[h],
                                l = "tel",
                                m = wd(d));
                                k && (k = z(l + ":" + h, k, null)(c, b, d),
                                m.Bb(h, k))
                            }, a || Vn());
                            e()
                        }
                    }
                }
            }
            function Wn(a, c) {
                var b = dd(a);
                c.F(["initToParent"], function(d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).F(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.W("parentConnect", [e, d])
                }).F(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.oa[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }
            function Xn(a) {
                if (za("MutationObserver", a.MutationObserver)) {
                    var c = dd(a).children
                      , b = new a.MutationObserver(function() {
                        D(function(d) {
                            n(c[d], "window.window") || delete c[d]
                        }, ja(c))
                    }
                    );
                    Xc(a)(lb(F, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }
            function Yn(a, c) {
                return function(b, d) {
                    var e, f = {
                        gb: X(a)(Y),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.gb = Ma(b[0]),
                    f.key = parseFloat(b[1]),
                    f.dir = Ma(b[2]));
                    y(d, c);
                    var g = (e = {
                        data: d
                    },
                    e.__yminfo = J(":", ["__yminfo", f.gb, f.key, f.dir]),
                    e);
                    return {
                        meta: f,
                        cd: kb(a, g) || ""
                    }
                }
            }
            function Xc(a, c) {
                function b(e) {
                    n(c, d) ? e() : da(a, r(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Fa(function(e, f) {
                    b(f)
                })
            }
            function ed(a, c) {
                var b = c.Rb
                  , d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = ec(a)
                  , f = Ka(a)
                  , g = X(a)(mf)
                  , h = pi(a, c)
                  , k = h[0];
                h = h[1];
                var l = e.C("d");
                qi(a, c);
                var m = !1;
                !h && k && (h = k,
                m = !0);
                if (!h)
                    h = J("", [g, Ua(a, 1E6, 999999999)]),
                    m = !0;
                else if (!l || 15768E3 < g - Ma(l))
                    m = !0;
                m && !c.Ha && (e.D(d, h, 525600, b),
                e.D("d", "" + g, 525600, b));
                f.D(d, h);
                return h
            }
            function Zn(a, c) {
                return !c.Ha && qi(a, c)
            }
            function pi(a, c) {
                var b = Ka(a)
                  , d = ec(a)
                  , e = c.Rb || "uid";
                return [b.C(e), d.C(e)]
            }
            function Yg(a, c, b) {
                nf(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = ri(a);
                (d = d && d.metrika_enabled) && si(a, "metrika_enabled", c, b, !0);
                return !!d
            }
            function nf(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (Zg(a, Fd, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + $n(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(ao, ""),
                    h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")),
                        g || (ti(a)[c] = b)
                    } catch (l) {}
                }
            }
            function Fd(a, c) {
                var b = ti(a);
                return b ? b[c] || null : null
            }
            function ri(a) {
                try {
                    var c = a.document.cookie;
                    if (!qa(c)) {
                        var b = {};
                        D(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[fb(d[0])] = fb(ui(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }
            function Zg(a, c, b) {
                return !of.length || L(b, vi) ? !0 : O(function(d, e) {
                    return d && e(a, c, b)
                }, !0, of)
            }
            function Ub(a) {
                var c = H(a)
                  , b = c.C("hitId");
                b || (b = Ua(a),
                c.D("hitId", b));
                return b
            }
            function ci(a) {
                var c = a.match(wi);
                if (c) {
                    a = c[1];
                    if (c = c[2])
                        return L(c, pf) ? c : !1;
                    if (a)
                        return pf[0]
                }
                return !1
            }
            function S(a) {
                return O(function(c, b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, bo)
            }
            function We(a, c, b) {
                var d = Za(c);
                return d && Qh(a, c, Ha(["p", co[d], "c"]), Ve, b)
            }
            function Ue(a, c) {
                var b = Tb(qf, a, c);
                if (!b) {
                    var d = Tb("div", a, c);
                    d && (nb(qf + ",div", d).length || (b = d))
                }
                return b
            }
            function Qh(a, c, b, d, e) {
                return O(function(f, g) {
                    var h = null;
                    g in xi ? h = c.getAttribute && c.getAttribute(xi[g]) : g in vc && (h = "p" === g ? vc[g](a, c, e) : "c" === g ? vc[g](a, c, d) : vc[g](a, c));
                    h && (h = h.slice(0, yi[g] || 100),
                    f[g] = rf[g] ? "" + cc(h) : h);
                    return f
                }, {}, b)
            }
            function $g(a, c, b) {
                if (fd(a))
                    return Na(b.querySelectorAll(c));
                var d = zi(c.split(" "), b);
                return W(function(e, f) {
                    return ic(a)(e, d) === f
                }, d)
            }
            function zi(a, c) {
                var b = aa(a)
                  , d = b.shift();
                if (!d)
                    return [];
                d = c.getElementsByTagName(d);
                return b.length ? Ob(r(b, zi), Na(d)) : Na(d)
            }
            function dc(a, c) {
                if (c.querySelector)
                    return c.querySelector(a);
                var b = nb(a, c);
                return b && b.length ? b[0] : null
            }
            function nb(a, c) {
                if (!c || !c.querySelectorAll)
                    return [];
                var b = c.querySelectorAll(a);
                return b ? Na(b) : []
            }
            function Sh(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href")); )
                        a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }
            function nc(a, c) {
                var b = a.document
                  , d = y({
                    type: "text/javascript",
                    charset: "utf-8",
                    async: !0
                }, c)
                  , e = mb(a);
                if (e) {
                    var f = e("script");
                    ki(Ba, db(function(l) {
                        var m = l[0];
                        l = l[1];
                        "async" === m && l ? f.async = !0 : f[m] = l
                    }))(d);
                    try {
                        var g = Vb("getElementsByTagName", b)
                          , h = g("head")[0];
                        if (!h) {
                            var k = g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {}
                }
            }
            function eo(a, c, b) {
                var d = Ai(c);
                L(b, d.Ja) || d.Ja.push(b);
                if (cb(d.Fa)) {
                    b = mb(a);
                    if (!b)
                        return null;
                    b = b("iframe");
                    y(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = Pb(a);
                    if (!a)
                        return null;
                    a.appendChild(b);
                    d.Fa = b
                } else
                    (a = n(d.Fa, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.Fa
            }
            function fo(a, c) {
                var b = Z(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = J(", ", A(function(e) {
                        return "." + e
                    }, b));
                    return Na(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName)
                    return Ob(q(ra("getElementsByClassName", c), Na), b);
                d = c.getElementsByTagName("*");
                b = "(" + J("|", b) + ")";
                return W(r(b, gc), Na(d))
            }
            function sf(a, c, b) {
                for (var d = "", e = Te(), f = Za(c) || "*"; c && c.parentNode && !L(f, ["BODY", "HTML"]); )
                    d += e[f] || "*",
                    d += Bi(a, c, b) || "",
                    c = c.parentElement,
                    f = Za(c) || "*";
                return fb(d, 128)
            }
            function Bi(a, c, b) {
                if (a = Yd(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f])
                                return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }
            function Yd(a, c) {
                var b = n(a, "document");
                if (!c || c === b.documentElement)
                    return null;
                if (c === jc(a))
                    return b.documentElement;
                b = null;
                try {
                    b = c.parentNode
                } catch (d) {}
                return b
            }
            function Ne(a, c) {
                var b = tf(a, c)
                  , d = b.left;
                b = b.top;
                var e = Zd(a, c);
                return [d, b, e[0], e[1]]
            }
            function Zd(a, c) {
                var b = n(a, "document");
                return c === jc(a) || c === b.documentElement ? Tg(a) : (b = gd(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }
            function tf(a, c) {
                var b = c
                  , d = n(a, "document")
                  , e = Za(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === jc(a) || b === d.documentElement)
                    return {
                        left: 0,
                        top: 0
                    };
                if (d = gd(b))
                    return b = Ie(a),
                    {
                        left: Math.round(d.left + b.x),
                        top: Math.round(d.top + b.y)
                    };
                for (e = d = 0; b; )
                    d += b.offsetLeft,
                    e += b.offsetTop,
                    b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }
            function fb(a, c) {
                if (a) {
                    var b = Ci ? Ci.call(a) : ("" + a).replace(mi, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }
            function Tb(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b))
                    return null;
                if (c.Element.prototype.closest && za("closest", c.Element.prototype.closest) && b.closest)
                    return b.closest(a);
                var d = kh(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a); )
                        b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (fd(c)) {
                    for (a = Na((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === ic(c)(b, a); )
                        b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }
            function fd(a) {
                return !(!za("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }
            function Di(a, c, b) {
                var d = c.top
                  , e = c.bottom
                  , f = c.left
                  , g = b.w;
                b = b.h;
                a = a.Math;
                c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
            }
            function Ei(a) {
                return $d(a) && !Ja(la(a.type), go) ? Fi(a) ? !a.checked : !a.value : ho(a) ? !a.value : io(a) ? 0 > a.selectedIndex : !0
            }
            function Za(a) {
                if (a)
                    try {
                        var c = a.nodeName;
                        if (xa(c))
                            return c;
                        c = a.tagName;
                        if (xa(c))
                            return c
                    } catch (b) {}
            }
            function Gi(a, c) {
                var b = a.document.getElementsByTagName("form");
                return ic(a)(c, Na(b))
            }
            function jo(a, c, b) {
                b = Vb("dispatchEvent", b || a.document);
                var d = null
                  , e = n(a, "Event.prototype.constructor");
                if (e && (za("(Event|Object|constructor)", e) || uf(a) && "[object Event]" === "" + e))
                    try {
                        d = new a.Event(c)
                    } catch (f) {
                        if ((a = Vb("createEvent", n(a, "document"))) && U(a)) {
                            try {
                                d = a(c)
                            } catch (g) {}
                            d && d.initEvent && d.initEvent(c, !1, !1)
                        }
                    }
                d && b(d)
            }
            function gd(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.Lc && c.Lc & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }
            function Tg(a) {
                var c = Pb(a);
                a = Nc(a);
                return [Math.max(c.scrollWidth, a[0]), Math.max(c.scrollHeight, a[1])]
            }
            function Ie(a) {
                var c = jc(a)
                  , b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }
            function Nc(a) {
                var c = vf(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = Pb(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }
            function vf(a) {
                var c = n(a, "visualViewport.width")
                  , b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return qa(c) || qa(b) ? null : [Math.floor(c), Math.floor(b), a]
            }
            function Pb(a) {
                var c = n(a, "document") || {}
                  , b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : jc(a) || b
            }
            function jc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }
            function gc(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }
            function sb(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement)
                        !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }
            function bc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }
            function Gb(a) {
                return a ? a.innerText || "" : ""
            }
            function jh(a) {
                if (qa(a))
                    return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }
            function De(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c + "_";
                return {
                    Nb: ko(a),
                    C: function(e, f) {
                        var g = Hi(a, "" + d + e);
                        return cb(g) && !ba(f) ? f : g
                    },
                    D: function(e, f) {
                        Ii(a, "" + d + e, f);
                        return this
                    },
                    hb: function(e) {
                        Ji(a, "" + d + e);
                        return this
                    }
                }
            }
            function Ii(a, c, b) {
                var d = wf(a);
                a = kb(a, b);
                if (!cb(a))
                    try {
                        d.setItem(c, a)
                    } catch (e) {}
            }
            function Hi(a, c) {
                var b = wf(a);
                try {
                    return Bb(a, b.getItem(c))
                } catch (d) {}
                return null
            }
            function Ji(a, c) {
                var b = wf(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }
            function wf(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }
            function kb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }
            function wd(a, c, b) {
                void 0 === b && (b = null);
                a.qa || (a.qa = xf());
                c && a.qa.Bb(c, b);
                return a.qa
            }
            function ae(a) {
                return {
                    N: function(c, b) {
                        var d = a.document
                          , e = c.H;
                        if (e && yf(a)) {
                            var f = ha(a)
                              , g = function(h) {
                                yf(a) || (f.Za(d, Ki, g),
                                b());
                                return h
                            };
                            f.F(d, Ki, g);
                            e.D("pr", "1")
                        } else
                            b()
                    }
                }
            }
            function zf(a) {
                return function(c, b, d) {
                    return function(e, f) {
                        var g = Ia(Af(c, a, f), d);
                        return be(c, b, g)(e)
                    }
                }
            }
            function be(a, c, b) {
                var d = Hb(a, c);
                return function(e) {
                    return Li(b, e, !0).then(function() {
                        var f = e.$ || {}
                          , g = f.Xd
                          , h = void 0 === g ? "" : g;
                        g = f.ea;
                        var k = void 0 === g ? "" : g;
                        f = f.Yd;
                        f = A(function(l) {
                            return ta.Aa + "//" + ("" + h + l || Rb) + "/" + k
                        }, void 0 === f ? [Rb] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.yb;
                        f = f.jd;
                        e.te = g;
                        e.lf = f;
                        return Li(b, e).then(r(g, P))
                    })
                }
            }
            function Hb(a, c) {
                return function(b, d) {
                    return Mi(a, c, d, b)
                }
            }
            function Mi(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = y({
                    aa: []
                }, d.O)
                  , k = c[f]
                  , l = k[0];
                k = k[1];
                var m = b[e];
                h.va && h.va["Content-Type"] || !h.V || (h.va = y({}, h.va, (g = {},
                g["Content-Type"] = "application/x-www-form-urlencoded",
                g)),
                h.V = "site-info=" + Dd(h.V));
                h.$a = h.V ? "POST" : "GET";
                h.Ca = lo(a, d, l);
                h.ea = (d.$ || {}).ea;
                h.aa.push(l);
                y(d.O, h);
                g = "" + m + (d.Ba && d.Ba.je ? "/1" : "");
                var p = 0;
                p = mo(a, g, h);
                return k(g, h).then(function(t) {
                    var w = p, x, v;
                    eb(a, (x = {},
                    x.name = "requestSuccess",
                    x.data = (v = {},
                    v.body = t,
                    v.requestId = w,
                    v),
                    x));
                    return {
                        yb: t,
                        jd: e
                    }
                })["catch"](function(t) {
                    var w = p, x, v;
                    eb(a, (x = {},
                    x.name = "requestFail",
                    x.data = (v = {},
                    v.error = t,
                    v.requestId = w,
                    v),
                    x));
                    w = f + 1 >= c.length;
                    x = e + 1 >= b.length;
                    w && x && Sa(t);
                    return Mi(a, c, b, d, !x && w ? e + 1 : e, w ? 0 : f + 1)
                })
            }
            function lo(a, c, b) {
                var d = y({}, c.G);
                a = X(a);
                c.H && (d["browser-info"] = va(c.H.l()).D("st", a(mf)).wa());
                !d.t && (c = c.qa) && (c.D("ti", b),
                d.t = c.wa());
                return d
            }
            function mo(a, c, b) {
                var d, e, f, g = Ua(a), h = b.aa, k = b.V, l = b.va, m = b.Ca;
                b = b.$a;
                eb(a, (d = {},
                d.name = "request",
                d.data = (e = {},
                e.url = c,
                e.requestId = g,
                e.senderParams = (f = {},
                f.rBody = k,
                f.debugStack = h,
                f.rHeaders = l,
                f.rQuery = m,
                f.verb = b,
                f),
                e),
                d));
                return g
            }
            function pc(a) {
                return a ? q(Ba, Xe(function(c, b) {
                    var d = b[0]
                      , e = b[1];
                    ba(e) || qa(e) || c.push(d + "=" + Dd(e));
                    return c
                }, []), Sc("&"))(a) : ""
            }
            function no(a) {
                return a ? q(db(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], qa(b) ? void 0 : ui(b)]
                }), Xe(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }
            function ui(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }
            function Dd(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = J("", W(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }
            function Af(a, c, b) {
                return A(q(rc, uc([a, b]), fa), Ni[c] || [])
            }
            function Oi(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !qa(d) && Pi(a[c], b, d)
            }
            function Pi(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f]
                      , h = g[0];
                    g = g[1];
                    if (b === g && h === c)
                        return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }
            function Li(a, c, b) {
                void 0 === b && (b = !1);
                return new I(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        N: f,
                        ma: f
                    });
                    var h = ue(g, function(k, l) {
                        var m = b ? k.N : k.ma;
                        if (m)
                            try {
                                m(c, l)
                            } catch (p) {
                                h(oo),
                                e(p)
                            }
                        else
                            l()
                    });
                    h(Qi)
                }
                )
            }
            function ac(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ha(a);
                    var e = "__ym__promise_" + Ua(a) + "_" + Ua(a)
                      , f = F;
                    d = B(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(),
                        g.stopPropagation && g.stopPropagation(),
                        c())
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*")
                } else
                    da(a, c, 0, d)
            }
            function Hk(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = ue(c, b);
                wg(a, c, d)(lb(B(a, e), F))
            }
            function wg(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = po);
                Bf = Infinity === b;
                return Fa(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(qo);
                        if (c(ce))
                            return f(h),
                            Ri(a);
                        Bf ? (c(d(a, 1E4)),
                        f(h),
                        Ri(a)) : da(a, g, 100)
                    }
                    var h = [];
                    ro(g)
                })
            }
            function Ri(a) {
                if (Cf.length) {
                    var c = Cf.shift();
                    Bf ? c() : da(a, c, 100)
                } else
                    Df = !1
            }
            function ro(a) {
                Df ? Cf.push(a) : (Df = !0,
                a())
            }
            function Si(a) {
                return Fa(function(c, b) {
                    b(a)
                })
            }
            function tm(a) {
                return Fa(function(c, b) {
                    a.then(b, c)
                })
            }
            function sm(a) {
                var c = []
                  , b = !1;
                return Fa(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    D(function(g) {
                        g(lb(f, function(h) {
                            if (!b)
                                try {
                                    e(h),
                                    b = !0
                                } catch (k) {
                                    f(k)
                                }
                        }))
                    }, a)
                })
            }
            function lb(a, c) {
                return function(b) {
                    return b(a, c)
                }
            }
            function ue(a, c) {
                void 0 === c && (c = P);
                return Fa({
                    sb: a,
                    Ic: c,
                    cc: !1,
                    ha: 0
                })
            }
            function Qi(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.ha += 1
                    }
                    b = !1;
                    a.Ic(a.sb[a.ha], function() {
                        d()
                    });
                    b || (a.ha += 1,
                    d = r(a, Qi))
                }
                for (var b = !0; !ce(a) && b; )
                    c()
            }
            function po(a, c) {
                return function(b) {
                    var d = X(a)
                      , e = d(Y);
                    return so(function(f, g) {
                        d(Y) - e >= c && g(to)
                    })(b)
                }
            }
            function uo(a) {
                ce(a) && Sa(lc("i"));
                var c = a.Ic(a.sb[a.ha]);
                a.ha += 1;
                return c
            }
            function qo(a) {
                a.cc = !1
            }
            function to(a) {
                a.cc = !0
            }
            function oo(a) {
                a.ha = a.sb.length
            }
            function ce(a) {
                return a.cc || a.sb.length <= a.ha
            }
            function Oa(a) {
                a = X(a);
                return Math.round(a(Ti) / 50)
            }
            function Ti(a) {
                var c = a.ja
                  , b = c[1];
                a = c[0] && b ? b() : Y(a) - a.Zd;
                return Math.round(a)
            }
            function mf(a) {
                return Math.round(Y(a) / 1E3)
            }
            function bb(a) {
                return Math.floor(Y(a) / 1E3 / 60)
            }
            function Y(a) {
                var c = a.kc;
                return 0 !== c ? c : Ef(a.l, a.ja)
            }
            function hi(a) {
                var c = ha(a)
                  , b = Ui(a)
                  , d = {
                    l: a,
                    kc: 0,
                    ja: b,
                    Zd: Ef(a, b)
                }
                  , e = b[1];
                b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
                    0 === d.kc && (d.kc = Ef(a, d.ja))
                });
                return Fa(d)
            }
            function vo(a) {
                return (10 > a ? "0" : "") + a
            }
            function Ah(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1,
                    f = da(a, d, b),
                    e.W(h))
                }
                var e = Wc(a), f, g = !1, h;
                c.F(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return F
                });
                return e
            }
            function wo(a, c) {
                return a.clearInterval(c)
            }
            function xo(a, c, b, d) {
                return a.setInterval(B(a, "i.err." + (d || "def"), c), b)
            }
            function da(a, c, b, d) {
                return cd(a, B(a, "d.err." + (d || "def"), c), b)
            }
            function $e(a) {
                var c = {};
                return {
                    F: function(b, d) {
                        D(function(e) {
                            n(c, e) || (c[e] = Wc(a));
                            c[e].F(d)
                        }, b);
                        return this
                    },
                    vb: function(b, d) {
                        D(function(e) {
                            n(c, e) && c[e].vb(d)
                        }, b);
                        return this
                    },
                    W: function(b, d) {
                        return n(c, b) ? B(a, "e." + d, c[b].W)(d) : []
                    }
                }
            }
            function Wc(a) {
                var c = []
                  , b = {};
                b.ff = c;
                b.F = q(ra("push", c), r(b, P));
                b.vb = q(ob(ic(a))(c), ob(ra("splice", c))(1), r(b, P));
                b.W = q(P, ob(fa), yo(c));
                return b
            }
            function Vi(a, c, b, d, e) {
                var f = a.addEventListener && a.removeEventListener
                  , g = !f && a.attachEvent && a.detachEvent;
                if (f || g)
                    if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent",
                    f)
                        a[e](c, b, d);
                    else
                        a[e]("on" + c, b)
            }
            function z(a, c, b) {
                return function() {
                    return B(arguments[0], a, c, b).apply(this, arguments)
                }
            }
            function B(a, c, b, d, e) {
                var f = Sa
                  , g = b || f;
                return function() {
                    var h = d;
                    try {
                        h = g.apply(e || null, arguments)
                    } catch (k) {
                        Jd(a, c, k)
                    }
                    return h
                }
            }
            function Ef(a, c) {
                var b = c || Ui(a)
                  , d = b[0];
                b = b[1];
                return !isNaN(d) && U(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }
            function Ui(a) {
                a = Re(a);
                var c = n(a, "timing.navigationStart")
                  , b = n(a, "now");
                b && (b = M(b, a));
                return [c, b]
            }
            function Re(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }
            function Jd(a, c, b) {
                var d = "u.a.e"
                  , e = "";
                b && ("object" === typeof b ? (b.unk && Sa(b),
                d = b.message,
                e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                zo(d) || Ja(q(ra("indexOf", d), la(-1), Wb), Ao) || Bo(d) && .1 <= a.Math.random() || D(q(P, uc(["jserrs", d, c, e]), fa), Wi)
            }
            function oe() {
                var a = ua(arguments);
                return Sa(La(a))
            }
            function La(a) {
                var c = "";
                Z(a) ? c = J(".", a) : xa(a) && (c = a);
                return lc("err.kn(" + ta.bb + ")" + c)
            }
            function ji(a) {
                return lc("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
            }
            function Co(a) {
                this.message = a
            }
            function eb(a, c) {
                var b = c.fa;
                if (b) {
                    var d = b.split(":");
                    b = d[1];
                    d = Xi(Fg(d[0]));
                    if ("1" === b || d)
                        return
                }
                b = Do(a);
                1E3 === b.length && b.shift();
                b.push(c)
            }
            function Yi(a) {
                return O(function(c, b) {
                    c[pe[b[0]].da] = b[1];
                    return c
                }, {}, Ba(a))
            }
            function wc(a) {
                D(function(c) {
                    var b = c[1];
                    pe[c[0]] = {
                        da: b.da,
                        Va: b.Va
                    }
                }, Ba(a))
            }
            function Dk(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    T: d,
                    fb: e,
                    R: b
                };
                a = O(function(g, h) {
                    var k = h[1]
                      , l = k.Va;
                    k = f[k.da];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, Ba(c));
                Xh(a, a.R || {});
                return a
            }
            function Eo(a) {
                a = K(a);
                return Xb[a] && Xb[a].Be || null
            }
            function Zi(a) {
                a = K(a);
                return Xb[a] && Xb[a].Ae
            }
            function Xh(a, c) {
                var b = K(a)
                  , d = n(c, "__ym.turbo_page")
                  , e = n(c, "__ym.turbo_page_id");
                Xb[b] || (Xb[b] = {});
                if (d || e)
                    Xb[b].Ae = d,
                    Xb[b].Be = e
            }
            function Fo(a) {
                return Ff(a) || Id(a) || /mobile/i.test(Ya(a)) || !ba(n(a, "orientation"))
            }
            function Ae(a, c) {
                if (hd(a) && c) {
                    var b = Ya(a).match(Gf);
                    if (b && b.length)
                        return +b[1] >= c
                }
                return !1
            }
            function Be(a, c) {
                var b = Ya(a);
                return b && (b = b.match(Go)) && 1 < b.length ? Ma(b[1]) >= c : !1
            }
            function yf(a) {
                return L("prerender", A(r(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }
            function Ua(a, c, b) {
                var d = ba(b);
                ba(c) && d ? (d = 1,
                c = 1073741824) : d ? d = 1 : (d = c,
                c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }
            function Ho() {
                var a = ua(arguments)
                  , c = a[0];
                for (a = a.slice(1); a.length; ) {
                    var b = a.shift(), d;
                    for (d in b)
                        Zc(b, d) && (c[d] = b[d]);
                    Zc(b, "toString") && (c.toString = b.toString)
                }
                return c
            }
            function $i(a) {
                return ba(a) ? [] : id(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], aj(a))
            }
            function aj(a) {
                var c = [], b;
                for (b in a)
                    Zc(a, b) && c.push(b);
                return c
            }
            function Fg(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }
            function Ld(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Hf(c)
            }
            function Io(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b)
                    c[a.length - 1 - b] = a[b];
                return c
            }
            function Ia(a, c) {
                D(q(P, ra("push", a)), c);
                return a
            }
            function gf(a) {
                return a.splice(0, a.length)
            }
            function Na(a) {
                return a ? Z(a) ? a : de ? de(a) : "number" === typeof a.length && 0 <= a.length ? bj(a) : [] : []
            }
            function Od(a, c, b) {
                return b ? a : c
            }
            function Jo(a, c) {
                return id(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(Z(d) ? d : [d])
                }, [], c)
            }
            function cj(a, c) {
                return id(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }
            function Ko(a, c) {
                if (!hd(a))
                    return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }
            function Z(a) {
                if (jd)
                    return jd(a);
                (jd = Ca(Array.isArray, "isArray")) || (jd = Lo);
                return jd(a)
            }
            function dj(a, c) {
                return -1 !== (n(c, "navigator.userAgent") || "").toLowerCase().search(a)
            }
            function Mo(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1)
                    b += "" + (d ? a : "") + c[d];
                return b
            }
            function No(a, c) {
                return 1 <= ej(la(a), c).length
            }
            function Oo(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b))
                        return c[b]
            }
            function ej(a, c) {
                return id(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }
            function bf(a, c, b) {
                try {
                    if (U(c)) {
                        var d = ua(arguments).slice(3);
                        qa(b) ? c.apply(void 0, d) : M.apply(void 0, aa([c, b], d))()
                    }
                } catch (e) {
                    cd(a, r(e, Sa), 0)
                }
            }
            function Sa(a) {
                throw a;
            }
            function cd(a, c, b) {
                return Vb("setTimeout", a)(c, b)
            }
            function Ta(a, c) {
                return Vb("clearTimeout", a)(c)
            }
            function Vc() {
                return []
            }
            function xc() {
                return {}
            }
            function Vb(a, c) {
                var b = n(c, a)
                  , d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply)
                        return function() {
                            return d.apply(c, arguments)
                        }
                } catch (e) {
                    return b
                }
                return d
            }
            function xb(a, c, b) {
                return function() {
                    var d = ua(arguments)
                      , e = d[0];
                    d = d.slice(1);
                    var f = H(e)
                      , g = b ? "global" : "m1082"
                      , h = f.C(g, {})
                      , k = n(h, a);
                    k || (k = u(c),
                    h[a] = k,
                    f.D(g, h));
                    return k.apply(void 0, aa([e], d))
                }
            }
            function oc(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length)
                    return c;
                O(function(b, d, e) {
                    if (e === a.length - 1)
                        return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }
            function n(a, c) {
                return a ? O(function(b, d) {
                    if (qa(b))
                        return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }
            function kd(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    xa: function(b, d) {
                        If.call(c, b) || (c[b] = d);
                        return this
                    },
                    D: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    C: function(b, d) {
                        var e = c[b];
                        return If.call(c, b) || ba(d) ? e : d
                    }
                }
            }
            function Zc(a, c) {
                return qa(a) ? !1 : If.call(a, c)
            }
            function u(a, c) {
                var b = []
                  , d = [];
                var e = c ? c : P;
                return function() {
                    var f = ua(arguments)
                      , g = e.apply(void 0, f)
                      , h = fj(g, d);
                    if (-1 !== h)
                        return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }
            function ic(a) {
                if (Jf)
                    return Jf;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && Ca(a.Array.prototype.indexOf, "indexOf");
                return Jf = a = c && b ? function(d, e) {
                    return b.call(e, d)
                }
                : Po
            }
            function Po(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a)
                        return b;
                return -1
            }
            function fa(a, c) {
                return c ? a(c) : a()
            }
            function q() {
                var a = ua(arguments)
                  , c = a.shift();
                return function() {
                    var b = c.apply(void 0, arguments);
                    return O(gj, b, a)
                }
            }
            function Xe(a, c) {
                return E([a, c], O)
            }
            function id(a, c, b) {
                for (var d = 0, e = b.length; d < e; )
                    c = a(c, b[d], d),
                    d += 1;
                return c
            }
            function Qa(a) {
                return ra("test", a)
            }
            function ra(a, c) {
                return M(c[a], c)
            }
            function r(a, c) {
                return M(c, null, a)
            }
            function E(a, c) {
                return M.apply(void 0, aa([c, null], a))
            }
            function Qo() {
                var a = ua(arguments)
                  , c = a[0]
                  , b = a[1]
                  , d = a.slice(2);
                return function() {
                    var e = aa(d, ua(arguments));
                    if (Function.prototype.call)
                        return Function.prototype.call.apply(c, aa([b], e));
                    if (b) {
                        for (var f = "_b"; b[f]; )
                            f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && hj(f, e, b);
                        delete b[f];
                        return e
                    }
                    return hj(c, e)
                }
            }
            function hj(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length
                  , e = a;
                U(e) && (e = "d",
                b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }
            function ua(a) {
                if (de)
                    try {
                        return de(a)
                    } catch (c) {}
                return bj(a)
            }
            function bj(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1)
                    b.push(a[d]);
                return b
            }
            function Aa(a) {
                return !cb(a) && !ba(a) && "[object Object]" === Hf(a)
            }
            function qa(a) {
                return ba(a) || cb(a)
            }
            function U(a) {
                return "function" === typeof a
            }
            function ob(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }
            function na(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }
            function gj(a, c) {
                return c(a)
            }
            function rn(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(ef, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }
            function Ro(a) {
                return "" + a
            }
            function Lc(a, c) {
                return !(!a || -1 === ff(a, c))
            }
            function ff(a, c) {
                if (ij)
                    var b = ij.call(a, c);
                else
                    a: {
                        b = 0;
                        for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
                            b = a[e] === c[b] ? b + 1 : 0;
                            if (b === c.length) {
                                b = e - c.length + 1;
                                break a
                            }
                            if (!b && e > d)
                                break
                        }
                        b = -1
                    }
                return b
            }
            function xa(a) {
                return "string" === typeof a
            }
            function Hf(a) {
                return Object.prototype.toString.call(a)
            }
            function Kf(a, c) {
                Kf = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(b, d) {
                    b.__proto__ = d
                }
                || function(b, d) {
                    for (var e in d)
                        d.hasOwnProperty(e) && (b[e] = d[e])
                }
                ;
                return Kf(a, c)
            }
            function Ca(a, c) {
                return za(c, a) && a
            }
            function za(a, c) {
                var b = ee(a, c);
                c && !b && Lf.push([a, c]);
                return b
            }
            function ee(a, c) {
                if (!c || "function" !== typeof c)
                    return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length)
                    return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f)
                        return !0;
                    if (!f && g > e)
                        break
                }
                return !1
            }
            function F() {}
            function Wb(a) {
                return !a
            }
            function gb(a, c) {
                return c
            }
            function P(a) {
                return a
            }
            function ld(a, c) {
                function b() {
                    this.constructor = a
                }
                Kf(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype,
                new b)
            }
            function aa() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++)
                    a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++,
                    d++)
                        a[d] = e[f];
                return a
            }
            function So() {}
            function To(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }
            function wa(a) {
                if (!(this instanceof wa))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a)
                    throw new TypeError("not a function");
                this.sa = 0;
                this.pc = !1;
                this.za = void 0;
                this.Pa = [];
                jj(a, this)
            }
            function kj(a, c) {
                for (; 3 === a.sa; )
                    a = a.za;
                0 === a.sa ? a.Pa.push(c) : (a.pc = !0,
                wa.qc(function() {
                    var b = 1 === a.sa ? c.ne : c.oe;
                    if (null === b)
                        (1 === a.sa ? Mf : md)(c.promise, a.za);
                    else {
                        try {
                            var d = b(a.za)
                        } catch (e) {
                            md(c.promise, e);
                            return
                        }
                        Mf(c.promise, d)
                    }
                }))
            }
            function Mf(a, c) {
                try {
                    if (c === a)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof wa) {
                            a.sa = 3;
                            a.za = c;
                            Nf(a);
                            return
                        }
                        if ("function" === typeof b) {
                            jj(To(b, c), a);
                            return
                        }
                    }
                    a.sa = 1;
                    a.za = c;
                    Nf(a)
                } catch (d) {
                    md(a, d)
                }
            }
            function md(a, c) {
                a.sa = 2;
                a.za = c;
                Nf(a)
            }
            function Nf(a) {
                2 === a.sa && 0 === a.Pa.length && wa.qc(function() {
                    a.pc || wa.yd(a.za)
                });
                for (var c = 0, b = a.Pa.length; c < b; c++)
                    kj(a, a.Pa[c]);
                a.Pa = null
            }
            function Uo(a, c, b) {
                this.ne = "function" === typeof a ? a : null;
                this.oe = "function" === typeof c ? c : null;
                this.promise = b
            }
            function jj(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0,
                        Mf(c, d))
                    }, function(d) {
                        b || (b = !0,
                        md(c, d))
                    })
                } catch (d) {
                    b || (b = !0,
                    md(c, d))
                }
            }
            function Bb(a, c) {
                if (!c)
                    return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }
            function cc(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
                    c ^= a.charCodeAt(d),
                    c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }
            function si(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return nf(a, c, "", -100, b, d, e)
            }
            function Ic(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = Vo(a)
                  , e = 1 === (d || "").split(".").length ? d : "." + d
                  , f = b ? "_" + b : "";
                return {
                    hb: function(g, h, k) {
                        si(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    C: function(g) {
                        return Fd(a, "" + c + g + f)
                    },
                    D: function(g, h, k, l, m) {
                        nf(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }
            function Ek(a, c, b, d) {
                var e = lj[b];
                return e ? function() {
                    var f = ua(arguments);
                    try {
                        var g = d.apply(void 0, f);
                        var h = H(a);
                        h.xa("mt", {});
                        var k = h.C("mt")
                          , l = k[e];
                        k[e] = l ? l + 1 : 1
                    } catch (m) {
                        Sa(m)
                    }
                    return g
                }
                : d
            }
            function Rd(a, c) {
                var b = Wo(a);
                return b ? (b.href = c,
                {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }
            function mj(a) {
                return (a = S(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }
            function Xo(a, c) {
                var b = mj(a);
                nj = xo(a, function() {
                    var d = mj(a);
                    d !== b && (c(),
                    b = d)
                }, 200, "t.h");
                return M(wo, null, a, nj)
            }
            function Yo(a, c, b) {
                var d, e, f = c.T, g = c.nc, h = c.mb, k = H(a), l = va((d = {},
                d.wh = 1,
                d.pv = 1,
                d));
                qe(f) && a.Ya && a.Ya.Direct && l.D("ad", "1");
                g && l.D("ut", "1");
                f = k.C("lastReferrer");
                d = S(a).href;
                h = {
                    G: (e = {},
                    e["page-url"] = h || d,
                    e["page-ref"] = f,
                    e),
                    H: l
                };
                b(h, c)["catch"](B(a, "g.s"));
                k.D("lastReferrer", d)
            }
            function Zo(a, c, b) {
                function d() {
                    Ta(a, h);
                    g(!1)
                }
                function e() {
                    k = !0;
                    g(!1);
                    c()
                }
                function f() {
                    Ta(a, h);
                    if (k)
                        g(!1);
                    else {
                        var N = Math.max(0, b - (t ? w : w + l(Y) - x));
                        N ? h = da(a, e, N, "u.t.d.c") : e()
                    }
                }
                function g(N) {
                    D(function(R) {
                        var ea = R[0]
                          , ia = R[1];
                        R = R[2];
                        N ? v.F(ea, ia, R) : v.Za(ea, ia, R)
                    }, C)
                }
                var h = 0
                  , k = !1;
                if (uf(a))
                    return h = da(a, c, b, "u.t.d"),
                    d;
                var l = X(a)
                  , m = !1
                  , p = !1
                  , t = !0
                  , w = 0
                  , x = l(Y)
                  , v = ha(a)
                  , C = [[a, ["blur"], function() {
                    t = m = p = !0;
                    w += l(Y) - x;
                    x = l(Y);
                    f()
                }
                ], [a, ["focus"], function() {
                    m || p || (w = 0);
                    x = l(Y);
                    m = p = !0;
                    t = !1;
                    f()
                }
                ], [a.document, ["click", "mousemove", "keydown", "scroll"], function() {
                    p || (m = !0,
                    t = !1,
                    p = !0,
                    f())
                }
                ]];
                g(!0);
                f();
                return d
            }
            function ne(a, c, b, d) {
                return function() {
                    if (ya(a, c)) {
                        var e = ua(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }
            function hb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }
            function Yb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }
            function yc(a, c) {
                c %= 64;
                if (32 === c)
                    return [a[1], a[0]];
                if (32 > c)
                    return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }
            function $a(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }
            function ka(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }
            function oj(a) {
                a = ka(a, [0, a[0] >>> 1]);
                a = hb(a, [4283543511, 3981806797]);
                a = ka(a, [0, a[0] >>> 1]);
                a = hb(a, [3301882366, 444984403]);
                return a = ka(a, [0, a[0] >>> 1])
            }
            function $o(a, c) {
                void 0 === c && (c = 210);
                var b = a || ""
                  , d = c || 0
                  , e = b.length - b.length % 16;
                d = {
                    K: [0, d],
                    L: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d
                      , h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24]
                      , k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = hb(h, fe);
                    h = yc(h, 31);
                    h = hb(h, ge);
                    g.K = ka(g.K, h);
                    g.K = yc(g.K, 27);
                    g.K = Yb(g.K, g.L);
                    g.K = Yb(hb(g.K, [0, 5]), [0, 1390208809]);
                    k = hb(k, ge);
                    k = yc(k, 33);
                    k = hb(k, fe);
                    g.L = ka(g.L, k);
                    g.L = yc(g.L, 31);
                    g.L = Yb(g.L, g.K);
                    g.L = Yb(hb(g.L, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                case 15:
                    h = ka(h, $a([0, b.charCodeAt(f + 14)], 48));
                case 14:
                    h = ka(h, $a([0, b.charCodeAt(f + 13)], 40));
                case 13:
                    h = ka(h, $a([0, b.charCodeAt(f + 12)], 32));
                case 12:
                    h = ka(h, $a([0, b.charCodeAt(f + 11)], 24));
                case 11:
                    h = ka(h, $a([0, b.charCodeAt(f + 10)], 16));
                case 10:
                    h = ka(h, $a([0, b.charCodeAt(f + 9)], 8));
                case 9:
                    h = ka(h, [0, b.charCodeAt(f + 8)]),
                    h = hb(h, ge),
                    h = yc(h, 33),
                    h = hb(h, fe),
                    d.L = ka(d.L, h);
                case 8:
                    g = ka(g, $a([0, b.charCodeAt(f + 7)], 56));
                case 7:
                    g = ka(g, $a([0, b.charCodeAt(f + 6)], 48));
                case 6:
                    g = ka(g, $a([0, b.charCodeAt(f + 5)], 40));
                case 5:
                    g = ka(g, $a([0, b.charCodeAt(f + 4)], 32));
                case 4:
                    g = ka(g, $a([0, b.charCodeAt(f + 3)], 24));
                case 3:
                    g = ka(g, $a([0, b.charCodeAt(f + 2)], 16));
                case 2:
                    g = ka(g, $a([0, b.charCodeAt(f + 1)], 8));
                case 1:
                    g = ka(g, [0, b.charCodeAt(f)]),
                    g = hb(g, fe),
                    g = yc(g, 31),
                    g = hb(g, ge),
                    d.K = ka(d.K, g)
                }
                d.K = ka(d.K, [0, b.length]);
                d.L = ka(d.L, [0, b.length]);
                d.K = Yb(d.K, d.L);
                d.L = Yb(d.L, d.K);
                d.K = oj(d.K);
                d.L = oj(d.L);
                d.K = Yb(d.K, d.L);
                d.L = Yb(d.L, d.K);
                return ("00000000" + (d.K[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.K[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.L[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.L[1] >>> 0).toString(16)).slice(-8)
            }
            function nd(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = nb('[itemprop~="' + b + '"]', c);
                return d ? W(function(e) {
                    return e.parentNode && Tb("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }
            function Wa(a, c, b) {
                return (a = nd(a, c, b)) && a.length ? a[0] : null
            }
            function Ra(a) {
                if (!a)
                    return "";
                a = Z(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Gb(a[0]) : ""
            }
            function pj(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Ra(a) : ""
            }
            function Qc(a, c, b) {
                a = c && (Lc(c.className, "ym-disable-keys") || Lc(c.className, "-metrika-nokeys"));
                return b && c ? a || !!fo(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }
            function gh(a, c) {
                return $d(c) ? "password" === c.type || c.name && L(c.name.toLowerCase(), qj) || c.id && L(c.id.toLowerCase(), qj) : !1
            }
            function rj(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                Ia(a, [b >> 8, b & 255])
            }
            function Pa(a, c) {
                Ia(a, [c & 255])
            }
            function Va(a, c, b) {
                Pa(c, b);
                return !1
            }
            function G(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b; )
                    Ia(a, [b & 127 | 128]),
                    b >>= 7;
                Ia(a, [b])
            }
            function Of(a, c) {
                G(a, c.length);
                for (var b = 0; b < c.length; b += 1)
                    G(a, c.charCodeAt(b))
            }
            function Pf(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1)
                    rj(a, b.charCodeAt(d))
            }
            function ap(a, c) {
                var b = [];
                if (Va(a, b, 27))
                    return [];
                G(b, c);
                return b
            }
            function bp(a, c) {
                var b = Za(c);
                if (!b)
                    return c[Ea] = -1,
                    null;
                var d = +c[Ea];
                if (!isFinite(d) || 0 >= d)
                    return null;
                if (c.attributes)
                    for (var e = c; e; ) {
                        if (e.attributes.Se)
                            return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = Yd(a, c)
                  , g = f && f[Ea] ? f[Ea] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = cp()[b];
                h || (e |= 2);
                var k = Bi(a, c);
                k || (e |= 4);
                var l = Ne(a, c);
                (f = f ? Ne(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                fc[d].Nc = l[0] + "x" + l[1];
                fc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (Va(a, f, 1))
                    return null;
                G(f, d);
                Pa(f, e);
                G(f, g);
                h ? Pa(f, h) : Pf(f, b);
                k && G(f, k);
                e & 8 || (G(f, l[0]),
                G(f, l[1]),
                G(f, l[2]),
                G(f, l[3]));
                e & 32 && Pf(f, c.id);
                Pa(f, 0);
                return f
            }
            function dp(a, c) {
                var b = c[Ea];
                if (!b || 0 > b || !Le(c) || !c.form || ih(a, c.form))
                    return [];
                var d = Gi(a, c.form);
                if (0 > d)
                    return [];
                if ($d(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        gb: 0,
                        Xe: 0,
                        "datetime-local": 0,
                        email: 0,
                        Lc: 0,
                        kf: 0,
                        search: 0,
                        pf: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        rf: 0,
                        password: 2,
                        jf: 3,
                        Ve: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        Pe: 1,
                        Qe: 5
                    };
                    var f = Za(c);
                    e = ba(f) ? "" : e[f]
                }
                if ("number" !== typeof e)
                    return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f)
                    return [];
                g = [];
                if (Va(a, g, 7))
                    return [];
                G(g, b);
                G(g, d);
                G(g, e);
                Of(g, c.name || "");
                G(g, f);
                return g
            }
            function Sg(a, c, b, d, e, f, g) {
                var h;
                var k = Zd(a, d);
                var l = k[0];
                for (k = k[1]; d && (!l || !k); )
                    if (d = Yd(a, d))
                        k = Zd(a, d),
                        l = k[0],
                        k = k[1];
                if (!d)
                    return [];
                l = d[Ea];
                if (!l || 0 > l)
                    return [];
                k = (h = {},
                h.mousemove = 2,
                h.click = 32,
                h.dblclick = 33,
                h.mousedown = 4,
                h.mouseup = 30,
                h.touch = 12,
                h)[b];
                if (!k)
                    return [];
                h = [];
                d = tf(a, d);
                if (Va(a, h, k))
                    return [];
                G(h, c);
                G(h, l);
                G(h, Math.max(0, e[0] - d.left));
                G(h, Math.max(0, e[1] - d.top));
                /^mouse(up|down)|click$/.test(b) && (a = f || g,
                Pa(h, 2 > a ? 1 : a === (f ? 2 : 4) ? 4 : 2));
                return h
            }
            function tb(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !dm(a, c, b); c = Yd(a, c))
                    d.push(c);
                D(function(e) {
                    fc.counter += 1;
                    var f = fc.counter;
                    e[Ea] = f;
                    fc[f] = {};
                    f = bp(a, e);
                    e = dp(a, e);
                    f && e && (Ia(b, f),
                    Ia(b, e))
                }, ep(d));
                return b
            }
            function fp(a) {
                var c = a.Y;
                if (!Pc || c && !c.fromElement)
                    return dh(a)
            }
            function gp(a) {
                var c = a.Y;
                if (c && !c.toElement)
                    return Me(a)
            }
            function sj(a) {
                var c = sb(a.Y);
                if (c && Gd(c)) {
                    var b = ch(a, c);
                    var d = Oa(a.l)
                      , e = [];
                    Va(a.l, e, 17) ? a = [] : (G(e, d),
                    G(e, c[Ea]),
                    a = e);
                    return aa(b, a)
                }
            }
            function tj(a) {
                var c = a.l
                  , b = a.Y.target;
                if (b && Gd(b)) {
                    c = tb(c, b);
                    var d = Oa(a.l)
                      , e = [];
                    Va(a.l, e, 18) ? a = [] : (G(e, d),
                    G(e, b[Ea]),
                    a = e);
                    return aa(c, a)
                }
            }
            function uj(a) {
                var c = a.l
                  , b = sb(a.Y);
                if (!b || gh(c, b) || Qc(c, b))
                    return [];
                if (Le(b)) {
                    var d = H(c).C("isEU")
                      , e = Hd(c, b, d)
                      , f = e.Ia;
                    d = e.qb;
                    e = e.lb;
                    if (Fi(b))
                        var g = b.checked;
                    else
                        g = b.value,
                        g = f ? J("", vj(g.split(""))) : g;
                    c = tb(c, b);
                    f = Oa(a.l);
                    d = d && !e;
                    e = [];
                    Va(a.l, e, 39) ? a = [] : (G(e, f),
                    G(e, b[Ea]),
                    Pf(e, String(g)),
                    Pa(e, d ? 1 : 0),
                    a = e);
                    return aa(c, a)
                }
            }
            function Oc(a) {
                var c = a.l
                  , b = a.Y
                  , d = sb(b);
                if (!d || "SCROLLBAR" === d.nodeName)
                    return [];
                var e = []
                  , f = r(e, Ia);
                d && Gd(d) ? f(ch(a, d)) : f(tb(c, d));
                f = Ed(c, b);
                return aa(e, Sg(c, Oa(a.l), b.type, d, [f.x, f.y], b.which, b.button))
            }
            function hp(a) {
                var c = null
                  , b = a.l
                  , d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (cb(d))
                        return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else
                    d.selection && d.selection.createRange && (d = d.selection.createRange(),
                    e = d.text,
                    c = d.parentElement());
                if ("string" !== typeof e)
                    return [];
                try {
                    for (; c && 1 !== c.nodeType; )
                        c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c)
                    return [];
                d = Hd(b, c).Ia || Qc(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d; )
                    d = c[f],
                    d = Hd(b, d).Ia || Qc(b, d, !0),
                    f += 1;
                if (e !== Qf)
                    return Qf = e,
                    d = d ? J("", vj(e.split(""))) : e,
                    e = Oa(a.l),
                    0 === d.length ? d = b = "" : 100 >= d.length ? (b = d,
                    d = "") : 200 >= d.length ? (b = d.substr(0, 100),
                    d = d.substr(100)) : (b = d.substr(0, 97),
                    d = d.substr(d.length - 97)),
                    c = [],
                    Va(a.l, c, 29) ? a = [] : (G(c, e),
                    Of(c, b),
                    Of(c, d),
                    a = c),
                    a
            }
            function ip(a) {
                return aa(Oc(a), hp(a) || [])
            }
            function wj(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }
            function xj(a) {
                var c = [];
                Rf || (Rf = !0,
                Qf && c.push.apply(c, ap(a.l, Oa(a.l))),
                ac(a.l, function() {
                    Rf = !1
                }, "fv.c"));
                return c
            }
            function yj(a, c, b, d) {
                c = sb(c);
                if (!c || Oe(a, c))
                    return [];
                var e = Hd(a, c)
                  , f = e.qb
                  , g = e.lb;
                e = e.Ia;
                var h = H(a);
                if (!g && (f && h.C("isEU") || Qc(a, c)))
                    a = [];
                else {
                    f = tb(a, c);
                    h = Oa(a);
                    g = [];
                    if (Va(a, g, 38))
                        a = [];
                    else {
                        G(g, h);
                        rj(g, b);
                        Pa(g, d);
                        a = c[Ea];
                        if (!a || 0 > a)
                            a = 0;
                        G(g, a);
                        Pa(g, e ? 1 : 0);
                        a = g
                    }
                    a = aa(f, a)
                }
                return a
            }
            function jp(a) {
                var c = a.l
                  , b = a.Y
                  , d = b.keyCode
                  , e = wj(b)
                  , f = []
                  , g = r(f, Ia);
                if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16)
                    19 === d && 4 === (e & -17) && (d = 144),
                    g(yj(c, b, d, e | 16)),
                    Sf = !1,
                    ac(c, function() {
                        Sf = !0
                    }, "fv.kd"),
                    !(67 === d && e & 4) || e & 1 || e & 2 || g(xj(a));
                return f
            }
            function kp(a) {
                var c = a.l;
                a = a.Y;
                var b = [];
                Sf && !Tf && 0 !== a.which && (b.push.apply(b, yj(c, a, a.charCode || a.keyCode, wj(a))),
                Tf = !0,
                ac(c, function() {
                    Tf = !1
                }, "fv.kp"));
                return b
            }
            function zj(a) {
                var c = a.l
                  , b = sb(a.Y);
                if (!b || ih(c, b))
                    return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1)
                        Ei(e[f]) || d.push.apply(d, tb(c, e[f]));
                    e = d.push;
                    f = e.apply;
                    a = Oa(a.l);
                    var g = Gi(c, b);
                    if (0 > g)
                        c = [];
                    else {
                        var h = b.elements
                          , k = h.length;
                        b = [];
                        for (var l = 0; l < k; l += 1)
                            if (!Ei(h[l])) {
                                var m = h[l][Ea];
                                m && 0 < m && b.push(m)
                            }
                        h = [];
                        if (Va(c, h, 11))
                            c = [];
                        else {
                            G(h, a);
                            G(h, g);
                            G(h, b.length);
                            for (c = 0; c < b.length; c += 1)
                                G(h, b[c]);
                            c = h
                        }
                    }
                    f.call(e, d, c)
                }
                return d
            }
            function lp(a) {
                var c = a.flush;
                a = sb(a.Y);
                "BODY" === Za(a) && c()
            }
            function El(a, c) {
                var b, d = sb(c), e = ta.Eb, f = kd(a);
                if (d && gc("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1;
                    f.D("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ma(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)
                        (e = n(a, "Ya." + e + ".informer")) ? e((b = {},
                        b.i = d,
                        b.id = h,
                        b.lang = g,
                        b)) : f.D("ib", !0),
                        b = c || window.event,
                        b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }
            function qg(a, c, b, d) {
                return function() {
                    var e = ua(arguments);
                    e = d.apply(void 0, e);
                    return ba(e) ? ya(a, c) : e
                }
            }
            function pg(a, c, b, d) {
                return B(a, "cm." + b, d)
            }
            function Ck(a, c, b, d, e) {
                return b.length && e ? E(O(function(f, g, h) {
                    return b[h] ? f.concat(E([a, c, d], g)) : f
                }, [], b), q)()(e) : e
            }
            var zc = {
                construct: "Metrika",
                callbackPostfix: "",
                version: "7sp2sdh4awvfxhcq9eu02an",
                host: "mc.yandex.ru"
            }, Lf = [], ef = /\./g, ij = Ca(String.prototype.indexOf, "indexOf"), la = na(function(a, c) {
                return a === c
            }), Mc = na(function(a, c) {
                a(c);
                return c
            }), Fa = na(gj), cb = la(null), ba = la(void 0), de = Ca(Array.from, "from"), Aj = Ca(Function.prototype.bind, "bind"), M = Aj ? function() {
                var a = ua(arguments);
                return Aj.apply(a[0], aa([a[1]], a.slice(2)))
            }
            : Qo, uc = na(E), zh = na(ra), Bj = Ca(Array.prototype.reduce, "reduce"), O = Bj ? function(a, c, b) {
                return Bj.call(b, a, c)
            }
            : id, ki = q, Mh = q(P, fa), Jf, fj = ic(window), mp = ob(fj), If = Object.prototype.hasOwnProperty, H = u(kd), T = ob(n), Da = T("length"), qh = Array.prototype.every ? function(a, c) {
                return Array.prototype.every.call(c, a)
            }
            : function(a, c) {
                return O(function(b, d) {
                    return b ? a(d) : !1
                }, !0, c)
            }
            , Cj = Ca(Array.prototype.filter, "filter"), W = Cj ? function(a, c) {
                return Cj.call(c, a)
            }
            : ej, Ha = r(Boolean, W), Uf = na(W), Qb = za("find", Array.prototype.find) ? function(a, c) {
                return Array.prototype.find.call(c, a)
            }
            : Oo, L = Array.prototype.includes ? function(a, c) {
                return Array.prototype.includes.call(c, a)
            }
            : No, hc = ob(L), Dj = Ca(Array.prototype.join, "join"), J = Dj ? function(a, c) {
                return Dj.call(c, a)
            }
            : Mo, Sc = na(J), Ej = u(function(a) {
                a = n(a, "navigator") || {};
                var c = n(a, "userAgent") || "";
                return {
                    Ec: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                    kd: c
                }
            }), Ya = u(T("navigator.userAgent")), Fj = u(r(/gecko/, dj)), Gf = /Firefox\/([0-9]+)/i, hd = u(function(a) {
                var c = n(a, "document.documentElement.style")
                  , b = n(a, "InstallTrigger");
                a = dj(Gf, a);
                Gf.lastIndex = 0;
                return !(!(c && "MozAppearance"in c) || qa(b)) || a
            }), jd, Lo = q(Hf, la("[object Array]")), Gj = Ca(Array.prototype.map, "map"), A = Gj && Ko(window, Array.prototype.map) ? function(a, c) {
                return c && 0 < c.length ? Gj.call(c, a) : []
            }
            : cj, D = A, Ob = Array.prototype.flatMap ? function(a, c) {
                return Array.prototype.flatMap.call(c, a)
            }
            : Jo, db = na(A), yo = ob(A), Ja = Od(function(a, c) {
                return Array.prototype.some.call(c, a)
            }, function(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (b in c && a.call(c, c[b], b))
                        return !0;
                return !1
            }, za("some", Array.prototype.some)), cf = u(ic), rc = T("0"), np = na(function(a, c) {
                return Array.prototype.sort.call(c, a)
            }), Hj = Ca(Array.prototype.reverse, "reverse"), ep = Hj ? function(a) {
                return Hj.call(a)
            }
            : Io, Ij = ob(parseInt), Ma = Ij(10), Vf = Ij(2), Ba = Object.entries ? function(a) {
                return a ? Object.entries(a) : []
            }
            : $i, ja = Object.keys ? Object.keys : aj, op = q($i, r(T("1"), cj)), pp = Object.values ? Object.values : op, y = Object.assign || Ho, bh = na(function(a, c) {
                return y({}, a, c)
            }), Bd = u(q(T("String.fromCharCode"), r("fromCharCode", za), Wb)), Ff = u(q(Ya, Qa(/ipad|iphone|ipod/i))), Qe = u(function(a) {
                return n(a, "navigator.platform") || ""
            }), Tc = u(function(a) {
                a = Ej(a);
                var c = a.kd;
                return a.Ec && !c.match("CriOS")
            }), qp = Qa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/), rp = Qa(/; wv\)/), Rc = u(function(a) {
                a = Ya(a);
                return rp(a) || qp(a)
            }), sp = /Chrome\/(\d+)\./, tp = u(function(a) {
                return (a = (n(a, "navigator.userAgent") || "").match(sp)) && a.length ? 76 <= Ma(a[1]) : !1
            }), Id = u(function(a) {
                var c = (Ya(a) || "").toLowerCase();
                a = Qe(a);
                return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
            }), up = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), vp = u(function(a) {
                var c = n(a, "navigator.connection.type");
                if (ba(c))
                    return null;
                a = cf(a)(c, up);
                return -1 === a ? c : "" + a
            }), uf = u(q(T("document.addEventListener"), Wb)), Jj = u(function(a) {
                var c = n(a, "navigator") || {};
                return O(function(b, d) {
                    return b || n(c, d)
                }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
            }), sg = u(function(a) {
                var c = n(a, "navigator") || {};
                a = Jj(a);
                xa(a) || (a = "",
                c = n(c, "languages.0"),
                xa(c) && (a = c));
                return a.toLowerCase().split("-")[0]
            }), Ab = u(function(a) {
                var c = !1;
                try {
                    c = a.top !== a
                } catch (b) {}
                return c
            }), wp = u(function(a) {
                var c = !1;
                try {
                    c = a.top.contentWindow
                } catch (b) {}
                return c
            }), xp = u(function(a) {
                var c = !1;
                try {
                    c = a.navigator.javaEnabled()
                } catch (b) {}
                return c
            }), yp = u(function(a) {
                var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" ")
                  , b = n(a, "external");
                b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                var d = n(a, "document.documentElement")
                  , e = ["selenium", "webdriver", "driver"];
                return !!(Ja(r(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Ja(r(n(a, "document"), n), c) || b || d && Ja(M(d.getAttribute, d), e))
            }), zp = u(function(a) {
                return !!(Ja(r(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(Ya(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
            }), Ap = u(function(a) {
                return qh(r(a, n), ["ia_document.shareURL", "ia_document.referrer"])
            }), od = u(function(a) {
                var c = Ya(a) || ""
                  , b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                b = b ? [+b[1], +b[2]] : [0, 0];
                c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                return 14 <= (c ? +c[1] : 0) ? !0 : (Ff(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Tc(a)
            }), Go = /Edg\/(\d+)\./, kf = u(function(a) {
                return od(a) || Ae(a, 68) || Be(a, 79)
            }), Bp = zc.construct, Rb = zc.host, Wf = uf(window), ta = {
                vd: 24226447,
                od: 26302566,
                xd: 51533966,
                Ne: 65446441,
                Aa: "https:",
                bb: "1082",
                Eb: Bp,
                ud: Wf ? 512 : 2048,
                rd: Wf ? 512 : 2048,
                sd: Wf ? 100 : 400,
                Oe: 100,
                wd: "noindex"
            }, he = [], K = u(function(a) {
                return a.id + ":" + a.T
            }), Xb = {}, qe = la("1"), Cp = setTimeout;
            wa.prototype["catch"] = function(a) {
                return this.then(null, a)
            }
            ;
            wa.prototype.then = function(a, c) {
                var b = new this.constructor(So);
                kj(this, new Uo(a,c,b));
                return b
            }
            ;
            wa.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            }
            ;
            wa.all = function(a) {
                return new wa(function(c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length)
                        return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length)
                        return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++)
                        d(g, e[g])
                }
                )
            }
            ;
            wa.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === wa ? a : new wa(function(c) {
                    c(a)
                }
                )
            }
            ;
            wa.reject = function(a) {
                return new wa(function(c, b) {
                    b(a)
                }
                )
            }
            ;
            wa.race = function(a) {
                return new wa(function(c, b) {
                    if (!a || "undefined" === typeof a.length)
                        return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++)
                        wa.resolve(a[d]).then(c, b)
                }
                )
            }
            ;
            wa.qc = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            }
            || function(a) {
                Cp(a, 0)
            }
            ;
            wa.yd = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            }
            ;
            var I = window.Promise
              , Dp = Ca(I, "Promise")
              , Kj = Ca(n(I, "resolve"), "resolve")
              , Lj = Ca(n(I, "reject"), "reject")
              , Mj = Ca(n(I, "all"), "all");
            if (L(!1, [Dp, Kj, Lj, Mj]))
                I = wa;
            else {
                var ie = function(a) {
                    return new Promise(a)
                };
                ie.resolve = M(Kj, I);
                ie.reject = M(Lj, I);
                ie.all = M(Mj, I);
                I = ie
            }
            var yb = []
              , Q = []
              , Hc = []
              , ud = []
              , Xf = []
              , Yf = []
              , Xi = hc([26812653])
              , ei = u(q(T("id"), Xi), K)
              , Ib = {
                id: "id",
                nc: "ut",
                T: "type",
                Rb: "ldc",
                Ha: "nck",
                mb: "url",
                Pd: "referrer"
            }
              , Ep = /^\d+$/
              , Ac = {
                id: function(a) {
                    a = "" + (a || "0");
                    Ep.test(a) || (a = "0");
                    try {
                        var c = Ma(a)
                    } catch (b) {
                        c = 0
                    }
                    return c
                },
                T: function(a) {
                    return "" + (a || 0 === a ? a : "0")
                },
                Ha: Boolean,
                nc: Boolean
            };
            Ib.fb = "defer";
            Ac.fb = Boolean;
            Ib.R = "params";
            Ac.R = function(a) {
                return Aa(a) || Z(a) ? a : null
            }
            ;
            Ib.lc = "userParams";
            Ib.gd = "triggerEvent";
            Ac.gd = Boolean;
            Ib.Wc = "sendTitle";
            Ac.Wc = function(a) {
                return !!a || ba(a)
            }
            ;
            Ib.fc = "trackHash";
            Ac.fc = Boolean;
            Ib.ed = "trackLinks";
            Ib.Jd = "enableAll";
            var pe = O(function(a, c) {
                var b = c[0];
                a[b] = {
                    da: c[1],
                    Va: Ac[b]
                };
                return a
            }, {}, Ba(Ib)), Do = xb("debuggerEvents", Vc, !0), Ao = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], pd, lc = function(a) {
                return function(c, b) {
                    void 0 === b && (b = !1);
                    if (pd)
                        var d = new pd(c);
                    else
                        za("Error", a.Error) ? (pd = a.Error,
                        d = new a.Error(c)) : (pd = Co,
                        d = new pd(c));
                    b && (d.unk = !0);
                    return d
                }
            }(window), Bo = Qa(/^http./), zo = Qa(/^err.kn/), Wi = [], Fp = u(function(a) {
                var c = !1;
                if (!a.addEventListener)
                    return c;
                try {
                    var b = Object.defineProperty({}, "passive", {
                        get: function() {
                            c = !0;
                            return 1
                        }
                    });
                    a.addEventListener("test", F, b)
                } catch (d) {}
                return c
            }), Gp = na(function(a, c) {
                return a ? y({
                    capture: !0,
                    passive: !0
                }, c || {}) : !!c
            }), ha = u(function(a) {
                a = Fp(a);
                var c = Gp(a)
                  , b = {};
                return y(b, {
                    F: function(d, e, f, g) {
                        D(function(h) {
                            var k = c(g);
                            Vi(d, h, f, k, !1)
                        }, e);
                        return M(b.Za, b, d, e, f, g)
                    },
                    Za: function(d, e, f, g) {
                        D(function(h) {
                            var k = c(g);
                            Vi(d, h, f, k, !0)
                        }, e)
                    }
                })
            }), X = u(hi), so = na(function(a, c) {
                for (var b = []; !ce(c); ) {
                    var d = uo(c);
                    a(d, function(e) {
                        return e(c)
                    });
                    b.push(d)
                }
                return b
            }), Cf = [], Df = !1, Bf = !1, Nj = na(function(a, c) {
                var b = c || {};
                return {
                    l: r(b, P),
                    C: function(d, e) {
                        var f = b[d];
                        return ba(f) && !ba(e) ? e : f
                    },
                    D: function(d, e) {
                        b[d] = e;
                        return this
                    },
                    Bb: function(d, e) {
                        return "" === e || qa(e) ? this : this.D(d, e)
                    },
                    wa: r(b, a)
                }
            }), va = Nj(function(a) {
                var c = "";
                a = O(function(b, d) {
                    var e = d[0]
                      , f = "" + e + ":" + d[1];
                    "t" === e ? c = f : b.push(f);
                    return b
                }, [], Ba(a));
                c && a.push(c);
                return J(":", a)
            }), Zf, Ni = (Zf = {},
            Zf.w = [[function(a, c) {
                return {
                    N: function(b, d) {
                        var e, f = b.G;
                        f = (e = {},
                        e["page-url"] = f && f["page-url"] || "",
                        e.charset = "utf-8",
                        e);
                        "0" !== c.T && (f["cnt-class"] = c.T);
                        b.H || (b.H = va());
                        e = b.H;
                        var g = b.O;
                        f = {
                            $: {
                                ea: "watch/" + c.id
                            },
                            O: y(void 0 === g ? {} : g, {
                                Oa: !(!e.C("pv") || e.C("ar") || e.C("wh"))
                            }),
                            G: y(b.G || {}, f)
                        };
                        y(b, f);
                        d()
                    }
                }
            }
            , 1]],
            Zf), Hp = r(Ni, Oi), ab = zf("w"), Ki = ["webkitvisibilitychange", "visibilitychange"], xf = Nj(function(a) {
                a = Ba(a);
                return J("", A(function(c) {
                    var b = c[0];
                    c = c[1];
                    return cb(c) ? "" : b + "(" + c + ")"
                }, a))
            }), Oj = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "), sn = /^ *(data|javascript):/i, Th = new RegExp(J("", ["\\.(" + J("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]),"i"), Ga, lj = (Ga = {},
            Ga.hit = "h",
            Ga.params = "p",
            Ga.reachGoal = "g",
            Ga.userParams = "up",
            Ga.trackHash = "th",
            Ga.accurateTrackBounce = "atb",
            Ga.notBounce = "nb",
            Ga.addFileExtension = "fe",
            Ga.extLink = "el",
            Ga.file = "fc",
            Ga.trackLinks = "tl",
            Ga.destruct = "d",
            Ga.setUserID = "ui",
            Ga.getClientID = "ci",
            Ga.clickmap = "cm",
            Ga.enableAll = "ea",
            Ga), Ip = u(function() {
                var a = 0;
                return function() {
                    return a += 1
                }
            }), Jp = q(K, Ip, fa), lf = {
                mc: function(a) {
                    a = kd(a).C("mt", {});
                    a = Ba(a);
                    return a.length ? O(function(c, b, d) {
                        return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                    }, "", a) : null
                },
                clc: function(a) {
                    var c = H(a).C("cls", {
                        eb: 0,
                        x: 0,
                        y: 0
                    })
                      , b = c.eb
                      , d = c.x;
                    c = c.y;
                    return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                },
                rqnt: function(a, c, b) {
                    a = b.G;
                    return !a || a.nohit ? null : Jp(c)
                }
            }, Jb = E([1, null], Od), je = E([1, 0], Od), ko = u(function(a) {
                Ii(a, "_ymBRC", "1");
                var c = "1" !== Hi(a, "_ymBRC");
                c || Ji(a, "_ymBRC");
                return c
            }), Ka = u(De), Bc = u(De, function(a, c, b) {
                return "" + c + b
            }), Kp = u(function(a) {
                a = n(a, "document") || {};
                return ("" + (a.characterSet || a.charset || "")).toLowerCase()
            }), mb = u(q(T("document"), r("createElement", Vb))), kh = u(function(a) {
                var c = n(a, "Element.prototype");
                return c ? (a = Qb(function(b) {
                    return za(b, c[b])
                }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
            }), Lp = la("INPUT"), $d = q(Za, Lp), Mp = la("TEXTAREA"), ho = q(Za, Mp), Np = la("SELECT"), io = q(Za, Np), Fi = q(T("type"), Qa(/^(checkbox|radio)$/)), Le = q(Za, Qa(/^INPUT|SELECT|TEXTAREA$/)), Gd = q(Za, Qa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), go = ["submit", "image", "hidden"], mi = /^\s+|\s+$/g, Ci = Ca(String.prototype.trim, "trim"), Pj = na(function(a, c) {
                return c.replace(a, "")
            }), Dh = Pj(/\s/g), Cb = Pj(/\D/g), Te = u(function() {
                for (var a = 59, c = {}, b = 0; b < Oj.length; b += 1)
                    c[Oj[b]] = String.fromCharCode(a),
                    a += 1;
                return c
            }), Ai = u(function(a) {
                return {
                    $e: a,
                    Fa: null,
                    Ja: []
                }
            }), yi = {}, rf = {};
            yi.p = 500;
            var xi = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            rf.h = !0;
            rf.c = !0;
            var vc = {};
            vc.p = sf;
            vc.c = function(a, c, b) {
                (a = fb(n(c, "textContent"))) && b && (b = b(c),
                b.length && Ja(q(T("textContent"), fb, la(a)), b) && (a = ""));
                $d(c) && (a = fb(c.getAttribute && c.getAttribute("value") || a));
                return a
            }
            ;
            var Cc, qf = "button," + A(function(a) {
                return 'input[type="' + a + '"]'
            }, ["button", "submit", "reset", "file"]).join(",") + ",a", Ve = r(qf, nb), co = (Cc = {},
            Cc.A = "h",
            Cc.BUTTON = "i",
            Cc.DIV = "i",
            Cc.INPUT = "ty",
            Cc), bo = "hash host hostname href pathname port protocol search".split(" "), pf = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "), wi = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/, Sd = u(function(a) {
                return (a ? a.replace(/^www\./, "") : "").toLowerCase()
            }), Op = u(function(a) {
                a = S(a).hostname;
                var c = !1;
                a && (c = -1 !== a.search(wi));
                return c
            }), Qj = q(S, T("protocol"), la("https:")), Rj = /\/$/, Pp = u(q(X, Fa(function(a) {
                return -(new a.l.Date).getTimezoneOffset()
            }))), Qp = q(X, Fa(function(a) {
                a = new a.l.Date;
                return J("", A(vo, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
            })), Rp = q(X, Fa(mf)), Sj = u(q(X, Fa(function(a) {
                return a.ja[0]
            }))), Sp = u(xc), $n = u(function(a) {
                return tp(a) && Qj(a) ? "SameSite=None;Secure;" : ""
            }), vi = ["metrika_enabled"], of = [], ti = xb("gsc", ri), ao = /:\d+$/, Vo = u(function(a) {
                var c = (S(a).host || "").split(".");
                return 1 === c.length ? c[0] : O(function(b, d, e) {
                    e += 1;
                    2 <= e && !b && (e = J(".", c.slice(-e)),
                    Yg(a, e) && (b = e));
                    return b
                }, "", c)
            }), ec = u(Ic), qi = xb("r", function(a, c) {
                var b = pi(a, c)
                  , d = b[0];
                return !b[1] && d
            }), dd = u(function() {
                return {
                    oa: {},
                    pending: {},
                    children: {}
                }
            }), $f = T("postMessage"), Tp = z("s.f", function(a, c, b, d, e) {
                c = c(d);
                var f = dd(a)
                  , g = J(":", [c.meta.gb, c.meta.key]);
                if ($f(b)) {
                    f.pending[g] = e;
                    try {
                        b.postMessage(c.cd, "*")
                    } catch (h) {
                        delete f.pending[g];
                        return
                    }
                    da(a, function() {
                        delete f.pending[g]
                    }, 5E3, "if.s")
                }
            }), Up = z("s.fh", function(a, c, b, d, e, f) {
                var g = null
                  , h = null
                  , k = dd(a)
                  , l = null;
                try {
                    g = Bb(a, f.data),
                    h = g.__yminfo,
                    l = g.data
                } catch (m) {
                    return
                }
                if (!qa(h) && h.substring && "__yminfo" === h.substring(0, 8) && !qa(l) && (g = h.split(":"),
                4 === g.length))
                    if (h = c.id,
                    c = g[1],
                    a = g[2],
                    g = g[3],
                    !Z(l) && l.type && "0" === g && l.counterId) {
                        if (!l.toCounter || l.toCounter == h) {
                            k = null;
                            try {
                                k = f.source
                            } catch (m) {}
                            !cb(k) && $f(k) && (f = d.W(l.type, [f, l]),
                            e = A(q(P, bh(e)), f.concat([{}])),
                            l = b([c, a, l.counterId], e),
                            k.postMessage(l.cd, "*"))
                        }
                    } else
                        g === "" + h && Z(l) && W(function(m) {
                            return !(!m.hid || !m.counterId)
                        }, l).length === l.length && (b = k.pending[J(":", [c, a])]) && b.apply(null, [f].concat(l))
            }), Jc = u(function(a, c) {
                var b, d = Vb("getElementsByTagName", n(a, "document")), e = dd(a), f = $f(a), g = $e(a), h = ha(a);
                if (!d || !f)
                    return null;
                d = d.call(a.document, "iframe");
                f = (b = {},
                b.counterId = c.id,
                b.hid = "" + Ub(a),
                b);
                kf(a) && (f.duid = ed(a, c));
                Wn(a, g);
                Xn(a);
                b = Yn(a, f);
                var k = E([a, r([], b)], Tp);
                D(function(l) {
                    var m = null;
                    try {
                        m = l.contentWindow
                    } catch (p) {}
                    m && k(m, {
                        type: "initToChild"
                    }, function(p, t) {
                        g.W("initToParent", [p, t])
                    })
                }, d);
                Ab(a) && k(a.parent, {
                    type: "initToParent"
                }, function(l, m) {
                    g.W("parentConnect", [l, m])
                });
                h.F(a, ["message"], E([a, c, b, g, f], Up));
                return {
                    X: g,
                    oa: e.oa,
                    children: e.children,
                    $b: k
                }
            }, q(gb, K)), Kc = u(function(a, c) {
                if (!kf(a) || !Ab(a))
                    return ed(a, c);
                var b = Jc(a, c);
                return b && b.oa[c.id] ? b.oa[c.id].info.duid || ed(a, c) : ed(a, c)
            }, function(a, c) {
                return "{" + c.Rb + c.Ha
            }), Vp = u(function(a) {
                a = H(a);
                var c = a.C("counterNum", 0) + 1;
                a.D("counterNum", c);
                return c
            }, q(gb, K)), ca, Xd = (ca = {},
            ca.vf = r(zc.version, P),
            ca.nt = vp,
            ca.fp = function(a, c, b) {
                if (b.G && b.G.nohit)
                    return null;
                c = K(c);
                b = Sp(a);
                if (b[c])
                    return null;
                a: {
                    var d = Sj(a)
                      , e = n(a, "performance.getEntriesByType");
                    if (U(e)) {
                        if (a = W(q(P, T("name"), la("first-contentful-paint")), e.call(a.performance, "paint")),
                        a.length) {
                            a = a[0].startTime;
                            break a
                        }
                    } else {
                        e = n(a, "chrome.loadTimes");
                        if (U(e) && (e = e.call(a.chrome),
                        e = n(e, "firstPaintTime"),
                        d && e)) {
                            a = 1E3 * e - d;
                            break a
                        }
                        if (a = n(a, "performance.timing.msFirstPaint")) {
                            a -= d;
                            break a
                        }
                    }
                    a = void 0
                }
                return a ? (b[c] = a,
                Math.round(a)) : null
            }
            ,
            ca.fu = function(a, c, b) {
                var d = b.G;
                if (!d)
                    return null;
                c = (n(a, "document.referrer") || "").replace(Rj, "");
                b = (d["page-ref"] || "").replace(Rj, "");
                d = d["page-url"];
                a = S(a).href !== d;
                c = c !== b;
                b = 0;
                a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                return b
            }
            ,
            ca.en = Kp,
            ca.la = Jj,
            ca.ut = function(a, c, b) {
                var d = b.M;
                b = b.G;
                d = d && d.tb;
                b && (Op(a) || c.nc || d) && (b.ut = ta.wd);
                return null
            }
            ,
            ca.v = r(ta.bb, P),
            ca.cn = Vp,
            ca.dp = function(a) {
                var c = H(a)
                  , b = c.C("bt", {});
                if (ba(c.C("bt"))) {
                    var d = n(a, "navigator.getBattery");
                    try {
                        b.p = d && d.call(a.navigator)
                    } catch (e) {}
                    c.D("bt", b);
                    b.p && b.p.then && b.p.then(B(a, "bi:dp.p", function(e) {
                        b.He = n(e, "charging") && 0 === n(e, "chargingTime")
                    }))
                }
                return je(b.He)
            }
            ,
            ca.ls = u(function(a, c) {
                var b = Bc(a, c.id)
                  , d = X(a)
                  , e = b.C("lsid");
                return +e ? e : (d = Ua(a, 0, d(Y)),
                b.D("lsid", d),
                d)
            }, gb),
            ca.hid = Ub,
            ca.phid = function(a, c) {
                if (!Ab(a))
                    return null;
                var b = Jc(a, c);
                if (!b)
                    return null;
                var d = ja(b.oa);
                return d.length ? b.oa[d[0]].info.hid : null
            }
            ,
            ca.z = Pp,
            ca.i = Qp,
            ca.et = Rp,
            ca.c = q(T("navigator.cookieEnabled"), Jb),
            ca.rn = q(P, Ua),
            ca.rqn = function(a, c, b) {
                b = b.G;
                if (!b || b.nohit)
                    return null;
                c = K(c);
                a = Bc(a, c);
                c = (a.C("reqNum", 0) || 0) + 1;
                a.D("reqNum", c);
                if (a.C("reqNum") === c)
                    return c;
                a.hb("reqNum");
                return null
            }
            ,
            ca.u = Kc,
            ca.w = function(a) {
                a = Nc(a);
                return a[0] + "x" + a[1]
            }
            ,
            ca.s = function(a) {
                var c = n(a, "screen");
                if (c) {
                    a = n(c, "width");
                    var b = n(c, "height");
                    c = n(c, "colorDepth") || n(c, "pixelDepth");
                    return J("x", [a, b, c])
                }
                return null
            }
            ,
            ca.sk = T("devicePixelRatio"),
            ca.ifr = q(Ab, Jb),
            ca.j = q(xp, Jb),
            ca.sti = function(a) {
                return Ab(a) ? wp(a) ? "1" : null : null
            }
            ,
            ca), Vn = u(function() {
                return Ia(ja(Xd), ja(lf))
            }), Un = u(xc, K), ni = u(function() {
                return {
                    xc: null,
                    ga: []
                }
            }, K), Rn = /^[a-z][\w.+-]+:/i, ag, Eb = [[ae, 1], [Wd, 2], [Fb(), 3], [oi, 4]], Vd = [], pb = r(Eb, Pi), Db = (ag = {},
            ag.h = Eb,
            ag), V = r(Db, Oi);
            pb(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.G;
                        if (!c.H || !d)
                            return b();
                        var e = d["page-ref"]
                          , f = d["page-url"];
                        e && f !== e ? d["page-ref"] = li(a, e) : delete d["page-ref"];
                        d["page-url"] = li(a, f).slice(0, ta.ud);
                        return b()
                    }
                }
            }, -100);
            var Nn = /[^a-z0-9.:-]/, bg, cg = {}, Tj = Ha([hf && [hf, 0], vb && [vb, 1], [wb, 2], bd && [bd, 3], [tc, 4]]), Zb = Ha([hf, vb, wb, bd, tc]), dg = [wb];
            dg.unshift(vb);
            dg.push(bd);
            var Uj = Ha(dg)
              , Dc = Ha([tc]);
            Ha([vb, wb]);
            var Wp = Ha([vb, tc]), Vj = Ha([vb, wb, bd, tc]), oa = (bg = {},
            bg.h = Uj,
            bg), eg = u(function(a, c) {
                var b = cg["*"] ? cg["*"] : c && cg[c];
                b || (b = c ? oa[c] || [] : Zb);
                b = O(function(d, e) {
                    var f = e(a);
                    if (f) {
                        var g = Qb(q(rc, la(e)), Tj);
                        g && d.push([g[1], f])
                    }
                    return d
                }, [], b);
                b.length || oe();
                return b
            }, gb), fg, Xp = M(I.reject, I, La()), pa = (fg = {},
            fg.h = ab,
            fg), ma = z("g.sen", function(a, c, b) {
                var d = eg(a, c);
                b = b ? Qn(a, c, b) : [];
                var e = pa[c]
                  , f = e ? e(a, d, b) : ab(a, d, b);
                return function() {
                    var g = ua(arguments)
                      , h = g[0];
                    g = g.slice(1);
                    var k = h.O;
                    h = y(h, {
                        O: y(void 0 === k ? {} : k, {
                            aa: [c]
                        })
                    });
                    return f.apply(void 0, aa([h], g))
                }
            }, Xp), Fn = na(function(a, c) {
                if (!c[a]) {
                    var b, d = new I(function(e) {
                        b = e
                    }
                    );
                    c[a] = {
                        Tc: b,
                        promise: d,
                        Uc: !1
                    }
                }
                return c[a].promise
            }), gi = u(q(xc, Fa)), qd = u(function(a, c) {
                var b = n(a, "console")
                  , d = n(b, "log");
                d = ee("log", d) ? M(d, b) : F;
                var e = n(b, "warn");
                e = ee("warn", e) ? M(e, b) : d;
                var f = n(b, "error");
                b = ee("error", f) ? M(f, b) : d;
                return {
                    log: sc(a, "log", c, d),
                    error: sc(a, "error", c, b),
                    warn: sc(a, "warn", c, e)
                }
            }), Yp = z("dc.init", function(a, c) {
                function b(k) {
                    for (var l = [], m = 1; m < arguments.length; m++)
                        l[m - 1] = arguments[m];
                    H(a).C("dce:" + c, !1) && e[k].apply(e, l);
                    H(a).C("dclq:" + c).push([k, l])
                }
                var d = S(a)
                  , e = qd(a, c);
                H(a).xa("dclq:" + c, []);
                var f = ec(a)
                  , g = fi(a)
                  , h = g.$d;
                g = g.Wd;
                h && !g && f.D("debug", "1", void 0, d.host);
                return h || g ? {
                    log: r("log", b),
                    warn: r("warn", b),
                    error: r("error", b)
                } : En(a, c)
            }), Ud = u(Yp, gb), Zp = z("p.dc", function(a, c) {
                var b = K(c);
                di(a, "");
                di(a, b)
            }), Fk = B(window, "h.p", function(a, c) {
                var b, d, e = ma(a, "h", c), f = c.mb || "" + S(a).href, g = c.Pd || a.document.referrer, h = {
                    H: va((b = {},
                    b.pv = 1,
                    b)),
                    G: (d = {},
                    d["page-url"] = f,
                    d["page-ref"] = g,
                    d),
                    M: {}
                };
                h.M.R = c.R;
                h.M.lc = c.lc;
                c.fb && h.G && (h.G.nohit = "1");
                return e(h, c).then(function(k) {
                    k && (c.fb || ub(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.R)(),
                    ac(a, E([a, c, k], Gn)))
                })["catch"](B(a, "h.g.s"))
            }), gg = ["yandex_metrika_callback" + zc.callbackPostfix, "yandex_metrika_callbacks" + zc.callbackPostfix], $p = z("cb.i", function(a) {
                var c = gg[0]
                  , b = gg[1];
                if (U(a[c]))
                    a[c]();
                "object" === typeof a[b] && D(function(d, e) {
                    a[b][e] = null;
                    bf(a, d)
                }, a[b]);
                D(function(d) {
                    try {
                        delete a[d]
                    } catch (e) {
                        a[d] = void 0
                    }
                }, gg)
            }), Wj = u(function(a) {
                return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a, "FileReader") && n(a, "Blob")
            }), aq = z("fpm", function(a, c) {
                if (!Qj(a))
                    return F;
                var b = K(c);
                if (!Wj(a))
                    return zb(a, b, "Not supported"),
                    F;
                var d = ya(a, c);
                return d ? function(e) {
                    return (new I(function(f, g) {
                        return Aa(e) ? ja(e).length ? f(ai(a, e).then(function(h) {
                            var k, l;
                            h && h.length && d.params((k = {},
                            k.__ym = (l = {},
                            l.fpp = h,
                            l),
                            k))
                        }, F)) : g(La("fpm.l")) : g(La("fpm.o"))
                    }
                    ))["catch"](B(a, "fpm.en"))
                }
                : F
            }), ke = na(function(a, c) {
                var b = {};
                df(a)(function(d) {
                    b = d[c] || {}
                });
                return b
            }), bq = z("c.c.cc", function(a) {
                var c = H(a)
                  , b = q(ke(a), function(d) {
                    var e, f = (e = {},
                    e.clickmap = !!d.clickmap,
                    e);
                    return y({}, d, f)
                });
                return B(a, "g.c.cc", q(M(c.C, c, "counters", {}), ja, db(b)))
            }), cq = z("gt.c.rs", function(a, c) {
                var b, d = K(c), e = c.id, f = c.T, g = c.Cd, h = c.fc, k = E([a, d], An);
                Zh(a, d, (b = {},
                b.id = e,
                b.type = +f,
                b.clickmap = g,
                b.trackHash = !!h,
                b));
                return k
            }), Yh = u(Vc), ad = u(xc, K), dq = z("pa.int", function(a, c) {
                var b;
                return b = {},
                b.params = function() {
                    var d, e, f = ua(arguments), g = zn(f);
                    if (!g)
                        return null;
                    f = g.Gd;
                    var h = g.R;
                    g = g.cb;
                    if (!Aa(h) && !Z(h))
                        return null;
                    var k = ma(a, "1", c)
                      , l = ad(c).url
                      , m = !ei(c)
                      , p = "arams. Counter " + c.id
                      , t = "P" + p
                      , w = h
                      , x = "";
                    (x = n(h, "__ym.user_id")) && (t = "Set user id " + x);
                    L("__ymu", ja(h)) && (t = "User p" + p);
                    w.__ym && (w = y({}, h),
                    w.__ym = O(function(v, C) {
                        var N = n(h, "__ym." + C);
                        N && (v[C] = N);
                        return v
                    }, {}, he),
                    ja(w.__ym).length || delete w.__ym,
                    m = !!ja(w).length);
                    w = x ? void 0 : JSON.stringify(w);
                    p = ub(a, c, t, w);
                    k = k({
                        M: {
                            R: h
                        },
                        H: va((d = {},
                        d.pa = 1,
                        d.ar = 1,
                        d)),
                        G: (e = {},
                        e["page-url"] = l || S(a).href,
                        e)
                    }, c).then(m ? p : F);
                    return qc(a, "p.s", k, g, f)
                }
                ,
                b
            }), Ad = u(Vh, q(gb, K)), eq = z("y.p", function(a, c) {
                var b = Vh(a, c);
                if (b) {
                    var d = vd(a)
                      , e = E([a, b, c], vn);
                    vg(a, d, function(f) {
                        f.F(["params"], e)
                    });
                    b.X.F(["params"], q(T("1"), e))
                }
            }), Wo = u(function(a) {
                if (a = mb(a))
                    return a("a")
            }), Xj = {
                df: Qa(/[/&=?#]/)
            }, Nd = z("go.in", function(a, c, b, d) {
                var e;
                void 0 === b && (b = "goal");
                return e = {},
                e.reachGoal = function(f, g, h, k) {
                    var l, m;
                    if (!f || Xj[b] && Xj[b](f))
                        return null;
                    var p = g
                      , t = h || F;
                    U(g) && (t = g,
                    p = void 0,
                    k = h);
                    var w = ub(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + f, p)
                      , x = "goal" === b;
                    g = ma(a, "g", c);
                    var v = un(a, c, f, b);
                    h = v[0];
                    v = v[1];
                    p = g({
                        M: {
                            R: p
                        },
                        H: va((l = {},
                        l.ar = 1,
                        l)),
                        G: (m = {},
                        m["page-url"] = h,
                        m["page-ref"] = v,
                        m)
                    }, c).then(function() {
                        var C, N;
                        x && w();
                        eb(a, (C = {},
                        C.counterKey = K(c),
                        C.name = "event",
                        C.data = (N = {},
                        N.schema = b,
                        N.name = f,
                        N),
                        C));
                        d && d()
                    });
                    return qc(a, "g.s", p, t, k)
                }
                ,
                e
            }), fq = z("guid.int", function(a, c) {
                var b;
                return b = {},
                b.getClientID = function(d) {
                    var e = ed(a, c);
                    d && bf(a, d, null, e);
                    return e
                }
                ,
                b
            }), nj, gq = z("th.e", function(a, c) {
                function b() {
                    g || (k = Zc(a, "onhashchange") ? ha(a).F(a, ["hashchange"], h) : Xo(a, h))
                }
                var d, e = ma(a, "t", c), f = Td(a, K(c)), g = !1, h = B(a, "h.h.ch", M(Yo, null, a, c, e)), k = F;
                c.fc && (b(),
                g = !0);
                e = B(a, "tr.hs.h", function(l) {
                    var m;
                    l ? b() : k();
                    g = !!l;
                    f((m = {},
                    m.trackHash = g,
                    m))
                });
                return d = {},
                d.trackHash = e,
                d.u = k,
                d
            }), hq = na(function(a, c) {
                xa(c) ? a.push(c) : D(q(P, ra("push", a)), c)
            }), iq = z("cl.p", function(a, c) {
                function b(p, t, w, x) {
                    void 0 === x && (x = {});
                    w ? Qd(a, c, {
                        url: w,
                        Ga: !0,
                        pb: p,
                        tb: t,
                        sender: e,
                        ld: x
                    }) : g.warn("Empty link")
                }
                var d, e = ma(a, "2", c), f = [], g = qd(a, K(c)), h = K(c), k = B(a, "s.s.tr", r(Td(a, h), tn));
                h = {
                    l: a,
                    Ea: c,
                    Md: f,
                    sender: e,
                    cf: H(a),
                    Fd: Bc(a, c.id),
                    ef: Ub(a),
                    Ce: r(r(h, ke(a)), q(fa, T("trackLinks")))
                };
                h = B(a, "cl.p.c", r(h, qn));
                h = ha(a).F(a, ["click"], h);
                c.ed && k(c.ed);
                var l = B(a, "file.clc", E([!0, !1], b))
                  , m = B(a, "e.l.l.clc", E([!1, !0], b));
                f = B(a, "add.f.e.clc", hq(f));
                return d = {},
                d.file = l,
                d.extLink = m,
                d.addFileExtension = f,
                d.trackLinks = k,
                d.u = h,
                d
            }), $c = xb("retryReqs", function(a) {
                var c = Ka(a)
                  , b = c.C("retryReqs", {})
                  , d = X(a)(Y);
                D(function(e) {
                    var f = e[0];
                    e = e[1];
                    (!e || !e.time || e.time + 864E5 < d) && delete b[f]
                }, Ba(b));
                c.D("retryReqs", b);
                return b
            }, !0), Yj = ob(q(ff, la(0))), jq = [Yj("watch"), Yj("clmap")], kq = z("g.r", function(a) {
                var c = X(a)
                  , b = $c(a)
                  , d = c(Y)
                  , e = Ub(a);
                return O(function(f, g) {
                    var h = g[0]
                      , k = g[1];
                    k && Ja(Fa(k.resource), jq) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1,
                    h = {
                        protocol: k.protocol,
                        host: k.host,
                        ea: k.resource,
                        pe: k.postParams,
                        R: k.params,
                        zd: k.browserInfo,
                        bf: k.ghid,
                        time: k.time,
                        Xa: Ma(h),
                        Ed: k.counterId,
                        T: k.counterType
                    },
                    k.telemetry && (h.qa = k.telemetry),
                    f.push(h));
                    return f
                }, [], Ba(b))
            }), lq = z("nb.p", function(a, c) {
                function b(C) {
                    l() || (C = "number" === typeof C ? C : 15E3,
                    v = Zo(a, d(!1), C),
                    m())
                }
                function d(C) {
                    return function(N) {
                        var R, ea, ia;
                        void 0 === N && (N = (R = {},
                        R.ctx = {},
                        R.callback = F,
                        R));
                        if (C || !w && !k.Nb) {
                            w = !0;
                            m();
                            v && v();
                            var Kb = p(Y);
                            R = (Ma(k.C("lastHit")) || 0) < Kb - 18E5;
                            var hg = .1 > Math.random();
                            k.D("lastHit", Kb);
                            Kb = va((ea = {},
                            ea.nb = 1,
                            ea.cl = x,
                            ea.ar = 1,
                            ea));
                            ea = ad(c);
                            ea = {
                                G: (ia = {},
                                ia["page-url"] = ea.url || S(a).href,
                                ia),
                                H: Kb,
                                M: {
                                    force: C
                                }
                            };
                            ia = qd(a, K(c)).warn;
                            !N.callback && N.ctx && ia('"callback" argument missing');
                            (ia = C || R || hg) || (ia = a.location.href,
                            R = a.document.referrer,
                            ia = !(ia && R ? Uh(ia) === Uh(R) : !ia && !R));
                            if (ia)
                                return ia = g(ea, c),
                                qc(a, "l.o.l", ia, N.callback, N.ctx)
                        }
                        return null
                    }
                }
                var e, f, g = ma(a, "n", c), h = K(c), k = Bc(a, c.id), l = r(r(h, ke(a)), q(fa, T("accurateTrackBounce"))), m = r((e = {},
                e.accurateTrackBounce = !0,
                e), Td(a, h)), p = X(a), t = p(Y), w = !1, x = 0, v;
                sa(c, function(C) {
                    x = C.Od - t
                });
                c.rc && b(c.rc);
                e = (f = {},
                f.notBounce = d(!0),
                f.u = v,
                f);
                e.accurateTrackBounce = b;
                return e
            }), nn = na(gc)("(ym-disable-clickmap|ym-clickmap-ignore)"), mq = z("clm.p", function(a, c) {
                if (Bd(a))
                    return F;
                var b = ma(a, "m", c), d = K(c), e = X(a), f = e(Y), g = r(r(d, ke(a)), q(fa, T("clickmap"))), h, k = null;
                d = B(a, "clm.p.c", function(l) {
                    var m = g();
                    if (m) {
                        var p = H(a)
                          , t = p.C("cls", {
                            eb: 0,
                            x: 0,
                            y: 0
                        });
                        p.D("cls", {
                            eb: t.eb + 1,
                            x: t.x + l.clientX,
                            y: t.y + l.clientY
                        });
                        p = "object" === typeof m ? m : {};
                        t = p.filter;
                        m = p.isTrackHash || !1;
                        var w = A(function(v) {
                            return ("" + v).toUpperCase()
                        }, p.ignoreTags || []);
                        ba(h) && (h = p.quota || null);
                        var x = !!p.quota;
                        l = {
                            element: on(a, l),
                            position: Ed(a, l),
                            button: pn(l),
                            time: e(Y)
                        };
                        p = S(a).href;
                        if (mn(a, l, k, w, t)) {
                            if (x) {
                                if (!h)
                                    return;
                                --h
                            }
                            w = Zd(a, l.element);
                            t = w[0];
                            w = w[1];
                            x = tf(a, l.element);
                            t = ["rn", Ua(a), "x", Math.floor(65535 * (l.position.x - x.left) / (t || 1)), "y", Math.floor(65535 * (l.position.y - x.top) / (w || 1)), "t", Math.floor((l.time - f) / 100), "p", sf(a, l.element), "X", l.position.x, "Y", l.position.y];
                            t = J(":", t);
                            m && (t += ":wh:1");
                            ln(a, p, t, b, c);
                            k = l
                        }
                    }
                });
                return ha(a).F(n(a, "document"), ["click"], d)
            }), nq = z("trigger.in", function(a, c) {
                c.gd && ac(a, E([a, "yacounter" + c.id + "inited"], jo), "t.i")
            }), oq = z("c.m.p", function(a, c) {
                var b, d = K(c);
                return b = {},
                b.clickmap = r(Td(a, d), kn),
                b
            }), sh = r("form", Tb), Um = r("form", nb), jn = u(q(gb, ob(sa)(T("settings.form_goals"))), gb), pq = r(!0, Oh), qq = z("s.f.i", function(a, c) {
                var b = [];
                ha(a).F(a, ["click"], B(a, "s.f.c", E([a, c, b], hn)));
                ha(a).F(a, ["submit"], B(a, "s.f.e", q(T("target"), E([a, c, b], pq))));
                Ph(a, c, "Form goal. Counter " + c.id + ". Init.")
            }), rq = z("s.f.i", function(a, c) {
                return sa(c, function(b) {
                    if (n(b, "settings.button_goals"))
                        return b = ha(a).F(a, ["click"], B(a, "c.t.c", q(T("target"), E([a, c], ne(a, c, "", gn))))),
                        ub(a, c, "Button goal. Counter " + c.id + ". Init.")(),
                        b
                })
            }), Lb, rd, ig, kc, Ye = (Lb = {},
            Lb.transaction_id = "id",
            Lb.item_brand = "brand",
            Lb.index = "position",
            Lb.item_variant = "variant",
            Lb.value = "revenue",
            Lb.item_category = "category",
            Lb.item_list_name = "list",
            Lb), Sb = (rd = {},
            rd.item_id = "id",
            rd.item_name = "name",
            rd.promotion_name = "coupon",
            rd), fn = (ig = {},
            ig.promotion_name = "name",
            ig), Nh = "currencyCode add delete remove purchase checkout detail".split(" "), Yc = (kc = {},
            kc.view_item = {
                event: "detail",
                ia: Sb,
                ra: "products"
            },
            kc.add_to_cart = {
                event: "add",
                ia: Sb,
                ra: "products"
            },
            kc.remove_from_cart = {
                event: "remove",
                ia: Sb,
                ra: "products"
            },
            kc.begin_checkout = {
                event: "checkout",
                ia: Sb,
                ra: "products"
            },
            kc.purchase = {
                event: "purchase",
                ia: Sb,
                ra: "products"
            },
            kc), Lh = z("dl.w", function(a, c, b) {
                function d() {
                    var g = n(a, c);
                    (e = Z(g) && af(a, g, b)) || (f = da(a, d, 1E3, "ec.dl"))
                }
                var e, f = 0;
                d();
                return function() {
                    return Ta(a, f)
                }
            }), sq = z("p.e", function(a, c) {
                var b = ya(a, c);
                if (b) {
                    var d = H(a);
                    b = b.params;
                    var e = B(a, "h.ee", E([a, K(c), b], cn));
                    return c.Gb ? (d.D("ecs", 0),
                    Kh(a, c.Gb, e)) : sa(c, function(f) {
                        if ((f = n(f, "settings.ecommerce")) && xa(f))
                            return d.D("ecs", 1),
                            Kh(a, f, e)
                    })
                }
            }), Jh = u(function(a) {
                return J("[^\\d<>]*", a.split(""))
            }), ul = u(function(a) {
                return new RegExp(Jh(a),"g")
            }), $m = /\S/, Ch = r(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], oc), Zj = u(function(a) {
                return Bd(a) || !fd(a)
            }), tq = z("phc.h", function(a, c) {
                if (!Fo(a) && !Zj(a))
                    return sa(c, function(b) {
                        n(b, "settings.phchange") || (b = n(b, "settings.phhide")) && uh(a, c, b)
                    })["catch"](B(a, "phc.hs"))
            }), ak = u(function(a) {
                a = S(a);
                a = no(a.search.substring(1));
                a["_ym_status-check"] = a["_ym_status-check"] || "";
                a._ym_lang = a._ym_lang || "ru";
                return a
            }), xh = q(ak, T("_ym_status-check"), Ma), uq = q(ak, T("_ym_lang")), wh = Qa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/), Wm = ["form", "button", "phone", "status"], bk = [], Tm = u(function(a, c, b) {
                D(q(uc([a, c, b]), fa), bk);
                if (b.inline) {
                    c = vh(b);
                    var d = b.data;
                    b = b.id;
                    rh(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                } else
                    b.resource && wh(b.resource) && (a._ym__postMessageEvent = c,
                    a._ym__inpageMode = b.inpageMode,
                    a._ym__initMessage = b.initMessage,
                    Xm(a, b.resource))
            }, function(a, c, b) {
                return b.id
            }), vq = z("cs.init", function(a, c) {
                var b, d = xh(a);
                if (d && c.id === d && "0" === c.T) {
                    var e = vh((b = {},
                    b.lang = uq(a),
                    b.fileId = "status",
                    b));
                    da(a, E([a, e, "" + d], rh), 0, "cs")
                }
            }), wq = z("suid.int", function(a, c) {
                var b;
                return b = {},
                b.setUserID = function(d, e, f) {
                    if (xa(d) || Ld(a, d)) {
                        var g = ya(a, c);
                        d = oc(["__ym", "user_id", d]);
                        g.params(d, e || F, f)
                    } else
                        qd(a, K(c)).error("Incorrect user ID")
                }
                ,
                b
            }), xq = z("up.int", function(a, c) {
                var b;
                return b = {},
                b.userParams = B(a, "up.c", function(d, e, f) {
                    var g, h = ya(a, c), k = Ud(a, K(c)).warn;
                    h ? Aa(d) ? (d = (g = {},
                    g.__ymu = d,
                    g),
                    (g = h.params) && g(d, e || F, f)) : k("Wrong user params") : k("No counter instance found")
                }),
                b
            }), yq = /[\*\.\?\(\)]/g, zq = u(function(a, c, b) {
                try {
                    var d = b.replace("\\s", " ").replace(yq, "");
                    Ud(a, "").warn('Function "' + d + '" has been overridden, this may cause issues with Metrika counter')
                } catch (e) {}
            }, gb), Aq = z("r.nn", function(a) {
                fi(a).isEnabled && af(a, Lf, function(c) {
                    c.ub.F(function(b) {
                        zq(a, b[1], b[0]);
                        Lf.splice(100)
                    })
                })
            }), Bq = z("e.a.p", function(a, c) {
                var b, d = ya(a, c);
                d = E([q(P, Fa(!0)), W(Boolean, A(r(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A);
                c.Jd && d();
                return b = {},
                b.enableAll = d,
                b
            }), Cq = r("add", Kd), Dq = r("remove", Kd), Eq = r("detail", Kd), Fq = r("purchase", Kd), Gq = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "), se = u(function(a) {
                var c = Ej(a);
                a = c.kd;
                if (!c.Ec)
                    return !1;
                c = ra("indexOf", a);
                c = Ja(q(c, la(-1), Wb), Gq);
                var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a)
                  , d = /YaBrowser\/[\d.]+/.test(a)
                  , e = /Mobile/.test(a);
                return c || b || d && e || !/Safari/.test(a) && e
            }), Hq = ["YangoEats"], Wk = u(function(a) {
                var c = Ya(a);
                if (!c)
                    return !1;
                c = ra("indexOf", c);
                return Ja(q(c, la(-1), Wb), Hq) || Rc(a)
            }), Qm = /([0-9\\.]+) Safari/, Iq = /\sYptp\/\d\.(\d+)\s/, ck = u(function(a) {
                var c;
                a: {
                    if ((c = Ya(a)) && (c = Iq.exec(c)) && 1 < c.length) {
                        c = Ma(c[1]);
                        break a
                    }
                    c = 0
                }
                return 50 <= c && 99 >= c || Be(a, 79) ? !1 : !od(a) || se(a)
            }), dk = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"), Jq = u(function(a) {
                a = mb(a)("canvas");
                var c = n(a, "getContext");
                if (!c)
                    return null;
                try {
                    var b = M(c, a)("2d");
                    b.font = "72px mmmmmmmmmmlli";
                    var d = b.measureText("mmmmmmmmmmlli").width;
                    return function(e) {
                        b.font = "72px " + e;
                        return b.measureText("mmmmmmmmmmlli").width === d
                    }
                } catch (e) {
                    return null
                }
            }), ek = Ca(String.prototype.repeat, "repeat"), Kq = ek ? function(a, c) {
                return ek.call(a, c)
            }
            : Nm, Ng = r(!0, function(a, c, b, d) {
                b = c.length && (b - d.length) / c.length;
                if (0 >= b)
                    return d;
                c = Kq(c, b);
                return a ? c + d : d + c
            }), fe = [2277735313, 289559509], ge = [1291169091, 658871167], Lq = z("p.cd", function(a, c) {
                if (Id(a) || Ff(a)) {
                    var b = Ka(a);
                    if (qa(b.C("jn"))) {
                        b.D("jn", !1);
                        var d = a.We || Tc(a) ? function() {}
                        : /./
                          , e = qd(a, K(c));
                        d.toString = function() {
                            b.D("jn", !0);
                            return "Yandex.Metrika counter is initialized"
                        }
                        ;
                        e.log("%c%s", "color: inherit", d)
                    }
                }
            }), Mq = u(function(a) {
                a = n(a, "navigator.plugins");
                return !!(a && Da(a) && Ja(q(T("name"), Qa(/Chrome PDF Viewer/)), a))
            }), $b = na(function(a, c) {
                return H(c).C(a, null)
            }), Km = {
                "*": "+",
                "-": "/",
                Re: "=",
                "+": "*",
                "/": "-",
                "=": "_"
            }, Nq = u(function(a) {
                return U(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
            }), Gm = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function(a, c) {
                return n(c, "redirectCount") || n(a, "navigation.redirectCount")
            }
            ], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], ib, Fm = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], oh = (ib = {},
            ib.responseEnd = 1,
            ib.domInteractive = 1,
            ib.domContentLoadedEventStart = 1,
            ib.domContentLoadedEventEnd = 1,
            ib.domComplete = 1,
            ib.loadEventStart = 1,
            ib.loadEventEnd = 1,
            ib.unloadEventStart = 1,
            ib.unloadEventEnd = 1,
            ib.secureConnectionStart = 1,
            ib), Im = u(Vc), Cm = u(xc), Dm = u(function(a) {
                var c = n(a, "webkitRequestFileSystem");
                if (U(c) && !Id(a))
                    return (new I(M(c, a, 0, 0))).then(function() {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](r(!0, P));
                if (hd(a))
                    return c = n(a, "navigator.serviceWorker"),
                    I.resolve(ba(c));
                c = n(a, "openDatabase");
                if (Tc(a) && U(c)) {
                    var b = !1;
                    try {
                        c(null, null, null, null)
                    } catch (d) {
                        b = !0
                    }
                    return I.resolve(b)
                }
                return I.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
            }), Oq = /(\?|&)turbo_uid=([\w\d]+)($|&)/, Pq = u(function(a, c) {
                var b = ec(a)
                  , d = S(a).search.match(Oq);
                return d && 2 <= d.length ? (d = d[2],
                c.Ha || b.D("turbo_uid", d),
                d) : (b = b.C("turbo_uid")) ? b : ""
            }), Qq = z("pa.plgn", function(a, c) {
                var b = Ad(a, c);
                b && b.X.F(["pluginInfo"], B(a, "c.plgn", function() {
                    var d = H(a);
                    d.D("cmc", d.C("cmc", 0) + 1);
                    return Yi(c)
                }))
            }), fk = Rb.split("."), Rq = fk.pop(), gk = J(".", fk), Rk = u(function(a) {
                a = S(a).hostname.split(".");
                return a[a.length - 1]
            }), rg = u(function(a) {
                return -1 !== S(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
            }), Sq = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/, yd = u(function(a) {
                a = S(a).hostname;
                var c = !1;
                a && (c = -1 !== a.search(Sq));
                return c
            }), Tq = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/, qm = u(function(a) {
                a = S(a).hostname;
                var c = !1;
                a && (c = -1 !== a.search(Tq));
                return c
            }), hk = ta.Aa + "//" + Rb + "/metrika/metrika_match.html", jb, Xa, Sk = (jb = {},
            jb.am = "com.am",
            jb.tr = "com.tr",
            jb.ge = "com.ge",
            jb.il = "co.il",
            jb["\u0440\u0444"] = "ru",
            jb["xn--p1ai"] = "ru",
            jb["\u0443\u043a\u0440"] = "ua",
            jb["xn--j1amh"] = "ua",
            jb["\u0431\u0435\u043b"] = "by",
            jb["xn--90ais"] = "by",
            jb), ik = {
                "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
            }, Tk = (Xa = {},
            Xa.ka = "ge",
            Xa.ro = "md",
            Xa.tg = "tj",
            Xa.tk = "tm",
            Xa.et = "ee",
            Xa.hy = "com.am",
            Xa.he = "co.li",
            Xa.ky = "kg",
            Xa.uk = "ua",
            Xa.be = "by",
            Xa.tr = "com.tr",
            Xa.kk = "kz",
            Xa), xm = "ar:1:pv:1:v:" + ta.bb + ":vf:" + zc.version, zm = ta.Aa + "//" + Rb + "/watch/" + ta.od, jk = {}, Uq = z("exps.int", function(a, c) {
                var b;
                return b = {},
                b.experiments = function(d, e, f) {
                    var g, h;
                    void 0 === e && (e = F);
                    if (d && 0 < d.length) {
                        var k = ma(a, "e", c)
                          , l = ad(c).url;
                        d = k({
                            H: va((g = {},
                            g.ex = 1,
                            g.ar = 1,
                            g)),
                            G: (h = {},
                            h["page-url"] = l || S(a).href,
                            h.exp = d,
                            h)
                        }, c);
                        return qc(a, "exps.s", d, e, f)
                    }
                }
                ,
                b
            }), te = [], Vq = z("p.fh", function(a, c) {
                var b, d;
                void 0 === c && (c = !0);
                var e = Ka(a)
                  , f = X(a)
                  , g = e.C("wasSynced")
                  , h = {
                    id: 3,
                    T: "0"
                };
                return c && g && g.time + 864E5 > f(Y) ? I.resolve(g) : ma(a, "f", h)({
                    H: va((b = {},
                    b.pv = 1,
                    b)),
                    G: (d = {},
                    d["page-url"] = S(a).href,
                    d["page-ref"] = a.document.referrer,
                    d)
                }, h).then(function(k) {
                    var l;
                    k = (l = {},
                    l.time = f(Y),
                    l.params = n(k, "settings"),
                    l.bkParams = n(k, "userData"),
                    l);
                    e.D("wasSynced", k);
                    return k
                })["catch"](B(a, "f.h"))
            }), Wq = na(function(a, c) {
                0 === parseFloat(n(c, "settings.c_recp")) && (a.Sb.D("ymoo" + a.fa, a.dd(bb)),
                a.Fb && a.Fb.destruct && a.Fb.destruct())
            }), ze = q(T("settings.pcs"), la("1")), nm = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], om = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], nh = {
                G: {
                    t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                }
            }, mh = {
                id: 42822899,
                T: "0"
            }, le, um = (le = {},
            le.s = "p",
            le["8"] = "i",
            le), rm = xb("csp", function(a, c) {
                return ma(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
            }), kk = "et w v z i u vf".split(" "), Pe = function() {
                function a(c) {
                    this.l = c
                }
                a.isEnabled = function(c) {
                    return !!c.JSON
                }
                ;
                a.prototype.wa = function(c) {
                    var b = A(M(this.Ma, this), c);
                    return Si(kb(this.l, A(function(d, e) {
                        var f;
                        return y({}, c[e], (f = {},
                        f.data = d,
                        f))
                    }, b)))
                }
                ;
                a.prototype.Ma = function(c) {
                    var b = c.data;
                    "string" !== typeof b && (b = kb(this.l, c.data));
                    return b
                }
                ;
                a.prototype.Ua = function(c) {
                    return encodeURIComponent(c).length
                }
                ;
                a.prototype.bd = function(c, b) {
                    for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
                        e.push(c.slice(f * d, d * (f + 1)));
                    return e
                }
                ;
                return a
            }(), lk = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), Xq = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "), Yq = function() {
                function a(c, b, d, e, f) {
                    var g = this;
                    this.rb = !1;
                    this.meta = {};
                    this.scroll = {
                        x: 0,
                        y: 0
                    };
                    this.involvedTime = this.Kc = 0;
                    this.Tb = this.Pc = "";
                    this.Z = [];
                    this.bc = this.ze = 0;
                    this.Na = {
                        h: 0,
                        w: 0
                    };
                    this.buffer = [];
                    this.pd = Xq;
                    this.flush = function() {
                        g.bc = da(g.l, g.flush, 2500);
                        var h = g.Jb();
                        if (g.buffer.length || h) {
                            var k = gf(g.buffer);
                            h && k.push(h);
                            g.Pc = g.Tb;
                            g.ca.wa(k)(lb(B(g.l, "p.b.st"), function(l) {
                                l && g.ac(l)
                            }))
                        }
                    }
                    ;
                    this.ac = e;
                    this.ca = d;
                    this.ab = M(this.ab, this);
                    this.Jb = M(this.Jb, this);
                    this.flush = M(this.flush, this);
                    this.l = c;
                    this.fa = f;
                    this.zb = b;
                    this.Pb = "pai" + b.id;
                    this.Kb();
                    this.vc = ha(this.l);
                    this.time = X(this.l);
                    this.hd();
                    this.Lb = H(this.l)
                }
                a.prototype.start = function() {
                    var c = this;
                    this.bc = da(this.l, this.flush, 2500);
                    if (!this.rb) {
                        this.ve();
                        var b = this.Lb.C(this.Pb, [])
                          , d = !b.length;
                        b.push(M(this.ee, this));
                        this.Lb.xa(this.Pb, b);
                        d && this.Vc();
                        var e = function(f, g) {
                            return (f.Zb || 0) <= (g.Zb || 0) ? g : f
                        };
                        ha(this.l).F(this.l, ["click"], function(f) {
                            if (c.Z.length) {
                                f = Sh(f);
                                var g = S(c.l).hostname, h;
                                if (h = f)
                                    h = Sd(f.hostname) === Sd(g);
                                h && (f = O(e, c.Z[0], c.Z).id,
                                g = Ub(c.l),
                                Bc(c.l, c.fa.split(":")[0]).D("pai", f + "-" + g))
                            }
                        });
                        this.ab({
                            type: "page",
                            target: this.l
                        })
                    }
                }
                ;
                a.prototype.stop = function() {
                    this.Ee();
                    this.rb = !0;
                    this.flush();
                    Ta(this.l, this.bc)
                }
                ;
                a.prototype.Hc = function(c) {
                    return Tb("html", this.l, c) !== this.l.document.documentElement
                }
                ;
                a.prototype.Vc = function() {
                    var c = this;
                    B(this.l, "p.ic" + this.zb.id, function() {
                        if (!c.rb) {
                            var b = c.Lb.C(c.Pb)
                              , d = c.zb.Nd();
                            D(function(e) {
                                var f = A(function(g) {
                                    return y({}, g)
                                }, d);
                                U(e) && e(f)
                            }, b);
                            c.ze = da(c.l, M(c.Vc, c), 1E3, "p")
                        }
                    })()
                }
                ;
                a.prototype.ee = function(c) {
                    this.rb || (this.Fe(c),
                    this.Ge(),
                    this.Bd())
                }
                ;
                a.prototype.ab = function(c) {
                    var b = this;
                    B(this.l, "p.ec." + this.zb.id, function() {
                        var d, e;
                        try {
                            var f = c.type;
                            var g = c.target
                        } catch (p) {
                            return
                        }
                        var h = "page" === f;
                        if ("scroll" === f || h) {
                            var k = [b.l, b.l.document, b.l.document.documentElement, jc(b.l)];
                            L(g, k) && b.Kb()
                        }
                        ("resize" === f || h) && b.hd();
                        f = b.time(Y);
                        var l = Math.min(f - b.Kc, 5E3);
                        b.involvedTime += Math.round(l);
                        b.Kc = f;
                        if (b.meta && b.scroll && b.Na) {
                            var m = b.Na.h * b.Na.w;
                            b.Z = A(function(p) {
                                var t = y({}, p)
                                  , w = b.meta[t.id]
                                  , x = gd(p.Sa);
                                if (!w || b.Hc(t.element) || !x)
                                    return t;
                                p = b.l.Math;
                                w = p.max((b.scroll.y + b.Na.h - w.y) / w.height, 0);
                                var v = x.height * x.width;
                                x = Di(b.l, x, b.Na);
                                t.Zb = x / m;
                                t.visibility = x / v;
                                if (.9 <= t.visibility || .1 <= t.Zb)
                                    t.involvedTime += l;
                                t.maxScrolled = p.round(1E4 * w) / 1E4;
                                return t
                            }, b.Z);
                            eb(b.l, (d = {},
                            d.name = "publishers",
                            d.counterKey = b.fa,
                            d.data = (e = {},
                            e.involvedTime = b.involvedTime,
                            e.contentItems = b.Z.map(function(p) {
                                var t;
                                return y((t = {},
                                t.contentElement = p.Sa,
                                t), p)
                            }),
                            e),
                            d))
                        }
                    })()
                }
                ;
                a.prototype.Fe = function(c) {
                    var b = A(function(d) {
                        return d.id
                    }, this.Z);
                    this.Z = this.Z.concat(W(function(d) {
                        return !L(d.id, b)
                    }, c))
                }
                ;
                a.prototype.hd = function() {
                    var c = vf(this.l) || Nc(this.l);
                    this.Na = {
                        w: c[0],
                        h: c[1]
                    }
                }
                ;
                a.prototype.Ge = function() {
                    var c = this;
                    B(this.l, "p.um." + this.zb.id, function() {
                        var b = [];
                        c.Kb();
                        c.meta = O(function(d, e) {
                            var f;
                            if (c.Hc(e.element))
                                b.push(e),
                                delete d[e.id];
                            else {
                                var g = (f = {},
                                f.id = e.id,
                                f.involvedTime = Math.max(e.involvedTime, 0),
                                f.maxScrolled = e.maxScrolled || 0,
                                f.chars = e.update ? e.update("chars") || 0 : 0,
                                f);
                                e.Sa && (f = gd(e.Sa)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0),
                                g.y = Math.max(Math.round(f.top) + c.scroll.y, 0),
                                g.width = Math.round(f.width),
                                g.height = Math.round(f.height));
                                d[e.id] = g
                            }
                            return d
                        }, {}, c.Z);
                        D(function(d) {
                            d = cf(c.l)(d, c.Z);
                            c.Z.splice(d, 1)
                        }, b)
                    })()
                }
                ;
                a.prototype.Jb = function() {
                    var c, b, d = A(r(this.meta, n), ja(this.meta));
                    return d.length && (this.Tb = kb(this.l, d),
                    this.Pc !== this.Tb) ? (c = {},
                    c.type = "publishersHeader",
                    c.data = (b = {},
                    b.articleMeta = d || [],
                    b.involvedTime = this.involvedTime,
                    b),
                    c) : null
                }
                ;
                a.prototype.Bd = function() {
                    var c = this;
                    if (this.Z.length) {
                        var b = A(function(d) {
                            var e, f = O(function(g, h) {
                                d[h] && (g[h] = d[h]);
                                return g
                            }, {}, c.pd);
                            d.Zc = !0;
                            return e = {},
                            e.type = "articleInfo",
                            e.stamp = f.stamp,
                            e.data = f,
                            e
                        }, W(function(d) {
                            return !d.Zc
                        }, this.Z));
                        b.length && (this.buffer = this.buffer.concat(b),
                        zb(this.l, this.fa, "Publisher content info found: ", b))
                    }
                }
                ;
                a.prototype.ve = function() {
                    this.vc.F(this.l, lk, this.ab)
                }
                ;
                a.prototype.Ee = function() {
                    this.vc.Za(this.l, lk, this.ab)
                }
                ;
                a.prototype.Kb = function() {
                    this.scroll = {
                        x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                        y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                    }
                }
                ;
                return a
            }(), sd, jg = (sd = {},
            sd[1] = 500,
            sd[2] = 500,
            sd[3] = 0,
            sd), kg = function() {
                function a(c, b) {
                    var d, e = this;
                    this.id = "a";
                    this.Mb = !1;
                    this.Ta = {};
                    this.La = {
                        "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                        Mc: ["article"]
                    };
                    this.jc = (d = {},
                    d.Answer = 3,
                    d.Review = 2,
                    d);
                    this.Dd = u(function(f, g) {
                        zb(e.l, e.fa, "Warning: content has only " + g.chars + " chars. Required " + jg[g.type], g)
                    });
                    this.l = c;
                    this.root = Pb(c);
                    this.fa = b
                }
                a.prototype.ta = function(c) {
                    return c.element
                }
                ;
                a.prototype.Ac = function(c, b) {
                    var d = this, e;
                    B(this.l, "P.s." + b, function() {
                        e = d.Ta[b].call(d, c)
                    })();
                    return e
                }
                ;
                a.prototype.qe = function(c) {
                    var b = y({}, c);
                    this.Mb && !b.id && L(c.type, [3, 2]) && (c = J(", ", A(T("name"), b.authors || [])),
                    b.pageTitle = c + ": " + b.pageTitle);
                    b.pageTitle || (b.pageTitle = this.Ud(b.Sa));
                    b.pageUrlCanonical || (c = b.id,
                    b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Td());
                    b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                    return b
                }
                ;
                a.prototype.na = function(c) {
                    var b = this
                      , d = {}
                      , e = this.ta(c);
                    if (!e)
                        return null;
                    d.type = c.type;
                    D(function(g) {
                        d[g] = b.Ac(c, g)
                    }, ja(this.Ta));
                    var f = X(this.l);
                    d.stamp = f(Ti);
                    d.element = c.element;
                    d.Sa = e;
                    d = this.qe(d);
                    d.id = d.id ? cc(d.id) : 1;
                    d.update = function(g) {
                        return b.ta(c) ? b.Ac(c, g) : void 0
                    }
                    ;
                    return d
                }
                ;
                a.prototype.Ud = function(c) {
                    for (var b = 1; 5 >= b; b += 1) {
                        var d = Ra(dc("h" + b, c));
                        if (d)
                            return d
                    }
                }
                ;
                a.prototype.Td = function() {
                    var c = dc('[rel="canonical"]', this.root);
                    if (c)
                        return c.href
                }
                ;
                a.prototype.Cc = function() {
                    return 1
                }
                ;
                a.prototype.kb = function() {
                    return []
                }
                ;
                a.prototype.Nd = function() {
                    var c = this
                      , b = this.kb()
                      , d = 1;
                    return O(function(e, f) {
                        var g = c.na({
                            element: f,
                            type: c.Cc(f)
                        }) || [];
                        Z(g) || (g = [g]);
                        g = O(function(h, k) {
                            var l = h.values
                              , m = h.Dc;
                            k && k.chars > jg[k.type] && !L(k.id, m) ? (l.push(k),
                            m.push(k.id)) : k && k.chars <= jg[k.type] && c.Dd(k.id, k);
                            return {
                                values: l,
                                Dc: m
                            }
                        }, {
                            values: [],
                            Dc: A(T("id"), e)
                        }, g).values;
                        return e.concat(A(function(h) {
                            var k;
                            h = y((k = {
                                index: d,
                                Zc: !1
                            },
                            k.involvedTime = 0,
                            k), h);
                            d += 1;
                            return h
                        }, g))
                    }, [], b)
                }
                ;
                return a
            }(), mk = function(a) {
                function c() {
                    var b, d = null !== a && a.apply(this, arguments) || this;
                    d.id = "j";
                    d.Mb = !0;
                    d.tc = J(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                    d.Ta = (b = {},
                    b.id = function(e) {
                        var f = e.data["@id"];
                        e = e.data.mainEntity || e.data.mainEntityOfPage;
                        !f && e && (f = e["@id"]);
                        return f
                    }
                    ,
                    b.chars = function(e) {
                        return "string" === typeof e.data.text ? e.data.text.length : Gb(this.ta(e)).length
                    }
                    ,
                    b.authors = function(e) {
                        var f = [];
                        f = f.concat(this.jb(e.data, "author"));
                        f = f.concat(this.jb(e.data.mainEntity, "author"));
                        return f.concat(this.jb(e.data.mainEntityOfPage, "author"))
                    }
                    ,
                    b.pageTitle = function(e) {
                        var f = e.data.headline || "";
                        e.data.Te && (f += " " + e.data.alternativeHeadline);
                        "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed));
                        3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                        return f
                    }
                    ,
                    b.updateDate = function(e) {
                        return e.data.dateModified || ""
                    }
                    ,
                    b.publicationDate = function(e) {
                        return e.data.datePublished || ""
                    }
                    ,
                    b.pageUrlCanonical = function(e) {
                        return e.data.url
                    }
                    ,
                    b.topics = function(e) {
                        return this.jb(e.data, "about", ["name", "alternateName"])
                    }
                    ,
                    b.rubric = function(e) {
                        var f = this
                          , g = this.ta(e);
                        e = W(Boolean, A(function(h) {
                            if (h = Bb(f.l, Gb(h))) {
                                var k = f.Bc(h);
                                if (k)
                                    return O(function(l, m) {
                                        return l ? l : "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                if ("BreadcrumbList" === h["@type"])
                                    return h
                            }
                            return null
                        }, [e.element].concat(nb(this.tc, document.body === g ? document.documentElement : g))));
                        return e.length && (e = e[0].itemListElement,
                        Z(e)) ? W(Boolean, A(function(h) {
                            return Aa(h) && h.item && Aa(h.item) && !f.l.isNaN(h.position) ? {
                                name: h.item.name || h.name,
                                position: h.position
                            } : null
                        }, e)) : []
                    }
                    ,
                    b);
                    return d
                }
                ld(c, a);
                c.prototype.jb = function(b, d, e) {
                    void 0 === e && (e = ["name"]);
                    if (!b || !b[d])
                        return [];
                    b = Z(b[d]) ? b[d] : [b[d]];
                    b = W(P, A(function(f) {
                        return f ? "string" === typeof f ? f : O(function(g, h) {
                            return g || "" + f[h]
                        }, "", e) : null
                    }, b));
                    return A(function(f) {
                        var g;
                        return g = {},
                        g.name = f,
                        g
                    }, b)
                }
                ;
                c.prototype.ta = function(b) {
                    var d = b.element
                      , e = b.data["@id"]
                      , f = b.data.url;
                    b = null;
                    f && "string" === typeof f && (b = this.wc(f));
                    !b && e && "string" === typeof e && (b = this.wc(e));
                    b || (b = e = d.parentNode,
                    !Tb("head", this.l, d) && e && 0 !== Gb(e).length) || (b = this.l.document.body);
                    return b
                }
                ;
                c.prototype.wc = function(b) {
                    try {
                        var d = Rd(this.l, b).hash;
                        if (d) {
                            var e = dc(d, this.l.document.body);
                            if (e)
                                return e
                        }
                    } catch (f) {}
                    return null
                }
                ;
                c.prototype.Ub = function(b) {
                    return this.jc[b["@type"]] || 1
                }
                ;
                c.prototype.na = function(b) {
                    var d = this
                      , e = b.element;
                    if (!b.data && (b.data = Bb(this.l, Gb(e)),
                    !b.data || !/schema\.org/.test(b.data["@context"]) && !Z(b.data)))
                        return null;
                    var f = this.Bc(b.data);
                    if (f)
                        return A(function(h) {
                            if (!L(h["@type"], d.La["schema.org"]))
                                return null;
                            h = {
                                element: e,
                                data: h,
                                type: d.Ub(h)
                            };
                            return a.prototype.na.call(d, h)
                        }, f);
                    if ("QAPage" === b.data["@type"]) {
                        var g = b.data.mainEntity || b.data.mainEntityOfPage;
                        if (!g)
                            return null
                    }
                    "Question" === b.data["@type"] && (g = b.data);
                    return g ? (b = Ob(r(g, n), ["acceptedAnswer", "suggestedAnswer"]),
                    A(function(h) {
                        var k;
                        if (!h || !L(h["@type"], d.La["schema.org"]))
                            return null;
                        h = {
                            element: e,
                            type: d.Ub(h),
                            data: y((k = {},
                            k.parentItem = g,
                            k), h)
                        };
                        return a.prototype.na.call(d, h)
                    }, b)) : L(b.data["@type"], this.La["schema.org"]) ? a.prototype.na.call(this, y(b, {
                        type: this.Ub(b.data)
                    })) : null
                }
                ;
                c.prototype.kb = function() {
                    return nb(this.tc, this.root)
                }
                ;
                c.prototype.Bc = function(b) {
                    return Z(b) && b || b && Z(b["@graph"]) && b["@graph"]
                }
                ;
                return c
            }(kg), lg = function(a) {
                function c() {
                    var b, d = null !== a && a.apply(this, arguments) || this;
                    d.id = "s";
                    d.Mb = !0;
                    d.De = ra("exec", new RegExp("schema.org\\/(" + J("|", ja(d.jc)) + ")$"));
                    d.Ta = (b = {},
                    b.id = function(e) {
                        e = e.element;
                        var f = Wa(this.l, e, "identifier");
                        return f ? Ra(f) : (f = Wa(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                    }
                    ,
                    b.chars = function(e) {
                        var f = 0;
                        e = e.element;
                        for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                            var k = Wa(this.l, e, g[h]);
                            if (k) {
                                f = Ra(k).length;
                                break
                            }
                        }
                        e = Gb(e);
                        0 === f && e && (f += e.length);
                        return f
                    }
                    ,
                    b.topics = function(e) {
                        var f = this
                          , g = nd(this.l, e.element, "about");
                        return A(function(h) {
                            var k = {
                                name: Ra(h)
                            };
                            if (g = Wa(f.l, h, "name"))
                                k.name = Ra(g);
                            return k
                        }, g)
                    }
                    ,
                    b.rubric = function(e) {
                        var f = this;
                        (e = dc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = dc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                        return e ? A(function(g) {
                            return {
                                name: Ra(Wa(f.l, g, "name")),
                                position: Ra(Wa(f.l, g, "position"))
                            }
                        }, nd(this.l, e, "itemListElement")) : []
                    }
                    ,
                    b.updateDate = function(e) {
                        return (e = Wa(this.l, e.element, "dateModified")) ? pj(e) : ""
                    }
                    ,
                    b.publicationDate = function(e) {
                        return (e = Wa(this.l, e.element, "datePublished")) ? pj(e) : ""
                    }
                    ,
                    b.pageUrlCanonical = function(e) {
                        e = nd(this.l, e.element, "url");
                        if (e.length) {
                            var f = e[0];
                            return f.href ? f.href : Ra(e)
                        }
                        return null
                    }
                    ,
                    b.pageTitle = function(e) {
                        var f = ""
                          , g = e.element
                          , h = Wa(this.l, g, "headline");
                        h && (f += Ra(h));
                        (h = Wa(this.l, g, "alternativeHeadline")) && (f += " " + Ra(h));
                        "" === f && ((h = Wa(this.l, g, "name")) || (h = Wa(this.l, g, "itemReviewed")),
                        h && (f += Ra(h)));
                        3 === e.type && (e = Tb('[itemtype$="schema.org/Question"]', this.l, g)) && (e = Wa(this.l, e, "text")) && (f += Ra(e));
                        return f
                    }
                    ,
                    b.authors = function(e) {
                        var f = this;
                        e = nd(this.l, e.element, "author");
                        return A(function(g) {
                            var h, k = (h = {},
                            h.name = "",
                            h);
                            /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = Wa(f.l, g, "name")) && (k.name = Ra(h));
                            k.name || (k.name = g.getAttribute("content") || Gb(g) || g.getAttribute("href"));
                            return k
                        }, e)
                    }
                    ,
                    b);
                    return d
                }
                ld(c, a);
                c.prototype.Cc = function(b) {
                    b = b.getAttribute("itemtype") || "";
                    return (b = this.De(b)) ? this.jc[b[1]] : 1
                }
                ;
                c.prototype.na = function(b) {
                    return b.element && Gb(b.element).length ? a.prototype.na.call(this, b) : null
                }
                ;
                c.prototype.kb = function() {
                    var b = J(",", A(function(d) {
                        return '[itemtype$="schema.org/' + d + '"]'
                    }, this.La["schema.org"]));
                    return nb(b, this.root)
                }
                ;
                return c
            }(kg), nk = function(a) {
                function c(b, d) {
                    var e, f = a.call(this, b, d) || this;
                    f.id = "o";
                    f.Ta = (e = {},
                    e.chars = function(g) {
                        g = this.ta(g);
                        return Gb(g).length
                    }
                    ,
                    e.authors = function(g) {
                        return this.Ib(g.data.author)
                    }
                    ,
                    e.pageTitle = function(g) {
                        return this.ob(g.data.title) || ""
                    }
                    ,
                    e.updateDate = function(g) {
                        return this.ob(g.data.modified_time)
                    }
                    ,
                    e.publicationDate = function(g) {
                        return this.ob(g.data.published_time)
                    }
                    ,
                    e.pageUrlCanonical = function(g) {
                        return this.ob(g.data.url)
                    }
                    ,
                    e.rubric = function(g) {
                        return this.Ib(g.data.section)
                    }
                    ,
                    e.topics = function(g) {
                        return this.Ib(g.data.tag)
                    }
                    ,
                    e);
                    f.Kd = new RegExp("^(og:)?((" + J("|", f.La.Mc) + "):)?");
                    return f
                }
                ld(c, a);
                c.prototype.Ib = function(b) {
                    var d;
                    return b ? Z(b) ? A(function(e) {
                        var f;
                        return f = {},
                        f.name = e,
                        f
                    }, b) : [(d = {},
                    d.name = b,
                    d)] : []
                }
                ;
                c.prototype.ob = function(b) {
                    return Z(b) ? b.length ? b[0] : null : b
                }
                ;
                c.prototype.kb = function() {
                    var b = nb('meta[property="og:type"]', this.l.document.body);
                    return [this.l.document.head].concat(b)
                }
                ;
                c.prototype.Sd = function(b) {
                    var d = this
                      , e = b.element
                      , f = {}
                      , g = this.ta(b);
                    e = nb("meta[property]", e === this.l.document.head ? e : g);
                    if (e.length)
                        D(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Kd, "")
                                      , l = Ra(h);
                                    f[k] ? Z(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                Jd(d.l, "og.ed", m)
                            }
                        }, e);
                    else
                        return null;
                    return L(f.type, this.La.Mc) ? y(b, {
                        data: f
                    }) : null
                }
                ;
                c.prototype.ta = function(b) {
                    b = b.element;
                    var d = this.l.document;
                    return b === d.head ? d.body : b.parentNode
                }
                ;
                c.prototype.na = function(b) {
                    return (b = this.Sd(b)) ? a.prototype.na.call(this, b) : null
                }
                ;
                return c
            }(kg), td = {};
            mk && (td.json_ld = mk);
            lg && (td.schema = lg,
            td.microdata = lg);
            nk && (td.opengraph = nk);
            var Zq = z("p.p", function(a, c) {
                function b(l) {
                    var m = y({}, k);
                    m.O.V = l;
                    return e(m, c)["catch"](B(a, "s.ww.p"))
                }
                var d = hm(a);
                if (!za("querySelectorAll", a.document.querySelectorAll) || !d)
                    return I.resolve();
                var e = ma(a, "p", c)
                  , f = va()
                  , g = Bc(a, c.id)
                  , h = g.C("pai");
                h && (g.hb("pai"),
                f.D("pai", h));
                var k = {
                    G: {},
                    H: f,
                    Ba: {
                        Fc: !(d instanceof Pe)
                    },
                    O: {}
                };
                return sa(c, B(a, "ps.s", function(l) {
                    if (l = n(l, "settings.publisher.schema")) {
                        Zi(c) && (l = "microdata");
                        var m = td[l];
                        if (m && d) {
                            var p = K(c);
                            m = new m(a,p);
                            (new Yq(a,m,d,b,p)).start();
                            zb(a, p, 'Publishers analytics schema "' + l + '"')
                        }
                    }
                }))
            })
              , $q = function() {
                function a(c, b) {
                    this.l = c;
                    this.Rd = b
                }
                a.prototype.wa = function(c) {
                    return Si(Ob(M(this.Ma, this), c))
                }
                ;
                a.prototype.Ma = function(c, b) {
                    var d = this
                      , e = []
                      , f = this.Rd(this.l, b && b.type, c.type);
                    f && (e = Ob(function(g) {
                        return g({
                            l: d.l,
                            Y: c
                        }) || []
                    }, f));
                    return e
                }
                ;
                a.prototype.Ua = function(c) {
                    return c.length
                }
                ;
                a.prototype.bd = function(c) {
                    return [c]
                }
                ;
                a.prototype.isEnabled = function() {
                    return !0
                }
                ;
                return a
            }()
              , ok = function() {
                function a(c, b, d) {
                    this.uc = 0;
                    this.Vb = 1;
                    this.Db = 5E3;
                    this.l = c;
                    this.ca = b;
                    this.ac = d
                }
                a.prototype.Ab = function() {
                    this.uc = da(this.l, q(M(this.flush, this), M(this.Ab, this)), this.Db, "b.f")
                }
                ;
                a.prototype.send = function(c, b) {
                    var d = this.ac(c, b || [], this.Vb);
                    this.Vb += 1;
                    return d
                }
                ;
                a.prototype.push = function() {}
                ;
                a.prototype.flush = function() {}
                ;
                return a
            }()
              , Yl = function(a) {
                function c(b, d, e) {
                    b = a.call(this, b, d, e) || this;
                    b.buffer = [];
                    b.qd = 7500;
                    b.Db = 3E4;
                    b.Ab();
                    return b
                }
                ld(c, a);
                c.prototype.push = function(b, d) {
                    var e = this.ca.Ma(b, d);
                    Ia(this.buffer, e);
                    this.ca.Ua(this.buffer) > this.qd && this.flush()
                }
                ;
                c.prototype.flush = function() {
                    var b = this.buffer;
                    b.length && (this.send(b),
                    this.buffer = [])
                }
                ;
                return c
            }(ok)
              , $l = /opera mini/i
              , fh = ["phone", "email"]
              , pk = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" ")
              , fm = new RegExp("(" + J("|", pk) + ")","i")
              , em = new RegExp("(" + J("|", fh) + ")","i")
              , qj = ["password", "passwd", "pswd"]
              , gm = new RegExp("(" + J("|", pk.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) + ")","i")
              , Ea = "metrikaId_" + Math.random()
              , fc = {
                counter: 0
            }
              , cp = u(function() {
                var a;
                return a = {},
                a.A = 1,
                a.ABBR = 2,
                a.ACRONYM = 3,
                a.ADDRESS = 4,
                a.APPLET = 5,
                a.AREA = 6,
                a.B = 7,
                a.BASE = 8,
                a.BASEFONT = 9,
                a.BDO = 10,
                a.BIG = 11,
                a.BLOCKQUOTE = 12,
                a.BODY = 13,
                a.BR = 14,
                a.BUTTON = 15,
                a.CAPTION = 16,
                a.CENTER = 17,
                a.CITE = 18,
                a.CODE = 19,
                a.COL = 20,
                a.COLGROUP = 21,
                a.DD = 22,
                a.DEL = 23,
                a.DFN = 24,
                a.DIR = 25,
                a.DIV = 26,
                a.DL = 27,
                a.DT = 28,
                a.EM = 29,
                a.FIELDSET = 30,
                a.FONT = 31,
                a.FORM = 32,
                a.FRAME = 33,
                a.FRAMESET = 34,
                a.H1 = 35,
                a.H2 = 36,
                a.H3 = 37,
                a.H4 = 38,
                a.H5 = 39,
                a.H6 = 40,
                a.HEAD = 41,
                a.HR = 42,
                a.HTML = 43,
                a.I = 44,
                a.IFRAME = 45,
                a.IMG = 46,
                a.INPUT = 47,
                a.INS = 48,
                a.ISINDEX = 49,
                a.KBD = 50,
                a.LABEL = 51,
                a.LEGEND = 52,
                a.LI = 53,
                a.LINK = 54,
                a.MAP = 55,
                a.MENU = 56,
                a.META = 57,
                a.NOFRAMES = 58,
                a.NOSCRIPT = 59,
                a.OBJECT = 60,
                a.OL = 61,
                a.OPTGROUP = 62,
                a.OPTION = 63,
                a.P = 64,
                a.PARAM = 65,
                a.PRE = 66,
                a.Q = 67,
                a.S = 68,
                a.SAMP = 69,
                a.SCRIPT = 70,
                a.SELECT = 71,
                a.SMALL = 72,
                a.SPAN = 73,
                a.STRIKE = 74,
                a.STRONG = 75,
                a.STYLE = 76,
                a.SUB = 77,
                a.SUP = 78,
                a.TABLE = 79,
                a.TBODY = 80,
                a.TD = 81,
                a.TEXTAREA = 82,
                a.TFOOT = 83,
                a.TH = 84,
                a.THEAD = 85,
                a.TITLE = 86,
                a.TR = 87,
                a.TT = 88,
                a.U = 89,
                a.UL = 90,
                a.VAR = 91,
                a.NOINDEX = 100,
                a
            })
              , ar = function() {
                var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                return {
                    af: new RegExp("(" + J("|", a) + ")","i"),
                    hf: new RegExp("(" + J("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) + ")","i"),
                    Ze: /ym-record-keys/i,
                    le: "\u2022",
                    gf: 88
                }
            }()
              , vj = db(r(ar.le, P))
              , Pc = !0
              , Qf = ""
              , Rf = !1
              , Sf = !0
              , Tf = !1
              , cm = na(function(a, c) {
                var b = E([a, "efv." + c.event], B);
                c.J = A(q(P, b), c.J);
                return c
            })
              , br = u(function(a) {
                var c = []
                  , b = []
                  , d = [];
                a.document.attachEvent && !a.opera && (c.push(Me),
                b.push(fp),
                b.push(gp));
                a.document.addEventListener ? c.push(tj) : (b.push(sj),
                d.push(tj));
                c = aa([{
                    target: a,
                    type: "window",
                    event: "beforeunload",
                    J: [F]
                }, {
                    target: a,
                    type: "window",
                    event: "unload",
                    J: [F]
                }, {
                    event: "click",
                    J: [Oc]
                }, {
                    event: "dblclick",
                    J: [Oc]
                }, {
                    event: "mousedown",
                    J: [Oc]
                }, {
                    event: "mouseup",
                    J: [ip]
                }, {
                    event: "keydown",
                    J: [jp]
                }, {
                    event: "keypress",
                    J: [kp]
                }, {
                    event: "copy",
                    J: [xj]
                }, {
                    event: "blur",
                    J: c
                }, {
                    event: "focusin",
                    J: b
                }, {
                    event: "focusout",
                    J: d
                }], !a.document.attachEvent || a.opera ? [{
                    target: a,
                    type: "window",
                    event: "focus",
                    J: [dh]
                }, {
                    target: a,
                    type: "window",
                    event: "blur",
                    J: [Me]
                }] : [], a.document.addEventListener ? [{
                    event: "focus",
                    J: [sj]
                }, {
                    event: "change",
                    J: [uj]
                }, {
                    event: "submit",
                    J: [zj]
                }] : [{
                    type: "formInput",
                    event: "change",
                    J: [uj]
                }, {
                    type: "form",
                    event: "submit",
                    J: [zj]
                }]);
                return ah(a, c)
            })
              , am = u(function(a) {
                return aa(jc(a) ? [{
                    target: a,
                    type: "document",
                    event: "mouseleave",
                    J: [lp]
                }] : [])
            })
              , cr = ["submit", "beforeunload", "unload"]
              , dr = u(function(a, c) {
                var b = c(a);
                return O(function(d, e) {
                    d[e.type + ":" + e.event] = e.J;
                    return d
                }, {}, b)
            })
              , bm = /^\s*function submit\(\)/
              , Wg = 0
              , Ke = {
                x: 0,
                y: 0
            }
              , Vg = 0
              , Je = {
                x: 0,
                y: 0
            }
              , He = {}
              , qk = u(function(a) {
                var c = aa([{
                    event: "mousemove",
                    J: [Wl]
                }, {
                    target: a,
                    type: "window",
                    event: "scroll",
                    J: [Rg]
                }, {
                    event: "onmousewheel"in a.document ? "mousewheel" : "wheel",
                    J: [Vl]
                }, {
                    target: a,
                    type: "window",
                    event: "beforeunload",
                    J: [Ug]
                }], Fj(a) ? [{
                    target: a,
                    type: "window",
                    event: "unload",
                    J: [Ug]
                }] : [], [{
                    target: a,
                    type: "window",
                    event: "resize",
                    J: [Ul]
                }, {
                    event: "touchmove",
                    J: [Qg]
                }, {
                    event: "touchstart",
                    J: [Qg]
                }], a.document.addEventListener ? [{
                    event: "scroll",
                    J: [Tl]
                }] : []);
                return aa(br(a), ah(a, c))
            })
              , er = r(qk, function(a, c, b, d) {
                return dr(c, a)[b + ":" + d] || []
            })
              , fr = u(function(a) {
                return aa(cr, ["beforeunload"], Fj(a) ? ["unload"] : [])
            })
              , gr = z("wv.p", function(a, c) {
                var b, d, e;
                if (!(e = !c.nd)) {
                    var f = H(a)
                      , g = !1;
                    e = f.C("hitParam", {});
                    var h = K(c);
                    e[h] && (f = f.C("counters", {}),
                    g = !(!qe(c.T) || f[h]));
                    e[h] = 1;
                    e = g
                }
                if (e)
                    return I.resolve(F);
                e = new $q(a,er);
                eb(a, (b = {},
                b.counterKey = K(c),
                b.name = "webvisor",
                b.data = (d = {},
                d.version = 1,
                d),
                b));
                return Xl(a, c, e, qk, fr(a))
            });
            (function(a) {
                function c(b, d, e, f) {
                    void 0 === f && (f = 0);
                    d = a.call(this, b, d, e) || this;
                    d.ec = 0;
                    d.Qa = 0;
                    d.dc = 0;
                    d.buffer = [];
                    d.Db = 2E3;
                    d.X = $e(b);
                    d.Ab();
                    d.dc = f;
                    return d
                }
                ld(c, a);
                c.prototype.zc = function(b) {
                    return W(Boolean, this.X.W("ag", b))
                }
                ;
                c.prototype.yc = function(b, d) {
                    var e = this;
                    b(lb(B(this.l, "wv2.b.st"), function(f) {
                        e.send(f, d)
                    }))
                }
                ;
                c.prototype.ue = function(b, d) {
                    var e = this;
                    Ta(this.l, this.uc);
                    var f = Math.ceil(this.ca.Ua(d) / 63E4)
                      , g = this.ca.bd(d, f);
                    D(function(h, k) {
                        var l, m = y({}, b, (l = {},
                        l.data = h,
                        l.partNum = k + 1,
                        l.end = k + 1 === f,
                        l));
                        l = e.ca.wa([m], !1);
                        e.yc(l, [m])
                    }, g);
                    this.Ab()
                }
                ;
                c.prototype.send = function(b, d) {
                    var e = this;
                    this.X.W("se", d);
                    return a.prototype.send.call(this, b, d).then(P, function() {
                        e.X.W("see", d)
                    })
                }
                ;
                c.prototype.ce = function() {
                    return this.dc && this.ec >= this.dc
                }
                ;
                c.prototype.push = function(b) {
                    var d = this;
                    if (!this.ce()) {
                        this.X.W("p", b);
                        var e = this.ca.Ma(b)
                          , f = this.ca.Ua(e);
                        7E5 < f ? this.ue(b, e) : (e = this.zc(this.buffer.concat([b])),
                        e = O(function(g, h) {
                            return g + d.ca.Ua(d.ca.Ma(h))
                        }, 0, e),
                        this.Qa + e + f >= 7E5 * .7 && this.flush(),
                        this.buffer.push(b),
                        this.Qa += f)
                    }
                }
                ;
                c.prototype.F = function(b, d) {
                    this.X.F([b], d)
                }
                ;
                c.prototype.vb = function(b, d) {
                    this.X.vb([b], d)
                }
                ;
                c.prototype.flush = function() {
                    var b = this.buffer.concat(this.zc(this.buffer));
                    if (b.length) {
                        this.buffer = [];
                        this.ec += this.Qa;
                        this.Qa = 0;
                        var d = this.ca.wa(b);
                        this.yc(d, b)
                    }
                }
                ;
                return c
            }
            )(ok).Ue = {};
            var rk = u(function(a) {
                var c = H(a)
                  , b = c.C("isEU");
                if (ba(b)) {
                    var d = Ma(Fd(a, "is_gdpr") || "");
                    if (L(d, [0, 1]))
                        c.D("isEU", d),
                        b = !!d;
                    else if (a = Ka(a).C("wasSynced"),
                    a = n(a, "params.eu"))
                        c.D("isEU", a),
                        b = !!a
                }
                return b
            }, function(a) {
                return H(a).C("isEU")
            }), hr = z("i.e", rk), ir = z("i.ep", function(a) {
                rk(a)
            }), sk = u(xc, K), Pg = q(Kc, cc), tk = F, jr = xb("isp.stat", function(a, c) {
                return new I(function(b, d) {
                    if (eo(a, hk, "isp")) {
                        var e = function(f) {
                            ("1" === f ? b : d)();
                            tk();
                            f = Ai(hk);
                            L("isp", f.Ja) && (f.Ja = W(q(la("isp"), Wb), f.Ja),
                            f.Ja.length || (bc(f.Fa),
                            f.Fa = null))
                        };
                        tk = ha(a).F(a, ["message"], E([c, e], B(a, "isp.stat.m", Sl)));
                        da(a, e, 1500)
                    } else
                        d()
                }
                )
            }), kr = xb("isp", function(a, c) {
                sa(c, function(b) {
                    var d = Qb(function(g) {
                        return n(b, "settings." + g)
                    }, ["rt", "mf"]);
                    if (d && od(a)) {
                        var e = ze(b) && !yd(a)
                          , f = sk(c);
                        y(f, {
                            wb: d,
                            status: e ? 3 : 4
                        });
                        if (!e)
                            return d = Rl(a, c, d),
                            e = function(g) {
                                f.status = g
                            }
                            ,
                            jr(a, d).then(r(1, e))["catch"](r(2, e))
                    }
                })["catch"](B(a, "l.isp"))
            }), uk = z("fbq.o", function(a, c, b) {
                var d = n(a, "fbq");
                if (d && d.callMethod) {
                    var e = function() {
                        var g = ua(arguments)
                          , h = d.apply(void 0, g);
                        c(g);
                        return h
                    };
                    y(e, d);
                    b && D(c, b);
                    a.fbq = e
                } else
                    var f = da(a, E([a, c, aa(Na(d && d.queue))], uk), 1E3, "fbq.d");
                return M(Ta, null, a, f)
            }), Ec, qb, Fc, mg = (Ec = {},
            Ec.add_to_wishlist = "add-to-wishlist",
            Ec.begin_checkout = "begin-checkout",
            Ec.generate_lead = "submit-lead",
            Ec.add_payment_info = "add-payment-info",
            Ec), ng = (qb = {},
            qb.AddToCart = "add-to-cart",
            qb.Lead = "submit-lead",
            qb.InitiateCheckout = "begin-checkout",
            qb.Purchase = "purchase",
            qb.CompleteRegistration = "register",
            qb.Contact = "submit-contact",
            qb.AddPaymentInfo = "add-payment-info",
            qb.AddToWishlist = "add-to-wishlist",
            qb.Subscribe = "subscribe",
            qb), Pl = (Fc = {},
            Fc["1"] = mg,
            Fc["2"] = mg,
            Fc["3"] = mg,
            Fc["0"] = ng,
            Fc), Ql = [ng.AddToCart, ng.Purchase], lr = na(function(a, c) {
                var b = n(c, "ecommerce")
                  , d = n(c, "event") || "";
                if (!(b = b && d && {
                    version: "3",
                    ib: d
                }))
                    a: {
                        if (Z(c) || Da(c))
                            if (b = ua(c),
                            d = b[1],
                            "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    ib: d
                                };
                                break a
                            }
                        b = void 0
                    }
                b || (b = (b = n(c, "ecommerce")) && {
                    version: "1",
                    ib: J(",", ja(b))
                });
                b && a(b)
            }), mr = z("ag.e", function(a, c) {
                var b = []
                  , d = B(a, "ag.s", E([fa, b], D));
                "0" === c.T && sa(c, function(e) {
                    if (n(e, "settings.auto_goals") && ya(a, c) && (e = Nd(a, c, "autogoal").reachGoal)) {
                        e = E([e, c.Gb], Ol);
                        var f = lr(e);
                        e = E([a, e], Nl);
                        b.push(uk(a, e));
                        b.push(Lh(a, "dataLayer", function(g) {
                            g.ub.F(f)
                        }))
                    }
                });
                return d
            }), nr = /[^\d.,]/g, or = /[.,]$/, Ll = z("ep.pp", function(a, c) {
                if (!c)
                    return 0;
                a: {
                    var b = c.replace(nr, "").replace(or, "");
                    var d = "0" === b[b.length - 1];
                    for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                        var f = b[e - 1];
                        if (L(f, [",", "."])) {
                            d = f;
                            break a
                        }
                    }
                    d = ""
                }
                b = d ? c.split(d) : [c];
                d = d ? b[1] : "00";
                b = parseFloat(Cb(b[0]) + "." + Cb(d));
                d = Math.pow(10, 8) - .01;
                a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d),
                b = a.Math.max(b, 0));
                return b
            }), pr = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], qr = u(function(a) {
                return new RegExp(a.join("|"),"i")
            }), rr = z("ep.cp", function(a) {
                if (!a)
                    return "643";
                var c = Dh(a);
                return (a = Qb(function(b) {
                    return qr(b[0]).test(c)
                }, pr)) ? a[1] : "643"
            }), sr = u(function() {
                function a() {
                    var k = h + "0"
                      , l = h + "1";
                    f[k] ? f[l] ? (h = h.slice(0, -1),
                    --g) : (e[l] = b(8),
                    f[l] = 1) : (e[k] = b(8),
                    f[k] = 1)
                }
                function c() {
                    var k = h + "1";
                    f[h + "0"] ? f[k] ? (h = h.slice(0, -1),
                    --g) : (h += "1",
                    f[h] = 1) : (h += "0",
                    f[h] = 1)
                }
                function b(k) {
                    void 0 === k && (k = 1);
                    var l = d.slice(g, g + k);
                    g += k;
                    return l
                }
                for (var d = Mg("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""), e = {}, f = {}, g = 1, h = ""; g < d.length - 1; )
                    ("0" === b() ? c : a)();
                return e
            }), Il = z("ep.dec", function(a, c) {
                if (!c || Bd(a))
                    return [];
                var b = Mg(c)
                  , d = b[1]
                  , e = b[2]
                  , f = b.slice(3);
                if (2 !== Vf(b[0]))
                    return [];
                b = sr();
                f = f.join("");
                e = Vf(d + e);
                var g = "";
                d = "";
                for (var h = 0; d.length < e && f[h]; )
                    g += f[h],
                    b[g] && (d += String.fromCharCode(Vf(b[g])),
                    g = ""),
                    h += 1;
                b = "";
                for (f = 0; f < d.length; )
                    e = d.charCodeAt(f),
                    128 > e ? (b += String.fromCharCode(e),
                    f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1),
                    b += String.fromCharCode((e & 31) << 6 | g & 63),
                    f += 2) : (g = d.charCodeAt(f + 1),
                    b += String.fromCharCode((e & 15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63),
                    f += 3);
                d = Bb(a, b);
                return Z(d) ? A(Ro, d) : []
            }), Kl = z("ep.ent", function(a, c, b) {
                a = "" + Ua(a, 10, 99);
                b = "" + 100 * c + b + a;
                if (16 < Da(b))
                    return "";
                b = Ng("0", 16, b);
                c = b.slice(0, 8);
                b = b.slice(-8);
                c = (+c ^ 92844).toString(35);
                b = (+b ^ 92844).toString(35);
                return "" + c + "z" + b
            }), vk = q(Lg, rr), wk = z("ep.ctp", function(a, c, b, d) {
                var e = vk(a, b)
                  , f = Kg(a, d);
                Jg(a, c, e, f);
                za("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                    var g = vk(a, b)
                      , h = Kg(a, d);
                    if (e !== g || f !== h)
                        e = g,
                        f = h,
                        Jg(a, c, e, f)
                }
                )).observe(a.document.body, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                })
            }), tr = z("ep.chp", function(a, c, b, d, e) {
                b && Ge(a, c);
                return d || e ? ha(a).F(a.document, ["click"], B(a, "ep.chp.cl", E([a, c, d, e], Jl))) : F
            }), yr = z("ep.i", function(a, c) {
                return fd(a) ? Hl(a, c).then(function(b) {
                    var d = b.Id
                      , e = d[0]
                      , f = d[1]
                      , g = d[2]
                      , h = d[3]
                      , k = d[4]
                      , l = d[5]
                      , m = d[6]
                      , p = d[7]
                      , t = d[8]
                      , w = d[9]
                      , x = d[10]
                      , v = d[11]
                      , C = d[12]
                      , N = d[13]
                      , R = d[14]
                      , ea = d[15];
                    if (!b.isEnabled)
                        return I.resolve(F);
                    var ia = Cd(a, e)
                      , Kb = Cd(a, h)
                      , hg = Cd(a, m)
                      , ur = Cd(a, t)
                      , vr = "" + e + f + g === "" + h + k + l;
                    return new I(function(wr, xr) {
                        Xc(a)(lb(xr, function() {
                            ia && wk(a, c, f, g, x, v, C);
                            Kb && !vr && wk(a, c, k, l, N, R, ea);
                            wr(tr(a, c, hg || ur, p, w))
                        }))
                    }
                    )
                }) : I.resolve(F)
            }), pl = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"], Gl = q(ja, rc), zr = z("cc.i", function(a, c) {
                var b = E([a, c], Fl);
                b = E([a, b, 300, void 0], da);
                sa(c, b)
            }), Ar = r("9-d5ve+.r%7", P), Br = z("ad", function(a, c) {
                if (!c.Ha) {
                    var b = H(a);
                    if (!b.C("adBlockEnabled")) {
                        var d = function(m) {
                            L(m, ["2", "1"]) && b.D("adBlockEnabled", m)
                        }
                          , e = ec(a)
                          , f = e.C("isad");
                        if (f)
                            d(f);
                        else {
                            var g = r("adStatus", b.D)
                              , h = function(m) {
                                m = m ? "1" : "2";
                                d(m);
                                g("complete");
                                e.D("isad", m, 1200);
                                return m
                            }
                              , k = ma(a, "adb", c);
                            if (!b.C("adStatus")) {
                                g("process");
                                var l = "metrika/a" + Ar().replace(/[^a-v]+/g, "") + "t.gif";
                                Cl(a, function() {
                                    return k({
                                        $: {
                                            ea: l
                                        }
                                    }).then(r(!1, h))["catch"](r(!0, h))
                                })
                            }
                        }
                    }
                }
            }), Cr = z("pr.p", function(a, c) {
                var b, d;
                if (yf(a)) {
                    var e = ma(a, "5", c)
                      , f = va((b = {},
                    b.pq = 1,
                    b.ar = 1,
                    b));
                    e({
                        H: f,
                        G: (d = {},
                        d["page-url"] = S(a).href,
                        d["page-ref"] = n(a, "document.referrer") || "",
                        d)
                    }, c)["catch"](B(a, "pr.p.s"))
                }
            }), Ig = !1, Dr = z("fid", function(a) {
                var c, b = F;
                if (!U(a.PerformanceObserver))
                    return b;
                var d = H(a);
                if (d.C("fido"))
                    return b;
                d.D("fido", !0);
                var e = new a.PerformanceObserver(B(a, "fid", function(f) {
                    f = f.getEntries()[0];
                    d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                    b()
                }));
                b = function() {
                    return e.disconnect()
                }
                ;
                try {
                    e.observe((c = {},
                    c.type = "first-input",
                    c.buffered = !0,
                    c))
                } catch (f) {}
                return b
            }), Gg = {
                1882689622: 1,
                2318205080: 1,
                3115871109: 1,
                3604875100: 1,
                339366994: 1,
                2890452365: 1,
                849340123: 1,
                173872646: 1,
                2343947156: 1,
                655012937: 1,
                3724710748: 1,
                3364370932: 1,
                1996539654: 1,
                2065498185: 1,
                823651274: 1,
                12282461: 1,
                1555719328: 1,
                1417229093: 1,
                138396985: 1,
                3015043526: 1
            }, Er = z("lt.p", xb("lt.p", function(a) {
                var c;
                if (za("PerformanceObserver", a.PerformanceObserver)) {
                    var b = 0
                      , d = new a.PerformanceObserver(B(a, "lt.o", function(e) {
                        e && e.getEntries && (e = e.getEntries(),
                        b = O(function(f, g) {
                            return f + g.duration
                        }, b, e),
                        kd(a).D("lt", b))
                    }));
                    try {
                        d.observe((c = {},
                        c.type = "longtask",
                        c.buffered = !0,
                        c))
                    } catch (e) {
                        return F
                    }
                    return function() {
                        return d.disconnect()
                    }
                }
                return F
            })), Fr = u(q(T("performance.memory.jsHeapSizeLimit"), ra("concat", ""))), Gr = ["availWidth", "availHeight", "availTop"], Hr = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), Ir = ["webgl", "experimental-webgl"], zl = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], Ce = r(La("ccf"), Sa), yl = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"), Eg = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "), wl = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), rl = u(yh), Dg = u(Bb, gb), Jr = z("phc.p", function(a, c) {
                return Zj(a) ? F : sa(c, function(b) {
                    var d = c.id
                      , e = Ic(a, void 0, d)
                      , f = e.C("phc_settings") || "";
                    if (b = n(b, "settings.phchange")) {
                        var g = kb(a, b) || "";
                        g !== f && e.D("phc_settings", g)
                    } else
                        f && (b = Dg(a, f));
                    e = n(b, "clientId");
                    f = n(b, "orderId");
                    b = n(b, "phones") || [];
                    e && f && b.length && (f = {
                        Ra: "",
                        Wa: "",
                        ad: 0,
                        ba: {},
                        ja: [],
                        Gc: !1,
                        Hb: !0,
                        l: a,
                        sc: c
                    },
                    y(f, {
                        Gc: !0
                    }),
                    Cg(a, d, f),
                    b = Wc(a),
                    e = Ah(a, b, 1E3),
                    d = M(Cg, null, a, d, f),
                    e.F(d),
                    Bh(a, b))
                })
            }), og = u(function(a, c) {
                var b = H(a)
                  , d = Ka(a)
                  , e = []
                  , f = E([a, c, b, d], Om);
                Rc(a) || Pm(a, "14.1") || e.push(E([ol, "pp", ""], f));
                var g = ck(a) && !Ae(a, 68);
                g || e.push(E([ql, "pu", ""], f));
                g || d.Nb || od(a) || (e.push(E([nl, "zzlc", "na"], f)),
                e.push(E([ml, "cc", ""], f)));
                return e.length ? {
                    ma: function(h, k) {
                        if (0 === b.C("isEU"))
                            try {
                                D(Mh, e)
                            } catch (l) {}
                        k()
                    },
                    N: function(h, k) {
                        var l = h.H;
                        if (l && 0 === b.C("isEU"))
                            try {
                                D(Fa(l), e)
                            } catch (m) {}
                        k()
                    }
                } : {}
            }, function(a, c) {
                return K(c)
            }), Kr = q(function(a) {
                a = n(a, "navigator.plugins") || [];
                return Da(a) ? q(Na, Ha, np(function(c, b) {
                    return c.name > b.name ? 1 : 2
                }), db(Lm))(a) : ""
            }, Sc(",")), Lr = function(a) {
                return function(c) {
                    var b = mb(c);
                    if (!b)
                        return "";
                    b = b("canvas");
                    var d = []
                      , e = a()
                      , f = e.Ld;
                    e = e.Hd;
                    try {
                        var g = ra("getContext", b);
                        d = A(q(P, g), e)
                    } catch (h) {
                        return ""
                    }
                    return (g = Qb(P, d)) ? f(c, {
                        canvas: b,
                        Ad: g
                    }) : ""
                }
            }(function() {
                return {
                    Hd: Ir,
                    Ld: il
                }
            }), gl = ["name", "lang", "localService", "voiceURI", "default"], Mr = z("p.tfs", function(a) {
                var c = H(a);
                if (!c.C("tfs")) {
                    c.D("tfs", !0);
                    c = ha(a);
                    var b = F;
                    b = c.F(a, ["message"], function(d) {
                        try {
                            var e = d.origin
                        } catch (h) {}
                        if (e && "https://iframe-toloka.com" === e && (d = Bb(a, d.data),
                        Aa(d) && "appendremote" === d.action))
                            if (d = Ka(a),
                            d.C("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                d.D("tfsc", 1);
                                var f, g;
                                H(a).D("_u", (f = {},
                                f.getCachedTags = Te,
                                f.button = (g = {},
                                g.closest = r(a, Ue),
                                g.select = Ve,
                                g.getData = r(a, We),
                                g),
                                f));
                                nc(a, {
                                    src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js"
                                });
                                b()
                            } else
                                a.close()
                    })
                }
            }), Nr = Qa(/[a-z\u0430-\u044f,.]/gi), Or = z("ice", function(a, c, b) {
                var d = ya(a, c);
                if (d) {
                    var e = n(b, "target");
                    if (e && (c = n(e, "value"),
                    (c = fb(c)) && !(100 <= Da(c)))) {
                        b = Cb(c);
                        var f = 0 < c.indexOf("@")
                          , g = "tel" === n(e, "type") || !f && Da(b);
                        if (f || g) {
                            if (g) {
                                if (Nr(c))
                                    return;
                                g = c[0];
                                var h = b[0];
                                if (g !== h && "+" !== g)
                                    return;
                                var k = c[1];
                                if ("+" === g && k !== h)
                                    return;
                                c = c[Da(c) - 1];
                                g = b[Da(b) - 1];
                                if (c !== g)
                                    return;
                                c = b
                            }
                            b = f ? 5 : 11;
                            g = f ? 100 : 16;
                            Da(c) < b || Da(c) > g || bi(a, c).then(function(l) {
                                var m, p, t, w = sf(a, e);
                                d.params((m = {},
                                m.__ym = (p = {},
                                p.fi = xf((t = {},
                                t.a = f ? 1 : 0,
                                t.b = w,
                                t.c = l,
                                t)).wa(),
                                p),
                                m))
                            }, B(a, "ice.s"))
                        }
                    }
                }
            }), Pr = ["text", "email", "tel"], Qr = ["cc-", "name", "shipping"], Rr = z("icei", function(a, c) {
                if (fd(a) && Wj(a)) {
                    var b = !1
                      , d = [];
                    Xc(a)(lb(F, E([c, function(e) {
                        var f = n(e, "settings.cf");
                        e = hr(a) || n(e, "settings.eu");
                        if (f && !e && !b) {
                            var g = ha(a);
                            f = nb("input", a.document.body);
                            D(function(h) {
                                Oe(a, h) || !L(h.type, Pr) || Ja(P, A(r(h.autocomplete, Lc), Qr)) || d.push(g.F(h, ["blur"], E([a, c], Or)))
                            }, f)
                        }
                    }
                    ], sa)));
                    return function() {
                        D(fa, d);
                        b = !0
                    }
                }
            }), zg, Sr = z("p.ai", function(a, c) {
                if (Rc(a) || se(a))
                    return sa(c, function(b) {
                        var d;
                        if (b = n(b, "settings.sbp"))
                            return yg(a, y({}, b, (d = {},
                            d.c = c.id,
                            d)), 10)
                    })
            }), Tr = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "), xk = xb("uah", function(a) {
                if (!za("getHighEntropyValues", n(a, "navigator.userAgentData.getHighEntropyValues")))
                    return I.reject("0");
                try {
                    return a.navigator.userAgentData.getHighEntropyValues(Tr).then(function(c) {
                        if (!Aa(c))
                            throw "2";
                        return c
                    }, function() {
                        throw "1";
                    })
                } catch (c) {
                    return I.reject("3")
                }
            }), yk = new RegExp(J("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")), Xk = u(function(a) {
                var c = Ya(a);
                return (c = yk.test(c)) ? I.resolve(c) : xk(a).then(function(b) {
                    try {
                        return O(function(d, e) {
                            return d || yk.test(e.brand)
                        }, !1, b.brands)
                    } catch (d) {
                        return !1
                    }
                }, r(!1, P))
            }), Nb = ["0", "1", "2", "3"], mc = Nb[0], re = Nb[1], Ur = Nb[2], we = A(q(P, ra("concat", "GDPR-ok-view-detailed-")), Nb), xd = aa("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), we, ["28", "29", "30"]), Vr = "3 13 14 15 16 17 28".split(" "), ve = q(db(T("ymetrikaEvent.type")), Uf(hc(xd))), dl = {
                url: "https://yastatic.net/s3/gdpr/popup/v2/",
                Jc: "ru en et fi lt lv pl fr no sr".split(" "),
                Oc: "_two_main_buttons"
            }, Mb, cl = (Mb = {},
            Mb["GDPR-ok"] = "ok",
            Mb["GDPR-ok-view-default"] = "ok-default",
            Mb["GDPR-ok-view-detailed"] = "ok-detailed",
            Mb["GDPR-ok-view-detailed-0"] = "ok-detailed-all",
            Mb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech",
            Mb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics",
            Mb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other",
            Mb), zd = [], tg = q(ve, db(mp(xd)), Sc(",")), ug = q(Uf(hc(xd)), Da, Boolean), Vk = u(function(a, c) {
                var b = c.C("gdpr");
                return L(b, Nb) ? "-" + b : ""
            });
            "function" == typeof Promise && Promise.resolve();
            Ha([void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0]);
            var zk = u(Vc), Wr = u(function() {
                var a = O(function(c, b) {
                    "ru" !== b && (c[b] = gk + "." + b);
                    return c
                }, {}, pf);
                D(function(c) {
                    a[c] = c
                }, ja(ik));
                return a
            }), Pk = u(function(a) {
                a = S(a).hostname;
                return (a = Qb(q(T("1"), zh("test"), ob(fa)(a)), Ba(ik))) && a[0]
            }), Ak = function(a, c) {
                return function(b, d) {
                    var e = K(d);
                    e = Wr(e);
                    var f = Nk(b, e)
                      , g = H(b)
                      , h = Ab(b);
                    return od(b) || hd(b) ? {} : {
                        N: function(k, l) {
                            var m = k.H
                              , p = rg(b);
                            m = !(m && m.C("pv"));
                            if (!p || h || m || !f.length)
                                return l();
                            if (g.C("startSync"))
                                zk(b).push(l);
                            else {
                                g.D("startSync", !0);
                                p = E([b, f, F, !1], a);
                                m = te[0];
                                if (!m)
                                    return l();
                                m(b).then(p).then(l, q(Mc(l), B(b, c)))["catch"](F)
                            }
                        }
                    }
                }
            }(function(a, c, b, d) {
                var e = X(a)
                  , f = H(a)
                  , g = Ka(a);
                b = eg(a, "c");
                var h = Hb(a, b);
                return O(function(k, l) {
                    function m() {
                        var w = g.C("synced");
                        f.D("startSync", !1);
                        w && (w[l.fe] = p,
                        g.D("synced", w));
                        w = zk(a);
                        D(fa, w);
                        gf(w)
                    }
                    var p, t = h({
                        O: {
                            aa: ["sync.cook"],
                            ya: 1500
                        }
                    }, [ta.Aa + "//" + l.xe + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                        p = e(bb);
                        m()
                    })["catch"](function() {
                        p = e(bb) - 1435;
                        m()
                    });
                    t = r(t, P);
                    return k.then(t)
                }, I.resolve(), c)["catch"](B(a, "ctl"))
            }, "sy.c"), rb, Lk = (rb = {},
            rb.brands = "chu",
            rb.architecture = "cha",
            rb.bitness = "chb",
            rb.uaFullVersion = "chf",
            rb.fullVersionList = "chl",
            rb.mobile = "chm",
            rb.model = "cho",
            rb.platform = "chp",
            rb.platformVersion = "chv",
            rb), Xr = xb("ot", function(a, c) {
                return ha(a).F(a, ["message"], z("ot", r(E([a, c], Kc), Ik)))
            }), Gk = z("destruct.e", function(a, c, b) {
                return function() {
                    var d = H(a)
                      , e = c.id;
                    D(function(f, g) {
                        return U(f) && B(a, "dest.fr." + g, f)()
                    }, b);
                    delete d.C("counters")[K(c)];
                    delete a["yaCounter" + e]
                }
            }), Gc = H(window);
            Gc.xa("hitParam", {});
            Gc.xa("lastReferrer", window.location.href);
            (function() {
                Q.push(function(a, c) {
                    var b;
                    return b = {},
                    b.firstPartyParams = aq(a, c),
                    b.firstPartyParamsHashed = Bn(a, c),
                    b
                });
                he.push("fpp", "fpmh")
            }
            )();
            (function() {
                var a = H(window);
                a.xa("getCounters", bq(window));
                Hc.push(cq);
                Xf.push(function(c, b) {
                    b.counters = a.C("getCounters")
                })
            }
            )();
            (function() {
                Q.push(function(a, c) {
                    var b;
                    eb(a, (b = {},
                    b.counterKey = K(c),
                    b.name = "counter",
                    b.data = Yi(c),
                    b))
                })
            }
            )();
            pa["1"] = ab;
            Q.push(dq);
            oa["1"] = Zb;
            pb(Wh, -1);
            Db["1"] = [[Wh, -1], [ae, 1], [Wd, 2], [Fb(), 3]];
            Q.push(eq);
            Q.push(z("p.ar", function(a, c) {
                var b, d = ma(a, "a", c);
                return b = {},
                b.hit = function(e, f, g, h, k, l) {
                    var m, p, t = {
                        G: {},
                        H: va((m = {},
                        m.pv = 1,
                        m.ar = 1,
                        m))
                    };
                    if (e)
                        return f = Aa(f) ? {
                            title: f.title,
                            Rc: f.referer,
                            R: f.params,
                            cb: f.callback,
                            l: f.ctx
                        } : {
                            title: f,
                            Rc: g,
                            R: h,
                            cb: k,
                            l: l
                        },
                        g = ad(c),
                        g.url !== e && (g.ref = g.url,
                        g.url = e),
                        e = e || S(a).href,
                        g = f.Rc || g.ref || a.document.referrer,
                        h = ub(a, c, "PageView. Counter " + c.id + ". URL: " + e + ". Referrer: " + g, f.R),
                        k = y(t.M || {}, {
                            R: f.R,
                            title: f.title
                        }),
                        t = d(y(t, {
                            M: k,
                            G: y(t.G || {}, (p = {},
                            p["page-url"] = e,
                            p["page-ref"] = g,
                            p))
                        }), c).then(h),
                        qc(a, "p.ar.s", t, f.cb || F, f.l)
                }
                ,
                b
            }));
            pa.a = ab;
            Db.a = Eb;
            oa.a = Vj;
            Q.push(Nd);
            pa.g = ab;
            oa.g = Zb;
            Db.g = Eb;
            Q.push(fq);
            Q.push(gq);
            Db.t = Eb;
            pa.t = ab;
            oa.t = Zb;
            Q.push(iq);
            Db["2"] = Eb;
            pa["2"] = ab;
            oa["2"] = Zb;
            pa.r = zf("r");
            oa.r = Vj;
            yb.push(z("p.r", function(a, c) {
                var b = kq(a)
                  , d = ma(a, "r", c)
                  , e = B(a, "rts.p");
                return sa(c, E([function(f, g) {
                    var h = {
                        id: g.Ed,
                        T: g.T
                    }
                      , k = {
                        O: {
                            V: g.pe
                        },
                        H: va(g.zd),
                        G: g.R,
                        M: {
                            Xa: g.Xa
                        },
                        $: {
                            ea: g.ea
                        }
                    };
                    g.qa && (k.qa = xf(g.qa));
                    h = d(k, h)["catch"](e);
                    return f.then(r(h, P))
                }
                , I.resolve(), b], O))["catch"](e)
            }));
            V("r", function(a) {
                return {
                    N: function(c, b) {
                        var d = c.H
                          , e = void 0 === d ? va() : d
                          , f = c.M.Xa
                          , g = $c(a);
                        d = e.C("rqnl", 0) + 1;
                        e.D("rqnl", d);
                        if (e = n(g, J(".", [f, "browserInfo"])))
                            e.rqnl = d,
                            Ze(a);
                        b()
                    },
                    ma: function(c, b) {
                        Rh(a, c);
                        b()
                    }
                }
            }, 1);
            pb(Pd, 100);
            V("1", Pd, 100);
            Q.push(lq);
            V("n", ae, 1);
            V("n", Wd, 2);
            V("n", Fb(), 3);
            V("n", Pd, 100);
            pa.n = ab;
            oa.n = Zb;
            wc({
                rc: {
                    da: "accurateTrackBounce"
                }
            });
            Q.push(mq);
            pa.m = zf("cm");
            oa.m = Wp;
            V("m", Fb(["u", "v", "vf"]), 1);
            V("m", Pd, 2);
            wc({
                Cd: {
                    da: "clickmap"
                }
            });
            Q.push(nq);
            Q.push(oq);
            Q.push(qq);
            Q.push(rq);
            (function() {
                Q.push(sq);
                he.push("ecommerce");
                wc({
                    Gb: {
                        da: "ecommerce",
                        Va: function(a) {
                            if (a)
                                return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            }
            )();
            Q.push(tq);
            yb.push(vq);
            Q.push(wq);
            he.push("user_id");
            Q.push(xq);
            pb(function(a, c) {
                return {
                    ma: function(b, d) {
                        var e = ya(a, c);
                        e = e && e.userParams;
                        var f = (b.M || {}).lc;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            ud.push(Zp);
            Q.push(Aq);
            Q.push(Bq);
            Yf.push(function(a) {
                var c = H(a);
                c.C("i") || (c.D("i", !0),
                ha(a).F(a, ["message"], r(a, Sm)))
            });
            (function() {
                var a, c = (a = {},
                a.tp = q(gb, Zi, Jb),
                a.tpid = q(gb, Eo),
                a);
                y(Xd, c)
            }
            )();
            pb(Uc, 20);
            V("n", Uc, 20);
            V("1", Uc, 20);
            (function() {
                var a;
                Nh.push("impressions", "click", "promoView", "promoClick");
                var c = (a = {},
                a.promotion_name = "name",
                a.promotion_id = "id",
                a.item_id = "product_id",
                a.item_name = "product_name",
                a);
                Yc.view_item_list = {
                    event: "impressions",
                    ia: Sb
                };
                Yc.select_item = {
                    event: "click",
                    ra: "products",
                    ia: Sb
                };
                Yc.view_promotion = {
                    event: "promoView",
                    ra: "promotions",
                    ia: c
                };
                Yc.select_promotion = {
                    event: "promoClick",
                    ra: "promotions",
                    ia: c
                }
            }
            )();
            Q.push(function(a, c) {
                var b;
                return b = {},
                b.ecommerceAdd = z("ecm.a", Cq(a, c)),
                b.ecommerceRemove = z("ecm.r", Dq(a, c)),
                b.ecommerceDetail = z("ecm.d", Eq(a, c)),
                b.ecommercePurchase = z("ecm.p", Fq(a, c)),
                b
            });
            (function() {
                var a, c = {};
                c.bu = Nq;
                c.pri = Bm;
                c.ds = Em;
                c.co = function(b) {
                    return je(H(b).C("jn"))
                }
                ;
                c.td = Pq;
                y(c, (a = {},
                a.iss = q(yp, Jb),
                a.hdl = q(zp, Jb),
                a.iia = q(Ap, Jb),
                a.cpf = q(Mq, Jb),
                a.ntf = u(function(b) {
                    a: switch (n(b, "Notification.permission")) {
                    case "denied":
                        b = !1;
                        break a;
                    case "granted":
                        b = !0;
                        break a;
                    default:
                        b = null
                    }
                    return cb(b) ? null : b ? 2 : 1
                }),
                a.eu = $b("isEU"),
                a.ns = Sj,
                a.np = function(b) {
                    if (Ua(b, 0, 100))
                        b = null;
                    else {
                        b = fb(Qe(b), 100);
                        for (var d = [], e = 0; e < b.length; e++) {
                            var f = b.charCodeAt(e);
                            128 > f ? d.push(f) : (127 < f && 2048 > f ? d.push(f >> 6 | 192) : (d.push(f >> 12 | 224),
                            d.push(f >> 6 & 63 | 128)),
                            d.push(f & 63 | 128))
                        }
                        b = Xg(d)
                    }
                    return b
                }
                ,
                a));
                y(Xd, c)
            }
            )();
            (function() {
                var a = {};
                a.hc = $b("hc");
                a.oo = $b("oo");
                a.pmc = $b("cmc");
                a.lt = function(c) {
                    var b = kd(c).C("lt", null);
                    return b ? c.Math.round(100 * b) : b
                }
                ;
                a.re = q(Zn, Jb);
                a.aw = function(c) {
                    c = Qb(q(qa, Wb), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return qa(c) ? null : je(!c)
                }
                ;
                a.yu = function(c) {
                    var b = S(c).hostname;
                    return L(b, ["dzen.ru", "ya.ru"]) ? (Ic(c, "").C("yandexuid") || "").substring(0, 25) : null
                }
                ;
                a.ifc = $b("ifc");
                a.ifb = $b("ifb");
                a.ecs = $b("ecs");
                a.csi = $b("scip");
                y(lf, a)
            }
            )();
            oa.er = Dc;
            (function(a) {
                try {
                    var c = eg(a, "er")
                      , b = wm(a, c);
                    Wi.push(function(d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {},
                        h[d] = (k = {},
                        k[ta.bb] = (l = {},
                        l[e] = (m = {},
                        m[f] = g ? (p = {},
                        p[a.location.href] = g,
                        p) : a.location.href,
                        m),
                        l),
                        k),
                        h))
                    })
                } catch (d) {}
            }
            )(window);
            (function() {
                ud.push(Am);
                Vd.unshift(vm);
                bk.push(function(a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    H(a).D("oo", c)
                })
            }
            )();
            pb(function(a, c) {
                return {
                    N: function(b, d) {
                        var e = b.G
                          , f = b.H;
                        !jk[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp,
                        jk[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            Q.push(Uq);
            Db.e = Eb;
            pa.e = ab;
            oa.e = Zb;
            wc({
                exp: {
                    da: "experiments"
                }
            });
            lj.experiments = "ex";
            (function() {
                var a;
                te.push(Vq);
                pa.f = ab;
                y(oa, (a = {},
                a.f = Uj,
                a));
                V("f", Fb(), 1);
                V("f", oi, 2);
                V("f", Uc, 20)
            }
            )();
            ud.push(function(a, c) {
                var b = {
                    fa: K(c),
                    Fb: ya(a, c),
                    dd: X(a),
                    Sb: Ka(a)
                }
                  , d = b.dd(bb);
                if (!b.Sb.Nb) {
                    var e = b.Sb.C("ymoo" + b.fa);
                    if (e && 30 > d - e)
                        b = b.fa,
                        delete H(a).C("counters", {})[b],
                        Sa(La("uws"));
                    else
                        sa(c, Wq(b))["catch"](B(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = [wb];
                y(oa, (a = {},
                a.s = b,
                a.S = b,
                a.u = Dc,
                a));
                y(pa, (c = {},
                c.s = Hb,
                c.S = ab,
                c.u = Hb,
                c));
                V("s");
                V("u");
                V("S", Fb(["v", "hid", "u", "vf", "rn"]), 1);
                Q.push(z("s", im))
            }
            )();
            pa["8"] = Hb;
            oa["8"] = [jf];
            Tj.push([jf, 0]);
            Q.push(z("p.us", function(a, c) {
                return sa(c, function(b) {
                    var d, e = n(b, "settings.sbp");
                    if (e)
                        return lh(a, b, {
                            Ea: c,
                            wb: "8",
                            data: y({}, e, (d = {},
                            d.c = c.id,
                            d)),
                            Qb: "cs"
                        })
                })
            }));
            V("p", Fb(kk), 1);
            pa.p = function(a, c, b) {
                return function(d, e) {
                    var f, g = y({
                        H: va()
                    }, d);
                    g.G || (g.G = {});
                    var h = g.G
                      , k = g.Ba;
                    k = void 0 === k ? {} : k;
                    h["wv-hit"] = h["wv-hit"] || "" + Ub(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.wmode = "0";
                    h["wv-part"] = "0";
                    h["page-url"] = h["page-url"] || a.location.href;
                    h["wv-type"] || (h["wv-type"] = k.Fc ? "5" : "4");
                    h = {
                        $: {
                            ea: "webvisor/" + e.id
                        },
                        O: y(g.O, {
                            va: (f = {},
                            f["Content-Type"] = "text/plain",
                            f),
                            $a: "POST"
                        }),
                        G: h
                    };
                    f = Ia(Af(a, "pub", e), b);
                    return be(a, c, f)(y(g, h))
                }
            }
            ;
            oa.p = Ha([vb, wb]);
            yb.push(Zq);
            V("4", Fb(kk), 1);
            pa["4"] = function(a, c, b) {
                return function(d, e, f) {
                    var g;
                    d = y({
                        H: va()
                    }, d);
                    d.G || (d.G = {});
                    var h = d.G
                      , k = d.Ba;
                    k = void 0 === k ? {} : k;
                    h.wmode = "0";
                    h["wv-part"] = "" + f;
                    h["wv-hit"] = h["wv-hit"] || "" + Ub(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.rn = h.rn || "" + Ua(a);
                    h["wv-type"] || (h["wv-type"] = k.Fc ? "3" : "2");
                    f = {
                        $: {
                            ea: "webvisor/" + e.id
                        },
                        O: y(d.O, {
                            va: (g = {},
                            g["Content-Type"] = "text/plain",
                            g),
                            $a: "POST"
                        }),
                        G: h
                    };
                    e = Ia(Af(a, "wv", e), b);
                    return be(a, c, e)(y(d, f))
                }
            }
            ;
            oa["4"] = Ha([vb, wb, tc]);
            yb.push(gr);
            wc({
                nd: {
                    da: "webvisor",
                    Va: Boolean
                }
            });
            Q.push(kr);
            V("pi");
            pa.pi = Hb;
            oa.pi = Dc;
            Hp("w", function(a, c) {
                return {
                    N: function(b, d) {
                        if (b.H) {
                            var e = sk(c)
                              , f = e.status;
                            "rt" === e.wb && f && (b.H.D("rt", f),
                            b.$ || (b.$ = {}),
                            b.$.Xd = 1 === f ? Pg(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            Q.push(mr);
            Q.push(yr);
            oa["6"] = Ha([vb, wb]);
            pa["6"] = Hb;
            Q.push(zr);
            Q.push(Qq);
            (function() {
                Xf.push(function(a, c) {
                    c.informer = Dl(a)
                })
            }
            )();
            pb(Ee, 6);
            V("1", Ee, 6);
            V("adb");
            V("n", Ee, 4);
            oa.adb = Dc;
            pa.adb = be;
            Hc.push(Br);
            oa["5"] = Zb;
            pa["5"] = ab;
            Db["5"] = W(q(rc, hc([ae, Wd]), Wb), Eb);
            Q.push(Cr);
            V("5", Uc, 20);
            pb(Hg, 7);
            V("n", Hg, 6);
            yb.push(Dr);
            pa.d = ab;
            V("d", Fb(["hid", "u", "v", "vf"]), 1);
            oa.d = Dc;
            V("n", function(a, c) {
                return {
                    ma: function(b, d) {
                        if (!b.M || !b.M.force) {
                            var e = .002, f = c.id === ta.vd ? 1 : .002, g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = Re(a);
                            if (p && U(p.getEntriesByType) && (e = Math.random() > e,
                            f = Math.random() > f,
                            !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var t = {}, w = {}, x = {}, v = Bl(), C = S(a).href, N = 0; N < p.length; N += 1) {
                                    var R = p[N]
                                      , ea = R.name.replace(/^https?:\/\//, "").split("?")[0]
                                      , ia = cc(ea)
                                      , Kb = (g = {},
                                    g.dns = Math.round(R.domainLookupEnd - R.domainLookupStart),
                                    g.tcp = Math.round(R.connectEnd - R.connectStart),
                                    g.duration = Math.round(R.duration),
                                    g.response = Math.round(R.responseEnd - R.requestStart),
                                    g);
                                    "script" !== R.initiatorType || e || (w[ea] = y(Kb, (h = {},
                                    h.name = R.name,
                                    h.decodedBodySize = R.decodedBodySize,
                                    h)));
                                    !Gg[ia] && !v[ia] || t[ea] || f || (t[ea] = y(Kb, (k = {},
                                    k.pages = C,
                                    k)))
                                }
                                ja(t).length && (x.timings8 = t);
                                ja(w).length && (x.scripts = w);
                                if (ja(x).length)
                                    ma(a, "d", c)({
                                        H: va((l = {},
                                        l.ar = 1,
                                        l.pv = 1,
                                        l)),
                                        O: {
                                            V: kb(a, x) || void 0
                                        },
                                        G: (m = {},
                                        m["page-url"] = C,
                                        m)
                                    }, {
                                        id: ta.xd,
                                        T: "0"
                                    })["catch"](B(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            oa.ci = [wb];
            pa.ci = Hb;
            yb.push(z("p.sci", function(a, c) {
                return sa(c, r(a, Al))["catch"](B(a, "ins.cs"))
            }));
            Q.push(Er);
            yb.push(Lq);
            Q.push(Jr);
            pb(og, 8);
            V("f", og, 3);
            V("n", og, 5);
            Hc.push(function(a) {
                return z("fip", function(c) {
                    if (!ck(c) || hd(c)) {
                        var b = Ka(c);
                        if (!b.C("fip")) {
                            var d = q(db(q(function(e, f) {
                                return z("fip." + f, e)(c)
                            }, M($o, null))), Sc("-"))(a);
                            b.D("fip", d)
                        }
                    }
                })
            }([Lr, Kr, function(a) {
                var c = n(a, "ApplePaySession")
                  , b = S(a).protocol;
                a = c && "https:" === b && !Ab(a) ? c : void 0;
                c = "";
                if (!a)
                    return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (U(d))
                        for (var e = 1; 20 >= e; e += 1)
                            b += d.call(a, e) ? "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }
            , function(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }
            , function(a) {
                if (a = Jq(a))
                    try {
                        for (var c = [], b = 0; b < dk.length; b += 1) {
                            var d = a(dk[b]);
                            c.push(d)
                        }
                        var e = c
                    } catch (f) {
                        e = []
                    }
                else
                    e = [];
                return e ? J("x", e) : ""
            }
            , function(a) {
                var c = void 0;
                void 0 === c && (c = Hr);
                var b = n(a, "navigator") || {};
                c = A(r(b, n), c);
                c = J("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = Ca(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Da(e)
            }
            , Fr, function(a) {
                a = n(a, "screen") || {};
                return J("x", A(r(a, n), Gr))
            }
            , function(a) {
                return J("x", fl(a) || [])
            }
            , function(a) {
                a = vl(a);
                return Z(a) ? J("x", a) : a
            }
            , function(a) {
                return (a = xl(a)) ? q(pp, Uf(P), db(E(["", ["matches", "media"]], hl)), r("x", J))(a) : ""
            }
            ]));
            pb(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.H
                          , e = Ka(a).C("fip");
                        e && d && (d.D("fip", e),
                        wd(c, "fip", je(e)));
                        b()
                    }
                }
            }, 9);
            V("h", function(a) {
                return {
                    ma: function(c, b) {
                        var d = c.te;
                        Md(c) && d && H(a).D("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            Hc.push(ir);
            Yf.push(Mr);
            yb.push(Rr);
            Q.push(Sr);
            wc({
                Le: {
                    da: "yaDisableGDPR"
                },
                Me: {
                    da: "yaGDPRLang"
                }
            });
            Vd.push(function(a, c) {
                return {
                    N: E([a, c], Uk)
                }
            });
            vi.push("gdpr", "gdpr_popup");
            of.push(function(a, c) {
                var b = vd(a);
                b = ve(b);
                if (W(hc(Vr), b).length)
                    return !0;
                b = c(a, "gdpr");
                return L(b, [mc, Ur])
            });
            Vd.push(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.$ || {}, e;
                        (e = n(a, "document.referrer")) ? (e = Rd(a, e).host,
                        e = ci(e),
                        e = gk + "." + (e || Rq)) : e = Rb;
                        c.$ = y(d, {
                            Yd: [e]
                        });
                        b()
                    }
                }
            });
            pb(Ak, 5);
            V("1", Ak, 6);
            oa.c = Dc;
            pa.c = Hb;
            V("h", function(a) {
                return {
                    N: function(c, b) {
                        Md(c) ? xk(a).then(Jk, Mk).then(function(d) {
                            c.G || (c.G = {});
                            c.G.uah = d;
                            b()
                        }, b) : b()
                    }
                }
            }, 7);
            (function() {
                function a(c) {
                    var b = dc("canvas", c.document);
                    if (b && (b = gd(b))) {
                        var d = vf(c) || Nc(c)
                          , e = d[0];
                        d = d[1];
                        if (.3 <= Di(c, b, {
                            h: d,
                            w: e
                        }) / d * e)
                            return H(c).D("hc", 1),
                            !0
                    }
                    return !1
                }
                Q.push(z("hcp", function(c) {
                    a(c) || da(c, r(c, a), 3E3)
                }))
            }
            )();
            Q.push(z("p.ot", Xr));
            if (window.Ya && me) {
                var Bk = ta.Eb;
                window.Ya[Bk] = me;
                $p(window);
                D(q(uc([window, window.Ya[Bk]]), fa), Xf)
            }
            D(q(uc([window]), fa), Yf)
        }
        )()
    } catch (me) {}
    ;
}
).call(this)
