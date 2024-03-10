<script lang="ts">
export default {
  data() {
    return {
      time: '',
    };
  },
  mounted() {
    this.calcTime(2);

    setInterval(() => {
      this.calcTime(2);
    }, 1000);
  },

  methods: {
    calcTime(offset: number) {
      const d = new Date();
      const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      const nd = new Date(utc + (3600000 * offset));
      const hours = nd.getHours().toString().padStart(2, '0');
      const minutes = nd.getMinutes().toString().padStart(2, '0');
      const seconds = nd.getSeconds().toString().padStart(2, '0');

      this.time = `${hours}:${minutes}:${seconds} ${d.getHours() >= 12 ? 'pm' : 'am'}`;
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="home__info">
      <h2>Hello! My name is</h2>
      <h1>Mergim Ujkani</h1>
      <div>
        <p><strong>Software Engineer</strong> painting with code. <br>
          Creating eye pleasing UI with great details.<br>
          Curious about the web in the future and its upcoming technologies.
        </p>

        <p class="home__time">
          <span>{{ time }}</span> <span> - Kosovo, Prishtina</span>
        </p>
      </div>
      <div class="home__info__social-networks">
        <div class="home__social-networks">
          <a target="_blank"
             href="https://www.linkedin.com/in/mergim-ujkani-5007b783/"
             title="Linkedin">
            <img src="@/assets/images/socials/linkedin-icon.svg"
                 width="40px"
                 height="20px"
                 alt="Linkedin">
          </a>
          <a target="_blank"
             href="https://codepen.io/MergimUjkani">
            <img src="@/assets/images/socials/codepen-icon.svg"
                 width="40px"
                 height="20px"
                 alt="Codepen"
                 title="Codepen">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>