<template>
  <VContainer class="pt-8">
    <VCard>
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
            <UserEdit />
          </VCol>
        </VRow>
      </VContainer>
      <UsersTable
        :users="usersStore.users"
        :loading
        :search
      />
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import UsersTable from './components/UsersTable/UsersTable.vue';
import { useUsersStore } from './stores/users';
import { onMounted, ref } from 'vue';
import UserEdit from '@/components/UserEdit/UserEdit.vue';
import CustomSearchField from '@/shared/ui/CustomSearchField/CustomSearchField.vue';

const usersStore = useUsersStore();
const search = ref('');
const loading = ref(false);

onMounted(() => {
  usersStore.fetchUsers();
});
</script>
