import { defineComponent as s, ref as c, openBlock as p, createElementBlock as a, toDisplayString as m } from "vue";
const i = s({
  name: "Image",
  props: {
    msg: {
      type: String,
      default: "Hello"
    }
  },
  setup(t) {
    return {
      count: c(0),
      msg: t.msg
    };
  }
}), _ = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, r] of e)
    o[n] = r;
  return o;
}, f = { class: "default-import" };
function l(t, e, o, n, r, u) {
  return p(), a("div", f, m(t.msg), 1);
}
const d = /* @__PURE__ */ _(i, [["render", l]]);
export {
  d as Image
};
