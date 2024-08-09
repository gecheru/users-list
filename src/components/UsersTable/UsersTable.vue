<template>
  <CustomTable
    :headers="headers"
    :items="users"
    :loading="loading"
    :search="search"
  >
    <template v-slot:item.actions="{ item }">
      <CustomButton
        size="small"
        variant="plain"
        icon="mdi-pencil"
        @click="editUser(item)"
      />
      <CustomButton
        size="small"
        variant="plain"
        icon="mdi-delete"
        color="error"
        @click="deleteUser(item)"
      />
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TableHeaders } from '@/types/Table/TableHeaders';
import type { User } from '@/types/User/User';
import CustomTable from '@/shared/ui/CustomTable/CustomTable.vue';
import CustomButton from '@/shared/ui/CustomButton/CustomButton.vue';

defineProps<{
  users: User[];
  loading: boolean;
  search: string;
}>();

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
const editUser = (user: User) => {
  console.log('edit', user);
};
const deleteUser = (user: User) => {
  console.log('delete', user);
};
</script>
