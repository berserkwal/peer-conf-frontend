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
  name: 'InputComponent',
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
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
}

input:focus {
  box-shadow: 0 0 0 2px var(--color-text);
}

input.error {
  box-shadow: 0 0 0 2px crimson;
}

input:valid {
  box-shadow: 0 0 0 2px darkgreen;
}
</style>
