<template>
  <div class="card bg-danger p-3">
    <div class="display-3 text-center text-white" v-if="isLoading">
      Loading...
    </div>
    <div v-for="details in members" :key="details">
      <h1>{{ details.name }}</h1>
      <div v-for="member in details.members" :key="member">
        <router-link
          :to="`/persons/${member.slug}`"
          class="fs-3 text-white text-decoration-none"
        >
          - {{ member.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from "vue";
import { useRoute } from "vue-router";
const appAxios = inject("appAxios");

const route = useRoute();
const members = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  await appAxios.get(`/house/${route.params.name}`).then((response) => {
    isLoading.value = false;
    members.value = response.data;
  });
});
</script>