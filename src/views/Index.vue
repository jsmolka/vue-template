<template>
  <div class="flex flex-col gap-4 p-4 mx-auto max-w-sm">
    <h1>Button</h1>
    <div class="flex flex-col gap-2">
      <div class="grid grid-cols-2 gap-2">
        <template v-for="variant in ['default', 'secondary', 'outline', 'ghost']">
          <Button v-for="disabled in [false, true]" :variant="variant" :disabled="disabled">
            <span class="capitalize">{{ variant }}</span>
          </Button>
        </template>
      </div>
      <div class="flex gap-2">
        <template v-for="variant in ['outline', 'ghost']">
          <Button :variant="variant" size="icon">
            <DotsVerticalIcon />
          </Button>
        </template>
      </div>
    </div>

    <h1>Checkbox</h1>
    <div class="flex flex-wrap gap-2">
      <Checkbox :model-value="false" />
      <Checkbox :model-value="true" />
      <Checkbox :model-value="true" disabled />
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DotsVerticalIcon } from '@radix-icons/vue';
</script>

<style scoped>
h1 {
  @apply text-lg;
  @apply text-shade-1;
  @apply font-semibold;
}
</style>
