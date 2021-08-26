<template>
  <div class="home content-wrapper">
    <div class="hero-wrapper">
      <div class="text-wrapper">
        <div>
          <p>Peer-to-Peer Communication.</p>
          <p>Private, Secure and Free.</p>
        </div>
        <div class="actions-wrapper">
          <div class="actions" v-if="!isLoggedIn">
            <router-link tabindex="-1" to="/get-started"
              ><Button class="primary-button" text="Get Started"
            /></router-link>
            <div>
              Already have an account?
              <router-link to="/login">Log in</router-link>
            </div>
          </div>
          <div class="actions" v-else>
            <Button
              class="primary-button small-text"
              text="Create New Meeting"
            />
            or
            <form
              ref="form"
              class="one-liner"
              novalidate
              @submit.prevent="submitEvent"
            >
              <NonValidatingInput
                inputPlaceholder="Enter Meeting Code"
                inputType="text"
                v-model="meetingCode"
                @adding-value="error = ''"
                :error="error"
              />
              <Button
                :tabIndex="-1"
                class="secondary-button small-text"
                text="Join"
              />
            </form>
          </div>
        </div>
      </div>
      <div class="image-wrapper">
        <img alt="Hero Image" src="@/assets/hero-image.png" />
      </div>
    </div>
    <!-- <div class="actions-wrapper">
      <a href="#"><Button :tabIndex="-1" text="Get Started"/></a>
      <div>Already have an account? <a href="#">Log in</a></div>
    </div> -->
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import NonValidatingInput from '../components/NonValidatingInput.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: { Button, NonValidatingInput },
  data() {
    return {
      meetingCode: '',
      error: '',
    };
  },
  props: {
    isLoggedIn: Boolean,
  },
  methods: {
    submitEvent() {
      if (!this.$refs.form.checkValidity()) {
        this.error = 'Meeting Code cannot be empty';
      } else {
        // ToDo: async stuff
      }
    },
  },
};
</script>

<style scoped>
.home {
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

.one-liner {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: max-content;
}

.text-wrapper p {
  font-size: clamp(1.4rem, 2.4vw, 3rem);
  text-align: left;
  font-weight: 500;
}

.actions {
  font-size: 1.2rem;
  display: flex;
  gap: 2rem;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
}

.actions > form {
  /* align-self: flex-end; */
  font-size: 1.1rem;
}

@media screen and (max-width: 900px) {
  .actions {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }
}
@media screen and (max-width: 700px) {
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

  .actions {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }

  .actions div {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
  }

  .actions form {
    text-align: start;
  }
}
</style>
