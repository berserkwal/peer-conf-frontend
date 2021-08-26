<template>
  <div class="content-wrapper">
    <div class="form-wrapper">
      <div><h2>Sign Up</h2></div>
      <form ref="form" @submit.prevent="submitEvent" novalidate>
        <ValidatingInput
          v-model="form.name"
          inputType="text"
          inputPlaceholder="Enter your name"
        />
        <ValidatingInput
          v-model="form.email"
          inputType="email"
          inputPlaceholder="Enter your email"
        />

        <ValidatingInput
          ref="email"
          v-model="form.password"
          inputType="password"
          inputPlaceholder="Enter your password"
        />

        <p v-if="serverError" :class="['error-message']">
          {{ serverError }}
        </p>
        <div>
          <Button
            style="margin-bottom: .5rem;"
            tabindex="0"
            class="primary-button"
            text="Submit"
          />
          <div>
            Already have an account?
            <router-link to="/login">Log In</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ValidatingInput from '../components/ValidatingInput.vue';
import Button from '../components/Button.vue';
export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      serverError: '',
    };
  },
  components: { ValidatingInput, Button },
  methods: {
    submitEvent() {
      if (this.$refs.form.checkValidity()) {
        return;
      }
      // ToDo: async stuff
    },
  },
};
</script>

<style scoped></style>
