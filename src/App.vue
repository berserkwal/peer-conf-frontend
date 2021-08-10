<template>
  <Header :isLoggedIn="isLoggedIn" />
  <router-view />
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
}

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4a6c8f;
  color: var(--color-text);
}

router-view {
  display: grid;
}

.content-wrapper {
  widows: 100%;
  display: grid;
  place-items: center;
}

.form-wrapper {
  margin-top: 6rem;
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

.primary-button {
  background-color: var(--color-accent);
  color: white;
}
.secondary-button {
  border-color: var(--color-text);
  background-color: transparent;
  color: var(--color-text);
}

.primary-button:hover {
  background-color: var(--color-accent-off);
}

.secondary-button:hover {
  background-color: var(--color-accent-transparent);
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
</style>
