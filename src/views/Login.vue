<template>
  <div class="content-wrapper">
    <div class="form-wrapper">
      <div><h2>Log In</h2></div>
      <form ref="form" @submit.prevent="submitEvent" novalidate>
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

        <p v-if="errors.server" :class="['error-message']">
          {{ errors.server }}
        </p>
        <div>
          <Button tabindex="0" class="primary-button" text="Log In" />
          <div>
            Don't have an account?
            <router-link to="/get-started">Sign Up</router-link>
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
        email: '',
        password: '',
      },
      errors: {
        email: '',
        password: '',
        server: '',
      },
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
