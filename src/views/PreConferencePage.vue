<template>
  <div class="content-wrapper">
    <div class="video-wrapper" @click.right.prevent>
      <p>
        {{
          !isVisible && !isUnmute
            ? 'Camera and Microphone are off'
            : !isVisible
            ? 'Camera is off'
            : !isUnmute
            ? 'Microphone is off'
            : error
        }}
      </p>
      <video ref="video" src="" autoplay muted></video>
      <audio ref="audio" src="" autoplay muted></audio>
      <div class="controls" v-if="videoStream || audioStream">
        <ActionButton
          @click="isVisible = !isVisible"
          :class="{ inactive: !isVisible }"
        >
          <svg
            v-if="isVisible"
            width="22"
            height="12"
            viewBox="0 0 22 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 2C13.776 2 14 2.224 14 2.5V9.5C14 9.776 13.776 10 13.5 10H2.5C2.224 10 2 9.776 2 9.5V2.5C2 2.224 2.224 2 2.5 2H13.5ZM16 2C16 0.896 15.104 0 14 0H2C0.896 0 0 0.896 0 2V10C0 11.104 0.896 12 2 12H14C15.104 12 16 11.104 16 10V2ZM22 1L17 6L22 11V1Z"
              fill="black"
            />
          </svg>
          <svg
            v-else
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.73205 0L2 1L3.1547 3H2C0.896 3 0 3.896 0 5V13C0 14.104 0.896 15 2 15H10.0829L11.8284 18.0233L13.5604 17.0233L3.73205 0ZM8.9282 13L4.3094 5H2.5C2.224 5 2 5.224 2 5.5V12.5C2 12.776 2.224 13 2.5 13H8.9282ZM14 5.5C14 5.224 13.776 5 13.5 5H8L7 3H14C15.104 3 16 3.896 16 5V13C16 14.104 15.104 15 14 15L13 13H13.5C13.776 13 14 12.776 14 12.5V5.5ZM17 9L22 4V14L17 9Z"
              fill="black"
            />
          </svg>
        </ActionButton>
        <ActionButton
          @click="isUnmute = !isUnmute"
          :class="{ inactive: !isUnmute }"
        >
          <svg
            v-if="isUnmute"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 20L13 24H3L8 20ZM14 9V11C14 14.309 11.309 17 8 17C4.691 17 2 14.309 2 11V9H0V11C0 15.418 3.582 19 8 19C12.418 19 16 15.418 16 11V9H14ZM4 11V4C4 1.791 5.791 0 8 0C10.209 0 12 1.791 12 4V11C12 13.209 10.209 15 8 15C5.791 15 4 13.209 4 11ZM6 4V8H10V4C10 2.897 9.104 2 8 2C6.897 2 6 2.897 6 4Z"
              fill="black"
            />
          </svg>
          <svg
            v-else
            width="17"
            height="24"
            viewBox="0 0 17 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 24L9 20L4 24H14ZM15 11V9H17V11C17 12.6982 16.4707 14.2729 15.5682 15.5682L14.1223 14.1223C14.6789 13.2122 15 12.143 15 11ZM12.9553 17.9553C11.7887 18.6201 10.4387 19 9 19C4.582 19 0.999996 15.418 0.999996 11V9H3V11C3 14.309 5.691 17 9 17C9.87951 17 10.7154 16.8099 11.4686 16.4686L9.89865 14.8986C9.60978 14.965 9.30898 15 9 15C6.791 15 5 13.209 5 11V9.99998L0.358521 5.3585L1.77273 3.94429L16.8931 19.0647L15.4789 20.4789L12.9553 17.9553ZM12.6465 12.6465C12.8736 12.1443 13 11.5869 13 11V4C13 1.791 11.209 0 9 0C6.791 0 5 1.791 5 4V5L7 7V4C7 2.897 7.897 2 9 2C10.104 2 11 2.897 11 4V8H8L12.6465 12.6465Z"
              fill="black"
            />
          </svg>
        </ActionButton>
      </div>
    </div>
    <div class="join-wrapper">
      <Button
        @click="goToConferencePage"
        class="primary-button"
        text="Join Meeting"
      />
    </div>
  </div>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue';
import Button from '../components/Button.vue';
export default {
  data() {
    return {
      error: '',
      videoStream: '',
      audioStream: '',
      isUnmute: true,
      isVisible: true,
    };
  },
  methods: {
    goToConferencePage() {
      console.log('lol');
    },
    async getVideoStream() {
      try {
        const video = this.$refs.video;
        if (navigator.mediaDevices.getUserMedia) {
          this.videoStream = await navigator.mediaDevices.getUserMedia({
            video: { width: 640, height: 480 },
          });
          this.error = '';
          video.srcObject = this.videoStream;
        }
      } catch (error) {
        this.error = 'Error while accessing webcam and/or microphone';
        console.log(error);
      }
    },
    async getAudioStream() {
      try {
        const audio = this.$refs.audio;
        if (navigator.mediaDevices.getUserMedia) {
          this.audioStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
          });
          this.error = '';
          audio.srcObject = this.audioStream;
        }
      } catch (error) {
        this.error = 'Error while accessing webcam and/or microphone';
        console.log(error);
      }
    },
    removeStreams() {
      this.audioStream.getAudioTracks()[0].stop();
      this.videoStream.getVideoTracks()[0].stop();
    },
  },
  components: {
    ActionButton,
    Button,
  },
  async mounted() {
    await this.getAudioStream();
    await this.getVideoStream();
  },
  beforeUnmount() {
    this.removeStreams();
  },
  watch: {
    async isUnmute(newValue) {
      if (newValue) {
        this.getAudioStream();
      } else {
        this.audioStream.getAudioTracks()[0].stop();
      }
    },
    async isVisible(newValue) {
      if (newValue) {
        this.getVideoStream();
      } else {
        this.videoStream.getVideoTracks()[0].stop();
      }
    },
  },
};
</script>

<style scoped>
.video-wrapper {
  position: relative;
  margin-bottom: 2rem;
  color: white;
}

.video-wrapper p {
  color: white;
  position: absolute;
  inset: 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  text-shadow: 0 0 6px rgba(0, 0, 0, 1);
}

video {
  aspect-ratio: 4/3;
  width: 90vw;
  max-width: 600px;
  background: black;
  color: white;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  position: absolute;
  bottom: 1.5rem;
}

.controls > * {
  height: 50px;
  width: 50px;
  background: rgba(255, 255, 255, 0.349);
}

.controls > *:hover {
  background: rgba(255, 255, 255, 0.568);
}
.controls > *.inactive {
  background: rgb(220, 20, 60);
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); */
}
.controls > *.inactive:hover {
  background: rgb(231, 37, 76);
  /* box-shadow: 0 4px 4px rgba(238, 27, 27, 0.623); */
}

svg {
  height: 100%;
  width: 100%;
}
svg path {
  fill: #fff;
}
</style>
