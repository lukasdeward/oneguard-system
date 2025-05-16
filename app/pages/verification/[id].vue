<template>
  <div>

  <UStepper ref="stepper" :items="items" class="w-full mt-8" disabled>
    <template #content="{ item }">

      <div class="flex flex-col items-center justify-center">

      <VerificationStart
        v-if="item?.component == 'VerificationStart'"
        @next="nextPage()"
      ></VerificationStart>

      <VerificationIdScan
        v-else-if="item?.component == 'VerificationIdScan'"
        @next="(response: IDCardImages) => {IdCard = response; nextPage()}"
      ></VerificationIdScan>
      
      <VerificationFaceScan
        v-if="item?.component == 'VerificationFaceScan'"
        :idCard="IdCard"
        @next="(result: string) => {face = result; validateIdCard(); nextPage()}"
      ></VerificationFaceScan>

      <VerificationDone
        v-if="item?.component == 'VerificationDone'"
        :loading="verificationLoading"
        :error="verificationError"
        @retry="retry()"
      ></VerificationDone>

    </div>

    </template>
  </UStepper>

  </div>

</template>

<script setup lang="ts">
import { VerificationFaceScan } from '#components'
import type { StepperItem } from '@nuxt/ui'
import type { IDCardImages } from '~/types/verification'


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

const {data: verification} = await useFetch('/api/verification/ongoing-verification?id=' + route.params.id)

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