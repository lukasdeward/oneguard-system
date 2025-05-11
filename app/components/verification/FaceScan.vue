<template>
  <div>

    <!-- hidden video for webcam feed -->
    <video
      ref="video"
      class="webcam"
      muted
      playsinline
    ></video>

    <p>
      <span v-if="result.similarity !== null">
        Similarity: {{ result.similarity }}
      </span>
      <span v-if="result.real !== undefined">
        Anti Spoof check: {{ result.real }}
      </span>
      <span v-if="result.live !== undefined">
        Live: {{ result.live }}
      </span>

      <div v-if="(result.similarity ?? 0) > 0.50 && (result.real ?? 0) > 0.60 && (result.live ?? 0) > 0.90">
        <span class="text-green-500">Face matched successfully!</span>
      </div>
    </p>

    <template v-if="idCard">
      <div style="display: none;">
        <img
          :src="idCard?.front"
          ref="idCardFront"
          class="id-card"
        />
        <img
          :src="idCard?.back"
          alt="ID Card Back"
          class="id-card"
        />
      </div>
    </template>

  </div>

</template>

<script setup lang="ts">
import { em } from '#build/ui-pro/prose';
import type { Human, Config } from '@vladmandic/human'
import type { IDCardImages } from '~/types/verification';

const props = defineProps<{
  idCard: IDCardImages | undefined
}>()

const emit = defineEmits<{
  (e: 'next'): void
}>()
// element refs
const video = useTemplateRef('video')
const idCardFront = useTemplateRef('idCardFront') as Ref<HTMLImageElement>

const result = ref<{
  similarity: number | null
  real: number | undefined
  live: number | undefined
}>({
  similarity: null,
  real: undefined,
  live: undefined,
})

// webcam & Human handles
let stream: MediaStream
let track: MediaStreamTrack
let settings: MediaTrackSettings
let capabilities: MediaTrackCapabilities | undefined
let human: Human
let timestamp = 0
let fps = 0

// your Human.js config
const config: Partial<Config> = {
  filter: { enabled: true, equalization: true }, // lets run with histogram equilizer
  debug: false,
  face: {
    enabled: true,
    detector: { rotation: true, return: true, mask: false }, // return tensor is used to get detected face image
    description: { enabled: true }, // default model for face descriptor extraction is faceres
    // mobilefacenet: { enabled: true, modelPath: 'https://vladmandic.github.io/human-models/models/mobilefacenet.json' }, // alternative model
    // insightface: { enabled: true, modelPath: 'https://vladmandic.github.io/insightface/models/insightface-mobilenet-swish.json' }, // alternative model
    iris: { enabled: true }, // needed to determine gaze direction
    antispoof: { enabled: true }, // enable optional antispoof module
    liveness: { enabled: true }, // enable optional liveness module
  },
  body: { enabled: false },
  hand: { enabled: false },
  object: { enabled: false },
}

// 1) Start the webcam
async function initWebcam() {
  const constraints: MediaStreamConstraints = {
    audio: false,
    video: {
      facingMode: 'user',
      width: { ideal: document.body.clientWidth },
    },
  }
  stream = await navigator.mediaDevices.getUserMedia(constraints)
  const videoTracks = stream.getVideoTracks();
  if (!videoTracks[0]) {
    throw new Error('No video tracks available');
  }
  track = videoTracks[0];
  capabilities = track.getCapabilities?.()
  settings = track.getSettings?.()

  if (video.value) {
    video.value.srcObject = stream
    video.value.onloadeddata = () => {
      // show some performance info
      video.value!.play()
      // once the video is live, load Human
      initHuman()
    }
  }
}

// 2) Dynamically load & initialize Human
async function initHuman() {
  const H = await import('@vladmandic/human')
  human = new H.default(config) as Human

  await human.load()

  await human.warmup()

  detectLoop()
}

// 3) Main detection + draw loop
async function detectLoop() {
  if (!video.value) return
  // detect on the video element
  const videoFace = await human.detect(video.value)

  const idFace = await human.detect(idCardFront.value)



  if (videoFace?.face[0]?.embedding && idFace.face[0]?.embedding) {
    // draw the results
     const similarity = human.match.similarity(
      videoFace.face[0]?.embedding,
      idFace.face[0]?.embedding
    )

    result.value.similarity = similarity
    result.value.real = videoFace.face[0].real
    result.value.live = videoFace.face[0].live

    if (similarity > 0.50 && (videoFace.face[0].real ?? 0) > 0.60 && (videoFace.face[0].live ?? 0) > 0.90) {
      console.log('Face matched successfully!')
      emit('next')
    } else {
      console.log('Face not matched')
    }
  } else {

    if (videoFace?.face[0]?.embedding) {
      console.log('no id card detected');
    } else if (idFace?.face[0]?.embedding) {
      console.log('no face in video');
    } else {
      console.log('no face or id card detected');
    }


    console.log('no face detected');
  }

 

  // compute FPS
  const now = human.now()
  fps = 1000 / (now - timestamp)
  timestamp = now

  if (video.value.paused) {
    console.log('Video paused')
  } else {
    // smooth & render
    // const interp = human.next(human.result!)
    // human.draw.canvas(videoEl.value, canvasEl.value)
    //human.draw.all(canvasEl.value, interp)
  }

  

  requestAnimationFrame(detectLoop)
}

onMounted(() => {

  initWebcam()

})
</script>

<style scoped>
.webcam {
  transform: scaleX(-1);
}

.status,
.log,
.performance {
  font-family: monospace;
  white-space: pre-wrap;
  margin-top: 0.5rem;
}
</style>
