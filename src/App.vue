<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { BASE_URL } from '@/constants/baseUrl';

const users = ref([]);
onMounted(() => {
  fetch(`${BASE_URL}userList.json`, {
    headers: { 'Content-type': 'application/json' }
  })
    .then((res) => res.json())
    .then((data) => (users.value = data));
});
</script>

<template>
  <header>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user }}
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
