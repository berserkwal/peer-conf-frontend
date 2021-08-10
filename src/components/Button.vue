<template>
  <button tabindex="-1">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
};
</script>
