<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
};
</script>

<style scoped>
button {
  border-radius: 50%;
  padding: 12px;
  color: white;
}
</style>
