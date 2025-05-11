<template>
  <div>

  <UStepper ref="stepper" :items="items" class="w-full mt-8" disabled>
    <template #content="{ item }">

      <div class="flex flex-col items-center justify-center">

      <VerificationStart
        v-if="item?.component == 'VerificationStart'"
        @next="nextPage()"
      ></VerificationStart>
      
      <VerificationFaceScan
        v-if="item?.component == 'VerificationFaceScan'"
        @next="nextPage()"
      ></VerificationFaceScan>
      <VerificationIdScan
        v-else-if="item?.component == 'VerificationIdScan'"
        @complete="nextPage()"
      ></VerificationIdScan>
      
    </div>

    </template>
  </UStepper>

  </div>

</template>

<script setup lang="ts">
import { VerificationFaceScan } from '#components'
import type { StepperItem } from '@nuxt/ui'
import type { Human, Config } from '@vladmandic/human'

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
  }
]

const stepper = useTemplateRef('stepper')

const nextPage = () => {
  stepper.value?.next()
}


definePageMeta({
  layout: 'empty'
})

</script>