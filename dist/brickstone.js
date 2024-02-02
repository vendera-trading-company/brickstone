import { defineComponent as s, openBlock as o, createElementBlock as a, normalizeClass as i, createElementVNode as l, renderSlot as d } from "vue";
const c = ["disabled"], u = {
  methods: {
    onClick: function() {
      this.disabled || this.$emit("onclick");
    }
  }
}, g = /* @__PURE__ */ s({
  ...u,
  __name: "Solid",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["onclick"],
  setup(e) {
    return (t, n) => (o(), a("button", {
      disabled: e.disabled,
      onClick: n[0] || (n[0] = //@ts-ignore
      (...r) => t.onClick && t.onClick(...r)),
      class: i({
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-text bg-primary-500": e.type == "primary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-text bg-secondary-500": e.type == "secondary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black bg-white": e.type == "neutral",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white bg-black": e.type == "invert"
      })
    }, [
      l("p", {
        class: i({
          "px-4 py-2 text-xs font-semibold leading-4": e.size == "xs",
          "px-4 py-2 text-sm font-semibold leading-4": e.size == "sm",
          "px-4 py-2 text-base font-semibold leading-7": e.size == "md",
          "px-4 py-2 text-lg font-semibold leading-7": e.size == "lg"
        })
      }, [
        d(t.$slots, "default")
      ], 2)
    ], 10, c));
  }
}), y = ["disabled"], b = {
  methods: {
    onClick: function() {
      this.disabled || this.$emit("onclick");
    }
  }
}, k = /* @__PURE__ */ s({
  ...b,
  __name: "Outline",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["onclick"],
  setup(e) {
    return (t, n) => (o(), a("button", {
      disabled: e.disabled,
      onClick: n[0] || (n[0] = //@ts-ignore
      (...r) => t.onClick && t.onClick(...r)),
      class: i({
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-500 border-primary-500 bg-transparent border-2": e.type == "primary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-500 border-secondary-500 bg-transparent border-2": e.type == "secondary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white border-white bg-transparent border-2": e.type == "neutral",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black border-black bg-transparent border-2": e.type == "invert"
      })
    }, [
      l("p", {
        class: i({
          "px-4 py-2 text-xs font-semibold leading-4": e.size == "xs",
          "px-4 py-2 text-sm font-semibold leading-4": e.size == "sm",
          "px-4 py-2 text-base font-semibold leading-7": e.size == "md",
          "px-4 py-2 text-lg font-semibold leading-7": e.size == "lg"
        })
      }, [
        d(t.$slots, "default")
      ], 2)
    ], 10, y));
  }
}), f = ["disabled"], p = {
  methods: {
    onClick: function() {
      this.disabled || this.$emit("onclick");
    }
  }
}, z = /* @__PURE__ */ s({
  ...p,
  __name: "Ghost",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["onclick"],
  setup(e) {
    return (t, n) => (o(), a("button", {
      disabled: e.disabled,
      onClick: n[0] || (n[0] = //@ts-ignore
      (...r) => t.onClick && t.onClick(...r)),
      class: i({
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-500 bg-transparent": e.type == "primary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-500 bg-transparent": e.type == "secondary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white bg-transparent": e.type == "neutral",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black bg-transparent": e.type == "invert"
      })
    }, [
      l("p", {
        class: i({
          "px-4 py-2 text-xs font-semibold leading-4": e.size == "xs",
          "px-4 py-2 text-sm font-semibold leading-4": e.size == "sm",
          "px-4 py-2 text-base font-semibold leading-7": e.size == "md",
          "px-4 py-2 text-lg font-semibold leading-7": e.size == "lg"
        })
      }, [
        d(t.$slots, "default")
      ], 2)
    ], 10, f));
  }
}), x = ["href", "disabled"], j = /* @__PURE__ */ s({
  __name: "Solid",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: !1 },
    href: { type: String }
  },
  emits: ["onclick"],
  setup(e) {
    return (t, n) => (o(), a("a", {
      href: e.href,
      disabled: e.disabled,
      class: i({
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-text bg-primary-500": e.type == "primary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-text bg-secondary-500": e.type == "secondary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black bg-white": e.type == "neutral",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white bg-black": e.type == "invert"
      })
    }, [
      l("p", {
        class: i({
          "px-4 py-2 text-xs font-semibold leading-4": e.size == "xs",
          "px-4 py-2 text-sm font-semibold leading-4": e.size == "sm",
          "px-4 py-2 text-base font-semibold leading-7": e.size == "md",
          "px-4 py-2 text-lg font-semibold leading-7": e.size == "lg"
        })
      }, [
        d(t.$slots, "default")
      ], 2)
    ], 10, x));
  }
}), m = ["href", "disabled"], $ = /* @__PURE__ */ s({
  __name: "Outline",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: !1 },
    href: { type: String }
  },
  setup(e) {
    return (t, n) => (o(), a("a", {
      href: e.href,
      disabled: e.disabled,
      class: i({
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-500 border-primary-500 bg-transparent border-2": e.type == "primary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-500 border-secondary-500 bg-transparent border-2": e.type == "secondary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white border-white bg-transparent border-2": e.type == "neutral",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black border-black bg-transparent border-2": e.type == "invert"
      })
    }, [
      l("p", {
        class: i({
          "px-4 py-2 text-xs font-semibold leading-4": e.size == "xs",
          "px-4 py-2 text-sm font-semibold leading-4": e.size == "sm",
          "px-4 py-2 text-base font-semibold leading-7": e.size == "md",
          "px-4 py-2 text-lg font-semibold leading-7": e.size == "lg"
        })
      }, [
        d(t.$slots, "default")
      ], 2)
    ], 10, m));
  }
}), h = ["href", "disabled"], S = /* @__PURE__ */ s({
  __name: "Ghost",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: !1 },
    href: { type: String }
  },
  setup(e) {
    return (t, n) => (o(), a("a", {
      href: e.href,
      disabled: e.disabled,
      class: i({
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-500 bg-transparent": e.type == "primary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-500 bg-transparent": e.type == "secondary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white bg-transparent": e.type == "neutral",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black bg-transparent": e.type == "invert"
      })
    }, [
      l("p", {
        class: i({
          "px-4 py-2 text-xs font-semibold leading-4": e.size == "xs",
          "px-4 py-2 text-sm font-semibold leading-4": e.size == "sm",
          "px-4 py-2 text-base font-semibold leading-7": e.size == "md",
          "px-4 py-2 text-lg font-semibold leading-7": e.size == "lg"
        })
      }, [
        d(t.$slots, "default")
      ], 2)
    ], 10, h));
  }
});
export {
  z as ButtonGhost,
  k as ButtonOutline,
  g as ButtonSolid,
  S as LinkGhost,
  $ as LinkOutline,
  j as LinkSolid
};
