<template>
  <div class="flex flex-col items-center justify-center gap-2">
    
    <h2 class="text-2xl font-bold">Age Check for your Order #2342</h2>

    <p class="text-center">Camera access is required to proceed with the age verification process. Please enable your camera to continue.</p>

    <template v-if="showCameraAccessError">
      
      <p class="text-red-500">Camera access is required for age verification.</p>
      <UButton
        leading-icon="i-lucide-refresh-cw"
        @click="getCameraAccess">
        Retry Camera Access
      </UButton>
    </template>


    <UButton @click="getCameraAccess">Start Age Verification</UButton>

  </div>
</template>

<script lang="ts" setup>

type Emits = {
  (e: 'next'): void
}

const emit = defineEmits<Emits>()

const showCameraAccessError = ref(false)

const getCameraAccess = async () => {
  const constraints: MediaStreamConstraints = {
    audio: false,
    video: {
      facingMode: 'user',
      width: { ideal: document.body.clientWidth },
    },
  }

  try {
    await navigator.mediaDevices.getUserMedia(constraints)
    emit('next')
  } catch (error) {
    console.error('Error accessing camera:', error)
    showCameraAccessError.value = true
    return
  }

}

</script>

<style>

</style>