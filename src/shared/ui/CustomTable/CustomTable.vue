<template>
  <VCard>
    <VDataTable v-bind="{ ...$attrs, ...tableProps }">
      <template v-slot:loading>
        <VSkeletonLoader type="table-row@10"></VSkeletonLoader>
      </template>

      <template
        v-for="(_, name) in slots"
        v-slot:[name]="scope"
      >
        <!-- @vue-ignore -->
        <slot
          :name="name"
          v-bind="scope"
        />
      </template>
    </VDataTable>
  </VCard>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { VDataTable } from 'vuetify/components/VDataTable';

type Props = VDataTable['$props'];
interface TableProps extends /* @vue-ignore */ Props {}
type Slots = VDataTable['$slots'];

defineOptions({ inheritAttrs: false });
const props = defineProps<TableProps>();
const slots = defineSlots<Slots>();

const defaultProps: Props = {
  mobile: null,
  mobileBreakpoint: 'sm'
};
const tableProps = computed(() => {
  return {
    ...defaultProps,
    ...props
  };
});
</script>
