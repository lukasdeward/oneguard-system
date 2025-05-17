<template>
  <div class="flex flex-col items-center justify-center gap-2">
    
    <h2 class="text-2xl font-bold text-center">Age Check for Order {{ orderName }} on {{ shopName }}</h2>

    <p class="text-center w-96">Hi {{ customerName }}, please allow Camera Access to proceed with the age verification process. Your images are not saved on our services.</p>

    <template v-if="showCameraAccessError">
      
      <p class="text-red-500">Camera access is required for age verification.</p>
      <UButton
        leading-icon="i-lucide-refresh-cw"
        @click="getCameraAccess">
        Retry Camera Access
      </UButton>
    </template>

  </div>
</template>

<script lang="ts" setup>

type Emits = {
  (e: 'next'): void
}

defineProps<{
  orderName: string | undefined,
  customerName: string | undefined,
  shopName: string | null | undefined,
}>()

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