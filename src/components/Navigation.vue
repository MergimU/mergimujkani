<template>
  <nav class="navigation">
    <ul>
      <li><router-link to="/about-me" class="active">About me</router-link></li>
      <li><a href="#">Resume</a></li>
      <li><a href="#">Contact</a></li>
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
