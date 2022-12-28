import { defineComponent as s, ref as c, openBlock as p, createElementBlock as a, createElementVNode as m, toDisplayString as l } from "vue";
const i = s({
  name: "Image",
  props: {
    msg: {
      type: String,
      default: "Hello"
    }
  },
  setup(e) {
    return {
      count: c(0),
      msg: e.msg
    };
  }
}), u = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t)
    o[n] = r;
  return o;
}, _ = { class: "default-import" };
function f(e, t, o, n, r, d) {
  return p(), a("div", _, [
    m("h1", null, l(e.msg), 1)
  ]);
}
const $ = /* @__PURE__ */ u(i, [["render", f]]);
export {
  $ as Image
};
