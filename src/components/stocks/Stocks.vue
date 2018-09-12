<template>
  <div>
    <h2>Current Stock Market</h2>
    <transition-group
        name="staggered-fade"
        mode="out-in"
        tag="div"
        class="row"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave" appear>
      <stock 
        v-for="(stock, index) in stocks" 
        :key="index" 
        :data-index="index"
        :stock-obj="stock"
        class="stock-card"></stock>
    </transition-group>
  </div>
</template>

<script>
import { TweenMax, Back } from 'gsap/all'
import { mapGetters } from 'vuex'
import Stock from './Stock'

export default {
  components: {
    'stock': Stock
  },
  computed: {
    ...mapGetters([
      'stocks'
    ])
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 75
      setTimeout(function () {
        TweenMax.fromTo(
          el,
          1,
          {
            opacity: 0,
            x: -60
          },
          {
            opacity: 1,
            x: 0,
            ease: Back.easeInOut,
            onComplete: done
          }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 75
      setTimeout(function () {
        TweenMax.to(
          el,
          1,
          {
            opacity: 0,
            x: -60,
            onComplete: done
          }
        )
      }, delay)
    }
  }
}
</script>

<style scoped>
.stock-card {
  margin-bottom: 25px;
}
/* base */
.stock-list {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.stock-list-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.stock-list-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.stock-list-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.stock-list-enter,
.stock-list-leave-to {
  opacity: 0;
}
</style>
