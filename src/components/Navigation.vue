<template>
  <nav class="navigation">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/work">Work</router-link>
      </li>
      <li>
        <router-link to="/about-me">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    const nav = document.querySelector('.navigation');
    const menuToggle = 110;

    let cache = null;
    window.addEventListener('scroll', (e) => {
      if (!cache) {
        setTimeout(() => {
          // Add all the code
          const positionY = window.pageYOffset;
          if (positionY > menuToggle) {
            nav.style.opacity = '0';
          } else {
            nav.style.opacity = '1';
          }
          console.log(e);
          cache = null;
        }, 300);
        cache = e;
      }
    });
  },
};

</script>
