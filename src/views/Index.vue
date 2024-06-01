<template>
  <div class="flex flex-col gap-4 p-4 mx-auto max-w-sm">
    <h1>Button</h1>
    <div class="grid grid-cols-2 gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button disabled variant="default">Default</Button>
      <Button disabled variant="secondary">Secondary</Button>
      <Button disabled variant="outline">Outline</Button>
      <Button disabled variant="ghost">Ghost</Button>
      <Button variant="outline" size="icon">
        <DotsVerticalIcon />
      </Button>
      <Button variant="ghost" size="icon">
        <DotsVerticalIcon />
      </Button>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { DotsVerticalIcon } from '@radix-icons/vue';
</script>

<style scoped>
h1 {
  @apply text-lg;
  @apply text-shade-1;
  @apply font-semibold;
}
</style>
