<template>
  <div id="app" class="container">
    <BackgroundAnimation />
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import BackgroundAnimation from '@/components/BackgroundAnimation.vue';

export default {
  components: {
    Navigation,
    BackgroundAnimation,
  },
};
</script>
