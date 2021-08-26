<template>
  <div>
    <input
      :type="inputType"
      :placeholder="inputPlaceholder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', $event.target.value), $emit('adding-value')
      "
      required
    />
    <p class="error-message">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'NonValidatingInput',
  data() {
    return {};
  },
  props: {
    inputType: String,
    inputPlaceholder: String,
    modelValue: String,
    error: String,
  },
  emits: ['update:modelValue', 'adding-value'],
};
</script>

<style scoped>
input {
  border-radius: 0;
  border: none;
  box-shadow: 0 0 0 0.25px black;
  padding: 0.25rem 0.5rem;
  font-family: inherit;
  width: 100%;
  max-width: 150px;
  /* font-size: 1rem; */
  outline: none;
  --shadow: var(--color-text);
}

input.error {
  --shadow: indianred;
  box-shadow: 0 0 0 1px var(--shadow);
}

input:valid {
  --shadow: darkseagreen;
  box-shadow: 0 0 0 1px var(--shadow);
}

input:focus,
input.error:focus,
input:valid:focus {
  box-shadow: 0 0 0 1px var(--shadow), 0 0 4px 0 var(--shadow);
}
</style>
