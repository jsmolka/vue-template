<template>
  <RouterView />
</template>

<script>
import { useUpdateApp } from '@/composables/useUpdateApp';

useUpdateApp();
</script>
