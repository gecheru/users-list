<template>
  <VBtn v-bind="{ ...btnClass, ...$attrs, ...inputProps }">
    <template
      v-for="(_, name) in slots"
      v-slot:[name]
    >
      <slot :name="name" />
    </template>
  </VBtn>
</template>

<script lang="ts" setup>
import type { VBtn } from 'vuetify/components/VBtn';
import { computed } from 'vue';

type Props = VBtn['$props'];
interface BtnProps extends /* @vue-ignore */ Props {}
type CustomProps = {};
type Slots = VBtn['$slots'];

const props = defineProps<CustomProps & BtnProps>();
const slots = defineSlots<Slots>();
const defaultProps: BtnProps = {
  variant: 'flat',
  color: 'primary'
};

const inputProps = computed(() => {
  return {
    ...defaultProps,
    ...props
  };
});
const btnClass = computed(() => {
  return {
    class: 'custom-button'
  };
});
</script>

<style>
.v-btn.custom-button {
  text-transform: unset;
}
</style>
