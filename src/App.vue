<template>
  <div>
    <Navigation class="mb-3"/>
    <router-view class="container"></router-view>
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue';

</script>
<style>
 @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap');

body{
  background-color: #F05941;
  font-family: 'Cinzel Decorative', serif;
}
</style>

