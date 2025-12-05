<template>
  <RouterView />
</template>

<script setup>
import { useUpdateApp } from '@/composables/useUpdateApp';

useUpdateApp();
</script>
