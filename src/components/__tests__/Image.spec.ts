import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Image from "../Image.vue";

describe("Image", () => {
  it("renders properly", () => {
    const wrapper = mount(Image, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
