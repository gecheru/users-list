import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/types/User/User';
import type { UserCreateRequest } from '@/types/User/UserCreateRequest';
import { BASE_FILE_NAME } from '@/shared/constants/baseFileName';

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/${BASE_FILE_NAME}`);
      const data = await response.json();
      users.value = data;
    } catch (_) {
      users.value = [];
    }
  };

  const addUser = async (userCreateRequest: UserCreateRequest) => {
    const newUserId = users.value.length + 1;
    const newUser: User = {
      ...userCreateRequest,
      id: newUserId,
      lastVisitedAt: Date.now()
    };

    users.value = [...users.value, newUser];
  };

  const editUser = (updatedUser: User) => {
    users.value = users.value.map((user) => (user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (user: User) => {
    users.value = users.value.filter((us) => us.id !== user.id);
  };

  return { users, fetchUsers, addUser, editUser, deleteUser };
});
