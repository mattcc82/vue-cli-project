<template>
  <div id="app">
    <div class="jumbotron">
      <h1>Routing / SPA</h1>
      <p class="lead">Using vue-router</p>
    </div>
    <div class="container">
      <transition name="slide-fade" mode="out-in">
        <router-view name="header-top"></router-view>
      </transition>
      <transition name="slide-fade" mode="out-in">
        <router-view class="view-margin"></router-view>
      </transition>
      <transition name="slide-fade" mode="out-in">
        <router-view name="header-bottom"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    'c-header': Header
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
.view-margin {
  margin-top: 20px;
  margin-bottom: 20px;
}
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
