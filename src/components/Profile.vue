<template>
  <div class="profile">
    <h1 class="profile__name"><span>Mergim</span> Ujkani</h1>
    <div class="profile__banner"></div>
    <div class="profile__image"></div>
  </div>
</template>

<style lang="scss">
  .profile {
    background-color: #fff;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    position: relative;

    &__name {
      font-size: 24px;
      font-weight: 700;
      font-family: 'Raleway', sans-serif;
      text-align: center;
      padding-top: 40px;

      span {
        color: var(--brand-1);
      }
    }

    &__image {
      width: 90%;
      height: 75%;
      background-color: var(--brand-2);
      position: absolute;
      bottom: 10%;
      left: 5%;

      background: url('~@/assets/images/mergimujkani.jpg') no-repeat bottom left;
    }

    &__banner {
      height: 270px;
      width: 800px;
      position: absolute;
      bottom: 30%;
      right: -40px;
      background-color: var(--brand-1);
    }
  }

</style>
