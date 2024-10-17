<template>
  <div class="webcam-container">
    <video ref="video" autoplay></video>
    <button @click="capturePhoto">Prendre une photo</button>
    <canvas ref="canvas" style="display: none;"></canvas>
    <img ref="photo" alt="Photo prise" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  setup() {
    const video = ref<HTMLVideoElement | null>(null);
    const canvas = ref<HTMLCanvasElement | null>(null);
    const photo = ref<HTMLImageElement | null>(null);
    let stream: MediaStream | null = null;

    const startWebcam = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (video.value) {
          video.value.srcObject = stream;
        }
      } catch (error) {
        console.error('Erreur d\'accès à la webcam : ', error);
      }
    };

    const capturePhoto = () => {
      if (canvas.value && video.value) {
        const context = canvas.value.getContext('2d');
        if (context) {
          canvas.value.width = video.value.videoWidth;
          canvas.value.height = video.value.videoHeight;
          context.drawImage(video.value, 0, 0);
          if (photo.value) {
            photo.value.src = canvas.value.toDataURL('image/png');
          }
        }
      }
    };

    onMounted(() => {
      startWebcam();
    });

    onBeforeUnmount(() => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    });

    return {
      video,
      canvas,
      photo,
      capturePhoto,
    };
  },
});
</script>

<style>
.webcam-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
video {
  width: 100%;
  max-width: 400px;
  border: 1px solid black;
}
img {
  margin-top: 10px;
  max-width: 100%;
}
</style>
