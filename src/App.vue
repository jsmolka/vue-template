<template>
  <RouterView />
  <Component v-if="layout" :is="layout.component" v-bind="layout.props">
    <RouterView />
  </Component>
  <RouterView v-else />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const layout = computed(() => route.meta.layout);
</script>
