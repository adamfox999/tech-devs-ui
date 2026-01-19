import { jsxs as P, jsx as l, Fragment as $e } from "react/jsx-runtime";
import * as i from "react";
import De, { forwardRef as yr, createElement as Jt, useState as Za, useLayoutEffect as Qa } from "react";
import * as dn from "react-dom";
import Ja from "react-dom";
function br(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = br(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Cr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = br(e)) && (r && (r += " "), r += t);
  return r;
}
function $(...e) {
  return Cr(e);
}
const Un = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Kn = Cr, Ye = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Kn(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, c = Object.keys(o).map((u) => {
    const f = n == null ? void 0 : n[u], p = a == null ? void 0 : a[u];
    if (f === null) return null;
    const m = Un(f) || Un(p);
    return o[u][m];
  }), s = n && Object.entries(n).reduce((u, f) => {
    let [p, m] = f;
    return m === void 0 || (u[p] = m), u;
  }, {}), d = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, f) => {
    let { class: p, className: m, ...h } = f;
    return Object.entries(h).every((w) => {
      let [v, g] = w;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...s
      }[v]) : {
        ...a,
        ...s
      }[v] === g;
    }) ? [
      ...u,
      p,
      m
    ] : u;
  }, []);
  return Kn(e, c, d, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, ei = Ye(
  "ui-button",
  {
    variants: {
      variant: {
        filled: "ui-button--filled",
        tonal: "ui-button--tonal",
        outlined: "ui-button--outlined",
        elevated: "ui-button--elevated",
        text: "ui-button--text"
      },
      size: {
        xs: "ui-button--xs",
        sm: "ui-button--sm",
        md: "ui-button--md",
        lg: "ui-button--lg",
        xl: "ui-button--xl"
      },
      shape: {
        round: "ui-button--round",
        square: "ui-button--square"
      },
      fullWidth: {
        true: "ui-button--full-width",
        false: ""
      }
    },
    defaultVariants: {
      variant: "filled",
      size: "sm",
      shape: "round",
      fullWidth: !1
    }
  }
), ti = i.forwardRef(
  ({
    className: e,
    variant: t,
    size: n,
    shape: r,
    fullWidth: o,
    icon: a,
    iconEnd: c,
    loading: s = !1,
    disabled: d,
    children: u,
    ...f
  }, p) => {
    const m = !u && (a || c);
    return /* @__PURE__ */ P(
      "button",
      {
        ref: p,
        className: $(
          ei({ variant: t, size: n, shape: r, fullWidth: o }),
          m && "ui-button--icon-only",
          s && "ui-button--loading",
          e
        ),
        disabled: d || s,
        "aria-busy": s,
        ...f,
        children: [
          a && /* @__PURE__ */ l("span", { className: "ui-button__icon", children: a }),
          u,
          c && /* @__PURE__ */ l("span", { className: "ui-button__icon", children: c })
        ]
      }
    );
  }
);
ti.displayName = "Button";
const G = {
  "ui-card": "ui-card",
  "ui-card--aspect-square": "ui-card--aspect-square",
  "ui-card--aspect-4-3": "ui-card--aspect-4-3",
  "ui-card--aspect-3-2": "ui-card--aspect-3-2",
  "ui-card--aspect-16-9": "ui-card--aspect-16-9",
  "ui-card--aspect-21-9": "ui-card--aspect-21-9",
  "ui-card--elevated": "ui-card--elevated",
  "ui-card--filled": "ui-card--filled",
  "ui-card--outlined": "ui-card--outlined",
  "ui-card--hero": "ui-card--hero",
  "ui-card__hero-bg": "ui-card__hero-bg",
  "ui-card__hero-bg-img": "ui-card__hero-bg-img",
  "ui-card--interactive": "ui-card--interactive",
  "ui-card__scrim": "ui-card__scrim",
  "ui-card__scrim--bottom": "ui-card__scrim--bottom",
  "ui-card__scrim--top": "ui-card__scrim--top",
  "ui-card__scrim--full": "ui-card__scrim--full",
  "ui-card__scrim--light": "ui-card__scrim--light",
  "ui-card__scrim--medium": "ui-card__scrim--medium",
  "ui-card__scrim--heavy": "ui-card__scrim--heavy",
  "ui-card__hero-content": "ui-card__hero-content",
  "ui-card__hero-content--bottom-left": "ui-card__hero-content--bottom-left",
  "ui-card__hero-content--bottom-center": "ui-card__hero-content--bottom-center",
  "ui-card__hero-content--center": "ui-card__hero-content--center",
  "ui-card__hero-content--top-left": "ui-card__hero-content--top-left",
  "ui-card__headline": "ui-card__headline",
  "ui-card__subhead": "ui-card__subhead",
  "ui-card__badge": "ui-card__badge",
  "ui-card__media": "ui-card__media",
  "ui-card__media--bg": "ui-card__media--bg",
  "ui-card__content": "ui-card__content",
  "ui-card__header": "ui-card__header",
  "ui-card__actions": "ui-card__actions",
  "ui-card__actions--end": "ui-card__actions--end",
  "ui-card__actions--spread": "ui-card__actions--spread",
  "ui-card__supporting-text": "ui-card__supporting-text"
}, ni = Ye(
  G["ui-card"],
  {
    variants: {
      variant: {
        elevated: G["ui-card--elevated"],
        filled: G["ui-card--filled"],
        outlined: G["ui-card--outlined"],
        hero: G["ui-card--hero"]
      },
      interactive: {
        true: G["ui-card--interactive"],
        false: ""
      },
      aspectRatio: {
        auto: "",
        square: G["ui-card--aspect-square"],
        "4/3": G["ui-card--aspect-4-3"],
        "3/2": G["ui-card--aspect-3-2"],
        "16/9": G["ui-card--aspect-16-9"],
        "21/9": G["ui-card--aspect-21-9"]
      }
    },
    defaultVariants: {
      variant: "outlined",
      interactive: !1,
      aspectRatio: "auto"
    }
  }
), ri = i.forwardRef(
  ({ className: e, variant: t, interactive: n, aspectRatio: r, children: o, ...a }, c) => /* @__PURE__ */ l(
    "div",
    {
      ref: c,
      className: $(ni({ variant: t, interactive: n, aspectRatio: r }), e),
      ...a,
      children: o
    }
  )
);
ri.displayName = "Card";
const oi = i.forwardRef(
  ({ className: e, aspectRatio: t = "16/9", src: n, alt: r, style: o, children: a, ...c }, s) => /* @__PURE__ */ l(
    "div",
    {
      ref: s,
      className: $(G["ui-card__media"], e),
      style: {
        aspectRatio: t,
        ...n && { backgroundImage: `url(${n})` },
        ...o
      },
      role: n ? "img" : void 0,
      "aria-label": n ? r : void 0,
      ...c,
      children: a
    }
  )
);
oi.displayName = "CardMedia";
const ai = i.forwardRef(({ className: e, src: t, alt: n, style: r, ...o }, a) => /* @__PURE__ */ l(
  "div",
  {
    ref: a,
    className: $(G["ui-card__hero-bg"], e),
    style: r,
    ...o,
    children: /* @__PURE__ */ l(
      "img",
      {
        src: t,
        alt: n || "",
        className: G["ui-card__hero-bg-img"],
        loading: "lazy"
      }
    )
  }
));
ai.displayName = "CardHeroBackground";
const ii = i.forwardRef(({ className: e, position: t = "bottom", intensity: n = "medium", ...r }, o) => /* @__PURE__ */ l(
  "div",
  {
    ref: o,
    className: $(
      G["ui-card__scrim"],
      G[`ui-card__scrim--${t}`],
      G[`ui-card__scrim--${n}`],
      e
    ),
    "aria-hidden": "true",
    ...r
  }
));
ii.displayName = "CardScrim";
const si = i.forwardRef(({ className: e, position: t = "bottom-left", ...n }, r) => /* @__PURE__ */ l(
  "div",
  {
    ref: r,
    className: $(
      G["ui-card__hero-content"],
      G[`ui-card__hero-content--${t}`],
      e
    ),
    ...n
  }
));
si.displayName = "CardHeroContent";
const ci = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  "span",
  {
    ref: n,
    className: $(G["ui-card__badge"], e),
    ...t
  }
));
ci.displayName = "CardBadge";
const li = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("div", { ref: n, className: $(G["ui-card__header"], e), ...t }));
li.displayName = "CardHeader";
const ui = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("h3", { ref: n, className: $(G["ui-card__headline"], e), ...t }));
ui.displayName = "CardHeadline";
const di = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("p", { ref: n, className: $(G["ui-card__subhead"], e), ...t }));
di.displayName = "CardSubhead";
const fi = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("div", { ref: n, className: $(G["ui-card__content"], e), ...t }));
fi.displayName = "CardContent";
const pi = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("div", { ref: n, className: $(G["ui-card__actions"], e), ...t }));
pi.displayName = "CardActions";
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mi = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vi = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Gn = (e) => {
  const t = vi(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Nr = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), hi = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var gi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wi = yr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: c,
    ...s
  }, d) => Jt(
    "svg",
    {
      ref: d,
      ...gi,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Nr("lucide", o),
      ...!a && !hi(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...c.map(([u, f]) => Jt(u, f)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = (e, t) => {
  const n = yr(
    ({ className: r, ...o }, a) => Jt(wi, {
      ref: a,
      iconNode: t,
      className: Nr(
        `lucide-${mi(Gn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Gn(e), n;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], bi = xr("check", yi);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ci = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], fn = xr("x", Ci), Ni = "chip", xi = "assist", Ri = "filter", _i = "input", Ei = "suggestion", Si = "elevated", Ti = "selected", Ii = "icon", Pi = "checkIcon", Mi = "label", Ai = "removeButton", Di = "chipGroup", ue = {
  chip: Ni,
  assist: xi,
  filter: Ri,
  input: _i,
  suggestion: Ei,
  elevated: Si,
  selected: Ti,
  icon: Ii,
  checkIcon: Pi,
  label: Mi,
  removeButton: Ai,
  chipGroup: Di
}, Oi = Ye(
  ue.chip,
  {
    variants: {
      variant: {
        assist: ue.assist,
        filter: ue.filter,
        input: ue.input,
        suggestion: ue.suggestion
      },
      elevated: {
        true: ue.elevated,
        false: ""
      },
      selected: {
        true: ue.selected,
        false: ""
      }
    },
    defaultVariants: {
      variant: "assist",
      elevated: !1,
      selected: !1
    }
  }
), $i = i.forwardRef(
  ({
    className: e,
    variant: t,
    elevated: n,
    selected: r,
    icon: o,
    onRemove: a,
    onSelectedChange: c,
    children: s,
    onClick: d,
    ...u
  }, f) => {
    const p = t === "filter" || t === "suggestion", m = t === "input" && a, h = (w) => {
      p && c && c(!r), d == null || d(w);
    };
    return /* @__PURE__ */ P(
      "button",
      {
        ref: f,
        type: "button",
        role: p ? "checkbox" : void 0,
        "aria-checked": p ? !!r : void 0,
        className: $(Oi({ variant: t, elevated: n, selected: r }), e),
        onClick: h,
        ...u,
        children: [
          r && p ? /* @__PURE__ */ l("span", { className: ue.checkIcon, "aria-hidden": "true", children: /* @__PURE__ */ l(bi, {}) }) : o ? /* @__PURE__ */ l("span", { className: ue.icon, "aria-hidden": "true", children: o }) : null,
          /* @__PURE__ */ l("span", { className: ue.label, children: s }),
          m && /* @__PURE__ */ l(
            "span",
            {
              role: "button",
              tabIndex: 0,
              className: ue.removeButton,
              onClick: (w) => {
                w.stopPropagation(), a == null || a();
              },
              onKeyDown: (w) => {
                (w.key === "Enter" || w.key === " ") && (w.preventDefault(), w.stopPropagation(), a == null || a());
              },
              "aria-label": "Remove",
              children: /* @__PURE__ */ l(fn, {})
            }
          )
        ]
      }
    );
  }
);
$i.displayName = "Chip";
const ki = i.forwardRef(
  ({ className: e, children: t, singleSelect: n, ...r }, o) => /* @__PURE__ */ l(
    "div",
    {
      ref: o,
      role: n ? "radiogroup" : "group",
      className: $(ue.chipGroup, e),
      ...r,
      children: t
    }
  )
);
ki.displayName = "ChipGroup";
function A(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function zn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Fe(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = zn(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : zn(e[o], null);
        }
      };
  };
}
function q(...e) {
  return i.useCallback(Fe(...e), e);
}
function Li(e, t) {
  const n = i.createContext(t), r = (a) => {
    const { children: c, ...s } = a, d = i.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ l(n.Provider, { value: d, children: c });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const c = i.useContext(n);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Be(e, t = []) {
  let n = [];
  function r(a, c) {
    const s = i.createContext(c), d = n.length;
    n = [...n, c];
    const u = (p) => {
      var y;
      const { scope: m, children: h, ...w } = p, v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[d]) || s, g = i.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ l(v.Provider, { value: g, children: h });
    };
    u.displayName = a + "Provider";
    function f(p, m) {
      var v;
      const h = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[d]) || s, w = i.useContext(h);
      if (w) return w;
      if (c !== void 0) return c;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [u, f];
  }
  const o = () => {
    const a = n.map((c) => i.createContext(c));
    return function(s) {
      const d = (s == null ? void 0 : s[e]) || a;
      return i.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: d } }),
        [s, d]
      );
    };
  };
  return o.scopeName = e, [r, Fi(o, ...t)];
}
function Fi(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const c = r.reduce((s, { useScope: d, scopeName: u }) => {
        const p = d(a)[`__scope${u}`];
        return { ...s, ...p };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Re = globalThis != null && globalThis.document ? i.useLayoutEffect : () => {
}, Bi = i[" useId ".trim().toString()] || (() => {
}), Vi = 0;
function Ie(e) {
  const [t, n] = i.useState(Bi());
  return Re(() => {
    n((r) => r ?? String(Vi++));
  }, [e]), t ? `radix-${t}` : "";
}
var Wi = i[" useInsertionEffect ".trim().toString()] || Re;
function at({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, c] = Hi({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, d = s ? e : o;
  {
    const f = i.useRef(e !== void 0);
    i.useEffect(() => {
      const p = f.current;
      p !== s && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, r]);
  }
  const u = i.useCallback(
    (f) => {
      var p;
      if (s) {
        const m = Ui(f) ? f(e) : f;
        m !== e && ((p = c.current) == null || p.call(c, m));
      } else
        a(f);
    },
    [s, e, a, c]
  );
  return [d, u];
}
function Hi({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = i.useState(e), o = i.useRef(n), a = i.useRef(t);
  return Wi(() => {
    a.current = t;
  }, [t]), i.useEffect(() => {
    var c;
    o.current !== n && ((c = a.current) == null || c.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Ui(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  const t = /* @__PURE__ */ Gi(e), n = i.forwardRef((r, o) => {
    const { children: a, ...c } = r, s = i.Children.toArray(a), d = s.find(ji);
    if (d) {
      const u = d.props.children, f = s.map((p) => p === d ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ l(t, { ...c, ref: o, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ l(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Gi(e) {
  const t = i.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (i.isValidElement(o)) {
      const c = Xi(o), s = Yi(a, o.props);
      return o.type !== i.Fragment && (s.ref = r ? Fe(r, c) : c), i.cloneElement(o, s);
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var zi = Symbol("radix.slottable");
function ji(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === zi;
}
function Yi(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const d = a(...s);
      return o(...s), d;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Xi(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var qi = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], K = qi.reduce((e, t) => {
  const n = /* @__PURE__ */ Ki(`Primitive.${t}`), r = i.forwardRef((o, a) => {
    const { asChild: c, ...s } = o, d = c ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l(d, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function pn(e, t) {
  e && dn.flushSync(() => e.dispatchEvent(t));
}
function oe(e) {
  const t = i.useRef(e);
  return i.useEffect(() => {
    t.current = e;
  }), i.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Zi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = oe(e);
  i.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Qi = "DismissableLayer", en = "dismissableLayer.update", Ji = "dismissableLayer.pointerDownOutside", es = "dismissableLayer.focusOutside", jn, Rr = i.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Mt = i.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: s,
      ...d
    } = e, u = i.useContext(Rr), [f, p] = i.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = i.useState({}), w = q(t, (x) => p(x)), v = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(g), C = f ? v.indexOf(f) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, N = C >= y, R = ns((x) => {
      const E = x.target, M = [...u.branches].some((D) => D.contains(E));
      !N || M || (o == null || o(x), c == null || c(x), x.defaultPrevented || s == null || s());
    }, m), _ = rs((x) => {
      const E = x.target;
      [...u.branches].some((D) => D.contains(E)) || (a == null || a(x), c == null || c(x), x.defaultPrevented || s == null || s());
    }, m);
    return Zi((x) => {
      C === u.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && s && (x.preventDefault(), s()));
    }, m), i.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (jn = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Yn(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = jn);
        };
    }, [f, m, n, u]), i.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Yn());
    }, [f, u]), i.useEffect(() => {
      const x = () => h({});
      return document.addEventListener(en, x), () => document.removeEventListener(en, x);
    }, []), /* @__PURE__ */ l(
      K.div,
      {
        ...d,
        ref: w,
        style: {
          pointerEvents: b ? N ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: A(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: A(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: A(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
Mt.displayName = Qi;
var ts = "DismissableLayerBranch", _r = i.forwardRef((e, t) => {
  const n = i.useContext(Rr), r = i.useRef(null), o = q(t, r);
  return i.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ l(K.div, { ...e, ref: o });
});
_r.displayName = ts;
function ns(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = oe(e), r = i.useRef(!1), o = i.useRef(() => {
  });
  return i.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let d = function() {
          Er(
            Ji,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = d, t.addEventListener("click", o.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function rs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = oe(e), r = i.useRef(!1);
  return i.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Er(es, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Yn() {
  const e = new CustomEvent(en);
  document.dispatchEvent(e);
}
function Er(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? pn(o, a) : o.dispatchEvent(a);
}
var os = Mt, as = _r, Ht = "focusScope.autoFocusOnMount", Ut = "focusScope.autoFocusOnUnmount", Xn = { bubbles: !1, cancelable: !0 }, is = "FocusScope", mn = i.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...c
  } = e, [s, d] = i.useState(null), u = oe(o), f = oe(a), p = i.useRef(null), m = q(t, (v) => d(v)), h = i.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  i.useEffect(() => {
    if (r) {
      let v = function(b) {
        if (h.paused || !s) return;
        const N = b.target;
        s.contains(N) ? p.current = N : Te(p.current, { select: !0 });
      }, g = function(b) {
        if (h.paused || !s) return;
        const N = b.relatedTarget;
        N !== null && (s.contains(N) || Te(p.current, { select: !0 }));
      }, y = function(b) {
        if (document.activeElement === document.body)
          for (const R of b)
            R.removedNodes.length > 0 && Te(s);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const C = new MutationObserver(y);
      return s && C.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), C.disconnect();
      };
    }
  }, [r, s, h.paused]), i.useEffect(() => {
    if (s) {
      Zn.add(h);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const y = new CustomEvent(Ht, Xn);
        s.addEventListener(Ht, u), s.dispatchEvent(y), y.defaultPrevented || (ss(fs(Sr(s)), { select: !0 }), document.activeElement === v && Te(s));
      }
      return () => {
        s.removeEventListener(Ht, u), setTimeout(() => {
          const y = new CustomEvent(Ut, Xn);
          s.addEventListener(Ut, f), s.dispatchEvent(y), y.defaultPrevented || Te(v ?? document.body, { select: !0 }), s.removeEventListener(Ut, f), Zn.remove(h);
        }, 0);
      };
    }
  }, [s, u, f, h]);
  const w = i.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, y = document.activeElement;
      if (g && y) {
        const C = v.currentTarget, [b, N] = cs(C);
        b && N ? !v.shiftKey && y === N ? (v.preventDefault(), n && Te(b, { select: !0 })) : v.shiftKey && y === b && (v.preventDefault(), n && Te(N, { select: !0 })) : y === C && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ l(K.div, { tabIndex: -1, ...c, ref: m, onKeyDown: w });
});
mn.displayName = is;
function ss(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Te(r, { select: t }), document.activeElement !== n) return;
}
function cs(e) {
  const t = Sr(e), n = qn(t, e), r = qn(t.reverse(), e);
  return [n, r];
}
function Sr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function qn(e, t) {
  for (const n of e)
    if (!ls(n, { upTo: t })) return n;
}
function ls(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function us(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Te(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && us(e) && t && e.select();
  }
}
var Zn = ds();
function ds() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Qn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Qn(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Qn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function fs(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ps = "Portal", At = i.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = i.useState(!1);
  Re(() => a(!0), []);
  const c = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return c ? Ja.createPortal(/* @__PURE__ */ l(K.div, { ...r, ref: t }), c) : null;
});
At.displayName = ps;
function ms(e, t) {
  return i.useReducer((n, r) => t[n][r] ?? n, e);
}
var Se = (e) => {
  const { present: t, children: n } = e, r = vs(t), o = typeof n == "function" ? n({ present: r.isPresent }) : i.Children.only(n), a = q(r.ref, hs(o));
  return typeof n == "function" || r.isPresent ? i.cloneElement(o, { ref: a }) : null;
};
Se.displayName = "Presence";
function vs(e) {
  const [t, n] = i.useState(), r = i.useRef(null), o = i.useRef(e), a = i.useRef("none"), c = e ? "mounted" : "unmounted", [s, d] = ms(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return i.useEffect(() => {
    const u = mt(r.current);
    a.current = s === "mounted" ? u : "none";
  }, [s]), Re(() => {
    const u = r.current, f = o.current;
    if (f !== e) {
      const m = a.current, h = mt(u);
      e ? d("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? d("UNMOUNT") : d(f && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, d]), Re(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, p = (h) => {
        const v = mt(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (d("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (h) => {
        h.target === t && (a.current = mt(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: i.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function mt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function hs(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Kt = 0;
function Tr() {
  i.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Jn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Jn()), Kt++, () => {
      Kt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Kt--;
    };
  }, []);
}
function Jn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var we = function() {
  return we = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, we.apply(this, arguments);
};
function Ir(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function gs(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Ct = "right-scroll-bar-position", Nt = "width-before-scroll-bar", ws = "with-scroll-bars-hidden", ys = "--removed-body-scroll-bar-size";
function Gt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function bs(e, t) {
  var n = Za(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Cs = typeof window < "u" ? i.useLayoutEffect : i.useEffect, er = /* @__PURE__ */ new WeakMap();
function Ns(e, t) {
  var n = bs(null, function(r) {
    return e.forEach(function(o) {
      return Gt(o, r);
    });
  });
  return Cs(function() {
    var r = er.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), c = n.current;
      o.forEach(function(s) {
        a.has(s) || Gt(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Gt(s, c);
      });
    }
    er.set(n, e);
  }, [e]), n;
}
function xs(e) {
  return e;
}
function Rs(e, t) {
  t === void 0 && (t = xs);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var c = t(a, r);
      return n.push(c), function() {
        n = n.filter(function(s) {
          return s !== c;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var c = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), c = n;
      }
      var d = function() {
        var f = c;
        c = [], f.forEach(a);
      }, u = function() {
        return Promise.resolve().then(d);
      };
      u(), n = {
        push: function(f) {
          c.push(f), u();
        },
        filter: function(f) {
          return c = c.filter(f), n;
        }
      };
    }
  };
  return o;
}
function _s(e) {
  e === void 0 && (e = {});
  var t = Rs(null);
  return t.options = we({ async: !0, ssr: !1 }, e), t;
}
var Pr = function(e) {
  var t = e.sideCar, n = Ir(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return i.createElement(r, we({}, n));
};
Pr.isSideCarExport = !0;
function Es(e, t) {
  return e.useMedium(t), Pr;
}
var Mr = _s(), zt = function() {
}, Dt = i.forwardRef(function(e, t) {
  var n = i.useRef(null), r = i.useState({
    onScrollCapture: zt,
    onWheelCapture: zt,
    onTouchMoveCapture: zt
  }), o = r[0], a = r[1], c = e.forwardProps, s = e.children, d = e.className, u = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, h = e.noRelative, w = e.noIsolation, v = e.inert, g = e.allowPinchZoom, y = e.as, C = y === void 0 ? "div" : y, b = e.gapMode, N = Ir(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = m, _ = Ns([n, t]), x = we(we({}, N), o);
  return i.createElement(
    i.Fragment,
    null,
    f && i.createElement(R, { sideCar: Mr, removeScrollBar: u, shards: p, noRelative: h, noIsolation: w, inert: v, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: b }),
    c ? i.cloneElement(i.Children.only(s), we(we({}, x), { ref: _ })) : i.createElement(C, we({}, x, { className: d, ref: _ }), s)
  );
});
Dt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Dt.classNames = {
  fullWidth: Nt,
  zeroRight: Ct
};
var Ss = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ts() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ss();
  return t && e.setAttribute("nonce", t), e;
}
function Is(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ps(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ms = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ts()) && (Is(t, n), Ps(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, As = function() {
  var e = Ms();
  return function(t, n) {
    i.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ar = function() {
  var e = As(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Ds = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, jt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Os = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [jt(n), jt(r), jt(o)];
}, $s = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ds;
  var t = Os(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ks = Ar(), Ke = "data-scroll-locked", Ls = function(e, t, n, r) {
  var o = e.left, a = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ws, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Ke, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ct, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Nt, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ct, " .").concat(Ct, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Nt, " .").concat(Nt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ke, `] {
    `).concat(ys, ": ").concat(s, `px;
  }
`);
}, tr = function() {
  var e = parseInt(document.body.getAttribute(Ke) || "0", 10);
  return isFinite(e) ? e : 0;
}, Fs = function() {
  i.useEffect(function() {
    return document.body.setAttribute(Ke, (tr() + 1).toString()), function() {
      var e = tr() - 1;
      e <= 0 ? document.body.removeAttribute(Ke) : document.body.setAttribute(Ke, e.toString());
    };
  }, []);
}, Bs = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Fs();
  var a = i.useMemo(function() {
    return $s(o);
  }, [o]);
  return i.createElement(ks, { styles: Ls(a, !t, o, n ? "" : "!important") });
}, tn = !1;
if (typeof window < "u")
  try {
    var vt = Object.defineProperty({}, "passive", {
      get: function() {
        return tn = !0, !0;
      }
    });
    window.addEventListener("test", vt, vt), window.removeEventListener("test", vt, vt);
  } catch {
    tn = !1;
  }
var We = tn ? { passive: !1 } : !1, Vs = function(e) {
  return e.tagName === "TEXTAREA";
}, Dr = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Vs(e) && n[t] === "visible")
  );
}, Ws = function(e) {
  return Dr(e, "overflowY");
}, Hs = function(e) {
  return Dr(e, "overflowX");
}, nr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Or(e, r);
    if (o) {
      var a = $r(e, r), c = a[1], s = a[2];
      if (c > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Us = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ks = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Or = function(e, t) {
  return e === "v" ? Ws(t) : Hs(t);
}, $r = function(e, t) {
  return e === "v" ? Us(t) : Ks(t);
}, Gs = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, zs = function(e, t, n, r, o) {
  var a = Gs(e, window.getComputedStyle(t).direction), c = a * r, s = n.target, d = t.contains(s), u = !1, f = c > 0, p = 0, m = 0;
  do {
    if (!s)
      break;
    var h = $r(e, s), w = h[0], v = h[1], g = h[2], y = v - g - a * w;
    (w || y) && Or(e, s) && (p += y, m += w);
    var C = s.parentNode;
    s = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !d && s !== document.body || // self content
    d && (t.contains(s) || t === s)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(m) < 1) && (u = !0), u;
}, ht = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, rr = function(e) {
  return [e.deltaX, e.deltaY];
}, or = function(e) {
  return e && "current" in e ? e.current : e;
}, js = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ys = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Xs = 0, He = [];
function qs(e) {
  var t = i.useRef([]), n = i.useRef([0, 0]), r = i.useRef(), o = i.useState(Xs++)[0], a = i.useState(Ar)[0], c = i.useRef(e);
  i.useEffect(function() {
    c.current = e;
  }, [e]), i.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = gs([e.lockRef.current], (e.shards || []).map(or), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = i.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !c.current.allowPinchZoom;
    var y = ht(v), C = n.current, b = "deltaX" in v ? v.deltaX : C[0] - y[0], N = "deltaY" in v ? v.deltaY : C[1] - y[1], R, _ = v.target, x = Math.abs(b) > Math.abs(N) ? "h" : "v";
    if ("touches" in v && x === "h" && _.type === "range")
      return !1;
    var E = window.getSelection(), M = E && E.anchorNode, D = M ? M === _ || M.contains(_) : !1;
    if (D)
      return !1;
    var O = nr(x, _);
    if (!O)
      return !0;
    if (O ? R = x : (R = x === "v" ? "h" : "v", O = nr(x, _)), !O)
      return !1;
    if (!r.current && "changedTouches" in v && (b || N) && (r.current = R), !R)
      return !0;
    var F = r.current || R;
    return zs(F, g, v, F === "h" ? b : N);
  }, []), d = i.useCallback(function(v) {
    var g = v;
    if (!(!He.length || He[He.length - 1] !== a)) {
      var y = "deltaY" in g ? rr(g) : ht(g), C = t.current.filter(function(R) {
        return R.name === g.type && (R.target === g.target || g.target === R.shadowParent) && js(R.delta, y);
      })[0];
      if (C && C.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!C) {
        var b = (c.current.shards || []).map(or).filter(Boolean).filter(function(R) {
          return R.contains(g.target);
        }), N = b.length > 0 ? s(g, b[0]) : !c.current.noIsolation;
        N && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = i.useCallback(function(v, g, y, C) {
    var b = { name: v, delta: g, target: y, should: C, shadowParent: Zs(y) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== b;
      });
    }, 1);
  }, []), f = i.useCallback(function(v) {
    n.current = ht(v), r.current = void 0;
  }, []), p = i.useCallback(function(v) {
    u(v.type, rr(v), v.target, s(v, e.lockRef.current));
  }, []), m = i.useCallback(function(v) {
    u(v.type, ht(v), v.target, s(v, e.lockRef.current));
  }, []);
  i.useEffect(function() {
    return He.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", d, We), document.addEventListener("touchmove", d, We), document.addEventListener("touchstart", f, We), function() {
      He = He.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", d, We), document.removeEventListener("touchmove", d, We), document.removeEventListener("touchstart", f, We);
    };
  }, []);
  var h = e.removeScrollBar, w = e.inert;
  return i.createElement(
    i.Fragment,
    null,
    w ? i.createElement(a, { styles: Ys(o) }) : null,
    h ? i.createElement(Bs, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Zs(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Qs = Es(Mr, qs);
var vn = i.forwardRef(function(e, t) {
  return i.createElement(Dt, we({}, e, { ref: t, sideCar: Qs }));
});
vn.classNames = Dt.classNames;
var Js = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ue = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), wt = {}, Yt = 0, kr = function(e) {
  return e && (e.host || kr(e.parentNode));
}, ec = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = kr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, tc = function(e, t, n, r) {
  var o = ec(t, Array.isArray(e) ? e : [e]);
  wt[n] || (wt[n] = /* @__PURE__ */ new WeakMap());
  var a = wt[n], c = [], s = /* @__PURE__ */ new Set(), d = new Set(o), u = function(p) {
    !p || s.has(p) || (s.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var f = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        f(m);
      else
        try {
          var h = m.getAttribute(r), w = h !== null && h !== "false", v = (Ue.get(m) || 0) + 1, g = (a.get(m) || 0) + 1;
          Ue.set(m, v), a.set(m, g), c.push(m), v === 1 && w && gt.set(m, !0), g === 1 && m.setAttribute(n, "true"), w || m.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return f(t), s.clear(), Yt++, function() {
    c.forEach(function(p) {
      var m = Ue.get(p) - 1, h = a.get(p) - 1;
      Ue.set(p, m), a.set(p, h), m || (gt.has(p) || p.removeAttribute(r), gt.delete(p)), h || p.removeAttribute(n);
    }), Yt--, Yt || (Ue = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), wt = {});
  };
}, Lr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Js(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), tc(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
// @__NO_SIDE_EFFECTS__
function nc(e) {
  const t = /* @__PURE__ */ rc(e), n = i.forwardRef((r, o) => {
    const { children: a, ...c } = r, s = i.Children.toArray(a), d = s.find(ac);
    if (d) {
      const u = d.props.children, f = s.map((p) => p === d ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ l(t, { ...c, ref: o, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ l(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function rc(e) {
  const t = i.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (i.isValidElement(o)) {
      const c = sc(o), s = ic(a, o.props);
      return o.type !== i.Fragment && (s.ref = r ? Fe(r, c) : c), i.cloneElement(o, s);
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var oc = Symbol("radix.slottable");
function ac(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === oc;
}
function ic(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const d = a(...s);
      return o(...s), d;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function sc(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ot = "Dialog", [Fr] = Be(Ot), [cc, he] = Fr(Ot), Br = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: c = !0
  } = e, s = i.useRef(null), d = i.useRef(null), [u, f] = at({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ot
  });
  return /* @__PURE__ */ l(
    cc,
    {
      scope: t,
      triggerRef: s,
      contentRef: d,
      contentId: Ie(),
      titleId: Ie(),
      descriptionId: Ie(),
      open: u,
      onOpenChange: f,
      onOpenToggle: i.useCallback(() => f((p) => !p), [f]),
      modal: c,
      children: n
    }
  );
};
Br.displayName = Ot;
var Vr = "DialogTrigger", Wr = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = he(Vr, n), a = q(t, o.triggerRef);
    return /* @__PURE__ */ l(
      K.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": wn(o.open),
        ...r,
        ref: a,
        onClick: A(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Wr.displayName = Vr;
var hn = "DialogPortal", [lc, Hr] = Fr(hn, {
  forceMount: void 0
}), Ur = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = he(hn, t);
  return /* @__PURE__ */ l(lc, { scope: t, forceMount: n, children: i.Children.map(r, (c) => /* @__PURE__ */ l(Se, { present: n || a.open, children: /* @__PURE__ */ l(At, { asChild: !0, container: o, children: c }) })) });
};
Ur.displayName = hn;
var Rt = "DialogOverlay", Kr = i.forwardRef(
  (e, t) => {
    const n = Hr(Rt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = he(Rt, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ l(Se, { present: r || a.open, children: /* @__PURE__ */ l(dc, { ...o, ref: t }) }) : null;
  }
);
Kr.displayName = Rt;
var uc = /* @__PURE__ */ nc("DialogOverlay.RemoveScroll"), dc = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = he(Rt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l(vn, { as: uc, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l(
        K.div,
        {
          "data-state": wn(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), ke = "DialogContent", Gr = i.forwardRef(
  (e, t) => {
    const n = Hr(ke, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = he(ke, e.__scopeDialog);
    return /* @__PURE__ */ l(Se, { present: r || a.open, children: a.modal ? /* @__PURE__ */ l(fc, { ...o, ref: t }) : /* @__PURE__ */ l(pc, { ...o, ref: t }) });
  }
);
Gr.displayName = ke;
var fc = i.forwardRef(
  (e, t) => {
    const n = he(ke, e.__scopeDialog), r = i.useRef(null), o = q(t, n.contentRef, r);
    return i.useEffect(() => {
      const a = r.current;
      if (a) return Lr(a);
    }, []), /* @__PURE__ */ l(
      zr,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: A(e.onCloseAutoFocus, (a) => {
          var c;
          a.preventDefault(), (c = n.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: A(e.onPointerDownOutside, (a) => {
          const c = a.detail.originalEvent, s = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: A(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), pc = i.forwardRef(
  (e, t) => {
    const n = he(ke, e.__scopeDialog), r = i.useRef(!1), o = i.useRef(!1);
    return /* @__PURE__ */ l(
      zr,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var c, s;
          (c = e.onCloseAutoFocus) == null || c.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var d, u;
          (d = e.onInteractOutside) == null || d.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const c = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), zr = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...c } = e, s = he(ke, n), d = i.useRef(null), u = q(t, d);
    return Tr(), /* @__PURE__ */ P($e, { children: [
      /* @__PURE__ */ l(
        mn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ l(
            Mt,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": wn(s.open),
              ...c,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ P($e, { children: [
        /* @__PURE__ */ l(mc, { titleId: s.titleId }),
        /* @__PURE__ */ l(hc, { contentRef: d, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), gn = "DialogTitle", jr = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = he(gn, n);
    return /* @__PURE__ */ l(K.h2, { id: o.titleId, ...r, ref: t });
  }
);
jr.displayName = gn;
var Yr = "DialogDescription", Xr = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = he(Yr, n);
    return /* @__PURE__ */ l(K.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Xr.displayName = Yr;
var qr = "DialogClose", Zr = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = he(qr, n);
    return /* @__PURE__ */ l(
      K.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: A(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Zr.displayName = qr;
function wn(e) {
  return e ? "open" : "closed";
}
var Qr = "DialogTitleWarning", [qv, Jr] = Li(Qr, {
  contentName: ke,
  titleName: gn,
  docsSlug: "dialog"
}), mc = ({ titleId: e }) => {
  const t = Jr(Qr), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return i.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, vc = "DialogDescriptionWarning", hc = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Jr(vc).contentName}}.`;
  return i.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, gc = Br, wc = Wr, yc = Ur, eo = Kr, to = Gr, no = jr, ro = Xr, oo = Zr;
const xe = {
  "ui-dialog__overlay": "ui-dialog__overlay",
  "ui-dialog__content": "ui-dialog__content",
  "ui-dialog--fullscreen": "ui-dialog--fullscreen",
  "ui-dialog__header": "ui-dialog__header",
  "ui-dialog__description": "ui-dialog__description",
  "ui-dialog__close-button": "ui-dialog__close-button",
  "ui-dialog__icon": "ui-dialog__icon",
  "ui-dialog__title": "ui-dialog__title",
  "ui-dialog__actions": "ui-dialog__actions"
}, Zv = gc, Qv = wc, bc = yc, Jv = oo, ao = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  eo,
  {
    ref: n,
    className: $(xe["ui-dialog__overlay"], e),
    ...t
  }
));
ao.displayName = eo.displayName;
const Cc = i.forwardRef(({ className: e, children: t, fullscreen: n, ...r }, o) => /* @__PURE__ */ P(bc, { children: [
  /* @__PURE__ */ l(ao, {}),
  /* @__PURE__ */ P(
    to,
    {
      ref: o,
      className: $(
        xe["ui-dialog__content"],
        n && xe["ui-dialog--fullscreen"],
        e
      ),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ P(oo, { className: xe["ui-dialog__close-button"], children: [
          /* @__PURE__ */ l(fn, {}),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Cc.displayName = to.displayName;
const Nc = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l("div", { className: $(xe["ui-dialog__header"], e), ...t });
Nc.displayName = "DialogHeader";
const xc = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ l("div", { className: $(xe["ui-dialog__icon"], e), ...n, children: t });
xc.displayName = "DialogIcon";
const Rc = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  no,
  {
    ref: n,
    className: $(xe["ui-dialog__title"], e),
    ...t
  }
));
Rc.displayName = no.displayName;
const _c = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  ro,
  {
    ref: n,
    className: $(xe["ui-dialog__description"], e),
    ...t
  }
));
_c.displayName = ro.displayName;
const Ec = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l("div", { className: $(xe["ui-dialog__actions"], e), ...t });
Ec.displayName = "DialogActions";
const Sc = "divider", Tc = "horizontal", Ic = "vertical", Pc = "dividerWithText", Mc = "dividerLine", Ac = "dividerText", Oe = {
  divider: Sc,
  horizontal: Tc,
  vertical: Ic,
  dividerWithText: Pc,
  dividerLine: Mc,
  dividerText: Ac
}, Dc = i.forwardRef(
  ({
    orientation: e = "horizontal",
    variant: t = "default",
    inset: n = "none",
    insetStart: r,
    insetEnd: o,
    spacing: a,
    className: c,
    style: s,
    ...d
  }, u) => {
    const f = e === "vertical" ? Oe.vertical : Oe.horizontal, p = {
      ...s,
      ...r && { "--inset-start": typeof r == "number" ? `${r}px` : r },
      ...o && { "--inset-end": typeof o == "number" ? `${o}px` : o }
    };
    return /* @__PURE__ */ l(
      "div",
      {
        ref: u,
        role: "separator",
        "aria-orientation": e,
        "data-variant": t,
        "data-inset": n,
        "data-inset-start": r ? !0 : void 0,
        "data-inset-end": o ? !0 : void 0,
        "data-spacing": a,
        className: `${Oe.divider} ${f} ${c || ""}`,
        style: p,
        ...d
      }
    );
  }
);
Dc.displayName = "Divider";
const Oc = i.forwardRef(
  ({
    children: e,
    textAlign: t = "center",
    spacing: n = "md",
    className: r,
    ...o
  }, a) => /* @__PURE__ */ P(
    "div",
    {
      ref: a,
      role: "separator",
      "data-text-align": t,
      "data-spacing": n,
      className: `${Oe.dividerWithText} ${r || ""}`,
      ...o,
      children: [
        /* @__PURE__ */ l("div", { className: Oe.dividerLine }),
        /* @__PURE__ */ l("span", { className: Oe.dividerText, children: e }),
        /* @__PURE__ */ l("div", { className: Oe.dividerLine })
      ]
    }
  )
);
Oc.displayName = "DividerWithText";
const $c = "fab", kc = "small", Lc = "standard", Fc = "large", Bc = "primary", Vc = "secondary", Wc = "tertiary", Hc = "surface", Uc = "lowered", Kc = "extended", Gc = "icon", zc = "label", le = {
  fab: $c,
  small: kc,
  standard: Lc,
  large: Fc,
  primary: Bc,
  secondary: Vc,
  tertiary: Wc,
  surface: Hc,
  lowered: Uc,
  extended: Kc,
  icon: Gc,
  label: zc
}, jc = Ye(
  le.fab,
  {
    variants: {
      size: {
        small: le.small,
        standard: le.standard,
        large: le.large
      },
      color: {
        primary: le.primary,
        secondary: le.secondary,
        tertiary: le.tertiary,
        surface: le.surface
      },
      lowered: {
        true: le.lowered,
        false: ""
      }
    },
    defaultVariants: {
      size: "standard",
      color: "primary",
      lowered: !1
    }
  }
), Yc = i.forwardRef(
  ({ className: e, size: t, color: n, lowered: r, icon: o, label: a, ...c }, s) => {
    const d = !!a;
    return /* @__PURE__ */ P(
      "button",
      {
        ref: s,
        type: "button",
        className: $(
          jc({ size: t, color: n, lowered: r }),
          d && le.extended,
          e
        ),
        ...c,
        children: [
          /* @__PURE__ */ l("span", { className: le.icon, "aria-hidden": "true", children: o }),
          d && /* @__PURE__ */ l("span", { className: le.label, children: a })
        ]
      }
    );
  }
);
Yc.displayName = "FAB";
const Xc = "iconButton", qc = "sm", Zc = "md", Qc = "lg", Jc = "standard", el = "selected", tl = "filled", nl = "tonal", rl = "outlined", ol = "icon", ge = {
  iconButton: Xc,
  sm: qc,
  md: Zc,
  lg: Qc,
  standard: Jc,
  selected: el,
  filled: tl,
  tonal: nl,
  outlined: rl,
  icon: ol
}, al = Ye(
  ge.iconButton,
  {
    variants: {
      variant: {
        standard: ge.standard,
        filled: ge.filled,
        tonal: ge.tonal,
        outlined: ge.outlined
      },
      size: {
        sm: ge.sm,
        md: ge.md,
        lg: ge.lg
      },
      selected: {
        true: ge.selected,
        false: ""
      }
    },
    defaultVariants: {
      variant: "standard",
      size: "md",
      selected: !1
    }
  }
), il = i.forwardRef(
  ({
    className: e,
    variant: t,
    size: n,
    selected: r,
    icon: o,
    selectedIcon: a,
    toggle: c = !1,
    onToggle: s,
    onClick: d,
    "aria-label": u,
    ...f
  }, p) => {
    const m = (h) => {
      c && s && s(!r), d == null || d(h);
    };
    return /* @__PURE__ */ l(
      "button",
      {
        ref: p,
        type: "button",
        className: $(al({ variant: t, size: n, selected: r }), e),
        "aria-label": u,
        "aria-pressed": c ? !!r : void 0,
        onClick: m,
        ...f,
        children: /* @__PURE__ */ l("span", { className: ge.icon, "aria-hidden": "true", children: r && a ? a : o })
      }
    );
  }
);
il.displayName = "IconButton";
const sl = "list", cl = "listItem", ll = "leading", ul = "leadingIcon", dl = "leadingAvatar", fl = "leadingAvatarText", pl = "leadingAvatarImage", ml = "leadingImage", vl = "leadingVideo", hl = "content", gl = "headline", wl = "supportingText", yl = "trailing", bl = "trailingIcon", Cl = "trailingText", Nl = "subheader", te = {
  list: sl,
  listItem: cl,
  leading: ll,
  leadingIcon: ul,
  leadingAvatar: dl,
  leadingAvatarText: fl,
  leadingAvatarImage: pl,
  leadingImage: ml,
  leadingVideo: vl,
  content: hl,
  headline: gl,
  supportingText: wl,
  trailing: yl,
  trailingIcon: bl,
  trailingText: Cl,
  subheader: Nl
}, xl = i.forwardRef(
  ({
    variant: e = "standard",
    dividers: t = "none",
    dense: n = !1,
    role: r = "list",
    children: o,
    className: a,
    ...c
  }, s) => /* @__PURE__ */ l(
    "ul",
    {
      ref: s,
      role: r,
      "data-variant": e,
      "data-dividers": t,
      "data-dense": n,
      className: `${te.list} ${a || ""}`,
      ...c,
      children: o
    }
  )
);
xl.displayName = "List";
const Rl = i.forwardRef(
  ({
    headline: e,
    supportingText: t,
    lines: n,
    leading: r,
    trailing: o,
    interactive: a = !1,
    selected: c = !1,
    disabled: s = !1,
    onClick: d,
    onKeyDown: u,
    className: f,
    ...p
  }, m) => {
    const h = n || (t ? 2 : 1), w = (v) => {
      a && !s && (v.key === "Enter" || v.key === " ") && (v.preventDefault(), d == null || d(v)), u == null || u(v);
    };
    return /* @__PURE__ */ P(
      "li",
      {
        ref: m,
        role: a ? "option" : "listitem",
        tabIndex: a && !s ? 0 : void 0,
        "aria-selected": a ? c : void 0,
        "aria-disabled": s,
        "data-lines": h,
        "data-interactive": a,
        "data-selected": c,
        "data-disabled": s,
        className: `${te.listItem} ${f || ""}`,
        onClick: a && !s ? d : void 0,
        onKeyDown: a ? w : u,
        ...p,
        children: [
          r && /* @__PURE__ */ l("div", { className: te.leading, children: r }),
          /* @__PURE__ */ P("div", { className: te.content, children: [
            /* @__PURE__ */ l("p", { className: te.headline, children: e }),
            t && /* @__PURE__ */ l("p", { className: te.supportingText, children: t })
          ] }),
          o && /* @__PURE__ */ l("div", { className: te.trailing, children: o })
        ]
      }
    );
  }
);
Rl.displayName = "ListItem";
const _l = i.forwardRef(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ l(
    "li",
    {
      ref: r,
      role: "presentation",
      className: `${te.subheader} ${t || ""}`,
      ...n,
      children: e
    }
  )
);
_l.displayName = "ListSubheader";
const El = i.forwardRef(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ l("span", { ref: r, className: `${te.leadingIcon} ${t || ""}`, ...n, children: e })
);
El.displayName = "ListItemIcon";
const Sl = i.forwardRef(
  ({ src: e, alt: t, children: n, className: r, ...o }, a) => /* @__PURE__ */ l("div", { ref: a, className: `${te.leadingAvatar} ${r || ""}`, ...o, children: e ? /* @__PURE__ */ l("img", { src: e, alt: t || "", className: te.leadingAvatarImage }) : /* @__PURE__ */ l("span", { className: te.leadingAvatarText, children: n }) })
);
Sl.displayName = "ListItemAvatar";
const Tl = i.forwardRef(
  ({ video: e = !1, src: t, alt: n, className: r, ...o }, a) => /* @__PURE__ */ l(
    "div",
    {
      ref: a,
      className: `${e ? te.leadingVideo : te.leadingImage} ${r || ""}`,
      children: /* @__PURE__ */ l("img", { src: t, alt: n || "", ...o })
    }
  )
);
Tl.displayName = "ListItemImage";
const Il = i.forwardRef(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ l("span", { ref: r, className: `${te.trailingText} ${t || ""}`, ...n, children: e })
);
Il.displayName = "ListItemTrailingText";
const Pl = i.forwardRef(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ l("span", { ref: r, className: `${te.trailingIcon} ${t || ""}`, ...n, children: e })
);
Pl.displayName = "ListItemTrailingIcon";
// @__NO_SIDE_EFFECTS__
function ar(e) {
  const t = /* @__PURE__ */ Ml(e), n = i.forwardRef((r, o) => {
    const { children: a, ...c } = r, s = i.Children.toArray(a), d = s.find(Dl);
    if (d) {
      const u = d.props.children, f = s.map((p) => p === d ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ l(t, { ...c, ref: o, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ l(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ml(e) {
  const t = i.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (i.isValidElement(o)) {
      const c = $l(o), s = Ol(a, o.props);
      return o.type !== i.Fragment && (s.ref = r ? Fe(r, c) : c), i.cloneElement(o, s);
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Al = Symbol("radix.slottable");
function Dl(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Al;
}
function Ol(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const d = a(...s);
      return o(...s), d;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function $l(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function yn(e) {
  const t = e + "CollectionProvider", [n, r] = Be(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), c = (v) => {
    const { scope: g, children: y } = v, C = De.useRef(null), b = De.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l(o, { scope: g, itemMap: b, collectionRef: C, children: y });
  };
  c.displayName = t;
  const s = e + "CollectionSlot", d = /* @__PURE__ */ ar(s), u = De.forwardRef(
    (v, g) => {
      const { scope: y, children: C } = v, b = a(s, y), N = q(g, b.collectionRef);
      return /* @__PURE__ */ l(d, { ref: N, children: C });
    }
  );
  u.displayName = s;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ ar(f), h = De.forwardRef(
    (v, g) => {
      const { scope: y, children: C, ...b } = v, N = De.useRef(null), R = q(g, N), _ = a(f, y);
      return De.useEffect(() => (_.itemMap.set(N, { ref: N, ...b }), () => void _.itemMap.delete(N))), /* @__PURE__ */ l(m, { [p]: "", ref: R, children: C });
    }
  );
  h.displayName = f;
  function w(v) {
    const g = a(e + "CollectionConsumer", v);
    return De.useCallback(() => {
      const C = g.collectionRef.current;
      if (!C) return [];
      const b = Array.from(C.querySelectorAll(`[${p}]`));
      return Array.from(g.itemMap.values()).sort(
        (_, x) => b.indexOf(_.ref.current) - b.indexOf(x.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: c, Slot: u, ItemSlot: h },
    w,
    r
  ];
}
var kl = i.createContext(void 0);
function io(e) {
  const t = i.useContext(kl);
  return e || t || "ltr";
}
const Ll = ["top", "right", "bottom", "left"], Pe = Math.min, ie = Math.max, _t = Math.round, yt = Math.floor, be = (e) => ({
  x: e,
  y: e
}), Fl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Bl = {
  start: "end",
  end: "start"
};
function nn(e, t, n) {
  return ie(e, Pe(t, n));
}
function _e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ee(e) {
  return e.split("-")[0];
}
function Xe(e) {
  return e.split("-")[1];
}
function bn(e) {
  return e === "x" ? "y" : "x";
}
function Cn(e) {
  return e === "y" ? "height" : "width";
}
const Vl = /* @__PURE__ */ new Set(["top", "bottom"]);
function ye(e) {
  return Vl.has(Ee(e)) ? "y" : "x";
}
function Nn(e) {
  return bn(ye(e));
}
function Wl(e, t, n) {
  n === void 0 && (n = !1);
  const r = Xe(e), o = Nn(e), a = Cn(o);
  let c = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (c = Et(c)), [c, Et(c)];
}
function Hl(e) {
  const t = Et(e);
  return [rn(e), t, rn(t)];
}
function rn(e) {
  return e.replace(/start|end/g, (t) => Bl[t]);
}
const ir = ["left", "right"], sr = ["right", "left"], Ul = ["top", "bottom"], Kl = ["bottom", "top"];
function Gl(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? sr : ir : t ? ir : sr;
    case "left":
    case "right":
      return t ? Ul : Kl;
    default:
      return [];
  }
}
function zl(e, t, n, r) {
  const o = Xe(e);
  let a = Gl(Ee(e), n === "start", r);
  return o && (a = a.map((c) => c + "-" + o), t && (a = a.concat(a.map(rn)))), a;
}
function Et(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Fl[t]);
}
function jl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function so(e) {
  return typeof e != "number" ? jl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function St(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function cr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ye(t), c = Nn(t), s = Cn(c), d = Ee(t), u = a === "y", f = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let h;
  switch (d) {
    case "top":
      h = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Xe(t)) {
    case "start":
      h[c] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      h[c] += m * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const Yl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: c
  } = n, s = a.filter(Boolean), d = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let u = await c.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: p
  } = cr(u, r, d), m = r, h = {}, w = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: g,
      fn: y
    } = s[v], {
      x: C,
      y: b,
      data: N,
      reset: R
    } = await y({
      x: f,
      y: p,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = C ?? f, p = b ?? p, h = {
      ...h,
      [g]: {
        ...h[g],
        ...N
      }
    }, R && w <= 50 && (w++, typeof R == "object" && (R.placement && (m = R.placement), R.rects && (u = R.rects === !0 ? await c.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: f,
      y: p
    } = cr(u, m, d)), v = -1);
  }
  return {
    x: f,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: h
  };
};
async function tt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: c,
    elements: s,
    strategy: d
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = _e(t, e), w = so(h), g = s[m ? p === "floating" ? "reference" : "floating" : p], y = St(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: d
  })), C = p === "floating" ? {
    x: r,
    y: o,
    width: c.floating.width,
    height: c.floating.height
  } : c.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), N = await (a.isElement == null ? void 0 : a.isElement(b)) ? await (a.getScale == null ? void 0 : a.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = St(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: b,
    strategy: d
  }) : C);
  return {
    top: (y.top - R.top + w.top) / N.y,
    bottom: (R.bottom - y.bottom + w.bottom) / N.y,
    left: (y.left - R.left + w.left) / N.x,
    right: (R.right - y.right + w.right) / N.x
  };
}
const Xl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: c,
      elements: s,
      middlewareData: d
    } = t, {
      element: u,
      padding: f = 0
    } = _e(e, t) || {};
    if (u == null)
      return {};
    const p = so(f), m = {
      x: n,
      y: r
    }, h = Nn(o), w = Cn(h), v = await c.getDimensions(u), g = h === "y", y = g ? "top" : "left", C = g ? "bottom" : "right", b = g ? "clientHeight" : "clientWidth", N = a.reference[w] + a.reference[h] - m[h] - a.floating[w], R = m[h] - a.reference[h], _ = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(u));
    let x = _ ? _[b] : 0;
    (!x || !await (c.isElement == null ? void 0 : c.isElement(_))) && (x = s.floating[b] || a.floating[w]);
    const E = N / 2 - R / 2, M = x / 2 - v[w] / 2 - 1, D = Pe(p[y], M), O = Pe(p[C], M), F = D, L = x - v[w] - O, I = x / 2 - v[w] / 2 + E, B = nn(F, I, L), k = !d.arrow && Xe(o) != null && I !== B && a.reference[w] / 2 - (I < F ? D : O) - v[w] / 2 < 0, W = k ? I < F ? I - F : I - L : 0;
    return {
      [h]: m[h] + W,
      data: {
        [h]: B,
        centerOffset: I - B - W,
        ...k && {
          alignmentOffset: W
        }
      },
      reset: k
    };
  }
}), ql = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: c,
        initialPlacement: s,
        platform: d,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: v = !0,
        ...g
      } = _e(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = Ee(o), C = ye(s), b = Ee(s) === s, N = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), R = m || (b || !v ? [Et(s)] : Hl(s)), _ = w !== "none";
      !m && _ && R.push(...zl(s, v, w, N));
      const x = [s, ...R], E = await tt(t, g), M = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && M.push(E[y]), p) {
        const I = Wl(o, c, N);
        M.push(E[I[0]], E[I[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: M
      }], !M.every((I) => I <= 0)) {
        var O, F;
        const I = (((O = a.flip) == null ? void 0 : O.index) || 0) + 1, B = x[I];
        if (B && (!(p === "alignment" ? C !== ye(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((T) => ye(T.placement) === C ? T.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: D
            },
            reset: {
              placement: B
            }
          };
        let k = (F = D.filter((W) => W.overflows[0] <= 0).sort((W, T) => W.overflows[1] - T.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!k)
          switch (h) {
            case "bestFit": {
              var L;
              const W = (L = D.filter((T) => {
                if (_) {
                  const S = ye(T.placement);
                  return S === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  S === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((S) => S > 0).reduce((S, V) => S + V, 0)]).sort((T, S) => T[1] - S[1])[0]) == null ? void 0 : L[0];
              W && (k = W);
              break;
            }
            case "initialPlacement":
              k = s;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
function lr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ur(e) {
  return Ll.some((t) => e[t] >= 0);
}
const Zl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = _e(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await tt(t, {
            ...o,
            elementContext: "reference"
          }), c = lr(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: ur(c)
            }
          };
        }
        case "escaped": {
          const a = await tt(t, {
            ...o,
            altBoundary: !0
          }), c = lr(a, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: ur(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, co = /* @__PURE__ */ new Set(["left", "top"]);
async function Ql(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), c = Ee(n), s = Xe(n), d = ye(n) === "y", u = co.has(c) ? -1 : 1, f = a && d ? -1 : 1, p = _e(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: w
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof w == "number" && (h = s === "end" ? w * -1 : w), d ? {
    x: h * f,
    y: m * u
  } : {
    x: m * u,
    y: h * f
  };
}
const Jl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: c,
        middlewareData: s
      } = t, d = await Ql(t, e);
      return c === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + d.x,
        y: a + d.y,
        data: {
          ...d,
          placement: c
        }
      };
    }
  };
}, eu = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: c = !1,
        limiter: s = {
          fn: (g) => {
            let {
              x: y,
              y: C
            } = g;
            return {
              x: y,
              y: C
            };
          }
        },
        ...d
      } = _e(e, t), u = {
        x: n,
        y: r
      }, f = await tt(t, d), p = ye(Ee(o)), m = bn(p);
      let h = u[m], w = u[p];
      if (a) {
        const g = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", C = h + f[g], b = h - f[y];
        h = nn(C, h, b);
      }
      if (c) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", C = w + f[g], b = w - f[y];
        w = nn(C, w, b);
      }
      const v = s.fn({
        ...t,
        [m]: h,
        [p]: w
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [m]: a,
            [p]: c
          }
        }
      };
    }
  };
}, tu = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: c
      } = t, {
        offset: s = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = _e(e, t), f = {
        x: n,
        y: r
      }, p = ye(o), m = bn(p);
      let h = f[m], w = f[p];
      const v = _e(s, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (d) {
        const b = m === "y" ? "height" : "width", N = a.reference[m] - a.floating[b] + g.mainAxis, R = a.reference[m] + a.reference[b] - g.mainAxis;
        h < N ? h = N : h > R && (h = R);
      }
      if (u) {
        var y, C;
        const b = m === "y" ? "width" : "height", N = co.has(Ee(o)), R = a.reference[p] - a.floating[b] + (N && ((y = c.offset) == null ? void 0 : y[p]) || 0) + (N ? 0 : g.crossAxis), _ = a.reference[p] + a.reference[b] + (N ? 0 : ((C = c.offset) == null ? void 0 : C[p]) || 0) - (N ? g.crossAxis : 0);
        w < R ? w = R : w > _ && (w = _);
      }
      return {
        [m]: h,
        [p]: w
      };
    }
  };
}, nu = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: c,
        elements: s
      } = t, {
        apply: d = () => {
        },
        ...u
      } = _e(e, t), f = await tt(t, u), p = Ee(o), m = Xe(o), h = ye(o) === "y", {
        width: w,
        height: v
      } = a.floating;
      let g, y;
      p === "top" || p === "bottom" ? (g = p, y = m === (await (c.isRTL == null ? void 0 : c.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = p, g = m === "end" ? "top" : "bottom");
      const C = v - f.top - f.bottom, b = w - f.left - f.right, N = Pe(v - f[g], C), R = Pe(w - f[y], b), _ = !t.middlewareData.shift;
      let x = N, E = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = b), (r = t.middlewareData.shift) != null && r.enabled.y && (x = C), _ && !m) {
        const D = ie(f.left, 0), O = ie(f.right, 0), F = ie(f.top, 0), L = ie(f.bottom, 0);
        h ? E = w - 2 * (D !== 0 || O !== 0 ? D + O : ie(f.left, f.right)) : x = v - 2 * (F !== 0 || L !== 0 ? F + L : ie(f.top, f.bottom));
      }
      await d({
        ...t,
        availableWidth: E,
        availableHeight: x
      });
      const M = await c.getDimensions(s.floating);
      return w !== M.width || v !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function $t() {
  return typeof window < "u";
}
function qe(e) {
  return lo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ne(e) {
  var t;
  return (t = (lo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function lo(e) {
  return $t() ? e instanceof Node || e instanceof se(e).Node : !1;
}
function me(e) {
  return $t() ? e instanceof Element || e instanceof se(e).Element : !1;
}
function Ce(e) {
  return $t() ? e instanceof HTMLElement || e instanceof se(e).HTMLElement : !1;
}
function dr(e) {
  return !$t() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
const ru = /* @__PURE__ */ new Set(["inline", "contents"]);
function it(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ve(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ru.has(o);
}
const ou = /* @__PURE__ */ new Set(["table", "td", "th"]);
function au(e) {
  return ou.has(qe(e));
}
const iu = [":popover-open", ":modal"];
function kt(e) {
  return iu.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const su = ["transform", "translate", "scale", "rotate", "perspective"], cu = ["transform", "translate", "scale", "rotate", "perspective", "filter"], lu = ["paint", "layout", "strict", "content"];
function xn(e) {
  const t = Rn(), n = me(e) ? ve(e) : e;
  return su.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || cu.some((r) => (n.willChange || "").includes(r)) || lu.some((r) => (n.contain || "").includes(r));
}
function uu(e) {
  let t = Me(e);
  for (; Ce(t) && !ze(t); ) {
    if (xn(t))
      return t;
    if (kt(t))
      return null;
    t = Me(t);
  }
  return null;
}
function Rn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const du = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ze(e) {
  return du.has(qe(e));
}
function ve(e) {
  return se(e).getComputedStyle(e);
}
function Lt(e) {
  return me(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Me(e) {
  if (qe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    dr(e) && e.host || // Fallback.
    Ne(e)
  );
  return dr(t) ? t.host : t;
}
function uo(e) {
  const t = Me(e);
  return ze(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ce(t) && it(t) ? t : uo(t);
}
function nt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = uo(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), c = se(o);
  if (a) {
    const s = on(c);
    return t.concat(c, c.visualViewport || [], it(o) ? o : [], s && n ? nt(s) : []);
  }
  return t.concat(o, nt(o, [], n));
}
function on(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function fo(e) {
  const t = ve(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ce(e), a = o ? e.offsetWidth : n, c = o ? e.offsetHeight : r, s = _t(n) !== a || _t(r) !== c;
  return s && (n = a, r = c), {
    width: n,
    height: r,
    $: s
  };
}
function _n(e) {
  return me(e) ? e : e.contextElement;
}
function Ge(e) {
  const t = _n(e);
  if (!Ce(t))
    return be(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = fo(t);
  let c = (a ? _t(n.width) : n.width) / r, s = (a ? _t(n.height) : n.height) / o;
  return (!c || !Number.isFinite(c)) && (c = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: c,
    y: s
  };
}
const fu = /* @__PURE__ */ be(0);
function po(e) {
  const t = se(e);
  return !Rn() || !t.visualViewport ? fu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== se(e) ? !1 : t;
}
function Le(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = _n(e);
  let c = be(1);
  t && (r ? me(r) && (c = Ge(r)) : c = Ge(e));
  const s = pu(a, n, r) ? po(a) : be(0);
  let d = (o.left + s.x) / c.x, u = (o.top + s.y) / c.y, f = o.width / c.x, p = o.height / c.y;
  if (a) {
    const m = se(a), h = r && me(r) ? se(r) : r;
    let w = m, v = on(w);
    for (; v && r && h !== w; ) {
      const g = Ge(v), y = v.getBoundingClientRect(), C = ve(v), b = y.left + (v.clientLeft + parseFloat(C.paddingLeft)) * g.x, N = y.top + (v.clientTop + parseFloat(C.paddingTop)) * g.y;
      d *= g.x, u *= g.y, f *= g.x, p *= g.y, d += b, u += N, w = se(v), v = on(w);
    }
  }
  return St({
    width: f,
    height: p,
    x: d,
    y: u
  });
}
function Ft(e, t) {
  const n = Lt(e).scrollLeft;
  return t ? t.left + n : Le(Ne(e)).left + n;
}
function mo(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Ft(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function mu(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", c = Ne(r), s = t ? kt(t.floating) : !1;
  if (r === c || s && a)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = be(1);
  const f = be(0), p = Ce(r);
  if ((p || !p && !a) && ((qe(r) !== "body" || it(c)) && (d = Lt(r)), Ce(r))) {
    const h = Le(r);
    u = Ge(r), f.x = h.x + r.clientLeft, f.y = h.y + r.clientTop;
  }
  const m = c && !p && !a ? mo(c, d) : be(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - d.scrollLeft * u.x + f.x + m.x,
    y: n.y * u.y - d.scrollTop * u.y + f.y + m.y
  };
}
function vu(e) {
  return Array.from(e.getClientRects());
}
function hu(e) {
  const t = Ne(e), n = Lt(e), r = e.ownerDocument.body, o = ie(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = ie(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + Ft(e);
  const s = -n.scrollTop;
  return ve(r).direction === "rtl" && (c += ie(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: c,
    y: s
  };
}
const fr = 25;
function gu(e, t) {
  const n = se(e), r = Ne(e), o = n.visualViewport;
  let a = r.clientWidth, c = r.clientHeight, s = 0, d = 0;
  if (o) {
    a = o.width, c = o.height;
    const f = Rn();
    (!f || f && t === "fixed") && (s = o.offsetLeft, d = o.offsetTop);
  }
  const u = Ft(r);
  if (u <= 0) {
    const f = r.ownerDocument, p = f.body, m = getComputedStyle(p), h = f.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, w = Math.abs(r.clientWidth - p.clientWidth - h);
    w <= fr && (a -= w);
  } else u <= fr && (a += u);
  return {
    width: a,
    height: c,
    x: s,
    y: d
  };
}
const wu = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function yu(e, t) {
  const n = Le(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Ce(e) ? Ge(e) : be(1), c = e.clientWidth * a.x, s = e.clientHeight * a.y, d = o * a.x, u = r * a.y;
  return {
    width: c,
    height: s,
    x: d,
    y: u
  };
}
function pr(e, t, n) {
  let r;
  if (t === "viewport")
    r = gu(e, n);
  else if (t === "document")
    r = hu(Ne(e));
  else if (me(t))
    r = yu(t, n);
  else {
    const o = po(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return St(r);
}
function vo(e, t) {
  const n = Me(e);
  return n === t || !me(n) || ze(n) ? !1 : ve(n).position === "fixed" || vo(n, t);
}
function bu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = nt(e, [], !1).filter((s) => me(s) && qe(s) !== "body"), o = null;
  const a = ve(e).position === "fixed";
  let c = a ? Me(e) : e;
  for (; me(c) && !ze(c); ) {
    const s = ve(c), d = xn(c);
    !d && s.position === "fixed" && (o = null), (a ? !d && !o : !d && s.position === "static" && !!o && wu.has(o.position) || it(c) && !d && vo(e, c)) ? r = r.filter((f) => f !== c) : o = s, c = Me(c);
  }
  return t.set(e, r), r;
}
function Cu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const c = [...n === "clippingAncestors" ? kt(t) ? [] : bu(t, this._c) : [].concat(n), r], s = c[0], d = c.reduce((u, f) => {
    const p = pr(t, f, o);
    return u.top = ie(p.top, u.top), u.right = Pe(p.right, u.right), u.bottom = Pe(p.bottom, u.bottom), u.left = ie(p.left, u.left), u;
  }, pr(t, s, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Nu(e) {
  const {
    width: t,
    height: n
  } = fo(e);
  return {
    width: t,
    height: n
  };
}
function xu(e, t, n) {
  const r = Ce(t), o = Ne(t), a = n === "fixed", c = Le(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = be(0);
  function u() {
    d.x = Ft(o);
  }
  if (r || !r && !a)
    if ((qe(t) !== "body" || it(o)) && (s = Lt(t)), r) {
      const h = Le(t, !0, a, t);
      d.x = h.x + t.clientLeft, d.y = h.y + t.clientTop;
    } else o && u();
  a && !r && o && u();
  const f = o && !r && !a ? mo(o, s) : be(0), p = c.left + s.scrollLeft - d.x - f.x, m = c.top + s.scrollTop - d.y - f.y;
  return {
    x: p,
    y: m,
    width: c.width,
    height: c.height
  };
}
function Xt(e) {
  return ve(e).position === "static";
}
function mr(e, t) {
  if (!Ce(e) || ve(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ne(e) === n && (n = n.ownerDocument.body), n;
}
function ho(e, t) {
  const n = se(e);
  if (kt(e))
    return n;
  if (!Ce(e)) {
    let o = Me(e);
    for (; o && !ze(o); ) {
      if (me(o) && !Xt(o))
        return o;
      o = Me(o);
    }
    return n;
  }
  let r = mr(e, t);
  for (; r && au(r) && Xt(r); )
    r = mr(r, t);
  return r && ze(r) && Xt(r) && !xn(r) ? n : r || uu(e) || n;
}
const Ru = async function(e) {
  const t = this.getOffsetParent || ho, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: xu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function _u(e) {
  return ve(e).direction === "rtl";
}
const Eu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mu,
  getDocumentElement: Ne,
  getClippingRect: Cu,
  getOffsetParent: ho,
  getElementRects: Ru,
  getClientRects: vu,
  getDimensions: Nu,
  getScale: Ge,
  isElement: me,
  isRTL: _u
};
function go(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Su(e, t) {
  let n = null, r;
  const o = Ne(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function c(s, d) {
    s === void 0 && (s = !1), d === void 0 && (d = 1), a();
    const u = e.getBoundingClientRect(), {
      left: f,
      top: p,
      width: m,
      height: h
    } = u;
    if (s || t(), !m || !h)
      return;
    const w = yt(p), v = yt(o.clientWidth - (f + m)), g = yt(o.clientHeight - (p + h)), y = yt(f), b = {
      rootMargin: -w + "px " + -v + "px " + -g + "px " + -y + "px",
      threshold: ie(0, Pe(1, d)) || 1
    };
    let N = !0;
    function R(_) {
      const x = _[0].intersectionRatio;
      if (x !== d) {
        if (!N)
          return c();
        x ? c(!1, x) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      x === 1 && !go(u, e.getBoundingClientRect()) && c(), N = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, b);
    }
    n.observe(e);
  }
  return c(!0), a;
}
function Tu(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = r, u = _n(e), f = o || a ? [...u ? nt(u) : [], ...nt(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const p = u && s ? Su(u, n) : null;
  let m = -1, h = null;
  c && (h = new ResizeObserver((y) => {
    let [C] = y;
    C && C.target === u && h && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var b;
      (b = h) == null || b.observe(t);
    })), n();
  }), u && !d && h.observe(u), h.observe(t));
  let w, v = d ? Le(e) : null;
  d && g();
  function g() {
    const y = Le(e);
    v && !go(v, y) && n(), v = y, w = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    f.forEach((C) => {
      o && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), p == null || p(), (y = h) == null || y.disconnect(), h = null, d && cancelAnimationFrame(w);
  };
}
const Iu = Jl, Pu = eu, Mu = ql, Au = nu, Du = Zl, vr = Xl, Ou = tu, $u = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Eu,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Yl(e, t, {
    ...o,
    platform: a
  });
};
var ku = typeof document < "u", Lu = function() {
}, xt = ku ? Qa : Lu;
function Tt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Tt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Tt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function wo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hr(e, t) {
  const n = wo(e);
  return Math.round(t * n) / n;
}
function qt(e) {
  const t = i.useRef(e);
  return xt(() => {
    t.current = e;
  }), t;
}
function Fu(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: c
    } = {},
    transform: s = !0,
    whileElementsMounted: d,
    open: u
  } = e, [f, p] = i.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, h] = i.useState(r);
  Tt(m, r) || h(r);
  const [w, v] = i.useState(null), [g, y] = i.useState(null), C = i.useCallback((T) => {
    T !== _.current && (_.current = T, v(T));
  }, []), b = i.useCallback((T) => {
    T !== x.current && (x.current = T, y(T));
  }, []), N = a || w, R = c || g, _ = i.useRef(null), x = i.useRef(null), E = i.useRef(f), M = d != null, D = qt(d), O = qt(o), F = qt(u), L = i.useCallback(() => {
    if (!_.current || !x.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: m
    };
    O.current && (T.platform = O.current), $u(_.current, x.current, T).then((S) => {
      const V = {
        ...S,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: F.current !== !1
      };
      I.current && !Tt(E.current, V) && (E.current = V, dn.flushSync(() => {
        p(V);
      }));
    });
  }, [m, t, n, O, F]);
  xt(() => {
    u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [u]);
  const I = i.useRef(!1);
  xt(() => (I.current = !0, () => {
    I.current = !1;
  }), []), xt(() => {
    if (N && (_.current = N), R && (x.current = R), N && R) {
      if (D.current)
        return D.current(N, R, L);
      L();
    }
  }, [N, R, L, D, M]);
  const B = i.useMemo(() => ({
    reference: _,
    floating: x,
    setReference: C,
    setFloating: b
  }), [C, b]), k = i.useMemo(() => ({
    reference: N,
    floating: R
  }), [N, R]), W = i.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!k.floating)
      return T;
    const S = hr(k.floating, f.x), V = hr(k.floating, f.y);
    return s ? {
      ...T,
      transform: "translate(" + S + "px, " + V + "px)",
      ...wo(k.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: S,
      top: V
    };
  }, [n, s, k.floating, f.x, f.y]);
  return i.useMemo(() => ({
    ...f,
    update: L,
    refs: B,
    elements: k,
    floatingStyles: W
  }), [f, L, B, k, W]);
}
const Bu = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? vr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? vr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Vu = (e, t) => ({
  ...Iu(e),
  options: [e, t]
}), Wu = (e, t) => ({
  ...Pu(e),
  options: [e, t]
}), Hu = (e, t) => ({
  ...Ou(e),
  options: [e, t]
}), Uu = (e, t) => ({
  ...Mu(e),
  options: [e, t]
}), Ku = (e, t) => ({
  ...Au(e),
  options: [e, t]
}), Gu = (e, t) => ({
  ...Du(e),
  options: [e, t]
}), zu = (e, t) => ({
  ...Bu(e),
  options: [e, t]
});
var ju = "Arrow", yo = i.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ l(
    K.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ l("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
yo.displayName = ju;
var Yu = yo;
function Xu(e) {
  const [t, n] = i.useState(void 0);
  return Re(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let c, s;
        if ("borderBoxSize" in a) {
          const d = a.borderBoxSize, u = Array.isArray(d) ? d[0] : d;
          c = u.inlineSize, s = u.blockSize;
        } else
          c = e.offsetWidth, s = e.offsetHeight;
        n({ width: c, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var En = "Popper", [bo, Co] = Be(En), [qu, No] = bo(En), xo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = i.useState(null);
  return /* @__PURE__ */ l(qu, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
xo.displayName = En;
var Ro = "PopperAnchor", _o = i.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = No(Ro, n), c = i.useRef(null), s = q(t, c), d = i.useRef(null);
    return i.useEffect(() => {
      const u = d.current;
      d.current = (r == null ? void 0 : r.current) || c.current, u !== d.current && a.onAnchorChange(d.current);
    }), r ? null : /* @__PURE__ */ l(K.div, { ...o, ref: s });
  }
);
_o.displayName = Ro;
var Sn = "PopperContent", [Zu, Qu] = bo(Sn), Eo = i.forwardRef(
  (e, t) => {
    var ae, Ze, ce, Qe, Vn, Wn;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: c = 0,
      arrowPadding: s = 0,
      avoidCollisions: d = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: w,
      ...v
    } = e, g = No(Sn, n), [y, C] = i.useState(null), b = q(t, (Je) => C(Je)), [N, R] = i.useState(null), _ = Xu(N), x = (_ == null ? void 0 : _.width) ?? 0, E = (_ == null ? void 0 : _.height) ?? 0, M = r + (a !== "center" ? "-" + a : ""), D = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, O = Array.isArray(u) ? u : [u], F = O.length > 0, L = {
      padding: D,
      boundary: O.filter(ed),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: F
    }, { refs: I, floatingStyles: B, placement: k, isPositioned: W, middlewareData: T } = Fu({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...Je) => Tu(...Je, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Vu({ mainAxis: o + E, alignmentAxis: c }),
        d && Wu({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Hu() : void 0,
          ...L
        }),
        d && Uu({ ...L }),
        Ku({
          ...L,
          apply: ({ elements: Je, rects: Hn, availableWidth: ja, availableHeight: Ya }) => {
            const { width: Xa, height: qa } = Hn.reference, pt = Je.floating.style;
            pt.setProperty("--radix-popper-available-width", `${ja}px`), pt.setProperty("--radix-popper-available-height", `${Ya}px`), pt.setProperty("--radix-popper-anchor-width", `${Xa}px`), pt.setProperty("--radix-popper-anchor-height", `${qa}px`);
          }
        }),
        N && zu({ element: N, padding: s }),
        td({ arrowWidth: x, arrowHeight: E }),
        m && Gu({ strategy: "referenceHidden", ...L })
      ]
    }), [S, V] = Io(k), U = oe(w);
    Re(() => {
      W && (U == null || U());
    }, [W, U]);
    const Y = (ae = T.arrow) == null ? void 0 : ae.x, H = (Ze = T.arrow) == null ? void 0 : Ze.y, z = ((ce = T.arrow) == null ? void 0 : ce.centerOffset) !== 0, [X, ee] = i.useState();
    return Re(() => {
      y && ee(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ l(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: W ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: X,
          "--radix-popper-transform-origin": [
            (Qe = T.transformOrigin) == null ? void 0 : Qe.x,
            (Vn = T.transformOrigin) == null ? void 0 : Vn.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Wn = T.hide) == null ? void 0 : Wn.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ l(
          Zu,
          {
            scope: n,
            placedSide: S,
            onArrowChange: R,
            arrowX: Y,
            arrowY: H,
            shouldHideArrow: z,
            children: /* @__PURE__ */ l(
              K.div,
              {
                "data-side": S,
                "data-align": V,
                ...v,
                ref: b,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: W ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Eo.displayName = Sn;
var So = "PopperArrow", Ju = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, To = i.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Qu(So, r), c = Ju[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ l(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [c]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ l(
          Yu,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
To.displayName = So;
function ed(e) {
  return e !== null;
}
var td = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, y, C;
    const { placement: n, rects: r, middlewareData: o } = t, c = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, s = c ? 0 : e.arrowWidth, d = c ? 0 : e.arrowHeight, [u, f] = Io(n), p = { start: "0%", center: "50%", end: "100%" }[f], m = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, h = (((C = o.arrow) == null ? void 0 : C.y) ?? 0) + d / 2;
    let w = "", v = "";
    return u === "bottom" ? (w = c ? p : `${m}px`, v = `${-d}px`) : u === "top" ? (w = c ? p : `${m}px`, v = `${r.floating.height + d}px`) : u === "right" ? (w = `${-d}px`, v = c ? p : `${h}px`) : u === "left" && (w = `${r.floating.width + d}px`, v = c ? p : `${h}px`), { data: { x: w, y: v } };
  }
});
function Io(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Po = xo, nd = _o, rd = Eo, od = To, Zt = "rovingFocusGroup.onEntryFocus", ad = { bubbles: !1, cancelable: !0 }, st = "RovingFocusGroup", [an, Mo, id] = yn(st), [sd, Ao] = Be(
  st,
  [id]
), [cd, ld] = sd(st), Do = i.forwardRef(
  (e, t) => /* @__PURE__ */ l(an.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l(an.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l(ud, { ...e, ref: t }) }) })
);
Do.displayName = st;
var ud = i.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: c,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: d,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, m = i.useRef(null), h = q(t, m), w = io(a), [v, g] = at({
    prop: c,
    defaultProp: s ?? null,
    onChange: d,
    caller: st
  }), [y, C] = i.useState(!1), b = oe(u), N = Mo(n), R = i.useRef(!1), [_, x] = i.useState(0);
  return i.useEffect(() => {
    const E = m.current;
    if (E)
      return E.addEventListener(Zt, b), () => E.removeEventListener(Zt, b);
  }, [b]), /* @__PURE__ */ l(
    cd,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: v,
      onItemFocus: i.useCallback(
        (E) => g(E),
        [g]
      ),
      onItemShiftTab: i.useCallback(() => C(!0), []),
      onFocusableItemAdd: i.useCallback(
        () => x((E) => E + 1),
        []
      ),
      onFocusableItemRemove: i.useCallback(
        () => x((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ l(
        K.div,
        {
          tabIndex: y || _ === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: A(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: A(e.onFocus, (E) => {
            const M = !R.current;
            if (E.target === E.currentTarget && M && !y) {
              const D = new CustomEvent(Zt, ad);
              if (E.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const O = N().filter((k) => k.focusable), F = O.find((k) => k.active), L = O.find((k) => k.id === v), B = [F, L, ...O].filter(
                  Boolean
                ).map((k) => k.ref.current);
                ko(B, f);
              }
            }
            R.current = !1;
          }),
          onBlur: A(e.onBlur, () => C(!1))
        }
      )
    }
  );
}), Oo = "RovingFocusGroupItem", $o = i.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: c,
      ...s
    } = e, d = Ie(), u = a || d, f = ld(Oo, n), p = f.currentTabStopId === u, m = Mo(n), { onFocusableItemAdd: h, onFocusableItemRemove: w, currentTabStopId: v } = f;
    return i.useEffect(() => {
      if (r)
        return h(), () => w();
    }, [r, h, w]), /* @__PURE__ */ l(
      an.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ l(
          K.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...s,
            ref: t,
            onMouseDown: A(e.onMouseDown, (g) => {
              r ? f.onItemFocus(u) : g.preventDefault();
            }),
            onFocus: A(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: A(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = pd(g, f.orientation, f.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let b = m().filter((N) => N.focusable).map((N) => N.ref.current);
                if (y === "last") b.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && b.reverse();
                  const N = b.indexOf(g.currentTarget);
                  b = f.loop ? md(b, N + 1) : b.slice(N + 1);
                }
                setTimeout(() => ko(b));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: p, hasTabStop: v != null }) : c
          }
        )
      }
    );
  }
);
$o.displayName = Oo;
var dd = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function fd(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function pd(e, t, n) {
  const r = fd(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return dd[r];
}
function ko(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function md(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var vd = Do, hd = $o;
// @__NO_SIDE_EFFECTS__
function gd(e) {
  const t = /* @__PURE__ */ wd(e), n = i.forwardRef((r, o) => {
    const { children: a, ...c } = r, s = i.Children.toArray(a), d = s.find(bd);
    if (d) {
      const u = d.props.children, f = s.map((p) => p === d ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ l(t, { ...c, ref: o, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ l(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function wd(e) {
  const t = i.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (i.isValidElement(o)) {
      const c = Nd(o), s = Cd(a, o.props);
      return o.type !== i.Fragment && (s.ref = r ? Fe(r, c) : c), i.cloneElement(o, s);
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var yd = Symbol("radix.slottable");
function bd(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === yd;
}
function Cd(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const d = a(...s);
      return o(...s), d;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Nd(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var sn = ["Enter", " "], xd = ["ArrowDown", "PageUp", "Home"], Lo = ["ArrowUp", "PageDown", "End"], Rd = [...xd, ...Lo], _d = {
  ltr: [...sn, "ArrowRight"],
  rtl: [...sn, "ArrowLeft"]
}, Ed = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ct = "Menu", [rt, Sd, Td] = yn(ct), [Ve, Fo] = Be(ct, [
  Td,
  Co,
  Ao
]), lt = Co(), Bo = Ao(), [Vo, Ae] = Ve(ct), [Id, ut] = Ve(ct), Wo = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: c = !0 } = e, s = lt(t), [d, u] = i.useState(null), f = i.useRef(!1), p = oe(a), m = io(o);
  return i.useEffect(() => {
    const h = () => {
      f.current = !0, document.addEventListener("pointerdown", w, { capture: !0, once: !0 }), document.addEventListener("pointermove", w, { capture: !0, once: !0 });
    }, w = () => f.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", w, { capture: !0 }), document.removeEventListener("pointermove", w, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l(Po, { ...s, children: /* @__PURE__ */ l(
    Vo,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: d,
      onContentChange: u,
      children: /* @__PURE__ */ l(
        Id,
        {
          scope: t,
          onClose: i.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: m,
          modal: c,
          children: r
        }
      )
    }
  ) });
};
Wo.displayName = ct;
var Pd = "MenuAnchor", Tn = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = lt(n);
    return /* @__PURE__ */ l(nd, { ...o, ...r, ref: t });
  }
);
Tn.displayName = Pd;
var In = "MenuPortal", [Md, Ho] = Ve(In, {
  forceMount: void 0
}), Uo = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Ae(In, t);
  return /* @__PURE__ */ l(Md, { scope: t, forceMount: n, children: /* @__PURE__ */ l(Se, { present: n || a.open, children: /* @__PURE__ */ l(At, { asChild: !0, container: o, children: r }) }) });
};
Uo.displayName = In;
var de = "MenuContent", [Ad, Pn] = Ve(de), Ko = i.forwardRef(
  (e, t) => {
    const n = Ho(de, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ae(de, e.__scopeMenu), c = ut(de, e.__scopeMenu);
    return /* @__PURE__ */ l(rt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(Se, { present: r || a.open, children: /* @__PURE__ */ l(rt.Slot, { scope: e.__scopeMenu, children: c.modal ? /* @__PURE__ */ l(Dd, { ...o, ref: t }) : /* @__PURE__ */ l(Od, { ...o, ref: t }) }) }) });
  }
), Dd = i.forwardRef(
  (e, t) => {
    const n = Ae(de, e.__scopeMenu), r = i.useRef(null), o = q(t, r);
    return i.useEffect(() => {
      const a = r.current;
      if (a) return Lr(a);
    }, []), /* @__PURE__ */ l(
      Mn,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: A(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Od = i.forwardRef((e, t) => {
  const n = Ae(de, e.__scopeMenu);
  return /* @__PURE__ */ l(
    Mn,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), $d = /* @__PURE__ */ gd("MenuContent.ScrollLock"), Mn = i.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: c,
      disableOutsidePointerEvents: s,
      onEntryFocus: d,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: m,
      onDismiss: h,
      disableOutsideScroll: w,
      ...v
    } = e, g = Ae(de, n), y = ut(de, n), C = lt(n), b = Bo(n), N = Sd(n), [R, _] = i.useState(null), x = i.useRef(null), E = q(t, x, g.onContentChange), M = i.useRef(0), D = i.useRef(""), O = i.useRef(0), F = i.useRef(null), L = i.useRef("right"), I = i.useRef(0), B = w ? vn : i.Fragment, k = w ? { as: $d, allowPinchZoom: !0 } : void 0, W = (S) => {
      var ae, Ze;
      const V = D.current + S, U = N().filter((ce) => !ce.disabled), Y = document.activeElement, H = (ae = U.find((ce) => ce.ref.current === Y)) == null ? void 0 : ae.textValue, z = U.map((ce) => ce.textValue), X = jd(z, V, H), ee = (Ze = U.find((ce) => ce.textValue === X)) == null ? void 0 : Ze.ref.current;
      (function ce(Qe) {
        D.current = Qe, window.clearTimeout(M.current), Qe !== "" && (M.current = window.setTimeout(() => ce(""), 1e3));
      })(V), ee && setTimeout(() => ee.focus());
    };
    i.useEffect(() => () => window.clearTimeout(M.current), []), Tr();
    const T = i.useCallback((S) => {
      var U, Y;
      return L.current === ((U = F.current) == null ? void 0 : U.side) && Xd(S, (Y = F.current) == null ? void 0 : Y.area);
    }, []);
    return /* @__PURE__ */ l(
      Ad,
      {
        scope: n,
        searchRef: D,
        onItemEnter: i.useCallback(
          (S) => {
            T(S) && S.preventDefault();
          },
          [T]
        ),
        onItemLeave: i.useCallback(
          (S) => {
            var V;
            T(S) || ((V = x.current) == null || V.focus(), _(null));
          },
          [T]
        ),
        onTriggerLeave: i.useCallback(
          (S) => {
            T(S) && S.preventDefault();
          },
          [T]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: i.useCallback((S) => {
          F.current = S;
        }, []),
        children: /* @__PURE__ */ l(B, { ...k, children: /* @__PURE__ */ l(
          mn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: A(a, (S) => {
              var V;
              S.preventDefault(), (V = x.current) == null || V.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ l(
              Mt,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: h,
                children: /* @__PURE__ */ l(
                  vd,
                  {
                    asChild: !0,
                    ...b,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: _,
                    onEntryFocus: A(d, (S) => {
                      y.isUsingKeyboardRef.current || S.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l(
                      rd,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": sa(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...C,
                        ...v,
                        ref: E,
                        style: { outline: "none", ...v.style },
                        onKeyDown: A(v.onKeyDown, (S) => {
                          const U = S.target.closest("[data-radix-menu-content]") === S.currentTarget, Y = S.ctrlKey || S.altKey || S.metaKey, H = S.key.length === 1;
                          U && (S.key === "Tab" && S.preventDefault(), !Y && H && W(S.key));
                          const z = x.current;
                          if (S.target !== z || !Rd.includes(S.key)) return;
                          S.preventDefault();
                          const ee = N().filter((ae) => !ae.disabled).map((ae) => ae.ref.current);
                          Lo.includes(S.key) && ee.reverse(), Gd(ee);
                        }),
                        onBlur: A(e.onBlur, (S) => {
                          S.currentTarget.contains(S.target) || (window.clearTimeout(M.current), D.current = "");
                        }),
                        onPointerMove: A(
                          e.onPointerMove,
                          ot((S) => {
                            const V = S.target, U = I.current !== S.clientX;
                            if (S.currentTarget.contains(V) && U) {
                              const Y = S.clientX > I.current ? "right" : "left";
                              L.current = Y, I.current = S.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Ko.displayName = de;
var kd = "MenuGroup", An = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l(K.div, { role: "group", ...r, ref: t });
  }
);
An.displayName = kd;
var Ld = "MenuLabel", Go = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l(K.div, { ...r, ref: t });
  }
);
Go.displayName = Ld;
var It = "MenuItem", gr = "menu.itemSelect", Bt = i.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = i.useRef(null), c = ut(It, e.__scopeMenu), s = Pn(It, e.__scopeMenu), d = q(t, a), u = i.useRef(!1), f = () => {
      const p = a.current;
      if (!n && p) {
        const m = new CustomEvent(gr, { bubbles: !0, cancelable: !0 });
        p.addEventListener(gr, (h) => r == null ? void 0 : r(h), { once: !0 }), pn(p, m), m.defaultPrevented ? u.current = !1 : c.onClose();
      }
    };
    return /* @__PURE__ */ l(
      zo,
      {
        ...o,
        ref: d,
        disabled: n,
        onClick: A(e.onClick, f),
        onPointerDown: (p) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, p), u.current = !0;
        },
        onPointerUp: A(e.onPointerUp, (p) => {
          var m;
          u.current || (m = p.currentTarget) == null || m.click();
        }),
        onKeyDown: A(e.onKeyDown, (p) => {
          const m = s.searchRef.current !== "";
          n || m && p.key === " " || sn.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
Bt.displayName = It;
var zo = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, c = Pn(It, n), s = Bo(n), d = i.useRef(null), u = q(t, d), [f, p] = i.useState(!1), [m, h] = i.useState("");
    return i.useEffect(() => {
      const w = d.current;
      w && h((w.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ l(
      rt.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ l(hd, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ l(
          K.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: A(
              e.onPointerMove,
              ot((w) => {
                r ? c.onItemLeave(w) : (c.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: A(
              e.onPointerLeave,
              ot((w) => c.onItemLeave(w))
            ),
            onFocus: A(e.onFocus, () => p(!0)),
            onBlur: A(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), Fd = "MenuCheckboxItem", jo = i.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ l(Qo, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ l(
      Bt,
      {
        role: "menuitemcheckbox",
        "aria-checked": Pt(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": $n(n),
        onSelect: A(
          o.onSelect,
          () => r == null ? void 0 : r(Pt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
jo.displayName = Fd;
var Yo = "MenuRadioGroup", [Bd, Vd] = Ve(
  Yo,
  { value: void 0, onValueChange: () => {
  } }
), Xo = i.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = oe(r);
    return /* @__PURE__ */ l(Bd, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ l(An, { ...o, ref: t }) });
  }
);
Xo.displayName = Yo;
var qo = "MenuRadioItem", Zo = i.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Vd(qo, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ l(Qo, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ l(
      Bt,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": $n(a),
        onSelect: A(
          r.onSelect,
          () => {
            var c;
            return (c = o.onValueChange) == null ? void 0 : c.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Zo.displayName = qo;
var Dn = "MenuItemIndicator", [Qo, Wd] = Ve(
  Dn,
  { checked: !1 }
), Jo = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = Wd(Dn, n);
    return /* @__PURE__ */ l(
      Se,
      {
        present: r || Pt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ l(
          K.span,
          {
            ...o,
            ref: t,
            "data-state": $n(a.checked)
          }
        )
      }
    );
  }
);
Jo.displayName = Dn;
var Hd = "MenuSeparator", ea = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l(
      K.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
ea.displayName = Hd;
var Ud = "MenuArrow", ta = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = lt(n);
    return /* @__PURE__ */ l(od, { ...o, ...r, ref: t });
  }
);
ta.displayName = Ud;
var On = "MenuSub", [Kd, na] = Ve(On), ra = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Ae(On, t), c = lt(t), [s, d] = i.useState(null), [u, f] = i.useState(null), p = oe(o);
  return i.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ l(Po, { ...c, children: /* @__PURE__ */ l(
    Vo,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: u,
      onContentChange: f,
      children: /* @__PURE__ */ l(
        Kd,
        {
          scope: t,
          contentId: Ie(),
          triggerId: Ie(),
          trigger: s,
          onTriggerChange: d,
          children: n
        }
      )
    }
  ) });
};
ra.displayName = On;
var et = "MenuSubTrigger", oa = i.forwardRef(
  (e, t) => {
    const n = Ae(et, e.__scopeMenu), r = ut(et, e.__scopeMenu), o = na(et, e.__scopeMenu), a = Pn(et, e.__scopeMenu), c = i.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: d } = a, u = { __scopeMenu: e.__scopeMenu }, f = i.useCallback(() => {
      c.current && window.clearTimeout(c.current), c.current = null;
    }, []);
    return i.useEffect(() => f, [f]), i.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), d(null);
      };
    }, [s, d]), /* @__PURE__ */ l(Tn, { asChild: !0, ...u, children: /* @__PURE__ */ l(
      zo,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": sa(n.open),
        ...e,
        ref: Fe(t, o.onTriggerChange),
        onClick: (p) => {
          var m;
          (m = e.onClick) == null || m.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: A(
          e.onPointerMove,
          ot((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !n.open && !c.current && (a.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: A(
          e.onPointerLeave,
          ot((p) => {
            var h, w;
            f();
            const m = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (m) {
              const v = (w = n.content) == null ? void 0 : w.dataset.side, g = v === "right", y = g ? -5 : 5, C = m[g ? "left" : "right"], b = m[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + y, y: p.clientY },
                  { x: C, y: m.top },
                  { x: b, y: m.top },
                  { x: b, y: m.bottom },
                  { x: C, y: m.bottom }
                ],
                side: v
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(p), p.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: A(e.onKeyDown, (p) => {
          var h;
          const m = a.searchRef.current !== "";
          e.disabled || m && p.key === " " || _d[r.dir].includes(p.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
oa.displayName = et;
var aa = "MenuSubContent", ia = i.forwardRef(
  (e, t) => {
    const n = Ho(de, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ae(de, e.__scopeMenu), c = ut(de, e.__scopeMenu), s = na(aa, e.__scopeMenu), d = i.useRef(null), u = q(t, d);
    return /* @__PURE__ */ l(rt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(Se, { present: r || a.open, children: /* @__PURE__ */ l(rt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(
      Mn,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: c.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var p;
          c.isUsingKeyboardRef.current && ((p = d.current) == null || p.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: A(e.onFocusOutside, (f) => {
          f.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: A(e.onEscapeKeyDown, (f) => {
          c.onClose(), f.preventDefault();
        }),
        onKeyDown: A(e.onKeyDown, (f) => {
          var h;
          const p = f.currentTarget.contains(f.target), m = Ed[c.dir].includes(f.key);
          p && m && (a.onOpenChange(!1), (h = s.trigger) == null || h.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
ia.displayName = aa;
function sa(e) {
  return e ? "open" : "closed";
}
function Pt(e) {
  return e === "indeterminate";
}
function $n(e) {
  return Pt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Gd(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function zd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function jd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let c = zd(e, Math.max(a, 0));
  o.length === 1 && (c = c.filter((u) => u !== n));
  const d = c.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return d !== n ? d : void 0;
}
function Yd(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, c = t.length - 1; a < t.length; c = a++) {
    const s = t[a], d = t[c], u = s.x, f = s.y, p = d.x, m = d.y;
    f > r != m > r && n < (p - u) * (r - f) / (m - f) + u && (o = !o);
  }
  return o;
}
function Xd(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Yd(n, t);
}
function ot(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var qd = Wo, Zd = Tn, Qd = Uo, Jd = Ko, ef = An, tf = Go, nf = Bt, rf = jo, of = Xo, af = Zo, sf = Jo, cf = ea, lf = ta, uf = ra, df = oa, ff = ia, Vt = "DropdownMenu", [pf] = Be(
  Vt,
  [Fo]
), re = Fo(), [mf, ca] = pf(Vt), la = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: c,
    modal: s = !0
  } = e, d = re(t), u = i.useRef(null), [f, p] = at({
    prop: o,
    defaultProp: a ?? !1,
    onChange: c,
    caller: Vt
  });
  return /* @__PURE__ */ l(
    mf,
    {
      scope: t,
      triggerId: Ie(),
      triggerRef: u,
      contentId: Ie(),
      open: f,
      onOpenChange: p,
      onOpenToggle: i.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ l(qd, { ...d, open: f, onOpenChange: p, dir: r, modal: s, children: n })
    }
  );
};
la.displayName = Vt;
var ua = "DropdownMenuTrigger", da = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = ca(ua, n), c = re(n);
    return /* @__PURE__ */ l(Zd, { asChild: !0, ...c, children: /* @__PURE__ */ l(
      K.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Fe(t, a.triggerRef),
        onPointerDown: A(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: A(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
da.displayName = ua;
var vf = "DropdownMenuPortal", fa = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = re(t);
  return /* @__PURE__ */ l(Qd, { ...r, ...n });
};
fa.displayName = vf;
var pa = "DropdownMenuContent", ma = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ca(pa, n), a = re(n), c = i.useRef(!1);
    return /* @__PURE__ */ l(
      Jd,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: A(e.onCloseAutoFocus, (s) => {
          var d;
          c.current || (d = o.triggerRef.current) == null || d.focus(), c.current = !1, s.preventDefault();
        }),
        onInteractOutside: A(e.onInteractOutside, (s) => {
          const d = s.detail.originalEvent, u = d.button === 0 && d.ctrlKey === !0, f = d.button === 2 || u;
          (!o.modal || f) && (c.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
ma.displayName = pa;
var hf = "DropdownMenuGroup", va = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
    return /* @__PURE__ */ l(ef, { ...o, ...r, ref: t });
  }
);
va.displayName = hf;
var gf = "DropdownMenuLabel", ha = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
    return /* @__PURE__ */ l(tf, { ...o, ...r, ref: t });
  }
);
ha.displayName = gf;
var wf = "DropdownMenuItem", ga = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
    return /* @__PURE__ */ l(nf, { ...o, ...r, ref: t });
  }
);
ga.displayName = wf;
var yf = "DropdownMenuCheckboxItem", wa = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
  return /* @__PURE__ */ l(rf, { ...o, ...r, ref: t });
});
wa.displayName = yf;
var bf = "DropdownMenuRadioGroup", ya = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
  return /* @__PURE__ */ l(of, { ...o, ...r, ref: t });
});
ya.displayName = bf;
var Cf = "DropdownMenuRadioItem", ba = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
  return /* @__PURE__ */ l(af, { ...o, ...r, ref: t });
});
ba.displayName = Cf;
var Nf = "DropdownMenuItemIndicator", Ca = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
  return /* @__PURE__ */ l(sf, { ...o, ...r, ref: t });
});
Ca.displayName = Nf;
var xf = "DropdownMenuSeparator", Na = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
  return /* @__PURE__ */ l(cf, { ...o, ...r, ref: t });
});
Na.displayName = xf;
var Rf = "DropdownMenuArrow", _f = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
    return /* @__PURE__ */ l(lf, { ...o, ...r, ref: t });
  }
);
_f.displayName = Rf;
var Ef = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, c = re(t), [s, d] = at({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ l(uf, { ...c, open: s, onOpenChange: d, children: n });
}, Sf = "DropdownMenuSubTrigger", xa = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
  return /* @__PURE__ */ l(df, { ...o, ...r, ref: t });
});
xa.displayName = Sf;
var Tf = "DropdownMenuSubContent", Ra = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = re(n);
  return /* @__PURE__ */ l(
    ff,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ra.displayName = Tf;
var If = la, Pf = da, _a = fa, Mf = ma, Af = va, Df = ha, Of = ga, $f = wa, kf = ya, Lf = ba, Ea = Ca, Ff = Na, Bf = Ef, Vf = xa, Wf = Ra;
const Hf = "trigger", Uf = "content", Kf = "item", Gf = "itemLeadingIcon", zf = "itemTrailingIcon", jf = "itemTrailingText", Yf = "checkboxItem", Xf = "radioItem", qf = "itemIndicator", Zf = "separator", Qf = "subTrigger", Jf = "subTriggerIcon", ep = "subContent", tp = "label", ne = {
  trigger: Hf,
  content: Uf,
  item: Kf,
  itemLeadingIcon: Gf,
  itemTrailingIcon: zf,
  itemTrailingText: jf,
  checkboxItem: Yf,
  radioItem: Xf,
  itemIndicator: qf,
  separator: Zf,
  subTrigger: Qf,
  subTriggerIcon: Jf,
  subContent: ep,
  label: tp
}, eh = If, np = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Pf,
  {
    ref: n,
    className: `${ne.trigger} ${e || ""}`,
    ...t
  }
));
np.displayName = "MenuTrigger";
const th = _a, nh = Af, rh = kf, oh = Bf, rp = i.forwardRef(({ className: e, align: t = "start", side: n = "bottom", sideOffset: r = 4, ...o }, a) => /* @__PURE__ */ l(_a, { children: /* @__PURE__ */ l(
  Mf,
  {
    ref: a,
    align: t,
    side: n,
    sideOffset: r,
    className: `${ne.content} ${e || ""}`,
    ...o
  }
) }));
rp.displayName = "MenuContent";
const op = i.forwardRef(({ className: e, leadingIcon: t, trailingIcon: n, trailingText: r, destructive: o, children: a, ...c }, s) => /* @__PURE__ */ P(
  Of,
  {
    ref: s,
    className: `${ne.item} ${e || ""}`,
    style: o ? { color: "var(--error)" } : void 0,
    ...c,
    children: [
      t && /* @__PURE__ */ l("span", { className: ne.itemLeadingIcon, children: t }),
      a,
      r && /* @__PURE__ */ l("span", { className: ne.itemTrailingText, children: r }),
      n && /* @__PURE__ */ l("span", { className: ne.itemTrailingIcon, children: n })
    ]
  }
));
op.displayName = "MenuItem";
const ap = i.forwardRef(({ className: e, leadingIcon: t, children: n, ...r }, o) => /* @__PURE__ */ P(
  $f,
  {
    ref: o,
    className: `${ne.checkboxItem} ${e || ""}`,
    ...r,
    children: [
      /* @__PURE__ */ P("span", { className: ne.itemIndicator, children: [
        /* @__PURE__ */ l(Ea, { children: /* @__PURE__ */ l("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l(
          "path",
          {
            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
            fill: "currentColor"
          }
        ) }) }),
        !r.checked && t
      ] }),
      n
    ]
  }
));
ap.displayName = "MenuCheckboxItem";
const ip = i.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ P(
  Lf,
  {
    ref: r,
    className: `${ne.radioItem} ${e || ""}`,
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: ne.itemIndicator, children: /* @__PURE__ */ l(Ea, { children: /* @__PURE__ */ l("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "6", fill: "currentColor" }) }) }) }),
      t
    ]
  }
));
ip.displayName = "MenuRadioItem";
const sp = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Ff,
  {
    ref: n,
    className: `${ne.separator} ${e || ""}`,
    ...t
  }
));
sp.displayName = "MenuSeparator";
const cp = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Df,
  {
    ref: n,
    className: `${ne.label} ${e || ""}`,
    ...t
  }
));
cp.displayName = "MenuLabel";
const lp = i.forwardRef(({ className: e, leadingIcon: t, children: n, ...r }, o) => /* @__PURE__ */ P(
  Vf,
  {
    ref: o,
    className: `${ne.subTrigger} ${e || ""}`,
    ...r,
    children: [
      t && /* @__PURE__ */ l("span", { className: ne.itemLeadingIcon, children: t }),
      n,
      /* @__PURE__ */ l("span", { className: ne.subTriggerIcon, children: /* @__PURE__ */ l("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z", fill: "currentColor" }) }) })
    ]
  }
));
lp.displayName = "MenuSubTrigger";
const up = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Wf,
  {
    ref: n,
    className: `${ne.subContent} ${e || ""}`,
    ...t
  }
));
up.displayName = "MenuSubContent";
const dp = "linearContainer", fp = "linearTrack", pp = "linearIndicator", mp = "linearStop", vp = "circularContainer", hp = "circularSvg", gp = "circularTrack", wp = "circularIndicator", yp = "label", bp = "circularLabelInside", Cp = "linearBuffer", pe = {
  linearContainer: dp,
  linearTrack: fp,
  linearIndicator: pp,
  linearStop: mp,
  circularContainer: vp,
  circularSvg: hp,
  circularTrack: gp,
  circularIndicator: wp,
  label: yp,
  circularLabelInside: bp,
  linearBuffer: Cp
}, Sa = i.forwardRef(
  ({
    value: e,
    buffer: t,
    size: n = "default",
    color: r = "primary",
    wavy: o = !1,
    showLabel: a = !1,
    labelFormatter: c = (p) => `${Math.round(p)}%`,
    className: s,
    "aria-label": d = "Progress",
    ...u
  }, f) => {
    const p = e === void 0, m = e !== void 0 ? Math.min(100, Math.max(0, e)) : 0, h = t !== void 0 ? Math.min(100, Math.max(0, t)) : void 0;
    return /* @__PURE__ */ P(
      "div",
      {
        ref: f,
        role: "progressbar",
        "aria-valuenow": p ? void 0 : m,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": d,
        "data-size": n,
        "data-color": r,
        "data-wavy": o,
        "data-determinate": !p,
        className: `${pe.linearContainer} ${s || ""}`,
        ...u,
        children: [
          /* @__PURE__ */ l("div", { className: pe.linearTrack }),
          h !== void 0 && /* @__PURE__ */ l(
            "div",
            {
              className: pe.linearBuffer,
              style: { width: `${h}%` }
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: pe.linearIndicator,
              "data-indeterminate": p,
              style: p ? void 0 : { width: `${m}%` }
            }
          ),
          /* @__PURE__ */ l("div", { className: pe.linearStop }),
          a && !p && /* @__PURE__ */ l("span", { className: pe.label, children: c(m) })
        ]
      }
    );
  }
);
Sa.displayName = "LinearProgress";
const Ta = i.forwardRef(
  ({
    value: e,
    size: t = "default",
    color: n = "primary",
    showLabel: r = !1,
    labelFormatter: o = (f) => `${Math.round(f)}%`,
    thickness: a,
    className: c,
    "aria-label": s = "Progress",
    ...d
  }, u) => {
    const f = e === void 0, p = e !== void 0 ? Math.min(100, Math.max(0, e)) : 0, m = {
      small: { viewBox: 24, radius: 9, defaultThickness: 3 },
      default: { viewBox: 48, radius: 20, defaultThickness: 4 },
      large: { viewBox: 64, radius: 28, defaultThickness: 4 }
    }, { viewBox: h, radius: w, defaultThickness: v } = m[t], g = a || v, y = 2 * Math.PI * w, C = f ? 0 : y - p / 100 * y, b = h / 2;
    return /* @__PURE__ */ P(
      "div",
      {
        ref: u,
        role: "progressbar",
        "aria-valuenow": f ? void 0 : p,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": s,
        "data-size": t,
        "data-color": n,
        className: `${pe.circularContainer} ${c || ""}`,
        ...d,
        children: [
          /* @__PURE__ */ P(
            "svg",
            {
              className: pe.circularSvg,
              viewBox: `0 0 ${h} ${h}`,
              "data-indeterminate": f,
              children: [
                /* @__PURE__ */ l(
                  "circle",
                  {
                    className: pe.circularTrack,
                    cx: b,
                    cy: b,
                    r: w,
                    strokeWidth: g
                  }
                ),
                /* @__PURE__ */ l(
                  "circle",
                  {
                    className: pe.circularIndicator,
                    cx: b,
                    cy: b,
                    r: w,
                    strokeWidth: g,
                    strokeDasharray: y,
                    strokeDashoffset: C,
                    "data-indeterminate": f
                  }
                )
              ]
            }
          ),
          r && !f && /* @__PURE__ */ l("span", { className: pe.circularLabelInside, children: o(p) })
        ]
      }
    );
  }
);
Ta.displayName = "CircularProgress";
const ah = {
  Linear: Sa,
  Circular: Ta
}, Np = "searchBar", xp = "input", Rp = "leadingIcon", _p = "leadingIconButton", Ep = "trailing", Sp = "trailingIconButton", Tp = "searchView", Ip = "searchViewHeader", Pp = "searchViewInput", Mp = "searchViewContent", Ap = "suggestion", Dp = "suggestionIcon", Op = "suggestionText", $p = "suggestionTrailing", kp = "searchSectionHeader", Q = {
  searchBar: Np,
  input: xp,
  leadingIcon: Rp,
  leadingIconButton: _p,
  trailing: Ep,
  trailingIconButton: Sp,
  searchView: Tp,
  searchViewHeader: Ip,
  searchViewInput: Pp,
  searchViewContent: Mp,
  suggestion: Ap,
  suggestionIcon: Dp,
  suggestionText: Op,
  suggestionTrailing: $p,
  searchSectionHeader: kp
}, Lp = () => /* @__PURE__ */ l("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l(
  "path",
  {
    d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    fill: "currentColor"
  }
) }), Fp = () => /* @__PURE__ */ l("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z", fill: "currentColor" }) }), Ia = () => /* @__PURE__ */ l("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l(
  "path",
  {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
    fill: "currentColor"
  }
) }), Bp = () => /* @__PURE__ */ l("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l(
  "path",
  {
    d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z",
    fill: "currentColor"
  }
) }), Vp = i.forwardRef(
  ({
    value: e = "",
    placeholder: t = "Search",
    onChange: n,
    onSubmit: r,
    onExpand: o,
    leadingIcon: a,
    leadingIconButton: c = !1,
    onLeadingIconClick: s,
    trailing: d,
    centered: u = !1,
    elevated: f = !1,
    disabled: p = !1,
    className: m,
    "aria-label": h = "Search",
    ...w
  }, v) => {
    const g = i.useRef(null), [y, C] = i.useState(!1), b = () => {
      var _;
      n == null || n(""), (_ = g.current) == null || _.focus();
    }, N = (_) => {
      var x;
      _.key === "Enter" && e && (r == null || r(e)), _.key === "Escape" && (b(), (x = g.current) == null || x.blur());
    }, R = () => {
      const _ = a || /* @__PURE__ */ l(Lp, {});
      return c ? /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          className: Q.leadingIconButton,
          onClick: s,
          "aria-label": "Back",
          children: _
        }
      ) : /* @__PURE__ */ l("span", { className: Q.leadingIcon, children: _ });
    };
    return /* @__PURE__ */ P(
      "div",
      {
        ref: v,
        role: "search",
        "data-centered": u,
        "data-elevated": f || y,
        "data-disabled": p,
        className: `${Q.searchBar} ${m || ""}`,
        onClick: () => {
          var _;
          (_ = g.current) == null || _.focus(), o == null || o();
        },
        ...w,
        children: [
          /* @__PURE__ */ l(R, {}),
          /* @__PURE__ */ l(
            "input",
            {
              ref: g,
              type: "text",
              role: "searchbox",
              value: e,
              placeholder: t,
              disabled: p,
              "aria-label": h,
              className: Q.input,
              onChange: (_) => n == null ? void 0 : n(_.target.value),
              onFocus: () => C(!0),
              onBlur: () => C(!1),
              onKeyDown: N
            }
          ),
          /* @__PURE__ */ P("div", { className: Q.trailing, children: [
            e && /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                className: Q.trailingIconButton,
                onClick: b,
                "aria-label": "Clear search",
                children: /* @__PURE__ */ l(Ia, {})
              }
            ),
            d
          ] })
        ]
      }
    );
  }
);
Vp.displayName = "SearchBar";
const Wp = i.forwardRef(
  ({
    open: e,
    onClose: t,
    value: n = "",
    placeholder: r = "Search",
    onChange: o,
    onSubmit: a,
    trailing: c,
    children: s,
    className: d,
    ...u
  }, f) => {
    const p = i.useRef(null);
    i.useEffect(() => {
      e && setTimeout(() => {
        var w;
        return (w = p.current) == null ? void 0 : w.focus();
      }, 100);
    }, [e]);
    const m = () => {
      var w;
      o == null || o(""), (w = p.current) == null || w.focus();
    }, h = (w) => {
      w.key === "Enter" && n && (a == null || a(n)), w.key === "Escape" && t();
    };
    return e ? /* @__PURE__ */ P(
      "div",
      {
        ref: f,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Search",
        "data-state": e ? "open" : "closed",
        className: `${Q.searchView} ${d || ""}`,
        ...u,
        children: [
          /* @__PURE__ */ P("div", { className: Q.searchViewHeader, children: [
            /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                className: Q.leadingIconButton,
                onClick: t,
                "aria-label": "Close search",
                children: /* @__PURE__ */ l(Fp, {})
              }
            ),
            /* @__PURE__ */ l(
              "input",
              {
                ref: p,
                type: "text",
                role: "searchbox",
                value: n,
                placeholder: r,
                className: Q.searchViewInput,
                onChange: (w) => o == null ? void 0 : o(w.target.value),
                onKeyDown: h
              }
            ),
            /* @__PURE__ */ P("div", { className: Q.trailing, children: [
              n && /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  className: Q.trailingIconButton,
                  onClick: m,
                  "aria-label": "Clear",
                  children: /* @__PURE__ */ l(Ia, {})
                }
              ),
              c
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: Q.searchViewContent, children: s })
        ]
      }
    ) : null;
  }
);
Wp.displayName = "SearchView";
const Hp = i.forwardRef(
  ({ children: e, icon: t, onClick: n, trailing: r, className: o, ...a }, c) => /* @__PURE__ */ P(
    "li",
    {
      ref: c,
      role: "option",
      tabIndex: 0,
      className: `${Q.suggestion} ${o || ""}`,
      onClick: n,
      onKeyDown: (s) => {
        (s.key === "Enter" || s.key === " ") && (s.preventDefault(), n == null || n());
      },
      ...a,
      children: [
        /* @__PURE__ */ l("span", { className: Q.suggestionIcon, children: t || /* @__PURE__ */ l(Bp, {}) }),
        /* @__PURE__ */ l("span", { className: Q.suggestionText, children: e }),
        r && /* @__PURE__ */ l("span", { className: Q.suggestionTrailing, children: r })
      ]
    }
  )
);
Hp.displayName = "SearchSuggestion";
const Up = i.forwardRef(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ l("div", { ref: r, className: `${Q.searchSectionHeader} ${t || ""}`, ...n, children: e })
);
Up.displayName = "SearchSectionHeader";
const Kp = "container", Gp = "track", zp = "activeTrack", jp = "thumb", Yp = "valueIndicator", Xp = "stops", qp = "stop", Zp = "rangeTrack", Qp = "startIcon", Jp = "endIcon", em = "label", Z = {
  container: Kp,
  track: Gp,
  activeTrack: zp,
  thumb: jp,
  valueIndicator: Yp,
  stops: Xp,
  stop: qp,
  rangeTrack: Zp,
  startIcon: Qp,
  endIcon: Jp,
  label: em
}, tm = i.forwardRef(
  ({
    value: e,
    defaultValue: t = 0,
    min: n = 0,
    max: r = 100,
    step: o,
    onChange: a,
    onChangeEnd: c,
    size: s = "md",
    color: d = "primary",
    orientation: u = "horizontal",
    centered: f = !1,
    showStops: p = !1,
    showValue: m = "auto",
    valueFormatter: h = (_) => String(Math.round(_)),
    label: w,
    startIcon: v,
    endIcon: g,
    disabled: y = !1,
    className: C,
    "aria-label": b,
    ...N
  }, R) => {
    const [_, x] = i.useState(t), E = e !== void 0 ? e : _, M = i.useRef(null), D = i.useRef(null), O = i.useRef(!1), F = (E - n) / (r - n) * 100, L = Math.min(100, Math.max(0, F)), I = (H) => {
      if (!o) return H;
      const z = Math.round((H - n) / o) * o + n;
      return Math.min(r, Math.max(n, z));
    }, B = (H, z) => {
      if (!M.current) return E;
      const X = M.current.getBoundingClientRect();
      let ee;
      u === "vertical" ? ee = 1 - (z - X.top) / X.height : ee = (H - X.left) / X.width, ee = Math.min(1, Math.max(0, ee));
      const ae = n + ee * (r - n);
      return I(ae);
    }, k = (H) => {
      if (y) return;
      H.preventDefault(), O.current = !0;
      const z = B(H.clientX, H.clientY);
      x(z), a == null || a(z), H.target.setPointerCapture(H.pointerId);
    }, W = (H) => {
      if (!O.current || y) return;
      const z = B(H.clientX, H.clientY);
      x(z), a == null || a(z);
    }, T = (H) => {
      O.current && (O.current = !1, H.target.releasePointerCapture(H.pointerId), c == null || c(E));
    }, S = (H) => {
      if (y) return;
      const z = o || (r - n) / 100;
      let X = E;
      switch (H.key) {
        case "ArrowRight":
        case "ArrowUp":
          X = Math.min(r, E + z);
          break;
        case "ArrowLeft":
        case "ArrowDown":
          X = Math.max(n, E - z);
          break;
        case "Home":
          X = n;
          break;
        case "End":
          X = r;
          break;
        case "PageUp":
          X = Math.min(r, E + z * 10);
          break;
        case "PageDown":
          X = Math.max(n, E - z * 10);
          break;
        default:
          return;
      }
      H.preventDefault(), x(X), a == null || a(X);
    }, V = i.useMemo(() => {
      if (!o || !p) return null;
      const H = Math.floor((r - n) / o) + 1;
      return Array.from({ length: H }, (z, X) => {
        const ee = n + X * o, ae = ee <= E;
        return /* @__PURE__ */ l(
          "div",
          {
            className: Z.stop,
            "data-active": ae
          },
          ee
        );
      });
    }, [o, p, n, r, E]), U = f && E < (n + r) / 2, Y = f ? Math.abs(L - 50) : L;
    return /* @__PURE__ */ P("div", { className: C, children: [
      w && /* @__PURE__ */ l("label", { className: Z.label, children: w }),
      /* @__PURE__ */ P(
        "div",
        {
          ref: R,
          role: "slider",
          tabIndex: y ? -1 : 0,
          "aria-valuenow": E,
          "aria-valuemin": n,
          "aria-valuemax": r,
          "aria-label": b || w,
          "aria-disabled": y,
          "aria-orientation": u,
          "data-size": s,
          "data-color": d,
          "data-orientation": u,
          "data-centered": f,
          "data-value-negative": U,
          "data-disabled": y,
          "data-show-value": m,
          className: Z.container,
          onPointerDown: k,
          onPointerMove: W,
          onPointerUp: T,
          onPointerCancel: T,
          onKeyDown: S,
          ...N,
          children: [
            v && /* @__PURE__ */ l("span", { className: Z.startIcon, children: v }),
            /* @__PURE__ */ P("div", { ref: M, className: Z.track, children: [
              /* @__PURE__ */ l(
                "div",
                {
                  className: Z.activeTrack,
                  style: {
                    width: u === "horizontal" ? `${Y}%` : "100%",
                    left: f && !U ? "50%" : void 0,
                    right: f && U ? "50%" : void 0,
                    "--active-track-height": u === "vertical" ? `${L}%` : void 0
                  }
                }
              ),
              V && /* @__PURE__ */ l("div", { className: Z.stops, children: V }),
              /* @__PURE__ */ l(
                "div",
                {
                  ref: D,
                  className: Z.thumb,
                  style: {
                    left: u === "horizontal" ? `${L}%` : "50%",
                    bottom: u === "vertical" ? `${L}%` : void 0
                  },
                  children: m !== "never" && /* @__PURE__ */ l("span", { className: Z.valueIndicator, children: h(E) })
                }
              )
            ] }),
            g && /* @__PURE__ */ l("span", { className: Z.endIcon, children: g })
          ]
        }
      )
    ] });
  }
);
tm.displayName = "Slider";
const nm = i.forwardRef(
  ({
    value: e,
    defaultValue: t = [25, 75],
    min: n = 0,
    max: r = 100,
    step: o,
    minSeparation: a = 0,
    onChange: c,
    onChangeEnd: s,
    size: d = "md",
    color: u = "primary",
    showValue: f = "auto",
    valueFormatter: p = (y) => String(Math.round(y)),
    label: m,
    disabled: h = !1,
    className: w,
    ...v
  }, g) => {
    const [y, C] = i.useState(t), b = e || y, N = i.useRef(null), R = i.useRef(null), _ = i.useRef(!1), [x, E] = b, M = (x - n) / (r - n) * 100, D = (E - n) / (r - n) * 100, O = (T) => {
      if (!o) return T;
      const S = Math.round((T - n) / o) * o + n;
      return Math.min(r, Math.max(n, S));
    }, F = (T) => {
      if (!N.current) return n;
      const S = N.current.getBoundingClientRect(), V = Math.min(1, Math.max(0, (T - S.left) / S.width));
      return O(n + V * (r - n));
    }, L = (T, S) => {
      h || (T.preventDefault(), T.stopPropagation(), _.current = !0, R.current = S, T.target.setPointerCapture(T.pointerId));
    }, I = (T) => {
      if (h) return;
      const S = F(T.clientX), V = Math.abs(S - x), U = Math.abs(S - E), Y = V <= U ? 0 : 1;
      R.current = Y, _.current = !0, B(S);
    }, B = (T) => {
      const [S, V] = b;
      let U;
      if (R.current === 0) {
        const Y = V - a;
        U = [Math.min(T, Y), V];
      } else {
        const Y = S + a;
        U = [S, Math.max(T, Y)];
      }
      C(U), c == null || c(U);
    }, k = (T) => {
      !_.current || h || B(F(T.clientX));
    }, W = (T) => {
      _.current && (_.current = !1, R.current = null, T.target.releasePointerCapture(T.pointerId), s == null || s(b));
    };
    return /* @__PURE__ */ P("div", { className: w, children: [
      m && /* @__PURE__ */ l("label", { className: Z.label, children: m }),
      /* @__PURE__ */ l(
        "div",
        {
          ref: g,
          role: "group",
          "aria-label": m,
          "data-size": d,
          "data-color": u,
          "data-disabled": h,
          "data-show-value": f,
          className: Z.container,
          onPointerDown: I,
          onPointerMove: k,
          onPointerUp: W,
          onPointerCancel: W,
          ...v,
          children: /* @__PURE__ */ P("div", { ref: N, className: Z.track, children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: Z.rangeTrack,
                style: {
                  left: `${M}%`,
                  width: `${D - M}%`
                }
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                role: "slider",
                tabIndex: h ? -1 : 0,
                "aria-valuenow": x,
                "aria-valuemin": n,
                "aria-valuemax": E - a,
                "aria-label": "Minimum value",
                className: Z.thumb,
                style: { left: `${M}%` },
                onPointerDown: (T) => L(T, 0),
                children: f !== "never" && /* @__PURE__ */ l("span", { className: Z.valueIndicator, children: p(x) })
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                role: "slider",
                tabIndex: h ? -1 : 0,
                "aria-valuenow": E,
                "aria-valuemin": x + a,
                "aria-valuemax": r,
                "aria-label": "Maximum value",
                className: Z.thumb,
                style: { left: `${D}%` },
                onPointerDown: (T) => L(T, 1),
                children: f !== "never" && /* @__PURE__ */ l("span", { className: Z.valueIndicator, children: p(E) })
              }
            )
          ] })
        }
      )
    ] });
  }
);
nm.displayName = "RangeSlider";
var rm = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), om = "VisuallyHidden", kn = i.forwardRef(
  (e, t) => /* @__PURE__ */ l(
    K.span,
    {
      ...e,
      ref: t,
      style: { ...rm, ...e.style }
    }
  )
);
kn.displayName = om;
var Ln = "ToastProvider", [Fn, am, im] = yn("Toast"), [Pa] = Be("Toast", [im]), [sm, Wt] = Pa(Ln), Ma = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: c
  } = e, [s, d] = i.useState(null), [u, f] = i.useState(0), p = i.useRef(!1), m = i.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Ln}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ l(Fn.Provider, { scope: t, children: /* @__PURE__ */ l(
    sm,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: u,
      viewport: s,
      onViewportChange: d,
      onToastAdd: i.useCallback(() => f((h) => h + 1), []),
      onToastRemove: i.useCallback(() => f((h) => h - 1), []),
      isFocusedToastEscapeKeyDownRef: p,
      isClosePausedRef: m,
      children: c
    }
  ) });
};
Ma.displayName = Ln;
var Aa = "ToastViewport", cm = ["F8"], cn = "toast.viewportPause", ln = "toast.viewportResume", Da = i.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = cm,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, c = Wt(Aa, n), s = am(n), d = i.useRef(null), u = i.useRef(null), f = i.useRef(null), p = i.useRef(null), m = q(t, p, c.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), w = c.toastCount > 0;
    i.useEffect(() => {
      const g = (y) => {
        var b;
        r.length !== 0 && r.every((N) => y[N] || y.code === N) && ((b = p.current) == null || b.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [r]), i.useEffect(() => {
      const g = d.current, y = p.current;
      if (w && g && y) {
        const C = () => {
          if (!c.isClosePausedRef.current) {
            const _ = new CustomEvent(cn);
            y.dispatchEvent(_), c.isClosePausedRef.current = !0;
          }
        }, b = () => {
          if (c.isClosePausedRef.current) {
            const _ = new CustomEvent(ln);
            y.dispatchEvent(_), c.isClosePausedRef.current = !1;
          }
        }, N = (_) => {
          !g.contains(_.relatedTarget) && b();
        }, R = () => {
          g.contains(document.activeElement) || b();
        };
        return g.addEventListener("focusin", C), g.addEventListener("focusout", N), g.addEventListener("pointermove", C), g.addEventListener("pointerleave", R), window.addEventListener("blur", C), window.addEventListener("focus", b), () => {
          g.removeEventListener("focusin", C), g.removeEventListener("focusout", N), g.removeEventListener("pointermove", C), g.removeEventListener("pointerleave", R), window.removeEventListener("blur", C), window.removeEventListener("focus", b);
        };
      }
    }, [w, c.isClosePausedRef]);
    const v = i.useCallback(
      ({ tabbingDirection: g }) => {
        const C = s().map((b) => {
          const N = b.ref.current, R = [N, ...Nm(N)];
          return g === "forwards" ? R : R.reverse();
        });
        return (g === "forwards" ? C.reverse() : C).flat();
      },
      [s]
    );
    return i.useEffect(() => {
      const g = p.current;
      if (g) {
        const y = (C) => {
          var R, _, x;
          const b = C.altKey || C.ctrlKey || C.metaKey;
          if (C.key === "Tab" && !b) {
            const E = document.activeElement, M = C.shiftKey;
            if (C.target === g && M) {
              (R = u.current) == null || R.focus();
              return;
            }
            const F = v({ tabbingDirection: M ? "backwards" : "forwards" }), L = F.findIndex((I) => I === E);
            Qt(F.slice(L + 1)) ? C.preventDefault() : M ? (_ = u.current) == null || _.focus() : (x = f.current) == null || x.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [s, v]), /* @__PURE__ */ P(
      as,
      {
        ref: d,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w && /* @__PURE__ */ l(
            un,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "forwards"
                });
                Qt(g);
              }
            }
          ),
          /* @__PURE__ */ l(Fn.Slot, { scope: n, children: /* @__PURE__ */ l(K.ol, { tabIndex: -1, ...a, ref: m }) }),
          w && /* @__PURE__ */ l(
            un,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "backwards"
                });
                Qt(g);
              }
            }
          )
        ]
      }
    );
  }
);
Da.displayName = Aa;
var Oa = "ToastFocusProxy", un = i.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = Wt(Oa, n);
    return /* @__PURE__ */ l(
      kn,
      {
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (c) => {
          var u;
          const s = c.relatedTarget;
          !((u = a.viewport) != null && u.contains(s)) && r();
        }
      }
    );
  }
);
un.displayName = Oa;
var dt = "Toast", lm = "toast.swipeStart", um = "toast.swipeMove", dm = "toast.swipeCancel", fm = "toast.swipeEnd", $a = i.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...c } = e, [s, d] = at({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: dt
    });
    return /* @__PURE__ */ l(Se, { present: n || s, children: /* @__PURE__ */ l(
      vm,
      {
        open: s,
        ...c,
        ref: t,
        onClose: () => d(!1),
        onPause: oe(e.onPause),
        onResume: oe(e.onResume),
        onSwipeStart: A(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: A(e.onSwipeMove, (u) => {
          const { x: f, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: A(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: A(e.onSwipeEnd, (u) => {
          const { x: f, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), d(!1);
        })
      }
    ) });
  }
);
$a.displayName = dt;
var [pm, mm] = Pa(dt, {
  onClose() {
  }
}), vm = i.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: a,
      onClose: c,
      onEscapeKeyDown: s,
      onPause: d,
      onResume: u,
      onSwipeStart: f,
      onSwipeMove: p,
      onSwipeCancel: m,
      onSwipeEnd: h,
      ...w
    } = e, v = Wt(dt, n), [g, y] = i.useState(null), C = q(t, (I) => y(I)), b = i.useRef(null), N = i.useRef(null), R = o || v.duration, _ = i.useRef(0), x = i.useRef(R), E = i.useRef(0), { onToastAdd: M, onToastRemove: D } = v, O = oe(() => {
      var B;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((B = v.viewport) == null || B.focus()), c();
    }), F = i.useCallback(
      (I) => {
        !I || I === 1 / 0 || (window.clearTimeout(E.current), _.current = (/* @__PURE__ */ new Date()).getTime(), E.current = window.setTimeout(O, I));
      },
      [O]
    );
    i.useEffect(() => {
      const I = v.viewport;
      if (I) {
        const B = () => {
          F(x.current), u == null || u();
        }, k = () => {
          const W = (/* @__PURE__ */ new Date()).getTime() - _.current;
          x.current = x.current - W, window.clearTimeout(E.current), d == null || d();
        };
        return I.addEventListener(cn, k), I.addEventListener(ln, B), () => {
          I.removeEventListener(cn, k), I.removeEventListener(ln, B);
        };
      }
    }, [v.viewport, R, d, u, F]), i.useEffect(() => {
      a && !v.isClosePausedRef.current && F(R);
    }, [a, R, v.isClosePausedRef, F]), i.useEffect(() => (M(), () => D()), [M, D]);
    const L = i.useMemo(() => g ? Wa(g) : null, [g]);
    return v.viewport ? /* @__PURE__ */ P($e, { children: [
      L && /* @__PURE__ */ l(
        hm,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: L
        }
      ),
      /* @__PURE__ */ l(pm, { scope: n, onClose: O, children: dn.createPortal(
        /* @__PURE__ */ l(Fn.ItemSlot, { scope: n, children: /* @__PURE__ */ l(
          os,
          {
            asChild: !0,
            onEscapeKeyDown: A(s, () => {
              v.isFocusedToastEscapeKeyDownRef.current || O(), v.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ l(
              K.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...w,
                ref: C,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: A(e.onKeyDown, (I) => {
                  I.key === "Escape" && (s == null || s(I.nativeEvent), I.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, O()));
                }),
                onPointerDown: A(e.onPointerDown, (I) => {
                  I.button === 0 && (b.current = { x: I.clientX, y: I.clientY });
                }),
                onPointerMove: A(e.onPointerMove, (I) => {
                  if (!b.current) return;
                  const B = I.clientX - b.current.x, k = I.clientY - b.current.y, W = !!N.current, T = ["left", "right"].includes(v.swipeDirection), S = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, V = T ? S(0, B) : 0, U = T ? 0 : S(0, k), Y = I.pointerType === "touch" ? 10 : 2, H = { x: V, y: U }, z = { originalEvent: I, delta: H };
                  W ? (N.current = H, bt(um, p, z, {
                    discrete: !1
                  })) : wr(H, v.swipeDirection, Y) ? (N.current = H, bt(lm, f, z, {
                    discrete: !1
                  }), I.target.setPointerCapture(I.pointerId)) : (Math.abs(B) > Y || Math.abs(k) > Y) && (b.current = null);
                }),
                onPointerUp: A(e.onPointerUp, (I) => {
                  const B = N.current, k = I.target;
                  if (k.hasPointerCapture(I.pointerId) && k.releasePointerCapture(I.pointerId), N.current = null, b.current = null, B) {
                    const W = I.currentTarget, T = { originalEvent: I, delta: B };
                    wr(B, v.swipeDirection, v.swipeThreshold) ? bt(fm, h, T, {
                      discrete: !0
                    }) : bt(
                      dm,
                      m,
                      T,
                      {
                        discrete: !0
                      }
                    ), W.addEventListener("click", (S) => S.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        v.viewport
      ) })
    ] }) : null;
  }
), hm = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Wt(dt, t), [a, c] = i.useState(!1), [s, d] = i.useState(!1);
  return bm(() => c(!0)), i.useEffect(() => {
    const u = window.setTimeout(() => d(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), s ? null : /* @__PURE__ */ l(At, { asChild: !0, children: /* @__PURE__ */ l(kn, { ...r, children: a && /* @__PURE__ */ P($e, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, gm = "ToastTitle", wm = i.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ l(K.div, { ...r, ref: t });
  }
);
wm.displayName = gm;
var ym = "ToastDescription", ka = i.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ l(K.div, { ...r, ref: t });
  }
);
ka.displayName = ym;
var La = "ToastAction", Fa = i.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ l(Va, { altText: n, asChild: !0, children: /* @__PURE__ */ l(Bn, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${La}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Fa.displayName = La;
var Ba = "ToastClose", Bn = i.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = mm(Ba, n);
    return /* @__PURE__ */ l(Va, { asChild: !0, children: /* @__PURE__ */ l(
      K.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: A(e.onClick, o.onClose)
      }
    ) });
  }
);
Bn.displayName = Ba;
var Va = i.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ l(
    K.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Wa(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Cm(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const c = r.dataset.radixToastAnnounceAlt;
          c && t.push(c);
        } else
          t.push(...Wa(r));
    }
  }), t;
}
function bt(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? pn(o, a) : o.dispatchEvent(a);
}
var wr = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function bm(e = () => {
}) {
  const t = oe(e);
  Re(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function Cm(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Nm(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Qt(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var xm = Ma, Ha = Da, Ua = $a, Rm = ka, Ka = Fa, Ga = Bn;
const _m = "viewport", Em = "snackbar", Sm = "multiline", Tm = "message", Im = "action", Pm = "close", je = {
  viewport: _m,
  snackbar: Em,
  multiline: Sm,
  message: Tm,
  action: Im,
  close: Pm
}, ih = xm, Mm = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Ha,
  {
    ref: n,
    className: $(je.viewport, e),
    ...t
  }
));
Mm.displayName = Ha.displayName;
const Am = i.forwardRef(({ className: e, multiline: t, ...n }, r) => /* @__PURE__ */ l(
  Ua,
  {
    ref: r,
    className: $(
      je.snackbar,
      t && je.multiline,
      e
    ),
    ...n
  }
));
Am.displayName = Ua.displayName;
const Dm = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Rm,
  {
    ref: n,
    className: $(je.message, e),
    ...t
  }
));
Dm.displayName = "SnackbarMessage";
const Om = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Ka,
  {
    ref: n,
    className: $(je.action, e),
    ...t
  }
));
Om.displayName = Ka.displayName;
const $m = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ P(
  Ga,
  {
    ref: n,
    className: $(je.close, e),
    ...t,
    children: [
      /* @__PURE__ */ l(fn, {}),
      /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
    ]
  }
));
$m.displayName = Ga.displayName;
const km = "textField", Lm = "container", Fm = "filled", Bm = "activeIndicator", Vm = "focused", Wm = "error", Hm = "disabled", Um = "outlined", Km = "inputWrapper", Gm = "label", zm = "labelFloating", jm = "input", Ym = "leadingIcon", Xm = "trailingIcon", qm = "prefix", Zm = "suffix", Qm = "supportingText", J = {
  textField: km,
  container: Lm,
  filled: Fm,
  activeIndicator: Bm,
  focused: Vm,
  error: Wm,
  disabled: Hm,
  outlined: Um,
  inputWrapper: Km,
  label: Gm,
  labelFloating: zm,
  input: jm,
  leadingIcon: Ym,
  trailingIcon: Xm,
  prefix: qm,
  suffix: Zm,
  supportingText: Qm
}, Jm = Ye(
  J.textField,
  {
    variants: {
      variant: {
        filled: J.filled,
        outlined: J.outlined
      }
    },
    defaultVariants: {
      variant: "filled"
    }
  }
), ev = i.forwardRef(
  ({
    className: e,
    variant: t,
    label: n,
    supportingText: r,
    error: o,
    errorText: a,
    leadingIcon: c,
    trailingIcon: s,
    prefix: d,
    suffix: u,
    disabled: f,
    id: p,
    value: m,
    defaultValue: h,
    onFocus: w,
    onBlur: v,
    ...g
  }, y) => {
    const [C, b] = i.useState(!1), [N, R] = i.useState(
      !!m || !!h
    ), _ = p || i.useId();
    i.useEffect(() => {
      R(!!m);
    }, [m]);
    const x = (D) => {
      b(!0), w == null || w(D);
    }, E = (D) => {
      b(!1), R(!!D.target.value), v == null || v(D);
    }, M = C || N;
    return /* @__PURE__ */ P(
      "div",
      {
        className: $(
          Jm({ variant: t }),
          o && J.error,
          f && J.disabled,
          C && J.focused,
          e
        ),
        children: [
          /* @__PURE__ */ P("div", { className: J.container, children: [
            c && /* @__PURE__ */ l("span", { className: J.leadingIcon, "aria-hidden": "true", children: c }),
            /* @__PURE__ */ P("div", { className: J.inputWrapper, children: [
              n && /* @__PURE__ */ l(
                "label",
                {
                  htmlFor: _,
                  className: $(
                    J.label,
                    M && J.labelFloating
                  ),
                  children: n
                }
              ),
              d && M && /* @__PURE__ */ l("span", { className: J.prefix, children: d }),
              /* @__PURE__ */ l(
                "input",
                {
                  ref: y,
                  id: _,
                  type: "text",
                  className: J.input,
                  disabled: f,
                  "aria-invalid": o,
                  "aria-describedby": r || a ? `${_}-supporting` : void 0,
                  value: m,
                  defaultValue: h,
                  onFocus: x,
                  onBlur: E,
                  ...g
                }
              ),
              u && M && /* @__PURE__ */ l("span", { className: J.suffix, children: u })
            ] }),
            s && /* @__PURE__ */ l("span", { className: J.trailingIcon, "aria-hidden": "true", children: s })
          ] }),
          t === "filled" && /* @__PURE__ */ l("div", { className: J.activeIndicator }),
          (r || a) && /* @__PURE__ */ l(
            "div",
            {
              id: `${_}-supporting`,
              className: J.supportingText,
              children: o && a ? a : r
            }
          )
        ]
      }
    );
  }
);
ev.displayName = "TextField";
const tv = "appBar", nv = "small", rv = "smallContent", ov = "title", av = "medium", iv = "mediumContent", sv = "mediumTopRow", cv = "mediumBottomRow", lv = "large", uv = "largeContent", dv = "largeTopRow", fv = "largeBottomRow", pv = "navigationIcon", mv = "subtitle", vv = "actions", hv = "action", j = {
  appBar: tv,
  small: nv,
  smallContent: rv,
  title: ov,
  medium: av,
  mediumContent: iv,
  mediumTopRow: sv,
  mediumBottomRow: cv,
  large: lv,
  largeContent: uv,
  largeTopRow: dv,
  largeBottomRow: fv,
  navigationIcon: pv,
  subtitle: mv,
  actions: vv,
  action: hv
}, gv = i.forwardRef(
  ({
    variant: e = "small",
    align: t = "start",
    title: n,
    subtitle: r,
    navigationIcon: o,
    actions: a,
    elevated: c = !1,
    contextual: s = !1,
    sticky: d = !1,
    fixed: u = !1,
    color: f = "surface",
    onNavigationClick: p,
    className: m,
    children: h,
    ...w
  }, v) => {
    const g = j[e];
    return e === "small" ? /* @__PURE__ */ l(
      "header",
      {
        ref: v,
        role: "banner",
        "data-elevated": c,
        "data-contextual": s,
        "data-sticky": d,
        "data-fixed": u,
        "data-color": f,
        "data-align": t,
        className: `${j.appBar} ${g} ${m || ""}`,
        ...w,
        children: /* @__PURE__ */ P("div", { className: j.smallContent, children: [
          o && /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              className: j.navigationIcon,
              onClick: p,
              "aria-label": "Navigation",
              children: o
            }
          ),
          n && /* @__PURE__ */ l("h1", { className: j.title, children: n }),
          h,
          a && /* @__PURE__ */ l("div", { className: j.actions, children: a })
        ] })
      }
    ) : e === "medium" ? /* @__PURE__ */ l(
      "header",
      {
        ref: v,
        role: "banner",
        "data-elevated": c,
        "data-contextual": s,
        "data-sticky": d,
        "data-fixed": u,
        "data-color": f,
        className: `${j.appBar} ${g} ${m || ""}`,
        ...w,
        children: /* @__PURE__ */ P("div", { className: j.mediumContent, children: [
          /* @__PURE__ */ P("div", { className: j.mediumTopRow, children: [
            o && /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                className: j.navigationIcon,
                onClick: p,
                "aria-label": "Navigation",
                children: o
              }
            ),
            /* @__PURE__ */ l("div", { style: { flex: 1 } }),
            a && /* @__PURE__ */ l("div", { className: j.actions, children: a })
          ] }),
          /* @__PURE__ */ P("div", { className: j.mediumBottomRow, children: [
            n && /* @__PURE__ */ l("h1", { className: j.title, children: n }),
            r && /* @__PURE__ */ l("p", { className: j.subtitle, children: r }),
            h
          ] })
        ] })
      }
    ) : /* @__PURE__ */ l(
      "header",
      {
        ref: v,
        role: "banner",
        "data-elevated": c,
        "data-contextual": s,
        "data-sticky": d,
        "data-fixed": u,
        "data-color": f,
        className: `${j.appBar} ${g} ${m || ""}`,
        ...w,
        children: /* @__PURE__ */ P("div", { className: j.largeContent, children: [
          /* @__PURE__ */ P("div", { className: j.largeTopRow, children: [
            o && /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                className: j.navigationIcon,
                onClick: p,
                "aria-label": "Navigation",
                children: o
              }
            ),
            /* @__PURE__ */ l("div", { style: { flex: 1 } }),
            a && /* @__PURE__ */ l("div", { className: j.actions, children: a })
          ] }),
          /* @__PURE__ */ P("div", { className: j.largeBottomRow, children: [
            n && /* @__PURE__ */ l("h1", { className: j.title, children: n }),
            r && /* @__PURE__ */ l("p", { className: j.subtitle, children: r }),
            h
          ] })
        ] })
      }
    );
  }
);
gv.displayName = "TopAppBar";
const wv = i.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l(
    "button",
    {
      ref: r,
      type: "button",
      className: `${j.action} ${e || ""}`,
      ...n,
      children: t
    }
  )
);
wv.displayName = "AppBarAction";
function sh(e = {}) {
  const { threshold: t = 0, target: n = null } = e, [r, o] = i.useState(!1), [a, c] = i.useState(!1), s = i.useRef(0);
  return i.useEffect(() => {
    const d = n || window, u = () => {
      const f = n ? n.scrollTop : window.scrollY;
      o(f > t), f > s.current && f > 100 ? c(!0) : f < s.current && c(!1), s.current = f;
    };
    return d.addEventListener("scroll", u, { passive: !0 }), () => d.removeEventListener("scroll", u);
  }, [t, n]), { elevated: r, collapsed: a };
}
const yv = "navBar", bv = "items", Cv = "item", Nv = "activeIndicator", xv = "icon", Rv = "iconFilled", _v = "iconOutlined", Ev = "label", Sv = "badge", Tv = "badgeLabel", fe = {
  navBar: yv,
  items: bv,
  item: Cv,
  activeIndicator: Nv,
  icon: xv,
  iconFilled: Rv,
  iconOutlined: _v,
  label: Ev,
  badge: Sv,
  badgeLabel: Tv
}, Iv = i.forwardRef(
  ({
    value: e,
    onChange: t,
    labelVisibility: n = "labeled",
    expressive: r = !1,
    layout: o = "vertical",
    className: a,
    children: c,
    ...s
  }, d) => {
    const u = i.Children.map(c, (f) => i.isValidElement(f) ? i.cloneElement(f, {
      active: f.props.value === e,
      onClick: () => {
        var p, m;
        (m = (p = f.props).onClick) == null || m.call(p), f.props.value !== void 0 && (t == null || t(f.props.value));
      }
    }) : f);
    return /* @__PURE__ */ l(
      "nav",
      {
        ref: d,
        role: "navigation",
        "data-expressive": r,
        "data-layout": o,
        "data-label-visibility": n,
        className: `${fe.navBar} ${a || ""}`,
        ...s,
        children: /* @__PURE__ */ l("ul", { className: fe.items, role: "menubar", children: u })
      }
    );
  }
);
Iv.displayName = "BottomNavigation";
const Pv = i.forwardRef(
  ({
    value: e,
    label: t,
    icon: n,
    iconFilled: r,
    active: o = !1,
    badge: a,
    showLabel: c = !0,
    onClick: s,
    href: d,
    className: u,
    ...f
  }, p) => {
    const m = !!d, h = /* @__PURE__ */ P($e, { children: [
      a !== void 0 && /* @__PURE__ */ l(
        "span",
        {
          className: fe.badge,
          "data-size": a > 0 ? "large" : "small",
          "aria-label": a > 0 ? `${a} notifications` : "notification",
          children: a > 0 && /* @__PURE__ */ l("span", { className: fe.badgeLabel, children: a > 99 ? "99+" : a })
        }
      ),
      /* @__PURE__ */ l("span", { className: fe.activeIndicator, children: /* @__PURE__ */ P("span", { className: fe.icon, children: [
        r && /* @__PURE__ */ l("span", { className: fe.iconFilled, children: r }),
        /* @__PURE__ */ l("span", { className: r ? fe.iconOutlined : void 0, children: n })
      ] }) }),
      /* @__PURE__ */ l("span", { className: fe.label, children: t })
    ] });
    return m ? /* @__PURE__ */ l(
      "li",
      {
        ref: p,
        role: "none",
        "data-active": o,
        "data-show-label": c,
        className: `${fe.item} ${u || ""}`,
        ...f,
        children: /* @__PURE__ */ l(
          "a",
          {
            href: d,
            role: "menuitem",
            "aria-current": o ? "page" : void 0,
            onClick: (w) => {
              s == null || s();
            },
            style: { display: "contents" },
            children: h
          }
        )
      }
    ) : /* @__PURE__ */ l(
      "li",
      {
        ref: p,
        role: "menuitem",
        tabIndex: 0,
        "aria-selected": o,
        "data-active": o,
        "data-show-label": c,
        className: `${fe.item} ${u || ""}`,
        onClick: s,
        onKeyDown: (w) => {
          (w.key === "Enter" || w.key === " ") && (w.preventDefault(), s == null || s());
        },
        ...f,
        children: h
      }
    );
  }
);
Pv.displayName = "BottomNavigationItem";
const za = i.createContext(null);
function ft() {
  const e = i.useContext(za);
  if (!e)
    throw new Error("useNavigationRail must be used within NavigationRailProvider");
  return e;
}
function ch({
  children: e,
  defaultExpanded: t = !1,
  storageKey: n = "navigation-rail-expanded"
}) {
  const [r, o] = i.useState(t), [a, c] = i.useState(!1);
  i.useEffect(() => {
    if (typeof window > "u") return;
    const d = localStorage.getItem(n);
    d !== null && o(d === "true");
  }, [n]), i.useEffect(() => {
    typeof window > "u" || localStorage.setItem(n, String(r));
  }, [r, n]);
  const s = i.useCallback(() => {
    o((d) => !d);
  }, []);
  return /* @__PURE__ */ l(za.Provider, { value: { expanded: r, setExpanded: o, mobileOpen: a, setMobileOpen: c, toggle: s }, children: e });
}
const Mv = i.forwardRef(
  ({ className: e, children: t, collapsedWidth: n, expandedWidth: r, style: o, ...a }, c) => {
    const { expanded: s, mobileOpen: d } = ft(), u = {
      ...o,
      ...n && { "--rail-width-collapsed": n },
      ...r && { "--rail-width-expanded": r }
    };
    return /* @__PURE__ */ l(
      "nav",
      {
        ref: c,
        className: $("ui-navigation-rail", e),
        "data-expanded": s,
        "data-mobile-open": d,
        role: "navigation",
        "aria-label": "Main navigation",
        style: u,
        ...a,
        children: t
      }
    );
  }
);
Mv.displayName = "NavigationRail";
const Av = i.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l(
    "header",
    {
      ref: r,
      className: $("ui-navigation-rail__header", e),
      ...n,
      children: t
    }
  )
);
Av.displayName = "NavigationRailHeader";
const Dv = i.forwardRef(
  ({ className: e, icon: t, label: n, ...r }, o) => /* @__PURE__ */ P(
    "button",
    {
      ref: o,
      className: $("ui-navigation-rail__fab", e),
      type: "button",
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ l("span", { className: "ui-navigation-rail__fab-label", children: n })
      ]
    }
  )
);
Dv.displayName = "NavigationRailFAB";
const Ov = i.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l(
    "div",
    {
      ref: r,
      className: $("ui-navigation-rail__content", e),
      ...n,
      children: t
    }
  )
);
Ov.displayName = "NavigationRailContent";
const $v = i.forwardRef(
  ({ className: e, children: t, label: n, ...r }, o) => /* @__PURE__ */ P(
    "div",
    {
      ref: o,
      className: $("ui-navigation-rail__group", e),
      ...r,
      children: [
        n && /* @__PURE__ */ l("span", { className: "ui-navigation-rail__group-label", children: n }),
        t
      ]
    }
  )
);
$v.displayName = "NavigationRailGroup";
const kv = i.forwardRef(
  ({ className: e, children: t, active: n, icon: r, badge: o, asChild: a, onClick: c, ...s }, d) => {
    const { setMobileOpen: u } = ft(), f = (p) => {
      u(!1), c == null || c(p);
    };
    return a && i.isValidElement(t) ? i.cloneElement(t, {
      ref: d,
      className: $("ui-navigation-rail__item", e, t.props.className),
      "data-active": n,
      onClick: f,
      ...s,
      children: /* @__PURE__ */ P($e, { children: [
        r && /* @__PURE__ */ l("span", { className: "ui-navigation-rail__item-icon", children: r }),
        /* @__PURE__ */ l("span", { className: "ui-navigation-rail__item-label", children: t.props.children }),
        o !== void 0 && /* @__PURE__ */ l("span", { className: "ui-navigation-rail__badge", children: o })
      ] })
    }) : /* @__PURE__ */ P(
      "div",
      {
        ref: d,
        className: $("ui-navigation-rail__item", e),
        "data-active": n,
        onClick: f,
        role: "button",
        tabIndex: 0,
        ...s,
        children: [
          r && /* @__PURE__ */ l("span", { className: "ui-navigation-rail__item-icon", children: r }),
          /* @__PURE__ */ l("span", { className: "ui-navigation-rail__item-label", children: t }),
          o !== void 0 && /* @__PURE__ */ l("span", { className: "ui-navigation-rail__badge", children: o })
        ]
      }
    );
  }
);
kv.displayName = "NavigationRailItem";
const Lv = i.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ l(
    "div",
    {
      ref: n,
      className: $("ui-navigation-rail__divider", e),
      role: "separator",
      ...t
    }
  )
);
Lv.displayName = "NavigationRailDivider";
const Fv = i.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l(
    "footer",
    {
      ref: r,
      className: $("ui-navigation-rail__footer", e),
      ...n,
      children: t
    }
  )
);
Fv.displayName = "NavigationRailFooter";
const Bv = i.forwardRef(
  ({ className: e, avatarUrl: t, avatarFallback: n, name: r, email: o, onClick: a, ...c }, s) => /* @__PURE__ */ P(
    "div",
    {
      ref: s,
      className: $("ui-navigation-rail__user", e),
      onClick: a,
      role: a ? "button" : void 0,
      tabIndex: a ? 0 : void 0,
      ...c,
      children: [
        /* @__PURE__ */ l("div", { className: "ui-navigation-rail__avatar", children: t ? /* @__PURE__ */ l("img", { src: t, alt: r || "User" }) : n || "?" }),
        /* @__PURE__ */ P("div", { className: "ui-navigation-rail__user-info", children: [
          /* @__PURE__ */ l("span", { className: "ui-navigation-rail__user-name", children: r || "Guest" }),
          o && /* @__PURE__ */ l("span", { className: "ui-navigation-rail__user-email", children: o })
        ] })
      ]
    }
  )
);
Bv.displayName = "NavigationRailUser";
const Vv = i.forwardRef(
  ({ className: e, icon: t, ...n }, r) => {
    const { expanded: o, toggle: a } = ft();
    return /* @__PURE__ */ l(
      "button",
      {
        ref: r,
        className: $("ui-navigation-rail__toggle", e),
        onClick: a,
        "aria-label": o ? "Collapse navigation" : "Expand navigation",
        ...n,
        children: t || /* @__PURE__ */ l("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ l("polyline", { points: "9 18 15 12 9 6" }) })
      }
    );
  }
);
Vv.displayName = "NavigationRailToggle";
const Wv = i.forwardRef(
  ({ className: e, onClick: t, ...n }, r) => {
    const { mobileOpen: o, setMobileOpen: a } = ft();
    return o ? /* @__PURE__ */ l(
      "div",
      {
        ref: r,
        className: $("ui-navigation-rail__overlay", e),
        onClick: (c) => {
          a(!1), t == null || t(c);
        },
        ...n
      }
    ) : null;
  }
);
Wv.displayName = "NavigationRailOverlay";
const Hv = i.forwardRef(
  ({ className: e, openIcon: t, closeIcon: n, ...r }, o) => {
    const { mobileOpen: a, setMobileOpen: c } = ft(), s = /* @__PURE__ */ P("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ l("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
      /* @__PURE__ */ l("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
      /* @__PURE__ */ l("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
    ] }), d = /* @__PURE__ */ P("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ l("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ l("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ] });
    return /* @__PURE__ */ l(
      "button",
      {
        ref: o,
        className: $("ui-navigation-rail__mobile-trigger", e),
        onClick: () => c(!a),
        "aria-label": "Toggle navigation",
        ...r,
        children: a ? n || d : t || s
      }
    );
  }
);
Hv.displayName = "NavigationRailTrigger";
const Uv = i.forwardRef(
  ({ children: e, flush: t, tight: n, as: r = "section", className: o, ...a }, c) => {
    const s = [
      "ui-section",
      t && "ui-section--flush",
      n && "ui-section--tight",
      o
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l(r, { ref: c, className: s, ...a, children: e });
  }
);
Uv.displayName = "Section";
const Kv = i.forwardRef(
  ({ children: e, fluid: t, narrow: n, className: r, ...o }, a) => {
    const c = [
      "ui-container",
      t && "ui-container--fluid",
      n && "ui-container--narrow",
      r
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { ref: a, className: c, ...o, children: e });
  }
);
Kv.displayName = "Container";
const Gv = i.forwardRef(
  ({
    children: e,
    gap: t,
    gutter: n,
    containerWidth: r,
    showArrows: o = !1,
    snap: a = !0,
    hideScrollbar: c = !0,
    fadeEdges: s = !1,
    className: d,
    style: u,
    ...f
  }, p) => {
    const m = i.useRef(null), h = i.useRef(null), [w, v] = i.useState(!1), [g, y] = i.useState(!0);
    i.useImperativeHandle(p, () => m.current);
    const C = i.useCallback(() => {
      const x = m.current;
      if (!x) return;
      const E = x.scrollLeft > 1, M = x.scrollLeft < x.scrollWidth - x.clientWidth - 1;
      v(E), y(M), h.current && s && (h.current.dataset.canScrollLeft = String(E), h.current.dataset.canScrollRight = String(M));
    }, [s]);
    i.useEffect(() => {
      const x = m.current;
      if (!x) return;
      C(), x.addEventListener("scroll", C, { passive: !0 });
      const E = new ResizeObserver(C);
      return E.observe(x), () => {
        x.removeEventListener("scroll", C), E.disconnect();
      };
    }, [C]);
    const b = (x) => {
      const E = m.current;
      if (!E) return;
      const M = E.firstElementChild, D = (M == null ? void 0 : M.offsetWidth) || E.clientWidth * 0.8, O = Math.min(D * 2, E.clientWidth * 0.85);
      E.scrollBy({
        left: x === "left" ? -O : O,
        behavior: "smooth"
      });
    }, N = [
      "ui-breakout-carousel-wrapper",
      s && "ui-breakout-carousel-wrapper--fade-edges"
    ].filter(Boolean).join(" "), R = [
      "ui-breakout-carousel",
      a === !0 && "ui-breakout-carousel--snap",
      a === "proximity" && "ui-breakout-carousel--snap-proximity",
      c && "ui-breakout-carousel--no-scrollbar",
      d
    ].filter(Boolean).join(" "), _ = {
      "--carousel-gap": t,
      "--carousel-gutter": n,
      "--carousel-container-width": r,
      ...u
    };
    return /* @__PURE__ */ P("div", { ref: h, className: N, children: [
      /* @__PURE__ */ l(
        "div",
        {
          ref: m,
          className: R,
          style: _,
          ...f,
          children: e
        }
      ),
      o && /* @__PURE__ */ P($e, { children: [
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            className: "ui-breakout-carousel__arrow ui-breakout-carousel__arrow--left",
            onClick: () => b("left"),
            disabled: !w,
            "aria-label": "Scroll left",
            children: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ l("path", { d: "M15 18l-6-6 6-6" }) })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            className: "ui-breakout-carousel__arrow ui-breakout-carousel__arrow--right",
            onClick: () => b("right"),
            disabled: !g,
            "aria-label": "Scroll right",
            children: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ l("path", { d: "M9 18l6-6-6-6" }) })
          }
        )
      ] })
    ] });
  }
);
Gv.displayName = "BreakoutCarousel";
const zv = i.forwardRef(
  ({ children: e, width: t, className: n, style: r, ...o }, a) => {
    const c = [
      "ui-breakout-carousel__item",
      n
    ].filter(Boolean).join(" "), s = {
      "--carousel-item-width": t,
      ...r
    };
    return /* @__PURE__ */ l("div", { ref: a, className: c, style: s, ...o, children: e });
  }
);
zv.displayName = "BreakoutCarouselItem";
export {
  wv as AppBarAction,
  Iv as BottomNavigation,
  Pv as BottomNavigationItem,
  Gv as BreakoutCarousel,
  zv as BreakoutCarouselItem,
  ti as Button,
  ri as Card,
  pi as CardActions,
  ci as CardBadge,
  fi as CardContent,
  li as CardHeader,
  ui as CardHeadline,
  ai as CardHeroBackground,
  si as CardHeroContent,
  oi as CardMedia,
  ii as CardScrim,
  di as CardSubhead,
  $i as Chip,
  ki as ChipGroup,
  Ta as CircularProgress,
  Kv as Container,
  Zv as Dialog,
  Ec as DialogActions,
  Jv as DialogClose,
  Cc as DialogContent,
  _c as DialogDescription,
  Nc as DialogHeader,
  xc as DialogIcon,
  ao as DialogOverlay,
  bc as DialogPortal,
  Rc as DialogTitle,
  Qv as DialogTrigger,
  Dc as Divider,
  Oc as DividerWithText,
  Yc as FAB,
  il as IconButton,
  Sa as LinearProgress,
  xl as List,
  Rl as ListItem,
  Sl as ListItemAvatar,
  El as ListItemIcon,
  Tl as ListItemImage,
  Pl as ListItemTrailingIcon,
  Il as ListItemTrailingText,
  _l as ListSubheader,
  eh as Menu,
  ap as MenuCheckboxItem,
  rp as MenuContent,
  nh as MenuGroup,
  op as MenuItem,
  cp as MenuLabel,
  th as MenuPortal,
  rh as MenuRadioGroup,
  ip as MenuRadioItem,
  sp as MenuSeparator,
  oh as MenuSub,
  up as MenuSubContent,
  lp as MenuSubTrigger,
  np as MenuTrigger,
  Mv as NavigationRail,
  Ov as NavigationRailContent,
  Lv as NavigationRailDivider,
  Dv as NavigationRailFAB,
  Fv as NavigationRailFooter,
  $v as NavigationRailGroup,
  Av as NavigationRailHeader,
  kv as NavigationRailItem,
  Wv as NavigationRailOverlay,
  ch as NavigationRailProvider,
  Vv as NavigationRailToggle,
  Hv as NavigationRailTrigger,
  Bv as NavigationRailUser,
  ah as ProgressIndicator,
  nm as RangeSlider,
  Vp as SearchBar,
  Up as SearchSectionHeader,
  Hp as SearchSuggestion,
  Wp as SearchView,
  Uv as Section,
  tm as Slider,
  Am as Snackbar,
  Om as SnackbarAction,
  $m as SnackbarClose,
  Dm as SnackbarMessage,
  ih as SnackbarProvider,
  Mm as SnackbarViewport,
  ev as TextField,
  gv as TopAppBar,
  ei as buttonVariants,
  ni as cardVariants,
  Oi as chipVariants,
  $ as cn,
  jc as fabVariants,
  al as iconButtonVariants,
  Jm as textFieldVariants,
  sh as useAppBarScroll,
  ft as useNavigationRail
};
