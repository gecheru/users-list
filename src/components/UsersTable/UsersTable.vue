<template>
  <VCard>
    <VDataTable
      :items="usersStore.users"
      :headers="headers"
      :loading="loading"
      :search="search"
      :filter-keys="['firstName', 'lastName']"
    >
      <template v-slot:loading>
        <VSkeletonLoader type="table-row@10"></VSkeletonLoader>
      </template>

      <template v-slot:top>
        <VContainer
          fluid
          class="border-b-thin"
        >
          <VRow
            no-gutters
            justify="space-between"
            align="center"
          >
            <VCol cols="4">
              <VTextField
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                placeholder="Search by any name"
                variant="outlined"
                hide-details
                single-line
                density="compact"
              />
            </VCol>
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
const search = ref('');
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
    title: 'Last visited'
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
