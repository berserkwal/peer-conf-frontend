<template>
  <Header :isLoggedIn="isLoggedIn" v-if="this.$route.name !== 'Meeting'" />
  <router-view :isLoggedIn="isLoggedIn" />
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  components: {
    Header,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

:root {
  --color-accent: #d9594c;
  --color-accent-transparent: #d95a4c1f;
  --color-accent-off: #ce5244;
  --color-text: #322841;
  --ff: 'Noto Sans JP', sans-serif;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--ff);
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  text-align: center;
  color: #4a6c8f;
  color: var(--color-text);
}

router-view {
  display: grid;
}

.content-wrapper {
  margin-top: 4rem;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
}

.form-wrapper {
  margin-top: 2rem;
  /* border-radius: 8px; */
  box-shadow: 0 0 0 0.25px var(--color-text);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-wrapper:focus-within {
  box-shadow: 0 0 0 1px var(--color-accent);
}

form {
  width: 100%;
  max-width: 350px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 1rem;
}

.error-message {
  color: crimson;
  font-size: 0.8rem;
  text-align: left;
}

button {
  width: max-content;
  cursor: pointer;
  font-size: 1em;
  font-family: inherit;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
}

.small-text {
  font-size: 0.8em;
}

.primary-button {
  background-color: var(--color-accent);
  color: white;
}
.secondary-button {
  border-color: var(--color-text);
  background-color: transparent;
  color: var(--color-text);
}

.primary-button:hover,
.primary-button:focus {
  background-color: var(--color-accent-off);
  box-shadow: 0 0 4px var(--color-accent);
}

.secondary-button:hover,
.secondary-button:focus {
  background-color: var(--color-accent-transparent);
  border-color: transparent;
}

a {
  color: var(--color-accent);
}

a:hover {
  text-decoration: none;
}

a:focus {
  outline: none;
  border-radius: 4px;
  box-shadow: 0 0 0 2px var(--color-text);
}

button:focus {
  outline: none;
}

@media screen and (max-width: 400px) {
  .form-wrapper {
    box-shadow: none;
  }

  .form-wrapper:focus-within {
    box-shadow: none;
  }
}
</style>
