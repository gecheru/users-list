import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/types/User/User';
import { BASE_URL } from '@/shared/constants/baseUrl';
import type { UserCreateRequest } from '@/types/User/UserCreateRequest';

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([]);

  const getUsers = () => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => (users.value = data))
      .catch(() => (users.value = []));
  };

  const addUser = async (userCreateRequestModel: UserCreateRequest) => {
    const newUserId = users.value.length + 1;
    const newUser: User = {
      ...userCreateRequestModel,
      id: newUserId,
      lastVisitedAt: Date.now()
    };

    users.value = [...users.value, newUser];
  };

  const editUser = (user: User) => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => (users.value = data));
  };

  const deleteUser = (userId: number) => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => (users.value = data));
  };

  return { users, getUsers, addUser, editUser, deleteUser };
});
