<template>
  <VTextField v-bind="{ ...$attrs, ...inputProps }" />
</template>

<script lang="ts" setup>
import type { TextFieldProps } from '@/types/TextField/TextFieldProps';
import { computed } from 'vue';

type CustomProps = {};

const props = defineProps<CustomProps & TextFieldProps>();

const defaultProps: TextFieldProps = {
  prependInnerIcon: 'mdi-magnify',
  variant: 'outlined',
  hideDetails: true,
  singleLine: true,
  density: 'compact'
};

const inputProps = computed(() => {
  return {
    ...defaultProps,
    ...props
  };
});
</script>
