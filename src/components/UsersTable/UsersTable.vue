<template>
  <div>
    <ul>
      <li
        v-for="user in usersStore.users"
        :key="user.id"
      >
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';

const usersStore = useUsersStore();
onMounted(() => {
  usersStore.getUsers();
});
</script>
