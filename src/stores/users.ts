import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/types/User/User';
import type { UserCreateRequest } from '@/types/User/UserCreateRequest';
import { BASE_FILE_NAME } from '@/shared/constants/baseFileName';
import { timeToTimestamp } from '@/shared/utils/date';

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([]);
  const loading = ref(false);

  const fetchUsers = async () => {
    try {
      loading.value = true;
      const response = await fetch(`/${BASE_FILE_NAME}`);
      const data = await response.json();
      users.value = data;
    } catch (_) {
      users.value = [];
    } finally {
      loading.value = false;
    }
  };

  const addUser = (userCreateRequest: UserCreateRequest) => {
    const newUserId = users.value.length + 1;
    const newUser: User = {
      ...userCreateRequest,
      id: newUserId,
      lastVisitedAt: timeToTimestamp(Date.now())
    };

    users.value = [...users.value, newUser];
  };

  const editUser = (updatedUser: User) => {
    users.value = users.value.map((user) => (user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (user: User) => {
    users.value = users.value.filter((us) => us.id !== user.id);
  };

  return { users, loading, fetchUsers, addUser, editUser, deleteUser };
});
