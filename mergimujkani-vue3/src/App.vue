<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavigationBar from './components/NavigationBar.vue';
import BackgroundAnimation from './components/BackgroundAnimation.vue';
</script>

<template>
  <div class="container">
    <NavigationBar />
    <BackgroundAnimation />
  </div>

  <RouterView />
</template>

