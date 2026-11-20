<script setup lang="ts">

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlayCircle, mdiPauseCircle } from '@mdi/js';
import { ref } from 'vue';

const inVideo = ref<HTMLVideoElement | null>(null)
const is_playing = ref(false);

const toggleVideo = () => {
  if (inVideo.value) {
    if (inVideo.value.paused) {

      inVideo.value.play();
      is_playing.value = true;

    } else {


      inVideo.value.pause();
      is_playing.value = false;

    }
  }

}


</script>

<template>
  <div class="video-inicio">
    <video ref="inVideo" playsinline>
      <source src="@/assets/videos/inicio.webm" type="video/webm" poster="@/assets/imgs/EQUIPO/Imagenoveja equipo.webp">
    </video>
    <div class="guardianas-logo">
      <img class="logo" src="@/assets/imgs/FOOTER/GUARDIANAS LOGO FOOTER.webp" alt="logo GUARDIANAS" />
      <svg-icon width="120" height="120" type="mdi" :path="is_playing ? mdiPauseCircle : mdiPlayCircle"
        class="button-play" @click="toggleVideo"></svg-icon>
    </div>
  </div>
</template>

<style scoped>
g .button-play {
  font-size: 4rem;
  height: 10vh;
  width: 10vw;
}

.video-inicio {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-inicio video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.guardianas-logo {
  position: relative;
  z-index: 1;
  margin: 25vh;
  color: var(--color-amarillo-claro);
}

.guardianas-logo * {
  display: block;
  margin: auto;
}

img.logo {
  width: 35vw;
  padding-bottom: 3vh;
}

img.nombre {
  margin-top: 2rem;
  max-width: 35vw;
}

@media (max-width: 1100px) {

  .guardianas-logo {
    margin: auto;
    margin-top: 25vh;
  }

  img.logo {
    width: 75vw;
  }


}
</style>
