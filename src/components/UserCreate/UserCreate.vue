<template>
  <VDialog
    v-model="isOpen"
    :persistent="isBusy"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <CustomButton v-bind="activatorProps"> Add new user </CustomButton>
    </template>

    <VCard :loading="isBusy">
      <VCardItem class="text-center">
        <VCardTitle> Add new user </VCardTitle>
      </VCardItem>
      <VDivider />
      <div class="pt-6 pb-0 px-8">
        <VForm
          ref="form"
          @submit.prevent="handleSubmit"
          :id="formId"
        >
          <CustomTextField
            v-model="newUserModel.firstName"
            label="Name"
            :rules="[required]"
          />
          <CustomTextField
            v-model="newUserModel.lastName"
            label="Last name"
            :rules="[required]"
          />
          <CustomTextField
            v-model="newUserModel.email"
            label="Email"
            :rules="[required, email]"
          />
        </VForm>
      </div>
      <VCardActions class="pt-4 pb-6 px-8">
        <CustomButton
          @click="closeDialog"
          variant="plain"
        >
          Close
        </CustomButton>
        <CustomButton
          :loading="isBusy"
          :form="formId"
          type="submit"
        >
          Submit
        </CustomButton>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useUsersStore } from '@/stores/users';
import { required, email } from '@/shared/validation';
import type { UserCreateRequest } from '@/types/User/UserCreateRequest';
import type { VForm } from 'vuetify/components/VForm';
import CustomTextField from '@/shared/ui/CustomTextField/CustomTextField.vue';
import CustomButton from '@/shared/ui/CustomButton/CustomButton.vue';

const formId = 'user-form';
const usersStore = useUsersStore();
const isOpen = ref(false);
const isBusy = ref(false);
const form = ref<VForm | null>(null);
const newUserModel = reactive<UserCreateRequest>({
  firstName: '',
  lastName: '',
  email: ''
});
const closeDialog = () => {
  isOpen.value = false;
  form.value!.reset();
  isBusy.value = false;
};
const handleSubmit = async () => {
  isBusy.value = true;
  const { valid } = await form.value!.validate();
  if (valid) {
    await usersStore.addUser(newUserModel);
    closeDialog();
  }
  isBusy.value = false;
};
</script>
