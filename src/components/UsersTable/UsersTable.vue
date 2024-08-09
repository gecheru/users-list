<template>
  <VCard>
    <VDataTable
      :items="usersStore.users"
      :headers="headers"
      :loading="loading"
      :search="search"
      :filter-keys="['firstName', 'lastName']"
      :mobile="null"
      mobile-breakpoint="sm"
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
              <CustomSearchField
                v-model="search"
                placeholder="Search by any name"
              />
            </VCol>
            <VCol cols="auto">
              <UserCreate />
            </VCol>
          </VRow>
        </VContainer>
      </template>

      <template v-slot:item.lastVisitedAt="{ item }">
        {{ useFormatDate(item.lastVisitedAt) }}
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
import { useFormatDate } from '@/shared/composables/formatDate';
import CustomSearchField from '../CustomSearchField/CustomSearchField.vue';

const usersStore = useUsersStore();
const loading = ref(false);
const search = ref('');
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
onMounted(() => {
  usersStore.getUsers();
});
</script>
