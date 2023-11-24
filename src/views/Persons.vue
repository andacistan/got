<template>
  <div class="card bg-danger p-3">
    <div class="display-3 text-center text-white" v-if="isLoading">
      Loading...
    </div>
    <div v-for="(details, index) in character" :key="index">
      <h1>{{ details.name }}</h1>
      <router-link
        :to="`/houses/${details.house.slug}`"
        class="fs-4 text-decoration-none text-dark"
        v-if="details.house"
      >
        {{ details.house.name }}
      </router-link>
    </div>

    <div v-for="(quote, index) in quotes" :key="index">
      <p class="fs-6 text-white">- {{ quote.sentence }}</p>
    </div>
    <button class="btn btn-warning" @click="changeQuotes">Change Quotes</button>
  </div>
</template>
  
  <script setup>
import { ref, inject, onMounted } from "vue";
import { useRoute } from "vue-router";
const appAxios = inject("appAxios");

const route = useRoute();
const character = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  await appAxios.get(`/character/${route.params.name}`).then((response) => {
    isLoading.value = false;
    character.value = response.data;
  });
});

const quotes = ref([]);
const changeQuotes = async () => {
  await appAxios.get(`/author/${route.params.name}/5`).then((response) => {
    console.log(response.data);
    isLoading.value = false;
    quotes.value = response.data;
  });
};
changeQuotes();

</script>
<style>
</style>