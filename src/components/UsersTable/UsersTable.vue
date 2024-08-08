<template>
  <VCard>
    <VDataTable
      :items="usersStore.users"
      :headers="headers"
      :loading="loading"
    >
      <template v-slot:loading>
        <VSkeletonLoader type="table-row@10"></VSkeletonLoader>
      </template>

      <template v-slot:top>
        <VContainer
          fluid
          class="border-b-thin"
        >
          <VRow no-gutters>
            <VCol></VCol>
            <VCol cols="auto">
              <UserCreate />
            </VCol>
          </VRow>
        </VContainer>
      </template>

      <template v-slot:item.actions="{ item }">
        <VBtn
          size="small"
          variant="plain"
          icon="mdi-pencil"
          @click="editUser(item)"
        />
        <VBtn
          size="small"
          variant="plain"
          icon="mdi-delete"
          color="error"
          @click="deleteUser(item)"
        />
      </template>
    </VDataTable>
  </VCard>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUsersStore } from '@/stores/users';
import UserCreate from '@/components/UserCreate/UserCreate.vue';
import type { TableHeaders } from '@/types/Table/TableHeaders';
import type { User } from '@/types/User/User';

const usersStore = useUsersStore();
const loading = ref(false);
const headers = ref<TableHeaders>([
  {
    key: 'firstName',
    title: 'First name'
  },
  {
    key: 'lastName',
    title: 'Last name'
  },
  {
    key: 'email',
    title: 'Email'
  },
  {
    key: 'lastVisitedAt',
    title: 'Last visited',
    sortable: true
  },
  {
    key: 'actions',
    align: 'end',
    sortable: false
  }
]);
const editUser = (user: User) => {
  console.log('edit', user);
};
const deleteUser = (user: User) => {
  console.log('delete', user);
};
onMounted(() => {
  usersStore.getUsers();
});
</script>
