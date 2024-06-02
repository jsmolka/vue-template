<template>
  <SelectRoot v-model="selectModelValue" v-bind="forwarded">
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
import { SelectRoot, useForwardPropsEmits } from 'radix-vue';
import { computed } from 'vue';
import SelectContent from './SelectContent.vue';
import SelectItem from './SelectItem.vue';
import SelectItemText from './SelectItemText.vue';
import SelectTrigger from './SelectTrigger.vue';
import SelectValue from './SelectValue.vue';

const modelValue = defineModel({
  type: null,
  required: false,
});

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },

  placeholder: {
    type: String,
    default: '',
  },

  class: {
    type: [String, Array, Object],
    default: null,
  },

  open: { type: Boolean, required: false },
  defaultOpen: { type: Boolean, required: false },
  defaultValue: { type: String, required: false },
  dir: { type: String, required: false },
  name: { type: String, required: false },
  autocomplete: { type: String, required: false },
  disabled: { type: Boolean, required: false },
  required: { type: Boolean, required: false },
});
const emits = defineEmits(['update:open']);

const delegatedProps = computed(() => {
  const { modelValue: _1, class: _2, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

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
