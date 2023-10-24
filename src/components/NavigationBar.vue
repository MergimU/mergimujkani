<script lang="ts">
export default {
  mounted() {
    const nav = document.querySelector('.navigation') as HTMLElement;
    const menuToggle = 30;
    let cache: Event | null = null;
    window.addEventListener('scroll', (e) => {
      if (!cache) {
        setTimeout(() => {
          // Add all the code
          const positionY = window.scrollY;
          if (positionY > menuToggle) {
            nav.style.opacity = '0';
          } else {
            nav.style.opacity = '1';
          }
          cache = null;
        }, 300);
        cache = e;
      }
    });
  },
};
</script>

<template>
  <nav class="navigation">
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about-me">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/work">Work</RouterLink>
      </li>
    </ul>
  </nav>
</template>


