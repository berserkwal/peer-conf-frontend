<template>
  <header>
    <router-link class="logo" to="/">
      <div class="logo-wrapper">
        <img src="../assets/logo.png" alt />
      </div>
      <span class="logo-text">PeerConf</span>
    </router-link>
    <div
      class="right-side-icons"
      v-if="
        $route.name !== 'Log In' &&
          $route.name !== 'Get Started' &&
          $route.name !== 'Leave Meeting' &&
          $route.name !== 'Join Meeting'
      "
    >
      <div class="buttons" v-if="!isLoggedIn">
        <router-link tabindex="-1" to="/login"
          ><Button class="secondary-button" text="Log in"
        /></router-link>
        <router-link tabindex="-1" to="/get-started"
          ><Button class="primary-button" text="Sign up"
        /></router-link>
      </div>
      <div class="profile-icon" v-else>
        <img src="https://randomuser.me/api/portraits/men/4.jpg" alt />
      </div>
    </div>
  </header>
</template>

<script>
import Button from './Button.vue';
export default {
  components: { Button },
  name: 'Header',
  props: {
    isLoggedIn: Boolean,
  },
};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.5rem 2rem;
}

.logo {
  user-select: none;
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
  font-size: 1.2rem;
  text-decoration: none;
  color: inherit;
  padding: 0.5rem;
}

.logo:hover {
  text-decoration: underline;
}

.logo-wrapper {
  height: 30px;
}
.logo-wrapper img {
  display: block;
  height: 100%;
}

.buttons {
  display: flex;
  gap: 1.5rem;
}
.profile-icon {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-icon img {
  width: 100%;
}

@media screen and (max-width: 500px) {
  header {
    padding: 0.5rem 1rem;
  }
}

@media screen and (max-width: 370px) {
  .logo-text {
    display: none;
  }
}
</style>
