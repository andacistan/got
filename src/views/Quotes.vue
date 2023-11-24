<template>
  <div>
    <h1>Quotes</h1>
    <button class="btn btn-warning mt-4 mb-4" @click="changeQuotes">Change Quotes</button>

    <div class="brd p-3 rounded-top mb-3" v-for="i in randomQuates" :key="i">
      <p class="fs-3">{{ i.sentence }}</p>
        <router-link class="fs-4 text-white text-decoration-none" :to="`/persons/${i.character.slug}`">
        {{ i.character.name }} 
        </router-link> -
       <router-link class="fs-6 text-white text-decoration-none" :to="`/houses/${i.character.house.slug}`">{{ i.character.house.name}}</router-link>
      </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
const appAxios = inject("appAxios");
const randomQuates = ref([]);

const changeQuotes = () => {
  appAxios.get(`/random/5`).then((response) => {
    randomQuates.value = response.data;
  });
};
changeQuotes();
</script>