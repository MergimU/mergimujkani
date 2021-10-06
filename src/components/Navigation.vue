<template>
  <nav class="navigation">
    <ul>
      <li><router-link to="/about-me" class="active">About me</router-link></li>
      <li><a target="_blank" href="https://drive.google.com/file/d/14am7ZYVDI0yB_rAQ7v6Ucfj9Zn6cXE3W/view?usp=sharing">Resume</a></li>
      <!-- <li><a href="mailto:mergim.ujkani@gmail.com">Contact</a></li> -->
    </ul>
  </nav>
</template>

<style lang="scss">
  .navigation {
    position: absolute;
    top: 45px;
    left: 100px;
    color: #fff;
    background-color: var(--brand-2);
    padding-bottom: 20px;

    @media (max-width: 768px) {
      left: 40px;
      background-color: transparent;
    }

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
