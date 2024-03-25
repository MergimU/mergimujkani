<script lang="ts">

import { onMounted } from 'vue';


export default {
  name: 'Background Animation',
  data() {
    return {
      mobileSize: 768,
      bgOverlayPosition: {
        x: 0,
        y: 0
      },
      mouseMoveStarted: false
    }
  },

  mounted() {
    if (window.innerWidth >= this.mobileSize) {
      window.addEventListener('mousemove', this.handleMouseMove)
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= this.mobileSize) {
        window.addEventListener('mousemove', this.handleMouseMove)
      } else {
        window.removeEventListener('mousemove', this.handleMouseMove)
        this.bgOverlayPosition.x = 0;
        this.bgOverlayPosition.y = 0;
      }
    })
  },

  methods: {
    handleMouseMove(e: any) {
      setTimeout(() => {
        this.bgOverlayPosition.x = e.clientX + window.scrollX
        this.bgOverlayPosition.y = e.clientY + window.scrollY
      }, this.mouseMoveStarted ? 60 : 0)
      this.mouseMoveStarted = true;
    },
  },

}

</script>

<template>
  <div class="background">
    <!-- <div class="background__mobile">
      <div class="background__mobile__bg-1"></div>
      <div class="background__mobile__bg-2"></div>
    </div> -->
    <div v-show="mouseMoveStarted"
         class="background__overlay-bg"
         :style="{ left: (bgOverlayPosition.x - 100) + 'px', top: (bgOverlayPosition.y - 100) + 'px' }">
    </div>
  </div>
</template>
