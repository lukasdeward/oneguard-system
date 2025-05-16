<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <template v-if="loading">
      <UIcon
        name="i-line-md:loading-twotone-loop"
      />
    </template>
    <template v-else-if="error">
      <UButton
        leading-icon="i-lucide-refresh-cw"
        @click="$emit('retry')"
        class="w-32"
      >
        Retry
      </UButton>
      <p class="text-red-500">{{ error }}</p>
    </template>
    <template v-else>
      <h2 class="text-2xl font-bold">Verification Complete</h2>
      <p class="text-center">Thank you for completing the verification process.</p>
    </template>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  loading: boolean,
  error: String | null
}>();

</script>

<style>

</style>