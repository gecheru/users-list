<template>
  <VTextField v-bind="{ ...inputClass, ...$attrs, ...inputProps }" />
</template>

<script lang="ts" setup>
import type { TextFieldProps } from '@/types/TextField/TextFieldProps';
import { computed } from 'vue';

type CustomProps = {};

const props = defineProps<CustomProps & TextFieldProps>();

const defaultProps: TextFieldProps = {
  density: 'compact',
  baseColor: 'primary',
  bgColor: 'background',
  variant: 'underlined',
  color: 'primary'
};

const inputProps = computed(() => {
  return {
    ...defaultProps,
    ...props
  };
});
const inputClass = computed(() => {
  return {
    class: 'custom-text-field'
  };
});
</script>

<style>
.custom-text-field + .custom-text-field {
  margin-top: 12px;
}
</style>
