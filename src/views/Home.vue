<template>
  <div class="home">
    <div class="home__inner">
      <div class="home__left">
        <Profile/>
      </div>
      <div class="home__right"></div>
    </div>
  </div>
</template>

<script>
  import Profile from '../components/Profile';

  export default {
    name: 'home',
    components: {
      Profile,
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
    
    &__inner {
      background-color: var(--brand-2);
      width: 100%;
      max-width: 1300px;
      height: 100%;
      max-height: 740px;
      border-radius: 50px;
      overflow: hidden;

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
      }
    }

    &__left {
      // background-color: cyan;
      width: 100%;
      max-width: 500px;
      height: 100%;
      display: flex;
    }
  }

</style>
