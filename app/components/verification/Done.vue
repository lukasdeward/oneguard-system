<template>
  <div class="flex flex-col items-center justify-center gap-2 h-96">
    <template v-if="loading">
      <UIcon
        name="i-line-md:loading-twotone-loop"
        size="35"
      />
      <p class="text-center">Checking ID Data</p>
    </template>
    <template v-if="error">
      <UButton
        leading-icon="i-lucide-refresh-cw"
        @click="$emit('retry')"
        class="w-32"
      >
        Retry
      </UButton>
      <p class="text-red-500">{{ error }}</p>
    </template>
    <template v-if="!loading && !error">
      <h2 class="text-2xl font-bold">Verification Complete</h2>
      <p class="text-center">Thank you for completing the verification process.</p>
    </template>
  </div>
</template>

<script lang="ts" setup>


defineProps<{
  error: String | null
}>();

const loading = defineModel();

defineEmits<{
  (e: 'retry'): void
}>();

</script>

<style>

</style>