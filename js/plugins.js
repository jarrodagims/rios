!(function(q) {
  ({
    showLogs: !1,
    round: 1e3,
    init: function() {
      if ((this._log("init"), this._inited))
        return this._log("Already Inited"), void (this._inited = !0);
      (this._requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(a, t) {
          window.setTimeout(a, 1e3 / 60);
        }),
        this._onScroll(!0);
    },
    _inited: !1,
    _properties: [
      "x",
      "y",
      "z",
      "rotateX",
      "rotateY",
      "rotateZ",
      "scaleX",
      "scaleY",
      "scaleZ",
      "scale"
    ],
    _requestAnimationFrame: null,
    _log: function(a) {
      this.showLogs && console.log("Parallax Scroll / " + a);
    },
    _onScroll: function(X) {
      var Y = q(document).scrollTop(),
        Z = q(window).height();
      this._log("onScroll " + Y),
        q("[data-parallax]").each(
          q.proxy(function(a, t) {
            var i = q(t),
              o = [],
              c = !1,
              e = i.data("style");
            null == e && ((e = i.attr("style") || ""), i.data("style", e));
            var l,
              n = [i.data("parallax")];
            for (l = 2; i.data("parallax" + l); l++)
              n.push(i.data("parallax-" + l));
            var s = n.length;
            for (l = 0; l < s; l++) {
              var u = n[l],
                d = u["from-scroll"];
              null == d && (d = Math.max(0, q(t).offset().top - Z)), (d |= 0);
              var r = u.distance,
                m = u["to-scroll"];
              null == r && null == m && (r = Z), (r = Math.max(0 | r, 1));
              var h = u.easing,
                p = u["easing-return"];
              if (
                ((null != h && q.easing && q.easing[h]) || (h = null),
                (null != p && q.easing && q.easing[p]) || (p = h),
                h)
              ) {
                var v = u.duration;
                null == v && (v = r), (v = Math.max(0 | v, 1));
                var w = u["duration-return"];
                null == w && (w = v), (r = 1);
                var g = i.data("current-time");
                null == g && (g = 0);
              }
              null == m && (m = d + r), (m |= 0);
              var x = u.smoothness;
              null == x && (x = 30),
                (x |= 0),
                (X || 0 == x) && (x = 1),
                (x |= 0);
              var f = Y;
              (f = Math.max(f, d)),
                (f = Math.min(f, m)),
                h &&
                  (null == i.data("sens") && i.data("sens", "back"),
                  d < f &&
                    ("back" == i.data("sens")
                      ? ((g = 1), i.data("sens", "go"))
                      : g++),
                  f < m &&
                    ("go" == i.data("sens")
                      ? ((g = 1), i.data("sens", "back"))
                      : g++),
                  X && (g = v),
                  i.data("current-time", g)),
                this._properties.map(
                  q.proxy(function(a) {
                    var t = 0,
                      e = u[a];
                    if (null != e) {
                      "scale" == a ||
                      "scaleX" == a ||
                      "scaleY" == a ||
                      "scaleZ" == a
                        ? (t = 1)
                        : (e |= 0);
                      var l = i.data("_" + a);
                      null == l && (l = t);
                      var n = ((f - d) / (m - d)) * (e - t) + t,
                        s = l + (n - l) / x;
                      if (h && 0 < g && g <= v) {
                        var r = t;
                        "back" == i.data("sens") &&
                          ((e = -(r = e)), (h = p), (v = w)),
                          (s = q.easing[h](null, g, r, e, v));
                      }
                      (s = Math.ceil(s * this.round) / this.round) == l &&
                        n == e &&
                        (s = e),
                        o[a] || (o[a] = 0),
                        (o[a] += s),
                        l != o[a] && (i.data("_" + a, o[a]), (c = !0));
                    }
                  }, this)
                );
            }
            if (c) {
              if (null != o.z) {
                var _ = u.perspective;
                null == _ && (_ = 800);
                var y = i.parent();
                y.data("style") || y.data("style", y.attr("style") || ""),
                  y.attr(
                    "style",
                    "perspective:" +
                      _ +
                      "px; -webkit-perspective:" +
                      _ +
                      "px; " +
                      y.data("style")
                  );
              }
              null == o.scaleX && (o.scaleX = 1),
                null == o.scaleY && (o.scaleY = 1),
                null == o.scaleZ && (o.scaleZ = 1),
                null != o.scale &&
                  ((o.scaleX *= o.scale),
                  (o.scaleY *= o.scale),
                  (o.scaleZ *= o.scale));
              var A =
                "translate3d(" +
                (o.x ? o.x : 0) +
                "px, " +
                (o.y ? o.y : 0) +
                "px, " +
                (o.z ? o.z : 0) +
                "px)" +
                " " +
                ("rotateX(" +
                  (o.rotateX ? o.rotateX : 0) +
                  "deg) rotateY(" +
                  (o.rotateY ? o.rotateY : 0) +
                  "deg) rotateZ(" +
                  (o.rotateZ ? o.rotateZ : 0) +
                  "deg)") +
                " " +
                ("scaleX(" +
                  o.scaleX +
                  ") scaleY(" +
                  o.scaleY +
                  ") scaleZ(" +
                  o.scaleZ +
                  ")") +
                ";";
              this._log(A),
                i.attr(
                  "style",
                  "transform:" + A + " -webkit-transform:" + A + " " + e
                );
            }
          }, this)
        ),
        window.requestAnimationFrame
          ? window.requestAnimationFrame(q.proxy(this._onScroll, this, !1))
          : this._requestAnimationFrame(q.proxy(this._onScroll, this, !1));
    }
  }.init());
})(jQuery);

!(function() {
  "use strict";
  var e = 0,
    r = {};
  function i(t) {
    if (!t) throw new Error("No options passed to Waypoint constructor");
    if (!t.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!t.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = i.Adapter.extend({}, i.defaults, t)),
      (this.element = this.options.element),
      (this.adapter = new i.Adapter(this.element)),
      (this.callback = t.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = i.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis
      })),
      (this.context = i.Context.findOrCreateByElement(this.options.context)),
      i.offsetAliases[this.options.offset] &&
        (this.options.offset = i.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (r[this.key] = this),
      (e += 1);
  }
  (i.prototype.queueTrigger = function(t) {
    this.group.queueTrigger(this, t);
  }),
    (i.prototype.trigger = function(t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (i.prototype.destroy = function() {
      this.context.remove(this), this.group.remove(this), delete r[this.key];
    }),
    (i.prototype.disable = function() {
      return (this.enabled = !1), this;
    }),
    (i.prototype.enable = function() {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (i.prototype.next = function() {
      return this.group.next(this);
    }),
    (i.prototype.previous = function() {
      return this.group.previous(this);
    }),
    (i.invokeAll = function(t) {
      var e = [];
      for (var i in r) e.push(r[i]);
      for (var o = 0, n = e.length; o < n; o++) e[o][t]();
    }),
    (i.destroyAll = function() {
      i.invokeAll("destroy");
    }),
    (i.disableAll = function() {
      i.invokeAll("disable");
    }),
    (i.enableAll = function() {
      i.invokeAll("enable");
    }),
    (i.refreshAll = function() {
      i.Context.refreshAll();
    }),
    (i.viewportHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (i.viewportWidth = function() {
      return document.documentElement.clientWidth;
    }),
    (i.adapters = []),
    (i.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0
    }),
    (i.offsetAliases = {
      "bottom-in-view": function() {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function() {
        return this.context.innerWidth() - this.adapter.outerWidth();
      }
    }),
    (window.Waypoint = i);
})(),
  (function() {
    "use strict";
    function e(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    var i = 0,
      o = {},
      y = window.Waypoint,
      t = window.onload;
    function n(t) {
      (this.element = t),
        (this.Adapter = y.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop()
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    (n.prototype.add = function(t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (n.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (n.prototype.createThrottledResizeHandler = function() {
        var t = this;
        function e() {
          t.handleResize(), (t.didResize = !1);
        }
        this.adapter.on("resize.waypoints", function() {
          t.didResize || ((t.didResize = !0), y.requestAnimationFrame(e));
        });
      }),
      (n.prototype.createThrottledScrollHandler = function() {
        var t = this;
        function e() {
          t.handleScroll(), (t.didScroll = !1);
        }
        this.adapter.on("scroll.waypoints", function() {
          (t.didScroll && !y.isTouch) ||
            ((t.didScroll = !0), y.requestAnimationFrame(e));
        });
      }),
      (n.prototype.handleResize = function() {
        y.Context.refreshAll();
      }),
      (n.prototype.handleScroll = function() {
        var t = {},
          e = {
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
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll ? o.forward : o.backward;
          for (var r in this.waypoints[i]) {
            var s = this.waypoints[i][r],
              a = o.oldScroll < s.triggerPoint,
              l = o.newScroll >= s.triggerPoint;
            ((a && l) || (!a && !l)) &&
              (s.queueTrigger(n), (t[s.group.id] = s.group));
          }
        }
        for (var h in t) t[h].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (n.prototype.innerHeight = function() {
        return this.element == this.element.window
          ? y.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (n.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (n.prototype.innerWidth = function() {
        return this.element == this.element.window
          ? y.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (n.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; o < n; o++) t[o].destroy();
      }),
      (n.prototype.refresh = function() {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        for (var n in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        }))) {
          var r = t[n];
          for (var s in this.waypoints[n]) {
            var a,
              l,
              h,
              p,
              c = this.waypoints[n][s],
              u = c.options.offset,
              d = c.triggerPoint,
              f = 0,
              w = null == d;
            c.element !== c.element.window &&
              (f = c.adapter.offset()[r.offsetProp]),
              "function" == typeof u
                ? (u = u.apply(c))
                : "string" == typeof u &&
                  ((u = parseFloat(u)),
                  -1 < c.options.offset.indexOf("%") &&
                    (u = Math.ceil((r.contextDimension * u) / 100))),
              (a = r.contextScroll - r.contextOffset),
              (c.triggerPoint = f + a - u),
              (l = d < r.oldScroll),
              (h = c.triggerPoint >= r.oldScroll),
              (p = !l && !h),
              !w && (l && h)
                ? (c.queueTrigger(r.backward), (o[c.group.id] = c.group))
                : !w && p
                ? (c.queueTrigger(r.forward), (o[c.group.id] = c.group))
                : w &&
                  r.oldScroll >= c.triggerPoint &&
                  (c.queueTrigger(r.forward), (o[c.group.id] = c.group));
          }
        }
        return (
          y.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (n.findOrCreateByElement = function(t) {
        return n.findByElement(t) || new n(t);
      }),
      (n.refreshAll = function() {
        for (var t in o) o[t].refresh();
      }),
      (n.findByElement = function(t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function() {
        t && t(), n.refreshAll();
      }),
      (y.requestAnimationFrame = function(t) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          e
        ).call(window, t);
      }),
      (y.Context = n);
  })(),
  (function() {
    "use strict";
    function s(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function a(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    var e = { vertical: {}, horizontal: {} },
      i = window.Waypoint;
    function o(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (e[this.axis][this.name] = this);
    }
    (o.prototype.add = function(t) {
      this.waypoints.push(t);
    }),
      (o.prototype.clearTriggerQueues = function() {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (o.prototype.flushTriggers = function() {
        for (var t in this.triggerQueues) {
          var e = this.triggerQueues[t],
            i = "up" === t || "left" === t;
          e.sort(i ? a : s);
          for (var o = 0, n = e.length; o < n; o += 1) {
            var r = e[o];
            (r.options.continuous || o === e.length - 1) && r.trigger([t]);
          }
        }
        this.clearTriggerQueues();
      }),
      (o.prototype.next = function(t) {
        this.waypoints.sort(s);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1];
      }),
      (o.prototype.previous = function(t) {
        this.waypoints.sort(s);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e ? this.waypoints[e - 1] : null;
      }),
      (o.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t);
      }),
      (o.prototype.remove = function(t) {
        var e = i.Adapter.inArray(t, this.waypoints);
        -1 < e && this.waypoints.splice(e, 1);
      }),
      (o.prototype.first = function() {
        return this.waypoints[0];
      }),
      (o.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (o.findOrCreate = function(t) {
        return e[t.axis][t.name] || new o(t);
      }),
      (i.Group = o);
  })(),
  (function() {
    "use strict";
    var i = window.jQuery,
      t = window.Waypoint;
    function o(t) {
      this.$element = i(t);
    }
    i.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop"
      ],
      function(t, e) {
        o.prototype[e] = function() {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[e].apply(this.$element, t);
        };
      }
    ),
      i.each(["extend", "inArray", "isEmptyObject"], function(t, e) {
        o[e] = i[e];
      }),
      t.adapters.push({ name: "jquery", Adapter: o }),
      (t.Adapter = o);
  })(),
  (function() {
    "use strict";
    var n = window.Waypoint;
    function t(o) {
      return function() {
        var e = [],
          i = arguments[0];
        return (
          o.isFunction(arguments[0]) &&
            ((i = o.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function() {
            var t = o.extend({}, i, { element: this });
            "string" == typeof t.context &&
              (t.context = o(this).closest(t.context)[0]),
              e.push(new n(t));
          }),
          e
        );
      };
    }
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();

/*!
 * jQuery Cycle2; version: 2.1.6 build: 20141007
 * http://jquery.malsup.com/cycle2/
 * Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
 */
!(function(a) {
  "use strict";
  function b(a) {
    return (a || "").toLowerCase();
  }
  var c = "2.1.6";
  (a.fn.cycle = function(c) {
    var d;
    return 0 !== this.length || a.isReady
      ? this.each(function() {
          var d,
            e,
            f,
            g,
            h = a(this),
            i = a.fn.cycle.log;
          if (!h.data("cycle.opts")) {
            (h.data("cycle-log") === !1 ||
              (c && c.log === !1) ||
              (e && e.log === !1)) &&
              (i = a.noop),
              i("--c2 init--"),
              (d = h.data());
            for (var j in d)
              d.hasOwnProperty(j) &&
                /^cycle[A-Z]+/.test(j) &&
                ((g = d[j]),
                (f = j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b)),
                i(f + ":", g, "(" + typeof g + ")"),
                (d[f] = g));
            (e = a.extend({}, a.fn.cycle.defaults, d, c || {})),
              (e.timeoutId = 0),
              (e.paused = e.paused || !1),
              (e.container = h),
              (e._maxZ = e.maxZ),
              (e.API = a.extend({ _container: h }, a.fn.cycle.API)),
              (e.API.log = i),
              (e.API.trigger = function(a, b) {
                return e.container.trigger(a, b), e.API;
              }),
              h.data("cycle.opts", e),
              h.data("cycle.API", e.API),
              e.API.trigger("cycle-bootstrap", [e, e.API]),
              e.API.addInitialSlides(),
              e.API.preInitSlideshow(),
              e.slides.length && e.API.initSlideshow();
          }
        })
      : ((d = { s: this.selector, c: this.context }),
        a.fn.cycle.log("requeuing slideshow (dom not ready)"),
        a(function() {
          a(d.s, d.c).cycle(c);
        }),
        this);
  }),
    (a.fn.cycle.API = {
      opts: function() {
        return this._container.data("cycle.opts");
      },
      addInitialSlides: function() {
        var b = this.opts(),
          c = b.slides;
        (b.slideCount = 0),
          (b.slides = a()),
          (c = c.jquery ? c : b.container.find(c)),
          b.random &&
            c.sort(function() {
              return Math.random() - 0.5;
            }),
          b.API.add(c);
      },
      preInitSlideshow: function() {
        var b = this.opts();
        b.API.trigger("cycle-pre-initialize", [b]);
        var c = a.fn.cycle.transitions[b.fx];
        c && a.isFunction(c.preInit) && c.preInit(b), (b._preInitialized = !0);
      },
      postInitSlideshow: function() {
        var b = this.opts();
        b.API.trigger("cycle-post-initialize", [b]);
        var c = a.fn.cycle.transitions[b.fx];
        c && a.isFunction(c.postInit) && c.postInit(b);
      },
      initSlideshow: function() {
        var b,
          c = this.opts(),
          d = c.container;
        c.API.calcFirstSlide(),
          "static" == c.container.css("position") &&
            c.container.css("position", "relative"),
          a(c.slides[c.currSlide]).css({
            opacity: 1,
            display: "block",
            visibility: "visible"
          }),
          c.API.stackSlides(
            c.slides[c.currSlide],
            c.slides[c.nextSlide],
            !c.reverse
          ),
          c.pauseOnHover &&
            (c.pauseOnHover !== !0 && (d = a(c.pauseOnHover)),
            d.hover(
              function() {
                c.API.pause(!0);
              },
              function() {
                c.API.resume(!0);
              }
            )),
          c.timeout &&
            ((b = c.API.getSlideOpts(c.currSlide)),
            c.API.queueTransition(b, b.timeout + c.delay)),
          (c._initialized = !0),
          c.API.updateView(!0),
          c.API.trigger("cycle-initialized", [c]),
          c.API.postInitSlideshow();
      },
      pause: function(b) {
        var c = this.opts(),
          d = c.API.getSlideOpts(),
          e = c.hoverPaused || c.paused;
        b ? (c.hoverPaused = !0) : (c.paused = !0),
          e ||
            (c.container.addClass("cycle-paused"),
            c.API.trigger("cycle-paused", [c]).log("cycle-paused"),
            d.timeout &&
              (clearTimeout(c.timeoutId),
              (c.timeoutId = 0),
              (c._remainingTimeout -= a.now() - c._lastQueue),
              (c._remainingTimeout < 0 || isNaN(c._remainingTimeout)) &&
                (c._remainingTimeout = void 0)));
      },
      resume: function(a) {
        var b = this.opts(),
          c = !b.hoverPaused && !b.paused;
        a ? (b.hoverPaused = !1) : (b.paused = !1),
          c ||
            (b.container.removeClass("cycle-paused"),
            0 === b.slides.filter(":animated").length &&
              b.API.queueTransition(b.API.getSlideOpts(), b._remainingTimeout),
            b.API.trigger("cycle-resumed", [b, b._remainingTimeout]).log(
              "cycle-resumed"
            ));
      },
      add: function(b, c) {
        var d,
          e = this.opts(),
          f = e.slideCount,
          g = !1;
        "string" == a.type(b) && (b = a.trim(b)),
          a(b).each(function() {
            var b,
              d = a(this);
            c ? e.container.prepend(d) : e.container.append(d),
              e.slideCount++,
              (b = e.API.buildSlideOpts(d)),
              (e.slides = c ? a(d).add(e.slides) : e.slides.add(d)),
              e.API.initSlide(b, d, --e._maxZ),
              d.data("cycle.opts", b),
              e.API.trigger("cycle-slide-added", [e, b, d]);
          }),
          e.API.updateView(!0),
          (g = e._preInitialized && 2 > f && e.slideCount >= 1),
          g &&
            (e._initialized
              ? e.timeout &&
                ((d = e.slides.length),
                (e.nextSlide = e.reverse ? d - 1 : 1),
                e.timeoutId || e.API.queueTransition(e))
              : e.API.initSlideshow());
      },
      calcFirstSlide: function() {
        var a,
          b = this.opts();
        (a = parseInt(b.startingSlide || 0, 10)),
          (a >= b.slides.length || 0 > a) && (a = 0),
          (b.currSlide = a),
          b.reverse
            ? ((b.nextSlide = a - 1),
              b.nextSlide < 0 && (b.nextSlide = b.slides.length - 1))
            : ((b.nextSlide = a + 1),
              b.nextSlide == b.slides.length && (b.nextSlide = 0));
      },
      calcNextSlide: function() {
        var a,
          b = this.opts();
        b.reverse
          ? ((a = b.nextSlide - 1 < 0),
            (b.nextSlide = a ? b.slideCount - 1 : b.nextSlide - 1),
            (b.currSlide = a ? 0 : b.nextSlide + 1))
          : ((a = b.nextSlide + 1 == b.slides.length),
            (b.nextSlide = a ? 0 : b.nextSlide + 1),
            (b.currSlide = a ? b.slides.length - 1 : b.nextSlide - 1));
      },
      calcTx: function(b, c) {
        var d,
          e = b;
        return (
          e._tempFx
            ? (d = a.fn.cycle.transitions[e._tempFx])
            : c && e.manualFx && (d = a.fn.cycle.transitions[e.manualFx]),
          d || (d = a.fn.cycle.transitions[e.fx]),
          (e._tempFx = null),
          (this.opts()._tempFx = null),
          d ||
            ((d = a.fn.cycle.transitions.fade),
            e.API.log('Transition "' + e.fx + '" not found.  Using fade.')),
          d
        );
      },
      prepareTx: function(a, b) {
        var c,
          d,
          e,
          f,
          g,
          h = this.opts();
        return h.slideCount < 2
          ? void (h.timeoutId = 0)
          : (!a ||
              (h.busy && !h.manualTrump) ||
              (h.API.stopTransition(),
              (h.busy = !1),
              clearTimeout(h.timeoutId),
              (h.timeoutId = 0)),
            void (
              h.busy ||
              ((0 !== h.timeoutId || a) &&
                ((d = h.slides[h.currSlide]),
                (e = h.slides[h.nextSlide]),
                (f = h.API.getSlideOpts(h.nextSlide)),
                (g = h.API.calcTx(f, a)),
                (h._tx = g),
                a && void 0 !== f.manualSpeed && (f.speed = f.manualSpeed),
                h.nextSlide != h.currSlide &&
                (a || (!h.paused && !h.hoverPaused && h.timeout))
                  ? (h.API.trigger("cycle-before", [f, d, e, b]),
                    g.before && g.before(f, d, e, b),
                    (c = function() {
                      (h.busy = !1),
                        h.container.data("cycle.opts") &&
                          (g.after && g.after(f, d, e, b),
                          h.API.trigger("cycle-after", [f, d, e, b]),
                          h.API.queueTransition(f),
                          h.API.updateView(!0));
                    }),
                    (h.busy = !0),
                    g.transition
                      ? g.transition(f, d, e, b, c)
                      : h.API.doTransition(f, d, e, b, c),
                    h.API.calcNextSlide(),
                    h.API.updateView())
                  : h.API.queueTransition(f)))
            ));
      },
      doTransition: function(b, c, d, e, f) {
        var g = b,
          h = a(c),
          i = a(d),
          j = function() {
            i.animate(
              g.animIn || { opacity: 1 },
              g.speed,
              g.easeIn || g.easing,
              f
            );
          };
        i.css(g.cssBefore || {}),
          h.animate(
            g.animOut || {},
            g.speed,
            g.easeOut || g.easing,
            function() {
              h.css(g.cssAfter || {}), g.sync || j();
            }
          ),
          g.sync && j();
      },
      queueTransition: function(b, c) {
        var d = this.opts(),
          e = void 0 !== c ? c : b.timeout;
        return 0 === d.nextSlide && 0 === --d.loop
          ? (d.API.log("terminating; loop=0"),
            (d.timeout = 0),
            e
              ? setTimeout(function() {
                  d.API.trigger("cycle-finished", [d]);
                }, e)
              : d.API.trigger("cycle-finished", [d]),
            void (d.nextSlide = d.currSlide))
          : void 0 !== d.continueAuto &&
            (d.continueAuto === !1 ||
              (a.isFunction(d.continueAuto) && d.continueAuto() === !1))
          ? (d.API.log("terminating automatic transitions"),
            (d.timeout = 0),
            void (d.timeoutId && clearTimeout(d.timeoutId)))
          : void (
              e &&
              ((d._lastQueue = a.now()),
              void 0 === c && (d._remainingTimeout = b.timeout),
              d.paused ||
                d.hoverPaused ||
                (d.timeoutId = setTimeout(function() {
                  d.API.prepareTx(!1, !d.reverse);
                }, e)))
            );
      },
      stopTransition: function() {
        var a = this.opts();
        a.slides.filter(":animated").length &&
          (a.slides.stop(!1, !0),
          a.API.trigger("cycle-transition-stopped", [a])),
          a._tx && a._tx.stopTransition && a._tx.stopTransition(a);
      },
      advanceSlide: function(a) {
        var b = this.opts();
        return (
          clearTimeout(b.timeoutId),
          (b.timeoutId = 0),
          (b.nextSlide = b.currSlide + a),
          b.nextSlide < 0
            ? (b.nextSlide = b.slides.length - 1)
            : b.nextSlide >= b.slides.length && (b.nextSlide = 0),
          b.API.prepareTx(!0, a >= 0),
          !1
        );
      },
      buildSlideOpts: function(c) {
        var d,
          e,
          f = this.opts(),
          g = c.data() || {};
        for (var h in g)
          g.hasOwnProperty(h) &&
            /^cycle[A-Z]+/.test(h) &&
            ((d = g[h]),
            (e = h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b)),
            f.API.log(
              "[" + (f.slideCount - 1) + "]",
              e + ":",
              d,
              "(" + typeof d + ")"
            ),
            (g[e] = d));
        (g = a.extend({}, a.fn.cycle.defaults, f, g)),
          (g.slideNum = f.slideCount);
        try {
          delete g.API,
            delete g.slideCount,
            delete g.currSlide,
            delete g.nextSlide,
            delete g.slides;
        } catch (i) {}
        return g;
      },
      getSlideOpts: function(b) {
        var c = this.opts();
        void 0 === b && (b = c.currSlide);
        var d = c.slides[b],
          e = a(d).data("cycle.opts");
        return a.extend({}, c, e);
      },
      initSlide: function(b, c, d) {
        var e = this.opts();
        c.css(b.slideCss || {}),
          d > 0 && c.css("zIndex", d),
          isNaN(b.speed) &&
            (b.speed = a.fx.speeds[b.speed] || a.fx.speeds._default),
          b.sync || (b.speed = b.speed / 2),
          c.addClass(e.slideClass);
      },
      updateView: function(a, b) {
        var c = this.opts();
        if (c._initialized) {
          var d = c.API.getSlideOpts(),
            e = c.slides[c.currSlide];
          (!a &&
            b !== !0 &&
            (c.API.trigger("cycle-update-view-before", [c, d, e]),
            c.updateView < 0)) ||
            (c.slideActiveClass &&
              c.slides
                .removeClass(c.slideActiveClass)
                .eq(c.currSlide)
                .addClass(c.slideActiveClass),
            a &&
              c.hideNonActive &&
              c.slides
                .filter(":not(." + c.slideActiveClass + ")")
                .css("visibility", "hidden"),
            0 === c.updateView &&
              setTimeout(function() {
                c.API.trigger("cycle-update-view", [c, d, e, a]);
              }, d.speed / (c.sync ? 2 : 1)),
            0 !== c.updateView &&
              c.API.trigger("cycle-update-view", [c, d, e, a]),
            a && c.API.trigger("cycle-update-view-after", [c, d, e]));
        }
      },
      getComponent: function(b) {
        var c = this.opts(),
          d = c[b];
        return "string" == typeof d
          ? /^\s*[\>|\+|~]/.test(d)
            ? c.container.find(d)
            : a(d)
          : d.jquery
          ? d
          : a(d);
      },
      stackSlides: function(b, c, d) {
        var e = this.opts();
        b ||
          ((b = e.slides[e.currSlide]),
          (c = e.slides[e.nextSlide]),
          (d = !e.reverse)),
          a(b).css("zIndex", e.maxZ);
        var f,
          g = e.maxZ - 2,
          h = e.slideCount;
        if (d) {
          for (f = e.currSlide + 1; h > f; f++)
            a(e.slides[f]).css("zIndex", g--);
          for (f = 0; f < e.currSlide; f++) a(e.slides[f]).css("zIndex", g--);
        } else {
          for (f = e.currSlide - 1; f >= 0; f--)
            a(e.slides[f]).css("zIndex", g--);
          for (f = h - 1; f > e.currSlide; f--)
            a(e.slides[f]).css("zIndex", g--);
        }
        a(c).css("zIndex", e.maxZ - 1);
      },
      getSlideIndex: function(a) {
        return this.opts().slides.index(a);
      }
    }),
    (a.fn.cycle.log = function() {
      window.console &&
        console.log &&
        console.log("[cycle2] " + Array.prototype.join.call(arguments, " "));
    }),
    (a.fn.cycle.version = function() {
      return "Cycle2: " + c;
    }),
    (a.fn.cycle.transitions = {
      custom: {},
      none: {
        before: function(a, b, c, d) {
          a.API.stackSlides(c, b, d),
            (a.cssBefore = {
              opacity: 1,
              visibility: "visible",
              display: "block"
            });
        }
      },
      fade: {
        before: function(b, c, d, e) {
          var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
          b.API.stackSlides(c, d, e),
            (b.cssBefore = a.extend(f, {
              opacity: 0,
              visibility: "visible",
              display: "block"
            })),
            (b.animIn = { opacity: 1 }),
            (b.animOut = { opacity: 0 });
        }
      },
      fadeout: {
        before: function(b, c, d, e) {
          var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
          b.API.stackSlides(c, d, e),
            (b.cssBefore = a.extend(f, {
              opacity: 1,
              visibility: "visible",
              display: "block"
            })),
            (b.animOut = { opacity: 0 });
        }
      },
      scrollHorz: {
        before: function(a, b, c, d) {
          a.API.stackSlides(b, c, d);
          var e = a.container.css("overflow", "hidden").width();
          (a.cssBefore = {
            left: d ? e : -e,
            top: 0,
            opacity: 1,
            visibility: "visible",
            display: "block"
          }),
            (a.cssAfter = { zIndex: a._maxZ - 2, left: 0 }),
            (a.animIn = { left: 0 }),
            (a.animOut = { left: d ? -e : e });
        }
      }
    }),
    (a.fn.cycle.defaults = {
      allowWrap: !0,
      autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
      delay: 0,
      easing: null,
      fx: "fade",
      hideNonActive: !0,
      loop: 0,
      manualFx: void 0,
      manualSpeed: void 0,
      manualTrump: !0,
      maxZ: 100,
      pauseOnHover: !1,
      reverse: !1,
      slideActiveClass: "cycle-slide-active",
      slideClass: "cycle-slide",
      slideCss: { position: "absolute", top: 0, left: 0 },
      slides: "> img",
      speed: 500,
      startingSlide: 0,
      sync: !0,
      timeout: 4e3,
      updateView: 0
    }),
    a(document).ready(function() {
      a(a.fn.cycle.defaults.autoSelector).cycle();
    });
})(
  jQuery
) /*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */,
  (function(a) {
    "use strict";
    function b(b, d) {
      var e,
        f,
        g,
        h = d.autoHeight;
      if ("container" == h)
        (f = a(d.slides[d.currSlide]).outerHeight()), d.container.height(f);
      else if (d._autoHeightRatio)
        d.container.height(d.container.width() / d._autoHeightRatio);
      else if ("calc" === h || ("number" == a.type(h) && h >= 0)) {
        if (
          ((g = "calc" === h ? c(b, d) : h >= d.slides.length ? 0 : h),
          g == d._sentinelIndex)
        )
          return;
        (d._sentinelIndex = g),
          d._sentinel && d._sentinel.remove(),
          (e = a(d.slides[g].cloneNode(!0))),
          e
            .removeAttr("id name rel")
            .find("[id],[name],[rel]")
            .removeAttr("id name rel"),
          e
            .css({ position: "static", visibility: "hidden", display: "block" })
            .prependTo(d.container)
            .addClass("cycle-sentinel cycle-slide")
            .removeClass("cycle-slide-active"),
          e.find("*").css("visibility", "hidden"),
          (d._sentinel = e);
      }
    }
    function c(b, c) {
      var d = 0,
        e = -1;
      return (
        c.slides.each(function(b) {
          var c = a(this).height();
          c > e && ((e = c), (d = b));
        }),
        d
      );
    }
    function d(b, c, d, e) {
      var f = a(e).outerHeight();
      c.container.animate({ height: f }, c.autoHeightSpeed, c.autoHeightEasing);
    }
    function e(c, f) {
      f._autoHeightOnResize &&
        (a(window).off("resize orientationchange", f._autoHeightOnResize),
        (f._autoHeightOnResize = null)),
        f.container.off("cycle-slide-added cycle-slide-removed", b),
        f.container.off("cycle-destroyed", e),
        f.container.off("cycle-before", d),
        f._sentinel && (f._sentinel.remove(), (f._sentinel = null));
    }
    a.extend(a.fn.cycle.defaults, {
      autoHeight: 0,
      autoHeightSpeed: 250,
      autoHeightEasing: null
    }),
      a(document).on("cycle-initialized", function(c, f) {
        function g() {
          b(c, f);
        }
        var h,
          i = f.autoHeight,
          j = a.type(i),
          k = null;
        ("string" === j || "number" === j) &&
          (f.container.on("cycle-slide-added cycle-slide-removed", b),
          f.container.on("cycle-destroyed", e),
          "container" == i
            ? f.container.on("cycle-before", d)
            : "string" === j &&
              /\d+\:\d+/.test(i) &&
              ((h = i.match(/(\d+)\:(\d+)/)),
              (h = h[1] / h[2]),
              (f._autoHeightRatio = h)),
          "number" !== j &&
            ((f._autoHeightOnResize = function() {
              clearTimeout(k), (k = setTimeout(g, 50));
            }),
            a(window).on("resize orientationchange", f._autoHeightOnResize)),
          setTimeout(g, 30));
      });
  })(jQuery) /*! caption plugin for Cycle2;  version: 20130306 */,
  (function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
      caption: "> .cycle-caption",
      captionTemplate: "{{slideNum}} / {{slideCount}}",
      overlay: "> .cycle-overlay",
      overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
      captionModule: "caption"
    }),
      a(document).on("cycle-update-view", function(b, c, d, e) {
        if ("caption" === c.captionModule) {
          a.each(["caption", "overlay"], function() {
            var a = this,
              b = d[a + "Template"],
              f = c.API.getComponent(a);
            f.length && b
              ? (f.html(c.API.tmpl(b, d, c, e)), f.show())
              : f.hide();
          });
        }
      }),
      a(document).on("cycle-destroyed", function(b, c) {
        var d;
        a.each(["caption", "overlay"], function() {
          var a = this,
            b = c[a + "Template"];
          c[a] && b && ((d = c.API.getComponent("caption")), d.empty());
        });
      });
  })(jQuery) /*! command plugin for Cycle2;  version: 20140415 */,
  (function(a) {
    "use strict";
    var b = a.fn.cycle;
    (a.fn.cycle = function(c) {
      var d,
        e,
        f,
        g = a.makeArray(arguments);
      return "number" == a.type(c)
        ? this.cycle("goto", c)
        : "string" == a.type(c)
        ? this.each(function() {
            var h;
            return (
              (d = c),
              (f = a(this).data("cycle.opts")),
              void 0 === f
                ? void b.log(
                    'slideshow must be initialized before sending commands; "' +
                      d +
                      '" ignored'
                  )
                : ((d = "goto" == d ? "jump" : d),
                  (e = f.API[d]),
                  a.isFunction(e)
                    ? ((h = a.makeArray(g)), h.shift(), e.apply(f.API, h))
                    : void b.log("unknown command: ", d))
            );
          })
        : b.apply(this, arguments);
    }),
      a.extend(a.fn.cycle, b),
      a.extend(b.API, {
        next: function() {
          var a = this.opts();
          if (!a.busy || a.manualTrump) {
            var b = a.reverse ? -1 : 1;
            (a.allowWrap === !1 && a.currSlide + b >= a.slideCount) ||
              (a.API.advanceSlide(b),
              a.API.trigger("cycle-next", [a]).log("cycle-next"));
          }
        },
        prev: function() {
          var a = this.opts();
          if (!a.busy || a.manualTrump) {
            var b = a.reverse ? 1 : -1;
            (a.allowWrap === !1 && a.currSlide + b < 0) ||
              (a.API.advanceSlide(b),
              a.API.trigger("cycle-prev", [a]).log("cycle-prev"));
          }
        },
        destroy: function() {
          this.stop();
          var b = this.opts(),
            c = a.isFunction(a._data) ? a._data : a.noop;
          clearTimeout(b.timeoutId),
            (b.timeoutId = 0),
            b.API.stop(),
            b.API.trigger("cycle-destroyed", [b]).log("cycle-destroyed"),
            b.container.removeData(),
            c(b.container[0], "parsedAttrs", !1),
            b.retainStylesOnDestroy ||
              (b.container.removeAttr("style"),
              b.slides.removeAttr("style"),
              b.slides.removeClass(b.slideActiveClass)),
            b.slides.each(function() {
              var d = a(this);
              d.removeData(),
                d.removeClass(b.slideClass),
                c(this, "parsedAttrs", !1);
            });
        },
        jump: function(a, b) {
          var c,
            d = this.opts();
          if (!d.busy || d.manualTrump) {
            var e = parseInt(a, 10);
            if (isNaN(e) || 0 > e || e >= d.slides.length)
              return void d.API.log("goto: invalid slide index: " + e);
            if (e == d.currSlide)
              return void d.API.log("goto: skipping, already on slide", e);
            (d.nextSlide = e),
              clearTimeout(d.timeoutId),
              (d.timeoutId = 0),
              d.API.log("goto: ", e, " (zero-index)"),
              (c = d.currSlide < d.nextSlide),
              (d._tempFx = b),
              d.API.prepareTx(!0, c);
          }
        },
        stop: function() {
          var b = this.opts(),
            c = b.container;
          clearTimeout(b.timeoutId),
            (b.timeoutId = 0),
            b.API.stopTransition(),
            b.pauseOnHover &&
              (b.pauseOnHover !== !0 && (c = a(b.pauseOnHover)),
              c.off("mouseenter mouseleave")),
            b.API.trigger("cycle-stopped", [b]).log("cycle-stopped");
        },
        reinit: function() {
          var a = this.opts();
          a.API.destroy(), a.container.cycle();
        },
        remove: function(b) {
          for (
            var c, d, e = this.opts(), f = [], g = 1, h = 0;
            h < e.slides.length;
            h++
          )
            (c = e.slides[h]),
              h == b
                ? (d = c)
                : (f.push(c), (a(c).data("cycle.opts").slideNum = g), g++);
          d &&
            ((e.slides = a(f)),
            e.slideCount--,
            a(d).remove(),
            b == e.currSlide
              ? e.API.advanceSlide(1)
              : b < e.currSlide
              ? e.currSlide--
              : e.currSlide++,
            e.API.trigger("cycle-slide-removed", [e, b, d]).log(
              "cycle-slide-removed"
            ),
            e.API.updateView());
        }
      }),
      a(document).on("click.cycle", "[data-cycle-cmd]", function(b) {
        b.preventDefault();
        var c = a(this),
          d = c.data("cycle-cmd"),
          e = c.data("cycle-context") || ".cycle-slideshow";
        a(e).cycle(d, c.data("cycle-arg"));
      });
  })(jQuery) /*! hash plugin for Cycle2;  version: 20130905 */,
  (function(a) {
    "use strict";
    function b(b, c) {
      var d;
      return b._hashFence
        ? void (b._hashFence = !1)
        : ((d = window.location.hash.substring(1)),
          void b.slides.each(function(e) {
            if (a(this).data("cycle-hash") == d) {
              if (c === !0) b.startingSlide = e;
              else {
                var f = b.currSlide < e;
                (b.nextSlide = e), b.API.prepareTx(!0, f);
              }
              return !1;
            }
          }));
    }
    a(document).on("cycle-pre-initialize", function(c, d) {
      b(d, !0),
        (d._onHashChange = function() {
          b(d, !1);
        }),
        a(window).on("hashchange", d._onHashChange);
    }),
      a(document).on("cycle-update-view", function(a, b, c) {
        c.hash &&
          "#" + c.hash != window.location.hash &&
          ((b._hashFence = !0), (window.location.hash = c.hash));
      }),
      a(document).on("cycle-destroyed", function(b, c) {
        c._onHashChange && a(window).off("hashchange", c._onHashChange);
      });
  })(jQuery) /*! loader plugin for Cycle2;  version: 20131121 */,
  (function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, { loader: !1 }),
      a(document).on("cycle-bootstrap", function(b, c) {
        function d(b, d) {
          function f(b) {
            var f;
            "wait" == c.loader
              ? (h.push(b),
                0 === j &&
                  (h.sort(g),
                  e.apply(c.API, [h, d]),
                  c.container.removeClass("cycle-loading")))
              : ((f = a(c.slides[c.currSlide])),
                e.apply(c.API, [b, d]),
                f.show(),
                c.container.removeClass("cycle-loading"));
          }
          function g(a, b) {
            return a.data("index") - b.data("index");
          }
          var h = [];
          if ("string" == a.type(b)) b = a.trim(b);
          else if ("array" === a.type(b))
            for (var i = 0; i < b.length; i++) b[i] = a(b[i])[0];
          b = a(b);
          var j = b.length;
          j &&
            (b
              .css("visibility", "hidden")
              .appendTo("body")
              .each(function(b) {
                function g() {
                  0 === --i && (--j, f(k));
                }
                var i = 0,
                  k = a(this),
                  l = k.is("img") ? k : k.find("img");
                return (
                  k.data("index", b),
                  (l = l
                    .filter(":not(.cycle-loader-ignore)")
                    .filter(':not([src=""])')),
                  l.length
                    ? ((i = l.length),
                      void l.each(function() {
                        this.complete
                          ? g()
                          : a(this)
                              .load(function() {
                                g();
                              })
                              .on("error", function() {
                                0 === --i &&
                                  (c.API.log(
                                    "slide skipped; img not loaded:",
                                    this.src
                                  ),
                                  0 === --j &&
                                    "wait" == c.loader &&
                                    e.apply(c.API, [h, d]));
                              });
                      }))
                    : (--j, void h.push(k))
                );
              }),
            j && c.container.addClass("cycle-loading"));
        }
        var e;
        c.loader && ((e = c.API.add), (c.API.add = d));
      });
  })(jQuery) /*! pager plugin for Cycle2;  version: 20140415 */,
  (function(a) {
    "use strict";
    function b(b, c, d) {
      var e,
        f = b.API.getComponent("pager");
      f.each(function() {
        var f = a(this);
        if (c.pagerTemplate) {
          var g = b.API.tmpl(c.pagerTemplate, c, b, d[0]);
          e = a(g).appendTo(f);
        } else e = f.children().eq(b.slideCount - 1);
        e.on(b.pagerEvent, function(a) {
          b.pagerEventBubble || a.preventDefault(),
            b.API.page(f, a.currentTarget);
        });
      });
    }
    function c(a, b) {
      var c = this.opts();
      if (!c.busy || c.manualTrump) {
        var d = a.children().index(b),
          e = d,
          f = c.currSlide < e;
        c.currSlide != e &&
          ((c.nextSlide = e),
          (c._tempFx = c.pagerFx),
          c.API.prepareTx(!0, f),
          c.API.trigger("cycle-pager-activated", [c, a, b]));
      }
    }
    a.extend(a.fn.cycle.defaults, {
      pager: "> .cycle-pager",
      pagerActiveClass: "cycle-pager-active",
      pagerEvent: "click.cycle",
      pagerEventBubble: void 0,
      pagerTemplate: "<span>&bull;</span>"
    }),
      a(document).on("cycle-bootstrap", function(a, c, d) {
        d.buildPagerLink = b;
      }),
      a(document).on("cycle-slide-added", function(a, b, d, e) {
        b.pager && (b.API.buildPagerLink(b, d, e), (b.API.page = c));
      }),
      a(document).on("cycle-slide-removed", function(b, c, d) {
        if (c.pager) {
          var e = c.API.getComponent("pager");
          e.each(function() {
            var b = a(this);
            a(b.children()[d]).remove();
          });
        }
      }),
      a(document).on("cycle-update-view", function(b, c) {
        var d;
        c.pager &&
          ((d = c.API.getComponent("pager")),
          d.each(function() {
            a(this)
              .children()
              .removeClass(c.pagerActiveClass)
              .eq(c.currSlide)
              .addClass(c.pagerActiveClass);
          }));
      }),
      a(document).on("cycle-destroyed", function(a, b) {
        var c = b.API.getComponent("pager");
        c && (c.children().off(b.pagerEvent), b.pagerTemplate && c.empty());
      });
  })(jQuery) /*! prevnext plugin for Cycle2;  version: 20140408 */,
  (function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
      next: "> .cycle-next",
      nextEvent: "click.cycle",
      disabledClass: "disabled",
      prev: "> .cycle-prev",
      prevEvent: "click.cycle",
      swipe: !1
    }),
      a(document).on("cycle-initialized", function(a, b) {
        if (
          (b.API.getComponent("next").on(b.nextEvent, function(a) {
            a.preventDefault(), b.API.next();
          }),
          b.API.getComponent("prev").on(b.prevEvent, function(a) {
            a.preventDefault(), b.API.prev();
          }),
          b.swipe)
        ) {
          var c = b.swipeVert
              ? "swipeUp.cycle"
              : "swipeLeft.cycle swipeleft.cycle",
            d = b.swipeVert
              ? "swipeDown.cycle"
              : "swipeRight.cycle swiperight.cycle";
          b.container.on(c, function() {
            (b._tempFx = b.swipeFx), b.API.next();
          }),
            b.container.on(d, function() {
              (b._tempFx = b.swipeFx), b.API.prev();
            });
        }
      }),
      a(document).on("cycle-update-view", function(a, b) {
        if (!b.allowWrap) {
          var c = b.disabledClass,
            d = b.API.getComponent("next"),
            e = b.API.getComponent("prev"),
            f = b._prevBoundry || 0,
            g = void 0 !== b._nextBoundry ? b._nextBoundry : b.slideCount - 1;
          b.currSlide == g
            ? d.addClass(c).prop("disabled", !0)
            : d.removeClass(c).prop("disabled", !1),
            b.currSlide === f
              ? e.addClass(c).prop("disabled", !0)
              : e.removeClass(c).prop("disabled", !1);
        }
      }),
      a(document).on("cycle-destroyed", function(a, b) {
        b.API.getComponent("prev").off(b.nextEvent),
          b.API.getComponent("next").off(b.prevEvent),
          b.container.off(
            "swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle"
          );
      });
  })(jQuery) /*! progressive loader plugin for Cycle2;  version: 20130315 */,
  (function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, { progressive: !1 }),
      a(document).on("cycle-pre-initialize", function(b, c) {
        if (c.progressive) {
          var d,
            e,
            f = c.API,
            g = f.next,
            h = f.prev,
            i = f.prepareTx,
            j = a.type(c.progressive);
          if ("array" == j) d = c.progressive;
          else if (a.isFunction(c.progressive)) d = c.progressive(c);
          else if ("string" == j) {
            if (((e = a(c.progressive)), (d = a.trim(e.html())), !d)) return;
            if (/^(\[)/.test(d))
              try {
                d = a.parseJSON(d);
              } catch (k) {
                return void f.log("error parsing progressive slides", k);
              }
            else
              (d = d.split(new RegExp(e.data("cycle-split") || "\n"))),
                d[d.length - 1] || d.pop();
          }
          i &&
            (f.prepareTx = function(a, b) {
              var e, f;
              return a || 0 === d.length
                ? void i.apply(c.API, [a, b])
                : void (b && c.currSlide == c.slideCount - 1
                    ? ((f = d[0]),
                      (d = d.slice(1)),
                      c.container.one("cycle-slide-added", function(a, b) {
                        setTimeout(function() {
                          b.API.advanceSlide(1);
                        }, 50);
                      }),
                      c.API.add(f))
                    : b || 0 !== c.currSlide
                    ? i.apply(c.API, [a, b])
                    : ((e = d.length - 1),
                      (f = d[e]),
                      (d = d.slice(0, e)),
                      c.container.one("cycle-slide-added", function(a, b) {
                        setTimeout(function() {
                          (b.currSlide = 1), b.API.advanceSlide(-1);
                        }, 50);
                      }),
                      c.API.add(f, !0)));
            }),
            g &&
              (f.next = function() {
                var a = this.opts();
                if (d.length && a.currSlide == a.slideCount - 1) {
                  var b = d[0];
                  (d = d.slice(1)),
                    a.container.one("cycle-slide-added", function(a, b) {
                      g.apply(b.API), b.container.removeClass("cycle-loading");
                    }),
                    a.container.addClass("cycle-loading"),
                    a.API.add(b);
                } else g.apply(a.API);
              }),
            h &&
              (f.prev = function() {
                var a = this.opts();
                if (d.length && 0 === a.currSlide) {
                  var b = d.length - 1,
                    c = d[b];
                  (d = d.slice(0, b)),
                    a.container.one("cycle-slide-added", function(a, b) {
                      (b.currSlide = 1),
                        b.API.advanceSlide(-1),
                        b.container.removeClass("cycle-loading");
                    }),
                    a.container.addClass("cycle-loading"),
                    a.API.add(c, !0);
                } else h.apply(a.API);
              });
        }
      });
  })(jQuery) /*! tmpl plugin for Cycle2;  version: 20121227 */,
  (function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, { tmplRegex: "{{((.)?.*?)}}" }),
      a.extend(a.fn.cycle.API, {
        tmpl: function(b, c) {
          var d = new RegExp(c.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g"),
            e = a.makeArray(arguments);
          return (
            e.shift(),
            b.replace(d, function(b, c) {
              var d,
                f,
                g,
                h,
                i = c.split(".");
              for (d = 0; d < e.length; d++)
                if ((g = e[d])) {
                  if (i.length > 1)
                    for (h = g, f = 0; f < i.length; f++)
                      (g = h), (h = h[i[f]] || c);
                  else h = g[c];
                  if (a.isFunction(h)) return h.apply(g, e);
                  if (void 0 !== h && null !== h && h != c) return h;
                }
              return c;
            })
          );
        }
      });
  })(jQuery);

/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
/*! carousel transition plugin for Cycle2;  version: 20130528 */
(function($) {
  "use strict";

  $(document).on("cycle-bootstrap", function(e, opts, API) {
    if (opts.fx !== "carousel") return;

    API.getSlideIndex = function(el) {
      var slides = this.opts()._carouselWrap.children();
      var i = slides.index(el);
      return i % slides.length;
    };

    // override default 'next' function
    API.next = function() {
      var count = opts.reverse ? -1 : 1;
      if (
        opts.allowWrap === false &&
        opts.currSlide + count > opts.slideCount - opts.carouselVisible
      )
        return;
      opts.API.advanceSlide(count);
      opts.API.trigger("cycle-next", [opts]).log("cycle-next");
    };
  });

  $.fn.cycle.transitions.carousel = {
    // transition API impl
    preInit: function(opts) {
      opts.hideNonActive = false;

      opts.container.on("cycle-destroyed", $.proxy(this.onDestroy, opts.API));
      // override default API implementation
      opts.API.stopTransition = this.stopTransition;

      // issue #10
      for (var i = 0; i < opts.startingSlide; i++) {
        opts.container.append(opts.slides[0]);
      }
    },

    // transition API impl
    postInit: function(opts) {
      var i, j, slide, pagerCutoffIndex, wrap;
      var vert = opts.carouselVertical;
      if (opts.carouselVisible && opts.carouselVisible > opts.slideCount)
        opts.carouselVisible = opts.slideCount - 1;
      var visCount = opts.carouselVisible || opts.slides.length;
      var slideCSS = {
        display: vert ? "block" : "inline-block",
        position: "static"
      };

      // required styles
      opts.container.css({ position: "relative", overflow: "hidden" });
      opts.slides.css(slideCSS);

      opts._currSlide = opts.currSlide;

      // wrap slides in a div; this div is what is animated
      wrap = $('<div class="cycle-carousel-wrap"></div>')
        .prependTo(opts.container)
        .css({ margin: 0, padding: 0, top: 0, left: 0, position: "absolute" })
        .append(opts.slides);

      opts._carouselWrap = wrap;

      if (!vert) wrap.css("white-space", "nowrap");

      if (opts.allowWrap !== false) {
        // prepend and append extra slides so we don't see any empty space when we
        // near the end of the carousel.  for fluid containers, add even more clones
        // so there is plenty to fill the screen
        // @todo: optimzie this based on slide sizes

        for (j = 0; j < (opts.carouselVisible === undefined ? 2 : 1); j++) {
          for (i = 0; i < opts.slideCount; i++) {
            wrap.append(opts.slides[i].cloneNode(true));
          }
          i = opts.slideCount;
          while (i--) {
            // #160, #209
            wrap.prepend(opts.slides[i].cloneNode(true));
          }
        }

        wrap.find(".cycle-slide-active").removeClass("cycle-slide-active");
        opts.slides.eq(opts.startingSlide).addClass("cycle-slide-active");
      }

      if (opts.pager && opts.allowWrap === false) {
        // hide "extra" pagers
        pagerCutoffIndex = opts.slideCount - visCount;
        $(opts.pager)
          .children()
          .filter(":gt(" + pagerCutoffIndex + ")")
          .hide();
      }

      opts._nextBoundry = opts.slideCount - opts.carouselVisible;

      this.prepareDimensions(opts);
    },

    prepareDimensions: function(opts) {
      var dim, offset, pagerCutoffIndex, tmp, j;
      var vert = opts.carouselVertical;
      var visCount = opts.carouselVisible || opts.slides.length;

      if (opts.carouselFluid && opts.carouselVisible) {
        if (!opts._carouselResizeThrottle) {
          // fluid container AND fluid slides; slides need to be resized to fit container
          this.fluidSlides(opts);
        }
      } else if (opts.carouselVisible && opts.carouselSlideDimension) {
        dim = visCount * opts.carouselSlideDimension;
        opts.container[vert ? "height" : "width"](dim);
      } else if (opts.carouselVisible) {
        dim =
          visCount *
          $(opts.slides[0])[vert ? "outerHeight" : "outerWidth"](true);
        opts.container[vert ? "height" : "width"](dim);
      }
      // else {
      //     // fluid; don't size the container
      // }

      offset = opts.carouselOffset || 0;
      if (opts.allowWrap !== false) {
        if (opts.carouselSlideDimension) {
          offset -=
            (opts.slideCount + opts.currSlide) * opts.carouselSlideDimension;
        } else {
          // calculate offset based on actual slide dimensions
          tmp = opts._carouselWrap.children();
          for (j = 0; j < opts.slideCount + opts.currSlide; j++) {
            offset -= $(tmp[j])[vert ? "outerHeight" : "outerWidth"](true);
          }
        }
      }

      opts._carouselWrap.css(vert ? "top" : "left", offset);
    },

    fluidSlides: function(opts) {
      var timeout;
      var slide = opts.slides.eq(0);
      var adjustment = slide.outerWidth() - slide.width();
      var prepareDimensions = this.prepareDimensions;

      // throttle resize event
      $(window).on("resize", resizeThrottle);

      opts._carouselResizeThrottle = resizeThrottle;
      onResize();

      function resizeThrottle() {
        clearTimeout(timeout);
        timeout = setTimeout(onResize, 20);
      }

      function onResize() {
        opts._carouselWrap.stop(false, true);
        var slideWidth = opts.container.width() / opts.carouselVisible;
        slideWidth = Math.ceil(slideWidth - adjustment);
        opts._carouselWrap.children().width(slideWidth);
        if (opts._sentinel) opts._sentinel.width(slideWidth);
        prepareDimensions(opts);
      }
    },

    // transition API impl
    transition: function(opts, curr, next, fwd, callback) {
      var moveBy,
        props = {};
      var hops = opts.nextSlide - opts.currSlide;
      var vert = opts.carouselVertical;
      var speed = opts.speed;

      // handle all the edge cases for wrapping & non-wrapping
      if (opts.allowWrap === false) {
        fwd = hops > 0;
        var currSlide = opts._currSlide;
        var maxCurr = opts.slideCount - opts.carouselVisible;
        if (hops > 0 && opts.nextSlide > maxCurr && currSlide == maxCurr) {
          hops = 0;
        } else if (hops > 0 && opts.nextSlide > maxCurr) {
          hops = opts.nextSlide - currSlide - (opts.nextSlide - maxCurr);
        } else if (
          hops < 0 &&
          opts.currSlide > maxCurr &&
          opts.nextSlide > maxCurr
        ) {
          hops = 0;
        } else if (hops < 0 && opts.currSlide > maxCurr) {
          hops += opts.currSlide - maxCurr;
        } else currSlide = opts.currSlide;

        moveBy = this.getScroll(opts, vert, currSlide, hops);
        opts.API.opts()._currSlide =
          opts.nextSlide > maxCurr ? maxCurr : opts.nextSlide;
      } else {
        if (fwd && opts.nextSlide === 0) {
          // moving from last slide to first
          moveBy = this.getDim(opts, opts.currSlide, vert);
          callback = this.genCallback(opts, fwd, vert, callback);
        } else if (!fwd && opts.nextSlide == opts.slideCount - 1) {
          // moving from first slide to last
          moveBy = this.getDim(opts, opts.currSlide, vert);
          callback = this.genCallback(opts, fwd, vert, callback);
        } else {
          moveBy = this.getScroll(opts, vert, opts.currSlide, hops);
        }
      }

      props[vert ? "top" : "left"] = fwd ? "-=" + moveBy : "+=" + moveBy;

      // throttleSpeed means to scroll slides at a constant rate, rather than
      // a constant speed
      if (opts.throttleSpeed)
        speed =
          (moveBy / $(opts.slides[0])[vert ? "height" : "width"]()) *
          opts.speed;

      opts._carouselWrap.animate(props, speed, opts.easing, callback);
    },

    getDim: function(opts, index, vert) {
      var slide = $(opts.slides[index]);
      return slide[vert ? "outerHeight" : "outerWidth"](true);
    },

    getScroll: function(opts, vert, currSlide, hops) {
      var i,
        moveBy = 0;

      if (hops > 0) {
        for (i = currSlide; i < currSlide + hops; i++)
          moveBy += this.getDim(opts, i, vert);
      } else {
        for (i = currSlide; i > currSlide + hops; i--)
          moveBy += this.getDim(opts, i, vert);
      }
      return moveBy;
    },

    genCallback: function(opts, fwd, vert, callback) {
      // returns callback fn that resets the left/top wrap position to the "real" slides
      return function() {
        var pos = $(opts.slides[opts.nextSlide]).position();
        var offset =
          0 - pos[vert ? "top" : "left"] + (opts.carouselOffset || 0);
        opts._carouselWrap.css(opts.carouselVertical ? "top" : "left", offset);
        callback();
      };
    },

    // core API override
    stopTransition: function() {
      var opts = this.opts();
      opts.slides.stop(false, true);
      opts._carouselWrap.stop(false, true);
    },

    // core API supplement
    onDestroy: function(e) {
      var opts = this.opts();
      if (opts._carouselResizeThrottle)
        $(window).off("resize", opts._carouselResizeThrottle);
      opts.slides.prependTo(opts.container);
      opts._carouselWrap.remove();
    }
  };
})(jQuery);

/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!(function(a) {
  "use strict";
  function b(b, c, d, e) {
    "caption2" === c.captionPlugin &&
      a.each(["caption", "overlay"], function() {
        var a,
          b = this + "Fx",
          f = c[b + "Out"] || "hide",
          g = d[this + "Template"],
          h = c.API.getComponent(this),
          i = c[b + "Sel"],
          j = c.speed;
        c.sync && (j /= 2),
          (a = i ? h.find(i) : h),
          h.length && g
            ? ("hide" == f && (j = 0),
              a[f](j, function() {
                var k = c.API.tmpl(g, d, c, e);
                h.html(k),
                  (a = i ? h.find(i) : h),
                  i && a.hide(),
                  (f = c[b + "In"] || "show"),
                  a[f](j);
              }))
            : h.hide();
      });
  }
  function c(b, c, d, e) {
    "caption2" === c.captionPlugin &&
      a.each(["caption", "overlay"], function() {
        var a = d[this + "Template"],
          b = c.API.getComponent(this);
        b.length && a && b.html(c.API.tmpl(a, d, c, e));
      });
  }
  a.extend(a.fn.cycle.defaults, {
    captionFxOut: "fadeOut",
    captionFxIn: "fadeIn",
    captionFxSel: void 0,
    overlayFxOut: "fadeOut",
    overlayFxIn: "fadeIn",
    overlayFxSel: void 0
  }),
    a(document).on("cycle-bootstrap", function(a, d) {
      d.container.on("cycle-update-view-before", b),
        d.container.one("cycle-update-view-after", c);
    });
})(jQuery);

/*!
Waypoints Sticky Element Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function() {
  "use strict";
  function t(s) {
    (this.options = e.extend({}, i.defaults, t.defaults, s)),
      (this.element = this.options.element),
      (this.$element = e(this.element)),
      this.createWrapper(),
      this.createWaypoint();
  }
  var e = window.jQuery,
    i = window.Waypoint;
  (t.prototype.createWaypoint = function() {
    var t = this.options.handler;
    this.waypoint = new i(
      e.extend({}, this.options, {
        element: this.wrapper,
        handler: e.proxy(function(e) {
          var i = this.options.direction.indexOf(e) > -1,
            s = i ? this.$element.outerHeight(!0) : "";
          this.$wrapper.height(s),
            this.$element.toggleClass(this.options.stuckClass, i),
            t && t.call(this, e);
        }, this)
      })
    );
  }),
    (t.prototype.createWrapper = function() {
      this.options.wrapper && this.$element.wrap(this.options.wrapper),
        (this.$wrapper = this.$element.parent()),
        (this.wrapper = this.$wrapper[0]);
    }),
    (t.prototype.destroy = function() {
      this.$element.parent()[0] === this.wrapper &&
        (this.waypoint.destroy(),
        this.$element.removeClass(this.options.stuckClass),
        this.options.wrapper && this.$element.unwrap());
    }),
    (t.defaults = {
      wrapper: '<div class="sticky-wrapper" />',
      stuckClass: "stuck",
      direction: "down right"
    }),
    (i.Sticky = t);
})();


/*!
 * bootstrap-lightbox.js v0.6.1
 * Copyright 2013 Jason Butz
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!(function(e) {
  "use strict";
  var t = function(t, n) {
    (this.options = n),
      (this.$element = e(t).delegate(
        '[data-dismiss="lightbox"]',
        "click.dismiss.lightbox",
        e.proxy(this.hide, this)
      )),
      this.options.remote &&
        this.$element.find(".lightbox-body").load(this.options.remote);
  };
  (t.prototype = e.extend({}, e.fn.modal.Constructor.prototype)),
    (t.prototype.constructor = t),
    (t.prototype.enforceFocus = function() {
      var t = this;
      e(document).on("focusin.lightbox", function(e) {
        t.$element[0] !== e.target &&
          !t.$element.has(e.target).length &&
          t.$element.focus();
      });
    }),
    (t.prototype.show = function() {
      var t = this,
        n = e.Event("show");
      this.$element.trigger(n);
      if (this.isShown || n.isDefaultPrevented()) return;
      (this.isShown = !0),
        this.escape(),
        this.preloadSize(function() {
          t.backdrop(function() {
            var n = e.support.transition && t.$element.hasClass("fade");
            t.$element.parent().length || t.$element.appendTo(document.body),
              t.$element.show(),
              n && t.$element[0].offsetWidth,
              t.$element.addClass("in").attr("aria-hidden", !1),
              t.enforceFocus(),
              n
                ? t.$element.one(e.support.transition.end, function() {
                    t.$element.focus().trigger("shown");
                  })
                : t.$element.focus().trigger("shown");
          });
        });
    }),
    (t.prototype.hide = function(t) {
      t && t.preventDefault();
      var n = this;
      (t = e.Event("hide")), this.$element.trigger(t);
      if (!this.isShown || t.isDefaultPrevented()) return;
      (this.isShown = !1),
        this.escape(),
        e(document).off("focusin.lightbox"),
        this.$element.removeClass("in").attr("aria-hidden", !0),
        e.support.transition && this.$element.hasClass("fade")
          ? this.hideWithTransition()
          : this.hideModal();
    }),
    (t.prototype.escape = function() {
      var e = this;
      this.isShown && this.options.keyboard
        ? this.$element.on("keyup.dismiss.lightbox", function(t) {
            t.which == 27 && e.hide();
          })
        : this.isShown || this.$element.off("keyup.dismiss.lightbox");
    }),
    (t.prototype.preloadSize = function(t) {
      var n = e.Callbacks();
      t && n.add(t);
      var r = this,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p;
      (i = e(window).height()),
        (s = e(window).width()),
        (o = parseInt(
          r.$element.find(".lightbox-content").css("padding-top"),
          10
        )),
        (u = parseInt(
          r.$element.find(".lightbox-content").css("padding-bottom"),
          10
        )),
        (a = parseInt(
          r.$element.find(".lightbox-content").css("padding-left"),
          10
        )),
        (f = parseInt(
          r.$element.find(".lightbox-content").css("padding-right"),
          10
        )),
        (l = r.$element.find(".lightbox-content").find("img:first")),
        (c = new Image()),
        (c.onload = function() {
          c.width + a + f >= s &&
            ((h = c.width),
            (p = c.height),
            (c.width = s - a - f),
            (c.height = (p / h) * c.width)),
            c.height + o + u >= i &&
              ((h = c.width),
              (p = c.height),
              (c.height = i - o - u),
              (c.width = (h / p) * c.height)),
            r.$element.css({
              position: "fixed",
              width: c.width + a + f,
              height: c.height + o + u,
              top: i / 2 - (c.height + o + u) / 2,
              left: "50%",
              "margin-left": (-1 * (c.width + a + f)) / 2
            }),
            r.$element
              .find(".lightbox-content")
              .css({ width: c.width, height: c.height }),
            n.fire();
        }),
        (c.src = l.attr("src"));
    });
  var n = e.fn.lightbox;
  (e.fn.lightbox = function(n) {
    return this.each(function() {
      var r = e(this),
        i = r.data("lightbox"),
        s = e.extend(
          {},
          e.fn.lightbox.defaults,
          r.data(),
          typeof n == "object" && n
        );
      i || r.data("lightbox", (i = new t(this, s))),
        typeof n == "string" ? i[n]() : s.show && i.show();
    });
  }),
    (e.fn.lightbox.defaults = { backdrop: !0, keyboard: !0, show: !0 }),
    (e.fn.lightbox.Constructor = t),
    (e.fn.lightbox.noConflict = function() {
      return (e.fn.lightbox = n), this;
    }),
    e(document).on(
      "click.lightbox.data-api",
      '[data-toggle*="lightbox"]',
      function(t) {
        var n = e(this),
          r = n.attr("href"),
          i = e(
            n.attr("data-target") || (r && r.replace(/.*(?=#[^\s]+$)/, ""))
          ),
          s = i.data("lightbox")
            ? "toggle"
            : e.extend({ remote: !/#/.test(r) && r }, i.data(), n.data());
        t.preventDefault(),
          i.lightbox(s).one("hide", function() {
            n.focus();
          });
      }
    );
})(window.jQuery);
