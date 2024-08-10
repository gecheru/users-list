<template>
  <CustomTable
    :headers="headers"
    :items="usersStore.users"
    :loading="usersStore.loading"
    :search="search"
  >
    <template v-slot:item.lastVisitedAt="{ item }">
      {{ useFormatDate(item.lastVisitedAt) }}
    </template>
    <template v-slot:item.actions="{ item }">
      <CustomButton
        size="small"
        variant="plain"
        icon="mdi-pencil"
        @click="handleEditClick(item)"
      />
      <CustomButton
        size="small"
        variant="plain"
        icon="mdi-delete"
        color="error"
        @click="handleDeleteClick(item)"
      />
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { TableHeaders } from '@/types/Table/TableHeaders';
import type { User } from '@/types/User/User';
import CustomTable from '@/shared/ui/CustomTable/CustomTable.vue';
import CustomButton from '@/shared/ui/CustomButton/CustomButton.vue';
import { useUsersStore } from '@/stores/users';
import { useFormatDate } from '@/shared/composables/formatDate';

defineProps<{
  search: string;
}>();
const emit = defineEmits<{
  edit: [user: User];
  delete: [user: User];
}>();

const usersStore = useUsersStore();

const headers = ref<TableHeaders>([
  {
    key: 'firstName',
    title: 'First name',
    width: '20%'
  },
  {
    key: 'lastName',
    title: 'Last name',
    width: '20%'
  },
  {
    key: 'email',
    title: 'Email',
    width: '23%'
  },
  {
    key: 'lastVisitedAt',
    title: 'Last visited',
    width: '23%'
  },
  {
    key: 'actions',
    align: 'end',
    sortable: false,
    width: '14%'
  }
]);

const handleEditClick = (user: User) => {
  emit('edit', user);
};
const handleDeleteClick = (user: User) => {
  emit('delete', user);
};

onMounted(() => {
  usersStore.fetchUsers();
});
</script>
