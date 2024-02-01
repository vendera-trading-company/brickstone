import { defineComponent as e, openBlock as n, createElementBlock as o, toDisplayString as i } from "vue";
const s = { class: "inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 px-4 py-2 rounded-md text-lg font-semibold leading-7" }, l = /* @__PURE__ */ e({
  __name: "Text",
  props: {
    text: { type: String }
  },
  setup(t) {
    return (r, c) => (n(), o("button", s, i(t.text), 1));
  }
});
export {
  l as ButtonText
};
