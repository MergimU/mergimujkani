<template>
  <div class="about-me">
    <p class="about-me__header">
      A little bit
      <span class="about">about</span>
      me<span>.</span>
    </p>
    <p class="about-me__description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni non dicta iste incidunt numquam placeat, dignissimos sapiente est veritatis quia maxime minus similique, explicabo itaque excepturi enim nostrum alias dolores cum vitae ducimus modi atque eius harum! Tempore asperiores at voluptatem repellendus, facilis ipsam delectus commodi. Totam error architecto laudantium dolor expedita ducimus fugiat eligendi assumenda, in quaerat, excepturi facere et cum cupiditate quae placeat! Consequatur alias delectus necessitatibus quis soluta, et ad labore adipisci aut corporis magnam officia fugiat.
    </p>
  </div>
</template>

<style lang="scss">
  .about-me {
    padding-top: 100px;
    font-family: 'Raleway', sans-serif;

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
    }
  }
</style>
