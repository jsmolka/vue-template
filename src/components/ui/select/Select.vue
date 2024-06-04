<template>
  <SelectRoot v-model="selectModelValue" v-bind="$attrs">
    <SelectTrigger :class="props.class">
      <SelectValue
        :class="{ 'text-shade-3': selectModelValue == null }"
        :placeholder="placeholder"
      />
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="(item, index) in items" :value="index.toString()">
        <slot name="item" :item="item" :index="index">
          <SelectItemText>
            {{ item }}
          </SelectItemText>
        </slot>
      </SelectItem>
    </SelectContent>
  </SelectRoot>
</template>

<script setup>
import { computed } from 'vue';
import SelectContent from './SelectContent.vue';
import SelectItem from './SelectItem.vue';
import SelectItemText from './SelectItemText.vue';
import SelectRoot from './SelectRoot.vue';
import SelectTrigger from './SelectTrigger.vue';
import SelectValue from './SelectValue.vue';

const modelValue = defineModel({
  required: false,
});

const props = defineProps({
  items: { type: Array, default: [] },
  placeholder: { type: String, required: false },
  class: { type: [String, Array, Object], required: false },
});

const modelIndex = computed(() => {
  return props.items.indexOf(modelValue.value);
});

const selectModelValue = computed({
  get() {
    return modelIndex.value === -1
      ? undefined // For `placeholder` to work
      : modelIndex.value.toString();
  },
  set(value) {
    const index = parseInt(value);
    if (modelIndex.value !== index) {
      modelValue.value = props.items[index];
    }
  },
});
</script>
