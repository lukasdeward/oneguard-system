<!--

CodePen Camera
==========

A Progressive Web App Camera built using Vue, Tailwind, and WebRTC. Try adding the Debug view to your home screen and read the companion blog to learn more:

[Blog](https://medium.com/@leemartin/how-to-build-a-simple-ios-home-screen-pwa-camera-using-vue-tailwind-and-webrtc-on-codepen-2d61a9754d47?source=friends_link&sk=2ed90bf1e4f52db8491636cebb4b582b)

-->

<template>
  <div>

    <canvas id="canvas" class="output"></canvas>
    <!-- hidden video for webcam feed -->
    <video
      id="video"
      class="webcam"
      muted
      playsinline
      style="display: none;"
    ></video>
    <!-- status & logs -->
    <div id="status" class="status"></div>
    <div id="log" class="log"></div>
    <div id="performance" class="performance"></div>

  </div>

</template>

<script setup lang="ts">
import type { Human, Config } from '@vladmandic/human'
import { init } from 'openai/_shims/index.mjs'

// element refs
const videoEl = ref<HTMLVideoElement>()
const canvasEl = ref<HTMLCanvasElement>()
const perfEl = ref<HTMLDivElement>()

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
  debug: false,
  face: { enabled: true },
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

  if (videoEl.value) {
    videoEl.value.srcObject = stream
    videoEl.value.onloadeddata = () => {
      // show some performance info
      perfEl.value!.innerText = JSON.stringify(
        { label: track.label, settings, capabilities },
        null,
        2
      )
      videoEl.value!.play()
      // once the video is live, load Human
      initHuman()
    }
  }
}

// 2) Dynamically load & initialize Human
async function initHuman() {
  const H = await import('@vladmandic/human')
  human = new H.default(config) as Human

  console.log('human version:', human.version, '| tfjs:', human.tf.version['tfjs-core'])
  console.log('platform:', human.env.platform, '| agent:', human.env.agent)
  console.log('loading models…')
  await human.load()
  console.log('backend:', human.tf.getBackend(), '| available:', human.env.backends)
  console.log(
    'loaded models:',
    Object.values(human.models).filter((m) => m).length
  )

  await human.warmup()

  detectLoop()
}

// 3) Main detection + draw loop
async function detectLoop() {
  if (!videoEl.value || !canvasEl.value) return
  // detect on the video element
  await human.detect(videoEl.value)

  // compute FPS
  const now = human.now()
  fps = 1000 / (now - timestamp)
  timestamp = now

  if (videoEl.value.paused) {
    console.log('Video paused')
  } else {
    // smooth & render
    const interp = human.next(human.result!)
    human.draw.canvas(videoEl.value, canvasEl.value)
    human.draw.all(canvasEl.value, interp)
    console.log(`fps: ${fps.toFixed(1).padStart(5, ' ')}`)
  }

  requestAnimationFrame(detectLoop)
}

onMounted(() => {
  // grab the elements
  videoEl.value = document.getElementById(
    'video'
  ) as HTMLVideoElement
  canvasEl.value = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement
  perfEl.value = document.getElementById(
    'performance'
  ) as HTMLDivElement

  // resize canvas when video size changes
  if (videoEl.value && canvasEl.value) {
    videoEl.value.onresize = () => {
      canvasEl.value!.width = videoEl.value!.videoWidth
      canvasEl.value!.height = videoEl.value!.videoHeight
    }
    // pause/play on canvas click
    canvasEl.value.onclick = () => {
      videoEl.value!.paused
        ? videoEl.value!.play()
        : videoEl.value!.pause()
    }
  }

  initWebcam()

})
</script>

<style scoped>
.container {
  position: relative;
}
.webcam {
  display: none;
}
.output {
  width: 100%;
  height: auto;
}
.status,
.log,
.performance {
  font-family: monospace;
  white-space: pre-wrap;
  margin-top: 0.5rem;
}
</style>
