<template>
  <div class="default-import">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: "Image",
  props: {
    msg: {
      type: String,
      default: "Hello",
    },
  },
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
});
</script>
