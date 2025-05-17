<template>
  <div>
  
  <div v-if="verification?.success">
    <UStepper ref="stepper" :items="items" class="w-full mt-8" disabled>
      <template #content="{ item }" class="g-0">

        <div class="flex flex-col items-center justify-center">

          <VerificationStart
            v-if="item?.component == 'VerificationStart'"
            :orderName="verification?.data?.orderName"
            :customerName="verification?.data?.customerName"
            :shopName="verification?.data?.displayName"
            @next="nextPage()"
          ></VerificationStart>

          <VerificationIdScan
            v-else-if="item?.component == 'VerificationIdScan'"
            ref="idScan"
            v-model="loadingPhoto"
            @next="(response: IDCardImages) => {IdCard = response; nextPage()}"
          ></VerificationIdScan>
          
          <VerificationFaceScan
            v-if="item?.component == 'VerificationFaceScan'"
            :idCard="IdCard"
            @next="(result: string) => {face = result; validateIdCard(); nextPage()}"
          ></VerificationFaceScan>

          <VerificationDone
            v-if="item?.component == 'VerificationDone'"
            v-model="verificationLoading"
            :error="verificationError"
            @retry="retry()"
          ></VerificationDone>
        
          <div class="fixed flex bottom-0 left-0 right-0 p-4 bg-white shadow-md">
            <UButton
              v-if="item?.component == 'VerificationStart'"
              label="Start"
              color="neutral"
              class="action-button"
              @click="nextPage()"
            />
            <UButton
              v-else-if="item?.component == 'VerificationIdScan'"
              class="action-button"
              label="Capture"
              color="neutral"
              leading-icon="i-lucide-camera"
              :loading="loadingPhoto"
              @click="idScan?.captureImage()"
            />
            <UButton
              v-else-if="item?.component == 'VerificationFaceScan'"
              class="action-button"
              label="Capture"
              color="neutral"
              @click="nextPage()"
            />

        </div>
        </div>

      </template>
    </UStepper>
  </div>
  <div v-else class="flex flex-col items-center justify-center h-screen p-4 text-center">
      <h1 class="text-2xl font-bold mb-4">Verification not found</h1>
      <p class="text-gray-600">Please check the verification ID and try again.</p>
      <UButton
        label="Go back"
        color="neutral"
        variant="outline"
        class="justify-center mt-4"
        to="/"
      />
  </div>

  </div>

</template>

<script setup lang="ts">
import { VerificationFaceScan } from '#components'
import type { StepperItem } from '@nuxt/ui'
import type { IDCardImages } from '~/types/verification'
import type { OngoingVerificationResponse } from '~~/types/api'


const items: StepperItem[] = [
  {
    title: 'Start',
    icon: 'i-lucide-house',
    component: "VerificationStart"
  }, {
    title: 'ID Scan',
    icon: 'i-lucide-credit-card',
    component: "VerificationIdScan"
  }, {
    title: 'Face Scan',
    icon: 'i-lucide-camera',
    component: "VerificationFaceScan"
  },
  {
    title: 'Done',
    icon: 'i-lucide-check',
    component: "VerificationDone"
  }
]

const stepper = useTemplateRef('stepper')

const route = useRoute()

const verification = ref<OngoingVerificationResponse | undefined>()

const { data } = await useFetch('/api/verification/ongoing-verification', {
  params: {
    id: route.params.id
  }
})

verification.value = data.value as OngoingVerificationResponse

const idScan = useTemplateRef('idScan')
const loadingPhoto = ref(false);

const openAIresponse = ref('');

const IdCard = ref<IDCardImages>();
const face = ref<string>();

const verificationLoading = ref(false)
const verificationError = ref<string | null>(null)


const nextPage = () => {
  console.log('nextPage')
  stepper.value?.next()
}

const retry = () => {
  console.log('retry')
  stepper.value?.prev()
  if (stepper.value?.hasPrev) {
    retry()
  }
}


const validateIdCard = async () => {
  verificationLoading.value = true

  const result = await $fetch('/api/verification/verify-document', {
    method: 'POST',
    body: {
      idBack: IdCard.value?.back,
      idFront: IdCard.value?.front,
      face: face.value,
      verification_id: route.params.id,
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('validateIdCard', result)

  // @ts-ignore
  if (openAIresponse.value = result.output[0].content[0].parsed) {
    console.log('openAIresponse', openAIresponse.value)
  } else {
    verificationError.value = 'Verification failed'
  }

  verificationLoading.value = false
}


definePageMeta({
  layout: 'empty'
})

</script>

<style lang="scss">
.action-button {
  font-size: 1.3rem;
  padding: 0.5rem;
  border-radius: 100px;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  justify-content: center;
  cursor: pointer;
}

</style>