<template>
  <nav class="navigation">
    <ul>
      <li><a href="#" class="active">About</a></li>
      <li><a href="#">Interests</a></li>
      <li><a href="#">Portfolio</a></li>
    </ul>
  </nav>
</template>

<style lang="scss">
  .navigation {
    position: absolute;
    top: 45px;
    left: 100px;
    color: #fff;

    ul {
      display: flex;

      li {
        padding-right: 20px;
        text-decoration: none;

        a {
          color: #fff;
          font-family: 'Raleway', sans-serif;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          font-weight: 500;
          

          &.active {
            color: var(--brand-1);
            border-color: var(--brand-1);
          }
        }
      }
    }
  }
</style>
