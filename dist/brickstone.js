import { defineComponent as s, openBlock as l, createElementBlock as a, normalizeClass as n, createElementVNode as d, renderSlot as r } from "vue";
const c = ["disabled"], u = {
  methods: {
    onClick: function() {
      this.disabled || this.$emit("onclick");
    }
  }
}, x = /* @__PURE__ */ s({
  ...u,
  __name: "Solid",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["onclick"],
  setup(e) {
    return (t, i) => (l(), a("button", {
      disabled: e.disabled,
      onClick: i[0] || (i[0] = //@ts-ignore
      (...o) => t.onClick && t.onClick(...o)),
      class: n({
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-text bg-primary-500": e.type == "primary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-text bg-secondary-500": e.type == "secondary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black bg-white": e.type == "neutral",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white bg-black": e.type == "invert"
      })
    }, [
      d("p", {
        class: n({
          "px-4 py-2 text-xs font-semibold leading-4": e.size == "xs",
          "px-4 py-2 text-sm font-semibold leading-4": e.size == "sm",
          "px-4 py-2 text-base font-semibold leading-7": e.size == "md",
          "px-4 py-2 text-lg font-semibold leading-7": e.size == "lg"
        })
      }, [
        r(t.$slots, "default")
      ], 2)
    ], 10, c));
  }
}), b = ["disabled"], y = {
  methods: {
    onClick: function() {
      this.disabled || this.$emit("onclick");
    }
  }
}, h = /* @__PURE__ */ s({
  ...y,
  __name: "Outline",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["onclick"],
  setup(e) {
    return (t, i) => (l(), a("button", {
      disabled: e.disabled,
      onClick: i[0] || (i[0] = //@ts-ignore
      (...o) => t.onClick && t.onClick(...o)),
      class: n({
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-500 border-primary-500 bg-transparent border-2": e.type == "primary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-500 border-secondary-500 bg-transparent border-2": e.type == "secondary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white border-white bg-transparent border-2": e.type == "neutral",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black border-black bg-transparent border-2": e.type == "invert"
      })
    }, [
      d("p", {
        class: n({
          "px-4 py-2 text-xs font-semibold leading-4": e.size == "xs",
          "px-4 py-2 text-sm font-semibold leading-4": e.size == "sm",
          "px-4 py-2 text-base font-semibold leading-7": e.size == "md",
          "px-4 py-2 text-lg font-semibold leading-7": e.size == "lg"
        })
      }, [
        r(t.$slots, "default")
      ], 2)
    ], 10, b));
  }
}), f = ["disabled"], p = {
  methods: {
    onClick: function() {
      this.disabled || this.$emit("onclick");
    }
  }
}, v = /* @__PURE__ */ s({
  ...p,
  __name: "Ghost",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["onclick"],
  setup(e) {
    return (t, i) => (l(), a("button", {
      disabled: e.disabled,
      onClick: i[0] || (i[0] = //@ts-ignore
      (...o) => t.onClick && t.onClick(...o)),
      class: n({
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-500 bg-transparent": e.type == "primary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-500 bg-transparent": e.type == "secondary",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white bg-transparent": e.type == "neutral",
        "rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black bg-transparent": e.type == "invert"
      })
    }, [
      d("p", {
        class: n({
          "px-4 py-2 text-xs font-semibold leading-4": e.size == "xs",
          "px-4 py-2 text-sm font-semibold leading-4": e.size == "sm",
          "px-4 py-2 text-base font-semibold leading-7": e.size == "md",
          "px-4 py-2 text-lg font-semibold leading-7": e.size == "lg"
        })
      }, [
        r(t.$slots, "default")
      ], 2)
    ], 10, f));
  }
});
export {
  v as ButtonGhost,
  h as ButtonOutline,
  x as ButtonSolid
};
