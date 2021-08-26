<template>
  <div>
    <input
      :type="inputType"
      :placeholder="inputPlaceholder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', $event.target.value), changeEvent($event)
      "
      @invalid="showMessage"
      :class="{ error: hasError }"
      required
      :minlength="inputType === 'password' ? '8' : null"
    />
    <p class="error-message" v-if="hasError">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ValidatingInput',
  data() {
    return {
      hasError: false,
      error: '',
    };
  },
  props: {
    inputType: String,
    inputPlaceholder: String,
    modelValue: String,
  },
  emits: ['update:modelValue'],
  methods: {
    showMessage(e) {
      if (!e.target.validity.valid) {
        this.hasError = true;
        this.error = e.target.validationMessage;
      }
    },
    changeEvent(e) {
      this.error = '';
      if (!e.target.validity.valid) {
        this.hasError = true;
      } else {
        this.hasError = false;
      }
    },
  },
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
  font-size: 1em;
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
