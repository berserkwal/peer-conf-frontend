<template>
  <div class="chat-bubble">
    <div class="chat-info">
      <h3 class="user">{{ user }}</h3>
      <h4 class="time">{{ time }}</h4>
    </div>
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChatBubble.vue',
  props: {
    user: String,
    time: String,
    message: String,
  },
};
</script>

<style scoped>
.chat-bubble {
  display: grid;
  grid-template: 1fr auto / 1fr;
  width: 100%;
  text-align: start;
  /* gap: 0 0.5rem; */
  margin-block: 1rem;
  background: rgba(0, 0, 0, 0.034);
  border-radius: 6px;
  padding: 0.5rem 0.3rem;
}
.user {
  font-size: 0.8rem;
  font-weight: 500;
  width: min-content;
}

.chat-info {
  /* border-bottom: 1px solid #fff; */
  display: flex;
  justify-content: space-between;
  /* padding: 0 0 0.2rem 0; */
  user-select: none;
}

.time {
  font-size: 0.6rem;
  font-weight: 400;
  align-self: flex-end;
}
.message {
  /* padding-top: 0.25rem; */
  font-size: 0.9rem;
  text-align: justify;
}
</style>
