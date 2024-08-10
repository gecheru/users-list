<template>
  <VContainer class="pt-8">
    <VCard>
      <UsersFilter>
        <VCol cols="4">
          <CustomSearchField
            v-model="search"
            placeholder="Search by any name"
          />
        </VCol>
        <VCol cols="auto">
          <UserEdit ref="editModal" />
          <UserDelete ref="deleteModal" />
        </VCol>
      </UsersFilter>
      <UsersTable
        :search
        @edit="handleEdit"
        @delete="handleDelete"
      />
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UsersTable from '@/components/UsersTable/UsersTable.vue';
import UsersFilter from '@/components/UsersFilter/UsersFilter.vue';
import UserEdit from '@/components/UserEdit/UserEdit.vue';
import UserDelete from '@/components/UserDelete/UserDelete.vue';
import CustomSearchField from '@/shared/ui/CustomSearchField/CustomSearchField.vue';
import type { User } from '@/types/User/User';

const search = ref('');
const editModal = ref<InstanceType<typeof UserEdit> | null>(null);
const deleteModal = ref<InstanceType<typeof UserEdit> | null>(null);

const handleEdit = (user: User) => {
  editModal.value?.openModal(user);
};
const handleDelete = (user: User) => {
  deleteModal.value?.openModal(user);
};
</script>
