<template>
  <VDialog
    :model-value="isOpen"
    @update:model-value="updateOpenState"
    @after-leave="reset"
  >
    <VCard>
      <VCardItem class="text-center">
        <VCardTitle>Delete user</VCardTitle>
      </VCardItem>
      <VDivider />
      <VCardText class="text-center">Are you sure you want to delete the user?</VCardText>
      <VCardActions class="pt-4 pb-6 px-8">
        <CustomButton
          @click="closeModal"
          variant="plain"
          >Close</CustomButton
        >
        <CustomButton
          @click="deleteUser"
          color="error"
          >Delete</CustomButton
        >
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from '@/stores/users';
import type { UserCreateRequest } from '@/types/User/UserCreateRequest';
import CustomButton from '@/shared/ui/CustomButton/CustomButton.vue';
import type { User } from '@/types/User/User';

const isOpen = ref(false);
const user = ref<User | null>(null);

const usersStore = useUsersStore();

const updateOpenState = (value: boolean) => {
  isOpen.value = value;
};

const openModal = (usr?: User) => {
  if (usr) {
    user.value = { ...usr };
  }
  updateOpenState(true);
};

const closeModal = () => {
  updateOpenState(false);
};

const deleteUser = () => {
  if (user.value) {
    usersStore.deleteUser(user.value);
  }
  closeModal();
};

const reset = () => {
  user.value = null;
};

defineExpose({ openModal });
</script>
