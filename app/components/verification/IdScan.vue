<template>
  <div class="flex flex-col items-center justify-center p-3 text-center">

    <div v-if="scanType === 'front'">
      <h2 class="text-2xl font-bold">ID Card Front</h2>
      <p>Please position your ID card in front of the camera. </p>
    </div>
    <div v-else-if="scanType === 'back'">
      <h2 class="text-2xl font-bold">ID Card Back</h2>
      <p>Please scan the back of your ID card.</p>
    </div>
    <div>
      <video
            ref="video"
            class="webcam"
            muted
            playsinline
          ></video>
      <div class="overlay">
        <div class="id-card-indicator">
          <div class="id-card-face-placeholder"></div>
          <div class="id-card-text-placeholder">
            <div class="id-card-text-line-placeholder"></div>
            <div class="id-card-text-line-placeholder"></div>
            <div class="id-card-text-line-placeholder"></div>
            <div class="id-card-text-line-placeholder"></div>
          </div>
        </div>
      </div>
    </div>

    <UButton
      class="mt-4"
      @click="captureImage"
      leading-icon="i-lucide-camera"
      :loading="loading"
      >
      Capture Image
    </UButton>


      <UDrawer v-model:open="modalOpen" should-scale-background set-background-color-on-scale :dismissible="false">

          <template #body>

            <template v-if="scanType === 'front' && idCardFront">
              <div class="flex flex-col items-center justify-center">
                <h1 class="text-2xl font-bold mb-4">ID Card Front</h1>
                <img :src="idCardFront" alt="Captured Image" class="id-card" />
              </div>
            </template>
             <template v-else-if="scanType === 'back' && idCardBack">
              <div class="flex flex-col items-center justify-center">
                <h1 class="text-2xl font-bold mb-4">ID Card Back</h1>
                <img :src="idCardBack" alt="Captured Image" class="id-card" />
              </div>
            </template>
            <template v-else>
              <div class="flex flex-col items-center justify-center">
                <h1 class="text-2xl font-bold mb-4">No Image Captured</h1>
                <p class="text-gray-600">Please capture an image first.</p>
              </div>
            </template>
            
            
          </template>

          <template #footer>
            <UButton label="Submit" color="neutral" class="justify-center" @click="submitImage()" />
            <UButton
              label="Cancel"
              color="neutral"
              variant="outline"
              class="justify-center"
              @click="cancelCurrentImage()"
            />
          </template>

      </UDrawer>

    
    <!-- status & logs -->
  </div>
</template>

<script lang="ts" setup>
import { stepper } from '#build/ui'


const video = useTemplateRef('video')

const stream = ref<MediaStream | null>(null)

const scanType = ref<'front' | 'back'>('front')

const idCardFront = ref<string | null>(null)
const idCardBack = ref<string | null>(null)

const modalOpen = ref(false)

const loading = ref(false)

type Emit = {
  (e: 'next'): void
}

const emit = defineEmits<Emit>()

onMounted(() => {
  initWebcam()
})


const initWebcam = async () => {
  const constraints: MediaStreamConstraints = {
    audio: false,
    video: {
      facingMode: 'user',
      width: { ideal: document.body.clientWidth },
    },
  }

  try {
    const navigatorStream = await navigator.mediaDevices.getUserMedia(constraints)
    if (video.value) {
      video.value.srcObject = navigatorStream
      stream.value = navigatorStream
      video.value.play()
    }
  } catch (error) {
    console.error('Error accessing camera:', error)
  }
}


const captureImage = async () => {
  loading.value = true
  if (!stream.value) {
    console.error('No stream available')
    return
  }

  const mediaStreamTrack = stream.value.getVideoTracks()[0]

  try {
    // @ts-ignore
    const imageCapture = new ImageCapture(mediaStreamTrack)
    const blob = await imageCapture.takePhoto()
    const reader = new FileReader()

    reader.readAsDataURL(blob)
    reader.onload = () => {
      if (scanType.value === 'front') {
        idCardFront.value = reader.result as string
      } else {
        idCardBack.value = reader.result as string
      }
      modalOpen.value = true
    }
  } catch (error) {
    console.error('Error capturing image:', error)
  }
  loading.value = false
}

const submitImage = () => {
  modalOpen.value = false

  if (scanType.value === 'front') {
    scanType.value = 'back'
  } else {
    // Both images are captured, proceed to the next step
    emit('next')
  }
}

const cancelCurrentImage = () => {

  if (scanType.value === 'front') {
    idCardFront.value = null
  } else {
    idCardBack.value = null
  }
  modalOpen.value = false
}
</script>

<style>
.webcam {
  width: 100%;
  max-width: 780px;
  border-radius: 25px;
  height: 350px;
}
.overlay {
  position: relative;
  width: 100%;
  max-width: 780px;
  height: 350px;
  margin-top: -350px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.id-card {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 25px;
  height: 350px;
  object-fit: cover;
}

.id-card-indicator {
  width: 90%;
  height: 90%;
  border: 2px dashed #ffffff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.id-card-face-placeholder {
    width: 100%;
    height: calc(100% - 20px);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    padding: 20px;
    margin: 10px;
}
.id-card-text-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.id-card-text-line-placeholder {
  width: 80%;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 5px auto;
  border-radius: 5px;
}

</style>