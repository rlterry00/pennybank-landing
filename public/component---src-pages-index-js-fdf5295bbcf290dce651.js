(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "+ar0": function(e, t, n) {
      var a = n("P8UN");
      a(a.S + a.F * !n("QPJK"), "Object", { defineProperties: n("YmeT") });
    },
    "0oyq": function(e, t, n) {
      e.exports =
        n.p + "static/splash_reflective-969e302b60df4f6a6b26c3ab7e564bdd.png";
    },
    "39tc": function(e, t, n) {
      e.exports = n.p + "static/goals-ef93aaca0d4ee14fb2f174461da35d48.png";
    },
    "8oxB": function(e, t) {
      var n,
        a,
        r = (e.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function() {
        try {
          n = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          n = o;
        }
        try {
          a = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
          a = i;
        }
      })();
      var l,
        c = [],
        u = !1,
        m = -1;
      function f() {
        u &&
          l &&
          ((u = !1), l.length ? (c = l.concat(c)) : (m = -1), c.length && d());
      }
      function d() {
        if (!u) {
          var e = s(f);
          u = !0;
          for (var t = c.length; t; ) {
            for (l = c, c = []; ++m < t; ) l && l[m].run();
            (m = -1), (t = c.length);
          }
          (l = null),
            (u = !1),
            (function(e) {
              if (a === clearTimeout) return clearTimeout(e);
              if ((a === i || !a) && clearTimeout)
                return (a = clearTimeout), clearTimeout(e);
              try {
                a(e);
              } catch (t) {
                try {
                  return a.call(null, e);
                } catch (t) {
                  return a.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function h() {}
      (r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new p(e, t)), 1 !== c.length || u || s(d);
      }),
        (p.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = h),
        (r.addListener = h),
        (r.once = h),
        (r.off = h),
        (r.removeListener = h),
        (r.removeAllListeners = h),
        (r.emit = h),
        (r.prependListener = h),
        (r.prependOnceListener = h),
        (r.listeners = function(e) {
          return [];
        }),
        (r.binding = function(e) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function() {
          return "/";
        }),
        (r.chdir = function(e) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function() {
          return 0;
        });
    },
    "8ujH": function(e, t, n) {
      n("sC2a"), n("sc67"), n("pJf4");
      var a = n("GTTd")("jsonp");
      e.exports = function(e, t, n) {
        "function" == typeof t && ((n = t), (t = {}));
        t || (t = {});
        var i,
          s,
          l = t.prefix || "__jp",
          c = t.name || l + r++,
          u = t.param || "callback",
          m = null != t.timeout ? t.timeout : 6e4,
          f = encodeURIComponent,
          d = document.getElementsByTagName("script")[0] || document.head;
        m &&
          (s = setTimeout(function() {
            p(), n && n(new Error("Timeout"));
          }, m));
        function p() {
          i.parentNode && i.parentNode.removeChild(i),
            (window[c] = o),
            s && clearTimeout(s);
        }
        return (
          (window[c] = function(e) {
            a("jsonp got", e), p(), n && n(null, e);
          }),
          (e = (e += (~e.indexOf("?") ? "&" : "?") + u + "=" + f(c)).replace(
            "?&",
            "?"
          )),
          a('jsonp req "%s"', e),
          ((i = document.createElement("script")).src = e),
          d.parentNode.insertBefore(i, d),
          function() {
            window[c] && p();
          }
        );
      };
      var r = 0;
      function o() {}
    },
    G04T: function(e, t, n) {
      "use strict";
      n("sC2a"),
        n("6kNP"),
        n("8npG"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        r = n("8ujH"),
        o = (a = r) && a.__esModule ? a : { default: a },
        i = n("H/qo");
      var s = function(e) {
          return new Promise(function(t, n) {
            return (0,
            o.default)(e, { param: "c", timeout: 3500 }, function(e, a) {
              e && n(e), a && t(a);
            });
          });
        },
        l = function(e) {
          var t = "";
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var a = n.substring(0, 6) ? n : n.toUpperCase();
              t = t.concat("&" + a + "=" + e[n]);
            }
          return t;
        };
      t.default = function(e, t, n) {
        var a = (0, i.validate)(e),
          r = encodeURIComponent(e);
        if (!a)
          return Promise.resolve({
            result: "error",
            msg: "The email you entered is not valid.",
          });
        var o =
          "https://gmail.us4.list-manage.com/subscribe/post?u=ed08cf7658c5ee97ca4f835e1&amp;id=88d37c5597";
        arguments.length < 3 && "string" == typeof t
          ? (o = t)
          : "string" == typeof n && (o = n),
          (o = o.replace(/\/post/g, "/post-json"));
        var c = "&EMAIL=" + r + l(t),
          u = "" + o + c;
        return s(u);
      };
    },
    GTTd: function(e, t, n) {
      (function(a) {
        function r() {
          var e;
          try {
            e = t.storage.debug;
          } catch (n) {}
          return !e && void 0 !== a && "env" in a && (e = {}.DEBUG), e;
        }
        n("sC2a"),
          n("klQ5"),
          n("Ll4R"),
          ((t = e.exports = n("bRoh")).log = function() {
            return (
              "object" == typeof console &&
              console.log &&
              Function.prototype.apply.call(console.log, console, arguments)
            );
          }),
          (t.formatArgs = function(e) {
            var n = this.useColors;
            if (
              ((e[0] =
                (n ? "%c" : "") +
                this.namespace +
                (n ? " %c" : " ") +
                e[0] +
                (n ? "%c " : " ") +
                "+" +
                t.humanize(this.diff)),
              !n)
            )
              return;
            var a = "color: " + this.color;
            e.splice(1, 0, a, "color: inherit");
            var r = 0,
              o = 0;
            e[0].replace(/%[a-zA-Z%]/g, function(e) {
              "%%" !== e && (r++, "%c" === e && (o = r));
            }),
              e.splice(o, 0, a);
          }),
          (t.save = function(e) {
            try {
              null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
            } catch (n) {}
          }),
          (t.load = r),
          (t.useColors = function() {
            if (
              "undefined" != typeof window &&
              window.process &&
              "renderer" === window.process.type
            )
              return !0;
            return (
              ("undefined" != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              ("undefined" != typeof window &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              ("undefined" != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                parseInt(RegExp.$1, 10) >= 31) ||
              ("undefined" != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
          (t.storage =
            "undefined" != typeof chrome && void 0 !== chrome.storage
              ? chrome.storage.local
              : (function() {
                  try {
                    return window.localStorage;
                  } catch (e) {}
                })()),
          (t.colors = [
            "lightseagreen",
            "forestgreen",
            "goldenrod",
            "dodgerblue",
            "darkorchid",
            "crimson",
          ]),
          (t.formatters.j = function(e) {
            try {
              return JSON.stringify(e);
            } catch (t) {
              return "[UnexpectedJSONParseError]: " + t.message;
            }
          }),
          t.enable(r());
      }.call(this, n("8oxB")));
    },
    "H/qo": function(e, t, n) {
      "use strict";
      n("wZFJ"), n("HQhv");
      var a = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      t.validate = function(e) {
        if (!e) return !1;
        if (e.length > 254) return !1;
        if (!a.test(e)) return !1;
        var t = e.split("@");
        return (
          !(t[0].length > 64) &&
          !t[1].split(".").some(function(e) {
            return e.length > 63;
          })
        );
      };
    },
    IMSQ: function(e, t, n) {},
    JtOw: function(e, t, n) {
      var a, r, o;
      n("R48M"),
        (r = [t, n("fnPv")]),
        void 0 ===
          (o =
            "function" ==
            typeof (a = function(e, t) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var n,
                a = (n = t) && n.__esModule ? n : { default: n };
              e.default = a.default;
            })
              ? a.apply(t, r)
              : a) || (e.exports = o);
    },
    Lk85: function(e, t, n) {
      "use strict";
      n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a,
        r = (a = n("TSYQ")) && a.__esModule ? a : { default: a };
      var o = {
        ROOT: function(e) {
          return (0, r.default)(
            (function(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n),
                e
              );
            })({ "carousel-root": !0 }, e || "", !!e)
          );
        },
        CAROUSEL: function(e) {
          return (0, r.default)({ carousel: !0, "carousel-slider": e });
        },
        WRAPPER: function(e, t) {
          return (0, r.default)({
            "thumbs-wrapper": !e,
            "slider-wrapper": e,
            "axis-horizontal": "horizontal" === t,
            "axis-vertical": "horizontal" !== t,
          });
        },
        SLIDER: function(e, t) {
          return (0, r.default)({ thumbs: !e, slider: e, animated: !t });
        },
        ITEM: function(e, t) {
          return (0, r.default)({ thumb: !e, slide: e, selected: t });
        },
        ARROW_PREV: function(e) {
          return (0, r.default)({
            "control-arrow control-prev": !0,
            "control-disabled": e,
          });
        },
        ARROW_NEXT: function(e) {
          return (0, r.default)({
            "control-arrow control-next": !0,
            "control-disabled": e,
          });
        },
        DOT: function(e) {
          return (0, r.default)({ dot: !0, selected: e });
        },
      };
      t.default = o;
    },
    MYHI: function(e, t, n) {
      "use strict";
      n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = function() {
        return window;
      };
    },
    NyAt: function(e, t, n) {
      "use strict";
      n("v9g0"),
        n("n7j8"),
        n("AqHK"),
        n("q8oJ"),
        n("C9fy"),
        n("nWfQ"),
        n("LagC"),
        n("pS08"),
        n("E5k/"),
        n("+ar0"),
        n("xtjI"),
        n("JHok"),
        n("OeI1"),
        n("Ggvi"),
        n("m210"),
        n("4DPX"),
        n("rzGZ"),
        n("Dq+y"),
        n("8npG"),
        n("YbXK"),
        n("eMsz"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== d(e) && "function" != typeof e))
            return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, r, o)
                : (n[r] = e[r]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        r = m(n("i8i4")),
        o = m(n("JtOw")),
        i = m(n("Lk85")),
        s = m(n("xT4z")),
        l = m(n("bOlk")),
        c = m(n("Ol6o")),
        u = m(n("MYHI"));
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function d(e) {
        return (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function h() {
        return (h =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function g(e, t) {
        return !t || ("object" !== d(t) && "function" != typeof t) ? b(e) : t;
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function w() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function S(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var N = function() {},
        k = (function(e) {
          !(function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
          })(N, e);
          var t,
            n,
            m,
            f,
            d =
              ((t = N),
              function() {
                var e,
                  n = E(t);
                if (w()) {
                  var a = E(this).constructor;
                  e = Reflect.construct(n, arguments, a);
                } else e = n.apply(this, arguments);
                return g(this, e);
              });
          function N(e) {
            var t;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, N),
              S(b((t = d.call(this, e))), "thumbsRef", void 0),
              S(b(t), "carouselWrapperRef", void 0),
              S(b(t), "listRef", void 0),
              S(b(t), "itemsRef", void 0),
              S(b(t), "timer", void 0),
              S(b(t), "setThumbsRef", function(e) {
                t.thumbsRef = e;
              }),
              S(b(t), "setCarouselWrapperRef", function(e) {
                t.carouselWrapperRef = e;
              }),
              S(b(t), "setListRef", function(e) {
                t.listRef = e;
              }),
              S(b(t), "setItemsRef", function(e, n) {
                t.itemsRef || (t.itemsRef = []), (t.itemsRef[n] = e);
              }),
              S(b(t), "autoPlay", function() {
                !t.state.autoPlay ||
                  a.Children.count(t.props.children) <= 1 ||
                  (t.timer && clearTimeout(t.timer),
                  (t.timer = setTimeout(function() {
                    t.increment();
                  }, t.props.interval)));
              }),
              S(b(t), "clearAutoPlay", function() {
                t.state.autoPlay && t.timer && clearTimeout(t.timer);
              }),
              S(b(t), "resetAutoPlay", function() {
                t.clearAutoPlay(), t.autoPlay();
              }),
              S(b(t), "stopOnHover", function() {
                t.setState({ isMouseEntered: !0 }, t.clearAutoPlay);
              }),
              S(b(t), "startOnLeave", function() {
                t.setState({ isMouseEntered: !1 }, t.autoPlay);
              }),
              S(b(t), "isFocusWithinTheCarousel", function() {
                return (
                  !!t.carouselWrapperRef &&
                  !(
                    (0, c.default)().activeElement !== t.carouselWrapperRef &&
                    !t.carouselWrapperRef.contains(
                      (0, c.default)().activeElement
                    )
                  )
                );
              }),
              S(b(t), "navigateWithKeyboard", function(e) {
                if (t.isFocusWithinTheCarousel()) {
                  var n = "horizontal" === t.props.axis,
                    a = n ? 37 : 38;
                  (n ? 39 : 40) === e.keyCode
                    ? t.increment()
                    : a === e.keyCode && t.decrement();
                }
              }),
              S(b(t), "updateSizes", function() {
                if (
                  t.state.initialized &&
                  t.itemsRef &&
                  0 !== t.itemsRef.length
                ) {
                  var e = "horizontal" === t.props.axis,
                    n = t.itemsRef[0],
                    a = e ? n.clientWidth : n.clientHeight;
                  t.setState({ itemSize: a }),
                    t.thumbsRef && t.thumbsRef.updateSizes();
                }
              }),
              S(b(t), "setMountState", function() {
                t.setState({ hasMount: !0 }), t.updateSizes();
              }),
              S(b(t), "handleClickItem", function(e, n) {
                0 !== a.Children.count(t.props.children) &&
                  (t.state.cancelClick
                    ? t.setState({ cancelClick: !1 })
                    : (t.props.onClickItem(e, n),
                      e !== t.state.selectedItem &&
                        t.setState({ selectedItem: e })));
              }),
              S(b(t), "handleOnChange", function(e, n) {
                a.Children.count(t.props.children) <= 1 ||
                  t.props.onChange(e, n);
              }),
              S(b(t), "handleClickThumb", function(e, n) {
                t.props.onClickThumb(e, n), t.selectItem({ selectedItem: e });
              }),
              S(b(t), "onSwipeStart", function(e) {
                t.setState({ swiping: !0 }),
                  t.props.onSwipeStart(e),
                  t.clearAutoPlay();
              }),
              S(b(t), "onSwipeEnd", function(e) {
                t.setState({ swiping: !1, cancelClick: !1 }),
                  t.props.onSwipeEnd(e),
                  t.autoPlay();
              }),
              S(b(t), "onSwipeMove", function(e, n) {
                t.props.onSwipeMove(n);
                var r = "horizontal" === t.props.axis,
                  o = a.Children.count(t.props.children),
                  i = t.getPosition(t.state.selectedItem),
                  s = t.props.infiniteLoop
                    ? t.getPosition(o - 1) - 100
                    : t.getPosition(o - 1),
                  l = r ? e.x : e.y,
                  c = l;
                0 === i && l > 0 && (c = 0), i === s && l < 0 && (c = 0);
                var u = i + 100 / (t.state.itemSize / c),
                  m = Math.abs(l) > t.props.swipeScrollTolerance;
                return (
                  t.props.infiniteLoop &&
                    m &&
                    (0 === t.state.selectedItem && u > -100
                      ? (u -= 100 * o)
                      : t.state.selectedItem === o - 1 &&
                        u < 100 * -o &&
                        (u += 100 * o)),
                  t.setPosition(u),
                  m && !t.state.cancelClick && t.setState({ cancelClick: !0 }),
                  m
                );
              }),
              S(b(t), "setPosition", function(e, n) {
                var a = r.default.findDOMNode(t.listRef);
                a instanceof HTMLElement &&
                  ([
                    "WebkitTransform",
                    "MozTransform",
                    "MsTransform",
                    "OTransform",
                    "transform",
                    "msTransform",
                  ].forEach(function(n) {
                    a.style[n] = (0, s.default)(e, "%", t.props.axis);
                  }),
                  n && a.offsetLeft);
              }),
              S(b(t), "resetPosition", function() {
                var e = t.getPosition(t.state.selectedItem);
                t.setPosition(e);
              }),
              S(b(t), "decrement", function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                t.moveTo(
                  t.state.selectedItem - ("number" == typeof e ? e : 1),
                  n
                );
              }),
              S(b(t), "increment", function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                t.moveTo(
                  t.state.selectedItem + ("number" == typeof e ? e : 1),
                  n
                );
              }),
              S(b(t), "moveTo", function(e, n) {
                if ("number" == typeof e) {
                  var r = a.Children.count(t.props.children) - 1,
                    o = t.props.infiniteLoop && !n && (e < 0 || e > r),
                    i = e;
                  e < 0 && (e = t.props.infiniteLoop ? r : 0),
                    e > r && (e = t.props.infiniteLoop ? 0 : r),
                    o
                      ? t.setState({ swiping: !0 }, function() {
                          i < 0
                            ? t.props.centerMode &&
                              t.props.centerSlidePercentage &&
                              "horizontal" === t.props.axis
                              ? t.setPosition(
                                  -(r + 2) * t.props.centerSlidePercentage -
                                    (100 - t.props.centerSlidePercentage) / 2,
                                  !0
                                )
                              : t.setPosition(100 * -(r + 2), !0)
                            : i > r && t.setPosition(0, !0),
                            t.selectItem({ selectedItem: e, swiping: !1 });
                        })
                      : t.selectItem({ selectedItem: e }),
                    t.state.autoPlay &&
                      !1 === t.state.isMouseEntered &&
                      t.resetAutoPlay();
                }
              }),
              S(b(t), "onClickNext", function() {
                t.increment(1, !1);
              }),
              S(b(t), "onClickPrev", function() {
                t.decrement(1, !1);
              }),
              S(b(t), "onSwipeForward", function() {
                t.increment(1, !0);
              }),
              S(b(t), "onSwipeBackwards", function() {
                t.decrement(1, !0);
              }),
              S(b(t), "changeItem", function(e) {
                return function(n) {
                  ((function(e) {
                    return !!e && e.hasOwnProperty("key");
                  })(n) &&
                    "Enter" !== n.key) ||
                    t.selectItem({ selectedItem: e });
                };
              }),
              S(b(t), "selectItem", function(e, n) {
                t.setState(e, n),
                  t.handleOnChange(
                    e.selectedItem,
                    a.Children.toArray(t.props.children)[e.selectedItem]
                  );
              }),
              S(b(t), "getInitialImage", function() {
                var e = t.props.selectedItem,
                  n = t.itemsRef && t.itemsRef[e],
                  a = n && n.getElementsByTagName("img");
                return a && a[e];
              }),
              S(b(t), "getVariableImageHeight", function(e) {
                var n = t.itemsRef && t.itemsRef[e],
                  a = (n && n.getElementsByTagName("img")) || [];
                if (t.state.hasMount && a.length > 0) {
                  var r = a[0];
                  if (!r.complete) {
                    r.addEventListener("load", function e() {
                      t.forceUpdate(), r.removeEventListener("load", e);
                    });
                  }
                  var o = r.clientHeight;
                  return o > 0 ? o : null;
                }
                return null;
              }),
              (t.state = {
                initialized: !1,
                selectedItem: e.selectedItem,
                hasMount: !1,
                isMouseEntered: !1,
                autoPlay: e.autoPlay,
                swiping: !1,
                cancelClick: !1,
                itemSize: 1,
              }),
              t
            );
          }
          return (
            (n = N),
            (m = [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.children && this.setupCarousel();
                },
              },
              {
                key: "componentDidUpdate",
                value: function(e, t) {
                  e.children ||
                    !this.props.children ||
                    this.state.initialized ||
                    this.setupCarousel(),
                    t.swiping && !this.state.swiping && this.resetPosition(),
                    (e.selectedItem === this.props.selectedItem &&
                      e.centerMode === this.props.centerMode) ||
                      (this.updateSizes(),
                      this.moveTo(this.props.selectedItem)),
                    e.autoPlay !== this.props.autoPlay &&
                      (this.props.autoPlay
                        ? this.setupAutoPlay()
                        : this.destroyAutoPlay(),
                      this.setState({ autoPlay: this.props.autoPlay }));
                },
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.destroyCarousel();
                },
              },
              {
                key: "setupCarousel",
                value: function() {
                  this.bindEvents(),
                    this.state.autoPlay &&
                      a.Children.count(this.props.children) > 1 &&
                      this.setupAutoPlay(),
                    this.setState({ initialized: !0 });
                  var e = this.getInitialImage();
                  e
                    ? e.addEventListener("load", this.setMountState)
                    : this.setMountState();
                },
              },
              {
                key: "destroyCarousel",
                value: function() {
                  this.state.initialized &&
                    (this.unbindEvents(), this.destroyAutoPlay());
                },
              },
              {
                key: "setupAutoPlay",
                value: function() {
                  this.autoPlay();
                  var e = this.carouselWrapperRef;
                  this.props.stopOnHover &&
                    e &&
                    (e.addEventListener("mouseenter", this.stopOnHover),
                    e.addEventListener("mouseleave", this.startOnLeave));
                },
              },
              {
                key: "destroyAutoPlay",
                value: function() {
                  this.clearAutoPlay();
                  var e = this.carouselWrapperRef;
                  this.props.stopOnHover &&
                    e &&
                    (e.removeEventListener("mouseenter", this.stopOnHover),
                    e.removeEventListener("mouseleave", this.startOnLeave));
                },
              },
              {
                key: "bindEvents",
                value: function() {
                  (0, u.default)().addEventListener("resize", this.updateSizes),
                    (0, u.default)().addEventListener(
                      "DOMContentLoaded",
                      this.updateSizes
                    ),
                    this.props.useKeyboardArrows &&
                      (0, c.default)().addEventListener(
                        "keydown",
                        this.navigateWithKeyboard
                      );
                },
              },
              {
                key: "unbindEvents",
                value: function() {
                  (0, u.default)().removeEventListener(
                    "resize",
                    this.updateSizes
                  ),
                    (0, u.default)().removeEventListener(
                      "DOMContentLoaded",
                      this.updateSizes
                    );
                  var e = this.getInitialImage();
                  e && e.removeEventListener("load", this.setMountState),
                    this.props.useKeyboardArrows &&
                      (0, c.default)().removeEventListener(
                        "keydown",
                        this.navigateWithKeyboard
                      );
                },
              },
              {
                key: "getPosition",
                value: function(e) {
                  if ((this.props.infiniteLoop && ++e, 0 === e)) return 0;
                  var t = a.Children.count(this.props.children);
                  if (
                    this.props.centerMode &&
                    "horizontal" === this.props.axis
                  ) {
                    var n = -e * this.props.centerSlidePercentage,
                      r = t - 1;
                    return (
                      e && (e !== r || this.props.infiniteLoop)
                        ? (n += (100 - this.props.centerSlidePercentage) / 2)
                        : e === r &&
                          (n += 100 - this.props.centerSlidePercentage),
                      n
                    );
                  }
                  return 100 * -e;
                },
              },
              {
                key: "renderItems",
                value: function(e) {
                  var t = this;
                  return this.props.children
                    ? a.Children.map(this.props.children, function(n, r) {
                        var o = {
                            ref: function(e) {
                              return t.setItemsRef(e, r);
                            },
                            key: "itemKey" + r + (e ? "clone" : ""),
                            className: i.default.ITEM(
                              !0,
                              r === t.state.selectedItem
                            ),
                            onClick: t.handleClickItem.bind(t, r, n),
                          },
                          s = {};
                        return (
                          t.props.centerMode &&
                            "horizontal" === t.props.axis &&
                            (s.style = {
                              minWidth: t.props.centerSlidePercentage + "%",
                            }),
                          a.default.createElement(
                            "li",
                            h({}, o, s),
                            t.props.renderItem(n, {
                              isSelected: r === t.state.selectedItem,
                            })
                          )
                        );
                      })
                    : [];
                },
              },
              {
                key: "renderControls",
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.showIndicators,
                    r = t.labels,
                    o = t.renderIndicator,
                    i = t.children;
                  return n
                    ? a.default.createElement(
                        "ul",
                        { className: "control-dots" },
                        a.Children.map(i, function(t, n) {
                          return (
                            o &&
                            o(
                              e.changeItem(n),
                              n === e.state.selectedItem,
                              n,
                              r.item
                            )
                          );
                        })
                      )
                    : null;
                },
              },
              {
                key: "renderStatus",
                value: function() {
                  return this.props.showStatus
                    ? a.default.createElement(
                        "p",
                        { className: "carousel-status" },
                        this.props.statusFormatter(
                          this.state.selectedItem + 1,
                          a.Children.count(this.props.children)
                        )
                      )
                    : null;
                },
              },
              {
                key: "renderThumbs",
                value: function() {
                  return this.props.showThumbs &&
                    this.props.children &&
                    0 !== a.Children.count(this.props.children)
                    ? a.default.createElement(
                        l.default,
                        {
                          ref: this.setThumbsRef,
                          onSelectItem: this.handleClickThumb,
                          selectedItem: this.state.selectedItem,
                          transitionTime: this.props.transitionTime,
                          thumbWidth: this.props.thumbWidth,
                          labels: this.props.labels,
                        },
                        this.props.renderThumbs(this.props.children)
                      )
                    : null;
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this;
                  if (
                    !this.props.children ||
                    0 === a.Children.count(this.props.children)
                  )
                    return null;
                  var t = "horizontal" === this.props.axis,
                    n =
                      this.props.showArrows &&
                      a.Children.count(this.props.children) > 1,
                    r =
                      (n &&
                        (this.state.selectedItem > 0 ||
                          this.props.infiniteLoop)) ||
                      !1,
                    l =
                      (n &&
                        (this.state.selectedItem <
                          a.Children.count(this.props.children) - 1 ||
                          this.props.infiniteLoop)) ||
                      !1,
                    c = {},
                    u = this.getPosition(this.state.selectedItem),
                    m = (0, s.default)(u, "%", this.props.axis),
                    f = this.props.transitionTime + "ms";
                  (c = {
                    WebkitTransform: m,
                    MozTransform: m,
                    MsTransform: m,
                    OTransform: m,
                    transform: m,
                    msTransform: m,
                  }),
                    this.state.swiping ||
                      (c = (function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? p(Object(n), !0).forEach(function(t) {
                                S(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : p(Object(n)).forEach(function(t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })({}, c, {
                        WebkitTransitionDuration: f,
                        MozTransitionDuration: f,
                        MsTransitionDuration: f,
                        OTransitionDuration: f,
                        transitionDuration: f,
                        msTransitionDuration: f,
                      }));
                  var d = this.renderItems(!0),
                    v = d.shift(),
                    y = d.pop(),
                    g = {
                      className: i.default.SLIDER(!0, this.state.swiping),
                      onSwipeMove: this.onSwipeMove,
                      onSwipeStart: this.onSwipeStart,
                      onSwipeEnd: this.onSwipeEnd,
                      style: c,
                      tolerance: this.props.swipeScrollTolerance,
                    },
                    b = {};
                  if (t) {
                    if (
                      ((g.onSwipeLeft = this.onSwipeForward),
                      (g.onSwipeRight = this.onSwipeBackwards),
                      this.props.dynamicHeight)
                    ) {
                      var w = this.getVariableImageHeight(
                        this.state.selectedItem
                      );
                      (g.style.height = w || "auto"), (b.height = w || "auto");
                    }
                  } else
                    (g.onSwipeUp =
                      "natural" === this.props.verticalSwipe
                        ? this.onSwipeBackwards
                        : this.onSwipeForward),
                      (g.onSwipeDown =
                        "natural" === this.props.verticalSwipe
                          ? this.onSwipeForward
                          : this.onSwipeBackwards),
                      (g.style.height = this.state.itemSize),
                      (b.height = this.state.itemSize);
                  return a.default.createElement(
                    "div",
                    {
                      className: i.default.ROOT(this.props.className),
                      ref: this.setCarouselWrapperRef,
                      tabIndex: 0,
                    },
                    a.default.createElement(
                      "div",
                      {
                        className: i.default.CAROUSEL(!0),
                        style: { width: this.props.width },
                      },
                      this.props.renderArrowPrev(
                        this.onClickPrev,
                        r,
                        this.props.labels.leftArrow
                      ),
                      a.default.createElement(
                        "div",
                        {
                          className: i.default.WRAPPER(!0, this.props.axis),
                          style: b,
                        },
                        this.props.swipeable
                          ? a.default.createElement(
                              o.default,
                              h(
                                { tagName: "ul", innerRef: this.setListRef },
                                g,
                                { allowMouseEvents: this.props.emulateTouch }
                              ),
                              this.props.infiniteLoop && y,
                              this.renderItems(),
                              this.props.infiniteLoop && v
                            )
                          : a.default.createElement(
                              "ul",
                              {
                                className: i.default.SLIDER(
                                  !0,
                                  this.state.swiping
                                ),
                                ref: function(t) {
                                  return e.setListRef(t);
                                },
                                style: c,
                              },
                              this.props.infiniteLoop && y,
                              this.renderItems(),
                              this.props.infiniteLoop && v
                            )
                      ),
                      this.props.renderArrowNext(
                        this.onClickNext,
                        l,
                        this.props.labels.rightArrow
                      ),
                      this.renderControls(),
                      this.renderStatus()
                    ),
                    this.renderThumbs()
                  );
                },
              },
            ]) && v(n.prototype, m),
            f && v(n, f),
            N
          );
        })(a.default.Component);
      (t.default = k),
        S(k, "displayName", "Carousel"),
        S(k, "defaultProps", {
          axis: "horizontal",
          centerSlidePercentage: 80,
          interval: 3e3,
          labels: {
            leftArrow: "previous slide / item",
            rightArrow: "next slide / item",
            item: "slide item",
          },
          onClickItem: N,
          onClickThumb: N,
          onChange: N,
          onSwipeStart: function() {},
          onSwipeEnd: function() {},
          onSwipeMove: function() {},
          renderArrowPrev: function(e, t, n) {
            return a.default.createElement("button", {
              type: "button",
              "aria-label": n,
              className: i.default.ARROW_PREV(!t),
              onClick: e,
            });
          },
          renderArrowNext: function(e, t, n) {
            return a.default.createElement("button", {
              type: "button",
              "aria-label": n,
              className: i.default.ARROW_NEXT(!t),
              onClick: e,
            });
          },
          renderIndicator: function(e, t, n, r) {
            return a.default.createElement("li", {
              className: i.default.DOT(t),
              onClick: e,
              onKeyDown: e,
              value: n,
              key: n,
              role: "button",
              tabIndex: 0,
              "aria-label": "".concat(r, " ").concat(n + 1),
            });
          },
          renderItem: function(e) {
            return e;
          },
          renderThumbs: function(e) {
            var t = a.Children.map(e, function(e) {
              var t = e;
              if (
                ("img" !== e.type &&
                  (t = a.Children.toArray(e.props.children).find(function(e) {
                    return "img" === e.type;
                  })),
                t)
              )
                return t;
            });
            return 0 ===
              t.filter(function(e) {
                return e;
              }).length
              ? (console.warn(
                  "No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"
                ),
                [])
              : t;
          },
          statusFormatter: function(e, t) {
            return "".concat(e, " of ").concat(t);
          },
          selectedItem: 0,
          showArrows: !0,
          showIndicators: !0,
          showStatus: !0,
          showThumbs: !0,
          stopOnHover: !0,
          swipeScrollTolerance: 5,
          swipeable: !0,
          transitionTime: 350,
          verticalSwipe: "standard",
          width: "100%",
        });
    },
    Ol6o: function(e, t, n) {
      "use strict";
      n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = function() {
        return document;
      };
    },
    QXP7: function(e, t) {
      var n = 1e3,
        a = 6e4,
        r = 60 * a,
        o = 24 * r;
      function i(e, t, n) {
        if (!(e < t))
          return e < 1.5 * t
            ? Math.floor(e / t) + " " + n
            : Math.ceil(e / t) + " " + n + "s";
      }
      e.exports = function(e, t) {
        t = t || {};
        var s,
          l = typeof e;
        if ("string" === l && e.length > 0)
          return (function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
              e
            );
            if (!t) return;
            var i = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return 315576e5 * i;
              case "days":
              case "day":
              case "d":
                return i * o;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return i * r;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return i * a;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return i * n;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return i;
              default:
                return;
            }
          })(e);
        if ("number" === l && !1 === isNaN(e))
          return t.long
            ? i((s = e), o, "day") ||
                i(s, r, "hour") ||
                i(s, a, "minute") ||
                i(s, n, "second") ||
                s + " ms"
            : (function(e) {
                if (e >= o) return Math.round(e / o) + "d";
                if (e >= r) return Math.round(e / r) + "h";
                if (e >= a) return Math.round(e / a) + "m";
                if (e >= n) return Math.round(e / n) + "s";
                return e + "ms";
              })(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    QwC9: function(e, t, n) {
      e.exports = n.p + "static/stats-4ac78526cbfaa39dd9ba330a6c2f9240.png";
    },
    RXBc: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        r = n.n(a),
        o = (n("IMSQ"), n("cQc+")),
        i = n("Wbzz"),
        s = n("7oih"),
        l = n("obyI"),
        c = n.n(l),
        u = n("dwco"),
        m = n.n(u);
      var f = function(e) {
          return e.children;
        },
        d = (function(e) {
          var t, n;
          function a() {
            var t;
            return (
              ((t = e.call(this) || this).handleClick = t.handleClick.bind(
                (function(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(t)
              )),
              t
            );
          }
          (n = e),
            ((t = a).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var o = a.prototype;
          return (
            (o.componentDidMount = function() {
              m.a.polyfill();
            }),
            (o.handleClick = function(e) {
              e.preventDefault();
              var t = this.props.onClick,
                n = void 0 === t ? function() {} : t,
                a = 0,
                r = !0,
                o = this.props,
                i = o.type,
                s = o.element,
                l = o.offset,
                c = o.timeout;
              if (i && s)
                switch (i) {
                  case "class":
                    r = !!(a = document.getElementsByClassName(s)[0]);
                    break;
                  case "id":
                    r = !!(a = document.getElementById(s));
                }
              r
                ? this.scrollTo(a, l, c)
                : console.log("Element not found: " + s),
                n(e);
            }),
            (o.scrollTo = function(e, t, n) {
              void 0 === t && (t = 0), void 0 === n && (n = null);
              var a = e
                ? e.getBoundingClientRect().top + window.pageYOffset
                : 0;
              n
                ? setTimeout(function() {
                    window.scroll({ top: a + t, left: 0, behavior: "smooth" });
                  }, n)
                : window.scroll({ top: a + t, left: 0, behavior: "smooth" });
            }),
            (o.render = function() {
              return r.a.createElement(
                f,
                null,
                "object" == typeof this.props.children
                  ? r.a.cloneElement(this.props.children, {
                      onClick: this.handleClick,
                    })
                  : r.a.createElement(
                      "span",
                      { onClick: this.handleClick },
                      this.props.children
                    )
              );
            }),
            a
          );
        })(r.a.Component),
        p = n("g7PP"),
        h = n.n(p);
      var v = (function(e) {
          var t, n;
          function a(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).toggleMenu = function(e) {
                n.setState({ openMenu: e });
              }),
              (n.handleScroll = function() {
                var e = n.state.visibilityClass;
                window.pageYOffset > 300
                  ? "navbar-shrink" !== e &&
                    n.setState({ visibilityClass: "navbar-shrink" })
                  : "navbar-shrink" === e &&
                    n.setState({ visibilityClass: "" });
              }),
              (n.state = { openMenu: !1, visibilityClass: "" }),
              n
            );
          }
          (n = e),
            ((t = a).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var o = a.prototype;
          return (
            (o.componentDidMount = function() {
              window.addEventListener("scroll", this.handleScroll);
            }),
            (o.componentWillUnmount = function() {
              window.removeEventListener("scroll", this.handleScroll);
            }),
            (o.render = function() {
              var e = this,
                t = this.state,
                n = t.openMenu,
                a = t.visibilityClass;
              return r.a.createElement(
                "nav",
                {
                  className: "navbar navbar-expand-lg fixed-top " + a,
                  id: "mainNav",
                },
                r.a.createElement(
                  "div",
                  { className: "container" },
                  r.a.createElement(
                    "a",
                    { className: "navbar-brand", href: "#page-top" },
                    r.a.createElement("img", { src: h.a, alt: "logo" })
                  ),
                  r.a.createElement(
                    "button",
                    {
                      onClick: function(t) {
                        return e.toggleMenu(!n);
                      },
                      className:
                        "navbar-toggler navbar-toggler-right " +
                        (n ? "" : "collapsed"),
                      type: "button",
                      "aria-controls": "navbarResponsive",
                      "aria-expanded": n,
                      "aria-label": "Toggle navigation",
                    },
                    r.a.createElement("i", { className: "fas fa-bars fa-2x" })
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "collapse navbar-collapse " + (n ? "show" : ""),
                      id: "navbarResponsive",
                    },
                    r.a.createElement(
                      "ul",
                      { className: "navbar-nav ml-auto" },
                      r.a.createElement(
                        "li",
                        { className: "nav-item" },
                        r.a.createElement(
                          d,
                          {
                            onClick: function(t) {
                              return e.toggleMenu(!n);
                            },
                            type: "id",
                            element: "download",
                          },
                          r.a.createElement(
                            "a",
                            { className: "nav-link", href: "#download" },
                            "Download"
                          )
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "nav-item" },
                        r.a.createElement(
                          d,
                          {
                            onClick: function(t) {
                              return e.toggleMenu(!n);
                            },
                            type: "id",
                            element: "features",
                          },
                          r.a.createElement(
                            "a",
                            { className: "nav-link", href: "#features" },
                            "Features"
                          )
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "nav-item" },
                        r.a.createElement(
                          d,
                          {
                            onClick: function(t) {
                              return e.toggleMenu(!n);
                            },
                            type: "id",
                            element: "contact",
                          },
                          r.a.createElement(
                            "a",
                            { className: "nav-link", href: "#contact" },
                            "Contact"
                          )
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "nav-item" },
                        r.a.createElement(
                          d,
                          {
                            onClick: function(t) {
                              return e.toggleMenu(!n);
                            },
                            type: "id",
                            element: "privacy",
                          },
                          r.a.createElement(
                            i.a,
                            { className: "nav-link", href: "/privacy" },
                            "Privacy"
                          )
                        )
                      )
                    )
                  )
                )
              );
            }),
            a
          );
        })(a.Component),
        y = n("JwsL");
      function g() {
        return r.a.createElement(
          "ul",
          { className: "list-inline list-social" },
          c.a.socialLinks.map(function(e) {
            var t = e.icon,
              n = e.url;
            return r.a.createElement(
              "li",
              { key: n, className: "list-inline-item  " },
              r.a.createElement(
                "a",
                { href: n, target: "_blank", rel: "noreferrer noopener" },
                r.a.createElement("i", { className: "fab  " + t })
              )
            );
          })
        );
      }
      var b = n("G04T"),
        w = n.n(b);
      var E = (function(e) {
          var t, n;
          function a() {
            var t;
            return (
              ((t = e.call(this) || this)._handleEmailChange = function(e) {
                t.setState({ email: e.target.value });
              }),
              (t._postEmailToMailchimp = function(e, n) {
                w()(e, n)
                  .then(function(e) {
                    "success" !== e.result
                      ? t.setState({ status: "error", msg: e.msg })
                      : t.setState({ status: "success", msg: e.msg });
                  })
                  .catch(function(e) {
                    t.setState({ status: "error", msg: e });
                  });
              }),
              (t._handleFormSubmit = function(e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  t.state.email
                    ? (t.setState({ status: "sending", msg: null }),
                      t._postEmailToMailchimp(t.state.email, {
                        pathname: document.location.pathname,
                      }))
                    : t.setState({
                        status: "error",
                        msg: "Please enter valid email!",
                      });
              }),
              (t.state = { email: "" }),
              t
            );
          }
          return (
            (n = e),
            ((t = a).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (a.prototype.render = function() {
              return r.a.createElement(
                "div",
                null,
                r.a.createElement("br", null),
                "success" === this.state.status
                  ? r.a.createElement(
                      "h3",
                      null,
                      "Thank you! Youʼll receive your confirmation email shortly."
                    )
                  : r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "h3",
                        null,
                        "Subscribe below to be notified of app releases, educational and investment opportunites!"
                      ),
                      r.a.createElement(
                        "form",
                        { id: "email-capture", method: "post", noValidate: !0 },
                        r.a.createElement(
                          "div",
                          { className: "form-group" },
                          r.a.createElement(
                            "div",
                            { className: "form-row" },
                            r.a.createElement(
                              "div",
                              { className: "col" },
                              r.a.createElement("input", {
                                className: "form-control",
                                placeholder: "Email",
                                onChange: this._handleEmailChange,
                                required: !0,
                              })
                            ),
                            r.a.createElement(
                              "div",
                              null,
                              r.a.createElement(
                                "button",
                                {
                                  className: "btn btn-dark",
                                  type: "submit",
                                  onClick: this._handleFormSubmit,
                                },
                                r.a.createElement("i", {
                                  className: "fa fa-paper-plane icon-large",
                                })
                              )
                            )
                          ),
                          "error" === this.state.status &&
                            r.a.createElement("div", {
                              dangerouslySetInnerHTML: {
                                __html: this.state.msg,
                              },
                            })
                        )
                      )
                    )
              );
            }),
            a
          );
        })(r.a.Component),
        S = n("vqcw"),
        N = n.n(S),
        k = n("zXcI"),
        P = n.n(k),
        M = n("mwJr"),
        O = n.n(M),
        T = n("Te51"),
        R = n.n(T),
        I = n("39tc"),
        C = n.n(I),
        A = n("ryqO"),
        L = n.n(A),
        j = n("a5pb"),
        x = n.n(j),
        _ = n("Wkhf"),
        z = n.n(_),
        W = n("QwC9"),
        D = n.n(W);
      t.default = function() {
        return r.a.createElement(
          s.a,
          null,
          r.a.createElement(v, null),
          r.a.createElement(
            "header",
            { className: "masthead" },
            r.a.createElement(
              "div",
              { className: "container h-100" },
              r.a.createElement(
                "div",
                { className: "row h-100" },
                r.a.createElement(
                  "div",
                  { className: "col-lg-5 my-auto" },
                  r.a.createElement("img", {
                    src: n("0oyq"),
                    style: { height: "100%", width: "100%" },
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "col-lg-7 my-auto" },
                  r.a.createElement(
                    "div",
                    { className: "header-content mx-auto" },
                    r.a.createElement(
                      "h1",
                      { className: "mb-5" },
                      "Productivity that inspires kids to be actively engaged in decision making!"
                    ),
                    r.a.createElement(
                      d,
                      { type: "id", element: "download" },
                      r.a.createElement(
                        "a",
                        {
                          href: "#download",
                          className: "btn bg-primary btn-xl",
                        },
                        "Learn More!"
                      )
                    )
                  )
                )
              )
            )
          ),
          r.a.createElement(
            "section",
            { className: "download bg-primary text-center", id: "download" },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "div",
                  { className: "col-md-8 mx-auto" },
                  r.a.createElement(
                    "h2",
                    { className: "section-heading" },
                    "The Penny Bank App is Coming Soon!"
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    "Soon the Penny Bank app can help shape your kid's finance and habits!"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "badges" },
                    r.a.createElement(
                      "a",
                      { className: "badge-link", href: "/#" },
                      r.a.createElement("img", { src: N.a, alt: "Coming Soon" })
                    ),
                    r.a.createElement(E, null)
                  )
                )
              )
            )
          ),
          r.a.createElement(
            "section",
            { className: "features", id: "features" },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "div",
                { className: "section-heading text-center" },
                r.a.createElement("h2", null, "Penny Bank's Features"),
                r.a.createElement(
                  "p",
                  { className: "text-muted" },
                  "Put the power of decision making in your kid's hands!"
                ),
                r.a.createElement("hr", null)
              ),
              r.a.createElement(
                o.Carousel,
                {
                  showArrows: !0,
                  autoPlay: !0,
                  showStatus: !1,
                  infiniteLoop: !0,
                  swipeable: !0,
                  stopOnHover: !0,
                  emulateTouch: !0,
                },
                r.a.createElement(
                  "div",
                  { className: "row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-4 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "device-container" },
                      r.a.createElement(
                        "div",
                        { className: "device" },
                        r.a.createElement(
                          "div",
                          { className: "screen" },
                          r.a.createElement("img", {
                            src: P.a,
                            className: "img-fluid",
                            alt: "Dashboard",
                          })
                        ),
                        r.a.createElement("div", { className: "button" })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-8 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "container-fluid" },
                      r.a.createElement(
                        "div",
                        { className: "row", style: { margin: 5 } },
                        r.a.createElement(
                          "div",
                          { className: "col-lg-6" },
                          r.a.createElement(
                            "div",
                            { className: "feature-item" },
                            r.a.createElement("i", { class: "fas fa-wallet" }),
                            r.a.createElement("h3", null, "Child Management"),
                            r.a.createElement(
                              "p",
                              { className: "text-muted" },
                              "You are the bank! Give your children the sense of accomplishment with a visual wallet. You have the ability to delegate cash and time. Penny bank notifies and tracks when your child checks out their dashboard so you can monitor their habit of checking for tasks."
                            )
                          )
                        ),
                        r.a.createElement("div", { className: "col-lg-6" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "row" },
                        r.a.createElement("div", { className: "col-lg-6" }),
                        r.a.createElement("div", { className: "col-lg-6" })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-4 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "device-container" },
                      r.a.createElement(
                        "div",
                        { className: "device" },
                        r.a.createElement(
                          "div",
                          { className: "screen" },
                          r.a.createElement("img", {
                            src: O.a,
                            className: "img-fluid",
                            alt: "Time Banking",
                          })
                        ),
                        r.a.createElement("div", { className: "button" })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-8 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "container-fluid" },
                      r.a.createElement(
                        "div",
                        { className: "row", style: { margin: 5 } },
                        r.a.createElement(
                          "div",
                          { className: "col-lg-6" },
                          r.a.createElement(
                            "div",
                            { className: "feature-item" },
                            r.a.createElement("i", {
                              class: "fas fa-user-clock",
                            }),
                            r.a.createElement("h3", null, "Time Banking"),
                            r.a.createElement(
                              "p",
                              { className: "text-muted" },
                              "Penny bank introduces the concept of time banking. Time is the only asset we all share no matter the age. Distributing and withdrawing time for things your child is interest in will feel seemless with in discipline and rewards system."
                            )
                          )
                        ),
                        r.a.createElement("div", { className: "col-lg-6" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "row" },
                        r.a.createElement("div", { className: "col-lg-6" }),
                        r.a.createElement("div", { className: "col-lg-6" })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-4 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "device-container" },
                      r.a.createElement(
                        "div",
                        { className: "device" },
                        r.a.createElement(
                          "div",
                          { className: "screen" },
                          r.a.createElement("img", {
                            src: R.a,
                            className: "img-fluid",
                            alt: "Responsibility",
                          })
                        ),
                        r.a.createElement("div", { className: "button" })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-8 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "container-fluid" },
                      r.a.createElement(
                        "div",
                        { className: "row", style: { margin: 5 } },
                        r.a.createElement(
                          "div",
                          { className: "col-lg-6" },
                          r.a.createElement(
                            "div",
                            { className: "feature-item" },
                            r.a.createElement("i", { class: "fas fa-broom" }),
                            r.a.createElement("h3", null, "Responsibility/"),
                            r.a.createElement("h3", null, "Contribution Chart"),
                            r.a.createElement(
                              "p",
                              { className: "text-muted" },
                              "Posted note style cards help your family manage the responsibilities due. Iphone users get the added feature of a contribution chart that fills in a visualization block each day any child in the family completes a responsibility."
                            )
                          )
                        ),
                        r.a.createElement("div", { className: "col-lg-6" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "row" },
                        r.a.createElement("div", { className: "col-lg-6" }),
                        r.a.createElement("div", { className: "col-lg-6" })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-4 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "device-container" },
                      r.a.createElement(
                        "div",
                        { className: "device" },
                        r.a.createElement(
                          "div",
                          { className: "screen" },
                          r.a.createElement("img", {
                            src: C.a,
                            className: "img-fluid",
                            alt: "Goals",
                          })
                        ),
                        r.a.createElement("div", { className: "button" })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-8 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "container-fluid" },
                      r.a.createElement(
                        "div",
                        { className: "row", style: { margin: 5 } },
                        r.a.createElement(
                          "div",
                          { className: "col-lg-6" },
                          r.a.createElement(
                            "div",
                            { className: "feature-item" },
                            r.a.createElement("i", {
                              class: "fas fa-calendar",
                            }),
                            r.a.createElement("h3", null, "Goals"),
                            r.a.createElement(
                              "p",
                              { className: "text-muted" },
                              "Posted note style cards help your family manage long term goals for your children. This feature is great for a goal being acheived of time such as school grades, behavioral improvements, etc... The embended calendar gives a visualization of start and ending points of each goal"
                            )
                          )
                        ),
                        r.a.createElement("div", { className: "col-lg-6" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "row" },
                        r.a.createElement("div", { className: "col-lg-6" }),
                        r.a.createElement("div", { className: "col-lg-6" })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-4 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "device-container" },
                      r.a.createElement(
                        "div",
                        { className: "device" },
                        r.a.createElement(
                          "div",
                          { className: "screen" },
                          r.a.createElement("img", {
                            src: L.a,
                            className: "img-fluid",
                            alt: "Offers",
                          })
                        ),
                        r.a.createElement("div", { className: "button" })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-8 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "container-fluid" },
                      r.a.createElement(
                        "div",
                        { className: "row", style: { margin: 5 } },
                        r.a.createElement(
                          "div",
                          { className: "col-lg-6" },
                          r.a.createElement(
                            "div",
                            { className: "feature-item" },
                            r.a.createElement("i", {
                              class: "fas fa-handshake",
                            }),
                            r.a.createElement("h3", null, "Offers"),
                            r.a.createElement(
                              "p",
                              { className: "text-muted" },
                              "Penny bank gives kids the power of descision making by giving them the ability to be proactive and make an offer on how much they want to be paid for a responsibility. You have to ability to accept or decline as the parent. This feature helps kids to develop a habit of providing a value for a value in return!"
                            )
                          )
                        ),
                        r.a.createElement("div", { className: "col-lg-6" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "row" },
                        r.a.createElement("div", { className: "col-lg-6" }),
                        r.a.createElement("div", { className: "col-lg-6" })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-4 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "device-container" },
                      r.a.createElement(
                        "div",
                        { className: "device" },
                        r.a.createElement(
                          "div",
                          { className: "screen" },
                          r.a.createElement("img", {
                            src: x.a,
                            className: "img-fluid",
                            alt: "Withdraw Request",
                          })
                        ),
                        r.a.createElement("div", { className: "button" })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-8 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "container-fluid" },
                      r.a.createElement(
                        "div",
                        { className: "row", style: { margin: 5 } },
                        r.a.createElement(
                          "div",
                          { className: "col-lg-6" },
                          r.a.createElement(
                            "div",
                            { className: "feature-item" },
                            r.a.createElement("i", {
                              class: "fas fa-money-bill-wave",
                            }),
                            r.a.createElement("h3", null, "Withdraw Request"),
                            r.a.createElement(
                              "p",
                              { className: "text-muted" },
                              "Manage how your child's request for cash and time with withdraw request. This allows you to be manage how much cash or time a child is able to use on certain things to maintain a healthy wallet and spending habits."
                            )
                          )
                        ),
                        r.a.createElement("div", { className: "col-lg-6" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "row" },
                        r.a.createElement("div", { className: "col-lg-6" }),
                        r.a.createElement("div", { className: "col-lg-6" })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-4 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "device-container" },
                      r.a.createElement(
                        "div",
                        { className: "device" },
                        r.a.createElement(
                          "div",
                          { className: "screen" },
                          r.a.createElement("img", {
                            src: z.a,
                            className: "img-fluid",
                            alt: "Love Tap",
                          })
                        ),
                        r.a.createElement("div", { className: "button" })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-8 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "container-fluid" },
                      r.a.createElement(
                        "div",
                        { className: "row", style: { margin: 5 } },
                        r.a.createElement(
                          "div",
                          { className: "col-lg-6" },
                          r.a.createElement(
                            "div",
                            { className: "feature-item" },
                            r.a.createElement("i", { class: "fas fa-heart" }),
                            r.a.createElement("h3", null, "Love Tap"),
                            r.a.createElement(
                              "p",
                              { className: "text-muted" },
                              "This is a fun feature that both parent and child can send to each other as a friendly reminder that there is something pending that needs attention."
                            )
                          )
                        ),
                        r.a.createElement("div", { className: "col-lg-6" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "row" },
                        r.a.createElement("div", { className: "col-lg-6" }),
                        r.a.createElement("div", { className: "col-lg-6" })
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                "div",
                { className: "section-heading text-center" },
                r.a.createElement("h2", null, "Penny Bank Pro Features"),
                r.a.createElement(
                  "p",
                  { className: "text-muted" },
                  "All the core features of Penny Bank plus a growing list of exclusive features!"
                ),
                r.a.createElement("hr", null)
              ),
              r.a.createElement(
                o.Carousel,
                {
                  showArrows: !0,
                  autoPlay: !1,
                  showStatus: !1,
                  infiniteLoop: !0,
                  swipeable: !0,
                  stopOnHover: !0,
                  emulateTouch: !0,
                },
                r.a.createElement(
                  "div",
                  { className: "row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-4 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "device-container" },
                      r.a.createElement(
                        "div",
                        { className: "device" },
                        r.a.createElement(
                          "div",
                          { className: "screen" },
                          r.a.createElement("img", {
                            src: D.a,
                            className: "img-fluid",
                            alt: "Stats",
                          })
                        ),
                        r.a.createElement("div", { className: "button" })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-8 my-auto" },
                    r.a.createElement(
                      "div",
                      { className: "container-fluid" },
                      r.a.createElement(
                        "div",
                        { className: "row", style: { margin: 5 } },
                        r.a.createElement(
                          "div",
                          { className: "col-lg-6" },
                          r.a.createElement(
                            "div",
                            { className: "feature-item" },
                            r.a.createElement("i", {
                              class: "fas fa-chart-pie",
                            }),
                            r.a.createElement("h3", null, "Statistics Suite"),
                            r.a.createElement(
                              "p",
                              { className: "text-muted" },
                              "Penny Bank Pro provides a more detailed statistics suite of your child's habits and financial  health. Out the box you can see the punctuality of how often your child completes tasks on time. You can see a pie chart that shows as a whole what percentage each child contributes to contributions in the house. You can also see the wealth of each child in the house based on their wallet holdings. Considering children can make offers, some children can benefit from making their contributions more valuable. This gives a good insight of the spenders, the savers, and the negotiators!"
                            )
                          )
                        ),
                        r.a.createElement("div", { className: "col-lg-6" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "row" },
                        r.a.createElement("div", { className: "col-lg-6" }),
                        r.a.createElement("div", { className: "col-lg-6" })
                      )
                    )
                  )
                )
              )
            )
          ),
          r.a.createElement(
            "section",
            { className: "cta" },
            r.a.createElement(
              "div",
              { className: "cta-content" },
              r.a.createElement(
                "div",
                { className: "container" },
                r.a.createElement(
                  "h2",
                  null,
                  "Good Habits.",
                  r.a.createElement("br", null),
                  "Start Today."
                ),
                r.a.createElement(
                  d,
                  { type: "id", element: "contact" },
                  r.a.createElement(
                    "a",
                    { href: "#download", className: "btn bg-primary btn-xl" },
                    "Let's Get Started!"
                  )
                )
              )
            ),
            r.a.createElement("div", { className: "overlay" })
          ),
          r.a.createElement(
            "section",
            { className: "contact bg-primary", id: "contact" },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "h2",
                null,
                "Follow the Movement!",
                r.a.createElement("br", null),
                r.a.createElement("i", { className: "fas fa-heart" })
              ),
              r.a.createElement(g, null),
              r.a.createElement("hr", null),
              r.a.createElement("br", null),
              r.a.createElement(
                "div",
                { className: "contactForm" },
                r.a.createElement(
                  "h3",
                  null,
                  r.a.createElement("i", { className: "fas fa-phone" }),
                  r.a.createElement("br", null),
                  "704-269-8727"
                ),
                r.a.createElement(
                  "form",
                  {
                    id: "fs-frm",
                    name: "simple-contact-form",
                    "accept-charset": "utf-8",
                    action: "https://formspree.io/contact@pennybank.online",
                    method: "post",
                  },
                  r.a.createElement(
                    "div",
                    { className: "form-group" },
                    r.a.createElement(
                      "fieldset",
                      { id: "fs-frm-inputs" },
                      r.a.createElement(
                        "label",
                        { for: "full-name" },
                        "Full Name"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        name: "name",
                        id: "full-name",
                        required: "",
                        className: "form-control",
                      }),
                      r.a.createElement(
                        "label",
                        { for: "email-address" },
                        "Email Address"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        name: "_replyto",
                        id: "email-address",
                        required: "",
                        className: "form-control",
                      }),
                      r.a.createElement("label", { for: "message" }, "Message"),
                      r.a.createElement("textarea", {
                        rows: "5",
                        name: "message",
                        id: "message",
                        required: "",
                        className: "form-control",
                      }),
                      r.a.createElement("input", {
                        type: "hidden",
                        name: "_subject",
                        id: "email-subject",
                        value: "Contact Form Submission",
                        className: "form-control",
                      })
                    ),
                    r.a.createElement("br", null),
                    r.a.createElement("input", {
                      type: "submit",
                      value: "Submit",
                      className: "form-control btn btn-dark",
                    })
                  )
                )
              )
            )
          ),
          r.a.createElement(y.a, null)
        );
      };
    },
    SGlo: function(e, t, n) {
      "use strict";
      var a = n("rj/q"),
        r = n("N+BI").getWeak,
        o = n("1a8y"),
        i = n("BjK0"),
        s = n("xa9o"),
        l = n("yde8"),
        c = n("Wadk"),
        u = n("qDzq"),
        m = n("O1i0"),
        f = c(5),
        d = c(6),
        p = 0,
        h = function(e) {
          return e._l || (e._l = new v());
        },
        v = function() {
          this.a = [];
        },
        y = function(e, t) {
          return f(e.a, function(e) {
            return e[0] === t;
          });
        };
      (v.prototype = {
        get: function(e) {
          var t = y(this, e);
          if (t) return t[1];
        },
        has: function(e) {
          return !!y(this, e);
        },
        set: function(e, t) {
          var n = y(this, e);
          n ? (n[1] = t) : this.a.push([e, t]);
        },
        delete: function(e) {
          var t = d(this.a, function(t) {
            return t[0] === e;
          });
          return ~t && this.a.splice(t, 1), !!~t;
        },
      }),
        (e.exports = {
          getConstructor: function(e, t, n, o) {
            var c = e(function(e, a) {
              s(e, c, t, "_i"),
                (e._t = t),
                (e._i = p++),
                (e._l = void 0),
                null != a && l(a, n, e[o], e);
            });
            return (
              a(c.prototype, {
                delete: function(e) {
                  if (!i(e)) return !1;
                  var n = r(e);
                  return !0 === n
                    ? h(m(this, t)).delete(e)
                    : n && u(n, this._i) && delete n[this._i];
                },
                has: function(e) {
                  if (!i(e)) return !1;
                  var n = r(e);
                  return !0 === n ? h(m(this, t)).has(e) : n && u(n, this._i);
                },
              }),
              c
            );
          },
          def: function(e, t, n) {
            var a = r(o(t), !0);
            return !0 === a ? h(e).set(t, n) : (a[e._i] = n), e;
          },
          ufstore: h,
        });
    },
    TSYQ: function(e, t, n) {
      var a;
      n("MIFh"),
        (function() {
          "use strict";
          var n = {}.hasOwnProperty;
          function r() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var a = arguments[t];
              if (a) {
                var o = typeof a;
                if ("string" === o || "number" === o) e.push(a);
                else if (Array.isArray(a) && a.length) {
                  var i = r.apply(null, a);
                  i && e.push(i);
                } else if ("object" === o)
                  for (var s in a) n.call(a, s) && a[s] && e.push(s);
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((r.default = r), (e.exports = r))
            : void 0 ===
                (a = function() {
                  return r;
                }.apply(t, [])) || (e.exports = a);
        })();
    },
    Te51: function(e, t, n) {
      e.exports =
        n.p + "static/responsibility-bc9a445b8ee56dc702b0bd7f618fb1fa.png";
    },
    Wkhf: function(e, t, n) {
      e.exports = n.p + "static/lovetap-64cd99b45497e81f856dd7f18140348d.png";
    },
    a5pb: function(e, t, n) {
      e.exports =
        n.p + "static/withdrawrequest-bbd429d14aeab42496ea51d37965369c.png";
    },
    bOlk: function(e, t, n) {
      "use strict";
      n("n7j8"),
        n("AqHK"),
        n("JHok"),
        n("q8oJ"),
        n("C9fy"),
        n("nWfQ"),
        n("LagC"),
        n("pS08"),
        n("E5k/"),
        n("m210"),
        n("4DPX"),
        n("rzGZ"),
        n("Dq+y"),
        n("8npG"),
        n("YbXK"),
        n("eMsz"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== m(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, r, o)
                : (n[r] = e[r]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        r = c(n("Lk85")),
        o = n("fl1M"),
        i = c(n("xT4z")),
        s = c(n("JtOw")),
        l = c(n("MYHI"));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function m(e) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function f() {
        return (f =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e, t) {
        return !t || ("object" !== m(t) && "function" != typeof t) ? v(e) : t;
      }
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var w = (function(e) {
        !(function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(w, e);
        var t,
          n,
          c,
          u,
          m =
            ((t = w),
            function() {
              var e,
                n = g(t);
              if (y()) {
                var a = g(this).constructor;
                e = Reflect.construct(n, arguments, a);
              } else e = n.apply(this, arguments);
              return h(this, e);
            });
        function w(e) {
          var t;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, w),
            b(v((t = m.call(this, e))), "itemsWrapperRef", void 0),
            b(v(t), "itemsListRef", void 0),
            b(v(t), "thumbsRef", void 0),
            b(v(t), "setItemsWrapperRef", function(e) {
              t.itemsWrapperRef = e;
            }),
            b(v(t), "setItemsListRef", function(e) {
              t.itemsListRef = e;
            }),
            b(v(t), "setThumbsRef", function(e, n) {
              t.thumbsRef || (t.thumbsRef = []), (t.thumbsRef[n] = e);
            }),
            b(v(t), "updateSizes", function() {
              if (t.props.children && t.itemsWrapperRef && t.thumbsRef) {
                var e = a.Children.count(t.props.children),
                  n = t.itemsWrapperRef.clientWidth,
                  r = t.props.thumbWidth
                    ? t.props.thumbWidth
                    : (0, o.outerWidth)(t.thumbsRef[0]),
                  i = Math.floor(n / r),
                  s = e - i,
                  l = i < e;
                t.setState(function(e, n) {
                  return {
                    itemSize: r,
                    visibleItems: i,
                    firstItem: l ? t.getFirstItem(n.selectedItem) : 0,
                    lastPosition: s,
                    showArrows: l,
                  };
                });
              }
            }),
            b(v(t), "handleClickItem", function(e, n, a) {
              if (
                !(function(e) {
                  return e.hasOwnProperty("key");
                })(a) ||
                "Enter" === a.key
              ) {
                var r = t.props.onSelectItem;
                "function" == typeof r && r(e, n);
              }
            }),
            b(v(t), "onSwipeStart", function() {
              t.setState({ swiping: !0 });
            }),
            b(v(t), "onSwipeEnd", function() {
              t.setState({ swiping: !1 });
            }),
            b(v(t), "onSwipeMove", function(e) {
              var n = e.x;
              if (!t.state.itemSize || !t.itemsWrapperRef) return !1;
              var a = -t.state.firstItem * t.state.itemSize;
              0 === a && n > 0 && (n = 0),
                a === -t.state.visibleItems * t.state.itemSize &&
                  n < 0 &&
                  (n = 0);
              var r = a + 100 / (t.itemsWrapperRef.clientWidth / n);
              return (
                t.itemsListRef &&
                  [
                    "WebkitTransform",
                    "MozTransform",
                    "MsTransform",
                    "OTransform",
                    "transform",
                    "msTransform",
                  ].forEach(function(e) {
                    t.itemsListRef.style[e] = (0, i.default)(
                      r,
                      "%",
                      t.props.axis
                    );
                  }),
                !0
              );
            }),
            b(v(t), "slideRight", function(e) {
              t.moveTo(t.state.firstItem - ("number" == typeof e ? e : 1));
            }),
            b(v(t), "slideLeft", function(e) {
              t.moveTo(t.state.firstItem + ("number" == typeof e ? e : 1));
            }),
            b(v(t), "moveTo", function(e) {
              (e =
                (e = e < 0 ? 0 : e) >= t.state.lastPosition
                  ? t.state.lastPosition
                  : e),
                t.setState({ firstItem: e });
            }),
            (t.state = {
              selectedItem: e.selectedItem,
              swiping: !1,
              showArrows: !1,
              firstItem: 0,
              visibleItems: 0,
              lastPosition: 0,
            }),
            t
          );
        }
        return (
          (n = w),
          (c = [
            {
              key: "componentDidMount",
              value: function() {
                this.setupThumbs();
              },
            },
            {
              key: "UNSAFE_componentWillReceiveProps",
              value: function(e) {
                e.selectedItem !== this.state.selectedItem &&
                  this.setState({
                    selectedItem: e.selectedItem,
                    firstItem: this.getFirstItem(e.selectedItem),
                  });
              },
            },
            {
              key: "componentDidUpdate",
              value: function(e) {
                this.props.children !== e.children && this.updateSizes();
              },
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this.destroyThumbs();
              },
            },
            {
              key: "setupThumbs",
              value: function() {
                (0, l.default)().addEventListener("resize", this.updateSizes),
                  (0, l.default)().addEventListener(
                    "DOMContentLoaded",
                    this.updateSizes
                  ),
                  this.updateSizes();
              },
            },
            {
              key: "destroyThumbs",
              value: function() {
                (0, l.default)().removeEventListener(
                  "resize",
                  this.updateSizes
                ),
                  (0, l.default)().removeEventListener(
                    "DOMContentLoaded",
                    this.updateSizes
                  );
              },
            },
            {
              key: "getFirstItem",
              value: function(e) {
                var t = e;
                return (
                  e >= this.state.lastPosition && (t = this.state.lastPosition),
                  e < this.state.firstItem + this.state.visibleItems &&
                    (t = this.state.firstItem),
                  e < this.state.firstItem && (t = e),
                  t
                );
              },
            },
            {
              key: "renderItems",
              value: function() {
                var e = this;
                return this.props.children.map(function(t, n) {
                  var o = r.default.ITEM(!1, n === e.state.selectedItem),
                    i = {
                      key: n,
                      ref: function(t) {
                        return e.setThumbsRef(t, n);
                      },
                      className: o,
                      onClick: e.handleClickItem.bind(
                        e,
                        n,
                        e.props.children[n]
                      ),
                      onKeyDown: e.handleClickItem.bind(
                        e,
                        n,
                        e.props.children[n]
                      ),
                      "aria-label": ""
                        .concat(e.props.labels.item, " ")
                        .concat(n + 1),
                      style: { width: e.props.thumbWidth },
                    };
                  return a.default.createElement(
                    "li",
                    f({}, i, { role: "button", tabIndex: 0 }),
                    t
                  );
                });
              },
            },
            {
              key: "render",
              value: function() {
                var e = this;
                if (!this.props.children) return null;
                var t,
                  n = this.state.showArrows && this.state.firstItem > 0,
                  o =
                    this.state.showArrows &&
                    this.state.firstItem < this.state.lastPosition,
                  l = -this.state.firstItem * (this.state.itemSize || 0),
                  c = (0, i.default)(l, "px", this.props.axis),
                  u = this.props.transitionTime + "ms";
                return (
                  (t = {
                    WebkitTransform: c,
                    MozTransform: c,
                    MsTransform: c,
                    OTransform: c,
                    transform: c,
                    msTransform: c,
                    WebkitTransitionDuration: u,
                    MozTransitionDuration: u,
                    MsTransitionDuration: u,
                    OTransitionDuration: u,
                    transitionDuration: u,
                    msTransitionDuration: u,
                  }),
                  a.default.createElement(
                    "div",
                    { className: r.default.CAROUSEL(!1) },
                    a.default.createElement(
                      "div",
                      {
                        className: r.default.WRAPPER(!1),
                        ref: this.setItemsWrapperRef,
                      },
                      a.default.createElement("button", {
                        type: "button",
                        className: r.default.ARROW_PREV(!n),
                        onClick: function() {
                          return e.slideRight();
                        },
                        "aria-label": this.props.labels.leftArrow,
                      }),
                      a.default.createElement(
                        s.default,
                        {
                          tagName: "ul",
                          className: r.default.SLIDER(!1, this.state.swiping),
                          onSwipeLeft: this.slideLeft,
                          onSwipeRight: this.slideRight,
                          onSwipeMove: this.onSwipeMove,
                          onSwipeStart: this.onSwipeStart,
                          onSwipeEnd: this.onSwipeEnd,
                          style: t,
                          innerRef: this.setItemsListRef,
                        },
                        this.renderItems()
                      ),
                      a.default.createElement("button", {
                        type: "button",
                        className: r.default.ARROW_NEXT(!o),
                        onClick: function() {
                          return e.slideLeft();
                        },
                        "aria-label": this.props.labels.rightArrow,
                      })
                    )
                  )
                );
              },
            },
          ]) && d(n.prototype, c),
          u && d(n, u),
          w
        );
      })(a.Component);
      (t.default = w),
        b(w, "displayName", "Thumbs"),
        b(w, "defaultProps", {
          axis: "horizontal",
          labels: {
            leftArrow: "previous slide / item",
            rightArrow: "next slide / item",
            item: "slide item",
          },
          selectedItem: 0,
          thumbWidth: 80,
          transitionTime: 350,
        });
    },
    bRoh: function(e, t, n) {
      var a;
      function r(e) {
        function n() {
          if (n.enabled) {
            var e = n,
              r = +new Date(),
              o = r - (a || r);
            (e.diff = o), (e.prev = a), (e.curr = r), (a = r);
            for (var i = new Array(arguments.length), s = 0; s < i.length; s++)
              i[s] = arguments[s];
            (i[0] = t.coerce(i[0])), "string" != typeof i[0] && i.unshift("%O");
            var l = 0;
            (i[0] = i[0].replace(/%([a-zA-Z%])/g, function(n, a) {
              if ("%%" === n) return n;
              l++;
              var r = t.formatters[a];
              if ("function" == typeof r) {
                var o = i[l];
                (n = r.call(e, o)), i.splice(l, 1), l--;
              }
              return n;
            })),
              t.formatArgs.call(e, i);
            var c = n.log || t.log || console.log.bind(console);
            c.apply(e, i);
          }
        }
        return (
          (n.namespace = e),
          (n.enabled = t.enabled(e)),
          (n.useColors = t.useColors()),
          (n.color = (function(e) {
            var n,
              a = 0;
            for (n in e) (a = (a << 5) - a + e.charCodeAt(n)), (a |= 0);
            return t.colors[Math.abs(a) % t.colors.length];
          })(e)),
          "function" == typeof t.init && t.init(n),
          n
        );
      }
      n("klQ5"),
        n("HQhv"),
        n("n7j8"),
        n("sC2a"),
        ((t = e.exports = r.debug = r.default = r).coerce = function(e) {
          return e instanceof Error ? e.stack || e.message : e;
        }),
        (t.disable = function() {
          t.enable("");
        }),
        (t.enable = function(e) {
          t.save(e), (t.names = []), (t.skips = []);
          for (
            var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
              a = n.length,
              r = 0;
            r < a;
            r++
          )
            n[r] &&
              ("-" === (e = n[r].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : t.names.push(new RegExp("^" + e + "$")));
        }),
        (t.enabled = function(e) {
          var n, a;
          for (n = 0, a = t.skips.length; n < a; n++)
            if (t.skips[n].test(e)) return !1;
          for (n = 0, a = t.names.length; n < a; n++)
            if (t.names[n].test(e)) return !0;
          return !1;
        }),
        (t.humanize = n("QXP7")),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    "cQc+": function(e, t, n) {
      "use strict";
      n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Carousel", {
          enumerable: !0,
          get: function() {
            return a.default;
          },
        }),
        Object.defineProperty(t, "Thumbs", {
          enumerable: !0,
          get: function() {
            return r.default;
          },
        });
      var a = o(n("NyAt")),
        r = o(n("bOlk"));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    dwco: function(e, t, n) {
      n("klQ5"),
        n("1dPr"),
        n("n7j8"),
        (function() {
          "use strict";
          e.exports = {
            polyfill: function() {
              var e = window,
                t = document;
              if (
                !("scrollBehavior" in t.documentElement.style) ||
                !0 === e.__forceSmoothScrollPolyfill__
              ) {
                var n,
                  a = e.HTMLElement || e.Element,
                  r = {
                    scroll: e.scroll || e.scrollTo,
                    scrollBy: e.scrollBy,
                    elementScroll: a.prototype.scroll || s,
                    scrollIntoView: a.prototype.scrollIntoView,
                  },
                  o =
                    e.performance && e.performance.now
                      ? e.performance.now.bind(e.performance)
                      : Date.now,
                  i =
                    ((n = e.navigator.userAgent),
                    new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n)
                      ? 1
                      : 0);
                (e.scroll = e.scrollTo = function() {
                  void 0 !== arguments[0] &&
                    (!0 !== l(arguments[0])
                      ? p.call(
                          e,
                          t.body,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : e.scrollX || e.pageXOffset,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : e.scrollY || e.pageYOffset
                        )
                      : r.scroll.call(
                          e,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : e.scrollX || e.pageXOffset,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : e.scrollY || e.pageYOffset
                        ));
                }),
                  (e.scrollBy = function() {
                    void 0 !== arguments[0] &&
                      (l(arguments[0])
                        ? r.scrollBy.call(
                            e,
                            void 0 !== arguments[0].left
                              ? arguments[0].left
                              : "object" != typeof arguments[0]
                              ? arguments[0]
                              : 0,
                            void 0 !== arguments[0].top
                              ? arguments[0].top
                              : void 0 !== arguments[1]
                              ? arguments[1]
                              : 0
                          )
                        : p.call(
                            e,
                            t.body,
                            ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                            ~~arguments[0].top + (e.scrollY || e.pageYOffset)
                          ));
                  }),
                  (a.prototype.scroll = a.prototype.scrollTo = function() {
                    if (void 0 !== arguments[0])
                      if (!0 !== l(arguments[0])) {
                        var e = arguments[0].left,
                          t = arguments[0].top;
                        p.call(
                          this,
                          this,
                          void 0 === e ? this.scrollLeft : ~~e,
                          void 0 === t ? this.scrollTop : ~~t
                        );
                      } else {
                        if (
                          "number" == typeof arguments[0] &&
                          void 0 === arguments[1]
                        )
                          throw new SyntaxError("Value could not be converted");
                        r.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : "object" != typeof arguments[0]
                            ? ~~arguments[0]
                            : this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : void 0 !== arguments[1]
                            ? ~~arguments[1]
                            : this.scrollTop
                        );
                      }
                  }),
                  (a.prototype.scrollBy = function() {
                    void 0 !== arguments[0] &&
                      (!0 !== l(arguments[0])
                        ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior,
                          })
                        : r.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left + this.scrollLeft
                              : ~~arguments[0] + this.scrollLeft,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top + this.scrollTop
                              : ~~arguments[1] + this.scrollTop
                          ));
                  }),
                  (a.prototype.scrollIntoView = function() {
                    if (!0 !== l(arguments[0])) {
                      var n = f(this),
                        a = n.getBoundingClientRect(),
                        o = this.getBoundingClientRect();
                      n !== t.body
                        ? (p.call(
                            this,
                            n,
                            n.scrollLeft + o.left - a.left,
                            n.scrollTop + o.top - a.top
                          ),
                          "fixed" !== e.getComputedStyle(n).position &&
                            e.scrollBy({
                              left: a.left,
                              top: a.top,
                              behavior: "smooth",
                            }))
                        : e.scrollBy({
                            left: o.left,
                            top: o.top,
                            behavior: "smooth",
                          });
                    } else
                      r.scrollIntoView.call(
                        this,
                        void 0 === arguments[0] || arguments[0]
                      );
                  });
              }
              function s(e, t) {
                (this.scrollLeft = e), (this.scrollTop = t);
              }
              function l(e) {
                if (
                  null === e ||
                  "object" != typeof e ||
                  void 0 === e.behavior ||
                  "auto" === e.behavior ||
                  "instant" === e.behavior
                )
                  return !0;
                if ("object" == typeof e && "smooth" === e.behavior) return !1;
                throw new TypeError(
                  "behavior member of ScrollOptions " +
                    e.behavior +
                    " is not a valid value for enumeration ScrollBehavior."
                );
              }
              function c(e, t) {
                return "Y" === t
                  ? e.clientHeight + i < e.scrollHeight
                  : "X" === t
                  ? e.clientWidth + i < e.scrollWidth
                  : void 0;
              }
              function u(t, n) {
                var a = e.getComputedStyle(t, null)["overflow" + n];
                return "auto" === a || "scroll" === a;
              }
              function m(e) {
                var t = c(e, "Y") && u(e, "Y"),
                  n = c(e, "X") && u(e, "X");
                return t || n;
              }
              function f(e) {
                for (; e !== t.body && !1 === m(e); )
                  e = e.parentNode || e.host;
                return e;
              }
              function d(t) {
                var n,
                  a,
                  r,
                  i,
                  s = (o() - t.startTime) / 468;
                (i = s = s > 1 ? 1 : s),
                  (n = 0.5 * (1 - Math.cos(Math.PI * i))),
                  (a = t.startX + (t.x - t.startX) * n),
                  (r = t.startY + (t.y - t.startY) * n),
                  t.method.call(t.scrollable, a, r),
                  (a === t.x && r === t.y) ||
                    e.requestAnimationFrame(d.bind(e, t));
              }
              function p(n, a, i) {
                var l,
                  c,
                  u,
                  m,
                  f = o();
                n === t.body
                  ? ((l = e),
                    (c = e.scrollX || e.pageXOffset),
                    (u = e.scrollY || e.pageYOffset),
                    (m = r.scroll))
                  : ((l = n), (c = n.scrollLeft), (u = n.scrollTop), (m = s)),
                  d({
                    scrollable: l,
                    method: m,
                    startTime: f,
                    startX: c,
                    startY: u,
                    x: a,
                    y: i,
                  });
              }
            },
          };
        })();
    },
    eMsz: function(e, t, n) {
      "use strict";
      var a,
        r = n("emib"),
        o = n("Wadk")(0),
        i = n("IYdN"),
        s = n("N+BI"),
        l = n("k5Iv"),
        c = n("SGlo"),
        u = n("BjK0"),
        m = n("O1i0"),
        f = n("O1i0"),
        d = !r.ActiveXObject && "ActiveXObject" in r,
        p = s.getWeak,
        h = Object.isExtensible,
        v = c.ufstore,
        y = function(e) {
          return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        g = {
          get: function(e) {
            if (u(e)) {
              var t = p(e);
              return !0 === t
                ? v(m(this, "WeakMap")).get(e)
                : t
                ? t[this._i]
                : void 0;
            }
          },
          set: function(e, t) {
            return c.def(m(this, "WeakMap"), e, t);
          },
        },
        b = (e.exports = n("94Pd")("WeakMap", y, g, c, !0, !0));
      f &&
        d &&
        (l((a = c.getConstructor(y, "WeakMap")).prototype, g),
        (s.NEED = !0),
        o(["delete", "has", "get", "set"], function(e) {
          var t = b.prototype,
            n = t[e];
          i(t, e, function(t, r) {
            if (u(t) && !h(t)) {
              this._f || (this._f = new a());
              var o = this._f[e](t, r);
              return "set" == e ? this : o;
            }
            return n.call(this, t, r);
          });
        }));
    },
    fl1M: function(e, t, n) {
      "use strict";
      n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.outerWidth = void 0);
      t.outerWidth = function(e) {
        var t = e.offsetWidth,
          n = getComputedStyle(e);
        return (t += parseInt(n.marginLeft) + parseInt(n.marginRight));
      };
    },
    fnPv: function(e, t, n) {
      var a, r, o;
      n("n7j8"),
        n("LagC"),
        n("pS08"),
        n("sc67"),
        n("E5k/"),
        n("R48M"),
        (r = [t, n("q1tI"), n("17x9")]),
        void 0 ===
          (o =
            "function" ==
            typeof (a = function(e, t, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.setHasSupportToCaptureOption = m);
              var a = o(t),
                r = o(n);
              function o(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var i =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                      Object.prototype.hasOwnProperty.call(n, a) &&
                        (e[a] = n[a]);
                  }
                  return e;
                };
              function s(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              }
              var l = (function() {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    (a.enumerable = a.enumerable || !1),
                      (a.configurable = !0),
                      "value" in a && (a.writable = !0),
                      Object.defineProperty(e, a.key, a);
                  }
                }
                return function(t, n, a) {
                  return n && e(t.prototype, n), a && e(t, a), t;
                };
              })();
              function c(e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              }
              var u = !1;
              function m(e) {
                u = e;
              }
              try {
                addEventListener(
                  "test",
                  null,
                  Object.defineProperty({}, "capture", {
                    get: function() {
                      m(!0);
                    },
                  })
                );
              } catch (h) {}
              function f() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { capture: !0 };
                return u ? e : e.capture;
              }
              function d(e) {
                if ("touches" in e) {
                  var t = e.touches[0];
                  return { x: t.pageX, y: t.pageY };
                }
                return { x: e.screenX, y: e.screenY };
              }
              var p = (function(e) {
                function t() {
                  var e;
                  s(this, t);
                  for (
                    var n = arguments.length, a = Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  var o = c(
                    this,
                    (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                      e,
                      [this].concat(a)
                    )
                  );
                  return (
                    (o._handleSwipeStart = o._handleSwipeStart.bind(o)),
                    (o._handleSwipeMove = o._handleSwipeMove.bind(o)),
                    (o._handleSwipeEnd = o._handleSwipeEnd.bind(o)),
                    (o._onMouseDown = o._onMouseDown.bind(o)),
                    (o._onMouseMove = o._onMouseMove.bind(o)),
                    (o._onMouseUp = o._onMouseUp.bind(o)),
                    (o._setSwiperRef = o._setSwiperRef.bind(o)),
                    o
                  );
                }
                return (
                  (function(e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(t, e),
                  l(t, [
                    {
                      key: "componentDidMount",
                      value: function() {
                        this.swiper &&
                          this.swiper.addEventListener(
                            "touchmove",
                            this._handleSwipeMove,
                            f({ capture: !0, passive: !1 })
                          );
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function() {
                        this.swiper &&
                          this.swiper.removeEventListener(
                            "touchmove",
                            this._handleSwipeMove,
                            f({ capture: !0, passive: !1 })
                          );
                      },
                    },
                    {
                      key: "_onMouseDown",
                      value: function(e) {
                        this.props.allowMouseEvents &&
                          ((this.mouseDown = !0),
                          document.addEventListener("mouseup", this._onMouseUp),
                          document.addEventListener(
                            "mousemove",
                            this._onMouseMove
                          ),
                          this._handleSwipeStart(e));
                      },
                    },
                    {
                      key: "_onMouseMove",
                      value: function(e) {
                        this.mouseDown && this._handleSwipeMove(e);
                      },
                    },
                    {
                      key: "_onMouseUp",
                      value: function(e) {
                        (this.mouseDown = !1),
                          document.removeEventListener(
                            "mouseup",
                            this._onMouseUp
                          ),
                          document.removeEventListener(
                            "mousemove",
                            this._onMouseMove
                          ),
                          this._handleSwipeEnd(e);
                      },
                    },
                    {
                      key: "_handleSwipeStart",
                      value: function(e) {
                        var t = d(e),
                          n = t.x,
                          a = t.y;
                        (this.moveStart = { x: n, y: a }),
                          this.props.onSwipeStart(e);
                      },
                    },
                    {
                      key: "_handleSwipeMove",
                      value: function(e) {
                        if (this.moveStart) {
                          var t = d(e),
                            n = t.x,
                            a = t.y,
                            r = n - this.moveStart.x,
                            o = a - this.moveStart.y;
                          (this.moving = !0),
                            this.props.onSwipeMove({ x: r, y: o }, e) &&
                              e.preventDefault(),
                            (this.movePosition = { deltaX: r, deltaY: o });
                        }
                      },
                    },
                    {
                      key: "_handleSwipeEnd",
                      value: function(e) {
                        this.props.onSwipeEnd(e);
                        var t = this.props.tolerance;
                        this.moving &&
                          this.movePosition &&
                          (this.movePosition.deltaX < -t
                            ? this.props.onSwipeLeft(1, e)
                            : this.movePosition.deltaX > t &&
                              this.props.onSwipeRight(1, e),
                          this.movePosition.deltaY < -t
                            ? this.props.onSwipeUp(1, e)
                            : this.movePosition.deltaY > t &&
                              this.props.onSwipeDown(1, e)),
                          (this.moveStart = null),
                          (this.moving = !1),
                          (this.movePosition = null);
                      },
                    },
                    {
                      key: "_setSwiperRef",
                      value: function(e) {
                        (this.swiper = e), this.props.innerRef(e);
                      },
                    },
                    {
                      key: "render",
                      value: function() {
                        var e = this.props,
                          t = (e.tagName, e.className),
                          n = e.style,
                          r = e.children,
                          o =
                            (e.allowMouseEvents,
                            e.onSwipeUp,
                            e.onSwipeDown,
                            e.onSwipeLeft,
                            e.onSwipeRight,
                            e.onSwipeStart,
                            e.onSwipeMove,
                            e.onSwipeEnd,
                            e.innerRef,
                            e.tolerance,
                            (function(e, t) {
                              var n = {};
                              for (var a in e)
                                t.indexOf(a) >= 0 ||
                                  (Object.prototype.hasOwnProperty.call(e, a) &&
                                    (n[a] = e[a]));
                              return n;
                            })(e, [
                              "tagName",
                              "className",
                              "style",
                              "children",
                              "allowMouseEvents",
                              "onSwipeUp",
                              "onSwipeDown",
                              "onSwipeLeft",
                              "onSwipeRight",
                              "onSwipeStart",
                              "onSwipeMove",
                              "onSwipeEnd",
                              "innerRef",
                              "tolerance",
                            ]));
                        return a.default.createElement(
                          this.props.tagName,
                          i(
                            {
                              ref: this._setSwiperRef,
                              onMouseDown: this._onMouseDown,
                              onTouchStart: this._handleSwipeStart,
                              onTouchEnd: this._handleSwipeEnd,
                              className: t,
                              style: n,
                            },
                            o
                          ),
                          r
                        );
                      },
                    },
                  ]),
                  t
                );
              })(t.Component);
              (p.displayName = "ReactSwipe"),
                (p.propTypes = {
                  tagName: r.default.string,
                  className: r.default.string,
                  style: r.default.object,
                  children: r.default.node,
                  allowMouseEvents: r.default.bool,
                  onSwipeUp: r.default.func,
                  onSwipeDown: r.default.func,
                  onSwipeLeft: r.default.func,
                  onSwipeRight: r.default.func,
                  onSwipeStart: r.default.func,
                  onSwipeMove: r.default.func,
                  onSwipeEnd: r.default.func,
                  innerRef: r.default.func,
                  tolerance: r.default.number.isRequired,
                }),
                (p.defaultProps = {
                  tagName: "div",
                  allowMouseEvents: !1,
                  onSwipeUp: function() {},
                  onSwipeDown: function() {},
                  onSwipeLeft: function() {},
                  onSwipeRight: function() {},
                  onSwipeStart: function() {},
                  onSwipeMove: function() {},
                  onSwipeEnd: function() {},
                  innerRef: function() {},
                  tolerance: 0,
                }),
                (e.default = p);
            })
              ? a.apply(t, r)
              : a) || (e.exports = o);
    },
    g7PP: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABRNAAAUTQGUyo0vAAAKJElEQVRo3u1ZCXRVxRnO25esJGnYAoYghAQCVEBIQmQJEAoE07I0hIKEpSxBRAIJEBKgLCog5ihVQa1CEUuhLViP2APYo5RC62ERWSwCSkFEZDGQBHn3vfn7//P+eVweQY72JvT0eM/539w7b+7M//37zA0J+eH6/7gswR1DBrdztGkdF9G61Y8iM9MTXXd4x3SvGTdbday7XbZ0bBYjbUM6hHQa6QzSMaS/Iq2y2Sw5XTvHu78NfL1cJtPNhe12Sz42e5EgMsIG3bo0hkdGtIWiwi5QNLULTCzoAFk9mkPTxqFAY5BOIs1OTooNUyDMZlP9Mx/dwNUSm53EVId2sfDcsj7ik/0TNd/l2Rp8U+ZF8gXo2lzv+eOPapvW5noH9G0RAOJ227LVtPUCwsQqD/UvfJUkvmp5X+3GhWJiWMDXc8Q3X84S1V/MvIWun58lEJiAmnkCwfh2bMnzpKbESCBWq7kkAMJUD5JHqQ2ghVPbxsCRveM94CkHBADV5/yMIgD5jPdQ88VMeU999B+NqcEWgcC1s0XeEUPaCAnCYl6g/MpmM9eNw9JPRIQjFZvrZDIXTkzToLoUqj4vklJHRm9hHirnAP1PfaqfwYgqBOK9VAJQVeqbMLq9j0A47JaCOnXsspIMmnh/XKwTThyY5MHFJfOKccUkSR2uzIF3/jAcXljZD7SLJRKQ0gSPEzhOeL4qBt/lEh85OQkmKtKZpBeYoXHeYjHPIEm9/lKOB26U18o8mwoA/AqGPtwamjRySy2IK7OhphYQ5B9wdS4KZKInCv0J5//jTXczzG9DQlJT4sKx+axPz+ZkGj629duYp1a7WAxLyx9CkzBLJx318xQ49/GjEoTShG68IEHAjTJRVpwu/SEszJ5mpBaU9PNo8q0bfqZRJCFn1EufSJpO9TxYMDtDMp4/NBlKpneV9/2zEoBsXj9e5y9CXJ4NZ48WamSeOH5NcK75r50Xr/WJCRFw5fTjGtr0LdJXZkO2jpEF4hu7pfmAVi5N6cVnsiWIPdtHkdNKoEEgpD+gYHz5w5Jp7PFfjunkMMwB8oelOrE5OiwXmaqZ56XFaGFiGGO7JLonCV889RjERNuhtCgNKLyipuDUwUnQt+d9cHjPeMA8IaWu3lNaIY2iX4mKJ7MIgBYR7uhohBlJ+4+Jdt+HTSWZBjJFNhsIlSNRYhjLQfUB2nlG1yaQ0DwcKs/MALTtAMMEUpnNuFGpkDvwfriKY7SvSvwAqkrFu2/meTlL/9SIkGr2Jy57e5r0+af7Ccq25HQCw+TJA5PA6fQ76oe7x0rpUkTZ+eYI2desaRisX5MT0BRpg8Z8emgyREXa/e/9Dd+rnOsHgFn84w8maDznRMMAOB3WTrTYa88PEHB9ntQAxXkMfeB2WW4ygsxXEZOYwHb/5ReQhkUd/dezezycOVIozYWAEIAGUX4AB28CIHDiBNZSTqecs9A4DbhsD9BiK5f29mvg3MyACZH5DBncSjovJSUyEakJLBWofeOVwZJRSlQEQL03Jr8t5PRPhK//PUNqSEawyrni4K4CzW430TtTDAOADiU1MH1yJxmvSVrKiYkpSWzfBGLfe2MwJE7lhLYQfr2irwRxYJdfSwQi+L1qAoDhefO6XI3GYmVqHABMLBJAj4x4wSH0tnhOzBJDlz97HGIxCi0pywTwzgesPGHvjtESAPkGZeXq28Oo34RQu+XF6RKAw2E1zoSw3G1DoY1K5+P7JkpnC65tFBGIzh3jpANT+CR/oZzgcJik7ZPv0LvBGZzyCmpPdO/WRALAinScEQBkGDWbQxqjSi/QxFgi+Cg0Vp0rCq5r/HaMEt+1bSSEuS0QFmpFIP5d2MolvW9JYvrSQ5oP/rdjax6VEjKMYhb+iaGVKU74AU2M20Lv58emUuoXtVSYfrtHOz+J0m+XEguhCORdMh3sq0Xq/hLE/44Y0K+FYPuvwraVUUWdkkCFxSKjgzZ+dHtpr8qZg0FcozALC+R+uGunhjQ2YDa1jsUMvPaFgVL6KChaY5/hGxkUQ29ZKYbaaPMhsM4XoM0XZEq1+QNFoy+PT5Oa0JuLvpXMXy+D/e8XCNKUy2XRzH4A8+tqY/OPlKRoGJSd6PUntoEEIhBFgnZd0qGptAiWPPmBtHvcU3z093ECg4NolxzjG5QtN/tVmHdaGL0nUCX1YGJ8zoxu3pHDU0jlsoaXyQsTlwJCDJJW1J5YtfSf8hEKp5jk5BzIPKyuyPZwVl9eV9JX0njDZjPBts3Db2DMpgVF544NxVsbh8rtIdk77QkoXKpkReUDRRmKXsT8gfcLIM+/mRf9+7SAQ7vHaqRZfP4kOSk23Gjp3wLg/sQGtMARCpF7doy+0T8rcMYjWreMEmWz0gicrJMunZoOlz6dThsVeO/tfKh4Igu6pzWRjBM1inPB4b3jtYfS41UJ/WCdbuoxQpj5QCsemxOREXaK9Z6HB7T0bd+SB70ymwmLWTInizwXVpWSXGawWv0gUdLit6sH4a4tXVgsIZ6EZuGyHzPvwHo5alTbvKhIZyNsdqtTudMfTfEALPKdPVYocHMusHgTyxb2EItLu4sp438sJU5mBrCYjlM03Hn5WHPnsdrtWa/npArE71/NMWFuoAOpGpIw2jWsfXGgz+0ya0/Mz9QAliIt0tDmqTzwrFjcy1s87UGIjXEAJ6wNEeH2hvfqkDew1XM6rXRGuoJPoyVzMdFOaNsmBlKSYqB5fLjyE6JKpI12uyXznp9QBy/+QIcmYWjLfVFD8/DxJaRNSJuR1iEtw6Iwv2FcWHyQT93zbwQqQlm+o/bMRjNg+g79dwNipdZhN5lcTpOJfUZRnUvd9D3/N0IA35vHaC5fw3V9EUhUkySSn3JfKLc23b0dSR1Cufk/F8+pn9/F0m/KcwZfzqDnUN19mM70FI8udU83f0Z6jSKjrg5fww64Gqkt9x1ESqGEjLSS+yiG/5PvaRuojsjfZsYpX7zFff2RdvFaT+oYTED6F8+rLhpTrOOFhETnU0+x0NaxgOUimxgdMTuDX1qL1FWnLkL7IUcX+kbwMvf34tA4FGkCffvi/hG8CFEu99E2cQlLeztSY+6fzIALdQBe4Y+DxPRvWAstmUcq+HLUQAprh6lIQ3pOp6Kd/LVxJj93YKZLWfrrdYs/i7SUJVWmY2IjCyJEp6GjSFuRtnBfLGf0QWwJdnUWizQL6WmkDQykHdIV+kbBpiqvBki/C7J/ul5lDVj5OY77wlky67ifJE/ZOJmLtALdHHORHtM9P8IMWfizKzGfyZ9kFzFjg3UmROa8ihNkCGtgPa/5st5Zn9LFcdXSQn9iplNY7ct1plDB91k6W6VF83UM09nOWN1zH9bs62xKdM3hfroyWMMhDCiB7fwd7muGtJDvy/VmVFsSIslHsYastZwUm++QxMx3SVihPKd+Hf171rskO8u3RC7DcoWRc/xPlBo/XHe6/gO1UKbkNwCF9AAAAABJRU5ErkJggg==";
    },
    mwJr: function(e, t, n) {
      e.exports =
        n.p + "static/distrubutetime-b14acb80d0caea3dd6636484dc0d5075.png";
    },
    nWfQ: function(e, t, n) {
      var a = n("P8UN"),
        r = n("nsRs"),
        o = n("nONw"),
        i = n("1a8y"),
        s = n("BjK0"),
        l = n("96qb"),
        c = n("16Xr"),
        u = (n("emib").Reflect || {}).construct,
        m = l(function() {
          function e() {}
          return !(u(function() {}, [], e) instanceof e);
        }),
        f = !l(function() {
          u(function() {});
        });
      a(a.S + a.F * (m || f), "Reflect", {
        construct: function(e, t) {
          o(e), i(t);
          var n = arguments.length < 3 ? e : o(arguments[2]);
          if (f && !m) return u(e, t, n);
          if (e == n) {
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
            }
            var a = [null];
            return a.push.apply(a, t), new (c.apply(e, a))();
          }
          var l = n.prototype,
            d = r(s(l) ? l : Object.prototype),
            p = Function.apply.call(e, d, t);
          return s(p) ? p : d;
        },
      });
    },
    obyI: function(e, t) {
      e.exports = {
        siteTitle: "Penny Bank",
        manifestName: "Penny Bank",
        manifestShortName: "Landing",
        manifestStartUrl: "/",
        manifestBackgroundColor: "#F6E775",
        manifestThemeColor: "#F6E775",
        manifestDisplay: "standalone",
        manifestIcon: "src/assets/images/Pennybank_logo_Fill.png",
        pathPrefix: "/pennybank-landing/",
        socialLinks: [
          {
            icon: "fa-instagram",
            name: "Instagram",
            url: "https://www.instagram.com/pennybankapp/",
          },
          {
            icon: "fa-twitter",
            name: "Twitter",
            url: "https://twitter.com/PennyBankapp",
          },
          {
            icon: "fa-facebook-f",
            name: "Facebook",
            url: "https://www.facebook.com/pennybankapp",
          },
        ],
      };
    },
    ryqO: function(e, t, n) {
      e.exports = n.p + "static/offers-53f8df45da33a1156bf9bfc5c75679f8.png";
    },
    uSBc: function(e, t, n) {
      var a = n("chL8"),
        r = n("lHo0"),
        o = n("1a8y"),
        i = n("emib").Reflect;
      e.exports =
        (i && i.ownKeys) ||
        function(e) {
          var t = a.f(o(e)),
            n = r.f;
          return n ? t.concat(n(e)) : t;
        };
    },
    v9g0: function(e, t, n) {
      "use strict";
      var a = n("P8UN"),
        r = n("Wadk")(5),
        o = !0;
      "find" in [] &&
        Array(1).find(function() {
          o = !1;
        }),
        a(a.P + a.F * o, "Array", {
          find: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n("Dq1/")("find");
    },
    vqcw: function(e, t, n) {
      e.exports =
        n.p + "static/coming_soon-bcc85321e16b9e47123a40a6a51fd0a0.png";
    },
    xT4z: function(e, t, n) {
      "use strict";
      n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = function(e, t, n) {
        var a = 0 === e ? e : e + t;
        return (
          "translate3d" +
          ("(" + ("horizontal" === n ? [a, 0, 0] : [0, a, 0]).join(",") + ")")
        );
      };
    },
    xtjI: function(e, t, n) {
      var a = n("P8UN"),
        r = n("uSBc"),
        o = n("5SQf"),
        i = n("Drra"),
        s = n("Fgx0");
      a(a.S, "Object", {
        getOwnPropertyDescriptors: function(e) {
          for (
            var t, n, a = o(e), l = i.f, c = r(a), u = {}, m = 0;
            c.length > m;

          )
            void 0 !== (n = l(a, (t = c[m++]))) && s(u, t, n);
          return u;
        },
      });
    },
    zXcI: function(e, t, n) {
      e.exports =
        n.p + "static/homescreen-e37d6b7d0b702fa1918e34a5fda87a62.png";
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-fdf5295bbcf290dce651.js.map
