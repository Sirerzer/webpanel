(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    153: function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return o
        }
        ));
        var n = a(2);
        const r = ()=>Object(n.useStoreActions)((e=>e.flashes))
          , o = e=>{
            const {addFlash: t, clearFlashes: a, clearAndAddHttpError: n} = r();
            return {
                addError: (a,n)=>t({
                    key: e,
                    message: a,
                    title: n,
                    type: "error"
                }),
                clearFlashes: ()=>a(e),
                clearAndAddHttpError: t=>n({
                    key: e,
                    error: t
                })
            }
        }
        ;
        t.a = r
    },
    154: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return E
        }
        )),
        a.d(t, "b", (function() {
            return w
        }
        ));
        var n, r, o, i = a(19), c = a.n(i), l = a(7), s = a.n(l), d = a(0), m = a.n(d), p = a(161), u = a.n(p);
        !function(e) {
            e[e.Default = 0] = "Default",
            e[e.IconSquare = 1] = "IconSquare"
        }(n || (n = {})),
        function(e) {
            e[e.Default = 0] = "Default",
            e[e.Small = 1] = "Small",
            e[e.Large = 2] = "Large"
        }(r || (r = {})),
        function(e) {
            e[e.Primary = 0] = "Primary",
            e[e.Secondary = 1] = "Secondary"
        }(o || (o = {}));
        const b = {
            Shape: n,
            Size: r,
            Variant: o
        };
        var g = a(54)
          , h = a.n(g)
          , y = a(309)
          , f = {
            insert: "head",
            singleton: !1
        }
          , w = (h()(y.a, f),
        y.a.locals || {});
        const v = Object(d.forwardRef)(((e,t)=>{
            let {children: a, shape: n, size: r, variant: o, className: i} = e
              , l = s()(e, ["children", "shape", "size", "variant", "className"]);
            return m.a.createElement("button", c()({
                ref: t,
                className: u()(w.button, w.primary, {
                    [w.secondary]: o === b.Variant.Secondary,
                    [w.square]: n === b.Shape.IconSquare,
                    [w.small]: r === b.Size.Small,
                    [w.large]: r === b.Size.Large
                }, i)
            }, l), a)
        }
        ))
          , O = Object(d.forwardRef)(((e,t)=>{
            let {className: a} = e
              , n = s()(e, ["className"]);
            return m.a.createElement(v, c()({
                ref: t,
                className: u()(w.text, a)
            }, n))
        }
        ))
          , _ = Object(d.forwardRef)(((e,t)=>{
            let {className: a} = e
              , n = s()(e, ["className"]);
            return m.a.createElement(v, c()({
                ref: t,
                className: u()(w.danger, a)
            }, n))
        }
        ));
        var E = Object.assign(v, {
            Sizes: b.Size,
            Shapes: b.Shape,
            Variants: b.Variant,
            Text: O,
            Danger: _
        })
    },
    156: function(e, t, a) {
        "use strict";
        var n = a(0)
          , r = a.n(n)
          , o = a(195)
          , i = a(34)
          , c = a.n(i);
        const l = e=>{
            let {action: t, matchAny: a=!1, renderOnError: n, children: i} = e;
            const c = Object(o.a)(t);
            return r.a.createElement(r.a.Fragment, null, a && c.filter((e=>e)).length > 0 || !a && c.every((e=>e)) ? i : n)
        }
        ;
        t.a = Object(n.memo)(l, c.a)
    },
    157: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return u
        }
        ));
        var n = a(10)
          , r = a.n(n)
          , o = a(1);
        function i() {
            const e = r()(["\n    // Reset to normal styling.\n    resize: none;\n    ", ";\n    ", ";\n    ", ";\n\n    & + .input-help {\n        ", ";\n        ", ";\n    }\n\n    &:required,\n    &:invalid {\n        ", ";\n    }\n\n    &:not(:disabled):not(:read-only):focus {\n        ", ";\n        ", ";\n    }\n\n    &:disabled {\n        ", ";\n    }\n\n    ", ";\n    ", ";\n"]);
            return i = function() {
                return e
            }
            ,
            e
        }
        function c() {
            const e = r()(["\n    ", ";\n    color-adjust: exact;\n    background-origin: border-box;\n    transition: all 75ms linear, box-shadow 25ms linear;\n\n    &:checked {\n        ", ";\n        background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\");\n        background-color: currentColor;\n        background-size: 100% 100%;\n    }\n\n    &:focus {\n        ", ";\n        box-shadow: 0 0 0 1px rgba(9, 103, 210, 0.25);\n    }\n"]);
            return c = function() {
                return e
            }
            ,
            e
        }
        function l() {
            const e = r()(["\n    ", ";\n    &:focus {\n        ", "\n    }\n\n    &:disabled {\n        ", ";\n    }\n"]);
            return l = function() {
                return e
            }
            ,
            e
        }
        const s = Object(o.b)(l(), {
            "--tw-bg-opacity": "1",
            backgroundColor: "rgba(255, 255, 255, var(--tw-bg-opacity))",
            "--tw-border-opacity": "1",
            borderColor: "hsla(210, 16%, 82%, var(--tw-border-opacity))",
            "--tw-text-opacity": "1",
            color: "hsla(209, 20%, 25%, var(--tw-text-opacity))"
        }, {
            "--tw-border-opacity": "1",
            borderColor: "rgba(96, 165, 250, var(--tw-border-opacity))"
        }, {
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(214, 15%, 91%, var(--tw-bg-opacity))",
            "--tw-border-opacity": "1",
            borderColor: "hsla(210, 16%, 82%, var(--tw-border-opacity))"
        })
          , d = Object(o.b)(c(), {
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(211, 12%, 43%, var(--tw-bg-opacity))",
            cursor: "pointer",
            appearance: "none",
            display: "inline-block",
            verticalAlign: "middle",
            userSelect: "none",
            flexShrink: "0",
            width: "1rem",
            height: "1rem",
            "--tw-text-opacity": "1",
            color: "rgba(96, 165, 250, var(--tw-text-opacity))",
            borderWidth: "1px",
            "--tw-border-opacity": "1",
            borderColor: "hsla(211, 13%, 65%, var(--tw-border-opacity))",
            borderRadius: "0.125rem"
        }, {
            borderColor: "rgba(0, 0, 0, 0)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }, {
            outline: "2px solid transparent",
            outlineOffset: "2px",
            "--tw-border-opacity": "1",
            borderColor: "rgba(147, 197, 253, var(--tw-border-opacity))"
        })
          , m = Object(o.b)(i(), {
            appearance: "none",
            outline: "2px solid transparent",
            outlineOffset: "2px",
            width: "100%",
            minWidth: "0px"
        }, {
            padding: "0.75rem",
            borderWidth: "2px",
            borderRadius: "0.25rem",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms"
        }, {
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 14%, 37%, var(--tw-bg-opacity))",
            "--tw-border-opacity": "1",
            borderColor: "hsla(211, 12%, 43%, var(--tw-border-opacity))",
            ":hover": {
                "--tw-border-opacity": "1",
                borderColor: "hsla(211, 10%, 53%, var(--tw-border-opacity))"
            },
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))",
            "--tw-shadow": "0 0 #0000",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            ":focus": {
                "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                boxShadow: "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"
            }
        }, {
            marginTop: "0.25rem",
            fontSize: "0.75rem",
            lineHeight: "1rem"
        }, (e=>e.hasError ? {
            "--tw-text-opacity": "1",
            color: "rgba(254, 202, 202, var(--tw-text-opacity))"
        } : {
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))"
        }), {
            "--tw-shadow": "0 0 #0000",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
        }, {
            "--tw-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            boxShadow: "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
            "--tw-border-opacity": "1",
            borderColor: "rgba(147, 197, 253, var(--tw-border-opacity))",
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "--tw-ring-opacity": "0.5",
            "--tw-ring-color": "rgba(96, 165, 250, var(--tw-ring-opacity))"
        }, (e=>e.hasError && {
            "--tw-border-opacity": "1",
            borderColor: "rgba(252, 165, 165, var(--tw-border-opacity))",
            "--tw-ring-opacity": "1",
            "--tw-ring-color": "rgba(254, 202, 202, var(--tw-ring-opacity))"
        }), {
            opacity: "0.75"
        }, (e=>e.isLight && s), (e=>e.hasError && {
            "--tw-text-opacity": "1",
            color: "rgba(254, 226, 226, var(--tw-text-opacity))",
            "--tw-border-opacity": "1",
            borderColor: "rgba(248, 113, 113, var(--tw-border-opacity))",
            ":hover": {
                "--tw-border-opacity": "1",
                borderColor: "rgba(252, 165, 165, var(--tw-border-opacity))"
            }
        }))
          , p = o.c.input.withConfig({
            displayName: "Input",
            componentId: "sc-19rce1w-0"
        })(["&:not([type='checkbox']):not([type='radio']){", ";}&[type='checkbox'],&[type='radio']{", ";&[type='radio']{", ";}}"], m, d, {
            borderRadius: "9999px"
        })
          , u = o.c.textarea.withConfig({
            displayName: "Input__Textarea",
            componentId: "sc-19rce1w-1"
        })(["", ""], m);
        t.b = p
    },
    158: function(e, t, a) {
        "use strict";
        var n = a(19)
          , r = a.n(n)
          , o = a(7)
          , i = a.n(o)
          , c = a(0)
          , l = a.n(c)
          , s = a(155)
          , d = a(157)
          , m = a(170);
        const p = Object(c.forwardRef)(((e,t)=>{
            let {id: a, name: n, light: o=!1, label: c, description: p, validate: u} = e
              , b = i()(e, ["id", "name", "light", "label", "description", "validate"]);
            return l.a.createElement(s.a, {
                innerRef: t,
                name: n,
                validate: u
            }, (e=>{
                let {field: t, form: {errors: n, touched: i}} = e;
                return l.a.createElement("div", null, c && l.a.createElement(m.a, {
                    htmlFor: a,
                    isLight: o
                }, c), l.a.createElement(d.b, r()({
                    id: a
                }, t, b, {
                    isLight: o,
                    hasError: !(!i[t.name] || !n[t.name])
                })), i[t.name] && n[t.name] ? l.a.createElement("p", {
                    className: "input-help error"
                }, n[t.name].charAt(0).toUpperCase() + n[t.name].slice(1)) : p ? l.a.createElement("p", {
                    className: "input-help"
                }, p) : null)
            }
            ))
        }
        ));
        p.displayName = "Field",
        t.a = p
    },
    159: function(e, t, a) {
        "use strict";
        var n = a(1)
          , r = a(0)
          , o = a.n(r)
          , i = a(24)
          , c = a(171);
        t.a = e=>{
            let {size: t, fixed: a, visible: n, backgroundOpacity: r, children: d} = e;
            return o.a.createElement(c.a, {
                timeout: 150,
                in: n,
                unmountOnExit: !0
            }, o.a.createElement(l, {
                style: {
                    background: "rgba(0, 0, 0, ".concat(r || .45, ")")
                },
                $_css: [{
                    top: "0px",
                    left: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.25rem",
                    flexDirection: "column",
                    zIndex: "40"
                }, a ? {
                    position: "fixed"
                } : {
                    position: "absolute"
                }]
            }, o.a.createElement(i.a, {
                size: t
            }), d && ("string" == typeof d ? o.a.createElement(s, null, d) : d)))
        }
        ;
        var l = Object(n.c)("div").withConfig({
            displayName: "SpinnerOverlay___StyledDiv",
            componentId: "sc-ee99c1-0"
        })(["", ""], (e=>e.$_css))
          , s = Object(n.c)("p").withConfig({
            displayName: "SpinnerOverlay___StyledP",
            componentId: "sc-ee99c1-1"
        })({
            marginTop: "1rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))"
        })
    },
    164: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return j
        }
        )),
        a.d(t, "b", (function() {
            return w
        }
        )),
        a.d(t, "c", (function() {
            return v
        }
        )),
        a.d(t, "d", (function() {
            return S
        }
        ));
        var n = a(0)
          , r = a.n(n)
          , o = a(398)
          , i = a(154)
          , c = a(178)
          , l = a(281);
        const s = {
            open: {
                scale: 1,
                opacity: 1,
                transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 300,
                    duration: .15
                }
            },
            closed: {
                scale: .75,
                opacity: 0,
                transition: {
                    type: "easeIn",
                    duration: .15
                }
            },
            bounce: {
                scale: .95,
                opacity: 1,
                transition: {
                    type: "linear",
                    duration: .075
                }
            }
        };
        var d = a(226)
          , m = a(208)
          , p = a(161)
          , u = a.n(p);
        const b = {
            danger: m.f,
            warning: m.d,
            success: m.a,
            info: m.e
        };
        var g = a(19)
          , h = a.n(g)
          , y = a(7)
          , f = a.n(y);
        const w = r.a.createContext({
            setIcon: ()=>null,
            setFooter: ()=>null,
            setIconPosition: ()=>null
        })
          , v = r.a.createContext({
            props: {},
            setProps: ()=>null,
            close: ()=>null
        });
        var O = a(54)
          , _ = a.n(O)
          , E = a(310)
          , x = {
            insert: "head",
            singleton: !1
        }
          , S = (_()(E.a, x),
        E.a.locals || {});
        const j = Object.assign((e=>{
            let {open: t, title: a, description: d, onClose: m, hideCloseIcon: p, preventExternalClose: u, children: b} = e;
            const g = Object(n.useRef)(null)
              , [h,y] = Object(n.useState)()
              , [f,v] = Object(n.useState)()
              , [O,_] = Object(n.useState)("title")
              , [E,x] = Object(n.useState)(!1)
              , j = (e,t)=>{
                var a;
                t.target instanceof HTMLElement && (null === (a = g.current) || void 0 === a ? void 0 : a.isSameNode(t.target)) && x(e)
            }
            ;
            return r.a.createElement(l.a, null, t && r.a.createElement(w.Provider, {
                value: {
                    setIcon: y,
                    setFooter: v,
                    setIconPosition: _
                }
            }, r.a.createElement(o.a, {
                static: !0,
                as: l.b.div,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .15
                },
                open: t,
                onClose: ()=>{
                    if (!u)
                        return m()
                }
            }, r.a.createElement("div", {
                className: "fixed inset-0 bg-gray-900/50 z-40"
            }), r.a.createElement("div", {
                className: "fixed inset-0 overflow-y-auto z-50"
            }, r.a.createElement("div", {
                ref: g,
                className: S.container,
                onMouseDown: j.bind(void 0, !0),
                onMouseUp: j.bind(void 0, !1)
            }, r.a.createElement(o.a.Panel, {
                as: l.b.div,
                initial: "closed",
                animate: E ? "bounce" : "open",
                exit: "closed",
                variants: s,
                className: S.panel
            }, r.a.createElement("div", {
                className: "flex p-6 pb-0 overflow-y-auto"
            }, "container" === O && h, r.a.createElement("div", {
                className: "flex-1 max-h-[70vh] min-w-0"
            }, r.a.createElement("div", {
                className: "flex items-center"
            }, "container" !== O && h, r.a.createElement("div", null, a && r.a.createElement(o.a.Title, {
                className: S.title
            }, a), d && r.a.createElement(o.a.Description, null, d))), b, r.a.createElement("div", {
                className: "invisible h-6"
            }))), f, !p && r.a.createElement("div", {
                className: "absolute right-0 top-0 m-4"
            }, r.a.createElement(i.a.Text, {
                size: i.a.Sizes.Small,
                shape: i.a.Shapes.IconSquare,
                onClick: m,
                className: "group"
            }, r.a.createElement(c.i, {
                className: S.close_icon
            })))))))))
        }
        ), {
            Confirm: e=>{
                let {confirm: t="Okay", children: a, onConfirmed: n} = e
                  , o = f()(e, ["confirm", "children", "onConfirmed"]);
                return r.a.createElement(j, h()({}, o, {
                    description: "string" == typeof a ? a : void 0
                }), "string" != typeof a && a, r.a.createElement(j.Footer, null, r.a.createElement(i.a.Text, {
                    onClick: o.onClose
                }, "Cancel"), r.a.createElement(i.a.Danger, {
                    onClick: n
                }, t)))
            }
            ,
            Footer: e=>{
                let {children: t} = e;
                const {setFooter: a} = Object(n.useContext)(w);
                return Object(d.a)((()=>{
                    a(r.a.createElement("div", {
                        className: "px-6 py-3 bg-gray-700 flex items-center justify-end space-x-3 rounded-b"
                    }, t))
                }
                ), [t]),
                null
            }
            ,
            Icon: e=>{
                let {type: t, position: a, className: o} = e;
                const {setIcon: i, setIconPosition: c} = Object(n.useContext)(w);
                return Object(n.useEffect)((()=>{
                    const e = b[t];
                    i(r.a.createElement("div", {
                        className: u()(S.dialog_icon, S[t], o)
                    }, r.a.createElement(e, {
                        className: "w-6 h-6"
                    })))
                }
                ), [t, o]),
                Object(n.useEffect)((()=>{
                    c(a)
                }
                ), [a]),
                null
            }
        })
    },
    165: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return f
        }
        ));
        var n = a(7)
          , r = a.n(n)
          , o = a(10)
          , i = a.n(o)
          , c = a(1)
          , l = a(0)
          , s = a.n(l)
          , d = a(24)
          , m = a(61)
          , p = a(171)
          , u = a(21);
        function b() {
            const e = i()(["margin-top: 10%"]);
            return b = function() {
                return e
            }
            ,
            e
        }
        function g() {
            const e = i()(["\n            margin-top: 20%;\n            ", ";\n        "]);
            return g = function() {
                return e
            }
            ,
            e
        }
        function h() {
            const e = i()(["max-width: 50%"]);
            return h = function() {
                return e
            }
            ,
            e
        }
        function y() {
            const e = i()(["max-width: 75%"]);
            return y = function() {
                return e
            }
            ,
            e
        }
        const f = c.c.div.withConfig({
            displayName: "Modal__ModalMask",
            componentId: "sc-9vzni8-0"
        })(["", ";background:rgba(0,0,0,0.7);"], {
            position: "fixed",
            zIndex: "50",
            overflow: "auto",
            display: "flex",
            width: "100%",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px"
        })
          , w = c.c.div.withConfig({
            displayName: "Modal__ModalContainer",
            componentId: "sc-9vzni8-1"
        })(["max-width:95%;max-height:calc(100vh - 8rem);", ";", ";", ";", ";margin-bottom:auto;& > .close-icon{", ";top:-2.5rem;&:hover{", "}& > svg{", ";}}"], Object(m.a)("md")(y()), Object(m.a)("lg")(h()), {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            margin: "auto"
        }, (e=>e.alignTop && Object(c.b)(g(), Object(m.a)("md")(b()))), {
            position: "absolute",
            right: "0px",
            padding: "0.5rem",
            "--tw-text-opacity": "1",
            color: "rgba(255, 255, 255, var(--tw-text-opacity))",
            cursor: "pointer",
            opacity: "0.5",
            transitionProperty: "all",
            transitionTimingFunction: "linear",
            transitionDuration: "150ms",
            ":hover": {
                opacity: "1"
            }
        }, {
            transform: "var(--tw-transform)",
            "--tw-rotate": "90deg"
        }, {
            width: "1.5rem",
            height: "1.5rem"
        })
          , v = e=>{
            let {visible: t, appear: a, dismissable: n, showSpinnerOverlay: r, top: o=!0, closeOnBackground: i=!0, closeOnEscape: c=!0, onDismissed: m, children: u} = e;
            const [b,g] = Object(l.useState)(t)
              , h = Object(l.useMemo)((()=>!r), [n, r]);
            return Object(l.useEffect)((()=>{
                if (!h || !c)
                    return;
                const e = e=>{
                    "Escape" === e.key && g(!1)
                }
                ;
                return window.addEventListener("keydown", e),
                ()=>{
                    window.removeEventListener("keydown", e)
                }
            }
            ), [h, c, b]),
            Object(l.useEffect)((()=>g(t)), [t]),
            s.a.createElement(p.a, {
                in: b,
                timeout: 150,
                appear: a || !0,
                unmountOnExit: !0,
                onExited: ()=>m()
            }, s.a.createElement(f, {
                onClick: e=>e.stopPropagation(),
                onContextMenu: e=>e.stopPropagation(),
                onMouseDown: e=>{
                    h && i && (e.stopPropagation(),
                    e.target === e.currentTarget && g(!1))
                }
            }, s.a.createElement(w, {
                alignTop: o
            }, h && s.a.createElement("div", {
                className: "close-icon",
                onClick: ()=>g(!1)
            }, s.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, s.a.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M6 18L18 6M6 6l12 12"
            }))), r && s.a.createElement(p.a, {
                timeout: 150,
                appear: !0,
                in: !0
            }, s.a.createElement(O, {
                style: {
                    background: "hsla(211, 10%, 53%, 0.35)",
                    zIndex: 9999
                }
            }, s.a.createElement(d.a, null))), s.a.createElement(_, null, u))))
        }
        ;
        t.b = e=>{
            let {children: t} = e
              , a = r()(e, ["children"]);
            const n = Object(l.useRef)(document.getElementById("modal-portal"));
            return Object(u.createPortal)(s.a.createElement(v, a, t), n.current)
        }
        ;
        var O = Object(c.c)("div").withConfig({
            displayName: "Modal___StyledDiv",
            componentId: "sc-9vzni8-2"
        })({
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "0.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        })
          , _ = Object(c.c)("div").withConfig({
            displayName: "Modal___StyledDiv2",
            componentId: "sc-9vzni8-3"
        })({
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 20%, 25%, var(--tw-bg-opacity))",
            padding: "0.75rem",
            borderRadius: "0.25rem",
            "--tw-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            overflowY: "scroll",
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms",
            "@media (min-width: 640px)": {
                padding: "1rem"
            },
            "@media (min-width: 768px)": {
                padding: "1.5rem"
            }
        })
    },
    168: function(e, t, a) {
        "use strict";
        let n, r;
        a.d(t, "a", (function() {
            return n
        }
        )),
        a.d(t, "b", (function() {
            return r
        }
        )),
        function(e) {
            e.DAEMON_MESSAGE = "daemon message",
            e.DAEMON_ERROR = "daemon error",
            e.INSTALL_OUTPUT = "install output",
            e.INSTALL_STARTED = "install started",
            e.INSTALL_COMPLETED = "install completed",
            e.CONSOLE_OUTPUT = "console output",
            e.STATUS = "status",
            e.STATS = "stats",
            e.TRANSFER_LOGS = "transfer logs",
            e.TRANSFER_STATUS = "transfer status",
            e.BACKUP_COMPLETED = "backup completed",
            e.BACKUP_RESTORE_COMPLETED = "backup restore completed"
        }(n || (n = {})),
        function(e) {
            e.SEND_LOGS = "send logs",
            e.SEND_STATS = "send stats",
            e.SET_STATE = "set state"
        }(r || (r = {}))
    },
    170: function(e, t, a) {
        "use strict";
        const n = a(1).c.label.withConfig({
            displayName: "Label",
            componentId: "sc-g780ms-0"
        })(["", ";", ";"], {
            display: "block",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            textTransform: "uppercase",
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))",
            marginBottom: "0.25rem",
            "@media (min-width: 640px)": {
                marginBottom: "0.5rem"
            }
        }, (e=>e.isLight && {
            "--tw-text-opacity": "1",
            color: "hsla(209, 18%, 30%, var(--tw-text-opacity))"
        }));
        t.a = n
    },
    171: function(e, t, a) {
        "use strict";
        var n = a(19)
          , r = a.n(n)
          , o = a(7)
          , i = a.n(o)
          , c = a(1)
          , l = a(0)
          , s = a.n(l)
          , d = a(62);
        const m = c.c.div.withConfig({
            displayName: "Fade__Container",
            componentId: "sc-1p0gm8n-0"
        })([".fade-enter,.fade-exit,.fade-appear{will-change:opacity;}.fade-enter,.fade-appear{", ";&.fade-enter-active,&.fade-appear-active{", ";transition-duration:", "ms;}}.fade-exit{", ";&.fade-exit-active{", ";transition-duration:", "ms;}}"], {
            opacity: "0"
        }, {
            opacity: "1",
            transitionProperty: "opacity",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 1, 1)",
            transitionDuration: "150ms"
        }, (e=>e.timeout), {
            opacity: "1"
        }, {
            opacity: "0",
            transitionProperty: "opacity",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 1, 1)",
            transitionDuration: "150ms"
        }, (e=>e.timeout))
          , p = e=>{
            let {timeout: t, children: a} = e
              , n = i()(e, ["timeout", "children"]);
            return s.a.createElement(m, {
                timeout: t
            }, s.a.createElement(d.a, r()({
                timeout: t,
                classNames: "fade"
            }, n), a))
        }
        ;
        p.displayName = "Fade",
        t.a = p
    },
    175: function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return i
        }
        )),
        a.d(t, "c", (function() {
            return r
        }
        )),
        a.d(t, "a", (function() {
            return o
        }
        ));
        const n = 1024;
        function r(e) {
            return Math.floor(e * n * n)
        }
        function o(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            const a = n;
            if (e < 1)
                return "0 Bytes";
            t = Math.floor(Math.max(0, t));
            const r = Math.floor(Math.log(e) / Math.log(a))
              , o = Number((e / Math.pow(a, r)).toFixed(t));
            return "".concat(o, " ").concat(["Bytes", "KiB", "MiB", "GiB", "TiB"][r])
        }
        function i(e) {
            return /([a-f0-9:]+:+)+[a-f0-9]+/.test(e) ? "[".concat(e, "]") : e
        }
    },
    176: function(e, t, a) {
        "use strict";
        var n = a(19)
          , r = a.n(n)
          , o = a(5)
          , i = a.n(o)
          , c = a(7)
          , l = a.n(c)
          , s = a(0)
          , d = a.n(s)
          , m = a(401)
          , p = a(281)
          , u = a(161)
          , b = a.n(u);
        function g(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        const h = {
            top: "bottom-[-6px] left-0",
            bottom: "top-[-6px] left-0",
            right: "top-0 left-[-6px]",
            left: "top-0 right-[-6px]"
        };
        t.a = e=>{
            var t, a;
            let {children: n} = e
              , o = l()(e, ["children"]);
            const c = Object(s.useRef)(null)
              , [u,y] = Object(s.useState)(!1)
              , {x: f, y: w, reference: v, floating: O, middlewareData: _, strategy: E, context: x} = Object(m.h)({
                open: u,
                strategy: "fixed",
                placement: o.placement || "top",
                middleware: [Object(m.d)(o.arrow ? 10 : 6), Object(m.c)(), Object(m.e)({
                    padding: 6
                }), Object(m.a)({
                    element: c,
                    padding: 6
                })],
                onOpenChange: y,
                whileElementsMounted: m.b
            })
              , S = o.interactions || ["hover", "focus"]
              , {getReferenceProps: j, getFloatingProps: C} = Object(m.k)([Object(m.j)(x, {
                restMs: null !== (t = o.rest) && void 0 !== t ? t : 30,
                delay: null !== (a = o.delay) && void 0 !== a ? a : 0,
                enabled: S.includes("hover")
            }), Object(m.i)(x, {
                enabled: S.includes("focus")
            }), Object(m.f)(x, {
                enabled: S.includes("click")
            }), Object(m.l)(x, {
                role: "tooltip"
            }), Object(m.g)(x)])
              , k = h[(o.placement || "top").split("-")[0]]
              , {x: N, y: D} = _.arrow || {};
            return o.disabled ? n : d.a.createElement(d.a.Fragment, null, Object(s.cloneElement)(n, j(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(a), !0).forEach((function(t) {
                        i()(e, t, a[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : g(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                    ))
                }
                return e
            }({
                ref: v
            }, n.props))), d.a.createElement(p.a, null, u && d.a.createElement(p.b.div, r()({
                initial: {
                    opacity: 0,
                    scale: .85
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 300,
                    duration: .075
                }
            }, C({
                ref: O,
                className: "bg-gray-900 text-sm text-gray-200 px-3 py-2 rounded pointer-events-none max-w-[24rem]",
                style: {
                    position: E,
                    top: "".concat(w || 0, "px"),
                    left: "".concat(f || 0, "px")
                }
            })), o.content, o.arrow && d.a.createElement("div", {
                ref: c,
                style: {
                    transform: "translate(".concat(Math.round(N || 0), "px, ").concat(Math.round(D || 0), "px) rotate(45deg)")
                },
                className: b()("absolute bg-gray-900 w-3 h-3", k)
            }))))
        }
    },
    177: function(e, t, a) {
        "use strict";
        var n = a(1);
        t.a = n.c.div.withConfig({
            displayName: "GreyRowBox",
            componentId: "sc-1xo9c6v-0"
        })(["", ";", ";& .icon{", ";}"], {
            display: "flex",
            borderRadius: "0.25rem",
            textDecoration: "none",
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))",
            alignItems: "center",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 18%, 30%, var(--tw-bg-opacity))",
            padding: "1rem",
            borderWidth: "1px",
            borderColor: "rgba(0, 0, 0, 0)",
            transitionProperty: "background-color, border-color, color, fill, stroke",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms",
            overflow: "hidden"
        }, (e=>!1 !== e.$hoverable && {
            ":hover": {
                "--tw-border-opacity": "1",
                borderColor: "hsla(211, 12%, 43%, var(--tw-border-opacity))"
            }
        }), {
            borderRadius: "9999px",
            width: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(211, 12%, 43%, var(--tw-bg-opacity))",
            padding: "0.75rem"
        })
    },
    179: function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return l
        }
        ));
        var n = a(174)
          , r = a(17)
          , o = a(40)
          , i = a(29)
          , c = a(50);
        const l = (e,t)=>"".concat(e, ":files:").concat(t);
        t.a = ()=>{
            const e = c.a.useStoreState((e=>e.server.data.uuid))
              , t = c.a.useStoreState((e=>e.files.directory));
            return Object(n.a)(l(e, t), (()=>(async(e,t)=>{
                const {data: a} = await r.a.get("/api/client/servers/".concat(e, "/files/list"), {
                    params: {
                        directory: null != t ? t : "/"
                    }
                });
                return (a.data || []).map(o.a)
            }
            )(e, Object(i.a)(t))), {
                focusThrottleInterval: 3e4,
                revalidateOnMount: !1,
                refreshInterval: 0,
                errorRetryCount: 2
            })
        }
    },
    183: function(e, t, a) {
        "use strict";
        var n = a(0)
          , r = a.n(n)
          , o = a(155)
          , i = a(1)
          , c = a(252);
        var l = e=>{
            let {errors: t, touched: a, name: n, children: o} = e;
            return a[n] && t[n] ? r.a.createElement(s, null, "string" == typeof t[n] ? Object(c.a)(t[n]) : Object(c.a)(t[n][0])) : r.a.createElement(r.a.Fragment, null, o ? r.a.createElement(d, null, o) : null)
        }
          , s = Object(i.c)("p").withConfig({
            displayName: "InputError___StyledP",
            componentId: "sc-12bxu09-0"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "rgba(248, 113, 113, var(--tw-text-opacity))",
            paddingTop: "0.5rem"
        })
          , d = Object(i.c)("p").withConfig({
            displayName: "InputError___StyledP2",
            componentId: "sc-12bxu09-1"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
            paddingTop: "0.5rem"
        })
          , m = a(170);
        t.a = e=>{
            let {id: t, name: a, label: n, className: i, description: c, validate: s, children: d} = e;
            return r.a.createElement(o.a, {
                name: a,
                validate: s
            }, (e=>{
                let {field: a, form: {errors: o, touched: s}} = e;
                return r.a.createElement("div", {
                    className: "".concat(i, " ").concat(s[a.name] && o[a.name] ? "has-error" : void 0)
                }, n && r.a.createElement(m.a, {
                    htmlFor: t
                }, n), d, r.a.createElement(l, {
                    errors: o,
                    touched: s,
                    name: a.name
                }, c || null))
            }
            ))
        }
    },
    186: function(e, t, a) {
        "use strict";
        var n = a(10)
          , r = a.n(n)
          , o = a(1);
        function i() {
            const e = r()(["\n            ", ";\n            background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='%23C3D1DF' d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/%3e%3c/svg%3e \");\n\n            &:hover:not(:disabled),\n            &:focus {\n                ", ";\n            }\n        "]);
            return i = function() {
                return e
            }
            ,
            e
        }
        const c = o.c.select.withConfig({
            displayName: "Select",
            componentId: "sc-17exaqp-0"
        })(["", ";&,&:hover:not(:disabled),&:focus{", ";}-webkit-appearance:none;-moz-appearance:none;background-size:1rem;background-repeat:no-repeat;background-position-x:calc(100% - 0.75rem);background-position-y:center;&::-ms-expand{display:none;}", ";"], {
            "--tw-shadow": "0 0 #0000",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            display: "block",
            padding: "0.75rem",
            paddingRight: "2rem",
            borderRadius: "0.25rem",
            borderWidth: "1px",
            width: "100%",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            transitionProperty: "background-color, border-color, color, fill, stroke",
            transitionTimingFunction: "linear",
            transitionDuration: "150ms"
        }, {
            outline: "2px solid transparent",
            outlineOffset: "2px"
        }, (e=>!e.hideDropdownArrow && Object(o.b)(i(), {
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 14%, 37%, var(--tw-bg-opacity))",
            "--tw-border-opacity": "1",
            borderColor: "hsla(211, 12%, 43%, var(--tw-border-opacity))",
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))"
        }, {
            "--tw-border-opacity": "1",
            borderColor: "hsla(211, 10%, 53%, var(--tw-border-opacity))"
        })));
        t.a = c
    },
    187: function(e, t, a) {
        "use strict";
        var n = a(50)
          , r = a(0);
        t.a = (e,t)=>{
            const {connected: a, instance: o} = n.a.useStoreState((e=>e.socket))
              , i = Object(r.useRef)(null);
            return Object(r.useEffect)((()=>{
                i.current = t
            }
            ), [t]),
            Object(r.useEffect)((()=>{
                const t = e=>i.current(e);
                return a && o && o.addListener(e, t),
                ()=>{
                    o && o.removeListener(e, t)
                }
            }
            ), [e, a, o])
        }
    },
    188: function(e, t, a) {
        "use strict";
        var n = a(0);
        const r = a.n(n).a.createContext({
            dismiss: ()=>null,
            setPropOverrides: ()=>null
        });
        r.displayName = "ModalContext",
        t.a = r
    },
    194: function(e, t, a) {
        "use strict";
        var n = a(10)
          , r = a.n(n)
          , o = a(1)
          , i = a(0)
          , c = a.n(i)
          , l = a(24)
          , s = a(171)
          , d = a(186);
        function m() {
            const e = r()(["\n            & ", " {\n                background-image: none;\n            }\n        "]);
            return m = function() {
                return e
            }
            ,
            e
        }
        const p = o.c.div.withConfig({
            displayName: "InputSpinner__Container",
            componentId: "sc-1ynug7t-0"
        })(["", ";", ";"], {
            position: "relative"
        }, (e=>e.visible && Object(o.b)(m(), d.a)));
        t.a = e=>{
            let {visible: t, children: a} = e;
            return c.a.createElement(p, {
                visible: t
            }, c.a.createElement(s.a, {
                appear: !0,
                unmountOnExit: !0,
                in: t,
                timeout: 150
            }, c.a.createElement(u, null, c.a.createElement(l.a, {
                size: "small"
            }))), a)
        }
        ;
        var u = Object(o.c)("div").withConfig({
            displayName: "InputSpinner___StyledDiv",
            componentId: "sc-1ynug7t-1"
        })({
            position: "absolute",
            right: "0px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "0.75rem"
        })
    },
    195: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return o
        }
        ));
        var n = a(50)
          , r = a(224);
        const o = e=>{
            const t = n.a.useStoreState((e=>e.server.permissions));
            return Object(r.a)((()=>"*" === t[0] ? Array(Array.isArray(e) ? e.length : 1).fill(!0) : (Array.isArray(e) ? e : [e]).map((e=>e.endsWith(".*") && t.filter((t=>t.startsWith(e.split(".")[0]))).length > 0 || t.indexOf(e) >= 0))), [e, t])
        }
    },
    196: function(e, t, a) {
        "use strict";
        var n = a(19)
          , r = a.n(n)
          , o = a(5)
          , i = a.n(o)
          , c = a(0)
          , l = a.n(c)
          , s = a(165)
          , d = a(188)
          , m = a(34)
          , p = a.n(m);
        function u(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(a), !0).forEach((function(t) {
                    i()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        t.a = function(e) {
            return function(t) {
                var a;
                return a = class extends l.a.PureComponent {
                    constructor(e) {
                        super(e),
                        i()(this, "dismiss", (()=>this.setState({
                            visible: !1
                        }))),
                        i()(this, "setPropOverrides", (e=>this.setState((t=>({
                            propOverrides: e ? "function" == typeof e ? e(t.propOverrides) : e : {}
                        }))))),
                        this.state = {
                            render: e.visible,
                            visible: e.visible,
                            propOverrides: {}
                        }
                    }
                    get computedModalProps() {
                        return b(b(b({}, "function" == typeof e ? e(this.props) : e), this.state.propOverrides), {}, {
                            visible: this.state.visible
                        })
                    }
                    componentDidUpdate(e, t) {
                        e.visible && !this.props.visible ? this.setState({
                            visible: !1,
                            propOverrides: {}
                        }) : !e.visible && this.props.visible && this.setState({
                            render: !0,
                            visible: !0
                        }),
                        this.state.render || p()(t.propOverrides, this.state.propOverrides) || this.setState({
                            propOverrides: {}
                        })
                    }
                    render() {
                        return this.state.render ? l.a.createElement(s.b, r()({
                            appear: !0,
                            onDismissed: ()=>this.setState({
                                render: !1
                            }, (()=>{
                                "function" == typeof this.props.onModalDismissed && this.props.onModalDismissed()
                            }
                            ))
                        }, this.computedModalProps), l.a.createElement(d.a.Provider, {
                            value: {
                                dismiss: this.dismiss.bind(this),
                                setPropOverrides: this.setPropOverrides.bind(this)
                            }
                        }, l.a.createElement(t, this.props))) : null
                    }
                }
                ,
                i()(a, "displayName", "asModal(".concat(t.displayName, ")")),
                a
            }
        }
    },
    200: function(e, t, a) {
        "use strict";
        var n = a(0);
        t.a = (e,t,a)=>{
            const r = Object(n.useRef)(null);
            Object(n.useEffect)((()=>{
                r.current = t
            }
            ), [t]),
            Object(n.useEffect)((()=>{
                if (!(window && window.addEventListener))
                    return;
                const t = e=>r.current(e);
                return window.addEventListener(e, t, a),
                ()=>{
                    window.removeEventListener(e, t)
                }
            }
            ), [e, window])
        }
    },
    204: function(e, t, a) {
        "use strict";
        var n = a(1)
          , r = a(0)
          , o = a.n(r)
          , i = a(399)
          , c = a(170)
          , l = a(157);
        const s = n.c.div.withConfig({
            displayName: "Switch__ToggleContainer",
            componentId: "sc-1nxt82m-0"
        })(["", ";& > input[type='checkbox']{", ";&:checked + label{", ";}&:checked + label:before{right:0.125rem;}}& > label{", ";transition:all 75ms linear;&::before{", ";top:0.125rem;right:calc(50% + 0.125rem);content:'';transition:all 75ms ease-in;}}"], {
            position: "relative",
            userSelect: "none",
            width: "3rem",
            lineHeight: "1.5"
        }, {
            display: "none"
        }, {
            "--tw-bg-opacity": "1",
            backgroundColor: "rgba(59, 130, 246, var(--tw-bg-opacity))",
            "--tw-border-opacity": "1",
            borderColor: "rgba(29, 78, 216, var(--tw-border-opacity))",
            "--tw-shadow": "0 0 #0000",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
        }, {
            marginBottom: "0px",
            display: "block",
            overflow: "hidden",
            cursor: "pointer",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(211, 10%, 53%, var(--tw-bg-opacity))",
            borderWidth: "1px",
            "--tw-border-opacity": "1",
            borderColor: "hsla(209, 18%, 30%, var(--tw-border-opacity))",
            borderRadius: "9999px",
            height: "1.5rem",
            "--tw-shadow": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
        }, {
            position: "absolute",
            display: "block",
            "--tw-bg-opacity": "1",
            backgroundColor: "rgba(255, 255, 255, var(--tw-bg-opacity))",
            borderWidth: "1px",
            height: "1.25rem",
            width: "1.25rem",
            borderRadius: "9999px"
        });
        var d = Object(n.c)(s).withConfig({
            displayName: "Switch___StyledToggleContainer",
            componentId: "sc-1nxt82m-1"
        })(["", ""], (e=>e.$_css2));
        t.a = e=>{
            let {name: t, label: a, description: n, defaultChecked: s, readOnly: g, onChange: h, children: y} = e;
            const f = Object(r.useMemo)((()=>Object(i.a)()), []);
            return o.a.createElement(m, {
                $_css: {
                    display: "flex",
                    alignItems: "center"
                }
            }, o.a.createElement(d, {
                $_css2: {
                    flex: "none"
                }
            }, y || o.a.createElement(l.b, {
                id: f,
                name: t,
                type: "checkbox",
                onChange: e=>h && h(e),
                defaultChecked: s,
                disabled: g
            }), o.a.createElement(c.a, {
                htmlFor: f
            })), (a || n) && o.a.createElement(p, {
                $_css3: {
                    marginLeft: "1rem",
                    width: "100%"
                }
            }, a && o.a.createElement(u, {
                htmlFor: f,
                $_css4: [{
                    cursor: "pointer"
                }, !!n && {
                    marginBottom: "0px"
                }]
            }, a), n && o.a.createElement(b, {
                $_css5: {
                    "--tw-text-opacity": "1",
                    color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    marginTop: "0.5rem"
                }
            }, n)))
        }
        ;
        var m = Object(n.c)("div").withConfig({
            displayName: "Switch___StyledDiv",
            componentId: "sc-1nxt82m-2"
        })(["", ""], (e=>e.$_css))
          , p = Object(n.c)("div").withConfig({
            displayName: "Switch___StyledDiv2",
            componentId: "sc-1nxt82m-3"
        })(["", ""], (e=>e.$_css3))
          , u = Object(n.c)(c.a).withConfig({
            displayName: "Switch___StyledLabel",
            componentId: "sc-1nxt82m-4"
        })(["", ""], (e=>e.$_css4))
          , b = Object(n.c)("p").withConfig({
            displayName: "Switch___StyledP",
            componentId: "sc-1nxt82m-5"
        })(["", ""], (e=>e.$_css5))
    },
    205: function(e, t, a) {
        "use strict";
        a.d(t, "c", (function() {
            return r
        }
        )),
        a.d(t, "b", (function() {
            return o
        }
        ));
        var n = a(17);
        const r = e=>({
            id: e.id,
            sequenceId: e.sequence_id,
            action: e.action,
            payload: e.payload,
            timeOffset: e.time_offset,
            isQueued: e.is_queued,
            continueOnFailure: e.continue_on_failure,
            createdAt: new Date(e.created_at),
            updatedAt: new Date(e.updated_at)
        })
          , o = e=>{
            var t, a;
            return {
                id: e.id,
                name: e.name,
                cron: {
                    dayOfWeek: e.cron.day_of_week,
                    month: e.cron.month,
                    dayOfMonth: e.cron.day_of_month,
                    hour: e.cron.hour,
                    minute: e.cron.minute
                },
                isActive: e.is_active,
                isProcessing: e.is_processing,
                onlyWhenOnline: e.only_when_online,
                lastRunAt: e.last_run_at ? new Date(e.last_run_at) : null,
                nextRunAt: e.next_run_at ? new Date(e.next_run_at) : null,
                createdAt: new Date(e.created_at),
                updatedAt: new Date(e.updated_at),
                tasks: ((null === (t = e.relationships) || void 0 === t || null === (a = t.tasks) || void 0 === a ? void 0 : a.data) || []).map((e=>r(e.attributes)))
            }
        }
        ;
        t.a = async e=>{
            const {data: t} = await n.a.get("/api/client/servers/".concat(e, "/schedules"), {
                params: {
                    include: ["tasks"]
                }
            });
            return (t.data || []).map((e=>o(e.attributes)))
        }
    },
    224: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return o
        }
        ));
        var n = a(0)
          , r = a(225);
        const o = (e,t)=>Object(n.useMemo)(e, Object(r.a)(t))
    },
    225: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return i
        }
        ));
        var n = a(0)
          , r = a(34)
          , o = a.n(r);
        const i = e=>{
            const t = Object(n.useRef)();
            return o()(e, t.current) || (t.current = e),
            t.current
        }
    },
    226: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return o
        }
        ));
        var n = a(0)
          , r = a(225);
        const o = (e,t)=>Object(n.useEffect)(e, Object(r.a)(t))
    },
    227: function(e, t, a) {
        "use strict";
        var n = a(19)
          , r = a.n(n)
          , o = a(7)
          , i = a.n(o)
          , c = a(0)
          , l = a.n(c)
          , s = a(183)
          , d = a(155)
          , m = a(204);
        t.a = e=>{
            let {name: t, label: a} = e
              , n = i()(e, ["name", "label"]);
            return l.a.createElement(s.a, {
                name: t
            }, l.a.createElement(d.a, {
                name: t
            }, (e=>{
                let {field: o, form: i} = e;
                return l.a.createElement(m.a, r()({
                    name: t,
                    label: a,
                    onChange: ()=>{
                        i.setFieldTouched(t),
                        i.setFieldValue(o.name, !o.value)
                    }
                    ,
                    defaultChecked: o.value
                }, n))
            }
            )))
        }
    },
    228: function(e, t, a) {
        "use strict";
        var n = a(5)
          , r = a.n(n)
          , o = a(174)
          , i = a(17)
          , c = a(40);
        function l(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        t.a = (e,t,a)=>Object(o.a)([e, "/startup"], (async()=>{
            const {data: t} = await i.a.get("/api/client/servers/".concat(e, "/startup"));
            return {
                variables: (t.data || []).map(c.d),
                invocation: t.meta.startup_command,
                dockerImages: t.meta.docker_images || {}
            }
        }
        ), function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(a), !0).forEach((function(t) {
                    r()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }({
            initialData: t || void 0,
            errorRetryCount: 3
        }, a || {}))
    },
    229: function(e, t, a) {
        "use strict";
        a(269);
        var n = a(230);
        a.d(t, "Transformers", (function() {
            return n.a
        }
        ))
    },
    230: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return i
        }
        ));
        var n = a(5)
          , r = a.n(n)
          , o = a(231);
        class i {
        }
        r()(i, "toSSHKey", (e=>({
            name: e.name,
            publicKey: e.public_key,
            fingerprint: e.fingerprint,
            createdAt: new Date(e.created_at)
        }))),
        r()(i, "toUser", (e=>{
            let {attributes: t} = e;
            return {
                uuid: t.uuid,
                username: t.username,
                email: t.email,
                image: t.image,
                twoFactorEnabled: t["2fa_enabled"],
                permissions: t.permissions || [],
                createdAt: new Date(t.created_at),
                can(e) {
                    return this.permissions.includes(e)
                }
            }
        }
        )),
        r()(i, "toActivityLog", (e=>{
            var t;
            let {attributes: a} = e;
            const {actor: n} = a.relationships || {};
            return {
                id: a.id,
                batch: a.batch,
                event: a.event,
                ip: a.ip,
                isApi: a.is_api,
                description: a.description,
                properties: a.properties,
                hasAdditionalMetadata: null !== (t = a.has_additional_metadata) && void 0 !== t && t,
                timestamp: new Date(a.timestamp),
                relationships: {
                    actor: Object(o.b)(n, i.toUser, null)
                }
            }
        }
        ))
    },
    231: function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return o
        }
        )),
        a.d(t, "a", (function() {
            return i
        }
        ));
        var n = a(17);
        const r = e=>"list" === e.object;
        function o(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return null == e ? a : r(e) ? e.data.map(t) : e && e.attributes && "null_resource" !== e.object ? t(e) : a
        }
        function i(e, t) {
            return {
                items: o(e, t),
                pagination: Object(n.b)(e.meta.pagination)
            }
        }
    },
    252: function(e, t, a) {
        "use strict";
        function n(e) {
            return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
        }
        a.d(t, "a", (function() {
            return n
        }
        ))
    },
    253: function(e, t, a) {
        "use strict";
        var n = a(5)
          , r = a.n(n)
          , o = a(7)
          , i = a.n(o)
          , c = a(80)
          , l = a(17);
        function s(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(a), !0).forEach((function(t) {
                    r()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        t.a = e=>{
            let {query: t} = e
              , a = i()(e, ["query"]);
            return new Promise(((e,n)=>{
                l.a.get("/api/client", {
                    params: d({
                        "filter[*]": t
                    }, a)
                }).then((t=>{
                    let {data: a} = t;
                    return e({
                        items: (a.data || []).map((e=>Object(c.b)(e))),
                        pagination: Object(l.b)(a.meta.pagination)
                    })
                }
                )).catch(n)
            }
            ))
        }
    },
    254: function(e, t, a) {
        "use strict";
        var n = a(19)
          , r = a.n(n)
          , o = a(7)
          , i = a.n(o)
          , c = a(0)
          , l = a.n(c)
          , s = a(298)
          , d = a.n(s)
          , m = a(58);
        const p = ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#587291"]
          , u = e=>{
            let {variant: t="beam"} = e
              , a = i()(e, ["variant"]);
            return l.a.createElement(d.a, r()({
                colors: p,
                variant: t
            }, a))
        }
          , b = e=>{
            let {variant: t="beam"} = e
              , a = i()(e, ["variant"]);
            const n = Object(m.b)((e=>{
                var t;
                return null === (t = e.user.data) || void 0 === t ? void 0 : t.uuid
            }
            ));
            return l.a.createElement(d.a, r()({
                colors: p,
                name: n || "system",
                variant: t
            }, a))
        }
        ;
        u.displayName = "Avatar",
        b.displayName = "Avatar.User";
        const g = Object.assign(u, {
            User: b
        });
        t.a = g
    },
    255: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return r
        }
        ));
        var n = a(0);
        function r(e, t) {
            const [a,r] = Object(n.useState)((()=>{
                try {
                    const a = localStorage.getItem(e);
                    return JSON.parse(a || String(t))
                } catch (e) {
                    return console.warn("Failed to retrieve persisted value from store.", e),
                    t
                }
            }
            ));
            return Object(n.useEffect)((()=>{
                localStorage.setItem(e, JSON.stringify(a))
            }
            ), [e, a]),
            [a, r]
        }
    },
    256: function(e, t, a) {
        "use strict";
        var n = a(1)
          , r = a(0)
          , o = a.n(r)
          , i = a(52)
          , c = a(53)
          , l = a(27);
        const s = Object(n.c)(i.a).withConfig({
            displayName: "Pagination__Block",
            componentId: "sc-7j9cqz-0"
        })(["", " &:not(:last-of-type){", ";}"], {
            padding: "0px",
            width: "2.5rem",
            height: "2.5rem"
        }, {
            marginRight: "0.5rem"
        });
        t.a = function(e) {
            let {data: {items: t, pagination: a}, onPageSelect: n, children: r} = e;
            const i = 1 === a.currentPage
              , m = a.currentPage >= a.totalPages
              , p = []
              , u = Math.max(a.currentPage - 2, 1)
              , b = Math.min(a.totalPages, a.currentPage + 5);
            for (let e = u; e <= b; e++)
                p.push(e);
            return o.a.createElement(o.a.Fragment, null, r({
                items: t,
                isFirstPage: i,
                isLastPage: m
            }), p.length > 1 && o.a.createElement(d, null, p[0] > 1 && !i && o.a.createElement(s, {
                isSecondary: !0,
                color: "primary",
                onClick: ()=>n(1)
            }, o.a.createElement(c.a, {
                icon: l.a
            })), p.map((e=>o.a.createElement(s, {
                isSecondary: a.currentPage !== e,
                color: "primary",
                key: "block_page_".concat(e),
                onClick: ()=>n(e)
            }, e))), p[4] < a.totalPages && !m && o.a.createElement(s, {
                isSecondary: !0,
                color: "primary",
                onClick: ()=>n(a.totalPages)
            }, o.a.createElement(c.a, {
                icon: l.b
            }))))
        }
        ;
        var d = Object(n.c)("div").withConfig({
            displayName: "Pagination___StyledDiv",
            componentId: "sc-7j9cqz-1"
        })({
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center"
        })
    },
    257: function(e, t, a) {
        "use strict";
        var n = a(1)
          , r = a(0)
          , o = a.n(r)
          , i = a(15)
          , c = a(35)
          , l = a(171);
        const s = Object(n.c)(c.b).withConfig({
            displayName: "TransitionRouter__StyledSwitchTransition",
            componentId: "sc-gq6nqv-0"
        })(["", ";& section{", ";}"], {
            position: "relative"
        }, {
            position: "absolute",
            width: "100%",
            top: "0px",
            left: "0px"
        });
        t.a = e=>{
            let {children: t} = e;
            return o.a.createElement(i.b, {
                render: e=>{
                    let {location: a} = e;
                    return o.a.createElement(s, null, o.a.createElement(l.a, {
                        timeout: 150,
                        key: a.pathname + a.search,
                        in: !0,
                        appear: !0,
                        unmountOnExit: !0
                    }, o.a.createElement("section", null, t)))
                }
            })
        }
    },
    258: function(e, t, a) {
        "use strict";
        const n = a(1).c.div.withConfig({
            displayName: "SubNavigation",
            componentId: "sc-lfuaoi-0"
        })(["", ";& > div{", ";max-width:1200px;& > a,& > div{", ";&:not(:first-of-type){", ";}&:hover{", ";}&:active,&.active{", ";box-shadow:inset 0 -2px ", ";}}}"], {
            width: "100%",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 18%, 30%, var(--tw-bg-opacity))",
            "--tw-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            overflowX: "auto"
        }, {
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem"
        }, {
            display: "inline-block",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms"
        }, {
            marginLeft: "0.5rem"
        }, {
            "--tw-text-opacity": "1",
            color: "hsla(214, 15%, 91%, var(--tw-text-opacity))"
        }, {
            "--tw-text-opacity": "1",
            color: "hsla(214, 15%, 91%, var(--tw-text-opacity))"
        }, "#0891b2".toString());
        t.a = n
    },
    260: function(e, t, a) {
        "use strict";
        var n = a(0)
          , r = a.n(n)
          , o = a(161)
          , i = a.n(o);
        t.a = e=>{
            let {cron: t, className: a} = e;
            return r.a.createElement("div", {
                className: i()("flex", a)
            }, r.a.createElement("div", {
                className: "w-1/5 sm:w-auto text-center"
            }, r.a.createElement("p", {
                className: "font-medium"
            }, t.minute), r.a.createElement("p", {
                className: "text-2xs text-neutral-500 uppercase"
            }, "Minute")), r.a.createElement("div", {
                className: "w-1/5 sm:w-auto text-center ml-4"
            }, r.a.createElement("p", {
                className: "font-medium"
            }, t.hour), r.a.createElement("p", {
                className: "text-2xs text-neutral-500 uppercase"
            }, "Hour")), r.a.createElement("div", {
                className: "w-1/5 sm:w-auto text-center ml-4"
            }, r.a.createElement("p", {
                className: "font-medium"
            }, t.dayOfMonth), r.a.createElement("p", {
                className: "text-2xs text-neutral-500 uppercase"
            }, "Day (Month)")), r.a.createElement("div", {
                className: "w-1/5 sm:w-auto text-center ml-4"
            }, r.a.createElement("p", {
                className: "font-medium"
            }, t.month), r.a.createElement("p", {
                className: "text-2xs text-neutral-500 uppercase"
            }, "Month")), r.a.createElement("div", {
                className: "w-1/5 sm:w-auto text-center ml-4"
            }, r.a.createElement("p", {
                className: "font-medium"
            }, t.dayOfWeek), r.a.createElement("p", {
                className: "text-2xs text-neutral-500 uppercase"
            }, "Day (Week)")))
        }
    },
    261: function(e, t, a) {
        "use strict";
        var n = a(1)
          , r = a(0)
          , o = a.n(r)
          , i = a(52)
          , c = a(196)
          , l = a(188);
        const s = e=>{
            let {title: t, children: a, buttonText: n, onConfirmed: i} = e;
            const {dismiss: c} = Object(r.useContext)(l.a);
            return o.a.createElement(o.a.Fragment, null, o.a.createElement(d, null, t), o.a.createElement(m, null, a), o.a.createElement(p, null, o.a.createElement(u, {
                isSecondary: !0,
                onClick: ()=>c()
            }, "Cancel"), o.a.createElement(b, {
                color: "red",
                onClick: ()=>i()
            }, n)))
        }
        ;
        s.displayName = "ConfirmationModal",
        t.a = Object(c.a)((e=>({
            showSpinnerOverlay: e.showSpinnerOverlay
        })))(s);
        var d = Object(n.c)("h2").withConfig({
            displayName: "ConfirmationModal___StyledH",
            componentId: "sc-1sxt2cr-0"
        })({
            fontSize: "1.5rem",
            lineHeight: "2rem",
            marginBottom: "1.5rem"
        })
          , m = Object(n.c)("div").withConfig({
            displayName: "ConfirmationModal___StyledDiv",
            componentId: "sc-1sxt2cr-1"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , p = Object(n.c)("div").withConfig({
            displayName: "ConfirmationModal___StyledDiv2",
            componentId: "sc-1sxt2cr-2"
        })({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "2rem"
        })
          , u = Object(n.c)(i.a).withConfig({
            displayName: "ConfirmationModal___StyledButton",
            componentId: "sc-1sxt2cr-3"
        })({
            width: "100%",
            borderColor: "rgba(0, 0, 0, 0)",
            "@media (min-width: 640px)": {
                width: "auto"
            }
        })
          , b = Object(n.c)(i.a).withConfig({
            displayName: "ConfirmationModal___StyledButton2",
            componentId: "sc-1sxt2cr-4"
        })({
            width: "100%",
            marginTop: "1rem",
            "@media (min-width: 640px)": {
                width: "auto",
                marginTop: "0px",
                marginLeft: "1rem"
            }
        })
    },
    262: function(e, t, a) {
        "use strict";
        var n = a(17)
          , r = a(40);
        t.a = async(e,t,a)=>{
            const {data: o} = await n.a.put("/api/client/servers/".concat(e, "/startup/variable"), {
                key: t,
                value: a
            });
            return [Object(r.d)(o), o.meta.startup_command]
        }
    },
    263: function(e, t, a) {
        "use strict";
        var n = a(17);
        t.a = async(e,t)=>{
            await n.a.put("/api/client/servers/".concat(e, "/settings/docker-image"), {
                docker_image: t
            })
        }
    },
    264: function(e, t, a) {
        "use strict";
        var n = a(1)
          , r = a(0)
          , o = a.n(r)
          , i = a(50)
          , c = a(28)
          , l = a(29);
        t.a = e=>{
            let {renderLeft: t, withinFileEditor: a, isNewFile: n} = e;
            const [h,y] = Object(r.useState)(null)
              , f = i.a.useStoreState((e=>e.server.data.id))
              , w = i.a.useStoreState((e=>e.files.directory))
              , {hash: v} = Object(c.g)();
            Object(r.useEffect)((()=>{
                const e = Object(l.d)(v);
                if (a && !n) {
                    const t = e.split("/").pop() || null;
                    y(t)
                }
            }
            ), [a, n, v]);
            return o.a.createElement(s, null, t || o.a.createElement(d, null), "/", o.a.createElement(m, null, "home"), "/", o.a.createElement(p, {
                to: "/server/".concat(f, "/files")
            }, "container"), "/", w.split("/").filter((e=>!!e)).map(((e,t,n)=>a || t !== n.length - 1 ? {
                name: e,
                path: "/".concat(n.slice(0, t + 1).join("/"))
            } : {
                name: e
            })).map(((e,t)=>e.path ? o.a.createElement(o.a.Fragment, {
                key: t
            }, o.a.createElement(u, {
                to: "/server/".concat(f, "/files#").concat(Object(l.b)(e.path))
            }, e.name), "/") : o.a.createElement(b, {
                key: t
            }, e.name))), h && o.a.createElement(o.a.Fragment, null, o.a.createElement(g, null, h)))
        }
        ;
        var s = Object(n.c)("div").withConfig({
            displayName: "FileManagerBreadcrumbs___StyledDiv",
            componentId: "sc-1yfrkfk-0"
        })({
            display: "flex",
            flexGrow: "0",
            alignItems: "center",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
            overflowX: "hidden"
        })
          , d = Object(n.c)("div").withConfig({
            displayName: "FileManagerBreadcrumbs___StyledDiv2",
            componentId: "sc-1yfrkfk-1"
        })({
            width: "3rem"
        })
          , m = Object(n.c)("span").withConfig({
            displayName: "FileManagerBreadcrumbs___StyledSpan",
            componentId: "sc-1yfrkfk-2"
        })({
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , p = Object(n.c)(c.b).withConfig({
            displayName: "FileManagerBreadcrumbs___StyledNavLink",
            componentId: "sc-1yfrkfk-3"
        })({
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))",
            textDecoration: "none",
            ":hover": {
                "--tw-text-opacity": "1",
                color: "hsla(214, 15%, 91%, var(--tw-text-opacity))"
            }
        })
          , u = Object(n.c)(c.b).withConfig({
            displayName: "FileManagerBreadcrumbs___StyledNavLink2",
            componentId: "sc-1yfrkfk-4"
        })({
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))",
            textDecoration: "none",
            ":hover": {
                "--tw-text-opacity": "1",
                color: "hsla(214, 15%, 91%, var(--tw-text-opacity))"
            }
        })
          , b = Object(n.c)("span").withConfig({
            displayName: "FileManagerBreadcrumbs___StyledSpan2",
            componentId: "sc-1yfrkfk-5"
        })({
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , g = Object(n.c)("span").withConfig({
            displayName: "FileManagerBreadcrumbs___StyledSpan3",
            componentId: "sc-1yfrkfk-6"
        })({
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
    },
    269: function(e, t) {},
    282: function(e, t, a) {
        "use strict";
        var n = a(0)
          , r = a.n(n)
          , o = a(50)
          , i = a(156)
          , c = a(19)
          , l = a.n(c)
          , s = a(7)
          , d = a.n(s)
          , m = a(57);
        var p = e=>{
            let {title: t, children: a} = e
              , n = d()(e, ["title", "children"]);
            const i = o.a.useStoreState((e=>e.server.data.name));
            return r.a.createElement(m.a, l()({
                title: "".concat(i, " | ").concat(t)
            }, n), a)
        }
          , u = a(34)
          , b = a.n(u)
          , g = a(24);
        var h = {
            eula: Object(n.lazy)((()=>a.e(8).then(a.bind(null, 403)))),
            java_version: Object(n.lazy)((()=>a.e(11).then(a.bind(null, 404)))),
            gsl_token: Object(n.lazy)((()=>a.e(10).then(a.bind(null, 405)))),
            pid_limit: Object(n.lazy)((()=>a.e(12).then(a.bind(null, 406)))),
            steam_disk_space: Object(n.lazy)((()=>a.e(13).then(a.bind(null, 407))))
        };
        function y(e) {
            return "object" == typeof e && null !== e && !Array.isArray(e)
        }
        function f(e) {
            return Object.keys(e)
        }
        var w = e=>{
            let {enabled: t} = e;
            const a = Object(n.useMemo)((()=>f(h).filter((e=>t.map((e=>e.toLowerCase())).includes(e.toLowerCase()))).reduce(((e,t)=>[...e, [t, h[t]]]), [])), [t]);
            return r.a.createElement(r.a.Suspense, {
                fallback: null
            }, a.map((e=>{
                let[t,a] = e;
                return r.a.createElement(a, {
                    key: t
                })
            }
            )))
        }
          , v = a(5)
          , O = a.n(v)
          , _ = a(259)
          , E = a(300)
          , x = a(301)
          , S = a(302)
          , j = a(303);
        class C {
            constructor() {
                O()(this, "terminal", new _.Terminal),
                O()(this, "element", void 0)
            }
            activate(e) {
                this.terminal = e,
                this.terminal.onScroll((()=>{
                    this.isScrolledDown() && this.hide()
                }
                )),
                this.terminal.onLineFeed((()=>{
                    this.isScrolledDown() || this.show()
                }
                )),
                this.show()
            }
            dispose() {}
            show() {
                this.terminal && this.terminal.element && (this.element ? this.element.style.visibility = "visible" : (this.terminal.element.style.position = "relative",
                this.element = document.createElement("div"),
                this.element.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg>',
                this.element.style.position = "absolute",
                this.element.style.right = "1.5rem",
                this.element.style.bottom = ".5rem",
                this.element.style.padding = ".5rem",
                this.element.style.fontSize = "1.25em",
                this.element.style.boxShadow = "0 2px 8px #000",
                this.element.style.backgroundColor = "#252526",
                this.element.style.zIndex = "999",
                this.element.style.cursor = "pointer",
                this.element.addEventListener("click", (()=>{
                    this.terminal.scrollToBottom()
                }
                )),
                this.terminal.element.appendChild(this.element)))
            }
            hide() {
                this.element && (this.element.style.visibility = "hidden")
            }
            isScrolledDown() {
                return this.terminal.buffer.active.viewportY === this.terminal.buffer.active.baseY
            }
        }
        var k = a(159)
          , N = a(195)
          , D = a(200)
          , P = a(203)
          , I = a(255)
          , T = a(168)
          , F = a(161)
          , A = a.n(F)
          , R = a(178)
          , M = (a(304),
        a(54))
          , z = a.n(M)
          , B = a(306)
          , L = {
            insert: "head",
            singleton: !1
        }
          , H = (z()(B.a, L),
        B.a.locals || {});
        function W(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        const U = {
            disableStdin: !0,
            cursorStyle: "underline",
            allowTransparency: !0,
            fontSize: 12,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            rows: 30,
            theme: {
                background: "#131a20".toString(),
                cursor: "transparent",
                black: "#131a20".toString(),
                red: "#E54B4B",
                green: "#9ECE58",
                yellow: "#FAED70",
                blue: "#396FE2",
                magenta: "#BB80B3",
                cyan: "#2DDAFD",
                white: "#d0d0d0",
                brightBlack: "rgba(255, 255, 255, 0.2)",
                brightRed: "#FF5370",
                brightGreen: "#C3E88D",
                brightYellow: "#FFCB6B",
                brightBlue: "#82AAFF",
                brightMagenta: "#C792EA",
                brightCyan: "#89DDFF",
                brightWhite: "#ffffff",
                selection: "#FAF089"
            }
        };
        var K = ()=>{
            const e = "[1m[33mcontainer@pterodactyl~ [0m"
              , t = Object(n.useRef)(null)
              , a = Object(n.useMemo)((()=>new _.Terminal(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? W(Object(a), !0).forEach((function(t) {
                        O()(e, t, a[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : W(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                    ))
                }
                return e
            }({}, U))), [])
              , i = new E.FitAddon
              , c = new x.SearchAddon
              , l = new S.a({
                searchAddon: c
            })
              , s = new j.WebLinksAddon
              , d = new C
              , {connected: m, instance: p} = o.a.useStoreState((e=>e.socket))
              , [u] = Object(N.a)(["control.console"])
              , b = o.a.useStoreState((e=>e.server.data.id))
              , g = o.a.useStoreState((e=>e.server.data.isTransferring))
              , [h,y] = Object(I.a)("".concat(b, ":command_history"), [])
              , [f,w] = Object(n.useState)(-1)
              , v = function(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return a.writeln((n ? e : "") + t.replace(/(?:\r\n|\r|\n)$/im, "") + "[0m")
            }
              , F = t=>{
                "failure" !== t || a.writeln(e + "Transfer has failed.[0m")
            }
              , M = t=>a.writeln(e + "[1m[41m" + t.replace(/(?:\r\n|\r|\n)$/im, "") + "[0m")
              , z = t=>a.writeln(e + "Server marked as " + t + "...[0m");
            return Object(n.useEffect)((()=>{
                m && t.current && !a.element && (a.loadAddon(i),
                a.loadAddon(c),
                a.loadAddon(l),
                a.loadAddon(s),
                a.loadAddon(d),
                a.open(t.current),
                i.fit(),
                l.addNewStyle("\n    .xterm-search-bar__addon {\n        z-index: 10;\n    }"),
                a.attachCustomKeyEventHandler((e=>(e.ctrlKey || e.metaKey) && "c" === e.key ? (document.execCommand("copy"),
                !1) : (e.ctrlKey || e.metaKey) && "f" === e.key ? (e.preventDefault(),
                l.show(),
                !1) : ("Escape" === e.key && l.hidden(),
                !0))))
            }
            ), [a, m]),
            Object(D.a)("resize", Object(P.debounce)((()=>{
                a.element && i.fit()
            }
            ), 100)),
            Object(n.useEffect)((()=>{
                const e = {
                    [T.a.STATUS]: z,
                    [T.a.CONSOLE_OUTPUT]: v,
                    [T.a.INSTALL_OUTPUT]: v,
                    [T.a.TRANSFER_LOGS]: v,
                    [T.a.TRANSFER_STATUS]: F,
                    [T.a.DAEMON_MESSAGE]: e=>v(e, !0),
                    [T.a.DAEMON_ERROR]: M
                };
                return m && p && (g || a.clear(),
                Object.keys(e).forEach((t=>{
                    p.addListener(t, e[t])
                }
                )),
                p.send(T.b.SEND_LOGS)),
                ()=>{
                    p && Object.keys(e).forEach((t=>{
                        p.removeListener(t, e[t])
                    }
                    ))
                }
            }
            ), [m, p]),
            r.a.createElement("div", {
                className: A()(H.terminal, "relative")
            }, r.a.createElement(k.a, {
                visible: !m,
                size: "large"
            }), r.a.createElement("div", {
                className: A()(H.container, H.overflows_container, {
                    "rounded-b": !u
                })
            }, r.a.createElement("div", {
                className: "h-full"
            }, r.a.createElement("div", {
                id: H.terminal,
                ref: t
            }))), u && r.a.createElement("div", {
                className: A()("relative", H.overflows_container)
            }, r.a.createElement("input", {
                className: A()("peer", H.command_input),
                type: "text",
                placeholder: "Type a command...",
                "aria-label": "Console command input.",
                disabled: !p || !m,
                onKeyDown: e=>{
                    if ("ArrowUp" === e.key) {
                        const t = Math.min(f + 1, h.length - 1);
                        w(t),
                        e.currentTarget.value = h[t] || "",
                        e.preventDefault()
                    }
                    if ("ArrowDown" === e.key) {
                        const t = Math.max(f - 1, -1);
                        w(t),
                        e.currentTarget.value = h[t] || ""
                    }
                    const t = e.currentTarget.value;
                    "Enter" === e.key && t.length > 0 && (y((e=>[t, ...e].slice(0, 32))),
                    w(-1),
                    p && p.send("send command", t),
                    e.currentTarget.value = "")
                }
                ,
                autoCorrect: "off",
                autoCapitalize: "none"
            }), r.a.createElement("div", {
                className: A()("text-gray-100 peer-focus:text-gray-50 peer-focus:animate-pulse", H.command_icon)
            }, r.a.createElement(R.b, {
                className: "w-4 h-4"
            }))))
        }
          , q = a(187)
          , V = a(307)
          , $ = a(287)
          , X = a(308);
        function Y(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            if (!/#?([a-fA-F0-9]{2}){3}/.test(e))
                return e;
            const [a,n,r] = e.match(/[a-fA-F0-9]{2}/g).map((e=>parseInt(e, 16)));
            return "rgba(".concat(a, ", ").concat(n, ", ").concat(r, ", ").concat(t, ")")
        }
        function G(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function J(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? G(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : G(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        $.c.register($.g, $.j, $.e, $.h);
        const Z = {
            responsive: !0,
            animation: !1,
            plugins: {
                legend: {
                    display: !1
                },
                title: {
                    display: !1
                },
                tooltip: {
                    enabled: !1
                }
            },
            layout: {
                padding: 0
            },
            scales: {
                x: {
                    min: 0,
                    max: 19,
                    type: "linear",
                    grid: {
                        display: !1,
                        drawBorder: !1
                    },
                    ticks: {
                        display: !1
                    }
                },
                y: {
                    min: 0,
                    type: "linear",
                    grid: {
                        display: !0,
                        color: "hsl(209, 18%, 30%)",
                        drawBorder: !1
                    },
                    ticks: {
                        display: !0,
                        count: 3,
                        color: "hsl(210, 16%, 82%)",
                        font: {
                            family: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            size: 11,
                            weight: "400"
                        }
                    }
                }
            },
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: .15
                }
            }
        };
        const Q = Object(X.b)({
            mergeArrays: !1
        });
        function ee(e, t) {
            const a = function(e) {
                return Object(X.a)(Z, e || {})
            }("number" == typeof (null == t ? void 0 : t.options) ? {
                scales: {
                    y: {
                        min: 0,
                        suggestedMax: t.options
                    }
                }
            } : null == t ? void 0 : t.options)
              , [r,o] = Object(n.useState)(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                const a = (arguments.length > 2 ? arguments[2] : void 0) || (e=>e);
                return {
                    labels: Array(20).fill(0).map(((e,t)=>t)),
                    datasets: Array(t).fill(0).map(((t,n)=>a({
                        fill: !0,
                        label: e,
                        data: Array(20).fill(-5),
                        borderColor: "#22d3ee",
                        backgroundColor: Y("#0e7490", .5)
                    }, n)))
                }
            }(e, (null == t ? void 0 : t.sets) || 1, null == t ? void 0 : t.callback));
            return {
                props: {
                    data: r,
                    options: a
                },
                push: e=>o((t=>Q(t, {
                    datasets: (Array.isArray(e) ? e : [e]).map(((e,a)=>J(J({}, t.datasets[a]), {}, {
                        data: t.datasets[a].data.slice(1).concat("number" == typeof e ? Number(e.toFixed(2)) : e)
                    })))
                }))),
                clear: ()=>o((e=>Q(e, {
                    datasets: e.datasets.map((e=>J(J({}, e), {}, {
                        data: Array(20).fill(-5)
                    })))
                })))
            }
        }
        function te(e, t, a, n) {
            return ee(e, {
                sets: 1,
                options: {
                    scales: {
                        y: {
                            suggestedMax: t,
                            ticks: {
                                callback: e=>"".concat(n ? Number(e).toFixed(n) : e).concat(a)
                            }
                        }
                    }
                }
            })
        }
        var ae = a(175)
          , ne = e=>{
            let {title: t, legend: a, children: n} = e;
            return r.a.createElement("div", {
                className: A()(H.chart_container, "group")
            }, r.a.createElement("div", {
                className: "flex items-center justify-between px-4 py-2"
            }, r.a.createElement("h3", {
                className: "font-header transition-colors duration-100 group-hover:text-gray-50"
            }, t), a && r.a.createElement("p", {
                className: "text-sm flex items-center"
            }, a)), r.a.createElement("div", {
                className: "z-10 ml-2"
            }, n))
        }
          , re = a(176);
        function oe(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function ie(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? oe(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : oe(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var ce = ()=>{
            const e = o.a.useStoreState((e=>e.status.value))
              , t = o.a.useStoreState((e=>e.server.data.limits))
              , a = Object(n.useRef)({
                tx: -1,
                rx: -1
            })
              , i = te("CPU", t.cpu, "%", 2)
              , c = te("Memory", t.memory, "MiB")
              , l = ee("Network", {
                sets: 2,
                options: {
                    scales: {
                        y: {
                            ticks: {
                                callback: e=>Object(ae.a)("string" == typeof e ? parseInt(e, 10) : e)
                            }
                        }
                    }
                },
                callback: (e,t)=>ie(ie({}, e), {}, {
                    label: t ? "Network Out" : "Network In",
                    borderColor: t ? "#fbbf24" : "#22d3ee",
                    backgroundColor: Y(t ? "#b45309" : "#0e7490", .5)
                })
            });
            return Object(n.useEffect)((()=>{
                "offline" === e && (i.clear(),
                c.clear(),
                l.clear())
            }
            ), [e]),
            Object(q.a)(T.a.STATS, (e=>{
                let t = {};
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    return
                }
                i.push(t.cpu_absolute),
                c.push(Math.floor(t.memory_bytes / 1024 / 1024)),
                l.push([a.current.tx < 0 ? 0 : Math.max(0, t.network.tx_bytes - a.current.tx), a.current.rx < 0 ? 0 : Math.max(0, t.network.rx_bytes - a.current.rx)]),
                a.current = {
                    tx: t.network.tx_bytes,
                    rx: t.network.rx_bytes
                }
            }
            )),
            r.a.createElement(r.a.Fragment, null, r.a.createElement(ne, {
                title: "CPU Load"
            }, r.a.createElement(V.a, i.props)), r.a.createElement(ne, {
                title: "Memory"
            }, r.a.createElement(V.a, c.props)), r.a.createElement(ne, {
                title: "Network",
                legend: r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
                    arrow: !0,
                    content: "Inbound"
                }, r.a.createElement(R.c, {
                    className: "mr-2 w-4 h-4 text-yellow-400"
                })), r.a.createElement(re.a, {
                    arrow: !0,
                    content: "Outbound"
                }, r.a.createElement(R.d, {
                    className: "w-4 h-4 text-cyan-400"
                })))
            }, r.a.createElement(V.a, l.props)))
        }
          , le = a(154)
          , se = a(164)
          , de = e=>{
            let {className: t} = e;
            const [a,c] = Object(n.useState)(!1)
              , l = o.a.useStoreState((e=>e.status.value))
              , s = o.a.useStoreState((e=>e.socket.instance))
              , d = "stopping" === l
              , m = (e,t)=>{
                if (t.preventDefault(),
                "kill" === e)
                    return c(!0);
                s && (c(!1),
                s.send("set state", "kill-confirmed" === e ? "kill" : e))
            }
            ;
            return Object(n.useEffect)((()=>{
                "offline" === l && c(!1)
            }
            ), [l]),
            r.a.createElement("div", {
                className: t
            }, r.a.createElement(se.a.Confirm, {
                open: a,
                hideCloseIcon: !0,
                onClose: ()=>c(!1),
                title: "Forcibly Stop Process",
                confirm: "Continue",
                onConfirmed: m.bind(void 0, "kill-confirmed")
            }, "Forcibly stopping a server can lead to data corruption."), r.a.createElement(i.a, {
                action: "control.start"
            }, r.a.createElement(le.a, {
                className: "flex-1",
                disabled: "offline" !== l,
                onClick: m.bind(void 0, "start")
            }, "Start")), r.a.createElement(i.a, {
                action: "control.restart"
            }, r.a.createElement(le.a.Text, {
                className: "flex-1",
                disabled: !l,
                onClick: m.bind(void 0, "restart")
            }, "Restart")), r.a.createElement(i.a, {
                action: "control.stop"
            }, r.a.createElement(le.a.Danger, {
                className: "flex-1",
                disabled: "offline" === l,
                onClick: m.bind(void 0, d ? "kill" : "stop")
            }, d ? "Kill" : "Stop")))
        }
          , me = a(27)
          , pe = e=>{
            let {uptime: t} = e;
            const a = Math.floor(t / 86400)
              , n = Math.floor(Math.floor(t) / 60 / 60 % 24)
              , o = Math.floor(t - 60 * n * 60)
              , i = Math.floor(o / 60 % 60)
              , c = o % 60;
            return a > 0 ? r.a.createElement(r.a.Fragment, null, a, "d ", n, "h ", i, "m") : r.a.createElement(r.a.Fragment, null, n, "h ", i, "m ", c, "s")
        }
          , ue = a(60)
          , be = a(311)
          , ge = a.n(be)
          , he = a(171)
          , ye = a(21)
          , fe = e=>{
            let {children: t} = e;
            const a = Object(n.useRef)(document.getElementById("modal-portal"));
            return Object(ye.createPortal)(t, a.current)
        }
          , we = a(313)
          , ve = a.n(we);
        var Oe = e=>{
            let {text: t, showInNotification: a=!0, children: o} = e;
            const [i,c] = Object(n.useState)(!1);
            if (Object(n.useEffect)((()=>{
                if (!i)
                    return;
                const e = setTimeout((()=>{
                    c(!1)
                }
                ), 2500);
                return ()=>{
                    clearTimeout(e)
                }
            }
            ), [i]),
            !r.a.isValidElement(o))
                throw new Error("Component passed to <CopyOnClick/> must be a valid React element.");
            const l = t ? r.a.cloneElement(r.a.Children.only(o), {
                className: A()(o.props.className || "", "cursor-pointer"),
                onClick: e=>{
                    ve()(String(t)),
                    c(!0),
                    "function" == typeof o.props.onClick && o.props.onClick(e)
                }
            }) : r.a.Children.only(o);
            return r.a.createElement(r.a.Fragment, null, i && r.a.createElement(fe, null, r.a.createElement(he.a, {
                in: !0,
                appear: !0,
                timeout: 250,
                key: i ? "visible" : "invisible"
            }, r.a.createElement("div", {
                className: "fixed z-50 bottom-0 right-0 m-4"
            }, r.a.createElement("div", {
                className: "rounded-md py-3 px-4 text-gray-200 bg-neutral-600/95 shadow"
            }, r.a.createElement("p", null, a ? 'Copied "'.concat(String(t), '" to clipboard.') : "Copied text to clipboard."))))), l)
        }
          , _e = e=>{
            let {title: t, copyOnClick: a, icon: n, color: o, className: i, children: c} = e;
            const {fontSize: l, ref: s} = ge()({
                minFontSize: 8,
                maxFontSize: 500
            });
            return r.a.createElement(Oe, {
                text: a
            }, r.a.createElement("div", {
                className: A()(H.stat_block, "bg-gray-600", i)
            }, r.a.createElement("div", {
                className: A()(H.status_bar, o || "bg-gray-700")
            }), r.a.createElement("div", {
                className: A()(H.icon, o || "bg-gray-700")
            }, r.a.createElement(ue.a, {
                icon: n,
                className: A()({
                    "text-gray-100": !o || "bg-gray-700" === o,
                    "text-gray-50": o && "bg-gray-700" !== o
                })
            })), r.a.createElement("div", {
                className: "flex flex-col justify-center overflow-hidden w-full"
            }, r.a.createElement("p", {
                className: "font-header leading-tight text-xs md:text-sm text-gray-200"
            }, t), r.a.createElement("div", {
                ref: s,
                className: "h-[1.75rem] w-full font-semibold text-gray-50 truncate",
                style: {
                    fontSize: l
                }
            }, c))))
        }
          , Ee = a(252);
        const xe = (e,t)=>{
            const a = t ? e / t : 0;
            if (a > .8)
                return a > .9 ? "bg-red-500" : "bg-yellow-500"
        }
          , Se = e=>{
            let {limit: t, children: a} = e;
            return r.a.createElement(r.a.Fragment, null, a, r.a.createElement("span", {
                className: "ml-1 text-gray-300 text-[70%] select-none"
            }, "/ ", t || r.a.createElement(r.a.Fragment, null, "∞")))
        }
        ;
        var je = e=>{
            let {className: t} = e;
            const [a,i] = Object(n.useState)({
                memory: 0,
                cpu: 0,
                disk: 0,
                uptime: 0,
                tx: 0,
                rx: 0
            })
              , c = o.a.useStoreState((e=>e.status.value))
              , l = o.a.useStoreState((e=>e.socket.connected))
              , s = o.a.useStoreState((e=>e.socket.instance))
              , d = o.a.useStoreState((e=>e.server.data.limits))
              , m = Object(n.useMemo)((()=>({
                cpu: (null == d ? void 0 : d.cpu) ? "".concat(d.cpu, "%") : null,
                memory: (null == d ? void 0 : d.memory) ? Object(ae.a)(Object(ae.c)(d.memory)) : null,
                disk: (null == d ? void 0 : d.disk) ? Object(ae.a)(Object(ae.c)(d.disk)) : null
            })), [d])
              , p = o.a.useStoreState((e=>{
                const t = e.server.data.allocations.find((e=>e.isDefault));
                return t ? "".concat(t.alias || Object(ae.b)(t.ip), ":").concat(t.port) : "n/a"
            }
            ));
            return Object(n.useEffect)((()=>{
                l && s && s.send(T.b.SEND_STATS)
            }
            ), [s, l]),
            Object(q.a)(T.a.STATS, (e=>{
                let t = {};
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    return
                }
                i({
                    memory: t.memory_bytes,
                    cpu: t.cpu_absolute,
                    disk: t.disk_bytes,
                    tx: t.network.tx_bytes,
                    rx: t.network.rx_bytes,
                    uptime: t.uptime || 0
                })
            }
            )),
            r.a.createElement("div", {
                className: A()("grid grid-cols-6 gap-2 md:gap-4", t)
            }, r.a.createElement(_e, {
                icon: me.R,
                title: "Address",
                copyOnClick: p
            }, p), r.a.createElement(_e, {
                icon: me.h,
                title: "Uptime",
                color: xe("running" === c ? 0 : "offline" !== c ? 9 : 10, 10)
            }, null === c ? "Offline" : a.uptime > 0 ? r.a.createElement(pe, {
                uptime: a.uptime / 1e3
            }) : Object(Ee.a)(c)), r.a.createElement(_e, {
                icon: me.F,
                title: "CPU Load",
                color: xe(a.cpu, d.cpu)
            }, "offline" === c ? r.a.createElement("span", {
                className: "text-gray-400"
            }, "Offline") : r.a.createElement(Se, {
                limit: m.cpu
            }, a.cpu.toFixed(2), "%")), r.a.createElement(_e, {
                icon: me.E,
                title: "Memory",
                color: xe(a.memory / 1024, 1024 * d.memory)
            }, "offline" === c ? r.a.createElement("span", {
                className: "text-gray-400"
            }, "Offline") : r.a.createElement(Se, {
                limit: m.memory
            }, Object(ae.a)(a.memory))), r.a.createElement(_e, {
                icon: me.z,
                title: "Disk",
                color: xe(a.disk / 1024, 1024 * d.disk)
            }, r.a.createElement(Se, {
                limit: m.disk
            }, Object(ae.a)(a.disk))), r.a.createElement(_e, {
                icon: me.i,
                title: "Network (Inbound)"
            }, "offline" === c ? r.a.createElement("span", {
                className: "text-gray-400"
            }, "Offline") : Object(ae.a)(a.rx)), r.a.createElement(_e, {
                icon: me.j,
                title: "Network (Outbound)"
            }, "offline" === c ? r.a.createElement("span", {
                className: "text-gray-400"
            }, "Offline") : Object(ae.a)(a.tx)))
        }
          , Ce = a(208)
          , ke = e=>{
            let {type: t, className: a, children: n} = e;
            return r.a.createElement("div", {
                className: A()("flex items-center border-l-8 text-gray-50 rounded-md shadow px-4 py-3", {
                    "border-red-500 bg-red-500/25": "danger" === t,
                    "border-yellow-500 bg-yellow-500/25": "warning" === t
                }, a)
            }, "danger" === t ? r.a.createElement(Ce.f, {
                className: "w-6 h-6 text-red-400 mr-2"
            }) : r.a.createElement(Ce.d, {
                className: "w-6 h-6 text-yellow-500 mr-2"
            }), n)
        }
        ;
        const Ne = ()=>{
            const e = o.a.useStoreState((e=>e.server.data.name))
              , t = o.a.useStoreState((e=>e.server.data.description))
              , a = o.a.useStoreState((e=>e.server.isInstalling))
              , n = o.a.useStoreState((e=>e.server.data.isTransferring))
              , c = o.a.useStoreState((e=>e.server.data.eggFeatures), b.a)
              , l = o.a.useStoreState((e=>e.server.data.isNodeUnderMaintenance));
            return r.a.createElement(p, {
                title: "Console"
            }, (l || a || n) && r.a.createElement(ke, {
                type: "warning",
                className: "mb-4"
            }, l ? "The node of this server is currently under maintenance and all actions are unavailable." : a ? "This server is currently running its installation process and most actions are unavailable." : "This server is currently being transferred to another node and all actions are unavailable."), r.a.createElement("div", {
                className: "grid grid-cols-4 gap-4 mb-4"
            }, r.a.createElement("div", {
                className: "hidden sm:block sm:col-span-2 lg:col-span-3 pr-4"
            }, r.a.createElement("h1", {
                className: "font-header text-2xl text-gray-50 leading-relaxed line-clamp-1"
            }, e), r.a.createElement("p", {
                className: "text-sm line-clamp-2"
            }, t)), r.a.createElement("div", {
                className: "col-span-4 sm:col-span-2 lg:col-span-1 self-end"
            }, r.a.createElement(i.a, {
                action: ["control.start", "control.stop", "control.restart"],
                matchAny: !0
            }, r.a.createElement(de, {
                className: "flex sm:justify-end space-x-2"
            })))), r.a.createElement("div", {
                className: "grid grid-cols-4 gap-2 sm:gap-4 mb-4"
            }, r.a.createElement("div", {
                className: "flex col-span-4 lg:col-span-3"
            }, r.a.createElement(g.a.Suspense, null, r.a.createElement(K, null))), r.a.createElement(je, {
                className: "col-span-4 lg:col-span-1 order-last lg:order-none"
            })), r.a.createElement("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4"
            }, r.a.createElement(g.a.Suspense, null, r.a.createElement(ce, null))), r.a.createElement(w, {
                enabled: c
            }))
        }
        ;
        var De = Object(n.memo)(Ne, b.a)
          , Pe = a(1)
          , Ie = a(17);
        const Te = e=>{
            var t, a;
            return {
                id: e.id,
                name: e.name,
                username: e.username,
                connectionString: "".concat(e.host.address, ":").concat(e.host.port),
                allowConnectionsFrom: e.connections_from,
                password: null === (t = e.relationships.password) || void 0 === t || null === (a = t.attributes) || void 0 === a ? void 0 : a.password
            }
        }
        ;
        var Fe = a(51)
          , Ae = a(53)
          , Re = a(165)
          , Me = a(155)
          , ze = a(158)
          , Be = a(163)
          , Le = a(2)
          , He = a(52)
          , We = e=>{
            let {databaseId: t, onUpdate: a} = e;
            const [i,c] = Object(n.useState)(!1)
              , {addFlash: l, clearFlashes: s} = Object(Le.useStoreActions)((e=>e.flashes))
              , d = o.a.useStoreState((e=>e.server.data));
            if (!t)
                return null;
            return r.a.createElement(Ue, {
                isSecondary: !0,
                color: "primary",
                onClick: ()=>{
                    var e, n;
                    c(!0),
                    s(),
                    (e = d.uuid,
                    n = t,
                    new Promise(((t,a)=>{
                        Ie.a.post("/api/client/servers/".concat(e, "/databases/").concat(n, "/rotate-password")).then((e=>t(Te(e.data.attributes)))).catch(a)
                    }
                    ))).then((e=>a(e))).catch((e=>{
                        console.error(e),
                        l({
                            type: "error",
                            title: "Error",
                            message: Object(Ie.c)(e),
                            key: "database-connection-modal"
                        })
                    }
                    )).then((()=>c(!1)))
                }
                ,
                isLoading: i
            }, "Rotate Password")
        }
          , Ue = Object(Pe.c)(He.a).withConfig({
            displayName: "RotatePasswordButton___StyledButton",
            componentId: "sc-1vulp4w-0"
        })({
            marginRight: "0.5rem"
        })
          , Ke = a(153)
          , qe = a(170)
          , Ve = a(157)
          , $e = a(177)
          , Xe = e=>{
            let {database: t, className: a} = e;
            const c = o.a.useStoreState((e=>e.server.data.uuid))
              , {addError: l, clearFlashes: s} = Object(Ke.a)()
              , [d,m] = Object(n.useState)(!1)
              , [p,u] = Object(n.useState)(!1)
              , b = o.a.useStoreActions((e=>e.databases.appendDatabase))
              , g = o.a.useStoreActions((e=>e.databases.removeDatabase))
              , h = "jdbc:mysql://".concat(t.username).concat(t.password ? ":".concat(encodeURIComponent(t.password)) : "", "@").concat(t.connectionString, "/").concat(t.name)
              , y = Object(Be.d)().shape({
                confirm: Object(Be.f)().required("The database name must be provided.").oneOf([t.name.split("_", 2)[1], t.name], "The database name must be provided.")
            });
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(Me.c, {
                onSubmit: (e,a)=>{
                    let {setSubmitting: n} = a;
                    s(),
                    ((e,t)=>new Promise(((a,n)=>{
                        Ie.a.delete("/api/client/servers/".concat(e, "/databases/").concat(t)).then((()=>a())).catch(n)
                    }
                    )))(c, t.id).then((()=>{
                        m(!1),
                        setTimeout((()=>g(t.id)), 150)
                    }
                    )).catch((e=>{
                        console.error(e),
                        n(!1),
                        l({
                            key: "database:delete",
                            message: Object(Ie.c)(e)
                        })
                    }
                    ))
                }
                ,
                initialValues: {
                    confirm: ""
                },
                validationSchema: y,
                isInitialValid: !1
            }, (e=>{
                let {isSubmitting: a, isValid: n, resetForm: o} = e;
                return r.a.createElement(Re.b, {
                    visible: d,
                    dismissable: !a,
                    showSpinnerOverlay: a,
                    onDismissed: ()=>{
                        m(!1),
                        o()
                    }
                }, r.a.createElement(Ye, {
                    byKey: "database:delete"
                }), r.a.createElement(Ge, null, "Confirm database deletion"), r.a.createElement(Je, null, "Deleting a database is a permanent action, it cannot be undone. This will permanently delete the ", r.a.createElement("strong", null, t.name), " database and remove all associated data."), r.a.createElement(Ze, null, r.a.createElement(ze.a, {
                    type: "text",
                    id: "confirm_name",
                    name: "confirm",
                    label: "Confirm Database Name",
                    description: "Enter the database name to confirm deletion."
                }), r.a.createElement(Qe, null, r.a.createElement(et, {
                    type: "button",
                    isSecondary: !0,
                    onClick: ()=>m(!1)
                }, "Cancel"), r.a.createElement(He.a, {
                    type: "submit",
                    color: "red",
                    disabled: !n
                }, "Delete Database"))))
            }
            )), r.a.createElement(Re.b, {
                visible: p,
                onDismissed: ()=>u(!1)
            }, r.a.createElement(tt, {
                byKey: "database-connection-modal"
            }), r.a.createElement(at, null, "Database connection details"), r.a.createElement("div", null, r.a.createElement(qe.a, null, "Endpoint"), r.a.createElement(Oe, {
                text: t.connectionString
            }, r.a.createElement(Ve.b, {
                type: "text",
                readOnly: !0,
                value: t.connectionString
            }))), r.a.createElement(nt, null, r.a.createElement(qe.a, null, "Connections from"), r.a.createElement(Ve.b, {
                type: "text",
                readOnly: !0,
                value: t.allowConnectionsFrom
            })), r.a.createElement(rt, null, r.a.createElement(qe.a, null, "Username"), r.a.createElement(Oe, {
                text: t.username
            }, r.a.createElement(Ve.b, {
                type: "text",
                readOnly: !0,
                value: t.username
            }))), r.a.createElement(i.a, {
                action: "database.view_password"
            }, r.a.createElement(ot, null, r.a.createElement(qe.a, null, "Password"), r.a.createElement(Oe, {
                text: t.password,
                showInNotification: !1
            }, r.a.createElement(Ve.b, {
                type: "text",
                readOnly: !0,
                value: t.password
            })))), r.a.createElement(it, null, r.a.createElement(qe.a, null, "JDBC Connection String"), r.a.createElement(Oe, {
                text: h,
                showInNotification: !1
            }, r.a.createElement(Ve.b, {
                type: "text",
                readOnly: !0,
                value: h
            }))), r.a.createElement(ct, null, r.a.createElement(i.a, {
                action: "database.update"
            }, r.a.createElement(We, {
                databaseId: t.id,
                onUpdate: b
            })), r.a.createElement(He.a, {
                isSecondary: !0,
                onClick: ()=>u(!1)
            }, "Close"))), r.a.createElement(lt, {
                $hoverable: !1,
                className: a
            }, r.a.createElement(st, null, r.a.createElement(Ae.a, {
                icon: me.n,
                fixedWidth: !0
            })), r.a.createElement(dt, null, r.a.createElement(Oe, {
                text: t.name
            }, r.a.createElement(mt, null, t.name))), r.a.createElement(pt, null, r.a.createElement(Oe, {
                text: t.connectionString
            }, r.a.createElement(ut, null, t.connectionString)), r.a.createElement(bt, null, "Endpoint")), r.a.createElement(gt, null, r.a.createElement(ht, null, t.allowConnectionsFrom), r.a.createElement(yt, null, "Connections from")), r.a.createElement(ft, null, r.a.createElement(Oe, {
                text: t.username
            }, r.a.createElement(wt, null, t.username)), r.a.createElement(vt, null, "Username")), r.a.createElement(Ot, null, r.a.createElement(_t, {
                isSecondary: !0,
                onClick: ()=>u(!0)
            }, r.a.createElement(Ae.a, {
                icon: me.s,
                fixedWidth: !0
            })), r.a.createElement(i.a, {
                action: "database.delete"
            }, r.a.createElement(He.a, {
                color: "red",
                isSecondary: !0,
                onClick: ()=>m(!0)
            }, r.a.createElement(Ae.a, {
                icon: me.N,
                fixedWidth: !0
            }))))))
        }
          , Ye = Object(Pe.c)(Fe.a).withConfig({
            displayName: "DatabaseRow___StyledFlashMessageRender",
            componentId: "sc-1t67zwr-0"
        })({
            marginBottom: "1.5rem"
        })
          , Ge = Object(Pe.c)("h2").withConfig({
            displayName: "DatabaseRow___StyledH",
            componentId: "sc-1t67zwr-1"
        })({
            fontSize: "1.5rem",
            lineHeight: "2rem",
            marginBottom: "1.5rem"
        })
          , Je = Object(Pe.c)("p").withConfig({
            displayName: "DatabaseRow___StyledP",
            componentId: "sc-1t67zwr-2"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , Ze = Object(Pe.c)(Me.b).withConfig({
            displayName: "DatabaseRow___StyledForm",
            componentId: "sc-1t67zwr-3"
        })({
            margin: "0px",
            marginTop: "1.5rem"
        })
          , Qe = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv",
            componentId: "sc-1t67zwr-4"
        })({
            marginTop: "1.5rem",
            textAlign: "right"
        })
          , et = Object(Pe.c)(He.a).withConfig({
            displayName: "DatabaseRow___StyledButton",
            componentId: "sc-1t67zwr-5"
        })({
            marginRight: "0.5rem"
        })
          , tt = Object(Pe.c)(Fe.a).withConfig({
            displayName: "DatabaseRow___StyledFlashMessageRender2",
            componentId: "sc-1t67zwr-6"
        })({
            marginBottom: "1.5rem"
        })
          , at = Object(Pe.c)("h3").withConfig({
            displayName: "DatabaseRow___StyledH2",
            componentId: "sc-1t67zwr-7"
        })({
            marginBottom: "1.5rem",
            fontSize: "1.5rem",
            lineHeight: "2rem"
        })
          , nt = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv2",
            componentId: "sc-1t67zwr-8"
        })({
            marginTop: "1.5rem"
        })
          , rt = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv3",
            componentId: "sc-1t67zwr-9"
        })({
            marginTop: "1.5rem"
        })
          , ot = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv4",
            componentId: "sc-1t67zwr-10"
        })({
            marginTop: "1.5rem"
        })
          , it = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv5",
            componentId: "sc-1t67zwr-11"
        })({
            marginTop: "1.5rem"
        })
          , ct = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv6",
            componentId: "sc-1t67zwr-12"
        })({
            marginTop: "1.5rem",
            textAlign: "right"
        })
          , lt = Object(Pe.c)($e.a).withConfig({
            displayName: "DatabaseRow___StyledGreyRowBox",
            componentId: "sc-1t67zwr-13"
        })({
            marginBottom: "0.5rem"
        })
          , st = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv7",
            componentId: "sc-1t67zwr-14"
        })({
            display: "none",
            "@media (min-width: 768px)": {
                display: "block"
            }
        })
          , dt = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv8",
            componentId: "sc-1t67zwr-15"
        })({
            flex: "1 1 0%",
            marginLeft: "1rem"
        })
          , mt = Object(Pe.c)("p").withConfig({
            displayName: "DatabaseRow___StyledP2",
            componentId: "sc-1t67zwr-16"
        })({
            fontSize: "1.125rem",
            lineHeight: "1.75rem"
        })
          , pt = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv9",
            componentId: "sc-1t67zwr-17"
        })({
            marginLeft: "2rem",
            textAlign: "center",
            display: "none",
            "@media (min-width: 768px)": {
                display: "block"
            }
        })
          , ut = Object(Pe.c)("p").withConfig({
            displayName: "DatabaseRow___StyledP3",
            componentId: "sc-1t67zwr-18"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , bt = Object(Pe.c)("p").withConfig({
            displayName: "DatabaseRow___StyledP4",
            componentId: "sc-1t67zwr-19"
        })({
            marginTop: "0.25rem",
            fontSize: "0.625rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
            textTransform: "uppercase",
            userSelect: "none"
        })
          , gt = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv10",
            componentId: "sc-1t67zwr-20"
        })({
            marginLeft: "2rem",
            textAlign: "center",
            display: "none",
            "@media (min-width: 768px)": {
                display: "block"
            }
        })
          , ht = Object(Pe.c)("p").withConfig({
            displayName: "DatabaseRow___StyledP5",
            componentId: "sc-1t67zwr-21"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , yt = Object(Pe.c)("p").withConfig({
            displayName: "DatabaseRow___StyledP6",
            componentId: "sc-1t67zwr-22"
        })({
            marginTop: "0.25rem",
            fontSize: "0.625rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
            textTransform: "uppercase",
            userSelect: "none"
        })
          , ft = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv11",
            componentId: "sc-1t67zwr-23"
        })({
            marginLeft: "2rem",
            textAlign: "center",
            display: "none",
            "@media (min-width: 768px)": {
                display: "block"
            }
        })
          , wt = Object(Pe.c)("p").withConfig({
            displayName: "DatabaseRow___StyledP7",
            componentId: "sc-1t67zwr-24"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , vt = Object(Pe.c)("p").withConfig({
            displayName: "DatabaseRow___StyledP8",
            componentId: "sc-1t67zwr-25"
        })({
            marginTop: "0.25rem",
            fontSize: "0.625rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
            textTransform: "uppercase",
            userSelect: "none"
        })
          , Ot = Object(Pe.c)("div").withConfig({
            displayName: "DatabaseRow___StyledDiv12",
            componentId: "sc-1t67zwr-26"
        })({
            marginLeft: "2rem"
        })
          , _t = Object(Pe.c)(He.a).withConfig({
            displayName: "DatabaseRow___StyledButton2",
            componentId: "sc-1t67zwr-27"
        })({
            marginRight: "0.5rem"
        });
        const Et = Object(Be.d)().shape({
            databaseName: Object(Be.f)().required("A database name must be provided.").min(3, "Database name must be at least 3 characters.").max(48, "Database name must not exceed 48 characters.").matches(/^[\w\-.]{3,48}$/, "Database name should only contain alphanumeric characters, underscores, dashes, and/or periods."),
            connectionsFrom: Object(Be.f)().matches(/^[\w\-/.%:]+$/, "A valid host address must be provided.")
        });
        var xt = Object(Pe.c)(Fe.a).withConfig({
            displayName: "CreateDatabaseButton___StyledFlashMessageRender",
            componentId: "sc-ejjof7-0"
        })({
            marginBottom: "1.5rem"
        })
          , St = Object(Pe.c)("h2").withConfig({
            displayName: "CreateDatabaseButton___StyledH",
            componentId: "sc-ejjof7-1"
        })({
            fontSize: "1.5rem",
            lineHeight: "2rem",
            marginBottom: "1.5rem"
        })
          , jt = Object(Pe.c)(Me.b).withConfig({
            displayName: "CreateDatabaseButton___StyledForm",
            componentId: "sc-ejjof7-2"
        })({
            margin: "0px"
        })
          , Ct = Object(Pe.c)("div").withConfig({
            displayName: "CreateDatabaseButton___StyledDiv",
            componentId: "sc-ejjof7-3"
        })({
            marginTop: "1.5rem"
        })
          , kt = Object(Pe.c)("div").withConfig({
            displayName: "CreateDatabaseButton___StyledDiv2",
            componentId: "sc-ejjof7-4"
        })({
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            marginTop: "1.5rem"
        })
          , Nt = Object(Pe.c)(He.a).withConfig({
            displayName: "CreateDatabaseButton___StyledButton",
            componentId: "sc-ejjof7-5"
        })({
            width: "100%",
            "@media (min-width: 640px)": {
                width: "auto",
                marginRight: "0.5rem"
            }
        })
          , Dt = Object(Pe.c)(He.a).withConfig({
            displayName: "CreateDatabaseButton___StyledButton2",
            componentId: "sc-ejjof7-6"
        })({
            width: "100%",
            marginTop: "1rem",
            "@media (min-width: 640px)": {
                width: "auto",
                marginTop: "0px"
            }
        })
          , Pt = a(225)
          , It = Object(Pe.c)(Fe.a).withConfig({
            displayName: "DatabasesContainer___StyledFlashMessageRender",
            componentId: "sc-1hfwugg-0"
        })({
            marginBottom: "1rem"
        })
          , Tt = Object(Pe.c)("p").withConfig({
            displayName: "DatabasesContainer___StyledP",
            componentId: "sc-1hfwugg-1"
        })({
            textAlign: "center",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , Ft = Object(Pe.c)("div").withConfig({
            displayName: "DatabasesContainer___StyledDiv",
            componentId: "sc-1hfwugg-2"
        })({
            marginTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end"
        })
          , At = Object(Pe.c)("p").withConfig({
            displayName: "DatabasesContainer___StyledP2",
            componentId: "sc-1hfwugg-3"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            marginBottom: "1rem",
            "@media (min-width: 640px)": {
                marginRight: "1.5rem",
                marginBottom: "0px"
            }
        })
          , Rt = Object(Pe.c)((()=>{
            const e = o.a.useStoreState((e=>e.server.data.uuid))
              , {addError: t, clearFlashes: a} = Object(Ke.a)()
              , [i,c] = Object(n.useState)(!1)
              , l = o.a.useStoreActions((e=>e.databases.appendDatabase));
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(Me.c, {
                onSubmit: (n,r)=>{
                    let {setSubmitting: o} = r;
                    a("database:create"),
                    ((e,t)=>new Promise(((a,n)=>{
                        Ie.a.post("/api/client/servers/".concat(e, "/databases"), {
                            database: t.databaseName,
                            remote: t.connectionsFrom
                        }, {
                            params: {
                                include: "password"
                            }
                        }).then((e=>a(Te(e.data.attributes)))).catch(n)
                    }
                    )))(e, {
                        databaseName: n.databaseName,
                        connectionsFrom: n.connectionsFrom || "%"
                    }).then((e=>{
                        l(e),
                        c(!1)
                    }
                    )).catch((e=>{
                        t({
                            key: "database:create",
                            message: Object(Ie.c)(e)
                        }),
                        o(!1)
                    }
                    ))
                }
                ,
                initialValues: {
                    databaseName: "",
                    connectionsFrom: ""
                },
                validationSchema: Et
            }, (e=>{
                let {isSubmitting: t, resetForm: a} = e;
                return r.a.createElement(Re.b, {
                    visible: i,
                    dismissable: !t,
                    showSpinnerOverlay: t,
                    onDismissed: ()=>{
                        a(),
                        c(!1)
                    }
                }, r.a.createElement(xt, {
                    byKey: "database:create"
                }), r.a.createElement(St, null, "Create new database"), r.a.createElement(jt, null, r.a.createElement(ze.a, {
                    type: "string",
                    id: "database_name",
                    name: "databaseName",
                    label: "Database Name",
                    description: "A descriptive name for your database instance."
                }), r.a.createElement(Ct, null, r.a.createElement(ze.a, {
                    type: "string",
                    id: "connections_from",
                    name: "connectionsFrom",
                    label: "Connections From",
                    description: "Where connections should be allowed from. Leave blank to allow connections from anywhere."
                })), r.a.createElement(kt, null, r.a.createElement(Nt, {
                    type: "button",
                    isSecondary: !0,
                    onClick: ()=>c(!1)
                }, "Cancel"), r.a.createElement(Dt, {
                    type: "submit"
                }, "Create Database"))))
            }
            )), r.a.createElement(He.a, {
                onClick: ()=>c(!0)
            }, "New Database"))
        }
        )).withConfig({
            displayName: "DatabasesContainer___StyledCreateDatabaseButton",
            componentId: "sc-1hfwugg-4"
        })({
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1.5rem"
        })
          , Mt = a(205)
          , zt = a(28)
          , Bt = a(180)
          , Lt = a(260)
          , Ht = e=>{
            let {schedule: t} = e;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(Wt, null, r.a.createElement(Ae.a, {
                icon: me.g,
                fixedWidth: !0
            })), r.a.createElement(Ut, null, r.a.createElement("p", null, t.name), r.a.createElement(Kt, null, "Last run at: ", t.lastRunAt ? Object(Bt.b)(t.lastRunAt, "MMM do 'at' h:mma") : "never")), r.a.createElement("div", null, r.a.createElement(qt, {
                $_css: [{
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    paddingLeft: "0.75rem",
                    paddingRight: "0.75rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    textTransform: "uppercase",
                    "--tw-text-opacity": "1",
                    color: "rgba(255, 255, 255, var(--tw-text-opacity))",
                    "@media (min-width: 640px)": {
                        display: "none"
                    }
                }, t.isActive ? {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "rgba(5, 150, 105, var(--tw-bg-opacity))"
                } : {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "hsla(211, 10%, 53%, var(--tw-bg-opacity))"
                }]
            }, t.isActive ? "Active" : "Inactive")), r.a.createElement(Vt, {
                cron: t.cron
            }), r.a.createElement("div", null, r.a.createElement($t, {
                $_css2: [{
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    paddingLeft: "0.75rem",
                    paddingRight: "0.75rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    textTransform: "uppercase",
                    "--tw-text-opacity": "1",
                    color: "rgba(255, 255, 255, var(--tw-text-opacity))",
                    display: "none",
                    "@media (min-width: 640px)": {
                        display: "block"
                    }
                }, t.isActive && !t.isProcessing ? {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "rgba(5, 150, 105, var(--tw-bg-opacity))"
                } : {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "hsla(211, 10%, 53%, var(--tw-bg-opacity))"
                }]
            }, t.isProcessing ? "Processing" : t.isActive ? "Active" : "Inactive")))
        }
          , Wt = Object(Pe.c)("div").withConfig({
            displayName: "ScheduleRow___StyledDiv",
            componentId: "sc-iuk2mh-0"
        })({
            display: "none",
            "@media (min-width: 768px)": {
                display: "block"
            }
        })
          , Ut = Object(Pe.c)("div").withConfig({
            displayName: "ScheduleRow___StyledDiv2",
            componentId: "sc-iuk2mh-1"
        })({
            flex: "1 1 0%",
            "@media (min-width: 768px)": {
                marginLeft: "1rem"
            }
        })
          , Kt = Object(Pe.c)("p").withConfig({
            displayName: "ScheduleRow___StyledP",
            componentId: "sc-iuk2mh-2"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))"
        })
          , qt = Object(Pe.c)("p").withConfig({
            displayName: "ScheduleRow___StyledP2",
            componentId: "sc-iuk2mh-3"
        })(["", ""], (e=>e.$_css))
          , Vt = Object(Pe.c)(Lt.a).withConfig({
            displayName: "ScheduleRow___StyledScheduleCronRow",
            componentId: "sc-iuk2mh-4"
        })({
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            marginTop: "1rem",
            "@media (min-width: 640px)": {
                marginLeft: "2rem",
                marginRight: "2rem",
                width: "auto",
                marginTop: "0px"
            }
        })
          , $t = Object(Pe.c)("p").withConfig({
            displayName: "ScheduleRow___StyledP3",
            componentId: "sc-iuk2mh-5"
        })(["", ""], (e=>e.$_css2))
          , Xt = a(284)
          , Yt = Object(Pe.c)(Fe.a).withConfig({
            displayName: "ScheduleContainer___StyledFlashMessageRender",
            componentId: "sc-dlqnx9-0"
        })({
            marginBottom: "1rem"
        })
          , Gt = Object(Pe.c)("p").withConfig({
            displayName: "ScheduleContainer___StyledP",
            componentId: "sc-dlqnx9-1"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            textAlign: "center",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , Jt = Object(Pe.c)($e.a).withConfig({
            displayName: "ScheduleContainer___StyledGreyRowBox",
            componentId: "sc-dlqnx9-2"
        })({
            cursor: "pointer",
            marginBottom: "0.5rem",
            flexWrap: "wrap"
        })
          , Zt = Object(Pe.c)("div").withConfig({
            displayName: "ScheduleContainer___StyledDiv",
            componentId: "sc-dlqnx9-3"
        })({
            marginTop: "2rem",
            display: "flex",
            justifyContent: "flex-end"
        });
        const Qt = e=>({
            uuid: e.attributes.uuid,
            username: e.attributes.username,
            email: e.attributes.email,
            image: e.attributes.image,
            twoFactorEnabled: e.attributes["2fa_enabled"],
            createdAt: new Date(e.attributes.created_at),
            permissions: e.attributes.permissions || [],
            can: t=>(e.attributes.permissions || []).indexOf(t) >= 0
        });
        function ea(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        var ta = (e,t,a)=>new Promise(((n,r)=>{
            Ie.a.post("/api/client/servers/".concat(e, "/users").concat(a ? "/".concat(a.uuid) : ""), function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ea(Object(a), !0).forEach((function(t) {
                        O()(e, t, a[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ea(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                    ))
                }
                return e
            }({}, t)).then((e=>n(Qt(e.data)))).catch(r)
        }
        ))
          , aa = a(224);
        const na = e=>{
            let {icon: t, title: a, children: n, className: o} = e;
            return r.a.createElement(oa, {
                className: o
            }, r.a.createElement(ia, null, "string" == typeof a ? r.a.createElement(ca, null, t && r.a.createElement(la, {
                icon: t
            }), a) : a), r.a.createElement(sa, null, n))
        }
        ;
        var ra = Object(n.memo)(na, b.a)
          , oa = Object(Pe.c)("div").withConfig({
            displayName: "TitledGreyBox___StyledDiv",
            componentId: "sc-gvsoy-0"
        })({
            borderRadius: "0.25rem",
            "--tw-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 18%, 30%, var(--tw-bg-opacity))"
        })
          , ia = Object(Pe.c)("div").withConfig({
            displayName: "TitledGreyBox___StyledDiv2",
            componentId: "sc-gvsoy-1"
        })({
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(210, 24%, 16%, var(--tw-bg-opacity))",
            borderTopLeftRadius: "0.25rem",
            borderTopRightRadius: "0.25rem",
            padding: "0.75rem",
            borderBottomWidth: "1px",
            "--tw-border-opacity": "1",
            borderColor: "rgba(19, 26, 32, var(--tw-border-opacity))"
        })
          , ca = Object(Pe.c)("p").withConfig({
            displayName: "TitledGreyBox___StyledP",
            componentId: "sc-gvsoy-2"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            textTransform: "uppercase"
        })
          , la = Object(Pe.c)(Ae.a).withConfig({
            displayName: "TitledGreyBox___StyledFontAwesomeIcon",
            componentId: "sc-gvsoy-3"
        })({
            marginRight: "0.5rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , sa = Object(Pe.c)("div").withConfig({
            displayName: "TitledGreyBox___StyledDiv3",
            componentId: "sc-gvsoy-4"
        })({
            padding: "0.75rem"
        });
        var da = Object(n.memo)((e=>{
            let {isEditable: t, title: a, permissions: o, className: i, children: c} = e;
            const [{value: l},,{setValue: s}] = Object(Me.d)("permissions")
              , d = Object(n.useCallback)((e=>{
                e.currentTarget.checked ? s([...l, ...o.filter((e=>!l.includes(e)))]) : s(l.filter((e=>!o.includes(e))))
            }
            ), [o, l]);
            return r.a.createElement(ra, {
                title: r.a.createElement(ma, null, r.a.createElement(pa, null, a), t && r.a.createElement(Ve.b, {
                    type: "checkbox",
                    checked: o.every((e=>l.includes(e))),
                    onChange: d
                })),
                className: i
            }, c)
        }
        ), b.a)
          , ma = Object(Pe.c)("div").withConfig({
            displayName: "PermissionTitleBox___StyledDiv",
            componentId: "sc-1du1vcb-0"
        })({
            display: "flex",
            alignItems: "center"
        })
          , pa = Object(Pe.c)("p").withConfig({
            displayName: "PermissionTitleBox___StyledP",
            componentId: "sc-1du1vcb-1"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            textTransform: "uppercase",
            flex: "1 1 0%"
        })
          , ua = a(196);
        var ba = e=>{
            let {name: t, value: a, className: n} = e
              , o = d()(e, ["name", "value", "className"]);
            return r.a.createElement(Me.a, {
                name: t
            }, (e=>{
                let {field: t, form: i} = e;
                return Array.isArray(t.value) ? r.a.createElement(Ve.b, l()({}, t, o, {
                    className: n,
                    type: "checkbox",
                    checked: (t.value || []).includes(a),
                    onClick: ()=>i.setFieldTouched(t.name, !0),
                    onChange: e=>{
                        const n = new Set(t.value);
                        n.has(a) ? n.delete(a) : n.add(a),
                        t.onChange(e),
                        i.setFieldValue(t.name, Array.from(n))
                    }
                })) : (console.error("Attempting to mount a checkbox using a field value that is not an array."),
                null)
            }
            ))
        }
        ;
        const ga = Pe.c.label.withConfig({
            displayName: "PermissionRow__Container",
            componentId: "sc-1h899cn-0"
        })(["", ";text-transform:none;&:not(.disabled){", ";&:hover{", ";}}&:not(:first-of-type){", ";}&.disabled{", ";& input[type='checkbox']:not(:checked){", ";}}"], {
            display: "flex",
            alignItems: "center",
            borderWidth: "1px",
            borderColor: "rgba(0, 0, 0, 0)",
            borderRadius: "0.25rem",
            transitionProperty: "background-color, border-color, color, fill, stroke",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "75ms",
            "@media (min-width: 768px)": {
                padding: "0.5rem"
            }
        }, {
            cursor: "pointer"
        }, {
            "--tw-border-opacity": "1",
            borderColor: "hsla(211, 12%, 43%, var(--tw-border-opacity))",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 20%, 25%, var(--tw-bg-opacity))"
        }, {
            marginTop: "1rem",
            "@media (min-width: 640px)": {
                marginTop: "0.5rem"
            }
        }, {
            opacity: "0.5"
        }, {
            borderWidth: "0px"
        });
        var ha = e=>{
            let {permission: t, disabled: a} = e;
            const [n,o] = t.split(".", 2)
              , i = Object(Le.useStoreState)((e=>e.permissions.data));
            return r.a.createElement(ga, {
                htmlFor: "permission_".concat(t),
                className: a ? "disabled" : void 0
            }, r.a.createElement(ya, {
                $_css: {
                    padding: "0.5rem"
                }
            }, r.a.createElement(fa, {
                id: "permission_".concat(t),
                name: "permissions",
                value: t,
                disabled: a,
                $_css2: {
                    width: "1.25rem",
                    height: "1.25rem",
                    marginRight: "0.5rem"
                }
            })), r.a.createElement(wa, {
                $_css3: {
                    flex: "1 1 0%"
                }
            }, r.a.createElement(va, {
                as: "p",
                $_css4: {
                    fontWeight: "500"
                }
            }, o), i[n].keys[o].length > 0 && r.a.createElement(Oa, {
                $_css5: {
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    "--tw-text-opacity": "1",
                    color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
                    marginTop: "0.25rem"
                }
            }, i[n].keys[o])))
        }
          , ya = Object(Pe.c)("div").withConfig({
            displayName: "PermissionRow___StyledDiv",
            componentId: "sc-1h899cn-1"
        })(["", ""], (e=>e.$_css))
          , fa = Object(Pe.c)(ba).withConfig({
            displayName: "PermissionRow___StyledCheckbox",
            componentId: "sc-1h899cn-2"
        })(["", ""], (e=>e.$_css2))
          , wa = Object(Pe.c)("div").withConfig({
            displayName: "PermissionRow___StyledDiv2",
            componentId: "sc-1h899cn-3"
        })(["", ""], (e=>e.$_css3))
          , va = Object(Pe.c)(qe.a).withConfig({
            displayName: "PermissionRow___StyledLabel",
            componentId: "sc-1h899cn-4"
        })(["", ""], (e=>e.$_css4))
          , Oa = Object(Pe.c)("p").withConfig({
            displayName: "PermissionRow___StyledP",
            componentId: "sc-1h899cn-5"
        })(["", ""], (e=>e.$_css5))
          , _a = a(188);
        var Ea = Object(ua.a)({
            top: !1
        })((e=>{
            let {subuser: t} = e;
            const a = Object(n.useRef)(null)
              , c = o.a.useStoreState((e=>e.server.data.uuid))
              , l = o.a.useStoreActions((e=>e.subusers.appendSubuser))
              , {clearFlashes: s, clearAndAddHttpError: d} = Object(Le.useStoreActions)((e=>e.flashes))
              , {dismiss: m, setPropOverrides: p} = Object(n.useContext)(_a.a)
              , u = Object(Le.useStoreState)((e=>e.user.data.rootAdmin))
              , b = Object(Le.useStoreState)((e=>e.permissions.data))
              , g = o.a.useStoreState((e=>e.server.permissions))
              , [h] = Object(N.a)(t ? ["user.update"] : ["user.create"])
              , y = Object(aa.a)((()=>{
                const e = Object.keys(b).map((e=>Object.keys(b[e].keys).map((t=>"".concat(e, ".").concat(t)))))
                  , t = [].concat.apply([], Object.values(e));
                return u || 1 === g.length && "*" === g[0] ? t : t.filter((e=>g.indexOf(e) >= 0))
            }
            ), [u, b, g]);
            return Object(n.useEffect)((()=>()=>{
                s("user:edit")
            }
            ), []),
            r.a.createElement(Me.c, {
                onSubmit: e=>{
                    p({
                        showSpinnerOverlay: !0
                    }),
                    s("user:edit"),
                    ta(c, e, t).then((e=>{
                        l(e),
                        m()
                    }
                    )).catch((e=>{
                        console.error(e),
                        p(null),
                        d({
                            key: "user:edit",
                            error: e
                        }),
                        a.current && a.current.scrollIntoView()
                    }
                    ))
                }
                ,
                initialValues: {
                    email: (null == t ? void 0 : t.email) || "",
                    permissions: (null == t ? void 0 : t.permissions) || []
                },
                validationSchema: Object(Be.d)().shape({
                    email: Object(Be.f)().max(191, "Email addresses must not exceed 191 characters.").email("A valid email address must be provided.").required("A valid email address must be provided."),
                    permissions: Object(Be.a)().of(Object(Be.f)())
                })
            }, r.a.createElement(Me.b, null, r.a.createElement(xa, null, r.a.createElement(Sa, {
                ref: a
            }, t ? "".concat(h ? "Modify" : "View", " permissions for ").concat(t.email) : "Create new subuser"), r.a.createElement("div", null, r.a.createElement(ja, {
                type: "submit"
            }, t ? "Save" : "Invite User"))), r.a.createElement(Ca, {
                byKey: "user:edit"
            }), !u && "*" !== g[0] && r.a.createElement(ka, null, r.a.createElement(Na, null, "Only permissions which your account is currently assigned may be selected when creating or modifying other users.")), !t && r.a.createElement(Da, null, r.a.createElement(ze.a, {
                name: "email",
                label: "User Email",
                description: "Enter the email address of the user you wish to invite as a subuser for this server."
            })), r.a.createElement(Pa, null, Object.keys(b).filter((e=>"websocket" !== e)).map(((e,t)=>r.a.createElement(Ia, {
                key: "permission_".concat(e),
                title: e,
                isEditable: h,
                permissions: Object.keys(b[e].keys).map((t=>"".concat(e, ".").concat(t))),
                $_css: t > 0 ? {
                    marginTop: "1rem"
                } : void 0
            }, r.a.createElement(Ta, null, b[e].description), Object.keys(b[e].keys).map((t=>r.a.createElement(ha, {
                key: "permission_".concat(e, ".").concat(t),
                permission: "".concat(e, ".").concat(t),
                disabled: !h || y.indexOf("".concat(e, ".").concat(t)) < 0
            }))))))), r.a.createElement(i.a, {
                action: t ? "user.update" : "user.create"
            }, r.a.createElement(Fa, null, r.a.createElement(Aa, {
                type: "submit"
            }, t ? "Save" : "Invite User")))))
        }
        ))
          , xa = Object(Pe.c)("div").withConfig({
            displayName: "EditSubuserModal___StyledDiv",
            componentId: "sc-1hon03w-0"
        })({
            display: "flex",
            justifyContent: "space-between"
        })
          , Sa = Object(Pe.c)("h2").withConfig({
            displayName: "EditSubuserModal___StyledH",
            componentId: "sc-1hon03w-1"
        })({
            fontSize: "1.5rem",
            lineHeight: "2rem"
        })
          , ja = Object(Pe.c)(He.a).withConfig({
            displayName: "EditSubuserModal___StyledButton",
            componentId: "sc-1hon03w-2"
        })({
            width: "100%",
            "@media (min-width: 640px)": {
                width: "auto"
            }
        })
          , Ca = Object(Pe.c)(Fe.a).withConfig({
            displayName: "EditSubuserModal___StyledFlashMessageRender",
            componentId: "sc-1hon03w-3"
        })({
            marginTop: "1rem"
        })
          , ka = Object(Pe.c)("div").withConfig({
            displayName: "EditSubuserModal___StyledDiv2",
            componentId: "sc-1hon03w-4"
        })({
            marginTop: "1rem",
            paddingLeft: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            borderLeftWidth: "4px",
            "--tw-border-opacity": "1",
            borderColor: "rgba(34, 211, 238, var(--tw-border-opacity))"
        })
          , Na = Object(Pe.c)("p").withConfig({
            displayName: "EditSubuserModal___StyledP",
            componentId: "sc-1hon03w-5"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , Da = Object(Pe.c)("div").withConfig({
            displayName: "EditSubuserModal___StyledDiv3",
            componentId: "sc-1hon03w-6"
        })({
            marginTop: "1.5rem"
        })
          , Pa = Object(Pe.c)("div").withConfig({
            displayName: "EditSubuserModal___StyledDiv4",
            componentId: "sc-1hon03w-7"
        })({
            marginTop: "1.5rem",
            marginBottom: "1.5rem"
        })
          , Ia = Object(Pe.c)(da).withConfig({
            displayName: "EditSubuserModal___StyledPermissionTitleBox",
            componentId: "sc-1hon03w-8"
        })(["", ""], (e=>e.$_css))
          , Ta = Object(Pe.c)("p").withConfig({
            displayName: "EditSubuserModal___StyledP2",
            componentId: "sc-1hon03w-9"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
            marginBottom: "1rem"
        })
          , Fa = Object(Pe.c)("div").withConfig({
            displayName: "EditSubuserModal___StyledDiv5",
            componentId: "sc-1hon03w-10"
        })({
            paddingBottom: "1.5rem",
            display: "flex",
            justifyContent: "flex-end"
        })
          , Aa = Object(Pe.c)(He.a).withConfig({
            displayName: "EditSubuserModal___StyledButton2",
            componentId: "sc-1hon03w-11"
        })({
            width: "100%",
            "@media (min-width: 640px)": {
                width: "auto"
            }
        })
          , Ra = ()=>{
            const [e,t] = Object(n.useState)(!1);
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ea, {
                visible: e,
                onModalDismissed: ()=>t(!1)
            }), r.a.createElement(le.a, {
                onClick: ()=>t(!0)
            }, "New User"))
        }
          , Ma = a(261)
          , za = e=>{
            let {subuser: t} = e;
            const [a,i] = Object(n.useState)(!1)
              , [c,l] = Object(n.useState)(!1)
              , s = o.a.useStoreState((e=>e.server.data.uuid))
              , d = o.a.useStoreActions((e=>e.subusers.removeSubuser))
              , {addError: m, clearFlashes: p} = Object(Le.useStoreActions)((e=>e.flashes))
              , u = ()=>{
                i(!0),
                p("users"),
                ((e,t)=>new Promise(((a,n)=>{
                    Ie.a.delete("/api/client/servers/".concat(e, "/users/").concat(t)).then((()=>a())).catch(n)
                }
                )))(s, t.uuid).then((()=>{
                    i(!1),
                    d(t.uuid)
                }
                )).catch((e=>{
                    console.error(e),
                    m({
                        key: "users",
                        message: Object(Ie.c)(e)
                    }),
                    l(!1)
                }
                ))
            }
            ;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ma.a, {
                title: "Delete this subuser?",
                buttonText: "Yes, remove subuser",
                visible: c,
                showSpinnerOverlay: a,
                onConfirmed: ()=>u(),
                onModalDismissed: ()=>l(!1)
            }, "Are you sure you wish to remove this subuser? They will have all access to this server revoked immediately."), r.a.createElement(Ba, {
                type: "button",
                "aria-label": "Delete subuser",
                onClick: ()=>l(!0)
            }, r.a.createElement(Ae.a, {
                icon: me.N
            })))
        }
          , Ba = Object(Pe.c)("button").withConfig({
            displayName: "RemoveSubuserButton___StyledButton",
            componentId: "sc-1dpwt78-0"
        })({
            display: "block",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            padding: "0.5rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
            ":hover": {
                "--tw-text-opacity": "1",
                color: "rgba(220, 38, 38, var(--tw-text-opacity))"
            },
            transitionProperty: "background-color, border-color, color, fill, stroke",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms"
        })
          , La = e=>{
            let {subuser: t} = e;
            const a = Object(Le.useStoreState)((e=>e.user.data.uuid))
              , [o,c] = Object(n.useState)(!1);
            return r.a.createElement(Ha, null, r.a.createElement(Ea, {
                subuser: t,
                visible: o,
                onModalDismissed: ()=>c(!1)
            }), r.a.createElement(Wa, null, r.a.createElement(Ua, {
                src: "".concat(t.image, "?s=400")
            })), r.a.createElement(Ka, null, r.a.createElement(qa, null, t.email)), r.a.createElement(Va, null, r.a.createElement($a, null, " ", r.a.createElement(Xa, {
                icon: t.twoFactorEnabled ? me.Q : me.P,
                fixedWidth: !0,
                $_css: t.twoFactorEnabled ? void 0 : {
                    "--tw-text-opacity": "1",
                    color: "rgba(248, 113, 113, var(--tw-text-opacity))"
                }
            }), " "), r.a.createElement(Ya, null, "2FA Enabled")), r.a.createElement(Ga, null, r.a.createElement(Ja, null, t.permissions.filter((e=>"websocket.connect" !== e)).length), r.a.createElement(Za, null, "Permissions")), t.uuid !== a && r.a.createElement(r.a.Fragment, null, r.a.createElement(i.a, {
                action: "user.update"
            }, r.a.createElement(Qa, {
                type: "button",
                "aria-label": "Edit subuser",
                onClick: ()=>c(!0)
            }, r.a.createElement(Ae.a, {
                icon: me.H
            }))), r.a.createElement(i.a, {
                action: "user.delete"
            }, r.a.createElement(za, {
                subuser: t
            }))))
        }
          , Ha = Object(Pe.c)($e.a).withConfig({
            displayName: "UserRow___StyledGreyRowBox",
            componentId: "sc-hg2wjz-0"
        })({
            marginBottom: "0.5rem"
        })
          , Wa = Object(Pe.c)("div").withConfig({
            displayName: "UserRow___StyledDiv",
            componentId: "sc-hg2wjz-1"
        })({
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "9999px",
            "--tw-bg-opacity": "1",
            backgroundColor: "rgba(255, 255, 255, var(--tw-bg-opacity))",
            borderWidth: "2px",
            "--tw-border-opacity": "1",
            borderColor: "hsla(209, 20%, 25%, var(--tw-border-opacity))",
            overflow: "hidden",
            display: "none",
            "@media (min-width: 768px)": {
                display: "block"
            }
        })
          , Ua = Object(Pe.c)("img").withConfig({
            displayName: "UserRow___StyledImg",
            componentId: "sc-hg2wjz-2"
        })({
            width: "100%",
            height: "100%"
        })
          , Ka = Object(Pe.c)("div").withConfig({
            displayName: "UserRow___StyledDiv2",
            componentId: "sc-hg2wjz-3"
        })({
            marginLeft: "1rem",
            flex: "1 1 0%",
            overflow: "hidden"
        })
          , qa = Object(Pe.c)("p").withConfig({
            displayName: "UserRow___StyledP",
            componentId: "sc-hg2wjz-4"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        })
          , Va = Object(Pe.c)("div").withConfig({
            displayName: "UserRow___StyledDiv3",
            componentId: "sc-hg2wjz-5"
        })({
            marginLeft: "1rem"
        })
          , $a = Object(Pe.c)("p").withConfig({
            displayName: "UserRow___StyledP2",
            componentId: "sc-hg2wjz-6"
        })({
            fontWeight: "500",
            textAlign: "center"
        })
          , Xa = Object(Pe.c)(Ae.a).withConfig({
            displayName: "UserRow___StyledFontAwesomeIcon",
            componentId: "sc-hg2wjz-7"
        })(["", ""], (e=>e.$_css))
          , Ya = Object(Pe.c)("p").withConfig({
            displayName: "UserRow___StyledP3",
            componentId: "sc-hg2wjz-8"
        })({
            fontSize: "0.625rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
            textTransform: "uppercase",
            display: "none",
            "@media (min-width: 768px)": {
                display: "block"
            }
        })
          , Ga = Object(Pe.c)("div").withConfig({
            displayName: "UserRow___StyledDiv4",
            componentId: "sc-hg2wjz-9"
        })({
            marginLeft: "1rem",
            display: "none",
            "@media (min-width: 768px)": {
                display: "block"
            }
        })
          , Ja = Object(Pe.c)("p").withConfig({
            displayName: "UserRow___StyledP4",
            componentId: "sc-hg2wjz-10"
        })({
            fontWeight: "500",
            textAlign: "center"
        })
          , Za = Object(Pe.c)("p").withConfig({
            displayName: "UserRow___StyledP5",
            componentId: "sc-hg2wjz-11"
        })({
            fontSize: "0.625rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
            textTransform: "uppercase"
        })
          , Qa = Object(Pe.c)("button").withConfig({
            displayName: "UserRow___StyledButton",
            componentId: "sc-hg2wjz-12"
        })({
            display: "block",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            padding: "0.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
            ":hover": {
                "--tw-text-opacity": "1",
                color: "hsla(214, 15%, 91%, var(--tw-text-opacity))"
            },
            transitionProperty: "background-color, border-color, color, fill, stroke",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms",
            marginLeft: "1rem",
            marginRight: "1rem",
            "@media (min-width: 768px)": {
                padding: "0.5rem"
            }
        })
          , en = Object(Pe.c)(Fe.a).withConfig({
            displayName: "UsersContainer___StyledFlashMessageRender",
            componentId: "sc-rg2v3f-0"
        })({
            marginBottom: "1rem"
        })
          , tn = Object(Pe.c)("p").withConfig({
            displayName: "UsersContainer___StyledP",
            componentId: "sc-rg2v3f-1"
        })({
            textAlign: "center",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , an = Object(Pe.c)("div").withConfig({
            displayName: "UsersContainer___StyledDiv",
            componentId: "sc-rg2v3f-2"
        })({
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1.5rem"
        })
          , nn = a(183)
          , rn = a(40)
          , on = a(174);
        const cn = Object(n.createContext)({
            page: 1,
            setPage: ()=>1
        });
        var ln = ()=>{
            const {page: e} = Object(n.useContext)(cn)
              , t = o.a.useStoreState((e=>e.server.data.uuid));
            return Object(on.a)(["server:backups", t, e], (async()=>{
                const {data: a} = await Ie.a.get("/api/client/servers/".concat(t, "/backups"), {
                    params: {
                        page: e
                    }
                });
                return {
                    items: (a.data || []).map(rn.c),
                    pagination: Object(Ie.b)(a.meta.pagination),
                    backupCount: a.meta.backup_count
                }
            }
            ))
        }
          , sn = a(227);
        function dn(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function mn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? dn(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : dn(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        const pn = e=>{
            let t = l()({}, e);
            const {isSubmitting: a} = Object(Me.e)();
            return r.a.createElement(Re.b, l()({}, t, {
                showSpinnerOverlay: a
            }), r.a.createElement(Me.b, null, r.a.createElement(un, {
                byKey: "backups:create"
            }), r.a.createElement(bn, null, "Create server backup"), r.a.createElement(ze.a, {
                name: "name",
                label: "Backup name",
                description: "If provided, the name that should be used to reference this backup."
            }), r.a.createElement(gn, null, r.a.createElement(nn.a, {
                name: "ignored",
                label: "Ignored Files & Directories",
                description: "\n                            Enter the files or folders to ignore while generating this backup. Leave blank to use\n                            the contents of the .pteroignore file in the root of the server directory if present.\n                            Wildcard matching of files and folders is supported in addition to negating a rule by\n                            prefixing the path with an exclamation point.\n                        "
            }, r.a.createElement(Me.a, {
                as: Ve.a,
                name: "ignored",
                rows: 6
            }))), r.a.createElement(i.a, {
                action: "backup.delete"
            }, r.a.createElement(hn, null, r.a.createElement(sn.a, {
                name: "isLocked",
                label: "Locked",
                description: "Prevents this backup from being deleted until explicitly unlocked."
            }))), r.a.createElement(yn, null, r.a.createElement(He.a, {
                type: "submit",
                disabled: a
            }, "Start backup"))))
        }
        ;
        var un = Object(Pe.c)(Fe.a).withConfig({
            displayName: "CreateBackupButton___StyledFlashMessageRender",
            componentId: "sc-da8bqw-0"
        })({
            marginBottom: "1rem"
        })
          , bn = Object(Pe.c)("h2").withConfig({
            displayName: "CreateBackupButton___StyledH",
            componentId: "sc-da8bqw-1"
        })({
            fontSize: "1.5rem",
            lineHeight: "2rem",
            marginBottom: "1.5rem"
        })
          , gn = Object(Pe.c)("div").withConfig({
            displayName: "CreateBackupButton___StyledDiv",
            componentId: "sc-da8bqw-2"
        })({
            marginTop: "1.5rem"
        })
          , hn = Object(Pe.c)("div").withConfig({
            displayName: "CreateBackupButton___StyledDiv2",
            componentId: "sc-da8bqw-3"
        })({
            marginTop: "1.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 18%, 30%, var(--tw-bg-opacity))",
            borderWidth: "1px",
            "--tw-border-opacity": "1",
            borderColor: "hsla(209, 20%, 25%, var(--tw-border-opacity))",
            "--tw-shadow": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            padding: "1rem",
            borderRadius: "0.25rem"
        })
          , yn = Object(Pe.c)("div").withConfig({
            displayName: "CreateBackupButton___StyledDiv3",
            componentId: "sc-da8bqw-4"
        })({
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1.5rem"
        })
          , fn = Object(Pe.c)(He.a).withConfig({
            displayName: "CreateBackupButton___StyledButton",
            componentId: "sc-da8bqw-5"
        })({
            width: "100%",
            "@media (min-width: 640px)": {
                width: "auto"
            }
        });
        const wn = Pe.c.button.withConfig({
            displayName: "DropdownMenu__DropdownButtonRow",
            componentId: "sc-1ojgpy2-0"
        })(["", ";transition:150ms all ease;&:hover{", ";}"], {
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            borderRadius: "0.25rem",
            width: "100%",
            "--tw-text-opacity": "1",
            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))"
        }, (e=>e.danger ? {
            "--tw-text-opacity": "1",
            color: "rgba(185, 28, 28, var(--tw-text-opacity))",
            "--tw-bg-opacity": "1",
            backgroundColor: "rgba(254, 226, 226, var(--tw-bg-opacity))"
        } : {
            "--tw-text-opacity": "1",
            color: "hsla(209, 18%, 30%, var(--tw-text-opacity))",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(214, 15%, 91%, var(--tw-bg-opacity))"
        }));
        class vn extends r.a.PureComponent {
            constructor() {
                super(...arguments),
                O()(this, "menu", Object(n.createRef)()),
                O()(this, "state", {
                    posX: 0,
                    visible: !1
                }),
                O()(this, "removeListeners", (()=>{
                    document.removeEventListener("click", this.windowListener),
                    document.removeEventListener("contextmenu", this.contextMenuListener)
                }
                )),
                O()(this, "onClickHandler", (e=>{
                    e.preventDefault(),
                    this.triggerMenu(e.clientX)
                }
                )),
                O()(this, "contextMenuListener", (()=>this.setState({
                    visible: !1
                }))),
                O()(this, "windowListener", (e=>{
                    const t = this.menu.current;
                    2 !== e.button && this.state.visible && t && (e.target === t || t.contains(e.target) || e.target === t || t.contains(e.target) || this.setState({
                        visible: !1
                    }))
                }
                )),
                O()(this, "triggerMenu", (e=>this.setState((t=>({
                    posX: t.visible ? t.posX : e,
                    visible: !t.visible
                })))))
            }
            componentWillUnmount() {
                this.removeListeners()
            }
            componentDidUpdate(e, t) {
                const a = this.menu.current;
                this.state.visible && !t.visible && a && (document.addEventListener("click", this.windowListener),
                document.addEventListener("contextmenu", this.contextMenuListener),
                a.style.left = "".concat(Math.round(this.state.posX - a.clientWidth), "px")),
                !this.state.visible && t.visible && this.removeListeners()
            }
            render() {
                return r.a.createElement("div", null, this.props.renderToggle(this.onClickHandler), r.a.createElement(he.a, {
                    timeout: 150,
                    in: this.state.visible,
                    unmountOnExit: !0
                }, r.a.createElement(_n, {
                    ref: this.menu,
                    onClick: e=>{
                        e.stopPropagation(),
                        this.setState({
                            visible: !1
                        })
                    }
                    ,
                    style: {
                        width: "12rem"
                    },
                    $_css: {
                        position: "absolute",
                        "--tw-bg-opacity": "1",
                        backgroundColor: "rgba(255, 255, 255, var(--tw-bg-opacity))",
                        padding: "0.5rem",
                        borderRadius: "0.25rem",
                        borderWidth: "1px",
                        "--tw-border-opacity": "1",
                        borderColor: "hsla(209, 18%, 30%, var(--tw-border-opacity))",
                        "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                        "--tw-text-opacity": "1",
                        color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
                        zIndex: "50"
                    }
                }, this.props.children)))
            }
        }
        var On = vn
          , _n = Object(Pe.c)("div").withConfig({
            displayName: "DropdownMenu___StyledDiv",
            componentId: "sc-1ojgpy2-1"
        })(["", ""], (e=>e.$_css));
        function En(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function xn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? En(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : En(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Sn = e=>{
            let {backup: t} = e;
            const a = o.a.useStoreState((e=>e.server.data.uuid))
              , c = o.a.useStoreActions((e=>e.server.setServerFromState))
              , [l,s] = Object(n.useState)("")
              , [d,m] = Object(n.useState)(!1)
              , [p,u] = Object(n.useState)(!1)
              , {clearFlashes: b, clearAndAddHttpError: g} = Object(Ke.a)()
              , {mutate: h} = ln()
              , y = ()=>{
                m(!0),
                b("backups"),
                (async(e,t,a)=>{
                    await Ie.a.post("/api/client/servers/".concat(e, "/backups/").concat(t, "/restore"), {
                        truncate: a
                    })
                }
                )(a, t.uuid, p).then((()=>c((e=>xn(xn({}, e), {}, {
                    status: "restoring_backup"
                }))))).catch((e=>{
                    console.error(e),
                    g({
                        key: "backups",
                        error: e
                    })
                }
                )).then((()=>m(!1))).then((()=>s("")))
            }
              , f = ()=>{
                if (t.isLocked && "unlock" !== l)
                    return s("unlock");
                Ie.a.post("/api/client/servers/".concat(a, "/backups/").concat(t.uuid, "/lock")).then((()=>h((e=>xn(xn({}, e), {}, {
                    items: e.items.map((e=>e.uuid !== t.uuid ? e : xn(xn({}, e), {}, {
                        isLocked: !e.isLocked
                    })))
                })), !1))).catch((e=>alert(Object(Ie.c)(e)))).then((()=>s("")))
            }
            ;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(se.a.Confirm, {
                open: "unlock" === l,
                onClose: ()=>s(""),
                title: 'Unlock "'.concat(t.name, '"'),
                onConfirmed: f
            }, "This backup will no longer be protected from automated or accidental deletions."), r.a.createElement(se.a.Confirm, {
                open: "restore" === l,
                onClose: ()=>s(""),
                confirm: "Restore",
                title: 'Restore "'.concat(t.name, '"'),
                onConfirmed: ()=>y()
            }, r.a.createElement("p", null, "Your server will be stopped. You will not be able to control the power state, access the file manager, or create additional backups until completed."), r.a.createElement(jn, null, r.a.createElement(Cn, {
                htmlFor: "restore_truncate"
            }, r.a.createElement(kn, {
                type: "checkbox",
                id: "restore_truncate",
                value: "true",
                checked: p,
                onChange: ()=>u((e=>!e))
            }), "Delete all files before restoring backup."))), r.a.createElement(se.a.Confirm, {
                title: 'Delete "'.concat(t.name, '"'),
                confirm: "Continue",
                open: "delete" === l,
                onClose: ()=>s(""),
                onConfirmed: ()=>{
                    m(!0),
                    b("backups"),
                    ((e,t)=>new Promise(((a,n)=>{
                        Ie.a.delete("/api/client/servers/".concat(e, "/backups/").concat(t)).then((()=>a())).catch(n)
                    }
                    )))(a, t.uuid).then((()=>h((e=>xn(xn({}, e), {}, {
                        items: e.items.filter((e=>e.uuid !== t.uuid)),
                        backupCount: e.backupCount - 1
                    })), !1))).catch((e=>{
                        console.error(e),
                        g({
                            key: "backups",
                            error: e
                        }),
                        m(!1),
                        s("")
                    }
                    ))
                }
            }, "This is a permanent operation. The backup cannot be recovered once deleted."), r.a.createElement(k.a, {
                visible: d,
                fixed: !0
            }), t.isSuccessful ? r.a.createElement(On, {
                renderToggle: e=>r.a.createElement(Nn, {
                    onClick: e
                }, r.a.createElement(Ae.a, {
                    icon: me.o
                }))
            }, r.a.createElement(Dn, null, r.a.createElement(i.a, {
                action: "backup.download"
            }, r.a.createElement(wn, {
                onClick: ()=>{
                    m(!0),
                    b("backups"),
                    ((e,t)=>new Promise(((a,n)=>{
                        Ie.a.get("/api/client/servers/".concat(e, "/backups/").concat(t, "/download")).then((e=>{
                            let {data: t} = e;
                            return a(t.attributes.url)
                        }
                        )).catch(n)
                    }
                    )))(a, t.uuid).then((e=>{
                        window.location = e
                    }
                    )).catch((e=>{
                        console.error(e),
                        g({
                            key: "backups",
                            error: e
                        })
                    }
                    )).then((()=>m(!1)))
                }
            }, r.a.createElement(Pn, {
                fixedWidth: !0,
                icon: me.i
            }), r.a.createElement(In, null, "Download"))), r.a.createElement(i.a, {
                action: "backup.restore"
            }, r.a.createElement(wn, {
                onClick: ()=>s("restore")
            }, r.a.createElement(Tn, {
                fixedWidth: !0,
                icon: me.f
            }), r.a.createElement(Fn, null, "Restore"))), r.a.createElement(i.a, {
                action: "backup.delete"
            }, r.a.createElement(r.a.Fragment, null, r.a.createElement(wn, {
                onClick: f
            }, r.a.createElement(An, {
                fixedWidth: !0,
                icon: t.isLocked ? me.O : me.D
            }), t.isLocked ? "Unlock" : "Lock"), !t.isLocked && r.a.createElement(wn, {
                danger: !0,
                onClick: ()=>s("delete")
            }, r.a.createElement(Rn, {
                fixedWidth: !0,
                icon: me.N
            }), r.a.createElement(Mn, null, "Delete")))))) : r.a.createElement(zn, {
                onClick: ()=>s("delete")
            }, r.a.createElement(Ae.a, {
                icon: me.N
            })))
        }
          , jn = Object(Pe.c)("p").withConfig({
            displayName: "BackupContextMenu___StyledP",
            componentId: "sc-1p494ba-0"
        })({
            marginTop: "1rem",
            marginBottom: "-0.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 18%, 30%, var(--tw-bg-opacity))",
            padding: "0.75rem",
            borderRadius: "0.25rem"
        })
          , Cn = Object(Pe.c)("label").withConfig({
            displayName: "BackupContextMenu___StyledLabel",
            componentId: "sc-1p494ba-1"
        })({
            fontSize: "1rem",
            lineHeight: "1.5rem",
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
        })
          , kn = Object(Pe.c)(Ve.b).withConfig({
            displayName: "BackupContextMenu___StyledInput",
            componentId: "sc-1p494ba-2"
        })({
            "--tw-text-opacity": "1",
            color: "rgba(239, 68, 68, var(--tw-text-opacity)) !important",
            width: "1.25rem !important",
            height: "1.25rem !important",
            marginRight: "0.5rem"
        })
          , Nn = Object(Pe.c)("button").withConfig({
            displayName: "BackupContextMenu___StyledButton",
            componentId: "sc-1p494ba-3"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))",
            transitionProperty: "background-color, border-color, color, fill, stroke",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms",
            ":hover": {
                "--tw-text-opacity": "1",
                color: "hsla(214, 15%, 91%, var(--tw-text-opacity))"
            },
            padding: "0.5rem"
        })
          , Dn = Object(Pe.c)("div").withConfig({
            displayName: "BackupContextMenu___StyledDiv",
            componentId: "sc-1p494ba-4"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , Pn = Object(Pe.c)(Ae.a).withConfig({
            displayName: "BackupContextMenu___StyledFontAwesomeIcon",
            componentId: "sc-1p494ba-5"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem"
        })
          , In = Object(Pe.c)("span").withConfig({
            displayName: "BackupContextMenu___StyledSpan",
            componentId: "sc-1p494ba-6"
        })({
            marginLeft: "0.5rem"
        })
          , Tn = Object(Pe.c)(Ae.a).withConfig({
            displayName: "BackupContextMenu___StyledFontAwesomeIcon2",
            componentId: "sc-1p494ba-7"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem"
        })
          , Fn = Object(Pe.c)("span").withConfig({
            displayName: "BackupContextMenu___StyledSpan2",
            componentId: "sc-1p494ba-8"
        })({
            marginLeft: "0.5rem"
        })
          , An = Object(Pe.c)(Ae.a).withConfig({
            displayName: "BackupContextMenu___StyledFontAwesomeIcon3",
            componentId: "sc-1p494ba-9"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem",
            marginRight: "0.5rem"
        })
          , Rn = Object(Pe.c)(Ae.a).withConfig({
            displayName: "BackupContextMenu___StyledFontAwesomeIcon4",
            componentId: "sc-1p494ba-10"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem"
        })
          , Mn = Object(Pe.c)("span").withConfig({
            displayName: "BackupContextMenu___StyledSpan3",
            componentId: "sc-1p494ba-11"
        })({
            marginLeft: "0.5rem"
        })
          , zn = Object(Pe.c)("button").withConfig({
            displayName: "BackupContextMenu___StyledButton2",
            componentId: "sc-1p494ba-12"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))",
            transitionProperty: "background-color, border-color, color, fill, stroke",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms",
            ":hover": {
                "--tw-text-opacity": "1",
                color: "hsla(214, 15%, 91%, var(--tw-text-opacity))"
            },
            padding: "0.5rem"
        });
        function Bn(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Ln(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Bn(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Bn(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Hn = Object(Pe.c)($e.a).withConfig({
            displayName: "BackupRow___StyledGreyRowBox",
            componentId: "sc-1lzi0pw-0"
        })({
            flexWrap: "wrap",
            alignItems: "center",
            "@media (min-width: 768px)": {
                flexWrap: "nowrap"
            }
        })
          , Wn = Object(Pe.c)("div").withConfig({
            displayName: "BackupRow___StyledDiv",
            componentId: "sc-1lzi0pw-1"
        })({
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "100%",
            "@media (min-width: 768px)": {
                flex: "1 1 0%"
            }
        })
          , Un = Object(Pe.c)("div").withConfig({
            displayName: "BackupRow___StyledDiv2",
            componentId: "sc-1lzi0pw-2"
        })({
            marginRight: "1rem"
        })
          , Kn = Object(Pe.c)(Ae.a).withConfig({
            displayName: "BackupRow___StyledFontAwesomeIcon",
            componentId: "sc-1lzi0pw-3"
        })({
            "--tw-text-opacity": "1",
            color: "rgba(245, 158, 11, var(--tw-text-opacity))"
        })
          , qn = Object(Pe.c)(Ae.a).withConfig({
            displayName: "BackupRow___StyledFontAwesomeIcon2",
            componentId: "sc-1lzi0pw-4"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , Vn = Object(Pe.c)("div").withConfig({
            displayName: "BackupRow___StyledDiv3",
            componentId: "sc-1lzi0pw-5"
        })({
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        })
          , $n = Object(Pe.c)("div").withConfig({
            displayName: "BackupRow___StyledDiv4",
            componentId: "sc-1lzi0pw-6"
        })({
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            marginBottom: "0.25rem"
        })
          , Xn = Object(Pe.c)("span").withConfig({
            displayName: "BackupRow___StyledSpan",
            componentId: "sc-1lzi0pw-7"
        })({
            "--tw-bg-opacity": "1",
            backgroundColor: "rgba(239, 68, 68, var(--tw-bg-opacity))",
            paddingTop: "1px",
            paddingBottom: "1px",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderRadius: "9999px",
            "--tw-text-opacity": "1",
            color: "rgba(255, 255, 255, var(--tw-text-opacity))",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            textTransform: "uppercase",
            borderWidth: "1px",
            "--tw-border-opacity": "1",
            borderColor: "rgba(220, 38, 38, var(--tw-border-opacity))",
            marginRight: "0.5rem"
        })
          , Yn = Object(Pe.c)("p").withConfig({
            displayName: "BackupRow___StyledP",
            componentId: "sc-1lzi0pw-8"
        })({
            overflowWrap: "break-word",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        })
          , Gn = Object(Pe.c)("span").withConfig({
            displayName: "BackupRow___StyledSpan2",
            componentId: "sc-1lzi0pw-9"
        })({
            marginLeft: "0.75rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            fontWeight: "200",
            display: "none",
            "@media (min-width: 640px)": {
                display: "inline"
            }
        })
          , Jn = Object(Pe.c)("p").withConfig({
            displayName: "BackupRow___StyledP2",
            componentId: "sc-1lzi0pw-10"
        })({
            marginTop: "0.25rem",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            "@media (min-width: 768px)": {
                marginTop: "0px"
            }
        })
          , Zn = Object(Pe.c)("div").withConfig({
            displayName: "BackupRow___StyledDiv5",
            componentId: "sc-1lzi0pw-11"
        })({
            flex: "1 1 0%",
            marginTop: "1rem",
            "@media (min-width: 768px)": {
                flex: "none",
                width: "12rem",
                marginTop: "0px",
                marginLeft: "2rem",
                textAlign: "center"
            }
        })
          , Qn = Object(Pe.c)("p").withConfig({
            displayName: "BackupRow___StyledP3",
            componentId: "sc-1lzi0pw-12"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , er = Object(Pe.c)("p").withConfig({
            displayName: "BackupRow___StyledP4",
            componentId: "sc-1lzi0pw-13"
        })({
            fontSize: "0.625rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
            textTransform: "uppercase",
            marginTop: "0.25rem"
        })
          , tr = Object(Pe.c)("div").withConfig({
            displayName: "BackupRow___StyledDiv6",
            componentId: "sc-1lzi0pw-14"
        })({
            marginTop: "1rem",
            marginLeft: "1.5rem",
            "@media (min-width: 768px)": {
                marginTop: "0px"
            }
        })
          , ar = Object(Pe.c)("div").withConfig({
            displayName: "BackupRow___StyledDiv7",
            componentId: "sc-1lzi0pw-15"
        })({
            padding: "0.5rem",
            visibility: "hidden"
        })
          , nr = a(256);
        const rr = ()=>{
            const {page: e, setPage: t} = Object(n.useContext)(cn)
              , {clearFlashes: a, clearAndAddHttpError: c} = Object(Ke.a)()
              , {data: l, error: s, isValidating: d} = ln()
              , m = o.a.useStoreState((e=>e.server.data.featureLimits.backups));
            return Object(n.useEffect)((()=>{
                s ? c({
                    error: s,
                    key: "backups"
                }) : a("backups")
            }
            ), [s]),
            !l || s && d ? r.a.createElement(g.a, {
                size: "large",
                centered: !0
            }) : r.a.createElement(p, {
                title: "Backups"
            }, r.a.createElement(or, {
                byKey: "backups"
            }), r.a.createElement(nr.a, {
                data: l,
                onPageSelect: t
            }, (t=>{
                let {items: a} = t;
                return a.length ? a.map(((e,t)=>r.a.createElement(cr, {
                    key: e.uuid,
                    backup: e,
                    $_css: t > 0 ? {
                        marginTop: "0.5rem"
                    } : void 0
                }))) : m ? r.a.createElement(ir, null, e > 1 ? "Looks like we've run out of backups to show you, try going back a page." : "It looks like there are no backups currently stored for this server.") : null
            }
            )), 0 === m && r.a.createElement(lr, null, "Backups cannot be created for this server because the backup limit is set to 0."), r.a.createElement(i.a, {
                action: "backup.create"
            }, r.a.createElement(sr, null, m > 0 && l.backupCount > 0 && r.a.createElement(dr, null, l.backupCount, " of ", m, " backups have been created for this server."), m > 0 && m > l.backupCount && r.a.createElement(mr, null))))
        }
        ;
        var or = Object(Pe.c)(Fe.a).withConfig({
            displayName: "BackupContainer___StyledFlashMessageRender",
            componentId: "sc-1vjo0fh-0"
        })({
            marginBottom: "1rem"
        })
          , ir = Object(Pe.c)("p").withConfig({
            displayName: "BackupContainer___StyledP",
            componentId: "sc-1vjo0fh-1"
        })({
            textAlign: "center",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , cr = Object(Pe.c)((e=>{
            let {backup: t, className: a} = e;
            const {mutate: n} = ln();
            return Object(q.a)("".concat(T.a.BACKUP_COMPLETED, ":").concat(t.uuid), (e=>{
                try {
                    const a = JSON.parse(e);
                    n((e=>Ln(Ln({}, e), {}, {
                        items: e.items.map((e=>e.uuid !== t.uuid ? e : Ln(Ln({}, e), {}, {
                            isSuccessful: a.is_successful || !0,
                            checksum: (a.checksum_type || "") + ":" + (a.checksum || ""),
                            bytes: a.file_size || 0,
                            completedAt: new Date
                        })))
                    })), !1)
                } catch (e) {
                    console.warn(e)
                }
            }
            )),
            r.a.createElement(Hn, {
                className: a
            }, r.a.createElement(Wn, null, r.a.createElement(Un, null, null !== t.completedAt ? t.isLocked ? r.a.createElement(Kn, {
                icon: me.D
            }) : r.a.createElement(qn, {
                icon: me.c
            }) : r.a.createElement(g.a, {
                size: "small"
            })), r.a.createElement(Vn, null, r.a.createElement($n, null, null !== t.completedAt && !t.isSuccessful && r.a.createElement(Xn, null, "Failed"), r.a.createElement(Yn, null, t.name), null !== t.completedAt && t.isSuccessful && r.a.createElement(Gn, null, Object(ae.a)(t.bytes))), r.a.createElement(Jn, null, t.checksum))), r.a.createElement(Zn, null, r.a.createElement(Qn, {
                title: Object(Bt.b)(t.createdAt, "ddd, MMMM do, yyyy HH:mm:ss")
            }, Object(Bt.c)(t.createdAt, {
                includeSeconds: !0,
                addSuffix: !0
            })), r.a.createElement(er, null, "Created")), r.a.createElement(i.a, {
                action: ["backup.download", "backup.restore", "backup.delete"],
                matchAny: !0
            }, r.a.createElement(tr, {
                style: {
                    marginRight: "-0.5rem"
                }
            }, t.completedAt ? r.a.createElement(Sn, {
                backup: t
            }) : r.a.createElement(ar, null, r.a.createElement(Ae.a, {
                icon: me.o
            })))))
        }
        )).withConfig({
            displayName: "BackupContainer___StyledBackupRow",
            componentId: "sc-1vjo0fh-2"
        })(["", ""], (e=>e.$_css))
          , lr = Object(Pe.c)("p").withConfig({
            displayName: "BackupContainer___StyledP2",
            componentId: "sc-1vjo0fh-3"
        })({
            textAlign: "center",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , sr = Object(Pe.c)("div").withConfig({
            displayName: "BackupContainer___StyledDiv",
            componentId: "sc-1vjo0fh-4"
        })({
            marginTop: "1.5rem",
            alignItems: "center",
            justifyContent: "flex-end",
            "@media (min-width: 640px)": {
                display: "flex"
            }
        })
          , dr = Object(Pe.c)("p").withConfig({
            displayName: "BackupContainer___StyledP3",
            componentId: "sc-1vjo0fh-5"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            marginBottom: "1rem",
            "@media (min-width: 640px)": {
                marginRight: "1.5rem",
                marginBottom: "0px"
            }
        })
          , mr = Object(Pe.c)((()=>{
            const e = o.a.useStoreState((e=>e.server.data.uuid))
              , {clearFlashes: t, clearAndAddHttpError: a} = Object(Ke.a)()
              , [i,c] = Object(n.useState)(!1)
              , {mutate: l} = ln();
            Object(n.useEffect)((()=>{
                t("backups:create")
            }
            ), [i]);
            return r.a.createElement(r.a.Fragment, null, i && r.a.createElement(Me.c, {
                onSubmit: (n,r)=>{
                    let {setSubmitting: o} = r;
                    t("backups:create"),
                    (async(e,t)=>{
                        const {data: a} = await Ie.a.post("/api/client/servers/".concat(e, "/backups"), {
                            name: t.name,
                            ignored: t.ignored,
                            is_locked: t.isLocked
                        });
                        return Object(rn.c)(a)
                    }
                    )(e, n).then((e=>{
                        l((t=>mn(mn({}, t), {}, {
                            items: t.items.concat(e),
                            backupCount: t.backupCount + 1
                        })), !1),
                        c(!1)
                    }
                    )).catch((e=>{
                        a({
                            key: "backups:create",
                            error: e
                        }),
                        o(!1)
                    }
                    ))
                }
                ,
                initialValues: {
                    name: "",
                    ignored: "",
                    isLocked: !1
                },
                validationSchema: Object(Be.d)().shape({
                    name: Object(Be.f)().max(191),
                    ignored: Object(Be.f)(),
                    isLocked: Object(Be.b)()
                })
            }, r.a.createElement(pn, {
                appear: !0,
                visible: i,
                onDismissed: ()=>c(!1)
            })), r.a.createElement(fn, {
                onClick: ()=>c(!0)
            }, "Create backup"))
        }
        )).withConfig({
            displayName: "BackupContainer___StyledCreateBackupButton",
            componentId: "sc-1vjo0fh-6"
        })({
            width: "100%",
            "@media (min-width: 640px)": {
                width: "auto"
            }
        })
          , pr = a(194)
          , ur = ()=>{
            const e = o.a.useStoreState((e=>e.server.data.uuid));
            return Object(on.a)(["server:allocations", e], (async()=>{
                const {data: t} = await Ie.a.get("/api/client/servers/".concat(e, "/network/allocations"));
                return (t.data || []).map(rn.b)
            }
            ), {
                revalidateOnFocus: !1,
                revalidateOnMount: !1
            })
        }
        ;
        function br(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function gr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? br(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : br(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var hr = e=>{
            let {allocation: t} = e;
            const [a,i] = Object(n.useState)(!1)
              , c = o.a.useStoreState((e=>e.server.data.uuid))
              , l = o.a.useStoreActions((e=>e.server.setServerFromState))
              , {mutate: s} = ur()
              , {clearFlashes: d, clearAndAddHttpError: m} = Object(Ke.b)("server:network");
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(se.a.Confirm, {
                open: a,
                onClose: ()=>i(!1),
                title: "Remove Allocation",
                confirm: "Delete",
                onConfirmed: ()=>{
                    d(),
                    s((e=>null == e ? void 0 : e.filter((e=>e.id !== t))), !1),
                    l((e=>gr(gr({}, e), {}, {
                        allocations: e.allocations.filter((e=>e.id !== t))
                    }))),
                    (async(e,t)=>await Ie.a.delete("/api/client/servers/".concat(e, "/network/allocations/").concat(t)))(c, t).catch((e=>{
                        m(e),
                        s()
                    }
                    ))
                }
            }, "This allocation will be immediately removed from your server."), r.a.createElement(le.a.Danger, {
                variant: le.a.Variants.Secondary,
                size: le.a.Sizes.Small,
                shape: le.a.Shapes.IconSquare,
                type: "button",
                onClick: ()=>i(!0)
            }, r.a.createElement(yr, {
                icon: me.N
            })))
        }
          , yr = Object(Pe.c)(ue.a).withConfig({
            displayName: "DeleteAllocationButton___StyledIcon",
            componentId: "sc-gh508q-0"
        })({
            width: "0.75rem",
            height: "auto"
        })
          , fr = e=>{
            let {dark: t, className: a, children: n} = e;
            return r.a.createElement("code", {
                className: A()("font-mono text-sm px-2 py-1 inline-block rounded", a, {
                    "bg-neutral-700": !t,
                    "bg-neutral-900 text-gray-100": t
                })
            }, n)
        }
        ;
        function wr(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function vr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? wr(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : wr(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        const Or = Pe.c.label.withConfig({
            displayName: "AllocationRow__Label",
            componentId: "sc-yy3pdt-0"
        })(["", ""], {
            textTransform: "uppercase",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            marginTop: "0.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
            display: "block",
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
            userSelect: "none",
            transitionProperty: "background-color, border-color, color, fill, stroke",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms"
        })
          , _r = e=>{
            let {allocation: t} = e;
            const [a,c] = Object(n.useState)(!1)
              , {clearFlashes: l, clearAndAddHttpError: s} = Object(Ke.b)("server:network")
              , d = o.a.useStoreState((e=>e.server.data.uuid))
              , {mutate: m} = ur()
              , p = Object(n.useCallback)(((e,t)=>{
                m((a=>null == a ? void 0 : a.map((a=>a.id === e ? vr(vr({}, a), {}, {
                    notes: t
                }) : a))), !1)
            }
            ), [])
              , u = Object(P.debounce)((e=>{
                c(!0),
                l(),
                (async(e,t,a)=>{
                    const {data: n} = await Ie.a.post("/api/client/servers/".concat(e, "/network/allocations/").concat(t), {
                        notes: a
                    });
                    return Object(rn.b)(n)
                }
                )(d, t.id, e).then((()=>p(t.id, e))).catch((e=>s(e))).then((()=>c(!1)))
            }
            ), 750);
            return r.a.createElement($e.a, {
                $hoverable: !1,
                className: "flex-wrap md:flex-nowrap mt-2"
            }, r.a.createElement("div", {
                className: "flex items-center w-full md:w-auto"
            }, r.a.createElement("div", {
                className: "pl-4 pr-6 text-neutral-400"
            }, r.a.createElement(Ae.a, {
                icon: me.G
            })), r.a.createElement("div", {
                className: "mr-4 flex-1 md:w-40"
            }, t.alias ? r.a.createElement(Oe, {
                text: t.alias
            }, r.a.createElement(fr, {
                dark: !0,
                className: "w-40 truncate"
            }, t.alias)) : r.a.createElement(Oe, {
                text: Object(ae.b)(t.ip)
            }, r.a.createElement(fr, {
                dark: !0
            }, Object(ae.b)(t.ip))), r.a.createElement(Or, null, t.alias ? "Hostname" : "IP Address")), r.a.createElement("div", {
                className: "w-16 md:w-24 overflow-hidden"
            }, r.a.createElement(fr, {
                dark: !0
            }, t.port), r.a.createElement(Or, null, "Port"))), r.a.createElement("div", {
                className: "mt-4 w-full md:mt-0 md:flex-1 md:w-auto"
            }, r.a.createElement(pr.a, {
                visible: a
            }, r.a.createElement(Ve.a, {
                className: "bg-neutral-800 hover:border-neutral-600 border-transparent",
                placeholder: "Notes",
                defaultValue: t.notes || void 0,
                onChange: e=>u(e.currentTarget.value)
            }))), r.a.createElement("div", {
                className: "flex justify-end space-x-4 mt-4 w-full md:mt-0 md:w-48"
            }, t.isDefault ? r.a.createElement(le.a, {
                size: le.a.Sizes.Small,
                className: "!text-gray-50 !bg-blue-600",
                disabled: !0
            }, "Primary") : r.a.createElement(r.a.Fragment, null, r.a.createElement(i.a, {
                action: "allocation.delete"
            }, r.a.createElement(hr, {
                allocation: t.id
            })), r.a.createElement(i.a, {
                action: "allocation.update"
            }, r.a.createElement(le.a.Text, {
                size: le.a.Sizes.Small,
                onClick: ()=>{
                    l(),
                    m((e=>null == e ? void 0 : e.map((e=>vr(vr({}, e), {}, {
                        isDefault: e.id === t.id
                    })))), !1),
                    (async(e,t)=>{
                        const {data: a} = await Ie.a.post("/api/client/servers/".concat(e, "/network/allocations/").concat(t, "/primary"));
                        return Object(rn.b)(a)
                    }
                    )(d, t.id).catch((e=>{
                        s(e),
                        m()
                    }
                    ))
                }
            }, "Make Primary")))))
        }
        ;
        var Er = Object(n.memo)(_r, b.a)
          , xr = a(226);
        function Sr(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function jr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Sr(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Sr(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Cr = ()=>{
            const [e,t] = Object(n.useState)(!1)
              , a = o.a.useStoreState((e=>e.server.data.uuid))
              , c = o.a.useStoreState((e=>e.server.data.featureLimits.allocations))
              , l = o.a.useStoreState((e=>e.server.data.allocations), b.a)
              , s = o.a.useStoreActions((e=>e.server.setServerFromState))
              , {clearFlashes: d, clearAndAddHttpError: m} = Object(Ke.b)("server:network")
              , {data: u, error: h, mutate: y} = ur();
            Object(n.useEffect)((()=>{
                y(l)
            }
            ), []),
            Object(n.useEffect)((()=>{
                m(h)
            }
            ), [h]),
            Object(xr.a)((()=>{
                u && s((e=>jr(jr({}, e), {}, {
                    allocations: u
                })))
            }
            ), [u]);
            return r.a.createElement(p, {
                showFlashKey: "server:network",
                title: "Network"
            }, u ? r.a.createElement(r.a.Fragment, null, u.map((e=>r.a.createElement(Er, {
                key: "".concat(e.ip, ":").concat(e.port),
                allocation: e
            }))), c > 0 && r.a.createElement(i.a, {
                action: "allocation.create"
            }, r.a.createElement(k.a, {
                visible: e
            }), r.a.createElement(kr, null, r.a.createElement(Nr, null, "You are currently using ", u.length, " of ", c, " allowed allocations for this server."), c > u.length && r.a.createElement(Dr, {
                color: "primary",
                onClick: ()=>{
                    d(),
                    t(!0),
                    (async e=>{
                        const {data: t} = await Ie.a.post("/api/client/servers/".concat(e, "/network/allocations"));
                        return Object(rn.b)(t)
                    }
                    )(a).then((e=>(s((t=>jr(jr({}, t), {}, {
                        allocations: t.allocations.concat(e)
                    }))),
                    y(null == u ? void 0 : u.concat(e), !1)))).catch((e=>m(e))).then((()=>t(!1)))
                }
            }, "Create Allocation")))) : r.a.createElement(g.a, {
                size: "large",
                centered: !0
            }))
        }
          , kr = Object(Pe.c)("div").withConfig({
            displayName: "NetworkContainer___StyledDiv",
            componentId: "sc-1covx0t-0"
        })({
            marginTop: "1.5rem",
            alignItems: "center",
            justifyContent: "flex-end",
            "@media (min-width: 640px)": {
                display: "flex"
            }
        })
          , Nr = Object(Pe.c)("p").withConfig({
            displayName: "NetworkContainer___StyledP",
            componentId: "sc-1covx0t-1"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            marginBottom: "1rem",
            "@media (min-width: 640px)": {
                marginRight: "1.5rem",
                marginBottom: "0px"
            }
        })
          , Dr = Object(Pe.c)(He.a).withConfig({
            displayName: "NetworkContainer___StyledButton",
            componentId: "sc-1covx0t-2"
        })({
            width: "100%",
            "@media (min-width: 640px)": {
                width: "auto"
            }
        })
          , Pr = a(204)
          , Ir = a(262)
          , Tr = a(228)
          , Fr = a(186);
        function Ar(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Rr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ar(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ar(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        const Mr = e=>{
            var t, a, i;
            let {variable: c} = e;
            const l = "server:startup:".concat(c.envVariable)
              , s = o.a.useStoreState((e=>e.server.data.uuid))
              , [d,m] = Object(n.useState)(!1)
              , [p] = Object(N.a)(["startup.update"])
              , {clearFlashes: u, clearAndAddHttpError: b} = Object(Ke.a)()
              , {mutate: g} = Object(Tr.a)(s)
              , h = Object(P.debounce)((e=>{
                m(!0),
                u(l),
                Object(Ir.a)(s, c.envVariable, e).then((e=>{
                    let[t,a] = e;
                    return g((e=>Rr(Rr({}, e), {}, {
                        invocation: a,
                        variables: (e.variables || []).map((e=>e.envVariable === t.envVariable ? t : e))
                    })), !1)
                }
                )).catch((e=>{
                    console.error(e),
                    b({
                        error: e,
                        key: l
                    })
                }
                )).then((()=>m(!1)))
            }
            ), 500)
              , y = c.rules.some((e=>"boolean" === e || "in:0,1" === e || "in:1,0" === e || "in:true,false" === e || "in:false,true" === e))
              , f = c.rules.some((e=>"string" === e))
              , w = (null === (t = c.rules.find((e=>e.startsWith("in:")))) || void 0 === t ? void 0 : t.split(",")) || [];
            return r.a.createElement(ra, {
                title: r.a.createElement("p", {
                    className: "text-sm uppercase"
                }, !c.isEditable && r.a.createElement("span", {
                    className: "bg-neutral-700 text-xs py-1 px-2 rounded-full mr-2 mb-1"
                }, "Read Only"), c.name)
            }, r.a.createElement(Fe.a, {
                byKey: l,
                className: "mb-2 md:mb-4"
            }), r.a.createElement(pr.a, {
                visible: d
            }, y ? r.a.createElement(r.a.Fragment, null, r.a.createElement(Pr.a, {
                readOnly: !p || !c.isEditable,
                name: c.envVariable,
                defaultChecked: f ? "true" === c.serverValue : "1" === c.serverValue,
                onChange: ()=>{
                    p && c.isEditable && h(f ? "true" === c.serverValue ? "false" : "true" : "1" === c.serverValue ? "0" : "1")
                }
            })) : r.a.createElement(r.a.Fragment, null, w.length > 0 ? r.a.createElement(r.a.Fragment, null, r.a.createElement(Fr.a, {
                onChange: e=>h(e.target.value),
                name: c.envVariable,
                defaultValue: null !== (a = c.serverValue) && void 0 !== a ? a : c.defaultValue,
                disabled: !p || !c.isEditable
            }, w.map((e=>r.a.createElement("option", {
                key: e.replace("in:", ""),
                value: e.replace("in:", "")
            }, e.replace("in:", "")))))) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Ve.b, {
                onKeyUp: e=>{
                    p && c.isEditable && h(e.currentTarget.value)
                }
                ,
                readOnly: !p || !c.isEditable,
                name: c.envVariable,
                defaultValue: null !== (i = c.serverValue) && void 0 !== i ? i : "",
                placeholder: c.defaultValue
            })))), r.a.createElement("p", {
                className: "mt-1 text-xs text-neutral-300"
            }, c.description))
        }
        ;
        var zr = Object(n.memo)(Mr, b.a)
          , Br = a(56)
          , Lr = a(263);
        function Hr(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Wr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Hr(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Hr(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Ur = ()=>{
            const [e,t] = Object(n.useState)(!1)
              , {clearFlashes: a, clearAndAddHttpError: i} = Object(Ke.a)()
              , c = o.a.useStoreState((e=>e.server.data.uuid))
              , l = o.a.useStoreState((e=>{
                let {server: t} = e;
                return {
                    variables: t.data.variables,
                    invocation: t.data.invocation,
                    dockerImage: t.data.dockerImage
                }
            }
            ), b.a)
              , {data: s, error: d, isValidating: m, mutate: u} = Object(Tr.a)(c, Wr(Wr({}, l), {}, {
                dockerImages: {
                    [l.dockerImage]: l.dockerImage
                }
            }))
              , h = o.a.useStoreActions((e=>e.server.setServerFromState))
              , y = s && !Object.values(s.dockerImages).map((e=>e.toLowerCase())).includes(l.dockerImage.toLowerCase());
            Object(n.useEffect)((()=>{
                u()
            }
            ), []),
            Object(xr.a)((()=>{
                s && h((e=>Wr(Wr({}, e), {}, {
                    invocation: s.invocation,
                    variables: s.variables
                })))
            }
            ), [s]);
            const f = Object(n.useCallback)((e=>{
                t(!0),
                a("startup:image");
                const n = e.currentTarget.value;
                Object(Lr.a)(c, n).then((()=>h((e=>Wr(Wr({}, e), {}, {
                    dockerImage: n
                }))))).catch((e=>{
                    console.error(e),
                    i({
                        key: "startup:image",
                        error: e
                    })
                }
                )).then((()=>t(!1)))
            }
            ), [c]);
            return s ? r.a.createElement(p, {
                title: "Startup Settings",
                showFlashKey: "startup:image"
            }, r.a.createElement(Kr, null, r.a.createElement(qr, {
                title: "Startup Command"
            }, r.a.createElement(Vr, null, r.a.createElement($r, null, s.invocation))), r.a.createElement(Xr, {
                title: "Docker Image"
            }, Object.keys(s.dockerImages).length > 1 && !y ? r.a.createElement(r.a.Fragment, null, r.a.createElement(pr.a, {
                visible: e
            }, r.a.createElement(Fr.a, {
                disabled: Object.keys(s.dockerImages).length < 2,
                onChange: f,
                defaultValue: l.dockerImage
            }, Object.keys(s.dockerImages).map((e=>r.a.createElement("option", {
                key: s.dockerImages[e],
                value: s.dockerImages[e]
            }, e))))), r.a.createElement(Yr, null, "This is an advanced feature allowing you to select a Docker image to use when running this server instance.")) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Ve.b, {
                disabled: !0,
                readOnly: !0,
                value: l.dockerImage
            }), y && r.a.createElement(Gr, null, "This ", "server's", " Docker image has been manually set by an administrator and cannot be changed through this UI.")))), r.a.createElement(Jr, null, "Variables"), r.a.createElement(Zr, null, s.variables.map((e=>r.a.createElement(zr, {
                key: e.envVariable,
                variable: e
            }))))) : !d || d && m ? r.a.createElement(g.a, {
                centered: !0,
                size: g.a.Size.LARGE
            }) : r.a.createElement(Br.b, {
                title: "Oops!",
                message: Object(Ie.c)(d),
                onRetry: ()=>u()
            })
        }
          , Kr = Object(Pe.c)("div").withConfig({
            displayName: "StartupContainer___StyledDiv",
            componentId: "sc-163imy2-0"
        })({
            "@media (min-width: 768px)": {
                display: "flex"
            }
        })
          , qr = Object(Pe.c)(ra).withConfig({
            displayName: "StartupContainer___StyledTitledGreyBox",
            componentId: "sc-163imy2-1"
        })({
            flex: "1 1 0%"
        })
          , Vr = Object(Pe.c)("div").withConfig({
            displayName: "StartupContainer___StyledDiv2",
            componentId: "sc-163imy2-2"
        })({
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem"
        })
          , $r = Object(Pe.c)("p").withConfig({
            displayName: "StartupContainer___StyledP",
            componentId: "sc-163imy2-3"
        })({
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(210, 24%, 16%, var(--tw-bg-opacity))",
            borderRadius: "0.25rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "1rem",
            paddingRight: "1rem"
        })
          , Xr = Object(Pe.c)(ra).withConfig({
            displayName: "StartupContainer___StyledTitledGreyBox2",
            componentId: "sc-163imy2-4"
        })({
            flex: "1 1 0%",
            marginTop: "2rem",
            "@media (min-width: 768px)": {
                marginTop: "0px",
                marginLeft: "2.5rem"
            },
            "@media (min-width: 1024px)": {
                flex: "none",
                width: "33.333333%"
            }
        })
          , Yr = Object(Pe.c)("p").withConfig({
            displayName: "StartupContainer___StyledP2",
            componentId: "sc-163imy2-5"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            marginTop: "0.5rem"
        })
          , Gr = Object(Pe.c)("p").withConfig({
            displayName: "StartupContainer___StyledP3",
            componentId: "sc-163imy2-6"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            marginTop: "0.5rem"
        })
          , Jr = Object(Pe.c)("h3").withConfig({
            displayName: "StartupContainer___StyledH",
            componentId: "sc-163imy2-7"
        })({
            marginTop: "2rem",
            marginBottom: "0.5rem",
            fontSize: "1.5rem",
            lineHeight: "2rem"
        })
          , Zr = Object(Pe.c)("div").withConfig({
            displayName: "StartupContainer___StyledDiv3",
            componentId: "sc-163imy2-8"
        })({
            display: "grid",
            gap: "2rem",
            "@media (min-width: 768px)": {
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
            }
        })
          , Qr = a(35)
          , eo = a(29)
          , to = a(189)
          , ao = a(179);
        function no(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function ro(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? no(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : no(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var oo = e=>{
            let {files: t, useMoveTerminology: a} = e
              , n = d()(e, ["files", "useMoveTerminology"]);
            const i = o.a.useStoreState((e=>e.server.data.uuid))
              , {mutate: c} = Object(ao.a)()
              , {clearFlashes: s, clearAndAddHttpError: m} = Object(Ke.a)()
              , p = o.a.useStoreState((e=>e.files.directory))
              , u = o.a.useStoreActions((e=>e.files.setSelectedFiles));
            return r.a.createElement(Me.c, {
                onSubmit: (e,r)=>{
                    let {name: o} = e
                      , {setSubmitting: l} = r;
                    s("files");
                    const d = o.split("/").length;
                    let b;
                    1 === t.length && (a || 1 !== d ? (a || d > 1) && c((e=>e.filter((e=>e.name !== t[0]))), !1) : c((e=>e.map((e=>e.name === t[0] ? ro(ro({}, e), {}, {
                        name: o
                    }) : e))), !1)),
                    b = a && t.length > 1 ? t.map((e=>({
                        from: e,
                        to: Object(to.join)(o, e)
                    }))) : t.map((e=>({
                        from: e,
                        to: o
                    }))),
                    ((e,t,a)=>new Promise(((n,r)=>{
                        Ie.a.put("/api/client/servers/".concat(e, "/files/rename"), {
                            root: t,
                            files: a
                        }).then((()=>n())).catch(r)
                    }
                    )))(i, p, b).then((()=>t.length > 0 ? c() : Promise.resolve())).then((()=>u([]))).catch((e=>{
                        c(),
                        l(!1),
                        m({
                            key: "files",
                            error: e
                        })
                    }
                    )).then((()=>n.onDismissed()))
                }
                ,
                initialValues: {
                    name: t.length > 1 ? "" : t[0] || ""
                }
            }, (e=>{
                let {isSubmitting: t, values: o} = e;
                return r.a.createElement(Re.b, l()({}, n, {
                    dismissable: !t,
                    showSpinnerOverlay: t
                }), r.a.createElement(io, null, r.a.createElement(co, {
                    $_css: [{
                        display: "flex",
                        flexWrap: "wrap"
                    }, a ? {
                        alignItems: "center"
                    } : {
                        alignItems: "flex-end"
                    }]
                }, r.a.createElement(lo, null, r.a.createElement(ze.a, {
                    type: "string",
                    id: "file_name",
                    name: "name",
                    label: "File Name",
                    description: a ? "Enter the new name and directory of this file or folder, relative to the current directory." : void 0,
                    autoFocus: !0
                })), r.a.createElement(so, null, r.a.createElement(mo, null, a ? "Move" : "Rename"))), a && r.a.createElement(po, null, r.a.createElement(uo, null, "New location:"), " /home/container/", Object(to.join)(p, o.name).replace(/^(\.\.\/|\/)+/, ""))))
            }
            ))
        }
          , io = Object(Pe.c)(Me.b).withConfig({
            displayName: "RenameFileModal___StyledForm",
            componentId: "sc-b95smr-0"
        })({
            margin: "0px"
        })
          , co = Object(Pe.c)("div").withConfig({
            displayName: "RenameFileModal___StyledDiv",
            componentId: "sc-b95smr-1"
        })(["", ""], (e=>e.$_css))
          , lo = Object(Pe.c)("div").withConfig({
            displayName: "RenameFileModal___StyledDiv2",
            componentId: "sc-b95smr-2"
        })({
            width: "100%",
            "@media (min-width: 640px)": {
                flex: "1 1 0%",
                marginRight: "1rem"
            }
        })
          , so = Object(Pe.c)("div").withConfig({
            displayName: "RenameFileModal___StyledDiv3",
            componentId: "sc-b95smr-3"
        })({
            width: "100%",
            marginTop: "1rem",
            "@media (min-width: 640px)": {
                width: "auto",
                marginTop: "0px"
            }
        })
          , mo = Object(Pe.c)(He.a).withConfig({
            displayName: "RenameFileModal___StyledButton",
            componentId: "sc-b95smr-4"
        })({
            width: "100%"
        })
          , po = Object(Pe.c)("p").withConfig({
            displayName: "RenameFileModal___StyledP",
            componentId: "sc-b95smr-5"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem",
            marginTop: "0.5rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))"
        })
          , uo = Object(Pe.c)("strong").withConfig({
            displayName: "RenameFileModal___StyledStrong",
            componentId: "sc-b95smr-6"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))"
        })
          , bo = (e,t,a)=>new Promise(((n,r)=>{
            Ie.a.post("/api/client/servers/".concat(e, "/files/delete"), {
                root: t,
                files: a
            }).then((()=>n())).catch(r)
        }
        ))
          , go = async(e,t,a)=>{
            const {data: n} = await Ie.a.post("/api/client/servers/".concat(e, "/files/compress"), {
                root: t,
                files: a
            }, {
                timeout: 6e4,
                timeoutErrorMessage: "It looks like this archive is taking a long time to generate. It will appear once completed."
            });
            return Object(rn.a)(n)
        }
        ;
        function ho(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function yo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ho(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ho(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var fo = e=>{
            let {files: t} = e
              , a = d()(e, ["files"]);
            const n = o.a.useStoreState((e=>e.server.data.uuid))
              , {mutate: i} = Object(ao.a)()
              , {clearFlashes: c, clearAndAddHttpError: s} = Object(Ke.a)()
              , m = o.a.useStoreState((e=>e.files.directory))
              , p = o.a.useStoreActions((e=>e.files.setSelectedFiles));
            return r.a.createElement(Me.c, {
                onSubmit: (e,r)=>{
                    let {mode: o} = e
                      , {setSubmitting: l} = r;
                    c("files"),
                    i((e=>e.map((e=>e.name === t[0].file ? yo(yo({}, e), {}, {
                        mode: Object(eo.c)(o, !e.isFile),
                        modeBits: o
                    }) : e))), !1);
                    const d = t.map((e=>({
                        file: e.file,
                        mode: o
                    })));
                    ((e,t,a)=>new Promise(((n,r)=>{
                        Ie.a.post("/api/client/servers/".concat(e, "/files/chmod"), {
                            root: t,
                            files: a
                        }).then((()=>n())).catch(r)
                    }
                    )))(n, m, d).then((()=>t.length > 0 ? i() : Promise.resolve())).then((()=>p([]))).catch((e=>{
                        i(),
                        l(!1),
                        s({
                            key: "files",
                            error: e
                        })
                    }
                    )).then((()=>a.onDismissed()))
                }
                ,
                initialValues: {
                    mode: t.length > 1 ? "" : t[0].mode || ""
                }
            }, (e=>{
                let {isSubmitting: t} = e;
                return r.a.createElement(Re.b, l()({}, a, {
                    dismissable: !t,
                    showSpinnerOverlay: t
                }), r.a.createElement(wo, null, r.a.createElement(vo, null, r.a.createElement(Oo, null, r.a.createElement(ze.a, {
                    type: "string",
                    id: "file_mode",
                    name: "mode",
                    label: "File Mode",
                    autoFocus: !0
                })), r.a.createElement(_o, null, r.a.createElement(Eo, null, "Update")))))
            }
            ))
        }
          , wo = Object(Pe.c)(Me.b).withConfig({
            displayName: "ChmodFileModal___StyledForm",
            componentId: "sc-167m6be-0"
        })({
            margin: "0px"
        })
          , vo = Object(Pe.c)("div").withConfig({
            displayName: "ChmodFileModal___StyledDiv",
            componentId: "sc-167m6be-1"
        })({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end"
        })
          , Oo = Object(Pe.c)("div").withConfig({
            displayName: "ChmodFileModal___StyledDiv2",
            componentId: "sc-167m6be-2"
        })({
            width: "100%",
            "@media (min-width: 640px)": {
                flex: "1 1 0%",
                marginRight: "1rem"
            }
        })
          , _o = Object(Pe.c)("div").withConfig({
            displayName: "ChmodFileModal___StyledDiv3",
            componentId: "sc-167m6be-3"
        })({
            width: "100%",
            marginTop: "1rem",
            "@media (min-width: 640px)": {
                width: "auto",
                marginTop: "0px"
            }
        })
          , Eo = Object(Pe.c)(He.a).withConfig({
            displayName: "ChmodFileModal___StyledButton",
            componentId: "sc-167m6be-4"
        })({
            width: "100%"
        });
        const xo = Pe.c.div.withConfig({
            displayName: "FileDropdownMenu__StyledRow",
            componentId: "sc-17ln8oh-0"
        })(["", ";", ";"], {
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            borderRadius: "0.25rem"
        }, (e=>e.$danger ? {
            ":hover": {
                "--tw-bg-opacity": "1",
                backgroundColor: "rgba(254, 226, 226, var(--tw-bg-opacity))",
                "--tw-text-opacity": "1",
                color: "rgba(185, 28, 28, var(--tw-text-opacity))"
            }
        } : {
            ":hover": {
                "--tw-bg-opacity": "1",
                backgroundColor: "hsla(214, 15%, 91%, var(--tw-bg-opacity))",
                "--tw-text-opacity": "1",
                color: "hsla(209, 18%, 30%, var(--tw-text-opacity))"
            }
        }))
          , So = e=>{
            let {icon: t, title: a} = e
              , n = d()(e, ["icon", "title"]);
            return r.a.createElement(xo, n, r.a.createElement(ko, {
                icon: t,
                fixedWidth: !0
            }), r.a.createElement(No, null, a))
        }
          , jo = e=>{
            let {file: t} = e;
            const a = Object(n.useRef)(null)
              , [c,l] = Object(n.useState)(!1)
              , [s,d] = Object(n.useState)(null)
              , [m,p] = Object(n.useState)(!1)
              , u = o.a.useStoreState((e=>e.server.data.uuid))
              , {mutate: b} = Object(ao.a)()
              , {clearAndAddHttpError: g, clearFlashes: h} = Object(Ke.a)()
              , y = o.a.useStoreState((e=>e.files.directory));
            Object(D.a)("pterodactyl:files:ctx:".concat(t.key), (e=>{
                a.current && a.current.triggerMenu(e.detail)
            }
            ));
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(se.a.Confirm, {
                open: m,
                onClose: ()=>p(!1),
                title: "Delete ".concat(t.isFile ? "File" : "Directory"),
                confirm: "Delete",
                onConfirmed: ()=>{
                    h("files"),
                    b((e=>e.filter((e=>e.key !== t.key))), !1),
                    bo(u, y, [t.name]).catch((e=>{
                        b(),
                        g({
                            key: "files",
                            error: e
                        })
                    }
                    ))
                }
            }, "You will not be able to recover the contents of ", r.a.createElement("span", {
                className: "font-semibold text-gray-50"
            }, t.name), " once deleted."), r.a.createElement(On, {
                ref: a,
                renderToggle: e=>r.a.createElement(Do, {
                    onClick: e
                }, r.a.createElement(Ae.a, {
                    icon: me.o
                }), s ? "chmod" === s ? r.a.createElement(fo, {
                    visible: !0,
                    appear: !0,
                    files: [{
                        file: t.name,
                        mode: t.modeBits
                    }],
                    onDismissed: ()=>d(null)
                }) : r.a.createElement(oo, {
                    visible: !0,
                    appear: !0,
                    files: [t.name],
                    useMoveTerminology: "move" === s,
                    onDismissed: ()=>d(null)
                }) : null, r.a.createElement(k.a, {
                    visible: c,
                    fixed: !0,
                    size: "large"
                }))
            }, r.a.createElement(i.a, {
                action: "file.update"
            }, r.a.createElement(So, {
                onClick: ()=>d("rename"),
                icon: me.H,
                title: "Rename"
            }), r.a.createElement(So, {
                onClick: ()=>d("move"),
                icon: me.C,
                title: "Move"
            }), r.a.createElement(So, {
                onClick: ()=>d("chmod"),
                icon: me.v,
                title: "Permissions"
            })), t.isFile && r.a.createElement(i.a, {
                action: "file.create"
            }, r.a.createElement(So, {
                onClick: ()=>{
                    l(!0),
                    h("files"),
                    ((e,t)=>new Promise(((a,n)=>{
                        Ie.a.post("/api/client/servers/".concat(e, "/files/copy"), {
                            location: t
                        }).then((()=>a())).catch(n)
                    }
                    )))(u, Object(to.join)(y, t.name)).then((()=>b())).catch((e=>g({
                        key: "files",
                        error: e
                    }))).then((()=>l(!1)))
                }
                ,
                icon: me.m,
                title: "Copy"
            })), t.isArchiveType() ? r.a.createElement(i.a, {
                action: "file.create"
            }, r.a.createElement(So, {
                onClick: ()=>{
                    l(!0),
                    h("files"),
                    (async(e,t,a)=>{
                        await Ie.a.post("/api/client/servers/".concat(e, "/files/decompress"), {
                            root: t,
                            file: a
                        }, {
                            timeout: 3e5,
                            timeoutErrorMessage: "It looks like this archive is taking a long time to be unarchived. Once completed the unarchived files will appear."
                        })
                    }
                    )(u, y, t.name).then((()=>b())).catch((e=>g({
                        key: "files",
                        error: e
                    }))).then((()=>l(!1)))
                }
                ,
                icon: me.f,
                title: "Unarchive"
            })) : r.a.createElement(i.a, {
                action: "file.archive"
            }, r.a.createElement(So, {
                onClick: ()=>{
                    l(!0),
                    h("files"),
                    go(u, y, [t.name]).then((()=>b())).catch((e=>g({
                        key: "files",
                        error: e
                    }))).then((()=>l(!1)))
                }
                ,
                icon: me.u,
                title: "Archive"
            })), t.isFile && r.a.createElement(So, {
                onClick: ()=>{
                    l(!0),
                    h("files"),
                    ((e,t)=>new Promise(((a,n)=>{
                        Ie.a.get("/api/client/servers/".concat(e, "/files/download"), {
                            params: {
                                file: t
                            }
                        }).then((e=>{
                            let {data: t} = e;
                            return a(t.attributes.url)
                        }
                        )).catch(n)
                    }
                    )))(u, Object(to.join)(y, t.name)).then((e=>{
                        window.location = e
                    }
                    )).catch((e=>g({
                        key: "files",
                        error: e
                    }))).then((()=>l(!1)))
                }
                ,
                icon: me.w,
                title: "Download"
            }), r.a.createElement(i.a, {
                action: "file.delete"
            }, r.a.createElement(So, {
                onClick: ()=>p(!0),
                icon: me.N,
                title: "Delete",
                $danger: !0
            }))))
        }
        ;
        var Co = Object(n.memo)(jo, b.a)
          , ko = Object(Pe.c)(Ae.a).withConfig({
            displayName: "FileDropdownMenu___StyledFontAwesomeIcon",
            componentId: "sc-17ln8oh-1"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem"
        })
          , No = Object(Pe.c)("span").withConfig({
            displayName: "FileDropdownMenu___StyledSpan",
            componentId: "sc-17ln8oh-2"
        })({
            marginLeft: "0.5rem"
        })
          , Do = Object(Pe.c)("div").withConfig({
            displayName: "FileDropdownMenu___StyledDiv",
            componentId: "sc-17ln8oh-3"
        })({
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            ":hover": {
                "--tw-text-opacity": "1",
                color: "rgba(255, 255, 255, var(--tw-text-opacity))"
            }
        });
        const Po = Object(Pe.c)(Ve.b).withConfig({
            displayName: "SelectFileCheckbox__FileActionCheckbox",
            componentId: "sc-1cv6gsl-0"
        })(["&&{", ";&:not(:checked){", ";}}"], {
            "--tw-border-opacity": "1",
            borderColor: "hsla(211, 12%, 43%, var(--tw-border-opacity))",
            backgroundColor: "rgba(0, 0, 0, 0)"
        }, {
            ":hover": {
                "--tw-border-opacity": "1",
                borderColor: "hsla(211, 13%, 65%, var(--tw-border-opacity))"
            }
        });
        var Io = e=>{
            let {name: t} = e;
            const a = o.a.useStoreState((e=>e.files.selectedFiles.indexOf(t) >= 0))
              , n = o.a.useStoreActions((e=>e.files.appendSelectedFile))
              , i = o.a.useStoreActions((e=>e.files.removeSelectedFile));
            return r.a.createElement(To, null, r.a.createElement(Po, {
                name: "selectedFiles",
                value: t,
                checked: a,
                type: "checkbox",
                onChange: e=>{
                    e.currentTarget.checked ? n(t) : i(t)
                }
            }))
        }
          , To = Object(Pe.c)("label").withConfig({
            displayName: "SelectFileCheckbox___StyledLabel",
            componentId: "sc-1cv6gsl-1"
        })({
            flex: "none",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            position: "absolute",
            alignSelf: "center",
            zIndex: "30",
            cursor: "pointer"
        })
          , Fo = a(315)
          , Ao = {
            insert: "head",
            singleton: !1
        }
          , Ro = (z()(Fo.a, Ao),
        Fo.a.locals || {});
        const Mo = Object(n.memo)((e=>{
            let {file: t, children: a} = e;
            const [n] = Object(N.a)(["file.read"])
              , [i] = Object(N.a)(["file.read-content"])
              , c = o.a.useStoreState((e=>e.files.directory))
              , l = Object(zt.i)();
            return (!t.isFile || t.isEditable() && i) && (t.isFile || n) ? r.a.createElement(zt.b, {
                className: Ro.details,
                to: "".concat(l.url).concat(t.isFile ? "/edit" : "", "#").concat(Object(eo.b)(Object(to.join)(c, t.name)))
            }, a) : r.a.createElement("div", {
                className: Ro.details
            }, a)
        }
        ), b.a)
          , zo = e=>{
            let {file: t} = e;
            return r.a.createElement("div", {
                className: Ro.file_row,
                key: t.name,
                onContextMenu: e=>{
                    e.preventDefault(),
                    window.dispatchEvent(new CustomEvent("pterodactyl:files:ctx:".concat(t.key),{
                        detail: e.clientX
                    }))
                }
            }, r.a.createElement(Io, {
                name: t.name
            }), r.a.createElement(Mo, {
                file: t
            }, r.a.createElement(Lo, null, t.isFile ? r.a.createElement(Ae.a, {
                icon: t.isSymlink ? me.x : t.isArchiveType() ? me.u : me.t
            }) : r.a.createElement(Ae.a, {
                icon: me.y
            })), r.a.createElement(Ho, null, t.name), t.isFile && r.a.createElement(Wo, null, Object(ae.a)(t.size)), r.a.createElement(Uo, {
                title: t.modifiedAt.toString()
            }, Math.abs(Object(Bt.a)(t.modifiedAt, new Date)) > 48 ? Object(Bt.b)(t.modifiedAt, "MMM do, yyyy h:mma") : Object(Bt.c)(t.modifiedAt, {
                addSuffix: !0
            }))), r.a.createElement(Co, {
                file: t
            }))
        }
        ;
        var Bo = Object(n.memo)(zo, ((e,t)=>{
            const a = e.file
              , {isArchiveType: n, isEditable: r} = a
              , o = d()(a, ["isArchiveType", "isEditable"])
              , i = t.file
              , {isArchiveType: c, isEditable: l} = i
              , s = d()(i, ["isArchiveType", "isEditable"]);
            return b()(o, s)
        }
        ))
          , Lo = Object(Pe.c)("div").withConfig({
            displayName: "FileObjectRow___StyledDiv",
            componentId: "sc-wrdnyp-0"
        })({
            flex: "none",
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
            marginLeft: "1.5rem",
            marginRight: "1rem",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            paddingLeft: "0.75rem"
        })
          , Ho = Object(Pe.c)("div").withConfig({
            displayName: "FileObjectRow___StyledDiv2",
            componentId: "sc-wrdnyp-1"
        })({
            flex: "1 1 0%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        })
          , Wo = Object(Pe.c)("div").withConfig({
            displayName: "FileObjectRow___StyledDiv3",
            componentId: "sc-wrdnyp-2"
        })({
            width: "16.666667%",
            textAlign: "right",
            marginRight: "1rem",
            display: "none",
            "@media (min-width: 640px)": {
                display: "block"
            }
        })
          , Uo = Object(Pe.c)("div").withConfig({
            displayName: "FileObjectRow___StyledDiv4",
            componentId: "sc-wrdnyp-3"
        })({
            width: "20%",
            textAlign: "right",
            marginRight: "1rem",
            display: "none",
            "@media (min-width: 768px)": {
                display: "block"
            }
        })
          , Ko = a(264);
        var qo = function(e) {
            return function(t) {
                return function(a) {
                    let {open: o, onClose: i} = a
                      , c = d()(a, ["open", "onClose"]);
                    const [s,m] = Object(n.useState)(e || {});
                    return r.a.createElement(se.c.Provider, {
                        value: {
                            props: s,
                            setProps: m,
                            close: i
                        }
                    }, r.a.createElement(se.a, l()({}, s, {
                        open: o,
                        onClose: i
                    }), r.a.createElement(t, c)))
                }
            }
        };
        const Vo = Object(Be.d)().shape({
            directoryName: Object(Be.f)().required("A valid directory name must be provided.")
        })
          , $o = qo({
            title: "Create Directory"
        })((()=>{
            const e = o.a.useStoreState((e=>e.server.data.uuid))
              , t = o.a.useStoreState((e=>e.files.directory))
              , {mutate: a} = Object(ao.a)()
              , {close: i} = Object(n.useContext)(se.c)
              , {clearAndAddHttpError: c} = Object(Ke.b)("files:directory-modal");
            Object(n.useEffect)((()=>()=>{
                c()
            }
            ), []);
            return r.a.createElement(Me.c, {
                onSubmit: (n,r)=>{
                    let {directoryName: o} = n
                      , {setSubmitting: l} = r;
                    ((e,t,a)=>new Promise(((n,r)=>{
                        Ie.a.post("/api/client/servers/".concat(e, "/files/create-folder"), {
                            root: t,
                            name: a
                        }).then((()=>n())).catch(r)
                    }
                    )))(e, t, o).then((()=>a((e=>{
                        return [...e, (t = o,
                        {
                            key: "dir_".concat(null !== (a = t.split("/", 1)[0]) && void 0 !== a ? a : t),
                            name: null !== (n = t.replace(/^(\/*)/, "").split("/", 1)[0]) && void 0 !== n ? n : t,
                            mode: "drwxr-xr-x",
                            modeBits: "0755",
                            size: 0,
                            isFile: !1,
                            isSymlink: !1,
                            mimetype: "",
                            createdAt: new Date,
                            modifiedAt: new Date,
                            isArchiveType: ()=>!1,
                            isEditable: ()=>!1
                        })];
                        var t, a, n
                    }
                    ), !1))).then((()=>i())).catch((e=>{
                        l(!1),
                        c(e)
                    }
                    ))
                }
                ,
                validationSchema: Vo,
                initialValues: {
                    directoryName: ""
                }
            }, (e=>{
                let {submitForm: a, values: n} = e;
                return r.a.createElement(r.a.Fragment, null, r.a.createElement(Fe.a, {
                    key: "files:directory-modal"
                }), r.a.createElement(Yo, null, r.a.createElement(ze.a, {
                    autoFocus: !0,
                    id: "directoryName",
                    name: "directoryName",
                    label: "Name"
                }), r.a.createElement(Go, null, r.a.createElement(Jo, null, "This directory will be created as "), r.a.createElement(fr, null, "/home/container/", r.a.createElement(Zo, null, Object(to.join)(t, n.directoryName).replace(/^(\.\.\/|\/)+/, ""))))), r.a.createElement(se.a.Footer, null, r.a.createElement(le.a.Text, {
                    className: "w-full sm:w-auto",
                    onClick: i
                }, "Cancel"), r.a.createElement(le.a, {
                    className: "w-full sm:w-auto",
                    onClick: a
                }, "Create")))
            }
            ))
        }
        ));
        var Xo = e=>{
            let {className: t} = e;
            const [a,o] = Object(n.useState)(!1);
            return r.a.createElement(r.a.Fragment, null, r.a.createElement($o, {
                open: a,
                onClose: o.bind(void 0, !1)
            }), r.a.createElement(le.a.Text, {
                onClick: o.bind(void 0, !0),
                className: t
            }, "Create Directory"))
        }
          , Yo = Object(Pe.c)(Me.b).withConfig({
            displayName: "NewDirectoryButton___StyledForm",
            componentId: "sc-e7hrah-0"
        })({
            margin: "0px"
        })
          , Go = Object(Pe.c)("p").withConfig({
            displayName: "NewDirectoryButton___StyledP",
            componentId: "sc-e7hrah-1"
        })({
            marginTop: "0.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            wordBreak: "break-all",
            "@media (min-width: 768px)": {
                fontSize: "1rem",
                lineHeight: "1.5rem"
            }
        })
          , Jo = Object(Pe.c)("span").withConfig({
            displayName: "NewDirectoryButton___StyledSpan",
            componentId: "sc-e7hrah-2"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))"
        })
          , Zo = Object(Pe.c)("span").withConfig({
            displayName: "NewDirectoryButton___StyledSpan2",
            componentId: "sc-e7hrah-3"
        })({
            "--tw-text-opacity": "1",
            color: "rgba(165, 243, 252, var(--tw-text-opacity))"
        })
          , Qo = a(286);
        const ei = {
            cx: 16,
            cy: 16,
            r: 14,
            strokeWidth: 3,
            fill: "none",
            stroke: "currentColor"
        }
          , ti = e=>{
            let {progress: t, className: a} = e;
            return r.a.createElement("svg", {
                viewBox: "0 0 32 32",
                className: a
            }, r.a.createElement("circle", l()({}, ei, {
                className: "opacity-25"
            })), r.a.createElement("circle", l()({}, ei, {
                stroke: "white",
                strokeDasharray: 28 * Math.PI,
                className: "rotate-[-90deg] origin-[50%_50%] transition-[stroke-dashoffset] duration-300",
                style: {
                    strokeDashoffset: (100 - t) / 100 * 28 * Math.PI
                }
            })))
        }
          , ai = qo({
            title: "File Uploads",
            description: "The following files are being uploaded to your server."
        })((()=>{
            const {close: e} = Object(n.useContext)(se.c)
              , t = o.a.useStoreActions((e=>e.files.cancelFileUpload))
              , a = o.a.useStoreActions((e=>e.files.clearFileUploads))
              , i = o.a.useStoreState((e=>Object.entries(e.files.uploads).sort(((e,t)=>{
                let[a] = e
                  , [n] = t;
                return a.localeCompare(n)
            }
            ))));
            return r.a.createElement("div", {
                className: "space-y-2 mt-6"
            }, i.map((e=>{
                let[a,n] = e;
                return r.a.createElement("div", {
                    key: a,
                    className: "flex items-center space-x-3 bg-gray-700 p-3 rounded"
                }, r.a.createElement(re.a, {
                    content: "".concat(Math.floor(n.loaded / n.total * 100), "%"),
                    placement: "left"
                }, r.a.createElement("div", {
                    className: "flex-shrink-0"
                }, r.a.createElement(ti, {
                    progress: n.loaded / n.total * 100,
                    className: "w-6 h-6"
                }))), r.a.createElement(fr, {
                    className: "flex-1 truncate"
                }, a), r.a.createElement("button", {
                    onClick: t.bind(void 0, a),
                    className: "text-gray-500 hover:text-gray-200 transition-colors duration-75"
                }, r.a.createElement(R.i, {
                    className: "w-5 h-5"
                })))
            }
            )), r.a.createElement(se.a.Footer, null, r.a.createElement(le.a.Danger, {
                variant: le.a.Variants.Secondary,
                onClick: ()=>a()
            }, "Cancel Uploads"), r.a.createElement(le.a.Text, {
                onClick: e
            }, "Close")))
        }
        ));
        var ni = ()=>{
            const e = Object(Qo.a)(!1)
              , t = o.a.useStoreState((e=>Object.keys(e.files.uploads).length))
              , a = o.a.useStoreState((e=>({
                uploaded: Object.values(e.files.uploads).reduce(((e,t)=>e + t.loaded), 0),
                total: Object.values(e.files.uploads).reduce(((e,t)=>e + t.total), 0)
            })));
            return Object(n.useEffect)((()=>{
                0 === t && (e.value = !1)
            }
            ), [t]),
            r.a.createElement(r.a.Fragment, null, t > 0 && r.a.createElement(re.a, {
                content: "".concat(t, " files are uploading, click to view")
            }, r.a.createElement("button", {
                className: "flex items-center justify-center w-10 h-10",
                onClick: ()=>e.value = !0
            }, r.a.createElement(ti, {
                progress: a.uploaded / a.total * 100,
                className: "w-8 h-8"
            }), r.a.createElement(R.d, {
                className: "h-3 absolute mx-auto animate-pulse"
            }))), r.a.createElement(ai, {
                open: e.value,
                onClose: ()=>e.value = !1
            }))
        }
        ;
        var ri = ()=>{
            const e = o.a.useStoreState((e=>e.server.data.uuid))
              , {mutate: t} = Object(ao.a)()
              , {clearFlashes: a, clearAndAddHttpError: i} = Object(Ke.a)()
              , [c,l] = Object(n.useState)(!1)
              , [s,d] = Object(n.useState)("")
              , [m,p] = Object(n.useState)(!1)
              , [u,b] = Object(n.useState)(!1)
              , g = o.a.useStoreState((e=>e.files.directory))
              , h = o.a.useStoreState((e=>e.files.selectedFiles))
              , y = o.a.useStoreActions((e=>e.files.setSelectedFiles));
            Object(n.useEffect)((()=>{
                c || d("")
            }
            ), [c]);
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(oi, null, r.a.createElement(k.a, {
                visible: c,
                size: "large",
                fixed: !0
            }, s), r.a.createElement(se.a.Confirm, {
                title: "Delete Files",
                open: m,
                confirm: "Delete",
                onClose: ()=>p(!1),
                onConfirmed: ()=>{
                    l(!0),
                    p(!1),
                    a("files"),
                    d("Deleting files..."),
                    bo(e, g, h).then((()=>{
                        t((e=>e.filter((e=>h.indexOf(e.name) < 0))), !1),
                        y([])
                    }
                    )).catch((e=>{
                        t(),
                        i({
                            key: "files",
                            error: e
                        })
                    }
                    )).then((()=>l(!1)))
                }
            }, r.a.createElement("p", {
                className: "mb-2"
            }, "Are you sure you want to delete ", r.a.createElement("span", {
                className: "font-semibold text-gray-50"
            }, h.length, " files"), "? This is a permanent action and the files cannot be recovered."), h.slice(0, 15).map((e=>r.a.createElement("li", {
                key: e
            }, e))), h.length > 15 && r.a.createElement("li", null, "and ", h.length - 15, " others")), u && r.a.createElement(oo, {
                files: h,
                visible: !0,
                appear: !0,
                useMoveTerminology: !0,
                onDismissed: ()=>b(!1)
            }), r.a.createElement(fe, null, r.a.createElement("div", {
                className: "pointer-events-none fixed bottom-0 mb-6 flex justify-center w-full z-50"
            }, r.a.createElement(he.a, {
                timeout: 75,
                in: h.length > 0,
                unmountOnExit: !0
            }, r.a.createElement(ii, null, r.a.createElement(le.a, {
                onClick: ()=>b(!0)
            }, "Move"), r.a.createElement(le.a, {
                onClick: ()=>{
                    l(!0),
                    a("files"),
                    d("Archiving files..."),
                    go(e, g, h).then((()=>t())).then((()=>y([]))).catch((e=>i({
                        key: "files",
                        error: e
                    }))).then((()=>l(!1)))
                }
            }, "Archive"), r.a.createElement(le.a.Danger, {
                variant: le.a.Variants.Secondary,
                onClick: ()=>p(!0)
            }, "Delete")))))))
        }
          , oi = Object(Pe.c)("div").withConfig({
            displayName: "MassActionsBar___StyledDiv",
            componentId: "sc-1x2nl3g-0"
        })({
            pointerEvents: "none",
            position: "fixed",
            bottom: "0px",
            zIndex: "20",
            left: "0px",
            right: "0px",
            display: "flex",
            justifyContent: "center"
        })
          , ii = Object(Pe.c)("div").withConfig({
            displayName: "MassActionsBar___StyledDiv2",
            componentId: "sc-1x2nl3g-1"
        })({
            display: "flex",
            alignItems: "center",
            "> :not([hidden]) ~ :not([hidden])": {
                "--tw-space-x-reverse": 0,
                marginRight: "calc(1rem * var(--tw-space-x-reverse))",
                marginLeft: "calc(1rem * calc(1 - var(--tw-space-x-reverse)))"
            },
            pointerEvents: "auto",
            borderRadius: "0.25rem",
            padding: "1rem",
            backgroundColor: "rgba(19, 26, 32, 0.5)"
        })
          , ci = a(67)
          , li = a.n(ci);
        var si = e=>{
            let {className: t} = e;
            const a = Object(n.useRef)(null)
              , i = Object(Qo.a)(!1)
              , c = Object(Qo.a)([])
              , {mutate: l} = Object(ao.a)()
              , {addError: s, clearAndAddHttpError: d} = Object(Ke.b)("files")
              , m = o.a.useStoreState((e=>e.server.data.uuid))
              , p = o.a.useStoreState((e=>e.files.directory))
              , {clearFileUploads: u, removeFileUpload: b, pushFileUpload: g, setUploadProgress: h} = o.a.useStoreActions((e=>e.files));
            Object(D.a)("dragenter", (e=>{
                var t, a;
                e.preventDefault(),
                e.stopPropagation(),
                (null === (a = (t = e).dataTransfer) || void 0 === a ? void 0 : a.types) && t.dataTransfer.types.some((e=>"files" === e.toLowerCase())) && (i.value = !0)
            }
            ), {
                capture: !0
            }),
            Object(D.a)("dragexit", (()=>i.value = !1), {
                capture: !0
            }),
            Object(D.a)("keydown", (()=>i.value = !1)),
            Object(n.useEffect)((()=>()=>c.value.forEach(clearTimeout)), []);
            const y = e=>{
                d();
                const t = Array.from(e);
                if (t.some((e=>!e.size || !e.type && 4096 === e.size)))
                    return s("Folder uploads are not supported at this time.", "Error");
                const a = t.map((e=>{
                    const t = new AbortController;
                    return g({
                        name: e.name,
                        data: {
                            abort: t,
                            loaded: 0,
                            total: e.size
                        }
                    }),
                    ()=>(e=>new Promise(((t,a)=>{
                        Ie.a.get("/api/client/servers/".concat(e, "/files/upload")).then((e=>{
                            let {data: a} = e;
                            return t(a.attributes.url)
                        }
                        )).catch(a)
                    }
                    )))(m).then((a=>li.a.post(a, {
                        files: e
                    }, {
                        signal: t.signal,
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                        params: {
                            directory: p
                        },
                        onUploadProgress: t=>((e,t)=>{
                            h({
                                name: t,
                                loaded: e.loaded
                            })
                        }
                        )(t, e.name)
                    }).then((()=>c.value.push(setTimeout((()=>b(e.name)), 500))))))
                }
                ));
                Promise.all(a.map((e=>e()))).then((()=>l())).catch((e=>{
                    u(),
                    d(e)
                }
                ))
            }
            ;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(fe, null, r.a.createElement(he.a, {
                appear: !0,
                in: i.value,
                timeout: 75,
                key: "upload_modal_mask",
                unmountOnExit: !0
            }, r.a.createElement(Re.a, {
                onClick: ()=>i.value = !1,
                onDragOver: e=>e.preventDefault(),
                onDrop: e=>{
                    var t;
                    e.preventDefault(),
                    e.stopPropagation(),
                    i.value = !1,
                    (null === (t = e.dataTransfer) || void 0 === t ? void 0 : t.files.length) && y(e.dataTransfer.files)
                }
            }, r.a.createElement("div", {
                className: "w-full flex items-center justify-center pointer-events-none"
            }, r.a.createElement("div", {
                className: "flex items-center space-x-4 bg-black w-full ring-4 ring-blue-200 ring-opacity-60 rounded p-6 mx-10 max-w-sm"
            }, r.a.createElement(Ce.c, {
                className: "w-10 h-10 flex-shrink-0"
            }), r.a.createElement("p", {
                className: "font-header flex-1 text-lg text-neutral-100 text-center"
            }, "Drag and drop files to upload.")))))), r.a.createElement(di, {
                type: "file",
                ref: a,
                onChange: e=>{
                    e.currentTarget.files && (y(e.currentTarget.files),
                    a.current && (a.current.files = null))
                }
                ,
                multiple: !0
            }), r.a.createElement(le.a, {
                className: t,
                onClick: ()=>a.current && a.current.click()
            }, "Upload"))
        }
          , di = Object(Pe.c)("input").withConfig({
            displayName: "UploadButton___StyledInput",
            componentId: "sc-1lqhxm6-0"
        })({
            display: "none"
        })
          , mi = a(58)
          , pi = a(59);
        var ui = Object(Pe.c)(Po).withConfig({
            displayName: "FileManagerContainer___StyledFileActionCheckbox",
            componentId: "sc-1ehiwhq-0"
        })({
            marginLeft: "1rem",
            marginRight: "1rem"
        })
          , bi = Object(Pe.c)("p").withConfig({
            displayName: "FileManagerContainer___StyledP",
            componentId: "sc-1ehiwhq-1"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
            textAlign: "center"
        })
          , gi = Object(Pe.c)("div").withConfig({
            displayName: "FileManagerContainer___StyledDiv",
            componentId: "sc-1ehiwhq-2"
        })({
            borderRadius: "0.25rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "rgba(251, 191, 36, var(--tw-bg-opacity))",
            marginBottom: "1px",
            padding: "0.75rem"
        })
          , hi = Object(Pe.c)("p").withConfig({
            displayName: "FileManagerContainer___StyledP2",
            componentId: "sc-1ehiwhq-3"
        })({
            "--tw-text-opacity": "1",
            color: "rgba(120, 53, 15, var(--tw-text-opacity))",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            textAlign: "center"
        });
        function yi(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function fi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? yi(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : yi(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        const wi = ()=>{
            const {isSubmitting: e} = Object(Me.e)();
            return r.a.createElement(Oi, {
                title: "Change Server Details"
            }, r.a.createElement(k.a, {
                visible: e
            }), r.a.createElement(_i, null, r.a.createElement(ze.a, {
                id: "name",
                name: "name",
                label: "Server Name",
                type: "text"
            }), r.a.createElement(Ei, null, r.a.createElement(qe.a, null, "Server Description"), r.a.createElement(nn.a, {
                name: "description"
            }, r.a.createElement(Me.a, {
                as: Ve.a,
                name: "description",
                rows: 3
            }))), r.a.createElement(xi, null, r.a.createElement(le.a, {
                type: "submit"
            }, "Save"))))
        }
        ;
        var vi = ()=>{
            const e = o.a.useStoreState((e=>e.server.data))
              , t = o.a.useStoreActions((e=>e.server.setServer))
              , {addError: a, clearFlashes: n} = Object(Le.useStoreActions)((e=>e.flashes));
            return r.a.createElement(Me.c, {
                onSubmit: (r,o)=>{
                    let {name: i, description: c} = r
                      , {setSubmitting: l} = o;
                    n("settings"),
                    ((e,t,a)=>new Promise(((n,r)=>{
                        Ie.a.post("/api/client/servers/".concat(e, "/settings/rename"), {
                            name: t,
                            description: a
                        }).then((()=>n())).catch(r)
                    }
                    )))(e.uuid, i, c).then((()=>t(fi(fi({}, e), {}, {
                        name: i,
                        description: c
                    })))).catch((e=>{
                        console.error(e),
                        a({
                            key: "settings",
                            message: Object(Ie.c)(e)
                        })
                    }
                    )).then((()=>l(!1)))
                }
                ,
                initialValues: {
                    name: e.name,
                    description: e.description
                },
                validationSchema: Object(Be.d)().shape({
                    name: Object(Be.f)().required().min(1),
                    description: Object(Be.f)().nullable()
                })
            }, r.a.createElement(wi, null))
        }
          , Oi = Object(Pe.c)(ra).withConfig({
            displayName: "RenameServerBox___StyledTitledGreyBox",
            componentId: "sc-1bh2mfg-0"
        })({
            position: "relative"
        })
          , _i = Object(Pe.c)(Me.b).withConfig({
            displayName: "RenameServerBox___StyledForm",
            componentId: "sc-1bh2mfg-1"
        })({
            marginBottom: "0px"
        })
          , Ei = Object(Pe.c)("div").withConfig({
            displayName: "RenameServerBox___StyledDiv",
            componentId: "sc-1bh2mfg-2"
        })({
            marginTop: "1.5rem"
        })
          , xi = Object(Pe.c)("div").withConfig({
            displayName: "RenameServerBox___StyledDiv2",
            componentId: "sc-1bh2mfg-3"
        })({
            marginTop: "1.5rem",
            textAlign: "right"
        })
          , Si = ()=>{
            const e = o.a.useStoreState((e=>e.server.data.uuid))
              , [t,a] = Object(n.useState)(!1)
              , {addFlash: i, clearFlashes: c} = Object(Le.useStoreActions)((e=>e.flashes));
            return Object(n.useEffect)((()=>{
                c()
            }
            ), []),
            r.a.createElement(ji, {
                title: "Reinstall Server"
            }, r.a.createElement(se.a.Confirm, {
                open: t,
                title: "Confirm server reinstallation",
                confirm: "Yes, reinstall server",
                onClose: ()=>a(!1),
                onConfirmed: ()=>{
                    c("settings"),
                    (e=>new Promise(((t,a)=>{
                        Ie.a.post("/api/client/servers/".concat(e, "/settings/reinstall")).then((()=>t())).catch(a)
                    }
                    )))(e).then((()=>{
                        i({
                            key: "settings",
                            type: "success",
                            message: "Your server has begun the reinstallation process."
                        })
                    }
                    )).catch((e=>{
                        console.error(e),
                        i({
                            key: "settings",
                            type: "error",
                            message: Object(Ie.c)(e)
                        })
                    }
                    )).then((()=>a(!1)))
                }
            }, "Your server will be stopped and some files may be deleted or modified during this process, are you sure you wish to continue?"), r.a.createElement(Ci, null, "Reinstalling your server will stop it, and then re-run the installation script that initially set it up. ", r.a.createElement(ki, null, "Some files may be deleted or modified during this process, please back up your data before continuing.")), r.a.createElement(Ni, null, r.a.createElement(le.a.Danger, {
                variant: le.a.Variants.Secondary,
                onClick: ()=>a(!0)
            }, "Reinstall Server")))
        }
          , ji = Object(Pe.c)(ra).withConfig({
            displayName: "ReinstallServerBox___StyledTitledGreyBox",
            componentId: "sc-1prmksw-0"
        })({
            position: "relative"
        })
          , Ci = Object(Pe.c)("p").withConfig({
            displayName: "ReinstallServerBox___StyledP",
            componentId: "sc-1prmksw-1"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , ki = Object(Pe.c)("strong").withConfig({
            displayName: "ReinstallServerBox___StyledStrong",
            componentId: "sc-1prmksw-2"
        })({
            fontWeight: "500"
        })
          , Ni = Object(Pe.c)("div").withConfig({
            displayName: "ReinstallServerBox___StyledDiv",
            componentId: "sc-1prmksw-3"
        })({
            marginTop: "1.5rem",
            textAlign: "right"
        })
          , Di = Object(Pe.c)(Fe.a).withConfig({
            displayName: "SettingsContainer___StyledFlashMessageRender",
            componentId: "sc-1e5ycmz-0"
        })({
            marginBottom: "1rem"
        })
          , Pi = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv",
            componentId: "sc-1e5ycmz-1"
        })({
            "@media (min-width: 768px)": {
                display: "flex"
            }
        })
          , Ii = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv2",
            componentId: "sc-1e5ycmz-2"
        })({
            width: "100%",
            "@media (min-width: 768px)": {
                flex: "1 1 0%",
                marginRight: "2.5rem"
            }
        })
          , Ti = Object(Pe.c)(ra).withConfig({
            displayName: "SettingsContainer___StyledTitledGreyBox",
            componentId: "sc-1e5ycmz-3"
        })({
            marginBottom: "1.5rem",
            "@media (min-width: 768px)": {
                marginBottom: "2.5rem"
            }
        })
          , Fi = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv3",
            componentId: "sc-1e5ycmz-4"
        })({
            marginTop: "1.5rem"
        })
          , Ai = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv4",
            componentId: "sc-1e5ycmz-5"
        })({
            marginTop: "1.5rem",
            display: "flex",
            alignItems: "center"
        })
          , Ri = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv5",
            componentId: "sc-1e5ycmz-6"
        })({
            flex: "1 1 0%"
        })
          , Mi = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv6",
            componentId: "sc-1e5ycmz-7"
        })({
            borderLeftWidth: "4px",
            "--tw-border-opacity": "1",
            borderColor: "rgba(6, 182, 212, var(--tw-border-opacity))",
            padding: "0.75rem"
        })
          , zi = Object(Pe.c)("p").withConfig({
            displayName: "SettingsContainer___StyledP",
            componentId: "sc-1e5ycmz-8"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "hsla(210, 16%, 82%, var(--tw-text-opacity))"
        })
          , Bi = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv7",
            componentId: "sc-1e5ycmz-9"
        })({
            marginLeft: "1rem"
        })
          , Li = Object(Pe.c)(ra).withConfig({
            displayName: "SettingsContainer___StyledTitledGreyBox2",
            componentId: "sc-1e5ycmz-10"
        })({
            marginBottom: "1.5rem",
            "@media (min-width: 768px)": {
                marginBottom: "2.5rem"
            }
        })
          , Hi = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv8",
            componentId: "sc-1e5ycmz-11"
        })({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , Wi = Object(Pe.c)("code").withConfig({
            displayName: "SettingsContainer___StyledCode",
            componentId: "sc-1e5ycmz-12"
        })({
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(210, 24%, 16%, var(--tw-bg-opacity))",
            borderRadius: "0.25rem",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem"
        })
          , Ui = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv9",
            componentId: "sc-1e5ycmz-13"
        })({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "0.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , Ki = Object(Pe.c)("code").withConfig({
            displayName: "SettingsContainer___StyledCode2",
            componentId: "sc-1e5ycmz-14"
        })({
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(210, 24%, 16%, var(--tw-bg-opacity))",
            borderRadius: "0.25rem",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem"
        })
          , qi = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv10",
            componentId: "sc-1e5ycmz-15"
        })({
            width: "100%",
            marginTop: "1.5rem",
            "@media (min-width: 768px)": {
                flex: "1 1 0%",
                marginTop: "0px"
            }
        })
          , Vi = Object(Pe.c)("div").withConfig({
            displayName: "SettingsContainer___StyledDiv11",
            componentId: "sc-1e5ycmz-16"
        })({
            marginBottom: "1.5rem",
            "@media (min-width: 768px)": {
                marginBottom: "2.5rem"
            }
        })
          , $i = a(10)
          , Xi = a.n($i);
        var Yi = e=>{
            let {title: t, borderColor: a, showFlashes: n, showLoadingOverlay: o, children: i} = e
              , c = d()(e, ["title", "borderColor", "showFlashes", "showLoadingOverlay", "children"]);
            return r.a.createElement("div", c, t && r.a.createElement(Gi, null, t), n && r.a.createElement(Ji, {
                byKey: "string" == typeof n ? n : void 0
            }), r.a.createElement(Zi, {
                $_css: [{
                    "--tw-bg-opacity": "1",
                    backgroundColor: "hsla(209, 18%, 30%, var(--tw-bg-opacity))",
                    padding: "1rem",
                    borderRadius: "0.25rem",
                    "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                    position: "relative"
                }, !!a && {
                    borderTopWidth: "4px"
                }]
            }, r.a.createElement(k.a, {
                visible: o || !1
            }), i))
        }
          , Gi = Object(Pe.c)("h2").withConfig({
            displayName: "ContentBox___StyledH",
            componentId: "sc-mjlt6f-0"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            marginBottom: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            fontSize: "1.5rem",
            lineHeight: "2rem"
        })
          , Ji = Object(Pe.c)(Fe.a).withConfig({
            displayName: "ContentBox___StyledFlashMessageRender",
            componentId: "sc-mjlt6f-1"
        })({
            marginBottom: "1rem"
        })
          , Zi = Object(Pe.c)("div").withConfig({
            displayName: "ContentBox___StyledDiv",
            componentId: "sc-mjlt6f-2"
        })(["", ""], (e=>e.$_css));
        function Qi(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        const ec = Be.d().shape({
            current: Be.f().min(1).required("You must provide your current password."),
            password: Be.f().min(8).required(),
            confirmPassword: Be.f().test("password", "Password confirmation does not match the password you entered.", (function(e) {
                return e === this.parent.password
            }
            ))
        });
        var tc = ()=>{
            const e = Object(Le.useStoreState)((e=>e.user.data))
              , {clearFlashes: t, addFlash: a} = Object(Le.useStoreActions)((e=>e.flashes));
            if (!e)
                return null;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(Me.c, {
                onSubmit: (e,n)=>{
                    let {setSubmitting: r} = n;
                    t("account:password"),
                    (e=>{
                        let {current: t, password: a, confirmPassword: n} = e;
                        return new Promise(((e,r)=>{
                            Ie.a.put("/api/client/account/password", {
                                current_password: t,
                                password: a,
                                password_confirmation: n
                            }).then((()=>e())).catch(r)
                        }
                        ))
                    }
                    )(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Qi(Object(a), !0).forEach((function(t) {
                                O()(e, t, a[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Qi(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                            ))
                        }
                        return e
                    }({}, e)).then((()=>{
                        window.location = "/auth/login"
                    }
                    )).catch((e=>a({
                        key: "account:password",
                        type: "error",
                        title: "Error",
                        message: Object(Ie.c)(e)
                    }))).then((()=>r(!1)))
                }
                ,
                validationSchema: ec,
                initialValues: {
                    current: "",
                    password: "",
                    confirmPassword: ""
                }
            }, (e=>{
                let {isSubmitting: t, isValid: a} = e;
                return r.a.createElement(r.a.Fragment, null, r.a.createElement(k.a, {
                    size: "large",
                    visible: t
                }), r.a.createElement(ac, null, r.a.createElement(ze.a, {
                    id: "current_password",
                    type: "password",
                    name: "current",
                    label: "Current Password"
                }), r.a.createElement(nc, null, r.a.createElement(ze.a, {
                    id: "new_password",
                    type: "password",
                    name: "password",
                    label: "New Password",
                    description: "Your new password should be at least 8 characters in length and unique to this website."
                })), r.a.createElement(rc, null, r.a.createElement(ze.a, {
                    id: "confirm_new_password",
                    type: "password",
                    name: "confirmPassword",
                    label: "Confirm New Password"
                })), r.a.createElement(oc, null, r.a.createElement(le.a, {
                    disabled: t || !a
                }, "Update Password"))))
            }
            )))
        }
          , ac = Object(Pe.c)(Me.b).withConfig({
            displayName: "UpdatePasswordForm___StyledForm",
            componentId: "sc-2z7jqw-0"
        })({
            margin: "0px"
        })
          , nc = Object(Pe.c)("div").withConfig({
            displayName: "UpdatePasswordForm___StyledDiv",
            componentId: "sc-2z7jqw-1"
        })({
            marginTop: "1.5rem"
        })
          , rc = Object(Pe.c)("div").withConfig({
            displayName: "UpdatePasswordForm___StyledDiv2",
            componentId: "sc-2z7jqw-2"
        })({
            marginTop: "1.5rem"
        })
          , oc = Object(Pe.c)("div").withConfig({
            displayName: "UpdatePasswordForm___StyledDiv3",
            componentId: "sc-2z7jqw-3"
        })({
            marginTop: "1.5rem"
        });
        function ic(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        const cc = Be.d().shape({
            email: Be.f().email().required(),
            password: Be.f().required("You must provide your current account password.")
        });
        var lc, sc = ()=>{
            const e = Object(Le.useStoreState)((e=>e.user.data))
              , t = Object(Le.useStoreActions)((e=>e.user.updateUserEmail))
              , {clearFlashes: a, addFlash: n} = Object(Le.useStoreActions)((e=>e.flashes));
            return r.a.createElement(Me.c, {
                onSubmit: (e,r)=>{
                    let {resetForm: o, setSubmitting: i} = r;
                    a("account:email"),
                    t(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ic(Object(a), !0).forEach((function(t) {
                                O()(e, t, a[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ic(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                            ))
                        }
                        return e
                    }({}, e)).then((()=>n({
                        type: "success",
                        key: "account:email",
                        message: "Your primary email has been updated."
                    }))).catch((e=>n({
                        type: "error",
                        key: "account:email",
                        title: "Error",
                        message: Object(Ie.c)(e)
                    }))).then((()=>{
                        o(),
                        i(!1)
                    }
                    ))
                }
                ,
                validationSchema: cc,
                initialValues: {
                    email: e.email,
                    password: ""
                }
            }, (e=>{
                let {isSubmitting: t, isValid: a} = e;
                return r.a.createElement(r.a.Fragment, null, r.a.createElement(k.a, {
                    size: "large",
                    visible: t
                }), r.a.createElement(dc, null, r.a.createElement(ze.a, {
                    id: "current_email",
                    type: "email",
                    name: "email",
                    label: "Email"
                }), r.a.createElement(mc, null, r.a.createElement(ze.a, {
                    id: "confirm_password",
                    type: "password",
                    name: "password",
                    label: "Confirm Password"
                })), r.a.createElement(pc, null, r.a.createElement(le.a, {
                    disabled: t || !a
                }, "Update Email"))))
            }
            ))
        }
        , dc = Object(Pe.c)(Me.b).withConfig({
            displayName: "UpdateEmailAddressForm___StyledForm",
            componentId: "sc-s5wzt3-0"
        })({
            margin: "0px"
        }), mc = Object(Pe.c)("div").withConfig({
            displayName: "UpdateEmailAddressForm___StyledDiv",
            componentId: "sc-s5wzt3-1"
        })({
            marginTop: "1.5rem"
        }), pc = Object(Pe.c)("div").withConfig({
            displayName: "UpdateEmailAddressForm___StyledDiv2",
            componentId: "sc-s5wzt3-2"
        })({
            marginTop: "1.5rem"
        }), uc = a(322), bc = a.n(uc), gc = a(328), hc = {
            insert: "head",
            singleton: !1
        }, yc = (z()(gc.a, hc),
        gc.a.locals || {}), fc = Object(n.forwardRef)(((e,t)=>{
            let {className: a} = e
              , n = d()(e, ["className"]);
            return r.a.createElement("input", l()({
                ref: t,
                type: "checkbox",
                className: A()("form-input", yc.checkbox_input, a)
            }, n))
        }
        ));
        !function(e) {
            e[e.Normal = 0] = "Normal",
            e[e.Snug = 1] = "Snug",
            e[e.Loose = 2] = "Loose"
        }(lc || (lc = {}));
        const wc = Object(n.forwardRef)(((e,t)=>{
            let {className: a, variant: n} = e
              , o = d()(e, ["className", "variant"]);
            return r.a.createElement("input", l()({
                ref: t,
                className: A()("form-input", yc.text_input, {
                    [yc.loose]: n === lc.Loose
                }, a)
            }, o))
        }
        ));
        var vc = Object.assign(wc, {
            Variants: lc
        });
        const Oc = Object.assign({}, {
            Text: vc,
            Checkbox: fc
        });
        function _c(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Ec(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _c(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : _c(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var xc = qo({
            title: "Enable Two-Step Verification",
            description: "Help protect your account from unauthorized access. You'll be prompted for a verification code each time you sign in."
        })((e=>{
            let {onTokens: t} = e;
            const [a,o] = Object(n.useState)(!1)
              , [i,c] = Object(n.useState)("")
              , [l,s] = Object(n.useState)("")
              , [d,m] = Object(n.useState)(null)
              , {clearAndAddHttpError: p} = Object(Ke.b)("account:two-step")
              , u = Object(Le.useStoreActions)((e=>e.user.updateUserData))
              , {close: b, setProps: h} = Object(n.useContext)(se.c);
            Object(n.useEffect)((()=>{
                new Promise(((e,t)=>{
                    Ie.a.get("/api/client/account/two-factor").then((t=>{
                        let {data: a} = t;
                        return e(a.data)
                    }
                    )).catch(t)
                }
                )).then(m).catch((e=>p(e)))
            }
            ), []),
            Object(n.useEffect)((()=>{
                h((e=>Ec(Ec({}, e), {}, {
                    preventExternalClose: a
                })))
            }
            ), [a]);
            return r.a.createElement("form", {
                id: "enable-totp-form",
                onSubmit: e=>{
                    e.preventDefault(),
                    e.stopPropagation(),
                    a || (o(!0),
                    p(),
                    (async(e,t)=>{
                        const {data: a} = await Ie.a.post("/api/client/account/two-factor", {
                            code: e,
                            password: t
                        });
                        return a.attributes.tokens
                    }
                    )(i, l).then((e=>{
                        u({
                            useTotp: !0
                        }),
                        t(e)
                    }
                    )).catch((e=>{
                        p(e),
                        o(!1)
                    }
                    )))
                }
            }, r.a.createElement(Fe.a, {
                byKey: "account:two-step",
                className: "mt-4"
            }), r.a.createElement("div", {
                className: "flex items-center justify-center w-56 h-56 p-2 bg-gray-50 shadow mx-auto mt-6"
            }, d ? r.a.createElement(Sc, {
                renderAs: "svg",
                value: d.image_url_data
            }) : r.a.createElement(g.a, null)), r.a.createElement(Oe, {
                text: null == d ? void 0 : d.secret
            }, r.a.createElement("p", {
                className: "font-mono text-sm text-gray-100 text-center mt-2"
            }, (null == d ? void 0 : d.secret.match(/.{1,4}/g).join(" ")) || "Loading...")), r.a.createElement("p", {
                id: "totp-code-description",
                className: "mt-6"
            }, "Scan the QR code above using the two-step authentication app of your choice. Then, enter the 6-digit code generated into the field below."), r.a.createElement(Oc.Text, {
                "aria-labelledby": "totp-code-description",
                variant: Oc.Text.Variants.Loose,
                value: i,
                onChange: e=>c(e.currentTarget.value),
                className: "mt-3",
                placeholder: "000000",
                type: "text",
                inputMode: "numeric",
                autoComplete: "one-time-code",
                pattern: "\\d{6}"
            }), r.a.createElement("label", {
                htmlFor: "totp-password",
                className: "block mt-3"
            }, "Account Password"), r.a.createElement(Oc.Text, {
                variant: Oc.Text.Variants.Loose,
                className: "mt-1",
                type: "password",
                value: l,
                onChange: e=>s(e.currentTarget.value)
            }), r.a.createElement(se.a.Footer, null, r.a.createElement(le.a.Text, {
                onClick: b
            }, "Cancel"), r.a.createElement(re.a, {
                disabled: l.length > 0 && 6 === i.length,
                content: d ? "You must enter the 6-digit code and your password to continue." : "Waiting for QR code to load...",
                delay: 100
            }, r.a.createElement(le.a, {
                disabled: !d || 6 !== i.length || !l.length,
                type: "submit",
                form: "enable-totp-form"
            }, "Enable"))))
        }
        ))
          , Sc = Object(Pe.c)(bc.a).withConfig({
            displayName: "SetupTOTPDialog___StyledQRCode",
            componentId: "sc-3qbd2-0"
        })({
            width: "100%",
            height: "100%",
            "--tw-shadow": "0 0 #0000",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
        })
          , jc = e=>{
            let {tokens: t, open: a, onClose: n} = e;
            const o = [];
            return t.forEach(((e,a)=>{
                a % 2 == 0 && o.push([e, t[a + 1] || ""])
            }
            )),
            r.a.createElement(se.a, {
                open: a,
                onClose: n,
                title: "Two-Step Authentication Enabled",
                description: "Store the codes below somewhere safe. If you lose access to your phone you can use these backup codes to sign in.",
                hideCloseIcon: !0,
                preventExternalClose: !0
            }, r.a.createElement(se.a.Icon, {
                position: "container",
                type: "success"
            }), r.a.createElement(Oe, {
                text: t.join("\n"),
                showInNotification: !1
            }, r.a.createElement("pre", {
                className: "bg-gray-800 rounded p-2 mt-6"
            }, o.map((e=>r.a.createElement("span", {
                key: e.join("_"),
                className: "block"
            }, e[0], r.a.createElement("span", {
                className: "mx-2 selection:bg-gray-800"
            }, " "), e[1], r.a.createElement("span", {
                className: "selection:bg-gray-800"
            }, " ")))))), r.a.createElement(ke, {
                type: "danger",
                className: "mt-3"
            }, "These codes will not be shown again."), r.a.createElement(se.a.Footer, null, r.a.createElement(le.a.Text, {
                onClick: n
            }, "Done")))
        }
        ;
        function Cc(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function kc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Cc(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Cc(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Nc = qo({
            title: "Disable Two-Step Verification",
            description: "Disabling two-step verification will make your account less secure."
        })((()=>{
            const [e,t] = Object(n.useState)(!1)
              , [a,o] = Object(n.useState)("")
              , {clearAndAddHttpError: i} = Object(Ke.b)("account:two-step")
              , {close: c, setProps: l} = Object(n.useContext)(se.c)
              , s = Object(mi.a)((e=>e.user.updateUserData));
            Object(n.useEffect)((()=>{
                l((t=>kc(kc({}, t), {}, {
                    preventExternalClose: e
                })))
            }
            ), [e]);
            return r.a.createElement("form", {
                id: "disable-totp-form",
                className: "mt-6",
                onSubmit: n=>{
                    n.preventDefault(),
                    n.stopPropagation(),
                    e || (t(!0),
                    i(),
                    (e=>new Promise(((t,a)=>{
                        Ie.a.delete("/api/client/account/two-factor", {
                            params: {
                                password: e
                            }
                        }).then((()=>t())).catch(a)
                    }
                    )))(a).then((()=>{
                        s({
                            useTotp: !1
                        }),
                        c()
                    }
                    )).catch(i).then((()=>t(!1))))
                }
            }, r.a.createElement(Fe.a, {
                byKey: "account:two-step",
                className: "-mt-2 mb-6"
            }), r.a.createElement("label", {
                className: "block pb-1",
                htmlFor: "totp-password"
            }, "Password"), r.a.createElement(Oc.Text, {
                id: "totp-password",
                type: "password",
                variant: Oc.Text.Variants.Loose,
                value: a,
                onChange: e=>o(e.currentTarget.value)
            }), r.a.createElement(se.a.Footer, null, r.a.createElement(le.a.Text, {
                onClick: c
            }, "Cancel"), r.a.createElement(re.a, {
                delay: 100,
                disabled: a.length > 0,
                content: "You must enter your account password to continue."
            }, r.a.createElement(le.a.Danger, {
                type: "submit",
                form: "disable-totp-form",
                disabled: e || !a.length
            }, "Disable"))))
        }
        ))
          , Dc = ()=>{
            const [e,t] = Object(n.useState)([])
              , [a,o] = Object(n.useState)(null)
              , i = Object(Le.useStoreState)((e=>e.user.data.useTotp))
              , {clearAndAddHttpError: c} = Object(Ke.b)("account:two-step");
            Object(n.useEffect)((()=>()=>{
                c()
            }
            ), [a]);
            return r.a.createElement("div", null, r.a.createElement(xc, {
                open: "enable" === a,
                onClose: ()=>o(null),
                onTokens: e=>{
                    t(e),
                    o(null)
                }
            }), r.a.createElement(jc, {
                tokens: e,
                open: e.length > 0,
                onClose: ()=>t([])
            }), r.a.createElement(Nc, {
                open: "disable" === a,
                onClose: ()=>o(null)
            }), r.a.createElement(Pc, null, i ? "Two-step verification is currently enabled on your account." : "You do not currently have two-step verification enabled on your account. Click the button below to begin configuring it."), r.a.createElement(Ic, null, i ? r.a.createElement(le.a.Danger, {
                onClick: ()=>o("disable")
            }, "Disable Two-Step") : r.a.createElement(le.a, {
                onClick: ()=>o("enable")
            }, "Enable Two-Step")))
        }
          , Pc = Object(Pe.c)("p").withConfig({
            displayName: "ConfigureTwoFactorForm___StyledP",
            componentId: "sc-1d1guij-0"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , Ic = Object(Pe.c)("div").withConfig({
            displayName: "ConfigureTwoFactorForm___StyledDiv",
            componentId: "sc-1d1guij-1"
        })({
            marginTop: "1.5rem"
        })
          , Tc = a(61)
          , Fc = a(78);
        function Ac() {
            const e = Xi()(["\n      ", ";\n    "]);
            return Ac = function() {
                return e
            }
            ,
            e
        }
        function Rc() {
            const e = Xi()(["\n      width: calc(50% - 1rem);\n    "]);
            return Rc = function() {
                return e
            }
            ,
            e
        }
        const Mc = Pe.c.div.withConfig({
            displayName: "AccountOverviewContainer__Container",
            componentId: "sc-12to0iy-0"
        })(["", ";& > div{", ";", " ", "}"], {
            display: "flex",
            flexWrap: "wrap"
        }, {
            width: "100%"
        }, Object(Tc.a)("sm")(Rc()), Object(Tc.a)("md")(Ac(), {
            width: "auto",
            flex: "1 1 0%"
        }));
        var zc = Object(Pe.c)(Mc).withConfig({
            displayName: "AccountOverviewContainer___StyledContainer",
            componentId: "sc-12to0iy-1"
        })(["", ""], (e=>e.$_css))
          , Bc = Object(Pe.c)(Yi).withConfig({
            displayName: "AccountOverviewContainer___StyledContentBox",
            componentId: "sc-12to0iy-2"
        })({
            marginTop: "2rem",
            "@media (min-width: 640px)": {
                marginTop: "0px",
                marginLeft: "2rem"
            }
        })
          , Lc = Object(Pe.c)(Yi).withConfig({
            displayName: "AccountOverviewContainer___StyledContentBox2",
            componentId: "sc-12to0iy-3"
        })({
            marginTop: "2rem",
            "@media (min-width: 768px)": {
                marginLeft: "2rem",
                marginTop: "0px"
            }
        });
        const Hc = e=>({
            identifier: e.identifier,
            description: e.description,
            allowedIps: e.allowed_ips,
            createdAt: e.created_at ? new Date(e.created_at) : null,
            lastUsedAt: e.last_used_at ? new Date(e.last_used_at) : null
        });
        function Wc(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Uc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Wc(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Wc(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        const Kc = e=>{
            let {apiKey: t} = e;
            const {dismiss: a} = Object(n.useContext)(_a.a);
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(Vc, null, "Your API Key"), r.a.createElement($c, null, "The API key you have requested is shown below. Please store this in a safe location, it will not be shown again."), r.a.createElement(Xc, null, r.a.createElement(Oe, {
                text: t
            }, r.a.createElement(Yc, null, t))), r.a.createElement(Gc, null, r.a.createElement(He.a, {
                type: "button",
                onClick: ()=>a()
            }, "Close")))
        }
        ;
        Kc.displayName = "ApiKeyModal";
        var qc = Object(ua.a)({
            closeOnEscape: !1,
            closeOnBackground: !1
        })(Kc)
          , Vc = Object(Pe.c)("h3").withConfig({
            displayName: "ApiKeyModal___StyledH",
            componentId: "sc-s6pcab-0"
        })({
            marginBottom: "1.5rem",
            fontSize: "1.5rem",
            lineHeight: "2rem"
        })
          , $c = Object(Pe.c)("p").withConfig({
            displayName: "ApiKeyModal___StyledP",
            componentId: "sc-s6pcab-1"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            marginBottom: "1.5rem"
        })
          , Xc = Object(Pe.c)("pre").withConfig({
            displayName: "ApiKeyModal___StyledPre",
            componentId: "sc-s6pcab-2"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(210, 24%, 16%, var(--tw-bg-opacity))",
            borderRadius: "0.25rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
        })
          , Yc = Object(Pe.c)("code").withConfig({
            displayName: "ApiKeyModal___StyledCode",
            componentId: "sc-s6pcab-3"
        })({
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
        })
          , Gc = Object(Pe.c)("div").withConfig({
            displayName: "ApiKeyModal___StyledDiv",
            componentId: "sc-s6pcab-4"
        })({
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1.5rem"
        });
        const Jc = Object(Pe.c)(Ve.a).withConfig({
            displayName: "CreateApiKeyForm__CustomTextarea",
            componentId: "sc-lcvdq4-0"
        })(["", ""], {
            height: "8rem"
        });
        var Zc = e=>{
            let {onKeyCreated: t} = e;
            const [a,o] = Object(n.useState)("")
              , {addError: i, clearFlashes: c} = Object(Le.useStoreActions)((e=>e.flashes));
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(qc, {
                visible: a.length > 0,
                onModalDismissed: ()=>o(""),
                apiKey: a
            }), r.a.createElement(Me.c, {
                onSubmit: (e,a)=>{
                    let {setSubmitting: n, resetForm: r} = a;
                    var l, s;
                    c("account"),
                    (l = e.description,
                    s = e.allowedIps,
                    new Promise(((e,t)=>{
                        Ie.a.post("/api/client/account/api-keys", {
                            description: l,
                            allowed_ips: s.length > 0 ? s.split("\n") : []
                        }).then((t=>{
                            var a, n;
                            let {data: r} = t;
                            return e(Uc(Uc({}, Hc(r.attributes)), {}, {
                                secretToken: null !== (a = null === (n = r.meta) || void 0 === n ? void 0 : n.secret_token) && void 0 !== a ? a : ""
                            }))
                        }
                        )).catch(t)
                    }
                    ))).then((e=>{
                        let {secretToken: a} = e
                          , i = d()(e, ["secretToken"]);
                        r(),
                        n(!1),
                        o("".concat(i.identifier).concat(a)),
                        t(i)
                    }
                    )).catch((e=>{
                        console.error(e),
                        i({
                            key: "account",
                            message: Object(Ie.c)(e)
                        }),
                        n(!1)
                    }
                    ))
                }
                ,
                initialValues: {
                    description: "",
                    allowedIps: ""
                },
                validationSchema: Object(Be.d)().shape({
                    allowedIps: Object(Be.f)(),
                    description: Object(Be.f)().required().min(4)
                })
            }, (e=>{
                let {isSubmitting: t} = e;
                return r.a.createElement(Me.b, null, r.a.createElement(k.a, {
                    visible: t
                }), r.a.createElement(Qc, {
                    label: "Description",
                    name: "description",
                    description: "A description of this API key."
                }, r.a.createElement(Me.a, {
                    name: "description",
                    as: Ve.b
                })), r.a.createElement(nn.a, {
                    label: "Allowed IPs",
                    name: "allowedIps",
                    description: "Leave blank to allow any IP address to use this API key, otherwise provide each IP address on a new line."
                }, r.a.createElement(Me.a, {
                    name: "allowedIps",
                    as: Jc
                })), r.a.createElement(el, null, r.a.createElement(He.a, null, "Create")))
            }
            )))
        }
          , Qc = Object(Pe.c)(nn.a).withConfig({
            displayName: "CreateApiKeyForm___StyledFormikFieldWrapper",
            componentId: "sc-lcvdq4-1"
        })({
            marginBottom: "1.5rem"
        })
          , el = Object(Pe.c)("div").withConfig({
            displayName: "CreateApiKeyForm___StyledDiv",
            componentId: "sc-lcvdq4-2"
        })({
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1.5rem"
        })
          , tl = Object(Pe.c)("div").withConfig({
            displayName: "AccountApiContainer___StyledDiv",
            componentId: "sc-1c4s3nm-0"
        })({
            flexWrap: "nowrap",
            marginTop: "2.5rem",
            marginBottom: "2.5rem",
            "@media (min-width: 768px)": {
                display: "flex"
            }
        })
          , al = Object(Pe.c)(Yi).withConfig({
            displayName: "AccountApiContainer___StyledContentBox",
            componentId: "sc-1c4s3nm-1"
        })({
            flex: "none",
            width: "100%",
            "@media (min-width: 768px)": {
                width: "50%"
            }
        })
          , nl = Object(Pe.c)(Yi).withConfig({
            displayName: "AccountApiContainer___StyledContentBox2",
            componentId: "sc-1c4s3nm-2"
        })({
            flex: "1 1 0%",
            overflow: "hidden",
            marginTop: "2rem",
            "@media (min-width: 768px)": {
                marginTop: "0px",
                marginLeft: "2rem"
            }
        })
          , rl = Object(Pe.c)("p").withConfig({
            displayName: "AccountApiContainer___StyledP",
            componentId: "sc-1c4s3nm-3"
        })({
            textAlign: "center",
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , ol = Object(Pe.c)($e.a).withConfig({
            displayName: "AccountApiContainer___StyledGreyRowBox",
            componentId: "sc-1c4s3nm-4"
        })(["", ""], (e=>e.$_css))
          , il = Object(Pe.c)(Ae.a).withConfig({
            displayName: "AccountApiContainer___StyledFontAwesomeIcon",
            componentId: "sc-1c4s3nm-5"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , cl = Object(Pe.c)("div").withConfig({
            displayName: "AccountApiContainer___StyledDiv2",
            componentId: "sc-1c4s3nm-6"
        })({
            marginLeft: "1rem",
            flex: "1 1 0%",
            overflow: "hidden"
        })
          , ll = Object(Pe.c)("p").withConfig({
            displayName: "AccountApiContainer___StyledP2",
            componentId: "sc-1c4s3nm-7"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            overflowWrap: "break-word"
        })
          , sl = Object(Pe.c)("p").withConfig({
            displayName: "AccountApiContainer___StyledP3",
            componentId: "sc-1c4s3nm-8"
        })({
            fontSize: "0.625rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            textTransform: "uppercase"
        })
          , dl = Object(Pe.c)("p").withConfig({
            displayName: "AccountApiContainer___StyledP4",
            componentId: "sc-1c4s3nm-9"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            marginLeft: "1rem",
            display: "none",
            "@media (min-width: 768px)": {
                display: "block"
            }
        })
          , ml = Object(Pe.c)("code").withConfig({
            displayName: "AccountApiContainer___StyledCode",
            componentId: "sc-1c4s3nm-10"
        })({
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(210, 24%, 16%, var(--tw-bg-opacity))",
            borderRadius: "0.25rem"
        })
          , pl = Object(Pe.c)("button").withConfig({
            displayName: "AccountApiContainer___StyledButton",
            componentId: "sc-1c4s3nm-11"
        })({
            marginLeft: "1rem",
            padding: "0.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , ul = Object(Pe.c)(Ae.a).withConfig({
            displayName: "AccountApiContainer___StyledFontAwesomeIcon2",
            componentId: "sc-1c4s3nm-12"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
            ":hover": {
                "--tw-text-opacity": "1",
                color: "rgba(248, 113, 113, var(--tw-text-opacity))"
            },
            transitionProperty: "background-color, border-color, color, fill, stroke",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms"
        })
          , bl = a(229);
        function gl(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const a = Object(aa.a)((()=>(Array.isArray(e) ? e : [e]).map((e=>JSON.stringify(e))).join(":")), [e]);
            if (!a.trim().length)
                throw new Error('Must provide a valid context key to "useSWRKey".');
            return "swr::".concat(t ? "".concat(t, ":") : "").concat(a.trim())
        }
        function hl(e) {
            const t = Object(mi.b)((e=>{
                var t;
                return null === (t = e.user.data) || void 0 === t ? void 0 : t.uuid
            }
            ));
            return gl(e, "user:".concat(t))
        }
        function yl(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        const fl = e=>{
            const t = hl(["account", "ssh-keys"]);
            return Object(on.a)(t, (async()=>{
                const {data: e} = await Ie.a.get("/api/client/account/ssh-keys");
                return e.data.map((e=>bl.Transformers.toSSHKey(e.attributes)))
            }
            ), function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? yl(Object(a), !0).forEach((function(t) {
                        O()(e, t, a[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : yl(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                    ))
                }
                return e
            }({
                revalidateOnMount: !1
            }, e || {}))
        }
          , wl = async e=>await Ie.a.post("/api/client/account/ssh-keys/remove", {
            fingerprint: e
        })
          , vl = Object(Pe.c)(Ve.a).withConfig({
            displayName: "CreateSSHKeyForm__CustomTextarea",
            componentId: "sc-plts88-0"
        })(["", ""], {
            height: "8rem"
        });
        var Ol = ()=>{
            const {clearAndAddHttpError: e} = Object(Ke.b)("account")
              , {mutate: t} = fl();
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(Me.c, {
                onSubmit: (a,n)=>{
                    let {setSubmitting: r, resetForm: o} = n;
                    e(),
                    (async(e,t)=>{
                        const {data: a} = await Ie.a.post("/api/client/account/ssh-keys", {
                            name: e,
                            public_key: t
                        });
                        return bl.Transformers.toSSHKey(a.attributes)
                    }
                    )(a.name, a.publicKey).then((e=>{
                        o(),
                        t((t=>(t || []).concat(e)))
                    }
                    )).catch((t=>e(t))).then((()=>r(!1)))
                }
                ,
                initialValues: {
                    name: "",
                    publicKey: ""
                },
                validationSchema: Object(Be.d)().shape({
                    name: Object(Be.f)().required(),
                    publicKey: Object(Be.f)().required()
                })
            }, (e=>{
                let {isSubmitting: t} = e;
                return r.a.createElement(Me.b, null, r.a.createElement(k.a, {
                    visible: t
                }), r.a.createElement(_l, {
                    label: "SSH Key Name",
                    name: "name"
                }, r.a.createElement(Me.a, {
                    name: "name",
                    as: Ve.b
                })), r.a.createElement(nn.a, {
                    label: "Public Key",
                    name: "publicKey",
                    description: "Enter your public SSH key."
                }, r.a.createElement(Me.a, {
                    name: "publicKey",
                    as: vl
                })), r.a.createElement(El, null, r.a.createElement(He.a, null, "Save")))
            }
            )))
        }
          , _l = Object(Pe.c)(nn.a).withConfig({
            displayName: "CreateSSHKeyForm___StyledFormikFieldWrapper",
            componentId: "sc-plts88-1"
        })({
            marginBottom: "1.5rem"
        })
          , El = Object(Pe.c)("div").withConfig({
            displayName: "CreateSSHKeyForm___StyledDiv",
            componentId: "sc-plts88-2"
        })({
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1.5rem"
        })
          , xl = e=>{
            let {name: t, fingerprint: a} = e;
            const {clearAndAddHttpError: o} = Object(Ke.b)("account")
              , [i,c] = Object(n.useState)(!1)
              , {mutate: l} = fl();
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(se.a.Confirm, {
                open: i,
                title: "Delete SSH Key",
                confirm: "Delete Key",
                onConfirmed: ()=>{
                    o(),
                    Promise.all([l((e=>null == e ? void 0 : e.filter((e=>e.fingerprint !== a))), !1), wl(a)]).catch((e=>{
                        l(void 0, !0).catch(console.error),
                        o(e)
                    }
                    ))
                }
                ,
                onClose: ()=>c(!1)
            }, "Removing the ", r.a.createElement(fr, null, t), " SSH key will invalidate its usage across the Panel."), r.a.createElement(Sl, {
                onClick: ()=>c(!0)
            }, r.a.createElement(jl, {
                icon: me.N
            })))
        }
          , Sl = Object(Pe.c)("button").withConfig({
            displayName: "DeleteSSHKeyButton___StyledButton",
            componentId: "sc-792thq-0"
        })({
            marginLeft: "1rem",
            padding: "0.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , jl = Object(Pe.c)(Ae.a).withConfig({
            displayName: "DeleteSSHKeyButton___StyledFontAwesomeIcon",
            componentId: "sc-792thq-1"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
            ":hover": {
                "--tw-text-opacity": "1",
                color: "rgba(248, 113, 113, var(--tw-text-opacity))"
            },
            transitionProperty: "background-color, border-color, color, fill, stroke",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms"
        })
          , Cl = Object(Pe.c)("div").withConfig({
            displayName: "AccountSSHContainer___StyledDiv",
            componentId: "sc-yksipt-0"
        })({
            flexWrap: "nowrap",
            marginTop: "2.5rem",
            marginBottom: "2.5rem",
            "@media (min-width: 768px)": {
                display: "flex"
            }
        })
          , kl = Object(Pe.c)(Yi).withConfig({
            displayName: "AccountSSHContainer___StyledContentBox",
            componentId: "sc-yksipt-1"
        })({
            flex: "none",
            width: "100%",
            "@media (min-width: 768px)": {
                width: "50%"
            }
        })
          , Nl = Object(Pe.c)(Yi).withConfig({
            displayName: "AccountSSHContainer___StyledContentBox2",
            componentId: "sc-yksipt-2"
        })({
            flex: "1 1 0%",
            overflow: "hidden",
            marginTop: "2rem",
            "@media (min-width: 768px)": {
                marginTop: "0px",
                marginLeft: "2rem"
            }
        })
          , Dl = Object(Pe.c)("p").withConfig({
            displayName: "AccountSSHContainer___StyledP",
            componentId: "sc-yksipt-3"
        })({
            textAlign: "center",
            fontSize: "0.875rem",
            lineHeight: "1.25rem"
        })
          , Pl = Object(Pe.c)($e.a).withConfig({
            displayName: "AccountSSHContainer___StyledGreyRowBox",
            componentId: "sc-yksipt-4"
        })(["", ""], (e=>e.$_css))
          , Il = Object(Pe.c)(Ae.a).withConfig({
            displayName: "AccountSSHContainer___StyledFontAwesomeIcon",
            componentId: "sc-yksipt-5"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
        })
          , Tl = Object(Pe.c)("div").withConfig({
            displayName: "AccountSSHContainer___StyledDiv2",
            componentId: "sc-yksipt-6"
        })({
            flex: "1 1 0%"
        })
          , Fl = Object(Pe.c)("p").withConfig({
            displayName: "AccountSSHContainer___StyledP2",
            componentId: "sc-yksipt-7"
        })({
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            overflowWrap: "break-word",
            fontWeight: "500"
        })
          , Al = Object(Pe.c)("p").withConfig({
            displayName: "AccountSSHContainer___StyledP3",
            componentId: "sc-yksipt-8"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem",
            marginTop: "0.25rem",
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        })
          , Rl = Object(Pe.c)("p").withConfig({
            displayName: "AccountSSHContainer___StyledP4",
            componentId: "sc-yksipt-9"
        })({
            fontSize: "0.75rem",
            lineHeight: "1rem",
            marginTop: "0.25rem",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            textTransform: "uppercase"
        })
          , Ml = a(231);
        function zl(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Bl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? zl(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : zl(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Ll = e=>{
            const t = [void 0, null, ""]
              , a = e=>Object.entries(e).filter((e=>{
                let[a,n] = e;
                return !t.includes(n)
            }
            )).reduce(((e,t)=>{
                let[n,r] = t;
                const o = y(r) ? a(r) : r;
                return y(o) && (i = o,
                0 === Object.keys(i).length && Object.getPrototypeOf(i) === Object.prototype) ? e : Bl(Bl({}, e), {}, {
                    [n]: o
                });
                var i
            }
            ), {});
            return a(e)
        }
        ;
        function Hl(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Wl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Hl(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Hl(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Ul = e=>{
            let {pagination: t, className: a, onPageSelect: n} = e;
            const o = (t.currentPage - 1) * t.perPage
              , i = (t.currentPage - 1) * t.perPage + t.count
              , {currentPage: c, totalPages: s} = t
              , d = {
                previous: [],
                next: []
            };
            for (let e = 1; e <= 2; e++)
                c - e >= 1 && d.previous.push(c - e),
                c + e <= s && d.next.push(c + e);
            if (0 === t.total)
                return null;
            const m = e=>({
                size: le.a.Sizes.Small,
                shape: le.a.Shapes.IconSquare,
                variant: le.a.Variants.Secondary,
                onClick: ()=>n(e)
            });
            return r.a.createElement("div", {
                className: A()("flex items-center justify-between my-2", a)
            }, r.a.createElement("p", {
                className: "text-sm text-neutral-500"
            }, "Showing ", r.a.createElement("span", {
                className: "font-semibold text-neutral-400"
            }, Math.max(o, Math.min(t.total, 1))), " to ", r.a.createElement("span", {
                className: "font-semibold text-neutral-400"
            }, i), " of ", r.a.createElement("span", {
                className: "font-semibold text-neutral-400"
            }, t.total), " results."), t.totalPages > 1 && r.a.createElement("div", {
                className: "flex space-x-1"
            }, r.a.createElement(le.a.Text, l()({}, m(1), {
                disabled: 2 !== d.previous.length
            }), r.a.createElement(R.a, {
                className: "w-3 h-3"
            })), d.previous.reverse().map((e=>r.a.createElement(le.a.Text, l()({
                key: "previous-".concat(e)
            }, m(e)), e))), r.a.createElement(le.a, {
                size: le.a.Sizes.Small,
                shape: le.a.Shapes.IconSquare
            }, c), d.next.map((e=>r.a.createElement(le.a.Text, l()({
                key: "next-".concat(e)
            }, m(e)), e))), r.a.createElement(le.a.Text, l()({}, m(s), {
                disabled: 2 !== d.next.length
            }), r.a.createElement(R.b, {
                className: "w-3 h-3"
            }))))
        }
          , Kl = a(81)
          , ql = e=>{
            let {ns: t, children: a} = e
              , n = d()(e, ["ns", "children"]);
            const {t: o} = Object(Kl.c)(t);
            return r.a.createElement(Kl.a, l()({
                t: o
            }, n), a)
        }
          , Vl = e=>{
            let {meta: t} = e;
            const [a,o] = Object(n.useState)(!1);
            return r.a.createElement("div", {
                className: "self-center md:px-4"
            }, r.a.createElement(se.a, {
                open: a,
                onClose: ()=>o(!1),
                hideCloseIcon: !0,
                title: "Metadata"
            }, r.a.createElement("pre", {
                className: "bg-gray-900 rounded p-2 font-mono text-sm leading-relaxed overflow-x-scroll whitespace-pre-wrap"
            }, JSON.stringify(t, null, 2)), r.a.createElement(se.a.Footer, null, r.a.createElement(le.a.Text, {
                onClick: ()=>o(!1)
            }, "Close"))), r.a.createElement("button", {
                "aria-describedby": "View additional event metadata",
                className: "p-2 transition-colors duration-100 text-gray-400 group-hover:text-gray-300 group-hover:hover:text-gray-50",
                onClick: ()=>o(!0)
            }, r.a.createElement(Ce.b, {
                className: "w-5 h-5"
            })))
        }
          , $l = a(329)
          , Xl = {
            insert: "head",
            singleton: !1
        }
          , Yl = (z()($l.a, Xl),
        $l.a.locals || {})
          , Gl = a(254)
          , Jl = a(15);
        function Zl(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Ql(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zl(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Zl(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var es = ()=>{
            const e = Object(Jl.h)()
              , t = e=>e.substring(1).split("&").reduce(((e,t)=>{
                const [a,n=""] = t.split("=");
                return t.trim() ? Ql(Ql({}, e), {}, {
                    [a]: n
                }) : e
            }
            ), {});
            return {
                hash: Object(n.useMemo)((()=>t(e.hash)), [e.hash]),
                pathTo: a=>{
                    const n = t(e.hash);
                    for (const e in a)
                        n[e] = a[e];
                    return Object.keys(n).map((e=>"".concat(e, "=").concat(n[e]))).join("&")
                }
            }
        }
        ;
        function ts(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function as(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ts(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ts(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function ns(e) {
            return null === e || "string" == typeof e || "number" == typeof e ? "<strong>".concat(String(e), "</strong>") : y(e) ? f(e).reduce(((t,a)=>"count" === a || "string" == typeof a && a.endsWith("_count") ? as(as({}, t), {}, {
                [a]: e[a]
            }) : as(as({}, t), {}, {
                [a]: ns(e[a])
            })), {}) : Array.isArray(e) ? e.map(ns) : e
        }
        var rs = e=>{
            let {activity: t, children: a} = e;
            const {pathTo: n} = es()
              , o = t.relationships.actor
              , i = ns(t.properties);
            return r.a.createElement("div", {
                className: "grid grid-cols-10 py-4 border-b-2 border-gray-800 last:rounded-b last:border-0 group"
            }, r.a.createElement("div", {
                className: "hidden sm:flex sm:col-span-1 items-center justify-center select-none"
            }, r.a.createElement("div", {
                className: "flex items-center w-10 h-10 rounded-full bg-gray-600 overflow-hidden"
            }, r.a.createElement(Gl.a, {
                name: (null == o ? void 0 : o.uuid) || "system"
            }))), r.a.createElement("div", {
                className: "col-span-10 sm:col-span-9 flex"
            }, r.a.createElement("div", {
                className: "flex-1 px-4 sm:px-0"
            }, r.a.createElement("div", {
                className: "flex items-center text-gray-50"
            }, r.a.createElement(re.a, {
                placement: "top",
                content: (null == o ? void 0 : o.email) || "System User"
            }, r.a.createElement("span", null, (null == o ? void 0 : o.username) || "System")), r.a.createElement("span", {
                className: "text-gray-400"
            }, " — "), r.a.createElement(zt.a, {
                to: "#".concat(n({
                    event: t.event
                })),
                className: "transition-colors duration-75 active:text-cyan-400 hover:text-cyan-400"
            }, t.event), r.a.createElement("div", {
                className: A()(Yl.icons, "group-hover:text-gray-300")
            }, t.isApi && r.a.createElement(re.a, {
                placement: "top",
                content: "Using API Key"
            }, r.a.createElement(R.g, null)), t.event.startsWith("server:sftp.") && r.a.createElement(re.a, {
                placement: "top",
                content: "Using SFTP"
            }, r.a.createElement(R.f, null)), a)), r.a.createElement("p", {
                className: Yl.description
            }, r.a.createElement(ql, {
                ns: "activity",
                values: i,
                i18nKey: t.event.replace(":", ".")
            })), r.a.createElement("div", {
                className: "mt-1 flex items-center text-sm"
            }, t.ip && r.a.createElement("span", null, t.ip, r.a.createElement("span", {
                className: "text-gray-400"
            }, " | ")), r.a.createElement(re.a, {
                placement: "right",
                content: Object(Bt.b)(t.timestamp, "MMM do, yyyy H:mm:ss")
            }, r.a.createElement("span", null, Object(Bt.d)(t.timestamp, {
                addSuffix: !0
            }))))), t.hasAdditionalMetadata && r.a.createElement(Vl, {
                meta: t.properties
            })))
        }
        ;
        function os(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function is(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? os(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : os(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function cs(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function ls(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? cs(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : cs(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        const ss = (e,t)=>{
            const a = o.a.useStoreState((e=>{
                var t;
                return null === (t = e.server.data) || void 0 === t ? void 0 : t.uuid
            }
            ))
              , n = function(e) {
                const t = o.a.useStoreState((e=>{
                    var t;
                    return null === (t = e.server.data) || void 0 === t ? void 0 : t.uuid
                }
                ));
                return gl(e, "server:".concat(t))
            }(["activity", Ll(e || {})]);
            return Object(on.a)(n, (async()=>{
                const {data: t} = await Ie.a.get("/api/client/servers/".concat(a, "/activity"), {
                    params: ls(ls({}, Object(Ie.d)(e)), {}, {
                        include: ["actor"]
                    })
                });
                return Object(Ml.a)(t, bl.Transformers.toActivityLog)
            }
            ), ls({
                revalidateOnMount: !1
            }, t || {}))
        }
        ;
        function ds(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function ms(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ds(Object(a), !0).forEach((function(t) {
                    O()(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ds(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        const ps = Object(n.lazy)((()=>Promise.all([a.e(7), a.e(9)]).then(a.bind(null, 411))))
          , us = Object(n.lazy)((()=>a.e(14).then(a.bind(null, 408))));
        t.a = {
            account: [{
                path: "/",
                name: "Account",
                component: ()=>{
                    const {state: e} = Object(zt.g)();
                    return n.createElement(m.a, {
                        title: "Account Overview"
                    }, (null == e ? void 0 : e.twoFactorRedirect) && n.createElement(Fc.a, {
                        title: "2-Factor Required",
                        type: "error"
                    }, "Your account must have two-factor authentication enabled in order to continue."), n.createElement(zc, {
                        $_css: [{
                            marginBottom: "2.5rem",
                            "@media (min-width: 1024px)": {
                                display: "grid",
                                gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
                            }
                        }, (null == e ? void 0 : e.twoFactorRedirect) ? {
                            marginTop: "1rem"
                        } : {
                            marginTop: "2.5rem"
                        }]
                    }, n.createElement(Yi, {
                        title: "Update Password",
                        showFlashes: "account:password"
                    }, n.createElement(tc, null)), n.createElement(Bc, {
                        title: "Update Email Address",
                        showFlashes: "account:email"
                    }, n.createElement(sc, null)), n.createElement(Lc, {
                        title: "Two-Step Verification"
                    }, n.createElement(Dc, null))))
                }
                ,
                exact: !0
            }, {
                path: "/api",
                name: "API Credentials",
                component: ()=>{
                    const [e,t] = Object(n.useState)("")
                      , [a,o] = Object(n.useState)([])
                      , [i,c] = Object(n.useState)(!0)
                      , {clearAndAddHttpError: l} = Object(Ke.b)("account");
                    Object(n.useEffect)((()=>{
                        new Promise(((e,t)=>{
                            Ie.a.get("/api/client/account/api-keys").then((t=>{
                                let {data: a} = t;
                                return e((a.data || []).map((e=>Hc(e.attributes))))
                            }
                            )).catch(t)
                        }
                        )).then((e=>o(e))).then((()=>c(!1))).catch((e=>l(e)))
                    }
                    ), []);
                    const s = e=>{
                        c(!0),
                        l(),
                        (e=>new Promise(((t,a)=>{
                            Ie.a.delete("/api/client/account/api-keys/".concat(e)).then((()=>t())).catch(a)
                        }
                        )))(e).then((()=>o((t=>[...(t || []).filter((t=>t.identifier !== e))])))).catch((e=>l(e))).then((()=>{
                            c(!1),
                            t("")
                        }
                        ))
                    }
                    ;
                    return r.a.createElement(m.a, {
                        title: "Account API"
                    }, r.a.createElement(Fe.a, {
                        byKey: "account"
                    }), r.a.createElement(tl, null, r.a.createElement(al, {
                        title: "Create API Key"
                    }, r.a.createElement(Zc, {
                        onKeyCreated: e=>o((t=>[...t, e]))
                    })), r.a.createElement(nl, {
                        title: "API Keys"
                    }, r.a.createElement(k.a, {
                        visible: i
                    }), r.a.createElement(se.a.Confirm, {
                        title: "Delete API Key",
                        confirm: "Delete Key",
                        open: !!e,
                        onClose: ()=>t(""),
                        onConfirmed: ()=>s(e)
                    }, "All requests using the ", r.a.createElement(fr, null, e), " key will be invalidated."), 0 === a.length ? r.a.createElement(rl, null, i ? "Loading..." : "No API keys exist for this account.") : a.map(((e,a)=>r.a.createElement(ol, {
                        key: e.identifier,
                        $_css: [{
                            "--tw-bg-opacity": "1",
                            backgroundColor: "hsla(209, 14%, 37%, var(--tw-bg-opacity))",
                            display: "flex",
                            alignItems: "center"
                        }, a > 0 && {
                            marginTop: "0.5rem"
                        }]
                    }, r.a.createElement(il, {
                        icon: me.A
                    }), r.a.createElement(cl, null, r.a.createElement(ll, null, e.description), r.a.createElement(sl, null, "Last used: ", e.lastUsedAt ? Object(Bt.b)(e.lastUsedAt, "MMM do, yyyy HH:mm") : "Never")), r.a.createElement(dl, null, r.a.createElement(ml, null, e.identifier)), r.a.createElement(pl, {
                        onClick: ()=>t(e.identifier)
                    }, r.a.createElement(ul, {
                        icon: me.N
                    }))))))))
                }
            }, {
                path: "/ssh",
                name: "SSH Keys",
                component: ()=>{
                    const {clearAndAddHttpError: e} = Object(Ke.b)("account")
                      , {data: t, isValidating: a, error: o} = fl({
                        revalidateOnMount: !0,
                        revalidateOnFocus: !1
                    });
                    return Object(n.useEffect)((()=>{
                        e(o)
                    }
                    ), [o]),
                    r.a.createElement(m.a, {
                        title: "SSH Keys"
                    }, r.a.createElement(Fe.a, {
                        byKey: "account"
                    }), r.a.createElement(Cl, null, r.a.createElement(kl, {
                        title: "Add SSH Key"
                    }, r.a.createElement(Ol, null)), r.a.createElement(Nl, {
                        title: "SSH Keys"
                    }, r.a.createElement(k.a, {
                        visible: !t && a
                    }), t && t.length ? t.map(((e,t)=>r.a.createElement(Pl, {
                        key: e.fingerprint,
                        $_css: [{
                            "--tw-bg-opacity": "1",
                            backgroundColor: "hsla(209, 14%, 37%, var(--tw-bg-opacity))",
                            display: "flex",
                            "> :not([hidden]) ~ :not([hidden])": {
                                "--tw-space-x-reverse": 0,
                                marginRight: "calc(1rem * var(--tw-space-x-reverse))",
                                marginLeft: "calc(1rem * calc(1 - var(--tw-space-x-reverse)))"
                            },
                            alignItems: "center"
                        }, t > 0 && {
                            marginTop: "0.5rem"
                        }]
                    }, r.a.createElement(Il, {
                        icon: me.A
                    }), r.a.createElement(Tl, null, r.a.createElement(Fl, null, e.name), r.a.createElement(Al, null, "SHA256:", e.fingerprint), r.a.createElement(Rl, null, "Added on: ", Object(Bt.b)(e.createdAt, "MMM do, yyyy HH:mm"))), r.a.createElement(xl, {
                        name: e.name,
                        fingerprint: e.fingerprint
                    })))) : r.a.createElement(Dl, null, t ? "No SSH Keys exist for this account." : "Loading..."))))
                }
            }, {
                path: "/activity",
                name: "Activity",
                component: ()=>{
                    var e, t;
                    const {hash: a} = es()
                      , {clearAndAddHttpError: o} = Object(Ke.b)("account")
                      , [i,c] = Object(n.useState)({
                        page: 1,
                        sorts: {
                            timestamp: -1
                        }
                    })
                      , {data: l, isValidating: s, error: d} = ((e,t)=>{
                        const a = hl(["account", "activity", JSON.stringify(Ll(e || {}))]);
                        return Object(on.a)(a, (async()=>{
                            const {data: t} = await Ie.a.get("/api/client/account/activity", {
                                params: Wl(Wl({}, Object(Ie.d)(e)), {}, {
                                    include: ["actor"]
                                })
                            });
                            return Object(Ml.a)(t, bl.Transformers.toActivityLog)
                        }
                        ), Wl({
                            revalidateOnMount: !1
                        }, t || {}))
                    }
                    )(i, {
                        revalidateOnMount: !0,
                        revalidateOnFocus: !1
                    });
                    return Object(n.useEffect)((()=>{
                        c((e=>is(is({}, e), {}, {
                            filters: {
                                ip: a.ip,
                                event: a.event
                            }
                        })))
                    }
                    ), [a]),
                    Object(n.useEffect)((()=>{
                        o(d)
                    }
                    ), [d]),
                    r.a.createElement(m.a, {
                        title: "Account Activity Log"
                    }, r.a.createElement(Fe.a, {
                        byKey: "account"
                    }), ((null === (e = i.filters) || void 0 === e ? void 0 : e.event) || (null === (t = i.filters) || void 0 === t ? void 0 : t.ip)) && r.a.createElement("div", {
                        className: "flex justify-end mb-2"
                    }, r.a.createElement(zt.a, {
                        to: "#",
                        className: A()(le.b.button, le.b.text, "w-full sm:w-auto"),
                        onClick: ()=>c((e=>is(is({}, e), {}, {
                            filters: {}
                        })))
                    }, "Clear Filters ", r.a.createElement(R.h, {
                        className: "w-4 h-4 ml-2"
                    }))), !l && s ? r.a.createElement(g.a, {
                        centered: !0
                    }) : r.a.createElement("div", {
                        className: "bg-gray-700"
                    }, null == l ? void 0 : l.items.map((e=>r.a.createElement(rs, {
                        key: e.id,
                        activity: e
                    }, "string" == typeof e.properties.useragent && r.a.createElement(re.a, {
                        content: e.properties.useragent,
                        placement: "top"
                    }, r.a.createElement("span", null, r.a.createElement(R.e, null))))))), l && r.a.createElement(Ul, {
                        pagination: l.pagination,
                        onPageSelect: e=>c((t=>is(is({}, t), {}, {
                            page: e
                        })))
                    }))
                }
            }],
            server: [{
                path: "/",
                permission: null,
                name: "Console",
                component: De,
                exact: !0
            }, {
                path: "/files",
                permission: "file.*",
                name: "Files",
                component: ()=>{
                    const e = o.a.useStoreState((e=>e.server.data.id))
                      , {hash: t} = Object(zt.g)()
                      , {data: a, error: c, mutate: l} = Object(ao.a)()
                      , s = o.a.useStoreState((e=>e.files.directory))
                      , d = Object(mi.a)((e=>e.flashes.clearFlashes))
                      , m = o.a.useStoreActions((e=>e.files.setDirectory))
                      , u = o.a.useStoreActions((e=>e.files.setSelectedFiles))
                      , b = o.a.useStoreState((e=>e.files.selectedFiles.length));
                    Object(n.useEffect)((()=>{
                        d("files"),
                        u([]),
                        m(Object(eo.d)(t))
                    }
                    ), [t]),
                    Object(n.useEffect)((()=>{
                        l()
                    }
                    ), [s]);
                    return c ? r.a.createElement(Br.b, {
                        message: Object(Ie.c)(c),
                        onRetry: ()=>l()
                    }) : r.a.createElement(p, {
                        title: "File Manager",
                        showFlashKey: "files"
                    }, r.a.createElement(pi.a, null, r.a.createElement("div", {
                        className: "flex flex-wrap-reverse md:flex-nowrap mb-4"
                    }, r.a.createElement(Ko.a, {
                        renderLeft: r.a.createElement(ui, {
                            type: "checkbox",
                            checked: b === (0 === (null == a ? void 0 : a.length) ? -1 : null == a ? void 0 : a.length),
                            onChange: e=>{
                                u(e.currentTarget.checked && (null == a ? void 0 : a.map((e=>e.name))) || [])
                            }
                        })
                    }), r.a.createElement(i.a, {
                        action: "file.create"
                    }, r.a.createElement("div", {
                        className: Ro.manager_actions
                    }, r.a.createElement(ni, null), r.a.createElement(Xo, null), r.a.createElement(si, null), r.a.createElement(zt.b, {
                        to: "/server/".concat(e, "/files/new").concat(window.location.hash)
                    }, r.a.createElement(le.a, null, "New File")))))), a ? r.a.createElement(r.a.Fragment, null, a.length ? r.a.createElement(Qr.a, {
                        classNames: "fade",
                        timeout: 150,
                        appear: !0,
                        in: !0
                    }, r.a.createElement("div", null, a.length > 250 && r.a.createElement(gi, null, r.a.createElement(hi, null, "This directory is too large to display in the browser, limiting the output to the first 250 files.")), (e=>{
                        const t = e.sort(((e,t)=>e.name.localeCompare(t.name))).sort(((e,t)=>e.isFile === t.isFile ? 0 : e.isFile ? 1 : -1));
                        return t.filter(((e,a)=>0 === a || e.name !== t[a - 1].name))
                    }
                    )(a.slice(0, 250)).map((e=>r.a.createElement(Bo, {
                        key: e.key,
                        file: e
                    }))), r.a.createElement(ri, null))) : r.a.createElement(bi, null, "This directory seems to be empty.")) : r.a.createElement(g.a, {
                        size: "large",
                        centered: !0
                    }))
                }
            }, {
                path: "/files/:action(edit|new)",
                permission: "file.*",
                name: void 0,
                component: ps
            }, {
                path: "/databases",
                permission: "database.*",
                name: "Databases",
                component: ()=>{
                    const e = o.a.useStoreState((e=>e.server.data.uuid))
                      , t = o.a.useStoreState((e=>e.server.data.featureLimits.databases))
                      , {addError: a, clearFlashes: c} = Object(Ke.a)()
                      , [l,s] = Object(n.useState)(!0)
                      , d = Object(Pt.a)(o.a.useStoreState((e=>e.databases.data)))
                      , m = o.a.useStoreActions((e=>e.databases.setDatabases));
                    return Object(n.useEffect)((()=>{
                        s(!d.length),
                        c("databases"),
                        function(e) {
                            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return new Promise(((a,n)=>{
                                Ie.a.get("/api/client/servers/".concat(e, "/databases"), {
                                    params: t ? {
                                        include: "password"
                                    } : void 0
                                }).then((e=>a((e.data.data || []).map((e=>Te(e.attributes)))))).catch(n)
                            }
                            ))
                        }(e).then((e=>m(e))).catch((e=>{
                            console.error(e),
                            a({
                                key: "databases",
                                message: Object(Ie.c)(e)
                            })
                        }
                        )).then((()=>s(!1)))
                    }
                    ), []),
                    r.a.createElement(p, {
                        title: "Databases"
                    }, r.a.createElement(It, {
                        byKey: "databases"
                    }), !d.length && l ? r.a.createElement(g.a, {
                        size: "large",
                        centered: !0
                    }) : r.a.createElement(he.a, {
                        timeout: 150
                    }, r.a.createElement(r.a.Fragment, null, d.length > 0 ? d.map(((e,t)=>r.a.createElement(Xe, {
                        key: e.id,
                        database: e,
                        className: t > 0 ? "mt-1" : void 0
                    }))) : r.a.createElement(Tt, null, t > 0 ? "It looks like you have no databases." : "Databases cannot be created for this server."), r.a.createElement(i.a, {
                        action: "database.create"
                    }, r.a.createElement(Ft, null, t > 0 && d.length > 0 && r.a.createElement(At, null, d.length, " of ", t, " databases have been allocated to this server."), t > 0 && t !== d.length && r.a.createElement(Rt, null))))))
                }
            }, {
                path: "/schedules",
                permission: "schedule.*",
                name: "Schedules",
                component: ()=>{
                    const e = Object(zt.i)()
                      , t = Object(zt.f)()
                      , a = o.a.useStoreState((e=>e.server.data.uuid))
                      , {clearFlashes: c, addError: l} = Object(Ke.a)()
                      , [s,d] = Object(n.useState)(!0)
                      , [m,u] = Object(n.useState)(!1)
                      , b = o.a.useStoreState((e=>e.schedules.data))
                      , h = o.a.useStoreActions((e=>e.schedules.setSchedules));
                    return Object(n.useEffect)((()=>{
                        c("schedules"),
                        Object(Mt.a)(a).then((e=>h(e))).catch((e=>{
                            l({
                                message: Object(Ie.c)(e),
                                key: "schedules"
                            }),
                            console.error(e)
                        }
                        )).then((()=>d(!1)))
                    }
                    ), []),
                    r.a.createElement(p, {
                        title: "Schedules"
                    }, r.a.createElement(Yt, {
                        byKey: "schedules"
                    }), !b.length && s ? r.a.createElement(g.a, {
                        size: "large",
                        centered: !0
                    }) : r.a.createElement(r.a.Fragment, null, 0 === b.length ? r.a.createElement(Gt, null, "There are no schedules configured for this server.") : b.map((a=>r.a.createElement(Jt, {
                        as: "a",
                        key: a.id,
                        href: "".concat(e.url, "/").concat(a.id),
                        onClick: n=>{
                            n.preventDefault(),
                            t.push("".concat(e.url, "/").concat(a.id))
                        }
                    }, r.a.createElement(Ht, {
                        schedule: a
                    })))), r.a.createElement(i.a, {
                        action: "schedule.create"
                    }, r.a.createElement(Zt, null, r.a.createElement(Xt.a, {
                        visible: m,
                        onModalDismissed: ()=>u(!1)
                    }), r.a.createElement(le.a, {
                        type: "button",
                        onClick: ()=>u(!0)
                    }, "Create schedule")))))
                }
            }, {
                path: "/schedules/:id",
                permission: "schedule.*",
                name: void 0,
                component: us
            }, {
                path: "/users",
                permission: "user.*",
                name: "Users",
                component: ()=>{
                    const [e,t] = Object(n.useState)(!0)
                      , a = o.a.useStoreState((e=>e.server.data.uuid))
                      , c = o.a.useStoreState((e=>e.subusers.data))
                      , l = o.a.useStoreActions((e=>e.subusers.setSubusers))
                      , s = Object(Le.useStoreState)((e=>e.permissions.data))
                      , d = Object(Le.useStoreActions)((e=>e.permissions.getPermissions))
                      , {addError: m, clearFlashes: u} = Object(Le.useStoreActions)((e=>e.flashes));
                    return Object(n.useEffect)((()=>{
                        u("users"),
                        (e=>new Promise(((t,a)=>{
                            Ie.a.get("/api/client/servers/".concat(e, "/users")).then((e=>{
                                let {data: a} = e;
                                return t((a.data || []).map(Qt))
                            }
                            )).catch(a)
                        }
                        )))(a).then((e=>{
                            l(e),
                            t(!1)
                        }
                        )).catch((e=>{
                            console.error(e),
                            m({
                                key: "users",
                                message: Object(Ie.c)(e)
                            })
                        }
                        ))
                    }
                    ), []),
                    Object(n.useEffect)((()=>{
                        d().catch((e=>{
                            m({
                                key: "users",
                                message: Object(Ie.c)(e)
                            }),
                            console.error(e)
                        }
                        ))
                    }
                    ), []),
                    c.length || !e && Object.keys(s).length ? r.a.createElement(p, {
                        title: "Users"
                    }, r.a.createElement(en, {
                        byKey: "users"
                    }), c.length ? c.map((e=>r.a.createElement(La, {
                        key: e.uuid,
                        subuser: e
                    }))) : r.a.createElement(tn, null, "It looks like you don't have any subusers."), r.a.createElement(i.a, {
                        action: "user.create"
                    }, r.a.createElement(an, null, r.a.createElement(Ra, null)))) : r.a.createElement(g.a, {
                        size: "large",
                        centered: !0
                    })
                }
            }, {
                path: "/backups",
                permission: "backup.*",
                name: "Backups",
                component: ()=>{
                    const [e,t] = Object(n.useState)(1);
                    return r.a.createElement(cn.Provider, {
                        value: {
                            page: e,
                            setPage: t
                        }
                    }, r.a.createElement(rr, null))
                }
            }, {
                path: "/network",
                permission: "allocation.*",
                name: "Network",
                component: Cr
            },  {
                path: "/activity",
                permission: "activity.*",
                name: "Activity",
                component: ()=>{
                    var e, t;
                    const {hash: a} = es()
                      , {clearAndAddHttpError: o} = Object(Ke.b)("server:activity")
                      , [i,c] = Object(n.useState)({
                        page: 1,
                        sorts: {
                            timestamp: -1
                        }
                    })
                      , {data: l, isValidating: s, error: d} = ss(i, {
                        revalidateOnMount: !0,
                        revalidateOnFocus: !1
                    });
                    return Object(n.useEffect)((()=>{
                        c((e=>ms(ms({}, e), {}, {
                            filters: {
                                ip: a.ip,
                                event: a.event
                            }
                        })))
                    }
                    ), [a]),
                    Object(n.useEffect)((()=>{
                        o(d)
                    }
                    ), [d]),
                    r.a.createElement(p, {
                        title: "Activity Log"
                    }, r.a.createElement(Fe.a, {
                        byKey: "server:activity"
                    }), ((null === (e = i.filters) || void 0 === e ? void 0 : e.event) || (null === (t = i.filters) || void 0 === t ? void 0 : t.ip)) && r.a.createElement("div", {
                        className: "flex justify-end mb-2"
                    }, r.a.createElement(zt.a, {
                        to: "#",
                        className: A()(le.b.button, le.b.text, "w-full sm:w-auto"),
                        onClick: ()=>c((e=>ms(ms({}, e), {}, {
                            filters: {}
                        })))
                    }, "Clear Filters ", r.a.createElement(R.h, {
                        className: "w-4 h-4 ml-2"
                    }))), !l && s ? r.a.createElement(g.a, {
                        centered: !0
                    }) : (null == l ? void 0 : l.items.length) ? r.a.createElement("div", {
                        className: "bg-gray-700"
                    }, null == l ? void 0 : l.items.map((e=>r.a.createElement(rs, {
                        key: e.id,
                        activity: e
                    }, r.a.createElement("span", null))))) : r.a.createElement("p", {
                        className: "text-sm text-center text-gray-400"
                    }, "No activity logs available for this server."), l && r.a.createElement(Ul, {
                        pagination: l.pagination,
                        onPageSelect: e=>c((t=>ms(ms({}, t), {}, {
                            page: e
                        })))
                    }))
                }
            }]
        }
    },
    283: function(e, t, a) {
        "use strict";
        var n = a(1)
          , r = a(0)
          , o = a.n(r)
          , i = a(28)
          , c = a(53)
          , l = a(27)
          , s = a(2)
          , d = a(200)
          , m = a(19)
          , p = a.n(m)
          , u = a(165)
          , b = a(155)
          , g = a(163)
          , h = a(203)
          , y = a.n(h)
          , f = a(183)
          , w = a(194)
          , v = a(253)
          , O = a(157)
          , _ = a(175);
        const E = Object(n.c)(i.a).withConfig({
            displayName: "SearchModal__ServerResult",
            componentId: "sc-e8elnt-0"
        })(["", ";&:hover{", ";}&:not(:last-of-type){", ";}"], {
            display: "flex",
            alignItems: "center",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(210, 24%, 16%, var(--tw-bg-opacity))",
            padding: "1rem",
            borderRadius: "0.25rem",
            borderLeftWidth: "4px",
            "--tw-border-opacity": "1",
            borderColor: "hsla(210, 24%, 16%, var(--tw-border-opacity))",
            textDecoration: "none",
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms"
        }, {
            "--tw-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            "--tw-border-opacity": "1",
            borderColor: "rgba(6, 182, 212, var(--tw-border-opacity))"
        }, {
            marginBottom: "0.5rem"
        })
          , x = ()=>{
            const {values: e, submitForm: t} = Object(b.e)();
            return Object(r.useEffect)((()=>{
                e.term.length >= 3 && t()
            }
            ), [e.term]),
            null
        }
        ;
        var S = e=>{
            let t = p()({}, e);
            const a = Object(r.useRef)(null)
              , n = Object(s.useStoreState)((e=>e.user.data.rootAdmin))
              , [i,c] = Object(r.useState)([])
              , {clearAndAddHttpError: l, clearFlashes: d} = Object(s.useStoreActions)((e=>e.flashes))
              , m = y()(((e,t)=>{
                let {term: r} = e
                  , {setSubmitting: o} = t;
                d("search"),
                Object(v.a)({
                    query: r,
                    type: n ? "admin-all" : void 0
                }).then((e=>c(e.items.filter(((e,t)=>t < 5))))).catch((e=>{
                    console.error(e),
                    l({
                        key: "search",
                        error: e
                    })
                }
                )).then((()=>o(!1))).then((()=>{
                    var e;
                    return null === (e = a.current) || void 0 === e ? void 0 : e.focus()
                }
                ))
            }
            ), 500);
            Object(r.useEffect)((()=>{
                t.visible && a.current && a.current.focus()
            }
            ), [t.visible]);
            const h = e=>o.a.createElement(O.b, p()({
                autoFocus: !0
            }, e, {
                ref: a
            }));
            return o.a.createElement(b.c, {
                onSubmit: m,
                validationSchema: Object(g.d)().shape({
                    term: Object(g.f)().min(3, "Please enter at least three characters to begin searching.")
                }),
                initialValues: {
                    term: ""
                }
            }, (e=>{
                let {isSubmitting: a} = e;
                return o.a.createElement(u.b, t, o.a.createElement(b.b, null, o.a.createElement(f.a, {
                    name: "term",
                    label: "Search term",
                    description: "Enter a server name, uuid, or allocation to begin searching."
                }, o.a.createElement(x, null), o.a.createElement(w.a, {
                    visible: a
                }, o.a.createElement(b.a, {
                    as: h,
                    name: "term"
                })))), i.length > 0 && o.a.createElement(j, {
                    $_css: {
                        marginTop: "1.5rem"
                    }
                }, i.map((e=>o.a.createElement(E, {
                    key: e.uuid,
                    to: "/server/".concat(e.id),
                    onClick: ()=>t.onDismissed()
                }, o.a.createElement(C, {
                    $_css2: {
                        flex: "1 1 0%",
                        marginRight: "1rem"
                    }
                }, o.a.createElement(k, {
                    $_css3: {
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem"
                    }
                }, e.name), o.a.createElement(N, {
                    $_css4: {
                        marginTop: "0.25rem",
                        fontSize: "0.75rem",
                        lineHeight: "1rem",
                        "--tw-text-opacity": "1",
                        color: "hsla(211, 10%, 53%, var(--tw-text-opacity))"
                    }
                }, e.allocations.filter((e=>e.isDefault)).map((e=>o.a.createElement("span", {
                    key: e.ip + e.port.toString()
                }, e.alias || Object(_.b)(e.ip), ":", e.port))))), o.a.createElement(D, {
                    $_css5: {
                        flex: "none",
                        textAlign: "right"
                    }
                }, o.a.createElement(P, {
                    $_css6: {
                        fontSize: "0.75rem",
                        lineHeight: "1rem",
                        paddingTop: "0.25rem",
                        paddingBottom: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        "--tw-bg-opacity": "1",
                        backgroundColor: "rgba(21, 94, 117, var(--tw-bg-opacity))",
                        "--tw-text-opacity": "1",
                        color: "rgba(207, 250, 254, var(--tw-text-opacity))",
                        borderRadius: "0.25rem"
                    }
                }, e.node)))))))
            }
            ))
        }
          , j = Object(n.c)("div").withConfig({
            displayName: "SearchModal___StyledDiv",
            componentId: "sc-e8elnt-1"
        })(["", ""], (e=>e.$_css))
          , C = Object(n.c)("div").withConfig({
            displayName: "SearchModal___StyledDiv2",
            componentId: "sc-e8elnt-2"
        })(["", ""], (e=>e.$_css2))
          , k = Object(n.c)("p").withConfig({
            displayName: "SearchModal___StyledP",
            componentId: "sc-e8elnt-3"
        })(["", ""], (e=>e.$_css3))
          , N = Object(n.c)("p").withConfig({
            displayName: "SearchModal___StyledP2",
            componentId: "sc-e8elnt-4"
        })(["", ""], (e=>e.$_css4))
          , D = Object(n.c)("div").withConfig({
            displayName: "SearchModal___StyledDiv3",
            componentId: "sc-e8elnt-5"
        })(["", ""], (e=>e.$_css5))
          , P = Object(n.c)("span").withConfig({
            displayName: "SearchModal___StyledSpan",
            componentId: "sc-e8elnt-6"
        })(["", ""], (e=>e.$_css6))
          , I = a(176)
          , T = ()=>{
            const [e,t] = Object(r.useState)(!1);
            return Object(d.a)("keydown", (a=>{
                ["input", "textarea"].indexOf((a.target.tagName || "input").toLowerCase()) < 0 && !e && a.metaKey && "/" === a.key.toLowerCase() && t(!0)
            }
            )),
            o.a.createElement(o.a.Fragment, null, e && o.a.createElement(S, {
                appear: !0,
                visible: e,
                onDismissed: ()=>t(!1)
            }), o.a.createElement(I.a, {
                placement: "bottom",
                content: "Search"
            }, o.a.createElement("div", {
                className: "navigation-link",
                onClick: ()=>t(!0)
            }, o.a.createElement(c.a, {
                icon: l.I
            }))))
        }
          , F = a(17)
          , A = a(159)
          , R = a(254);
        const M = n.c.div.withConfig({
            displayName: "NavigationBar__RightNavigation",
            componentId: "sc-tupl2x-0"
        })(["& > a,& > button,& > .navigation-link{", ";&:active,&:hover{", ";}&:active,&:hover,&.active{box-shadow:inset 0 -2px ", ";}}"], {
            display: "flex",
            alignItems: "center",
            height: "100%",
            textDecoration: "none",
            "--tw-text-opacity": "1",
            color: "hsla(211, 13%, 65%, var(--tw-text-opacity))",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            cursor: "pointer",
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms"
        }, {
            "--tw-text-opacity": "1",
            color: "hsla(214, 15%, 91%, var(--tw-text-opacity))",
            "--tw-bg-opacity": "1",
            backgroundColor: "rgba(19, 26, 32, var(--tw-bg-opacity))"
        }, "#0891b2".toString());
        t.a = ()=>{
            const e = Object(s.useStoreState)((e=>e.settings.data.name))
              , t = Object(s.useStoreState)((e=>e.user.data.rootAdmin))
              , [a,n] = Object(r.useState)(!1);
            return r.createElement("div", {
                className: "w-full bg-neutral-900 shadow-md overflow-x-auto"
            }, r.createElement(A.a, {
                visible: a
            }), r.createElement("div", {
                className: "mx-auto w-full flex items-center h-[3.5rem] max-w-[1200px]"
            }, r.createElement("div", {
                id: "logo",
                className: "flex-1"
            }, r.createElement(i.a, {
                to: "/",
                className: "text-2xl font-header px-4 no-underline text-neutral-200 hover:text-neutral-100 transition-colors duration-150"
            }, e)), r.createElement(M, {
                className: "flex h-full items-center justify-center"
            }, r.createElement(T, null), r.createElement(I.a, {
                placement: "bottom",
                content: "Dashboard"
            }, r.createElement(i.b, {
                to: "/",
                exact: !0
            }, r.createElement(c.a, {
                icon: l.B
            }))), t && r.createElement(I.a, {
                placement: "bottom",
                content: "Admin"
            }, r.createElement("a", {
                href: "/admin",
                rel: "noreferrer"
            }, r.createElement(c.a, {
                icon: l.l
            }))), r.createElement(I.a, {
                placement: "bottom",
                content: "Account Settings"
            }, r.createElement(i.b, {
                to: "/account"
            }, r.createElement("span", {
                className: "flex items-center w-5 h-5"
            }, r.createElement(R.a.User, null)))), r.createElement(I.a, {
                placement: "bottom",
                content: "Sign Out"
            }, r.createElement("button", {
                onClick: ()=>{
                    n(!0),
                    F.a.post("/auth/logout").finally((()=>{
                        window.location = "/"
                    }
                    ))
                }
            }, r.createElement(c.a, {
                icon: l.K
            }))))))
        }
    },
    284: function(e, t, a) {
        "use strict";
        var n = a(1)
          , r = a(0)
          , o = a.n(r)
          , i = a(158)
          , c = a(155)
          , l = a(227)
          , s = a(205)
          , d = a(17)
          , m = a(50)
          , p = a(51)
          , u = a(153)
          , b = a(154)
          , g = a(188)
          , h = a(196)
          , y = a(204)
          , f = ()=>o.a.createElement(o.a.Fragment, null, o.a.createElement(w, null, o.a.createElement(v, null, o.a.createElement(O, null, "Examples"), o.a.createElement(_, null, o.a.createElement(E, null, "*/5 * * * *"), o.a.createElement(x, null, "every 5 minutes")), o.a.createElement(S, null, o.a.createElement(j, null, "0 */1 * * *"), o.a.createElement(C, null, "every hour")), o.a.createElement(k, null, o.a.createElement(N, null, "0 8-12 * * *"), o.a.createElement(D, null, "hour range")), o.a.createElement(P, null, o.a.createElement(I, null, "0 0 * * *"), o.a.createElement(T, null, "once a day")), o.a.createElement(F, null, o.a.createElement(A, null, "0 0 * * MON"), o.a.createElement(R, null, "every Monday")))), o.a.createElement(M, null, o.a.createElement(z, null, "Special Characters"), o.a.createElement(B, null, o.a.createElement(L, null, o.a.createElement(H, null, "*"), o.a.createElement(W, null, "any value")), o.a.createElement(U, null, o.a.createElement(K, null, ","), o.a.createElement(q, null, "value list separator")), o.a.createElement(V, null, o.a.createElement($, null, "-"), o.a.createElement(X, null, "range values")), o.a.createElement(Y, null, o.a.createElement(G, null, "/"), o.a.createElement(J, null, "step values")))))
          , w = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv",
            componentId: "sc-fr1egy-0"
        })({
            height: "100%",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 14%, 37%, var(--tw-bg-opacity))",
            "@media (min-width: 768px)": {
                width: "50%"
            }
        })
          , v = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv2",
            componentId: "sc-fr1egy-1"
        })({
            display: "flex",
            flexDirection: "column"
        })
          , O = Object(n.c)("h2").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledH",
            componentId: "sc-fr1egy-2"
        })({
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            fontWeight: "700"
        })
          , _ = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv3",
            componentId: "sc-fr1egy-3"
        })({
            display: "flex",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(211, 12%, 43%, var(--tw-bg-opacity))"
        })
          , E = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv4",
            componentId: "sc-fr1egy-4"
        })({
            width: "50%"
        })
          , x = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv5",
            componentId: "sc-fr1egy-5"
        })({
            width: "50%"
        })
          , S = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv6",
            componentId: "sc-fr1egy-6"
        })({
            display: "flex",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem"
        })
          , j = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv7",
            componentId: "sc-fr1egy-7"
        })({
            width: "50%"
        })
          , C = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv8",
            componentId: "sc-fr1egy-8"
        })({
            width: "50%"
        })
          , k = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv9",
            componentId: "sc-fr1egy-9"
        })({
            display: "flex",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(211, 12%, 43%, var(--tw-bg-opacity))"
        })
          , N = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv10",
            componentId: "sc-fr1egy-10"
        })({
            width: "50%"
        })
          , D = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv11",
            componentId: "sc-fr1egy-11"
        })({
            width: "50%"
        })
          , P = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv12",
            componentId: "sc-fr1egy-12"
        })({
            display: "flex",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem"
        })
          , I = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv13",
            componentId: "sc-fr1egy-13"
        })({
            width: "50%"
        })
          , T = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv14",
            componentId: "sc-fr1egy-14"
        })({
            width: "50%"
        })
          , F = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv15",
            componentId: "sc-fr1egy-15"
        })({
            display: "flex",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(211, 12%, 43%, var(--tw-bg-opacity))"
        })
          , A = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv16",
            componentId: "sc-fr1egy-16"
        })({
            width: "50%"
        })
          , R = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv17",
            componentId: "sc-fr1egy-17"
        })({
            width: "50%"
        })
          , M = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv18",
            componentId: "sc-fr1egy-18"
        })({
            height: "100%",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 14%, 37%, var(--tw-bg-opacity))",
            "@media (min-width: 768px)": {
                width: "50%"
            }
        })
          , z = Object(n.c)("h2").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledH2",
            componentId: "sc-fr1egy-19"
        })({
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            fontWeight: "700"
        })
          , B = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv19",
            componentId: "sc-fr1egy-20"
        })({
            display: "flex",
            flexDirection: "column"
        })
          , L = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv20",
            componentId: "sc-fr1egy-21"
        })({
            display: "flex",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(211, 12%, 43%, var(--tw-bg-opacity))"
        })
          , H = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv21",
            componentId: "sc-fr1egy-22"
        })({
            width: "50%"
        })
          , W = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv22",
            componentId: "sc-fr1egy-23"
        })({
            width: "50%"
        })
          , U = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv23",
            componentId: "sc-fr1egy-24"
        })({
            display: "flex",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem"
        })
          , K = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv24",
            componentId: "sc-fr1egy-25"
        })({
            width: "50%"
        })
          , q = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv25",
            componentId: "sc-fr1egy-26"
        })({
            width: "50%"
        })
          , V = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv26",
            componentId: "sc-fr1egy-27"
        })({
            display: "flex",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(211, 12%, 43%, var(--tw-bg-opacity))"
        })
          , $ = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv27",
            componentId: "sc-fr1egy-28"
        })({
            width: "50%"
        })
          , X = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv28",
            componentId: "sc-fr1egy-29"
        })({
            width: "50%"
        })
          , Y = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv29",
            componentId: "sc-fr1egy-30"
        })({
            display: "flex",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem"
        })
          , G = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv30",
            componentId: "sc-fr1egy-31"
        })({
            width: "50%"
        })
          , J = Object(n.c)("div").withConfig({
            displayName: "ScheduleCheatsheetCards___StyledDiv31",
            componentId: "sc-fr1egy-32"
        })({
            width: "50%"
        });
        t.a = Object(h.a)()((e=>{
            var t, a;
            let {schedule: n} = e;
            const {addError: p, clearFlashes: h} = Object(u.a)()
              , {dismiss: w} = Object(r.useContext)(g.a)
              , v = m.a.useStoreState((e=>e.server.data.uuid))
              , O = m.a.useStoreActions((e=>e.schedules.appendSchedule))
              , [_,E] = Object(r.useState)(!1);
            Object(r.useEffect)((()=>()=>{
                h("schedule:edit")
            }
            ), []);
            return o.a.createElement(c.c, {
                onSubmit: (e,t)=>{
                    let {setSubmitting: a} = t;
                    h("schedule:edit"),
                    (async(e,t)=>{
                        const {data: a} = await d.a.post("/api/client/servers/".concat(e, "/schedules").concat(t.id ? "/".concat(t.id) : ""), {
                            is_active: t.isActive,
                            only_when_online: t.onlyWhenOnline,
                            name: t.name,
                            minute: t.cron.minute,
                            hour: t.cron.hour,
                            day_of_month: t.cron.dayOfMonth,
                            month: t.cron.month,
                            day_of_week: t.cron.dayOfWeek
                        });
                        return Object(s.b)(a.attributes)
                    }
                    )(v, {
                        id: null == n ? void 0 : n.id,
                        name: e.name,
                        cron: {
                            minute: e.minute,
                            hour: e.hour,
                            dayOfWeek: e.dayOfWeek,
                            month: e.month,
                            dayOfMonth: e.dayOfMonth
                        },
                        onlyWhenOnline: e.onlyWhenOnline,
                        isActive: e.enabled
                    }).then((e=>{
                        a(!1),
                        O(e),
                        w()
                    }
                    )).catch((e=>{
                        console.error(e),
                        a(!1),
                        p({
                            key: "schedule:edit",
                            message: Object(d.c)(e)
                        })
                    }
                    ))
                }
                ,
                initialValues: {
                    name: (null == n ? void 0 : n.name) || "",
                    minute: (null == n ? void 0 : n.cron.minute) || "*/5",
                    hour: (null == n ? void 0 : n.cron.hour) || "*",
                    dayOfMonth: (null == n ? void 0 : n.cron.dayOfMonth) || "*",
                    month: (null == n ? void 0 : n.cron.month) || "*",
                    dayOfWeek: (null == n ? void 0 : n.cron.dayOfWeek) || "*",
                    enabled: null === (t = null == n ? void 0 : n.isActive) || void 0 === t || t,
                    onlyWhenOnline: null === (a = null == n ? void 0 : n.onlyWhenOnline) || void 0 === a || a
                }
            }, (e=>{
                let {isSubmitting: t} = e;
                return o.a.createElement(c.b, null, o.a.createElement(Z, null, n ? "Edit schedule" : "Create new schedule"), o.a.createElement(Q, {
                    byKey: "schedule:edit"
                }), o.a.createElement(i.a, {
                    name: "name",
                    label: "Schedule name",
                    description: "A human readable identifier for this schedule."
                }), o.a.createElement(ee, null, o.a.createElement(i.a, {
                    name: "minute",
                    label: "Minute"
                }), o.a.createElement(i.a, {
                    name: "hour",
                    label: "Hour"
                }), o.a.createElement(i.a, {
                    name: "dayOfMonth",
                    label: "Day of month"
                }), o.a.createElement(i.a, {
                    name: "month",
                    label: "Month"
                }), o.a.createElement(i.a, {
                    name: "dayOfWeek",
                    label: "Day of week"
                })), o.a.createElement(te, null, "The schedule system supports the use of Cronjob syntax when defining when tasks should begin running. Use the fields above to specify when these tasks should begin running."), o.a.createElement(ae, null, o.a.createElement(y.a, {
                    name: "show_cheatsheet",
                    description: "Show the cron cheatsheet for some examples.",
                    label: "Show Cheatsheet",
                    defaultChecked: _,
                    onChange: ()=>E((e=>!e))
                }), _ && o.a.createElement(ne, null, o.a.createElement(f, null))), o.a.createElement(re, null, o.a.createElement(l.a, {
                    name: "onlyWhenOnline",
                    description: "Only execute this schedule when the server is in a running state.",
                    label: "Only When Server Is Online"
                })), o.a.createElement(oe, null, o.a.createElement(l.a, {
                    name: "enabled",
                    description: "This schedule will be executed automatically if enabled.",
                    label: "Schedule Enabled"
                })), o.a.createElement(ie, null, o.a.createElement(b.a, {
                    className: "w-full sm:w-auto",
                    type: "submit",
                    disabled: t
                }, n ? "Save changes" : "Create schedule")))
            }
            ))
        }
        ));
        var Z = Object(n.c)("h3").withConfig({
            displayName: "EditScheduleModal___StyledH",
            componentId: "sc-wh9db9-0"
        })({
            fontSize: "1.5rem",
            lineHeight: "2rem",
            marginBottom: "1.5rem"
        })
          , Q = Object(n.c)(p.a).withConfig({
            displayName: "EditScheduleModal___StyledFlashMessageRender",
            componentId: "sc-wh9db9-1"
        })({
            marginBottom: "1.5rem"
        })
          , ee = Object(n.c)("div").withConfig({
            displayName: "EditScheduleModal___StyledDiv",
            componentId: "sc-wh9db9-2"
        })({
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "1rem",
            marginTop: "1.5rem",
            "@media (min-width: 640px)": {
                gridTemplateColumns: "repeat(5, minmax(0, 1fr))"
            }
        })
          , te = Object(n.c)("p").withConfig({
            displayName: "EditScheduleModal___StyledP",
            componentId: "sc-wh9db9-3"
        })({
            "--tw-text-opacity": "1",
            color: "hsla(211, 10%, 53%, var(--tw-text-opacity))",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            marginTop: "0.5rem"
        })
          , ae = Object(n.c)("div").withConfig({
            displayName: "EditScheduleModal___StyledDiv2",
            componentId: "sc-wh9db9-4"
        })({
            marginTop: "1.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 18%, 30%, var(--tw-bg-opacity))",
            borderWidth: "1px",
            "--tw-border-opacity": "1",
            borderColor: "hsla(209, 20%, 25%, var(--tw-border-opacity))",
            "--tw-shadow": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            padding: "1rem",
            borderRadius: "0.25rem"
        })
          , ne = Object(n.c)("div").withConfig({
            displayName: "EditScheduleModal___StyledDiv3",
            componentId: "sc-wh9db9-5"
        })({
            display: "block",
            width: "100%",
            "@media (min-width: 768px)": {
                display: "flex"
            }
        })
          , re = Object(n.c)("div").withConfig({
            displayName: "EditScheduleModal___StyledDiv4",
            componentId: "sc-wh9db9-6"
        })({
            marginTop: "1.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 18%, 30%, var(--tw-bg-opacity))",
            borderWidth: "1px",
            "--tw-border-opacity": "1",
            borderColor: "hsla(209, 20%, 25%, var(--tw-border-opacity))",
            "--tw-shadow": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            padding: "1rem",
            borderRadius: "0.25rem"
        })
          , oe = Object(n.c)("div").withConfig({
            displayName: "EditScheduleModal___StyledDiv5",
            componentId: "sc-wh9db9-7"
        })({
            marginTop: "1.5rem",
            "--tw-bg-opacity": "1",
            backgroundColor: "hsla(209, 18%, 30%, var(--tw-bg-opacity))",
            borderWidth: "1px",
            "--tw-border-opacity": "1",
            borderColor: "hsla(209, 20%, 25%, var(--tw-border-opacity))",
            "--tw-shadow": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            padding: "1rem",
            borderRadius: "0.25rem"
        })
          , ie = Object(n.c)("div").withConfig({
            displayName: "EditScheduleModal___StyledDiv6",
            componentId: "sc-wh9db9-8"
        })({
            marginTop: "1.5rem",
            textAlign: "right"
        })
    },
    306: function(e, t, a) {
        "use strict";
        var n = a(55)
          , r = a.n(n)()((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, '.style-module_2Vp6MaXq {\n        position: relative;\n        display: flex;\n        align-items: center;\n        border-radius: 0.25rem;\n        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n        grid-column: span 3 / span 3\n}@media (min-width: 768px) {.style-module_2Vp6MaXq {\n                grid-column: span 2 / span 2\n        }\n}@media (min-width: 1024px) {.style-module_2Vp6MaXq {\n                grid-column: span 6 / span 6\n        }\n}.style-module_2Vp6MaXq {\n        padding-left: 0.75rem;\n        padding-right: 0.75rem;\n        padding-top: 0.5rem;\n        padding-bottom: 0.5rem\n}@media (min-width: 768px) {.style-module_2Vp6MaXq {\n                padding: 0.75rem\n        }\n}@media (min-width: 1024px) {.style-module_2Vp6MaXq {\n                padding: 1rem\n        }\n}\n\n.style-module_2Vp6MaXq > .style-module_OFB5PMuf {\n        position: absolute;\n        left: 0px;\n        top: 0px;\n        height: 100%;\n        width: 0.25rem;\n        border-top-left-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem\n}\n\n@media (min-width: 640px) {.style-module_2Vp6MaXq > .style-module_OFB5PMuf {\n                display: none\n        }\n}\n\n.style-module_2Vp6MaXq > .style-module_1DtraXMW {\n        display: none;\n        height: 3rem;\n        width: 3rem;\n        flex-shrink: 0;\n        align-items: center;\n        justify-content: center;\n        border-radius: 0.5rem;\n        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n        transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 500ms\n}\n\n@media (min-width: 640px) {.style-module_2Vp6MaXq > .style-module_1DtraXMW {\n                margin-right: 1rem;\n                display: flex\n        }\n}\n\n.style-module_2Vp6MaXq > .style-module_1DtraXMW > svg {\n        margin: auto;\n        height: 1.5rem;\n        width: 1.5rem\n}\n\n.style-module_RcP2_Fvj {\n        display: flex;\n        width: 100%;\n        flex-direction: column\n}\n\n.style-module_RcP2_Fvj .style-module_1AMtO9lt {\n        margin-left: -1rem\n}\n\n@media (min-width: 640px) {.style-module_RcP2_Fvj .style-module_1AMtO9lt {\n                margin-left: 0px\n        }\n}\n\n.style-module_RcP2_Fvj .style-module_1AMtO9lt {\n        width: calc(100% + 2rem)\n    }\n\n@media (min-width: 640px) {\n\n.style-module_RcP2_Fvj .style-module_1AMtO9lt {\n                width: 100%\n        }\n        }\n\n.style-module_RcP2_Fvj > .style-module_1n_DiqmT {\n        min-height: 16rem;\n        flex: 1 1 0%;\n        border-top-left-radius: 0.25rem;\n        border-top-right-radius: 0.25rem;\n        --tw-bg-opacity: 1;\n        background-color: rgba(19, 26, 32, var(--tw-bg-opacity));\n        padding: 0.25rem;\n        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n        font-size: 0.875rem;\n        line-height: 1.25rem\n}\n\n@media (min-width: 640px) {.style-module_RcP2_Fvj > .style-module_1n_DiqmT {\n                padding: 0.5rem\n        }\n}\n\n.style-module_RcP2_Fvj > .style-module_1n_DiqmT #style-module_RcP2_Fvj {\n        height: 100%\n}\n\n.style-module_RcP2_Fvj > .style-module_1n_DiqmT #style-module_RcP2_Fvj::-webkit-scrollbar-track {\n        width: 0.5rem\n}\n\n.style-module_RcP2_Fvj > .style-module_1n_DiqmT #style-module_RcP2_Fvj::-webkit-scrollbar-thumb {\n        --tw-bg-opacity: 1;\n        background-color: hsla(210, 24%, 16%, var(--tw-bg-opacity))\n}\n\n.style-module_RcP2_Fvj .style-module_1qLigd7O {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        z-index: 10;\n        display: flex;\n        height: 100%;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n                user-select: none;\n        align-items: center;\n        padding-left: 0.75rem;\n        padding-right: 0.75rem;\n        transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 100ms\n}\n\n.style-module_RcP2_Fvj .style-module_3TDo--Tn {\n        position: relative;\n        width: 100%;\n        --tw-bg-opacity: 1;\n        background-color: hsla(210, 24%, 16%, var(--tw-bg-opacity));\n        padding-top: 0.5rem;\n        padding-bottom: 0.5rem;\n        padding-left: 2.5rem;\n        padding-right: 1rem;\n        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        --tw-text-opacity: 1;\n        color: hsla(214, 15%, 91%, var(--tw-text-opacity))\n}\n\n@media (min-width: 640px) {.style-module_RcP2_Fvj .style-module_3TDo--Tn {\n                border-bottom-right-radius: 0.25rem;\n                border-bottom-left-radius: 0.25rem\n        }\n}\n\n.style-module_RcP2_Fvj .style-module_3TDo--Tn {\n        outline: 2px solid transparent;\n        outline-offset: 2px\n}\n\n.style-module_RcP2_Fvj .style-module_3TDo--Tn:focus {\n        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0))\n}\n\n.style-module_RcP2_Fvj .style-module_3TDo--Tn.style-module_RMKAHSHT {\n        outline: 2px solid transparent;\n        outline-offset: 2px\n}\n\n.style-module_RcP2_Fvj .style-module_3TDo--Tn:focus-visible {\n        outline: 2px solid transparent;\n        outline-offset: 2px\n}\n\n.style-module_RcP2_Fvj .style-module_3TDo--Tn {\n        border-width: 0px;\n        border-bottom-width: 2px;\n        border-color: transparent;\n        transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 100ms\n}\n\n.style-module_RcP2_Fvj .style-module_3TDo--Tn:focus {\n        --tw-border-opacity: 1;\n        border-color: rgba(6, 182, 212, var(--tw-border-opacity))\n}\n\n.style-module_RcP2_Fvj .style-module_3TDo--Tn:active {\n        --tw-border-opacity: 1;\n        border-color: rgba(6, 182, 212, var(--tw-border-opacity))\n}\n\n.style-module_2XbmHEcn {\n        position: relative;\n        border-radius: 0.25rem;\n        border-bottom-width: 4px;\n        --tw-border-opacity: 1;\n        border-color: hsla(209, 18%, 30%, var(--tw-border-opacity));\n        --tw-bg-opacity: 1;\n        background-color: hsla(209, 14%, 37%, var(--tw-bg-opacity));\n        padding-top: 0.5rem;\n        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow)\n}\n', ""]),
        r.locals = {
            stat_block: "style-module_2Vp6MaXq",
            status_bar: "style-module_OFB5PMuf",
            icon: "style-module_1DtraXMW",
            terminal: "style-module_RcP2_Fvj",
            overflows_container: "style-module_1AMtO9lt",
            container: "style-module_1n_DiqmT",
            command_icon: "style-module_1qLigd7O",
            command_input: "style-module_3TDo--Tn",
            "focus-visible": "style-module_RMKAHSHT",
            chart_container: "style-module_2XbmHEcn"
        },
        t.a = r
    },
    309: function(e, t, a) {
        "use strict";
        var n = a(55)
          , r = a.n(n)()((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, ".style-module_4LBM1DKx {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-radius: 0.25rem;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    font-weight: 600;\n    transition-property: all;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 100ms;\n}.style-module_4LBM1DKx:focus {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n    --tw-ring-opacity: 0.5;\n    --tw-ring-offset-width: 2px;\n    --tw-ring-offset-color: hsl(209, 18%, 30%);\n}.style-module_4LBM1DKx {\n\n    /* Sizing Controls */\n}\n\n.style-module_4LBM1DKx.style-module_2UCZLAAp {\n    height: 2rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    font-weight: 400;\n}\n\n.style-module_4LBM1DKx.style-module_2UCZLAAp:focus {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n}\n\n.style-module_4LBM1DKx.style-module_kWWuou-F {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n}\n\n.style-module_4LBM1DKx.style-module_2RJbSnp6 {\n    background-color: transparent;\n    --tw-text-opacity: 1;\n    color: hsla(216, 33%, 97%, var(--tw-text-opacity));\n}\n\n.style-module_4LBM1DKx.style-module_2RJbSnp6:disabled {\n            background: transparent !important;\n        }\n\n.style-module_4LBM1DKx:disabled {\n    cursor: not-allowed;\n}\n\n.style-module_4LBM1DKx.style-module_3xOG8K0n {\n    height: 3rem;\n    width: 3rem;\n    padding: 0px;\n}\n\n.style-module_4LBM1DKx.style-module_3xOG8K0n.style-module_2UCZLAAp {\n    height: 2rem;\n    width: 2rem;\n}\n\n.style-module_3kBDV_wo {\n    --tw-bg-opacity: 1;\n    background-color: rgba(37, 99, 235, var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: rgba(239, 246, 255, var(--tw-text-opacity));\n}\n\n.style-module_3kBDV_wo:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.style-module_3kBDV_wo:focus {\n    --tw-ring-color: rgba(96, 165, 250, var(--tw-ring-opacity));\n    --tw-ring-opacity: 0.75;\n}\n\n.style-module_3kBDV_wo:active {\n    --tw-bg-opacity: 1;\n    background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.style-module_3kBDV_wo.style-module_2RJbSnp6:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgba(37, 99, 235, var(--tw-bg-opacity));\n}\n\n.style-module_3kBDV_wo.style-module_2RJbSnp6:active {\n    --tw-bg-opacity: 1;\n    background-color: rgba(37, 99, 235, var(--tw-bg-opacity));\n}\n\n.style-module_3kBDV_wo:disabled {\n    background-color: rgba(59, 130, 246, 0.75);\n    color: rgba(191, 219, 254, 0.75);\n}\n\n.style-module_Yp7-2Fw- {\n    --tw-bg-opacity: 1;\n    background-color: hsla(211, 12%, 43%, var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsla(216, 33%, 97%, var(--tw-text-opacity));\n}\n\n.style-module_Yp7-2Fw-:hover {\n    --tw-bg-opacity: 1;\n    background-color: hsla(211, 10%, 53%, var(--tw-bg-opacity));\n}\n\n.style-module_Yp7-2Fw-:focus {\n    --tw-ring-color: hsla(211, 13%, 65%, var(--tw-ring-opacity));\n    --tw-ring-opacity: 0.5;\n}\n\n.style-module_Yp7-2Fw-:active {\n    --tw-bg-opacity: 1;\n    background-color: hsla(211, 10%, 53%, var(--tw-bg-opacity));\n}\n\n.style-module_Yp7-2Fw-.style-module_2RJbSnp6:hover {\n    --tw-bg-opacity: 1;\n    background-color: hsla(211, 12%, 43%, var(--tw-bg-opacity));\n}\n\n.style-module_Yp7-2Fw-.style-module_2RJbSnp6:active {\n    --tw-bg-opacity: 1;\n    background-color: hsla(211, 12%, 43%, var(--tw-bg-opacity));\n}\n\n.style-module_Yp7-2Fw-:disabled {\n    background-color: hsla(211, 12%, 43%, 0.75);\n    color: hsla(210, 16%, 82%, 0.75);\n}\n\n.style-module_2vOYXZWm {\n    --tw-bg-opacity: 1;\n    background-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsla(216, 33%, 97%, var(--tw-text-opacity));\n}\n\n.style-module_2vOYXZWm:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n\n.style-module_2vOYXZWm:focus {\n    --tw-ring-color: rgba(248, 113, 113, var(--tw-ring-opacity));\n    --tw-ring-opacity: 0.75;\n}\n\n.style-module_2vOYXZWm:active {\n    --tw-bg-opacity: 1;\n    background-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n\n.style-module_2vOYXZWm.style-module_2RJbSnp6:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n\n.style-module_2vOYXZWm.style-module_2RJbSnp6:active {\n    --tw-bg-opacity: 1;\n    background-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n\n.style-module_2vOYXZWm:disabled {\n    background-color: rgba(220, 38, 38, 0.75);\n    color: rgba(254, 242, 242, 0.75);\n}\n", ""]),
        r.locals = {
            button: "style-module_4LBM1DKx",
            small: "style-module_2UCZLAAp",
            large: "style-module_kWWuou-F",
            secondary: "style-module_2RJbSnp6",
            square: "style-module_3xOG8K0n",
            primary: "style-module_3kBDV_wo",
            text: "style-module_Yp7-2Fw-",
            danger: "style-module_2vOYXZWm"
        },
        t.a = r
    },
    310: function(e, t, a) {
        "use strict";
        var n = a(55)
          , r = a.n(n)()((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, '.style-module_3qQYBFRK {\n\n    display: flex;\n\n    min-height: 100%;\n\n    align-items: center;\n\n    justify-content: center;\n\n    padding: 1rem;\n\n    text-align: center\n}\n\n.style-module_1RnhIT0w {\n\n    position: relative;\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    width: 100%;\n\n    max-width: 36rem;\n\n    border-radius: 0.25rem;\n\n    --tw-bg-opacity: 1;\n\n    background-color: hsla(209, 14%, 37%, var(--tw-bg-opacity));\n\n    text-align: left;\n\n    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n\n    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n\n    --tw-ring-color: hsla(209, 20%, 25%, var(--tw-ring-opacity));\n\n    --tw-ring-opacity: 0.8\n}\n\n.style-module_3s1tHRIx {\n\n    margin-bottom: 0.5rem;\n\n    padding-right: 1rem;\n\n    font-family: "IBM Plex Sans", "Roboto", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n\n    font-size: 1.25rem;\n\n    line-height: 1.75rem;\n\n    font-weight: 500;\n\n    --tw-text-opacity: 1;\n\n    color: hsla(216, 33%, 97%, var(--tw-text-opacity))\n}\n\n.style-module_3W9FaI2A {\n\n    height: 1.25rem;\n\n    width: 1.25rem;\n\n    transition-property: transform;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms\n}\n\n.style-module_3brcmFXP:hover .style-module_3W9FaI2A {\n\n    --tw-rotate: 90deg;\n\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n\n.style-module_fPZ0j71s {\n\n    margin-right: 1rem;\n\n    display: flex;\n\n    height: 2.5rem;\n\n    width: 2.5rem;\n\n    align-items: center;\n\n    justify-content: center;\n\n    border-radius: 9999px\n}\n\n.style-module_fPZ0j71s.style-module_29VBSqzb {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(254, 242, 242, var(--tw-text-opacity))\n}\n\n.style-module_fPZ0j71s.style-module_MiyRox1U {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(202, 138, 4, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(254, 252, 232, var(--tw-text-opacity))\n}\n\n.style-module_fPZ0j71s.style-module_1cEEnDuK {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(22, 163, 74, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(240, 253, 244, var(--tw-text-opacity))\n}\n\n.style-module_fPZ0j71s.style-module_3mL_JU2X {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(239, 246, 255, var(--tw-text-opacity))\n}\n', ""]),
        r.locals = {
            container: "style-module_3qQYBFRK",
            panel: "style-module_1RnhIT0w",
            title: "style-module_3s1tHRIx",
            close_icon: "style-module_3W9FaI2A",
            group: "style-module_3brcmFXP",
            dialog_icon: "style-module_fPZ0j71s",
            danger: "style-module_29VBSqzb",
            warning: "style-module_MiyRox1U",
            success: "style-module_1cEEnDuK",
            info: "style-module_3mL_JU2X"
        },
        t.a = r
    },
    315: function(e, t, a) {
        "use strict";
        var n = a(55)
          , r = a.n(n)()((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, ".style-module_3Y7xosru {\n\nmargin-bottom: 1rem;\n\ndisplay: grid;\n\nwidth: 100%;\n\ngrid-template-columns: repeat(2, minmax(0, 1fr));\n\ngrid-gap: 1rem;\n\ngap: 1rem\n}\n\n@media (min-width: 640px) {\n\n.style-module_3Y7xosru {\n\ngrid-template-columns: repeat(3, minmax(0, 1fr))\n}\n}\n\n.style-module_3Y7xosru button {\n\nwidth: 100%\n}\n\n.style-module_3Y7xosru button:first-child {\n\ngrid-column: span 2 / span 2\n}\n\n@media (min-width: 640px) {\n\n.style-module_3Y7xosru button:first-child {\n\ngrid-column: span 1 / span 1\n}\n}\n\n@media (min-width: 768px) {\n\n.style-module_3Y7xosru {\n\nmargin-bottom: 0px;\n\ndisplay: flex;\n\nflex: 1 1 0%;\n\njustify-content: flex-end\n}\n\n        .style-module_3Y7xosru button {\n\nwidth: auto\n}\n    }\n\n.style-module_1WqkLT9X {\n\nmargin-bottom: 1px;\n\ndisplay: flex;\n\ncursor: pointer;\n\nalign-items: center;\n\nborder-radius: 0.125rem;\n\n--tw-bg-opacity: 1;\n\nbackground-color: hsla(209, 18%, 30%, var(--tw-bg-opacity));\n\nfont-size: 0.875rem;\n\nline-height: 1.25rem;\n\n-webkit-text-decoration-line: none;\n\n        text-decoration-line: none\n}\n\n.style-module_1WqkLT9X:hover {\n\n--tw-bg-opacity: 1;\n\nbackground-color: hsla(209, 14%, 37%, var(--tw-bg-opacity));\n\n--tw-text-opacity: 1;\n\ncolor: hsla(214, 15%, 91%, var(--tw-text-opacity))\n}\n\n.style-module_1WqkLT9X > .style-module_35MPv1CD {\n\ndisplay: flex;\n\nflex: 1 1 0%;\n\nalign-items: center;\n\noverflow: hidden;\n\ntext-overflow: ellipsis;\n\nwhite-space: nowrap;\n\npadding-left: 1rem;\n\npadding-right: 1rem;\n\npadding-top: 0.5rem;\n\npadding-bottom: 0.5rem;\n\n--tw-text-opacity: 1;\n\ncolor: hsla(211, 13%, 65%, var(--tw-text-opacity));\n\n-webkit-text-decoration-line: none;\n\n        text-decoration-line: none\n}\n\n.style-module_1WqkLT9X > .style-module_35MPv1CD:not(a) {\n\ncursor: default\n}\n", ""]),
        r.locals = {
            manager_actions: "style-module_3Y7xosru",
            file_row: "style-module_1WqkLT9X",
            details: "style-module_35MPv1CD"
        },
        t.a = r
    },
    328: function(e, t, a) {
        "use strict";
        var n = a(55)
          , r = a.n(n)()((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, ".styles-module_-p1ETbQL {\n        height: 1rem;\n        width: 1rem;\n        border-radius: 0.125rem;\n        --tw-border-opacity: 1;\n        border-color: hsla(211, 12%, 43%, var(--tw-border-opacity));\n        --tw-bg-opacity: 1;\n        background-color: hsla(209, 14%, 37%, var(--tw-bg-opacity));\n        --tw-text-opacity: 1;\n        color: rgba(59, 130, 246, var(--tw-text-opacity))\n}\n\n.styles-module_-p1ETbQL:focus, .styles-module_-p1ETbQL:active {\n        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n        --tw-ring-opacity: 1;\n        --tw-ring-color: rgba(59, 130, 246, var(--tw-ring-opacity));\n        --tw-ring-offset-width: 2px;\n        --tw-ring-offset-color: hsl(209, 18%, 30%)\n}\n\n.styles-module_-p1ETbQL.styles-module_3c15eikK:checked {\n        border-width: 1px;\n        --tw-border-opacity: 1;\n        border-color: rgba(59, 130, 246, var(--tw-border-opacity));\n        color: rgba(59, 130, 246, 0.5);\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E\")\n}\n\n.styles-module_S9h-xMSg {\n        transition-property: box-shadow;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 75ms;\n        width: 100%;\n        border-radius: 0.25rem;\n        border-width: 0px;\n        --tw-bg-opacity: 1;\n        background-color: hsla(209, 20%, 25%, var(--tw-bg-opacity));\n        padding-left: 1rem;\n        padding-right: 1rem;\n        padding-top: 0.5rem;\n        padding-bottom: 0.5rem;\n        outline: 2px solid transparent;\n        outline-offset: 2px\n}\n\n.styles-module_S9h-xMSg:focus, .styles-module_S9h-xMSg:active {\n        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n        --tw-ring-color: rgba(147, 197, 253, var(--tw-ring-opacity));\n        --tw-ring-opacity: 0.75\n}\n\n.styles-module_S9h-xMSg.styles-module_AWe-iPIe {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem\n}\n", ""]),
        r.locals = {
            checkbox_input: "styles-module_-p1ETbQL",
            indeterminate: "styles-module_3c15eikK",
            text_input: "styles-module_S9h-xMSg",
            loose: "styles-module_AWe-iPIe"
        },
        t.a = r
    },
    329: function(e, t, a) {
        "use strict";
        var n = a(55)
          , r = a.n(n)()((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, ".style-module_uTvTpAli {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    display: flex\n}\n\n.style-module_uTvTpAli > :not([hidden]) ~ :not([hidden]) {\n\n    --tw-space-x-reverse: 0;\n\n    margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n\n    margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))\n}\n\n.style-module_uTvTpAli {\n\n    --tw-text-opacity: 1;\n\n    color: hsla(211, 10%, 53%, var(--tw-text-opacity));\n\n    transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms\n}\n\n.style-module_uTvTpAli svg {\n\n    height: 1.25rem;\n\n    width: auto;\n\n    cursor: pointer;\n\n    padding-left: 0.25rem;\n\n    padding-right: 0.25rem;\n\n    padding-top: 1px;\n\n    padding-bottom: 1px\n}\n\n.style-module_uTvTpAli svg:hover {\n\n    --tw-text-opacity: 1;\n\n    color: hsla(216, 33%, 97%, var(--tw-text-opacity))\n}\n\n.style-module_2WgDXX0j {\n\n    margin-top: 0.25rem;\n\n    word-wrap: break-word;\n\n    padding-right: 1rem;\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem;\n\n    overflow: hidden;\n\n    display: -webkit-box;\n\n    -webkit-box-orient: vertical;\n\n    -webkit-line-clamp: 2\n}\n\n.style-module_2WgDXX0j strong {\n\n    word-break: break-all;\n\n    font-weight: 600;\n\n    --tw-text-opacity: 1;\n\n    color: hsla(216, 33%, 97%, var(--tw-text-opacity))\n}\n", ""]),
        r.locals = {
            icons: "style-module_uTvTpAli",
            description: "style-module_2WgDXX0j"
        },
        t.a = r
    }
}]);
