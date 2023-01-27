<template>
  <div>
    <img class="svg-anim-1"
         src="@/assets/images/illustrations/anim-1.svg"
         alt="Codepen"
         title="Codepen">
    <img class="svg-anim-2"
         src="@/assets/images/illustrations/anim-2.svg"
         alt="Codepen"
         title="Codepen">
    <img class="svg-anim-3"
         src="@/assets/images/illustrations/anim-3.svg"
         alt="Codepen"
         title="Codepen">
  </div>
</template>

<style lang="scss">
  .svg-anim-1,
  .svg-anim-2,
  .svg-anim-3 {
    position: absolute;
    z-index: -1;
    transition: .3s;
  }

  .svg-anim-1 {
    top: 0;
    left: 0;
    opacity: 0.2;
  }

  .svg-anim-2 {
    bottom: 2.5rem;
    left: 10%;
    opacity: 0.1;
  }

  .svg-anim-3 {
    top: 50%;
    right: 10%;
    opacity: 0.1;
    transform: rotate(45deg);
  }

</style>
