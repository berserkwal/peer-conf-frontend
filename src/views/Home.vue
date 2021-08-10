<template>
  <div class="home content-wrapper">
    <div class="hero-wrapper">
      <div class="text-wrapper">
        <div>
          <p>Peer-to-Peer Communication.</p>
          <p>Private, Secure and Free.</p>
        </div>
        <div class="actions-wrapper">
          <router-link to="/get-started"
            ><Button class="primary-button" text="Get Started"
          /></router-link>
          <div>
            Already have an account?
            <router-link to="/login">Log in</router-link>
          </div>
        </div>
      </div>
      <div class="image-wrapper">
        <img alt="Hero Image" src="@/assets/hero-image.png" />
      </div>
    </div>
    <!-- <div class="actions-wrapper">
      <a href="#"><Button text="Get Started"/></a>
      <div>Already have an account? <a href="#">Log in</a></div>
    </div> -->
  </div>
</template>

<script>
import Button from '../components/Button.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: { Button },
};
</script>

<style scoped>
.home {
  margin-top: 5rem;
  padding: 0 2rem;
  display: flex;

  flex-direction: column;
  gap: 2rem;
}

.hero-wrapper {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template: auto / repeat(2, 1fr);
  /* gap: 3vw; */
  width: 100%;
}

.image-wrapper {
  width: 35vw;
  transform: scaleX(-1);
}

img {
  width: 100%;
}

.text-wrapper {
  text-align: center;
  display: grid;
  gap: 2rem;
}

.text-wrapper p {
  font-size: clamp(1.4rem, 2.4vw, 3rem);
  text-align: left;
  font-weight: 500;
}

.actions-wrapper {
  font-size: 1.2rem;
  display: flex;
  gap: 2rem;
  width: 100%;
  align-items: center;
  justify-content: start;
}

.actions-wrapper > div {
  align-self: flex-end;
  font-size: 1.1rem;
}

@media screen and (max-width: 500px) {
  .home {
    gap: 3rem;
  }
  .hero-wrapper {
    grid-template: auto auto / 1fr;
    gap: 2rem;
  }
  .text-wrapper {
    grid-row: 2/3;
  }

  .image-wrapper {
    width: 80vw;
  }

  .text-wrapper p {
    text-align: center;
  }

  .actions-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }

  .actions-wrapper div {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
  }
}
</style>
