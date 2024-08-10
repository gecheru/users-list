<template>
  <VDialog
    :model-value="isOpen"
    @update:model-value="updateOpenState"
    @after-leave="resetForm"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <CustomButton v-bind="activatorProps"> Add new user </CustomButton>
    </template>

    <VCard>
      <VCardItem class="text-center">
        <VCardTitle>{{ modalTitle }}</VCardTitle>
      </VCardItem>
      <VDivider />
      <div class="pt-6 pb-0 px-8">
        <VForm
          ref="form"
          @submit.prevent="handleSubmit"
          :id="formId"
        >
          <CustomTextField
            v-model="newUser.firstName"
            label="Name"
            :rules="[required, maxLength(10)]"
          />
          <CustomTextField
            v-model="newUser.lastName"
            label="Last name"
            :rules="[required, maxLength(10)]"
          />
          <CustomTextField
            v-model="newUser.email"
            label="Email"
            :rules="[required, email, maxLength(20)]"
          />
        </VForm>
      </div>
      <VCardActions class="pt-4 pb-6 px-8">
        <CustomButton
          @click="closeModal"
          variant="plain"
          >Close</CustomButton
        >
        <CustomButton
          :form="formId"
          type="submit"
          :disabled="!isEdited"
          >Save</CustomButton
        >
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUsersStore } from '@/stores/users';
import { required, email, maxLength } from '@/shared/validation';
import type { UserCreateRequest } from '@/types/User/UserCreateRequest';
import { VForm } from 'vuetify/components/VForm';
import CustomTextField from '@/shared/ui/CustomTextField/CustomTextField.vue';
import CustomButton from '@/shared/ui/CustomButton/CustomButton.vue';
import type { User } from '@/types/User/User';
import { isEqual } from '@/shared/utils/object';

const formId = 'user-form';
const isOpen = ref(false);
const form = ref<InstanceType<typeof VForm> | null>(null);
const initialUser = ref<UserCreateRequest | User>({ firstName: '', lastName: '', email: '' });
const newUser = ref<UserCreateRequest | User>({ ...initialUser.value });

const usersStore = useUsersStore();

const isEditMode = computed(() => isUser(newUser.value));
const modalTitle = computed(() => (isEditMode.value ? 'Edit user' : 'Add new user'));
const isEdited = computed(() => !isEqual(initialUser.value, newUser.value));

const updateOpenState = (value: boolean) => {
  isOpen.value = value;
};

const openModal = (user?: User) => {
  if (user) {
    initialUser.value = { ...user };
    newUser.value = { ...user };
  } else {
    resetForm();
  }
  updateOpenState(true);
};

const closeModal = () => {
  updateOpenState(false);
};

const resetForm = () => {
  initialUser.value = { firstName: '', lastName: '', email: '' };
  newUser.value = { ...initialUser.value };
};

const handleSubmit = async () => {
  if (!isEdited.value || !form.value) return;

  const { valid } = await form.value.validate();
  if (!valid) return;

  if (isEditMode.value && isUser(newUser.value)) {
    usersStore.editUser({ ...newUser.value });
  } else {
    usersStore.addUser({ ...newUser.value });
  }

  closeModal();
};

const isUser = (data: User | UserCreateRequest): data is User => {
  return 'id' in data && 'lastVisitedAt' in data;
};

defineExpose({ openModal });
</script>
