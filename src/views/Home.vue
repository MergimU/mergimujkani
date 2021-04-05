<template>
  <div class="home">
    <div class="home__inner">
      <div class="home__left">
        <Profile/>
      </div>
      <div class="home__right">
        <Navigation />
        <AboutMe v-if="$route.name == 'AboutMe'" />
        <Work v-else-if="$route.name === 'Work'" />
        
      </div>
    </div>
  </div>
</template>

<script>
  import Profile from '../components/Profile';
  import AboutMe from '../components/AboutMe';
  import Work from '../views/Work';
  import Navigation from '../components/Navigation';

  export default {
    name: 'home',
    components: {
      Navigation,
      Profile,
      AboutMe,
      Work
    },
  };

</script>

<style lang="scss">
  .home {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;

    @media (max-width: 1200px) {
      padding: 0;
    }
    
    &__inner {
      background-color: var(--brand-2);
      width: 100%;
      max-width: 1300px;
      height: 100%;
      max-height: 740px;
      border-radius: 50px;
      overflow: hidden;
      display: flex;

      @media (max-width: 1200px) {
        max-width: none;
        max-height: none;
        border-radius: 0;
      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        height: 60%;
        width: 100%;
        transform: translateY(-50%) rotate(-31deg) scaleX(2);
        transform-origin: center center;
        background-color: rgba(#000, 0.02);
        z-index: -1;

        @media (max-width: 1200px) {
          display: none;
        }
      }
    }

    &__left {
      width: 100%;
      max-width: 500px;
      height: 100%;
      display: flex;

      @media (max-width: 1200px) {
        max-width: 300px;
      }
    }

    &__right {
      color: #fff;
      flex: 1;
      position: relative;
      padding: 45px 40px 40px 100px;
    }
  }

</style>
