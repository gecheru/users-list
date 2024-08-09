<template>
  <VTextField v-bind="{ ...$attrs, ...inputProps }" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { VTextField as TextFieldType } from 'vuetify/components/VTextField';

type TextFieldProps = TextFieldType['$props'];
interface Props extends /* @vue-ignore */ TextFieldProps {}
type CustomProps = {};

const props = defineProps<CustomProps & Props>();

const defaultProps: Props = {
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
