<template>
  <div class="conference" :style="{ height: vheight + 'px' }">
    <div ref="videoField" class="video-wrapper">
      <div class="non-local-stream" :key="stream" v-for="stream in feeds">
        <div class="overlay">
          <h2>{{ stream.user }}</h2>
        </div>
        <video
          src=""
          :style="{
            width: videoWidth,
            height: videoHeight,
            margin: videoMargin,
          }"
        ></video>
        <audio src="" autoplay></audio>
      </div>
      <div class="local-stream">
        <div class="overlay" :class="{ central: !isVisible }">
          <img
            v-if="!isVisible"
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt
          />
          <h2>You</h2>
        </div>
        <video
          ref="video"
          src=""
          :style="{
            width: videoWidth,
            height: videoHeight,
            margin: videoMargin,
          }"
          autoplay
          muted
        ></video>
      </div>
    </div>
    <div class="controls-info-wrapper">
      <div class="conference-info">
        <div @click="copyId">
          <transition name="fade">
            <p class="tooltip temp" v-if="hidingTooltipVisible">Copied</p>
          </transition>
          {{ meetingId }}
        </div>
      </div>
      <div class="action-buttons-wrapper">
        <div
          @click="toggleVideoEvent"
          @mouseover="vidTooltip = true"
          @mouseleave="vidTooltip = false"
        >
          <transition name="fade">
            <p class="tooltip" v-show="vidTooltip">
              Toggle Camera
            </p>
          </transition>
          <ActionButton class="toggle" :class="{ inactive: !isVisible }">
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
        </div>
        <div
          @click="toggleMicEvent"
          @mouseover="micTooltip = true"
          @mouseleave="micTooltip = false"
        >
          <transition name="fade">
            <p class="tooltip" v-show="micTooltip">
              Toggle Microphone
            </p>
          </transition>
          <ActionButton class="toggle" :class="{ inactive: !isUnmute }">
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
        <div
          @click="exitEvent"
          @mouseover="endTooltip = true"
          @mouseleave="endTooltip = false"
        >
          <transition name="fade">
            <p class="tooltip" v-show="endTooltip">
              Exit Meeting
            </p>
          </transition>
          <ActionButton class="not-toggle">
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.944 14.9691L26.9484 16.9115L19.4912 16.8958L19.4873 14.9525L26.944 14.9691ZM9.64971 14.9297L9.65409 16.8721L2.196 16.8559L2.19213 14.9126L9.64971 14.9297Z"
                fill="black"
              />
              <path
                d="M2.18987 13.9425L2.21653 12.5803C2.57015 4.72582 26.9078 4.80182 26.9617 12.6884L26.9409 13.9985L19.4833 13.9814L19.5055 12.679C19.4608 10.2664 9.71895 10.2157 9.66577 12.6318L9.64076 13.9592L2.18987 13.9425Z"
                fill="black"
              />
            </svg>
          </ActionButton>
        </div>
      </div>
      <div class="chat-button-wrapper">
        <div @mouseover="chatTooltip = true" @mouseleave="chatTooltip = false">
          <transition name="fade">
            <p class="tooltip" v-show="chatTooltip">
              Toggle Chat
            </p>
          </transition>
          <ActionButton
            @click="chatToggle()"
            :class="['different-toggle', { active: isChatOpen }]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5-8v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981z"
              />
            </svg>
          </ActionButton>
        </div>
      </div>
    </div>
    <transition name="slide">
      <div class="chat-panel" v-show="isChatOpen">
        <div class="panel-title">
          <p>Chat</p>
          <div @click="chatToggle" class="close-panel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </div>
        </div>
        <div class="chats-wrapper">
          <ChatBubble
            :key="message.id"
            v-for="message in chat"
            :message="message.message"
            :time="message.time"
            :user="message.user"
          />
        </div>
        <div class="text-input-wrapper">
          <form @submit.prevent>
            <input class="chat-input" v-model="chatText" required type="text" />
            <button :class="{ sendable: chatText }" :disabled="!chatText">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SocketioService from '../../services/socketio.service';
import ActionButton from '../components/ActionButton.vue';
import ChatBubble from '../components/ChatBubble.vue';
export default {
  data() {
    return {
      vheight: '',
      isUnmute: true,
      isVisible: true,
      isChatOpen: false,
      meetingId: 'jazz',
      hidingTooltipVisible: false,
      micTooltip: false,
      vidTooltip: false,
      endTooltip: false,
      chatTooltip: false,
      localAudioStream: '',
      localVideoStream: '',
      feeds: '',
      // feeds: ['st1'],
      videoWidth: '',
      videoHeight: '',
      videoMargin: '',
      chatText: '',
      chat: [
        { id: 1, user: 'You', message: 'Hello World', time: '11:30pm' },
        { id: 2, user: 'Nathan', message: 'Bye World', time: '11:31pm' },
        {
          id: 3,
          user: 'Jason',
          message:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, saepe ratione nam accusamus id vitae nostrum excepturi eum vel minus voluptatibus cumque repellendus iste! Magni quod expedita est ab veniam!',
          time: '11:30pm',
        },
      ],
    };
  },
  components: { ActionButton, ChatBubble },
  name: 'ConferencePage',
  methods: {
    async getAudioStream() {
      if (navigator.mediaDevices.getUserMedia) {
        this.localAudioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
      }
    },
    async getVideoStream() {
      const video = this.$refs.video;
      if (navigator.mediaDevices.getUserMedia) {
        this.localVideoStream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720 },
        });
        video.srcObject = this.localVideoStream;
      }
    },
    async toggleMicEvent() {
      this.isUnmute = !this.isUnmute;
      if (this.isUnmute) {
        await this.getAudioStream();
      } else {
        this.stopAudioStream();
      }
    },
    async toggleVideoEvent() {
      this.isVisible = !this.isVisible;
      if (this.isVisible) {
        await this.getVideoStream();
      } else {
        this.stopVideoStream();
      }
      console.log(this.localVideoStream.getVideoTracks()[0]);
    },
    videoWrapping() {
      let margin = 8;
      let videoContainer = this.$refs.videoField;
      let width = videoContainer.offsetWidth - margin * 2;
      let height = videoContainer.offsetHeight - margin * 2;
      let feeds = this.feeds.length > 0 ? this.feeds.length + 3 : 2;
      let containerArea = width * height;
      let feedArea = containerArea / feeds;
      let commonUnitLength = Math.sqrt(feedArea / 144);
      this.videoWidth = commonUnitLength * 16 - margin + 'px';
      this.videoHeight = commonUnitLength * 9 - margin + 'px';
      this.videoMargin = margin / 2 + 'px';
    },

    copyId() {
      this.hidingTooltipVisible = true;
      navigator.clipboard.writeText(this.meetingId);
      setTimeout(() => (this.hidingTooltipVisible = false), 1500);
    },

    viewportHeight() {
      this.vheight = window.innerHeight;
    },
    chatToggle() {
      this.isChatOpen = !this.isChatOpen;
      if (this.isChatOpen) {
        this.videoWrapping();
        setTimeout(() => {
          this.videoWrapping();
        }, 10);
      } else {
        setTimeout(() => this.videoWrapping(), 275);
      }
    },
    exitEvent() {
      this.$router.push({ path: '/leave-meeting' });
    },
    stopAudioStream() {
      if (this.localAudioStream.getAudioTracks())
        this.localAudioStream.getAudioTracks()[0].stop();
    },
    stopVideoStream() {
      if (this.localVideoStream.getVideoTracks())
        this.localVideoStream.getVideoTracks()[0].stop();
    },
  },
  created() {
    SocketioService.setupSocketConnection();
  },
  mounted() {
    this.viewportHeight();
    window.addEventListener('resize', () => {
      this.viewportHeight();
      setTimeout(() => this.videoWrapping(), 1);
    });
    setTimeout(() => this.videoWrapping(), 1);
    this.getVideoStream();
    this.getAudioStream();
  },
  beforeUnmount() {
    this.stopAudioStream();
    this.stopVideoStream();
    SocketioService.disconnect();
  },
};
</script>

<style scoped>
.conference {
  position: relative;
  background: #1f1f1f;
  display: grid;
  grid-template: 1fr auto / 1fr auto;
  overflow: hidden;
}

.video-wrapper {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 0.5rem;
  overflow: hidden;
  transition: all 0.25s ease-in;
}

.video-wrapper video {
  position: relative;
  vertical-align: middle;
  align-self: center;
  overflow: hidden;
  display: inline-block;
  background: #000;
  aspect-ratio: 4/3;
}

.local-stream,
.non-local-stream {
  position: relative;
  display: grid;
}

.overlay {
  position: absolute;
  display: grid;
  /* top: 10px; */
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 4px;
}

.overlay img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
.overlay h2 {
  position: absolute;
  right: 4px;
  top: 4px;
  font-weight: 400;
  height: max-content;
  width: max-content;
  padding: 2px 4px;
  color: white;
  text-shadow: 0 0 6px rgba(0, 0, 0, 1);
  font-size: 1.2rem;
}

.overlay.central h2 {
  background: transparent;
  font-size: 1rem;
  right: unset;
  top: calc(50% + 3.2rem);
}

.overlay.central {
  place-items: center;
}

.controls-info-wrapper {
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  place-items: center;
  padding: 0.25rem;
  background: white;
  grid-column: 1/3;
  grid-row: 2/3;
}

.chat-panel {
  position: relative;
  background: white;
  width: 350px;
  border-radius: 10px 0 0 0;
  padding: 0.5rem;
  padding-bottom: 0;
  padding-right: 0;
  display: grid;
  grid-template: auto 1fr auto / 1fr;
}

.chats-wrapper {
  padding-right: 0.25rem;
  overflow-y: scroll;
}

.text-input-wrapper form {
  all: unset;
  display: grid;
  gap: 0.25rem;
  grid-template: 1fr / 90% auto;
  border-top: 1px solid lightgrey;
  padding-top: 0.25rem;
}

.text-input-wrapper input {
  padding: 0.25rem;
  border: none;
  border-bottom: 2px solid lightgrey;
  outline: none;
}

.text-input-wrapper input:focus {
  padding: 0.25rem;
  border-color: var(--color-text);
}
.text-input-wrapper button {
  background: transparent;
  height: auto;
  width: 100%;
  padding: 0.125rem;
}

.text-input-wrapper button path {
  fill: lightgrey;
}
.text-input-wrapper button.sendable path {
  fill: var(--color-text);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.25s;
}
.slide-leave-active {
  animation: slide-in 0.25s reverse;
}

@keyframes slide-in {
  0% {
    left: 100%;
  }
  100% {
    left: 0;
  }
}

.conference-info {
  margin-left: 1rem;
  justify-self: start;
  cursor: default;
}

.conference-info div:not(.tooltip) {
  line-height: 0.4;
}

.panel-title {
  display: grid;
  grid-template: 1fr / 1fr auto;
  padding: 0 1rem 0.5rem 1rem;
  border-bottom: 1px solid #1f1f1f20;
  user-select: none;
}

.close-panel {
  height: 15px;
  width: 15px;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  color: white;
  font-size: 0.7rem;
  background: #464646;
  bottom: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  padding: 0.12rem 0.25rem;
  width: max-content;
  user-select: none;
  line-height: normal;
}

.conference-info div,
.action-buttons-wrapper > div,
.chat-button-wrapper > div {
  position: relative;
}

.conference-info div:hover {
  text-decoration: underline;
}

.action-buttons-wrapper {
  display: flex;
  gap: 0.5rem;
}

button {
  height: 50px;
  width: 50px;
}

.toggle,
.different-toggle {
  box-shadow: inset 0 0 0 2px var(--color-text);
  background: transparent;
}
.not-toggle {
  box-shadow: inset 0 0 0 2px crimson;
  background: transparent;
  padding: 0.5rem;
}

.toggle.inactive {
  box-shadow: none;
  background: rgb(220, 20, 60);
}

.different-toggle.active {
  background: var(--color-text);
}

.not-toggle path {
  fill: crimson;
}
.toggle.inactive path,
.different-toggle.active path {
  fill: white;
}

.toggle path,
.different-toggle path {
  fill: var(--color-text);
}

.chat-button-wrapper {
  margin-right: 1rem;
  justify-self: end;
}

svg {
  height: 100%;
  width: 100%;
}

@media (hover: none) {
  .tooltip:not(.temp) {
    visibility: hidden;
  }
}
</style>
