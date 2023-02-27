<template>
  <div class="home">
    <div class="home__info">
      <h2>Hello! My name is</h2>
      <h1>Mergim Ujkani</h1>
      <div>
        <p>I'm a Frontend engineer painting with code. <br>
          Creating eye pleasing UI with great details.<br>
          Curious about the web in the future and its upcoming technologies.
        </p>
        <span class="home__time">{{ time }}</span>
      </div>
      <div class="home__info__social-networks">
        <div class="home__social-networks">
          <a target="_blank"
             href="https://www.linkedin.com/in/mergim-ujkani-5007b783/"
             title="Linkedin">
            <img src="@/assets/images/socials/linkedin-icon.svg"
                 alt="Linkedin">
          </a>
          <a target="_blank"
             href="https://codepen.io/MergimUjkani">
            <img src="@/assets/images/socials/codepen-icon.svg"
                 alt="Codepen"
                 title="Codepen">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: null
    }
  },
  mounted() {
    this.calcTime('+1');

    setInterval(() => {
      this.calcTime('+1');
    }, 1000);
  },

  methods: {
    calcTime(offset) {
      var d = new Date();
      var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      var nd = new Date(utc + (3600000 * offset));
      return this.time = `${nd.getHours()}:${nd.getMinutes()}:${nd.getSeconds()} ${d.getHours() >= 12 ? 'pm' : 'am'} - Kosovo, Prishtina`;
    }
  }
}
</script>

<style lang="scss">
// Home
</style>
