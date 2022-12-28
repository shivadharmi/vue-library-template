import { defineComponent as c, ref as s, openBlock as p, createElementBlock as a, createElementVNode as l, toDisplayString as m } from "vue";
const i = c({
  name: "Image",
  props: {
    msg: {
      type: String,
      default: "Hello"
    }
  },
  setup() {
    return {
      count: s(0)
    };
  }
}), u = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, r] of o)
    t[n] = r;
  return t;
}, _ = { class: "default-import" };
function f(e, o, t, n, r, d) {
  return p(), a("div", _, [
    l("h1", null, m(e.msg), 1)
  ]);
}
const $ = /* @__PURE__ */ u(i, [["render", f]]);
export {
  $ as Image
};
