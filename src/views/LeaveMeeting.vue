<template>
  <div class="content-wrapper">
    <h2>You have left the meeting.</h2>
    <div class="actions">
      <Button class="secondary-button" text="Rejoin" />
      <router-link tabindex="-1" to="/"
        ><Button class="primary-button" text="Exit to Home screen"
      /></router-link>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
export default {
  components: { Button },
};
</script>

<style scoped>
.content-wrapper {
  margin-top: 6rem;
}
h2 {
  font-size: 1.6rem;
  font-weight: 400;
}
.actions {
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}
</style>
