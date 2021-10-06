<template>
  <div class="about-me">
    <p class="about-me__header">
      A little bit
      <span class="about">about</span>
      me<span>.</span>
    </p>
    <p class="about-me__description">
      I’m Mergim Ujkani a passionate, self-motivated Front-End Developer with 5+
      years of experience developing software digital products.
      <br>
      <br>
      I enjoy coding/implementing detailed front-end experiences -
      mobile, web, and beyond - from quick prototypes to full
      experience simulations.
      <br>
      <br>
      I've had the pleasure to work with new front-end technologies but the tools and technologies I enjoy most are: <a target="_blank" href="https://vuejs.org/">VueJS</a>,
      <a target="_blank" href="https://sass-lang.com/">Sass</a> and SVG animations.
    </p>

    <div class="about-me__socials">
      <a target="_blank" href="https://www.linkedin.com/in/mergim-ujkani-5007b783/"><img src="~@/assets/images/linkedin-icon.svg" alt="Linkedin"></a>
      <a target="_blank" href="https://codepen.io/MergimUjkani/pens/popular"><img src="~@/assets/images/codepen-icon.svg" alt="Codepen"></a>
    </div>
    
  </div>
</template>

<style lang="scss">
  .about-me {
    padding-top: 100px;
    font-family: 'Raleway', sans-serif;
    flex: 1;
    overflow-x: hidden;

    @media (max-width: 768px) {
      padding-top: 20px;
    }

    &__header {
      font-weight: 700;
      font-size: 42px;
      padding-bottom: 30px;

      .about {
        display: block;
      }

      span {
        color: var(--brand-1);
      }
    }

    &__description {
      line-height: 22px;

      a {
        color: #fff;
      }
    }

    &__socials {
      padding-top: 100px;

      a {
        background-color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border-radius: 50px;
        margin-right: 20px;
      }
      
      img {
        width: 18px;
      }
    }
  }

</style>
