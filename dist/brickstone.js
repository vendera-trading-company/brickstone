import { defineComponent as o, openBlock as l, createElementBlock as r, normalizeClass as s, renderSlot as a } from "vue";
const d = {
  methods: {
    onClick: function() {
      this.$emit("onclick");
    }
  }
}, p = /* @__PURE__ */ o({
  ...d,
  __name: "Solid",
  props: {
    type: { type: String, default: "primary" }
  },
  emits: ["onclick"],
  setup(t) {
    return (e, n) => (l(), r("button", {
      onClick: n[0] || (n[0] = //@ts-ignore
      (...i) => e.onClick && e.onClick(...i)),
      class: s({
        "inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 px-4 py-2 rounded-xl text-lg font-semibold leading-7 text-primary-text bg-primary-500": t.type == "primary",
        "inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 px-4 py-2 rounded-xl text-lg font-semibold leading-7 text-secondary-text bg-secondary-500": t.type == "secondary"
      })
    }, [
      a(e.$slots, "default")
    ], 2));
  }
});
export {
  p as ButtonSolid
};
