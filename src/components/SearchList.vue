<template>
  <div class="mt-3">
  <h1>{{path.toUpperCase()}}</h1>
    <input type="text" class="form-control"  :placeholder="`Search ${path}...`" v-model="searchText" />
    <hr />
    <ul class="list-group col-sm-12 col-md-9 m-auto">
        <router-link class="list-group-item" v-for="i in searchData" :key="i" :to="`/${path}/${i.slug}`">{{ i.name }}</router-link>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref,inject, watchEffect } from "vue";
import { useRoute } from "vue-router";
const appAxios = inject("appAxios")

const searchText = ref("");
const route = useRoute()
const path = ref(route.meta.component =='characters' ? 'persons' : route.meta.component)
const searchList = ref([]);

const searchData = computed(() =>
searchList.value.filter((data) =>
  data.name.toLowerCase().includes(searchText.value.toLowerCase())
));

watchEffect(()=>{
  path.value=route.meta.component =='characters' ? 'persons' : route.meta.component
  appAxios.get(`/${route.meta.component}`).then((response) => {
    searchList.value = response.data;
});
})

</script>

<style>
.list-group-item{
  background-color: #FFCD4B;
}
.list-group-item:hover{
background-color:#BE3144;
}
</style>