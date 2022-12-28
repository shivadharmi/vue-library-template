<template>
  <div class="default-import">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Image',
  props: {
    msg: {
      type: String,
      default: 'Hello'
    }
  },
  setup(props) {
    const count = ref(0)
    return {
      count,
      msg:props.msg
    }
  }
})
</script>
