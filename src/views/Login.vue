<template>
  <div class="content-wrapper">
    <div class="form-wrapper">
      <div><h2>Log In</h2></div>
      <form ref="form" @submit.prevent="submitEvent" novalidate>
        <InputComponent
          v-model="form.email"
          inputType="email"
          inputPlaceholder="Enter your email"
        />

        <InputComponent
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
import InputComponent from '../components/InputComponent.vue';
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
  components: { InputComponent, Button },
  methods: {
    submitEvent() {
      this.$refs.form.checkValidity();
      // if (this.form.email.validity) console.log('Submitted');
    },
  },
};
</script>

<style scoped></style>
